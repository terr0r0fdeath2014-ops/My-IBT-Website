import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A3_PASSIVE_REPORTED_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'present_past_simple_passive',
    title: 'Present & Past Simple Passive (is/are + V3, was/were + V3)',
    subtitle: 'Focusing on the action/recipient rather than the doer',
    badge: 'Passive Voice (Simple)',
    description: 'Use the passive voice when the focus is on the action or the object receiving the action, rather than who or what performs it. It is essential in scientific reporting, formal journalism, and technical documentation. If mentioning the agent, use "by + agent".',
    keyRule: 'Present Simple Passive: Subject + is/are/am + V3 (Past Participle). Past Simple Passive: Subject + was/were + V3.',
    formula: 'Active: S + V + O -> Passive: O + (is/are or was/were) + V3 (+ by S).',
    examples: [
      'The pharmaceutical compound is synthesized in a state-of-the-art sterile environment.',
      'Penicillin was discovered by Alexander Fleming in 1928.',
      'Millions of digital transactions are processed securely every millisecond.',
      'The ancient Roman aqueducts were constructed with volcanic ash concrete.',
      'How are radioactive isotopes stored in medical research facilities?'
    ]
  },
  {
    id: 'passive_with_modals',
    title: 'Passive with Modals (can be done, must be checked, should be noted)',
    subtitle: 'Expressing rules, possibilities, and recommendations in passive structures',
    badge: 'Modal + be + V3',
    description: 'When combining modal auxiliaries with the passive voice, use: Modal + be + Past Participle (V3). For negative sentences: Modal + not + be + V3. This structure is heavily used in instructions, academic papers, and safety regulations.',
    keyRule: 'Subject + Modal (can / must / should / may / might / could) + be + V3 (Past Participle).',
    formula: 'Affirmative: S + modal + be + V3 | Negative: S + modal + not + be + V3 | Question: Modal + S + be + V3?',
    examples: [
      'All chemical waste must be disposed of according to strict municipal biohazard guidelines.',
      'Complex statistical models can easily be computed using modern GPU acceleration.',
      'These findings should be interpreted with caution until peer review is complete.',
      'Confidential patient dossiers may not be duplicated without official authorization.',
      'Could this software anomaly be resolved before the scheduled product deployment?'
    ]
  },
  {
    id: 'reported_speech_statements',
    title: 'Reported Speech - Statements & Tense Shift (Backshift)',
    subtitle: 'Reporting what people said by shifting tenses into the past',
    badge: 'Reported Statements',
    description: 'When reporting someone\'s words in the past using reporting verbs like "said" or "told + person", the verbs in the statement standardly shift back one tense (Backshift): Present Simple -> Past Simple; Present Continuous -> Past Continuous; Present Perfect / Past Simple -> Past Perfect; Will -> Would; Can -> Could.',
    keyRule: 'Direct "is/am/are" -> Reported "was/were"; Direct "V1" -> Reported "V2"; Direct "have/has V3" -> Reported "had V3"; Direct "will" -> Reported "would". Say (no object) vs. Tell + object ("He told me...").',
    formula: 'S + said (that) + S + backshifted verb | S + told + pronoun/noun + (that) + S + backshifted verb.',
    examples: [
      'Direct: "I am conducting a survey," -> Reported: She said that she was conducting a survey.',
      'Direct: "The team has finalized the design," -> Reported: He told us that the team had finalized the design.',
      'Direct: "We will publish next month," -> Reported: The editors announced that they would publish the following month.',
      'Direct: "I don\'t understand the algorithm," -> Reported: Marcus admitted that he didn\'t understand the algorithm.',
      'Direct: "The sample arrived yesterday," -> Reported: The technician stated that the sample had arrived the previous day.'
    ]
  },
  {
    id: 'reported_questions_requests',
    title: 'Reported Questions & Commands/Requests (asked if/whether, told to do)',
    subtitle: 'Converting direct questions, instructions, and polite requests into indirect speech',
    badge: 'Reported Questions/Orders',
    description: 'When reporting Wh- questions, keep the question word and use normal statement word order (Subject + Verb, NO do/does/did). For Yes/No questions, use "if" or "whether". For commands and requests, use: asked/told + object + to-infinitive (or not to-infinitive for negatives).',
    keyRule: 'Reported Questions: asked + (wh-word / if / whether) + Subject + Verb (NO question inversion, NO auxiliary "do/did"). Reported Requests: asked/told + person + (not) to + base verb.',
    formula: 'Wh- Q: S + asked + wh-word + S + backshifted verb | Yes/No Q: S + asked + if/whether + S + backshifted verb | Command: S + told/asked + O + (not) to + V.',
    examples: [
      'Direct: "Where do you store the reagents?" -> Reported: She asked me where I stored the reagents.',
      'Direct: "Have you calibrated the sensor?" -> Reported: The supervisor asked if I had calibrated the sensor.',
      'Direct: "Please do not touch the specimen," -> Reported: The curator asked visitors not to touch the specimen.',
      'Direct: "What time will the lecture start?" -> Reported: He inquired what time the lecture would start.',
      'Direct: "Submit the assignment by Friday," -> Reported: The professor told the students to submit the assignment by Friday.'
    ]
  }
];

export function getA3PassiveReportedStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'present_past_simple_passive':
      return generateSimplePassiveQuestions(starNumber, mSeed);
    case 'passive_with_modals':
      return generateModalPassiveQuestions(starNumber, mSeed);
    case 'reported_speech_statements':
      return generateReportedStatementsQuestions(starNumber, mSeed);
    case 'reported_questions_requests':
      return generateReportedQuestionsCommands(starNumber, mSeed);
    default:
      return generateSimplePassiveQuestions(starNumber, mSeed);
  }
}

// 1. Simple Passive Pool
function generateSimplePassiveQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The Mona Lisa', target: 'was painted by Leonardo da Vinci', wrong: ['painted by Leonardo da Vinci', 'is painted by Leonardo da Vinci', 'was paint by Leonardo da Vinci'], context: 'in the early sixteenth century.', note: 'Past action with historical agent: was painted by.' },
    { prompt: 'In this high-tech manufacturing plant, silicon microchips', target: 'are produced', wrong: ['is produced', 'are produce', 'were produce right now'], context: 'in ultra-clean dust-free chambers.', note: 'Present plural passive: are produced.' },
    { prompt: 'The first successful transatlantic telegraph cable', target: 'was laid', wrong: ['was layed', 'is laid', 'laid by engineers'], context: 'across the ocean floor in 1866.', note: 'Past passive of lay: was laid.' },
    { prompt: 'Organic coffee beans', target: 'are harvested by hand', wrong: ['is harvested by hand', 'are harvest by hand', 'harvested by hand currently'], context: 'on the steep volcanic slopes of Guatemala.', note: 'Present plural passive: are harvested.' },
    { prompt: 'The international climate summit', target: 'was hosted by Switzerland', wrong: ['is hosted by Switzerland last year', 'hosted by Switzerland', 'was host by Switzerland'], context: 'last November.', note: 'Past singular passive: was hosted.' },
    { prompt: 'Solar panels', target: 'are installed', wrong: ['is installed', 'are install', 'were install today'], context: 'on the rooftops of thousands of residential homes each year.', note: 'Present routine passive: are installed.' },
    { prompt: 'The rare manuscript', target: 'was discovered in an attic', wrong: ['discovered in an attic', 'is discovered in an attic last week', 'was discover in attic'], context: 'by historical researchers in 2021.', note: 'Past singular passive: was discovered.' },
    { prompt: 'English and French', target: 'are spoken', wrong: ['is spoken', 'are speak', 'were spoke currently'], context: 'as official administrative languages in Canada.', note: 'Present plural passive: are spoken.' },
    { prompt: 'The Olympic stadium', target: 'was designed by an architect', wrong: ['designed by an architect', 'was design by architect', 'is designed by architect in 2012'], context: 'from Tokyo for the 2020 Games.', note: 'Past singular passive: was designed.' },
    { prompt: 'All pharmaceutical formulas', target: 'are tested thoroughly', wrong: ['is tested thoroughly', 'are test thoroughly', 'tested thoroughly always'], context: 'before receiving government regulatory approval.', note: 'Present plural passive: are tested.' },
    { prompt: 'The ancient Mayan pyramids', target: 'were built', wrong: ['was built', 'were build', 'are build centuries ago'], context: 'without the use of metallic tools or wheeled carts.', note: 'Past plural passive: were built.' },
    { prompt: 'Millions of academic articles', target: 'are downloaded', wrong: ['is downloaded', 'are download', 'downloaded daily'], context: 'from online scientific repositories every single month.', note: 'Present plural passive: are downloaded.' },
    { prompt: 'The steam engine', target: 'was patented by James Watt', wrong: ['patented by James Watt', 'was patent by James Watt', 'is patented in 1769'], context: 'in 1769 during the Industrial Revolution.', note: 'Past singular passive: was patented.' },
    { prompt: 'Specialized optical lenses', target: 'are polished', wrong: ['is polished', 'are polish', 'were polish daily'], context: 'to nanometer precision in the aerospace workshop.', note: 'Present plural passive: are polished.' },
    { prompt: 'The historic treaty', target: 'was signed by representatives', wrong: ['signed by representatives', 'was sign by representatives', 'is signed in 1945'], context: 'from fifty nations in San Francisco in 1945.', note: 'Past passive: was signed.' },
    { prompt: 'Water samples', target: 'are collected', wrong: ['is collected', 'are collect', 'collected regularly'], context: 'from the municipal reservoir every morning to monitor purity.', note: 'Present plural passive: are collected.' },
    { prompt: 'The original symphony manuscript', target: 'was preserved', wrong: ['preserved', 'was preserve', 'is preserved in 1824'], context: 'in an airtight vault after Beethoven\'s death.', note: 'Past passive: was preserved.' },
    { prompt: 'Electric vehicle batteries', target: 'are recycled', wrong: ['is recycled', 'are recycle', 'recycled modernly'], context: 'using specialized metallurgical recovery methods.', note: 'Present plural passive: are recycled.' },
    { prompt: 'The telescope', target: 'was invented in the Netherlands', wrong: ['invented in the Netherlands', 'was invent in Netherlands', 'is invented in 1608'], context: 'at the beginning of the seventeenth century.', note: 'Past passive: was invented.' },
    { prompt: 'Global weather satellites', target: 'are monitored', wrong: ['is monitored', 'are monitor', 'monitored around clock'], context: 'twenty-four hours a day by international meteorologists.', note: 'Present plural passive: are monitored.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Present & Past Simple Passive');
}

// 2. Passive with Modals Pool
function generateModalPassiveQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Hazardous biological waste', target: 'must be incinerated', wrong: ['must incinerated', 'must be incinerate', 'must to be incinerated'], context: 'in certified high-temperature medical facilities.', note: 'Modal passive rule: must + be + V3.' },
    { prompt: 'The research hypothesis', target: 'can easily be verified', wrong: ['can easily verified', 'can easily be verify', 'can to easily be verified'], context: 'using independent statistical replication.', note: 'Modal passive: can + be + V3.' },
    { prompt: 'These experimental findings', target: 'should be interpreted', wrong: ['should interpreted', 'should be interpret', 'should to be interpreted'], context: 'with great caution until further clinical trials conclude.', note: 'Modal passive: should + be + V3.' },
    { prompt: 'Sensitive cryptographic keys', target: 'must not be stored', wrong: ['must not stored', 'must not be store', 'must not to be stored'], context: 'on unencrypted public cloud storage servers.', note: 'Negative modal passive: must not be + V3.' },
    { prompt: 'The software security vulnerability', target: 'could be exploited', wrong: ['could exploited', 'could be exploit', 'could to be exploited'], context: 'if the system patch is not deployed promptly.', note: 'Modal passive: could + be + V3.' },
    { prompt: 'All library books', target: 'must be returned', wrong: ['must returned', 'must be return', 'must to be returned'], context: 'before the end of the academic semester.', note: 'Modal passive: must be returned.' },
    { prompt: 'The rare plant species', target: 'might be endangered', wrong: ['might endangered', 'might be endanger', 'might to be endangered'], context: 'by the continuous expansion of industrial agriculture.', note: 'Modal passive: might be endangered.' },
    { prompt: 'Oral presentations', target: 'should not be read verbatim', wrong: ['should not read verbatim', 'should not be readed verbatim', 'should not to be read verbatim'], context: 'from PowerPoint projection slides.', note: 'Negative modal passive: should not be read.' },
    { prompt: 'How', target: 'can this mathematical formula be applied', wrong: ['can this formula applied', 'can this formula be apply', 'can this formula to be applied'], context: 'to real-world macroeconomic forecasting?', note: 'Question modal passive: can + S + be + V3.' },
    { prompt: 'The annual financial audit', target: 'must be completed by Friday', wrong: ['must completed by Friday', 'must be complete by Friday', 'must to be completed'], context: 'according to statutory corporate governance rules.', note: 'Modal passive: must be completed.' },
    { prompt: 'The lost archaeological artifacts', target: 'may never be recovered', wrong: ['may never recovered', 'may never be recover', 'may never to be recovered'], context: 'from the looted excavation site.', note: 'Modal passive with adverb: may never be recovered.' },
    { prompt: 'Protective ear muffs', target: 'must be worn', wrong: ['must worn', 'must be wear', 'must to be worn'], context: 'near heavy industrial aircraft engine testing bays.', note: 'Modal passive: must be worn.' },
    { prompt: 'The conference schedule', target: 'can be viewed online', wrong: ['can viewed online', 'can be view online', 'can to be viewed online'], context: 'on the university departmental portal.', note: 'Modal passive: can be viewed.' },
    { prompt: 'Confidential client information', target: 'cannot be shared', wrong: ['cannot shared', 'cannot be share', 'cannot to be shared'], context: 'without prior written informed authorization.', note: 'Negative modal passive: cannot be shared.' },
    { prompt: 'The structural damage', target: 'ought to be repaired', wrong: ['ought to repaired', 'ought be repaired', 'ought to be repair'], context: 'before the bridge is reopened to vehicular traffic.', note: 'Modal passive with ought to: ought to be repaired.' },
    { prompt: 'Such revolutionary scientific breakthroughs', target: 'might be achieved', wrong: ['might achieved', 'might be achieve', 'might to be achieved'], context: 'through collaborative international research programs.', note: 'Modal passive: might be achieved.' },
    { prompt: 'New passwords', target: 'must contain at least twelve characters and', targetSecondary: 'must not be shared', wrong: ['must not shared', 'must not be share', 'must not to be shared'], context: 'with unauthorized colleagues.', note: 'Modal passive: must not be shared.' },
    { prompt: 'The vintage watch mechanism', target: 'can be cleaned', wrong: ['can cleaned', 'can be clean', 'can to be cleaned'], context: 'only by an experienced master horologist.', note: 'Modal passive: can be cleaned.' },
    { prompt: 'This clinical trial report', target: 'should be published', wrong: ['should published', 'should be publish', 'should to be published'], context: 'in an open-access medical journal.', note: 'Modal passive: should be published.' },
    { prompt: '', target: 'Must the experimental samples be refrigerated', wrong: ['Must the samples refrigerated', 'Must the samples be refrigerate', 'Must the samples to be refrigerated'], context: 'at minus eighty degrees Celsius?', note: 'Question form: Must + S + be + V3.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Passive with Modals');
}

// 3. Reported Speech - Statements Pool
function generateReportedStatementsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Direct: "I am writing my doctoral dissertation." -> Reported: Clara said that she', target: 'was writing her doctoral dissertation', wrong: ['is writing her doctoral dissertation', 'wrote her doctoral dissertation', 'has been writing dissertation'], context: '.', note: 'Present Continuous shifts back to Past Continuous: is writing -> was writing.' },
    { prompt: 'Direct: "We have finalized the contract terms." -> Reported: The lawyers told us that they', target: 'had finalized the contract terms', wrong: ['have finalized the contract terms', 'finalized the contract terms', 'were finalizing the contract terms'], context: '.', note: 'Present Perfect shifts back to Past Perfect: have finalized -> had finalized.' },
    { prompt: 'Direct: "The laboratory will publish the results next week." -> Reported: Dr. Vance stated that the lab', target: 'would publish the results the following week', wrong: ['will publish the results next week', 'published the results next week', 'would published the results'], context: '.', note: '"will" shifts back to "would", and "next week" shifts to "the following week".' },
    { prompt: 'Direct: "I don\'t agree with this hypothesis." -> Reported: Professor Zhang admitted that he', target: 'didn\'t agree with that hypothesis', wrong: ['doesn\'t agree with this hypothesis', 'won\'t agree with that hypothesis', 'hadn\'t agree with hypothesis'], context: '.', note: 'Present Simple negative shifts to Past Simple: don\'t agree -> didn\'t agree.' },
    { prompt: 'Direct: "I saw the total solar eclipse in Chile." -> Reported: Liam explained that he', target: 'had seen the total solar eclipse in Chile', wrong: ['saw the total solar eclipse in Chile', 'has seen the eclipse in Chile', 'was seeing the eclipse in Chile'], context: '.', note: 'Past Simple shifts back to Past Perfect: saw -> had seen.' },
    { prompt: 'Direct: "We are developing an autonomous drone." -> Reported: The engineers said that they', target: 'were developing an autonomous drone', wrong: ['are developing an autonomous drone', 'developed an autonomous drone', 'have developed an autonomous drone'], context: '.', note: 'are developing -> were developing.' },
    { prompt: 'Direct: "I can speak four Scandinavian languages." -> Reported: Astrid told me that she', target: 'could speak four Scandinavian languages', wrong: ['can speak four Scandinavian languages', 'could spoke four languages', 'was can speak four languages'], context: '.', note: 'can speak -> could speak.' },
    { prompt: 'Direct: "The aircraft has already landed." -> Reported: The gate attendant announced that the flight', target: 'had already landed', wrong: ['has already landed', 'already landed', 'was already landed'], context: '.', note: 'has landed -> had landed.' },
    { prompt: 'Direct: "I must submit my tax declarations today." -> Reported: Elena said that she', target: 'had to submit her tax declarations that day', wrong: ['must submit her tax declarations today', 'must to submit her declarations', 'has to submit her declarations'], context: '.', note: '"must" shifts to "had to", and "today" shifts to "that day".' },
    { prompt: 'Direct: "We will meet you at the symposium." -> Reported: They promised that they', target: 'would meet us at the symposium', wrong: ['will meet us at the symposium', 'met us at the symposium', 'would met us at the symposium'], context: '.', note: 'will meet -> would meet.' },
    { prompt: 'Direct: "I am not satisfied with the quality of data." -> Reported: The lead investigator mentioned that she', target: 'was not satisfied with the data', wrong: ['is not satisfied with the data', 'has not satisfied with data', 'will not be satisfied'], context: '.', note: 'am not -> was not.' },
    { prompt: 'Direct: "The temperature dropped below freezing overnight." -> Reported: The forecaster reported that the temperature', target: 'had dropped below freezing overnight', wrong: ['dropped below freezing overnight', 'has dropped below freezing', 'was dropping below freezing'], context: '.', note: 'Past Simple (dropped) backshifts to Past Perfect (had dropped).' },
    { prompt: 'Direct: "We don\'t have enough reagent solution." -> Reported: The assistant', target: 'told the professor that they didn\'t have', wrong: ['said the professor that they didn\'t have', 'told that they didn\'t have', 'said to the professor they don\'t have'], context: 'enough reagent solution.', note: 'Tell requires an indirect object ("told the professor").' },
    { prompt: 'Direct: "I have been working in cardiology for ten years." -> Reported: Dr. Gomez noted that he', target: 'had been working in cardiology for ten years', wrong: ['has been working in cardiology for ten years', 'was working in cardiology for ten years', 'worked in cardiology for ten years'], context: '.', note: 'have been working -> had been working.' },
    { prompt: 'Direct: "The museum is closed for renovations." -> Reported: The tour guide informed us that the museum', target: 'was closed for renovations', wrong: ['is closed for renovations', 'has closed for renovations', 'were closed for renovations'], context: '.', note: 'is closed -> was closed.' },
    { prompt: 'Direct: "I cannot decipher the handwritten manuscript." -> Reported: The historian confessed that he', target: 'could not decipher the manuscript', wrong: ['cannot decipher the manuscript', 'could not deciphered the manuscript', 'was not can decipher'], context: '.', note: 'cannot decipher -> could not decipher.' },
    { prompt: 'Direct: "We will deliver the replacement components tomorrow." -> Reported: The supplier assured us that they', target: 'would deliver the components the next day', wrong: ['will deliver the components tomorrow', 'delivered components tomorrow', 'would delivered components next day'], context: '.', note: 'will deliver -> would deliver; tomorrow -> the next day.' },
    { prompt: 'Direct: "I lost my university security pass yesterday." -> Reported: Marcus told security that he', target: 'had lost his pass the previous day', wrong: ['lost his pass yesterday', 'has lost his pass yesterday', 'was losing his pass previous day'], note: 'lost -> had lost; yesterday -> the previous day.', context: '.' },
    { prompt: 'Direct: "The experiment is yielding remarkable results." -> Reported: She exclaimed that the experiment', target: 'was yielding remarkable results', wrong: ['is yielding remarkable results', 'yielded remarkable results', 'has yielded remarkable results'], context: '.', note: 'is yielding -> was yielding.' },
    { prompt: 'Direct: "I have never witnessed such an aurora." -> Reported: The astronomer remarked that she', target: 'had never witnessed such an aurora', wrong: ['has never witnessed such an aurora', 'never witnessed such an aurora', 'was never witnessing an aurora'], context: '.', note: 'have never witnessed -> had never witnessed.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Reported Speech - Statements');
}

// 4. Reported Questions & Requests Pool
function generateReportedQuestionsCommands(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Direct: "Where do you store the hazardous chemicals?" -> Reported: The inspector asked me where', target: 'I stored the hazardous chemicals', wrong: ['did I store the hazardous chemicals', 'do I store the hazardous chemicals', 'I do store the hazardous chemicals'], context: '.', note: 'In reported questions, use statement word order (Subject + Verb) without "did/do": where I stored.' },
    { prompt: 'Direct: "Have you calibrated the optical spectrometer?" -> Reported: Dr. Vance asked whether', target: 'I had calibrated the optical spectrometer', wrong: ['had I calibrated the spectrometer', 'I have calibrated the spectrometer', 'did I calibrate the spectrometer'], context: '.', note: 'Reported Yes/No question: whether + Subject + had calibrated.' },
    { prompt: 'Direct: "Please do not touch the ancient parchment." -> Reported: The curator asked visitors', target: 'not to touch the ancient parchment', wrong: ['to not touch the ancient parchment', 'don\'t touch the ancient parchment', 'not touching the ancient parchment'], context: '.', note: 'Negative reported request: asked + object + not to + base verb.' },
    { prompt: 'Direct: "What time will the keynote address begin?" -> Reported: The delegate inquired what time', target: 'the keynote address would begin', wrong: ['would the keynote address begin', 'will the keynote address begin', 'the keynote address will begin'], context: '.', note: 'Statement word order: what time the keynote address would begin.' },
    { prompt: 'Direct: "Do you plan to attend the neuroscience symposium?" -> Reported: Sophia asked me if', target: 'I planned to attend the symposium', wrong: ['did I plan to attend the symposium', 'I plan to attend the symposium', 'do I plan to attend the symposium'], context: '.', note: 'Yes/No question with if: if I planned.' },
    { prompt: 'Direct: "Turn off all high-voltage equipment before leaving." -> Reported: The lab manager told the technicians', target: 'to turn off all high-voltage equipment', wrong: ['turning off all equipment', 'that turn off all equipment', 'to turned off all equipment'], context: '.', note: 'Reported command: told + object + to + base verb.' },
    { prompt: 'Direct: "Why was the flight cancelled?" -> Reported: The passengers asked why', target: 'the flight had been cancelled', wrong: ['was the flight cancelled', 'the flight was cancelled', 'had the flight been cancelled'], context: '.', note: 'Statement word order with past perfect: why the flight had been cancelled.' },
    { prompt: 'Direct: "Can you speak German fluently?" -> Reported: The recruiter asked Lucas if', target: 'he could speak German fluently', wrong: ['could he speak German fluently', 'he can speak German fluently', 'did he can speak German'], context: '.', note: 'if he could speak.' },
    { prompt: 'Direct: "Please submit your laboratory reports by noon." -> Reported: The instructor requested students', target: 'to submit their laboratory reports by noon', wrong: ['submitting their laboratory reports', 'that they submit their reports', 'to submitted their reports'], context: '.', note: 'requested + object + to + base verb.' },
    { prompt: 'Direct: "How many research samples did you analyze?" -> Reported: The supervisor inquired how many samples', target: 'we had analyzed', wrong: ['did we analyze', 'we analyzed', 'had we analyzed'], context: '.', note: 'Statement order: how many samples we had analyzed.' },
    { prompt: 'Direct: "Do not exceed the speed limit in the tunnel." -> Reported: The police officer ordered the driver', target: 'not to exceed the speed limit', wrong: ['to not exceed the speed limit', 'don\'t exceed the speed limit', 'not exceeding the speed limit'], context: '.', note: 'Negative command: ordered + object + not to + base verb.' },
    { prompt: 'Direct: "Are you ready to present your thesis findings?" -> Reported: The committee asked Liam whether', target: 'he was ready to present his thesis', wrong: ['was he ready to present his thesis', 'he is ready to present his thesis', 'did he ready to present'], context: '.', note: 'whether he was ready.' },
    { prompt: 'Direct: "Where did you purchase this antique microscope?" -> Reported: She asked me where', target: 'I had purchased the antique microscope', wrong: ['did I purchase the antique microscope', 'I purchased the microscope', 'had I purchased the microscope'], context: '.', note: 'where I had purchased.' },
    { prompt: 'Direct: "Please wear safety goggles at all times." -> Reported: The supervisor reminded us', target: 'to wear safety goggles at all times', wrong: ['wearing safety goggles at all times', 'that wear safety goggles', 'to wore safety goggles'], context: '.', note: 'reminded + object + to + base verb.' },
    { prompt: 'Direct: "Who discovered this biological compound?" -> Reported: The journalist asked who', target: 'had discovered the biological compound', wrong: ['did discover the biological compound', 'has discovered the compound', 'was discovered the compound'], context: '.', note: 'Subject question backshift: who had discovered.' },
    { prompt: 'Direct: "Will the weather improve tomorrow?" -> Reported: The hiker asked if the weather', target: 'would improve the following day', wrong: ['will improve tomorrow', 'would improved the following day', 'improves the following day'], context: '.', note: 'if the weather would improve the following day.' },
    { prompt: 'Direct: "Do not enter the sterile operating theater." -> Reported: The surgeon instructed the visitors', target: 'not to enter the operating theater', wrong: ['to not enter the operating theater', 'don\'t enter the operating theater', 'not entering the theater'], context: '.', note: 'not to enter.' },
    { prompt: 'Direct: "How does this magnetic sensor operate?" -> Reported: The student asked how', target: 'the magnetic sensor operated', wrong: ['did the magnetic sensor operate', 'does the magnetic sensor operate', 'operated the magnetic sensor'], context: '.', note: 'how the magnetic sensor operated.' },
    { prompt: 'Direct: "Did you receive the email confirmation?" -> Reported: She asked me whether', target: 'I had received the email confirmation', wrong: ['did I receive the confirmation', 'I received the confirmation', 'had I received the confirmation'], context: '.', note: 'whether I had received.' },
    { prompt: 'Direct: "Please silence your mobile devices." -> Reported: The concert usher asked the audience', target: 'to silence their mobile devices', wrong: ['silencing their mobile devices', 'that they silence devices', 'to silenced their devices'], context: '.', note: 'asked + object + to + base verb.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Reported Questions & Requests');
}

// Shared helper
function createRotatedQuestions(
  pool: { prompt: string; target: string; wrong: string[]; context: string; note: string; targetSecondary?: string }[],
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
