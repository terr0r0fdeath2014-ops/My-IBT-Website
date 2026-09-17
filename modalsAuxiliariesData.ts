import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';

export interface ModalAuxTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyRule: string;
  formula: string;
  examples: string[];
}

export const MODAL_AUX_TOPICS: ModalAuxTopic[] = [
  {
    id: 'can_cant_ability',
    title: "Can & Can't (Ability & Inability)",
    subtitle: 'Physical abilities, acquired skills, and general capacity',
    badge: 'Ability & Skills',
    description: 'Use "can" to state what someone is able or knows how to do. Use "can\'t" (cannot) for things someone is unable to do. The main verb always stays in base form without "to" or "-s".',
    keyRule: 'Subject + can/can\'t + Base Verb (No "to", no "-s" for he/she/it). Questions: Can + Subject + Base Verb?',
    formula: 'Positive: S + can + V(base) | Negative: S + can\'t + V(base) | Question: Can + S + V(base)?',
    examples: [
      'She can speak three languages fluently.',
      'I can swim across the pool, but I can\'t dive.',
      'He can play the guitar very well.',
      'Can you drive a car? Yes, I can.',
      'They can\'t come to the meeting today.'
    ]
  },
  {
    id: 'can_could_requests',
    title: 'Can & Could (Requests & Permission)',
    subtitle: 'Asking for permission and making polite requests',
    badge: 'Polite Requests',
    description: 'Use "Can I...?" or "Could I...?" to ask for permission. "Could" is slightly more polite and formal than "can". Both take the base verb.',
    keyRule: 'Can/Could + Subject + Base Verb? Short answers: "Yes, you can." / "Sure, here you are." / "I\'m sorry, you can\'t."',
    formula: 'Request: Can/Could you + V(base)? | Permission: Can/Could I + V(base)?',
    examples: [
      'Can I open the window, please?',
      'Could you help me carry these heavy boxes?',
      'Can I borrow your pen for a minute?',
      'Could we have the bill, please?',
      'You can park your bicycle here.'
    ]
  },
  {
    id: 'must_mustnt',
    title: "Must & Mustn't (Obligation & Prohibition)",
    subtitle: 'Strong rules, personal obligations, and strict prohibitions',
    badge: 'Rules & Laws',
    description: 'Use "must" for strong personal obligations and strict rules/laws. Use "mustn\'t" (must not) to indicate that something is strictly forbidden or prohibited.',
    keyRule: 'Subject + must/mustn\'t + Base Verb. "Mustn\'t" means DO NOT DO IT (prohibited!).',
    formula: 'Obligation: S + must + V(base) | Prohibition: S + mustn\'t + V(base)',
    examples: [
      'You must wear a seatbelt in the car.',
      'You mustn\'t use your phone during the exam.',
      'I must remember to call my mother tonight.',
      'Students must submit their essays by 5 PM.',
      'Visitors mustn\'t feed the animals in the zoo.'
    ]
  },
  {
    id: 'have_to_dont_have_to',
    title: 'Have to & Don\'t have to (Necessity)',
    subtitle: 'External rules vs. lack of obligation / choice',
    badge: 'Necessity & Choice',
    description: 'Use "have to" / "has to" when an external rule or situation makes something necessary. Use "don\'t have to" / "doesn\'t have to" when there is NO obligation (you can do it if you want, but it is not necessary).',
    keyRule: 'Positive: have to / has to + Base Verb. Negative: don\'t have to / doesn\'t have to + Base Verb (NOT prohibited, just optional!).',
    formula: 'Obligation: S + have/has to + V | No Obligation: S + don\'t/doesn\'t have to + V',
    examples: [
      'Doctors have to wear white coats at the hospital.',
      'Tomorrow is Sunday, so I don\'t have to wake up early.',
      'She has to renew her passport before traveling.',
      'You don\'t have to pay for the museum today; it is free!',
      'Do we have to buy the textbook?'
    ]
  },
  {
    id: 'auxiliary_verbs_be_do_have',
    title: 'Auxiliary Verbs (Be, Do, Have)',
    subtitle: 'Helper verbs for tenses, questions, negatives, and emphasis',
    badge: 'Core Helpers',
    description: 'Auxiliary verbs "help" the main verb form different tenses, questions, and negative statements: Be (am/is/are/was/were), Do (do/does/did), and Have (have/has/had).',
    keyRule: 'Be + V-ing (Continuous), Do/Does/Did + Base Verb (Simple Tense Questions & Negatives), Have/Has + Past Participle (Perfect Tenses).',
    formula: 'Continuous: Be + V-ing | Simple Neg/Q: Do/Does/Did + V | Perfect: Have/Has + V3',
    examples: [
      'Are you studying English right now? (Be)',
      'She does not eat spicy food. (Do)',
      'Did you watch the match yesterday? (Do)',
      'I have lived in London for two years. (Have)',
      'They were waiting at the bus stop. (Be)'
    ]
  }
];

export function getModalsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'can_cant_ability':
      return generateCanAbilityQuestions(starNumber, mSeed);
    case 'can_could_requests':
      return generateCanRequestsQuestions(starNumber, mSeed);
    case 'must_mustnt':
      return generateMustMustntQuestions(starNumber, mSeed);
    case 'have_to_dont_have_to':
      return generateHaveToQuestions(starNumber, mSeed);
    case 'auxiliary_verbs_be_do_have':
      return generateAuxiliaryQuestions(starNumber, mSeed);
    default:
      return generateCanAbilityQuestions(starNumber, mSeed);
  }
}

// 1. Can & Can't Ability Generator (20 questions per star with monthly rotation)
function generateCanAbilityQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const subjects = ['She', 'I', 'He', 'They', 'My brother', 'Sarah', 'We', 'A cheetah', 'Fish', 'Penguins', 'Elena', 'Lucas', 'The orchestra', 'My cousin', 'Our team'];
  const verbs = [
    { v: 'speak', obj: 'four languages', negObj: 'Russian', type: 'skill' },
    { v: 'swim', obj: '2 kilometers', negObj: 'in cold water', type: 'physical' },
    { v: 'play', obj: 'the violin', negObj: 'the drums', type: 'instrument' },
    { v: 'drive', obj: 'a manual car', negObj: 'a truck', type: 'skill' },
    { v: 'cook', obj: 'Italian pasta', negObj: 'sushi', type: 'skill' },
    { v: 'run', obj: 'very fast', negObj: 'a marathon', type: 'physical' },
    { v: 'solve', obj: 'complex math puzzles', negObj: 'this equation', type: 'mental' },
    { v: 'draw', obj: 'realistic portraits', negObj: 'cartoons', type: 'art' },
    { v: 'type', obj: '80 words per minute', negObj: 'without looking', type: 'tech' },
    { v: 'sing', obj: 'opera songs', negObj: 'in tune', type: 'music' },
    { v: 'navigate', obj: 'with a compass', negObj: 'without GPS', type: 'outdoor' },
    { v: 'program', obj: 'in Python code', negObj: 'assembly language', type: 'tech' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const qIndex = (star * 7 + i * 3 + mSeed * 11) % verbs.length;
    const sIndex = (star * 3 + i * 2 + mSeed * 7) % subjects.length;
    const subj = subjects[sIndex];
    const verbItem = verbs[qIndex];

    const isNegative = (i + mSeed) % 2 === 1;
    const isQuestion = (i + mSeed) % 4 === 3;

    if (isQuestion) {
      questions.push({
        id: i + 1,
        question: `Complete the ability question: "______ ${subj.toLowerCase()} ${verbItem.v} ${verbItem.obj}?"`,
        sentenceWithBlank: `______ ${subj.toLowerCase()} ${verbItem.v} ${verbItem.obj}?`,
        options: [
          { id: 'a', text: 'Can', isCorrect: true, explanation: 'Use "Can" at the beginning of a question to ask about ability.' },
          { id: 'b', text: 'Does can', isCorrect: false, explanation: '"Can" does not need "do/does" auxiliary helper.' },
          { id: 'c', text: 'Is can', isCorrect: false, explanation: 'Do not combine "is" with modal "can".' },
          { id: 'd', text: 'Can to', isCorrect: false, explanation: 'Modal verbs are never followed by "to".' }
        ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
        hint: 'Modal questions invert the modal verb and the subject: Can + Subject + Base Verb?',
        ruleTip: 'Can + Subject + Base Verb?'
      });
    } else if (isNegative) {
      questions.push({
        id: i + 1,
        question: `Choose the correct negative sentence: "${subj} ______ ${verbItem.v} ${verbItem.negObj}."`,
        sentenceWithBlank: `${subj} ______ ${verbItem.v} ${verbItem.negObj}.`,
        options: [
          { id: 'a', text: "can't", isCorrect: true, explanation: '"Can\'t" (cannot) correctly expresses inability.' },
          { id: 'b', text: "doesn't can", isCorrect: false, explanation: 'Never use "doesn\'t can". The negative of can is simply can\'t / cannot.' },
          { id: 'c', text: "cannot to", isCorrect: false, explanation: 'Do not add "to" after cannot.' },
          { id: 'd', text: "can nots", isCorrect: false, explanation: 'Modal verbs never take "-s".' }
        ].sort(() => 0.5 - ((i + star + mSeed + 1) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
        hint: 'Inability is expressed with "can\'t" or "cannot" followed directly by the base verb.',
        ruleTip: 'Subject + can\'t + Base Verb'
      });
    } else {
      questions.push({
        id: i + 1,
        question: `Fill in the blank: "${subj} ______ ${verbItem.obj}."`,
        sentenceWithBlank: `${subj} ______ ${verbItem.obj}.`,
        options: [
          { id: 'a', text: `can ${verbItem.v}`, isCorrect: true, explanation: 'Modal "can" is followed directly by the bare infinitive (base verb).' },
          { id: 'b', text: `can to ${verbItem.v}`, isCorrect: false, explanation: 'Never use "to" after the modal verb "can".' },
          { id: 'c', text: `cans ${verbItem.v}`, isCorrect: false, explanation: 'Modal verbs never add "-s", even with he/she/it.' },
          { id: 'd', text: `can ${verbItem.v}s`, isCorrect: false, explanation: 'The main verb after "can" is always in base form (no -s).' }
        ].sort(() => 0.5 - ((i + star + mSeed + 2) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
        hint: 'Formula: Subject + can + Base Verb (bare infinitive).',
        ruleTip: 'Can + Base Verb (No "to", no "-s")'
      });
    }
  }

  return questions;
}

// 2. Can & Could Requests Generator (20 questions per star with monthly rotation)
function generateCanRequestsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const requests = [
    { req: 'open the window', reason: 'it is very hot in here', polite: 'Could you please', cas: 'Can you' },
    { req: 'pass me the salt', reason: 'my soup needs seasoning', polite: 'Could you', cas: 'Can you' },
    { req: 'borrow your dictionary', reason: 'I need to check a definition', polite: 'Could I', cas: 'Can I' },
    { req: 'give me directions to the station', reason: 'I am lost in the city center', polite: 'Could you', cas: 'Can you' },
    { req: 'speak a little slower', reason: 'I am still learning English', polite: 'Could you please', cas: 'Can you' },
    { req: 'turn down the music', reason: 'I am trying to study for exams', polite: 'Could you please', cas: 'Can you' },
    { req: 'have a glass of fresh water', reason: 'I am very thirsty', polite: 'Could I please have', cas: 'Can I have' },
    { req: 'hold the elevator door', reason: 'I am running with heavy luggage', polite: 'Could you', cas: 'Can you' },
    { req: 'explain this math formula once more', reason: 'I didn\'t understand step two', polite: 'Could you', cas: 'Can you' },
    { req: 'borrow your phone charger', reason: 'my battery is at 2 percent', polite: 'Could I please', cas: 'Can I' },
    { req: 'recommend a good local cafe', reason: 'we just arrived in town', polite: 'Could you', cas: 'Can you' },
    { req: 'turn on the air conditioner', reason: 'the afternoon humidity is rising', polite: 'Could you please', cas: 'Can you' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = requests[(star * 3 + i * 2 + mSeed * 5) % requests.length];
    const isPolite = (i + mSeed) % 2 === 0;

    questions.push({
      id: i + 1,
      question: `Choose the most appropriate request: "Excuse me, ______ ${item.req}? ${item.reason}."`,
      sentenceWithBlank: `Excuse me, ______ ${item.req}? ${item.reason}.`,
      options: [
        { 
          id: 'a', 
          text: isPolite ? 'Could you please' : 'Can you', 
          isCorrect: true, 
          explanation: `${isPolite ? '"Could you please"' : '"Can you"'} forms a natural, grammatically correct request followed by the base verb.` 
        },
        { 
          id: 'b', 
          text: 'Do you can', 
          isCorrect: false, 
          explanation: 'Never use "Do you can". Use "Can you" or "Could you".' 
        },
        { 
          id: 'c', 
          text: 'Are you could', 
          isCorrect: false, 
          explanation: 'Do not use auxiliary "are" before the modal verb "could".' 
        },
        { 
          id: 'd', 
          text: 'Could you to', 
          isCorrect: false, 
          explanation: 'Modal verbs are followed directly by the base verb without "to".' 
        }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Polite requests use "Could you...?" or "Can you...?" followed directly by the base verb.',
      ruleTip: 'Could / Can + Subject + Base Verb'
    });
  }

  return questions;
}

// 3. Must & Mustn't Generator (20 questions per star with monthly rotation)
function generateMustMustntQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const rules = [
    { situation: 'At the airport security gate', rule: 'show your passport and boarding pass', isObligation: true },
    { situation: 'Inside the hospital intensive care unit', rule: 'make loud phone calls', isObligation: false },
    { situation: 'When the traffic light turns red', rule: 'stop your vehicle completely', isObligation: true },
    { situation: 'During the official TOEFL examination', rule: 'look at another student\'s monitor', isObligation: false },
    { situation: 'Inside a gasoline fuel station', rule: 'smoke or light matches', isObligation: false },
    { situation: 'In a science laboratory', rule: 'wear protective safety goggles', isObligation: true },
    { situation: 'In an art museum gallery', rule: 'touch the historical oil paintings', isObligation: false },
    { situation: 'Before entering the operating room', rule: 'sterilize your hands thoroughly', isObligation: true },
    { situation: 'While driving on a public highway', rule: 'wear your safety seatbelt at all times', isObligation: true },
    { situation: 'On a commercial flight during takeoff', rule: 'unbuckle your seatbelt', isObligation: false },
    { situation: 'In a wildlife national reserve', rule: 'feed or approach wild bears', isObligation: false },
    { situation: 'Inside an active construction zone', rule: 'wear a certified hard hat', isObligation: true }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = rules[(star * 5 + i * 3 + mSeed * 7) % rules.length];
    const isObligation = item.isObligation;

    questions.push({
      id: i + 1,
      question: `${item.situation}: "You ______ ${item.rule}."`,
      sentenceWithBlank: `${item.situation}: "You ______ ${item.rule}."`,
      options: [
        { 
          id: 'a', 
          text: isObligation ? 'must' : "mustn't", 
          isCorrect: true, 
          explanation: isObligation 
            ? '"Must" indicates a strong requirement or official rule.' 
            : '"Mustn\'t" indicates a strict prohibition (it is forbidden!).' 
        },
        { 
          id: 'b', 
          text: isObligation ? "don't have to" : 'must to', 
          isCorrect: false, 
          explanation: isObligation 
            ? '"Don\'t have to" means optional, whereas this is a mandatory safety rule.' 
            : 'Never use "to" directly after the modal verb "must".' 
        },
        { 
          id: 'c', 
          text: isObligation ? 'must to' : 'don\'t must', 
          isCorrect: false, 
          explanation: 'Modal verbs are followed directly by the base verb without "to", and negation is "must not / mustn\'t".' 
        },
        { 
          id: 'd', 
          text: isObligation ? 'musts' : 'must not to', 
          isCorrect: false, 
          explanation: 'Modal verbs never take third-person "-s" and never use "to".' 
        }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: isObligation ? 'This is a mandatory safety rule (obligation).' : 'This action is dangerous and strictly prohibited (forbidden).',
      ruleTip: isObligation ? 'Must = Obligation' : "Mustn't = Prohibition"
    });
  }

  return questions;
}

// 4. Have to & Don't have to Generator (20 questions per star with monthly rotation)
function generateHaveToQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const situations = [
    { context: 'Tomorrow is Sunday and the office is closed', action: 'wake up early', isFree: true, subj: 'I' },
    { context: 'She works as a registered flight attendant', action: 'wear a uniform on duty', isFree: false, subj: 'She' },
    { context: 'Admission to the national museum is completely free today', action: 'buy an entrance ticket', isFree: true, subj: 'We' },
    { context: 'He has an important job interview at 9:00 AM', action: 'arrive on time', isFree: false, subj: 'He' },
    { context: 'The restaurant provides free mineral water', action: 'order bottled drinks', isFree: true, subj: 'You' },
    { context: 'To drive legally in this country', action: 'hold a valid driving license', isFree: false, subj: 'Drivers' },
    { context: 'The hotel room has a full private kitchen', action: 'eat at expensive restaurants', isFree: true, subj: 'Guests' },
    { context: 'Her flight departs in two hours', action: 'leave for the airport right now', isFree: false, subj: 'Sarah' },
    { context: 'The lecture notes are uploaded online', action: 'photocopy the heavy textbook', isFree: true, subj: 'Students' },
    { context: 'To travel internationally across borders', action: 'carry a valid passport and visa', isFree: false, subj: 'Every traveler' },
    { context: 'The university library provides high-speed Wi-Fi', action: 'purchase personal mobile data here', isFree: true, subj: 'Researchers' },
    { context: 'The chemistry experiment involves toxic vapors', action: 'work beneath the ventilation fume hood', isFree: false, subj: 'Dr. Vance' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = situations[(star * 3 + i * 2 + mSeed * 9) % situations.length];
    const is3rdSingular = item.subj === 'She' || item.subj === 'He' || item.subj === 'Sarah' || item.subj === 'Every traveler' || item.subj === 'Dr. Vance';
    const isFree = item.isFree;

    let correctText = '';
    if (isFree) {
      correctText = is3rdSingular ? "doesn't have to" : "don't have to";
    } else {
      correctText = is3rdSingular ? 'has to' : 'have to';
    }

    questions.push({
      id: i + 1,
      question: `${item.context}: "${item.subj} ______ ${item.action}."`,
      sentenceWithBlank: `${item.context}: "${item.subj} ______ ${item.action}."`,
      options: [
        { 
          id: 'a', 
          text: correctText, 
          isCorrect: true, 
          explanation: `${isFree ? 'There is no necessity (it is optional), so use "' + correctText + '".' : 'This is necessary due to circumstances, so use "' + correctText + '".'}` 
        },
        { 
          id: 'b', 
          text: isFree ? (is3rdSingular ? "don't has to" : "doesn't have to") : (is3rdSingular ? "haves to" : "is have to"), 
          isCorrect: false, 
          explanation: is3rdSingular ? 'For he/she/it, use "has to" (positive) and "doesn\'t have to" (negative).' : 'For I/you/we/they, use "have to" (positive) and "don\'t have to" (negative).' 
        },
        { 
          id: 'c', 
          text: isFree ? "mustn't" : "has to to", 
          isCorrect: false, 
          explanation: isFree ? '"Mustn\'t" means forbidden! "Don\'t have to" means not necessary/optional.' : 'Incorrect syntax.' 
        },
        { 
          id: 'd', 
          text: isFree ? "not have to" : "having to", 
          isCorrect: false, 
          explanation: 'Remember to use auxiliary do/does for negative: don\'t / doesn\'t have to.' 
        }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: isFree ? 'Lack of obligation: not necessary, but not forbidden.' : 'External necessity: required by rules or situation.',
      ruleTip: 'have/has to vs. don\'t/doesn\'t have to'
    });
  }

  return questions;
}

// 5. Auxiliary Verbs (Be, Do, Have) Generator (20 questions per star with monthly rotation)
function generateAuxiliaryQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const auxiliaries = [
    { stem: 'Where ______ you live?', ans: 'do', expl: 'Use "do" for Present Simple questions with "you".', wrong1: 'are', wrong2: 'does', wrong3: 'have' },
    { stem: 'She ______ not like drinking black coffee.', ans: 'does', expl: 'Use "does" with 3rd-person singular "she" in Present Simple negatives.', wrong1: 'do', wrong2: 'is', wrong3: 'has' },
    { stem: 'Look! The students ______ taking their final exams.', ans: 'are', expl: 'Use "are" + Verb-ing for Present Continuous with plural subject "students".', wrong1: 'do', wrong2: 'have', wrong3: 'is' },
    { stem: '______ you finished your homework yet?', ans: 'Have', expl: 'Use "Have" for Present Perfect questions with "you".', wrong1: 'Did', wrong2: 'Are', wrong3: 'Do' },
    { stem: 'What ______ he do on weekends?', ans: 'does', expl: 'Auxiliary "does" + subject "he" + main verb "do".', wrong1: 'is', wrong2: 'do', wrong3: 'has' },
    { stem: 'They ______ not watching TV right now; they are studying.', ans: 'are', expl: 'Present continuous negative with "they" requires "are not + V-ing".', wrong1: 'do', wrong2: 'did', wrong3: 'is' },
    { stem: '______ your brother work in a hospital?', ans: 'Does', expl: 'Use "Does" for singular 3rd person subject "your brother" (he).', wrong1: 'Do', wrong2: 'Is', wrong3: 'Are' },
    { stem: 'I ______ never seen such a beautiful rainbow before.', ans: 'have', expl: 'Use "have" + past participle "seen" for experiential present perfect.', wrong1: 'did', wrong2: 'was', wrong3: 'am' },
    { stem: 'Why ______ they running across the park right now?', ans: 'are', expl: 'Use "are" for continuous question with "they".', wrong1: 'do', wrong2: 'did', wrong3: 'have' },
    { stem: 'Marcus ______ not arrive on time yesterday morning.', ans: 'did', expl: 'Use "did not" for Past Simple negation.', wrong1: 'does', wrong2: 'was', wrong3: 'is' },
    { stem: '______ she already visited the historical art museum?', ans: 'Has', expl: 'Use "Has" for 3rd person singular Present Perfect.', wrong1: 'Does', wrong2: 'Is', wrong3: 'Have' },
    { stem: 'We ______ listening carefully to the professor\'s keynote speech.', ans: 'were', expl: 'Past continuous with plural "we" uses "were + V-ing".', wrong1: 'did', wrong2: 'had', wrong3: 'was' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = auxiliaries[(star * 3 + i * 2 + mSeed * 11) % auxiliaries.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct auxiliary helper verb: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: `Incorrect auxiliary choice for this verb construction.` },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: `Does not match the subject or tense form.` },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: `Incorrect grammatical helper for this sentence.` }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Determine if the sentence is Continuous (Be), Simple question/negative (Do/Does), or Perfect (Have/Has).',
      ruleTip: 'Be (+ V-ing) | Do (+ base verb) | Have (+ V3)'
    });
  }

  return questions;
}
