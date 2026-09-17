import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

// ==========================================
// LEVEL C1: CATEGORIES & TOPICS DEFINITION
// ==========================================

export type C1CategoryTab =
  | 'Negative & Correlative Inversions'
  | 'Absolute Participles & Modifiers'
  | 'Information Packaging & Fronting'
  | 'Formulaic Subjunctive & Double Clefts'
  | 'Epistemic Stance & Hedging';

export const C1_CATEGORIES: C1CategoryTab[] = [
  'Negative & Correlative Inversions',
  'Absolute Participles & Modifiers',
  'Information Packaging & Fronting',
  'Formulaic Subjunctive & Double Clefts',
  'Epistemic Stance & Hedging'
];

// Category 1: Negative & Correlative Inversions
export const C1_INVERSIONS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c1_correlative_temporal_inversions',
    title: 'Correlative Temporal Inversions (No sooner... than, Scarcely... when)',
    subtitle: 'Structuring high-impact chronological immediacy with inverted past auxiliaries',
    badge: 'Correlative Inversion',
    description: 'Correlative temporal inversion is a hallmark of C1 advanced narrative and analytical prose. When pairs like "No sooner... than", "Scarcely... when / before", "Hardly... when", and "Barely... when" are fronted, the main clause undergoes subject-auxiliary inversion using Past Perfect "had + Subject + V3": 1. "No sooner had the treaty been ratified than cross-border tariffs collapsed." 2. "Scarcely had the rocket cleared the launch tower when telemetry confirmed orbital insertion."',
    keyRule: '"No sooner" pairs with "than" (NEVER "when"). "Scarcely / Hardly / Barely" pair with "when" or "before" (NEVER "than"). Auxiliary is inverted.',
    formula: 'No sooner had + S + V3 + than + S + V2 | Scarcely / Hardly had + S + V3 + when + S + V2',
    examples: [
      'No sooner had the pharmaceutical company released its trial dataset than independent biostatisticians corroborated the efficacy.',
      'Scarcely had the expedition reached the high-altitude plateau when an unforeseen blizzard engulfed their base camp.',
      'Hardly had the central bank announced the emergency interest rate reduction when bond yields plummeted across global exchanges.',
      'Barely had the spacecraft exited lunar orbit when deep-space telemetry antennas re-established high-bandwidth communications.',
      'No sooner had the sovereign debt default been announced than international credit rating agencies downgraded the sovereign bond rating.'
    ]
  },
  {
    id: 'c1_restrictive_condition_inversions',
    title: 'Restrictive Condition Inversions (Not until, Only after, On no account)',
    subtitle: 'Inverting the main matrix clause after fronted temporal and conditional restrictions',
    badge: 'Matrix Inversion',
    description: 'When structures introduced by "Not until...", "Only after...", "Only when...", "Only by...", and "On no account..." open a sentence, notice that inversion occurs in the MAIN matrix clause, not the dependent time clause: 1. "Not until the second audit was completed DID the CFO realize the accounting shortfall." 2. "Only after extensive clinical trials were concluded DID the agency grant marketing approval." 3. "On no account should safety interlocks be bypassed."',
    keyRule: 'Not until / Only after + [Normal Clause Order] + [INVERTED MATRIX CLAUSE: Auxiliary + Subject + Verb]. "On no account" inverts immediately.',
    formula: 'Not until / Only after + S + V, [Auxiliary + S + V(main)] | On no account + Auxiliary + S + V',
    examples: [
      'Not until the third peer-reviewed replication study was published did the scientific consensus shift in favor of the theory.',
      'Only after inspecting the fractured rotor shaft under an electron microscope did metallurgical engineers identify the fatigue fracture.',
      'On no account should hazardous bio-contaminants be discarded without strict thermal autoclaving.',
      'Only by integrating decentralized microgrids with utility-scale battery storage can metropolitan regions guarantee electrical resilience.',
      'Not until all regional voting precincts had reported their certified tallies was the election officially declared conclusive.'
    ]
  }
];

// Category 2: Absolute Participles & Modifiers
export const C1_PARTICIPLES_MODIFIERS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c1_absolute_participle_constructions',
    title: 'Absolute Participle Constructions (Independent Subject Participles)',
    subtitle: 'Compact clausal compression where the participle retains its own overt independent subject',
    badge: 'Absolute Participle',
    description: 'An absolute construction is a non-finite participial phrase that has its own overt subject, distinct from the subject of the main matrix clause. It is syntactically independent (absolute) and provides background circumstances, cause, or concurrent condition without needing subordinating conjunctions (because, since, as): "The symposium having concluded, the delegates adjourned to the banquet hall" (Subject of participle: The symposium; Subject of main clause: the delegates).',
    keyRule: 'Noun / Pronoun + Participle (V-ing / Having + V3 / V3) + Comma + Main Clause. Both clauses have DIFFERENT subjects. This is NOT a dangling modifier!',
    formula: '[Noun A + Participle Phrase], [Noun B + Main Verb + Object]',
    examples: [
      'The parliamentary session having adjourned for the summer recess, ministers returned to their respective constituencies.',
      'All emergency reserves having been exhausted during the financial crisis, the municipality sought state intervention.',
      'Weather permitting, the deep-sea autonomous submersible will commence its ocean floor acoustic mapping transect at dawn.',
      'His theoretical premises being fundamentally flawed, the entire mathematical proof collapsed upon rigorous scrutiny.',
      'The initial phase of the clean-tech incubator having proved successful, venture capital firms doubled their financial commitments.'
    ]
  },
  {
    id: 'c1_dangling_misplaced_modifier_elimination',
    title: 'Dangling & Misplaced Modifier Elimination',
    subtitle: 'Ensuring immaculate syntactic alignment between introductory participle phrases and matrix subjects',
    badge: 'Modifier Precision',
    description: 'A dangling modifier occurs when an introductory participle phrase does not logically or syntactically modify the grammatical subject of the main clause. In C1 writing, immaculate syntactic alignment is mandatory: INCORRECT: "Having analyzed the blood samples, the diagnostic report was written by Dr. Vance" (The report didn\'t analyze blood!). CORRECT: "Having analyzed the blood samples, Dr. Vance wrote the diagnostic report."',
    keyRule: 'The noun immediately following an introductory participle phrase MUST be the logical agent/experiencer of that action.',
    formula: '[Introductory Participle Phrase], [LOGICAL AGENT as Matrix Subject] + Verb...',
    examples: [
      'Having synthesized the novel superconductor material, the researchers immediately conducted magnetic levitation trials.',
      'While examining the fourteenth-century manuscript under multispectral imaging, the paleographer discovered a hidden palimpsest.',
      'Exhausted after forty-eight hours of continuous disaster triage, the surgical staff were finally relieved by a fresh medical unit.',
      'To prevent catastrophic structural resonance, the civil engineers installed tuned mass dampers in the skyscraper\'s crown.',
      'Upon entering the cleanroom facility, all personnel must don certified positive-pressure protective suits.'
    ]
  }
];

// Category 3: Information Packaging & Fronting
export const C1_INFORMATION_PACKAGING_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c1_locative_directional_fronting',
    title: 'Locative & Directional Fronting Inversion (Full Verb Inversion)',
    subtitle: 'Fronting prepositional phrases of place and direction with full intransitive verb inversion',
    badge: 'Locative Fronting',
    description: 'In literary, descriptive, and scholarly prose, fronting a prepositional phrase of location or direction causes FULL verb inversion (the entire main verb moves before the subject, without using "do/does/did"): 1. "At the summit of the ridge stood an ancient astronomical observatory." 2. "Into the international arena stepped a brilliant young diplomat." 3. "Beneath the permafrost lies a massive reserve of organic methane." Note: Full inversion only occurs if the subject is a NOUN (if the subject is a pronoun, do not invert: "Down he fell").',
    keyRule: 'Prepositional Place Phrase + Full Intransitive Verb + Noun Subject. (Do NOT invert if subject is a pronoun: "Into the hall he walked").',
    formula: '[Prepositional Place/Direction Phrase] + [Intransitive Verb (stood/lies/hung)] + [Noun Subject]',
    examples: [
      'At the epicenter of the archaeological excavation stood the monumental monolithic gate of the ancient citadel.',
      'Beneath the Antarctic ice shelf lies a vast subglacial network of pristine freshwater lakes.',
      'Into the vacuum of leadership stepped an experienced constitutional jurist committed to administrative reform.',
      'Along the pristine coastal headland stretches a protected sanctuary for endangered migratory seabirds.',
      'High above the alpine valley hung a dense canopy of cumulus clouds signaling an imminent blizzard.'
    ]
  },
  {
    id: 'c1_comparative_fronting_end_weight',
    title: 'Comparative Fronting & The Principles of End-Weight & End-Focus',
    subtitle: 'Strategically fronting comparatives (Such was..., So severe was...) and positioning complex constituents at sentence ends',
    badge: 'Comparative Fronting & End-Weight',
    description: '1. Comparative Fronting: "So intense was the seismic shock that instruments across the continent registered the tremor." "Such was the complexity of the quantum algorithm that only supercomputers could execute it." 2. End-Weight & End-Focus: English sentences naturally place given/known information at the beginning and the newest, heaviest, most semantically crucial information at the end.',
    keyRule: '"So + Adjective + was/were + Subject + that-clause". "Such + was/were + Subject + that-clause". Places heavy elements at the end for maximum punch.',
    formula: 'So + [Adj] + [was / were] + S + that-clause | Such + [was / were] + S + that-clause',
    examples: [
      'So severe was the cryogenic cooling malfunction that the particle accelerator had to be shut down immediately.',
      'Such was the eloquence of her closing argument that the tribunal ruled unanimously in favor of her client.',
      'So intricate were the genetic regulatory networks that decades of molecular modeling were required to map them.',
      'Such was the public outcry following the corporate disclosure that the entire executive board tendered their resignations.',
      'So dense was the interstellar dust cloud that optical telescopes could not penetrate its central protostellar core.'
    ]
  }
];

// Category 4: Formulaic Subjunctive & Double Clefts
export const C1_SUBJUNCTIVE_CLEFTS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c1_formulaic_fossilized_subjunctive',
    title: 'Formulaic & Fossilized Subjunctive Idioms',
    subtitle: 'Be that as it may, Suffice it to say, Come what may, Heaven forbid, Far be it from me',
    badge: 'Formulaic Subjunctive',
    description: 'English retains invariant fossilized subjunctive expressions from earlier stages of the language that are ubiquitous in sophisticated diplomatic, legal, and academic discourse: 1. "Be that as it may" (regardless of whether that is true; nevertheless). 2. "Suffice it to say (that)" (it is enough to say). 3. "Come what may" (whatever happens). 4. "Far be it from me to + verb" (I certainly do not presume to). 5. "So be it" (let it be accepted).',
    keyRule: 'These formulaic subjunctive idioms are structurally fixed and do not take normal agreement morphemes (never say "suffices it to say" or "is that as it may").',
    formula: 'Be that as it may, Clause | Suffice it to say that + Clause | Come what may, Clause',
    examples: [
      'Be that as it may, the macroeconomic implications of the policy cannot be disregarded by fiscal planners.',
      'Suffice it to say that the initial clinical trials exceeded the pharmacological team\'s most optimistic expectations.',
      'Come what may, the polar research station will maintain continuous atmospheric data collection throughout the winter.',
      'Far be it from me to question the esteemed professor\'s methodology, but the sample size appears statistically inadequate.',
      'If the advisory committee insists on terminating the particle physics experiment, then so be it.'
    ]
  },
  {
    id: 'c1_double_clefts_complex_focus',
    title: 'Double Clefts & Multi-Layered Focus Packaging',
    subtitle: 'Orchestrating simultaneous thematic prominence across multiple clausal constituents',
    badge: 'Double Clefts',
    description: 'Double cleft structures combine two clefting strategies (e.g., an It-cleft combined with a Wh-cleft, or multiple focus frontings) to simultaneously contrast two distinct ideas or highlight both the agent and the exact method/outcome: "What began as a modest laboratory investigation was what ultimately revolutionized semiconductor lithography."',
    keyRule: 'Combines a Wh-clause subject with an emphatic predicate complement for multi-dimensional rhetorical focus.',
    formula: 'What + S1 + V1 + was + [that / what / how] + S2 + V2',
    examples: [
      'What began as a localized agricultural study was what eventually led to the discovery of nitrogen-fixing bacteria.',
      'It was not only the scarcity of raw lithium that hindered production, but it was also how the supply chain was managed.',
      'What the diplomatic delegation sought to avoid was precisely what transpired during the bilateral summit.',
      'What transformed the regional economy was not merely industrial automation, but how public education adapted to it.',
      'It was through persistent investigative journalism that the fraudulent offshore transactions were brought to light.'
    ]
  }
];

// Category 5: Epistemic Stance & Hedging
export const C1_EPISTEMIC_STANCE_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c1_academic_hedging_epistemic_stance',
    title: 'Academic Hedging & Epistemic Stance Clusters',
    subtitle: 'Calibrating certainty, claim strength, and critical distance in scholarly argumentation',
    badge: 'Epistemic Hedging',
    description: 'Master the delicate calibration of academic claims through multi-layered epistemic hedging: 1. Epistemic Adverbs & Modals: "arguably", "ostensibly", "conceivably", "plausibly", "may well", "cannot easily be". 2. Hedging Verbal Formulas: "The evidence would seem to indicate", "It is tempting to attribute X to Y, yet...", "The data tend to suggest that". 3. Attributive Stance: "to all intents and purposes", "in large measure", "for the most part".',
    keyRule: 'Never make unhedged, dogmatic universal assertions in C1 academic English; always calibrate the claim with nuanced epistemic markers.',
    formula: 'The findings [would seem to indicate / tend to suggest / may arguably reflect] that + Clause',
    examples: [
      'The preliminary genomic data would seem to indicate that horizontal gene transfer occurs far more frequently than previously assumed.',
      'The observed decrease in atmospheric aerosols may well be attributable to the transition toward renewable energy.',
      'While the statistical correlation is ostensibly robust, confounding socioeconomic variables cannot easily be discounted.',
      'This archaeological stratum conceivably represents the earliest evidence of metallurgical smelting in the Aegean.',
      'The empirical findings tend to support the hypothesis that sleep architecture plays a crucial role in synaptic pruning.'
    ]
  }
];

// Helper to bundle all C1 topics
export function getC1TopicsForCategory(category: C1CategoryTab): GenericGrammarTopicItem[] {
  switch (category) {
    case 'Negative & Correlative Inversions':
      return C1_INVERSIONS_TOPICS;
    case 'Absolute Participles & Modifiers':
      return C1_PARTICIPLES_MODIFIERS_TOPICS;
    case 'Information Packaging & Fronting':
      return C1_INFORMATION_PACKAGING_TOPICS;
    case 'Formulaic Subjunctive & Double Clefts':
      return C1_SUBJUNCTIVE_CLEFTS_TOPICS;
    case 'Epistemic Stance & Hedging':
      return C1_EPISTEMIC_STANCE_TOPICS;
    default:
      return C1_INVERSIONS_TOPICS;
  }
}

// ==========================================
// 20-STAR QUESTIONS GENERATOR FOR LEVEL C1
// ==========================================

export function getC1StarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const pool = getC1QuestionPool(topicId);
  return createC1RotatedQuestions(pool, starNumber, mSeed, topicId);
}

interface QuestionPoolItem {
  prompt: string;
  target: string;
  wrong: string[];
  context: string;
  note: string;
}

function getC1QuestionPool(topicId: string): QuestionPoolItem[] {
  switch (topicId) {
    case 'c1_correlative_temporal_inversions':
      return [
        { prompt: '', target: 'No sooner had the biopharmaceutical firm released', wrong: ['No sooner the firm had released', 'Scarcely had the firm released than', 'No sooner had released the firm'], context: 'its phase 3 clinical trial dataset than independent researchers corroborated the therapeutic efficacy.', note: 'Correlative temporal inversion: "No sooner had + Subject + V3... than".' },
        { prompt: '', target: 'Scarcely had the alpine expedition reached', wrong: ['Scarcely the expedition had reached', 'Scarcely had reached the expedition', 'No sooner had the expedition reached when'], context: 'the high-altitude plateau when an unforeseen blizzard engulfed the base camp.', note: '"Scarcely had + Subject + V3... when".' },
        { prompt: '', target: 'Hardly had the central monetary authority announced', wrong: ['Hardly the central monetary authority announced', 'Hardly had announced the central authority', 'No sooner had the central authority announced when'], context: 'the interest rate reduction when sovereign bond yields plummeted globally.', note: '"Hardly had + Subject + V3... when".' },
        { prompt: '', target: 'Barely had the deep-space probe cleared', wrong: ['Barely the deep-space probe had cleared', 'Barely had cleared the probe', 'No sooner had the probe cleared when'], context: 'the planetary radiation belt before high-gain telemetry antennas re-established full signal lock.', note: '"Barely had + Subject + V3... before".' },
        { prompt: '', target: 'No sooner had the sovereign debt restructuring been finalized', wrong: ['No sooner the debt restructuring had finalized', 'Scarcely had the restructuring been finalized than', 'No sooner had finalized the restructuring'], context: 'than international rating agencies revised the national economic outlook upward.', note: 'Passive correlative inversion: "No sooner had X been finalized than...".' },
        { prompt: '', target: 'Hardly had the keynote address concluded', wrong: ['Hardly the keynote address had concluded', 'Hardly had concluded the keynote address', 'Hardly did the keynote address concluded'], context: 'when the symposium hall opened for technical questions.', note: 'Hardly had + subject + V3... when.' },
        { prompt: '', target: 'Scarcely had the deep-sea submersible descended', wrong: ['Scarcely the submersible had descended', 'Scarcely did the submersible descend than', 'No sooner had the submersible descended when'], context: 'to the hydrothermal vent zone when its acoustic sonar detected a new hydrothermal fissure.', note: 'Scarcely had + subject + V3... when.' },
        { prompt: '', target: 'No sooner had the critical cybersecurity patch deployed', wrong: ['No sooner the patch had deployed', 'Scarcely had the patch deployed than', 'No sooner did the patch deployed'], context: 'than a zero-day exploit attempt was thwarted automatically.', note: 'No sooner had + subject + V3... than.' }
      ];

    case 'c1_restrictive_condition_inversions':
      return [
        { prompt: 'Not until the third peer-reviewed replication study was published', target: 'did the scientific community accept', wrong: ['the scientific community accepted', 'did accept the scientific community', 'had the scientific community accepted'], context: 'the validity of the room-temperature superconductor claims.', note: 'Matrix inversion following "Not until...": "did the scientific community accept".' },
        { prompt: 'Only after inspecting the fractured rotor shaft under an electron microscope', target: 'did the failure analysis engineers identify', wrong: ['the failure analysis engineers identified', 'did identify the failure analysis engineers', 'had the engineers identified'], context: 'the subsurface micro-fractures.', note: 'Matrix inversion following "Only after...": "did the engineers identify".' },
        { prompt: '', target: 'On no account should pressurized chemical cylinders', wrong: ['On no account pressurized chemical cylinders should', 'On no account should be stored pressurized cylinders', 'On no account pressurized cylinders'], context: 'be transported without safety valve caps secured.', note: 'Immediate negative inversion: "On no account should [subject] be...".' },
        { prompt: 'Only by integrating decentralized microgrids with utility-scale battery banks', target: 'can modern metropolitan regions guarantee', wrong: ['modern metropolitan regions can guarantee', 'can guarantee modern metropolitan regions', 'modern regions guarantee can'], context: 'seamless electrical resilience during extreme weather anomalies.', note: 'Matrix modal inversion following "Only by...": "can metropolitan regions guarantee".' },
        { prompt: 'Not until all regional voting precincts had submitted their certified counts', target: 'was the contentious referendum officially declared', wrong: ['the contentious referendum was officially declared', 'was officially declared the contentious referendum', 'did the referendum was officially declared'], context: 'valid by the electoral commission.', note: 'Passive matrix inversion: "was the referendum declared".' },
        { prompt: 'Only when ambient temperatures dropped below minus forty degrees', target: 'did the cryogenic insulation exhibit', wrong: ['the cryogenic insulation exhibited', 'did exhibit the cryogenic insulation', 'had the insulation exhibited'], context: 'measurable thermal degradation.', note: 'Matrix inversion after "Only when...": "did the insulation exhibit".' },
        { prompt: '', target: 'Under no circumstances are laboratory personnel permitted', wrong: ['Under no circumstances laboratory personnel are permitted', 'Under no circumstances are permitted laboratory personnel', 'Under no circumstances personnel are permitted'], context: 'to handle live viral vectors without biosafety level 3 isolation gear.', note: 'Present passive inversion: "Under no circumstances are [subject] permitted".' },
        { prompt: 'Only after weeks of intensive diplomatic mediation', target: 'did the bordering sovereign states agree', wrong: ['the bordering sovereign states agreed', 'did agree the bordering sovereign states', 'had the states agreed'], context: 'to establish a demilitarized biodiversity corridor.', note: 'Matrix inversion: "did the states agree".' }
      ];

    case 'c1_absolute_participle_constructions':
      return [
        { prompt: 'The parliamentary session', target: 'having adjourned for the summer recess,', wrong: ['having been adjourn for the summer,', 'being adjourned for the summer have,', 'adjourning been for the summer,'], context: 'cabinet ministers returned to their respective regional constituencies.', note: 'Absolute participle with independent subject: "The parliamentary session having adjourned...".' },
        { prompt: 'All emergency liquidity reserves', target: 'having been exhausted during the crisis,', wrong: ['having exhausted during the crisis,', 'being exhaust during the crisis,', 'exhausted having been during the crisis,'], context: 'the municipal council petitioned the central government for fiscal relief.', note: 'Passive perfect absolute participle: "All reserves having been exhausted...".' },
        { prompt: '', target: 'Weather permitting,', wrong: ['Weather permits,', 'Weather having permit,', 'Weather being permitted to,'], context: 'the high-altitude atmospheric balloon will launch into the stratosphere at sunrise.', note: 'Idiomatic absolute construction: "Weather permitting,".' },
        { prompt: 'His foundational theoretical premises', target: 'being demonstrably flawed,', wrong: ['having be demonstrably flawed,', 'flawed being demonstrably,', 'to be demonstrably flawed,'], context: 'the entire mathematical proof collapsed under peer review.', note: 'Present absolute participle expressing reason: "His premises being demonstrably flawed,".' },
        { prompt: 'The initial pilot phase of the clean-tech incubator', target: 'having proved successful,', wrong: ['having been prove successful,', 'proving been successful,', 'to have proved successful,'], context: 'institutional venture capital funds doubled their funding allocations.', note: 'Active perfect absolute participle: "The pilot phase having proved successful,".' },
        { prompt: 'The treaty negotiations', target: 'having stalled over maritime fishing rights,', wrong: ['stalling been over maritime rights,', 'having been stall over maritime rights,', 'stalled having over maritime rights,'], context: 'both delegations returned to their capitals for consultation.', note: 'Active perfect absolute construction -> "having stalled over...".' },
        { prompt: 'Time', target: 'being of the essence in acute ischemic stroke,', wrong: ['having be of the essence,', 'is being of the essence,', 'to be of the essence,'], context: 'emergency paramedics initiated thrombolytic therapy en route to the hospital.', note: 'Idiomatic absolute clause: "Time being of the essence...".' },
        { prompt: 'The astronomical observatory instrumentation', target: 'having been calibrated meticulously,', wrong: ['having calibrate meticulously,', 'calibrating been meticulously,', 'being calibrate meticulously,'], context: 'the astrophysicists initiated their deep-sky spectroscopic survey.', note: 'Passive perfect absolute construction.' }
      ];

    case 'c1_dangling_misplaced_modifier_elimination':
      return [
        { prompt: 'Having synthesized the novel high-temperature superconductor,', target: 'the materials researchers immediately conducted', wrong: ['magnetic levitation trials were immediately conducted by the researchers', 'the magnetic levitation trials immediately conducted', 'the immediate conduction of trials was performed by researchers'], context: 'comprehensive magnetic levitation experiments in the laboratory.', note: 'Subject must logically be the agent who synthesized the material -> "the materials researchers immediately conducted".' },
        { prompt: 'While examining the medieval manuscript under multispectral lighting,', target: 'the paleographer identified', wrong: ['a hidden palimpsest was identified by the paleographer', 'the identification of a hidden palimpsest occurred', 'a concealed Latin text was revealed to the paleographer'], context: 'an underlying erasure containing ancient philosophical commentaries.', note: 'Subject must be the person examining the manuscript -> "the paleographer identified".' },
        { prompt: 'Exhausted after seventy-two hours of continuous emergency triage,', target: 'the surgical team were finally relieved', wrong: ['a fresh relief team finally took over from the surgeons', 'the conclusion of the shift was welcomed by the surgical team', 'relief was finally provided to the exhausted surgeons'], context: 'by a secondary medical deployment unit.', note: 'Modifier "Exhausted" must grammatically modify "the surgical team".' },
        { prompt: 'To prevent catastrophic harmonic structural resonance,', target: 'the structural engineers installed', wrong: ['a heavy tuned mass damper was installed in the skyscraper', 'the installation of a tuned mass damper occurred', 'tuned mass dampers were positioned by engineers'], context: 'a 600-ton tuned mass damper within the crown of the supertall tower.', note: 'Infinitive of purpose modifies the engineers who installed it.' },
        { prompt: 'Upon entering the biocontainment cleanroom facility,', target: 'all personnel must don', wrong: ['certified positive-pressure protective suits must be donned by personnel', 'the donning of protective gear is required of everyone', 'protective suits must be worn by all personnel'], context: 'certified positive-pressure hazmat suits.', note: 'The subject entering must be "all personnel".' },
        { prompt: 'Having reviewed the epidemiological datasets from forty regional clinics,', target: 'the public health taskforce formulated', wrong: ['a revised containment protocol was formulated by the taskforce', 'the formulation of new guidelines occurred', 'revised containment guidelines were issued'], context: 'targeted vaccination recommendations.', note: 'Subject modifying "Having reviewed" -> "the public health taskforce formulated".' },
        { prompt: 'Trained extensively in high-altitude emergency extraction,', target: 'the rescue rangers navigated', wrong: ['the hazardous glacial crevasse was navigated by rangers', 'the navigation of the glacier was accomplished successfully', 'the mountain terrain was crossed by the rescue unit'], context: 'the perilous crevasse field without incident.', note: 'Modifier must attach to "the rescue rangers navigated".' },
        { prompt: 'By utilizing advanced cryogenic electron microscopy,', target: 'the structural biologists elucidated', wrong: ['the molecular architecture of the viral capsid was elucidated', 'the elucidation of the capsid architecture occurred', 'a clearer image of the virus was obtained'], context: 'the atomic coordinates of the membrane transport protein.', note: 'Active agent subject required -> "the structural biologists elucidated".' }
      ];

    case 'c1_locative_directional_fronting':
      return [
        { prompt: 'At the epicenter of the ancient archaeological citadel', target: 'stood the monolithic granite archway', wrong: ['the monolithic granite archway stood', 'did stand the monolithic granite archway', 'was standing the monolithic archway stood'], context: 'of the imperial ceremonial precinct.', note: 'Full locative inversion: Locative Phrase + Intransitive Verb + Noun Subject -> "stood the monolithic granite archway".' },
        { prompt: 'Beneath the thick Antarctic ice sheet', target: 'lies an extensive interconnected network', wrong: ['an extensive interconnected network lies', 'does lie an extensive network', 'is lying an extensive network lies'], context: 'of pristine subglacial freshwater lakes.', note: 'Full locative inversion: "lies an extensive interconnected network".' },
        { prompt: 'Into the leadership vacuum created by the sudden resignation', target: 'stepped a distinguished constitutional scholar', wrong: ['a distinguished constitutional scholar stepped', 'did step a distinguished constitutional scholar', 'was stepping a distinguished scholar stepped'], context: 'committed to institutional transparency.', note: 'Directional fronting with full verb inversion: "stepped a distinguished constitutional scholar".' },
        { prompt: 'Along the rugged windswept headland', target: 'stretches a pristine maritime sanctuary', wrong: ['a pristine maritime sanctuary stretches', 'does stretch a pristine maritime sanctuary', 'is stretching a maritime sanctuary'], context: 'dedicated to the preservation of endangered pelagic seabirds.', note: 'Locative fronting: "stretches a pristine maritime sanctuary".' },
        { prompt: 'High above the glacial valley', target: 'hung a dense canopy of cumulus clouds', wrong: ['a dense canopy of cumulus clouds hung', 'did hang a dense canopy of clouds', 'was hanging a dense canopy of clouds hung'], context: 'heralding an impending winter blizzard.', note: 'Locative fronting: "hung a dense canopy...".' },
        { prompt: 'On the mahogany desk in the corner of the executive study', target: 'lay the classified diplomatic cables', wrong: ['the classified diplomatic cables lay', 'did lie the classified diplomatic cables', 'were lying the classified diplomatic cables lay'], context: 'concerning the border demarcation treaty.', note: 'Locative fronting: "lay the classified diplomatic cables".' },
        { prompt: 'Down the cascading mountain rapids', target: 'rushed the surging torrent', wrong: ['the surging torrent rushed', 'did rush the surging torrent', 'was rushing the surging torrent rushed'], context: 'of glacial meltwater.', note: 'Directional fronting: "rushed the surging torrent".' },
        { prompt: 'Across the southern horizon', target: 'drifted a massive atmospheric plume', wrong: ['a massive atmospheric plume drifted', 'did drift a massive atmospheric plume', 'was drifting a plume drifted'], context: 'of volcanic particulate ash.', note: 'Locative fronting: "drifted a massive atmospheric plume".' }
      ];

    case 'c1_comparative_fronting_end_weight':
      return [
        { prompt: '', target: 'So severe was the cryogenic cooling malfunction', wrong: ['So severe the cryogenic cooling malfunction was', 'So severe did the cryogenic cooling malfunction be', 'So was severe the cryogenic cooling malfunction'], context: 'that the superconducting particle accelerator had to be shut down immediately.', note: 'Comparative fronting: "So + Adj + was/were + Subject + that-clause".' },
        { prompt: '', target: 'Such was the eloquence of her closing oral argument', wrong: ['Such the eloquence of her argument was', 'Such did be the eloquence of her argument', 'Such was being the eloquence of her argument'], context: 'that the international arbitration tribunal ruled unanimously in favor of her client.', note: 'Fronting with "Such": "Such was the eloquence of... that...".' },
        { prompt: '', target: 'So intricate were the cellular signaling cascades', wrong: ['So intricate the cellular signaling cascades were', 'So intricate did the signaling cascades be', 'So were intricate the signaling cascades'], context: 'that over a decade of continuous molecular modeling was required to map their pathways.', note: 'Comparative fronting with plural subject: "So intricate were the cellular signaling cascades that...".' },
        { prompt: '', target: 'Such was the public indignation following the revelations', wrong: ['Such the public indignation was following the revelations', 'Such did the public indignation be', 'Such was following the public indignation'], context: 'that the entire corporate governance board tendered their resignations within twenty-four hours.', note: '"Such was the public indignation... that...".' },
        { prompt: '', target: 'So dense was the interstellar molecular cloud', wrong: ['So dense the interstellar molecular cloud was', 'So dense did the molecular cloud be', 'So was dense the interstellar cloud'], context: 'that spaceborne optical observatories could not penetrate its central star-forming core.', note: '"So dense was the interstellar molecular cloud that...".' },
        { prompt: '', target: 'So rapid was the macroeconomic currency devaluation', wrong: ['So rapid the currency devaluation was', 'So rapid did the devaluation be', 'So was rapid the devaluation'], context: 'that the central bank instituted immediate capital controls.', note: '"So rapid was the macroeconomic currency devaluation that...".' },
        { prompt: '', target: 'Such was the precision of the robotic microsurgical apparatus', wrong: ['Such the precision of the apparatus was', 'Such did be the precision of the apparatus', 'Such was being the precision of the apparatus'], context: 'that delicate retinal nerve fibers were reconnected without vascular trauma.', note: '"Such was the precision of the apparatus that...".' },
        { prompt: '', target: 'So profound was his contribution to theoretical physics', wrong: ['So profound his contribution was', 'So profound did his contribution be', 'So was profound his contribution'], context: 'that the international physical society created an annual medal in his honor.', note: '"So profound was his contribution that...".' }
      ];

    case 'c1_formulaic_fossilized_subjunctive':
      return [
        { prompt: '', target: 'Be that as it may,', wrong: ['Is that as it may,', 'Being that as it may,', 'Be it as that may,'], context: 'the macroeconomic ramifications of the fiscal policy cannot be disregarded by institutional investors.', note: 'Formulaic subjunctive idiom meaning "Nevertheless / regardless of that" -> "Be that as it may,".' },
        { prompt: '', target: 'Suffice it to say that', wrong: ['Suffices it to say that', 'Suffice to say it that', 'Sufficing it to say that'], context: 'the preliminary clinical results far exceeded the pharmacological team\'s most optimistic projections.', note: 'Formulaic subjunctive: "Suffice it to say that" (never "suffices").' },
        { prompt: '', target: 'Come what may,', wrong: ['Comes what may,', 'Coming what may,', 'Come what will may,'], context: 'the polar research station will sustain continuous atmospheric monitoring throughout the six-month arctic night.', note: 'Formulaic subjunctive idiom meaning "whatever happens" -> "Come what may,".' },
        { prompt: '', target: 'Far be it from me to challenge', wrong: ['Far is it from me to challenge', 'Far being from me to challenge', 'Far it be from me to challenge'], context: 'the esteemed professor\'s statistical methodology, but the sample size appears insufficient.', note: 'Formulaic subjunctive: "Far be it from me to challenge...".' },
        { prompt: 'If the university senate resolves to dissolve the interdisciplinary institute, then', target: 'so be it.', wrong: ['so is it.', 'so let it be so.', 'so being it.'], context: '', note: 'Formulaic subjunctive expressing fatalistic acceptance -> "so be it.".' },
        { prompt: 'The suspect insisted on total innocence;', target: 'truth be told, however,', wrong: ['truth is told, however,', 'truth being told, however,', 'truth to be told, however,'], context: 'the cryptographic audit trail linked him directly to the offshore server.', note: 'Formulaic idiom: "truth be told".' },
        { prompt: '', target: 'Heaven forbid that', wrong: ['Heaven forbids that', 'Heaven forbidding that', 'Heaven is forbid that'], context: 'a containment breach should occur during the biological sample transfer.', note: 'Formulaic subjunctive: "Heaven forbid that...".' },
        { prompt: 'The contract specifies that', target: 'be it large or small,', wrong: ['is it large or small,', 'being it large or small,', 'be that large or small,'], context: 'every equipment variance must be formally logged in the maintenance registry.', note: 'Concessive formulaic subjunctive: "be it large or small".' }
      ];

    case 'c1_double_clefts_complex_focus':
      return [
        { prompt: '', target: 'What began as a localized microbiological investigation was what', wrong: ['Which began as a localized investigation was what', 'What did begin as an investigation was that', 'That began as an investigation was what'], context: 'ultimately unlocked the revolutionary CRISPR gene-editing mechanism.', note: 'Double cleft structure pairing Wh-cleft subject with nominal cleft predicate.' },
        { prompt: 'It was not merely the supply chain bottlenecks that delayed the launch;', target: 'it was also how the software architecture was structured', wrong: ['it was also how the software architecture was structuring', 'was it also how software was structured', 'that was also how software structured'], context: 'that contributed to critical integration regressions.', note: 'Multi-layered it-cleft structure.' },
        { prompt: '', target: 'What the diplomatic envoys sought to avert was precisely what', wrong: ['Which the diplomatic envoys sought to avert was what', 'What sought the envoys to avert was that', 'All what the envoys sought to avert was which'], context: 'transpired during the bilateral territorial summit.', note: 'Double cleft focus.' },
        { prompt: 'What revolutionized the regional aerospace manufacturing ecosystem was not merely public subsidies, but', target: 'how research universities collaborated with private industry.', wrong: ['how did research universities collaborate with industry.', 'which research universities collaborated with industry.', 'that research universities collaborating with industry.'], context: '', note: 'Coordinated wh-cleft complement clause.' },
        { prompt: 'It was through relentless investigative journalism', target: 'that the offshore corporate money laundering network', wrong: ['which the offshore corporate network', 'where the offshore corporate network', 'how the offshore corporate network'], context: 'was brought to international scrutiny.', note: 'It-cleft prepositional focus taking "that".' },
        { prompt: '', target: 'What surprised the planetary astrophysics community was not that', wrong: ['Which surprised the planetary astrophysics community was not that', 'What did surprise the astrophysics community was that not', 'That surprised the astrophysics community was not that'], context: 'the exoplanet possessed an atmosphere, but how dense its water vapor envelope proved to be.', note: 'Wh-cleft with contrasting that/how clausal complements.' },
        { prompt: '', target: 'What the clinical data unmistakably demonstrated was that', wrong: ['Which the clinical data demonstrated was that', 'What did the clinical data demonstrate was that', 'That the clinical data demonstrated was what'], context: 'early administration of the monoclonal antibody halved hospitalization duration.', note: 'Wh-cleft focusing on experimental proof.' },
        { prompt: 'It was the chief systems reliability engineer', target: 'who discovered the memory leak', wrong: ['which discovered the memory leak', 'whom discovered the memory leak', 'whose discovered the memory leak'], context: 'that had caused the recurring server outages.', note: 'It-cleft focus on agent subject -> "who discovered".' }
      ];

    case 'c1_academic_hedging_epistemic_stance':
      return [
        { prompt: 'The preliminary genomic sequencing data would', target: 'seem to indicate that', wrong: ['seem indicating that', 'seeming to indicate that', 'seem to indicate of'], context: 'horizontal gene transfer occurs far more frequently across marine bacteriophages than previously modeled.', note: 'Epistemic hedging formula: "would seem to indicate that".' },
        { prompt: 'The observed reduction in atmospheric sulfate aerosols may', target: 'well be attributable to', wrong: ['well be attribute to', 'well attributing to', 'well be attributed of'], context: 'the rapid retirement of regional coal-fired thermal generating stations.', note: 'Modal stance cluster: "may well be attributable to".' },
        { prompt: 'While the statistical regression correlation is ostensibly robust, confounding demographic variables', target: 'cannot easily be discounted.', wrong: ['cannot easily discounting.', 'cannot easily be discount.', 'cannot be easy discounted.'], context: '', note: 'Passive epistemic hedge: "cannot easily be discounted".' },
        { prompt: 'This archaeological stratum', target: 'conceivably represents', wrong: ['conceivably to represent', 'conceivable represents', 'conceivably representing'], context: 'the earliest documented evidence of copper smelting in the eastern Mediterranean basin.', note: 'Epistemic adverb modifying the verb: "conceivably represents".' },
        { prompt: 'The empirical datasets gathered across seven field stations tend', target: 'to support the hypothesis that', wrong: ['to supporting the hypothesis that', 'supporting the hypothesis that', 'to support of the hypothesis that'], context: 'soil microbiota diversity correlates positively with forest canopy resilience.', note: 'Hedging verb phrase: "tend to support the hypothesis that".' },
        { prompt: 'The economic restructuring program has proved,', target: 'to all intents and purposes,', wrong: ['for all intent and purposes,', 'to all intents of purpose,', 'with all intents and purposes,'], context: 'ineffectual in curbing inflationary pressures in the housing sector.', note: 'Fixed stance idiom: "to all intents and purposes,".' },
        { prompt: 'This monumental discovery is', target: 'arguably the most significant', wrong: ['arguable the most significant', 'arguably more significant as', 'arguing the most significant'], context: 'paleontological breakthrough in vertebrate evolution over the past half-century.', note: 'Epistemic adverb of academic claim strength: "arguably the most significant".' },
        { prompt: 'The observed neurochemical oscillations appear,', target: 'in large measure,', wrong: ['on large measure,', 'by large measure,', 'with large measure,'], context: 'to correlate with circadian rhythm synchronization.', note: 'Stance adverbial hedge: "in large measure,".' }
      ];

    default:
      return [
        { prompt: '', target: 'No sooner had the firm released', wrong: ['No sooner the firm had released', 'Scarcely had released', 'No sooner had releasing'], context: 'its clinical dataset than researchers corroborated efficacy.', note: 'Correlative inversion.' },
        { prompt: '', target: 'Be that as it may,', wrong: ['Is that as it may,', 'Being that as it may,', 'Be it as that may,'], context: 'the macroeconomic implications cannot be disregarded.', note: 'Formulaic subjunctive.' }
      ];
  }
}

function createC1RotatedQuestions(
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
        explanation: `Incorrect. "${w}" violates advanced C1 syntax. ${item.note}`
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
      question: `Question ${i + 1} of 20 (Star #${star}) • Level C1`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on advanced syntactic precision and formulaic structures.`,
      ruleTip: item.note
    });
  }

  return questions;
}
