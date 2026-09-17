import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

// ==========================================
// LEVEL B4: CATEGORIES & TOPICS DEFINITION
// ==========================================

export type B4CategoryTab =
  | 'Subjunctive Mood & Inversions'
  | 'Complex Passives & Ergative Verbs'
  | 'Ellipsis & Substitution'
  | 'Cleft Sentences & Focus'
  | 'Advanced Discourse & Prepositions';

export const B4_CATEGORIES: B4CategoryTab[] = [
  'Subjunctive Mood & Inversions',
  'Complex Passives & Ergative Verbs',
  'Ellipsis & Substitution',
  'Cleft Sentences & Focus',
  'Advanced Discourse & Prepositions'
];

// Category 1: Subjunctive Mood & Inversions
export const B4_SUBJUNCTIVE_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b4_mandative_subjunctive',
    title: 'The Mandative Subjunctive (Insist, Recommend, Demand that he be)',
    subtitle: 'Preserving base verb forms after formal verbs of requirement, proposal, and necessity',
    badge: 'Mandative Subjunctive',
    description: 'In formal, academic, legal, and international administrative English, clauses following verbs or adjectives of demand, suggestion, and necessity use the base form of the verb (subjunctive) regardless of the subject (no "-s" for 3rd person singular, and "be" for the verb to be): Verbs: demand, insist, recommend, suggest, propose, require, request. Adjectives: essential, crucial, vital, imperative, mandatory.',
    keyRule: 'Subject + recommend/insist that + Subject + BARE BASE VERB (e.g. "demand that he be present", "insist that she submit"). Negative: "that he NOT participate" (no "does not").',
    formula: 'S + [demand / insist / recommend] that + S + [Base Verb / be + V3 / not + Base Verb]',
    examples: [
      'The ethics committee recommended that the clinical trial be suspended immediately.',
      'The director insists that every researcher submit a bi-weekly laboratory progress report.',
      'It is imperative that all flight safety protocols remain strictly enforced across international carriers.',
      'The magistrate demanded that the suspect not leave the jurisdiction pending trial.',
      'The university charter requires that the chancellor be elected by a two-thirds majority.'
    ]
  },
  {
    id: 'b4_negative_adverbial_inversion',
    title: 'Negative & Restrictive Adverbial Inversion (Seldom, Rarely, Not only)',
    subtitle: 'Fronting limiting adverbs to create rhetorical power and rhythmic authority',
    badge: 'Negative Inversion',
    description: 'When limiting or negative adverbs are placed at the beginning of a clause for dramatic or rhetorical emphasis, the auxiliary verb and subject invert (identical to question word order): 1. "Seldom / Rarely have we witnessed..." 2. "Not only did the team complete the project, but they also..." 3. "Never before had the observatory recorded..." 4. "Little did they realize..." 5. "Under no circumstances should you touch...".',
    keyRule: 'Negative Word + Auxiliary Verb (did/has/should/will) + Subject + Main Verb. If no auxiliary exists in simple tenses, insert "do/does/did".',
    formula: '[Seldom / Rarely / Not only / Never before] + Auxiliary + Subject + Main Verb...',
    examples: [
      'Seldom have atmospheric scientists observed such rapid intensification of a tropical cyclone.',
      'Not only did the engineers double processing throughput, but they also cut energy dissipation by half.',
      'Under no circumstances must unauthorized personnel enter the radiological containment facility.',
      'Little did the astronomers suspect that the radio pulse originated from an active magnetar.',
      'Hardly had the keynote speaker commenced her lecture when a power surge disabled the audiovisual monitors.'
    ]
  }
];

// Category 2: Complex Passives & Ergative Verbs
export const B4_PASSIVES_ERGATIVE_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b4_prepositional_modal_passives',
    title: 'Prepositional Passives & Modal Perfect Passives',
    subtitle: 'Verbs with bound prepositions (accounted for) & compound modal passives (should have been inspected)',
    badge: 'Prepositional & Modal Passives',
    description: '1. Prepositional Passives: Verbs followed by fixed prepositions retain their preposition at the very end in passive constructions ("The discrepancy has been accounted for", "The proposal was looked into"). 2. Modal Perfect Passives: Express past necessity, deduction, or speculation in the passive ("The apparatus should have been inspected prior to activation", "The data must have been corrupted during transmission").',
    keyRule: 'Prepositional passive: Object + be + V3 + Preposition ("The matter was dealt with"). Modal perfect passive: Modal + have been + V3 ("could have been prevented").',
    formula: 'S + [be + V3 + Preposition] | S + [should / must / could] have been + V3',
    examples: [
      'All experimental discrepancies must be thoroughly accounted for in the statistical appendix.',
      'The catastrophic turbine failure could have been prevented if regular diagnostic scans had been maintained.',
      'The controversial zoning proposal was vehemently objected to by local residential associations.',
      'The laboratory cleanroom should have been sterilized before the viral vector cultures were prepared.',
      'Her pioneering theoretical contributions were widely commented on throughout the international physics community.'
    ]
  },
  {
    id: 'b4_ergative_verbs_middle_voice',
    title: 'Ergative Verbs & The Middle Voice',
    subtitle: 'Verbs where the semantic patient can function as the grammatical subject without passive morphology',
    badge: 'Ergative / Middle Voice',
    description: 'Ergative verbs can be used transitively (with an agent: "The chef melted the butter") or intransitively (where the object becomes the subject without needing passive "be + V3": "The butter melted"). Common ergative verbs: melt, freeze, boil, cook, open, close, drop, shatter, improve, increase, develop, change, accelerate. Middle voice describes how something performs: "This manuscript reads beautifully", "The fabric washes easily".',
    keyRule: 'Ergative verbs can have an active grammatical form with a passive-like meaning ("The door opened", NOT necessarily "The door was opened").',
    formula: 'Transitive: Agent + Verb + Patient | Ergative / Middle: Patient + Verb (+ Adverb)',
    examples: [
      'Global semiconductor manufacturing output increased dramatically following the introduction of automated cleanrooms.',
      'The thick glacier ice melted rapidly under the unseasonably warm summer sunlight.',
      'Her latest sociological treatise reads exceptionally well, combining scholarly rigor with accessible prose.',
      'The heavy vault door closed automatically as the security lockdown commenced.',
      'Photovoltaic solar cell efficiency has improved steadily over the past decade.'
    ]
  }
];

// Category 3: Ellipsis & Substitution
export const B4_ELLIPSIS_SUBSTITUTION_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b4_ellipsis_clean_omission',
    title: 'Syntactic Ellipsis (Omission of Redundant Elements)',
    subtitle: 'Eliminating repetitive verbs, nouns, and clauses to create concise, elegant prose',
    badge: 'Syntactic Ellipsis',
    description: 'Ellipsis is the deliberate omission of words from a sentence whose meaning is clearly understood from the surrounding context: 1. Modal / Auxiliary ellipsis: "She can speak Mandarin fluently, and so can her brother." 2. Infinitive ellipsis (to-ellipsis): "You don\'t have to attend the seminar if you don\'t want to (attend)." 3. Gapping in compound clauses: "Marcus studied quantum mechanics, and Elena (studied) molecular biology."',
    keyRule: 'Retain the auxiliary verb or "to" while omitting the repeated verb phrase. Example: "I haven\'t reviewed the dossier yet, but I intend to [review the dossier]."',
    formula: 'Clause 1, and [Auxiliary / to] + (omitted redundant predicate)',
    examples: [
      'Dr. Alvarez has published four papers in Nature, and Dr. Foster has (published) three.',
      'You are welcome to inspect the genomic laboratory if you wish to (inspect it).',
      'Some committee members voted in favor of the urban redevelopment plan, while others did not (vote in favor).',
      'The initial quantum simulation took forty hours to compute, but the second one took only twelve (hours).',
      'She did not accept the university directorship, although she was strongly encouraged to (accept it).'
    ]
  },
  {
    id: 'b4_substitution_so_do_so_one',
    title: 'Substitution Mechanics (So, Do so, One/Ones, That/Those)',
    subtitle: 'Replacing full clauses, verb phrases, and nouns with compact pro-forms',
    badge: 'Substitution',
    description: 'Master English pro-forms to replace repeated structures: 1. Clause substitution with "so" and "not" after think, believe, suppose, hope, expect ("Will interest rates drop? I believe so / I hope not"). 2. Verb phrase substitution with "do so" ("The board asked him to resign, and he did so immediately"). 3. Nominal substitution with "one / ones" and formal comparative "that of / those of" ("The climate of Madrid is warmer than that of London").',
    keyRule: '"Do so" replaces a dynamic verb + object phrase. "That of / Those of" replaces a singular / plural noun in formal comparisons.',
    formula: 'S + think/hope + so / not | S + did so | Noun of X vs [that / those] of Y',
    examples: [
      'The department chair asked the researchers to verify their raw datasets, and they did so promptly.',
      'The thermal conductivity of graphene is far superior to that of traditional copper alloys.',
      'Will the European Space Agency launch the lunar rover next spring? Ground controllers certainly hope so.',
      'Our team tested three machine learning models and selected the one with the lowest error variance.',
      'The computational capabilities of quantum processors dwarf those of conventional silicon microchips.'
    ]
  }
];

// Category 4: Cleft Sentences & Focus
export const B4_CLEFT_SENTENCES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b4_it_clefts_focus',
    title: 'It-Cleft Sentences (It was X that / who...)',
    subtitle: 'Foregrounding key agents, timestamps, and locations with dramatic focus',
    badge: 'It-Clefts',
    description: 'It-cleft sentences divide a single clause into two sections to place intense semantic focus on a specific element (the subject, object, time, or place). The formula is: "It + is/was + [Focused Element] + that/who + [Remaining Information]". Example: Standard: "Dr. Chen discovered the pulsar in 2021" -> Cleft: "It was in 2021 that Dr. Chen discovered the pulsar" (Focus on time) or "It was Dr. Chen who discovered the pulsar" (Focus on person).',
    keyRule: 'It + is/was + [Focused Item] + that/who + rest of clause. Never use "what" or "which" in an it-cleft opening.',
    formula: 'It + [is / was] + [Focus (Subject/Time/Place)] + [that / who] + Clause',
    examples: [
      'It was Dr. Rosalind Franklin whose crystallographic photographs provided the crucial insight into DNA structure.',
      'It was during the deep recession of 2008 that the renewable energy startup was originally founded.',
      'It is through rigorous interdisciplinary collaboration that breakthroughs in synthetic biology are achieved.',
      'It was not until the second clinical trial that the therapeutic efficacy of the molecule became undeniable.',
      'It was the chief software architect who identified the critical memory leak in the operating kernel.'
    ]
  },
  {
    id: 'b4_wh_clefts_pseudo_clefts',
    title: 'Wh-Clefts & Pseudo-Clefts (What we need is..., All that I want is...)',
    subtitle: 'Structuring sentences around noun clauses to spotlight essential needs and actions',
    badge: 'Wh-Clefts',
    description: 'Wh-clefts (or pseudo-clefts) use a relative clause introduced by "What", "All", "The only thing", or "The person who" as the subject, followed by the verb "be" and the emphasized information: 1. "What we need is additional computational power." 2. "What the researchers did was (to) sequence the entire viral genome." 3. "All that the community requires is transparent governance."',
    keyRule: 'What + Subject + Verb + is/was + Focused Element. Can be reversed: "[Focused Element] is what + Subject + Verb".',
    formula: 'What + Clause + [is / was] + [Focused Noun / Infinitive Phrase] | All + Clause + is/was...',
    examples: [
      'What the international energy consortium requires is a unified regulatory framework for carbon credits.',
      'What the biomedical engineers did was develop an artificial organ on a microfluidic chip.',
      'All the doctoral candidate needs to complete her degree is the final approval of her dissertation.',
      'The only thing that prevented a total electrical grid collapse was the rapid activation of battery storage.',
      'A complete restructuring of municipal transit is what the urban planning commission recommends.'
    ]
  }
];

// Category 5: Advanced Discourse & Prepositions
export const B4_DISCOURSE_PREPOSITIONS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'b4_complex_prepositional_phrases',
    title: 'Complex Prepositional Phrases (In light of, With regard to, In terms of)',
    subtitle: 'Mastering multi-word prepositions for executive briefings and scholarly argumentation',
    badge: 'Complex Prepositions',
    description: 'Elevate your analytical writing with multi-word prepositional connectors: 1. Reference & Domain: "with regard to", "in terms of", "with respect to", "as regards". 2. Reason & Context: "in light of", "on account of", "by virtue of", "in view of". 3. Proximity & Correlation: "in tandem with", "in accordance with", "at the expense of".',
    keyRule: 'Complex prepositions are followed by a noun phrase or gerund (-ing), never a full clause with subject and finite verb.',
    formula: '[In light of / With regard to / By virtue of / In accordance with] + Noun Phrase',
    examples: [
      'In light of recent geopolitical tensions, the central bank adjusted its macroeconomic growth projections.',
      'The executive committee made no definitive commitments with regard to expanding regional branch offices.',
      'By virtue of her extensive diplomatic experience, Ambassador Morales resolved the maritime boundary dispute.',
      'The research facility operates in strict accordance with international biosafety level 4 regulations.',
      'In terms of computational energy efficiency, optical microprocessors represent a quantum leap forward.'
    ]
  },
  {
    id: 'b4_concession_exemplification_markers',
    title: 'Concession, Exemplification & Stance Markers',
    subtitle: 'Notwithstanding, As evidenced by, Ostensibly, Invariably & In effect',
    badge: 'Stance Markers',
    description: 'Deploy nuanced stance and exemplification markers: 1. Exemplification: "as evidenced by", "as exemplified in", "notably". 2. Stance / Evaluation: "ostensibly" (apparently, but perhaps not in reality), "invariably" (always / without fail), "in effect" (in reality / practical impact), "arguably" (can be strongly argued).',
    keyRule: '"Ostensibly" indicates surface appearance versus deeper truth. "As evidenced by" introduces concrete data backing a claim.',
    formula: 'Claim, as evidenced by + Data | S + ostensibly + Verb | Invariably, Clause...',
    examples: [
      'The transition toward electrified public transit has accelerated, as evidenced by municipal bus procurement data.',
      'The corporate merger was ostensibly pursued to achieve operational synergies, but was primarily driven by tax optimization.',
      'High-altitude alpine weather conditions are invariably unpredictable during late autumn.',
      'The central bank\'s interest rate reduction is, in effect, a massive liquidity injection into commercial credit markets.',
      'This archaeological discovery is arguably the most significant pre-Columbian finding of the past half-century.'
    ]
  }
];

// Helper to bundle all B4 topics
export function getB4TopicsForCategory(category: B4CategoryTab): GenericGrammarTopicItem[] {
  switch (category) {
    case 'Subjunctive Mood & Inversions':
      return B4_SUBJUNCTIVE_TOPICS;
    case 'Complex Passives & Ergative Verbs':
      return B4_PASSIVES_ERGATIVE_TOPICS;
    case 'Ellipsis & Substitution':
      return B4_ELLIPSIS_SUBSTITUTION_TOPICS;
    case 'Cleft Sentences & Focus':
      return B4_CLEFT_SENTENCES_TOPICS;
    case 'Advanced Discourse & Prepositions':
      return B4_DISCOURSE_PREPOSITIONS_TOPICS;
    default:
      return B4_SUBJUNCTIVE_TOPICS;
  }
}

// ==========================================
// 20-STAR QUESTIONS GENERATOR FOR LEVEL B4
// ==========================================

export function getB4StarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const pool = getB4QuestionPool(topicId);
  return createB4RotatedQuestions(pool, starNumber, mSeed, topicId);
}

interface QuestionPoolItem {
  prompt: string;
  target: string;
  wrong: string[];
  context: string;
  note: string;
}

function getB4QuestionPool(topicId: string): QuestionPoolItem[] {
  switch (topicId) {
    case 'b4_mandative_subjunctive':
      return [
        { prompt: 'The clinical ethics board recommended that the medical trial', target: 'be suspended', wrong: ['is suspended', 'was suspended', 'to be suspended'], context: 'immediately pending an independent safety review.', note: 'Mandative subjunctive with passive: "recommended that X be suspended".' },
        { prompt: 'The departmental chair insists that every doctoral candidate', target: 'submit', wrong: ['submits', 'submitted', 'to submit'], context: 'a bi-weekly progress memorandum.', note: 'Mandative subjunctive requires base form without "-s" -> "submit".' },
        { prompt: 'It is imperative that all flight security protocols', target: 'remain', wrong: ['remains', 'are remaining', 'to remain'], context: 'strictly enforced across international terminals.', note: 'Adjective of necessity with subjunctive -> "remain".' },
        { prompt: 'The presiding magistrate demanded that the suspect', target: 'not leave', wrong: ['does not leave', 'did not leave', 'not to leave'], context: 'the jurisdiction without prior judicial consent.', note: 'Negative mandative subjunctive -> "not leave" (without does/did).' },
        { prompt: 'The university charter requires that the chancellor', target: 'be elected', wrong: ['is elected', 'was elected', 'elects'], context: 'by a two-thirds supermajority of the faculty senate.', note: 'Mandative passive subjunctive -> "be elected".' },
        { prompt: 'The architectural safety inspector suggested that the support columns', target: 'be reinforced', wrong: ['are reinforced', 'were reinforced', 'to reinforce'], context: 'with carbon fiber wraps.', note: '"Suggest that + subject + be reinforced".' },
        { prompt: 'It is essential that each laboratory technician', target: 'wear', wrong: ['wears', 'wore', 'wearing'], context: 'a certified radiation dosimetry badge at all times.', note: 'Subjunctive base verb -> "wear".' },
        { prompt: 'The treaty stipulates that sovereign airspace', target: 'remain', wrong: ['remains', 'is remaining', 'to remain'], context: 'inviolable except during declared emergencies.', note: 'Legal stipulation with subjunctive -> "remain".' }
      ];

    case 'b4_negative_adverbial_inversion':
      return [
        { prompt: '', target: 'Seldom have atmospheric scientists', wrong: ['Seldom atmospheric scientists have', 'Seldom did atmospheric scientists have', 'Seldom have seen atmospheric scientists'], context: 'observed such rapid barometric pressure drops in a temperate cyclone.', note: 'Negative inversion: Seldom + have + subject + V3.' },
        { prompt: '', target: 'Not only did the engineering team', wrong: ['Not only the engineering team did', 'Not only did the engineering team do', 'Not only the engineering team'], context: 'double processing throughput, but they also reduced thermal dissipation by half.', note: 'Not only + did + subject + base verb.' },
        { prompt: '', target: 'Under no circumstances must unauthorized personnel', wrong: ['Under no circumstances unauthorized personnel must', 'Under no circumstances must enter unauthorized personnel', 'Under no circumstances should enter unauthorized personnel'], context: 'enter the radiological containment bunker.', note: 'Prepositional negative inversion: Under no circumstances + must + subject + verb.' },
        { prompt: '', target: 'Little did the astronomers', wrong: ['Little the astronomers did', 'Little did the astronomers knew', 'Little the astronomers'], context: 'suspect that the radio emission originated from a colliding neutron star binary.', note: 'Little + did + subject + base verb.' },
        { prompt: '', target: 'Hardly had the keynote speaker commenced', wrong: ['Hardly the keynote speaker had commenced', 'Hardly had commenced the keynote speaker', 'Hardly did the keynote speaker commence'], context: 'her address when an electrical surge disabled the auditorium monitors.', note: 'Hardly + had + subject + V3... when.' },
        { prompt: '', target: 'Never before had the international committee', wrong: ['Never before the international committee had', 'Never before had faced the international committee', 'Never before did the international committee had'], context: 'confronted such intricate ethical dilemmas in artificial intelligence.', note: 'Never before + had + subject + V3.' },
        { prompt: '', target: 'Rarely does one encounter', wrong: ['Rarely one encounters', 'Rarely does one encounters', 'Rarely one does encounter'], context: 'such rigorous empirical precision in early-stage sociological research.', note: 'Present simple negative inversion: Rarely + does + subject + base verb.' },
        { prompt: '', target: 'No sooner had the expedition departed', wrong: ['No sooner the expedition had departed', 'No sooner had departed the expedition', 'No sooner did the expedition departed'], context: 'from base camp than a severe blizzard blanketed the glacial pass.', note: 'No sooner + had + subject + V3... than.' }
      ];

    case 'b4_prepositional_modal_passives':
      return [
        { prompt: 'All statistical anomalies in the control group must be thoroughly', target: 'accounted for', wrong: ['accounted of', 'accounted to', 'account for'], context: 'in the supplementary methodology section.', note: 'Prepositional passive: "must be thoroughly accounted for".' },
        { prompt: 'The catastrophic turbine breakdown could', target: 'have been prevented', wrong: ['have prevented', 'be prevented been', 'have being prevented'], context: 'if acoustic vibration monitoring had been conducted regularly.', note: 'Modal perfect passive: "could have been prevented".' },
        { prompt: 'The controversial urban rezoning proposal was vehemently', target: 'objected to', wrong: ['objected against', 'objected for', 'objected at'], context: 'by regional environmental preservation trusts.', note: 'Prepositional passive: "object to" -> "was objected to".' },
        { prompt: 'The biological containment facility should', target: 'have been inspected', wrong: ['have inspected', 'be inspected have', 'have being inspected'], context: 'before viral culture replication began.', note: 'Modal perfect passive: "should have been inspected".' },
        { prompt: 'Her theoretical contributions to astrophysics were widely', target: 'commented on', wrong: ['commented about', 'commented of', 'commented upon to'], context: 'in leading academic periodicals.', note: 'Prepositional passive: "comment on" -> "were commented on".' },
        { prompt: 'The sudden network latency spike must', target: 'have been caused', wrong: ['have caused', 'be caused been', 'have being caused'], context: 'by an unauthorized distributed denial-of-service attack.', note: 'Modal perfect deduction passive: "must have been caused".' },
        { prompt: 'The urgent patient safety grievance was promptly', target: 'dealt with', wrong: ['dealt to', 'dealt for', 'dealt by'], context: 'by the hospital ombudsman.', note: 'Prepositional passive: "deal with" -> "was dealt with".' },
        { prompt: 'The ancient maritime artifact might', target: 'have been damaged', wrong: ['have damaged', 'be damaged have', 'have being damaged'], context: 'during its transatlantic maritime shipment.', note: 'Modal perfect possibility passive: "might have been damaged".' }
      ];

    case 'b4_ergative_verbs_middle_voice':
      return [
        { prompt: 'Global semiconductor fabrication output', target: 'increased', wrong: ['was increased itself', 'had been increasing itself', 'was by increase'], context: 'dramatically following the introduction of automated cleanroom lithography.', note: 'Ergative verb "increase" functioning intransitively with passive meaning.' },
        { prompt: 'The thick alpine glacier ice', target: 'melted', wrong: ['was melted by itself', 'melted itself', 'has been melted itself'], context: 'rapidly under unseasonably intense solar irradiance.', note: 'Ergative verb "melt" describing physical change of state.' },
        { prompt: 'Her latest sociological treatise', target: 'reads', wrong: ['is read by', 'reads itself', 'is reading'], context: 'exceptionally well, seamlessly weaving quantitative data with human narratives.', note: 'Middle voice: "reads exceptionally well".' },
        { prompt: 'The automated laboratory airlock door', target: 'closed', wrong: ['was closed itself', 'closed itself', 'did closed'], context: 'smoothly as the decontamination cycle began.', note: 'Ergative verb "close".' },
        { prompt: 'Photovoltaic conversion efficiency has', target: 'improved', wrong: ['been improved itself', 'improved itself', 'being improved'], context: 'steadily across all commercial solar cell tiers.', note: 'Ergative verb "improve" in present perfect.' },
        { prompt: 'This durable synthetic fabric', target: 'washes', wrong: ['is washed itself', 'washes itself', 'is washing'], context: 'easily and dries in under thirty minutes without wrinkling.', note: 'Middle voice: "washes easily".' },
        { prompt: 'The pressurized glass container', target: 'shattered', wrong: ['was shattered itself', 'shattered itself', 'shattering was'], context: 'when the internal thermal gradient exceeded tolerance limits.', note: 'Ergative verb "shatter".' },
        { prompt: 'The liquid reagent', target: 'boiled', wrong: ['was boiled itself', 'boiled itself', 'was boiling itself'], context: 'at a substantially lower temperature under reduced atmospheric pressure.', note: 'Ergative verb "boil".' }
      ];

    case 'b4_ellipsis_clean_omission':
      return [
        { prompt: 'Dr. Alvarez has published four papers in prestigious journals, and Dr. Foster', target: 'has three.', wrong: ['has published three of them.', 'has did three.', 'did published three.'], context: '', note: 'Gapping ellipsis: omitting repeated verb participle "published".' },
        { prompt: 'You are cordially invited to visit our quantum computing cleanroom if you', target: 'wish to.', wrong: ['wish to it.', 'wish to visit it so.', 'wish doing.'], context: '', note: 'To-ellipsis: retaining infinitive particle "to" while omitting the verb phrase.' },
        { prompt: 'Some committee members voted in favor of the urban zoning amendment, while others', target: 'did not.', wrong: ['did not vote in favor of it.', 'did not do so it.', 'not did.'], context: '', note: 'Auxiliary ellipsis: "did not".' },
        { prompt: 'The initial machine learning training run took thirty hours, but the optimized pipeline', target: 'took only eight.', wrong: ['took only eight hours to run.', 'did take eight hours doing so.', 'did only eight.'], context: '', note: 'Clean nominal/adverbial ellipsis.' },
        { prompt: 'She declined the administrative directorship, although she was repeatedly encouraged', target: 'to.', wrong: ['to it.', 'to do it so.', 'to doing.'], context: '', note: 'To-ellipsis following passive infinitive verb.' },
        { prompt: 'Marcus cannot attend the international genomics conference, but Elena', target: 'can.', wrong: ['can attend it too.', 'can do so attending.', 'can attend to.'], context: '', note: 'Modal ellipsis: "can".' },
        { prompt: 'They haven\'t calibrated the secondary spectrograph yet, but they plan', target: 'to this afternoon.', wrong: ['to calibrate it this afternoon.', 'to doing it this afternoon.', 'to do so it this afternoon.'], context: '', note: 'To-ellipsis with time adverbial.' },
        { prompt: 'The senior engineers approved the technical blueprint, and the safety inspectors', target: 'did as well.', wrong: ['did approved as well.', 'did do so as well.', 'approved it as well too.'], context: '', note: 'Auxiliary ellipsis with "did as well".' }
      ];

    case 'b4_substitution_so_do_so_one':
      return [
        { prompt: 'The department chair requested the researchers to re-evaluate their raw datasets, and they', target: 'did so', wrong: ['did it so', 'did them', 'made so'], context: 'promptly before submitting the final report.', note: '"Did so" replaces the dynamic verb phrase "re-evaluated their raw datasets".' },
        { prompt: 'The thermal conductivity of carbon nanotube films is far superior to', target: 'that of', wrong: ['the one of', 'those of', 'which of'], context: 'traditional electrolytic copper foils.', note: '"That of" replaces singular noun "the thermal conductivity".' },
        { prompt: 'Will the European Space Agency deploy the lunar probe before the winter solstice? Ground controllers certainly', target: 'hope so.', wrong: ['hope it so.', 'hope that.', 'hope to.'], context: '', note: 'Clause substitution after "hope" -> "hope so".' },
        { prompt: 'Our data science group evaluated five algorithmic architectures and selected the', target: 'one with', wrong: ['that with', 'those with', 'which with'], context: 'the highest statistical precision.', note: 'Singular nominal substitution -> "the one with".' },
        { prompt: 'The processing capabilities of modern quantum processors completely overshadow', target: 'those of', wrong: ['that of', 'the ones of', 'them of'], context: 'conventional binary silicon supercomputers.', note: '"Those of" replaces plural noun "the processing capabilities".' },
        { prompt: 'If you are required to submit an amended tax return, please', target: 'do so', wrong: ['do it so', 'make so', 'do such'], context: 'before the statutory deadline.', note: 'Verb phrase substitution -> "do so".' },
        { prompt: 'Is the new semiconductor fabrication plant operating at full capacity? The operations director believes', target: 'not.', wrong: ['no.', 'it not.', 'not so.'], context: '', note: 'Negative clause substitution after "believe" -> "believes not" (or "doesn\'t believe so").' },
        { prompt: 'The architectural challenges of designing high-speed rail tunnels are distinct from', target: 'those of', wrong: ['that of', 'the ones of', 'them of'], context: 'conventional vehicular subterranean passageways.', note: '"Those of" replacing plural noun "the architectural challenges".' }
      ];

    case 'b4_it_clefts_focus':
      return [
        { prompt: 'It was Dr. Rosalind Franklin', target: 'whose crystallographic images', wrong: ['that her crystallographic images', 'which crystallographic images', 'whom crystallographic images'], context: 'unlocked the double helix structure of DNA.', note: 'It-cleft focusing on a possessive agent -> "whose crystallographic images".' },
        { prompt: 'It was during the global financial crisis of 2008', target: 'that the clean-tech enterprise', wrong: ['when the clean-tech enterprise', 'which the clean-tech enterprise', 'in which the clean-tech enterprise'], context: 'was originally incorporated.', note: 'It-cleft focusing on time takes "that" in formal grammar.' },
        { prompt: 'It is through rigorous interdisciplinary collaboration', target: 'that scientific breakthroughs', wrong: ['which scientific breakthroughs', 'where scientific breakthroughs', 'how scientific breakthroughs'], context: 'are most rapidly achieved.', note: 'It-cleft focusing on method/manner takes "that".' },
        { prompt: 'It was not until the second phase of clinical testing', target: 'that the therapeutic efficacy', wrong: ['when the therapeutic efficacy', 'which the therapeutic efficacy', 'then the therapeutic efficacy'], context: 'became incontrovertibly evident.', note: 'It was not until... that structure.' },
        { prompt: 'It was the chief systems architect', target: 'who identified', wrong: ['which identified', 'whom identified', 'whose identified'], context: 'the vulnerability in the cryptographic handshake protocol.', note: 'It-cleft focusing on a person subject -> "who identified" (or that).' },
        { prompt: 'It is the preservation of biodiversity', target: 'that motivates', wrong: ['which motivates', 'what motivates', 'who motivates'], context: 'the team\'s longitudinal ecological research in the Amazon basin.', note: 'It-cleft focusing on an abstract object/noun takes "that".' },
        { prompt: 'It was only after reviewing the high-speed telemetry data', target: 'that flight engineers discovered', wrong: ['when flight engineers discovered', 'which flight engineers discovered', 'then flight engineers discovered'], context: 'the aerodynamic flutter anomaly.', note: 'It was only after... that.' },
        { prompt: 'It was in the historic city of Kyoto', target: 'that the landmark environmental treaty', wrong: ['where the landmark environmental treaty', 'which the landmark environmental treaty', 'in which the landmark environmental treaty'], context: 'was drafted in 1997.', note: 'It-cleft focusing on place standardly takes "that" in prescriptive grammar.' }
      ];

    case 'b4_wh_clefts_pseudo_clefts':
      return [
        { prompt: '', target: 'What the international consortium requires', wrong: ['Which the international consortium requires', 'That the international consortium requires', 'All what the consortium requires'], context: 'is a harmonized cross-border carbon pricing framework.', note: 'Wh-cleft subject clause: "What the international consortium requires is...".' },
        { prompt: '', target: 'What the biomedical engineers did was', wrong: ['Which the biomedical engineers did was', 'What did the biomedical engineers was', 'That the biomedical engineers did was'], context: 'develop an organ-on-a-chip platform for drug screening.', note: 'Action wh-cleft: "What the engineers did was develop...".' },
        { prompt: '', target: 'All that the research team needs', wrong: ['What that the research team needs', 'All which the research team needs', 'All what the research team needs'], context: 'is access to a high-throughput cryogenic electron microscope.', note: 'Pseudo-cleft with "All that...".' },
        { prompt: '', target: 'The only thing that prevented', wrong: ['What only prevented', 'The only thing what prevented', 'All thing which prevented'], context: 'a cascading electrical blackout was the automated dispatch of utility-scale batteries.', note: 'Pseudo-cleft with "The only thing that...".' },
        { prompt: 'A comprehensive restructuring of the global supply chain', target: 'is what the trade committee recommends.', wrong: ['is which the trade committee recommends.', 'is that the trade committee recommends.', 'is what recommends the trade committee.'], context: '', note: 'Reversed wh-cleft structure.' },
        { prompt: '', target: 'What surprised the astrophysics community', wrong: ['Which surprised the astrophysics community', 'That surprised the astrophysics community', 'What did surprise the astrophysics community'], context: 'was the extraordinary regularity of the fast radio bursts.', note: 'Wh-cleft focusing on a surprising phenomenon.' },
        { prompt: '', target: 'What she really values in a collaborator', wrong: ['Which she really values in a collaborator', 'That she really values in a collaborator', 'All what she values in a collaborator'], context: 'is intellectual curiosity and methodological integrity.', note: 'Wh-cleft subject.' },
        { prompt: '', target: 'What the municipal government should do is', wrong: ['What should the municipal government do is', 'Which the municipal government should do is', 'That the municipal government should do is'], context: 'invest aggressively in decentralized flood mitigation infrastructure.', note: 'Modal action wh-cleft.' }
      ];

    case 'b4_complex_prepositional_phrases':
      return [
        { prompt: '', target: 'In light of', wrong: ['In sight of', 'In light with', 'By light of'], context: 'recent macroeconomic indicators, the central monetary authority revised its inflation forecast upward.', note: '"In light of" means taking into account / given the context of.' },
        { prompt: 'The board of directors offered no definitive statements', target: 'with regard to', wrong: ['with regard of', 'with regards at', 'in regard with'], context: 'the proposed cross-border corporate merger.', note: '"With regard to" (never with regards to in formal style).' },
        { prompt: '', target: 'By virtue of', wrong: ['By virtue to', 'In virtue of', 'With virtue of'], context: 'her distinguished record in treaty negotiations, Ambassador Morales was appointed special envoy.', note: '"By virtue of" means because of / on the basis of.' },
        { prompt: 'The biochemical research facility operates in strict', target: 'accordance with', wrong: ['accordance to', 'accordance of', 'accordance by'], context: 'international biosafety level 4 standards.', note: '"In accordance with" means in compliance with.' },
        { prompt: '', target: 'In terms of', wrong: ['In terms to', 'With terms of', 'By terms of'], context: 'computational throughput per watt, neuromorphic microprocessors represent a paradigm shift.', note: '"In terms of" indicates domain or metric of evaluation.' },
        { prompt: 'The emergency municipal budget was deployed', target: 'in tandem with', wrong: ['in tandem to', 'on tandem with', 'with tandem of'], context: 'federal disaster relief funding.', note: '"In tandem with" means in conjunction with / together with.' },
        { prompt: 'The rapid economic expansion was achieved', target: 'at the expense of', wrong: ['at the expense to', 'on the expense of', 'with the expense of'], context: 'critical groundwater reserves.', note: '"At the expense of" means to the detriment of.' },
        { prompt: '', target: 'In view of', wrong: ['In view to', 'With view of', 'By view of'], context: 'the imminent gale-force storm, the port authority suspended all maritime vessel departures.', note: '"In view of" means considering / given the circumstance.' }
      ];

    case 'b4_concession_exemplification_markers':
      return [
        { prompt: 'Decarbonization of municipal transit is progressing rapidly,', target: 'as evidenced by', wrong: ['as evidenced with', 'as evident of', 'as evidencing by'], context: 'the wholesale electrification of the city\'s public bus fleet.', note: '"As evidenced by" introduces concrete data backing an assertion.' },
        { prompt: 'The acquisition was', target: 'ostensibly', wrong: ['invariably', 'inasmuch', 'thereby'], context: 'undertaken to achieve operational synergies, but was primarily driven by tax advantages.', note: '"Ostensibly" indicates surface justification versus deeper reality.' },
        { prompt: 'High-altitude sub-zero meteorological conditions are', target: 'invariably', wrong: ['ostensibly', 'albeit', 'inasmuch'], context: 'unforgiving to ill-prepared mountaineers.', note: '"Invariably" means without exception / always.' },
        { prompt: 'The central bank\'s sovereign bond repurchase program is,', target: 'in effect,', wrong: ['in factually,', 'on effect,', 'by effect,',], context: 'a massive liquidity injection into private commercial credit markets.', note: '"In effect," means practically speaking / in actual outcome.' },
        { prompt: 'This genomic mapping breakthrough is', target: 'arguably', wrong: ['invariably', 'ostensibly', 'notwithstanding'], context: 'the most momentous discovery in molecular oncology over the past quarter-century.', note: '"Arguably" expresses a strong, defensible thesis.' },
        { prompt: 'Renewable energy adoption expanded nationwide,', target: 'most notably in', wrong: ['most noting in', 'as notable by', 'notable with'], context: 'coastal regions endowed with exceptional offshore wind currents.', note: '"Most notably in" highlights a specific prime example.' },
        { prompt: 'The economic sanctions proved,', target: 'to all intents and purposes,', wrong: ['to all intents of purposes,', 'for all intents and purpose,', 'in all intents and purpose,'], context: 'ineffective due to widespread third-party transshipment.', note: '"To all intents and purposes," means practically / for all practical considerations.' },
        { prompt: 'The new encryption protocol is theoretically sound,', target: 'albeit unproven', wrong: ['despite unproven', 'whereas unproven', 'although unproven of'], context: 'at hyperscale distributed server deployment.', note: '"Albeit" introducing an adjective modifier.' }
      ];

    default:
      return [
        { prompt: 'The board recommended that the trial', target: 'be suspended', wrong: ['is suspended', 'was suspended', 'to suspend'], context: 'immediately.', note: 'Mandative subjunctive.' },
        { prompt: '', target: 'Seldom have scientists', wrong: ['Seldom scientists have', 'Seldom did have', 'Seldom have seen'], context: 'witnessed such rapid intensification.', note: 'Negative inversion.' }
      ];
  }
}

function createB4RotatedQuestions(
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
      question: `Question ${i + 1} of 20 (Star #${star}) • Level B4`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on the grammatical rule for this topic.`,
      ruleTip: item.note
    });
  }

  return questions;
}
