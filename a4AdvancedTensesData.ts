import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A4_ADVANCED_TENSES_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'future_perfect_simple',
    title: 'Future Perfect Simple (will have + V3 / past participle)',
    subtitle: 'Actions that will be completed before a specific future deadline or milestone',
    badge: 'will have done',
    description: 'Use the Future Perfect Simple (will have + past participle) to look back from a future point in time at an action that will already be finished or completed before that future moment. Key time markers: "by [time]", "by the time + present simple", "by next year", "in two weeks\' time", "before".',
    keyRule: 'Subject + will have + V3 (Past Participle). Always anchored to a future point in time introduced with "by" or "before".',
    formula: 'Affirmative: S + will have + V3 | Negative: S + won\'t have + V3 | Question: Will + S + have + V3?',
    examples: [
      'By the year 2030, scientists will have developed more efficient fusion reactor prototypes.',
      'By the time the keynote speaker arrives, we will have prepared the auditorium.',
      'In three months\' time, she will have completed her postdoctoral research fellowship.',
      'Will the engineering team have finished the bridge inspection by Friday evening?',
      'They won\'t have finalized the clinical report before the board meets next Tuesday.'
    ]
  },
  {
    id: 'future_perfect_continuous',
    title: 'Future Perfect Continuous (will have been + V-ing)',
    subtitle: 'Emphasizing ongoing duration up to a specific milestone in the future',
    badge: 'will have been doing',
    description: 'Use the Future Perfect Continuous (will have been + verb-ing) to emphasize the ongoing duration of an activity up to a specific point in the future. It highlights how long an action will have been in progress by that future moment. Common markers: "by [time] ... for [duration]".',
    keyRule: 'Subject + will have been + Verb-ing. Combines a future milestone ("by November") with a duration marker ("for five years").',
    formula: 'Affirmative: S + will have been + V-ing | Negative: S + won\'t have been + V-ing | Question: Will + S + have been + V-ing?',
    examples: [
      'By next October, Dr. Alvarez will have been leading the neurogenetics lab for twenty years.',
      'When the marathon ends, the elite runners will have been racing for over two hours.',
      'By midnight, the computational servers will have been running the climate model for forty-eight hours.',
      'Will you have been living in Stockholm for a full decade by next summer?',
      'She won\'t have been practicing law for very long when she takes on her first federal case.'
    ]
  },
  {
    id: 'past_perfect_continuous',
    title: 'Past Perfect Continuous (had been + V-ing)',
    subtitle: 'Ongoing actions in progress up to a specific point in the past',
    badge: 'had been doing',
    description: 'Use the Past Perfect Continuous (had been + verb-ing) to describe an activity that was ongoing over a period of time in the past BEFORE another past event happened, especially when focusing on the continuous duration or the visible result/exhaustion caused by the activity.',
    keyRule: 'Subject + had been + Verb-ing. Focuses on the duration of an activity leading up to a past moment ("He was exhausted because he had been working all night").',
    formula: 'Affirmative: S + had been + V-ing | Negative: S + hadn\'t been + V-ing | Question: Had + S + been + V-ing?',
    examples: [
      'The geologists had been studying the seismic activity for months before the volcano erupted.',
      'Her eyes were stinging because she had been analyzing microscope slides without a break.',
      'They had been negotiating the pharmaceutical merger for six months when talks collapsed.',
      'How long had the team been conducting trials before they achieved the breakthrough?',
      'It had been snowing continuously for three days before the mountain pass was closed.'
    ]
  },
  {
    id: 'time_clauses_future',
    title: 'Time Clauses with Future Meaning (when, as soon as, until, once + Present)',
    subtitle: 'Using present tenses instead of "will" in future subordinate time clauses',
    badge: 'Time Clauses (No Will)',
    description: 'In English time clauses referring to the future (introduced by conjunctions such as "when", "as soon as", "until", "before", "after", "the moment that", "once", "by the time"), we MUST use a PRESENT tense (Present Simple or Present Perfect), NEVER a future modal like "will". The main clause contains the future modal.',
    keyRule: 'Rule: Conjunction (when / as soon as / until / once / before) + Present Simple / Present Perfect (NO "will" in time clause!), Main Clause + will / modal.',
    formula: 'When / As soon as / Once + S + Present Simple/Perfect, S + will + Base Verb.',
    examples: [
      'As soon as the laboratory receives the viral samples, we will begin genomic sequencing.',
      'We will not publish the statistical findings until the peer-review panel approves the methodology.',
      'Once the quantum processor reaches absolute zero, the calculation will start automatically.',
      'By the time the rescue team arrives, the storm will have passed over the valley.',
      'Please call me as soon as you finish your clinical rotation.'
    ]
  },
  {
    id: 'habits_past_used_to_would',
    title: 'Past Habits & States: Used to, Would, Be used to vs. Get used to (-ing)',
    subtitle: 'Distinguishing past routines, past states, familiarity, and adapting to new situations',
    badge: 'Used to vs. Would',
    description: 'Distinguish these distinct structures: 1) "Used to + base verb" (past habits AND past states that are no longer true). 2) "Would + base verb" (past repeated actions/routines only; NEVER for past states). 3) "Be used to + noun/V-ing" (be accustomed to / familiar with). 4) "Get used to + noun/V-ing" (the process of becoming accustomed/adapted to something).',
    keyRule: 'Used to + base = past habits & states. Would + base = past repeated actions ONLY (no stative verbs: NOT "would live in Paris"). Be/Get used to + V-ing = accustomed to something.',
    formula: 'Past Habit: S + used to / would + base | Familiarity: S + be / get used to + V-ing / noun.',
    examples: [
      'In the nineteenth century, astronomers used to record celestial observations by hand.',
      'During his summer internships, he would spend hours cataloging botanical specimens (routine action).',
      'I used to live in Edinburgh (state: "would live" is incorrect).',
      'The surgeon is used to working long, demanding shifts in the emergency theater (accustomed).',
      'It took the international exchange students several weeks to get used to living in London.'
    ]
  }
];

export function getA4AdvancedTensesStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'future_perfect_simple':
      return generateFuturePerfectQuestions(starNumber, mSeed);
    case 'future_perfect_continuous':
      return generateFuturePerfContQuestions(starNumber, mSeed);
    case 'past_perfect_continuous':
      return generatePastPerfContQuestions(starNumber, mSeed);
    case 'time_clauses_future':
      return generateTimeClausesQuestions(starNumber, mSeed);
    case 'habits_past_used_to_would':
      return generateHabitsUsedToQuestions(starNumber, mSeed);
    default:
      return generateFuturePerfectQuestions(starNumber, mSeed);
  }
}

// 1. Future Perfect Simple Pool
function generateFuturePerfectQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'By the time the symposium begins on Friday, the research team', target: 'will have finalized', wrong: ['will finalize', 'will be finalized', 'will have been finalized by self'], context: 'all twenty-four conference slides.', note: 'Future Perfect "will have + V3" shows completion before a future timestamp.' },
    { prompt: 'In five years\' time, renewable energy infrastructure', target: 'will have replaced', wrong: ['will replace', 'will be replacing', 'will has replaced'], context: 'the majority of regional coal generators.', note: 'Action completed by a future date: will have replaced.' },
    { prompt: 'By midnight, the automated sequencing machine', target: 'will have processed', wrong: ['will process', 'will be processed', 'has processed by midnight'], context: 'over ten thousand DNA strands.', note: 'Completion before future time: will have processed.' },
    { prompt: 'Dr. Evans', target: 'will have retired', wrong: ['will retire', 'will be retired by self', 'will has retired'], context: 'by the end of the current academic semester after forty years of teaching.', note: 'Completed milestone: will have retired.' },
    { prompt: 'Do you think the contractors', target: 'will have completed the construction', wrong: ['will complete the construction', 'will be completed construction', 'will have been completed construction'], context: 'of the new science wing before the winter term?', note: 'Future perfect question: will have completed.' },
    { prompt: 'By next November, they', target: 'will have published', wrong: ['will publish', 'will be publishing', 'published by next November'], context: 'three major textbooks on statistical thermodynamics.', note: 'will have published.' },
    { prompt: 'The space probe', target: 'will have traveled', wrong: ['will travel', 'will be traveling', 'will has traveled'], context: 'billions of kilometers by the time it reaches the outer solar boundary.', note: 'will have traveled.' },
    { prompt: 'She', target: 'won\'t have finished', wrong: ['won\'t finish', 'won\'t be finished by self', 'isn\'t finish'], context: 'her clinical residency before her twenty-eighth birthday.', note: 'Negative future perfect: won\'t have finished.' },
    { prompt: 'By the time you wake up tomorrow morning, our transatlantic flight', target: 'will have landed', wrong: ['will land', 'will be landing', 'lands already'], context: 'at London Heathrow.', note: 'will have landed.' },
    { prompt: 'The municipal council', target: 'will have upgraded', wrong: ['will upgrade', 'will be upgraded', 'will has upgraded'], context: 'the city\'s entire water filtration grid by 2030.', note: 'will have upgraded.' },
    { prompt: 'How many patient samples', target: 'will the laboratory have analyzed', wrong: ['will the laboratory analyze', 'will the laboratory analyzing', 'does the laboratory have analyzed'], context: 'by the end of this month?', note: 'Question form: will + subject + have + V3.' },
    { prompt: 'By this time next week, we', target: 'will have moved', wrong: ['will move', 'will be moved', 'will has moved'], context: 'into our new state-of-the-art biochemistry facility.', note: 'will have moved.' },
    { prompt: 'The battery engineers', target: 'will have achieved', wrong: ['will achieve', 'will be achieving', 'will has achieved'], context: 'a 50% increase in energy density by next generation rollout.', note: 'will have achieved.' },
    { prompt: 'I hope I', target: 'will have saved', wrong: ['will save', 'will be saving', 'saved by then'], context: 'sufficient funds to attend the world cardiology summit in Paris.', note: 'will have saved.' },
    { prompt: 'By next summer, the reforestation charity', target: 'will have planted', wrong: ['will plant', 'will be planting', 'will has planted'], context: 'over one million native trees across the valley.', note: 'will have planted.' },
    { prompt: 'The students', target: 'will have taken', wrong: ['will take', 'will be taking', 'will took'], context: 'all six licensing examinations before the graduation ceremony.', note: 'will have taken.' },
    { prompt: 'By the end of the decade, artificial intelligence', target: 'will have transformed', wrong: ['will transform', 'will be transforming', 'will has transformed'], context: 'clinical diagnostic imaging.', note: 'will have transformed.' },
    { prompt: 'Don\'t worry; the storm', target: 'will have passed', wrong: ['will pass', 'will be passing', 'will has passed'], context: 'by tomorrow afternoon.', note: 'will have passed.' },
    { prompt: 'In two months, she', target: 'will have mastered', wrong: ['will master', 'will be mastering', 'will has mastered'], context: 'advanced Python programming for statistical data science.', note: 'will have mastered.' },
    { prompt: 'The government', target: 'will have implemented', wrong: ['will implement', 'will be implementing', 'will has implemented'], context: 'the new cybersecurity regulations by January first.', note: 'will have implemented.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Future Perfect Simple');
}

// 2. Future Perfect Continuous Pool
function generateFuturePerfContQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'By next December, Professor Zhang', target: 'will have been researching', wrong: ['will be researching', 'will have researched for duration', 'will have being researching'], context: 'superconducting nanomaterials at MIT for twenty-five years.', note: 'Future Perfect Continuous emphasizes duration up to a future point: will have been researching.' },
    { prompt: 'When the international marathon concludes, the elite athletes', target: 'will have been running', wrong: ['will be running', 'will have runned', 'will have being running'], context: 'for over two hours in grueling humidity.', note: 'Duration of ongoing physical effort: will have been running.' },
    { prompt: 'By midnight, the supercomputing cluster', target: 'will have been processing', wrong: ['will be processing', 'will have processed for continuous', 'will have being processing'], context: 'the cosmological simulation for seventy-two consecutive hours.', note: 'will have been processing.' },
    { prompt: 'By the time she completes her surgical fellowship, Dr. Lin', target: 'will have been studying', wrong: ['will be studying', 'will have studied for', 'will have being studying'], context: 'medicine for fourteen continuous years.', note: 'will have been studying.' },
    { prompt: 'Next month, they', target: 'will have been living', wrong: ['will be living', 'will have lived exclusively', 'will have being living'], context: 'in their solar-powered eco-home for a full decade.', note: 'will have been living.' },
    { prompt: 'By 5:00 PM, the technicians', target: 'will have been troubleshooting', wrong: ['will be troubleshooting', 'will have troubleshooted', 'will have being troubleshooting'], context: 'the network outage for eight straight hours.', note: 'will have been troubleshooting.' },
    { prompt: 'When the satellite reaches orbit, the ground team', target: 'will have been tracking', wrong: ['will be tracking', 'will have tracked for', 'will have being tracking'], context: 'its telemetry trajectory for four weeks.', note: 'will have been tracking.' },
    { prompt: 'How long', target: 'will you have been working', wrong: ['will you be working', 'will you have worked for question', 'will you have being working'], context: 'on this robotics project by the time it is demonstrated at the expo?', note: 'Question form: will you have been working.' },
    { prompt: 'By the time the harvest festival begins, the farmers', target: 'will have been toiling', wrong: ['will be toiling', 'will have toiled for', 'will have being toiling'], context: 'in the vineyards for six months.', note: 'will have been toiling.' },
    { prompt: 'In two weeks, the Antarctic expedition team', target: 'will have been enduring', wrong: ['will be enduring', 'will have endured for', 'will have being enduring'], context: 'sub-zero polar blizzards for fifty days.', note: 'will have been enduring.' },
    { prompt: 'By the time his novel is published, Marcus', target: 'will have been writing', wrong: ['will be writing', 'will have written for continuous', 'will have being writing'], context: 'and revising it for seven years.', note: 'will have been writing.' },
    { prompt: 'When the shift ends at dawn, the emergency nurses', target: 'will have been caring', wrong: ['will be caring', 'will have cared for', 'will have being caring'], context: 'for trauma patients for twelve nonstop hours.', note: 'will have been caring.' },
    { prompt: 'By the year 2035, climatologists', target: 'will have been monitoring', wrong: ['will be monitoring', 'will have monitored for', 'will have being monitoring'], context: 'the Greenland ice sheet thickness for half a century.', note: 'will have been monitoring.' },
    { prompt: 'She', target: 'will have been teaching', wrong: ['will be teaching', 'will have taught for', 'will have being teaching'], context: 'quantum chemistry at Oxford for thirty years by next spring.', note: 'will have been teaching.' },
    { prompt: 'When the flight reaches Tokyo, the passengers', target: 'will have been flying', wrong: ['will be flying', 'will have flown for continuous', 'will have being flying'], context: 'across thirteen time zones for over fourteen hours.', note: 'will have been flying.' },
    { prompt: 'By next week, the deep-sea submersible', target: 'will have been exploring', wrong: ['will be exploring', 'will have explored for', 'will have being exploring'], context: 'the Mariana Trench hydrothermal vents for twenty days.', note: 'will have been exploring.' },
    { prompt: 'How long', target: 'will Dr. Gomez have been practicing', wrong: ['will Dr. Gomez be practicing', 'will Dr. Gomez have practiced for', 'does Dr. Gomez have been practicing'], context: 'cardiology when he accepts the department chairmanship?', note: 'Question form: will Dr. Gomez have been practicing.' },
    { prompt: 'By midnight, the volunteer firefighters', target: 'will have been battling', wrong: ['will be battling', 'will have battled for', 'will have being battling'], context: 'the forest blaze for thirty-six hours.', note: 'will have been battling.' },
    { prompt: 'In August, our research institute', target: 'will have been collaborating', wrong: ['will be collaborating', 'will have collaborated for', 'will have being collaborating'], context: 'with the CERN laboratory for ten productive years.', note: 'will have been collaborating.' },
    { prompt: 'By the time the tournament concludes, the chess grandmaster', target: 'will have been playing', wrong: ['will be playing', 'will have played for', 'will have being playing'], context: 'high-stakes championship matches for two weeks.', note: 'will have been playing.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Future Perfect Continuous');
}

// 3. Past Perfect Continuous Pool
function generatePastPerfContQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The vulcanologists were exhausted because they', target: 'had been monitoring', wrong: ['have been monitoring', 'were monitoring for months before', 'had monitored for continuous'], context: 'the volcanic seismic tremors without sleep for three days.', note: 'Past Perfect Continuous shows duration leading up to a past state: had been monitoring.' },
    { prompt: 'Her eyes were red and strained because she', target: 'had been staring', wrong: ['has been staring', 'was staring since', 'had stared for continuous'], context: 'at the electron microscope monitor for eight hours.', note: 'Tangible past result of ongoing activity: had been staring.' },
    { prompt: 'Before the sudden financial collapse, the investment bank', target: 'had been expanding', wrong: ['has been expanding', 'was expanding for years before', 'had expanded for continuous'], context: 'its derivative operations aggressively for a decade.', note: 'had been expanding.' },
    { prompt: 'The ground was muddy and covered in puddles because it', target: 'had been raining', wrong: ['has been raining', 'was raining since', 'had rained for continuous'], context: 'heavily throughout the previous night.', note: 'had been raining.' },
    { prompt: 'How long', target: 'had the engineers been troubleshooting', wrong: ['have the engineers been troubleshooting', 'were the engineers troubleshooting for', 'had the engineers troubleshooted'], context: 'the rocket thruster before they discovered the faulty valve?', note: 'Question form: had + subject + been + V-ing.' },
    { prompt: 'Dr. Alvarez was thrilled because his team', target: 'had been searching for', wrong: ['has been searching for', 'was searching for since', 'had searched for continuous'], context: 'that rare genomic mutation for over five years.', note: 'had been searching for.' },
    { prompt: 'The aircraft engine failed because a worn bearing', target: 'had been overheating', wrong: ['has been overheating', 'was overheating for hours before', 'had overheated continuously'], context: 'gradually over the previous two hours.', note: 'had been overheating.' },
    { prompt: 'He smelled strongly of gasoline because he', target: 'had been repairing', wrong: ['has been repairing', 'was repairing since', 'had repaired for'], context: 'the vintage marine engine all morning.', note: 'Direct past physical evidence: had been repairing.' },
    { prompt: 'They', target: 'had been discussing', wrong: ['have been discussing', 'were discussing since', 'had discussed for continuous'], context: 'the ethical guidelines for four hours before reaching a consensus.', note: 'had been discussing.' },
    { prompt: 'She was out of breath when she arrived because she', target: 'had been running', wrong: ['has been running', 'was running since', 'had runned'], context: 'all the way from the subway station.', note: 'had been running.' },
    { prompt: 'The crops were dying because the region', target: 'had been suffering', wrong: ['has been suffering', 'was suffering since', 'had suffered for continuous'], context: 'from severe drought conditions for six months.', note: 'had been suffering.' },
    { prompt: 'The musicians were completely in sync because they', target: 'had been rehearsing', wrong: ['have been rehearsing', 'were rehearsing since', 'had rehearsed for continuous'], context: 'the symphony together for several months.', note: 'had been rehearsing.' },
    { prompt: 'Before her breakthrough discovery, Dr. Curie', target: 'had been isolating', wrong: ['has been isolating', 'was isolating since', 'had isolated continuously'], context: 'radium compounds from pitchblende ore for years.', note: 'had been isolating.' },
    { prompt: 'The forensic team', target: 'had been searching the crime scene', wrong: ['has been searching the crime scene', 'was searching the scene since', 'had searched the scene for'], context: 'for ten hours before discovering the hidden micro-drive.', note: 'had been searching.' },
    { prompt: 'Marcus was frustrated because his computer', target: 'had been crashing', wrong: ['has been crashing', 'was crashing since', 'had crashed continuously for hours'], context: 'repeatedly throughout the afternoon.', note: 'had been crashing.' },
    { prompt: 'The archeologists were ecstatic because they', target: 'had been excavating', wrong: ['have been excavating', 'were excavating since', 'had excavated for continuous'], context: 'the ancient burial site for three seasons before finding the gold tomb.', note: 'had been excavating.' },
    { prompt: 'He failed the exam because he', target: 'had not been attending', wrong: ['has not been attending', 'was not attending since', 'did not been attending'], context: 'the mandatory laboratory lectures regularly.', note: 'had not been attending.' },
    { prompt: 'The marathon runner collapsed because he', target: 'had been pushing', wrong: ['has been pushing', 'was pushing since', 'had pushed continuously'], context: 'himself far beyond his cardiovascular limits in the heat.', note: 'had been pushing.' },
    { prompt: 'The negotiators were close to an agreement because they', target: 'had been working', wrong: ['have been working', 'were working since', 'had worked continuously'], context: 'tirelessly throughout the night.', note: 'had been working.' },
    { prompt: 'The dog was shivering violently because it', target: 'had been swimming', wrong: ['has been swimming', 'was swimming since', 'had swum continuously'], context: 'in the icy mountain river.', note: 'had been swimming.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Past Perfect Continuous');
}

// 4. Time Clauses with Future Meaning Pool
function generateTimeClausesQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'As soon as the biological laboratory', target: 'receives the specimens,', wrong: ['will receive the specimens,', 'is receiving the specimens,', 'shall receive the specimens,'], context: 'the virology team will initiate DNA sequencing.', note: 'In future time clauses (after as soon as/when/until), use Present Simple (NOT "will").' },
    { prompt: 'We will not publish the clinical trial conclusions until the independent panel', target: 'reviews all patient data.', wrong: ['will review all patient data.', 'is going to review all patient data.', 'shall review all patient data.'], context: '', note: '"Until + Present Simple" for future condition.' },
    { prompt: 'Once the quantum computer', target: 'reaches cryogenic temperatures,', wrong: ['will reach cryogenic temperatures,', 'is reaching cryogenic temperatures,', 'shall reach cryogenic temperatures,'], context: 'the quantum entanglement calculation will proceed.', note: '"Once + Present Simple".' },
    { prompt: 'By the time the emergency rescue helicopter', target: 'lands on the mountain ridge,', wrong: ['will land on the mountain ridge,', 'is landing on the mountain ridge,', 'shall land on the mountain ridge,'], context: 'the medical paramedics will have stabilized the patient.', note: '"By the time + Present Simple".' },
    { prompt: 'Please calibrate the spectrophotometer before you', target: 'begin the chemical analysis.', wrong: ['will begin the chemical analysis.', 'are beginning the chemical analysis.', 'shall begin the chemical analysis.'], context: '', note: '"Before + Present Simple".' },
    { prompt: 'The spacecraft will ignite its main descent thrusters when it', target: 'enters the Martian atmosphere.', wrong: ['will enter the Martian atmosphere.', 'is entering the Martian atmosphere.', 'shall enter the Martian atmosphere.'], context: '', note: '"When + Present Simple" (never "when it will enter").' },
    { prompt: 'As soon as Dr. Lin', target: 'has completed her peer review,', wrong: ['will complete her peer review,', 'will have completed her peer review,', 'shall complete her review,'], context: 'she will upload the editorial assessment to the portal.', note: '"As soon as + Present Perfect" expresses completed future action.' },
    { prompt: 'I will call you the moment that our flight', target: 'touches down in Singapore.', wrong: ['will touch down in Singapore.', 'is touching down in Singapore.', 'shall touch down in Singapore.'], context: '', note: '"The moment that + Present Simple".' },
    { prompt: 'We cannot authorize human clinical trials until the regulatory agency', target: 'grants official approval.', wrong: ['will grant official approval.', 'is granting official approval.', 'shall grant official approval.'], context: '', note: '"Until + Present Simple".' },
    { prompt: 'After the statistical software', target: 'finishes compiling the dataset,', wrong: ['will finish compiling the dataset,', 'is finishing compiling the dataset,', 'shall finish compiling the dataset,'], context: 'we will generate the three-dimensional visual graphs.', note: '"After + Present Simple".' },
    { prompt: 'The power plant will automatically switch to backup generators if the grid voltage', target: 'drops below the safety threshold.', wrong: ['will drop below the threshold.', 'is dropping below threshold.', 'shall drop below threshold.'], context: '', note: '"If/When + Present Simple".' },
    { prompt: 'By the time you', target: 'graduate from the medical academy,', wrong: ['will graduate from the academy,', 'are graduating from academy,', 'shall graduate from academy,'], context: 'robotic surgery will have become standard practice.', note: '"By the time + Present Simple".' },
    { prompt: 'The committee will make a formal announcement as soon as they', target: 'reach a unanimous consensus.', wrong: ['will reach a unanimous consensus.', 'are reaching a consensus,', 'shall reach a consensus,'], context: '', note: '"As soon as + Present Simple".' },
    { prompt: 'Do not touch the laser emitter while the yellow indicator light', target: 'is flashing.', wrong: ['will flash.', 'will be flashing.', 'shall flash.'], context: '', note: '"While + Present Continuous" in time clause.' },
    { prompt: 'We will celebrate with the entire department once our grant proposal', target: 'is approved.', wrong: ['will be approved.', 'will have approved.', 'shall be approved.'], context: '', note: '"Once + Present Passive".' },
    { prompt: 'The satellite will continue transmitting data until its onboard battery', target: 'runs out of power.', wrong: ['will run out of power.', 'is running out of power.', 'shall run out of power.'], context: '', note: '"Until + Present Simple".' },
    { prompt: 'As soon as the temperature', target: 'falls below freezing,', wrong: ['will fall below freezing,', 'is falling below freezing,', 'shall fall below freezing,'], context: 'the municipal road crews will spray salt onto the bridges.', note: '"As soon as + Present Simple".' },
    { prompt: 'She will take the board certification examination after she', target: 'completes her hospital internship.', wrong: ['will complete her hospital internship.', 'is completing her internship.', 'shall complete her internship.'], context: '', note: '"After + Present Simple".' },
    { prompt: 'The security system will sound an alarm when an unauthorized user', target: 'attempts to log into the database.', wrong: ['will attempt to log into database.', 'is attempting to log into database.', 'shall attempt to log into database.'], context: '', note: '"When + Present Simple".' },
    { prompt: 'We will stay inside the mountain shelter until the blizzard', target: 'clears.', wrong: ['will clear.', 'is clearing.', 'shall clear.'], context: '', note: '"Until + Present Simple".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Time Clauses with Future Meaning');
}

// 5. Past Habits & States Pool
function generateHabitsUsedToQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'When Dr. Reynolds was an undergraduate in Oxford, he', target: 'used to live in a small dormitory room.', wrong: ['would live in a small dormitory room.', 'was used to live in a room.', 'got used to live in a room.'], context: '', note: '"Used to" is required for past states (live, be, have, know); "would" cannot be used for stative verbs.' },
    { prompt: 'During summer research expeditions, the geologists', target: 'would hike up the glacier at sunrise', wrong: ['used to hiking up the glacier', 'were used to hike up the glacier', 'got used hike up the glacier'], context: 'to collect ice core samples.', note: '"Would + base verb" describes repeated routine past actions.' },
    { prompt: 'The surgeon is completely', target: 'used to working under immense pressure', wrong: ['used to work under immense pressure', 'would work under immense pressure', 'use to working under immense pressure'], context: 'in the emergency trauma unit.', note: '"Be used to + V-ing" means accustomed to something.' },
    { prompt: 'It took the international exchange students nearly six months to', target: 'get used to eating spicy cuisine', wrong: ['get used to eat spicy cuisine', 'be used to eat spicy cuisine', 'used to eat spicy cuisine for adapt'], context: 'in Seoul.', note: '"Get used to + V-ing" describes the process of adapting.' },
    { prompt: 'Before the invention of digital sensors, meteorologists', target: 'used to record barometric readings manually.', wrong: ['used to recording readings manually.', 'were used to record readings manually.', 'would to record readings manually.'], context: '', note: '"Used to + base verb" for past habitual action.' },
    { prompt: 'Whenever we visited my grandfather\'s workshop, he', target: 'would demonstrate how clockwork gears worked.', wrong: ['would to demonstrate how gears worked.', 'used to demonstrating how gears worked.', 'was used to demonstrate how gears worked.'], context: '', note: '"Would + base verb" for past repeated habits.' },
    { prompt: 'I', target: 'used to have a vintage motorcycle,', wrong: ['would have a vintage motorcycle,', 'was used to have a vintage motorcycle,', 'got used to have a vintage motorcycle,'], context: 'but I sold it when I moved into the city.', note: 'Possession is a stative verb: used to have (NOT would have).' },
    { prompt: 'Are you', target: 'used to driving on the left side', wrong: ['used to drive on the left side', 'use to drive on the left side', 'would drive on the left side'], context: 'of the road in the United Kingdom?', note: '"Are you used to + V-ing" for familiarity.' },
    { prompt: 'She found the cold Scandinavian winter harsh at first, but she quickly', target: 'got used to the freezing temperatures.', wrong: ['got used to freeze temperatures.', 'used to the freezing temperatures.', 'would get used to freeze.'], context: '', note: '"Got used to + noun phrase".' },
    { prompt: 'Astronomers', target: 'used to believe that the Earth was the center', wrong: ['would believe that Earth was center', 'were used to believe that Earth', 'got used to believe that Earth'], context: 'of the universe before Copernicus.', note: '"Believe" is a stative verb of cognition: used to believe (NOT would believe).' },
    { prompt: 'Every Friday afternoon, the department faculty', target: 'would gather in the lounge to discuss physics.', wrong: ['would to gather in the lounge', 'used to gathering in the lounge', 'were used to gather in lounge'], context: '', note: '"Would + base verb" for past repeated routine.' },
    { prompt: 'Did you', target: 'use to play the cello', wrong: ['used to play the cello', 'used to playing the cello', 'would play the cello'], context: 'when you attended the music conservatory?', note: 'Question form with Did: Did you use to play (spelled "use to" after "did").' },
    { prompt: 'The airline pilot is', target: 'used to flying across multiple time zones', wrong: ['used to fly across multiple time zones', 'use to flying across time zones', 'would fly across time zones'], context: 'without experiencing severe jetlag.', note: '"Be used to + V-ing" for familiarity.' },
    { prompt: 'I never', target: 'used to enjoy classical opera,', wrong: ['used to enjoying classical opera,', 'would enjoy classical opera,', 'was used to enjoy classical opera,'], context: 'but now I attend performances regularly.', note: '"Enjoy" is a state of preference: used to enjoy.' },
    { prompt: 'When we were children in the alpine village, we', target: 'would build igloos out of fresh snow', wrong: ['would to build igloos', 'used to building igloos', 'got used to build igloos'], context: 'every winter holiday.', note: '"Would + base verb" for repeated past action.' },
    { prompt: 'He is not', target: 'used to waking up at 5:00 AM', wrong: ['used to wake up at 5:00 AM', 'use to waking up at 5:00 AM', 'would wake up at 5:00 AM'], context: 'for the early hospital clinical rounds.', note: '"Not used to + V-ing".' },
    { prompt: 'After relocating to Tokyo, she gradually', target: 'got used to commuting on crowded trains.', wrong: ['got used to commute on crowded trains.', 'used to commute on crowded trains for adapt.', 'was used to commute on trains.'], context: '', note: '"Got used to + V-ing" for adapting.' },
    { prompt: 'There', target: 'used to be an ancient Roman fort', wrong: ['would be an ancient Roman fort', 'was used to be an Roman fort', 'got used to be an Roman fort'], context: 'on the hill overlooking the river valley.', note: 'Existence is a stative verb: used to be (NOT would be).' },
    { prompt: 'In the evenings, the elderly professor', target: 'would sit by the library fireplace reading classics.', wrong: ['would to sit by the fireplace', 'used to sitting by fireplace', 'got used to sit by fireplace'], context: '', note: '"Would + base verb" for nostalgic repeated past actions.' },
    { prompt: 'I didn\'t', target: 'use to like mushrooms,', wrong: ['used to like mushrooms,', 'use to liking mushrooms,', 'used to like mushrooms, strictly'], context: 'but now they are one of my favorite ingredients.', note: 'Negative with didn\'t: didn\'t use to like.' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Past Habits: Used to, Would & Be/Get used to');
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
