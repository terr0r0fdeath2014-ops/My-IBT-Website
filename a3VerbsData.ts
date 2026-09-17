import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A3_VERBS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'past_perfect_simple',
    title: 'Past Perfect Simple (had + V3 / past participle)',
    subtitle: 'Expressing an action completed before another past event or timestamp',
    badge: 'had + V3',
    description: 'Use the Past Perfect Simple (had + past participle) to show that an action occurred BEFORE another specific action or milestone in the past. It establishes clear chronological sequence in past narratives. Common time markers include "before", "after", "by the time", "already", and "never before".',
    keyRule: 'Subject + had + V3 (Past Participle). Used for the "earlier past". When two events happen in the past: Earlier event = Past Perfect; Later event = Past Simple.',
    formula: 'Affirmative: S + had + V3 | Negative: S + hadn\'t + V3 | Question: Had + S + V3?',
    examples: [
      'By the time the ambulance arrived, the paramedics had already stabilized the patient.',
      'She had never visited Scandinavia before she moved to Stockholm last winter.',
      'When the keynote lecture began, Marcus realized he had forgotten his notes.',
      'The train had already departed before we reached platform 9.',
      'Had they completed the laboratory testing before the power outage occurred?'
    ]
  },
  {
    id: 'present_perfect_continuous',
    title: 'Present Perfect Continuous (have/has been + V-ing)',
    subtitle: 'Ongoing actions from past to now & actions with visible present results',
    badge: 'have been doing',
    description: 'Use the Present Perfect Continuous (have/has been + verb-ing) to emphasize the continuous duration of an activity that started in the past and is STILL happening now, or has JUST stopped with a tangible result in the present. Key markers: "for", "since", "all morning/day", "recently", "lately".',
    keyRule: 'have/has been + V-ing. Emphasizes DURATION or UNFINISHED activity ("I have been writing this report for 3 hours"). Present Perfect Simple emphasizes COMPLETION ("I have written 10 pages").',
    formula: 'S + have/has been + V-ing | Negative: S + haven\'t/hasn\'t been + V-ing | Question: Have/Has + S + been + V-ing?',
    examples: [
      'Dr. Alvarez has been researching neurodegenerative diseases for over a decade.',
      'I am out of breath because I have been running up the stadium stairs.',
      'The students have been working diligently on their robotics prototype all week.',
      'How long has she been studying for the international medical licensing exam?',
      'It has been raining continuously since early dawn.'
    ]
  },
  {
    id: 'future_continuous',
    title: 'Future Continuous (will be + V-ing)',
    subtitle: 'Actions that will be in progress at a specific time in the future',
    badge: 'will be doing',
    description: 'Use the Future Continuous (will be + verb-ing) to describe an action that will be actively in progress at a specific point in the future ("At 8:00 PM tomorrow, I will be flying over the Atlantic"). It is also used to ask politely about someone\'s routine future plans.',
    keyRule: 'Subject + will be + Verb-ing. Time markers: "this time next week", "at [exact future time]", "in ten years\' time".',
    formula: 'Affirmative: S + will be + V-ing | Negative: S + won\'t be + V-ing | Question: Will + S + be + V-ing?',
    examples: [
      'This time next Friday, we will be attending the annual neuroscience conference in Zurich.',
      'Don\'t phone her at 9:00 PM; she will be conducting an experiment in the laboratory.',
      'Will you be using your laptop this afternoon, or may I borrow it for an hour?',
      'In five years, solar satellites will be beaming clean energy across global grids.',
      'They won\'t be traveling during the semester exam week.'
    ]
  },
  {
    id: 'stative_vs_dynamic_verbs',
    title: 'Stative vs. Dynamic Verbs in Continuous Tenses',
    subtitle: 'Mental states, emotions, perception, possession & verbs with dual meanings',
    badge: 'State vs. Action',
    description: 'Dynamic verbs describe physical actions and can be used in continuous tenses (running, eating, writing). Stative verbs describe states, feelings, senses, thoughts, and possession (know, understand, believe, want, belong, contain, own) and are NOT standardly used in continuous forms. Watch out for dual-meaning verbs (think, have, see, taste, smell, feel).',
    keyRule: 'Stative verbs standardly stay in SIMPLE forms (e.g., "I know the answer", NOT "I am knowing"). Dual: "I think he is right" (opinion=stative) vs. "I am thinking about the problem" (mental activity=dynamic).',
    formula: 'Stative: S + Verb(simple) | Dynamic Dual: S + be + V-ing (when describing an active temporary process)',
    examples: [
      'Dr. Chen understands the complex quantum equation perfectly (stative).',
      'We are having dinner at the downtown restaurant right now (dynamic: eating).',
      'This antique violin belongs to the conservatory archive (stative).',
      'I am thinking about applying for the postgraduate fellowship (dynamic: pondering).',
      'The floral extract smells wonderful (stative perception).'
    ]
  },
  {
    id: 'narrative_tenses_mix',
    title: 'Narrative Tenses Integration (Past Simple, Continuous & Perfect)',
    subtitle: 'Structuring multi-layered storytelling and academic background accounts',
    badge: 'Narrative Storytelling',
    description: 'Master the interplay of the three past narrative tenses: Past Simple (main sequence of completed events), Past Continuous (background atmosphere and setting the scene), and Past Perfect (earlier backstory or prior causes). Combining them fluently creates cohesive narratives.',
    keyRule: 'Background Scene = Past Continuous; Sequential Main Plot = Past Simple; Prior Cause/Backstory = Past Perfect.',
    formula: 'Scene (While it was raining...) -> Event (the power went out...) -> Cause (...because lightning had struck the grid).',
    examples: [
      'While the storm was raging outside, the scientists discovered that the sensor had recorded anomalous data.',
      'She opened her briefcase, retrieved the report, and realized that her assistant had omitted the final appendix.',
      'The sun was setting behind the mountains when we finally reached the shelter.',
      'They had already packed their equipment when the expedition leader called a sudden meeting.',
      'As the professor was explaining the hypothesis, a student suddenly raised an objection.'
    ]
  }
];

export function getA3VerbsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'past_perfect_simple':
      return generatePastPerfectQuestions(starNumber, mSeed);
    case 'present_perfect_continuous':
      return generatePresPerfContQuestions(starNumber, mSeed);
    case 'future_continuous':
      return generateFutureContQuestions(starNumber, mSeed);
    case 'stative_vs_dynamic_verbs':
      return generateStativeDynamicQuestions(starNumber, mSeed);
    case 'narrative_tenses_mix':
      return generateNarrativeTensesQuestions(starNumber, mSeed);
    default:
      return generatePastPerfectQuestions(starNumber, mSeed);
  }
}

// 1. Past Perfect Simple Pool
function generatePastPerfectQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'By the time the fire brigade arrived at the warehouse, the fire', target: 'had already destroyed', wrong: ['already destroyed', 'has already destroyed', 'was already destroying'], context: 'the western storage wing.', note: 'Past Perfect "had + V3" shows the fire happened before the arrival.' },
    { prompt: 'Sophia was confident during the presentation because she', target: 'had rehearsed', wrong: ['rehearsed', 'has rehearsed', 'was rehearsed'], context: 'her slides multiple times.', note: 'Rehearsing happened prior to the presentation: had rehearsed.' },
    { prompt: 'When we reached the boarding gate, the flight', target: 'had already closed', wrong: ['has already closed', 'already closed', 'was already closed'], context: 'its passenger doors.', note: 'Earlier past event takes "had already closed".' },
    { prompt: 'Dr. Jenkins realized he', target: 'had left', wrong: ['left', 'has left', 'was leaving'], context: 'his laboratory keycard in the faculty lounge.', note: 'Action occurred prior to realizing: had left.' },
    { prompt: 'They', target: 'had never seen', wrong: ['never saw', 'have never seen', 'had never saw'], context: 'such an intense aurora borealis before their trip to Tromsø.', note: 'Experience before a past time: had never seen.' },
    { prompt: 'By midnight, the research team', target: 'had analyzed', wrong: ['has analyzed', 'analyzed', 'was analyzing'], context: 'all twenty-five blood samples.', note: 'Completed by a specific past timestamp: had analyzed.' },
    { prompt: 'The highway was closed because an oil truck', target: 'had overturned', wrong: ['has overturned', 'overturned', 'was overturning'], context: 'an hour earlier.', note: 'Prior cause of closure: had overturned.' },
    { prompt: 'She couldn\'t withdraw cash because she', target: 'had forgotten', wrong: ['forgot', 'has forgotten', 'had forgot'], context: 'her bank security PIN.', note: 'Prior event: had forgotten.' },
    { prompt: '', target: 'Had you finished', wrong: ['Did you finished', 'Have you finished', 'Had you finish'], context: 'the chemistry assignment before the professor collected the papers?', note: 'Past perfect question: Had + subject + V3.' },
    { prompt: 'Marcus was relieved to find that his lost wallet', target: 'had been handed in', wrong: ['has been handed in', 'was handed in', 'handed in'], context: 'at the security desk.', note: 'Past perfect passive: had been handed in.' },
    { prompt: 'Before relocating to Tokyo, she', target: 'had studied', wrong: ['studied', 'has studied', 'was studying'], context: 'Japanese linguistics for three years in London.', note: 'Prior period: had studied.' },
    { prompt: 'The crops withered because it', target: 'had not rained', wrong: ['did not rained', 'has not rained', 'was not rained'], context: 'for nearly three months.', note: 'Prior duration: had not rained.' },
    { prompt: 'I was unable to open the file because the computer', target: 'had crashed', wrong: ['crashed', 'has crashed', 'was crashed'], context: 'unexpectedly.', note: 'Prior cause: had crashed.' },
    { prompt: 'When the meeting ended, the committee', target: 'had approved', wrong: ['has approved', 'approved', 'was approving'], context: 'the revised annual budget.', note: 'Completed before ending: had approved.' },
    { prompt: 'He felt exhausted because he', target: 'had slept', wrong: ['slept', 'has slept', 'was sleeping'], context: 'for only three hours the previous night.', note: 'Prior cause: had slept.' },
    { prompt: 'By the time we arrived at the concert hall, the symphony', target: 'had already begun', wrong: ['already began', 'has already begun', 'had already began'], context: '.', note: 'Past participle of begin is begun: had already begun.' },
    { prompt: 'The detective discovered that the suspect', target: 'had fled', wrong: ['fled', 'has fled', 'had fly'], context: 'the country using a forged passport.', note: 'Prior act: had fled.' },
    { prompt: 'She was surprised to learn that her novel', target: 'had won', wrong: ['has won', 'won', 'was won'], context: 'the international literary award.', note: 'Prior event: had won.' },
    { prompt: 'We had to cancel the experiment because the reagent', target: 'had contaminated', wrong: ['has contaminated', 'contaminated', 'was contaminating'], context: 'the main solution.', note: 'Prior event: had contaminated.' },
    { prompt: 'The students', target: 'had already submitted', wrong: ['already submitted', 'have already submitted', 'had already submit'], context: 'their laboratory reports when the power went out.', note: 'Past perfect: had already submitted.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Past Perfect Simple');
}

// 2. Present Perfect Continuous Pool
function generatePresPerfContQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Dr. Patel', target: 'has been researching', wrong: ['is researching for', 'has researched for', 'has being researching'], context: 'quantum computing architectures for over eight years.', note: 'Ongoing continuous duration: has been researching.' },
    { prompt: 'I am completely exhausted because I', target: 'have been grading', wrong: ['have graded', 'am grading since', 'have being grading'], context: 'undergraduate exam papers all afternoon.', note: 'Present result of continuous past activity: have been grading.' },
    { prompt: 'How long', target: 'have you been waiting', wrong: ['are you waiting', 'have you waited for', 'do you wait'], context: 'for the delayed express train to arrive?', note: 'Question asking duration: have you been waiting.' },
    { prompt: 'The municipal engineers', target: 'have been repairing', wrong: ['are repairing since', 'have repaired for', 'have being repairing'], context: 'the water main since 6:00 AM this morning.', note: 'Started in past and still ongoing: have been repairing.' },
    { prompt: 'She is covered in paint because she', target: 'has been redecorating', wrong: ['has redecorated', 'is redecorating since', 'has being redecorating'], context: 'her new art studio.', note: 'Visible result of recent activity: has been redecorating.' },
    { prompt: 'The climate committee', target: 'has been drafting', wrong: ['is drafting for', 'has drafted for', 'have been drafting'], context: 'the environmental resolution since last Tuesday.', note: 'Singular subject committee: has been drafting.' },
    { prompt: 'Why are your hands so dirty? — I', target: 'have been working', wrong: ['have worked', 'am working since', 'have being worked'], context: 'in the university botanical garden.', note: 'Direct physical result: have been working.' },
    { prompt: 'It', target: 'has been snowing', wrong: ['is snowing since', 'has snowed for', 'has being snowing'], context: 'heavily in the alpine pass for thirty-six hours.', note: 'Continuous weather duration: has been snowing.' },
    { prompt: 'Oliver', target: 'has been practicing', wrong: ['is practicing for', 'has practiced since', 'have been practicing'], context: 'the violin piece for his audition all morning.', note: 'Singular subject: has been practicing.' },
    { prompt: 'The tech company', target: 'has been developing', wrong: ['is developing since', 'has developed for', 'have been developing'], context: 'this neural network model for eighteen months.', note: 'Continuous research: has been developing.' },
    { prompt: 'We', target: 'have been discussing', wrong: ['are discussing since', 'have discussed for', 'have being discussing'], context: 'the ethical implications of gene editing for hours.', note: 'Ongoing activity: have been discussing.' },
    { prompt: 'Her eyes are red because she', target: 'has been staring', wrong: ['has stared', 'is staring since', 'has being staring'], context: 'at the microscope display without a break.', note: 'Recent activity causing symptom: has been staring.' },
    { prompt: 'How long', target: 'has Dr. Vance been lecturing', wrong: ['is Dr. Vance lecturing', 'has Dr. Vance lectured for', 'does Dr. Vance lecture'], context: 'at this prestigious medical institution?', note: 'Question with singular subject: has Dr. Vance been lecturing.' },
    { prompt: 'The ground is wet because it', target: 'has been raining', wrong: ['is raining since', 'has rained for', 'has being raining'], context: 'throughout the early morning.', note: 'Tangible evidence: has been raining.' },
    { prompt: 'They', target: 'have been negotiating', wrong: ['are negotiating since', 'have negotiated for', 'have being negotiating'], context: 'the international trade agreement since January.', note: 'Ongoing negotiation: have been negotiating.' },
    { prompt: 'I', target: 'have been trying to reach', wrong: ['am trying to reach since', 'have tried to reach for', 'have being trying to reach'], context: 'the admissions office on the phone all morning.', note: 'Repeated continuous efforts: have been trying.' },
    { prompt: 'She', target: 'has been preparing', wrong: ['is preparing for', 'has prepared since', 'have been preparing'], context: 'her keynote speech for the upcoming chemistry symposium.', note: 'Preparation in progress: has been preparing.' },
    { prompt: 'The astronomers', target: 'have been observing', wrong: ['are observing since', 'have observed for', 'have being observing'], context: 'the distant supernova through the orbital telescope.', note: 'Ongoing scientific observation: have been observing.' },
    { prompt: 'We', target: 'have been living', wrong: ['are living since', 'have lived for', 'have being living'], context: 'in this neighborhood for over fifteen years.', note: 'Continuous residence: have been living.' },
    { prompt: 'He smells of woodsmoke because he', target: 'has been building', wrong: ['has built', 'is building since', 'has being building'], context: 'a campfire outside the mountain lodge.', note: 'Visible result: has been building.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Present Perfect Continuous');
}

// 3. Future Continuous Pool
function generateFutureContQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'This time tomorrow, the surgical team', target: 'will be performing', wrong: ['will perform', 'is performing for', 'will be perform'], context: 'the intricate cardiac operation.', note: 'Action in progress at specific future point: will be performing.' },
    { prompt: 'Don\'t phone the professor at 3:00 PM; he', target: 'will be conducting', wrong: ['will conduct', 'is conduct', 'will be conduct'], context: 'an oral examination.', note: 'Ongoing future action: will be conducting.' },
    { prompt: '', target: 'Will you be using', wrong: ['Will you use to', 'Are you use', 'Will you be used'], context: 'the spectrophotometer this afternoon, or can I calibrate it?', note: 'Polite inquiry about plans: Will you be using.' },
    { prompt: 'At 8:00 AM on Monday, thousands of commuters', target: 'will be traveling', wrong: ['will travel to', 'are travel', 'will be travel'], context: 'across the metropolitan transit network.', note: 'In progress at future time: will be traveling.' },
    { prompt: 'Next month, Sarah', target: 'will be studying', wrong: ['will study to', 'is study', 'will be study'], context: 'marine biology at the coastal research institute.', note: 'Scheduled in-progress state: will be studying.' },
    { prompt: 'In ten years\' time, renewable power plants', target: 'will be supplying', wrong: ['will supply to', 'are supply', 'will be supply'], context: 'the majority of regional electrical grids.', note: 'Future continuous prediction: will be supplying.' },
    { prompt: 'We', target: 'won\'t be attending', wrong: ['won\'t attend to', 'aren\'t attend', 'won\'t be attend'], context: 'the annual reception because of our flight schedule.', note: 'Negative future continuous: won\'t be attending.' },
    { prompt: 'This time next Friday, I', target: 'will be relaxing', wrong: ['will relax to', 'am relax', 'will be relax'], context: 'on the Mediterranean coast.', note: 'Future state in progress: will be relaxing.' },
    { prompt: 'The satellite', target: 'will be transmitting', wrong: ['will transmit to', 'is transmit', 'will be transmit'], context: 'high-resolution telemetry data as it orbits over the poles.', note: 'Simultaneous future process: will be transmitting.' },
    { prompt: '', target: 'Will the delegates be discussing', wrong: ['Will the delegates discuss to', 'Do the delegates discussing', 'Will the delegates be discuss'], context: 'the treaty provisions during the morning session?', note: 'Question form: Will + S + be + V-ing.' },
    { prompt: 'By mid-afternoon, the volunteers', target: 'will be distributing', wrong: ['will distribute to', 'are distribute', 'will be distribute'], context: 'supplies to the disaster relief shelters.', note: 'Future process: will be distributing.' },
    { prompt: 'He', target: 'will be presenting', wrong: ['will present to', 'is present', 'will be present'], context: 'his thesis findings at the 2:00 PM session tomorrow.', note: 'Ongoing presentation at time: will be presenting.' },
    { prompt: 'Please don\'t ring the doorbell at noon; the baby', target: 'will be sleeping', wrong: ['will sleep', 'is sleep', 'will be sleep'], context: 'in the nursery.', note: 'Ongoing state: will be sleeping.' },
    { prompt: 'During the solar eclipse, millions of people', target: 'will be watching', wrong: ['will watch to', 'are watch', 'will be watch'], context: 'the sky with protective glasses.', note: 'Future continuous event: will be watching.' },
    { prompt: 'Tomorrow evening, we', target: 'will be celebrating', wrong: ['will celebrate to', 'are celebrate', 'will be celebrate'], context: 'our laboratory\'s twentieth anniversary.', note: 'Celebration in progress: will be celebrating.' },
    { prompt: 'The automated rover', target: 'will be collecting', wrong: ['will collect to', 'is collect', 'will be collect'], context: 'mineral samples while the base station recharges.', note: 'Parallel future activity: will be collecting.' },
    { prompt: '', target: 'Will you be passing', wrong: ['Will you pass to', 'Do you passing', 'Will you be pass'], context: 'by the administrative building on your way back?', note: 'Polite inquiry: Will you be passing.' },
    { prompt: 'At this hour next week, the expedition team', target: 'will be ascending', wrong: ['will ascend to', 'are ascend', 'will be ascend'], context: 'the final ridge of the mountain.', note: 'In progress: will be ascending.' },
    { prompt: 'The software engineers', target: 'will be deploying', wrong: ['will deploy to', 'are deploy', 'will be deploy'], context: 'the security update overnight to minimize downtime.', note: 'Future continuous: will be deploying.' },
    { prompt: 'I', target: 'won\'t be working', wrong: ['won\'t work to', 'am not work', 'won\'t be work'], context: 'in the laboratory on Saturday morning.', note: 'Negative: won\'t be working.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Future Continuous');
}

// 4. Stative vs Dynamic Verbs Pool
function generateStativeDynamicQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Dr. Evans', target: 'understands', wrong: ['is understanding', 'understands of', 'has understanding'], context: 'the theoretical framework behind quantum mechanics completely.', note: '"Understand" is a stative verb of cognition; it does not take continuous forms.' },
    { prompt: 'Be quiet for a moment; I', target: 'am thinking about', wrong: ['think about', 'am thinking of', 'have think about'], context: 'how to solve this differential equation.', note: '"Think" describing active mental processing is dynamic: am thinking about.' },
    { prompt: 'This rare 18th-century manuscript', target: 'belongs to', wrong: ['is belonging to', 'belongs with', 'has belonging to'], context: 'the university special collections archive.', note: '"Belong" is a stative verb of possession.' },
    { prompt: 'The gourmet soup', target: 'tastes delicious', wrong: ['is tasting delicious', 'tastes deliciously', 'is tasting deliciously'], context: 'with fresh rosemary and garlic.', note: '"Taste" describing permanent quality/flavor is stative.' },
    { prompt: 'The chef', target: 'is tasting the sauce', wrong: ['tastes the sauce', 'is taste the sauce', 'has taste the sauce'], context: 'to check if it requires more seasoning.', note: 'The active physical action of tasting is dynamic: is tasting.' },
    { prompt: 'She', target: 'has three research assistants', wrong: ['is having three research assistants', 'has having three assistants', 'is have three assistants'], context: 'working in her biochemistry lab.', note: '"Have" expressing possession is stative.' },
    { prompt: 'We', target: 'are having lunch', wrong: ['have lunch right now', 'are have lunch', 'has lunch right now'], context: 'in the campus bistro right now; join us!', note: '"Have" in the sense of consuming food is dynamic: are having lunch.' },
    { prompt: 'I', target: 'believe that', wrong: ['am believing that', 'believe in that', 'am believe that'], context: 'sustainable energy is essential for global development.', note: '"Believe" expressing opinion is stative.' },
    { prompt: 'This organic chemistry textbook', target: 'contains twenty chapters', wrong: ['is containing twenty chapters', 'contains of twenty chapters', 'is contain twenty chapters'], context: 'covering molecular synthesis.', note: '"Contain" is stative.' },
    { prompt: 'Why', target: 'are you smelling the chemical reagent', wrong: ['do you smell the chemical reagent', 'are you smell the reagent', 'have you smell the reagent'], context: '? It might produce toxic fumes!', note: 'Active inhalation action is dynamic: are you smelling.' },
    { prompt: 'The fresh blossoms', target: 'smell wonderful', wrong: ['are smelling wonderful', 'smells wonderfully', 'are smelling wonderfully'], context: 'in the university botanical conservatory.', note: 'Passive scent emission is stative: smell wonderful.' },
    { prompt: 'He', target: 'owns two patent rights', wrong: ['is owning two patent rights', 'owns of two patent rights', 'is own two patent rights'], context: 'for biomedical nanotechnology.', note: '"Own" is stative.' },
    { prompt: 'I', target: 'am seeing the ophthalmologist', wrong: ['see the ophthalmologist right now', 'am see the doctor', 'have see the ophthalmologist'], context: 'tomorrow at 10:00 AM for an eye examination.', note: '"See" meaning consult/meet with is dynamic: am seeing.' },
    { prompt: 'Do you', target: 'see that bright star', wrong: ['are you seeing that bright star', 'see of that bright star', 'are you see that bright star'], context: 'near the western horizon?', note: 'Visual perception is stative: Do you see.' },
    { prompt: 'The laboratory technician', target: 'weighs eighty kilograms', wrong: ['is weighing eighty kilograms', 'weighs of eighty kilograms', 'is weigh eighty kilograms'], context: '.', note: 'Measurement of physical weight is stative: weighs.' },
    { prompt: 'The pharmacist', target: 'is weighing the powdered compound', wrong: ['weighs the powdered compound', 'is weigh the compound', 'has weigh the compound'], context: 'on the analytical balance.', note: 'Active measurement process is dynamic: is weighing.' },
    { prompt: 'I', target: 'prefer working', wrong: ['am preferring working', 'prefer of working', 'am prefer working'], context: 'in a quiet library environment rather than a busy café.', note: '"Prefer" is stative.' },
    { prompt: 'This ancient coin', target: 'appears to be authentic', wrong: ['is appearing to be authentic', 'appears of to be', 'is appear authentic'], context: 'according to archaeological tests.', note: '"Appear" meaning seem is stative.' },
    { prompt: 'The renowned cellist', target: 'is appearing on stage', wrong: ['appears on stage right now', 'is appear on stage', 'has appear on stage'], context: 'at the national concert hall tonight.', note: '"Appear" meaning perform in public is dynamic.' },
    { prompt: 'He', target: 'knows all the irregular past verbs', wrong: ['is knowing all the irregular past verbs', 'knows of all the verbs', 'is know all the verbs'], context: 'in English grammar.', note: '"Know" is strictly stative.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Stative vs. Dynamic Verbs');
}

// 5. Narrative Tenses Integration Pool
function generateNarrativeTensesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'While the meteorologist was monitoring the radar, she noticed that the barometric pressure', target: 'had dropped', wrong: ['dropped', 'has dropped', 'was dropping'], context: 'sharply within minutes.', note: 'Prior event explaining the observation: had dropped.' },
    { prompt: 'The expedition team was navigating through the blizzard when their compass', target: 'suddenly broke', wrong: ['had suddenly broken', 'was suddenly breaking', 'has suddenly broken'], context: '.', note: 'Interrupting main narrative event takes Past Simple: suddenly broke.' },
    { prompt: 'She opened the laboratory logbook and realized that someone', target: 'had altered', wrong: ['altered', 'was altering', 'has altered'], context: 'the experimental calculations.', note: 'Prior action discovered in the past: had altered.' },
    { prompt: 'The sun was shining brightly as the students', target: 'gathered', wrong: ['were gathering', 'had gathered', 'have gathered'], context: 'outside the auditorium for the graduation ceremony.', note: 'Sequential main story event: gathered.' },
    { prompt: 'He was confident during the defense because he', target: 'had prepared', wrong: ['prepared', 'was preparing', 'has prepared'], context: 'his thesis responses for months.', note: 'Prior cause: had prepared.' },
    { prompt: 'As the airplane was descending towards the runway, the pilot', target: 'requested', wrong: ['was requesting', 'had requested', 'has requested'], context: 'emergency clearance from air traffic control.', note: 'Main plot event: requested.' },
    { prompt: 'They could not enter the archive because the archivist', target: 'had locked', wrong: ['locked', 'was locking', 'has locked'], context: 'the vault doors an hour earlier.', note: 'Prior state: had locked.' },
    { prompt: 'While Dr. Lin was inspecting the culture dishes, she', target: 'discovered', wrong: ['was discovering', 'had discovered', 'has discovered'], context: 'a previously uncataloged bacterial strain.', note: 'Interrupting discovery: discovered.' },
    { prompt: 'The power went out in the dormitory because lightning', target: 'had struck', wrong: ['struck', 'was striking', 'has struck'], context: 'the main transformer station.', note: 'Prior cause: had struck.' },
    { prompt: 'The violinist was tuning her instrument when the concert master', target: 'stepped', wrong: ['was stepping', 'had stepped', 'has stepped'], context: 'onto the brightly lit stage.', note: 'Main event: stepped.' },
    { prompt: 'When we arrived at the summit, we saw that another climbing team', target: 'had already set up', wrong: ['already set up', 'was already setting up', 'has already set up'], context: 'their mountain camp.', note: 'Prior completed state: had already set up.' },
    { prompt: 'As she was walking through the gallery, an avant-garde painting', target: 'caught', wrong: ['was catching', 'had caught', 'has caught'], context: 'her undivided attention.', note: 'Punctual event: caught.' },
    { prompt: 'The passengers were waiting at the gate because their inbound aircraft', target: 'had suffered', wrong: ['suffered', 'was suffering', 'has suffered'], context: 'a mechanical delay in Munich.', note: 'Prior cause: had suffered.' },
    { prompt: 'He retrieved his notebook, sat down at the wooden desk, and', target: 'began', wrong: ['was beginning', 'had begun', 'has begun'], context: 'to transcribe the historical runes.', note: 'Sequence of simple actions: began.' },
    { prompt: 'The rescue diver was exploring the reef when he', target: 'spotted', wrong: ['was spotting', 'had spotted', 'has spotted'], context: 'an ancient bronze artifact.', note: 'Main event interrupting ongoing action: spotted.' },
    { prompt: 'She was exhausted because she', target: 'had been traveling', wrong: ['traveled', 'was traveling', 'has traveled'], context: 'across three continents without adequate rest.', note: 'Duration of prior activity: had been traveling.' },
    { prompt: 'While the fire was burning in the hearth, grandfather', target: 'told', wrong: ['was telling', 'had told', 'has told'], context: 'us stories of his maritime voyages.', note: 'Main storytelling action: told.' },
    { prompt: 'They discovered that the ancient map', target: 'had omitted', wrong: ['omitted', 'was omitting', 'has omitted'], context: 'the newly chartered islands.', note: 'Prior fact: had omitted.' },
    { prompt: 'As the alarm was sounding through the corridor, the engineers', target: 'evacuated', wrong: ['were evacuating', 'had evacuated', 'have evacuated'], context: 'the server room in an orderly fashion.', note: 'Main plot event: evacuated.' },
    { prompt: 'When the detective entered the office, he immediately noticed that someone', target: 'had opened', wrong: ['opened', 'was opening', 'has opened'], context: 'the confidential filing cabinet.', note: 'Prior discovery: had opened.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Narrative Tenses Integration');
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
        explanation: `Incorrect. "${w}" violates the tense rule. ${item.note}`
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
