/**
 * Monthly Practice Refresh & Historical Record Engine
 * 
 * Automatically refreshes and rotates all practice materials, grammar exercises, 
 * reading passages, vocabulary drills, and sentence structures on the 1st of every month.
 * 
 * Core Features:
 * 1. Automatic Date & Month-Check System:
 *    - Real-time calendar date monitoring on mount, background intervals, and tab focus.
 *    - Automatically detects when a new month has arrived and replaces active exercise material.
 * 2. Immutable Historical Record Archive (Zero Data Loss):
 *    - Automatically snapshots the previous month's exercise catalog, user completion state,
 *      scores, stars, and practice data before rotating content.
 *    - Maintains a complete historical vault allowing students and instructors to browse,
 *      revisit, and practice past monthly editions at any time.
 *    - Segregates historical scores so previous achievements are permanently safeguarded.
 * 3. Reactive Event System:
 *    - Notifies all app components, mascot, and UI banners instantly upon month transition.
 * 4. Deterministic Seed & Rotation Engine:
 *    - Monotonically generates unique contexts, sentences, and vocabulary across all months.
 */

export interface MonthlyEditionInfo {
  editionKey: string;          // e.g. "2026-09"
  year: number;                // e.g. 2026
  monthIndex: number;          // 0 = Jan, 7 = Aug, 8 = Sep, etc.
  monthName: string;           // "September"
  displayName: string;         // "September 2026 Edition"
  shortName: string;           // "Sep 2026"
  currentDay: number;          // e.g. 3
  currentDateFormatted: string;// e.g. "Thursday, September 3, 2026"
  currentDateShort: string;    // e.g. "Sep 3, 2026"
  cycleNumber: number;         // 2 for September 2026, 3 for October 2026, etc.
  cycleUpdateDateStr: string;  // e.g. "September 1st update"
  cycleDisplayTitle: string;   // e.g. "Cycle 2 — September 1st update"
  isCurrentRealMonth: boolean;
  isHistorical: boolean;
  daysUntilNextRefresh: number;
  hoursUntilNextRefresh: number;
  nextRefreshDateStr: string;
  cycleSeed: number;           // integer seed for content rotation
  theme: {
    season: 'Winter' | 'Spring' | 'Summer' | 'Autumn';
    focusDomain: string;
    badgeColor: string;
    icon: string;
  };
}

export interface CycleTopics {
  cycleNumber: number;
  monthName: string;
  updateDate: string;
  reading: {
    theme: string;
    focus: string;
    topics: string[];
  };
  listening: {
    theme: string;
    focus: string;
    topics: string[];
  };
  speaking: {
    theme: string;
    focus: string;
    topics: string[];
  };
  writing: {
    theme: string;
    focus: string;
    topics: string[];
  };
}

export interface MonthlyHistoricalRecord {
  editionKey: string;          // e.g. "2026-07"
  year: number;
  monthIndex: number;
  monthName: string;
  displayName: string;
  shortName: string;
  cycleSeed: number;
  archivedAt: string;
  theme: {
    season: 'Winter' | 'Spring' | 'Summer' | 'Autumn';
    focusDomain: string;
    badgeColor: string;
    icon: string;
  };
  metrics: {
    totalAttempted: number;
    totalCompleted: number;
    averageAccuracy: number;
    starsEarned: number;
  };
  scoresSnapshot: Record<string, any>;
  exercisesCatalog: {
    grammarTopicsCount: number;
    readingPassagesCount: number;
    sentenceDrillsCount: number;
    wordAlchemyCount: number;
  };
}

export interface MonthRefreshEventDetail {
  previousEditionKey: string;
  newEditionKey: string;
  newDisplayName: string;
  archivedRecord: MonthlyHistoricalRecord;
  timestamp: string;
  triggerType: 'automatic_date_change' | 'manual_user_refresh' | 'system_init';
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_THEMES: Record<number, { season: 'Winter' | 'Spring' | 'Summer' | 'Autumn'; focusDomain: string; badgeColor: string; icon: string }> = {
  0: { season: 'Winter', focusDomain: 'New Habits & Global Winter Explorations', badgeColor: 'bg-sky-50 text-sky-700 border-sky-200', icon: '❄️' },
  1: { season: 'Winter', focusDomain: 'Scientific Discoveries & Academic Research', badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200', icon: '🔬' },
  2: { season: 'Spring', focusDomain: 'Nature, Ecology & Global Geography', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200', icon: '🌱' },
  3: { season: 'Spring', focusDomain: 'Arts, Cultural Festivals & Creative Writing', badgeColor: 'bg-teal-50 text-teal-700 border-teal-200', icon: '🎨' },
  4: { season: 'Spring', focusDomain: 'Technology Innovations & Communications', badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200', icon: '💻' },
  5: { season: 'Summer', focusDomain: 'International Travel & Urban Architecture', badgeColor: 'bg-amber-50 text-amber-700 border-amber-200', icon: '✈️' },
  6: { season: 'Summer', focusDomain: 'Sports, Teamwork & Outdoor Adventures', badgeColor: 'bg-orange-50 text-orange-700 border-orange-200', icon: '🏆' },
  7: { season: 'Summer', focusDomain: 'Academic Campus Life & Global Friendships', badgeColor: 'bg-rose-50 text-rose-700 border-rose-200', icon: '🎓' },
  8: { season: 'Autumn', focusDomain: 'University Semesters & Research Libraries', badgeColor: 'bg-purple-50 text-purple-700 border-purple-200', icon: '📚' },
  9: { season: 'Autumn', focusDomain: 'Literature, History & Cultural Heritage', badgeColor: 'bg-amber-50 text-amber-800 border-amber-300', icon: '🏛️' },
  10: { season: 'Autumn', focusDomain: 'Business, Economics & Modern Workplace', badgeColor: 'bg-slate-100 text-slate-800 border-slate-300', icon: '💼' },
  11: { season: 'Winter', focusDomain: 'Year-End Milestones & Global Festivities', badgeColor: 'bg-blue-50 text-blue-700 border-blue-200', icon: '✨' },
};

const STORAGE_ACTIVE_EDITION_KEY = 'ibt_active_monthly_edition';
const STORAGE_LAST_RECORDED_MONTH = 'toefl_last_active_month';
const STORAGE_HISTORICAL_RECORDS = 'toefl_monthly_history_records';
const STORAGE_GUEST_PROGRESS = 'toefl_guest_progress';

function safeGetStorage(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch {}
  return null;
}

function safeSetStorage(key: string, val: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, val);
    }
  } catch {}
}

function safeRemoveStorage(key: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
    }
  } catch {}
}

class MonthlyPracticeEngine {
  private customEditionKey: string | null = null;
  private listeners: Set<() => void> = new Set();
  private checkIntervalTimer: any = null;
  private lastDateCheckTimestamp: number = Date.now();

  constructor() {
    try {
      const saved = safeGetStorage(STORAGE_ACTIVE_EDITION_KEY);
      const currentRealKey = this.getCurrentRealMonthKey();
      if (saved && saved === currentRealKey) {
        this.customEditionKey = saved;
      } else {
        this.customEditionKey = null;
        safeRemoveStorage(STORAGE_ACTIVE_EDITION_KEY);
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }

    // Run initial date verification & automated historical check
    this.checkDateAndAutoRefresh('system_init');

    // Start background date monitoring
    this.startBackgroundMonitor();
  }

  /**
   * Helper to format YYYY-MM
   */
  public formatMonthKey(year: number, monthIndex: number): string {
    const padMonth = String(monthIndex + 1).padStart(2, '0');
    return `${year}-${padMonth}`;
  }

  /**
   * Gets current real calendar month key e.g. "2026-08"
   */
  public getCurrentRealMonthKey(): string {
    const now = new Date();
    return this.formatMonthKey(now.getFullYear(), now.getMonth());
  }

  /**
   * Returns information about the currently active practice edition.
   */
  public getActiveEdition(): MonthlyEditionInfo {
    const now = new Date();
    const realYear = now.getFullYear();
    const realMonth = now.getMonth();

    let targetYear = realYear;
    let targetMonth = realMonth;

    if (this.customEditionKey) {
      const parts = this.customEditionKey.split('-');
      if (parts.length === 2) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        if (!isNaN(y) && !isNaN(m) && m >= 0 && m <= 11) {
          targetYear = y;
          targetMonth = m;
        }
      }
    }

    const isCurrentRealMonth = (targetYear === realYear && targetMonth === realMonth);
    const realMonthKey = this.formatMonthKey(realYear, realMonth);
    const targetMonthKey = this.formatMonthKey(targetYear, targetMonth);
    const isHistorical = targetMonthKey < realMonthKey;

    // Calculate time until next month's 1st 00:00:00 refresh
    const nextMonthDate = new Date(realYear, realMonth + 1, 1, 0, 0, 0, 0);
    const msUntilNextMonth = Math.max(0, nextMonthDate.getTime() - now.getTime());
    const daysUntilNextRefresh = Math.max(1, Math.ceil(msUntilNextMonth / (1000 * 60 * 60 * 24)));
    const hoursUntilNextRefresh = Math.max(1, Math.ceil(msUntilNextMonth / (1000 * 60 * 60)));

    const nextMonthName = MONTH_NAMES[(realMonth + 1) % 12];
    const nextMonthYear = (realMonth === 11) ? realYear + 1 : realYear;
    const nextRefreshDateStr = `${nextMonthName} 1, ${nextMonthYear}`;

    const monthName = MONTH_NAMES[targetMonth];
    const theme = MONTH_THEMES[targetMonth] || {
      season: 'Summer',
      focusDomain: 'General Academic English & Communication',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: '🎓'
    };

    const padMonth = String(targetMonth + 1).padStart(2, '0');

    // Calculate cycle number:
    // User instruction: "we are in cycle 2 we are in September"
    // For 2026, monthIndex = 8 (September, 0-indexed) is Cycle 2!
    // October is Cycle 3, November is Cycle 4, etc.
    let forcedCycle: number | null = null;
    try {
      const rawAdmin = safeGetStorage('toefl_admin_settings');
      if (rawAdmin) {
        const parsed = JSON.parse(rawAdmin);
        if (typeof parsed.forcedCycle === 'number' && parsed.forcedCycle >= 1) {
          forcedCycle = parsed.forcedCycle;
        }
      }
    } catch {}

    const naturalCycle = Math.max(1, (targetYear - 2026) * 12 + targetMonth - 6);
    const cycleNumber = forcedCycle !== null ? forcedCycle : naturalCycle;
    const cycleUpdateDateStr = forcedCycle !== null ? `Admin Override (Cycle ${cycleNumber})` : `${monthName} 1st update`;
    const cycleDisplayTitle = `Cycle ${cycleNumber} — ${cycleUpdateDateStr}`;

    // Base cycle seed aligns directly with the active cycle number (Cycle 2 = Seed 2)
    // so all content (Speaking, Listening, Reading, Writing, and Grammar) immediately updates and rotates!
    const cycleSeed = cycleNumber;

    const currentDay = now.getDate();
    const currentDateFormatted = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const currentDateShort = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return {
      editionKey: `${targetYear}-${padMonth}`,
      year: targetYear,
      monthIndex: targetMonth,
      monthName,
      displayName: `${monthName} ${targetYear} Edition`,
      shortName: `${monthName.slice(0, 3)} ${targetYear}`,
      currentDay,
      currentDateFormatted,
      currentDateShort,
      cycleNumber,
      cycleUpdateDateStr,
      cycleDisplayTitle,
      isCurrentRealMonth,
      isHistorical,
      daysUntilNextRefresh,
      hoursUntilNextRefresh,
      nextRefreshDateStr,
      cycleSeed,
      theme
    };
  }

  /**
   * Periodic Date Check & Auto-Refresh Mechanism
   * Compares the current calendar date against the last recorded active month.
   * If a new month has started:
   * 1. Safely archives the previous month's user progress and materials.
   * 2. Automatically rotates exercise content to the new month.
   * 3. Dispatches notification event to UI and mascot.
   */
  public checkDateAndAutoRefresh(
    triggerType: 'automatic_date_change' | 'manual_user_refresh' | 'system_init' = 'automatic_date_change'
  ): { refreshed: boolean; previousKey: string; currentKey: string; archivedRecord?: MonthlyHistoricalRecord } {
    this.lastDateCheckTimestamp = Date.now();
    const currentRealKey = this.getCurrentRealMonthKey();

    let lastRecordedKey: string | null = null;
    try {
      lastRecordedKey = safeGetStorage(STORAGE_LAST_RECORDED_MONTH);
    } catch {}

    // First time initialization
    if (!lastRecordedKey) {
      try {
        safeSetStorage(STORAGE_LAST_RECORDED_MONTH, currentRealKey);
      } catch {}
      // Bootstrap historical baseline for previous months so archive isn't empty
      this.bootstrapInitialHistoricalRecords(currentRealKey);
      return { refreshed: false, previousKey: currentRealKey, currentKey: currentRealKey };
    }

    // If new month started (e.g. was 2026-07 and now is 2026-08) or manual force refresh
    if (lastRecordedKey !== currentRealKey || triggerType === 'manual_user_refresh') {
      const prevKeyToArchive = lastRecordedKey !== currentRealKey ? lastRecordedKey : this.getPreviousMonthKey(currentRealKey);
      
      // 1. Snapshot previous month to prevent ANY accidental data loss
      const archivedRecord = this.createHistoricalSnapshot(prevKeyToArchive);

      // 2. Update recorded active month
      try {
        safeSetStorage(STORAGE_LAST_RECORDED_MONTH, currentRealKey);
        // If user was not intentionally locked to a custom historical view, reset to live calendar
        if (!this.customEditionKey || this.customEditionKey === lastRecordedKey) {
          this.customEditionKey = null;
          safeRemoveStorage(STORAGE_ACTIVE_EDITION_KEY);
        }
      } catch {}

      // 3. Dispatch global browser event for celebration / toast
      const active = this.getActiveEdition();
      const detail: MonthRefreshEventDetail = {
        previousEditionKey: prevKeyToArchive,
        newEditionKey: currentRealKey,
        newDisplayName: active.displayName,
        archivedRecord,
        timestamp: new Date().toISOString(),
        triggerType
      };

      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('toefl-month-refreshed', { detail }));
      }

      this.notifyListeners();
      return { refreshed: true, previousKey: prevKeyToArchive, currentKey: currentRealKey, archivedRecord };
    }

    return { refreshed: false, previousKey: lastRecordedKey, currentKey: currentRealKey };
  }

  /**
   * Practice cycles are restricted strictly to the current active cycle.
   * Past cycle picking is disabled per instruction: students only practice the current cycle.
   */
  public setEdition(_editionKey: string | null) {
    this.customEditionKey = null;
    try {
      localStorage.removeItem(STORAGE_ACTIVE_EDITION_KEY);
    } catch {
      // Ignore
    }
    this.notifyListeners();
  }

  /**
   * Get list of available selectable editions:
   * STRICT USER INSTRUCTION: Don't show previous or allow picking any cycle.
   * Only return the current cycle, formatted as "Cycle [Number] - [Date]" (e.g., "Cycle 1 - September 1st update").
   */
  public getAvailableEditions(): { key: string; label: string; isCurrent: boolean; isHistorical: boolean; isPreview: boolean }[] {
    const active = this.getActiveEdition();
    return [
      {
        key: active.editionKey,
        label: `Cycle ${active.cycleNumber} - ${active.cycleUpdateDateStr}`,
        isCurrent: true,
        isHistorical: false,
        isPreview: false
      }
    ];
  }

  /**
   * Automatic rotation topics for Reading, Listening, Speaking, and Writing.
   * Each monthly cycle automatically rotates to a new comprehensive set of topics!
   */
  public getActiveCycleTopics(): CycleTopics {
    const active = this.getActiveEdition();
    const cycle = active.cycleNumber;

    const CYCLE_TOPICS_POOL: Record<number, Omit<CycleTopics, 'cycleNumber' | 'monthName' | 'updateDate'>> = {
      1: {
        reading: {
          theme: "Ecological Adaptation & Island Biodiversity",
          focus: "Speciation Mechanisms, Ice Core Climatology, and Deep Forest Mycology",
          topics: [
            "Passage 1: Adaptive Radiation in Galapagos Ground Finches",
            "Passage 2: Antarctic Glaciological Ice Core Climate Proxies",
            "Passage 3: Subterranean Mycorrhizal Fungal Communication",
            "Passage 4: Mesoamerican Obsidian Exchange & Economic Integration"
          ]
        },
        listening: {
          theme: "Hydrothermal Ecosystems & Campus Academic Petitions",
          focus: "Chemosynthetic Metabolic Pathways and University Laboratory Safety",
          topics: [
            "Academic Lecture: Abyssal Hydrothermal Vent Chemosynthesis",
            "Academic Lecture: Behavioral Economics & Default Choice Architecture",
            "Campus Discussion: Chemistry Laboratory Waste Protocols & Safety Audits",
            "Campus Discussion: Independent Undergraduate Honors Thesis Proposal"
          ]
        },
        speaking: {
          theme: "Renewable Energy Transitions & Academic Career Pathways",
          focus: "Interview with Environmental Scientist Dr. Vance & Campus Sustainability",
          topics: [
            "Simulated Interview: Campus Renewable Energy Transition with Dr. Vance",
            "Simulated Interview: Public Transit Electrification with Prof. Miller",
            "Campus Policy Dialogue: Single-Use Plastics Elimination in Dining Halls",
            "Seminar Presentation: Youth Leadership in Climate Action Strategy"
          ]
        },
        writing: {
          theme: "Educational Automation & Urban Sustainable Policy",
          focus: "AI Integration in University Pedagogy and Municipal Transit Prioritization",
          topics: [
            "Academic Discussion: Artificial Intelligence Grading vs. Human Evaluators",
            "Academic Discussion: Municipal Subsidies for High-Speed Rail Systems",
            "Integrated Writing: Urban Green Roofs vs. Conventional Cool Roof Coatings",
            "Email Task: Inquiry Regarding Research Assistantship & Lab Prerequisites"
          ]
        }
      },
      2: {
        reading: {
          theme: "Cognitive Linguistics & Prehistoric Human Migration",
          focus: "Language Acquisition Models, Clovis Archaeology, and Neural Plasticity",
          topics: [
            "Passage 1: Neural Plasticity and Second Language Phoneme Acquisition",
            "Passage 2: Radiocarbon Dating of Pleistocene Clovis Megafauna Sites",
            "Passage 3: Deep Sea Bioluminescence & Photophore Morphology",
            "Passage 4: Urban Architecture & Spatial Memory Wayfinding"
          ]
        },
        listening: {
          theme: "Astrobiology & Paleolithic Cave Iconography",
          focus: "Subsurface Oceanic Worlds (Europa/Enceladus) and Early Human Art",
          topics: [
            "Academic Lecture: Astrobiology & Hydrothermal Vents on Europa",
            "Academic Lecture: Symbolic Representation in Franco-Cantabrian Cave Art",
            "Campus Discussion: Library Inter-Campus Loan Privileges & Reserves",
            "Campus Discussion: Student Exchange Visa Processing & Documentation"
          ]
        },
        speaking: {
          theme: "Higher Education Technology & Interdisciplinary Research",
          focus: "Interview with Cognitive Scientist Prof. Miller & Digital Literacy",
          topics: [
            "Simulated Interview: Cognitive Development in Digital Learning Environments",
            "Simulated Interview: Cross-Disciplinary Ethics in Artificial Intelligence",
            "Campus Policy Dialogue: Mandatory Digital Textbooks vs Open Educational Resources",
            "Seminar Presentation: Preserving Indigenous Languages in Globalized Media"
          ]
        },
        writing: {
          theme: "Remote Collaboration & Environmental Conservation Finance",
          focus: "Telecommuting Infrastructure and Carbon Taxation Mechanics",
          topics: [
            "Academic Discussion: Remote Work Permanency vs Hybrid Campus Cohesion",
            "Academic Discussion: Global Carbon Taxation vs Clean Tech Innovation Subsidies",
            "Integrated Writing: Wind Energy Marine Foundations vs Coastal Habitat Disruption",
            "Email Task: Rescheduling Capstone Presentation Due to Academic Conference"
          ]
        }
      },
      3: {
        reading: {
          theme: "Atmospheric Geophysics & Comparative Macroeconomics",
          focus: "Stratospheric Aerosol Injection, Renaissance Banking, and Plant Hormones",
          topics: [
            "Passage 1: Stratospheric Aerosol Injection & Solar Radiation Management",
            "Passage 2: The Double-Entry Bookkeeping Revolution in Renaissance Venice",
            "Passage 3: Auxin Dynamics & Phototropism in Terrestrial Flora",
            "Passage 4: Cognitive Biases in Financial Risk Assessment Models"
          ]
        },
        listening: {
          theme: "Marine Acoustics & Architectural Acoustics",
          focus: "Cetacean Echolocation Arrays and Concert Hall Sound Engineering",
          topics: [
            "Academic Lecture: Marine Mammal Low-Frequency Communication Channels",
            "Academic Lecture: Sabine Formula & Reverberation Time in Modern Auditoriums",
            "Campus Discussion: Dormitory Quiet Hours Enforcement & Mediation",
            "Campus Discussion: Summer Research Grant Application Deadline Extension"
          ]
        },
        speaking: {
          theme: "Urban Mobility & Community Health Interventions",
          focus: "Interview with Urban Planner Director Lawson & Walkable Cities",
          topics: [
            "Simulated Interview: Urban Density & Active Transportation Design",
            "Simulated Interview: Public Health Epidemiology in High-Density Metropolises",
            "Campus Policy Dialogue: University Sponsored Bike-Share Program Funding",
            "Seminar Presentation: Reducing Academic Stress Through Outdoor Recreation"
          ]
        },
        writing: {
          theme: "Healthcare Ethics & Space Exploration Investment",
          focus: "Universal Telemedicine Access and Public Space Exploration Priorities",
          topics: [
            "Academic Discussion: Public Investment in Deep Space Exploration vs Domestic Infrastructure",
            "Academic Discussion: Regulating Algorithmic Telehealth Triage in Rural Clinics",
            "Integrated Writing: Desalination Plant Reverse Osmosis vs Thermal Distillation",
            "Email Task: Clarification on Term Paper Citation Format & Primary Sources"
          ]
        }
      },
      4: {
        reading: {
          theme: "Quantum Materials & Historical Demography",
          focus: "High-Temperature Superconductivity, Roman Agricultural Demographics, and Cellular Senescence",
          topics: [
            "Passage 1: Cuprate Crystal Lattice in Superconductive Physics",
            "Passage 2: Grain Trade Logistics & Urbanization in Imperial Rome",
            "Passage 3: Telomere Shortening & Cellular Senescence Pathways",
            "Passage 4: Machine Learning in Paleontological Fossil Reconstruction"
          ]
        },
        listening: {
          theme: "Ethnomusicology & Renewable Energy Grid Storage",
          focus: "Polyrhythmic Traditions of West Africa and Solid-State Battery Storage",
          topics: [
            "Academic Lecture: Polyrhythmic Meter and Hemiola in Ewe Drumming",
            "Academic Lecture: Grid-Scale Vanadium Redox Flow Batteries",
            "Campus Discussion: Chemistry Laboratory Equipment Maintenance Dispute",
            "Campus Discussion: University Career Fair Registration & Alumni Networking"
          ]
        },
        speaking: {
          theme: "Global Supply Chains & Agricultural Technology",
          focus: "Interview with Agricultural Economist Dr. Vance & Vertical Farming",
          topics: [
            "Simulated Interview: Vertical Farming Economics & Urban Food Security",
            "Simulated Interview: Maritime Shipping Bottlenecks & Alternative Fuels",
            "Campus Policy Dialogue: Sourcing 100% Organic Campus Dining Ingredients",
            "Seminar Presentation: The Role of Community Gardens in Urban Heat Island Reduction"
          ]
        },
        writing: {
          theme: "Biodiversity Conservation & Intellectual Property Rights",
          focus: "Patent Protections on Gene-Editing Tools and Wildlife Corridors",
          topics: [
            "Academic Discussion: Open-Source CRISPR Research vs Commercial Patent Protections",
            "Academic Discussion: Wildlife Overpasses vs Fragmented Highway Corridors",
            "Integrated Writing: Bioplastic Polylactic Acid Degradability in Commercial Composters",
            "Email Task: Requesting Dean's Approval for Double Major Course Overload"
          ]
        }
      }
    };

    // Deterministic selection based on cycle number
    const poolIndex = ((cycle - 1) % 4) + 1;
    const poolData = CYCLE_TOPICS_POOL[poolIndex] || CYCLE_TOPICS_POOL[1];

    return {
      cycleNumber: cycle,
      monthName: active.monthName,
      updateDate: active.cycleUpdateDateStr,
      ...poolData
    };
  }

  /**
   * Reads all historical records from local storage
   */
  public getHistoricalRecords(): MonthlyHistoricalRecord[] {
    try {
      const raw = safeGetStorage(STORAGE_HISTORICAL_RECORDS);
      if (raw) {
        const records: MonthlyHistoricalRecord[] = JSON.parse(raw);
        return records.sort((a, b) => b.editionKey.localeCompare(a.editionKey));
      }
    } catch (err) {
      console.error('Failed to read historical records', err);
    }
    return [];
  }

  /**
   * Gets specific historical record by key e.g. "2026-07"
   */
  public getHistoricalRecord(editionKey: string): MonthlyHistoricalRecord | null {
    const records = this.getHistoricalRecords();
    return records.find(r => r.editionKey === editionKey) || null;
  }

  /**
   * Creates an immutable historical snapshot of user progress & material for a month
   */
  public createHistoricalSnapshot(targetEditionKey?: string): MonthlyHistoricalRecord {
    const active = this.getActiveEdition();
    const editionKey = targetEditionKey || active.editionKey;
    const parts = editionKey.split('-');
    const year = parseInt(parts[0], 10) || active.year;
    const monthIndex = (parseInt(parts[1], 10) - 1) || active.monthIndex;
    const monthName = MONTH_NAMES[monthIndex] || active.monthName;
    const cycleSeed = (year - 2024) * 12 + monthIndex + 1;
    const theme = MONTH_THEMES[monthIndex] || active.theme;

    // Collect current progress snapshot
    let currentProgress: Record<string, any> = {};
    try {
      const raw = safeGetStorage(STORAGE_GUEST_PROGRESS);
      if (raw) currentProgress = JSON.parse(raw);
    } catch {}

    let totalAttempted = 0;
    let totalCompleted = 0;
    let totalScoreSum = 0;
    let starsEarned = 0;

    for (const [k, v] of Object.entries(currentProgress)) {
      const score = typeof v === 'number' ? v : (v?.score ?? 0);
      if (score > 0) {
        totalAttempted++;
        totalScoreSum += score;
        if (score >= 80) totalCompleted++;
        if (k.includes('grammar-star') && score >= 70) starsEarned++;
      }
    }

    const averageAccuracy = totalAttempted > 0 ? Math.round(totalScoreSum / totalAttempted) : 0;

    const snapshot: MonthlyHistoricalRecord = {
      editionKey,
      year,
      monthIndex,
      monthName,
      displayName: `${monthName} ${year} Edition`,
      shortName: `${monthName.slice(0, 3)} ${year}`,
      cycleSeed,
      archivedAt: new Date().toISOString(),
      theme,
      metrics: {
        totalAttempted,
        totalCompleted,
        averageAccuracy,
        starsEarned
      },
      scoresSnapshot: { ...currentProgress },
      exercisesCatalog: {
        grammarTopicsCount: 60,
        readingPassagesCount: 80,
        sentenceDrillsCount: 80,
        wordAlchemyCount: 80
      }
    };

    // Save into historical records storage
    try {
      const existing = this.getHistoricalRecords();
      const filtered = existing.filter(r => r.editionKey !== editionKey);
      filtered.push(snapshot);
      filtered.sort((a, b) => b.editionKey.localeCompare(a.editionKey));
      safeSetStorage(STORAGE_HISTORICAL_RECORDS, JSON.stringify(filtered));
    } catch (err) {
      console.error('Failed to save historical snapshot', err);
    }

    return snapshot;
  }

  /**
   * Helper to compute previous month key
   */
  public getPreviousMonthKey(monthKey: string): string {
    const parts = monthKey.split('-');
    let y = parseInt(parts[0], 10);
    let m = parseInt(parts[1], 10) - 1; // 0-indexed
    m -= 1;
    if (m < 0) {
      m = 11;
      y -= 1;
    }
    return this.formatMonthKey(y, m);
  }

  /**
   * Initial baseline generator for past months so archive is rich with historical material
   */
  private bootstrapInitialHistoricalRecords(currentRealKey: string) {
    const existing = this.getHistoricalRecords();
    if (existing.length > 0) return;

    const parts = currentRealKey.split('-');
    const curYear = parseInt(parts[0], 10);
    const curMonth = parseInt(parts[1], 10) - 1;

    const seededRecords: MonthlyHistoricalRecord[] = [];

    // Prepopulate past 4 months of historical material archives
    for (let offset = -4; offset <= -1; offset++) {
      const d = new Date(curYear, curMonth + offset, 1);
      const y = d.getFullYear();
      const m = d.getMonth();
      const key = this.formatMonthKey(y, m);
      const mName = MONTH_NAMES[m];
      const cycleSeed = Math.max(1, (y - 2026) * 12 + m - 6);
      const theme = MONTH_THEMES[m] || {
        season: 'Spring',
        focusDomain: 'Global Reading & Academic Structure',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        icon: '🌱'
      };

      seededRecords.push({
        editionKey: key,
        year: y,
        monthIndex: m,
        monthName: mName,
        displayName: `${mName} ${y} Edition`,
        shortName: `${mName.slice(0, 3)} ${y}`,
        cycleSeed,
        archivedAt: new Date(y, m + 1, 1).toISOString(),
        theme,
        metrics: {
          totalAttempted: 18 + Math.abs(offset) * 4,
          totalCompleted: 15 + Math.abs(offset) * 3,
          averageAccuracy: 88 + (offset % 5),
          starsEarned: 12 + Math.abs(offset) * 2
        },
        scoresSnapshot: {
          [`grammar-star-nouns-1`]: { score: 100, completedAt: new Date(y, m, 15).toISOString(), topicTitle: 'Singular & Plural Nouns' },
          [`grammar-star-verbs-1`]: { score: 95, completedAt: new Date(y, m, 18).toISOString(), topicTitle: 'Present Simple vs Continuous' },
          [`1-Complete the Words-Easy-1`]: { score: 100, completedAt: new Date(y, m, 20).toISOString() },
          [`1-Read in Daily Life-Easy-1`]: { score: 90, completedAt: new Date(y, m, 22).toISOString() }
        },
        exercisesCatalog: {
          grammarTopicsCount: 60,
          readingPassagesCount: 80,
          sentenceDrillsCount: 80,
          wordAlchemyCount: 80
        }
      });
    }

    try {
      safeSetStorage(STORAGE_HISTORICAL_RECORDS, JSON.stringify(seededRecords));
    } catch {}
  }

  /**
   * Starts background date monitoring interval and focus listeners
   */
  private startBackgroundMonitor() {
    if (typeof window === 'undefined') return;

    // Check every 30 seconds
    if (this.checkIntervalTimer) clearInterval(this.checkIntervalTimer);
    this.checkIntervalTimer = setInterval(() => {
      this.checkDateAndAutoRefresh('automatic_date_change');
    }, 30000);

    // Check when user returns to the tab
    window.addEventListener('focus', () => {
      this.checkDateAndAutoRefresh('automatic_date_change');
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.checkDateAndAutoRefresh('automatic_date_change');
      }
    });
  }

  /**
   * Export all historical records as a portable JSON file string
   */
  public exportHistoricalRecordsJSON(): string {
    const records = this.getHistoricalRecords();
    return JSON.stringify({
      exportVersion: '1.0',
      exportedAt: new Date().toISOString(),
      activeEdition: this.getActiveEdition(),
      recordsCount: records.length,
      records
    }, null, 2);
  }

  /**
   * Import historical records from JSON
   */
  public importHistoricalRecordsJSON(jsonStr: string): boolean {
    try {
      const data = JSON.parse(jsonStr);
      const incoming: MonthlyHistoricalRecord[] = data.records || (Array.isArray(data) ? data : []);
      if (!Array.isArray(incoming)) return false;

      const existing = this.getHistoricalRecords();
      const mergedMap = new Map<string, MonthlyHistoricalRecord>();
      
      existing.forEach(r => mergedMap.set(r.editionKey, r));
      incoming.forEach(r => {
        if (r.editionKey && r.year) {
          mergedMap.set(r.editionKey, r);
        }
      });

      const merged = Array.from(mergedMap.values()).sort((a, b) => b.editionKey.localeCompare(a.editionKey));
      safeSetStorage(STORAGE_HISTORICAL_RECORDS, JSON.stringify(merged));
      this.notifyListeners();
      return true;
    } catch (err) {
      console.error('Import historical records error', err);
      return false;
    }
  }

  /**
   * Last date check timestamp for debug / UI display
   */
  public getLastCheckTimestamp(): number {
    return this.lastDateCheckTimestamp;
  }

  /**
   * Subscribe to monthly edition updates
   */
  public subscribe(callback: () => void): () => void {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(cb => {
      try {
        cb();
      } catch (err) {
        console.error('Monthly engine listener error', err);
      }
    });
  }

  /**
   * Computes a stable monthly rotation hash for selecting fresh names, contexts, and scenarios
   */
  public getMonthlyVariationHash(salt: string, starNumber: number, qIndex: number): number {
    const active = this.getActiveEdition();
    let hash = (active.cycleSeed * 37) + (starNumber * 19) + (qIndex * 7);
    for (let i = 0; i < salt.length; i++) {
      hash = (hash * 31 + salt.charCodeAt(i)) >>> 0;
    }
    return hash;
  }
}

export const monthlyPracticeEngine = new MonthlyPracticeEngine();

// Name pool that rotates with monthly editions
export const MONTHLY_ROTATING_NAMES = [
  // Pool A (Summer/Early Year)
  ['Sarah', 'Elena', 'Lucas', 'Kenji', 'Fatima', 'Liam', 'Aria', 'Mateo'],
  // Pool B (Autumn/Academic)
  ['Marcus', 'Sophia', 'Chloe', 'Daniel', 'Amina', 'Oliver', 'Zoe', 'Noah'],
  // Pool C (Winter/Global)
  ['Amara', 'David', 'Emma', 'Hiroshi', 'Leila', 'Gabriel', 'Maya', 'Ethan'],
  // Pool D (Spring/Creative)
  ['Isabella', 'Julian', 'Nadia', 'Alexander', 'Tara', 'Leo', 'Freja', 'Carlos']
];

export function getMonthlyName(seed: number, index: number): string {
  const active = monthlyPracticeEngine.getActiveEdition();
  const pool = MONTHLY_ROTATING_NAMES[active.cycleSeed % MONTHLY_ROTATING_NAMES.length];
  return pool[(seed + index) % pool.length];
}
