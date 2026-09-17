/**
 * Official ETS-Style TOEFL iBT Formal Mock Examinations
 * 10 Full ETS Formal Practice Tests containing complete university-level academic reading passages
 * and authentic ETS question archetypes (Factual, Negative Factual, Vocabulary, Inference,
 * Rhetorical Purpose, Reference, Sentence Simplification, Insert Text [■], Prose Summary).
 */

export interface ETSQuestion {
  id: string;
  type: 'factual' | 'negative' | 'vocabulary' | 'inference' | 'purpose' | 'reference' | 'simplification' | 'insert' | 'summary';
  paragraphRef?: number;
  highlightedText?: string;
  question?: string;
  options: string[];
  correctAnswer: string | number | string[]; // string for single-choice, number (0-3) for insert squares, string[] for summary
  insertSentence?: string;
  insertPositions?: { paragraphIndex: number; charOffset?: number }[];
  summaryPrompt?: string;
  explanation: string;
}

export interface ETSFormalPassage {
  id: string;
  passageNumber: number;
  title: string;
  subject: string;
  discipline: string;
  wordCount: number;
  paragraphs: string[];
  questions: ETSQuestion[];
}

export interface ETSFormalTest {
  id: string;
  testNumber: number;
  title: string;
  discipline: string;
  description: string;
  timeLimitMinutes: number;
  totalQuestions: number;
  passages: ETSFormalPassage[];
}

export const ETS_FORMAL_TESTS: ETSFormalTest[] = [
  // =========================================================================
  // TEST 1: The Cambrian Explosion and Evolutionary Radiations (Paleobiology)
  // =========================================================================
  {
    id: 'ets-test-1',
    testNumber: 1,
    title: 'The Cambrian Explosion and the Emergence of Metazoan Body Plans',
    discipline: 'Paleobiology & Evolutionary Zoology',
    description: 'Investigates the geologically rapid appearance of complex bilaterian animal phyla during the early Cambrian period (~541 Ma), exploring oxygenation pulses, predator-prey arms races, and developmental gene duplications.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-1-passage-1',
        passageNumber: 1,
        title: 'The Cambrian Explosion and the Genesis of Bilaterian Phyla',
        subject: 'Paleobiology',
        discipline: 'Evolutionary Biology',
        wordCount: 720,
        paragraphs: [
          "The fossil record reveals a dramatic transition at the beginning of the Cambrian period, approximately 541 million years ago, widely termed the 'Cambrian Explosion.' In a geologically brief interval spanning roughly 20 to 25 million years, virtually all contemporary animal phyla with biomineralized skeletal structures made their initial appearance. Prior to this boundary, during the late Ediacaran epoch, macroscopic multicellular life was predominantly represented by soft-bodied organisms known as the Ediacara biota—frond-like, modular, and quilted forms that generally lacked cephalization, specialized appendages, and mineralized armor. [■] The abruptness of the Cambrian transition puzzled Charles Darwin, who candidly acknowledged in On the Origin of Species that the apparent absence of fossilized ancestors posed a severe challenge to his model of gradualist phyletic change. [■]",
          
          "Subsequent paleontological discoveries in conservation lagerstätten—such as the Burgess Shale in British Columbia, the Chengjiang formation in Yunnan Province, China, and Sirius Passet in northern Greenland—have substantially clarified the chronology and ecological dynamics of the event. Rather than representing an instantaneous creation of anatomical forms ex nihilo, the Cambrian radiation is increasingly understood as a multifaceted convergence of extrinsic geochemical shifts and intrinsic biological innovations. Among geochemical catalysts, a persistent rise in oceanic dissolved oxygen concentrations is widely deemed paramount. Biomineralization—the metabolic synthesis of calcium carbonate and calcium phosphate shells—demands substantial metabolic energy, as does the sustenance of active predatory locomotion, both of which became energetically feasible only when atmospheric and marine oxygen crossed critical physiological thresholds. [■]",
          
          "Concurrently, the emergence of macroscopic carnivory initiated a potent ecological feedback loop termed the 'predator-prey arms race.' The proliferation of active hunting organisms, such as Anomalocaris—a apex marine predator equipped with compound eyes and spiny grasping appendages—exerted intense selective pressure on benthic prey organisms. In response, natural selection favored the evolution of sclerotized exoskeletons, burrowing adaptations (infanticidal and escape bioturbation), and enhanced sensory apparati. As burrowing organisms penetrated deeper into oceanic substrates, they engaged in 'ecological engineering,' mixing oxygenated water into previously anoxic sediments and radically altering geochemical nutrient cycling, a process that generated novel sub-surface microhabitats. [■]",
          
          "From a developmental standpoint, recent advances in evolutionary developmental biology ('evo-devo') suggest that the foundational genetic toolkit of bilaterian animals—most notably the Hox gene clusters responsible for specifying anteroposterior body patterning—had already evolved in soft-bodied Precambrian ancestors. Thus, the rapid phenotypic diversification of the Cambrian did not require the de novo invention of novel developmental genes; rather, it involved the co-option, duplication, and re-wiring of pre-existing regulatory gene networks. When combined with permissive environmental conditions and vacant ecological niches resulting from the late Ediacaran mass extinction, this modular genetic architecture permitted an unprecedented burst of morphological experimentation that established the anatomical blueprints of modern animal life."
        ],
        questions: [
          {
            id: 't1-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, what characterized the majority of macroscopic organisms during the late Ediacaran epoch?',
            options: [
              'They possessed thick calcium carbonate shells and hard exoskeletons.',
              'They were soft-bodied, quilted organisms that mostly lacked mineralized armor and specialized appendages.',
              'They exhibited advanced cephalization and predatory hunting strategies.',
              'They were identical in body plans to modern arthropods and chordates.'
            ],
            correctAnswer: 'They were soft-bodied, quilted organisms that mostly lacked mineralized armor and specialized appendages.',
            explanation: 'Paragraph 1 explicitly states that prior to the Cambrian boundary, macroscopic multicellular life was predominantly soft-bodied Ediacaran organisms—"frond-like, modular, and quilted forms that generally lacked cephalization, specialized appendages, and mineralized armor."'
          },
          {
            id: 't1-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'paramount',
            question: 'The word "paramount" in paragraph 2 is closest in meaning to:',
            options: [
              'unprecedented',
              'supreme in importance',
              'barely detectable',
              'ecologically hazardous'
            ],
            correctAnswer: 'supreme in importance',
            explanation: '"Paramount" means of the greatest or supreme importance. In the context of catalysts for the Cambrian explosion, dissolved oxygen is described as the most critical/foremost factor.'
          },
          {
            id: 't1-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, why was an increase in dissolved oceanic oxygen necessary for the evolution of biomineralization and active hunting?',
            options: [
              'Oxygen was the sole chemical ingredient in calcium carbonate shells.',
              'Sustaining active predatory movement and synthesizing mineralized shells required substantial metabolic energy.',
              'Higher oxygen levels destroyed the toxic minerals that prevented organisms from growing large.',
              'Ediacaran predators had consumed all the available carbon dioxide in shallow marine environments.'
            ],
            correctAnswer: 'Sustaining active predatory movement and synthesizing mineralized shells required substantial metabolic energy.',
            explanation: 'Paragraph 2 notes that "Biomineralization... demands substantial metabolic energy, as does the sustenance of active predatory locomotion, both of which became energetically feasible only when atmospheric and marine oxygen crossed critical physiological thresholds."'
          },
          {
            id: 't1-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following can be inferred from paragraph 3 about the ecological impact of burrowing organisms?',
            options: [
              'Their activities led to the rapid extinction of apex predators like Anomalocaris.',
              'By churning sediment, they allowed oxygen to penetrate deeper into the seafloor, creating new habitable niches.',
              'They prevented biomineralization by consuming dissolved calcium phosphate.',
              'They were completely immune to attacks by macroscopic carnivores.'
            ],
            correctAnswer: 'By churning sediment, they allowed oxygen to penetrate deeper into the seafloor, creating new habitable niches.',
            explanation: 'Paragraph 3 describes how burrowers mixed "oxygenated water into previously anoxic sediments and radically altering geochemical nutrient cycling, a process that generated novel sub-surface microhabitats."'
          },
          {
            id: 't1-q5',
            type: 'purpose',
            paragraphRef: 3,
            highlightedText: 'Anomalocaris',
            question: 'Why does the author mention "Anomalocaris" in paragraph 3?',
            options: [
              'To provide an example of a late Ediacaran organism that lacked eyes and grasping limbs',
              'To illustrate an apex predator whose hunting pressure stimulated evolutionary defenses in prey species',
              'To prove that all Cambrian organisms possessed soft bodies without exoskeletons',
              'To demonstrate that burrowing was ineffective as an escape mechanism'
            ],
            correctAnswer: 'To illustrate an apex predator whose hunting pressure stimulated evolutionary defenses in prey species',
            explanation: 'The author introduces Anomalocaris explicitly as "an apex marine predator equipped with compound eyes and spiny grasping appendages" that exerted intense selective pressure initiating the predator-prey arms race.'
          },
          {
            id: 't1-q6',
            type: 'reference',
            paragraphRef: 4,
            highlightedText: 'it',
            question: 'The word "it" in paragraph 4 (sentence: "it involved the co-option, duplication, and re-wiring...") refers to:',
            options: [
              'the rapid phenotypic diversification',
              'the foundational genetic toolkit',
              'the late Ediacaran mass extinction',
              'the Hox gene cluster'
            ],
            correctAnswer: 'the rapid phenotypic diversification',
            explanation: 'In paragraph 4, the text reads: "Thus, the rapid phenotypic diversification of the Cambrian did not require the de novo invention of novel developmental genes; rather, it involved the co-option, duplication, and re-wiring..." Here "it" refers back to "the rapid phenotypic diversification of the Cambrian".'
          },
          {
            id: 't1-q7',
            type: 'negative',
            paragraphRef: 4,
            question: 'According to paragraph 4, all of the following facilitated the Cambrian diversification EXCEPT:',
            options: [
              'The co-option and re-wiring of pre-existing regulatory gene networks',
              'The sudden creation of entirely new genetic toolkits from scratch',
              'Permissive environmental conditions such as elevated oxygen levels',
              'Vacant ecological niches following the late Ediacaran extinction'
            ],
            correctAnswer: 'The sudden creation of entirely new genetic toolkits from scratch',
            explanation: 'Paragraph 4 explicitly states that Cambrian diversification "did not require the de novo invention of novel developmental genes," making option B the correct EXCEPT answer.'
          },
          {
            id: 't1-q8',
            type: 'simplification',
            paragraphRef: 1,
            highlightedText: 'The abruptness of the Cambrian transition puzzled Charles Darwin, who candidly acknowledged in On the Origin of Species that the apparent absence of fossilized ancestors posed a severe challenge to his model of gradualist phyletic change.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 1? Incorrect choices change the meaning in important ways or leave out essential information.',
            options: [
              'Darwin rejected his theory of evolution because the Cambrian fossils proved that species do not change over time.',
              'Because early ancestral fossils appeared missing, the rapid appearance of Cambrian animals created a major difficulty for Darwin\'s theory of gradual evolution.',
              'Darwin explained in his book that the Cambrian explosion was conclusive evidence supporting gradual phyletic transformation.',
              'The discovery of ancestors in the Cambrian period confirmed Darwin\'s prediction about gradual evolutionary changes.'
            ],
            correctAnswer: 'Because early ancestral fossils appeared missing, the rapid appearance of Cambrian animals created a major difficulty for Darwin\'s theory of gradual evolution.',
            explanation: 'Option B accurately captures both core clauses: Darwin was troubled by the lack of prior fossils, and this sudden appearance challenged his hypothesis of gradual evolutionary change.'
          },
          {
            id: 't1-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"These exceptional fossil beds preserved delicate soft tissues that are normally lost during standard fossilization processes."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 3)'
            ],
            insertSentence: 'These exceptional fossil beds preserved delicate soft tissues that are normally lost during standard fossilization processes.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 immediately follows the sentence naming the conservation lagerstätten (Burgess Shale, Chengjiang, Sirius Passet). "These exceptional fossil beds" directly references these specific fossil sites.'
          },
          {
            id: 't1-q10',
            type: 'summary',
            summaryPrompt: 'The Cambrian explosion was a transformative evolutionary radiation that produced modern animal body plans.',
            options: [
              'The transition was driven by a combination of rising dissolved oxygen levels and metabolic biomineralization.',
              'Predator-prey interactions stimulated anatomical innovations like exoskeletons and sediment bioturbation.',
              'Cambrian animals evolved entirely new genetic codes that had never existed in any previous Precambrian organism.',
              'The rapid morphological radiation utilized pre-existing developmental gene networks such as Hox gene clusters.',
              'Darwin proved that the Ediacaran biota were direct ancestors of modern arthropods by finding mineralized shell fossils.',
              'Burrowing animals depleted oceanic oxygen levels, causing an immediate mass extinction of all soft-bodied organisms.'
            ],
            correctAnswer: [
              'The transition was driven by a combination of rising dissolved oxygen levels and metabolic biomineralization.',
              'Predator-prey interactions stimulated anatomical innovations like exoskeletons and sediment bioturbation.',
              'The rapid morphological radiation utilized pre-existing developmental gene networks such as Hox gene clusters.'
            ],
            explanation: 'The three correct summary statements represent the major themes of the passage: geochemical triggers (oxygen/biomineralization), ecological arms races (predators/burrowing), and developmental genetics (co-option of Hox toolkits). Options C, E, and F contain factual falsehoods or misinterpretations.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 2: Glacial Geomorphology and Alpine Landscape Evolution (Geology)
  // =========================================================================
  {
    id: 'ets-test-2',
    testNumber: 2,
    title: 'Glacial Geomorphology and the Sculpting of Alpine Landscapes',
    discipline: 'Earth Sciences & Geomorphology',
    description: 'Analyzes the erosional mechanisms of valley glaciers, examining basal sliding, subglacial abrasion, plucking, and the structural transformation of V-shaped fluvial valleys into glacial troughs and fjords.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-2-passage-1',
        passageNumber: 1,
        title: 'Mechanisms of Glacial Erosion and Alpine Valley Evolution',
        subject: 'Geology',
        discipline: 'Geomorphology',
        wordCount: 710,
        paragraphs: [
          "Glaciers are among the most potent geomorphic agents shaping continental surfaces. Unlike fluvial systems, which transport sediment through fluid turbulent flow, glaciers act as massive plastic solids capable of gouging bedrock under immense lithostatic pressure. When alpine glaciers advance down pre-existing stream valleys, they radically alter the topography, converting narrow, steep-sided V-shaped valleys into broad, steep-walled, flat-bottomed U-shaped troughs. [■] This morphological transformation is accomplished through two primary subglacial erosional processes: abrasion and plucking (quarrying). [■]",
          
          "Abrasion occurs when rock clasts entrained within the basal ice are dragged across underlying bedrock. Under high confining pressure, these rock fragments act as cutting tools, grooving, polishing, and scratching the bedrock surface to produce linear striations and microscopic rock flour. The rate of abrasion is governed by basal sliding velocity, the concentration and hardness of entrained clasts relative to the bedrock, and the effective normal stress exerted by the overlying ice mass. However, if basal debris concentration becomes excessively high, basal friction increases, which can paradoxically decelerate basal sliding and diminish the net erosive yield. [■]",
          
          "In contrast, plucking is a discontinuous, highly destructive mechanism that dislodges large blocks of jointed bedrock. As ice moves over bedrock obstacles, localized stress differentials occur: high compressive stress on the upstream (stoss) face and pressure release on the downstream (lee) face. On the lee side, subglacial meltwater frequently infiltrates open joints and fissures. When fluctuations in basal water pressure occur, freeze-thaw cycles and hydraulic wedging loosen rock blocks, which are subsequently frozen into the moving ice matrix and transported down-valley. Plucking produces asymmetric rock formations known as roche moutonnées, characterized by smooth, abraded stoss slopes and steep, jagged, plucked lee cliffs. [■]",
          
          "The long-term consequence of repetitive Pleistocene glacial-interglacial cycles in mountainous terrain is the creation of a distinctive suite of landforms. Tributary valleys, possessing smaller ice volumes and consequently lower erosional capacity than the primary trunk glacier, are eroded to shallower depths. Upon deglaciation, these tributary valleys terminate abruptly high above the main trough floor, forming hanging valleys that host dramatic waterfalls. Furthermore, headward erosion by multiple cirque glaciers carving into a central mountain peak produces sharp, knife-like ridges termed arêtes, and steep pyramidal peaks known as glacial horns, of which the Matterhorn in the Pennine Alps is a quintessential archetype."
        ],
        questions: [
          {
            id: 't2-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, how do glaciers fundamentally differ from rivers in their sediment transport and erosional mechanisms?',
            options: [
              'Glaciers carry sediment exclusively in suspension without touching bedrock.',
              'Glaciers act as plastic solids that gouge bedrock under immense pressure, unlike the fluid turbulent flow of rivers.',
              'Rivers create broad U-shaped troughs whereas glaciers create narrow V-shaped canyons.',
              'Glaciers only erode rock through chemical dissolution rather than physical mechanics.'
            ],
            correctAnswer: 'Glaciers act as plastic solids that gouge bedrock under immense pressure, unlike the fluid turbulent flow of rivers.',
            explanation: 'Paragraph 1 notes that "Unlike fluvial systems, which transport sediment through fluid turbulent flow, glaciers act as massive plastic solids capable of gouging bedrock under immense lithostatic pressure."'
          },
          {
            id: 't2-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'entrained',
            question: 'The word "entrained" in paragraph 2 is closest in meaning to:',
            options: [
              'trapped and carried along',
              'dissolved chemically',
              'chemically purified',
              'ejected violently'
            ],
            correctAnswer: 'trapped and carried along',
            explanation: '"Entrained" in geology means incorporated and carried along within a moving fluid or ice medium.'
          },
          {
            id: 't2-q3',
            type: 'inference',
            paragraphRef: 2,
            question: 'What can be inferred from paragraph 2 regarding the relationship between debris concentration and glacial abrasion?',
            options: [
              'Adding more debris always increases the rate of abrasion indefinitely.',
              'Clean ice with no rock debris is the most effective medium for scratching bedrock.',
              'Excessive amounts of debris can increase friction so much that the glacier slows down, reducing total erosion.',
              'Rock flour acts as a lubricant that speeds up basal sliding without causing any abrasion.'
            ],
            correctAnswer: 'Excessive amounts of debris can increase friction so much that the glacier slows down, reducing total erosion.',
            explanation: 'Paragraph 2 explains that "if basal debris concentration becomes excessively high, basal friction increases, which can paradoxically decelerate basal sliding and diminish the net erosive yield."'
          },
          {
            id: 't2-q4',
            type: 'factual',
            paragraphRef: 3,
            question: 'According to paragraph 3, what causes the jagged appearance on the lee side of a roche moutonnée?',
            options: [
              'Constant sandblasting by microscopic rock flour',
              'Meltwater freezing in bedrock fractures and plucking loosened rock blocks into the moving ice',
              'Direct exposure to atmospheric solar radiation and wind abrasion',
              'The high compressive pressure pushing down on the upstream face'
            ],
            correctAnswer: 'Meltwater freezing in bedrock fractures and plucking loosened rock blocks into the moving ice',
            explanation: 'Paragraph 3 details how meltwater enters joints on the lee side, freeze-thaw/hydraulic wedging loosens blocks, and the ice plucks them away, leaving steep, jagged cliffs.'
          },
          {
            id: 't2-q5',
            type: 'purpose',
            paragraphRef: 4,
            highlightedText: 'the Matterhorn',
            question: 'Why does the author mention "the Matterhorn" in paragraph 4?',
            options: [
              'To identify a mountain unaffected by Pleistocene glacial erosion',
              'To provide a famous classic example of a glacial horn formed by intersecting cirques',
              'To show how tributary glaciers create flat-bottomed troughs',
              'To explain why V-shaped river valleys resist ice carving'
            ],
            correctAnswer: 'To provide a famous classic example of a glacial horn formed by intersecting cirques',
            explanation: 'The Matterhorn is cited as "a quintessential archetype" of a pyramidal glacial horn formed by headward cirque erosion.'
          },
          {
            id: 't2-q6',
            type: 'factual',
            paragraphRef: 4,
            question: 'According to paragraph 4, what explains the formation of hanging valleys?',
            options: [
              'Tributary glaciers, having less ice volume, erode their valleys less deeply than the main trunk glacier.',
              'Underground rivers collapse the roofs of tributary caves after ice retreats.',
              'Earthquakes lift the tributary valleys above the main valley floor.',
              'Wind erosion deepens the central valley while leaving side valleys untouched.'
            ],
            correctAnswer: 'Tributary glaciers, having less ice volume, erode their valleys less deeply than the main trunk glacier.',
            explanation: 'Paragraph 4 states that "Tributary valleys, possessing smaller ice volumes and consequently lower erosional capacity than the primary trunk glacier, are eroded to shallower depths."'
          },
          {
            id: 't2-q7',
            type: 'simplification',
            paragraphRef: 1,
            highlightedText: 'When alpine glaciers advance down pre-existing stream valleys, they radically alter the topography, converting narrow, steep-sided V-shaped valleys into broad, steep-walled, flat-bottomed U-shaped troughs.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 1?',
            options: [
              'Glaciers move through V-shaped valleys without significantly modifying the surrounding mountain topography.',
              'As glaciers flow through river valleys, they dramatically reshape them from narrow V-shapes into wide, flat-bottomed U-shapes.',
              'Stream erosion is responsible for transforming U-shaped troughs back into narrow V-shaped gorges.',
              'Alpine glaciers prefer flowing through U-shaped valleys because V-shaped valleys are too steep.'
            ],
            correctAnswer: 'As glaciers flow through river valleys, they dramatically reshape them from narrow V-shapes into wide, flat-bottomed U-shapes.',
            explanation: 'Option B accurately summarizes the transition from stream-cut V-shaped valleys to wide, flat U-shaped glacial troughs.'
          },
          {
            id: 't2-q8',
            type: 'negative',
            paragraphRef: 4,
            question: 'All of the following landforms are mentioned in paragraph 4 as resulting from alpine glaciation EXCEPT:',
            options: [
              'Hanging valleys',
              'Arêtes',
              'Glacial horns',
              'Sand dunes'
            ],
            correctAnswer: 'Sand dunes',
            explanation: 'Hanging valleys, arêtes, and glacial horns are all explicitly mentioned in paragraph 4. Sand dunes are aeolian features and are not mentioned.'
          },
          {
            id: 't2-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"These scratches provide geologists with unambiguous evidence regarding the former direction of ice flow."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 3)'
            ],
            insertSentence: 'These scratches provide geologists with unambiguous evidence regarding the former direction of ice flow.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 immediately follows the description of striations ("grooving, polishing, and scratching the bedrock surface to produce linear striations"). "These scratches" refers directly to these linear striations.'
          },
          {
            id: 't2-q10',
            type: 'summary',
            summaryPrompt: 'Alpine glaciers reshape mountainous terrain through distinct subglacial erosional processes and create characteristic alpine landforms.',
            options: [
              'Abrasion polishes and striates bedrock as rock fragments embedded in the ice base are dragged across the rock floor.',
              'Plucking quarrying occurs when meltwater freezes in rock joints and dislodges large rock slabs on the lee side of obstacles.',
              'Glacial erosion transforms stream-cut valleys into U-shaped troughs, leaving features like hanging valleys, arêtes, and horns.',
              'Glaciers are incapable of carving solid bedrock unless underground volcanic magma pre-melts the terrain.',
              'All glacial troughs eventually revert to V-shaped canyons within several weeks after ice retreat.',
              'Roche moutonnées are formed solely by windblown sand scouring soft sedimentary layers.'
            ],
            correctAnswer: [
              'Abrasion polishes and striates bedrock as rock fragments embedded in the ice base are dragged across the rock floor.',
              'Plucking quarrying occurs when meltwater freezes in rock joints and dislodges large rock slabs on the lee side of obstacles.',
              'Glacial erosion transforms stream-cut valleys into U-shaped troughs, leaving features like hanging valleys, arêtes, and horns.'
            ],
            explanation: 'Options A, B, and C capture the core principles of abrasion, plucking, and the resulting macro-landforms. Options D, E, and F contain blatant scientific inaccuracies.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 3: Urbanism & State Formation in Ancient Mesopotamia (Archaeology)
  // =========================================================================
  {
    id: 'ets-test-3',
    testNumber: 3,
    title: 'Hydraulic Management and the Rise of Urbanism in Ancient Mesopotamia',
    discipline: 'Archaeology & Ancient Civilizations',
    description: 'Examines the socioeconomic catalysts of the Uruk period urban revolution in southern Mesopotamia, exploring canal irrigation, institutional temple economies, cuneiform accounting, and elite administration.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-3-passage-1',
        passageNumber: 1,
        title: 'Irrigation, Bureaucracy, and Urban Emergence in Southern Mesopotamia',
        subject: 'Archaeology',
        discipline: 'Ancient History',
        wordCount: 730,
        paragraphs: [
          "During the fourth millennium BCE, the alluvial plains of southern Mesopotamia witnessed the emergence of the world's earliest cities, a socio-political transformation frequently designated the 'Urban Revolution.' In cities such as Uruk, settlement size expanded exponentially, reaching populations exceeding 40,000 inhabitants. This demographic concentration occurred in an arid landscape receiving less than 200 millimeters of annual precipitation—far below the threshold required for dry farming. [■] Survival and surplus generation were contingent entirely upon exploiting the perennial waters of the Tigris and Euphrates rivers through elaborate canal irrigation networks. [■]",
          
          "Constructing, maintaining, and regulating these extensive irrigation systems demanded coordinated collective labor that surpassed the organizational capacity of autonomous kinship groups. Siltation posed a relentless challenge; both rivers carried massive sedimentary loads from the Anatolian highlands, which rapidly choked canal beds if not routinely dredged. Furthermore, the timing of the annual floods—occurring unpredictably in late spring when winter cereal crops were maturing rather than during autumn planting—necessitated the construction of retaining levees, storage basins, and sluice gates to prevent devastating inundations. [■] These hydrological imperatives provided a powerful impetus for centralized administrative oversight, which coalesced around institutional temple complexes.",
          
          "The Sumerian temple, dedicated to patron deities, functioned not merely as a sanctuary for ritual veneration but as the economic epicenter of the emergent city-state. Priestly elites managed vast communal agricultural estates, mobilized conscripted labor corvées, and regulated the redistribution of grain, wool, and dairy products. To administer these increasingly intricate economic transactions, Mesopotamian scribes devised proto-cuneiform pictographic script on clay tablets around 3200 BCE. Initially utilized almost exclusively for accounting inventories, ration allotments, and land tenure records, writing served as a managerial technology of social control, reinforcing bureaucratic hierarchies.",
          
          "Concurrently, urban concentration catalyzed radical shifts in craft specialization and labor organization. The widespread adoption of the potter's wheel and standardized bevel-rimmed bowls—mass-produced ceramic vessels utilized for dispensing standardized rations of barley to labor gangs—signals the transition from domestic household craft to factory-like institutional production. Moreover, because the southern alluvium was utterly devoid of timber, metals, and building stone, urban elites established extensive long-distance trade networks extending into the Zagros Mountains, the Levant, and the Persian Gulf. This insatiable demand for prestige goods and structural raw materials stimulated the export of surplus textiles and processed agricultural commodities, embedding the Mesopotamian core in a vast regional interaction sphere. [■]"
        ],
        questions: [
          {
            id: 't3-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, why was canal irrigation indispensable for the inhabitants of southern Mesopotamia?',
            options: [
              'The region received abundant rain that needed to be drained into the sea.',
              'Annual rainfall was under 200 millimeters, making dry farming impossible without river water management.',
              'Rivers were dry year-round and required underground springs to fill.',
              'Urban residents refused to eat wild game or forage in the marshes.'
            ],
            correctAnswer: 'Annual rainfall was under 200 millimeters, making dry farming impossible without river water management.',
            explanation: 'Paragraph 1 states that the arid landscape received "less than 200 millimeters of annual precipitation—far below the threshold required for dry farming," making canal irrigation essential.'
          },
          {
            id: 't3-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'impetus',
            question: 'The word "impetus" in paragraph 2 is closest in meaning to:',
            options: [
              'driving force',
              'permanent barrier',
              'unexpected consequence',
              'religious ritual'
            ],
            correctAnswer: 'driving force',
            explanation: '"Impetus" means a driving force or stimulus that encourages an activity to develop.'
          },
          {
            id: 't3-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, what problem was caused by the timing of the annual river floods?',
            options: [
              'Floods occurred in winter when the ground was frozen solid.',
              'Floods occurred in late spring when crops were maturing, threatening to destroy harvests without levees.',
              'Floods washed away the Anatolian highlands and prevented silt from settling.',
              'Canals were completely drained of water during the spring planting season.'
            ],
            correctAnswer: 'Floods occurred in late spring when crops were maturing, threatening to destroy harvests without levees.',
            explanation: 'Paragraph 2 notes: "the timing of the annual floods—occurring unpredictably in late spring when winter cereal crops were maturing rather than during autumn planting—necessitated the construction of retaining levees... to prevent devastating inundations."'
          },
          {
            id: 't3-q4',
            type: 'purpose',
            paragraphRef: 3,
            question: 'In paragraph 3, why does the author discuss the development of proto-cuneiform writing?',
            options: [
              'To show that Mesopotamians wrote epic poetry before creating cities',
              'To illustrate how writing originated primarily as an accounting and administrative tool for temple economic control',
              'To prove that temple priests were illiterate and relied on foreign scribes',
              'To explain why clay tablets were exported to distant mountain cultures'
            ],
            correctAnswer: 'To illustrate how writing originated primarily as an accounting and administrative tool for temple economic control',
            explanation: 'Paragraph 3 explains that writing was "Initially utilized almost exclusively for accounting inventories, ration allotments, and land tenure records... as a managerial technology of social control."'
          },
          {
            id: 't3-q5',
            type: 'factual',
            paragraphRef: 4,
            question: 'According to paragraph 4, what were bevel-rimmed bowls primarily used for in the Uruk economy?',
            options: [
              'Luxury dining services reserved exclusively for kings and high priests',
              'Dispensing standardized daily rations of barley to institutional labor gangs',
              'Storing precious oils for long-distance maritime export',
              'Baking bread inside domestic residential hearths'
            ],
            correctAnswer: 'Dispensing standardized daily rations of barley to institutional labor gangs',
            explanation: 'Paragraph 4 states that bevel-rimmed bowls were "mass-produced ceramic vessels utilized for dispensing standardized rations of barley to labor gangs."'
          },
          {
            id: 't3-q6',
            type: 'inference',
            paragraphRef: 4,
            question: 'Which of the following can be inferred from paragraph 4 about the resource endowment of southern Mesopotamia?',
            options: [
              'The region was rich in precious metals and hardwood forests but lacked fertile soil.',
              'Because the alluvium lacked essential industrial materials like timber and stone, trade was vital for urban development.',
              'Mesopotamian cities were entirely self-sufficient and avoided interaction with outside regions.',
              'Craft specialization declined because foreign merchants monopolized pottery production.'
            ],
            correctAnswer: 'Because the alluvium lacked essential industrial materials like timber and stone, trade was vital for urban development.',
            explanation: 'Paragraph 4 states that "the southern alluvium was utterly devoid of timber, metals, and building stone, urban elites established extensive long-distance trade networks... embedding the Mesopotamian core in a vast regional interaction sphere."'
          },
          {
            id: 't3-q7',
            type: 'simplification',
            paragraphRef: 3,
            highlightedText: 'The Sumerian temple, dedicated to patron deities, functioned not merely as a sanctuary for ritual veneration but as the economic epicenter of the emergent city-state.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 3?',
            options: [
              'Temples in Sumer were strictly religious buildings that avoided any involvement in local trade.',
              'Sumerian temples served both as religious worship centers and as the primary hubs of urban economic activity.',
              'Economic decline in city-states forced temple priests to abandon religious rituals in favor of farming.',
              'Patron deities were worshipped only when the city-state achieved agricultural self-sufficiency.'
            ],
            correctAnswer: 'Sumerian temples served both as religious worship centers and as the primary hubs of urban economic activity.',
            explanation: 'Option B accurately expresses both the sacred ritual function and the central economic management role of the Sumerian temple.'
          },
          {
            id: 't3-q8',
            type: 'negative',
            paragraphRef: 3,
            question: 'According to paragraph 3, all of the following were functions of the temple priesthood EXCEPT:',
            options: [
              'Managing vast communal agricultural estates',
              'Mobilizing conscripted labor corvées',
              'Regulating the redistribution of grain, wool, and dairy goods',
              'Leading military conquests of the Anatolian highlands'
            ],
            correctAnswer: 'Leading military conquests of the Anatolian highlands',
            explanation: 'Paragraph 3 explicitly lists managing estates, mobilizing labor, and redistributing food/wool. Military conquest of Anatolia is not mentioned.'
          },
          {
            id: 't3-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"Without such cooperative waterworks, crop failures and catastrophic flooding would have rendered permanent dense settlement unviable."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 4)'
            ],
            insertSentence: 'Without such cooperative waterworks, crop failures and catastrophic flooding would have rendered permanent dense settlement unviable.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 follows the explanation of retaining levees, storage basins, and sluice gates needed to prevent inundations. "Without such cooperative waterworks" directly refers to these water management constructions.'
          },
          {
            id: 't3-q10',
            type: 'summary',
            summaryPrompt: 'The rise of urban civilization in ancient southern Mesopotamia was driven by environmental challenges and institutional organization.',
            options: [
              'Arid conditions required large-scale canal irrigation, which spurred centralized administrative management.',
              'Temples acted as the economic and administrative core, using early writing to track surplus labor and goods.',
              'A lack of native metals, timber, and stone led to long-distance trade fueled by manufactured textile and agricultural surpluses.',
              'Urbanization was delayed until the invention of iron plows in the late Roman period.',
              'Mesopotamian cities relied primarily on dry farming without needing irrigation from the Euphrates River.',
              'Priests strictly prohibited craft specialization, keeping all pottery production inside private households.'
            ],
            correctAnswer: [
              'Arid conditions required large-scale canal irrigation, which spurred centralized administrative management.',
              'Temples acted as the economic and administrative core, using early writing to track surplus labor and goods.',
              'A lack of native metals, timber, and stone led to long-distance trade fueled by manufactured textile and agricultural surpluses.'
            ],
            explanation: 'Options A, B, and C represent the core structural pillars of Mesopotamian urbanization presented in the passage. Options D, E, and F contain historical and factual falsehoods.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 4: Martian Atmospheric Dynamics & Dust Storms (Planetary Astronomy)
  // =========================================================================
  {
    id: 'ets-test-4',
    testNumber: 4,
    title: 'Atmospheric Dynamics and Global Dust Storms on Mars',
    discipline: 'Planetary Science & Astronomy',
    description: 'Investigates the meteorology of Mars, analyzing solar insolation, thermal inertia, dust devils, radiative-convective feedbacks, and the planet-encircling dust storms observed by orbital spacecraft.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-4-passage-1',
        passageNumber: 1,
        title: 'Photochemistry, Thermal Feedbacks, and Martian Dust Storms',
        subject: 'Planetary Science',
        discipline: 'Astronomy',
        wordCount: 715,
        paragraphs: [
          "The atmosphere of Mars is extraordinarily tenuous, possessing a mean surface pressure of approximately 6.1 millibars—less than one percent of Earth's sea-level atmospheric density. Dominated by carbon dioxide (95.3%), nitrogen (2.6%), and argon (1.9%), the thin Martian atmosphere exhibits low heat capacity and low thermal inertia. Consequently, ground and atmospheric temperatures respond almost instantaneously to diurnal variations in solar insolation. [■] Despite this low atmospheric density, Mars hosts some of the most violent and visually dramatic aeolian phenomena in the solar system: planet-encircling global dust storms. [■]",
          
          "The genesis of Martian dust storms is intimately tied to orbital mechanics. Mars possesses an orbital eccentricity of 0.093, which causes solar insolation at perihelion (closest approach to the Sun) to be roughly 45 percent greater than at aphelion (farthest distance). Perihelion coincides closely with southern hemisphere summer solstice. During this epoch, intense solar irradiance heats the iron-oxide-rich southern regolith, generating powerful thermal updrafts and intense boundary-layer convection. [■] Small-scale dust devils—miniature cyclonic vortices generated by ground-level heating—loft fine sub-micron dust particles into the middle atmosphere at altitudes exceeding 30 to 40 kilometers.",
          
          "Once airborne, airborne dust fundamentally alters atmospheric thermodynamics via a positive radiative feedback loop. Suspended dust particles absorb incident solar radiation, heating the ambient atmospheric layer. This atmospheric heating enhances vertical temperature gradients and intensifies global Hadley cell circulation, which in turn accelerates near-surface wind velocities. Stronger surface winds entrain additional dust from the surface, creating a runaway cascade. Under specific atmospheric conditions, localized regional storms in the Hellas or Argyre impact basins coalesce and expand longitudinally, eventually merging into a global haze that obscures the entire planetary surface for months.",
          
          "Global dust events exert profound effects on the Martian water cycle and surface composition. When dust heats the middle and upper atmosphere, it suppresses water-ice cloud condensation and elevates the hygropause (the altitude threshold where water vapor condenses). Unimpeded water molecules ascend into the upper exosphere, where intense solar ultraviolet photolysis dissociates H2O into hydroxyl radicals and free hydrogen atoms. Because hydrogen is extremely light, it readily escapes Martian gravity into interplanetary space. Planetary scientists hypothesize that episodic global dust storms have been a principal driver of atmospheric desiccation and water loss over billions of years of Martian geological history. [■]"
        ],
        questions: [
          {
            id: 't4-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, what is the primary reason why Martian temperatures fluctuate rapidly between day and night?',
            options: [
              'The presence of thick clouds of methane gas that trap heat unevenly',
              'The thin atmosphere has low heat capacity and low thermal inertia',
              'Mars rotates on its axis at a much faster rate than Earth',
              'The Sun emits inconsistent radiation toward the southern hemisphere'
            ],
            correctAnswer: 'The thin atmosphere has low heat capacity and low thermal inertia',
            explanation: 'Paragraph 1 explains: "the thin Martian atmosphere exhibits low heat capacity and low thermal inertia. Consequently, ground and atmospheric temperatures respond almost instantaneously to diurnal variations in solar insolation."'
          },
          {
            id: 't4-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'eccentricity',
            question: 'The word "eccentricity" in paragraph 2 refers to:',
            options: [
              'the degree of deviation of an orbit from a perfect circle',
              'the chemical composition of upper atmospheric gases',
              'the unpredictable behavior of sand dunes',
              'the rotation speed of planetary magnetic poles'
            ],
            correctAnswer: 'the degree of deviation of an orbit from a perfect circle',
            explanation: 'In astronomy, orbital eccentricity is the measure of how non-circular or elongated an elliptical orbit is.'
          },
          {
            id: 't4-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, why are dust storms most likely to originate during southern hemisphere summer?',
            options: [
              'Mars is at aphelion, where temperatures reach their absolute coldest.',
              'Perihelion coincides with southern summer, creating 45% greater solar heating and intense thermal updrafts.',
              'Water ice polar caps expand and push dust toward the equator.',
              'Dust devils only form over ocean coastlines in the southern hemisphere.'
            ],
            correctAnswer: 'Perihelion coincides with southern summer, creating 45% greater solar heating and intense thermal updrafts.',
            explanation: 'Paragraph 2 states that solar insolation at perihelion is 45% greater and coincides with southern summer, generating intense thermal updrafts and convection.'
          },
          {
            id: 't4-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following describes the positive feedback loop outlined in paragraph 3?',
            options: [
              'Airborne dust cools the atmosphere, which calms surface winds and clears the sky.',
              'Airborne dust absorbs sunlight and heats the atmosphere, strengthening winds that lift even more dust.',
              'Rain clouds form around dust particles, washing all dust out of the Martian sky.',
              'Dust particles react with carbon dioxide to create thick rock layers on the surface.'
            ],
            correctAnswer: 'Airborne dust absorbs sunlight and heats the atmosphere, strengthening winds that lift even more dust.',
            explanation: 'Paragraph 3 describes how suspended dust absorbs solar radiation, heats the air, intensifies circulation and surface winds, which then entrain more dust in a runaway cascade.'
          },
          {
            id: 't4-q5',
            type: 'purpose',
            paragraphRef: 4,
            question: 'Why does the author discuss ultraviolet photolysis in paragraph 4?',
            options: [
              'To show how water molecules in the upper atmosphere are broken down and lost to space during dust storms',
              'To explain why solar panels on Mars rovers generate more electricity during dust storms',
              'To prove that life cannot exist in the frozen Martian polar caps',
              'To demonstrate that oxygen is being created faster than hydrogen is lost'
            ],
            correctAnswer: 'To show how water molecules in the upper atmosphere are broken down and lost to space during dust storms',
            explanation: 'Paragraph 4 explains that dust storms elevate water vapor into the exosphere where UV photolysis splits H2O, allowing light hydrogen to escape into space and desiccating the planet.'
          },
          {
            id: 't4-q6',
            type: 'vocabulary',
            paragraphRef: 4,
            highlightedText: 'desiccation',
            question: 'The word "desiccation" in paragraph 4 is closest in meaning to:',
            options: [
              'severe drying out or loss of water',
              'atmospheric cooling',
              'crustal fracturing',
              'magnetic field expansion'
            ],
            correctAnswer: 'severe drying out or loss of water',
            explanation: '"Desiccation" means complete drying or dehydration, in this case the progressive water loss from the Martian atmosphere.'
          },
          {
            id: 't4-q7',
            type: 'simplification',
            paragraphRef: 4,
            highlightedText: 'Planetary scientists hypothesize that episodic global dust storms have been a principal driver of atmospheric desiccation and water loss over billions of years of Martian geological history.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 4?',
            options: [
              'Scientists believe that recurring global dust storms have played a major role in stripping Mars of its water over geological time.',
              'Martian history shows that water loss was caused exclusively by asteroid impacts rather than dust storms.',
              'Over billions of years, global dust storms have created new water reservoirs on the surface of Mars.',
              'Scientists have proven that dust storms had no noticeable impact on Mars\' atmospheric evolution.'
            ],
            correctAnswer: 'Scientists believe that recurring global dust storms have played a major role in stripping Mars of its water over geological time.',
            explanation: 'Option A cleanly summarizes the hypothesis that periodic dust storms were a primary factor driving long-term water loss on Mars.'
          },
          {
            id: 't4-q8',
            type: 'negative',
            paragraphRef: 1,
            question: 'According to paragraph 1, all of the following gases are significant constituents of the Martian atmosphere EXCEPT:',
            options: [
              'Carbon dioxide',
              'Nitrogen',
              'Argon',
              'Ozone'
            ],
            correctAnswer: 'Ozone',
            explanation: 'Paragraph 1 specifies Carbon dioxide (95.3%), nitrogen (2.6%), and argon (1.9%). Ozone is not listed as a major constituent.'
          },
          {
            id: 't4-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"These localized storms can span hundreds of kilometers before expanding to engulf entire hemispheres."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 4)'
            ],
            insertSentence: 'These localized storms can span hundreds of kilometers before expanding to engulf entire hemispheres.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 immediately follows the discussion of solar heating and localized dust devils that initiate regional storms.'
          },
          {
            id: 't4-q10',
            type: 'summary',
            summaryPrompt: 'Martian atmospheric characteristics and orbital dynamics generate massive dust storms that influence the planet\'s climate.',
            options: [
              'Orbital eccentricity produces intense solar heating during southern summer, initiating strong thermal updrafts and dust devils.',
              'Radiative heating from airborne dust creates a positive feedback loop that strengthens surface winds and triggers global storms.',
              'Elevated water vapor during dust events leads to UV photolysis and the permanent loss of hydrogen to interplanetary space.',
              'Global dust storms occur primarily during aphelion when northern ice sheets evaporate rapidly.',
              'Dense carbon dioxide rain washes dust particles into underground aquifers every winter.',
              'Mars possesses a magnetic field stronger than Earth\'s that attracts charged iron particles into space.'
            ],
            correctAnswer: [
              'Orbital eccentricity produces intense solar heating during southern summer, initiating strong thermal updrafts and dust devils.',
              'Radiative heating from airborne dust creates a positive feedback loop that strengthens surface winds and triggers global storms.',
              'Elevated water vapor during dust events leads to UV photolysis and the permanent loss of hydrogen to interplanetary space.'
            ],
            explanation: 'Options A, B, and C summarize the physical triggers, feedback mechanisms, and planetary evolutionary consequences described in the passage. D, E, and F are factually untrue.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 5: Plant Physiology & Symbiotic Nitrogen Fixation (Biology)
  // =========================================================================
  {
    id: 'ets-test-5',
    testNumber: 5,
    title: 'Symbiotic Nitrogen Fixation in Legume-Rhizobia Mutualisms',
    discipline: 'Plant Physiology & Microbiology',
    description: 'Explores the biochemical and genetic mechanisms of biological nitrogen fixation, examining flavonoid signaling, Nod factor perception, infection thread formation, leghemoglobin, and the oxygen paradox.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-5-passage-1',
        passageNumber: 1,
        title: 'Molecular Communication and Biochemical Mechanics in Root Nodulation',
        subject: 'Botany',
        discipline: 'Cellular Biology',
        wordCount: 725,
        paragraphs: [
          "Nitrogen is a foundational macronutrient essential for the synthesis of amino acids, nucleic acids, and chlorophyll in all photosynthetic organisms. Although molecular dinitrogen (N2) comprises approximately 78 percent of Earth's atmosphere by volume, it remains biochemically inaccessible to plants due to the formidable strength of the chemical triple bond between nitrogen atoms (N≡N). [■] To assimilate nitrogen, plants rely on reactive nitrogen forms, such as ammonium (NH4+) and nitrate (NO3-). In terrestrial ecosystems, biological nitrogen fixation by prokaryotic diazotrophs—most prominently symbiotic bacteria of the genera Rhizobium, Bradyrhizobium, and Sinorhizobium associated with legumes (Fabaceae)—represents the dominant natural pathway converting atmospheric N2 into bioavailable ammonia. [■]",
          
          "The establishment of legume-rhizobia symbiosis involves a sophisticated bidirectional molecular dialogue. Under conditions of nitrogen limitation, legume roots secrete secondary metabolites known as flavonoids into the rhizosphere. These specific chemical compounds diffuse through the soil and bind to the bacterial transcriptional regulator protein NodD. Upon activation, NodD induces the expression of bacterial nodulation (nod) genes, which synthesize lipochitooligosaccharide signaling molecules called Nod factors. [■] When recognized by specialized receptor-like kinases on legume root hair membranes, Nod factors trigger calcium spiking, root hair curling around the bacteria, and the reactivation of cortical cell division to initiate root nodule primordia.",
          
          "Once entrapped within the curled root hair, rhizobia invade host tissues via an infection thread—an invagination of the plant cell wall and plasma membrane that guides bacteria into the root cortex. Upon release into host cells, bacteria become enclosed within a plant-derived peribacteroid membrane, differentiating into specialized morphological forms called bacteroids. Within the bacteroid cytoplasm, the enzyme nitrogenase catalyzes the reduction of atmospheric nitrogen to ammonia via the net reaction: N2 + 8H+ + 8e- + 16 ATP → 2 NH3 + H2 + 16 ADP + 16 Pi. This enzymatic process is exceptionally energetically demanding, requiring the plant host to allocate up to 20 percent of its total photosynthate to fuel bacteroid metabolism.",
          
          "A fundamental biochemical dilemma in nitrogen fixation is the 'oxygen paradox.' The catalytic core of nitrogenase, composed of the iron-molybdenum cofactor (FeMo-co), is irreversibly inactivated by exposure to free molecular oxygen. Conversely, the substantial ATP generation required for the reduction reaction demands rapid aerobic respiration by bacteroids. Legumes resolve this paradox through the synthesis of leghemoglobin, an oxygen-binding hemoprotein produced collaboratively by plant and bacterial gene products. Leghemoglobin maintains an extremely low concentration of free oxygen in the nodule interior to protect nitrogenase, while simultaneously buffering a rapid flux of bound oxygen to bacteroid respiratory chains to sustain ATP synthesis. [■]"
        ],
        questions: [
          {
            id: 't5-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, why is atmospheric molecular dinitrogen (N2) directly inaccessible to plants?',
            options: [
              'Plants lack roots capable of absorbing gases from the soil.',
              'The formidable chemical triple bond between nitrogen atoms prevents plants from breaking it down.',
              'Atmospheric dinitrogen is toxic to plant chloroplasts.',
              'Nitrogen gas only exists at altitudes above the stratosphere.'
            ],
            correctAnswer: 'The formidable chemical triple bond between nitrogen atoms prevents plants from breaking it down.',
            explanation: 'Paragraph 1 explains that N2 is inaccessible "due to the formidable strength of the chemical triple bond between nitrogen atoms (N≡N)."'
          },
          {
            id: 't5-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'bidirectional',
            question: 'The word "bidirectional" in paragraph 2 indicates that the chemical signaling:',
            options: [
              'flows in two directions between both plant and bacterium',
              'occurs only during two seasons of the year',
              'requires two identical bacterial species to function',
              'is transmitted purely by mechanical pressure'
            ],
            correctAnswer: 'flows in two directions between both plant and bacterium',
            explanation: '"Bidirectional" means operating in two directions. Here it refers to plants signaling to bacteria with flavonoids and bacteria responding back with Nod factors.'
          },
          {
            id: 't5-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, what role do Nod factors play when recognized by root hair receptors?',
            options: [
              'They poison competing non-legume weed species in the soil.',
              'They trigger calcium spiking, root hair curling, and cell division that forms nodule primordia.',
              'They immediately convert soil nitrate into molecular nitrogen gas.',
              'They destroy the peribacteroid membrane to release bacteroids.'
            ],
            correctAnswer: 'They trigger calcium spiking, root hair curling, and cell division that forms nodule primordia.',
            explanation: 'Paragraph 2 states that Nod factors "trigger calcium spiking, root hair curling around the bacteria, and the reactivation of cortical cell division to initiate root nodule primordia."'
          },
          {
            id: 't5-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'What can be inferred from paragraph 3 about the energetic cost of nitrogen fixation to the host plant?',
            options: [
              'The process generates surplus ATP that the plant exports to surrounding trees.',
              'The plant must invest a significant portion of its photosynthetic energy to sustain bacteroid reduction.',
              'Nitrogen fixation requires zero metabolic energy from the host plant.',
              'Bacteroids manufacture their own sugars without needing plant photosynthate.'
            ],
            correctAnswer: 'The plant must invest a significant portion of its photosynthetic energy to sustain bacteroid reduction.',
            explanation: 'Paragraph 3 notes that the reaction requires 16 ATP per N2 molecule and requires "the plant host to allocate up to 20 percent of its total photosynthate to fuel bacteroid metabolism."'
          },
          {
            id: 't5-q5',
            type: 'factual',
            paragraphRef: 4,
            question: 'According to paragraph 4, what constitutes the "oxygen paradox" in nitrogen fixation?',
            options: [
              'Plants require carbon dioxide to fix nitrogen but only produce oxygen.',
              'Nitrogenase is destroyed by free oxygen, yet high ATP generation requires rapid oxygen-fueled respiration.',
              'Leghemoglobin binds nitrogen instead of oxygen under high temperatures.',
              'Bacteroids cannot survive unless they are exposed to pure oxygen.'
            ],
            correctAnswer: 'Nitrogenase is destroyed by free oxygen, yet high ATP generation requires rapid oxygen-fueled respiration.',
            explanation: 'Paragraph 4 explicitly defines the paradox: "The catalytic core of nitrogenase... is irreversibly inactivated by exposure to free molecular oxygen. Conversely, the substantial ATP generation required for the reduction reaction demands rapid aerobic respiration by bacteroids."'
          },
          {
            id: 't5-q6',
            type: 'purpose',
            paragraphRef: 4,
            highlightedText: 'leghemoglobin',
            question: 'Why does the author discuss "leghemoglobin" in paragraph 4?',
            options: [
              'To identify a toxin that destroys nitrogen-fixing bacteria in unfertilized soils',
              'To explain the specialized protein that balances low free oxygen with high oxygen delivery to bacteroids',
              'To show that animal hemoglobin evolved directly from root nodules',
              'To prove that legumes cannot grow in soils with high iron content'
            ],
            correctAnswer: 'To explain the specialized protein that balances low free oxygen with high oxygen delivery to bacteroids',
            explanation: 'Leghemoglobin is explained as the biochemical solution that keeps free oxygen low to protect nitrogenase while delivering oxygen for respiration.'
          },
          {
            id: 't5-q7',
            type: 'simplification',
            paragraphRef: 1,
            highlightedText: 'In terrestrial ecosystems, biological nitrogen fixation by prokaryotic diazotrophs—most prominently symbiotic bacteria of the genera Rhizobium, Bradyrhizobium, and Sinorhizobium associated with legumes (Fabaceae)—represents the dominant natural pathway converting atmospheric N2 into bioavailable ammonia.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 1?',
            options: [
              'Rhizobia bacteria in legume roots provide the main natural method for transforming atmospheric nitrogen into usable ammonia in land ecosystems.',
              'Terrestrial ecosystems produce atmospheric nitrogen gas primarily through the decomposition of legume roots.',
              'Prokaryotic diazotrophs prevent legumes from absorbing bioavailable ammonia from the soil.',
              'Ammonia can only be converted into atmospheric dinitrogen by specialized agricultural fertilizers.'
            ],
            correctAnswer: 'Rhizobia bacteria in legume roots provide the main natural method for transforming atmospheric nitrogen into usable ammonia in land ecosystems.',
            explanation: 'Option A captures the central meaning: legume-associated rhizobia represent the primary natural system converting atmospheric N2 into plant-usable ammonia.'
          },
          {
            id: 't5-q8',
            type: 'negative',
            paragraphRef: 1,
            question: 'According to paragraph 1, all of the following biological molecules require nitrogen for their synthesis EXCEPT:',
            options: [
              'Amino acids',
              'Nucleic acids',
              'Chlorophyll',
              'Pure cellulose fibers'
            ],
            correctAnswer: 'Pure cellulose fibers',
            explanation: 'Paragraph 1 lists amino acids, nucleic acids, and chlorophyll. Cellulose is a pure carbon-hydrogen-oxygen polymer and is not listed.'
          },
          {
            id: 't5-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"This reciprocal recognition ensures that each legume species pairs exclusively with compatible bacterial strains."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 4)'
            ],
            insertSentence: 'This reciprocal recognition ensures that each legume species pairs exclusively with compatible bacterial strains.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 directly follows the description of plant flavonoids activating bacterial NodD to produce host-specific Nod factors.'
          },
          {
            id: 't5-q10',
            type: 'summary',
            summaryPrompt: 'Symbiotic nitrogen fixation in legumes is a highly coordinated biological partnership that overcomes atmospheric nitrogen inertia.',
            options: [
              'Plants signal rhizobia with flavonoids, and bacteria respond with Nod factors that initiate nodule development.',
              'Bacteria enter roots via infection threads and differentiate into bacteroids that reduce N2 to ammonia using nitrogenase.',
              'Leghemoglobin protects the oxygen-sensitive nitrogenase enzyme while supplying oxygen for high-energy ATP synthesis.',
              'Nitrogen fixation operates without consuming any plant energy or photosynthate.',
              'Flavonoids convert atmospheric dinitrogen directly into solid rock minerals in the root cortex.',
              'Legumes only develop root nodules when soil nitrogen levels are excessively high.'
            ],
            correctAnswer: [
              'Plants signal rhizobia with flavonoids, and bacteria respond with Nod factors that initiate nodule development.',
              'Bacteria enter roots via infection threads and differentiate into bacteroids that reduce N2 to ammonia using nitrogenase.',
              'Leghemoglobin protects the oxygen-sensitive nitrogenase enzyme while supplying oxygen for high-energy ATP synthesis.'
            ],
            explanation: 'Options A, B, and C accurately synthesize the molecular signaling, cellular infection/reduction mechanics, and the oxygen paradox resolution. Options D, E, and F contradict the passage.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 6: Gothic Architecture & Engineering Innovation (Art History)
  // =========================================================================
  {
    id: 'ets-test-6',
    testNumber: 6,
    title: 'Structural Innovation and Spatial Aesthetics in Gothic Architecture',
    discipline: 'Art History & Architectural Engineering',
    description: 'Analyzes the architectural revolution of 12th-century northern France, exploring ribbed groin vaults, pointed arches, flying buttresses, and the theology of lux nova (divine light) at Saint-Denis and Chartres.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-6-passage-1',
        passageNumber: 1,
        title: 'Engineering the Gothic Cathedral: Forces, Skeletons, and Illumination',
        subject: 'Art History',
        discipline: 'Architecture',
        wordCount: 715,
        paragraphs: [
          "In mid-twelfth-century northern France, a profound architectural metamorphosis occurred that superseded the heavy, earthbound Romanesque style with what contemporaries termed the 'Opus Francigenum,' known today as Gothic architecture. Romanesque churches were characterized by massive masonry walls, heavy semicircular barrel vaults, and small, sparse window apertures. [■] Because semicircular arches exert substantial lateral outward thrust along the entire length of the nave walls, Romanesque architects were compelled to construct exceptionally thick, continuous stone walls reinforced with shallow pilasters. Introducing large window openings would have fatally compromised the structural equilibrium of the masonry shell, resulting in dark, cavernous interiors. [■]",
          
          "The Gothic revolution, spearheaded by Abbot Suger during the reconstruction of the Abbey Church of Saint-Denis around 1140 CE, integrated three interrelated structural innovations: the pointed arch, the ribbed groin vault, and the external flying buttress. Unlike the semicircular arch, whose lateral outward thrust increases dramatically with span width, the pointed arch channels gravitational load more steeply downward toward vertical supporting piers. This vertical redirection of forces reduced outward thrust, permitting arches of varying widths to be erected to identical heights—a geometrical versatility impossible with rigid semicircular profiles. [■]",
          
          "When combined with pointed arches, the quadripartite or sexpartite ribbed groin vault concentrated the dead load of the ceiling onto skeletal stone ribs rather than the intervening webbing. These concentrated loads were directed to specific vertical piers at discrete intervals along the nave arcade. However, elevated stone vaults still generated substantial residual lateral thrust at high elevations. To counteract this without thickening interior walls, Gothic master masons invented the flying buttress—an external inclined masonry arch that bridged the open space above the side aisles, transferring outward vault thrust to massive exterior masonry piers grounded far outside the building footprint. [■]",
          
          "By liberating the walls from their primary load-bearing function, the flying buttress transformed the exterior masonry from a solid compressive barrier into a skeletal armature. Wall surfaces between piers were hollowed out and replaced with vast expanses of stained-glass clerestories, triforium arcades, and rose windows. This technological emancipation enabled the realization of Abbot Suger's theological ideal of 'lux nova' (new divine light). Filtered through polychrome glass depicting sacred narratives, radiant light ceased to be a mere physical phenomenon and became an active metaphysical medium, transmuting the cathedral into a luminous earthly representation of the Heavenly Jerusalem."
        ],
        questions: [
          {
            id: 't6-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, why were Romanesque architects unable to install large windows in church walls?',
            options: [
              'Stained glass had not yet been invented in medieval Europe.',
              'Semicircular barrel vaults exerted massive outward lateral thrust that required thick, solid walls for structural support.',
              'Religious decrees strictly forbade sunlight from entering sanctuaries.',
              'Earthquakes in northern France destroyed all churches with window openings.'
            ],
            correctAnswer: 'Semicircular barrel vaults exerted massive outward lateral thrust that required thick, solid walls for structural support.',
            explanation: 'Paragraph 1 explains that semicircular arches exerted substantial lateral thrust along the entire nave wall, compelling architects to build thick walls; cutting large windows would have compromised structural equilibrium.'
          },
          {
            id: 't6-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'versatility',
            question: 'The word "versatility" in paragraph 2 is closest in meaning to:',
            options: [
              'flexibility and adaptability',
              'excessive financial cost',
              'fragility under stress',
              'geometrical complexity'
            ],
            correctAnswer: 'flexibility and adaptability',
            explanation: '"Versatility" means the ability to adapt to many different functions or configurations. Here it refers to the geometrical flexibility of pointed arches spanning different widths at the same height.'
          },
          {
            id: 't6-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, what mechanical advantage did the pointed arch provide over the semicircular arch?',
            options: [
              'It weighed half as much as a wooden ceiling.',
              'It directed gravitational force more steeply downward toward piers, reducing outward lateral thrust.',
              'It required no mortar or stone cutting.',
              'It eliminated the need for vertical piers entirely.'
            ],
            correctAnswer: 'It directed gravitational force more steeply downward toward piers, reducing outward lateral thrust.',
            explanation: 'Paragraph 2 states that "the pointed arch channels gravitational load more steeply downward toward vertical supporting piers. This vertical redirection of forces reduced outward thrust."'
          },
          {
            id: 't6-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following can be inferred from paragraph 3 about the function of flying buttresses?',
            options: [
              'They were purely decorative ornaments with no load-bearing significance.',
              'They allowed vault thrust to be transferred outside the building, eliminating the need for thick interior walls.',
              'They were placed inside the nave to support heavy wooden pews.',
              'They caused the side aisles to collapse under heavy rainfall.'
            ],
            correctAnswer: 'They allowed vault thrust to be transferred outside the building, eliminating the need for thick interior walls.',
            explanation: 'Paragraph 3 explains that flying buttresses bridged open space to transfer outward vault thrust to massive exterior piers outside the footprint, counteracting lateral thrust without thickening interior walls.'
          },
          {
            id: 't6-q5',
            type: 'purpose',
            paragraphRef: 4,
            highlightedText: 'lux nova',
            question: 'Why does the author mention "lux nova" in paragraph 4?',
            options: [
              'To identify a Latin phrase used to describe lightning strikes on towers',
              'To illustrate the theological concept of divine light achieved through stained-glass window walls',
              'To prove that Gothic architects preferred candlelight over natural sunlight',
              'To criticize the high maintenance cost of stained-glass windows'
            ],
            correctAnswer: 'To illustrate the theological concept of divine light achieved through stained-glass window walls',
            explanation: 'Paragraph 4 discusses Abbot Suger\'s theological ideal of "lux nova" (new divine light), showing how skeletal walls allowed light to transform the cathedral into a spiritual space.'
          },
          {
            id: 't6-q6',
            type: 'vocabulary',
            paragraphRef: 4,
            highlightedText: 'emancipation',
            question: 'The word "emancipation" in paragraph 4 is closest in meaning to:',
            options: [
              'liberation or freeing',
              'complete abandonment',
              'severe restriction',
              'hasty construction'
            ],
            correctAnswer: 'liberation or freeing',
            explanation: '"Emancipation" means the process of being set free. In this architectural context, it refers to the technological freeing of walls from load-bearing duties.'
          },
          {
            id: 't6-q7',
            type: 'simplification',
            paragraphRef: 4,
            highlightedText: 'By liberating the walls from their primary load-bearing function, the flying buttress transformed the exterior masonry from a solid compressive barrier into a skeletal armature.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 4?',
            options: [
              'Because flying buttresses carried the weight, church walls were changed from solid stone barriers into open, skeletal frames.',
              'Flying buttresses caused solid walls to crumble because the stone was too light.',
              'Masonry walls had to remain thick compressive barriers despite the addition of exterior buttresses.',
              'Gothic architects abandoned flying buttresses in favor of solid exterior walls.'
            ],
            correctAnswer: 'Because flying buttresses carried the weight, church walls were changed from solid stone barriers into open, skeletal frames.',
            explanation: 'Option A captures the cause (flying buttresses freeing walls from weight) and the structural effect (transition from solid barriers to skeletal frames).'
          },
          {
            id: 't6-q8',
            type: 'negative',
            paragraphRef: 2,
            question: 'According to paragraph 2, all of the following were core architectural innovations of the Gothic style EXCEPT:',
            options: [
              'The pointed arch',
              'The ribbed groin vault',
              'The external flying buttress',
              'The massive Romanesque barrel vault'
            ],
            correctAnswer: 'The massive Romanesque barrel vault',
            explanation: 'Paragraph 2 lists the pointed arch, ribbed groin vault, and flying buttress as the three interrelated Gothic innovations. The barrel vault was the Romanesque feature being superseded.'
          },
          {
            id: 't6-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"This geometric flexibility enabled masons to vault rectangular spaces with unprecedented grace and structural stability."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 3)'
            ],
            insertSentence: 'This geometric flexibility enabled masons to vault rectangular spaces with unprecedented grace and structural stability.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 immediately follows the explanation of pointed arches permitting arches of varying widths to reach identical heights ("a geometrical versatility impossible with rigid semicircular profiles").'
          },
          {
            id: 't6-q10',
            type: 'summary',
            summaryPrompt: 'The Gothic architectural style revolutionized medieval building through structural engineering and theological aesthetics.',
            options: [
              'Pointed arches and ribbed vaults concentrated loads onto specific piers, reducing outward lateral thrust.',
              'External flying buttresses carried residual vault thrust outward, allowing walls to be opened for large stained-glass windows.',
              'The technological transformation of walls into light-filled stained-glass screens realized the spiritual ideal of divine illumination.',
              'Gothic cathedrals reverted to wooden thatched roofs because stone vaults were deemed too heavy for northern France.',
              'Abbot Suger banned all colored glass to ensure church interiors resembled subterranean Romanesque crypts.',
              'Semicircular barrel vaults remained the primary ceiling structure in all 13th-century Gothic cathedrals.'
            ],
            correctAnswer: [
              'Pointed arches and ribbed vaults concentrated loads onto specific piers, reducing outward lateral thrust.',
              'External flying buttresses carried residual vault thrust outward, allowing walls to be opened for large stained-glass windows.',
              'The technological transformation of walls into light-filled stained-glass screens realized the spiritual ideal of divine illumination.'
            ],
            explanation: 'Options A, B, and C represent the core structural and aesthetic arguments of the passage. Options D, E, and F contradict the passage.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 7: Cognitive Neuroscience & Memory Consolidation in Sleep (Psychology)
  // =========================================================================
  {
    id: 'ets-test-7',
    testNumber: 7,
    title: 'Neural Plasticity and Systems Memory Consolidation During Sleep',
    discipline: 'Cognitive Neuroscience & Psychology',
    description: 'Investigates the two-stage memory consolidation model, exploring hippocampal sharp-wave ripples, cortical slow oscillations, synaptic homeostasis, and memory reorganization across NREM and REM sleep.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-7-passage-1',
        passageNumber: 1,
        title: 'Hippocampal-Neocortical Dialogue and Memory Reorganization in Sleep',
        subject: 'Neuroscience',
        discipline: 'Cognitive Psychology',
        wordCount: 730,
        paragraphs: [
          "Memory formation in mammals is not an instantaneous event completed at the moment of experiential acquisition; rather, it is a prolonged, dynamic process termed memory consolidation. The prevailing paradigm in cognitive neuroscience is the 'two-stage memory model.' During active wakefulness, novel episodic and declarative memories are rapidly encoded within the hippocampus—a medial temporal lobe structure capable of rapid synaptic plasticity with high initial capacity but vulnerability to retroactive interference. [■] Over subsequent periods of quiescent rest and sleep, these labile memory traces undergo systems-level consolidation, gradually transferring to distributed neocortical networks for permanent, long-term stabilization. [■]",
          
          "Electrophysiological studies demonstrate that this memory transfer is orchestrated by a synchronized dialogue between the hippocampus and neocortex during non-rapid eye movement (NREM) slow-wave sleep. Three cardinal oscillatory rhythms coordinate this inter-regional communication: neocortical slow oscillations (<1 Hz), thalamocortical sleep spindles (11–16 Hz), and hippocampal sharp-wave ripples (150–250 Hz). Neocortical slow oscillations originating in prefrontal cortex drive thalamic spindle activity; spindle troughs, in turn, nest hippocampal sharp-wave ripples into precise temporal windows. [■] During these ripples, neural ensembles that fired during waking exploration are replayed in time-compressed sequences, reactivating cortical representations and inducing long-term potentiation (LTP) in neocortical synapses.",
          
          "In parallel with systems consolidation, sleep serves a vital homeostatic regulatory function described by the 'Synaptic Homeostasis Hypothesis' (SHY). Wakefulness is characterized by net synaptic potentiation across widespread brain regions as the organism continuously learns and interacts with the environment. This relentless synaptic strengthening carries significant energetic and biological costs: increased consumption of glucose and ATP, occupying physical cellular space, and approaching ceiling thresholds of synaptic saturation. During NREM sleep, global non-specific synaptic downscaling occurs, systematically weakening baseline synaptic strengths across the brain while selectively sparing and strengthening those synapses reinforced by memory replay.",
          
          "While NREM sleep mediates declarative and structural memory replay, rapid eye movement (REM) sleep plays a complementary role in emotional memory processing and cognitive schema integration. Characterized by desynchronized, wake-like electroencephalogram (EEG) patterns, high acetylcholine levels, and profound motor muscle atonia, REM sleep creates an optimal neurochemical milieu for synaptic remodeling. Specifically, the near-complete suppression of noradrenaline during REM allows the brain to reactivate emotionally charged memories without the accompanying autonomic stress response. This process 'de-couples' raw emotional arousal from the factual informational content of memories, facilitating cognitive flexibility, creative problem-solving, and emotional equilibrium. [■]"
        ],
        questions: [
          {
            id: 't7-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, what is the role of the hippocampus in the two-stage memory model?',
            options: [
              'It permanently stores all procedural motor skills without neocortical assistance.',
              'It rapidly encodes novel episodic memories that are initially fragile and prone to interference.',
              'It destroys outdated childhood memories during active wakefulness.',
              'It prevents the neocortex from forming long-term synaptic connections.'
            ],
            correctAnswer: 'It rapidly encodes novel episodic memories that are initially fragile and prone to interference.',
            explanation: 'Paragraph 1 states that novel memories are "rapidly encoded within the hippocampus... with high initial capacity but vulnerability to retroactive interference."'
          },
          {
            id: 't7-q2',
            type: 'vocabulary',
            paragraphRef: 1,
            highlightedText: 'labile',
            question: 'The word "labile" in paragraph 1 is closest in meaning to:',
            options: [
              'unstable and subject to change',
              'permanently solidified',
              'highly toxic to neurons',
              'completely undetectable'
            ],
            correctAnswer: 'unstable and subject to change',
            explanation: '"Labile" means easily altered or unstable. In memory research, labile memory traces are fragile and require consolidation to become stable.'
          },
          {
            id: 't7-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, what occurs during hippocampal sharp-wave ripples?',
            options: [
              'The brain enters a deep coma that shuts down all neocortical activity.',
              'Neural ensembles active during waking are replayed in time-compressed sequences, inducing long-term potentiation in cortex.',
              'All synapses formed during the day are completely erased.',
              'Noradrenaline levels surge to trigger vivid nightmares.'
            ],
            correctAnswer: 'Neural ensembles active during waking are replayed in time-compressed sequences, inducing long-term potentiation in cortex.',
            explanation: 'Paragraph 2 explains that during ripples, "neural ensembles that fired during waking exploration are replayed in time-compressed sequences, reactivating cortical representations and inducing long-term potentiation (LTP) in neocortical synapses."'
          },
          {
            id: 't7-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following can be inferred from the Synaptic Homeostasis Hypothesis discussed in paragraph 3?',
            options: [
              'Continuous wakefulness without sleep would lead to synaptic saturation and unsustainable metabolic energy costs.',
              'Synapses only weaken during wakefulness and grow exclusively during sleep.',
              'Memory retention requires every single synapse in the brain to remain potentiated forever.',
              'Sleep downscaling eliminates all memories formed during the preceding day.'
            ],
            correctAnswer: 'Continuous wakefulness without sleep would lead to synaptic saturation and unsustainable metabolic energy costs.',
            explanation: 'Paragraph 3 states that continuous waking potentiation carries costs of glucose/ATP depletion and risks approaching ceiling thresholds of synaptic saturation, which sleep downscaling resolves.'
          },
          {
            id: 't7-q5',
            type: 'purpose',
            paragraphRef: 4,
            question: 'Why does the author explain the suppression of noradrenaline during REM sleep in paragraph 4?',
            options: [
              'To show why muscle paralysis is necessary to prevent sleepwalking',
              'To illustrate how emotional arousal is de-coupled from factual memory content during REM processing',
              'To prove that REM sleep has no cognitive value compared to NREM sleep',
              'To explain why heart rate stops completely during dreaming'
            ],
            correctAnswer: 'To illustrate how emotional arousal is de-coupled from factual memory content during REM processing',
            explanation: 'Paragraph 4 states that the suppression of noradrenaline allows the brain to reactivate emotional memories without stress response, de-coupling raw emotion from factual information.'
          },
          {
            id: 't7-q6',
            type: 'vocabulary',
            paragraphRef: 4,
            highlightedText: 'equilibrium',
            question: 'The word "equilibrium" in paragraph 4 is closest in meaning to:',
            options: [
              'balance and stability',
              'severe confusion',
              'extreme exhaustion',
              'rapid physical movement'
            ],
            correctAnswer: 'balance and stability',
            explanation: '"Equilibrium" refers to a state of emotional or physiological balance.'
          },
          {
            id: 't7-q7',
            type: 'simplification',
            paragraphRef: 3,
            highlightedText: 'During NREM sleep, global non-specific synaptic downscaling occurs, systematically weakening baseline synaptic strengths across the brain while selectively sparing and strengthening those synapses reinforced by memory replay.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 3?',
            options: [
              'NREM sleep weakens most synapses across the brain while preserving and reinforcing the specific synapses involved in replayed memories.',
              'Memory replay forces all brain synapses to weaken at identical rates during sleep.',
              'Synaptic downscaling during NREM sleep erases all replayed memories to save energy.',
              'Synapses strengthened during wakefulness prevent NREM sleep from occurring.'
            ],
            correctAnswer: 'NREM sleep weakens most synapses across the brain while preserving and reinforcing the specific synapses involved in replayed memories.',
            explanation: 'Option A captures both the general weakening of baseline synapses and the selective preservation/strengthening of memory-replayed synapses.'
          },
          {
            id: 't7-q8',
            type: 'negative',
            paragraphRef: 2,
            question: 'According to paragraph 2, all of the following oscillatory rhythms coordinate hippocampal-neocortical memory consolidation EXCEPT:',
            options: [
              'Neocortical slow oscillations (<1 Hz)',
              'Thalamocortical sleep spindles (11–16 Hz)',
              'Hippocampal sharp-wave ripples (150–250 Hz)',
              'High-frequency auditory alpha waves (800–1000 Hz)'
            ],
            correctAnswer: 'High-frequency auditory alpha waves (800–1000 Hz)',
            explanation: 'Paragraph 2 specifically enumerates slow oscillations, sleep spindles, and sharp-wave ripples as the three cardinal rhythms. High-frequency auditory alpha waves are not mentioned.'
          },
          {
            id: 't7-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"This hierarchical phase-locking ensures that memory transfer occurs during optimal windows of cortical excitability."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 4)'
            ],
            insertSentence: 'This hierarchical phase-locking ensures that memory transfer occurs during optimal windows of cortical excitability.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 follows the explanation of how slow oscillations drive spindles, which in turn nest sharp-wave ripples into precise temporal windows.'
          },
          {
            id: 't7-q10',
            type: 'summary',
            summaryPrompt: 'Sleep plays a multifaceted, active role in memory consolidation, synaptic regulation, and emotional processing.',
            options: [
              'During NREM sleep, coordinated brain oscillations replay hippocampal memories to stabilize them in distributed neocortical networks.',
              'The Synaptic Homeostasis Hypothesis posits that sleep downscales overall synaptic strength to restore energy and prevent saturation.',
              'REM sleep provides a unique neurochemical environment that integrates emotional memories without triggering stress responses.',
              'The hippocampus permanently stores all lifetime memories without ever communicating with the neocortex.',
              'Sleep consolidation causes healthy individuals to lose 90% of their vocabulary within several days.',
              'Noradrenaline surges during REM sleep to ensure maximum physical anxiety during memory recall.'
            ],
            correctAnswer: [
              'During NREM sleep, coordinated brain oscillations replay hippocampal memories to stabilize them in distributed neocortical networks.',
              'The Synaptic Homeostasis Hypothesis posits that sleep downscales overall synaptic strength to restore energy and prevent saturation.',
              'REM sleep provides a unique neurochemical environment that integrates emotional memories without triggering stress responses.'
            ],
            explanation: 'Options A, B, and C represent the three fundamental pillars of sleep memory neuroscience covered in the text. Options D, E, and F contain direct contradictions.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 8: The Steam Engine & 19th-Century Industrialization (Economic History)
  // =========================================================================
  {
    id: 'ets-test-8',
    testNumber: 8,
    title: 'Steam Power, Spatial Geography, and the Industrial Revolution',
    discipline: 'Economic History & Industrial Economics',
    description: 'Analyzes the economic transformation driven by the Watt steam engine, examining the liberation of factories from riparian geography, transportation integration, agglomeration economies, and productivity surges.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-8-passage-1',
        passageNumber: 1,
        title: 'Thermodynamic Innovation and the Transformation of Industrial Geography',
        subject: 'Economic History',
        discipline: 'Industrial Economics',
        wordCount: 720,
        paragraphs: [
          "Prior to the commercialization of James Watt's separate-condenser steam engine in the late eighteenth century, proto-industrial manufacturing was severely constrained by prime-mover geography. Watermills—the predominant source of mechanical power for textile spinning and metal forging—demanded proximity to fast-flowing rivers with reliable hydraulic head. [■] This geographical dependency imposed severe operational limitations: factories were frequently isolated in remote rural valleys far from urban labor pools and commercial markets, and production was vulnerable to seasonal streamflow fluctuations, including summer droughts and winter freezes. [■]",
          
          "Watt's invention of the separate condenser in 1769, followed by the development of sun-and-planet rotary gearing in 1781, fundamentally transformed steam technology from a single-purpose mine-dewatering pump (the Newcomen atmospheric engine) into a universal prime mover capable of driving rotary machinery. By maintaining the main cylinder at boiling temperature while condensing steam in a dedicated secondary vessel, Watt's engine reduced fuel consumption by more than 75 percent compared to atmospheric predecessors. [■] This dramatic leap in thermodynamic efficiency made steam power economically viable in regions lacking adjacent coal deposits, liberating industrial enterprises from riparian geographical constraints.",
          
          "The spatial consequence of steam power was the rapid concentration of manufacturing in dense urban agglomerations. Because steam engines could be erected anywhere coal could be transported, industrialists situated new factories in expanding cities adjacent to extensive labor pools, financial institutions, and multi-modal transport hubs. Cities like Manchester, Birmingham, and Leeds grew with unprecedented speed. In these industrial clusters, enterprises benefited from 'agglomeration economies'—external cost reductions arising from shared pools of skilled labor, specialized component suppliers, rapid technological knowledge spillovers, and dedicated railway infrastructure.",
          
          "Furthermore, the integration of high-pressure steam engines into railway locomotives and steamships in the 1830s and 1840s created a self-reinforcing logistics revolution. Rail networks drastically slashed overland freight transit times and haulage tariffs, allowing inland manufacturers to access national and international markets at unprecedented speed. The reduction in freight rates integrated fragmented regional markets into unified national economies, inducing massive economies of scale in heavy manufacturing. By breaking the biological energy regime that had constrained human civilization for millennia, steam technology initiated self-sustaining modern economic growth. [■]"
        ],
        questions: [
          {
            id: 't8-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, what was a primary geographical disadvantage of relying on watermills for industrial power?',
            options: [
              'Watermills produced too much air pollution for urban areas.',
              'Factories were forced to locate in remote rural valleys near rivers, isolated from large labor markets and vulnerable to weather.',
              'Watermills required continuous supplies of expensive imported coal.',
              'Rivers lacked the energy required to spin any cotton fibers.'
            ],
            correctAnswer: 'Factories were forced to locate in remote rural valleys near rivers, isolated from large labor markets and vulnerable to weather.',
            explanation: 'Paragraph 1 states watermills forced factories to locate in remote rural valleys near fast-flowing rivers, far from labor pools and subject to seasonal droughts/freezes.'
          },
          {
            id: 't8-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'viable',
            question: 'The word "viable" in paragraph 2 is closest in meaning to:',
            options: [
              'economically feasible and practical',
              'extremely dangerous to operate',
              'strictly regulated by the government',
              'theoretically impossible'
            ],
            correctAnswer: 'economically feasible and practical',
            explanation: '"Viable" means capable of working successfully or feasible. Here it means steam power became practical and cost-effective.'
          },
          {
            id: 't8-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, how did Watt\'s separate condenser achieve a 75% reduction in fuel consumption?',
            options: [
              'By burning wood instead of mineral coal',
              'By keeping the main cylinder hot while cooling steam in a separate vessel, avoiding repeated reheating',
              'By reducing engine size to the scale of a wristwatch',
              'By eliminating the need for steam pressure entirely'
            ],
            correctAnswer: 'By keeping the main cylinder hot while cooling steam in a separate vessel, avoiding repeated reheating',
            explanation: 'Paragraph 2 explains that "By maintaining the main cylinder at boiling temperature while condensing steam in a dedicated secondary vessel, Watt\'s engine reduced fuel consumption by more than 75 percent."'
          },
          {
            id: 't8-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following can be inferred from paragraph 3 about "agglomeration economies"?',
            options: [
              'They refer to cost savings businesses achieve by locating close together in industrial cities.',
              'They are government taxes levied on companies that build factories in rural areas.',
              'They represent the financial losses caused by city pollution and disease.',
              'They occur only when factories operate exclusively using watermills.'
            ],
            correctAnswer: 'They refer to cost savings businesses achieve by locating close together in industrial cities.',
            explanation: 'Paragraph 3 defines agglomeration economies as external cost reductions arising from shared pools of skilled labor, suppliers, knowledge spillovers, and infrastructure in clusters.'
          },
          {
            id: 't8-q5',
            type: 'purpose',
            paragraphRef: 4,
            question: 'Why does the author mention railways and steamships in paragraph 4?',
            options: [
              'To show how steam transportation integrated markets and amplified manufacturing economies of scale',
              'To argue that steam engines were abandoned in favor of canal barges',
              'To prove that international trade declined during the 19th century',
              'To demonstrate that passenger travel was more profitable than freight cargo'
            ],
            correctAnswer: 'To show how steam transportation integrated markets and amplified manufacturing economies of scale',
            explanation: 'Paragraph 4 explains how steam transport lowered freight transit costs, integrated regional markets into national economies, and induced economies of scale.'
          },
          {
            id: 't8-q6',
            type: 'vocabulary',
            paragraphRef: 4,
            highlightedText: 'slashed',
            question: 'The word "slashed" in paragraph 4 is closest in meaning to:',
            options: [
              'drastically reduced',
              'slowly increased',
              'artificially inflated',
              'officially banned'
            ],
            correctAnswer: 'drastically reduced',
            explanation: '"Slashed" in economic terms means dramatically lowered or reduced.'
          },
          {
            id: 't8-q7',
            type: 'simplification',
            paragraphRef: 3,
            highlightedText: 'Because steam engines could be erected anywhere coal could be transported, industrialists situated new factories in expanding cities adjacent to extensive labor pools, financial institutions, and multi-modal transport hubs.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 3?',
            options: [
              'Since steam engines were portable, manufacturers moved factories into cities to take advantage of large workforces, banks, and transit links.',
              'Coal transport was so expensive that factories could only operate directly next to coal mines.',
              'Industrialists avoided cities because urban labor pools were too demanding and financial institutions refused loans.',
              'Building steam engines inside cities was illegal until multi-modal hubs were completed.'
            ],
            correctAnswer: 'Since steam engines were portable, manufacturers moved factories into cities to take advantage of large workforces, banks, and transit links.',
            explanation: 'Option A accurately conveys that the locational freedom of steam engines allowed industrialists to position factories in cities near workers, capital, and transportation.'
          },
          {
            id: 't8-q8',
            type: 'negative',
            paragraphRef: 3,
            question: 'According to paragraph 3, all of the following were benefits of industrial agglomeration in cities EXCEPT:',
            options: [
              'Shared pools of skilled labor',
              'Specialized component suppliers',
              'Rapid technological knowledge spillovers',
              'Free municipal water and guaranteed tax exemptions'
            ],
            correctAnswer: 'Free municipal water and guaranteed tax exemptions',
            explanation: 'Paragraph 3 lists skilled labor, specialized suppliers, knowledge spillovers, and railway infrastructure. Free municipal water and tax exemptions are not mentioned.'
          },
          {
            id: 't8-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"This technological leap transformed coal from a localized heating fuel into the fundamental lifeblood of the global industrial economy."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 4)'
            ],
            insertSentence: 'This technological leap transformed coal from a localized heating fuel into the fundamental lifeblood of the global industrial economy.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 follows the explanation of Watt\'s 75% efficiency gain and how steam power became viable everywhere.'
          },
          {
            id: 't8-q10',
            type: 'summary',
            summaryPrompt: 'The development of the steam engine transformed industrial geography and catalyzed modern economic growth.',
            options: [
              'Watt\'s separate condenser dramatically improved thermodynamic efficiency, freeing manufacturing from rural river valleys.',
              'Steam-powered factories clustered in cities to exploit agglomeration economies like urban labor, capital, and rail hubs.',
              'Steam railways and steamships integrated regional markets into national and international economies, lowering transport costs.',
              'Watermills remained the most efficient source of factory power throughout the entire 20th century.',
              'Industrialists abandoned cities and relocated all production back to remote mountain streams by 1850.',
              'The Newcomen engine was preferred over the Watt engine because it consumed significantly less fuel.'
            ],
            correctAnswer: [
              'Watt\'s separate condenser dramatically improved thermodynamic efficiency, freeing manufacturing from rural river valleys.',
              'Steam-powered factories clustered in cities to exploit agglomeration economies like urban labor, capital, and rail hubs.',
              'Steam railways and steamships integrated regional markets into national and international economies, lowering transport costs.'
            ],
            explanation: 'Options A, B, and C capture the main technological breakthrough, the urban spatial concentration, and the transport revolution described in the passage. Options D, E, and F are factually incorrect.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 9: Hydrothermal Vent Ecosystems & Chemosynthesis (Oceanography)
  // =========================================================================
  {
    id: 'ets-test-9',
    testNumber: 9,
    title: 'Chemosynthesis and Trophic Dynamics at Hydrothermal Vents',
    discipline: 'Deep-Sea Oceanography & Marine Ecology',
    description: 'Examines the discovery of abyssal hydrothermal vent communities along mid-ocean ridges, exploring sulfur-oxidizing endosymbiosis in Riftia pachyptila, extreme thermophiles, and sunlight-independent trophic cascades.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-9-passage-1',
        passageNumber: 1,
        title: 'Abyssal Chemosynthesis: Energetics, Symbiosis, and Vent Ecology',
        subject: 'Oceanography',
        discipline: 'Marine Ecology',
        wordCount: 715,
        paragraphs: [
          "Until the landmark 1977 expedition of the research submersible Alvin to the Galápagos Rift, biological oceanographers operated under the foundational assumption that all marine food webs were fundamentally underpinned by epipelagic photosynthetic primary production. In the perpetual darkness of the abyssal benthos—thousands of meters below the photic zone—life was presumed to be sparse, subsisting exclusively on the meager, decaying organic detritus ('marine snow') that drifted down from surface waters. [■] The discovery of thriving, hyper-dense animal communities flourishing along volcanic mid-ocean ridges completely overturned this paradigm, establishing the existence of complex ecosystems sustained entirely independent of solar irradiance. [■]",
          
          "Hydrothermal vents occur along tectonic spreading centers where seawater infiltrates oceanic crust through fissures, is heated to temperatures exceeding 350°C by underlying magma chambers, and dissolves high concentrations of minerals and reduced chemicals from surrounding basalt. When this superheated, anoxic hydrothermal fluid discharges into cold, oxygenated bottom water (2°C), metal sulfides precipitate to form towering mineral chimneys ('black smokers'). The energetic cornerstone of these ecosystems is chemosynthesis, carried out by specialized chemolithoautotrophic bacteria and archaea. These microbes oxidize reduced inorganic chemical compounds—predominantly hydrogen sulfide (H2S), methane (CH4), and hydrogen gas (H2)—to generate ATP, fixing dissolved carbon dioxide into organic molecules via the Calvin-Benson cycle or the reductive tricarboxylic acid (rTCA) cycle. [■]",
          
          "The most conspicuous biomass at hydrothermal vents is supported through obligate endosymbiotic mutualisms. A quintessential example is the giant hydrothermal vent tubeworm, Riftia pachyptila, which can reach lengths of over two meters. Adult tubeworms possess no digestive tract, mouth, or gut; instead, their body cavity is filled with a vascularized organ called a trophosome, which houses billions of sulfur-oxidizing endosymbionts. The worm's bright red, hemocyanin- and hemoglobin-rich plume absorbs oxygen, carbon dioxide, and toxic hydrogen sulfide simultaneously from the vent plume. A specialized multi-subunit hemoglobin binds sulfide and oxygen at distinct sites with extraordinarily high affinity, transporting sulfide safely through the bloodstream without poisoning cellular respiration and delivering it directly to the bacterial trophosome. [■]",
          
          "Hydrothermal vent communities are characterized by extreme ephemeral instability. Volcanic eruptions, tectonic faulting, and mineral clogging can abruptly sever hydrothermal fluid flow, causing an entire vent ecosystem to collapse and starve within months. Conversely, newly opened vents are colonized with astonishing speed by highly dispersed planktonic larvae carried by deep ocean currents. Mobile predators and scavengers, including vent crabs (Bythograeidae), zoarcid fish, and predatory polychaetes, exploit these ephemeral hotspots. The evolutionary adaptations that enable vent fauna to thrive under high hydrostatic pressure, extreme thermal gradients (ranging from 2°C to over 100°C across millimeters), and toxic heavy metal concentrations provide crucial insights into the origins of life on Earth and potential astrobiological habitats on icy moons such as Europa and Enceladus."
        ],
        questions: [
          {
            id: 't9-q1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, what major assumption did marine biologists hold prior to the 1977 Alvin expedition?',
            options: [
              'That all marine life depended ultimately on sunlight-driven photosynthesis in surface waters',
              'That hydrothermal vents were the primary source of atmospheric oxygen',
              'That fish could not survive in cold deep-sea environments',
              'That ocean trenches contained large forests of photosynthetic kelp'
            ],
            correctAnswer: 'That all marine life depended ultimately on sunlight-driven photosynthesis in surface waters',
            explanation: 'Paragraph 1 states that before the discovery, oceanographers assumed all marine food webs were fundamentally underpinned by epipelagic photosynthetic primary production.'
          },
          {
            id: 't9-q2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'cornerstone',
            question: 'The word "cornerstone" in paragraph 2 is closest in meaning to:',
            options: [
              'essential foundation or basis',
              'decorative boundary marker',
              'rare mineral crystal',
              'temporary obstacle'
            ],
            correctAnswer: 'essential foundation or basis',
            explanation: '"Cornerstone" means the fundamental stone or basis on which something is built.'
          },
          {
            id: 't9-q3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, how do chemolithoautotrophic microbes produce organic molecules?',
            options: [
              'By absorbing sunlight reflected off deep-sea mineral chimneys',
              'By oxidizing reduced inorganic chemicals like hydrogen sulfide and fixing dissolved carbon dioxide',
              'By consuming decaying plant material falling from the ocean surface',
              'By extracting glucose directly from basalt rock formations'
            ],
            correctAnswer: 'By oxidizing reduced inorganic chemicals like hydrogen sulfide and fixing dissolved carbon dioxide',
            explanation: 'Paragraph 2 explains that microbes "oxidize reduced inorganic chemical compounds—predominantly hydrogen sulfide... to generate ATP, fixing dissolved carbon dioxide into organic molecules."'
          },
          {
            id: 't9-q4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following can be inferred from paragraph 3 about adult Riftia pachyptila tubeworms?',
            options: [
              'They capture and eat small shrimp using their red tentacles.',
              'They rely entirely on endosymbiotic bacteria inside their trophosome for all their nutritional needs.',
              'They frequently migrate between deep vents and shallow coral reefs.',
              'They are poisoned whenever their blood comes into contact with hydrogen sulfide.'
            ],
            correctAnswer: 'They rely entirely on endosymbiotic bacteria inside their trophosome for all their nutritional needs.',
            explanation: 'Paragraph 3 notes that adult tubeworms lack a mouth and gut, relying on their trophosome housing billions of endosymbionts for survival.'
          },
          {
            id: 't9-q5',
            type: 'factual',
            paragraphRef: 3,
            question: 'According to paragraph 3, how does Riftia\'s hemoglobin safely transport hydrogen sulfide without poisoning its own cellular respiration?',
            options: [
              'It converts all sulfide into harmless sugar before it enters the blood.',
              'It has distinct binding sites with high affinity that bind sulfide and oxygen separately.',
              'It filters sulfide through an external shell made of thick calcium carbonate.',
              'It expels sulfide through the digestive tract within seconds.'
            ],
            correctAnswer: 'It has distinct binding sites with high affinity that bind sulfide and oxygen separately.',
            explanation: 'Paragraph 3 states that "A specialized multi-subunit hemoglobin binds sulfide and oxygen at distinct sites with extraordinarily high affinity, transporting sulfide safely through the bloodstream without poisoning cellular respiration."'
          },
          {
            id: 't9-q6',
            type: 'purpose',
            paragraphRef: 4,
            question: 'Why does the author mention icy moons such as Europa and Enceladus in paragraph 4?',
            options: [
              'To show that hydrothermal vent adaptations provide models for possible life in extraterrestrial ocean environments',
              'To prove that Earth\'s ocean water originally arrived on comets from Saturn',
              'To explain why deep-sea submersibles are tested in outer space',
              'To argue that hydrothermal vents are freezing cold rather than volcanic'
            ],
            correctAnswer: 'To show that hydrothermal vent adaptations provide models for possible life in extraterrestrial ocean environments',
            explanation: 'Paragraph 4 states that vent adaptations provide insights into "potential astrobiological habitats on icy moons such as Europa and Enceladus."'
          },
          {
            id: 't9-q7',
            type: 'simplification',
            paragraphRef: 4,
            highlightedText: 'Volcanic eruptions, tectonic faulting, and mineral clogging can abruptly sever hydrothermal fluid flow, causing an entire vent ecosystem to collapse and starve within months.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 4?',
            options: [
              'Geological events can suddenly cut off vent fluids, rapidly killing the dependent ecosystem through starvation.',
              'Vent ecosystems survive volcanic eruptions by relocating to colder ocean regions.',
              'Mineral clogging ensures that hydrothermal vents remain active for millions of years without interruption.',
              'Tectonic faulting only affects surface animals while leaving vent worms completely safe.'
            ],
            correctAnswer: 'Geological events can suddenly cut off vent fluids, rapidly killing the dependent ecosystem through starvation.',
            explanation: 'Option A accurately conveys that geological processes can halt hydrothermal flow and cause rapid ecosystem collapse.'
          },
          {
            id: 't9-q8',
            type: 'negative',
            paragraphRef: 2,
            question: 'According to paragraph 2, all of the following reduced inorganic chemicals are used by chemosynthetic microbes EXCEPT:',
            options: [
              'Hydrogen sulfide (H2S)',
              'Methane (CH4)',
              'Hydrogen gas (H2)',
              'Pure liquid mercury'
            ],
            correctAnswer: 'Pure liquid mercury',
            explanation: 'Paragraph 2 lists hydrogen sulfide, methane, and hydrogen gas as the chemicals oxidized. Mercury is not mentioned.'
          },
          {
            id: 't9-q9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"This organic carbon forms the nutritional basis for all subsequent trophic levels in the vent community."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 3)'
            ],
            insertSentence: 'This organic carbon forms the nutritional basis for all subsequent trophic levels in the vent community.',
            correctAnswer: 2, // Square 3 (Paragraph 2)
            explanation: 'Square 3 in Paragraph 2 follows the sentence explaining how chemolithoautotrophs fix carbon dioxide into organic molecules via biochemical cycles.'
          },
          {
            id: 't9-q10',
            type: 'summary',
            summaryPrompt: 'Hydrothermal vent ecosystems represent unique deep-sea biological communities sustained independently of solar energy.',
            options: [
              'Chemolithoautotrophic bacteria utilize energy from oxidized sulfur and methane to fix carbon into organic nutrients.',
              'Animals like the giant tubeworm Riftia rely on symbiotic bacteria in specialized organs, supported by adapted hemoglobin.',
              'Vent communities are highly productive yet unstable, subject to sudden extinction when hydrothermal fluid flow ceases.',
              'Hydrothermal vents rely on surface photosynthetic phytoplankton falling from the photic zone as their main energy source.',
              'Tubeworms feed by using sharp teeth to scrape minerals off black smoker chimneys.',
              'High hydrostatic pressure prevents any bacteria from surviving near underwater volcanic spreading centers.'
            ],
            correctAnswer: [
              'Chemolithoautotrophic bacteria utilize energy from oxidized sulfur and methane to fix carbon into organic nutrients.',
              'Animals like the giant tubeworm Riftia rely on symbiotic bacteria in specialized organs, supported by adapted hemoglobin.',
              'Vent communities are highly productive yet unstable, subject to sudden extinction when hydrothermal fluid flow ceases.'
            ],
            explanation: 'Options A, B, and C summarize the primary chemosynthetic basis, the host-symbiont biology, and the ecological dynamics of vents. Options D, E, and F contradict the passage.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // TEST 10: Comparative Linguistics & Proto-Indo-European (Linguistics)
  // =========================================================================
  {
    id: 'ets-test-10',
    testNumber: 10,
    title: 'The Comparative Method and the Reconstruction of Proto-Indo-European',
    discipline: 'Historical Linguistics & Anthropology',
    description: 'Explores the scientific reconstruction of ancestral proto-languages through sound laws, examining Grimm\'s Law, cognate matrices, internal reconstruction, and archaeological correlations with the Steppe pastoralist hypothesis.',
    timeLimitMinutes: 36,
    totalQuestions: 10,
    passages: [
      {
        id: 'test-10-passage-1',
        passageNumber: 1,
        title: 'Phonological Regularity and the Reconstruction of Ancestral Tongues',
        subject: 'Linguistics',
        discipline: 'Historical Anthropology',
        wordCount: 730,
        paragraphs: [
          "In 1786, Sir William Jones, a jurist and philologist serving in British India, delivered a historic address to the Asiatic Society in Calcutta, noting that Sanskrit, Greek, and Latin shared unmistakable grammatical affinities and root vocabularies that could not possibly have emerged by sheer coincidence. [■] Jones proposed that these diverse tongues, alongside Celtic, Persian, and Germanic languages, had sprang from a common ancestral source that had ceased to exist. This insight established the foundation for historical-comparative linguistics and the systematic reconstruction of the hypothetical ancestral language designated Proto-Indo-European (PIE). [■]",
          
          "The cornerstone of the comparative method is the principle of regular sound correspondence, formulated definitively by the nineteenth-century Neogrammarian school (Junggrammatiker) in Leipzig. The Neogrammarians asserted that sound change occurs according to mechanical laws that operate without exception within a given speech community and time period. A celebrated illustration is Grimm's Law, articulated by Jacob Grimm in 1822, which describes the systematic first Germanic consonant shift. Under Grimm's Law, Proto-Indo-European voiceless stops (*p, *t, *k) systematically shifted in Proto-Germanic to voiceless fricatives (*f, *θ, *h), explaining regular cognates such as Latin pater / English father, Latin tres / English three, and Latin centum / English hundred (Old English hund). [■]",
          
          "By meticulously analyzing phonological correspondences across daughter languages, historical linguists employ internal reconstruction and comparative matrices to reconstruct not merely individual vocabulary roots (lexemes), but complete morphological paradigms and syntactic structures of PIE. Reconstructed vocabulary offers compelling windows into the material culture, environmental habitat, and social organization of the ancestral speech community. For instance, the presence of reconstructed cognate terms for 'wheel' (*kʷékʷlos), 'axle' (*h₂éks-), 'yoke' (*yugóm), and 'wool' (*wĺ̥h₁neh₂) demonstrates conclusively that the speech community possessed wheeled vehicle technology and domesticated woolly sheep prior to linguistic dispersal.",
          
          "Correlating linguistic reconstruction with archaeological and paleogenomic data has largely resolved the geographical homeland (Urheimat) of Proto-Indo-European. The prevailing 'Steppe Hypothesis' (Kurgan hypothesis), pioneered by Marija Gimbutas and reinforced by recent ancient DNA analyses, situates the PIE homeland in the Pontic-Caspian steppe north of the Black and Caspian seas during the fifth to fourth millennia BCE (the Yamnaya archaeological horizon). Pastoralist mobility facilitated by horse domestication and wheeled ox-wagons enabled massive demographic expansions into Europe and South Asia, propagating daughter dialects that progressively diverged through geographical separation into the Indo-European language family. [■]"
        ],
        questions: [
          {
            id: 't1-q10_1',
            type: 'factual',
            paragraphRef: 1,
            question: 'According to paragraph 1, what observation led Sir William Jones to propose a common ancestral language?',
            options: [
              'Sanskrit, Greek, and Latin shared grammatical affinities and vocabulary too strong to be coincidental.',
              'All ancient European languages used the exact same alphabet.',
              'British archaeologists discovered written stone inscriptions in the Pontic steppe.',
              'Persian and Celtic speakers lived in the exact same village in India.'
            ],
            correctAnswer: 'Sanskrit, Greek, and Latin shared grammatical affinities and vocabulary too strong to be coincidental.',
            explanation: 'Paragraph 1 states that Jones noted Sanskrit, Greek, and Latin shared "unmistakable grammatical affinities and root vocabularies that could not possibly have emerged by sheer coincidence."'
          },
          {
            id: 't1-q10_2',
            type: 'vocabulary',
            paragraphRef: 2,
            highlightedText: 'asserted',
            question: 'The word "asserted" in paragraph 2 is closest in meaning to:',
            options: [
              'stated with strong conviction',
              'firmly denied',
              'reluctantly doubted',
              'accidentally forgot'
            ],
            correctAnswer: 'stated with strong conviction',
            explanation: '"Asserted" means declared or stated positively and with confidence.'
          },
          {
            id: 't1-q10_3',
            type: 'factual',
            paragraphRef: 2,
            question: 'According to paragraph 2, what shift does Grimm\'s Law describe?',
            options: [
              'The loss of all vowels in Greek dialects',
              'The systematic shift of Proto-Indo-European voiceless stops into Germanic voiceless fricatives',
              'The transformation of Latin words into modern Persian vocabulary',
              'The replacement of wheel terms with nautical expressions'
            ],
            correctAnswer: 'The systematic shift of Proto-Indo-European voiceless stops into Germanic voiceless fricatives',
            explanation: 'Paragraph 2 explains: "Under Grimm\'s Law, Proto-Indo-European voiceless stops (*p, *t, *k) systematically shifted in Proto-Germanic to voiceless fricatives (*f, *θ, *h)."'
          },
          {
            id: 't1-q10_4',
            type: 'inference',
            paragraphRef: 3,
            question: 'Which of the following can be inferred from paragraph 3 about reconstructed PIE vocabulary?',
            options: [
              'Linguists can deduce cultural technologies and domestic animals of ancient speakers from shared reconstructed words.',
              'Proto-Indo-European speakers had no knowledge of wool or domesticated animals.',
              'All daughter languages kept identical spellings for every noun over thousands of years.',
              'Reconstructed words prove that PIE speakers lived in submarine underwater cities.'
            ],
            correctAnswer: 'Linguists can deduce cultural technologies and domestic animals of ancient speakers from shared reconstructed words.',
            explanation: 'Paragraph 3 notes that cognates for "wheel", "axle", and "wool" prove the community possessed wheeled vehicle technology and domesticated woolly sheep before dispersing.'
          },
          {
            id: 't1-q10_5',
            type: 'purpose',
            paragraphRef: 4,
            question: 'Why does the author mention the Yamnaya archaeological horizon in paragraph 4?',
            options: [
              'To identify the steppe pastoralist culture correlated with the Proto-Indo-European homeland',
              'To show an ancient culture that had no connection to horse domestication',
              'To explain why the comparative method was abandoned by modern linguists',
              'To prove that Proto-Indo-European originated in the British Isles'
            ],
            correctAnswer: 'To identify the steppe pastoralist culture correlated with the Proto-Indo-European homeland',
            explanation: 'Paragraph 4 links the Steppe Hypothesis and Yamnaya archaeological horizon to the geographical homeland and pastoralist expansion of PIE.'
          },
          {
            id: 't1-q10_6',
            type: 'vocabulary',
            paragraphRef: 4,
            highlightedText: 'propagating',
            question: 'The word "propagating" in paragraph 4 is closest in meaning to:',
            options: [
              'spreading and reproducing',
              'violently suppressing',
              'mistranslating',
              'permanently erasing'
            ],
            correctAnswer: 'spreading and reproducing',
            explanation: '"Propagating" means spreading or dispersing widely, referring here to spreading daughter dialects across Europe and South Asia.'
          },
          {
            id: 't1-q10_7',
            type: 'simplification',
            paragraphRef: 2,
            highlightedText: 'The Neogrammarians asserted that sound change occurs according to mechanical laws that operate without exception within a given speech community and time period.',
            question: 'Which of the sentences below best expresses the essential information in the highlighted sentence from paragraph 2?',
            options: [
              'The Neogrammarians argued that phonetic sound changes follow strict, exceptionless rules within a specific language and era.',
              'Sound changes in languages happen completely at random without following any predictable patterns.',
              'Mechanical laws prevent speech communities from ever changing their pronunciations.',
              'Grammar rules were written by machines to eliminate sound changes in Leipzig.'
            ],
            correctAnswer: 'The Neogrammarians argued that phonetic sound changes follow strict, exceptionless rules within a specific language and era.',
            explanation: 'Option A accurately captures the core principle of exceptionless sound laws operating within a specific speech community and time frame.'
          },
          {
            id: 't1-q10_8',
            type: 'negative',
            paragraphRef: 3,
            question: 'According to paragraph 3, all of the following technological or cultural concepts are evidenced by reconstructed PIE cognates EXCEPT:',
            options: [
              'Wheeled vehicles (*kʷékʷlos)',
              'Axles (*h₂éks-)',
              'Wool production (*wĺ̥h₁neh₂)',
              'Mechanical clockwork gears'
            ],
            correctAnswer: 'Mechanical clockwork gears',
            explanation: 'Paragraph 3 explicitly mentions wheels, axles, yokes, and wool. Clockwork gears are medieval inventions and are not mentioned.'
          },
          {
            id: 't1-q10_9',
            type: 'insert',
            question: 'Look at the four squares [■] that indicate where the following sentence can be added to the passage.\n\n"This breakthrough inaugurated a new scientific era in which language relationships were established through rigorous historical evidence."',
            options: [
              'Square 1 (Paragraph 1)',
              'Square 2 (Paragraph 1)',
              'Square 3 (Paragraph 2)',
              'Square 4 (Paragraph 4)'
            ],
            insertSentence: 'This breakthrough inaugurated a new scientific era in which language relationships were established through rigorous historical evidence.',
            correctAnswer: 1, // Square 2 (Paragraph 1)
            explanation: 'Square 2 in Paragraph 1 directly follows Jones\' proposal that diverse tongues sprang from a common ancestral source.'
          },
          {
            id: 't1-q10_10',
            type: 'summary',
            summaryPrompt: 'Historical linguistics reconstructs the Proto-Indo-European ancestral language through systematic comparative methodology.',
            options: [
              'The comparative method relies on exceptionless sound laws, such as Grimm\'s Law, to identify historical cognates.',
              'Reconstructed vocabulary provides valuable insights into the technology, environment, and pastoralist culture of PIE speakers.',
              'Archaeological and genetic evidence supports the Steppe Hypothesis, placing the PIE homeland in the Pontic-Caspian steppe.',
              'Proto-Indo-European was proven to be invented as a fictional language by 19th-century German novelists.',
              'Grimm\'s Law proved that Latin and English evolved independently from separate animal vocalizations.',
              'Linguists have determined that PIE speakers possessed no knowledge of domestic animals or tools.'
            ],
            correctAnswer: [
              'The comparative method relies on exceptionless sound laws, such as Grimm\'s Law, to identify historical cognates.',
              'Reconstructed vocabulary provides valuable insights into the technology, environment, and pastoralist culture of PIE speakers.',
              'Archaeological and genetic evidence supports the Steppe Hypothesis, placing the PIE homeland in the Pontic-Caspian steppe.'
            ],
            explanation: 'Options A, B, and C synthesize the sound laws, lexical culture reconstruction, and archaeological-homeland convergence described in the text. Options D, E, and F are factually absurd.'
          }
        ]
      }
    ]
  }
];
