import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A2_VERBS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'past_simple_regular_irregular',
    title: 'Past Simple (Regular & Irregular)',
    subtitle: 'Completed actions, stories, and historical events',
    badge: 'Core Past Tense',
    description: 'Use the Past Simple to talk about events, actions, or habits that started and finished in the past at a specific or implied time (yesterday, last night, two days ago, in 2023). Regular verbs add -ed (worked, watched), while irregular verbs have unique past forms (went, saw, bought, took, made).',
    keyRule: 'Regular: Verb + -ed (worked, visited, played). Irregular: Memorize V2 forms (go -> went, see -> saw, buy -> bought, have -> had, write -> wrote, eat -> ate). Never add -ed to irregular verbs!',
    formula: 'Positive: Subject + Verb(Past/V2) + Object/Time Marker',
    examples: [
      'We visited the Metropolitan Art Museum yesterday afternoon.',
      'Sarah bought a new laptop two days ago.',
      'They went to Italy last summer for their vacation.',
      'He wrote an excellent essay on environmental science.',
      'The concert finished at 10:30 PM last night.'
    ]
  },
  {
    id: 'past_simple_negatives_questions',
    title: 'Past Simple (Negatives & Questions)',
    subtitle: 'Did not (didn\'t) + base verb & Did you...? questions',
    badge: 'Did / Didn\'t',
    description: 'In the Past Simple, negatives and questions ALWAYS use the auxiliary helper "did" / "didn\'t" followed by the BARE BASE VERB. Because "did" already carries the past tense, the main verb MUST return to its base form (never say "didn\'t went").',
    keyRule: 'Negative: Subject + didn\'t (did not) + Base Verb. Question: Did + Subject + Base Verb? Short answers: "Yes, I did." / "No, I didn\'t."',
    formula: 'Negative: S + didn\'t + V(base) | Question: Did + S + V(base)? | Wh- Question: Wh- + did + S + V(base)?',
    examples: [
      'I didn\'t see (not "didn\'t saw") Marcus at the conference yesterday.',
      'Did you finish the reading assignment on time? Yes, I did.',
      'She didn\'t buy the expensive leather jacket.',
      'Where did you go for your winter vacation?',
      'Why did they leave the meeting so early?'
    ]
  },
  {
    id: 'present_continuous_now_future',
    title: 'Present Continuous (Now & Future Plans)',
    subtitle: 'Actions happening right now & fixed future arrangements',
    badge: 'am/is/are + V-ing',
    description: 'Use the Present Continuous for actions happening right at this moment (Look! It is raining) and for fixed future arrangements or scheduled appointments with other people (I am meeting the professor tomorrow at 10 AM).',
    keyRule: 'Subject + am/is/are + Verb-ing. Time markers for NOW: now, right now, at the moment, currently, Look!, Listen!. Time markers for FUTURE: tomorrow, next week, this evening, on Friday.',
    formula: 'Positive: S + am/is/are + V-ing | Negative: S + am/is/are not + V-ing | Question: Am/Is/Are + S + V-ing?',
    examples: [
      'Listen! The birds are singing outside the window.',
      'Dr. Henderson is examining a patient right now.',
      'We are flying to Toronto tomorrow morning.',
      'I am not working this weekend; I have free time.',
      'Are you coming to the study group tonight?'
    ]
  },
  {
    id: 'past_continuous_interrupted',
    title: 'Past Continuous & Interrupted Actions',
    subtitle: 'Ongoing background actions (was/were + V-ing) with when & while',
    badge: 'was/were + V-ing',
    description: 'Use the Past Continuous to describe an action that was in progress in the past when another shorter event happened (interrupted it). The long continuous action takes "was/were + V-ing" (often with "while"), and the short interrupting action takes Past Simple (often with "when").',
    keyRule: 'Long action in progress: was/were + V-ing (While I was studying...). Short interrupting action: Past Simple (the phone rang). While + Past Continuous, When + Past Simple.',
    formula: 'Past Continuous: was/were + V-ing | Interruption: [was/were + V-ing] WHEN [Past Simple]',
    examples: [
      'I was cooking dinner when the doorbell rang.',
      'While they were walking in the park, it began to rain heavily.',
      'The teacher was explaining the theorem when the power went out.',
      'What were you doing yesterday at 4:00 PM?',
      'She was listening to music, so she didn\'t hear the announcement.'
    ]
  },
  {
    id: 'future_going_to_vs_will',
    title: 'Future: "Be Going To" vs. "Will"',
    subtitle: 'Prior intentions & visible evidence vs. instant decisions & promises',
    badge: 'Future Choices',
    description: 'Use "be going to" for plans made before speaking and predictions based on present physical evidence (Look at those dark clouds! It is going to rain). Use "will" for instant decisions made at the moment of speaking, offers, promises, and future opinions (I will help you with those heavy bags; I think you will pass).',
    keyRule: 'Prior plan / Intention: am/is/are going to + Base Verb. Instant decision / Offer: will (\'ll) + Base Verb. Evidence in front of you: going to.',
    formula: 'Going to: S + am/is/are going to + V(base) | Will: S + will (\'ll) + V(base)',
    examples: [
      'We are going to visit our grandparents next Sunday (planned yesterday).',
      'The phone is ringing. I\'ll answer it! (instant decision).',
      'Watch out! You are going to drop that fragile glass bowl (visible evidence).',
      'Don\'t worry, I will keep your secret safe (promise).',
      'Are you going to study abroad next semester?'
    ]
  },
  {
    id: 'stative_vs_dynamic_verbs',
    title: 'Stative Verbs vs. Dynamic Action Verbs',
    subtitle: 'Mental states, emotions, senses & possession (no -ing!)',
    badge: 'No -ing Rules',
    description: 'Dynamic verbs describe physical actions (run, write, eat) and can take continuous -ing forms. Stative verbs describe states of mind, feelings, possession, and senses (know, understand, believe, want, need, love, hate, like, prefer, belong, own, seem, hear). Stative verbs are almost NEVER used in continuous tenses.',
    keyRule: 'Never use -ing with stative verbs! Say "I understand the concept" (NOT "I am understanding"). Say "She wants a glass of water" (NOT "She is wanting").',
    formula: 'Stative Verbs: Subject + Present Simple (V/V-s) even when referring to right now!',
    examples: [
      'I know the answer to your question right now (not "am knowing").',
      'This textbook belongs to the biology department (not "is belonging").',
      'Do you understand what the lecturer is saying?',
      'She loves classical music and plays the cello.',
      'I believe that your presentation was very convincing.'
    ]
  }
];

export function getA2VerbsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'past_simple_regular_irregular':
      return generatePastSimpleV2Questions(starNumber, mSeed);
    case 'past_simple_negatives_questions':
      return generatePastNegQQuestions(starNumber, mSeed);
    case 'present_continuous_now_future':
      return generatePresContNowFutureQuestions(starNumber, mSeed);
    case 'past_continuous_interrupted':
      return generatePastContInterruptedQuestions(starNumber, mSeed);
    case 'future_going_to_vs_will':
      return generateFutureGoingToWillQuestions(starNumber, mSeed);
    case 'stative_vs_dynamic_verbs':
      return generateStativeVerbsQuestions(starNumber, mSeed);
    default:
      return generatePastSimpleV2Questions(starNumber, mSeed);
  }
}

// 1. Past Simple Regular & Irregular Pool
function generatePastSimpleV2Questions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Yesterday, Sarah', target: 'went', wrong: ['goed', 'goes', 'was go'], context: 'to the botanical gardens with her family.', note: '"Go" is irregular -> past form is "went".' },
    { prompt: 'The architect', target: 'designed', wrong: ['design', 'was design', 'designd'], context: 'an award-winning eco-friendly library in 2024.', note: 'Regular verb "design" adds -ed -> "designed".' },
    { prompt: 'We', target: 'saw', wrong: ['seed', 'seen', 'did see'], context: 'a spectacular meteor shower through the telescope last night.', note: '"See" is irregular -> past form is "saw".' },
    { prompt: 'He', target: 'bought', wrong: ['buyed', 'buys', 'was buy'], context: 'a brand new acoustic guitar two days ago.', note: '"Buy" is irregular -> past form is "bought".' },
    { prompt: 'The student', target: 'wrote', wrong: ['writed', 'written', 'writes'], context: 'a comprehensive report on renewable solar energy.', note: '"Write" is irregular -> past form is "wrote".' },
    { prompt: 'They', target: 'ate', wrong: ['eated', 'eats', 'eaten'], context: 'fresh Mediterranean seafood at the harbor restaurant.', note: '"Eat" is irregular -> past form is "ate".' },
    { prompt: 'Professor Davis', target: 'taught', wrong: ['teached', 'taughted', 'teaches'], context: 'advanced mathematics at Oxford for thirty years.', note: '"Teach" is irregular -> past form is "taught".' },
    { prompt: 'I', target: 'found', wrong: ['finded', 'finds', 'founded'], context: 'my misplaced student identification card in my backpack.', note: '"Find" is irregular -> past form is "found".' },
    { prompt: 'The airplane', target: 'landed', wrong: ['land', 'lands', 'was land'], context: 'safely on runway four despite the stormy winds.', note: 'Regular verb "land" adds -ed -> "landed".' },
    { prompt: 'Lucas', target: 'spoke', wrong: ['speaked', 'spoken', 'speaks'], context: 'to the university admissions officer this morning.', note: '"Speak" is irregular -> past form is "spoke".' },
    { prompt: 'My parents', target: 'built', wrong: ['builded', 'builds', 'was build'], context: 'a beautiful wooden gazebo in the backyard.', note: '"Build" is irregular -> past form is "built".' },
    { prompt: 'The chef', target: 'made', wrong: ['maked', 'makes', 'making'], context: 'delicious artisanal sourdough bread early today.', note: '"Make" is irregular -> past form is "made".' },
    { prompt: 'She', target: 'took', wrong: ['taked', 'takes', 'taken'], context: 'first place in the national science competition.', note: '"Take" is irregular -> past form is "took".' },
    { prompt: 'We', target: 'heard', wrong: ['heared', 'hears', 'was hear'], context: 'the emergency siren echoing through the campus.', note: '"Hear" is irregular -> past form is "heard".' },
    { prompt: 'The train', target: 'left', wrong: ['leaved', 'leaf', 'leaves'], context: 'the central station promptly at eight o\'clock.', note: '"Leave" is irregular -> past form is "left".' },
    { prompt: 'Emma', target: 'read', wrong: ['readed', 'reads', 'was read'], context: 'three historical novels during her summer break.', note: '"Read" in past form is spelled "read" (pronounced /red/).' },
    { prompt: 'They', target: 'gave', wrong: ['gived', 'gives', 'given'], context: 'a generous donation to the local wildlife sanctuary.', note: '"Give" is irregular -> past form is "gave".' },
    { prompt: 'The mechanic', target: 'fixed', wrong: ['fixxed', 'fixing', 'fix'], context: 'the automobile brakes quickly and efficiently.', note: 'Regular verb "fix" adds -ed -> "fixed".' },
    { prompt: 'He', target: 'drank', wrong: ['drinked', 'drunk', 'drinks'], context: 'two large glasses of mineral water after jogging.', note: '"Drink" is irregular -> past form is "drank".' },
    { prompt: 'The marathon runner', target: 'ran', wrong: ['runned', 'runs', 'was run'], context: 'twenty-six miles in record-breaking time.', note: '"Run" is irregular -> past form is "ran".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Past Simple Verbs');
}

// 2. Past Simple Negatives & Questions Pool
function generatePastNegQQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'I', target: "didn't see", wrong: ["didn't saw", "not saw", "didn't seen"], context: 'Oliver at the campus library yesterday.', note: 'After "didn\'t", always use the base verb form: "didn\'t see".' },
    { prompt: '', target: 'Did you finish', wrong: ['Did you finished', 'Do you finished', 'Were you finish'], context: 'your engineering homework before dinner?', note: 'Past simple question structure: Did + subject + base verb.' },
    { prompt: 'She', target: "didn't go", wrong: ["didn't went", "not went", "didn't goes"], context: 'to the medical center because she felt better.', note: 'Use "didn\'t + go" (base verb), never "didn\'t went".' },
    { prompt: 'Where', target: 'did they travel', wrong: ['did they traveled', 'do they traveled', 'were they travel'], context: 'during the winter semester break?', note: 'Wh- question with did: Where + did + subject + base verb.' },
    { prompt: 'The technician', target: "didn't install", wrong: ["didn't installed", "not installed", "wasn't install"], context: 'the software updates correctly.', note: 'Negative with didn\'t takes base verb: didn\'t install.' },
    { prompt: 'Why', target: 'did the manager cancel', wrong: ['did the manager canceled', 'does the manager canceled', 'was the manager cancel'], context: 'the team meeting this afternoon?', note: 'Wh- + did + subject + base verb: did the manager cancel.' },
    { prompt: 'We', target: "didn't buy", wrong: ["didn't bought", "not bought", "didn't buys"], context: 'the airline tickets because the fare was too high.', note: 'Negative uses "didn\'t buy" (base verb).' },
    { prompt: '', target: 'Did she call', wrong: ['Did she called', 'Does she called', 'Did she calls'], context: 'you back after her job interview?', note: 'Did + she + base verb: Did she call.' },
    { prompt: 'He', target: "didn't know", wrong: ["didn't knew", "not knew", "didn't known"], context: 'the exact location of the historical monument.', note: 'Use "didn\'t know", never "didn\'t knew".' },
    { prompt: 'What time', target: 'did the presentation start', wrong: ['did the presentation started', 'was the presentation start', 'did the presentation starts'], context: 'this morning?', note: 'Wh- time question takes "did + subject + start".' },
    { prompt: 'They', target: "didn't eat", wrong: ["didn't ate", "not ate", "didn't eaten"], context: 'breakfast before boarding the morning train.', note: 'Use "didn\'t eat", never "didn\'t ate".' },
    { prompt: '', target: 'Did the students understand', wrong: ['Did the students understood', 'Were the students understand', 'Did the students understands'], context: 'the laboratory safety guidelines?', note: 'Did + subject + base verb: Did the students understand.' },
    { prompt: 'I', target: "didn't bring", wrong: ["didn't brought", "not brought", "didn't brings"], context: 'my scientific calculator to the examination room.', note: 'Use "didn\'t bring", never "didn\'t brought".' },
    { prompt: 'How much money', target: 'did you spend', wrong: ['did you spent', 'do you spent', 'were you spend'], context: 'on groceries last weekend?', note: 'Did + you + spend (base verb with "d").' },
    { prompt: 'The researcher', target: "didn't find", wrong: ["didn't found", "not found", "didn't finds"], context: 'any flaws in the experimental data.', note: 'Use "didn\'t find", never "didn\'t found".' },
    { prompt: '', target: 'Did he write', wrong: ['Did he wrote', 'Did he written', 'Does he wrote'], context: 'a formal apology letter to the board?', note: 'Did + he + write.' },
    { prompt: 'We', target: "didn't hear", wrong: ["didn't heard", "not heard", "didn't hears"], context: 'the thunderstorm during the night.', note: 'Use "didn\'t hear", never "didn\'t heard".' },
    { prompt: 'Who', target: 'did you meet', wrong: ['did you met', 'do you met', 'were you meet'], context: 'at the international alumni reunion?', note: 'Did + you + meet.' },
    { prompt: 'Sophia', target: "didn't tell", wrong: ["didn't told", "not told", "didn't tells"], context: 'anyone about the confidential project.', note: 'Use "didn\'t tell", never "didn\'t told".' },
    { prompt: '', target: 'Did they arrive', wrong: ['Did they arrived', 'Were they arrive', 'Did they arrives'], context: 'at the airport on schedule?', note: 'Did + they + arrive.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Past Simple Negatives & Questions');
}

// 3. Present Continuous (Now & Future Arrangements)
function generatePresContNowFutureQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Look outside! The dark clouds', target: 'are gathering', wrong: ['is gathering', 'gathers', 'gather'], context: 'over the city skyline.', note: 'Plural subject ("clouds") takes "are + V-ing" for right now.' },
    { prompt: 'Professor Williams', target: 'is giving', wrong: ['are giving', 'gives', 'give'], context: 'a guest lecture in auditorium B right now.', note: 'Singular subject ("Professor") takes "is giving" for current action.' },
    { prompt: 'We', target: 'are flying', wrong: ['is flying', 'flies', 'flying'], context: 'to Paris next Friday for an academic symposium.', note: 'Fixed future arrangement uses "are flying".' },
    { prompt: 'Listen carefully! Someone', target: 'is knocking', wrong: ['are knocking', 'knocks', 'knock'], context: 'on the laboratory door.', note: '"Someone" is singular -> takes "is knocking".' },
    { prompt: 'I', target: 'am meeting', wrong: ['is meeting', 'meet', 'meeting'], context: 'my research advisor tomorrow at 2:00 PM.', note: 'Scheduled future plan: "am meeting".' },
    { prompt: 'The software engineers', target: 'are testing', wrong: ['is testing', 'tests', 'test'], context: 'the new cybersecurity protocol at the moment.', note: 'Plural subject -> "are testing".' },
    { prompt: 'Emma', target: 'is not working', wrong: ['are not working', 'not is working', 'not works'], context: 'this evening; she is resting at home.', note: 'Singular negative continuous: "is not working".' },
    { prompt: '', target: 'Are you taking', wrong: ['Is you taking', 'Do you taking', 'You are taking'], context: 'the chemistry exam tomorrow morning?', note: 'Question with "you" -> "Are you taking...?"' },
    { prompt: 'The climate scientists', target: 'are presenting', wrong: ['is presenting', 'presents', 'present'], context: 'their new findings at the summit right now.', note: 'Plural subject -> "are presenting".' },
    { prompt: 'Hurry up! The shuttle bus', target: 'is leaving', wrong: ['are leaving', 'leaves', 'leave'], context: 'in five minutes.', note: 'Immediate scheduled event -> "is leaving".' },
    { prompt: 'He', target: 'is studying', wrong: ['are studying', 'studies', 'study'], context: 'for his medical board exams in the reading hall.', note: 'Singular subject -> "is studying".' },
    { prompt: 'They', target: 'are moving', wrong: ['is moving', 'moves', 'move'], context: 'into their new downtown apartment next weekend.', note: 'Arranged future event -> "are moving".' },
    { prompt: 'I', target: 'am not using', wrong: ['is not using', 'are not using', 'not using'], context: 'this laptop, so you can borrow it.', note: 'Negative with I -> "am not using".' },
    { prompt: '', target: 'Is Marcus coming', wrong: ['Are Marcus coming', 'Does Marcus coming', 'Marcus is coming'], context: 'with us to the theater tonight?', note: 'Singular question -> "Is Marcus coming...?"' },
    { prompt: 'The children', target: 'are building', wrong: ['is building', 'builds', 'build'], context: 'a complex robotic model right now.', note: '"Children" is plural -> "are building".' },
    { prompt: 'Our university', target: 'is hosting', wrong: ['are hosting', 'hosts', 'host'], context: 'an international conference this coming autumn.', note: '"University" is singular -> "is hosting".' },
    { prompt: 'Why', target: 'are you wearing', wrong: ['is you wearing', 'do you wearing', 'you are wearing'], context: 'a heavy winter coat in the summer heat?', note: 'Wh- question with you -> "are you wearing".' },
    { prompt: 'The laboratory technician', target: 'is sterilizing', wrong: ['are sterilizing', 'sterilizes', 'sterilize'], context: 'the glass beakers at this moment.', note: 'Singular subject -> "is sterilizing".' },
    { prompt: 'We', target: 'are having', wrong: ['is having', 'has', 'have'], context: 'a celebratory dinner party with colleagues on Saturday.', note: 'Fixed arrangement -> "are having".' },
    { prompt: 'She', target: 'is practicing', wrong: ['are practicing', 'practices', 'practice'], context: 'her violin solo for the upcoming recital.', note: 'Singular subject -> "is practicing".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Present Continuous');
}

// 4. Past Continuous & Interrupted Actions Pool
function generatePastContInterruptedQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'I', target: 'was studying', wrong: ['were studying', 'am studying', 'studied'], context: 'in my room when the fire alarm suddenly rang.', note: 'Ongoing past background action with I -> "was studying".' },
    { prompt: 'While they', target: 'were walking', wrong: ['was walking', 'walked', 'are walking'], context: 'in the forest, they spotted a rare eagle.', note: 'Plural subject ("they") after while takes "were walking".' },
    { prompt: 'The phone rang while Dr. Evans', target: 'was examining', wrong: ['were examining', 'examined', 'is examining'], context: 'an urgent patient in room 3.', note: 'Singular subject after while takes "was examining".' },
    { prompt: 'We', target: 'were driving', wrong: ['was driving', 'drove', 'are driving'], context: 'along the coastal highway when the tire went flat.', note: '"We" takes "were driving" for background ongoing action.' },
    { prompt: 'What', target: 'were you doing', wrong: ['was you doing', 'did you doing', 'are you doing'], context: 'when the earthquake occurred yesterday?', note: 'Question with "you" takes "were you doing".' },
    { prompt: 'Sophia', target: 'was reading', wrong: ['were reading', 'read', 'is reading'], context: 'a medical journal when the train came to a stop.', note: 'Singular subject -> "was reading".' },
    { prompt: 'While the students', target: 'were taking', wrong: ['was taking', 'took', 'are taking'], context: 'the exam, the electricity momentarily cut off.', note: 'Plural subject ("students") -> "were taking".' },
    { prompt: 'The chef', target: 'was slicing', wrong: ['were slicing', 'sliced', 'is slicing'], context: 'vegetables when he accidentally cut his finger.', note: 'Singular subject -> "was slicing".' },
    { prompt: 'They', target: 'were sleeping', wrong: ['was sleeping', 'slept', 'are sleeping'], context: 'peacefully when the loud thunderstorm began.', note: 'Plural subject -> "were sleeping".' },
    { prompt: 'I', target: 'was waiting', wrong: ['were waiting', 'waited', 'am waiting'], context: 'at the bus terminal when I ran into my high school tutor.', note: '"I" takes "was waiting".' },
    { prompt: 'While Lucas', target: 'was repairing', wrong: ['were repairing', 'repaired', 'is repairing'], context: 'his bicycle, his sister offered to help.', note: 'Singular subject -> "was repairing".' },
    { prompt: 'The orchestra', target: 'was performing', wrong: ['were performing', 'performed', 'is performing'], context: 'the symphony when a glass cup shattered in the hall.', note: 'Collective singular noun -> "was performing".' },
    { prompt: 'We', target: 'were watching', wrong: ['was watching', 'watched', 'are watching'], context: 'a documentary when the courier knocked on the door.', note: '"We" takes "were watching".' },
    { prompt: 'The flight crew', target: 'was serving', wrong: ['were serving', 'served', 'is serving'], context: 'refreshments when turbulence struck the aircraft.', note: 'Singular unit -> "was serving".' },
    { prompt: 'He', target: 'was writing', wrong: ['were writing', 'wrote', 'is writing'], context: 'an email when his computer suddenly rebooted.', note: 'Singular subject -> "was writing".' },
    { prompt: 'While you', target: 'were sleeping', wrong: ['was sleeping', 'slept', 'are sleeping'], context: 'your cousin dropped off the package.', note: '"You" takes "were sleeping".' },
    { prompt: 'The scientist', target: 'was recording', wrong: ['were recording', 'recorded', 'is recording'], context: 'temperature values when the sensor malfunctioned.', note: 'Singular subject -> "was recording".' },
    { prompt: 'They', target: 'were discussing', wrong: ['was discussing', 'discussed', 'are discussing'], context: 'the budget when the director entered the boardroom.', note: 'Plural subject -> "were discussing".' },
    { prompt: 'I', target: 'was jogging', wrong: ['were jogging', 'jogged', 'am jogging'], context: 'along the riverside trail when it started hailing.', note: '"I" takes "was jogging".' },
    { prompt: 'The children', target: 'were playing', wrong: ['was playing', 'played', 'are playing'], context: 'in the yard when the sunset turned the sky orange.', note: 'Plural subject -> "were playing".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Past Continuous');
}

// 5. Future: Going To vs. Will Pool
function generateFutureGoingToWillQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Look at those heavy black clouds! It', target: 'is going to rain', wrong: ["will rain", "rains", "is raining"], context: 'any minute now.', note: 'Prediction based on direct visual evidence takes "is going to rain".' },
    { prompt: 'The phone is ringing in the hallway. I', target: "will answer", wrong: ["am going to answer", "answers", "answered"], context: 'it for you!', note: 'Instant spontaneous decision made right now takes "will answer".' },
    { prompt: 'Sarah booked her flight weeks ago. She', target: 'is going to visit', wrong: ["will visit", "visits", "visited"], context: 'her relatives in Melbourne next month.', note: 'Pre-planned intention/arrangement takes "is going to visit".' },
    { prompt: 'That cardboard box looks extremely heavy. I', target: "will help", wrong: ["am going to help", "helps", "helped"], context: 'you carry it upstairs.', note: 'Spontaneous offer of help takes "will help".' },
    { prompt: 'We already bought the cinema tickets. We', target: 'are going to watch', wrong: ["will watch", "watches", "watched"], context: 'the new sci-fi film tonight.', note: 'Prior plan with tickets purchased takes "are going to watch".' },
    { prompt: 'I promise I', target: "will not forget", wrong: ["am not going to forget", "don't forget", "not forgot"], context: 'to return your textbook tomorrow morning.', note: 'Formal promise takes "will not forget".' },
    { prompt: 'Watch out! The ladder is wobbling! You', target: 'are going to fall', wrong: ["will fall", "falls", "fell"], context: 'off!', note: 'Warning with immediate physical evidence takes "are going to fall".' },
    { prompt: 'I think artificial intelligence', target: 'will transform', wrong: ["is going to transform", "transforms", "transformed"], context: 'many industries over the next decade.', note: 'Opinion/prediction about the distant future with "I think" takes "will".' },
    { prompt: 'What', target: 'are you going to study', wrong: ["will you study", "do you study", "you will study"], context: 'at university next year? Have you decided yet?', note: 'Asking about already planned intentions: "are you going to study".' },
    { prompt: 'There\'s no milk in the refrigerator. I', target: "will go", wrong: ["am going to go", "goes", "went"], context: 'and buy some from the grocery store right now.', note: 'Instant decision made upon discovery takes "will go".' },
    { prompt: 'Marcus has been training all year. He', target: 'is going to run', wrong: ["will run", "runs", "ran"], context: 'the city marathon next Sunday.', note: 'Established plan and preparation takes "is going to run".' },
    { prompt: 'Don\'t worry about the dishes; I', target: "will wash", wrong: ["am going to wash", "washes", "washed"], context: 'them after the guests depart.', note: 'Offer / voluntary decision takes "will wash".' },
    { prompt: 'Look at that reckless driver speeding! He', target: 'is going to crash', wrong: ["will crash", "crashes", "crashed"], context: 'into the barrier!', note: 'Clear visual evidence of imminent event -> "is going to crash".' },
    { prompt: 'In my opinion, our team', target: 'will win', wrong: ["is going to win", "wins", "won"], context: 'the regional championship match.', note: 'Personal prediction/belief takes "will win".' },
    { prompt: 'They saved up money all winter. They', target: 'are going to remodel', wrong: ["will remodel", "remodels", "remodeled"], context: 'their kitchen in the spring.', note: 'Pre-planned intention takes "are going to remodel".' },
    { prompt: 'Would you like coffee or tea? - I', target: "will have", wrong: ["am going to have", "have", "had"], context: 'a cup of green tea, please.', note: 'Instant ordering decision takes "will have".' },
    { prompt: 'Be careful with that boiling water! You', target: 'are going to burn', wrong: ["will burn", "burns", "burned"], context: 'your hands!', note: 'Imminent danger with evidence takes "are going to burn".' },
    { prompt: 'One day, humans', target: 'will colonize', wrong: ["are going to colonize", "colonizes", "colonized"], context: 'other planets in our solar system.', note: 'Far-off futuristic prediction takes "will colonize".' },
    { prompt: 'We enrolled in evening classes; we', target: 'are going to learn', wrong: ["will learn", "learns", "learned"], context: 'conversational Japanese.', note: 'Premeditated plan with enrollment takes "are going to learn".' },
    { prompt: 'You left your umbrella behind. - Thanks, I', target: "will grab", wrong: ["am going to grab", "grabs", "grabbed"], context: 'it before leaving.', note: 'Instant response takes "will grab".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Future: Going to vs. Will');
}

// 6. Stative Verbs vs Dynamic Verbs Pool
function generateStativeVerbsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'I', target: 'understand', wrong: ['am understanding', 'understands', 'have understood'], context: 'the mathematical formula clearly right now.', note: '"Understand" is a stative verb of cognition; never use with -ing.' },
    { prompt: 'This leather wallet', target: 'belongs', wrong: ['is belonging', 'belong', 'belonged'], context: 'to Professor Martinez.', note: '"Belong" expresses possession and is stative -> "belongs".' },
    { prompt: 'Right now, she', target: 'wants', wrong: ['is wanting', 'want', 'wanted'], context: 'a glass of chilled sparkling water.', note: '"Want" is a stative verb of desire -> use Present Simple "wants".' },
    { prompt: 'Do you', target: 'know', wrong: ['knowing', 'are knowing', 'knows'], context: 'the exact departure time of the express train?', note: '"Know" is stative -> "Do you know".' },
    { prompt: 'The researcher', target: 'believes', wrong: ['is believing', 'believe', 'believed'], context: 'that the experimental hypothesis is accurate.', note: '"Believe" is a mental state verb -> "believes".' },
    { prompt: 'This vintage watch', target: 'costs', wrong: ['is costing', 'cost', 'costing'], context: 'over five hundred dollars.', note: '"Cost" expressing a price state takes Simple form "costs".' },
    { prompt: 'I', target: 'hear', wrong: ['am hearing', 'hears', 'hearing'], context: 'a strange whistling sound coming from the ventilation shaft.', note: '"Hear" is an involuntary sense verb -> "I hear".' },
    { prompt: 'He', target: 'prefers', wrong: ['is preferring', 'prefer', 'prefered'], context: 'studying in absolute silence in the university library.', note: '"Prefer" is a stative preference verb -> "prefers".' },
    { prompt: 'The freshly brewed coffee', target: 'smells', wrong: ['is smelling', 'smell', 'smelling'], context: 'absolutely delicious this morning.', note: '"Smell" as a sensory quality takes Simple form "smells".' },
    { prompt: 'We', target: 'need', wrong: ['are needing', 'needs', 'needed'], context: 'additional laboratory equipment to finish the experiment.', note: '"Need" is a stative requirement verb -> "need".' },
    { prompt: 'She', target: 'remembers', wrong: ['is remembering', 'remember', 'remembering'], context: 'meeting the keynote speaker at last year\'s conference.', note: '"Remember" is a memory state verb -> "remembers".' },
    { prompt: 'This antique chair', target: 'looks', wrong: ['is looking', 'look', 'looking'], context: 'very fragile, so please do not sit on it.', note: '"Look" expressing appearance takes Simple form "looks".' },
    { prompt: 'I', target: 'agree', wrong: ['am agreeing', 'agrees', 'agreed'], context: 'with the conclusions presented in your research paper.', note: '"Agree" expressing mental concurrence takes Simple form "agree".' },
    { prompt: 'The package', target: 'weighs', wrong: ['is weighing', 'weigh', 'weighing'], context: 'approximately three kilograms.', note: '"Weigh" stating an object\'s weight is stative -> "weighs".' },
    { prompt: 'Do you', target: 'recognize', wrong: ['are recognizing', 'recognizes', 'recognizeing'], context: 'the handwriting on this historical manuscript?', note: '"Recognize" is a cognitive stative verb -> "recognize".' },
    { prompt: 'They', target: 'own', wrong: ['are owning', 'owns', 'owning'], context: 'a successful organic vineyard in northern California.', note: '"Own" expresses possession -> "own".' },
    { prompt: 'This soup', target: 'tastes', wrong: ['is tasting', 'taste', 'tasting'], context: 'a bit too salty for my preference.', note: '"Taste" describing state/flavor takes "tastes".' },
    { prompt: 'I', target: 'doubt', wrong: ['am doubting', 'doubts', 'doubted'], context: 'that the stormy weather will clear up before evening.', note: '"Doubt" is a mental state verb -> "doubt".' },
    { prompt: 'The new textbook', target: 'contains', wrong: ['is containing', 'contain', 'containing'], context: 'twenty comprehensive grammar chapters.', note: '"Contain" expresses composition -> "contains".' },
    { prompt: 'She', target: 'seems', wrong: ['is seeming', 'seem', 'seeming'], context: 'very confident about her upcoming defense.', note: '"Seem" is stative -> "seems".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Stative vs. Dynamic Verbs');
}

// Shared helper to deterministically rotate and format 20 questions for each Star drill
function createRotatedQuestions(
  pool: { prompt: string; target: string; wrong: string[]; context: string; note: string }[],
  star: number,
  mSeed: number,
  topicTitle: string
): GrammarQuestion[] {
  const total = pool.length;
  const questions: GrammarQuestion[] = [];
  const offset = ((star - 1) * 3 + (mSeed - 1) * 2) % total;

  for (let i = 0; i < 20; i++) {
    const item = pool[(i + offset) % total];
    const sentenceWithBlank = item.prompt ? `${item.prompt} ________ ${item.context}` : `________ ${item.context}`;
    const correctFull = item.prompt ? `${item.prompt} ${item.target} ${item.context}` : `${item.target} ${item.context}`;

    const rawOptions = [
      { id: 'opt_correct', text: item.target, isCorrect: true, explanation: `Correct! ${item.note}` },
      ...item.wrong.map((w, idx) => ({
        id: `opt_wrong_${idx}`,
        text: w,
        isCorrect: false,
        explanation: `Incorrect. "${w}" does not follow the rule. ${item.note}`
      }))
    ];

    // Deterministic shuffle based on star + question index + mSeed
    const seedIndex = (star * 7 + i * 13 + mSeed * 17) % 4;
    const shuffledOptions = [...rawOptions];
    // Rotate options deterministically
    for (let s = 0; s < seedIndex; s++) {
      const first = shuffledOptions.shift();
      if (first) shuffledOptions.push(first);
    }

    const finalOptions = shuffledOptions.map((opt, optIdx) => ({
      ...opt,
      id: `q_${i}_opt_${optIdx}`
    }));

    questions.push({
      id: (star - 1) * 20 + i + 1,
      question: `Question ${i + 1} of 20 (Star #${star}) • ${topicTitle}`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on the grammatical structure for ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
