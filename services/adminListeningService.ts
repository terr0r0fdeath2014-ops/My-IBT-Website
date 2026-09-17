/**
 * Admin Listening Service - Full Administration Authority
 * Manages adding, modifying, disabling, and restoring all items across the Listening section:
 * - Task 1: Listen & Respond (Campus Situations, Quick Dialogue, Question & Response)
 * - Task 2: Academic Lectures (Multi-paragraph university professor lectures with diagrams & notes)
 * - Task 3: Campus Discussions (Collegiate student-professor & advisor consultations)
 * Across all difficulty levels: Easy, Normal, Hard, Advanced.
 */

import {
  LISTEN_AND_RESPOND_DATA,
  ACADEMIC_LECTURES_DATA,
  CAMPUS_DISCUSSIONS_DATA,
  ListeningExercise,
  ListeningQuestion
} from '../listeningContent';
import { monthlyPracticeEngine } from '../utils/monthlyEngine';

export type ListeningTaskKey = 'listenRespond' | 'lecture' | 'discussion';
export type ListeningTypeName = 'Listen & Respond' | 'Academic Lecture' | 'Campus Discussion';

export interface ListeningAdminItem {
  id: string;
  type: ListeningTypeName;
  taskKey: ListeningTaskKey;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  title: string;
  topic: string;
  duration: string;
  speaker: string;
  speakerRole?: string;
  transcript: string;
  passageParts: { speaker: string; text: string }[];
  questions: ListeningQuestion[];
  audioUrl?: string; // Direct audio stream / file URL
  sourceUrl?: string; // Source website / landing page URL
  sourceName?: string; // Source website or provider name (e.g. "MIT OCW", "NPR")
  isCustom?: boolean;
  isModified?: boolean;
  isDisabled?: boolean;
  createdAt: string;
  updatedAt?: string;
}

const STORAGE_CUSTOM_LISTENING = 'toefl_admin_listening_custom';
const STORAGE_MODIFIED_LISTENING = 'toefl_admin_listening_overrides';
const STORAGE_DISABLED_LISTENING = 'toefl_admin_listening_disabled';

function safeGetItem(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
  } catch {}
  return null;
}

function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch {}
}

class AdminListeningService {
  private stockCache: ListeningAdminItem[] | null = null;
  private listeners: Set<() => void> = new Set();

  /**
   * Generates or retrieves baseline stock items from listeningContent.ts
   */
  public getStockItems(): ListeningAdminItem[] {
    if (this.stockCache) return this.stockCache;

    const items: ListeningAdminItem[] = [];

    // 1. Listen & Respond (20 items across Easy, Normal, Hard, Advanced)
    const tiers: ('Easy' | 'Normal' | 'Hard' | 'Advanced')[] = ['Easy', 'Normal', 'Hard', 'Advanced'];
    tiers.forEach(tier => {
      const list = LISTEN_AND_RESPOND_DATA[tier] || [];
      list.forEach((item, idx) => {
        items.push({
          id: `stock_lr_${tier.toLowerCase()}_${idx + 1}`,
          type: 'Listen & Respond',
          taskKey: 'listenRespond',
          level: tier,
          title: item.title,
          topic: item.topic,
          duration: '0:45',
          speaker: item.speaker,
          speakerRole: item.speakerRole,
          transcript: `${item.speaker} (${item.speakerRole}): "${item.promptText}"`,
          passageParts: [
            { speaker: `${item.speaker} (${item.speakerRole})`, text: item.promptText }
          ],
          questions: [
            {
              id: `q1`,
              question: item.question,
              options: [...item.options],
              correctAnswer: item.correctAnswer,
              explanation: item.explanation
            }
          ],
          createdAt: '2026-09-01T00:00:00.000Z'
        });
      });
    });

    // 2. Academic Lectures
    ACADEMIC_LECTURES_DATA.forEach((item, idx) => {
      items.push({
        id: `stock_lec_${item.level.toLowerCase()}_${idx + 1}`,
        type: 'Academic Lecture',
        taskKey: 'lecture',
        level: item.level,
        title: item.title,
        topic: item.topic,
        duration: item.duration,
        speaker: item.speaker,
        speakerRole: item.speakerRole,
        transcript: item.transcript,
        passageParts: item.passageParts.map(p => ({ ...p })),
        questions: item.questions.map(q => ({
          ...q,
          options: [...q.options]
        })),
        createdAt: '2026-09-01T00:00:00.000Z'
      });
    });

    // 3. Campus Discussions
    CAMPUS_DISCUSSIONS_DATA.forEach((item, idx) => {
      items.push({
        id: `stock_disc_${item.level.toLowerCase()}_${idx + 1}`,
        type: 'Campus Discussion',
        taskKey: 'discussion',
        level: item.level,
        title: item.title,
        topic: item.topic,
        duration: item.duration,
        speaker: item.speaker,
        speakerRole: item.speakerRole,
        transcript: item.transcript,
        passageParts: item.passageParts.map(p => ({ ...p })),
        questions: item.questions.map(q => ({
          ...q,
          options: [...q.options]
        })),
        createdAt: '2026-09-01T00:00:00.000Z'
      });
    });

    this.stockCache = items;
    return items;
  }

  public getCustomItems(): ListeningAdminItem[] {
    const raw = safeGetItem(STORAGE_CUSTOM_LISTENING);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  public getModifiedOverrides(): Record<string, Partial<ListeningAdminItem>> {
    const raw = safeGetItem(STORAGE_MODIFIED_LISTENING);
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  public getDisabledIds(): string[] {
    const raw = safeGetItem(STORAGE_DISABLED_LISTENING);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  /**
   * Retrieves all items merged: custom items + modified overrides + disabled flags
   */
  public getAllItems(): ListeningAdminItem[] {
    const stock = this.getStockItems();
    const custom = this.getCustomItems();
    const overrides = this.getModifiedOverrides();
    const disabled = this.getDisabledIds();

    const mergedStock = stock.map(item => {
      const override = overrides[item.id];
      const isDisabled = disabled.includes(item.id);

      if (override) {
        return {
          ...item,
          ...override,
          isModified: true,
          isDisabled
        };
      }

      return {
        ...item,
        isDisabled
      };
    });

    return [...custom, ...mergedStock];
  }

  /**
   * Add a new Listening item with full administrative authority
   */
  public addItem(item: Omit<ListeningAdminItem, 'id' | 'createdAt' | 'isCustom'>): ListeningAdminItem {
    const customList = this.getCustomItems();
    const newItem: ListeningAdminItem = {
      ...item,
      id: `custom_ls_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      isCustom: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    customList.unshift(newItem);
    safeSetItem(STORAGE_CUSTOM_LISTENING, JSON.stringify(customList));
    this.notify();
    return newItem;
  }

  /**
   * Modify ANY listening item (stock or custom)
   */
  public modifyItem(id: string, updates: Partial<ListeningAdminItem>): boolean {
    const customList = this.getCustomItems();
    const customIdx = customList.findIndex(q => q.id === id);

    if (customIdx >= 0) {
      customList[customIdx] = {
        ...customList[customIdx],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      safeSetItem(STORAGE_CUSTOM_LISTENING, JSON.stringify(customList));
      this.notify();
      return true;
    }

    // It's a stock question -> Save as override
    const overrides = this.getModifiedOverrides();
    overrides[id] = {
      ...(overrides[id] || {}),
      ...updates,
      updatedAt: new Date().toISOString()
    };
    safeSetItem(STORAGE_MODIFIED_LISTENING, JSON.stringify(overrides));
    this.notify();
    return true;
  }

  /**
   * Remove / Delete / Disable a listening item
   */
  public removeItem(id: string): void {
    const customList = this.getCustomItems();
    const isCustom = customList.some(q => q.id === id);

    if (isCustom) {
      const filtered = customList.filter(q => q.id !== id);
      safeSetItem(STORAGE_CUSTOM_LISTENING, JSON.stringify(filtered));
    } else {
      const disabled = this.getDisabledIds();
      if (!disabled.includes(id)) {
        disabled.push(id);
        safeSetItem(STORAGE_DISABLED_LISTENING, JSON.stringify(disabled));
      }
    }
    this.notify();
  }

  /**
   * Restore a disabled stock item
   */
  public restoreItem(id: string): void {
    const disabled = this.getDisabledIds().filter(dId => dId !== id);
    safeSetItem(STORAGE_DISABLED_LISTENING, JSON.stringify(disabled));
    this.notify();
  }

  /**
   * Revert a modified stock item back to original official content
   */
  public revertToOriginal(id: string): void {
    const overrides = this.getModifiedOverrides();
    delete overrides[id];
    safeSetItem(STORAGE_MODIFIED_LISTENING, JSON.stringify(overrides));
    this.notify();
  }

  /**
   * Reset all admin modifications across the listening section
   */
  public resetAllListeningOverrides(): void {
    safeSetItem(STORAGE_CUSTOM_LISTENING, JSON.stringify([]));
    safeSetItem(STORAGE_MODIFIED_LISTENING, JSON.stringify({}));
    safeSetItem(STORAGE_DISABLED_LISTENING, JSON.stringify([]));
    this.notify();
  }

  /**
   * Get active items for student practice
   */
  public getActiveItemsForStudent(
    taskKey?: ListeningTaskKey,
    level?: 'Easy' | 'Normal' | 'Hard' | 'Advanced'
  ): ListeningAdminItem[] {
    const all = this.getAllItems();
    return all.filter(item => {
      if (item.isDisabled) return false;
      if (taskKey && item.taskKey !== taskKey) return false;
      if (level && item.level.toLowerCase() !== level.toLowerCase()) return false;
      return true;
    });
  }

  /**
   * Returns a student ListeningExercise matching the active task, level, and exercise number.
   * Seamlessly honors any custom additions, modified content, and disabled items.
   */
  public getStudentExercise(
    taskType: ListeningTaskKey,
    level: 'Easy' | 'Normal' | 'Hard' | 'Advanced',
    exerciseNum: number
  ): ListeningExercise {
    const activeItems = this.getActiveItemsForStudent(taskType, level);
    const exIndex = Math.max(0, exerciseNum - 1);
    const cycleOffset = (monthlyPracticeEngine.getActiveEdition().cycleSeed - 1) * 3;

    // If active items exist for this level & task
    if (activeItems.length > 0) {
      const selected = activeItems[(exIndex + cycleOffset) % activeItems.length];
      const exerciseId = `listening-${taskType}-${level.toLowerCase()}-${exerciseNum}`;

      return {
        id: exerciseId,
        title: `Exercise ${exerciseNum}: ${selected.title}`,
        type: selected.type,
        topic: selected.topic,
        duration: selected.duration || '2:00',
        level: selected.level,
        speaker: selected.speaker,
        speakerRole: selected.speakerRole,
        transcript: selected.transcript,
        passageParts: selected.passageParts.map(p => ({ ...p })),
        questions: selected.questions.map((q, qIdx) => ({
          id: `${exerciseId}-q${qIdx + 1}`,
          question: q.question,
          options: [...q.options],
          correctAnswer: q.correctAnswer,
          explanation: q.explanation
        })),
        audioUrl: selected.audioUrl,
        sourceUrl: selected.sourceUrl,
        sourceName: selected.sourceName
      };
    }

    // Fallback: any active item of this taskType regardless of level
    const generalPool = this.getActiveItemsForStudent(taskType);
    if (generalPool.length > 0) {
      const selected = generalPool[(exIndex + cycleOffset) % generalPool.length];
      const exerciseId = `listening-${taskType}-${level.toLowerCase()}-${exerciseNum}`;
      return {
        id: exerciseId,
        title: `Exercise ${exerciseNum}: ${selected.title}`,
        type: selected.type,
        topic: selected.topic,
        duration: selected.duration || '2:00',
        level,
        speaker: selected.speaker,
        speakerRole: selected.speakerRole,
        transcript: selected.transcript,
        passageParts: selected.passageParts.map(p => ({ ...p })),
        questions: selected.questions.map((q, qIdx) => ({
          id: `${exerciseId}-q${qIdx + 1}`,
          question: q.question,
          options: [...q.options],
          correctAnswer: q.correctAnswer,
          explanation: q.explanation
        })),
        audioUrl: selected.audioUrl,
        sourceUrl: selected.sourceUrl,
        sourceName: selected.sourceName
      };
    }

    // Ultimate fallback baseline
    return {
      id: `listening-${taskType}-${level.toLowerCase()}-${exerciseNum}`,
      title: `Exercise ${exerciseNum}: Collegiate Overview`,
      type: taskType === 'listenRespond' ? 'Listen & Respond' : taskType === 'lecture' ? 'Academic Lecture' : 'Campus Discussion',
      topic: 'Campus Education',
      duration: '1:30',
      level,
      speaker: 'Professor',
      speakerRole: 'Instructor',
      transcript: 'Welcome to the listening session. Please listen carefully to the instruction.',
      passageParts: [{ speaker: 'Professor', text: 'Welcome to the listening session. Please listen carefully to the instruction.' }],
      questions: [{
        id: `q1`,
        question: 'What is the main topic of this session?',
        options: ['Collegiate Overview', 'Registration', 'Grading', 'Athletics'],
        correctAnswer: 'Collegiate Overview',
        explanation: 'The session introduces the collegiate overview.'
      }]
    };
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
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toefl-admin-listening-updated'));
    }
  }
}

export const adminListeningService = new AdminListeningService();
