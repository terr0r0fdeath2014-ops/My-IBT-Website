import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

// ==========================================
// LEVEL C2: CATEGORIES & TOPICS DEFINITION
// ==========================================

export type C2CategoryTab =
  | 'Elite Rhetoric & Parallelism'
  | 'Archaic, Legal & Concessives'
  | 'Hyper-Complex Syntax & Litotes'
  | 'Register Modulation & Diplomatic Precision'
  | 'Prosodic Weight & Climax Flow';

export const C2_CATEGORIES: C2CategoryTab[] = [
  'Elite Rhetoric & Parallelism',
  'Archaic, Legal & Concessives',
  'Hyper-Complex Syntax & Litotes',
  'Register Modulation & Diplomatic Precision',
  'Prosodic Weight & Climax Flow'
];

// Category 1: Elite Rhetoric & Parallelism
export const C2_RHETORIC_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c2_stylistic_locative_inversion',
    title: 'Stylistic Locative Inversion & Chiasmus',
    subtitle: 'Elevated literary syntax: Down came the rain, Into the room walked the chairman, Chiasmus symmetry',
    badge: 'Elite Rhetoric',
    description: 'At C2 mastery, inversion transcends mere grammatical mechanics to become an instrument of elite literary rhythm and aesthetic emphasis: 1. Stylistic directional/particle inversion: "Down came the torrential rain", "Away flew the flock of arctic terns". 2. Chiasmus (mirror-inversion of syntactic constituents): "Ask not what your country can do for you; ask what you can do for your country." 3. Syntactic parallelism across coordinated tricolons.',
    keyRule: 'Particle/Direction + Full Finite Verb + Noun Subject (no auxiliary "did"). Chiasmus reverses syntactic order across parallel clauses (AB : B\'A\').',
    formula: '[Directional Particle (Down/Away/Out)] + [V(past)] + [Noun Subject] | [Clause A], [Reversed Clause B]',
    examples: [
      'Down through the centuries-old pine canopy filtered the golden rays of the autumn dawn.',
      'Out into the tumultuous public square stepped the newly consecrated constitutional magistrate.',
      'We shape our architectural monuments, and thereafter our architectural monuments shape us.',
      'Across the windswept arctic tundra roamed solitary herds of barren-ground caribou.',
      'He knew that to retreat meant immediate dishonor, yet to advance meant almost certain annihilation.'
    ]
  },
  {
    id: 'c2_negative_polarity_fronting',
    title: 'Extreme Negative Polarity Fronting & Non-Assertion',
    subtitle: 'Nowhere else, Little did, In no way, At no time, and Never in a million years',
    badge: 'Polarity Inversion',
    description: 'Master the full spectrum of negative polarity frontings in formal statutory and oratorical English: 1. "At no time during the cross-examination did the defendant contradict his sworn deposition." 2. "Nowhere in the historical record is there any mention of a secondary citadel." 3. "In no way can the current fiscal deficit be attributed to discretionary capital outlays."',
    keyRule: 'Fronted Negative Polarity Adverbial + Auxiliary Verb + Subject + Predicate. Emphasizes total categorical denial.',
    formula: '[At no time / Nowhere in X / In no way] + [did / is / can] + Subject + Verb...',
    examples: [
      'At no time during the congressional testimony did the chief technology officer disavow his prior statements.',
      'Nowhere in the extant medieval codices is there any corroboration for the chronicler\'s speculative assertion.',
      'In no way should the provisional approval of the pharmaceutical compound be interpreted as unconditional endorsement.',
      'Little did the cryptographic architects suspect that quantum annealing algorithms would render their prime-factorization keys obsolete.',
      'Not for a single instant did the senior flight commander contemplate abandoning the crippled orbital spacecraft.'
    ]
  }
];

// Category 2: Archaic, Legal & Concessives
export const C2_CONCESSIVES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c2_inverted_concessive_clauses',
    title: 'Inverted Concessive Clauses (Try as he might, Be it large or small)',
    subtitle: 'Expressing resilient concession through fronted base verbs and fossilized subjunctive pairs',
    badge: 'Inverted Concessives',
    description: 'Master highly sophisticated concessive structures that avoid standard conjunctions (although, even though): 1. "Try / Strive / Work as + Subject + might / may" ("Try as he might, he could not disentangle the complex legal knot"). 2. "Be it X or Y" ("The enterprise must comply with environmental audits, be they municipal or federal"). 3. "Whatever be the outcome / Cost what it may".',
    keyRule: 'Base Verb + as + Subject + might/may ("Try as she might..."). Subjunctive "Be it X or Y" (never "Is it" or "Being it").',
    formula: '[Base Verb] + as + S + [might / may], Main Clause | [Be it X or Y], Main Clause',
    examples: [
      'Try as they might to discredit the investigative findings, the documentary evidence proved incontrovertible.',
      'Every sovereign state, be it economically dominant or developing, possesses an equal vote in the General Assembly.',
      'Strive as he did to reconcile the divergent philosophical paradigms, an epistemological rift remained.',
      'Cost what it may in terms of diplomatic capital, the treaty protecting international waters must be upheld.',
      'Whatever be the ultimate verdict of the international court, regional maritime boundaries have been permanently redefined.'
    ]
  },
  {
    id: 'c2_statutory_diplomatic_mandatives',
    title: 'Statutory, Diplomatic & Archival Mandatives',
    subtitle: 'Preserving base subjunctive morphology in treaty law, parliamentary statutes, and formal decrees',
    badge: 'Statutory Mandatives',
    description: 'Explore the highest register of statutory and treaty English where the mandative subjunctive is legally binding: "It is enacted that every vessel entering territorial waters be subject to search", "The convention decrees that no sovereign territory be annexed through coercion", "Should any signatory party fail to comply, let notice be served forthwith."',
    keyRule: 'Subordinate clauses governed by statutory verbs (decree, enact, resolve, ordain) strictly mandate bare infinitive subjunctive without modal auxiliaries.',
    formula: 'It is [decreed / enacted / resolved] that + S + [be + V3 / Base Verb] (forthwith)',
    examples: [
      'The United Nations Security Council resolved that an immediate ceasefire be instituted along the border corridor.',
      'The international maritime convention decrees that all commercial cargo manifests be transmitted seventy-two hours prior to docking.',
      'It was ordained that every archival parchment remain sealed in nitrogen chambers to forestall cellulose degradation.',
      'The parliamentary statute stipulates that every financial intermediary report suspicious transactions without exception.',
      'The treaty mandates that nuclear enrichment facilities be subject to unannounced international inspections.'
    ]
  }
];

// Category 3: Hyper-Complex Syntax & Litotes
export const C2_HYPER_COMPLEX_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c2_periodic_sentences_left_branching',
    title: 'Periodic Sentences & Left-Branching Clausal Architecture',
    subtitle: 'Suspending the main grammatical predicate until the ultimate cadence of an elaborate periodic sentence',
    badge: 'Periodic Sentences',
    description: 'A periodic sentence suspends its primary syntactic resolution (the main subject and verb) until the very end, building rhythmic tension and intellectual anticipation through a succession of introductory adverbial, participial, and conditional clauses. It represents the pinnacle of oratorical eloquence and intellectual prose architecture.',
    keyRule: 'Subordinate clause + Participial phrase + Prepositional constraint -> Final Main Clause (Subject + Verb). The meaning is incomplete until the final full stop.',
    formula: '[Subordinate 1], [Participle 2], [Prepositional 3], [MATRIX SUBJECT + MATRIX VERB + RESOLUTION].',
    examples: [
      'Having endured years of unremitting geopolitical isolation, exhausted by economic hardship, yet sustained by unwavering cultural resilience, the small alpine republic finally ratified its new constitution.',
      'Though repeatedly warned by senior seismologists of impending tectonic failure, and despite observing anomalous groundwater fluctuations across the valley, the municipal council refused to halt commercial excavation.',
      'Surrounded by centuries-old illuminated manuscripts, guided by the flickering light of desk lamps, and driven by an insatiable paleographic curiosity, the scholar deciphered the long-lost Alexandrian commentary.',
      'Whether viewed through the lens of classical thermodynamics or analyzed via quantum statistical mechanics, the fundamental conservation of energy remains unshakable.',
      'Notwithstanding intense opposition from entrenched fossil-fuel conglomerates, fueled by overwhelming public mobilization, the landmark carbon neutrality bill passed the senate.'
    ]
  },
  {
    id: 'c2_double_negation_litotes',
    title: 'Double Negation & The Art of Litotes (Subtle Understatement)',
    subtitle: 'Employing deliberate double negatives for diplomatic restraint, irony, and scholarly understatement',
    badge: 'Litotes Understatement',
    description: 'Litotes is a figure of speech and syntactic strategy wherein an affirmative concept is conveyed by negating its opposite (e.g., "not unimportant" = very important; "not without merit" = possessing substantial merit; "not unmindful of" = acutely aware of). It introduces diplomatic restraint, scientific humility, and elegant intellectual nuance into formal discourse.',
    keyRule: 'Negation (not / no / scarcely) + Negative Prefix / Privative Adjective (unimportant, unmerited, unaware, without). Softens dogmatic tone while delivering razor-sharp precision.',
    formula: 'S + is [not without / not unmindful of / by no means negligible / not entirely implausible]',
    examples: [
      'The statistical correlation between atmospheric carbon concentrations and oceanic acidification is by no means insignificant.',
      'The diplomatic delegation was not unmindful of the historical grievances harbored by their negotiating counterparts.',
      'Her theoretical critique of the prevailing cosmological paradigm is not without substantial empirical merit.',
      'To suggest that artificial neural networks exhibit authentic consciousness is not entirely unproblematic from a philosophical standpoint.',
      'The economic ramifications of the currency realignment will be not inconsiderable for regional agricultural exporters.'
    ]
  }
];

// Category 4: Register Modulation & Diplomatic Precision
export const C2_REGISTER_DIPLOMATIC_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c2_register_modulation_formal_syntax',
    title: 'Register Modulation & Ultra-Formal Syntactic Precision',
    subtitle: 'Navigating subtle differences between formal, diplomatic, statutory, and oratorical registers',
    badge: 'Register Modulation',
    description: 'At C2 mastery, language users modulate their syntactic choices with absolute precision depending on register: 1. Diplomatic communiqués: "The government views with grave concern...", "We reserve all rights under international maritime law." 2. Statutory precision: "Save where otherwise provided", "In witness whereof". 3. Academic rigor: "It is incumbent upon researchers to verify...", "Premised upon the postulate that...".',
    keyRule: 'Select vocabulary and syntactic structures tailored to exact legal, diplomatic, or scientific conventions (e.g. "save where", "in witness whereof", "it is incumbent upon").',
    formula: '[Save where / In witness whereof / It is incumbent upon X to] + [Formal Clausal Architecture]',
    examples: [
      'It is incumbent upon the scientific community to scrutinize unverified claims of room-temperature superconductivity with rigorous skepticism.',
      'Save where otherwise expressly provided in the bilateral treaty, all commercial maritime vessels enjoy the right of innocent passage.',
      'In witness whereof, the plenipotentiaries of the high contracting parties have signed this convention and affixed their seals.',
      'The ministry views with grave concern the unilateral deployment of anti-satellite missile systems in low Earth orbit.',
      'Premised upon the foundational postulate of general relativity, the astrophysicists calculated the orbital precession of the binary pulsar.'
    ]
  },
  {
    id: 'c2_elliptical_comparatives_anaphora',
    title: 'Elliptical Comparatives & Cataphoric Reference Precision',
    subtitle: 'Compressing complex comparative clauses and forward-pointing cataphoric pronoun anticipation',
    badge: 'Cataphora & Comparatives',
    description: '1. Elliptical Comparative Clauses: In advanced comparative structures, repetitive verbs are stripped, leaving only case-appropriate pronouns or auxiliaries: "No scholar understood the manuscript\'s historical significance better than she (did)." 2. Cataphoric Reference: Positioning a pronoun before its actual lexical referent to generate narrative focus: "Though she was initially dismissed by the scientific establishment, Dr. McClintock would eventually win the Nobel Prize for discovering transposons."',
    keyRule: 'Formal comparative nominative: "better than she [did]" (NOT "better than her" in formal style). Cataphoric pronoun precedes the named subject.',
    formula: 'Comparative + than + [Nominative Pronoun (he/she/they) + (Auxiliary)] | Though [Pronoun], [Full Noun Subject]...',
    examples: [
      'Few evolutionary biologists have grasped the intricacies of epigenetic inheritance more comprehensively than he.',
      'Though it was met with fierce skepticism upon its initial publication, Einstein\'s general theory of relativity fundamentally revolutionized physics.',
      'The architectural engineering team completed the transcontinental suspension bridge in less time than had been originally budgeted.',
      'Although she was vastly outfunded by multinational corporate competitors, Dr. Vance developed the affordable water filtration cartridge first.',
      'No contemporary jurist has defended constitutional civil liberties with greater eloquence than she.'
    ]
  }
];

// Category 5: Prosodic Weight & Climax Flow
export const C2_PROSODIC_WEIGHT_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'c2_tricolon_climax_cadence',
    title: 'The Balanced Tricolon & Climactic Syntactic Cadence',
    subtitle: 'Constructing ascending rhetorical power through three-part parallel syntactic structures (Tricolon Crescens)',
    badge: 'Tricolon & Cadence',
    description: 'The tricolon is a rhetorical structure consisting of three parallel words, phrases, or clauses of increasing length and emotional/intellectual weight (Tricolon Crescens or ascending tricolon). It provides monumental closing cadence to academic treatises, judicial dissents, and oratorical addresses.',
    keyRule: 'Clause 1 (Short/Direct), Clause 2 (Longer/Elaborated), and Clause 3 (Weightiest/Most profound climactic resolution).',
    formula: '[Element 1], [Element 2 with expanded modifier], and [Element 3 with comprehensive climactic resolution].',
    examples: [
      'They sought to illuminate the darkness of superstition, to liberate the human intellect from dogmatic constraint, and to bequeath to posterity the enduring legacy of scientific enlightenment.',
      'The treaty was conceived in hope, forged through arduous diplomatic compromise, and ratified amidst unanimous international acclaim.',
      'We must examine the empirical data with unwavering objectivity, challenge inherited orthodoxies with courageous skepticism, and pursue truth wherever the scientific evidence leads.',
      'His prose was distinguished by crystalline clarity of thought, meticulous precision of diction, and an incomparable majesty of rhythmic cadence.',
      'The revolutionary energy transition will require unprecedented technological innovation, massive capital mobilization, and an unshakeable political consensus across generations.'
    ]
  }
];

// Helper to bundle all C2 topics
export function getC2TopicsForCategory(category: C2CategoryTab): GenericGrammarTopicItem[] {
  switch (category) {
    case 'Elite Rhetoric & Parallelism':
      return C2_RHETORIC_TOPICS;
    case 'Archaic, Legal & Concessives':
      return C2_CONCESSIVES_TOPICS;
    case 'Hyper-Complex Syntax & Litotes':
      return C2_HYPER_COMPLEX_TOPICS;
    case 'Register Modulation & Diplomatic Precision':
      return C2_REGISTER_DIPLOMATIC_TOPICS;
    case 'Prosodic Weight & Climax Flow':
      return C2_PROSODIC_WEIGHT_TOPICS;
    default:
      return C2_RHETORIC_TOPICS;
  }
}

// ==========================================
// 20-STAR QUESTIONS GENERATOR FOR LEVEL C2
// ==========================================

export function getC2StarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  const pool = getC2QuestionPool(topicId);
  return createC2RotatedQuestions(pool, starNumber, mSeed, topicId);
}

interface QuestionPoolItem {
  prompt: string;
  target: string;
  wrong: string[];
  context: string;
  note: string;
}

function getC2QuestionPool(topicId: string): QuestionPoolItem[] {
  switch (topicId) {
    case 'c2_stylistic_locative_inversion':
      return [
        { prompt: '', target: 'Down through the centuries-old pine canopy filtered', wrong: ['Down filtered through the pine canopy', 'Down through the pine canopy did filter', 'Down was filtering through the canopy'], context: 'the golden shafts of the autumn morning sun.', note: 'Literary directional inversion: Particle Phrase + Past Verb + Noun Subject -> "filtered the golden shafts".' },
        { prompt: '', target: 'Out into the tumultuous public concourse stepped', wrong: ['Out stepped into the concourse', 'Out into the concourse did step', 'Out was stepping into the concourse'], context: 'the newly consecrated constitutional magistrate to address the assembled multitude.', note: 'Directional inversion: "stepped the newly consecrated magistrate".' },
        { prompt: 'We shape our institutional paradigms, and thereafter our', target: 'paradigms shape us.', wrong: ['paradigms are shaping us.', 'shape us our paradigms.', 'are we shaped by paradigms.'], context: '', note: 'Chiasmus syntactic parallelism: A B : B\' A\' ("shape paradigms / paradigms shape").' },
        { prompt: '', target: 'Across the windswept arctic tundra roamed', wrong: ['Across the arctic tundra did roam', 'Across roamed the arctic tundra', 'Across the arctic tundra was roaming'], context: 'solitary herds of barren-ground caribou in search of winter forage.', note: 'Locative fronting with full verb inversion -> "roamed solitary herds".' },
        { prompt: 'He knew that to retreat meant immediate dishonor, yet', target: 'to advance meant almost certain destruction.', wrong: ['advancing meant destruction almost certainly.', 'meaning destruction was advancing.', 'to advance was meaning destruction certainly.'], context: '', note: 'Syntactic parallelism with balanced infinitive subjects.' },
        { prompt: '', target: 'High atop the rugged coastal promontory stood', wrong: ['High stood atop the promontory', 'High atop the promontory did stand', 'High atop the promontory was standing'], context: 'the ruined medieval lighthouse that had guided mariners for centuries.', note: 'Full locative inversion -> "stood the ruined medieval lighthouse".' },
        { prompt: '', target: 'Into the breach surged the vanguard of the rescue', wrong: ['Into the breach did surge the vanguard', 'Into surged the vanguard of the breach', 'Into the breach was surging the vanguard'], context: 'battalion to secure the collapsed embankment.', note: 'Directional fronting: "surged the vanguard".' },
        { prompt: 'One must eat to live, not', target: 'live to eat.', wrong: ['living to eat.', 'to live for eating.', 'live for the purpose of eating.'], context: '', note: 'Classic chiasmus balance: "eat to live, not live to eat".' }
      ];

    case 'c2_negative_polarity_fronting':
      return [
        { prompt: '', target: 'At no time during the cross-examination did the chief technology officer', wrong: ['At no time during the cross-examination the chief officer did', 'At no time during the cross-examination did disavow the chief officer', 'At no time the chief officer did during cross-examination'], context: 'contradict his prior sworn deposition.', note: 'Negative polarity inversion: "At no time... did [subject] contradict...".' },
        { prompt: '', target: 'Nowhere in the extant medieval codices is there', wrong: ['Nowhere in the extant medieval codices there is', 'Nowhere is there in the extant codices', 'Nowhere in the codices does be'], context: 'any corroboration for the chronicler\'s speculative account of the siege.', note: 'Locative negative polarity inversion: "Nowhere... is there any...".' },
        { prompt: '', target: 'In no way can the provisional authorization of this therapeutic compound', wrong: ['In no way the provisional authorization can', 'In no way can be the authorization interpreted', 'In no way does the authorization can'], context: 'be construed as an unconditional commercial endorsement.', note: 'Modal negative inversion: "In no way can [subject] be construed...".' },
        { prompt: '', target: 'Little did the cryptographic architects suspect', wrong: ['Little the cryptographic architects suspected', 'Little did suspect the cryptographic architects', 'Little did the architects knew'], context: 'that quantum annealing hardware would render their prime-factorization keys obsolete.', note: 'Adverbial fronting: "Little did [subject] suspect".' },
        { prompt: '', target: 'Not for a single instant did the senior flight commander contemplate', wrong: ['Not for a single instant the commander contemplated', 'Not for a single instant did contemplate the commander', 'Not for a single instant the commander did contemplate'], context: 'aborting the orbital insertion maneuver.', note: 'Temporal negative inversion: "Not for a single instant did [subject] contemplate".' },
        { prompt: '', target: 'On no occasion during the fiscal summit did the finance minister indicate', wrong: ['On no occasion the finance minister indicated', 'On no occasion did indicate the finance minister', 'On no occasion did the minister indicated'], context: 'a willingness to devalue the sovereign currency.', note: 'Negative inversion: "On no occasion... did [subject] indicate".' },
        { prompt: '', target: 'Under no circumstances should safety containment interlocks', wrong: ['Under no circumstances safety containment interlocks should', 'Under no circumstances should be bypassed safety interlocks', 'Under no circumstances safety interlocks'], context: 'be deactivated while the synchrotron beam is active.', note: 'Negative inversion: "Under no circumstances should [subject] be...".' },
        { prompt: '', target: 'Seldom if ever has a judicial appointment elicited', wrong: ['Seldom if ever a judicial appointment has elicited', 'Seldom if ever has elicited a judicial appointment', 'Seldom if ever did a judicial appointment elicited'], context: 'such unanimous praise across the entire legal academy.', note: 'Negative restrictive inversion: "Seldom if ever has [subject] elicited".' }
      ];

    case 'c2_inverted_concessive_clauses':
      return [
        { prompt: '', target: 'Try as they might to discredit', wrong: ['Try as they may have to discredit', 'Trying as they might to discredit', 'Try as they did to discrediting'], context: 'the investigative journalist\'s findings, the primary documentary evidence proved incontrovertible.', note: 'Inverted concessive: "Try as they might to + Verb...".' },
        { prompt: 'Every sovereign member state,', target: 'be it economically dominant or developing,', wrong: ['is it economically dominant or developing,', 'being it economically dominant or developing,', 'be that economically dominant or developing,'], context: 'possesses an equal vote in the deliberations of the General Assembly.', note: 'Concessive subjunctive: "be it X or Y".' },
        { prompt: '', target: 'Strive as he did to reconcile', wrong: ['Striving as he did to reconcile', 'Strive as he was to reconcile', 'Strive as he had to reconcile'], context: 'the divergent metaphysical paradigms, an insurmountable epistemological divide remained.', note: 'Inverted past concessive: "Strive as he did to + Verb...".' },
        { prompt: '', target: 'Cost what it may in terms of diplomatic capital,', wrong: ['Cost what it will in diplomatic capital,', 'Costing what it may in diplomatic capital,', 'Cost whatever it may in diplomatic capital,'], context: 'the treaty protecting international oceanic commons must be fiercely defended.', note: 'Formulaic concessive idiom: "Cost what it may...".' },
        { prompt: '', target: 'Whatever be the ultimate verdict of the international tribunal,', wrong: ['Whatever is the ultimate verdict of the tribunal,', 'Whatever being the ultimate verdict,', 'Whatever shall be the verdict,'], context: 'regional maritime borders have been permanently demarcated.', note: 'Concessive subjunctive clause: "Whatever be the ultimate verdict...".' },
        { prompt: '', target: 'Come what may, the polar observatory will', wrong: ['Comes what may, the observatory will', 'Coming what may, the observatory will', 'Come what will, the observatory will'], context: 'maintain continuous deep-space spectroscopic monitoring throughout the polar winter.', note: 'Formulaic concessive: "Come what may,".' },
        { prompt: '', target: 'Plead as the defense attorney might,', wrong: ['Pleading as the attorney might,', 'Plead as the attorney could,', 'Plead as did the attorney,'], context: 'the appellate panel refused to overturn the lower court\'s mandatory restitution order.', note: 'Inverted concessive: "Plead as [subject] might,".' },
        { prompt: 'All commercial entities,', target: 'be they multinational conglomerates or regional cooperatives,', wrong: ['are they multinational conglomerates,', 'being they multinational conglomerates,', 'be that they multinational conglomerates,'], context: 'must comply with the new emissions transparency mandate.', note: 'Subjunctive concessive: "be they X or Y".' }
      ];

    case 'c2_statutory_diplomatic_mandatives':
      return [
        { prompt: 'The United Nations Security Council formally resolved that an immediate ceasefire', target: 'be instituted along the disputed frontier', wrong: ['is instituted along the frontier', 'was instituted along the frontier', 'to be instituted along the frontier'], context: 'with immediate effect.', note: 'Statutory mandative subjunctive: "resolved that [subject] be instituted...".' },
        { prompt: 'The international maritime convention decrees that all commercial cargo manifests', target: 'be transmitted seventy-two hours prior to docking', wrong: ['are transmitted seventy-two hours prior', 'were transmitted seventy-two hours prior', 'to be transmitted seventy-two hours prior'], context: 'at sovereign ports of entry.', note: 'Statutory mandative: "decrees that [subject] be transmitted".' },
        { prompt: 'It was ordained that every historic illuminated parchment', target: 'remain sealed in nitrogen chambers', wrong: ['remains sealed in nitrogen chambers', 'remained sealed in nitrogen chambers', 'is remaining sealed in nitrogen chambers'], context: 'to arrest environmental degradation of organic pigments.', note: 'Subjunctive base verb: "remain sealed".' },
        { prompt: 'The parliamentary statute strictly stipulates that every registered financial intermediary', target: 'report suspicious offshore transactions forthwith', wrong: ['reports suspicious offshore transactions', 'reported suspicious offshore transactions', 'to report suspicious transactions'], context: 'to the statutory oversight authority.', note: 'Subjunctive base verb without "-s": "report suspicious transactions".' },
        { prompt: 'The non-proliferation treaty mandates that all sovereign nuclear enrichment facilities', target: 'be subject to unannounced international inspections', wrong: ['are subject to unannounced inspections', 'were subject to unannounced inspections', 'to be subject to inspections'], context: 'by certified atomic energy inspectors.', note: 'Mandative subjunctive: "be subject to".' },
        { prompt: 'The judicial council recommended that the code of ethical judicial conduct', target: 'be amended to prohibit all third-party gifts', wrong: ['is amended to prohibit all gifts', 'was amended to prohibit all gifts', 'to be amended to prohibit gifts'], context: 'to appellate magistrates.', note: 'Mandative subjunctive: "be amended".' },
        { prompt: 'The corporate charter requires that the independent governance board', target: 'convene quarterly to audit risk exposures', wrong: ['convenes quarterly to audit risk', 'convened quarterly to audit risk', 'to convene quarterly to audit'], context: 'across all international subsidiaries.', note: 'Subjunctive: "convene quarterly".' },
        { prompt: 'The executive decree ordered that all civil defense emergency stockpiles', target: 'be replenished before the onset of winter', wrong: ['are replenished before winter', 'were replenished before winter', 'to be replenished before winter'], context: 'without budgetary delay.', note: 'Mandative subjunctive: "be replenished".' }
      ];

    case 'c2_periodic_sentences_left_branching':
      return [
        { prompt: 'Having endured years of unremitting diplomatic isolation, exhausted by economic sanctions, yet sustained by an indomitable civic resolve,', target: 'the small alpine republic finally ratified its democratic constitution.', wrong: ['a new democratic constitution was finally ratified by the republic.', 'the ratification of the constitution finally took place.', 'it was then that the republic ratified its constitution.'], context: '', note: 'Periodic sentence: Matrix subject ("the small alpine republic") must logically head the independent clause that resolves the initial modifiers.' },
        { prompt: 'Though repeatedly cautioned by senior seismologists of impending structural collapse, and despite observing anomalous ground fissures,', target: 'the municipal zoning board refused to suspend excavation.', wrong: ['excavation was not suspended by the municipal zoning board.', 'the suspension of excavation was refused by the board.', 'a refusal to suspend excavation occurred by the board.'], context: '', note: 'Matrix agent subject ("the municipal zoning board") must resolve the introductory concessive clauses.' },
        { prompt: 'Surrounded by centuries-old illuminated manuscripts, guided by the flickering amber glow of his desk lamp, and driven by an insatiable paleographic curiosity,', target: 'the scholar deciphered the long-lost Alexandrian commentary.', wrong: ['the long-lost Alexandrian commentary was deciphered by the scholar.', 'the decipherment of the commentary was accomplished.', 'an ancient Greek text was revealed to the scholar.'], context: '', note: 'Active matrix resolution matching the personal participial descriptors.' },
        { prompt: 'Whether viewed through the lens of classical thermodynamics or analyzed via relativistic quantum statistical mechanics,', target: 'the fundamental conservation of energy remains unshakable.', wrong: ['physicists consider energy conservation to remain unshakable.', 'the remaining unshakable of energy conservation is proven.', 'it is energy conservation that remains unshakable.'], context: '', note: 'Balanced periodic resolution.' },
        { prompt: 'Notwithstanding fierce political opposition from entrenched industrial lobbyists, galvanized by nationwide youth mobilization,', target: 'the landmark carbon neutrality statute passed the senate unanimously.', wrong: ['the senate saw the passing of the landmark carbon statute.', 'the passing of the carbon statute occurred in the senate.', 'a unanimous vote on the carbon statute was taken by senators.'], context: '', note: 'Periodic resolution with the statutory subject directly following.' },
        { prompt: 'Trained from early childhood in classical counterpoint, inspired by the sublime majesty of the alpine landscape, and master of orchestral timbre,', target: 'the composer completed his monumental choral symphony.', wrong: ['the monumental choral symphony was completed by the composer.', 'the completion of the choral symphony occurred.', 'his monumental choral symphony reached its final form.'], context: '', note: 'Agent subject resolving triple participial modifiers.' },
        { prompt: 'Having scrutinized forty years of longitudinal epidemiological data, and mindful of confounding demographic variables,', target: 'the public health taskforce published their definitive findings.', wrong: ['the definitive findings were published by the taskforce.', 'the publication of the findings was finalized.', 'it was decided by the taskforce to publish findings.'], context: '', note: 'Active agent resolution.' },
        { prompt: 'Though stripped of all territorial possessions and forced into remote internal exile,', target: 'the deposed monarch continued to command the fierce loyalty of his subjects.', wrong: ['the fierce loyalty of his subjects continued to be commanded by the monarch.', 'the monarch\'s subjects continued to show loyalty.', 'loyalty was still commanded from his subjects.'], context: '', note: 'Personal subject resolving passive concessive clause.' }
      ];

    case 'c2_double_negation_litotes':
      return [
        { prompt: 'The statistical correlation between rising oceanic temperatures and coral bleaching is', target: 'by no means insignificant.', wrong: ['by no means not insignificant.', 'not by no means significant.', 'by no means insignificantly.'], context: '', note: 'Litotes understatement: "by no means insignificant" conveys profound significance.' },
        { prompt: 'The chief diplomatic negotiator was', target: 'not unmindful of the historical grievances', wrong: ['not mindful without the historical grievances', 'not unmindful about the historical grievances', 'unmindful of not the historical grievances'], context: 'harbored by the border communities.', note: 'Litotes: "not unmindful of" (= acutely mindful/aware of).' },
        { prompt: 'Her theoretical critique of prevailing cosmological inflationary models is', target: 'not without substantial empirical merit.', wrong: ['not without no empirical merit.', 'without not substantial empirical merit.', 'not with no substantial merit.'], context: '', note: 'Litotes: "not without substantial empirical merit" (= possesses great merit).' },
        { prompt: 'To suggest that machine learning architectures possess genuine intentionality is', target: 'not entirely unproblematic', wrong: ['not entirely not unproblematic', 'entirely not problematic without', 'not unentirely problematic'], context: 'from a rigorous philosophy-of-mind perspective.', note: 'Double negation nuance: "not entirely unproblematic".' },
        { prompt: 'The macroeconomic ramifications of the interest rate realignment will be', target: 'not inconsiderable for export-oriented manufacturing.', wrong: ['not inconsiderably for export-oriented manufacturing.', 'not unconsiderable for export manufacturing.', 'inconsiderable not for export manufacturing.'], context: '', note: 'Litotes: "not inconsiderable" (= very substantial).' },
        { prompt: 'His diplomatic intervention was', target: 'not unwelcome in the midst of the crisis.', wrong: ['not unwelcomed in the midst of the crisis.', 'not without unwelcome in the crisis.', 'unwelcome not during the crisis.'], context: '', note: 'Litotes: "not unwelcome" (= highly appreciated).' },
        { prompt: 'The hypothesis proposed by the astrophysics group is', target: 'not entirely implausible, given recent spectroscopic observations.', wrong: ['not entirely not implausible, given observations.', 'not implausible entirely not, given observations.', 'entirely not implausible without observations.'], context: '', note: 'Litotes: "not entirely implausible" (= quite plausible).' },
        { prompt: 'The financial burden imposed on small agricultural cooperatives was', target: 'scarcely negligible during the drought.', wrong: ['scarcely not negligible during the drought.', 'not scarcely negligible during the drought.', 'scarcely negligibly during the drought.'], context: '', note: 'Litotes: "scarcely negligible" (= very heavy).' }
      ];

    case 'c2_register_modulation_formal_syntax':
      return [
        { prompt: 'It is', target: 'incumbent upon the international scientific community to scrutinize', wrong: ['incumbent on the scientific community for scrutinizing', 'incumbent to the scientific community to scrutinize', 'incumbent with the scientific community to scrutinize'], context: 'unverified claims of anomalous nuclear phenomena with unyielding skepticism.', note: 'Ultra-formal statutory idiom: "It is incumbent upon [entity] to + Verb".' },
        { prompt: '', target: 'Save where otherwise expressly provided in the bilateral charter,', wrong: ['Except where otherwise expressly provide in the charter,', 'Saving where otherwise expressly provided in the charter,', 'Save when otherwise expressly providing in the charter,'], context: 'all merchant vessels enjoy the unhindered right of innocent maritime transit.', note: 'Statutory legal opening: "Save where otherwise expressly provided...".' },
        { prompt: '', target: 'In witness whereof, the plenipotentiaries of the high contracting parties', wrong: ['In witnessing whereof, the plenipotentiaries', 'For witness whereof, the plenipotentiaries', 'With witness whereof, the plenipotentiaries'], context: 'have subscribed their signatures to this solemn convention.', note: 'Formal treaty ratification formula: "In witness whereof, ...".' },
        { prompt: 'The foreign ministry views with', target: 'grave concern the unilateral militarization of low Earth orbit.', wrong: ['grave concerning the unilateral militarization of orbit.', 'gravely concern the unilateral militarization of orbit.', 'grave concern about the unilateral militarization of orbit.'], context: '', note: 'Diplomatic register formula: "views with grave concern [Noun Phrase]".' },
        { prompt: '', target: 'Premised upon the fundamental axioms of general relativity,', wrong: ['Premising upon the fundamental axioms of relativity,', 'Premised on the fundamental axiom of relativity with,', 'Being premise upon the fundamental axioms of relativity,'], context: 'the theoretical physicists computed the frame-dragging effect near the rotating black hole.', note: 'Academic participial framing: "Premised upon...".' },
        { prompt: 'The administrative tribunal ruled that the appellant\'s grievance was,', target: 'in point of fact, wholly without foundation.', wrong: ['in point of factual, wholly without foundation.', 'on point of fact, wholly without foundation.', 'by point of fact, wholly without foundation.'], context: '', note: 'Formal judicial register idiom: "in point of fact".' },
        { prompt: 'The treaty signatory states agreed to cooperate', target: 'in good faith across all environmental working groups.', wrong: ['with good faith across all working groups.', 'on good faith across all working groups.', 'by good faith across all working groups.'], context: '', note: 'Legal Latinate calque: "in good faith" (bona fide).' },
        { prompt: 'The university provost emphasized that research ethics are', target: 'paramount to institutional integrity.', wrong: ['paramount of institutional integrity.', 'paramount with institutional integrity.', 'paramount for institutional integrity.'], context: '', note: 'Formal lexical collocation: "paramount to".' }
      ];

    case 'c2_elliptical_comparatives_anaphora':
      return [
        { prompt: 'Few evolutionary biologists have grasped the subtleties of epigenetic regulation more comprehensively than', target: 'she.', wrong: ['her.', 'she did had.', 'herself.'], context: '', note: 'Formal elliptical comparative: Nominative pronoun "she" (short for "than she has / did").' },
        { prompt: 'Though', target: 'she was initially dismissed by the male-dominated scientific establishment, Dr. McClintock', wrong: ['Dr. McClintock was initially dismissed by the establishment, she', 'her initial dismissal by the establishment occurred, Dr. McClintock', 'dismissed initially by the establishment, she'], context: 'would ultimately receive the Nobel Prize for discovering genetic transposition.', note: 'Cataphoric reference: positioning the pronoun "she" before the overt noun "Dr. McClintock".' },
        { prompt: 'The civil engineering consortium completed the transcontinental subsea tunnel in less time than', target: 'had been originally projected by feasibility studies.', wrong: ['it was originally projected by feasibility studies.', 'feasibility studies had projected it originally.', 'what had been originally projected by studies.'], context: '', note: 'Elliptical comparative with passive impersonal auxiliary: "than had been originally projected".' },
        { prompt: 'Although', target: 'it was met with fierce initial opposition from classical physicists, quantum mechanics', wrong: ['quantum mechanics was met with fierce opposition, it', 'its reception was fiercely opposed by physicists, quantum mechanics', 'being opposed fiercely by classical physicists, it'], context: 'fundamentally transformed our understanding of atomic architecture.', note: 'Cataphoric reference: "it" anticipates "quantum mechanics".' },
        { prompt: 'No contemporary appellate jurist has defended constitutional habeas corpus with greater philosophical vigor than', target: 'he.', wrong: ['him.', 'himself.', 'his.'], context: '', note: 'Formal comparative nominative pronoun: "than he".' },
        { prompt: 'The spacecraft expended significantly less propellant during the gravitational slingshot than', target: 'had been anticipated by mission flight controllers.', wrong: ['mission flight controllers had anticipated it.', 'it was anticipated by mission flight controllers.', 'what was anticipated by controllers.'], context: '', note: 'Elliptical comparative structure: "than had been anticipated".' },
        { prompt: 'Though', target: 'they were vastly outgunned in capital reserves by multinational conglomerates, the startup team', wrong: ['the startup team were vastly outgunned by conglomerates, they', 'their capital reserves were vastly outgunned, the startup team', 'being outgunned in capital reserves, they'], context: 'developed the proprietary quantum lithography process first.', note: 'Cataphoric pronoun "they" anticipating "the startup team".' },
        { prompt: 'None among the diplomatic envoys understood the intricacies of the border treaty better than', target: 'she.', wrong: ['her.', 'herself.', 'she did understood.'], context: '', note: 'Formal prescriptive comparative nominative: "than she".' }
      ];

    case 'c2_tricolon_climax_cadence':
      return [
        { prompt: 'They sought to illuminate the darkness of inherited ignorance, to liberate human reason from the shackles of dogma, and', target: 'to bequeath to posterity the enduring light of scientific inquiry.', wrong: ['bequeathing to posterity the light of scientific inquiry.', 'the enduring light of scientific inquiry was bequeathed to posterity.', 'they bequeathed to posterity scientific inquiry.'], context: '', note: 'Tricolon crescendo with perfectly balanced infinitive clauses of increasing syntactic weight.' },
        { prompt: 'The landmark international treaty was conceived in profound optimism, forged through arduous diplomatic compromise, and', target: 'ratified amidst unanimous international acclaim.', wrong: ['ratification took place amidst unanimous acclaim.', 'unanimous international acclaim greeted its ratification.', 'was ratified by the unanimous acclaim of nations.'], context: '', note: 'Balanced tricolon of past passive participles with prepositional phrases.' },
        { prompt: 'We must examine the empirical data with unwavering objectivity, challenge entrenched orthodoxies with fearless skepticism, and', target: 'pursue truth wherever the scientific evidence leads.', wrong: ['pursuing truth wherever the evidence leads.', 'the pursuit of truth must follow wherever evidence leads.', 'truth must be pursued wherever evidence leads.'], context: '', note: 'Balanced tricolon of modal verbs + objects + adverbial clauses.' },
        { prompt: 'Her academic prose was distinguished by crystalline clarity of thought, meticulous precision of diction, and', target: 'an incomparable majesty of rhythmic cadence.', wrong: ['its rhythmic cadence was majestic incomparably.', 'the cadence of her rhythm was incomparably majestic.', 'majestic cadence in an incomparable manner.'], context: '', note: 'Balanced tricolon of nominal phrases with adjectival modifiers.' },
        { prompt: 'The transcontinental energy transition will demand unprecedented technological innovation, massive financial mobilization, and', target: 'an unshakeable generational political consensus.', wrong: ['political consensus across generations that is unshakeable.', 'politicians must reach an unshakeable consensus across generations.', 'the reaching of an unshakeable consensus politically.'], context: '', note: 'Climactic third element of a noun-phrase tricolon.' },
        { prompt: 'The pioneer explored untrodden wildernesses, charted uncharted celestial skies, and', target: 'unlocked the deepest secrets of molecular biology.', wrong: ['the deepest secrets of molecular biology were unlocked by her.', 'unlocking the deepest secrets of molecular biology.', 'her unlocking of the secrets of molecular biology.'], context: '', note: 'Parallel past simple verb phrase tricolon.' },
        { prompt: 'Through tireless archival research, rigorous paleographic analysis, and', target: 'flawless textual synthesis,', wrong: ['synthesizing the text flawlessly,', 'her textual synthesis was flawless,', 'with flawless synthesizing of the text,'], context: 'the historian reconstructed the lost Alexandrian chronicle.', note: 'Prepositional noun-phrase tricolon.' },
        { prompt: 'In youth he was daring, in maturity he was prudent, and', target: 'in old age he was profoundly wise.', wrong: ['wisdom was his profound trait in old age.', 'profound wisdom characterized his old age.', 'he had profound wisdom in old age.'], context: '', note: 'Parallel balanced tricolon clauses.' }
      ];

    default:
      return [
        { prompt: '', target: 'Down through the canopy filtered', wrong: ['Down filtered through the canopy', 'Down did filter', 'Down was filtering'], context: 'the golden rays of dawn.', note: 'Literary inversion.' },
        { prompt: '', target: 'Try as they might to discredit', wrong: ['Try as they may to', 'Trying as they might to', 'Try as they did to'], context: 'the findings, the evidence was clear.', note: 'Inverted concessive.' }
      ];
  }
}

function createC2RotatedQuestions(
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
        explanation: `Incorrect. "${w}" fails to meet C2 mastery criteria. ${item.note}`
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
      question: `Question ${i + 1} of 20 (Star #${star}) • Level C2 Mastery`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Focus on stylistic cadence, syntactic parallelism, and register precision.`,
      ruleTip: item.note
    });
  }

  return questions;
}
