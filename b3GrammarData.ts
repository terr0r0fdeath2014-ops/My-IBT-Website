import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

// ==========================================
// LEVEL B3: CATEGORIES & TOPICS DEFINITION
// ==========================================

export type B3CategoryTab =
  | 'Advanced Aspect & Future in Past'
  | 'Hypothetical Structures & Inversion'
  | 'Modals of Deduction & Speculation'
  | 'Participle Clauses & Prepositional Relatives'
  | 'Cohesion, Transitions & Nominalization';

export const B3_CATEGORIES: B3CategoryTab[] = [
  'Advanced Aspect & Future in Past',
  'Hypothetical Structures & Inversion',
  'Modals of Deduction & Speculation',
  'Participle Clauses & Prepositional Relatives',
  'Cohesion, Transitions & Nominalization'
];

// Category 1: Advanced Aspect & Future in Past
export const B3_ASPECT_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b3_future_in_the_past',
    title: 'Future in the Past (Was/Were going to, Was/Were to, Would)',
    subtitle: 'Expressing intentions, official arrangements, and unfulfilled expectations from a past viewpoint',
    badge: 'was going to / was to',
    description: 'Use Future in the Past structures to describe events that were planned, expected, or destined to occur after a reference point in the past: 1. "Was/Were going to" (unfulfilled past intentions: "I was going to call you, but my phone battery died"). 2. "Was/Were to + base verb" (formal past arrangements, destiny or historical destiny: "He was to become the university\'s youngest chancellor"). 3. "Would" (future predictions made in the past: "She knew she would succeed").',
    keyRule: '"Was/Were going to" = unfulfilled intention. "Was/Were to + Verb" = formal arrangement / destiny. "Was/Were to have + V3" = arrangement that failed to materialize.',
    formula: 'S + was/were going to + Verb | S + was/were to + [Verb / have + V3] | S + knew/believed S + would + Verb',
    examples: [
      'We were going to conduct the field trial on Tuesday, but torrential rains flooded the agricultural site.',
      'The young physicist was to become one of the principal architects of quantum electrodynamics.',
      'The treaty was to have been signed in Geneva, but diplomatic negotiations stalled at the final hour.',
      'From an early age, she knew that she would dedicate her life to neurosurgical research.',
      'I was about to leave the laboratory when the principal investigator summoned me to her office.'
    ]
  },
  {
    id: 'b3_perfect_infinitives_gerunds',
    title: 'Perfect Infinitives (to have done) & Perfect Gerunds (having done)',
    subtitle: 'Expressing actions completed prior to the timeframe of the main governing verb',
    badge: 'to have done / having done',
    description: 'Use the Perfect Infinitive (to have + past participle) and Perfect Gerund (having + past participle) to clearly emphasize that an action occurred BEFORE the action of the main verb: Perfect Infinitive: "She claims to have discovered the anomaly first" (discovery happened prior to claiming). Perfect Gerund: "He admitted having forged the signature" (forgery happened prior to admission).',
    keyRule: 'Main Verb + to have + V3 (action happened BEFORE main verb). Preposition / Verb + having + V3 (prior event emphasized).',
    formula: 'S + Verb + to have + V3 | S + Verb/Preposition + having + V3 | Having + V3..., S + Verb...',
    examples: [
      'The archaeologist claims to have discovered an unrecorded pre-Columbian ceremonial platform.',
      'The politician apologized for having misled parliamentary committee members during the testimony.',
      'Having completed the preliminary genomic sequencing, the team submitted their manuscript for peer review.',
      'The historic fortress is believed to have withstood seven major medieval sieges.',
      'She feels proud of having earned her doctoral degree while working as a full-time clinical researcher.'
    ]
  }
];

// Category 2: Hypothetical Structures & Inversion
export const B3_HYPOTHETICAL_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b3_conditional_inversion_foundations',
    title: 'Conditional Inversion (Should you, Were we to, Had we known)',
    subtitle: 'Eliminating "if" through elegant subject-auxiliary inversion in conditional clauses',
    badge: 'Inverted Conditionals',
    description: 'In formal, academic, and business English, conditional clauses often drop "if" by inverting the auxiliary verb and subject: 1st Conditional: "If you should need" -> "Should you need any assistance...". 2nd Conditional: "If we were to accept" -> "Were we to accept the terms...". 3rd Conditional: "If we had known" -> "Had we known about the scheduling conflict...". Negative forms NEVER contract: "Had we not checked...", NOT "Hadn\'t we...".',
    keyRule: 'Should + Subject + Base Verb (Type 1). Were + Subject + to + Verb (Type 2). Had + Subject + V3 (Type 3). Never use contractions in negative inversion.',
    formula: 'Should + S + V(base) | Were + S + to + Verb | Had + S + (not) + V3',
    examples: [
      'Should you require any supplementary documentation, please contact our administrative coordinator.',
      'Were the government to reduce corporate taxation on clean technology, private investment would surge.',
      'Had the flight crew not detected the hydraulic pressure drop, a severe emergency would have ensued.',
      'Should need arise, our emergency medical response team is equipped for immediate deployment.',
      'Were it not for your generous philanthropic sponsorship, this wildlife sanctuary could not operate.'
    ]
  },
  {
    id: 'b3_unreal_past_structures',
    title: 'Unreal Past Structures (It\'s time, Would rather, Would sooner, As if)',
    subtitle: 'Expressing urgency, hypothetical preferences, and simulated pretenses',
    badge: 'It\'s time / Would rather',
    description: 'Master English structures that trigger an "unreal past" tense to describe present or future hypotheticals: 1. "It\'s high time / It\'s about time + Subject + Past Simple" (implies urgency / should have been done already: "It\'s high time we reformed the policy"). 2. "Would rather / Would sooner + Subject + Past Simple" (preference regarding someone else: "I would rather you didn\'t disclose this"). 3. "As if / As though + Past Simple/Past Perfect" (hypothetical simulation: "He talks as if he were the CEO").',
    keyRule: 'It\'s time + Subject + Past Simple ("It\'s time we left"). S1 + would rather + S2 + Past Simple ("I\'d rather you stayed"). As if + were ("acts as if he were").',
    formula: 'It\'s [high/about] time + S + V2 | S1 + would rather + S2 + V2 | S + V(pres) + as if + S + were/V2',
    examples: [
      'It is high time the international community established binding treaties on artificial intelligence safety.',
      'I would rather the committee postponed the final vote until all regional delegates have reviewed the audit.',
      'The young researcher speaks about the project as though she had directed the entire laboratory for decades.',
      'It\'s about time you updated your operating system to patch the critical security vulnerabilities.',
      'We would sooner the board allocated the surplus funding toward renewable energy infrastructure.'
    ]
  },
  {
    id: 'b3_but_for_had_it_not_been',
    title: 'But for & Had it not been for (Prepositional Conditionals)',
    subtitle: 'Attributing outcomes entirely to single preventing or enabling factors',
    badge: 'But for / Had it not been',
    description: 'Use "But for" (followed by a noun phrase) and its formal equivalents "Were it not for" (present) and "Had it not been for" (past) to state that a single factor alone prevented or caused a specific outcome ("If it weren\'t / hadn\'t been for...").',
    keyRule: '"But for + Noun" = "Had it not been for + Noun" -> followed by would have + V3. Example: "But for his timely advice, I would have made a catastrophic investment error."',
    formula: 'But for + Noun, S + would [have + V3] | Had it not been for + Noun, S + would have + V3',
    examples: [
      'But for the pilot\'s exceptional composure during the engine failure, the aircraft would have crashed.',
      'Had it not been for your comprehensive statistical guidance, our dissertation would have been rejected.',
      'Were it not for the generous endowment from the alumni association, the library could not remain open 24/7.',
      'But for the unexpected blizzard on the mountain pass, the expedition would have reached the summit.',
      'Had it not been for emergency medical intervention, the patient might not have survived the allergic reaction.'
    ]
  }
];

// Category 3: Modals of Deduction & Speculation
export const B3_MODALS_DEDUCTION_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b3_past_deductions_certainty',
    title: 'Modals of Past Deduction (Must have done, Can\'t/Couldn\'t have done)',
    subtitle: 'Reconstructing historical events and logical certainties about the past',
    badge: 'must have / can\'t have',
    description: 'Use modal perfects to make logical deductions about past events based on strong evidence: 1. "Must have + past participle" (95%+ certainty that something happened: "The ground is wet; it must have rained"). 2. "Can\'t have / Couldn\'t have + past participle" (95%+ certainty that something was impossible / did not happen: "She can\'t have stolen the file; she was in Tokyo").',
    keyRule: 'Certain something happened -> MUST have + V3. Certain something was impossible -> CAN\'T / COULDN\'T have + V3 (never "must not have" for logical deduction in British/International English).',
    formula: 'S + must have + V3 (Logical certainty) | S + [can\'t / couldn\'t] have + V3 (Logical impossibility)',
    examples: [
      'The ancient masonry shows distinct scorch marks; a catastrophic fire must have swept through the fortress.',
      'The suspect cannot have committed the robbery at midnight because airport surveillance confirms he was in Madrid.',
      'You must have misunderstood the professor\'s instructions; the assignment deadline is next Friday, not today.',
      'The expedition team couldn\'t have crossed the swollen river without utilizing specialized climbing ropes.',
      'Marcus must have worked extraordinarily hard to complete his doctoral thesis in less than three years.'
    ]
  },
  {
    id: 'b3_past_speculation_regret',
    title: 'Past Speculation & Criticism (Might/Could have done, Should have done)',
    subtitle: 'Evaluating unfulfilled possibilities, moral obligations, and past criticisms',
    badge: 'might have / should have',
    description: '1. "Might have / May have / Could have + past participle" (30-50% possibility that something happened in the past, or an unrealized opportunity: "We could have won the grant"). 2. "Should have / Ought to have + past participle" (unfulfilled duty, moral obligation, or criticism: "You should have alerted the supervisor immediately").',
    keyRule: 'Speculating on past possibility: might/may/could have + V3. Expressing criticism/unfulfilled duty: should/ought to have + V3. Negative criticism: shouldn\'t have + V3.',
    formula: 'S + [might / may / could] have + V3 | S + [should / ought to] have + V3 | S + shouldn\'t have + V3',
    examples: [
      'The aircraft could have landed safely on the auxiliary runway if visibility had not deteriorated so rapidly.',
      'You should have informed the safety coordinator as soon as you noticed the chemical canister leak.',
      'The historical documents might have been destroyed during the bombardment of the municipal archive.',
      'She shouldn\'t have shared the confidential prototype schematics before the patent was officially registered.',
      'The medical team ought to have ordered a comprehensive radiological scan before discharging the patient.'
    ]
  },
  {
    id: 'b3_neednt_have_vs_didnt_need_to',
    title: 'Needn\'t have done vs. Didn\'t need to do (Past Necessity Nuances)',
    subtitle: 'Discerning between unnecessary actions actually performed vs. unnecessary actions skipped',
    badge: 'needn\'t have vs didn\'t need',
    description: 'This is a classic high-level grammatical trap: 1. "Needn\'t have + past participle": The action was performed, but in hindsight it was completely unnecessary (wasted effort: "I needn\'t have brought my umbrella; it didn\'t rain"). 2. "Didn\'t need to + base verb": The action was not necessary, and therefore it was usually NOT performed ("I didn\'t need to buy milk because we already had two cartons").',
    keyRule: '"Needn\'t have + V3" = Did it, but it was a waste of time. "Didn\'t need to + Verb" = Was not necessary (and usually was not done).',
    formula: 'S + needn\'t have + V3 (Action done unnecessarily) vs. S + didn\'t need to + Verb (No obligation)',
    examples: [
      'We needn\'t have rushed to the departure gate; the flight was delayed by two hours anyway.',
      'She didn\'t need to take the entrance examination because her international baccalaureate scores were exceptional.',
      'You needn\'t have printed the sixty-page report; all committee members brought their tablet devices.',
      'He didn\'t need to hire an external accountant because his brother manages corporate tax compliance.',
      'I needn\'t have worried so intensely about the interview; the panel was exceptionally welcoming and collegial.'
    ]
  }
];

// Category 4: Participle Clauses & Prepositional Relatives
export const B3_PARTICIPLES_RELATIVES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b3_participle_clauses_time_cause',
    title: 'Participle Clauses for Time, Reason & Consequence',
    subtitle: 'Present, past, and perfect participial adverbial structures replacing full clauses',
    badge: 'Participle Clauses',
    description: 'Participle clauses allow writers to express time, cause, condition, and result concisely without repetitive conjunctions: 1. Time (When/While): "Walking down the corridor, I ran into Dr. Vance." 2. Reason (Because/Since): "Feeling exhausted after the symposium, she retired to her room early." 3. Prior Sequence: "Having analyzed the spectral data, the team formulated their hypothesis." 4. Passive: "Surrounded by ancient pine forests, the monastery offered absolute tranquility."',
    keyRule: 'Subject of participle clause MUST be identical to the subject of the main clause (to avoid dangling modifiers). "Having + V3" shows completion before main verb.',
    formula: '[V-ing / Having + V3 / V3] Phrase, Subject + Main Verb + Object',
    examples: [
      'Having synthesized the novel polymer in the laboratory, the chemists subjected it to thermal stress tests.',
      'Realizing that the flight was overbooked, the airline offered travel vouchers to flexible passengers.',
      'Published in 1687, Newton\'s Principia Mathematica fundamentally revolutionized humanity\'s understanding of physics.',
      'Not knowing which subway train to board, the tourist consulted the interactive transit map.',
      'Having been damaged during the storm, the solar panel array operated at reduced generating capacity.'
    ]
  },
  {
    id: 'b3_relative_clauses_prepositions',
    title: 'Formal Relative Clauses with Prepositions (In which, To whom, Of which)',
    subtitle: 'Elevating academic prose by placing prepositions before relative pronouns (Pied-Piping)',
    badge: 'Preposition + Which/Whom',
    description: 'In formal, academic, and legal English, prepositions are placed directly BEFORE the relative pronoun ("in which", "to whom", "from which", "with whose", "at which") rather than stranded at the end of the clause. Never use "that" or "who" after a preposition; use "whom" for people and "which" for things.',
    keyRule: 'Preposition + WHICH (for objects/concepts). Preposition + WHOM (for people). Examples: "the framework in which we operate", "the scholar to whom I spoke".',
    formula: 'Noun + [Preposition + which / whom / whose] + Clause',
    examples: [
      'The international conference at which the climate treaty was negotiated concluded with unanimous agreement.',
      'The senior researcher to whom the discovery was initially attributed generously credited her graduate students.',
      'We conducted a comprehensive benchmark test, the results of which were published in Nature Biotechnology.',
      'The theoretical framework upon which this economic model is built assumes rational consumer behavior.',
      'The historic archive contains thousands of parchment folios, many of which have never been transcribed.'
    ]
  }
];

// Category 5: Cohesion, Transitions & Nominalization
export const B3_COHESION_TRANSITIONS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b3_advanced_transition_signals',
    title: 'Advanced Academic Transition Signals & Cohesive Devices',
    subtitle: 'Nonetheless, Furthermore, Inadvertently, Concurrently, Inasmuch as & Albeit',
    badge: 'Academic Cohesion',
    description: 'Master sophisticated discourse connectors to construct authoritative academic prose: 1. Concession/Contrast: "Nonetheless,", "Notwithstanding the fact that", "Albeit + adjective phrase" ("a successful, albeit demanding, initiative"). 2. Addition & Reinforcement: "Furthermore,", "Moreover,", "In addition,". 3. Causality & Condition: "Inasmuch as", "Seeing that". 4. Simultaneous action: "Concurrently,", "Simultaneously,".',
    keyRule: '"Albeit" is followed by an adjective, adverb, or noun phrase (not a full independent clause). "Notwithstanding" can act as a preposition followed by a noun.',
    formula: 'Sentence A. Furthermore, Sentence B | Noun, albeit + Adj, Verb... | Notwithstanding + Noun, Clause',
    examples: [
      'The initial clinical trials showed promising efficacy; nonetheless, long-term safety studies remain imperative.',
      'The university completed the research complex on schedule, albeit slightly over the initial budgetary estimate.',
      'Notwithstanding severe atmospheric turbulence, the test pilot landed the prototype aircraft with flawless precision.',
      'Furthermore, the empirical data strongly corroborates the hypothesis proposed by the astrophysics department.',
      'The two research teams worked concurrently on different facets of the quantum encryption protocol.'
    ]
  },
  {
    id: 'b3_nominalization_formal_style',
    title: 'Nominalization & Information Density in Formal Writing',
    subtitle: 'Transforming verbs and adjectives into authoritative abstract noun phrases',
    badge: 'Nominalization',
    description: 'Nominalization is the syntactic process of turning verbs and adjectives into nouns (e.g., "The climate is warming rapidly" -> "The rapid warming of the climate"; "We analyzed the data thoroughly" -> "A thorough analysis of the data"). It creates objective, scholarly tone, packs information densely, and forms the cornerstone of academic, scientific, and executive English.',
    keyRule: 'Verb/Adj -> Abstract Noun. Reduces personal pronouns (I, we) and places the abstract phenomenon as the grammatical subject.',
    formula: 'Active Clause: [We investigated X thoroughly] -> Nominalized: [A thorough investigation of X revealed...]',
    examples: [
      'The rapid proliferation of decentralized renewable energy microgrids has accelerated grid modernization.',
      'A meticulous examination of the patient\'s historical medical records revealed an undiagnosed enzymatic deficiency.',
      'The sudden implementation of strict import tariffs caused widespread disruption across semiconductor supply chains.',
      'Accurate identification of linguistic anomalies requires extensive training in phonetic transcription.',
      'The successful eradication of the viral outbreak was attributed to prompt public health mobilization.'
    ]
  }
];

// Helper to bundle all B3 topics
export function getB3TopicsForCategory(category: B3CategoryTab): GenericGrammarTopicItem[] {
  switch (category) {
    case 'Advanced Aspect & Future in Past':
      return B3_ASPECT_TOPICS;
    case 'Hypothetical Structures & Inversion':
      return B3_HYPOTHETICAL_TOPICS;
    case 'Modals of Deduction & Speculation':
      return B3_MODALS_DEDUCTION_TOPICS;
    case 'Participle Clauses & Prepositional Relatives':
      return B3_PARTICIPLES_RELATIVES_TOPICS;
    case 'Cohesion, Transitions & Nominalization':
      return B3_COHESION_TRANSITIONS_TOPICS;
    default:
      return B3_ASPECT_TOPICS;
  }
}

// ==========================================
// 20-STAR QUESTIONS GENERATOR FOR LEVEL B3
// ==========================================

export function getB3StarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const pool = getB3QuestionPool(topicId);
  return createB3RotatedQuestions(pool, starNumber, mSeed, topicId);
}

interface QuestionPoolItem {
  prompt: string;
  target: string;
  wrong: string[];
  context: string;
  note: string;
}

function getB3QuestionPool(topicId: string): QuestionPoolItem[] {
  switch (topicId) {
    case 'b3_future_in_the_past':
      return [
        { prompt: 'The agricultural scientists', target: 'were going to conduct', wrong: ['were to conducting', 'will be going to conduct', 'have been going to conduct'], context: 'the field trial on Tuesday, but heavy rainfall flooded the test plots.', note: 'Unfulfilled past intention -> "were going to conduct".' },
        { prompt: 'The young theoretical physicist', target: 'was to become', wrong: ['was to becoming', 'was going become', 'is to become'], context: 'one of the principal architects of quantum electrodynamics.', note: 'Formal expression of historical destiny/future in the past -> "was to become".' },
        { prompt: 'The international climate treaty', target: 'was to have been signed', wrong: ['was to be signed been', 'was to sign', 'is to have been signed'], context: 'in Geneva, but diplomatic negotiations stalled unexpectedly.', note: 'Formal past arrangement that failed to materialize -> "was to have been signed".' },
        { prompt: 'From early childhood, she knew that she', target: 'would dedicate', wrong: ['will dedicate', 'is going to dedicate', 'dedicates'], context: 'her life to clinical neurosurgery.', note: 'Future prediction formulated from a past reference point -> "would dedicate".' },
        { prompt: 'We', target: 'were about to leave', wrong: ['were about leaving', 'are about to leave', 'were about leave'], context: 'the laboratory when the chief investigator summoned us for an urgent briefing.', note: 'Immediate future in the past -> "were about to leave".' },
        { prompt: 'Little did the delegates know that the agreement', target: 'would reshape', wrong: ['will reshape', 'reshaped been', 'is reshaping'], context: 'global maritime trade for decades to come.', note: 'Future in the past with literary inversion -> "would reshape".' },
        { prompt: 'The bridge', target: 'was to have been completed', wrong: ['was to complete', 'was to be completing', 'is to have completed'], context: 'by November, but structural engineering delays intervened.', note: 'Unfulfilled official past arrangement -> "was to have been completed".' },
        { prompt: 'He promised that he', target: 'would deliver', wrong: ['will deliver', 'delivers', 'is delivering'], context: 'the revised financial audit before the board meeting adjourned.', note: 'Reported future commitment made in the past -> "would deliver".' }
      ];

    case 'b3_perfect_infinitives_gerunds':
      return [
        { prompt: 'The senior archaeologist claims', target: 'to have discovered', wrong: ['to discover', 'discovering', 'having discovered'], context: 'an unrecorded pre-Columbian ceremonial platform.', note: 'Perfect infinitive indicates discovery occurred prior to the present claim -> "to have discovered".' },
        { prompt: 'The pharmaceutical executive apologized for', target: 'having misled', wrong: ['to have misled', 'to mislead', 'mislead'], context: 'the parliamentary committee during her initial testimony.', note: 'Preposition "for" + perfect gerund for prior completed action -> "having misled".' },
        { prompt: '', target: 'Having completed', wrong: ['To have completed', 'Completing been', 'Completed having'], context: 'the preliminary genomic sequencing, the research team submitted their manuscript for peer review.', note: 'Perfect participle clause indicating prior completion -> "Having completed".' },
        { prompt: 'The medieval cathedral is believed', target: 'to have survived', wrong: ['to survive', 'surviving', 'to be surviving'], context: 'at least three catastrophic earthquakes over the centuries.', note: 'Impersonal passive with perfect infinitive -> "to have survived".' },
        { prompt: 'She feels proud of', target: 'having earned', wrong: ['to have earned', 'earning been', 'to earn'], context: 'her doctoral degree while working as a full-time research fellow.', note: 'Preposition "of" + perfect gerund for prior milestone -> "having earned".' },
        { prompt: 'The defendant denied', target: 'having seen', wrong: ['to have seen', 'to see', 'see'], context: 'the confidential prototype schematics prior to the product unveiling.', note: '"Deny" governing prior action -> perfect gerund "having seen".' },
        { prompt: 'The ancient stone tablet seems', target: 'to have been engraved', wrong: ['to engrave', 'to be engraving', 'having engraved'], context: 'during the reign of Emperor Justinian.', note: 'Passive perfect infinitive -> "to have been engraved".' },
        { prompt: '', target: 'Having been warned', wrong: ['Being warned have', 'To have been warned', 'Warned having'], context: 'about the impending cyclone, the maritime vessel altered its navigation route.', note: 'Passive perfect participle clause -> "Having been warned".' }
      ];

    case 'b3_conditional_inversion_foundations':
      return [
        { prompt: '', target: 'Should you require', wrong: ['If you should to require', 'Should you to require', 'Were you require'], context: 'any supplementary technical documentation, please contact our administrative liaison.', note: 'Type 1 inverted conditional with bare verb -> "Should you require".' },
        { prompt: '', target: 'Were the regulatory commission to approve', wrong: ['Were the commission approve', 'If were the commission to approve', 'Should the commission to approve'], context: 'the gene therapy trial, patient recruitment would begin immediately.', note: 'Type 2 inverted conditional with "to-infinitive" -> "Were the regulatory commission to approve".' },
        { prompt: '', target: 'Had the flight crew not detected', wrong: ['Hadn\'t the flight crew detected', 'If had the flight crew not detected', 'Were the flight crew not to detect'], context: 'the hydraulic pressure loss, a catastrophic landing would have occurred.', note: 'Type 3 inverted conditional negative: "not" must follow the subject (never contracted).' },
        { prompt: '', target: 'Should need arise,', wrong: ['Should need to arise,', 'Were need arise,', 'Had need arise,'], context: 'our emergency biomedical deployment unit is equipped for immediate dispatch.', note: 'Idiomatic inverted conditional -> "Should need arise,".' },
        { prompt: '', target: 'Were it not for', wrong: ['Had it not for', 'Should it not for', 'If were it not for'], context: 'the philanthropic endowment from the alumni trust, this research wing could not operate.', note: 'Present conditional idiom without "if" -> "Were it not for".' },
        { prompt: '', target: 'Had we known', wrong: ['Were we known', 'Should we known', 'Did we know'], context: 'about the regional transport strike in advance, we would have adjusted our conference itinerary.', note: 'Type 3 past inverted conditional -> "Had we known".' },
        { prompt: '', target: 'Were the university to reduce', wrong: ['Were the university reduce', 'Should the university to reduce', 'Had the university to reduce'], context: 'tuition fees for STEM subjects, enrollment would increase significantly.', note: 'Type 2 inverted hypothetical -> "Were the university to reduce".' },
        { prompt: '', target: 'Had the prototype not malfunctioned', wrong: ['Hadn\'t the prototype malfunctioned', 'Were the prototype not malfunctioned', 'Should the prototype not have malfunctioned'], context: 'during the stress benchmark, the product would have launched on schedule.', note: 'Type 3 negative inversion -> "Had the prototype not malfunctioned".' }
      ];

    case 'b3_unreal_past_structures':
      return [
        { prompt: 'It is high time the international community', target: 'established', wrong: ['establishes', 'has established', 'would establish'], context: 'binding regulatory protocols for artificial general intelligence.', note: '"It is high time + subject" strictly takes the Past Simple "established".' },
        { prompt: 'The lead investigator would rather the committee', target: 'postponed', wrong: ['postpones', 'would postpone', 'has postponed'], context: 'the vote until all environmental assessments are verified.', note: '"Would rather + subject" takes Past Simple "postponed".' },
        { prompt: 'The young graduate researcher speaks about quantum physics as though she', target: 'had directed', wrong: ['directs', 'has directed', 'would direct'], context: 'the national research institute for decades.', note: '"As though" with unreal past simulation takes Past Perfect "had directed".' },
        { prompt: 'It\'s about time you', target: 'updated', wrong: ['update', 'have updated', 'will update'], context: 'your workstation\'s operating system to patch zero-day vulnerabilities.', note: '"It\'s about time + subject" takes Past Simple "updated".' },
        { prompt: 'We would sooner the board', target: 'allocated', wrong: ['allocates', 'would allocate', 'has allocated'], context: 'the surplus capital toward sustainable clean-tech initiatives.', note: '"Would sooner + subject" requires Past Simple "allocated".' },
        { prompt: 'He treats the junior laboratory interns as if they', target: 'were', wrong: ['are', 'would be', 'have been'], context: 'completely incapable of operating standard spectrometry apparatus.', note: '"As if" hypothetical simulation requires subjunctive "were".' },
        { prompt: 'I would rather you', target: 'did not disclose', wrong: ['do not disclose', 'won\'t disclose', 'would not disclose'], context: 'the preliminary trial findings to financial analysts just yet.', note: '"Would rather + subject + negative" requires Past Simple "did not disclose".' },
        { prompt: 'It is time we', target: 'reassessed', wrong: ['reassess', 'have reassessed', 'would reassess'], context: 'our long-term macroeconomic supply chain diversification strategy.', note: '"It is time + subject" takes Past Simple "reassessed".' }
      ];

    case 'b3_but_for_had_it_not_been':
      return [
        { prompt: '', target: 'But for the pilot\'s', wrong: ['Except for the pilot\'s', 'Unless the pilot\'s', 'Without for the pilot\'s'], context: 'exceptional composure during the engine failure, the aircraft would have crashed.', note: '"But for + noun phrase" functions as "If it hadn\'t been for...".' },
        { prompt: '', target: 'Had it not been for', wrong: ['Were it not been for', 'Should it not been for', 'If it had not for'], context: 'your rigorous statistical methodology, our manuscript would have been rejected by the journal.', note: 'Formal past inverted conditional -> "Had it not been for".' },
        { prompt: '', target: 'Were it not for', wrong: ['Had it not for', 'Should it not for', 'If were it not for'], context: 'the generous endowment from the foundation, our wildlife sanctuary could not maintain its operations today.', note: 'Present conditional idiom -> "Were it not for".' },
        { prompt: '', target: 'But for the unexpected blizzard', wrong: ['Unless the unexpected blizzard', 'Except for that blizzard', 'Without of the blizzard'], context: 'on the mountain pass, the mountaineers would have reached the summit before nightfall.', note: '"But for + noun" expressing past preventing cause.' },
        { prompt: '', target: 'Had it not been for emergency medical', wrong: ['Were it not been for emergency medical', 'Should it not be for emergency medical', 'If had not been emergency medical'], context: 'intervention, the patient might not have survived the severe anaphylaxis.', note: 'Type 3 past conditional formula -> "Had it not been for".' },
        { prompt: 'The corporate acquisition would have collapsed', target: 'but for the tireless mediation', wrong: ['unless the tireless mediation', 'except the tireless mediation', 'without for the tireless mediation'], context: 'of the chief legal counsel.', note: 'Prepositional conditional in middle position -> "but for the tireless mediation".' },
        { prompt: '', target: 'Were it not for public subsidies,', wrong: ['Had it not for public subsidies,', 'Should it not for public subsidies,', 'Were it not been public subsidies,'], context: 'commercial adoption of residential solar roofing would progress much more slowly.', note: 'Present condition affecting general present state -> "Were it not for public subsidies,".' },
        { prompt: '', target: 'Had it not been for the whistleblower\'s', wrong: ['Were it not for the whistleblower\'s', 'Should it not be the whistleblower\'s', 'Had it not for the whistleblower\'s'], context: 'courageous testimony, the corporate fraud would have remained undetected.', note: 'Past unreal conditional -> "Had it not been for the whistleblower\'s".' }
      ];

    case 'b3_past_deductions_certainty':
      return [
        { prompt: 'The ancient masonry displays distinct charred marks; a devastating fire', target: 'must have swept', wrong: ['can have swept', 'should have swept', 'must sweep'], context: 'through the fortress centuries ago.', note: 'Strong logical certainty about a past event based on physical evidence -> "must have swept".' },
        { prompt: 'The suspect', target: 'cannot have committed', wrong: ['must not have committed', 'should not have committed', 'cannot commit'], context: 'the cyberattack at midnight because biometric logs prove he was airborne.', note: 'Strong logical impossibility in the past -> "cannot have committed".' },
        { prompt: 'You', target: 'must have misunderstood', wrong: ['can have misunderstood', 'should have misunderstood', 'must misunderstand'], context: 'the project rubric; the final submission deadline is next Friday, not today.', note: 'Logical certainty -> "must have misunderstood".' },
        { prompt: 'The mountaineers', target: 'couldn\'t have scaled', wrong: ['must not have scaled', 'shouldn\'t have scaled', 'couldn\'t scale'], context: 'the north face of the peak without specialized ice axes and crampons.', note: 'Logical past impossibility -> "couldn\'t have scaled".' },
        { prompt: 'Marcus', target: 'must have worked', wrong: ['can have worked', 'should have worked', 'must work'], context: 'tirelessly to complete his doctoral dissertation in less than three years.', note: 'Logical deduction from an impressive achievement -> "must have worked".' },
        { prompt: 'The laboratory samples', target: 'must have been contaminated', wrong: ['can have been contaminated', 'must be contaminating', 'should have been contaminated'], context: 'during transport, given the anomalous bacterial growth.', note: 'Passive logical deduction -> "must have been contaminated".' },
        { prompt: 'She', target: 'can\'t have forgotten', wrong: ['must not have forgotten', 'should not have forgotten', 'can\'t forget'], context: 'about the keynote presentation; she has been preparing her slides for weeks.', note: 'High certainty of impossibility -> "can\'t have forgotten".' },
        { prompt: 'The parcel', target: 'must have arrived', wrong: ['can have arrived', 'should have arrived', 'must arrive'], context: 'earlier this morning because it is sitting right by the reception desk.', note: 'Deduction backed by present evidence -> "must have arrived".' }
      ];

    case 'b3_past_speculation_regret':
      return [
        { prompt: 'The aircraft', target: 'could have landed', wrong: ['could land', 'can have landed', 'might to land'], context: 'safely on the auxiliary strip if visibility had not deteriorated so precipitously.', note: 'Unrealized past capability/opportunity -> "could have landed".' },
        { prompt: 'You', target: 'should have alerted', wrong: ['should alert', 'must have alerted', 'ought alert'], context: 'the biosafety officer the moment you detected the pressurized gas leak.', note: 'Past unfulfilled moral duty / criticism -> "should have alerted".' },
        { prompt: 'The historical records', target: 'might have been destroyed', wrong: ['might be destroying', 'could be destroyed', 'must to be destroyed'], context: 'during the wartime bombardment of the municipal library.', note: 'Speculative past possibility (passive) -> "might have been destroyed".' },
        { prompt: 'She', target: 'shouldn\'t have shared', wrong: ['shouldn\'t share', 'mustn\'t have shared', 'couldn\'t share'], context: 'the proprietary algorithm schematics before filing the patent application.', note: 'Past criticism of an inappropriate action -> "shouldn\'t have shared".' },
        { prompt: 'The surgical team', target: 'ought to have ordered', wrong: ['ought have ordered', 'should to have ordered', 'must have ordered'], context: 'a comprehensive MRI scan before discharging the patient.', note: 'Unfulfilled duty with "ought to" -> "ought to have ordered".' },
        { prompt: 'We', target: 'may have overlooked', wrong: ['may overlook', 'can have overlooked', 'must to have overlooked'], context: 'a subtle variable in our initial statistical regression model.', note: 'Admitting a possible past mistake -> "may have overlooked".' },
        { prompt: 'He', target: 'could have won', wrong: ['could win', 'can have won', 'might win'], context: 'the international mathematics olympiad if he hadn\'t made a minor arithmetic slip.', note: 'Unfulfilled past potential -> "could have won".' },
        { prompt: 'The administration', target: 'should have consulted', wrong: ['should consult', 'must have consulted', 'ought consult'], context: 'faculty members before restructuring the departmental curriculum.', note: 'Criticism of past administrative decision -> "should have consulted".' }
      ];

    case 'b3_neednt_have_vs_didnt_need_to':
      return [
        { prompt: 'We', target: 'needn\'t have rushed', wrong: ['didn\'t need rush', 'mustn\'t have rushed', 'couldn\'t have rushed'], context: 'to the airport gate; the international flight was delayed by three hours anyway.', note: '"Needn\'t have rushed" indicates an action that was performed unnecessarily in hindsight.' },
        { prompt: 'She', target: 'didn\'t need to take', wrong: ['needn\'t have taken', 'mustn\'t take', 'needn\'t to take'], context: 'the university entrance exam because her international baccalaureate scores were exceptional.', note: 'Absence of past obligation (she did not have to take it) -> "didn\'t need to take".' },
        { prompt: 'You', target: 'needn\'t have printed', wrong: ['didn\'t need print', 'mustn\'t have printed', 'needn\'t to print'], context: 'all fifty copies of the memorandum; every committee member brought a laptop.', note: 'Wasted effort performed in reality -> "needn\'t have printed".' },
        { prompt: 'Marcus', target: 'didn\'t need to hire', wrong: ['needn\'t have hired', 'must not hire', 'needn\'t to hire'], context: 'a commercial contractor because his brother is a certified electrician.', note: 'No need existed -> "didn\'t need to hire".' },
        { prompt: 'I', target: 'needn\'t have worried', wrong: ['didn\'t need worry', 'mustn\'t have worried', 'needn\'t to worry'], context: 'so intensely about the defense; the academic committee was extraordinarily encouraging.', note: 'Past unnecessary emotional exertion -> "needn\'t have worried".' },
        { prompt: 'The laboratory technicians', target: 'didn\'t need to recalibrate', wrong: ['needn\'t have recalibrated', 'mustn\'t recalibrate', 'needn\'t to recalibrate'], context: 'the spectrometer because it had been serviced the previous morning.', note: 'No obligation existed -> "didn\'t need to recalibrate".' },
        { prompt: 'We', target: 'needn\'t have bought', wrong: ['didn\'t need buy', 'mustn\'t have bought', 'couldn\'t buy'], context: 'so many provisions; half of the dinner guests canceled at the last minute.', note: 'Purchased unnecessarily -> "needn\'t have bought".' },
        { prompt: 'As an EU citizen, she', target: 'didn\'t need to apply', wrong: ['needn\'t have applied', 'mustn\'t apply', 'needn\'t to apply'], context: 'for a residency visa before taking up her research fellowship.', note: 'Absence of legal obligation -> "didn\'t need to apply".' }
      ];

    case 'b3_participle_clauses_time_cause':
      return [
        { prompt: '', target: 'Having synthesized', wrong: ['Synthesizing have', 'To have synthesized', 'Synthesized having'], context: 'the novel polymer in the cleanroom, the material chemists subjected it to stress tests.', note: 'Active perfect participle clause indicating prior completion -> "Having synthesized".' },
        { prompt: '', target: 'Realizing that the flight', wrong: ['Realized that the flight', 'Having realized the flight was', 'To realize the flight'], context: 'was heavily overbooked, the airline offered travel vouchers to flexible passengers.', note: 'Present participle clause expressing cause/reason -> "Realizing that the flight".' },
        { prompt: '', target: 'Published in 1687,', wrong: ['Publishing in 1687,', 'Having published in 1687,', 'To publish in 1687,'], context: 'Newton\'s Principia Mathematica fundamentally transformed humanity\'s understanding of celestial mechanics.', note: 'Passive past participle modifying Newton\'s work -> "Published in 1687,".' },
        { prompt: '', target: 'Not knowing which platform', wrong: ['Knowing not which platform', 'Not having know which platform', 'Without knowing which platform to'], context: 'to proceed to, the bewildered traveler approached the information desk.', note: 'Negative present participle expressing reason -> "Not knowing which platform".' },
        { prompt: '', target: 'Having been damaged', wrong: ['Being damaged have', 'Damaged having been', 'To have been damaged'], context: 'during the gale-force storm, the solar collector array operated at reduced efficiency.', note: 'Passive perfect participle clause -> "Having been damaged".' },
        { prompt: '', target: 'Exhausted by the long trek,', wrong: ['Exhausting by the long trek,', 'Having exhausted by the trek,', 'To exhaust by the trek,'], context: 'the mountaineers pitched their tents at the base of the glacier.', note: 'Past participle expressing state/cause -> "Exhausted by the long trek,".' },
        { prompt: '', target: 'Opening the sealed envelope,', wrong: ['Opened the sealed envelope,', 'Having open the envelope,', 'To open the envelope,'], context: 'the director discovered the resignation letter from the chief architect.', note: 'Present participle clause indicating concurrent action -> "Opening the sealed envelope,".' },
        { prompt: '', target: 'Having lived in Tokyo', wrong: ['Living in Tokyo have', 'Lived in Tokyo having', 'To have lived Tokyo'], context: 'for nearly a decade, Dr. Vance speaks fluent Japanese and understands local business etiquette.', note: 'Prior ongoing experience represented by perfect participle -> "Having lived in Tokyo".' }
      ];

    case 'b3_relative_clauses_prepositions':
      return [
        { prompt: 'The international symposium at', target: 'which the climate accord was negotiated', wrong: ['that the climate accord was negotiated', 'whom the climate accord was negotiated', 'where the climate accord was negotiated at'], context: 'concluded with unanimous consensus.', note: 'Preposition + which for an event/place in formal style -> "which the climate accord was negotiated".' },
        { prompt: 'The senior researcher to', target: 'whom the discovery was attributed', wrong: ['who the discovery was attributed', 'that the discovery was attributed', 'which the discovery was attributed'], context: 'generously acknowledged the contributions of her graduate fellows.', note: 'Preposition + whom for a person -> "whom the discovery was attributed".' },
        { prompt: 'We conducted a comprehensive benchmark trial, the results of', target: 'which were published', wrong: ['that were published', 'whom were published', 'where were published'], context: 'in Nature Biotechnology.', note: '"The results of which" referring to the trial -> "which were published".' },
        { prompt: 'The theoretical foundation upon', target: 'which this econometric model rests', wrong: ['that this econometric model rests', 'where this econometric model rests', 'whom this econometric model rests'], context: 'assumes perfect market information.', note: 'Preposition + which -> "which this econometric model rests".' },
        { prompt: 'The medieval archive contains thousands of parchment folios, many of', target: 'which have never been translated', wrong: ['that have never been translated', 'whom have never been translated', 'where have never been translated'], context: '.', note: '"Many of which" for documents/things -> "which have never been translated".' },
        { prompt: 'The corporate committee before', target: 'which the whistleblower testified', wrong: ['who the whistleblower testified', 'that the whistleblower testified', 'where the whistleblower testified'], context: 'recommended an immediate independent audit.', note: 'Preposition + which for a body/committee -> "which the whistleblower testified".' },
        { prompt: 'The clinical trial recruited sixty volunteers, all of', target: 'whom completed', wrong: ['who completed', 'which completed', 'that completed'], context: 'the twelve-week exercise regimen.', note: '"All of whom" for people -> "whom completed".' },
        { prompt: 'This is the foundational principle by', target: 'which our engineering division operates', wrong: ['that our engineering division operates', 'where our engineering division operates', 'whom our engineering division operates'], context: '.', note: 'Preposition + which for a principle -> "which our engineering division operates".' }
      ];

    case 'b3_advanced_transition_signals':
      return [
        { prompt: 'The preliminary clinical trial demonstrated encouraging efficacy;', target: 'nonetheless,', wrong: ['whereas,', 'although,', 'inasmuch as,'], context: 'long-term epidemiological safety monitoring remains indispensable.', note: '"Nonetheless," marks formal contrast across independent clauses.' },
        { prompt: 'The engineering firm delivered the civic infrastructure project on schedule,', target: 'albeit slightly over', wrong: ['despite slightly over', 'whereas slightly over', 'nonetheless slightly over'], context: 'the initial budgetary appropriation.', note: '"Albeit" introduces an adverbial concession ("albeit slightly over").' },
        { prompt: '', target: 'Notwithstanding', wrong: ['Although', 'Despite of', 'Whereas'], context: 'severe atmospheric turbulence, the test pilot executed a textbook landing.', note: '"Notwithstanding" functions as a formal preposition of concession + noun phrase.' },
        { prompt: '', target: 'Furthermore,', wrong: ['Whereas,', 'Albeit,', 'Inasmuch as,'], context: 'the latest empirical data strongly corroborates the gravitational wave hypothesis.', note: '"Furthermore," introduces a strong reinforcing point.' },
        { prompt: 'The two laboratories conducted their research', target: 'concurrently', wrong: ['inasmuch', 'notwithstanding', 'albeit'], context: 'to accelerate the development of the antiviral therapeutic.', note: '"Concurrently" means simultaneously / at the same time.' },
        { prompt: '', target: 'Inasmuch as', wrong: ['Albeit', 'Notwithstanding that', 'Whereas as'], context: 'the municipal committee has approved the revised blueprint, construction will begin next month.', note: '"Inasmuch as" means since / because / considering that.' },
        { prompt: 'The new algorithm is highly sophisticated,', target: 'albeit demanding', wrong: ['although demanding of', 'whereas demanding', 'nonetheless demanding of'], context: 'in terms of graphics processing unit memory.', note: '"Albeit" preceding an adjective phrase -> "albeit demanding".' },
        { prompt: 'The enterprise reorganized its global procurement network;', target: 'moreover,', wrong: ['whereas,', 'inasmuch as,', 'albeit,'], context: 'it established regional distribution hubs to mitigate supply chain disruptions.', note: '"Moreover," adds a powerful supplementary argument.' }
      ];

    case 'b3_nominalization_formal_style':
      return [
        { prompt: 'The rapid', target: 'proliferation of decentralized microgrids', wrong: ['proliferating of decentralized microgrids', 'proliferate of decentralized microgrids', 'proliferated of decentralized microgrids'], context: 'has significantly enhanced grid resilience.', note: 'Nominalization: abstract noun "proliferation" + prepositional phrase.' },
        { prompt: 'A meticulous', target: 'examination of the historical patient records', wrong: ['examining of the historical patient records', 'examine of the historical patient records', 'examined of the historical patient records'], context: 'revealed an undiagnosed hereditary condition.', note: 'Nominalization: "examination of...".' },
        { prompt: 'The abrupt', target: 'implementation of import tariffs', wrong: ['implementing of import tariffs', 'implement of import tariffs', 'implemented of import tariffs'], context: 'triggered supply bottlenecks across the automotive manufacturing sector.', note: 'Nominalization: "implementation of import tariffs".' },
        { prompt: 'Precise', target: 'identification of phonetic anomalies', wrong: ['identifying of phonetic anomalies', 'identify of phonetic anomalies', 'identified of phonetic anomalies'], context: 'requires rigorous laboratory training.', note: 'Nominalization: "identification of...".' },
        { prompt: 'The prompt', target: 'containment of the industrial spill', wrong: ['containing of the industrial spill', 'contain of the industrial spill', 'contained of the industrial spill'], context: 'prevented widespread ecological contamination of the river basin.', note: 'Nominalization: "containment of...".' },
        { prompt: 'Continuous', target: 'monitoring of volcanic seismic activity', wrong: ['monitor of volcanic seismic activity', 'monitored of volcanic seismic activity', 'monitorization of volcanic seismic activity'], context: 'provided early warning for evacuation.', note: 'Nominalization: "monitoring of...".' },
        { prompt: 'The successful', target: 'integration of the acquired software platform', wrong: ['integrate of the acquired software platform', 'integrating of the acquired software platform', 'integrated of the acquired software platform'], context: 'doubled customer engagement metrics.', note: 'Nominalization: "integration of...".' },
        { prompt: 'A thorough', target: 'assessment of environmental risks', wrong: ['assessing of environmental risks', 'assess of environmental risks', 'assessed of environmental risks'], context: 'must precede any mining exploration license approval.', note: 'Nominalization: "assessment of environmental risks".' }
      ];

    default:
      return [
        { prompt: 'The scientists', target: 'were going to conduct', wrong: ['were to conducting', 'will conduct', 'conducting'], context: 'the field trial on Tuesday.', note: 'Future in the past.' },
        { prompt: 'She claims', target: 'to have discovered', wrong: ['to discover', 'discovering', 'discovered'], context: 'the anomaly first.', note: 'Perfect infinitive.' }
      ];
  }
}

function createB3RotatedQuestions(
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
      question: `Question ${i + 1} of 20 (Star #${star}) • Level B3`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on the grammatical rule for this topic.`,
      ruleTip: item.note
    });
  }

  return questions;
}
