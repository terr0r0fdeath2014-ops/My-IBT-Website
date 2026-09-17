export type ErrorTagCategory = 
  | 'Careless' 
  | 'Vocabulary' 
  | 'Time Pressure' 
  | 'Misread Question' 
  | 'Trap / Extreme Word' 
  | 'Grammar / Syntax' 
  | 'Audio Distortion' 
  | 'Missing Proof';

export interface ErrorTagDefinition {
  id: ErrorTagCategory;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
  description: string;
  iconName: string;
}

export const ERROR_TAG_DEFINITIONS: ErrorTagDefinition[] = [
  {
    id: 'Careless',
    label: 'Careless Mistake',
    color: 'text-amber-800 dark:text-amber-200',
    bgColor: 'bg-amber-100 dark:bg-amber-950/40',
    borderColor: 'border-amber-300 dark:border-amber-800',
    dotColor: 'bg-amber-500',
    description: 'Rushed through, picked an option without reading all choices, or overlooked simple qualifying words.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'Vocabulary',
    label: 'Vocabulary Gap',
    color: 'text-purple-800 dark:text-purple-200',
    bgColor: 'bg-purple-100 dark:bg-purple-950/40',
    borderColor: 'border-purple-300 dark:border-purple-800',
    dotColor: 'bg-purple-500',
    description: 'Unfamiliar with key academic term, secondary definition, or nuanced synonym pair.',
    iconName: 'BookOpen'
  },
  {
    id: 'Time Pressure',
    label: 'Time Pressure',
    color: 'text-rose-800 dark:text-rose-200',
    bgColor: 'bg-rose-100 dark:bg-rose-950/40',
    borderColor: 'border-rose-300 dark:border-rose-800',
    dotColor: 'bg-rose-500',
    description: 'Ran short on clock, was forced to guess, or rushed paragraph skim in the final seconds.',
    iconName: 'Clock'
  },
  {
    id: 'Misread Question',
    label: 'Misread Question',
    color: 'text-blue-800 dark:text-blue-200',
    bgColor: 'bg-blue-100 dark:bg-blue-950/40',
    borderColor: 'border-blue-300 dark:border-blue-800',
    dotColor: 'bg-blue-500',
    description: 'Missed a "NOT/EXCEPT", misidentified question stem type, or answered what was asked rather than the actual prompt.',
    iconName: 'EyeOff'
  },
  {
    id: 'Trap / Extreme Word',
    label: 'Trap / Extreme Word',
    color: 'text-orange-800 dark:text-orange-200',
    bgColor: 'bg-orange-100 dark:bg-orange-950/40',
    borderColor: 'border-orange-300 dark:border-orange-800',
    dotColor: 'bg-orange-500',
    description: 'Fell for verbatim acoustic repetition, half-right modifier, or extreme claims (always, only, never).',
    iconName: 'Target'
  },
  {
    id: 'Grammar / Syntax',
    label: 'Grammar / Syntax',
    color: 'text-indigo-800 dark:text-indigo-200',
    bgColor: 'bg-indigo-100 dark:bg-indigo-950/40',
    borderColor: 'border-indigo-300 dark:border-indigo-800',
    dotColor: 'bg-indigo-500',
    description: 'Misunderstood complex dependent clause, inversion, participial phrase, or pronoun reference.',
    iconName: 'PenTool'
  },
  {
    id: 'Audio Distortion',
    label: 'Audio / Acoustic Gap',
    color: 'text-cyan-800 dark:text-cyan-200',
    bgColor: 'bg-cyan-100 dark:bg-cyan-950/40',
    borderColor: 'border-cyan-300 dark:border-cyan-800',
    dotColor: 'bg-cyan-500',
    description: 'Missed rapid connected speech, assimilation, elision, or subtle lecture tonal shift.',
    iconName: 'Volume2'
  },
  {
    id: 'Missing Proof',
    label: 'Assumed / No Text Proof',
    color: 'text-emerald-800 dark:text-emerald-200',
    bgColor: 'bg-emerald-100 dark:bg-emerald-950/40',
    borderColor: 'border-emerald-300 dark:border-emerald-800',
    dotColor: 'bg-emerald-500',
    description: 'Brought outside real-world knowledge rather than strict evidence located inside the passage.',
    iconName: 'ShieldAlert'
  }
];

export interface ErrorLogItem {
  id: string;
  section: 'reading' | 'listening' | 'speaking' | 'writing' | 'grammar' | 'vocabulary';
  questionTitle: string;
  sourceExercise: string; // e.g. "Reading Taxonomy #3" or "Lecture Biology: Module 1"
  questionType?: string; // e.g. "Inference", "Factual Information", "Listen & Respond"
  userWrongAnswer: string;
  correctAnswer: string;
  explanation: string;
  tags: ErrorTagCategory[];
  notes?: string;
  createdAt: string; // ISO date string
  resolved?: boolean;
}

const STORAGE_KEY = 'toefl_ibt_error_analysis_logs_v1';

export const getStoredErrorLogs = (): ErrorLogItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Return default curated starter log items so the user immediately sees realistic error logs & charts
      const defaultLogs: ErrorLogItem[] = [
        {
          id: 'err-seed-1',
          section: 'reading',
          questionTitle: 'Passage: Speciation in Galapagos Finches — Question 4',
          sourceExercise: 'Reading Skill: Inference Drill',
          questionType: 'Inference',
          userWrongAnswer: 'A. All finch populations migrated to mainland South America during severe droughts.',
          correctAnswer: 'C. Drought conditions exerted selective pressure on beak depth variations.',
          explanation: 'Option A uses the extreme modifier "All" and claims migration which contradicts paragraph 3. Option C captures the inference supported by empirical measurements.',
          tags: ['Trap / Extreme Word', 'Misread Question'],
          notes: 'Watch out for "All" vs "Selective subsample" in biological texts.',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
          resolved: false
        },
        {
          id: 'err-seed-2',
          section: 'reading',
          questionTitle: 'Passage: Early Industrial Steam Engines — Question 7',
          sourceExercise: 'Reading Skill: Terminology in Context',
          questionType: 'Terminology in Context',
          userWrongAnswer: 'B. precarious (assumed it meant "valuable / precious")',
          correctAnswer: 'D. uncertain and hazardous',
          explanation: '"Precarious" in paragraph 4 describes the unstable financial footing of early mining operations, meaning risky or uncertain.',
          tags: ['Vocabulary', 'Careless'],
          notes: 'Confused "precarious" with "precious" during rapid scanning.',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
          resolved: true
        },
        {
          id: 'err-seed-3',
          section: 'listening',
          questionTitle: 'Lecture: Marine Biology — Hydrothermal Vent Ecology (Q3)',
          sourceExercise: 'Listening Studio: Academic Lecture #2',
          questionType: 'Detail / Function',
          userWrongAnswer: 'A. The professor mentions chemosynthesis to praise photosynthetic algae.',
          correctAnswer: 'B. To contrast primary energy sources that do not rely on solar radiation.',
          explanation: 'The professor explicitly emphasized that deep sea vents are isolated from sunlight, using chemosynthesis as the primary alternative.',
          tags: ['Missing Proof', 'Audio Distortion'],
          notes: 'Split-T note was too messy to see the contrast marker "Whereas".',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(),
          resolved: false
        },
        {
          id: 'err-seed-4',
          section: 'reading',
          questionTitle: 'Passage: Mesoamerican Obsidian Trade Networks (Q10)',
          sourceExercise: 'Full Mockup Exam #1',
          questionType: 'Complete Summary',
          userWrongAnswer: 'E. Teotihuacan craftsmen used specialized green obsidian knives for decorative jewelry.',
          correctAnswer: 'B, D, F (Summary Main Ideas)',
          explanation: 'Option E is a minor isolated factual detail mentioned in paragraph 2, not a major overarching thesis of the entire passage.',
          tags: ['Time Pressure', 'Trap / Extreme Word'],
          notes: 'Had only 45 seconds left on the clock for the summary question.',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 84).toISOString(),
          resolved: false
        },
        {
          id: 'err-seed-5',
          section: 'grammar',
          questionTitle: 'Syntax & Inversion: Academic Connector Structure',
          sourceExercise: 'Grammar: C1 Advanced Inversion',
          questionType: 'Sentence Structure',
          userWrongAnswer: 'Seldom scientists have observed such rapid sediment compaction...',
          correctAnswer: 'Seldom have scientists observed such rapid sediment compaction...',
          explanation: 'Negative/limiting adverbs (Seldom, Rarely, Scarcely, Under no circumstances) at sentence head require subject-auxiliary inversion.',
          tags: ['Grammar / Syntax', 'Careless'],
          notes: 'Remember: Negative adverb at start triggers question-like inversion!',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
          resolved: false
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultLogs));
      return defaultLogs;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load error logs', e);
    return [];
  }
};

export const saveStoredErrorLogs = (logs: ErrorLogItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    window.dispatchEvent(new CustomEvent('toefl-error-logs-updated', { detail: logs }));
  } catch (e) {
    console.error('Failed to save error logs', e);
  }
};

export const addErrorLogEntry = (entry: Omit<ErrorLogItem, 'id' | 'createdAt'>): ErrorLogItem => {
  const current = getStoredErrorLogs();
  const newItem: ErrorLogItem = {
    ...entry,
    id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    resolved: false
  };
  const updated = [newItem, ...current];
  saveStoredErrorLogs(updated);
  return newItem;
};

export const updateErrorLogTags = (id: string, tags: ErrorTagCategory[], notes?: string) => {
  const current = getStoredErrorLogs();
  const updated = current.map(item => {
    if (item.id === id) {
      return {
        ...item,
        tags,
        ...(notes !== undefined ? { notes } : {})
      };
    }
    return item;
  });
  saveStoredErrorLogs(updated);
};

export const toggleErrorLogResolved = (id: string) => {
  const current = getStoredErrorLogs();
  const updated = current.map(item => {
    if (item.id === id) {
      return { ...item, resolved: !item.resolved };
    }
    return item;
  });
  saveStoredErrorLogs(updated);
};

export const deleteErrorLogEntry = (id: string) => {
  const current = getStoredErrorLogs();
  const updated = current.filter(item => item.id !== id);
  saveStoredErrorLogs(updated);
};

// Analytics computation helper
export interface ErrorTagAnalytics {
  tagCounts: Record<ErrorTagCategory, number>;
  totalErrors: number;
  resolvedCount: number;
  unresolvedCount: number;
  sectionBreakdown: Record<string, number>;
  topMistakeTag: { tag: ErrorTagCategory; count: number; percentage: number } | null;
  tagDistribution: Array<{
    name: string;
    tag: ErrorTagCategory;
    count: number;
    percentage: number;
    color: string;
    description: string;
  }>;
}

export const computeErrorTagAnalytics = (logs: ErrorLogItem[]): ErrorTagAnalytics => {
  const tagCounts: Record<ErrorTagCategory, number> = {
    'Careless': 0,
    'Vocabulary': 0,
    'Time Pressure': 0,
    'Misread Question': 0,
    'Trap / Extreme Word': 0,
    'Grammar / Syntax': 0,
    'Audio Distortion': 0,
    'Missing Proof': 0
  };

  const sectionBreakdown: Record<string, number> = {
    reading: 0,
    listening: 0,
    speaking: 0,
    writing: 0,
    grammar: 0,
    vocabulary: 0
  };

  let resolvedCount = 0;

  logs.forEach(log => {
    if (log.resolved) resolvedCount++;
    if (sectionBreakdown[log.section] !== undefined) {
      sectionBreakdown[log.section]++;
    } else {
      sectionBreakdown[log.section] = 1;
    }

    log.tags.forEach(t => {
      if (tagCounts[t] !== undefined) {
        tagCounts[t]++;
      }
    });
  });

  const totalTagInstances = Object.values(tagCounts).reduce((a, b) => a + b, 0);

  const tagDistribution = ERROR_TAG_DEFINITIONS.map(def => {
    const count = tagCounts[def.id] || 0;
    const percentage = totalTagInstances > 0 ? Math.round((count / totalTagInstances) * 100) : 0;
    return {
      name: def.label,
      tag: def.id,
      count,
      percentage,
      color: def.dotColor,
      description: def.description
    };
  }).sort((a, b) => b.count - a.count);

  const top = tagDistribution[0] && tagDistribution[0].count > 0 ? {
    tag: tagDistribution[0].tag,
    count: tagDistribution[0].count,
    percentage: tagDistribution[0].percentage
  } : null;

  return {
    tagCounts,
    totalErrors: logs.length,
    resolvedCount,
    unresolvedCount: logs.length - resolvedCount,
    sectionBreakdown,
    topMistakeTag: top,
    tagDistribution
  };
};
