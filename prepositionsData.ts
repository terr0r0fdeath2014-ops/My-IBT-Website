import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';

export interface PrepositionTopic {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyRule: string;
  formula: string;
  examples: string[];
}

export const PREPOSITION_TOPICS: PrepositionTopic[] = [
  {
    id: 'prepositions_of_time',
    title: 'Prepositions of Time (In, On, At)',
    subtitle: 'Precise clock times, specific calendar days, and broad time periods',
    badge: 'Time Triangle',
    description: 'Use "AT" for precise clock times and specific points (at 5:00 PM, at night, at the weekend). Use "ON" for days and specific dates (on Monday, on May 12th, on my birthday). Use "IN" for longer periods, months, years, seasons, and parts of the day (in July, in 2026, in summer, in the morning).',
    keyRule: 'Pyramid Rule: AT = Exact Point (at 8 AM) -> ON = Day/Date (on Friday) -> IN = Broad Period (in summer, in 2026).',
    formula: 'AT: Clock / Point | ON: Days / Dates | IN: Months / Years / Seasons / Century',
    examples: [
      'The morning lecture starts at 9:00 AM sharp.',
      'We have a team meeting on Tuesday morning.',
      'Her birthday is on October 14th.',
      'Leaves change color in autumn.',
      'I was born in 2004.'
    ]
  },
  {
    id: 'prepositions_of_place',
    title: 'Prepositions of Place (In, On, At)',
    subtitle: 'Enclosed spaces, contact surfaces, and specific point locations',
    badge: 'Place Triangle',
    description: 'Use "AT" for a specific point or venue (at the bus stop, at the library, at home). Use "ON" for surfaces, lines, and floors (on the table, on the wall, on the second floor). Use "IN" for 3D enclosed spaces, cities, and countries (in the room, in London, in Spain).',
    keyRule: 'AT = Specific Point (at the entrance) -> ON = 2D Surface (on the wall) -> IN = 3D Container / Area / City / Country (in the box, in Paris).',
    formula: 'AT: Point/Venue | ON: Surface/Floor/Street | IN: 3D Enclosure/City/Country',
    examples: [
      'I will meet you at the main train station.',
      'There is a beautiful painting hanging on the wall.',
      'The students are studying in the library reading room.',
      'She lives on the fourth floor of the apartment building.',
      'They live in Tokyo, Japan.'
    ]
  },
  {
    id: 'movement_and_direction',
    title: 'Movement & Direction (To, Into, Out of, Across, Through)',
    subtitle: 'Dynamic motion towards destinations and through physical spaces',
    badge: 'Motion Paths',
    description: 'Use "to" for general destination (go to school). Use "into" for entering an enclosed space (walk into the room). Use "out of" for exiting (walk out of the building). Use "across" for from one side to the other (cross the street). Use "through" for moving inside a 3D tunnel or park.',
    keyRule: 'Destination = "to". Entering = "into". Exiting = "out of". Traversing 2D = "across". Traversing 3D = "through". Moving closer = "towards".',
    formula: 'Motion: Verb + [to / into / out of / across / through / towards] + Destination',
    examples: [
      'She walks to university every morning.',
      'The cat jumped into the cardboard box.',
      'They strolled through the forest path.',
      'Be careful when you walk across the busy street.',
      'He ran out of the burning house safely.'
    ]
  },
  {
    id: 'spatial_position',
    title: 'Spatial Position (Under, Over, Next to, Between, Behind, In front of)',
    subtitle: 'Relative physical locations and spatial orientation',
    badge: 'Position Map',
    description: 'Describe exactly where things are located relative to each other: "under" (below), "over" (above), "next to / beside" (adjacent), "between" (in middle of two), "behind" (at the back), "in front of" (facing front).',
    keyRule: 'Next to = beside. Between = middle of 2 items. In front of ≠ opposite (opposite = facing across a street/table). Behind = back of.',
    formula: 'Position: Subject + Verb to be + [Preposition of Position] + Reference Object',
    examples: [
      'The cat is sleeping under the wooden dining table.',
      'The coffee shop is located next to the bank.',
      'The bank is between the post office and the bakery.',
      'The teacher is standing in front of the whiteboard.',
      'There is a quiet garden behind the library.'
    ]
  },
  {
    id: 'dependent_prepositions',
    title: 'Dependent Prepositions & Collocations',
    subtitle: 'Adjective + Preposition (good at, interested in, afraid of, proud of)',
    badge: 'Word Combos',
    description: 'Many English adjectives and verbs pair fixed prepositions that MUST be learned as a unit: good at (skills), interested in (curiosity), afraid of (fear), listen to (attention), wait for (patience).',
    keyRule: 'Fixed partnerships: Good AT math, Interested IN art, Afraid OF spiders, Proud OF success, Listen TO music, Wait FOR the bus, Belong TO me.',
    formula: 'Fixed: Adjective/Verb + specific preposition + Object',
    examples: [
      'He is extremely good at mathematics and coding.',
      'Are you interested in learning foreign languages?',
      'She is afraid of flying in airplanes.',
      'Please listen to the teacher\'s instructions.',
      'We are waiting for the bus in the rain.'
    ]
  }
];

export function getPrepositionsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'prepositions_of_time':
      return generateTimeQuestions(starNumber, mSeed);
    case 'prepositions_of_place':
      return generatePlaceQuestions(starNumber, mSeed);
    case 'movement_and_direction':
      return generateMovementQuestions(starNumber, mSeed);
    case 'spatial_position':
      return generatePositionQuestions(starNumber, mSeed);
    case 'dependent_prepositions':
      return generateDependentQuestions(starNumber, mSeed);
    default:
      return generateTimeQuestions(starNumber, mSeed);
  }
}

// 1. Prepositions of Time (In, On, At) with monthly rotation
function generateTimeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'The flight takes off ______ 7:30 AM tomorrow.', ans: 'at', expl: 'Use "at" with precise clock times.', wrong1: 'in', wrong2: 'on', wrong3: 'to' },
    { stem: 'We always visit our grandparents ______ Sundays.', ans: 'on', expl: 'Use "on" with days of the week.', wrong1: 'in', wrong2: 'at', wrong3: 'for' },
    { stem: 'Her birthday is ______ October 24th.', ans: 'on', expl: 'Use "on" with specific calendar dates.', wrong1: 'in', wrong2: 'at', wrong3: 'during' },
    { stem: 'The summer Olympic Games took place ______ 2024.', ans: 'in', expl: 'Use "in" with calendar years.', wrong1: 'on', wrong2: 'at', wrong3: 'by' },
    { stem: 'I enjoy drinking a cup of green tea ______ the morning.', ans: 'in', expl: 'Use "in" with parts of the day (in the morning/afternoon/evening). Exception: at night.', wrong1: 'on', wrong2: 'at', wrong3: 'of' },
    { stem: 'It gets very cold and snowy here ______ winter.', ans: 'in', expl: 'Use "in" with seasons of the year.', wrong1: 'on', wrong2: 'at', wrong3: 'to' },
    { stem: 'The stars shine brightly in the sky ______ night.', ans: 'at', expl: 'Use "at" with "night" (at night).', wrong1: 'in', wrong2: 'on', wrong3: 'during the' },
    { stem: 'The semester begins ______ September.', ans: 'in', expl: 'Use "in" with months.', wrong1: 'on', wrong2: 'at', wrong3: 'from' },
    { stem: 'The fireworks show starts ______ midnight.', ans: 'at', expl: 'Use "at" with specific points like midnight or noon.', wrong1: 'in', wrong2: 'on', wrong3: 'during' },
    { stem: 'We celebrate New Year\'s Day ______ January 1st.', ans: 'on', expl: 'Use "on" with calendar dates.', wrong1: 'in', wrong2: 'at', wrong3: 'from' },
    { stem: 'Flowers blossom vibrantly ______ spring.', ans: 'in', expl: 'Use "in" with seasons.', wrong1: 'on', wrong2: 'at', wrong3: 'to' },
    { stem: 'She has a study session ______ Friday afternoon.', ans: 'on', expl: 'Use "on" for day + part of day (on Friday afternoon).', wrong1: 'in', wrong2: 'at', wrong3: 'during' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 7) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct time preposition: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Incorrect preposition for this time expression.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Does not follow the Time Pyramid rules.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect choice.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Remember: AT for clock times/night; ON for days/dates; IN for months/years/seasons/parts of day.',
      ruleTip: 'At (Clock) | On (Day/Date) | In (Month/Year/Season)'
    });
  }

  return questions;
}

// 2. Prepositions of Place (In, On, At) with monthly rotation
function generatePlaceQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'I will wait for you ______ the bus stop outside the station.', ans: 'at', expl: 'Use "at" for a specific point or venue.', wrong1: 'in', wrong2: 'on', wrong3: 'to' },
    { stem: 'There is an interesting map hanging ______ the classroom wall.', ans: 'on', expl: 'Use "on" for flat surfaces.', wrong1: 'at', wrong2: 'in', wrong3: 'inside' },
    { stem: 'She is currently living and working ______ Madrid.', ans: 'in', expl: 'Use "in" for cities and countries.', wrong1: 'at', wrong2: 'on', wrong3: 'to' },
    { stem: 'The students are sitting ______ the library reading room.', ans: 'in', expl: 'Use "in" for 3D enclosed rooms and spaces.', wrong1: 'on', wrong2: 'at the inside', wrong3: 'to' },
    { stem: 'He left his keys ______ the dining table.', ans: 'on', expl: 'Use "on" for the top surface of furniture.', wrong1: 'in', wrong2: 'at', wrong3: 'inside' },
    { stem: 'My brother is resting ______ home today because he is sick.', ans: 'at', expl: 'Fixed phrase: "at home".', wrong1: 'in', wrong2: 'on', wrong3: 'to' },
    { stem: 'Our apartment is located ______ the third floor.', ans: 'on', expl: 'Use "on" for floor levels of a building.', wrong1: 'in', wrong2: 'at', wrong3: 'by' },
    { stem: 'We arrived ______ the international airport two hours early.', ans: 'at', expl: 'Use "at" for airports and transportation terminals as points of activity.', wrong1: 'on', wrong2: 'to', wrong3: 'inside of' },
    { stem: 'The fresh fruit is stored ______ the wooden basket.', ans: 'in', expl: 'Use "in" for 3D container spaces.', wrong1: 'on', wrong2: 'at', wrong3: 'over' },
    { stem: 'She placed the coffee mug ______ the wooden desk.', ans: 'on', expl: 'Surface placement uses "on".', wrong1: 'in', wrong2: 'at', wrong3: 'into' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 9) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct place preposition: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Incorrect preposition for this spatial relationship.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Does not follow the Place Pyramid rules.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect option.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'AT for point/venue; ON for surface/floor; IN for container/city/country.',
      ruleTip: 'At (Point) | On (Surface) | In (Area/Enclosure)'
    });
  }

  return questions;
}

// 3. Movement & Direction with monthly rotation
function generateMovementQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'Every weekday morning, she commutes ______ work by subway.', ans: 'to', expl: 'Use "to" to indicate the destination of movement.', wrong1: 'into', wrong2: 'at', wrong3: 'in' },
    { stem: 'The children ran ______ the playground as soon as the bell rang.', ans: 'into', expl: 'Use "into" for entering an enclosed area or space.', wrong1: 'to inside', wrong2: 'on', wrong3: 'across' },
    { stem: 'He took his wallet ______ his backpack to pay the bill.', ans: 'out of', expl: 'Use "out of" for movement from the inside to the outside.', wrong1: 'from in', wrong2: 'off to', wrong3: 'away' },
    { stem: 'We walked ______ the pedestrian bridge over the river.', ans: 'across', expl: 'Use "across" for movement from one side to the opposite side.', wrong1: 'through', wrong2: 'into', wrong3: 'under' },
    { stem: 'The train traveled ______ a long dark tunnel in the mountain.', ans: 'through', expl: 'Use "through" for movement inside a 3D passage or tunnel.', wrong1: 'across', wrong2: 'into', wrong3: 'on' },
    { stem: 'The hikers walked ______ the mountain summit.', ans: 'towards', expl: 'Use "towards" for moving in the direction of something.', wrong1: 'into', wrong2: 'through', wrong3: 'over' },
    { stem: 'The boat sailed ______ the wide ocean channel.', ans: 'across', expl: 'Sailing from shore to shore uses "across".', wrong1: 'into', wrong2: 'under', wrong3: 'towards' },
    { stem: 'She stepped ______ the elevator when it reached the ground floor.', ans: 'out of', expl: 'Exiting an elevator uses "out of".', wrong1: 'into', wrong2: 'through', wrong3: 'away' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 11) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct preposition of motion: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Does not match the path of motion.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect directional word.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect preposition.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Consider the physical pathway: destination (to), entering (into), exiting (out of), crossing (across), inside passage (through).',
      ruleTip: 'To / Into / Out of / Across / Through'
    });
  }

  return questions;
}

// 4. Spatial Position with monthly rotation
function generatePositionQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'The cat is sleeping ______ the kitchen table.', ans: 'under', expl: 'Use "under" when an object is positioned below another.', wrong1: 'between', wrong2: 'over', wrong3: 'next' },
    { stem: 'The coffee shop is located ______ the bank and the bookstore.', ans: 'between', expl: 'Use "between" when an item is in the middle of two distinct landmarks.', wrong1: 'among', wrong2: 'behind', wrong3: 'next' },
    { stem: 'The pharmacy is right ______ to the post office.', ans: 'next', expl: 'Collocation: "next to" means beside or adjacent.', wrong1: 'near to', wrong2: 'close', wrong3: 'opposite' },
    { stem: 'The teacher stands ______ front of the classroom to address the students.', ans: 'in', expl: 'Fixed spatial phrase: "in front of".', wrong1: 'on', wrong2: 'at', wrong3: 'by' },
    { stem: 'There is a beautiful flower garden ______ the house.', ans: 'behind', expl: 'Use "behind" for the rear side of a building.', wrong1: 'between', wrong2: 'under', wrong3: 'across of' },
    { stem: 'A small flock of birds flew ______ the old clock tower.', ans: 'over', expl: 'Movement or position above without contact uses "over".', wrong1: 'under', wrong2: 'between', wrong3: 'behind' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 5) % items.length];

    questions.push({
      id: i + 1,
      question: `Select the correct spatial position word: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Does not fit the spatial context or grammar.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Incorrect preposition.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect option.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Look for context clues like "and" (between X and Y), "to" (next to), or "front of" (in front of).',
      ruleTip: 'Under / Between / Next to / In front of / Behind'
    });
  }

  return questions;
}

// 5. Dependent Prepositions & Collocations with monthly rotation
function generateDependentQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const items = [
    { stem: 'She is extremely good ______ solving complex math problems.', ans: 'at', expl: 'Use "good at + noun/gerund" to describe talent and skills.', wrong1: 'in', wrong2: 'for', wrong3: 'with' },
    { stem: 'Are you interested ______ joining our academic debate club?', ans: 'in', expl: 'Use "interested in + noun/gerund" for curiosity and enthusiasm.', wrong1: 'at', wrong2: 'on', wrong3: 'about' },
    { stem: 'Many small children are afraid ______ the dark.', ans: 'of', expl: 'Use "afraid of + noun" to describe fear.', wrong1: 'from', wrong2: 'at', wrong3: 'with' },
    { stem: 'Please listen carefully ______ the laboratory safety instructions.', ans: 'to', expl: 'Use "listen to + object" (never "listen something").', wrong1: 'at', wrong2: 'for', wrong3: 'with' },
    { stem: 'We had to wait ______ the bus for over twenty minutes.', ans: 'for', expl: 'Use "wait for + person/thing".', wrong1: 'to', wrong2: 'at', wrong3: 'after' },
    { stem: 'This blue notebook belongs ______ the university instructor.', ans: 'to', expl: 'Use "belong to + owner".', wrong1: 'for', wrong2: 'with', wrong3: 'of' },
    { stem: 'His parents are very proud ______ his academic achievements.', ans: 'of', expl: 'Collocation: "proud of + noun".', wrong1: 'for', wrong2: 'with', wrong3: 'about' },
    { stem: 'She was excited ______ traveling to London for the conference.', ans: 'about', expl: 'Collocation: "excited about + gerund/noun".', wrong1: 'with', wrong2: 'at', wrong3: 'for' }
  ];

  const questions: GrammarQuestion[] = [];

  for (let i = 0; i < 20; i++) {
    const item = items[(star * 3 + i * 2 + mSeed * 13) % items.length];

    questions.push({
      id: i + 1,
      question: `Choose the correct dependent preposition: "${item.stem}"`,
      sentenceWithBlank: item.stem,
      options: [
        { id: 'a', text: item.ans, isCorrect: true, explanation: item.expl },
        { id: 'b', text: item.wrong1, isCorrect: false, explanation: 'Incorrect dependent preposition collocation.' },
        { id: 'c', text: item.wrong2, isCorrect: false, explanation: 'Does not pair with this adjective/verb.' },
        { id: 'd', text: item.wrong3, isCorrect: false, explanation: 'Incorrect choice.' }
      ].sort(() => 0.5 - ((i + star + mSeed) % 3) / 2).map((opt, oIdx) => ({ ...opt, id: String.fromCharCode(97 + oIdx) })),
      hint: 'Fixed combinations: Good AT | Interested IN | Afraid OF | Listen TO | Wait FOR | Belong TO | Proud OF.',
      ruleTip: 'Adjective/Verb + Dependent Preposition'
    });
  }

  return questions;
}
