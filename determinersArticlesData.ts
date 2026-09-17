import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';

export interface DeterminerArticleTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyRule: string;
  formula: string;
  examples: string[];
}

export const DETERMINER_ARTICLE_TOPICS: DeterminerArticleTopic[] = [
  {
    id: 'a_an_articles',
    title: 'Indefinite Articles (A / An)',
    subtitle: 'Choosing between "a" and "an" based on sound, not just spelling',
    badge: 'A vs. An',
    description: 'Use "a" before words starting with a consonant SOUND (a book, a doctor, a university). Use "an" before words starting with a vowel SOUND (an apple, an engineer, an hour). Used only with singular countable nouns.',
    keyRule: 'Rule is based on initial SOUND: "a" + consonant sound (a dog, a uniform /ju:/) vs. "an" + vowel sound (an egg, an honest man /ɒ/).',
    formula: 'Singular Countable: a + consonant sound | an + vowel sound',
    examples: [
      'I bought a new laptop yesterday.',
      'She is an architect in a large firm.',
      'He waited for an hour at the station.',
      'That is a university campus (starts with /j/ consonant sound).',
      'Would you like an orange or a banana?'
    ]
  },
  {
    id: 'the_vs_zero_article',
    title: 'Definite Article (The vs. Zero Article)',
    subtitle: 'Specific items vs. general concepts and uncountable plurals',
    badge: 'The vs. Zero',
    description: 'Use "the" when both speaker and listener know which specific item is meant, or when there is only one in the world (the sun, the moon). Use NO article (zero article) for general plural nouns, general abstract ideas, sports, and languages.',
    keyRule: '"The" = specific or unique (the blue car outside). "No article" = general plural/uncountable (Cats love milk, I play tennis, She speaks English).',
    formula: 'Specific: the + Noun | General plural/uncountable: Ø + Noun',
    examples: [
      'The sun rises in the east and sets in the west.',
      'Look at the dog barking across the street! (Specific)',
      'Dogs are faithful animals. (General plural - No article)',
      'I love music and art. (General concepts - No article)',
      'Can you please close the window? (Specific window in room)'
    ]
  },
  {
    id: 'some_and_any',
    title: 'Quantifiers: Some & Any',
    subtitle: 'Expressing indefinite quantities with countable & uncountable nouns',
    badge: 'Some vs. Any',
    description: 'Use "some" in positive affirmative statements and polite offers/requests. Use "any" in negative sentences and general questions.',
    keyRule: 'Positive: "some" (I have some apples / some milk). Negative: "any" (I don\'t have any milk). Questions: "any" (Do you have any questions?) Exception: Offers/Requests use "some" (Would you like some tea? Can I have some water?).',
    formula: 'Affirmative: S + V + some | Negative: S + don\'t + V + any | Question: Do you have any...? | Offer: Would you like some...?',
    examples: [
      'There is some fresh orange juice in the fridge.',
      'I don\'t have any cash in my wallet right now.',
      'Do you have any brothers or sisters?',
      'Would you like some hot coffee? (Polite offer)',
      'Can I please borrow some sugar? (Polite request)'
    ]
  },
  {
    id: 'much_many_a_lot_of',
    title: 'Much, Many & A Lot of',
    subtitle: 'Large quantities with countable vs. uncountable nouns',
    badge: 'Quantity Scale',
    description: 'Use "many" with plural countable nouns (many books, many students). Use "much" with singular uncountable nouns (much water, much time), especially in negatives and questions. "A lot of" / "lots of" works for BOTH in positive statements.',
    keyRule: 'Countable: many + plural noun (How many books?). Uncountable: much + non-count noun (How much water?). Positive: a lot of (There is a lot of milk / a lot of students).',
    formula: 'Countable: many + N(plural) | Uncountable: much + N(uncountable) | Universal: a lot of + N',
    examples: [
      'How many students are in your classroom?',
      'How much does this jacket cost?',
      'We don\'t have much time before the train departs.',
      'There are many interesting museums in this city.',
      'She has a lot of friends from all over the world.'
    ]
  },
  {
    id: 'a_few_and_a_little',
    title: 'A Few & A Little',
    subtitle: 'Small quantities with countable vs. uncountable nouns',
    badge: 'Small Amounts',
    description: 'Use "a few" with plural countable nouns to mean "a small number" (a few books). Use "a little" with singular uncountable nouns to mean "a small amount" (a little sugar).',
    keyRule: 'Countable plural: "a few" (a few minutes, a few friends). Uncountable: "a little" (a little milk, a little help, a little patience).',
    formula: 'Countable: a few + Plural Noun | Uncountable: a little + Non-count Noun',
    examples: [
      'I have a few questions for the professor.',
      'Could you please add a little milk to my coffee?',
      'We stayed in Paris for a few days.',
      'She has a little free time this afternoon.',
      'Only a few people attended the morning lecture.'
    ]
  },
  {
    id: 'every_all_each',
    title: 'Every, All & Each',
    subtitle: 'Total distribution and universal statements',
    badge: 'Universals',
    description: 'Use "every" and "each" with singular countable nouns and singular verbs. Use "all" with plural countable nouns (with plural verbs) or singular uncountable nouns.',
    keyRule: '"Every" / "Each" + Singular Noun + Singular Verb (Every student has a desk). "All" + Plural Noun + Plural Verb (All students have desks).',
    formula: 'Singular: every / each + N(singular) + V(singular) | Plural: all + N(plural) + V(plural)',
    examples: [
      'Every morning, the birds sing in the garden.',
      'Each student in the classroom received a certificate.',
      'All the books on this shelf belong to the library.',
      'All of the water in the bottle is fresh.',
      'Every child needs love and encouragement.'
    ]
  }
];

export function getDeterminersStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'a_an_articles':
      return generateAAnQuestions(starNumber, mSeed);
    case 'the_vs_zero_article':
      return generateTheZeroQuestions(starNumber, mSeed);
    case 'some_and_any':
      return generateSomeAnyQuestions(starNumber, mSeed);
    case 'much_many_a_lot_of':
      return generateMuchManyQuestions(starNumber, mSeed);
    case 'a_few_and_a_little':
      return generateFewLittleQuestions(starNumber, mSeed);
    case 'every_all_each':
      return generateEveryAllQuestions(starNumber, mSeed);
    default:
      return generateAAnQuestions(starNumber, mSeed);
  }
}

// 1. A vs. An Generator with monthly rotation
function generateAAnQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const words = [
    { word: 'apple', article: 'an', sound: 'vowel sound /æ/' },
    { word: 'orange', article: 'an', sound: 'vowel sound /ɒ/' },
    { word: 'elephant', article: 'an', sound: 'vowel sound /e/' },
    { word: 'umbrella', article: 'an', sound: 'vowel sound /ʌ/' },
    { word: 'hour', article: 'an', sound: 'silent "h", starts with vowel sound /aʊ/' },
    { word: 'honest man', article: 'an', sound: 'silent "h", starts with vowel sound /ɒ/' },
    { word: 'engineer', article: 'an', sound: 'vowel sound /e/' },
    { word: 'airport', article: 'an', sound: 'vowel sound /eə/' },
    { word: 'book', article: 'a', sound: 'consonant sound /b/' },
    { word: 'doctor', article: 'a', sound: 'consonant sound /d/' },
    { word: 'university', article: 'a', sound: 'consonant "y" sound /ju:/' },
    { word: 'European city', article: 'a', sound: 'consonant "y" sound /ju:/' },
    { word: 'uniform', article: 'a', sound: 'consonant "y" sound /ju:/' },
    { word: 'one-dollar bill', article: 'a', sound: 'consonant "w" sound /wʌn/' },
    { word: 'hospital', article: 'a', sound: 'pronounced consonant "h" sound /h/' },
    { word: 'guitar', article: 'a', sound: 'consonant sound /ɡ/' },
    { word: 'ocean wave', article: 'an', sound: 'vowel sound /oʊ/' },
    { word: 'unique painting', article: 'a', sound: 'consonant "y" sound /ju:/' },
    { word: 'honorary award', article: 'an', sound: 'silent "h", vowel sound /ɒ/' },
    { word: 'scientific telescope', article: 'a', sound: 'consonant sound /t/' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = words[(star * 3 + i * 2 + mSeed * 7) % words.length];
    const isAn = item.article === 'an';

    questions.push({
      id: i + 1,
      question: `Choose the correct indefinite article: "She saw ______ ${item.word} yesterday."`,
      sentenceWithBlank: `She saw ______ ${item.word} yesterday.`,
      options: [
        { 
          id: 'a', 
          text: item.article, 
          isCorrect: true, 
          explanation: `Use "${item.article}" because "${item.word}" begins with a ${item.sound}.` 
        },
        { 
          id: 'b', 
          text: isAn ? 'a' : 'an', 
          isCorrect: false, 
          explanation: `Incorrect. "${item.word}" begins with a ${item.sound}.` 
        },
        { 
          id: 'c', 
          text: 'the a', 
          isCorrect: false, 
          explanation: 'Never combine two articles together.' 
        },
        { 
          id: 'd', 
          text: 'some a', 
          isCorrect: false, 
          explanation: 'Incorrect combination.' 
        }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: `Listen to the initial sound of "${item.word}": does it start with a vowel or consonant sound?`,
      ruleTip: 'A + consonant sound | An + vowel sound'
    });
  }

  return questions;
}

// 2. The vs. Zero Article Generator with monthly rotation
function generateTheZeroQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { sentence: '______ sun is the center of our solar system.', ans: 'The', expl: 'Use "The" because the sun is unique (there is only one).', wrong1: 'A', wrong2: 'An', wrong3: 'Ø (No article)' },
    { sentence: 'I love listening to ______ music when studying.', ans: 'Ø (No article)', expl: 'Do not use an article for music in general (uncountable abstract noun).', wrong1: 'the', wrong2: 'a', wrong3: 'an' },
    { sentence: 'Can you please pass me ______ salt on the table?', ans: 'the', expl: 'Use "the" for the specific salt shaker on the table.', wrong1: 'a', wrong2: 'an', wrong3: 'Ø (No article)' },
    { sentence: '______ lions are known as the kings of the savannah.', ans: 'Ø (No article)', expl: 'Plural nouns representing a general category take no article.', wrong1: 'The', wrong2: 'A', wrong3: 'An' },
    { sentence: 'She plays ______ tennis every Saturday morning.', ans: 'Ø (No article)', expl: 'Names of sports (tennis, football, chess) take no article.', wrong1: 'the', wrong2: 'a', wrong3: 'an' },
    { sentence: 'Look at ______ moon shining brightly tonight!', ans: 'the', expl: 'The moon is unique, so it takes the definite article "the".', wrong1: 'a', wrong2: 'an', wrong3: 'Ø (No article)' },
    { sentence: 'My cousin can speak ______ French and Italian fluently.', ans: 'Ø (No article)', expl: 'Names of languages take no article.', wrong1: 'the', wrong2: 'a', wrong3: 'an' },
    { sentence: 'We stayed at ______ hotel near the central station.', ans: 'a', expl: 'Non-specific mention of one hotel uses indefinite article "a".', wrong1: 'Ø (No article)', wrong2: 'an', wrong3: 'the a' },
    { sentence: '______ Pacific Ocean is the largest ocean on Earth.', ans: 'The', expl: 'Names of oceans take the definite article "the".', wrong1: 'A', wrong2: 'An', wrong3: 'Ø (No article)' },
    { sentence: '______ honesty is always respected in relationships.', ans: 'Ø (No article)', expl: 'Abstract nouns in general statements take no article.', wrong1: 'The', wrong2: 'A', wrong3: 'An' },
    { sentence: 'Please turn off ______ lights when leaving the office.', ans: 'the', expl: 'Specific lights in this room/office take "the".', wrong1: 'a', wrong2: 'an', wrong3: 'Ø (No article)' },
    { sentence: 'He practices ______ basketball three days a week.', ans: 'Ø (No article)', expl: 'Sports take zero article.', wrong1: 'the', wrong2: 'a', wrong3: 'an' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 9) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct article for the blank: "${item.sentence}"`,
      sentenceWithBlank: item.sentence,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Does not follow the definite vs. zero article rule.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect article usage.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect choice.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Ask yourself: Is this specific/unique ("the"), or general/sports/languages (zero article)?',
      ruleTip: 'The (Specific/Unique) vs. Zero Article (General)'
    });
  }

  return questions;
}

// 3. Some & Any Generator with monthly rotation
function generateSomeAnyQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'We need to buy ______ milk at the grocery store.', ans: 'some', expl: 'Use "some" in positive affirmative sentences.', wrong1: 'any', wrong2: 'an', wrong3: 'every' },
    { stem: 'There aren\'t ______ clean plates left in the kitchen cupboard.', ans: 'any', expl: 'Use "any" with negative sentences (aren\'t).', wrong1: 'some', wrong2: 'a', wrong3: 'each' },
    { stem: 'Do you have ______ questions about today\'s lecture?', ans: 'any', expl: 'Use "any" in general information questions.', wrong1: 'some', wrong2: 'a', wrong3: 'an' },
    { stem: 'Would you like ______ hot chocolate before bed?', ans: 'some', expl: 'Polite offers and invitations use "some", even though it is a question.', wrong1: 'any', wrong2: 'an', wrong3: 'a' },
    { stem: 'I don\'t have ______ cash with me right now.', ans: 'any', expl: 'Negative statement with uncountable noun "cash" uses "any".', wrong1: 'some', wrong2: 'a', wrong3: 'many' },
    { stem: 'She gave me ______ really useful advice for the exam.', ans: 'some', expl: 'Positive sentence with uncountable noun "advice" uses "some".', wrong1: 'any', wrong2: 'an advice', wrong3: 'a' },
    { stem: 'Can I please have ______ water?', ans: 'some', expl: 'Polite request uses "some".', wrong1: 'any', wrong2: 'an', wrong3: 'a' },
    { stem: 'There is ______ delicious pizza left in the kitchen.', ans: 'some', expl: 'Positive affirmative sentence uses "some".', wrong1: 'any', wrong2: 'a lot', wrong3: 'every' },
    { stem: 'Are there ______ open seats in this lecture room?', ans: 'any', expl: 'General question uses "any".', wrong1: 'some', wrong2: 'an', wrong3: 'each' },
    { stem: 'Could you offer ______ assistance with this heavy luggage?', ans: 'some', expl: 'Polite request uses "some".', wrong1: 'any', wrong2: 'a', wrong3: 'an' },
    { stem: 'They didn\'t find ______ errors in the computer code.', ans: 'any', expl: 'Negative sentence uses "any".', wrong1: 'some', wrong2: 'a', wrong3: 'an' },
    { stem: 'We picked ______ fresh strawberries from the farm.', ans: 'some', expl: 'Positive affirmative uses "some".', wrong1: 'any', wrong2: 'an', wrong3: 'every' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 5) % items.length];

    questions.push({
      id: i + 1,
      question: `Complete the sentence with some or any: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Incorrect quantifier for this sentence type.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Grammatically inappropriate here.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect option.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Positive sentences use "some"; Negatives & standard questions use "any"; Offers/requests use "some".',
      ruleTip: 'Positive/Offers: Some | Negatives/Questions: Any'
    });
  }

  return questions;
}

// 4. Much, Many & A lot of Generator with monthly rotation
function generateMuchManyQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'How ______ students are enrolled in your English class?', ans: 'many', expl: '"Students" is a plural countable noun, so use "many".', wrong1: 'much', wrong2: 'a lot', wrong3: 'little' },
    { stem: 'How ______ sugar do you take in your morning tea?', ans: 'much', expl: '"Sugar" is an uncountable noun, so use "much".', wrong1: 'many', wrong2: 'few', wrong3: 'number of' },
    { stem: 'We don\'t have ______ time before our boarding gate closes.', ans: 'much', expl: '"Time" is uncountable in this context, so use "much".', wrong1: 'many', wrong2: 'few', wrong3: 'a few' },
    { stem: 'There are ______ historical monuments to visit in Rome.', ans: 'many', expl: '"Monuments" is countable plural, so use "many".', wrong1: 'much', wrong2: 'a little', wrong3: 'any' },
    { stem: 'She drank ______ fresh water after running the marathon.', ans: 'a lot of', expl: '"A lot of" is natural and correct in affirmative statements.', wrong1: 'much', wrong2: 'many', wrong3: 'a few' },
    { stem: 'How ______ luggage are you checking in for this flight?', ans: 'much', expl: '"Luggage" is an uncountable noun in English, so use "much".', wrong1: 'many', wrong2: 'few', wrong3: 'a few' },
    { stem: 'There aren\'t ______ clouds in the sky this morning.', ans: 'many', expl: '"Clouds" is countable plural, so use "many".', wrong1: 'much', wrong2: 'a little', wrong3: 'lots' },
    { stem: 'Did you make ______ friends during your summer exchange program?', ans: 'many', expl: '"Friends" is countable plural, so use "many".', wrong1: 'much', wrong2: 'a little', wrong3: 'little' },
    { stem: 'How ______ information did the guide provide about the ruins?', ans: 'much', expl: '"Information" is uncountable, so use "much".', wrong1: 'many', wrong2: 'few', wrong3: 'a few' },
    { stem: 'There were ______ tourists photographing the sunset on the beach.', ans: 'many', expl: '"Tourists" is countable plural, so use "many".', wrong1: 'much', wrong2: 'a little', wrong3: 'little' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 11) % items.length];

    questions.push({
      id: i + 1,
      question: `Fill in the blank with the appropriate quantifier: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Check whether the noun is countable or uncountable.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect countability match.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect quantifier choice.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Countable plurals (books, cars) -> Many. Uncountable (water, money, time) -> Much.',
      ruleTip: 'Many + Countable Plural | Much + Uncountable'
    });
  }

  return questions;
}

// 5. A few & A little Generator with monthly rotation
function generateFewLittleQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'I have ______ close friends who live in this city.', ans: 'a few', expl: '"Friends" is countable plural, so use "a few" (a small number).', wrong1: 'a little', wrong2: 'little', wrong3: 'much' },
    { stem: 'Could you please pour ______ milk into my tea cup?', ans: 'a little', expl: '"Milk" is an uncountable liquid, so use "a little" (a small amount).', wrong1: 'a few', wrong2: 'few', wrong3: 'many' },
    { stem: 'We need ______ more minutes to finish writing our essays.', ans: 'a few', expl: '"Minutes" is countable plural, so use "a few".', wrong1: 'a little', wrong2: 'little', wrong3: 'much' },
    { stem: 'She has ______ knowledge of computer programming.', ans: 'a little', expl: '"Knowledge" is uncountable, so use "a little".', wrong1: 'a few', wrong2: 'few', wrong3: 'many' },
    { stem: 'There were ______ empty seats in the back row of the theater.', ans: 'a few', expl: '"Seats" is countable plural, so use "a few".', wrong1: 'a little', wrong2: 'much', wrong3: 'little' },
    { stem: 'Add ______ salt to the boiling pasta water.', ans: 'a little', expl: '"Salt" is uncountable, so use "a little".', wrong1: 'a few', wrong2: 'few', wrong3: 'many' },
    { stem: 'I received ______ emails with helpful suggestions today.', ans: 'a few', expl: '"Emails" is countable plural, so use "a few".', wrong1: 'a little', wrong2: 'little', wrong3: 'much' },
    { stem: 'The patient only needs ______ rest before going home.', ans: 'a little', expl: '"Rest" is uncountable, so use "a little".', wrong1: 'a few', wrong2: 'few', wrong3: 'many' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 7) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose "a few" or "a little": "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Check countability: countable takes "a few", uncountable takes "a little".' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect quantifier.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Countable nouns take "a few". Uncountable nouns take "a little".',
      ruleTip: 'A few + Countable Plural | A little + Uncountable'
    });
  }

  return questions;
}

// 6. Every & All & Each Generator with monthly rotation
function generateEveryAllQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: '______ student in the classroom must wear an ID badge.', ans: 'Every', expl: '"Every" is followed by a singular countable noun ("student") and singular verb ("must wear").', wrong1: 'All', wrong2: 'Both of', wrong3: 'All of' },
    { stem: '______ the students have submitted their science projects.', ans: 'All', expl: '"All" is followed by plural countable noun ("the students") and plural verb ("have submitted").', wrong1: 'Every', wrong2: 'Each', wrong3: 'An' },
    { stem: '______ player received a bronze medal for participation.', ans: 'Each', expl: '"Each" emphasizes individuals one by one with a singular noun and verb.', wrong1: 'All', wrong2: 'All of', wrong3: 'Both' },
    { stem: 'She visits the fitness gym ______ day after work.', ans: 'every', expl: 'Use "every day" (singular noun "day") to indicate routine frequency.', wrong1: 'all', wrong2: 'all the', wrong3: 'each of' },
    { stem: '______ of the books in this library are organized by category.', ans: 'All', expl: '"All of the + plural noun" takes a plural verb ("are").', wrong1: 'Every', wrong2: 'Each the', wrong3: 'A' },
    { stem: '______ morning begins with fresh coffee and meditation.', ans: 'Every', expl: '"Every" + singular noun ("morning") + singular verb ("begins").', wrong1: 'All', wrong2: 'All the', wrong3: 'Both' },
    { stem: '______ candidate in the debate had five minutes to speak.', ans: 'Each', expl: '"Each candidate" focuses on individual participants with singular verb.', wrong1: 'All', wrong2: 'All the', wrong3: 'Both of' },
    { stem: '______ members of the orchestra played harmoniously.', ans: 'All', expl: '"All members" takes plural noun and plural verb.', wrong1: 'Every', wrong2: 'Each', wrong3: 'One' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 13) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct distributive determiner: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Check whether the noun and verb following it are singular or plural.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect distributive word.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect option.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Every/Each + Singular Noun + Singular Verb. All + Plural Noun + Plural Verb.',
      ruleTip: 'Every/Each + Singular | All + Plural'
    });
  }

  return questions;
}
