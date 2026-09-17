import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A3_CONNECTORS_PHRASAL_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'separable_vs_inseparable_phrasal',
    title: 'Separable vs. Inseparable Phrasal Verbs & Pronoun Placement',
    subtitle: 'Word order rules when objects and pronouns interact with multi-word verbs',
    badge: 'Phrasal Verbs Word Order',
    description: 'Separable phrasal verbs allow the object to be placed either between the verb and particle OR after the particle (e.g., "turn on the light" or "turn the light on"). CRITICAL RULE: If the object is a PRONOUN (it, them, him, her, us, me), it MUST be placed BETWEEN the verb and particle ("turn it on", NEVER "turn on it"). Inseparable phrasal verbs always keep the particle next to the verb regardless of whether a noun or pronoun is used (e.g., "look after the patient" -> "look after him").',
    keyRule: 'Pronoun rule for separable: Verb + PRONOUN + Particle ("switch it off", "put them away", "figure it out"). Inseparable verbs stay intact ("look after her", "run into them").',
    formula: 'Separable: V + Pronoun + Particle | Inseparable: V + Particle + Pronoun/Noun.',
    examples: [
      'The microscope is overheating; please turn it off immediately.',
      'The technician wrote down the experimental measurements and saved them to the server.',
      'We spent three hours trying to figure out why the algorithm crashed.',
      'She promised to look after the laboratory culture dishes over the weekend.',
      'Don\'t throw those recycled glass vials away; we can sterilize them.'
    ]
  },
  {
    id: 'prepositional_idiomatic_phrases',
    title: 'Prepositional Idiomatic Phrases (at first, by mistake, on purpose, in advance)',
    subtitle: 'Fixed prepositional expressions essential for academic & professional fluency',
    badge: 'Fixed Prepositions',
    description: 'Many prepositional phrases in English are fixed idiomatic collocations: "at first", "at least", "at present", "by chance", "by accident", "by mistake", "on purpose", "on time", "on demand", "in advance", "in detail", "in general", "in particular", "under pressure", "out of order". Using the correct preposition is vital.',
    keyRule: 'Learn fixed pairs: by mistake / on purpose / in advance / at first / out of order / under pressure / on average.',
    formula: 'Preposition + Noun phrase (fixed collocation).',
    examples: [
      'You must register for the international biotechnology symposium in advance.',
      'He deleted the master dataset by mistake while clearing cache memory.',
      'Did she omit the supplementary bibliography on purpose, or was it an oversight?',
      'At first, the chemical reaction appeared inert, but after five minutes it intensified.',
      'The optical spectrometer is currently out of order awaiting calibration parts.'
    ]
  },
  {
    id: 'contrast_concession_linkers',
    title: 'Contrast & Concession Linkers (However, In spite of, Despite, Although, Whereas)',
    subtitle: 'Connecting contrasting clauses and concession arguments with proper syntax',
    badge: 'Contrast Linkers',
    description: 'Master the syntactic differences between contrast connectors: "Although / Even though / While" are conjunctions followed by a full clause (Subject + Verb). "Despite / In spite of" are prepositions followed by a NOUN phrase, pronoun, or GERUND (V-ing), OR "the fact that + clause". "However / Nevertheless / On the other hand" are conjunctive adverbs used to start a new sentence or clause followed by a comma.',
    keyRule: 'Although / Even though + Subject + Verb. Despite / In spite of + Noun / V-ing (NO clause without "the fact that"). However, [Clause].',
    formula: 'Although + S + V, S + V | Despite + Noun/-ing, S + V | S + V. However, S + V.',
    examples: [
      'Although the initial budget was severely restricted, the research team achieved all objectives.',
      'Despite the heavy blizzard conditions, the rescue helicopter reached the alpine hut.',
      'In spite of working sixteen hours straight, Dr. Vance showed no signs of mental fatigue.',
      'The first compound showed toxicity. However, the second variant proved completely safe.',
      'Solar panels generate power during daylight, whereas wind turbines operate day and night.'
    ]
  },
  {
    id: 'cause_purpose_connectors',
    title: 'Cause, Reason & Purpose Connectors (In order to, So that, Due to, Because of)',
    subtitle: 'Expressing goals, intentions, and causal relationships with grammatical accuracy',
    badge: 'Cause & Purpose',
    description: 'Purpose: "In order to / So as to + Base Verb" (expresses aim/intention). "So that / In order that + Subject + Modal + Verb" (purpose with a clause). Cause: "Because / Since / As + Subject + Verb" (clause). "Because of / Due to / Owing to + Noun phrase / Gerund" (prepositional phrase).',
    keyRule: 'In order to + base verb. So that + Subject + modal (can/could/will/would) + verb. Because of / Due to + Noun phrase.',
    formula: 'Purpose: In order to + V | So that + S + modal + V. Cause: Because + S + V | Because of + Noun.',
    examples: [
      'The laboratory was sealed in order to prevent airborne spore contamination.',
      'We installed redundant battery backups so that the servers would not lose power.',
      'The rocket launch was postponed due to severe geomagnetic turbulence in the upper atmosphere.',
      'Because of her exceptional academic contributions, she was granted tenure ahead of schedule.',
      'He calibrated the spectrometer carefully so as to ensure maximum measurement accuracy.'
    ]
  }
];

export function getA3ConnectorsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'separable_vs_inseparable_phrasal':
      return generatePhrasalWordOrderQuestions(starNumber, mSeed);
    case 'prepositional_idiomatic_phrases':
      return generatePrepositionalIdiomsQuestions(starNumber, mSeed);
    case 'contrast_concession_linkers':
      return generateContrastLinkersQuestions(starNumber, mSeed);
    case 'cause_purpose_connectors':
      return generateCausePurposeQuestions(starNumber, mSeed);
    default:
      return generatePhrasalWordOrderQuestions(starNumber, mSeed);
  }
}

export const getA3ConnectorsPhrasalStarQuestions = getA3ConnectorsStarQuestions;

// 1. Separable vs Inseparable Phrasal Verbs Pool
function generatePhrasalWordOrderQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The laboratory laser is overheating; please', target: 'turn it off immediately', wrong: ['turn off it immediately', 'turn it off to immediately', 'turning off it immediately'], context: '.', note: 'Separable verb with pronoun: pronoun "it" MUST go between verb and particle ("turn it off").' },
    { prompt: 'Here are the statistical calculations; could you please', target: 'check them over', wrong: ['check over them pronoun', 'checking over them', 'check them over to'], context: 'before we submit the article?', note: 'Pronoun "them" placed between verb and particle: check them over.' },
    { prompt: 'When Dr. Lin was sick, his senior colleague offered to', target: 'look after his patients', wrong: ['look his patients after', 'looking after his patients to', 'look after to his patients'], context: 'in the clinic.', note: '"Look after" is an inseparable phrasal verb; the noun stays after the particle.' },
    { prompt: 'We spent all morning analyzing the computer code to', target: 'figure it out', wrong: ['figure out it', 'figuring out it', 'figure to it out'], context: 'and identify the memory leak.', note: 'Pronoun rule: figure it out (never figure out it).' },
    { prompt: 'Don\'t discard those sterile sample vials; we shouldn\'t', target: 'throw them away', wrong: ['throw away them', 'throwing away them', 'throw away to them'], context: '.', note: 'throw them away.' },
    { prompt: 'The flight was cancelled, so the organizers had to', target: 'call the conference off', wrong: ['calling the conference off', 'call the conference off to', 'call off to the conference'], context: 'until next month.', note: 'call the conference off / call off the conference (separable with noun).' },
    { prompt: 'I found a crucial historical reference; let me', target: 'write it down', wrong: ['write down it', 'writing down it', 'write down to it'], context: 'in my research field notebook.', note: 'write it down (never write down it).' },
    { prompt: 'While reviewing the academic literature, she', target: 'came across an extraordinary paper', wrong: ['came an extraordinary paper across', 'coming across an extraordinary paper', 'came across to an extraordinary paper'], context: 'on CRISPR gene editing.', note: '"Come across" is inseparable: came across a paper.' },
    { prompt: 'If you don\'t understand the technical term, you should', target: 'look it up', wrong: ['look up it', 'looking up it', 'look to it up'], context: 'in the medical dictionary.', note: 'look it up (never look up it).' },
    { prompt: 'The proposal had numerous structural flaws, so the committee had to', target: 'turn it down', wrong: ['turn down it', 'turning down it', 'turn to down it'], context: 'without hesitation.', note: 'turn it down (reject).' },
    { prompt: 'He put on his sterile white lab coat and', target: 'buttoned it up', wrong: ['buttoned up it', 'buttoning up it', 'buttoned to it up'], context: 'before entering the cleanroom.', note: 'buttoned it up.' },
    { prompt: 'The old diesel generator broke down, and technicians struggled to', target: 'get it running again', wrong: ['get running it again', 'getting it run again', 'get it to runned again'], context: '.', note: 'get it running.' },
    { prompt: 'She filled in the application form and', target: 'handed it in', wrong: ['handed in it', 'handing in it', 'handed to in it'], context: 'to the departmental admissions office.', note: 'handed it in (never handed in it).' },
    { prompt: 'They are conducting an investigation and will', target: 'look into the matter', wrong: ['look the matter into', 'looking into the matter', 'look into to the matter'], context: 'thoroughly next week.', note: '"Look into" is inseparable: look into the matter.' },
    { prompt: 'I have some books for you; I will', target: 'drop them off', wrong: ['drop off them', 'dropping off them', 'drop them off to'], context: 'at your faculty office this afternoon.', note: 'drop them off.' },
    { prompt: 'The speaker gave out the handout sheets and asked us to', target: 'pass them around', wrong: ['pass around them', 'passing around them', 'pass to around them'], context: 'the seminar room.', note: 'pass them around.' },
    { prompt: 'He gave up coffee and', target: 'cut it out', wrong: ['cut out it', 'cutting out it', 'cut out to it'], context: 'completely from his daily diet.', note: 'cut it out.' },
    { prompt: 'The pilot reviewed the pre-flight checklist and', target: 'ticked each item off', wrong: ['ticked off each item to', 'ticked off to each item', 'ticking each item off'], context: 'one by one.', note: 'ticked each item off.' },
    { prompt: 'If the equipment fails, we will have to', target: 'do without it', wrong: ['do it without', 'doing without it', 'do without to it'], context: 'for the remainder of the experiment.', note: '"Do without" is inseparable: do without it.' },
    { prompt: 'She took off her safety glasses and', target: 'put them away', wrong: ['put away them', 'putting away them', 'put away to them'], context: 'in the protective storage drawer.', note: 'put them away (never put away them).' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Separable vs. Inseparable Phrasal Verbs');
}

// 2. Prepositional Idiomatic Phrases Pool
function generatePrepositionalIdiomsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'All visiting researchers must register at the reception desk', target: 'in advance', wrong: ['on advance', 'at advance', 'by advance'], context: 'before accessing the biological laboratories.', note: 'Fixed expression: "in advance".' },
    { prompt: 'The technician deleted the backup database', target: 'by mistake', wrong: ['on mistake', 'in mistake', 'with mistake'], context: 'while clearing temporary cache files.', note: 'Fixed expression: "by mistake".' },
    { prompt: 'Did he omit the critical footnote in the thesis', target: 'on purpose', wrong: ['by purpose', 'in purpose', 'with purpose'], context: ', or was it merely an unintentional oversight?', note: 'Fixed expression: "on purpose".' },
    { prompt: '', target: 'At first,', wrong: ['In first,', 'On first,', 'By first,'], context: 'the chemical mixture remained colorless, but it gradually turned deep indigo.', note: 'Fixed expression: "At first".' },
    { prompt: 'The primary high-voltage centrifuge is currently', target: 'out of order', wrong: ['out from order', 'out off order', 'outside of order'], context: 'pending replacement bearings from Germany.', note: 'Fixed expression: "out of order".' },
    { prompt: 'The keynote speaker arrived exactly', target: 'on time', wrong: ['in time strictly', 'at time', 'by time punctual'], context: 'despite severe delays on the metropolitan expressway.', note: 'Fixed expression: "on time" (punctual at the scheduled hour).' },
    { prompt: 'We were able to resolve the software conflict just', target: 'in time', wrong: ['on time for the deadline', 'at time for deadline', 'by time for deadline'], context: 'before the live global broadcast commenced.', note: 'Fixed expression: "in time" (with enough time before something happens).' },
    { prompt: 'The research team met the Nobel laureate completely', target: 'by chance', wrong: ['on chance', 'in chance', 'with chance'], context: 'in the university faculty cafeteria.', note: 'Fixed expression: "by chance".' },
    { prompt: 'The findings of the preliminary study are discussed', target: 'in detail', wrong: ['on detail', 'at detail', 'with detail'], context: 'in the third chapter of the clinical report.', note: 'Fixed expression: "in detail".' },
    { prompt: 'Surgeons are trained to make critical decisions', target: 'under pressure', wrong: ['in pressure', 'at pressure', 'with pressure'], context: 'during emergency operative procedures.', note: 'Fixed expression: "under pressure".' },
    { prompt: 'European electric vehicles consume', target: 'on average', wrong: ['in average', 'at average', 'by average'], context: 'around fifteen kilowatt-hours per hundred kilometers.', note: 'Fixed expression: "on average".' },
    { prompt: '', target: 'In general,', wrong: ['At general,', 'On general,', 'By general,'], context: 'quantum particles exhibit both wave and particle characteristics.', note: 'Fixed expression: "In general".' },
    { prompt: 'This chapter focuses on neurodegenerative pathologies,', target: 'in particular', wrong: ['on particular', 'at particular', 'by particular'], context: 'Parkinson\'s and Alzheimer\'s diseases.', note: 'Fixed expression: "in particular".' },
    { prompt: 'The confidential documents were delivered', target: 'in secret', wrong: ['on secret', 'at secret', 'by secret'], context: 'to prevent corporate espionage.', note: 'Fixed expression: "in secret".' },
    { prompt: 'The laboratory archive is accessible', target: 'by appointment only', wrong: ['on appointment only', 'in appointment only', 'at appointment only'], context: 'between the hours of 9:00 AM and noon.', note: 'Fixed expression: "by appointment".' },
    { prompt: 'She was chosen to lead the international delegation', target: 'on behalf of', wrong: ['in behalf of', 'at behalf of', 'by behalf of'], context: 'the Department of Foreign Affairs.', note: 'Fixed expression: "on behalf of".' },
    { prompt: 'The old mainframe computer is completely', target: 'out of date', wrong: ['out from date', 'out off date', 'outside of date'], context: 'and cannot execute contemporary parallel algorithms.', note: 'Fixed expression: "out of date".' },
    { prompt: 'We learned about the unexpected breakthrough', target: 'by accident', wrong: ['on accident', 'in accident', 'with accident'], context: 'when a sensor triggered an unscheduled alert.', note: 'Fixed expression: "by accident".' },
    { prompt: 'The patient\'s blood pressure is now', target: 'under control', wrong: ['in control', 'at control', 'with control'], context: 'following the administration of antihypertensive therapy.', note: 'Fixed expression: "under control".' },
    { prompt: 'The clinical trial had to be cancelled', target: 'at short notice', wrong: ['in short notice', 'on short notice exclusively', 'by short notice'], context: 'due to unforeseen supply chain disruptions.', note: 'Fixed expression: "at short notice".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Prepositional Idiomatic Phrases');
}

// 3. Contrast & Concession Linkers Pool
function generateContrastLinkersQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '', target: 'Although the weather was severe,', wrong: ['Despite the weather was severe,', 'In spite of the weather was severe,', 'However the weather was severe,'], context: 'the scientific expedition reached the summit basecamp.', note: '"Although" is followed by a full clause (Subject + Verb: the weather was severe).' },
    { prompt: '', target: 'Despite the intense cold,', wrong: ['Although the intense cold,', 'Even though the intense cold,', 'However the intense cold,'], context: 'the researchers continued their astronomical observations all night.', note: '"Despite" is followed by a noun phrase: "the intense cold".' },
    { prompt: '', target: 'In spite of having limited resources,', wrong: ['Although having limited resources without verb,', 'Despite of having limited resources,', 'However having limited resources,'], context: 'the engineering startup built a functional orbital satellite.', note: '"In spite of" is followed by a gerund: "having limited resources" (never "despite of").' },
    { prompt: 'The first clinical trial failed to produce significant results.', target: 'However,', wrong: ['Although,', 'Despite,', 'In spite of,'], context: 'the subsequent modification in dosage showed remarkable efficacy.', note: '"However," is a conjunctive adverb starting a new sentence with a comma.' },
    { prompt: 'Solar energy generation peaks during bright midday sunshine,', target: 'whereas wind power', wrong: ['despite wind power', 'in spite of wind power', 'however wind power'], context: 'often reaches its highest output during nocturnal storms.', note: '"Whereas" connects two contrasting clauses.' },
    { prompt: '', target: 'Even though she had no prior experience in coding,', wrong: ['Despite she had no prior experience in coding,', 'In spite of she had no prior experience,', 'However she had no prior experience,'], context: 'she mastered Python within three months.', note: '"Even though" is followed by a full clause.' },
    { prompt: '', target: 'Despite working sixteen hours a day,', wrong: ['Although working sixteen hours without clause,', 'Despite of working sixteen hours,', 'In spite working sixteen hours,'], context: 'the medical residents remained focused and compassionate.', note: '"Despite + gerund" (working).' },
    { prompt: 'The new electric supercar accelerates faster than a jet.', target: 'Nevertheless,', wrong: ['Although,', 'In spite of,', 'Whereas,'], context: 'its battery range remains a significant limitation for long journeys.', note: '"Nevertheless," introduces a contrasting sentence.' },
    { prompt: '', target: 'In spite of the heavy rainfall,', wrong: ['Although the heavy rainfall,', 'Even though the heavy rainfall,', 'Despite of the heavy rainfall,'], context: 'the graduation ceremony proceeded outdoors as planned.', note: '"In spite of + noun phrase" (never "despite of").' },
    { prompt: '', target: 'Although he was offered a substantial salary increase,', wrong: ['Despite he was offered a substantial salary,', 'In spite of he was offered a salary,', 'However he was offered a salary,'], context: 'he decided to transition into academic research.', note: '"Although + clause" (he was offered).' },
    { prompt: 'The theoretical model appeared sound on paper.', target: 'On the other hand,', wrong: ['Although,', 'Despite,', 'In spite of,'], context: 'laboratory simulations revealed multiple thermal instabilities.', note: '"On the other hand," introduces a contrasting point.' },
    { prompt: '', target: 'Despite the fact that the contract was signed,', wrong: ['Despite that the contract was signed,', 'In spite that the contract was signed,', 'Although of the fact that the contract,'], context: 'the supplier failed to deliver the microchips on time.', note: 'To use a clause with "despite", use "despite the fact that".' },
    { prompt: 'Urban transit systems rely heavily on underground subways,', target: 'while rural communities', wrong: ['despite rural communities', 'in spite of rural communities', 'however rural communities'], context: 'depend almost entirely on private motor vehicles.', note: '"While" connects contrasting clauses.' },
    { prompt: '', target: 'Although the team worked tirelessly all weekend,', wrong: ['Despite the team worked tirelessly all weekend,', 'In spite the team worked tirelessly,', 'However the team worked tirelessly,'], context: 'they could not reproduce the experimental anomaly.', note: '"Although + clause".' },
    { prompt: '', target: 'In spite of strict security protocols,', wrong: ['Although strict security protocols,', 'Even though strict security protocols,', 'Despite of strict security protocols,'], context: 'a sophisticated cyberattack infiltrated the university mainframe.', note: '"In spite of + noun phrase".' },
    { prompt: 'The patient showed mild initial symptoms.', target: 'However,', wrong: ['Although,', 'Despite,', 'Whereas,'], context: 'her clinical condition deteriorated rapidly within forty-eight hours.', note: '"However," adverb of contrast.' },
    { prompt: '', target: 'Even though the museum admission was expensive,', wrong: ['Despite the museum admission was expensive,', 'In spite of the admission was expensive,', 'However the admission was expensive,'], context: 'thousands of visitors lined up to see the rare Vermeer exhibition.', note: '"Even though + clause".' },
    { prompt: '', target: 'Despite having no formal musical training,', wrong: ['Although having no formal musical training without subject,', 'Despite of having no training,', 'In spite having no training,'], context: 'she composed intricate and moving orchestral symphonies.', note: '"Despite + gerund" (having).' },
    { prompt: 'Classical computers process information sequentially in binary bits,', target: 'whereas quantum computers', wrong: ['despite quantum computers', 'in spite of quantum computers', 'however quantum computers'], context: 'exploit superposition to evaluate billions of states simultaneously.', note: '"Whereas" for contrasting clauses.' },
    { prompt: '', target: 'In spite of his advanced age,', wrong: ['Although his advanced age,', 'Even though his advanced age,', 'Despite of his advanced age,'], context: 'the professor continues to publish groundbreaking papers in astrophysics.', note: '"In spite of + noun phrase".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Contrast & Concession Linkers');
}

// 4. Cause & Purpose Connectors Pool
function generateCausePurposeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The biohazard laboratory was sealed hermetically', target: 'in order to prevent', wrong: ['in order preventing', 'so that to prevent', 'in order that to prevent'], context: 'any accidental atmospheric pathogen escape.', note: '"In order to + base verb" expresses purpose.' },
    { prompt: 'We installed auxiliary battery generators', target: 'so that the computers wouldn\'t lose', wrong: ['in order to the computers wouldn\'t lose', 'so as to the computers wouldn\'t lose', 'because of the computers wouldn\'t lose'], context: 'crucial telemetry data during a blackout.', note: '"So that + subject + modal verb" expresses purpose with a full clause.' },
    { prompt: 'The transatlantic flight was diverted to Reykjavik', target: 'due to severe turbulence', wrong: ['because severe turbulence', 'due severe turbulence', 'owing severe turbulence'], context: 'over the North Atlantic corridor.', note: '"Due to + noun phrase" expresses cause/reason.' },
    { prompt: 'The scheduled rocket launch was delayed', target: 'because of dense cloud cover', wrong: ['because dense cloud cover', 'in order to dense cloud cover', 'so that dense cloud cover'], context: 'and high atmospheric wind shear.', note: '"Because of + noun phrase" (not "because + noun").' },
    { prompt: 'She calibrated the analytical balance meticulous', target: 'so as to ensure', wrong: ['so as ensuring', 'so as to ensuring', 'so that to ensure'], context: 'maximum precision in chemical titration.', note: '"So as to + base verb" expresses purpose.' },
    { prompt: 'The researchers isolated the bacterial strain', target: 'so that they could study', wrong: ['in order to they could study', 'so as to they could study', 'because of they could study'], context: 'its antibiotic resistance mechanisms.', note: '"So that + subject + modal" (so that they could study).' },
    { prompt: 'He chose to study biochemistry', target: 'in order to develop', wrong: ['in order developing', 'so that develop', 'in order that develop'], context: 'novel therapies for neurodegenerative diseases.', note: '"In order to + base verb".' },
    { prompt: 'The highway was closed to traffic', target: 'owing to an avalanche', wrong: ['owing an avalanche', 'because an avalanche', 'due an avalanche'], context: 'in the mountain pass.', note: '"Owing to + noun phrase".' },
    { prompt: 'We left early for the international airport', target: 'in order not to miss', wrong: ['in order to not miss strictly', 'in order not missing', 'so as to not miss'], context: 'our scheduled morning flight to Tokyo.', note: 'Negative purpose: "in order not to + base verb".' },
    { prompt: 'The patient was placed on a ventilator', target: 'so that her lungs could recover', wrong: ['in order to her lungs could recover', 'because of her lungs could recover', 'so as to her lungs could recover'], context: 'from severe acute respiratory distress.', note: '"So that + subject + modal" for purpose.' },
    { prompt: 'The university library extended its opening hours', target: 'so that students could study', wrong: ['in order to students could study', 'because of students could study', 'so as to students could study'], context: 'throughout the intensive examination period.', note: '"So that students could study".' },
    { prompt: 'The crop harvest was exceptionally plentiful this year', target: 'thanks to favorable rainfall', wrong: ['thanks favorable rainfall', 'because favorable rainfall', 'in order to favorable rainfall'], context: 'and mild summer temperatures.', note: '"Thanks to + noun phrase" for positive causes.' },
    { prompt: 'The surgeon wore sterile magnifying loupes', target: 'in order to see', wrong: ['in order seeing', 'so that see', 'so as seeing'], context: 'the microscopic capillary blood vessels clearly.', note: '"In order to + base verb".' },
    { prompt: 'The financial audit was delayed', target: 'because the accounting team needed', wrong: ['because of the accounting team needed', 'due to the accounting team needed', 'owing to the accounting team needed'], context: 'additional documentation from international subsidiaries.', note: '"Because + full clause" (subject + verb).' },
    { prompt: 'Backup cloud snapshots are generated hourly', target: 'so that data can be restored', wrong: ['in order to data can be restored', 'so as to data can be restored', 'because of data can be restored'], context: 'instantly in case of hardware failure.', note: '"So that + clause".' },
    { prompt: 'The ancient wooden temple was preserved', target: 'due to meticulous craftsmanship', wrong: ['because meticulous craftsmanship', 'owing meticulous craftsmanship', 'due meticulous craftsmanship'], context: 'and natural cedar resin.', note: '"Due to + noun phrase".' },
    { prompt: 'He lowered his voice', target: 'so as not to disturb', wrong: ['so as to not disturb', 'so as not disturbing', 'in order to not disturb'], context: 'the other researchers in the silent reading archive.', note: 'Negative purpose: "so as not to + base verb".' },
    { prompt: 'The concert had to be cancelled', target: 'because of the lead vocalist\'s illness', wrong: ['because the lead vocalist\'s illness', 'so that the vocalist\'s illness', 'in order to the vocalist\'s illness'], context: '.', note: '"Because of + noun phrase".' },
    { prompt: 'She set two alarm clocks', target: 'so that she wouldn\'t oversleep', wrong: ['in order to she wouldn\'t oversleep', 'so as to she wouldn\'t oversleep', 'because of she wouldn\'t oversleep'], context: 'on the morning of the licensing examination.', note: '"So that + subject + modal".' },
    { prompt: 'The experimental satellite was equipped with solar thrusters', target: 'in order to maintain', wrong: ['in order maintaining', 'so that maintain', 'in order that maintain'], context: 'its orbital trajectory above the Earth.', note: '"In order to + base verb".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Cause, Reason & Purpose Connectors');
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
        explanation: `Incorrect. "${w}" violates the connector rule. ${item.note}`
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
