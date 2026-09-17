import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A4_COMPLEX_CONDITIONALS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'third_conditional',
    title: 'Third Conditional (If + had + V3, would have + V3)',
    subtitle: 'Imagining impossible past alternatives, consequences, and historical counter-factuals',
    badge: 'If had done, would have',
    description: 'Use the Third Conditional to talk about hypothetical situations in the past that DID NOT happen, and their imagined past outcomes. It is frequently used to express regret, relief, or historical critique.',
    keyRule: 'If + Subject + had + V3 (Past Perfect), Subject + would have / could have / might have + V3 (Past Participle).',
    formula: 'If + S + had + V3, S + would have + V3 | S + would have + V3 + if + S + had + V3.',
    examples: [
      'If Alexander Fleming had discarded the contaminated petri dish, he would never have discovered penicillin.',
      'If the engineering team had calibrated the optical sensor correctly, the satellite mission would have succeeded.',
      'We could have completed the clinical trials months earlier if we had secured federal funding in January.',
      'What would you have done if the flight to the neuroscience symposium had been cancelled?',
      'If the weather had been less severe, the rescue expedition might have reached the peak before nightfall.'
    ]
  },
  {
    id: 'mixed_conditionals',
    title: 'Mixed Conditionals (Past Condition with Present Result & vice versa)',
    subtitle: 'Connecting past actions with present consequences or permanent traits with past events',
    badge: 'Mixed Conditionals',
    description: 'Mixed conditionals blend different timeframes: Type 1: Past condition -> Present result: "If + had + V3, would + Base" ("If I had studied medicine in college, I would be a practicing surgeon today"). Type 2: Present general condition/state -> Past result: "If + Past Simple/were, would have + V3" ("If she were more organized, she wouldn\'t have lost the research data yesterday").',
    keyRule: 'Past event -> Present result: If + had + V3, would + Base Verb. Present trait -> Past result: If + Past Simple / were, would have + V3.',
    formula: 'Mixed 1: If + S + had + V3, S + would + base | Mixed 2: If + S + V2/were, S + would have + V3.',
    examples: [
      'If I had accepted the research fellowship in Zurich, I would be living in Switzerland right now.',
      'If she spoke fluent Mandarin, she would have translated the ancient manuscript for the museum yesterday.',
      'If the laboratory had not suffered a flood last week, the clinical results would be available today.',
      'If he weren\'t so arrogant, he would have listened to the safety inspector\'s warning during the trial.',
      'We would be celebrating our grant approval right now if the administrative office had processed the forms.'
    ]
  },
  {
    id: 'conditional_alternatives',
    title: 'Conditional Alternatives (Unless, Provided that, As long as, In case)',
    subtitle: 'Replacing "if" with sophisticated conditional conjunctions in academic & legal texts',
    badge: 'Unless & Provided that',
    description: 'Expand conditional precision using alternatives to "if": "Unless" = "if not" / "except if" (always followed by an affirmative verb). "Provided (that) / Providing (that)" = only on the condition that. "As long as / So long as" = only if / on the condition that. "In case" = as a precaution against a possible future situation ("Take an umbrella in case it rains").',
    keyRule: 'Unless = If not ("Unless you submit" = "If you do not submit"). In case = precaution (take an umbrella in case it rains, NOT if it rains). Provided that / As long as = only if.',
    formula: 'Unless + S + Affirmative Verb | Provided that / As long as + S + Verb | In case + S + Present Verb.',
    examples: [
      'The clinical trial cannot proceed unless the ethics committee grants official clearance.',
      'You may access the high-containment biohazard laboratory provided that you wear full protective gear.',
      'As long as the cooling system maintains sub-zero temperatures, the superconducting magnet will function.',
      'The expedition carried auxiliary satellite radios in case the primary transceiver malfunctioned.',
      'Providing that the weather conditions remain stable, the orbital rocket launch will occur at dawn.'
    ]
  },
  {
    id: 'wishes_regrets_past',
    title: 'Wishes & Regrets in Past (Wish / If only + had + V3)',
    subtitle: 'Expressing deep sorrow, remorse, and counter-factual desires about past events',
    badge: 'Wish + had done',
    description: 'Use "I wish" or "If only" followed by the Past Perfect (had + V3) to express regret or sorrow about something that happened (or failed to happen) in the past, where you desire that reality had been different.',
    keyRule: 'Subject + wish(es) + (that) + Subject + had + V3. If only + Subject + had + V3.',
    formula: 'S + wish(es) + S + had (not) + V3 | If only + S + had (not) + V3.',
    examples: [
      'The lead investigator wishes she had verified the statistical calculations before publishing the paper.',
      'If only we had backed up the master database before the ransomware attack occurred!',
      'Dr. Vance wishes he hadn\'t declined the invitation to keynote the international astrophysics summit.',
      'If only the medical team had detected the bacterial infection in its earliest stages!',
      'I wish I had studied computational linguistics during my undergraduate degree.'
    ]
  },
  {
    id: 'hypothetical_inversions_unreal',
    title: 'Hypothetical Speculation & Formal Inversion (Suppose, What if, Had we known)',
    subtitle: 'Expressing high-register hypothetical conjectures and omitting "if" through inversion',
    badge: 'Suppose & Inversion',
    description: 'In high-level academic and formal English: 1) "Suppose / Supposing / What if + Past / Past Perfect" prompts imaginative speculation. 2) Formal Inversion drops "if" by placing auxiliary verbs first: Had + Subject + V3 ("Had we known..." = "If we had known..."), Were + Subject + to-infinitive ("Were they to discover..."), Should + Subject + base verb ("Should you require...").',
    keyRule: 'Inversion drops "if": "Had I known" = "If I had known". "Were we to accept" = "If we were to accept". "Should you need" = "If you should need".',
    formula: 'Had + S + V3, S + would have + V3 | Were + S + to + V, S + would + V | Should + S + V, S + will + V.',
    examples: [
      'Had the engineers detected the structural hairline crack earlier, the bridge catastrophe would have been averted.',
      'Suppose the autonomous probe discovers microbial life on Europa, how would scientific paradigms shift?',
      'Were the research institute to lose government grant funding, many vital clinical trials would cease.',
      'Should you require further clarification regarding the data methodology, please contact the lead author.',
      'What if the particle collider had reached even higher energy collisions?'
    ]
  }
];

export function getA4ComplexConditionalsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'third_conditional':
      return generateThirdConditionalQuestions(starNumber, mSeed);
    case 'mixed_conditionals':
      return generateMixedConditionalsQuestions(starNumber, mSeed);
    case 'conditional_alternatives':
      return generateConditionalAlternativesQuestions(starNumber, mSeed);
    case 'wishes_regrets_past':
      return generatePastWishesQuestions(starNumber, mSeed);
    case 'hypothetical_inversions_unreal':
      return generateInversionsHypotheticalsQuestions(starNumber, mSeed);
    default:
      return generateThirdConditionalQuestions(starNumber, mSeed);
  }
}

// 1. Third Conditional Pool
function generateThirdConditionalQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'If the laboratory technician', target: 'had stored the bacterial cultures', wrong: ['stored the bacterial cultures', 'has stored the bacterial cultures', 'would store the bacterial cultures'], context: 'in the cryogenic freezer, they would not have degraded.', note: 'If-clause in Third Conditional takes Past Perfect: had stored.' },
    { prompt: 'The spacecraft mission', target: 'would have succeeded', wrong: ['will have succeeded', 'would succeeded', 'had succeeded in result'], context: 'if the navigation software had accounted for atmospheric drag.', note: 'Main result clause: would have succeeded.' },
    { prompt: 'If we', target: 'had known about the impending blizzard,', wrong: ['knew about the blizzard,', 'have known about blizzard,', 'would know about blizzard,'], context: 'we would have postponed the high-altitude expedition.', note: 'If + had known.' },
    { prompt: 'She', target: 'could have won the Nobel Prize', wrong: ['can have won the Nobel Prize', 'could won the Nobel Prize', 'would can win the Nobel Prize'], context: 'if her groundbreaking paper had been published earlier.', note: 'Hypothetical past capability: could have won.' },
    { prompt: 'What', target: 'would you have done', wrong: ['would you did', 'will you have done', 'did you have done'], context: 'if the clinical trial had produced severe adverse side effects?', note: 'Question form: would you have done.' },
    { prompt: 'If the fire alarm', target: 'had not sounded promptly,', wrong: ['did not sound promptly,', 'has not sounded promptly,', 'would not sound promptly,'], context: 'many university occupants would have been trapped.', note: 'Negative past condition: had not sounded.' },
    { prompt: 'The historical manuscript', target: 'might have been lost forever', wrong: ['might was lost forever', 'might have be lost', 'may had been lost'], context: 'if the archivist had not preserved it in an airtight case.', note: 'Passive result: might have been lost.' },
    { prompt: 'If you', target: 'had attended the symposium yesterday,', wrong: ['attended the symposium yesterday,', 'have attended the symposium,', 'would attend the symposium,'], context: 'you would have met the world\'s leading immunologists.', note: 'If + had attended.' },
    { prompt: 'They', target: 'wouldn\'t have missed the transatlantic flight', wrong: ['won\'t have missed the flight', 'didn\'t have missed the flight', 'wouldn\'t missed the flight'], context: 'if their airport taxi had arrived on schedule.', note: 'Negative result: wouldn\'t have missed.' },
    { prompt: 'If the quantum algorithm', target: 'had been programmed correctly,', wrong: ['was programmed correctly,', 'has been programmed correctly,', 'would be programmed correctly,'], context: 'it would have calculated the prime factors in seconds.', note: 'If + had been programmed.' },
    { prompt: 'We', target: 'would have invested in that biotech startup', wrong: ['will have invested in startup', 'had invested in startup', 'would invested in startup'], context: 'if we had reviewed their audited financial records earlier.', note: 'would have invested.' },
    { prompt: 'If the surgeon', target: 'had not acted with decisive speed,', wrong: ['did not act with decisive speed,', 'has not acted with speed,', 'would not act with speed,'], context: 'the trauma patient would have suffered irreversible damage.', note: 'If + had not acted.' },
    { prompt: 'The electrical power grid', target: 'would have collapsed completely', wrong: ['will have collapsed completely', 'had collapsed completely', 'would collapsed completely'], context: 'if automatic circuit breakers had not tripped instantly.', note: 'would have collapsed.' },
    { prompt: 'If the oceanographers', target: 'had possessed deep-sea sonar,', wrong: ['possessed deep-sea sonar,', 'have possessed deep-sea sonar,', 'would possess deep-sea sonar,'], context: 'they would have located the shipwreck decades earlier.', note: 'If + had possessed.' },
    { prompt: 'She', target: 'might have accepted the professorship in Oxford', wrong: ['might accepted the professorship', 'may had accepted professorship', 'might have accept professorship'], context: 'if the university had offered appropriate research facilities.', note: 'might have accepted.' },
    { prompt: 'If the emergency generators', target: 'had failed to start,', wrong: ['failed to start,', 'have failed to start,', 'would fail to start,'], context: 'the hospital life-support systems would have shut down.', note: 'If + had failed.' },
    { prompt: 'How', target: 'would history have unfolded', wrong: ['will history have unfolded', 'did history have unfolded', 'would history unfolded'], context: 'if the industrial revolution had started two centuries earlier?', note: 'Question: would history have unfolded.' },
    { prompt: 'If they', target: 'had warned the local residents in advance,', wrong: ['warned the local residents,', 'have warned local residents,', 'would warn local residents,'], context: 'far fewer homes would have been damaged by the flood.', note: 'If + had warned.' },
    { prompt: 'I', target: 'would not have made that calculation error', wrong: ['will not have made that error', 'did not have made that error', 'would not made that error'], context: 'if I had not been working under such severe fatigue.', note: 'would not have made.' },
    { prompt: 'If the pharmaceutical company', target: 'had completed animal trials earlier,', wrong: ['completed animal trials earlier,', 'has completed animal trials,', 'would complete animal trials,'], context: 'the vaccine would have been available before the epidemic peaked.', note: 'If + had completed.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Third Conditional');
}

// 2. Mixed Conditionals Pool
function generateMixedConditionalsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'If I had accepted the tenure-track professorship in Zurich last year, I', target: 'would be living in Switzerland right now.', wrong: ['would have lived in Switzerland right now.', 'will live in Switzerland right now.', 'am living in Switzerland right now.'], context: '', note: 'Mixed Conditional (Past condition -> Present result): If + had + V3, would + base verb + now.' },
    { prompt: 'If Dr. Lin were not so terrified of flying, she', target: 'would have attended the symposium in Tokyo yesterday.', wrong: ['would attend the symposium yesterday.', 'will have attended the symposium.', 'had attended the symposium yesterday.'], context: '', note: 'Mixed Conditional (Present permanent trait -> Past result): If + were not, would have + V3.' },
    { prompt: 'If our research team had secured the multi-million-euro grant in January, we', target: 'would not be struggling with budget deficits today.', wrong: ['would not have struggled with deficits today.', 'will not struggle with deficits today.', 'are not struggling with deficits today.'], context: '', note: 'Past action with present result: would not be struggling.' },
    { prompt: 'If she spoke fluent German, she', target: 'would have translated the historical archival document', wrong: ['would translate the document yesterday', 'will have translated the document', 'had translated the document yesterday'], context: 'for the curator yesterday.', note: 'Present ability trait -> Past result: would have translated.' },
    { prompt: 'If the laboratory had not suffered a severe flood last weekend, the clinical test results', target: 'would be ready for review this morning.', wrong: ['would have been ready this morning.', 'will be ready for review this morning.', 'are ready for review this morning.'], context: '', note: 'Past event -> Present result: would be ready.' },
    { prompt: 'He', target: 'would be a certified surgeon today', wrong: ['would have been a certified surgeon today', 'will be a surgeon today', 'is a surgeon today'], context: 'if he had not dropped out of medical school in his final year.', note: 'would be + today.' },
    { prompt: 'If they were more conscientious with lab safety protocols, the chemical fire', target: 'would never have happened yesterday.', wrong: ['would never happen yesterday.', 'will never have happened.', 'had never happened yesterday.'], context: '', note: 'General trait -> Past event: would never have happened.' },
    { prompt: 'If we had calibrated the optical spectrometer yesterday, we', target: 'would be analyzing the blood samples right now.', wrong: ['would have analyzed the samples right now.', 'will be analyzing samples right now.', 'are analyzing samples right now.'], context: '', note: 'would be analyzing + right now.' },
    { prompt: 'If Marcus had taken his prescribed heart medication regularly, he', target: 'would not be hospitalized in the ICU today.', wrong: ['would not have hospitalized today.', 'will not be hospitalized today.', 'is not hospitalized today.'], context: '', note: 'would not be hospitalized.' },
    { prompt: 'If I knew how to program neural networks, I', target: 'would have applied for that AI research fellowship last week.', wrong: ['would apply for that fellowship last week.', 'will have applied for that fellowship.', 'had applied for that fellowship last week.'], context: '', note: 'would have applied.' },
    { prompt: 'The engineering startup', target: 'would be bankrupt today', wrong: ['would have been bankrupt today', 'will be bankrupt today', 'is bankrupt today'], context: 'if venture capitalists had not injected emergency funding last quarter.', note: 'would be bankrupt today.' },
    { prompt: 'If she had not broken her clavicle during training, she', target: 'would be competing in the Olympic finals tonight.', wrong: ['would have competed in finals tonight.', 'will be competing in finals tonight.', 'is competing in finals tonight.'], context: '', note: 'would be competing + tonight.' },
    { prompt: 'If the government were truly committed to green energy, it', target: 'would have subsidized solar panel installations years ago.', wrong: ['would subsidize installations years ago.', 'will have subsidized installations.', 'had subsidized installations years ago.'], context: '', note: 'would have subsidized + years ago.' },
    { prompt: 'If you had saved your experimental code to GitHub last night, you', target: 'would not be re-writing everything today.', wrong: ['would not have rewritten everything today.', 'will not rewrite everything today.', 'are not rewriting everything today.'], context: '', note: 'would not be re-writing.' },
    { prompt: 'He', target: 'would have understood the calculus lecture yesterday', wrong: ['would understand the lecture yesterday', 'will have understood the lecture', 'had understood the lecture yesterday'], context: 'if he were better at fundamental algebra.', note: 'would have understood.' },
    { prompt: 'If the pharmaceutical company had not patented the molecule, generic versions', target: 'would be available in pharmacies right now.', wrong: ['would have been available right now.', 'will be available right now.', 'are available right now.'], context: '', note: 'would be available + right now.' },
    { prompt: 'If I were you, I', target: 'would have confronted the unethical director during the meeting.', wrong: ['would confront the director yesterday.', 'will have confronted the director.', 'had confronted the director yesterday.'], context: '', note: 'would have confronted.' },
    { prompt: 'If they had installed solar panels on the roof five years ago, their monthly electric bill', target: 'would be substantially lower today.', wrong: ['would have been lower today.', 'will be lower today.', 'is lower today.'], context: '', note: 'would be lower today.' },
    { prompt: 'She', target: 'would be working in London right now', wrong: ['would have worked in London right now', 'will be working in London right now', 'is working in London right now'], context: 'if she had received her British work visa last month.', note: 'would be working + right now.' },
    { prompt: 'If he had passed the bar examination in July, he', target: 'would be practicing corporate law today.', wrong: ['would have practiced corporate law today.', 'will be practicing law today.', 'is practicing corporate law today.'], context: '', note: 'would be practicing + today.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Mixed Conditionals');
}

// 3. Conditional Alternatives Pool
function generateConditionalAlternativesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The clinical trial cannot proceed', target: 'unless the independent ethics board grants', wrong: ['unless the board doesn\'t grant', 'if the board grants not', 'provided the board not grant'], context: 'written regulatory approval.', note: '"Unless" means "if not" and is followed by an affirmative verb: unless the board grants.' },
    { prompt: 'You may utilize the high-containment cleanroom', target: 'provided that you wear full protective gowning', wrong: ['in case you wear full protective gowning', 'unless you wear full gowning for permit', 'providing you not wear full gowning'], context: 'at all times.', note: '"Provided that" means "only on the condition that".' },
    { prompt: 'The arctic expedition team packed auxiliary satellite beacons', target: 'in case their primary transponder failed', wrong: ['if their primary transponder failed for precaution', 'unless their primary transponder failed', 'as long as their primary transponder failed'], context: 'in the polar blizzard.', note: '"In case" expresses a precaution against a possible future risk.' },
    { prompt: 'The superconducting magnet will maintain its magnetic field', target: 'as long as liquid helium circulates', wrong: ['unless liquid helium circulates', 'in case liquid helium circulates', 'providing liquid helium not circulate'], context: 'through the cooling coils.', note: '"As long as" means "on the condition that / if".' },
    { prompt: '', target: 'Unless researchers verify their calculations,', wrong: ['Unless researchers don\'t verify calculations,', 'In case researchers verify calculations for condition,', 'Providing not researchers verify calculations,'], context: 'the scientific journal will reject the submitted manuscript.', note: '"Unless + affirmative verb".' },
    { prompt: 'The university will approve your sabbatical leave', target: 'providing that you find a qualified substitute lecturer', wrong: ['unless you find a qualified substitute', 'in case you find a qualified substitute for condition', 'as long you not find a substitute'], context: 'for your courses.', note: '"Providing that" = on condition that.' },
    { prompt: 'Always carry a backup physical keycard', target: 'in case the biometric fingerprint reader malfunctions.', wrong: ['unless the fingerprint reader malfunctions.', 'as long as the reader malfunctions.', 'provided that the reader malfunctions for precaution.'], context: '', note: '"In case" for precaution.' },
    { prompt: 'You will not pass the advanced biochemistry examination', target: 'unless you master enzyme kinetics.', wrong: ['unless you don\'t master enzyme kinetics.', 'if you master enzyme kinetics for fail.', 'provided that you don\'t master kinetics.'], context: '', note: '"Unless you master".' },
    { prompt: 'We can conclude the experiment ahead of schedule', target: 'so long as the automated sensor logs no errors.', wrong: ['unless the automated sensor logs no errors.', 'in case the sensor logs no errors for condition.', 'providing not the sensor logs no errors.'], context: '', note: '"So long as" = as long as.' },
    { prompt: 'Keep the emergency eye-wash station clear of obstructions', target: 'in case a chemical spill occurs.', wrong: ['unless a chemical spill occurs.', 'as long as a chemical spill occurs.', 'provided that a chemical spill occurs.'], context: '', note: '"In case" for precaution.' },
    { prompt: 'The contract will remain legally binding', target: 'provided that neither party breaches the confidentiality clause.', wrong: ['unless neither party breaches the clause.', 'in case neither party breaches the clause for condition.', 'providing not neither party breaches.'], context: '', note: '"Provided that".' },
    { prompt: 'Patients are not permitted to leave the recovery ward', target: 'unless a senior physician signs their discharge form.', wrong: ['unless a physician doesn\'t sign their discharge.', 'in case a physician signs for permission.', 'provided not a physician signs.'], context: '', note: '"Unless a senior physician signs".' },
    { prompt: 'I will write down the server password for you', target: 'in case you forget it over the weekend.', wrong: ['unless you forget it over the weekend.', 'as long as you forget it.', 'provided that you forget it for precaution.'], context: '', note: '"In case you forget it".' },
    { prompt: 'The solar panels will supply all necessary electricity', target: 'as long as the weather remains sunny and clear.', wrong: ['unless the weather remains sunny.', 'in case the weather remains sunny for condition.', 'providing not the weather remains sunny.'], context: '', note: '"As long as".' },
    { prompt: 'No foreign visitors may enter the military archive', target: 'unless they possess diplomatic security clearance.', wrong: ['unless they don\'t possess diplomatic clearance.', 'in case they possess diplomatic clearance for permission.', 'as long as they not possess clearance.'], context: '', note: '"Unless they possess".' },
    { prompt: 'Take a waterproof thermal coat on your mountain trek', target: 'in case the weather deteriorates unexpectedly.', wrong: ['unless the weather deteriorates.', 'as long as the weather deteriorates.', 'provided that the weather deteriorates for precaution.'], context: '', note: '"In case" for precaution.' },
    { prompt: 'You can borrow the optical spectrometer for your research', target: 'provided that you return it calibrated by 5:00 PM.', wrong: ['unless you return it calibrated.', 'in case you return it calibrated for permission.', 'so long you not return it.'], context: '', note: '"Provided that".' },
    { prompt: 'The rocket launch will proceed as scheduled', target: 'providing that upper-level wind shear remains below threshold.', wrong: ['unless upper-level wind shear remains below threshold.', 'in case upper-level wind shear remains below threshold.', 'as long not wind shear remains below.'], context: '', note: '"Providing that".' },
    { prompt: 'Do not adjust the high-voltage transformer settings', target: 'unless the master circuit breaker is isolated.', wrong: ['unless the circuit breaker isn\'t isolated.', 'in case the circuit breaker is isolated for prohibition.', 'provided not the circuit breaker is isolated.'], context: '', note: '"Unless the master circuit breaker is isolated".' },
    { prompt: 'The emergency hospital generators are tested weekly', target: 'in case the municipal power grid fails.', wrong: ['unless the municipal power grid fails.', 'as long as the municipal grid fails.', 'provided that the municipal grid fails for precaution.'], context: '', note: '"In case" for contingency/precaution.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Conditional Alternatives');
}

// 4. Wishes & Regrets in Past Pool
function generatePastWishesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The lead investigator wishes she', target: 'had verified the data calculations', wrong: ['verified the data calculations', 'has verified the data calculations', 'would verify the data calculations yesterday'], context: 'before submitting the manuscript to Nature.', note: 'Wish about a past event takes Past Perfect: had verified.' },
    { prompt: 'The laboratory suffered a major fire; if only we', target: 'had backed up the master hard drives', wrong: ['backed up the master hard drives', 'have backed up the hard drives', 'would back up the hard drives yesterday'], context: 'to off-site cloud servers!', note: 'If only + Past Perfect for past regret: had backed up.' },
    { prompt: 'Dr. Evans wishes he', target: 'had not declined the professorship', wrong: ['did not decline the professorship', 'has not declined the professorship', 'would not decline the professorship then'], context: 'at the prestigious Karolinska Institute.', note: 'Negative past regret: had not declined.' },
    { prompt: 'If only the medical team', target: 'had diagnosed the rare disease earlier,', wrong: ['diagnosed the rare disease earlier,', 'has diagnosed the rare disease,', 'would diagnose the disease earlier,'], context: 'the treatment outcome would have been far more successful.', note: 'If only + had diagnosed.' },
    { prompt: 'I was soaked to the bone in the sudden thunderstorm; I wish I', target: 'had brought an umbrella with me.', wrong: ['brought an umbrella with me.', 'have brought an umbrella with me.', 'would bring an umbrella then.'], context: '', note: 'had brought.' },
    { prompt: 'The engineers wish they', target: 'had tested the thermal tiles under extreme heat', wrong: ['tested the thermal tiles', 'have tested the thermal tiles', 'would test the thermal tiles then'], context: 'before the orbital atmospheric reentry.', note: 'had tested.' },
    { prompt: 'If only I', target: 'had studied computer science', wrong: ['studied computer science', 'have studied computer science', 'would study computer science then'], context: 'during my undergraduate years at university!', note: 'had studied.' },
    { prompt: 'She failed the licensing board examination; she wishes she', target: 'had prepared more rigorously throughout the semester.', wrong: ['prepared more rigorously throughout the semester.', 'has prepared more rigorously.', 'would prepare more rigorously then.'], context: '', note: 'had prepared.' },
    { prompt: 'The museum curator wishes the priceless painting', target: 'had not been exposed to direct sunlight', wrong: ['was not exposed to direct sunlight', 'has not been exposed to sunlight', 'would not be exposed to sunlight then'], context: 'for so many decades.', note: 'had not been exposed.' },
    { prompt: 'If only we', target: 'had checked the train departure platform', wrong: ['checked the train departure platform', 'have checked the departure platform', 'would check the departure platform then'], context: 'before running all the way to terminal 4!', note: 'had checked.' },
    { prompt: 'Marcus wishes he', target: 'had not sold his vintage sports car', wrong: ['did not sell his vintage sports car', 'has not sold his sports car', 'would not sell his sports car then'], context: 'to pay for his tuition fees.', note: 'had not sold.' },
    { prompt: 'If only the government', target: 'had enacted strict carbon reduction laws', wrong: ['enacted strict carbon reduction laws', 'has enacted strict carbon laws', 'would enact strict laws decades ago'], context: 'twenty years ago!', note: 'had enacted.' },
    { prompt: 'The mountaineers were stranded on the ridge; they wished they', target: 'had listened to the weather forecast.', wrong: ['listened to the weather forecast.', 'have listened to the forecast.', 'would listen to the forecast then.'], context: '', note: 'had listened.' },
    { prompt: 'I wish I', target: 'had taken detailed laboratory notes', wrong: ['took detailed laboratory notes', 'have taken detailed notes', 'would take detailed notes then'], context: 'during the visiting professor\'s keynote demonstration.', note: 'had taken.' },
    { prompt: 'If only the surgeon', target: 'had not hesitated during the critical procedure,', wrong: ['did not hesitate during procedure,', 'has not hesitated during procedure,', 'would not hesitate during procedure,'], context: 'the patient\'s recovery time would have been much faster.', note: 'had not hesitated.' },
    { prompt: 'The airline wishes it', target: 'had purchased additional jet fuel hedges', wrong: ['purchased additional jet fuel hedges', 'has purchased fuel hedges', 'would purchase fuel hedges then'], context: 'before international oil prices surged.', note: 'had purchased.' },
    { prompt: 'She was exhausted during the morning interview; she wished she', target: 'had gone to bed earlier the night before.', wrong: ['went to bed earlier the night before.', 'has gone to bed earlier.', 'would go to bed earlier then.'], context: '', note: 'had gone to bed.' },
    { prompt: 'If only we', target: 'had known about the road closures in advance,', wrong: ['knew about the road closures,', 'have known about road closures,', 'would know about road closures then,'], context: 'we would have taken the high-speed rail instead.', note: 'had known.' },
    { prompt: 'The university dean wishes the administration', target: 'had allocated greater research funding', wrong: ['allocated greater research funding', 'has allocated greater funding', 'would allocate greater funding then'], context: 'to the quantum physics laboratory.', note: 'had allocated.' },
    { prompt: 'I wish I', target: 'had not deleted that raw audio recording', wrong: ['did not delete that raw recording', 'have not deleted that recording', 'would not delete that recording then'], context: 'from my digital field recorder.', note: 'had not deleted.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Wishes & Regrets in Past');
}

// 5. Hypothetical Speculation & Formal Inversion Pool
function generateInversionsHypotheticalsQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: '', target: 'Had the engineers detected the structural fatigue,', wrong: ['If had the engineers detected the fatigue,', 'Did the engineers have detected fatigue,', 'Were the engineers detected fatigue,'], context: 'the catastrophic bridge failure would have been prevented.', note: 'Formal Third Conditional Inversion: "Had + Subject + V3" (replaces "If the engineers had detected").' },
    { prompt: '', target: 'Were the university to lose its federal accreditation,', wrong: ['If were the university to lose accreditation,', 'Did the university to lose accreditation,', 'Had the university to lose accreditation,'], context: 'hundreds of ongoing clinical research grants would be revoked.', note: 'Formal Second Conditional Inversion: "Were + Subject + to + verb" (replaces "If the university were to lose").' },
    { prompt: '', target: 'Should you require any additional clinical documentation,', wrong: ['If should you require documentation,', 'Would you require documentation,', 'Do you should require documentation,'], context: 'please do not hesitate to contact our departmental coordinator.', note: 'Formal First Conditional Inversion: "Should + Subject + base verb" (replaces "If you should require").' },
    { prompt: '', target: 'Suppose the autonomous space probe discovers extraterrestrial bacteria,', wrong: ['Suppose if the probe discovers bacteria,', 'Supposing if the probe discovers bacteria,', 'Supposed the probe discovers bacteria,'], context: 'how will international biological protocols respond?', note: '"Suppose + present/past clause" introduces a hypothetical scenario without "if".' },
    { prompt: '', target: 'Had we known about the hazardous toxic fumes,', wrong: ['If had we known about toxic fumes,', 'Were we known about toxic fumes,', 'Did we have known about toxic fumes,'], context: 'we would never have entered the basement laboratory without respirators.', note: '"Had we known" = "If we had known".' },
    { prompt: '', target: 'What if the quantum entanglement experiment fails to reproduce results,', wrong: ['What if whether the experiment fails,', 'What suppose the experiment fails,', 'What if if the experiment fails,'], context: 'what alternate hypothesis will the physics team propose?', note: '"What if + clause" for speculation.' },
    { prompt: '', target: 'Were the government to raise carbon taxes significantly,', wrong: ['If were the government to raise taxes,', 'Had the government to raise taxes,', 'Did the government to raise taxes,'], context: 'industrial manufacturing corporations would accelerate renewable transitions.', note: '"Were + Subject + to + verb".' },
    { prompt: '', target: 'Should the emergency alarm sound at any time,', wrong: ['If should the alarm sound,', 'Would the alarm sound at any time,', 'Had the alarm sound at any time,'], context: 'all personnel must evacuate the building immediately via fire stairs.', note: '"Should + Subject + base verb".' },
    { prompt: '', target: 'Had she submitted her doctoral thesis on time,', wrong: ['If had she submitted her thesis,', 'Were she submitted her thesis,', 'Did she have submitted her thesis,'], context: 'she would have graduated alongside the rest of her cohort in June.', note: '"Had she submitted".' },
    { prompt: '', target: 'Imagine you were appointed the chief director of NASA,', wrong: ['Imagine if that you were appointed,', 'Imagining if you were appointed,', 'Imagine were you appointed NASA,'], context: 'which interplanetary space mission would you prioritize first?', note: '"Imagine (that) + clause" for hypothetical thought experiments.' },
    { prompt: '', target: 'Had the pilot not executed an emergency belly landing,', wrong: ['If had the pilot not executed landing,', 'Were the pilot not executed landing,', 'Did the pilot not have executed landing,'], context: 'the aircraft would have overshot the runway into the ocean.', note: 'Negative inversion: "Had + Subject + not + V3".' },
    { prompt: '', target: 'Were scientists to successfully synthesize room-temperature superconductors,', wrong: ['If were scientists to synthesize,', 'Had scientists to synthesize,', 'Did scientists to synthesize,'], context: 'global electrical transmission losses would drop to absolute zero.', note: '"Were scientists to synthesize".' },
    { prompt: '', target: 'Should there be any discrepancies in the audited financial statements,', wrong: ['If should there be discrepancies,', 'Would there be discrepancies,', 'Had there be discrepancies,'], context: 'the corporate compliance committee will launch an immediate investigation.', note: '"Should there be".' },
    { prompt: '', target: 'Supposing the sea level rises by two meters over the next century,', wrong: ['Supposing if the sea level rises,', 'Supposed the sea level rises,', 'Supposing whether the sea level rises,'], context: 'which coastal metropolitan regions will require sea wall construction?', note: '"Supposing + clause".' },
    { prompt: '', target: 'Had the pharmaceutical firm not patented the formula,', wrong: ['If had the firm not patented,', 'Were the firm not patented,', 'Did the firm not have patented,'], context: 'affordable generic vaccines would have been distributed across developing nations.', note: '"Had the firm not patented".' },
    { prompt: '', target: 'Were you to be offered the prestigious research chair at Harvard,', wrong: ['If were you to be offered,', 'Had you to be offered,', 'Did you to be offered,'], context: 'would you be willing to relocate your family to Massachusetts?', note: '"Were you to be offered".' },
    { prompt: '', target: 'Should the temperature inside the cryogenic chamber exceed minus seventy degrees,', wrong: ['If should the temperature exceed,', 'Would the temperature exceed,', 'Had the temperature exceed,'], context: 'an automatic audible siren will alert the duty technician.', note: '"Should + subject + base verb".' },
    { prompt: '', target: 'Had they calibrated the optical mirrors to nanometer precision,', wrong: ['If had they calibrated mirrors,', 'Were they calibrated mirrors,', 'Did they have calibrated mirrors,'], context: 'the space telescope would have resolved the distant exoplanet atmosphere.', note: '"Had they calibrated".' },
    { prompt: '', target: 'Suppose you could travel backwards in time to any historical era,', wrong: ['Suppose if you could travel,', 'Supposing if you could travel,', 'Supposed you could travel,'], context: 'which scientific breakthrough would you choose to witness firsthand?', note: '"Suppose + hypothetical clause".' },
    { prompt: '', target: 'Had the medical residents noticed the adverse allergic reaction earlier,', wrong: ['If had the residents noticed,', 'Were the residents noticed,', 'Did the residents have noticed,'], context: 'the patient would not have required intensive resuscitation.', note: '"Had the medical residents noticed".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Hypothetical Speculation & Formal Inversion');
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
