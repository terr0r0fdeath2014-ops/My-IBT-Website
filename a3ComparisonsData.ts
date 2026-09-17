import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A3_COMPARISONS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'comparative_modifiers',
    title: 'Comparative Modifiers (much, far, a lot, slightly, a bit, marginally)',
    subtitle: 'Expressing degrees of difference in comparisons with precision',
    badge: 'Modifiers of Degree',
    description: 'To express how big or small a difference is when comparing two things, use modifiers before comparatives: Big differences: "much", "far", "a lot", "significantly", "substantially", "way" (informal). Small differences: "slightly", "a bit", "a little", "marginally", "scarcely". Never use "more" as a modifier before another comparative (e.g. NOT "more better").',
    keyRule: 'Big difference: much / far / a lot / significantly + comparative (e.g., "much faster"). Small difference: slightly / a bit / a little + comparative (e.g., "slightly more expensive").',
    formula: 'Modifier (much/far/slightly/a bit) + Comparative (-er / more + adj) + than...',
    examples: [
      'The optical quantum processor is significantly faster than traditional silicon chips.',
      'The revised laboratory design is slightly more expensive, but far safer for researchers.',
      'Living in Tokyo is substantially more expensive than living in rural Hokkaido.',
      'Her second monograph was much better received by academic critics than her first.',
      'The new drone model is marginally heavier, but its battery life is a lot longer.'
    ]
  },
  {
    id: 'double_comparatives',
    title: 'Double Comparatives ("The... the...", "The more... the more...")',
    subtitle: 'Expressing cause and effect or proportional change between two variables',
    badge: 'The... the...',
    description: 'Use the double comparative structure ("The + comparative..., the + comparative...") to show that two changes happen together in direct proportion, where one variable causes or correlates with a change in another.',
    keyRule: 'The + comparative (adjective/adverb/clause), the + comparative (adjective/adverb/clause).',
    formula: 'The + [comparative word/clause], the + [comparative word/clause].',
    examples: [
      'The more you practice solving complex mathematical theorems, the easier they become.',
      'The higher you climb up the alpine mountain, the thinner the atmospheric oxygen gets.',
      'The earlier we submit the grant application, the greater our chance of securing funding.',
      'The more efficiently we utilize renewable energy, the less we depend on fossil fuels.',
      'The colder the ambient winter temperature, the faster the battery loses charge.'
    ]
  },
  {
    id: 'participial_adjectives',
    title: 'Participial Adjectives (-ed vs. -ing)',
    subtitle: 'Distinguishing between how someone feels (-ed) and what causes the feeling (-ing)',
    badge: '-ed vs. -ing Adjectives',
    description: 'Adjectives ending in "-ed" describe feelings or internal mental/physical states (how a person feels): bored, interested, exhausted, fascinated, confused, amazed. Adjectives ending in "-ing" describe the characteristic or quality of the thing/person that produces that feeling (the cause): boring, interesting, exhausting, fascinating, confusing, amazing.',
    keyRule: '-ed = person feeling the emotion ("I am fascinated"). -ing = thing/person causing the effect ("The lecture is fascinating").',
    formula: 'Person + be + -ed adjective (feeling) | Entity/Experience + be + -ing adjective (characteristic).',
    examples: [
      'The neurology students were fascinated by the professor\'s fascinating presentation.',
      'After the twelve-hour surgical operation, the medical team was completely exhausted.',
      'The statistical findings in the report were extremely confusing to the public.',
      'She felt disappointed when the experimental trials were temporarily halted.',
      'It was an exhilarating discovery that left the entire research community astonished.'
    ]
  },
  {
    id: 'compound_adjectives',
    title: 'Compound Adjectives (well-known, part-time, ten-year-old, state-of-the-art)',
    subtitle: 'Forming multi-word descriptive modifiers connected with hyphens',
    badge: 'Compound Adjectives',
    description: 'Compound adjectives are formed by combining two or more words (often: Adverb + Past Participle, Noun + Present Participle, Number + Singular Noun, Adjective + Noun-ed). They are hyphenated when placed BEFORE the noun they modify (e.g., "a state-of-the-art laboratory", "a three-week workshop"). Note: numbers with nouns used as adjectives always stay in the SINGULAR form ("a ten-year-old child", NOT "ten-years-old").',
    keyRule: 'Hyphenate before nouns! Quantities used as modifiers are always SINGULAR ("a two-hour exam", "a five-star hotel", "a twenty-dollar note"). Well-known, cutting-edge, open-minded, high-speed.',
    formula: 'Number-SingularNoun + noun | Adv-PastParticiple + noun | Adj-Noun+ed + noun.',
    examples: [
      'The university opened a state-of-the-art biochemistry research center.',
      'Dr. Alvarez is a world-renowned expert on infectious epidemiology.',
      'They conducted a five-year longitudinal study on cardiovascular health.',
      'We attended an eye-opening lecture on artificial intelligence ethics.',
      'He purchased a energy-efficient hybrid vehicle for his daily commute.'
    ]
  }
];

export function getA3ComparisonsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'comparative_modifiers':
      return generateComparativeModifiersQuestions(starNumber, mSeed);
    case 'double_comparatives':
      return generateDoubleComparativesQuestions(starNumber, mSeed);
    case 'participial_adjectives':
      return generateParticipialAdjectivesQuestions(starNumber, mSeed);
    case 'compound_adjectives':
      return generateCompoundAdjectivesQuestions(starNumber, mSeed);
    default:
      return generateComparativeModifiersQuestions(starNumber, mSeed);
  }
}

// 1. Comparative Modifiers Pool
function generateComparativeModifiersQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The newly developed quantum algorithm is', target: 'significantly faster than', wrong: ['significantly more faster than', 'more significantly faster than', 'significantly fastest than'], context: 'standard classical computational methods.', note: 'Modifier + comparative: "significantly faster than" (never "more faster").' },
    { prompt: 'Living expenses in Zurich are', target: 'substantially higher than', wrong: ['substantially more high than', 'more substantially higher than', 'substantially highest than'], context: 'in most other European metropolitan areas.', note: 'substantially higher than.' },
    { prompt: 'The revised experimental prototype is', target: 'slightly more expensive than', wrong: ['slightly expensive than', 'slightly most expensive than', 'more slightly expensive than'], context: 'the earlier baseline version.', note: 'Small degree difference: slightly more expensive than.' },
    { prompt: 'The second edition of the pharmacology textbook is', target: 'far better organized than', wrong: ['far more better organized than', 'far best organized than', 'more far better organized than'], context: 'the original 2015 printing.', note: '"far better organized" (never "more better").' },
    { prompt: 'The temperature on Mars is', target: 'much colder than', wrong: ['much more cold than', 'more much colder than', 'much coldest than'], context: 'the coldest recorded winter in Antarctica.', note: 'much colder than.' },
    { prompt: 'The new electric bus fleet produces', target: 'a lot less noise than', wrong: ['a lot fewer noise than', 'a lot lesser noise than', 'much fewer noise than'], context: 'traditional diesel combustion engines.', note: 'a lot less noise (noise is uncountable mass).' },
    { prompt: 'Our second clinical trial yielded results that were', target: 'marginally superior to', wrong: ['marginally more superior to', 'more marginally superior to', 'marginally most superior to'], context: 'the control benchmark.', note: 'marginally superior to.' },
    { prompt: 'The optical telescope array in the Atacama is', target: 'way more powerful than', wrong: ['way most powerful than', 'more way powerful than', 'way powerfuller than'], context: 'any amateur observatory system.', note: 'way more powerful than (informal degree modifier).' },
    { prompt: 'The synthetic diamond coating is', target: 'a bit harder than', wrong: ['a bit more harder than', 'a bit hardest than', 'more a bit harder than'], context: 'natural sapphire crystal.', note: 'a bit harder than.' },
    { prompt: 'His recovery after the surgery was', target: 'much faster than', wrong: ['much more fast than', 'more much faster than', 'much fastest than'], context: 'the medical specialists had anticipated.', note: 'much faster than.' },
    { prompt: 'The new lightweight carbon composite is', target: 'considerably stronger than', wrong: ['considerably more strong than', 'considerably strongest than', 'more considerably stronger than'], context: 'structural aviation steel.', note: 'considerably stronger than.' },
    { prompt: 'The flight from London to Tokyo was', target: 'a little longer than', wrong: ['a little more long than', 'a little longest than', 'more a little longer than'], context: 'usual due to strong Siberian headwinds.', note: 'a little longer than.' },
    { prompt: 'Renewable solar energy is now', target: 'far cheaper than', wrong: ['far more cheap than', 'more far cheaper than', 'far cheapest than'], context: 'coal-fired electrical generation in many regions.', note: 'far cheaper than.' },
    { prompt: 'The revised software algorithm is', target: 'slightly less demanding on', wrong: ['slightly lesser demanding on', 'slightly least demanding on', 'more slightly less demanding on'], context: 'system CPU memory resources.', note: 'slightly less demanding on.' },
    { prompt: 'Her oral presentation was', target: 'much clearer than', wrong: ['much more clear than', 'more much clearer than', 'much clearest than'], context: 'the convoluted written summary in the brochure.', note: 'much clearer than.' },
    { prompt: 'The deep oceanic trench is', target: 'substantially deeper than', wrong: ['substantially more deep than', 'substantially deepest than', 'more substantially deeper than'], context: 'the average depth of the Pacific basin.', note: 'substantially deeper than.' },
    { prompt: 'This battery chemistry provides', target: 'significantly greater energy density than', wrong: ['significantly more great density than', 'significantly greatest density than', 'more significantly greater density than'], context: 'older nickel-cadmium cells.', note: 'significantly greater energy density than.' },
    { prompt: 'The updated safety regulation is', target: 'a bit stricter than', wrong: ['a bit more strict than', 'a bit strictest than', 'more a bit stricter than'], context: 'the previous code of practice.', note: 'a bit stricter than.' },
    { prompt: 'Traveling by high-speed rail across Japan is', target: 'far more convenient than', wrong: ['far convenienter than', 'more far convenient than', 'far most convenient than'], context: 'navigating domestic airport security lines.', note: 'far more convenient than.' },
    { prompt: 'The current rate of Arctic ice reduction is', target: 'much worse than', wrong: ['much badder than', 'much more worse than', 'much worst than'], context: 'early climate simulations had projected.', note: 'much worse than (irregular comparative of bad).' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Comparative Modifiers');
}

// 2. Double Comparatives Pool
function generateDoubleComparativesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The more you practice complex surgical maneuvers,', target: 'the more proficient you become.', wrong: ['the more proficient you will became.', 'more proficient you become.', 'the most proficient you become.'], context: '', note: 'The + comparative..., the + comparative...' },
    { prompt: 'The higher the aircraft ascends into the stratosphere,', target: 'the colder the external temperature gets.', wrong: ['the more cold the temperature gets.', 'colder the temperature gets.', 'the coldest temperature gets.'], context: '', note: 'The + comparative (the colder...).' },
    { prompt: 'The earlier the medical team detects the infection,', target: 'the easier the treatment will be.', wrong: ['the more easy the treatment will be.', 'easier the treatment will be.', 'the easiest the treatment will be.'], context: '', note: 'the easier the treatment will be.' },
    { prompt: 'The more fuel-efficient the vehicle engine is,', target: 'the lower the operational carbon emissions are.', wrong: ['the lowest the carbon emissions are.', 'lower the carbon emissions are.', 'the more low the emissions are.'], context: '', note: 'the lower the emissions are.' },
    { prompt: 'The longer the astronaut remains in microgravity,', target: 'the greater the bone density loss becomes.', wrong: ['the more great the loss becomes.', 'greater the loss becomes.', 'the greatest the loss becomes.'], context: '', note: 'the greater the loss becomes.' },
    { prompt: 'The more diverse the ecosystem is,', target: 'the more resilient it proves to environmental shocks.', wrong: ['the most resilient it proves.', 'more resilient it proves.', 'the resilienter it proves.'], context: '', note: 'the more resilient it proves.' },
    { prompt: 'The colder the winter weather becomes,', target: 'the more electricity households consume for heating.', wrong: ['the most electricity households consume.', 'more electricity households consume.', 'the electriciter households consume.'], context: '', note: 'the more electricity households consume.' },
    { prompt: 'The more thoroughly you review the peer manuscripts,', target: 'the fewer errors you will overlook.', wrong: ['the less errors you will overlook.', 'the fewest errors you will overlook.', 'fewer errors you will overlook.'], context: '', note: 'the fewer errors (errors is countable plural).' },
    { prompt: 'The faster the supercomputer processes data,', target: 'the sooner the climate simulation will conclude.', wrong: ['the more soon the simulation will conclude.', 'sooner the simulation will conclude.', 'the soonest the simulation will conclude.'], context: '', note: 'the sooner...' },
    { prompt: 'The deeper the deep-sea submersible dives,', target: 'the higher the hydrostatic pressure becomes.', wrong: ['the more high the pressure becomes.', 'higher the pressure becomes.', 'the highest the pressure becomes.'], context: '', note: 'the higher...' },
    { prompt: 'The more languages a diplomat speaks fluently,', target: 'the more effectively they can negotiate international treaties.', wrong: ['the most effectively they negotiate.', 'more effectively they negotiate.', 'the effectivelier they negotiate.'], context: '', note: 'the more effectively...' },
    { prompt: 'The less waste industrial factories discharge,', target: 'the cleaner the local river ecosystem remains.', wrong: ['the more clean the river remains.', 'cleaner the river remains.', 'the cleanest the river remains.'], context: '', note: 'the cleaner...' },
    { prompt: 'The clearer the telescope optics are,', target: 'the sharper the astronomical images appear.', wrong: ['the more sharp the images appear.', 'sharper the images appear.', 'the sharpest the images appear.'], context: '', note: 'the sharper...' },
    { prompt: 'The more concisely an abstract is written,', target: 'the easier it is for researchers to digest.', wrong: ['the more easy it is to digest.', 'easier it is to digest.', 'the easiest it is to digest.'], context: '', note: 'the easier it is...' },
    { prompt: 'The older the vintage wine matures in oak casks,', target: 'the more complex its aromatic flavor profile becomes.', wrong: ['the most complex its flavor becomes.', 'more complex its flavor becomes.', 'the complexer its flavor becomes.'], context: '', note: 'the more complex...' },
    { prompt: 'The harder the mountaineering expedition trains,', target: 'the better prepared they will be for the summit climb.', wrong: ['the best prepared they will be.', 'better prepared they will be.', 'the more good prepared they will be.'], context: '', note: 'the better prepared...' },
    { prompt: 'The more data points the machine learning model analyzes,', target: 'the more accurate its predictive output becomes.', wrong: ['the most accurate its output becomes.', 'more accurate its output becomes.', 'the accurater its output becomes.'], context: '', note: 'the more accurate...' },
    { prompt: 'The more frequently you service the aircraft turbines,', target: 'the safer the commercial flights are.', wrong: ['the more safe the flights are.', 'safer the flights are.', 'the safest the flights are.'], context: '', note: 'the safer...' },
    { prompt: 'The smaller the silicon transistor gate dimensions,', target: 'the more chips can be placed on a wafer.', wrong: ['the most chips can be placed.', 'more chips can be placed.', 'the chipper can be placed.'], context: '', note: 'the more chips...' },
    { prompt: 'The more openly researchers share their scientific datasets,', target: 'the faster global scientific progress accelerates.', wrong: ['the more fast scientific progress accelerates.', 'faster progress accelerates.', 'the fastest progress accelerates.'], context: '', note: 'the faster...' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Double Comparatives');
}

// 3. Participial Adjectives Pool
function generateParticipialAdjectivesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The undergraduate students were utterly', target: 'fascinated by', wrong: ['fascinating by', 'fascinate by', 'fascinated with of'], context: 'the visiting professor\'s lecture on dark matter.', note: 'Person feeling the emotion takes "-ed": fascinated by.' },
    { prompt: 'Listening to the continuous drone of traffic outside was extremely', target: 'annoying and distracting', wrong: ['annoyed and distracted', 'annoying and distracted', 'annoyed and distracting'], context: 'during the online exam.', note: 'Thing causing the emotion takes "-ing": annoying and distracting.' },
    { prompt: 'After working forty-eight continuous hours on the power grid failure, the technicians were completely', target: 'exhausted', wrong: ['exhausting', 'exhaust', 'exhausts'], context: '.', note: 'Technicians felt the state: exhausted.' },
    { prompt: 'The documentary presented some truly', target: 'astonishing', wrong: ['astonished', 'astonish', 'astonishes'], context: 'revelations about deep-sea hydrothermal ecosystems.', note: 'Documentary produces the feeling: astonishing.' },
    { prompt: 'She was deeply', target: 'disappointed', wrong: ['disappointing', 'disappoint', 'disappoints'], context: 'when her research grant application was rejected by the panel.', note: 'She felt the emotion: disappointed.' },
    { prompt: 'The instructions provided in the software user manual were remarkably', target: 'confusing', wrong: ['confused', 'confuse', 'confuses'], context: 'and led to multiple configuration errors.', note: 'Manual caused confusion: confusing.' },
    { prompt: 'The newly hired laboratory assistant was visibly', target: 'embarrassed', wrong: ['embarrassing', 'embarrass', 'embarrasses'], context: 'when he dropped the glass volumetric flask.', note: 'Assistant felt the emotion: embarrassed.' },
    { prompt: 'Attending the international neuroscience symposium in Kyoto was an', target: 'inspiring experience', wrong: ['inspired experience', 'inspire experience', 'inspires experience'], context: 'for all young researchers.', note: 'Experience that inspires: inspiring experience.' },
    { prompt: 'Are you', target: 'interested in', wrong: ['interesting in', 'interest in', 'interested on'], context: 'pursuing a master\'s degree in bioinformatics?', note: 'Person feeling interest: interested in.' },
    { prompt: 'The statistical regression output was rather', target: 'puzzling', wrong: ['puzzled', 'puzzle', 'puzzles'], context: 'because it contradicted earlier laboratory trials.', note: 'Output caused puzzlement: puzzling.' },
    { prompt: 'The audience was totally', target: 'bored by the repetitive presentation', wrong: ['boring by the repetitive presentation', 'bored of the repetitive presentation with', 'bore by the presentation'], context: 'and began checking their smartphones.', note: 'Audience felt boredom: bored by.' },
    { prompt: 'Working in high-altitude arctic research stations can be physically and mentally', target: 'demanding', wrong: ['demanded', 'demand', 'demands'], context: '.', note: 'Nature of the work is demanding (causing strain).' },
    { prompt: 'The patient was', target: 'relieved to hear', wrong: ['relieving to hear', 'relieve to hear', 'relieves to hear'], context: 'that the biopsy results were entirely benign.', note: 'Patient felt relief: relieved to hear.' },
    { prompt: 'The volcanic eruption produced a', target: 'terrifying cloud', wrong: ['terrified cloud', 'terrify cloud', 'terrifies cloud'], context: 'of superheated pyroclastic gas and ash.', note: 'Cloud causes terror: terrifying cloud.' },
    { prompt: 'We were pleasantly', target: 'surprised by the speed', wrong: ['surprising by the speed', 'surprise by the speed', 'surprises by the speed'], context: 'of the new computational neural model.', note: 'We felt surprise: surprised by.' },
    { prompt: 'It is very', target: 'frustrating', wrong: ['frustrated', 'frustrate', 'frustrates'], context: 'when an experiment fails after months of meticulous preparation.', note: 'The situation causes frustration: frustrating.' },
    { prompt: 'The explorers were', target: 'frightened by the sound', wrong: ['frightening by the sound', 'frighten by the sound', 'frightens by the sound'], context: 'of the shifting glacier ice beneath their tents.', note: 'Explorers felt fear: frightened by.' },
    { prompt: 'His explanation of quantum entanglement was', target: 'fascinating to listen to', wrong: ['fascinated to listen to', 'fascinate to listen to', 'fascinates to listen to'], context: '.', note: 'Explanation causes fascination: fascinating.' },
    { prompt: 'The tourists were', target: 'amazed by the grandeur', wrong: ['amazing by the grandeur', 'amaze by the grandeur', 'amazes by the grandeur'], context: 'of the ancient Gothic cathedral.', note: 'Tourists felt amazement: amazed by.' },
    { prompt: 'Running a full 42-kilometer marathon in humid heat is physically', target: 'exhausting', wrong: ['exhausted', 'exhaust', 'exhausts'], context: 'even for seasoned athletes.', note: 'The marathon causes exhaustion: exhausting.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Participial Adjectives (-ed vs. -ing)');
}

// 4. Compound Adjectives Pool
function generateCompoundAdjectivesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The university constructed a', target: 'state-of-the-art', wrong: ['state of the art', 'state-of-the-arts', 'state to the art'], context: 'laboratory for advanced nanotechnology research.', note: 'Multi-word compound adjective before noun: state-of-the-art.' },
    { prompt: 'Dr. Katherine Johnson was a', target: 'world-renowned', wrong: ['world renowned', 'world-renowning', 'world-renown'], context: 'mathematician whose calculations guided NASA spaceflights.', note: 'Adverb/noun + past participle compound: world-renowned.' },
    { prompt: 'The researchers conducted a', target: 'ten-year study', wrong: ['ten-years study', 'ten years study', 'ten year\'s study'], context: 'on the long-term cognitive impacts of sleep deprivation.', note: 'Number + singular noun when used as adjective: ten-year study (NOT ten-years).' },
    { prompt: 'We listened to a', target: 'thought-provoking lecture', wrong: ['thought provoking lecture', 'thought-provoked lecture', 'thought-provokes lecture'], context: 'on the ethical limits of artificial intelligence.', note: 'Noun + present participle: thought-provoking.' },
    { prompt: 'The airline recently acquired twenty', target: 'fuel-efficient aircraft', wrong: ['fuel efficient aircraft', 'fuel-efficiency aircraft', 'fuel-efficiently aircraft'], context: 'to reduce fleet operational costs.', note: 'Compound adjective: fuel-efficient.' },
    { prompt: 'He is a very', target: 'open-minded researcher', wrong: ['open minded researcher', 'open-minding researcher', 'open-mind researcher'], context: 'who embraces innovative interdisciplinary methodologies.', note: 'Compound: open-minded.' },
    { prompt: 'The committee organized a', target: 'three-day symposium', wrong: ['three-days symposium', 'three days symposium', 'three day\'s symposium'], context: 'on renewable hydrogen power technologies.', note: 'Singular modifier: three-day symposium.' },
    { prompt: 'She bought a', target: 'brand-new electron microscope', wrong: ['brand new electron microscope', 'brand-newly microscope', 'brand-renewed microscope'], context: 'for the histology department.', note: 'Compound modifier: brand-new.' },
    { prompt: 'The expedition had to traverse a', target: 'densely-populated urban district', wrong: ['densely populated urban district', 'dense-populated urban district', 'densely-populating district'], context: 'before reaching the nature reserve.', note: 'Adverb-participle compound: densely-populated.' },
    { prompt: 'They are staying at a luxury', target: 'five-star hotel', wrong: ['five-stars hotel', 'five stars hotel', 'five-star\'s hotel'], context: 'overlooking the picturesque harbor of Sydney.', note: 'Singular: five-star hotel.' },
    { prompt: 'The government initiated a', target: 'far-reaching reform', wrong: ['far reaching reform', 'far-reached reform', 'far-reach reform'], context: 'of the public healthcare system.', note: 'Compound: far-reaching.' },
    { prompt: 'He gave a', target: 'well-organized presentation', wrong: ['well organized presentation', 'well-organizing presentation', 'well-organization presentation'], context: 'with clear data visual charts.', note: 'Adverb + past participle: well-organized.' },
    { prompt: 'The candidate has extensive', target: 'hands-on experience', wrong: ['hands on experience', 'hand-on experience', 'hands-ons experience'], context: 'in maintaining high-vacuum chamber pumps.', note: 'Idiomatic compound: hands-on.' },
    { prompt: 'They signed a', target: 'multi-million-dollar contract', wrong: ['multi-millions-dollars contract', 'multi million dollar contract', 'multi-million-dollars contract'], context: 'for satellite communications equipment.', note: 'Singular currency modifier: multi-million-dollar.' },
    { prompt: 'This is a', target: 'time-consuming laboratory procedure', wrong: ['time consuming procedure', 'time-consumed procedure', 'time-consumes procedure'], context: 'that requires sixteen hours of steady monitoring.', note: 'Noun + V-ing: time-consuming.' },
    { prompt: 'She lives in a', target: 'two-bedroom apartment', wrong: ['two-bedrooms apartment', 'two bedrooms apartment', 'two-bedroom\'s apartment'], context: 'near the university medical center.', note: 'Singular: two-bedroom apartment.' },
    { prompt: 'The surgeon used a', target: 'high-precision laser scalpel', wrong: ['high precision laser scalpel', 'high-precisely laser scalpel', 'highest-precision scalpel'], context: 'during the delicate corneal operation.', note: 'Compound: high-precision.' },
    { prompt: 'It was a', target: 'last-minute decision', wrong: ['last minute decision', 'last-minuted decision', 'last-minutes decision'], context: 'to reroute the scientific expedition away from the blizzard.', note: 'Compound: last-minute.' },
    { prompt: 'The university library contains many', target: 'well-preserved historical documents', wrong: ['well preserved historical documents', 'well-preserving documents', 'well-preservation documents'], context: 'from the Renaissance era.', note: 'Compound: well-preserved.' },
    { prompt: 'He presented a', target: 'twenty-page report', wrong: ['twenty-pages report', 'twenty pages report', 'twenty-page\'s report'], context: 'summarizing the annual microbiological findings.', note: 'Singular: twenty-page report.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Compound Adjectives');
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
        explanation: `Incorrect. "${w}" violates the rule. ${item.note}`
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
