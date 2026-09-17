import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A3_GERUNDS_CLAUSES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'gerunds_vs_infinitives',
    title: 'Gerunds (-ing) vs. Infinitives (to + Verb)',
    subtitle: 'Verb patterns following common verbs and prepositions',
    badge: 'Gerund vs. Infinitive',
    description: 'Certain English verbs must be followed by a gerund (V-ing), e.g. enjoy, avoid, admit, suggest, mind, finish, practice, consider. Others must be followed by a to-infinitive, e.g. decide, hope, promise, refuse, manage, agree, offer, intend. Note: all prepositions take a gerund.',
    keyRule: 'Gerund verbs: enjoy, admit, avoid, consider, delay, deny, fancy, finish, imagine, involve, keep, mind, postpone, practice, suggest, risk. To-infinitive verbs: agree, decide, expect, hope, learn, manage, offer, plan, promise, refuse, seem, want, wish. Prepositions + V-ing.',
    formula: 'Verb + V-ing OR Verb + to-V (dependent on matrix verb class).',
    examples: [
      'The research team decided to postpone the field expedition until spring.',
      'We really enjoy analyzing astronomical data from the James Webb Space Telescope.',
      'She managed to publish three peer-reviewed articles before completing her doctorate.',
      'He suggested collaborating with the department of bioinformatics.',
      'Are you interested in participating in our upcoming neuroscience clinical trial?'
    ]
  },
  {
    id: 'verbs_changing_meaning',
    title: 'Verbs with Meaning Changes (remember, stop, forget, try, regret)',
    subtitle: 'Dual-pattern verbs where the choice of -ing vs. to-infinitive alters the meaning',
    badge: 'Meaning Change Verbs',
    description: 'Some verbs take both forms with distinct meanings: "Remember/Forget + to-inf" (remember to do a future/necessary task) vs. "Remember/Forget + V-ing" (recall a past memory). "Stop + to-inf" (pause an activity in order to do something else) vs. "Stop + V-ing" (quit/cease the activity completely). "Try + to-inf" (make an effort to overcome difficulty) vs. "Try + V-ing" (experiment with a new method). "Regret + to-inf" (formal announcement of bad news) vs. "Regret + V-ing" (feel sorrow about a past action).',
    keyRule: 'Remember to do (duty/task) vs. Remember doing (memory of past). Stop to do (pause for purpose) vs. Stop doing (cease activity). Try to do (effort) vs. Try doing (experiment).',
    formula: 'Verb + to-V (forward-looking/effort/purpose) vs. Verb + V-ing (past memory/experiment/cessation).',
    examples: [
      'Please remember to lock the laboratory doors before you leave at night.',
      'I vividly remember visiting the CERN particle accelerator when I was twelve.',
      'The hikers stopped to drink fresh mountain spring water.',
      'The government urged industrial factories to stop polluting local waterways.',
      'If your computer freezes, try restarting the operating system in safe mode.'
    ]
  },
  {
    id: 'defining_relative_clauses',
    title: 'Defining Relative Clauses (who, which, that, whose, where, when)',
    subtitle: 'Providing essential identifying information about nouns without commas',
    badge: 'Defining Clauses',
    description: 'Defining relative clauses give essential information that identifies exactly which person, thing, place, or time is being referred to. NO commas are used. "Who" or "that" for people; "which" or "that" for things/animals; "whose" for possession; "where" for places; "when" for time. The relative pronoun can be omitted when it is the object of the clause.',
    keyRule: 'No commas! Who/that = people; which/that = things; whose = possession; where = place; when = time. Object pronouns can be omitted ("The book [that] I read").',
    formula: 'Noun + (who / which / that / whose / where / when) + defining clause (NO COMMAS).',
    examples: [
      'The scientist who developed this innovative mRNA vaccine won the Nobel Prize.',
      'This is the high-precision laser that engineers use to cut optical glass.',
      'Students whose research proposals are approved will receive departmental funding.',
      'The cleanroom where the semiconductor chips are fabricated is strictly climate-controlled.',
      'The paper (which) she published last year generated immense international acclaim.'
    ]
  },
  {
    id: 'non_defining_relative_clauses',
    title: 'Non-Defining Relative Clauses (who, which, whose, where + Commas)',
    subtitle: 'Adding extra, non-essential background details enclosed in commas',
    badge: 'Non-Defining (Commas)',
    description: 'Non-defining relative clauses provide extra, non-essential information about an already identified noun. If removed, the main sentence still makes complete sense. MUST be separated by commas. CANNOT use "that" (use only "who", "which", "whose", "where"). CANNOT omit the relative pronoun.',
    keyRule: 'Enclose with commas! NEVER use "that" (use "which" for things, "who" for people). NEVER omit the pronoun. "Which" can also refer to the entire preceding clause.',
    formula: 'Main Subject, who / which / whose / where + extra info, Main Verb / Rest of sentence.',
    examples: [
      'Professor Hawking, who made groundbreaking contributions to astrophysics, taught at Cambridge.',
      'The new electron microscope, which cost over two million euros, will be operational next month.',
      'Oxford University, where many world leaders were educated, was founded in the twelfth century.',
      'Dr. Alvarez, whose research into Alzheimer\'s disease was widely praised, accepted the professorship.',
      'He failed to submit his thesis on time, which surprised all his faculty mentors.'
    ]
  }
];

export function getA3GerundsClausesStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'gerunds_vs_infinitives':
      return generateGerundInfinitiveQuestions(starNumber, mSeed);
    case 'verbs_changing_meaning':
      return generateMeaningChangeQuestions(starNumber, mSeed);
    case 'defining_relative_clauses':
      return generateDefiningRelativeQuestions(starNumber, mSeed);
    case 'non_defining_relative_clauses':
      return generateNonDefiningRelativeQuestions(starNumber, mSeed);
    default:
      return generateGerundInfinitiveQuestions(starNumber, mSeed);
  }
}

// 1. Gerunds vs Infinitives Pool
function generateGerundInfinitiveQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The pharmaceutical corporation decided', target: 'to invest', wrong: ['investing', 'invest', 'to investing'], context: 'fifty million euros into renewable biotech research.', note: '"Decide" is followed by a to-infinitive: decided to invest.' },
    { prompt: 'Researchers must avoid', target: 'contaminating', wrong: ['to contaminate', 'contaminate', 'to contaminating'], context: 'the sterile cell culture samples during pipetting.', note: '"Avoid" is followed by a gerund: avoid contaminating.' },
    { prompt: 'She admitted', target: 'making', wrong: ['to make', 'make', 'to making'], context: 'a calculation error in the initial thermodynamic model.', note: '"Admit" is followed by a gerund: admitted making.' },
    { prompt: 'We hope', target: 'to publish', wrong: ['publishing', 'publish', 'to publishing'], context: 'our experimental findings in the British Medical Journal next spring.', note: '"Hope" is followed by a to-infinitive: hope to publish.' },
    { prompt: 'The committee suggested', target: 'conducting', wrong: ['to conduct', 'conduct', 'to conducting'], context: 'a comprehensive environmental audit before construction begins.', note: '"Suggest" is followed by a gerund: suggested conducting.' },
    { prompt: 'Did you manage', target: 'to secure', wrong: ['securing', 'secure', 'to securing'], context: 'funding for your post-doctoral fellowship?', note: '"Manage" takes a to-infinitive: manage to secure.' },
    { prompt: 'They are looking forward to', target: 'attending', wrong: ['attend', 'to attend', 'attended'], context: 'the international neuroscience symposium in Geneva.', note: '"Look forward to" has "to" as a preposition, requiring a gerund: attending.' },
    { prompt: 'He refused', target: 'to reveal', wrong: ['revealing', 'reveal', 'to revealing'], context: 'the proprietary algorithm behind the encryption tool.', note: '"Refuse" takes a to-infinitive: refused to reveal.' },
    { prompt: 'Would you mind', target: 'lowering', wrong: ['to lower', 'lower', 'to lowering'], context: 'the microscope lamp intensity slightly?', note: '"Mind" takes a gerund: mind lowering.' },
    { prompt: 'The engineers promised', target: 'to deliver', wrong: ['delivering', 'deliver', 'to delivering'], context: 'the completed prototype by next Wednesday.', note: '"Promise" takes a to-infinitive: promised to deliver.' },
    { prompt: 'She enjoys', target: 'mentoring', wrong: ['to mentor', 'mentor', 'to mentoring'], context: 'undergraduate students in molecular biology laboratory techniques.', note: '"Enjoy" takes a gerund: enjoys mentoring.' },
    { prompt: 'He is capable of', target: 'solving', wrong: ['to solve', 'solve', 'to solving'], context: 'multivariate differential equations in his head.', note: 'Prepositions (of) must be followed by a gerund: capable of solving.' },
    { prompt: 'We agreed', target: 'to collaborate', wrong: ['collaborating', 'collaborate', 'to collaborating'], context: 'with the robotics laboratory on autonomous navigation.', note: '"Agree" takes a to-infinitive: agreed to collaborate.' },
    { prompt: 'The suspect denied', target: 'stealing', wrong: ['to steal', 'steal', 'to stealing'], context: 'the classified laboratory data from the server.', note: '"Deny" takes a gerund: denied stealing.' },
    { prompt: 'They planned', target: 'to launch', wrong: ['launching', 'launch', 'to launching'], context: 'the orbital observation satellite in late October.', note: '"Plan" takes a to-infinitive: planned to launch.' },
    { prompt: 'You should practice', target: 'presenting', wrong: ['to present', 'present', 'to presenting'], context: 'your conference lecture without reading from notes.', note: '"Practice" takes a gerund: practice presenting.' },
    { prompt: 'I cannot afford', target: 'to purchase', wrong: ['purchasing', 'purchase', 'to purchasing'], context: 'such an expensive precision spectrophotometer on our current grant.', note: '"Afford" takes a to-infinitive: afford to purchase.' },
    { prompt: 'He apologized for', target: 'arriving', wrong: ['to arrive', 'arrive', 'to arriving'], context: 'late to the departmental faculty symposium.', note: 'Preposition "for" takes a gerund: for arriving.' },
    { prompt: 'She offered', target: 'to assist', wrong: ['assisting', 'assist', 'to assisting'], context: 'with the statistical regression analysis of the data set.', note: '"Offer" takes a to-infinitive: offered to assist.' },
    { prompt: 'They considered', target: 'relocating', wrong: ['to relocate', 'relocate', 'to relocating'], context: 'their biotechnology headquarters to Zurich.', note: '"Consider" takes a gerund: considered relocating.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Gerunds vs. Infinitives');
}

// 2. Verbs with Meaning Changes Pool
function generateMeaningChangeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Please remember', target: 'to calibrate', wrong: ['calibrating', 'calibrate', 'to calibrating'], context: 'the pH sensor before starting the titration experiment.', note: '"Remember to do" means remember to perform a future/required task.' },
    { prompt: 'I distinctly remember', target: 'meeting', wrong: ['to meet', 'meet', 'to meeting'], context: 'Professor Hawking in Cambridge when I was an undergraduate.', note: '"Remember doing" refers to recalling a past memory/event.' },
    { prompt: 'On our long drive across the Alps, we stopped', target: 'to admire', wrong: ['admiring', 'admire', 'to admiring'], context: 'the breathtaking view of the glacier.', note: '"Stop to do" means pause an action in order to do something else.' },
    { prompt: 'The cardiologist warned him to stop', target: 'smoking', wrong: ['to smoke', 'smoke', 'to smoking'], context: 'immediately to prevent further cardiovascular damage.', note: '"Stop doing" means cease or quit an activity completely.' },
    { prompt: 'If the printer is not responding, try', target: 'restarting', wrong: ['to restart', 'restart', 'to restarting'], context: 'the print spooler service in the control panel.', note: '"Try doing" means test or experiment with a method to see if it works.' },
    { prompt: 'He tried', target: 'to lift', wrong: ['lifting', 'lift', 'to lifting'], context: 'the heavy iron crate, but it was far too heavy for one person.', note: '"Try to do" means make an effort to do something difficult.' },
    { prompt: 'We regret', target: 'to inform', wrong: ['informing', 'inform', 'to informing'], context: 'you that your research grant application was not successful this cycle.', note: '"Regret to inform/say" is used to announce bad news formally.' },
    { prompt: 'She now regrets', target: 'leaving', wrong: ['to leave', 'leave', 'to leaving'], context: 'her position at the prestigious research institute in Boston.', note: '"Regret doing" means feel sorrow or remorse about a past action.' },
    { prompt: 'Don\'t forget', target: 'to lock', wrong: ['locking', 'lock', 'to locking'], context: 'the biohazard containment cabinet before exiting.', note: '"Forget to do" means fail to perform a duty/task.' },
    { prompt: 'I will never forget', target: 'witnessing', wrong: ['to witness', 'witness', 'to witnessing'], context: 'the total solar eclipse over the Chilean desert.', note: '"Forget doing" refers to forgetting a past experience.' },
    { prompt: 'After discussing the theoretical physics, the professor went on', target: 'to demonstrate', wrong: ['demonstrating', 'demonstrate', 'to demonstrating'], context: 'the practical experiment in the lab.', note: '"Go on to do" means progress to a new topic or stage.' },
    { prompt: 'Despite the loud music next door, he went on', target: 'reading', wrong: ['to read', 'read', 'to reading'], context: 'his textbook without getting distracted.', note: '"Go on doing" means continue the same ongoing activity.' },
    { prompt: 'Did you remember', target: 'to email', wrong: ['emailing', 'email', 'to emailing'], context: 'the laboratory dataset to the external reviewers?', note: '"Remember to do" for completing an obligation.' },
    { prompt: 'He stopped', target: 'working', wrong: ['to work', 'work', 'to working'], context: 'at the pharmaceutical company when he reached retirement age.', note: '"Stop doing" means quit the job.' },
    { prompt: 'She stopped', target: 'to tie', wrong: ['tying', 'tie', 'to tying'], context: 'her shoelace before continuing the marathon race.', note: '"Stop to do" means pause running in order to tie shoelaces.' },
    { prompt: 'Have you tried', target: 'using', wrong: ['to use', 'use', 'to using'], context: 'a different organic solvent to dissolve the crystalline powder?', note: '"Try doing" means test as an experiment.' },
    { prompt: 'The climber tried', target: 'to reach', wrong: ['reaching', 'reach', 'to reaching'], context: 'the handhold, but his fingers slipped off the wet rock.', note: '"Try to do" means attempt with physical effort.' },
    { prompt: 'I remember', target: 'locking', wrong: ['to lock', 'lock', 'to locking'], context: 'the archive door this morning, so it cannot be unlocked now.', note: '"Remember doing" means having a mental memory of the act.' },
    { prompt: 'The airline regrets', target: 'to announce', wrong: ['announcing', 'announce', 'to announcing'], context: 'the cancellation of flight BA-249 due to dense fog.', note: '"Regret to announce" is standard formal notification.' },
    { prompt: 'Never forget', target: 'to verify', wrong: ['verifying', 'verify', 'to verifying'], context: 'all mathematical calculations twice before finalizing the report.', note: '"Forget to verify" means duty/instruction.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Verbs with Meaning Changes');
}

// 3. Defining Relative Clauses Pool
function generateDefiningRelativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The biochemist', target: 'who discovered', wrong: ['which discovered', 'whose discovered', 'whom discovered'], context: 'the novel enzyme structure received an honorary fellowship.', note: 'Use "who" for a person acting as the subject in a relative clause.' },
    { prompt: 'This is the high-precision laser', target: 'that cuts', wrong: ['who cuts', 'whose cuts', 'what cuts'], context: 'microscopic channels in silicon wafer chips.', note: 'Use "that" or "which" for things/devices.' },
    { prompt: 'Researchers', target: 'whose proposals are approved', wrong: ['who proposals are approved', 'which proposals are approved', 'that proposals are approved'], context: 'will receive funding from the National Science Foundation.', note: 'Use "whose" to indicate possession (the proposals of the researchers).' },
    { prompt: 'The cleanroom', target: 'where semiconductors are fabricated', wrong: ['which semiconductors are fabricated', 'that semiconductors are fabricated', 'whose semiconductors are fabricated'], context: 'requires extreme air filtration.', note: 'Use "where" for places (meaning in which).' },
    { prompt: 'The year', target: 'when the first human landed on the Moon', wrong: ['which the first human landed', 'where the first human landed', 'whose the first human landed'], context: 'was 1969.', note: 'Use "when" for time references.' },
    { prompt: 'The student', target: 'whom the committee selected', wrong: ['which the committee selected', 'whose the committee selected', 'what the committee selected'], context: 'for the scholarship has an exceptional academic record.', note: '"Whom" (or who/that) is used when the person is the object of the relative clause.' },
    { prompt: 'I found the reference manual', target: 'that I was looking for', wrong: ['what I was looking for', 'who I was looking for', 'whose I was looking for'], context: 'on the top shelf of the library.', note: 'Use "that" or "which" for objects/books (never use "what").' },
    { prompt: 'An architect is a professional', target: 'who designs', wrong: ['which designs', 'whose designs', 'what designs'], context: 'functional and aesthetically pleasing buildings.', note: '"Who" for persons performing the action.' },
    { prompt: 'The laboratory animal', target: 'that exhibited unusual behavior', wrong: ['who exhibited unusual behavior', 'whom exhibited unusual behavior', 'whose exhibited unusual behavior'], context: 'was isolated for further diagnostic testing.', note: '"That" or "which" for animals/specimens.' },
    { prompt: 'Families', target: 'whose homes were damaged', wrong: ['who homes were damaged', 'which homes were damaged', 'that homes were damaged'], context: 'by the flood were provided with emergency shelter.', note: 'Possessive relative pronoun: whose.' },
    { prompt: 'The university archive is a repository', target: 'where rare manuscripts are preserved', wrong: ['which rare manuscripts are preserved', 'that rare manuscripts are preserved', 'whose rare manuscripts are preserved'], context: 'in climate-controlled vaults.', note: '"Where" indicates location/place.' },
    { prompt: 'The date', target: 'when the new environmental legislation takes effect', wrong: ['where the legislation takes effect', 'which the legislation takes effect', 'whose legislation takes effect'], context: 'is January first.', note: '"When" for dates/times.' },
    { prompt: 'The software engineer', target: 'who wrote this neural network code', wrong: ['which wrote this code', 'whose wrote this code', 'what wrote this code'], context: 'works for an artificial intelligence laboratory.', note: '"Who" for people.' },
    { prompt: 'This is the exact telescope', target: 'which detected the exoplanet', wrong: ['who detected the exoplanet', 'whom detected the exoplanet', 'what detected the exoplanet'], context: 'in the habitable zone of the star.', note: '"Which" or "that" for instruments/things.' },
    { prompt: 'Patients', target: 'whose symptoms persist for more than a week', wrong: ['who symptoms persist', 'which symptoms persist', 'that symptoms persist'], context: 'should consult a medical specialist immediately.', note: 'Possessive relative pronoun: whose.' },
    { prompt: 'The conference room', target: 'where the panel discussion took place', wrong: ['which the panel took place', 'that the panel took place', 'whose panel took place'], context: 'was filled to maximum capacity.', note: '"Where" for location.' },
    { prompt: 'That was the moment', target: 'when the breakthrough occurred', wrong: ['where the breakthrough occurred', 'which the breakthrough occurred', 'whose the breakthrough occurred'], context: 'in the laboratory.', note: '"When" for moments/time.' },
    { prompt: 'The candidate', target: 'who possesses both technical and managerial skills', wrong: ['which possesses both skills', 'what possesses both skills', 'whose possesses both skills'], context: 'is ideal for the position.', note: '"Who" for person.' },
    { prompt: 'The turbine', target: 'that generates electrical power from oceanic tides', wrong: ['who generates power', 'what generates power', 'whose generates power'], context: 'has been installed on the seabed.', note: '"That" for machines/objects.' },
    { prompt: 'Musicians', target: 'whose instruments were handcrafted', wrong: ['who instruments were handcrafted', 'which instruments were handcrafted', 'that instruments were handcrafted'], context: 'produce rich, resonant acoustic tones.', note: 'Possessive: whose.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Defining Relative Clauses');
}

// 4. Non-Defining Relative Clauses Pool
function generateNonDefiningRelativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Albert Einstein,', target: 'who formulated the theory of general relativity,', wrong: ['that formulated the theory of relativity,', 'which formulated the theory of relativity,', 'whom formulated the theory of relativity,'], context: 'was awarded the Nobel Prize in Physics in 1921.', note: 'In non-defining relative clauses (with commas), you MUST use "who" for people; "that" is never allowed.' },
    { prompt: 'The James Webb Space Telescope,', target: 'which was launched on Christmas Day 2021,', wrong: ['that was launched on Christmas Day 2021,', 'who was launched on Christmas Day 2021,', 'what was launched on Christmas Day 2021,'], context: 'captures deep infrared views of the early universe.', note: 'In non-defining clauses for things, you MUST use "which" (never "that").' },
    { prompt: 'Cambridge University,', target: 'where Isaac Newton studied mathematics,', wrong: ['which Isaac Newton studied mathematics,', 'that Isaac Newton studied mathematics,', 'whose Isaac Newton studied mathematics,'], context: 'is one of the oldest universities in the world.', note: 'Use "where" with commas for non-defining place clauses.' },
    { prompt: 'Dr. Katherine Johnson,', target: 'whose complex orbital calculations enabled NASA missions,', wrong: ['who complex calculations enabled NASA,', 'which complex calculations enabled NASA,', 'that complex calculations enabled NASA,'], context: 'was a pioneering mathematician.', note: 'Use "whose" for possession in non-defining clauses.' },
    { prompt: 'The Large Hadron Collider,', target: 'which is located beneath the Franco-Swiss border,', wrong: ['that is located beneath the border,', 'who is located beneath the border,', 'what is located beneath the border,'], context: 'is the world\'s most powerful particle accelerator.', note: 'Non-defining clause with "which".' },
    { prompt: 'Marie Curie,', target: 'who was the first person to win two Nobel Prizes,', wrong: ['that was the first person to win two Nobel Prizes,', 'which was the first person to win two Nobel Prizes,', 'whose was the first person to win,'], context: 'conducted pioneering research on radioactivity.', note: 'Use "who" (never "that") for persons in non-defining clauses.' },
    { prompt: 'The Amazon Rainforest,', target: 'which spans nine South American nations,', wrong: ['that spans nine South American nations,', 'who spans nine South American nations,', 'what spans nine South American nations,'], context: 'contains unequaled biological diversity.', note: 'Use "which" with commas.' },
    { prompt: 'Stephen Hawking,', target: 'whose book A Brief History of Time became a global bestseller,', wrong: ['who book became a global bestseller,', 'which book became a global bestseller,', 'that book became a global bestseller,'], context: 'inspired generations of cosmologists.', note: 'Use "whose" for possession.' },
    { prompt: 'The Pacific Ocean,', target: 'which covers more than thirty percent of the Earth\'s surface,', wrong: ['that covers more than thirty percent of Earth,', 'who covers more than thirty percent,', 'what covers more than thirty percent,'], context: 'is the largest ocean basin on our planet.', note: 'Non-defining with "which".' },
    { prompt: 'Kyoto,', target: 'where hundreds of classical temples are preserved,', wrong: ['which hundreds of temples are preserved,', 'that hundreds of temples are preserved,', 'whose hundreds of temples are preserved,'], context: 'was the imperial capital of Japan for over a thousand years.', note: '"Where" for non-defining location.' },
    { prompt: 'Alexander Fleming,', target: 'who discovered penicillin by serendipity in 1928,', wrong: ['that discovered penicillin in 1928,', 'which discovered penicillin in 1928,', 'whom discovered penicillin in 1928,'], context: 'revolutionized modern infectious medicine.', note: '"Who" for persons.' },
    { prompt: 'The Human Genome Project,', target: 'which was completed in April 2003,', wrong: ['that was completed in April 2003,', 'who was completed in April 2003,', 'what was completed in April 2003,'], context: 'mapped the full genetic sequence of Homo sapiens.', note: '"Which" for non-defining events/projects.' },
    { prompt: 'Professor Vance,', target: 'whose analytical research appeared in Nature,', wrong: ['who analytical research appeared in Nature,', 'which analytical research appeared in Nature,', 'that analytical research appeared in Nature,'], context: 'was invited to chair the international panel.', note: 'Possessive: whose.' },
    { prompt: 'Mount Everest,', target: 'which rises 8,848 meters above sea level,', wrong: ['that rises 8,848 meters above sea level,', 'who rises 8,848 meters above sea level,', 'what rises 8,848 meters above sea level,'], context: 'attracts experienced mountaineers from around the globe.', note: '"Which" with commas.' },
    { prompt: 'Geneva,', target: 'where the World Health Organization is headquartered,', wrong: ['which the World Health Organization is headquartered,', 'that the World Health Organization is headquartered,', 'whose the WHO is headquartered,'], context: 'hosts numerous global diplomatic agencies.', note: '"Where" for city/location.' },
    { prompt: 'The solar battery array,', target: 'which was damaged during the hail storm,', wrong: ['that was damaged during the hail storm,', 'who was damaged during the hail storm,', 'what was damaged during the storm,'], context: 'has been completely replaced by maintenance.', note: '"Which" for things.' },
    { prompt: 'Leonardo da Vinci,', target: 'who was an accomplished painter, engineer, and anatomist,', wrong: ['that was an accomplished painter,', 'which was an accomplished painter,', 'whom was an accomplished painter,'], context: 'epitomizes the Renaissance ideal.', note: '"Who" for historical figures.' },
    { prompt: 'Our university library,', target: 'which houses over three million volumes,', wrong: ['that houses over three million volumes,', 'who houses over three million volumes,', 'what houses over three million volumes,'], context: 'is open twenty-four hours a day during exams.', note: '"Which" with commas.' },
    { prompt: 'He failed to submit his clinical trial data on time,', target: 'which surprised all the committee members.', wrong: ['that surprised all the committee members.', 'what surprised all the committee members.', 'who surprised all the committee members.'], context: '', note: '"Which" refers back to the entire preceding clause/fact.' },
    { prompt: 'The Sahara Desert,', target: 'which is the largest hot desert in the world,', wrong: ['that is the largest hot desert in the world,', 'who is the largest hot desert,', 'what is the largest hot desert,'], context: 'experiences extreme daily temperature fluctuations.', note: '"Which" for geographical entities.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Non-Defining Relative Clauses');
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
        explanation: `Incorrect. "${w}" violates the grammar rule. ${item.note}`
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
