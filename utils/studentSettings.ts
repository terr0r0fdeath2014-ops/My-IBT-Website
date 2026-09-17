export interface StudentProfileData {
  name: string;
  email: string;
  avatar: string;
  targetTotalScore: number;
  readingTarget: number;
  listeningTarget: number;
  speakingTarget: number;
  writingTarget: number;
  examDate: string;
  targetUniversity: string;
  dailyGoalMinutes: number;
  studyLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
}

export interface StudentAppSettings {
  defaultVoice: string;
  speechRate: number;
  autoPlayAudio: boolean;
  soundEffects: boolean;
  themeAccent: 'teal' | 'navy' | 'emerald' | 'amber' | 'indigo';
  dailyReminderEnabled: boolean;
  autoAdvanceQuestions: boolean;
  compactCards: boolean;
}

const DEFAULT_PROFILE: StudentProfileData = {
  name: 'Alex Vance',
  email: 'scholar.candidate@toeflprep.edu',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  targetTotalScore: 110,
  readingTarget: 29,
  listeningTarget: 28,
  speakingTarget: 26,
  writingTarget: 27,
  examDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  targetUniversity: 'Columbia & Harvard University',
  dailyGoalMinutes: 45,
  studyLevel: 'Advanced'
};

const DEFAULT_SETTINGS: StudentAppSettings = {
  defaultVoice: 'Kore',
  speechRate: 1.0,
  autoPlayAudio: true,
  soundEffects: true,
  themeAccent: 'teal',
  dailyReminderEnabled: true,
  autoAdvanceQuestions: false,
  compactCards: false
};

const PROFILE_STORAGE_KEY = 'ibt_scholar_profile_v2';
const SETTINGS_STORAGE_KEY = 'ibt_scholar_settings_v2';

export const getStoredStudentProfile = (): StudentProfileData => {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PROFILE;
  }
};

export const saveStoredStudentProfile = (profile: Partial<StudentProfileData>): StudentProfileData => {
  const current = getStoredStudentProfile();
  const updated = { ...current, ...profile };
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('student-profile-updated', { detail: updated }));
    }
  } catch (e) {
    console.error('Failed to save profile', e);
  }
  return updated;
};

export const getStoredAppSettings = (): StudentAppSettings => {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
};

export const saveStoredAppSettings = (settings: Partial<StudentAppSettings>): StudentAppSettings => {
  const current = getStoredAppSettings();
  const updated = { ...current, ...settings };
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save app settings', e);
  }
  return updated;
};

export interface ComputedDomainMetrics {
  reading: {
    completedCount: number;
    avgScore: number;
    estimatedBand: number;
    totalAvailable: number;
  };
  listening: {
    completedCount: number;
    avgScore: number;
    estimatedBand: number;
    totalAvailable: number;
  };
  speaking: {
    completedCount: number;
    avgScore: number;
    estimatedBand: number;
    totalAvailable: number;
  };
  writing: {
    completedCount: number;
    avgScore: number;
    estimatedBand: number;
    totalAvailable: number;
  };
  totalCompleted: number;
  projectedTotalScore: number;
  overallBandLevel: string;
  streakDays: number;
  xpPoints: number;
}

export const computeStudentDomainMetrics = (progress: Record<string, number>): ComputedDomainMetrics => {
  const keys = Object.keys(progress || {});
  
  // Categorize keys
  const readingKeys = keys.filter(k => 
    k.startsWith('test-') || 
    k.startsWith('mockup-') || 
    k.startsWith('progression-') || 
    k.startsWith('reading-') ||
    k.startsWith('skill-')
  );

  const listeningKeys = keys.filter(k => k.startsWith('listening-'));
  const speakingKeys = keys.filter(k => k.startsWith('speaking-') || k.startsWith('speakingInterview-') || k.startsWith('speakingEcho-'));
  const writingKeys = keys.filter(k => k.startsWith('writing-') || k.startsWith('buildASentence-') || k.startsWith('discussion-') || k.startsWith('email-'));

  const calculateDomain = (domainKeys: string[], defaultBandBase = 22, totalSlots = 80) => {
    if (domainKeys.length === 0) {
      return {
        completedCount: 0,
        avgScore: 0,
        estimatedBand: defaultBandBase,
        totalAvailable: totalSlots
      };
    }

    const sum = domainKeys.reduce((acc, k) => acc + (progress[k] || 0), 0);
    const avg = Math.round(sum / domainKeys.length);
    // Convert 0-100% to scaled 0-30 TOEFL score
    const estimatedBand = Math.min(30, Math.max(10, Math.round((avg / 100) * 30)));

    return {
      completedCount: domainKeys.length,
      avgScore: avg,
      estimatedBand,
      totalAvailable: totalSlots
    };
  };

  const reading = calculateDomain(readingKeys, 24, 80);
  const listening = calculateDomain(listeningKeys, 23, 60);
  const speaking = calculateDomain(speakingKeys, 22, 60);
  const writing = calculateDomain(writingKeys, 23, 60);

  const totalCompleted = keys.length;
  const projectedTotalScore = reading.estimatedBand + listening.estimatedBand + speaking.estimatedBand + writing.estimatedBand;
  const overallBandLevel = projectedTotalScore >= 110 ? 'Mastery (110+)' : projectedTotalScore >= 100 ? 'Advanced (100-109)' : projectedTotalScore >= 85 ? 'Proficient (85-99)' : 'Developing';
  
  // Calculate XP (150 XP per completed task + bonus for accuracy)
  const xpPoints = keys.reduce((acc, k) => {
    const score = progress[k] || 75;
    return acc + 100 + Math.round(score * 1.5);
  }, 1250);

  return {
    reading,
    listening,
    speaking,
    writing,
    totalCompleted,
    projectedTotalScore,
    overallBandLevel,
    streakDays: Math.max(3, Math.min(30, Math.floor(keys.length / 2) + 3)),
    xpPoints
  };
};
