import { monthlyPracticeEngine } from './utils/monthlyEngine';

// Official ETS TOEFL iBT Speaking Content (2026 Format)
// Task 1: Listen and Repeat (7 sentence repetitions per drill)
// Task 2: Take an Interview (4-question simulated conversational interview per drill)

export interface ListenAndRepeatItem {
  id: string;
  audioPrompt: string; // The sentence spoken aloud
  context: string;
  difficultyBand: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  keywords: string[];
  phoneticTips: string;
}

export interface InterviewQuestion {
  questionNumber: number;
  questionText: string;
  interviewerPersona: string;
  avatar: string;
  suggestedPoints: string[];
  modelAnswer: string;
  usefulPhrases: string[];
}

export interface InterviewDrill {
  id: string;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  exerciseNumber: number;
  topicTitle: string;
  scenarioContext: string;
  interviewerName: string;
  interviewerRole: string;
  interviewerAvatar: string;
  questions: InterviewQuestion[];
}

export interface ListenRepeatDrill {
  id: string;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  exerciseNumber: number;
  theme: string;
  items: ListenAndRepeatItem[];
}

// ============================================================================
// 1. LISTEN AND REPEAT DRILLS (20 per tier)
// ============================================================================
const LISTEN_REPEAT_THEMES = [
  "Campus Directions & Facilities",
  "Library Catalog & Book Reservations",
  "Student Dormitory Check-in",
  "Cafeteria & Dining Hall Policies",
  "Academic Advising & Course Drops",
  "Science Laboratory Safety Protocols",
  "Computer Lab Printing & Software",
  "University Health & Wellness Center",
  "Public Transportation & Campus Shuttles",
  "Student Career Fair & Resume Reviews",
  "Study Group Schedules & Room Booking",
  "Financial Aid & Scholarship Inquiries",
  "Art Museum & Gallery Exhibition",
  "Environmental Sustainability Initiatives",
  "Campus Bookstore Course Materials",
  "Registrar Office Transcript Requests",
  "Undergraduate Research Symposium",
  "Campus Recreation Center Fitness Passes",
  "International Student Visa Orientation",
  "Graduation Ceremony & Commencement"
];

const GENERATE_LISTEN_REPEAT_SENTENCES = (theme: string, level: 'Easy' | 'Normal' | 'Hard' | 'Advanced', exNum: number): ListenAndRepeatItem[] => {
  const sentenceBanks = {
    Easy: [
      { text: "The library closes at eight o'clock tonight.", tips: "Link 'at' and 'eight' smoothly.", keywords: ["library", "closes", "eight", "tonight"] },
      { text: "Please show your student ID card at the front desk.", tips: "Clear stop on 'desk'.", keywords: ["student ID", "card", "front desk"] },
      { text: "You can find extra study tables on the second floor.", tips: "Stress 'tables' and 'second floor'.", keywords: ["study tables", "second floor"] },
      { text: "Don't forget to submit your lab report before Friday afternoon.", tips: "Keep the rhythm steady across 'Friday afternoon'.", keywords: ["submit", "lab report", "Friday"] },
      { text: "The shuttle bus arrives every fifteen minutes near the cafeteria.", tips: "Pronounce 'fifteen' with rising emphasis.", keywords: ["shuttle bus", "fifteen minutes", "cafeteria"] },
      { text: "Make sure you double check your class schedule on the university portal.", tips: "Natural intonation on 'university portal'.", keywords: ["double check", "class schedule", "portal"] },
      { text: "If you need any academic assistance, talk to your course tutor today.", tips: "Pause slightly after 'assistance'.", keywords: ["academic assistance", "tutor"] }
    ],
    Normal: [
      { text: "All students are required to register their vehicles before parking on campus.", tips: "Connect 'required to' without hesitation.", keywords: ["required", "register", "vehicles", "parking"] },
      { text: "The chemistry professor rescheduled the midterm examination for next Tuesday morning.", tips: "Stress the first syllable of 'chemistry' and 'midterm'.", keywords: ["chemistry", "rescheduled", "midterm", "Tuesday"] },
      { text: "You must complete the mandatory safety module prior to entering the biology laboratory.", tips: "Clear pronunciation of 'mandatory' and 'laboratory'.", keywords: ["mandatory", "safety module", "biology laboratory"] },
      { text: "Graduate teaching assistants will hold extended review sessions throughout the final exam period.", tips: "Smooth transition between 'review sessions' and 'final exam'.", keywords: ["teaching assistants", "review sessions", "final exam"] },
      { text: "Detailed financial aid disbursement notifications have been sent to your primary student email.", tips: "Emphasize 'disbursement notifications'.", keywords: ["financial aid", "disbursement", "student email"] },
      { text: "Several computer workstations in the technology wing are currently reserved for engineering students.", tips: "Maintain natural rhythm across compound noun phrases.", keywords: ["workstations", "technology wing", "engineering"] },
      { text: "Students presenting research posters must confirm their registration at the symposium reception.", tips: "Stress 'research posters' and 'symposium reception'.", keywords: ["research posters", "registration", "symposium"] }
    ],
    Hard: [
      { text: "The revised university academic policy restricts late course withdrawals to extraordinary medical circumstances.", tips: "Fluid delivery of 'extraordinary medical circumstances'.", keywords: ["revised", "academic policy", "withdrawals", "circumstances"] },
      { text: "Interdisciplinary research grants provide substantial supplementary funding for collaborative undergraduate faculty projects.", tips: "Keep cadence steady across polysyllabic adjectives.", keywords: ["interdisciplinary", "supplementary", "collaborative"] },
      { text: "Participants are strongly encouraged to critically evaluate conflicting empirical data during classroom discussions.", tips: "Clear syllable articulation on 'critically evaluate' and 'empirical'.", keywords: ["critically evaluate", "empirical data", "discussions"] },
      { text: "The department provost announced comprehensive infrastructural upgrades designed to enhance digital connectivity campus-wide.", tips: "Controlled breath on 'comprehensive infrastructural upgrades'.", keywords: ["provost", "infrastructural", "digital connectivity"] },
      { text: "Prospective doctoral candidates must defend their preliminary dissertation prospectus before the faculty oversight committee.", tips: "Distinct stress on 'preliminary dissertation prospectus'.", keywords: ["doctoral candidates", "dissertation prospectus", "committee"] },
      { text: "Environmental analyses indicate that sustainable energy conversions significantly reduce annual municipal operating overhead.", tips: "Smooth liaison in 'sustainable energy conversions'.", keywords: ["environmental analyses", "sustainable energy", "operating overhead"] },
      { text: "Cognitive linguistics illustrates how subconscious perceptual biases shape the syntactic framing of persuasive rhetoric.", tips: "Flawless rhythm over 'subconscious perceptual biases'.", keywords: ["cognitive linguistics", "perceptual biases", "syntactic framing"] }
    ],
    Advanced: [
      { text: "Epistemological inquiry mandates that theoretical hypotheses undergo rigorous empirical scrutiny to establish valid foundational paradigms.", tips: "Mastery of multisyllabic academic cadence and flawless phrasing.", keywords: ["epistemological", "hypotheses", "empirical scrutiny", "paradigms"] },
      { text: "Macroeconomic volatility necessitates that central banking institutions execute calibrated interventions to preserve systemic financial liquidity.", tips: "Precise stress and rhythmic pauses across institutional terminology.", keywords: ["macroeconomic", "central banking", "calibrated interventions", "liquidity"] },
      { text: "Neurobiological imaging demonstrates that prolonged multilingual acquisition markedly enhances executive cognitive functioning in adults.", tips: "Crisp consonants and natural prosodic contour.", keywords: ["neurobiological", "multilingual", "executive cognitive"] },
      { text: "Anthropological excavations corroborate the hypothesis that communal agrarian practices preceded institutionalized bureaucratic hierarchies.", tips: "Seamless linkage across formal historical academic prose.", keywords: ["anthropological", "agrarian practices", "bureaucratic hierarchies"] },
      { text: "Technological democratization presents unprecedented opportunities alongside complex ethical dilemmas concerning proprietary algorithmic governance.", tips: "Unbroken fluency across intricate compound nouns.", keywords: ["technological democratization", "algorithmic governance", "dilemmas"] },
      { text: "The comprehensive architectural retrofitting initiative meticulously optimizes thermodynamic efficiency while preserving historical aesthetic integrity.", tips: "Steady pace, perfect vowel clarity, and distinct final consonants.", keywords: ["architectural retrofitting", "thermodynamic efficiency", "aesthetic integrity"] },
      { text: "Scholarly discourse regarding socioeconomic stratification underscores the imperative for equitable structural reform across educational ecosystems.", tips: "Native-level prosody and sophisticated academic phrasing.", keywords: ["socioeconomic stratification", "equitable structural reform", "ecosystems"] }
    ]
  };

  const pool = sentenceBanks[level];
  return pool.map((item, idx) => ({
    id: `lr-${level.toLowerCase()}-ex${exNum}-item${idx + 1}`,
    audioPrompt: item.text,
    context: `${theme} • Item ${idx + 1} of 7`,
    difficultyBand: idx < 2 ? 'Beginner' : idx < 5 ? 'Intermediate' : idx < 6 ? 'Advanced' : 'Mastery',
    keywords: item.keywords,
    phoneticTips: item.tips
  }));
};

export const getListenRepeatDrills = (level: 'Easy' | 'Normal' | 'Hard' | 'Advanced'): ListenRepeatDrill[] => {
  const cycleOffset = (monthlyPracticeEngine.getActiveEdition().cycleSeed - 1) * 3;
  return Array.from({ length: 20 }).map((_, i) => {
    const exNum = i + 1;
    const theme = LISTEN_REPEAT_THEMES[(exNum - 1 + cycleOffset) % LISTEN_REPEAT_THEMES.length];
    return {
      id: `lr-${level.toLowerCase()}-${exNum}`,
      level,
      exerciseNumber: exNum,
      theme,
      items: GENERATE_LISTEN_REPEAT_SENTENCES(theme, level, exNum)
    };
  });
};

// ============================================================================
// 2. TAKE AN INTERVIEW DRILLS (4 questions per drill, 20 drills per tier)
// ============================================================================
const INTERVIEW_TOPICS = [
  {
    title: "University Study Habits & Daily Routines",
    role: "Campus Student Life Advisor",
    name: "Dr. Karen Mitchell",
    avatar: "👩‍🏫",
    questions: [
      {
        q: "How do you usually organize your study schedule during a busy university semester?",
        pts: ["Daily digital calendar or planner", "Prioritizing urgent deadlines", "Setting quiet morning focus hours"],
        model: "I usually organize my study schedule by maintaining a digital calendar on my laptop. Every Sunday evening, I list all upcoming assignment deadlines and exam dates. Then, I block out dedicated two-hour focus sessions in the mornings when my mind is freshest, ensuring I never leave major projects to the last minute.",
        phrases: ["I typically organize my routine by...", "First and foremost, ...", "This method allows me to..."]
      },
      {
        q: "Do you prefer studying alone in a quiet room or working with a group of classmates? Why?",
        pts: ["Contrast deep focus vs collaborative sharing", "Personal preference with concrete example", "Balanced summary"],
        model: "I generally prefer studying alone when I need to read dense textbooks or memorize key terms because silence helps my concentration. However, before major exams, I find it very beneficial to meet with a small study group for an hour to quiz each other and discuss tricky concepts that someone might have misunderstood.",
        phrases: ["For the most part, I prefer...", "On one hand, studying independently...", "However, collaborative sessions are great for..."]
      },
      {
        q: "What is the biggest challenge you face when preparing for a major exam, and how do you handle it?",
        pts: ["Information overload or time pressure", "Specific strategy (Pomodoro / breaking down tasks)", "Outcome/results"],
        model: "My biggest challenge is dealing with information overload and stress when multiple exams fall on consecutive days. To handle this, I break down large textbook chapters into bite-sized summaries and use active recall flashcards. Taking short walks between study intervals also keeps my mental energy high.",
        phrases: ["The most significant hurdle is...", "To overcome this, I usually...", "As a result, I can maintain..."]
      },
      {
        q: "How do you think technology and digital apps have changed the way modern students learn?",
        pts: ["Instant access to lectures and journals", "Collaborative online docs", "Potential digital distraction"],
        model: "Technology has completely revolutionized modern learning. Students can now access recorded lectures, academic databases, and collaborative cloud documents from anywhere in the world. While digital notifications can sometimes be distracting, the ability to search information instantly makes research much faster and more efficient.",
        phrases: ["Technology has fundamentally transformed...", "One major benefit is...", "In conclusion, digital tools..."]
      }
    ]
  },
  {
    title: "Campus Living & Roommate Relationships",
    role: "Residence Hall Director",
    name: "Marcus Reynolds",
    avatar: "👨‍💼",
    questions: [
      {
        q: "What are some of the most important qualities of a good roommate in a university dormitory?",
        pts: ["Mutual respect for quiet hours", "Cleanliness in shared spaces", "Open communication"],
        model: "In my opinion, the most crucial qualities in a roommate are mutual respect and open communication. A great roommate respects agreed-upon quiet hours for studying and sleeping, and keeps shared spaces tidy. When minor disagreements arise, being able to talk calmly makes living together enjoyable.",
        phrases: ["The primary qualities I value are...", "First, having respect for...", "Moreover, direct communication..."]
      },
      {
        q: "If you had a disagreement with a roommate about cleanliness or noise, how would you resolve it?",
        pts: ["Polite direct conversation", "Establishing a clear chore/quiet schedule", "Seeking RA mediation if needed"],
        model: "If a disagreement occurred, I would suggest having a casual, friendly conversation over coffee rather than letting frustration build up. We could establish a clear weekly cleaning schedule and set designated quiet hours. Approaching the situation politely ensures both roommates feel heard without creating unnecessary tension.",
        phrases: ["I would resolve the issue by...", "Rather than escalating, ...", "Setting clear ground rules helps..."]
      },
      {
        q: "What are the advantages and disadvantages of living on campus versus renting an apartment off campus?",
        pts: ["On campus: convenience & community", "Off campus: independence & privacy", "Cost/commute tradeoff"],
        model: "Living on campus offers unmatched convenience because you are just minutes away from classrooms, libraries, and campus dining halls. On the other hand, renting an apartment off campus provides greater independence, private living space, and quieter surroundings, although it involves commuting and managing utility bills.",
        phrases: ["The primary advantage of campus housing is...", "Conversely, off-campus living provides...", "Ultimately, the choice depends on..."]
      },
      {
        q: "How can universities make first-year residential students feel more welcomed and connected?",
        pts: ["Organizing icebreaker events", "Peer mentor support", "Floor dinners & intramural sports"],
        model: "Universities can help new students feel at home by hosting orientation events, floor dinners, and campus-wide social mixers during the first few weeks. Pairing incoming freshmen with upper-class student mentors is also an excellent way to provide guidance, reduce homesickness, and build a vibrant community.",
        phrases: ["To foster community, colleges should...", "One effective approach is...", "This directly helps students..."]
      }
    ]
  },
  {
    title: "Career Goals & Professional Internships",
    role: "Career Services Counselor",
    name: "Dr. Evelyn Vance",
    avatar: "👩‍💼",
    questions: [
      {
        q: "What field or career are you interested in pursuing after graduation, and what inspired your choice?",
        pts: ["Clear field of study", "Specific personal interest or project", "Long-term goal"],
        model: "I am pursuing a career in software development and data analytics. My interest was sparked during my introductory computer science course, where I built an interactive web tool that helped local students find tutoring. Solving practical problems through clean code inspired me to turn this passion into my professional vocation.",
        phrases: ["I am currently preparing for a career in...", "My enthusiasm began when...", "Looking ahead, I hope to..."]
      },
      {
        q: "How valuable do you think internship experience is compared to classroom academic coursework?",
        pts: ["Practical hands-on application", "Industry networking & teamwork", "Complementary nature of both"],
        model: "I believe internships and classroom learning are equally important and complement each other. Coursework provides essential theoretical foundations and analytical rigor, but internships teach you how to apply that knowledge to real-world products, collaborate in cross-functional teams, and adapt to professional workplace deadlines.",
        phrases: ["While classroom theory is essential, ...", "Internships provide invaluable exposure to...", "Together, they prepare graduates for..."]
      },
      {
        q: "What skills do you think will be most important for future job seekers in a competitive global market?",
        pts: ["Adaptability & continuous learning", "Digital literacy", "Cross-cultural communication"],
        model: "In today's fast-evolving market, adaptability and strong communication skills are paramount. With technological advancements like AI transforming industries, professionals must be proactive learners who can quickly master new software and collaborate effectively with diverse international teams across different time zones.",
        phrases: ["I believe the single most critical skill is...", "Given the rapid pace of change, ...", "Additionally, effective communication..."]
      },
      {
        q: "What steps are you currently taking to build your professional portfolio and network?",
        pts: ["Working on hands-on projects", "Attending campus career fairs", "Connecting on professional networks"],
        model: "I am actively building a portfolio of original independent projects on GitHub to showcase my technical abilities to recruiters. I also attend university career fairs, participate in student club workshops, and connect with alumni on LinkedIn to learn about emerging industry opportunities and mentorship.",
        phrases: ["To strengthen my portfolio, I am...", "In terms of networking, ...", "These actions help me stay prepared for..."]
      }
    ]
  },
  {
    title: "Environmental Sustainability & Green Campus Initiatives",
    role: "Campus Sustainability Coordinator",
    name: "Julian Rivera",
    avatar: "👨‍🔬",
    questions: [
      {
        q: "What everyday actions can university students take to reduce their environmental footprint on campus?",
        pts: ["Using reusable bottles & mugs", "Sorting recyclables & compost", "Walking or biking to class"],
        model: "Students can make a big difference through small everyday habits. Carrying a reusable water bottle and coffee mug prevents hundreds of single-use plastic cups from entering landfills. Additionally, walking, biking, or taking campus shuttles instead of driving cuts down carbon emissions significantly.",
        phrases: ["Simple daily habits include...", "For instance, by using...", "Furthermore, choosing eco-friendly transit..."]
      },
      {
        q: "Should universities ban all single-use plastics in campus dining facilities? Why or why not?",
        pts: ["Environmental benefits of plastic elimination", "Feasibility of biodegradable alternatives", "Implementation steps"],
        model: "I strongly believe universities should eliminate single-use plastics in all dining halls. Transitioning to compostable packaging and reusable dishware drastically reduces municipal waste. As educational leaders, universities have a responsibility to model sustainable practices for the broader community.",
        phrases: ["I fully support banning single-use plastics because...", "Switching to compostable alternatives...", "This initiative sets a strong example for..."]
      },
      {
        q: "How can technology help cities transition toward renewable energy and cleaner transportation?",
        pts: ["Smart grids & battery storage", "Electric vehicle networks", "Data monitoring for energy efficiency"],
        model: "Technology plays an indispensable role in clean energy transitions. Advanced battery storage systems allow cities to capture solar and wind energy efficiently even when weather conditions fluctuate. Moreover, smart grid sensors help municipal utilities balance power demand and optimize electric public transit routes in real time.",
        phrases: ["Technology accelerates sustainability by...", "One key innovation is...", "Consequently, cities can achieve..."]
      },
      {
        q: "What role do you think youth and university student organizations should play in climate change advocacy?",
        pts: ["Raising campus awareness", "Petitioning university administrations for green policies", "Community volunteer work"],
        model: "Student organizations are at the forefront of climate advocacy. Young people bring passion, innovative ideas, and urgency to environmental policy debates. By organizing campus cleanups, advocating for university renewable investments, and educating peers, student leaders drive meaningful long-term change.",
        phrases: ["Youth organizations play a vital role in...", "Their advocacy is crucial because...", "Through grassroots initiatives, ..."]
      }
    ]
  }
];

export const getInterviewDrills = (level: 'Easy' | 'Normal' | 'Hard' | 'Advanced'): InterviewDrill[] => {
  const cycleOffset = (monthlyPracticeEngine.getActiveEdition().cycleSeed - 1) * 2;
  return Array.from({ length: 20 }).map((_, i) => {
    const exNum = i + 1;
    const baseTopic = INTERVIEW_TOPICS[(exNum - 1 + cycleOffset) % INTERVIEW_TOPICS.length];
    
    return {
      id: `interview-${level.toLowerCase()}-${exNum}`,
      level,
      exerciseNumber: exNum,
      topicTitle: `${baseTopic.title} (Drill ${exNum})`,
      scenarioContext: `Simulated 4-Question Conversational Interview with ${baseTopic.name} (${baseTopic.role}).`,
      interviewerName: baseTopic.name,
      interviewerRole: baseTopic.role,
      interviewerAvatar: baseTopic.avatar,
      questions: baseTopic.questions.map((qObj, qIdx) => ({
        questionNumber: qIdx + 1,
        questionText: qObj.q,
        interviewerPersona: baseTopic.role,
        avatar: baseTopic.avatar,
        suggestedPoints: qObj.pts,
        modelAnswer: qObj.model,
        usefulPhrases: qObj.phrases
      }))
    };
  });
};
