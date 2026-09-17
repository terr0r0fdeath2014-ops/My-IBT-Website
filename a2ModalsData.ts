import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A2_MODALS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'can_could_ability_requests',
    title: 'Can & Could (Ability, Permission & Requests)',
    subtitle: 'Present & past abilities, polite requests ("Could you please...?")',
    badge: 'Ability & Politeness',
    description: 'Use "can" for present abilities ("She can speak French") and casual permission. Use "could" for past abilities ("When I was seven, I could swim across the lake") and for making polite, courteous requests ("Could you pass me the dictionary, please?"). Modals are ALWAYS followed by the bare base verb without "to" or "-s".',
    keyRule: 'Subject + can/could + Base Verb (No "to", no "-s"). Polite Request: Could you please + Base Verb? Negative: can\'t / couldn\'t + Base Verb.',
    formula: 'Ability: S + can/could + V(base) | Polite Request: Could you (please) + V(base)?',
    examples: [
      'Could you please explain that scientific concept one more time?',
      'When he lived in Vienna, he could speak German fluently.',
      'Can I borrow your laptop charger for an hour?',
      'She couldn\'t attend the morning lecture because her train was delayed.',
      'Can you help us carry these heavy laboratory supplies?'
    ]
  },
  {
    id: 'should_shouldnt_advice',
    title: 'Should & Shouldn\'t (Advice & Recommendations)',
    subtitle: 'Giving helpful advice, best practices, and opinions on what is right',
    badge: 'Advice & Opinions',
    description: 'Use "should" to give constructive advice, offer friendly recommendations, or express what is a good idea. Use "shouldn\'t" (should not) when something is a bad idea or not recommended. The main verb always stays in its base form without "to".',
    keyRule: 'Subject + should / shouldn\'t + Base Verb. Never use "to" after should (say "You should rest", NOT "You should to rest").',
    formula: 'Affirmative: S + should + V(base) | Negative: S + shouldn\'t + V(base) | Question: Should + S + V(base)?',
    examples: [
      'You look exhausted; you should get at least eight hours of sleep tonight.',
      'Students shouldn\'t wait until the night before the exam to start studying.',
      'Should I submit my application online or in person?',
      'If you have a persistent cough, you should consult a doctor.',
      'You should always backup your research files to cloud storage.'
    ]
  },
  {
    id: 'must_vs_have_to_obligation',
    title: 'Must vs. Have to (Rules & Obligations)',
    subtitle: 'Internal personal conviction vs. external laws & institutional rules',
    badge: 'Obligation & Rules',
    description: 'Use "must" when the speaker feels a strong personal necessity or when formal written rules state requirements. Use "have to" / "has to" when an external authority, institutional law, or schedule requires the action (doctors, jobs, university policies). Both indicate 100% required actions.',
    keyRule: 'Must: S + must + Base Verb (no "to"). Have to: S + have/has to + Base Verb (third person singular: has to).',
    formula: 'Personal/Rule: S + must + V(base) | External Obligation: S + have/has to + V(base)',
    examples: [
      'All airline passengers must fasten their seatbelts during takeoff.',
      'I must remember to send an email to Professor Higgins today.',
      'Doctors have to work long shifts during emergencies.',
      'She has to renew her international passport before traveling to Canada.',
      'Do we have to wear safety goggles inside the chemistry lab?'
    ]
  },
  {
    id: 'must_not_vs_dont_have_to',
    title: 'Must Not vs. Don\'t Have To (Prohibition vs. Choice)',
    subtitle: 'Strict prohibition (forbidden!) vs. optional / lack of obligation',
    badge: 'Forbidden vs Optional',
    description: 'CRUCIAL DISTINCTION: "Must not" (mustn\'t) means PROHIBITED / FORBIDDEN (do not do it under any circumstances!). "Don\'t have to" (or "doesn\'t have to") means NOT NECESSARY / OPTIONAL (you can do it if you want, but it is not required).',
    keyRule: 'Mustn\'t = 0% allowed (Forbidden / Illegal). Don\'t have to = Optional (No requirement / You choose).',
    formula: 'Prohibition: S + mustn\'t + V(base) | Lack of Obligation: S + don\'t/doesn\'t have to + V(base)',
    examples: [
      'You mustn\'t touch the high-voltage electrical wires (Strict Prohibition!).',
      'Tomorrow is a national holiday, so we don\'t have to wake up early (Optional!).',
      'Visitors mustn\'t take flash photographs inside the ancient art museum.',
      'You don\'t have to pay for parking on Sundays; it is completely free.',
      'Students mustn\'t use cellular phones during the examination.'
    ]
  },
  {
    id: 'may_might_possibility',
    title: 'May & Might (Future & Present Possibility)',
    subtitle: 'Expressing uncertainty, hypothetical chances & polite permissions',
    badge: 'Chances & May/Might',
    description: 'Use "may" and "might" to talk about actions or events that are possible now or in the future when you are not 100% certain (about 30-50% chance). "May" is slightly more formal and also used for formal permission ("May I enter?"). Both modals take the bare base verb.',
    keyRule: 'Subject + may/might + Base Verb. Negative: may not / might not + Base Verb. Never add "to" or "-s".',
    formula: 'Possibility: S + may/might + V(base) | Negative: S + may not / might not + V(base)',
    examples: [
      'Take an umbrella with you; it might rain later in the afternoon.',
      'The professor may publish the research results by Friday.',
      'We might not have enough time to visit both historical museums today.',
      'May I ask a question about the assignment requirements?',
      'She might know where the lost laboratory key is stored.'
    ]
  }
];

export function getA2ModalsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'can_could_ability_requests':
      return generateCanCouldQuestions(starNumber, mSeed);
    case 'should_shouldnt_advice':
      return generateShouldQuestions(starNumber, mSeed);
    case 'must_vs_have_to_obligation':
      return generateMustHaveToQuestions(starNumber, mSeed);
    case 'must_not_vs_dont_have_to':
      return generateMustntVsDontHaveToQuestions(starNumber, mSeed);
    case 'may_might_possibility':
      return generateMayMightQuestions(starNumber, mSeed);
    default:
      return generateCanCouldQuestions(starNumber, mSeed);
  }
}

// 1. Can & Could Ability & Requests Pool
function generateCanCouldQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Excuse me,', target: 'could you please help', wrong: ['could you please to help', 'can you please helped', 'could you helped'], context: 'me carry this heavy projector?', note: 'Polite request structure: "could you please + base verb".' },
    { prompt: 'When Dr. Lin was a university student, she', target: 'could speak', wrong: ['can spoke', 'could spoke', 'can to speak'], context: 'fluent Mandarin and Japanese.', note: 'Past ability takes "could + base verb".' },
    { prompt: 'Sophia is very talented; she', target: 'can play', wrong: ['can to play', 'can plays', 'could played'], context: 'both the cello and the pipe organ.', note: 'Present ability takes "can + base verb".' },
    { prompt: 'We', target: "couldn't find", wrong: ["couldn't found", "can't found", "couldn't to find"], context: 'the conference lecture hall yesterday morning.', note: 'Past negative ability takes "couldn\'t + base verb".' },
    { prompt: '', target: 'Could I borrow', wrong: ['Could I to borrow', 'Can I borrowed', 'Could I borrows'], context: 'your scientific calculator for the math test?', note: 'Polite permission request: "Could I borrow...".' },
    { prompt: 'Lucas', target: "can't attend", wrong: ["can't to attend", "cannot attends", "can't attended"], context: 'the team meeting today because he is sick.', note: 'Present inability: "can\'t attend".' },
    { prompt: 'Ten years ago, my grandfather', target: 'could run', wrong: ['can ran', 'could ran', 'could to run'], context: 'ten kilometers every single morning.', note: 'Past ability: "could run".' },
    { prompt: 'Pardon me,', target: 'could you tell', wrong: ['could you to tell', 'can you told', 'could you told'], context: 'me how to get to the central train terminal?', note: 'Polite inquiry: "could you tell".' },
    { prompt: 'Modern smartphones', target: 'can record', wrong: ['can to record', 'can records', 'could recorded'], context: 'ultra-high-definition video with ease.', note: 'General present capability: "can record".' },
    { prompt: 'I was so tired last night that I', target: "couldn't keep", wrong: ["couldn't kept", "can't keep", "couldn't to keep"], context: 'my eyes open during the lecture.', note: 'Past ability: "couldn\'t keep".' },
    { prompt: '', target: 'Can you speak', wrong: ['Can you to speak', 'Can you speaks', 'Could you spoke'], context: 'a little louder so everyone in the back can hear?', note: 'Present request: "Can you speak".' },
    { prompt: 'The young prodigy', target: 'could solve', wrong: ['could solved', 'can solved', 'could to solve'], context: 'complex calculus equations at age twelve.', note: 'Past ability: "could solve".' },
    { prompt: '', target: 'Could we have', wrong: ['Could we to have', 'Can we had', 'Could we having'], context: 'the restaurant bill, please?', note: 'Polite request: "Could we have".' },
    { prompt: 'Marine biologists', target: 'can track', wrong: ['can to track', 'can tracks', 'could tracked'], context: 'whale migrations using satellite telemetry.', note: 'Present ability: "can track".' },
    { prompt: 'Because of the dense fog, the pilots', target: "couldn't see", wrong: ["couldn't saw", "can't saw", "couldn't to see"], context: 'the airport runway.', note: 'Past inability: "couldn\'t see".' },
    { prompt: '', target: 'Could you repeat', wrong: ['Could you to repeat', 'Can you repeated', 'Could you repeats'], context: 'the last research conclusion, Professor?', note: 'Polite request: "Could you repeat".' },
    { prompt: 'She', target: 'can swim', wrong: ['can to swim', 'can swims', 'could swam'], context: 'two miles without taking a break.', note: 'Present ability: "can swim".' },
    { prompt: 'Before the renovation, we', target: "couldn't host", wrong: ["couldn't hosted", "can't hosted", "couldn't to host"], context: 'large academic seminars.', note: 'Past ability: "couldn\'t host".' },
    { prompt: '', target: 'Could you open', wrong: ['Could you to open', 'Can you opened', 'Could you opens'], context: 'the window to let some fresh air in?', note: 'Polite request: "Could you open".' },
    { prompt: 'Autonomous rovers', target: 'can navigate', wrong: ['can to navigate', 'can navigates', 'could navigated'], context: 'rough Martian terrain safely.', note: 'Present capability: "can navigate".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Can & Could (Ability & Requests)');
}

// 2. Should & Shouldn't Advice Pool
function generateShouldQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'You look very tired; you', target: 'should get', wrong: ['should to get', 'should getting', 'should got'], context: 'some rest before your flight tomorrow.', note: 'Modal "should" is followed by the bare base verb: "should get".' },
    { prompt: 'Students', target: "shouldn't leave", wrong: ["shouldn't to leave", "shouldn't left", "should not leaving"], context: 'their personal belongings unattended in the library.', note: 'Negative advice takes "shouldn\'t + base verb".' },
    { prompt: '', target: 'Should I email', wrong: ['Should I to email', 'Should I emailing', 'Do I should email'], context: 'the professor directly regarding the missing syllabus?', note: 'Question form: "Should I email...".' },
    { prompt: 'If you want to improve your pronunciation, you', target: 'should practice', wrong: ['should to practice', 'should practicing', 'should practiced'], context: 'reading aloud every day.', note: 'Constructive advice: "should practice".' },
    { prompt: 'You', target: "shouldn't drink", wrong: ["shouldn't to drink", "shouldn't drank", "should not drinking"], context: 'caffeinated beverages right before going to bed.', note: 'Recommendation against an action: "shouldn\'t drink".' },
    { prompt: 'Drivers', target: 'should check', wrong: ['should to check', 'should checking', 'should checked'], context: 'their tire pressure before embarking on long road trips.', note: 'Best practice: "should check".' },
    { prompt: 'Where', target: 'should we park', wrong: ['should we to park', 'we should park', 'should we parking'], context: 'our visitor vehicle on the campus grounds?', note: 'Wh- question with should: "Where should we park...".' },
    { prompt: 'You', target: "shouldn't skip", wrong: ["shouldn't to skip", "shouldn't skipped", "should not skipping"], context: 'breakfast when preparing for a four-hour exam.', note: 'Negative advice: "shouldn\'t skip".' },
    { prompt: 'Researchers', target: 'should verify', wrong: ['should to verify', 'should verifying', 'should verified'], context: 'all experimental data before publishing.', note: 'Recommendation: "should verify".' },
    { prompt: 'He has a bad toothache; he', target: 'should make', wrong: ['should to make', 'should making', 'should made'], context: 'an appointment with his dentist today.', note: 'Advice: "should make".' },
    { prompt: 'You', target: "shouldn't share", wrong: ["shouldn't to share", "shouldn't shared", "should not sharing"], context: 'your confidential computer passwords with anyone.', note: 'Security advice: "shouldn\'t share".' },
    { prompt: '', target: 'Should we invite', wrong: ['Should we to invite', 'Do we should invite', 'Should we inviting'], context: 'the guest lecturers to the departmental dinner?', note: 'Question: "Should we invite".' },
    { prompt: 'To protect your eyes, you', target: 'should take', wrong: ['should to take', 'should taking', 'should took'], context: 'regular screen breaks every twenty minutes.', note: 'Health advice: "should take".' },
    { prompt: 'Cyclists', target: 'should wear', wrong: ['should to wear', 'should wearing', 'should wore'], context: 'reflective gear when riding after sunset.', note: 'Safety advice: "should wear".' },
    { prompt: 'You', target: "shouldn't believe", wrong: ["shouldn't to believe", "shouldn't believed", "should not believing"], context: 'every sensational rumor you read on social media.', note: 'Critical advice: "shouldn\'t believe".' },
    { prompt: 'What topic', target: 'should I choose', wrong: ['should I to choose', 'I should choose', 'should I choosing'], context: 'for my term presentation?', note: 'Question: "should I choose".' },
    { prompt: 'International travelers', target: 'should purchase', wrong: ['should to purchase', 'should purchasing', 'should purchased'], context: 'comprehensive medical travel insurance.', note: 'Recommendation: "should purchase".' },
    { prompt: 'You', target: "shouldn't touch", wrong: ["shouldn't to touch", "shouldn't touched", "should not touching"], context: 'chemical reagents without wearing protective latex gloves.', note: 'Safety guidance: "shouldn\'t touch".' },
    { prompt: 'We', target: 'should leave', wrong: ['should to leave', 'should leaving', 'should left'], context: 'for the airport early to avoid morning traffic jams.', note: 'Prudent advice: "should leave".' },
    { prompt: 'Students', target: 'should review', wrong: ['should to review', 'should reviewing', 'should reviewed'], context: 'the lecture slides before coming to the seminar.', note: 'Study advice: "should review".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Should & Shouldn\'t (Advice)');
}

// 3. Must vs. Have to (Obligation) Pool
function generateMustHaveToQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'All airline passengers', target: 'must fasten', wrong: ['must to fasten', 'must fastening', 'must fastened'], context: 'their safety belts during takeoff and landing.', note: 'Formal rule / requirement takes "must + base verb".' },
    { prompt: 'Dr. Evans', target: 'has to work', wrong: ['have to work', 'must to work', 'has to working'], context: 'on-call shifts at the hospital every third weekend.', note: 'External job requirement for singular "he/she" is "has to work".' },
    { prompt: 'I', target: 'must remember', wrong: ['must to remember', 'must remembering', 'have must remember'], context: 'to submit my fellowship application before midnight.', note: 'Strong personal obligation: "must remember".' },
    { prompt: 'Students', target: 'have to present', wrong: ['has to present', 'have to presenting', 'must to present'], context: 'their valid student ID cards to borrow library books.', note: 'Institutional rule for plural subject: "have to present".' },
    { prompt: 'She', target: 'has to wake up', wrong: ['have to wake up', 'has to waking up', 'must to wake up'], context: 'at 5:30 AM every day to catch the express train.', note: 'Singular subject schedule obligation: "has to wake up".' },
    { prompt: 'You', target: 'must show', wrong: ['must to show', 'must showing', 'have must show'], context: 'your boarding pass at the airport security checkpoint.', note: 'Official security rule: "must show".' },
    { prompt: 'We', target: 'have to complete', wrong: ['has to complete', 'have to completing', 'must to complete'], context: 'twenty laboratory hours to pass this science course.', note: 'Curriculum requirement: "have to complete".' },
    { prompt: 'Marcus', target: 'has to wear', wrong: ['have to wear', 'must to wear', 'has to wearing'], context: 'a formal business suit for his corporate interview.', note: 'Singular external requirement: "has to wear".' },
    { prompt: 'I', target: 'must call', wrong: ['must to call', 'must calling', 'have must call'], context: 'my grandmother to wish her a happy birthday.', note: 'Personal duty: "must call".' },
    { prompt: 'Foreign visitors', target: 'have to apply', wrong: ['has to apply', 'have to applying', 'must to apply'], context: 'for an entry visa before arriving at the border.', note: 'Legal requirement: "have to apply".' },
    { prompt: 'The chef', target: 'has to prepare', wrong: ['have to prepare', 'must to prepare', 'has to preparing'], context: 'fresh ingredients before the dinner service begins.', note: 'Professional obligation: "has to prepare".' },
    { prompt: 'Drivers', target: 'must stop', wrong: ['must to stop', 'must stopping', 'have must stop'], context: 'when the traffic signal illuminates red.', note: 'Law requirement: "must stop".' },
    { prompt: 'We', target: 'have to pay', wrong: ['has to pay', 'have to paying', 'must to pay'], context: 'our semester tuition fees by September 1st.', note: 'Institutional deadline: "have to pay".' },
    { prompt: 'Every citizen', target: 'has to renew', wrong: ['have to renew', 'must to renew', 'has to renewing'], context: 'their national identity card every ten years.', note: '"Every citizen" is singular -> "has to renew".' },
    { prompt: 'I', target: 'must apologize', wrong: ['must to apologize', 'must apologizing', 'have must apologize'], context: 'to Oliver for being late to our meeting.', note: 'Personal conviction: "must apologize".' },
    { prompt: 'Laboratory assistants', target: 'have to clean', wrong: ['has to clean', 'have to cleaning', 'must to clean'], context: 'all glassware before leaving for the day.', note: 'Plural requirement: "have to clean".' },
    { prompt: 'She', target: 'has to take', wrong: ['have to take', 'must to take', 'has to taking'], context: 'prescribed antibiotic medicine twice daily.', note: 'Medical schedule: "has to take".' },
    { prompt: 'You', target: 'must sign', wrong: ['must to sign', 'must signing', 'have must sign'], context: 'the confidentiality agreement before viewing the prototype.', note: 'Official requirement: "must sign".' },
    { prompt: 'All applicants', target: 'have to submit', wrong: ['has to submit', 'have to submitting', 'must to submit'], context: 'certified academic transcripts.', note: 'Application rule: "have to submit".' },
    { prompt: 'I', target: 'must finish', wrong: ['must to finish', 'must finishing', 'have must finish'], context: 'reading this chapter before going to sleep.', note: 'Personal discipline: "must finish".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Must vs. Have to (Obligation)');
}

// 4. Must Not vs. Don't Have To Pool
function generateMustntVsDontHaveToQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'You', target: "mustn't touch", wrong: ["don't have to touch", "mustn't to touch", "not must touch"], context: 'the high-voltage power transformer; it is extremely dangerous!', note: 'Strict prohibition of dangerous act -> "mustn\'t touch".' },
    { prompt: 'Tomorrow is Sunday, so I', target: "don't have to wake up", wrong: ["mustn't wake up", "doesn't have to wake up", "don't have wake up"], context: 'early in the morning.', note: 'Optional / no obligation -> "don\'t have to wake up".' },
    { prompt: 'Museum visitors', target: "mustn't use", wrong: ["don't have to use", "mustn't to use", "not must use"], context: 'flash photography near the ancient paintings.', note: 'Forbidden rule -> "mustn\'t use".' },
    { prompt: 'The museum admission is free today, so you', target: "don't have to pay", wrong: ["mustn't pay", "doesn't have to pay", "don't have to paying"], context: 'an entry ticket fee.', note: 'Optional / free -> "don\'t have to pay".' },
    { prompt: 'Students', target: "mustn't open", wrong: ["don't have to open", "mustn't to open", "not must open"], context: 'their examination booklets before the invigilator gives the signal.', note: 'Strict exam prohibition -> "mustn\'t open".' },
    { prompt: 'She has already finished her project, so she', target: "doesn't have to work", wrong: ["mustn't work", "don't have to work", "doesn't has to work"], context: 'over the weekend.', note: 'Singular lack of obligation -> "doesn\'t have to work".' },
    { prompt: 'You', target: "mustn't park", wrong: ["don't have to park", "mustn't to park", "not must park"], context: 'in front of the emergency ambulance entrance.', note: 'Strict legal prohibition -> "mustn\'t park".' },
    { prompt: 'We bought plenty of groceries yesterday, so we', target: "don't have to go", wrong: ["mustn't go", "doesn't have to go", "don't have to going"], context: 'to the supermarket tonight.', note: 'Lack of need -> "don\'t have to go".' },
    { prompt: 'Passengers', target: "mustn't smoke", wrong: ["don't have to smoke", "mustn't to smoke", "not must smoke"], context: 'anywhere aboard commercial airline flights.', note: 'Strict federal ban -> "mustn\'t smoke".' },
    { prompt: 'You', target: "don't have to wear", wrong: ["mustn't wear", "doesn't have to wear", "don't have wear"], context: 'a formal necktie to the department picnic; casual clothes are fine.', note: 'Casual choice -> "don\'t have to wear".' },
    { prompt: 'You', target: "mustn't disclose", wrong: ["don't have to disclose", "mustn't to disclose", "not must disclose"], context: 'confidential client data to unauthorized individuals.', note: 'Legal prohibition -> "mustn\'t disclose".' },
    { prompt: 'The digital lecture notes are provided online, so you', target: "don't have to photocopy", wrong: ["mustn't photocopy", "doesn't have to photocopy", "don't have to photocopying"], context: 'the textbook chapters.', note: 'Optional convenience -> "don\'t have to photocopy".' },
    { prompt: 'Motorcyclists', target: "mustn't ride", wrong: ["don't have to ride", "mustn't to ride", "not must ride"], context: 'without an approved safety helmet.', note: 'Illegal / banned -> "mustn\'t ride".' },
    { prompt: 'Lucas', target: "doesn't have to attend", wrong: ["mustn't attend", "don't have to attend", "doesn't has to attend"], context: 'the orientation session because he is a returning student.', note: 'Exemption from requirement -> "doesn\'t have to attend".' },
    { prompt: 'Visitors', target: "mustn't feed", wrong: ["don't have to feed", "mustn't to feed", "not must feed"], context: 'the animals in the zoological reserve.', note: 'Strict zoo rule -> "mustn\'t feed".' },
    { prompt: 'You', target: "don't have to finish", wrong: ["mustn't finish", "doesn't have to finish", "don't have finishing"], context: 'all the food on your plate if you are already full.', note: 'Personal choice -> "don\'t have to finish".' },
    { prompt: 'Drivers', target: "mustn't text", wrong: ["don't have to text", "mustn't to text", "not must text"], context: 'while operating a motor vehicle on the highway.', note: 'Dangerous illegal act -> "mustn\'t text".' },
    { prompt: 'The weather is warm today, so we', target: "don't have to turn on", wrong: ["mustn't turn on", "doesn't have to turn on", "don't have to turning on"], context: 'the heating unit.', note: 'No necessity -> "don\'t have to turn on".' },
    { prompt: 'Swimmers', target: "mustn't dive", wrong: ["don't have to dive", "mustn't to dive", "not must dive"], context: 'into the shallow end of the swimming pool.', note: 'Safety prohibition -> "mustn\'t dive".' },
    { prompt: 'You', target: "don't have to bring", wrong: ["mustn't bring", "doesn't have to bring", "don't have to bringing"], context: 'your own stationery; the workshop provides pens and notebooks.', note: 'Optional -> "don\'t have to bring".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Must Not vs. Don\'t Have To');
}

// 5. May & Might Possibility Pool
function generateMayMightQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Take an umbrella with you; it', target: 'might rain', wrong: ['might to rain', 'might rains', 'may rained'], context: 'later in the afternoon.', note: 'Possibility modal: "might + base verb".' },
    { prompt: 'The professor', target: 'may publish', wrong: ['may to publish', 'may publishes', 'might published'], context: 'the research findings in a prestigious journal this winter.', note: 'Formal possibility: "may + base verb".' },
    { prompt: 'We', target: 'might not have', wrong: ['might not to have', 'may not has', 'might not having'], context: 'enough laboratory supplies to complete the second trial today.', note: 'Negative possibility: "might not have".' },
    { prompt: 'Excuse me,', target: 'may I ask', wrong: ['may I to ask', 'might I asked', 'do I may ask'], context: 'a question regarding the admission criteria?', note: 'Polite formal permission: "May I ask...".' },
    { prompt: 'Sophia', target: 'might know', wrong: ['might to know', 'might knows', 'may knew'], context: 'the passcode for the faculty conference room.', note: 'Uncertain possibility: "might know".' },
    { prompt: 'The stormy weather', target: 'may delay', wrong: ['may to delay', 'may delays', 'might delayed'], context: 'the departure of international flights tonight.', note: 'Possibility: "may delay".' },
    { prompt: 'Don\'t throw away that document; you', target: 'might need', wrong: ['might to need', 'might needs', 'may needed'], context: 'it for the tax audit next month.', note: 'Future possibility: "might need".' },
    { prompt: 'The researchers', target: 'may not agree', wrong: ['may not to agree', 'might not agrees', 'may not agreed'], context: 'with the controversial conclusions of the study.', note: 'Negative possibility: "may not agree".' },
    { prompt: 'If we leave now, we', target: 'might catch', wrong: ['might to catch', 'might catches', 'may caught'], context: 'the earlier express train.', note: 'Hypothetical chance: "might catch".' },
    { prompt: 'The technician', target: 'may be', wrong: ['may to be', 'may is', 'might been'], context: 'in the server room on the third floor right now.', note: 'Present possibility with be: "may be".' },
    { prompt: 'Be careful! That fragile glass vase', target: 'might break', wrong: ['might to break', 'might breaks', 'may broke'], context: 'if you don\'t pack it securely.', note: 'Chanced consequence: "might break".' },
    { prompt: 'The committee', target: 'may announce', wrong: ['may to announce', 'may announces', 'might announced'], context: 'the scholarship recipient by tomorrow afternoon.', note: 'Possibility: "may announce".' },
    { prompt: 'He', target: 'might not arrive', wrong: ['might not to arrive', 'may not arrives', 'might not arrived'], context: 'in time for the opening remarks due to traffic.', note: 'Negative possibility: "might not arrive".' },
    { prompt: '', target: 'May I sit', wrong: ['May I to sit', 'Might I sat', 'Do I may sit'], context: 'here? Is this seat reserved for anyone?', note: 'Formal polite permission: "May I sit".' },
    { prompt: 'Our university', target: 'might offer', wrong: ['might to offer', 'might offers', 'may offered'], context: 'an online master\'s degree program next year.', note: 'Possibility: "might offer".' },
    { prompt: 'The old computer battery', target: 'may need', wrong: ['may to need', 'may needs', 'might needed'], context: 'to be replaced soon.', note: 'Possibility: "may need".' },
    { prompt: 'They', target: 'might go', wrong: ['might to go', 'might goes', 'may went'], context: 'to the mountains for their semester break.', note: 'Tentative plan: "might go".' },
    { prompt: 'The chemical solution', target: 'may change', wrong: ['may to change', 'may changes', 'might changed'], context: 'color when exposed to direct sunlight.', note: 'Scientific possibility: "may change".' },
    { prompt: 'We', target: 'might not see', wrong: ['might not to see', 'may not sees', 'might not saw'], context: 'each other again before the summer holidays begin.', note: 'Possibility: "might not see".' },
    { prompt: 'Dr. Henderson', target: 'may have', wrong: ['may to have', 'may has', 'might had'], context: 'an extra copy of the medical textbook.', note: 'Possibility: "may have".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'May & Might (Possibility)');
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
        explanation: `Incorrect. "${w}" violates the modal rule. ${item.note}`
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
      question: `Question ${i + 1} of 20 (Star #${star}) • ${topicTitle}`,
      sentenceWithBlank: sentenceWithBlank,
      options: finalOptions,
      hint: `Hint: Remember the rule for ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
