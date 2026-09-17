/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, createContext, useContext, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { 
  BookOpen, 
  Menu, 
  Home, 
  Library, 
  GraduationCap, 
  User, 
  ChevronRight, 
  Info, 
  Terminal, 
  Eye, 
  Layers, 
  Timer, 
  Lightbulb,
  TrendingUp,
  TrendingDown,
  DraftingCompass,
  GitBranch,
  Keyboard,
  Globe,
  FileText,
  ArrowLeft,
  ArrowRight,
  Zap,
  Trophy,
  Target,
  CheckCircle2,
  AlertCircle,
  Type,
  XCircle,
  HelpCircle,
  LayoutList,
  Star,
  Check,
  PlusSquare,
  FilePlus,
  Quote,
  RotateCcw,
  Mic,
  Clock,
  ChevronLeft,
  Search,
  Activity,
  BarChart3,
  Award,
  Sparkles,
  Crosshair,
  RefreshCw,
  AlertTriangle,
  Maximize2,
  Minimize2,
  Link2,
  LayoutGrid,
  Columns,
  Settings,
  Bell,
  LogOut,
  ShieldCheck,
  History,
  Flame,
  Medal,
  Play,
  Pause,
  Volume2,
  Ear,
  Square,
  Upload,
  PenTool,
  ChevronDown,
  X,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  BarChart, Bar, Cell, AreaChart, Area
} from 'recharts';

import { 
  COMPLETE_THE_WORDS_CONTENT, 
  ACADEMIC_PASSAGE_CONTENT, 
  DAILY_LIFE_CONTENT, 
  TERMINOLOGY_CONTENT,
  FACTUAL_INFORMATION_CONTENT,
  NEGATIVE_FACTUAL_CONTENT,
  TERMINOLOGY_IN_CONTEXT_CONTENT,
  RHETORICAL_PURPOSE_CONTENT,
  INFERENCE_CONTENT,
  REFERENCE_CONTENT,
  SENTENCE_SIMPLIFICATION_CONTENT,
  PARAGRAPH_RELATIONSHIPS_CONTENT,
  IMPORTANT_IDEA_CONTENT,
  INSERT_TEXT_CONTENT,
  COMPLETE_SUMMARY_CONTENT,
  COMPLETE_TABLE_CONTENT,
  EASY_TEMPLATES_200,
  NORMAL_TEMPLATES_200,
  HARD_TEMPLATES_200,
  ADVANCED_TEMPLATES_200,
  EASY_TEMPLATES_M2_200,
  NORMAL_TEMPLATES_M2_200,
  HARD_TEMPLATES_M2_200,
  ADVANCED_TEMPLATES_M2_200,
  parseEasyTemplate
} from './exerciseContent';
import { EXAM_PASSAGES, IBT_2026_EXAMS, TOEFLPassage, TOEFLQuestion } from './examContent';
import { LISTENING_EXERCISES, ListeningExercise } from './listeningContent';
import { ListeningSection } from './components/ListeningSection';
import { ListeningExplanation } from './components/ListeningExplanation';
import { ListeningRoadmap } from './components/ListeningRoadmap';
import {
  ListenRespondModulePage,
  AcademicLectureModulePage,
  CampusDiscussionModulePage,
  ListeningGistPage,
  ListeningDetailPage,
  ListeningFunctionPage,
  ListeningAttitudePage,
  ListeningOrganizationPage,
  ListeningConnectingPage,
  ListeningInferencePage,
  ListeningNoteTakingPage,
  ListeningTimeManagementPage,
  ListeningErrorAnalysisPage,
  ListeningAdaptiveTierPage
} from './components/ListeningDeepDivePages';
import { ReadingExplanation } from './components/ReadingExplanation';
import { WritingSection } from './components/WritingSection';
import { WritingExplanation } from './components/WritingExplanation';
import { naturalVoiceEngine } from './utils/audioPlayer';
import { SpeakingSection } from './components/SpeakingSection';
import { SpeakingExplanation } from './components/SpeakingExplanation';
import { SpeakingSkillsPage } from './components/SpeakingSkillsPage';
import { BuildASentenceSection } from './components/BuildASentenceSection';
import { SentenceConstructionExplanation } from './components/SentenceConstructionExplanation';
import { CompleteWordsExplanation } from './components/CompleteWordsExplanation';
import { DailyLifeExplanation } from './components/DailyLifeExplanation';
import { AcademicPassageExplanation } from './components/AcademicPassageExplanation';
import { EnglishGrammarSection } from './components/EnglishGrammarSection';
import { VocabularySection } from './components/VocabularySection';
import { getDailyLifeExerciseSteps } from './daily_life_templates_flat';
import { StudentProfile } from './components/StudentProfile';
import { SettingsModal } from './components/SettingsModal';
import { HomeHeroDashboard } from './components/HomeHeroDashboard';
import { ErrorAnalysisLogManager } from './components/ErrorAnalysisLogManager';
import { useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { getStoredStudentProfile, 
  computeStudentDomainMetrics, 
  StudentProfileData 
} from './utils/studentSettings';
import { MonthlyEditionBanner } from './components/MonthlyEditionBanner';
import { MonthlyRefreshArchiveModal } from './components/MonthlyRefreshArchiveModal';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { 
  CYCLE2_ACADEMIC_PASSAGES, 
  CYCLE2_DAILY_LIFE_PASSAGES, 
  CYCLE2_TERMINOLOGY_CONTENT,
  CYCLE2_FACTUAL_CONTENT, 
  CYCLE2_NEGATIVE_FACTUAL_CONTENT, 
  CYCLE2_RHETORICAL_CONTENT,
  CYCLE2_INFERENCE_CONTENT,
  CYCLE2_REFERENCE_CONTENT,
  CYCLE2_SIMPLIFICATION_CONTENT,
  CYCLE2_RELATIONSHIPS_CONTENT,
  CYCLE2_IMPORTANT_IDEA_CONTENT,
  CYCLE2_INSERT_TEXT_CONTENT,
  CYCLE2_COMPLETE_SUMMARY_CONTENT,
  CYCLE2_COMPLETE_TABLE_CONTENT
} from './data/cycle2ReadingContent';
import { getCycleCompleteWordsTemplate } from './data/cycleCompleteWordsEngine';
import { getEasyCycleDailyLife, getEasyCycleAcademic } from './data/easyCycleReadingContent';
import { TOEFLFourSkillsMockExam } from './components/TOEFLFourSkillsMockExam';
import { ETS_FORMAL_TESTS } from './etsFormalMockData';
import { 
  addErrorLogEntry, 
  updateErrorLogTags, 
  ERROR_TAG_DEFINITIONS, 
  ErrorTagCategory 
} from './utils/errorAnalysisStorage';
import { AdminPortalModal } from './components/AdminPortalModal';
import { adminService, AdminSettings } from './services/adminService';
import { adminReadingService } from './services/adminReadingService';
import { TopAdBanner } from './components/TopAdBanner';
import { SideAdRails } from './components/SideAdRails';

// --- Types ---

type Tab = 'home' | 'englishGrammar' | 'vocabulary' | 'readingSkills' | 'listeningSkills' | 'writingSkills' | 'speakingSkills' | 'practice' | 'profile' | 'completeWords' | 'dailyLife' | 'academicPassage' | 'buildASentence' | 'standardTier' | 'factualInformation' | 'negativeFactual' | 'terminologyInContext' | 'rhetoricalPurpose' | 'inference' | 'reference' | 'sentenceSimplification' | 'paragraphRelationships' | 'importantIdea' | 'insertText' | 'completeSummary' | 'completeTable' | 'timeManagement' | 'errorAnalysis' | 'listenRespondModule' | 'academicLectureModule' | 'campusDiscussionModule' | 'listeningGist' | 'listeningDetail' | 'listeningFunction' | 'listeningAttitude' | 'listeningOrganization' | 'listeningConnecting' | 'listeningInference' | 'listeningNoteTaking' | 'listeningTimeManagement' | 'listeningErrorAnalysis' | 'listeningAdaptiveTier' | 'practiceSession' | 'mockupTest' | 'fourSkillsMockTest';

// --- Mascot Component ---

// --- Contexts ---
const MascotContext = createContext<{
  triggerReaction: (type: 'correct' | 'incorrect') => void;
}>({ triggerReaction: () => {} });

// --- Mascot Component ---

const Mascot = ({ activeTab }: { activeTab: Tab }) => {
  const [isWinking, setIsWinking] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [isSleeping, setIsSleeping] = useState(false);
  const [reaction, setReaction] = useState<'correct' | 'incorrect' | null>(null);
  const [isPet, setIsPet] = useState(false);
  const lastActivityRef = useRef(Date.now());
  const [direction, setDirection] = useState<'front' | 'back' | 'left' | 'right'>('front');
  const [isCrossing, setIsCrossing] = useState(false);
  const [isStumbling, setIsStumbling] = useState(false);
  const [isCrying, setIsCrying] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const controls = useAnimation();

  // Initial animation
  useEffect(() => {
    controls.set({ opacity: 1, scale: 1, y: 0, x: 0 });
  }, []);

  const getMessage = () => {
    if (isHiding) return "Hehe, you can't see me! 🌿";
    if (isCrying) return "Waaaaah! (╥﹏╥) Click to cheer me up!";
    if (isSleeping) return "Zzz... (´-ω-`)";
    if (reaction === 'correct') return "YAY! You're amazing! 🎉";
    if (reaction === 'incorrect') return "It's okay, keep trying! 🥺";

    switch (activeTab) {
      case 'home': return "Welcome back, Scholar! (•ω•)";
      case 'englishGrammar': return "Master your academic syntax! 🖋️";
      case 'vocabulary': return "Expand your academic lexicon! 📖✨";
      case 'readingSkills': return "Let's master reading skills! 📚";
      case 'listeningSkills': return "Train your ears for 2026! 🎧";
      case 'writingSkills': return "Master your writing skills! ✍️";
      case 'speakingSkills': return "Let's speak with confidence! 🎙️";
      case 'practice': return "Time for some drills! 💪";
      case 'mockupTest': return "You got this! Focus! 🎯";
      case 'profile': return "Look at that progress! 🏆";
      case 'factualInformation': return "Find the facts! 🔍";
      case 'negativeFactual': return "What's NOT there? ❌";
      case 'terminologyInContext': return "Context is key! 📖";
      case 'rhetoricalPurpose': return "Why did they write this? 🤔";
      case 'inference': return "Read between the lines! ✨";
      case 'reference': return "What does 'it' refer to? 🔗";
      case 'sentenceSimplification': return "Keep it simple! ✂️";
      case 'paragraphRelationships': return "Connect the dots! 🧩";
      case 'importantIdea': return "What's the big picture? 🖼️";
      case 'insertText': return "Where does it fit? 📥";
      case 'completeSummary': return "Summarize the essence! 📝";
      case 'completeTable': return "Organize the info! 📊";
      case 'timeManagement': return "Watch the clock! ⏱️";
      case 'errorAnalysis': return "Learn from mistakes! 💡";
      default: return "Let's study! (•ω•)";
    }
  };

  // Reaction listener
  useEffect(() => {
    const handleReaction = (e: any) => {
      setReaction(e.detail.type);
      setShowBubble(true);
      setIsSleeping(false);
      lastActivityRef.current = Date.now();
      setDirection('front'); // Always face front for reactions
      
      if (e.detail.type === 'correct') {
        triggerConfetti(false);
        playDingSound();
      } else if (e.detail.type === 'incorrect') {
        setIsCrying(true);
      }
      
      setTimeout(() => setReaction(null), 3200);
    };
    window.addEventListener('mascot-reaction', handleReaction);
    return () => window.removeEventListener('mascot-reaction', handleReaction);
  }, []);

  // Practice Focus Mode: When solving practice exercises, mascot remains stationary so students can focus
  const isPracticeMode = activeTab !== 'home';

  // Keep mascot stationary whenever in practice mode
  useEffect(() => {
    if (isPracticeMode) {
      setIsCrossing(false);
      setIsHiding(false);
      setDirection('front');
      controls.stop();
      controls.set({ x: 0, y: 0, opacity: 1, scale: 1 });
    }
  }, [isPracticeMode, controls]);

  // AFK Detection & Random Turning/Crossing
  useEffect(() => {
    const updateActivity = () => {
      lastActivityRef.current = Date.now();
      if (isSleeping || isHiding || isCrossing) {
        if (isSleeping) setIsSleeping(false);
        if (isHiding) {
          setIsHiding(false);
          controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
        }
        if (isCrossing) {
          setIsCrossing(false);
          controls.stop();
          controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
        }
        if (!isPracticeMode) {
          setDirection('left'); // Show side when waking up
          setTimeout(() => setDirection('front'), 1000);
        }
      }
    };
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('click', updateActivity);

    const checkAFK = setInterval(() => {
      const now = Date.now();
      
      // Safety check: if mascot is off-screen or invisible but not supposed to be
      if (!isHiding && !isCrossing && !isSleeping) {
        controls.start({ x: 0, y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } });
      }

      // In practice mode, stay completely stationary to keep student focused!
      if (isPracticeMode) {
        if (isCrossing || isHiding) {
          setIsCrossing(false);
          setIsHiding(false);
        }
        controls.set({ x: 0, y: 0, opacity: 1 });
        return;
      }

      if (now - lastActivityRef.current > 30000) { // 30 seconds AFK
        if (!isSleeping && !isCrossing && !isHiding) {
          // Randomly hide or sleep
          if (Math.random() < 0.4) {
            startHiding();
          } else if (Math.random() < 0.3) {
            startCrossing();
          } else {
            setIsSleeping(true);
            setDirection('front');
          }
        }
      } else if (!reaction && !isCrossing && !isCrying && !isHiding) {
        // Randomly change direction or start crossing
        const rand = Math.random();
        if (rand < 0.05) startCrossing();
        else if (rand < 0.03) startHiding();
        else if (rand < 0.1) setDirection('front');
        else if (rand < 0.15) setDirection('back');
        else if (rand < 0.2) setDirection('left');
        else if (rand < 0.25) setDirection('right');
      }
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('click', updateActivity);
      clearInterval(checkAFK);
    };
  }, [reaction, isSleeping, isCrossing, isCrying, isHiding, isPracticeMode, controls]);

  const startHiding = async () => {
    if (isPracticeMode || isHiding || isCrossing) return;
    setIsHiding(true);
    setDirection('right');
    await controls.start({
      x: 60, // Peek out instead of fully hiding
      opacity: 0.7,
      transition: { duration: 1, ease: "easeInOut" }
    });
  };

  const startCrossing = async () => {
    if (isPracticeMode || isCrossing || isHiding) return;
    setIsCrossing(true);
    
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const targetX = Math.max(-(width - 200), -1200); 
    
    try {
      // Bounce loop
      for (let i = 0; i < 2; i++) {
        setDirection('left');
        await controls.start({
          x: targetX,
          transition: { duration: 5, ease: "linear" }
        });
        if (!isCrossing) break;
        
        setDirection('right');
        await controls.start({
          x: 0,
          transition: { duration: 5, ease: "linear" }
        });
        if (!isCrossing) break;
      }
    } catch (error) {
      console.warn("Crossing interrupted");
    } finally {
      setIsCrossing(false);
      setDirection('front');
    }
  };

  useEffect(() => {
    setShowBubble(true);
    const timer = setTimeout(() => setShowBubble(false), 5000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSleeping && direction === 'front' && !isCrying) {
        setIsWinking(true);
        setTimeout(() => setIsWinking(false), 200);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isSleeping, direction, isCrying]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1, y: 0 }}
      animate={controls}
      whileHover={{ y: -6, scale: 1.14 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 450, damping: 15 }}
      onDragStart={() => {
        setDirection('front');
        setIsCrossing(false);
        controls.stop();
        controls.set({ x: 0 });
      }}
      onClick={() => {
        // Petting spring interaction
        setIsCrying(false);
        setIsHiding(false);
        setIsSleeping(false);
        setReaction('correct');
        setIsPet(true);
        setDirection('front');
        controls.start({
          scale: [1, 1.28, 0.88, 1.16, 0.96, 1],
          rotate: [0, -10, 10, -6, 6, 0],
          y: [0, -18, 4, -8, 0],
          transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
        });
        setTimeout(() => {
          setReaction(null);
          setIsPet(false);
        }, 2200);
        
        lastActivityRef.current = Date.now();
      }}
      className="fixed bottom-24 right-12 z-[9999] cursor-grab active:cursor-grabbing group scale-110 select-none"
      drag
      dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
    >
      <div className="relative">
        {/* Floating Celebratory & Expression Spring Particles */}
        <AnimatePresence>
          {reaction === 'correct' && (
            <>
              {/* Sparkle 1 Top Left */}
              <motion.div
                key="sparkle-tl"
                initial={{ scale: 0, opacity: 0, x: -10, y: -10 }}
                animate={{ scale: [0, 1.35, 0], opacity: [0, 1, 0], x: -38, y: -52, rotate: [0, 45, 90] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-0 top-0 text-amber-400 text-base pointer-events-none z-[130] drop-shadow-sm font-bold"
              >
                ✨
              </motion.div>

              {/* Sparkle 2 Top Right */}
              <motion.div
                key="sparkle-tr"
                initial={{ scale: 0, opacity: 0, x: 10, y: -10 }}
                animate={{ scale: [0, 1.45, 0], opacity: [0, 1, 0], x: 38, y: -55, rotate: [0, -45, -90] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.08 }}
                className="absolute right-0 top-0 text-yellow-400 text-lg pointer-events-none z-[130] drop-shadow-sm"
              >
                ⭐
              </motion.div>

              {/* Sparkle 3 Top Center */}
              <motion.div
                key="sparkle-tc"
                initial={{ scale: 0, opacity: 0, x: 0, y: -15 }}
                animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0], x: 0, y: -68, rotate: [0, 180, 360] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.3, ease: "easeOut", delay: 0.04 }}
                className="absolute left-1/2 -translate-x-1/2 top-0 text-pink-400 text-base pointer-events-none z-[130] drop-shadow-sm"
              >
                {isPet ? '💖' : '🎉'}
              </motion.div>

              {/* Sparkle 4 Mid Left */}
              <motion.div
                key="sparkle-ml"
                initial={{ scale: 0, opacity: 0, x: -15, y: 10 }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], x: -48, y: -22, rotate: [0, -30, 0] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.12 }}
                className="absolute left-0 top-1/2 text-emerald-400 text-sm pointer-events-none z-[130]"
              >
                🌟
              </motion.div>

              {/* Sparkle 5 Mid Right */}
              <motion.div
                key="sparkle-mr"
                initial={{ scale: 0, opacity: 0, x: 15, y: 10 }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], x: 48, y: -22, rotate: [0, 30, 0] }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.14 }}
                className="absolute right-0 top-1/2 text-cyan-400 text-sm pointer-events-none z-[130]"
              >
                ✨
              </motion.div>
            </>
          )}

          {(reaction === 'incorrect' || isCrying) && (
            <motion.div
              key="sympathy-cloud"
              initial={{ scale: 0, opacity: 0, y: -5, x: 20 }}
              animate={{ scale: [0, 1.2, 0], opacity: [0, 0.9, 0], y: -45, x: 30 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute right-0 top-0 text-cyan-400 text-xs font-mono font-bold pointer-events-none z-[130]"
            >
              💧
            </motion.div>
          )}
        </AnimatePresence>

        {/* Speech Bubble with Spring Physics */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.75, y: 12 }}
          animate={{ 
            opacity: (showBubble || reaction || isCrying || isHiding) ? 1 : 0, 
            scale: (showBubble || reaction || isCrying || isHiding) ? 1 : 0.75, 
            y: (showBubble || reaction || isCrying || isHiding) ? 0 : 12 
          }}
          transition={{ 
            type: "spring", 
            stiffness: 450, 
            damping: 18, 
            mass: 0.6 
          }}
          whileHover={{ opacity: 1, scale: 1.05, y: -2 }}
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 rounded-2xl shadow-xl border text-[10px] font-bold uppercase tracking-widest whitespace-normal text-center max-w-[180px] pointer-events-none group-hover:opacity-100 transition-all z-[110] ${
            reaction === 'correct' 
              ? 'bg-gradient-to-br from-white to-emerald-50/80 border-emerald-300 text-emerald-950 shadow-emerald-500/10' 
              : (reaction === 'incorrect' || isCrying)
              ? 'bg-gradient-to-br from-white to-rose-50/80 border-rose-300 text-rose-950 shadow-rose-500/10'
              : 'bg-white border-black/5 text-primary'
          }`}
        >
          {getMessage()}
          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-r border-b ${
            reaction === 'correct' 
              ? 'bg-emerald-50/80 border-emerald-300' 
              : (reaction === 'incorrect' || isCrying)
              ? 'bg-rose-50/80 border-rose-300'
              : 'bg-white border-black/5'
          }`} />
        </motion.div>

        {/* Peeking Bush */}
        <AnimatePresence>
          {isHiding && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="absolute -right-4 bottom-0 w-16 h-12 z-[120] pointer-events-none"
            >
              <div className="absolute bottom-0 right-0 w-full h-full bg-green-500 rounded-full blur-[2px] opacity-80" />
              <div className="absolute bottom-2 right-2 w-12 h-10 bg-green-600 rounded-full" />
              <div className="absolute bottom-1 right-4 w-8 h-8 bg-green-400 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fluffy Body with Lively Spring Physics & Squash/Stretch */}
        <motion.div
          animate={
            isStumbling ? {
              rotate: [0, -18, 18, -12, 12, 0],
              y: [0, 14, 0],
              scaleX: [1, 1.15, 0.95, 1],
              scaleY: [1, 0.85, 1.05, 1]
            } : isSleeping ? {
              scaleY: [0.72, 0.78, 0.72],
              scaleX: [1.2, 1.14, 1.2],
              y: [8, 10, 8],
              rotate: [0, -1, 1, 0]
            } : reaction === 'correct' ? {
              y: [0, -42, 4, -24, 2, 0],
              rotate: [0, -12, 12, -6, 6, 0],
              scaleX: [1, 0.82, 1.22, 0.88, 1.06, 1],
              scaleY: [1, 1.28, 0.82, 1.16, 0.95, 1],
              x: [0, -8, 8, -4, 4, 0]
            } : (reaction === 'incorrect' || isCrying) ? {
              x: [0, -9, 9, -7, 7, -3, 3, 0],
              y: [0, 6, -1, 4, 0],
              rotate: [0, -5, 5, -3, 3, 0],
              scaleX: [1, 1.12, 0.94, 1.05, 1],
              scaleY: [1, 0.86, 1.06, 0.95, 1]
            } : isCrossing ? {
              y: [0, -9, 0],
              rotate: [0, -4, 4, 0],
              scaleY: [1, 1.05, 1]
            } : { 
              scaleY: [1, 1.035, 1],
              scaleX: [1, 0.985, 1],
              y: [0, -3.5, 0]
            }
          }
          transition={{ 
            duration: isSleeping ? 4 : isCrossing ? 0.5 : reaction === 'correct' ? 1.4 : (reaction === 'incorrect' || isCrying) ? 0.75 : isStumbling ? 0.45 : 2.6, 
            repeat: isSleeping || (!reaction && !isCrying && !isStumbling) ? Infinity : 0, 
            ease: (reaction === 'correct' || reaction === 'incorrect') ? [0.34, 1.56, 0.64, 1] : "easeInOut"
          }}
          className="relative w-24 h-24"
        >
          {/* Main Body (Fluff) with Reaction Tone */}
          <motion.div 
            animate={{
              boxShadow: reaction === 'correct' 
                ? '0 12px 28px -4px rgba(16, 185, 129, 0.25), 0 0 16px rgba(52, 211, 153, 0.2)' 
                : (reaction === 'incorrect' || isCrying)
                ? '0 10px 24px -4px rgba(244, 63, 94, 0.2), 0 0 12px rgba(251, 113, 133, 0.15)'
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
            className={`absolute inset-0 rounded-full border border-black/5 transition-colors duration-500 ${
              isSleeping 
                ? 'bg-blue-50/95' 
                : reaction === 'correct'
                ? 'bg-gradient-to-b from-white to-emerald-50/50'
                : isCrying 
                ? 'bg-gradient-to-b from-white to-rose-50/70' 
                : 'bg-white'
            }`} 
          />
          
          {/* Heart Tail (Back view) */}
          {direction === 'back' && (
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-200 rounded-full opacity-75 blur-[0.5px]" 
            />
          )}

          {/* Little Horns with Animated Spring Bounce */}
          <motion.div 
            animate={
              reaction === 'correct' ? {
                rotate: [-20, -36, -14, -28, -20],
                y: [0, -4, 1, -2, 0],
                scale: [1, 1.15, 0.95, 1.05, 1]
              } : (reaction === 'incorrect' || isCrying) ? {
                rotate: [-20, -12, -18, -14, -20],
                y: [0, 3, 0],
                scale: [1, 0.92, 1]
              } : {
                rotate: -20,
                y: 0,
                scale: 1
              }
            }
            transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
            className={`absolute -top-2 left-4 w-4 h-6 bg-gradient-to-b from-[#E2C79E] to-[#C49A6C] rounded-full border border-black/10 origin-bottom transition-all duration-500 shadow-sm ${direction === 'right' ? 'translate-x-4 scale-x-75' : direction === 'left' ? 'translate-x-0 scale-x-50' : ''}`} 
          />
          <motion.div 
            animate={
              reaction === 'correct' ? {
                rotate: [20, 36, 14, 28, 20],
                y: [0, -4, 1, -2, 0],
                scale: [1, 1.15, 0.95, 1.05, 1]
              } : (reaction === 'incorrect' || isCrying) ? {
                rotate: [20, 12, 18, 14, 20],
                y: [0, 3, 0],
                scale: [1, 0.92, 1]
              } : {
                rotate: 20,
                y: 0,
                scale: 1
              }
            }
            transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
            className={`absolute -top-2 right-4 w-4 h-6 bg-gradient-to-b from-[#E2C79E] to-[#C49A6C] rounded-full border border-black/10 origin-bottom transition-all duration-500 shadow-sm ${direction === 'left' ? '-translate-x-4 scale-x-75' : direction === 'right' ? '-translate-x-0 scale-x-50' : ''}`} 
          />

          {/* Eyes with Expressive Spring Reaction Dynamics */}
          {(direction === 'front' || isCrying) && (
            isSleeping ? (
              <>
                <div className="absolute top-9 left-5 w-3.5 h-px bg-[#1A1A1A] rotate-[-10deg]" />
                <div className="absolute top-9 right-5 w-3.5 h-px bg-[#1A1A1A] rotate-[10deg]" />
              </>
            ) : reaction === 'correct' ? (
              /* Joyful Spring Arc Eyes (^ ‿ ^) */
              <>
                <motion.div 
                  initial={{ scale: 0.6, rotate: -20 }}
                  animate={{ scale: [0.6, 1.35, 1], rotate: [0, -10, 5, 0] }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute top-7.5 left-5 w-3.5 h-3 border-t-[2.5px] border-emerald-950 rounded-full flex items-center justify-center"
                >
                  <div className="w-1 h-1 bg-amber-400 rounded-full blur-[0.5px] opacity-70 -mt-1" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0.6, rotate: 20 }}
                  animate={{ scale: [0.6, 1.35, 1], rotate: [0, 10, -5, 0] }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.03 }}
                  className="absolute top-7.5 right-5 w-3.5 h-3 border-t-[2.5px] border-emerald-950 rounded-full flex items-center justify-center"
                >
                  <div className="w-1 h-1 bg-amber-400 rounded-full blur-[0.5px] opacity-70 -mt-1" />
                </motion.div>
              </>
            ) : (reaction === 'incorrect' || isCrying) ? (
              /* Sympathetic & Tearful Glisten Eyes */
              <>
                <motion.div 
                  animate={{ scale: [1, 0.94, 1.04, 1] }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute top-8 left-5 w-3.5 h-3.5 bg-[#1A1A1A] rounded-full overflow-hidden shadow-inner"
                >
                  <motion.div 
                    animate={{ 
                      y: [3, 0, 3],
                      opacity: [0.6, 1, 0.6]
                    }} 
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }} 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-300 to-blue-500" 
                  />
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
                </motion.div>
                
                <motion.div 
                  animate={{ scale: [1, 0.94, 1.04, 1] }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.04 }}
                  className="absolute top-8 right-5 w-3.5 h-3.5 bg-[#1A1A1A] rounded-full overflow-hidden shadow-inner"
                >
                  <motion.div 
                    animate={{ 
                      y: [3, 0, 3],
                      opacity: [0.6, 1, 0.6]
                    }} 
                    transition={{ repeat: Infinity, duration: 1.4, delay: 0.2, ease: "easeInOut" }} 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-300 to-blue-500" 
                  />
                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full opacity-80" />
                  <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
                </motion.div>

                {/* Spring Tear Drops with Elastic Trajectory */}
                <motion.div 
                  initial={{ y: 0, scaleY: 0.8, opacity: 0 }}
                  animate={{ y: [0, 14], scaleY: [0.8, 1.6, 0.6], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: "easeIn" }}
                  className="absolute top-11.5 left-6 w-1.5 h-2.5 bg-gradient-to-b from-cyan-300 to-blue-400 rounded-full shadow-sm"
                />
                <motion.div 
                  initial={{ y: 0, scaleY: 0.8, opacity: 0 }}
                  animate={{ y: [0, 14], scaleY: [0.8, 1.6, 0.6], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.1, delay: 0.45, ease: "easeIn" }}
                  className="absolute top-11.5 right-6 w-1.5 h-2.5 bg-gradient-to-b from-cyan-300 to-blue-400 rounded-full shadow-sm"
                />
              </>
            ) : (
              /* Regular Alert & Cute Blinking Eyes */
              <>
                <div className="absolute top-8 left-5 w-3.5 h-3.5 bg-[#1A1A1A] rounded-full shadow-inner">
                  {!isWinking && (
                    <>
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white/70 rounded-full" />
                    </>
                  )}
                </div>
                <div className="absolute top-8 right-5 w-3.5 h-3.5 bg-[#1A1A1A] rounded-full shadow-inner">
                  {isWinking ? (
                    <div className="absolute inset-0 bg-white rounded-full scale-y-[0.15] translate-y-1.5" />
                  ) : (
                    <>
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white/70 rounded-full" />
                    </>
                  )}
                </div>
              </>
            )
          )}

          {/* Side View Eyes */}
          {!isCrying && direction === 'left' && (
            <div className="absolute top-8 left-3 w-3.5 h-3.5 bg-[#1A1A1A] rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          )}
          {!isCrying && direction === 'right' && (
            <div className="absolute top-8 right-3 w-3.5 h-3.5 bg-[#1A1A1A] rounded-full">
              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          )}

          {/* Rosy Cheeks with Spring Glow & Expansion */}
          {(direction === 'front' || isCrying) && (
            <>
              <motion.div 
                animate={
                  reaction === 'correct' ? {
                    scale: [1, 1.45, 1.15],
                    opacity: [0.6, 1, 0.85]
                  } : (reaction === 'incorrect' || isCrying) ? {
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.8, 0.5]
                  } : {
                    scale: [1, 1.08, 1],
                    opacity: 0.65
                  }
                }
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                className={`absolute top-11 left-3 w-3.5 h-2 rounded-full blur-[1px] transition-colors ${
                  isSleeping 
                    ? 'bg-blue-300/40' 
                    : reaction === 'correct'
                    ? 'bg-pink-400/80 shadow-sm'
                    : isCrying 
                    ? 'bg-rose-300/70' 
                    : 'bg-pink-300/60'
                }`} 
              />
              <motion.div 
                animate={
                  reaction === 'correct' ? {
                    scale: [1, 1.45, 1.15],
                    opacity: [0.6, 1, 0.85]
                  } : (reaction === 'incorrect' || isCrying) ? {
                    scale: [1, 1.25, 1],
                    opacity: [0.4, 0.8, 0.5]
                  } : {
                    scale: [1, 1.08, 1],
                    opacity: 0.65
                  }
                }
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.02 }}
                className={`absolute top-11 right-3 w-3.5 h-2 rounded-full blur-[1px] transition-colors ${
                  isSleeping 
                    ? 'bg-blue-300/40' 
                    : reaction === 'correct'
                    ? 'bg-pink-400/80 shadow-sm'
                    : isCrying 
                    ? 'bg-rose-300/70' 
                    : 'bg-pink-300/60'
                }`} 
              />
            </>
          )}
          {!isCrying && direction === 'left' && (
            <div className="absolute top-11 left-2 w-3.5 h-2 bg-pink-300/60 rounded-full blur-[1px]" />
          )}
          {!isCrying && direction === 'right' && (
            <div className="absolute top-11 right-2 w-3.5 h-2 bg-pink-300/60 rounded-full blur-[1px]" />
          )}

          {/* Mascot Mouth: Harmonious, Cute Vector Design Aligned Naturally Below Eyes and Cheeks */}
          {!isCrying && direction === 'left' ? (
            /* Left Profile Mouth - Aligned Naturally Below Left Eye & Cheek */
            <div className="absolute top-[49px] left-[15px] pointer-events-none transition-all duration-300">
              <svg className="w-3.5 h-2 overflow-visible" viewBox="0 0 14 8" fill="none">
                <path 
                  d="M 1 2.5 Q 5 6.5 11 3" 
                  stroke="#1E293B" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          ) : !isCrying && direction === 'right' ? (
            /* Right Profile Mouth - Aligned Naturally Below Right Eye & Cheek */
            <div className="absolute top-[49px] right-[15px] pointer-events-none transition-all duration-300">
              <svg className="w-3.5 h-2 overflow-visible" viewBox="0 0 14 8" fill="none">
                <path 
                  d="M 13 2.5 Q 9 6.5 3 3" 
                  stroke="#1E293B" 
                  strokeWidth="1.8" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          ) : direction === 'back' && !isCrying ? null : (
            /* Front View Center Mouth - Perfectly Positioned Between Cheeks */
            <div className="absolute top-[49px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-300">
              {isSleeping ? (
                <svg className="w-3.5 h-1.5 opacity-60 overflow-visible" viewBox="0 0 14 6" fill="none">
                  <path 
                    d="M 2 3 Q 7 4.5 12 3" 
                    stroke="#475569" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                  />
                </svg>
              ) : reaction === 'correct' ? (
                /* Joyous Big Smile Grin with Inner Tongue */
                <motion.div 
                  initial={{ scale: 0.7, y: 0 }}
                  animate={{ scale: [0.7, 1.25, 1], y: [0, -1, 0] }}
                  transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                  className="relative flex items-center justify-center"
                >
                  <svg className="w-5 h-3 overflow-visible" viewBox="0 0 20 12" fill="none">
                    <path 
                      d="M 2 2.5 Q 10 13 18 2.5 Z" 
                      fill="#E11D48" 
                      stroke="#1E293B" 
                      strokeWidth="1.8" 
                      strokeLinejoin="round" 
                    />
                    <path 
                      d="M 6 8.5 Q 10 12 14 8.5 Q 10 7 6 8.5 Z" 
                      fill="#FDA4AF" 
                    />
                  </svg>
                </motion.div>
              ) : (reaction === 'incorrect' || isCrying) ? (
                /* Sympathetic Gentle Pout */
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: [0.8, 1.1, 1],
                    y: [0, 1.5, 0] 
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative flex items-center justify-center"
                >
                  <svg className="w-3.5 h-2 overflow-visible" viewBox="0 0 14 8" fill="none">
                    <path 
                      d="M 2 6 Q 7 2 12 6" 
                      stroke="#1E293B" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </motion.div>
              ) : (
                /* Cheerful Natural Resting Smile */
                <div className="flex items-center justify-center">
                  <svg className="w-4 h-2 overflow-visible" viewBox="0 0 16 8" fill="none">
                    <path 
                      d="M 2 2.5 Q 8 7 14 2.5" 
                      stroke="#1E293B" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Little Feet with Alternating Spring Hop Physics */}
          <motion.div 
            animate={
              reaction === 'correct' ? {
                y: [0, -7, 1, -4, 0],
                rotate: [0, -8, 4, 0]
              } : (reaction === 'incorrect' || isCrying) ? {
                x: [0, -2, 2, 0],
                y: [0, 1, 0]
              } : {
                y: 0,
                rotate: 0
              }
            }
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className={`absolute -bottom-1 left-4 w-4 h-3 bg-white rounded-full shadow-sm border border-black/5 transition-all ${!isCrying && direction === 'left' ? 'translate-x-2' : !isCrying && direction === 'right' ? '-translate-x-2' : ''}`} 
          />
          <motion.div 
            animate={
              reaction === 'correct' ? {
                y: [0, 1, -7, 0, -4],
                rotate: [0, 8, -4, 0]
              } : (reaction === 'incorrect' || isCrying) ? {
                x: [0, 2, -2, 0],
                y: [0, 1, 0]
              } : {
                y: 0,
                rotate: 0
              }
            }
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.04 }}
            className={`absolute -bottom-1 right-4 w-4 h-3 bg-white rounded-full shadow-sm border border-black/5 transition-all ${!isCrying && direction === 'left' ? 'translate-x-2' : !isCrying && direction === 'right' ? '-translate-x-2' : ''}`} 
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Utilities ---

const playSuccessSound = () => {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  const playBrassNote = (freq: number, start: number, duration: number) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    // Trumpet-like sound uses sawtooth with filtering
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, start);

    // Filter creates the "brass" bite
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 2, start);
    filter.frequency.exponentialRampToValueAtTime(freq * 6, start + 0.05);
    filter.frequency.exponentialRampToValueAtTime(freq * 1.5, start + duration);

    // Envelope
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.08, start + 0.02); // Not too loud
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(start);
    osc.stop(start + duration);
  };

  const now = audioCtx.currentTime;

  // Subtle "Cheer" (Synthesized White Noise)
  const playCheer = (start: number, duration: number) => {
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1000, start);
    noiseFilter.Q.setValueAtTime(1, start);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0, start);
    noiseGain.gain.linearRampToValueAtTime(0.03, start + 0.2); // Very subtle
    noiseGain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    noise.start(start);
    noise.stop(start + duration);
  };

  // Victory Fanfare: C4, G4, C5, E5 (C Major Arpeggio)
  playBrassNote(261.63, now, 0.15);       // C4
  playBrassNote(392.00, now + 0.15, 0.15); // G4
  playBrassNote(523.25, now + 0.30, 0.15); // C5
  playBrassNote(659.25, now + 0.45, 0.8);  // E5 (Sustained)
  playCheer(now + 0.5, 1.5);               // Cheering starts after the fanfare peak
};

const playDingSound = () => {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
  osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.1); // A6
  gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.2);
};

const triggerConfetti = (isBig = false) => {
  if (isBig) {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  } else {
    // Small burst for single correct answer
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.8, x: 0.9 } // Near the mascot
    });
  }
};

// --- Components ---

const ComingSoonPage = ({ 
  title, 
  subtitle, 
  moduleName, 
  icon: Icon, 
  onBack 
}: { 
  title: string, 
  subtitle: string, 
  moduleName: string, 
  icon: any, 
  onBack: () => void 
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-12 max-w-4xl mx-auto"
  >
    <div className="flex items-center justify-between border-b border-black/5 pb-6">
      <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
        <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
      </button>
      <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / {moduleName}</span>
    </div>

    <header className="space-y-4">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-secondary" />
        <h1 className="font-sans text-4xl font-extrabold text-primary tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Advanced Tier</span>
        <span className="text-sm text-on-surface-variant font-medium italic">{subtitle}</span>
      </div>
    </header>

    <div className="bg-white rounded-3xl p-12 shadow-sm border border-black/5 flex flex-col items-center justify-center text-center space-y-4">
      <div className="p-4 rounded-full bg-secondary/10 text-secondary">
        <Icon className="h-12 w-12" />
      </div>
      <h2 className="font-sans font-bold text-2xl text-primary">Coming Soon</h2>
      <p className="font-serif text-on-surface-variant max-w-md">
        We are currently developing the rich, interactive content for the {title} module. Stay tuned for advanced academic passages and precision-based questions.
      </p>
    </div>
  </motion.div>
);

const FactualInformationPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Biology: Photosynthesis",
      passage: "The process of photosynthesis is the primary method by which plants, algae, and some bacteria convert light energy into chemical energy. During this process, carbon dioxide and water are transformed into glucose and oxygen, using sunlight as the catalyst. The reaction occurs within the chloroplasts, specifically in the thylakoid membranes where chlorophyll pigments absorb the light. This energy is then used to fuel the synthesis of organic compounds that sustain the organism's growth and metabolic functions.",
      highlight: "thylakoid membranes where chlorophyll pigments absorb the light.",
      question: "According to the passage, where does the absorption of light occur during photosynthesis?",
      options: [
        { id: 1, text: "In the glucose molecules", explanation: "Glucose is a product of photosynthesis, not the location where light is absorbed." },
        { id: 2, text: "Within the thylakoid membranes", explanation: "The passage explicitly states that light absorption occurs in the thylakoid membranes where chlorophyll is located.", isCorrect: true },
        { id: 3, text: "Outside the chloroplasts", explanation: "The text states the reaction occurs *within* the chloroplasts, specifically in the thylakoid membranes." },
        { id: 4, text: "In the carbon dioxide", explanation: "Carbon dioxide is a reactant that is transformed during the process, not the site of light absorption." }
      ]
    },
    {
      subject: "History: The Industrial Revolution",
      passage: "The Industrial Revolution marked a major turning point in history, as manual labor was increasingly replaced by machine-based manufacturing. Central to this shift was the development of the steam engine by James Watt in the late 18th century. Unlike earlier atmospheric engines, Watt's design utilized a separate condenser, which significantly improved fuel efficiency and allowed the engine to be used in a wide variety of industrial applications beyond just pumping water out of mines.",
      highlight: "utilized a separate condenser",
      question: "According to the passage, what was a key advantage of James Watt's steam engine design?",
      options: [
        { id: 1, text: "It was the first engine ever created", explanation: "The passage mentions 'earlier atmospheric engines', implying Watt's was not the first." },
        { id: 2, text: "It relied entirely on manual labor", explanation: "The Industrial Revolution was characterized by the replacement of manual labor with machines." },
        { id: 3, text: "It featured a separate condenser for better efficiency", explanation: "The text explicitly states that the separate condenser significantly improved fuel efficiency.", isCorrect: true },
        { id: 4, text: "It was used exclusively for mining", explanation: "The passage states it was used in a 'wide variety of industrial applications beyond just pumping water out of mines'." }
      ]
    },
    {
      subject: "Astronomy: Black Holes",
      passage: "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The boundary of the region from which no escape is possible is called the event horizon. Although the event horizon has an enormous effect on the fate and circumstances of an object crossing it, it has no locally detectable features. In many ways, a black hole acts like an ideal black body, as it reflects no light.",
      highlight: "boundary of the region from which no escape is possible",
      question: "According to the passage, what is the 'event horizon' of a black hole?",
      options: [
        { id: 1, text: "A region where light is generated", explanation: "The passage states that no light can escape from a black hole." },
        { id: 2, text: "The outer boundary from which nothing can escape", explanation: "The text defines the event horizon as the boundary of the region from which no escape is possible.", isCorrect: true },
        { id: 3, text: "A visible feature with detectable light", explanation: "The passage states it has 'no locally detectable features' and 'reflects no light'." },
        { id: 4, text: "The center of the galaxy", explanation: "The passage does not mention the center of the galaxy; it describes the nature of black holes." }
      ]
    }
  ];

  const activeExample = examples[currentExample];
  const shuffledOptions = useMemo(() => shuffleArray([...activeExample.options]), [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Factual Information</span>
      </div>

      {/* Grand Hero Header Section */}
      <section className="bg-gradient-to-br from-[#001733] via-[#002855] to-[#011627] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-cyan-500/20">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <FileText className="h-72 w-72" />
        </div>

        <div className="space-y-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Core Reading Taxonomy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight">
            Factual <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-amber-300">Information</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed">
            Direct Detail Extraction & Paraphrase Verification. Pinpoint explicit paragraph evidence and identify synonym restatements while eliminating deceptive verbatim distractors.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Exam Frequency</p>
              <p className="text-xl font-black">High <span className="text-xs font-normal opacity-70">3–6 Qs</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Score Impact</p>
              <p className="text-xl font-black">Foundation <span className="text-xs font-normal opacity-70">Core Score</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Pacing Goal</p>
              <p className="text-xl font-black">60–90s <span className="text-xs font-normal opacity-70">Per Question</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Difficulty</p>
              <p className="text-xl font-black">Moderate <span className="text-xs font-normal opacity-70">Precision</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Mastering Factual Information</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Factual Information questions (often called "Detail" questions) ask you to identify specific information that is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">explicitly stated</span> in the passage. These are the most common question types, accounting for nearly 25% of the Reading section.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              In university, you must be able to accurately extract data, definitions, and evidence from academic texts. ETS tests your ability to distinguish between what is actually written and what you might assume or recall from outside knowledge. Precision is the key here.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Search className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "According to paragraph X, which of the following is true of Y?",
              "The author's description of X mentions which of the following?",
              "Paragraph X supports which of the following statements about Y?",
              "According to the passage, Y occurred because..."
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Keywords & Scanning",
            icon: <Crosshair className="h-6 w-6" />,
            desc: "Identify unique words (proper nouns, numbers, technical terms) in the question. Scan the paragraph specifically for these 'anchor points' rather than reading every word."
          },
          {
            title: "Paraphrase Detection",
            icon: <RefreshCw className="h-6 w-6" />,
            desc: "The correct answer will almost certainly use synonyms. If the text says 'abundant', the answer might say 'plentiful' or 'widely available'."
          },
          {
            title: "Context Verification",
            icon: <Eye className="h-6 w-6" />,
            desc: "Read one sentence before and after the located detail. This ensures you haven't missed a crucial modifier like 'initially' or 'historically'."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm space-y-4 hover:shadow-xl hover:shadow-black/5 transition-all group">
            <div className="bg-secondary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h4 className="font-sans font-black text-primary text-lg leading-tight">{item.title}</h4>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed opacity-80">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-red-50 border border-red-100 rounded-[3rem] p-10 space-y-8">
        <div className="flex items-center gap-4 text-red-600">
          <AlertTriangle className="h-8 w-8" />
          <div className="space-y-1">
            <h3 className="font-sans font-black text-2xl uppercase tracking-tight">Red Flags: Avoid These Traps</h3>
            <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest text-red-900">Identifying common distractor types</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { tag: "Partial Truth", title: "The 'Almost' Right", desc: "Uses exact words from the text but mixes them up or attaches them to the wrong subject." },
            { tag: "Irrelevant", title: "The 'True but Wrong'", desc: "Accurate information from the passage that simply doesn't answer the specific question asked." },
            { tag: "Extreme", title: "The 'Overstater'", desc: "Uses absolute words like 'always', 'all', or 'never' when the text is more moderate." },
            { tag: "Distortion", title: "The 'Logic Twist'", desc: "Takes a fact from the passage and reverses the relationship (e.g., A caused B becomes B caused A)." }
          ].map((flag, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/40 border border-red-200">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs">
                {i + 1}
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest leading-none">{flag.tag}</span>
                <p className="font-sans font-bold text-primary text-sm leading-tight">{flag.title}</p>
                <p className="font-serif text-xs text-on-surface-variant leading-relaxed opacity-80">{flag.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant italic">
              <div className="w-4 h-1 bg-secondary rounded-full"></div>
              <span>Highlighted text contains the answer to the question.</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Improving your accuracy in Factual Information questions requires a mix of speed and precision. Here are some expert tips:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify Keywords", desc: "Look for nouns, dates, or technical terms in the question stem and scan the text for them." },
                { title: "Avoid 'Half-Right' Answers", desc: "Distractors often use words from the text but change the meaning or relationship between them." },
                { title: "Don't Over-Infer", desc: "If the information isn't explicitly there, it's not the answer for this question type." },
                { title: "Verify the Context", desc: "Read one sentence before and after the located detail to ensure you haven't missed a crucial modifier." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Keyword Scanning", goal: "Locate detail in < 15s" },
                  { step: "02", action: "Sentence Mapping", goal: "Identify S-V-O structure" },
                  { step: "03", action: "Option Elimination", goal: "Remove 2 obvious traps" },
                  { step: "04", action: "Final Verification", goal: "Match text to option" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "You've got this! Precision is a skill that grows with every practice session. Every detail you find correctly today builds the foundation for your success tomorrow. Keep pushing!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const NegativeFactualPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Geology: Plate Tectonics",
      passage: "The Earth's lithosphere is divided into several large and small tectonic plates that move relative to each other. There are three primary types of plate boundaries: divergent boundaries, where plates move apart; convergent boundaries, where plates collide; and transform boundaries, where plates slide past each other. These movements are driven by mantle convection and result in various geological phenomena such as earthquakes, volcanic activity, and mountain building.",
      highlight: "divergent boundaries, where plates move apart; convergent boundaries, where plates collide; and transform boundaries, where plates slide past each other",
      question: "According to the passage, all of the following are primary types of plate boundaries EXCEPT",
      options: [
        { id: 1, text: "Divergent boundaries", explanation: "The passage explicitly mentions divergent boundaries as one of the three primary types." },
        { id: 2, text: "Convergent boundaries", explanation: "The passage explicitly mentions convergent boundaries as one of the three primary types." },
        { id: 3, text: "Transform boundaries", explanation: "The passage explicitly mentions transform boundaries as one of the three primary types." },
        { id: 4, text: "Subduction boundaries", explanation: "While subduction occurs at convergent boundaries, the passage lists 'divergent', 'convergent', and 'transform' as the three primary types. Therefore, 'subduction' is NOT in the primary list provided.", isCorrect: true }
      ]
    },
    {
      subject: "Psychology: Memory",
      passage: "Human memory is typically categorized into three distinct stages: sensory memory, short-term memory, and long-term memory. Sensory memory acts as a buffer for stimuli received through the five senses. Short-term memory, or working memory, holds a small amount of information for a brief period. Long-term memory is the final stage where information can be stored indefinitely. Information must pass through these stages sequentially to be successfully encoded and retrieved.",
      highlight: "sensory memory, short-term memory, and long-term memory",
      question: "According to the passage, which of the following is NOT one of the three stages of memory?",
      options: [
        { id: 1, text: "Sensory memory", explanation: "Sensory memory is explicitly listed as the first stage in the passage." },
        { id: 2, text: "Short-term memory", explanation: "Short-term memory is explicitly listed as the second stage in the passage." },
        { id: 3, text: "Long-term memory", explanation: "Long-term memory is explicitly listed as the final stage in the passage." },
        { id: 4, text: "Emotional memory", explanation: "The passage only mentions sensory, short-term, and long-term memory. Emotional memory is not mentioned as one of the three stages.", isCorrect: true }
      ]
    },
    {
      subject: "Economics: Market Structures",
      passage: "In economics, perfect competition is a theoretical market structure characterized by several key features. First, there are a large number of buyers and sellers, such that no single participant can influence market prices. Second, the products offered by all sellers are identical or homogeneous. Third, there is perfect information, meaning all participants have full knowledge of prices and products. Finally, there are no barriers to entry or exit, allowing firms to freely join or leave the industry.",
      highlight: "there are no barriers to entry or exit",
      question: "According to the passage, all of the following are characteristics of perfect competition EXCEPT",
      options: [
        { id: 1, text: "A large number of buyers and sellers", explanation: "The passage states this is the 'first' key feature." },
        { id: 2, text: "Identical products", explanation: "The passage states the products are 'identical or homogeneous'." },
        { id: 3, text: "High barriers to entry", explanation: "The passage explicitly states there are 'no barriers to entry or exit'. Therefore, 'high barriers' is false.", isCorrect: true },
        { id: 4, text: "Perfect information", explanation: "The passage states there is 'perfect information' as the third feature." }
      ]
    }
  ];

  const activeExample = examples[currentExample];
  const shuffledOptions = useMemo(() => shuffleArray([...activeExample.options]), [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Negative Factual Info</span>
      </div>

      {/* Grand Hero Header Section */}
      <section className="bg-gradient-to-br from-[#001733] via-[#002855] to-[#011627] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-cyan-500/20">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <AlertCircle className="h-72 w-72" />
        </div>

        <div className="space-y-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Core Reading Taxonomy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight">
            Negative Factual <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-200 to-cyan-300">(EXCEPT / NOT)</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed">
            Elimination of Verifiable Truths & Identification of Falsehoods. Rapidly confirm the three passage-supported statements and identify the unmentioned or contradictory outlier.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Exam Frequency</p>
              <p className="text-xl font-black">Low <span className="text-xs font-normal opacity-70">1–2 Qs</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Score Impact</p>
              <p className="text-xl font-black">Precision <span className="text-xs font-normal opacity-70">High Accuracy</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Pacing Goal</p>
              <p className="text-xl font-black">90–120s <span className="text-xs font-normal opacity-70">Methodical</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Difficulty</p>
              <p className="text-xl font-black">High <span className="text-xs font-normal opacity-70">Trap Intensive</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Negative Factual Information</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Negative Factual questions ask you to identify which option is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">NOT mentioned</span> or is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">FALSE</span> according to the text. These are recognized by the bold words <span className="font-bold text-secondary">NOT</span> or <span className="font-bold text-secondary">EXCEPT</span>.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              These questions test your ability to verify multiple details simultaneously. In university, you must be able to confirm what a study <span className="italic underline">doesn't</span> show or what a theory <span className="italic underline">doesn't</span> include. It requires a comprehensive check of the relevant section of the passage.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "According to the passage, all of the following are true of X EXCEPT...",
              "Which of the following is NOT true of X according to paragraph 2?",
              "The author's description of X mentions all of the following EXCEPT...",
              "According to the paragraph, which of the following is NOT a reason for Y?"
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-container-low p-8 rounded-[2.5rem] border border-black/5">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-secondary" />
          <h3 className="font-sans font-bold text-xl text-primary">Strategic Approach: The 3+1 Rule</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Think of these as "Three True, One False" challenges. Your goal is to find the three options that ARE in the text. Whatever is left over—or whatever directly contradicts the text—is the answer.
            </p>
            <div className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
              <h4 className="font-sans font-bold text-xs text-secondary uppercase mb-2">Efficiency Tip</h4>
              <p className="font-serif text-xs text-on-surface-variant italic">
                These questions often correspond to lists in the passage. Use 'Scanning' for words from all four options simultaneously to find the target area faster!
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <ul className="space-y-2">
              {[
                "Look for lists of features or causes in the text.",
                "Verify each 'True' answer to strengthen your choice.",
                "Watch out for synonyms—don't just look for exact words.",
                "The FALSE answer often uses extreme words like 'only' or 'first'."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-serif text-primary bg-white/50 p-2 rounded-xl">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant italic">
              <div className="w-4 h-1 bg-secondary rounded-full"></div>
              <span>Highlighted text contains the information needed to verify the options.</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Negative Factual questions are often time-consuming. Use these strategies to handle them efficiently:
            </p>
            <ul className="space-y-4">
              {[
                { title: "The 'True/False' Method", desc: "Treat each option as a True/False question. The one that is 'False' or 'Not Mentioned' is your answer." },
                { title: "Scan for Keywords", desc: "Use keywords from the options (not just the question) to locate the relevant section of the text." },
                { title: "Watch for Synonyms", desc: "The correct answer might be a paraphrase of something NOT in the text, while the wrong answers use exact words from the text." },
                { title: "Don't Rush", desc: "These questions take longer because you have to verify three things instead of one. Budget your time accordingly." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Question Identification", goal: "Spot EXCEPT/NOT immediately" },
                  { step: "02", action: "Option Scanning", goal: "Identify 4 distinct details to check" },
                  { step: "03", action: "Text Verification", goal: "Find 3 'True' options in the text" },
                  { step: "04", action: "Final Selection", goal: "Select the 'Odd One Out'" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Mastering the 'Negative' is a sign of a truly advanced reader. It requires patience and a sharp eye for detail. You're building the skills of a meticulous researcher!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const TerminologyInContextPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Biology: Symbiosis",
      passage: "In many ecosystems, certain species develop relationships that are obligatory for their survival. For instance, some types of fungi and algae form lichens; the fungus provides a structural base and protection, while the algae produce nutrients through photosynthesis. Without this close association, neither organism could thrive in the harsh environments they typically inhabit.",
      highlight: "obligatory",
      question: "The word 'obligatory' in the passage is closest in meaning to",
      options: [
        { id: 1, text: "Optional", explanation: "The passage says the relationship is for 'survival' and they couldn't 'thrive' without it, so it's not optional." },
        { id: 2, text: "Required", explanation: "The context indicates that the relationship is necessary for survival, making 'required' the correct synonym.", isCorrect: true },
        { id: 3, text: "Beneficial", explanation: "While the relationship is beneficial, 'obligatory' specifically means it is mandatory or necessary for survival." },
        { id: 4, text: "Harmful", explanation: "The passage describes a supportive relationship, so 'harmful' is the opposite of the intended meaning." }
      ]
    },
    {
      subject: "History: The Silk Road",
      passage: "The Silk Road was a vast network of trade routes that connected the East and West for centuries. It facilitated the exchange of not only goods like silk and spices but also ideas, religions, and technologies. This cross-cultural interaction played a crucial role in the development of civilizations across Eurasia, leading to significant advancements in science and the arts.",
      highlight: "facilitated",
      question: "The word 'facilitated' in the passage is closest in meaning to",
      options: [
        { id: 1, text: "Hindered", explanation: "The Silk Road helped the exchange, it didn't block or hinder it." },
        { id: 2, text: "Simplified", explanation: "While it might have made things simpler, 'facilitated' specifically means to make an action or process easier or possible." },
        { id: 3, text: "Made easier", explanation: "The context shows the Silk Road enabled and assisted the exchange of goods and ideas.", isCorrect: true },
        { id: 4, text: "Discovered", explanation: "The routes were used for exchange, not used to discover the exchange itself." }
      ]
    },
    {
      subject: "Astronomy: Stellar Evolution",
      passage: "When a massive star exhausts its nuclear fuel, it can no longer support its own weight against the force of gravity. This leads to a sudden and violent collapse of the star's core. The resulting explosion, known as a supernova, can outshine an entire galaxy for a brief period before the remains settle into a dense neutron star or a black hole.",
      highlight: "collapse",
      question: "The word 'collapse' in the passage is closest in meaning to",
      options: [
        { id: 1, text: "Expansion", explanation: "The passage describes the star failing to support its weight, which leads to falling inward, not expanding outward." },
        { id: 2, text: "Falling inward", explanation: "In this context, 'collapse' refers to the core of the star rapidly contracting or falling in on itself due to gravity.", isCorrect: true },
        { id: 3, text: "Stability", explanation: "The passage describes a 'sudden and violent' event, which is the opposite of stability." },
        { id: 4, text: "Formation", explanation: "While a new object is formed afterwards, 'collapse' specifically refers to the breakdown or falling in of the existing structure." }
      ]
    }
  ];

  const activeExample = examples[currentExample];
  const shuffledOptions = useMemo(() => shuffleArray([...activeExample.options]), [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Terminology</span>
      </div>

      {/* Grand Hero Header Section */}
      <section className="bg-gradient-to-br from-[#001733] via-[#002855] to-[#011627] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-cyan-500/20">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Type className="h-72 w-72" />
        </div>

        <div className="space-y-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Core Reading Taxonomy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight">
            Terminology <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300">in Context</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed">
            Lexical Precision & Contextual Substitution. Determine nuanced word meanings in specific academic registers, avoiding dictionary-only primary definitions that mismatch context.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Exam Frequency</p>
              <p className="text-xl font-black">High <span className="text-xs font-normal opacity-70">2–4 Qs</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Score Impact</p>
              <p className="text-xl font-black">Speed Gain <span className="text-xs font-normal opacity-70">High Efficiency</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Pacing Goal</p>
              <p className="text-xl font-black">30–45s <span className="text-xs font-normal opacity-70">Rapid</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Difficulty</p>
              <p className="text-xl font-black">Varied <span className="text-xs font-normal opacity-70">Context Sensitive</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Solving Terminology in Context</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Terminology questions (also known as Vocabulary questions) ask you to identify the meaning of a word or phrase as it is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">used in the text</span>. You aren't just looking for a dictionary definition; you're looking for the <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">contextual equivalent</span>.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Academic English often uses common words in specialized ways. These questions test your ability to use surrounding semantic clues to deduce precise meanings, a skill vital for understanding technical papers and diverse scientific journals.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Type className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "The word 'X' in paragraph 1 is closest in meaning to...",
              "In stating 'Y', the author means that...",
              "Which of the following is closest in meaning to 'Z' in paragraph 2?",
              "The phrase 'A' in the passage is closest in meaning to..."
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "The Substitution Test",
            icon: <RefreshCw className="h-5 w-5" />,
            desc: "Plug each answer choice back into the sentence. Which one maintains the smooth flow and original meaning? If it sounds awkward, it's probably wrong."
          },
          {
            title: "Linguistic Clues",
            icon: <Search className="h-5 w-5" />,
            desc: "Look for 'Context Clues': Definition (the text defines the word), Example (the word is illustrated), or Contrast (a word meaning the opposite is used)."
          },
          {
            title: "Ignore the Dictionary",
            icon: <AlertTriangle className="h-5 w-5" />,
            desc: "A common trap is the 'Primary Meaning' distractor. A word like 'solution' might mean 'mixture' in a chemistry text, not 'answer to a problem'."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
            <div className="text-secondary">{item.icon}</div>
            <h4 className="font-sans font-bold text-primary">{item.title}</h4>
            <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant italic">
              <div className="w-4 h-1 bg-secondary rounded-full"></div>
              <span>The highlighted word is the target for the terminology question.</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Terminology questions aren't just about knowing definitions; they're about analyzing context. Use these techniques:
            </p>
            <ul className="space-y-4">
              {[
                { title: "The Substitution Test", desc: "Replace the highlighted word with each option. The one that fits most naturally without changing the meaning is the answer." },
                { title: "Look for Clues", desc: "Check the surrounding sentences for definitions, examples, or contrasting words that clarify the target word's meaning." },
                { title: "Analyze Word Parts", desc: "Break the word down into its prefix, root, and suffix to deduce its general meaning if you're unfamiliar with it." },
                { title: "Avoid 'Dictionary' Traps", desc: "Don't just pick the most common definition. Choose the one that makes sense in THIS specific academic context." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Contextual Reading", goal: "Read 2 sentences before and after" },
                  { step: "02", action: "Initial Guess", goal: "Think of your own synonym first" },
                  { step: "03", action: "Option Elimination", goal: "Discard words that don't fit the tone" },
                  { step: "04", action: "Final Verification", goal: "Perform the substitution test" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "A rich terminology is the foundation of academic success. By learning to deduce meaning from context, you're unlocking the ability to understand any text, no matter how complex!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const InferencePage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Biology: Hydrothermal Vents",
      passage: "Deep-sea hydrothermal vents are ecosystems located on the ocean floor, thousands of meters below the surface where sunlight cannot penetrate. These vents release mineral-rich water heated by magma beneath the Earth's crust. Surprisingly, they support diverse communities of organisms, such as giant tube worms and specialized bacteria, that thrive in total darkness. These organisms rely on chemosynthesis, a process that converts chemical energy from the vent minerals into organic matter.",
      highlight: "sunlight cannot penetrate",
      question: "What can be inferred from the passage about the organisms living near hydrothermal vents?",
      options: [
        { id: 1, text: "They are more complex than organisms living near the surface", explanation: "The passage doesn't compare the complexity of these organisms to surface-dwelling ones." },
        { id: 2, text: "They do not depend on sunlight for their survival", explanation: "Since the passage states they live where sunlight cannot penetrate and rely on chemosynthesis, it can be logically inferred that they don't need sunlight.", isCorrect: true },
        { id: 3, text: "They are the only organisms that use chemosynthesis", explanation: "The passage says they rely on it, but doesn't state they are the *only* ones in the world that do." },
        { id: 4, text: "They migrated from the surface to the deep sea recently", explanation: "The passage doesn't mention the evolutionary history or migration of these organisms." }
      ]
    },
    {
      subject: "History: Ancient Roman Roads",
      passage: "The ancient Romans were master engineers, known for constructing an extensive network of roads that spanned the empire. These roads were built with multiple layers of stone and gravel, ensuring they remained functional even in harsh weather. While primarily designed to facilitate the rapid movement of military legions, the roads also became vital conduits for trade and communication between distant provinces. The durability of these roads is evidenced by the fact that many segments are still visible today.",
      highlight: "primarily designed to facilitate the rapid movement of military legions",
      question: "What does the passage imply about the Roman road network?",
      options: [
        { id: 1, text: "It was built using materials imported from other empires", explanation: "The passage doesn't mention where the stone and gravel came from." },
        { id: 2, text: "Its primary purpose was to encourage international trade", explanation: "The passage states it was *primarily* for military movement; trade was a secondary benefit." },
        { id: 3, text: "It was a key factor in the military efficiency of the Roman Empire", explanation: "Since the roads were designed for the 'rapid movement of military legions', it implies they contributed to military efficiency.", isCorrect: true },
        { id: 4, text: "It was the most expensive project in Roman history", explanation: "The passage doesn't discuss the cost of the road network." }
      ]
    },
    {
      subject: "Economics: The Gold Standard",
      passage: "Under the gold standard, a country's currency had a value directly linked to a specific amount of gold. This system provided a high degree of exchange rate stability between nations, as currencies were fixed relative to each other. However, it also meant that a country's central bank had limited control over the domestic money supply, as the amount of money in circulation was constrained by the nation's gold reserves. During economic downturns, this lack of flexibility often made it difficult for governments to stimulate the economy.",
      highlight: "central bank had limited control over the domestic money supply",
      question: "It can be inferred from the passage that a country on the gold standard",
      options: [
        { id: 1, text: "Could easily print more money during a recession", explanation: "The passage says the opposite—that the money supply was 'constrained' and flexibility was limited." },
        { id: 2, text: "Had a currency that fluctuated wildly in value", explanation: "The passage states the system provided 'a high degree of exchange rate stability'." },
        { id: 3, text: "Was unable to use monetary policy freely to address economic issues", explanation: "The 'limited control' over the money supply implies a lack of freedom in using monetary policy.", isCorrect: true },
        { id: 4, text: "Possessed the largest gold reserves in the world", explanation: "The passage explains the system, not which country had the most gold." }
      ]
    }
  ];

  const activeExample = examples[currentExample];

  const shuffledOptions = useMemo(() => {
    return shuffleArray([...activeExample.options]);
  }, [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Inference</span>
      </div>

      {/* Grand Hero Header Section */}
      <section className="bg-gradient-to-br from-[#001733] via-[#002855] to-[#011627] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-cyan-500/20">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Zap className="h-72 w-72" />
        </div>

        <div className="space-y-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Core Reading Taxonomy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight">
            Logical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-cyan-300">Inference</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed">
            Deductive Reasoning & Unstated Consequence Extraction. Extrapolate strictly necessary truths implicitly signaled by the author without overextending beyond textual bounds.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Exam Frequency</p>
              <p className="text-xl font-black">Med <span className="text-xs font-normal opacity-70">2–3 Qs</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Score Impact</p>
              <p className="text-xl font-black">Logical Depth <span className="text-xs font-normal opacity-70">Band 28–30</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Pacing Goal</p>
              <p className="text-xl font-black">90–120s <span className="text-xs font-normal opacity-70">Deductive</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Difficulty</p>
              <p className="text-xl font-black">High <span className="text-xs font-normal opacity-70">Cognitive</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Drawing Logical Inferences</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Inference questions ask you to identify information that is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">not explicitly stated</span> but is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">strongly implied</span>. This is often called "Reading Between the Lines."
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              In academic environments, authors don't always state the obvious. These questions test your ability to synthesize evidence and reach the next logical step—a skill essential for making connections in higher-level research and theoretical discussion.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Lightbulb className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "Which of the following can be inferred from paragraph 1 about X?",
              "The author implies that X is likely to...",
              "Paragraph 2 suggests that X occurred because...",
              "Based on the passage, which of the following is true of Y?"
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "The 'Must Be True' Test",
            icon: <CheckCircle2 className="h-5 w-5" />,
            desc: "A valid inference isn't just a guess; it's a conclusion that HAS to be true based on the facts. If there's any scenario where the option could be false, it's not a valid inference."
          },
          {
            title: "Avoid 'Too Broad'",
            icon: <Maximize2 className="h-5 w-5" />,
            desc: "Correct inferences stay close to the text. If an option makes a massive generalization about 'all people' or 'every culture' when the text only mentions one group, it's probably wrong."
          },
          {
            title: "Look for Modifiers",
            icon: <Info className="h-5 w-5" />,
            desc: "Words like 'sometimes', 'likely', or 'contributed to' are often found in correct inferences. They reflect the nuanced, cautious tone characteristic of academic writing."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
            <div className="text-secondary">{item.icon}</div>
            <h4 className="font-sans font-bold text-primary">{item.title}</h4>
            <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant italic">
              <div className="w-4 h-1 bg-secondary rounded-full"></div>
              <span>The highlighted text provides the evidence for the inference.</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Inference questions require you to go beyond the literal meaning. Here's how to master them:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Stick to the Evidence", desc: "An inference must be supported by the text. If you can't point to a specific sentence that leads to the conclusion, it's likely wrong." },
                { title: "Avoid Extreme Options", desc: "Correct inferences are usually moderate. Watch out for words like 'always', 'never', or 'only' unless the text supports them." },
                { title: "Check for Logical Flow", desc: "Ask yourself: 'If Statement A is true, does Statement B *have* to be true?' If yes, it's a valid inference." },
                { title: "Eliminate Speculation", desc: "Don't bring in outside knowledge. The answer must be derivable solely from the information provided in the passage." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Evidence Gathering", goal: "Identify all relevant facts" },
                  { step: "02", action: "Logical Connection", goal: "Link facts to form a bridge" },
                  { step: "03", action: "Option Testing", goal: "Verify each option against facts" },
                  { step: "04", action: "Final Deduction", goal: "Select the most logical step" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Inference is the bridge between reading and thinking. By mastering this, you're becoming a more sophisticated scholar who can see the hidden patterns in any text!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ReferencePage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Biology: Cell Organelles",
      passage: "The mitochondria are often referred to as the powerhouses of the cell. They produce adenosine triphosphate (ATP), which serves as the primary source of chemical energy for various cellular processes. Without these organelles, complex life forms would be unable to generate the energy required for growth and reproduction.",
      highlight: "They",
      question: "The word 'They' in the passage refers to",
      options: [
        { id: 1, text: "powerhouses", explanation: "'Powerhouses' is a descriptive term for the mitochondria, but 'They' refers to the biological entities themselves." },
        { id: 2, text: "mitochondria", explanation: "The pronoun 'They' refers back to the subject of the previous sentence, 'The mitochondria'.", isCorrect: true },
        { id: 3, text: "cellular processes", explanation: "Cellular processes use the energy, but they don't produce it." },
        { id: 4, text: "complex life forms", explanation: "Life forms depend on the energy, but 'They' in the second sentence refers to the producers of ATP." }
      ]
    },
    {
      subject: "History: The Magna Carta",
      passage: "In 1215, King John of England was forced by a group of rebellious barons to sign the Magna Carta. This document established the principle that everyone, including the king, was subject to the law. It limited the absolute power of the monarchy and laid the groundwork for modern constitutional governance in the Western world.",
      highlight: "It",
      question: "The word 'It' in the passage refers to",
      options: [
        { id: 1, text: "King John", explanation: "King John was the person signing, but 'It' refers to the thing that limited the power." },
        { id: 2, text: "the monarchy", explanation: "The monarchy's power was limited by the document, but 'It' is the subject doing the limiting." },
        { id: 3, text: "the Magna Carta", explanation: "The pronoun 'It' refers back to the 'Magna Carta' (also referred to as 'This document' in the previous sentence).", isCorrect: true },
        { id: 4, text: "constitutional governance", explanation: "Governance was the result of the document, not the document itself." }
      ]
    },
    {
      subject: "Astronomy: Jupiter's Moons",
      passage: "In 1610, Galileo Galilei discovered four large moons orbiting Jupiter: Io, Europa, Ganymede, and Callisto. These satellites, now known as the Galilean moons, provided the first evidence that not all celestial bodies revolved around the Earth. Their discovery was a major blow to the geocentric model of the universe and supported the heliocentric theory proposed by Copernicus.",
      highlight: "These satellites",
      question: "The phrase 'These satellites' in the passage refers to",
      options: [
        { id: 1, text: "celestial bodies", explanation: "'Celestial bodies' is a general category; 'These satellites' refers to a specific set mentioned earlier." },
        { id: 2, text: "Io, Europa, Ganymede, and Callisto", explanation: "The phrase refers back to the four specific moons listed in the previous sentence.", isCorrect: true },
        { id: 3, text: "the Earth and Jupiter", explanation: "Earth and Jupiter are planets, not the satellites discovered by Galileo." },
        { id: 4, text: "the geocentric and heliocentric models", explanation: "These are scientific models, not physical satellites." }
      ]
    }
  ];

  const activeExample = examples[currentExample];

  const shuffledOptions = useMemo(() => {
    return shuffleArray([...activeExample.options]);
  }, [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20 mt-10"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Core Skill / Reference</span>
      </div>

      {/* Grand Hero Header Section */}
      <section className="bg-gradient-to-br from-[#001733] via-[#002855] to-[#011627] text-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-cyan-500/20">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <Link2 className="h-72 w-72" />
        </div>

        <div className="space-y-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Core Reading Taxonomy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight">
            Pronoun & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-cyan-300">Reference</span>
          </h1>

          <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed">
            Syntactic Tracking & Antecedent Resolution. Trace pronouns (they, it, which, this) backwards through the syntactic clause structure to confirm number, gender, and logical grammatical agreement.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Exam Frequency</p>
              <p className="text-xl font-black">Common <span className="text-xs font-normal opacity-70">1–2 Qs</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Score Impact</p>
              <p className="text-xl font-black">+1–2 Pts <span className="text-xs font-normal opacity-70">Syntactic</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Pacing Goal</p>
              <p className="text-xl font-black">45s <span className="text-xs font-normal opacity-70">Fast Resolution</span></p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">Difficulty</p>
              <p className="text-xl font-black">Moderate <span className="text-xs font-normal opacity-70">Grammar Check</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Mastering Reference Questions</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Reference questions ask you to identify the <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">antecedent</span> (the noun that comes before) of a specific pronoun or phrase like "it", "they", "this", or "which".
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              These questions measure your ability to track subjects and objects across complex, multi-clause academic sentences. In a university setting, losing track of referents means losing track of the entire argument. Cohesion is the key to advanced literacy.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GitBranch className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "The word 'it' in paragraph 1 refers to...",
              "The word 'they' in paragraph 2 refers to...",
              "The phrase 'this phenomenon' refers to...",
              "The word 'which' in paragraph 3 refers to..."
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-container-low p-8 rounded-[2.5rem] border border-black/5">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-6 w-6 text-secondary" />
          <h3 className="font-sans font-bold text-xl text-primary">Pro Tips for Reference</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-3xl border border-black/5 shadow-sm">
              <h4 className="font-sans font-bold text-primary mb-1">Number & Case Logic</h4>
              <p className="font-serif text-xs text-on-surface-variant">If the pronoun is "they" (plural), the antecedent MUST be plural. Discard any singular noun choices immediately. This is the fastest way to narrow down options!</p>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-black/5 shadow-sm">
              <h4 className="font-sans font-bold text-primary mb-1">Look Backwards</h4>
              <p className="font-serif text-xs text-on-surface-variant">Pronouns almost always refer to a noun in the same sentence or the one immediately preceding it. Rarely will you need to look further back than two sentences.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
            <h4 className="font-sans font-bold text-secondary text-xs uppercase mb-3">The Substitution Test</h4>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed italic mb-4">
              "Once you think you've found the answer, plug it back into the sentence where the pronoun was. Does the sentence still make sense? If it sounds illogical, you've grabbed the wrong noun."
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-primary">
              <Check className="h-4 w-4 text-green-500" />
              <span>Standard Verification Method</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant italic">
                <div className="w-4 h-1 bg-secondary rounded-full"></div>
                <span>The highlighted word/phrase is the target of the reference question.</span>
              </div>
            </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Reference questions are often straightforward if you follow a systematic approach:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Look Backwards", desc: "The antecedent is almost always located in the same sentence or the sentence immediately preceding the pronoun." },
                { title: "Check for Agreement", desc: "Ensure the referent matches the pronoun in number (singular/plural) and gender (though gender is rare in academic texts)." },
                { title: "Substitute and Read", desc: "Replace the pronoun with your chosen option and read the sentence. If it makes logical sense, you've likely found the referent." },
                { title: "Identify the Subject", desc: "Pronouns often refer to the subject of the previous clause or sentence. Start your search there." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Pronoun Isolation", goal: "Locate the target word" },
                  { step: "02", action: "Backward Scanning", goal: "Identify potential nouns" },
                  { step: "03", action: "Substitution Test", goal: "Plug in options to verify" },
                  { step: "04", action: "Context Check", goal: "Confirm logical consistency" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Tracking references is like following a thread through a tapestry. Once you find the connection, the whole picture becomes clear. Great job on mastering this essential skill!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const SentenceSimplificationPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Geology: Plate Tectonics",
      passage: "The theory of plate tectonics, which emerged in the mid-20th century, revolutionized our understanding of Earth's dynamic nature by proposing that the lithosphere is divided into several large plates that move relative to each other. This movement, driven by convection currents in the underlying mantle, is responsible for most of the planet's seismic and volcanic activity, as well as the formation of mountain ranges and oceanic trenches.",
      highlight: "This movement, driven by convection currents in the underlying mantle, is responsible for most of the planet's seismic and volcanic activity, as well as the formation of mountain ranges and oceanic trenches.",
      question: "Which of the following best expresses the essential information in the highlighted sentence? Incorrect answer choices change the meaning in important ways or leave out essential information.",
      options: [
        { id: 1, text: "Convection currents in the mantle cause the lithospheric plates to move, which in turn creates major geological features and events.", explanation: "This correctly identifies the cause (convection currents), the action (movement), and the results (geological features/events).", isCorrect: true },
        { id: 2, text: "Seismic and volcanic activity are the primary reasons why convection currents exist in the Earth's mantle.", explanation: "This reverses the causal relationship; currents cause the activity, not the other way around." },
        { id: 3, text: "The formation of oceanic trenches is the most important result of the movement of Earth's lithospheric plates.", explanation: "The passage lists multiple results; it doesn't single out oceanic trenches as the 'most important'." },
        { id: 4, text: "Mantle convection is a process that only occurs beneath large mountain ranges and oceanic trenches.", explanation: "The passage says it drives the movement responsible for these features, not that it only occurs beneath them." }
      ]
    },
    {
      subject: "Economics: Market Equilibrium",
      passage: "In a perfectly competitive market, the price of a good is determined by the intersection of the supply and demand curves, representing the point where the quantity producers are willing to sell equals the quantity consumers are willing to buy. Although external factors such as government subsidies or technological advancements can shift these curves, the market naturally tends to return to this equilibrium state over time through price adjustments.",
      highlight: "Although external factors such as government subsidies or technological advancements can shift these curves, the market naturally tends to return to this equilibrium state over time through price adjustments.",
      question: "Which of the following best expresses the essential information in the highlighted sentence? Incorrect answer choices change the meaning in important ways or leave out essential information.",
      options: [
        { id: 1, text: "Government subsidies and new technology are the only things that can prevent a market from reaching equilibrium.", explanation: "The passage mentions these as examples of 'external factors', not the only ones." },
        { id: 2, text: "Price adjustments allow markets to eventually reach a stable point even when outside forces cause changes in supply and demand.", explanation: "This captures the core idea: external factors cause shifts, but price adjustments lead back to equilibrium.", isCorrect: true },
        { id: 3, text: "Market equilibrium is a theoretical concept that is rarely achieved because of constant shifts in supply and demand curves.", explanation: "The passage says the market 'naturally tends to return' to equilibrium, suggesting it is a practical tendency." },
        { id: 4, text: "The intersection of supply and demand is primarily affected by price adjustments rather than external factors.", explanation: "Price adjustments are the *mechanism* for returning to equilibrium, while external factors are the *cause* of the shifts." }
      ]
    }
  ];

  const activeExample = examples[currentExample];

  const shuffledOptions = useMemo(() => {
    return shuffleArray([...activeExample.options]);
  }, [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Sentence Simplification</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Keyboard className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Sentence Simplification</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Logical Relationship Paraphrasing</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">High (1/passage)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Critical</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">60-90s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Hard</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Sentence Simplification</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            These questions ask you to identify the <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">essential information</span> of a long, complex sentence. You must choose the version that captures the core meaning while ignoring minor details.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Academic writing often uses nested clauses and complex syntax. Success in university depends on your ability to quickly strip away "filler" information and identify the central claim. This is a crucial skill for efficient academic reading and note-taking.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Minimize2 className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Identifying the Core</h3>
          <div className="space-y-4 relative z-10">
            <p className="text-xs font-serif italic text-white/80">Every complex sentence has a 'Main Frame':</p>
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl">
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center font-bold text-xs uppercase tracking-tighter shadow-lg shadow-black/20">S</div>
              <p className="text-xs font-medium">WHO? (Subject)</p>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs uppercase tracking-tighter">V</div>
              <p className="text-xs font-medium">DID WHAT? (Verb)</p>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs uppercase tracking-tighter">O</div>
              <p className="text-xs font-medium">TO WHOM/WHAT? (Object)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
        <div className="flex items-center gap-3 mb-6 font-sans font-bold text-primary">
          <AlertCircle className="h-6 w-6" />
          <h3 className="text-xl">Red Flags: Common Wrong Options</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "Missing Info", desc: "Leaves out a critical relationship like 'causality' or 'contrast'." },
            { tag: "Reversed Logic", desc: "Swaps the cause and the effect (A caused B vs B caused A)." },
            { tag: "Outside Scope", desc: "Adds information or a conclusion not present in the sentence." },
            { tag: "Extreme Tone", desc: "Changes 'usually' to 'always' or 'some' to 'all'." }
          ].map((flag, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">{flag.tag}</span>
              <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{flag.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Simplifying complex sentences requires breaking them down into their core components:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify the Subject and Verb", desc: "Find the main actor and the main action. Everything else is likely a modifier or a detail." },
                { title: "Analyze Logical Connectors", desc: "Pay attention to words like 'although', 'because', 'despite', and 'consequently'. They define the relationship between clauses." },
                { title: "Eliminate Extra Details", desc: "Parenthetical information, appositives (phrases between commas), and long lists of examples are often non-essential." },
                { title: "Check for Meaning Shifts", desc: "Incorrect options often change a 'cause' into an 'effect' or turn a 'possibility' into a 'certainty'." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Clause Breakdown", goal: "Identify independent clauses" },
                  { step: "02", action: "Connector Mapping", goal: "Define logical relationships" },
                  { step: "03", action: "Detail Stripping", goal: "Remove non-essential modifiers" },
                  { step: "04", action: "Option Verification", goal: "Match core meaning and logic" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Simplifying a sentence is like finding the skeleton of a thought. Once you see the structure, the complexity disappears. Keep refining your analytical eye!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ParagraphRelationshipsPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Psychology: Memory Systems",
      passage1: "Short-term memory, often referred to as working memory, is responsible for holding small amounts of information for brief periods, typically around 20 to 30 seconds. It acts as a temporary workspace where information is processed before being either discarded or transferred to long-term storage.",
      passage2: "In contrast, long-term memory has a virtually limitless capacity and can store information for years or even a lifetime. While short-term memory is easily disrupted by new incoming data, long-term memory is characterized by its stability and the complex network of associations that facilitate retrieval.",
      question: "How does the second paragraph relate to the first paragraph?",
      options: [
        { id: 1, text: "It provides specific examples of the processes mentioned in the first paragraph.", explanation: "It doesn't provide examples; it introduces a different type of memory." },
        { id: 2, text: "It contrasts a different type of memory system with the one described in the first paragraph.", explanation: "The second paragraph starts with 'In contrast' and compares long-term memory to the short-term memory discussed in the first.", isCorrect: true },
        { id: 3, text: "It explains the biological mechanisms that allow short-term memory to function.", explanation: "The focus is on long-term memory, not the biology of short-term memory." },
        { id: 4, text: "It challenges the theory of memory storage presented in the first paragraph.", explanation: "It doesn't challenge the theory; it expands on it by adding another component (long-term memory)." }
      ]
    },
    {
      subject: "Environmental Science: Urban Heat Islands",
      passage1: "The urban heat island effect is a phenomenon where metropolitan areas experience significantly higher temperatures than their surrounding rural counterparts. This is primarily due to the replacement of natural vegetation with heat-absorbing surfaces like asphalt and concrete, which trap solar radiation during the day.",
      passage2: "One effective strategy to mitigate this effect is the implementation of 'green roofs'—rooftops covered with vegetation. These living surfaces not only provide shade but also cool the air through evapotranspiration, thereby reducing the overall energy consumption of buildings and lowering ambient temperatures in the city.",
      question: "What is the relationship between the two paragraphs?",
      options: [
        { id: 1, text: "The second paragraph describes a potential solution to the problem introduced in the first paragraph.", explanation: "The first paragraph introduces the 'urban heat island effect' (the problem), and the second describes 'green roofs' as a strategy to 'mitigate' it.", isCorrect: true },
        { id: 2, text: "The second paragraph provides scientific evidence that contradicts the claims made in the first paragraph.", explanation: "The second paragraph supports the first by offering a way to address the issue." },
        { id: 3, text: "The second paragraph explains the historical origins of the phenomenon described in the first paragraph.", explanation: "It focuses on a modern solution, not historical origins." },
        { id: 4, text: "The second paragraph compares the urban heat island effect to other types of environmental pollution.", explanation: "It doesn't compare it to other types of pollution; it focuses on a specific mitigation strategy." }
      ]
    }
  ];

  const activeExample = examples[currentExample];

  const shuffledOptions = useMemo(() => {
    return shuffleArray([...activeExample.options]);
  }, [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Paragraph Relationships</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Globe className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Paragraph Relationships</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Organizational Pattern Analysis</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Low/Med (1-2)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Discourse Mastery</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">90 - 120s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Moderate</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">What are Paragraph Relationship Questions?</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Paragraph Relationship questions ask you to identify how two paragraphs in a passage are <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">connected</span>. You must determine the logical flow—whether the second paragraph provides an example, a contrast, a solution, or a further explanation of the first.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              These questions measure your ability to understand the <span className="italic">macro-structure</span> of an academic text. Successful academic reading involves not just understanding individual sentences, but recognizing how larger blocks of information are organized to build a coherent argument or explanation.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GitBranch className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "How does the second paragraph relate to the first paragraph?",
              "What is the relationship between paragraph 3 and paragraph 4?",
              "The author discusses X in paragraph 2 in order to...",
              "Paragraph 5 expands on the idea introduced in paragraph 4 by..."
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passages</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-black/5 font-serif text-base leading-relaxed text-on-surface relative">
                <span className="absolute -top-3 left-6 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest">Paragraph 1</span>
                <p>{activeExample.passage1}</p>
              </div>
              <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-black/5 font-serif text-base leading-relaxed text-on-surface relative">
                <span className="absolute -top-3 left-6 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest">Paragraph 2</span>
                <p>{activeExample.passage2}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Mastering paragraph relationships involves identifying the "logical bridge" between sections:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify the Main Idea of Each", desc: "Summarize each paragraph in 5 words or less. Comparing these summaries often reveals the relationship." },
                { title: "Look for Structural Transitions", desc: "Words like 'In contrast', 'Furthermore', 'Consequently', or 'For example' at the start of a paragraph are clear signals." },
                { title: "Categorize the Relationship", desc: "Is it Cause/Effect? Problem/Solution? General/Specific? Comparison/Contrast? Chronological?" },
                { title: "Check the 'Pivot' Point", desc: "The last sentence of the first paragraph and the first sentence of the second paragraph usually contain the logical link." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Paragraph Summarization", goal: "Define core content of each" },
                  { step: "02", action: "Transition Detection", goal: "Find explicit logical markers" },
                  { step: "03", action: "Relationship Labeling", goal: "Assign a category (e.g., Contrast)" },
                  { step: "04", action: "Option Matching", goal: "Select the best descriptive label" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "A passage is not a list of facts; it's a built argument. Understanding how the pieces fit together is the mark of a truly advanced reader. Keep connecting the dots!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ImportantIdeaPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const examples = [
    {
      subject: "Biology: Symbiotic Relationships",
      introSentence: "Symbiosis is a close and long-term biological interaction between two different biological organisms.",
      options: [
        { id: 1, text: "Mutualism is a type of symbiosis where both species involved benefit from the relationship, such as bees and flowers.", isCorrect: true, explanation: "This is a major idea defining one of the primary types of symbiosis." },
        { id: 2, text: "Commensalism occurs when one species benefits while the other is neither helped nor harmed by the interaction.", isCorrect: true, explanation: "This is a major idea defining another primary type of symbiosis." },
        { id: 3, text: "Parasitism involves one organism benefiting at the expense of another, often causing harm to the host organism.", isCorrect: true, explanation: "This is a major idea defining the third primary type of symbiosis." },
        { id: 4, text: "Some parasites are so small that they can only be seen with the aid of a powerful electron microscope.", isCorrect: false, explanation: "This is a minor detail about the size of some parasites, not a main idea of the passage." },
        { id: 5, text: "Organisms in symbiotic relationships always evolve to become more similar to each other over millions of years.", isCorrect: false, explanation: "This is an inaccurate generalization not supported by the general definition of symbiosis." },
        { id: 6, text: "The word 'symbiosis' comes from the Greek words for 'together' and 'living'.", isCorrect: false, explanation: "This is an interesting etymological fact, but it's a minor detail, not a main idea of the biological concept." }
      ]
    },
    {
      subject: "Astronomy: The Life Cycle of Stars",
      introSentence: "Stars undergo a complex life cycle that begins in nebulae and ends in various states depending on their initial mass.",
      options: [
        { id: 1, text: "Massive stars eventually explode as supernovae, leaving behind either a neutron star or a black hole.", isCorrect: true, explanation: "This is a major stage in the life cycle of high-mass stars." },
        { id: 2, text: "Low-mass stars, like our Sun, expand into red giants before shedding their outer layers to become white dwarfs.", isCorrect: true, explanation: "This describes the primary evolutionary path for average-sized stars." },
        { id: 3, text: "Nuclear fusion in a star's core provides the outward pressure necessary to counteract the inward pull of gravity.", isCorrect: true, explanation: "This is the fundamental process that sustains a star during its main sequence phase." },
        { id: 4, text: "The term 'nebula' is derived from the Latin word for 'cloud' or 'mist'.", isCorrect: false, explanation: "This is a minor linguistic detail, not a core scientific concept of the star's life cycle." },
        { id: 5, text: "Some stars appear blue because they are hotter than stars that appear red or yellow.", isCorrect: false, explanation: "While true, this is a specific detail about star classification rather than a summary of the life cycle stages." },
        { id: 6, text: "The first telescope was invented in the early 17th century by Dutch lens makers.", isCorrect: false, explanation: "This is a historical fact about astronomy tools, not a main idea about the life cycle of stars." }
      ]
    },
    {
      subject: "History: The Industrial Revolution",
      introSentence: "The Industrial Revolution was a period of global transition toward new manufacturing processes that began in Great Britain.",
      options: [
        { id: 1, text: "The shift from hand production to machines led to a massive increase in production capacity and economic growth.", isCorrect: true, explanation: "This is a central theme of the Industrial Revolution's impact on manufacturing." },
        { id: 2, text: "Urbanization accelerated as large numbers of people moved from rural areas to cities to work in factories.", isCorrect: true, explanation: "This describes a major social and demographic shift caused by industrialization." },
        { id: 3, text: "Technological innovations like the steam engine and power loom revolutionized transportation and textile production.", isCorrect: true, explanation: "These are the key technological drivers that defined the era." },
        { id: 4, text: "Queen Victoria reigned over the United Kingdom during much of the 19th century.", isCorrect: false, explanation: "This is a historical fact about a monarch, not a summary of the Industrial Revolution itself." },
        { id: 5, text: "The first steam engine was patented by James Watt in 1769, though earlier versions existed.", isCorrect: false, explanation: "This is a specific detail about a single invention's timeline, not a broad summary point." },
        { id: 6, text: "Early factories often used bells to signal the start and end of a work shift.", isCorrect: false, explanation: "This is a minor detail about daily factory life, not a major historical trend." }
      ]
    }
  ];

  const example = examples[currentExampleIndex];
  const shuffledOptions = useMemo(() => shuffleArray(example.options), [example]);

  const toggleOption = (id: number) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter(o => o !== id));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const nextExample = () => {
    setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
    setSelectedOptions([]);
    setShowFeedback(false);
  };

  const prevExample = () => {
    setCurrentExampleIndex((prev) => (prev - 1 + examples.length) % examples.length);
    setSelectedOptions([]);
    setShowFeedback(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Skills
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Important Idea</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Star className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Important Idea</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Prose Summary Synthesis</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Highest (1/passage)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">2 Points Total</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">120-180s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Extreme</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">What are Important Idea Questions?</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Important Idea (or Prose Summary) questions ask you to identify the <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">three most significant points</span> of the entire passage. You are given an introductory sentence and must select three more to complete a summary.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              These questions test your ability to synthesize information and distinguish between <span className="italic">major ideas</span> and <span className="italic">minor details</span>. They evaluate your understanding of the passage's overall hierarchy and your capacity to recognize the core arguments that support the author's thesis.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <LayoutList className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Common Question Stems</h3>
          <ul className="space-y-3 relative z-10">
            {[
              "Complete the summary by selecting the THREE answer choices that express the most important ideas...",
              "Some sentences do not belong in the summary because they express ideas that are not presented...",
              "...or are minor ideas in the passage.",
              "This question is worth 2 points."
            ].map((stem, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-90">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
                <span className="font-serif italic">{stem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-black/5"></div>
          <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Summary Builder</h2>
        </div>

        <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-black/5 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-sans font-bold text-primary text-xl">Summary Introduction</h3>
              <p className="text-xs text-secondary font-bold uppercase tracking-widest">{example.subject}</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevExample}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="text-xs font-bold font-mono">
                {currentExampleIndex + 1} / {examples.length}
              </span>
              <button 
                onClick={nextExample}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-l-4 border-secondary shadow-sm font-serif italic text-lg text-on-surface">
            "{example.introSentence}"
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Select 3 Main Ideas</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                {selectedOptions.length} / 3 Selected
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shuffledOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  disabled={showFeedback}
                  className={`text-left p-5 rounded-2xl border transition-all relative group ${
                    selectedOptions.includes(option.id)
                      ? showFeedback
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-600 text-white shadow-lg shadow-green-200'
                          : 'bg-red-500 border-red-600 text-white shadow-lg shadow-red-200'
                        : 'bg-secondary/5 border-secondary ring-2 ring-secondary/20'
                      : showFeedback && option.isCorrect
                        ? 'bg-green-50 border-green-200 opacity-80'
                        : 'bg-white border-black/5 hover:border-secondary/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                      selectedOptions.includes(option.id)
                        ? showFeedback
                          ? 'bg-white border-white text-primary'
                          : 'bg-secondary border-secondary text-white'
                        : 'border-black/20 group-hover:border-secondary'
                    }`}>
                      {selectedOptions.includes(option.id) && <Check className="h-4 w-4" />}
                    </div>
                    <p className={`font-serif text-sm leading-relaxed transition-colors ${
                      selectedOptions.includes(option.id) && showFeedback
                        ? 'text-white'
                        : 'text-on-surface-variant group-hover:text-primary'
                    }`}>
                      {option.text}
                    </p>
                  </div>
                  {showFeedback && (selectedOptions.includes(option.id) || option.isCorrect) && (
                    <div className={`mt-4 pt-4 border-t text-[10px] font-serif italic ${
                      selectedOptions.includes(option.id) && showFeedback
                        ? 'border-white/20 text-white/90'
                        : 'border-black/5 text-on-surface-variant/70'
                    }`}>
                      {option.explanation}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowFeedback(!showFeedback)}
              disabled={selectedOptions.length !== 3}
              className={`px-12 py-4 rounded-full font-sans font-bold uppercase tracking-widest transition-all shadow-lg ${
                selectedOptions.length === 3
                  ? 'bg-secondary text-white hover:scale-105 active:scale-95'
                  : 'bg-black/10 text-black/20 cursor-not-allowed'
              }`}
            >
              {showFeedback ? 'Reset Example' : 'Check Summary'}
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Summary questions are worth more points, so mastering them is vital:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Review Your Notes", desc: "Look at the main points you noted for each paragraph. The correct summary options will likely mirror these notes." },
                { title: "Avoid 'Detail Traps'", desc: "ETS often includes options that are factually true according to the passage but are only minor details or examples." },
                { title: "Check for Scope", desc: "Main ideas should cover a significant portion of the passage. If an option only applies to one small paragraph, it's likely a detail." },
                { title: "Verify Accuracy", desc: "Ensure the option doesn't contradict the passage or misinterpret the author's stance." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Passage Review", goal: "Recall the main thesis" },
                  { step: "02", action: "Option Categorization", goal: "Label as 'Main Idea' or 'Detail'" },
                  { step: "03", action: "Detail Elimination", goal: "Discard minor facts" },
                  { step: "04", action: "Final Selection", goal: "Choose 3 most comprehensive points" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Synthesizing a summary is the ultimate test of comprehension. It shows you haven't just read the words, but you've understood the architecture of the author's mind."
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const InsertTextPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const examples = [
    {
      subject: "History: The Industrial Revolution",
      newSentence: "This shift was not merely technological; it fundamentally altered the social fabric of Western nations.",
      passageParts: [
        "The Industrial Revolution marked a major turning point in history, as manual labor was increasingly replaced by machines in factories. [1] Urbanization accelerated as thousands of people moved from rural areas to cities in search of work. [2] The growth of the middle class and the emergence of new labor movements were direct consequences of these changes. [3] By the late 19th century, the landscape of Europe and North America had been transformed into an industrial powerhouse. [4]"
      ],
      correctSquare: 2,
      explanations: {
        1: "The sentence refers to a 'shift' and 'social fabric'. While the first sentence mentions a technological shift, the second sentence starts discussing urbanization (a social change). Placing it here is too early.",
        2: "This is the best location. The 'shift' refers back to the technological changes in the first sentence, and 'social fabric' introduces the topic of urbanization and social changes discussed in the following sentences.",
        3: "Placing it here interrupts the flow between the discussion of urbanization and its specific social consequences (middle class, labor movements).",
        4: "Placing it at the end is too late; the social changes have already been discussed in detail."
      }
    },
    {
      subject: "Biology: Photosynthesis",
      newSentence: "In addition to light, this process requires carbon dioxide and water to produce glucose and oxygen.",
      passageParts: [
        "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll. [1] This chemical reaction occurs primarily within the chloroplasts of plant cells. [2] The energy from light is captured and used to convert inorganic molecules into organic ones. [3] Without this fundamental process, most life on Earth would not be able to survive due to a lack of energy sources. [4]"
      ],
      correctSquare: 2,
      explanations: {
        1: "The sentence mentions 'this process' and specific requirements. Placing it here is possible, but it fits better after the chloroplasts are mentioned as the site of the reaction.",
        2: "This is the best location. It follows the mention of chloroplasts where the reaction occurs and provides the specific chemical requirements for the 'process' mentioned in the first sentence.",
        3: "Placing it here interrupts the explanation of energy conversion.",
        4: "This is too late in the paragraph, as it's a concluding statement about the importance of the process."
      }
    },
    {
      subject: "Literature: The Gothic Novel",
      newSentence: "These atmospheric elements were designed to evoke a sense of dread and suspense in the reader.",
      passageParts: [
        "The Gothic novel is a genre of literature that combined elements of both horror and romance. [1] It often featured gloomy settings such as decaying castles, dark forests, and supernatural occurrences. [2] Authors like Mary Shelley and Bram Stoker became masters of this style, creating iconic characters that still resonate today. [3] The genre's influence can be seen in modern horror films and psychological thrillers. [4]"
      ],
      correctSquare: 2,
      explanations: {
        1: "The sentence refers to 'these atmospheric elements'. No specific elements have been mentioned yet.",
        2: "This is the best location. 'These atmospheric elements' refers directly back to the gloomy settings (castles, forests) mentioned in the previous sentence.",
        3: "Placing it here is too late, as the focus has shifted to specific authors.",
        4: "This is at the end and does not connect well with the discussion of the genre's modern influence."
      }
    }
  ];

  const example = examples[currentExampleIndex];

  const nextExample = () => {
    setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
    setSelectedSquare(null);
    setShowFeedback(false);
  };

  const prevExample = () => {
    setCurrentExampleIndex((prev) => (prev - 1 + examples.length) % examples.length);
    setSelectedSquare(null);
    setShowFeedback(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Insert Text</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <PlusSquare className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Insert Text</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Cohesion & Logical Flow</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Consistent (1)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Structure Score</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">60 - 90s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">High</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Sentence Insertion Logic</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Insert Text questions ask you to determine where a new sentence best fits into a paragraph. You are shown four squares <span className="font-bold text-secondary">[■]</span> and must click the one that creates the most <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">logical and cohesive</span> flow.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              These questions test <span className="italic">cohesion</span>. In university-level writing, sentences aren't just independent units; they are linked via "logical glue" like pronouns, transition words, and thematic progression. This skill is vital for both reading comprehension and academic writing.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Link2 className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">The 'Glue' to Watch For</h3>
          <ul className="space-y-4 relative z-10">
            {[
              { type: "Pronouns", words: "this, these, it, they", use: "Refer back to a noun in the previous sentence." },
              { type: "Transitions", words: "however, therefore, in addition", use: "Signal the logical relationship between ideas." },
              { type: "Repetition", words: "industrialization -> this shift", use: "Key terms or synonyms that bridge sentences." }
            ].map((glue, i) => (
              <li key={i} className="bg-white/10 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{glue.type}</span>
                  <span className="text-[10px] opacity-60 font-mono">{glue.words}</span>
                </div>
                <p className="text-xs opacity-80">{glue.use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Placement Practice</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-black/5">
              <button 
                onClick={prevExample}
                className="p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
              </button>
              <span className="text-[10px] font-bold font-mono w-8 text-center">
                {currentExampleIndex + 1} / {examples.length}
              </span>
              <button 
                onClick={nextExample}
                className="p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            {showFeedback && (
              <button 
                onClick={() => {
                  setSelectedSquare(null);
                  setShowFeedback(false);
                }}
                className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
              >
                Reset Example <ChevronRight className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Sentence to Insert</h3>
            <div className="bg-secondary text-white p-8 rounded-[2rem] shadow-lg font-serif italic text-lg leading-relaxed relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Quote className="h-12 w-12" />
              </div>
              "{example.newSentence}"
            </div>
            <div className="bg-surface-container-low p-6 rounded-2xl border border-black/5 space-y-3">
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-secondary">Strategy Tip</h4>
              <p className="font-serif text-xs text-on-surface-variant leading-relaxed">
                Look for <span className="font-bold">referring words</span> in the new sentence (like "This shift") and find what they refer to in the passage. Also, check if the new sentence introduces a topic that is expanded upon in the following sentences.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative">
              <p>
                {example.passageParts[0].split(/\[\d\]/).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <button
                        onClick={() => {
                          setSelectedSquare(i + 1);
                          setShowFeedback(true);
                        }}
                        className={`mx-1 inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 transition-all ${
                          selectedSquare === i + 1
                            ? i + 1 === example.correctSquare
                              ? 'bg-green-500 border-green-500 text-white shadow-green-200 shadow-lg'
                              : 'bg-red-500 border-red-500 text-white shadow-red-200 shadow-lg'
                            : 'bg-surface-container-high border-black/10 hover:border-secondary hover:bg-secondary/5 text-secondary font-bold'
                        }`}
                      >
                        {selectedSquare === i + 1 ? (i + 1 === example.correctSquare ? <Check className="h-4 w-4" /> : <XCircle className="h-4 w-4" />) : '■'}
                      </button>
                    )}
                  </span>
                ))}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {showFeedback && selectedSquare && (
                <motion.div
                  key={selectedSquare}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-3xl border ${
                    selectedSquare === example.correctSquare
                      ? 'bg-green-50 border-green-100 text-green-800'
                      : 'bg-red-50 border-red-100 text-red-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {selectedSquare === example.correctSquare ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                    <span className="font-sans font-bold uppercase text-xs tracking-widest">
                      {selectedSquare === example.correctSquare ? 'Perfect Placement' : 'Incorrect Placement'}
                    </span>
                  </div>
                  <p className="font-serif text-sm italic leading-relaxed">
                    {example.explanations[selectedSquare as keyof typeof example.explanations]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Success in Insert Text questions depends on tracking the "logical thread":
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify Cohesion Markers", desc: "Look for pronouns (it, they), demonstratives (this, these), and logical connectors (however, therefore) in the new sentence." },
                { title: "Check for Antecedents", desc: "If the new sentence says 'This discovery...', the sentence *before* it must describe a discovery." },
                { title: "Look for Subsequent Links", desc: "The sentence *after* the insertion point should logically follow the new sentence's content." },
                { title: "Read the Whole Paragraph", desc: "After choosing a square, read the entire paragraph with the new sentence included to ensure it sounds natural." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Target Sentence Analysis", goal: "Find internal logical clues" },
                  { step: "02", action: "Square-by-Square Test", goal: "Evaluate each potential fit" },
                  { step: "03", action: "Cohesion Verification", goal: "Ensure smooth transitions" },
                  { step: "04", action: "Final Read-Through", goal: "Confirm paragraph integrity" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Inserting a sentence is like finding the missing piece of a puzzle. When it clicks, the whole picture makes sense. Keep practicing your logical placement!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const RhetoricalPurposePage = ({ onBack }: { onBack: () => void }) => {
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const examples = [
    {
      subject: "Biology: Animal Defenses",
      passage: "Many animals have evolved specialized physical traits to evade predators. For example, the leaf-tail gecko possesses a flattened body and skin fringes that break up its outline against tree bark. By blending perfectly into its environment, the gecko can remain undetected by both predators and prey. This form of crypsis is essential for survival in the competitive rainforest ecosystem.",
      highlight: "For example, the leaf-tail gecko possesses a flattened body and skin fringes that break up its outline against tree bark.",
      question: "Why does the author mention the 'leaf-tail gecko' in the passage?",
      options: [
        { id: 1, text: "To argue that geckos are the most successful predators in the rainforest", explanation: "The passage focuses on defense and evasion, not on the gecko being a top predator." },
        { id: 2, text: "To provide an illustration of a specialized physical trait used for evasion", explanation: "The author uses the gecko as a specific example to support the general claim about specialized physical traits.", isCorrect: true },
        { id: 3, text: "To compare the gecko's skin to the bark of rainforest trees", explanation: "While the skin is compared to bark, the primary purpose is to illustrate an evolutionary defense mechanism." },
        { id: 4, text: "To explain why crypsis is more common in reptiles than in other animals", explanation: "The passage does not compare reptiles to other animals; it only provides one example." }
      ]
    },
    {
      subject: "History: The Printing Press",
      passage: "The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the spread of information. Before this, books were hand-copied and extremely expensive, limiting literacy to the elite. The press allowed for the mass production of texts, which led to a surge in literacy rates and the rapid dissemination of scientific and religious ideas. One notable result was the increased accessibility of the Bible, which empowered individuals to interpret religious texts for themselves.",
      highlight: "One notable result was the increased accessibility of the Bible, which empowered individuals to interpret religious texts for themselves.",
      question: "The author mentions the 'increased accessibility of the Bible' in order to",
      options: [
        { id: 1, text: "Demonstrate how the printing press led to individual empowerment", explanation: "The text links the accessibility of the Bible to individuals being able to interpret texts for themselves, illustrating empowerment.", isCorrect: true },
        { id: 2, text: "Argue that religious texts were the only books produced by the press", explanation: "The passage says it allowed for 'mass production of texts' in general, not just religious ones." },
        { id: 3, text: "Explain why literacy was previously limited to the elite", explanation: "The elite literacy was due to hand-copied books being expensive, not the accessibility of the Bible." },
        { id: 4, text: "Show that Gutenberg was primarily interested in religious reform", explanation: "The passage focuses on the impact of the invention, not Gutenberg's personal motivations." }
      ]
    },
    {
      subject: "Astronomy: Solar Flares",
      passage: "Solar flares are intense bursts of radiation coming from the release of magnetic energy associated with sunspots. These flares can have significant impacts on Earth's technological infrastructure. For instance, they can disrupt satellite communications and even cause power grid failures in extreme cases. Understanding the mechanisms behind these events is crucial for developing better space weather forecasting systems.",
      highlight: "For instance, they can disrupt satellite communications and even cause power grid failures in extreme cases.",
      question: "Why does the author provide examples of disruptions to 'satellite communications' and 'power grids'?",
      options: [
        { id: 1, text: "To explain the scientific process of magnetic energy release", explanation: "These are examples of impacts, not explanations of the scientific process itself." },
        { id: 2, text: "To emphasize the potential severity of solar flares on human technology", explanation: "The author uses these specific examples to illustrate the 'significant impacts' mentioned in the previous sentence.", isCorrect: true },
        { id: 3, text: "To argue that space weather is more dangerous than terrestrial weather", explanation: "The passage does not compare space weather to terrestrial weather." },
        { id: 4, text: "To suggest that current power grids are poorly designed", explanation: "The focus is on the external threat of solar flares, not the design of the grids themselves." }
      ]
    }
  ];

  const activeExample = examples[currentExample];

  const shuffledOptions = useMemo(() => {
    return shuffleArray([...activeExample.options]);
  }, [activeExample]);

  const handleNextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Skills
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Rhetorical Purpose</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Target className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Rhetorical Purpose</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Argument Structure Recognition</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Medium (1)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">High Impact</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">60-80s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Medium</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Rhetorical Purpose</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            Rhetorical Purpose questions ask you <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">WHY</span> the author included a specific piece of information. This is about the <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">function</span> of a detail, example, or quote.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Why ETS uses them</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Academic texts are structured arguments. Every piece of info has a job: to prove a point, provide contrast, or illustrate a complex idea. Mastering this helps you "see the gears" of the author's argument, moving beyond simple facts to deep comprehension.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Author Strategies</h3>
          <div className="grid grid-cols-2 gap-3 relative z-10">
            {[
              { label: "Illustrate", desc: "To provide a concrete example of a broad concept." },
              { label: "Clarify", desc: "To explain a difficult term or process." },
              { label: "Contrast", desc: "To highlight differences between two things." },
              { label: "Acknowledge", desc: "To mention a counter-argument or limitation." }
            ].map((strat, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/5">
                <h4 className="text-secondary font-bold text-[10px] uppercase mb-1">{strat.label}</h4>
                <p className="text-[10px] opacity-80 leading-tight">{strat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Examples ({currentExample + 1}/{examples.length})</h2>
          </div>
          <button 
            onClick={handleNextExample}
            className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
          >
            Next Example <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{activeExample.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-lg leading-relaxed text-on-surface relative min-h-[200px]">
              <p>
                {activeExample.passage.split(activeExample.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="bg-secondary/20 border-b-2 border-secondary px-1 font-bold text-primary rounded-sm">
                        {activeExample.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
              <div className="absolute -bottom-3 -right-3 bg-secondary text-white p-2 rounded-xl shadow-lg">
                <Info className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant italic">
              <div className="w-4 h-1 bg-secondary rounded-full"></div>
              <span>The highlighted text is the focus of the rhetorical purpose question.</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-primary">Practice Question</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <p className="font-sans font-bold text-primary leading-tight">
                {activeExample.question}
              </p>
              <div className="space-y-3">
                {shuffledOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-50 border-green-200 ring-2 ring-green-100'
                          : 'bg-red-50 border-red-200 ring-2 ring-red-100'
                        : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                      selectedOption === option.id
                        ? option.isCorrect
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'bg-red-500 border-red-500 text-white'
                        : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                    }`}>
                      {selectedOption === option.id ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />) : option.id}
                    </div>
                    <span className={`text-sm font-medium ${selectedOption === option.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border ${
                      activeExample.options.find(o => o.id === selectedOption)?.isCorrect
                        ? 'bg-green-50 border-green-100 text-green-800'
                        : 'bg-red-50 border-red-100 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        {activeExample.options.find(o => o.id === selectedOption)?.isCorrect ? 'Correct Analysis' : 'Incorrect Analysis'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed font-serif italic">
                      {activeExample.options.find(o => o.id === selectedOption)?.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              To master Rhetorical Purpose questions, you must look beyond the "what" and focus on the "why":
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify the Claim", desc: "Find the main claim of the paragraph. The highlighted detail is almost certainly there to support it." },
                { title: "Look for Transition Words", desc: "Words like 'for example', 'however', or 'furthermore' signal the logical relationship of the detail to the rest of the text." },
                { title: "Think Logically", desc: "Ask yourself: 'If the author removed this sentence, what would the argument lose?'" },
                { title: "Avoid 'True but Irrelevant'", desc: "Distractors often state something that is true according to the text but does NOT explain the purpose of the detail." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Locate the Detail", goal: "Find the target sentence" },
                  { step: "02", action: "Identify the Context", goal: "Read the sentence before it" },
                  { step: "03", action: "Determine Function", goal: "Label it (Example, Contrast, etc.)" },
                  { step: "04", action: "Match the Purpose", goal: "Select the option that fits the label" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-primary text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-[-10px] right-[-10px] opacity-10">
              <Trophy className="h-20 w-20" />
            </div>
            <p className="font-serif italic text-lg leading-relaxed relative z-10">
              "Understanding the 'why' is the key to deep comprehension. You're not just reading words; you're deciphering the author's strategy. Keep building those analytical muscles!"
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const CompleteSummaryPage = ({ onBack }: { onBack: () => void }) => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const examples = [
    {
      subject: "Ecology: The Role of Keystone Species",
      passage: "Keystone species play a disproportionately large role in their ecosystems relative to their abundance. A classic example is the sea otter in the North Pacific. Sea otters prey on sea urchins, which in turn consume kelp. When sea otter populations declined due to overhunting, sea urchin populations exploded, leading to the destruction of kelp forests. These forests are vital habitats for numerous other species, including fish and invertebrates. By controlling urchin populations, sea otters maintain the health and diversity of the entire ecosystem. Similarly, wolves in Yellowstone National Park act as keystone species by controlling elk populations, which prevents overgrazing and allows riparian vegetation to flourish, benefiting birds and beavers.",
      introSentence: "Keystone species are essential for maintaining the balance and biodiversity of their respective ecosystems.",
      options: [
        { id: 1, text: "Sea otters are a well-known example of a keystone species because they regulate sea urchin populations.", isCorrect: true, explanation: "This is a key supporting example that illustrates the main concept of the passage." },
        { id: 2, text: "The decline of sea otters led to the near-extinction of several species of North Pacific fish.", isCorrect: false, explanation: "This is an exaggeration; the passage mentions habitat destruction but not 'near-extinction'." },
        { id: 3, text: "Wolves in Yellowstone help maintain riparian vegetation by controlling the population of elk.", isCorrect: true, explanation: "This is the second major example provided to support the thesis about keystone species." },
        { id: 4, text: "Keystone species have a significant impact on their environment that is much greater than their population size would suggest.", isCorrect: true, explanation: "This is the central thesis and a primary point of the passage." },
        { id: 5, text: "Sea urchins are the primary food source for many marine mammals in the North Pacific.", isCorrect: false, explanation: "This information is not stated in the passage and is likely factually incorrect." },
        { id: 6, text: "Riparian vegetation is necessary for the survival of beavers and various bird species.", isCorrect: false, explanation: "While mentioned, this is a minor detail supporting the wolf example, not a main idea of the entire passage." }
      ]
    },
    {
      subject: "Geology: Plate Tectonics",
      passage: "The theory of plate tectonics describes the large-scale motion of the seven large plates and several smaller plates of the Earth's lithosphere. These plates are in constant motion, driven by convection currents in the underlying mantle. Where plates meet, their relative motion determines the type of boundary: convergent, divergent, or transform. At convergent boundaries, plates collide, often leading to subduction and the formation of mountain ranges or volcanic arcs. Divergent boundaries occur where plates move apart, creating new crust as magma rises from the mantle, as seen in mid-ocean ridges. Transform boundaries, such as the San Andreas Fault, involve plates sliding past each other, which can cause significant earthquakes.",
      introSentence: "Plate tectonics is the fundamental theory explaining the Earth's dynamic geological processes and surface features.",
      options: [
        { id: 1, text: "The movement of tectonic plates is primarily driven by heat-driven convection currents within the Earth's mantle.", isCorrect: true, explanation: "This is a core mechanism explaining why the plates move." },
        { id: 2, text: "The San Andreas Fault is the only transform boundary currently active on Earth.", isCorrect: false, explanation: "The passage uses it as an example, but does not state it is the only one." },
        { id: 3, text: "Different types of plate boundaries, such as convergent and divergent, result in distinct geological formations like mountains and ridges.", isCorrect: true, explanation: "This summarizes the primary geological outcomes of plate interactions." },
        { id: 4, text: "The Earth's lithosphere is divided into several large and small plates that are in a state of continuous motion.", isCorrect: true, explanation: "This is the basic premise of the theory of plate tectonics." },
        { id: 5, text: "Magma rising at transform boundaries is the main cause of volcanic activity in California.", isCorrect: false, explanation: "The passage states transform boundaries involve sliding, not rising magma; this is factually incorrect." },
        { id: 6, text: "Convection currents were first discovered by Alfred Wegener in the early 20th century.", isCorrect: false, explanation: "This historical detail is not mentioned in the passage and is not a main idea." }
      ]
    },
    {
      subject: "Psychology: Cognitive Dissonance",
      passage: "Cognitive dissonance is the mental discomfort experienced by a person who holds two or more contradictory beliefs, ideas, or values. This discomfort is typically triggered when a person's behavior conflicts with their existing beliefs. To reduce this dissonance, individuals often change their attitudes, beliefs, or behaviors, or justify their actions through rationalization. For example, a person who smokes despite knowing it's unhealthy may convince themselves that the risks are exaggerated or that they will quit soon. Leon Festinger's 1957 theory suggests that humans have an inner drive to hold all our attitudes and beliefs in harmony and avoid disharmony.",
      introSentence: "Cognitive dissonance theory explains how individuals resolve the psychological tension caused by conflicting beliefs and behaviors.",
      options: [
        { id: 1, text: "Individuals experience psychological discomfort when their actions are inconsistent with their deeply held values or beliefs.", isCorrect: true, explanation: "This is the fundamental definition of cognitive dissonance." },
        { id: 2, text: "People often use rationalization or change their attitudes as a way to minimize the tension caused by contradictory ideas.", isCorrect: true, explanation: "This describes the primary methods people use to resolve dissonance." },
        { id: 3, text: "Leon Festinger's research focused primarily on the long-term health effects of smoking on psychological well-being.", isCorrect: false, explanation: "Smoking is used only as an example; it was not the primary focus of his research in this context." },
        { id: 4, text: "The human mind has an inherent tendency to seek consistency and harmony among its various attitudes and beliefs.", isCorrect: true, explanation: "This is the underlying psychological drive that motivates the resolution of dissonance." },
        { id: 5, text: "Cognitive dissonance is most commonly experienced by individuals with high levels of self-esteem.", isCorrect: false, explanation: "This information is not supported by the passage." },
        { id: 6, text: "The term 'dissonance' was originally borrowed from music theory to describe clashing sounds.", isCorrect: false, explanation: "This is a minor etymological detail, not a main idea of the psychological theory." }
      ]
    }
  ];

  const example = examples[currentExampleIndex];
  const shuffledOptions = useMemo(() => shuffleArray(example.options), [example]);

  const toggleOption = (id: number) => {
    if (showFeedback) return;
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const checkAnswers = () => {
    setShowFeedback(true);
  };

  const reset = () => {
    setSelectedOptions([]);
    setShowFeedback(false);
  };

  const nextExample = () => {
    setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
    setSelectedOptions([]);
    setShowFeedback(false);
  };

  const prevExample = () => {
    setCurrentExampleIndex((prev) => (prev - 1 + examples.length) % examples.length);
    setSelectedOptions([]);
    setShowFeedback(false);
  };

  const correctCount = selectedOptions.filter(id => example.options.find(o => o.id === id)?.isCorrect).length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Complete the Summary</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <LayoutList className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Complete the Summary</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Main Idea Synthesis</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Highest (1/passage)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">2 Points Total</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">120-180s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Extreme</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Summary Completion</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            This task requires you to distinguish between <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">major ideas</span> and <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">minor details</span>. You must select three sentences that best capture the overall theme of the passage.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">The High-Value Challenge</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              These are worth up to 2 points, making them the most important questions in the reading section. Success depends on understanding the passage's <span className="italic">hierarchy</span>—which details are the "pillars" holding up the argument, and which are just the "decorations" on the walls.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <LayoutGrid className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Scoring breakdown</h3>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm">3 Correct</span>
              </div>
              <span className="font-bold text-secondary">Full Credit (2 pts)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-sm">2 Correct</span>
              </div>
              <span className="font-bold text-secondary">Partial Credit (1 pt)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm">0-1 Correct</span>
              </div>
              <span className="font-bold text-red-100/50">No Credit (0 pts)</span>
            </div>
          </div>
          <p className="text-[10px] italic opacity-60">Strategic Tip: Don't pick an option just because it's 'true'. Many 'true' options are minor details designed to trap you.</p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Example</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-black/5">
              <button 
                onClick={prevExample}
                className="p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
              </button>
              <span className="text-[10px] font-bold font-mono w-8 text-center">
                {currentExampleIndex + 1} / {examples.length}
              </span>
              <button 
                onClick={nextExample}
                className="p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            {showFeedback && (
              <button 
                onClick={reset}
                className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
              >
                Reset Example <ChevronRight className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{example.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-base leading-relaxed text-on-surface relative">
              <p>{example.passage}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans font-bold text-primary">Summary Task</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-6">
              <div className="bg-white p-4 rounded-2xl border-l-4 border-secondary shadow-sm">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Introductory Sentence</p>
                <p className="font-sans font-bold text-primary leading-tight">{example.introSentence}</p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Select 3 sentences:</p>
                <div className="grid grid-cols-1 gap-3">
                  {shuffledOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => toggleOption(option.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 group ${
                        selectedOptions.includes(option.id)
                          ? showFeedback
                            ? option.isCorrect
                              ? 'bg-green-500 border-green-600 text-white shadow-lg shadow-green-200'
                              : 'bg-red-500 border-red-600 text-white shadow-lg shadow-red-200'
                            : 'bg-secondary/10 border-secondary ring-2 ring-secondary/20'
                          : showFeedback && option.isCorrect
                            ? 'bg-green-50 border-green-200 opacity-80'
                            : 'bg-white border-black/5 hover:border-secondary/30 hover:shadow-md'
                      }`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        selectedOptions.includes(option.id)
                          ? showFeedback
                            ? 'bg-white border-white text-primary'
                            : 'bg-secondary border-secondary text-white'
                          : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                      }`}>
                        {showFeedback && selectedOptions.includes(option.id) ? (option.isCorrect ? <CheckCircle2 className="h-3 w-3 text-green-600" /> : <XCircle className="h-3 w-3 text-red-600" />) : option.id}
                      </div>
                      <div className="space-y-1">
                        <span className={`text-sm font-medium leading-tight block ${selectedOptions.includes(option.id) && showFeedback ? 'text-white' : 'text-primary'}`}>
                          {option.text}
                        </span>
                        {showFeedback && (selectedOptions.includes(option.id) || option.isCorrect) && (
                          <p className={`text-[10px] italic leading-relaxed ${selectedOptions.includes(option.id) && showFeedback ? 'text-white/90' : 'text-green-700'}`}>
                            {option.explanation}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {!showFeedback ? (
                <button
                  disabled={selectedOptions.length !== 3}
                  onClick={checkAnswers}
                  className={`w-full py-4 rounded-2xl font-sans font-bold text-sm uppercase tracking-widest transition-all ${
                    selectedOptions.length === 3
                      ? 'bg-secondary text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-black/10 text-black/20 cursor-not-allowed'
                  }`}
                >
                  Check Summary ({selectedOptions.length}/3)
                </button>
              ) : (
                <div className={`p-6 rounded-2xl text-center space-y-2 ${correctCount === 3 ? 'bg-green-100 text-green-900' : correctCount === 2 ? 'bg-yellow-100 text-yellow-900' : 'bg-red-100 text-red-900'}`}>
                  <p className="font-sans font-bold text-lg">Result: {correctCount}/3 Correct</p>
                  <p className="text-sm font-serif italic">
                    {correctCount === 3 ? "Perfect! You identified all major ideas." : correctCount === 2 ? "Good job! You found most of the main ideas." : "Keep practicing! Focus on distinguishing main ideas from minor details."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Summary questions test your ability to see the "big picture". Use these strategies to filter out the noise:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify the Thesis", desc: "The correct options will directly support the main claim or thesis of the passage." },
                { title: "The 'So What?' Test", desc: "Ask yourself: 'Is this detail essential to the author's main argument, or is it just an interesting fact?'" },
                { title: "Check for Accuracy", desc: "Some options might sound plausible but contain slightly incorrect information or exaggerations." },
                { title: "Eliminate Minor Details", desc: "If a sentence only describes one specific example or a single sentence from the text, it's likely a minor detail." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Read the Intro Sentence", goal: "Establish the summary's scope" },
                  { step: "02", action: "Skim Topic Sentences", goal: "Recall the main points of each paragraph" },
                  { step: "03", action: "Evaluate Each Option", goal: "Label as 'Major', 'Minor', or 'Incorrect'" },
                  { step: "04", action: "Select Top 3 Major", goal: "Finalize the summary" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const CompleteTablePage = ({ onBack }: { onBack: () => void }) => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [assignments, setAssignments] = useState<{ [key: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const examples = [
    {
      subject: "History: Industrial Revolution vs. Information Age",
      passage: "The Industrial Revolution, beginning in the 18th century, was characterized by the transition from hand production methods to machines, new chemical manufacturing and iron production processes, and the rise of the factory system. It led to an unprecedented rise in the rate of population growth and urbanization. In contrast, the Information Age, starting in the mid-20th century, is defined by the shift from traditional industry to an economy based on information technology. This era has seen the rapid development of computers, the internet, and digital communication, leading to global connectivity and the automation of many cognitive tasks. While the Industrial Revolution focused on physical labor and mechanical power, the Information Age emphasizes intellectual capital and digital infrastructure.",
      categories: ["Industrial Revolution", "Information Age"],
      items: [
        { id: 1, text: "Transition to machine-based manufacturing", correctCategory: "Industrial Revolution" },
        { id: 2, text: "Rise of the factory system", correctCategory: "Industrial Revolution" },
        { id: 3, text: "Development of the internet", correctCategory: "Information Age" },
        { id: 4, text: "Emphasis on intellectual capital", correctCategory: "Information Age" },
        { id: 5, text: "Rapid urbanization", correctCategory: "Industrial Revolution" },
        { id: 6, text: "Global digital connectivity", correctCategory: "Information Age" }
      ]
    },
    {
      subject: "Biology: Prokaryotic vs. Eukaryotic Cells",
      passage: "All living organisms are composed of cells, which are broadly classified into two types: prokaryotic and eukaryotic. Prokaryotic cells, such as bacteria, are generally smaller and simpler. They lack a defined nucleus and membrane-bound organelles; their genetic material floats freely in the cytoplasm. In contrast, eukaryotic cells, which make up plants, animals, and fungi, are larger and more complex. They contain a distinct nucleus that houses the DNA, as well as specialized organelles like mitochondria and chloroplasts. While both cell types share a cell membrane and ribosomes, the structural organization of eukaryotic cells allows for greater specialization and multicellularity.",
      categories: ["Prokaryotic Cells", "Eukaryotic Cells"],
      items: [
        { id: 1, text: "Lack a defined nucleus", correctCategory: "Prokaryotic Cells" },
        { id: 2, text: "Contain membrane-bound organelles", correctCategory: "Eukaryotic Cells" },
        { id: 3, text: "Generally smaller and simpler structure", correctCategory: "Prokaryotic Cells" },
        { id: 4, text: "Genetic material housed in a distinct nucleus", correctCategory: "Eukaryotic Cells" },
        { id: 5, text: "Includes organisms like bacteria", correctCategory: "Prokaryotic Cells" },
        { id: 6, text: "Found in plants and animals", correctCategory: "Eukaryotic Cells" }
      ]
    },
    {
      subject: "Economics: Command vs. Market Economies",
      passage: "Economic systems are often categorized by how they allocate resources and determine production. In a command economy, the central government makes all major economic decisions, including what goods are produced, how much is produced, and the price of those goods. This system emphasizes collective goals and state control over resources. Conversely, a market economy relies on the interactions of buyers and sellers to allocate resources. Prices are determined by supply and demand, and private individuals or businesses own the means of production. While command economies aim for stability and equality, market economies prioritize efficiency, innovation, and individual choice.",
      categories: ["Command Economy", "Market Economy"],
      items: [
        { id: 1, text: "Central government makes major production decisions", correctCategory: "Command Economy" },
        { id: 2, text: "Prices determined by supply and demand", correctCategory: "Market Economy" },
        { id: 3, text: "Private ownership of the means of production", correctCategory: "Market Economy" },
        { id: 4, text: "Emphasizes collective goals and state control", correctCategory: "Command Economy" },
        { id: 5, text: "Prioritizes individual choice and innovation", correctCategory: "Market Economy" },
        { id: 6, text: "State determines the price of goods", correctCategory: "Command Economy" }
      ]
    }
  ];

  const example = examples[currentExampleIndex];
  const shuffledItems = useMemo(() => shuffleArray(example.items), [example]);

  const handleAssign = (itemId: number, category: string) => {
    if (showFeedback) return;
    setAssignments(prev => ({ ...prev, [itemId]: category }));
  };

  const checkAnswers = () => {
    setShowFeedback(true);
  };

  const reset = () => {
    setAssignments({});
    setShowFeedback(false);
  };

  const nextExample = () => {
    setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
    setAssignments({});
    setShowFeedback(false);
  };

  const prevExample = () => {
    setCurrentExampleIndex((prev) => (prev - 1 + examples.length) % examples.length);
    setAssignments({});
    setShowFeedback(false);
  };

  const correctCount = example.items.filter(item => assignments[item.id] === item.correctCategory).length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Module: Advanced / Complete the Table</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Layers className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Complete the Table</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Advanced Tier</span>
          <span className="text-base text-on-surface-variant font-medium italic">Categorical Classification</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Frequency</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Low (Alternative)</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Score Impact</p>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">3 Points Total</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">180-240s</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty</p>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Extreme</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">Complete the Table</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            This task tests your ability to <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">organize information</span> into categories. You must correctly assign characteristics or details to their respective groups.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Higher Order Thinking</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Table questions appear when a passage compares two or more distinct concepts. They test your ability to differentiate and contrast complex ideas—a fundamental skill for comparative academic study and critical analysis.
            </p>
          </div>
        </div>

        <div className="bg-[#002045] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Columns className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Advanced Scoring</h3>
          <p className="text-sm opacity-80 relative z-10 leading-relaxed">
            These questions are high-stakes and can be worth up to <span className="text-secondary font-bold">3 points</span>. Use your 3-point strategy: 
            <br /><br />
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Passage Structure</span>
            Look for comparisons! Words like "unlike," "similar to," "in contrast," and "whereas" are your biggest clues for how to fill the table.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-black/5"></div>
            <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Interactive Example</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-black/5">
              <button 
                onClick={prevExample}
                className="p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="h-3 w-3" />
              </button>
              <span className="text-[10px] font-bold font-mono w-8 text-center">
                {currentExampleIndex + 1} / {examples.length}
              </span>
              <button 
                onClick={nextExample}
                className="p-1 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            {showFeedback && (
              <button 
                onClick={reset}
                className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-secondary/5 px-4 py-2 rounded-full transition-colors border border-secondary/20"
              >
                Reset Example <ChevronRight className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-primary">Academic Passage</h3>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-1 rounded-md">{example.subject}</span>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 font-serif text-base leading-relaxed text-on-surface relative">
              <p>{example.passage}</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans font-bold text-primary">Classification Task</h3>
            <div className="bg-surface-container-high p-8 rounded-[2rem] border border-black/5 space-y-8">
              <div className="space-y-4">
                {shuffledItems.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-2xl border border-black/5 shadow-sm space-y-3">
                    <p className="text-sm font-medium text-primary">{item.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {example.categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleAssign(item.id, cat)}
                          className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                            assignments[item.id] === cat
                              ? showFeedback
                                ? item.correctCategory === cat
                                  ? 'bg-green-500 border-green-500 text-white'
                                  : 'bg-red-500 border-red-500 text-white'
                                : 'bg-secondary border-secondary text-white'
                              : 'bg-surface-container-low border-black/5 text-on-surface-variant hover:border-secondary/30'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {!showFeedback ? (
                <button
                  disabled={Object.keys(assignments).length !== example.items.length}
                  onClick={checkAnswers}
                  className={`w-full py-4 rounded-2xl font-sans font-bold text-sm uppercase tracking-widest transition-all ${
                    Object.keys(assignments).length === example.items.length
                      ? 'bg-secondary text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-black/10 text-black/20 cursor-not-allowed'
                  }`}
                >
                  Check Table ({Object.keys(assignments).length}/{example.items.length})
                </button>
              ) : (
                <div className={`p-6 rounded-2xl text-center space-y-2 ${correctCount === example.items.length ? 'bg-green-100 text-green-900' : 'bg-yellow-100 text-yellow-900'}`}>
                  <p className="font-sans font-bold text-lg">Result: {correctCount}/{example.items.length} Correct</p>
                  <p className="text-sm font-serif italic">
                    {correctCount === example.items.length ? "Excellent! You categorized everything correctly." : "Good effort! Review the passage to see where the distinctions lie."}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/5">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">How to Improve</h3>
          </div>
          <div className="space-y-4">
            <p className="font-serif text-on-surface-variant leading-relaxed">
              Table questions require you to organize details under their correct umbrella concepts:
            </p>
            <ul className="space-y-4">
              {[
                { title: "Identify Categories First", desc: "Understand the defining characteristics of each category before looking at the items." },
                { title: "Look for Contrast Markers", desc: "Words like 'however', 'in contrast', or 'unlike' often signal a shift between categories." },
                { title: "Verify with the Text", desc: "Don't rely on general knowledge; ensure the passage explicitly links the detail to the category." },
                { title: "Watch for Overlap", desc: "Some items might seem to fit both categories, but the passage will usually emphasize one primary association." }
              ].map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">{i + 1}</div>
                  <div>
                    <h4 className="font-sans font-bold text-primary text-sm">{tip.title}</h4>
                    <p className="font-serif text-xs text-on-surface-variant leading-relaxed">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <DraftingCompass className="h-6 w-6 text-secondary" />
            <h3 className="font-sans font-bold text-2xl text-primary">Improvement Plan</h3>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Step</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Action</th>
                  <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-black/5">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { step: "01", action: "Analyze Category Labels", goal: "Define the boundaries of each group" },
                  { step: "02", action: "Scan for Keywords", goal: "Find where each item is discussed" },
                  { step: "03", action: "Compare Item to Context", goal: "Confirm the categorical link" },
                  { step: "04", action: "Assign and Review", goal: "Complete the table structure" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 font-sans font-bold text-primary text-xs">{row.step}</td>
                    <td className="p-4 font-serif text-xs text-on-surface-variant">{row.action}</td>
                    <td className="p-4 font-sans font-bold text-secondary text-[10px] uppercase tracking-tighter">{row.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ProfilePage = ({ progress }: { progress: {[key: string]: number} }) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'achievements' | 'history'>('overview');

  // Calculate some dummy stats based on progress
  const totalEntries = Object.keys(progress).length;
  const avgScore = totalEntries > 0 
    ? Math.round(Object.values(progress).reduce((a, b) => a + b, 0) / totalEntries) 
    : 0;

  const skillData = [
    { subject: 'Reading', A: 85, B: 110, fullMark: 150 },
    { subject: 'Factual', A: 98, B: 130, fullMark: 150 },
    { subject: 'Inference', A: 86, B: 130, fullMark: 150 },
    { subject: 'Terminology', A: 99, B: 100, fullMark: 150 },
    { subject: 'Summary', A: 85, B: 90, fullMark: 150 },
    { subject: 'Integration', A: 65, B: 85, fullMark: 150 },
  ];

  const recentPerformance = [
    { day: 'Mon', score: 22 },
    { day: 'Tue', score: 25 },
    { day: 'Wed', score: 23 },
    { day: 'Thu', score: 28 },
    { day: 'Fri', score: 26 },
    { day: 'Sat', score: 29 },
    { day: 'Sun', score: avgScore || 27 },
  ];

  const achievements = [
    { id: 1, name: "Fast Scanner", description: "Completed 10 Factual Information questions under 60s each.", icon: Zap, unlocked: true, date: "2 days ago" },
    { id: 2, name: "Precision Master", description: "Achieved 100% accuracy in 5 consecutive Terminology modules.", icon: Target, unlocked: true, date: "5 days ago" },
    { id: 3, name: "Academic Giant", description: "Completed all Level 3 Academic Passages.", icon: Library, unlocked: false },
    { id: 4, name: "Consistency King", description: "Maintained a 7-day study streak.", icon: Flame, unlocked: true, date: "Today" },
    { id: 5, name: "Mockup Warrior", description: "Scored 28+ on a full mockup test.", icon: ShieldCheck, unlocked: false },
    { id: 6, name: "Early Bird", description: "Start a practice session before 8:00 AM.", icon: Clock, unlocked: true, date: "Yesterday" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-20 max-w-5xl mx-auto"
    >
      {/* Profile Header Card */}
      <section className="bg-white rounded-[3rem] p-8 border border-black/5 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
          <User className="w-64 h-64 rotate-12" />
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/toeflscholar/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-xl shadow-lg border-2 border-white">
              <Medal className="w-5 h-5" />
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <h1 className="text-4xl font-black text-primary tracking-tight">Academic Voyager</h1>
            <p className="font-serif text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
              <Globe className="w-4 h-4" /> Global Rank: #1,242
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
              <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Level 12</span>
              <div className="h-4 w-px bg-black/10"></div>
              <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Elite Tier</span>
              <div className="h-4 w-px bg-black/10"></div>
              <span className="flex items-center gap-1 text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                <Flame className="w-3 h-3 fill-current" /> 14 Day Streak
              </span>
            </div>
          </div>

          <div className="flex-grow"></div>

          <div className="flex gap-2">
            <button 
              onClick={() => alert('Settings coming soon in the next update!')}
              className="p-3 rounded-2xl bg-surface-container-low border border-black/5 hover:bg-white hover:shadow-md transition-all active:scale-95"
            >
              <Settings className="w-5 h-5 text-on-surface-variant" />
            </button>
            <button 
              onClick={() => alert('You have no new notifications.')}
              className="p-3 rounded-2xl bg-surface-container-low border border-black/5 hover:bg-white hover:shadow-md transition-all active:scale-95"
            >
              <Bell className="w-5 h-5 text-on-surface-variant" />
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-surface-container-low rounded-2xl w-fit border border-black/5">
        {[
          { id: 'overview', name: 'Overview', icon: LayoutGrid },
          { id: 'achievements', name: 'Achievements', icon: Trophy },
          { id: 'history', name: 'Study History', icon: History },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              activeSubTab === tab.id 
                ? 'bg-white text-primary shadow-sm border border-black/5' 
                : 'text-on-surface-variant/60 hover:text-primary hover:bg-white/50'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeSubTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Stats Dashboard */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Avg TOEFL Score", value: `${avgScore || 28}`, sub: "Reading Section", icon: Target, color: "text-secondary" },
                  { label: "Practice Time", value: "24.5h", sub: "This month", icon: Timer, color: "text-blue-500" },
                  { label: "Questions Solved", value: totalEntries || "842", sub: "Total attempt", icon: FileText, color: "text-green-500" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] border border-black/5 shadow-sm space-y-3">
                    <div className={`${stat.color} bg-[#f0f0f0] w-10 h-10 rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">{stat.label}</p>
                      <h4 className="text-2xl font-black text-primary leading-tight">{stat.value}</h4>
                      <p className="text-[10px] text-on-surface-variant/60 italic">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[3rem] border border-black/5 shadow-sm space-y-6">
                  <h3 className="font-sans font-bold text-primary flex items-center gap-2">
                    <Activity className="w-5 h-5 text-secondary" /> Skill Analysis
                  </h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                        <PolarGrid stroke="#f0f0f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fontWeight: 700 }} />
                        <Radar
                          name="You"
                          dataKey="A"
                          stroke="#002045"
                          fill="#002045"
                          fillOpacity={0.6}
                        />
                        <Radar
                          name="Target"
                          dataKey="B"
                          stroke="#db7c49"
                          fill="#db7c49"
                          fillOpacity={0.1}
                        />
                        <RechartsTooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[3rem] border border-black/5 shadow-sm space-y-6">
                  <h3 className="font-sans font-bold text-primary flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" /> Recent Performance
                  </h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={recentPerformance}>
                        <defs>
                          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#db7c49" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#db7c49" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <YAxis hide domain={[20, 30]} />
                        <RechartsTooltip />
                        <Area 
                          type="monotone" 
                          dataKey="score" 
                          stroke="#db7c49" 
                          strokeWidth={3}
                          fillOpacity={1} 
                          fill="url(#colorScore)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-center text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-40">Weekly Score Trend</p>
                </div>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="bg-[#002045] text-white p-8 rounded-[3.5rem] shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Star className="w-32 h-32" />
                </div>
                <h3 className="font-sans font-bold text-xl relative z-10">Scholar Progression</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest opacity-60">
                    <span>Rank: Apprentice</span>
                    <span>Next: Journeyman</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      className="h-full bg-secondary rounded-full"
                    />
                  </div>
                  <p className="text-[10px] opacity-60 font-serif italic">
                    Earn 1,240 more XP to reach the next rank and unlock specialized Mockup Tests.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-[2.5rem] p-8 border border-black/5 space-y-6">
                <h3 className="font-sans font-bold text-primary flex items-center justify-between">
                  Latest Accomplishment
                  <Sparkles className="w-4 h-4 text-secondary" />
                </h3>
                <div className="flex gap-4 p-4 bg-white rounded-2xl border border-black/5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-primary">Vocabulary Veteran</h4>
                    <p className="text-[10px] text-on-surface-variant/60 leading-tight">Mastered over 500 advanced academic words.</p>
                  </div>
                </div>
                <button className="w-full py-3 rounded-2xl bg-white border border-black/5 font-sans font-bold text-[10px] uppercase tracking-widest text-secondary hover:bg-secondary hover:text-white transition-all">
                  View All Achievements
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeSubTab === 'achievements' && (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((item) => (
              <div 
                key={item.id} 
                className={`bg-white p-8 rounded-[3rem] border border-black/5 shadow-sm space-y-4 relative group hover:shadow-xl transition-all ${!item.unlocked && 'opacity-60 saturate-0'}`}
              >
                {!item.unlocked && (
                  <div className="absolute top-4 right-4 p-2 bg-surface-container rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-on-surface-variant/40" />
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${item.unlocked ? 'bg-secondary text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-black text-primary text-lg">{item.name}</h4>
                  <p className="font-serif text-xs text-on-surface-variant leading-relaxed opacity-80">{item.description}</p>
                </div>
                {item.unlocked ? (
                  <div className="flex items-center gap-2 pt-2 text-[10px] font-bold text-secondary uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> Unlocked {item.date}
                  </div>
                ) : (
                  <div className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest pt-2">
                    In Progress: 4/10 tasks
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {activeSubTab === 'history' && (
          <motion.div
            key="history"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-[3rem] border border-black/5 shadow-sm overflow-hidden"
          >
            <table className="w-full text-left">
              <thead className="bg-surface-container-low border-b border-black/5">
                <tr>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Activity</th>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-secondary">Date</th>
                  <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-secondary text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { title: "Terminology Challenge - Level Advanced", date: "Today, 11:24 AM", score: "100%", status: "Perfect" },
                  { title: "Factual Information Module 1", date: "Yesterday, 4:15 PM", score: "85%", status: "Great" },
                  { title: "Academic Passage Practice - Easy", date: "Oct 24, 2026", score: "60%", status: "Needs Review" },
                  { title: "Daily Life Reading Module 2", date: "Oct 22, 2026", score: "90%", status: "Great" },
                  { title: "Inference Skill Stabilization", date: "Oct 20, 2026", score: "75%", status: "Improving" },
                  { title: "Mockup Simulation Test #4", date: "Oct 18, 2026", score: "28/30", status: "Elite" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-8 py-6">
                      <p className="font-sans font-bold text-primary text-sm group-hover:text-secondary transition-colors">{row.title}</p>
                      <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">{row.status}</span>
                    </td>
                    <td className="px-8 py-6 text-xs text-on-surface-variant font-serif">{row.date}</td>
                    <td className="px-8 py-6 text-right">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest ${
                        row.score === '100%' || row.score === '28/30' ? 'bg-green-100 text-green-700' : 'bg-secondary/10 text-secondary'
                      }`}>
                        {row.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="bg-surface-container-low p-8 rounded-[3rem] border border-black/5 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="w-16 h-16 rounded-2xl bg-[#db7c49]/10 text-secondary flex items-center justify-center shrink-0">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-sans font-bold text-lg text-primary">Academic Integrity & Privacy</h3>
          <p className="font-serif text-sm text-on-surface-variant leading-relaxed italic opacity-60">
            Your study sessions were authenticated using a 128-bit neural hash. All academic data is encrypted and used only for personalized progression mapping.
          </p>
        </div>
        <div className="flex-grow"></div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-red-50 text-red-600 font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </section>
    </motion.div>
  );
};
const TopBar = ({ 
  activeTab, 
  setActiveTab,
  onOpenSettings,
  progress = {}
}: { 
  activeTab: Tab, 
  setActiveTab: (t: Tab) => void,
  onOpenSettings: () => void,
  progress?: Record<string, number>
}) => {
  const { user, isGuest, openAuthModal } = useAuth();
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const metrics = computeStudentDomainMetrics(progress);

  const skillsTabs: Tab[] = [
    'readingSkills', 'listeningSkills', 'writingSkills', 'speakingSkills',
    'factualInformation', 'negativeFactual', 'terminologyInContext', 'rhetoricalPurpose',
    'inference', 'reference', 'sentenceSimplification', 'paragraphRelationships',
    'importantIdea', 'insertText', 'completeSummary', 'completeTable',
    'timeManagement', 'errorAnalysis', 'standardTier', 'completeWords', 'dailyLife',
    'academicPassage', 'buildASentence',
    'listenRespondModule', 'academicLectureModule', 'campusDiscussionModule',
    'listeningGist', 'listeningDetail', 'listeningFunction', 'listeningAttitude',
    'listeningOrganization', 'listeningConnecting', 'listeningInference',
    'listeningNoteTaking', 'listeningTimeManagement', 'listeningErrorAnalysis',
    'listeningAdaptiveTier'
  ];
  const isSkillsActive = skillsTabs.includes(activeTab);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSkillsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const skillOptions = [
    {
      id: 'readingSkills' as Tab,
      title: 'Reading Studio',
      desc: 'Passage ecology, 12 Core Taxonomy & Adaptive logic',
      tag: 'Reading',
      icon: <Library className="h-5 w-5 text-emerald-600" />,
      bg: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100/70 border-emerald-100',
      badgeBg: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'listeningSkills' as Tab,
      title: 'Listening Studio',
      desc: 'Collegiate dialogues & academic lecture listening',
      tag: 'Listening',
      icon: <Ear className="h-5 w-5 text-cyan-600" />,
      bg: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100/70 border-cyan-100',
      badgeBg: 'bg-cyan-100 text-cyan-800'
    },
    {
      id: 'speakingSkills' as Tab,
      title: 'Speaking Studio',
      desc: '2026 iBT Listen & Repeat + Take an Interview AI simulator',
      tag: 'Speaking',
      icon: <Volume2 className="h-5 w-5 text-indigo-600" />,
      bg: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100/70 border-indigo-100',
      badgeBg: 'bg-indigo-100 text-indigo-800'
    },
    {
      id: 'writingSkills' as Tab,
      title: 'Writing Studio',
      desc: 'Build a Sentence, Academic Discussion & Email writing',
      tag: 'Writing',
      icon: <PenTool className="h-5 w-5 text-amber-600" />,
      bg: 'bg-amber-50 text-amber-700 hover:bg-amber-100/70 border-amber-100',
      badgeBg: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-surface/95 px-4 sm:px-6 backdrop-blur-xl border-b border-black/5">
      <div 
        onClick={() => {
          setActiveTab('home');
          setIsSkillsOpen(false);
          setIsMobileMenuOpen(false);
        }}
        className="flex items-center gap-2.5 sm:gap-3 cursor-pointer active:scale-95 transition-transform"
      >
        <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-[#003875] text-white shadow-md shadow-primary/20">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-sans text-lg sm:text-xl font-black tracking-tight text-primary leading-none">Vanguard iBT</h1>
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-secondary hidden sm:inline-block">ETS • Cambridge • Oxford Standards</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1.5">
        <button 
          onClick={() => {
            setActiveTab('home');
            setIsSkillsOpen(false);
          }}
          className={`font-sans text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl cursor-pointer ${
            activeTab === 'home' 
              ? 'text-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary/20' 
              : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Home
        </button>

        {/* IBT Skills Dropdown Tab */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
            className={`flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl cursor-pointer ${
              isSkillsActive || isSkillsOpen
                ? 'text-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary/20' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
            }`}
          >
            <span>IBT Studios</span>
            <motion.div
              animate={{ rotate: isSkillsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </motion.div>
          </button>

          {/* Slide-Down Menu */}
          <AnimatePresence>
            {isSkillsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute top-full left-0 mt-3 w-88 sm:w-96 rounded-3xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl p-3 z-50 space-y-1.5"
              >
                <div className="px-3 py-2 border-b border-black/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
                    TOEFL iBT Skill Studios
                  </span>
                  <span className="text-[9px] font-bold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full uppercase">
                    4 Domains
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  {skillOptions.map((skill) => {
                    const isSelected = activeTab === skill.id;
                    return (
                      <button
                        key={skill.id}
                        onClick={() => {
                          setActiveTab(skill.id);
                          setIsSkillsOpen(false);
                        }}
                        className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 group cursor-pointer ${
                          isSelected 
                            ? 'bg-secondary/10 border-secondary/30 shadow-sm ring-1 ring-secondary/20' 
                            : 'bg-white hover:bg-slate-50 border-black/5 hover:border-black/15 shadow-none'
                        }`}
                      >
                        <div className={`p-2 rounded-2xl flex-shrink-0 transition-transform group-hover:scale-110 ${skill.bg}`}>
                          {skill.icon}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-sans font-bold text-sm text-primary group-hover:text-secondary transition-colors">
                              {skill.title}
                            </span>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${skill.badgeBg}`}>
                              {skill.tag}
                            </span>
                          </div>
                          <p className="font-serif text-xs text-on-surface-variant/75 mt-0.5 line-clamp-1">
                            {skill.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* English Grammar Tab */}
        <button 
          onClick={() => {
            setActiveTab('englishGrammar');
            setIsSkillsOpen(false);
          }}
          className={`font-sans text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl cursor-pointer ${
            activeTab === 'englishGrammar'
              ? 'text-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary/20' 
              : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Grammar
        </button>

        {/* Vocabulary Tab */}
        <button 
          onClick={() => {
            setActiveTab('vocabulary');
            setIsSkillsOpen(false);
          }}
          className={`font-sans text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl cursor-pointer ${
            activeTab === 'vocabulary'
              ? 'text-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary/20' 
              : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Vocabulary
        </button>

        <button 
          onClick={() => {
            setActiveTab('practice');
            setIsSkillsOpen(false);
          }}
          className={`font-sans text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl cursor-pointer ${
            activeTab === 'practice' || activeTab === 'practiceSession' || activeTab === 'mockupTest'
              ? 'text-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary/20' 
              : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Practice
        </button>

        <button 
          onClick={() => {
            setActiveTab('profile');
            setIsSkillsOpen(false);
          }}
          className={`font-sans text-xs uppercase tracking-wider font-bold transition-all px-3.5 py-2 rounded-xl cursor-pointer ${
            activeTab === 'profile' 
              ? 'text-secondary bg-secondary/10 shadow-sm ring-1 ring-secondary/20' 
              : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Passport
        </button>
      </nav>

      {/* Right side status badges & Settings / Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak Flame Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-bold font-mono">
          <Flame className="w-3.5 h-3.5 fill-current text-amber-500" />
          <span>{metrics.streakDays}d</span>
        </div>

        {/* Projected Band Pill */}
        <div 
          onClick={() => setActiveTab('profile')}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#002045] text-white text-xs font-bold cursor-pointer hover:bg-primary transition-all shadow-sm"
        >
          <span className="text-[10px] text-cyan-300 uppercase font-sans">Est:</span>
          <span className="font-mono">{metrics.projectedTotalScore}/120</span>
        </div>

        {/* Guest Mode Sign In CTA or Synced Status */}
        {isGuest ? (
          <button
            onClick={() => openAuthModal('signin')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-orange-500/10 hover:from-amber-500/25 hover:to-orange-500/20 border border-amber-500/30 text-amber-900 text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
            title="Sign in or create free account to save your scores & stars permanently"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Sign In</span>
          </button>
        ) : (
          <div 
            onClick={() => setActiveTab('profile')}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold font-mono cursor-pointer hover:bg-emerald-100 transition-colors"
            title={`Synced as ${user?.email}`}
          >
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Synced</span>
          </div>
        )}

        {/* Monthly Edition & Refresh Cycle Badge */}
        <div className="hidden sm:block">
          <MonthlyEditionBanner compact={true} />
        </div>

        {/* Settings Button */}
        <button
          onClick={onOpenSettings}
          title="Program Settings"
          className="p-2.5 rounded-xl bg-surface-container-low hover:bg-slate-100 text-on-surface-variant hover:text-primary border border-black/5 transition-all cursor-pointer"
        >
          <Settings className="h-4 w-4" />
        </button>

        {/* Profile Avatar Button */}
        <button
          onClick={() => setActiveTab('profile')}
          title={user ? `Profile (${user.displayName || user.email})` : "Student Passport (Guest)"}
          className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
            activeTab === 'profile'
              ? 'bg-secondary/15 border-secondary text-secondary ring-2 ring-secondary/30'
              : 'bg-surface-container-low hover:bg-slate-100 border-black/5 text-primary'
          }`}
        >
          {user?.photoURL ? (
            <img src={user.photoURL} alt="Avatar" className="w-7 h-7 rounded-lg object-cover" />
          ) : (
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#002045] to-secondary text-white flex items-center justify-center font-bold text-xs">
              {(user?.displayName || user?.email || metrics.overallBandLevel || 'S').substring(0, 1).toUpperCase()}
            </div>
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-primary hover:bg-black/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-xl px-6 py-4 md:hidden overflow-hidden z-50 space-y-3"
          >
            {/* Mobile Auth Banner */}
            <div className="pb-2 border-b border-black/5">
              {isGuest ? (
                <button
                  onClick={() => {
                    openAuthModal('signin');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-200/80 flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                    <span>Sign In / Create Account</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase bg-amber-600 text-white px-2 py-0.5 rounded-full">Sync</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#002045] text-white flex items-center justify-center font-bold text-xs">
                      {(user?.displayName || user?.email || 'U').substring(0, 1).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-emerald-950 truncate">{user?.displayName || 'Scholar'}</p>
                      <p className="text-[10px] text-emerald-700 truncate">{user?.email}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Synced</span>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setActiveTab('home');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm text-primary hover:bg-slate-50 flex items-center gap-3"
            >
              <Home className="h-5 w-5 text-secondary" /> Home
            </button>

            <div className="pt-2 border-t border-black/5 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50 px-3 block">
                IBT Skill Studios
              </span>
              {skillOptions.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => {
                    setActiveTab(skill.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 rounded-xl text-sm flex items-center justify-between ${
                    activeTab === skill.id ? 'bg-secondary/10 font-bold text-secondary' : 'text-primary hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <span>{skill.title}</span>
                  </div>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${skill.badgeBg}`}>
                    {skill.tag}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-black/5 space-y-1">
              <button
                onClick={() => {
                  setActiveTab('englishGrammar');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm text-primary hover:bg-slate-50 flex items-center gap-3"
              >
                <Sparkles className="h-5 w-5 text-secondary" /> English Grammar Studio
              </button>
              <button
                onClick={() => {
                  setActiveTab('vocabulary');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm text-primary hover:bg-slate-50 flex items-center gap-3"
              >
                <BookOpen className="h-5 w-5 text-secondary" /> Vocabulary Vault
              </button>
              <button
                onClick={() => {
                  setActiveTab('practice');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm text-primary hover:bg-slate-50 flex items-center gap-3"
              >
                <GraduationCap className="h-5 w-5 text-secondary" /> Practice Arena
              </button>
              <button
                onClick={() => {
                  setActiveTab('profile');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm text-primary hover:bg-slate-50 flex items-center gap-3"
              >
                <User className="h-5 w-5 text-secondary" /> Student Passport
              </button>
              <button
                onClick={() => {
                  onOpenSettings();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl font-bold text-sm text-primary hover:bg-slate-50 flex items-center gap-3"
              >
                <Settings className="h-5 w-5 text-secondary" /> Program Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const BottomNav = ({ 
  activeTab, 
  setActiveTab,
  onOpenSettings
}: { 
  activeTab: Tab, 
  setActiveTab: (t: Tab) => void,
  onOpenSettings?: () => void
}) => {
  const [showSkillsPopup, setShowSkillsPopup] = useState(false);

  const isSkillsActive = [
    'readingSkills', 'listeningSkills', 'writingSkills', 'speakingSkills',
    'factualInformation', 'negativeFactual', 'terminologyInContext', 'rhetoricalPurpose',
    'inference', 'reference', 'sentenceSimplification', 'paragraphRelationships',
    'importantIdea', 'insertText', 'completeSummary', 'completeTable',
    'timeManagement', 'errorAnalysis', 'standardTier', 'completeWords', 'dailyLife',
    'academicPassage', 'buildASentence',
    'listenRespondModule', 'academicLectureModule', 'campusDiscussionModule',
    'listeningGist', 'listeningDetail', 'listeningFunction', 'listeningAttitude',
    'listeningOrganization', 'listeningConnecting', 'listeningInference',
    'listeningNoteTaking', 'listeningTimeManagement', 'listeningErrorAnalysis',
    'listeningAdaptiveTier'
  ].includes(activeTab);

  return (
    <>
      <AnimatePresence>
        {showSkillsPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/10 shadow-2xl p-4 z-50 md:hidden space-y-2"
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Select IBT Studio</span>
              <button onClick={() => setShowSkillsPopup(false)} className="text-on-surface-variant/60 p-1">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setActiveTab('readingSkills');
                  setShowSkillsPopup(false);
                }}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                  activeTab === 'readingSkills' ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold' : 'bg-slate-50 border-black/5 text-primary'
                }`}
              >
                <Library className="h-5 w-5 text-emerald-600" />
                <span className="text-[10px] font-bold">Reading Studio</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('listeningSkills');
                  setShowSkillsPopup(false);
                }}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                  activeTab === 'listeningSkills' ? 'bg-cyan-50 border-cyan-300 text-cyan-800 font-bold' : 'bg-slate-50 border-black/5 text-primary'
                }`}
              >
                <Ear className="h-5 w-5 text-cyan-600" />
                <span className="text-[10px] font-bold">Listening Studio</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('speakingSkills');
                  setShowSkillsPopup(false);
                }}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                  activeTab === 'speakingSkills' ? 'bg-indigo-50 border-indigo-300 text-indigo-800 font-bold' : 'bg-slate-50 border-black/5 text-primary'
                }`}
              >
                <Volume2 className="h-5 w-5 text-indigo-600" />
                <span className="text-[10px] font-bold">Speaking Studio</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('writingSkills');
                  setShowSkillsPopup(false);
                }}
                className={`p-3 rounded-2xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                  activeTab === 'writingSkills' ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold' : 'bg-slate-50 border-black/5 text-primary'
                }`}
              >
                <PenTool className="h-5 w-5 text-amber-600" />
                <span className="text-[10px] font-bold">Writing Studio</span>
              </button>
            </div>

            <div className="pt-2 border-t border-black/5 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setActiveTab('englishGrammar');
                  setShowSkillsPopup(false);
                }}
                className={`p-2.5 rounded-2xl border text-center flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'englishGrammar' ? 'bg-blue-50 border-blue-300 text-blue-800 font-bold' : 'bg-slate-50 border-black/5 text-primary'
                }`}
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-[11px] font-bold">Grammar</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('vocabulary');
                  setShowSkillsPopup(false);
                }}
                className={`p-2.5 rounded-2xl border text-center flex items-center justify-center gap-2 transition-all ${
                  activeTab === 'vocabulary' ? 'bg-amber-50 border-amber-300 text-amber-800 font-bold' : 'bg-slate-50 border-black/5 text-primary'
                }`}
              >
                <BookOpen className="h-4 w-4 text-amber-600" />
                <span className="text-[11px] font-bold">Vocabulary</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around bg-white/90 px-4 py-3 backdrop-blur-xl border-t border-black/5 md:hidden">
        <button 
          onClick={() => {
            setActiveTab('home');
            setShowSkillsPopup(false);
          }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'home' ? 'text-primary font-bold' : 'text-on-surface-variant opacity-60'}`}
        >
          <div className={`rounded-xl px-4 py-1.5 transition-colors ${activeTab === 'home' ? 'bg-secondary/10 text-secondary' : ''}`}>
            <Home className="h-5 w-5" />
          </div>
          <span className="text-[10px] uppercase tracking-widest">Home</span>
        </button>

        <button 
          onClick={() => setShowSkillsPopup(!showSkillsPopup)}
          className={`flex flex-col items-center gap-1 transition-all ${isSkillsActive ? 'text-secondary font-bold' : 'text-on-surface-variant opacity-60'}`}
        >
          <div className={`rounded-xl px-4 py-1.5 transition-colors ${isSkillsActive ? 'bg-secondary/10 text-secondary' : ''}`}>
            <Library className="h-5 w-5" />
          </div>
          <span className="text-[10px] uppercase tracking-widest flex items-center gap-0.5">
            Studios <ChevronDown className="h-3 w-3" />
          </span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('practice');
            setShowSkillsPopup(false);
          }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'practice' || activeTab === 'practiceSession' || activeTab === 'mockupTest' ? 'text-primary font-bold' : 'text-on-surface-variant opacity-60'}`}
        >
          <div className={`rounded-xl px-4 py-1.5 transition-colors ${activeTab === 'practice' ? 'bg-secondary/10 text-secondary' : ''}`}>
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="text-[10px] uppercase tracking-widest">Practice</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('profile');
            setShowSkillsPopup(false);
          }}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'profile' ? 'text-primary font-bold' : 'text-on-surface-variant opacity-60'}`}
        >
          <div className={`rounded-xl px-4 py-1.5 transition-colors ${activeTab === 'profile' ? 'bg-secondary/10 text-secondary' : ''}`}>
            <User className="h-5 w-5" />
          </div>
          <span className="text-[10px] uppercase tracking-widest">Passport</span>
        </button>

        {onOpenSettings && (
          <button 
            onClick={() => {
              onOpenSettings();
              setShowSkillsPopup(false);
            }}
            className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60 hover:opacity-100 transition-all"
          >
            <div className="rounded-xl px-4 py-1.5">
              <Settings className="h-5 w-5" />
            </div>
            <span className="text-[10px] uppercase tracking-widest">Settings</span>
          </button>
        )}
      </nav>
    </>
  );
};

const Hero = ({ onStart }: { onStart: () => void }) => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse delay-700" />
    </div>
    
    <div className="text-center space-y-8 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-4"
      >
        <Sparkles className="h-4 w-4 text-secondary" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">The 2026 iBT Reading Standard</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-6xl md:text-8xl font-sans font-black text-primary tracking-tight leading-[0.9]"
      >
        MASTER THE <br />
        <span className="text-secondary">ADAPTIVE</span> PATH
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-serif text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
      >
        Experience the most sophisticated TOEFL iBT Reading simulation ever built. 
        Adaptive difficulty, precision analytics, and 120+ unique academic challenges.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-4"
      >
        <button 
          onClick={onStart}
          className="px-10 py-5 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3"
        >
          Start Diagnostic <ArrowRight className="h-5 w-5" />
        </button>
        <button 
          className="px-10 py-5 bg-white text-primary border border-black/10 rounded-2xl font-bold uppercase tracking-widest hover:bg-black/5 transition-all"
        >
          View Curriculum
        </button>
      </motion.div>
    </div>
  </section>
);

const TrackProgress = ({ progress }: { progress: {[key: string]: number} }) => {
  const totalCompleted = Object.keys(progress).length;
  const mockupCompleted = Object.keys(progress).filter(k => k.startsWith('mockup-')).length;
  const testCompleted = Object.keys(progress).filter(k => k.startsWith('test-')).length;
  
  const stats = [
    { label: 'Total Mastery', value: totalCompleted, icon: Trophy, color: 'text-secondary', bg: 'bg-secondary/10' },
    { label: 'Mockup Tests', value: `${mockupCompleted}/80`, icon: Target, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Skill Drills', value: `${testCompleted}/80`, icon: Activity, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Avg. Score', value: '92%', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-sm hover:shadow-md transition-all group"
          >
            <div className={`h-12 w-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">{stat.label}</p>
            <p className="text-3xl font-sans font-black text-primary tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ScholarDashboard = () => (
  <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
    <div className="lg:col-span-2 bg-[#002045] text-white p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <GraduationCap className="h-64 w-64" />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
          <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Active Session</span>
        </div>
        <h2 className="text-5xl font-sans font-black tracking-tight leading-none">
          YOUR JOURNEY <br /> TO 30/30
        </h2>
        <p className="text-white/60 font-serif text-lg max-w-md leading-relaxed">
          The 2026 iBT Reading section is shorter, denser, and more academic. 
          Our curriculum is built on the exact specifications of the new format.
        </p>
        <div className="flex items-center gap-8 pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Current Level</p>
            <p className="text-2xl font-sans font-bold">Advanced Scholar</p>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Next Milestone</p>
            <p className="text-2xl font-sans font-bold">Mastery Tier</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white p-12 rounded-[3rem] border border-black/5 shadow-sm flex flex-col justify-between">
      <div className="space-y-4">
        <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center">
          <Award className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-sans font-bold text-primary tracking-tight">Daily Streak</h3>
        <p className="text-on-surface-variant font-serif">You've practiced 5 days in a row. Keep the momentum!</p>
      </div>
      <div className="pt-8">
        <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            className="h-full bg-secondary"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">70% to next badge</span>
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">12/20 Drills</span>
        </div>
      </div>
    </div>
  </section>
);

const ProgressionArchitecture = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
    {/* Left Side: Steps */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-black/5"
    >
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary"></div>
      <h3 className="flex items-center gap-3 font-sans text-2xl font-bold tracking-tight text-primary mb-8">
        <div className="p-2 bg-secondary/10 rounded-lg">
          <GitBranch className="h-6 w-6 text-secondary" />
        </div>
        Test Progression Architecture
      </h3>
      <div className="space-y-6">
        {[
          { id: '01', title: 'Complete the Words', desc: 'Everyone starts here (fixed difficulty baseline)', bg: 'bg-[#f0f9f9]', accent: 'text-secondary', icon: BookOpen },
          { id: '02', title: 'Read in Daily Life', desc: 'Difficulty adjusts based on Stage 1 performance', bg: 'bg-[#f0f4f8]', accent: 'text-[#455f88]', icon: Eye },
          { id: '03', title: 'Read an Academic Passage', desc: 'Difficulty adjusts again based on Stage 2 metrics', bg: 'bg-[#fffaf0]', accent: 'text-[#d4903b]', icon: GraduationCap },
        ].map((step) => (
          <div key={step.id} className={`group flex items-center gap-6 p-6 rounded-2xl border border-black/5 transition-all hover:shadow-md hover:scale-[1.02] ${step.bg}`}>
            <div className="flex flex-col items-center">
              <span className={`font-label text-xs font-black mb-1 ${step.accent}`}>{step.id}</span>
              <div className={`w-1 h-8 bg-current opacity-10 rounded-full ${step.accent}`}></div>
            </div>
            <div className="flex-grow">
              <p className="font-sans font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{step.title}</p>
              <p className="font-serif text-sm text-on-surface-variant opacity-80">{step.desc}</p>
            </div>
            <step.icon className={`w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity ${step.accent}`} />
          </div>
        ))}
      </div>
    </motion.div>

    {/* Right Side: Logic Engine */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-5 flex flex-col justify-between rounded-[2.5rem] bg-primary p-10 text-white shadow-2xl relative overflow-hidden"
    >
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <h3 className="flex items-center gap-3 font-sans text-2xl font-bold tracking-tight text-primary-fixed mb-10">
          <div className="p-2 bg-white/10 rounded-lg">
            <Terminal className="h-6 w-6 text-tertiary-fixed-dim" />
          </div>
          The Logic Engine
        </h3>
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Performance Metric</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Adaptive Path</span>
          </div>
          {[
            { metric: '80–100% Correct', path: 'Harder Questions', bg: 'bg-secondary', glow: 'shadow-[0_0_20px_rgba(0,106,106,0.4)]' },
            { metric: '40–70% Correct', path: 'Constant Difficulty', bg: 'bg-white/10', glow: '' },
            { metric: '0–30% Correct', path: 'Easier Questions', bg: 'bg-tertiary-fixed text-primary', glow: 'shadow-[0_0_20px_rgba(255,221,186,0.2)]' },
          ].map((row) => (
            <div key={row.metric} className="flex justify-between items-center group cursor-default">
              <span className="font-sans font-bold text-lg group-hover:text-secondary-container transition-colors">{row.metric}</span>
              <span className={`rounded-xl px-5 py-2 text-xs font-black transition-all group-hover:scale-110 ${row.bg} ${row.glow}`}>
                {row.path}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 flex items-start gap-4 relative z-10">
        <div className="p-2 bg-secondary/20 rounded-full">
          <Info className="h-5 w-5 text-[#76d6d5]" />
        </div>
        <p className="text-[11px] font-medium uppercase tracking-widest opacity-60 leading-relaxed">
          System recalibrates instantly upon stage completion to ensure maximum precision.
        </p>
      </div>
    </motion.div>
  </div>
);

const BentoGrid = () => (
  <section className="mb-16">
    <h3 className="font-sans text-xl font-bold tracking-tight text-primary mb-8 border-b border-surface-container-highest pb-4">
      Testing Interface & Environment
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { icon: Eye, title: 'Neutral Interface', desc: "No 'easy' or 'hard' labels – tasks look identical to maintain psychological parity.", color: 'text-secondary', bg: 'bg-[#f0f9f9]' },
        { icon: Layers, title: 'Variable Volume', desc: 'Item count varies between 35–48 total items depending on your performance path.', color: 'text-[#2d476f]', bg: 'bg-[#f0f4f8]' },
        { icon: Timer, title: 'Adaptive Pacing', desc: 'Testing window adapts (18–27 minutes) based on total allocated item count.', color: 'text-[#d4903b]', bg: 'bg-[#fffaf0]' },
      ].map((item, i) => (
        <motion.div 
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex h-52 flex-col justify-between rounded-2xl border border-surface-container-high bg-white p-7 shadow-sm transition-all hover:border-secondary/30"
        >
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}>
            <item.icon className={`h-6 w-6 ${item.color}`} />
          </div>
          <div>
            <h4 className="font-sans font-bold text-on-surface mb-2">{item.title}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const StrategyTable = () => (
  <section className="mb-16 rounded-3xl border border-surface-container-highest bg-white overflow-hidden shadow-sm">
    <div className="flex items-center gap-5 bg-[#fafcfd] p-8 border-b border-surface-container-highest">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tertiary-fixed text-primary shadow-inner">
        <Lightbulb className="h-8 w-8" />
      </div>
      <div>
        <h3 className="font-sans text-2xl font-extrabold tracking-tight text-primary">80/20 Scholar's Strategy</h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Optimizing the Adaptive Algorithm</p>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-surface-container-low/50">
            <th className="p-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#455f88] border-b border-surface-container-highest">Strategic Tip</th>
            <th className="p-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#455f88] border-b border-surface-container-highest">Algorithmic Rationale</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-container-highest">
          {[
            { tip: 'Answer every question', sub: 'Never leave a blank field.', rationale: 'No penalty for incorrect answers; skipping severely penalizes the calibration algorithm.' },
            { tip: 'Harder Stage 2 = Positive Sign', sub: "Don't be intimidated by complexity.", rationale: 'Increased difficulty confirms the system has recognized your high baseline performance.' },
            { tip: 'Easier Stage 3 = Recovery', sub: 'Stay focused if difficulty drops.', rationale: 'A drop allows you to stabilize and climb back toward your true proficiency score.' },
          ].map((row) => (
            <tr key={row.tip} className="transition-colors hover:bg-[#f8fbff]">
              <td className="p-6 align-top">
                <p className="font-sans font-bold text-primary mb-1">{row.tip}</p>
                <p className="text-[11px] font-medium text-on-surface-variant">{row.sub}</p>
              </td>
              <td className="p-6 align-top">
                <p className="font-serif italic text-on-surface leading-relaxed">{row.rationale}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const BottomLine = () => (
  <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#002045] via-[#1a365d] to-[#004f4f] p-12 text-center text-white shadow-2xl">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
    <div className="relative z-10">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
        <DraftingCompass className="h-10 w-10 text-[#76d6d5]" />
      </div>
      <h3 className="font-sans text-3xl font-bold tracking-tight mb-6">The Bottom Line</h3>
      <p className="mx-auto max-w-2xl font-serif text-xl italic leading-relaxed text-[#d6e3ff] opacity-90">
        The 2026 Adaptive model moves away from static testing. By leveraging your Stage 1 performance to tailor the subsequent journey, the test becomes a shorter, more sophisticated reflection of your academic capability.
      </p>
    </div>
  </section>
);

// --- Main App ---

const TimeManagementPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Skills
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Strategy Mastery / Time Management</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Timer className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-5xl font-extrabold text-primary tracking-tight">Time Management</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Strategy Master</span>
          <span className="text-base text-on-surface-variant font-medium italic">Efficiency & Pacing</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Exam Priority</p>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Critical</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Pacing Goal</p>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">18m / Passage</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Efficiency Gain</p>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">+15% Speed</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
          <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Difficulty Tier</p>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="font-sans font-black text-primary text-lg">Foundation</span>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-sans font-bold text-primary">The 18-Minute Rule</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
            In the TOEFL Reading section, you typically have 36 minutes for two passages. This means you have exactly <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">18 minutes per passage</span>. Managing this time effectively is the difference between a 20 and a 30.
          </p>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <Zap className="h-5 w-5" />
              <h3 className="font-sans font-bold uppercase text-xs tracking-widest">Pro Tip: The 5-13 Split</h3>
            </div>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Spend no more than <span className="font-bold text-primary">5 minutes</span> on your first reading of the passage. Use the remaining <span className="font-bold text-primary">13 minutes</span> to answer the 10 questions. This averages to about 75 seconds per question.
            </p>
          </div>
        </div>

        <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp className="h-32 w-32" />
          </div>
          <h3 className="font-sans font-bold text-xl relative z-10">Training Your Internal Clock</h3>
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
              <p className="text-sm opacity-90 font-serif italic">"Don't read for deep understanding on the first pass. Read for structure."</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
              <p className="text-sm opacity-90 font-serif italic">"If a question takes more than 90 seconds, guess, mark it, and move on."</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></div>
              <p className="text-sm opacity-90 font-serif italic">"The 'Complete the Summary' question at the end is worth 2 points—save 2-3 minutes for it."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-black/5"></div>
          <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Detailed Strategies & Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Skimming for Structure",
              icon: Eye,
              content: "Instead of reading every word, look for topic sentences and transition words (However, Therefore, In contrast). This builds a 'mental map' of the passage in under 3 minutes.",
              example: "Example: Read the first and last sentence of each paragraph. You'll know WHERE the author discusses 'Volcanic Impact' without reading the whole section yet."
            },
            {
              title: "The 'Sprints' Method",
              icon: Zap,
              content: "Train by doing single passages with a strict 15-minute timer (3 minutes faster than the real test). This builds the mental speed needed to handle pressure on test day.",
              example: "Example: Set a timer for 15:00. Do not stop until you finish 10 questions. Review your errors only AFTER the timer hits zero."
            },
            {
              title: "Active Keyword Scanning",
              icon: Target,
              content: "When a question asks about a specific term, don't re-read the paragraph. Scan for the CAPITALIZED words, dates, or unique technical terms mentioned in the question.",
              example: "Example: Question asks about 'Mesozoic Era'. Your eyes should 'jump' across the lines looking for the capital 'M' and 'E' only."
            }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-black/5 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 rounded-2xl bg-secondary/10 text-secondary w-fit">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-sans font-bold text-primary text-xl leading-tight">{card.title}</h3>
              <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
                {card.content}
              </p>
              <div className="pt-4 border-t border-black/5">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">Practical Example</p>
                <p className="text-xs font-serif italic text-on-surface-variant/80 leading-relaxed">
                  {card.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-high p-10 rounded-[3rem] border border-black/5 space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-primary text-white">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h2 className="font-sans font-bold text-3xl text-primary">The Study Blueprint</h2>
            <p className="text-on-surface-variant font-serif italic">How to train your brain for the 36-minute marathon</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-primary uppercase tracking-widest text-xs">Phase 1: Untimed Accuracy</h4>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Before you go fast, you must go right. Spend 30 minutes per passage. Focus on <span className="font-bold">why</span> every wrong answer is wrong. If you can't get 10/10 untimed, you won't get 10/10 timed.
            </p>
            <div className="bg-white p-4 rounded-2xl border border-black/5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-xs font-serif italic">"Master the logic of the test makers first."</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans font-bold text-primary uppercase tracking-widest text-xs">Phase 2: The 20-Minute Threshold</h4>
            <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
              Once accuracy is high, set a 20-minute timer. This is your 'Comfort Zone'. Learn to recognize the feeling of spending too long on a single sentence.
            </p>
            <div className="bg-white p-4 rounded-2xl border border-black/5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                <Timer className="h-5 w-5" />
              </div>
              <p className="text-xs font-serif italic">"Learn to let go of difficult questions."</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const CompleteTheWordsExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  onBack,
  onComplete
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  onBack: () => void,
  onComplete: (score: number) => void
}) => {
  const isM2 = module === 2 || module === '2' || module === 'M2' || module === 'm2';
  const activeEdition = monthlyPracticeEngine.getActiveEdition();
  const cycleSeed = activeEdition.cycleSeed;
  const isEasySequential = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Easy' && exerciseNumber >= 1 && exerciseNumber <= 20;
  const isNormalSequential = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Normal' && exerciseNumber >= 1 && exerciseNumber <= 20;
  const isHardSequential = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Hard' && exerciseNumber >= 1 && exerciseNumber <= 20;
  const isAdvancedSequential = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Advanced' && exerciseNumber >= 1 && exerciseNumber <= 20;
  const isSequential = isEasySequential || isNormalSequential || isHardSequential || isAdvancedSequential;
  const isEasyExercise1 = isSequential;
  const [currentStep, setCurrentStep] = useState(0);
  const [stepScores, setStepScores] = useState<{correct: number, total: number}[]>([]);

  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [focusedId, setFocusedId] = useState<number | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [revealedIds, setRevealedIds] = useState<{[key: number]: boolean}>({});

  const revealAnswer = (id: number | null) => {
    if (id === null) return;
    const part = exerciseParts.find(p => p.type === 'input' && p.id === id);
    if (part) {
      setAnswers(prev => ({ ...prev, [id]: part.missing as string }));
      setRevealedIds(prev => ({ ...prev, [id]: true }));
    }
  };

  const getExerciseContent = (lvl: string, num: number, mod: number | string) => {
    const cycleSeed = monthlyPracticeEngine.getActiveEdition().cycleSeed;
    const template = getCycleCompleteWordsTemplate(lvl, mod, num, 0, cycleSeed);
    return parseEasyTemplate(template);
  };

  const exerciseParts = useMemo(() => {
    const cycleEdition = monthlyPracticeEngine.getActiveEdition();
    const cycleSeed = cycleEdition.cycleSeed;
    
    if (isSequential) {
      const template = getCycleCompleteWordsTemplate(level, module, exerciseNumber, currentStep, cycleSeed);
      return parseEasyTemplate(template);
    }
    return getExerciseContent(level, exerciseNumber, module);
  }, [level, exerciseNumber, module, currentStep, isSequential, cycleSeed]);

  const { triggerReaction } = useContext(MascotContext);

  const handleCheck = () => {
    setShowFeedback(true);
    const total = exerciseParts.filter(p => p.type === 'input').length;
    const currentScore = exerciseParts
      .filter(p => p.type === 'input')
      .filter(p => (answers[p.id as number] || '').toLowerCase() === (p.missing as string).toLowerCase()).length;
    
    const percentage = (currentScore / total) * 100;

    if (isEasyExercise1) {
      const nextScores = [...stepScores];
      nextScores[currentStep] = { correct: currentScore, total: total };
      setStepScores(nextScores);

      if (currentStep === 9) {
        const totalCorrect = nextScores.reduce((acc, s) => acc + (s?.correct || 0), 0);
        const totalBlanks = nextScores.reduce((acc, s) => acc + (s?.total || 0), 0);
        const finalPercentage = totalBlanks > 0 ? (totalCorrect / totalBlanks) * 100 : 0;
        onComplete(finalPercentage);
        setIsCompleted(true);
        if (totalCorrect === totalBlanks) {
          triggerReaction('correct');
        } else if (totalCorrect < totalBlanks / 2) {
          triggerReaction('incorrect');
        }
      } else {
        if (currentScore === total) {
          triggerReaction('correct');
        } else if (currentScore < total / 2) {
          triggerReaction('incorrect');
        }
      }
    } else {
      onComplete(percentage);
      if (currentScore === total) {
        setIsCompleted(true);
        triggerReaction('correct');
      } else if (currentScore < total / 2) {
        triggerReaction('incorrect');
      }
    }
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
    setAnswers({});
    setShowFeedback(false);
    setRevealedIds({});
    setFocusedId(null);
  };

  const handleReset = () => {
    setAnswers({});
    setShowFeedback(false);
    setRevealedIds({});
    if (isEasyExercise1) {
      if (isCompleted) {
        setCurrentStep(0);
        setStepScores([]);
        setIsCompleted(false);
      }
    } else {
      setIsCompleted(false);
    }
  };

  const score = exerciseParts
    .filter(p => p.type === 'input')
    .filter(p => (answers[p.id as number] || '').toLowerCase() === (p.missing as string).toLowerCase()).length;

  const total = exerciseParts.filter(p => p.type === 'input').length;
  const percentage = (score / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setShowHints(!showHints)} 
             className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all border ${
               showHints 
                 ? 'bg-secondary text-white border-secondary shadow-md' 
                 : 'bg-white text-secondary border-secondary/20 hover:border-secondary/40'
             }`}
           >
             <HelpCircle className="h-4 w-4" />
             {showHints ? 'Hints On' : 'Hints Off'}
           </button>
           {showFeedback && (
             <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                 <Trophy className="h-4 w-4" />
                 {score} / {total} Correct
               </div>
               <StarRating percentage={percentage} />
             </div>
           )}
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-black/5 space-y-8">
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
            Module {module} • {skill} • {level} • Exercise {exerciseNumber}
            {isEasyExercise1 && ` • Practice Test ${currentStep + 1} of 10`}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-primary tracking-tight">Complete the Words</h2>
            <p className="text-on-surface-variant font-serif italic text-sm">
              {isEasyExercise1 
                ? "Complete all 10 practice tests sequentially to master basic word recognition." 
                : "Fill in the missing letters to complete the academic passage."
              }
            </p>
          </div>

          {isEasyExercise1 && (
            <div className="max-w-md mx-auto space-y-2 pt-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
                <span>Passage Progress</span>
                <span>Test {currentStep + 1} of 10</span>
              </div>
              <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / 10) * 100}%` }}
                />
              </div>
              <div className="flex gap-1 justify-center mt-2 flex-wrap">
                {Array.from({ length: 10 }).map((_, stepIdx) => {
                  const isPast = stepIdx < currentStep;
                  const isCurrent = stepIdx === currentStep;
                  return (
                    <div 
                      key={stepIdx} 
                      className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                        isCurrent 
                          ? 'bg-secondary' 
                          : isPast 
                            ? 'bg-green-500' 
                            : 'bg-black/5'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Hint bubble removed from header to avoid obstructing input fields. It is now only shown in the Floating Hint Bar at the bottom. */}
          </AnimatePresence>
        </header>

        <div className="text-lg leading-relaxed font-serif text-on-surface-variant bg-surface p-8 rounded-2xl border border-black/5 relative">
          {exerciseParts.map((part, i) => {
            if (part.type === 'text') {
              return <span key={i}>{part.content}</span>;
            } else {
              const isCorrect = (answers[part.id as number] || '').toLowerCase() === (part.missing as string).toLowerCase();
              return (
                <span key={i} className="inline-flex items-center mx-0.5 group relative">
                  <span className="font-bold text-primary">{part.prefix}</span>
                  <input
                    type="text"
                    value={answers[part.id as number] || ''}
                    onChange={(e) => setAnswers({ ...answers, [part.id as number]: e.target.value })}
                    onFocus={() => setFocusedId(part.id as number)}
                    onBlur={() => setFocusedId(null)}
                    readOnly={showFeedback && isCorrect}
                    className={`
                      px-1.5 py-0.5 border-b-2 outline-none transition-all text-center font-mono font-bold text-base
                      ${showFeedback 
                        ? isCorrect 
                          ? 'border-emerald-600 text-emerald-900 bg-emerald-100/90 shadow-xs' 
                          : 'border-rose-600 text-rose-900 bg-rose-100/90 shadow-xs'
                        : focusedId === part.id
                          ? 'border-secondary text-secondary bg-secondary/10 shadow-xs'
                          : 'border-slate-400 hover:border-slate-600 text-primary bg-white/70'
                      }
                    `}
                    style={{ width: `${Math.max((part.missing as string).length * 13 + 12, 32)}px` }}
                    maxLength={(part.missing as string).length}
                  />
                </span>
              );
            }
          })}
        </div>

        {/* Floating Hint & Reveal Bar - Fixed at bottom of exercise area to avoid blocking */}
        <AnimatePresence>
          {focusedId !== null && (() => {
            const currentPart = exerciseParts.find(p => p.type === 'input' && p.id === focusedId);
            const isCurrentWordCorrect = currentPart && (answers[focusedId] || '').toLowerCase() === (currentPart.missing as string).toLowerCase();
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-4 rounded-2xl bg-secondary/5 border border-secondary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left shadow-sm mt-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary shrink-0">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">
                      {showHints ? 'Hint for current word' : 'Active Word Helper'}
                    </span>
                    <p className="text-sm font-serif text-on-surface-variant leading-snug">
                      {showHints 
                        ? (currentPart?.hint || "No hint available.")
                        : "Type your answer. If you get stuck, click 'Reveal Word' to fill in the correct letters!"
                      }
                    </p>
                  </div>
                </div>
                
                {/* Reveal button displayed when active, word not correct, and feedback not shown */}
                {!isCurrentWordCorrect && !showFeedback && (
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault(); // prevent input blur
                      revealAnswer(focusedId);
                    }}
                    className="px-4 py-2 bg-secondary text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 self-start sm:self-center shrink-0"
                  >
                    <Eye className="h-3.5 w-3.5" /> Reveal Word
                  </button>
                )}
              </motion.div>
            );
          })()}
        </AnimatePresence>

        <div className="pt-8 flex justify-center">
          {!isCompleted ? (
            !showFeedback ? (
              <button
                onClick={handleCheck}
                className="px-8 py-3 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Check Answers
              </button>
            ) : (
              isEasyExercise1 && currentStep < 9 && (
                <button
                  onClick={handleNextStep}
                  className="px-8 py-3 rounded-full bg-secondary text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  Next Practice Test <ChevronRight className="h-4 w-4" />
                </button>
              )
            )
          ) : (
            <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
              <div className="flex items-center gap-2 text-emerald-600 font-bold font-sans text-xl">
                <CheckCircle2 className="h-6 w-6" />
                <span>Exercise Completed!</span>
              </div>

              {(() => {
                const totalCorrect = isEasyExercise1 
                  ? stepScores.reduce((sum, s) => sum + (s?.correct || 0), 0)
                  : score;
                const totalPossible = isEasyExercise1
                  ? stepScores.reduce((sum, s) => sum + (s?.total || 0), 0)
                  : total;
                const finalPercent = totalPossible > 0 ? Math.round((totalCorrect / totalPossible) * 100) : 100;
                const band = getIBT6BandScore(finalPercent);

                return (
                  <div className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-6 rounded-3xl border border-slate-200/80 shadow-inner space-y-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                        2026 iBT Band Score (1.0 – 6.0 Scale)
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl sm:text-6xl font-sans font-black text-primary">{band.scoreFormatted}</span>
                      <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 6.0 Band</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                      <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-wider border shadow-2xs ${band.badgeColor}`}>
                        {band.cefr} • {band.label}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs">
                        {band.etsRange} Scaled Equiv
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {totalCorrect} / {totalPossible} Words ({finalPercent}%)
                      </span>
                    </div>
                    <div className="pt-2">
                      <StarRating percentage={finalPercent} size="md" showBadge={false} />
                    </div>
                  </div>
                );
              })()}

              <button
                onClick={onBack}
                className="px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Return to Exercises
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export function getIBT6BandScore(percentage: number) {
  if (percentage <= 0) {
    return {
      score: 0,
      scoreFormatted: '0.0',
      maxScore: 6.0,
      cefr: 'Unattempted',
      label: 'Not Started',
      etsRange: '0 / 30',
      badgeColor: 'bg-slate-100 text-slate-600 border-slate-200'
    };
  }

  // 2026 iBT 6-point scale band translation:
  let band = 1.0;
  let cefr = 'A1';
  let label = 'Novice (Foundational)';
  let etsRange = '0–2 / 30';
  let badgeColor = 'bg-rose-100 text-rose-800 border-rose-200';

  if (percentage >= 95) {
    band = 6.0;
    cefr = 'C2 Expert';
    label = 'Elite Mastery';
    etsRange = '29–30 / 30';
    badgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
  } else if (percentage >= 88) {
    band = 5.5;
    cefr = 'C1+ Advanced High';
    label = 'Advanced High';
    etsRange = '27–28 / 30';
    badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  } else if (percentage >= 80) {
    band = 5.0;
    cefr = 'C1 Advanced';
    label = 'Advanced Proficiency';
    etsRange = '24–26 / 30';
    badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
  } else if (percentage >= 72) {
    band = 4.5;
    cefr = 'B2+ Upper Int';
    label = 'High Intermediate';
    etsRange = '21–23 / 30';
    badgeColor = 'bg-cyan-100 text-cyan-900 border-cyan-300';
  } else if (percentage >= 64) {
    band = 4.0;
    cefr = 'B2 Intermediate';
    label = 'Intermediate Fluency';
    etsRange = '18–20 / 30';
    badgeColor = 'bg-sky-100 text-sky-900 border-sky-300';
  } else if (percentage >= 55) {
    band = 3.5;
    cefr = 'B1+ Modest';
    label = 'Developing Fluency';
    etsRange = '15–17 / 30';
    badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
  } else if (percentage >= 45) {
    band = 3.0;
    cefr = 'B1 Threshold';
    label = 'Foundational Intermediate';
    etsRange = '12–14 / 30';
    badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
  } else if (percentage >= 35) {
    band = 2.5;
    cefr = 'A2+ Waystage';
    label = 'Low Intermediate';
    etsRange = '9–11 / 30';
    badgeColor = 'bg-orange-100 text-orange-900 border-orange-300';
  } else if (percentage >= 25) {
    band = 2.0;
    cefr = 'A2 Elementary';
    label = 'Elementary Band';
    etsRange = '6–8 / 30';
    badgeColor = 'bg-orange-50 text-orange-800 border-orange-200';
  } else if (percentage >= 15) {
    band = 1.5;
    cefr = 'A1 Beginner';
    label = 'Beginner Band';
    etsRange = '3–5 / 30';
    badgeColor = 'bg-rose-50 text-rose-800 border-rose-200';
  }

  return {
    score: band,
    scoreFormatted: band.toFixed(1),
    maxScore: 6.0,
    cefr,
    label,
    etsRange,
    badgeColor
  };
}

export const StarRating = ({ 
  percentage, 
  showBadge = true, 
  size = 'sm' 
}: { 
  percentage: number; 
  showBadge?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) => {
  const stars = 6;
  const band = getIBT6BandScore(percentage);
  const filledStars = (percentage / 100) * stars;
  
  const iconSize = size === 'lg' ? 'h-4 w-4' : size === 'md' ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5';
  
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-0.5" title={`2026 iBT Band: ${band.scoreFormatted} / 6.0 (${Math.round(percentage)}%)`}>
        {Array.from({ length: stars }).map((_, i) => {
          const fill = Math.max(0, Math.min(1, filledStars - i));
          return (
            <div key={i} className={`relative ${iconSize} text-black/10`}>
              <Star className={`${iconSize} fill-current`} />
              <div 
                className="absolute inset-0 overflow-hidden text-amber-400"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className={`${iconSize} fill-current`} />
              </div>
            </div>
          );
        })}
      </div>
      {showBadge && percentage > 0 && (
        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border shadow-2xs ${band.badgeColor}`}>
          Band {band.scoreFormatted} / 6.0
        </span>
      )}
    </div>
  );
};

const CompleteSummaryExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  contentSource,
  onBack, 
  onComplete 
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  contentSource: any,
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepScores, setStepScores] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const exerciseSteps = useMemo(() => {
    const cycleEdition = monthlyPracticeEngine.getActiveEdition();
    const cycleSeed = cycleEdition.cycleSeed;
    const isEasy = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Easy';
    if (!isEasy && cycleSeed >= 2 && CYCLE2_COMPLETE_SUMMARY_CONTENT.length > 0) {
      const isM2 = module === 2 || module === '2' || module === 'M2' || module === 'm2';
      const shift = (exerciseNumber - 1 + (isM2 ? 2 : 0) + (cycleSeed - 2) * 2);
      const baseIndex = ((shift % CYCLE2_COMPLETE_SUMMARY_CONTENT.length) + CYCLE2_COMPLETE_SUMMARY_CONTENT.length) % CYCLE2_COMPLETE_SUMMARY_CONTENT.length;
      return [CYCLE2_COMPLETE_SUMMARY_CONTENT[baseIndex]];
    }

    const allContents = contentSource;
    let effectiveLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    const levelContent = allContents[effectiveLevel] || allContents["Easy"];
    const moduleContent = levelContent[module] || levelContent[3] || levelContent[1] || [];
    
    if (moduleContent.length === 0) return [];
    const easyCycleShift = (cycleSeed - 1) * 2;
    const baseIndex = Math.abs((exerciseNumber - 1 + (isEasy ? easyCycleShift : 0)) % moduleContent.length);
    return moduleContent[baseIndex] || [];
  }, [level, module, exerciseNumber, contentSource]);

  const currentContent = exerciseSteps[currentStep];

  const shuffledOptions = useMemo(() => {
    if (!currentContent) return [];
    return shuffleArray([...currentContent.options]);
  }, [currentContent]);

  const toggleOption = (id: number) => {
    if (showFeedback) return;
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const { triggerReaction } = useContext(MascotContext);

  const handleCheck = () => {
    if (selectedOptions.length !== 3) return;
    setShowFeedback(true);
    
    const correctCount = selectedOptions.filter(id => 
      currentContent.options.find((o: any) => o.id === id)?.isCorrect
    ).length;
    
    // TOEFL Scoring: 3 correct = 2 pts, 2 correct = 1 pt, 0-1 correct = 0 pts
    // For our percentage score: 3=100%, 2=50%, 0-1=0%
    const score = correctCount === 3 ? 100 : correctCount === 2 ? 50 : 0;
    
    if (score === 100) triggerReaction('correct');
    else if (score === 0) triggerReaction('incorrect');

    const newStepScores = [...stepScores];
    newStepScores[currentStep] = score;
    setStepScores(newStepScores);
  };

  const handleNext = () => {
    if (currentStep < exerciseSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOptions([]);
      setShowFeedback(false);
    } else {
      const totalScore = stepScores.reduce((a, b) => a + b, 0);
      const finalScore = totalScore / exerciseSteps.length;
      onComplete(finalScore);
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOptions([]);
    setShowFeedback(false);
    setStepScores([]);
    setIsFinished(false);
  };

  if (!currentContent) return null;

  if (isFinished) {
    const totalScore = Math.round(stepScores.reduce((a, b) => a + b, 0) / exerciseSteps.length);
    const band = getIBT6BandScore(totalScore);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border border-black/5 text-center space-y-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Trophy className="h-10 w-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-primary tracking-tight">Summary Mastery!</h2>
          <p className="text-on-surface-variant font-serif italic text-sm">You've completed the summary synthesis exercises.</p>
        </div>

        {/* 2026 iBT 6-Point Scale Result Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-inner space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              2026 iBT Band Score (1.0 – 6.0 Scale)
            </span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl sm:text-6xl font-sans font-black text-primary">{band.scoreFormatted}</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 6.0 Band</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-wider border shadow-2xs ${band.badgeColor}`}>
              {band.cefr} • {band.label}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs">
              {band.etsRange} Scaled Equiv
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {totalScore}% Accuracy
            </span>
          </div>
          <div className="pt-2">
            <StarRating percentage={totalScore} size="md" showBadge={false} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleReset} className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-xs">Try Again</button>
          <button onClick={onBack} className="px-8 py-3.5 rounded-full bg-primary text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all text-xs">Back to List</button>
        </div>
      </motion.div>
    );
  }

  const correctCount = selectedOptions.filter(id => currentContent.options.find((o: any) => o.id === id)?.isCorrect).length;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <div className="px-4 py-1 rounded-full bg-black/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
             Task {currentStep + 1} of {exerciseSteps.length}
           </div>
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
              Academic Passage
            </div>
            <h2 className="text-2xl font-sans font-extrabold text-primary tracking-tight leading-tight">{currentContent.title}</h2>
            <div className="font-serif text-base leading-relaxed text-on-surface-variant max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {currentContent.passage}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-black/5 space-y-8">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border-l-4 border-secondary shadow-sm">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Introductory Sentence</p>
                <p className="font-sans font-bold text-primary leading-tight text-lg">{currentContent.introSentence}</p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest flex justify-between items-center">
                  <span>Select 3 sentences:</span>
                  <span className={selectedOptions.length === 3 ? 'text-secondary' : ''}>{selectedOptions.length}/3</span>
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {shuffledOptions.map((option: any) => (
                    <button
                      key={option.id}
                      disabled={showFeedback}
                      onClick={() => toggleOption(option.id)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 group ${
                        selectedOptions.includes(option.id)
                          ? showFeedback
                            ? option.isCorrect
                              ? 'bg-green-500 border-green-600 text-white shadow-lg'
                              : 'bg-red-500 border-red-600 text-white shadow-lg'
                            : 'bg-secondary/10 border-secondary ring-2 ring-secondary/20'
                          : showFeedback && option.isCorrect
                            ? 'bg-green-50 border-green-200 opacity-80'
                            : 'bg-white border-black/5 hover:border-secondary/30'
                      }`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        selectedOptions.includes(option.id)
                          ? showFeedback ? 'bg-white text-primary border-white' : 'bg-secondary text-white border-secondary'
                          : 'border-black/20 text-black/40 group-hover:border-secondary group-hover:text-secondary'
                      }`}>
                        {showFeedback && selectedOptions.includes(option.id) ? (option.isCorrect ? <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> : <XCircle className="h-3.5 w-3.5 text-red-600" />) : option.id}
                      </div>
                      <div className="space-y-1">
                        <span className={`text-sm font-medium leading-tight block ${selectedOptions.includes(option.id) && showFeedback ? 'text-white' : 'text-primary'}`}>
                          {option.text}
                        </span>
                        {showFeedback && (selectedOptions.includes(option.id) || option.isCorrect) && (
                          <p className={`text-[10px] italic leading-relaxed ${selectedOptions.includes(option.id) && showFeedback ? 'text-white/90' : 'text-green-700'}`}>
                            {option.explanation}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {!showFeedback ? (
              <button
                disabled={selectedOptions.length !== 3}
                onClick={handleCheck}
                className={`w-full py-5 rounded-2xl font-sans font-bold text-sm uppercase tracking-widest transition-all ${
                  selectedOptions.length === 3
                    ? 'bg-secondary text-white shadow-lg hover:scale-[1.01] active:scale-[0.99]'
                    : 'bg-black/10 text-black/20 cursor-not-allowed'
                }`}
              >
                Check Summary ({selectedOptions.length}/3)
              </button>
            ) : (
              <div className="space-y-4">
                <div className={`p-6 rounded-2xl text-center space-y-2 ${correctCount === 3 ? 'bg-green-100 text-green-900' : correctCount === 2 ? 'bg-yellow-100 text-yellow-900' : 'bg-red-100 text-red-900'}`}>
                  <p className="font-sans font-bold text-lg">Result: {correctCount}/3 Correct</p>
                  <p className="text-sm font-serif italic">
                    {correctCount === 3 ? "Perfect! You identified all major ideas." : correctCount === 2 ? "Good job! You found most of the main ideas." : "Keep practicing! Focus on distinguishing main ideas from minor details."}
                  </p>
                </div>
                <button onClick={handleNext} className="w-full py-5 rounded-2xl bg-primary text-white font-sans font-bold text-sm uppercase tracking-widest shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all">
                  {currentStep < exerciseSteps.length - 1 ? 'Next Task' : 'Finish Exercise'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CompleteTableExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  contentSource,
  onBack, 
  onComplete 
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  contentSource: any,
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assignments, setAssignments] = useState<{ [key: number]: string }>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepScores, setStepScores] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const exerciseSteps = useMemo(() => {
    const cycleEdition = monthlyPracticeEngine.getActiveEdition();
    const cycleSeed = cycleEdition.cycleSeed;
    const isEasy = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Easy';
    if (!isEasy && cycleSeed >= 2 && CYCLE2_COMPLETE_TABLE_CONTENT.length > 0) {
      const isM2 = module === 2 || module === '2' || module === 'M2' || module === 'm2';
      const shift = (exerciseNumber - 1 + (isM2 ? 2 : 0) + (cycleSeed - 2) * 2);
      const baseIndex = ((shift % CYCLE2_COMPLETE_TABLE_CONTENT.length) + CYCLE2_COMPLETE_TABLE_CONTENT.length) % CYCLE2_COMPLETE_TABLE_CONTENT.length;
      return [CYCLE2_COMPLETE_TABLE_CONTENT[baseIndex]];
    }

    const allContents = contentSource;
    let effectiveLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    const levelContent = allContents[effectiveLevel] || allContents["Easy"];
    const moduleContent = levelContent[module] || levelContent[3] || levelContent[1] || [];
    
    if (moduleContent.length === 0) return [];
    const easyCycleShift = (cycleSeed - 1) * 2;
    const baseIndex = Math.abs((exerciseNumber - 1 + (isEasy ? easyCycleShift : 0)) % moduleContent.length);
    return moduleContent[baseIndex] || [];
  }, [level, module, exerciseNumber, contentSource]);

  const currentContent = exerciseSteps[currentStep];

  const shuffledItems = useMemo(() => {
    if (!currentContent) return [];
    return shuffleArray([...currentContent.items]);
  }, [currentContent]);

  const handleAssign = (itemId: number, category: string) => {
    if (showFeedback) return;
    setAssignments(prev => ({ ...prev, [itemId]: category }));
  };

  const { triggerReaction } = useContext(MascotContext);

  const handleCheck = () => {
    if (Object.keys(assignments).length !== currentContent.items.length) return;
    setShowFeedback(true);
    
    const correctCount = currentContent.items.filter((item: any) => assignments[item.id] === item.correctCategory).length;
    const score = (correctCount / currentContent.items.length) * 100;
    
    if (score === 100) triggerReaction('correct');
    else if (score < 50) triggerReaction('incorrect');

    const newStepScores = [...stepScores];
    newStepScores[currentStep] = score;
    setStepScores(newStepScores);
  };

  const handleNext = () => {
    if (currentStep < exerciseSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setAssignments({});
      setShowFeedback(false);
    } else {
      const totalScore = stepScores.reduce((a, b) => a + b, 0);
      const finalScore = totalScore / exerciseSteps.length;
      onComplete(finalScore);
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAssignments({});
    setShowFeedback(false);
    setStepScores([]);
    setIsFinished(false);
  };

  if (!currentContent) return null;

  if (isFinished) {
    const totalScore = Math.round(stepScores.reduce((a, b) => a + b, 0) / exerciseSteps.length);
    const band = getIBT6BandScore(totalScore);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border border-black/5 text-center space-y-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Trophy className="h-10 w-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-primary tracking-tight">Table Mastery!</h2>
          <p className="text-on-surface-variant font-serif italic text-sm">You've completed the categorical classification exercises.</p>
        </div>

        {/* 2026 iBT 6-Point Scale Result Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-inner space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              2026 iBT Band Score (1.0 – 6.0 Scale)
            </span>
          </div>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl sm:text-6xl font-sans font-black text-primary">{band.scoreFormatted}</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 6.0 Band</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-wider border shadow-2xs ${band.badgeColor}`}>
              {band.cefr} • {band.label}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs">
              {band.etsRange} Scaled Equiv
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {totalScore}% Accuracy
            </span>
          </div>
          <div className="pt-2">
            <StarRating percentage={totalScore} size="md" showBadge={false} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleReset} className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-xs">Try Again</button>
          <button onClick={onBack} className="px-8 py-3.5 rounded-full bg-primary text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all text-xs">Back to List</button>
        </div>
      </motion.div>
    );
  }

  const correctCount = currentContent.items.filter((item: any) => assignments[item.id] === item.correctCategory).length;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <div className="px-4 py-1 rounded-full bg-black/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
             Task {currentStep + 1} of {exerciseSteps.length}
           </div>
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
              Academic Passage
            </div>
            <h2 className="text-2xl font-sans font-extrabold text-primary tracking-tight leading-tight">{currentContent.title}</h2>
            <div className="font-serif text-base leading-relaxed text-on-surface-variant max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              {currentContent.passage}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-surface-container-high p-8 rounded-[2.5rem] border border-black/5 space-y-8">
            <h3 className="font-sans font-bold text-primary text-lg">Classification Task</h3>
            <div className="space-y-4">
              {shuffledItems.map((item: any) => (
                <div key={item.id} className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm space-y-4">
                  <p className="text-sm font-medium text-primary leading-snug">{item.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {currentContent.categories.map((cat: string) => (
                      <button
                        key={cat}
                        disabled={showFeedback}
                        onClick={() => handleAssign(item.id, cat)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border-2 ${
                          assignments[item.id] === cat
                            ? showFeedback
                              ? item.correctCategory === cat
                                ? 'bg-green-500 border-green-600 text-white shadow-md'
                                : 'bg-red-500 border-red-600 text-white shadow-md'
                              : 'bg-secondary border-secondary text-white'
                            : 'bg-surface-container-low border-transparent text-on-surface-variant hover:border-secondary/30'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!showFeedback ? (
              <button
                disabled={Object.keys(assignments).length !== currentContent.items.length}
                onClick={handleCheck}
                className={`w-full py-5 rounded-2xl font-sans font-bold text-sm uppercase tracking-widest transition-all ${
                  Object.keys(assignments).length === currentContent.items.length
                    ? 'bg-secondary text-white shadow-lg hover:scale-[1.01] active:scale-[0.99]'
                    : 'bg-black/10 text-black/20 cursor-not-allowed'
                }`}
              >
                Check Table ({Object.keys(assignments).length}/{currentContent.items.length})
              </button>
            ) : (
              <div className="space-y-4">
                <div className={`p-6 rounded-2xl text-center space-y-2 ${correctCount === currentContent.items.length ? 'bg-green-100 text-green-900' : 'bg-yellow-100 text-yellow-900'}`}>
                  <p className="font-sans font-bold text-lg">Result: {correctCount}/{currentContent.items.length} Correct</p>
                  <p className="text-sm font-serif italic">
                    {correctCount === currentContent.items.length ? "Excellent! You categorized everything correctly." : "Good effort! Review the passage to see where the distinctions lie."}
                  </p>
                </div>
                <button onClick={handleNext} className="w-full py-5 rounded-2xl bg-primary text-white font-sans font-bold text-sm uppercase tracking-widest shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all">
                  {currentStep < exerciseSteps.length - 1 ? 'Next Task' : 'Finish Exercise'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DailyLifeExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  onBack, 
  onComplete 
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const getExerciseContent = (lvl: string, num: number, mod: number | string) => {
    const allContents: { [key: string]: { [key: number]: any[] } } = {
      "Easy": {
        1: [
          {
            title: "Library Notice",
            text: "The library will be closed for maintenance on Friday, October 12th. All books due on that day should be returned by Thursday or on the following Monday. No late fees will be charged for Friday.",
            questions: [
              { id: 1, question: "When will the library be closed?", options: ["Thursday", "Friday", "Monday"], correct: "Friday", hint: "Check the first sentence." },
              { id: 2, question: "Will there be late fees for Friday?", options: ["Yes", "No", "Only for new books"], correct: "No", hint: "Look at the last sentence." }
            ]
          },
          {
            title: "Email from Professor",
            text: "Dear students, please remember that the deadline for the final project has been moved to next Wednesday. I will be holding extra office hours on Monday from 2 PM to 4 PM to assist with any questions.",
            questions: [
              { id: 1, question: "When is the new deadline?", options: ["Monday", "Tuesday", "Wednesday"], correct: "Wednesday", hint: "The deadline was moved to 'next...'." },
              { id: 2, question: "What time are the office hours?", options: ["12 PM - 2 PM", "2 PM - 4 PM", "4 PM - 6 PM"], correct: "2 PM - 4 PM", hint: "Check the specific time range mentioned." }
            ]
          },
          {
            title: "Cafeteria Menu Update",
            text: "Starting next week, the campus cafeteria will introduce a 'Meatless Monday' initiative. Every Monday, all main courses will be vegetarian or vegan. This change is part of our commitment to sustainability and healthy living.",
            questions: [
              { id: 1, question: "What is the new initiative called?", options: ["Vegan Week", "Meatless Monday", "Healthy Living"], correct: "Meatless Monday", hint: "Look for the name in quotes." },
              { id: 2, question: "Why is the cafeteria making this change?", options: ["To save money", "Sustainability and health", "Chef's preference"], correct: "Sustainability and health", hint: "Check the last sentence." }
            ]
          },
          {
            title: "Gym Membership",
            text: "Student gym memberships are valid for one academic year. To renew your membership, please bring your student ID and a proof of enrollment to the sports center front desk before September 30th.",
            questions: [
              { id: 1, question: "How long is a gym membership valid?", options: ["One semester", "One academic year", "One calendar year"], correct: "One academic year", hint: "Check the first sentence." },
              { id: 2, question: "What is the deadline for renewal?", options: ["August 31st", "September 30th", "October 31st"], correct: "September 30th", hint: "Look for the date at the end." }
            ]
          }
        ],
        2: [
          {
            title: "Corporate Policy Update",
            text: "Effective immediately, the company is implementing a new hybrid work policy. Employees are required to be in the office at least three days per week, with Tuesday and Thursday being mandatory anchor days. Remote work on Mondays and Fridays is permitted with manager approval. This change aims to foster better collaboration and team synergy while maintaining flexibility for our workforce. Please review the full policy on the internal portal by the end of the week.",
            questions: [
              { id: 1, question: "Which days are mandatory for in-office work?", options: ["Monday & Friday", "Tuesday & Thursday", "Wednesday & Thursday"], correct: "Tuesday & Thursday", hint: "Look for 'mandatory anchor days'." },
              { id: 2, question: "What is required for remote work on Fridays?", options: ["HR notification", "Manager approval", "No requirements"], correct: "Manager approval", hint: "Check the sentence about remote work permission." },
              { id: 3, question: "What is the primary goal of this new policy?", options: ["Reduce office costs", "Foster collaboration", "Increase work hours"], correct: "Foster collaboration", hint: "The text mentions 'foster better...'." }
            ]
          },
          {
            title: "International Travel Itinerary",
            text: "Your flight to Tokyo (JL402) departs from Terminal 3 at 10:45 AM. Please ensure you arrive at the airport at least three hours prior to departure for international security screening. Upon arrival at Narita Airport, you will be met by a shuttle driver holding a sign with your name. The shuttle will transport you directly to the Shinjuku Park Hotel. Note that check-in begins at 3:00 PM, but the concierge can store your luggage if you arrive early.",
            questions: [
              { id: 1, question: "What time should you arrive at the airport?", options: ["7:45 AM", "10:45 AM", "1:45 PM"], correct: "7:45 AM", hint: "Arrive 3 hours before 10:45 AM." },
              { id: 2, question: "Where will you meet the shuttle driver?", options: ["Terminal 3", "Narita Airport", "Shinjuku Park Hotel"], correct: "Narita Airport", hint: "Check the 'Upon arrival at...' section." },
              { id: 3, question: "What can you do if you arrive at the hotel before 3:00 PM?", options: ["Check in early", "Store luggage", "Wait at the airport"], correct: "Store luggage", hint: "Look at the last sentence about the concierge." }
            ]
          },
          {
            title: "Medical Center Appointment",
            text: "To schedule an appointment at the University Medical Center, please use the online booking system. For urgent matters, you may visit during walk-in hours from 8:00 AM to 10:00 AM daily. Please bring your insurance card and a list of any current medications. If you need to cancel, please do so at least 24 hours in advance to avoid a cancellation fee.",
            questions: [
              { id: 1, question: "How should you schedule a regular appointment?", options: ["By phone", "In person", "Online booking system"], correct: "Online booking system", hint: "Check the first sentence." },
              { id: 2, question: "When are the walk-in hours?", options: ["8:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "1:00 PM - 3:00 PM"], correct: "8:00 AM - 10:00 AM", hint: "Look for the specific time range." },
              { id: 3, question: "What is the policy for cancellations?", options: ["No notice required", "12 hours notice", "24 hours notice"], correct: "24 hours notice", hint: "Check the last sentence for the time requirement." }
            ]
          },
          {
            title: "Public Transportation Notice",
            text: "Due to track maintenance, the Blue Line trains will be replaced by shuttle buses between Central Station and North Park this weekend. Expect delays of up to 20 minutes. Regular service will resume at 5:00 AM on Monday. Commuters are encouraged to use the Green Line as an alternative route where possible.",
            questions: [
              { id: 1, question: "What is replacing the Blue Line trains?", options: ["Taxis", "Shuttle buses", "Bicycles"], correct: "Shuttle buses", hint: "Check the first sentence." },
              { id: 2, question: "How long are the expected delays?", options: ["10 minutes", "20 minutes", "30 minutes"], correct: "20 minutes", hint: "Look for the specific duration mentioned." },
              { id: 3, question: "When will regular service resume?", options: ["Sunday evening", "Monday at 5:00 AM", "Monday at 9:00 AM"], correct: "Monday at 5:00 AM", hint: "Check the third sentence." },
              { id: 4, question: "What alternative route is suggested?", options: ["Red Line", "Green Line", "Yellow Line"], correct: "Green Line", hint: "Look at the last sentence." }
            ]
          },
          {
            title: "Community Center Workshop",
            text: "The community center is hosting a 'Digital Literacy for Seniors' workshop series starting next Tuesday at 10:00 AM in Room 204. The sessions will cover basic computer skills, internet safety, and using social media to stay connected with family. Registration is free but required as space is limited to 15 participants per session. Please sign up at the front desk or via the center's website by Friday.",
            questions: [
              { id: 1, question: "Who is the target audience for the workshop?", options: ["Children", "Seniors", "College students"], correct: "Seniors", hint: "Check the title of the workshop." },
              { id: 2, question: "What is one of the topics covered?", options: ["Advanced coding", "Internet safety", "Graphic design"], correct: "Internet safety", hint: "Look at the list of topics in the second sentence." },
              { id: 3, question: "What is the maximum number of participants per session?", options: ["10", "15", "20"], correct: "15", hint: "Look for the number mentioned regarding space limits." },
              { id: 4, question: "How can someone register for the workshop?", options: ["By phone only", "At the front desk or website", "By sending an email"], correct: "At the front desk or website", hint: "Check the last sentence for registration methods." }
            ]
          }
        ]
      },
      "Normal": {
        1: [
          {
            title: "Student Housing Policy Update",
            text: "The university housing office has recently updated its residency requirements for the upcoming academic year, reflecting a broader institutional shift toward integrated campus living. All first-year students are now required to reside in on-campus dormitories unless they live with a legal guardian within a 30-mile radius of the campus. This policy change is intended to improve student retention rates and foster a stronger, more cohesive sense of community among the incoming class. Applications for housing exemptions must be submitted via the student portal by June 1st, and must be accompanied by comprehensive supporting documentation. Late applications will only be considered in cases of documented extreme financial hardship or significant medical necessity. Furthermore, the university has allocated additional funds to renovate existing dormitories to ensure a comfortable living environment for all residents.",
            questions: [
              { id: 1, question: "Who is primarily affected by the new housing requirement?", options: ["Graduate students", "First-year students", "International students", "Senior students"], correct: "First-year students", hint: "Check the second sentence for the specific student group." },
              { id: 2, question: "What is the primary justification for this policy change?", options: ["To increase university revenue", "To improve retention and community", "To reduce local traffic", "To comply with state laws"], correct: "To improve retention and community", hint: "Look for the sentence starting with 'This policy change is intended to...'." },
              { id: 3, question: "What is the deadline for submitting exemption requests?", options: ["May 1st", "June 1st", "July 1st", "August 1st"], correct: "June 1st", hint: "Look for the date in the middle of the passage." },
              { id: 4, question: "Under what circumstances are late applications considered?", options: ["Personal preference", "Financial hardship or medical necessity", "Travel plans", "Work commitments"], correct: "Financial hardship or medical necessity", hint: "Check the penultimate sentence." },
              { id: 5, question: "What additional measure is the university taking for residents?", options: ["Providing free meals", "Renovating dormitories", "Offering free parking", "Reducing tuition"], correct: "Renovating dormitories", hint: "Look at the final sentence." }
            ]
          }
        ],
        2: [
          {
            title: "Corporate Hybrid Work Framework",
            text: "Effective immediately, the company is implementing a comprehensive hybrid work framework designed to balance operational efficiency with employee well-being. Under this new policy, employees are required to be physically present in the office at least three days per week, with Tuesday and Thursday designated as mandatory 'anchor days' for team meetings and collaborative projects. Remote work on Mondays and Fridays is permitted, provided that employees obtain prior manager approval and maintain their standard productivity levels. This strategic shift aims to foster better face-to-face collaboration and team synergy while preserving the flexibility that has become a hallmark of our corporate culture. Employees are encouraged to review the full policy document on the internal portal, which outlines specific expectations for communication and availability during remote hours. Failure to adhere to the anchor day requirements may result in a review of individual remote work privileges.",
            questions: [
              { id: 1, question: "How many days per week must employees be in the office?", options: ["Two days", "Three days", "Four days", "Five days"], correct: "Three days", hint: "Check the second sentence for the minimum requirement." },
              { id: 2, question: "Which days are considered 'anchor days'?", options: ["Monday & Wednesday", "Tuesday & Thursday", "Wednesday & Friday", "Monday & Friday"], correct: "Tuesday & Thursday", hint: "Look for the specific days mentioned in quotes." },
              { id: 3, question: "What is a requirement for working remotely on Fridays?", options: ["HR notification", "Manager approval", "Seniority", "Peer review"], correct: "Manager approval", hint: "Check the sentence about remote work permission." },
              { id: 4, question: "What is the primary objective of the new framework?", options: ["To reduce office overhead", "To foster collaboration and synergy", "To monitor employee hours", "To eliminate remote work"], correct: "To foster collaboration and synergy", hint: "Look for the sentence starting with 'This strategic shift aims to...'." },
              { id: 5, question: "Where can employees find the full policy details?", options: ["Company newsletter", "Internal portal", "Manager's email", "Public website"], correct: "Internal portal", hint: "Check the sentence about policy review." }
            ]
          },
          {
            title: "Urban Infrastructure Project",
            text: "The municipal government has announced a multi-year infrastructure project aimed at revitalizing the downtown core. The project, titled 'CityHeart 2030', focuses on expanding pedestrian zones, increasing green spaces, and upgrading the aging sewer system. Construction is scheduled to begin in the North District next month, which will necessitate temporary road closures and rerouting of several bus lines. Local businesses are concerned about the potential impact on foot traffic, but the city has promised to provide financial assistance and marketing support during the most disruptive phases of construction. Residents can attend a town hall meeting next Wednesday at the City Hall to learn more about the project timeline and provide feedback on the proposed designs.",
            questions: [
              { id: 1, question: "What is the name of the infrastructure project?", options: ["Urban Renewal", "CityHeart 2030", "Downtown Revitalization", "Green City"], correct: "CityHeart 2030", hint: "Look for the name in quotes." },
              { id: 2, question: "What is one of the project's main focuses?", options: ["Building new skyscrapers", "Upgrading the sewer system", "Expanding the airport", "Constructing a new stadium"], correct: "Upgrading the sewer system", hint: "Check the list of focuses in the second sentence." },
              { id: 3, question: "Where will construction begin first?", options: ["South District", "East District", "North District", "West District"], correct: "North District", hint: "Look for the starting location mentioned in the third sentence." },
              { id: 4, question: "How does the city plan to support local businesses?", options: ["By reducing taxes", "By providing financial assistance and marketing support", "By offering free parking", "By shortening construction hours"], correct: "By providing financial assistance and marketing support", hint: "Check the sentence about business concerns." },
              { id: 5, question: "When and where is the town hall meeting?", options: ["Next Monday at City Hall", "Next Wednesday at City Hall", "This Friday at the Library", "Next Tuesday at the Community Center"], correct: "Next Wednesday at City Hall", hint: "Look for the meeting details in the final sentence." }
            ]
          }
        ]
      },
      "Hard": {
        1: [
          {
            title: "Academic Integrity in the Digital Age",
            text: "The University Senate has recently ratified a more stringent Academic Integrity Policy, a move necessitated by the burgeoning concerns surrounding generative artificial intelligence and the complexities of online collaboration. Plagiarism, within this revised framework, is redefined with greater precision; it encompasses not only the verbatim copying of text without proper attribution but also the submission of any work that is not substantially the product of the student's own intellectual effort. This explicitly includes content generated by automated linguistic tools without the prior, explicit authorization of the course instructor. The repercussions for violating these standards have been escalated, with potential penalties ranging from a mandatory failing grade on the specific assignment to permanent expulsion from the institution, depending on the severity and frequency of the infraction. It is incumbent upon the student to seek clarification from their instructors if they find themselves navigating the ambiguous boundaries of permissible collaboration. To support this transition, the Academic Success Center has expanded its curriculum to include weekly workshops focusing on sophisticated citation methodologies and the ethical implications of research in a technologically saturated environment.",
            questions: [
              { id: 1, question: "What prompted the revision of the Academic Integrity Policy?", options: ["Decreasing enrollment", "Concerns over AI and online collaboration", "Changes in government funding", "A shift in university leadership"], correct: "Concerns over AI and online collaboration", hint: "Check the first sentence for the catalyst of the change." },
              { id: 2, question: "How does the new policy define plagiarism beyond traditional copying?", options: ["Group study sessions", "Submission of work not substantially one's own", "Using physical libraries", "Attending extra lectures"], correct: "Submission of work not substantially one's own", hint: "Look for the expanded definition in the second sentence." },
              { id: 3, question: "What is required before using automated tools for assignments?", options: ["A fee payment", "Explicit instructor authorization", "Peer review", "A software license"], correct: "Explicit instructor authorization", hint: "Check the sentence mentioning 'automated linguistic tools'." },
              { id: 4, question: "What is the maximum penalty for violating the policy?", options: ["A verbal warning", "A failing grade", "Permanent expulsion", "A temporary suspension"], correct: "Permanent expulsion", hint: "Look for the most severe consequence in the list of penalties." },
              { id: 5, question: "Whose responsibility is it to clarify collaboration rules?", options: ["The Academic Success Center", "The course instructor", "The student", "The University Senate"], correct: "The student", hint: "Look for the phrase 'It is incumbent upon...'." },
              { id: 6, question: "What new focus has been added to the Academic Success Center's workshops?", options: ["Basic grammar", "Ethical research in a technological environment", "Public speaking", "Time management"], correct: "Ethical research in a technological environment", hint: "Check the final sentence for the workshop's focus." }
            ]
          }
        ],
        2: [
          {
            title: "The Strategic Evolution of Global Logistics",
            text: "In response to the escalating volatility within international maritime shipping lanes and the persistent upward trajectory of global fuel costs, the corporation is initiating a comprehensive strategic overhaul of its logistics infrastructure. The cornerstone of this initiative is a fundamental transition from a 'just-in-time' (JIT) inventory management model to a more robust and resilient 'just-in-case' (JIC) methodology. This paradigm shift involves a significant augmentation of safety stock levels maintained at key regional distribution centers to mitigate the risk of supply chain disruptions. Consequently, this necessitates the rapid acquisition of additional high-capacity warehouse facilities in pivotal global hubs such as Rotterdam and Singapore. Furthermore, the company is dedicating substantial capital to the implementation of advanced predictive analytics platforms. These systems leverage real-time data and machine learning algorithms to anticipate potential bottlenecks caused by geopolitical instability or extreme meteorological events. By integrating these insights, the logistics division can proactively execute contingency routing for shipments, thereby minimizing potential downtime. Another critical element of this multifaceted strategy is the diversification of transportation modalities; while maritime freight remains the primary conduit for bulk commodities, the company will increasingly utilize rail and air transport for high-value, time-sensitive components to ensure the continuity of production cycles.",
            questions: [
              { id: 1, question: "What are the primary external factors driving the logistics overhaul?", options: ["New labor laws", "Shipping volatility and fuel costs", "Technological obsolescence", "Decreasing consumer demand"], correct: "Shipping volatility and fuel costs", hint: "Check the opening sentence for the external pressures." },
              { id: 2, question: "What is the core difference between the JIT and JIC models as described?", options: ["JIC is faster", "JIC involves higher safety stock levels", "JIT uses more warehouse space", "JIC is less expensive"], correct: "JIC involves higher safety stock levels", hint: "Look for the definition of the 'just-in-case' approach." },
              { id: 3, question: "Why are Rotterdam and Singapore specifically mentioned?", options: ["They are the company's headquarters", "They are pivotal global logistics hubs", "They have the lowest labor costs", "They are the primary markets for sales"], correct: "They are pivotal global logistics hubs", hint: "Check the sentence about warehouse acquisition." },
              { id: 4, question: "How does predictive analytics software assist the logistics team?", options: ["By reducing employee headcount", "By anticipating supply chain disruptions", "By automating warehouse packing", "By lowering fuel consumption directly"], correct: "By anticipating supply chain disruptions", hint: "Look for the role of machine learning and real-time data." },
              { id: 5, question: "What is the purpose of diversifying transportation modes?", options: ["To reduce the carbon footprint", "To ensure production continuity", "To eliminate maritime shipping", "To simplify the logistics chain"], correct: "To ensure production continuity", hint: "Check the final sentence for the goal of using rail and air." },
              { id: 6, question: "What is the trade-off mentioned regarding these strategic changes?", options: ["Lower quality of goods", "Higher short-term operational costs", "Reduced global presence", "Slower delivery times"], correct: "Higher short-term operational costs", hint: "Look for the mention of financial implications (implied in the complexity)." }
            ]
          },
          {
            title: "Sustainable Urban Development Initiatives",
            text: "The municipal planning commission has unveiled an ambitious blueprint for sustainable urban development, aiming to transform the city into a global leader in environmental stewardship by 2040. The core of this strategy involves the implementation of a '15-minute city' model, where residents can access all essential services—including work, healthcare, and education—within a 15-minute walk or bike ride from their homes. This transition requires a radical rezoning of urban spaces to encourage mixed-use developments and the aggressive expansion of high-density residential units in formerly industrial zones. Furthermore, the city is investing heavily in a decentralized green energy grid, utilizing a combination of rooftop solar arrays and community-scale wind turbines to reduce reliance on the national fossil-fuel-based power network. Critics argue that the rapid pace of these changes may lead to gentrification and the displacement of long-term residents, but the commission has pledged to include robust affordable housing mandates in all new development contracts. To monitor progress, the city will deploy an integrated network of IoT sensors to collect real-time data on air quality, traffic flow, and energy consumption, which will be accessible to the public via an open-data dashboard.",
            questions: [
              { id: 1, question: "What is the primary goal of the '15-minute city' model?", options: ["To increase traffic flow", "To ensure essential services are within walking distance", "To build more highways", "To centralize all government offices"], correct: "To ensure essential services are within walking distance", hint: "Check the definition provided in the second sentence." },
              { id: 2, question: "What type of rezoning is required for this transition?", options: ["Industrial only", "Residential only", "Mixed-use developments", "Agricultural"], correct: "Mixed-use developments", hint: "Look for the specific type of development mentioned in the third sentence." },
              { id: 3, question: "How does the city plan to reduce its reliance on fossil fuels?", options: ["By importing more natural gas", "By building a nuclear power plant", "By investing in a decentralized green energy grid", "By banning all electricity use at night"], correct: "By investing in a decentralized green energy grid", hint: "Check the sentence about energy investment." },
              { id: 4, question: "What is a major concern raised by critics of the plan?", options: ["Lack of green space", "Gentrification and displacement", "High tuition costs", "Slow internet speeds"], correct: "Gentrification and displacement", hint: "Look for the argument mentioned in the latter half of the text." },
              { id: 5, question: "How will the city monitor the progress of these initiatives?", options: ["Through annual surveys", "By deploying a network of IoT sensors", "By hiring more police officers", "By conducting door-to-door interviews"], correct: "By deploying a network of IoT sensors", hint: "Check the final sentence for the monitoring method." },
              { id: 6, question: "What will be accessible to the public via an open-data dashboard?", options: ["Personal medical records", "Real-time environmental and urban data", "Confidential government documents", "Private business contracts"], correct: "Real-time environmental and urban data", hint: "Look for what the IoT sensors are collecting." }
            ]
          }
        ]
      },
      "Advanced": {
        1: [
          {
            title: "The Paradigm Shift in Campus Sustainability",
            text: "Over the preceding decade, the university has undergone a profound metamorphosis, transitioning from rudimentary recycling initiatives to a sophisticated, multi-dimensional sustainability framework that permeates every echelon of campus operations. This systemic evolution was initially catalyzed by the integration of large-scale photovoltaic arrays atop the engineering complex, which currently satisfy approximately 15% of the institution's aggregate electrical demand. More recently, the 'Zero-Waste Initiative' has achieved a remarkable milestone, diverting 70% of organic and inorganic waste from regional landfills through a combination of industrial-scale composting and the aggressive elimination of single-use polymers. However, the most technically ambitious endeavor to date is the realization of the LEED Platinum-certified Life Sciences Research Center. This facility serves as a flagship for sustainable architecture, incorporating a sophisticated closed-loop geothermal heating system and an advanced atmospheric water generation system for laboratory use. Beyond these infrastructural advancements, the university is pioneering the concept of 'behavioral sustainability,' which seeks to internalize environmental consciousness within the student body. This is facilitated through a combination of economic incentives, such as heavily subsidized multi-modal transit passes, and competitive gamification, notably the annual Inter-Dormitory Energy Conservation Challenge. These efforts represent a holistic approach to environmental stewardship, acknowledging that true sustainability requires the alignment of physical infrastructure with individual and collective behavioral patterns.",
            questions: [
              { id: 1, question: "What was the initial catalyst for the university's sustainability evolution?", options: ["Recycling bins", "Photovoltaic arrays", "LEED certification", "Water conservation"], correct: "Photovoltaic arrays", hint: "Look for the specific technology mentioned as the starting point." },
              { id: 2, question: "What percentage of waste is currently diverted from landfills?", options: ["15%", "50%", "70%", "90%"], correct: "70%", hint: "Check the statistics associated with the 'Zero-Waste Initiative'." },
              { id: 3, question: "What makes the Life Sciences Research Center a 'flagship' for sustainability?", options: ["Its size and location", "Geothermal heating and water generation", "Use of recycled timber", "Solar-powered laboratories"], correct: "Geothermal heating and water generation", hint: "Look for the specific technical features of the building." },
              { id: 4, question: "How does the university define 'behavioral sustainability'?", options: ["Mandatory environmental courses", "Internalizing environmental consciousness", "Reducing tuition for green students", "Banning all cars on campus"], correct: "Internalizing environmental consciousness", hint: "Check the definition provided in the latter half of the passage." },
              { id: 5, question: "What economic incentive is provided to students to promote green transit?", options: ["Free bicycles", "Subsidized multi-modal transit passes", "Parking discounts", "Cash rewards"], correct: "Subsidized multi-modal transit passes", hint: "Look for the mention of transit and subsidies." },
              { id: 6, question: "What is the purpose of the 'Inter-Dormitory Energy Conservation Challenge'?", options: ["To reduce water usage", "To promote behavioral sustainability through gamification", "To test new solar panels", "To raise funds for the Life Sciences building"], correct: "To promote behavioral sustainability through gamification", hint: "Check the context of the annual competition." },
              { id: 7, question: "What is the overarching philosophy of the university's sustainability efforts?", options: ["Focusing solely on infrastructure", "Prioritizing economic growth", "Aligning infrastructure with behavioral patterns", "Eliminating all waste by 2030"], correct: "Aligning infrastructure with behavioral patterns", hint: "Look at the final sentence for the concluding synthesis." }
            ]
          }
        ],
        2: [
          {
            title: "Macroeconomic Implications of Global Supply Chain Restructuring",
            text: "The contemporary global economic landscape is currently witnessing a seismic shift in logistics strategy, precipitated by unprecedented volatility in international trade corridors and the systemic fragility exposed by recent geopolitical upheavals. Major multinational corporations are increasingly abandoning the long-dominant 'just-in-time' (JIT) inventory paradigm—which prioritized lean operations and minimal holding costs—in favor of a more resilient 'just-in-case' (JIC) architecture. This transition involves the strategic accumulation of buffer stocks and the regionalization of supply chains to mitigate the risks of catastrophic failure. Such a shift necessitates a massive reallocation of capital toward the acquisition of high-capacity, technologically integrated warehousing in critical geostrategic nodes like Rotterdam, Singapore, and the Panama Canal zone. Furthermore, the integration of 'Digital Twin' technology and predictive algorithmic modeling is becoming indispensable. These tools allow logistics managers to simulate a myriad of disruptive scenarios, from localized labor strikes to systemic climate-induced maritime blockages, enabling the formulation of dynamic, real-time contingency protocols. This strategic pivot also encompasses a radical diversification of transit modalities; while maritime shipping remains the bedrock of global trade, there is a marked increase in the utilization of transcontinental rail networks and high-velocity air freight for critical components. While these structural adjustments inevitably exert upward pressure on short-term inflationary indices due to increased operational expenditures, they are increasingly viewed as a necessary premium for long-term systemic stability and the preservation of global market share in an era of perpetual uncertainty.",
            questions: [
              { id: 1, question: "What is the primary driver behind the shift from JIT to JIC?", options: ["Technological advancement", "Systemic fragility and geopolitical upheavals", "A desire for higher profit margins", "Decreased global competition"], correct: "Systemic fragility and geopolitical upheavals", hint: "Check the opening paragraph for the root causes." },
              { id: 2, question: "How does the JIC architecture differ fundamentally from JIT?", options: ["It prioritizes lean operations", "It involves strategic accumulation of buffer stocks", "It reduces the need for warehousing", "It relies solely on local suppliers"], correct: "It involves strategic accumulation of buffer stocks", hint: "Look for the definition of the 'just-in-case' approach." },
              { id: 3, question: "What role does 'Digital Twin' technology play in this new strategy?", options: ["Automating physical labor", "Simulating disruptive scenarios for contingency planning", "Reducing the cost of raw materials", "Tracking individual employee productivity"], correct: "Simulating disruptive scenarios for contingency planning", hint: "Check the sentence discussing predictive algorithmic modeling." },
              { id: 4, question: "Why is there a radical diversification of transit modalities?", options: ["To eliminate the use of maritime shipping", "To reduce the environmental impact of trade", "To mitigate risks and ensure component delivery", "To comply with new international treaties"], correct: "To mitigate risks and ensure component delivery", hint: "Look for the reason behind using rail and air freight." },
              { id: 5, question: "What is the predicted short-term economic consequence of this restructuring?", options: ["Deflationary pressure", "Upward pressure on inflationary indices", "Immediate increase in market share", "Reduction in corporate taxes"], correct: "Upward pressure on inflationary indices", hint: "Check the final sentence for the mention of inflation." },
              { id: 6, question: "What is the 'necessary premium' mentioned in the conclusion?", options: ["Higher executive salaries", "Increased operational expenditures for stability", "New government subsidies", "The cost of Digital Twin software"], correct: "Increased operational expenditures for stability", hint: "Look for what the higher costs are being traded for." },
              { id: 7, question: "Which geostrategic nodes are mentioned as critical for new warehousing?", options: ["New York, London, and Paris", "Rotterdam, Singapore, and Panama Canal", "Tokyo, Beijing, and Seoul", "Dubai, Mumbai, and Sydney"], correct: "Rotterdam, Singapore, and Panama Canal", hint: "Look for the specific locations listed in the text." }
            ]
          },
          {
            title: "Ethical Considerations in Artificial Intelligence Deployment",
            text: "As artificial intelligence (AI) systems become increasingly integrated into critical societal infrastructures—from autonomous transportation to algorithmic judicial sentencing—the necessity for a robust ethical framework has reached a critical juncture. The primary concern among ethicists is the 'black box' problem, where the decision-making processes of deep learning neural networks remain opaque even to their creators. This lack of transparency poses significant challenges for accountability, particularly in instances where AI systems exhibit biased outcomes or cause physical harm. Furthermore, the widespread deployment of AI in the labor market threatens to exacerbate existing socioeconomic inequalities, as automation disproportionately impacts low-skilled workers while concentrating wealth among a small cadre of technology owners. To mitigate these risks, some scholars advocate for the implementation of 'explainable AI' (XAI) standards, which require systems to provide human-understandable rationales for their outputs. Others propose the establishment of international regulatory bodies to oversee the development of 'General AI' and ensure its alignment with fundamental human rights. The debate remains polarized between those who prioritize rapid technological innovation and those who argue for a 'precautionary principle' approach, emphasizing the need for rigorous safety testing and ethical auditing prior to any large-scale societal integration.",
            questions: [
              { id: 1, question: "What is the 'black box' problem in AI?", options: ["A hardware failure", "Opaque decision-making processes", "High energy consumption", "Limited storage capacity"], correct: "Opaque decision-making processes", hint: "Check the definition provided in the second sentence." },
              { id: 2, question: "Why is transparency important in AI systems?", options: ["To increase processing speed", "For accountability in case of bias or harm", "To reduce development costs", "To make the systems look better"], correct: "For accountability in case of bias or harm", hint: "Look for the sentence starting with 'This lack of transparency...'." },
              { id: 3, question: "How might AI deployment affect socioeconomic inequality?", options: ["By providing free education", "By disproportionately impacting low-skilled workers", "By eliminating all taxes", "By increasing the minimum wage"], correct: "By disproportionately impacting low-skilled workers", hint: "Check the sentence about the labor market." },
              { id: 4, question: "What is the goal of 'explainable AI' (XAI)?", options: ["To make AI faster", "To provide human-understandable rationales for outputs", "To replace human workers entirely", "To create more complex algorithms"], correct: "To provide human-understandable rationales for outputs", hint: "Look for the definition of XAI in the text." },
              { id: 5, question: "What is the 'precautionary principle' approach?", options: ["Prioritizing rapid innovation", "Rigorous safety testing and ethical auditing before integration", "Ignoring all risks", "Banning AI development"], correct: "Rigorous safety testing and ethical auditing before integration", hint: "Check the final sentence for the description of this approach." },
              { id: 6, question: "Which areas of societal infrastructure are mentioned as using AI?", options: ["Agriculture and mining", "Autonomous transportation and judicial sentencing", "Entertainment and sports", "Retail and fashion"], correct: "Autonomous transportation and judicial sentencing", hint: "Look for the examples listed in the first sentence." }
            ]
          }
        ]
      }
    };

    const normalizedLvl = lvl.charAt(0).toUpperCase() + lvl.slice(1).toLowerCase();
    const levelKey = allContents[normalizedLvl] ? normalizedLvl : "Easy";
    const contents = allContents[levelKey][mod] || allContents["Easy"][mod];
    const baseIndex = (num - 1) % contents.length;
    return contents[baseIndex];
  };

  const content = getExerciseContent(level, exerciseNumber, module);

  const handleCheck = () => {
    setShowFeedback(true);
    const total = content.questions.length;
    const correctCount = content.questions.filter(q => answers[q.id] === q.correct).length;
    const percentage = (correctCount / total) * 100;
    onComplete(percentage);
    if (correctCount === total) setIsCompleted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowFeedback(false);
    setIsCompleted(false);
  };

  const score = content.questions.filter(q => answers[q.id] === q.correct).length;
  const total = content.questions.length;
  const percentage = (score / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setShowHints(!showHints)} 
             className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all border ${
               showHints 
                 ? 'bg-secondary text-white border-secondary shadow-md' 
                 : 'bg-white text-secondary border-secondary/20 hover:border-secondary/40'
             }`}
           >
             <HelpCircle className="h-4 w-4" />
             {showHints ? 'Hints On' : 'Hints Off'}
           </button>
           {showFeedback && (
             <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                 <Trophy className="h-4 w-4" />
                 {score} / {total} Correct
               </div>
               <StarRating percentage={percentage} />
             </div>
           )}
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-black/5 space-y-8">
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
            Module {module} • {skill} • {level} • Exercise {exerciseNumber}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-primary tracking-tight">{content.title}</h2>
            <p className="text-on-surface-variant font-serif italic text-sm">Read the text and answer the questions below.</p>
          </div>
        </header>

        <div className="bg-surface p-8 rounded-2xl border border-black/5 font-serif text-lg leading-relaxed text-on-surface-variant italic">
          "{content.text}"
        </div>

        <div className="space-y-8">
          {content.questions.map((q, i) => (
            <div key={q.id} className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="space-y-4 flex-1">
                  <p className="text-lg font-sans font-bold text-primary">{q.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {q.options.map((option) => {
                      const isSelected = answers[q.id] === option;
                      const isCorrect = option === q.correct;
                      return (
                        <button
                          key={option}
                          onClick={() => !showFeedback && setAnswers({ ...answers, [q.id]: option })}
                          className={`
                            px-6 py-3 rounded-xl text-sm font-medium border transition-all text-left
                            ${isSelected 
                              ? showFeedback
                                ? isCorrect
                                  ? 'bg-green-50 border-green-500 text-green-700'
                                  : 'bg-red-50 border-red-500 text-red-700'
                                : 'bg-secondary/10 border-secondary text-secondary'
                              : showFeedback && isCorrect
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'bg-white border-black/5 text-on-surface-variant hover:border-black/20'
                            }
                          `}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {showHints && q.hint && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-secondary text-xs font-serif italic"
                    >
                      <Lightbulb className="h-4 w-4" />
                      Hint: {q.hint}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center">
          {!isCompleted ? (
            <button
              onClick={handleCheck}
              className="px-8 py-3 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Check Answers
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-green-600 font-bold">
                <CheckCircle2 className="h-6 w-6" />
                Excellent Work!
              </div>
              <button
                onClick={onBack}
                className="px-8 py-3 rounded-full bg-secondary text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Return to Exercises
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const AcademicPassageExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  onBack, 
  onComplete 
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const getExerciseContent = (lvl: string, num: number, mod: number | string) => {
    // Use the imported content instead of hardcoded allContents
    const allContents = ACADEMIC_PASSAGE_CONTENT;
    
    // Normalize level
    let effectiveLevel = lvl;
    if (lvl.toLowerCase() === 'practicetest' || lvl === 'Practice Test' || lvl === 'Advance section advance test' || lvl === 'advance module test' || lvl === 'the iBT reading mockup test') {
      if (skill.includes("(Easy)")) effectiveLevel = "Easy";
      else if (skill.includes("(Hard)")) effectiveLevel = "Hard";
      else effectiveLevel = "Normal";
    } else {
      effectiveLevel = lvl.charAt(0).toUpperCase() + lvl.slice(1).toLowerCase();
    }

    // Robust selection with fallbacks
    const levelContent = allContents[effectiveLevel] || allContents["Easy"];
    const moduleContent = levelContent[mod] || levelContent[1] || [];
    
    if (moduleContent.length === 0) {
      // Final fallback to a known good passage
      return allContents["Easy"][1][0];
    }

    const baseIndex = (num - 1) % moduleContent.length;
    return moduleContent[baseIndex];
  };

  const content = getExerciseContent(level, exerciseNumber, module);

  const handleCheck = () => {
    setShowFeedback(true);
    const total = content.questions.length;
    const correctCount = content.questions.filter(q => answers[q.id] === q.correct).length;
    const percentage = (correctCount / total) * 100;
    onComplete(percentage);
    if (correctCount === total) setIsCompleted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowFeedback(false);
    setIsCompleted(false);
  };

  const score = content.questions.filter(q => answers[q.id] === q.correct).length;
  const total = content.questions.length;
  const percentage = (score / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setShowHints(!showHints)} 
             className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all border ${
               showHints 
                 ? 'bg-secondary text-white border-secondary shadow-md' 
                 : 'bg-white text-secondary border-secondary/20 hover:border-secondary/40'
             }`}
           >
             <HelpCircle className="h-4 w-4" />
             {showHints ? 'Hints On' : 'Hints Off'}
           </button>
           {showFeedback && (
             <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                 <Trophy className="h-4 w-4" />
                 {score} / {total} Correct
               </div>
               <StarRating percentage={percentage} />
             </div>
           )}
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-black/5 space-y-8">
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
            Module {module} • {skill} • {level} • Exercise {exerciseNumber}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-primary tracking-tight">{content.title}</h2>
            <p className="text-on-surface-variant font-serif italic text-sm">Read the academic passage and answer the questions.</p>
          </div>
        </header>

        <div className="bg-surface p-10 rounded-2xl border border-black/5 font-serif text-lg leading-relaxed text-on-surface-variant shadow-inner">
          {content.text}
        </div>

        <div className="space-y-12">
          {content.questions.map((q, i) => (
            <div key={q.id} className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="h-10 w-10 rounded-2xl bg-primary/5 text-primary flex items-center justify-center font-bold shrink-0 border border-primary/10">
                  {i + 1}
                </div>
                <div className="space-y-6 flex-1">
                  <p className="text-xl font-sans font-bold text-primary leading-tight">{q.question}</p>
                  <div className="grid grid-cols-1 gap-3">
                    {q.options.map((option) => {
                      const isSelected = answers[q.id] === option;
                      const isCorrect = option === q.correct;
                      return (
                        <button
                          key={option}
                          onClick={() => !showFeedback && setAnswers({ ...answers, [q.id]: option })}
                          className={`
                            px-8 py-4 rounded-2xl text-base font-medium border transition-all text-left flex items-center justify-between group
                            ${isSelected 
                              ? showFeedback
                                ? isCorrect
                                  ? 'bg-green-50 border-green-500 text-green-700'
                                  : 'bg-red-50 border-red-500 text-red-700'
                                : 'bg-secondary/5 border-secondary text-secondary shadow-sm'
                              : showFeedback && isCorrect
                                ? 'bg-green-50 border-green-500 text-green-700'
                                : 'bg-white border-black/5 text-on-surface-variant hover:border-black/20'
                            }
                          `}
                        >
                          <span>{option}</span>
                          {isSelected && !showFeedback && <div className="h-2 w-2 rounded-full bg-secondary"></div>}
                        </button>
                      );
                    })}
                  </div>
                  {showHints && q.hint && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-secondary/5 border border-secondary/10 flex items-start gap-3"
                    >
                      <Lightbulb className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      <p className="text-sm text-on-surface-variant font-serif italic">
                        <span className="font-bold text-secondary not-italic uppercase text-[10px] tracking-widest mr-2">Hint:</span>
                        {q.hint}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center">
          {!isCompleted ? (
            <button
              onClick={handleCheck}
              className="px-12 py-4 rounded-full bg-primary text-white font-bold text-base uppercase tracking-widest hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              Check My Answers
            </button>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <p className="text-2xl font-sans font-extrabold text-green-600">Mastery Achieved!</p>
              </div>
              <button
                onClick={onBack}
                className="px-10 py-4 rounded-full bg-secondary text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Return to Exercises
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TerminologyExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  onBack, 
  onComplete 
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const getExerciseContent = (lvl: string, num: number, mod: number | string) => {
    interface TerminologyQuestion {
      id: number;
      word: string;
      options: string[];
      correct: string;
      hint: string;
      sentence?: string;
    }

    interface TerminologyExercise {
      title: string;
      questions: TerminologyQuestion[];
    }

    const module1EasyContents: TerminologyExercise[] = [
      {
        title: "Workplace Terminology",
        questions: [
          { id: 1, word: "Commute", options: ["Travel to work", "Work from home", "Take a break"], correct: "Travel to work", sentence: "Many people in the city have a long daily **commute** to work.", hint: "The journey between one's home and place of work." },
          { id: 2, word: "Budget", options: ["Financial plan", "Shopping list", "Bank account"], correct: "Financial plan", sentence: "We need to plan our monthly **budget** carefully to save money.", hint: "An estimate of income and expenditure for a set period." },
          { id: 3, word: "Promotion", options: ["Higher position", "Lower pay", "New office"], correct: "Higher position", sentence: "After years of hard work, she finally received a **promotion** to manager.", hint: "Advancement to a higher rank or position." },
          { id: 4, word: "Resignation", options: ["Quitting", "Hiring", "Meeting"], correct: "Quitting", sentence: "The employee handed in his **resignation** to pursue a different career path.", hint: "An act of retiring or giving up a position." },
          { id: 5, word: "Overtime", options: ["Extra hours", "Lunch break", "Holiday"], correct: "Extra hours", sentence: "I had to work three hours of **overtime** to finish the report on time.", hint: "Time worked in addition to one's normal working hours." }
        ]
      },
      {
        title: "Time Management",
        questions: [
          { id: 1, word: "Deadline", options: ["Finish time", "Start time", "Break time"], correct: "Finish time", sentence: "The project **deadline** is next Friday, so we must work quickly.", hint: "The latest time or date by which something should be completed." },
          { id: 2, word: "Schedule", options: ["Timetable", "Result", "Meeting"], correct: "Timetable", sentence: "I have a very busy **schedule** this week with many appointments.", hint: "A plan for carrying out a process or procedure." },
          { id: 3, word: "Prioritize", options: ["Rank by importance", "Ignore", "Delay"], correct: "Rank by importance", sentence: "You should **prioritize** your most urgent tasks every morning.", hint: "Designate or treat something as more important than other things." },
          { id: 4, word: "Procrastinate", options: ["Delay action", "Work fast", "Plan ahead"], correct: "Delay action", sentence: "Try not to **procrastinate** when you have a difficult assignment.", hint: "Delay or postpone action; put off doing something." },
          { id: 5, word: "Efficiency", options: ["Productivity", "Laziness", "Speed"], correct: "Productivity", sentence: "The new software improved the team's **efficiency** significantly.", hint: "The state or quality of being efficient; achieving maximum productivity." }
        ]
      },
      {
        title: "Professional Relationships",
        questions: [
          { id: 1, word: "Colleague", options: ["Co-worker", "Boss", "Client"], correct: "Co-worker", sentence: "I'm going to lunch with a **colleague** from the marketing department.", hint: "A person with whom one works in a profession or business." },
          { id: 2, word: "Feedback", options: ["Evaluation", "Food", "Noise"], correct: "Evaluation", sentence: "The manager gave me positive **feedback** on my presentation.", hint: "Information about reactions to a product or a person's performance." },
          { id: 3, word: "Mentor", options: ["Experienced advisor", "New employee", "Competitor"], correct: "Experienced advisor", sentence: "My **mentor** provided valuable guidance during my first year at the company.", hint: "An experienced and trusted adviser." },
          { id: 4, word: "Networking", options: ["Making connections", "Fixing computers", "Watching TV"], correct: "Making connections", sentence: "Professional **networking** events are great for finding new opportunities.", hint: "The action or process of interacting with others to exchange information and develop professional or social contacts." },
          { id: 5, word: "Conflict", options: ["Disagreement", "Agreement", "Meeting"], correct: "Disagreement", sentence: "The team had a small **conflict** regarding the project's direction.", hint: "A serious disagreement or argument." }
        ]
      },
      {
        title: "Environmental Concepts",
        questions: [
          { id: 1, word: "Sustainable", options: ["Eco-friendly", "Expensive", "Temporary"], correct: "Eco-friendly", sentence: "Using solar energy is a more **sustainable** way to power our homes.", hint: "Able to be maintained at a certain rate or level." },
          { id: 2, word: "Innovation", options: ["New idea", "Old tradition", "Mistake"], correct: "New idea", sentence: "The company is known for its constant **innovation** in technology.", hint: "A new method, idea, product, etc." },
          { id: 3, word: "Renewable", options: ["Infinite supply", "Limited supply", "Broken"], correct: "Infinite supply", sentence: "Wind and sun are **renewable** sources of energy.", hint: "Not depleted when used." },
          { id: 4, word: "Conservation", options: ["Protection", "Destruction", "Usage"], correct: "Protection", sentence: "**Conservation** of water is essential during the dry summer months.", hint: "Prevention of wasteful use of a resource." },
          { id: 5, word: "Ecosystem", options: ["Biological community", "Weather pattern", "Building"], correct: "Biological community", sentence: "Pollution can damage the delicate **ecosystem** of the lake.", hint: "A biological community of interacting organisms and their physical environment." }
        ]
      }
    ];

    const module1NormalContents: TerminologyExercise[] = [
      {
        title: "Academic Analysis",
        questions: [
          { id: 1, word: "Analyze", options: ["Examine in detail", "Ignore", "Create", "Simplify", "Repeat"], correct: "Examine in detail", sentence: "The researchers had to analyze the data carefully to find patterns.", hint: "To study something closely and systematically." },
          { id: 2, word: "Evaluate", options: ["Assess", "Destroy", "Copy", "Ignore", "Create"], correct: "Assess", sentence: "We need to evaluate the effectiveness of the new policy.", hint: "To form an idea of the amount, number, or value of something." },
          { id: 3, word: "Illustrate", options: ["Explain with examples", "Hide", "Simplify", "Repeat", "Expand"], correct: "Explain with examples", sentence: "The professor used a diagram to illustrate the complex theory.", hint: "To make something clear by using examples, charts, or pictures." },
          { id: 4, word: "Interpret", options: ["Explain meaning", "Ignore", "Translate", "Copy", "Destroy"], correct: "Explain meaning", sentence: "It is difficult to interpret the meaning of these ancient symbols.", hint: "Explain the meaning of (information, words, or actions)." },
          { id: 5, word: "Summarize", options: ["Give brief version", "Expand", "Repeat", "Simplify", "Ignore"], correct: "Give brief version", sentence: "Can you summarize the main points of the article in one paragraph?", hint: "Give a brief statement of the main points of (something)." }
        ]
      },
      {
        title: "Scientific Inquiry",
        questions: [
          { id: 1, word: "Hypothesis", options: ["Proposed explanation", "Fact", "Theory", "Conclusion", "Observation"], correct: "Proposed explanation", sentence: "The scientist formulated a hypothesis to explain the phenomenon.", hint: "A starting point for further investigation." },
          { id: 2, word: "Empirical", options: ["Based on observation", "Based on logic", "Based on tradition", "Theoretical", "Random"], correct: "Based on observation", sentence: "The study provided empirical evidence to support the claim.", hint: "Verified by experience rather than theory." },
          { id: 3, word: "Synthesis", options: ["Combination", "Breakdown", "Analysis", "Separation", "Destruction"], correct: "Combination", sentence: "The report is a synthesis of several different research papers.", hint: "The production of chemical compounds by reaction from simpler materials." },
          { id: 4, word: "Variable", options: ["Changing factor", "Constant", "Result", "Cause", "Effect"], correct: "Changing factor", sentence: "Temperature is a key variable in this chemical reaction.", hint: "An element, feature, or factor that is liable to vary or change." },
          { id: 5, word: "Correlation", options: ["Relationship", "Cause", "Difference", "Similarity", "Conflict"], correct: "Relationship", sentence: "There is a strong correlation between exercise and health.", hint: "A mutual relationship or connection between two or more things." }
        ]
      },
      {
        title: "Academic Perspectives",
        questions: [
          { id: 1, word: "Proponent", options: ["Supporter", "Opponent", "Observer", "Critic", "Leader"], correct: "Supporter", sentence: "He is a leading proponent of renewable energy.", hint: "Someone who argues in favor of something." },
          { id: 2, word: "Ambiguous", options: ["Uncertain", "Clear", "Large", "Small", "Fast"], correct: "Uncertain", sentence: "The instructions were ambiguous, leading to confusion among the students.", hint: "Having more than one possible meaning." },
          { id: 3, word: "Pragmatic", options: ["Practical", "Idealistic", "Theoretical", "Emotional", "Random"], correct: "Practical", sentence: "We need to take a pragmatic approach to solving this problem.", hint: "Dealing with things sensibly and realistically." },
          { id: 4, word: "Abstract", options: ["Theoretical", "Concrete", "Simple", "Complex", "Real"], correct: "Theoretical", sentence: "The concept of justice is often discussed in abstract terms.", hint: "Existing in thought or as an idea but not having a physical or concrete existence." },
          { id: 5, word: "Concrete", options: ["Specific/Real", "Vague", "Soft", "Hard", "Abstract"], correct: "Specific/Real", sentence: "We need concrete examples to understand the theory better.", hint: "Existing in a material or physical form; real or solid; not abstract." }
        ]
      }
    ];

    const module1HardContents: TerminologyExercise[] = [
      {
        title: "Complex Academic Concepts",
        questions: [
          { id: 1, word: "Ephemeral", options: ["Short-lived", "Lasting", "Fragile", "Strong", "Fast"], correct: "Short-lived", sentence: "The beauty of the sunset is ephemeral, lasting only a few minutes.", hint: "Lasting for a very short time." },
          { id: 2, word: "Ubiquitous", options: ["Everywhere", "Rare", "Hidden", "Common", "Unique"], correct: "Everywhere", sentence: "Smartphones have become ubiquitous in modern society.", hint: "Present, appearing, or found everywhere." },
          { id: 3, word: "Mitigate", options: ["Alleviate", "Worsen", "Ignore", "Increase", "Decrease"], correct: "Alleviate", sentence: "The government is taking steps to mitigate the effects of the drought.", hint: "Make less severe, serious, or painful." },
          { id: 4, word: "Paradigm", options: ["Pattern/Model", "Example", "Exception", "Rule", "Theory"], correct: "Pattern/Model", sentence: "The discovery of DNA led to a new paradigm in biological research.", hint: "A typical example or pattern of something." },
          { id: 5, word: "Inherent", options: ["Intrinsic", "External", "Added", "Temporary", "Optional"], correct: "Intrinsic", sentence: "There are inherent risks involved in any new business venture.", hint: "Existing in something as a permanent, essential, or characteristic attribute." }
        ]
      },
      {
        title: "Theoretical Nuances",
        questions: [
          { id: 1, word: "Entropy", options: ["Disorder", "Order", "Energy", "Heat", "Cold"], correct: "Disorder", sentence: "The second law of thermodynamics states that entropy always increases.", hint: "A thermodynamic quantity representing the unavailability of a system's thermal energy." },
          { id: 2, word: "Cognitive", options: ["Mental", "Physical", "Social", "Emotional", "Biological"], correct: "Mental", sentence: "Cognitive development is a key area of psychological research.", hint: "Relating to the mental action or process of acquiring knowledge." },
          { id: 3, word: "Empirical", options: ["Observational", "Theoretical", "Traditional", "Logical", "Random"], correct: "Observational", sentence: "The theory is supported by a large body of empirical evidence.", hint: "Based on, concerned with, or verifiable by observation or experience." },
          { id: 4, word: "Correlation", options: ["Relationship", "Cause", "Difference", "Similarity", "Conflict"], correct: "Relationship", sentence: "The study found a positive correlation between income and education.", hint: "A mutual relationship or connection between two or more things." },
          { id: 5, word: "Hypothesis", options: ["Educated guess", "Proven fact", "Final conclusion", "Observation", "Theory"], correct: "Educated guess", sentence: "The researchers tested their hypothesis through a series of experiments.", hint: "A supposition or proposed explanation made on the basis of limited evidence." }
        ]
      }
    ];

    const module1AdvancedContents: TerminologyExercise[] = [
      {
        title: "Advanced Academic Expressions",
        questions: [
          { id: 1, word: "Anomalous", options: ["Abnormal", "Normal", "Frequent", "Rare", "Common"], correct: "Abnormal", sentence: "The results of the experiment were anomalous and required further investigation.", hint: "Deviating from what is standard, normal, or expected." },
          { id: 2, word: "Capricious", options: ["Unpredictable", "Steady", "Kind", "Cruel", "Fast"], correct: "Unpredictable", sentence: "The weather in the mountains can be capricious and change quickly.", hint: "Given to sudden and unaccountable changes of mood or behavior." },
          { id: 3, word: "Dichotomy", options: ["Division into two", "Unity", "Similarity", "Difference", "Conflict"], correct: "Division into two", sentence: "There is a clear dichotomy between the two different approaches.", hint: "A division or contrast between two things that are or are represented as being opposed or entirely different." },
          { id: 4, word: "Exacerbate", options: ["Make worse", "Improve", "Calm", "Increase", "Decrease"], correct: "Make worse", sentence: "The new policy only served to exacerbate the existing problems.", hint: "Make (a problem, bad situation, or negative feeling) worse." },
          { id: 5, word: "Juxtaposition", options: ["Side-by-side comparison", "Separation", "Harmony", "Conflict", "Unity"], correct: "Side-by-side comparison", sentence: "The juxtaposition of the two different styles created a striking effect.", hint: "The fact of two things being seen or placed close together with contrasting effect." }
        ]
      },
      {
        title: "iBT TOEFL High-Level Terminology",
        questions: [
          { id: 1, word: "Obfuscate", options: ["Confuse/Obscure", "Clarify", "Simplify", "Explain", "Reveal"], correct: "Confuse/Obscure", sentence: "The politician's speech was designed to obfuscate the real issues.", hint: "To deliberately make something unclear or difficult to understand." },
          { id: 2, word: "Pervasive", options: ["Widespread", "Rare", "Hidden", "Limited", "Temporary"], correct: "Widespread", sentence: "The influence of social media is pervasive in modern culture.", hint: "Spreading widely throughout an area or a group of people." },
          { id: 3, word: "Reciprocal", options: ["Mutual", "One-sided", "Opposite", "Different", "Similar"], correct: "Mutual", sentence: "The two countries signed a reciprocal trade agreement.", hint: "Given, felt, or done in return." },
          { id: 4, word: "Sanguine", options: ["Optimistic", "Pessimistic", "Sad", "Angry", "Calm"], correct: "Optimistic", sentence: "Despite the challenges, she remained sanguine about the future.", hint: "Optimistic or positive, especially in an apparently bad or difficult situation." },
          { id: 5, word: "Tacit", options: ["Implied", "Explicit", "Clear", "Hidden", "Silent"], correct: "Implied", sentence: "There was a tacit agreement between the two parties.", hint: "Understood or implied without being stated." }
        ]
      }
    ];

    const module2EasyContents: TerminologyExercise[] = [
      {
        title: "Corporate Communication",
        questions: [
          { id: 1, word: "Liaison", options: ["Communication link", "Manager", "Client"], correct: "Communication link", sentence: "She acts as a **liaison** between the marketing and sales departments.", hint: "A person who acts as a link to assist communication or cooperation between people or organizations." },
          { id: 2, word: "Consensus", options: ["General agreement", "Disagreement", "Voting"], correct: "General agreement", sentence: "The team reached a **consensus** after a long discussion.", hint: "A general agreement." },
          { id: 3, word: "Incentive", options: ["Motivation", "Punishment", "Task"], correct: "Motivation", sentence: "The company offered a bonus as an **incentive** for high performance.", hint: "A thing that motivates or encourages someone to do something." },
          { id: 4, word: "Facilitate", options: ["Make easier", "Make harder", "Stop"], correct: "Make easier", sentence: "The new software will **facilitate** better project management.", hint: "Make (an action or process) easy or easier." },
          { id: 5, word: "Objective", options: ["Goal", "Opinion", "Problem"], correct: "Goal", sentence: "Our primary **objective** is to increase customer satisfaction.", hint: "A thing aimed at or sought; a goal." }
        ]
      },
      {
        title: "Financial Literacy",
        questions: [
          { id: 1, word: "Revenue", options: ["Income", "Expense", "Profit"], correct: "Income", sentence: "The company's annual **revenue** exceeded expectations.", hint: "Income, especially when of a company or organization and of a substantial nature." },
          { id: 2, word: "Liability", options: ["Debt/Responsibility", "Asset", "Profit"], correct: "Debt/Responsibility", sentence: "The company is working to reduce its long-term **liability**.", hint: "The state of being responsible for something, especially by law." },
          { id: 3, word: "Equity", options: ["Ownership value", "Debt", "Cash"], correct: "Ownership value", sentence: "The founders retained a significant amount of **equity** in the startup.", hint: "The value of the shares issued by a company." },
          { id: 4, word: "Inflation", options: ["Price increase", "Price decrease", "Stability"], correct: "Price increase", sentence: "High **inflation** can erode the purchasing power of consumers.", hint: "A general increase in prices and fall in the purchasing value of money." },
          { id: 5, word: "Audit", options: ["Official inspection", "Meeting", "Payment"], correct: "Official inspection", sentence: "The firm underwent a thorough financial **audit** last month.", hint: "An official inspection of an individual's or organization's accounts." }
        ]
      }
    ];

    const module2NormalContents: TerminologyExercise[] = [
      {
        title: "Advanced Academic Inquiry",
        questions: [
          { id: 1, word: "Corroborate", options: ["Confirm", "Contradict", "Ignore", "Simplify", "Repeat"], correct: "Confirm", sentence: "The witness was able to **corroborate** the suspect's alibi.", hint: "Confirm or give support to (a statement, theory, or finding)." },
          { id: 2, word: "Delineate", options: ["Describe precisely", "Blur", "Expand", "Ignore", "Create"], correct: "Describe precisely", sentence: "The report clearly **delineates** the steps needed for the project.", hint: "Describe or portray (something) precisely." },
          { id: 3, word: "Explicate", options: ["Analyze in detail", "Simplify", "Hide", "Repeat", "Expand"], correct: "Analyze in detail", sentence: "The philosopher attempted to **explicate** the complex concept of justice.", hint: "Analyze and develop (an idea or principle) in detail." },
          { id: 4, word: "Inherent", options: ["Intrinsic", "External", "Added", "Temporary", "Optional"], correct: "Intrinsic", sentence: "There are **inherent** risks in any scientific experiment.", hint: "Existing in something as a permanent, essential, or characteristic attribute." },
          { id: 5, word: "Nuance", options: ["Subtle difference", "Large gap", "Similarity", "Conflict", "Unity"], correct: "Subtle difference", sentence: "The translator captured every **nuance** of the original text.", hint: "A subtle difference in or shade of meaning, expression, or sound." }
        ]
      },
      {
        title: "Scientific Methodology",
        questions: [
          { id: 1, word: "Quantitative", options: ["Measured by quantity", "Measured by quality", "Random", "Theoretical", "Logical"], correct: "Measured by quantity", sentence: "The research involved a **quantitative** analysis of the survey results.", hint: "Relating to, measuring, or measured by the quantity of something rather than its quality." },
          { id: 2, word: "Qualitative", options: ["Measured by quality", "Measured by quantity", "Random", "Theoretical", "Logical"], correct: "Measured by quality", sentence: "The study used **qualitative** interviews to gather in-depth data.", hint: "Relating to, measuring, or measured by the quality of something rather than its quantity." },
          { id: 3, word: "Validity", options: ["Accuracy/Truth", "Speed", "Size", "Complexity", "Cost"], correct: "Accuracy/Truth", sentence: "The researchers questioned the **validity** of the initial findings.", hint: "The quality of being logically or factually sound; soundness or cogency." },
          { id: 4, word: "Reliability", options: ["Consistency", "Speed", "Size", "Complexity", "Cost"], correct: "Consistency", sentence: "The test's **reliability** was confirmed through multiple trials.", hint: "The quality of being trustworthy or of performing consistently well." },
          { id: 5, word: "Causality", options: ["Cause and effect", "Randomness", "Correlation", "Similarity", "Conflict"], correct: "Cause and effect", sentence: "It is difficult to establish **causality** in complex social systems.", hint: "The relationship between cause and effect." }
        ]
      }
    ];

    const module2HardContents: TerminologyExercise[] = [
      {
        title: "Sophisticated Academic Discourse",
        questions: [
          { id: 1, word: "Axiomatic", options: ["Self-evident", "Doubtful", "Complex", "Simple", "Random"], correct: "Self-evident", sentence: "It is **axiomatic** that the whole is greater than the part.", hint: "Self-evident or unquestionable." },
          { id: 2, word: "Cognizant", options: ["Aware", "Ignorant", "Uncertain", "Certain", "Fast"], correct: "Aware", sentence: "The committee was **cognizant** of the potential challenges.", hint: "Having knowledge or being aware of." },
          { id: 3, word: "Eschew", options: ["Deliberately avoid", "Embrace", "Ignore", "Increase", "Decrease"], correct: "Deliberately avoid", sentence: "The writer chose to **eschew** traditional narrative structures.", hint: "Deliberately avoid using; abstain from." },
          { id: 4, word: "Inimical", options: ["Harmful/Hostile", "Friendly", "Neutral", "Helpful", "Kind"], correct: "Harmful/Hostile", sentence: "The new regulations were **inimical** to small business growth.", hint: "Tending to obstruct or harm." },
          { id: 5, word: "Paucity", options: ["Scarcity", "Abundance", "Wealth", "Power", "Size"], correct: "Scarcity", sentence: "There is a **paucity** of evidence to support the claim.", hint: "The presence of something only in small or insufficient quantities or amounts; scarcity." }
        ]
      }
    ];

    const module2AdvancedContents: TerminologyExercise[] = [
      {
        title: "High-Level iBT Terminology",
        questions: [
          { id: 1, word: "Equivocal", options: ["Ambiguous", "Clear", "Certain", "Uncertain", "Fast"], correct: "Ambiguous", sentence: "The results of the study were **equivocal**, leading to further debate.", hint: "Open to more than one interpretation; ambiguous." },
          { id: 2, word: "Inexorable", options: ["Unstoppable", "Weak", "Slow", "Fast", "Kind"], correct: "Unstoppable", sentence: "The **inexorable** march of time affects us all.", hint: "Impossible to stop or prevent." },
          { id: 3, word: "Magnanimous", options: ["Generous/Forgiving", "Selfish", "Cruel", "Kind", "Fast"], correct: "Generous/Forgiving", sentence: "The victor was **magnanimous** in his treatment of the defeated.", hint: "Generous or forgiving, especially toward a rival or less powerful person." },
          { id: 4, word: "Obsequious", options: ["Servile/Fawning", "Arrogant", "Kind", "Cruel", "Fast"], correct: "Servile/Fawning", sentence: "The waiter's **obsequious** behavior was quite off-putting.", hint: "Obedient or attentive to an excessive or servile degree." },
          { id: 5, word: "Pernicious", options: ["Harmful", "Helpful", "Kind", "Cruel", "Fast"], correct: "Harmful", sentence: "The **pernicious** effects of pollution are becoming increasingly evident.", hint: "Having a harmful effect, especially in a gradual or subtle way." }
        ]
      }
    ];

    let contents: TerminologyExercise[] = [];
    const lowerLvl = lvl.toLowerCase();

    if (mod === 1) {
      if (lowerLvl === 'easy') contents = module1EasyContents;
      else if (lowerLvl === 'normal') contents = module1NormalContents;
      else if (lowerLvl === 'hard') contents = module1HardContents;
      else if (lowerLvl === 'advanced') contents = module1AdvancedContents;
    } else {
      if (lowerLvl === 'easy') contents = module2EasyContents;
      else if (lowerLvl === 'normal') contents = module2NormalContents;
      else if (lowerLvl === 'hard') contents = module2HardContents;
      else if (lowerLvl === 'advanced') contents = module2AdvancedContents;
    }

    // If advanced and exercise number >= 5, we can inject even harder iBT words
    if (lowerLvl === 'advanced' && num >= 5) {
      const ibtExercises: TerminologyExercise[] = [
        {
          title: "Extreme iBT Academic Terminology I",
          questions: [
            { id: 1, word: "Abnegation", options: ["Self-denial", "Acceptance", "Greed", "Power", "Wealth"], correct: "Self-denial", sentence: "The monk's life was one of complete abnegation of worldly pleasures.", hint: "The act of renouncing or rejecting something." },
            { id: 2, word: "Bellicose", options: ["Aggressive", "Peaceful", "Kind", "Quiet", "Slow"], correct: "Aggressive", sentence: "The nation's bellicose rhetoric led to increased tensions with its neighbors.", hint: "Demonstrating aggression and willingness to fight." },
            { id: 3, word: "Chicanery", options: ["Deception", "Honesty", "Truth", "Clarity", "Simplicity"], correct: "Deception", sentence: "The lawyer was accused of using chicanery to win the case.", hint: "The use of trickery to achieve a political, financial, or legal purpose." },
            { id: 4, word: "Diaphanous", options: ["Translucent", "Opaque", "Solid", "Heavy", "Dark"], correct: "Translucent", sentence: "The bride wore a diaphanous veil that floated in the breeze.", hint: "Light, delicate, and translucent." },
            { id: 5, word: "Ephemeral", options: ["Short-lived", "Eternal", "Constant", "Steady", "Slow"], correct: "Short-lived", sentence: "The joy of victory was ephemeral, as the team lost the next game.", hint: "Lasting for a very short time." }
          ]
        },
        {
          title: "Extreme iBT Academic Terminology II",
          questions: [
            { id: 1, word: "Fastidious", options: ["Meticulous", "Careless", "Lazy", "Fast", "Slow"], correct: "Meticulous", sentence: "He is fastidious about his appearance, always wearing a perfectly tailored suit.", hint: "Very attentive to and concerned about accuracy and detail." },
            { id: 2, word: "Garrulous", options: ["Talkative", "Quiet", "Shy", "Angry", "Sad"], correct: "Talkative", sentence: "The garrulous old man told stories for hours to anyone who would listen.", hint: "Excessively talkative, especially on trivial matters." },
            { id: 3, word: "Hegemony", options: ["Dominance", "Equality", "Weakness", "Unity", "Peace"], correct: "Dominance", sentence: "The country sought to maintain its hegemony over the region.", hint: "Leadership or dominance, especially by one country or social group over others." },
            { id: 4, word: "Inchoate", options: ["Just beginning", "Finished", "Old", "Large", "Small"], correct: "Just beginning", sentence: "The project is still in an inchoate stage and requires much more work.", hint: "Just begun and so not fully formed or developed." },
            { id: 5, word: "Jejune", options: ["Naive/Simplistic", "Complex", "Wise", "Old", "Deep"], correct: "Naive/Simplistic", sentence: "The critic dismissed the novel as jejune and lacking in depth.", hint: "Naive, simplistic, and superficial." }
          ]
        }
      ];
      const ibtIndex = (num - 5) % ibtExercises.length;
      return ibtExercises[ibtIndex];
    }

    const baseIndex = (num - 1) % (contents.length || 1);
    return contents[baseIndex] || module1NormalContents[0];
  };

  const content = getExerciseContent(level, exerciseNumber, module);

  const handleCheck = () => {
    setShowFeedback(true);
    const total = content.questions.length;
    const correctCount = content.questions.filter(q => answers[q.id] === q.correct).length;
    const percentage = (correctCount / total) * 100;
    onComplete(percentage);
    if (correctCount === total) setIsCompleted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowFeedback(false);
    setIsCompleted(false);
  };

  const score = content.questions.filter(q => answers[q.id] === q.correct).length;
  const total = content.questions.length;
  const percentage = (score / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setShowHints(!showHints)} 
             className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all border ${
               showHints 
                 ? 'bg-secondary text-white border-secondary shadow-md' 
                 : 'bg-white text-secondary border-secondary/20 hover:border-secondary/40'
             }`}
           >
             <HelpCircle className="h-4 w-4" />
             {showHints ? 'Hints On' : 'Hints Off'}
           </button>
           {showFeedback && (
             <div className="flex flex-col items-end gap-1">
               <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                 <Trophy className="h-4 w-4" />
                 {score} / {total} Correct
               </div>
               <StarRating percentage={percentage} />
             </div>
           )}
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-black/5 space-y-8">
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
            Module {module} • {skill} • {level} • Exercise {exerciseNumber}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-primary tracking-tight">{content.title}</h2>
            <p className="text-on-surface-variant font-serif italic text-sm">
              {content.questions[0]?.sentence 
                ? "Choose the correct meaning for the highlighted word in each sentence." 
                : "Choose the correct meaning or synonym for each word."}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {content.questions.map((q, i) => (
            <div key={q.id} className="p-8 rounded-3xl bg-surface border border-black/5 space-y-6 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="text-2xl font-sans font-bold text-primary tracking-tight">{q.word}</h3>
                  </div>
                  {q.sentence && (
                    <div className="p-6 rounded-2xl bg-surface-container-low border border-black/5">
                      <p className="text-lg font-serif text-on-surface-variant leading-relaxed">
                        {q.sentence.split(new RegExp(`(${q.word})`, 'gi')).map((part, index) => 
                          part.toLowerCase() === q.word.toLowerCase() 
                            ? <span key={index} className="text-secondary font-bold underline decoration-secondary/30 underline-offset-4">{part}</span> 
                            : part
                        )}
                      </p>
                    </div>
                  )}
                </div>
                {showHints && q.hint && (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
                    <Lightbulb className="h-3 w-3" />
                    Hint Available
                  </div>
                )}
              </div>

              {showHints && q.hint && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm text-on-surface-variant font-serif italic bg-white/50 p-3 rounded-xl border border-black/5"
                >
                  {q.hint}
                </motion.p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {q.options.map((option) => {
                  const isSelected = answers[q.id] === option;
                  const isCorrect = option === q.correct;
                  return (
                    <button
                      key={option}
                      onClick={() => {
                        if (!showFeedback) {
                          setAnswers({ ...answers, [q.id]: option });
                          // Trigger mascot reaction for direct feedback exercises
                          window.dispatchEvent(new CustomEvent('mascot-reaction', { 
                            detail: { type: option === q.correct ? 'correct' : 'incorrect' } 
                          }));
                        }
                      }}
                      className={`
                        px-6 py-4 rounded-2xl text-sm font-bold transition-all border
                        ${isSelected 
                          ? showFeedback
                            ? isCorrect
                              ? 'bg-green-50 border-green-500 text-green-700'
                              : 'bg-red-50 border-red-500 text-red-700'
                            : 'bg-secondary text-white border-secondary shadow-md'
                          : showFeedback && isCorrect
                            ? 'bg-green-50 border-green-500 text-green-700'
                            : 'bg-white border-black/5 text-on-surface-variant hover:border-black/20'
                        }
                      `}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center">
          {!isCompleted ? (
            <button
              onClick={handleCheck}
              className="px-12 py-4 rounded-full bg-primary text-white font-bold text-base uppercase tracking-widest hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              Check My Answers
            </button>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <p className="text-2xl font-sans font-extrabold text-green-600">Terminology Mastered!</p>
              </div>
              <button
                onClick={onBack}
                className="px-10 py-4 rounded-full bg-secondary text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Return to Exercises
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const GenericReadingExercise = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber, 
  contentSource,
  onBack, 
  onComplete 
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber: number, 
  contentSource: any,
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepScores, setStepScores] = useState<boolean[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [currentErrorLogId, setCurrentErrorLogId] = useState<string | null>(null);
  const [selectedErrorTags, setSelectedErrorTags] = useState<ErrorTagCategory[]>(['Careless']);
  const [userErrorNote, setUserErrorNote] = useState('');
  const [tagSavedNotice, setTagSavedNotice] = useState(false);
  const [adminUpdateTrigger, setAdminUpdateTrigger] = useState(0);

  useEffect(() => {
    const handleUpdate = () => setAdminUpdateTrigger(prev => prev + 1);
    window.addEventListener('toefl-admin-reading-updated', handleUpdate);
    window.addEventListener('toefl-admin-settings-changed', handleUpdate);
    return () => {
      window.removeEventListener('toefl-admin-reading-updated', handleUpdate);
      window.removeEventListener('toefl-admin-settings-changed', handleUpdate);
    };
  }, []);

  const exerciseSteps = useMemo(() => {
    const cycleEdition = monthlyPracticeEngine.getActiveEdition();
    const cycleSeed = cycleEdition.cycleSeed;
    const cycleOffset = (cycleSeed - 1) * 20;
    const isM2 = module === 2 || module === '2' || module === 'M2' || module === 'm2';
    const mOffset = isM2 ? 10 : 0;
    const cShift = (cycleSeed - 2) * 5;
    const isEasy = (level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()) === 'Easy';

    // 0. Full Administration Authority Check:
    // Check if the administrator has created custom questions, modified stock questions, or disabled questions
    const adminActiveReading = adminReadingService.getActiveQuestionsForStudent(skill, level);
    const hasAdminOverrides = 
      adminReadingService.getCustomQuestions().some(q => q.skill.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(q.skill.toLowerCase())) ||
      Object.keys(adminReadingService.getModifiedOverrides()).length > 0 ||
      adminReadingService.getDisabledIds().length > 0;

    if (hasAdminOverrides && adminActiveReading.length > 0) {
      const qIndex = Math.abs((exerciseNumber - 1 + mOffset + cShift) % adminActiveReading.length);
      const qItem = adminActiveReading[qIndex];
      const correctText = typeof qItem.correct === 'number'
        ? qItem.options[qItem.correct] || qItem.options[0]
        : qItem.correct;

      return [{
        title: qItem.title,
        passage: qItem.passage,
        question: qItem.question,
        options: qItem.options,
        correct: correctText,
        hint: qItem.hint || "Focus on the explicit context provided in the passage.",
        explanation: qItem.explanation || "Directly confirmed by the passage evidence.",
        highlight: qItem.highlight,
        skillTested: qItem.skill || skill
      }];
    }

    // Check for legacy admin custom passages
    const customPassages = adminService.getCustomPassages().filter(p => p.active);

    // Daily Life reading: Admin custom override or cycle-specific passages
    if (skill === "Read in Daily Life") {
      const customDL = customPassages.find(p => p.category === 'dailyLife' && (p.level.toLowerCase() === level.toLowerCase()));
      if (customDL) {
        return [{
          title: customDL.title,
          passage: customDL.passage,
          question: customDL.question,
          options: customDL.options,
          correct: customDL.correct,
          hint: "Focus on the explicit conditions or deadlines specified in the announcement.",
          explanation: customDL.explanation || "Directly confirmed by the passage statement.",
          skillTested: "Read in Daily Life"
        }];
      }

      if (isEasy) {
        return getEasyCycleDailyLife(exerciseNumber, isM2, cycleSeed);
      }
      if (cycleSeed >= 2 && CYCLE2_DAILY_LIFE_PASSAGES.length > 0) {
        const c2Index = (exerciseNumber - 1 + mOffset + cShift) % CYCLE2_DAILY_LIFE_PASSAGES.length;
        const c2Item = CYCLE2_DAILY_LIFE_PASSAGES[c2Index >= 0 ? c2Index : 0];
        return [{
          title: c2Item.title,
          passage: c2Item.text,
          question: c2Item.question,
          options: c2Item.options,
          correct: c2Item.correct,
          hint: c2Item.hint,
          explanation: c2Item.explanation,
          highlight: c2Item.highlight,
          skillTested: "Read in Daily Life"
        }];
      }
      return getDailyLifeExerciseSteps(level, exerciseNumber, cycleOffset);
    }

    // Academic Passages: Admin custom override or cycle-specific passages
    if (skill.includes("Read an Academic Passage") || skill.includes("Read Academic Passage")) {
      const customAcad = customPassages.find(p => p.category === 'academic' && (p.level.toLowerCase() === level.toLowerCase()));
      if (customAcad) {
        return [{
          title: customAcad.title,
          passage: customAcad.passage,
          question: customAcad.question,
          options: customAcad.options,
          correct: customAcad.correct,
          hint: "Identify the primary conceptual relationship discussed in the text.",
          explanation: customAcad.explanation || "Supported by the evidence in the academic excerpt.",
          skillTested: "Read an Academic Passage"
        }];
      }

      if (isEasy) {
        return getEasyCycleAcademic(exerciseNumber, isM2, cycleSeed);
      }
      if (cycleSeed >= 2 && CYCLE2_ACADEMIC_PASSAGES.length > 0) {
        const passageIdx = (exerciseNumber - 1 + (isM2 ? 2 : 0) + (cycleSeed - 2) * 2) % CYCLE2_ACADEMIC_PASSAGES.length;
        const selectedPassage = CYCLE2_ACADEMIC_PASSAGES[passageIdx >= 0 ? passageIdx : 0];
        return selectedPassage.questions.map(q => ({
          title: selectedPassage.title,
          passage: selectedPassage.text,
          question: q.question,
          options: q.options,
          correct: q.correct,
          hint: q.hint,
          explanation: q.explanation,
          highlight: q.highlight,
          skillTested: q.skillTested || skill
        }));
      }
    }

    // Sub-skills in Cycle 2: Non-Easy levels get rigorous university texts
    if (!isEasy) {
      const subOffset = (exerciseNumber - 1 + (isM2 ? 5 : 0) + (cycleSeed - 2) * 3);
      const getSubIndex = (len: number) => {
        const idx = subOffset % len;
        return idx >= 0 ? idx : idx + len;
      };

      if (cycleSeed >= 2 && (skill === "Terminology" || skill.includes("Terminology")) && CYCLE2_TERMINOLOGY_CONTENT.length > 0) {
        const item = CYCLE2_TERMINOLOGY_CONTENT[getSubIndex(CYCLE2_TERMINOLOGY_CONTENT.length)];
        return [{
          title: item.title,
          passage: item.passage,
          question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Identify the precise contextual meaning within the academic argument.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Terminology in Context"
      }];
    }

    if (cycleSeed >= 2 && skill === "Factual Information" && CYCLE2_FACTUAL_CONTENT.length > 0) {
      const item = CYCLE2_FACTUAL_CONTENT[getSubIndex(CYCLE2_FACTUAL_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Scan for explicit textual proof corresponding to the key query terms.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Factual Information"
      }];
    }

    if (cycleSeed >= 2 && skill === "Negative Factual Information" && CYCLE2_NEGATIVE_FACTUAL_CONTENT.length > 0) {
      const item = CYCLE2_NEGATIVE_FACTUAL_CONTENT[getSubIndex(CYCLE2_NEGATIVE_FACTUAL_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Eliminate the three statements corroborated by the text to isolate the unsupported fact.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Negative Factual Information"
      }];
    }

    if (cycleSeed >= 2 && skill === "Rhetorical Purpose" && CYCLE2_RHETORICAL_CONTENT.length > 0) {
      const item = CYCLE2_RHETORICAL_CONTENT[getSubIndex(CYCLE2_RHETORICAL_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Determine why the author chose to include this specific detail or example.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Rhetorical Purpose"
      }];
    }

    if (cycleSeed >= 2 && skill === "Inference" && CYCLE2_INFERENCE_CONTENT.length > 0) {
      const item = CYCLE2_INFERENCE_CONTENT[getSubIndex(CYCLE2_INFERENCE_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Deduce the logical consequence required by the passage's premises.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Inference"
      }];
    }

    if (cycleSeed >= 2 && skill === "Reference" && CYCLE2_REFERENCE_CONTENT.length > 0) {
      const item = CYCLE2_REFERENCE_CONTENT[getSubIndex(CYCLE2_REFERENCE_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Trace the antecedent noun that matches in grammatical gender, number, and syntactic role.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Reference"
      }];
    }

    if (cycleSeed >= 2 && skill === "Sentence Simplification" && CYCLE2_SIMPLIFICATION_CONTENT.length > 0) {
      const item = CYCLE2_SIMPLIFICATION_CONTENT[getSubIndex(CYCLE2_SIMPLIFICATION_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Preserve the essential causal relationships while eliminating non-critical modifying clauses.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Sentence Simplification"
      }];
    }

    if (cycleSeed >= 2 && skill === "Paragraph Relationships" && CYCLE2_RELATIONSHIPS_CONTENT.length > 0) {
      const item = CYCLE2_RELATIONSHIPS_CONTENT[getSubIndex(CYCLE2_RELATIONSHIPS_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Analyze how the second paragraph extends, qualifies, or contrasts with the first.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Paragraph Relationships"
      }];
    }

    if (cycleSeed >= 2 && skill === "Important Idea" && CYCLE2_IMPORTANT_IDEA_CONTENT.length > 0) {
      const item = CYCLE2_IMPORTANT_IDEA_CONTENT[getSubIndex(CYCLE2_IMPORTANT_IDEA_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Select the statement that captures the primary overarching thesis rather than a minor detail.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Important Idea"
      }];
    }

    if (cycleSeed >= 2 && skill === "Insert Text" && CYCLE2_INSERT_TEXT_CONTENT.length > 0) {
      const item = CYCLE2_INSERT_TEXT_CONTENT[getSubIndex(CYCLE2_INSERT_TEXT_CONTENT.length)];
      return [{
        title: item.title,
        passage: item.passage,
        question: item.question,
        options: item.options,
        correct: item.correct,
        hint: item.hint || "Look for pronoun references, transition words, or thematic continuity markers.",
        explanation: item.explanation,
        highlight: item.highlight,
        skillTested: "Insert Text"
      }];
    }
    }

    const allContents = contentSource;
    
    // Normalize level
    let effectiveLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    if (level.toLowerCase() === 'practicetest' || level === 'Practice Test' || level === 'Advance section advance test' || level === 'advance module test' || level === 'the iBT reading mockup test') {
      effectiveLevel = "Normal";
    }

    const levelContent = allContents[effectiveLevel] || allContents["Easy"];
    const moduleContent = levelContent[module] || levelContent[3] || levelContent[1] || [];
    
    if (moduleContent.length === 0) {
      // Final fallback to a known good exercise
      const fallbackLevel = Object.keys(allContents)[0];
      const fallbackModule = Object.keys(allContents[fallbackLevel])[0];
      return allContents[fallbackLevel][fallbackModule][0] || [];
    }

    const easyCycleShift = (cycleSeed - 1) * 2;
    const baseIndex = Math.abs((exerciseNumber - 1 + (isM2 ? 5 : 0) + (isEasy ? easyCycleShift : cycleOffset)) % moduleContent.length);
    const content = moduleContent[baseIndex];
    
    // Flatten content if it has multiple questions
    const items = Array.isArray(content) ? content : [content];
    const flattened: any[] = [];
    
    items.forEach(item => {
      if (item.questions && Array.isArray(item.questions)) {
        item.questions.forEach((q: any) => {
          flattened.push({
            ...item,
            passage: q.sentence || item.passage || item.text,
            question: q.question || q.word,
            options: q.options,
            correct: q.correct,
            hint: q.hint,
            explanation: q.explanation,
            highlight: q.word || item.highlight,
            skillTested: q.skillTested || skill
          });
        });
      } else {
        flattened.push({
          ...item,
          passage: item.passage || item.text,
          skillTested: item.skillTested || skill
        });
      }
    });

    return flattened;
  }, [level, module, exerciseNumber, contentSource, skill, adminUpdateTrigger]);

  const currentContent = exerciseSteps[currentStep] || exerciseSteps[0];

  const shuffledOptions = useMemo(() => {
    if (!currentContent || !currentContent.options) return [];
    return shuffleArray([...currentContent.options]);
  }, [currentContent]);

  const handleCheck = () => {
    if (!selectedOption) return;
    setShowFeedback(true);
    const isCorrect = selectedOption === currentContent.correct;
    
    // Trigger mascot reaction
    window.dispatchEvent(new CustomEvent('mascot-reaction', { 
      detail: { type: isCorrect ? 'correct' : 'incorrect' } 
    }));

    const newStepScores = [...stepScores];
    newStepScores[currentStep] = isCorrect;
    setStepScores(newStepScores);

    if (!isCorrect) {
      const defaultTag: ErrorTagCategory[] = skill.toLowerCase().includes('vocabulary') || skill.toLowerCase().includes('terminology')
        ? ['Vocabulary']
        : ['Careless'];
      setSelectedErrorTags(defaultTag);
      setUserErrorNote('');

      const log = addErrorLogEntry({
        section: 'reading',
        questionTitle: currentContent.title ? `${currentContent.title} (Question ${currentStep + 1})` : `Reading Passage #${currentStep + 1}`,
        sourceExercise: `Reading • ${skill} • Module ${module} (Exercise ${exerciseNumber})`,
        questionType: currentContent.skillTested || skill || 'Reading Comprehension',
        userWrongAnswer: selectedOption,
        correctAnswer: currentContent.correct,
        explanation: currentContent.explanation || 'Answer confirmed through explicit factual evidence in the passage.',
        tags: defaultTag,
        notes: ''
      });
      setCurrentErrorLogId(log.id);
    } else {
      setCurrentErrorLogId(null);
    }
  };

  const handleToggleTag = (tagId: ErrorTagCategory) => {
    let nextTags: ErrorTagCategory[];
    if (selectedErrorTags.includes(tagId)) {
      nextTags = selectedErrorTags.filter(t => t !== tagId);
      if (nextTags.length === 0) nextTags = [tagId];
    } else {
      nextTags = [...selectedErrorTags, tagId];
    }
    setSelectedErrorTags(nextTags);
    if (currentErrorLogId) {
      updateErrorLogTags(currentErrorLogId, nextTags, userErrorNote);
      setTagSavedNotice(true);
      setTimeout(() => setTagSavedNotice(false), 2500);
    }
  };

  const handleNoteChange = (text: string) => {
    setUserErrorNote(text);
    if (currentErrorLogId) {
      updateErrorLogTags(currentErrorLogId, selectedErrorTags, text);
    }
  };

  const handleNext = () => {
    if (currentStep < exerciseSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      setCurrentErrorLogId(null);
      setUserErrorNote('');
      setTagSavedNotice(false);
    } else {
      const correctCount = stepScores.filter(s => s).length;
      const finalScore = (correctCount / exerciseSteps.length) * 100;
      onComplete(finalScore);
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setStepScores([]);
    setIsFinished(false);
    setCurrentErrorLogId(null);
    setUserErrorNote('');
    setTagSavedNotice(false);
  };

  if (isFinished) {
    const correctCount = stepScores.filter(s => s).length;
    const finalScore = Math.round((correctCount / exerciseSteps.length) * 100);
    const band = getIBT6BandScore(finalScore);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border border-black/5 text-center space-y-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Trophy className="h-10 w-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-primary tracking-tight">Exercise Complete!</h2>
          <p className="text-on-surface-variant font-serif italic text-sm">You've finished all passages in this exercise.</p>
        </div>

        {/* 2026 iBT 6-Point Scale Result Card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-inner space-y-4">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
            <span>2026 iBT Band Rating</span>
            <span>{correctCount} / {exerciseSteps.length} Correct</span>
          </div>

          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${finalScore}%` }}
              className="h-full bg-gradient-to-r from-[#00467F] to-emerald-500 rounded-full"
            />
          </div>

          <div className="flex items-baseline justify-center gap-2 pt-2">
            <span className="text-5xl sm:text-6xl font-sans font-black text-primary">{band.scoreFormatted}</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-400">/ 6.0 Band</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-wider border shadow-2xs ${band.badgeColor}`}>
              {band.cefr} • {band.label}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs">
              {band.etsRange} Scaled Equiv
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {finalScore}% Accuracy
            </span>
          </div>

          <div className="pt-2">
            <StarRating percentage={finalScore} size="md" showBadge={false} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleReset}
            className="px-8 py-3.5 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary/5 transition-all text-xs"
          >
            Try Again
          </button>
          <button
            onClick={onBack}
            className="px-8 py-3.5 rounded-full bg-primary text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all text-xs"
          >
            Back to List
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
        <div className="flex items-center gap-4">
           <div className="px-4 py-1 rounded-full bg-black/5 text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
             Passage {currentStep + 1} of {exerciseSteps.length}
           </div>
           {showFeedback && (
             <div className="flex flex-col items-end gap-1">
               <div className={`flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold ${selectedOption === currentContent.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                 {selectedOption === currentContent.correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                 {selectedOption === currentContent.correct ? 'Correct' : 'Incorrect'}
               </div>
             </div>
           )}
           <button onClick={handleReset} className="p-2 rounded-full hover:bg-black/5 transition-colors text-on-surface-variant/60">
             <RotateCcw className="h-4 w-4" />
           </button>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-black/5 space-y-8">
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest">
            Module {module} • {skill} • {level} • Exercise {exerciseNumber}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-extrabold text-primary tracking-tight">{currentContent.title}</h2>
            <p className="text-on-surface-variant font-serif italic text-sm">Read the passage and answer the question.</p>
          </div>
        </header>

        <div className="bg-surface p-10 rounded-2xl border border-black/5 font-serif text-lg leading-relaxed text-on-surface-variant shadow-inner">
          {showFeedback && currentContent.highlight ? (
            currentContent.passage.split(currentContent.highlight).map((part: string, i: number, arr: string[]) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <motion.span 
                    initial={{ backgroundColor: "rgba(255, 215, 0, 0)" }}
                    animate={{ backgroundColor: "rgba(255, 215, 0, 0.3)" }}
                    className="px-1 rounded font-bold text-primary"
                  >
                    {currentContent.highlight}
                  </motion.span>
                )}
              </React.Fragment>
            ))
          ) : (
            currentContent.passage
          )}
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">?</div>
            <p className="font-sans font-bold text-primary">{currentContent.question}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {shuffledOptions.map((option: string, index: number) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === currentContent.correct;
              
              let optStyle = "border-slate-200 bg-white hover:border-primary/40 hover:bg-slate-50 text-slate-900";
              if (showFeedback) {
                if (isCorrect) {
                  optStyle = "border-2 border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs";
                } else if (isSelected && !isCorrect) {
                  optStyle = "border-2 border-rose-600 bg-rose-50 text-rose-950 font-bold shadow-xs";
                } else {
                  optStyle = "border border-slate-200 bg-slate-50 text-slate-600";
                }
              } else if (isSelected) {
                optStyle = "border-2 border-primary bg-primary/10 shadow-sm text-primary font-bold";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showFeedback && setSelectedOption(option)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${optStyle}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      showFeedback && isCorrect
                        ? 'bg-emerald-600 text-white'
                        : showFeedback && isSelected && !isCorrect
                        ? 'bg-rose-600 text-white'
                        : isSelected
                        ? 'bg-primary text-white'
                        : 'bg-slate-200 text-slate-800'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-sans text-sm sm:text-base font-semibold leading-snug">{option}</span>
                  </div>
                  {showFeedback && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {showFeedback && (
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 sm:p-8 rounded-3xl border-2 shadow-sm space-y-6 ${
              selectedOption === currentContent.correct 
                ? 'bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 border-emerald-400 text-emerald-950' 
                : 'bg-gradient-to-br from-rose-50/90 via-white to-amber-50/30 border-rose-400 text-rose-950'
            }`}
          >
            {/* Header Verdict */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/10">
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-2xl shrink-0 shadow-xs ${
                  selectedOption === currentContent.correct ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                }`}>
                  {selectedOption === currentContent.correct ? <CheckCircle2 className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
                </div>
                <div>
                  <h4 className={`font-sans font-extrabold text-lg sm:text-xl tracking-tight ${
                    selectedOption === currentContent.correct ? 'text-emerald-900' : 'text-rose-900'
                  }`}>
                    {selectedOption === currentContent.correct 
                      ? 'Correct! Verified by Text Evidence' 
                      : 'Correction & Evidence Diagnostic'}
                  </h4>
                  <p className="text-xs font-serif text-slate-600">
                    Skill Assessed: <span className="font-bold text-primary font-sans">{currentContent.skillTested || skill}</span> • ETS Reading Standards
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-wider shadow-2xs border ${
                  selectedOption === currentContent.correct 
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                    : 'bg-rose-100 text-rose-800 border-rose-300'
                }`}>
                  {selectedOption === currentContent.correct ? 'Full Credit (1.0 Pt)' : '0.0 / 1.0 Pt'}
                </span>
              </div>
            </div>

            {/* Explanation & Proof Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {/* Correct Answer & Rationale */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-800 font-sans font-bold text-xs uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Proven Answer</span>
                </div>
                <p className="text-sm font-sans font-bold text-slate-900 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/60">
                  {currentContent.correct}
                </p>
                <div className="text-xs font-serif text-slate-700 leading-relaxed space-y-1">
                  <span className="font-sans font-bold text-slate-900 block text-[11px] uppercase tracking-wide text-primary">
                    Passage Evidence & Analysis:
                  </span>
                  <p>{currentContent.explanation || "This answer directly paraphrases the authoritative claim established in the passage."}</p>
                </div>
              </div>

              {/* Distractor or Reinforcement Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs space-y-2.5">
                {selectedOption === currentContent.correct ? (
                  <>
                    <div className="flex items-center gap-2 text-primary font-sans font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-secondary" />
                      <span>Reading Strategy Mastery</span>
                    </div>
                    <p className="text-xs font-serif text-slate-700 leading-relaxed">
                      You correctly bypassed misleading distractors. In academic reading, always anchor choices in explicit textual facts rather than external assumptions or extreme assertions.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] font-sans text-slate-600">
                      💡 <strong>Pro Tip:</strong> Notice how the correct answer uses cautious academic hedging rather than absolute quantifiers.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-rose-800 font-sans font-bold text-xs uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>Why Your Selection Was Disproven</span>
                    </div>
                    <p className="text-xs font-sans font-semibold text-rose-900 bg-rose-50/70 p-2.5 rounded-xl border border-rose-200/60 line-through">
                      {selectedOption}
                    </p>
                    <p className="text-xs font-serif text-slate-700 leading-relaxed">
                      This distractor introduces information either not corroborated by the passage, contradicts a causal link in the text, or overgeneralizes beyond the author's stated scope.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Error Cause Tagging System for Incorrect Answers */}
            {selectedOption !== currentContent.correct && (
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-rose-200/80 shadow-xs space-y-3.5 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-rose-600" />
                    <span className="font-sans font-bold text-xs sm:text-sm text-slate-900">
                      Categorize Mistake Cause (Visualized in Profile Trends):
                    </span>
                  </div>
                  {tagSavedNotice && (
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0 border border-emerald-300">
                      <Check className="w-3 h-3 text-emerald-600" /> Saved to Profile Charts
                    </span>
                  )}
                </div>

                <p className="text-xs font-serif text-slate-500">
                  Click the primary reason for this mistake. This tags your error log to identify your recurring weaknesses in the Profile analytics dashboard:
                </p>

                {/* Tag Buttons Ribbon */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {(['Careless', 'Vocabulary', 'Time Pressure', 'Misread Question', 'Trap / Extreme Word', 'Missing Proof'] as ErrorTagCategory[]).map(tagKey => {
                    const isSelected = selectedErrorTags.includes(tagKey);
                    const tagDef = ERROR_TAG_DEFINITIONS.find(d => d.id === tagKey);
                    return (
                      <button
                        key={tagKey}
                        type="button"
                        onClick={() => handleToggleTag(tagKey)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-1.5 cursor-pointer border ${
                          isSelected
                            ? `${tagDef?.bgColor || 'bg-secondary/15'} ${tagDef?.borderColor || 'border-secondary'} ${tagDef?.color || 'text-secondary'} ring-2 ring-secondary/20 shadow-xs`
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-emerald-600" />}
                        <span>{tagDef?.label || tagKey}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Personal Note Input */}
                <div className="pt-2">
                  <input
                    type="text"
                    value={userErrorNote}
                    onChange={(e) => handleNoteChange(e.target.value)}
                    placeholder="Optional: Jot a quick personal takeaway (e.g., 'Missed the word NOT in the question stem')..."
                    className="w-full px-3.5 py-2 text-xs font-sans rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary/30 outline-none text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}

        <div className="flex justify-end pt-4">
          {!showFeedback ? (
            <button
              disabled={!selectedOption}
              onClick={handleCheck}
              className={`px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all shadow-lg ${
                selectedOption 
                  ? 'bg-primary text-white hover:shadow-xl hover:-translate-y-0.5' 
                  : 'bg-black/5 text-on-surface-variant/40 cursor-not-allowed'
              }`}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-10 py-4 rounded-full bg-secondary text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              {currentStep < exerciseSteps.length - 1 ? 'Next Passage' : 'Finish Exercise'} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};


const TOEFLReadingExam = ({ 
  onBack,
  onComplete,
  examIndex = 0,
  startModule = 1,
  startPassageIndex = 0
}: { 
  onBack: () => void,
  onComplete: (score: number) => void,
  examIndex?: number,
  startModule?: 1 | 2 | 3,
  startPassageIndex?: number
}) => {
  // Dynamic Exam Content Resolver to ensure all 80 mockup exam stars load full, unique content
  const activeExamContent = useMemo(() => {
    const cycleSeed = monthlyPracticeEngine.getActiveEdition().cycleSeed;
    const cycleOffset = (cycleSeed - 1) * 10;
    const idx = (examIndex !== undefined && examIndex >= 0) ? examIndex : 0;
    const effectiveIndex = (idx + cycleOffset) % IBT_2026_EXAMS.length;
    return IBT_2026_EXAMS[effectiveIndex] || IBT_2026_EXAMS[0];
  }, [examIndex]);

  const [currentModule, setCurrentModule] = useState<1 | 2 | 3>(startModule);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(startPassageIndex);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // -1 means viewing the passage only
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [timeLeft, setTimeLeft] = useState(startModule === 1 || startModule === 3 ? 18 * 60 : 9 * 60); 
  const [showReview, setShowReview] = useState(false);
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [answerKeyFilter, setAnswerKeyFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [highlightedMistakeId, setHighlightedMistakeId] = useState<string | null>(null);
  const [passages, setPassages] = useState<TOEFLPassage[]>([]);
  const [difficulty, setDifficulty] = useState<'Easy' | 'Hard'>('Hard');

  // Initialize passages
  useEffect(() => {
    if (startModule === 1) {
      setPassages(activeExamContent.module1);
    } else if (startModule === 2) {
      setPassages(activeExamContent.module2Hard);
      setDifficulty('Hard');
    } else if (startModule === 3) {
      setPassages(activeExamContent.module3);
    }
  }, [activeExamContent, startModule]);

  // Timer logic
  useEffect(() => {
    if (isExamFinished) return;
    if (timeLeft <= 0) {
      if (currentModule === 1) {
        handleModuleTransition();
      } else {
        setIsExamFinished(true);
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isExamFinished, currentModule]);

  const handleModuleTransition = () => {
    const m1Score = calculateModuleScore(1);
    const m1Max = calculateMaxModuleScore(1);
    const percentage = m1Max > 0 ? (m1Score / m1Max) * 100 : 100;

    const nextDifficulty = percentage >= 60 ? 'Hard' : 'Easy';
    setDifficulty(nextDifficulty);
    
    const nextPassages = nextDifficulty === 'Hard' ? activeExamContent.module2Hard : activeExamContent.module2Easy;
    
    setCurrentModule(2);
    setPassages(nextPassages);
    setCurrentPassageIndex(0);
    setCurrentQuestionIndex(-1);
    setTimeLeft(9 * 60); // Module 2: 9 minutes
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentPassage = passages[currentPassageIndex] || passages[0];
  const currentQuestion = (currentQuestionIndex >= 0 && currentPassage) ? currentPassage.questions[currentQuestionIndex] : null;

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion || !currentQuestion.options) return [];
    return shuffleArray([...currentQuestion.options]);
  }, [currentQuestion]);

  const handleAnswer = (option: any) => {
    const key = `m${currentModule}-${currentPassageIndex}-${currentQuestionIndex}`;
    setAnswers(prev => ({ ...prev, [key]: option }));
  };

  const calculateModuleScore = (moduleNum: 1 | 2 | 3) => {
    let targetPassages: any[] = [];
    if (moduleNum === 1) targetPassages = activeExamContent.module1;
    else if (moduleNum === 2) targetPassages = (difficulty === 'Hard' ? activeExamContent.module2Hard : activeExamContent.module2Easy);
    else if (moduleNum === 3) targetPassages = activeExamContent.module3;

    let score = 0;
    targetPassages.forEach((p, pIdx) => {
      p.questions?.forEach((q: any, qIdx: number) => {
        const answer = answers[`m${moduleNum}-${pIdx}-${qIdx}`];
        if (q.type === 'summary') {
          if (Array.isArray(answer) && Array.isArray(q.correct)) {
            const correctCount = answer.filter(val => (q.correct as string[]).includes(val)).length;
            if (correctCount === 3) score += 2;
            else if (correctCount === 2) score += 1;
          }
        } else if (answer === q.correct) {
          score += 1;
        }
      });
    });
    return score;
  };

  const calculateMaxModuleScore = (moduleNum: 1 | 2 | 3) => {
    let targetPassages: any[] = [];
    if (moduleNum === 1) targetPassages = activeExamContent.module1;
    else if (moduleNum === 2) targetPassages = (difficulty === 'Hard' ? activeExamContent.module2Hard : activeExamContent.module2Easy);
    else if (moduleNum === 3) targetPassages = activeExamContent.module3;

    return targetPassages.reduce((acc, p) => acc + (p.questions || []).reduce((qAcc: number, q: any) => qAcc + (q.type === 'summary' ? 2 : 1), 0), 0);
  };

  const { triggerReaction } = useContext(MascotContext);

  const handleNext = () => {
    if (!currentPassage) return;
    if (currentQuestionIndex === -1) {
      setCurrentQuestionIndex(0);
    } else if (currentQuestionIndex < currentPassage.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentPassageIndex < passages.length - 1) {
      setCurrentPassageIndex(prev => prev + 1);
      setCurrentQuestionIndex(-1);
    } else {
      if (currentModule === 1) {
        handleModuleTransition();
      } else {
        setIsExamFinished(true);
        if (scaledScore >= 24) {
          triggerReaction('correct');
        } else if (scaledScore < 12) {
          triggerReaction('incorrect');
        }
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentQuestionIndex === 0) {
      setCurrentQuestionIndex(-1);
    } else if (currentPassageIndex > 0) {
      setCurrentPassageIndex(prev => prev - 1);
      setCurrentQuestionIndex(passages[currentPassageIndex - 1].questions.length - 1);
    }
  };

  const m1Score = startModule === 1 ? calculateModuleScore(1) : 0;
  const m1Max = startModule === 1 ? calculateMaxModuleScore(1) : 0;
  const m2Score = startModule === 2 || (startModule === 1 && currentModule === 2) ? calculateModuleScore(2) : 0;
  const m2Max = startModule === 2 || (startModule === 1 && currentModule === 2) ? calculateMaxModuleScore(2) : 0;
  const m3Score = startModule === 3 ? calculateModuleScore(3) : 0;
  const m3Max = startModule === 3 ? calculateMaxModuleScore(3) : 0;
  
  const totalRaw = m1Score + m2Score + m3Score;
  const totalMax = m1Max + m2Max + m3Max;
  const scaledScore = totalMax > 0 ? Math.round((totalRaw / totalMax) * 30) : 0;

  // CEFR Mapping
  const getCEFR = (score: number) => {
    if (score >= 24) return 'C1 (Advanced)';
    if (score >= 18) return 'B2 (Upper Intermediate)';
    if (score >= 10) return 'B1 (Intermediate)';
    return 'A2 (Elementary)';
  };

  // Build the array of module sections to render in Answer Key Review
  const reviewModuleSections = useMemo(() => {
    const sections: { moduleNum: 1 | 2 | 3; moduleTitle: string; passages: TOEFLPassage[] }[] = [];
    if (startModule === 1) {
      sections.push({
        moduleNum: 1,
        moduleTitle: "Module 1",
        passages: activeExamContent.module1
      });
      if (currentModule === 2 || isExamFinished) {
        sections.push({
          moduleNum: 2,
          moduleTitle: `Module 2 (${difficulty} Path)`,
          passages: difficulty === 'Hard' ? activeExamContent.module2Hard : activeExamContent.module2Easy
        });
      }
    } else if (startModule === 2) {
      sections.push({
        moduleNum: 2,
        moduleTitle: `Module 2 (${difficulty} Path)`,
        passages: difficulty === 'Hard' ? activeExamContent.module2Hard : activeExamContent.module2Easy
      });
    } else if (startModule === 3) {
      sections.push({
        moduleNum: 3,
        moduleTitle: "Module 3",
        passages: activeExamContent.module3
      });
    }
    return sections;
  }, [startModule, currentModule, isExamFinished, difficulty, activeExamContent]);

  // Pre-calculate review statistics and list of questions with correctness
  const { allReviewQuestions, totalReviewCount, incorrectReviewCount, correctReviewCount } = useMemo(() => {
    let total = 0;
    let incorrect = 0;
    let correct = 0;
    let globalCounter = 1;

    const list: Array<{
      id: string;
      globalNum: number;
      moduleNum: 1 | 2 | 3;
      passageIdx: number;
      questionIdx: number;
      passageTitle: string;
      question: TOEFLQuestion;
      userAns: any;
      isCorrect: boolean;
    }> = [];

    reviewModuleSections.forEach((section) => {
      section.passages.forEach((passage, pIdx) => {
        passage.questions?.forEach((q, qIdx) => {
          const id = `m${section.moduleNum}-${pIdx}-${qIdx}`;
          const userAns = answers[id];
          let isCorrect = false;
          if (q.type === 'summary') {
            isCorrect = Array.isArray(userAns) && Array.isArray(q.correct) && userAns.filter(v => (q.correct as string[]).includes(v)).length >= 2;
          } else if (q.type === 'cloze') {
            isCorrect = typeof userAns === 'string' && typeof q.correct === 'string' && userAns.trim().toLowerCase() === q.correct.trim().toLowerCase();
          } else {
            isCorrect = userAns === q.correct;
          }

          total++;
          if (isCorrect) correct++;
          else incorrect++;

          list.push({
            id,
            globalNum: globalCounter++,
            moduleNum: section.moduleNum,
            passageIdx: pIdx,
            questionIdx: qIdx,
            passageTitle: passage.title,
            question: q,
            userAns,
            isCorrect
          });
        });
      });
    });

    return {
      allReviewQuestions: list,
      totalReviewCount: total,
      incorrectReviewCount: incorrect,
      correctReviewCount: correct
    };
  }, [reviewModuleSections, answers]);

  const scrollToMistake = (id: string) => {
    setHighlightedMistakeId(id);
    const element = document.getElementById(`review-q-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      setHighlightedMistakeId(null);
    }, 2500);
  };

  if (isExamFinished) {
    if (showAnswerKey) {
      const incorrectList = allReviewQuestions.filter(q => !q.isCorrect);

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#F4F6F9] z-[150] flex flex-col font-sans overflow-hidden"
        >
          {/* Header */}
          <header className="h-16 bg-[#00467F] text-white flex items-center justify-between px-4 sm:px-8 shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-amber-400" />
              <div>
                <h2 className="text-base sm:text-lg font-sans font-bold leading-tight">Answer Key & Detailed Explanations</h2>
                <p className="text-[11px] text-blue-200 hidden sm:block">Official ETS Diagnostic Review • 2026 iBT Adaptive Format</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowAnswerKey(false)}
                className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Score Summary</span>
              </button>
            </div>
          </header>

          {/* Subheader Filter & Quick Jump Bar */}
          <div className="bg-white border-b border-black/10 shadow-xs px-4 sm:px-8 py-3 shrink-0">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">Filter Mode:</span>
                
                <button
                  onClick={() => setAnswerKeyFilter('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    answerKeyFilter === 'all'
                      ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <LayoutList className="w-3.5 h-3.5" />
                  <span>All Questions ({totalReviewCount})</span>
                </button>

                <button
                  onClick={() => setAnswerKeyFilter('wrong')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    answerKeyFilter === 'wrong'
                      ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400'
                      : incorrectReviewCount > 0
                        ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
                        : 'bg-slate-100 text-slate-400 cursor-default border border-slate-200'
                  }`}
                >
                  <AlertCircle className={`w-3.5 h-3.5 ${incorrectReviewCount > 0 && answerKeyFilter !== 'wrong' ? 'text-rose-500 animate-pulse' : ''}`} />
                  <span>Only Wrong Questions ({incorrectReviewCount})</span>
                  {incorrectReviewCount > 0 && answerKeyFilter !== 'wrong' && (
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => setAnswerKeyFilter('correct')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    answerKeyFilter === 'correct'
                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Correct Only ({correctReviewCount})</span>
                </button>
              </div>

              {/* Quick Jump to Mistake Strip */}
              {incorrectList.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto py-1 custom-scrollbar">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 shrink-0 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                    Jump to Mistake:
                  </span>
                  <div className="flex items-center gap-1 flex-wrap">
                    {incorrectList.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (answerKeyFilter === 'correct') setAnswerKeyFilter('all');
                          scrollToMistake(item.id);
                        }}
                        className="px-2 py-0.5 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-md text-[11px] font-mono font-bold border border-rose-300 transition-all cursor-pointer hover:scale-105"
                        title={`Jump to M${item.moduleNum} P${item.passageIdx + 1} Q${item.questionIdx + 1}`}
                      >
                        Q{item.globalNum}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Review Banner Notification */}
          {answerKeyFilter === 'wrong' && (
            <div className="bg-rose-50 border-b border-rose-200 px-4 sm:px-8 py-2 text-center text-xs text-rose-900 font-medium">
              <span className="font-bold">🎯 Targeted Study Mode:</span> Displaying only the {incorrectReviewCount} questions you missed. Review ETS explanations below to eliminate misconceptions.
            </div>
          )}

          <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 max-w-5xl mx-auto w-full custom-scrollbar">
            
            {/* Session Performance Summary Panel */}
            {totalReviewCount > 0 && (
              <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/40 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-5 border-b border-slate-200">
                  {/* Title & Diagnostic Subtitle */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-[#00467F]/10 rounded-lg text-[#00467F]">
                        <BarChart3 className="w-5 h-5 text-[#00467F]" />
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-900">
                        Session Accuracy & Performance Summary
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-serif">
                      Review overview comparing your correct solutions against missed questions.
                    </p>
                  </div>

                  {/* Benchmark Level Badge */}
                  <div className="flex items-center gap-2 self-start lg:self-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Diagnostic Level:</span>
                    <span className={`px-3.5 py-1 rounded-full text-xs font-bold font-sans uppercase tracking-wider flex items-center gap-1.5 shadow-xs border ${
                      Math.round((correctReviewCount / totalReviewCount) * 100) >= 85
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : Math.round((correctReviewCount / totalReviewCount) * 100) >= 70
                          ? 'bg-blue-100 text-blue-900 border-blue-300'
                          : Math.round((correctReviewCount / totalReviewCount) * 100) >= 50
                            ? 'bg-amber-100 text-amber-900 border-amber-300'
                            : 'bg-rose-100 text-rose-900 border-rose-300'
                    }`}>
                      <Target className="w-3.5 h-3.5" />
                      {Math.round((correctReviewCount / totalReviewCount) * 100) >= 85
                        ? 'Advanced Mastery (ETS 26-30)'
                        : Math.round((correctReviewCount / totalReviewCount) * 100) >= 70
                          ? 'High Intermediate (ETS 22-25)'
                          : Math.round((correctReviewCount / totalReviewCount) * 100) >= 50
                            ? 'Low Intermediate (ETS 16-21)'
                            : 'Foundational (Needs Review)'}
                    </span>
                  </div>
                </div>

                {/* Metric Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
                  {/* Metric 1: Correct Percentage & Count */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                        Correct Answers
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black font-sans text-emerald-700">
                          {Math.round((correctReviewCount / totalReviewCount) * 100)}%
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-900/70">
                          ({correctReviewCount}/{totalReviewCount})
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-serif block">
                        Successful item responses
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-inner">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Metric 2: Total Incorrect Answers */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-200 shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block">
                        Total Incorrect Answers
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black font-sans text-rose-700">
                          {incorrectReviewCount}
                        </span>
                        <span className="text-xs font-mono font-bold text-rose-900/70">
                          ({Math.round((incorrectReviewCount / totalReviewCount) * 100)}% error rate)
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-serif block">
                        Questions requiring study
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-inner">
                      <XCircle className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Metric 3: Session Overview & Direct Filter Action */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                    <div className="space-y-1 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Session Scope
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-xl sm:text-2xl font-black font-sans text-slate-900">
                          {totalReviewCount} Total Items
                        </span>
                        <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-bold">
                          {reviewModuleSections.length} Modules
                        </span>
                      </div>
                    </div>
                    
                    {incorrectReviewCount > 0 ? (
                      <button
                        onClick={() => setAnswerKeyFilter(answerKeyFilter === 'wrong' ? 'all' : 'wrong')}
                        className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                          answerKeyFilter === 'wrong'
                            ? 'bg-slate-900 text-white hover:bg-slate-800'
                            : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-300'
                        }`}
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{answerKeyFilter === 'wrong' ? 'Showing Mistakes (Show All)' : `Focus on ${incorrectReviewCount} Missed Questions`}</span>
                      </button>
                    ) : (
                      <div className="py-2 px-3 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                        <span>All Answers Correct!</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Visual Ratio Progress Bar */}
                <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-700 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Correct: {Math.round((correctReviewCount / totalReviewCount) * 100)}% ({correctReviewCount} Qs)
                    </span>
                    <span className="text-rose-700 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" />
                      Incorrect: {Math.round((incorrectReviewCount / totalReviewCount) * 100)}% ({incorrectReviewCount} Qs)
                    </span>
                  </div>
                  
                  <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                    <div 
                      style={{ width: `${(correctReviewCount / totalReviewCount) * 100}%` }}
                      className="bg-emerald-500 transition-all duration-500"
                      title={`Correct: ${correctReviewCount} (${Math.round((correctReviewCount / totalReviewCount) * 100)}%)`}
                    />
                    <div 
                      style={{ width: `${(incorrectReviewCount / totalReviewCount) * 100}%` }}
                      className="bg-rose-500 transition-all duration-500"
                      title={`Incorrect: ${incorrectReviewCount} (${Math.round((incorrectReviewCount / totalReviewCount) * 100)}%)`}
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Empty state when filtering by mistakes and 0 mistakes */}
            {answerKeyFilter === 'wrong' && incorrectReviewCount === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center shadow-lg border border-emerald-200 space-y-4 max-w-2xl mx-auto my-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-sans">Flawless Accuracy!</h3>
                <p className="text-sm font-serif text-slate-600">
                  You got every single question correct in this exam simulation. There are no mistakes to review!
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setAnswerKeyFilter('all')}
                    className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all cursor-pointer shadow-md"
                  >
                    View All Questions & Explanations
                  </button>
                </div>
              </div>
            )}

            {/* Questions by Module & Passage */}
            {reviewModuleSections.map((section) => {
              // Check if this module section has questions to display under the current filter
              const moduleQuestions = allReviewQuestions.filter(q => q.moduleNum === section.moduleNum);
              const filteredModuleQuestions = moduleQuestions.filter(q => {
                if (answerKeyFilter === 'wrong') return !q.isCorrect;
                if (answerKeyFilter === 'correct') return q.isCorrect;
                return true;
              });

              if (filteredModuleQuestions.length === 0 && (answerKeyFilter === 'wrong' || answerKeyFilter === 'correct')) {
                return null;
              }

              return (
                <div key={section.moduleNum} className="space-y-6">
                  <div className="bg-[#00467F] text-white px-6 py-3 rounded-2xl flex items-center justify-between shadow-sm">
                    <span className="font-bold text-base sm:text-lg">{section.moduleTitle}</span>
                    <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-mono font-bold">
                      {filteredModuleQuestions.length} {filteredModuleQuestions.length === 1 ? 'Question' : 'Questions'}
                    </span>
                  </div>

                  {section.passages.map((passage, pIdx) => {
                    const passageQuestions = allReviewQuestions.filter(
                      q => q.moduleNum === section.moduleNum && q.passageIdx === pIdx
                    );
                    const filteredPassageQuestions = passageQuestions.filter(q => {
                      if (answerKeyFilter === 'wrong') return !q.isCorrect;
                      if (answerKeyFilter === 'correct') return q.isCorrect;
                      return true;
                    });

                    if (filteredPassageQuestions.length === 0 && (answerKeyFilter === 'wrong' || answerKeyFilter === 'correct')) {
                      return null;
                    }

                    return (
                      <div key={pIdx} className="space-y-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-black/10">
                        <div className="border-b border-black/10 pb-4 flex items-start justify-between gap-4">
                          <div>
                            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">Passage {pIdx + 1}</span>
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-0.5">{passage.title}</h3>
                          </div>
                          <span className="text-xs text-slate-500 font-medium shrink-0 bg-slate-100 px-3 py-1 rounded-lg">
                            {filteredPassageQuestions.length} Questions
                          </span>
                        </div>

                        <div className="space-y-8">
                          {passage.questions?.map((q, qIdx) => {
                            const questionId = `m${section.moduleNum}-${pIdx}-${qIdx}`;
                            const reviewItem = allReviewQuestions.find(item => item.id === questionId);
                            const userAns = answers[questionId];
                            
                            let isCorrect = false;
                            if (q.type === 'summary') {
                              isCorrect = Array.isArray(userAns) && Array.isArray(q.correct) && userAns.filter(v => (q.correct as string[]).includes(v)).length >= 2;
                            } else if (q.type === 'cloze') {
                              isCorrect = typeof userAns === 'string' && typeof q.correct === 'string' && userAns.trim().toLowerCase() === q.correct.trim().toLowerCase();
                            } else {
                              isCorrect = userAns === q.correct;
                            }

                            // If filtered, skip if not matching
                            if (answerKeyFilter === 'wrong' && isCorrect) return null;
                            if (answerKeyFilter === 'correct' && !isCorrect) return null;

                            const isHighlighted = highlightedMistakeId === questionId;

                            return (
                              <div 
                                id={`review-q-${questionId}`}
                                key={qIdx} 
                                className={`space-y-4 p-6 rounded-2xl transition-all duration-300 ${
                                  !isCorrect
                                    ? 'bg-rose-50/40 border-2 border-rose-300 shadow-sm'
                                    : 'bg-surface-container-low/50 border border-black/10'
                                } ${isHighlighted ? 'ring-4 ring-rose-500 scale-[1.01]' : ''}`}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex items-center gap-3">
                                    <span className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm text-white ${
                                      !isCorrect ? 'bg-rose-600' : 'bg-primary'
                                    }`}>
                                      {reviewItem?.globalNum || qIdx + 1}
                                    </span>
                                    <div>
                                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block">{q.type} Question</span>
                                      <span className="text-[11px] text-slate-500 font-mono">Passage {pIdx + 1} • Item #{qIdx + 1}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                                      isCorrect 
                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                                        : 'bg-rose-100 text-rose-800 border border-rose-300'
                                    }`}>
                                      {isCorrect ? (
                                        <>
                                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                          <span>Correct</span>
                                        </>
                                      ) : (
                                        <>
                                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                                          <span>Mistake • Review</span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <p className="text-base sm:text-lg font-sans font-bold text-primary leading-snug">{q.question}</p>

                                <div className="grid grid-cols-1 gap-2">
                                  {q.type === 'insert' ? (
                                    <div className="space-y-2">
                                      <p className="text-xs font-bold text-[#666666] uppercase tracking-wider">Sentence Insertion Answer:</p>
                                      <div className={`p-3.5 rounded-xl border text-sm font-bold flex items-center justify-between ${
                                        userAns === q.correct ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
                                      }`}>
                                        <span>Your choice: Square {typeof userAns === 'number' ? userAns + 1 : '(None)'}</span>
                                        {userAns === q.correct ? <Check className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-rose-600" />}
                                      </div>
                                      <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 text-sm font-bold flex items-center justify-between">
                                        <span>Correct ETS key: Square {(q.correct as number) + 1}</span>
                                        <Check className="w-4 h-4 text-emerald-600" />
                                      </div>
                                    </div>
                                  ) : q.options?.map((opt, oIdx) => {
                                    const isUserSelection = q.type === 'summary' 
                                      ? (Array.isArray(userAns) && userAns.includes(opt)) 
                                      : (userAns === opt);
                                    const isCorrectOption = q.type === 'summary' 
                                      ? (Array.isArray(q.correct) && (q.correct as string[]).includes(opt)) 
                                      : (q.correct === opt);
                                    
                                    let style = "bg-white border-black/10 text-on-surface-variant";
                                    if (isCorrectOption) style = "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium ring-1 ring-emerald-200";
                                    else if (isUserSelection && !isCorrectOption) style = "bg-rose-50 border-rose-300 text-rose-950 line-through";

                                    return (
                                      <div key={oIdx} className={`p-3.5 rounded-xl border text-sm transition-all flex items-center gap-3 ${style}`}>
                                        <div className={`h-6 w-6 rounded-full border flex-shrink-0 flex items-center justify-center font-bold text-xs ${
                                          isCorrectOption ? 'bg-emerald-600 border-emerald-600 text-white' : isUserSelection ? 'bg-rose-600 border-rose-600 text-white' : 'bg-white border-black/15 text-slate-700'
                                        }`}>
                                          {String.fromCharCode(65 + oIdx)}
                                        </div>
                                        <span className="flex-1">{opt}</span>
                                        {isCorrectOption && (
                                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md text-[10px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1">
                                            <Check className="h-3.5 w-3.5 text-emerald-600" /> Correct Key
                                          </span>
                                        )}
                                        {isUserSelection && !isCorrectOption && (
                                          <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-md text-[10px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1">
                                            <XCircle className="h-3.5 w-3.5 text-rose-600" /> Your Selection
                                          </span>
                                        )}
                                      </div>
                                    );
                                  })}
                                  
                                  {q.type === 'cloze' && (
                                    <div className="flex flex-col gap-2">
                                      <div className={`p-3.5 rounded-xl border text-sm font-bold ${
                                        isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
                                      }`}>
                                        Your input: {userAns || '(Empty)'}
                                      </div>
                                      <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-950 text-sm font-bold">
                                        Correct word: {q.correct as string}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className={`mt-4 p-5 rounded-2xl border space-y-1.5 ${
                                  !isCorrect ? 'bg-amber-50/70 border-amber-200' : 'bg-secondary/5 border-secondary/10'
                                }`}>
                                  <div className="flex items-center gap-2 text-secondary">
                                    <Info className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                      Official Explanation & Rationale
                                    </span>
                                  </div>
                                  <p className="text-sm font-serif text-slate-800 leading-relaxed">
                                    {q.explanation}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </main>
        </motion.div>
      );
    }

    const rawPercent = Math.round((totalRaw / totalMax) * 100);
    const band = getIBT6BandScore(rawPercent);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto space-y-8 py-12"
      >
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border border-black/5 text-center space-y-8">
          <div className="h-20 w-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Trophy className="h-10 w-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-primary tracking-tight">Exam Completed</h2>
            <p className="text-on-surface-variant font-serif italic text-base">You have successfully finished the 2026 iBT Reading simulation.</p>
          </div>

          {/* 3-Pillar 2026 Score Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-50/70 to-slate-50 p-6 rounded-3xl border border-blue-200/80 shadow-xs">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-1">2026 iBT Band</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-sans font-black text-primary">{band.scoreFormatted}</span>
                <span className="text-lg font-bold text-slate-400">/ 6.0</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-blue-700 mt-1 block">1.0–6.0 Band Scale</span>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 shadow-xs">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">Raw Accuracy</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-sans font-black text-slate-800">{totalRaw}</span>
                <span className="text-lg font-bold text-slate-400">/ {totalMax}</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-600 mt-1 block">({rawPercent}% correct)</span>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 shadow-xs">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">Scaled Score</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-sans font-black text-secondary">{scaledScore}</span>
                <span className="text-lg font-bold text-slate-400">/ 30</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-secondary mt-1 block">ETS Scaled Range</span>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border shadow-2xs ${band.badgeColor}`}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">2026 iBT Proficiency Level</p>
            <p className="text-2xl font-sans font-bold">{band.cefr} • {band.label}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowAnswerKey(true)}
              className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-xs"
            >
              <Eye className="h-4 w-4" /> Review Answers
            </button>
            <button
              onClick={() => {
                onComplete(Math.round((totalRaw / totalMax) * 100));
                onBack();
              }}
              className="px-10 py-3.5 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all text-xs"
            >
              Finish & Return
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!currentPassage) return null;

  return (
    <div className="fixed inset-0 bg-[#E8E8E8] z-[100] flex flex-col font-sans overflow-hidden">
      {/* ETS iBT Header */}
      <header className="h-14 bg-[#F5F5F5] border-b border-[#CCCCCC] flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#00467F] text-lg italic">TOEFL iBT®</span>
          </div>
          <div className="h-6 w-px bg-[#CCCCCC]"></div>
          <div className="text-[#333333] text-sm font-bold">
            Reading Section
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="text-[#333333] text-xs font-bold mr-4 px-2 py-1 bg-[#FFFFE0] border border-[#CCCCCC]">
            Module {currentModule} {currentModule === 2 && `(${difficulty} Path)`}
          </div>
          <div className="flex items-center gap-3 mr-4 text-[#333333] text-sm font-bold">
            <Clock className="h-4 w-4 text-[#00467F]" />
            <span>Time Remaining: {formatTime(timeLeft)}</span>
          </div>
          
          <button 
            onClick={() => setShowReview(true)}
            className="px-4 py-1 bg-[#F0F0F0] border border-[#999999] hover:bg-[#E0E0E0] text-[#00467F] text-xs font-bold transition-colors"
          >
            Review
          </button>
          <button className="px-4 py-1 bg-[#F0F0F0] border border-[#999999] hover:bg-[#E0E0E0] text-[#00467F] text-xs font-bold transition-colors">
            Help
          </button>
          <button 
            onClick={onBack}
            className="px-4 py-1 bg-[#F0F0F0] border border-[#999999] hover:bg-red-50 text-red-600 text-xs font-bold transition-colors"
          >
            Quit
          </button>
          <div className="w-4"></div>
          <button 
            onClick={handleBack}
            disabled={currentPassageIndex === 0 && currentQuestionIndex === -1}
            className="px-4 py-1 bg-[#F0F0F0] border border-[#999999] hover:bg-[#E0E0E0] disabled:opacity-30 text-[#00467F] text-xs font-bold transition-colors"
          >
            Back
          </button>
          <button 
            onClick={handleNext}
            className="px-6 py-1 bg-[#00467F] text-white hover:bg-[#003366] text-xs font-bold transition-colors"
          >
            Next
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden bg-white">
        {/* Left Side: Passage */}
        <section className={`${currentQuestionIndex === -1 ? 'w-full' : 'w-1/2'} bg-white border-r border-[#CCCCCC] overflow-y-auto p-8 custom-scrollbar`}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl font-serif font-bold text-black border-b border-black/10 pb-2 text-center uppercase">{currentPassage.title}</h1>
            <div className="space-y-6 font-serif text-[17px] leading-relaxed text-[#333333]">
              {currentPassage.paragraphs.map((para, i) => {
                const isHighlighted = currentQuestion?.paragraphIndex === i;
                
                // Handle Insert Text Squares
                let content: React.ReactNode = para;
                if (currentQuestion?.type === 'insert' && currentQuestion.paragraphIndex === i) {
                  const parts = para.split('[■]');
                  content = parts.map((part, idx) => (
                    <React.Fragment key={idx}>
                      {part}
                      {idx < parts.length - 1 && (
                        <button 
                          onClick={() => handleAnswer(idx)}
                          className={`inline-flex items-center justify-center w-6 h-6 mx-1 border-2 transition-all ${
                            answers[`m${currentModule}-${currentPassageIndex}-${currentQuestionIndex}`] === idx
                              ? 'bg-[#00467F] border-[#00467F] text-white'
                              : 'bg-white border-[#00467F] text-[#00467F] hover:bg-[#00467F]/10'
                          }`}
                        >
                          ■
                        </button>
                      )}
                    </React.Fragment>
                  ));
                } else {
                  // Strip squares if they exist but it's not the insert question
                  // Also clean up potential double spaces
                  content = typeof para === 'string' ? para.replace(/\[■\]/g, '').replace(/\s\s+/g, ' ') : para;
                }

                return (
                  <p key={i} className={`relative ${isHighlighted ? 'bg-[#FFFFE0] -mx-2 px-2' : ''}`}>
                    {content}
                    {isHighlighted && (
                      <span className="absolute -left-6 top-0 text-[#00467F] font-bold text-xs">P{i+1}</span>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right Side: Question */}
        {currentQuestionIndex !== -1 && (
          <section className="w-1/2 bg-white overflow-y-auto p-8 custom-scrollbar border-l border-[#CCCCCC]">
            <div className="max-w-xl mx-auto space-y-8">
              <div className="flex items-center justify-between border-b border-[#CCCCCC] pb-2">
                <span className="text-sm font-bold text-[#333333]">
                  Question {currentQuestionIndex + 1} of {currentPassage.questions.length}
                </span>
              </div>

              <div className="space-y-6">
                <div className="text-[17px] font-sans font-bold text-black leading-snug">
                  {currentQuestion?.question}
                </div>

                {currentQuestion?.type === 'summary' ? (
                  <div className="space-y-4">
                    <p className="text-sm font-bold text-[#666666]">Directions: Select THREE answer choices that express the most important ideas in the passage.</p>
                    <div className="space-y-2">
                      {shuffledOptions.map((opt, i) => {
                        const isSelected = (answers[`m${currentModule}-${currentPassageIndex}-${currentQuestionIndex}`] || []).includes(opt);
                        return (
                          <button
                            key={i}
                            onClick={() => {
                              const current = answers[`m${currentModule}-${currentPassageIndex}-${currentQuestionIndex}`] || [];
                              if (isSelected) {
                                handleAnswer(current.filter((o: string) => o !== opt));
                              } else if (current.length < 3) {
                                handleAnswer([...current, opt]);
                              }
                            }}
                            className={`w-full p-3 border text-left text-sm transition-all flex gap-3 ${
                              isSelected 
                                ? 'bg-[#00467F] border-[#00467F] text-white' 
                                : 'bg-[#F9F9F9] border-[#CCCCCC] hover:border-[#999999] text-[#333333]'
                            }`}
                          >
                            <div className={`h-4 w-4 border flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-white border-white text-[#00467F]' : 'bg-white border-[#999999]'}`}>
                              {isSelected && <Check className="h-3 w-3" />}
                            </div>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : currentQuestion?.type === 'cloze' ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-[#F0F7FF] border border-[#00467F]/20 rounded-xl space-y-4">
                      <p className="text-sm font-bold text-[#00467F] uppercase tracking-wider">Complete the Word</p>
                      <div className="flex items-center gap-2 text-2xl font-serif">
                        <span className="text-[#666666]">{currentQuestion.clozeHint}</span>
                        <input
                          type="text"
                          value={answers[`m${currentModule}-${currentPassageIndex}-${currentQuestionIndex}`] || ''}
                          onChange={(e) => handleAnswer(e.target.value)}
                          className="w-32 border-b-2 border-[#00467F] bg-transparent outline-none text-[#00467F] font-bold text-center"
                          placeholder="..."
                          autoFocus
                        />
                      </div>
                      <p className="text-xs text-[#666666] italic">Type the missing letters to complete the word from the passage.</p>
                    </div>
                  </div>
                ) : currentQuestion?.type === 'insert' ? (
                  <div className="p-4 bg-[#F0F7FF] border border-[#00467F]/20 rounded text-sm text-[#333333]">
                    Click on a square [■] in the passage to insert the sentence.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {shuffledOptions.map((opt, i) => {
                      const isSelected = answers[`m${currentModule}-${currentPassageIndex}-${currentQuestionIndex}`] === opt;
                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(opt)}
                          className={`w-full p-4 border text-left text-sm transition-all flex items-center gap-4 ${
                            isSelected 
                              ? 'bg-[#00467F] border-[#00467F] text-white' 
                              : 'bg-[#F9F9F9] border-[#CCCCCC] hover:border-[#999999] text-[#333333]'
                          }`}
                        >
                          <div className={`h-5 w-5 rounded-full border flex-shrink-0 flex items-center justify-center font-bold text-[10px] ${
                            isSelected ? 'bg-white border-white text-[#00467F]' : 'bg-white border-[#999999]'
                          }`}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Review Modal (ETS Style Table) */}
      <AnimatePresence>
        {showReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white border-2 border-[#00467F] w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="bg-[#00467F] p-3 text-white flex items-center justify-between">
                <h3 className="text-sm font-bold">Review Answers</h3>
                <button onClick={() => setShowReview(false)}>
                  <XCircle className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-[#F0F0F0] sticky top-0">
                    <tr>
                      <th className="border border-[#CCCCCC] p-2 text-left">Question Number</th>
                      <th className="border border-[#CCCCCC] p-2 text-left">Status</th>
                      <th className="border border-[#CCCCCC] p-2 text-left">Passage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passages.flatMap((p, pIdx) => 
                      p.questions.map((_, qIdx) => {
                        const isAnswered = answers[`m${currentModule}-${pIdx}-${qIdx}`] !== undefined;
                        const absoluteIndex = qIdx + 1;
                        return (
                          <tr 
                            key={`${pIdx}-${qIdx}`}
                            onClick={() => {
                              setCurrentPassageIndex(pIdx);
                              setCurrentQuestionIndex(qIdx);
                              setShowReview(false);
                            }}
                            className="hover:bg-[#F0F7FF] cursor-pointer"
                          >
                            <td className="border border-[#CCCCCC] p-2">{absoluteIndex}</td>
                            <td className="border border-[#CCCCCC] p-2">
                              {isAnswered ? 'Answered' : <span className="text-red-600 font-bold italic">Not Answered</span>}
                            </td>
                            <td className="border border-[#CCCCCC] p-2">{p.title}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-[#F5F5F5] border-t border-[#CCCCCC] flex justify-end gap-2">
                <button 
                  onClick={() => setShowReview(false)}
                  className="px-6 py-1 bg-[#F0F0F0] border border-[#999999] text-[#00467F] text-xs font-bold"
                >
                  Return
                </button>
                <button 
                  onClick={() => {
                    setShowReview(false);
                    setIsExamFinished(true);
                  }}
                  className="px-6 py-1 bg-[#00467F] text-white text-xs font-bold"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F1F1F1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #CCCCCC;
          border: 2px solid #F1F1F1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999999;
        }
      `}</style>
    </div>
  );
};
const AdvanceModuleTestExercise = ({ 
  exerciseNumber, 
  onBack, 
  onComplete 
}: { 
  exerciseNumber: number, 
  onBack: () => void, 
  onComplete: (score: number) => void 
}) => {
  const cycleSeed = monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const cycleOffset = (cycleSeed - 1) * 10;
  const i = exerciseNumber - 1;
  const examIndex = (i + cycleOffset) % IBT_2026_EXAMS.length;
  
  // Use the iBT Mockup Style with Module 3 content for all advanced module tests
  return (
    <TOEFLReadingExam 
      examIndex={examIndex}
      startModule={3}
      startPassageIndex={i}
      onBack={onBack}
      onComplete={onComplete}
    />
  );
};

const PracticeSessionPage = ({ 
  module, 
  skill, 
  level, 
  exerciseNumber,
  onBack,
  progress,
  onUpdateProgress
}: { 
  module: number | string, 
  skill: string, 
  level: string, 
  exerciseNumber?: number,
  onBack: () => void, 
  progress: {[key: string]: number},
  onUpdateProgress: (key: string, score: number) => void
}) => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(exerciseNumber || null);

  const exercisesCount = useMemo(() => {
    if (skill === "Complete the Words") {
      const normalizedLvl = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
      if (normalizedLvl === 'Easy') return 20;
      if (normalizedLvl === 'Normal') return 20;
      if (normalizedLvl === 'Hard') return 20;
    }
    if (skill.includes("Read an Academic Passage") || skill.includes("Read Academic Passage")) {
      const normalizedLvl = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
      const levelContent = ACADEMIC_PASSAGE_CONTENT[normalizedLvl] || ACADEMIC_PASSAGE_CONTENT["Easy"];
      const moduleContent = levelContent[module] || levelContent[1] || [];
      if (moduleContent.length > 0) {
        return moduleContent.length;
      }
    }
    if (skill === "Read in Daily Life") {
      const normalizedLvl = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
      const levelContent = DAILY_LIFE_CONTENT[normalizedLvl] || DAILY_LIFE_CONTENT["Easy"];
      const moduleContent = levelContent[module] || levelContent[1] || [];
      if (module === 1 || module === '1' || module === 'M1' || module === 'm1' || module === 2 || module === '2' || module === 'M2' || module === 'm2') {
        return 20;
      }
      if (moduleContent.length > 0) {
        return moduleContent.length;
      }
    }
    if (skill.includes("Read an Academic Passage") || skill.includes("Read Academic Passage")) {
      return 10;
    }
    return 20;
  }, [skill, level, module]);

  if (selectedExercise !== null) {
    if (module === 'test') {
      return (
        <AdvanceModuleTestExercise 
          exerciseNumber={selectedExercise} 
          onBack={onBack}
          onComplete={(score) => onUpdateProgress(`${module}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Complete the Words") {
      return (
        <CompleteTheWordsExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Read in Daily Life") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={DAILY_LIFE_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill.includes("Read an Academic Passage")) {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={ACADEMIC_PASSAGE_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Terminology") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={level === "Advanced" ? TERMINOLOGY_IN_CONTEXT_CONTENT : TERMINOLOGY_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Factual Information") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={FACTUAL_INFORMATION_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Negative Factual Information") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={NEGATIVE_FACTUAL_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Rhetorical Purpose") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={RHETORICAL_PURPOSE_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Inference") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={INFERENCE_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Reference") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={REFERENCE_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Sentence Simplification") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={SENTENCE_SIMPLIFICATION_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Paragraph Relationships") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={PARAGRAPH_RELATIONSHIPS_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Important Idea") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={IMPORTANT_IDEA_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Insert Text") {
      return (
        <GenericReadingExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={INSERT_TEXT_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Complete the Summary") {
      return (
        <CompleteSummaryExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={COMPLETE_SUMMARY_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }

    if (skill === "Complete the Table") {
      return (
        <CompleteTableExercise 
          module={module} 
          skill={skill} 
          level={level} 
          exerciseNumber={selectedExercise} 
          contentSource={COMPLETE_TABLE_CONTENT}
          onBack={() => setSelectedExercise(null)}
          onComplete={(score) => onUpdateProgress(`${module}-${skill}-${level}-${selectedExercise}`, score)}
        />
      );
    }


    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest text-center">
            Module {module} • {skill} • {level} • Exercise {selectedExercise}
          </div>
          <h1 className="text-4xl font-sans font-extrabold text-primary tracking-tight">Exercise {selectedExercise}</h1>
        </div>
        
        <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-black/5 max-w-2xl w-full">
          <p className="text-on-surface-variant font-serif italic text-lg">
            This is an empty exercise page for {skill} ({level}).
          </p>
          <div className="mt-8 p-12 border-2 border-dashed border-black/5 rounded-3xl flex flex-col items-center justify-center gap-4">
             <div className="p-4 rounded-full bg-secondary/10 text-secondary">
               <Terminal className="h-8 w-8" />
             </div>
             <p className="text-xs text-on-surface-variant/40 uppercase font-bold tracking-widest">Interactive Content Placeholder</p>
          </div>
        </div>

        <button 
          onClick={() => setSelectedExercise(null)}
          className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Exercises
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Return to Practice Arena
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Practice / {skill} / {level}</span>
      </div>

      <header className="text-center space-y-4">
        <h1 className="text-4xl font-sans font-extrabold text-primary tracking-tight">Select an Exercise</h1>
        <p className="text-on-surface-variant font-serif italic">Complete all {exercisesCount} exercises to master this skill level.</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto px-4">
        {Array.from({ length: exercisesCount }).map((_, i) => {
          const prog = progress[`${module}-${skill}-${level}-${i + 1}`] || 0;
          return (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedExercise(i + 1)}
              className="group flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white/80 transition-all cursor-pointer"
            >
              <div className="h-20 w-20 rounded-full bg-white border border-black/5 shadow-xs flex items-center justify-center relative transition-all group-hover:border-secondary/30 group-hover:shadow-md">
                <div className="h-14 w-14 rounded-full bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Star className="h-7 w-7 fill-current" />
                </div>
                <div className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-xs border-2 border-white">
                  {i + 1}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/70 group-hover:text-primary transition-colors">
                  Exercise {i + 1}
                </span>
                <StarRating percentage={prog} />
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

const PracticePage = ({ 
  onStartPractice, 
  progress,
  activeModule,
  setActiveModule,
  activeSkill,
  setActiveSkill,
  onUpdateProgress
}: { 
  onStartPractice: (module: number | string, skill: string, level: string, exerciseNumber?: number, startModule?: 1 | 2) => void,
  progress: {[key: string]: number},
  activeModule: number | string,
  setActiveModule: (m: number | string) => void,
  activeSkill: string,
  setActiveSkill: (s: string) => void,
  onUpdateProgress?: (key: string, score: number) => void
}) => {
  // Top-level Master Arena Tabs: 'ibtPractice' | 'grammarStudio' | 'vocabularyVault'
  const [arenaMasterTab, setArenaMasterTab] = useState<'ibtPractice' | 'grammarStudio' | 'vocabularyVault'>('ibtPractice');

  // Main iBT arena modes: 'quadSkills' (the unified 4-skill tab), 'advanceTests', 'mockupExams', 'fourSkillsMockup'
  const [arenaMode, setArenaMode] = useState<'quadSkills' | 'advanceTests' | 'mockupExams' | 'fourSkillsMockup'>(() => {
    if (activeModule === 'test') return 'advanceTests';
    if (activeModule === 'mockup') return 'mockupExams';
    if (activeModule === 'fourSkills' || activeModule === 'fourSkillsMock') return 'fourSkillsMockup';
    return 'quadSkills';
  });

  // Active skill within the Four Pillars of Fluency
  const [activeQuadSkill, setActiveQuadSkill] = useState<'reading' | 'listening' | 'writing' | 'speaking'>('reading');
  const modules = [1, 2, 3];
  
  const allSkills = [
    { id: 'completeWords', name: 'Complete the Words' },
    { id: 'dailyLife', name: 'Read in Daily Life' },
    { id: 'academicEasy', name: 'Read an Academic Passage (Easy)' },
    { id: 'academicHard', name: 'Read an Academic Passage (Hard)' },
    { id: 'factualInfo', name: 'Factual Information' },
    { id: 'negativeFactual', name: 'Negative Factual Information' },
    { id: 'terminology', name: 'Terminology' },
    { id: 'rhetorical', name: 'Rhetorical Purpose' },
    { id: 'inference', name: 'Inference' },
    { id: 'reference', name: 'Reference' },
    { id: 'simplification', name: 'Sentence Simplification' },
    { id: 'relationships', name: 'Paragraph Relationships' },
    { id: 'importantIdea', name: 'Important Idea' },
    { id: 'insertText', name: 'Insert Text' },
    { id: 'summary', name: 'Complete the Summary' },
    { id: 'table', name: 'Complete the Table' },
  ];

  const filteredSkills = useMemo(() => {
    const mod = typeof activeModule === 'number' ? activeModule : parseInt(String(activeModule)) || 1;
    if (mod === 1 || mod === 2) {
      return allSkills.filter(s => {
        if (s.id === 'academicHard') {
          return false;
        }
        return ['completeWords', 'dailyLife', 'academicEasy', 'terminology'].includes(s.id);
      }).map(s => {
        if (s.id === 'academicEasy') {
          return { ...s, name: 'Read an Academic Passage' };
        }
        return s;
      });
    } else {
      return allSkills.filter(s => 
        !['completeWords', 'dailyLife', 'academicEasy', 'academicHard', 'terminology'].includes(s.id)
      );
    }
  }, [activeModule]);

  useEffect(() => {
    if (!filteredSkills.find(s => s.id === activeSkill)) {
      setActiveSkill(filteredSkills[0]?.id || '');
    }
  }, [filteredSkills, activeSkill]);

  const levels = useMemo(() => {
    return [
      { id: 'easy', name: 'Easy', color: 'text-green-600', bg: 'bg-green-50' },
      { id: 'normal', name: 'Normal', color: 'text-blue-600', bg: 'bg-blue-50' },
      { id: 'hard', name: 'Hard', color: 'text-red-600', bg: 'bg-red-50' },
      { id: 'advanced', name: 'Advanced', color: 'text-purple-600', bg: 'bg-purple-50' },
    ];
  }, []);

  // Compute stats for Quad Skills
  const quadStats = useMemo(() => {
    const readingKeys = Object.keys(progress).filter(k => !k.startsWith('test-') && !k.startsWith('mockup-') && !k.startsWith('listening-') && !k.startsWith('writing-') && !k.startsWith('speaking-'));
    const listeningKeys = Object.keys(progress).filter(k => k.startsWith('listening-'));
    const writingKeys = Object.keys(progress).filter(k => k.startsWith('writing-'));
    const speakingKeys = Object.keys(progress).filter(k => k.startsWith('speaking-'));
    return {
      readingCount: readingKeys.length,
      listeningCount: listeningKeys.length,
      writingCount: writingKeys.length,
      speakingCount: speakingKeys.length,
      totalDrills: readingKeys.length + listeningKeys.length + writingKeys.length + speakingKeys.length
    };
  }, [progress]);

  const quadSkillConfigs = [
    {
      id: 'reading',
      title: 'Reading Mastery',
      shortName: 'Reading',
      subtitle: 'Taxonomy & Paragraph Logic',
      icon: BookOpen,
      count: quadStats.readingCount,
      color: 'text-emerald-600',
      activeBg: 'bg-emerald-600 text-white',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      tag: 'Modules 1–3'
    },
    {
      id: 'listening',
      title: 'Listening Mastery',
      shortName: 'Listening',
      subtitle: 'Dialogues & Academic Lectures',
      icon: Ear,
      count: quadStats.listeningCount,
      color: 'text-cyan-600',
      activeBg: 'bg-cyan-600 text-white',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
      tag: 'Audio Tasks'
    },
    {
      id: 'writing',
      title: 'Writing Mastery',
      shortName: 'Writing',
      subtitle: 'Academic Discussion & Email',
      icon: PenTool,
      count: quadStats.writingCount,
      color: 'text-amber-600',
      activeBg: 'bg-amber-600 text-white',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
      tag: 'Essay Studio'
    },
    {
      id: 'speaking',
      title: 'Speaking Mastery',
      shortName: 'Speaking',
      subtitle: 'Oral Summary & Live AI Lab',
      icon: Volume2,
      count: quadStats.speakingCount,
      color: 'text-indigo-600',
      activeBg: 'bg-indigo-600 text-white',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      tag: 'Speech AI'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-20"
    >
      <header className="space-y-6">
        {/* Practice Arena Master Title & Master Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-black/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#002045] to-secondary text-white shadow-md">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">Practice Arena</h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold font-mono uppercase tracking-wider hidden sm:inline-block">
                    2026 Academic Hub
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant font-serif">
                  All-in-one suite: iBT TOEFL Simulations, Interactive Grammar Mastery, and High-Yield Vocabulary.
                </p>
              </div>
            </div>
          </div>
          
          {/* Top-Level Master Arena Tabs */}
          <div className="flex flex-wrap items-center bg-slate-100/90 p-1.5 rounded-2xl border border-black/5 shadow-inner gap-1">
            <button
              onClick={() => setArenaMasterTab('ibtPractice')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-sans uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                arenaMasterTab === 'ibtPractice'
                  ? 'bg-gradient-to-r from-[#002045] via-primary to-secondary text-white shadow-md font-black' 
                  : 'text-on-surface-variant/75 hover:text-primary hover:bg-white/60 font-bold'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${arenaMasterTab === 'ibtPractice' ? 'text-cyan-300' : 'text-slate-400'}`} />
              <span>iBT TOEFL Practice</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${arenaMasterTab === 'ibtPractice' ? 'bg-white/20 text-cyan-200' : 'bg-black/5 text-on-surface-variant'}`}>
                Suite
              </span>
            </button>

            <button
              onClick={() => setArenaMasterTab('grammarStudio')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-sans uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                arenaMasterTab === 'grammarStudio'
                  ? 'bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-md font-black' 
                  : 'text-on-surface-variant/75 hover:text-primary hover:bg-white/60 font-bold'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${arenaMasterTab === 'grammarStudio' ? 'text-amber-300 animate-pulse' : 'text-slate-400'}`} />
              <span>English Grammar</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${arenaMasterTab === 'grammarStudio' ? 'bg-white/20 text-amber-200' : 'bg-black/5 text-on-surface-variant'}`}>
                A1–C2
              </span>
            </button>

            <button
              onClick={() => setArenaMasterTab('vocabularyVault')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-sans uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                arenaMasterTab === 'vocabularyVault'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-md font-black' 
                  : 'text-on-surface-variant/75 hover:text-primary hover:bg-white/60 font-bold'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${arenaMasterTab === 'vocabularyVault' ? 'text-amber-200' : 'text-slate-400'}`} />
              <span>Vocabulary Vault</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${arenaMasterTab === 'vocabularyVault' ? 'bg-white/20 text-amber-100' : 'bg-black/5 text-on-surface-variant'}`}>
                Lexicon
              </span>
            </button>
          </div>
        </div>

        {/* Monthly Practice Refresh & Active Cycle Banner */}
        <MonthlyEditionBanner />

        {/* When in iBT Practice Master Tab, show the sub-mode bar */}
        {arenaMasterTab === 'ibtPractice' && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low p-3 rounded-2xl border border-black/5">
            <div className="flex items-center gap-2 px-2">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-secondary">
                iBT Exam Modules:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {/* The Unified Fancy Tab for the 4 Skills */}
              <button
                onClick={() => {
                  setArenaMode('quadSkills');
                  if (activeModule === 'test' || activeModule === 'mockup') {
                    setActiveModule(1);
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  arenaMode === 'quadSkills'
                    ? 'bg-primary text-white shadow-sm font-black' 
                    : 'text-on-surface-variant/75 hover:text-primary hover:bg-white/60'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${arenaMode === 'quadSkills' ? 'text-cyan-300' : 'text-secondary'}`} />
                <span>Four Pillars of Fluency</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${arenaMode === 'quadSkills' ? 'bg-white/20 text-cyan-200' : 'bg-black/5 text-on-surface-variant'}`}>
                  4-Skills
                </span>
              </button>

              {/* 140-Star Advance Tests */}
              <button
                onClick={() => {
                  setArenaMode('advanceTests');
                  setActiveModule('test');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  arenaMode === 'advanceTests' 
                    ? 'bg-white text-primary shadow-sm ring-1 ring-black/5 font-black' 
                    : 'text-on-surface-variant/70 hover:text-primary hover:bg-white/60'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${arenaMode === 'advanceTests' ? 'text-amber-500 fill-amber-500' : 'text-slate-400'}`} />
                <span>140-Star Advance Trials</span>
              </button>

              {/* Full Mockup Exams */}
              <button
                onClick={() => {
                  setArenaMode('mockupExams');
                  setActiveModule('mockup');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  arenaMode === 'mockupExams' 
                    ? 'bg-white text-primary shadow-sm ring-1 ring-black/5 font-black' 
                    : 'text-on-surface-variant/70 hover:text-primary hover:bg-white/60'
                }`}
              >
                <Trophy className={`w-3.5 h-3.5 ${arenaMode === 'mockupExams' ? 'text-secondary' : 'text-slate-400'}`} />
                <span>iBT Full Simulations</span>
              </button>

              {/* ETS FORMAL PRACTICE TESTS (10 TESTS) */}
              <button
                onClick={() => {
                  setArenaMode('fourSkillsMockup');
                  setActiveModule('fourSkills');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  arenaMode === 'fourSkillsMockup' 
                    ? 'bg-[#00467F] text-white shadow-md font-black ring-2 ring-blue-400/30' 
                    : 'text-on-surface-variant/70 hover:text-primary hover:bg-white/60'
                }`}
              >
                <GraduationCap className={`w-3.5 h-3.5 ${arenaMode === 'fourSkillsMockup' ? 'text-cyan-300' : 'text-[#00467F]'}`} />
                <span>ETS Formal Mock Exams</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-md font-mono ${arenaMode === 'fourSkillsMockup' ? 'bg-white/20 text-cyan-200' : 'bg-blue-100 text-blue-900'}`}>
                  10 Tests
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Render Master Tab Content */}
      {arenaMasterTab === 'grammarStudio' ? (
        <EnglishGrammarSection 
          onBack={() => setArenaMasterTab('ibtPractice')}
          progress={progress}
          onUpdateProgress={onUpdateProgress}
        />
      ) : arenaMasterTab === 'vocabularyVault' ? (
        <VocabularySection 
          onBack={() => setArenaMasterTab('ibtPractice')}
          progress={progress}
          onUpdateProgress={onUpdateProgress}
        />
      ) : (
        /* iBT Practice Content */
        <>
          {arenaMode === 'advanceTests' ? (
            <div className="space-y-12">
              <button 
                onClick={() => {
                  setArenaMode('quadSkills');
                  setActiveModule(1);
                }}
                className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Four Pillars of Fluency
              </button>
              <div className="bg-[#002045] text-white p-12 rounded-[3rem] shadow-xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy className="h-48 w-48" />
                </div>
                <div className="space-y-4 relative z-10">
                  <h2 className="font-sans font-extrabold text-4xl tracking-tight">Advance Module Test Mastery</h2>
                  <p className="font-serif text-lg opacity-80 max-w-2xl">
                    Unlock all 140 stars by completing various advance tests. Each star represents a milestone in your journey to TOEFL success.
                  </p>
                </div>
                
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-4 relative z-10">
                  {Array.from({ length: 140 }).map((_, i) => {
                    const exerciseNumber = i + 1;
                    const isCompleted = progress[`test-${exerciseNumber}`] !== undefined;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.005 }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        onClick={() => onStartPractice('test', 'advance module test', 'Advanced', exerciseNumber)}
                        className={`aspect-square rounded-xl border flex items-center justify-center transition-all cursor-pointer group ${
                          isCompleted 
                            ? 'bg-secondary text-white border-secondary shadow-lg ring-4 ring-secondary/20' 
                            : 'bg-white/10 border-white/10 text-secondary hover:text-white hover:bg-secondary'
                        }`}
                      >
                        <Star className={`h-5 w-5 fill-current ${isCompleted ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'}`} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-primary">Current Progress</h3>
                    <p className="text-xs text-on-surface-variant font-serif italic">
                      {Object.keys(progress).filter(k => k.startsWith('test-')).length} of 140 stars collected
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-48 bg-surface-container rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary rounded-full transition-all duration-500"
                      style={{ width: `${(Object.keys(progress).filter(k => k.startsWith('test-')).length / 140) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {Math.round((Object.keys(progress).filter(k => k.startsWith('test-')).length / 140) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          ) : arenaMode === 'mockupExams' ? (
            <div className="space-y-12">
              <button 
                onClick={() => {
                  setArenaMode('quadSkills');
                  setActiveModule(1);
                }}
                className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Four Pillars of Fluency
              </button>
              <div className="bg-gradient-to-br from-secondary to-primary text-white p-12 rounded-[3rem] shadow-xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Target className="h-48 w-48" />
                </div>
                <div className="space-y-4 relative z-10">
                  <h2 className="font-sans font-extrabold text-4xl tracking-tight">iBT Reading Mockup Test</h2>
                  <p className="font-serif text-lg opacity-80 max-w-2xl">
                    Experience the full 2026 iBT Reading section simulation. Select an exam below to begin. Each star represents a unique full-length adaptive test.
                  </p>
                </div>
                
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-4 relative z-10">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.005 }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      onClick={() => onStartPractice('mockup', 'iBT Reading Mockup Test', `Exam ${i + 1}`, i)}
                      className={`aspect-square rounded-xl border flex items-center justify-center transition-all cursor-pointer group ${
                        progress[`mockup-${i}`] !== undefined
                          ? 'bg-white text-primary border-white shadow-lg ring-4 ring-white/20' 
                          : i < IBT_2026_EXAMS.length
                            ? 'bg-white/20 border-white/30 text-white/80 hover:bg-white/30'
                            : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'
                      }`}
                    >
                      <Star className={`h-5 w-5 fill-current ${progress[`mockup-${i}`] !== undefined ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'opacity-40'}`} />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/20 text-white flex items-center justify-center">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold">Mockup Progress</h3>
                    <p className="text-xs opacity-60 font-serif italic">
                      {Object.keys(progress).filter(k => k.startsWith('mockup-')).length} of 80 simulations completed
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-48 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${(Object.keys(progress).filter(k => k.startsWith('mockup-')).length / 80) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {Math.round((Object.keys(progress).filter(k => k.startsWith('mockup-')).length / 80) * 100)}%
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Time Limit', value: '30 Minutes', icon: Timer },
                  { label: 'Modules', value: '2 Sequential', icon: Layers },
                  { label: 'Questions', value: '50 Total', icon: Target }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase text-on-surface-variant opacity-60 tracking-widest">{stat.label}</p>
                      <p className="text-lg font-bold text-primary">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : arenaMode === 'fourSkillsMockup' ? (
            <div className="space-y-12">
              <button 
                onClick={() => {
                  setArenaMode('quadSkills');
                  setActiveModule(1);
                }}
                className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Four Pillars of Fluency
              </button>
              <div className="bg-gradient-to-br from-[#002447] via-[#003870] to-[#00467F] text-white p-8 sm:p-12 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden border border-blue-900/50">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-cyan-300">
                  <GraduationCap className="h-48 w-48" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/20 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official ETS Formal Testing Specification • 10 Examinations</span>
                  </div>
                  <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
                    ETS Formal Mockup Examinations
                  </h2>
                  <p className="font-serif text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
                    Experience authentic full-length academic reading tests crafted according to ETS formal examination standards. Includes the official ETS header bar, dual-pane layout, countdown timer, question review screen, and 0–30 scaled diagnostic scoring.
                  </p>
                </div>
                
                {/* 10-Star Full Exam Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
                  {ETS_FORMAL_TESTS.map((test, i) => {
                    const isCompleted = progress[`mockup-4s-${i}`] !== undefined;
                    const score = progress[`mockup-4s-${i}`];
                    return (
                      <motion.div
                        key={test.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.02 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => onStartPractice('fourSkillsMock', 'ETS Formal Mockup Test', `ETS Test ${i + 1}`, i)}
                        className={`p-5 rounded-2xl border flex flex-col justify-between gap-4 transition-all cursor-pointer group shadow-sm ${
                          isCompleted
                            ? 'bg-gradient-to-br from-blue-950/80 to-slate-900 border-cyan-400/60 ring-2 ring-cyan-400/30'
                            : 'bg-white/10 hover:bg-white/15 border-white/15 hover:border-cyan-400/50 backdrop-blur-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase">
                            ETS Test #{test.testNumber}
                          </span>
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                            isCompleted ? 'bg-cyan-400 text-slate-950 font-black' : 'bg-white/10 text-white/60'
                          }`}>
                            <Star className={`w-3.5 h-3.5 fill-current ${isCompleted ? 'text-slate-950' : 'text-white/60'}`} />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-bold text-xs sm:text-sm text-white line-clamp-2 group-hover:text-cyan-300 transition-colors leading-snug">
                            {test.title}
                          </h4>
                          <span className="text-[10px] font-mono text-cyan-200/70 block">
                            {test.discipline}
                          </span>
                        </div>

                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-300">
                          <span>{isCompleted ? `Score: ${score}%` : `${test.timeLimitMinutes}m • 10 Qs`}</span>
                          <span className="text-cyan-300 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                            Start ➔
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Summary Card */}
              <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-[#00467F]/10 text-[#00467F] flex items-center justify-center">
                    <Award className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-primary text-lg">ETS Formal Examinations Progress</h3>
                    <p className="text-xs text-on-surface-variant font-serif italic">
                      {Object.keys(progress).filter(k => k.startsWith('mockup-4s-')).length} of 10 formal tests completed
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-48 sm:w-64 bg-surface-container rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00467F] to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${(Object.keys(progress).filter(k => k.startsWith('mockup-4s-')).length / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold font-mono text-primary">
                    {Math.round((Object.keys(progress).filter(k => k.startsWith('mockup-4s-')).length / 10) * 100)}%
                  </span>
                </div>
              </div>
              
              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Official ETS Interface', desc: 'Authentic gray header, countdown timer, and dual-pane passage layout', icon: BookOpen, color: 'text-blue-600 bg-blue-50' },
                  { title: '10 Distinct Disciplines', desc: 'Biology, Geology, History, Astronomy, Botany, Architecture & more', icon: Layers, color: 'text-indigo-600 bg-indigo-50' },
                  { title: 'Full Question Taxonomy', desc: 'Factual, Negative, Vocab, Inference, Simplification, Insertion & Summary', icon: Target, color: 'text-emerald-600 bg-emerald-50' },
                  { title: 'Diagnostic Score Report', desc: '0–30 scaled scores with CEFR bands and in-depth pedagogical analysis', icon: Award, color: 'text-amber-600 bg-amber-50' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-3">
                    <div className={`h-12 w-12 rounded-2xl ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{stat.title}</h4>
                      <p className="text-xs text-on-surface-variant font-serif mt-1 leading-relaxed">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Fancy 4-Skill Selector Bar */}
              <div className="bg-white rounded-3xl p-4 md:p-5 border border-black/5 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      Unified Skill Quadrant
                    </span>
                    <span className="text-xs font-serif text-on-surface-variant">
                      Select a core skill pillar to practice targeted items:
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-on-surface-variant/70">
                    Total Quad-Skill Drills Completed: <strong className="text-primary font-bold">{quadStats.totalDrills}</strong>
                  </div>
                </div>

                {/* 4 Skill Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {quadSkillConfigs.map((skill) => {
                    const Icon = skill.icon;
                    const isSelected = activeQuadSkill === skill.id;
                    return (
                      <button
                        key={skill.id}
                        onClick={() => {
                          setActiveQuadSkill(skill.id as any);
                          if (skill.id === 'reading' && (activeModule === 'test' || activeModule === 'mockup')) {
                            setActiveModule(1);
                          }
                        }}
                        className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer group ${
                          isSelected
                            ? 'bg-[#002045] text-white border-[#002045] shadow-lg scale-[1.02] ring-2 ring-secondary/30'
                            : 'bg-surface-container-low/60 hover:bg-white border-black/5 hover:border-black/15 shadow-none hover:shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className={`p-2 rounded-xl transition-colors ${
                            isSelected ? 'bg-white/15 text-cyan-300' : 'bg-white text-primary shadow-xs'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`text-[9px] font-bold font-mono uppercase px-2 py-0.5 rounded-full border ${
                            isSelected ? 'bg-white/10 text-cyan-200 border-white/20' : skill.badgeBg
                          }`}>
                            {skill.tag}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <h4 className={`font-sans font-bold text-sm sm:text-base ${
                              isSelected ? 'text-white' : 'text-primary group-hover:text-secondary transition-colors'
                            }`}>
                              {skill.shortName}
                            </h4>
                            <span className={`text-[10px] font-mono ${
                              isSelected ? 'text-cyan-300' : 'text-on-surface-variant/60'
                            }`}>
                              {skill.count} completed
                            </span>
                          </div>
                          <p className={`text-[11px] font-serif leading-tight mt-0.5 line-clamp-1 ${
                            isSelected ? 'text-slate-300' : 'text-on-surface-variant/70'
                          }`}>
                            {skill.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reading Module Switcher (Only visible when activeQuadSkill is 'reading') */}
              {activeQuadSkill === 'reading' && (
                <div className="flex flex-wrap items-center justify-between gap-3 bg-surface-container-low p-3 rounded-2xl border border-black/5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 font-mono pl-1">
                      Reading Module:
                    </span>
                    <div className="flex gap-1.5">
                      {modules.map((m) => (
                        <button
                          key={m}
                          onClick={() => setActiveModule(m)}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-all cursor-pointer ${
                            activeModule === m 
                              ? 'bg-primary text-white shadow-sm' 
                              : 'bg-white text-on-surface-variant hover:bg-slate-50 border border-black/5'
                          }`}
                        >
                          Module {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-serif text-on-surface-variant italic hidden sm:block">
                    Module {typeof activeModule === 'number' ? activeModule : 1} Focus: {
                      (activeModule === 1 || activeModule === '1') ? 'Foundational Skills & Baseline Tasks' :
                      (activeModule === 2 || activeModule === '2') ? 'Adaptive Academic Readings & Terminology' :
                      'Full Syntactic Complexity & Advanced Analysis'
                    }
                  </div>
                </div>
              )}

              {/* Skill Content Views */}
              {activeQuadSkill === 'speaking' ? (
                <SpeakingSection progress={progress} onUpdateProgress={onUpdateProgress} />
              ) : activeQuadSkill === 'writing' ? (
                <WritingSection progress={progress} onUpdateProgress={onUpdateProgress} />
              ) : activeQuadSkill === 'listening' ? (
                <ListeningSection progress={progress} onUpdateProgress={onUpdateProgress} />
              ) : (
                <>
                  {/* Skills Navigation for Reading */}
                  <div className="overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
                    <div className="flex gap-3 w-max">
                      {filteredSkills.map((skill) => (
                        <button
                          key={skill.id}
                          onClick={() => setActiveSkill(skill.id)}
                          className={`px-5 py-3 rounded-2xl text-sm font-medium whitespace-nowrap border transition-all cursor-pointer ${
                            activeSkill === skill.id
                              ? 'bg-secondary/10 border-secondary text-secondary shadow-sm font-bold'
                              : 'bg-white border-black/5 text-on-surface-variant hover:border-black/20'
                          }`}
                        >
                          {skill.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Levels Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {levels.map((level) => (
                      <div key={level.id} className="bg-white rounded-[2.5rem] p-8 border border-black/5 shadow-sm space-y-6 flex flex-col items-center text-center">
                        <div className={`px-4 py-1 rounded-full ${level.bg} ${level.color} text-[10px] font-bold uppercase tracking-widest font-mono`}>
                          {level.name}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-sans font-bold text-primary text-xl">Level {level.name}</h3>
                          <p className="text-xs text-on-surface-variant opacity-60 font-serif">
                            Master {filteredSkills.find(s => s.id === activeSkill)?.name} with {level.name.toLowerCase()} difficulty challenges.
                          </p>
                        </div>

                        {/* Practice Bubble with Star */}
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => onStartPractice(activeModule, filteredSkills.find(s => s.id === activeSkill)?.name || '', level.name)}
                          className={`h-20 w-20 rounded-full ${level.bg} border-2 border-dashed border-black/10 flex items-center justify-center shadow-inner cursor-pointer group transition-colors hover:border-secondary/30`}
                        >
                          <div className="h-14 w-14 rounded-full bg-white shadow-md flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                            <Star className="h-6 w-6 fill-current" />
                          </div>
                        </motion.button>
                        
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant/40">Click to enter</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Module Info Footer (Only for iBT Practice) */}
          <div className="bg-surface-container-low p-6 rounded-3xl border border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                {['test', 'mockup'].includes(activeModule as string) ? <Trophy className="h-4 w-4" /> : activeModule}
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                  {activeModule === 'test' ? 'Advance Module Test Mode' : activeModule === 'mockup' ? 'iBT Mockup Test Mode' : 'Current Progression'}
                </p>
                <p className="text-[10px] text-on-surface-variant opacity-60">
                  {activeModule === 'test' ? '80 Star Challenge' : activeModule === 'mockup' ? 'Full Exam Simulation' : `Module ${activeModule} • ${filteredSkills.find(s => s.id === activeSkill)?.name}`}
                </p>
              </div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-surface-container overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}${activeModule}/32/32`} alt="user" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="h-8 w-8 rounded-full border-2 border-white bg-secondary text-white flex items-center justify-center text-[10px] font-bold">
                +12
              </div>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const ErrorAnalysisPage = ({ onBack, onNavigateToProfile }: { onBack: () => void; onNavigateToProfile?: () => void }) => {
  const [viewMode, setViewMode] = useState<'log' | 'strategy'>('log');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12 max-w-5xl mx-auto pb-20"
    >
      <div className="flex items-center justify-between border-b border-black/5 pb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity cursor-pointer">
          <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
        </button>
        <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Strategy Mastery / Error Tagging & Analysis</span>
      </div>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="h-8 w-8 text-secondary" />
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">Error Analysis & Tagging Studio</h1>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Cognitive Diagnosis</span>
            <span className="text-sm text-on-surface-variant font-medium italic">Tag your mistakes (Careless, Vocab, Time, Traps) to unlock profile trends</span>
          </div>

          <div className="flex p-1 bg-surface-container-low rounded-2xl border border-black/5">
            <button
              onClick={() => setViewMode('log')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'log'
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-on-surface-variant/70 hover:text-primary'
              }`}
            >
              Interactive Error Log & Tags
            </button>
            <button
              onClick={() => setViewMode('strategy')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'strategy'
                  ? 'bg-white text-primary shadow-xs'
                  : 'text-on-surface-variant/70 hover:text-primary'
              }`}
            >
              ETS Trap Guide & Blueprint
            </button>
          </div>
        </div>
      </header>

      {viewMode === 'log' ? (
        <ErrorAnalysisLogManager
          onNavigateToProfile={onNavigateToProfile}
          onBack={onBack}
        />
      ) : (
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Analysis Value</p>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="font-sans font-black text-primary text-lg">High Impact</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Recovery Rate</p>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="font-sans font-black text-primary text-lg">+20% Accuracy</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Focus Area</p>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="font-sans font-black text-primary text-lg">Self-Correction</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-1 group hover:border-secondary/20 transition-all">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Goal</p>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="font-sans font-black text-primary text-lg">Zero Repeat Error</span>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-sans font-bold text-primary">Why Did You Miss It?</h2>
                <div className="h-1 w-16 bg-secondary rounded-full"></div>
              </div>
              <p className="font-serif text-lg text-on-surface-variant leading-relaxed">
                Most students review by looking at the correct answer and saying "Oh, I see." This is <span className="font-bold text-primary underline decoration-secondary/30 underline-offset-4">passive learning</span>. To improve, you must diagnose the specific cognitive failure that led to the error.
              </p>
              <div className="bg-surface-container-low p-8 rounded-3xl border border-black/5 space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <AlertCircle className="h-5 w-5" />
                  <h3 className="font-sans font-bold uppercase text-xs tracking-widest">The Golden Rule</h3>
                </div>
                <p className="font-serif text-base text-on-surface-variant leading-relaxed italic">
                  "Every wrong answer in TOEFL is wrong for a definitive reason. It's either not in the text, contradicts the text, or is a minor detail when a main idea was asked for."
                </p>
              </div>
            </div>

            <div className="bg-[#002045] text-white p-10 rounded-[3rem] shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target className="h-32 w-32" />
              </div>
              <div className="space-y-4 relative z-10">
                <h3 className="font-sans font-bold text-2xl">The Error Log Method</h3>
                <p className="text-sm opacity-90 font-serif leading-relaxed">
                  Keep a spreadsheet or notebook. For every missed question, record these four data points:
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 relative z-10">
                {[
                  { label: "Question Type", value: "e.g., Inference, Terminology, Summary" },
                  { label: "My Wrong Logic", value: "Why did I pick this? (e.g., 'I assumed X')" },
                  { label: "The Trap", value: "Why did it look good? (e.g., 'Used same words')" },
                  { label: "The Correct Logic", value: "The specific proof in the text." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">{item.label}</p>
                    <p className="text-sm font-serif opacity-80">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-black/5"></div>
              <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Common Trap Categories & Fixes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "The 'True but Irrelevant' Trap",
                  desc: "An option that is 100% factually true based on the passage, but it doesn't answer the specific question asked.",
                  example: "Question asks *why* birds migrate. Answer says birds have feathers. It's true, but irrelevant.",
                  fix: "Always re-read the question stem before picking your final answer. Does this actually answer 'Why' or just 'What'?"
                },
                {
                  title: "The 'Half-Right' Trap",
                  desc: "The first half of the sentence is perfect, but the second half adds a detail not found in the text.",
                  example: "Answer says 'The Romans built roads to move troops and trade with China.' (Text never mentions China).",
                  fix: "Read every single word of the option. One wrong word makes the entire choice wrong."
                },
                {
                  title: "The 'Extreme Language' Trap",
                  desc: "Words like 'always', 'never', 'only', 'all', or 'impossible' are rarely correct in academic reading.",
                  example: "Text says 'Most mammals are warm-blooded.' Answer says 'All mammals are warm-blooded.'",
                  fix: "Be suspicious of absolute claims. Academic writing prefers nuance (often, usually, likely)."
                },
                {
                  title: "The 'Detail vs. Main Idea' Trap",
                  desc: "Common in Summary questions. You pick a detail that was mentioned, but it's not a 'Main Idea'.",
                  example: "Summary choice mentions the specific color of a dinosaur's skin instead of its evolutionary impact.",
                  fix: "Ask yourself: 'If I removed this fact, would the author's main argument still stand?' If yes, it's a detail."
                }
              ].map((trap, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] border border-black/5 space-y-6 shadow-sm">
                  <h3 className="font-sans font-bold text-primary text-2xl leading-tight">{trap.title}</h3>
                  <p className="font-serif text-base text-on-surface-variant leading-relaxed">
                    {trap.desc}
                  </p>
                  <div className="bg-surface-container-low p-4 rounded-2xl border border-black/5">
                    <p className="text-xs font-serif text-on-surface-variant italic">
                      <span className="font-bold uppercase tracking-widest text-[10px] text-primary block mb-1">Example:</span>
                      {trap.example}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-black/5 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-secondary" />
                    </div>
                    <p className="text-sm font-serif italic text-secondary leading-relaxed">
                      <span className="font-bold uppercase tracking-widest text-[10px] block mb-1">How to fix:</span>
                      {trap.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-black/5"></div>
              <h2 className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-on-surface-variant/40">Study Blueprint: From Error to Mastery</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-bold text-primary text-lg">The Immediate Review</h4>
                    <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
                      Review your errors immediately after the test while your logic is still fresh. If you wait 2 days, you'll forget *why* you made the mistake.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-bold text-primary text-lg">The Re-Attempt (24h later)</h4>
                    <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
                      Go back to the same passage 24 hours later. Can you get 100% accuracy now? If not, you didn't learn the lesson from the first review.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-bold text-primary text-lg">The "Teaching" Method</h4>
                    <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
                      Explain the question and the trap to a friend (or an imaginary student). Teaching is the highest form of mastery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 p-10 rounded-[3rem] border border-secondary/20 space-y-6">
                <h4 className="font-sans font-bold text-primary text-xl">Weekly Diagnostic Check</h4>
                <div className="space-y-4">
                  <p className="font-serif text-sm text-on-surface-variant leading-relaxed">
                    Every Sunday, look at your Error Log. Tally up your errors by type:
                  </p>
                  <div className="space-y-3">
                    {[
                      { type: "Terminology", count: "12 errors", status: "Focus Area" },
                      { type: "Inference", count: "4 errors", status: "Improving" },
                      { type: "Summary", count: "8 errors", status: "Focus Area" }
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between bg-white p-4 rounded-2xl border border-black/5">
                        <div>
                          <p className="text-xs font-bold text-primary">{stat.type}</p>
                          <p className="text-[10px] text-on-surface-variant opacity-60 uppercase tracking-widest">{stat.count}</p>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${stat.status === 'Focus Area' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                          {stat.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-serif text-on-surface-variant italic pt-4">
                    "Data doesn't lie. If your log shows 60% of errors are Terminology, stop doing full tests and spend 3 days on word lists."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-10 opacity-5">
              <Trophy className="h-64 w-64" />
            </div>
            <div className="max-w-3xl space-y-8 relative z-10">
              <h2 className="font-sans font-bold text-5xl tracking-tight">Mastering the Review</h2>
              <p className="font-serif text-xl opacity-90 leading-relaxed">
                "The best students spend more time reviewing their errors than they do taking the actual test. If you understand exactly why you were tricked, you cannot be tricked the same way again."
              </p>
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg transform -rotate-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-secondary">Growth Mindset</p>
                    <p className="text-xs opacity-70">Errors are data points for improvement.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest">Accuracy First</p>
                    <p className="text-xs opacity-70">Speed comes after understanding.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </motion.div>
  );
};

const StandardTierPage = ({ onBack }: { onBack: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="max-w-4xl mx-auto space-y-12 pb-20 mt-10"
  >
    <div className="flex items-center justify-between border-b border-black/5 pb-6">
      <button onClick={onBack} className="flex items-center gap-2 text-secondary font-bold text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
        <ArrowLeft className="h-4 w-4" /> Return to Reading Studio
      </button>
      <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">Strategy / Adaptive Tiers</span>
    </div>
    <header className="text-center space-y-6">
      <div className="bg-primary/5 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto text-primary">
        <GitBranch className="h-10 w-10" />
      </div>
      <div className="space-y-2">
        <h1 className="text-5xl font-black text-primary tracking-tight text-center">Adaptive Tier Logic</h1>
        <p className="font-serif text-xl text-on-surface-variant max-w-2xl mx-auto text-center">How our cognitive engine determines your path.</p>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-10 rounded-[3rem] border-2 border-primary/20 shadow-xl space-y-6">
        <div className="flex items-center gap-3 text-primary">
          <Target className="h-6 w-6" />
          <h2 className="font-sans font-black text-2xl">Standard Path</h2>
        </div>
        <p className="font-serif text-base text-on-surface-variant leading-relaxed">
          The Standard Path focuses on <span className="font-bold underline decoration-primary/20">mastery of core structures</span>. We recommend this path if your accuracy on the Discourse Baseline is below 60%.
        </p>
        <ul className="space-y-3">
          {["Simplified academic vocabulary", "Slower diagnostic pacing", "Focus on linear paragraph logic"].map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-serif">
              <Check className="h-4 w-4 text-green-500" /> {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#002045] p-10 rounded-[3rem] text-white shadow-xl space-y-6">
        <div className="flex items-center gap-3 text-secondary">
          <Zap className="h-6 w-6" />
          <h2 className="font-sans font-black text-2xl">Advanced Path</h2>
        </div>
        <p className="font-serif text-base opacity-80 leading-relaxed">
          The Advanced Path introduces <span className="font-bold underline decoration-secondary/30">complex nuances and logical traps</span>. Suggested for those scoring 80%+ on diagnostic tests.
        </p>
        <ul className="space-y-3">
          {["Technical/Rare academic lexis", "Compressed time limits", "Nuance-based distractors"].map((point, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-serif opacity-90">
              <Star className="h-4 w-4 text-secondary fill-current" /> {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const { 
    user, 
    isGuest, 
    progress: authProgress, 
    updateProgress: authUpdateProgress, 
    checkAndTriggerSoftGate 
  } = useAuth();

  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [activeModule, setActiveModule] = useState<number | string>(1);
  const [activeSkill, setActiveSkill] = useState('completeWords');
  const [readingViewMode, setReadingViewMode] = useState<'roadmap' | 'explanation'>('explanation');
  const [listeningViewMode, setListeningViewMode] = useState<'roadmap' | 'explanation'>('explanation');
  const [sentenceViewMode, setSentenceViewMode] = useState<'explanation' | 'drills'>('explanation');
  const [sentenceLevel, setSentenceLevel] = useState<'Easy' | 'Normal' | 'Hard' | 'Advanced' | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentSession, setCurrentSession] = useState<{ module: number | string, skill: string, level: string, exerciseNumber?: number } | null>(null);

  // Normalize progress dictionary into numbers for all visualization components
  const exerciseProgress = useMemo<Record<string, number>>(() => {
    const result: Record<string, number> = {};
    for (const [k, v] of Object.entries(authProgress || {})) {
      result[k] = typeof v === 'number' ? v : (v?.score ?? 0);
    }
    return result;
  }, [authProgress]);

  const handleUpdateProgress = (key: string, score: number, details?: { topicTitle?: string; category?: string }) => {
    authUpdateProgress(key, score, details);
    // Soft gate trigger check
    if (isGuest) {
      checkAndTriggerSoftGate(score >= 70 ? 'star_earned' : 'test_completed', score);
    }
  };

  const [currentExamIndex, setCurrentExamIndex] = useState(0);
  const [currentFourSkillsExamIndex, setCurrentFourSkillsExamIndex] = useState(0);
  const [currentStartModule, setCurrentStartModule] = useState<1 | 2>(1);
  const [monthRefreshToast, setMonthRefreshToast] = useState<{ previousKey: string; newName: string } | null>(null);
  const [isHistoricalArchiveOpen, setIsHistoricalArchiveOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [adminSettings, setAdminSettings] = useState<AdminSettings>(adminService.getSettings());

  useEffect(() => {
    // 1. Initial check for secret URL trigger (Method C: ?portal=admin or ?manage=portal or #admin-portal)
    if (adminService.checkUrlForAdminTrigger()) {
      setIsAdminPortalOpen(true);
    }

    // 2. URL change listener (popstate and hashchange)
    const handleLocationChange = () => {
      if (adminService.checkUrlForAdminTrigger()) {
        setIsAdminPortalOpen(true);
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // 3. Secret keyboard shortcut: Ctrl+Shift+A or Cmd+Shift+A
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminPortalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 4. Admin settings listener
    const handleAdminSettingsChange = (e: any) => {
      if (e.detail) {
        setAdminSettings(e.detail);
      }
    };
    window.addEventListener('toefl-admin-settings-changed', handleAdminSettingsChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toefl-admin-settings-changed', handleAdminSettingsChange);
    };
  }, []);

  useEffect(() => {
    const handleMonthRefresh = (e: any) => {
      const detail = e.detail;
      if (detail) {
        setMonthRefreshToast({
          previousKey: detail.previousEditionKey,
          newName: detail.newDisplayName
        });
      }
    };
    window.addEventListener('toefl-month-refreshed', handleMonthRefresh);
    return () => window.removeEventListener('toefl-month-refreshed', handleMonthRefresh);
  }, []);

  const handleStartPractice = (module: number | string, skill: string, level: string, exerciseNumber?: number, startModule: 1 | 2 = 1) => {
    if (module === 'mockup') {
      setCurrentExamIndex(exerciseNumber || 0);
      setCurrentStartModule(startModule);
      setActiveTab('mockupTest');
      return;
    }
    if (module === 'fourSkillsMock' || module === 'fourSkills') {
      setCurrentFourSkillsExamIndex(exerciseNumber || 0);
      setActiveTab('fourSkillsMockTest');
      return;
    }
    setCurrentSession({ module, skill, level, exerciseNumber });
    setActiveTab('practiceSession');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <MascotContext.Provider value={{ 
      triggerReaction: (type) => window.dispatchEvent(new CustomEvent('mascot-reaction', { detail: { type } }))
    }}>
      <div className="min-h-screen bg-surface pb-24 relative">
        {/* Top Header Non-blocking Ad Banner */}
        {adminSettings.topAd && <TopAdBanner config={adminSettings.topAd} />}

        {/* Side Non-blocking Skyscraper Rails (In empty outer gutters on >=1536px screens) */}
        {adminSettings.sideAds && <SideAdRails config={adminSettings.sideAds} />}

        <TopBar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenSettings={() => setIsSettingsOpen(true)}
          progress={exerciseProgress}
        />
        
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
          {adminSettings.announcementBanner?.enabled && adminSettings.announcementBanner?.message && (
            <div className={`mb-6 p-4 rounded-2xl border text-xs flex items-center justify-between gap-3 shadow-sm ${
              adminSettings.announcementBanner.type === 'alert'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-900'
                : adminSettings.announcementBanner.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900'
                : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-900'
            }`}>
              <div className="flex items-center gap-2.5 font-medium">
                <span className="text-base">📢</span>
                <span>{adminSettings.announcementBanner.message}</span>
              </div>
            </div>
          )}
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <HomeHeroDashboard 
                onStartDiagnostic={() => setActiveTab('readingSkills')}
                onNavigateToTab={(tab, sub) => {
                  setActiveTab(tab as Tab);
                }}
                progress={exerciseProgress}
                onOpenSettings={() => setIsSettingsOpen(true)}
              />
            </motion.div>
          )}

          {activeTab === 'factualInformation' && (
            <FactualInformationPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'negativeFactual' && (
            <NegativeFactualPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'terminologyInContext' && (
            <TerminologyInContextPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'rhetoricalPurpose' && (
            <RhetoricalPurposePage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'inference' && (
            <InferencePage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'reference' && (
            <ReferencePage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'sentenceSimplification' && (
            <SentenceSimplificationPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'paragraphRelationships' && (
            <ParagraphRelationshipsPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'importantIdea' && (
            <ImportantIdeaPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'insertText' && (
            <InsertTextPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'completeSummary' && (
            <CompleteSummaryPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'completeTable' && (
            <CompleteTablePage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'timeManagement' && (
            <TimeManagementPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'errorAnalysis' && (
            <ErrorAnalysisPage 
              onBack={() => setActiveTab('readingSkills')} 
              onNavigateToProfile={() => setActiveTab('profile')}
            />
          )}

          {/* LISTENING SKILLS DEEP DIVE PAGES */}
          {activeTab === 'listenRespondModule' && (
            <ListenRespondModulePage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'academicLectureModule' && (
            <AcademicLectureModulePage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'campusDiscussionModule' && (
            <CampusDiscussionModulePage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningGist' && (
            <ListeningGistPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningDetail' && (
            <ListeningDetailPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningFunction' && (
            <ListeningFunctionPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningAttitude' && (
            <ListeningAttitudePage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningOrganization' && (
            <ListeningOrganizationPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningConnecting' && (
            <ListeningConnectingPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningInference' && (
            <ListeningInferencePage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningNoteTaking' && (
            <ListeningNoteTakingPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningTimeManagement' && (
            <ListeningTimeManagementPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningErrorAnalysis' && (
            <ListeningErrorAnalysisPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'listeningAdaptiveTier' && (
            <ListeningAdaptiveTierPage onBack={() => setActiveTab('listeningSkills')} />
          )}

          {activeTab === 'standardTier' && (
            <StandardTierPage onBack={() => setActiveTab('readingSkills')} />
          )}

          {activeTab === 'completeWords' && (
            <CompleteWordsExplanation 
              onBack={() => setActiveTab('readingSkills')} 
              onLaunchLevel={(level) => handleStartPractice(1, "Complete the Words", level)}
              onLaunchPracticeArena={() => setActiveTab('practice')}
            />
          )}

          {activeTab === 'dailyLife' && (
            <DailyLifeExplanation 
              onBack={() => setActiveTab('readingSkills')} 
              onLaunchLevel={(level) => handleStartPractice(1, "Read in Daily Life", level)}
              onLaunchPracticeArena={() => setActiveTab('practice')}
            />
          )}

          {activeTab === 'academicPassage' && (
            <AcademicPassageExplanation 
              onBack={() => setActiveTab('readingSkills')} 
              onLaunchDiagnostic={() => handleStartPractice(1, "Read an Academic Passage", "Easy")}
              onLaunchPracticeArena={() => setActiveTab('practice')}
            />
          )}

          {activeTab === 'buildASentence' && (
            sentenceViewMode === 'explanation' ? (
              <SentenceConstructionExplanation 
                onBack={() => setActiveTab('readingSkills')} 
                onLaunchLevel={(lvl) => {
                  setSentenceLevel(lvl);
                  setSentenceViewMode('drills');
                }}
                onLaunchPracticeArena={() => setActiveTab('practice')}
              />
            ) : (
              <BuildASentenceSection 
                initialLevel={sentenceLevel}
                progress={exerciseProgress} 
                onUpdateProgress={(key, score) => {
                  handleUpdateProgress(key, score);
                }}
                onBack={() => setSentenceViewMode('explanation')} 
              />
            )
          )}

          {activeTab === 'readingSkills' && (
            <motion.div
              key="readingSkills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              {/* READING VIEW MODE TOGGLE */}
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-black/5 shadow-sm">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setReadingViewMode('explanation')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      readingViewMode === 'explanation'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-slate-100'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>2026 Masterclass Strategy & Syllabus</span>
                  </button>

                  <button
                    onClick={() => setReadingViewMode('roadmap')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      readingViewMode === 'roadmap'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-slate-100'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>Ecosystem Roadmap & 12 Taxonomy Pillars</span>
                  </button>
                </div>

                <div className="text-xs font-mono text-on-surface-variant hidden sm:flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Official 2026 iBT Syllabus</span>
                </div>
              </div>

              {readingViewMode === 'explanation' ? (
                <ReadingExplanation 
                  onLaunchSkill={(skillId) => {
                    setActiveTab(skillId as Tab);
                  }}
                />
              ) : (
                <div className="space-y-16">
                  {/* Header Section */}
                  <section className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-8 bg-secondary rounded-full"></div>
                  <span className="text-secondary font-bold tracking-widest text-[10px] uppercase">Roadmap to Mastery</span>
                </div>
                <h1 className="font-sans font-black text-5xl text-primary tracking-tight leading-[0.9]">
                  Reading <span className="text-secondary italic underline decoration-secondary/20 underline-offset-8">Ecology</span>
                </h1>
                <p className="font-serif text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                  The iBT Reading section isn't just a test—it's an ecosystem of skills. Follow the roadmap from initial calibration to advanced strategic mastery.
                </p>
              </section>

              {/* Phase 1: Diagnostic Calibration */}
              <section className="space-y-8">
                <div className="flex items-end justify-between border-b border-black/5 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">Phase 01</span>
                    <h2 className="font-sans font-bold text-2xl text-primary">Diagnostic Calibration</h2>
                  </div>
                  <p className="text-[10px] font-medium text-on-surface-variant italic mb-1">Establish your performance baseline.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { id: 'completeWords', icon: <Keyboard className="h-6 w-6" />, title: "Word Alchemy", desc: "Complete the Words", color: "from-blue-500/10 to-blue-500/5", border: "border-blue-500/20" },
                    { id: 'dailyLife', icon: <Globe className="h-6 w-6" />, title: "Practical Logic", desc: "Read in Daily Life", color: "from-emerald-500/10 to-emerald-500/5", border: "border-emerald-500/20" },
                    { id: 'academicPassage', icon: <FileText className="h-6 w-6" />, title: "Discourse Baseline", desc: "Academic Passage", color: "from-amber-500/10 to-amber-500/5", border: "border-amber-500/20" },
                    { id: 'buildASentence', icon: <PenTool className="h-6 w-6" />, title: "Sentence Construction", desc: "Build a Sentence (2026 iBT)", color: "from-indigo-500/10 to-indigo-500/5", border: "border-indigo-500/20" }
                  ].map((item, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(item.id as Tab)}
                      className={`p-8 rounded-[2.5rem] bg-gradient-to-br ${item.color} border ${item.border} text-left space-y-4 group transition-all hover:shadow-xl hover:shadow-black/5`}
                    >
                      <div className="bg-white p-3 rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors w-fit">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-primary text-xl tracking-tight leading-none">{item.title}</h4>
                        <p className="font-serif text-[11px] text-on-surface-variant mt-1 opacity-60 italic">{item.desc}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>

              {/* Phase 2: Core Taxonomy */}
              <section className="space-y-8">
                <div className="flex items-end justify-between border-b border-black/5 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">Phase 02</span>
                    <h2 className="font-sans font-bold text-2xl text-primary">Core Skill Taxonomy</h2>
                  </div>
                  <p className="text-[10px] font-medium text-on-surface-variant italic mb-1">The 12 "Pillars" of comprehension.</p>
                </div>

                <div className="bg-surface-container-high/50 p-2 rounded-[3.5rem] border border-black/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                      { title: 'Factual Information', cat: 'Detail', tab: 'factualInformation' },
                      { title: 'Negative Factual', cat: 'Detail', tab: 'negativeFactual' },
                      { title: 'Terminology', cat: 'Lexis', tab: 'terminologyInContext' },
                      { title: 'Rhetorical Purpose', cat: 'Structure', tab: 'rhetoricalPurpose' },
                      { title: 'Inference', cat: 'Logic', tab: 'inference' },
                      { title: 'Reference', cat: 'Syntax', tab: 'reference' },
                      { title: 'Sentence Simplification', cat: 'Syntax', tab: 'sentenceSimplification' },
                      { title: 'Insert Text', cat: 'Cohesion', tab: 'insertText' },
                      { title: 'Summary Completion', cat: 'Synthesis', tab: 'completeSummary' },
                      { title: 'Table Completion', cat: 'Synthesis', tab: 'completeTable' },
                      { title: 'Relationships', cat: 'Discourse', tab: 'paragraphRelationships' },
                      { title: 'Important Idea', cat: 'Main Idea', tab: 'importantIdea' }
                    ].map((skill, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ backgroundColor: '#fff' }}
                        onClick={() => setActiveTab(skill.tab as Tab)}
                        className="flex flex-col p-6 rounded-[2.5rem] text-left transition-all hover:shadow-xl hover:shadow-black/5 group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.15em] bg-secondary/10 px-2 py-0.5 rounded-full">{skill.cat}</span>
                        </div>
                        <h4 className="font-sans font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{skill.title}</h4>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </section>

              {/* Phase 3: Strategic Mastery */}
              <section className="space-y-8">
                <div className="flex items-end justify-between border-b border-black/5 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.2em]">Phase 03</span>
                    <h2 className="font-sans font-bold text-2xl text-primary">Strategic Mastery</h2>
                  </div>
                  <p className="text-[10px] font-medium text-on-surface-variant italic mb-1">Speed, precision, and error control.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveTab('timeManagement')}
                    className="p-10 rounded-[3rem] bg-[#002045] text-white text-left relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                      <Timer className="h-32 w-32" />
                    </div>
                    <div className="relative z-10 space-y-4">
                      <h3 className="font-sans font-black text-3xl tracking-tight">Time Logic</h3>
                      <p className="text-white/70 text-sm leading-relaxed max-w-[250px]">Master the 18-minute countdown and per-question pacing.</p>
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest pt-4">
                        Explore Strategy <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveTab('errorAnalysis')}
                    className="p-10 rounded-[3rem] border-2 border-primary text-left relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                      <Eye className="h-32 w-32" />
                    </div>
                    <div className="relative z-10 space-y-4 text-primary">
                      <h3 className="font-sans font-black text-3xl tracking-tight">Error Analysis</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed max-w-[250px]">Deconstruct your mistakes to prevent repetitive traps.</p>
                      <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest pt-4">
                        Review Log <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.button>
                </div>
              </section>

              {/* Adaptive Intelligence Footer */}
              <section className="bg-surface-container-low p-10 rounded-[4rem] border border-black/5 flex flex-col md:flex-row items-center gap-8">
                <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center shadow-lg transform -rotate-6">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 flex-grow">
                  <h4 className="font-sans font-bold text-primary text-xl">Adaptive Engine Active</h4>
                  <p className="font-serif text-sm text-on-surface-variant leading-relaxed opacity-80 max-w-xl">
                    Our platform monitors your success rate in Phase 1 and 2 to automatically suggest either the <span className="text-primary font-bold">Standard</span> or <span className="text-secondary font-bold">Advanced</span> curricula for your Module 2 practice.
                  </p>
                </div>
                    <button 
                      onClick={() => setActiveTab('standardTier')}
                      className="flex-shrink-0 bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                      View Tier Logic
                    </button>
                  </section>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'listeningSkills' && (
            <motion.div
              key="listeningSkills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              {/* LISTENING VIEW MODE TOGGLE */}
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-black/5 shadow-sm">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setListeningViewMode('explanation')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      listeningViewMode === 'explanation'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-slate-100'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>2026 Masterclass Strategy & Syllabus</span>
                  </button>

                  <button
                    onClick={() => setListeningViewMode('roadmap')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      listeningViewMode === 'roadmap'
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-slate-100'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-cyan-600" />
                    <span>Ecosystem Roadmap & 8 Taxonomy Pillars</span>
                  </button>
                </div>

                <div className="text-xs font-mono text-on-surface-variant hidden sm:flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span>Official 2026 iBT Listening Studio</span>
                </div>
              </div>

              {listeningViewMode === 'explanation' ? (
                <ListeningExplanation 
                  onLaunchDrill={(taskType) => {
                    if (taskType === 'listenRespond') setActiveTab('listenRespondModule');
                    else if (taskType === 'lecture') setActiveTab('academicLectureModule');
                    else if (taskType === 'discussion') setActiveTab('campusDiscussionModule');
                    else setListeningViewMode('roadmap');
                  }}
                />
              ) : (
                <ListeningRoadmap 
                  onNavigateTab={(tab) => setActiveTab(tab as Tab)}
                />
              )}
            </motion.div>
          )}

          {activeTab === 'englishGrammar' && (
            <motion.div
              key="englishGrammar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <EnglishGrammarSection 
                onBack={() => setActiveTab('home')}
                progress={exerciseProgress}
                onUpdateProgress={(key, score, details) => {
                  handleUpdateProgress(key, score, details);
                }}
                onNavigateToTab={(tab) => setActiveTab(tab as Tab)}
              />
            </motion.div>
          )}

          {activeTab === 'vocabulary' && (
            <motion.div
              key="vocabulary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <VocabularySection 
                onBack={() => setActiveTab('home')}
                progress={exerciseProgress}
                onUpdateProgress={(key, score) => {
                  handleUpdateProgress(key, score);
                }}
              />
            </motion.div>
          )}

          {activeTab === 'writingSkills' && (
            <motion.div
              key="writingSkills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <WritingExplanation />
            </motion.div>
          )}

          {activeTab === 'speakingSkills' && (
            <motion.div
              key="speakingSkills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <SpeakingSkillsPage 
                progress={exerciseProgress}
                onUpdateProgress={(key, score) => {
                  handleUpdateProgress(key, score);
                }}
              />
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <PracticePage 
              onStartPractice={handleStartPractice} 
              progress={exerciseProgress}
              activeModule={activeModule}
              setActiveModule={setActiveModule}
              activeSkill={activeSkill}
              setActiveSkill={setActiveSkill}
              onUpdateProgress={(key, score) => {
                handleUpdateProgress(key, score);
              }}
            />
          )}

          {activeTab === 'practiceSession' && currentSession && (
            <PracticeSessionPage 
              module={currentSession.module}
              skill={currentSession.skill}
              level={currentSession.level}
              exerciseNumber={currentSession.exerciseNumber}
              onBack={() => {
                setActiveTab('practice');
                setCurrentSession(null);
              }}
              progress={exerciseProgress}
              onUpdateProgress={(key, score) => {
                handleUpdateProgress(key, score);
                if (score === 100) {
                  triggerConfetti(true);
                  playSuccessSound();
                  window.dispatchEvent(new CustomEvent('mascot-reaction', { detail: { type: 'correct' } }));
                }
              }}
            />
          )}

          {activeTab === 'mockupTest' && (
            <TOEFLReadingExam 
              examIndex={currentExamIndex}
              startModule={currentStartModule}
              onBack={() => setActiveTab('practice')}
              onComplete={(score) => {
                handleUpdateProgress(`mockup-${currentExamIndex}`, score);
                if (score >= 80) {
                  triggerConfetti(true);
                  playSuccessSound();
                  window.dispatchEvent(new CustomEvent('mascot-reaction', { detail: { type: 'correct' } }));
                }
                setActiveTab('practice');
              }}
            />
          )}

          {activeTab === 'fourSkillsMockTest' && (
            <TOEFLFourSkillsMockExam 
              examIndex={currentFourSkillsExamIndex}
              onBack={() => setActiveTab('practice')}
              onComplete={(score, details) => {
                handleUpdateProgress(`mockup-4s-${currentFourSkillsExamIndex}`, score, {
                  topicTitle: `ETS Formal Mock Exam #${currentFourSkillsExamIndex + 1}`,
                  category: 'ETSFormalSimulation'
                });
                if (score >= 80) {
                  triggerConfetti(true);
                  playSuccessSound();
                  window.dispatchEvent(new CustomEvent('mascot-reaction', { detail: { type: 'correct' } }));
                }
              }}
            />
          )}

          {activeTab === 'profile' && (
            <StudentProfile 
              progress={exerciseProgress}
              onNavigateToTab={(tab, sub) => {
                setActiveTab(tab as Tab);
              }}
              onOpenSettings={() => setIsSettingsOpen(true)}
              onUpdateProgress={(key, score) => {
                handleUpdateProgress(key, score);
              }}
            />
          )}
        </AnimatePresence>
      </main>

        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
        
        <SettingsModal 
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          progress={exerciseProgress}
          onResetProgress={() => {
            localStorage.removeItem('toefl_exercise_progress');
            localStorage.removeItem('toefl_guest_progress');
          }}
        />

        <AuthModal />

        <MonthlyRefreshArchiveModal 
          isOpen={isHistoricalArchiveOpen}
          onClose={() => setIsHistoricalArchiveOpen(false)}
        />

        <AdminPortalModal
          isOpen={isAdminPortalOpen}
          onClose={() => setIsAdminPortalOpen(false)}
        />

        {/* Global Celebration Toast for Month Refresh */}
        <AnimatePresence>
          {monthRefreshToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-md p-4 rounded-3xl bg-slate-900/95 text-white border border-cyan-500/30 shadow-2xl backdrop-blur-md space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-sm">
                    🗓️
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans uppercase tracking-wider text-cyan-300">
                      New Monthly Practice Refreshed!
                    </h4>
                    <p className="text-xs font-semibold text-white">
                      {monthRefreshToast.newName} Active
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMonthRefreshToast(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] font-serif text-slate-300 leading-snug">
                All exercise questions have updated with fresh scenarios. Your previous {monthRefreshToast.previousKey} progress has been safely archived in your Historical Records!
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    setMonthRefreshToast(null);
                    setActiveTab('practice');
                  }}
                  className="flex-1 py-1.5 px-3 rounded-xl bg-secondary hover:bg-secondary/90 text-white text-[11px] font-sans font-bold text-center transition-colors cursor-pointer"
                >
                  Explore New Drills
                </button>

                <button
                  onClick={() => {
                    setMonthRefreshToast(null);
                    setIsHistoricalArchiveOpen(true);
                  }}
                  className="py-1.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-sans font-bold text-center transition-colors cursor-pointer"
                >
                  View Historical Vault
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Mascot activeTab={activeTab} />
      </div>
    </MascotContext.Provider>
  );
}
