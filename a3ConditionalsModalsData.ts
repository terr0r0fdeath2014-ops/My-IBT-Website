import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A3_CONDITIONALS_MODALS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'second_conditional',
    title: 'Second Conditional (If + Past Simple, would + Base)',
    subtitle: 'Hypothetical, imaginary, or contrary-to-fact present & future situations',
    badge: 'If + Past, would + V',
    description: 'Use the Second Conditional to talk about hypothetical, imaginary, or impossible situations in the present or future, and their imagined results. Note: In formal English, "were" is preferred over "was" for all subjects ("If I were you", "If she were available").',
    keyRule: 'If + Subject + Past Simple (or "were"), Subject + would / could / might + base verb.',
    formula: 'If + S + V2 (Past Simple), S + would + base verb | (or) S + would + base verb + if + S + V2.',
    examples: [
      'If I had more financial resources, I would invest in sustainable clean technology.',
      'If she were the director of the research institute, she would prioritize cancer therapies.',
      'What would you do if you won the prestigious international scholarship?',
      'If they lived closer to the university campus, they could commute by bicycle.',
      'We might finish the project earlier if we had two additional programmers.'
    ]
  },
  {
    id: 'modals_obligation_necessity',
    title: 'Modals of Obligation & Necessity (Must, Have to, Need to, Should, Ought to)',
    subtitle: 'External rules, personal obligations, necessity & strong recommendations',
    badge: 'Obligation & Rules',
    description: 'Distinguish between different levels of obligation: "Must" (personal obligation / strong internal necessity), "Have to" (external rule, law, regulation), "Need to" (practical requirement), and "Should / Ought to" (moral duty / strong advice). Note negative contrast: "Mustn\'t" = forbidden; "Don\'t have to" = no obligation.',
    keyRule: 'Must = internal/speaker obligation. Have to = external rules/laws. Should/Ought to = advice/duty. Don\'t have to = optional.',
    formula: 'S + must / have to / need to / should / ought to + base verb.',
    examples: [
      'All laboratory personnel must wear protective eyewear at all times.',
      'In many countries, motorists have to carry a high-visibility vest in their vehicle.',
      'You ought to consult a medical specialist before undertaking such intensive training.',
      'We don\'t have to submit the manuscript today; the journal deadline was extended.',
      'Visitors mustn\'t enter the cleanroom without sterile shoe covers.'
    ]
  },
  {
    id: 'modals_deduction_probability',
    title: 'Modals of Deduction & Probability (Must be, Can\'t be, Might/Could be)',
    subtitle: 'Drawing logical conclusions and assessing likelihood in the present',
    badge: 'Deduction & Logic',
    description: 'Use modals of deduction to state how sure you are about something based on current evidence: "Must be" (almost 100% sure it is true), "Can\'t be" (almost 100% sure it is impossible/false), "Might / May / Could be" (50% possibility / uncertain).',
    keyRule: 'Must be = logical certainty (positive). Can\'t be = logical certainty (negative / impossible). Might/May/Could = possibility. (Never use "can be" for logical deduction).',
    formula: 'S + must / can\'t / might / could / may + base verb (or "be + adjective/noun/V-ing").',
    examples: [
      'The lights in the lab are on; Dr. Vance must still be working on his experiment.',
      'That answer can\'t be correct; the calculation contradicts fundamental thermodynamics.',
      'Take an umbrella with you; the sky is darkening and it might rain this afternoon.',
      'He speaks fluent Danish, Swedish, and Norwegian; he must be Scandinavian.',
      'She hasn\'t answered our email; she could be in an international conference right now.'
    ]
  },
  {
    id: 'ability_past_future',
    title: 'Expressing Ability (Could, Was/Were able to, Managed to, Will be able to)',
    subtitle: 'General past ability vs. specific achievement & future capability',
    badge: 'Ability & Achievement',
    description: '"Could" describes general ability in the past ("I could swim when I was six"). For a specific, difficult achievement on a single past occasion, use "was/were able to" or "managed to" (NOT "could"). For future ability, use "will be able to".',
    keyRule: 'General past ability = could. Specific past achievement on one occasion = was/were able to / managed to. Future ability = will be able to.',
    formula: 'Past general: S + could + base | Past specific: S + was/were able to + base | Future: S + will be able to + base.',
    examples: [
      'Despite the heavy snowfall, the rescue team was able to reach the stranded hikers.',
      'My grandfather could speak five languages fluently in his youth (general ability).',
      'After three hours of debugging, she managed to fix the critical server vulnerability.',
      'Once the quantum computer is fully calibrated, we will be able to run molecular simulations.',
      'Were you able to obtain an interview with the keynote speaker yesterday?'
    ]
  },
  {
    id: 'wishes_regrets_present',
    title: 'Wishes & Hypothetical Desires in Present (Wish / If only + Past Simple)',
    subtitle: 'Expressing desires for things to be different from present reality',
    badge: 'Wish + Past Simple',
    description: 'Use "I wish" or "If only" followed by the Past Simple to express a desire for a current situation to be different. Use "wish + would" to complain about annoying habits or express desire for someone else to change their behavior. Note: "were" is used for all subjects in formal contexts.',
    keyRule: 'Wish + Past Simple = desire for a different present state ("I wish I knew the answer"). Wish + would + base = desire for someone/something to change annoying behavior ("I wish it would stop raining").',
    formula: 'S + wish(es) + (that) + S + Past Simple / were | S + wish(es) + S + would + base.',
    examples: [
      'I wish I had more time to dedicate to reading classical literature.',
      'If only we were able to travel to Mars within a few days!',
      'Dr. Reynolds wishes the university administration would allocate more research funding.',
      'I wish I spoke German so I could read the original physics journals directly.',
      'If only it weren\'t so noisy in this open-plan office space!'
    ]
  }
];

export function getA3ConditionalsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'second_conditional':
      return generateSecondConditionalQuestions(starNumber, mSeed);
    case 'modals_obligation_necessity':
      return generateObligationQuestions(starNumber, mSeed);
    case 'modals_deduction_probability':
      return generateDeductionQuestions(starNumber, mSeed);
    case 'ability_past_future':
      return generateAbilityQuestions(starNumber, mSeed);
    case 'wishes_regrets_present':
      return generateWishesQuestions(starNumber, mSeed);
    default:
      return generateSecondConditionalQuestions(starNumber, mSeed);
  }
}

export const getA3ConditionalsModalsStarQuestions = getA3ConditionalsStarQuestions;

// 1. Second Conditional Pool
function generateSecondConditionalQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'If I', target: 'were you', wrong: ['am you', 'was be you', 'would be you'], context: ', I would consult an intellectual property lawyer before publishing the code.', note: 'Subjunctive "were" is standard in conditional advice "If I were you".' },
    { prompt: 'What', target: 'would you do', wrong: ['will you do', 'did you do', 'would you did'], context: 'if you suddenly won a million-euro research grant?', note: 'Second conditional question: would + subject + base verb.' },
    { prompt: 'If the laboratory', target: 'had more advanced microscopes', wrong: ['has more advanced microscopes', 'would have more advanced microscopes', 'had had more advanced microscopes'], context: ', we could detect the virus particles much faster.', note: 'If-clause in Second Conditional takes Past Simple: had.' },
    { prompt: 'She', target: 'would accept the professorship', wrong: ['will accept the professorship', 'accepted the professorship', 'would accepted the professorship'], context: 'if the university offered her adequate lab space.', note: 'Main clause takes would + base verb.' },
    { prompt: 'If they', target: 'lived closer to the campus', wrong: ['live closer to the campus', 'would live closer to the campus', 'are living closer to the campus'], context: ', they would walk to their morning lectures.', note: 'If-clause takes Past Simple: lived.' },
    { prompt: 'If renewable energy', target: 'were more accessible', wrong: ['is more accessible', 'would be more accessible', 'will be more accessible'], context: 'globally, carbon emissions would plummet rapidly.', note: 'Hypothetical state takes were: If renewable energy were.' },
    { prompt: 'I', target: 'would buy an electric vehicle', wrong: ['will buy an electric vehicle', 'bought an electric vehicle', 'would bought an electric vehicle'], context: 'if rapid charging stations were more widespread in our city.', note: 'Result clause: would buy.' },
    { prompt: 'If he', target: 'practiced consistently', wrong: ['practices consistently', 'would practice consistently', 'is practicing consistently'], context: 'every afternoon, he would perform the concerto flawlessly.', note: 'If-clause takes Past Simple: practiced.' },
    { prompt: 'We', target: 'could finish the prototype', wrong: ['can finish the prototype', 'could finished the prototype', 'will can finish the prototype'], context: 'by Friday if we had two additional mechanical engineers.', note: 'Could + base verb expresses hypothetical ability in result clause.' },
    { prompt: 'If there', target: 'were no gravitational force', wrong: ['is no gravitational force', 'was been no force', 'would be no force'], context: ', objects would simply float away into space.', note: 'Hypothetical condition: were no.' },
    { prompt: 'She', target: 'would travel around the globe', wrong: ['will travel around the globe', 'traveled around the globe', 'would traveled around the globe'], context: 'if she didn\'t have so many family commitments.', note: 'Result clause: would travel.' },
    { prompt: 'If we', target: 'didn\'t have to work', wrong: ['don\'t have to work', 'won\'t have to work', 'wouldn\'t have to work'], context: 'tomorrow, we would hike to the alpine lake.', note: 'Negative if-clause: didn\'t have to.' },
    { prompt: 'How', target: 'would society change', wrong: ['will society change', 'did society change', 'does society change'], context: 'if scientists discovered intelligent extraterrestrial life?', note: 'Second conditional question: would society change.' },
    { prompt: 'If I', target: 'knew the secret formula', wrong: ['know the secret formula', 'would know the secret formula', 'had know the secret formula'], context: ', I would gladly explain the chemical reaction to you.', note: 'If-clause: knew.' },
    { prompt: 'The company', target: 'would expand into Asian markets', wrong: ['will expand into Asian markets', 'expanded into Asian markets', 'would expanded into Asian markets'], context: 'if it secured sufficient venture capital.', note: 'Main clause: would expand.' },
    { prompt: 'If you', target: 'could meet any historical figure', wrong: ['can meet any historical figure', 'could met any historical figure', 'will can meet any figure'], context: ', who would you choose to converse with?', note: 'Hypothetical ability in if-clause: could meet.' },
    { prompt: 'I', target: 'wouldn\'t complain', wrong: ['won\'t complain', 'didn\'t complain', 'wouldn\'t complained'], context: 'about the workload if the salary were fair and competitive.', note: 'Negative main clause: wouldn\'t complain.' },
    { prompt: 'If the climate', target: 'became even warmer', wrong: ['becomes even warmer', 'will become even warmer', 'would become even warmer'], context: ', sea levels would rise significantly higher.', note: 'If-clause: became.' },
    { prompt: 'He', target: 'might pass the bar exam', wrong: ['may pass the bar exam', 'might passed the bar exam', 'will might pass the exam'], context: 'if he studied with greater concentration.', note: 'Hypothetical possibility: might pass.' },
    { prompt: 'If she', target: 'were not so busy', wrong: ['is not so busy', 'would not be so busy', 'will not be so busy'], context: 'with clinical trials, she would join our hiking club.', note: 'Hypothetical negation: were not so busy.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Second Conditional');
}

// 2. Modals of Obligation & Necessity Pool
function generateObligationQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'All laboratory workers', target: 'must wear safety goggles', wrong: ['must to wear safety goggles', 'have wear safety goggles', 'must wearing safety goggles'], context: 'whenever handling hazardous chemical reagents.', note: 'Strong rule/obligation: must + base verb.' },
    { prompt: 'In the European Union, drivers', target: 'have to carry', wrong: ['must to carry', 'have carry', 'are having to carry'], context: 'a valid driving licence and vehicle registration documents.', note: 'External legal requirement: have to carry.' },
    { prompt: 'You', target: 'don\'t have to pay', wrong: ['mustn\'t pay', 'haven\'t to pay', 'don\'t must pay'], context: 'for admission to the national museum; entrance is completely free on Sundays.', note: 'Absence of obligation (it is optional/free): don\'t have to pay.' },
    { prompt: 'Medical students', target: 'mustn\'t disclose', wrong: ['don\'t have to disclose', 'must not to disclose', 'haven\'t to disclose'], context: 'confidential patient records without formal written consent.', note: 'Prohibition (forbidden): mustn\'t disclose.' },
    { prompt: 'You look utterly exhausted; you', target: 'should take a break', wrong: ['should to take a break', 'must to take a break', 'ought take a break'], context: 'and get some proper sleep.', note: 'Advice/recommendation: should + base verb.' },
    { prompt: 'According to the university code of conduct, researchers', target: 'ought to cite', wrong: ['ought cite', 'should to cite', 'must to cite'], context: 'all secondary sources accurately.', note: 'Moral/academic duty: ought to cite.' },
    { prompt: 'Tomorrow is an official public holiday, so employees', target: 'don\'t need to report', wrong: ['mustn\'t report', 'aren\'t need to report', 'don\'t have report'], context: 'to the corporate headquarters.', note: 'No necessity: don\'t need to report.' },
    { prompt: 'Passengers', target: 'must fasten their seatbelts', wrong: ['must to fasten their seatbelts', 'have fasten their seatbelts', 'must fastening seatbelts'], context: 'during takeoff and landing procedures.', note: 'Mandatory safety regulation: must fasten.' },
    { prompt: 'Do we', target: 'have to submit the grant proposal', wrong: ['must we submit the grant proposal', 'have submit the proposal', 'need submit the proposal'], context: 'before 5:00 PM today, or is tomorrow acceptable?', note: 'Question form for external obligation: Do we have to submit.' },
    { prompt: 'You', target: 'mustn\'t touch that high-voltage terminal', wrong: ['don\'t have to touch that terminal', 'mustn\'t to touch that terminal', 'haven\'t to touch that terminal'], context: '; it carries a fatal electrical current!', note: 'Strict danger prohibition: mustn\'t touch.' },
    { prompt: 'The doctor advised that he', target: 'should reduce his sodium intake', wrong: ['should to reduce his sodium intake', 'must to reduce his intake', 'ought reduce his intake'], context: 'to lower his blood pressure.', note: 'Medical advice: should reduce.' },
    { prompt: 'We', target: 'had to take a detour', wrong: ['must took a detour', 'have had take a detour', 'must to take a detour'], context: 'yesterday because the main suspension bridge was under repair.', note: 'Past obligation takes "had to" (must has no past form).' },
    { prompt: 'Candidates', target: 'must present two forms of identification', wrong: ['must to present two forms of ID', 'have present two forms of ID', 'must presenting two forms'], context: 'before entering the examination hall.', note: 'Formal institutional requirement: must present.' },
    { prompt: 'You', target: 'don\'t have to finish everything today', wrong: ['mustn\'t finish everything today', 'don\'t must finish everything', 'haven\'t to finish everything'], context: '; we have three more days before the final deadline.', note: 'Lack of necessity: don\'t have to finish.' },
    { prompt: 'Researchers', target: 'need to verify their statistical data', wrong: ['need verify their statistical data', 'are need to verify data', 'need to verifying data'], context: 'before publishing in peer-reviewed journals.', note: 'Practical necessity: need to verify.' },
    { prompt: 'Did you', target: 'have to wait long', wrong: ['must you wait long', 'had to wait long', 'did have to wait long'], context: 'at the consulate to receive your research visa?', note: 'Past question: Did you have to wait.' },
    { prompt: 'Pedestrians', target: 'mustn\'t cross the expressway', wrong: ['don\'t have to cross the expressway', 'mustn\'t to cross the expressway', 'needn\'t to cross the expressway'], context: 'on foot; it is illegal and extremely hazardous.', note: 'Legal prohibition: mustn\'t cross.' },
    { prompt: 'You really', target: 'ought to apologize for your rude comment', wrong: ['ought apologize for your comment', 'should to apologize for your comment', 'must to apologize'], context: 'during the departmental committee meeting.', note: 'Moral obligation: ought to apologize.' },
    { prompt: 'The contract states that the contractor', target: 'must deliver the materials', wrong: ['must to deliver the materials', 'has deliver the materials', 'must delivering materials'], context: 'within thirty business days.', note: 'Contractual obligation: must deliver.' },
    { prompt: 'She', target: 'has to work on Saturdays', wrong: ['must to work on Saturdays', 'is have to work on Saturdays', 'has work on Saturdays'], context: 'because her veterinary clinic provides 24-hour emergency care.', note: 'Third person singular external requirement: has to work.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Modals of Obligation & Necessity');
}

// 3. Modals of Deduction & Probability Pool
function generateDeductionQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Look at the heavy snowdrifts outside; the mountain pass', target: 'must be blocked', wrong: ['can be blocked', 'must to be blocked', 'should be blocked for sure'], context: 'by avalanches.', note: 'Logical certainty based on evidence: must be blocked.' },
    { prompt: 'That answer', target: 'can\'t be correct', wrong: ['mustn\'t be correct', 'can\'t to be correct', 'isn\'t can be correct'], context: '; the sum of two positive numbers cannot equal zero!', note: 'Logical impossibility in deduction: can\'t be (NOT mustn\'t be).' },
    { prompt: 'Dr. Rossi isn\'t answering his office phone; he', target: 'might be giving a lecture', wrong: ['can be giving a lecture', 'might to be giving', 'is might giving'], context: 'in auditorium B right now.', note: 'Possibility: might be giving.' },
    { prompt: 'Her lab coat is still hanging on the door, so she', target: 'must still be in the building', wrong: ['can still be in the building', 'must to be in the building', 'should still be in building'], context: '.', note: 'Strong positive logical deduction: must still be.' },
    { prompt: 'He has won the prestigious Fields Medal twice; he', target: 'must be an extraordinary mathematician', wrong: ['can be an extraordinary mathematician', 'must to be an mathematician', 'may to be an mathematician'], context: '.', note: 'Logical conclusion: must be.' },
    { prompt: 'You haven\'t eaten anything since early dawn; you', target: 'must be starving', wrong: ['can be starving', 'must to be starving', 'are must be starving'], context: '!', note: 'Strong logical deduction: must be starving.' },
    { prompt: 'The flight from Tokyo only landed ten minutes ago; the passengers', target: 'can\'t be through customs yet', wrong: ['mustn\'t be through customs yet', 'can\'t to be through customs', 'aren\'t can be through customs'], context: '.', note: 'Logical impossibility: can\'t be.' },
    { prompt: 'Take a waterproof jacket on your expedition; the weather in the highlands', target: 'could change rapidly', wrong: ['can to change rapidly', 'could to change rapidly', 'is could change rapidly'], context: '.', note: 'Possibility in future/present: could change.' },
    { prompt: 'She looks very young, but she', target: 'might be older than she looks', wrong: ['can be older than she looks', 'might to be older', 'is might older'], context: '; she already holds two doctorate degrees.', note: 'Uncertain possibility: might be.' },
    { prompt: 'The office door is locked and the dark blinds are drawn; they', target: 'must have gone home', wrong: ['can have gone home', 'must to have gone home', 'should have went home'], context: 'for the weekend.', note: 'Logical deduction about past/present state: must have gone.' },
    { prompt: 'That fossil specimen', target: 'can\'t be genuine', wrong: ['mustn\'t be genuine', 'can\'t to be genuine', 'not can be genuine'], context: '; synthetic resin was clearly detected in the chemical scan.', note: 'Logical negative certainty: can\'t be.' },
    { prompt: 'If the theoretical model is accurate, there', target: 'may be undiscovered particles', wrong: ['can to be undiscovered particles', 'may to be undiscovered particles', 'is may be undiscovered'], context: 'at higher energy levels.', note: 'Scientific possibility: may be.' },
    { prompt: 'He owns five sports cars and a private island; he', target: 'must be extremely wealthy', wrong: ['can be extremely wealthy', 'must to be extremely wealthy', 'has to be wealthy strictly'], context: '.', note: 'Obvious deduction: must be.' },
    { prompt: 'She doesn\'t answer my text messages; her phone', target: 'might have run out of battery', wrong: ['can have run out of battery', 'might to have run out', 'is might run out'], context: '.', note: 'Possibility: might have run out.' },
    { prompt: 'You just had a three-course lunch thirty minutes ago; you', target: 'can\'t be hungry already', wrong: ['mustn\'t be hungry already', 'can\'t to be hungry', 'aren\'t can be hungry'], context: '!', note: 'Logical impossibility: can\'t be hungry.' },
    { prompt: 'The telescope captured an unusual infrared flare; it', target: 'could be a distant supernova', wrong: ['can to be a distant supernova', 'could to be a supernova', 'is could be a supernova'], context: '.', note: 'Astronomical possibility: could be.' },
    { prompt: 'He has lived in Madrid for twenty-five years; he', target: 'must speak fluent Spanish', wrong: ['can speak fluent Spanish deduction', 'must to speak fluent Spanish', 'is must speak fluent'], context: '.', note: 'Strong logical probability: must speak.' },
    { prompt: 'That bird', target: 'can\'t be a common sparrow', wrong: ['mustn\'t be a common sparrow', 'can\'t to be a sparrow', 'not can be a sparrow'], context: '; its plumage is vivid iridescent blue and yellow!', note: 'Negative deduction: can\'t be.' },
    { prompt: 'The laboratory results', target: 'might take several days', wrong: ['can take several days possibility', 'might to take several days', 'is might take days'], context: 'to be fully processed by the computer cluster.', note: 'Possibility: might take.' },
    { prompt: 'There are no footstep tracks in the fresh snow; nobody', target: 'can have entered the cabin', wrong: ['mustn\'t have entered the cabin', 'can\'t to have entered', 'not can have entered'], context: 'since last night.', note: 'Negative certainty: can have entered / can\'t have entered.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Modals of Deduction & Probability');
}

// 4. Ability in Past and Future Pool
function generateAbilityQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Although the thick smoke filled the corridor, the firefighters', target: 'were able to rescue', wrong: ['could rescue', 'were able rescue', 'could to rescue'], context: 'all eight trapped occupants.', note: 'For a specific successful achievement on one past occasion, use "were able to" (NOT "could").' },
    { prompt: 'When Albert was only six years old, he', target: 'could play', wrong: ['was able play', 'could to play', 'managed play'], context: 'complex Mozart sonatas by ear.', note: 'General past ability over time takes "could".' },
    { prompt: 'Once we install the high-speed fiber optic cable, the company', target: 'will be able to transfer', wrong: ['will can transfer', 'will able to transfer', 'can to transfer'], context: 'terabytes of research data within seconds.', note: 'Future ability: will be able to + base verb.' },
    { prompt: 'Despite severe headwinds and engine trouble, the pilot', target: 'managed to land', wrong: ['could land', 'managed landing', 'was managed to land'], context: 'the aircraft safely on the runway.', note: 'Specific difficult achievement: managed to land.' },
    { prompt: 'I searched through fifteen archives and finally', target: 'was able to find', wrong: ['could find', 'was able find', 'could to find'], context: 'the original 17th-century patent document.', note: 'Specific one-time past accomplishment: was able to find.' },
    { prompt: 'In the ancient era, navigators', target: 'could determine', wrong: ['were able determine', 'could to determine', 'managed determine'], context: 'their maritime position using celestial star patterns.', note: 'General past ability: could determine.' },
    { prompt: 'Next year, with our new clinical accreditation, we', target: 'will be able to conduct', wrong: ['will can conduct', 'will able conduct', 'can to conduct'], context: 'human trials on the cancer vaccine.', note: 'Future ability: will be able to conduct.' },
    { prompt: 'The math problem was extraordinarily complex, but Liam', target: 'managed to solve', wrong: ['could solve', 'managed solving', 'was managed solve'], context: 'it before the exam bell rang.', note: 'Specific past achievement: managed to solve.' },
    { prompt: '', target: 'Were you able to contact', wrong: ['Could you contact', 'Were you able contact', 'Did you could contact'], context: 'the lead investigator before she boarded her transatlantic flight?', note: 'Specific past event question: Were you able to contact.' },
    { prompt: 'She was so exhausted after the marathon that she', target: 'could hardly walk', wrong: ['was hardly able walk', 'could to hardly walk', 'managed hardly walk'], context: 'to the awards podium.', note: 'General negative ability with hardly: could hardly walk.' },
    { prompt: 'With AI translation software improving rapidly, travelers', target: 'will be able to communicate', wrong: ['will can communicate', 'will able communicate', 'can to communicate'], context: 'seamlessly anywhere in the world.', note: 'Future ability: will be able to communicate.' },
    { prompt: 'The submarine experienced hull damage, but the crew', target: 'was able to resurface', wrong: ['could resurface', 'was able resurface', 'managed resurfacing'], context: 'before atmospheric oxygen ran out.', note: 'Specific emergency achievement: was able to resurface.' },
    { prompt: 'When my grandfather was a young sailor, he', target: 'could swim', wrong: ['was able swim', 'could to swim', 'managed swim'], context: 'across the entire bay without stopping.', note: 'General past ability: could swim.' },
    { prompt: 'By using advanced carbon filtration, the plant', target: 'managed to reduce', wrong: ['could reduce', 'managed reducing', 'was managed reduce'], context: 'its toxic emissions by seventy percent.', note: 'Specific achievement: managed to reduce.' },
    { prompt: 'After you complete the residency program, you', target: 'will be able to practice', wrong: ['will can practice', 'will able practice', 'can to practice'], context: 'medicine independently.', note: 'Future ability: will be able to practice.' },
    { prompt: 'Even though the power grid failed completely, the hospital backup generators', target: 'were able to maintain', wrong: ['could maintain', 'were able maintain', 'could to maintain'], context: 'life support systems.', note: 'Specific achievement: were able to maintain.' },
    { prompt: 'In the medieval period, only a tiny fraction of the population', target: 'could read and write', wrong: ['was able read and write', 'could to read and write', 'managed read and write'], context: '.', note: 'General past ability: could read and write.' },
    { prompt: 'Despite the storm destroying the bridges, relief trucks', target: 'managed to deliver', wrong: ['could deliver', 'managed delivering', 'were managed deliver'], context: 'emergency food rations.', note: 'Specific accomplishment: managed to deliver.' },
    { prompt: 'With the new satellite array deployed, meteorologists', target: 'will be able to predict', wrong: ['will can predict', 'will able predict', 'can to predict'], context: 'super-typhoons days in advance.', note: 'Future ability: will be able to predict.' },
    { prompt: 'He twisted his ankle badly, but he', target: 'was able to limp', wrong: ['could limp', 'was able limp', 'could to limp'], context: 'back to the mountaineering base camp.', note: 'Specific one-off success: was able to limp.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Expressing Ability in Past & Future');
}

// 5. Wishes & Hypothetical Desires in Present Pool
function generateWishesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'I have so many administrative tasks today; I wish I', target: 'had more time', wrong: ['have more time', 'would have more time', 'had had more time'], context: 'to focus purely on research.', note: 'Wish about present situation takes Past Simple: had.' },
    { prompt: 'The weather in the mountains is terrible; if only it', target: 'were warmer', wrong: ['is warmer', 'would be warmer', 'will be warmer'], context: 'and sunnier today!', note: 'If only + subjunctive "were" for present hypothetical desire.' },
    { prompt: 'The students are making so much noise in the corridor; I wish they', target: 'would stop shouting', wrong: ['stopped shouting', 'will stop shouting', 'would stopped shouting'], context: 'during the final exam.', note: 'Wish + would + base expresses annoyance and desire for someone to change behavior.' },
    { prompt: 'She loves Japanese literature; she wishes she', target: 'spoke fluent Japanese', wrong: ['speaks fluent Japanese', 'would speak fluent Japanese', 'has spoken fluent Japanese'], context: 'so she could read the untranslated classics.', note: 'Wish about present state takes Past Simple: spoke.' },
    { prompt: 'I am terrified of deep water; if only I', target: 'knew how to swim', wrong: ['know how to swim', 'would know how to swim', 'have known how to swim'], context: 'confidently.', note: 'If only + Past Simple: knew.' },
    { prompt: 'Our laboratory budget is severely restricted; the dean wishes the ministry', target: 'would allocate additional funds', wrong: ['allocates additional funds', 'allocated additional funds strictly', 'will allocate additional funds'], context: 'for the new electron microscope.', note: 'Desire for an authority to take action: would allocate.' },
    { prompt: 'I have to attend five virtual meetings today; I wish I', target: 'didn\'t have to sit', wrong: ['don\'t have to sit', 'wouldn\'t have to sit', 'hadn\'t have to sit'], context: 'in front of a monitor all day.', note: 'Negative present wish: didn\'t have to.' },
    { prompt: 'The city center is so polluted and congested; if only there', target: 'were more pedestrian zones', wrong: ['are more pedestrian zones', 'would be more pedestrian zones', 'will be more pedestrian zones'], context: 'and bicycle paths.', note: 'If only + were: were more pedestrian zones.' },
    { prompt: 'My neighbor plays loud electronic music at midnight; I wish he', target: 'would turn the volume down', wrong: ['turned the volume down', 'turns the volume down', 'will turn the volume down'], context: '.', note: 'Wish + would + base verb to complain about annoying behavior.' },
    { prompt: 'He is stuck in heavy morning traffic; he wishes he', target: 'lived closer to his workplace', wrong: ['lives closer to his workplace', 'would live closer to his workplace', 'has lived closer to his workplace'], context: '.', note: 'Present wish takes Past Simple: lived.' },
    { prompt: 'I find quantum mechanics very perplexing; I wish I', target: 'understood the underlying equations', wrong: ['understand the underlying equations', 'would understand the equations', 'have understood the equations'], context: 'better.', note: 'Present wish: understood.' },
    { prompt: 'The laboratory technician wishes the old centrifuge', target: 'would stop vibrating', wrong: ['stopped vibrating', 'stops vibrating', 'will stop vibrating'], context: 'so violently during high-speed runs.', note: 'Wish about a machine\'s annoying behavior: would stop.' },
    { prompt: 'If only our research team', target: 'had access to the supercomputing grid', wrong: ['has access to the supercomputing grid', 'would have access to grid', 'will have access to grid'], context: ', we could simulate climate models in hours.', note: 'If only + Past Simple: had access.' },
    { prompt: 'She is working abroad alone; she wishes her family', target: 'were here with her', wrong: ['is here with her', 'are here with her', 'would be here with her'], context: 'to celebrate her graduation.', note: 'Subjunctive were: were here with her.' },
    { prompt: 'It has been pouring rain for four straight days; if only the sun', target: 'would come out', wrong: ['came out', 'comes out', 'will come out'], context: 'for just an hour!', note: 'Wish for a weather change: would come out.' },
    { prompt: 'I don\'t have a valid international driving permit; I wish I', target: 'had one', wrong: ['have one', 'would have one', 'have had one'], context: 'so I could rent a car for the road trip.', note: 'Present wish: had one.' },
    { prompt: 'The professor wishes the graduate students', target: 'would submit their draft theses', wrong: ['submitted their draft theses', 'submits their draft theses', 'will submit their draft theses'], context: 'on time without requiring reminders.', note: 'Wish for others\' action: would submit.' },
    { prompt: 'If only housing', target: 'weren\'t so expensive', wrong: ['isn\'t so expensive', 'wouldn\'t be so expensive', 'won\'t be so expensive'], context: 'near the university medical center!', note: 'If only + weren\'t for present state.' },
    { prompt: 'Marcus wishes he', target: 'didn\'t have to work night shifts', wrong: ['doesn\'t have to work night shifts', 'wouldn\'t have to work night shifts', 'hadn\'t work night shifts'], context: 'at the metropolitan hospital.', note: 'Present wish: didn\'t have to work.' },
    { prompt: 'I wish this noisy air conditioning unit', target: 'would run more quietly', wrong: ['ran more quietly', 'runs more quietly', 'will run more quietly'], context: 'while we are recording the lecture podcast.', note: 'Wish for a device to operate differently: would run.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Wishes & Desires in Present');
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
        explanation: `Incorrect. "${w}" violates the modal/conditional rule. ${item.note}`
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
