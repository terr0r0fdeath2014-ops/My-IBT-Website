import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A2_NOUNS_QUANTIFIERS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'countable_uncountable_a2',
    title: 'Countable vs. Uncountable Nouns',
    subtitle: 'Singular/plural items vs. mass nouns (water, advice, luggage, money)',
    badge: 'Count vs. Non-Count',
    description: 'Countable nouns are individual objects that can be counted with numbers (one book, two books, three apples) and can take singular (a/an) or plural (-s) forms. Uncountable nouns are materials, liquids, abstract concepts, or mass categories (water, information, advice, furniture, luggage, homework, money, bread, weather) that CANNOT be made plural and DO NOT take "a/an".',
    keyRule: 'Countable: a book -> three books. Uncountable: water, advice, information, furniture, luggage (NEVER say "an advice", "two furnitures", or "informations"). To count mass nouns, use containers/units: "a piece of advice", "a bottle of water", "a slice of bread".',
    formula: 'Countable: singular (a/an + noun) OR plural (noun + -s) | Uncountable: singular verb agreement ONLY (The information is helpful)',
    examples: [
      'The professor provided very helpful advice (not "an advice") on my research paper.',
      'We bought three new books and two notebooks at the campus bookstore.',
      'How much luggage (not "luggages") are you taking on the flight?',
      'All the scientific equipment in the chemistry lab is (not "are") brand new.',
      'She ordered a glass of fresh orange juice and two slices of toast.'
    ]
  },
  {
    id: 'quantifiers_much_many_a_lot',
    title: 'Much, Many & A Lot of / Lots of',
    subtitle: 'Expressing large quantities with countable and uncountable nouns',
    badge: 'Quantity & Large Amounts',
    description: 'Use "many" with plural COUNTABLE nouns in questions, negatives, and affirmatives ("How many books?"). Use "much" with UNCOUNTABLE nouns, primarily in questions and negative statements ("There isn\'t much time left"). Use "a lot of" or "lots of" with BOTH countable and uncountable nouns, especially in positive affirmative sentences.',
    keyRule: 'Countable Plural: many / a lot of (many students, a lot of cars). Uncountable: much / a lot of (much time, a lot of information). In positive statements, prefer "a lot of".',
    formula: 'Countable: many + Plural Nouns | Uncountable: much + Non-Count Noun | Universal: a lot of + Plural/Non-Count',
    examples: [
      'There are many international students enrolled in our university.',
      'We don\'t have much time before the boarding gate closes.',
      'The company invested a lot of money in artificial intelligence research.',
      'How many scientific experiments did you conduct this semester?',
      'How much sugar do you want in your morning coffee?'
    ]
  },
  {
    id: 'a_few_vs_a_little',
    title: 'A Few vs. A Little (& Few vs. Little)',
    subtitle: 'Small quantities: positive ("some") vs. negative ("almost none")',
    badge: 'Small Quantities',
    description: 'Use "a few" with plural COUNTABLE nouns (means "some / a small positive amount": a few friends, a few apples). Use "a little" with UNCOUNTABLE nouns (means "some / a small amount": a little water, a little patience). Without "a" ("few" or "little"), the meaning becomes negative, meaning "almost none / not enough".',
    keyRule: 'Countable Plural: a few (= a small number, positive) vs. few (= almost none). Uncountable: a little (= some, positive) vs. little (= almost none).',
    formula: 'Countable: (a) few + Plural Nouns | Uncountable: (a) little + Non-Count Noun',
    examples: [
      'I have a few questions to ask the guest lecturer (positive: 3 or 4 questions).',
      'Could you please add a little milk to my black tea?',
      'Unfortunately, few students attended the early 7:00 AM tutorial (almost none).',
      'There is little hope that the storm will clear before midnight (almost no hope).',
      'We still have a few minutes before the train departs.'
    ]
  },
  {
    id: 'indefinite_pronouns',
    title: 'Indefinite Pronouns (some-, any-, no-, every-)',
    subtitle: 'Referring to unspecified people, things, and places',
    badge: 'Indefinite Forms',
    description: 'Indefinite pronouns refer to people (-one, -body: someone, anyone, everyone, no one), things (-thing: something, anything, everything, nothing), and places (-where: somewhere, anywhere, everywhere, nowhere). They ALWAYS take SINGULAR verb agreement (e.g., "Everyone is ready", NOT "Everyone are ready"). Use some- in positive sentences, any- in negatives and questions, and no- with positive verbs for negative meaning.',
    keyRule: 'All indefinite pronouns take SINGULAR verbs: Everyone is, Someone has, Nothing was. Avoid double negatives: "I didn\'t see anyone" OR "I saw no one" (never "didn\'t see no one").',
    formula: 'People: someone / anyone / everyone / no one | Things: something / anything / everything / nothing | Places: somewhere / anywhere / everywhere / nowhere',
    examples: [
      'Someone left their black umbrella in the conference room.',
      'Is there anything I can do to help you with the research project?',
      'Everyone in our study group is (not "are") prepared for the final test.',
      'I looked everywhere for my keys, but I found nothing.',
      'She didn\'t tell anyone about the surprise announcement.'
    ]
  },
  {
    id: 'reflexive_pronouns',
    title: 'Reflexive Pronouns (myself, yourself, themselves...)',
    subtitle: 'When the subject and object are the same person or for emphasis',
    badge: 'Self & Selves',
    description: 'Use reflexive pronouns when the person doing the action is also receiving the action (Subject = Object: "He looked at himself in the mirror"). They are also used for emphasis ("by myself" = alone/without help; "The professor herself checked the results"). Forms: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.',
    keyRule: 'Singular: myself, yourself, himself, herself, itself. Plural: ourselves, yourselves, themselves. "By myself / on my own" means alone.',
    formula: 'Reflexive: Subject + Verb + Reflexive Pronoun | Emphatic / Alone: by + Reflexive Pronoun',
    examples: [
      'The young boy taught himself how to write computer code.',
      'Did you assemble this wooden desk all by yourself?',
      'The students prepared themselves thoroughly for the debate tournament.',
      'She accidentally cut herself while slicing fresh vegetables in the kitchen.',
      'The automated robotic arm can calibrate itself without human intervention.'
    ]
  }
];

export function getA2NounsQuantifiersStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'countable_uncountable_a2':
      return generateCountUncountQuestions(starNumber, mSeed);
    case 'quantifiers_much_many_a_lot':
      return generateMuchManyQuestions(starNumber, mSeed);
    case 'a_few_vs_a_little':
      return generateFewLittleQuestions(starNumber, mSeed);
    case 'indefinite_pronouns':
      return generateIndefinitePronounsQuestions(starNumber, mSeed);
    case 'reflexive_pronouns':
      return generateReflexivePronounsQuestions(starNumber, mSeed);
    default:
      return generateCountUncountQuestions(starNumber, mSeed);
  }
}

// 1. Countable vs Uncountable Pool
function generateCountUncountQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The professor gave us very valuable', target: 'advice', wrong: ['an advice', 'advices', 'some advices'], context: 'on how to structure our academic dissertation.', note: '"Advice" is uncountable; never say "an advice" or "advices".' },
    { prompt: 'All the electronic', target: 'equipment is', wrong: ['equipments are', 'equipment are', 'equipments is'], context: 'inspected by certified technicians every month.', note: '"Equipment" is uncountable and takes singular verb "is".' },
    { prompt: 'How much', target: 'luggage', wrong: ['luggages', 'a luggage', 'pieces of luggages'], context: 'did you check in at the airline counter?', note: '"Luggage" is uncountable; do not add -s.' },
    { prompt: 'The weather report provided essential', target: 'information', wrong: ['an information', 'informations', 'some informations'], context: 'about the approaching coastal hurricane.', note: '"Information" is uncountable.' },
    { prompt: 'We ordered three hot drinks and two', target: 'cups of coffee', wrong: ['coffees cups', 'cup of coffees', 'coffee cups of'], context: 'for our morning study group.', note: 'Count mass nouns with counting units: "cups of coffee".' },
    { prompt: 'The dining room', target: 'furniture looks', wrong: ['furnitures look', 'furniture look', 'furnitures looks'], context: 'very elegant in the modern renovated hall.', note: '"Furniture" is uncountable and takes singular verb "looks".' },
    { prompt: 'I have too much', target: 'homework to complete', wrong: ['homeworks to complete', 'a homework to complete', 'homeworks to completing'], context: 'before tomorrow morning\'s classes.', note: '"Homework" is uncountable.' },
    { prompt: 'Could you give me a', target: 'piece of paper', wrong: ['paper', 'papers piece', 'paper piece'], context: 'so I can write down the lab coordinator\'s phone number?', note: '"A piece of paper" is the countable unit for paper.' },
    { prompt: 'The heavy', target: 'traffic was', wrong: ['traffics were', 'traffic were', 'traffics was'], context: 'causing severe delays across the downtown bridges.', note: '"Traffic" is uncountable and takes singular verb "was".' },
    { prompt: 'She bought a loaf of fresh', target: 'bread and a carton of milk', wrong: ['breads and a carton of milks', 'bread and a carton of milks', 'breads and a carton of milk'], context: 'at the neighborhood grocery.', note: '"Bread" and "milk" are uncountable mass nouns.' },
    { prompt: 'The scientific research provided compelling', target: 'evidence', wrong: ['an evidence', 'evidences', 'some evidences'], context: 'supporting the new renewable energy model.', note: '"Evidence" is uncountable.' },
    { prompt: 'He doesn\'t carry much cash;', target: 'money is', wrong: ['moneys are', 'money are', 'moneys is'], context: 'stored securely on his digital payment app.', note: '"Money" is uncountable and takes singular "is".' },
    { prompt: 'We need to buy three new', target: 'chairs for the office', wrong: ['furnitures for the office', 'chair for the office', 'pieces of furniture chairs for the office'], context: 'before the client meeting on Thursday.', note: '"Chairs" are countable, whereas "furniture" is uncountable.' },
    { prompt: 'The clean alpine', target: 'air feels', wrong: ['airs feel', 'air feel', 'airs feels'], context: 'refreshing after hours in the city.', note: '"Air" is uncountable -> singular "feels".' },
    { prompt: 'How many', target: 'suitcases', wrong: ['luggage', 'luggages', 'baggage'], context: 'are you carrying with you on the train?', note: '"Suitcases" is countable plural, paired with "How many".' },
    { prompt: 'The university offers excellent', target: 'accommodation', wrong: ['accommodations are', 'an accommodation', 'some accommodations are'], context: 'for incoming international exchange students.', note: '"Accommodation" in British/academic English is uncountable.' },
    { prompt: 'Could you pass me a', target: 'slice of cheese', wrong: ['cheese', 'cheeses', 'slice of cheeses'], context: ', please?', note: '"A slice of cheese" is the countable unit.' },
    { prompt: 'Her deep', target: 'knowledge of chemistry', wrong: ['knowledges of chemistry', 'a knowledge of chemistry', 'knowledges of chemistries'], context: 'impressed the panel of interviewers.', note: '"Knowledge" is uncountable.' },
    { prompt: 'There were dozens of', target: 'people waiting', wrong: ['persons waiting', 'peoples waiting', 'person waiting'], context: 'outside the concert auditorium doors.', note: '"People" is the standard plural for persons.' },
    { prompt: 'I would like a glass of cold', target: 'water, please', wrong: ['waters, please', 'a water, please', 'some waters, please'], context: 'with a slice of fresh lemon.', note: '"Water" is uncountable; pair with "a glass of cold water".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Countable vs. Uncountable Nouns');
}

// 2. Much, Many & A Lot Of Pool
function generateMuchManyQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'There aren\'t', target: 'many students', wrong: ['much students', 'a lot students', 'much student'], context: 'in the auditorium today because of the holiday.', note: 'Plural countable noun "students" takes "many" in negatives.' },
    { prompt: 'We don\'t have', target: 'much time', wrong: ['many time', 'many times', 'a lot time'], context: 'before the boarding gate closes at the airport.', note: 'Uncountable noun "time" takes "much" in negative sentences.' },
    { prompt: 'The technology company invested', target: 'a lot of money', wrong: ['many money', 'much moneys', 'many moneys'], context: 'in developing renewable battery technologies.', note: 'Positive affirmative statements prefer "a lot of money".' },
    { prompt: 'How', target: 'many books', wrong: ['much books', 'many book', 'much book'], context: 'did you borrow from the university library this semester?', note: 'Countable plural takes "How many books".' },
    { prompt: 'How', target: 'much sugar', wrong: ['many sugar', 'much sugars', 'many sugars'], context: 'do you usually add to your morning espresso?', note: 'Uncountable mass noun takes "How much sugar".' },
    { prompt: 'She has', target: 'a lot of friends', wrong: ['much friends', 'many friend', 'much friend'], context: 'from all around the world in her international class.', note: 'Affirmative statement takes "a lot of friends" or "many friends".' },
    { prompt: 'Did you take', target: 'many photographs', wrong: ['much photographs', 'much photograph', 'a lot photograph'], context: 'during your visit to the historical cathedral?', note: 'Countable plural in questions takes "many photographs".' },
    { prompt: 'There isn\'t', target: 'much space', wrong: ['many space', 'many spaces', 'a lot space'], context: 'in the trunk of this compact sports car.', note: 'Uncountable "space" in negative takes "much space".' },
    { prompt: 'Professor Davis published', target: 'a lot of research papers', wrong: ['much research papers', 'much research paper', 'many research paper'], context: 'over his forty-year academic career.', note: 'Plural countable in affirmative takes "a lot of research papers".' },
    { prompt: 'How', target: 'many languages', wrong: ['much languages', 'many language', 'much language'], context: 'can you speak with conversational fluency?', note: 'Countable plural takes "How many languages".' },
    { prompt: 'How', target: 'much traffic', wrong: ['many traffic', 'many traffics', 'much traffics'], context: 'was there on the expressway this morning?', note: 'Uncountable takes "How much traffic".' },
    { prompt: 'He doesn\'t eat', target: 'much meat', wrong: ['many meat', 'many meats', 'a lot meat'], context: 'because he prefers a plant-based vegetarian diet.', note: 'Uncountable takes "much meat".' },
    { prompt: 'There were', target: 'a lot of people', wrong: ['much people', 'much peoples', 'many person'], context: 'attending the solar energy summit.', note: 'Countable plural takes "a lot of people".' },
    { prompt: 'I don\'t have', target: 'many coins', wrong: ['much coins', 'much coin', 'a lot coin'], context: 'in my wallet; only banknotes.', note: 'Countable plural takes "many coins".' },
    { prompt: 'How', target: 'much water', wrong: ['many water', 'many waters', 'much waters'], context: 'should an athlete drink during endurance training?', note: 'Uncountable takes "How much water".' },
    { prompt: 'The library contains', target: 'a lot of ancient manuscripts', wrong: ['much ancient manuscripts', 'much ancient manuscript', 'many ancient manuscript'], context: 'dating back to the medieval era.', note: 'Plural in positive takes "a lot of ancient manuscripts".' },
    { prompt: 'We didn\'t see', target: 'many tourists', wrong: ['much tourists', 'much tourist', 'a lot tourist'], context: 'at the mountain sanctuary during the winter season.', note: 'Negative with countable plural takes "many tourists".' },
    { prompt: 'There was', target: 'a lot of noise', wrong: ['many noise', 'many noises', 'much noises'], context: 'coming from the street construction site.', note: 'Uncountable in positive takes "a lot of noise".' },
    { prompt: 'How', target: 'many questions', wrong: ['much questions', 'many question', 'much question'], context: 'are included in the TOEFL Reading diagnostic test?', note: 'Countable plural takes "How many questions".' },
    { prompt: 'I haven\'t got', target: 'much patience', wrong: ['many patience', 'many patiences', 'a lot patience'], context: 'for people who arrive late to scheduled meetings.', note: 'Uncountable noun takes "much patience".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Much, Many & A Lot Of');
}

// 3. A Few vs. A Little Pool
function generateFewLittleQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'I still have', target: 'a few questions', wrong: ['a little questions', 'a little question', 'few question'], context: 'to ask before the lecture concludes.', note: 'Countable plural takes "a few questions" (positive small number).' },
    { prompt: 'Could you please pour', target: 'a little milk', wrong: ['a few milk', 'a few milks', 'little milks'], context: 'into my morning black coffee?', note: 'Uncountable mass noun takes "a little milk" (positive small amount).' },
    { prompt: 'Unfortunately,', target: 'few students', wrong: ['a few student', 'little students', 'a little students'], context: 'attended the optional tutorial at 7:00 AM.', note: '"Few students" without "a" conveys negative meaning (almost no students).' },
    { prompt: 'There is', target: 'little hope', wrong: ['a few hope', 'few hope', 'a few hopes'], context: 'that the delayed flight will depart before midnight.', note: '"Little hope" without "a" conveys negative meaning (almost no hope).' },
    { prompt: 'We have', target: 'a few minutes', wrong: ['a little minutes', 'a little minute', 'few minute'], context: 'before the passenger train departs from platform 3.', note: 'Countable plural takes "a few minutes".' },
    { prompt: 'She speaks', target: 'a little Italian', wrong: ['a few Italian', 'a few Italians', 'few Italian'], context: 'because her grandparents lived in Rome.', note: 'Language skill (uncountable) takes "a little Italian".' },
    { prompt: 'Lucas has', target: 'a few close friends', wrong: ['a little close friends', 'a little close friend', 'few close friend'], context: 'who study with him at the medical academy.', note: 'Countable plural takes "a few close friends".' },
    { prompt: 'Add just', target: 'a little salt', wrong: ['a few salt', 'a few salts', 'few salt'], context: 'to the vegetable soup to enhance its flavor.', note: 'Uncountable noun takes "a little salt".' },
    { prompt: 'He has', target: 'little experience', wrong: ['few experience', 'a few experience', 'a few experiences'], context: 'in managing large corporate engineering projects.', note: 'Uncountable noun in negative context takes "little experience".' },
    { prompt: 'There were only', target: 'a few cars', wrong: ['a little cars', 'a little car', 'few car'], context: 'parked in the university lot on Sunday afternoon.', note: 'Countable plural takes "a few cars".' },
    { prompt: 'We need', target: 'a little time', wrong: ['a few time', 'a few times', 'few time'], context: 'to review the experimental data before the presentation.', note: 'Uncountable takes "a little time".' },
    { prompt: 'The researcher found', target: 'a few errors', wrong: ['a little errors', 'a little error', 'few error'], context: 'in the statistical calculation sheet.', note: 'Countable plural takes "a few errors".' },
    { prompt: 'I have', target: 'a little money left', wrong: ['a few money left', 'a few moneys left', 'few money left'], context: 'to buy a sandwich at the airport kiosk.', note: 'Uncountable takes "a little money".' },
    { prompt: 'Very', target: 'few people', wrong: ['little people', 'a little people', 'few person'], context: 'know the secret recipe for this traditional pastry.', note: 'Countable plural in negative sense takes "few people".' },
    { prompt: 'Can you give me', target: 'a little advice', wrong: ['a few advice', 'a few advices', 'few advices'], context: 'on how to prepare for the oral exam?', note: '"Advice" is uncountable -> takes "a little advice".' },
    { prompt: 'She bought', target: 'a few apples', wrong: ['a little apples', 'a little apple', 'few apple'], context: 'and a basket of fresh strawberries at the market.', note: 'Countable plural takes "a few apples".' },
    { prompt: 'There was', target: 'little traffic', wrong: ['few traffic', 'a few traffic', 'a few traffics'], context: 'on the rural highway at dawn.', note: 'Uncountable takes "little traffic".' },
    { prompt: 'We will stay in Barcelona for', target: 'a few days', wrong: ['a little days', 'a little day', 'few day'], context: 'before taking the high-speed train to Madrid.', note: 'Countable plural takes "a few days".' },
    { prompt: 'Just', target: 'a little patience', wrong: ['a few patience', 'a few patiences', 'few patience'], context: 'is required to master complex English grammar.', note: 'Uncountable takes "a little patience".' },
    { prompt: 'The committee made', target: 'a few minor changes', wrong: ['a little minor changes', 'a little minor change', 'few minor change'], context: 'to the departmental policy handbook.', note: 'Countable plural takes "a few minor changes".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'A Few vs. A Little');
}

// 4. Indefinite Pronouns Pool
function generateIndefinitePronounsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '', target: 'Someone left', wrong: ['Someone have left', 'Anyone left', 'No one have left'], context: 'their leather notebook on the lecture podium.', note: '"Someone" is singular and takes singular verb forms.' },
    { prompt: 'Is there', target: 'anything', wrong: ['something', 'nothing', 'everything'], context: 'I can do to assist you with the laboratory setup?', note: 'Questions typically use "anything".' },
    { prompt: 'Everyone in the research department', target: 'is working', wrong: ['are working', 'were working', 'have working'], context: 'towards the grant deadline.', note: '"Everyone" is grammatically singular and takes "is working".' },
    { prompt: 'I looked', target: 'everywhere', wrong: ['somewhere', 'anywhere', 'nowhere'], context: 'for my lost room keys, but they were nowhere to be found.', note: '"everywhere" means in all places.' },
    { prompt: 'She didn\'t tell', target: 'anyone', wrong: ['no one', 'someone', 'nobody'], context: 'about the confidential merger proposal.', note: 'Negative sentence with "didn\'t" pairs with "anyone" to avoid double negatives.' },
    { prompt: 'There is', target: 'something strange', wrong: ['anything strange', 'nothing strange', 'everything strange'], context: 'happening with the optical telescope sensor.', note: 'Positive sentence takes "something".' },
    { prompt: '', target: 'Nobody knows', wrong: ['Nobody know', 'Nobody are know', 'Anybody knows'], context: 'the exact origins of this ancient stone monument.', note: '"Nobody" is singular and takes third-person singular "knows".' },
    { prompt: 'We didn\'t go', target: 'anywhere special', wrong: ['nowhere special', 'somewhere special', 'everywhere special'], context: 'over the weekend; we stayed home and rested.', note: 'Negative sentence pairs with "anywhere".' },
    { prompt: '', target: 'Everything is', wrong: ['Everything are', 'Everything were', 'Everythings are'], context: 'organized neatly inside the new medical supply cabinets.', note: '"Everything" takes singular verb "is".' },
    { prompt: 'I was so thirsty, but there was', target: 'nothing to drink', wrong: ['anything to drink', 'something to drink', 'everything to drink'], context: 'in the refrigerator.', note: '"nothing" expresses absence in affirmative sentence.' },
    { prompt: 'Can', target: 'anyone explain', wrong: ['someone to explain', 'anyone explains', 'everyone to explain'], context: 'the mathematical derivation on the chalkboard?', note: 'Question takes "Can anyone explain...".' },
    { prompt: 'Let\'s go', target: 'somewhere quiet', wrong: ['anywhere quiet', 'nowhere quiet', 'everywhere quiet'], context: 'where we can discuss the project without interruptions.', note: 'Positive suggestion takes "somewhere".' },
    { prompt: '', target: 'No one has', wrong: ['No one have', 'Anyone has', 'Someone have'], context: 'volunteered to lead the environmental cleanup committee yet.', note: '"No one" takes singular "has".' },
    { prompt: 'She has', target: 'something important', wrong: ['anything important', 'nothing important', 'everything important'], context: 'to announce at today\'s staff briefing.', note: 'Positive takes "something important".' },
    { prompt: 'Is', target: 'anybody home', wrong: ['somebody home', 'nobody home', 'everybody home'], context: 'right now? I came to deliver the courier package.', note: 'Question takes "Is anybody home?".' },
    { prompt: 'The fire alarm rang, and', target: 'everyone evacuated', wrong: ['someone evacuated', 'anyone evacuated', 'no one evacuated'], context: 'the building safely in under three minutes.', note: '"everyone" refers to all people.' },
    { prompt: 'I have', target: 'nowhere to go', wrong: ['anywhere to go', 'somewhere to go', 'everywhere to go'], context: 'until the storm passes, so I will stay in the library.', note: '"nowhere" indicates no available place.' },
    { prompt: 'Did you hear', target: 'anything unusual', wrong: ['something unusual', 'nothing unusual', 'everything unusual'], context: 'during the night outside the dormitory?', note: 'Question takes "anything unusual".' },
    { prompt: '', target: 'Somebody is knocking', wrong: ['Somebody are knocking', 'Anybody is knocking', 'Nobody are knocking'], context: 'on the front entrance door.', note: '"Somebody" takes singular "is knocking".' },
    { prompt: 'You can find fresh organic produce', target: 'everywhere', wrong: ['nowhere', 'somewhere', 'anywhere'], context: 'in this vibrant agricultural district.', note: '"everywhere" means across all locations.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Indefinite Pronouns');
}

// 5. Reflexive Pronouns Pool
function generateReflexivePronounsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The young programmer taught', target: 'himself', wrong: ['him', 'his', 'hisself'], context: 'how to build mobile applications in high school.', note: 'Male singular reflexive pronoun is "himself".' },
    { prompt: 'Did you assemble this complex furniture set all by', target: 'yourself', wrong: ['you', 'your', 'yourselves'], context: ', Oliver?', note: 'Singular address to Oliver takes "yourself".' },
    { prompt: 'The students prepared', target: 'themselves', wrong: ['theirselves', 'them', 'theirs'], context: 'thoroughly for the intercollegiate debate tournament.', note: 'Plural reflexive pronoun is "themselves".' },
    { prompt: 'Sarah accidentally cut', target: 'herself', wrong: ['her', 'hers', 'herselves'], context: 'while slicing fresh bread in the kitchen.', note: 'Female singular reflexive pronoun is "herself".' },
    { prompt: 'We enjoyed', target: 'ourselves', wrong: ['ourself', 'us', 'ours'], context: 'tremendously at the botanical conservatory yesterday.', note: 'Plural "we" takes "ourselves".' },
    { prompt: 'The automated Mars rover can navigate and calibrate', target: 'itself', wrong: ['it', 'its', 'itselfs'], context: 'without human remote control.', note: 'Inanimate object takes "itself".' },
    { prompt: 'I accidentally burned', target: 'myself', wrong: ['me', 'my', 'mineself'], context: 'on the hot stove while cooking dinner.', note: '"I" takes "myself".' },
    { prompt: 'Please help', target: 'yourselves', wrong: ['yourself', 'you', 'yours'], context: 'to the complimentary refreshments, ladies and gentlemen.', note: 'Plural address to multiple guests takes "yourselves".' },
    { prompt: 'Professor Higgins', target: 'himself verified', wrong: ['him verified', 'his verified', 'hisself verified'], context: 'the accuracy of the historical translation.', note: 'Emphatic pronoun for male singular is "himself".' },
    { prompt: 'The children built a wooden treehouse all by', target: 'themselves', wrong: ['theirselves', 'them', 'theirself'], context: 'in the backyard.', note: 'Plural reflexive takes "themselves".' },
    { prompt: 'You should believe in', target: 'yourself', wrong: ['you', 'your', 'yourselves'], context: 'when stepping up to present your ideas to the board.', note: 'Singular address takes "yourself".' },
    { prompt: 'She lives by', target: 'herself', wrong: ['her', 'hers', 'herselfs'], context: 'in a cozy apartment near the university campus.', note: '"By herself" means alone.' },
    { prompt: 'The computer system reboots', target: 'itself', wrong: ['it', 'its', 'itselves'], context: 'automatically every Sunday at 3:00 AM.', note: 'System takes "itself".' },
    { prompt: 'We promised', target: 'ourselves', wrong: ['ourself', 'us', 'ours'], context: 'that we would finish the research project before the weekend.', note: '"We" takes "ourselves".' },
    { prompt: 'I introduced', target: 'myself', wrong: ['me', 'my', 'mineself'], context: 'to the keynote speaker after the lecture concluded.', note: '"I" takes "myself".' },
    { prompt: 'They blamed', target: 'themselves', wrong: ['theirselves', 'them', 'theirs'], context: 'for the misunderstanding during the team presentation.', note: '"They" takes "themselves".' },
    { prompt: 'Be careful with that sharp knife, or you will hurt', target: 'yourself', wrong: ['you', 'your', 'yourselves'], context: '!', note: 'Singular warning takes "yourself".' },
    { prompt: 'The author', target: 'herself signed', wrong: ['her signed', 'hers signed', 'herselfs signed'], context: 'copies of her new novel for the readers.', note: 'Emphatic female singular is "herself".' },
    { prompt: 'We painted the entire laboratory interior all by', target: 'ourselves', wrong: ['ourself', 'us', 'ours'], context: 'over the spring break.', note: '"We" takes "ourselves".' },
    { prompt: 'He looked at', target: 'himself', wrong: ['him', 'his', 'hisself'], context: 'in the mirror before stepping onto the stage.', note: '"He" takes "himself".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Reflexive Pronouns');
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
        explanation: `Incorrect. "${w}" does not follow the quantifier/pronoun rule. ${item.note}`
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
      hint: `Hint: Apply the rule for ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
