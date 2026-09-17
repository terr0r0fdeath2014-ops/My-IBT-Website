import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';

export interface VerbTenseTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyRule: string;
  formula: string;
  examples: string[];
}

export const VERB_TENSE_TOPICS: VerbTenseTopic[] = [
  {
    id: 'present_simple',
    title: 'Present Simple',
    subtitle: 'Verb to be, have got, routines & permanent facts',
    badge: 'Habits & Facts',
    description: 'Use the Present Simple to express daily habits, regular routines, permanent truths, and general facts. Remember to add -s/-es for third-person singular (he, she, it)!',
    keyRule: 'Subject + Base Verb (+ -s/-es for he/she/it). Negative: do not (don\'t) / does not (doesn\'t) + Base Verb. Questions: Do/Does + Subject + Base Verb?',
    formula: 'Positive: S + V(s/es) | Negative: S + don\'t/doesn\'t + V | Question: Do/Does + S + V?',
    examples: [
      'I am an architect and she is a doctor.',
      'He wakes up at 7:00 AM every morning.',
      'They have got a lovely garden.',
      'The sun rises in the east.',
      'Do you drink coffee in the afternoon?'
    ]
  },
  {
    id: 'present_continuous',
    title: 'Present Continuous',
    subtitle: 'Unfolding actions happening right now at the moment of speaking',
    badge: 'Now & Temporary',
    description: 'Use the Present Continuous to describe actions happening right now, at this exact moment, or temporary situations currently in progress.',
    keyRule: 'Subject + am/is/are + Verb-ing. Time signals: now, right now, at the moment, currently, look!, listen! (State verbs like want, know, like do not take -ing).',
    formula: 'Positive: S + am/is/are + V-ing | Negative: S + am/is/are not + V-ing | Question: Am/Is/Are + S + V-ing?',
    examples: [
      'Look! The children are playing in the garden.',
      'I am writing an email right now.',
      'She is studying for her biology exam this week.',
      'Listen! Someone is knocking on the door.',
      'Are they listening to the teacher?'
    ]
  },
  {
    id: 'past_simple',
    title: 'Past Simple',
    subtitle: 'Past states with was/were & high-frequency regular/irregular verbs (went, bought, came)',
    badge: 'Finished Past',
    description: 'Use the Past Simple for actions, events, and states that started and finished at a specific time in the past.',
    keyRule: 'Regular: add -ed (walked, played, visited). Irregular: went (go), bought (buy), came (come), saw (see), had (have), made (make). To be: was (I/he/she/it) / were (you/we/they). Negative: didn\'t + Base Verb.',
    formula: 'Positive: S + V2 (past form) | Negative: S + didn\'t + V(base) | Question: Did + S + V(base)?',
    examples: [
      'I was tired yesterday evening.',
      'We went to the beach last weekend.',
      'She bought a new laptop two days ago.',
      'They came to my birthday party on Saturday.',
      'Did you see the fireworks last night?'
    ]
  },
  {
    id: 'future_intentions',
    title: 'Future Intentions',
    subtitle: 'Be going to + infinitive for planned intentions & immediate predictions',
    badge: 'Plans & Forecasts',
    description: 'Use "be going to + base verb" when you have already decided or planned to do something in the future, or when you see clear evidence right now that something will happen.',
    keyRule: 'Subject + am/is/are + going to + Base Verb. Time signals: tomorrow, next week, tonight, this summer, soon.',
    formula: 'Positive: S + am/is/are + going to + V | Negative: S + am/is/are not + going to + V | Question: Am/Is/Are + S + going to + V?',
    examples: [
      'I am going to study medicine next year.',
      'She is going to visit her grandparents this Saturday.',
      'Look at those dark clouds! It is going to rain.',
      'We are not going to travel this winter.',
      'Are you going to buy that jacket?'
    ]
  },
  {
    id: 'imperatives',
    title: 'Imperatives',
    subtitle: 'Direct commands, clear instructions, requests & friendly invitations',
    badge: 'Commands & Guides',
    description: 'Use the Imperative to give instructions, recipes, directions, warnings, commands, or polite invitations. There is no explicit subject (you is understood).',
    keyRule: 'Positive: Base Verb (Open the window). Negative: Don\'t + Base Verb (Don\'t touch that). Polite: Add "Please". Friendly invitation: Let\'s + Base Verb.',
    formula: 'Positive: [Base Verb] + Object | Negative: Don\'t + [Base Verb] | Invitation: Let\'s + [Base Verb]',
    examples: [
      'Open your books to page 25.',
      'Please sit down and listen carefully.',
      'Don\'t cross the street when the light is red.',
      'Turn left at the traffic lights.',
      'Let\'s take a short coffee break!'
    ]
  }
];

// Helper deterministic generator with monthly content rotation
export function getVerbsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'present_simple':
      return generatePresentSimpleQuestions(starNumber, mSeed);
    case 'present_continuous':
      return generatePresentContinuousQuestions(starNumber, mSeed);
    case 'past_simple':
      return generatePastSimpleQuestions(starNumber, mSeed);
    case 'future_intentions':
      return generateFutureIntentionsQuestions(starNumber, mSeed);
    case 'imperatives':
      return generateImperativesQuestions(starNumber, mSeed);
    default:
      return generatePresentSimpleQuestions(starNumber, mSeed);
  }
}

// 1. Present Simple Questions (Verb to be, have got, routines & facts)
function generatePresentSimpleQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'My sister', target: 'works', wrong: ['working', 'work', 'is work'], context: 'in an international hospital downtown.', note: 'Third person singular (he/she/it) adds -s: works.' },
    { prompt: 'They', target: 'have got', wrong: ['has got', 'having got', 'is got'], context: 'two friendly golden retriever dogs.', note: '"They" takes "have got".' },
    { prompt: 'Pure water', target: 'boils', wrong: ['boil', 'is boiling', 'boiling'], context: 'at 100 degrees Celsius under normal pressure.', note: 'Scientific facts use Present Simple with -s: boils.' },
    { prompt: 'He', target: "doesn't like", wrong: ["don't like", "isn't like", "not likes"], context: 'drinking sugary sodas with dinner.', note: 'Negative for he/she/it is "doesn\'t + base verb".' },
    { prompt: 'I', target: 'am', wrong: ['is', 'are', 'be'], context: 'very enthusiastic about learning foreign languages.', note: '"I" pairs with "am".' },
    { prompt: 'We', target: 'wake up', wrong: ['wakes up', 'are wake up', 'waking up'], context: 'at 6:30 AM every weekday morning.', note: '"We" takes the base verb without -s: wake up.' },
    { prompt: 'Professor Clark', target: 'teaches', wrong: ['teach', 'teaching', 'is teach'], context: 'modern history to university freshmen.', note: 'Verbs ending in -ch add -es for he/she: teaches.' },
    { prompt: '', target: 'Do you live', wrong: ['Does you live', 'Are you live', 'You live'], context: 'near the city center?', note: 'Question with "you" uses "Do + you + base verb".' },
    { prompt: '', target: 'Does Mark play', wrong: ['Do Mark play', 'Is Mark play', 'Does Mark plays'], context: 'the guitar in a music band?', note: 'Question with third-person singular (Mark) uses "Does + subject + base verb".' },
    { prompt: 'Emma', target: 'has got', wrong: ['have got', 'having got', 'is got'], context: 'a brand new electric bicycle.', note: 'Third-person singular "Emma" takes "has got".' },
    { prompt: 'The morning train', target: 'leaves', wrong: ['leave', 'is leave', 'leaving'], context: 'from platform 4 every day at 8:15 AM.', note: 'Fixed schedules use Present Simple with -s: leaves.' },
    { prompt: 'Domestic cats', target: 'sleep', wrong: ['sleeps', 'are sleep', 'sleeping'], context: 'for up to 16 hours a day.', note: 'Plural subject ("cats") takes base verb: sleep.' },
    { prompt: 'My parents', target: "don't live", wrong: ["doesn't live", "aren't live", "no live"], context: 'in Chicago anymore.', note: 'Plural subject takes "don\'t + base verb".' },
    { prompt: 'The Earth', target: 'revolves', wrong: ['revolve', 'is revolving', 'revolving'], context: 'around the Sun once every year.', note: 'Universal truth uses third-person -s: revolves.' },
    { prompt: 'Samuel', target: 'goes', wrong: ['gos', 'go', 'is go'], context: 'to the campus gym three times a week.', note: 'Verbs ending in -o add -es: goes.' },
    { prompt: 'We', target: 'are', wrong: ['is', 'am', 'be'], context: 'delighted with our final exam results.', note: '"We" takes the verb "are".' },
    { prompt: 'She', target: 'studies', wrong: ['studys', 'study', 'is study'], context: 'civil engineering at the technical institute.', note: 'Consonant + y changes to -ies: studies.' },
    { prompt: 'I', target: "don't drink", wrong: ["doesn't drink", "am not drink", "not drink"], context: 'black coffee late in the evening.', note: '"I" takes "don\'t + base verb".' },
    { prompt: 'Lucas and Noah', target: 'speak', wrong: ['speaks', 'are speak', 'speaking'], context: 'fluent English and German.', note: 'Plural subject ("Lucas and Noah") takes base verb: speak.' },
    { prompt: 'The desert sun', target: 'shines', wrong: ['shine', 'is shine', 'shining'], context: 'brightly throughout the afternoon.', note: 'Singular subject takes -s: shines.' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 7) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" does not fit the Present Simple grammar rule.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 1) % 3) / 2);

    const sentence = itm.prompt ? `${itm.prompt} _____ ${itm.context}` : `_____ ${itm.context}`;

    return {
      id: qNum,
      question: `Choose the correct Present Simple form to complete the sentence:`,
      sentenceWithBlank: sentence,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Check subject agreement: I/you/we/they use base form (or don't), he/she/it takes -s/-es (or doesn't).`,
      ruleTip: 'Present Simple: He/She/It + Verb-s | Negative: doesn\'t + Base Verb | Questions: Does + Subject + Base Verb?'
    };
  });
}

// 2. Present Continuous Questions (am/is/are + V-ing)
function generatePresentContinuousQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { cue: 'Look! The baby', target: 'is sleeping', wrong: ['sleeps', 'is sleep', 'are sleeping'], context: 'peacefully in her crib right now.', note: 'Singular subject uses "is + sleeping".' },
    { cue: 'Listen! Someone', target: 'is playing', wrong: ['plays', 'are playing', 'is play'], context: 'the violin in the next room.', note: '"Someone" is singular indefinite pronoun -> is playing.' },
    { cue: 'The construction workers', target: 'are building', wrong: ['is building', 'builds', 'are build'], context: 'a new pedestrian bridge across the river.', note: 'Plural subject takes "are + building".' },
    { cue: 'I', target: 'am writing', wrong: ['is writing', 'are writing', 'write'], context: 'an urgent report for the director at this moment.', note: '"I" takes "am + writing" (drop final silent -e).' },
    { cue: 'We', target: 'are cooking', wrong: ['is cooking', 'cooks', 'are cook'], context: 'a delicious homemade pasta dinner together.', note: '"We" takes "are + cooking".' },
    { cue: 'She', target: 'is not watching', wrong: ["isn't watch", "doesn't watching", "are not watching"], context: 'television right now; she is reading.', note: 'Negative Present Continuous: is not + watching.' },
    { cue: '', target: 'Are you listening', wrong: ['Do you listening', 'Is you listening', 'Are you listen'], context: 'to what the professor is explaining?', note: 'Question with "you": Are you + Verb-ing?' },
    { cue: 'The golden retriever', target: 'is running', wrong: ['is runing', 'runs', 'are running'], context: 'fast across the open lawn.', note: 'Short vowel + consonant doubles the final letter: running.' },
    { cue: 'The athletes', target: 'are swimming', wrong: ['are swiming', 'is swimming', 'swim'], context: 'in the heated Olympic pool at the moment.', note: 'Swim -> swimming (double m).' },
    { cue: 'David', target: 'is driving', wrong: ['is driveing', 'drives', 'are driving'], context: 'to the airport to meet his international guests.', note: 'Drive -> driving (drop silent e).' },
    { cue: 'The chefs', target: 'are preparing', wrong: ['is preparing', 'prepares', 'are prepare'], context: 'a gourmet banquet for tonight\'s reception.', note: 'Plural subject -> are preparing.' },
    { cue: 'Take an umbrella because it', target: 'is raining', wrong: ['is rainning', 'rains', 'are raining'], context: 'heavily outside right now.', note: 'Singular "it" -> is raining.' },
    { cue: 'I', target: 'am studying', wrong: ['am study', 'is studying', 'studies'], context: 'for my chemistry final exam this afternoon.', note: '"I" -> am studying.' },
    { cue: 'Why', target: 'is she crying', wrong: ['does she crying', 'are she crying', 'is she cry'], context: 'so sorrowfully in the courtyard?', note: 'Question: Why + is + she + crying?' },
    { cue: 'The students', target: 'are not talking', wrong: ["don't talking", "isn't talking", "are not talk"], context: 'during the official examination period.', note: 'Plural negative: are not talking.' },
    { cue: 'Look! The airplane', target: 'is landing', wrong: ['lands', 'are landing', 'is land'], context: 'smoothly on runway number two.', note: '"Look!" signals an action occurring right now.' },
    { cue: 'My brother and I', target: 'are fixing', wrong: ['is fixing', 'fixes', 'am fixing'], context: 'the wooden garden fence this morning.', note: '"My brother and I" (We) -> are fixing.' },
    { cue: 'The scientist', target: 'is conducting', wrong: ['conducts', 'are conducting', 'is conduct'], context: 'a groundbreaking biology experiment.', note: 'Singular subject -> is conducting.' },
    { cue: 'Please be quiet because the librarian', target: 'is speaking', wrong: ['speaks', 'are speaking', 'is speak'], context: 'on the telephone right now.', note: 'Singular librarian -> is speaking.' },
    { cue: 'You', target: 'are doing', wrong: ['is doing', 'does', 'are do'], context: 'a wonderful job on this English drill.', note: '"You" takes "are + doing".' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 9) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" is not the correct Present Continuous verb form.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 2) % 3) / 2);

    const sentence = itm.cue ? `${itm.cue} _____ ${itm.context}` : `_____ ${itm.context}`;

    return {
      id: qNum,
      question: `Choose the correct Present Continuous verb form:`,
      sentenceWithBlank: sentence,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Present Continuous formula: am/is/are + Verb-ing for actions happening right now.`,
      ruleTip: 'I am / He-She-It is / You-We-They are + [Verb-ing]. Watch spelling: run->running, write->writing.'
    };
  });
}

// 3. Past Simple Questions (was/were, went, bought, came, regular -ed)
function generatePastSimpleQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { verbPrompt: 'go', target: 'went', wrong: ['goed', 'go', 'was go'], sentence: 'Yesterday morning, I _____ to the local farmer\'s market.', note: 'Irregular past of "go" is "went".' },
    { verbPrompt: 'buy', target: 'bought', wrong: ['buyed', 'buys', 'was buy'], sentence: 'She _____ a warm woolen coat two days ago.', note: 'Irregular past of "buy" is "bought".' },
    { verbPrompt: 'be (plural)', target: 'were', wrong: ['was', 'are', 'been'], sentence: 'They _____ very pleased with the museum exhibition yesterday.', note: '"They" takes "were" in the past.' },
    { verbPrompt: 'be (singular)', target: 'was', wrong: ['were', 'is', 'been'], sentence: 'He _____ at home resting because he felt unwell.', note: '"He" takes "was" in the past.' },
    { verbPrompt: 'come', target: 'came', wrong: ['comed', 'come', 'was come'], sentence: 'We _____ to visit your family on Saturday evening.', note: 'Irregular past of "come" is "came".' },
    { verbPrompt: 'not see', target: "didn't see", wrong: ["didn't saw", "wasn't see", "not saw"], sentence: 'I _____ you at the academic conference this morning.', note: 'Negative past uses "didn\'t + base verb (see)".' },
    { verbPrompt: 'watch (question)', target: 'Did you watch', wrong: ['Did you watched', 'Were you watch', 'Do you watched'], sentence: '_____ the championship football match last night?', note: 'Question uses "Did + subject + base verb (watch)".' },
    { verbPrompt: 'arrive', target: 'arrived', wrong: ['arriveded', 'arrive', 'was arrived'], sentence: 'The intercity express train _____ at the station on time.', note: 'Regular verb ending in -e adds -d: arrived.' },
    { verbPrompt: 'eat', target: 'ate', wrong: ['eated', 'eat', 'was ate'], sentence: 'They _____ a delicious seafood lunch by the marina.', note: 'Irregular past of "eat" is "ate".' },
    { verbPrompt: 'have', target: 'had', wrong: ['haved', 'has', 'was had'], sentence: 'She _____ an inspiring conversation with her mentor.', note: 'Irregular past of "have" is "had".' },
    { verbPrompt: 'visit', target: 'visited', wrong: ['visit', 'visitted', 'were visit'], sentence: 'We _____ the ancient cathedral during our trip.', note: 'Regular verb adds -ed: visited.' },
    { verbPrompt: 'make', target: 'made', wrong: ['maked', 'makes', 'was made'], sentence: 'He _____ fresh vegetable soup for dinner last night.', note: 'Irregular past of "make" is "made".' },
    { verbPrompt: 'not sleep', target: "didn't sleep", wrong: ["didn't slept", "wasn't slept", "no slept"], sentence: 'I _____ well last night due to the heavy thunderstorm.', note: 'Negative past uses "didn\'t + base verb (sleep)".' },
    { verbPrompt: 'study', target: 'studied', wrong: ['studyed', 'studieded', 'were study'], sentence: 'The students _____ in the quiet library all afternoon.', note: 'Consonant + y changes to -ied: studied.' },
    { verbPrompt: 'go (question)', target: 'did you go', wrong: ['did you went', 'were you go', 'did you gone'], sentence: 'Where _____ for your summer vacation last year?', note: 'Question form: Where + did + you + base verb (go)?' },
    { verbPrompt: 'leave', target: 'left', wrong: ['leaved', 'leaves', 'was left'], sentence: 'She _____ the office at 6:00 PM yesterday.', note: 'Irregular past of "leave" is "left".' },
    { verbPrompt: 'stop', target: 'stopped', wrong: ['stoped', 'stop', 'was stop'], sentence: 'The bus driver _____ the vehicle before the crosswalk.', note: 'Short vowel + single consonant doubles the letter: stopped.' },
    { verbPrompt: 'not be', target: 'were not', wrong: ['was not', 'did not be', 'are not'], sentence: 'We _____ ready for the sudden temperature drop.', note: '"We" in the past takes "were not" (weren\'t).' },
    { verbPrompt: 'write', target: 'wrote', wrong: ['writed', 'writes', 'was write'], sentence: 'He _____ a heartfelt thank-you letter to his teacher.', note: 'Irregular past of "write" is "wrote".' },
    { verbPrompt: 'play', target: 'played', wrong: ['plaied', 'plays', 'was played'], sentence: 'The musician _____ a classical piece on the acoustic guitar.', note: 'Vowel + y simply adds -ed: played.' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 11) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" is not the proper Past Simple form.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 3) % 3) / 2);

    return {
      id: qNum,
      question: `Choose the correct Past Simple verb form [${itm.verbPrompt}]:`,
      sentenceWithBlank: itm.sentence,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Regular verbs take -ed. Common irregulars: go->went, buy->bought, come->came, have->had, see->saw. Negative uses didn't + base verb.`,
      ruleTip: 'Positive: V2 (went, played) | Negative: didn\'t + Base Verb | Question: Did + Subject + Base Verb?'
    };
  });
}

// 4. Future Intentions Questions (be going to + infinitive)
function generateFutureIntentionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { cue: 'I have already purchased my pass. I', target: 'am going to attend', wrong: ['am go to attend', 'going to attend', 'am attending to'], context: 'the technology conference this Friday.', note: '"I" takes "am going to + base verb".' },
    { cue: 'Look at those dark storm clouds! It', target: 'is going to rain', wrong: ['is raining to', 'goes to rain', 'is go to rain'], context: 'in a few minutes.', note: 'Clear present evidence uses "is going to rain".' },
    { cue: 'She made up her mind. She', target: 'is going to study', wrong: ['is go to study', 'are going to study', 'going to study'], context: 'architecture at the university next autumn.', note: '"She" takes "is going to study".' },
    { cue: 'We planned our trip months ago. We', target: 'are going to visit', wrong: ['is going to visit', 'are go to visit', 'going to visit'], context: 'the national parks next month.', note: '"We" takes "are going to visit".' },
    { cue: 'They saved their earnings all year. They', target: 'are going to buy', wrong: ['is going to buy', 'are go to buy', 'going to buy'], context: 'a new family vehicle soon.', note: '"They" takes "are going to buy".' },
    { cue: 'He', target: 'is not going to attend', wrong: ["isn't go to attend", "doesn't going to attend", "is not attend"], context: 'the meeting because he is ill.', note: 'Negative: is not going to + base verb.' },
    { cue: '', target: 'Are you going to apply', wrong: ['Do you going to apply', 'Is you going to apply', 'Are you go to apply'], context: 'for the university research fellowship?', note: 'Question with "you": Are you going to apply?' },
    { cue: 'Careful! That tall stack of heavy books', target: 'is going to fall', wrong: ['is falling to', 'goes to fall', 'is go to fall'], context: 'off the edge of the table.', note: 'Immediate visual evidence uses "is going to fall".' },
    { cue: 'I am completely exhausted. I', target: 'am going to sleep', wrong: ['am go to sleep', 'going to sleep', 'am sleep'], context: 'early tonight right after dinner.', note: '"I" takes "am going to sleep".' },
    { cue: 'The master chef', target: 'is going to bake', wrong: ['is go to bake', 'are going to bake', 'going to bake'], context: 'a three-tiered chocolate cake for the celebration.', note: 'Singular subject -> is going to bake.' },
    { cue: 'My family and I', target: 'are going to spend', wrong: ['is going to spend', 'am going to spend', 'are go to spend'], context: 'our winter holidays in the mountains.', note: '"My family and I" (We) -> are going to spend.' },
    { cue: 'What', target: 'is she going to do', wrong: ['does she going to do', 'are she going to do', 'is she go to do'], context: 'after graduating from high school?', note: 'Question: What + is + she + going to + do?' },
    { cue: 'We', target: 'are not going to order', wrong: ["don't going to order", "aren't go to order", "are not order"], context: 'takeout tonight because we cooked at home.', note: 'Negative: are not going to order.' },
    { cue: 'David bought running shoes. He', target: 'is going to run', wrong: ['is go to run', 'are going to run', 'going to run'], context: 'in the city charity marathon this Sunday.', note: 'Singular "David" -> is going to run.' },
    { cue: 'The science students', target: 'are going to present', wrong: ['is going to present', 'are go to present', 'going to present'], context: 'their laboratory research tomorrow.', note: 'Plural subject -> are going to present.' },
    { cue: 'Watch out! You', target: 'are going to drop', wrong: ['are drop', 'is going to drop', 'are go to drop'], context: 'that fragile porcelain vase.', note: 'Immediate warning -> are going to drop.' },
    { cue: 'I registered for classes. I', target: 'am going to learn', wrong: ['am go to learn', 'going to learn', 'am learning to'], context: 'conversational Japanese this semester.', note: '"I" -> am going to learn.' },
    { cue: 'The director', target: 'is going to announce', wrong: ['is go to announce', 'are going to announce', 'going to announce'], context: 'the project expansion this Friday.', note: 'Singular subject -> is going to announce.' },
    { cue: '', target: 'Are they going to travel', wrong: ['Do they going to travel', 'Is they going to travel', 'Are they go to travel'], context: 'by high-speed train or airplane?', note: 'Question with "they": Are they going to travel?' },
    { cue: 'We prepared thoroughly. We', target: 'are going to pass', wrong: ['is going to pass', 'are go to pass', 'going to pass'], context: 'this English grammar test with top marks.', note: '"We" -> are going to pass.' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 13) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" does not follow the "be going to + verb" pattern.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 2) % 3) / 2);

    const sentence = itm.cue ? `${itm.cue} _____ ${itm.context}` : `_____ ${itm.context}`;

    return {
      id: qNum,
      question: `Choose the correct Future Intention (be going to) form:`,
      sentenceWithBlank: sentence,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Use: am/is/are + going to + Base Verb for planned decisions and immediate predictions.`,
      ruleTip: 'Formula: Subject + am/is/are + going to + Base Verb (e.g., I am going to travel).'
    };
  });
}

// 5. Imperatives Questions (Direct commands, instructions & invitations)
function generateImperativesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { situation: 'Classroom instruction', target: 'Open', wrong: ['Opening', 'To open', 'You open'], text: 'your textbooks to chapter 4 and read the passage quietly.', note: 'Positive imperative begins directly with the base verb: Open.' },
    { situation: 'Safety warning', target: "Don't touch", wrong: ['No touch', 'Not touch', "Doesn't touch"], text: 'that hot stove surface with bare hands.', note: 'Negative imperative begins with "Don\'t + base verb".' },
    { situation: 'Polite request', target: 'Please sit', wrong: ['Please to sit', 'Please sitting', 'Please sits'], text: 'down in the waiting area until your number is called.', note: 'Add "Please" + base verb.' },
    { situation: 'Friendly group invitation', target: "Let's take", wrong: ["Let's taking", "Let's to take", "Let's took"], text: 'a fifteen-minute break and have some fresh tea.', note: 'Use "Let\'s + base verb" for group invitations.' },
    { situation: 'Driving direction', target: 'Turn', wrong: ['Turning', 'To turn', 'Turns'], text: 'right at the second intersection after the bridge.', note: 'Giving directions uses the base verb: Turn.' },
    { situation: 'Cooking recipe step', target: 'Mix', wrong: ['Mixing', 'Mixed', 'To mix'], text: 'the flour and eggs together in a large mixing bowl.', note: 'Recipe steps start with the base verb: Mix.' },
    { situation: 'Library regulation', target: "Don't speak", wrong: ['No speak', 'Not speaking', "Doesn't speak"], text: 'loudly while others are studying in silence.', note: 'Negative command: Don\'t + speak.' },
    { situation: 'Urgent advice', target: 'Call', wrong: ['Calling', 'Called', 'To call'], text: 'the emergency services immediately if you smell gas.', note: 'Direct command starts with base verb: Call.' },
    { situation: 'Suggestion with friends', target: "Let's watch", wrong: ["Let's watching", "Let's to watch", "Let's watched"], text: 'that new documentary film together tonight.', note: 'Let\'s + watch.' },
    { situation: 'Laboratory rule', target: 'Wear', wrong: ['Wearing', 'To wear', 'Wears'], text: 'protective safety goggles before handling any chemicals.', note: 'Direct instruction starts with base verb: Wear.' },
    { situation: 'Polite reminder', target: "Don't forget", wrong: ['No forget', 'Not forgetting', "Doesn't forget"], text: 'to submit your research paper before midnight.', note: 'Don\'t + forget.' },
    { situation: 'Exam instruction', target: 'Write', wrong: ['Writing', 'To write', 'Wrote'], text: 'your full name and student ID clearly on the top line.', note: 'Base verb: Write.' },
    { situation: 'Medicine guidance', target: 'Take', wrong: ['Taking', 'To take', 'Took'], text: 'one capsule twice daily with a full glass of water.', note: 'Base verb: Take.' },
    { situation: 'Pedestrian guidance', target: 'Cross', wrong: ['Crossing', 'To cross', 'Crossed'], text: 'the street only when the pedestrian walk signal is green.', note: 'Base verb: Cross.' },
    { situation: 'Friendly invitation', target: "Let's go", wrong: ["Let's going", "Let's to go", "Let's went"], text: 'for a refreshing walk in the botanical garden.', note: 'Let\'s + go.' },
    { situation: 'Computer instruction', target: 'Click', wrong: ['Clicking', 'To click', 'Clicked'], text: 'the blue icon on your desktop to launch the application.', note: 'Base verb: Click.' },
    { situation: 'Aviation safety rule', target: 'Fasten', wrong: ['Fastening', 'To fasten', 'Fastened'], text: 'your seatbelt securely during taxi, takeoff, and landing.', note: 'Base verb: Fasten.' },
    { situation: 'Pool safety caution', target: "Don't run", wrong: ['No running', 'Not run', "Doesn't run"], text: 'near the wet, slippery swimming pool edge.', note: 'Negative imperative: Don\'t + run.' },
    { situation: 'Hotel reception advice', target: 'Keep', wrong: ['Keeping', 'To keep', 'Kept'], text: 'your room electronic key card in a secure place at all times.', note: 'Base verb: Keep.' },
    { situation: 'Encouraging a classmate', target: "Let's practice", wrong: ["Let's practicing", "Let's to practice", "Let's practiced"], text: 'the speaking conversation once more together.', note: 'Let\'s + practice.' }
  ];

  return Array.from({ length: 20 }, (_, idx) => {
    const itemIndex = (idx * 3 + star * 4 + mSeed * 7) % pool.length;
    const itm = pool[itemIndex];
    const qNum = idx + 1;
    const allOpts = [
      { text: itm.target, isCorrect: true, explanation: `Correct! ${itm.note}` },
      ...itm.wrong.map(w => ({ text: w, isCorrect: false, explanation: `Incorrect. "${w}" is not the correct imperative form.` }))
    ].sort(() => 0.5 - ((idx * 4 + star + mSeed + 1) % 3) / 2);

    return {
      id: qNum,
      question: `[${itm.situation}] Choose the correct imperative:`,
      sentenceWithBlank: `_____ ${itm.text}`,
      options: allOpts.map((o, optIdx) => ({
        id: String.fromCharCode(97 + optIdx),
        text: o.text,
        isCorrect: o.isCorrect,
        explanation: o.explanation
      })),
      hint: `Imperatives have no subject. Positive = Base Verb (Listen). Negative = Don't + Base Verb (Don't touch). Suggestion = Let's + Base Verb.`,
      ruleTip: 'Positive: [Base Verb] | Negative: Don\'t + [Base Verb] | Invitation: Let\'s + [Base Verb].'
    };
  });
}
