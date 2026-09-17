import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A2_SENTENCE_CONNECTORS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'wh_questions_subject_object',
    title: 'Question Formation (Wh- Words & Subject/Object)',
    subtitle: 'Who, what, where, when, why, how, which + auxiliary inversion',
    badge: 'Wh- Questions',
    description: 'Forming questions in English requires understanding auxiliary verb inversion: Wh- Word + Auxiliary (do/does/did/be/have/modal) + Subject + Main Verb ("Where did you go?"). Special Rule for Subject Questions: When the Wh- word IS the subject doing the action, DO NOT use do/does/did; use normal affirmative word order ("Who discovered penicillin?", NOT "Who did discover penicillin?").',
    keyRule: 'Object Questions (standard): Wh- + Auxiliary + Subject + Base Verb ("What did you see?"). Subject Questions (Wh- is the doer): Wh- + Past/Present Verb ("Who wrote this book?").',
    formula: 'Standard: [Wh- Word] + [Auxiliary] + [Subject] + [Main Verb]? | Subject Q: [Who/What] + [Verb] + [Object]?',
    examples: [
      'Where did you spend your summer holidays?',
      'Who invented the telephone in 1876? (Subject Question - no "did")',
      'How often do you visit the university library?',
      'Which research topic did the committee select?',
      'Why was the international flight delayed?'
    ]
  },
  {
    id: 'question_tags_basic',
    title: 'Basic Question Tags (aren\'t you? / didn\'t they?)',
    subtitle: 'Checking information and inviting confirmation at the end of sentences',
    badge: 'Question Tags',
    description: 'Question tags are mini-questions added to the end of a statement to ask for agreement or confirm facts. The Golden Rule of Tags: A positive statement takes a NEGATIVE tag ("You are a student, aren\'t you?"). A negative statement takes a POSITIVE tag ("You aren\'t cold, are you?"). The tag uses the same auxiliary/modal verb and pronoun matching the subject.',
    keyRule: 'Positive Sentence (+) -> Negative Tag (-): "She is doctors, isn\'t she?" / "They went home, didn\'t they?". Negative Sentence (-) -> Positive Tag (+): "He can\'t swim, can he?" / "You don\'t like coffee, do you?".',
    formula: 'Positive (+): S + Aux + ... , [Aux(neg) + pronoun]? | Negative (-): S + Aux(neg) + ... , [Aux(pos) + pronoun]?',
    examples: [
      'You are enrolled in the biology course, aren\'t you?',
      'She doesn\'t live in Montreal anymore, does she?',
      'They finished the exam on time, didn\'t they?',
      'Lucas can play the violin, can\'t he?',
      'The lecture wasn\'t too difficult, was it?'
    ]
  },
  {
    id: 'coordinating_subordinating_conjunctions',
    title: 'Conjunctions & Connectors (because, although, so, but...)',
    subtitle: 'Linking clauses of reason, contrast, result, and condition smoothly',
    badge: 'Connectors & Clauses',
    description: 'Conjunctions join words, phrases, and clauses into sophisticated sentences: "because" / "as" (gives reason), "so" (shows result), "although" / "even though" (shows surprising contrast), "but" (direct contrast), "and" (addition), "or" (alternative), and "while" (time/simultaneous contrast).',
    keyRule: 'Reason: because + full clause (We stayed inside because it rained). Result: so + clause (It rained, so we stayed inside). Contrast: Although + clause, main clause (Although it rained, we enjoyed the hike). Never use "although" and "but" together in the same sentence!',
    formula: 'Reason: Main Clause + because + Reason Clause | Contrast: Although + Clause 1, Clause 2 | Result: Cause + so + Result',
    examples: [
      'We canceled the picnic because the weather turned stormy.',
      'The train was crowded, so we decided to wait for the next one.',
      'Although the physics exam was challenging, Sarah received top marks.',
      'He wanted to buy the laptop, but he didn\'t have enough money.',
      'Even though it was raining, the children played outside happily.'
    ]
  },
  {
    id: 'zero_first_conditionals',
    title: 'Zero & First Conditionals (Facts & Real Future)',
    subtitle: 'General scientific truths vs. real possibilities in the future',
    badge: 'If & Will',
    description: 'Conditionals express cause-and-effect relationships. Zero Conditional: for universal scientific facts and habits (If you heat water to 100°C, it boils -> Present Simple in both clauses). First Conditional: for real future possibilities and consequences (If it rains tomorrow, we will stay indoors -> If + Present Simple, will + Base Verb). Never put "will" inside the "if" clause!',
    keyRule: 'Zero Conditional: If + Present Simple, Present Simple. First Conditional: If + Present Simple, will (\'ll) + Base Verb. The "if" clause NEVER takes "will" (say "If I have time", NOT "If I will have time").',
    formula: 'Zero: If + S + V(present), S + V(present) | First: If + S + V(present), S + will + V(base)',
    examples: [
      'If you freeze water, it turns into solid ice (Zero Conditional).',
      'If Sarah passes her final examination, she will graduate with honors (First Conditional).',
      'If we leave now, we will catch the earlier express train.',
      'What will you do if the laboratory is closed tomorrow?',
      'If you mix red and yellow paint, you get orange.'
    ]
  },
  {
    id: 'so_neither_do_i',
    title: 'Agreeing & Short Responses (So do I / Neither do I)',
    subtitle: 'Echoing and agreeing with affirmative and negative statements',
    badge: 'So & Neither',
    description: 'Use "So + Auxiliary + Subject" to agree with positive statements ("I love Italian food" -> "So do I" / "So does Marcus"). Use "Neither + Auxiliary + Subject" to agree with negative statements ("I don\'t eat meat" -> "Neither do I" / "Neither can she"). The auxiliary verb must match the tense and verb type of the first speaker (be, do, have, modal).',
    keyRule: 'Positive statement agreement: So + [Auxiliary] + [Subject] ("I am tired" -> "So am I"). Negative statement agreement: Neither + [Auxiliary] + [Subject] ("I can\'t swim" -> "Neither can I"). Never say "Neither don\'t I" (double negative!).',
    formula: 'Positive Agreement: So + [am/is/are/do/does/did/can/have] + I/Subject | Negative Agreement: Neither + [Auxiliary] + I/Subject',
    examples: [
      '"I study English every day." — "So do I."',
      '"I didn\'t watch the football match last night." — "Neither did I."',
      '"She is very excited about the study trip." — "So am I."',
      '"Lucas cannot attend the morning seminar." — "Neither can Oliver."',
      '"We have visited the modern art museum." — "So have we."'
    ]
  }
];

export function getA2SentenceConnectorsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'wh_questions_subject_object':
      return generateWhQuestionsQuestions(starNumber, mSeed);
    case 'question_tags_basic':
      return generateQuestionTagsQuestions(starNumber, mSeed);
    case 'coordinating_subordinating_conjunctions':
      return generateConjunctionsQuestions(starNumber, mSeed);
    case 'zero_first_conditionals':
      return generateConditionalsQuestions(starNumber, mSeed);
    case 'so_neither_do_i':
      return generateSoNeitherQuestions(starNumber, mSeed);
    default:
      return generateWhQuestionsQuestions(starNumber, mSeed);
  }
}

// 1. Wh- Questions Pool
function generateWhQuestionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Where', target: 'did you buy', wrong: ['did you bought', 'do you bought', 'you bought'], context: 'that antique fountain pen?', note: 'Standard question with did: Wh- + did + subject + base verb.' },
    { prompt: '', target: 'Who wrote', wrong: ['Who did write', 'Who did wrote', 'Who does wrote'], context: 'this famous scientific article on astrophysics in 1905?', note: 'Subject question (Who is doing the action): Who + past verb (no "did").' },
    { prompt: 'How often', target: 'does Professor Clark hold', wrong: ['do Professor Clark holds', 'does Professor Clark holds', 'is Professor Clark hold'], context: 'office hours for undergraduate students?', note: 'Singular subject "Professor Clark" takes "does + base verb".' },
    { prompt: 'What time', target: 'does the morning lecture begin', wrong: ['do the morning lecture begins', 'does the morning lecture begins', 'is the morning lecture begin'], context: 'in auditorium 4?', note: 'Wh- time question takes "does + subject + begin".' },
    { prompt: 'Why', target: 'were the students celebrating', wrong: ['did the students celebrating', 'was the students celebrating', 'are the students celebrated'], context: 'in the campus quadrangle yesterday?', note: 'Past continuous question with plural subject takes "were the students celebrating".' },
    { prompt: 'Which laboratory', target: 'did you visit', wrong: ['did you visited', 'do you visited', 'were you visit'], context: 'during your science faculty tour?', note: 'Which + noun + did + subject + base verb.' },
    { prompt: '', target: 'What happened', wrong: ['What did happen', 'What did happened', 'What was happened'], context: 'at the botanical garden during the overnight storm?', note: 'Subject question with What: What + happened (no auxiliary "did").' },
    { prompt: 'How much', target: 'did the new microscope cost', wrong: ['did the new microscope costed', 'does the new microscope costed', 'was the new microscope cost'], context: 'the biology department?', note: '"Cost" base form after did: did the new microscope cost.' },
    { prompt: 'When', target: 'will the committee publish', wrong: ['will the committee publishes', 'the committee will publish', 'does the committee will publish'], context: 'the annual scholarship decisions?', note: 'Future question with will: When + will + subject + base verb.' },
    { prompt: '', target: 'Who discovered', wrong: ['Who did discover', 'Who did discovered', 'Who does discovered'], context: 'penicillin in the laboratory in 1928?', note: 'Subject question: Who discovered.' },
    { prompt: 'Where', target: 'can I find', wrong: ['can I to find', 'do I can find', 'I can find'], context: 'the peer-reviewed articles for our literature review?', note: 'Modal question: Where + can + I + base verb.' },
    { prompt: 'Why', target: 'didn\'t you attend', wrong: ['didn\'t you attended', 'not did you attend', 'don\'t you attended'], context: 'the team workshop on data analytics yesterday?', note: 'Negative question: Why + didn\'t + subject + base verb.' },
    { prompt: 'What kind of music', target: 'does Sarah prefer', wrong: ['do Sarah prefers', 'does Sarah prefers', 'is Sarah prefer'], context: 'to listen to while studying?', note: 'Third-person singular: does Sarah prefer.' },
    { prompt: 'How long', target: 'did they stay', wrong: ['did they stayed', 'do they stayed', 'were they stay'], context: 'in Vancouver during the winter semester?', note: 'How long + did + they + stay.' },
    { prompt: '', target: 'Who won', wrong: ['Who did win', 'Who did won', 'Who does won'], context: 'the international student robotics championship?', note: 'Subject question: Who won.' },
    { prompt: 'Which platform', target: 'does the high-speed train depart', wrong: ['do the high-speed train departs', 'does the high-speed train departs', 'is the high-speed train depart'], context: 'from this morning?', note: 'Singular question: does the train depart.' },
    { prompt: 'What', target: 'were you doing', wrong: ['was you doing', 'did you doing', 'are you doing'], context: 'when the earthquake alarm sounded?', note: 'Past continuous question with you: were you doing.' },
    { prompt: 'How many foreign languages', target: 'can she speak', wrong: ['can she to speak', 'does she can speak', 'she can speak'], context: 'fluently?', note: 'Modal question: can she speak.' },
    { prompt: 'Why', target: 'did the flight arrive', wrong: ['did the flight arrived', 'does the flight arrived', 'was the flight arrive'], context: 'twenty minutes ahead of schedule?', note: 'did + the flight + arrive.' },
    { prompt: '', target: 'What caused', wrong: ['What did cause', 'What did caused', 'What was caused'], context: 'the sudden drop in atmospheric pressure?', note: 'Subject question: What caused.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Wh- Question Formation');
}

// 2. Question Tags Pool
function generateQuestionTagsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'You are enrolled in the advanced chemistry seminar,', target: "aren't you?", wrong: ["isn't you?", "are you?", "don't you?"], context: '', note: 'Positive sentence with "are" takes negative tag "aren\'t you?".' },
    { prompt: 'Sophia doesn\'t live in Montreal anymore,', target: 'does she?', wrong: ["doesn't she?", "is she?", "isn't she?"], context: '', note: 'Negative sentence with "doesn\'t" takes positive tag "does she?".' },
    { prompt: 'They finished the engineering project on time,', target: "didn't they?", wrong: ["did they?", "haven't they?", "don't they?"], context: '', note: 'Past simple positive sentence takes "didn\'t they?".' },
    { prompt: 'Lucas can speak three languages fluently,', target: "can't he?", wrong: ["can he?", "doesn't he?", "isn't he?"], context: '', note: 'Modal "can" takes negative tag "can\'t he?".' },
    { prompt: 'The physics lecture wasn\'t too difficult to understand,', target: 'was it?', wrong: ["wasn't it?", "is it?", "did it?"], context: '', note: 'Negative sentence with "wasn\'t" takes positive tag "was it?".' },
    { prompt: 'We haven\'t received the official laboratory results yet,', target: 'have we?', wrong: ["haven't we?", "did we?", "do we?"], context: '', note: 'Negative sentence with "haven\'t" takes positive tag "have we?".' },
    { prompt: 'You will help me carry these heavy textbooks,', target: "won't you?", wrong: ["will you?", "don't you?", "aren't you?"], context: '', note: 'Positive with "will" takes negative tag "won\'t you?".' },
    { prompt: 'The train departs from platform 3 at 8:15 AM,', target: "doesn't it?", wrong: ["does it?", "isn't it?", "don't it?"], context: '', note: 'Present simple with singular subject takes "doesn\'t it?".' },
    { prompt: 'She isn\'t working in the clinic this evening,', target: 'is she?', wrong: ["isn't she?", "does she?", "doesn't she?"], context: '', note: 'Negative with "isn\'t" takes positive tag "is she?".' },
    { prompt: 'Your parents were very proud of your graduation honors,', target: "weren't they?", wrong: ["were they?", "didn't they?", "aren't they?"], context: '', note: 'Positive with "were" takes negative tag "weren\'t they?".' },
    { prompt: 'Oliver didn\'t forget to submit his assignment,', target: 'did he?', wrong: ["didn't he?", "does he?", "was he?"], context: '', note: 'Negative with "didn\'t" takes positive tag "did he?".' },
    { prompt: 'This smartphone has a high-resolution camera,', target: "doesn't it?", wrong: ["has it?", "hasn't it?", "isn't it?"], context: '', note: 'Present simple with has takes "doesn\'t it?".' },
    { prompt: 'You weren\'t waiting in the cold for too long,', target: 'were you?', wrong: ["weren't you?", "did you?", "are you?"], context: '', note: 'Negative with "weren\'t" takes positive tag "were you?".' },
    { prompt: 'The students should review the study notes before Friday,', target: "shouldn't they?", wrong: ["should they?", "don't they?", "aren't they?"], context: '', note: 'Positive with "should" takes negative tag "shouldn\'t they?".' },
    { prompt: 'He is an experienced airline pilot,', target: "isn't he?", wrong: ["is he?", "doesn't he?", "aren't he?"], context: '', note: 'Positive with "is" takes "isn\'t he?".' },
    { prompt: 'They don\'t eat seafood at the restaurant,', target: 'do they?', wrong: ["don't they?", "are they?", "did they?"], context: '', note: 'Negative with "don\'t" takes positive tag "do they?".' },
    { prompt: 'Emma worked at the research center last summer,', target: "didn't she?", wrong: ["did she?", "wasn't she?", "doesn't she?"], context: '', note: 'Past simple positive takes "didn\'t she?".' },
    { prompt: 'We aren\'t late for the keynote presentation,', target: 'are we?', wrong: ["aren't we?", "do we?", "were we?"], context: '', note: 'Negative with "aren\'t" takes positive tag "are we?".' },
    { prompt: 'The weather will be sunny all weekend,', target: "won't it?", wrong: ["will it?", "isn't it?", "doesn't it?"], context: '', note: 'Positive with "will" takes "won\'t it?".' },
    { prompt: 'You could hear the siren from your room,', target: "couldn't you?", wrong: ["could you?", "didn't you?", "can't you?"], context: '', note: 'Positive with "could" takes "couldn\'t you?".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Question Tags');
}

// 3. Conjunctions & Connectors Pool
function generateConjunctionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'We canceled our outdoor excursion', target: 'because the weather forecast predicted', wrong: ['so the weather forecast predicted', 'although the weather forecast predicted', 'but the weather forecast predicted'], context: 'heavy thunderstorms.', note: '"because" introduces the cause or reason for canceling.' },
    { prompt: 'The morning train was severely overcrowded,', target: 'so we decided to wait', wrong: ['because we decided to wait', 'although we decided to wait', 'since we decided to wait'], context: 'for the next express service.', note: '"so" introduces the result of the train being crowded.' },
    { prompt: '', target: 'Although the physics exam was very difficult,', wrong: ['Because the physics exam was very difficult,', 'So the physics exam was very difficult,', 'Unless the physics exam was very difficult,'], context: 'Sarah achieved the highest score in the class.', note: '"Although" introduces a surprising contrast between difficulty and high score.' },
    { prompt: 'He wanted to purchase the newest tablet model,', target: 'but he didn\'t have enough savings', wrong: ['because he didn\'t have enough savings', 'so he didn\'t have enough savings', 'although he didn\'t have enough savings'], context: 'in his account.', note: '"but" connects two contrasting independent clauses.' },
    { prompt: '', target: 'Even though it was raining heavily,', wrong: ['Because it was raining heavily,', 'So it was raining heavily,', 'Since it was raining heavily,'], context: 'the athletes continued their marathon training outside.', note: '"Even though" shows strong concession/contrast.' },
    { prompt: 'Please double-check your calculations', target: 'before you submit the final report', wrong: ['after you submit the final report', 'so you submit the final report', 'although you submit the final report'], context: 'to the department chair.', note: '"before" establishes the correct chronological sequence.' },
    { prompt: 'She listened to an English podcast', target: 'while she was jogging', wrong: ['because she was jogging', 'so she was jogging', 'before she was jogging'], context: 'around the campus park.', note: '"while" connects simultaneous ongoing activities.' },
    { prompt: 'You can choose to study biochemistry', target: 'or you can specialize in neuroscience', wrong: ['and you can specialize in neuroscience', 'but you can specialize in neuroscience', 'so you can specialize in neuroscience'], context: 'in your third year.', note: '"or" presents alternative academic pathways.' },
    { prompt: 'The researcher was exhausted', target: 'because she had worked', wrong: ['so she had worked', 'although she had worked', 'but she had worked'], context: 'in the laboratory all through the night.', note: '"because" explains the reason for exhaustion.' },
    { prompt: 'The laptop is lightweight and powerful,', target: 'but it has a relatively short', wrong: ['so it has a relatively short', 'because it has a relatively short', 'since it has a relatively short'], context: 'battery lifespan.', note: '"but" balances positive features with a drawback.' },
    { prompt: '', target: 'Since we have extra time before the flight,', wrong: ['Although we have extra time before the flight,', 'So we have extra time before the flight,', 'Unless we have extra time before the flight,'], context: 'let\'s browse the airport bookstore.', note: '"Since" functions as a causal connector (meaning because/as).' },
    { prompt: 'He practiced speaking aloud every day,', target: 'so his pronunciation improved', wrong: ['because his pronunciation improved', 'although his pronunciation improved', 'but his pronunciation improved'], context: 'remarkably fast.', note: '"so" introduces the positive result of daily practice.' },
    { prompt: '', target: 'Although he was only nineteen years old,', wrong: ['Because he was only nineteen years old,', 'So he was only nineteen years old,', 'Since he was only nineteen years old,'], context: 'he founded a successful artificial intelligence startup.', note: '"Although" highlights unexpected achievement despite young age.' },
    { prompt: 'Make sure to turn off all electrical appliances', target: 'after you finish the experiment', wrong: ['before you finish the experiment', 'so you finish the experiment', 'although you finish the experiment'], context: 'for safety reasons.', note: '"after" indicates subsequent action.' },
    { prompt: 'The library was very quiet,', target: 'so everyone could concentrate', wrong: ['because everyone could concentrate', 'although everyone could concentrate', 'but everyone could concentrate'], context: 'on their term papers.', note: '"so" introduces the result of the quiet environment.' },
    { prompt: 'She went to the medical center', target: 'because she felt dizzy', wrong: ['so she felt dizzy', 'although she felt dizzy', 'but she felt dizzy'], context: 'during the morning seminar.', note: '"because" gives the reason for seeking medical attention.' },
    { prompt: 'The design is aesthetically pleasing,', target: 'and it is also extremely functional', wrong: ['but it is also extremely functional', 'so it is also extremely functional', 'although it is also extremely functional'], context: 'for daily use.', note: '"and" adds complementary positive attributes.' },
    { prompt: '', target: 'While the professor was explaining the equation,', wrong: ['Because the professor was explaining the equation,', 'So the professor was explaining the equation,', 'Although the professor was explaining the equation,'], context: 'the students took meticulous notes.', note: '"While" expresses simultaneous actions.' },
    { prompt: 'We wanted to visit the cathedral,', target: 'but it was closed for renovation', wrong: ['so it was closed for renovation', 'because it was closed for renovation', 'since it was closed for renovation'], context: 'on Tuesday afternoon.', note: '"but" shows contrast between intention and reality.' },
    { prompt: '', target: 'Although the team practiced diligently,', wrong: ['Because the team practiced diligently,', 'So the team practiced diligently,', 'Since the team practiced diligently,'], context: 'they lost the championship game by just one point.', note: '"Although" introduces concession.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Conjunctions & Connectors');
}

// 4. Zero & First Conditionals Pool
function generateConditionalsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'If you heat water to 100 degrees Celsius under normal pressure, it', target: 'boils', wrong: ['will boil', 'boiled', 'is boiling'], context: 'instantly.', note: 'Zero conditional for scientific facts uses Present Simple: "boils".' },
    { prompt: 'If Sarah passes her final examination on Friday, she', target: 'will graduate', wrong: ['graduates', 'graduated', 'would graduate'], context: 'with first-class academic honors.', note: 'First conditional real future result: If + Present Simple, will + base verb.' },
    { prompt: 'If we leave for the station right now, we', target: 'will catch', wrong: ['catch', 'caught', 'would catch'], context: 'the earlier express train to Bern.', note: 'First conditional: "will catch".' },
    { prompt: 'Plants die if they', target: "don't get", wrong: ["won't get", "didn't get", "not get"], context: 'sufficient sunlight and water.', note: 'Zero conditional fact uses Present Simple: "don\'t get".' },
    { prompt: 'What', target: 'will you do if the laboratory is closed', wrong: ['do you do if the laboratory will be closed', 'will you do if the laboratory will be closed', 'would you do if the laboratory is closed'], context: 'tomorrow morning?', note: 'First conditional question: will you do if ... is closed.' },
    { prompt: 'If you mix red and blue paint together, you', target: 'get', wrong: ['will get', 'got', 'getting'], context: 'purple.', note: 'Universal color mixing truth uses Zero Conditional: "get".' },
    { prompt: 'If the weather is sunny tomorrow, we', target: 'will have', wrong: ['have', 'had', 'would have'], context: 'a study picnic in the botanical gardens.', note: 'First conditional: "will have".' },
    { prompt: 'Ice melts if you', target: 'expose it to warm temperatures', wrong: ['will expose it to warm temperatures', 'exposed it to warm temperatures', 'are expose it to warm temperatures'], context: '.', note: 'Zero conditional: "expose it".' },
    { prompt: 'If he studies hard all weekend, he', target: 'will score', wrong: ['scores', 'scored', 'would score'], context: 'exceptionally well on the TOEFL reading test.', note: 'First conditional: "will score".' },
    { prompt: 'If you don\'t wear a warm winter coat, you', target: 'will catch', wrong: ['catch', 'caught', 'would catch'], context: 'a cold in this freezing weather.', note: 'First conditional consequence: "will catch".' },
    { prompt: 'If pure iron comes into contact with oxygen and moisture, it', target: 'rusts', wrong: ['will rust', 'rusted', 'is rusting'], context: 'over time.', note: 'Scientific truth: "rusts".' },
    { prompt: 'We will miss the beginning of the keynote lecture if we', target: "don't hurry", wrong: ["won't hurry", "didn't hurry", "not hurry"], context: 'up right now.', note: 'The if-clause in First Conditional takes Present Simple: "don\'t hurry".' },
    { prompt: 'If you press this green button on the console, the machine', target: 'starts', wrong: ['will start', 'started', 'starting'], context: 'the automated sterilization cycle.', note: 'Zero conditional machine instruction: "starts".' },
    { prompt: 'If Dr. Lin arrives before noon, we', target: 'will discuss', wrong: ['discuss', 'discussed', 'would discuss'], context: 'the clinical trial results with her.', note: 'First conditional: "will discuss".' },
    { prompt: 'You will improve your English fluency rapidly if you', target: 'practice speaking daily', wrong: ['will practice speaking daily', 'practiced speaking daily', 'are practice speaking daily'], context: '.', note: 'Present simple in if-clause: "practice speaking daily".' },
    { prompt: 'If the temperature drops below zero degrees Celsius, water', target: 'freezes', wrong: ['will freeze', 'froze', 'is freezing'], context: 'into solid ice.', note: 'Zero conditional: "freezes".' },
    { prompt: 'If they offer her the international research scholarship, she', target: 'will accept', wrong: ['accepts', 'accepted', 'would accept'], context: 'it immediately.', note: 'First conditional: "will accept".' },
    { prompt: 'If you eat a balanced nutritious diet, you', target: 'feel', wrong: ['will feel', 'felt', 'are feel'], context: 'more energetic throughout the day.', note: 'Zero conditional general habit: "feel".' },
    { prompt: 'The flight will be canceled if the dense fog', target: "doesn't clear", wrong: ["won't clear", "didn't clear", "not clears"], context: 'before midnight.', note: 'Present simple in if-clause: "doesn\'t clear".' },
    { prompt: 'If we book our airline tickets early, we', target: 'will save', wrong: ['save', 'saved', 'would save'], context: 'a significant amount of money on airfare.', note: 'First conditional: "will save".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Zero & First Conditionals');
}

// 5. So / Neither do I Pool
function generateSoNeitherQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '"I study English grammar for an hour every morning." — "', target: 'So do I', wrong: ['So am I', 'So study I', 'Neither do I'], context: '," replied Lucas.', note: 'Agreeing with positive Present Simple verb "study" uses "So do I".' },
    { prompt: '"I didn\'t watch the football match last night." — "', target: 'Neither did I', wrong: ['So did I', 'Neither didn\'t I', 'So didn\'t I'], context: '; I was busy writing my essay."', note: 'Agreeing with negative Past Simple "didn\'t" uses "Neither did I".' },
    { prompt: '"She is very excited about the upcoming study abroad trip." — "', target: 'So am I', wrong: ['So do I', 'So is I', 'Neither am I'], context: '; I can\'t wait to visit Rome."', note: 'Agreeing with positive "is" for first person takes "So am I".' },
    { prompt: '"Lucas cannot attend the morning laboratory seminar." — "', target: 'Neither can Oliver', wrong: ['So can Oliver', 'Neither cannot Oliver', 'Neither does Oliver'], context: '; he has a doctor\'s appointment."', note: 'Agreeing with negative modal "cannot" uses "Neither can [Subject]".' },
    { prompt: '"We have visited the national science museum three times." — "', target: 'So have we', wrong: ['So do we', 'So are we', 'Neither have we'], context: '; the exhibits are fascinating."', note: 'Agreeing with positive Present Perfect "have visited" takes "So have we".' },
    { prompt: '"I don\'t like drinking overly sweet carbonated sodas." — "', target: 'Neither do I', wrong: ['So do I', 'Neither don\'t I', 'So don\'t I'], context: '; I prefer sparkling mineral water."', note: 'Agreeing with negative "don\'t like" takes "Neither do I".' },
    { prompt: '"I was completely exhausted after the five-mile marathon run." — "', target: 'So was I', wrong: ['So did I', 'So were I', 'Neither was I'], context: '; I went straight to sleep."', note: 'Agreeing with positive past "was" takes "So was I".' },
    { prompt: '"They aren\'t ready to submit their term paper today." — "', target: 'Neither are we', wrong: ['So are we', 'Neither aren\'t we', 'So aren\'t we'], context: '; we need one more day to review."', note: 'Agreeing with negative "aren\'t" takes "Neither are we".' },
    { prompt: '"I will support the new environmental campus initiative." — "', target: 'So will I', wrong: ['So do I', 'So shall I', 'Neither will I'], context: '; it is a fantastic proposal."', note: 'Agreeing with positive future "will" takes "So will I".' },
    { prompt: '"She doesn\'t speak fluent Italian." — "', target: 'Neither does her brother', wrong: ['So does her brother', 'Neither doesn\'t her brother', 'Neither is her brother'], context: '; they only know a few basic phrases."', note: 'Agreeing with negative "doesn\'t" takes "Neither does [Subject]".' },
    { prompt: '"I love reading historical non-fiction novels." — "', target: 'So do I', wrong: ['So am I', 'So love I', 'Neither do I'], context: '; they provide great insights into the past."', note: 'Positive Present Simple agreement: "So do I".' },
    { prompt: '"I haven\'t seen the new documentary on climate change." — "', target: 'Neither have I', wrong: ['So have I', 'Neither haven\'t I', 'So haven\'t I'], context: '; let\'s watch it together tonight."', note: 'Negative perfect agreement: "Neither have I".' },
    { prompt: '"Dr. Evans works at the regional hospital." — "', target: 'So does Dr. Martinez', wrong: ['So is Dr. Martinez', 'So works Dr. Martinez', 'Neither does Dr. Martinez'], context: '; they share the same department."', note: 'Positive singular agreement: "So does Dr. Martinez".' },
    { prompt: '"We weren\'t invited to the private faculty reception." — "', target: 'Neither were we', wrong: ['So were we', 'Neither weren\'t we', 'So weren\'t we'], context: '; it was only for department heads."', note: 'Negative past agreement: "Neither were we".' },
    { prompt: '"I can solve this calculus problem without a calculator." — "', target: 'So can I', wrong: ['So do I', 'So am I', 'Neither can I'], context: '; it only requires basic differentiation rules."', note: 'Positive modal agreement: "So can I".' },
    { prompt: '"I didn\'t understand the lecturer\'s concluding remark." — "', target: 'Neither did I', wrong: ['So did I', 'Neither didn\'t I', 'So didn\'t I'], context: '; I will ask him during office hours."', note: 'Negative past agreement: "Neither did I".' },
    { prompt: '"Sophia is an avid chess player." — "', target: 'So is Marcus', wrong: ['So does Marcus', 'So are Marcus', 'Neither is Marcus'], context: '; they play matches every Wednesday."', note: 'Positive is agreement: "So is Marcus".' },
    { prompt: '"I don\'t have enough time to finish this book today." — "', target: 'Neither do I', wrong: ['So do I', 'Neither don\'t I', 'So have I'], context: '; we can read the remaining chapters tomorrow."', note: 'Negative agreement: "Neither do I".' },
    { prompt: '"We will attend the robotics exhibition on Saturday." — "', target: 'So will our classmates', wrong: ['So do our classmates', 'So are our classmates', 'Neither will our classmates'], context: '; everyone is very enthusiastic."', note: 'Positive will agreement: "So will [Subject]".' },
    { prompt: '"I couldn\'t find a quiet seat in the library." — "', target: 'Neither could I', wrong: ['So could I', 'Neither couldn\'t I', 'So couldn\'t I'], context: '; it was completely packed with students."', note: 'Negative past modal agreement: "Neither could I".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Agreeing: So do I / Neither do I');
}

// Shared helper
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

    const rawOptions = [
      { id: 'opt_correct', text: item.target, isCorrect: true, explanation: `Correct! ${item.note}` },
      ...item.wrong.map((w, idx) => ({
        id: `opt_wrong_${idx}`,
        text: w,
        isCorrect: false,
        explanation: `Incorrect. "${w}" does not follow the connector/question structure. ${item.note}`
      }))
    ];

    const seedIndex = (star * 7 + i * 13 + mSeed * 17) % 4;
    const shuffledOptions = [...rawOptions];
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
      hint: `Hint: Focus on ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
