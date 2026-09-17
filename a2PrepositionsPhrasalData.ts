import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A2_PREPOSITIONS_PHRASAL_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'prepositions_movement_direction',
    title: 'Prepositions of Movement & Direction',
    subtitle: 'into, out of, through, across, towards, along, past, over, under',
    badge: 'Movement & Paths',
    description: 'Prepositions of movement show the path, direction, or trajectory of an action. Use "into" (entering an enclosed space: walked into the room), "out of" (exiting: stepped out of the taxi), "through" (moving inside a 3D volume or tunnel: drove through the tunnel), "across" (from one side of a surface to the other: swam across the river), "along" (following a line/edge: walked along the beach), "towards" (heading in the direction of), "past" (moving beyond a landmark), "over" (above and across), and "under" (below/beneath).',
    keyRule: 'into (inward) vs. out of (outward). across (2D surface) vs. through (3D volume/forest/tunnel). along (parallel to road/river). past (beyond a point).',
    formula: 'Verb of Movement + Preposition + Destination/Pathway (walked into the hall, ran across the bridge)',
    examples: [
      'The students walked into the grand lecture auditorium.',
      'We drove through the mountain tunnel in heavy fog.',
      'The athlete ran across the suspension bridge at sunrise.',
      'They enjoyed walking along the riverbank on Sunday afternoon.',
      'The airplane flew over the snow-capped Alps.'
    ]
  },
  {
    id: 'prepositional_time_expressions',
    title: 'Time Markers: For, Since, During, Ago, Until & By',
    subtitle: 'Expressing durations, starting points, periods & deadlines',
    badge: 'Time Expressions',
    description: 'Master key temporal prepositions: "for" + duration of time (for three hours, for five years); "since" + specific starting point (since 2020, since Monday); "during" + noun naming a period/event (during the lecture, during the summer); "ago" comes AFTER a past time span (two days ago); "until" marks how long an action continues; "by" indicates a deadline ("at or before that time").',
    keyRule: 'for + duration (for 2 hours). since + starting point (since 9 AM). during + event noun (during the movie). ago = past time + ago (3 weeks ago). by = deadline / no later than (by Friday). until = up to that point.',
    formula: 'Duration: for + [Time Span] | Starting Point: since + [Exact Date/Time] | Event: during + [Noun] | Deadline: by + [Time]',
    examples: [
      'She has lived in Berlin for five years.',
      'I have been awake since 6:00 AM this morning.',
      'No one spoke during the intense medical examination.',
      'We graduated from university three years ago.',
      'Please submit your final research papers by Friday at 5:00 PM.'
    ]
  },
  {
    id: 'dependent_prepositions_adjectives',
    title: 'Adjectives with Dependent Prepositions',
    subtitle: 'interested in, good at, afraid of, tired of, proud of, famous for...',
    badge: 'Fixed Collocations',
    description: 'In English, many adjectives must pair with specific fixed prepositions. Memorize these standard collocations: interested in, good/bad at, afraid/scared of, proud of, famous for, excited about, keen on, worried about, similar to, different from, responsible for. After the preposition, always use a noun or a gerund (verb-ing).',
    keyRule: 'Adjective + Fixed Preposition + Noun / Verb-ing: good at math, interested in learning, proud of his daughter, famous for its architecture, afraid of spiders.',
    formula: 'Subject + be + Adjective + [Fixed Preposition] + Noun / Gerund (V-ing)',
    examples: [
      'Sarah is extremely good at solving complex calculus problems.',
      'Are you interested in joining the university robotics club?',
      'The region is famous for its organic vineyards and olive oil.',
      'The parents were very proud of their son\'s graduation honors.',
      'Who is responsible for locking the laboratory doors at night?'
    ]
  },
  {
    id: 'essential_everyday_phrasal_verbs',
    title: 'Essential Everyday Phrasal Verbs',
    subtitle: 'wake up, turn on/off, look for, pick up, give up, put on, take off...',
    badge: 'Phrasal Combinations',
    description: 'Phrasal verbs combine a base verb with a particle/preposition (on, off, up, down, out, for, after) to create a new idiomatic meaning. Common A2 phrasal verbs: wake up (stop sleeping), turn on/off (activate/deactivate devices), look for (search), look after (take care of), pick up (lift / collect), give up (quit / stop trying), put on (wear clothes), take off (remove clothes / plane leaves ground), find out (discover).',
    keyRule: 'Phrasal verb = Base Verb + Particle. The combined meaning is often idiomatic and different from the literal verb alone.',
    formula: 'Verb + Particle (+ Object): turn on the light, look for keys, wake up early, find out the truth',
    examples: [
      'Please turn off the laboratory lights before you leave.',
      'I am looking for my scientific calculator; have you seen it?',
      'She never gives up, even when the research problem is challenging.',
      'The flight took off smoothly despite the strong headwinds.',
      'He put on his warm winter jacket and stepped outside into the snow.'
    ]
  }
];

export function getA2PrepositionsPhrasalStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'prepositions_movement_direction':
      return generateMovementPrepositionsQuestions(starNumber, mSeed);
    case 'prepositional_time_expressions':
      return generateTimePrepositionsQuestions(starNumber, mSeed);
    case 'dependent_prepositions_adjectives':
      return generateDependentPrepositionsQuestions(starNumber, mSeed);
    case 'essential_everyday_phrasal_verbs':
      return generatePhrasalVerbsQuestions(starNumber, mSeed);
    default:
      return generateMovementPrepositionsQuestions(starNumber, mSeed);
  }
}

// 1. Prepositions of Movement & Direction Pool
function generateMovementPrepositionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The students walked quietly', target: 'into the lecture auditorium', wrong: ['onto the lecture auditorium', 'towards to the lecture auditorium', 'through to the lecture auditorium'], context: 'as the presentation began.', note: '"into" indicates entering an enclosed room or building.' },
    { prompt: 'The train traveled fast', target: 'through the mountain tunnel', wrong: ['across the mountain tunnel', 'into to the mountain tunnel', 'along on the mountain tunnel'], context: 'before emerging into the sunny valley.', note: '"through" is used for movement inside a 3D enclosed space or tunnel.' },
    { prompt: 'The marathon runners ran', target: 'across the suspension bridge', wrong: ['through the suspension bridge', 'into the suspension bridge', 'along of the suspension bridge'], context: 'to reach the finish line on the opposite bank.', note: '"across" indicates moving from one side of a surface to the other.' },
    { prompt: 'We enjoyed strolling', target: 'along the sandy beach', wrong: ['through the sandy beach', 'across to the sandy beach', 'into the sandy beach'], context: 'as the sunset illuminated the horizon.', note: '"along" means moving in a line parallel to a coast, path, or river.' },
    { prompt: 'The commercial aircraft flew smoothly', target: 'over the snow-capped Alps', wrong: ['through of the Alps', 'across in the Alps', 'into on the Alps'], context: 'on its route to Rome.', note: '"over" indicates moving above and across a geographical region.' },
    { prompt: 'The detective stepped', target: 'out of the elevator', wrong: ['out from the elevator', 'off to the elevator', 'through of the elevator'], context: 'and walked down the corridor to room 405.', note: '"out of" expresses exiting an enclosed space.' },
    { prompt: 'The curious fox crept', target: 'under the wooden fence', wrong: ['into under the fence', 'over through the fence', 'through on the fence'], context: 'to explore the meadow beyond.', note: '"under" indicates movement beneath a barrier.' },
    { prompt: 'The cyclists rode', target: 'past the historic clock tower', wrong: ['passed the historic clock tower', 'along to the clock tower', 'into past the clock tower'], context: 'on their morning circuit through the old city.', note: '"past" indicates passing beyond a specific landmark.' },
    { prompt: 'The ship sailed carefully', target: 'through the narrow strait', wrong: ['across in the narrow strait', 'onto the narrow strait', 'over into the narrow strait'], context: 'guided by marine navigation beacons.', note: '"through" indicates traversing a channel or waterway.' },
    { prompt: 'She walked quickly', target: 'towards the campus library', wrong: ['towards to the library', 'in towards of the library', 'along at the library'], context: 'to return her books before closing time.', note: '"towards" indicates moving in the direction of a destination.' },
    { prompt: 'The children jumped happily', target: 'into the refreshing swimming pool', wrong: ['onto in the swimming pool', 'through the swimming pool', 'across in the swimming pool'], context: 'on a hot July afternoon.', note: '"into" indicates entering water or an enclosed basin.' },
    { prompt: 'We walked', target: 'along the riverside path', wrong: ['through on the riverside path', 'across of the riverside path', 'into the riverside path'], context: 'talking about our upcoming research project.', note: '"along" expresses moving parallel to the river path.' },
    { prompt: 'The subway train pulled', target: 'out of the central station', wrong: ['out from the central station', 'away of the central station', 'off to the central station'], context: 'promptly at 8:45 AM.', note: '"out of" expresses departing from a station.' },
    { prompt: 'The cat leaped gracefully', target: 'over the garden wall', wrong: ['through the garden wall', 'across of the garden wall', 'into over the garden wall'], context: 'and vanished into the bushes.', note: '"over" indicates jumping above and clearing an obstacle.' },
    { prompt: 'They hiked', target: 'through the dense pine forest', wrong: ['across in the pine forest', 'along of the pine forest', 'into onto the pine forest'], context: 'to reach the scenic mountain viewpoint.', note: '"through" is used for moving inside woods or forests.' },
    { prompt: 'The ferry carried passengers', target: 'across the wide bay', wrong: ['through the wide bay', 'along to the wide bay', 'into across the bay'], context: 'every half hour throughout the day.', note: '"across" indicates crossing a body of water from one shore to the other.' },
    { prompt: 'He drove', target: 'past the university entrance', wrong: ['passed the university entrance', 'through to the entrance', 'along at the entrance'], context: 'before realizing he had missed his turn.', note: '"past" expresses moving beyond a point.' },
    { prompt: 'The rescue diver descended', target: 'under the damaged ship', wrong: ['into under the ship', 'through below the ship', 'across under the ship'], context: 'to inspect the hull for leaks.', note: '"under" indicates position or movement beneath an object.' },
    { prompt: 'The crowd surged', target: 'into the exhibition hall', wrong: ['onto the exhibition hall', 'through to the hall', 'towards in the hall'], context: 'as the grand doors opened.', note: '"into" expresses entering a venue.' },
    { prompt: 'The tourist wandered', target: 'along the cobblestone streets', wrong: ['through of the streets', 'across to the streets', 'into on the streets'], context: 'admiring the baroque architecture.', note: '"along" indicates walking down along street pathways.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Prepositions of Movement');
}

// 2. Prepositional Time Expressions Pool
function generateTimePrepositionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Dr. Henderson has worked at the clinic', target: 'for ten years', wrong: ['since ten years', 'during ten years', 'in ten years ago'], context: 'and is respected by all his colleagues.', note: '"for" is used with durations of time (ten years).' },
    { prompt: 'The laboratory has been collecting weather data', target: 'since 2018', wrong: ['for 2018', 'during 2018', 'from 2018 ago'], context: 'with high-precision meteorological sensors.', note: '"since" is used with an exact starting point (2018).' },
    { prompt: 'No one is permitted to use mobile phones', target: 'during the final examination', wrong: ['for the final examination', 'since the final examination', 'while the final examination'], context: 'under official testing regulations.', note: '"during" is followed by a noun naming a period or event.' },
    { prompt: 'We submitted our research grant proposal three days', target: 'ago', wrong: ['before', 'since', 'for'], context: 'and are eagerly awaiting the review panel\'s decision.', note: '"ago" comes after a period of time to indicate past distance.' },
    { prompt: 'Please make sure to submit your essay', target: 'by Friday at 5:00 PM', wrong: ['until Friday at 5:00 PM', 'since Friday at 5:00 PM', 'for Friday at 5:00 PM'], context: '; late submissions will incur penalties.', note: '"by" indicates a strict deadline (at or before that time).' },
    { prompt: 'The library will remain open', target: 'until midnight', wrong: ['by midnight', 'since midnight', 'during midnight'], context: 'during the final examination week.', note: '"until" indicates the continuous duration up to a specific end point.' },
    { prompt: 'She studied in London', target: 'for two semesters', wrong: ['since two semesters', 'during two semesters', 'in two semesters ago'], context: 'as part of the university exchange program.', note: '"for" pairs with duration (two semesters).' },
    { prompt: 'I have not seen Oliver', target: 'since last Monday', wrong: ['for last Monday', 'during last Monday', 'from last Monday ago'], context: 'at the campus cafeteria.', note: '"since" pairs with a specific past time point.' },
    { prompt: 'Many students took notes', target: 'during the guest lecture', wrong: ['for the guest lecture', 'since the guest lecture', 'while the guest lecture'], context: 'delivered by the Nobel laureate.', note: '"during" pairs with event noun.' },
    { prompt: 'The ancient cathedral was built over six hundred years', target: 'ago', wrong: ['before', 'since', 'for'], context: 'in the heart of the medieval city.', note: '"ago" follows the time span.' },
    { prompt: 'You must finish the online registration', target: 'by September 15th', wrong: ['until September 15th', 'since September 15th', 'for September 15th'], context: 'to guarantee enrollment in the course.', note: '"by" indicates the deadline date.' },
    { prompt: 'We waited at the terminal', target: 'until the delayed flight landed', wrong: ['by the delayed flight landed', 'since the delayed flight landed', 'during the delayed flight landed'], context: 'safely in the evening.', note: '"until" expresses up to the moment an event occurred.' },
    { prompt: 'The chemical reaction was observed continuously', target: 'for forty-five minutes', wrong: ['since forty-five minutes', 'during forty-five minutes', 'in forty-five minutes ago'], context: 'under controlled pressure.', note: '"for" with duration.' },
    { prompt: 'Professor Clark has taught mathematics', target: 'since 1995', wrong: ['for 1995', 'during 1995', 'from 1995 ago'], context: 'with passion and pedagogical excellence.', note: '"since" with starting year.' },
    { prompt: 'The power went out momentarily', target: 'during the severe thunderstorm', wrong: ['for the severe thunderstorm', 'since the severe thunderstorm', 'while the severe thunderstorm'], context: 'last night.', note: '"during" with noun event.' },
    { prompt: 'They completed the engineering blueprint two weeks', target: 'ago', wrong: ['before', 'since', 'for'], context: 'and presented it to the municipal board.', note: '"ago" with time span.' },
    { prompt: 'All laboratory equipment must be sterilized', target: 'by the end of the shift', wrong: ['until the end of the shift', 'since the end of the shift', 'for the end of the shift'], context: 'according to sanitation protocols.', note: '"by" expressing deadline.' },
    { prompt: 'The exhibition will run', target: 'until next Sunday', wrong: ['by next Sunday', 'since next Sunday', 'during next Sunday'], context: 'before moving to the national gallery.', note: '"until" expressing time continuation.' },
    { prompt: 'We lived in Tokyo', target: 'for three years', wrong: ['since three years', 'during three years', 'in three years ago'], context: 'before relocating to Vancouver.', note: '"for" with duration span.' },
    { prompt: 'The weather has been unusually warm', target: 'since the beginning of the month', wrong: ['for the beginning of the month', 'during the beginning of the month', 'from the beginning of the month ago'], context: 'across the southern provinces.', note: '"since" with starting point.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Time Expressions: For, Since, During, Ago, By, Until');
}

// 3. Dependent Prepositions with Adjectives Pool
function generateDependentPrepositionsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Sarah is exceptionally', target: 'good at solving', wrong: ['good in solving', 'good with solving', 'good for solving'], context: 'complex differential equations in calculus.', note: 'The adjective "good" pairs with the preposition "at": good at + gerund.' },
    { prompt: 'Are you', target: 'interested in joining', wrong: ['interested to join', 'interested for joining', 'interested on joining'], context: 'the university competitive robotics team?', note: '"interested" pairs with "in": interested in + gerund.' },
    { prompt: 'The coastal village is', target: 'famous for its seafood', wrong: ['famous of its seafood', 'famous in its seafood', 'famous with its seafood'], context: 'and historic lighthouses.', note: '"famous" pairs with "for": famous for + noun.' },
    { prompt: 'The parents were immensely', target: 'proud of their daughter', wrong: ['proud for their daughter', 'proud with their daughter', 'proud in their daughter'], context: 'when she received the international fellowship.', note: '"proud" pairs with "of": proud of + noun.' },
    { prompt: 'Who is', target: 'responsible for locking', wrong: ['responsible to lock', 'responsible of locking', 'responsible with locking'], context: 'the chemistry laboratory after evening research hours?', note: '"responsible" pairs with "for": responsible for + gerund.' },
    { prompt: 'The junior researcher was', target: 'afraid of making', wrong: ['afraid to make', 'afraid in making', 'afraid with making'], context: 'calculation errors during the live experiment.', note: '"afraid" pairs with "of": afraid of + gerund.' },
    { prompt: 'The students were very', target: 'excited about traveling', wrong: ['excited for traveling', 'excited to traveling', 'excited with traveling'], context: 'to Rome for the classical archaeology symposium.', note: '"excited" pairs with "about": excited about + gerund.' },
    { prompt: 'My new smartphone is very', target: 'similar to the older model', wrong: ['similar with the older model', 'similar as the older model', 'similar of the older model'], context: 'in terms of exterior design and dimensions.', note: '"similar" pairs with "to": similar to + noun.' },
    { prompt: 'His experimental methodology is', target: 'different from the traditional approach', wrong: ['different than the traditional approach', 'different of the traditional approach', 'different with the traditional approach'], context: 'used in previous studies.', note: '"different" standardly pairs with "from": different from.' },
    { prompt: 'After hours of continuous study, he was', target: 'tired of memorizing', wrong: ['tired from memorizing', 'tired with memorizing', 'tired in memorizing'], context: 'vocabulary lists and needed a break.', note: '"tired" pairs with "of": tired of + gerund.' },
    { prompt: 'Professor Higgins is very', target: 'keen on exploring', wrong: ['keen in exploring', 'keen for exploring', 'keen with exploring'], context: 'new artificial intelligence architectures.', note: '"keen" pairs with "on": keen on + gerund.' },
    { prompt: 'The laboratory director is', target: 'worried about the budget cuts', wrong: ['worried for the budget cuts', 'worried of the budget cuts', 'worried with the budget cuts'], context: 'proposed for the upcoming fiscal year.', note: '"worried" pairs with "about": worried about.' },
    { prompt: 'The software engineer was', target: 'capable of designing', wrong: ['capable to design', 'capable for designing', 'capable in designing'], context: 'complex neural networks from scratch.', note: '"capable" pairs with "of": capable of + gerund.' },
    { prompt: 'They are very', target: 'fond of classical music', wrong: ['fond with classical music', 'fond for classical music', 'fond in classical music'], context: 'and frequently attend symphony concerts.', note: '"fond" pairs with "of": fond of + noun.' },
    { prompt: 'She was deeply', target: 'disappointed with the test result', wrong: ['disappointed of the test result', 'disappointed for the test result', 'disappointed at the test results'], context: 'after weeks of preparation.', note: '"disappointed" pairs with "with/in".' },
    { prompt: 'The technician is', target: 'familiar with the operating system', wrong: ['familiar to the operating system', 'familiar of the operating system', 'familiar in the operating system'], context: 'used in the high-performance computing cluster.', note: '"familiar" pairs with "with".' },
    { prompt: 'The new scholarship is', target: 'suitable for undergraduate students', wrong: ['suitable to undergraduate students', 'suitable of undergraduate students', 'suitable with undergraduate students'], context: 'majoring in environmental sciences.', note: '"suitable" pairs with "for".' },
    { prompt: 'He is completely', target: 'bad at remembering', wrong: ['bad in remembering', 'bad with remembering', 'bad of remembering'], context: 'people\'s names upon first meeting.', note: '"bad" pairs with "at": bad at + gerund.' },
    { prompt: 'The committee was', target: 'satisfied with the presentation', wrong: ['satisfied of the presentation', 'satisfied for the presentation', 'satisfied in the presentation'], context: 'delivered by the engineering team.', note: '"satisfied" pairs with "with".' },
    { prompt: 'The student was', target: 'nervous about the oral exam', wrong: ['nervous for the oral exam', 'nervous of the oral exam', 'nervous with the oral exam'], context: 'before the academic panel.', note: '"nervous" pairs with "about".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Adjectives with Prepositions');
}

// 4. Essential Everyday Phrasal Verbs Pool
function generatePhrasalVerbsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Please remember to', target: 'turn off the lights', wrong: ['turn out the lights', 'turn down to lights', 'turn over the lights'], context: 'before locking the laboratory at the end of the day.', note: '"turn off" means deactivate electrical appliances or lights.' },
    { prompt: 'I have been', target: 'looking for my room key', wrong: ['looking after my room key', 'looking up to my room key', 'looking into of my room key'], context: 'all morning, but I still cannot find it.', note: '"look for" means search to find something misplaced.' },
    { prompt: 'She never', target: 'gives up', wrong: ['gives off', 'gives out', 'gives in to'], context: 'when confronted with challenging scientific problems.', note: '"give up" means surrender or stop trying.' },
    { prompt: 'The commercial flight', target: 'took off on schedule', wrong: ['took up on schedule', 'took out on schedule', 'took over on schedule'], context: 'despite the light morning rain.', note: '"take off" means an aircraft leaves the ground.' },
    { prompt: 'He', target: 'put on his heavy wool coat', wrong: ['put up his heavy wool coat', 'put off his heavy wool coat', 'put out his heavy wool coat'], context: 'and stepped out into the freezing winter breeze.', note: '"put on" means dress in clothing.' },
    { prompt: 'Could you please', target: 'pick up the dropped textbooks', wrong: ['pick out the dropped textbooks', 'pick over the dropped textbooks', 'pick through the dropped textbooks'], context: 'from the floor for me?', note: '"pick up" means lift from a surface.' },
    { prompt: 'We need to', target: 'find out the departure time', wrong: ['find in the departure time', 'find up the departure time', 'find off the departure time'], context: 'of the express train to Geneva.', note: '"find out" means discover or ascertain information.' },
    { prompt: 'I usually', target: 'wake up at 6:30 AM', wrong: ['wake on at 6:30 AM', 'wake out at 6:30 AM', 'wake in at 6:30 AM'], context: 'on weekday mornings to go for a run.', note: '"wake up" means stop sleeping.' },
    { prompt: 'The nurse kindly', target: 'looked after the sick patient', wrong: ['looked for the sick patient', 'looked up the sick patient', 'looked into of the sick patient'], context: 'throughout the long recovery period.', note: '"look after" means take care of / attend to.' },
    { prompt: 'The lecture was', target: 'called off due to the storm', wrong: ['called out due to the storm', 'called up due to the storm', 'called down due to the storm'], context: 'and rescheduled for next Wednesday.', note: '"call off" means cancel an event.' },
    { prompt: 'Please', target: 'fill in the application form', wrong: ['fill up the application form', 'fill on the application form', 'fill over the application form'], context: 'with your contact details and signature.', note: '"fill in" means complete a form with information.' },
    { prompt: 'You can', target: 'look up unfamiliar vocabulary words', wrong: ['look on unfamiliar vocabulary words', 'look through to unfamiliar words', 'look into of unfamiliar words'], context: 'in the comprehensive digital dictionary.', note: '"look up" means consult a reference book/database.' },
    { prompt: 'He promised to', target: 'give back the borrowed notes', wrong: ['give off the borrowed notes', 'give away the borrowed notes', 'give out to the borrowed notes'], context: 'before the exam tomorrow morning.', note: '"give back" means return an item to its owner.' },
    { prompt: 'The plane landed, and passengers', target: 'got off the aircraft', wrong: ['got out of the aircraft', 'got down of the aircraft', 'got away the aircraft'], context: 'through the terminal jet bridge.', note: '"get off" is used for disembarking buses, trains, and planes.' },
    { prompt: 'Don\'t', target: 'throw away those reusable glass bottles', wrong: ['throw out to those reusable glass bottles', 'throw down of those bottles', 'throw off those reusable bottles'], context: '; they can be recycled.', note: '"throw away" means discard in the trash.' },
    { prompt: 'The professor asked the students to', target: 'hand in their term papers', wrong: ['hand on their term papers', 'hand up their term papers', 'hand out to their term papers'], context: 'by noon on Friday.', note: '"hand in" means submit assignments to an authority.' },
    { prompt: 'The young entrepreneur decided to', target: 'set up an innovative startup', wrong: ['set on an innovative startup', 'set out of an innovative startup', 'set down to an innovative startup'], context: 'focusing on renewable clean water.', note: '"set up" means establish or found an organization.' },
    { prompt: 'She decided to', target: 'take off her wet shoes', wrong: ['take out her wet shoes', 'take down her wet shoes', 'take away of her wet shoes'], context: 'before entering the carpeted room.', note: '"take off" means remove clothing or footwear.' },
    { prompt: 'Can you', target: 'turn on the air conditioner', wrong: ['turn in the air conditioner', 'turn up to the air conditioner', 'turn out the air conditioner'], context: ', please? The room is getting very warm.', note: '"turn on" means activate an electrical device.' },
    { prompt: 'The committee met to', target: 'work out a viable solution', wrong: ['work up to a viable solution', 'work through of a solution', 'work in to a viable solution'], context: 'for the complex scheduling conflict.', note: '"work out" means solve or develop a plan.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Everyday Phrasal Verbs');
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
        explanation: `Incorrect. "${w}" does not fit the preposition/phrasal pattern. ${item.note}`
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
      hint: `Hint: Focus on ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
