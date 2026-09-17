import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';

export interface SentenceStructureTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyRule: string;
  formula: string;
  examples: string[];
}

export const SENTENCE_STRUCTURE_TOPICS: SentenceStructureTopic[] = [
  {
    id: 'basic_word_order',
    title: 'Basic Word Order (S-V-O-P-T)',
    subtitle: 'Standard English syntax: Subject + Verb + Object + Place + Time',
    badge: 'Syntax Blueprint',
    description: 'English is an SVO (Subject-Verb-Object) language with strict word order rules. Place comes before Time at the end of the sentence (e.g., in the park [Place] on Sundays [Time]). Never put Place or Time between the verb and its direct object!',
    keyRule: 'Subject + Verb + Object + Place + Time. "I read a book [Object] in the library [Place] yesterday [Time]." (Not "I read yesterday a book").',
    formula: 'Formula: [Subject] + [Verb] + [Object] + [Place] + [Time]',
    examples: [
      'Sarah plays tennis at the sports club every Saturday.',
      'We eat fresh fruit in the kitchen in the morning.',
      'The professor explains the lesson in Room 101 today.',
      'They watched an exciting movie at the cinema last night.',
      'He buys groceries at the local supermarket on Fridays.'
    ]
  },
  {
    id: 'coordinating_conjunctions',
    title: 'Conjunctions (And, But, Or, So, Because)',
    subtitle: 'Connecting ideas: addition, contrast, alternative, result, and reason',
    badge: 'Sentence Linkers',
    description: 'Conjunctions glue words, phrases, and clauses together: "AND" (addition), "BUT" (contrast/conflict), "OR" (choice/alternative), "SO" (cause-to-effect result), "BECAUSE" (reason/explanation).',
    keyRule: 'And = + | But = ≠ (contrast) | Or = A or B | So = Therefore (Result) | Because = Why (Reason).',
    formula: 'Result: Clause 1 + so + Clause 2 | Reason: Clause 1 + because + Clause 2',
    examples: [
      'I like tea and coffee in the morning.',
      'She studied very hard, but the exam was quite difficult.',
      'Would you like apple juice or fresh orange juice?',
      'It started to rain heavily, so we took a taxi home.',
      'He went to bed early because he was exhausted.'
    ]
  },
  {
    id: 'question_formation',
    title: 'Question Formation (Yes/No & Wh- Questions)',
    subtitle: 'Auxiliary inversion and question words (Who, What, Where, When, Why, How)',
    badge: 'Question Syntax',
    description: 'Yes/No Questions begin with an auxiliary (Do/Does, Is/Are, Can). Wh- Questions begin with a question word followed by the auxiliary, subject, and main verb (QUASM rule: Question word + Auxiliary + Subject + Main verb).',
    keyRule: 'QUASM Rule: Question word (Where) + Auxiliary (do) + Subject (you) + Main verb (live)?',
    formula: 'Yes/No: [Auxiliary] + [Subject] + [Verb]? | Wh-: [Wh- Word] + [Auxiliary] + [Subject] + [Verb]?',
    examples: [
      'Do you speak English? Yes, I do.',
      'Is she an architecture student? Yes, she is.',
      'Where do you live? I live in Toronto.',
      'What time does the train arrive?',
      'Why are you studying for the TOEFL exam?'
    ]
  },
  {
    id: 'negative_sentences',
    title: 'Negative Sentences (Not, Never, Don\'t / Doesn\'t)',
    subtitle: 'Forming accurate negative statements with helper verbs',
    badge: 'Negation Rules',
    description: 'In English, you cannot simply add "not" to a main verb (never say "I not like"). You MUST use the auxiliary helper: don\'t / doesn\'t + base verb in the Present Simple, or "be + not" (am not / isn\'t / aren\'t). "Never" already makes a sentence negative, so do not use double negatives!',
    keyRule: 'Subject + don\'t/doesn\'t + Base Verb. Subject + am/is/are not. With "never": Subject + never + Verb (e.g., "He never drinks coffee", NOT "He doesn\'t never drink").',
    formula: 'Simple: S + don\'t/doesn\'t + V(base) | To Be: S + am/is/are + not | Frequency: S + never + V(s/es)',
    examples: [
      'I don\'t eat fast food on weekdays.',
      'She doesn\'t like cold weather.',
      'They are not in the classroom right now.',
      'He never forgets his mother\'s birthday.',
      'We didn\'t watch TV yesterday evening.'
    ]
  },
  {
    id: 'there_is_there_are',
    title: 'There is & There are (Existence)',
    subtitle: 'Stating the presence or existence of singular vs. plural entities',
    badge: 'Existence Forms',
    description: 'Use "There is" (or There\'s) with singular countable nouns and uncountable nouns. Use "There are" with plural countable nouns. Questions invert the order: "Is there...?" and "Are there...?".',
    keyRule: 'Singular/Uncountable: "There is" / "There\'s" (There is a book / There is some water). Plural: "There are" (There are five chairs). Questions: "Is there a...?" / "Are there any...?".',
    formula: 'Singular: There is + a/an/uncountable | Plural: There are + plural noun | Question: Is/Are there...?',
    examples: [
      'There is a modern computer lab on the second floor.',
      'There is some fresh milk in the refrigerator.',
      'There are twenty-five students in this English class.',
      'Is there a pharmacy near here? Yes, there is.',
      'Are there any questions about today\'s lesson?'
    ]
  }
];

export function getSentenceStructureStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'basic_word_order':
      return generateWordOrderQuestions(starNumber, mSeed);
    case 'coordinating_conjunctions':
      return generateConjunctionQuestions(starNumber, mSeed);
    case 'question_formation':
      return generateQuestionFormationQuestions(starNumber, mSeed);
    case 'negative_sentences':
      return generateNegativeQuestions(starNumber, mSeed);
    case 'there_is_there_are':
      return generateThereIsThereAreQuestions(starNumber, mSeed);
    default:
      return generateWordOrderQuestions(starNumber, mSeed);
  }
}

// 1. Basic Word Order (S-V-O-P-T) with monthly rotation
function generateWordOrderQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { 
      prompt: 'Arrange the sentence elements correctly: [football] [plays] [in the park] [Leo] [on Sundays]',
      ans: 'Leo plays football in the park on Sundays.',
      wrong1: 'Leo plays in the park football on Sundays.',
      wrong2: 'On Sundays Leo plays in the park football.',
      wrong3: 'Leo on Sundays football plays in the park.',
      expl: 'Correct English syntax: Subject (Leo) + Verb (plays) + Object (football) + Place (in the park) + Time (on Sundays).'
    },
    { 
      prompt: 'Arrange the sentence elements correctly: [reads] [in the library] [Sarah] [books] [every morning]',
      ans: 'Sarah reads books in the library every morning.',
      wrong1: 'Sarah reads in the library books every morning.',
      wrong2: 'Sarah every morning books reads in the library.',
      wrong3: 'Books Sarah reads in the library every morning.',
      expl: 'Subject + Verb + Object + Place + Time: Sarah reads books in the library every morning.'
    },
    { 
      prompt: 'Identify the grammatically correct sentence order:',
      ans: 'We eat dinner at a nice restaurant on Friday nights.',
      wrong1: 'We eat on Friday nights dinner at a nice restaurant.',
      wrong2: 'We eat at a nice restaurant dinner on Friday nights.',
      wrong3: 'On Friday nights we eat at a nice restaurant dinner.',
      expl: 'Never place Place or Time between the verb "eat" and the direct object "dinner".'
    },
    { 
      prompt: 'Choose the correct English word order:',
      ans: 'The students studied biology in the laboratory yesterday.',
      wrong1: 'The students studied yesterday biology in the laboratory.',
      wrong2: 'The students in the laboratory studied yesterday biology.',
      wrong3: 'Biology the students studied in the laboratory yesterday.',
      expl: 'S (The students) + V (studied) + O (biology) + P (in the laboratory) + T (yesterday).'
    },
    { 
      prompt: 'Select the sentence with natural, correct syntax:',
      ans: 'She bought a new laptop at the store two days ago.',
      wrong1: 'She bought at the store a new laptop two days ago.',
      wrong2: 'She bought two days ago a new laptop at the store.',
      wrong3: 'Two days ago she at the store bought a new laptop.',
      expl: 'Subject + Verb + Object + Place + Time is the fundamental English template.'
    },
    { 
      prompt: 'Arrange the sentence properly: [plays] [the violin] [at school] [David] [on Mondays]',
      ans: 'David plays the violin at school on Mondays.',
      wrong1: 'David plays at school the violin on Mondays.',
      wrong2: 'David on Mondays plays at school the violin.',
      wrong3: 'The violin David plays at school on Mondays.',
      expl: 'Subject (David) + Verb (plays) + Object (the violin) + Place (at school) + Time (on Mondays).'
    }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 7) % items.length];

    questions.push({
      id: i + 1,
      question: `${item.prompt}`,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Incorrect word order: violates Subject-Verb-Object-Place-Time.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Never put time or place between verb and object.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect sentence structure.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Formula: Subject + Verb + Direct Object + Place + Time.',
      ruleTip: 'S + V + O + Place + Time'
    });
  }

  return questions;
}

// 2. Coordinating Conjunctions (And, But, Or, So, Because) with monthly rotation
function generateConjunctionQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'I wanted to buy the new smartphone, ______ it was too expensive.', ans: 'but', expl: 'Use "but" to introduce a contrast or obstacle.', wrong1: 'and', wrong2: 'so', wrong3: 'or' },
    { stem: 'It was pouring rain outside, ______ we decided to stay at home.', ans: 'so', expl: 'Use "so" to show the result or consequence.', wrong1: 'because', wrong2: 'but', wrong3: 'or' },
    { stem: 'He went to sleep early ______ he was very tired after football practice.', ans: 'because', expl: 'Use "because" to state the reason or cause.', wrong1: 'so', wrong2: 'but', wrong3: 'or' },
    { stem: 'She bought fresh apples, oranges, ______ bananas at the market.', ans: 'and', expl: 'Use "and" for addition in a list.', wrong1: 'but', wrong2: 'so', wrong3: 'because' },
    { stem: 'Would you prefer to study in the library ______ in the campus cafe?', ans: 'or', expl: 'Use "or" to present an alternative or choice.', wrong1: 'so', wrong2: 'because', wrong3: 'and' },
    { stem: 'She loves reading mystery novels, ______ she doesn\'t like horror movies.', ans: 'but', expl: 'Use "but" for contrast between positive and negative preference.', wrong1: 'because', wrong2: 'so', wrong3: 'or' },
    { stem: 'We set our alarms for 6:00 AM, ______ we did not miss the early flight.', ans: 'so', expl: 'Result conjunction is "so".', wrong1: 'because', wrong2: 'or', wrong3: 'but' },
    { stem: 'The restaurant was fully booked ______ it is famous for delicious sushi.', ans: 'because', expl: 'Reason conjunction is "because".', wrong1: 'so', wrong2: 'or', wrong3: 'but' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 9) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct linking conjunction: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Does not fit the logical relationship between the clauses.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect conjunction meaning.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect choice.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'And = Addition | But = Contrast | So = Result | Because = Reason | Or = Alternative.',
      ruleTip: 'And / But / So / Because / Or'
    });
  }

  return questions;
}

// 3. Question Formation with monthly rotation
function generateQuestionFormationQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: '______ you like drinking green tea in the morning?', ans: 'Do', expl: 'Use "Do" + subject "you" + base verb "like" for Present Simple yes/no questions.', wrong1: 'Are', wrong2: 'Does', wrong3: 'Have' },
    { stem: 'Where ______ your brother work?', ans: 'does', expl: 'Use "Where does" for 3rd person singular subject "your brother" (he).', wrong1: 'do', wrong2: 'is', wrong3: 'are' },
    { stem: '______ time does the English lecture start?', ans: 'What', expl: 'Question word combo: "What time...?" asks for a specific clock time.', wrong1: 'Which', wrong2: 'When', wrong3: 'How' },
    { stem: '______ are you carrying an umbrella today? Because it is going to rain.', ans: 'Why', expl: 'Use "Why" to ask for reasons (answered with "Because...").', wrong1: 'Where', wrong2: 'What', wrong3: 'How' },
    { stem: 'How ______ students are in your classroom?', ans: 'many', expl: 'Use "How many" with plural countable nouns ("students").', wrong1: 'much', wrong2: 'often', wrong3: 'far' },
    { stem: '______ your parents live in New York?', ans: 'Do', expl: 'Use "Do" with plural subject "your parents" (they).', wrong1: 'Does', wrong2: 'Are', wrong3: 'Is' },
    { stem: 'When ______ the intercity train arrive at the station?', ans: 'does', expl: 'Singular subject "the train" uses auxiliary "does".', wrong1: 'do', wrong2: 'is', wrong3: 'has' },
    { stem: '______ is your favorite author?', ans: 'Who', expl: 'Asking about a person uses "Who".', wrong1: 'Where', wrong2: 'Why', wrong3: 'How' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 11) % items.length];

    questions.push({
      id: i + 1,
      question: `Complete the question: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Incorrect auxiliary helper or question word.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Does not agree with the subject or tense.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect option.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Remember QUASM: Question word + Auxiliary + Subject + Main verb.',
      ruleTip: 'Do/Does + S + Base Verb? | Wh- + Aux + S + V?'
    });
  }

  return questions;
}

// 4. Negative Sentences with monthly rotation
function generateNegativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'My sister ______ eat meat because she is a vegetarian.', ans: "doesn't", expl: 'Use "doesn\'t + base verb" with 3rd-person singular "my sister" (she).', wrong1: "don't", wrong2: "isn't", wrong3: "not" },
    { stem: 'They ______ like waking up early on weekends.', ans: "don't", expl: 'Use "don\'t + base verb" with plural subject "they".', wrong1: "doesn't", wrong2: "aren't", wrong3: "not" },
    { stem: 'I ______ drink coffee in the evening because it keeps me awake.', ans: 'never', expl: '"Never" expresses 0% frequency and already makes the sentence negative.', wrong1: "don't never", wrong2: "not never", wrong3: "no" },
    { stem: 'The students ______ in the classroom right now; they are at lunch.', ans: "aren't", expl: 'Use "aren\'t" (are not) with the verb to be and plural subject "students".', wrong1: "don't", wrong2: "doesn't", wrong3: "not" },
    { stem: 'He ______ have a car, so he rides his bicycle to work.', ans: "doesn't", expl: 'Negative with singular subject "he" uses "doesn\'t have" (base verb).', wrong1: "don't have", wrong2: "has not", wrong3: "not has" },
    { stem: 'We ______ visit that cinema often because it is far away.', ans: "don't", expl: 'Negative with plural "we" uses "don\'t + base verb".', wrong1: "doesn't", wrong2: "aren't", wrong3: "not" }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 5) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct negative word: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Grammatically incorrect negation in Present Simple.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Double negative or incorrect auxiliary.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect negation form.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Subject (I/you/we/they) -> don\'t. Subject (he/she/it) -> doesn\'t. To be -> am not / isn\'t / aren\'t.',
      ruleTip: "don't / doesn't + Base Verb | isn't / aren't"
    });
  }

  return questions;
}

// 5. There is & There are with monthly rotation
function generateThereIsThereAreQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: '______ a modern computer lab on the second floor of the campus building.', ans: 'There is', expl: 'Use "There is" with singular countable noun ("a modern computer lab").', wrong1: 'There are', wrong2: 'They are', wrong3: 'It have' },
    { stem: '______ twenty-five students in this introductory English class.', ans: 'There are', expl: 'Use "There are" with plural countable noun ("twenty-five students").', wrong1: 'There is', wrong2: 'There has', wrong3: 'It is' },
    { stem: '______ some fresh orange juice in the kitchen refrigerator.', ans: 'There is', expl: 'Use "There is" with uncountable noun ("orange juice").', wrong1: 'There are', wrong2: 'There have', wrong3: 'They are' },
    { stem: '______ any good restaurants near the university campus?', ans: 'Are there', expl: 'Use "Are there" for questions with plural countable noun ("good restaurants").', wrong1: 'Is there', wrong2: 'Do there', wrong3: 'Have there' },
    { stem: '______ a pharmacy open 24 hours in this neighborhood?', ans: 'Is there', expl: 'Use "Is there" for questions with singular countable noun ("a pharmacy").', wrong1: 'Are there', wrong2: 'Does there', wrong3: 'Has there' },
    { stem: '______ three new books on the study table.', ans: 'There are', expl: 'Use "There are" with plural countable nouns.', wrong1: 'There is', wrong2: 'There has', wrong3: 'It is' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 13) % items.length];

    questions.push({
      id: i + 1,
      question: `Fill in the blank with "There is" or "There are": "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Check singular vs. plural countability.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect existential structure in English.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect choice.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'There is + Singular / Uncountable. There are + Plural.',
      ruleTip: 'There is (Singular) vs. There are (Plural)'
    });
  }

  return questions;
}
