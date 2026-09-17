import { GrammarQuestion } from './nounsPronounsData';
import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { GenericGrammarTopicItem } from './components/GenericGrammarExerciseView';

export const A4_DISCOURSE_CONNECTORS_TOPICS: GenericGrammarTopicItem[] = [
  {
    id: 'result_consequence_markers',
    title: 'Result & Consequence Markers (Consequently, As a result, Therefore, Thus, Hence)',
    subtitle: 'Connecting logical deductions, mathematical proofs, and empirical consequences',
    badge: 'Result & Consequence',
    description: 'Use advanced discourse markers to signal causal consequences and logical outcomes in formal and academic writing: "Consequently / As a result / Therefore" introduce a logical outcome from the preceding sentence (followed by a comma). "Thus / Hence" are concise formal connectors indicating "in this manner" or "for this reason" (often followed by a noun phrase or gerund: "hence the need for...", "thus creating...").',
    keyRule: 'Punctuation: [Sentence 1]. Consequently / Therefore / As a result, [Sentence 2]. Or: Semicolon + therefore / thus + comma. "Thus / Hence + V-ing / noun phrase".',
    formula: 'Clause 1. Consequently / Therefore / As a result, Clause 2 | Clause 1; thus, Clause 2.',
    examples: [
      'The initial laboratory sensors were improperly calibrated. Consequently, the data was discarded.',
      'The municipal government invested heavily in solar micro-grids; as a result, blackouts ceased.',
      'The cryogenic cooling unit failed; therefore, the superconducting reaction was aborted.',
      'The algorithm eliminates redundant computational branches, thus reducing processing time by 40%.',
      'The experimental compound exhibited severe cytotoxicity, hence the decision to halt clinical trials.'
    ]
  },
  {
    id: 'addition_exemplification_linkers',
    title: 'Addition & Exemplification Linkers (Furthermore, Moreover, In addition to, Not only... but also)',
    subtitle: 'Expanding academic arguments and introducing illustrative empirical evidence',
    badge: 'Addition & Evidence',
    description: 'Enrich texts with formal addition linkers: "Furthermore / Moreover / In addition" add supporting arguments to a thesis. "In addition to / Besides + noun / V-ing" (prepositional phrases). "Not only [Inversion]... but also..." provides strong emphatic coordination ("Not only did the team finish on time, but they also won first prize"). Exemplification: "For instance / For example / To illustrate / Namely".',
    keyRule: 'Furthermore / Moreover, [Clause]. In addition to + Noun / V-ing. Not only + auxiliary + S + V..., but (also) S + V.',
    formula: 'Furthermore / Moreover, S + V | In addition to + Noun/V-ing, S + V | Not only + aux + S + V, but also S + V.',
    examples: [
      'The new electric motor is remarkably quiet. Furthermore, it achieves 95% thermodynamic efficiency.',
      'In addition to conducting surgical procedures, Dr. Vance teaches advanced neurology lectures.',
      'Not only did the engineers detect the cybersecurity anomaly, but they also neutralized it within minutes.',
      'Several ancient Roman technologies remain superior to modern equivalents; for instance, self-healing maritime concrete.',
      'Moreover, longitudinal dietary studies have confirmed the cardiovascular benefits of Mediterranean cuisine.'
    ]
  },
  {
    id: 'reformulation_summary_connectors',
    title: 'Reformulation & Summary Connectors (In other words, To put it simply, In summary, Overall)',
    subtitle: 'Clarifying complex arguments, paraphrasing concepts, and synthesizing findings',
    badge: 'Reformulation & Summary',
    description: 'Guide the reader through dense arguments using reformulation and summary markers: Reformulation / Clarification: "In other words", "That is to say", "To put it simply", "Specifically". Summarizing & Concluding: "In summary", "Overall", "To synthesize", "In conclusion", "On the whole", "All things considered".',
    keyRule: 'In other words / That is to say = rephrasing a previous point in clearer terms. In summary / Overall / In conclusion = synthesizing preceding evidence.',
    formula: 'Complex Point. In other words, Simpler Clarification | In summary / Overall, Synthesized Conclusion.',
    examples: [
      'The quantum wave function collapsed upon measurement; in other words, the particle took a definitive state.',
      'To put it simply, the higher the atmospheric humidity, the slower sweat evaporates from human skin.',
      'In summary, our three-year longitudinal study demonstrates a clear correlation between sleep and cognitive acuity.',
      'Overall, renewable energy production exceeded fossil fuel consumption in the European Union last quarter.',
      'In conclusion, the proposed bioengineering methodology satisfies all federal environmental safety requirements.'
    ]
  },
  {
    id: 'multiword_phrasal_verbs',
    title: 'Multi-Word Phrasal Verbs with 2 Particles (look forward to, run out of, get along with, put up with)',
    subtitle: 'Three-part idiomatic verb constructions (Verb + Particle 1 + Preposition)',
    badge: '3-Part Phrasal Verbs',
    description: 'Three-part phrasal verbs consist of a Verb + Adverb Particle + Preposition (e.g. look forward to, run out of, get along with, put up with, cut down on, keep up with, come up with, do away with, face up to, look down on). These verbs are ALWAYS INSEPARABLE; the object must always come AFTER the final preposition. Because the last word is a preposition, any following verb must take the GERUND (-ing) form.',
    keyRule: 'Always inseparable! Verb + Particle + Preposition + Noun / V-ing (e.g. "I look forward to meeting you", "We ran out of fuel", "She can\'t put up with the noise").',
    formula: 'S + Verb + Particle + Preposition + Object (Noun / Pronoun / V-ing).',
    examples: [
      'The international delegates are looking forward to attending the Kyoto environmental summit.',
      'During the high-altitude ascent, the mountaineers completely ran out of supplementary oxygen.',
      'Our engineering research team came up with an ingenious solution to the quantum thermal noise problem.',
      'The medical residents have to put up with erratic sleep schedules during their hospital rotation.',
      'To reduce cardiovascular risks, patients are advised to cut down on saturated fatty acids.'
    ]
  }
];

export function getA4DiscourseConnectorsStarQuestions(topicId: string, starNumber: number, customMonthSeed?: number): GrammarQuestion[] {
  const mSeed = customMonthSeed ?? monthlyPracticeEngine.getActiveEdition().cycleSeed;
  switch (topicId) {
    case 'result_consequence_markers':
      return generateResultConsequenceQuestions(starNumber, mSeed);
    case 'addition_exemplification_linkers':
      return generateAdditionExemplificationQuestions(starNumber, mSeed);
    case 'reformulation_summary_connectors':
      return generateReformulationSummaryQuestions(starNumber, mSeed);
    case 'multiword_phrasal_verbs':
      return generateMultiwordPhrasalQuestions(starNumber, mSeed);
    default:
      return generateResultConsequenceQuestions(starNumber, mSeed);
  }
}

// 1. Result & Consequence Markers Pool
function generateResultConsequenceQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The cryogenic cooling unit failed during the experiment.', target: 'Consequently, the superconducting reaction', wrong: ['Consequently the superconducting reaction without comma', 'Because of the superconducting reaction', 'Although the superconducting reaction'], context: 'had to be aborted immediately.', note: '"Consequently," is followed by a comma and introduces the logical result.' },
    { prompt: 'The municipal council invested heavily in solar micro-grids;', target: 'as a result, power outages were eliminated.', wrong: ['as a result of power outages were eliminated.', 'because power outages were eliminated.', 'although power outages were eliminated.'], context: '', note: '"as a result," introduces a full result clause.' },
    { prompt: 'The primary radar telemetry was corrupted by electromagnetic interference.', target: 'Therefore, the mission controller', wrong: ['Therefore the mission controller without comma', 'Because the mission controller', 'Due to the mission controller'], context: 'switched to optical ground tracking.', note: '"Therefore," introduces a logical deduction.' },
    { prompt: 'The new neural algorithm compresses redundant memory caches,', target: 'thus reducing computational latency by half.', wrong: ['thus to reduce computational latency by half.', 'thus reduced computational latency by half.', 'thus reduction computational latency by half.'], context: '', note: '"thus + V-ing" (thus reducing).' },
    { prompt: 'The pharmacological compound caused severe cytotoxicity in animal trials,', target: 'hence the decision to terminate the project.', wrong: ['hence to decide terminating the project.', 'hence they decided terminate the project.', 'hence of the decision to terminate.'], context: '', note: '"hence + noun phrase" (hence the decision).' },
    { prompt: 'The high-speed rail tracks were blocked by an avalanche.', target: 'As a consequence, all regional passenger trains', wrong: ['As a consequence of all passenger trains', 'Because all regional passenger trains', 'In spite all regional passenger trains'], context: 'were rerouted through the lower valley.', note: '"As a consequence," introduces the result.' },
    { prompt: 'The experimental data did not match the theoretical hypothesis;', target: 'accordingly, the researchers revised their model.', wrong: ['accordingly to the researchers revised their model.', 'according the researchers revised their model.', 'accordingly that researchers revised their model.'], context: '', note: '"accordingly," = therefore / in response.' },
    { prompt: 'He failed to submit his clinical fellowship documentation on time.', target: 'For this reason, his application was disqualified', wrong: ['For this reason of his application was disqualified', 'Due to his application was disqualified', 'Because of his application was disqualified'], context: 'by the admissions board.', note: '"For this reason," introduces the outcome.' },
    { prompt: 'The solar panels generate clean electrical energy during daylight hours,', target: 'thereby lowering our facility\'s reliance on grid power.', wrong: ['thereby to lower our facility\'s reliance.', 'thereby lowered our facility\'s reliance.', 'thereby of lowering our facility\'s reliance.'], context: '', note: '"thereby + V-ing" (thereby lowering).' },
    { prompt: 'The patient neglected to take his prescribed anticoagulant therapy.', target: 'Consequently, he developed a deep vein thrombosis', wrong: ['Consequently of he developed a thrombosis', 'Because he developed a thrombosis', 'In spite he developed a thrombosis'], context: 'in his lower leg.', note: '"Consequently," introduces consequence.' },
    { prompt: 'The corporate firewall was improperly configured;', target: 'thus, unauthorized hackers were able to access the database.', wrong: ['thus of unauthorized hackers were able to access.', 'thus that hackers were able to access.', 'because hackers were able to access.'], context: '', note: '"thus," followed by clause.' },
    { prompt: 'Heavy snowdrifts blocked all mountain passes.', target: 'Therefore, the search and rescue helicopter was deployed', wrong: ['Therefore of the search helicopter was deployed', 'Due to the search helicopter was deployed', 'Because the search helicopter was deployed'], context: 'to evacuate the stranded climbers.', note: '"Therefore,".' },
    { prompt: 'The laboratory adopted automated pipetting robots,', target: 'thereby eliminating human measurement inaccuracies.', wrong: ['thereby to eliminate human inaccuracies.', 'thereby eliminated human inaccuracies.', 'thereby of eliminating inaccuracies.'], context: '', note: '"thereby + V-ing".' },
    { prompt: 'The global supply of titanium micro-tubes was severely disrupted.', target: 'As a result, aerospace manufacturing was delayed', wrong: ['As a result of aerospace manufacturing was delayed', 'Because aerospace manufacturing was delayed', 'Owing to manufacturing was delayed'], context: 'by over six months.', note: '"As a result,".' },
    { prompt: 'The vaccine formulation requires storage at minus eighty degrees Celsius,', target: 'hence the logistical requirement for specialized dry-ice containers.', wrong: ['hence they require dry-ice containers.', 'hence of the requirement for dry-ice.', 'hence to require dry-ice containers.'], context: '', note: '"hence + noun phrase".' },
    { prompt: 'The clinical trial demonstrated a 98% reduction in viral load.', target: 'Consequently, regulatory health authorities approved the treatment', wrong: ['Consequently of regulatory authorities approved', 'Because regulatory authorities approved', 'In spite regulatory authorities approved'], context: 'under emergency expedited protocols.', note: '"Consequently,".' },
    { prompt: 'The deep-sea cable experienced a catastrophic fracture;', target: 'therefore, transatlantic internet traffic was rerouted.', wrong: ['therefore of transatlantic traffic was rerouted.', 'because transatlantic traffic was rerouted.', 'due to traffic was rerouted.'], context: '', note: '"therefore,".' },
    { prompt: 'The insulation tiles withstood extreme atmospheric friction,', target: 'thus protecting the astronauts inside the space capsule.', wrong: ['thus to protect the astronauts inside capsule.', 'thus protected the astronauts inside capsule.', 'thus protection the astronauts inside capsule.'], context: '', note: '"thus + V-ing".' },
    { prompt: 'The battery management software was fully optimized;', target: 'accordingly, vehicle range increased by fifteen percent.', wrong: ['accordingly to vehicle range increased.', 'according vehicle range increased.', 'because vehicle range increased.'], context: '', note: '"accordingly,".' },
    { prompt: 'The volcano began emitting superheated sulfur dioxide plumes.', target: 'As a consequence, civil protection ordered the immediate evacuation', wrong: ['As a consequence of civil protection ordered', 'Because civil protection ordered', 'Owing to civil protection ordered'], context: 'of all surrounding villages.', note: '"As a consequence,".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Result & Consequence Markers');
}

// 2. Addition & Exemplification Linkers Pool
function generateAdditionExemplificationQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The newly synthesized carbon composite is extraordinarily lightweight.', target: 'Furthermore, it possesses exceptional tensile strength', wrong: ['Furthermore of it possesses tensile strength', 'In addition to it possesses tensile strength', 'Beside it possesses tensile strength'], context: 'under extreme thermal stress.', note: '"Furthermore," adds a supportive argument to a thesis.' },
    { prompt: '', target: 'In addition to lecturing on molecular genetics,', wrong: ['In addition lecturing on molecular genetics,', 'Beside of lecturing on molecular genetics,', 'Furthermore lecturing on genetics,'], context: 'Dr. Lin conducts clinical trials on inherited cardiovascular disorders.', note: '"In addition to + V-ing / noun phrase".' },
    { prompt: '', target: 'Not only did the engineering team complete the prototype on time,', wrong: ['Not only the engineering team completed on time,', 'Not only did the team completed on time,', 'Not only the team did complete on time,'], context: 'but they also remained substantially below the designated budget.', note: 'Emphatic inversion: "Not only did + Subject + base verb..., but they also...".' },
    { prompt: 'Many ancient civil engineering feats continue to astonish modern architects;', target: 'for instance, the Roman Pantheon\'s unreinforced concrete dome.', wrong: ['for instance of the Roman Pantheon\'s dome.', 'such as for instance the Pantheon dome.', 'as instance the Roman Pantheon dome.'], context: '', note: '"for instance," introduces illustrative evidence.' },
    { prompt: 'The postgraduate program provides rigorous theoretical training.', target: 'Moreover, students gain invaluable hands-on clinical experience', wrong: ['Moreover of students gain clinical experience', 'In addition to students gain clinical experience', 'Beside students gain clinical experience'], context: 'in university teaching hospitals.', note: '"Moreover," adds a strong secondary point.' },
    { prompt: '', target: 'Besides winning two international literature prizes,', wrong: ['Beside winning two international prizes,', 'In addition winning two international prizes,', 'Furthermore winning two prizes,'], context: 'the author was nominated for the prestigious Booker Prize.', note: '"Besides + V-ing" (besides = in addition to; beside = next to).' },
    { prompt: '', target: 'Not only does the solar vehicle produce zero exhaust emissions,', wrong: ['Not only the solar vehicle produces zero emissions,', 'Not only does the vehicle produces zero emissions,', 'Not only produces the vehicle zero emissions,'], context: 'but it also generates excess power back to the municipal grid.', note: '"Not only does + S + base verb..., but it also...".' },
    { prompt: 'Several renewable energy technologies have achieved grid parity;', target: 'namely, onshore wind power and utility-scale solar photovoltaics.', wrong: ['namely of onshore wind and solar.', 'namely that onshore wind and solar.', 'as name onshore wind and solar.'], context: '', note: '"namely," introduces specific named examples.' },
    { prompt: 'The electric sports car delivers blisteringly fast acceleration.', target: 'In addition, its aerodynamic drag coefficient is remarkably low.', wrong: ['In addition to its drag coefficient is remarkably low.', 'Beside its drag coefficient is low.', 'In addition of its drag coefficient is low.'], context: '', note: '"In addition," (without "to") introduces a full clause.' },
    { prompt: '', target: 'In addition to receiving the Nobel Prize in Physics,', wrong: ['In addition receiving the Nobel Prize,', 'Beside of receiving the Nobel Prize,', 'Furthermore receiving the Nobel Prize,'], context: 'Marie Curie was awarded the Nobel Prize in Chemistry in 1911.', note: '"In addition to + V-ing".' },
    { prompt: '', target: 'Not only had the cyber attackers stolen confidential emails,', wrong: ['Not only the cyber attackers had stolen emails,', 'Not only had the attackers stole emails,', 'Not only did the attackers stolen emails,'], context: 'but they had also encrypted the institution\'s backup data servers.', note: 'Inversion with Past Perfect: "Not only had + S + V3...".' },
    { prompt: 'The human brain exhibits remarkable neuroplasticity;', target: 'to illustrate, stroke patients can relearn motor skills through rehabilitation.', wrong: ['to illustrate of stroke patients can relearn.', 'as illustration of stroke patients can relearn.', 'to illustrate that stroke patients can relearn.'], context: '', note: '"to illustrate," introduces an explanatory case.' },
    { prompt: 'The surgical procedure is minimally invasive.', target: 'Furthermore, patient recovery time is reduced from weeks to days.', wrong: ['Furthermore of recovery time is reduced.', 'In addition to recovery time is reduced.', 'Beside recovery time is reduced.'], context: '', note: '"Furthermore,".' },
    { prompt: '', target: 'Besides serving as department chair,', wrong: ['Beside serving as department chair,', 'In addition serving as department chair,', 'Furthermore serving as chair,'], context: 'Professor Gomez serves on the national bioethics advisory council.', note: '"Besides + V-ing".' },
    { prompt: '', target: 'Not only is the optical spectrometer highly accurate,', wrong: ['Not only the spectrometer is highly accurate,', 'Not only is the spectrometer accurately,', 'Not only does the spectrometer is accurate,'], context: 'but it is also portable enough for field research in remote regions.', note: 'Inversion with be: "Not only is + Subject + adjective...".' },
    { prompt: 'Microorganisms thrive in the most hostile environments on Earth;', target: 'for example, extremophile bacteria living inside volcanic vents.', wrong: ['for example of extremophile bacteria living.', 'such as for example extremophile bacteria.', 'as example extremophile bacteria.'], context: '', note: '"for example,".' },
    { prompt: 'The quantum encryption protocol is mathematically unbreakable.', target: 'Moreover, it operates over existing standard fiber optic lines.', wrong: ['Moreover of it operates over existing lines.', 'In addition to it operates over lines.', 'Beside it operates over lines.'], context: '', note: '"Moreover,".' },
    { prompt: '', target: 'In addition to publishing three academic monographs this year,', wrong: ['In addition publishing three monographs,', 'Beside of publishing three monographs,', 'Furthermore publishing three monographs,'], context: 'she organized an international symposium on computational linguistics.', note: '"In addition to + V-ing".' },
    { prompt: '', target: 'Not only will the new particle collider explore dark matter,', wrong: ['Not only the new collider will explore dark matter,', 'Not only will the collider explores dark matter,', 'Not only explores the collider dark matter,'], context: 'but it will also investigate the fundamental nature of gravity.', note: 'Inversion with will: "Not only will + Subject + base verb...".' },
    { prompt: 'The research institute offers several competitive international grants;', target: 'namely, the Marie Curie Fellowship and the Fulbright Award.', wrong: ['namely of the Marie Curie Fellowship.', 'namely that the Marie Curie Fellowship.', 'as name the Marie Curie Fellowship.'], context: '', note: '"namely,".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Addition & Exemplification Linkers');
}

// 3. Reformulation & Summary Connectors Pool
function generateReformulationSummaryQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The quantum wave function collapsed upon human observation;', target: 'in other words, the subatomic particle assumed a definite state.', wrong: ['in other words of the subatomic particle assumed.', 'that is say the particle assumed.', 'to put simply that the particle assumed.'], context: '', note: '"in other words," introduces a clearer rephrasing of a concept.' },
    { prompt: 'The patient displayed severe arterial vasoconstriction and elevated troponin levels.', target: 'To put it simply, he was experiencing a cardiac infarction.', wrong: ['To put it simple he was experiencing infarction.', 'To put simply of he was experiencing infarction.', 'Putting simply that he was experiencing.'], context: '', note: '"To put it simply," simplifies a technical statement.' },
    { prompt: 'The three-year clinical trial demonstrated safety, high antibody titer, and zero serious adverse events.', target: 'In summary, the mRNA vaccine is safe and highly effective.', wrong: ['In summary of the mRNA vaccine is safe.', 'To summary the mRNA vaccine is safe.', 'Summary that the mRNA vaccine is safe.'], context: '', note: '"In summary," synthesizes findings.' },
    { prompt: 'Solar generation increased by 20%, wind by 15%, and hydro by 10%.', target: 'Overall, renewable energy output broke historic records.', wrong: ['Overall of renewable energy output broke records.', 'On overall renewable energy output broke records.', 'In overall renewable energy output broke records.'], context: '', note: '"Overall," provides a generalized synthesis.' },
    { prompt: 'The economic model requires zero interest rates and continuous fiscal stimulus;', target: 'that is to say, it cannot function under normal monetary conditions.', wrong: ['that is say it cannot function.', 'that is to saying it cannot function.', 'that saying it cannot function.'], context: '', note: '"that is to say," clarifies meaning.' },
    { prompt: '', target: 'In conclusion, the proposed bioengineering methodology', wrong: ['In conclusion of the proposed methodology', 'To conclusion the proposed methodology', 'Conclusion that the proposed methodology'], context: 'satisfies all statutory international environmental protection standards.', note: '"In conclusion,".' },
    { prompt: 'The algorithm evaluates all branching nodes simultaneously rather than sequentially;', target: 'specifically, it employs parallel quantum tree search.', wrong: ['specifically of it employs parallel quantum search.', 'as specific it employs parallel search.', 'in specific that it employs parallel search.'], context: '', note: '"specifically," introduces exact details.' },
    { prompt: '', target: 'On the whole, the conference was a resounding success,', wrong: ['In the whole the conference was a success,', 'On whole the conference was a success,', 'To the whole the conference was a success,'], context: 'bringing together over five thousand researchers from seventy countries.', note: '"On the whole," = generally speaking.' },
    { prompt: 'The two theoretical frameworks make identical physical predictions in all observable regimes;', target: 'in essence, they are mathematically isomorphic.', wrong: ['in essence of they are mathematically isomorphic.', 'to essence they are mathematically isomorphic.', 'as essence that they are isomorphic.'], context: '', note: '"in essence," = fundamentally.' },
    { prompt: 'The weather was harsh, equipment arrived late, and supplies ran low.', target: 'All things considered, the expedition team performed admirably.', wrong: ['All things considering the team performed.', 'Considering all things of the team performed.', 'All things considered that the team performed.'], context: '', note: '"All things considered," synthesizes circumstances.' },
    { prompt: 'The spacecraft\'s reaction wheels malfunctioned, causing loss of attitude control;', target: 'in other words, the probe could no longer point its antenna toward Earth.', wrong: ['in other words of the probe could no longer.', 'that is say the probe could no longer.', 'to put simple the probe could no longer.'], context: '', note: '"in other words,".' },
    { prompt: '', target: 'To synthesize the key arguments presented today,', wrong: ['To synthesizing the key arguments presented,', 'To synthesis the key arguments presented,', 'In synthesize the key arguments presented,'], context: 'neural networks require both quality data and rigorous regularization.', note: '"To synthesize [arguments]," introduces a summary.' },
    { prompt: 'The test subjects reported improved mood, deeper sleep, and decreased anxiety.', target: 'In short, the behavioral therapy proved remarkably beneficial.', wrong: ['In short of the behavioral therapy proved.', 'To short the behavioral therapy proved.', 'Short that the therapy proved beneficial.'], context: '', note: '"In short," = briefly stated.' },
    { prompt: 'The experimental design eliminated bias, randomized cohorts, and blinded reviewers.', target: 'In brief, the empirical methodology was immaculate.', wrong: ['In brief of the empirical methodology was.', 'To brief the empirical methodology was.', 'Brief that the methodology was immaculate.'], context: '', note: '"In brief,".' },
    { prompt: 'The reactor core maintained thermal equilibrium and produced zero radioactive waste.', target: 'In summary, the thorium cycle represents a promising clean energy path.', wrong: ['In summary of the thorium cycle represents.', 'To summary the thorium cycle represents.', 'Summary that the thorium cycle represents.'], context: '', note: '"In summary,".' },
    { prompt: 'The patient showed complete remission of cancer cells and normalized blood counts;', target: 'that is to say, the immunotherapeutic intervention was totally successful.', wrong: ['that is say the intervention was successful.', 'that is to saying the intervention was.', 'that to say the intervention was successful.'], context: '', note: '"that is to say,".' },
    { prompt: 'The satellite survived atmospheric reentry, deployed parachutes, and landed gently.', target: 'Overall, the recovery operation exceeded all mission parameters.', wrong: ['Overall of the recovery operation exceeded.', 'In overall the recovery operation exceeded.', 'On overall the recovery operation exceeded.'], context: '', note: '"Overall,".' },
    { prompt: 'The telescope array was built under budget, finished ahead of schedule, and achieved higher resolution than expected.', target: 'To sum up, the astrophysics project was an unequivocal triumph.', wrong: ['To sum up of the astrophysics project was.', 'To summing up the project was a triumph.', 'In sum up the project was a triumph.'], context: '', note: '"To sum up,".' },
    { prompt: 'The cellular membrane ceased sodium-potassium pumping;', target: 'in other words, biological cellular death had occurred.', wrong: ['in other words of biological cellular death had occurred.', 'that is say cellular death had occurred.', 'to put simple cellular death had occurred.'], context: '', note: '"in other words,".' },
    { prompt: '', target: 'In conclusion, the clinical evidence definitively proves', wrong: ['In conclusion of the clinical evidence proves', 'To conclusion the clinical evidence proves', 'Conclusion that the clinical evidence proves'], context: 'the efficacy of early therapeutic intervention.', note: '"In conclusion,".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Reformulation & Summary Connectors');
}

// 4. Multi-Word Phrasal Verbs Pool
function generateMultiwordPhrasalQuestions(star: number, mSeed: number): GrammarQuestion[] {
  const pool = [
    { prompt: 'The international researchers are eagerly', target: 'looking forward to attending the symposium', wrong: ['looking forward to attend the symposium', 'looking forward attending the symposium', 'looking forward to attended the symposium'], context: 'in Geneva next month.', note: 'Multi-word phrasal verb: "look forward to + V-ing" (to is a preposition).' },
    { prompt: 'During the high-altitude ascent, the mountaineers', target: 'ran out of supplementary oxygen', wrong: ['ran out supplementary oxygen', 'ran out from supplementary oxygen', 'ran away of supplementary oxygen'], context: 'near the summit ridge.', note: 'Three-part verb: "run out of + noun".' },
    { prompt: 'The bioengineering team', target: 'came up with an ingenious solution', wrong: ['came up an ingenious solution', 'came along with an ingenious solution', 'came down to an ingenious solution'], context: 'to eliminate sensor thermal noise.', note: '"come up with" = invent or propose.' },
    { prompt: 'The emergency medical residents have to', target: 'put up with erratic work schedules', wrong: ['put up erratic work schedules', 'put with erratic work schedules', 'put on with erratic work schedules'], context: 'during their intensive trauma rotation.', note: '"put up with" = tolerate / endure.' },
    { prompt: 'To lower your cardiovascular risk, you should', target: 'cut down on saturated dietary fats', wrong: ['cut down saturated dietary fats', 'cut down of saturated dietary fats', 'cut off with saturated dietary fats'], context: 'and exercise regularly.', note: '"cut down on" = reduce consumption.' },
    { prompt: 'It is challenging for novice programmers to', target: 'keep up with the rapid pace of AI development', wrong: ['keep up the rapid pace of development', 'keep along with the rapid pace of development', 'keep out with the rapid pace of development'], context: '.', note: '"keep up with" = maintain pace with.' },
    { prompt: 'The research university decided to', target: 'do away with mandatory physical paper submissions', wrong: ['do away mandatory physical paper submissions', 'do with mandatory physical paper submissions', 'do out with mandatory submissions'], context: 'and transition entirely to digital portals.', note: '"do away with" = abolish / eliminate.' },
    { prompt: 'She has always', target: 'got along well with her faculty colleagues', wrong: ['got along well her faculty colleagues', 'got well with along her colleagues', 'got on well to her colleagues'], context: 'in the department of bioinformatics.', note: '"get along with" = have a friendly relationship.' },
    { prompt: 'The government must eventually', target: 'face up to the harsh economic reality', wrong: ['face up the harsh economic reality', 'face to the harsh economic reality', 'face out to the harsh economic reality'], context: 'of escalating climate adaptation costs.', note: '"face up to" = confront an unpleasant truth.' },
    { prompt: 'Experienced senior scientists should never', target: 'look down on junior undergraduate interns', wrong: ['look down junior undergraduate interns', 'look down to junior undergraduate interns', 'look away on junior interns'], context: 'who are just starting in the laboratory.', note: '"look down on" = view with condescension / disdain.' },
    { prompt: 'Many young aspiring physicists', target: 'look up to Professor Hawking as a mentor', wrong: ['look up Professor Hawking as a mentor', 'look up on Professor Hawking as mentor', 'look out to Professor Hawking as mentor'], context: 'and intellectual pioneer.', note: '"look up to" = admire / respect.' },
    { prompt: 'The municipal transit authority cannot', target: 'get away with ignoring passenger safety regulations', wrong: ['get away ignoring passenger safety regulations', 'get away to ignore passenger regulations', 'get away with to ignore regulations'], context: '.', note: '"get away with + V-ing" = escape punishment.' },
    { prompt: 'I am really looking forward to', target: 'collaborating on the quantum genomics project', wrong: ['collaborate on the quantum genomics project', 'collaborated on the quantum genomics project', 'to collaborate on the quantum genomics project'], context: 'with your team.', note: '"look forward to + V-ing" (collaborating).' },
    { prompt: 'The laboratory', target: 'ran out of sterile pipette tips', wrong: ['ran out sterile pipette tips', 'ran out from sterile pipette tips', 'ran off with sterile pipette tips'], context: 'in the middle of the viral titration assay.', note: '"ran out of".' },
    { prompt: 'The climatology panel', target: 'came up with three emergency recommendations', wrong: ['came up three emergency recommendations', 'came along with three recommendations', 'came down on three recommendations'], context: 'for coastal flood defense.', note: '"came up with".' },
    { prompt: 'We cannot', target: 'put up with fraudulent statistical practices', wrong: ['put up fraudulent statistical practices', 'put with fraudulent statistical practices', 'put on with fraudulent practices'], context: 'in peer-reviewed academic journals.', note: '"put up with".' },
    { prompt: 'He decided to', target: 'cut down on his daily caffeine intake', wrong: ['cut down his daily caffeine intake', 'cut down of his daily caffeine intake', 'cut away with his caffeine intake'], context: 'to reduce nighttime insomnia.', note: '"cut down on".' },
    { prompt: 'How do you', target: 'keep up with the latest scientific literature', wrong: ['keep up the latest scientific literature', 'keep along with the latest literature', 'keep out with the latest literature'], context: 'when hundreds of papers are published daily?', note: '"keep up with".' },
    { prompt: 'The committee voted to', target: 'do away with the antiquated grading system', wrong: ['do away the antiquated grading system', 'do with the antiquated grading system', 'do out with the grading system'], context: 'in favor of continuous competency assessments.', note: '"do away with".' },
    { prompt: 'Corporate leaders must', target: 'face up to the environmental consequences', wrong: ['face up the environmental consequences', 'face to the environmental consequences', 'face out to the consequences'], context: 'of industrial deforestation.', note: '"face up to".' }
  ];

  return createRotatedQuestions(pool, star, mSeed, 'Multi-Word Phrasal Verbs with 2 Particles');
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
        explanation: `Incorrect. "${w}" violates the discourse/phrasal rule. ${item.note}`
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
