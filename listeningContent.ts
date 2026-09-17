import { monthlyPracticeEngine } from './utils/monthlyEngine';
import { adminListeningService } from './services/adminListeningService';

export interface ListeningQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ListeningExercise {
  id: string;
  title: string;
  type: 'Listen & Respond' | 'Academic Lecture' | 'Campus Discussion';
  topic: string;
  duration: string;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  speaker: string;
  speakerRole?: string;
  transcript: string;
  passageParts: { speaker: string; text: string }[];
  questions: ListeningQuestion[];
  audioUrl?: string; // Direct audio stream / file URL (e.g. mp3, wav, m4a, webm)
  sourceUrl?: string; // Website URL or reference source (NPR, TED, university portal, etc.)
  sourceName?: string; // Display name for source website (e.g. "MIT OpenCourseWare", "NPR")
}

// ------------------------------------------------------------------------------------------------
// 1. LISTEN & RESPOND DRILL BANK (Task 1: Campus Situations, Quick Dialogue, Question & Response)
// ------------------------------------------------------------------------------------------------
export const LISTEN_AND_RESPOND_DATA: Record<'Easy' | 'Normal' | 'Hard' | 'Advanced', {
  title: string;
  topic: string;
  speaker: string;
  speakerRole: string;
  promptText: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}[]> = {
  Easy: [
    {
      title: 'Midterm Study Group Invitation',
      topic: 'Daily Campus Life',
      speaker: 'Ryan',
      speakerRole: 'Classmate',
      promptText: 'Hey! I was thinking of studying for the biology midterm in the library later today. Do you want to join me, or are you too busy with your literature paper?',
      question: 'Which is the most appropriate response to Ryan\'s question to keep the conversation natural and cooperative?',
      options: [
        'I actually finished my literature paper yesterday, so I would love to study biology with you!',
        'Biology is the scientific study of life and the physical structure of living organisms.',
        'No, the university library is located next to the chemistry laboratory building.',
        'I am planning to buy some groceries after class today.'
      ],
      correctAnswer: 'I actually finished my literature paper yesterday, so I would love to study biology with you!',
      explanation: 'Answering that you finished the paper and would love to study directly addresses both options in Ryan\'s question in a natural, polite manner.'
    },
    {
      title: 'Textbook Reserve Inquiry',
      topic: 'Library Services',
      speaker: 'Mrs. Davis',
      speakerRole: 'University Librarian',
      promptText: 'Good morning! The textbook you requested for Art History is currently on a two-hour reserve. Would you like to read it here in the library, or should I place you on the waitlist for tomorrow?',
      question: 'How should the student respond if they need to copy notes for class today?',
      options: [
        'I will read it here right now, since two hours is plenty of time to take my notes.',
        'Art history covers major movements from the Renaissance to modern abstract art.',
        'The library closes at 10 PM on Fridays.',
        'I have already purchased three books from the university bookstore.'
      ],
      correctAnswer: 'I will read it here right now, since two hours is plenty of time to take my notes.',
      explanation: 'The student selects the immediate library study option and explains why two hours is sufficient.'
    },
    {
      title: 'Lab Partner Scheduling',
      topic: 'Chemistry Laboratory',
      speaker: 'Chloe',
      speakerRole: 'Lab Partner',
      promptText: 'Hey, our chemistry lab report is due this Thursday. Are you free to meet in the science commons tomorrow afternoon to finish the data charts?',
      question: 'Which response clearly coordinates a meeting time?',
      options: [
        'Yes, I get out of my lecture at two o\'clock, so I can meet you right after that.',
        'Chemistry requires calculating molar mass and chemical equilibrium constants.',
        'I really enjoyed our experiment with acid titration last week.',
        'The science building has four floors and multiple lecture halls.'
      ],
      correctAnswer: 'Yes, I get out of my lecture at two o\'clock, so I can meet you right after that.',
      explanation: 'Providing a specific time after lecture confirms availability and facilitates the meeting.'
    },
    {
      title: 'Professor Office Hours Visit',
      topic: 'Academic Consultation',
      speaker: 'Prof. Anderson',
      speakerRole: 'History Professor',
      promptText: 'Come in! I was reviewing your proposed essay topic on the Industrial Revolution. Have you narrowed down your primary research questions yet?',
      question: 'How should the student respond to show progress on the assignment?',
      options: [
        'Yes, I decided to focus specifically on child labor reforms in British textile mills.',
        'The Industrial Revolution began in Great Britain in the late eighteenth century.',
        'I am taking four other courses this semester, including statistics.',
        'The campus coffee shop is very busy on Tuesday mornings.'
      ],
      correctAnswer: 'Yes, I decided to focus specifically on child labor reforms in British textile mills.',
      explanation: 'Stating a focused topic (child labor reforms in textile mills) directly answers the professor\'s question.'
    },
    {
      title: 'Campus Dining Meal Plan',
      topic: 'Student Services',
      speaker: 'Marcus',
      speakerRole: 'Student Services Representative',
      promptText: 'Welcome to student accounts. Are you looking to upgrade your weekly dining hall meal plan, or do you want to add flex dining dollars to your student ID card?',
      question: 'Which response clearly states the student\'s intent?',
      options: [
        'I\'d like to add fifty flex dollars so I can buy lunch at the campus café between classes.',
        'The dining hall serves breakfast, lunch, and dinner every weekday.',
        'My student ID card was issued during freshman orientation last August.',
        'Eating balanced meals is important for collegiate health and wellness.'
      ],
      correctAnswer: 'I\'d like to add fifty flex dollars so I can buy lunch at the campus café between classes.',
      explanation: 'Choosing flex dollars and stating the exact amount directly resolves the inquiry.'
    }
  ],
  Normal: [
    {
      title: 'Internship Recommendation Letter',
      topic: 'Career Consultation',
      speaker: 'Dr. Katherine Bell',
      speakerRole: 'Department Chair',
      promptText: 'I would be delighted to write you a recommendation letter for the summer research fellowship. Could you please send me your updated CV and a brief summary of the project by Friday?',
      question: 'What is the most professional response to the professor\'s request?',
      options: [
        'Thank you so much, Dr. Bell! I will email you my resume and project draft tomorrow morning.',
        'Research fellowships are competitive grants provided by national science organizations.',
        'I have already completed sixteen credits in molecular biology and organic chemistry.',
        'The fellowship pays a modest stipend to cover living expenses over the summer.'
      ],
      correctAnswer: 'Thank you so much, Dr. Bell! I will email you my resume and project draft tomorrow morning.',
      explanation: 'Expressing gratitude and confirming the delivery of the requested materials by the deadline is courteous and professional.'
    },
    {
      title: 'Dormitory Maintenance Issue',
      topic: 'Campus Housing',
      speaker: 'Mr. Henderson',
      speakerRole: 'Housing Coordinator',
      promptText: 'We received your work order about the radiator in room 304 making knocking sounds. Has the maintenance technician stopped by today, or is the noise still persisting?',
      question: 'Which response gives the most accurate status update?',
      options: [
        'No one has visited yet, and the knocking noise was especially loud again early this morning.',
        'Radiators operate by circulating heated steam or water through cast iron pipes.',
        'My roommate and I moved into the dorms during the first week of September.',
        'The campus housing office is open Monday through Friday from 9 AM to 5 PM.'
      ],
      correctAnswer: 'No one has visited yet, and the knocking noise was especially loud again early this morning.',
      explanation: 'Answering that no technician visited and confirming the issue is still active gives the coordinator the exact information needed.'
    },
    {
      title: 'Course Prerequisite Waiver',
      topic: 'Academic Advising',
      speaker: 'Prof. Miller',
      speakerRole: 'Economics Advisor',
      promptText: 'You have registered for Advanced Econometrics, but our system shows you haven\'t completed Linear Algebra. Did you take an equivalent math course at your previous university?',
      question: 'How should the student explain their background?',
      options: [
        'Yes, I completed an equivalent matrix algebra course at City College, and I have the official syllabus here to verify.',
        'Linear algebra deals with vectors, vector spaces, and linear transformations.',
        'Advanced Econometrics is taught on Monday and Wednesday afternoons in Hall B.',
        'I plan to graduate next spring with honors in international economics.'
      ],
      correctAnswer: 'Yes, I completed an equivalent matrix algebra course at City College, and I have the official syllabus here to verify.',
      explanation: 'Confirming the equivalent course and offering proof (the syllabus) directly addresses the missing prerequisite.'
    },
    {
      title: 'Student Club Funding Allocation',
      topic: 'Student Government',
      speaker: 'Elena',
      speakerRole: 'Treasurer',
      promptText: 'The Finance Committee reviewed your robotics club budget. We can fund your tournament entry fee, but we need receipts before approving the travel reimbursement.',
      question: 'Which response ensures compliance with financial policy?',
      options: [
        'Understood! I will collect all the hotel and fuel receipts from our team and submit the expense form today.',
        'Robotics competitions test autonomous navigation and mechanical dexterity under pressure.',
        'Our club has fifteen active members majoring in mechanical and electrical engineering.',
        'The tournament will take place in Chicago next month over three consecutive days.'
      ],
      correctAnswer: 'Understood! I will collect all the hotel and fuel receipts from our team and submit the expense form today.',
      explanation: 'Acknowledging the requirement and agreeing to submit the itemized receipts matches the treasurer\'s instructions.'
    },
    {
      title: 'Field Trip Safety Briefing',
      topic: 'Geology Department',
      speaker: 'Dr. Wallace',
      speakerRole: 'Geology Instructor',
      promptText: 'Before we depart for the canyon field trip on Saturday, remember that sturdy hiking boots and protective eyewear are mandatory. Do you have any dietary restrictions for the packed lunches?',
      question: 'Which response addresses both the equipment confirmation and dietary needs?',
      options: [
        'I have my field boots ready, and I am vegetarian, so a meatless lunch would be wonderful.',
        'Canyons are deep gorges carved into bedrock by millions of years of river erosion.',
        'Saturday\'s weather forecast calls for clear skies and a high of seventy-five degrees.',
        'The department van will pick us up in front of the campus center at 7 AM sharp.'
      ],
      correctAnswer: 'I have my field boots ready, and I am vegetarian, so a meatless lunch would be wonderful.',
      explanation: 'Confirming the required gear and specifying a vegetarian diet fulfills both expectations of the instructor.'
    }
  ],
  Hard: [
    {
      title: 'Graduate Seminar Presentation Scheduling',
      topic: 'Graduate Studies',
      speaker: 'Prof. Thorne',
      speakerRole: 'Seminar Lead',
      promptText: 'Since two speakers had to reschedule due to the conference in Seattle, we have an open 20-minute slot on Thursday. Could you deliver your thesis preliminary findings then, or would you prefer waiting until the final session?',
      question: 'Which response balances academic readiness with practical scheduling?',
      options: [
        'I have already compiled my slide deck and analyzed the primary datasets, so I would be happy to present this Thursday.',
        'The conference in Seattle brings together international scholars in cognitive linguistics.',
        'Presentations in graduate seminars are evaluated on analytical rigor and visual clarity.',
        'Thursday is the fourth day of the academic week in standard university scheduling.'
      ],
      correctAnswer: 'I have already compiled my slide deck and analyzed the primary datasets, so I would be happy to present this Thursday.',
      explanation: 'Demonstrating readiness (completed slides and data) and accepting the earlier slot directly helps the professor fill the schedule.'
    },
    {
      title: 'Lab Equipment Calibration Protocol',
      topic: 'Physics Research',
      speaker: 'Dr. Aris',
      speakerRole: 'Laboratory Director',
      promptText: 'The spectrometer showed significant drift during yesterday\'s baseline calibration. Did your research team purge the optical chamber with argon before running the laser sweep?',
      question: 'How should the researcher respond to diagnose the anomaly?',
      options: [
        'We purged it for five minutes, but the flow meter indicated fluctuating pressure, which likely caused the optical baseline drift.',
        'Spectrometers measure the spectral components of light transmitted through or emitted by substances.',
        'Argon is a noble gas with an atomic number of eighteen and an atomic mass of roughly forty.',
        'We calibrated the temperature sensor in the room using a digital thermometer last Tuesday.'
      ],
      correctAnswer: 'We purged it for five minutes, but the flow meter indicated fluctuating pressure, which likely caused the optical baseline drift.',
      explanation: 'Explaining the exact protocol used and pointing out the fluctuating pressure provides actionable diagnostic feedback.'
    },
    {
      title: 'Manuscript Peer Review Revisions',
      topic: 'Academic Publishing',
      speaker: 'Dr. Sterling',
      speakerRole: 'Journal Editor',
      promptText: 'The reviewers appreciated your empirical methodology, but they requested a more thorough literature review on behavioral heuristics in section two. Can you provide those revisions within three weeks?',
      question: 'Which response demonstrates a professional commitment to the revision timeline?',
      options: [
        'Certainly. I will incorporate the seminal papers by Kahneman and Tversky and submit the revised manuscript by the 25th.',
        'Peer review is an essential mechanism for maintaining scientific integrity and accuracy.',
        'Section two of the paper contains three data tables and two multivariate regression charts.',
        'I submitted the original manuscript to your editorial office six months ago.'
      ],
      correctAnswer: 'Certainly. I will incorporate the seminal papers by Kahneman and Tversky and submit the revised manuscript by the 25th.',
      explanation: 'Accepting the feedback, naming relevant literature, and setting a specific completion date is the ideal scholarly reply.'
    },
    {
      title: 'Archive Access Permission Request',
      topic: 'Historical Archives',
      speaker: 'Archivist Morris',
      speakerRole: 'Head Archivist',
      promptText: 'These 18th-century colonial ledgers are extremely fragile and restricted to doctoral researchers. Do you have an institutional endorsement from your dissertation advisor?',
      question: 'How should the researcher present their credentials?',
      options: [
        'Yes, I have an official letter of support from Dr. Vance detailing my dissertation scope and handling qualifications.',
        'Colonial ledgers document transatlantic merchant transactions, commodity prices, and cargo manifests.',
        'The archive reading room maintains a controlled humidity of 45 percent and dim lighting.',
        'I am planning to publish a monograph on maritime commerce sometime in the future.'
      ],
      correctAnswer: 'Yes, I have an official letter of support from Dr. Vance detailing my dissertation scope and handling qualifications.',
      explanation: 'Presenting the required advisor letter directly satisfies the archivist\'s institutional condition.'
    },
    {
      title: 'Grant Budget Allocation Deficit',
      topic: 'Sponsored Research',
      speaker: 'Ms. Vance',
      speakerRole: 'Grant Officer',
      promptText: 'Due to updated supply chain costs, your proposed consumable reagent line item exceeds the federal grant cap by twelve percent. Should we reallocate funds from the travel budget, or submit a formal variance request?',
      question: 'Which response proposes an effective financial strategy?',
      options: [
        'Let\'s reallocate from the domestic conference travel line, since we can attend those symposiums virtually without penalty.',
        'Federal research grants are subject to annual fiscal audits by governmental oversight bodies.',
        'Consumable reagents include enzymes, buffer solutions, pipette tips, and sterile petri dishes.',
        'Our university was founded in 1892 as a land-grant scientific institution.'
      ],
      correctAnswer: 'Let\'s reallocate from the domestic conference travel line, since we can attend those symposiums virtually without penalty.',
      explanation: 'Choosing the travel reallocation and justifying it via virtual attendance is a sensible, pragmatic solution.'
    }
  ],
  Advanced: [
    {
      title: 'Interdisciplinary Grant Defense',
      topic: 'Bioinformatics & Ethics',
      speaker: 'Prof. Montgomery',
      speakerRole: 'Grant Committee Chair',
      promptText: 'Your proposal to deploy deep-learning neural models in genomic screening is technically brilliant. However, how does your experimental protocol address privacy concerns regarding incidental secondary genetic findings?',
      question: 'Which response articulates a robust bioethical framework?',
      options: [
        'Our pipeline incorporates tiered patient consent protocols and automated differential privacy noise to safeguard incidental data while preserving algorithmic fidelity.',
        'Deep learning utilizes multi-layered artificial neural networks to identify non-linear feature correlations in high-dimensional datasets.',
        'Genomics has expanded dramatically since the completion of the Human Genome Project in the early 2000s.',
        'We applied for three external grants last year with varying levels of institutional success.'
      ],
      correctAnswer: 'Our pipeline incorporates tiered patient consent protocols and automated differential privacy noise to safeguard incidental data while preserving algorithmic fidelity.',
      explanation: 'The response directly answers the privacy concern with specific ethical mechanisms (tiered consent, differential privacy).'
    },
    {
      title: 'Archaeological Excavation Permit Dispute',
      topic: 'Cultural Heritage',
      speaker: 'Dr. Al-Mansoor',
      speakerRole: 'Antiquities Inspector',
      promptText: 'While we recognize the academic significance of uncovering the Roman aqueduct foundation, local municipal bylaws prohibit open trenching near the historic marketplace. Can non-invasive geophysical imaging satisfy your research hypotheses?',
      question: 'Which response demonstrates archaeological adaptability and compliance?',
      options: [
        'Yes, high-resolution Ground Penetrating Radar paired with electrical resistivity tomography will allow us to map the subterranean masonry without disrupting municipal traffic.',
        'Aqueducts were civil engineering marvels that supplied fresh mountain water to urban bathhouses and public fountains.',
        'Historic marketplaces have existed in this Mediterranean coastal region since the Bronze Age.',
        'Excavation permits usually take between four to eight weeks to clear ministry reviews.'
      ],
      correctAnswer: 'Yes, high-resolution Ground Penetrating Radar paired with electrical resistivity tomography will allow us to map the subterranean masonry without disrupting municipal traffic.',
      explanation: 'Accepting the non-invasive approach and detailing GPR and electrical resistivity proves expertise while respecting local restrictions.'
    },
    {
      title: 'Macroeconomic Policy Symposium Rebuttal',
      topic: 'Central Banking Policy',
      speaker: 'Dr. Fischer',
      speakerRole: 'Keynote Panelist',
      promptText: 'Your paper argues that quantitative tightening disproportionately contracts small-business credit lines. But does your econometric model control for simultaneous commercial real estate devaluation during the same fiscal quarter?',
      question: 'How should the researcher defend the econometric model\'s internal validity?',
      options: [
        'We utilized instrumental variable regression and sector-specific asset write-down fixed effects, confirming that the credit contraction remains statistically robust even after isolating real estate shocks.',
        'Macroeconomics examines aggregate economic indicators including gross domestic product, unemployment rates, and price indices.',
        'Small businesses employ roughly forty-eight percent of the private sector workforce in the United States.',
        'Commercial banks are required to maintain strict liquidity coverage ratios under Basel III accords.'
      ],
      correctAnswer: 'We utilized instrumental variable regression and sector-specific asset write-down fixed effects, confirming that the credit contraction remains statistically robust even after isolating real estate shocks.',
      explanation: 'Explaining the econometric controls (instrumental variables, fixed effects) directly answers the methodological challenge.'
    },
    {
      title: 'Astrophysical Spectroscopic Discrepancy',
      topic: 'Stellar Astrophysics',
      speaker: 'Prof. Thorne',
      speakerRole: 'Observatory Director',
      promptText: 'The latest spectral emission line data from the James Webb Space Telescope indicates an anomalous carbon-to-oxygen ratio in the exoplanet\'s atmosphere. Could instrumental calibration systematic errors explain this deviation?',
      question: 'Which response evaluates both observational noise and genuine planetary chemistry?',
      options: [
        'We cross-validated the transit absorption spectra against three independent slit-loss reduction pipelines, demonstrating that the heightened C/O ratio is statistically significant at 4.8 sigma rather than an artifact of instrument noise.',
        'Spectroscopy analyzes the absorption and emission of light and other radiation by matter across diverse wavelengths.',
        'The James Webb Space Telescope operates in a halo orbit around the Sun-Earth L2 Lagrange point.',
        'Exoplanets orbiting red dwarf stars are often subject to violent stellar flare activity.'
      ],
      correctAnswer: 'We cross-validated the transit absorption spectra against three independent slit-loss reduction pipelines, demonstrating that the heightened C/O ratio is statistically significant at 4.8 sigma rather than an artifact of instrument noise.',
      explanation: 'Citing multi-pipeline validation and statistical significance (4.8 sigma) directly disproves the calibration error hypothesis.'
    },
    {
      title: 'Cognitive Neuroscience Paradigm Critique',
      topic: 'Neuroimaging',
      speaker: 'Dr. Kandel',
      speakerRole: 'Senior Neuroscientist',
      promptText: 'Your fMRI findings suggest distinct prefrontal cortical networks activate during counterfactual decision-making. How did you decouple decision latency from baseline hemodynamic response delay?',
      question: 'Which response describes the temporal signal processing methodology?',
      options: [
        'We employed an event-related paradigm with jittered inter-stimulus intervals and deconvolved the BOLD response using empirical hemodynamic response functions.',
        'Functional Magnetic Resonance Imaging detects changes associated with blood flow to infer neural activity.',
        'The prefrontal cortex is involved in executive functioning, working memory, and social decision-making.',
        'Our laboratory scanned thirty-two healthy adult volunteers over an eighteen-month study window.'
      ],
      correctAnswer: 'We employed an event-related paradigm with jittered inter-stimulus intervals and deconvolved the BOLD response using empirical hemodynamic response functions.',
      explanation: 'Explaining event-related jittering and BOLD deconvolution directly answers the technical timing critique.'
    }
  ]
};

// ------------------------------------------------------------------------------------------------
// 2. ACADEMIC LECTURE BANK (Task 2: Full Multi-Paragraph University Professor Lectures)
// ------------------------------------------------------------------------------------------------
export const ACADEMIC_LECTURES_DATA: {
  topic: string;
  title: string;
  speaker: string;
  speakerRole: string;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  duration: string;
  transcript: string;
  passageParts: { speaker: string; text: string }[];
  questions: ListeningQuestion[];
}[] = [
  {
    topic: 'Marine Biology',
    title: 'Bioluminescent Deep-Sea Adaptations',
    speaker: 'Dr. Sarah Jenkins',
    speakerRole: 'Professor of Marine Biology',
    level: 'Easy',
    duration: '2:15',
    transcript: `Good morning, class. Today, we are diving deep into the ocean's midnight zone, specifically focusing on bioluminescence. Bioluminescence is the chemical production and emission of light by living organisms. In the pitch black of the deep sea, where sunlight never penetrates, creatures have evolved this ability for essential survival functions.

Some use light to lure prey, like the famous anglerfish with its glowing dorsal lure. Others use it for defense, emitting a flash of bright light to startle or blind predators, allowing them to escape safely. And finally, many species use glowing light patterns as a signal to find mates of their own species in the vast, dark waters.

It is an incredibly efficient chemical reaction—producing cold light with almost no energy wasted as heat. The reaction primarily relies on a light-emitting molecule called luciferin and an enzyme called luciferase.`,
    passageParts: [
      { speaker: 'Dr. Sarah Jenkins', text: `Good morning, class. Today, we are diving deep into the ocean's midnight zone, specifically focusing on bioluminescence.` },
      { speaker: 'Dr. Sarah Jenkins', text: `Bioluminescence is the chemical production and emission of light by living organisms.` },
      { speaker: 'Dr. Sarah Jenkins', text: `In the pitch black of the deep sea, where sunlight never penetrates, creatures have evolved this ability for essential survival functions.` },
      { speaker: 'Dr. Sarah Jenkins', text: `Some use light to lure prey, like the famous anglerfish with its glowing dorsal lure.` },
      { speaker: 'Dr. Sarah Jenkins', text: `Others use it for defense, emitting a flash of bright light to startle or blind predators, allowing them to escape safely.` },
      { speaker: 'Dr. Sarah Jenkins', text: `And finally, many species use glowing light patterns as a signal to find mates of their own species in the vast, dark waters.` },
      { speaker: 'Dr. Sarah Jenkins', text: `It is an incredibly efficient chemical reaction—producing cold light with almost no energy wasted as heat.` },
      { speaker: 'Dr. Sarah Jenkins', text: `The reaction primarily relies on a light-emitting molecule called luciferin and an enzyme called luciferase.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'According to the professor, what is bioluminescence?',
        options: [
          'The absorption of sunlight by deep-sea plants',
          'The chemical production and emission of light by living organisms',
          'The reflection of moonlight off the ocean surface',
          'A heat-producing reaction used for thermal insulation'
        ],
        correctAnswer: 'The chemical production and emission of light by living organisms',
        explanation: 'The professor states directly that bioluminescence is "the chemical production and emission of light by living organisms."'
      },
      {
        id: 'q2',
        question: 'Why does the professor mention the anglerfish?',
        options: [
          'To illustrate how deep-sea predators use light to lure prey',
          'To describe a creature that is blinded by sunlight',
          'To prove that deep-sea fish have poor eyesight',
          'To explain how fish generate body warmth'
        ],
        correctAnswer: 'To illustrate how deep-sea predators use light to lure prey',
        explanation: 'The anglerfish is cited as an example of a creature using a glowing lure to attract prey.'
      },
      {
        id: 'q3',
        question: 'What makes bioluminescence such an efficient chemical process?',
        options: [
          'It works only when temperatures are above freezing',
          'It produces cold light with almost no energy wasted as heat',
          'It requires no chemical enzymes or proteins',
          'It can be sustained for years without food intake'
        ],
        correctAnswer: 'It produces cold light with almost no energy wasted as heat',
        explanation: 'The professor emphasizes that it produces cold light with virtually no energy lost as thermal heat.'
      }
    ]
  },
  {
    topic: 'Astronomy',
    title: 'The Great Red Spot and Planetary Storms',
    speaker: 'Prof. Marcus Vance',
    speakerRole: 'Professor of Planetary Science',
    level: 'Normal',
    duration: '2:45',
    transcript: `Class, let's turn our attention to the gas giant Jupiter, a planet famous for its extreme weather systems. Most notably, the Great Red Spot.

This giant storm is actually an anticyclone—a high-pressure system—that is wider than the entire planet Earth. What's truly remarkable is its longevity. Astronomers have observed it continuously for at least three hundred and fifty years.

Why does it last so long? On Earth, storms lose energy and dissipate rapidly when they hit land. But Jupiter has no solid surface—it is entirely made of gas and fluid liquid layers. Without land to create friction, the storm just keeps spinning, continuously powered by convective heat flowing from the planet's dense interior.

However, recent observations from the Hubble Space Telescope and Juno orbiter suggest the Spot is shrinking in diameter and getting taller. We are eager to see whether it will eventually stabilize or fade over the next century.`,
    passageParts: [
      { speaker: 'Prof. Marcus Vance', text: `Class, let's turn our attention to the gas giant Jupiter, a planet famous for its extreme weather systems.` },
      { speaker: 'Prof. Marcus Vance', text: `Most notably, the Great Red Spot. This giant storm is actually an anticyclone—a high-pressure system—that is wider than the entire planet Earth.` },
      { speaker: 'Prof. Marcus Vance', text: `What's truly remarkable is its longevity. Astronomers have observed it continuously for at least three hundred and fifty years.` },
      { speaker: 'Prof. Marcus Vance', text: `Why does it last so long? On Earth, storms lose energy and dissipate rapidly when they hit land.` },
      { speaker: 'Prof. Marcus Vance', text: `But Jupiter has no solid surface—it is entirely made of gas and fluid liquid layers. Without land to create friction, the storm just keeps spinning.` },
      { speaker: 'Prof. Marcus Vance', text: `It is continuously powered by convective heat flowing from the planet's dense interior.` },
      { speaker: 'Prof. Marcus Vance', text: `However, recent observations from the Hubble Space Telescope and Juno orbiter suggest the Spot is shrinking in diameter and getting taller.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What kind of meteorological system is Jupiter\'s Great Red Spot?',
        options: [
          'A low-pressure hurricane',
          'A high-pressure anticyclone',
          'A volcanic geothermal plume',
          'A solar wind coronal storm'
        ],
        correctAnswer: 'A high-pressure anticyclone',
        explanation: 'The professor clarifies that the Great Red Spot is "actually an anticyclone—a high-pressure system."'
      },
      {
        id: 'q2',
        question: 'Why has the storm been able to persist for over 350 years?',
        options: [
          'The absence of a solid landmass eliminates friction that would cause it to dissipate',
          'The storm is locked in place by Jupiter\'s strong magnetic poles',
          'Freezing methane gas freezes the storm clouds permanently',
          'Asteroid collisions continually recharge the vortex'
        ],
        correctAnswer: 'The absence of a solid landmass eliminates friction that would cause it to dissipate',
        explanation: 'Jupiter has no solid surface, meaning there is no land friction to slow the rotating storm down.'
      },
      {
        id: 'q3',
        question: 'According to modern telescope observations, how is the Great Red Spot currently evolving?',
        options: [
          'It is expanding across Jupiter\'s southern hemisphere',
          'It is splitting into three separate mini-cyclones',
          'It is shrinking in diameter while increasing in vertical height',
          'It has stopped rotating and lost all coloration'
        ],
        correctAnswer: 'It is shrinking in diameter while increasing in vertical height',
        explanation: 'Observations from Hubble and Juno indicate the spot is getting narrower in diameter and taller.'
      }
    ]
  },
  {
    topic: 'World History',
    title: 'The Silk Road and Early Cultural Diffusion',
    speaker: 'Dr. Alistair Sterling',
    speakerRole: 'Professor of Global History',
    level: 'Hard',
    duration: '3:20',
    transcript: `Class, when we speak of the Silk Road, we must dismiss the misconception that it was a single paved highway stretching from Europe to Asia. Rather, it was a complex network of shifting land and maritime trade routes, spanning from Chang'an in China all the way to Rome, Antioch, and Alexandria.

Merchants rarely traveled the entire distance; instead, goods were traded sequentially through diverse middleman oasis kingdoms like Samarkand and Bukhara.

But the economic impact went far beyond luxury commodities like silk, porcelain, or Roman glassware. The true transformative legacy lies in cultural diffusion.

Along with merchant caravans traveled scientific ideas, technologies, religions, and languages. For instance, the art of papermaking traveled from China to the Islamic world, and eventually revolutionized European scholarship. Religions like Buddhism and Islam spread rapidly along these pathways, adapting dynamically to local artistic traditions.

Thus, the Silk Road functioned as the primary artery of early globalization, transforming societies through sustained cross-cultural exchange.`,
    passageParts: [
      { speaker: 'Dr. Alistair Sterling', text: `Class, when we speak of the Silk Road, we must dismiss the misconception that it was a single paved highway stretching from Europe to Asia.` },
      { speaker: 'Dr. Alistair Sterling', text: `Rather, it was a complex network of shifting land and maritime trade routes, spanning from Chang'an in China all the way to Rome, Antioch, and Alexandria.` },
      { speaker: 'Dr. Alistair Sterling', text: `Merchants rarely traveled the entire distance; instead, goods were traded sequentially through diverse middleman oasis kingdoms.` },
      { speaker: 'Dr. Alistair Sterling', text: `But the economic impact went far beyond luxury commodities like silk, porcelain, or Roman glassware.` },
      { speaker: 'Dr. Alistair Sterling', text: `The true transformative legacy lies in cultural diffusion.` },
      { speaker: 'Dr. Alistair Sterling', text: `Along with merchant caravans traveled scientific ideas, technologies, religions, and languages.` },
      { speaker: 'Dr. Alistair Sterling', text: `For instance, the art of papermaking traveled from China to the Islamic world, and eventually revolutionized European scholarship.` },
      { speaker: 'Dr. Alistair Sterling', text: `Thus, the Silk Road functioned as the primary artery of early globalization.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What common myth regarding the Silk Road does Dr. Sterling challenge?',
        options: [
          'That it was used solely for military conquests',
          'That it was a single, continuous paved road',
          'That silk was never traded across Central Asia',
          'That Roman merchants lived permanently in China'
        ],
        correctAnswer: 'That it was a single, continuous paved road',
        explanation: 'Dr. Sterling emphasizes that it was an intricate network of land and sea routes, not a single highway.'
      },
      {
        id: 'q2',
        question: 'How was trade typically conducted across the Silk Road network?',
        options: [
          'Individual traders made round-trip journeys between Rome and China',
          'Goods were passed sequentially through regional middleman oasis hubs',
          'Imperial navies transported all cargo via deep-water ocean galleys',
          'Centralized guilds set universal fixed prices for all commodities'
        ],
        correctAnswer: 'Goods were passed sequentially through regional middleman oasis hubs',
        explanation: 'Goods were traded sequentially from one oasis post to another rather than by one traveler doing the whole route.'
      },
      {
        id: 'q3',
        question: 'Which technological advancement is specifically noted as having diffused to Europe via this network?',
        options: [
          'The mechanical clock',
          'Papermaking',
          'Steam-powered mills',
          'Gunpowder cannons'
        ],
        correctAnswer: 'Papermaking',
        explanation: 'The professor cites papermaking spreading from China to the Islamic world and onward to Europe.'
      }
    ]
  },
  {
    topic: 'Archaeology & Volcanology',
    title: 'Pompeii: Organic Void Preservation and Plaster Casting',
    speaker: 'Dr. Evelyn Carter',
    speakerRole: 'Professor of Roman Archaeology',
    level: 'Advanced',
    duration: '3:45',
    transcript: `Today we examine the extraordinary taphonomic mechanisms at Pompeii following the eruption of Mount Vesuvius in 79 CE. While the pyroclastic surges and heavy tephra deposits destroyed urban architecture, they established an anaerobic microenvironment that preserved organic structures in an unprecedented way.

As volcanic ash settled and compacted around victims, animals, wooden furniture, and architectural beams, it hardened into a durable volcanic matrix. Over centuries, the soft organic tissue decayed, leaving behind hollow negative cavities within the consolidated tufa.

In the nineteenth century, archaeologist Giuseppe Fiorelli devised an ingenious technique: pouring liquid plaster of Paris into these subterranean voids. Once solidified, excavators carefully chipped away the surrounding ash, unveiling exquisite three-dimensional casts.

These casts captured intimate anatomical postures, facial expressions, and clothing folds, providing invaluable forensic insight into Roman demographics, health, and tragic final moments.`,
    passageParts: [
      { speaker: 'Dr. Evelyn Carter', text: `Today we examine the extraordinary taphonomic mechanisms at Pompeii following the eruption of Mount Vesuvius in 79 CE.` },
      { speaker: 'Dr. Evelyn Carter', text: `While the pyroclastic surges destroyed urban architecture, they established an anaerobic microenvironment that preserved organic structures in an unprecedented way.` },
      { speaker: 'Dr. Evelyn Carter', text: `As volcanic ash settled and compacted around victims, animals, and wooden furniture, it hardened into a durable volcanic matrix.` },
      { speaker: 'Dr. Evelyn Carter', text: `Over centuries, the soft organic tissue decayed, leaving behind hollow negative cavities within the consolidated tufa.` },
      { speaker: 'Dr. Evelyn Carter', text: `In the nineteenth century, archaeologist Giuseppe Fiorelli devised an ingenious technique: pouring liquid plaster of Paris into these subterranean voids.` },
      { speaker: 'Dr. Evelyn Carter', text: `Once solidified, excavators carefully chipped away the surrounding ash, unveiling exquisite three-dimensional casts.` },
      { speaker: 'Dr. Evelyn Carter', text: `These casts captured intimate anatomical postures, facial expressions, and clothing folds.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What created the hollow negative cavities discovered in Pompeii\'s volcanic ash layer?',
        options: [
          'Underground gas pockets expanding during seismic aftershocks',
          'The gradual decomposition of organic matter enclosed by compacted volcanic ash',
          'Ancient Roman burial vaults carved out prior to the eruption',
          'Erosion caused by subterranean aquifer streams'
        ],
        correctAnswer: 'The gradual decomposition of organic matter enclosed by compacted volcanic ash',
        explanation: 'As organic matter decayed over centuries inside hardened ash, it left behind hollow voids.'
      },
      {
        id: 'q2',
        question: 'What method did Giuseppe Fiorelli develop to recover these lost forms?',
        options: [
          'Injecting liquid plaster into the cavities before chipping away the ash',
          'Using ultrasound scanners to map subterranean skeletons',
          'Melting the surrounding basalt with high-temperature blowtorches',
          'Freezing the soil with liquid nitrogen before excavation'
        ],
        correctAnswer: 'Injecting liquid plaster into the cavities before chipping away the ash',
        explanation: 'Fiorelli poured plaster of Paris into the voids, which created accurate 3D casts of the preserved shapes.'
      },
      {
        id: 'q3',
        question: 'What archaeological value do Fiorelli\'s casts provide to modern researchers?',
        options: [
          'They reveal trade routes with ancient Egypt',
          'They capture exact anatomical details, clothing textures, and daily life postures',
          'They provide chemical samples of ancient Roman olive oil',
          'They show the layout of bronze weapon foundries'
        ],
        correctAnswer: 'They capture exact anatomical details, clothing textures, and daily life postures',
        explanation: 'The casts provide forensic and social insight by preserving postures, expressions, and clothing folds.'
      }
    ]
  }
];

// ------------------------------------------------------------------------------------------------
// 3. CAMPUS DISCUSSION BANK (Task 3: Collegiate Student-Professor & Advisory Consultations)
// ------------------------------------------------------------------------------------------------
export const CAMPUS_DISCUSSIONS_DATA: {
  topic: string;
  title: string;
  speaker: string;
  speakerRole: string;
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced';
  duration: string;
  transcript: string;
  passageParts: { speaker: string; text: string }[];
  questions: ListeningQuestion[];
}[] = [
  {
    topic: 'Campus Library Services',
    title: 'Course Reserve Textbook Borrowing',
    speaker: 'Librarian & Student',
    speakerRole: 'Circulation Desk',
    level: 'Easy',
    duration: '1:45',
    transcript: `Student: Hi, I'm looking for the Reserve Section. I need a textbook for my History 101 class.
Librarian: Hello! Yes, the Course Reserves are kept right here behind the front circulation desk. Do you have the course number or the professor's name?
Student: Yes, it is History 101, taught by Professor Miller. The textbook is called "The American Horizon".
Librarian: Let me check our catalog system... Yes, we have two copies of that book on two-hour reserve. That means you can borrow it to study here in the library, but you can't take it home.
Student: Oh, I see. Two hours should be enough to copy the chapters I need for tonight's reading assignment. Can I renew it if no one else requests it?
Librarian: Absolutely! If there's no queue waiting, you can check it out for another two hours. Just bring it back to the desk before your time expires.`,
    passageParts: [
      { speaker: 'Student', text: `Hi, I'm looking for the Reserve Section. I need a textbook for my History 101 class.` },
      { speaker: 'Librarian', text: `Hello! Yes, the Course Reserves are kept right here behind the front circulation desk. Do you have the course number or the professor's name?` },
      { speaker: 'Student', text: 'Yes, it is History 101, taught by Professor Miller. The textbook is called "The American Horizon".' },
      { speaker: 'Librarian', text: `Let me check our catalog system... Yes, we have two copies of that book on two-hour reserve. That means you can borrow it to study here in the library, but you can't take it home.` },
      { speaker: 'Student', text: `Oh, I see. Two hours should be enough to copy the chapters I need for tonight's reading assignment. Can I renew it if no one else requests it?` },
      { speaker: 'Librarian', text: `Absolutely! If there's no queue waiting, you can check it out for another two hours. Just bring it back to the desk before your time expires.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What is the student trying to accomplish at the circulation desk?',
        options: [
          'Register for a History 101 seminar',
          'Access a course reserve textbook for study',
          'Apply for a student assistant job at the library',
          'Purchase a required textbook for the semester'
        ],
        correctAnswer: 'Access a course reserve textbook for study',
        explanation: 'The student states they need a textbook on course reserve for their History 101 class.'
      },
      {
        id: 'q2',
        question: 'What restriction applies to the reserve textbook?',
        options: [
          'It can only be used during weekend library hours',
          'It must remain inside the library building during the two-hour loan period',
          'It can only be read in Professor Miller\'s office',
          'It cannot be photocopied under any circumstances'
        ],
        correctAnswer: 'It must remain inside the library building during the two-hour loan period',
        explanation: 'The librarian explains that the student can study with it in the library, but cannot take it home.'
      },
      {
        id: 'q3',
        question: 'Under what condition may the student extend their checkout period?',
        options: [
          'By paying an hourly extension surcharge',
          'If no other student has requested the book when the two hours expire',
          'By obtaining a written signature from the history department',
          'Only if the library is staying open past midnight'
        ],
        correctAnswer: 'If no other student has requested the book when the two hours expire',
        explanation: 'The librarian says the loan can be renewed for another two hours if there is no queue.'
      }
    ]
  },
  {
    topic: 'Victorian Literature',
    title: 'Professor Consultation: Term Paper Thesis Focus',
    speaker: 'Dr. Helen Brooks & Student',
    speakerRole: 'Office Hours',
    level: 'Normal',
    duration: '3:00',
    transcript: `Student: Dr. Brooks, thanks for meeting with me. I wanted to talk about my paper topic for our Victorian Literature class. I want to compare "Jane Eyre" and "Wuthering Heights".
Dr. Brooks: Ah, Charlotte and Emily Brontë. A classic comparison, but quite broad! What specifically is your thesis statement going to focus on?
Student: I was thinking of looking at how nature is used to reflect the characters' emotions in both books. Like the stormy weather in "Wuthering Heights" matching Heathcliff's anger.
Dr. Brooks: Yes, the pathetic fallacy! That is a very solid foundation. However, to make this an A-grade paper, you need to narrow it down. Instead of just listing examples of weather, try analyzing how the characters' relationship to nature reflects their social class. For instance, Cathy's wild connection to the moors versus her confinement in the civilized Thrushcross Grange.
Student: Oh, wow, that connects directly to our discussion on industrialization and social class! I could contrast that with Jane Eyre's search for independence at Thornfield Hall.
Dr. Brooks: Exactly! Now you have a tight, argumentative focus. Go ahead and write up an outline and bring it to next week's seminar.`,
    passageParts: [
      { speaker: 'Student', text: `Dr. Brooks, thanks for meeting with me. I wanted to talk about my paper topic for our Victorian Literature class. I want to compare "Jane Eyre" and "Wuthering Heights".` },
      { speaker: 'Dr. Brooks', text: `Ah, Charlotte and Emily Brontë. A classic comparison, but quite broad! What specifically is your thesis statement going to focus on?` },
      { speaker: 'Student', text: `I was thinking of looking at how nature is used to reflect the characters' emotions in both books. Like the stormy weather in "Wuthering Heights" matching Heathcliff's anger.` },
      { speaker: 'Dr. Brooks', text: `Yes, the pathetic fallacy! That is a very solid foundation. However, to make this an A-grade paper, you need to narrow it down.` },
      { speaker: 'Dr. Brooks', text: `Instead of just listing examples of weather, try analyzing how the characters' relationship to nature reflects their social class.` },
      { speaker: 'Student', text: `Oh, wow, that connects directly to our discussion on industrialization and social class! I could contrast that with Jane Eyre's search for independence at Thornfield Hall.` },
      { speaker: 'Dr. Brooks', text: `Exactly! Now you have a tight, argumentative focus. Go ahead and write up an outline and bring it to next week's seminar.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'Why does Dr. Brooks initially advise the student to refine their proposal?',
        options: [
          'The chosen novels were written during different centuries',
          'The original comparative idea is too broad without a specific argument',
          'The department does not allow students to write on the Brontë sisters',
          'The student has not yet read the required assigned texts'
        ],
        correctAnswer: 'The original comparative idea is too broad without a specific argument',
        explanation: 'Dr. Brooks notes that comparing the two novels is classic, but quite broad without a narrow thesis.'
      },
      {
        id: 'q2',
        question: 'What literary device is referenced when discussing weather mirroring emotion?',
        options: [
          'Deus ex machina',
          'The pathetic fallacy',
          'Alliteration',
          'Epistolary narrative'
        ],
        correctAnswer: 'The pathetic fallacy',
        explanation: 'Dr. Brooks identifies nature mirroring character emotions as the "pathetic fallacy."'
      },
      {
        id: 'q3',
        question: 'What specific analytical angle does Dr. Brooks recommend to elevate the paper?',
        options: [
          'Examining how interactions with nature reflect characters\' social class status',
          'Focusing exclusively on the authors\' childhood diaries',
          'Writing a creative screenplay adaptation instead',
          'Analyzing only the minor supporting characters'
        ],
        correctAnswer: 'Examining how interactions with nature reflect characters\' social class status',
        explanation: 'Dr. Brooks suggests connecting the characters\' relationship to natural settings with their social class.'
      }
    ]
  },
  {
    topic: 'Academic Advising',
    title: 'Course Overload and Degree Audit Clearance',
    speaker: 'Advisor Susan & Student',
    speakerRole: 'Department Advising',
    level: 'Hard',
    duration: '2:50',
    transcript: `Student: Hi Advisor Susan. I'm running into an issue registering for Advanced Econometrics this semester. The portal says the lecture section is capped at thirty students, but it's a prerequisite for my capstone project.
Advisor Susan: Let me pull up your degree audit file. I see you've already completed Intermediate Microeconomics and Multivariable Calculus with strong marks. Since this is your final year before graduation, you are eligible for an academic course overload waiver.
Student: That is a huge relief! Does that mean I can bypass the waitlist automatically?
Advisor Susan: Yes, with departmental authorization. I will submit an electronic override to the registrar's office right now. However, keep in mind that taking twenty credit hours means your weekly study schedule will be rigorous. Are you also working at the campus career center this term?
Student: I scaled back my shifts to six hours a week so I can dedicate ample time to problem sets and statistical lab work.
Advisor Susan: Excellent decision. The override is processed; check your student portal within the hour to verify your enrollment.`,
    passageParts: [
      { speaker: 'Student', text: `Hi Advisor Susan. I'm running into an issue registering for Advanced Econometrics this semester. The portal says the lecture section is capped at thirty students, but it's a prerequisite for my capstone project.` },
      { speaker: 'Advisor Susan', text: `Let me pull up your degree audit file. I see you've already completed Intermediate Microeconomics and Multivariable Calculus with strong marks.` },
      { speaker: 'Advisor Susan', text: `Since this is your final year before graduation, you are eligible for an academic course overload waiver.` },
      { speaker: 'Student', text: `That is a huge relief! Does that mean I can bypass the waitlist automatically?` },
      { speaker: 'Advisor Susan', text: `Yes, with departmental authorization. I will submit an electronic override to the registrar's office right now.` },
      { speaker: 'Advisor Susan', text: `However, keep in mind that taking twenty credit hours means your weekly study schedule will be rigorous. Are you also working at the campus career center this term?` },
      { speaker: 'Student', text: `I scaled back my shifts to six hours a week so I can dedicate ample time to problem sets and statistical lab work.` },
      { speaker: 'Advisor Susan', text: `Excellent decision. The override is processed; check your student portal within the hour to verify your enrollment.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'Why is the student seeking assistance from Advisor Susan?',
        options: [
          'To withdraw from the university for a semester',
          'Because a mandatory capstone prerequisite course is fully booked',
          'To appeal a low grade received on a midterm exam',
          'To apply for a scholarship through the career center'
        ],
        correctAnswer: 'Because a mandatory capstone prerequisite course is fully booked',
        explanation: 'The student explains that Advanced Econometrics is capped at 30 students and needed for the capstone.'
      },
      {
        id: 'q2',
        question: 'Why is the student granted a course overload override?',
        options: [
          'They are in their final graduation year and meet all prior course prerequisites',
          'They agreed to pay double tuition fees for the extra credits',
          'The professor offered to teach a private tutorial section',
          'They are the president of the student economics association'
        ],
        correctAnswer: 'They are in their final graduation year and meet all prior course prerequisites',
        explanation: 'Susan grants the waiver because the student is in their final year and has strong prerequisite grades.'
      },
      {
        id: 'q3',
        question: 'How has the student prepared for the increased academic workload?',
        options: [
          'By hiring a private tutor for statistical theory',
          'By reducing their campus job shifts to six hours per week',
          'By dropping out of all student clubs and sports',
          'By taking only asynchronous online lectures'
        ],
        correctAnswer: 'By reducing their campus job shifts to six hours per week',
        explanation: 'The student states they scaled back campus work shifts to six hours per week.'
      }
    ]
  },
  {
    topic: 'Biochemistry Research',
    title: 'Independent Lab Thesis Methodology Defense',
    speaker: 'Prof. Chen & Research Student',
    speakerRole: 'Faculty Research Lab',
    level: 'Advanced',
    duration: '3:30',
    transcript: `Prof. Chen: Welcome, Maya. I reviewed your protocol draft for isolating the heat-shock protein HSP-70 in extremophilic yeast strains. Your proposed centrifuge speed appears optimal, but I have reservations regarding the cell lysis buffer.
Student: Are you concerned that the detergent concentration in the buffer might denature the tertiary protein folds before we can perform the Western blot assay?
Prof. Chen: Precisely. If the SDS ionic surfactant concentration exceeds zero point one percent during the initial mechanical bead-beating phase, you risk disrupting the enzymatic binding pockets prematurely.
Student: In that case, what if we switch to a milder non-ionic detergent like Triton X-100 for the initial cell membrane disruption, and add protease inhibitor cocktails on ice?
Prof. Chen: That is a far more prudent approach. It preserves conformational stability while ensuring complete cell wall breakdown. Furthermore, make sure to calibrate the spectrophotometer at 595 nanometers for your Bradford protein quantification.
Student: I will adjust the protocol parameters and prepare the reagents for Monday's preliminary assay run. Thank you for the guidance, Professor!`,
    passageParts: [
      { speaker: 'Prof. Chen', text: `Welcome, Maya. I reviewed your protocol draft for isolating the heat-shock protein HSP-70 in extremophilic yeast strains.` },
      { speaker: 'Prof. Chen', text: `Your proposed centrifuge speed appears optimal, but I have reservations regarding the cell lysis buffer.` },
      { speaker: 'Student', text: `Are you concerned that the detergent concentration in the buffer might denature the tertiary protein folds before we can perform the Western blot assay?` },
      { speaker: 'Prof. Chen', text: `Precisely. If the SDS ionic surfactant concentration exceeds zero point one percent during the initial mechanical bead-beating phase, you risk disrupting the enzymatic binding pockets prematurely.` },
      { speaker: 'Student', text: `In that case, what if we switch to a milder non-ionic detergent like Triton X-100 for the initial cell membrane disruption, and add protease inhibitor cocktails on ice?` },
      { speaker: 'Prof. Chen', text: `That is a far more prudent approach. It preserves conformational stability while ensuring complete cell wall breakdown.` },
      { speaker: 'Prof. Chen', text: `Furthermore, make sure to calibrate the spectrophotometer at 595 nanometers for your Bradford protein quantification.` },
      { speaker: 'Student', text: `I will adjust the protocol parameters and prepare the reagents for Monday's preliminary assay run.` }
    ],
    questions: [
      {
        id: 'q1',
        question: 'What initial concern does Professor Chen express regarding Maya\'s experimental protocol?',
        options: [
          'The centrifuge rotation speed is too slow to separate cellular debris',
          'The lysis buffer detergent could prematurely denature the target protein structure',
          'The yeast strains were not grown at sufficiently high temperatures',
          'The Western blot assay is too outdated for graduate research'
        ],
        correctAnswer: 'The lysis buffer detergent could prematurely denature the target protein structure',
        explanation: 'Professor Chen is worried the surfactant in the buffer might denature the tertiary protein structure.'
      },
      {
        id: 'q2',
        question: 'What modification does Maya suggest to preserve protein stability?',
        options: [
          'Using a milder non-ionic detergent and keeping samples on ice with protease inhibitors',
          'Boiling the samples at one hundred degrees Celsius before centrifugation',
          'Doubling the concentration of sodium dodecyl sulfate',
          'Replacing extremophilic yeast with bacterial E. coli cultures'
        ],
        correctAnswer: 'Using a milder non-ionic detergent and keeping samples on ice with protease inhibitors',
        explanation: 'Maya suggests switching to a milder non-ionic detergent (Triton X-100) and adding protease inhibitors on ice.'
      },
      {
        id: 'q3',
        question: 'At what wavelength should the spectrophotometer be calibrated for Bradford protein assays?',
        options: [
          '280 nanometers',
          '450 nanometers',
          '595 nanometers',
          '720 nanometers'
        ],
        correctAnswer: '595 nanometers',
        explanation: 'Professor Chen explicitly reminds Maya to calibrate the spectrophotometer at 595 nanometers.'
      }
    ]
  }
];

// Helper to retrieve an exercise deterministically across 20 exercises per tier
export function getListeningExercise(
  taskType: 'listenRespond' | 'lecture' | 'discussion',
  level: 'Easy' | 'Normal' | 'Hard' | 'Advanced',
  exerciseNum: number
): ListeningExercise {
  try {
    if (adminListeningService && typeof adminListeningService.getStudentExercise === 'function') {
      return adminListeningService.getStudentExercise(taskType, level, exerciseNum);
    }
  } catch {}

  const exIndex = Math.max(0, exerciseNum - 1);
  const cycleOffset = (monthlyPracticeEngine.getActiveEdition().cycleSeed - 1) * 3;

  if (taskType === 'listenRespond') {
    const list = LISTEN_AND_RESPOND_DATA[level] || LISTEN_AND_RESPOND_DATA.Easy;
    const item = list[(exIndex + cycleOffset) % list.length];
    const id = `listening-lr-${level.toLowerCase()}-${exerciseNum}`;

    return {
      id,
      title: `Exercise ${exerciseNum}: ${item.title}`,
      type: 'Listen & Respond',
      topic: item.topic,
      duration: '0:45',
      level,
      speaker: item.speaker,
      speakerRole: item.speakerRole,
      transcript: `${item.speaker} (${item.speakerRole}): "${item.promptText}"`,
      passageParts: [
        { speaker: `${item.speaker} (${item.speakerRole})`, text: item.promptText }
      ],
      questions: [
        {
          id: `${id}-q1`,
          question: item.question,
          options: item.options,
          correctAnswer: item.correctAnswer,
          explanation: item.explanation
        }
      ]
    };
  }

  if (taskType === 'lecture') {
    const matchingLectures = ACADEMIC_LECTURES_DATA.filter(l => l.level === level);
    const pool = matchingLectures.length > 0 ? matchingLectures : ACADEMIC_LECTURES_DATA;
    const base = pool[(exIndex + cycleOffset) % pool.length];
    const id = `listening-lec-${level.toLowerCase()}-${exerciseNum}`;

    return {
      id,
      title: `Exercise ${exerciseNum}: ${base.title}`,
      type: 'Academic Lecture',
      topic: base.topic,
      duration: base.duration,
      level,
      speaker: base.speaker,
      speakerRole: base.speakerRole,
      transcript: base.transcript,
      passageParts: base.passageParts,
      questions: base.questions.map((q, idx) => ({
        ...q,
        id: `${id}-q${idx + 1}`
      }))
    };
  }

  // Campus Discussion
  const matchingDiscussions = CAMPUS_DISCUSSIONS_DATA.filter(d => d.level === level);
  const pool = matchingDiscussions.length > 0 ? matchingDiscussions : CAMPUS_DISCUSSIONS_DATA;
  const base = pool[(exIndex + cycleOffset) % pool.length];
  const id = `listening-disc-${level.toLowerCase()}-${exerciseNum}`;

  return {
    id,
    title: `Exercise ${exerciseNum}: ${base.title}`,
    type: 'Campus Discussion',
    topic: base.topic,
    duration: base.duration,
    level,
    speaker: base.speaker,
    speakerRole: base.speakerRole,
    transcript: base.transcript,
    passageParts: base.passageParts,
    questions: base.questions.map((q, idx) => ({
      ...q,
      id: `${id}-q${idx + 1}`
    }))
  };
}

export const LISTENING_EXERCISES: ListeningExercise[] = [
  ...ACADEMIC_LECTURES_DATA.map((l, i) => ({
    id: `l-lec-${i + 1}`,
    title: l.title,
    type: 'Academic Lecture' as const,
    topic: l.topic,
    duration: l.duration,
    level: l.level,
    speaker: l.speaker,
    speakerRole: l.speakerRole,
    transcript: l.transcript,
    passageParts: l.passageParts,
    questions: l.questions
  })),
  ...CAMPUS_DISCUSSIONS_DATA.map((d, i) => ({
    id: `l-disc-${i + 1}`,
    title: d.title,
    type: 'Campus Discussion' as const,
    topic: d.topic,
    duration: d.duration,
    level: d.level,
    speaker: d.speaker,
    speakerRole: d.speakerRole,
    transcript: d.transcript,
    passageParts: d.passageParts,
    questions: d.questions
  }))
];
