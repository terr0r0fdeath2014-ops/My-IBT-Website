import { 
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc 
} from 'firebase/firestore';
import { auth, db } from '../firebase';

export interface ProgressItem {
  score: number;
  completedAt: string;
  topicTitle?: string;
  category?: string;
}

export type ProgressMap = Record<string, ProgressItem | number>;

export interface UserProfileData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  isAnonymous: boolean;
  createdAt: string;
  lastActiveAt: string;
  progress: ProgressMap;
}

const GUEST_STORAGE_KEY = 'toefl_guest_progress';
const GUEST_ACTIONS_COUNT_KEY = 'toefl_guest_actions_count';

// --- GUEST LOCAL STORAGE HELPERS ---

export const getGuestProgress = (): ProgressMap => {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error('Error reading guest progress from localStorage', err);
    return {};
  }
};

export const saveGuestProgress = (key: string, score: number, details?: { topicTitle?: string; category?: string }): ProgressMap => {
  const current = getGuestProgress();
  current[key] = {
    score,
    completedAt: new Date().toISOString(),
    topicTitle: details?.topicTitle,
    category: details?.category
  };
  try {
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(current));
    incrementGuestActionsCount();
  } catch (err) {
    console.error('Error saving guest progress to localStorage', err);
  }
  return current;
};

export const getGuestActionsCount = (): number => {
  try {
    return parseInt(localStorage.getItem(GUEST_ACTIONS_COUNT_KEY) || '0', 10);
  } catch {
    return 0;
  }
};

export const incrementGuestActionsCount = (): number => {
  const current = getGuestActionsCount() + 1;
  try {
    localStorage.setItem(GUEST_ACTIONS_COUNT_KEY, current.toString());
  } catch {}
  return current;
};

export const clearGuestProgress = () => {
  try {
    localStorage.removeItem(GUEST_STORAGE_KEY);
    localStorage.removeItem(GUEST_ACTIONS_COUNT_KEY);
  } catch {}
};

// --- DATA MIGRATION ENGINE ---

/**
 * Migrates local guest data into the user's permanent Firestore record.
 * Merges gracefully: if a score already exists for a topic, it retains the highest score achieved.
 */
export const migrateGuestDataToUser = async (user: User): Promise<ProgressMap> => {
  const guestProgress = getGuestProgress();
  const guestItemCount = Object.keys(guestProgress).length;
  
  const userRef = doc(db, 'users', user.uid);
  let finalProgress: ProgressMap = {};

  try {
    const snap = await getDoc(userRef);

    if (snap.exists()) {
      const existingData = snap.data() as UserProfileData;
      const remoteProgress = existingData.progress || {};
      
      // Merge remote + local guest with max-score preservation
      finalProgress = { ...remoteProgress };

      for (const [key, guestVal] of Object.entries(guestProgress)) {
        const guestScore = typeof guestVal === 'number' ? guestVal : guestVal.score;
        const remoteVal = remoteProgress[key];
        const remoteScore = remoteVal 
          ? (typeof remoteVal === 'number' ? remoteVal : remoteVal.score) 
          : -1;

        if (guestScore >= remoteScore) {
          finalProgress[key] = guestVal;
        }
      }

      await updateDoc(userRef, {
        progress: finalProgress,
        isAnonymous: false,
        lastActiveAt: new Date().toISOString(),
        ...(guestItemCount > 0 ? { lastMigratedAt: new Date().toISOString() } : {})
      });
    } else {
      // First time initialization with all guest progress
      finalProgress = { ...guestProgress };
      const newProfile: UserProfileData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email?.split('@')[0] || 'English Scholar',
        photoURL: user.photoURL || null,
        isAnonymous: false,
        createdAt: new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
        progress: finalProgress
      };
      await setDoc(userRef, newProfile);
    }

    // Successfully migrated -> clear local guest cache
    if (guestItemCount > 0) {
      clearGuestProgress();
    }
  } catch (err) {
    console.error('Data migration error during sign in:', err);
    // If Firestore write failed, keep local data safe
  }

  return finalProgress;
};

// --- AUTHENTICATION ACTIONS ---

export const authService = {
  // Google Popup Sign In
  async signInWithGoogle(): Promise<{ user: User; progress: ProgressMap } | null> {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);
      const progress = await migrateGuestDataToUser(result.user);
      return { user: result.user, progress };
    } catch (err: any) {
      if (
        err?.code === 'auth/popup-closed-by-user' ||
        err?.code === 'auth/cancelled-popup-request'
      ) {
        // User closed or cancelled the popup - expected non-fatal interaction
        return null;
      }
      throw err;
    }
  },

  // Email & Password Sign Up
  async signUpWithEmail(email: string, password: string, displayName?: string): Promise<{ user: User; progress: ProgressMap }> {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) {
      await updateProfile(result.user, { displayName });
    }
    const progress = await migrateGuestDataToUser(result.user);
    return { user: result.user, progress };
  },

  // Email & Password Sign In
  async signInWithEmail(email: string, password: string): Promise<{ user: User; progress: ProgressMap }> {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const progress = await migrateGuestDataToUser(result.user);
    return { user: result.user, progress };
  },

  // Send Password Reset Email (Student Self-Service or Admin Triggered)
  async sendPasswordReset(email: string): Promise<void> {
    const trimmed = email.trim();
    if (!trimmed) {
      throw new Error('Please enter a valid email address.');
    }
    await sendPasswordResetEmail(auth, trimmed);
  },

  // Sign Out
  async signOut(): Promise<void> {
    await firebaseSignOut(auth);
  },

  // Fetch remote user progress
  async fetchUserProgress(uid: string): Promise<ProgressMap> {
    try {
      const userRef = doc(db, 'users', uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        return data.progress || {};
      }
    } catch (err) {
      console.error('Failed to fetch user progress from Firestore', err);
    }
    return {};
  },

  // Save progress (delegates to Firestore if user is signed in, or localStorage if in Guest Mode)
  async saveProgress(
    user: User | null, 
    key: string, 
    score: number, 
    details?: { topicTitle?: string; category?: string }
  ): Promise<ProgressMap> {
    if (user && !user.isAnonymous) {
      // Save directly to Firestore
      try {
        const userRef = doc(db, 'users', user.uid);
        const snap = await getDoc(userRef);
        let progress: ProgressMap = {};

        const newItem: ProgressItem = {
          score,
          completedAt: new Date().toISOString(),
          topicTitle: details?.topicTitle,
          category: details?.category
        };

        if (snap.exists()) {
          progress = snap.data().progress || {};
          progress[key] = newItem;
          await updateDoc(userRef, {
            [`progress.${key}`]: newItem,
            lastActiveAt: new Date().toISOString()
          });
        } else {
          progress[key] = newItem;
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            isAnonymous: false,
            createdAt: new Date().toISOString(),
            lastActiveAt: new Date().toISOString(),
            progress
          });
        }
        return progress;
      } catch (err) {
        console.error('Error saving progress to Firestore', err);
      }
    }

    // Guest Mode: Save to localStorage
    return saveGuestProgress(key, score, details);
  }
};
