import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A2_COMPARISONS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'comparative_adjectives',
    title: 'Comparative Adjectives (-er than / more ... than)',
    subtitle: 'Comparing two people, objects, places, or situations',
    badge: '-er / more ... than',
    description: 'Use comparative adjectives to compare two entities. Short adjectives (1 syllable) add "-er" (faster, taller, cheaper). Adjectives ending in -y change "y" to "-ier" (easier, happier). Long adjectives (2+ syllables) use "more + adjective" (more expensive, more interesting). Always follow with "than" when the second item is mentioned.',
    keyRule: 'Short: Adj + -er + than. Ends in -y: -ier + than. Long (2+ syllables): more + Adj + than. Never combine "more" with "-er" (never say "more faster").',
    formula: 'Short: S1 + is/are + Adj-er + than + S2 | Long: S1 + is/are + more + Adj + than + S2',
    examples: [
      'The bullet train is faster than the intercity bus.',
      'Learning English with interactive apps is easier than reading a static grammar book.',
      'A diamond ring is more expensive than a silver necklace.',
      'Tokyo is larger than Kyoto in population and geographic size.',
      'My new laptop is much lighter than my old workstation.'
    ]
  },
  {
    id: 'superlative_adjectives',
    title: 'Superlative Adjectives (the -est / the most ...)',
    subtitle: 'Describing the #1 extreme in a group, category, or world',
    badge: 'the -est / the most',
    description: 'Use superlative adjectives when comparing three or more things and highlighting the absolute highest or lowest in quality. Short adjectives take "the + adjective-est" (the highest, the fastest). Adjectives ending in -y take "the + -iest" (the easiest). Long adjectives take "the most + adjective" (the most beautiful). Always include "the" before superlatives.',
    keyRule: 'Always use "the" before superlatives! Short: the + Adj-est (the tallest). Ends in -y: the + Adj-iest (the heaviest). Long: the most + Adj (the most popular).',
    formula: 'Short: S + is/are + the + Adj-est + in/of ... | Long: S + is/are + the most + Adj + in/of ...',
    examples: [
      'Mount Everest is the highest mountain on planet Earth.',
      'The blue whale is the largest animal in the world.',
      'Physics is considered the most difficult subject in our semester.',
      'This is the oldest historical library in the entire country.',
      'She is the most talented violinist in the youth orchestra.'
    ]
  },
  {
    id: 'equality_as_as',
    title: 'Equality & Similarity: (not) as ... as',
    subtitle: 'Expressing equal qualities or differences in degree',
    badge: 'as ... as',
    description: 'Use "as + base adjective + as" to say that two things have the exact same level of a quality. Use "not as + base adjective + as" (or "not so ... as") to say that the first item is LESS than the second item. The adjective between "as ... as" ALWAYS remains in its simple base form without "-er" or "more".',
    keyRule: 'Equal: as + [Base Adjective] + as. Unequal / Less: not as + [Base Adjective] + as. Never put comparative forms inside: say "as fast as" (NOT "as faster as").',
    formula: 'Equal: S1 + is as + Adj + as + S2 | Negative: S1 + is not as + Adj + as + S2',
    examples: [
      'Digital photography is as popular as traditional film photography today.',
      'The train journey is not as long as traveling by highway bus.',
      'Is your new neighborhood as quiet as your old one?',
      'She is as intelligent as her older sister.',
      'This second exam was not as difficult as the midterm test.'
    ]
  },
  {
    id: 'irregular_comparatives',
    title: 'Irregular Comparisons (good, bad, far, little, many)',
    subtitle: 'Special adjectives with completely unique comparison words',
    badge: 'better / worse / further',
    description: 'Some of the most essential adjectives in English do not follow standard -er or more rules. Memorize their special forms: good -> better than -> the best; bad -> worse than -> the worst; far -> further/farther than -> the furthest/farthest; little -> less than -> the least; many/much -> more than -> the most.',
    keyRule: 'good -> better -> best. bad -> worse -> worst. far -> further -> furthest. little -> less -> least. Never say "more good", "more bad", or "worser".',
    formula: 'Positive -> Comparative -> Superlative: good -> better -> the best | bad -> worse -> the worst',
    examples: [
      'Eating fresh fruit is better for your health than eating processed sweets.',
      'This is the best scientific documentary I have ever seen.',
      'Traffic today is worse than it was yesterday during rush hour.',
      'That was the worst storm in over fifty years.',
      'We drove further along the coast to find a quiet beach.'
    ]
  },
  {
    id: 'adverbs_of_manner_frequency',
    title: 'Adverbs of Manner (-ly) & Frequency Positions',
    subtitle: 'Describing how actions are done & where frequency adverbs go',
    badge: 'Manner & Frequency',
    description: 'Adverbs of manner describe HOW an action happens, usually by adding -ly to an adjective (quick -> quickly, careful -> carefully, fluent -> fluently). Irregular adverbs include: good -> well, fast -> fast, hard -> hard, early -> early. Adverbs of frequency (always, usually, often, sometimes, rarely, never) go BEFORE the main verb, but AFTER the verb "to be".',
    keyRule: 'Manner: Verb + Adverb (He speaks fluently). Frequency Position: Subject + [Freq Adverb] + Main Verb (She always studies). With "be": Subject + am/is/are + [Freq Adverb] (He is always on time).',
    formula: 'Manner: S + Verb + Adv(-ly/well/fast) | Frequency: S + Frequency Adv + Main Verb OR S + Be + Frequency Adv',
    examples: [
      'Dr. Patel explained the surgical procedure clearly and carefully.',
      'The athlete ran fast and won the hundred-meter sprint.',
      'She plays the grand piano exceptionally well.',
      'We usually have lunch in the campus garden on sunny days.',
      'Professor Jenkins is always punctual for his morning lectures.'
    ]
  }
];

export function getA2ComparisonsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'comparative_adjectives':
      return generateComparativeQuestions(starNumber, mSeed);
    case 'superlative_adjectives':
      return generateSuperlativeQuestions(starNumber, mSeed);
    case 'equality_as_as':
      return generateEqualityAsAsQuestions(starNumber, mSeed);
    case 'irregular_comparatives':
      return generateIrregularComparisonsQuestions(starNumber, mSeed);
    case 'adverbs_of_manner_frequency':
      return generateAdverbsMannerFreqQuestions(starNumber, mSeed);
    default:
      return generateComparativeQuestions(starNumber, mSeed);
  }
}

// 1. Comparative Adjectives Pool
function generateComparativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The bullet train is', target: 'faster than', wrong: ['more faster than', 'fast than', 'more fast than'], context: 'the regional passenger bus.', note: 'Short adjective "fast" takes -er: faster than.' },
    { prompt: 'This smartphone is', target: 'more expensive than', wrong: ['expensiver than', 'more expensiver than', 'most expensive than'], context: 'the budget model.', note: 'Long adjective "expensive" takes "more expensive than".' },
    { prompt: 'The second grammar exercise was', target: 'easier than', wrong: ['more easy than', 'more easier than', 'easyer than'], context: 'the first exercise.', note: 'Ends in -y -> easier than.' },
    { prompt: 'Renewable solar energy is', target: 'cleaner than', wrong: ['more clean than', 'more cleaner than', 'clean than'], context: 'burning coal for electricity.', note: 'Short adjective "clean" takes -er: cleaner than.' },
    { prompt: 'Studying in the library is', target: 'quieter than', wrong: ['more quiet than', 'more quieter than', 'quiet than'], context: 'studying in the student cafeteria.', note: 'Short adjective "quiet" takes -er: quieter than.' },
    { prompt: 'The new textbook is', target: 'more comprehensive than', wrong: ['comprehensiver than', 'more comprehensiver than', 'most comprehensive than'], context: 'the previous edition.', note: 'Multi-syllable adjective takes "more comprehensive than".' },
    { prompt: 'Summer days in Spain are', target: 'hotter than', wrong: ['more hotter than', 'hoter than', 'more hot than'], context: 'summer days in Norway.', note: 'Double consonant rule: hot -> hotter than.' },
    { prompt: 'Traveling by air is', target: 'more comfortable than', wrong: ['comfortabler than', 'more comfortabler than', 'most comfortable than'], context: 'riding a crowded minivan.', note: 'Long adjective takes "more comfortable than".' },
    { prompt: 'My younger brother is', target: 'taller than', wrong: ['more taller than', 'tall than', 'more tall than'], context: 'our high school physical coach.', note: 'Short adjective takes -er: taller than.' },
    { prompt: 'This antique vase is', target: 'more valuable than', wrong: ['valuable than', 'valuabler than', 'more valuabler than'], context: 'the modern glass bowl.', note: 'Long adjective takes "more valuable than".' },
    { prompt: 'Fresh fruit is', target: 'healthier than', wrong: ['more healthy than', 'more healthier than', 'healthy than'], context: 'processed sugary snacks.', note: 'Ends in -y -> healthier than.' },
    { prompt: 'The Pacific Ocean is', target: 'deeper than', wrong: ['more deep than', 'more deeper than', 'deep than'], context: 'the Atlantic Ocean.', note: 'Short adjective takes -er: deeper than.' },
    { prompt: 'Her presentation was', target: 'more interesting than', wrong: ['interestinger than', 'more interestinger than', 'interest than'], context: 'the keynote speech.', note: 'Long adjective takes "more interesting than".' },
    { prompt: 'Winter nights here are', target: 'colder than', wrong: ['more cold than', 'more colder than', 'cold than'], context: 'in the coastal regions.', note: 'Short adjective takes -er: colder than.' },
    { prompt: 'An electric vehicle is', target: 'more efficient than', wrong: ['efficienter than', 'more efficienter than', 'efficient than'], context: 'an old gasoline truck.', note: 'Long adjective takes "more efficient than".' },
    { prompt: 'This organic cotton shirt is', target: 'softer than', wrong: ['more soft than', 'more softer than', 'soft than'], context: 'the synthetic nylon fabric.', note: 'Short adjective takes -er: softer than.' },
    { prompt: 'Learning Japanese grammar is', target: 'more challenging than', wrong: ['challenginger than', 'more challenginger than', 'challenge than'], context: 'learning Spanish vocabulary.', note: 'Long adjective takes "more challenging than".' },
    { prompt: 'The mountain trail is', target: 'steeper than', wrong: ['more steep than', 'more steeper than', 'steep than'], context: 'the paved valley road.', note: 'Short adjective takes -er: steeper than.' },
    { prompt: 'Our current apartment is', target: 'larger than', wrong: ['more larger than', 'large than', 'more large than'], context: 'the studio we rented last year.', note: 'Short adjective ending in -e adds -r: larger than.' },
    { prompt: 'This scientific microscope is', target: 'more powerful than', wrong: ['powerfuler than', 'more powerfuler than', 'power than'], context: 'the optical lenses in lab 2.', note: 'Long adjective takes "more powerful than".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Comparative Adjectives');
}

// 2. Superlative Adjectives Pool
function generateSuperlativeQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Mount Everest is', target: 'the highest', wrong: ['highest', 'the most highest', 'the higher'], context: 'mountain peak on planet Earth.', note: 'Superlative requires "the + -est": the highest.' },
    { prompt: 'The blue whale is', target: 'the largest', wrong: ['largest', 'the most largest', 'the larger'], context: 'living animal known to marine biology.', note: 'Superlative with the: the largest.' },
    { prompt: 'Quantum mechanics is', target: 'the most difficult', wrong: ['difficultest', 'the difficultest', 'most difficult'], context: 'subject in our university department.', note: 'Long adjective superlative: the most difficult.' },
    { prompt: 'This is', target: 'the oldest', wrong: ['oldest', 'the most oldest', 'the older'], context: 'wooden cathedral standing in Scandinavia.', note: 'Short adjective: the oldest.' },
    { prompt: 'She is', target: 'the most talented', wrong: ['talentedest', 'the talentedest', 'most talented'], context: 'pianist in the youth conservatory.', note: 'Long adjective: the most talented.' },
    { prompt: 'Yesterday was', target: 'the hottest', wrong: ['hottest', 'the most hottest', 'the hotest'], context: 'day recorded this entire summer.', note: 'Double consonant rule: the hottest.' },
    { prompt: 'The cheetah is', target: 'the fastest', wrong: ['fastest', 'the most fastest', 'the faster'], context: 'land mammal over short sprinting distances.', note: 'Superlative of fast: the fastest.' },
    { prompt: 'Which smartphone has', target: 'the longest', wrong: ['longest', 'the most longest', 'the longer'], context: 'battery life on the consumer market?', note: 'Superlative of long: the longest.' },
    { prompt: 'This is', target: 'the most interesting', wrong: ['interestinger', 'the interestingest', 'most interesting'], context: 'historical documentary I have ever watched.', note: 'Long adjective: the most interesting.' },
    { prompt: 'The Mariana Trench is', target: 'the deepest', wrong: ['deepest', 'the most deepest', 'the deeper'], context: 'oceanic zone in the Pacific basin.', note: 'Superlative of deep: the deepest.' },
    { prompt: 'He is', target: 'the youngest', wrong: ['youngest', 'the most youngest', 'the younger'], context: 'engineer ever hired by the aerospace laboratory.', note: 'Superlative of young: the youngest.' },
    { prompt: 'This eco-friendly resort is', target: 'the most popular', wrong: ['popularest', 'the popularest', 'most popular'], context: 'destination for international tourists.', note: 'Long adjective: the most popular.' },
    { prompt: 'Antarctica is', target: 'the coldest', wrong: ['coldest', 'the most coldest', 'the colder'], context: 'and windiest continent on Earth.', note: 'Superlative of cold: the coldest.' },
    { prompt: 'That was', target: 'the easiest', wrong: ['easiest', 'the most easiest', 'the easyest'], context: 'mathematics quiz of the entire academic term.', note: 'Ends in -y -> the easiest.' },
    { prompt: 'The gold watch was', target: 'the most expensive', wrong: ['expensivest', 'the expensivest', 'most expensive'], context: 'item displayed in the jewelry showcase.', note: 'Long adjective: the most expensive.' },
    { prompt: 'The Nile is often called', target: 'the longest', wrong: ['longest', 'the most longest', 'the longer'], context: 'river in the African continent.', note: 'Superlative: the longest.' },
    { prompt: 'She wrote', target: 'the most creative', wrong: ['creativest', 'the creativest', 'most creative'], context: 'short story in the creative writing competition.', note: 'Long adjective: the most creative.' },
    { prompt: 'December 21st is usually', target: 'the shortest', wrong: ['shortest', 'the most shortest', 'the shorter'], context: 'day of the year in the northern hemisphere.', note: 'Superlative of short: the shortest.' },
    { prompt: 'This is', target: 'the most important', wrong: ['importantest', 'the importantest', 'most important'], context: 'clinical trial in modern pharmacology.', note: 'Long adjective: the most important.' },
    { prompt: 'Our university library has', target: 'the largest', wrong: ['largest', 'the most largest', 'the larger'], context: 'collection of rare manuscripts.', note: 'Superlative: the largest.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Superlative Adjectives');
}

// 3. Equality & Similarity: as ... as Pool
function generateEqualityAsAsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Digital photography is', target: 'as popular as', wrong: ['as popular than', 'so popular than', 'as more popular as'], context: 'traditional film photography.', note: 'Equality structure is "as + base adjective + as".' },
    { prompt: 'The bus ride was', target: 'not as long as', wrong: ['not as longer as', 'not so longer than', 'not as long than'], context: 'the scenic railway journey.', note: 'Negative comparison: "not as + base adj + as".' },
    { prompt: 'Is your new neighborhood', target: 'as quiet as', wrong: ['as quieter as', 'as quiet than', 'so quiet than'], context: 'your previous apartment complex?', note: 'Base adjective inside as...as: "as quiet as".' },
    { prompt: 'The second chemistry quiz was', target: 'not as difficult as', wrong: ['not as more difficult as', 'not so difficult than', 'not as difficulter as'], context: 'the midterm exam.', note: 'Long adjective remains base: "not as difficult as".' },
    { prompt: 'She can run', target: 'as fast as', wrong: ['as faster as', 'as fast than', 'so faster than'], context: 'the varsity track captain.', note: 'Base adverb inside as...as: "as fast as".' },
    { prompt: 'This silver necklace is', target: 'not as expensive as', wrong: ['not as expensiver as', 'not so expensive than', 'not as more expensive as'], context: 'the platinum pendant.', note: 'Equality comparison: "not as expensive as".' },
    { prompt: 'Lucas is', target: 'as tall as', wrong: ['as taller as', 'as tall than', 'so taller than'], context: 'his older brother Marcus.', note: 'Base adjective: "as tall as".' },
    { prompt: 'Our new office building is', target: 'as modern as', wrong: ['as moderner as', 'as modern than', 'so more modern as'], context: 'the downtown tech headquarters.', note: 'Base adjective: "as modern as".' },
    { prompt: 'The weather today is', target: 'not as warm as', wrong: ['not as warmer as', 'not as warm than', 'not so warmer as'], context: 'it was last Sunday afternoon.', note: '"not as warm as".' },
    { prompt: 'Her spoken English is', target: 'as fluent as', wrong: ['as fluenter as', 'as fluent than', 'so more fluent as'], context: 'a native bilingual speaker.', note: '"as fluent as".' },
    { prompt: 'The botanical garden is', target: 'as beautiful as', wrong: ['as more beautiful as', 'as beautiful than', 'so beautiful than'], context: 'the royal palace grounds.', note: '"as beautiful as".' },
    { prompt: 'This portable battery is', target: 'not as heavy as', wrong: ['not as heavier as', 'not as heavy than', 'not so heavier than'], context: 'the older power bank model.', note: '"not as heavy as".' },
    { prompt: 'Is learning French', target: 'as easy as', wrong: ['as easier as', 'as easy than', 'so easy than'], context: 'learning Spanish for beginners?', note: '"as easy as".' },
    { prompt: 'The highway tunnel was', target: 'not as safe as', wrong: ['not as safer as', 'not as safe than', 'not so safer than'], context: 'the newly engineered bridge.', note: '"not as safe as".' },
    { prompt: 'Her research thesis is', target: 'as detailed as', wrong: ['as more detailed as', 'as detailed than', 'so detail as'], context: 'a published peer-reviewed paper.', note: '"as detailed as".' },
    { prompt: 'Online shopping is', target: 'as convenient as', wrong: ['as more convenient as', 'as convenient than', 'so convenient than'], context: 'visiting the downtown department store.', note: '"as convenient as".' },
    { prompt: 'The tap water in this alpine village is', target: 'as pure as', wrong: ['as purer as', 'as pure than', 'so purer as'], context: 'bottled mineral spring water.', note: '"as pure as".' },
    { prompt: 'The second edition is', target: 'not as costly as', wrong: ['not as costlier as', 'not as costly than', 'not so costlier as'], context: 'the original collector\'s volume.', note: '"not as costly as".' },
    { prompt: 'He is', target: 'as energetic as', wrong: ['as more energetic as', 'as energetic than', 'so energetic than'], context: 'a professional marathon trainer.', note: '"as energetic as".' },
    { prompt: 'This acoustic guitar sounds', target: 'as rich as', wrong: ['as richer as', 'as rich than', 'so richer than'], context: 'the custom handmade instrument.', note: '"as rich as".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Equality: (not) as ... as');
}

// 4. Irregular Comparisons Pool
function generateIrregularComparisonsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Eating fresh vegetables is', target: 'better than', wrong: ['gooder than', 'more good than', 'more better than'], context: 'eating processed junk food.', note: 'Irregular comparative of "good" is "better than".' },
    { prompt: 'This is undoubtedly', target: 'the best', wrong: ['the goodest', 'the most good', 'the better'], context: 'science museum in the metropolitan district.', note: 'Superlative of "good" is "the best".' },
    { prompt: 'The morning traffic congestion was', target: 'worse than', wrong: ['badder than', 'more bad than', 'worser than'], context: 'it was yesterday during peak hours.', note: 'Comparative of "bad" is "worse than".' },
    { prompt: 'That was', target: 'the worst', wrong: ['the baddest', 'the most bad', 'the worse'], context: 'blizzard the mountain town had witnessed in decades.', note: 'Superlative of "bad" is "the worst".' },
    { prompt: 'The researchers traveled', target: 'further than', wrong: ['farer than', 'more far than', 'further as'], context: 'any previous arctic expedition had dared.', note: 'Comparative of "far" is "further than" (or farther than).' },
    { prompt: 'Neptune is', target: 'the furthest', wrong: ['the farest', 'the most far', 'the further'], context: 'major planet from the Sun in our solar system.', note: 'Superlative of "far" is "the furthest" (or the farthest).' },
    { prompt: 'We spent', target: 'less money than', wrong: ['little money than', 'more little money than', 'lesser money than'], context: 'we originally budgeted for the trip.', note: 'Comparative of "little" for quantity is "less than".' },
    { prompt: 'This option provides', target: 'the least', wrong: ['the littlest', 'the most little', 'the less'], context: 'environmental risk to local marine life.', note: 'Superlative of "little" is "the least".' },
    { prompt: 'Regular physical exercise gives you', target: 'more energy than', wrong: ['much energy than', 'energiest than', 'most energy than'], context: 'drinking caffeinated energy sodas.', note: 'Comparative of "much/many" is "more than".' },
    { prompt: 'Which candidate received', target: 'the most', wrong: ['the much', 'the more', 'the mostest'], context: 'votes in the student council election?', note: 'Superlative of "many" is "the most".' },
    { prompt: 'Her second draft was significantly', target: 'better than', wrong: ['gooder than', 'more good than', 'best than'], context: 'her initial rough outline.', note: 'Comparative of good is "better than".' },
    { prompt: 'A sedentary lifestyle is', target: 'worse for health than', wrong: ['more bad for health than', 'badder for health than', 'worser for health than'], context: 'occasional stress.', note: 'Comparative of bad is "worse than".' },
    { prompt: 'For', target: 'further information', wrong: ['farer information', 'more far information', 'furthest information'], context: ', please visit our official admissions portal.', note: '"Further information" is the standard idiomatic usage for additional information.' },
    { prompt: 'Among all the solutions proposed, this one offers', target: 'the best', wrong: ['the goodest', 'the most better', 'the better'], context: 'long-term economic sustainability.', note: 'Superlative: "the best".' },
    { prompt: 'The weather forecast today is', target: 'worse than', wrong: ['worser than', 'more bad than', 'badder than'], context: 'the satellite model predicted last night.', note: 'Comparative: "worse than".' },
    { prompt: 'He took', target: 'less time than', wrong: ['littler time than', 'more little time than', 'least time than'], context: 'expected to finish the laboratory analysis.', note: '"less time than".' },
    { prompt: 'Out of all three travel routes, this scenic highway is', target: 'the furthest', wrong: ['the farest', 'the further', 'the most far'], context: 'from the capital city.', note: '"the furthest".' },
    { prompt: 'This university has produced', target: 'the most', wrong: ['the much', 'the more', 'the mostest'], context: 'Nobel laureates in chemistry.', note: '"the most".' },
    { prompt: 'Eating a balanced diet results in', target: 'better sleep than', wrong: ['gooder sleep than', 'more good sleep than', 'best sleep than'], context: 'late-night snacking.', note: '"better sleep than".' },
    { prompt: 'That was without question', target: 'the worst', wrong: ['the baddest', 'the most bad', 'the worse'], context: 'misunderstanding between the two teams.', note: '"the worst".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Irregular Comparisons');
}

// 5. Adverbs of Manner & Frequency Pool
function generateAdverbsMannerFreqQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'Dr. Patel explained the complex theory', target: 'clearly', wrong: ['clear', 'more clear', 'clearness'], context: 'so that every student understood.', note: 'Adverb of manner describes how: clear -> clearly.' },
    { prompt: 'The concert pianist plays the grand instrument', target: 'beautifully', wrong: ['beautiful', 'beauty', 'more beautiful'], context: 'in front of the packed auditorium.', note: 'Adjective "beautiful" -> adverb "beautifully".' },
    { prompt: 'He ran very', target: 'fast', wrong: ['fastly', 'more fastly', 'fastness'], context: 'and reached the departing train just in time.', note: '"Fast" is an irregular adverb; "fastly" does not exist in standard English.' },
    { prompt: 'She speaks three European languages', target: 'fluently', wrong: ['fluent', 'fluency', 'more fluent'], context: 'after living abroad for several years.', note: 'Adverb of manner: fluent -> fluently.' },
    { prompt: 'Professor Jenkins is', target: 'always punctual', wrong: ['punctual always', 'always is punctual', 'is always punctually'], context: 'for his morning university lectures.', note: 'Frequency adverbs go AFTER the verb "to be": is always punctual.' },
    { prompt: 'We', target: 'usually have lunch', wrong: ['have usually lunch', 'have lunch usually', 'are usually have lunch'], context: 'in the campus courtyard at noon.', note: 'Frequency adverbs go BEFORE the main verb: usually have.' },
    { prompt: 'The surgeon worked', target: 'carefully', wrong: ['careful', 'more careful', 'carefulness'], context: 'under the bright operating room lights.', note: 'Adverb of manner: careful -> carefully.' },
    { prompt: 'The students studied', target: 'hard', wrong: ['hardly', 'harderly', 'hardness'], context: 'all weekend for the final biochemistry exam.', note: '"Hard" is an irregular adverb meaning with great effort ("hardly" means almost not at all!).' },
    { prompt: 'The acoustic choir sang', target: 'harmoniously', wrong: ['harmonious', 'harmony', 'more harmonious'], context: 'during the cathedral festival.', note: 'Adverb of manner: harmonious -> harmoniously.' },
    { prompt: 'Oliver', target: 'never forgets', wrong: ['forgets never', 'never is forget', 'is never forget'], context: 'his laboratory safety goggles.', note: 'Frequency adverb before main verb: never forgets.' },
    { prompt: 'She performed exceptionally', target: 'well', wrong: ['good', 'goodly', 'wellness'], context: 'during her audition for the philharmonic orchestra.', note: 'Adverb of "good" is "well".' },
    { prompt: 'The automated robot navigated', target: 'smoothly', wrong: ['smooth', 'smoothness', 'more smooth'], context: 'across the obstacle course.', note: 'Adverb of manner: smooth -> smoothly.' },
    { prompt: 'They', target: 'often visit', wrong: ['visit often', 'are often visit', 'often are visit'], context: 'the modern art gallery on Sunday afternoons.', note: 'Frequency adverb before main verb: often visit.' },
    { prompt: 'Please write your full name and ID', target: 'neatly', wrong: ['neat', 'neatness', 'more neat'], context: 'on the front examination booklet.', note: 'Adverb of manner: neat -> neatly.' },
    { prompt: 'The lecturer spoke', target: 'politely', wrong: ['polite', 'politeness', 'more polite'], context: 'to the visiting international delegation.', note: 'Adverb of manner: polite -> politely.' },
    { prompt: 'I am', target: 'rarely late', wrong: ['late rarely', 'rarely am late', 'am late rarely'], context: 'for my scheduled medical appointments.', note: 'After the verb "to be": am rarely late.' },
    { prompt: 'The morning commuters arrived', target: 'early', wrong: ['earlyly', 'more earlyly', 'earliness'], context: 'to secure seats on the express train.', note: '"Early" is both an adjective and an adverb.' },
    { prompt: 'The chemical reaction proceeded', target: 'rapidly', wrong: ['rapid', 'rapidity', 'more rapid'], context: 'once the catalyst was introduced.', note: 'Adverb of manner: rapid -> rapidly.' },
    { prompt: 'We', target: 'sometimes study', wrong: ['study sometimes', 'are sometimes study', 'sometimes are study'], context: 'together in the 24-hour university hall.', note: 'Frequency adverb before main verb: sometimes study.' },
    { prompt: 'The security system operates', target: 'automatically', wrong: ['automatic', 'automateness', 'more automatic'], context: 'throughout the entire facility.', note: 'Adverb of manner: automatic -> automatically.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Adverbs of Manner & Frequency');
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
        explanation: `Incorrect. "${w}" is grammatically wrong. ${item.note}`
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
      hint: `Hint: Apply the grammar rule for ${topicTitle}.`,
      ruleTip: item.note
    });
  }

  return questions;
}
