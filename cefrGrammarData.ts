export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface GrammarRule {
  id: string;
  title: string;
  category: string;
  formula: string;
  summary: string;
  detailedExplanation: string[];
  diagramType?: 'timeline' | 'pyramid' | 'syntaxTree' | 'conditionalMatrix' | 'flowchart' | 'comparisonTable' | 'inversionBlueprint';
  diagramData?: any;
  examples: {
    sentence: string;
    translationOrContext?: string;
    breakdown?: { token: string; role: string; color: string }[];
    isCorrect: boolean;
    note?: string;
  }[];
  commonMistakes: {
    incorrect: string;
    correct: string;
    why: string;
    trapName: string;
  }[];
  proTips: string[];
}

export interface CEFRLevelInfo {
  level: CEFRLevel;
  name: string;
  descriptor: string;
  proficiencyTarget: string;
  studentAudience: string;
  cefrColor: {
    bg: string;
    text: string;
    border: string;
    gradient: string;
    accent: string;
    lightBg: string;
  };
  summary: string;
  coreCompetencies: string[];
  grammarTopics: GrammarRule[];
  doctorCases: {
    id: string;
    title: string;
    flawedSentence: string;
    errorType: string;
    correction: string;
    ruleExplanation: string;
    tokens: { word: string; isError?: boolean; label?: string }[];
  }[];
  quizQuestions: {
    id: string;
    question: string;
    sentenceWithBlank?: string;
    options: { id: string; text: string; isCorrect: boolean; explanation: string }[];
    targetConcept: string;
  }[];
}

export const CEFR_GRAMMAR_LEVELS: Record<CEFRLevel, CEFRLevelInfo> = {
  A1: {
    level: 'A1',
    name: 'A1 • Beginner Foundations',
    descriptor: 'Beginner / Daily Life & Essential Basics',
    proficiencyTarget: 'Beginner Level: Daily Basics & Simple Sentences',
    studentAudience: 'For students just starting their English journey: Learn how to build basic sentences, introduce yourself, talk about daily habits, and use common prepositions.',
    cefrColor: {
      bg: 'bg-emerald-500',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      gradient: 'from-emerald-600 via-teal-700 to-slate-900',
      accent: 'text-emerald-400',
      lightBg: 'bg-emerald-50'
    },
    summary: 'A1 builds your foundational confidence in English: learning Subject-Verb-Object word order, the verb "to be" (am/is/are), Present Simple for daily habits and facts, essential pronouns, basic articles (a/an/the), and everyday prepositions of time and place (in, on, at).',
    coreCompetencies: [
      'Build simple, clear declarative sentences (Subject + Verb + Object)',
      'Use the verb "to be" correctly in affirmative statements, negatives, and questions',
      'Talk about daily habits and facts using the Present Simple (adding -s/-es for he/she/it)',
      'Choose the right article: "a" vs "an" vs "the"',
      'Use "in", "on", and "at" accurately for times, days, dates, cities, and places'
    ],
    grammarTopics: [
      {
        id: 'a1_present_simple',
        title: 'Present Simple & The Verb "To Be"',
        category: 'Everyday Verbs & Habits',
        formula: 'Affirmative: Subject + Verb(s/es) | Negative: Subject + do/does not + Base Verb | Question: Do/Does + Subject + Base Verb?',
        summary: 'Use the Present Simple to talk about your daily routines, hobbies, permanent states, and general facts.',
        detailedExplanation: [
          'The Present Simple is the most important tense for everyday conversation. Use it for things that happen regularly or are always true.',
          'The He/She/It Rule: When your subject is he, she, it, or one person/thing, add "-s" (e.g. works, speaks), "-es" after ch, sh, ss, x, o (watches, goes), or "-ies" after a consonant + y (studies).',
          'In questions and negative sentences, use "do" (for I, you, we, they) or "does" (for he, she, it). The main verb stays in its base form (e.g., "She does not like coffee", not "likes").'
        ],
        diagramType: 'syntaxTree',
        diagramData: {
          title: 'Basic Sentence Structure Tree',
          nodes: [
            { label: 'Sentence', children: [
              { label: 'Subject (Who?)', detail: 'The student / Sarah / We / Water' },
              { label: 'Verb Phrase (Action)', children: [
                { label: 'Main Verb', detail: 'studies / lives / boils' },
                { label: 'Object / Place / Time', detail: 'English / in New York / every morning' }
              ]}
            ]}
          ]
        },
        examples: [
          {
            sentence: 'Sarah drinks fresh orange juice every morning before school.',
            translationOrContext: 'Daily routine (Habitual action)',
            breakdown: [
              { token: 'Sarah', role: 'Subject (She)', color: 'text-blue-600 font-bold' },
              { token: 'drinks', role: 'Verb + -s (3rd person singular)', color: 'text-emerald-600 font-bold' },
              { token: 'fresh orange juice', role: 'Object', color: 'text-purple-600' },
              { token: 'every morning', role: 'Time Expression', color: 'text-amber-600' }
            ],
            isCorrect: true
          },
          {
            sentence: 'They do not speak Spanish at home.',
            translationOrContext: 'Negative sentence with auxiliary "do not"',
            breakdown: [
              { token: 'They', role: 'Subject (Plural)', color: 'text-blue-600 font-bold' },
              { token: 'do not', role: 'Negative Helper', color: 'text-amber-600 font-bold' },
              { token: 'speak', role: 'Base Verb (No -s)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'My brother live in Toronto and work in a bank.',
            correct: 'My brother lives in Toronto and works in a bank.',
            why: 'Singular subject "My brother" (he) requires "-s" on both verbs in the Present Simple.',
            trapName: 'Forgetting the 3rd-person -s'
          },
          {
            incorrect: 'Does your friend likes playing soccer?',
            correct: 'Does your friend like playing soccer?',
            why: 'When you use the helper "Does", the main verb must be in its base form without "-s".',
            trapName: 'Double -s error with Does'
          }
        ],
        proTips: [
          'Helpful frequency words: always, usually, often, sometimes, never, every day.',
          'Never use "-ing" for permanent facts: Say "I live in Paris", not "I am living in Paris permanently".'
        ]
      },
      {
        id: 'a1_prepositions_time_place',
        title: 'Prepositions of Time & Place (In, On, At)',
        category: 'Time & Space Prepositions',
        formula: 'IN (General / Enclosed Space / Big Time) → ON (Specific Surfaces / Days & Dates) → AT (Exact Pinpoint Point / Clock Time)',
        summary: 'Master the 3 most common English prepositions using a simple pyramid: from the biggest/broadest to the most specific.',
        detailedExplanation: [
          'Think of In, On, and At like a funnel or pyramid that gets narrower and more specific:',
          'IN (Big & General): Use for centuries, years, months, seasons, and parts of the day (in 2026, in July, in the morning). For places: countries, cities, and inside rooms/enclosed spaces (in Japan, in London, in the kitchen).',
          'ON (Medium & Specific): Use for days of the week, calendar dates, and special days (on Monday, on May 15th, on my birthday). For places: streets, avenues, surfaces, and public transit (on Main Street, on the table, on the train).',
          'AT (Pinpoint & Exact): Use for exact clock hours and precise moments (at 3:30 PM, at noon, at midnight, at night). For places: exact street addresses and specific spots (at 120 Green Street, at the bus stop, at home).'
        ],
        diagramType: 'pyramid',
        diagramData: {
          title: 'The IN / ON / AT Visual Pyramid',
          levels: [
            { name: 'IN', scope: 'Broadest / General', time: 'Years, Months, Seasons (in 2026, in July, in summer)', place: 'Countries, Cities, Rooms (in Canada, in Paris, in the room)' },
            { name: 'ON', scope: 'Intermediate / Days & Surfaces', time: 'Days, Dates, Special Days (on Friday, on June 4th)', place: 'Streets, Surfaces, Floors (on Oxford Street, on the desk)' },
            { name: 'AT', scope: 'Narrowest / Exact Coordinates', time: 'Clock Times, Exact Moments (at 7:00 PM, at noon, at night)', place: 'Exact Addresses, Specific Spots (at 45 Park Ave, at the entrance)' }
          ]
        },
        examples: [
          {
            sentence: 'The English class starts at 9:00 AM on Monday in Room 204.',
            translationOrContext: 'Combining time, day, and room prepositions in one clear sentence',
            breakdown: [
              { token: 'at 9:00 AM', role: 'Exact Clock Time (AT)', color: 'text-rose-600 font-bold' },
              { token: 'on Monday', role: 'Specific Day of Week (ON)', color: 'text-amber-600 font-bold' },
              { token: 'in Room 204', role: 'Enclosed Room (IN)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'My birthday is in 14th of September at the morning.',
            correct: 'My birthday is on September 14th in the morning.',
            why: 'Specific calendar dates need "on", and parts of the day take "in the morning".',
            trapName: 'Mixing up In and On for Dates'
          }
        ],
        proTips: [
          'Quick memory trick: We say "at night", but "in the morning", "in the afternoon", and "in the evening".'
        ]
      },
      {
        id: 'a1_pronouns_articles',
        title: 'Pronouns & Articles (A, An, The)',
        category: 'Nouns & Basics',
        formula: 'Subject Pronouns (I, you, he, she, it, we, they) vs Object Pronouns (me, you, him, her, it, us, them) | A/An (Singular general) vs The (Specific)',
        summary: 'Learn who is doing the action, who is receiving it, and how to pick the right article.',
        detailedExplanation: [
          'Subject pronouns (I, you, he, she, it, we, they) do the action: "She called me yesterday."',
          'Object pronouns (me, you, him, her, it, us, them) receive the action or come after prepositions: "Listen to him", "Give the book to us."',
          'Article "A" vs "An": Use "a" before consonant sounds (a book, a university - "u" sounds like "y"). Use "an" before vowel sounds (an apple, an hour - "h" is silent).',
          'Article "The": Use "the" when both you and the listener know exactly which thing you are talking about: "Pass me the salt, please."'
        ],
        diagramType: 'comparisonTable',
        diagramData: {
          headers: ['Pronoun Type', '1st Person Singular', '3rd Person (Male)', '3rd Person (Female)', 'Plural'],
          rows: [
            ['Subject (Doer)', 'I', 'He', 'She', 'They'],
            ['Object (Receiver)', 'Me', 'Him', 'Her', 'Them'],
            ['Possessive Adjective', 'My (+ noun)', 'His (+ noun)', 'Her (+ noun)', 'Their (+ noun)'],
            ['Possessive Pronoun', 'Mine', 'His', 'Hers', 'Theirs']
          ]
        },
        examples: [
          {
            sentence: 'David called my friend and me to invite us to the party.',
            translationOrContext: 'Correct use of object pronouns "me" and "us"',
            breakdown: [
              { token: 'David', role: 'Subject (Doer)', color: 'text-blue-600 font-bold' },
              { token: 'called', role: 'Action Verb', color: 'text-amber-600 font-bold' },
              { token: 'my friend and me', role: 'Direct Objects (Receivers)', color: 'text-emerald-600 font-bold' },
              { token: 'to invite us', role: 'Object Pronoun', color: 'text-purple-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'The teacher asked my friend and I to stay after class.',
            correct: 'The teacher asked my friend and me to stay after class.',
            why: 'The teacher asked "me", not "I". When someone is receiving an action, always use "me".',
            trapName: 'Using "I" instead of "me"'
          },
          {
            incorrect: 'She is studying in an university for a year.',
            correct: 'She is studying in a university for a year.',
            why: '"University" starts with a "y" sound (consonant sound), so it takes "a", not "an".',
            trapName: 'Sound-based article mistake'
          }
        ],
        proTips: [
          'Simple test: Remove the other person from the sentence. You would never say "The teacher asked I". You naturally say "The teacher asked me".'
        ]
      }
    ],
    doctorCases: [
      {
        id: 'doc_a1_1',
        title: 'Missing -s on 3rd-person singular',
        flawedSentence: 'Every day, our English teacher explain the new words on the board.',
        errorType: 'Present Simple Subject-Verb Agreement',
        correction: 'Every day, our English teacher explains the new words on the board.',
        ruleExplanation: 'When the subject is one person ("our English teacher" = he/she), the verb must end with "-s" in the Present Simple.',
        tokens: [
          { word: 'Every day, ' },
          { word: 'our English teacher ' },
          { word: 'explain', isError: true, label: 'Add -s: "explains"' },
          { word: ' the new words on the board.' }
        ]
      },
      {
        id: 'doc_a1_2',
        title: 'Using the wrong preposition for days',
        flawedSentence: 'We have our group project meeting in Friday afternoon at 2:00 PM.',
        errorType: 'Preposition of Time',
        correction: 'We have our group project meeting on Friday afternoon at 2:00 PM.',
        ruleExplanation: 'Always use "on" for days of the week and specific day parts like Friday afternoon.',
        tokens: [
          { word: 'We have our group project meeting ' },
          { word: 'in', isError: true, label: 'Change to "on" for days' },
          { word: ' Friday afternoon ' },
          { word: 'at 2:00 PM.' }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q_a1_1',
        question: 'Which sentence is 100% grammatically correct for daily habits?',
        options: [
          { id: 'a', text: 'My best friend live in Madrid and speak fluent Spanish.', isCorrect: false, explanation: 'Missing -s: My best friend (he/she) needs "lives" and "speaks".' },
          { id: 'b', text: 'My best friend lives in Madrid and speaks fluent Spanish.', isCorrect: true, explanation: 'Correct! Both verbs end in "-s" for the singular subject "My best friend".' },
          { id: 'c', text: 'My best friend living in Madrid and speaks fluent Spanish.', isCorrect: false, explanation: 'You cannot use "-ing" alone as the main verb without "is".' },
          { id: 'd', text: 'My best friend does lives in Madrid.', isCorrect: false, explanation: 'Do not add "-s" when using "does".' }
        ],
        targetConcept: 'Present Simple 3rd-Person Agreement'
      },
      {
        id: 'q_a1_2',
        question: 'Choose the correct prepositions to complete the sentence:',
        sentenceWithBlank: 'Our flight leaves ___ 7:30 AM ___ Saturday morning ___ July.',
        options: [
          { id: 'a', text: 'at / on / in', isCorrect: true, explanation: 'Perfect! "at" for clock time (7:30 AM), "on" for days (Saturday morning), and "in" for months (July).' },
          { id: 'b', text: 'in / at / on', isCorrect: false, explanation: 'Inverted prepositions.' },
          { id: 'c', text: 'on / in / at', isCorrect: false, explanation: 'Incorrect preposition pairing.' },
          { id: 'd', text: 'at / in / on', isCorrect: false, explanation: 'Months take "in", and days take "on".' }
        ],
        targetConcept: 'Time Prepositions (At, On, In)'
      }
    ]
  },

  A2: {
    level: 'A2',
    name: 'A2 • Elementary English',
    descriptor: 'Elementary / Everyday Conversations & Stories',
    proficiencyTarget: 'Elementary Level: Daily Conversations, Past Stories & Comparisons',
    studentAudience: 'For students who know the basics and want to expand into everyday storytelling, comparing things, expressing ability, giving advice, and talking about future plans.',
    cefrColor: {
      bg: 'bg-cyan-500',
      text: 'text-cyan-700',
      border: 'border-cyan-200',
      gradient: 'from-cyan-700 via-blue-800 to-slate-900',
      accent: 'text-cyan-400',
      lightBg: 'bg-cyan-50'
    },
    summary: 'A2 lets you tell stories in the past (Past Simple), describe what is happening right now (Present Continuous), make comparisons (faster, more interesting), use helper modals (can, could, must, should), and talk about future plans (going to vs will).',
    coreCompetencies: [
      'Tell past stories and experiences using regular (-ed) and irregular past verbs',
      'Distinguish finished past events from actions happening right now',
      'Compare people, places, and objects using comparative (-er / more) and superlative (-est / most) forms',
      'Express ability, permission, advice, and obligation with modals (can, could, should, must, have to)',
      'Talk about future intentions (going to) and instant decisions (will)'
    ],
    grammarTopics: [
      {
        id: 'a2_past_simple_continuous',
        title: 'Past Simple vs. Present Continuous & Stative Verbs',
        category: 'Storytelling & Ongoing Actions',
        formula: 'Past Simple: Subject + Verb(-ed / irregular past) | Present Continuous: Subject + am/is/are + Verb(-ing)',
        summary: 'Learn how to talk about completed past stories vs. things happening right now in front of you.',
        detailedExplanation: [
          'Use the Past Simple when an action started and finished in the past at a specific time (yesterday, last week, in 2024, two hours ago). Example: "We visited the museum yesterday."',
          'Use the Present Continuous (am/is/are + verb-ing) for actions happening right now or temporary situations: "Look, it is raining outside!"',
          'Stative Verbs rule: Some verbs describe states or feelings rather than physical actions (like know, understand, believe, love, hate, want, belong). These verbs are almost NEVER used with "-ing". Say "I understand the lesson", NOT "I am understanding the lesson".'
        ],
        diagramType: 'timeline',
        diagramData: {
          title: 'Past vs Present Ongoing Timeline',
          events: [
            { time: 'Completed Past (Finished)', tense: 'Past Simple', marker: 'Yesterday / In 2024', example: 'We arrived in London yesterday.' },
            { time: 'Right Now (In Progress)', tense: 'Present Continuous', marker: 'Right now / Currently', example: 'We are exploring the city center.' },
            { time: 'Feeling / Mental State (Stative)', tense: 'Present Simple (No -ing)', marker: 'Permanent Feeling', example: 'We love this beautiful city.' }
          ]
        },
        examples: [
          {
            sentence: 'I finished my homework an hour ago, and now I am watching an English movie.',
            translationOrContext: 'Connecting a finished past event with a current ongoing activity',
            breakdown: [
              { token: 'finished', role: 'Past Simple (Completed)', color: 'text-blue-600 font-bold' },
              { token: 'an hour ago', role: 'Past Time Marker', color: 'text-amber-600 font-bold' },
              { token: 'am watching', role: 'Present Continuous (Right now)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Right now, I am wanting a glass of cold water.',
            correct: 'Right now, I want a glass of cold water.',
            why: '"Want" is a stative verb of desire and does not take the "-ing" form.',
            trapName: 'Using -ing with stative verbs'
          },
          {
            incorrect: 'Yesterday she go to the supermarket and buyed fruit.',
            correct: 'Yesterday she went to the supermarket and bought fruit.',
            why: '"Go" and "buy" are irregular past verbs (went, bought).',
            trapName: 'Irregular past verb error'
          }
        ],
        proTips: [
          'Top 10 irregular past verbs to memorize: be (was/were), go (went), have (had), see (saw), get (got), make (made), take (took), say (said), come (came), buy (bought).'
        ]
      },
      {
        id: 'a2_comparatives_superlatives',
        title: 'Comparatives & Superlatives (Comparing Things)',
        category: 'Adjectives & Descriptions',
        formula: 'Comparative: [Short Adj + -er than] OR [more + Long Adj than] | Superlative: the + [Short Adj + -est] OR the most + [Long Adj]',
        summary: 'Learn how to compare two things (A is bigger than B) or highlight the absolute #1 (C is the biggest).',
        detailedExplanation: [
          'Short adjectives (1 syllable): Add "-er" for comparisons and "-est" for superlatives: fast → faster than → the fastest; tall → taller than → the tallest.',
          'Adjectives ending in -y (2 syllables): Change "y" to "i": happy → happier than → the happiest; easy → easier than → the easiest.',
          'Long adjectives (2 or more syllables): Use "more" and "the most": beautiful → more beautiful than → the most beautiful; expensive → more expensive than → the most expensive.',
          'Irregular adjectives: good → better than → the best; bad → worse than → the worst; far → further than → the furthest.',
          'Saying two things are equal: Use "as ... as" with the base adjective: "This book is as interesting as the movie."'
        ],
        diagramType: 'comparisonTable',
        diagramData: {
          headers: ['Adjective Type', 'Base Word', 'Comparative (+ than)', 'Superlative (the + ...)'],
          rows: [
            ['Short (1 syllable)', 'Fast', 'Faster than', 'The fastest'],
            ['Ends in -y', 'Easy', 'Easier than', 'The easiest'],
            ['Long (2+ syllables)', 'Interesting', 'More interesting than', 'The most interesting'],
            ['Irregular', 'Good', 'Better than', 'The best'],
            ['Irregular', 'Bad', 'Worse than', 'The worst']
          ]
        },
        examples: [
          {
            sentence: 'Traveling by high-speed train is faster and more comfortable than taking the bus.',
            translationOrContext: 'Comparing two modes of transport with both short and long adjectives',
            breakdown: [
              { token: 'faster', role: 'Short Adj + -er', color: 'text-blue-600 font-bold' },
              { token: 'more comfortable', role: 'more + Long Adj', color: 'text-emerald-600 font-bold' },
              { token: 'than', role: 'Comparison Link', color: 'text-purple-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'My new laptop is more faster than my old computer.',
            correct: 'My new laptop is faster than my old computer.',
            why: 'Never use both "more" and "-er" together. Use only "faster".',
            trapName: 'Double comparative mistake'
          },
          {
            incorrect: 'Mount Everest is highest mountain in the world.',
            correct: 'Mount Everest is the highest mountain in the world.',
            why: 'Always include "the" before superlative adjectives.',
            trapName: 'Missing "the" with superlatives'
          }
        ],
        proTips: [
          'Remember: Good $\\rightarrow$ Better $\\rightarrow$ Best. Bad $\\rightarrow$ Worse $\\rightarrow$ Worst. Never say "more good" or "more bad"!'
        ]
      },
      {
        id: 'a2_modals_foundations',
        title: 'Modal Helpers (Can, Could, Should, Must, Have to)',
        category: 'Ability, Advice & Rules',
        formula: 'Subject + Modal (can / could / should / must) + Bare Verb (No "to", No "-s")',
        summary: 'Use modal verbs to talk about what you can do, give friendly advice, and explain rules.',
        detailedExplanation: [
          'The Golden Rule of Modals: Modals never change form (no "-s", no "-ed") and are always followed by the plain base verb without "to" (except "have to").',
          'Ability & Permission: "can" = present ability ("I can swim"); "could" = past ability or polite request ("Could you help me?").',
          'Friendly Advice: "should" = recommendation or good idea ("You look tired; you should get some sleep").',
          'Rules & Strong Obligation: "must" or "have to" = required / mandatory ("Students must bring their ID card").',
          'Prohibition vs Optional: "Must not" = strictly forbidden ("You must not smoke here"). "Do not have to" = not necessary / optional ("Tomorrow is Sunday; you don\'t have to wake up early").'
        ],
        diagramType: 'syntaxTree',
        diagramData: {
          title: 'How Strong is the Modal?',
          nodes: [
            { label: 'Modal Strength Ladder', children: [
              { label: '100% Required (Must / Have to)', detail: 'You must stop at a red light.' },
              { label: '70% Good Advice (Should)', detail: 'You should drink plenty of water daily.' },
              { label: '50% Ability & Permission (Can / Could)', detail: 'You can borrow my pen if you need it.' }
            ]}
          ]
        },
        examples: [
          {
            sentence: 'You should practice speaking English every day, and you must not be afraid of making mistakes.',
            translationOrContext: 'Friendly advice combined with encouraging guidance',
            breakdown: [
              { token: 'should practice', role: 'Modal + Base Verb (Advice)', color: 'text-blue-600 font-bold' },
              { token: 'must not be', role: 'Modal + Negation + Base Verb', color: 'text-rose-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'She can speaks three languages fluently.',
            correct: 'She can speak three languages fluently.',
            why: 'Never add "-s" to the verb after a modal helper like "can".',
            trapName: 'Adding -s after modal verbs'
          },
          {
            incorrect: 'You should to call your doctor today.',
            correct: 'You should call your doctor today.',
            why: 'Do not use "to" after "should". Say "should call".',
            trapName: 'Adding "to" after should/must/can'
          }
        ],
        proTips: [
          'Difference to remember: "You must not" = Don\'t do it (it\'s dangerous or forbidden)! "You don\'t have to" = You can do it if you want, but it\'s not required.'
        ]
      }
    ],
    doctorCases: [
      {
        id: 'doc_a2_1',
        title: 'Double comparative error',
        flawedSentence: 'Learning vocabulary with flashcards is more easier than reading a dictionary.',
        errorType: 'Comparative Adjective Formation',
        correction: 'Learning vocabulary with flashcards is easier than reading a dictionary.',
        ruleExplanation: 'Short adjectives ending in "-y" become comparative by changing to "-ier" (easier). Adding "more" is redundant and incorrect.',
        tokens: [
          { word: 'Learning vocabulary with flashcards is ' },
          { word: 'more easier', isError: true, label: 'Change to just "easier"' },
          { word: ' than reading a dictionary.' }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q_a2_1',
        question: 'Which sentence correctly compares two study methods?',
        options: [
          { id: 'a', text: 'Online practice is more effective than studying alone.', isCorrect: true, explanation: 'Correct! "Effective" is a multi-syllable adjective and correctly takes "more effective than".' },
          { id: 'b', text: 'Online practice is more effectiver than studying alone.', isCorrect: false, explanation: 'Double comparative error.' },
          { id: 'c', text: 'Online practice is effectiver than studying alone.', isCorrect: false, explanation: 'Long adjectives cannot take the "-er" ending.' },
          { id: 'd', text: 'Online practice is as effective than studying alone.', isCorrect: false, explanation: 'Use "as effective as", not "as effective than".' }
        ],
        targetConcept: 'Comparative Adjective Form'
      }
    ]
  },

  B1: {
    level: 'B1',
    name: 'B1 • Intermediate English',
    descriptor: 'Intermediate / Independent & Practical Communicator',
    proficiencyTarget: 'Intermediate Level: Independent Speaker & Everyday Problem Solver',
    studentAudience: 'For students who want to become independent English speakers: Talk about past experiences that affect the present (Present Perfect), imagine situations (Conditionals), and express who did what (Active vs Passive).',
    cefrColor: {
      bg: 'bg-blue-600',
      text: 'text-blue-700',
      border: 'border-blue-200',
      gradient: 'from-blue-700 via-indigo-900 to-slate-900',
      accent: 'text-blue-400',
      lightBg: 'bg-blue-50'
    },
    summary: 'B1 is the bridge to confident independence: connecting past experiences to the present with Present Perfect (since vs for), exploring real and hypothetical situations with Conditionals (0, 1st, 2nd), turning sentences around with Passive Voice, and linking ideas with Relative Clauses (who, which, that).',
    coreCompetencies: [
      'Use Present Perfect (have/has + past participle) for life experiences and unfinished time',
      'Distinguish exact starting points ("since 2020") from durations of time ("for 5 years")',
      'Build real future possibilities (1st Conditional) and imagined situations (2nd Conditional)',
      'Use the Passive Voice when the action or result is more important than the person doing it',
      'Connect sentences smoothly using relative pronouns (who, which, that, where, whose)'
    ],
    grammarTopics: [
      {
        id: 'b1_present_perfect',
        title: 'Present Perfect vs. Past Simple (Since & For)',
        category: 'Connecting Past & Present',
        formula: 'Present Perfect: Subject + have/has + Past Participle (V3) | Time Words: since (starting point) vs for (duration)',
        summary: 'Learn how to talk about your life experiences, things that started in the past and continue today, and recent news.',
        detailedExplanation: [
          'Use the Present Perfect when connecting the past to right now: "I have lived in this city for 3 years" (I still live here now).',
          'Use the Past Simple when the time is completely finished: "I lived in Boston in 2020" (I do not live there anymore).',
          'Since vs. For: Use "since" with an exact starting point (since Monday, since 2018, since I was a child). Use "for" with a duration or period of time (for 3 days, for 5 years, for two hours).',
          'Life Experiences: Use "have you ever...?" to ask about someone\'s life: "Have you ever visited Tokyo?" (in your lifetime).'
        ],
        diagramType: 'timeline',
        diagramData: {
          title: 'Present Perfect Bridge Timeline',
          events: [
            { time: 'Finished Past Point (Past Simple)', tense: 'Past Simple', marker: 'In 2020 (Finished)', example: 'I started learning English in 2020.' },
            { time: 'Past until NOW (Present Perfect Bridge)', tense: 'Present Perfect', marker: 'For 6 years / Since 2020', example: 'I have studied English for 6 years.' }
          ]
        },
        examples: [
          {
            sentence: 'She has worked as an English teacher since 2019, and she has helped hundreds of students.',
            translationOrContext: 'Ongoing career from a past start point up to the present day',
            breakdown: [
              { token: 'has worked', role: 'Present Perfect (Ongoing state)', color: 'text-emerald-600 font-bold' },
              { token: 'since 2019', role: 'Starting Point (SINCE)', color: 'text-blue-600 font-bold' },
              { token: 'has helped', role: 'Accomplishment up to now', color: 'text-purple-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'I have watched that movie yesterday evening.',
            correct: 'I watched that movie yesterday evening.',
            why: 'When you say an exact finished past time ("yesterday evening"), you must use Past Simple, not Present Perfect.',
            trapName: 'Using Present Perfect with finished time words'
          },
          {
            incorrect: 'He has lived in London since five years.',
            correct: 'He has lived in London for five years.',
            why: '"Five years" is a measured duration of time, so you must use "for", not "since".',
            trapName: 'Since vs For confusion'
          }
        ],
        proTips: [
          'Words that love the Present Perfect: already, yet, just, ever, never, recently, since, for.'
        ]
      },
      {
        id: 'b1_conditionals_012',
        title: 'Zero, First & Second Conditionals (If-Clauses)',
        category: 'Possibilities & Imagined Situations',
        formula: 'Zero: If + Present, Present | 1st: If + Present, will + Base Verb | 2nd: If + Past Simple, would + Base Verb',
        summary: 'Learn how to express universal facts (Zero), realistic future plans (1st), and exciting imagined dreams (2nd).',
        detailedExplanation: [
          'Zero Conditional (Universal Facts): If you heat ice, it melts. (Always true every time).',
          'First Conditional (Real Future Possibility): If it rains tomorrow, we will stay at home and study. (Realistic chance). Notice: The "if" part uses Present Simple, NOT "will".',
          'Second Conditional (Dream / Imagined Hypothetical): If I won the lottery, I would travel around the world. (Imagining a dream that is not real right now).',
          'The Subjunctive "Were" Tip: In the Second Conditional, it is best to use "were" for all subjects ("If I were you...", "If he were here...").'
        ],
        diagramType: 'conditionalMatrix',
        diagramData: {
          title: 'Conditionals Reality Grid',
          types: [
            { name: 'Zero (100% Fact)', ifClause: 'If + Present Simple', mainClause: 'Present Simple', probability: 'Always 100% True' },
            { name: '1st (Real Future)', ifClause: 'If + Present Simple', mainClause: 'will + Base Verb', probability: 'Likely / Real Possibility' },
            { name: '2nd (Imagined Dream)', ifClause: 'If + Past Simple (were)', mainClause: 'would + Base Verb', probability: 'Hypothetical / Unreal' }
          ]
        },
        examples: [
          {
            sentence: 'If you practice speaking every day, your English fluency will improve rapidly.',
            translationOrContext: 'Real condition and probable future outcome (1st Conditional)',
            breakdown: [
              { token: 'If you practice', role: 'Condition (Present Simple)', color: 'text-blue-600 font-bold' },
              { token: 'will improve', role: 'Future Result (will + base verb)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'If it will rain tomorrow, we will cancel the picnic.',
            correct: 'If it rains tomorrow, we will cancel the picnic.',
            why: 'Never put "will" inside the if-clause of a first conditional.',
            trapName: 'Putting "will" inside the if-clause'
          }
        ],
        proTips: [
          'Useful phrase to memorize: "If I were you, I would..." is the most natural way to give friendly advice in English!'
        ]
      },
      {
        id: 'b1_passive_voice',
        title: 'Passive Voice (Focusing on the Action)',
        category: 'Sentence Focus & Clarity',
        formula: 'Active: [Subject] + [Verb] + [Object] → Passive: [Object] + [am/is/are/was/were] + [Past Participle V3]',
        summary: 'Use the passive voice when the result or action is more interesting or important than who did it.',
        detailedExplanation: [
          'Active sentences focus on the doer: "Alexander Fleming discovered penicillin in 1928."',
          'Passive sentences focus on the object/discovery: "Penicillin was discovered in 1928 (by Alexander Fleming)."',
          'How to make a passive sentence: 1. Put the receiver/object at the start. 2. Add the verb "to be" in the right tense. 3. Add the past participle (V3) form of the main verb.',
          'Common everyday uses: News reports, instructions, cooking recipes, inventions, and stories where the doer is unknown or obvious.'
        ],
        diagramType: 'syntaxTree',
        diagramData: {
          title: 'How Active Turns into Passive',
          nodes: [
            { label: 'Active Voice (Focus on Doer)', detail: 'Millions of students [Doer] use this app [Object] daily.' },
            { label: 'Passive Voice (Focus on App)', detail: 'This app [Promoted Object] is used [be + V3] by millions of students daily.' }
          ]
        },
        examples: [
          {
            sentence: 'The new community library was opened by the mayor last Saturday.',
            translationOrContext: 'Past passive focusing on the newly opened library',
            breakdown: [
              { token: 'The new community library', role: 'Object promoted to Subject', color: 'text-blue-600 font-bold' },
              { token: 'was opened', role: 'Past Passive (was + V3)', color: 'text-emerald-600 font-bold' },
              { token: 'by the mayor', role: 'The Doer (Agent)', color: 'text-purple-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'An interesting event was happened in our town yesterday.',
            correct: 'An interesting event happened in our town yesterday.',
            why: 'Verbs like "happen", "occur", and "arrive" cannot be passive because they do not have an object.',
            trapName: 'Trying to make intransitive verbs passive'
          }
        ],
        proTips: [
          'If you don\'t know who did the action (e.g., "My bicycle was stolen"), the passive voice is the most natural choice.'
        ]
      }
    ],
    doctorCases: [
      {
        id: 'doc_b1_1',
        title: 'Putting "will" inside the if-clause',
        flawedSentence: 'If the weather will be nice this weekend, we will go hiking in the mountains.',
        errorType: 'First Conditional Grammar',
        correction: 'If the weather is nice this weekend, we will go hiking in the mountains.',
        ruleExplanation: 'In the First Conditional, the if-clause must use the Present Simple ("is nice"), while the main clause uses "will go".',
        tokens: [
          { word: 'If the weather ' },
          { word: 'will be', isError: true, label: 'Change to Present Simple "is"' },
          { word: ' nice this weekend, we will go hiking in the mountains.' }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q_b1_1',
        question: 'Which sentence correctly expresses a hypothetical dream (2nd Conditional)?',
        options: [
          { id: 'a', text: 'If I have more free time, I would learn how to play guitar.', isCorrect: false, explanation: 'Mismatched tenses: "have" (present) does not pair with "would".' },
          { id: 'b', text: 'If I had more free time, I would learn how to play guitar.', isCorrect: true, explanation: 'Spot on! "If + had (past simple), would + learn (base verb)" is the classic 2nd Conditional.' },
          { id: 'c', text: 'If I would have more free time, I learned how to play guitar.', isCorrect: false, explanation: 'Do not put "would" in the if-clause.' },
          { id: 'd', text: 'If I had more free time, I will learn how to play guitar.', isCorrect: false, explanation: 'Use "would", not "will", with past hypothetical conditions.' }
        ],
        targetConcept: 'Second Conditional Formation'
      }
    ]
  },

  B2: {
    level: 'B2',
    name: 'B2 • Upper-Intermediate English',
    descriptor: 'Upper-Intermediate / Confident, Fluent & Accurate',
    proficiencyTarget: 'Upper-Intermediate Level: Confident, Fluent & Nuanced Communication',
    studentAudience: 'For students looking to express complex ideas naturally: Connect past causes to present realities (Mixed Conditionals), express regrets (3rd Conditional), report formal ideas, and master the subtle differences between Gerunds and Infinitives.',
    cefrColor: {
      bg: 'bg-indigo-600',
      text: 'text-indigo-700',
      border: 'border-indigo-200',
      gradient: 'from-indigo-700 via-purple-900 to-slate-950',
      accent: 'text-indigo-400',
      lightBg: 'bg-indigo-50'
    },
    summary: 'B2 unlocks high-level fluency: Third & Mixed Conditionals (past regrets & present results), Past Perfect storytelling sequences (had done), Impersonal reporting ("It is believed that..."), and understanding how verbs change meaning with Gerunds vs. Infinitives (remember doing vs. remember to do).',
    coreCompetencies: [
      'Express past regrets and hypothetical outcomes using the Third Conditional (had done $\\rightarrow$ would have done)',
      'Connect past decisions to current situations with Mixed Conditionals',
      'Sequence past events clearly using the Past Perfect (had + past participle)',
      'Use formal reporting structures ("It is said that...", "She is considered to be...")',
      'Master subtle verb meaning shifts with Gerunds (-ing) vs Infinitives (to + verb)'
    ],
    grammarTopics: [
      {
        id: 'b2_third_mixed_conditionals',
        title: 'Third & Mixed Conditionals (Past Regrets & Present Results)',
        category: 'Complex Conditionals',
        formula: 'Third: If + had + V3, would have + V3 | Mixed: If + had + V3, would + Base Verb (today)',
        summary: 'Talk about things that did not happen in the past and see how past choices shape where you are today.',
        detailedExplanation: [
          'Third Conditional (Past $\\rightarrow$ Past): Speculating about a past event that is completely finished. "If I had set my alarm, I would not have missed the morning train." (Both the alarm and the train happened in the past).',
          'Mixed Conditional (Past Cause $\\rightarrow$ Present Result): A past action that changes your reality today. "If I had learned to drive when I was younger, I would have my driver\'s license today."',
          'Mixed Conditional (Permanent Trait $\\rightarrow$ Past Outcome): "If she were not so hardworking, she would not have received the scholarship last year."'
        ],
        diagramType: 'conditionalMatrix',
        diagramData: {
          title: 'Past Regrets & Mixed Timeline',
          types: [
            { name: '3rd Conditional (Past → Past)', ifClause: 'If + had + V3 (had studied)', mainClause: 'would have + V3 (would have passed)', probability: '0% (Past is finished)' },
            { name: 'Mixed Conditional (Past → Present)', ifClause: 'If + had + V3 (had saved money)', mainClause: 'would + Base (would be happy today)', probability: 'Past choice altering present life' }
          ]
        },
        examples: [
          {
            sentence: 'If we had booked our flight tickets earlier, we would have saved a lot of money.',
            translationOrContext: 'Third conditional expressing a past financial opportunity',
            breakdown: [
              { token: 'If we had booked', role: 'Past Unreal Condition (had + V3)', color: 'text-purple-600 font-bold' },
              { token: 'would have saved', role: 'Past Unreal Result (would have + V3)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          },
          {
            sentence: 'If Mark had taken Spanish classes in high school, he would speak it fluently today.',
            translationOrContext: 'Mixed conditional (Past action leading to present language skill)',
            breakdown: [
              { token: 'had taken', role: 'Past Action (had + V3)', color: 'text-purple-600 font-bold' },
              { token: 'would speak it fluently today', role: 'Present Ongoing State (would + base verb)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'If I would have known about the party, I would have come.',
            correct: 'If I had known about the party, I would have come.',
            why: 'Never say "If I would have". Always use "had + V3" in the if-part: "If I had known".',
            trapName: 'Using "would have" in the if-clause'
          }
        ],
        proTips: [
          'Easy rule of thumb: "Had" goes with "If". "Would have" goes in the other half of the sentence.'
        ]
      },
      {
        id: 'b2_gerund_infinitive_nuances',
        title: 'Gerund (-ing) vs. Infinitive (to + verb) Meaning Shifts',
        category: 'Verbs & Subtle Meanings',
        formula: 'Verb + Gerund (-ing) [Past memory / Ongoing habit] vs Verb + Infinitive [Future intention / Pausing for a goal]',
        summary: 'Some English verbs completely change their meaning depending on whether you follow them with an -ing word or "to + verb".',
        detailedExplanation: [
          'STOP: "I stopped drinking coffee" = I quit the habit completely. "I stopped to drink coffee" = I paused what I was doing in order to drink coffee.',
          'REMEMBER: "I remember locking the door" = I have a past memory of doing it. "I remembered to lock the door" = I didn\'t forget my task.',
          'FORGET: "I will never forget visiting Rome" = A memorable past experience. "Don\'t forget to buy milk" = An upcoming task to do.',
          'TRY: "Try restarting your phone" = Experiment with this method to see if it fixes the problem. "Try to lift the heavy box" = Make a physical effort.'
        ],
        diagramType: 'comparisonTable',
        diagramData: {
          headers: ['Verb', 'Followed by Gerund (-ing)', 'Followed by Infinitive (to + verb)', 'Example Sentence'],
          rows: [
            ['Stop', 'Quit a habit completely', 'Pause what you are doing to do another task', 'I stopped smoking vs I stopped to eat lunch'],
            ['Remember', 'Recall a past memory', 'Fulfill a future duty or chore', 'I remember meeting him vs Remember to call him'],
            ['Regret', 'Feel sorry about a past mistake', 'Politely share difficult news', 'I regret saying that vs We regret to inform you']
          ]
        },
        examples: [
          {
            sentence: 'Please remember to turn off the lights before you leave the room.',
            translationOrContext: 'Fulfilling an upcoming task (Infinitive)',
            breakdown: [
              { token: 'remember to turn off', role: 'Remember + Infinitive (Duty)', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'While driving home, I stopped buying some fresh bread.',
            correct: 'While driving home, I stopped to buy some fresh bread.',
            why: '"Stopped to buy" means paused the journey in order to buy bread.',
            trapName: 'Confusing "stop doing" with "stop to do"'
          }
        ],
        proTips: [
          'Preposition rule: Any verb following a preposition (like in, on, at, about, without, before, after) is ALWAYS an -ing gerund! (e.g. "Thank you for helping me").'
        ]
      }
    ],
    doctorCases: [
      {
        id: 'doc_b2_1',
        title: 'Using "would have" in the if-part',
        flawedSentence: 'If the student would have reviewed the grammar notes, she would have aced the exam.',
        errorType: 'Third Conditional Auxiliary Placement',
        correction: 'If the student had reviewed the grammar notes, she would have aced the exam.',
        ruleExplanation: 'The conditional if-clause must use the Past Perfect "had reviewed", never "would have".',
        tokens: [
          { word: 'If the student ' },
          { word: 'would have reviewed', isError: true, label: 'Change to "had reviewed"' },
          { word: ' the grammar notes, she would have aced the exam.' }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q_b2_1',
        question: 'Choose the sentence that correctly explains pausing an activity to do another:',
        options: [
          { id: 'a', text: 'We were studying for three hours, so we stopped to take a short break.', isCorrect: true, explanation: 'Correct! "Stopped to take" means paused studying in order to rest.' },
          { id: 'b', text: 'We were studying for three hours, so we stopped taking a short break.', isCorrect: false, explanation: '"Stopped taking" would mean you quit taking breaks permanently.' },
          { id: 'c', text: 'We were studying for three hours, so we stopped for take a short break.', isCorrect: false, explanation: 'Ungrammatical construction.' },
          { id: 'd', text: 'We were studying for three hours, so we stopped to taking a short break.', isCorrect: false, explanation: 'Cannot mix "to" with an -ing verb here.' }
        ],
        targetConcept: 'Stop + Infinitive vs Stop + Gerund'
      }
    ]
  },

  C1: {
    level: 'C1',
    name: 'C1 • Advanced English',
    descriptor: 'Advanced / Professional & Academic Articulation',
    proficiencyTarget: 'Advanced Level: Professional, Scholarly & Natural Nuance',
    studentAudience: 'For students who want to sound sophisticated, write impressive essays, speak with natural authority, and master advanced stylistic techniques like Inversion and Reduced Clauses.',
    cefrColor: {
      bg: 'bg-purple-600',
      text: 'text-purple-700',
      border: 'border-purple-200',
      gradient: 'from-purple-800 via-violet-950 to-black',
      accent: 'text-purple-300',
      lightBg: 'bg-purple-50'
    },
    summary: 'C1 elevates your English to a professional and academic standard: using Negative & Restrictive Inversions (Seldom, Not only, Rarely) for dramatic emphasis, shortening sentences with Reduced Participle Clauses, and using the Mandative Subjunctive (recommend that she be present).',
    coreCompetencies: [
      'Use Negative and Restrictive Inversions (Rarely have I seen, Not only did they...)',
      'Create elegant sentences using Reduced Participle Clauses (-ing and -ed phrases)',
      'Avoid dangling modifiers by ensuring participial phrases match the true subject',
      'Use the Mandative Subjunctive in formal recommendations (insist that he be present)',
      'Use Cleft Sentences to emphasize key information ("It was Sarah who suggested the idea")'
    ],
    grammarTopics: [
      {
        id: 'c1_negative_inversion',
        title: 'Negative & Restrictive Inversions (Emphasis & Style)',
        category: 'Advanced Sentence Mechanics',
        formula: 'Negative/Limiting Word + Auxiliary Verb + Subject + Main Verb',
        summary: 'Put emphasis on your sentences by starting with words like Seldom, Rarely, Never, or Not only, and inverting the word order like a question.',
        detailedExplanation: [
          'When you start a sentence with a negative or limiting adverb to create strong emphasis, you flip the helper verb and the subject (just like making a question).',
          'Common Triggers: Rarely, Seldom, Never, Not only... but also, Scarcely... when, No sooner... than, Under no circumstances, Little did I know.',
          'Example comparison: Standard: "I have rarely heard such a moving speech." $\\rightarrow$ Advanced Inversion: "Rarely have I heard such a moving speech."',
          'With Past Simple: "Not only did he finish the marathon, but he also broke the record."'
        ],
        diagramType: 'inversionBlueprint',
        diagramData: {
          title: 'The Inversion Word-Order Blueprint',
          steps: [
            { slot: '1. Negative Trigger', element: 'Not only / Seldom / Rarely' },
            { slot: '2. Auxiliary Verb', element: 'did / has / will / can' },
            { slot: '3. Subject', element: 'the team / he / the students' },
            { slot: '4. Main Verb & Rest', element: 'succeed / achieve their goal' }
          ]
        },
        examples: [
          {
            sentence: 'Not only did the team complete the project ahead of schedule, but they also reduced costs by twenty percent.',
            translationOrContext: 'Advanced emphasis using "Not only did [subject] [verb]"',
            breakdown: [
              { token: 'Not only', role: 'Negative Trigger', color: 'text-rose-600 font-bold' },
              { token: 'did', role: 'Inverted Helper', color: 'text-amber-600 font-bold' },
              { token: 'the team', role: 'Subject', color: 'text-blue-600 font-bold' },
              { token: 'complete', role: 'Base Verb', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Seldom I have experienced such warm hospitality.',
            correct: 'Seldom have I experienced such warm hospitality.',
            why: 'When starting with "Seldom", you must invert the helper "have" before the subject "I".',
            trapName: 'Forgetting to invert subject and helper'
          }
        ],
        proTips: [
          'Using a single well-placed inversion in an essay or presentation instantly makes you sound like an advanced, articulate speaker!'
        ]
      },
      {
        id: 'c1_reduced_participle_clauses',
        title: 'Reduced Participle Clauses (Clean, Sophisticated Style)',
        category: 'Sentence Elegance & Modifiers',
        formula: 'Active: [Present Participle (-ing) Phrase], [Subject] + [Verb] | Passive: [Past Participle (-ed/V3) Phrase], [Subject] + [Verb]',
        summary: 'Make your writing concise and dynamic by shortening full clauses into smooth participial phrases.',
        detailedExplanation: [
          'Instead of saying: "Because she felt tired, Maria went to bed early", you can write: "Feeling tired, Maria went to bed early."',
          'Instead of saying: "After he had finished his degree, Alex moved to New York", you can write: "Having finished his degree, Alex moved to New York."',
          'The Dangling Modifier Trap: The noun immediately following the comma MUST be the person or thing performing the action. Saying "Walking through the park, the trees looked green" is wrong because the trees were not walking!'
        ],
        diagramType: 'flowchart',
        diagramData: {
          title: 'Modifier Logic Check',
          steps: [
            { step: '1. Look at opening phrase', text: 'Having finished the assignment...' },
            { step: '2. Ask: Who did it?', text: 'David did it.' },
            { step: '3. Check first word after comma', text: 'It MUST be "David", NOT "the computer".' }
          ]
        },
        examples: [
          {
            sentence: 'Having reviewed all the feedback, the author revised the final chapter of the book.',
            translationOrContext: 'Clean perfect participial clause attached to the true doer "the author"',
            breakdown: [
              { token: 'Having reviewed all the feedback', role: 'Reduced Participial Phrase', color: 'text-purple-600 font-bold' },
              { token: 'the author', role: 'True Subject (Doer)', color: 'text-blue-600 font-bold' },
              { token: 'revised', role: 'Main Verb', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Walking into the classroom, the exam papers were distributed by the teacher.',
            correct: 'Walking into the classroom, the teacher distributed the exam papers.',
            why: 'Exam papers cannot walk into a classroom! The teacher must follow the comma.',
            trapName: 'Dangling modifier error'
          }
        ],
        proTips: [
          'Always double-check: Who is doing the action in the introductory phrase? Put that person right after the comma!'
        ]
      }
    ],
    doctorCases: [
      {
        id: 'doc_c1_1',
        title: 'Dangling modifier confusion',
        flawedSentence: 'Upon opening the envelope, a wave of excitement was felt by the young student.',
        errorType: 'Dangling Modifier',
        correction: 'Upon opening the envelope, the young student felt a wave of excitement.',
        ruleExplanation: 'A wave of excitement cannot open an envelope. The young student must be the subject right after the introductory phrase.',
        tokens: [
          { word: 'Upon opening the envelope, ' },
          { word: 'a wave of excitement', isError: true, label: 'Illogical Subject: replace with "the young student"' },
          { word: ' was felt by the young student.' }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q_c1_1',
        question: 'Identify the sentence with flawless advanced inversion:',
        options: [
          { id: 'a', text: 'Rarely we have seen such enthusiasm among young learners.', isCorrect: false, explanation: 'Needs inversion: "have we seen".' },
          { id: 'b', text: 'Rarely have we seen such enthusiasm among young learners.', isCorrect: true, explanation: 'Perfect! "Rarely + have + we + seen" is flawless C1 negative inversion.' },
          { id: 'c', text: 'Rarely did we have seen such enthusiasm among young learners.', isCorrect: false, explanation: 'Corrupted helper verbs.' },
          { id: 'd', text: 'Rarely we saw such enthusiasm among young learners.', isCorrect: false, explanation: 'Missing inversion.' }
        ],
        targetConcept: 'Negative Inversion with Rarely'
      }
    ]
  },

  C2: {
    level: 'C2',
    name: 'C2 • Fluent Mastery',
    descriptor: 'Mastery / Near-Native Eloquence & Rhetoric',
    proficiencyTarget: 'Mastery Level: Near-Native Eloquence, Style & Precision',
    studentAudience: 'For fluent and advanced speakers aiming for native-level eloquence: Master conditional inversions without "if", locative fronting, balanced parallel structures, and refined rhetorical style.',
    cefrColor: {
      bg: 'bg-rose-600',
      text: 'text-rose-700',
      border: 'border-rose-200',
      gradient: 'from-rose-900 via-slate-950 to-black',
      accent: 'text-rose-400',
      lightBg: 'bg-rose-50'
    },
    summary: 'C2 represents peak stylistic fluency: dropping "if" completely with Inverted Conditionals (Had I known, Were it not for, Should you need), creating dramatic scene-setting with Locative Inversion (Beside the lake stood an ancient oak), and crafting balanced, memorable sentences with Syntactic Parallelism.',
    coreCompetencies: [
      'Construct Inverted Conditionals without "if" (Had we known, Were we to succeed, Should need arise)',
      'Use Locative Fronting to create smooth, natural transitions (In the center of the square stood...)',
      'Craft symmetrical and memorable sentences with Syntactic Parallelism',
      'Use subtle modal stance markers (may well, might conceivably, need hardly)',
      'Write and speak with near-native rhythm, balance, and persuasive eloquence'
    ],
    grammarTopics: [
      {
        id: 'c2_inverted_conditionals',
        title: 'Inverted Conditionals (Omitting "If" with Had, Were, Should)',
        category: 'Elite Fluency & Rhetoric',
        formula: 'Had + Subj + V3 | Were + Subj + to + verb | Should + Subj + Base Verb',
        summary: 'Sound like a native master by eliminating the word "if" and beginning directly with Had, Were, or Should.',
        detailedExplanation: [
          'Inverted conditionals are used by fluent speakers, authors, and professionals to create elegant, formal, and rhythmic English.',
          'Type 1 (Polite Future): "If you should need any assistance" $\\rightarrow$ "Should you need any assistance, please let us know."',
          'Type 2 (Hypothetical): "If it were not for your help" $\\rightarrow$ "Were it not for your help, we would have struggled."',
          'Type 3 (Past Unreal): "If they had arrived earlier" $\\rightarrow$ "Had they arrived earlier, they would have met the keynote speaker."',
          'Negative rule: In negative inverted conditionals, "not" is placed after the subject, never contracted: "Had we not checked the map...", NEVER "Hadn\'t we checked...".'
        ],
        diagramType: 'comparisonTable',
        diagramData: {
          headers: ['Condition Type', 'Standard "If" Form', 'Fluent C2 Inverted Form'],
          rows: [
            ['Polite / Formal Future', 'If you should have any questions...', 'Should you have any questions...'],
            ['Hypothetical Present', 'If it were not for your advice...', 'Were it not for your advice...'],
            ['Past Unreal', 'If we had known the schedule...', 'Had we known the schedule...'],
            ['Past Negative', 'If they had not intervened...', 'Had they not intervened...']
          ]
        },
        examples: [
          {
            sentence: 'Had we known about the schedule change in advance, we would have adjusted our travel plans.',
            translationOrContext: 'Near-native inverted third conditional without "if"',
            breakdown: [
              { token: 'Had we known', role: 'Inverted Conditional (No "if")', color: 'text-rose-600 font-bold' },
              { token: 'would have adjusted', role: 'Modal Past Result', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          },
          {
            sentence: 'Should you require any further information, please feel free to reach out at any time.',
            translationOrContext: 'Polite and professional C2 opening',
            breakdown: [
              { token: 'Should you require', role: 'Formal Inverted 1st Conditional', color: 'text-purple-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Hadn’t the team practiced so hard, they would not have won the championship.',
            correct: 'Had the team not practiced so hard, they would not have won the championship.',
            why: 'Do not use contractions like "Hadn\'t" in inverted conditionals; place "not" after the subject.',
            trapName: 'Contracted negation in inverted conditionals'
          }
        ],
        proTips: [
          'In business emails, replacing "If you have any questions" with "Should you have any questions" instantly elevates your professional tone!'
        ]
      },
      {
        id: 'c2_thematic_fronting_inversion',
        title: 'Locative Fronting & Descriptive Inversion (Setting the Scene)',
        category: 'Descriptive & Narrative Style',
        formula: 'Place / Direction Phrase + Intransitive Verb (stood / lay / sat) + Subject',
        summary: 'Bring your descriptions and storytelling to life by putting the location first and the verb before the subject.',
        detailedExplanation: [
          'In literature and vivid storytelling, starting with the location and placing the verb before the subject creates a cinematic, visual effect.',
          'Instead of: "A beautiful mountain cabin stood at the top of the hill", you can say: "At the top of the hill stood a beautiful mountain cabin."',
          'Instead of: "A stack of old photographs lay on the desk", you can say: "On the desk lay a stack of old photographs."',
          'Only works with verbs of position or movement (like stand, lie, sit, hang, emerge, come).'
        ],
        diagramType: 'syntaxTree',
        diagramData: {
          title: 'Locative Inversion Visual Structure',
          nodes: [
            { label: '1. Fronted Place', detail: 'Adjacent to the ancient garden...' },
            { label: '2. Verb of Position', detail: 'stood...' },
            { label: '3. Full Descriptive Subject', detail: 'a magnificent stone fountain built in 1850.' }
          ]
        },
        examples: [
          {
            sentence: 'Beside the quiet river stood a row of centuries-old willow trees.',
            translationOrContext: 'Vivid locative scene setting',
            breakdown: [
              { token: 'Beside the quiet river', role: 'Fronted Location', color: 'text-amber-600 font-bold' },
              { token: 'stood', role: 'Verb of Position', color: 'text-rose-600 font-bold' },
              { token: 'a row of centuries-old willow trees', role: 'Descriptive Subject', color: 'text-emerald-600 font-bold' }
            ],
            isCorrect: true
          }
        ],
        commonMistakes: [
          {
            incorrect: 'Under the tree did the children play soccer.',
            correct: 'Under the tree, the children played soccer.',
            why: 'Do not use "did" for locative sentences with action verbs; locative inversion only applies to verbs of position (stood, lay, sat).',
            trapName: 'Using helper did in place descriptions'
          }
        ],
        proTips: [
          'Use locative fronting to make the opening and descriptive paragraphs of your essays and stories feel rich and evocative.'
        ]
      }
    ],
    doctorCases: [
      {
        id: 'doc_c2_1',
        title: 'Contracted negative inverted conditional',
        flawedSentence: 'Hadn’t our mentor encouraged us to persevere, we might have given up on our dreams.',
        errorType: 'Inverted Conditional Syntax',
        correction: 'Had our mentor not encouraged us to persevere, we might have given up on our dreams.',
        ruleExplanation: 'Inverted conditionals do not allow contractions like "Hadn\'t". Place "not" after the subject: "Had our mentor not encouraged".',
        tokens: [
          { word: 'Hadn’t', isError: true, label: 'Change to "Had our mentor not"' },
          { word: ' our mentor encouraged us to persevere, we might have given up on our dreams.' }
        ]
      }
    ],
    quizQuestions: [
      {
        id: 'q_c2_1',
        question: 'Which sentence represents flawless C2 near-native inverted conditional style?',
        options: [
          { id: 'a', text: 'Were you to need any further assistance, please let our team know.', isCorrect: true, explanation: 'Masterful! "Were you to need" is the most refined way to express a polite conditional.' },
          { id: 'b', text: 'Were you need any further assistance, please let our team know.', isCorrect: false, explanation: 'Missing "to" in were-inversion.' },
          { id: 'c', text: 'If were you to need any further assistance, please let our team know.', isCorrect: false, explanation: 'Do not mix "if" with the inverted verb.' },
          { id: 'd', text: 'Should you to need any further assistance, please let our team know.', isCorrect: false, explanation: '"Should" takes the bare verb ("Should you need"), not "to need".' }
        ],
        targetConcept: 'Were-Inversion with To-Infinitive'
      }
    ]
  }
};
