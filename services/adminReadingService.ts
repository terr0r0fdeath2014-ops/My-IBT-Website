/**
 * Admin Reading Service - Full Administration Authority
 * Manages adding, removing, and modifying all questions across the Reading section:
 * - Read in Daily Life (Easy, Normal, Hard, Advanced)
 * - Read an Academic Passage
 * - Complete the Words
 * - 12 Reading Sub-skills (Factual, Negative Factual, Terminology, Inference, Rhetorical, etc.)
 */

import { EASY_DAILY_LIFE_POOL, EASY_ACADEMIC_POOL } from '../data/easyCycleReadingContent';
import { CYCLE2_DAILY_LIFE_PASSAGES } from '../data/cycle2DailyLifeContent';
import { CYCLE2_ACADEMIC_PASSAGES } from '../data/cycle2ReadingContent';
import {
  CYCLE2_TERMINOLOGY_CONTENT,
  CYCLE2_FACTUAL_CONTENT,
  CYCLE2_NEGATIVE_FACTUAL_CONTENT,
  CYCLE2_RHETORICAL_CONTENT,
  CYCLE2_INFERENCE_CONTENT,
  CYCLE2_REFERENCE_CONTENT,
  CYCLE2_SIMPLIFICATION_CONTENT,
  CYCLE2_RELATIONSHIPS_CONTENT,
  CYCLE2_IMPORTANT_IDEA_CONTENT,
  CYCLE2_INSERT_TEXT_CONTENT
} from '../data/cycle2SubskillsContent';

export type ReadingCategory = 'dailyLife' | 'academic' | 'completeWords' | 'subskill';

export type ReadingSkillType =
  | 'Read in Daily Life'
  | 'Read an Academic Passage'
  | 'Complete the Words'
  | 'Factual Information'
  | 'Negative Factual Information'
  | 'Terminology in Context'
  | 'Rhetorical Purpose'
  | 'Inference'
  | 'Reference'
  | 'Sentence Simplification'
  | 'Insert Text'
  | 'Complete Summary'
  | 'Complete Table'
  | 'Paragraph Relationships'
  | 'Important Idea';

export interface ReadingQuestionItem {
  id: string;
  skill: string;
  category: ReadingCategory;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  title: string;
  passage: string;
  question: string;
  options: string[];
  correct: number; // 0, 1, 2, 3
  hint?: string;
  explanation?: string;
  highlight?: string;
  isCustom?: boolean;
  isModified?: boolean;
  isDisabled?: boolean;
  createdAt: string;
  updatedAt?: string;
}

const STORAGE_CUSTOM_QUESTIONS = 'toefl_admin_reading_custom';
const STORAGE_MODIFIED_QUESTIONS = 'toefl_admin_reading_overrides';
const STORAGE_DISABLED_QUESTIONS = 'toefl_admin_reading_disabled';

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

class AdminReadingService {
  private stockCache: ReadingQuestionItem[] | null = null;
  private listeners: Set<() => void> = new Set();

  /**
   * Generates or retrieves the canonical baseline stock questions from curriculum files
   */
  public getStockQuestions(): ReadingQuestionItem[] {
    if (this.stockCache) return this.stockCache;

    const items: ReadingQuestionItem[] = [];

    // 1. Easy Daily Life
    EASY_DAILY_LIFE_POOL.forEach((item, idx) => {
      const optIdx = item.options.indexOf(item.correct);
      items.push({
        id: `stock_dl_easy_${idx + 1}`,
        skill: 'Read in Daily Life',
        category: 'dailyLife',
        level: 'Easy',
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: [...item.options],
        correct: optIdx >= 0 ? optIdx : 0,
        hint: item.hint,
        explanation: item.explanation,
        highlight: item.highlight,
        createdAt: '2026-09-01T00:00:00.000Z'
      });
    });

    // 2. Normal/Hard/Advanced Daily Life (Cycle 2)
    CYCLE2_DAILY_LIFE_PASSAGES.forEach((item, idx) => {
      const optIdx = item.options.indexOf(item.correct);
      items.push({
        id: `stock_dl_c2_${idx + 1}`,
        skill: 'Read in Daily Life',
        category: 'dailyLife',
        level: idx % 3 === 0 ? 'Normal' : idx % 3 === 1 ? 'Hard' : 'Advanced',
        title: item.title,
        passage: item.text,
        question: item.question,
        options: [...item.options],
        correct: optIdx >= 0 ? optIdx : 0,
        hint: item.hint,
        explanation: item.explanation,
        highlight: item.highlight,
        createdAt: '2026-09-01T00:00:00.000Z'
      });
    });

    // 3. Easy Academic Passages
    EASY_ACADEMIC_POOL.forEach((p, pIdx) => {
      p.questions.forEach((q, qIdx) => {
        const optIdx = q.options.indexOf(q.correct);
        items.push({
          id: `stock_acad_easy_${pIdx + 1}_q${qIdx + 1}`,
          skill: 'Read an Academic Passage',
          category: 'academic',
          level: 'Easy',
          title: `${p.title} (Q${qIdx + 1})`,
          passage: p.text,
          question: q.question,
          options: [...q.options],
          correct: optIdx >= 0 ? optIdx : 0,
          hint: q.hint,
          explanation: q.explanation,
          highlight: q.highlight,
          createdAt: '2026-09-01T00:00:00.000Z'
        });
      });
    });

    // 4. Cycle 2 Academic Passages (Normal/Hard/Advanced)
    CYCLE2_ACADEMIC_PASSAGES.forEach((p, pIdx) => {
      p.questions.forEach((q, qIdx) => {
        const optIdx = q.options.indexOf(q.correct);
        items.push({
          id: `stock_acad_c2_${pIdx + 1}_q${qIdx + 1}`,
          skill: 'Read an Academic Passage',
          category: 'academic',
          level: pIdx % 2 === 0 ? 'Normal' : 'Hard',
          title: `${p.title} (Q${qIdx + 1})`,
          passage: p.text,
          question: q.question,
          options: [...q.options],
          correct: optIdx >= 0 ? optIdx : 0,
          hint: q.hint,
          explanation: q.explanation,
          highlight: q.highlight,
          createdAt: '2026-09-01T00:00:00.000Z'
        });
      });
    });

    // Helper for sub-skills
    const addSubskillItems = (
      skillName: string,
      pool: { title: string; passage: string; question: string; options: string[]; correct: string; hint?: string; explanation: string; highlight?: string }[],
      prefix: string
    ) => {
      pool.forEach((item, idx) => {
        const optIdx = item.options.indexOf(item.correct);
        items.push({
          id: `stock_${prefix}_${idx + 1}`,
          skill: skillName,
          category: 'subskill',
          level: idx % 2 === 0 ? 'Normal' : 'Hard',
          title: item.title,
          passage: item.passage,
          question: item.question,
          options: [...item.options],
          correct: optIdx >= 0 ? optIdx : 0,
          hint: item.hint,
          explanation: item.explanation,
          highlight: item.highlight,
          createdAt: '2026-09-01T00:00:00.000Z'
        });
      });
    };

    addSubskillItems('Terminology in Context', CYCLE2_TERMINOLOGY_CONTENT, 'term');
    addSubskillItems('Factual Information', CYCLE2_FACTUAL_CONTENT, 'fact');
    addSubskillItems('Negative Factual Information', CYCLE2_NEGATIVE_FACTUAL_CONTENT, 'neg');
    addSubskillItems('Rhetorical Purpose', CYCLE2_RHETORICAL_CONTENT, 'rhet');
    addSubskillItems('Inference', CYCLE2_INFERENCE_CONTENT, 'inf');
    addSubskillItems('Reference', CYCLE2_REFERENCE_CONTENT, 'ref');
    addSubskillItems('Sentence Simplification', CYCLE2_SIMPLIFICATION_CONTENT, 'simp');
    addSubskillItems('Paragraph Relationships', CYCLE2_RELATIONSHIPS_CONTENT, 'rel');
    addSubskillItems('Important Idea', CYCLE2_IMPORTANT_IDEA_CONTENT, 'imp');
    addSubskillItems('Insert Text', CYCLE2_INSERT_TEXT_CONTENT, 'ins');

    this.stockCache = items;
    return items;
  }

  /**
   * Retrieves all custom questions created by the administrator
   */
  public getCustomQuestions(): ReadingQuestionItem[] {
    const raw = safeGetItem(STORAGE_CUSTOM_QUESTIONS);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch {}
    }
    return [];
  }

  /**
   * Retrieves all modifications made to stock questions
   */
  public getModifiedOverrides(): Record<string, Partial<ReadingQuestionItem>> {
    const raw = safeGetItem(STORAGE_MODIFIED_QUESTIONS);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch {}
    }
    return {};
  }

  /**
   * Retrieves all disabled/removed question IDs
   */
  public getDisabledIds(): string[] {
    const raw = safeGetItem(STORAGE_DISABLED_QUESTIONS);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch {}
    }
    return [];
  }

  /**
   * Get all unified questions (combining stock + overrides + customs + disabled flags)
   */
  public getAllQuestions(): ReadingQuestionItem[] {
    const stock = this.getStockQuestions();
    const custom = this.getCustomQuestions();
    const overrides = this.getModifiedOverrides();
    const disabledIds = new Set(this.getDisabledIds());

    // Merge overrides with stock
    const mergedStock = stock.map(s => {
      const override = overrides[s.id];
      const isDisabled = disabledIds.has(s.id);
      if (override) {
        return {
          ...s,
          ...override,
          isModified: true,
          isDisabled
        };
      }
      return {
        ...s,
        isDisabled
      };
    });

    // Custom items with disabled check
    const mergedCustom = custom.map(c => ({
      ...c,
      isCustom: true,
      isDisabled: disabledIds.has(c.id)
    }));

    return [...mergedCustom, ...mergedStock];
  }

  /**
   * Add a brand new question with full admin authority
   */
  public addQuestion(question: Omit<ReadingQuestionItem, 'id' | 'createdAt' | 'isCustom'>): ReadingQuestionItem {
    const customList = this.getCustomQuestions();
    const newItem: ReadingQuestionItem = {
      ...question,
      id: `custom_rd_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      isCustom: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    customList.unshift(newItem);
    safeSetItem(STORAGE_CUSTOM_QUESTIONS, JSON.stringify(customList));
    this.notify();
    return newItem;
  }

  /**
   * Modify ANY question (stock or custom)
   */
  public modifyQuestion(id: string, updates: Partial<ReadingQuestionItem>): boolean {
    const customList = this.getCustomQuestions();
    const customIdx = customList.findIndex(q => q.id === id);

    if (customIdx >= 0) {
      // It's a custom question
      customList[customIdx] = {
        ...customList[customIdx],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      safeSetItem(STORAGE_CUSTOM_QUESTIONS, JSON.stringify(customList));
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
    safeSetItem(STORAGE_MODIFIED_QUESTIONS, JSON.stringify(overrides));
    this.notify();
    return true;
  }

  /**
   * Remove / Delete / Disable a question
   */
  public removeQuestion(id: string): void {
    const customList = this.getCustomQuestions();
    const isCustom = customList.some(q => q.id === id);

    if (isCustom) {
      // Permanently remove custom question
      const filtered = customList.filter(q => q.id !== id);
      safeSetItem(STORAGE_CUSTOM_QUESTIONS, JSON.stringify(filtered));
    } else {
      // Mark stock question as disabled
      const disabled = this.getDisabledIds();
      if (!disabled.includes(id)) {
        disabled.push(id);
        safeSetItem(STORAGE_DISABLED_QUESTIONS, JSON.stringify(disabled));
      }
    }
    this.notify();
  }

  /**
   * Restore a disabled stock question
   */
  public restoreQuestion(id: string): void {
    const disabled = this.getDisabledIds().filter(dId => dId !== id);
    safeSetItem(STORAGE_DISABLED_QUESTIONS, JSON.stringify(disabled));
    this.notify();
  }

  /**
   * Revert a modified stock question back to its original official content
   */
  public revertToOriginal(id: string): void {
    const overrides = this.getModifiedOverrides();
    delete overrides[id];
    safeSetItem(STORAGE_MODIFIED_QUESTIONS, JSON.stringify(overrides));
    this.notify();
  }

  /**
   * Reset all admin modifications across the reading section
   */
  public resetAllReadingOverrides(): void {
    safeSetItem(STORAGE_CUSTOM_QUESTIONS, JSON.stringify([]));
    safeSetItem(STORAGE_MODIFIED_QUESTIONS, JSON.stringify({}));
    safeSetItem(STORAGE_DISABLED_QUESTIONS, JSON.stringify([]));
    this.notify();
  }

  /**
   * Get active questions for live student exercise execution
   * Filters out disabled items and prioritizes custom/modified entries!
   */
  public getActiveQuestionsForStudent(skill: string, level?: string): ReadingQuestionItem[] {
    const all = this.getAllQuestions();
    return all.filter(q => {
      if (q.isDisabled) return false;
      const matchesSkill = q.skill.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(q.skill.toLowerCase());
      if (!matchesSkill) return false;
      if (level) {
        return q.level.toLowerCase() === level.toLowerCase();
      }
      return true;
    });
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
      window.dispatchEvent(new CustomEvent('toefl-admin-reading-updated'));
    }
  }
}

export const adminReadingService = new AdminReadingService();
