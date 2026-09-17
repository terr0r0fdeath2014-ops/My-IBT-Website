import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A4_PASSIVE_CAUSATIVE_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'passive_continuous_perfect',
    title: 'Passive Continuous & Perfect Forms (is being done, has been done, had been done)',
    subtitle: 'Complex passive verb aspects for ongoing operations and completed background events',
    badge: 'Complex Passive Aspects',
    description: 'Master multi-auxiliary passive forms: Present Continuous Passive: "is/are being + V3" (action ongoing right now: "The bridge is being repaired"). Past Continuous Passive: "was/were being + V3" (action ongoing in past: "The data was being analyzed"). Present Perfect Passive: "have/has been + V3" (action completed with present relevance: "The vaccine has been approved"). Past Perfect Passive: "had been + V3" (action completed before another past event: "The lab had been sanitized").',
    keyRule: 'Continuous Passive: be + being + V3. Perfect Passive: have/has/had + been + V3.',
    formula: 'Pres Cont: is/are being V3 | Past Cont: was/were being V3 | Pres Perf: has/have been V3 | Past Perf: had been V3.',
    examples: [
      'A new particle accelerator is currently being constructed beneath the Swiss alps.',
      'The archaeological artifacts were being cataloged when the power failure occurred.',
      'Over fifty thousand doses of the antiviral treatment have already been distributed.',
      'The experimental sensors had been recalibrated before the seismic tremors began.',
      'Why are the high-voltage generators being tested at this hour?'
    ]
  },
  {
    id: 'causative_structures',
    title: 'Causative Structures (Have / Get something done & Have someone do)',
    subtitle: 'Arranging for services, professional repairs, and having tasks performed by others',
    badge: 'Have/Get something done',
    description: 'Use causative structures when you arrange for someone else (usually a professional) to perform a service for you: 1) Passive Causative: "Have / Get + Object + Past Participle (V3)" ("I had my car repaired", "She gets her eyes tested"). 2) Active Causative: "Have + Person + Base Verb" ("The professor had his assistant compile the dataset") vs. "Get + Person + To-Infinitive" ("She got her colleague to review the draft").',
    keyRule: 'Passive: Have / Get + Object + V3 ("have it repaired"). Active: Have + Person + Base Verb ("have him do it") vs. Get + Person + to-Infinitive ("get him to do it").',
    formula: 'S + have/get + O (thing) + V3 | S + have + person + base verb | S + get + person + to-verb.',
    examples: [
      'The research institute had all its optical microscopes recalibrated by certified specialists.',
      'Dr. Alvarez gets her laboratory equipment inspected every six months.',
      'The director had his senior assistant draft the annual pharmaceutical budget.',
      'We managed to get the software technician to patch the server vulnerability overnight.',
      'Where did you have your dental surgery performed?'
    ]
  },
  {
    id: 'impersonal_reporting_passives',
    title: 'Impersonal & Reporting Passives (It is said that..., He is believed to be...)',
    subtitle: 'Academic distance, objective journalism, and attributing claims neutrally',
    badge: 'Reporting Passives',
    description: 'In academic writing and journalism, impersonal passive structures allow writers to report ideas, beliefs, rumors, and hypotheses neutrally without committing personally: 1) Structure 1: "It is + V3 (said/believed/thought/claimed/estimated) + that + clause" ("It is believed that dark matter comprises 85% of cosmic mass"). 2) Structure 2: "Subject + is/are + V3 + to-infinitive (or to have + V3 for past actions)" ("He is known to be an expert", "The temple is believed to have been constructed in 300 BC").',
    keyRule: 'Structure 1: It is said/believed/reported that [Clause]. Structure 2: Subject + is/are said/believed/thought + to-Infinitive (or "to have + V3" for earlier past actions).',
    formula: 'It + is/was + V3 (said/believed/thought/reported) + that + S + V | S + is/are + V3 + to + V / to have + V3.',
    examples: [
      'It is widely estimated that global temperatures have risen by over one degree Celsius.',
      'The ancient Roman aqueduct is believed to have been built during the reign of Emperor Claudius.',
      'Dr. Vance is considered to be one of the foremost authorities on quantum information theory.',
      'It was reported that the clinical trials had yielded a ninety-five percent efficacy rate.',
      'The lost Mayan city is thought to lie buried beneath the dense rainforest canopy.'
    ]
  },
  {
    id: 'passive_prepositions_phrasal',
    title: 'Passive with Prepositions & Phrasal Verbs (is looked after, was accounted for)',
    subtitle: 'Preserving dependent prepositions and phrasal particles in passive constructions',
    badge: 'Passive + Prepositions',
    description: 'When converting sentences containing phrasal verbs or verbs with dependent prepositions into the passive voice, the preposition MUST remain attached immediately after the past participle verb (e.g. "They looked after the patient" -> "The patient was looked after"; "Nobody accounted for the missing data" -> "The missing data was not accounted for"). Do not drop the preposition.',
    keyRule: 'Keep the particle/preposition directly attached to the V3! (e.g., was operated on, is looked down upon, were listened to, has been disposed of).',
    formula: 'Subject + be + V3 + preposition / particle (+ by agent).',
    examples: [
      'All experimental biohazard waste must be properly disposed of in sealed containers.',
      'The pediatric patient was cared for by a dedicated team of nurses and specialists.',
      'The theoretical discrepancy was eventually accounted for by relativistic gravitational effects.',
      'The controversial lecture proposal was strongly objected to by faculty committee members.',
      'These important safety regulations should not be looked upon lightly.'
    ]
  }
];

export function getA4PassiveCausativeStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'passive_continuous_perfect':
      return generateContinuousPerfectPassiveQuestions(starNumber, mSeed);
    case 'causative_structures':
      return generateCausativeQuestions(starNumber, mSeed);
    case 'impersonal_reporting_passives':
      return generateImpersonalReportingQuestions(starNumber, mSeed);
    case 'passive_prepositions_phrasal':
      return generatePassivePrepositionsQuestions(starNumber, mSeed);
    default:
      return generateContinuousPerfectPassiveQuestions(starNumber, mSeed);
  }
}

// 1. Continuous & Perfect Passive Pool
function generateContinuousPerfectPassiveQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'A state-of-the-art quantum supercomputer', target: 'is currently being built', wrong: ['is currently building', 'is currently been built', 'is currently being build'], context: 'in the university physics wing.', note: 'Present Continuous Passive: is being + V3.' },
    { prompt: 'The historical parchment manuscripts', target: 'were being restored by conservators', wrong: ['were being restoring by conservators', 'were been restored by conservators', 'were restoring by conservators'], context: 'when the museum alarm suddenly sounded.', note: 'Past Continuous Passive: were being + V3.' },
    { prompt: 'Over two million doses of the novel mRNA vaccine', target: 'have already been distributed', wrong: ['have already being distributed', 'have already distributed by health authorities', 'are already been distributed'], context: 'to medical clinics nationwide.', note: 'Present Perfect Passive: have been + V3.' },
    { prompt: 'The research laboratory', target: 'had already been sanitized', wrong: ['had already being sanitized', 'has already being sanitized', 'was already been sanitized'], context: 'before the sterile virology experiment commenced.', note: 'Past Perfect Passive: had been + V3.' },
    { prompt: 'Why', target: 'is the high-voltage electrical grid being shut down', wrong: ['is the grid being shutted down', 'is the grid been shut down', 'is the grid shutting down by engineers'], context: 'during peak laboratory operating hours?', note: 'Continuous passive question: is + subject + being + V3.' },
    { prompt: 'The experimental flight telemetry data', target: 'is still being analyzed', wrong: ['is still being analyzing', 'is still been analyzed', 'is still analyzing by computer'], context: 'by the aerospace computational cluster.', note: 'is being analyzed.' },
    { prompt: 'Several crucial archaeological artifacts', target: 'have been recovered', wrong: ['have being recovered', 'are been recovered', 'have recovered by dive team'], context: 'from the underwater Roman shipwreck site.', note: 'have been recovered.' },
    { prompt: 'When we entered the lecture theater, the keynote slides', target: 'were being projected onto the screen.', wrong: ['were being projecting onto screen.', 'were been projected onto screen.', 'were projecting onto screen.'], context: '', note: 'were being projected.' },
    { prompt: 'The scientific paper', target: 'has not been approved yet', wrong: ['has not being approved yet', 'is not been approved yet', 'has not approved yet by reviewers'], context: 'by the editorial board of the journal.', note: 'has not been approved.' },
    { prompt: 'All confidential files', target: 'had been erased from the mainframe', wrong: ['had being erased from mainframe', 'were been erased from mainframe', 'have being erased from mainframe'], context: 'before the cybersecurity investigators arrived.', note: 'had been erased.' },
    { prompt: 'The deep-sea pipeline', target: 'is being inspected by autonomous submersibles', wrong: ['is being inspecting by submersibles', 'is been inspected by submersibles', 'is inspecting by submersibles'], context: 'this week to detect structural micro-fractures.', note: 'is being inspected.' },
    { prompt: 'A new administrative director', target: 'has just been appointed', wrong: ['has just being appointed', 'is just been appointed', 'has just appointed by board'], context: 'to lead the National Health Institute.', note: 'has been appointed.' },
    { prompt: 'While the chemical compound', target: 'was being heated in the vacuum chamber,', wrong: ['was being heating in vacuum chamber,', 'was been heated in vacuum chamber,', 'was heating in vacuum chamber,'], context: 'a crystalline precipitate began to form on the glassware.', note: 'was being heated.' },
    { prompt: 'The environmental restoration project', target: 'has been funded by international grants', wrong: ['has being funded by grants', 'is been funded by grants', 'has funded by grants'], context: 'for the past five years.', note: 'has been funded.' },
    { prompt: 'The suspect', target: 'was being questioned by federal detectives', wrong: ['was being questioning by detectives', 'was been questioned by detectives', 'was questioning by detectives'], context: 'when his defense attorney arrived.', note: 'was being questioned.' },
    { prompt: 'Thousands of solar panels', target: 'have been installed across the desert', wrong: ['have being installed across desert', 'are been installed across desert', 'have installed across desert'], context: 'to power the metropolitan desalinization plant.', note: 'have been installed.' },
    { prompt: 'The old suspension bridge', target: 'was being repainted', wrong: ['was being repainting', 'was been repainted', 'was repainting by crew'], context: 'when an unexpected gale-force wind halted operations.', note: 'was being repainted.' },
    { prompt: 'The software vulnerability', target: 'had been patched by security engineers', wrong: ['had being patched by engineers', 'was been patched by engineers', 'has being patched by engineers'], context: 'hours before the zero-day exploit became public.', note: 'had been patched.' },
    { prompt: 'Blood samples', target: 'are currently being tested for antibodies', wrong: ['are currently being testing for antibodies', 'are currently been tested for antibodies', 'are currently testing for antibodies'], context: 'in the diagnostic pathology wing.', note: 'are being tested.' },
    { prompt: 'The annual financial budget', target: 'has finally been finalized', wrong: ['has finally being finalized', 'is finally been finalized', 'has finally finalized by committee'], context: 'after three rounds of intense stakeholder negotiations.', note: 'has been finalized.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Passive Continuous & Perfect Forms');
}

// 2. Causative Structures Pool
function generateCausativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The research laboratory director', target: 'had the electron microscope calibrated', wrong: ['had the electron microscope calibrate', 'had the electron microscope calibrating', 'had the microscope to calibrate'], context: 'by certified precision optical engineers.', note: 'Passive causative: had + object (microscope) + V3 (calibrated).' },
    { prompt: 'We need to', target: 'get the server security software updated', wrong: ['get the server security software update', 'get the server software updating', 'get the server software to update'], context: 'before the annual network compliance audit.', note: 'get + object + V3: get the software updated.' },
    { prompt: 'The professor', target: 'had her graduate student analyze', wrong: ['had her graduate student to analyze', 'had her graduate student analyzed', 'had her student analyzing for assignment'], context: 'the large econometric dataset.', note: 'Active causative with have: have + person + BASE VERB (analyze).' },
    { prompt: 'After much persuasion, she managed to', target: 'get the committee to approve', wrong: ['get the committee approve', 'get the committee approved', 'get the committee approving'], context: 'her interdisciplinary research grant proposal.', note: 'Active causative with get: get + person + TO-INFINITIVE (to approve).' },
    { prompt: 'How often do you', target: 'have your laboratory fire alarms inspected', wrong: ['have your fire alarms inspect', 'have your fire alarms to inspect', 'have your alarms inspecting'], context: 'by the municipal safety bureau?', note: 'have + object + V3: have your alarms inspected.' },
    { prompt: 'The surgical team', target: 'had the operating theater sterilized', wrong: ['had the operating theater sterilize', 'had the operating theater to sterilize', 'had the theater sterilizing'], context: 'prior to the organ transplant procedure.', note: 'had the theater sterilized.' },
    { prompt: 'The director', target: 'had the marketing team design', wrong: ['had the marketing team to design', 'had the marketing team designed', 'had the team designing'], context: 'a new infographic for the pharmaceutical product launch.', note: 'had + person + base verb (design).' },
    { prompt: 'I need to', target: 'get my international passport renewed', wrong: ['get my international passport renew', 'get my passport to renew', 'get my passport renewing'], context: 'before flying to the symposium in Zurich next month.', note: 'get + object + V3 (renewed).' },
    { prompt: 'Can you', target: 'get the IT department to reset', wrong: ['get the IT department reset', 'get the IT department resetted', 'get the IT department resetting'], context: 'your forgotten database administrative password?', note: 'get + person + to-infinitive: get the IT department to reset.' },
    { prompt: 'Dr. Evans', target: 'had his academic paper translated into French', wrong: ['had his academic paper translate into French', 'had his paper to translate into French', 'had his paper translating into French'], context: 'by a certified technical translator.', note: 'had + object + V3 (translated).' },
    { prompt: 'The university', target: 'had solar panels installed on the roof', wrong: ['had solar panels install on the roof', 'had solar panels to install on the roof', 'had solar panels installing on roof'], context: 'of the engineering library.', note: 'had + object + V3 (installed).' },
    { prompt: 'She', target: 'got her research assistant to format', wrong: ['got her research assistant format', 'got her assistant formatted', 'got her assistant formatting'], context: 'all the bibliographic citations according to APA guidelines.', note: 'get + person + to-infinitive (to format).' },
    { prompt: 'The aerospace manufacturer', target: 'had the jet turbine blades X-rayed', wrong: ['had the jet turbine blades X-ray', 'had the blades to X-ray', 'had the blades X-raying'], context: 'to check for internal metallurgical fatigue.', note: 'had + object + V3 (X-rayed).' },
    { prompt: 'We must', target: 'get our vehicle serviced', wrong: ['get our vehicle service', 'get our vehicle to service', 'get our vehicle servicing'], context: 'before embarking on our geological survey into the desert.', note: 'get + object + V3 (serviced).' },
    { prompt: 'The keynote speaker', target: 'had the sound technician adjust', wrong: ['had the sound technician to adjust', 'had the sound technician adjusted', 'had the technician adjusting'], context: 'the podium microphone before beginning his lecture.', note: 'had + person + base verb (adjust).' },
    { prompt: 'Where did Dr. Lin', target: 'have her laboratory coat tailored', wrong: ['have her laboratory coat tailor', 'have her coat to tailor', 'have her coat tailoring'], context: 'with custom protective sleeves?', note: 'have + object + V3 (tailored).' },
    { prompt: 'The hospital administration', target: 'got the electrical contractors to install', wrong: ['got the electrical contractors install', 'got the contractors installed', 'got the contractors installing'], context: 'redundant diesel backup generators.', note: 'get + person + to-infinitive (to install).' },
    { prompt: 'He', target: 'had his tooth extracted', wrong: ['had his tooth extract', 'had his tooth to extract', 'had his tooth extracting'], context: 'by an oral surgeon under local anesthesia.', note: 'had + object + V3 (extracted).' },
    { prompt: 'The lead investigator', target: 'had the statistician verify', wrong: ['had the statistician to verify', 'had the statistician verified', 'had the statistician verifying'], context: 'the regression p-values before publication.', note: 'had + person + base verb (verify).' },
    { prompt: 'They are going to', target: 'have their vintage telescope refurbished', wrong: ['have their vintage telescope refurbish', 'have their telescope to refurbish', 'have their telescope refurbishing'], context: 'by master optical craftsmen.', note: 'have + object + V3 (refurbished).' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Causative Structures (Have/Get done)');
}

// 3. Impersonal & Reporting Passives Pool
function generateImpersonalReportingQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '', target: 'It is widely believed that', wrong: ['He is widely believed that', 'There is widely believed that', 'It widely believes that'], context: 'dark energy accelerates the expansion rate of the universe.', note: 'Impersonal reporting passive: It is believed that + clause.' },
    { prompt: 'The ancient stone temple', target: 'is thought to have been constructed', wrong: ['is thought to construct', 'is thought that constructed', 'thinks to have been constructed'], context: 'around 3000 BC by Neolithic builders.', note: 'Personal passive with perfect infinitive for past action: is thought to have been constructed.' },
    { prompt: 'Dr. Katherine Johnson', target: 'is considered to be one of the greatest mathematicians', wrong: ['is considered being one of the greatest', 'is considered that she is one of greatest', 'considers to be one of the greatest'], context: 'in NASA history.', note: 'Subject + is considered to be + noun phrase.' },
    { prompt: '', target: 'It was reported that', wrong: ['It reported that', 'There was reported that', 'He was reported that'], context: 'the experimental fusion reactor sustained plasma for twenty minutes.', note: 'Impersonal passive: It was reported that + clause.' },
    { prompt: 'The missing deep-sea submarine', target: 'is presumed to have imploded', wrong: ['is presumed that imploded', 'presumes to have imploded', 'is presumed to implode past'], context: 'under catastrophic hydrostatic pressure.', note: 'is presumed to have imploded (earlier event).' },
    { prompt: '', target: 'It is estimated that over eighty percent of oceanic species', wrong: ['It estimates that over eighty percent of species', 'There is estimated that eighty percent', 'He is estimated that eighty percent'], context: 'remain completely undiscovered by marine biologists.', note: 'It is estimated that + clause.' },
    { prompt: 'The pharmaceutical compound', target: 'is claimed to reduce viral replication', wrong: ['is claimed that it reduces without clause', 'claims to reduce viral replication by passive', 'is claimed reducing viral replication'], context: 'by over ninety percent in laboratory trials.', note: 'is claimed to reduce + base verb.' },
    { prompt: '', target: 'It is known that quantum particles', wrong: ['It knows that quantum particles', 'There is known that quantum particles', 'They are known that quantum particles'], context: 'can exist in multiple states simultaneously until measured.', note: 'It is known that + clause.' },
    { prompt: 'The prime suspect in the cyberattack', target: 'is understood to be hiding', wrong: ['is understood that is hiding', 'understands to be hiding', 'is understood hiding'], context: 'in an undisclosed Eastern European location.', note: 'is understood to be hiding (continuous infinitive).' },
    { prompt: '', target: 'It was expected that the clinical trials', wrong: ['It expected that the clinical trials', 'There was expected that clinical trials', 'He was expected that clinical trials'], context: 'would conclude before the end of the fiscal quarter.', note: 'It was expected that + clause.' },
    { prompt: 'The historic treaty', target: 'is said to have been signed', wrong: ['is said that was signed', 'says to have been signed', 'is said to be signed in past'], context: 'in the royal palace of Versailles.', note: 'is said to have been signed (past action).' },
    { prompt: '', target: 'It is argued by many sociologists that', wrong: ['It argues by many sociologists that', 'There is argued by sociologists that', 'They are argued that sociologists'], context: 'urban green spaces significantly improve mental well-being.', note: 'It is argued that + clause.' },
    { prompt: 'The newly discovered exoplanet', target: 'is believed to possess liquid water', wrong: ['is believed that possesses', 'believes to possess liquid water', 'is believed possessing water'], context: 'on its rocky surface.', note: 'is believed to possess.' },
    { prompt: '', target: 'It has been suggested that dietary habits', wrong: ['It has suggested that dietary habits', 'There has been suggested that habits', 'He has been suggested that habits'], context: 'play a fundamental role in regulating cellular longevity.', note: 'It has been suggested that + clause.' },
    { prompt: 'The Renaissance manuscript', target: 'is rumored to have belonged', wrong: ['is rumored that belonged', 'rumors to have belonged', 'is rumored to belong in past'], context: 'to the personal library of Leonardo da Vinci.', note: 'is rumored to have belonged.' },
    { prompt: '', target: 'It is widely acknowledged that climate change', wrong: ['It widely acknowledges that climate change', 'There is widely acknowledged that climate', 'They are widely acknowledged that climate'], context: 'poses an existential risk to low-lying coastal archipelagos.', note: 'It is acknowledged that + clause.' },
    { prompt: 'The ancient Mayan citadel', target: 'is thought to have housed', wrong: ['is thought that housed', 'thinks to have housed', 'is thought to house in ancient times'], context: 'more than one hundred thousand inhabitants at its peak.', note: 'is thought to have housed.' },
    { prompt: '', target: 'It was assumed that the volcanic eruption', wrong: ['It assumed that the volcanic eruption', 'There was assumed that the eruption', 'He was assumed that the eruption'], context: 'would cause widespread disruptions to transatlantic aviation.', note: 'It was assumed that + clause.' },
    { prompt: 'The gene therapy technique', target: 'is expected to revolutionize', wrong: ['is expected that revolutionizes', 'expects to revolutionize', 'is expected revolutionizing'], context: 'the treatment of hereditary blood disorders.', note: 'is expected to revolutionize.' },
    { prompt: '', target: 'It is feared that several endangered species', wrong: ['It fears that several endangered species', 'There is feared that several species', 'They are feared that several species'], context: 'may become extinct before conservation policies take effect.', note: 'It is feared that + clause.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Impersonal & Reporting Passives');
}

// 4. Passive with Prepositions & Phrasal Verbs Pool
function generatePassivePrepositionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'All hazardous chemical waste', target: 'must be properly disposed of', wrong: ['must be properly disposed', 'must be properly dispose of', 'must properly dispose of by self'], context: 'in designated airtight biohazard containers.', note: 'Passive with preposition: "disposed of" must keep the preposition "of".' },
    { prompt: 'The vulnerable pediatric patients', target: 'were lovingly cared for', wrong: ['were lovingly cared', 'were lovingly caring for by self', 'were care for lovingly'], context: 'by the specialized hospital nursing staff.', note: '"cared for" retains "for" in the passive.' },
    { prompt: 'The anomalous experimental discrepancy', target: 'was finally accounted for', wrong: ['was finally accounted', 'was finally account for', 'finally accounted for by self without be'], context: 'by factoring in quantum thermal fluctuations.', note: '"accounted for" retains "for".' },
    { prompt: 'The professor\'s controversial hypothesis', target: 'was fiercely objected to', wrong: ['was fiercely objected', 'was fiercely object to', 'fiercely objected to by self'], context: 'by several senior members of the faculty committee.', note: '"objected to" retains "to".' },
    { prompt: 'These fundamental laboratory safety regulations', target: 'should never be looked down upon', wrong: ['should never be looked down', 'should never looked down upon', 'should never be look down upon'], context: 'by novice researchers.', note: '"looked down upon" keeps both particles.' },
    { prompt: 'The unexpected conference cancellation', target: 'had not been bargained for', wrong: ['had not been bargained', 'had not bargained for by organizers', 'had not being bargained for'], context: 'by the international delegates.', note: '"bargained for" retains "for".' },
    { prompt: 'The injured climber', target: 'was operated on', wrong: ['was operated', 'was operate on', 'operated on by surgeon passively'], context: 'by a team of orthopedic surgeons for six hours.', note: '"operated on" requires "on" in the passive.' },
    { prompt: 'The new environmental policy', target: 'has been widely commented upon', wrong: ['has been widely commented', 'has widely commented upon by public passively', 'is widely comment upon'], context: 'in major scientific and economic periodicals.', note: '"commented upon" retains "upon".' },
    { prompt: 'The missing research funding', target: 'was never satisfactorily accounted for', wrong: ['was never satisfactorily accounted', 'never satisfactorily accounted for without be', 'was never account for satisfactorily'], context: 'by the former treasurer.', note: '"accounted for".' },
    { prompt: 'The keynote speaker', target: 'was listened to in absolute silence', wrong: ['was listened in absolute silence', 'was listen to in silence', 'listened to in silence passively'], context: 'by the three thousand conference delegates.', note: '"listened to" retains "to".' },
    { prompt: 'Such unethical clinical practices', target: 'must not be put up with', wrong: ['must not be put up', 'must not put up with without be', 'must not be putted up with'], context: 'in modern medical research institutions.', note: '"put up with" keeps both particles in the passive.' },
    { prompt: 'The old industrial site', target: 'is being converted into', wrong: ['is being converted', 'is converted into by self', 'is being convert into'], context: 'a high-tech green energy incubator park.', note: '"converted into" retains "into".' },
    { prompt: 'His courageous scientific breakthrough', target: 'was marvelled at', wrong: ['was marvelled', 'marvelled at by world passively', 'was marvel at'], context: 'by astrophysicists around the globe.', note: '"marvelled at" retains "at".' },
    { prompt: 'The proposed corporate merger', target: 'is being looked into', wrong: ['is being looked', 'is looking into by authorities passively', 'is being look into'], context: 'by government anti-monopoly regulators.', note: '"looked into" retains "into".' },
    { prompt: 'The sick laboratory animals', target: 'were attentively looked after', wrong: ['were attentively looked', 'were looking after attentively passively', 'were look after attentively'], context: 'by certified veterinary technicians.', note: '"looked after" retains "after".' },
    { prompt: 'The old computer mainframes', target: 'have been done away with', wrong: ['have been done away', 'have done away with passively', 'have been do away with'], context: 'and replaced with energy-efficient server racks.', note: '"done away with" retains both particles.' },
    { prompt: 'The whistleblower\'s allegations', target: 'were quickly acted upon', wrong: ['were quickly acted', 'acted upon quickly passively', 'were quickly act upon'], context: 'by the university oversight committee.', note: '"acted upon" retains "upon".' },
    { prompt: 'The orphaned tiger cub', target: 'was brought up', wrong: ['was brought', 'brought up by zoologists passively', 'was bring up'], context: 'by dedicated zoological conservationists.', note: '"brought up" retains "up".' },
    { prompt: 'His rude behavior during the defense', target: 'was severely frowned upon', wrong: ['was severely frowned', 'frowned upon severely passively', 'was severely frown upon'], context: 'by the doctoral examination board.', note: '"frowned upon" retains "upon".' },
    { prompt: 'The lost satellite telemetry signals', target: 'were finally locked onto', wrong: ['were finally locked', 'locked onto finally passively', 'were finally lock onto'], context: 'by the deep-space ground tracking antenna.', note: '"locked onto" retains "onto".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Passive with Prepositions & Phrasal Verbs');
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
        explanation: `Incorrect. "${w}" violates the passive/causative rule. ${item.note}`
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
