import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A4_CLAUSES_PARTICIPLES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'participle_clauses',
    title: 'Participle Clauses (-ing and -ed clauses for time, reason, and condition)',
    subtitle: 'Streamlining academic sentences by condensing subordinate clauses with participles',
    badge: 'Participle Clauses',
    description: 'Participle clauses replace adverbial clauses of time, reason, or condition with a participle phrase: 1) Present Participle (-ing): for active simultaneous actions or reasons ("Working in the lab, she found..." = "While/Because she was working..."). 2) Past Participle (-ed/V3): for passive meanings ("Damaged in the storm, the array..." = "Because it was damaged..."). 3) Perfect Participle ("Having + V3"): for active actions completed BEFORE the main clause ("Having finished the calculations, he submitted the paper").',
    keyRule: 'Same subject rule: The implied subject of the participle clause MUST be the same as the subject of the main clause. Having + V3 = earlier completed action.',
    formula: 'V-ing / Past Participle (V3) / Having + V3, Subject + Main Verb.',
    examples: [
      'Having analyzed over ten thousand blood samples, the pathology team identified the genomic marker.',
      'Located beneath the Swiss-French border, the Large Hadron Collider is the world\'s largest particle physics facility.',
      'Realizing that the chemical temperature was rising rapidly, Dr. Lin activated the emergency cooling vent.',
      'Having been inspected by certified aerospace engineers, the supersonic jet received commercial clearance.',
      'Hearing the fire alarm sound through the corridor, all laboratory staff evacuated immediately.'
    ]
  },
  {
    id: 'relative_pronouns_prepositions',
    title: 'Relative Pronouns with Prepositions (in which, to whom, for which, on whose)',
    subtitle: 'Elevating academic register through formal preposition-fronting in relative structures',
    badge: 'Preposition + Which/Whom',
    description: 'In high-register, formal academic English, prepositions are placed BEFORE the relative pronoun rather than left dangling at the end of the clause: 1) For things: "Preposition + which" (in which, on which, through which, for which, by which). 2) For persons: "Preposition + whom" (to whom, with whom, by whom; NEVER "to who"). 3) For possession: "Preposition + whose + noun" (in whose care, on whose behalf).',
    keyRule: 'Formal register: Preposition + which (for things) / Preposition + whom (for persons). NEVER use "that" after a preposition (NOT "in that" as a relative pronoun).',
    formula: 'Noun + Preposition + which / whom / whose + Clause.',
    examples: [
      'The sterile chamber in which the semiconductor microchips are fabricated is strictly climate-controlled.',
      'The senior professor to whom the research fellowship was awarded has published over two hundred articles.',
      'This is the theoretical mathematical principle on which our entire quantum cryptographic model is founded.',
      'The committee selected three candidates, all of whom possess extensive doctoral research experience.',
      'The international treaty under which carbon emissions are capped was signed by one hundred fifty nations.'
    ]
  },
  {
    id: 'reduced_relative_clauses',
    title: 'Reduced Relative Clauses (omitting relative pronoun + "be")',
    subtitle: 'Condensing descriptive clauses into concise participial and prepositional phrases',
    badge: 'Reduced Relatives',
    description: 'Relative clauses can be reduced to create more compact, elegant prose by deleting the relative pronoun and the form of "be": 1) Active continuous/routine -> Present participle: "The students who are working in the lab" -> "The students working in the lab". 2) Passive -> Past participle: "The artifacts that were discovered in the tomb" -> "The artifacts discovered in the tomb". 3) Adjective/Prepositional phrases: "The books that are on the shelf" -> "The books on the shelf".',
    keyRule: 'Active: drop pronoun+be, keep V-ing ("The man standing over there"). Passive: drop pronoun+be, keep V3 ("The report published yesterday").',
    formula: 'Noun + V-ing (active) OR Noun + V3 (passive) [omitting who/which/that + is/are/was/were].',
    examples: [
      'All researchers attending the international neuroscience symposium must wear conference badges.',
      'The ancient parchment manuscripts preserved in the university archive date back to the fourteenth century.',
      'Anyone experiencing severe adverse symptoms should contact the hospital emergency desk immediately.',
      'The technological prototype developed by our engineering startup won first prize at the global expo.',
      'Solar panels installed on residential rooftops generate clean, distributed electrical power.'
    ]
  },
  {
    id: 'cleft_sentences_emphasis',
    title: 'Cleft Sentences for Focus & Emphasis (What we need is..., It was John who...)',
    subtitle: 'Structuring sentences to highlight, isolate, and emphasize specific information',
    badge: 'Cleft Sentences (Focus)',
    description: 'Cleft sentences divide a simple sentence into two clauses to give special emphasis to a specific piece of information: 1) "It-cleft": "It is/was + emphasized element + that/who + rest of clause" ("It was Dr. Alvarez who discovered the mutation"). 2) "Wh-cleft / Pseudo-cleft": "What + clause + is/was + emphasized element" ("What we need is more laboratory funding"). 3) "All-cleft": "All I want is a peaceful weekend".',
    keyRule: 'It is/was [Emphasized Word] that/who [Clause]. What [Clause] is/was [Emphasized Element].',
    formula: 'It + is/was + FOCUS + that/who + Rest | What + S + V + is/was + FOCUS.',
    examples: [
      'It was Alexander Fleming who discovered the antibacterial properties of penicillin in 1928.',
      'What the research team urgently requires is additional funding for high-performance computing.',
      'It is through rigorous double-blind clinical trials that new medical therapies are validated.',
      'What surprised the astrophysicists was the unexpected magnitude of the gamma-ray burst.',
      'All we need to complete the experiment is a reliable source of liquid nitrogen.'
    ]
  }
];

export function getA4ClausesParticiplesStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'participle_clauses':
      return generateParticipleClausesQuestions(starNumber, mSeed);
    case 'relative_pronouns_prepositions':
      return generatePrepositionalRelativesQuestions(starNumber, mSeed);
    case 'reduced_relative_clauses':
      return generateReducedRelativesQuestions(starNumber, mSeed);
    case 'cleft_sentences_emphasis':
      return generateCleftSentencesQuestions(starNumber, mSeed);
    default:
      return generateParticipleClausesQuestions(starNumber, mSeed);
  }
}

// 1. Participle Clauses Pool
function generateParticipleClausesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '', target: 'Having analyzed the raw genomic data,', wrong: ['Analyzing of having the genomic data,', 'Analyzed having the genomic data,', 'Having been analyze the genomic data,'], context: 'the bioinformatician identified the target gene mutation.', note: 'Perfect Participle "Having + V3" shows an action completed prior to the main clause.' },
    { prompt: '', target: 'Located high in the Chilean Andes,', wrong: ['Locating high in the Chilean Andes,', 'Having locate high in the Andes,', 'To locate high in the Andes,'], context: 'the optical observatory enjoys exceptionally clear atmospheric conditions.', note: 'Past Participle expresses passive location: Located high in...' },
    { prompt: '', target: 'Realizing that the chemical reaction was exothermic,', wrong: ['Realized that the reaction was exothermic,', 'Having realize that the reaction was,', 'To realizing that the reaction was,'], context: 'Dr. Lin immediately lowered the heating mantle temperature.', note: 'Present Participle (-ing) expresses simultaneous cause/action.' },
    { prompt: '', target: 'Having been inspected by aviation authorities,', wrong: ['Inspecting by aviation authorities,', 'Having inspect by aviation authorities,', 'Being inspect by aviation authorities,'], context: 'the supersonic jet was certified for transatlantic passenger service.', note: 'Passive Perfect Participle: Having been inspected.' },
    { prompt: '', target: 'Hearing the audible evacuation alarm,', wrong: ['Heard the audible evacuation alarm,', 'Having hear the evacuation alarm,', 'To hear the evacuation alarm,'], context: 'all laboratory personnel evacuated the cleanroom in an orderly manner.', note: 'Present Participle (-ing) for immediate subsequent action: Hearing the alarm.' },
    { prompt: '', target: 'Damaged by the severe hailstorm,', wrong: ['Damaging by the severe hailstorm,', 'Having damage by the hailstorm,', 'Being damage by the hailstorm,'], context: 'the photovoltaic solar array required extensive panel replacement.', note: 'Past Participle for passive cause: Damaged by...' },
    { prompt: '', target: 'Having completed her doctoral dissertation in neuroscience,', wrong: ['Completing having her doctoral dissertation,', 'Completed her doctoral dissertation having,', 'To have completing her dissertation,'], context: 'Elena applied for post-doctoral fellowships in Zurich.', note: 'Perfect Participle: Having completed.' },
    { prompt: '', target: 'Operating under extreme deep-sea hydrostatic pressure,', wrong: ['Operated under extreme deep-sea pressure,', 'Having operate under extreme pressure,', 'To operating under extreme pressure,'], context: 'the robotic submersible captured high-definition footage of hydrothermal vents.', note: 'Active ongoing state: Operating under...' },
    { prompt: '', target: 'Surrounded by dense tropical rainforest,', wrong: ['Surrounding by dense tropical rainforest,', 'Having surround by dense rainforest,', 'Being surround by dense rainforest,'], context: 'the ancient Mayan temple remained hidden for centuries.', note: 'Passive state: Surrounded by...' },
    { prompt: '', target: 'Not knowing how to operate the high-precision laser,', wrong: ['Not known how to operate the laser,', 'Knowing not how to operate the laser,', 'Not to knowing how to operate,'], context: 'the novice intern waited for the senior technician.', note: 'Negative participle: Not knowing...' },
    { prompt: '', target: 'Having lost all electrical telemetry signals,', wrong: ['Losing having all telemetry signals,', 'Lost having all telemetry signals,', 'Having been lose all telemetry,'], context: 'the space probe automatically entered autonomous safe mode.', note: 'Having lost...' },
    { prompt: '', target: 'Synthesized in a sterile laboratory environment,', wrong: ['Synthesizing in a sterile environment,', 'Having synthesize in a sterile environment,', 'Being synthesize in a sterile environment,'], context: 'the artificial diamond crystals exhibited flawless optical clarity.', note: 'Past Participle: Synthesized in...' },
    { prompt: '', target: 'Looking through the high-powered electron microscope,', wrong: ['Looked through the electron microscope,', 'Having look through the microscope,', 'To looking through the microscope,'], context: 'the virologist observed viral capsid proteins assembling.', note: 'Present Participle: Looking through...' },
    { prompt: '', target: 'Having been warned about the impending blizzard,', wrong: ['Warning about the impending blizzard,', 'Having warn about the blizzard,', 'Being warn about the blizzard,'], context: 'the mountaineering team pitched their tents in a sheltered crevasse.', note: 'Passive Perfect Participle: Having been warned.' },
    { prompt: '', target: 'Written in ancient classical Sanskrit,', wrong: ['Writing in ancient classical Sanskrit,', 'Having write in ancient Sanskrit,', 'Being write in ancient Sanskrit,'], context: 'the palm-leaf manuscript required specialized philological translation.', note: 'Past Participle: Written in...' },
    { prompt: '', target: 'Fearing potential sample cross-contamination,', wrong: ['Feared potential cross-contamination,', 'Having fear cross-contamination,', 'To fearing cross-contamination,'], context: 'the researchers changed their nitrile gloves after each pipetting cycle.', note: 'Present Participle for reason: Fearing...' },
    { prompt: '', target: 'Having worked for forty-eight consecutive hours,', wrong: ['Working having for forty-eight hours,', 'Worked having for forty-eight hours,', 'Having been work for forty-eight,'], context: 'the surgical team was relieved by the incoming morning staff.', note: 'Having worked...' },
    { prompt: '', target: 'Preserved in cryogenic liquid nitrogen,', wrong: ['Preserving in cryogenic liquid nitrogen,', 'Having preserve in liquid nitrogen,', 'Being preserve in liquid nitrogen,'], context: 'the stem cell cultures remain viable for decades.', note: 'Past Participle: Preserved in...' },
    { prompt: '', target: 'Failing to secure majority shareholder approval,', wrong: ['Failed to secure majority approval,', 'Having fail to secure majority approval,', 'To failing to secure approval,'], context: 'the pharmaceutical firm abandoned its proposed corporate acquisition.', note: 'Present Participle: Failing to...' },
    { prompt: '', target: 'Equipped with state-of-the-art infrared optical sensors,', wrong: ['Equipping with state-of-the-art sensors,', 'Having equip with optical sensors,', 'Being equip with optical sensors,'], context: 'the orbital satellite detected subtle geothermal heat anomalies.', note: 'Past Participle: Equipped with...' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Participle Clauses');
}

// 2. Relative Pronouns with Prepositions Pool
function generatePrepositionalRelativesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The sterile cleanroom', target: 'in which the semiconductor chips are fabricated', wrong: ['in that the semiconductor chips are fabricated', 'in where the semiconductor chips are fabricated', 'which in the chips are fabricated'], context: 'is monitored around the clock.', note: 'Formal relative structure: Preposition + which ("in which", never "in that").' },
    { prompt: 'The distinguished professor', target: 'to whom the international fellowship was awarded', wrong: ['to who the international fellowship was awarded', 'to that the international fellowship was awarded', 'whom to the fellowship was awarded'], context: 'has published over three hundred academic monographs.', note: 'Preposition + whom (never "to who").' },
    { prompt: 'This is the theoretical mathematical principle', target: 'on which our entire cryptography model is founded.', wrong: ['on that our entire model is founded.', 'on where our model is founded.', 'which on our model is founded.'], context: '', note: '"on which" (never "on that").' },
    { prompt: 'The committee interviewed twelve candidates,', target: 'all of whom possess doctoral qualifications.', wrong: ['all of which possess doctoral qualifications.', 'all of that possess doctoral qualifications.', 'all of who possess doctoral qualifications.'], context: '', note: '"all of whom" for persons.' },
    { prompt: 'The international treaty', target: 'under which global carbon emissions are regulated', wrong: ['under that global emissions are regulated', 'under where global emissions are regulated', 'which under global emissions are regulated'], context: 'was ratified by one hundred ninety nations.', note: '"under which".' },
    { prompt: 'The research team consists of eight scientists,', target: 'none of whom had previous experience with CRISPR.', wrong: ['none of which had previous experience with CRISPR.', 'none of that had previous experience.', 'none of who had previous experience.'], context: '', note: '"none of whom" for persons.' },
    { prompt: 'The geological fault line', target: 'along which the tectonic plates grind', wrong: ['along that the tectonic plates grind', 'along where the tectonic plates grind', 'which along the tectonic plates grind'], context: 'stretches for over eight hundred kilometers.', note: '"along which".' },
    { prompt: 'The senior pediatric surgeon', target: 'with whom Dr. Evans consulted', wrong: ['with who Dr. Evans consulted', 'with that Dr. Evans consulted', 'whom with Dr. Evans consulted'], context: 'recommended immediate corrective surgery.', note: '"with whom".' },
    { prompt: 'We visited three autonomous wind farms,', target: 'each of which generates two hundred megawatts.', wrong: ['each of whom generates two hundred megawatts.', 'each of that generates two hundred megawatts.', 'each of where generates two hundred megawatts.'], context: '', note: '"each of which" for things/facilities.' },
    { prompt: 'The ancient legal document', target: 'by which the university was chartered', wrong: ['by that the university was chartered', 'by where the university was chartered', 'which by the university was chartered'], context: 'dates back to the thirteenth century.', note: '"by which".' },
    { prompt: 'The patient was assigned to a specialized recovery ward', target: 'in whose care she remained', wrong: ['in which care she remained for person', 'in who care she remained', 'in that care she remained'], context: 'for three consecutive weeks.', note: '"in whose care" for possessive relative.' },
    { prompt: 'The complex differential equation', target: 'for which no analytical solution exists', wrong: ['for that no analytical solution exists', 'for where no analytical solution exists', 'which for no analytical solution exists'], context: 'must be approximated using numerical computer simulations.', note: '"for which".' },
    { prompt: 'The international delegates,', target: 'most of whom were fluent in French and English,', wrong: ['most of which were fluent in French and English,', 'most of that were fluent in French,', 'most of who were fluent in French,'], context: 'debated the climate resolution all morning.', note: '"most of whom".' },
    { prompt: 'The high-speed rail network', target: 'through which major European capitals are linked', wrong: ['through that major capitals are linked', 'through where major capitals are linked', 'which through major capitals are linked'], context: 'runs entirely on renewable electricity.', note: '"through which".' },
    { prompt: 'The keynote speaker,', target: 'to whose presentation everyone had eagerly looked forward,', wrong: ['to who presentation everyone looked forward,', 'to which presentation everyone looked forward,', 'to that presentation everyone looked forward,'], context: 'delivered an inspiring lecture.', note: '"to whose presentation".' },
    { prompt: 'The biochemical process', target: 'by means of which plants convert sunlight into glucose', wrong: ['by means of that plants convert sunlight', 'by means of where plants convert sunlight', 'which by means of plants convert sunlight'], context: 'is known as photosynthesis.', note: '"by means of which".' },
    { prompt: 'The research institute purchased five mass spectrometers,', target: 'two of which were defective upon arrival.', wrong: ['two of whom were defective upon arrival.', 'two of that were defective upon arrival.', 'two of where were defective upon arrival.'], context: '', note: '"two of which" for machines.' },
    { prompt: 'The historical archives', target: 'from which these rare cartographic maps were sourced', wrong: ['from that these rare maps were sourced', 'from where these rare maps were sourced', 'which from these rare maps were sourced'], context: 'are preserved in the Vatican Library.', note: '"from which".' },
    { prompt: 'The mentor', target: 'without whom she could not have completed her doctorate', wrong: ['without who she could not have completed', 'without that she could not have completed', 'whom without she could not have completed'], context: 'attended her graduation ceremony.', note: '"without whom".' },
    { prompt: 'The specific experimental conditions', target: 'under which the superconducting effect occurs', wrong: ['under that the superconducting effect occurs', 'under where the superconducting effect occurs', 'which under the superconducting effect occurs'], context: 'require near absolute zero temperatures.', note: '"under which".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Relative Pronouns with Prepositions');
}

// 3. Reduced Relative Clauses Pool
function generateReducedRelativesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'All researchers', target: 'attending the international biotechnology symposium', wrong: ['attended the international symposium currently', 'who attending the symposium', 'are attending the symposium without connector'], context: 'must register at the main desk.', note: 'Reduced active relative: "who are attending" -> "attending".' },
    { prompt: 'The ancient parchment manuscripts', target: 'preserved in the university vault', wrong: ['preserving in the university vault', 'which preserved in the vault without be', 'that preserving in the vault'], context: 'date back to the fourteenth century.', note: 'Reduced passive relative: "which are preserved" -> "preserved".' },
    { prompt: 'Anyone', target: 'experiencing adverse clinical symptoms', wrong: ['experienced adverse symptoms currently', 'who experiencing symptoms', 'is experiencing symptoms without connector'], context: 'should consult a medical specialist immediately.', note: 'Reduced active: "who is experiencing" -> "experiencing".' },
    { prompt: 'The revolutionary prototype', target: 'developed by our engineering startup', wrong: ['developing by our startup', 'which developing by startup', 'that developed without be in passive'], context: 'won first prize at the global robotics exhibition.', note: 'Reduced passive: "which was developed" -> "developed".' },
    { prompt: 'Solar panels', target: 'installed on residential rooftops', wrong: ['installing on residential rooftops', 'who installed on rooftops', 'that installing on rooftops'], context: 'generate substantial clean electricity during summer months.', note: 'Reduced passive: "that are installed" -> "installed".' },
    { prompt: 'The delegates', target: 'representing fifty different nations', wrong: ['represented fifty nations actively', 'who representing fifty nations', 'are representing fifty nations without connector'], context: 'convened in Geneva for the peace negotiations.', note: 'Reduced active: "who represented / were representing" -> "representing".' },
    { prompt: 'The experimental medication', target: 'administered during the clinical trial', wrong: ['administering during the trial', 'which administering during trial', 'that administered without be in passive'], context: 'showed remarkable therapeutic efficacy.', note: 'Reduced passive: "which was administered" -> "administered".' },
    { prompt: 'Passengers', target: 'traveling on transatlantic flights', wrong: ['traveled on flights actively', 'who traveling on flights', 'are traveling on flights without connector'], context: 'must present valid international passports.', note: 'Reduced active: "who are traveling" -> "traveling".' },
    { prompt: 'The historical artifacts', target: 'unearthed during the subway excavation', wrong: ['unearthing during the excavation', 'which unearthing during excavation', 'that unearthed without be in passive'], context: 'are now on public display in the national museum.', note: 'Reduced passive: "which were unearthed" -> "unearthed".' },
    { prompt: 'Vehicles', target: 'exceeding the maximum tunnel speed limit', wrong: ['exceeded the speed limit actively', 'who exceeding the limit', 'are exceeding the limit without connector'], context: 'will be automatically photographed by radar cameras.', note: 'Reduced active: "which exceed / are exceeding" -> "exceeding".' },
    { prompt: 'The classified report', target: 'published by the investigatory committee', wrong: ['publishing by the committee', 'which publishing by committee', 'that published without be in passive'], context: 'revealed severe institutional oversights.', note: 'Reduced passive: "which was published" -> "published".' },
    { prompt: 'Students', target: 'applying for postgraduate research grants', wrong: ['applied for grants actively', 'who applying for grants', 'are applying for grants without connector'], context: 'must submit three faculty letters of recommendation.', note: 'Reduced active: "who are applying" -> "applying".' },
    { prompt: 'The high-voltage transformers', target: 'damaged during the nocturnal lightning strike', wrong: ['damaging during the strike', 'which damaging during strike', 'that damaged without be in passive'], context: 'were replaced by emergency maintenance crews.', note: 'Reduced passive: "which were damaged" -> "damaged".' },
    { prompt: 'Astronomers', target: 'monitoring the deep-space radio array', wrong: ['monitored the radio array actively', 'who monitoring the array', 'are monitoring the array without connector'], context: 'detected an anomalous fast radio burst.', note: 'Reduced active: "who were monitoring" -> "monitoring".' },
    { prompt: 'The genetic therapy', target: 'approved by the federal health agency', wrong: ['approving by the federal agency', 'which approving by agency', 'that approved without be in passive'], context: 'offers hope to patients with rare muscular disorders.', note: 'Reduced passive: "which was approved" -> "approved".' },
    { prompt: 'Pedestrians', target: 'walking through the university botanical garden', wrong: ['walked through the garden actively', 'who walking through garden', 'are walking through garden without connector'], context: 'are requested to stay on the paved stone paths.', note: 'Reduced active: "who are walking" -> "walking".' },
    { prompt: 'The optical lenses', target: 'manufactured in the precision workshop', wrong: ['manufacturing in the workshop', 'which manufacturing in workshop', 'that manufactured without be in passive'], context: 'meet sub-nanometer aerospace tolerances.', note: 'Reduced passive: "which are manufactured" -> "manufactured".' },
    { prompt: 'Volunteers', target: 'participating in the medical study', wrong: ['participated in study actively', 'who participating in study', 'are participating in study without connector'], context: 'will receive complimentary health screenings.', note: 'Reduced active: "who are participating" -> "participating".' },
    { prompt: 'The confidential files', target: 'encrypted with 256-bit AES algorithms', wrong: ['encrypting with 256-bit algorithms', 'which encrypting with algorithms', 'that encrypted without be in passive'], context: 'cannot be intercepted by unauthorized third parties.', note: 'Reduced passive: "which are encrypted" -> "encrypted".' },
    { prompt: 'Doctors', target: 'working in emergency intensive care units', wrong: ['worked in units actively', 'who working in units', 'are working in units without connector'], context: 'undergo rigorous cardiovascular resuscitation training.', note: 'Reduced active: "who work / are working" -> "working".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Reduced Relative Clauses');
}

// 4. Cleft Sentences for Emphasis Pool
function generateCleftSentencesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '', target: 'It was Dr. Alexander Fleming who', wrong: ['What Dr. Alexander Fleming that', 'There was Dr. Alexander Fleming who', 'It is Alexander Fleming which'], context: 'discovered penicillin serendipitously in his London laboratory.', note: 'It-cleft for person focus: "It was [Person] who [Clause]".' },
    { prompt: '', target: 'What the research laboratory urgently requires is', wrong: ['It the research laboratory urgently requires is', 'Which the research laboratory requires is', 'That the research laboratory requires is'], context: 'additional high-performance GPU computing clusters.', note: 'Wh-cleft / Pseudo-cleft: "What + clause + is + focus".' },
    { prompt: '', target: 'It was in 1969 that', wrong: ['What in 1969 that', 'There was in 1969 which', 'It was in 1969 when strictly cleft'], context: 'human astronauts first walked on the surface of the Moon.', note: 'It-cleft for time emphasis: "It was in 1969 that...".' },
    { prompt: '', target: 'What surprised the astrophysicists was', wrong: ['It surprised the astrophysicists was', 'Which surprised the astrophysicists was', 'That surprised the astrophysicists was'], context: 'the immense magnitude of the colliding black holes\' gravitational waves.', note: 'Wh-cleft: What + clause + was...' },
    { prompt: '', target: 'It is through rigorous double-blind clinical trials that', wrong: ['What is through double-blind trials that', 'There is through double-blind trials that', 'It is through double-blind trials which'], context: 'novel medical pharmaceuticals are scientifically validated.', note: 'It-cleft for manner/method: It is through [method] that...' },
    { prompt: '', target: 'All we need to complete the experiment is', wrong: ['What all we need to complete is', 'It all we need to complete is', 'Which all we need to complete is'], context: 'a continuous supply of cryogenic liquid helium.', note: 'All-cleft: "All we need is...".' },
    { prompt: '', target: 'It was the catastrophic tsunami that', wrong: ['What was the catastrophic tsunami that', 'There was the catastrophic tsunami who', 'It was the tsunami which in cleft focus'], context: 'destroyed the coastal nuclear cooling backup infrastructure.', note: 'It-cleft for thing/event: It was [thing] that...' },
    { prompt: '', target: 'What the lead climatologist pointed out was', wrong: ['It the climatologist pointed out was', 'Which the climatologist pointed out was', 'That the climatologist pointed out was'], context: 'the accelerated melting rate of the West Antarctic ice sheet.', note: 'Wh-cleft: What + clause + was...' },
    { prompt: '', target: 'It was because of her pioneering mRNA discoveries that', wrong: ['What was because of her discoveries that', 'There was because of her discoveries that', 'It was because of her discoveries which'], context: 'she was awarded the Nobel Prize in Medicine.', note: 'It-cleft for reason: It was because of [reason] that...' },
    { prompt: '', target: 'What made the deep-sea expedition so challenging was', wrong: ['It made the deep-sea expedition challenging was', 'Which made the expedition challenging was', 'That made the expedition challenging was'], context: 'the extreme hydrostatic pressure and total darkness.', note: 'Wh-cleft: What made [X] was...' },
    { prompt: '', target: 'It is the dedication of our volunteer medical staff that', wrong: ['What is the dedication of our staff that', 'There is the dedication of staff that', 'It is the dedication of staff which'], context: 'keeps the rural community health clinic operating.', note: 'It-cleft: It is [Noun Phrase] that...' },
    { prompt: '', target: 'All I am asking for is', wrong: ['What all I am asking for is', 'It all I am asking for is', 'Which all I am asking for is'], context: 'an objective, transparent review of the clinical trial data.', note: 'All-cleft: All I am asking for is...' },
    { prompt: '', target: 'It was only after the power grid collapsed that', wrong: ['What was only after the power grid collapsed that', 'There was only after the grid collapsed that', 'It was only after the grid collapsed when'], context: 'the city council recognized the need for solar battery micro-grids.', note: 'It-cleft: It was only after [Clause] that...' },
    { prompt: '', target: 'What impressed the doctoral examination committee was', wrong: ['It impressed the doctoral committee was', 'Which impressed the doctoral committee was', 'That impressed the committee was'], context: 'her comprehensive mastery of multivariate statistical proofs.', note: 'Wh-cleft: What impressed [X] was...' },
    { prompt: '', target: 'It was Marie Curie who', wrong: ['What was Marie Curie that', 'There was Marie Curie who', 'It was Marie Curie which'], context: 'became the first person to win two Nobel Prizes in different scientific fields.', note: 'It-cleft: It was [Person] who...' },
    { prompt: '', target: 'What the company needs to do is', wrong: ['It the company needs to do is', 'Which the company needs to do is', 'That the company needs to do is'], context: 'restructure its entire cybersecurity protocol architecture.', note: 'Wh-cleft with do: What + S + needs to do is...' },
    { prompt: '', target: 'It is not the hardware cost but the lack of trained engineers that', wrong: ['What is not the hardware cost but that', 'There is not the hardware cost but that', 'It is not the hardware cost but which'], context: 'delays the quantum supercomputer deployment.', note: 'It-cleft with contrast: It is not X but Y that...' },
    { prompt: '', target: 'What fascinated the public most was', wrong: ['It fascinated the public most was', 'Which fascinated the public most was', 'That fascinated the public was'], context: 'the ultra-high-resolution images of the distant Pillars of Creation.', note: 'Wh-cleft: What fascinated [X] was...' },
    { prompt: '', target: 'It was during the Renaissance that', wrong: ['What was during the Renaissance that', 'There was during the Renaissance which', 'It was during the Renaissance when in cleft'], context: 'scientific empirical methodology began to eclipse scholastic dogma.', note: 'It-cleft for era/time: It was during [period] that...' },
    { prompt: '', target: 'What matters most in clinical diagnostic medicine is', wrong: ['It matters most in medicine is', 'Which matters most in medicine is', 'That matters most in medicine is'], context: 'accuracy, compassion, and rapid evidence-based intervention.', note: 'Wh-cleft: What matters most is...' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Cleft Sentences for Focus & Emphasis');
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
        explanation: `Incorrect. "${w}" violates the clause/emphasis rule. ${item.note}`
      }))
    ];

    const seedIndex = (star * 7 + i * 13 + mSeed * 17) % 4;
    const shuffledOptions = [...rawOptions];
    for (let s = 0; s < seedIndex; s++) {
      const first = shuffledOptions.shift();
      if (first) shuffledOptions.push(first);
    }

    questions.push({
      id: (star - 1) * 20 + i + 1,
      question: `Question ${i + 1} of 20 (Star #${star}) • ${topicTitle}`,
      sentenceWithBlank: sentenceWithBlank,
      options: shuffledOptions,
      hint: `Hint: Focus on ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
