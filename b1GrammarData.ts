import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

// ==========================================
// LEVEL B1: CATEGORIES & TOPICS DEFINITION
// ==========================================

export type B1CategoryTab =
  | 'Tenses & Aspect'
  | 'Conditionals & Modals'
  | 'Passive & Relative Clauses'
  | 'Comparatives & Gerunds'
  | 'Connectors & Phrasal Verbs';

export const B1_CATEGORIES: B1CategoryTab[] = [
  'Tenses & Aspect',
  'Conditionals & Modals',
  'Passive & Relative Clauses',
  'Comparatives & Gerunds',
  'Connectors & Phrasal Verbs'
];

// Category 1: Tenses & Aspect
export const B1_TENSES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b1_pres_perf_vs_past_simple',
    title: 'Present Perfect vs. Past Simple',
    subtitle: 'Unfinished time & life experiences vs. finished past time milestones',
    badge: 'have done vs did',
    description: 'Master the core distinction in intermediate English: Use the Present Perfect (have/has + past participle) when the event connects to the present, occurred in an unfinished time frame, or when the exact timestamp is unspecified. Use the Past Simple when the event concluded at a specific, completed time (e.g., yesterday, in 2022, last night, two hours ago).',
    keyRule: 'Specific finished time word (yesterday, ago, in 2019) -> Past Simple. Unfinished time (this week, ever, never, recently, so far) -> Present Perfect.',
    formula: 'Present Perfect: S + have/has + V3 | Past Simple: S + V2 (-ed / irregular)',
    examples: [
      'I have visited Italy twice, but I went there most recently in the summer of 2023.',
      'Dr. Foster has published three research papers this year (this year is still ongoing).',
      'The company launched its revolutionary electric vehicle last November.',
      'Have you ever tasted authentic Japanese matcha tea?',
      'She did not attend the board meeting yesterday because her flight was delayed.'
    ]
  },
  {
    id: 'b1_for_since_already_yet',
    title: 'Present Perfect with For, Since, Already & Yet',
    subtitle: 'Tracking duration, starting points, and expectation milestones',
    badge: 'for / since / yet',
    description: 'Use "for" to measure a period of duration (for 6 years, for 20 minutes). Use "since" to pinpoint the exact moment or date the action started (since 2018, since 9:00 AM, since childhood). Use "already" in affirmative sentences to show an action happened earlier than expected, and "yet" in questions and negatives to show expectation.',
    keyRule: '"Since" + starting point (since Tuesday). "For" + duration (for 4 days). "Already" usually goes between have and V3. "Yet" goes at the end of negatives and questions.',
    formula: 'S + have/has + already + V3 | S + haven\'t/hasn\'t + V3 + yet | Have + S + V3 + yet?',
    examples: [
      'Marcus has worked at the renewable energy laboratory since October 2021.',
      'We have been friends for more than fifteen years.',
      'She has already submitted her master’s thesis to the academic committee.',
      'Have the architects finalized the blueprint for the community center yet?',
      'The research team has not received the clinical trial results yet.'
    ]
  },
  {
    id: 'b1_past_cont_vs_past_simple',
    title: 'Past Continuous vs. Past Simple (Interrupted Actions)',
    subtitle: 'Ongoing background actions interrupted by single instantaneous events',
    badge: 'was doing vs did',
    description: 'Use the Past Continuous (was/were + verb-ing) for longer background actions that were in progress in the past, and the Past Simple for shorter, sudden actions that interrupted them. Often connected with "when" (before Past Simple) and "while" or "as" (before Past Continuous).',
    keyRule: 'While / As + Past Continuous (was/were + V-ing), Past Simple (interruption). When + Past Simple, Past Continuous.',
    formula: 'While S + was/were + V-ing, S + V2 | S + was/were + V-ing when S + V2',
    examples: [
      'While the technician was calibrating the spectrometer, the power suddenly went out.',
      'The archaeologists were excavating the ancient courtyard when they discovered a gold coin.',
      'It was snowing heavily as we drove across the alpine mountain pass.',
      'Were you sleeping when I called you at midnight?',
      'She broke her wrist while she was skiing in the French Alps.'
    ]
  },
  {
    id: 'b1_used_to_would',
    title: 'Used to vs. Would for Past Habits & States',
    subtitle: 'Talking about past routines that are no longer true today',
    badge: 'used to / would',
    description: 'Use "used to + base verb" for both past habits/repeated actions AND past states/situations that are no longer true today. Use "would + base verb" ONLY for repeated past actions/habits (not for past states like live, have, be, know).',
    keyRule: '"Used to" works for both actions and states ("I used to live in Paris"). "Would" ONLY works for repeated action habits ("Every summer we would swim in the lake", NOT "I would live in Paris").',
    formula: 'Affirmative: S + used to + Verb | Negative: S + didn\'t use to + Verb | Past Habit: S + would + Verb',
    examples: [
      'My grandfather used to own a boutique bookstore in downtown Boston (state of possession).',
      'When we were teenagers, we would ride our bicycles along the river every Saturday afternoon (repeated action).',
      'Did you use to play the violin when you were in elementary school?',
      'I didn\'t use to enjoy black coffee, but now I drink two cups every morning.',
      'She used to have long curly hair before she changed her hairstyle.'
    ]
  }
];

// Category 2: Conditionals & Modals
export const B1_CONDITIONALS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b1_zero_first_conditionals',
    title: 'Zero & First Conditionals (Facts vs. Real Future)',
    subtitle: 'Universal scientific laws vs. realistic future outcomes & contingencies',
    badge: 'If + Present, will',
    description: 'Zero Conditional expresses universal truths, automatic consequences, and scientific facts (If water reaches 100°C, it boils). First Conditional expresses realistic conditions and probable future outcomes (If it rains tomorrow, we will reschedule the outdoor match).',
    keyRule: 'Zero: If + Present Simple, Present Simple. First: If + Present Simple, will + Base Verb. Never put "will" inside the if-clause.',
    formula: 'Zero: If + S + V(pres), S + V(pres) | First: If + S + V(pres), S + will + V(base)',
    examples: [
      'If you freeze purified water, it turns into solid ice (Zero Conditional).',
      'If the weather is favorable on Saturday, we will hike up Mount Washington.',
      'Unless the company secures additional venture capital, it will downsize operations.',
      'What will you do if the professor rejects your project proposal?',
      'If you don\'t water these houseplants regularly, their leaves wither and dry out.'
    ]
  },
  {
    id: 'b1_second_conditional',
    title: 'Second Conditional (Hypothetical & Unreal Present)',
    subtitle: 'Imagined situations, dream scenarios & polite advice with "If I were you"',
    badge: 'If + Past, would',
    description: 'Use the Second Conditional to talk about imaginary, hypothetical, or impossible situations in the present or future and their theoretical consequences. Standardly use "were" instead of "was" for all subjects in formal and academic English ("If I were you...").',
    keyRule: 'If + Past Simple, would + Base Verb. Expresses low probability or unreal dreams.',
    formula: 'If + S + V2 (Past / were), S + would / could + V(base)',
    examples: [
      'If I won a major research grant, I would establish an ocean conservation institute.',
      'If she lived closer to the university campus, she would walk to lectures every day.',
      'If I were you, I would consult an immigration attorney before submitting the visa dossier.',
      'What would you buy if you had an unlimited budget for interior design?',
      'We could finish the software migration much faster if our team had two more developers.'
    ]
  },
  {
    id: 'b1_modals_obligation_advice',
    title: 'Modals of Obligation, Prohibition & Advice',
    subtitle: 'Must, Have to, Should, Ought to & Mustn\'t vs. Don\'t have to',
    badge: 'must / have to / should',
    description: 'Understand the distinct nuances of obligation: "Must" (strong internal obligation / official rule), "Have to" (external requirement from laws or circumstances), "Must not / Mustn\'t" (strict prohibition / forbidden), "Don\'t have to" (lack of obligation / optional), and "Should / Ought to" (recommendation / advice).',
    keyRule: '"Mustn\'t" = 100% Forbidden (Do NOT do it!). "Don\'t have to" = Optional (You can if you want, but it\'s not required).',
    formula: 'Obligation: S + must / have to + Verb | Prohibition: S + mustn\'t + Verb | Optional: S + don\'t/doesn\'t have to + Verb',
    examples: [
      'All airline passengers must display a valid government-issued passport at the gate.',
      'You don\'t have to print the boarding pass; showing the QR code on your phone is sufficient.',
      'Visitors must not take flash photographs inside the ancient manuscript gallery.',
      'You look exhausted from overwork; you should take a couple of days off.',
      'Students have to submit their laboratory assignments before Friday at 5:00 PM.'
    ]
  },
  {
    id: 'b1_modals_possibility_permission',
    title: 'Modals of Possibility & Permission (May, Might, Could)',
    subtitle: 'Estimating probability in the present/future & making polite requests',
    badge: 'may / might / could',
    description: 'Use "may", "might", and "could" to express possibility about the present or future when you are not 100% certain (about 30% to 50% likelihood). Use "can", "could", and "may" to ask for or grant permission politely.',
    keyRule: 'Subject + may / might / could + Base Verb (No "to", No "-s"). Negative: may not / might not (Do NOT use "could not" for future uncertainty; "couldn\'t" expresses impossibility).',
    formula: 'S + may / might / could + V(base) | May / Could + S + V(base)?',
    examples: [
      'The economic forecast suggests that interest rates might decline in the third quarter.',
      'We may visit the contemporary art museum this weekend if tickets are available.',
      'Take an umbrella with you; the sky is overcast and it could rain this afternoon.',
      'May I ask a question regarding the statistical methodology of this study?',
      'They might not arrive in time for dinner due to heavy airport congestion.'
    ]
  }
];

// Category 3: Passive & Relative Clauses
export const B1_PASSIVE_RELATIVE_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b1_present_past_passive',
    title: 'Present & Past Simple Passive Voice',
    subtitle: 'Shifting grammatical focus from the agent to the action or patient',
    badge: 'is done / was done',
    description: 'Use the passive voice when the action or receiver of the action is more significant than the doer, or when the doer is unknown, obvious, or unimportant. Formed with the appropriate tense of "be" + Past Participle (V3). Introduce the doer with "by" only when relevant.',
    keyRule: 'Present Simple Passive: am/is/are + V3. Past Simple Passive: was/were + V3. Intransitive verbs (arrive, die, happen) cannot be passive.',
    formula: 'Active: S + V + O -> Passive: O + [am/is/are OR was/were] + V3 (+ by Agent)',
    examples: [
      'Millions of recyclable aluminum cans are processed by this regional plant every week.',
      'The historic suspension bridge was constructed in 1883 by a visionary civil engineer.',
      'English is spoken as an official administrative language in more than fifty sovereign nations.',
      'The laboratory samples were contaminated during transport to the regional facility.',
      'These high-end ceramic sculptures are crafted entirely by hand.'
    ]
  },
  {
    id: 'b1_defining_relative_clauses',
    title: 'Defining Relative Clauses (Who, Which, That, Where, Whose)',
    subtitle: 'Providing essential identifying information without commas',
    badge: 'who / which / that',
    description: 'Defining relative clauses give essential information that identifies exactly which person, thing, or place is being discussed. Without this clause, the sentence is incomplete or ambiguous. Never use commas with defining relative clauses. "That" can replace "who" or "which" in informal/spoken contexts.',
    keyRule: '"Who" for people, "Which" for things/animals, "That" for people/things (informal), "Where" for places, "Whose" for possession. No commas!',
    formula: 'Noun + [who / which / that / where / whose] + Clause (No commas)',
    examples: [
      'The architect who designed the municipal library won an international sustainability prize.',
      'I am searching for a digital camera that performs exceptionally well in low-light conditions.',
      'The historic village where the poet was born attracts thousands of literary tourists each year.',
      'Do you know the doctor whose medical clinic opened on Maple Street?',
      'The software application which we tested yesterday crashed during the stress benchmark.'
    ]
  },
  {
    id: 'b1_non_defining_relative_clauses',
    title: 'Non-Defining Relative Clauses (Extra Information)',
    subtitle: 'Adding supplementary descriptive details enclosed in commas',
    badge: ', which / who ,',
    description: 'Non-defining relative clauses provide extra, non-essential information about a person, place, or thing that is already specifically identified. The sentence still makes complete sense if you remove the clause. ALWAYS separate with commas. NEVER use "that" in non-defining clauses.',
    keyRule: 'Always use COMMAS around non-defining clauses. Use "who", "which", "whose", "where". NEVER use "that" in a non-defining clause.',
    formula: 'Specific Noun, [who / which / whose / where] + Clause, Main Verb...',
    examples: [
      'Professor Higgins, who has taught linguistics for thirty years, is retiring at the end of the term.',
      'The Golden Gate Bridge, which was opened in 1937, is an iconic landmark of San Francisco.',
      'Kyoto, where ancient temples stand alongside modern districts, was Japan’s former imperial capital.',
      'Her latest novel, which took four years to research and write, became an instant bestseller.',
      'Albert Einstein, whose theories revolutionized physics, was awarded the Nobel Prize in 1921.'
    ]
  }
];

// Category 4: Comparatives & Gerunds
export const B1_COMPARATIVES_GERUNDS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b1_advanced_comparatives',
    title: 'Comparative Structures (As...As, Less Than, Much/Far More)',
    subtitle: 'Equal comparisons, lesser degrees, and modifying modifiers with intensifiers',
    badge: 'as...as / far more',
    description: 'Expand your comparison repertoire beyond basic "-er / more": Use "as + adjective/adverb + as" to express equality, "not as... as" to express inferiority, "less + adjective + than" for lesser degree, and intensifiers like "much", "far", "a lot", "slightly", "a bit" before comparatives to express scale.',
    keyRule: 'Equality: as + base adj + as. Intensifiers: "much/far/a lot" + comparative (e.g., "far more expensive", "much easier"). Never say "more better".',
    formula: 'as + Adj + as | not as + Adj + as | [much / far / slightly] + Comparative + than',
    examples: [
      'Studying with active spaced repetition is far more effective than passive reading.',
      'The modern electric sedan is just as fast as the high-performance gasoline sports car.',
      'Traveling by overnight sleeper train is much less stressful than taking two connecting flights.',
      'This semester\'s organic chemistry exam was slightly more difficult than last year\'s test.',
      'Her second presentation was not as nervous as her initial pitch to the investors.'
    ]
  },
  {
    id: 'b1_gerunds_after_prepositions',
    title: 'Gerunds (-ing) after Prepositions & Phrasal Patterns',
    subtitle: 'Automatic verb transformations after in, on, at, about, for, without',
    badge: 'Preposition + V-ing',
    description: 'The golden rule of English syntax: Whenever a verb directly follows a preposition (in, on, at, for, about, without, before, after, by, instead of, keen on, good at, look forward to), the verb MUST be in the gerund (-ing) form. Notice that "to" in "look forward to" is a preposition, not an infinitive marker.',
    keyRule: 'Preposition + Verb-ing ALWAYS. Examples: "Thank you for helping", "interested in learning", "look forward to seeing".',
    formula: 'Preposition (for, about, by, in, without, to) + Verb-ing',
    examples: [
      'Dr. Vance thanked the team for organizing such a comprehensive academic symposium.',
      'She is extremely skilled at solving intricate mathematical equations under time pressure.',
      'Before submitting your research manuscript, ensure that all citations follow APA style.',
      'We are really looking forward to attending the international climate conference in Geneva.',
      'You cannot master conversational fluency without practicing spoken dialogue regularly.'
    ]
  },
  {
    id: 'b1_gerund_vs_infinitive_basics',
    title: 'Gerund vs. Infinitive Patterns (Basic Verb Lists)',
    subtitle: 'Verbs followed strictly by -ing (enjoy, avoid) vs. to-infinitive (decide, hope)',
    badge: 'doing vs to do',
    description: 'Different English main verbs govern specific non-finite verb forms: Verbs followed by Gerund (-ing): enjoy, avoid, admit, deny, consider, finish, suggest, mind, practice, spend time. Verbs followed by Infinitive (to + verb): decide, hope, promise, refuse, manage, afford, plan, agree, offer, tend.',
    keyRule: 'Enjoy / Avoid / Consider / Mind + V-ing. Decide / Hope / Promise / Manage / Afford + to + Verb.',
    formula: 'Verb + Verb-ing (Gerund) OR Verb + to + Base Verb (Infinitive)',
    examples: [
      'The software company decided to implement automated testing across all development branches.',
      'She thoroughly enjoys reading historical non-fiction during her evening commute.',
      'We cannot afford to delay the product launch any further into the fourth quarter.',
      'The suspect denied taking the classified corporate documents from the secure office.',
      'They managed to secure the research grant despite intense competition from other universities.'
    ]
  }
];

// Category 5: Connectors & Phrasal Verbs
export const B1_CONNECTORS_PHRASAL_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b1_conjunctions_contrast_cause',
    title: 'Conjunctions of Contrast, Cause & Purpose',
    subtitle: 'Although, Even though, Despite, Because, Because of, So that & In order to',
    badge: 'although / despite / because',
    description: 'Learn how to link clauses logically: "Although / Even though / Whereas" + full clause (subject + verb). "Despite / In spite of" + noun phrase / gerund (-ing). "Because" + clause vs. "Because of / Due to" + noun phrase. "So that / In order to" to express purpose.',
    keyRule: 'Although + Subject + Verb ("Although it rained..."). Despite / In spite of + Noun / V-ing ("Despite the rain..."). Never say "Despite of".',
    formula: 'Although + Clause, Main Clause | Despite + Noun/V-ing, Main Clause | S + V in order to + V(base)',
    examples: [
      'Although the weather was freezing and windy, the marathon runners maintained an impressive pace.',
      'Despite facing severe financial headwinds, the startup achieved profitability in its second year.',
      'The laboratory was closed for three days because of unexpected plumbing renovations.',
      'She studied past exam papers diligently so that she could achieve an A grade on the final test.',
      'In spite of having little prior experience, Marcus adapted quickly to his new managerial role.'
    ]
  },
  {
    id: 'b1_separable_inseparable_phrasal',
    title: 'Essential B1 Phrasal Verbs (Separable vs. Inseparable)',
    subtitle: 'Turn on/off, look up, figure out, run out of, give up, look after',
    badge: 'Phrasal Mechanics',
    description: 'Understand how particles alter verb meanings and where object pronouns fit: Separable phrasal verbs allow the direct object between verb and particle (turn the light off / turn off the light). If the object is a pronoun (it, them, him, her), it MUST go in the middle (turn it off, NOT turn off it). Inseparable phrasal verbs keep verb and preposition together (look after the children / look after them).',
    keyRule: 'Separable: "turn it on", "give it up", "figure it out" (Pronoun MUST go in the middle). Inseparable: "look after him", "run out of time".',
    formula: 'Separable: Verb + Noun + Particle OR Verb + Particle + Noun | Verb + Pronoun (it/them) + Particle',
    examples: [
      'I couldn\'t understand the technical definition, so I looked it up in an online dictionary.',
      'Please turn off the air conditioning before you leave the conference room (turn it off).',
      'The engineering team finally figured out what was causing the database bottleneck.',
      'She decided to give up sugary beverages to improve her physical health and energy levels.',
      'Our research group ran out of reagents, so we had to order fresh supplies immediately.'
    ]
  }
];

// Helper to bundle all B1 topics
export function getB1TopicsForCategory(category: B1CategoryTab): GenericGrammarTopicItem[] {
  switch (category) {
    case 'Tenses & Aspect':
      return B1_TENSES_TOPICS;
    case 'Conditionals & Modals':
      return B1_CONDITIONALS_TOPICS;
    case 'Passive & Relative Clauses':
      return B1_PASSIVE_RELATIVE_TOPICS;
    case 'Comparatives & Gerunds':
      return B1_COMPARATIVES_GERUNDS_TOPICS;
    case 'Connectors & Phrasal Verbs':
      return B1_CONNECTORS_PHRASAL_TOPICS;
    default:
      return B1_TENSES_TOPICS;
  }
}

// ==========================================
// 20-STAR QUESTIONS GENERATOR FOR LEVEL B1
// ==========================================

export function getB1StarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const pool = getB1QuestionPool(topicId);
  return createB1RotatedQuestions(pool, starNumber, mSeed, topicId);
}

interface QuestionPoolItem {
  prompt: string;
  target: string;
  wrong: string[];
  context: string;
  note: string;
}

function getB1QuestionPool(topicId: string): QuestionPoolItem[] {
  switch (topicId) {
    case 'b1_pres_perf_vs_past_simple':
      return [
        { prompt: 'Dr. Evans', target: 'has visited', wrong: ['visited', 'was visiting', 'visits'], context: 'over twenty medical research facilities so far in her career.', note: '"So far" indicates an ongoing life experience -> Present Perfect "has visited".' },
        { prompt: 'The company', target: 'launched', wrong: ['has launched', 'was launching', 'launches'], context: 'its flagship mobile device in November 2023.', note: 'Specific finished past timestamp "in November 2023" requires Past Simple "launched".' },
        { prompt: 'Have you ever', target: 'traveled', wrong: ['travel', 'did travel', 'traveling'], context: 'to a Scandinavian country during the winter season?', note: '"Have you ever" requires past participle (V3) "traveled".' },
        { prompt: 'I', target: 'lost', wrong: ['have lost', 'was losing', 'am losing'], context: 'my hotel room key yesterday afternoon while walking near the harbor.', note: '"Yesterday afternoon" is a completed past time marker -> Past Simple "lost".' },
        { prompt: 'She', target: 'has not received', wrong: ['did not receive', 'was not receiving', 'is not receiving'], context: 'the official admission confirmation letter yet.', note: '"Yet" in negative sentences triggers Present Perfect "has not received".' },
        { prompt: 'Professor Davis', target: 'taught', wrong: ['has taught', 'is teaching', 'teaches'], context: 'at Oxford University from 2010 to 2018 before moving to Harvard.', note: 'Finished past period (from 2010 to 2018) -> Past Simple "taught".' },
        { prompt: 'We', target: 'have already finalized', wrong: ['already finalized', 'did already finalize', 'are already finalizing'], context: 'the quarterly financial balance sheet.', note: '"Already" with recent completion triggers Present Perfect "have already finalized".' },
        { prompt: 'When', target: 'did they arrive', wrong: ['have they arrived', 'were they arriving', 'do they arrive'], context: 'at the international airport last night?', note: '"When" asking for a specific finished past time requires "did they arrive".' }
      ];

    case 'b1_for_since_already_yet':
      return [
        { prompt: 'Marcus has worked at the clean technology laboratory', target: 'since', wrong: ['for', 'from', 'in'], context: 'October 2021.', note: '"October 2021" is an exact starting point -> use "since".' },
        { prompt: 'The research team has gathered statistical data', target: 'for', wrong: ['since', 'during', 'from'], context: 'more than six consecutive months.', note: '"Six consecutive months" is a measured duration -> use "for".' },
        { prompt: 'Has the municipal committee approved the urban renewal project', target: 'yet', wrong: ['already', 'since', 'for'], context: '?', note: 'Questions inquiring about expected completion take "yet" at the end.' },
        { prompt: 'The courier has', target: 'already delivered', wrong: ['delivered yet', 'yet delivered', 'since delivered'], context: 'the confidential contract to the executive office.', note: 'Affirmative completion earlier than expected takes "already delivered".' },
        { prompt: 'She has lived in the historic district', target: 'since', wrong: ['for', 'by', 'during'], context: 'she was ten years old.', note: 'Clauses specifying a starting timestamp ("she was ten") take "since".' },
        { prompt: 'They haven\'t announced the tournament schedule', target: 'yet', wrong: ['already', 'since', 'for'], context: ', but we expect it tomorrow.', note: 'Negative statements with future expectation use "yet" at the end.' },
        { prompt: 'We have collaborated with this architectural studio', target: 'for', wrong: ['since', 'from', 'in'], context: 'over a decade.', note: '"Over a decade" is a duration of time -> use "for".' },
        { prompt: 'Have you', target: 'already completed', wrong: ['yet completed', 'completed yet', 'since completed'], context: 'your review of the draft proposal?', note: '"Already" placed inside the verb phrase expresses pleasant surprise or confirmation.' }
      ];

    case 'b1_past_cont_vs_past_simple':
      return [
        { prompt: 'While the lead technician', target: 'was calibrating', wrong: ['calibrated', 'is calibrating', 'has calibrated'], context: 'the optical sensor, the circuit breaker tripped.', note: '"While" introduces a background continuous action -> Past Continuous "was calibrating".' },
        { prompt: 'The students were reviewing their lecture notes when the fire alarm', target: 'rang', wrong: ['was ringing', 'has rung', 'is ringing'], context: 'loudly.', note: '"When" introduces a sudden interrupting event -> Past Simple "rang".' },
        { prompt: 'What', target: 'were you doing', wrong: ['did you do', 'have you done', 'are you doing'], context: 'when the thunderstorm knocked down the neighborhood power lines?', note: 'Asking about an ongoing activity during a past moment -> "were you doing".' },
        { prompt: 'As the archaeologists', target: 'were excavating', wrong: ['excavated', 'are excavating', 'have excavated'], context: 'the trench, they unearthed an ancient bronze vessel.', note: '"As" indicates concurrent background activity -> Past Continuous "were excavating".' },
        { prompt: 'She', target: 'was driving', wrong: ['drove', 'has driven', 'is driving'], context: 'along the coastal highway when a dense fog rolled in.', note: 'Ongoing background action before the sudden fog -> Past Continuous "was driving".' },
        { prompt: 'He slipped and broke his ankle while he', target: 'was playing', wrong: ['played', 'has played', 'is playing'], context: 'tennis yesterday.', note: '"While" governing past ongoing action requires Past Continuous "was playing".' },
        { prompt: 'The sun', target: 'was shining', wrong: ['shone', 'is shining', 'has shone'], context: 'and birds were singing as we embarked on our mountain hike.', note: 'Describing background weather/atmosphere in past storytelling -> "was shining".' },
        { prompt: 'I', target: 'noticed', wrong: ['was noticing', 'have noticed', 'am noticing'], context: 'a subtle spelling mistake while I was proofreading the manuscript.', note: '"Notice" is a momentary perception verb -> Past Simple "noticed".' }
      ];

    case 'b1_used_to_would':
      return [
        { prompt: 'My grandfather', target: 'used to own', wrong: ['would own', 'is used to own', 'used owning'], context: 'a specialty bookstore before he retired.', note: 'Past states of ownership/possession require "used to", NOT "would".' },
        { prompt: 'Every summer holiday, my cousins and I', target: 'would swim', wrong: ['used to swimming', 'were used to swim', 'would to swim'], context: 'in the alpine lake until sunset.', note: 'Repeated past action habits can naturally use "would swim".' },
        { prompt: 'Did you', target: 'use to live', wrong: ['used to live', 'use to living', 'would live'], context: 'in Chicago before moving to San Francisco?', note: 'In questions with "did", use the base form "use to live".' },
        { prompt: 'She', target: 'didn\'t use to drink', wrong: ['didn\'t used to drink', 'would not drink', 'was not used to drink'], context: 'espresso, but now she loves it.', note: 'Negative past habit with "didn\'t" requires "didn\'t use to drink".' },
        { prompt: 'There', target: 'used to be', wrong: ['would be', 'used being', 'was used to be'], context: 'a historic post office on the corner of Main Street.', note: 'Past existence states ("There used to be") cannot use "would".' },
        { prompt: 'Whenever the professor entered the hall, the students', target: 'would stand', wrong: ['used to standing', 'were standing', 'would to stand'], context: 'up respectfully.', note: 'Regular repeated past actions in narrative accounts can take "would stand".' },
        { prompt: 'He', target: 'used to have', wrong: ['would have', 'used to having', 'is used to have'], context: 'a vintage motorcycle in his garage.', note: 'Stative verb "have" (possession) takes "used to have", not "would have".' },
        { prompt: 'I', target: 'used to think', wrong: ['would think', 'used to thinking', 'was used to think'], context: 'that learning Japanese was impossible, but now I enjoy it.', note: 'Mental state verbs (think, believe) require "used to think".' }
      ];

    case 'b1_zero_first_conditionals':
      return [
        { prompt: 'If ambient temperature drops below zero degrees Celsius, water', target: 'freezes', wrong: ['will freeze', 'froze', 'is freezing'], context: 'into ice.', note: 'Zero Conditional expresses universal scientific facts -> Present Simple "freezes".' },
        { prompt: 'If the weather is favorable tomorrow morning, we', target: 'will go', wrong: ['go', 'would go', 'went'], context: 'kayaking across the bay.', note: 'First Conditional real future result -> "will go".' },
        { prompt: 'Unless the enterprise', target: 'secures', wrong: ['will secure', 'secured', 'securing'], context: 'fresh investment capital, it will have to cut expenses.', note: '"Unless" operates like "if not" and takes Present Simple "secures", never "will secure".' },
        { prompt: 'What will you do if the flight', target: 'is delayed', wrong: ['will be delayed', 'was delayed', 'would be delayed'], context: 'due to heavy thunderstorms?', note: 'If-clause in First Conditional requires Present Simple "is delayed".' },
        { prompt: 'Plants wither and die if they', target: 'do not receive', wrong: ['will not receive', 'did not receive', 'would not receive'], context: 'adequate sunlight and water.', note: 'General biological rule (Zero Conditional) -> "do not receive".' },
        { prompt: 'If you submit your application before the midnight deadline, the admissions committee', target: 'will review', wrong: ['reviews', 'reviewed', 'would review'], context: 'it promptly.', note: 'First conditional probable future outcome -> "will review".' },
        { prompt: 'If you heat copper to its melting point, it', target: 'liquefies', wrong: ['will liquefy', 'liquefied', 'is liquefying'], context: 'completely.', note: 'Scientific physical reaction (Zero Conditional) -> "liquefies".' },
        { prompt: 'As soon as the train', target: 'arrives', wrong: ['will arrive', 'arrived', 'is arriving'], context: 'at the station, we will send you a text message.', note: 'Time clause with "as soon as" takes Present Simple "arrives" for future events.' }
      ];

    case 'b1_second_conditional':
      return [
        { prompt: 'If I', target: 'won', wrong: ['win', 'would win', 'have won'], context: 'a substantial research endowment, I would construct a marine sanctuary.', note: 'Second Conditional hypothetical if-clause takes Past Simple "won".' },
        { prompt: 'If she lived closer to the research center, she', target: 'would walk', wrong: ['will walk', 'walks', 'walked'], context: 'to work instead of commuting by bus.', note: 'Second Conditional unreal present consequence -> "would walk".' },
        { prompt: 'If I', target: 'were', wrong: ['was to be', 'am', 'would be'], context: 'you, I would seek legal counsel before signing the acquisition contract.', note: 'Formal subjunctive in advice ("If I were you") uses "were".' },
        { prompt: 'What would you buy if you', target: 'had', wrong: ['have', 'would have', 'will have'], context: 'an unlimited corporate budget?', note: 'Second Conditional if-clause takes Past Simple "had".' },
        { prompt: 'We could deploy the software patch today if our server', target: 'were', wrong: ['is', 'will be', 'would be'], context: 'fully operational.', note: 'Unreal present condition -> subjunctive "were".' },
        { prompt: 'If he spoke fluent German, he', target: 'could apply', wrong: ['can apply', 'applies', 'will apply'], context: 'for the engineering fellowship in Munich.', note: 'Hypothetical modal ability -> "could apply".' },
        { prompt: 'If they', target: 'did not have to', wrong: ['don\'t have to', 'would not have to', 'won\'t have to'], context: 'work overtime tonight, they would join us for dinner.', note: 'Negative hypothetical if-clause -> "did not have to".' },
        { prompt: 'I would travel around South America for six months if I', target: 'took', wrong: ['take', 'will take', 'would take'], context: 'a sabbatical year.', note: 'Hypothetical past condition -> "took".' }
      ];

    case 'b1_modals_obligation_advice':
      return [
        { prompt: 'All airline passengers', target: 'must display', wrong: ['have to displaying', 'must to display', 'must displaying'], context: 'a valid boarding pass and passport at security.', note: 'Strong official rule / obligation takes bare modal "must display".' },
        { prompt: 'You', target: 'don\'t have to print', wrong: ['must not print', 'haven\'t to print', 'mustn\'t to print'], context: 'your ticket; displaying the digital barcode on your phone is completely fine.', note: 'Lack of obligation (optional task) -> "don\'t have to print".' },
        { prompt: 'Visitors', target: 'must not touch', wrong: ['don\'t have to touch', 'must not to touch', 'haven\'t to touch'], context: 'the ancient oil paintings inside the museum.', note: 'Strict prohibition (forbidden action) -> "must not touch".' },
        { prompt: 'You look utterly exhausted from the night shift; you', target: 'should get', wrong: ['should to get', 'must to get', 'ought get'], context: 'some restful sleep.', note: 'Friendly recommendation / advice takes "should get".' },
        { prompt: 'Employees', target: 'have to wear', wrong: ['must to wear', 'have wearing', 'has to wear'], context: 'protective safety helmets when entering the construction zone.', note: 'External safety regulation requirement -> "have to wear".' },
        { prompt: 'You', target: 'ought to review', wrong: ['ought review', 'should to review', 'must to review'], context: 'the lab safety protocol before handling hazardous reagents.', note: '"Ought" must be followed by "to + verb" -> "ought to review".' },
        { prompt: 'Tomorrow is a national holiday, so we', target: 'do not have to wake', wrong: ['must not wake', 'have not to wake', 'mustn\'t to wake'], context: 'up early.', note: 'Absence of necessity -> "do not have to wake".' },
        { prompt: 'Candidates', target: 'must arrive', wrong: ['must to arrive', 'have arrive', 'must arriving'], context: 'at the examination center at least thirty minutes prior to commencement.', note: 'Mandatory exam regulation -> "must arrive".' }
      ];

    case 'b1_modals_possibility_permission':
      return [
        { prompt: 'Take a raincoat with you; the sky is darkening and it', target: 'might rain', wrong: ['might to rain', 'can to rain', 'must to rain'], context: 'later this afternoon.', note: 'Uncertain future possibility (~40% chance) -> "might rain".' },
        { prompt: 'We', target: 'may attend', wrong: ['may to attend', 'could to attend', 'might to attend'], context: 'the international renewable energy symposium if our budget is approved.', note: 'Formal possibility in the future -> "may attend".' },
        { prompt: '', target: 'May I borrow', wrong: ['Can I to borrow', 'May I to borrow', 'Could I to borrow'], context: 'your laptop charger for an hour while mine is being repaired?', note: 'Polite formal request for permission -> "May I borrow".' },
        { prompt: 'The statistical analysis', target: 'could reveal', wrong: ['could to reveal', 'can to reveal', 'is able reveal'], context: 'unexpected correlations among the test subjects.', note: 'Theoretical possibility -> "could reveal".' },
        { prompt: 'They', target: 'might not come', wrong: ['could not come', 'might not to come', 'can not to come'], context: 'to the evening gala because of severe transit delays.', note: 'Future negative possibility/uncertainty uses "might not come".' },
        { prompt: '', target: 'Could you please explain', wrong: ['Could you please to explain', 'Can you to explain', 'May you explain'], context: 'the final paragraph of the contractual agreement?', note: 'Polite request for assistance -> "Could you please explain".' },
        { prompt: 'Dr. Santos', target: 'may be', wrong: ['may to be', 'can to be', 'might to be'], context: 'in her laboratory right now; let\'s go check Room 304.', note: 'Present possibility about a location -> "may be".' },
        { prompt: 'The delivery parcel', target: 'might arrive', wrong: ['might to arrive', 'can to arrive', 'must to arrive'], context: 'either on Thursday or Friday morning.', note: 'Estimating future likelihood -> "might arrive".' }
      ];

    case 'b1_present_past_passive':
      return [
        { prompt: 'Millions of recycled aluminum containers', target: 'are processed', wrong: ['is processed', 'are processing', 'process'], context: 'by this industrial facility every week.', note: 'Plural subject in Present Simple Passive -> "are processed".' },
        { prompt: 'The historic suspension bridge', target: 'was designed', wrong: ['is designed', 'designed', 'was designing'], context: 'in 1883 by a prominent German-American engineer.', note: 'Singular subject in completed Past Simple Passive -> "was designed".' },
        { prompt: 'English', target: 'is spoken', wrong: ['are spoken', 'speaks', 'is speaking'], context: 'as an official administrative tongue across dozens of nations.', note: 'Present general truth passive -> "is spoken".' },
        { prompt: 'The confidential financial documents', target: 'were leaked', wrong: ['was leaked', 'leaked', 'were leaking'], context: 'to the press yesterday morning.', note: 'Plural subject in Past Simple Passive -> "were leaked".' },
        { prompt: 'All high-precision surgical instruments', target: 'are sterilized', wrong: ['is sterilized', 'sterilize', 'are sterilizing'], context: 'thoroughly before each medical procedure.', note: 'Regular protocol in Present Simple Passive -> "are sterilized".' },
        { prompt: 'Penicillin', target: 'was discovered', wrong: ['discovered', 'is discovered', 'was discovering'], context: 'accidentally by Alexander Fleming in 1928.', note: 'Historical event in Past Simple Passive -> "was discovered".' },
        { prompt: 'Our solar energy system', target: 'was installed', wrong: ['installed', 'is installed', 'was installing'], context: 'last month by certified technicians.', note: 'Past completed event -> "was installed".' },
        { prompt: 'Organic avocados', target: 'are cultivated', wrong: ['is cultivated', 'cultivate', 'are cultivating'], context: 'in fertile agricultural valleys across Central America.', note: 'Present passive general fact -> "are cultivated".' }
      ];

    case 'b1_defining_relative_clauses':
      return [
        { prompt: 'The architect', target: 'who designed', wrong: ['which designed', 'whom designed', 'whose designed'], context: 'the municipal arts pavilion won an international sustainability prize.', note: 'Defining relative pronoun for a person -> "who designed".' },
        { prompt: 'I am looking for a digital SLR camera', target: 'that performs', wrong: ['who performs', 'whose performs', 'where performs'], context: 'exceptionally well under low ambient light.', note: 'Defining relative pronoun for a device/thing -> "that performs" (or which).' },
        { prompt: 'The coastal village', target: 'where the artist lived', wrong: ['which the artist lived', 'that the artist lived', 'whose the artist lived'], context: 'now hosts an annual summer painting retreat.', note: 'Relative pronoun referring to a place of action -> "where the artist lived".' },
        { prompt: 'Do you recognize the researcher', target: 'whose paper', wrong: ['who paper', 'which paper', 'whom paper'], context: 'was cited in the latest medical journal?', note: 'Possessive relative pronoun -> "whose paper".' },
        { prompt: 'The software framework', target: 'which our team selected', wrong: ['who our team selected', 'where our team selected', 'whose our team selected'], context: 'dramatically reduced server response latency.', note: 'Thing/software acting as object of relative clause -> "which our team selected".' },
        { prompt: 'Students', target: 'who register', wrong: ['which register', 'whose register', 'where register'], context: 'for the physics workshop before Friday will receive complimentary course materials.', note: 'People subject -> "who register".' },
        { prompt: 'This is the exact spot', target: 'where the historic treaty', wrong: ['which the historic treaty', 'that the historic treaty', 'whose the historic treaty'], context: 'was signed two centuries ago.', note: 'Place where an event occurred -> "where the historic treaty".' },
        { prompt: 'We need to hire an accountant', target: 'who has experience', wrong: ['which has experience', 'whose has experience', 'where has experience'], context: 'with corporate tax compliance.', note: 'Person subject -> "who has experience".' }
      ];

    case 'b1_non_defining_relative_clauses':
      return [
        { prompt: 'Professor Higgins,', target: 'who has taught linguistics for thirty years,', wrong: ['that has taught linguistics for thirty years,', 'which has taught linguistics for thirty years,', 'whom has taught linguistics for thirty years,'], context: 'is retiring at the end of the semester.', note: 'Non-defining clause for a person requires "who" (never "that") enclosed in commas.' },
        { prompt: 'The Golden Gate Bridge,', target: 'which was opened in 1937,', wrong: ['that was opened in 1937,', 'who was opened in 1937,', 'where was opened in 1937,'], context: 'attracts millions of international visitors annually.', note: 'Non-defining clause for a structure/thing requires "which", never "that".' },
        { prompt: 'Kyoto,', target: 'where ancient wooden temples stand alongside modern districts,', wrong: ['which ancient wooden temples stand,', 'that ancient wooden temples stand,', 'who ancient wooden temples stand,'], context: 'was Japan\'s imperial capital for over a millennium.', note: 'Non-defining clause referring to a location of activity uses "where".' },
        { prompt: 'Marie Curie,', target: 'whose pioneering research on radioactivity changed modern medicine,', wrong: ['who pioneering research', 'that pioneering research', 'which pioneering research'], context: 'won two Nobel Prizes.', note: 'Possessive non-defining relative clause uses "whose".' },
        { prompt: 'Her latest architectural monograph,', target: 'which took four years to complete,', wrong: ['that took four years to complete,', 'who took four years to complete,', 'where took four years to complete,'], context: 'received glowing reviews in major design journals.', note: 'Extra non-essential information about a book requires "which", not "that".' },
        { prompt: 'Mount Everest,', target: 'which rises to 8,848 meters above sea level,', wrong: ['that rises to 8,848 meters,', 'who rises to 8,848 meters,', 'whose rises to 8,848 meters,'], context: 'presents formidable challenges to mountaineers.', note: 'Non-defining clause specifying an extra geographic detail -> "which".' },
        { prompt: 'Dr. Robert Lang,', target: 'whom we met at the symposium last week,', wrong: ['which we met at the symposium,', 'that we met at the symposium,', 'where we met at the symposium,'], context: 'agreed to deliver a guest lecture.', note: 'Formal non-defining object pronoun for a person -> "whom we met".' },
        { prompt: 'The Atlantic Ocean,', target: 'which separates the Americas from Europe,', wrong: ['that separates the Americas,', 'who separates the Americas,', 'where separates the Americas,'], context: 'supports vital international shipping lanes.', note: 'Non-defining extra clause for a body of water takes "which".' }
      ];

    case 'b1_advanced_comparatives':
      return [
        { prompt: 'Practicing active recall with flashcards is', target: 'far more effective than', wrong: ['far effective than', 'more far effective than', 'far more effective as'], context: 'passively rereading a textbook chapter.', note: 'Intensified comparative with multi-syllable adjective -> "far more effective than".' },
        { prompt: 'The modern hybrid electric crossover is just', target: 'as spacious as', wrong: ['as spacious than', 'so spacious than', 'more spacious as'], context: 'the traditional full-size gasoline SUV.', note: 'Equal comparison structure -> "as spacious as".' },
        { prompt: 'Taking an express train is', target: 'much less stressful than', wrong: ['much less stressful as', 'less much stressful than', 'much lesser stressful than'], context: 'navigating gridlocked highway traffic during rush hour.', note: 'Comparative of lesser degree with intensifier -> "much less stressful than".' },
        { prompt: 'This semester\'s multivariate calculus exam was', target: 'slightly harder than', wrong: ['slightly more hard than', 'slightly harder as', 'more slightly harder than'], context: 'the previous midterm.', note: 'Short adjective comparative with modifier -> "slightly harder than".' },
        { prompt: 'Her second keynote speech was not', target: 'as nervous as', wrong: ['as nervous than', 'so nervous than', 'more nervous as'], context: 'her inaugural address last autumn.', note: 'Negative equality comparative -> "not as nervous as".' },
        { prompt: 'Solar panel efficiency is improving', target: 'much faster than', wrong: ['much more fast than', 'much faster as', 'more faster than'], context: 'market analysts originally anticipated.', note: 'Adverb comparative with intensifier -> "much faster than".' },
        { prompt: 'The boutique coffee roastery is', target: 'a bit more expensive than', wrong: ['a bit expensiver than', 'more a bit expensive than', 'a bit more expensive as'], context: 'the neighborhood commercial chain.', note: 'Modifier + long adjective comparative -> "a bit more expensive than".' },
        { prompt: 'He is not nearly', target: 'as experienced as', wrong: ['as experienced than', 'more experienced as', 'so experienced than'], context: 'his senior laboratory colleagues.', note: 'Negative modifier with equal comparative -> "not nearly as experienced as".' }
      ];

    case 'b1_gerunds_after_prepositions':
      return [
        { prompt: 'Dr. Henderson thanked the department chair for', target: 'organizing', wrong: ['organize', 'to organize', 'organized'], context: 'such an insightful interdisciplinary symposium.', note: 'Preposition "for" requires the gerund (-ing) "organizing".' },
        { prompt: 'The biomedical engineer is exceptionally skilled at', target: 'analyzing', wrong: ['analyze', 'to analyze', 'analyzed'], context: 'complex genomic sequencing data.', note: 'Preposition "at" demands the gerund "analyzing".' },
        { prompt: 'Before', target: 'submitting', wrong: ['submit', 'to submit', 'submitted'], context: 'your dissertation draft, verify that all references comply with formatting guidelines.', note: 'Preposition "before" takes gerund "submitting".' },
        { prompt: 'We are sincerely looking forward to', target: 'collaborating', wrong: ['collaborate', 'to collaborate', 'collaborated'], context: 'with your aerospace engineering division.', note: '"To" in "look forward to" is a preposition -> requires gerund "collaborating".' },
        { prompt: 'You cannot achieve high conversational fluency without', target: 'practicing', wrong: ['practice', 'to practice', 'practiced'], context: 'spoken English with native and fluent speakers.', note: 'Preposition "without" takes gerund "practicing".' },
        { prompt: 'She apologized for', target: 'arriving', wrong: ['arrive', 'to arrive', 'arrived'], context: 'fifteen minutes late to the project review meeting.', note: 'Preposition "for" takes gerund "arriving".' },
        { prompt: 'Instead of', target: 'taking', wrong: ['take', 'to take', 'taken'], context: 'the subway, we decided to walk across the scenic river bridge.', note: 'Prepositional phrase "instead of" takes gerund "taking".' },
        { prompt: 'He succeeded in', target: 'securing', wrong: ['secure', 'to secure', 'secured'], context: 'a prestigious postdoctoral fellowship in quantum physics.', note: 'Preposition "in" requires gerund "securing".' }
      ];

    case 'b1_gerund_vs_infinitive_basics':
      return [
        { prompt: 'The board of directors decided', target: 'to implement', wrong: ['implementing', 'implement', 'implemented'], context: 'new environmental sustainability benchmarks.', note: '"Decide" is strictly followed by to-infinitive -> "to implement".' },
        { prompt: 'She thoroughly enjoys', target: 'reading', wrong: ['to read', 'read', 'having read'], context: 'historical non-fiction during her evening train commute.', note: '"Enjoy" takes the gerund (-ing) -> "reading".' },
        { prompt: 'Our department cannot afford', target: 'to delay', wrong: ['delaying', 'delay', 'delayed'], context: 'the clinical trial phase any further.', note: '"Afford" is followed by to-infinitive -> "to delay".' },
        { prompt: 'The laboratory director avoided', target: 'making', wrong: ['to make', 'make', 'made'], context: 'premature claims before the data underwent rigorous peer review.', note: '"Avoid" is strictly followed by gerund (-ing) -> "making".' },
        { prompt: 'The engineering team managed', target: 'to resolve', wrong: ['resolving', 'resolve', 'resolved'], context: 'the critical memory leak before the product release.', note: '"Manage" takes to-infinitive -> "to resolve".' },
        { prompt: 'Would you mind', target: 'opening', wrong: ['to open', 'open', 'opened'], context: 'the laboratory window to improve room ventilation?', note: '"Mind" is followed by gerund (-ing) -> "opening".' },
        { prompt: 'He promised', target: 'to submit', wrong: ['submitting', 'submit', 'submitted'], context: 'the revised financial audit by Friday afternoon.', note: '"Promise" takes to-infinitive -> "to submit".' },
        { prompt: 'The senior advisor suggested', target: 'conducting', wrong: ['to conduct', 'conduct', 'conducted'], context: 'a preliminary pilot survey before launching the full study.', note: '"Suggest" is followed by gerund (-ing) -> "conducting".' }
      ];

    case 'b1_conjunctions_contrast_cause':
      return [
        { prompt: '', target: 'Although', wrong: ['Despite', 'In spite of', 'Because of'], context: 'the wind was fierce and freezing, the endurance athletes maintained a steady pace.', note: 'Connecting a full clause (subject + verb) of contrast requires "Although".' },
        { prompt: '', target: 'Despite', wrong: ['Although', 'Even though', 'Whereas'], context: 'facing severe macroeconomic obstacles, the startup reached profitability ahead of schedule.', note: 'Connecting a noun / gerund phrase of contrast requires "Despite" (never with "of").' },
        { prompt: 'The university library was temporarily closed', target: 'because of', wrong: ['because', 'although', 'in order to'], context: 'unexpected electrical maintenance work.', note: 'Cause connected to a noun phrase requires "because of".' },
        { prompt: 'She studied previous certification exam questions diligently', target: 'so that', wrong: ['in order', 'because of', 'despite'], context: 'she could pass the rigorous technical assessment on her first attempt.', note: 'Clause expressing purpose with subject and modal -> "so that".' },
        { prompt: '', target: 'In spite of', wrong: ['Despite of', 'Although', 'Even though'], context: 'having little prior background in machine learning, Marcus mastered the algorithms rapidly.', note: '"In spite of" followed by gerund phrase expresses contrast.' },
        { prompt: 'The flight was redirected to an alternate runway', target: 'due to', wrong: ['because', 'although', 'in order to'], context: 'a severe thunderstorm cell directly over the airfield.', note: 'Prepositional cause linked to a noun phrase -> "due to".' },
        { prompt: 'He set three alarms on his smartphone', target: 'in order to avoid', wrong: ['in order avoid', 'so that avoid', 'because of avoid'], context: 'missing the early morning international departure.', note: 'Expressing purpose with to-infinitive -> "in order to avoid".' },
        { prompt: '', target: 'Even though', wrong: ['Despite', 'In spite of', 'Because of'], context: 'the statistical sample size was relatively modest, the findings were statistically significant.', note: 'Clause of concession with subject + verb -> "Even though".' }
      ];

    case 'b1_separable_inseparable_phrasal':
      return [
        { prompt: 'I didn\'t understand the technical term, so I looked', target: 'it up', wrong: ['up it', 'it down', 'down it'], context: 'in an authoritative engineering handbook.', note: 'Separable phrasal verb with pronoun object: pronoun MUST go in the middle -> "looked it up".' },
        { prompt: 'Please remember to turn the conference room projector', target: 'off', wrong: ['down to', 'out of', 'up in'], context: 'before leaving the auditorium.', note: 'Separable phrasal verb "turn [object] off".' },
        { prompt: 'The software developers finally figured', target: 'out', wrong: ['up', 'in', 'on'], context: 'what was causing the microservice latency anomaly.', note: 'Phrasal verb meaning discover / solve -> "figured out".' },
        { prompt: 'She decided to give', target: 'up', wrong: ['out', 'in', 'down'], context: 'consuming refined sugar to boost her cardiovascular fitness.', note: 'Phrasal verb meaning quit a habit -> "give up".' },
        { prompt: 'Our laboratory ran', target: 'out of', wrong: ['off with', 'down from', 'up into'], context: 'chemical reagents, so we ordered emergency replacements immediately.', note: 'Inseparable 3-part phrasal verb meaning exhaust supply -> "ran out of".' },
        { prompt: 'Could you please look', target: 'after', wrong: ['over to', 'up for', 'around at'], context: 'my research notes while I step out for lunch?', note: 'Inseparable phrasal verb meaning take care of / watch -> "look after".' },
        { prompt: 'The team decided to put', target: 'off', wrong: ['out', 'away', 'in'], context: 'the quarterly review until all regional branch audits were submitted.', note: 'Phrasal verb meaning postpone / delay -> "put off".' },
        { prompt: 'When you arrive at the clinic, please fill', target: 'out', wrong: ['up to', 'down in', 'over on'], context: 'the patient medical history questionnaire.', note: 'Phrasal verb meaning complete a form -> "fill out".' }
      ];

    default:
      return [
        { prompt: 'Dr. Evans', target: 'has visited', wrong: ['visited', 'was visiting', 'visits'], context: 'over twenty medical research facilities so far.', note: 'Present perfect with "so far".' },
        { prompt: 'The company', target: 'launched', wrong: ['has launched', 'was launching', 'launches'], context: 'its flagship mobile device in November 2023.', note: 'Past simple with finished past time.' }
      ];
  }
}

function createB1RotatedQuestions(
  pool: QuestionPoolItem[],
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
        explanation: `Incorrect. "${w}" does not fit the grammar rule. ${item.note}`
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
      question: `Question ${i + 1} of 20 (Star #${star}) • Level B1`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on the grammatical rule for this topic.`,
      ruleTip: item.note
    });
  }

  return questions;
}
