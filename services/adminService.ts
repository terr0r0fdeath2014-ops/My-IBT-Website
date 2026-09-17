/**
 * Admin Service - Hidden Management System (Method C)
 * Discreet administration portal accessible via secret URL parameter (?portal=admin or ?manage=portal)
 * or via secret shortcut (Ctrl+Shift+A / Cmd+Shift+A).
 */

export interface AdminCredentials {
  username: string;
  passwordHash: string; // Base64 encoded or simple secure hash
  lastUpdated: string;
}

export interface AdminCustomPassage {
  id: string;
  category: 'dailyLife' | 'academic';
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  title: string;
  passage: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
  createdAt: string;
  active: boolean;
}

export interface TopAdConfig {
  enabled: boolean;
  type: 'banner' | 'html';
  headline: string;
  subtext: string;
  imageUrl?: string;
  linkUrl: string;
  ctaText: string;
  badgeText: string;
  theme: 'blue' | 'emerald' | 'purple' | 'amber' | 'dark';
  htmlCode?: string;
  canDismiss?: boolean;
}

export interface SideAdConfig {
  enabled: boolean;
  position: 'both' | 'left' | 'right';
  headline: string;
  subtext: string;
  imageUrl?: string;
  linkUrl: string;
  ctaText: string;
  badgeText: string;
  theme: 'blue' | 'dark' | 'amber';
  htmlCode?: string;
}

export interface EtsExamPreResultAdConfig {
  enabled: boolean;
  title: string;
  sponsorName: string;
  videoUrl: string; // Supports direct MP4/WebM or YouTube embed / Vimeo
  destinationUrl: string;
  ctaText: string;
  durationSeconds: number; // e.g. 60
  canSkip: boolean;
  skipAfterSeconds: number; // e.g. 5
  description: string;
}

export interface AdminSettings {
  forcedCycle: number | null; // null = auto calendar; 1, 2, 3... = forced
  announcementBanner: {
    enabled: boolean;
    message: string;
    type: 'info' | 'alert' | 'success';
  };
  topAd: TopAdConfig;
  sideAds: SideAdConfig;
  etsExamPreResultAd: EtsExamPreResultAdConfig;
}

export const DEFAULT_TOP_AD: TopAdConfig = {
  enabled: true,
  type: 'banner',
  headline: 'Official ETS Partner: Get 25% Off Verified TOEFL Practice Tests',
  subtext: 'Use code TOEFL2026 at checkout for instant practice test activation',
  imageUrl: '',
  linkUrl: 'https://www.ets.org/toefl',
  ctaText: 'Claim Discount',
  badgeText: 'SPONSORED',
  theme: 'blue',
  htmlCode: '',
  canDismiss: true
};

export const DEFAULT_SIDE_ADS: SideAdConfig = {
  enabled: true,
  position: 'both',
  headline: 'Top Universities Requiring TOEFL iBT 2026',
  subtext: 'Browse minimum cutoffs, average admitted scores, and scholarship benchmarks.',
  imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
  linkUrl: 'https://www.ets.org/toefl',
  ctaText: 'View Guide',
  badgeText: 'ADVERTISEMENT',
  theme: 'dark',
  htmlCode: ''
};

export const DEFAULT_ETS_EXAM_PRE_RESULT_AD: EtsExamPreResultAdConfig = {
  enabled: true,
  title: 'ETS Formal Examination Sponsor Presentation',
  sponsorName: 'Global TOEFL Academy & Test Center',
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  destinationUrl: 'https://www.ets.org/toefl',
  ctaText: 'Visit Sponsor Website',
  durationSeconds: 60,
  canSkip: true,
  skipAfterSeconds: 5,
  description: 'Your official scaled score, CEFR band breakdown, and question performance report will unlock immediately after this sponsor video.'
};

const STORAGE_ADMIN_CREDS = 'toefl_admin_creds';
const STORAGE_ADMIN_SESSION = 'toefl_admin_session';
const STORAGE_ADMIN_SETTINGS = 'toefl_admin_settings';
const STORAGE_ADMIN_PASSAGES = 'toefl_admin_custom_passages';

const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD_RAW = 'toefl2026admin';

function hashPassword(raw: string): string {
  try {
    return btoa(unescape(encodeURIComponent(raw)));
  } catch {
    return raw;
  }
}

class AdminService {
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.ensureDefaultCredentials();
  }

  private ensureDefaultCredentials() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return;
      const existing = localStorage.getItem(STORAGE_ADMIN_CREDS);
      if (!existing) {
        const initial: AdminCredentials = {
          username: DEFAULT_USERNAME,
          passwordHash: hashPassword(DEFAULT_PASSWORD_RAW),
          lastUpdated: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_ADMIN_CREDS, JSON.stringify(initial));
      }
    } catch {}
  }

  /**
   * Validate admin login
   */
  public login(usernameInput: string, passwordInput: string): { success: boolean; error?: string } {
    try {
      const existing = localStorage.getItem(STORAGE_ADMIN_CREDS);
      let creds: AdminCredentials = {
        username: DEFAULT_USERNAME,
        passwordHash: hashPassword(DEFAULT_PASSWORD_RAW),
        lastUpdated: new Date().toISOString()
      };

      if (existing) {
        try {
          creds = JSON.parse(existing);
        } catch {}
      }

      const inputHash = hashPassword(passwordInput);

      if (usernameInput.trim().toLowerCase() === creds.username.toLowerCase() && inputHash === creds.passwordHash) {
        const token = btoa(`${creds.username}:${Date.now()}`);
        sessionStorage.setItem(STORAGE_ADMIN_SESSION, token);
        this.notify();
        return { success: true };
      }

      return { success: false, error: 'Invalid management credentials.' };
    } catch (err: any) {
      return { success: false, error: err.message || 'Login failed' };
    }
  }

  /**
   * Check if currently authenticated in this session
   */
  public isAuthenticated(): boolean {
    try {
      if (typeof window === 'undefined' || !window.sessionStorage) return false;
      const token = sessionStorage.getItem(STORAGE_ADMIN_SESSION);
      return Boolean(token && token.length > 5);
    } catch {
      return false;
    }
  }

  /**
   * Log out of admin session
   */
  public logout(): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        sessionStorage.removeItem(STORAGE_ADMIN_SESSION);
      }
    } catch {}
    this.notify();
  }

  /**
   * Change admin username and password
   */
  public updateCredentials(newUsername: string, newPassword: string): { success: boolean; error?: string } {
    if (!newUsername.trim() || !newPassword.trim()) {
      return { success: false, error: 'Username and password cannot be blank.' };
    }
    if (newPassword.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters.' };
    }

    try {
      const updated: AdminCredentials = {
        username: newUsername.trim(),
        passwordHash: hashPassword(newPassword.trim()),
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_ADMIN_CREDS, JSON.stringify(updated));
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Failed to update credentials' };
    }
  }

  /**
   * Get current admin settings
   */
  public getSettings(): AdminSettings {
    const defaultSettings: AdminSettings = {
      forcedCycle: null,
      announcementBanner: {
        enabled: false,
        message: '',
        type: 'info'
      },
      topAd: DEFAULT_TOP_AD,
      sideAds: DEFAULT_SIDE_ADS,
      etsExamPreResultAd: DEFAULT_ETS_EXAM_PRE_RESULT_AD
    };

    try {
      if (typeof window === 'undefined' || !window.localStorage) return defaultSettings;
      const raw = localStorage.getItem(STORAGE_ADMIN_SETTINGS);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          ...defaultSettings,
          ...parsed,
          announcementBanner: { ...defaultSettings.announcementBanner, ...(parsed.announcementBanner || {}) },
          topAd: { ...defaultSettings.topAd, ...(parsed.topAd || {}) },
          sideAds: { ...defaultSettings.sideAds, ...(parsed.sideAds || {}) },
          etsExamPreResultAd: { ...defaultSettings.etsExamPreResultAd, ...(parsed.etsExamPreResultAd || {}) }
        };
      }
    } catch {}

    return defaultSettings;
  }

  /**
   * Save admin settings
   */
  public saveSettings(settings: Partial<AdminSettings>): void {
    try {
      const current = this.getSettings();
      const merged = { ...current, ...settings };
      localStorage.setItem(STORAGE_ADMIN_SETTINGS, JSON.stringify(merged));
      
      // Notify listeners and dispatch window event
      this.notify();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('toefl-admin-settings-changed', { detail: merged }));
      }
    } catch (err) {
      console.error('Failed to save admin settings', err);
    }
  }

  /**
   * Forced Cycle Override
   */
  public setForcedCycle(cycle: number | null): void {
    this.saveSettings({ forcedCycle: cycle });
  }

  /**
   * Get custom passages created by admin
   */
  public getCustomPassages(): AdminCustomPassage[] {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return [];
      const raw = localStorage.getItem(STORAGE_ADMIN_PASSAGES);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {}
    return [];
  }

  /**
   * Save or update a custom passage
   */
  public saveCustomPassage(passage: Omit<AdminCustomPassage, 'id' | 'createdAt'> & { id?: string }): AdminCustomPassage {
    const passages = this.getCustomPassages();
    let savedItem: AdminCustomPassage;

    if (passage.id) {
      passages.forEach((p, idx) => {
        if (p.id === passage.id) {
          passages[idx] = { ...p, ...passage } as AdminCustomPassage;
          savedItem = passages[idx];
        }
      });
    }

    if (!savedItem!) {
      savedItem = {
        ...passage,
        id: `custom_psg_${Date.now()}`,
        createdAt: new Date().toISOString(),
        active: passage.active ?? true
      };
      passages.unshift(savedItem);
    }

    try {
      localStorage.setItem(STORAGE_ADMIN_PASSAGES, JSON.stringify(passages));
      this.notify();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('toefl-admin-passages-changed', { detail: passages }));
      }
    } catch (err) {
      console.error('Failed to save custom passage', err);
    }

    return savedItem;
  }

  /**
   * Delete a custom passage
   */
  public deleteCustomPassage(id: string): void {
    const passages = this.getCustomPassages().filter(p => p.id !== id);
    try {
      localStorage.setItem(STORAGE_ADMIN_PASSAGES, JSON.stringify(passages));
      this.notify();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('toefl-admin-passages-changed', { detail: passages }));
      }
    } catch {}
  }

  /**
   * Helper to check URL for secret admin trigger
   */
  public checkUrlForAdminTrigger(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const search = window.location.search;
      const hash = window.location.hash;
      const params = new URLSearchParams(search);

      const hasPortalParam = params.get('portal') === 'admin' || params.get('manage') === 'portal' || params.get('admin') === 'true';
      const hasHash = hash === '#admin-portal' || hash === '#portal';

      return hasPortalParam || hasHash;
    } catch {
      return false;
    }
  }

  /**
   * Clean secret trigger from URL without refreshing the page
   */
  public cleanAdminUrl(): void {
    if (typeof window === 'undefined' || !window.history) return;
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('portal');
      url.searchParams.delete('manage');
      url.searchParams.delete('admin');
      if (url.hash === '#admin-portal' || url.hash === '#portal') {
        url.hash = '';
      }
      window.history.replaceState({}, document.title, url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : ''));
    } catch {}
  }

  public subscribe(cb: () => void): () => void {
    this.listeners.add(cb);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach(cb => {
      try { cb(); } catch {}
    });
  }
}

export const adminService = new AdminService();
