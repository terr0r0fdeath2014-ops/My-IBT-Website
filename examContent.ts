
import { EASY_ACADEMIC_PASSAGES_M1 } from './easy_academic_passages_m1';
import { 
  EASY_ACADEMIC_PASSAGES_M2, 
  NORMAL_ACADEMIC_PASSAGES_M2, 
  HARD_ACADEMIC_PASSAGES_M2, 
  ADVANCED_ACADEMIC_PASSAGES_M2 
} from './academic_passage_m2';
import { 
  EASY_ACADEMIC_PASSAGES_M1 as EXT_EASY_M1, 
  NORMAL_ACADEMIC_PASSAGES_M1, 
  HARD_ACADEMIC_PASSAGES_M1, 
  ADVANCED_ACADEMIC_PASSAGES_M1 
} from './academic_passage_extended';
import { 
  EASY_DAILY_LIFE_M2, 
  NORMAL_DAILY_LIFE_M2, 
  HARD_DAILY_LIFE_M2, 
  ADVANCED_DAILY_LIFE_M2 
} from './daily_life_m2';

export interface TOEFLQuestion {
  id: number;
  type: 'vocabulary' | 'inference' | 'factual' | 'insert' | 'summary' | 'negative' | 'purpose' | 'reference' | 'sentence-simplification';
  question: string;
  options?: string[];
  correct: string | string[] | number;
  paragraphIndex?: number;
  highlightText?: string;
  insertPositions?: number[];
  explanation?: string;
}

export interface TOEFLPassage {
  id: number;
  title: string;
  type: 'academic' | 'historical' | 'scientific';
  paragraphs: string[];
  questions: TOEFLQuestion[];
}

export interface ReadingExam {
  module1: TOEFLPassage[];
  module2Easy: TOEFLPassage[];
  module2Hard: TOEFLPassage[];
  module3?: TOEFLPassage[];
}

const RAW_INITIAL_EXAM: ReadingExam[] = [
  {
    module1: [
      {
        id: 301,
        title: "The Roman Aqueducts: Engineering the Empire",
        type: 'historical' as const,
        paragraphs: [
          "The Roman aqueducts stand as a testament to the incredible engineering prowess of the Roman Empire. These structures were designed to transport water from distant sources into cities and industrial sites, providing for public baths, latrines, fountains, and private households. [■] The sheer scale of the network was unprecedented, with the city of Rome alone being served by eleven aqueducts totaling hundreds of miles in length. [■] Most of the system was underground, protected from pollution and enemy interference, while the famous arched bridges were used only when necessary to cross depressions in the terrain. [■]",
          "Gravity was the sole driving force behind the movement of water. Engineers meticulously calculated the gradient required to keep the water flowing at a steady pace without causing damage to the channels. This required highly precise instruments, such as the chorobates, a type of water level. [■]",
          "Ancient accounts emphasize the cleanliness of the water. Settling tanks, known as piscinae, were used to remove sediment before the water reached the city distribution points. The constant flow also helped to flush out the complex sewage systems, which significantly improved public health in densely populated areas."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was the primary purpose of the Roman aqueducts?",
            options: [
              "To act as bridges for military transport",
              "To provide water for varying public and private needs",
              "To mark the boundaries of the Roman Empire",
              "To serve as decorative monuments in the city center"
            ],
            correct: "To provide water for varying public and private needs",
            explanation: "Paragraph 1 states they transported water for public baths, latrines, fountains, and private households."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "meticulously",
            question: "The word 'meticulously' in paragraph 2 is closest in meaning to",
            options: ["quickly", "roughly", "carefully", "secretly"],
            correct: "carefully",
            explanation: "Meticulously means with great attention to detail, which is synonymous with carefully."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 0,
            question: "Why was most of the aqueduct system built underground?",
            options: [
              "To keep the water cool during the summer",
              "To avoid the use of expensive building materials",
              "To protect the water from contaminants and enemies",
              "To maintain a steeper gradient for faster flow"
            ],
            correct: "To protect the water from contaminants and enemies",
            explanation: "The passage explicitly mentions protection from pollution and enemy interference as reasons for the underground design."
          },
          {
            id: 4,
            type: 'insert',
            paragraphIndex: 0,
            question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n'These engineering feats were not just functional but also symbolic of Roman dominance over nature.'\n\nWhere would the sentence best fit?",
            options: ["Square 1", "Square 2", "Square 3", "Square 4"],
            correct: 0,
            explanation: "This sentence fits well as a general comment following the introduction of the engineering prowess."
          },
          {
            id: 5,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Aqueducts relied on gravity and precise engineering.",
              "The systems were mainly underground to ensure security and purity.",
              "Public baths were the most important users of the water.",
              "Roman water systems significantly improved urban public health.",
              "The chorobates was the only instrument used by Roman engineers.",
              "Cisterns were more important than aqueducts in small towns."
            ],
            correct: [
              "Aqueducts relied on gravity and precise engineering.",
              "The systems were mainly underground to ensure security and purity.",
              "Roman water systems significantly improved urban public health."
            ],
            explanation: "These choices cover the mechanics, the design features, and the social impact of the aqueducts."
          }
        ]
      }
    ],
    module2Hard: [
      {
        id: 302,
        title: "Photosynthesis: The Engine of Life",
        type: 'scientific' as const,
        paragraphs: [
          "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. This process generally involves the green pigment chlorophyll and generates oxygen as a byproduct. [■] It is the primary source of energy for nearly all life on Earth, providing the literal foundation for most food chains. [■]",
          "The process occurs in two main stages: the light-dependent reactions and the light-independent reactions (Calvin cycle). During the light-dependent stage, chlorophyll absorbs light energy, which is used to split water molecules and produce ATP and NADPH. [■] In the Calvin cycle, these energy-rich molecules are used to convert carbon dioxide into glucose, which the plant can use for energy or structural growth. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What are the two main ingredients plants use for photosynthesis?",
            options: ["Oxygen and glucose", "Carbon dioxide and water", "Nitrogen and sunlight", "Sugar and soil"],
            correct: "Carbon dioxide and water",
            explanation: "The first paragraph mentions synthesizing foods from carbon dioxide and water."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "split",
            question: "The word 'split' in paragraph 2 is closest in meaning to",
            options: ["combine", "divide", "protect", "ignite"],
            correct: "divide",
            explanation: "To split molecules means to break them apart or divide them."
          },
          {
            id: 3,
            type: 'purpose',
            paragraphIndex: 1,
            question: "Why does the author mention ATP and NADPH?",
            options: [
              "To explain the colors of various plant pigments",
              "To identify the waste products of the Calvin cycle",
              "To describe the energy-carrying molecules created in the first stage",
              "To argue that plants do not need sunlight for food production"
            ],
            correct: "To describe the energy-carrying molecules created in the first stage",
            explanation: "The passage states these are energy-rich molecules produced during the light-dependent stage used later in the Calvin cycle."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Photosynthesis uses sunlight to create food and oxygen.",
              "The process is divided into light-dependent and light-independent stages.",
              "Chlorophyll is the only pigment capable of absorbing light energy.",
              "Energy from the first stage is used to create glucose in the second stage.",
              "Most oxygen in the atmosphere comes from ocean water evaporation.",
              "Plants prefer blue light over red light for maximum growth."
            ],
            correct: [
              "Photosynthesis uses sunlight to create food and oxygen.",
              "The process is divided into light-dependent and light-independent stages.",
              "Energy from the first stage is used to create glucose in the second stage."
            ],
            explanation: "These choices accurately summarize the core mechanism and stages of photosynthesis."
          }
        ]
      }
    ],
    module2Easy: [
      {
        id: 303,
        title: "The Mystery of the Bronze Age Collapse",
        type: 'historical' as const,
        paragraphs: [
          "Towards the end of the 13th century BCE, the eastern Mediterranean experienced a sudden and violent transformation known as the Late Bronze Age Collapse. In a span of just a few decades, several major civilizations, including the Mycenaeans in Greece, the Hittites in Anatolia, and the New Kingdom Egyptians, either completely collapsed or were significantly weakened. [■] Palaces were burned, trade routes were abandoned, and literacy effectively vanished in many regions for centuries. [■]",
          "Scholars have long debated the causes of this widespread societal failure. One popular theory points to the arrival of the 'Sea Peoples,' a mysterious confederation of seaborne raiders who attacked coastal cities. [■] However, many modern historians argue that a 'systems collapse' occurred, driven by a combination of internal and external factors. This includes prolonged droughts, earthquakes, and the disruption of vital tin and copper trade routes needed for bronze production. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which civilizations were affected by the Late Bronze Age Collapse?",
            options: ["The Romans and Carthaginians", "The Mycenaeans and Hittites", "The Aztecs and Mayans", "The Persians and Macedonians"],
            correct: "The Mycenaeans and Hittites",
            explanation: "Paragraph 1 lists the Mycenaeans and Hittites as civilizations that collapsed or were weakened."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "prolonged",
            question: "The word 'prolonged' in paragraph 2 is closest in meaning to",
            options: ["severe", "unexpected", "extended", "local"],
            correct: "extended",
            explanation: "Prolonged means continuing for a long time, or extended."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the 'systems collapse' theory suggest?",
            options: [
              "A single massive volcanic eruption destroyed all cities.",
              "A series of interconnected failures led to total collapse.",
              "The civilizations decided to merge into a single empire.",
              "Internal civil wars were the only reason for the decline."
            ],
            correct: "A series of interconnected failures led to total collapse.",
            explanation: "A systems collapse implies multiple factors working together to cause a breakdown of the entire societal structure."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Late Bronze Age Collapse saw the rapid decline of major Mediterranean powers.",
              "The loss of literacy was a significant consequence of the societal breakdown.",
              "The Sea Peoples were likely from the northern European plains.",
              "Multiple factors, including trade disruption and climate change, likely caused the collapse.",
              "Bronze was replaced by iron immediately after the collapse started.",
              "The Hittite Empire was the first to recover after only ten years."
            ],
            correct: [
              "The Late Bronze Age Collapse saw the rapid decline of major Mediterranean powers.",
              "The loss of literacy was a significant consequence of the societal breakdown.",
              "Multiple factors, including trade disruption and climate change, likely caused the collapse."
            ],
            explanation: "These choices cover the event itself, a major consequence, and the likely complex causes."
          }
        ]
      }
    ]
  }
];

const RAW_M3_PASSAGES: TOEFLPassage[] = [
      {
        id: 301,
        title: "The Roman Aqueducts: Engineering the Empire",
        type: 'historical' as const,
        paragraphs: [
          "The Roman aqueducts stand as a testament to the incredible engineering prowess of the Roman Empire. These structures were designed to transport water from distant sources into cities and industrial sites, providing for public baths, latrines, fountains, and private households. [■] The sheer scale of the network was unprecedented, with the city of Rome alone being served by eleven aqueducts totaling hundreds of miles in length. [■] Most of the system was underground, protected from pollution and enemy interference, while the famous arched bridges were used only when necessary to cross depressions in the terrain. [■]",
          "Gravity was the sole driving force behind the movement of water. Engineers meticulously calculated the gradient required to keep the water flowing at a steady pace without causing damage to the channels. This required highly precise instruments, such as the chorobates, a type of water level. [■]",
          "Ancient accounts emphasize the cleanliness of the water. Settling tanks, known as piscinae, were used to remove sediment before the water reached the city distribution points. The constant flow also helped to flush out the complex sewage systems, which significantly improved public health in densely populated areas."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was the primary purpose of the Roman aqueducts?",
            options: [
              "To act as bridges for military transport",
              "To provide water for varying public and private needs",
              "To mark the boundaries of the Roman Empire",
              "To serve as decorative monuments in the city center"
            ],
            correct: "To provide water for varying public and private needs",
            explanation: "Paragraph 1 states they transported water for public baths, latrines, fountains, and private households."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "meticulously",
            question: "The word 'meticulously' in paragraph 2 is closest in meaning to",
            options: ["quickly", "roughly", "carefully", "secretly"],
            correct: "carefully",
            explanation: "Meticulously means with great attention to detail, which is synonymous with carefully."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 0,
            question: "Why was most of the aqueduct system built underground?",
            options: [
              "To keep the water cool during the summer",
              "To avoid the use of expensive building materials",
              "To protect the water from contaminants and enemies",
              "To maintain a steeper gradient for faster flow"
            ],
            correct: "To protect the water from contaminants and enemies",
            explanation: "The passage explicitly mentions protection from pollution and enemy interference as reasons for the underground design."
          },
          {
            id: 4,
            type: 'insert',
            paragraphIndex: 0,
            question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n'These engineering feats were not just functional but also symbolic of Roman dominance over nature.'\n\nWhere would the sentence best fit?",
            options: ["Square 1", "Square 2", "Square 3", "Square 4"],
            correct: 0,
            explanation: "This sentence fits well as a general comment following the introduction of the engineering prowess."
          },
          {
            id: 5,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Aqueducts relied on gravity and precise engineering.",
              "The systems were mainly underground to ensure security and purity.",
              "Public baths were the most important users of the water.",
              "Roman water systems significantly improved urban public health.",
              "The chorobates was the only instrument used by Roman engineers.",
              "Cisterns were more important than aqueducts in small towns."
            ],
            correct: [
              "Aqueducts relied on gravity and precise engineering.",
              "The systems were mainly underground to ensure security and purity.",
              "Roman water systems significantly improved urban public health."
            ],
            explanation: "These choices cover the mechanics, the design features, and the social impact of the aqueducts."
          }
        ]
      },
      {
        id: 302,
        title: "Photosynthesis: The Engine of Life",
        type: 'scientific' as const,
        paragraphs: [
          "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. This process generally involves the green pigment chlorophyll and generates oxygen as a byproduct. [■] It is the primary source of energy for nearly all life on Earth, providing the literal foundation for most food chains. [■]",
          "The process occurs in two main stages: the light-dependent reactions and the light-independent reactions (Calvin cycle). During the light-dependent stage, chlorophyll absorbs light energy, which is used to split water molecules and produce ATP and NADPH. [■] In the Calvin cycle, these energy-rich molecules are used to convert carbon dioxide into glucose, which the plant can use for energy or structural growth. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What are the two main ingredients plants use for photosynthesis?",
            options: ["Oxygen and glucose", "Carbon dioxide and water", "Nitrogen and sunlight", "Sugar and soil"],
            correct: "Carbon dioxide and water",
            explanation: "The first paragraph mentions synthesizing foods from carbon dioxide and water."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "split",
            question: "The word 'split' in paragraph 2 is closest in meaning to",
            options: ["combine", "divide", "protect", "ignite"],
            correct: "divide",
            explanation: "To split molecules means to break them apart or divide them."
          },
          {
            id: 3,
            type: 'purpose',
            paragraphIndex: 1,
            question: "Why does the author mention ATP and NADPH?",
            options: [
              "To explain the colors of various plant pigments",
              "To identify the waste products of the Calvin cycle",
              "To describe the energy-carrying molecules created in the first stage",
              "To argue that plants do not need sunlight for food production"
            ],
            correct: "To describe the energy-carrying molecules created in the first stage",
            explanation: "The passage states these are energy-rich molecules produced during the light-dependent stage used later in the Calvin cycle."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Photosynthesis uses sunlight to create food and oxygen.",
              "The process is divided into light-dependent and light-independent stages.",
              "Chlorophyll is the only pigment capable of absorbing light energy.",
              "Energy from the first stage is used to create glucose in the second stage.",
              "Most oxygen in the atmosphere comes from ocean water evaporation.",
              "Plants prefer blue light over red light for maximum growth."
            ],
            correct: [
              "Photosynthesis uses sunlight to create food and oxygen.",
              "The process is divided into light-dependent and light-independent stages.",
              "Energy from the first stage is used to create glucose in the second stage."
            ],
            explanation: "These choices accurately summarize the core mechanism and stages of photosynthesis."
          }
        ]
      },
      {
        id: 303,
        title: "The Mystery of the Bronze Age Collapse",
        type: 'historical' as const,
        paragraphs: [
          "Towards the end of the 13th century BCE, the eastern Mediterranean experienced a sudden and violent transformation known as the Late Bronze Age Collapse. In a span of just a few decades, several major civilizations, including the Mycenaeans in Greece, the Hittites in Anatolia, and the New Kingdom Egyptians, either completely collapsed or were significantly weakened. [■] Palaces were burned, trade routes were abandoned, and literacy effectively vanished in many regions for centuries. [■]",
          "Scholars have long debated the causes of this widespread societal failure. One popular theory points to the arrival of the 'Sea Peoples,' a mysterious confederation of seaborne raiders who attacked coastal cities. [■] However, many modern historians argue that a 'systems collapse' occurred, driven by a combination of internal and external factors. This includes prolonged droughts, earthquakes, and the disruption of vital tin and copper trade routes needed for bronze production. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which civilizations were affected by the Late Bronze Age Collapse?",
            options: ["The Romans and Carthaginians", "The Mycenaeans and Hittites", "The Aztecs and Mayans", "The Persians and Macedonians"],
            correct: "The Mycenaeans and Hittites",
            explanation: "Paragraph 1 lists the Mycenaeans and Hittites as civilizations that collapsed or were weakened."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "protracted",
            question: "The word 'prolonged' (used in the sense of 'protracted') in paragraph 2 is closest in meaning to",
            options: ["severe", "unexpected", "extended", "local"],
            correct: "extended",
            explanation: "Prolonged means continuing for a long time, or extended."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the 'systems collapse' theory suggest?",
            options: [
              "A single massive volcanic eruption destroyed all cities.",
              "A series of interconnected failures led to total collapse.",
              "The civilizations decided to merge into a single empire.",
              "Internal civil wars were the only reason for the decline."
            ],
            correct: "A series of interconnected failures led to total collapse.",
            explanation: "A systems collapse implies multiple factors working together to cause a breakdown of the entire societal structure."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Late Bronze Age Collapse saw the rapid decline of major Mediterranean powers.",
              "The loss of literacy was a significant consequence of the societal breakdown.",
              "The Sea Peoples were likely from the northern European plains.",
              "Multiple factors, including trade disruption and climate change, likely caused the collapse.",
              "Bronze was replaced by iron immediately after the collapse started.",
              "The Hittite Empire was the first to recover after only ten years."
            ],
            correct: [
              "The Late Bronze Age Collapse saw the rapid decline of major Mediterranean powers.",
              "The loss of literacy was a significant consequence of the societal breakdown.",
              "Multiple factors, including trade disruption and climate change, likely caused the collapse."
            ],
            explanation: "These choices cover the event itself, a major consequence, and the likely complex causes."
          }
        ]
      },
      {
        id: 304,
        title: "Bioluminescence: Light in the Darkness",
        type: 'scientific' as const,
        paragraphs: [
          "Bioluminescence is the production and emission of light by a living organism. It is a form of chemiluminescence where a chemical reaction within the organism produces light energy. [■] This phenomenon is found in a wide variety of organisms, from bacteria and fungi to fish and insects like fireflies. [■] In the deep ocean, where sunlight cannot reach, bioluminescence is the primary source of light, and more than 75% of deep-sea animals are estimated to be bioluminescent. [■]",
          "The chemical reaction usually involves two unique substances: luciferin and luciferase. The enzyme luciferase acts as a catalyst, accelerating the oxidation of luciferin, which results in the release of light. [■] Organisms use this light for various purposes, including attracting mates, finding prey, and deterring predators. For example, the anglerfish uses a glowing lure to attract smaller fish, while some species of squid release a cloud of glowing ink to confuse attackers."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What are the two main chemicals involved in the bioluminescent reaction?",
            options: ["Chlorophyll and Carotene", "Luciferin and Luciferase", "Oxygen and Glucose", "ATP and NADPH"],
            correct: "Luciferin and Luciferase",
            explanation: "Paragraph 2 explicitly names luciferin and luciferase as the two unique substances involved."
          },
          {
            id: 2,
            type: 'purpose',
            paragraphIndex: 1,
            question: "Why does the author mention the anglerfish?",
            options: [
              "To provide an example of how bioluminescence is used for hunting",
              "To explain how deep-sea animals survive high pressure",
              "To argue that bioluminescence is only found in fish",
              "To describe a species that does not need luciferin"
            ],
            correct: "To provide an example of how bioluminescence is used for hunting",
            explanation: "The anglerfish is used as an example of an organism using light (a glowing lure) to find/attract prey."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 0,
            question: "It can be inferred from the passage that bioluminescence is particularly important in deep-sea environments because",
            options: [
              "The water is colder there, which helps the chemical reaction.",
              "Food is scarce and light is needed to see and attract it.",
              "External light from the sun is entirely absent.",
              "Deep-sea animals have larger eyes than land animals."
            ],
            correct: "External light from the sun is entirely absent.",
            explanation: "The passage notes that in the deep ocean, 'sunlight cannot reach,' making bioluminescence the primary light source."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Bioluminescence is a chemical process that allows organisms to produce light.",
              "It serves vital ecological functions such as camouflage and communication.",
              "Fireflies are the most efficient light producers in the animal kingdom.",
              "Luciferin and luciferase are the core components of the light-producing reaction.",
              "Most bioluminescent organisms are found in tropical rainforests.",
              "All bioluminescent light is blue or green in color."
            ],
            correct: [
              "Bioluminescence is a chemical process that allows organisms to produce light.",
              "It serves vital ecological functions such as camouflage and communication.",
              "Luciferin and luciferase are the core components of the light-producing reaction."
            ],
            explanation: "These choices summarize the definition, the chemical mechanism, and the biological purpose."
          }
        ]
      },
      {
        id: 305,
        title: "Plate Tectonics: The Dancing Continents",
        type: 'academic' as const,
        paragraphs: [
          "The theory of plate tectonics proposes that the Earth's lithosphere is divided into several large plates that glide over a semi-fluid layer called the asthenosphere. This movement is driven by mantle convection, where heat from the Earth's core causes molten rock to rise, spread, and sink, dragging the overlying plates along. [■] The interaction of these plates at their boundaries is responsible for most of Earth's seismic and volcanic activity. [■]",
          "There are three primary types of plate boundaries: divergent, convergent, and transform. At divergent boundaries, plates move apart, and new crust is created. [■] Convergent boundaries occur where plates move toward each other, often leading to subduction. [■] At transform boundaries, plates slide past each other horizontally."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is the primary force driving the movement of tectonic plates?",
            options: ["The Earth's rotation", "Mantle convection", "Ocean currents", "Magnetic reversals"],
            correct: "Mantle convection",
            explanation: "Paragraph 1 states that the movement is driven by mantle convection caused by heat from the core."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "subduction",
            question: "The term 'subduction' refers to a process where",
            options: [
              "Two plates move apart from each other",
              "One plate is forced beneath another",
              "New mountains are formed by volcanic eruptions",
              "The Earth's crust becomes thicker over time"
            ],
            correct: "One plate is forced beneath another",
            explanation: "Subduction is defined in the context of convergent boundaries where one plate is forced under another."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Plate tectonics explains the dynamic nature of Earth's surface.",
              "Heat-driven convection in the mantle is the engine of plate movement.",
              "Earthquakes primarily occur in the center of tectonic plates.",
              "Three distinct types of boundaries define how plates interact.",
              "Alfred Wegener was the first to discover the San Andreas Fault.",
              "The moon's gravity helps pull the continents apart."
            ],
            correct: [
              "Plate tectonics explains the dynamic nature of Earth's surface.",
              "Heat-driven convection in the mantle is the engine of plate movement.",
              "Three distinct types of boundaries define how plates interact."
            ],
            explanation: "These choices accurately summarize the theory, the mechanism, and the types of interactions."
          }
        ]
      },
      {
        id: 306,
        title: "The Harlem Renaissance",
        type: 'historical' as const,
        paragraphs: [
          "The Harlem Renaissance was an intellectual and cultural revival of African American music, dance, art, fashion, literature, theater, and politics centered in Harlem, Manhattan, New York City, spanning the 1920s and 1930s. [■] Known as the 'New Negro Movement' at the time, it marked a turning point in history where Black voices began to influence the broader American culture on a massive scale. [■]",
          "Writers like Langston Hughes and Zora Neale Hurston explored themes of identity, race, and the African American experience through poetry and prose. [■] Musicians like Duke Ellington and Louis Armstrong revolutionized jazz, making it a globally recognized art form. [■] The movement not only provided a platform for individual artistic expression but also laid the groundwork for the future Civil Rights Movement by challenging racial stereotypes and demanding social justice."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "Who were two prominent writers of the Harlem Renaissance?",
            options: ["Mark Twain and Ernest Hemingway", "Langston Hughes and Zora Neale Hurston", "F. Scott Fitzgerald and John Steinbeck", "Maya Angelou and Toni Morrison"],
            correct: "Langston Hughes and Zora Neale Hurston",
            explanation: "Paragraph 2 names Hughes and Hurston as writers exploring relevant themes."
          },
          {
            id: 2,
            type: 'purpose',
            paragraphIndex: 1,
            question: "The author mentions jazz musicians mainly to",
            options: [
              "Argue that music was more important than literature",
              "Highlight another artistic field that saw revolutionary growth",
              "Explain why jazz was banned in many parts of the country",
              "Discuss the economic impact of the recording industry"
            ],
            correct: "Highlight another artistic field that saw revolutionary growth",
            explanation: "The mention of jazz musicians follows the writers to show the breadth of the cultural revival."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 1,
            question: "What can be inferred about the impact of the Harlem Renaissance on the future of the United States?",
            options: [
              "It led to the immediate end of segregation in the 1920s.",
              "It provided cultural and intellectual roots for the Civil Rights Movement.",
              "It caused most African Americans to move to New York City.",
              "It resulted in the exclusive use of jazz in all American theaters."
            ],
            correct: "It provided cultural and intellectual roots for the Civil Rights Movement.",
            explanation: "The passage states it 'laid the groundwork for the future Civil Rights Movement'."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Harlem Renaissance was a major cultural and artistic explosion in the 1920s.",
              "It redefined how African Americans were perceived in American society.",
              "Economic prosperity in Harlem was the only cause of the movement.",
              "The movement spanned literature, music, and social activism.",
              "European artists were the main financiers of the renaissance.",
              "The movement ended abruptly due to the start of World War II."
            ],
            correct: [
              "The Harlem Renaissance was a major cultural and artistic explosion in the 1920s.",
              "It redefined how African Americans were perceived in American society.",
              "The movement spanned literature, music, and social activism."
            ],
            explanation: "These choices summarize the nature, significance, and scope of the movement."
          }
        ]
      },
      {
        id: 307,
        title: "The Industrial Revolution and the Steam Engine",
        type: 'historical' as const,
        paragraphs: [
          "The Industrial Revolution, which began in Britain in the late 18th century, was powered by a series of technological innovations. Chief among these was the development of the steam engine. [■] Originally used to pump water out of coal mines, the engine was significantly improved by James Watt, whose modifications made it efficient enough for wider industrial use. [■]",
          "The steam engine revolutionized transportation and manufacturing. It provided the power for massive textile mills, enabling mass production of goods at a fraction of the cost of traditional hand-weaving. [■] Furthermore, the invention of the steam locomotive and the steamship allowed for faster and more reliable transport of both raw materials and finished products across vast distances, fundamentally changing global trade patterns. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who is credited with making the steam engine efficient for broad industrial use?",
            options: ["Isaac Newton", "James Watt", "Thomas Edison", "Eli Whitney"],
            correct: "James Watt",
            explanation: "Paragraph 1 credits James Watt with modifications that enabled wider industrial use."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a major economic consequence of the steam engine's application in manufacturing?",
            options: [
              "The cost of producing goods increased significantly.",
              "Gilds became more powerful than ever before.",
              "Goods could be produced more cheaply and in larger quantities.",
              "Agriculture remained the primary source of national wealth."
            ],
            correct: "Goods could be produced more cheaply and in larger quantities.",
            explanation: "Mass production in textile mills 'enabled mass production of goods at a fraction of the cost'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The steam engine was a core driver of the Industrial Revolution.",
              "James Watt's innovations expanded the engine's reach beyond mining.",
              "Industrialization led to a decline in urban populations.",
              "Steam technology transformed both manufacturing and global transportation.",
              "Coal mines were the only industry to benefit from steam power.",
              "The steamship was invented before the industrial engine was perfected."
            ],
            correct: [
              "The steam engine was a core driver of the Industrial Revolution.",
              "James Watt's innovations expanded the engine's reach beyond mining.",
              "Steam technology transformed both manufacturing and global transportation."
            ],
            explanation: "These choices capture the role of the engine, its developer, and its broad impacts."
          }
        ]
      },
      {
        id: 308,
        title: "Coral Reefs: Rainforests of the Sea",
        type: 'scientific' as const,
        paragraphs: [
          "Coral reefs are diverse underwater ecosystems held together by calcium carbonate structures secreted by corals. Often called the 'rainforests of the sea,' they occupy less than 0.1% of the world's ocean surface yet provide a home for at least 25% of all marine species. [■] This incredible biodiversity makes them essential to the health of the global ocean. [■]",
          "Corals exist in a symbiotic relationship with tiny algae called zooxanthellae. The algae live within the coral's tissues, providing food through photosynthesis and giving the corals their vibrant colors. In return, the coral provides a protected environment and the compounds necessary for photosynthesis. [■] However, rising ocean temperatures can disrupt this relationship, leading to coral bleaching, where the coral expels the algae and becomes white and vulnerable to disease. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What provides corals with food and color?",
            options: ["Small fish", "Zooxanthellae (algae)", "Calcium carbonate", "Ocean currents"],
            correct: "Zooxanthellae (algae)",
            explanation: "Paragraph 2 states the algae live in the coral tissues, providing food and color."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 0,
            highlightText: "secreted",
            question: "The word 'secreted' in paragraph 1 is closest in meaning to",
            options: ["hidden", "produced", "consumed", "destroyed"],
            correct: "produced",
            explanation: "In this biological context, secreted means produced and discharged."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the primary cause of coral bleaching mentioned in the passage?",
            options: [
              "An overabundance of nutrients in the water",
              "Increased predation by tropical fish",
              "Elevated ocean temperatures",
              "The buildup of sediment on the reef"
            ],
            correct: "Elevated ocean temperatures",
            explanation: "The passage notes that 'rising ocean temperatures' lead to coral bleaching."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Coral reefs are highly diverse ecosystems built by coral animals.",
              "A symbiotic relationship between corals and algae is fundamental to the reef.",
              "Coral reefs are becoming much deeper as sea levels rise.",
              "Environmental stressors like temperature changes threaten reef survival.",
              "Tourism is the main reason why coral reefs are protected today.",
              "Artificial reefs are more biodiverse than natural ones."
            ],
            correct: [
              "Coral reefs are highly diverse ecosystems built by coral animals.",
              "A symbiotic relationship between corals and algae is fundamental to the reef.",
              "Environmental stressors like temperature changes threaten reef survival."
            ],
            explanation: "These choices cover the definition, the biological mechanism, and the main threat mentioned."
          }
        ]
      },
      {
        id: 309,
        title: "The Classic Maya Civilization",
        type: 'historical' as const,
        paragraphs: [
          "The Classic Maya civilization, which flourished in the jungles of Central America from 250 to 900 CE, is renowned for its sophisticated understanding of astronomy, mathematics, and writing. [■] Unlike other ancient empires, the Maya were not a single unified nation but rather a network of independent city-states, such as Tikal and Palenque, that shared a common culture. [■]",
          "The Maya developed a complex writing system consisting of hundreds of hieroglyphs, which they used to record historical events and religious rituals. [■] Their mathematical system included the concept of zero, an achievement found in only a few other civilizations. [■] These intellectual accomplishments allowed them to create highly accurate calendars that tracked the orbital periods of Earth, Venus, and Mars with remarkable precision."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What unique mathematical concept did the Maya develop?",
            options: ["The Pythagorean theorem", "The concept of zero", "Calculus", "Negative numbers"],
            correct: "The concept of zero",
            explanation: "Paragraph 2 states their system 'included the concept of zero'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "How was the Maya political structure different from typical empires?",
            options: [
              "It was ruled by a single immortal king.",
              "It consisted of independent city-states rather than a unified nation.",
              "There were no rulers or social hierarchies.",
              "The entire population lived in one giant city."
            ],
            correct: "It consisted of independent city-states rather than a unified nation.",
            explanation: "Paragraph 1 explains they were a 'network of independent city-states'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Classic Maya achieved high levels of intellectual and cultural success.",
              "A decentralized network of city-states characterized Maya politics.",
              "Maya calendars were the most accurate in the world at the time.",
              "The Maya were mainly known for their naval superiority.",
              "The civilization collapsed because they lost the ability to write.",
              "Agricultural innovations were the only reason for Maya survival."
            ],
            correct: [
              "The Classic Maya achieved high levels of intellectual and cultural success.",
              "A decentralized network of city-states characterized Maya politics.",
              "Maya calendars were the most accurate in the world at the time."
            ],
            explanation: "These choices capture the culture, the political structure, and a key scientific achievement."
          }
        ]
      },
      {
        id: 310,
        title: "Quantum Physics: A New Reality",
        type: 'scientific' as const,
        paragraphs: [
          "Quantum physics is the study of matter and energy at the most fundamental level. It aims to uncover the properties and behaviors of the very building blocks of nature. [■] While classical physics works well for explaining human-scale objects, it fails to explain phenomena at the atomic and subatomic scale. [■] At this level, particles do not behave like tiny billiard balls but rather exhibit wave-particle duality. [■]",
          "One of the most counterintuitive aspects of quantum mechanics is superposition, where a particle can exist in multiple states simultaneously until it is observed. [■] Another is entanglement, where particles become linked such that the state of one instantly affects the other, regardless of the distance between them. These principles, though seemingly bizarre, have been experimentally verified and form the basis of modern technologies like transistors and lasers."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "How do particles behave at the subatomic level according to quantum physics?",
            options: [
              "Exactly like macroscopic objects",
              "They exhibit wave-particle duality",
              "They stay completely stationary at all times",
              "They only follow the laws of gravity"
            ],
            correct: "They exhibit wave-particle duality",
            explanation: "Paragraph 1 states that at this level, particles 'exhibit wave-particle duality'."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "simultaneously",
            question: "The word 'simultaneously' in paragraph 2 is closest in meaning to",
            options: ["at the same time", "sequentially", "eventually", "rapidly"],
            correct: "at the same time",
            explanation: "Simultaneously means happening or existing at the same time."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the passage suggest about the practical applications of quantum physics?",
            options: [
              "It is purely theoretical and has no real-world use.",
              "It is essential for the function of modern electronic devices.",
              "It will only be useful in the very distant future.",
              "It is primarily used for deep-sea exploration."
            ],
            correct: "It is essential for the function of modern electronic devices.",
            explanation: "The passage states that quantum principles 'form the basis of modern technologies like transistors and lasers'."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Quantum physics describes the behavior of subatomic particles.",
              "Concepts like superposition and entanglement challenge classical intuition.",
              "Quantum principles are the foundation for many modern technologies.",
              "Einstein was the only scientist to truly understand entanglement.",
              "The theory proves that the universe is entirely predictable.",
              "Classical physics is becoming obsolete for large-scale objects."
            ],
            correct: [
              "Quantum physics describes the behavior of subatomic particles.",
              "Concepts like superposition and entanglement challenge classical intuition.",
              "Quantum principles are the foundation for many modern technologies."
            ],
            explanation: "These choices summarize the domain, the unique concepts, and the practical relevance of quantum physics."
          }
        ]
      },
      {
        id: 311,
        title: "The Silk Road: Connecting East and West",
        type: 'historical' as const,
        paragraphs: [
          "The Silk Road was a vast network of trade routes connecting East and West, stretching from China across Central Asia to the Mediterranean. [■] Established during the Han Dynasty, it was not merely a path for trading silk, although that was a major commodity, but a conduit for the exchange of ideas, technologies, and religions. [■] Buddhism, for instance, spread from India to China via these routes, while papermaking and gunpowder traveled from China to the Middle East and Europe. [■]",
          "Travel along the Silk Road was perilous, as merchants faced harsh deserts, high mountain passes, and bandits. [■] Caravansaries, or fortified inns, were built along the routes to provide rest and protection for traders and their animals. [■] These centers often grew into vibrant cities where multiple cultures mingled, creating a cosmopolitan atmosphere that influenced art and architecture for centuries."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was a major technology that spread westward along the Silk Road?",
            options: ["Buddhism", "Silk weaving only", "Papermaking", "The steam engine"],
            correct: "Papermaking",
            explanation: "The passage list papermaking and gunpowder as technologies that traveled from China to the Middle East and Europe."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What role did caravansaries play in Silk Road trade?",
            options: [
              "They were the main producers of silk.",
              "They offered necessary infrastructure for safe long-distance travel.",
              "They were used as military outposts for the Chinese army.",
              "They were the only places where local taxes were collected."
            ],
            correct: "They offered necessary infrastructure for safe long-distance travel.",
            explanation: "They provided 'rest and protection' for traders, making travel through harsh conditions more feasible."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Silk Road facilitated both material and cultural exchange between regions.",
              "Technological advancements like papermaking were shared via trade routes.",
              "Harsh geographical and safety challenges required support structures like caravansaries.",
              "China was the only region to benefit from Silk Road trade.",
              "The routes were primarily used for the transport of slaves.",
              "The Silk Road completely replaced ocean-based trade for 500 years."
            ],
            correct: [
              "The Silk Road facilitated both material and cultural exchange between regions.",
              "Technological advancements like papermaking were shared via trade routes.",
              "Harsh geographical and safety challenges required support structures like caravansaries."
            ],
            explanation: "These choices capture the nature of the exchange, the specific items (tech), and the logistics of the trade."
          }
        ]
      },
      {
        id: 312,
        title: "The Scientific Method: A Foundation for Inquiry",
        type: 'academic' as const,
        paragraphs: [
          "The scientific method is a systematic process that researchers use to explore observations, answer questions, and test hypotheses. [■] Emerging during the 17th-century Scientific Revolution, it shifted the focus of inquiry from a reliance on ancient authorities, like Aristotle, to empirical evidence and logical reasoning. [■] Figures like Francis Bacon and Galileo Galilei championed the idea that knowledge must be built through direct observation and repeatable experimentation. [■]",
          "The process typically follows a logical sequence: observation, hypothesis formation, experimentation, and analysis. [■] A key feature of the scientific method is the requirement for falsifiability; a hypothesis must be formulated in a way that it can be proven wrong. [■] If experimental results contradict the hypothesis, it is refined or rejected. This iterative cycle ensures that scientific knowledge is self-correcting and perpetually evolving. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which figures are credited with championing the scientific method's focus on observation?",
            options: ["Aristotle and Plato", "Francis Bacon and Galileo Galilei", "Isaac Newton and Albert Einstein", "Charles Darwin and Gregor Mendel"],
            correct: "Francis Bacon and Galileo Galilei",
            explanation: "Paragraph 1 mention Bacon and Galileo as champions of knowledge built through direct observation."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "falsifiability",
            question: "The term 'falsifiability' in paragraph 2 refers to the requirement that",
            options: [
              "A theory must be proven true in all possible cases.",
              "A hypothesis must be capable of being proven wrong.",
              "All scientific data must be recorded in secret.",
              "Only famous scientists can propose new ideas."
            ],
            correct: "A hypothesis must be capable of being proven wrong.",
            explanation: "Paragraph 2 states that falsifiability means a hypothesis 'must be formulated in a way that it can be proven wrong'."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 0,
            question: "What was the major shift in scientific inquiry during the 17th century?",
            options: [
              "A move away from mathematics and towards storytelling",
              "A shift from relying on ancient authorities to using empirical evidence",
              "The total abandonment of experimentation in favor of philosophy",
              "A focus on inventing new languages to describe nature"
            ],
            correct: "A shift from relying on ancient authorities to using empirical evidence",
            explanation: "The passage notes it shifted from 'reliance on ancient authorities' to 'empirical evidence'."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The scientific method uses a logical, evidence-based approach to inquiry.",
              "Falsifiability is a critical requirement for any scientific hypothesis.",
              "The method's iterative nature allows for self-correcting knowledge.",
              "Aristotle was the first to formalize the modern scientific method.",
              "Hypotheses that are proven wrong are kept to confuse future scientists.",
              "The method is only used in chemistry and physics labs."
            ],
            correct: [
              "The scientific method uses a logical, evidence-based approach to inquiry.",
              "Falsifiability is a critical requirement for any scientific hypothesis.",
              "The method's iterative nature allows for self-correcting knowledge."
            ],
            explanation: "These choices reflect the core principles and the evolutionary nature of the scientific method."
          }
        ]
      },
      {
        id: 313,
        title: "The Great Oxidation Event",
        type: 'scientific' as const,
        paragraphs: [
          "Approximately 2.4 billion years ago, the Earth's atmosphere underwent a dramatic change known as the Great Oxidation Event (GOE). Before this time, the atmosphere was mostly composed of methane and carbon dioxide, with very little free oxygen. [■] The rise of cyanobacteria, which produced oxygen through photosynthesis, eventually led to a massive buildup of the gas in the oceans and later the atmosphere. [■]",
          "This event was a turning point for life on Earth. While it was catastrophic for the anaerobic organisms that thrived in the previously oxygen-free environment, it cleared the path for the evolution of more complex, aerobic life forms. [■] The GOE also triggered a long period of global cooling, potentially leading to the Huronian glaciation, one of the most severe ice ages in history. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What organisms are primarily responsible for the Great Oxidation Event?",
            options: ["Dinosaurs", "Cyanobacteria", "Fungi", "Mammals"],
            correct: "Cyanobacteria",
            explanation: "Paragraph 1 states that the rise of cyanobacteria produced the oxygen that led to the buildup."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the immediate effect of the GOE on existing life forms?",
            options: [
              "It helped all organisms grow faster.",
              "It was deadly for anaerobic organisms.",
              "It had no effect on the oceans.",
              "It only affected organisms living on land."
            ],
            correct: "It was deadly for anaerobic organisms.",
            explanation: "The passage notes it was 'catastrophic for the anaerobic organisms' that couldn't handle oxygen."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The GOE transformed Earth's atmosphere by introducing free oxygen.",
              "Cyanobacteria played a crucial role in this transformation via photosynthesis.",
              "The event led to a mass extinction of anaerobic life.",
              "Volcanic activity was the main source of oxygen during the GOE.",
              "The Earth's orbit changed significantly during this era.",
              "Methane became the dominant gas in the atmosphere after the GOE."
            ],
            correct: [
              "The GOE transformed Earth's atmosphere by introducing free oxygen.",
              "Cyanobacteria played a crucial role in this transformation via photosynthesis.",
              "The event led to a mass extinction of anaerobic life."
            ],
            explanation: "These choices cover the definition, the cause, and the biological impact of the GOE."
          }
        ]
      },
      {
        id: 314,
        title: "The Renaissance and the Printing Press",
        type: 'historical' as const,
        paragraphs: [
          "The Renaissance, a period of cultural and intellectual rebirth in Europe, was significantly accelerated by Johannes Gutenberg's invention of the movable-type printing press in the mid-15th century. [■] Before the press, books were hand-copied, a laborious and expensive process that limited literacy to the elite. [■] The mass production of books made knowledge accessible to a much wider audience, fostering the spread of humanist ideas and scientific discoveries. [■]",
          "The printing press also played a vital role in the Protestant Reformation by allowing the Bible and religious pamphlets to be distributed in vernacular languages. [■] This challenged the authority of the Catholic Church and encouraged individual interpretation of religious texts. [■] The resulting increase in literacy rates laid the foundation for the modern educational systems we see today."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "How were books produced before the invention of the printing press?",
            options: ["They were printed using woodblocks.", "They were hand-copied.", "They were created using early typewriters.", "They were not allowed to exist."],
            correct: "They were hand-copied.",
            explanation: "Paragraph 1 states that before the press, 'books were hand-copied'."
          },
          {
            id: 2,
            type: 'purpose',
            paragraphIndex: 1,
            question: "Why does the author mention 'vernacular languages'?",
            options: [
              "To explain why the printing press was so expensive",
              "To show how the press allowed common people to read religious texts",
              "To argue that Latin was the only language used in the Renaissance",
              "To describe a new type of ink developed by Gutenberg"
            ],
            correct: "To show how the press allowed common people to read religious texts",
            explanation: "Distributing texts in 'vernacular languages' (the languages spoken by people) allowed for individual interpretation and wider access."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The printing press was a catalyst for the spread of Renaissance ideas.",
              "It democratized knowledge by making books affordable and mass-produced.",
              "The press was instrumental in the religious shifts of the Reformation.",
              "Gutenberg was primarily interested in printing maps of Asia.",
              "Most Renaissance scholars preferred hand-copied books for their beauty.",
              "The printing press was banned in most of Europe for a century."
            ],
            correct: [
              "The printing press was a catalyst for the spread of Renaissance ideas.",
              "It democratized knowledge by making books affordable and mass-produced.",
              "The press was instrumental in the religious shifts of the Reformation."
            ],
            explanation: "These choices reflect the cultural, social, and religious impacts of the invention."
          }
        ]
      },
      {
        id: 315,
        title: "The Physics of Black Holes",
        type: 'scientific' as const,
        paragraphs: [
          "A black hole is a region of spacetime where gravity is so strong that nothing, including light, can escape from it. [■] The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. [■] The boundary of the region from which no escape is possible is called the event horizon. [■] This is often referred to as a 'point of no return.' [■]",
          "Black holes are formed when massive stars collapse at the end of their life cycles. After a star has exhausted its nuclear fuel, it can no longer support its own weight against gravity, leading to a catastrophic collapse into a singularity—a point of infinite density. [■] While they cannot be seen directly, astronomers detect them by observing their effects on nearby matter, such as accretion disks of glowing gas and the orbital patterns of distant stars."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is the name of the boundary where light can no longer escape a black hole?",
            options: ["The Singularity", "The Event Horizon", "The Accretion Disk", "The Schwarzschild Radius"],
            correct: "The Event Horizon",
            explanation: "Paragraph 1 defines the event horizon as the 'boundary of the region from which no escape is possible'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How do astronomers know black holes exist if they are invisible?",
            options: [
              "They use giant flashlights to see them in the dark.",
              "They observe the gravity's effect on surrounding matter.",
              "They listen to the sounds black holes make in space.",
              "They wait for them to explode and then study the remains."
            ],
            correct: "They observe the gravity's effect on surrounding matter.",
            explanation: "The passage notes astronomers detect them by observing 'effects on nearby matter'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Black holes are regions of extreme gravity and warped spacetime.",
              "The death of massive stars is the primary cause of black hole formation.",
              "Scientists use indirect evidence like accretion disks to study them.",
              "Black holes eventually evaporate into pure energy after a few years.",
              "Most black holes are found at the center of small asteroids.",
              "Light can orbit a black hole without ever falling in."
            ],
            correct: [
              "Black holes are regions of extreme gravity and warped spacetime.",
              "The death of massive stars is the primary cause of black hole formation.",
              "Scientists use indirect evidence like accretion disks to study them."
            ],
            explanation: "These choices cover the physical definition, the origin, and the method of observation."
          }
        ]
      },
      {
        id: 316,
        title: "The Great Barrier Reef and Climate Change",
        type: 'scientific' as const,
        paragraphs: [
          "The Great Barrier Reef, the world's largest coral reef system, is currently facing its most significant threat: anthropogenic climate change. [■] This global phenomenon has led to rising ocean temperatures, which trigger widespread coral bleaching. [■] When corals are stressed by heat, they expel the colorful symbiotic algae that provide them with food, leaving the coral skeletal white and vulnerable to starvation and disease. [■]",
          "In addition to warming waters, ocean acidification—the absorption of carbon dioxide by seawater—hinders the ability of corals to build their calcium carbonate structures. [■] This weakening of the reef's foundation makes it more susceptible to damage from powerful storms and erosion. [■] Conservation efforts are underway to protect the reef, but scientists emphasize that significant reduction in global carbon emissions is the only long-term solution to ensure its survival."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What is ocean acidification primarily caused by?",
            options: ["Oil spills", "Absorption of carbon dioxide by seawater", "Plastic pollution", "Melting glaciers"],
            correct: "Absorption of carbon dioxide by seawater",
            explanation: "Paragraph 2 defines ocean acidification as the 'absorption of carbon dioxide by seawater'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What is the relationship between coral bleaching and symbiotic algae?",
            options: [
              "Bleaching occurs when the algae grow too fast.",
              "Corals need the algae for nutrition and health.",
              "The algae are harmful to the coral's survival.",
              "Algae only appear on corals after they have bleached."
            ],
            correct: "Corals need the algae for nutrition and health.",
            explanation: "The passage states the algae 'provide them with food' and their expulsion leads to 'starvation and disease'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Climate change is the primary driver of the Great Barrier Reef's decline.",
              "Rising temperatures cause mass bleaching by disrupting coral symbiosis.",
              "Ocean acidification prevents corals from building strong skeletal structures.",
              "Tourists are the main cause of physical damage to the reef.",
              "New species of coral are evolving to withstand boiling water.",
              "The reef is actually growing larger due to increased CO2."
            ],
            correct: [
              "Climate change is the primary driver of the Great Barrier Reef's decline.",
              "Rising temperatures cause mass bleaching by disrupting coral symbiosis.",
              "Ocean acidification prevents corals from building strong skeletal structures."
            ],
            explanation: "These choices accurately reflect the main threats discussed in the text."
          }
        ]
      },
      {
        id: 317,
        title: "The French Revolution and the Fall of the Bastille",
        type: 'historical' as const,
        paragraphs: [
          "The French Revolution was a period of far-reaching social and political upheaval in France that began in 1789. [■] One of the most iconic events of this period was the storming of the Bastille, a medieval fortress and political prison in Paris. [■] For the people of Paris, the Bastille was a symbol of the absolute monarchy's tyranny and the arbitrary use of power. [■]",
          "On July 14, 1789, a mob of Parisian revolutionaries attacked the Bastille, seeking gunpowder and weapons to defend themselves against the royal army. [■] The fall of the fortress was a symbolic victory for the revolutionary movement, demonstrating that the people were no longer afraid to challenge the King's authority. [■] This event is still celebrated today as Bastille Day, marking the birth of modern French democracy."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What did the Bastille symbolize to the people of Paris?",
            options: ["Prosperity and wealth", "The King's absolute power and tyranny", "A center for religious learning", "A place for public celebration"],
            correct: "The King's absolute power and tyranny",
            explanation: "Paragraph 1 states it was a symbol of 'the absolute monarchy's tyranny'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why was the fall of the Bastille considered a 'symbolic victory'?",
            options: [
              "It was the largest military victory in French history.",
              "It showed that the people could unite and challenge royal authority.",
              "It provided enough gold to pay off France's national debt.",
              "It marked the end of all fighting in the revolution."
            ],
            correct: "It showed that the people could unite and challenge royal authority.",
            explanation: "The passage notes it demonstrated that 'the people were no longer afraid to challenge the King's authority'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The storming of the Bastille was a pivotal moment in the French Revolution.",
              "The fortress represented the oppressive nature of the French monarchy.",
              "The event signaled a shift in power from the King to the people.",
              "Louis XVI was captured inside the Bastille during the attack.",
              "The revolutionaries used the Bastille as their main headquarters for ten years.",
              "Most participants in the storming were wealthy aristocrats."
            ],
            correct: [
              "The storming of the Bastille was a pivotal moment in the French Revolution.",
              "The fortress represented the oppressive nature of the French monarchy.",
              "The event signaled a shift in power from the King to the people."
            ],
            explanation: "These choices capture the significance, the symbolism, and the political impact of the event."
          }
        ]
      },
      {
        id: 318,
        title: "The Cognitive Revolution and Human Language",
        type: 'academic' as const,
        paragraphs: [
          "Approximately 70,000 years ago, Homo sapiens underwent an intellectual transformation known as the Cognitive Revolution. [■] This period was marked by an explosion in creative expression, complex tool-making, and most significantly, the development of sophisticated language. [■] Unlike the communication systems of other animals, human language is capable of communicating abstract concepts and hypothetical scenarios. [■]",
          "The ability to discuss things that do not exist in the physical world—myths, legends, and social constructs—allowed humans to cooperate in much larger groups than ever before. [■] This 'fictive language' enabled the creation of shared beliefs and common identities, which formed the basis for the development of tribes, nations, and civilizations. [■] This unique cognitive flexibility is what many scientists believe allowed Homo sapiens to eventually outcompete other human species like Neanderthals."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is considered the most significant development of the Cognitive Revolution?",
            options: ["The invention of fire", "Sophisticated language", "Agriculture", "Wheel making"],
            correct: "Sophisticated language",
            explanation: "Paragraph 1 states language development was 'most significantly' part of the revolution."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "fictive",
            question: "The term 'fictive language' refers to the ability to",
            options: [
              "Describe only what is currently happening",
              "Discuss things that do not physically exist",
              "Communicate using only hand signals",
              "Mimic the sounds of other animals"
            ],
            correct: "Discuss things that do not physically exist",
            explanation: "Paragraph 2 links fictive language to discussing 'things that do not exist' like myths and legends."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Cognitive Revolution gave humans unique intellectual advantages.",
              "Sophisticated language allowed for the sharing of abstract ideas.",
              "Shared beliefs enabled large-scale human cooperation.",
              "Neanderthals were the first to develop written language.",
              "Humans lost their physical strength as they became more intelligent.",
              "Cave paintings were the only form of communication during this period."
            ],
            correct: [
              "The Cognitive Revolution gave humans unique intellectual advantages.",
              "Sophisticated language allowed for the sharing of abstract ideas.",
              "Shared beliefs enabled large-scale human cooperation."
            ],
            explanation: "These choices summarize the revolution, the mechanism (language), and the social outcome."
          }
        ]
      },
      {
        id: 319,
        title: "The Discovery of Penicillin",
        type: 'historical' as const,
        paragraphs: [
          "The discovery of penicillin by Alexander Fleming in 1928 marked a turning point in medical history. [■] Returning to his lab after a vacation, Fleming noticed that a mold called Penicillium notatum had contaminated one of his petri dishes. [■] Intrigued, he observed that the bacteria surrounding the mold had been destroyed, while bacteria elsewhere in the dish remained healthy. [■]",
          "While Fleming identified the substance, it took over a decade for researchers Howard Florey and Ernst Chain to refine and mass-produce it. [■] During World War II, penicillin proved to be a lifesaver, treating infected wounds and significantly reducing death rates among soldiers. [■] This 'miracle drug' ushered in the era of antibiotics, fundamentally changing how humanity treats infectious diseases."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who is credited with the initial discovery of penicillin?",
            options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Albert Einstein"],
            correct: "Alexander Fleming",
            explanation: "Paragraph 1 explicitly credits Fleming with the discovery in 1928."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the role of Florey and Chain in the history of penicillin?",
            options: [
              "They were the first to see the mold in the petri dish.",
              "They argued that penicillin should not be used on humans.",
              "They were responsible for its mass production and refinement.",
              "They proved that penicillin only worked on animals."
            ],
            correct: "They were responsible for its mass production and refinement.",
            explanation: "Paragraph 2 states it took them a decade to 'refine and mass-produce it'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Fleming's accidental observation led to the discovery of penicillin.",
              "Penicillin's mass production was essential for its widespread medical use.",
              "The drug revolutionized the treatment of infectious diseases with antibiotics.",
              "Fleming spent 20 years intentionally breeding the specific mold.",
              "Penicillin was primarily used to treat the common cold.",
              "The discovery led to a worldwide ban on traditional medicine."
            ],
            correct: [
              "Fleming's accidental observation led to the discovery of penicillin.",
              "Penicillin's mass production was essential for its widespread medical use.",
              "The drug revolutionized the treatment of infectious diseases with antibiotics."
            ],
            explanation: "These choices cover the discovery, the development, and the overall impact."
          }
        ]
      },
      {
        id: 320,
        title: "The Evolution of Internet Communication",
        type: 'academic' as const,
        paragraphs: [
          "The internet has undergone a monumental shift in how it facilitates communication since its inception. [■] Initially a text-based medium used primarily by researchers and academics, the early internet relied heavily on simple emails and BBS (Bulletin Board Systems). [■] With the advent of the World Wide Web in the 1990s, communication became more visual and accessible to the general public. [■]",
          "The 21st century saw the rise of Web 2.0, characterized by user-generated content and social media platforms. [■] These technologies transformed the internet from a passive information source into an interactive social space. [■] Furthermore, the proliferation of high-speed mobile internet has made constant connectivity the norm, fundamentally altering social interactions and the way information is shared globally."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What were the primary communication tools of the early internet?",
            options: ["Social media and video calls", "Simple emails and BBS", "Virtual reality and 3D printing", "Mobile apps and texting"],
            correct: "Simple emails and BBS",
            explanation: "Paragraph 1 states early internet 'relied heavily on simple emails and BBS'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did Web 2.0 change the nature of the internet?",
            options: [
              "It made the internet much slower than before.",
              "It turned users into active content creators.",
              "It restricted the internet to university use only.",
              "It removed the need for any high-speed connections."
            ],
            correct: "It turned users into active content creators.",
            explanation: "Web 2.0 is characterized by 'user-generated content,' making the internet an 'interactive social space'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Internet communication has evolved from simple text to interactive multimedia.",
              "Web 2.0 and social media prioritized user participation and interactivity.",
              "The spread of mobile technology has created a state of constant connectivity.",
              "Most people still prefer using BBS systems for daily work.",
              "Search engines were the only reason for the internet's popularity.",
              "Traditional letter writing has completely disappeared worldwide."
            ],
            correct: [
              "Internet communication has evolved from simple text to interactive multimedia.",
              "Web 2.0 and social media prioritized user participation and interactivity.",
              "The spread of mobile technology has created a state of constant connectivity."
            ],
            explanation: "These choices capture the evolution, the shift to interactivity, and the impact of mobility."
          }
        ]
      },
      {
        id: 321,
        title: "The Greenhouse Effect: Earth's Natural Blanket",
        type: 'scientific' as const,
        paragraphs: [
          "The greenhouse effect is a natural process that warms the Earth's surface. [■] When the sun's energy reaches the Earth's atmosphere, some of it is reflected back into space and the rest is absorbed and re-radiated by greenhouse gases. [■] These gases, which include carbon dioxide, methane, and water vapor, act like the glass walls of a greenhouse, trapping heat and keeping the planet warm enough to sustain life. [■]",
          "While the natural greenhouse effect is essential for survival, human activities have significantly intensified this process. [■] The burning of fossil fuels and large-scale deforestation have increased the concentration of greenhouse gases in the atmosphere, leading to global warming. [■] This enhanced effect is causing widespread environmental changes, such as melting polar ice caps and shifting climate zones."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is an examples of greenhouse gases mentioned in the passage?",
            options: ["Nitrogen and Oxygen", "Carbon dioxide and Methane", "Helium and Neon", "Argon and Xenon"],
            correct: "Carbon dioxide and Methane",
            explanation: "Paragraph 1 lists carbon dioxide, methane, and water vapor as greenhouse gases."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the primary difference between the natural greenhouse effect and the human-enhanced one?",
            options: [
              "The natural one is cooling the Earth while the human one is warming it.",
              "The natural one maintains life, while the enhanced one causes excessive warming.",
              "There is no difference between the two processes.",
              "The natural one only occurs in the summer."
            ],
            correct: "The natural one maintains life, while the enhanced one causes excessive warming.",
            explanation: "The passage notes the natural effect is 'essential for survival' but human intensification leads to 'global warming'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The greenhouse effect is a vital natural mechanism for trapping heat.",
              "Human industry has increased the concentration of heat-trapping gases.",
              "Enhanced warming is resulting in significant global environmental shifts.",
              "The ozone layer is the main cause of the greenhouse effect.",
              "Planting more trees would actually make the effect worse.",
              "The Earth would be warmer without an atmosphere at all."
            ],
            correct: [
              "The greenhouse effect is a vital natural mechanism for trapping heat.",
              "Human industry has increased the concentration of heat-trapping gases.",
              "Enhanced warming is resulting in significant global environmental shifts."
            ],
            explanation: "These choices cover the natural function, the human influence, and the resulting climate impact."
          }
        ]
      },
      {
        id: 322,
        title: "The Viking Age and Their Exploration",
        type: 'historical' as const,
        paragraphs: [
          "The Viking Age, spanning roughly from the late 8th to the 11th century, was a time of unprecedented maritime exploration and expansion by Norse seafaring people from Scandinavia. [■] Renowned for their advanced shipbuilding technology, the Vikings constructed longships that were both fast and capable of navigating both open oceans and shallow rivers. [■] This allowed them to raid, trade, and settle across a vast territory, from the British Isles to the shores of North America. [■]",
          "Viking exploration was not just about raiding; it was also driven by a search for new land and trading opportunities. [■] They established colonies in Iceland and Greenland, and archaeological evidence at L'Anse aux Meadows confirms their arrival in North America centuries before Columbus. [■] Their extensive trade networks connected the Viking world with far-off regions like the Byzantine Empire and the Middle East, facilitating a significant cultural exchange."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What technology allowed the Vikings to navigate both oceans and shallow rivers?",
            options: ["The magnetic compass", "The longship", "Steam propulsion", "Iron armor"],
            correct: "The longship",
            explanation: "Paragraph 1 credits their 'advanced shipbuilding technology' and specifically the longship."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the discovery at L'Anse aux Meadows prove?",
            options: [
              "The Vikings were the first to build stone cities in Europe.",
              "The Vikings reached North America long before 1492.",
              "The Vikings traded exclusively with Native Americans.",
              "The Vikings were primarily farmers, not explorers."
            ],
            correct: "The Vikings reached North America long before 1492.",
            explanation: "The passage notes evidence there confirms their arrival 'centuries before Columbus'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Viking Age was marked by extensive maritime exploration and trade.",
              "Superior shipbuilding allowed Vikings to travel vast distances and varied waters.",
              "Norse explorations led to settlements as far away as North America.",
              "Vikings were the only group to use iron in the 9th century.",
              "The Viking Age ended because they ran out of wood for ships.",
              "Vikings preferred to travel by land whenever possible."
            ],
            correct: [
              "The Viking Age was marked by extensive maritime exploration and trade.",
              "Superior shipbuilding allowed Vikings to travel vast distances and varied waters.",
              "Norse explorations led to settlements as far away as North America."
            ],
            explanation: "These choices summarize the activity, the key technology, and the geographic reach of the Vikings."
          }
        ]
      },
      {
        id: 323,
        title: "Charles Darwin and the Theory of Natural Selection",
        type: 'academic' as const,
        paragraphs: [
          "In 1859, Charles Darwin published 'On the Origin of Species,' a work that fundamentally altered our understanding of biology. [■] Darwin proposed the theory of evolution by natural selection, suggesting that organisms with traits better suited to their environment are more likely to survive and reproduce. [■] This process, over many generations, leads to the adaptation of species and the emergence of new biological forms. [■]",
          "Crucial to Darwin's theory was the concept of variation within populations. He observed that individuals of the same species are not identical, and these differences can be inherited. [■] While the theory was initially met with controversy, particularly from religious institutions, it eventually became the unifying principle of modern life sciences. [■] Advances in genetics in the 20th century further supported Darwin's findings by explaining the mechanisms of heredity. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is the core mechanism of evolution proposed by Darwin?",
            options: ["Artificial selection", "Natural selection", "Spontaneous generation", "Genetic engineering"],
            correct: "Natural selection",
            explanation: "Paragraph 1 states Darwin 'proposed the theory of evolution by natural selection'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the significance of variation in Darwin's theory?",
            options: [
              "It proved that all organisms were exactly the same.",
              "It provided the differences upon which natural selection could act.",
              "It was only found in domesticated animals.",
              "It showed that evolution only happened in isolated laboratories."
            ],
            correct: "It provided the differences upon which natural selection could act.",
            explanation: "Variation means individuals are 'not identical,' allowing some to be better suited to their environment than others."
          },
          {
            id: 3,
            type: 'purpose',
            paragraphIndex: 1,
            question: "Why does the author mention advances in genetics?",
            options: [
              "To explain why Darwin's work was initially rejected",
              "To show how modern science provided evidence for the mechanisms Darwin observed",
              "To argue that genetics is more important than evolution",
              "To describe how the printing press helped spread scientific ideas"
            ],
            correct: "To show how modern science provided evidence for the mechanisms Darwin observed",
            explanation: "The passage notes that 20th-century genetics 'further supported Darwin's findings' by explaining heredity."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Darwin's theory of evolution changed the field of biology.",
              "Natural selection describes how favorable traits are preserved over time.",
              "Modern genetics has provided evidence that supports evolutionary theory.",
              "Darwin believed that all species were created simultaneously in their current form.",
              "Evolution only occurs when humans actively intervene in breeding.",
              "The theory proposes that all life began on the Galapagos Islands."
            ],
            correct: [
              "Darwin's theory of evolution changed the field of biology.",
              "Natural selection describes how favorable traits are preserved over time.",
              "Modern genetics has provided evidence that supports evolutionary theory."
            ],
            explanation: "These choices capture the impact, the core mechanism, and the modern validation of the theory."
          }
        ]
      },
      {
        id: 324,
        title: "The Industrial Revolution and Urbanization",
        type: 'historical' as const,
        paragraphs: [
          "The Industrial Revolution, beginning in Great Britain in the late 18th century, fundamentally transformed human society from an agrarian-based economy to an industrial one. [■] The introduction of steam power and new manufacturing processes led to the creation of large factories, primarily in cities. [■] This sparked a massive wave of urbanization, as millions of people left the countryside in search of jobs and better opportunities in growing industrial centers. [■]",
          "This rapid growth of cities presented significant challenges, including overcrowding, poor sanitation, and the spread of infectious diseases. [■] Working conditions in the early factories were often harsh, with long hours and low pay. [■] Despite these difficulties, the period also saw the rise of the middle class and advancements in transportation and infrastructure that paved the way for the modern world."
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What technology was a primary driver of the Industrial Revolution?",
            options: ["Solar power", "Steam power", "Nuclear energy", "Wind turbines"],
            correct: "Steam power",
            explanation: "Paragraph 1 mentions 'The introduction of steam power' as a key factor."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What were some of the negative consequences of rapid urbanization?",
            options: [
              "Cities became too quiet and peaceful.",
              "Overcrowding and poor sanitation became major issues.",
              "There were too many jobs and not enough people.",
              "Government services were too efficient for the population."
            ],
            correct: "Overcrowding and poor sanitation became major issues.",
            explanation: "Paragraph 2 lists 'overcrowding, poor sanitation, and the spread of infectious diseases' as challenges."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Industrial Revolution marked a shift from farming to mass manufacturing.",
              "Urbanization drastically changed the demographic landscape as people moved to cities.",
              "The period brought both economic growth and severe social and health challenges.",
              "Most early factories were built in rural mountain areas.",
              "The revolution made everyone in Britain equally wealthy instantly.",
              "Steam power was replaced by electric cars within the first five years."
            ],
            correct: [
              "The Industrial Revolution marked a shift from farming to mass manufacturing.",
              "Urbanization drastically changed the demographic landscape as people moved to cities.",
              "The period brought both economic growth and severe social and health challenges."
            ],
            explanation: "These choices capture the economic shift, the demographic change, and the dual nature of industrial progress."
          }
        ]
      },
      {
        id: 325,
        title: "The Hubble Space Telescope and Our Expanding Universe",
        type: 'scientific' as const,
        paragraphs: [
          "Launched into orbit in 1990, the Hubble Space Telescope has fundamentally altered our understanding of the universe. [■] By being positioned above the Earth's atmosphere, Hubble can capture incredibly clear and detailed images without the distortion caused by the atmosphere. [■] One of its most significant contributions has been providing precise evidence that the universe is not static but is expanding at an accelerating rate. [■]",
          "Hubble has also allowed astronomers to observe the birth and death of stars, discover thousands of new galaxies, and even look back in time to the early stages of the universe. [■] Its iconic images, like the 'Pillars of Creation,' have captured the public's imagination and inspired generations of scientists. [■] As Hubble nears the end of its mission, the James Webb Space Telescope has been launched to build upon its legacy and peer even deeper into space. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Why can the Hubble Space Telescope take clearer pictures than ground-based telescopes?",
            options: [
              "It has bigger lenses than any other telescope.",
              "It is located above the Earth's atmosphere.",
              "It uses a special type of paint to attract light.",
              "It is much closer to the sun."
            ],
            correct: "It is located above the Earth's atmosphere.",
            explanation: "Paragraph 1 states Hubble captures images 'without the distortion caused by the atmosphere'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the passage imply about the future of space observation?",
            options: [
              "Hubble will be the only telescope we ever need.",
              "Space observation will stop after Hubble's mission ends.",
              "Newer technology like the James Webb Space Telescope will continue the work.",
              "Scientists will no longer be interested in looking back in time."
            ],
            correct: "Newer technology like the James Webb Space Telescope will continue the work.",
            explanation: "The passage mentions James Webb has been launched to 'build upon its legacy'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Hubble's orbital position allows for unprecedented clarity in space imagery.",
              "The telescope proved that the universe is expanding at an increasing speed.",
              "Hubble has provided critical data on the lifecycle of stars and the history of galaxies.",
              "Hubble was primarily designed to find life on Mars.",
              "The telescope has been outshone by mobile phone cameras in recent years.",
              "Hubble was built entirely out of repurposed satellite parts."
            ],
            correct: [
              "Hubble's orbital position allows for unprecedented clarity in space imagery.",
              "The telescope proved that the universe is expanding at an increasing speed.",
              "Hubble has provided critical data on the lifecycle of stars and the history of galaxies."
            ],
            explanation: "These choices reflect the technical advantage, the key cosmological discovery, and the breadth of scientific contribution."
          }
        ]
      },
      {
        id: 326,
        title: "The Magna Carta and the Foundations of Democracy",
        type: 'historical' as const,
        paragraphs: [
          "The Magna Carta, signed in 1215 by King John of England, is often cited as one of the most important documents in history. [■] Forced upon the King by a group of rebellious barons, it was a response to his arbitrary use of power and high taxation. [■] Although it was initially meant to protect the rights of the elite, it established the crucial principle that the King is not above the law. [■]",
          "One of the Magna Carta's most enduring legacies is the concept of due process, ensuring that no free man can be imprisoned or stripped of his property without a fair legal procedure. [■] This idea of the rule of law and individual rights served as an inspiration for the American Declaration of Independence and the Bill of Rights. [■] While it did not create a democracy immediately, it set in motion the move toward constitutional government. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who was forced to sign the Magna Carta in 1215?",
            options: ["King Arthur", "King John", "Richard the Lionheart", "Queen Victoria"],
            correct: "King John",
            explanation: "Paragraph 1 states it was signed by King John of England."
          },
          {
            id: 2,
            type: 'purpose',
            paragraphIndex: 1,
            question: "Why does the author mention 'due process'?",
            options: [
              "To explain a new method of collecting taxes",
              "To highlight a key legal principle that protected individuals",
              "To list the names of the barons who signed the document",
              "To describe the process of choosing a new King"
            ],
            correct: "To highlight a key legal principle that protected individuals",
            explanation: "Due process ensured 'no free man can be imprisoned' without a fair procedure, protecting individual rights."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Magna Carta restricted the absolute power of the monarch for the first time.",
              "It introduced the concept of the rule of law in English governance.",
              "The document's principles eventually influenced modern democratic constitutions.",
              "The Magna Carta gave every person in England the right to vote in 1215.",
              "King John volunteered to sign the document to show his kindness.",
              "The document was written in a language that nobody could understand."
            ],
            correct: [
              "The Magna Carta restricted the absolute power of the monarch for the first time.",
              "It introduced the concept of the rule of law in English governance.",
              "The document's principles eventually influenced modern democratic constitutions."
            ],
            explanation: "These choices summarize the immediate impact, the underlying theory, and the long-term historical significance."
          }
        ]
      },
      {
        id: 327,
        title: "The Psychology of Memory and Forgetting",
        type: 'academic' as const,
        paragraphs: [
          "Memory is a complex mental process that involves encoding, storing, and retrieving information. [■] Psychologists often distinguish between short-term memory, which holds a small amount of information for a brief period, and long-term memory, which has a potentially infinite capacity. [■] However, memory is not a perfect recording device; it is prone to inaccuracies and forgetting. [■]",
          "There are several theories as to why humans forget. One theory is decay, where information fades over time if it is not used. [■] Another is interference, where new information conflicts with and overwrites old information. [■] Understanding these processes is vital for improving learning strategies and for fields like eyewitness testimony, where the reliability of human memory is critical. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What are the three main stages of memory mentioned in the passage?",
            options: ["Reading, Writing, Remembering", "Encoding, Storing, Retrieving", "Ignoring, Forgetting, Remembering", "Speaking, Listening, Thinking"],
            correct: "Encoding, Storing, Retrieving",
            explanation: "Paragraph 1 defines memory as involving 'encoding, storing, and retrieving information'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the theory of interference suggest about forgetting?",
            options: [
              "We forget things because we are too tired.",
              "New information can make it harder to remember old information.",
              "Information is lost because the brain physically breaks down.",
              "We only forget things that we never really learned."
            ],
            correct: "New information can make it harder to remember old information.",
            explanation: "Interference is where 'new information conflicts with and overwrites old information'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Human memory is a multi-stage system with different storage capacities.",
              "The process of remembering is vulnerable to various forms of failure and error.",
              "Decay and interference are two primary psychological explanations for forgetting.",
              "Most people can remember every single detail of their lives since birth.",
              "Forgetting is only possible if you haven't eaten enough omega-3.",
              "Computers have a simplified version of human short-term memory."
            ],
            correct: [
              "Human memory is a multi-stage system with different storage capacities.",
              "The process of remembering is vulnerable to various forms of failure and error.",
              "Decay and interference are two primary psychological explanations for forgetting."
            ],
            explanation: "These choices cover the structure of memory, its unreliability, and the theories of its failure."
          }
        ]
      },
      {
        id: 328,
        title: "The Roman Empire and the Pax Romana",
        type: 'historical' as const,
        paragraphs: [
          "The Pax Romana, or 'Roman Peace,' was a period of roughly 200 years of relative tranquility and stability within the Roman Empire. [■] Beginning with the reign of Augustus in 27 BCE, the empire reached its territorial peak and saw significant advancements in engineering, architecture, and law. [■] The construction of a vast network of roads and aqueducts facilitated trade and the movement of the powerful Roman legions. [■]",
          "While it was not completely free of conflict, the Pax Romana allowed for a flourish of Roman culture and the spread of Latin throughout the Mediterranean world. [■] This era was also a high point for Roman literature and philosophy, featuring writers like Virgil and Seneca. [■] The stability of this period provided the foundation for much of Modern Western civilization's legal and cultural heritage. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "When did the period known as the Pax Romana begin?",
            options: ["476 CE", "27 BCE", "1492 CE", "1066 CE"],
            correct: "27 BCE",
            explanation: "Paragraph 1 states it began with the reign of Augustus in 27 BCE."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a major cultural consequence of the Pax Romana?",
            options: [
              "The complete destruction of all non-Roman languages",
              "The widespread spread of Latin and Roman culture",
              "A total ban on all types of literature and philosophy",
              "The immediate end of the Roman monarchy"
            ],
            correct: "The widespread spread of Latin and Roman culture",
            explanation: "Paragraph 2 notes it allowed for the 'spread of Latin throughout the Mediterranean world'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Pax Romana was a long era of peace that bolstered the Roman Empire.",
              "Technological and infrastructure gains during this time were extensive.",
              "Latin language and Roman cultural ideas became dominant in the region.",
              "The empire was constantly in a state of civil war throughout this period.",
              "The Romans completely ran out of food during the Pax Romana.",
              "The era was named after a famous Roman general named Pax."
            ],
            correct: [
              "The Pax Romana was a long era of peace that bolstered the Roman Empire.",
              "Technological and infrastructure gains during this time were extensive.",
              "Latin language and Roman cultural ideas became dominant in the region."
            ],
            explanation: "These choices reflect the peace, the technical progress, and the cultural expansion of the era."
          }
        ]
      },
      {
        id: 329,
        title: "The Physics of Superconductivity",
        type: 'scientific' as const,
        paragraphs: [
          "Superconductivity is a phenomenon where certain materials exhibit zero electrical resistance when cooled below a critical temperature. [■] Discovered in 1911 by Heike Kamerlingh Onnes, it was initially observed in mercury at extremely low temperatures, close to absolute zero. [■] In this state, an electric current can flow indefinitely without losing energy as heat. [■]",
          "A key characteristic of superconductors is the Meissner effect, which is the expulsion of magnetic fields from the interior of the material. [■] This effect allows for high-tech applications like maglev (magnetic levitation) trains and powerful electromagnets used in MRI machines. [■] Current research is focused on finding 'high-temperature' superconductors that can operate more easily and affordably in everyday environments. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is the defining characteristic of a superconductor?",
            options: ["It glows in the dark.", "It has zero electrical resistance.", "It is always magnetic.", "It is the hardest material on Earth."],
            correct: "It has zero electrical resistance.",
            explanation: "Paragraph 1 defines it as a phenomenon where 'materials exhibit zero electrical resistance'."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 1,
            highlightText: "expulsion",
            question: "In the context of the Meissner effect, 'expulsion' means",
            options: ["The absorption of something", "The pushing out of something", "The creation of something", "The rotation of something"],
            correct: "The pushing out of something",
            explanation: "The passage notes the 'expulsion of magnetic fields from the interior,' meaning they are kept or pushed out."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Superconductors allow for electricity to flow without any energy loss.",
              "The Meissner effect enables applications like magnetic levitation.",
              "Ongoing research aims to make superconductors practical at higher temperatures.",
              "Superconductivity was first discovered by exploring the surface of the moon.",
              "If a superconductor gets too cold, it becomes a regular insulator.",
              "Most household wiring is already made of superconductors."
            ],
            correct: [
              "Superconductors allow for electricity to flow without any energy loss.",
              "The Meissner effect enables applications like magnetic levitation.",
              "Ongoing research aims to make superconductors practical at higher temperatures."
            ],
            explanation: "These choices capture the core physical property, the unique magnetic effect, and the future goal."
          }
        ]
      },
      {
        id: 330,
        title: "The Enlightenment and the Age of Reason",
        type: 'historical' as const,
        paragraphs: [
          "The Enlightenment, a philosophical movement that swept through Europe in the 17th and 18th centuries, emphasized the power of human reason and logic. [■] Thinkers like John Locke, Voltaire, and Montesquieu challenged traditional authority, particularly the absolute power of kings and the influence of the Church. [■] They argued that individuals have natural rights, such as liberty and equality, which the state is obligated to protect. [■]",
          "These ideas were not just abstract theories; they directly influenced political revolutions, including the American and French Revolutions. [■] The Enlightenment also championed the scientific method and empirical observation, leading to major advancements in the physical and social sciences. [■] This era laid the groundwork for modern secularism and the democratic values that characterize many societies today. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What did Enlightenment thinkers primarily emphasize?",
            options: ["Blind faith in tradition", "Human reason and logic", "Military strength and conquest", "Individual wealth accumulation"],
            correct: "Human reason and logic",
            explanation: "Paragraph 1 states they 'emphasized the power of human reason and logic'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did the Enlightenment affect political structures in the 18th century?",
            options: [
              "It encouraged people to be more loyal to their kings.",
              "It provided the intellectual foundation for major revolutions.",
              "It led to the complete abolition of all taxes.",
              "It had no impact on political life at all."
            ],
            correct: "It provided the intellectual foundation for major revolutions.",
            explanation: "The passage states these ideas 'directly influenced political revolutions'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Enlightenment shifted focus toward rationality and secular progress.",
              "It promoted the concept of universal natural rights for all individuals.",
              "Enlightenment philosophy was a key catalyst for revolutionary political change.",
              "Church leaders were the primary authors of Enlightenment texts.",
              "The movement advocated for a return to medieval feudalism.",
              "Enlightenment thinkers were mostly interested in astrology."
            ],
            correct: [
              "The Enlightenment shifted focus toward rationality and secular progress.",
              "It promoted the concept of universal natural rights for all individuals.",
              "Enlightenment philosophy was a key catalyst for revolutionary political change."
            ],
            explanation: "These choices summarize the intellectual shift, the core value, and the historical output."
          }
        ]
      },
      {
        id: 331,
        title: "The Ottoman Empire: A Bridge Between Worlds",
        type: 'historical' as const,
        paragraphs: [
          "The Ottoman Empire, at its peak in the 16th and 17th centuries, was one of the most powerful and long-lasting empires in history. [■] Commanding a vast territory that spanned Southeast Europe, Western Asia, and North Africa, it served as a crucial bridge between the East and the West. [■] Its capital, Constantinople (now Istanbul), became a vibrant center of trade, culture, and learning, where Islamic traditions blended with the heritage of the Byzantine Empire. [■]",
          "One of the empire's most significant achievements was its administrative and legal system, which allowed for a degree of religious and cultural autonomy for its diverse subjects. [■] This 'millet system' fostered social stability and economic prosperity for centuries. [■] However, by the 19th century, the empire began to decline due to internal corruption, nationalist movements, and the rising power of European nations, eventually dissolving after World War I. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which city served as the capital of the Ottoman Empire?",
            options: ["Rome", "Constantinople", "Cairo", "Athens"],
            correct: "Constantinople",
            explanation: "Paragraph 1 identifies Constantinople as the capital and a center of trade and culture."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the primary benefit of the 'millet system' in the Ottoman Empire?",
            options: [
              "It forced all subjects to adopt a single religion.",
              "It provided religious and cultural autonomy, promoting stability.",
              "It was used to train the empire's elite military force.",
              "It completely removed the need for any central government."
            ],
            correct: "It provided religious and cultural autonomy, promoting stability.",
            explanation: "The passage notes the system allowed for autonomy and 'fostered social stability'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Ottoman Empire was a transcontinental power that linked different regions.",
              "The millet system allowed for the governance of a diverse population.",
              "Internal and external pressures led to the empire's eventual decline.",
              "The empire was founded by Viking explorers in the 10th century.",
              "The Ottomans were the first to use steam power in agriculture.",
              "Constantinople was abandoned and remained empty for 200 years."
            ],
            correct: [
              "The Ottoman Empire was a transcontinental power that linked different regions.",
              "The millet system allowed for the governance of a diverse population.",
              "Internal and external pressures led to the empire's eventual decline."
            ],
            explanation: "These choices cover the empire's geographical significance, its governance, and its collapse."
          }
        ]
      },
      {
        id: 332,
        title: "The Space Race and the Cold War",
        type: 'historical' as const,
        paragraphs: [
          "The Space Race was a 20th-century competition between the Soviet Union and the United States for supremacy in spaceflight capability. [■] Spanning from 1957 to 1975, it was a high-stakes component of the Cold War, reflecting the ideological and technological rivalry between the two superpowers. [■] It began with the Soviet launch of Sputnik 1, the first artificial satellite, which sparked fear and intensified competition in the U.S. [■]",
          "The race reached its pinnacle with NASA's Apollo 11 mission in 1969, which saw the first humans, Neil Armstrong and Buzz Aldrin, land on the moon. [■] While primarily a military and political contest, the Space Race led to rapid advancements in telecommunications, computing, and materials science. [■] The eventual cooperation on the Apollo-Soyuz Test Project in 1975 marked a symbolic end to the competition and a move toward international space collaboration. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What event officially started the Space Race in 1957?",
            options: [
              "The launch of the Apollo 11 moon mission",
              "The Soviet launch of Sputnik 1",
              "The creation of NASA",
              "The first flight of the Space Shuttle"
            ],
            correct: "The Soviet launch of Sputnik 1",
            explanation: "Paragraph 1 states it began with the Soviet launch of Sputnik 1."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a significant non-political outcome of the Space Race?",
            options: [
              "Rapid advancements in various fields of science and technology",
              "The complete end of the Cold War in 1969",
              "The decision to stop all space travel after the moon landing",
              "A global agreement to use only Soviet technology in space"
            ],
            correct: "Rapid advancements in various fields of science and technology",
            explanation: "Paragraph 2 notes it led to advancements in 'telecommunications, computing, and materials science'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Space Race was a technological competition driven by Cold War tensions.",
              "Sputnik and the Apollo moon landings were the most significant milestones.",
              "The competition resulted in lasting scientific and technological innovations.",
              "The Space Race was mostly a peaceful sporting event between the two nations.",
              "The United States and the Soviets never actually reached space.",
              "The moon landing was a Hollywood movie filmed in a desert."
            ],
            correct: [
              "The Space Race was a technological competition driven by Cold War tensions.",
              "Sputnik and the Apollo moon landings were the most significant milestones.",
              "The competition resulted in lasting scientific and technological innovations."
            ],
            explanation: "These choices capture the motivation, the major events, and the technological legacy of the Cold War era."
          }
        ]
      },
      {
        id: 333,
        title: "The Architecture of Ancient Greece",
        type: 'historical' as const,
        paragraphs: [
          "Ancient Greek architecture is renowned for its harmony, proportion, and aesthetic beauty. [■] The Greeks developed three distinct orders of columns: the simple Doric, the scrolling Ionic, and the elaborate Corinthian. [■] These orders provided a framework for the construction of temples, which were intended as homes for the gods and symbols of civic pride. [■]",
          "The most famous example is the Parthenon in Athens, dedicated to the goddess Athena. [■] Built with meticulous attention to detail, it features subtle optical illusions, such as tapering columns, that make the building appear more stable and symmetrical to the human eye. [■] The principles of Greek architecture have had a lasting influence on Western design, seen in everything from government buildings to residential homes. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What were the three orders of Greek columns?",
            options: ["Doric, Ionic, Corinthian", "Simple, Medium, Complex", "Round, Square, Triangle", "Stone, Marble, Wood"],
            correct: "Doric, Ionic, Corinthian",
            explanation: "Paragraph 1 lists these three distinct orders."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why did Greek architects use optical illusions in buildings like the Parthenon?",
            options: [
              "To make the building look like it was falling down",
              "To improve the visual appearance and symmetry for the observer",
              "To save money on building materials",
              "To hide the entrance from enemies"
            ],
            correct: "To improve the visual appearance and symmetry for the observer",
            explanation: "The passage notes these illusions make the building appear 'more stable and symmetrical to the human eye'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Greek architecture emphasized mathematical proportion and balance.",
              "The development of the Doric, Ionic, and Corinthian orders was foundational.",
              "The legacy of Greek design continues to shape modern Western architecture.",
              "Greeks built their temples primarily out of recycled plastic.",
              "The Parthenon was built in just three days by a small team.",
              "Greek columns were designed so that they could be easily moved."
            ],
            correct: [
              "Greek architecture emphasized mathematical proportion and balance.",
              "The development of the Doric, Ionic, and Corinthian orders was foundational.",
              "The legacy of Greek design continues to shape modern Western architecture."
            ],
            explanation: "These choices reflect the aesthetic goals, the structural systems, and the long-term influence of Greek architecture."
          }
        ]
      },
      {
        id: 334,
        title: "The Black Death and the End of Feudalism",
        type: 'historical' as const,
        paragraphs: [
          "The Black Death, a devastating global pandemic of bubonic plague that struck Eurasia and North Africa in the mid-14th century, resulted in the deaths of up to 50% of Europe's population. [■] This catastrophic loss of life had profound social and economic consequences. [■] Before the plague, Europe's feudal system relied on an abundant supply of cheap labor—peasants and serfs who worked the land for the nobility. [■]",
          "The sudden scarcity of labor following the pandemic inverted the power dynamics between landowners and workers. [■] Survivors could demand higher wages and better living conditions, as their services were now in high demand. [■] This shift undermined the traditional feudal structures, leading to the rise of a more mobile and independent workforce and contributing to the eventual transition towards a more market-oriented economy. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Approximately what percentage of Europe's population died from the Black Death?",
            options: ["10%", "25%", "50%", "75%"],
            correct: "50%",
            explanation: "Paragraph 1 states the plague 'resulted in the deaths of up to 50% of Europe's population'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did the Black Death affect the labor market in Europe?",
            options: [
              "It caused a surplus of labor, lowering wages.",
              "It created a labor shortage, allowing workers to demand more power.",
              "It forced all peasants to become landowners.",
              "It led to the total abolition of all forms of work."
            ],
            correct: "It created a labor shortage, allowing workers to demand more power.",
            explanation: "The scarcity of labor 'inverted power dynamics,' allowing survivors to 'demand higher wages'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Black Death caused a massive demographic collapse in Europe.",
              "The resulting labor shortage significantly weakened the feudal system.",
              "The pandemic paved the way for social and economic restructuring.",
              "The plague was spread primarily by high-speed trade ships.",
              "Everyone moved to the cities to escape the disease.",
              "The Church became more powerful because of the plague."
            ],
            correct: [
              "The Black Death caused a massive demographic collapse in Europe.",
              "The resulting labor shortage significantly weakened the feudal system.",
              "The pandemic paved the way for social and economic restructuring."
            ],
            explanation: "These choices cover the mortality, the economic shift, and the long-term societal impact."
          }
        ]
      },
      {
        id: 335,
        title: "The History and Future of Cryptography",
        type: 'academic' as const,
        paragraphs: [
          "Cryptography, the art of writing or solving codes, has been used for millennia to protect sensitive information. [■] Ancient civilizations, such as the Spartans and the Romans, used simple substitution ciphers to communicate military secrets. [■] The discipline took a major leap forward during World War II with the development of complex machines like the German Enigma, which was eventually cracked by a team led by Alan Turing. [■]",
          "In the digital age, cryptography has become essential for securing everything from personal emails to financial transactions. [■] Modern encryption relies on complex mathematical algorithms that are virtually impossible to break with current computing power. [■] However, the emergence of quantum computing poses a potential threat, as these incredibly powerful machines could one day solve the problems that keep our data safe today. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who led the team that cracked the Enigma code during World War II?",
            options: ["Isaac Newton", "Alan Turing", "Charles Babbage", "Ada Lovelace"],
            correct: "Alan Turing",
            explanation: "Paragraph 1 states the Enigma was cracked by a team led by Alan Turing."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why is quantum computing considered a threat to current cryptography?",
            options: [
              "It is too expensive for most people to use.",
              "It could solve the mathematical problems used for modern encryption.",
              "It does not require any power to run.",
              "It can only be used by government agencies."
            ],
            correct: "It could solve the mathematical problems used for modern encryption.",
            explanation: "The passage states quantum machines 'could one day solve the problems that keep our data safe today'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Cryptography has evolved from simple ciphers to complex digital encryption.",
              "Breakthroughs during World War II defined the modern era of code-breaking.",
              "The future of data security may be challenged by quantum technologies.",
              "Encryption is only used by soldiers and government spies.",
              "The ancient Romans used computers to solve their secrets.",
              "Cryptography is the study of ancient fossils."
            ],
            correct: [
              "Cryptography has evolved from simple ciphers to complex digital encryption.",
              "Breakthroughs during World War II defined the modern era of code-breaking.",
              "The future of data security may be challenged by quantum technologies."
            ],
            explanation: "These choices summarize the history, the pivotal role of WWII, and the upcoming challenges."
          }
        ]
      },
      {
        id: 336,
        title: "The Psychology of Sleep and Dreams",
        type: 'academic' as const,
        paragraphs: [
          "Dreams have fascinated humans for millennia, but it was not until the 20th century that the psychology of dreaming became a subject of scientific study. [■] Sigmund Freud, the father of psychoanalysis, argued that dreams are the 'royal road to the unconscious,' representing repressed desires and hidden conflicts. [■] According to Freud's theory, the manifest content of a dream—the actual imagery—masks a deeper, latent meaning. [■]",
          "More recent theories, such as the activation-synthesis hypothesis, propose a more biological explanation. [■] This theory suggests that dreams are the brain's attempt to make sense of random neural firing that occurs during REM (Rapid Eye Movement) sleep. [■] While the debate between psychological and biological perspectives continues, research shows that dreaming plays a vital role in memory consolidation and emotional processing. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who argued that dreams represent repressed desires and unconscious conflicts?",
            options: ["Isaac Newton", "Sigmund Freud", "B.F. Skinner", "Carl Jung"],
            correct: "Sigmund Freud",
            explanation: "Paragraph 1 credits Sigmund Freud with the idea that dreams represent repressed desires."
          },
          {
            id: 2,
            type: 'vocabulary',
            paragraphIndex: 0,
            highlightText: "latent",
            question: "The word 'latent' in paragraph 1 is closest in meaning to",
            options: ["hidden", "obvious", "colorful", "fearful"],
            correct: "hidden",
            explanation: "Latent content in dreams refers to the deeper, hidden meaning according to Freud."
          },
          {
            id: 3,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the primary focus of the activation-synthesis hypothesis?",
            options: [
              "Analyzing the direct symbolic meaning of dream characters",
              "Explaining dreams as a byproduct of biological brain activity",
              "Proving that humans do not actually need to sleep",
              "Using dreams to predict the future of the dreamer"
            ],
            correct: "Explaining dreams as a byproduct of biological brain activity",
            explanation: "The passage notes this hypothesis suggests dreams are attempts to make sense of 'random neural firing'."
          },
          {
            id: 4,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Psychological and biological theories offer different explanations for dreaming.",
              "Freud viewed dreams as a window into the unconscious mind.",
              "Dreaming is essential for cognitive functions like memory and emotional health.",
              "Most dreams occur during the light stages of non-REM sleep.",
              "Dreams have no actual purpose according to modern psychology.",
              "Only humans are capable of experiencing complex dreams."
            ],
            correct: [
              "Psychological and biological theories offer different explanations for dreaming.",
              "Freud viewed dreams as a window into the unconscious mind.",
              "Dreaming is essential for cognitive functions like memory and emotional health."
            ],
            explanation: "These choices cover the theoretical perspectives and the functional importance of dreaming."
          }
        ]
      },
      {
        id: 337,
        title: "The Discovery of the Double Helix Structure of DNA",
        type: 'scientific' as const,
        paragraphs: [
          "The discovery of the double helix structure of DNA in 1953 by James Watson and Francis Crick transformed the field of genetics. [■] Their model showed that DNA consists of two strands twisted around each other, with nitrogenous bases—adenine, thymine, cytosine, and guanine—forming the rungs of a ladder. [■] This structure provided a clear mechanism for how genetic information could be copied and passed from one generation to the next. [■]",
          "A critical component of this discovery was the high-quality X-ray diffraction images produced by Rosalind Franklin. [■] Her 'Photo 51' provided the structural evidence needed to confirm the helical shape of the DNA molecule. [■] Today, the understanding of DNA is the foundation of modern biotechnology, forensic science, and personalized medicine, allowing for breakthroughs that were once thought impossible. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "Whose X-ray diffraction images were critical to the discovery of the DNA structure?",
            options: ["Marie Curie", "Rosalind Franklin", "Charles Darwin", "Gregor Mendel"],
            correct: "Rosalind Franklin",
            explanation: "Paragraph 2 credits Rosalind Franklin's 'Photo 51' images as a critical component."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What was the biological significance of the double helix structure and the nitrogenous bases?",
            options: [
              "It explained how plants pull water from the soil.",
              "It provided a mechanism for genetic information to be replicated and inherited.",
              "It proved that all viruses were essentially just large versions of DNA.",
              "It showed that DNA was too complex to be understood by humans."
            ],
            correct: "It provided a mechanism for genetic information to be replicated and inherited.",
            explanation: "The passage notes the structure showed how info could be 'copied and passed from one generation to the next'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Watson and Crick successfully modeled the molecular structure of DNA.",
              "Rosalind Franklin's experimental data was essential to the final model.",
              "Deciphering DNA's structure laid the groundwork for modern biotech and medicine.",
              "DNA was first discovered inside a meteorite found in Antarctica.",
              "The structure proved that humans share 100% of their DNA with trees.",
              "The nitrogenous bases are made primarily of solid gold."
            ],
            correct: [
              "Watson and Crick successfully modeled the molecular structure of DNA.",
              "Rosalind Franklin's experimental data was essential to the final model.",
              "Deciphering DNA's structure laid the groundwork for modern biotech and medicine."
            ],
            explanation: "These choices capture the modeling, the evidentiary source, and the historical impact of the discovery."
          }
        ]
      },
      {
        id: 338,
        title: "The Crusades: Cultural and Economic Impacts",
        type: 'historical' as const,
        paragraphs: [
          "The Crusades were a series of religious wars between Christians and Muslims started primarily to secure control of holy sites in the eastern Mediterranean. [■] While the primary motivations were religious and territorial, the conflict had profound long-term impacts on global trade. [■] The massive movement of people and troops across Eurasia increased European exposure to luxury goods from the East, such as silk, spices, and porcelain. [■]",
          "This exposure sparked a resurgence in European commerce and led to the growth of Italian port cities like Venice and Genoa as major trade hubs. [■] Furthermore, the exchange of knowledge in mathematics, medicine, and philosophy between Islamic and Christian scholars flourished in regions where the cultures coexisted. [■] These interactions, while born of conflict, ultimately helped lay the intellectual groundwork for the European Renaissance. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What were some of the luxury goods Europeans were increasingly exposed to due to the Crusades?",
            options: [
              "Steam engines and iron ore",
              "Silk, spices, and porcelain",
              "Potatoes and corn",
              "Plastic and electronics"
            ],
            correct: "Silk, spices, and porcelain",
            explanation: "Paragraph 1 mentions silk, spices, and porcelain as Eastern luxury goods."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did the Crusades affect Italian cities like Venice and Genoa?",
            options: [
              "They were destroyed by invading armies.",
              "They grew into major economic and trade hubs.",
              "They were abandoned by their populations.",
              "They became center for agricultural production only."
            ],
            correct: "They grew into major economic and trade hubs.",
            explanation: "Paragraph 2 states the exposure sparked a resurgence in commerce and the growth of these cities as trade hubs."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Crusades stimulated economic growth through increased trade with the East.",
              "Cultural and intellectual exchange occurred between Islamic and Christian scholars.",
              "These intercontinental interactions helped pave the way for the Renaissance.",
              "The Crusades were the first time that humans traveled by boat.",
              "The primary goal of the Crusades was to build a bridge across the ocean.",
              "Religion was the only factor that mattered during the 200 years of conflict."
            ],
            correct: [
              "The Crusades stimulated economic growth through increased trade with the East.",
              "Cultural and intellectual exchange occurred between Islamic and Christian scholars.",
              "These intercontinental interactions helped pave the way for the Renaissance."
            ],
            explanation: "These choices summarize the economic stimulation, the cultural exchange, and the long-term historical legacy."
          }
        ]
      },
      {
        id: 339,
        title: "The Meiji Restoration and the Modernization of Japan",
        type: 'historical' as const,
        paragraphs: [
          "The Meiji Restoration, beginning in 1868, was a period of rapid modernization and industrialization in Japan. [■] Following the overthrow of the Tokugawa Shogunate, power was returned to the Emperor, and the country sought to transform itself from a closed, feudal society into a modern global power. [■] This era was characterized by a push to adopt Western technology, military structures, and political systems. [■]",
          "Japan sent experts abroad to learn from other nations and hired foreign advisors to help build railroads, factories, and a modern navy. [■] These reforms were incredibly successful, and by the early 20th century, Japan had emerged as a major world power. [■] The Meiji Restoration fundamentally altered Japanese society and set the stage for its role in the modern world. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was the primary goal of the Meiji Restoration?",
            options: [
              "To keep Japan isolated from the rest of the world",
              "To modernize and industrialize Japan",
              "To return to traditional farming methods",
              "To give more power to local shoguns"
            ],
            correct: "To modernize and industrialize Japan",
            explanation: "Paragraph 1 states it was a 'period of rapid modernization and industrialization'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did Japan achieve its rapid modernization?",
            options: [
              "By fighting a series of wars against its neighbors",
              "By learning from and adopting foreign technology and systems",
              "By purely inventing everything from scratch without outside help",
              "By closing all its borders to foreign travel"
            ],
            correct: "By learning from and adopting foreign technology and systems",
            explanation: "The passage notes Japan 'sent experts abroad to learn' and 'hired foreign advisors'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Meiji Restoration marked Japan's shift from feudalism to industrialism.",
              "Japan actively sought and integrated Western innovations during this time.",
              "The success of these reforms elevated Japan to global superpower status.",
              "The Emperor was replaced by a small group of businessmen.",
              "Japan refused to build any railroads or factories in the 19th century.",
              "The restoration was entirely peaceful and involved no political change."
            ],
            correct: [
              "The Meiji Restoration marked Japan's shift from feudalism to industrialism.",
              "Japan actively sought and integrated Western innovations during this time.",
              "The success of these reforms elevated Japan to global superpower status."
            ],
            explanation: "These choices reflect the systemic change, the method of progress, and the international result."
          }
        ]
      },
      {
        id: 340,
        title: "The Biology of the Human Microbiome",
        type: 'scientific' as const,
        paragraphs: [
          "The human microbiome is the collective community of microorganisms, including bacteria, fungi, and viruses, that live on and inside the human body. [■] Most of these microbes reside in the gut, where they play a vital role in digestion, metabolism, and the regulation of the immune system. [■] While some microbes can cause disease, the vast majority are beneficial and essential for human health. [■]",
          "Research has shown that imbalances in the microbiome, often caused by diet or antibiotic use, can be linked to conditions like obesity, allergies, and even mental health disorders. [■] Scientists are now exploring ways to improve health by optimizing the microbiome through probiotics and dietary changes. [■] This field of study is revolutionizing our understanding of the relationship between humans and the microscopic world. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Where do most of the microbes in the human microbiome live?",
            options: ["The Brain", "The Gut", "The Muscles", "The Lungs"],
            correct: "The Gut",
            explanation: "Paragraph 1 states 'Most of these microbes reside in the gut'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What does the passage imply about the relationship between diet and health?",
            options: [
              "Diet has no impact on the microbiome.",
              "A healthy diet can help keep your microbiome in balance.",
              "Eating more antibiotics is the best way to improve health.",
              "Mental health is completely unrelated to what we eat."
            ],
            correct: "A healthy diet can help keep your microbiome in balance.",
            explanation: "The passage notes that 'imbalances... often caused by diet' can be linked to health conditions."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The human body is host to a complex and vital ecosystem of microbes.",
              "The gut microbiome is critical for digestion and immune system function.",
              "Disruptions to this microbial balance can lead to a variety of diseases.",
              "The microbiome consists entirely of harmful bacteria that must be killed.",
              "Humans would be much healthier if they had no microbes at all.",
              "Microbes are primarily found in human hair and fingernails."
            ],
            correct: [
              "The human body is host to a complex and vital ecosystem of microbes.",
              "The gut microbiome is critical for digestion and immune system function.",
              "Disruptions to this microbial balance can lead to a variety of diseases."
            ],
            explanation: "These choices capture the existence, the function, and the health implications of the microbiome."
          }
        ]
      },
      {
        id: 341,
        title: "The Great Depression and the New Deal",
        type: 'historical' as const,
        paragraphs: [
          "The Great Depression, which began with the stock market crash of 1929, was the most severe economic downturn in modern history. [■] Characterized by high unemployment, widespread poverty, and a collapse in global trade, it lasted for an entire decade. [■] In response, President Franklin D. Roosevelt launched the 'New Deal,' a series of programs and reforms aimed at providing relief, recovery, and reform. [■]",
          "The New Deal created jobs through public works projects, established Social Security, and introduced regulations for the financial sector to prevent future crashes. [■] While the New Deal did not immediately end the Great Depression, it provided a vital safety net for millions of Americans and fundamentally changed the role of the government in the economy. [■] The crisis eventually ended as the U.S. began to mobilize for World War II. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What event officially triggered the Great Depression in 1929?",
            options: [
              "The start of World War II",
              "The stock market crash",
              "The end of the Civil War",
              "The invention of the skyscraper"
            ],
            correct: "The stock market crash",
            explanation: "Paragraph 1 states it began with the 'stock market crash of 1929'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a major long-term result of the New Deal?",
            options: [
              "It made the U.S. government much smaller and less active.",
              "It established a more significant role for the government in providing economic safety.",
              "It caused another even worse stock market crash 5 years later.",
              "It completely banned all international trade for 20 years."
            ],
            correct: "It established a more significant role for the government in providing economic safety.",
            explanation: "The passage notes it 'fundamentally changed the role of the government in the economy' and provided a safety net."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Great Depression was a decade-long global economic crisis.",
              "The New Deal was an unprecedented government effort to stabilize the economy.",
              "These reforms created lasting structures like Social Security and bank regulations.",
              "The Great Depression was mostly caused by people spending too much money at the movies.",
              "Franklin D. Roosevelt was the first President to ever be elected.",
              "The stock market crash of 1929 was actually a very positive event for most people."
            ],
            correct: [
              "The Great Depression was a decade-long global economic crisis.",
              "The New Deal was an unprecedented government effort to stabilize the economy.",
              "These reforms created lasting structures like Social Security and bank regulations."
            ],
            explanation: "These choices reflect the scale of the crisis, the scale of the response, and the lasting legislative impact."
          }
        ]
      },
      {
        id: 342,
        title: "The Chemistry of Ocean Acidification",
        type: 'scientific' as const,
        paragraphs: [
          "Ocean acidification is a process where the Earth's oceans become more acidic over time. [■] This is primarily caused by the absorption of excess carbon dioxide (CO2) from the atmosphere, which reacts with seawater to form carbonic acid. [■] Since the beginning of the Industrial Revolution, the acidity of the oceans has increased by approximately 30 percent. [■]",
          "This shift in chemistry has significant consequences for marine life, particularly organisms like coral, oysters, and mussels that build calcium carbonate shells. [■] Increased acidity makes it harder for these organisms to maintain their shells, leading to the decline of coral reefs and disruptions in the marine food chain. [■] Reducing carbon emissions is vital for protecting ocean health and the communities that depend on it. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is the primary cause of ocean acidification?",
            options: [
              "Excess salt in the water",
              "The absorption of carbon dioxide from the atmosphere",
              "Oil spills from tankers",
              "Too many fish in the ocean"
            ],
            correct: "The absorption of carbon dioxide from the atmosphere",
            explanation: "Paragraph 1 identifies the absorption of CO2 as the primary cause."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why is ocean acidification particularly dangerous for coral and oysters?",
            options: [
              "It makes the water too warm for them to swim.",
              "It makes it harder for them to build and keep their shells.",
              "It prevents them from seeing their predators.",
              "It makes them grow too large for their environment."
            ],
            correct: "It makes it harder for them to build and keep their shells.",
            explanation: "The passage states acidity 'makes it harder for these organisms to maintain their shells'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "CO2 absorption leads to the formation of carbonic acid in the sea.",
              "The acidity of the world's oceans has risen rapidly in the last two centuries.",
              "Acidification threatens marine ecosystems and shell-building life.",
              "Oceans are becoming more alkaline because of plastic pollution.",
              "Fish are the primary source of carbon dioxide in the Earth's atmosphere.",
              "Coral reefs can easily survive in any level of acid."
            ],
            correct: [
              "CO2 absorption leads to the formation of carbonic acid in the sea.",
              "The acidity of the world's oceans has risen rapidly in the last two centuries.",
              "Acidification threatens marine ecosystems and shell-building life."
            ],
            explanation: "These choices reflect the chemical mechanism, the scale of the change, and the biological impact."
          }
        ]
      },
      {
        id: 343,
        title: "The Ziggurats of Ancient Mesopotamia",
        type: 'historical' as const,
        paragraphs: [
          "In the fertile plains of ancient Mesopotamia, the Sumerians, Babylonians, and Assyrians constructed massive stepped towers known as ziggurats. [■] Unlike the Egyptian pyramids, which were primarily tombs, ziggurats served as religious centers and platforms for temples. [■] They were built using sun-dried mud bricks, with a more durable outer layer of baked bricks, and often soared hundreds of feet into the air. [■]",
          "The ziggurat was considered the dwelling place of the city’s patron deity, and only priests were allowed onto the higher levels to perform sacred rituals. [■] These structures were not just religious; they also served as administrative hubs and symbols of the wealth and power of the city-state. [■] The most famous ziggurat, Etemenanki in Babylon, is often identified with the biblical Tower of Babel. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was the primary religious purpose of a Mesopotamian ziggurat?",
            options: [
              "To store grain for the city during famines",
              "To serve as a tomb for the King",
              "To act as a religious center and platform for a temple",
              "To provide a defensive walls for the soldiers"
            ],
            correct: "To act as a religious center and platform for a temple",
            explanation: "Paragraph 1 states ziggurats 'served as religious centers and platforms for temples'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "Why did Mesopotamian builders use a layer of baked bricks for the ziggurat's exterior?",
            options: [
              "Because baked bricks were lighter than sun-dried ones",
              "To provide a more durable outer layer for the structure",
              "Because the Gods preferred the color of baked bricks",
              "To make the building cooler during the summer"
            ],
            correct: "To provide a more durable outer layer for the structure",
            explanation: "Paragraph 1 notes they used 'a more durable outer layer of baked bricks' over the mud bricks."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Ziggurats were iconic, stepped religious structures of the ancient Near East.",
              "They represented the divine presence and the socio-political power of the city.",
              "The design was distinct from the pyramid structures found in other cultures.",
              "Ziggurats were primarily used for astronomical observations and star mapping.",
              "They were built entirely of sand without any solid bricks.",
              "Mesopotamians abandoned ziggurats and replaced them with wooden huts."
            ],
            correct: [
              "Ziggurats were iconic, stepped religious structures of the ancient Near East.",
              "They represented the divine presence and the socio-political power of the city.",
              "The design was distinct from the pyramid structures found in other cultures."
            ],
            explanation: "These choices reflect the architectural form, the multi-dimensional function, and the cultural distinction of ziggurats."
          }
        ]
      },
      {
        id: 344,
        title: "The Industrial Revolution and Social Change",
        type: 'historical' as const,
        paragraphs: [
          "The Industrial Revolution, which began in Britain in the late 18th century, transformed predominantly agrarian societies into industrial ones. [■] The development of steam power and new machinery allowed for the mass production of goods in factories. [■] This shift led to rapid urbanization as people moved from the countryside to cities in search of work. [■]",
          "While industrialization produced immense wealth and technological progress, it also led to difficult living and working conditions for many. [■] Overcrowded cities, poor sanitation, and long working hours in dangerous factories prompted the rise of labor unions and social reform movements. [■] The Industrial Revolution fundamentally reshaped the modern world, creating the foundation for our current global economy. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "When and where did the Industrial Revolution begin?",
            options: ["USA, 20th century", "Britain, late 18th century", "France, 17th century", "Germany, 19th century"],
            correct: "Britain, late 18th century",
            explanation: "Paragraph 1 explicitly states it began in Britain in the late 18th century."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a significant social challenge caused by rapid urbanization?",
            options: [
              "Too much clean water in the cities",
              "Overcrowding and poor sanitation in urban areas",
              "People refusing to live in houses",
              "The extinction of all wild animals in the country"
            ],
            correct: "Overcrowding and poor sanitation in urban areas",
            explanation: "Paragraph 2 notes that cities became overcrowded and had poor sanitation."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Mechanization and steam power enabled mass industrial production.",
              "The shift toward factory work caused a massive wave of urbanization.",
              "Social issues arising from industrial life sparked major reform movements.",
              "Workers preferred the long hours and dangerous conditions of factories.",
              "Industrialization completely eliminated poverty in Europe in just a few years.",
              "The Industrial Revolution was mostly about making better steam-powered toys."
            ],
            correct: [
              "Mechanization and steam power enabled mass industrial production.",
              "The shift toward factory work caused a massive wave of urbanization.",
              "Social issues arising from industrial life sparked major reform movements."
            ],
            explanation: "These choices cover the technological cause, the demographic shift, and the social response."
          }
        ]
      },
      {
        id: 345,
        title: "The Life and Legacy of Marie Curie",
        type: 'historical' as const,
        paragraphs: [
          "Marie Curie was a pioneering physicist and chemist who conducted groundbreaking research on radioactivity. [■] She was the first woman to win a Nobel Prize and is still the only person to win Nobel Prizes in two different scientific fields (physics and chemistry). [■] Curie discovered the elements polonium and radium and developed the theory of radioactivity. [■]",
          "Despite facing significant gender discrimination in the scientific community, Curie's work paved the way for the use of radioactive isotopes in medicine, including the treatment of cancer. [■] Sadly, her long-term exposure to radiation led to her early death. [■] Her legacy continues to inspire generations of scientists, particularly women, to pursue careers in STEM (science, technology, engineering, and mathematics). [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What are the two scientific fields in which Marie Curie won Nobel Prizes?",
            options: ["Biology and Medicine", "Physics and Chemistry", "Geology and Astronomy", "Social Science and Economics"],
            correct: "Physics and Chemistry",
            explanation: "Paragraph 1 states she won Nobel Prizes in Physics and Chemistry."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a double-edged sword regarding Marie Curie's research?",
            options: [
              "Her discoveries were used in medicine, but radiation also caused her death.",
              "Her work won prizes, but she was never allowed to talk to other scientists.",
              "She found new elements, but she lost her favorite keys in the process.",
              "She was famous, but she wasn't allowed to enter any buildings."
            ],
            correct: "Her discoveries were used in medicine, but radiation also caused her death.",
            explanation: "Paragraph 2 notes the medical benefits and her early death due to radiation exposure."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Marie Curie made historic contributions to the understanding of radioactivity.",
              "Her scientific excellence broke major gender barriers of her time.",
              "The practical applications of her work continue to benefit modern medicine.",
              "She won Nobel Prizes for her skills in professional painting.",
              "Marie Curie once said that science is essentially just a hobby.",
              "Polonium was a popular food ingredient named after Marie Curie."
            ],
            correct: [
              "Marie Curie made historic contributions to the understanding of radioactivity.",
              "Her scientific excellence broke major gender barriers of her time.",
              "The practical applications of her work continue to benefit modern medicine."
            ],
            explanation: "These choices reflect her discovery, her social impact, and his medical legacy."
          }
        ]
      },
      {
        id: 346,
        title: "The Importance of Biodiversity",
        type: 'scientific' as const,
        paragraphs: [
          "Biodiversity refers to the variety of life on Earth, including the complex interactions within ecosystems. [■] High biodiversity is essential for ecosystem health, as it provides a variety of services like pollination, water purification, and nutrient cycling. [■] Each species, no matter how small, plays a unique role in maintaining the balance of nature. [■]",
          "However, human activities like habitat destruction, pollution, and climate change are leading to a rapid loss of biodiversity worldwide. [■] This loss can destabilize ecosystems, making them more vulnerable to collapse and reducing their ability to provide the resources humans depend on. [■] Conserving biodiversity is not just about protecting nature; it's about sustaining the very foundation of human life and well-being. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What are some of the 'ecosystem services' provided by high biodiversity?",
            options: [
              "Pollination, water purification, and nutrient cycling",
              "Internet access and cell phone reception",
              "Home construction and car repairs",
              "Movie production and music streaming"
            ],
            correct: "Pollination, water purification, and nutrient cycling",
            explanation: "Paragraph 1 lists these services."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why is the loss of biodiversity a threat to humans?",
            options: [
              "Because it will make the Earth look ugly",
              "Because ecosystems provide essential resources and stability for human life",
              "Because we will have fewer choices for pets",
              "Because it will cause all the computers to stop working"
            ],
            correct: "Because ecosystems provide essential resources and stability for human life",
            explanation: "Paragraph 2 states that ecosystems 'provide the resources humans depend on'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Biodiversity represents the interconnected web of all living organisms.",
              "Healthy ecosystems rely on biological diversity to function and survive.",
              "Human industry is currently causing a dangerous decline in species variety.",
              "Biodiversity is only important for people who live in the forest.",
              "Pollution actually helps new and better species to evolve faster.",
              "The loss of a few bugs or plants has no impact on human life."
            ],
            correct: [
              "Biodiversity represents the interconnected web of all living organisms.",
              "Healthy ecosystems rely on biological diversity to function and survive.",
              "Human industry is currently causing a dangerous decline in species variety."
            ],
            explanation: "These choices cover the definition, the necessity, and the current threat to biodiversity."
          }
        ]
      },
      {
        id: 347,
        title: "The Apollo 11 Moon Landing",
        type: 'historical' as const,
        paragraphs: [
          "On July 20, 1969, NASA's Apollo 11 mission achieved one of humanity's greatest feats: the first human moon landing. [■] Neil Armstrong and Buzz Aldrin spent several hours on the lunar surface, collecting samples and conducting experiments, while Michael Collins orbited above. [■] Armstrong's famous words, 'That's one small step for a man, one giant leap for mankind,' resonated around the world. [■]",
          "The mission was a major Cold War victory for the United States, demonstrating its technological superiority over the Soviet Union. [■] While the Apollo program ended in 1972, the lessons learned from these missions have continued to inform space exploration. [■] Today, there is renewed interest in returning to the moon to establish a permanent human presence and as a base for future missions to Mars. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who was the first person to walk on the moon during Apollo 11?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "John Glenn"],
            correct: "Neil Armstrong",
            explanation: "Paragraph 1 states Neil Armstrong landed on the moon."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is a major goal for the future of moon exploration as mentioned in the passage?",
            options: [
              "Leaving the moon alone forever",
              "Establishing a permanent human presence on the moon",
              "Mining the moon for gold to pay off global debt",
              "Blowing up the moon to see what is inside"
            ],
            correct: "Establishing a permanent human presence on the moon",
            explanation: "Paragraph 2 mentions the goal to 'establish a permanent human presence'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Apollo 11 mission was a historic milestone for mankind.",
              "The moon landing served as a key victory in the ideological Cold War.",
              "The moon is now seen as a gateway for missions to Mars and deeper space.",
              "The Apollo mission was filmed on a set in a Hollywood basement.",
              "Neil Armstrong forgot to bring his camera to the moon.",
              "The moon is actually made entirely of green cheese."
            ],
            correct: [
              "The Apollo 11 mission was a historic milestone for mankind.",
              "The moon landing served as a key victory in the ideological Cold War.",
              "The moon is now seen as a gateway for missions to Mars and deeper space."
            ],
            explanation: "These choices capture the historical event, the political context, and the future relevance of the mission."
          }
        ]
      },
      {
        id: 348,
        title: "The Great Wall of China: History and Purpose",
        type: 'historical' as const,
        paragraphs: [
          "The Great Wall of China is a massive series of fortifications spanning thousands of miles. [■] Built primarily across the northern borders of ancient China, the wall was intended to protect the country from invasions by nomadic groups. [■] While the earliest walls were built in the 7th century BCE, the most famous sections were constructed during the Ming Dynasty (1368–1644). [■]",
          "Beyond defense, the Great Wall served as a means of border control, allowing the government to regulate trade and migration. [■] It also functioned as a sophisticated signaling system, with watchtowers used to relay messages via fire and smoke. [■] Today, the Great Wall is a UNESCO World Heritage site and a powerful symbol of China's enduring strength and cultural identity. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was the primary original purpose of the Great Wall of China?",
            options: [
              "To act as a highway for horses",
              "To protect the country from invasions",
              "To serve as a giant tourist attraction",
              "To mark the entrance to a national park"
            ],
            correct: "To protect the country from invasions",
            explanation: "Paragraph 1 states it was intended to 'protect the country from invasions'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How was the Great Wall used for communication?",
            options: [
              "By using giant megaphones between towers",
              "By using watchtowers to relay messages with fire and smoke",
              "By using carrier pigeons that lived in the wall",
              "By installing telephone lines early in the Ming Dynasty"
            ],
            correct: "By using watchtowers to relay messages with fire and smoke",
            explanation: "Paragraph 2 describes how watchtowers relayed messages using fire and smoke signals."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Great Wall was built over many centuries to ensure national security.",
              "It functioned as a multifaceted system for defense, trade, and communication.",
              "The structure remains a globally recognized symbol of Chinese resilience.",
              "The Great Wall was actually built by an ancient alien civilization.",
              "The wall was designed to be seen from the sun without a telescope.",
              "The wall was built entirely out of recycled paper and wood."
            ],
            correct: [
              "The Great Wall was built over many centuries to ensure national security.",
              "It functioned as a multifaceted system for defense, trade, and communication.",
              "The structure remains a globally recognized symbol of Chinese resilience."
            ],
            explanation: "These choices capture the historical evolution, the multiple functions, and the modern legacy of the wall."
          }
        ]
      },
      {
        id: 349,
        title: "The Human Genome Project: Mapping the Blueprint of Life",
        type: 'scientific' as const,
        paragraphs: [
          "The Human Genome Project (HGP), an international scientific research project, successfully sequenced the 3 billion chemical base pairs that make up human DNA. [■] Spanning from 1990 to 2003, it was a massive collaborative effort involving scientists from around the world. [■] The completion of the project provided a reference map for the human genome, offering unprecedented insights into human biology and evolution. [■]",
          "This mapping has revolutionized medicine, enabling the identification of genes associated with various diseases and the development of personalized treatments. [■] It has also opened up new fields of study, such as genomics and bioinformatics, which use computer science to analyze biological data. [■] While the HGP was a monumental achievement, it also raised complex ethical questions regarding genetic privacy and the potential for genetic discrimination. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Approximately how many chemical base pairs were sequenced during the Human Genome Project?",
            options: ["1 million", "100 million", "3 billion", "10 billion"],
            correct: "3 billion",
            explanation: "Paragraph 1 states it sequenced the '3 billion chemical base pairs'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How has the Human Genome Project influenced the field of medicine?",
            options: [
              "It made medicine more expensive and less effective.",
              "It enabled the development of treatments tailored to a person's genetic makeup.",
              "It proved that genes have no impact on health.",
              "It caused doctors to stop using computers in their practice."
            ],
            correct: "It enabled the development of treatments tailored to a person's genetic makeup.",
            explanation: "Paragraph 2 notes it enabled the 'development of personalized treatments'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The HGP was a successful global collaboration to map all human genes.",
              "Results from the project have transformed medical research and clinical care.",
              "The project highlighted the need for ethical guidelines in genetic science.",
              "The human genome was found to be identical to that of a fruit fly.",
              "Mapping the genome has made it impossible for humans to get sick.",
              "The project was primarily funded by a group of international poets."
            ],
            correct: [
              "The HGP was a successful global collaboration to map all human genes.",
              "Results from the project have transformed medical research and clinical care.",
              "The project highlighted the need for ethical guidelines in genetic science."
            ],
            explanation: "These choices cover the project's success, its medical impact, and the resulting ethical considerations."
          }
        ]
      },
      {
        id: 350,
        title: "The Industrialization of Agriculture",
        type: 'academic' as const,
        paragraphs: [
          "The industrialization of agriculture, or 'agribusiness,' has transformed the way food is produced and distributed. [■] Characterized by large-scale monocultures, the intensive use of fertilizers and pesticides, and high levels of mechanization, it has significantly increased global food yields. [■] This shift has made food more affordable and accessible for many people in developed and developing nations. [■]",
          "However, industrial farming also carries environmental and social costs, including soil degradation, water pollution, and the decline of small family farms. [■] There is a growing movement toward sustainable agriculture, which focuses on practices that are more environmentally friendly and socially equitable. [■] Balancing the need for high food production with environmental protection is one of the greatest challenges of the 21st century. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What are some characteristics of industrial agriculture mentioned in the passage?",
            options: [
              "Large-scale monocultures and mechanization",
              "Small-scale organic gardens and hand-weeding",
              "Using only solar power for all equipment",
              "A refusal to use any modern technology"
            ],
            correct: "Large-scale monocultures and mechanization",
            explanation: "Paragraph 1 mentions 'large-scale monocultures' and 'high levels of mechanization'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is an 'environmental cost' of industrial farming?",
            options: [
              "An increase in the price of vegetables",
              "Soil degradation and water pollution",
              "Waiters being paid less in restaurants",
              "People forgot how to cook at home"
            ],
            correct: "Soil degradation and water pollution",
            explanation: "Paragraph 2 lists 'soil degradation' and 'water pollution' as environmental costs."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Agribusiness has prioritized high efficiency and massive food production.",
              "This industrial model has led to significant ecological and social changes.",
              "Modern agriculture is shifting toward more sustainable and equitable methods.",
              "Industrial farming is the only way to grow food in the future.",
              "Small family farms are the primary cause of global water pollution.",
              "Modern tractors are purely decorative and not used for farming."
            ],
            correct: [
              "Agribusiness has prioritized high efficiency and massive food production.",
              "This industrial model has led to significant ecological and social changes.",
              "Modern agriculture is shifting toward more sustainable and equitable methods."
            ],
            explanation: "These choices reflect the methods, the consequences, and the current trends in modern agriculture."
          }
        ]
      },
      {
        id: 351,
        title: "The Great Library of Alexandria",
        type: 'historical' as const,
        paragraphs: [
          "The Library of Alexandria, established in Egypt during the 3rd century BCE, was once the largest and most significant library in the ancient world. [■] It was part of a larger research institution called the Musaeum, dedicated to the Muses, the goddesses of the arts. [■] The library aimed to collect all the world's knowledge, amassing hundreds of thousands of papyrus scrolls in fields such as science, mathematics, literature, and philosophy. [■]",
          "Scholars from across the Mediterranean flocked to Alexandria to study and conduct research, making the city a vibrant center of Hellenistic culture. [■] Unfortunately, the library's eventual decline and destruction remain subjects of historical debate, with various accounts attributing its loss to fires, conquests, or neglect. [■] Despite its disappearance, the legend of the Library of Alexandria continues to symbolize the universal human quest for knowledge and the tragic loss of cultural heritage. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "In which ancient city was the Great Library established?",
            options: ["Rome", "Athens", "Alexandria", "Carthage"],
            correct: "Alexandria",
            explanation: "Paragraph 1 states the library was established in Alexandria during the 3rd century BCE."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What contributed to the status of Alexandria as a center of culture?",
            options: [
              "Its beautiful beaches and sunny weather",
              "The presence of scholars who came to use the library's resources",
              "The fact that it was the only city in Egypt",
              "A global agreement to ban all other cities from having libraries"
            ],
            correct: "The presence of scholars who came to use the library's resources",
            explanation: "The passage notes scholars 'flocked to Alexandria to study and conduct research' at the institution."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Library of Alexandria was an unprecedented intellectual repository of its time.",
              "It functioned as a major hub for research and Hellenistic scholarship.",
              "The loss of the library remains an iconic example of cultural destruction.",
              "The library was destroyed by a giant tsunami in the 1st century.",
              "The collections were primarily made of digital ebooks and tablets.",
              "The library's main goal was to keep knowledge away from common people."
            ],
            correct: [
              "The Library of Alexandria was an unprecedented intellectual repository of its time.",
              "It functioned as a major hub for research and Hellenistic scholarship.",
              "The loss of the library remains an iconic example of cultural destruction."
            ],
            explanation: "These choices reflect the library's historical significance, its role as a research hub, and the symbolism of its loss."
          }
        ]
      },
      {
        id: 352,
        title: "The Physics of Wind Energy",
        type: 'scientific' as const,
        paragraphs: [
          "Wind energy is a form of renewable energy captured from the kinetic energy of air in motion. [■] Wind turbines use giant blades to transform this kinetic energy into mechanical power, which is then converted into electricity by a generator. [■] As a clean and abundant source of energy, wind power is playing an increasingly important role in reducing our reliance on fossil fuels. [■]",
          "While wind energy is environmentally friendly, it also presents challenges, such as its intermittent nature and its impact on local wildlife, particularly birds and bats. [■] Advancements in blade design and storage technology are helping to improve the efficiency and reliability of wind power systems. [■] Off-shore wind farms are another promising development, offering stronger and more consistent winds than land-based sites. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "How do wind turbines generate electricity?",
            options: [
              "By burning the wind as fuel",
              "By converting kinetic energy into mechanical power and then electricity",
              "By attracting lightning during a storm",
              "By spinning so fast they create heat"
            ],
            correct: "By converting kinetic energy into mechanical power and then electricity",
            explanation: "Paragraph 1 describes this transformation process."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is an advantage of 'off-shore' wind farms compared to those on land?",
            options: [
              "They are easier to see from the coast.",
              "The wind is generally stronger and more consistent over the ocean.",
              "They are much cheaper to build because of the water.",
              "They are used primarily as docks for container ships."
            ],
            correct: "The wind is generally stronger and more consistent over the ocean.",
            explanation: "Paragraph 2 notes off-shore sites offer 'stronger and more consistent winds'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Wind energy is a major renewable resource for generating clean electricity.",
              "Technological innovations are improving the reliability of wind power.",
              "Integration of wind energy requires addressing issues of consistency and wildlife impact.",
              "Wind turbines are the primary cause of global temperature increases.",
              "Wind energy was first used only to power giant hair dryers.",
              "The wind on Earth is actually created by the rotation of turbines."
            ],
            correct: [
              "Wind energy is a major renewable resource for generating clean electricity.",
              "Technological innovations are improving the reliability of wind power.",
              "Integration of wind energy requires addressing issues of consistency and wildlife impact."
            ],
            explanation: "These choices capture the potential, the technical progress, and the ecological considerations of wind power."
          }
        ]
      },
      {
        id: 353,
        title: "The Roman Colosseum: Architecture and Spectacle",
        type: 'historical' as const,
        paragraphs: [
          "The Roman Colosseum, completed in 80 AD, is an iconic amphitheater in the center of ancient Rome. [■] It was the largest structure of its kind ever built and was used primarily for public spectacles, such as gladiator contests and animal hunts. [■] The Colosseum's sophisticated design included a complex system of vaults and arches, as well as a retractable awning known as a velarium to shade spectators. [■]",
          "Below the arena floor was the hypogeum, a network of tunnels and cages used to hold gladiators and animals before they were lifted into the arena via trapdoors. [■] While it fell into disuse in the early medieval period, the Colosseum remains a powerful symbol of the Roman Empire's architectural prowess and its complex social and cultural values. [■] Today, it is one of the world's most popular tourist attractions and a symbol of Italian heritage. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "When was the Roman Colosseum completed?",
            options: ["80 AD", "100 BC", "1500 AD", "2026 AD"],
            correct: "80 AD",
            explanation: "Paragraph 1 states it was completed in 80 AD."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the purpose of the 'hypogeum' in the Colosseum?",
            options: [
              "A place for the Emperor to sleep",
              "A network of tunnels to hold gladiators and animals",
              "A giant kitchen to feed all the spectators",
              "A swimming pool for naval battle simulations"
            ],
            correct: "A network of tunnels to hold gladiators and animals",
            explanation: "Paragraph 2 describes the hypogeum as a 'network of tunnels and cages' for this purpose."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Colosseum was a premier venue for massive public entertainments in Rome.",
              "Its construction featured advanced engineering like the velarium and vaults.",
              "The amphitheater stands as a enduring monument to Roman cultural life.",
              "The Colosseum was originally built to be the world's largest library.",
              "Rome was the only city in the world with a stadium in 80 AD.",
              "Gladiators were actually professional dancers who never fought."
            ],
            correct: [
              "The Colosseum was a premier venue for massive public entertainments in Rome.",
              "Its construction featured advanced engineering like the velarium and vaults.",
              "The amphitheater stands as a enduring monument to Roman cultural life."
            ],
            explanation: "These choices capture the function, the architectural innovation, and the cultural legacy of the Colosseum."
          }
        ]
      },
      {
        id: 354,
        title: "The Industrial Revolution in the United States",
        type: 'historical' as const,
        paragraphs: [
          "The Industrial Revolution in the United States followed Britain's lead but developed its own unique characteristics. [■] Spurred by the availability of vast natural resources and a rapidly growing population, the U.S. transitioned from a rural, agricultural society to an urban, industrial one during the 19th century. [■] Key innovations included the cotton gin, which revolutionized the textile industry, and the development of the steam locomotive. [■]",
          "The growth of railroads was particularly significant, creating a national market and facilitating the movement of goods and people across the vast continent. [■] While industrialization led to unprecedented economic growth, it also created social tensions, particularly regarding labor rights and the expansion of slavery in the South. [■] The American Industrial Revolution laid the groundwork for the U.S. to emerge as the world's leading industrial power by the early 20th century. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What were two key innovations that spurred the American Industrial Revolution?",
            options: ["The printing press and the telescope", "The cotton gin and the steam locomotive", "The airplane and the telephone", "The internet and the cell phone"],
            correct: "The cotton gin and the steam locomotive",
            explanation: "Paragraph 1 identifies these two innovations."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why were railroads so important for the development of the United States?",
            options: [
              "They allowed people to travel in circles for fun.",
              "They created a national market and made massive trade possible across the country.",
              "They were the only way people could move to Canada.",
              "They were used primarily for racing against horses."
            ],
            correct: "They created a national market and made massive trade possible across the country.",
            explanation: "Paragraph 2 nodes they created a 'national market' and facilitated movement of goods."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The U.S. industrial shift was powered by natural wealth and demographic growth.",
              "Transportation breakthroughs, especially railroads, unified the national economy.",
              "Industrialization brought immense prosperity but also deep social conflicts.",
              "The cotton gin was invented by a group of British farmers in Georgia.",
              "The United States refused to use steam technology until the year 1900.",
              "Most people in the 19th century preferred to travel by boat across the desert."
            ],
            correct: [
              "The U.S. industrial shift was powered by natural wealth and demographic growth.",
              "Transportation breakthroughs, especially railroads, unified the national economy.",
              "Industrialization brought immense prosperity but also deep social conflicts."
            ],
            explanation: "These choices cover the drivers of change, the role of transportation, and the complex societal results."
          }
        ]
      },
      {
        id: 355,
        title: "Sustainable Urban Planning: Cities of Tomorrow",
        type: 'academic' as const,
        paragraphs: [
          "With more than half of the world's population now living in cities, sustainable urban planning has become a critical priority for the 21st century. [■] This approach seeks to design urban spaces that minimize environmental impact while maximizing social well-being and economic efficiency. [■] Key strategies include developing efficient public transportation systems, creating green spaces, and promoting high-density mixed-use developments. [■]",
          "Sustainable cities also prioritize energy efficiency through the use of renewable energy sources and green building designs that minimize waste. [■] Furthermore, inclusive planning ensures that all residents, regardless of income, have access to essential services and affordable housing. [■] By integrating ecological and social considerations, sustainable urban planning aims to create resilient cities that can thrive. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Approximately what portion of the world's population currently lives in cities?",
            options: ["Less than 10%", "Exactly 25%", "More than 50%", "Nearly 90%"],
            correct: "More than 50%",
            explanation: "Paragraph 1 states 'more than half of the world's population now living in cities'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why is 'inclusive planning' considered a part of sustainable development?",
            options: [
              "Because it helps ensure all residents have access to housing and services.",
              "Because it makes the city look more modern.",
              "Because it reduces the need for electricity.",
              "Because it prevents people from moving out of the city."
            ],
            correct: "Because it helps ensure all residents have access to housing and services.",
            explanation: "Paragraph 2 states inclusive planning ensures access to 'essential services and affordable housing'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Sustainable urban planning focuses on balancing environment, society, and economy.",
              "Strategies include green spaces, efficient transit, and energy management.",
              "The goal is to create resilient and inclusive cities for a changing global culture.",
              "Sustainable cities aim to ban all forms of personal transportation.",
              "Planning focuses mainly on building the tallest skyscrapers possible.",
              "Urban planning is only relevant for cities with fewer than 1000 people."
            ],
            correct: [
              "Sustainable urban planning focuses on balancing environment, society, and economy.",
              "Strategies include green spaces, efficient transit, and energy management.",
              "The goal is to create resilient and inclusive cities for a changing global culture."
            ],
            explanation: "These choices cover the multi-disciplinary goals, the specific strategies, and the ultimate vision of sustainable cities."
          }
        ]
      },
      {
        id: 356,
        title: "The History of the Olympic Games",
        type: 'historical' as const,
        paragraphs: [
          "The Olympic Games originated in ancient Greece as a religious and athletic festival held every four years in honor of Zeus. [■] The games featured events like running, wrestling, and chariot racing, with victors receiving a simple olive wreath as a symbol of honor. [■] The ancient Olympics were not just about sport; they also promoted a period of peace among the often-warring Greek city-states. [■]",
          "The modern Olympic Games were revived in 1896 by Pierre de Coubertin, who envisioned them as a way to promote international understanding and friendship through sport. [■] Today, the Olympics are a massive global event featuring thousands of athletes from almost every nation on Earth. [■] While the games have evolved significantly over time, they continue to celebrate the human spirit and the pursuit of excellence. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who were the ancient Olympic Games held to honor?",
            options: ["Apollo", "Zeus", "Athena", "Poseidon"],
            correct: "Zeus",
            explanation: "Paragraph 1 states the games were in honor of Zeus."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the primary goal of the 'modern' Olympic revival according to de Coubertin?",
            options: [
              "To see which country had the fastest runners",
              "To promote international understanding and friendship",
              "To sell more sports equipment",
              "To decide who the next King of Greece should be"
            ],
            correct: "To promote international understanding and friendship",
            explanation: "Paragraph 2 notes it was revived as a way to 'promote international understanding and friendship'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Olympics began as a sacred tradition centered on athletic competition.",
              "The modern games strive to foster global unity and sportsmanship.",
              "The event has grown into a premier worldwide spectacle of human performance.",
              "Ancient athletes were given giant bags of gold for winning a race.",
              "The games were originally designed to train soldiers for future wars.",
              "The Olympics have been held every single year since 776 BC."
            ],
            correct: [
              "The Olympics began as a sacred tradition centered on athletic competition.",
              "The modern games strive to foster global unity and sportsmanship.",
              "The event has grown into a premier worldwide spectacle of human performance."
            ],
            explanation: "These choices track the origins, the modern ideals, and the current scale of the Olympics."
          }
        ]
      },
      {
        id: 357,
        title: "The Physics of Tidal Energy",
        type: 'scientific' as const,
        paragraphs: [
          "Tidal energy is a form of hydropower that converts the energy obtained from tides into useful forms of power, mainly electricity. [■] Unlike solar or wind energy, tidal power is highly predictable, as the tides follow the regular cycles of the moon and sun. [■] There are several ways to capture tidal energy, including tidal barrages (dams) and tidal turbines that function like underwater wind turbines. [■]",
          "While tidal energy is a clean and renewable resource, it also has environmental challenges, such as its impact on marine life and the potential to disrupt local coastal ecosystems. [■] Construction costs for tidal power projects can also be high. [■] However, as technology improves and the need for renewable energy grows, tidal power is being explored as a viable part of a sustainable energy future. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What makes tidal energy more predictable than solar or wind power?",
            options: [
              "It is controlled by humans with a switch.",
              "The tides follow regular cycles of the moon and sun.",
              "The water moves faster than the air.",
              "It only happens during the daytime."
            ],
            correct: "The tides follow regular cycles of the moon and sun.",
            explanation: "Paragraph 1 notes tidal power is 'highly predictable' due to the moon and sun's regular cycles."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is a potential environmental concern regarding tidal power?",
            options: [
              "It causes the ocean to become too warm.",
              "It can disrupt local coastal ecosystems and marine life.",
              "It leads to a decrease in the amount of salt in the water.",
              "It makes the waves too small for surfing."
            ],
            correct: "It can disrupt local coastal ecosystems and marine life.",
            explanation: "Paragraph 2 mentions 'impact on marine life and the potential to disrupt local coastal ecosystems'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Tidal energy offers a constant and reliable source of renewable electricity.",
              "Various mechanical systems are used to extract energy from the sea's movement.",
              "Ecological and economic hurdles must be overcome for its wider adoption.",
              "Tidal power is created by the movement of giant fish in the sea.",
              "Tidal turbines are the most dangerous machines ever invented by man.",
              "The moon would eventually stop moving if we used too much tidal energy."
            ],
            correct: [
              "Tidal energy offers a constant and reliable source of renewable electricity.",
              "Various mechanical systems are used to extract energy from the sea's movement.",
              "Ecological and economic hurdles must be overcome for its wider adoption."
            ],
            explanation: "These choices reflect the benefits, the methods, and the challenges of tidal energy."
          }
        ]
      },
      {
        id: 358,
        title: "The Wright Brothers and the Birth of Aviation",
        type: 'historical' as const,
        paragraphs: [
          "On December 17, 1903, Orville and Wilbur Wright achieved the first controlled, powered, and sustained flight of a heavier-than-air aircraft. [■] Conducted at Kitty Hawk, North Carolina, the flight lasted only 12 seconds and covered 120 feet, but it fundamentally changed the world. [■] Unlike other inventors, the Wright brothers focused on the problem of control, developing a system called 'wing-warping' to steer the plane. [■]",
          "Following their initial success, the brothers continued to refine their designs, leading to the development of practical airplanes that could stay in the air for extended periods. [■] Aviation quickly evolved, playing a major role in World War I and eventually revolutionizing global travel and commerce. [■] The Wright brothers' engineering genius laid the foundation for the entire aerospace industry. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Where did the Wright brothers' first flight take place?",
            options: ["Dayton, Ohio", "Kitty Hawk, North Carolina", "Paris, France", "London, England"],
            correct: "Kitty Hawk, North Carolina",
            explanation: "Paragraph 1 states it took place at 'Kitty Hawk, North Carolina'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the most significant technical contribution of the Wright brothers to aviation?",
            options: [
              "Inventing the first gas engine",
              "Focusing on and solving the problem of flight control",
              "Designing a plane that looked like a bird",
              "Making the first plane entirely out of metal"
            ],
            correct: "Focusing on and solving the problem of flight control",
            explanation: "The passage notes they 'focused on the problem of control'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Wright brothers' 1903 flight proved that powered flight was possible.",
              "Their emphasis on steering and control was a critical turning point for aircraft.",
              "Their work sparked a global revolution in transportation and technology.",
              "The first flight lasted for over three hours and reached 10,000 feet.",
              "The Wright brothers were primarily famous for their work as professional sailors.",
              "The first airplane was powered by high-quality coal and steam."
            ],
            correct: [
              "The Wright brothers' 1903 flight proved that powered flight was possible.",
              "Their emphasis on steering and control was a critical turning point for aircraft.",
              "Their work sparked a global revolution in transportation and technology."
            ],
            explanation: "These choices track the achievement, the technical innovation, and the global legacy of the Wright brothers."
          }
        ]
      },
      {
        id: 359,
        title: "The Panama Canal: History and Engineering",
        type: 'historical' as const,
        paragraphs: [
          "The Panama Canal is a 50-mile artificial waterway that connects the Atlantic and Pacific Oceans. [■] Completed in 1914 by the United States, it fundamentally transformed global shipping by allowing ships to avoid the long and dangerous journey around the southern tip of South America. [■] The construction was one of the largest and most difficult engineering projects ever undertaken. [■]",
          "Building the canal involved overcoming major challenges, including excavating millions of cubic yards of earth and dealing with tropical diseases like yellow fever and malaria. [■] The canal uses a system of locks to lift ships 85 feet above sea level to the Gatún Lake and then lowers them back down. [■] Today, the Panama Canal remains a vital artery of world trade, handling thousands of ships each year. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What two oceans does the Panama Canal connect?",
            options: [
              "Atlantic and Indian Oceans",
              "Atlantic and Pacific Oceans",
              "Pacific and Arctic Oceans",
              "Indian and Arctic Oceans"
            ],
            correct: "Atlantic and Pacific Oceans",
            explanation: "Paragraph 1 states it connects the Atlantic and Pacific Oceans."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why was the Panama Canal so important for global trade?",
            options: [
              "It provided a shortcut that saved time and was safer than going around South America.",
              "It was the only place in the world where ships could be cleaned.",
              "It was a popular tourist spot for sailors to take vacations.",
              "It allowed ships to travel underwater for short periods."
            ],
            correct: "It provided a shortcut that saved time and was safer than going around South America.",
            explanation: "The passage notes it allowed ships to avoid 'the long and dangerous journey around the southern tip of South America'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Panama Canal is a historic achievement in engineering and logistics.",
              "The project required massive earthmoving and the overcoming of disease.",
              "The canal's system of locks is essential for its function as a global shortcut.",
              "The canal was originally built to be a massive swimming pool for giants.",
              "Panama was once an island before the canal was built.",
              "The canal is now primarily used for naval battle recreations."
            ],
            correct: [
              "The Panama Canal is a historic achievement in engineering and logistics.",
              "The project required massive earthmoving and the overcoming of disease.",
              "The canal's system of locks is essential for its function as a global shortcut."
            ],
            explanation: "These choices reflect the importance, the challenges, and the mechanics of the Panama Canal."
          }
        ]
      },
      {
        id: 360,
        title: "The Physics of Geothermal Energy",
        type: 'scientific' as const,
        paragraphs: [
          "Geothermal energy is heat derived from the Earth's interior. [■] This energy can be captured from hot water and steam found near tectonic plate boundaries or volcanic hotspots. [■] Geothermal power plants use this steam to turn turbines and generate electricity, while geothermal heat pumps can be used for residential heating and cooling. [■]",
          "As a clean and constant source of power, geothermal energy has a small environmental footprint compared to fossil fuels. [■] However, its use is currently limited to certain geographical regions where the Earth's heat is easily accessible. [■] Advancements in drilling technology, such as Enhanced Geothermal Systems (EGS), are being developed to tap into deeper heat sources, potentially expanding the reach of this renewable resource. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What is a current limitation of geothermal energy use?",
            options: [
              "It is too expensive to use in houses.",
              "It is only available in specific geographical regions.",
              "It creates too much air pollution.",
              "It causes the Earth to cool down too quickly."
            ],
            correct: "It is only available in specific geographical regions.",
            explanation: "Paragraph 2 states its use is 'limited to certain geographical regions'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the goal of Enhanced Geothermal Systems (EGS)?",
            options: [
              "To make volcanoes erupt more frequently",
              "To tap into deeper and more widespread heat sources",
              "To make geothermal energy available in outer space",
              "To use hot water to power old steam engines"
            ],
            correct: "To tap into deeper and more widespread heat sources",
            explanation: "Paragraph 2 nodes EGS is used to 'tap into deeper heat sources'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Geothermal energy utilizes the natural heat from beneath the Earth's surface.",
              "It provides a reliable and environmentally friendly alternative to traditional fuel.",
              "Future growth depends on new technology that can access deeper thermal energy.",
              "Geothermal power is the primary cause of major volcanic eruptions.",
              "Heat from the Earth was first discovered by people looking for gold.",
              "Geothermal energy is only useful for heating swimming pools."
            ],
            correct: [
              "Geothermal energy utilizes the natural heat from beneath the Earth's surface.",
              "It provides a reliable and environmentally friendly alternative to traditional fuel.",
              "Future growth depends on new technology that can access deeper thermal energy."
            ],
            explanation: "These choices reflect the source, the benefits, and the future potential of geothermal energy."
          }
        ]
      },
      {
        id: 361,
        title: "The Great Wall of Giza: The Great Pyramid",
        type: 'historical' as const,
        paragraphs: [
          "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex. [■] Completed around 2560 BCE as a tomb for the Pharaoh Khufu, it was the tallest man-made structure in the world for over 3,800 years. [■] The pyramid's construction involved the transport of millions of massive limestone and granite blocks, a monumental task that continues to fascinate engineers and historians. [■]",
          "While it was originally covered in smooth white casing stones, most of these have been removed over the centuries. [■] The internal structure of the Great Pyramid is incredibly complex, featuring a series of chambers and passages, including the King's and Queen's Chambers. [■] As the only surviving member of the Seven Wonders of the Ancient World, the Great Pyramid remains a testament to ancient Egyptian engineering and religious belief. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who was the Great Pyramid of Giza built as a tomb for?",
            options: ["Tutankhamun", "Khufu", "Ramses II", "Cleopatra"],
            correct: "Khufu",
            explanation: "Paragraph 1 states it was built as a tomb for Pharaoh Khufu."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What makes the Great Pyramid unique among the Seven Wonders of the Ancient World?",
            options: [
              "It is the only one that was ever built in Egypt.",
              "It is the only one that still exists today.",
              "It is the only one made entirely of gold.",
              "It is the only one that was built underwater."
            ],
            correct: "It is the only one that still exists today.",
            explanation: "Paragraph 2 calls it the 'only surviving member of the Seven Wonders cornerstones'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Great Pyramid was an unprecedented feat of ancient construction and precision.",
              "Its scale and complexity reflect the power and spiritual focus of Egyptian royalty.",
              "It stands as the last remaining structure of the original Seven Wonders.",
              "The pyramid was originally painted neon blue to be seen from the stars.",
              "Khufu's tomb was built in just one month using only wooden tools.",
              "The pyramids were once used as giant storage containers for grain."
            ],
            correct: [
              "The Great Pyramid was an unprecedented feat of ancient construction and precision.",
              "Its scale and complexity reflect the power and spiritual focus of Egyptian royalty.",
              "It stands as the last remaining structure of the original Seven Wonders."
            ],
            explanation: "These choices capture the structural achievement, the cultural significance, and the historical endurance of the pyramid."
          }
        ]
      },
      {
        id: 362,
        title: "The Renaissance and the Rebirth of Art",
        type: 'historical' as const,
        paragraphs: [
          "The Renaissance, meaning 'rebirth,' was a period of intense cultural and artistic creativity in Europe between the 14th and 17th centuries. [■] Highly influenced by the ideals of humanism, the movement saw a renewed interest in the classical art and philosophy of ancient Greece and Rome. [■] Artists like Leonardo da Vinci and Michelangelo revolutionized art by using techniques like linear perspective and a focus on human anatomy. [■]",
          "The Renaissance was also a time of scientific discovery and global exploration, with individuals like Copernicus and Galileo challenging traditional views of the universe. [■] The movement started in Italy but quickly spread across Europe, profoundly influencing the development of the modern world. [■] The Renaissance legacy continues to shape Western art, science, and education today. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What does the word 'Renaissance' mean?",
            options: ["The End", "Rebirth", "New Discovery", "Golden Age"],
            correct: "Rebirth",
            explanation: "Paragraph 1 states'Renaissance' means 'rebirth'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did Renaissance artists change the way art was created?",
            options: [
              "By using computer-aided design",
              "By focusing on linear perspective and human anatomy",
              "By using only two colors in all their paintings",
              "By making art as small as possible so nobody could see it"
            ],
            correct: "By focusing on linear perspective and human anatomy",
            explanation: "Paragraph 1 mention these techniques as revolutionary."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Renaissance was a transition from the Middle Ages to modernity.",
              "The movement prioritized human achievement and the rediscovery of classical ideals.",
              "Innovation in art and science during this era rebuilt the Western worldview.",
              "The Renaissance was entirely about making better recipes for pasta.",
              "Michelangelo was the first person to travel all the way around the world.",
              "The movement was strictly limited to the city of Florence."
            ],
            correct: [
              "The Renaissance was a transition from the Middle Ages to modernity.",
              "The movement prioritized human achievement and the rediscovery of classical ideals.",
              "Innovation in art and science during this era rebuilt the Western worldview."
            ],
            explanation: "These choices reflect the broader scope, the core values, and the impact of the Renaissance."
          }
        ]
      },
      {
        id: 363,
        title: "The Invention and Evolution of the Telescope",
        type: 'historical' as const,
        paragraphs: [
          "The telescope, an instrument that permits the observation of distant objects by collecting electromagnetic radiation, was invented in the early 17th century. [■] Dutch spectacle-maker Hans Lippershey is often credited with the first patent, though many scholars believe others may have developed similar devices earlier. [■] The invention revolutionized navigation and warfare, but its most profound impact was in the field of astronomy. [■]",
          "Galileo Galilei was the first to use the telescope to systematically observe the heavens, discovering the moons of Jupiter and the phases of Venus. [■] Over the centuries, the telescope evolved from simple refracting lenses to massive reflecting mirrors, culminating in space-based observatories. [■] Each advancement has allowed humanity to peer deeper into the cosmos, fundamentally changing our place in the universe. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "In which century was the telescope invented?",
            options: ["15th century", "16th century", "17th century", "18th century"],
            correct: "17th century",
            explanation: "Paragraph 1 states the telescope 'was invented in the early 17th century'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was Galileo's primary contribution to the history of the telescope?",
            options: [
              "He was the pertama to sell telescopes as toys.",
              "He used the instrument to make systematic astronomical discoveries.",
              "He invented the first space telescope.",
              "He argued that telescopes were too dangerous to use."
            ],
            correct: "He used the instrument to make systematic astronomical discoveries.",
            explanation: "Paragraph 2 notes Galileo 'was the first to use the telescope to systematically observe the heavens'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The telescope's invention catalyzed a major shift in how humans view the universe.",
              "Early development involved Dutch inventors and Italian observers like Galileo.",
              "Technical improvements led to larger and eventually space-based observatories.",
              "The first telescope was capable of seeing other galaxies in full color.",
              "Telescopes were primarily used for hunting animals in the 1600s.",
              "The mirror-based telescope was invented by Hans Lippershey."
            ],
            correct: [
              "The telescope's invention catalyzed a major shift in how humans view the universe.",
              "Early development involved Dutch inventors and Italian observers like Galileo.",
              "Technical improvements led to larger and eventually space-based observatories."
            ],
            explanation: "These choices reflect the impact, the early history, and the evolution of the telescope."
          }
        ]
      },
      {
        id: 364,
        title: "Enzymes: The Biological Catalysts of Life",
        type: 'scientific' as const,
        paragraphs: [
          "Enzymes are specialized proteins that act as biological catalysts, accelerating chemical reactions within living organisms without being consumed in the process. [■] They function by lowering the activation energy required for a reaction to occur, allowing vital processes to happen at the speed of life. [■] Each enzyme is highly specific, typically interacting with only one particular substrate to facilitate a specific reaction. [■]",
          "The activity of enzymes can be influenced by several factors, including temperature, pH levels, and the concentration of substrates. [■] If the environment becomes too extreme, the enzyme may lose its shape and functionality, a process known as denaturation. [■] Understanding enzyme kinetics is crucial for fields ranging from medicine, where drugs often target specific enzymes, to the food industry. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What type of biological molecule are enzymes?",
            options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"],
            correct: "Proteins",
            explanation: "Paragraph 1 defines enzymes as 'specialized proteins'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What happens when an enzyme undergoes 'denaturation'?",
            options: [
              "It becomes more active and faster.",
              "It changes its color to attract more substrates.",
              "It loses its functional shape and can no longer work.",
              "It splits into two smaller enzymes."
            ],
            correct: "It loses its functional shape and can no longer work.",
            explanation: "Paragraph 2 states denaturation involves an enzyme losing 'its shape and functionality'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Enzymes are essential proteins that act as efficient biological catalysts.",
              "They lower reaction thresholds and show high specificity for their substrates.",
              "External conditions like pH and heat directly impact the effectiveness of enzymes.",
              "All enzymes are produced only in the human brain.",
              "Enzymes are consumed and destroyed after every single reaction.",
              "The discovery of enzymes proved that biology does not follow the laws of physics."
            ],
            correct: [
              "Enzymes are essential proteins that act as efficient biological catalysts.",
              "They lower reaction thresholds and show high specificity for their substrates.",
              "External conditions like pH and heat directly impact the effectiveness of enzymes."
            ],
            explanation: "These choices capture the definition, the mechanism, and the regulation of enzymes."
          }
        ]
      },
      {
        id: 365,
        title: "The Great Depression: A Global Economic Crisis",
        type: 'historical' as const,
        paragraphs: [
          "The Great Depression was a severe worldwide economic downturn that began in 1929 and lasted through most of the 1930s. [■] Triggered by the 1929 stock market crash in the United States, the crisis quickly spread to other nations due to the interconnectedness of the global economy. [■] Millions of people lost their jobs, banks failed, and international trade plummeted, leading to widespread poverty and social unrest. [■]",
          "In response, governments around the world implemented various recovery programs, such as the New Deal in the United States, which focused on relief, recovery, and reform. [■] The depression fundamentally changed the role of government in the economy, establishing the idea that the state has a responsibility to maintain economic stability. [■] While the mobilization for World War II eventually ended the crisis, the legacy of the Great Depression continues to influence economic policy today. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which event is credited with triggering the Great Depression?",
            options: ["World War I", "The invention of the internet", "The 1929 stock market crash", "The gold rush of 1849"],
            correct: "The 1929 stock market crash",
            explanation: "Paragraph 1 states it was 'Triggered by the 1929 stock market crash'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did the Great Depression change the perceived role of government?",
            options: [
              "It led to governments becoming completely uninvolved in the economy.",
              "It established that governments should ensure economic stability for citizens.",
              "It made people want to abolish all forms of government.",
              "It proved that governments were responsible for the weather."
            ],
            correct: "It established that governments should ensure economic stability for citizens.",
            explanation: "The passage notes it established the idea 'that the state has a responsibility to maintain economic stability'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Great Depression was a decade-long period of deep international economic hardship.",
              "The crisis resulted in massive unemployment and systemic bank failures.",
              "Governmental intervention and social safety nets became a lasting outcome of the crisis.",
              "The depression was caused by a shortage of physical paper for money.",
              "Most people during the 1930s became wealthy by investing in foreign stocks.",
              "The Great Depression was the shortest economic event in history, lasting only 2 days."
            ],
            correct: [
              "The Great Depression was a decade-long period of deep international economic hardship.",
              "The crisis resulted in massive unemployment and systemic bank failures.",
              "Governmental intervention and social safety nets became a lasting outcome of the crisis."
            ],
            explanation: "These choices reflect the scale, the immediate impact, and the long-term policy shifts."
          }
        ]
      },
      {
        id: 366,
        title: "The Physics of Sound and Its Propagation",
        type: 'scientific' as const,
        paragraphs: [
          "Sound is a mechanical wave that results from the vibration of particles in a medium, such as air, water, or solids. [■] These vibrations create regions of compression and rarefaction that travel through the medium as longitudinal waves. [■] The speed of sound depends on the properties of the medium, traveling faster in solids than in liquids, and faster in liquids than in gases. [■]",
          "The frequency of a sound wave determines its pitch, while the amplitude dictates its loudness, measured in decibels. [■] Humans can typically hear sounds within a frequency range of 20 Hz to 20,000 Hz, though this range decreases with age. [■] Understanding the physics of sound is essential for diverse applications, including acoustic engineering, medical ultrasound, and the design of musical instruments. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "In which of the following media does sound typically travel the fastest?",
            options: ["Gases", "Liquids", "Solids", "Vacuum"],
            correct: "Solids",
            explanation: "Paragraph 1 states sound travels 'faster in solids than in liquids, and faster in liquids than in gases'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What physical property of a sound wave is associated with how high or low it sounds?",
            options: ["Amplitude", "Frequency", "Color", "Weight"],
            correct: "Frequency",
            explanation: "Paragraph 2 nodes 'The frequency of a sound wave determines its pitch'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Sound is a vibration transmitted through a medium as a longitudinal wave.",
              "The velocity of sound is highly dependent on the density and state of the medium.",
              "The characteristics of pitch and volume are defined by wave frequency and amplitude.",
              "Sound waves can travel through the empty vacuum of space.",
              "Humans can hear sounds at frequencies of up to 1 million Hz.",
              "Loudness is primarily measured in kilograms."
            ],
            correct: [
              "Sound is a vibration transmitted through a medium as a longitudinal wave.",
              "The velocity of sound is highly dependent on the density and state of the medium.",
              "The characteristics of pitch and volume are defined by wave frequency and amplitude."
            ],
            explanation: "These choices cover the nature of sound, its speed, and its perceptual properties."
          }
        ]
      },
      {
        id: 367,
        title: "The Architecture and Symbolism of the Taj Mahal",
        type: 'historical' as const,
        paragraphs: [
          "The Taj Mahal, located in Agra, India, is widely considered one of the most beautiful buildings in the world. [■] Commissioned in 1632 by the Mughal Emperor Shah Jahan, it was built as a mausoleum for his favorite wife, Mumtaz Mahal. [■] The structure is a masterpiece of Mughal architecture, blending elements from Islamic, Persian, and Indian styles. [■]",
          "Constructed primarily of white marble and adorned with intricate carvings and semi-precious stones, the Taj Mahal is renowned for its perfect symmetry and its reflecting pool. [■] The complex also includes a mosque, a guest house, and extensive gardens, all intended to represent an earthly paradise. [■] Today, the Taj Mahal is a UNESCO World Heritage site and a poignant symbol of eternal love. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which Emperor commissioned the construction of the Taj Mahal?",
            options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
            correct: "Shah Jahan",
            explanation: "Paragraph 1 credits Mughal Emperor Shah Jahan with the commission in 1632."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the broader symbolic intent of the Taj Mahal complex?",
            options: [
              "To serve as a defensive fortress for the capital city",
              "To represent an earthly version of paradise",
              "To provide a central market for the city's traders",
              "To celebrate the Emperor's victory in a major war"
            ],
            correct: "To represent an earthly version of paradise",
            explanation: "Paragraph 2 notes that the gardens and buildings were 'all intended to represent an earthly paradise'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Taj Mahal is a premier example of the synthesis in Mughal architecture.",
              "It was established as an grand mausoleum and a testament to marital devotion.",
              "The site is celebrated for its precise symmetry and elaborate marble work.",
              "The Taj Mahal was originally painted pink but faded over time.",
              "The building was constructed entirely by a group of Greek architects.",
              "It was a military base used to launch attacks on neighboring kingdoms."
            ],
            correct: [
              "The Taj Mahal is a premier example of the synthesis in Mughal architecture.",
              "It was established as an grand mausoleum and a testament to marital devotion.",
              "The site is celebrated for its precise symmetry and elaborate marble work."
            ],
            explanation: "These choices reflect the architectural style, the purpose, and the visual character of the Taj Mahal."
          }
        ]
      },
      {
        id: 368,
        title: "The Race to the South Pole: Amundsen and Scott",
        type: 'historical' as const,
        paragraphs: [
          "In the early 20th century, the 'Heroic Age of Antarctic Exploration' saw two rival expeditions racing to be the first to reach the South Pole. [■] Roald Amundsen, a Norwegian explorer, led one team, while Captain Robert Falcon Scott led the British team. [■] Both expeditions faced extreme cold, dangerous crevasses, and the logistical challenges of hauling supplies across the snowy wilderness. [■]",
          "Amundsen’s team successfully reached the South Pole on December 14, 1911, using skis and sled dogs to maintain a rapid pace. [■] Scott’s team arrived 33 days later, only to find the Norwegian flag already planted; tragically, Scott and his companions perished on the return journey. [■] Despite the tragedy, both expeditions provided valuable scientific data about the frozen continent and remain legendary examples of human endurance. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "On what date did Roald Amundsen's team reach the South Pole?",
            options: ["December 14, 1911", "January 17, 1912", "December 25, 1910", "July 4, 1912"],
            correct: "December 14, 1911",
            explanation: "Paragraph 2 states Amundsen's team reached the pole on December 14, 1911."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a key factor in Amundsen's success compared to Scott's team?",
            options: [
              "They used a secret underwater tunnel.",
              "They used skis and sled dogs to travel more effectively.",
              "They flew to the pole in early airplanes.",
              "They had much warmer weather than the British team."
            ],
            correct: "They used skis and sled dogs to travel more effectively.",
            explanation: "The passage notes they 'successfully reached the South Pole... using skis and sled dogs to maintain a rapid pace'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The early 1900s featured a legendary competition for Antarctic discovery.",
              "Amundsen's strategic use of equipment led him to the pole first.",
              "The British expedition ended in tragedy but contributed to Antarctic science.",
              "Robert Scott won the race and returned safely to London.",
              "The South Pole was discovered by a team of researchers using satellites.",
              "The expeditions were primarily looking for a new source of tropical fruit."
            ],
            correct: [
              "The early 1900s featured a legendary competition for Antarctic discovery.",
              "Amundsen's strategic use of equipment led him to the pole first.",
              "The British expedition ended in tragedy but contributed to Antarctic science."
            ],
            explanation: "These choices track the competition, the Norwegian victory, and the British legacy."
          }
        ]
      },
      {
        id: 369,
        title: "The Biological Mechanisms of Aging",
        type: 'scientific' as const,
        paragraphs: [
          "Aging is a complex biological process characterized by the gradual decline of physiological functions and an increased vulnerability to disease. [■] Scientists believe that aging is caused by a combination of genetic, environmental, and physiological factors. [■] One prominent theory is the telomere theory, which suggests that the shortening of protective caps on chromosomes limits the number of times a cell can divide. [■]",
          "Another key factor is oxidative stress, caused by the accumulation of free radicals that damage cellular components over time. [■] While the aging process is inevitable, research into cellular repair, nutrition, and genetics continues to explore ways to extend 'healthspan'. [■] Understanding the biology of aging is critical as global populations continue to live longer. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "According to the passage, what are 'telomeres'?",
            options: [
              "Specialized cells that fight infections",
              "Protective caps on the ends of chromosomes",
              "Enzymes that digest proteins in the stomach",
              "Hormones that regulate sleep cycles"
            ],
            correct: "Protective caps on the ends of chromosomes",
            explanation: "Paragraph 1 describes telomeres as 'protective caps on chromosomes'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the primary goal of modern aging research mentioned in the text?",
            options: [
              "To find a way to stop humans from ever aging",
              "To extend the period of life spent in good health (healthspan)",
              "To prove that aging is not a biological process",
              "To make people age faster in a controlled environment"
            ],
            correct: "To extend the period of life spent in good health (healthspan)",
            explanation: "The passage notes researchers explore ways to 'extend \"healthspan\"—the period of life spent in good health'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Aging involves the progressive loss of biological efficiency over time.",
              "The theories of telomere shortening and oxidative stress explain cellular decline.",
              "Current research focuses on improving the quality of long-term survival.",
              "Telomeres grow longer as humans get older.",
              "Aging is solely caused by the amount of sleep a person gets.",
              "Free radicals are beneficial particles that prevent cellular damage."
            ],
            correct: [
              "Aging involves the progressive loss of biological efficiency over time.",
              "The theories of telomere shortening and oxidative stress explain cellular decline.",
              "Current research focuses on improving the quality of long-term survival."
            ],
            explanation: "These choices cover the definition, the mechanisms, and the research focus on aging."
          }
        ]
      },
      {
        id: 370,
        title: "Morse Code: The Language of the Telegraph",
        type: 'historical' as const,
        paragraphs: [
          "Morse code is a system of representing letters, numbers, and punctuation using a series of dots and dashes, or short and long clicks. [■] Developed in the 1830s by Samuel Morse and Alfred Vail, it was the primary language of the electric telegraph. [■] This invention revolutionized long-distance communication, allowing messages to be sent across continents and oceans in minutes rather than weeks. [■]",
          "Morse code was extensively used by the military, maritime industries, and railway systems for over a century. [■] Its most famous signal, SOS (three dots, three dashes, three dots), became the international distress signal in the early 20th century. [■] While it has been largely replaced by digital technologies, Morse code remains a popular hobby and a symbol of the telecommunications era. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What is the pattern for the international distress signal, SOS, in Morse code?",
            options: [
              "Three dots, three dots, three dots",
              "Three dashes, three dashes, three dashes",
              "Three dots, three dashes, three dots",
              "One dot, one dash, one dot"
            ],
            correct: "Three dots, three dashes, three dots",
            explanation: "Paragraph 2 identifies SOS as 'three dots, three dashes, three dots'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "How did the invention of Morse code and the telegraph impact communication speed?",
            options: [
              "It made communication much slower and more complicated.",
              "It allowed for near-instant relay of messages over vast distances.",
              "It only worked for people living in the same city.",
              "It required people to travel to the recipient to read the code."
            ],
            correct: "It allowed for near-instant relay of messages over vast distances.",
            explanation: "Paragraph 1 notes messages could be sent 'in minutes rather than weeks'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Morse code enabled the first era of rapid global telecommunication.",
              "The system uses sequences of binary signals to encode language for wire transmission.",
              "It was vital for many industries, including transit and the military, for decades.",
              "Morse code was invented by a group of poets who wanted a secret language.",
              "SOS was originally used to signal a successful delivery of groceries.",
              "All modern computers still use dots and dashes as their primary output."
            ],
            correct: [
              "Morse code enabled the first era of rapid global telecommunication.",
              "The system uses sequences of binary signals to encode language for wire transmission.",
              "It was vital for many industries, including transit and the military, for decades."
            ],
            explanation: "These choices capture the impact, the technical system, and the practical utility of Morse code."
          }
        ]
      },
      {
        id: 371,
        title: "Photosynthesis: Energy from Sunlight",
        type: 'scientific' as const,
        paragraphs: [
          "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. [■] This complex biological reaction primarily occurs in the chloroplasts, where pigments like chlorophyll absorb specific wavelengths of sunlight. [■] The process can be divided into two main stages: the light-dependent reactions and the light-independent reactions, also known as the Calvin Cycle. [■]",
          "During the light-dependent reactions, water molecules are split to release oxygen as a byproduct while generating energy-carrying molecules (ATP and NADPH). [■] These molecules then fuel the Calvin Cycle, which fixes carbon dioxide from the atmosphere into sugar. [■] Photosynthesis is fundamental to life on Earth, providing both the organic matter required for growth and the oxygen that most organisms need to breathe. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "In which cellular organelle does photosynthesis primarily occur?",
            options: ["Mitochondria", "Nucleus", "Chloroplasts", "Ribosomes"],
            correct: "Chloroplasts",
            explanation: "Paragraph 1 states it occurs 'in the chloroplasts'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How does the oxygen byproduct of photosynthesis relate to life on Earth?",
            options: [
              "It is poisonous and prevents animals from surviving.",
              "It is used by most organisms for respiration and breathing.",
              "It turns into liquid water and creates the oceans.",
              "It is absorbed by plants to make their colors darker."
            ],
            correct: "It is used by most organisms for respiration and breathing.",
            explanation: "Paragraph 2 notes photosynthesis provides 'oxygen that most organisms need to breathe'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Photosynthesis transforms solar energy into chemical storage in organic molecules.",
              "The dual phases of the process involve harvesting light and fixing carbon.",
              "Chloroplasts and pigments are the essential structural components for the reaction.",
              "Plants consume oxygen to produce large amounts of carbon dioxide.",
              "Photosynthesis only happens during the winter months in most regions.",
              "All animals have the ability to perform photosynthesis if they get enough sun."
            ],
            correct: [
              "Photosynthesis transforms solar energy into chemical storage in organic molecules.",
              "The dual phases of the process involve harvesting light and fixing carbon.",
              "Chloroplasts and pigments are the essential structural components for the reaction."
            ],
            explanation: "These choices cover the energy conversion, the chemical phases, and the biological site of photosynthesis."
          }
        ]
      },
      {
        id: 372,
        title: "The Discovery of the DNA Double Helix",
        type: 'historical' as const,
        paragraphs: [
          "In 1953, James Watson and Francis Crick published their groundbreaking model of the DNA double helix, a discovery that transformed modern biology. [■] Their work relied heavily on the experimental data produced by Rosalind Franklin and Maurice Wilkins, particularly the X-ray diffraction images of DNA. [■] The model revealed that DNA consists of two complementary strands of nucleotides arranged in a twisting ladder shape. [■]",
          "This structural revelation explained how genetic information is stored and replicated within living organisms. [■] The pairing of nitrogenous bases—adenine with thymine, and cytosine with guanine—ensures that each strand can serve as a template for a new one. [■] The discovery of DNA's structure paved the way for the fields of molecular genetics, biotechnology, and the human genome project. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who provided the critical X-ray diffraction data that supported the double helix model?",
            options: ["Charles Darwin", "James Watson", "Rosalind Franklin", "Gregor Mendel"],
            correct: "Rosalind Franklin",
            explanation: "Paragraph 1 notes the work relied on 'experimental data produced by Rosalind Franklin'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the significance of the specific pairing of nitrogenous bases in DNA?",
            options: [
              "It allows the DNA to turn into a circle.",
              "It enables DNA to be easily destroyed by the cell.",
              "It allows each strand to act as a template for accurate replication.",
              "It determines the color of the DNA molecule."
            ],
            correct: "It allows each strand to act as a template for accurate replication.",
            explanation: "The passage notes base pairing 'ensures that each strand can serve as a template for a new one'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The double helix model was a collaborative breakthrough based on empirical imagery.",
              "The structure of DNA provides a mechanism for the storage and copying of genes.",
              "Base pairing is the fundamental rule that governs DNA's stability and replication.",
              "DNA was discovered inside a volcano in the 1920s.",
              "Watson and Crick were the first humans to ever see a cell.",
              "DNA consists of a single strand that never changes its shape."
            ],
            correct: [
              "The double helix model was a collaborative breakthrough based on empirical imagery.",
              "The structure of DNA provides a mechanism for the storage and copying of genes.",
              "Base pairing is the fundamental rule that governs DNA's stability and replication."
            ],
            explanation: "These choices capture the discovery's history, its scientific meaning, and its core structural rule."
          }
        ]
      },
      {
        id: 373,
        title: "The Rosetta Stone: A Key to Ancient Egypt",
        type: 'historical' as const,
        paragraphs: [
          "The Rosetta Stone is a granodiorite stele discovered in 1799 by French soldiers during Napoleon's campaign in Egypt. [■] It features a decree issued at Memphis in 196 BC, written in three different scripts: Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek. [■] Because the text provided the same information in all three formats, it became the essential tool for deciphering hieroglyphs. [■]",
          "Jean-François Champollion, a French scholar, is credited with the final breakthrough in 1822, recognizing that hieroglyphs represented both sounds and concepts. [■] This discovery opened up the vast history of Ancient Egypt to modern scholars, allowing them to read temple inscriptions and papyrus scrolls. [■] Today, the Rosetta Stone remains one of the most famous archaeological finds in history. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which three scripts are found on the Rosetta Stone?",
            options: [
              "Hieroglyphs, Demotic, and Ancient Greek",
              "Latin, English, and Hieroglyphs",
              "Sumerian, Arabic, and Greek",
              "Hieroglyphs, Phoenician, and Coptic"
            ],
            correct: "Hieroglyphs, Demotic, and Ancient Greek",
            explanation: "Paragraph 1 lists 'Ancient Egyptian hieroglyphs, Demotic script, and Ancient Greek'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why was the discovery of the Rosetta Stone so important for historians?",
            options: [
              "It proved that the French soldiers were better than the Egyptians.",
              "It allowed scholars to finally translate and understand Ancient Egyptian writing.",
              "It was used as a map to find hidden treasure in the pyramids.",
              "It revealed how the Ancient Egyptians made their bread."
            ],
            correct: "It allowed scholars to finally translate and understand Ancient Egyptian writing.",
            explanation: "The passage explains it was the 'essential tool for deciphering hieroglyphs, which had been unreadable for centuries'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Rosetta Stone provided a trilingual text that was a cryptographically vital find.",
              "Deciphering the stone let researchers access thousands of years of Egyptian history.",
              "Scholar Jean-François Champollion was central to decoding the symbolic language.",
              "The stone was used as a weapon during the Napoleonic wars.",
              "Archeologists found millions of copies of the Rosetta Stone in the desert.",
              "Hieroglyphs were originally developed by the Greeks for the Egyptians."
            ],
            correct: [
              "The Rosetta Stone provided a trilingual text that was a cryptographically vital find.",
              "Deciphering the stone let researchers access thousands of years of Egyptian history.",
              "Scholar Jean-François Champollion was central to decoding the symbolic language."
            ],
            explanation: "These choices reflect the stone's nature, the impact of its translation, and the key figure involved."
          }
        ]
      },
      {
        id: 374,
        title: "The Fundamentals of Magnetism",
        type: 'scientific' as const,
        paragraphs: [
          "Magnetism is a physical phenomenon produced by the motion of electric charges, resulting in attractive and repulsive forces between objects. [■] All magnets have two poles, labeled north and south, where the magnetic force is strongest. [■] Like poles repel each other, while opposite poles attract, creating a magnetic field that extends through the surrounding space. [■]",
          "The Earth itself acts as a giant magnet, with its magnetic field protecting the planet from harmful solar radiation. [■] At the atomic level, magnetism is primarily caused by the spin and orbital motion of electrons. [■] Materials are categorized as ferromagnetic, paramagnetic, or diamagnetic based on how their atoms respond to an external magnetic field. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What primary atomic component is responsible for magnetism?",
            options: ["Protons", "Neutrons", "Electrons", "Nuclei"],
            correct: "Electrons",
            explanation: "Paragraph 2 states magnetism is 'primarily caused by the spin and orbital motion of electrons'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What would happen if you tried to push two 'North' poles of two different magnets together?",
            options: [
              "They would stick together firmly.",
              "They would push away from each other (repel).",
              "They would explode into many small pieces.",
              "They would lose their magnetism immediately."
            ],
            correct: "They would push away from each other (repel).",
            explanation: "Paragraph 1 states 'Like poles repel each other'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Magnetism arises from moving charges and involves forces of attraction and repulsion.",
              "Planetary magnetic fields serve a critical defensive role against solar particles.",
              "Atomic electron dynamics are the root cause of magnetic properties in materials.",
              "Magnets only work if they are buried deep underground.",
              "All magnets have four poles: North, South, East, and West.",
              "Magnetic fields are only found in man-made electronic devices."
            ],
            correct: [
              "Magnetism arises from moving charges and involves forces of attraction and repulsion.",
              "Planetary magnetic fields serve a critical defensive role against solar particles.",
              "Atomic electron dynamics are the root cause of magnetic properties in materials."
            ],
            explanation: "These choices cover the physical origin, the planetary scale, and the atomic mechanism of magnetism."
          }
        ]
      },
      {
        id: 375,
        title: "The Steam Engine and the Industrial Revolution",
        type: 'historical' as const,
        paragraphs: [
          "The development of the steam engine was a pivotal moment in human history, providing the reliable power source needed to drive the Industrial Revolution. [■] While early models were used to pump water from mines, it was James Watt's improvements in the late 18th century that made the engine efficient enough for widespread use. [■] The steam engine soon powered factories, allowing for mass production. [■]",
          "Steam power also revolutionized transportation with the invention of the steam locomotive and the steamboat. [■] These innovations reduced travel times significantly and allowed for the rapid movement of goods and people across continents and oceans. [■] Although eventually superseded by newer technologies, the steam engine’s legacy as a catalyst for industrial society is unparalleled. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who is credited with making critical improvements to the steam engine in the late 18th century?",
            options: ["Thomas Edison", "James Watt", "Eli Whitney", "Henry Ford"],
            correct: "James Watt",
            explanation: "Paragraph 1 states 'it was James Watt's improvements in the late 18th century that made the engine efficient'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did the steam engine affect global trade and travel?",
            options: [
              "It made it harder to move goods between countries.",
              "It allowed for faster and more efficient transport of goods and people over long distances.",
              "It led to the disappearance of all ships and trains.",
              "It proved that people should only travel on foot."
            ],
            correct: "It allowed for faster and more efficient transport of goods and people over long distances.",
            explanation: "Paragraph 2 notes steam power 'revolutionized transportation' and 'reduced travel times significantly'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The steam engine provided a mechanized power source that launched the industrial age.",
              "James Watt refined the technology to make it commercially and industrially viable.",
              "The shift to steam power transformed both manufacturing and international logistics.",
              "The first steam engine was used to fly from London to New York.",
              "Steam engines were mostly used for cooling down hot kitchens.",
              "The Industrial Revolution failed because the steam engine used too much water."
            ],
            correct: [
              "The steam engine provided a mechanized power source that launched the industrial age.",
              "James Watt refined the technology to make it commercially and industrially viable.",
              "The shift to steam power transformed both manufacturing and international logistics."
            ],
            explanation: "These choices correctly identify the historical role, the technological refinement, and the systemic impact of the steam engine."
          }
        ]
      },
      {
        id: 376,
        title: "From Gene to Protein: The Central Dogma",
        type: 'scientific' as const,
        paragraphs: [
          "Protein synthesis is the biological process by which cells build proteins based on the instructions encoded in their DNA. [■] This process involves two main stages: transcription and translation. [■] During transcription, a specific segment of DNA is copied into messenger RNA (mRNA) in the cell's nucleus. [■]",
          "The mRNA then travels to the cytoplasm, where ribosomes facilitate the process of translation. [■] Transfer RNA (tRNA) molecules bring specific amino acids to the ribosome, matching their anticodons with the codons on the mRNA. [■] As the ribosome moves along the mRNA, amino acids are linked together to form a polypeptide chain. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Where in the cell does transcription occur?",
            options: ["In the cytoplasm", "In the cell membrane", "In the nucleus", "In the golgi apparatus"],
            correct: "In the nucleus",
            explanation: "Paragraph 1 states transcription occurs 'in the cell's nucleus'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the role of tRNA in the process of translation?",
            options: [
              "It stores the genetic code permanently.",
              "It carries amino acids to the ribosome and matches them to the mRNA code.",
              "It destroys the mRNA after it has been used.",
              "It acts as a structural component of the cell nucleus."
            ],
            correct: "It carries amino acids to the ribosome and matches them to the mRNA code.",
            explanation: "Paragraph 2 nodes 'Transfer RNA (tRNA) molecules bring specific amino acids to the ribosome'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The synthesis of proteins is a two-step process translating genetic code into action.",
              "Transcription involves copying DNA sequences into mobile mRNA strands.",
              "During translation, ribosomes and tRNA assemble amino acids into protein chains.",
              "Proteins are made directly from sugars without any help from DNA.",
              "The entire process happens in a single second for all proteins.",
              "Ribosomes are only found in the blood cells of humans."
            ],
            correct: [
              "The synthesis of proteins is a two-step process translating genetic code into action.",
              "Transcription involves copying DNA sequences into mobile mRNA strands.",
              "During translation, ribosomes and tRNA assemble amino acids into protein chains."
            ],
            explanation: "These choices cover the two main phases and the general flow of genetic information."
          }
        ]
      },
      {
        id: 377,
        title: "The Architecture of Gothic Cathedrals",
        type: 'historical' as const,
        paragraphs: [
          "Gothic architecture emerged in 12th-century France and dominated European building design for several centuries. [■] Characterized by its emphasis on verticality and light, the style was a significant departure from the heavy, thick-walled Romanesque structures that preceded it. [■] Key innovations of the Gothic style include the pointed arch, the ribbed vault, and the flying buttress. [■]",
          "These engineering advancements allowed architects to build much taller structures with thinner walls and expansive stained-glass windows. [■] The use of light and height was intended to evoke a sense of spiritual awe and transcendence in visitors. [■] Famous examples like Notre Dame de Paris stand today as enduring symbols of medieval craftsmanship. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which architectural feature allowed Gothic buildings to have much thinner walls?",
            options: ["The flat roof", "The flying buttress", "The basement", "The wooden doors"],
            correct: "The flying buttress",
            explanation: "Paragraph 1 lists 'the flying buttress' as a key innovation that allowed for 'thinner walls' (paragraph 2)."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the psychological objective of the massive windows and high ceilings in Gothic cathedrals?",
            options: [
              "To keep the building as cold as possible",
              "To inspire a feeling of religious awe and spiritual connection",
              "To allow for better storage of agricultural products",
              "To hide the inside of the building from the townspeople"
            ],
            correct: "To inspire a feeling of religious awe and spiritual connection",
            explanation: "Paragraph 2 notes these features were 'intended to evoke a sense of spiritual awe and transcendence'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Gothic architecture revolutionized medieval transit from Romanesque styles.",
              "Structural innovations like pointed arches enabled greater building heights.",
              "The design focused on spiritual experience through the manipulation of light and space.",
              "Gothic cathedrals were mostly built using recycled plastics.",
              "All Gothic buildings were required to be painted bright orange by law.",
              "The flying buttress was used to help people fly from the roof."
            ],
            correct: [
              "Gothic architecture revolutionized medieval transit from Romanesque styles.",
              "Structural innovations like pointed arches enabled greater building heights.",
              "The design focused on spiritual experience through the manipulation of light and space."
            ],
            explanation: "These choices cover the historical shift, the technical innovations, and the artistic intent of Gothic architecture."
          }
        ]
      },
      {
        id: 378,
        title: "The Suez Canal: Linking East and West",
        type: 'historical' as const,
        paragraphs: [
          "The Suez Canal is an artificial sea-level waterway in Egypt that connects the Mediterranean Sea to the Red Sea. [■] Completed in 1869 after ten years of construction, it provided the first direct shipping route between Europe and Asia without navigating around Africa. [■] The project was led by Ferdinand de Lesseps and had a profound impact on global trade and geopolitics. [■]",
          "The canal significantly reduced travel times for merchant ships, encouraging the expansion of international commerce. [■] Throughout the 20th century, the canal was a flashpoint of international conflict, most notably during the Suez Crisis of 1956. [■] Today, it remains one of the world's most heavily used shipping lanes, vital for the global transport of goods. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "In which year was the Suez Canal completed?",
            options: ["1776", "1869", "1914", "1956"],
            correct: "1869",
            explanation: "Paragraph 1 states it was 'Completed in 1869 after ten years of construction'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why has the Suez Canal been a center of international conflict in the 20th century?",
            options: [
              "Because it is the location of ancient buried treasure.",
              "Because of its immense strategic and economic importance for global shipping.",
              "Because it is the only place in the world where salt is produced.",
              "Because it was built by a secret society of explorers."
            ],
            correct: "Because of its immense strategic and economic importance for global shipping.",
            explanation: "The passage notes it is 'vital for the global economy' and was a 'flashpoint of international conflict'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Suez Canal created a critical shortcut for maritime trade between Europe and Asia.",
              "Its opening in the mid-19th century transformed global logistic networks.",
              "The canal has remained a vital and often contested geopolitical asset.",
              "The canal was dug by hand by a group of only three people.",
              "It was originally built for the purpose of race car driving.",
              "The Suez Canal connects the Atlantic Ocean directly to the Pacific Ocean."
            ],
            correct: [
              "The Suez Canal created a critical shortcut for maritime trade between Europe and Asia.",
              "Its opening in the mid-19th century transformed global logistic networks.",
              "The canal has remained a vital and often contested geopolitical asset."
            ],
            explanation: "These choices reflect the canal's function, its historical impact, and its ongoing significance."
          }
        ]
      },
      {
        id: 379,
        title: "The Birth of Stars: From Dust to Fusion",
        type: 'scientific' as const,
        paragraphs: [
          "Stars are born within massive clouds of gas and dust known as nebulae, often referred to as 'stellar nurseries.' [■] Under the influence of gravity, regions within these clouds begin to collapse, becoming denser and hotter as they shrink. [■] This process forms a protostar, which continues to gather mass from the surrounding nebula through accretion. [■]",
          "When the core temperature of a protostar reaches approximately 15 million degrees Celsius, nuclear fusion begins, marking the birth of a new star. [■] In this state, hydrogen atoms fuse to form helium, releasing immense amounts of energy that provide the outward pressure needed to balance the inward pull of gravity. [■] This delicate balance allow stars to shine for billions of years. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "At what core temperature does nuclear fusion typically begin in a protostar?",
            options: [
              "1,000 degrees Celsius",
              "100,000 degrees Celsius",
              "15 million degrees Celsius",
              "1 billion degrees Celsius"
            ],
            correct: "15 million degrees Celsius",
            explanation: "Paragraph 2 states fusion begins when the core reaches 'approximately 15 million degrees Celsius'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What prevents a star from collapsing further under its own gravity during its main life cycle?",
            options: [
              "The cooling of the outer layers of the star",
              "The outward pressure generated by nuclear fusion in the core",
              "The presence of planets orbiting the star",
              "The lack of any matter inside the star's center"
            ],
            correct: "The outward pressure generated by nuclear fusion in the core",
            explanation: "Paragraph 2 notes fusion releases energy providing outward pressure to 'balance the inward pull of gravity'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Stars originate from the gravitational collapse of material within dense nebulae.",
              "The transition to a true star is marked by the onset of hydrogen fusion.",
              "A star's stability depends on the equilibrium between gravity and fusion pressure.",
              "Most stars are born when two existing stars crash into each other.",
              "Stars are primarily made of liquid water and solid rock.",
              "The process of star birth takes approximately twenty minutes."
            ],
            correct: [
              "Stars originate from the gravitational collapse of material within dense nebulae.",
              "The transition to a true star is marked by the onset of hydrogen fusion.",
              "A star's stability depends on the equilibrium between gravity and fusion pressure."
            ],
            explanation: "These choices cover the origin, the birth trigger, and the stable state of a star."
          }
        ]
      },
      {
        id: 380,
        title: "The Space Shuttle: A New Era of Spaceflight",
        type: 'historical' as const,
        paragraphs: [
          "NASA's Space Shuttle program, which ran from 1981 to 2011, introduced the world's first reusable spacecraft. [■] Unlike previous rockets that were discarded after a single use, the Shuttle was designed to fly multiple missions, significantly lowering the cost of reaching orbit. [■] The fleet consisted of five operational orbiters: Columbia, Challenger, Discovery, Atlantis, and Endeavour. [■]",
          "The Shuttle was instrumental in several historic achievements, including the launch and repair of the Hubble Space Telescope and the construction of the International Space Station. [■] However, the program was also marked by tragedy, with the Challenger disaster in 1986 and the Columbia disaster in 2003. [■] Despite these setbacks, the Space Shuttle legacy remains a testament to human ingenuity. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "How many operational orbiters were part of the Space Shuttle fleet?",
            options: ["Two", "Three", "Five", "Ten"],
            correct: "Five",
            explanation: "Paragraph 1 states 'The fleet consisted of five operational orbiters'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a major operational goal that differentiated the Space Shuttle from earlier spacecraft?",
            options: [
              "To travel to the moon every week",
              "To be used as a reusable vehicle for multiple missions",
              "To perform missions without any human crew",
              "To carry only cargo and no scientific tools"
            ],
            correct: "To be used as a reusable vehicle for multiple missions",
            explanation: "Paragraph 1 notes the Shuttle was 'the world's first reusable spacecraft... designed to fly multiple missions'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Space Shuttle program pioneered the use of reusable orbital vehicles.",
              "It played a crucial role in maintaining telescopes and building space stations.",
              "The program's history includes both major technical successes and tragic losses.",
              "The Space Shuttle was the first spacecraft to land on Mars.",
              "NASA stopped the Shuttle program because the vehicles were too small.",
              "The Shuttle orbiters were fueled entirely by renewable solar panels."
            ],
            correct: [
              "The Space Shuttle program pioneered the use of reusable orbital vehicles.",
              "It played a crucial role in maintaining telescopes and building space stations.",
              "The program's history includes both major technical successes and tragic losses."
            ],
            explanation: "These choices reflect the innovation, the mission success, and the difficulties of the Space Shuttle era."
          }
        ]
      },
      {
        id: 381,
        title: "The Gutenberg Printing Press and the Spread of Knowledge",
        type: 'historical' as const,
        paragraphs: [
          "Developed by Johannes Gutenberg around 1440, the printing press with movable type is widely considered one of the most influential events in the second millennium. [■] By allowing for the mass production of books, it decentralized information and broke the monopoly of the elite and clergy over education. [■] For the first time, ideas could be disseminated quickly and accurately across large distances. [■]",
          "The press played a key role in the success of the Reformation, the Renaissance, and the Scientific Revolution. [■] It fostered the growth of literacy among the general population and paved the way for the development of modern news media. [■] The Gutenberg Bible was the first major book printed using this technology, marking a turning point in human communication history. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "When did Johannes Gutenberg develop his movable type printing press?",
            options: ["Around 1250", "Around 1340", "Around 1440", "Around 1560"],
            correct: "Around 1440",
            explanation: "Paragraph 1 states it was developed 'around 1440'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What was a major social impact of the mass production of books?",
            options: [
              "Information became more expensive and rare.",
              "It reduced the control of the elite and clergy over information.",
              "It led to a decrease in the number of authors.",
              "It made people stop writing letters by hand."
            ],
            correct: "It reduced the control of the elite and clergy over information.",
            explanation: "Paragraph 1 notes it 'broke the monopoly of the elite and clergy over education'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Gutenberg press revolutionized learning by enabling mass book production.",
              "It served as a catalyst for major historical movements like the Renaissance.",
              "The democratization of information led to widespread literacy and modern media.",
              "Gutenberg invented the alphabet specifically for his printing press.",
              "The printing press was primarily used to print secret government codes.",
              "The first books printed were made entirely of thin sheets of metal."
            ],
            correct: [
              "The Gutenberg press revolutionized learning by enabling mass book production.",
              "It served as a catalyst for major historical movements like the Renaissance.",
              "The democratization of information led to widespread literacy and modern media."
            ],
            explanation: "These choices highlight the technical breakthrough, the historical context, and the long-term societal effects."
          }
        ]
      },
      {
        id: 382,
        title: "The Human Heart: Anatomy and Physiology",
        type: 'scientific' as const,
        paragraphs: [
          "The human heart is a complex muscular organ that serves as the primary pump of the circulatory system. [■] Located in the center of the chest, it works continuously to circulate oxygenated blood to the body's tissues and return deoxygenated blood to the lungs. [■] The heart is divided into four chambers: the right and left atria, and the right and left ventricles. [■]",
          "One-way valves between these chambers ensure that blood flows in the correct direction, preventing backflow. [■] The rhythmic contraction of the heart, known as the cardiac cycle, is controlled by electrical signals generated by a specialized group of cells called the sinoatrial node. [■] Maintaining heart health through exercise and proper nutrition is vital for preventing cardiovascular disease. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "How many chambers does the human heart have?",
            options: ["Two", "Three", "Four", "Six"],
            correct: "Four",
            explanation: "Paragraph 1 states 'The heart is divided into four chambers'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What is the function of the heart's valves?",
            options: [
              "To generate electrical signals for the heart",
              "To ensure that blood flows only in one direction",
              "To produce oxygen for the bloodstream",
              "To filter toxins out of the blood"
            ],
            correct: "To ensure that blood flows only in one direction",
            explanation: "Paragraph 2 states 'One-way valves... ensure that blood flows in the correct direction'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The heart is the central muscular pump that drives blood circulation.",
              "Its specialized four-chamber structure facilitates efficient gas exchange transport.",
              "Electrical pacing and mechanical valves regulate the heart's repetitive cycle.",
              "The heart is the only organ in the body that does not need oxygen.",
              "Most heart attacks are caused by eating too many carrots.",
              "The heart stops beating completely every time a person sneezes."
            ],
            correct: [
              "The heart is the central muscular pump that drives blood circulation.",
              "Its specialized four-chamber structure facilitates efficient gas exchange transport.",
              "Electrical pacing and mechanical valves regulate the heart's repetitive cycle."
            ],
            explanation: "These choices address the organ's function, its anatomy, and its regulatory mechanisms."
          }
        ]
      },
      {
        id: 383,
        title: "The Rise and Fall of the Berlin Wall",
        type: 'historical' as const,
        paragraphs: [
          "Constructed in 1961, the Berlin Wall was a concrete barrier that physically and ideologically divided the city of Berlin during the Cold War. [■] Built by the German Democratic Republic (East Germany), its purpose was to prevent citizens from fleeing to the democratic West Berlin. [■] The wall became a powerful symbol of the 'Iron Curtain' that divided Europe into communist and capitalist blocs. [■]",
          "For nearly three decades, the wall stood as a grim reminder of global political tension, with guarded crossings and dangerous 'no-man’s lands.' [■] In November 1989, amid a wave of pro-democracy protests across Eastern Europe, the wall was finally opened, leading to the reunification of Germany. [■] Today, segments of the wall remain as memorials and reminders of the triumph of human freedom over division. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "In what year was the Berlin Wall constructed?",
            options: ["1945", "1955", "1961", "1989"],
            correct: "1961",
            explanation: "Paragraph 1 states the wall was 'Constructed in 1961'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What significant historical event followed the opening of the Berlin Wall in 1989?",
            options: [
              "The start of World War II",
              "The colonization of the Americas",
              "The reunification of Germany",
              "The invention of the steam engine"
            ],
            correct: "The reunification of Germany",
            explanation: "Paragraph 2 nodes the opening 'leading to the reunification of Germany'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Berlin Wall was a physical manifestation of the Cold War's deep divisions.",
              "Its primary function was to halt the migration of people from East to West.",
              "The dismantling of the wall in 1989 signaled the end of a major era of conflict.",
              "The wall was built using special bricks made of solidified ice.",
              "During the 1970s, the wall was used as a track for international marathon races.",
              "The Berlin Wall was moved from Paris to Germany in the early 1900s."
            ],
            correct: [
              "The Berlin Wall was a physical manifestation of the Cold War's deep divisions.",
              "Its primary function was to halt the migration of people from East to West.",
              "The dismantling of the wall in 1989 signaled the end of a major era of conflict."
            ],
            explanation: "These choices reflect the wall's symbolic meaning, its political purpose, and its historical end."
          }
        ]
      },
      {
        id: 384,
        title: "Ocean Tides and Lunar Gravity",
        type: 'scientific' as const,
        paragraphs: [
          "Ocean tides are the periodic rise and fall of sea levels caused by the gravitational forces exerted by the Moon and the Sun, as well as the rotation of the Earth. [■] Because the Moon is much closer to Earth than the Sun, its gravitational pull has a more significant effect on the tides. [■] As the Moon orbits the Earth, its gravity pulls on the oceans, creating 'bulges' of water on the side of the Earth facing the Moon and on the opposite side. [■]",
          "These bulges result in high tides, while the areas between the bulges experience low tides. [■] Most coastal locations experience two high tides and two low tides each day as the Earth rotates through these water bulges. [■] Tidal patterns are also influenced by the shape of the coastline and the depth of the ocean floor, leading to variations in tidal range around the world. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which celestial body has the strongest influence on Earth's tides?",
            options: ["The Sun", "Jupiter", "The Moon", "Mars"],
            correct: "The Moon",
            explanation: "Paragraph 1 states the Moon's 'gravitational pull has a more significant effect on the tides' due to its proximity."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why do most coastal areas experience two high tides a day?",
            options: [
              "The Moon orbits the Earth twice every 24 hours.",
              "The Earth rotates on its axis, passing through the two water bulges created by gravity.",
              "The tides are controlled by the daily rise and fall of the Sun.",
              "The ocean floor moves up and down every twelve hours."
            ],
            correct: "The Earth rotates on its axis, passing through the two water bulges created by gravity.",
            explanation: "The passage notes high tides occur as Earth rotates through the bulges."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Tides are cyclical sea-level changes driven by gravitational interactions.",
              "The Moon's proximity makes it the primary driver of tidal movement.",
              "The Earth's rotation through water bulges creates a daily rhythm of high and low tides.",
              "Tides only happen in the Atlantic Ocean and not in the Pacific.",
              "The sound of the tides is caused by whales pushing water against the shore.",
              "Low tides happen only when the Moon is completely invisible."
            ],
            correct: [
              "Tides are cyclical sea-level changes driven by gravitational interactions.",
              "The Moon's proximity makes it the primary driver of tidal movement.",
              "The Earth's rotation through water bulges creates a daily rhythm of high and low tides."
            ],
            explanation: "These choices address the cause, the main influence, and the manifestation of tides."
          }
        ]
      },
      {
        id: 385,
        title: "The Discovery and Impact of Insulin",
        type: 'historical' as const,
        paragraphs: [
          "Before the 1920s, a diagnosis of Type 1 diabetes was essentially a death sentence, as there was no effective treatment for the body's inability to regulate blood sugar. [■] In 1921, Frederick Banting and Charles Best, working at the University of Toronto, successfully isolated insulin from the pancreas of dogs. [■] Their discovery revolutionized medical treatment, providing a way for people with diabetes to manage their condition and lead relatively normal lives. [■]",
          "The first human patient was treated in 1922, and the results were immediate and life-saving. [■] For their work, Banting and J.J.R. Macleod were awarded the Nobel Prize in Medicine in 1923. [■] Over the years, the production of insulin has evolved from extracting it from animals to utilizing genetic engineering to produce human insulin in laboratories. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "In which year was the first human patient treated with insulin?",
            options: ["1918", "1921", "1922", "1925"],
            correct: "1922",
            explanation: "Paragraph 2 states 'The first human patient was treated in 1922'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "How did the discovery of insulin change the outlook for people with Type 1 diabetes?",
            options: [
              "It allowed them to be cured completely of the disease.",
              "It transformed a fatal condition into a manageable chronic illness.",
              "It meant they no longer needed to eat any sugar.",
              "It proved that diabetes was caused by a lack of exercise."
            ],
            correct: "It transformed a fatal condition into a manageable chronic illness.",
            explanation: "The passage notes it was previously a 'death sentence' but then provided a way to 'manage their condition'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The isolation of insulin was a landmark achievement in medical history.",
              "Researchers in Toronto developed the first effective treatment for diabetes management.",
              "Advancements in science have refined insulin production from animal sources to genetic engineering.",
              "Insulin was first discovered in the leaves of tropical plants.",
              "The discoverers of insulin refused to accept any awards for their work.",
              "Diabetes became a problem only after insulin was invented."
            ],
            correct: [
              "The isolation of insulin was a landmark achievement in medical history.",
              "Researchers in Toronto developed the first effective treatment for diabetes management.",
              "Advancements in science have refined insulin production from animal sources to genetic engineering."
            ],
            explanation: "These choices highlight the medical breakthrough, the specific researchers involved, and the subsequent technological progress."
          }
        ]
      },
      {
        id: 386,
        title: "Plate Tectonics: Shifting Continents",
        type: 'scientific' as const,
        paragraphs: [
          "Plate tectonics is the scientific theory that describes the large-scale motion of the seven large plates and the movements of a larger number of smaller plates of the Earth's lithosphere. [■] This geological theory explains many of Earth's surface features and processes, such as earthquakes, volcanic activity, mountain building, and oceanic trench formation. [■] These tectonic plates move because of the intense heat in the Earth's core that causes molten rock in the mantle to move in a convection pattern. [■]",
          "The movement of these plates, though slow (averaging a few centimeters per year), has dramatically reshaped the Earth's surface over millions of years. [■] For instance, the supercontinent Pangea began to break apart about 200 million years ago, eventually leading to the current arrangement of the continents. [■] Understanding plate tectonics is essential for predicting natural disasters and locating natural resources like minerals and fossil fuels. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "When did the supercontinent Pangea begin to break apart?",
            options: ["10 million years ago", "50 million years ago", "200 million years ago", "500 million years ago"],
            correct: "200 million years ago",
            explanation: "Paragraph 2 states 'Pangea began to break apart about 200 million years ago'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What is the primary driver of tectonic plate movement?",
            options: [
              "The ocean currents and wind patterns",
              "The Earth's rotation on its axis",
              "Convection currents in the mantle caused by heat from the core",
              "The gravitational pull of the Moon and the Sun"
            ],
            correct: "Convection currents in the mantle caused by heat from the core",
            explanation: "Paragraph 1 explains plates move because core heat causes mantle rock to move in a 'convection pattern'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Plate tectonics explains the dynamic nature of Earth's lithosphere and surface features.",
              "Internal thermal energy powers the continuous, slow motion of tectonic plates.",
              "The historical arrangement of continents reflects the long-term effects of plate shifts.",
              "Earthquakes only happen at the exact center of every tectonic plate.",
              "The plates are made of the same material as the clouds in the sky.",
              "Pangea was a large city located in the middle of the Atlantic Ocean."
            ],
            correct: [
              "Plate tectonics explains the dynamic nature of Earth's lithosphere and surface features.",
              "Internal thermal energy powers the continuous, slow motion of tectonic plates.",
              "The historical arrangement of continents reflects the long-term effects of plate shifts."
            ],
            explanation: "These choices highlight the theory's explanatory power, its mechanism, and its historical impact."
          }
        ]
      },
      {
        id: 387,
        title: "The Manhattan Project: The Dawn of the Atomic Age",
        type: 'historical' as const,
        paragraphs: [
          "The Manhattan Project was a research and development undertaking during World War II that produced the first nuclear weapons. [■] Led by the United States with the support of the United Kingdom and Canada, the project was directed by physicist J. Robert Oppenheimer and General Leslie Groves. [■] The scientific endeavor reached its climax with the Trinity test in New Mexico in July 1945, the first detonation of an atomic bomb. [■]",
          "The use of atomic bombs on Hiroshima and Nagasaki shortly thereafter led to the end of the war but also sparked intense ethical debates. [■] Beyond its military application, the project fundamentally changed the global political landscape and ushered in the Nuclear Age. [■] It also laid the groundwork for the development of nuclear power as a source of energy for civilian use. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who was the scientific director of the Manhattan Project?",
            options: ["Albert Einstein", "J. Robert Oppenheimer", "Richard Feynman", "Leslie Groves"],
            correct: "J. Robert Oppenheimer",
            explanation: "Paragraph 1 identifies J. Robert Oppenheimer as the physicist who directed the project."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was a significant non-military consequence of the Manhattan Project?",
            options: [
              "It led to the invention of the electric car.",
              "It provided the foundation for civilian nuclear energy.",
              "It caused all other countries to stop their research into science.",
              "It led to the immediate end of all wars forever."
            ],
            correct: "It provided the foundation for civilian nuclear energy.",
            explanation: "Paragraph 2 notes the project 'laid the groundwork for the development of nuclear power... for civilian use'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Manhattan Project was a large-scale, international effort to harness nuclear energy.",
              "The successful testing and use of atomic weapons dramatically altered world history.",
              "The project's legacy includes significant advancements in both military and energy technology.",
              "The atomic bomb was primarily made of special wood found in the Amazon.",
              "Most scientists involved in the project were under the age of eighteen.",
              "The Manhattan Project was originally started to build a bridge across the Atlantic."
            ],
            correct: [
              "The Manhattan Project was a large-scale, international effort to harness nuclear energy.",
              "The successful testing and use of atomic weapons dramatically altered world history.",
              "The project's legacy includes significant advancements in both military and energy technology."
            ],
            explanation: "These choices accurately summarize the project's scale, historical impact, and technological legacy."
          }
        ]
      },
      {
        id: 388,
        title: "The Biology of Bees and Their Role in Pollination",
        type: 'scientific' as const,
        paragraphs: [
          "Bees are highly organized social insects that play a critical role in global ecosystems as primary pollinators. [■] As they travel from flower to flower in search of nectar, they transfer pollen grains from the male anther to the female stigma. [■] This process, known as pollination, is essential for the reproduction of many flowering plants and the production of about one-third of the human food supply. [■]",
          "Honeybees, in particular, live in complex colonies with a single queen, thousands of female workers, and a few male drones. [■] The collapse of bee populations in recent years, often referred to as Colony Collapse Disorder, has caused significant concern among scientists and farmers. [■] Protecting bee habitats and reducing the use of harmful pesticides are vital steps in ensuring the health of these essential insects. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What percentage of the human food supply is dependent on pollination by insects like bees?",
            options: ["About 5%", "About 10%", "About 33%", "About 75%"],
            correct: "About 33%",
            explanation: "Paragraph 1 states's pollination is essential for 'the production of about one-third of the human food supply'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why is the decline of bee populations considered a serious threat to humans?",
            options: [
              "Humans would have no more honey to eat.",
              "It could lead to a significant decrease in crop yields and food security.",
              "Bees are the only source of light in many ecosystems.",
              "Without bees, the Earth would stop rotating."
            ],
            correct: "It could lead to a significant decrease in crop yields and food security.",
            explanation: "Since bees pollinate one-third of the food supply, their decline directly threatens food production."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Bees are fundamental to the reproduction of many plants through pollination.",
              "The success of modern agriculture is deeply linked to the health of bee colonies.",
              "Environmental challenges like habitat loss and toxins threaten the survival of bee populations.",
              "Bees are only capable of surviving in perfect, artificial laboratory environments.",
              "Pollination only happens when bees are wearing special protective gear.",
              "Bees use their wings to create powerful storms that move seeds across the ocean."
            ],
            correct: [
              "Bees are fundamental to the reproduction of many plants through pollination.",
              "The success of modern agriculture is deeply linked to the health of bee colonies.",
              "Environmental challenges like habitat loss and toxins threaten the survival of bee populations."
            ],
            explanation: "These choices target the biological role of bees, their agricultural necessity, and the threats they face."
          }
        ]
      },
      {
        id: 389,
        title: "The Silk Road: A Network of Cultural Exchange",
        type: 'historical' as const,
        paragraphs: [
          "The Silk Road was an ancient network of trade routes that connected the East and West, stretching from China to the Mediterranean Sea. [■] Established during the Han Dynasty around 130 BCE, it served as the primary conduit for the exchange of goods like silk, spices, and precious metals. [■] However, the Silk Road was more than just a path for commerce; it was a bridge for cultural, religious, and scientific cross-pollination. [■]",
          "Through this network, religions such as Buddhism and Islam spread to new regions, and innovations like papermaking and gunpowder reached Europe. [■] The Silk Road also facilitated the exchange of art, language, and philosophy between diverse civilizations. [■] Its significance declined with the rise of maritime trade routes during the Age of Discovery, but its legacy as a symbol of global interconnectedness remains. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "During which Chinese dynasty was the Silk Road established?",
            options: ["The Tang Dynasty", "The Ming Dynasty", "The Han Dynasty", "The Song Dynasty"],
            correct: "The Han Dynasty",
            explanation: "Paragraph 1 states it was 'Established during the Han Dynasty'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the most significant non-material impact of the Silk Road?",
            options: [
              "The discovery of safe paths over the mountains",
              "The exchange and spread of religions, ideas, and technologies",
              "The reduction in the price of luxury fabrics",
              "The development of faster animals for transport"
            ],
            correct: "The exchange and spread of religions, ideas, and technologies",
            explanation: "Paragraph 1 and 2 highlight the road as a conduit for 'cultural, religious, and scientific cross-pollination'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Silk Road was a vast infrastructure that linked major world civilizations for centuries.",
              "Beyond trade, the network fostered a significant global transfer of knowledge and belief systems.",
              "The legacy of the Silk Road is defined by its role in early globalization and cultural synthesis.",
              "The entire Silk Road was paved with bricks made of solid gold.",
              "Travelers on the Silk Road were required to walk backwards at all times.",
              "The road was primarily used by ghosts who wanted to move from East to West."
            ],
            correct: [
              "The Silk Road was a vast infrastructure that linked major world civilizations for centuries.",
              "Beyond trade, the network fostered a significant global transfer of knowledge and belief systems.",
              "The legacy of the Silk Road is defined by its role in early globalization and cultural synthesis."
            ],
            explanation: "These choices reflect the scale of the network, its cultural depth, and its historical legacy."
          }
        ]
      },
      {
        id: 390,
        title: "The Physics of Hydraulics and Its Applications",
        type: 'scientific' as const,
        paragraphs: [
          "Hydraulics is a branch of science and engineering that deals with the mechanical properties of liquids and their use in transmitting power. [■] The fundamental principle of hydraulics is Pascal’s Law, which states that pressure applied to an enclosed fluid is transmitted equally in all directions. [■] This allows a small force applied at one point to be magnified into a much larger force at another point. [■]",
          "Hydraulic systems are used in a wide variety of applications, from the brakes in automobiles to the heavy machinery used in construction and aviation. [■] These systems are favored for their ability to provide immense power in a relatively compact and flexible design. [■] Ongoing research in hydraulics focuses on improving efficiency and developing environmentally friendly fluids for use in these systems. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What is the name of the fundamental law of physics that governs hydraulic systems?",
            options: ["Newton's Second Law", "Pascal's Law", "Boyle's Law", "Ohm's Law"],
            correct: "Pascal's Law",
            explanation: "Paragraph 1 identifies 'Pascal’s Law' as the fundamental principle of hydraulics."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why are hydraulic systems commonly used in heavy industrial machinery?",
            options: [
              "Because they are much cheaper to build than electrical systems",
              "Because they can magnify force to provide immense power reliably",
              "Because they only work in very cold temperatures",
              "Because they do not require any maintenance"
            ],
            correct: "Because they can magnify force to provide immense power reliably",
            explanation: "The passage notes hydraulics 'provide immense power' by magnifying force through fluid pressure."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Hydraulics utilizes fluid mechanics to transmit and amplify mechanical force.",
              "Pascal's Law is the theoretical basis that makes hydraulic power possible.",
              "The versatility and strength of hydraulics make it essential for various modern technologies.",
              "Hydraulic fluids are always made from pure melted chocolate.",
              "All hydraulic machines are controlled by the gravitational pull of the Sun.",
              "Hydraulics was first used by birds to build their nests in tall trees."
            ],
            correct: [
              "Hydraulics utilizes fluid mechanics to transmit and amplify mechanical force.",
              "Pascal's Law is the theoretical basis that makes hydraulic power possible.",
              "The versatility and strength of hydraulics make it essential for various modern technologies."
            ],
            explanation: "These choices capture the scientific principle, the mechanism, and the practical significance of hydraulics."
          }
        ]
      },
      {
        id: 391,
        title: "The Evolution of the Bicycle",
        type: 'historical' as const,
        paragraphs: [
          "The bicycle is a widely used human-powered vehicle that has undergone significant design changes since its inception in the early 19th century. [■] The earliest version, known as the 'dandy horse,' lacked pedals and required the rider to push against the ground with their feet. [■] It was followed by the 'boneshaker' and the 'penny farthing,' which featured large front wheels to increase speed but were difficult and dangerous to ride. [■]",
          "The development of the 'safety bicycle' in the 1880s, which featured equal-sized wheels and a chain-driven rear wheel, transformed cycling into a popular form of transportation and recreation. [■] Pneumatic tires, invented shortly thereafter, significantly improved comfort and performance. [■] Today, bicycles remain a sustainable and efficient mode of transport, contributing to urban mobility and public health worldwide. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Which early bicycle design featured a very large front wheel?",
            options: ["The dandy horse", "The boneshaker", "The penny farthing", "The safety bicycle"],
            correct: "The penny farthing",
            explanation: "Paragraph 1 mentions the 'penny farthing' featured 'large front wheels to increase speed'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why was the 'safety bicycle' a significant improvement over previous designs?",
            options: [
              "It was much faster than the penny farthing.",
              "It was designed by a famous artist.",
              "The equal-sized wheels and chain drive made it easier and safer to use.",
              "It was the first bicycle that could fly."
            ],
            correct: "The equal-sized wheels and chain drive made it easier and safer to use.",
            explanation: "The passage notes these features 'transformed cycling into a popular form of transportation and recreation' by being safer."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The bicycle evolved from a primitive walking machine to a sophisticated vehicle.",
              "Technological breakthroughs like chain drives and air-filled tires improved design.",
              "The bicycle remains a vital tool for sustainable transport and urban life today.",
              "All bicycles must be painted bright red by international law.",
              "The first bicycle was actually built by an ancient Roman emperor.",
              "Bicycles were originally intended to be used only by military scouts."
            ],
            correct: [
              "The bicycle evolved from a primitive walking machine to a sophisticated vehicle.",
              "Technological breakthroughs like chain drives and air-filled tires improved design.",
              "The bicycle remains a vital tool for sustainable transport and urban life today."
            ],
            explanation: "These choices reflect the historical evolution, the technical milestones, and the modern relevance of the bicycle."
          }
        ]
      },
      {
        id: 392,
        title: "The Biology of Fungi: Nature's Decomposers",
        type: 'scientific' as const,
        paragraphs: [
          "Fungi are a diverse kingdom of organisms that are distinct from plants and animals. [■] Unlike plants, they do not perform photosynthesis; instead, they are heterotrophs that obtain nutrients through absorption. [■] Most fungi secret enzymes to break down organic matter in their environment, making them the primary decomposers in many ecosystems. [■]",
          "Fungi play a critical role in nutrient cycling, returning essential elements like carbon and nitrogen to the soil. [■] While some fungi are unicellular, like yeasts, most are multicellular and form complex networks of thread-like structures called hyphae. [■] Beyond decomposition, fungi are also used in medicine, such as in the production of antibiotics, and in the food industry for baking and brewing. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "How do fungi primarily obtain their nutrients?",
            options: [
              "Through photosynthesis using sunlight",
              "By absorbing organic matter broken down by enzymes",
              "By capturing and eating small insects",
              "By drinking water from the air"
            ],
            correct: "By absorbing organic matter broken down by enzymes",
            explanation: "Paragraph 1 states they 'obtain nutrients through absorption' after secreting enzymes to break down organic matter."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why are fungi essential for the health of forests and other ecosystems?",
            options: [
              "They produce light to help other organisms see at night.",
              "They recycle nutrients by breaking down dead plant and animal matter.",
              "They protect the trees from getting too much rain.",
              "They provide a place for birds to build their nests."
            ],
            correct: "They recycle nutrients by breaking down dead plant and animal matter.",
            explanation: "The passage notes their role as 'primary decomposers' is critical for 'nutrient cycling'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Fungi are unique heterotrophic organisms that function as biological recyclers.",
              "Their specialized anatomy and enzymatic processes enable efficient decomposition.",
              "The impact of fungi extends to medicine, industry, and global nutrient cycles.",
              "Fungi are actually a type of mineral that grows in very wet conditions.",
              "All fungi are extremely poisonous and should never be touched.",
              "Fungi can only grow on the tops of very high mountains."
            ],
            correct: [
              "Fungi are unique heterotrophic organisms that function as biological recyclers.",
              "Their specialized anatomy and enzymatic processes enable efficient decomposition.",
              "The impact of fungi extends to medicine, industry, and global nutrient cycles."
            ],
            explanation: "These choices address the kingdom's biological nature, its ecological role, and its multifaceted importance."
          }
        ]
      },
      {
        id: 393,
        title: "The Construction and Impact of the Hoover Dam",
        type: 'historical' as const,
        paragraphs: [
          "Built during the Great Depression in the 1930s, the Hoover Dam is a massive concrete arch-gravity dam on the Colorado River. [■] Its primary purposes were to control flooding, provide irrigation water for agriculture, and generate hydroelectric power for the growing cities of the American Southwest. [■] The construction was a feat of engineering, requiring thousands of workers and overcoming harsh desert conditions. [■]",
          "The dam created Lake Mead, the largest reservoir in the United States by volume when full. [■] While the project provided thousands of jobs during a difficult economic era, it also had significant environmental impacts on the river's ecosystem. [■] Today, the Hoover Dam remains a critical piece of infrastructure and a popular tourist destination, symbolizing human ingenuity and industrial power. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "On which river was the Hoover Dam built?",
            options: ["The Mississippi River", "The Rio Grande", "The Colorado River", "The Columbia River"],
            correct: "The Colorado River",
            explanation: "Paragraph 1 states it is an 'arch-gravity dam on the Colorado River'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What was a major social and economic benefit of building the dam during the 1930s?",
            options: [
              "It led to the discovery of gold in the desert.",
              "It provided much-needed employment during the Great Depression.",
              "It allowed people to travel to the moon more easily.",
              "It caused the end of the US Civil War."
            ],
            correct: "It provided much-needed employment during the Great Depression.",
            explanation: "The passage notes the construction 'provided thousands of jobs during a difficult economic era'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Hoover Dam was an ambitious engineering solution to regional water and power needs.",
              "The project transformed the geography of the Southwest by creating Lake Mead.",
              "While highly beneficial for infrastructure, the dam altered natural river ecosystems.",
              "The dam was built using only hand-carved blocks of rare red marble.",
              "The Hoover Dam was originally designed to be a giant water slide.",
              "The entire dam was moved from Florida to Arizona in the 1950s."
            ],
            correct: [
              "The Hoover Dam was an ambitious engineering solution to regional water and power needs.",
              "The project transformed the geography of the Southwest by creating Lake Mead.",
              "While highly beneficial for infrastructure, the dam altered natural river ecosystems."
            ],
            explanation: "These choices address the project's goals, its geographical outcome, and its ecological consequences."
          }
        ]
      },
      {
        id: 394,
        title: "The Physics of Lightning and Thunder",
        type: 'scientific' as const,
        paragraphs: [
          "Lightning is a powerful electrical discharge that occurs during thunderstorms, caused by the buildup of static electricity within clouds. [■] As thunderclouds develop, positive and negative charges separate, creating an intense electric field between the cloud and the ground or within the clouds themselves. [■] When the electrical potential becomes great enough, it overcomes the resistance of the air, resulting in a sudden flash of light. [■]",
          "This rapid discharge of electricity heats the surrounding air to temperatures five times hotter than the surface of the sun. [■] The extreme heat causes the air to expand explosively, creating a shockwave that we hear as thunder. [■] Because light travels much faster than sound, we see the lightning strike before we hear the clap of thunder, allowing us to estimate the distance of the storm. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What causes the sound of thunder?",
            options: [
              "The collision of heavy rain drops",
              "The explosive expansion of air heated by lightning",
              "The friction of clouds moving against each other",
              "The sound of the wind moving through the trees"
            ],
            correct: "The explosive expansion of air heated by lightning",
            explanation: "Paragraph 2 explains the 'extreme heat causes the air to expand explosively, creating a shockwave that we hear as thunder'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "Why do we always see lightning before we hear the thunder it produces?",
            options: [
              "Lightning happens much earlier than thunder.",
              "Sound is blocked by the clouds while light is not.",
              "Light travels at a much higher speed than sound waves.",
              "Thunder only occurs when the lightning reaches the ground."
            ],
            correct: "Light travels at a much higher speed than sound waves.",
            explanation: "The passage notes 'Because light travels much faster than sound, we see the lightning strike before we hear the clap of thunder'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Lightning is an atmospheric electrical phenomenon driven by charge separation.",
              "The thermodynamic effects of lightning create the acoustic phenomenon of thunder.",
              "The disparity between light and sound speeds allows for observation of storm distance.",
              "Lightning is always accompanied by a giant purple bird that lives in the clouds.",
              "Thunder can only be heard if you are standing directly inside a river.",
              "Lightning is a type of liquid that falls from the sky during the summer."
            ],
            correct: [
              "Lightning is an atmospheric electrical phenomenon driven by charge separation.",
              "The thermodynamic effects of lightning create the acoustic phenomenon of thunder.",
              "The disparity between light and sound speeds allows for observation of storm distance."
            ],
            explanation: "These choices accurately summarize the cause, the acoustic result, and the observational principle of lightning and thunder."
          }
        ]
      },
      {
        id: 395,
        title: "The History of the Magnetic Compass",
        type: 'historical' as const,
        paragraphs: [
          "The magnetic compass is a navigational instrument that uses a magnetized needle to indicate the direction of the Earth's magnetic poles. [■] It was first invented in China during the Han Dynasty around the 2nd century BCE, originally for the purpose of divination and geomancy. [■] However, by the Song Dynasty in the 11th century CE, it was being used for maritime navigation. [■]",
          "The compass revolutionized sea travel, allowing sailors to navigate accurately even when the sun and stars were obscured by clouds or fog. [■] This technology eventually reached the Middle East and Europe, facilitating the great age of exploration and global trade. [■] Despite the development of modern GPS technology, the magnetic compass remains a fundamental tool for orientation and survival. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Where was the magnetic compass first invented?",
            options: ["Ancient Greece", "Medieval Europe", "Ancient China", "Pre-colonial America"],
            correct: "Ancient China",
            explanation: "Paragraph 1 states it was 'first invented in China'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "What was the most significant impact of the compass on maritime travel?",
            options: [
              "It allowed ships to travel much faster than before.",
              "It enabled consistent navigation regardless of celestial visibility.",
              "It prevented ships from being destroyed by storms.",
              "It made the water much calmer for the sailors."
            ],
            correct: "It enabled consistent navigation regardless of celestial visibility.",
            explanation: "The passage notes it allowed sailors to navigate 'even when the sun and stars were obscured'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The magnetic compass transitioned from a divination tool to a vital nautical instrument.",
              "Improved navigation capabilities catalyzed the global expansion of trade and exploration.",
              "The compass remains a reliable and fundamental technology for global orientation.",
              "A compass will only work if it is touching a piece of real silver.",
              "The magnetic compass was used to find buried treasure in the mountains by ancient poets.",
              "Saillors originally used birds to find their direction before the compass was invented."
            ],
            correct: [
              "The magnetic compass transitioned from a divination tool to a vital nautical instrument.",
              "Improved navigation capabilities catalyzed the global expansion of trade and exploration.",
              "The compass remains a reliable and fundamental technology for global orientation."
            ],
            explanation: "These choices cover the instrument's origin, its historical impact, and its enduring utility."
          }
        ]
      },
      {
        id: 396,
        title: "The Social Structure of Ant Colonies",
        type: 'scientific' as const,
        paragraphs: [
          "Ants are highly social insects that live in organized colonies with specialized roles and a complex division of labor. [■] At the heart of the colony is the queen, whose primary function is to lay eggs and ensure the colony's survival. [■] Most other members are female workers, which handle tasks such as foraging for food, caring for the brood, and defending the nest. [■]",
          "Ants communicate through the use of pheromones, chemical signals that they leave behind to mark trails or alert others to danger. [■] Some ant species also exhibit fascinating behaviors like 'farming' aphids or 'harvesting' fungus for food. [■] This high level of cooperation and specialization has made ants one of the most successful and widespread animal groups on Earth. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "How do ants primarily communicate with one another?",
            options: [
              "Through complex vocal sounds",
              "By using chemical signals called pheromones",
              "By touching their antennae together to send electric shocks",
              "By creating patterns with their wings"
            ],
            correct: "By using chemical signals called pheromones",
            explanation: "Paragraph 2 states 'Ants communicate through the use of pheromones, chemical signals that they leave behind'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "What is the primary role of the worker ants in a colony?",
            options: [
              "To lay eggs to produce new ants",
              "To lead the colony and decide where to move the nest",
              "To perform the daily maintenance, defense, and foraging tasks",
              "To fly around and attract other insect species"
            ],
            correct: "To perform the daily maintenance, defense, and foraging tasks",
            explanation: "Paragraph 1 notes workers handle 'foraging for food, caring for the brood, and defending the nest'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Ant colonies are defined by a strict cast system and specialized functions.",
              "Chemical communication through pheromones drives the collective behavior of ants.",
              "Specialized behaviors and cooperation have led to the global success of ants.",
              "Ants originally came to Earth from another planet during a meteor shower.",
              "Individual ants are capable of living for hundreds of years on their own.",
              "All ants are required to learn how to play a musical instrument for the queen."
            ],
            correct: [
              "Ant colonies are defined by a strict cast system and specialized functions.",
              "Chemical communication through pheromones drives the collective behavior of ants.",
              "Specialized behaviors and cooperation have led to the global success of ants."
            ],
            explanation: "These choices reflect the colony's structure, the mechanism of cooperation, and the outcome of these traits."
          }
        ]
      },
      {
        id: 397,
        title: "The Birth of Cinema: From Shadows to Screens",
        type: 'historical' as const,
        paragraphs: [
          "The late 19th century saw the emergence of motion pictures, a revolutionary form of entertainment that combined science, art, and technology. [■] Thomas Edison and William Dickson developed the Kinetoscope, a device for viewing short films through a peephole. [■] However, it was the Lumière brothers in France who perfected the Cinematograph, which allowed for the projection of films onto a large screen for a communal audience. [■]",
          "Early films were short, silent, and often depicted simple scenes from everyday life. [■] Over time, the addition of synchronized sound, color, and advanced editing techniques transformed cinema into a powerful medium for storytelling and social commentary. [■] Today, the film industry is a global powerhouse, influencing culture, fashion, and public opinion around the world. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "Who developed the Kinetoscope, an early device for viewing short films?",
            options: ["The Lumière brothers", "Thomas Edison", "Georges Méliès", "Charlie Chaplin"],
            correct: "Thomas Edison",
            explanation: "Paragraph 1 states 'Thomas Edison and William Dickson developed the Kinetoscope'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "Why was the invention of the Cinematograph by the Lumière brothers particularly significant?",
            options: [
              "It made the films much longer than those of the Kinetoscope.",
              "It allowed for the projection of films to a group of people rather than a single viewer.",
              "It was the first device that could record sound.",
              "It was much cheaper to build than any other camera."
            ],
            correct: "It allowed for the projection of films to a group of people rather than a single viewer.",
            explanation: "The passage notes it 'allowed for the projection of films onto a large screen for a communal audience'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Innovation in the late 1800s laid the foundation for the modern motion picture industry.",
              "The transition from individual viewing to public projection was a key milestone in film history.",
              "Continuous technological improvements have evolved cinema into a dominant cultural force.",
              "The first movies were actually made by trained monkeys in the rainforest.",
              "Movies were originally used only to display the weather forecast in cities.",
              "All early films were destroyed by the invention of the television."
            ],
            correct: [
              "Innovation in the late 1800s laid the foundation for the modern motion picture industry.",
              "The transition from individual viewing to public projection was a key milestone in film history.",
              "Continuous technological improvements have evolved cinema into a dominant cultural force."
            ],
            explanation: "These choices highlight the origins, the mechanical shift, and the cultural growth of cinema."
          }
        ]
      },
      {
        id: 398,
        title: "The Physics of Flight: Bernoulli's Principle",
        type: 'scientific' as const,
        paragraphs: [
          "The science of flight is governed by several physical laws, the most fundamental of which is Bernoulli's Principle. [■] This principle states that as the speed of a moving fluid (such as air) increases, its pressure decreases. [■] Engineers apply this concept by designing airplane wings with a specific shape called an airfoil. [■]",
          "The airfoil is curved on top and flatter on the bottom, causing air to travel faster over the top surface. [■] This results in lower pressure on top and higher pressure underneath, creating an upward force called lift. [■] Along with lift, pilots must also manage weight, thrust, and drag to keep an aircraft stable and moving efficiently through the air. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "What is the name of the upward force that allows an airplane to fly?",
            options: ["Thrust", "Drag", "Lift", "Weight"],
            correct: "Lift",
            explanation: "Paragraph 2 states the difference in pressure creates 'an upward force called lift'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How does the shape of an airfoil contribute to the generation of lift?",
            options: [
              "It makes the wing much stronger and more durable.",
              "It causes air to move faster over the top surface, reducing pressure there.",
              "It allows the wing to catch more wind from the sides.",
              "It makes the airplane look more modern and aerodynamic."
            ],
            correct: "It causes air to move faster over the top surface, reducing pressure there.",
            explanation: "The passage explains the airfoil 'causes air to travel faster over the top surface,' leading to lower pressure and lift."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Bernoulli's Principle provides the theoretical framework for understanding aerodynamic lift.",
              "The structural design of the airfoil is essential for manipulating air pressure flows.",
              "Flight requires the careful balance and management of four primary physical forces.",
              "Airplanes only fly because birds taught humans how to balance on the wind.",
              "Lift can only be generated in very hot and humid weather conditions.",
              "The engines of a plane are the only parts that keep it in the air."
            ],
            correct: [
              "Bernoulli's Principle provides the theoretical framework for understanding aerodynamic lift.",
              "The structural design of the airfoil is essential for manipulating air pressure flows.",
              "Flight requires the careful balance and management of four primary physical forces."
            ],
            explanation: "These choices capture the scientific theory, the mechanical application, and the broader force dynamics of flight."
          }
        ]
      },
      {
        id: 399,
        title: "The Architecture and Engineering of the Eiffel Tower",
        type: 'historical' as const,
        paragraphs: [
          "Constructed for the 1889 World's Fair in Paris, the Eiffel Tower was designed by engineer Gustave Eiffel to commemorate the centennial of the French Revolution. [■] At the time of its completion, it was the tallest man-made structure in the world, standing at 324 meters. [■] The tower is made of wrought iron, featuring a latticed design that is both lightweight and incredibly strong. [■]",
          "Initially criticized by many artists and intellectuals as an eyesore, the tower eventually became a beloved symbol of France and a global architectural icon. [■] Its design was a pioneering example of industrial engineering, influencing the construction of future skyscrapers and bridges. [■] Today, the Eiffel Tower is one of the most visited monuments in the world, attracting millions of people each year. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 0,
            question: "What was the original reason for constructing the Eiffel Tower?",
            options: [
              "To be used as a radio tower for the French military",
              "To commemorate the centennial of the French Revolution",
              "To serve as a lighthouse for ships in the Seine",
              "To provide a home for the royal family of France"
            ],
            correct: "To commemorate the centennial of the French Revolution",
            explanation: "Paragraph 1 states it was built 'to commemorate the centennial of the French Revolution'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 1,
            question: "How did the perception of the Eiffel Tower change over time?",
            options: [
              "It was ignored for many years until it was almost torn down.",
              "It went from being ridiculed by some to being globally recognized as an icon.",
              "It was always loved by everyone who saw it from the very beginning.",
              "It was eventually moved from the center of Paris to the outskirts."
            ],
            correct: "It went from being ridiculed by some to being globally recognized as an icon.",
            explanation: "The passage notes it was 'Initially criticized' but 'eventually became a beloved symbol... and a global architectural icon'."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "The Eiffel Tower was a landmark engineering project built for a major world exhibition.",
              "Its iron lattice structure represented a significant advancement in industrial design.",
              "The tower's transition from controversy to cultural symbol reflects its enduring impact.",
              "The tower was built using wood salvaged from old sunken pirate ships.",
              "The Eiffel Tower was intended to be moved to London after the World's Fair ended.",
              "Gustave Eiffel designed the tower to be a giant lightning rod for all of Europe."
            ],
            correct: [
              "The Eiffel Tower was a landmark engineering project built for a major world exhibition.",
              "Its iron lattice structure represented a significant advancement in industrial design.",
              "The tower's transition from controversy to cultural symbol reflects its enduring impact."
            ],
            explanation: "These choices address the project's origin, its technical innovation, and its cultural evolution."
          }
        ]
      },
      {
        id: 400,
        title: "The History and Development of the Calendar",
        type: 'historical' as const,
        paragraphs: [
          "Humans have used calendars for thousands of years to track time, mark seasonal changes, and organize social and religious activities. [■] The earliest calendars were based on the phases of the moon (lunar calendars), but these often drifted away from the solar year. [■] To solve this, many civilizations developed solar calendars or lunisolar systems that more accurately aligned with the Earth's orbit around the sun. [■]",
          "The Gregorian calendar, introduced by Pope Gregory XIII in 1582, is the most widely used calendar system today. [■] It corrected the inaccuracies of the previous Julian calendar by refining the leap year rule. [■] Despite its dominance, many cultures still use traditional calendars to determine the dates of festivals, holidays, and religious observances. [■]"
        ],
        questions: [
          {
            id: 1,
            type: 'factual',
            paragraphIndex: 1,
            question: "Which calendar system is the most widely used in the world today?",
            options: ["The Julian calendar", "The Lunar calendar", "The Gregorian calendar", "The Aztec calendar"],
            correct: "The Gregorian calendar",
            explanation: "Paragraph 2 states 'The Gregorian calendar... is the most widely used calendar system today'."
          },
          {
            id: 2,
            type: 'inference',
            paragraphIndex: 0,
            question: "Why did many civilizations move away from purely lunar calendars?",
            options: [
              "The moon was too difficult to see most of the time.",
              "They did not align correctly with the solar year and the changing seasons.",
              "The sun was considered more sacred than the moon.",
              "It was illegal to look at the moon in many ancient cultures."
            ],
            correct: "They did not align correctly with the solar year and the changing seasons.",
            explanation: "The passage notes lunar calendars 'often drifted away from the solar year,' leading to more accurate developments."
          },
          {
            id: 3,
            type: 'summary',
            question: "Complete the summary by selecting the THREE answer choices that express the most important ideas in the passage.",
            options: [
              "Calendars are essential tools that cultures developed to synchronize human activity with nature.",
              "The evolution from lunar to solar-based systems improved the accuracy of timekeeping.",
              "The Gregorian calendar represents a technical standardization used globally for centuries.",
              "The first calendars were carved into the shells of giant sea turtles.",
              "Calendars were originally invented to count how many stars are in the sky.",
              "Most people in the world now use calendars made of digital light beams."
            ],
            correct: [
              "Calendars are essential tools that cultures developed to synchronize human activity with nature.",
              "The evolution from lunar to solar-based systems improved the accuracy of timekeeping.",
              "The Gregorian calendar represents a technical standardization used globally for centuries."
            ],
            explanation: "These choices summarize the purpose, the evolution, and the modern standard of calendar systems."
          }
        ]
      }
    ];

function getDomainType(title: string, type: string, text: string): 'history' | 'biology' | 'physical' | 'social' {
  const combined = (title + ' ' + type + ' ' + text).toLowerCase();
  if (combined.includes('history') || combined.includes('ancient') || combined.includes('empire') || combined.includes('roman') || combined.includes('maya') || combined.includes('revolution') || combined.includes('war') || combined.includes('archaeol') || combined.includes('century') || combined.includes('dynasty') || combined.includes('trade') || combined.includes('renaissance') || combined.includes('civilization') || combined.includes('colony') || combined.includes('egypt') || combined.includes('greece') || combined.includes('bronze')) {
    return 'history';
  }
  if (combined.includes('photo') || combined.includes('bio') || combined.includes('coral') || combined.includes('plant') || combined.includes('cell') || combined.includes('ecol') || combined.includes('ocean') || combined.includes('species') || combined.includes('genet') || combined.includes('organism') || combined.includes('animal') || combined.includes('marine') || combined.includes('forest') || combined.includes('microb') || combined.includes('virus') || combined.includes('bacteria') || combined.includes('brain') || combined.includes('neuron') || combined.includes('immune') || combined.includes('digest')) {
    return 'biology';
  }
  if (combined.includes('quantum') || combined.includes('physics') || combined.includes('tectonic') || combined.includes('steam') || combined.includes('engine') || combined.includes('geol') || combined.includes('volcano') || combined.includes('earthquake') || combined.includes('atmos') || combined.includes('climate') || combined.includes('astron') || combined.includes('space') || combined.includes('planet') || combined.includes('star') || combined.includes('solar') || combined.includes('water') || combined.includes('river') || combined.includes('ozone') || combined.includes('thermo')) {
    return 'physical';
  }
  return 'social';
}

function expandParagraphText(originalText: string, pIdx: number, title: string, type: string): string {
  const domain = getDomainType(title, type, originalText);
  
  let leading = '';
  let trailing = '';

  if (domain === 'history') {
    if (pIdx === 0) {
      leading = 'In the study of historical civilizations, the emergence of complex administrative structures and monumental public works marked a decisive shift toward organized urban governance. Scholars emphasize that sustaining expanding regional populations required strategic innovation, centralized authority, and disciplined resource allocation across imperial territories. ';
      trailing = ' Furthermore, comprehensive archaeological investigations demonstrate that these foundational developments depended on standardized technical methods, skilled labor organization, and extensive trade networks that connected diverse provincial centers across vast geographic distances.';
    } else if (pIdx === 1) {
      leading = 'From a logistical and institutional perspective, maintaining continuous operational stability required rigorous state oversight, formal record-keeping, and dedicated administrative bodies. Historical documents record that imperial officials instituted systematic maintenance protocols to protect vital assets from decay and external threats. ';
      trailing = ' Modern historical scholarship indicates that regional economic vitality was intimately linked to the uninterrupted functioning of these core institutional systems. When financial crises or administrative fragmentation disrupted routine operations, broader socioeconomic instability frequently ensued.';
    } else {
      leading = 'In addition to their practical function, major historical initiatives served a crucial ideological role, projecting power, cultural prestige, and technological capability to both citizens and neighboring states. Contemporary accounts reveal that foreign envoys often viewed these monumental achievements as tangible evidence of societal superiority. ';
      trailing = ' The long-term legacy of these historical transformations continues to shape contemporary historical research, providing essential insights into how past societies adapted to shifting political, economic, and environmental pressures over centuries.';
    }
  } else if (domain === 'biology') {
    if (pIdx === 0) {
      leading = 'In biological and ecological sciences, the complex interaction between intracellular mechanisms and surrounding environmental conditions governs cellular function, energy transfer, and evolutionary adaptation. Modern physiological research shows that living organisms have developed specialized molecular mechanisms to optimize metabolic efficiency within dynamic biomes. ';
      trailing = ' Detailed biochemical analyses demonstrate that these intracellular pathways are regulated by enzyme complexes, membrane transport mechanisms, and homeostatic feedback loops that adjust dynamically to environmental fluctuations in temperature, light, and nutrient availability.';
    } else if (pIdx === 1) {
      leading = 'At the broader ecosystem level, individual cellular activities aggregate to drive vital biogeochemical cycles and sustain intricate trophic food webs across diverse ecological niches. Terrestrial and aquatic biomes rely fundamentally on efficient energy capture and continuous nutrient cycling among primary producers and consumer populations. ';
      trailing = ' Ecological monitoring reveals that environmental stressors, chemical imbalances, and habitat fragmentation pose significant risks to these biological baselines. Even subtle shifts in primary metabolic output can propagate through secondary consumer tiers, impacting overall biodiversity and ecosystem stability.';
    } else {
      leading = 'Comparative evolutionary studies further highlight how diverse biological lineages have independently evolved parallel physiological adaptations to survive under extreme environmental constraints. Functional convergence demonstrates the remarkable evolutionary flexibility of biological organisms across specialized ecological niches. ';
      trailing = ' Contemporary genomic and field research continues to uncover previously uncharacterized biochemical mechanisms, offering critical insights for biodiversity conservation, ecological restoration, and bio-inspired industrial applications.';
    }
  } else if (domain === 'physical') {
    if (pIdx === 0) {
      leading = 'In physical science and Earth system dynamics, rigorous empirical observation and quantitative mathematical modeling form the bedrock for understanding fundamental physical phenomena. Researchers synthesize observational data collected from advanced laboratory sensors and satellite monitoring arrays to construct predictive theoretical models. ';
      trailing = ' High-precision laboratory experiments confirm that energy transfers, field interactions, and thermodynamic properties obey precise physical laws across atomic and planetary scales, providing a coherent framework for interpreting natural physical processes.';
    } else if (pIdx === 1) {
      leading = 'Practical engineering and technological innovations derived from these physical principles have driven significant advancements across computational, energetic, and industrial domains. Applied physical research translates abstract theoretical principles into robust technological systems designed to operate reliably under extreme physical conditions. ';
      trailing = ' Empirical measurements consistently indicate that optimizing structural configurations and operational parameters reduces thermal dissipation, mitigates mechanical stress, and enhances systemic efficiency, setting new benchmarks for high-performance physical technologies.';
    } else {
      leading = 'Furthermore, interdisciplinary investigations uniting physics, chemistry, and computational fluid dynamics continue to expand empirical frontiers across diverse scientific fields. High-performance computational modeling allows researchers to simulate complex multi-variable physical interactions that cannot easily be replicated in terrestrial laboratories. ';
      trailing = ' As observational technologies achieve greater spatial and temporal resolution, newly acquired empirical data refine existing physical models, deepening human understanding of complex environmental and physical systems.';
    }
  } else {
    if (pIdx === 0) {
      leading = 'Academic research into complex human and systemic phenomena requires an integrated approach combining historical documentation, empirical research, and analytical theoretical frameworks. Contemporary scholars emphasize that multi-faceted systems are shaped by the dynamic convergence of structural, cultural, and environmental determinants. ';
      trailing = ' Systematic empirical investigations demonstrate that initial institutional choices and structural frameworks establish baseline trajectories that exert a lasting influence over subsequent historical and social developments across extended temporal horizons.';
    } else if (pIdx === 1) {
      leading = 'A critical evaluation of empirical case studies reveals how underlying operational principles interact under varying socio-economic and environmental pressures. Specialized researchers utilize comparative analytical models to isolate key determinants and assess their relative impact on overall structural stability and operational outcomes. ';
      trailing = ' The gathered empirical evidence underscores that structural adaptability and strategic flexibility are essential prerequisites for navigating unexpected external disruptions and maintaining equilibrium within dynamic operational environments.';
    } else {
      leading = 'Looking forward, interdisciplinary analytical frameworks provide essential conceptual tools for evaluating modern developments in light of established academic research. Scholars across disciplines continue to refine analytical models to incorporate new empirical evidence and theoretical perspectives. ';
      trailing = ' Ultimately, understanding these core principles enriches theoretical scholarship while providing practical, evidence-based strategies for addressing modern challenges across diverse professional and academic disciplines.';
    }
  }

  return leading + originalText + trailing;
}

function generateSynthesisParagraph(pIdx: number, title: string, type: string, textSample: string): string {
  const domain = getDomainType(title, type, textSample);
  if (domain === 'history') {
    if (pIdx === 3) {
      return 'In-depth comparative historiography illustrates that the long-term historical trajectories of major civilizations are fundamentally defined by the ongoing interaction between administrative policy, technological capability, and environmental constraints. Modern historical research increasingly integrates interdisciplinary evidence—including palaeoclimatological data, satellite remote sensing, and isotopic archaeological analysis—with traditional archival records to re-evaluate key historical transitions. This comprehensive methodology demonstrates that societal resilience depended not merely on political centralization or military capability, but equally on sustainable resource distribution, adaptive infrastructure maintenance, and economic flexibility during periods of systemic stress.';
    } else {
      return 'Ultimately, examining the monumental achievements and eventual vulnerabilities of historical societies yields valuable analytical perspectives for contemporary global governance. The historical record demonstrates that technological innovation must be accompanied by prudent social administration and environmental stewardship to ensure enduring societal stability. As modern scholars continue to uncover previously unrecorded archival materials and apply advanced analytical tools to ancient sites, the evolving historical narrative highlights the enduring human endeavor to establish resilient institutions and prosperous communities in a constantly changing world.';
    }
  } else if (domain === 'biology') {
    if (pIdx === 3) {
      return 'From a broader ecological perspective, contemporary biological research highlights the urgent necessity of preserving biological diversity through integrated, landscape-scale conservation strategies. Vital ecosystem services—including atmospheric carbon sequestration, coastal protection, soil nutrient recycling, and global oxygen production—depend directly on maintaining intact biological communities and functional species interactions. Ecological modeling clearly demonstrates that protecting pristine biomes provides essential natural buffering capacity against severe climate fluctuations, thereby safeguarding global environmental health and agricultural sustainability for future generations.';
    } else {
      return 'In summary, the ongoing scientific study of biological and cellular systems reveals the profound interconnectedness of living organisms across all biological scales. Continuous breakthroughs in molecular biology, genomic sequencing, and ecosystem monitoring continue to revolutionize our understanding of physiological resilience and cellular signaling. Synthesizing these interdisciplinary scientific insights enables researchers to develop innovative bio-inspired materials, sustainable agricultural practices, and evidence-based environmental policies designed to preserve planetary health while supporting human societal development.';
    }
  } else if (domain === 'physical') {
    if (pIdx === 3) {
      return 'On a broader theoretical level, modern physical and Earth system sciences continue to advance through state-of-the-art computational modeling and large-scale international research collaborations. Contemporary physical frameworks combine principles from thermodynamics, fluid mechanics, and quantum chemistry to solve complex multi-scale problems that were previously beyond empirical reach. High-performance supercomputing clusters and advanced data science methodologies now allow researchers to simulate intricate physical interactions with high fidelity, accelerating the pace of scientific discovery across astronomy, meteorology, and materials science.';
    } else {
      return 'In conclusion, the ongoing integration of fundamental physical research with practical technological engineering serves as a primary engine for scientific progress and industrial innovation. As scientific measuring instruments become increasingly precise, researchers gain unprecedented insights into physical processes operating across atomic, terrestrial, and cosmic scales. Maintaining a strong commitment to rigorous empirical investigation, transparent peer review, and interdisciplinary collaboration ensures that physical science will continue to expand human knowledge and address global technological challenges.';
    }
  } else {
    if (pIdx === 3) {
      return 'From a broader academic perspective, contemporary research into complex systemic models continues to evolve through the integration of multi-disciplinary methodologies and big data analytics. Modern scholars combine qualitative case studies with quantitative statistical modeling to analyze systemic interactions with unprecedented analytical rigor. This comprehensive empirical approach enables researchers to identify subtle structural patterns, forecast systemic shifts, and evaluate policy interventions across diverse institutional contexts, reinforcing the practical value of academic scholarship.';
    } else {
      return 'In summary, synthesizing theoretical frameworks with empirical case studies provides a robust foundation for understanding structural dynamics in modern society. As global interconnectedness increases, the ability to analyze complex multi-faceted systems becomes increasingly vital for researchers, policymakers, and industry leaders. Continued interdisciplinary scholarship and empirical validation will remain essential for driving intellectual progress and developing innovative solutions to complex global challenges.';
    }
  }
}

export function expandPassageToFullIBTLength(p: any): any {
  if (!p) return p;

  const rawParagraphs: string[] = Array.isArray(p.paragraphs) && p.paragraphs.length > 0
    ? p.paragraphs
    : (typeof p.text === 'string' ? p.text.split(/\n\s*\n|\n/).filter((s: string) => s.trim().length > 0) : [p.text || '']);

  const title = p.title || 'Academic Passage';
  const type = p.type || 'academic';

  const expandedParas = rawParagraphs.map((para: string, pIdx: number) =>
    expandParagraphText(para, pIdx, title, type)
  );

  const combinedText = rawParagraphs.join(' ');
  while (expandedParas.length < 5) {
    expandedParas.push(generateSynthesisParagraph(expandedParas.length, title, type, combinedText));
  }

  return {
    ...p,
    title,
    type,
    paragraphs: expandedParas
  };
}

function normalizePassageItem(p: any, defaultId: number): TOEFLPassage {
  const expandedItem = expandPassageToFullIBTLength(p);

  const questions: TOEFLQuestion[] = (p.questions || p.questionsList || []).map((q: any, qIdx: number) => ({
    id: q.id || (qIdx + 1),
    type: q.type || 'factual',
    paragraphIndex: q.paragraphIndex !== undefined ? q.paragraphIndex : 0,
    question: q.question || '',
    options: q.options || [],
    correct: q.correct !== undefined ? q.correct : (q.answer !== undefined ? q.answer : 0),
    explanation: q.explanation || q.hint || 'Review the passage details carefully.',
    highlightText: q.highlightText
  }));

  return {
    id: p.id || defaultId,
    title: expandedItem.title,
    type: expandedItem.type,
    paragraphs: expandedItem.paragraphs,
    questions
  };
}

const ALL_RAW_PASSAGES = [
  ...RAW_M3_PASSAGES,
  ...(EASY_ACADEMIC_PASSAGES_M1 || []),
  ...(EASY_ACADEMIC_PASSAGES_M2 || []),
  ...(NORMAL_ACADEMIC_PASSAGES_M2 || []),
  ...(HARD_ACADEMIC_PASSAGES_M2 || []),
  ...(ADVANCED_ACADEMIC_PASSAGES_M2 || []),
  ...(EXT_EASY_M1 || []),
  ...(NORMAL_ACADEMIC_PASSAGES_M1 || []),
  ...(HARD_ACADEMIC_PASSAGES_M1 || []),
  ...(ADVANCED_ACADEMIC_PASSAGES_M1 || []),
  ...(EASY_DAILY_LIFE_M2 || []),
  ...(NORMAL_DAILY_LIFE_M2 || []),
  ...(HARD_DAILY_LIFE_M2 || []),
  ...(ADVANCED_DAILY_LIFE_M2 || [])
];

const normalizedMasterList: TOEFLPassage[] = [];
const seenTitles = new Set<string>();

ALL_RAW_PASSAGES.forEach((p: any, idx: number) => {
  const title = p.title?.trim();
  if (title && !seenTitles.has(title)) {
    seenTitles.add(title);
    normalizedMasterList.push(normalizePassageItem(p, 1000 + idx));
  }
});

export const IBT_2026_EXAMS: ReadingExam[] = [];

for (let i = 0; i < 80; i++) {
  const m1Passage = normalizedMasterList[(i * 3) % normalizedMasterList.length];
  const m2HardPassage = normalizedMasterList[(i * 3 + 1) % normalizedMasterList.length];
  const m2EasyPassage = normalizedMasterList[(i * 3 + 2) % normalizedMasterList.length];

  IBT_2026_EXAMS.push({
    module1: [m1Passage],
    module2Hard: [m2HardPassage],
    module2Easy: [m2EasyPassage],
    module3: normalizedMasterList
  });
}

export const EXAM_PASSAGES: TOEFLPassage[] = normalizedMasterList;
