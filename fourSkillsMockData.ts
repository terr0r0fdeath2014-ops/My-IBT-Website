/**
 * Data structure and content for Full 4-Skill iBT TOEFL Mock Examinations.
 * Each full mockup includes:
 * 1. Reading Section (2 academic passages, 20 questions)
 * 2. Listening Section (1 Campus Conversation + 1 Academic Lecture, 10 questions)
 * 3. Speaking Section (Task 1: Listen & Repeat + Task 2: Professor Academic Interview)
 * 4. Writing Section (Task 1: Academic Discussion + Task 2: Integrated / Email Task)
 */

export interface FourSkillsReadingPassage {
  id: string;
  title: string;
  discipline: string;
  paragraphs: string[];
  questions: {
    id: string;
    type: 'factual' | 'negative' | 'vocabulary' | 'inference' | 'purpose' | 'simplification' | 'insert' | 'summary';
    question: string;
    options: string[];
    correctAnswer: string | number | string[];
    explanation: string;
    paragraphIndex?: number;
  }[];
}

export interface FourSkillsListeningItem {
  id: string;
  type: 'conversation' | 'lecture';
  title: string;
  speaker: string;
  role: string;
  topic: string;
  transcript: string;
  audioPrompt: string;
  dialogueParts?: { speaker: string; text: string }[];
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

export interface FourSkillsSpeakingTask {
  id: string;
  taskType: 'listenAndRepeat' | 'interview';
  title: string;
  scenario: string;
  interviewerName?: string;
  interviewerRole?: string;
  interviewerAvatar?: string;
  items?: {
    id: string;
    sentence: string;
    phoneticTip: string;
    keywords: string[];
  }[];
  interviewQuestions?: {
    qId: string;
    question: string;
    prepTime: number; // seconds
    speakTime: number; // seconds
    modelAnswer: string;
    keyPoints: string[];
  }[];
}

export interface FourSkillsWritingTask {
  id: string;
  type: 'academicDiscussion' | 'integrated';
  title: string;
  topic: string;
  timeLimitMinutes: number;
  professorPrompt: string;
  readingPassage?: string;
  lecturePoints?: string[];
  studentPeers?: {
    name: string;
    avatar: string;
    stance: string;
  }[];
  minWords: number;
  targetWords: number;
  modelAnswer: string;
  rubricKeyPoints: string[];
}

export interface FourSkillsMockExam {
  id: string;
  examNumber: number;
  title: string;
  edition: string;
  description: string;
  estimatedTime: string;
  reading: {
    timeMinutes: number;
    passages: FourSkillsReadingPassage[];
  };
  listening: {
    timeMinutes: number;
    items: FourSkillsListeningItem[];
  };
  speaking: {
    timeMinutes: number;
    tasks: FourSkillsSpeakingTask[];
  };
  writing: {
    timeMinutes: number;
    tasks: FourSkillsWritingTask[];
  };
}

export const FOUR_SKILLS_MOCK_EXAMS: FourSkillsMockExam[] = [
  {
    id: 'mock-4s-1',
    examNumber: 1,
    title: 'Comprehensive 2026 iBT Mockup Exam 01',
    edition: 'Cambridge & Princeton Review Standard Edition',
    description: 'Complete 4-skill diagnostic test featuring Ancient Architecture & Glaciology reading passages, campus housing & astrophysics listening, AI ethics speaking interview, and corporate sustainability academic discussion writing.',
    estimatedTime: '1 hour 50 mins',
    reading: {
      timeMinutes: 35,
      passages: [
        {
          id: 'r-p1',
          title: 'The Megalithic Architecture of Göbekli Tepe',
          discipline: 'Archaeology & Anthropology',
          paragraphs: [
            'Göbekli Tepe, located in southeastern Turkey, has revolutionized anthropological understanding of the transition from hunter-gatherer societies to agricultural settlements. Dating back to approximately 9600 BCE, the site consists of massive T-shaped limestone pillars arranged in circles, carved with intricate reliefs of animals such as leopards, foxes, and vultures. [■] Prior to its discovery, orthodox archaeological consensus maintained that monumental architecture was possible only after the advent of agriculture, which generated the food surpluses required to sustain a specialized labor force. [■] Göbekli Tepe demonstrated that complex religious ceremonies and collaborative construction actually predated farming, and may in fact have served as the initial catalyst for agricultural domestication.',
            'The sheer physical exertion needed to quarry, sculpt, and transport pillars weighing up to twenty tons each implies a sophisticated social organization. Without pack animals or metal tools, hundreds of individuals must have assembled in organized work gangs. [■] Furthermore, isotopic analysis of gazelle and wild cattle bones unearthed at the site reveals that massive feasts were held during construction phases. These communal gatherings required unprecedented quantities of food, compelling early foragers to experiment with cultivating wild einkorn wheat, which grew natively in the nearby Karacadag mountains. [■]',
            'Moreover, Göbekli Tepe displays deliberate subterranean backfilling. Rather than being destroyed by invaders or weather erosion, each stone ring was intentionally buried with thousands of cubic meters of gravel and sediment after decades of ritual use, upon which a newer, smaller circle was erected. This cyclical burying suggests that the act of construction was itself the focal religious rite, maintaining cosmic harmony between early humans and the predator spirits carved on the megaliths.'
          ],
          questions: [
            {
              id: 'q1-1',
              type: 'factual',
              paragraphIndex: 0,
              question: 'According to paragraph 1, what did archaeologists believe before the discovery of Göbekli Tepe?',
              options: [
                'Hunter-gatherers were incapable of religious or symbolic expression.',
                'Monumental architecture could only be built after agricultural food surpluses existed.',
                'The earliest stone buildings were constructed exclusively in Mesopotamia.',
                'Farming developed long before any complex religious gatherings took place.'
              ],
              correctAnswer: 'Monumental architecture could only be built after agricultural food surpluses existed.',
              explanation: 'Paragraph 1 explicitly notes that prior consensus held that monumental architecture was possible only after the advent of agriculture created food surpluses.'
            },
            {
              id: 'q1-2',
              type: 'vocabulary',
              paragraphIndex: 0,
              question: 'The word "catalyst" in paragraph 1 is closest in meaning to:',
              options: [
                'Primary stimulus or trigger',
                'Temporary barrier',
                'Final consequence',
                'Dangerous consequence'
              ],
              correctAnswer: 'Primary stimulus or trigger',
              explanation: '"Catalyst" in this context refers to a driving force or primary spark that initiates a major development.'
            },
            {
              id: 'q1-3',
              type: 'inference',
              paragraphIndex: 1,
              question: 'What can be inferred from paragraph 2 about the wild einkorn wheat in the Karacadag mountains?',
              options: [
                'It was imported from distant trade partners across the Mediterranean.',
                'Its systematic cultivation was accelerated by the demand for food during monumental construction feasts.',
                'It was strictly reserved for religious sacrifices rather than human consumption.',
                'It replaced meat as the exclusive dietary staple of the builders.'
              ],
              correctAnswer: 'Its systematic cultivation was accelerated by the demand for food during monumental construction feasts.',
              explanation: 'Paragraph 2 links the massive feasting requirements of construction crews to the early experimentation with cultivating wild einkorn wheat.'
            },
            {
              id: 'q1-4',
              type: 'factual',
              paragraphIndex: 2,
              question: 'According to paragraph 3, why was Göbekli Tepe buried under gravel?',
              options: [
                'To protect the holy structures from hostile invading armies.',
                'Due to catastrophic landslides caused by severe prehistoric floods.',
                'Because the deliberate act of building and burying was part of the community\'s ongoing ritual cycle.',
                'To conceal sacred animal carvings from neighbouring rival tribes.'
              ],
              correctAnswer: 'Because the deliberate act of building and burying was part of the community\'s ongoing ritual cycle.',
              explanation: 'Paragraph 3 explains that the intentional subterranean backfilling was part of a ritual cycle where construction itself was the primary religious rite.'
            },
            {
              id: 'q1-5',
              type: 'insert',
              paragraphIndex: 0,
              question: 'Look at the four squares [■] that indicate where the following sentence could be added: "This unexpected chronology forced scholars to rewrite the timeline of human societal evolution."',
              options: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
              correctAnswer: 1,
              explanation: 'Position 2 directly follows the explanation of how Göbekli Tepe overturned the orthodox consensus, creating a logical transition.'
            }
          ]
        },
        {
          id: 'r-p2',
          title: 'Subglacial Hydrology and Ice Sheet Dynamics',
          discipline: 'Glaciology & Climate Physics',
          paragraphs: [
            'The stability of polar ice sheets in Antarctica and Greenland is critically governed by subglacial hydrology—the movement of liquid water beneath massive glaciers. Far from being frozen immovably to bedrock, the base of an ice sheet frequently reaches the pressure melting point due to geothermal heat flux from the Earth\'s crust combined with frictional heating from glacial motion. [■] The resulting basal meltwater collects in interconnected drainage networks that exert profound influence on how swiftly glaciers slide toward the ocean. [■]',
            'Hydrological systems beneath ice sheets operate in two contrasting states: inefficient distributed cavities and efficient channelized conduits. In the distributed state, water flows through linked cavities formed as ice slides over bedrock bumps. Because water is trapped under high hydrostatic pressure, it partially lifts the overburden weight of the ice sheet, reducing basal friction and drastically accelerating ice flow. [■] Conversely, when abundant summer surface meltwater drains through vertical shafts known as moulins, the basal water volume expands sufficiently to carve out large R-channels (Röthlisberger channels). These conduits depressurize the basal system, allowing the glacier to settle back onto the bedrock and decelerating its velocity. [■]',
            'Understanding this paradox—where more meltwater can paradoxically lead to slower seasonal ice discharge—is vital for refining global sea-level rise models. However, sudden drainage of subglacial lakes can still cause transient velocity surges that breach coastal ice shelves.'
          ],
          questions: [
            {
              id: 'q2-1',
              type: 'factual',
              paragraphIndex: 0,
              question: 'According to paragraph 1, what causes the base of a glacier to reach the pressure melting point?',
              options: [
                'Solar radiation penetrating through deep crevasses in the ice sheet.',
                'Geothermal heat from the crust together with friction generated by glacier movement.',
                'Warm ocean currents circulating directly beneath coastal bedrock.',
                'Atmospheric greenhouse gases warming the bedrock surface.'
              ],
              correctAnswer: 'Geothermal heat from the crust together with friction generated by glacier movement.',
              explanation: 'Paragraph 1 explains that geothermal heat flux and frictional heating from movement bring the base of the ice sheet to its pressure melting point.'
            },
            {
              id: 'q2-2',
              type: 'inference',
              paragraphIndex: 1,
              question: 'Which of the following best explains why distributed cavity systems cause faster glacial sliding?',
              options: [
                'They freeze the glacier onto bedrock, creating a smooth icy slide.',
                'High-pressure trapped water reduces the contact friction between the ice and the rock beneath.',
                'They melt away the entire base of the glacier in a few days.',
                'They channel water directly to coastal ice shelves at high speed.'
              ],
              correctAnswer: 'High-pressure trapped water reduces the contact friction between the ice and the rock beneath.',
              explanation: 'Paragraph 2 highlights that water trapped under high hydrostatic pressure partially lifts the ice sheet, reducing basal friction.'
            },
            {
              id: 'q2-3',
              type: 'vocabulary',
              paragraphIndex: 1,
              question: 'The word "depressurize" in paragraph 2 is closest in meaning to:',
              options: [
                'Release or lower internal water pressure',
                'Rapidly increase boiling temperature',
                'Completely freeze solid',
                'Contaminate with minerals'
              ],
              correctAnswer: 'Release or lower internal water pressure',
              explanation: 'Depressurize means to relieve or diminish the hydraulic pressure within the subglacial channel system.'
            },
            {
              id: 'q2-4',
              type: 'factual',
              paragraphIndex: 2,
              question: 'What is the "paradox" described in paragraph 3?',
              options: [
                'Glaciers melt faster in winter than in summer.',
                'Increased surface meltwater can create efficient channels that ultimately slow down glacial movement.',
                'Subglacial lakes only form in the warmest regions of Greenland.',
                'Ice sheets lose more mass through evaporation than through melting.'
              ],
              correctAnswer: 'Increased surface meltwater can create efficient channels that ultimately slow down glacial movement.',
              explanation: 'The paradox is that high meltwater volumes carve out R-channels that depressurize the system and reduce sliding velocity.'
            },
            {
              id: 'q2-5',
              type: 'insert',
              paragraphIndex: 1,
              question: 'Look at the four squares [■] where the following sentence could be inserted: "This hydraulic jacking effect is responsible for the fastest glacier surges observed in western Greenland."',
              options: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
              correctAnswer: 2,
              explanation: 'Position 3 immediately follows the description of water lifting the overburden weight and reducing basal friction (the hydraulic jacking effect).'
            }
          ]
        }
      ]
    },
    listening: {
      timeMinutes: 30,
      items: [
        {
          id: 'l-conv1',
          type: 'conversation',
          title: 'Campus Housing Relocation Inquiry',
          speaker: 'Student & Housing Officer Mr. Higgins',
          role: 'Campus Life Discussion',
          topic: 'Dormitory Reassignment Policies',
          transcript: 'Student: Good morning, Mr. Higgins. I was hoping to discuss my current dormitory assignment in Whitman Hall. I have been having severe sleep disruption because my room faces the new engineering quad construction zone, where heavy machinery begins operating at 6:30 AM.\n\nMr. Higgins: I understand your frustration, Sarah. That construction schedule was unfortunately moved up to meet the university\'s sustainability deadline. However, room reassignments mid-semester are strictly regulated due to our near-capacity occupancy this term.\n\nStudent: Is there any vacancy in the North Campus quiet study dormitories? I spoke with my academic advisor, and she mentioned that priority transfers are sometimes granted for students preparing for medical school entrance examinations.\n\nMr. Higgins: While academic priority is indeed a consideration, we require a formal memorandum from your department chair before opening an emergency housing appeal. Alternatively, we have two single rooms opening next week in Maple Court because students are departing for study abroad programs. If you submit the standard relocation fee waiver by Thursday, I can hold one of those spots for you.',
          audioPrompt: 'Listen to a conversation between a student and a campus housing administrator.',
          dialogueParts: [
            { speaker: 'Student', text: 'Good morning, Mr. Higgins. I was hoping to discuss my current dormitory assignment in Whitman Hall. I have been having severe sleep disruption because my room faces the new engineering quad construction zone.' },
            { speaker: 'Mr. Higgins', text: 'I understand your frustration, Sarah. That construction schedule was unfortunately moved up. However, room reassignments mid-semester are strictly regulated due to our near-capacity occupancy.' },
            { speaker: 'Student', text: 'Is there any vacancy in the North Campus quiet study dormitories? My academic advisor mentioned priority transfers for students taking medical school entrance exams.' },
            { speaker: 'Mr. Higgins', text: 'While academic priority is considered, we require a formal memorandum from your department chair. Alternatively, two single rooms are opening in Maple Court due to study abroad departures. If you submit the waiver by Thursday, I can hold a spot.' }
          ],
          questions: [
            {
              id: 'lq1',
              question: 'Why did the student visit the campus housing office?',
              options: [
                'To pay her overdue housing and dining fees.',
                'To request a dormitory transfer due to early morning construction noise.',
                'To apply for a student job in the engineering department.',
                'To report a broken heating unit in Whitman Hall.'
              ],
              correctAnswer: 'To request a dormitory transfer due to early morning construction noise.',
              explanation: 'The student explains that construction machinery outside her window starts at 6:30 AM, causing severe sleep disruption.'
            },
            {
              id: 'lq2',
              question: 'What requirement does Mr. Higgins mention for granting an academic priority housing transfer?',
              options: [
                'A minimum grade point average of 3.8.',
                'A formal memorandum from the student\'s department chair.',
                'A medical certificate from the university health clinic.',
                'Payment of a non-refundable expedited processing penalty.'
              ],
              correctAnswer: 'A formal memorandum from the student\'s department chair.',
              explanation: 'Mr. Higgins states that emergency academic appeals require a formal memorandum from the department chair.'
            },
            {
              id: 'lq3',
              question: 'What immediate alternative solution does Mr. Higgins offer the student?',
              options: [
                'Moving into an off-campus apartment with a subsidized stipend.',
                'Holding a room in Maple Court that is becoming vacant due to study abroad departures.',
                'Providing noise-cancelling earplugs from the residential life storage.',
                'Cancelling the early morning construction shifts until next month.'
              ],
              correctAnswer: 'Holding a room in Maple Court that is becoming vacant due to study abroad departures.',
              explanation: 'Mr. Higgins offers to hold an upcoming vacancy in Maple Court if she submits the fee waiver by Thursday.'
            }
          ]
        },
        {
          id: 'l-lec1',
          type: 'lecture',
          title: 'Astrophysics: Exoplanet Detection via Transit Spectroscopy',
          speaker: 'Professor Vance',
          role: 'Department of Astronomy',
          topic: 'Atmospheric Characterization of Exoplanets',
          transcript: 'Welcome back, everyone. Today we are exploring one of the most remarkable breakthroughs in modern observational astrophysics: transmission spectroscopy of extrasolar planets.\n\nWhen an exoplanet orbits between its host star and our space telescopes—an event known as a transit—it blocks a small fraction of the starlight. But more importantly, a tiny sliver of that starlight filters directly through the exoplanet\'s upper atmosphere. As the starlight passes through the gas envelope, specific chemical elements and molecules absorb distinct wavelengths of light, creating absorption lines in the stellar spectrum.\n\nBy comparing the star\'s spectrum during the transit against the spectrum observed when the planet is hidden behind the star, astronomers can isolate the planet\'s atmospheric transmission spectrum. This technique has enabled the detection of water vapor, methane, carbon dioxide, and even sulfur dioxide in the atmospheres of gas giants and super-Earths.\n\nHowever, there is a significant complicating factor: high-altitude photochemical hazes and cloud decks. In planets like GJ 1214 b, thick layers of microscopic aerosol particles scatter all optical and infrared light uniformly. This produces what we call a "flat" or featureless spectrum, effectively masking the chemical fingerprints of the lower atmosphere beneath. To penetrate these hazes, we now rely on longer infrared wavelengths from instruments like the James Webb Space Telescope.',
          audioPrompt: 'Listen to part of a lecture in an astronomy class by Professor Vance.',
          dialogueParts: [
            { speaker: 'Professor Vance', text: 'Welcome back, everyone. Today we are exploring transmission spectroscopy of extrasolar planets.' },
            { speaker: 'Professor Vance', text: 'When an exoplanet transits its host star, a tiny sliver of starlight filters directly through the planet\'s atmosphere, creating distinctive absorption lines.' },
            { speaker: 'Professor Vance', text: 'By comparing the spectrum during transit with the unocculted star, we isolate the planet\'s chemical composition, such as water vapor, methane, and CO2.' },
            { speaker: 'Professor Vance', text: 'The major challenge is high-altitude aerosols and photochemical hazes, which produce featureless spectra that mask deeper atmospheric layers.' }
          ],
          questions: [
            {
              id: 'lq4',
              question: 'What is the main topic of Professor Vance\'s lecture?',
              options: [
                'The mathematical calculations used to determine stellar mass.',
                'The method of detecting atmospheric gases on exoplanets via transmission spectroscopy.',
                'The technological construction of rocket propulsion engines.',
                'The historical disputes over the classification of dwarf planets.'
              ],
              correctAnswer: 'The method of detecting atmospheric gases on exoplanets via transmission spectroscopy.',
              explanation: 'The lecture focuses on how transmission spectroscopy allows scientists to analyze the atmospheric chemistry of transiting exoplanets.'
            },
            {
              id: 'lq5',
              question: 'According to the professor, what causes a "flat" or featureless spectrum?',
              options: [
                'The total absence of any atmosphere around the exoplanet.',
                'High-altitude photochemical hazes and aerosol clouds scattering light uniformly.',
                'Extreme magnetic fields distorting the telescope\'s optical sensors.',
                'The star being too cold to emit measurable infrared light.'
              ],
              correctAnswer: 'High-altitude photochemical hazes and aerosol clouds scattering light uniformly.',
              explanation: 'The professor explains that thick aerosol clouds and hazes scatter light uniformly, obscuring spectral absorption lines.'
            }
          ]
        }
      ]
    },
    speaking: {
      timeMinutes: 16,
      tasks: [
        {
          id: 'spk-t1',
          taskType: 'listenAndRepeat',
          title: 'Task 1: Academic Fluency & Sentence Intonation',
          scenario: 'Listen to each academic statement spoken aloud. Repeat the sentence accurately with proper stress, natural cadence, and clear pronunciation.',
          items: [
            {
              id: 'rep-1',
              sentence: 'The research seminar on macroeconomic policy will convene in Hall B on Tuesday afternoon.',
              phoneticTip: 'Emphasize "macroeconomic" with clear vowel separation and pause slightly after "Hall B".',
              keywords: ['research', 'macroeconomic', 'convene', 'afternoon']
            },
            {
              id: 'rep-2',
              sentence: 'All laboratory samples must be sterilized and logged into the centralized database before five o’clock.',
              phoneticTip: 'Crisp articulation of "sterilized" and "centralized database".',
              keywords: ['laboratory', 'sterilized', 'database', 'five']
            },
            {
              id: 'rep-3',
              sentence: 'Scholars disagree on whether technological innovation was the primary catalyst for urbanization.',
              phoneticTip: 'Rising intonation on "innovation", strong stress on "primary catalyst".',
              keywords: ['scholars', 'technological', 'catalyst', 'urbanization']
            }
          ]
        },
        {
          id: 'spk-t2',
          taskType: 'interview',
          title: 'Task 2: Academic Interview on Artificial Intelligence in Higher Education',
          scenario: 'You are taking a simulated academic interview with Professor Evelyn Cross from the University Academic Ethics Committee. Answer each question clearly and persuasively.',
          interviewerName: 'Dr. Evelyn Cross',
          interviewerRole: 'Chair of Academic Policy Committee',
          interviewerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
          interviewQuestions: [
            {
              qId: 'int-q1',
              question: 'Many universities are debating whether AI writing tools should be banned or integrated into undergraduate courses. What is your position, and what is your primary reason?',
              prepTime: 15,
              speakTime: 45,
              modelAnswer: 'In my view, universities should integrate AI tools rather than attempt an outright ban. First, AI literacy is becoming an essential professional skill that graduates will need in the modern workforce. Second, total bans are technologically unenforceable and foster distrust between students and faculty. By teaching ethical citation, critique of AI hallucinations, and prompting strategies, institutions can elevate critical thinking while maintaining rigorous academic integrity.',
              keyPoints: ['AI literacy is essential for modern employment', 'Bans are unenforceable and cause unnecessary friction', 'Focus on ethical usage and critical evaluation']
            },
            {
              qId: 'int-q2',
              question: 'How can professors accurately evaluate student learning if students have access to generative AI assistants when completing assignments at home?',
              prepTime: 15,
              speakTime: 45,
              modelAnswer: 'Professors can adapt their assessment methods by incorporating oral presentations, in-class discussions, and multi-stage writing portfolios where students document their iterative brainstorming process. Additionally, assigning personal case studies and requiring critical synthesis of recent local events reduces the efficacy of generic automated outputs, ensuring that true analytical comprehension is verified.',
              keyPoints: ['Multi-stage portfolios and process documentation', 'Oral defenses and interactive in-class evaluations', 'Tailored case studies requiring localized critical analysis']
            }
          ]
        }
      ]
    },
    writing: {
      timeMinutes: 29,
      tasks: [
        {
          id: 'w-task1',
          type: 'academicDiscussion',
          title: 'Task 1: Writing for an Academic Discussion',
          topic: 'Corporate Environmental Responsibility: Mandates vs. Free Market Incentives',
          timeLimitMinutes: 10,
          minWords: 100,
          targetWords: 140,
          professorPrompt: 'Your professor is teaching a class on environmental policy and economics. Write a post responding to the professor\'s question:\n\n"Governments around the world are trying to reduce industrial greenhouse gas emissions. Some experts argue that strict government regulations and penalties are the only reliable method to force corporations to adopt green technologies. Others believe that providing tax incentives and fostering consumer-driven market competition is far more effective. Which approach do you think governments should prioritize, and why?"',
          studentPeers: [
            {
              name: 'Claire',
              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
              stance: 'Strict government mandates are essential because corporations prioritize quarterly profits over ecological stability unless they face substantial financial fines.'
            },
            {
              name: 'Paul',
              avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
              stance: 'Tax subsidies and green investment grants inspire innovative startups to engineer cheaper renewable alternatives, which naturally displaces fossil fuel reliance faster than bureaucracy.'
            }
          ],
          modelAnswer: 'While Claire makes a compelling point regarding the reluctance of corporations to sacrifice short-term profits, I strongly believe that governments should prioritize tax incentives and market-driven grants. When authorities offer substantial tax credits for clean energy investments, businesses actively allocate capital toward pioneering zero-emission solutions, creating scalable technologies that benefit the broader economy. For instance, tax exemptions for electric vehicle manufacturers sparked rapid advancements in battery efficiency that far surpassed regulatory minimums. Therefore, fostering economic incentives generates sustainable innovation more dynamically than punitive regulations alone.',
          rubricKeyPoints: [
            'Directly states and defends a clear stance on policy prioritization',
            'Acknowledges peer viewpoint (Claire or Paul) with critical development',
            'Provides concrete real-world illustration (e.g. EV battery subsidies or carbon credits)',
            'Maintains sophisticated academic syntax and cohesive transitional phrasing'
          ]
        }
      ]
    }
  },
  {
    id: 'mock-4s-2',
    examNumber: 2,
    title: 'Comprehensive 2026 iBT Mockup Exam 02',
    edition: 'ETS Ivy League Benchmark Series',
    description: 'Full 4-skill diagnostic test covering Evolutionary Biology of Cephalopods & Renewable Energy Grid Integration in Reading; Marine Ecology & Musicology in Listening; Academic Library Policies in Speaking; and University Tuition Subsidies in Academic Discussion Writing.',
    estimatedTime: '1 hour 50 mins',
    reading: {
      timeMinutes: 35,
      passages: [
        {
          id: 'r2-p1',
          title: 'Adaptive Camouflage and Neurobiology in Cephalopods',
          discipline: 'Marine Evolutionary Biology',
          paragraphs: [
            'Cephalopods—specifically octopuses, squids, and cuttlefish—possess the most sophisticated dynamic camouflage system in the animal kingdom. Unlike chameleons, whose color shifts rely on slow hormonal cascades that take several minutes, cephalopods can alter their skin coloration, reflective patterning, and 3D surface texture in less than two hundred milliseconds. [■] This instantaneous metamorphosis is driven by direct neural control over millions of dermal chromatophore organs. [■] Each chromatophore consists of an elastic pigment sac surrounded by radial muscle fibers innervated directly by motor neurons originating in the central brain.',
            'Beneath the layer of chromatophores lie two additional cellular structures: iridophores and leucophores. Iridophores contain stacks of thin protein platelets made of reflectin, which produce structural colors through light interference, reflecting brilliant greens, blues, and silvers depending on the angle of illumination. Leucophores, by contrast, act as broadband light scatterers that reflect ambient environmental light uniformly, producing pure white patches. [■] By modulating the tension of muscles around chromatophores while exploiting passive reflection from iridophores, cephalopods can seamlessly emulate coral reefs, sandy ocean floors, or undulating seaweed. [■]',
            'Remarkably, behavioral experiments have demonstrated that most cephalopods are completely colorblind, possessing only a single type of visual opsin photoreceptor. Biologists hypothesize that they perceive color nuances through chromatic aberration—using high-pupil apertures to focus different wavelengths at slightly different planes on their retina—or through light-sensing opsins distributed throughout their own skin tissues.'
          ],
          questions: [
            {
              id: 'q2-1-1',
              type: 'factual',
              paragraphIndex: 0,
              question: 'How do cephalopods change their skin color much faster than chameleons?',
              options: [
                'By releasing powerful hormones directly into their bloodstream.',
                'Through direct neural innervation of muscle fibers attached to dermal chromatophores.',
                'By shedding their outer layer of translucent scales.',
                'By absorbing ambient pigments from ocean corals.'
              ],
              correctAnswer: 'Through direct neural innervation of muscle fibers attached to dermal chromatophores.',
              explanation: 'Paragraph 1 explains that motor neurons from the central brain directly control radial muscle fibers around pigment sacs in under 200 milliseconds.'
            },
            {
              id: 'q2-1-2',
              type: 'vocabulary',
              paragraphIndex: 1,
              question: 'The word "modulating" in paragraph 2 is closest in meaning to:',
              options: [
                'Adjusting or regulating',
                'Completely destroying',
                'Permanently freezing',
                'Igniting chemically'
              ],
              correctAnswer: 'Adjusting or regulating',
              explanation: 'Modulating means varying, adjusting, or regulating the tension of the surrounding muscles.'
            },
            {
              id: 'q2-1-3',
              type: 'inference',
              paragraphIndex: 2,
              question: 'What paradox is highlighted in paragraph 3 regarding cephalopod vision?',
              options: [
                'They can see perfectly in complete darkness despite having no eyes.',
                'They generate precise color-matched camouflage despite being colorblind.',
                'They hunt exclusively by echolocation rather than visual cues.',
                'Their eyes are identical to human eyes in every anatomical respect.'
              ],
              correctAnswer: 'They generate precise color-matched camouflage despite being colorblind.',
              explanation: 'Paragraph 3 notes it is remarkable that cephalopods match colors in their environment while possessing only a single photoreceptor type.'
            },
            {
              id: 'q2-1-4',
              type: 'insert',
              paragraphIndex: 0,
              question: 'Look at the four squares [■] where the following sentence could be added: "This enables rapid tactical responses during surprise predator encounters."',
              options: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
              correctAnswer: 1,
              explanation: 'Position 2 follows the sentence describing the sub-200-millisecond speed of the camouflage metamorphosis.'
            }
          ]
        },
        {
          id: 'r2-p2',
          title: 'Intermittent Energy Sources and Smart Grid Synchronization',
          discipline: 'Electrical Engineering & Clean Energy',
          paragraphs: [
            'As global power infrastructures transition toward renewable energy, the integration of solar photovoltaics and wind turbines presents severe challenges to electrical grid stability. Traditional grids were engineered around centralized thermal and hydroelectric power plants, which supply continuous, dispatchable baseload electricity. [■] In contrast, solar and wind generation are inherently intermittent, dependent on fluctuating weather patterns and diurnal solar cycles. [■]',
            'A primary technical hurdle is the preservation of grid frequency—typically 50 or 60 Hertz. In conventional generators, massive spinning turbines provide physical inertia, dampening sudden frequency oscillations caused by unexpected demand surges. Renewable power systems connect to the grid via electronic inverters, which lack mechanical rotational inertia. [■] If a sudden cloud deck shades an industrial solar array, the instantaneous drop in power generation can trigger rapid frequency decay, resulting in automated regional blackouts unless compensated for within milliseconds. [■]',
            'To resolve this instability, grid operators are deploying grid-forming inverters and utility-scale battery energy storage systems (BESS). These battery reserves can inject or absorb hundreds of megawatts in fractions of a second, mimicking synthetic inertia and buffering the grid against sudden generation lapses.'
          ],
          questions: [
            {
              id: 'q2-2-1',
              type: 'factual',
              paragraphIndex: 0,
              question: 'According to paragraph 1, what distinguishes traditional power plants from solar and wind systems?',
              options: [
                'Traditional plants are dispatchable and provide continuous baseload power, whereas renewables are intermittent.',
                'Traditional plants require no water for cooling purposes.',
                'Renewable sources produce direct current that cannot be transformed.',
                'Traditional plants have zero greenhouse gas emissions.'
              ],
              correctAnswer: 'Traditional plants are dispatchable and provide continuous baseload power, whereas renewables are intermittent.',
              explanation: 'Paragraph 1 contrasts dispatchable thermal/hydro baseload power with the intermittent weather-dependent nature of solar and wind.'
            },
            {
              id: 'q2-2-2',
              type: 'inference',
              paragraphIndex: 1,
              question: 'Why do electronic inverters pose a risk to grid frequency stability?',
              options: [
                'They overheat during winter storms.',
                'They lack the physical rotational inertia supplied by massive spinning turbines.',
                'They consume more electricity than they produce.',
                'They cannot connect to high-voltage transmission lines.'
              ],
              correctAnswer: 'They lack the physical rotational inertia supplied by massive spinning turbines.',
              explanation: 'Paragraph 2 explains that inverters lack mechanical rotational inertia, making them vulnerable to rapid frequency decay.'
            },
            {
              id: 'q2-2-3',
              type: 'vocabulary',
              paragraphIndex: 2,
              question: 'The word "synthetic" in paragraph 2 is closest in meaning to:',
              options: [
                'Artificially simulated or electronic',
                'Natural and organic',
                'Extremely fragile',
                'Outdated and primitive'
              ],
              correctAnswer: 'Artificially simulated or electronic',
              explanation: '"Synthetic inertia" refers to digitally simulated or emulated inertia provided by batteries and smart inverters.'
            }
          ]
        }
      ]
    },
    listening: {
      timeMinutes: 30,
      items: [
        {
          id: 'l2-conv1',
          type: 'conversation',
          title: 'Office Hours: Independent Research Grant Proposal',
          speaker: 'Student & Dr. Alvarez',
          role: 'Academic Mentorship Dialogue',
          topic: 'Biology Undergraduate Research Fellowship',
          transcript: 'Student: Dr. Alvarez, thank you for meeting with me during office hours. I am drafting my proposal for the Undergraduate Summer Research Fellowship in cellular microbiology, but I am uncertain about the budget allocation section for enzyme reagents.\n\nDr. Alvarez: I am glad you came in, David. The grant evaluation committee looks very closely at project feasibility. If your requested reagent budget exceeds fifteen hundred dollars, you must provide itemized quotations from accredited chemical suppliers.\n\nStudent: I see. Our preliminary design requires CRISPR-Cas9 enzyme kits and fluorescent antibodies for cellular tagging. Could I leverage the department\'s existing bulk supply discount?\n\nDr. Alvarez: Exactly. If you collaborate with our graduate laboratory, you can note in your methodology section that baseline culture media and standard microscopes are pre-funded. That demonstrates fiscal prudence and strengthens your competitive ranking.',
          audioPrompt: 'Listen to a conversation between an undergraduate student and a biology professor.',
          dialogueParts: [
            { speaker: 'Student', text: 'Dr. Alvarez, I am drafting my proposal for the Summer Research Fellowship, but I am uncertain about the reagent budget section.' },
            { speaker: 'Dr. Alvarez', text: 'The grant committee values feasibility. If requested reagents exceed $1,500, you must attach itemized supplier quotations.' },
            { speaker: 'Student', text: 'Could I leverage the department\'s existing bulk supply discount for the enzyme kits?' },
            { speaker: 'Dr. Alvarez', text: 'Yes, partnering with our graduate lab lets you cite pre-funded supplies, demonstrating fiscal prudence.' }
          ],
          questions: [
            {
              id: 'l2-q1',
              question: 'What is the primary reason the student meets with Dr. Alvarez?',
              options: [
                'To ask for an extension on a midterm laboratory exam.',
                'To seek guidance on the budget and feasibility of a research grant proposal.',
                'To apply for a teaching assistant position in general chemistry.',
                'To contest a grade on his recent biology essay.'
              ],
              correctAnswer: 'To seek guidance on the budget and feasibility of a research grant proposal.',
              explanation: 'The student states he is drafting his Summer Research Fellowship proposal and needs advice on the reagent budget.'
            },
            {
              id: 'l2-q2',
              question: 'What advice does Dr. Alvarez give to make the student\'s proposal more competitive?',
              options: [
                'Switch the topic from microbiology to botanical ecology.',
                'Collaborate with the graduate lab to utilize pre-funded baseline equipment and discounts.',
                'Double the requested grant amount to ensure extra funds.',
                'Submit the proposal without any faculty signature.'
              ],
              correctAnswer: 'Collaborate with the graduate lab to utilize pre-funded baseline equipment and discounts.',
              explanation: 'Dr. Alvarez recommends citing existing graduate lab resources to demonstrate fiscal prudence.'
            }
          ]
        }
      ]
    },
    speaking: {
      timeMinutes: 16,
      tasks: [
        {
          id: 'spk2-t1',
          taskType: 'listenAndRepeat',
          title: 'Task 1: Acoustic Cadence & Phonetic Articulation',
          scenario: 'Listen to each campus lecture sentence. Repeat back clearly with authentic pitch contours and academic rhythm.',
          items: [
            {
              id: 'rep2-1',
              sentence: 'The peer review process ensures that empirical findings undergo thorough scrutiny prior to publication.',
              phoneticTip: 'Clear stress on "empirical" and crisp ending on "scrutiny".',
              keywords: ['peer', 'review', 'empirical', 'scrutiny', 'publication']
            },
            {
              id: 'rep2-2',
              sentence: 'Students who require accommodation for visual impairment should notify the accessibility coordinator.',
              phoneticTip: 'Smooth liaison between "visual" and "impairment".',
              keywords: ['accommodation', 'visual', 'impairment', 'accessibility']
            }
          ]
        },
        {
          id: 'spk2-t2',
          taskType: 'interview',
          title: 'Task 2: Academic Policy Interview with Dean Morrison',
          scenario: 'Participate in a policy interview regarding university sustainability and campus vehicle bans.',
          interviewerName: 'Dean Marcus Morrison',
          interviewerRole: 'Dean of Student Affairs',
          interviewerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
          interviewQuestions: [
            {
              qId: 'int2-q1',
              question: 'Our university is considering eliminating all undergraduate parking on campus to encourage public transit and cycling. What are the advantages and drawbacks of this policy?',
              prepTime: 15,
              speakTime: 45,
              modelAnswer: 'The primary advantage of banning undergraduate parking is a significant reduction in campus carbon emissions, leading to a cleaner and safer pedestrian environment. However, the major drawback is the burden it places on non-traditional commuting students who live in areas lacking reliable public transportation. To make this policy fair, the university must pair parking restrictions with expanded shuttle routes and subsidized bus passes.',
              keyPoints: ['Advantage: reduced carbon footprint and pedestrian safety', 'Drawback: hardship for commuting students without transit access', 'Solution: subsidized shuttles and expanded public routes']
            }
          ]
        }
      ]
    },
    writing: {
      timeMinutes: 29,
      tasks: [
        {
          id: 'w2-task1',
          type: 'academicDiscussion',
          title: 'Task 1: Academic Discussion on Remote Work vs. Office Presence',
          topic: 'Future Workplace Models and Urban Economies',
          timeLimitMinutes: 10,
          minWords: 100,
          targetWords: 140,
          professorPrompt: 'Your economics professor asks:\n\n"Many corporations are deciding whether to mandate a five-day return to physical offices or maintain flexible work-from-home options. Which workplace model do you believe is superior for long-term employee productivity and innovation, and why?"',
          studentPeers: [
            {
              name: 'Andrew',
              avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
              stance: 'Physical office collaboration fosters spontaneous brainstorming and builds strong organizational culture that cannot be replicated through video calls.'
            },
            {
              name: 'Elena',
              avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
              stance: 'Remote work eliminates exhausting daily commutes, granting employees higher autonomy and uninterrupted concentration for deep analytical tasks.'
            }
          ],
          modelAnswer: 'While Andrew rightly highlights the spontaneous camaraderie of face-to-face office environments, I firmly believe that flexible hybrid models offer superior productivity. Eliminating burdensome daily commutes allows professionals to reclaim valuable hours each week, drastically reducing workplace fatigue and burnout. Furthermore, quiet home environments enable deep, uninterrupted focus on complex coding or quantitative analysis. A balanced model where teams gather in person for collaborative planning while executing individual projects remotely harmonizes innovation with optimal employee well-being.',
          rubricKeyPoints: [
            'Takes a definitive stance on flexible hybrid work models',
            'Directly evaluates Andrew\'s counterargument on spontaneous interaction',
            'Explains the dual benefits of reduced commute fatigue and deep analytical focus',
            'Demonstrates strong grammatical cohesion and advanced academic terminology'
          ]
        }
      ]
    }
  }
];
