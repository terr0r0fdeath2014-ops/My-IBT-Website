import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A4_MODALS_INDIRECT_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'modals_past_deduction',
    title: 'Modals of Past Deduction & Speculation (must have, can\'t have, might have, should have)',
    subtitle: 'Assessing past certainty, impossibility, possibility, and unfulfilled obligations',
    badge: 'Modal + have + V3',
    description: 'Use modal perfects (Modal + have + past participle) to speculate about or judge past events: 1) "Must have + V3" (almost 100% positive certainty about past: "He must have arrived"). 2) "Can\'t / Couldn\'t have + V3" (almost 100% negative certainty/impossibility: "She can\'t have stolen the file"). 3) "Might / May / Could have + V3" (past possibility/uncertainty: "They might have taken the train"). 4) "Should have + V3" (criticism or unfulfilled duty: "You should have checked the tires").',
    keyRule: 'Certain positive: must have + V3. Impossible negative: can\'t/couldn\'t have + V3 (NEVER "mustn\'t have" for deduction). Possibility: might/could have + V3. Past regret/critique: should/ought to have + V3.',
    formula: 'S + must / can\'t / might / could / should / ought to + have + V3 (Past Participle).',
    examples: [
      'The laboratory lights were left on all night; Dr. Vance must have forgotten to lock up.',
      'That amateur hacker can\'t have breached our quantum firewall; the code is military grade.',
      'The flight is delayed; the airplane might have encountered severe headwinds over Greenland.',
      'You should have backed up the database before running the migration script!',
      'They couldn\'t have known about the unscheduled inspection; it was confidential.'
    ]
  },
  {
    id: 'advanced_reporting_verbs',
    title: 'Advanced Reporting Verbs (suggested doing, insisted on, denied having, reminded him to)',
    subtitle: 'Replacing basic "said" and "told" with expressive, syntactically nuanced verbs',
    badge: 'Reporting Verb Patterns',
    description: 'Move beyond "said" and "told" to precise academic and journalistic reporting verbs with distinct syntactic patterns: 1) Verb + Gerund: admit, deny, recommend, suggest (e.g. "He suggested conducting a trial"). 2) Verb + Preposition + Gerund: apologize for, insist on, boast about (e.g. "She insisted on reviewing the data"). 3) Verb + Object + Preposition + Gerund: accuse of, blame for, congratulate on. 4) Verb + Object + To-Infinitive: advise, encourage, remind, warn, urge.',
    keyRule: 'Memorize verb complement patterns: suggest/recommend + V-ing | insist on + V-ing | accuse + person + of + V-ing | remind/urge/advise + person + to-inf.',
    formula: 'V + V-ing | V + prep + V-ing | V + O + prep + V-ing | V + O + to-V.',
    examples: [
      'The visiting professor suggested repeating the thermodynamic experiment with a larger sample.',
      'The lead investigator insisted on reviewing all raw telemetry data personally.',
      'The technician denied altering the patient records in the computer system.',
      'She reminded her colleagues to submit their grant applications before the noon deadline.',
      'The oversight committee accused the pharmaceutical firm of withholding negative clinical trial data.'
    ]
  },
  {
    id: 'complex_question_tags',
    title: 'Complex Question Tags & Imperatives (Let\'s, Imperatives, Negative Adverbs, Pronouns)',
    subtitle: 'Mastering subtle tag rules for suggestions, commands, negative adverbs & indefinite pronouns',
    badge: 'Advanced Question Tags',
    description: 'Master advanced question tag rules: 1) "Let\'s + verb" -> tag is "...shall we?" ("Let\'s begin, shall we?"). 2) Positive imperatives -> "...will you?" / "...won\'t you?" / "...could you?" ("Close the door, will you?"). 3) Negative imperatives -> "...will you?" ("Don\'t forget, will you?"). 4) Sentences with negative adverbs (hardly, scarcely, barely, never, seldom, rarely, neither) take POSITIVE tags ("She rarely speaks in meetings, does she?"). 5) Indefinite pronouns for people (everyone, somebody, nobody) take the pronoun "they" in the tag ("Everyone arrived on time, didn\'t they?"). 6) Indefinite pronouns for things (everything, nothing) take "it" ("Nothing was damaged, was it?").',
    keyRule: 'Let\'s -> shall we? | Imperatives -> will you? | Negative words (hardly, rarely, nobody) -> positive tag! | Everyone/Somebody -> they | Nothing/Everything -> it.',
    formula: 'Positive statement with negative adverb -> Positive Tag | Imperative -> will you? | Let\'s -> shall we?',
    examples: [
      'Let\'s review the clinical protocol one more time before the trial, shall we?',
      'Don\'t disclose these classified formulas to the media, will you?',
      'Dr. Lin hardly ever misses a departmental symposium, does she?',
      'Everyone in the laboratory wore their protective eyewear, didn\'t they?',
      'Nothing unusual was detected in the deep-space radio frequency spectrum, was it?'
    ]
  },
  {
    id: 'embedded_questions_polite',
    title: 'Embedded Questions & Polite Inquiries (Could you tell me where... / I wonder if...)',
    subtitle: 'Structuring indirect, tactful, and diplomatic inquiries with statement word order',
    badge: 'Embedded Questions',
    description: 'Use embedded questions inside introductory phrases to ask questions politely and diplomatically ("Could you tell me...", "Do you happen to know...", "I was wondering if...", "Would you mind telling me...", "I would like to inquire whether..."). CRITICAL RULE: Inside the embedded clause, ALWAYS use STATEMENT word order (Subject + Verb), and DO NOT use the question auxiliaries "do", "does", or "did".',
    keyRule: 'Intro phrase + (wh-word / if / whether) + Subject + Verb (NO inversion! NO do/does/did!). E.g., "Could you tell me where the lab is?" (NOT "where is the lab").',
    formula: 'Introductory Polite Phrase + (Wh-word / If / Whether) + Subject + Verb (+ Object).',
    examples: [
      'Could you please tell me what time the international keynote lecture begins?',
      'Do you happen to know where Dr. Alvarez stored the cryogenic biological samples?',
      'I was wondering whether the university offers research fellowships in astrophysics.',
      'Would you mind explaining how this optical spectrometer calculates wavelength absorption?',
      'I would like to know if the ethics committee has approved our clinical trial methodology.'
    ]
  }
];

export function getA4ModalsIndirectStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'modals_past_deduction':
      return generatePastDeductionQuestions(starNumber, mSeed);
    case 'advanced_reporting_verbs':
      return generateAdvancedReportingQuestions(starNumber, mSeed);
    case 'complex_question_tags':
      return generateComplexTagsQuestions(starNumber, mSeed);
    case 'embedded_questions_polite':
      return generateEmbeddedQuestionsQuestions(starNumber, mSeed);
    default:
      return generatePastDeductionQuestions(starNumber, mSeed);
  }
}

// 1. Past Deduction Pool
function generatePastDeductionQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The laboratory lights were left on and the door was wide open; Dr. Vance', target: 'must have left in a hurry', wrong: ['can have left in a hurry', 'must left in a hurry', 'should have left in a hurry for certainty'], context: 'when the emergency alarm sounded.', note: 'Strong logical certainty about the past: must have + V3 (must have left).' },
    { prompt: 'That inexperienced hacker', target: 'can\'t have breached our quantum firewall', wrong: ['mustn\'t have breached our firewall', 'can\'t breached our firewall', 'couldn\'t to have breached firewall'], context: '; the encryption algorithm is mathematically uncrackable.', note: 'Negative certainty/impossibility in past: can\'t have + V3 (never "mustn\'t have").' },
    { prompt: 'The flight from Tokyo only landed five minutes ago; the passengers', target: 'couldn\'t have passed through immigration yet', wrong: ['mustn\'t have passed through immigration', 'couldn\'t passed through immigration', 'can\'t to have passed through immigration'], context: '.', note: 'Past impossibility: couldn\'t have passed.' },
    { prompt: 'The astronomical data shows an unexpected gravitational flare; it', target: 'might have been caused', wrong: ['can have been caused', 'might was caused', 'might have be caused'], context: 'by a passing rogue exoplanet.', note: 'Past possibility: might have been caused.' },
    { prompt: 'You', target: 'should have verified the statistical calculations', wrong: ['should verified the calculations', 'must have verified calculations for regret', 'ought have verify calculations'], context: 'before submitting the clinical manuscript to Nature!', note: 'Past unfulfilled duty/criticism: should have verified.' },
    { prompt: 'Sophia has won two Olympic gold medals; she', target: 'must have trained relentlessly', wrong: ['can have trained relentlessly', 'must to have trained', 'should have trained relentlessly for deduction'], context: 'for over a decade.', note: 'Strong positive deduction: must have trained.' },
    { prompt: 'The ancient stone tablet', target: 'could have belonged to', wrong: ['can have belonged to', 'could belonged to', 'could have belong to'], context: 'a previously unrecorded Mesopotamian king.', note: 'Past possibility: could have belonged to.' },
    { prompt: 'He had no laboratory keycard and the biometric sensors registered no entry; he', target: 'can\'t have entered the cleanroom', wrong: ['mustn\'t have entered the cleanroom', 'can\'t entered the cleanroom', 'couldn\'t entered the cleanroom'], context: 'last night.', note: 'Logical negative deduction: can\'t have entered.' },
    { prompt: 'The emergency hospital generators', target: 'ought to have been tested', wrong: ['ought to been tested', 'ought have tested by staff', 'ought to have be tested'], context: 'before the hurricane struck the coastal city.', note: 'Moral/practical duty unfulfilled: ought to have been tested.' },
    { prompt: 'She looks completely devastated; she', target: 'must have received bad news', wrong: ['can have received bad news', 'must received bad news', 'should have received bad news for deduction'], context: 'regarding her doctoral fellowship application.', note: 'Strong deduction: must have received.' },
    { prompt: 'We', target: 'might have taken the wrong mountain trail', wrong: ['can have taken the wrong trail', 'might taken the wrong trail', 'might have took the wrong trail'], context: '; these geographic landmarks do not match our topographic map.', note: 'Past uncertainty: might have taken.' },
    { prompt: 'The driver', target: 'should not have exceeded the speed limit', wrong: ['must not have exceeded the speed limit for critique', 'should not exceeded speed limit', 'ought not have exceed speed limit'], context: 'on the icy alpine suspension bridge.', note: 'Criticism of past action: should not have exceeded.' },
    { prompt: 'The original Renaissance canvas', target: 'may have been painted', wrong: ['can have been painted', 'may was painted', 'may have be painted'], context: 'by a student in Raphael\'s Florence workshop.', note: 'Past historical speculation: may have been painted.' },
    { prompt: 'There are no footstep tracks in the fresh polar snow; the expedition team', target: 'could not have departed on foot', wrong: ['must not have departed on foot for deduction', 'could not departed on foot', 'can\'t to have departed on foot'], context: '.', note: 'Past negative certainty: could not have departed.' },
    { prompt: 'The surgeon was reprimanded because she', target: 'should have sterilized the instruments twice', wrong: ['must have sterilized instruments twice for duty', 'should sterilized instruments twice', 'ought have sterilized twice'], context: 'before commencing the procedure.', note: 'Past failure of duty: should have sterilized.' },
    { prompt: 'He is shivering uncontrollably; he', target: 'must have fallen into the freezing river', wrong: ['can have fallen into the river', 'must fallen into the river', 'should have fallen into river for deduction'], context: 'during the mountain trek.', note: 'Strong logical deduction: must have fallen.' },
    { prompt: 'They', target: 'might not have received our email notification', wrong: ['can not have received our notification', 'might not received our notification', 'may not received our notification'], context: 'because of the transatlantic server blackout.', note: 'Negative possibility: might not have received.' },
    { prompt: 'You', target: 'could have warned us about the blizzard', wrong: ['can have warned us about blizzard', 'could warned us about blizzard', 'would can have warned us'], context: 'before we drove up into the high mountain pass!', note: 'Criticism of past missed capability: could have warned.' },
    { prompt: 'The ancient pyramid', target: 'must have required thousands of skilled artisans', wrong: ['can have required thousands of artisans', 'must required thousands of artisans', 'should have required thousands for deduction'], context: 'to construct over several decades.', note: 'Past logical deduction: must have required.' },
    { prompt: 'He', target: 'can\'t have finished the four-hour neurosurgery exam in thirty minutes', wrong: ['mustn\'t have finished the exam in thirty minutes', 'can\'t finished the exam in thirty minutes', 'couldn\'t to have finished the exam'], context: '; it is humanly impossible.', note: 'Impossibility: can\'t have finished.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Modals of Past Deduction & Speculation');
}

// 2. Advanced Reporting Verbs Pool
function generateAdvancedReportingQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The visiting epidemiologist', target: 'suggested conducting a randomized clinical trial', wrong: ['suggested to conduct a clinical trial', 'suggested that to conduct a clinical trial', 'suggested conducting of a clinical trial'], context: 'with a larger patient cohort.', note: '"Suggest" is followed by a gerund (V-ing) or a that-clause with subjunctive (never to-infinitive).' },
    { prompt: 'Dr. Lin', target: 'insisted on reviewing all raw telemetry data', wrong: ['insisted to review all raw telemetry data', 'insisted reviewing all telemetry data', 'insisted on to review telemetry data'], context: 'before signing off on the spacecraft launch.', note: '"Insist on + V-ing": insisted on reviewing.' },
    { prompt: 'The suspect adamantly', target: 'denied having stolen the classified formulas', wrong: ['denied to steal the classified formulas', 'denied of stealing the classified formulas', 'denied to have stolen the formulas'], context: 'from the laboratory server.', note: '"Deny + V-ing / having V3": denied having stolen.' },
    { prompt: 'The department chair', target: 'reminded the researchers to submit their grant applications', wrong: ['reminded the researchers submitting applications', 'reminded to the researchers to submit', 'reminded the researchers that submit'], context: 'before the noon deadline.', note: '"Remind + person + to-infinitive": reminded the researchers to submit.' },
    { prompt: 'The university ethics oversight board', target: 'accused the pharmaceutical company of falsifying', wrong: ['accused the company to falsify', 'accused the company for falsifying', 'accused the company about falsifying'], context: 'cardiovascular safety data.', note: '"Accuse + person + of + V-ing": accused the company of falsifying.' },
    { prompt: 'The senior flight instructor', target: 'warned the trainee pilot not to stall', wrong: ['warned the trainee pilot to not stall', 'warned the trainee pilot don\'t stall', 'warned to the trainee pilot not stalling'], context: 'the aircraft during the steep ascent.', note: '"Warn + person + not to-infinitive": warned the pilot not to stall.' },
    { prompt: 'The lead climatologist', target: 'recommended publishing the global warming report', wrong: ['recommended to publish the report', 'recommended of publishing the report', 'recommended publishing to the report'], context: 'in an open-access journal immediately.', note: '"Recommend + V-ing": recommended publishing.' },
    { prompt: 'The laboratory technician', target: 'apologized for accidentally breaking the glass flask', wrong: ['apologized to break the glass flask', 'apologized for to break the glass flask', 'apologized of breaking the glass flask'], context: 'during the titration experiment.', note: '"Apologize for + V-ing": apologized for breaking.' },
    { prompt: 'The cardiologist strongly', target: 'advised the patient to reduce his daily sodium intake', wrong: ['advised the patient reducing his sodium intake', 'advised to the patient to reduce sodium', 'advised the patient that reduce sodium'], context: 'to prevent arterial hypertension.', note: '"Advise + person + to-infinitive": advised the patient to reduce.' },
    { prompt: 'The defense attorney', target: 'congratulated Dr. Vance on winning the landmark patent case', wrong: ['congratulated Dr. Vance for winning the case', 'congratulated Dr. Vance to win the case', 'congratulated Dr. Vance about winning case'], context: 'in federal court.', note: '"Congratulate + person + on + V-ing": congratulated on winning.' },
    { prompt: 'The corporate auditor', target: 'blamed the accounting discrepancy on negligence', wrong: ['blamed the discrepancy to negligence', 'blamed the discrepancy for negligence', 'blamed the discrepancy about negligence'], context: 'by the regional administrative branch.', note: '"Blame + thing + on + noun/person": blamed on negligence.' },
    { prompt: 'The research supervisor', target: 'encouraged the postgraduate students to present', wrong: ['encouraged the students presenting', 'encouraged to the students to present', 'encouraged the students that present'], context: 'their findings at the international symposium.', note: '"Encourage + person + to-infinitive": encouraged students to present.' },
    { prompt: 'He', target: 'admitted making a calculation error', wrong: ['admitted to make a calculation error', 'admitted of making a calculation error', 'admitted making to a calculation error'], context: 'in the differential calculus proofs.', note: '"Admit + V-ing": admitted making.' },
    { prompt: 'The university rector', target: 'urged the faculty to embrace interdisciplinary research', wrong: ['urged the faculty embracing research', 'urged to the faculty to embrace', 'urged the faculty that embrace'], context: 'across technology and humanities.', note: '"Urge + person + to-infinitive": urged the faculty to embrace.' },
    { prompt: 'The biotech startup', target: 'boasted about achieving quantum supremacy', wrong: ['boasted to achieve quantum supremacy', 'boasted on achieving quantum supremacy', 'boasted for achieving quantum supremacy'], context: 'in molecular simulation benchmarks.', note: '"Boast about/of + V-ing": boasted about achieving.' },
    { prompt: 'The police officer', target: 'ordered the suspect to put his hands up', wrong: ['ordered the suspect putting his hands up', 'ordered to the suspect to put hands', 'ordered the suspect that put hands'], context: 'immediately.', note: '"Order + person + to-infinitive": ordered the suspect to put.' },
    { prompt: 'The clinical safety director', target: 'forbade researchers from entering the hot zone', wrong: ['forbade researchers to not enter the hot zone', 'forbade researchers entering hot zone without from', 'forbade researchers of entering hot zone'], context: 'without biosafety level 4 respirators.', note: '"Forbid/prohibit + person + from + V-ing": forbade from entering.' },
    { prompt: 'The visiting scholar', target: 'proposed collaborating on a joint AI project', wrong: ['proposed to collaborate on a joint AI project with person', 'proposed of collaborating on a project', 'proposed collaborating to on a project'], context: 'with the computer science laboratory.', note: '"Propose + V-ing": proposed collaborating.' },
    { prompt: 'The museum curator', target: 'thanked the benefactors for donating the Renaissance art', wrong: ['thanked the benefactors to donate art', 'thanked the benefactors on donating art', 'thanked the benefactors of donating art'], context: 'to the permanent public exhibition.', note: '"Thank + person + for + V-ing": thanked for donating.' },
    { prompt: 'The government regulator', target: 'demanded to see the audited emissions records', wrong: ['demanded seeing the audited records', 'demanded of seeing the audited records', 'demanded to seeing the audited records'], context: 'from the automobile manufacturer.', note: '"Demand + to-infinitive": demanded to see.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Advanced Reporting Verbs');
}

// 3. Complex Question Tags Pool
function generateComplexTagsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Let\'s review the clinical trial protocols one more time before dawn,', target: 'shall we?', wrong: ['will we?', 'don\'t we?', 'let we?'], context: '', note: 'Suggestions with "Let\'s" take the tag "...shall we?".' },
    { prompt: 'Don\'t disclose these classified cryptographic keys to anyone,', target: 'will you?', wrong: ['don\'t you?', 'shall you?', 'do you?'], context: '', note: 'Negative imperatives take "...will you?".' },
    { prompt: 'Dr. Lin hardly ever misses a faculty committee meeting,', target: 'does she?', wrong: ['doesn\'t she?', 'is she?', 'hardly she?'], context: '', note: 'Sentences with negative adverbs like "hardly ever", "rarely", "seldom" take a POSITIVE tag: does she?' },
    { prompt: 'Everyone in the biochemistry laboratory wore their protective goggles,', target: 'didn\'t they?', wrong: ['didn\'t he?', 'weren\'t they?', 'did they?'], context: '', note: 'Indefinite pronouns for people (everyone, somebody) take the pronoun "they" in the tag: didn\'t they?' },
    { prompt: 'Nothing unusual was detected in the seismic telemetry logs,', target: 'was it?', wrong: ['wasn\'t it?', 'were they?', 'did it?'], context: '', note: '"Nothing" is negative and takes "it" with a POSITIVE tag: was it?' },
    { prompt: 'Turn off the high-voltage laser power switch before leaving,', target: 'will you?', wrong: ['don\'t you?', 'shall you?', 'do you?'], context: '', note: 'Positive imperative takes "...will you?" or "...could you?".' },
    { prompt: 'Nobody in the conference room knew the answer to the quantum question,', target: 'did they?', wrong: ['didn\'t they?', 'did he?', 'knew they?'], context: '', note: '"Nobody" is negative and takes "they" with a POSITIVE tag: did they?' },
    { prompt: 'You have scarcely had any rest since yesterday\'s marathon surgery,', target: 'have you?', wrong: ['haven\'t you?', 'did you?', 'had you?'], context: '', note: '"Scarcely" is negative, requiring a positive tag: have you?' },
    { prompt: 'Somebody left their encrypted flash drive on the podium,', target: 'didn\'t they?', wrong: ['didn\'t he?', 'did they?', 'hadn\'t they?'], context: '', note: '"Somebody" takes "they" in tag: didn\'t they?' },
    { prompt: 'Everything is prepared for tomorrow\'s orbital rocket launch,', target: 'isn\'t it?', wrong: ['aren\'t they?', 'is it?', 'isn\'t everything?'], context: '', note: '"Everything" takes "it" in the tag: isn\'t it?' },
    { prompt: 'Let\'s collaborate with the department of robotics on autonomous navigation,', target: 'shall we?', wrong: ['will we?', 'won\'t we?', 'can we?'], context: '', note: 'Let\'s -> shall we?' },
    { prompt: 'The lead investigator rarely speaks to the press before peer review is complete,', target: 'does he?', wrong: ['doesn\'t he?', 'is he?', 'rarely he?'], context: '', note: '"Rarely" is negative, requiring a positive tag: does he?' },
    { prompt: 'Pass me the sterile scalpel,', target: 'would you?', wrong: ['don\'t you?', 'shall you?', 'do you?'], context: '', note: 'Polite imperative tag: would you? / will you?' },
    { prompt: 'Neither of the experimental hypotheses proved correct,', target: 'did they?', wrong: ['didn\'t they?', 'did it?', 'proved they?'], context: '', note: '"Neither" is negative and refers to plural entities: did they?' },
    { prompt: 'There are hardly any survivors remaining in the collapsed tunnel,', target: 'are there?', wrong: ['aren\'t there?', 'are they?', 'isn\'t there?'], context: '', note: '"Hardly any" with there-construction: are there?' },
    { prompt: 'Someone has tampered with the laboratory door lock,', target: 'haven\'t they?', wrong: ['hasn\'t he?', 'hasn\'t they?', 'have they?'], context: '', note: '"Someone" takes plural pronoun "they" and plural auxiliary "haven\'t": haven\'t they?' },
    { prompt: 'Nothing could have prevented the volcanic eruption,', target: 'could it?', wrong: ['couldn\'t it?', 'could they?', 'could nothing?'], context: '', note: '"Nothing" is negative: could it?' },
    { prompt: 'Be quiet during the live broadcast recording,', target: 'will you?', wrong: ['don\'t you?', 'are you?', 'shall you?'], context: '', note: 'Imperative: will you?' },
    { prompt: 'He seldom visits his hometown during the busy academic term,', target: 'does he?', wrong: ['doesn\'t he?', 'is he?', 'seldom he?'], context: '', note: '"Seldom" is negative: does he?' },
    { prompt: 'Let\'s publish our groundbreaking findings in the upcoming edition of Nature,', target: 'shall we?', wrong: ['will we?', 'shall us?', 'don\'t we?'], context: '', note: 'Let\'s -> shall we?' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Complex Question Tags & Imperatives');
}

// 4. Embedded Questions Pool
function generateEmbeddedQuestionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Could you please tell me', target: 'where the biomedical research archive is located?', wrong: ['where is the biomedical research archive located?', 'where does the research archive locate?', 'where is located the research archive?'], context: '', note: 'In embedded questions, use STATEMENT word order (Subject + Verb) without inversion: where the archive is located.' },
    { prompt: 'Do you happen to know', target: 'what time the keynote lecture begins?', wrong: ['what time does the keynote lecture begin?', 'what time begins the keynote lecture?', 'what time is the lecture begin?'], context: '', note: 'Statement order: what time the keynote lecture begins (no auxiliary "does").' },
    { prompt: 'I was wondering', target: 'whether the university offers postdoctoral fellowships', wrong: ['whether does the university offer fellowships', 'if offers the university fellowships', 'whether is the university offer fellowships'], context: 'in quantum computing.', note: 'Statement word order: whether the university offers.' },
    { prompt: 'Would you mind explaining', target: 'how this optical spectrometer measures light absorption?', wrong: ['how does this optical spectrometer measure light?', 'how measures this spectrometer light?', 'how is this spectrometer measure light?'], context: '', note: 'how this optical spectrometer measures (no "does").' },
    { prompt: 'I would like to find out', target: 'why the clinical trial was suddenly suspended.', wrong: ['why was the clinical trial suddenly suspended.', 'why did the clinical trial suspend.', 'why suspended the clinical trial.'], context: '', note: 'Statement word order: why the clinical trial was suddenly suspended.' },
    { prompt: 'Can anyone tell us', target: 'who discovered this novel bacterial enzyme?', wrong: ['who did discover this novel bacterial enzyme?', 'who was discovered this novel enzyme by self?', 'whom did discover this enzyme?'], context: '', note: 'Subject question order: who discovered.' },
    { prompt: 'I have no idea', target: 'how much the advanced electron microscope costs.', wrong: ['how much does the electron microscope cost.', 'how much costs the electron microscope.', 'how much is the microscope cost.'], context: '', note: 'how much the microscope costs (no "does").' },
    { prompt: 'Could you clarify', target: 'which statistical model you utilized for this regression?', wrong: ['which statistical model did you utilize for this regression?', 'which model utilized you for regression?', 'which model was you utilized?'], context: '', note: 'which model you utilized (no "did").' },
    { prompt: 'Do you know', target: 'if Dr. Alvarez has arrived at the conference hall yet?', wrong: ['has Dr. Alvarez arrived at the hall yet?', 'if has Dr. Alvarez arrived at hall?', 'did Dr. Alvarez arrive at hall yet embedded?'], context: '', note: 'if Dr. Alvarez has arrived.' },
    { prompt: 'I wonder', target: 'how long the deep-space probe will remain operational.', wrong: ['how long will the deep-space probe remain operational.', 'how long remains the deep-space probe.', 'how long does the probe remain operational. embedded'], context: '', note: 'how long the probe will remain.' },
    { prompt: 'Please let me know', target: 'when you will be available for our thesis review.', wrong: ['when will you be available for our thesis review.', 'when are you available will be.', 'when you are be available will.'], context: '', note: 'when you will be available.' },
    { prompt: 'Could someone inform me', target: 'where I should submit my clinical licensing documents?', wrong: ['where should I submit my clinical documents?', 'where do I submit should documents?', 'where I must to submit documents?'], context: '', note: 'where I should submit.' },
    { prompt: 'We would like to know', target: 'what caused the unexpected power grid failure.', wrong: ['what did cause the unexpected power grid failure.', 'what was caused by self the failure.', 'what caused by the failure.'], context: '', note: 'what caused the failure.' },
    { prompt: 'Do you have any idea', target: 'how many patients were enrolled in the initial study?', wrong: ['how many patients did enroll in the study?', 'how many patients was enrolled?', 'how many patients were they enrolled?'], context: '', note: 'how many patients were enrolled.' },
    { prompt: 'I am curious to learn', target: 'how the team synthesized this carbon nanotube array.', wrong: ['how did the team synthesize this array.', 'how synthesized the team this array.', 'how was the team synthesized this array.'], context: '', note: 'how the team synthesized (no "did").' },
    { prompt: 'Could you explain', target: 'why the second experimental trial yielded different results?', wrong: ['why did the second trial yield different results?', 'why yielded the second trial different results?', 'why was the second trial yield results?'], context: '', note: 'why the second trial yielded.' },
    { prompt: 'I need to check', target: 'whether the server backup completed successfully overnight.', wrong: ['did the server backup complete successfully overnight.', 'whether did the server backup complete.', 'whether completed the server backup.'], context: '', note: 'whether the server backup completed.' },
    { prompt: 'Can you tell me', target: 'where the nearest emergency chemical eye-wash station is?', wrong: ['where is the nearest emergency eye-wash station?', 'where does the nearest eye-wash station locate?', 'where located the nearest eye-wash station?'], context: '', note: 'where the station is (verb at end).' },
    { prompt: 'I was wondering', target: 'if you could review my draft abstract before 5:00 PM.', wrong: ['could you review my draft abstract before 5:00 PM.', 'if could you review my abstract.', 'if did you review my abstract.'], context: '', note: 'if you could review.' },
    { prompt: 'Do you know', target: 'whose signature is required on the grant requisition form?', wrong: ['whose signature is it required on the form?', 'whose signature does require on the form?', 'whose signature requires on the form?'], context: '', note: 'whose signature is required.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Embedded Questions & Polite Inquiries');
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
        explanation: `Incorrect. "${w}" violates the modal/indirect rule. ${item.note}`
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
