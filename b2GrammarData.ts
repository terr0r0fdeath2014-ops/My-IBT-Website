import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

// ==========================================
// LEVEL B2: CATEGORIES & TOPICS DEFINITION
// ==========================================

export type B2CategoryTab =
  | 'Advanced Tenses & Aspect'
  | 'Complex Conditionals & Regrets'
  | 'Passive, Causative & Reporting'
  | 'Gerunds & Infinitives Nuances'
  | 'Discourse Markers & Clauses';

export const B2_CATEGORIES: B2CategoryTab[] = [
  'Advanced Tenses & Aspect',
  'Complex Conditionals & Regrets',
  'Passive, Causative & Reporting',
  'Gerunds & Infinitives Nuances',
  'Discourse Markers & Clauses'
];

// Category 1: Advanced Tenses & Aspect
export const B2_TENSES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b2_past_perfect_continuous',
    title: 'Past Perfect Continuous (had been + V-ing)',
    subtitle: 'Emphasizing the duration of an ongoing action before another past event',
    badge: 'had been doing',
    description: 'Use the Past Perfect Continuous (had been + verb-ing) to emphasize the ongoing duration or continuous nature of an action that was in progress up until another specific event or time in the past. It often explains the past cause of a past physical state or tangible condition.',
    keyRule: 'Subject + had been + Verb-ing. Emphasizes ongoing duration up to a past milestone ("They had been searching for 3 hours when they found it").',
    formula: 'S + had been + V-ing | Negative: S + hadn\'t been + V-ing | Question: Had + S + been + V-ing?',
    examples: [
      'The atmospheric scientists had been monitoring the storm system for twelve hours before it made landfall.',
      'Her eyes were strained because she had been debugging algorithmic code all afternoon.',
      'The marathon runners were exhausted because they had been ascending steep inclines since daybreak.',
      'How long had the team been conducting chemical assays before discovering the anomaly?',
      'The engine suddenly overheated because it had been operating under maximum load for hours.'
    ]
  },
  {
    id: 'b2_future_perfect_simple_continuous',
    title: 'Future Perfect Simple & Continuous (will have done / been doing)',
    subtitle: 'Looking back from a future vantage point at completed or ongoing actions',
    badge: 'will have done',
    description: 'Future Perfect Simple (will have + past participle) describes an action that will be completed BEFORE a specific future deadline or milestone ("By 2030, the city will have built three new metro lines"). Future Perfect Continuous (will have been + verb-ing) highlights the duration of an ongoing action up to a future point ("By next June, I will have been studying medicine for four years").',
    keyRule: 'Time marker "by [future time]" or "by the time + Present Simple" triggers Future Perfect ("By next year, we will have graduated").',
    formula: 'Simple: S + will have + V3 | Continuous: S + will have been + V-ing | Time: By the time S + V(pres)...',
    examples: [
      'By the time the symposium convenes tomorrow, the committee will have reviewed all keynote abstracts.',
      'By December, Dr. Miller will have been leading the cancer genomics laboratory for twenty years.',
      'In five years, engineers will have completed the transcontinental high-speed rail corridor.',
      'Will you have finished compiling the financial audit before the board meeting begins?',
      'By the time we arrive at the auditorium, the opening musical performance will have already started.'
    ]
  },
  {
    id: 'b2_narrative_tenses_mastery',
    title: 'Narrative Tenses Integration & Chronology',
    subtitle: 'Past Simple, Continuous, Perfect & Perfect Continuous orchestration',
    badge: 'Narrative Flow',
    description: 'Elevate your storytelling and academic case reporting by seamlessly integrating the four past narrative tenses: Past Continuous for setting the scene and atmospheric backdrop, Past Simple for the sequential plot points, Past Perfect for prior events, and Past Perfect Continuous for continuous background causes.',
    keyRule: 'Setting the Scene: Past Continuous. Sequential Events: Past Simple. Prior Flashback: Past Perfect. Prior Ongoing Duration: Past Perfect Continuous.',
    formula: 'Background (was raining...) -> Cause (had been building...) -> Prior (had prepared...) -> Action (arrived...)',
    examples: [
      'While the snow was falling softly over the valley, the rescue team realized that the hikers had been wandering without shelter for hours.',
      'She opened the vault, retrieved the manuscript, and discovered that someone had already duplicated the first folio.',
      'The professor looked exhausted because he had been grading dissertations throughout the night.',
      'They had already calibrated the equipment when the power fluctuated unexpectedly.',
      'As the delegates were arriving, the conference organizers announced that the schedule had been revised.'
    ]
  }
];

// Category 2: Complex Conditionals & Regrets
export const B2_CONDITIONALS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b2_third_conditional',
    title: 'Third Conditional (Unreal Past & Regrets)',
    subtitle: 'Speculating about alternative past events and their hypothetical outcomes',
    badge: 'If + had done, would have done',
    description: 'Use the Third Conditional to talk about imaginary situations in the past that did not happen, and their hypothetical past consequences. Often used to express regrets, relief, or historical speculation.',
    keyRule: 'If + had + V3 (Past Perfect), would have + V3 (Modal Perfect). Never put "would have" in the if-clause.',
    formula: 'If + S + had + V3, S + [would / could / might] have + V3',
    examples: [
      'If the navigator had consulted the updated weather radar, the vessel would have avoided the cyclone.',
      'If we had submitted the grant proposal forty-eight hours earlier, we might have secured the endowment.',
      'She could have passed the board certification exam if she had completed all clinical practice modules.',
      'What would have happened if the fire containment system had failed to activate?',
      'If they hadn\'t discovered the antibiotic properties of the mold, millions more would have perished.'
    ]
  },
  {
    id: 'b2_mixed_conditionals',
    title: 'Mixed Conditionals (Past Causes & Present Realities)',
    subtitle: 'Connecting past actions to present states and permanent traits to past results',
    badge: 'Past Cause -> Present State',
    description: 'Mixed conditionals blend different timeframes: Type A (Past Unreal Cause -> Present Unreal Result): "If I had accepted that job in London last year, I would live in England today." Type B (Present/Permanent Trait -> Past Unreal Outcome): "If she were not so proficient in statistics, she would not have noticed the calculation error in yesterday\'s report."',
    keyRule: 'Type A: If + had + V3 (past cause), would + Base Verb (present result). Type B: If + were (present trait), would have + V3 (past outcome).',
    formula: 'Type A: If + had + V3, S + would + V(base) [now] | Type B: If + were + Adj, S + would have + V3 [then]',
    examples: [
      'If Marcus had invested in renewable energy stocks a decade ago, he would be financially independent today.',
      'If Sarah were not so passionate about oceanography, she would not have joined the polar expedition last month.',
      'If we had installed solar panels last summer, our electricity bills would be substantially lower this winter.',
      'If he spoke fluent Japanese, he would have translated the historical manuscript without hiring an agency.',
      'If they hadn\'t lost their passports yesterday, they would be boarding their international flight right now.'
    ]
  },
  {
    id: 'b2_wish_if_only',
    title: 'Wish & If Only (Present, Past & Annoyance)',
    subtitle: 'Expressing present regrets (Past Simple), past regrets (Past Perfect) & annoyance (would)',
    badge: 'wish / if only',
    description: 'Master the three distinct temporal uses of "wish" and "if only" (which is more emphatic): 1. Present regret/desire for change: wish + Past Simple ("I wish I had more free time"). 2. Past regret: wish + Past Perfect ("I wish I had studied harder for the exam"). 3. Annoyance / desire for someone else to change behavior: wish + would + Base Verb ("I wish you would stop interrupting").',
    keyRule: 'Present regret: wish + Past Simple / were. Past regret: wish + had + V3. Annoyance / Request: wish + would + Base Verb (never "I wish I would").',
    formula: 'Present: S + wish + S + V2/were | Past: S + wish + S + had + V3 | Annoyance: S + wish + S + would + Verb',
    examples: [
      'I wish I were more proficient in advanced linear algebra and statistical modeling.',
      'The lead architect wishes she had insisted on using recycled structural timber for the project.',
      'If only we had reserved our hotel accommodations before the international festival was announced!',
      'The professor wishes the lecture hall acoustics were better suited for large seminars.',
      'I wish the construction workers would reduce the noise level during our morning video conference.'
    ]
  },
  {
    id: 'b2_conditional_alternatives',
    title: 'Alternative Conditionals (Provided that, As long as, In case, Supposing)',
    subtitle: 'Replacing "if" with nuanced conditional and precautionary connectors',
    badge: 'provided that / in case',
    description: 'Broaden your conditional syntax with sophisticated connectors: "Provided that / Providing that / As long as" (on condition that), "In case" (as a precaution against a future possibility), "Unless" (if not), "Supposing / Imagine that" (hypothetical speculation), and "Whether or not" (alternative outcomes).',
    keyRule: '"In case" is for precaution ("Take an umbrella in case it rains" = take it before it rains). "If" is for reaction ("Take an umbrella if it rains" = wait to see if it rains).',
    formula: 'Provided that / As long as + Present, will + Verb | Main Clause + in case + Present',
    examples: [
      'The university will approve the international internship provided that you maintain a 3.8 GPA.',
      'We will back up all laboratory data onto offline encrypted drives in case the network server crashes.',
      'You can borrow my specialized surveying equipment as long as you return it by Friday afternoon.',
      'Supposing you were offered the research fellowship in Tokyo, would you accept the position?',
      'The symposium will proceed as scheduled whether or not the keynote speaker arrives on time.'
    ]
  }
];

// Category 3: Passive, Causative & Reporting
export const B2_PASSIVE_REPORTING_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b2_impersonal_passive',
    title: 'Impersonal & Distance Passives (It is said that... / He is believed to be...)',
    subtitle: 'Reporting opinions, academic consensus, and unproven claims formally',
    badge: 'It is believed that',
    description: 'Impersonal passive structures are essential for formal, journalistic, and academic writing to distance the speaker from unverified claims or to express general consensus: Structure 1: "It is + [said / believed / thought / reported / claimed] + that + clause." Structure 2: "Subject + is/are + [said / believed / thought / reported] + to + [be / have done]."',
    keyRule: 'Pattern 1: "It is believed that the treaty was signed in 1850." Pattern 2: "The treaty is believed to have been signed in 1850."',
    formula: 'It is + V3(reporting) + that-clause | S + be + V3(reporting) + to + [Verb / have + V3]',
    examples: [
      'It is widely acknowledged that climate change exacerbates extreme weather events across the globe.',
      'The ancient manuscript is believed to have been composed in the early twelfth century by monastic scribes.',
      'It was initially reported that the volcanic eruption caused minimal disruption to regional aviation.',
      'The newly discovered deep-sea coral reef is thought to support thousands of endemic marine species.',
      'Dr. Chen is said to be developing a revolutionary electrochemical battery architecture.'
    ]
  },
  {
    id: 'b2_causative_have_get',
    title: 'Causative Structures (Have & Get something done)',
    subtitle: 'Arranging for professional services or experiencing unexpected misfortunes',
    badge: 'have something done',
    description: 'Use the causative structure (have/get + object + past participle) when you arrange for someone else (usually a professional) to do something for you, or when you experience an unfortunate event caused by outside forces ("He had his wallet stolen"). Use "get" for more informal situations or when highlighting the effort required.',
    keyRule: 'Subject + have/get + Object + Past Participle (V3). Example: "I had my car repaired" (A mechanic repaired it for me).',
    formula: 'S + [have / get] + Object + Past Participle (V3) (+ by Agent)',
    examples: [
      'The research institute had its supercomputing cluster upgraded by specialized network engineers.',
      'She needs to get her dental implants checked before traveling overseas for the semester.',
      'We had the historical oil painting professionally restored by a conservator at the metropolitan gallery.',
      'Marcus had his smartphone stolen while commuting on the crowded metropolitan subway.',
      'The university is getting the botanical greenhouse completely reglazed before winter arrives.'
    ]
  },
  {
    id: 'b2_advanced_reporting_verbs',
    title: 'Advanced Reporting Verbs & Indirect Speech',
    subtitle: 'Moving beyond "said" and "told": insist, deny, suggest, warn, advise, urge',
    badge: 'Reporting Nuances',
    description: 'Transform direct quotations into sophisticated reported statements using nuanced reporting verbs and their required syntactic patterns: 1. Verb + that-clause: insist, admit, deny, claim, explain. 2. Verb + -ing: deny, admit, recommend, suggest. 3. Verb + Object + to-infinitive: advise, warn, encourage, persuade, remind, urge.',
    keyRule: 'Warn / Remind / Advise + Person + to + Verb. Suggest / Recommend + Verb-ing OR that + Subjunctive. Deny / Admit + Verb-ing.',
    formula: 'S + [warned / urged] + Person + to + Verb | S + [suggested / recommended] + V-ing | S + denied + V-ing',
    examples: [
      'The chief financial officer insisted that all regional expenditures comply with new regulatory standards.',
      'The lead investigator denied leaking any preliminary findings to the news media.',
      'Dr. Foster suggested conducting an additional control trial before finalizing the manuscript.',
      'The safety coordinator warned the technicians not to handle the volatile reagent without protective gear.',
      'The academic advisor urged her students to apply for summer international research fellowships.'
    ]
  }
];

// Category 4: Gerunds & Infinitives Nuances
export const B2_GERUNDS_INFINITIVES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b2_verb_meaning_shifts',
    title: 'Verb Meaning Shifts (Stop, Remember, Forget, Regret, Try)',
    subtitle: 'Dramatic syntactic semantic contrasts between -ing and to-infinitive',
    badge: 'Meaning Shift',
    description: 'Certain key verbs completely alter their meaning depending on whether they take a gerund (-ing) or an infinitive (to + verb): STOP doing (quit permanently) vs. STOP to do (pause an action in order to do something else). REMEMBER doing (past memory) vs. REMEMBER to do (duty/task). REGRET doing (past sorrow) vs. REGRET to inform (polite bad news). TRY doing (experiment) vs. TRY to do (effort/struggle).',
    keyRule: 'Remember/Forget/Regret + -ing = Looking BACK at a past memory. Remember/Forget/Regret + to-infinitive = Looking FORWARD to a duty/task.',
    formula: 'Verb + V-ing (Past memory/Experiment/Termination) vs. Verb + to + V (Duty/Effort/Pause)',
    examples: [
      'While driving through the mountain village, we stopped to photograph the spectacular glacial valley.',
      'He stopped smoking cigarettes five years ago to improve his cardiovascular stamina.',
      'I clearly remember locking the laboratory door, yet someone managed to enter during the night.',
      'Please remember to submit your ethics clearance documentation before initiating clinical interviews.',
      'We regret to inform you that your application for the postgraduate scholarship was unsuccessful.'
    ]
  },
  {
    id: 'b2_verb_object_infinitive_bare',
    title: 'Verb + Object + Infinitive vs. Bare Infinitive (Make, Let, Help, Allow, Enable)',
    subtitle: 'Causative verbs, permission, facilitation & sensory verb constructions',
    badge: 'make / let / allow',
    description: 'Master which verbs require a bare infinitive (without "to") versus a full to-infinitive: BARE INFINITIVE: make + object + bare verb ("The coach made them run"), let + object + bare verb ("Let her speak"), see/hear/watch + object + bare verb (complete action). FULL TO-INFINITIVE: allow / enable / permit / force / require / encourage + object + to + verb. "Help" can take either bare or to-infinitive.',
    keyRule: 'Make / Let + Object + Bare Verb (No "to"). Allow / Enable / Permit / Force / Require + Object + to + Verb.',
    formula: 'S + [make / let] + Object + V(bare) | S + [allow / enable / require] + Object + to + V',
    examples: [
      'The breakthrough in semiconductor manufacturing enabled the engineers to double processing speeds.',
      'The strict safety supervisor made all laboratory assistants wear protective nitrile gloves at all times.',
      'The open-source license allows developers to modify and redistribute the source code freely.',
      'Her comprehensive mentorship helped him (to) prepare a compelling doctoral dissertation defense.',
      'The museum curator let the visiting scholar examine the ancient papyrus fragments under ultraviolet light.'
    ]
  }
];

// Category 5: Discourse Markers & Clauses
export const B2_DISCOURSE_CLAUSES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b2_discourse_contrast_consequence',
    title: 'Formal Discourse Markers of Contrast & Consequence',
    subtitle: 'Whereas, While, Nevertheless, However, Furthermore, Consequently & Thereby',
    badge: 'Discourse Cohesion',
    description: 'Achieve sophisticated academic and professional essay cohesion with advanced transitional linkers: Contrast within sentence: "whereas", "while", "on the contrary". Transition across sentences: "However,", "Nevertheless,", "Nonetheless,", "On the other hand,". Consequence & Result: "Consequently,", "Therefore,", "As a result,", "Thereby + V-ing".',
    keyRule: '"Whereas/While" join two contrasting clauses within one sentence. "Nevertheless/However" start a new sentence followed by a comma. "Thereby" takes an -ing verb.',
    formula: 'Clause A, whereas Clause B | Sentence A. Nevertheless, Sentence B | Clause, thereby + V-ing',
    examples: [
      'Urban housing costs surged by fifteen percent, whereas suburban residential prices remained stable.',
      'The clinical trial encountered several unexpected obstacles; nevertheless, the researchers persevered.',
      'The enterprise automated its supply chain logistics, thereby reducing operational overhead by twenty percent.',
      'Solar irradiance was lower than projected; consequently, overall grid energy generation fell slightly short.',
      'While the initial prototype demonstrated promising efficiency, its production cost was prohibitively high.'
    ]
  },
  {
    id: 'b2_reduced_relative_clauses',
    title: 'Reduced Relative Clauses (Participle Clauses)',
    subtitle: 'Shortening relative clauses into dynamic present and past participial phrases',
    badge: 'Reduced Participles',
    description: 'Transform full relative clauses into concise, elegant participial modifiers: Active: "The students who are taking the exam" -> "The students taking the exam". Passive: "The research papers that were published last year" -> "The research papers published last year". Stative/Locative: "The castle which stands on the cliff" -> "The castle standing on the cliff".',
    keyRule: 'Active relative clause -> Present Participle (-ing). Passive relative clause -> Past Participle (-ed/V3). Drops relative pronoun + "be".',
    formula: 'Active: Noun + [who is V-ing] -> Noun + V-ing | Passive: Noun + [which was V3] -> Noun + V3',
    examples: [
      'All delegates attending the international sustainability summit must register at the reception desk.',
      'The archaeological artifacts discovered in the desert tomb date back to the third century BCE.',
      'Any vehicle parked in the emergency hospital lane without a permit will be towed immediately.',
      'The newly developed quantum algorithm, tested across five supercomputers, demonstrated unprecedented speed.',
      'Scientists analyzing the Antarctic ice core samples identified distinct atmospheric shifts.'
    ]
  }
];

// Helper to bundle all B2 topics
export function getB2TopicsForCategory(category: B2CategoryTab): GenericGrammarTopicItem[] {
  switch (category) {
    case 'Advanced Tenses & Aspect':
      return B2_TENSES_TOPICS;
    case 'Complex Conditionals & Regrets':
      return B2_CONDITIONALS_TOPICS;
    case 'Passive, Causative & Reporting':
      return B2_PASSIVE_REPORTING_TOPICS;
    case 'Gerunds & Infinitives Nuances':
      return B2_GERUNDS_INFINITIVES_TOPICS;
    case 'Discourse Markers & Clauses':
      return B2_DISCOURSE_CLAUSES_TOPICS;
    default:
      return B2_TENSES_TOPICS;
  }
}

// ==========================================
// 20-STAR QUESTIONS GENERATOR FOR LEVEL B2
// ==========================================

export function getB2StarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const pool = getB2QuestionPool(topicId);
  return createB2RotatedQuestions(pool, starNumber, mSeed, topicId);
}

interface QuestionPoolItem {
  prompt: string;
  target: string;
  wrong: string[];
  context: string;
  note: string;
}

function getB2QuestionPool(topicId: string): QuestionPoolItem[] {
  switch (topicId) {
    case 'b2_past_perfect_continuous':
      return [
        { prompt: 'The atmospheric scientists', target: 'had been monitoring', wrong: ['had monitored', 'have been monitoring', 'were monitoring'], context: 'the storm system for twelve hours before it made landfall.', note: 'Emphasizing the duration of continuous action before a past event -> Past Perfect Continuous "had been monitoring".' },
        { prompt: 'Her eyes were burning because she', target: 'had been debugging', wrong: ['has been debugging', 'had debugged', 'was debugging'], context: 'algorithmic code continuously without taking a break.', note: 'Past physical result caused by prior ongoing activity -> "had been debugging".' },
        { prompt: 'How long', target: 'had the team been conducting', wrong: ['has the team been conducting', 'had the team conducted', 'was the team conducting'], context: 'the chemical assays before identifying the anomalous reaction?', note: 'Past question focusing on duration prior to past discovery -> "had the team been conducting".' },
        { prompt: 'The marathon athletes were completely exhausted because they', target: 'had been running', wrong: ['have been running', 'had run', 'were running'], context: 'up steep mountain trails since early morning.', note: 'Past cause of exhaustion with "since" -> "had been running".' },
        { prompt: 'The engine overheated because it', target: 'had been operating', wrong: ['has been operating', 'was operating', 'had operated'], context: 'under extreme mechanical load for six hours.', note: 'Continuous prior operation leading to breakdown -> "had been operating".' },
        { prompt: 'She', target: 'had been practicing', wrong: ['has been practicing', 'had practiced', 'was practicing'], context: 'the violin concerto for months before her orchestral debut.', note: 'Duration of preparatory habit before a past event -> "had been practicing".' },
        { prompt: 'We were soaked to the skin because it', target: 'had been pouring', wrong: ['has been pouring', 'had poured', 'was pouring'], context: 'with rain for over two hours.', note: 'Past ongoing cause of a wet state -> "had been pouring".' },
        { prompt: 'The historians', target: 'had been translating', wrong: ['have been translating', 'were translating', 'had translated'], context: 'the ancient dialect for years before publishing their findings.', note: 'Ongoing research activity prior to publication -> "had been translating".' }
      ];

    case 'b2_future_perfect_simple_continuous':
      return [
        { prompt: 'By the time the symposium convenes tomorrow, the review committee', target: 'will have evaluated', wrong: ['will evaluate', 'will be evaluating', 'evaluates'], context: 'all submitted research abstracts.', note: 'Action completed before a future deadline -> Future Perfect Simple "will have evaluated".' },
        { prompt: 'By next December, Dr. Miller', target: 'will have been leading', wrong: ['will lead', 'will have led', 'is leading'], context: 'the oncology research department for twenty consecutive years.', note: 'Duration measured up to a future milestone -> Future Perfect Continuous "will have been leading".' },
        { prompt: 'In five years, municipal civil engineers', target: 'will have completed', wrong: ['will complete', 'will be completing', 'are completing'], context: 'the transcontinental high-speed transit line.', note: 'Completion before a future timestamp -> Future Perfect "will have completed".' },
        { prompt: 'By the time we arrive at the auditorium, the opening musical performance', target: 'will have already started', wrong: ['will already start', 'already starts', 'will be starting'], context: '.', note: 'Action that will have commenced prior to arrival -> "will have already started".' },
        { prompt: 'By 8:00 PM tonight, the surgical team', target: 'will have been operating', wrong: ['will operate', 'will have operated', 'is operating'], context: 'for ten straight hours.', note: 'Future duration milestone with continuous focus -> "will have been operating".' },
        { prompt: 'Will you', target: 'have finalized', wrong: ['finalize', 'be finalizing', 'have been finalizing'], context: 'the annual balance sheet before the board convenes on Monday?', note: 'Future completion inquiry -> "have finalized".' },
        { prompt: 'By the end of this academic semester, Maria', target: 'will have authored', wrong: ['will author', 'will be authoring', 'authors'], context: 'three peer-reviewed research papers.', note: 'Completed quantity by a future point -> Future Perfect "will have authored".' },
        { prompt: 'By next summer, they', target: 'will have been living', wrong: ['will live', 'will have lived', 'are living'], context: 'in their solar-powered eco-home for a decade.', note: 'Measuring duration up to a future point -> Future Perfect Continuous "will have been living".' }
      ];

    case 'b2_narrative_tenses_mastery':
      return [
        { prompt: 'While the blizzard was raging outside, the rescue rangers realized that the hikers', target: 'had been wandering', wrong: ['have been wandering', 'were wandering', 'had wandered'], context: 'without shelter for hours.', note: 'Scene = Past Continuous; Discovery = Past Simple; Prior ongoing cause = Past Perfect Continuous.' },
        { prompt: 'She retrieved the envelope from the safe and discovered that someone', target: 'had already broken', wrong: ['already broke', 'was breaking', 'has already broken'], context: 'the wax seal.', note: 'Prior completed event before discovery -> Past Perfect "had already broken".' },
        { prompt: 'The professor looked exhausted because he', target: 'had been grading', wrong: ['was grading', 'has been grading', 'had graded'], context: 'dissertation manuscripts throughout the entire night.', note: 'Ongoing past activity explaining visible fatigue -> "had been grading".' },
        { prompt: 'They', target: 'had already calibrated', wrong: ['already calibrated', 'were calibrating', 'have calibrated'], context: 'the laser sensors when the power grid suddenly failed.', note: 'Prior completion before sudden interruption -> Past Perfect "had already calibrated".' },
        { prompt: 'As the delegates were arriving at the palace, the organizers announced that the agenda', target: 'had been modified', wrong: ['was modified', 'has been modified', 'modified'], context: '.', note: 'Passive prior modification -> Past Perfect Passive "had been modified".' },
        { prompt: 'He realized he was lost because he', target: 'had taken', wrong: ['took', 'was taking', 'has taken'], context: 'a wrong turn at the junction three miles back.', note: 'Earlier mistake causing present confusion -> Past Perfect "had taken".' },
        { prompt: 'The ground was muddy because it', target: 'had been raining', wrong: ['rained', 'has been raining', 'was raining'], context: 'heavily all afternoon before the football match kicked off.', note: 'Prior continuous weather condition -> "had been raining".' },
        { prompt: 'When we finally reached the mountain summit, the sun', target: 'had already set', wrong: ['already set', 'was already setting', 'has set'], context: 'behind the western ridges.', note: 'Action completed prior to arrival -> Past Perfect "had already set".' }
      ];

    case 'b2_third_conditional':
      return [
        { prompt: 'If the navigator had consulted the updated marine radar, the vessel', target: 'would have avoided', wrong: ['would avoid', 'will have avoided', 'avoided'], context: 'the treacherous reef.', note: 'Third conditional unreal past outcome -> "would have avoided".' },
        { prompt: 'If we had submitted the research proposal forty-eight hours earlier, we', target: 'might have secured', wrong: ['might secure', 'will secure', 'secured'], context: 'the endowment grant.', note: 'Third conditional modal past possibility -> "might have secured".' },
        { prompt: 'She', target: 'could have passed', wrong: ['could pass', 'can have passed', 'passed'], context: 'the medical board exam if she had completed all the clinical practice modules.', note: 'Third conditional past ability -> "could have passed".' },
        { prompt: 'What would have happened if the emergency containment valve', target: 'had failed', wrong: ['would fail', 'would have failed', 'failed'], context: 'to activate during the surge?', note: 'If-clause in Third Conditional requires Past Perfect "had failed".' },
        { prompt: 'If Alexander Fleming', target: 'had not noticed', wrong: ['would not notice', 'did not notice', 'has not noticed'], context: 'the mold in the petri dish, penicillin might not have been discovered.', note: 'Third conditional negative past condition -> "had not noticed".' },
        { prompt: 'They would have arrived at the auditorium in time if their vehicle', target: 'had not broken', wrong: ['didn\'t break', 'wouldn\'t break', 'hadn\'t broke'], context: 'down on the expressway.', note: 'If-clause with past unreal event -> "had not broken".' },
        { prompt: 'If you had warned me about the icy road conditions, I', target: 'would have driven', wrong: ['would drive', 'will drive', 'drove'], context: 'much more cautiously.', note: 'Third conditional past outcome -> "would have driven".' },
        { prompt: 'He would have accepted the fellowship in Zurich if his family', target: 'had agreed', wrong: ['would agree', 'agreed', 'would have agreed'], context: 'to relocate.', note: 'Third conditional if-clause -> Past Perfect "had agreed".' }
      ];

    case 'b2_mixed_conditionals':
      return [
        { prompt: 'If Marcus had invested in renewable energy assets a decade ago, he', target: 'would be', wrong: ['would have been', 'will be', 'is'], context: 'financially independent today.', note: 'Past cause (had invested) with present result (today) -> Mixed Conditional "would be".' },
        { prompt: 'If Sarah were not so proficient in statistical modeling, she', target: 'would not have noticed', wrong: ['would not notice', 'did not notice', 'will not notice'], context: 'the anomaly in yesterday\'s laboratory dataset.', note: 'Present permanent trait (were not) with past outcome (yesterday) -> "would not have noticed".' },
        { prompt: 'If we had installed high-efficiency insulation last summer, our heating bills', target: 'would be', wrong: ['would have been', 'will be', 'are'], context: 'substantially lower this winter.', note: 'Past action with current ongoing winter result -> "would be".' },
        { prompt: 'If he spoke fluent Japanese, he', target: 'would have translated', wrong: ['would translate', 'translated', 'will have translated'], context: 'the historical manuscript yesterday without external assistance.', note: 'Permanent language skill (spoke/were fluent) with past specific task -> "would have translated".' },
        { prompt: 'If they hadn\'t missed their flight connection last night, they', target: 'would be relaxing', wrong: ['would have relaxed', 'will relax', 'are relaxing'], context: 'on the tropical beach right now.', note: 'Past cause leading to current in-progress state (right now) -> "would be relaxing".' },
        { prompt: 'If she had taken the physician\'s advice, she', target: 'would not be suffering', wrong: ['would not have suffered', 'is not suffering', 'will not suffer'], context: 'from chronic fatigue today.', note: 'Past decision affecting present health state -> "would not be suffering".' },
        { prompt: 'If I were more courageous, I', target: 'would have confronted', wrong: ['would confront', 'confronted', 'will confront'], context: 'the unethical executive at the board meeting last week.', note: 'General character trait with past outcome -> "would have confronted".' },
        { prompt: 'If our department had received the grant last month, we', target: 'would be purchasing', wrong: ['would have purchased', 'purchased', 'will purchase'], context: 'new spectrometry equipment right now.', note: 'Past grant leading to present purchasing activity -> "would be purchasing".' }
      ];

    case 'b2_wish_if_only':
      return [
        { prompt: 'I wish I', target: 'were', wrong: ['am', 'would be', 'will be'], context: 'more proficient in advanced multivariate calculus and data analytics.', note: 'Present regret/wish about a current state uses subjunctive "were".' },
        { prompt: 'The lead architect wishes she', target: 'had insisted', wrong: ['insisted', 'would insist', 'has insisted'], context: 'on using recycled structural timber for the pavilion.', note: 'Past regret about a completed event requires Past Perfect "had insisted".' },
        { prompt: 'If only we', target: 'had reserved', wrong: ['reserved', 'would reserve', 'have reserved'], context: 'our hotel accommodations before the international festival was announced!', note: 'Emphatic past regret with "If only" requires Past Perfect "had reserved".' },
        { prompt: 'The professor wishes the auditorium acoustics', target: 'were', wrong: ['are', 'would be', 'have been'], context: 'better suited for large interactive lectures.', note: 'Present wish about a facility state -> "were".' },
        { prompt: 'I wish the neighbors', target: 'would stop', wrong: ['stop', 'had stopped', 'will stop'], context: 'operating loud power tools early on Sunday mornings.', note: 'Expressing annoyance / desire for someone else to change behavior -> "would stop".' },
        { prompt: 'Do you ever wish you', target: 'had chosen', wrong: ['chose', 'would choose', 'have chosen'], context: 'a career in biomedical engineering instead of finance?', note: 'Past life choice regret -> "had chosen".' },
        { prompt: 'If only I', target: 'had not forgotten', wrong: ['did not forget', 'would not forget', 'have not forgotten'], context: 'my encrypted backup drive at the laboratory yesterday!', note: 'Past regret with If only -> Past Perfect "had not forgotten".' },
        { prompt: 'She wishes her internet connection', target: 'were', wrong: ['is', 'would be', 'has been'], context: 'more reliable during transatlantic video conferences.', note: 'Present ongoing state wish -> "were".' }
      ];

    case 'b2_conditional_alternatives':
      return [
        { prompt: 'The university will approve your international research sabbatical', target: 'provided that', wrong: ['in case', 'unless that', 'as long as that'], context: 'you submit all grading rubrics before departure.', note: '"Provided that" expresses a binding prerequisite condition.' },
        { prompt: 'We will store encrypted backups on offline servers', target: 'in case', wrong: ['if only', 'provided that', 'unless'], context: 'the primary cloud repository suffers an outage.', note: '"In case" expresses a precautionary measure taken before a possible event.' },
        { prompt: 'You can access the high-performance computing cluster', target: 'as long as', wrong: ['in case', 'unless', 'supposing that not'], context: 'you do not run unauthorized automated scripts.', note: '"As long as" sets an ongoing operating condition.' },
        { prompt: '', target: 'Supposing', wrong: ['Provided', 'In case', 'Unless'], context: 'you were offered the directorship of the European research lab, would you accept it?', note: '"Supposing" introduces a hypothetical speculative scenario.' },
        { prompt: 'The outdoor commencement ceremony will take place', target: 'whether or not', wrong: ['provided that', 'in case of', 'as long as'], context: 'it drizzles lightly.', note: '"Whether or not" indicates that the outcome is unaffected by the condition.' },
        { prompt: 'Take an extra set of dry clothes with you', target: 'in case', wrong: ['provided that', 'as long as', 'unless'], context: 'the kayak capsizes in the rapids.', note: 'Precautionary preparation -> "in case".' },
        { prompt: 'The expedition will proceed next Monday', target: 'providing that', wrong: ['in case', 'unless that', 'whether that'], context: 'mountain weather clearances are officially granted.', note: 'Formal conditional requirement -> "providing that".' },
        { prompt: 'You will fail the laboratory safety compliance audit', target: 'unless', wrong: ['provided that', 'in case', 'as long as'], context: 'you replace all expired chemical storage containers.', note: '"Unless" operates as "if not" -> "unless you replace".' }
      ];

    case 'b2_impersonal_passive':
      return [
        { prompt: 'It is widely', target: 'acknowledged that', wrong: ['acknowledging that', 'acknowledge that', 'acknowledged to'], context: 'renewable microgrids enhance energy resilience in rural communities.', note: 'Impersonal passive introductory construction: "It is widely acknowledged that...".' },
        { prompt: 'The medieval parchment is believed', target: 'to have been composed', wrong: ['to be composed', 'that was composed', 'having been composed'], context: 'in the early twelfth century by Cistercian monks.', note: 'Personal subject with perfect passive infinitive: "believed to have been composed".' },
        { prompt: 'It was initially', target: 'reported that', wrong: ['reporting that', 'reported to', 'report that'], context: 'the volcanic eruption caused minimal disruption to regional flights.', note: 'Past impersonal passive reporting: "It was initially reported that".' },
        { prompt: 'The newly discovered marine sanctuary is thought', target: 'to support', wrong: ['that supports', 'supporting', 'to have support'], context: 'thousands of rare endemic species.', note: 'Subject + is thought + to-infinitive -> "thought to support".' },
        { prompt: 'Dr. Chen is said', target: 'to be developing', wrong: ['that develops', 'to develop been', 'developing'], context: 'a groundbreaking electrochemical energy storage cell.', note: 'Continuous reporting infinitive -> "said to be developing".' },
        { prompt: 'It has been', target: 'suggested that', wrong: ['suggesting that', 'suggested to', 'suggest that'], context: 'intermittent fasting may optimize metabolic biomarkers.', note: 'Present perfect impersonal passive -> "has been suggested that".' },
        { prompt: 'The missing Renaissance portrait is rumoured', target: 'to have been sold', wrong: ['that was sold', 'to be sold', 'having sold'], context: 'to a private collector in Geneva.', note: 'Past action reported in the present -> "rumoured to have been sold".' },
        { prompt: 'It is generally', target: 'assumed that', wrong: ['assuming that', 'assumed to', 'assume that'], context: 'interest rates will stabilize over the forthcoming fiscal quarter.', note: 'General consensus impersonal passive -> "is generally assumed that".' }
      ];

    case 'b2_causative_have_get':
      return [
        { prompt: 'The research laboratory had its quantum computing processor', target: 'upgraded', wrong: ['upgrade', 'upgrading', 'to upgrade'], context: 'by certified hardware engineers.', note: 'Causative structure: had + object + past participle "upgraded".' },
        { prompt: 'She needs to get her clinical documentation', target: 'verified', wrong: ['verify', 'verifying', 'to verify'], context: 'before applying for her medical license.', note: 'Get + object + past participle -> "verified".' },
        { prompt: 'We had the historical oil painting professionally', target: 'restored', wrong: ['restore', 'restoring', 'to restore'], context: 'by an art conservator at the metropolitan gallery.', note: 'Have + object + adverb + past participle -> "restored".' },
        { prompt: 'Marcus had his smartphone', target: 'stolen', wrong: ['steal', 'stealing', 'stole'], context: 'while navigating the crowded subway terminal.', note: 'Experiencing an unfortunate event (causative of misfortune) -> "had his smartphone stolen".' },
        { prompt: 'The university is getting the botanical greenhouse', target: 'reglazed', wrong: ['reglaze', 'reglazing', 'to reglaze'], context: 'before the first winter frost arrives.', note: 'Get + object + past participle -> "reglazed".' },
        { prompt: 'You should have your vehicle\'s brake pads', target: 'inspected', wrong: ['inspect', 'inspecting', 'to inspect'], context: 'before embarking on the cross-country road trip.', note: 'Have + object + V3 -> "inspected".' },
        { prompt: 'The author got her manuscript', target: 'formatted', wrong: ['format', 'formatting', 'to format'], context: 'by an experienced academic typesetter.', note: 'Got + object + V3 -> "formatted".' },
        { prompt: 'We are going to have our solar panels', target: 'cleaned', wrong: ['clean', 'cleaning', 'to clean'], context: 'this Saturday to maximize photovoltaic efficiency.', note: 'Have + object + V3 -> "cleaned".' }
      ];

    case 'b2_advanced_reporting_verbs':
      return [
        { prompt: 'The chief financial officer insisted', target: 'that all expenditures comply', wrong: ['to comply all expenditures', 'on all expenditures comply', 'all expenditures to comply'], context: 'with strict federal auditing guidelines.', note: '"Insist that + clause" (often with mandative subjunctive) -> "insisted that all expenditures comply".' },
        { prompt: 'The lead researcher denied', target: 'leaking', wrong: ['to leak', 'leak', 'having to leak'], context: 'the preliminary trial data to financial journalists.', note: '"Deny" is strictly followed by a gerund -> "denied leaking".' },
        { prompt: 'Dr. Foster suggested', target: 'conducting', wrong: ['to conduct', 'conduct', 'conducted'], context: 'a secondary control assay before publishing the findings.', note: '"Suggest" is followed by a gerund -> "suggested conducting".' },
        { prompt: 'The safety inspector warned the chemical technicians', target: 'not to handle', wrong: ['to not handle', 'don\'t handle', 'not handling'], context: 'the pressurized cylinders without face shields.', note: '"Warn someone not to do something" -> "warned the technicians not to handle".' },
        { prompt: 'The academic advisor urged her graduate students', target: 'to apply', wrong: ['applying', 'apply', 'to applying'], context: 'for international doctoral research fellowships.', note: '"Urge someone to do something" -> "urged her graduate students to apply".' },
        { prompt: 'The suspect finally admitted', target: 'forging', wrong: ['to forge', 'forge', 'forged'], context: 'the signatures on the corporate loan documents.', note: '"Admit" is followed by a gerund -> "admitted forging".' },
        { prompt: 'The flight attendant reminded the passengers', target: 'to fasten', wrong: ['fastening', 'fasten', 'to fastening'], context: 'their seatbelts during turbulence.', note: '"Remind someone to do something" -> "reminded the passengers to fasten".' },
        { prompt: 'The environmental committee recommended', target: 'reducing', wrong: ['to reduce', 'reduce', 'reduced'], context: 'single-use plastics across municipal cafeterias.', note: '"Recommend" followed directly by a verb takes the gerund -> "recommended reducing".' }
      ];

    case 'b2_verb_meaning_shifts':
      return [
        { prompt: 'While driving across the alpine pass, we stopped', target: 'to photograph', wrong: ['photographing', 'photograph', 'for photograph'], context: 'the majestic glacier below.', note: '"Stop to do" means pause one action in order to perform another -> "stopped to photograph".' },
        { prompt: 'He stopped', target: 'smoking', wrong: ['to smoke', 'smoke', 'having smoked'], context: 'cigarettes several years ago to protect his respiratory health.', note: '"Stop doing" means terminate a habit permanently -> "stopped smoking".' },
        { prompt: 'I clearly remember', target: 'locking', wrong: ['to lock', 'lock', 'locked'], context: 'the archive vault door, yet the alarm was triggered at midnight.', note: '"Remember doing" refers to recalling a past memory -> "remember locking".' },
        { prompt: 'Please remember', target: 'to submit', wrong: ['submitting', 'submit', 'submitted'], context: 'your clinical ethics approval form before Friday at noon.', note: '"Remember to do" refers to fulfilling an upcoming task -> "remember to submit".' },
        { prompt: 'We regret', target: 'to inform', wrong: ['informing', 'inform', 'informed'], context: 'you that your application for the research endowment was unsuccessful.', note: '"Regret to inform/say" is the polite formal idiom for delivering difficult news.' },
        { prompt: 'She now regrets', target: 'declining', wrong: ['to decline', 'decline', 'declined'], context: 'the postdoctoral fellowship offer in Zurich.', note: '"Regret doing" expresses sorrow regarding a past decision -> "regrets declining".' },
        { prompt: 'If the printer is not responding, try', target: 'restarting', wrong: ['to restart', 'restart', 'restarted'], context: 'the internal wireless print spooler.', note: '"Try doing" means experiment with a method to see if it resolves a problem -> "try restarting".' },
        { prompt: 'The marathon runner tried', target: 'to finish', wrong: ['finishing', 'finish', 'finished'], context: 'the race despite suffering severe muscular cramps.', note: '"Try to do" means make a determined physical effort -> "tried to finish".' }
      ];

    case 'b2_verb_object_infinitive_bare':
      return [
        { prompt: 'The breakthrough in quantum algorithms enabled the researchers', target: 'to process', wrong: ['process', 'processing', 'processed'], context: 'astronomical datasets in seconds.', note: '"Enable + object" requires a full to-infinitive -> "enabled the researchers to process".' },
        { prompt: 'The strict laboratory supervisor made all interns', target: 'wear', wrong: ['to wear', 'wearing', 'wore'], context: 'protective safety goggles inside the reagent storage room.', note: '"Make + object" requires a bare infinitive (no "to") -> "made all interns wear".' },
        { prompt: 'The open-source licensing agreement allows developers', target: 'to modify', wrong: ['modify', 'modifying', 'modified'], context: 'and distribute the codebase freely.', note: '"Allow + object" requires to-infinitive -> "allows developers to modify".' },
        { prompt: 'The museum curator let the visiting scholar', target: 'examine', wrong: ['to examine', 'examining', 'examined'], context: 'the ancient illuminated manuscript under infrared light.', note: '"Let + object" takes a bare infinitive -> "let the visiting scholar examine".' },
        { prompt: 'The municipal transit authority requires all operators', target: 'to undergo', wrong: ['undergo', 'undergoing', 'underwent'], context: 'rigorous safety recertification annually.', note: '"Require + object" takes to-infinitive -> "requires all operators to undergo".' },
        { prompt: 'Her comprehensive feedback helped him', target: 'refine', wrong: ['refining', 'refined', 'to refining'], context: 'his theoretical argument before the dissertation committee.', note: '"Help + object" can take bare infinitive -> "helped him refine".' },
        { prompt: 'The unexpected turbulence caused the pilot', target: 'to request', wrong: ['request', 'requesting', 'requested'], context: 'an immediate altitude adjustment.', note: '"Cause + object" requires to-infinitive -> "caused the pilot to request".' },
        { prompt: 'Did you see the meteor', target: 'streak', wrong: ['to streak', 'streaked', 'to streaking'], context: 'across the northern sky last night?', note: 'Sensory verb "see + object" takes bare infinitive for a completed event -> "streak".' }
      ];

    case 'b2_discourse_contrast_consequence':
      return [
        { prompt: 'Urban residential property values surged by twelve percent,', target: 'whereas', wrong: ['nevertheless', 'however', 'consequently'], context: 'rural housing prices remained essentially unchanged.', note: '"Whereas" links two contrasting clauses within a single sentence.' },
        { prompt: 'The research team faced numerous technical obstacles;', target: 'nevertheless,', wrong: ['whereas,', 'despite,', 'although,'], context: 'they successfully completed the quantum prototype ahead of deadline.', note: '"Nevertheless," introduces a contrasting sentence followed by a comma.' },
        { prompt: 'The enterprise streamlined its distribution channels,', target: 'thereby reducing', wrong: ['thereby reduce', 'thereby to reduce', 'thereby reduced'], context: 'freight overhead by twenty-five percent.', note: '"Thereby" is followed by a present participle (-ing) -> "thereby reducing".' },
        { prompt: 'Solar irradiance fell significantly below forecast levels;', target: 'consequently,', wrong: ['whereas,', 'nevertheless,', 'in spite of,'], context: 'overall electrical grid output was constrained.', note: '"Consequently," introduces a logical result across clauses.' },
        { prompt: '', target: 'While', wrong: ['Nevertheless', 'However', 'Consequently'], context: 'the initial beta release demonstrated robust stability, its user interface required refinement.', note: '"While" introduces a clause of concession at the start of a sentence.' },
        { prompt: 'The clinical sample size was modest;', target: 'nonetheless,', wrong: ['whereas,', 'although,', 'because of,'], context: 'the observed statistical correlations were highly significant.', note: '"Nonetheless," marks contrast across independent clauses.' },
        { prompt: 'He failed to submit the ethics committee clearance;', target: 'therefore,', wrong: ['whereas,', 'nevertheless,', 'despite,'], context: 'his clinical trial was temporarily suspended.', note: '"Therefore," marks a formal causal consequence.' },
        { prompt: 'The company expanded into East Asian markets,', target: 'thereby increasing', wrong: ['thereby increase', 'thereby to increase', 'thereby increased'], context: 'its global revenue diversification.', note: '"Thereby + verb-ing" -> "thereby increasing".' }
      ];

    case 'b2_reduced_relative_clauses':
      return [
        { prompt: 'All delegates', target: 'attending', wrong: ['who attending', 'attended', 'are attending'], context: 'the international climate summit must display official credentials at the security checkpoint.', note: 'Active reduced relative clause ("who are attending" -> "attending").' },
        { prompt: 'The archaeological relics', target: 'discovered', wrong: ['discovering', 'which discovered', 'were discovered'], context: 'in the Andean highlands date back to the pre-Inca period.', note: 'Passive reduced relative clause ("which were discovered" -> "discovered").' },
        { prompt: 'Any commercial vehicle', target: 'parked', wrong: ['parking', 'which parking', 'is parked'], context: 'in the hospital emergency bay without authorization will be towed.', note: 'Passive reduced relative clause ("that is parked" -> "parked").' },
        { prompt: 'The quantum simulation algorithm,', target: 'tested', wrong: ['testing', 'which testing', 'was tested'], context: 'across five supercomputers, demonstrated unprecedented computational fidelity.', note: 'Passive participial phrase modifying the subject -> "tested".' },
        { prompt: 'Scientists', target: 'analyzing', wrong: ['who analyzing', 'analyzed', 'are analyzing'], context: 'the Antarctic ice core specimens identified dramatic atmospheric shifts.', note: 'Active participle modifying "Scientists" -> "analyzing".' },
        { prompt: 'The historic bridge', target: 'connecting', wrong: ['connected', 'which connecting', 'is connecting'], context: 'the twin river cities was originally erected in 1892.', note: 'Active present participle describing function/state -> "connecting".' },
        { prompt: 'The confidential documents', target: 'leaked', wrong: ['leaking', 'which leaked', 'were leaked'], context: 'to investigative reporters triggered an immediate parliamentary inquiry.', note: 'Passive participle modifying "documents" -> "leaked".' },
        { prompt: 'Students', target: 'seeking', wrong: ['sought', 'who seeking', 'are seeking'], context: 'postgraduate research fellowships should consult the departmental advisor.', note: 'Active participle ("who are seeking" -> "seeking").' }
      ];

    default:
      return [
        { prompt: 'The scientists', target: 'had been monitoring', wrong: ['had monitored', 'monitored', 'were monitoring'], context: 'the storm system for hours.', note: 'Past perfect continuous.' },
        { prompt: 'By tomorrow, we', target: 'will have completed', wrong: ['will complete', 'completed', 'complete'], context: 'the project.', note: 'Future perfect simple.' }
      ];
  }
}

function createB2RotatedQuestions(
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
        explanation: `Incorrect. "${w}" violates this grammar rule. ${item.note}`
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
      question: `Question ${i + 1} of 20 (Star #${star}) • Level B2`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on the grammatical rule for this topic.`,
      ruleTip: item.note
    });
  }

  return questions;
}
