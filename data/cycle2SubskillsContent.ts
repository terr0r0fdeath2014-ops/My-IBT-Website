/**
 * TOEFL iBT Cycle 2 - Sub-Skill Reading Practice Banks
 * High-Standard Academic Materials across Neuroscience, Evolutionary Biology, 
 * Paleoanthropology, Astrophysics, Climatology, Cognitive Psychology, and Environmental Science.
 */

export interface GenericReadingItem {
  title: string;
  passage: string;
  question: string;
  options: string[];
  correct: string;
  hint?: string;
  explanation: string;
  highlight?: string;
}

// ---------------------------------------------------------------------------
// 1. TERMINOLOGY IN CONTEXT (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_TERMINOLOGY_CONTENT: GenericReadingItem[] = [
  {
    title: "Neuroscience: Synaptic Pruning",
    passage: "During post-natal development, the juvenile brain generates an overabundance of synaptic connections. Through activity-dependent selection, infrequently stimulated pathways undergo systematic pruning, leaving behind highly specialized neural networks.",
    question: "The word \"pruning\" in the passage is closest in meaning to:",
    options: ["elimination", "amplification", "disruption", "duplication"],
    correct: "elimination",
    hint: "Think of pruning in gardening: cutting away unnecessary branches to strengthen the plant.",
    explanation: "In biological contexts, 'pruning' refers to the systematic elimination or trimming of excess synapses.",
    highlight: "infrequently stimulated pathways undergo systematic pruning"
  },
  {
    title: "Astrophysics: Stellar Accretion",
    passage: "In the dense core of molecular gas clouds, protostellar cores gather mass via gravitationally driven accretion from the surrounding circumstellar disk, eventually reaching thermonuclear ignition thresholds.",
    question: "The word \"accretion\" in the passage is closest in meaning to:",
    options: ["accumulation", "dispersion", "evaporation", "radiation"],
    correct: "accumulation",
    hint: "Notice that the core 'gathers mass' from the surrounding disk.",
    explanation: "Accretion in astronomy refers to the gradual accumulation of matter under the influence of gravity.",
    highlight: "gather mass via gravitationally driven accretion from the surrounding circumstellar disk"
  },
  {
    title: "Ecology: Endemic Floristic Radiations",
    passage: "Isolated volcanic archipelagos such as the Galápagos foster ecosystems dominated by endemic flora that exist nowhere else on the globe, having diverged under unique selective pressures.",
    question: "The word \"endemic\" in the passage is closest in meaning to:",
    options: ["native and restricted", "widely distributed", "genetically modified", "recently extinct"],
    correct: "native and restricted",
    hint: "The text explains that these species 'exist nowhere else on the globe'.",
    explanation: "'Endemic' in biogeography describes species that are native and exclusively restricted to a specific geographic locale.",
    highlight: "ecosystems dominated by endemic flora that exist nowhere else on the globe"
  },
  {
    title: "Economics: Asymmetric Information",
    passage: "When one party in a commercial transaction possesses superior knowledge regarding product quality, market equilibrium is distorted by asymmetric incentives, often precipitating adverse selection.",
    question: "The word \"precipitating\" in the passage is closest in meaning to:",
    options: ["triggering", "preventing", "measuring", "clarifying"],
    correct: "triggering",
    hint: "Consider how asymmetric incentives cause or bring about adverse selection.",
    explanation: "'Precipitate' means to cause an event or situation to happen suddenly or prematurely; hence 'triggering'.",
    highlight: "often precipitating adverse selection"
  },
  {
    title: "Climatology: Albedo Feedback",
    passage: "As polar ice shelves retreat, reflective white surfaces are replaced by dark ocean water, which diminishes planetary albedo and markedly accelerates atmospheric thermal absorption.",
    question: "The word \"diminishes\" in the passage is closest in meaning to:",
    options: ["reduces", "stabilizes", "reflects", "monitors"],
    correct: "reduces",
    hint: "Think about what happens to reflectivity when bright white ice is replaced by dark water.",
    explanation: "'Diminish' means to make smaller, lessen, or reduce in intensity or amount.",
    highlight: "which diminishes planetary albedo and markedly accelerates"
  },
  {
    title: "Paleontology: Morphological Stasis",
    passage: "According to the punctuated equilibrium model, species often experience protracted periods of morphological stasis during which evolutionary anatomical alterations remain virtually imperceptible.",
    question: "The word \"stasis\" in the passage is closest in meaning to:",
    options: ["stability", "acceleration", "decay", "migration"],
    correct: "stability",
    hint: "Note that evolutionary anatomical changes remain 'virtually imperceptible' during this period.",
    explanation: "'Stasis' denotes a state of balance, equilibrium, or remaining unchanged over time.",
    highlight: "experience protracted periods of morphological stasis"
  },
  {
    title: "Psychology: Cognitive Dissonance",
    passage: "When individuals encounter empirical evidence that sharply contradicts their established ideological beliefs, they experience psychological distress and often fabricate rationalizations to mitigate the tension.",
    question: "The word \"mitigate\" in the passage is closest in meaning to:",
    options: ["alleviate", "intensify", "prolong", "broadcast"],
    correct: "alleviate",
    hint: "How would individuals want to treat uncomfortable psychological tension?",
    explanation: "'Mitigate' means to make less severe, serious, or painful; to alleviate or relieve.",
    highlight: "fabricate rationalizations to mitigate the tension"
  },
  {
    title: "Oceanography: Hydrothermal Vents",
    passage: "Chemosynthetic bacterial mats surrounding abyssal hydrothermal vents exploit hydrogen sulfide emissions, forming ubiquitous primary producer colonies that sustain complex benthic food webs.",
    question: "The word \"ubiquitous\" in the passage is closest in meaning to:",
    options: ["widespread", "fragile", "dormant", "toxic"],
    correct: "widespread",
    hint: "The colonies sustain the entire benthic food web across the vents.",
    explanation: "'Ubiquitous' means present, appearing, or found everywhere; widespread.",
    highlight: "forming ubiquitous primary producer colonies that sustain"
  },
  {
    title: "History: Agrarian Sedentism",
    passage: "The transition from nomadic foraging to sedentary agrarianism catalyzed profound societal stratification, fostering specialized craftsman guilds and centralized taxation bureaucracies.",
    question: "The word \"catalyzed\" in the passage is closest in meaning to:",
    options: ["stimulated", "delayed", "abolished", "criticized"],
    correct: "stimulated",
    hint: "A catalyst initiates and accelerates a chemical or societal reaction.",
    explanation: "'Catalyze' means to cause or accelerate a process or action, acting as a stimulus.",
    highlight: "sedentary agrarianism catalyzed profound societal stratification"
  },
  {
    title: "Genetics: Epigenetic Methylation",
    passage: "DNA methylation involves the covalent addition of methyl groups to cytosine bases, modulating transcriptional availability without altering the underlying nucleotide sequence.",
    question: "The word \"modulating\" in the passage is closest in meaning to:",
    options: ["regulating", "erasing", "replacing", "ignoring"],
    correct: "regulating",
    hint: "Notice that it changes how accessible transcription is without rewriting the code.",
    explanation: "'Modulate' means to exert a modifying or controlling influence on something; to regulate.",
    highlight: "modulating transcriptional availability without altering the underlying"
  }
];

// ---------------------------------------------------------------------------
// 2. FACTUAL INFORMATION (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_FACTUAL_CONTENT: GenericReadingItem[] = [
  {
    title: "Electrophysiology: Mismatch Negativity",
    passage: "Electrophysiological assessments demonstrate that adult second language learners who undergo high-variability phonetic training exhibit an increased amplitude in the mismatch negativity (MMN) waveform. This auditory brain response reflects pre-attentive detection of acoustic alterations in speech streams, confirming that adult cortical maps remain malleable.",
    question: "According to the passage, what does an increased amplitude in the mismatch negativity (MMN) waveform reflect?",
    options: [
      "The brain's pre-attentive ability to detect acoustic alterations in speech",
      "A permanent decrease in working memory capacity",
      "Damage to the primary auditory cortex from excessive training",
      "An inability to comprehend native language grammar"
    ],
    correct: "The brain's pre-attentive ability to detect acoustic alterations in speech",
    explanation: "The passage states that the MMN waveform 'reflects pre-attentive detection of acoustic alterations in speech streams'.",
    highlight: "reflects pre-attentive detection of acoustic alterations in speech streams"
  },
  {
    title: "Archaeology: Clovis Culture Chronology",
    passage: "Ultrafiltration of bone collagen has constrained the Clovis archaeological complex to approximately 13,050 to 12,750 calibrated years before present. This narrow chronological window of roughly 300 years implies that the dissemination of fluted projectile point technology across North America occurred with unprecedented rapidity.",
    question: "According to the passage, how long did the Clovis archaeological complex last based on ultrafiltered dates?",
    options: [
      "Approximately 300 years",
      "Over 2,500 years",
      "Nearly 10,000 years",
      "Fewer than 20 years"
    ],
    correct: "Approximately 300 years",
    explanation: "The passage notes that the interval from 13,050 to 12,750 cal BP represents a 'narrow chronological window of roughly 300 years'.",
    highlight: "narrow chronological window of roughly 300 years"
  },
  {
    title: "Marine Biology: Photophore Guanine Reflectors",
    passage: "Deep-sea photophores contain an internal parabolic reflector composed of stacked guanine and purine microcrystals. Because these crystalline layers possess an exceptionally high refractive index, they reflect virtually 99 percent of the chemiluminescent light outward into the ocean water.",
    question: "Why are stacked guanine and purine microcrystals effective as reflectors in photophores?",
    options: [
      "They have an exceptionally high refractive index that reflects nearly 99 percent of light",
      "They absorb ambient sunlight to charge chemical batteries inside the cells",
      "They emit toxic secretions that repel predatory deep-sea sharks",
      "They dissolve rapidly to create smoke screens when fish are attacked"
    ],
    correct: "They have an exceptionally high refractive index that reflects nearly 99 percent of light",
    explanation: "The passage explicitly explains that 'Because these crystalline layers possess an exceptionally high refractive index, they reflect virtually 99 percent of the chemiluminescent light outward'.",
    highlight: "Because these crystalline layers possess an exceptionally high refractive index, they reflect virtually 99 percent"
  },
  {
    title: "Cognitive Science: Entorhinal Grid Cells",
    passage: "Entorhinal grid cells generate periodic triangular firing fields that tessellate the physical environment. This crystalline neural matrix provides a metric coordinate system enabling mammals to estimate Euclidean distances and vector angles between locations without relying solely on visual road signs.",
    question: "What function do entorhinal grid cells serve in mammalian spatial navigation?",
    options: [
      "They provide a metric coordinate system to estimate distances and angles",
      "They memorize the street names of municipal postal districts",
      "They control the physical muscle movements of the legs while running",
      "They filter out traffic noise to protect delicate ear membranes"
    ],
    correct: "They provide a metric coordinate system to estimate distances and angles",
    explanation: "The text explains that the grid cells provide 'a metric coordinate system enabling mammals to estimate Euclidean distances and vector angles'.",
    highlight: "provides a metric coordinate system enabling mammals to estimate Euclidean distances and vector angles"
  },
  {
    title: "Paleoclimatology: Bristlecone Dendrochronology",
    passage: "Dendrochronological examination of Great Basin bristlecone pines reveals that cross-dating tree-ring widths can reconstruct precipitation anomalies spanning over 8,000 continuous years. Narrow rings correlated directly with multi-decade megadroughts that punctuated the Medieval Climate Anomaly.",
    question: "According to the passage, what do narrow tree rings in Great Basin bristlecone pines indicate?",
    options: [
      "Multi-decade megadroughts with suppressed precipitation",
      "Abnormally high flood levels and standing groundwater",
      "Severe forest fire destruction of canopy leaves",
      "Rapid volcanic ash deposits during summer months"
    ],
    correct: "Multi-decade megadroughts with suppressed precipitation",
    explanation: "The text states that 'Narrow rings correlated directly with multi-decade megadroughts that punctuated the Medieval Climate Anomaly.'",
    highlight: "Narrow rings correlated directly with multi-decade megadroughts"
  },
  {
    title: "Evolutionary Biology: Haplodiploidy in Ants",
    passage: "In haplodiploid Hymenoptera, females develop from fertilized diploid eggs while males develop from unfertilized haploid eggs. As a mathematical consequence, full sisters share 75 percent of their genes on average, making them more closely related to each other than to their own hypothetical offspring.",
    question: "According to the passage, why do full sisters share 75 percent of their genetic material in Hymenoptera?",
    options: [
      "Because males develop from unfertilized haploid eggs, passing all their genes to daughters",
      "Because queen ants mate with dozens of unrelated male drones",
      "Because workers consume royal jelly that genetically alters their chromosomes",
      "Because sister ants exchange nuclei during larval development"
    ],
    correct: "Because males develop from unfertilized haploid eggs, passing all their genes to daughters",
    explanation: "Because males are haploid, all sperm cells are identical; daughters receive 100% of the father's genes (50% of their genome) plus 50% of the mother's, totaling 75% relatedness.",
    highlight: "females develop from fertilized diploid eggs while males develop from unfertilized haploid eggs. As a mathematical consequence, full sisters share 75 percent"
  },
  {
    title: "Glaciology: Subglacial Lake Vostok",
    passage: "Lake Vostok in East Antarctica lies sealed beneath four kilometers of glacial ice. Despite subterranean pressure reaching 350 atmospheres and complete absence of solar radiation, geothermal heating maintains liquid water at approximately minus 3 degrees Celsius.",
    question: "According to the passage, what prevents Lake Vostok from freezing solid?",
    options: [
      "Geothermal heating beneath the ice sheet",
      "Artificial electrical conduits drilled by scientists",
      "High concentrations of boiling radioactive minerals",
      "Surface solar radiation penetrating through ice tunnels"
    ],
    correct: "Geothermal heating beneath the ice sheet",
    explanation: "The passage notes that 'geothermal heating maintains liquid water at approximately minus 3 degrees Celsius.'",
    highlight: "geothermal heating maintains liquid water at approximately minus 3 degrees Celsius."
  },
  {
    title: "Geology: Mantle Plumes and Hotspots",
    passage: "Unlike volcanic arcs generated along convergent tectonic plate margins, hotspot volcanism originates from narrow thermal upwellings called mantle plumes that ascend from the core-mantle boundary at a depth of nearly 2,900 kilometers.",
    question: "Where do mantle plumes originate according to the passage?",
    options: [
      "At the core-mantle boundary nearly 2,900 kilometers deep",
      "Within shallow oceanic crust trenches less than 50 kilometers deep",
      "Exclusively inside active subduction zones beneath volcanic arcs",
      "In the Earth's gaseous outer atmosphere"
    ],
    correct: "At the core-mantle boundary nearly 2,900 kilometers deep",
    explanation: "The text states that mantle plumes 'ascend from the core-mantle boundary at a depth of nearly 2,900 kilometers.'",
    highlight: "ascend from the core-mantle boundary at a depth of nearly 2,900 kilometers."
  },
  {
    title: "Linguistics: Morphological Typology",
    passage: "Agglutinative languages such as Turkish and Finnish construct complex semantic words by affixing strings of unambiguous, unmerged morphemes to an invariant root. Each attached morpheme typically conveys exactly one specific grammatical function, such as case or plurality.",
    question: "What is a characteristic of morphemes in agglutinative languages according to the passage?",
    options: [
      "Each attached morpheme typically conveys exactly one specific grammatical function",
      "Morphemes fuse irregularly so that root stems cannot be recognized",
      "Words can never contain more than two grammatical prefixes",
      "Morphemes must always be spoken in complete alphabetical order"
    ],
    correct: "Each attached morpheme typically conveys exactly one specific grammatical function",
    explanation: "The author explicitly notes that 'Each attached morpheme typically conveys exactly one specific grammatical function, such as case or plurality.'",
    highlight: "Each attached morpheme typically conveys exactly one specific grammatical function"
  },
  {
    title: "Environmental Science: Wetland Carbon Sequestration",
    passage: "Coastal salt marshes and mangrove ecosystems sequester organic carbon at rates up to ten times higher per hectare than mature terrestrial tropical forests. Waterlogged anoxic soils inhibit microbial decomposition, locking decomposed plant biomass in stable sediment layers for millennia.",
    question: "Why do coastal wetland soils sequester carbon for millennia without rapid breakdown?",
    options: [
      "Waterlogged anoxic conditions inhibit microbial decomposition",
      "High concentrations of industrial chemical disinfectants sterilize the mud",
      "Extreme heat from underground volcanic vents dries the soil into rock",
      "Marine herbivores consume all decomposing plant residues immediately"
    ],
    correct: "Waterlogged anoxic conditions inhibit microbial decomposition",
    explanation: "The passage explains that 'Waterlogged anoxic soils inhibit microbial decomposition, locking decomposed plant biomass in stable sediment layers'.",
    highlight: "Waterlogged anoxic soils inhibit microbial decomposition"
  }
];

// ---------------------------------------------------------------------------
// 3. NEGATIVE FACTUAL INFORMATION (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_NEGATIVE_FACTUAL_CONTENT: GenericReadingItem[] = [
  {
    title: "Marine Biology: Hatchetfish Counterillumination",
    passage: "Ventral counterillumination in hatchetfish relies on three synchronized physiological systems: ocular downwelling photometers that measure surface sunlight, nervous control of luciferin catalysis, and chromatic light filters that adjust the emitted wavelength to match ambient blue tones. Hatchetfish do not use acoustic echolocation or bioelectric shocks to calibrate this optical camouflage.",
    question: "According to the passage, all of the following are components of hatchetfish counterillumination EXCEPT:",
    options: [
      "Bioelectric shocks to calibrate emitted light",
      "Ocular downwelling photometers",
      "Nervous regulation of luciferin catalysis",
      "Chromatic filters matching blue wavelength tones"
    ],
    correct: "Bioelectric shocks to calibrate emitted light",
    explanation: "The passage explicitly notes that hatchetfish 'do not use acoustic echolocation or bioelectric shocks to calibrate this optical camouflage.'",
    highlight: "Hatchetfish do not use acoustic echolocation or bioelectric shocks to calibrate this optical camouflage."
  },
  {
    title: "Archaeology: Pacific Coastal Migration",
    passage: "The Pacific coastal entry hypothesis is supported by early archaeological deposits at Monte Verde in Chile, coprolite DNA from Paisley Caves in Oregon, and drowned paleoshoreline shell middens along the British Columbia archipelago. Geological core samples demonstrate that the inland ice-free corridor between the Laurentide and Cordilleran sheets remained an impassable glacial lake prior to 13,800 years BP.",
    question: "According to the passage, all of the following support the Pacific coastal entry hypothesis EXCEPT:",
    options: [
      "The rapid overland opening of an interior ice-free corridor before 15,000 BP",
      "Early human coprolite DNA from Paisley Caves in Oregon",
      "Well-dated artifact horizons at Monte Verde in Chile",
      "Drowned paleoshoreline shell middens in British Columbia"
    ],
    correct: "The rapid overland opening of an interior ice-free corridor before 15,000 BP",
    explanation: "The passage states that the inland corridor remained an impassable glacial lake prior to 13,800 BP, contradicting early opening.",
    highlight: "inland ice-free corridor between the Laurentide and Cordilleran sheets remained an impassable glacial lake prior to 13,800 years BP."
  },
  {
    title: "Botany: Crassulacean Acid Metabolism (CAM)",
    passage: "CAM plants, including agaves and pineapples, conserve moisture in arid ecosystems through temporal separation of photosynthetic phases. They open stomata at night to absorb carbon dioxide, store organic acids in vacuoles as malate, and close stomata during daytime heat. CAM plants do not rely on open stomata at midday for carbon capture, nor do they lack chloroplasts.",
    question: "According to the passage, which of the following is NOT a feature of CAM photosynthesis?",
    options: [
      "Opening stomatal pores during midday heat for carbon absorption",
      "Temporal separation of carbon capture and the Calvin cycle",
      "Opening stomata during cool nocturnal hours",
      "Storing carbon dioxide as malate in cellular vacuoles"
    ],
    correct: "Opening stomatal pores during midday heat for carbon absorption",
    explanation: "CAM plants close their stomata during the day to prevent transpiration and do not open them during midday heat.",
    highlight: "close stomata during daytime heat. CAM plants do not rely on open stomata at midday"
  },
  {
    title: "Astronomy: Terrestrial Planetary Characteristics",
    passage: "The four terrestrial planets in the inner solar system share a metallic core, a silicate rock mantle, and solid surface crusts. Unlike the outer gas giants, terrestrial planets possess relatively low masses, high average densities, and few or no natural satellites. None of the terrestrial planets possess extensive rings made of water ice crystals.",
    question: "According to the passage, which of the following is NOT a characteristic of terrestrial planets?",
    options: [
      "Extensive planetary ring systems composed of water ice",
      "High average physical density compared to gas giants",
      "Dense silicate rock mantles surrounding metallic cores",
      "Few or no natural orbiting satellites"
    ],
    correct: "Extensive planetary ring systems composed of water ice",
    explanation: "The text states: 'None of the terrestrial planets possess extensive rings made of water ice crystals.'",
    highlight: "None of the terrestrial planets possess extensive rings made of water ice crystals."
  },
  {
    title: "Anthropology: Natufian Foraging Innovations",
    passage: "The Epipaleolithic Natufian culture of the Levant established semi-sedentary villages supported by intense harvesting of wild cereals, stone sickle blades with silica sheen, heavy mortar and pestle pounding tools, and subterranean grain storage pits. Archaeological excavations confirm that the Natufians did not practice domestic animal husbandry or cultivate hybridized genetic domesticates.",
    question: "The passage mentions all of the following as aspects of Natufian culture EXCEPT:",
    options: [
      "Domestic cattle husbandry and dairy livestock breeding",
      "Subterranean grain storage pit construction",
      "Stone sickle blades exhibiting telltale silica sheen",
      "Semi-sedentary stone-foundation village settlements"
    ],
    correct: "Domestic cattle husbandry and dairy livestock breeding",
    explanation: "The text explicitly confirms that Natufians 'did not practice domestic animal husbandry'.",
    highlight: "confirm that the Natufians did not practice domestic animal husbandry"
  },
  {
    title: "Atmospheric Science: Stratospheric Ozone Depletion",
    passage: "Stratospheric ozone destruction is driven by synthetic chlorofluorocarbons (CFCs), polar stratospheric clouds (PSCs) forming at temperatures below minus 78 degrees Celsius, and catalytic chlorine free radicals released by ultraviolet photolysis. Tropospheric carbon dioxide does not participate directly in chlorine catalytic cycles, nor does nitrogen gas break ozone bonds.",
    question: "According to the passage, all of the following are involved in stratospheric ozone destruction EXCEPT:",
    options: [
      "Direct catalytic destruction of ozone bonds by atmospheric nitrogen gas",
      "Synthetic chlorofluorocarbon compounds transported to the stratosphere",
      "Polar stratospheric clouds forming at temperatures below minus 78 degrees Celsius",
      "Catalytic chlorine free radicals released via solar ultraviolet photolysis"
    ],
    correct: "Direct catalytic destruction of ozone bonds by atmospheric nitrogen gas",
    explanation: "The passage notes that 'nitrogen gas' does not break ozone bonds; chlorine free radicals drive the catalysis.",
    highlight: "nor does nitrogen gas break ozone bonds."
  },
  {
    title: "Neuroscience: Memory Consolidation",
    passage: "Hippocampal memory consolidation during slow-wave sleep involves sharp-wave ripples, synchronous reactivation of cortical ensembles, and transfer of episodic traces to neocortical storage. Sleep-deprived subjects fail to consolidate declarative memories, while motor reflexes governed by cerebellar pathways remain relatively intact without hippocampal involvement.",
    question: "According to the passage, hippocampal memory consolidation during sleep does NOT involve:",
    options: [
      "Permanent storage of declarative memories inside cerebellar motor pathways",
      "Sharp-wave ripple activity propagating from the hippocampus",
      "Synchronous reactivation of cerebral cortical neural ensembles",
      "Transfer of episodic memory representations to the neocortex"
    ],
    correct: "Permanent storage of declarative memories inside cerebellar motor pathways",
    explanation: "The passage states that motor reflexes are governed by cerebellar pathways 'without hippocampal involvement'; declarative memories transfer to the neocortex.",
    highlight: "motor reflexes governed by cerebellar pathways remain relatively intact without hippocampal involvement."
  },
  {
    title: "Zoology: Avian Flight Adaptations",
    passage: "Avian skeletal morphology incorporates numerous weight-reducing adaptations for sustained flight, including hollow pneumatic bones reinforced with internal struts, a fused furcula, a keeled sternum for pectoral muscle attachment, and the elimination of heavy jaw teeth. Modern flying birds do not possess heavy solid femurs or unfused tail vertebrae.",
    question: "According to the passage, which of the following is NOT an avian flight adaptation?",
    options: [
      "Dense, solid leg bones filled with heavy marrow",
      "Hollow pneumatic bones with internal structural struts",
      "A prominent keeled sternum for pectoral muscle anchoring",
      "A fused furcula that stores elastic aerodynamic energy"
    ],
    correct: "Dense, solid leg bones filled with heavy marrow",
    explanation: "The passage specifies 'hollow pneumatic bones' and clarifies that modern birds do not possess 'heavy solid femurs'.",
    highlight: "Modern flying birds do not possess heavy solid femurs"
  },
  {
    title: "Economics: Central Bank Monetary Policy",
    passage: "Central banks regulate liquidity and curb inflation using three orthodox quantitative tools: adjusting the benchmark discount rate, altering commercial bank reserve requirements, and executing open market operations in sovereign bond markets. Central banks do not fix retail grocery price ceilings, nor do they determine private corporate wage bonuses.",
    question: "According to the passage, which of the following is NOT a tool used by central banks?",
    options: [
      "Setting mandatory retail price ceilings on grocery store goods",
      "Adjusting benchmark discount lending interest rates",
      "Altering mandatory cash reserve requirements for commercial banks",
      "Conducting open market transactions involving sovereign government bonds"
    ],
    correct: "Setting mandatory retail price ceilings on grocery store goods",
    explanation: "The passage explicitly notes that central banks 'do not fix retail grocery price ceilings'.",
    highlight: "Central banks do not fix retail grocery price ceilings"
  },
  {
    title: "Materials Science: Graphene Properties",
    passage: "Graphene, a two-dimensional allotrope of carbon arranged in a hexagonal honeycomb lattice, exhibits extraordinary physical properties: ballistic electron mobility exceeding 200,000 cm²/Vs, tensile strength 200 times greater than structural steel, and thermal conductivity superior to diamond. Graphene is not an electrical insulator, nor is it brittle when flexed along its planar axis.",
    question: "According to the passage, all of the following describe graphene EXCEPT:",
    options: [
      "An electrical insulator that completely blocks electron flow",
      "A two-dimensional allotrope of carbon in a honeycomb lattice",
      "Ballistic electron mobility exceeding 200,000 cm²/Vs",
      "Tensile strength two hundred times greater than structural steel"
    ],
    correct: "An electrical insulator that completely blocks electron flow",
    explanation: "The passage states graphene has immense ballistic electron mobility and explicitly states that 'Graphene is not an electrical insulator'.",
    highlight: "Graphene is not an electrical insulator"
  }
];

// ---------------------------------------------------------------------------
// 4. RHETORICAL PURPOSE (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_RHETORICAL_CONTENT: GenericReadingItem[] = [
  {
    title: "Neurobiology: Infant Phonetic Sensitivity",
    passage: "Infants under six months can differentiate subtle acoustic contrasts across all world languages. The author mentions Japanese infants discriminating English /r/ and /l/ sounds prior to six months to demonstrate that phonetic perception begins with universal auditory capabilities before native-language exposure causes perceptual narrowing.",
    question: "Why does the author mention Japanese infants discriminating English /r/ and /l/ sounds?",
    options: [
      "To demonstrate that young infants possess universal phonetic sensitivity before perceptual narrowing",
      "To argue that English and Japanese share a common ancestral linguistic origin",
      "To suggest that Japanese parents should speak English to newborn infants",
      "To prove that the Japanese language has fewer phonemic consonants than other languages"
    ],
    correct: "To demonstrate that young infants possess universal phonetic sensitivity before perceptual narrowing",
    explanation: "The author uses this specific example to illustrate that infants start out capable of hearing all human phonetic contrasts before exposure narrows their neural maps.",
    highlight: "to demonstrate that phonetic perception begins with universal auditory capabilities before native-language exposure causes perceptual narrowing."
  },
  {
    title: "Archaeology: Monte Verde Artifacts",
    passage: "For decades, the Clovis-First paradigm dominated American archaeology. The author cites Tom Dillehay's excavations at Monte Verde, Chile—which yielded wooden tent stakes and medicinal plant remains dated to 14,500 BP—in order to challenge the long-held assumption that Clovis hunters were the earliest humans in the Western Hemisphere.",
    question: "The author discusses the archaeological discoveries at Monte Verde primarily to:",
    options: [
      "Challenge the assumption that the Clovis culture represented the earliest human migration",
      "Demonstrate the preservation properties of peat bogs in South America",
      "Describe the dietary nutritional habits of Pleistocene hunter-gatherers",
      "Argue that South America was populated exclusively by seafaring Polynesians"
    ],
    correct: "Challenge the assumption that the Clovis culture represented the earliest human migration",
    explanation: "The author explicitly introduces the 14,500 BP Monte Verde findings to overturn the Clovis-First paradigm.",
    highlight: "in order to challenge the long-held assumption that Clovis hunters were the earliest humans in the Western Hemisphere."
  },
  {
    title: "Marine Biology: Luciferin-Luciferase Reactions",
    passage: "Chemiluminescence in lanternfish relies on luciferin oxidation catalyzed by luciferase enzymes. The author compares this reaction to a cold glow stick to emphasize that the biochemical transformation generates light with virtually zero thermal energy waste, preventing cellular overheating in frigid abyssal waters.",
    question: "Why does the author compare the biochemical reaction to a cold glow stick?",
    options: [
      "To emphasize that the chemical reaction emits light without wasting energy as heat",
      "To show that lanternfish are synthetic creatures produced in human laboratories",
      "To argue that marine light emission is identical to plastic polymer degradation",
      "To suggest that divers should carry deep-sea fish for underwater illumination"
    ],
    correct: "To emphasize that the chemical reaction emits light without wasting energy as heat",
    explanation: "The comparison highlights the high efficiency and lack of thermal waste ('cold light') in chemiluminescence.",
    highlight: "to emphasize that the biochemical transformation generates light with virtually zero thermal energy waste"
  },
  {
    title: "Cognitive Architecture: The Kevin Lynch Model",
    passage: "Kevin Lynch identified five structural elements that compose urban mental maps: paths, edges, districts, nodes, and landmarks. The author outlines Lynch's five elements in order to provide an analytical framework for explaining why disorienting modern superstructures often cause navigational failure.",
    question: "The author outlines Kevin Lynch's five structural elements in order to:",
    options: [
      "Provide an analytical framework for understanding human wayfinding and disorientation",
      "Criticize ancient city planners for building curved stone roads without signage",
      "Encourage tourists to purchase printed paper maps when visiting historic capitals",
      "Demonstrate that human beings are genetically incapable of living in large cities"
    ],
    correct: "Provide an analytical framework for understanding human wayfinding and disorientation",
    explanation: "The author presents Lynch's categories as the theoretical basis for analyzing how people build mental representations and why certain buildings cause disorientation.",
    highlight: "in order to provide an analytical framework for explaining why disorienting modern superstructures often cause navigational failure."
  },
  {
    title: "Evolutionary Sociobiology: Sterile Castes",
    passage: "Charles Darwin famously considered the existence of sterile worker insects an insurmountable difficulty that could prove fatal to his theory of natural selection. The author highlights Darwin's initial dilemma to introduce the revolutionary significance of W.D. Hamilton's kin selection theory in resolving the evolutionary paradox of altruism.",
    question: "Why does the author mention Darwin's difficulty regarding sterile worker insects?",
    options: [
      "To introduce the importance of kin selection theory in resolving an evolutionary puzzle",
      "To show that Darwin's theory of natural selection has been completely disproven",
      "To argue that sterile insect species should be classified in a separate kingdom",
      "To prove that insect queens reproduce without passing genetic information to offspring"
    ],
    correct: "To introduce the importance of kin selection theory in resolving an evolutionary puzzle",
    explanation: "The author brings up Darwin's dilemma to set up how Hamilton's mathematical formulation of kin selection resolved the problem of altruism.",
    highlight: "to introduce the revolutionary significance of W.D. Hamilton's kin selection theory in resolving the evolutionary paradox"
  },
  {
    title: "Paleoclimatology: Younger Dryas Cold Reversal",
    passage: "Approximately 12,800 years ago, temperatures in the Northern Hemisphere abruptly plunged by over 5 degrees Celsius within a few decades. The author mentions the freshwater draining of Lake Agassiz into the North Atlantic to explain the catastrophic disruption of the Atlantic Meridional Overturning Circulation (AMOC) that triggered this cooling.",
    question: "The author mentions Lake Agassiz primarily to:",
    options: [
      "Explain the causal mechanism that disrupted ocean currents and triggered abrupt cooling",
      "Describe the physical dimensions of ancient proglacial lakes in North America",
      "Argue that global warming always creates massive freshwater lakes",
      "Illustrate how Native Americans used water routes to travel across Canada"
    ],
    correct: "Explain the causal mechanism that disrupted ocean currents and triggered abrupt cooling",
    explanation: "The catastrophic release of freshwater from Lake Agassiz is introduced to explain how the AMOC was weakened, causing the Younger Dryas cooling.",
    highlight: "to explain the catastrophic disruption of the Atlantic Meridional Overturning Circulation (AMOC) that triggered this cooling."
  },
  {
    title: "Economics: The Tragedy of the Commons",
    passage: "Garrett Hardin described a shared pasture where each herdsman maximizes personal gain by grazing additional cattle until overgrazing destroys the pasture. The author uses this pastoral analogy to explain why unowned open-access ocean fisheries suffer from severe global fish stock depletion.",
    question: "Why does the author include the analogy of the shared pasture?",
    options: [
      "To illustrate how individual self-interest leads to the exhaustion of unmanaged resources",
      "To encourage small farmers to expand their livestock herds in arid regions",
      "To suggest that cattle farming should replace ocean fishing worldwide",
      "To argue that medieval grazing techniques were superior to modern agriculture"
    ],
    correct: "To illustrate how individual self-interest leads to the exhaustion of unmanaged resources",
    explanation: "The pasture illustrates the fundamental economic principle of the tragedy of the commons, explaining why open fisheries become depleted.",
    highlight: "to explain why unowned open-access ocean fisheries suffer from severe global fish stock depletion."
  },
  {
    title: "Cell Biology: Mitochondria Endosymbiosis",
    passage: "Mitochondria contain circular DNA molecules and 70S ribosomes identical to bacterial structures. The author notes these bacterial characteristics to provide empirical evidence supporting Lynn Margulis's endosymbiotic hypothesis that eukaryotic organelles evolved from engulfed prokaryotes.",
    question: "The author notes that mitochondria have circular DNA and bacterial ribosomes in order to:",
    options: [
      "Provide empirical evidence supporting the endosymbiotic origin of organelles",
      "Warn readers that human cells are constantly infected by dangerous bacteria",
      "Argue that mitochondria should be extracted to treat viral infections",
      "Demonstrate that eukaryotic cells synthesize all genetic code without enzymes"
    ],
    correct: "Provide empirical evidence supporting the endosymbiotic origin of organelles",
    explanation: "These specific cellular features directly support the theory that mitochondria originated as free-living bacteria engulfed by ancestral cells.",
    highlight: "to provide empirical evidence supporting Lynn Margulis's endosymbiotic hypothesis"
  },
  {
    title: "Psychology: The Stroop Effect",
    passage: "When subjects are shown the word 'RED' printed in blue ink and asked to name the ink color, their response times slow significantly. The author describes the Stroop task to illustrate that automated cognitive processes like reading interfere with conscious executive control.",
    question: "Why does the author describe the Stroop task?",
    options: [
      "To demonstrate how automated cognitive processes can interfere with conscious control",
      "To prove that human beings are incapable of recognizing different colors accurately",
      "To show that people who read quickly always have poor visual eyesight",
      "To argue that children should not be taught to read until age twelve"
    ],
    correct: "To demonstrate how automated cognitive processes can interfere with conscious control",
    explanation: "The Stroop task is the classic demonstration of automated processing (reading the word) interfering with a deliberate task (naming ink color).",
    highlight: "to illustrate that automated cognitive processes like reading interfere with conscious executive control."
  },
  {
    title: "Ecology: Invasive Kudzu in the American South",
    passage: "Kudzu was aggressively planted along southern highways during the 1930s to mitigate severe soil erosion. The author discusses this intentional introduction to emphasize that well-intentioned ecological interventions can produce disastrous unintended consequences when non-native species escape natural predators.",
    question: "The author discusses the introduction of kudzu along highways in order to:",
    options: [
      "Show that well-intentioned ecological interventions can lead to severe ecological disasters",
      "Praise civil engineers for designing beautiful highway landscapes in the South",
      "Advocate for planting fast-growing foreign vines in municipal public parks",
      "Explain how highway asphalt is protected from rain runoff by root systems"
    ],
    correct: "Show that well-intentioned ecological interventions can lead to severe ecological disasters",
    explanation: "The example demonstrates how an intervention intended to stop erosion became an uncontrollable invasive weed crisis.",
    highlight: "to emphasize that well-intentioned ecological interventions can produce disastrous unintended consequences"
  }
];

// ---------------------------------------------------------------------------
// 5. INFERENCE (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_INFERENCE_CONTENT: GenericReadingItem[] = [
  {
    title: "Linguistics: Equivalence Classification",
    passage: "Because late second language learners map acoustic tokens into native phonological categories, they often perceive two distinct target sounds as identical variations of a single sound. When native English speakers attempt to distinguish between Hindi dental /t/ and retroflex /ʈ/, both acoustic signals are assimilated into the English alveolar /t/ bucket unless explicit contrastive phonetic training is provided.",
    question: "What can be inferred about English speakers who have not undergone contrastive phonetic training?",
    options: [
      "They will likely fail to notice the acoustic difference between Hindi dental and retroflex consonants",
      "They will automatically speak Hindi with a native accent",
      "Their native English vocabulary will begin to deteriorate rapidly",
      "They will lose the physiological ability to move the tip of their tongue"
    ],
    correct: "They will likely fail to notice the acoustic difference between Hindi dental and retroflex consonants",
    explanation: "Because both sounds are assimilated into a single native phoneme category, untrained speakers will hear them as identical.",
    highlight: "both acoustic signals are assimilated into the English alveolar /t/ bucket unless explicit contrastive phonetic training is provided."
  },
  {
    title: "Archaeology: Beringian Standstill Hypothesis",
    passage: "Mitochondrial DNA sequencing of Native American founding lineages suggests that ancestral populations remained genetically isolated in the Beringian land bridge refuge for several thousand years before expanding southward into the Americas. During this standstill, unique genetic mutations accumulated that are absent in modern Siberian populations.",
    question: "What does the passage imply about the ancestors of Native Americans while in Beringia?",
    options: [
      "They had ceased interbreeding with Siberian populations for an extended historical duration",
      "They forgot how to manufacture fluted stone hunting spears and bone needles",
      "They traveled back and forth continuously between Lake Baikal and Greenland",
      "They completely abandoned meat consumption in favor of coastal kelp farming"
    ],
    correct: "They had ceased interbreeding with Siberian populations for an extended historical duration",
    explanation: "Genetic isolation and unique mutations demonstrate that they were cut off from interbreeding with Siberian populations for millennia.",
    highlight: "ancestral populations remained genetically isolated in the Beringian land bridge refuge for several thousand years"
  },
  {
    title: "Marine Biology: Bioluminescent Camouflage Limits",
    passage: "Hatchetfish ventral photophores emit diffuse blue light matching downwelling sunlight in the mesopelagic zone (200 to 1,000 meters). Below 1,000 meters, sunlight is completely extinguished, creating an aphotic zone where downward silhouettes cannot form.",
    question: "What can be inferred about ventral counterillumination photophores in fish living exclusively below 1,000 meters?",
    options: [
      "They would provide no camouflage benefit against predators looking upward",
      "They would shine with blinding intensity to attract surface phytoplankton",
      "They would cause the fish to freeze solid due to excessive energy loss",
      "They would generate thick smoke rings to confuse deep-sea squids"
    ],
    correct: "They would provide no camouflage benefit against predators looking upward",
    explanation: "Because downward silhouettes rely on ambient downwelling light from the surface, in a totally pitch-black zone with zero sunlight, counterillumination has no silhouette to conceal.",
    highlight: "Below 1,000 meters, sunlight is completely extinguished, creating an aphotic zone where downward silhouettes cannot form."
  },
  {
    title: "Neuroscience: GPS Spatial Offloading",
    passage: "Taxi drivers who navigate London's complex street grid without GPS display significantly larger posterior hippocampal gray matter volumes than the general public. In contrast, longitudinal studies of frequent turn-by-turn GPS users reveal decreased hippocampal activation and reduced performance on spatial memory tests.",
    question: "What does the passage suggest would likely occur if London taxi drivers relied entirely on automated GPS navigation from the start of their careers?",
    options: [
      "Their posterior hippocampal gray matter volume would not increase significantly beyond average levels",
      "They would lose the ability to speak their primary native language",
      "Their motor driving reflexes and foot braking speeds would immediately double",
      "They would become completely blind to exterior street signage and traffic lights"
    ],
    correct: "Their posterior hippocampal gray matter volume would not increase significantly beyond average levels",
    explanation: "Because the enlargement stems from active mental navigation and spatial mapping, offloading this work to GPS prevents that structural neural development.",
    highlight: "longitudinal studies of frequent turn-by-turn GPS users reveal decreased hippocampal activation and reduced performance on spatial memory tests."
  },
  {
    title: "Paleoclimatology: Speleothem Oxygen Isotopes",
    passage: "In stalagmites from tropical caves, the ratio of oxygen-18 to oxygen-16 in calcite layers reflects historical precipitation amounts. Because heavier oxygen-18 precipitates out preferentially during intense cloud rainfall, speleothem calcite deposited during monsoon seasons exhibits depleted oxygen-18 values.",
    question: "What can be inferred about a stalagmite layer that contains an unusually high ratio of oxygen-18?",
    options: [
      "It was deposited during an extended period of drought or weak monsoon activity",
      "It formed under an ocean wave during a massive catastrophic tsunami",
      "It was created by subterranean bats digging nesting tunnels in limestone",
      "It indicates that the cave was exposed to blistering solar heat at midday"
    ],
    correct: "It was deposited during an extended period of drought or weak monsoon activity",
    explanation: "Since heavy rain depletes oxygen-18, an enriched, high ratio indicates low rainfall (drought or weak monsoon).",
    highlight: "speleothem calcite deposited during monsoon seasons exhibits depleted oxygen-18 values."
  },
  {
    title: "Evolutionary Biology: The Handicap Principle",
    passage: "Amotz Zahavi's handicap principle posits that costly morphological ornaments, such as the elaborate train of the male peacock, serve as honest indicators of genetic fitness because only individuals possessing superior vigor and parasite resistance can afford to waste energy producing them.",
    question: "What would the handicap principle predict about a peacock that is malnourished or infected with chronic parasites?",
    options: [
      "It will be unable to produce an elaborate, vibrant plumage display",
      "It will immediately evolve camouflage feathers identical to a female peahen",
      "It will mate with twice as many females to compensate for its poor health",
      "It will shed its tail feathers and fly faster than healthy male birds"
    ],
    correct: "It will be unable to produce an elaborate, vibrant plumage display",
    explanation: "Because the display is a costly signal that requires surplus energy, an unhealthy or malnourished bird cannot afford to maintain it.",
    highlight: "only individuals possessing superior vigor and parasite resistance can afford to waste energy producing them."
  },
  {
    title: "Astrophysics: Exoplanet Transit Depth",
    passage: "During a planetary transit across the face of a host star, the apparent brightness of the star dims by a fraction equal to the square of the ratio of the planet's radius to the star's radius. By measuring this tiny photometric dip, astronomers can calculate the planet's physical diameter.",
    question: "What can be inferred if two exoplanets orbiting the same star produce transit dips of 1% and 4% respectively?",
    options: [
      "The second exoplanet has twice the physical radius of the first exoplanet",
      "The second exoplanet orbits at four times the distance of the first planet",
      "The first exoplanet is made entirely of gaseous helium while the second is solid iron",
      "The star is burning four times cooler when the second planet passes in front"
    ],
    correct: "The second exoplanet has twice the physical radius of the first exoplanet",
    explanation: "Because dimming equals (r_planet / r_star)^2, a 4% dip corresponds to a radius ratio of 0.2, compared to 0.1 for a 1% dip—exactly twice the radius.",
    highlight: "dims by a fraction equal to the square of the ratio of the planet's radius to the star's radius."
  },
  {
    title: "Ecology: Trophic Cascades in Marine Parks",
    passage: "In marine protected reserves where apex predatory reef sharks are strictly protected from commercial fishing, herbivorous parrotfish populations remain stable, and macroalgae cover on coral reefs decreases by over 60 percent compared to unprotected reefs.",
    question: "What can be inferred about the health of coral reefs on unprotected reefs where sharks are heavily fished?",
    options: [
      "They are more likely to be smothered by excessive macroalgae blooms",
      "They have denser populations of large predatory tiger sharks",
      "They receive significantly more sunlight due to clean water currents",
      "Their calcium carbonate skeletons grow twice as fast as in protected parks"
    ],
    correct: "They are more likely to be smothered by excessive macroalgae blooms",
    explanation: "Because protected reserves with sharks experience 60% less macroalgae, unprotected reefs where sharks are removed suffer unchecked mesopredators and subsequent algae overgrowth.",
    highlight: "macroalgae cover on coral reefs decreases by over 60 percent compared to unprotected reefs."
  },
  {
    title: "History: The Printing Press and Literacy",
    passage: "Prior to Gutenberg's moveable type press in 1450, a hand-scribed Latin Bible took a monastic scriptorium approximately one year to produce and cost the equivalent of a clerk's multi-year salary. Within thirty years, commercial presses in Venice were printing thousands of vernacular texts every month at a fraction of the cost.",
    question: "What does the passage imply about the accessibility of printed books before 1450?",
    options: [
      "They were luxury status items accessible almost exclusively to wealthy institutions and the elite",
      "They were distributed free of charge to peasants throughout rural Germany",
      "They were written exclusively in simple German vernacular dialects",
      "They were banned by the Catholic Church and burned upon production"
    ],
    correct: "They were luxury status items accessible almost exclusively to wealthy institutions and the elite",
    explanation: "Taking an entire year to hand-copy and costing a multi-year salary means books were restricted to the elite and wealthy institutions.",
    highlight: "cost the equivalent of a clerk's multi-year salary."
  },
  {
    title: "Psychology: Working Memory Capacity",
    passage: "Individuals with high working memory capacity are significantly better at sustaining attentional focus on a target task while suppressing salient environmental auditory distractors in dichotic listening experiments.",
    question: "What does the passage suggest about individuals with low working memory capacity?",
    options: [
      "They will be more easily distracted by irrelevant background noises when trying to concentrate",
      "They will automatically develop superhuman peripheral vision to compensate",
      "They will be completely incapable of understanding spoken language in any setting",
      "They will score significantly higher on complex spatial mathematics tests"
    ],
    correct: "They will be more easily distracted by irrelevant background noises when trying to concentrate",
    explanation: "Since high capacity allows people to suppress distractors, low working memory capacity correlates with vulnerability to environmental auditory distraction.",
    highlight: "better at sustaining attentional focus on a target task while suppressing salient environmental auditory distractors"
  }
];

// ---------------------------------------------------------------------------
// 6. REFERENCE (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_REFERENCE_CONTENT: GenericReadingItem[] = [
  {
    title: "Neuroscience: Synaptic Pruning",
    passage: "As young children interact with their physical environment, sensory pathways are strengthened through repeated stimulation. In contrast, dormant synapses that receive negligible activation undergo systematic enzymatic degradation; these are eventually reabsorbed by adjacent glial cells.",
    question: "The word \"these\" in the passage refers to:",
    options: ["dormant synapses", "sensory pathways", "young children", "glial cells"],
    correct: "dormant synapses",
    explanation: "'These' refers back to the dormant synapses that receive negligible activation and undergo degradation.",
    highlight: "dormant synapses that receive negligible activation undergo systematic enzymatic degradation; these are eventually reabsorbed"
  },
  {
    title: "Archaeology: Megafauna Extinction",
    passage: "Paleontologists debating late Pleistocene extinctions analyze massive fossil kill sites where Clovis projectile points were found lodged in mammoth rib cages. Archaeologists argue that such deposits demonstrate systematic big-game hunting; however, skeptics counter that they merely represent opportunistic scavenging.",
    question: "The word \"they\" in the passage refers to:",
    options: ["such deposits", "mammoth rib cages", "Clovis projectile points", "archaeologists"],
    correct: "such deposits",
    explanation: "'They' refers to 'such deposits' (the fossil kill sites), which skeptics argue might represent opportunistic scavenging rather than systematic hunting.",
    highlight: "argue that such deposits demonstrate systematic big-game hunting; however, skeptics counter that they merely represent"
  },
  {
    title: "Marine Biology: Bioluminescent Luciferin",
    passage: "Deep-sea lanternfish synthesize complex organic luciferin molecules within specialized dermal photocytes. When oxygen binds to this substrate in the presence of luciferase, it releases excess chemical energy in the form of a brilliant blue photon.",
    question: "The word \"it\" in the passage refers to:",
    options: ["this substrate", "oxygen", "dermal photocytes", "luciferase"],
    correct: "this substrate",
    explanation: "'It' refers to 'this substrate' (the luciferin molecule), which releases energy upon oxidation.",
    highlight: "When oxygen binds to this substrate in the presence of luciferase, it releases excess chemical energy"
  },
  {
    title: "Cognitive Science: The Hippocampus",
    passage: "During spatial navigation, place cells fire at specific geographic coordinates within an enclosed environment. Neurologists hypothesize that these specialized neurons construct an internal cognitive map, allowing mammals to navigate even when external sensory cues are obscured.",
    question: "The phrase \"these specialized neurons\" in the passage refers to:",
    options: ["place cells", "geographic coordinates", "neurologists", "external sensory cues"],
    correct: "place cells",
    explanation: "'These specialized neurons' refers directly to the 'place cells' described in the preceding sentence.",
    highlight: "place cells fire at specific geographic coordinates within an enclosed environment. Neurologists hypothesize that these specialized neurons"
  },
  {
    title: "Paleoclimatology: Dendrochronological Rings",
    passage: "Ancient bristlecone pines growing on arid dolomitic slopes produce microscopic annual growth rings. Paleoclimatologists measure their cellular widths under cross-polarized light to reconstruct seasonal rainfall patterns over eight millennia.",
    question: "The word \"their\" in the passage refers to:",
    options: ["microscopic annual growth rings", "ancient bristlecone pines", "arid dolomitic slopes", "paleoclimatologists"],
    correct: "microscopic annual growth rings",
    explanation: "'Their' refers to the microscopic annual growth rings whose widths are measured.",
    highlight: "produce microscopic annual growth rings. Paleoclimatologists measure their cellular widths"
  },
  {
    title: "Genetics: Ribosomes and Translation",
    passage: "Messenger RNA molecules carry genetic transcript instructions from the nucleus to cytoplasm-bound ribosomes. As the cellular machinery reads codon triplets along the nucleotide strand, it synthesizes polypeptide chains that fold into functional enzymes.",
    question: "The phrase \"the cellular machinery\" in the passage refers to:",
    options: ["cytoplasm-bound ribosomes", "the nucleus", "polypeptide chains", "functional enzymes"],
    correct: "cytoplasm-bound ribosomes",
    explanation: "'The cellular machinery' refers to the ribosomes that translate the messenger RNA codon triplets.",
    highlight: "cytoplasm-bound ribosomes. As the cellular machinery reads codon triplets"
  },
  {
    title: "Zoology: Eusocial Queens",
    passage: "In leafcutter ant colonies, the founding queen carries a fungal pellet inside a specialized infrabuccal pocket to establish a fungus farm. Worker ants meticulously groom the queen and weed the cultivated mycelium; their survival depends entirely on this mutualistic fungal symbiont.",
    question: "The word \"their\" in the passage refers to:",
    options: ["worker ants", "founding queens", "fungal pellets", "infrabuccal pockets"],
    correct: "worker ants",
    explanation: "'Their' refers back to the subject of the sentence, the worker ants, whose survival depends on the fungus.",
    highlight: "Worker ants meticulously groom the queen and weed the cultivated mycelium; their survival depends entirely"
  },
  {
    title: "Economics: Central Bank Reserves",
    passage: "Commercial banks maintain liquid capital balances at the central bank to meet statutory reserve requirements. If an institution experiences an unexpected surge in cash withdrawals, it can borrow overnight funds from peers in the interbank lending market.",
    question: "The phrase \"an institution\" in the passage refers to:",
    options: ["a commercial bank", "the central bank", "a liquid capital balance", "the interbank lending market"],
    correct: "a commercial bank",
    explanation: "'An institution' refers back to an individual commercial bank that maintains reserves and may experience customer withdrawals.",
    highlight: "Commercial banks maintain liquid capital balances... If an institution experiences an unexpected surge"
  },
  {
    title: "Geology: Oceanic Lithosphere",
    passage: "As oceanic tectonic plates move away from mid-ocean spreading centers, they gradually cool, accumulate dense sediment layers, and increase in thickness. Eventually, their elevated density causes them to sink into the warmer asthenosphere along subduction zones.",
    question: "The word \"them\" in the passage refers to:",
    options: ["oceanic tectonic plates", "mid-ocean spreading centers", "dense sediment layers", "subduction zones"],
    correct: "oceanic tectonic plates",
    explanation: "'Them' refers to the oceanic tectonic plates that cool, become denser, and sink into the mantle.",
    highlight: "causes them to sink into the warmer asthenosphere along subduction zones."
  },
  {
    title: "Atmospheric Science: Stratospheric Aerosols",
    passage: "Major explosive volcanic eruptions inject millions of tons of sulfur dioxide gas into the upper stratosphere, where chemical oxidation converts the gas into microscopic sulfuric acid aerosol droplets. These reflect incoming solar radiation back into space, lowering global surface temperatures.",
    question: "The word \"These\" in the passage refers to:",
    options: ["microscopic sulfuric acid aerosol droplets", "explosive volcanic eruptions", "tons of sulfur dioxide gas", "global surface temperatures"],
    correct: "microscopic sulfuric acid aerosol droplets",
    explanation: "'These' refers to the aerosol droplets that reflect sunlight away from Earth.",
    highlight: "converts the gas into microscopic sulfuric acid aerosol droplets. These reflect incoming solar radiation"
  }
];

// ---------------------------------------------------------------------------
// 7. SENTENCE SIMPLIFICATION (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_SIMPLIFICATION_CONTENT: GenericReadingItem[] = [
  {
    title: "Neuroscience: Critical Period Hypothesis",
    passage: "Although early behavioral researchers assumed that the post-pubescent brain loses all capacity to encode novel phonemes, recent neuroimaging confirms that adult neural networks maintain latent plasticity capable of restructuring perceptual categories when stimulated by high-variability training.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Contrary to earlier assumptions, adult brains retain plasticity and can learn new speech sounds with varied training.",
      "Early behavioral researchers correctly demonstrated that adult brains cannot learn foreign languages after puberty.",
      "High-variability training is ineffective for adults because neural networks completely lose their plasticity after puberty.",
      "Modern neuroimaging has proven that children and adults learn new phonetic categories through identical mechanisms."
    ],
    correct: "Contrary to earlier assumptions, adult brains retain plasticity and can learn new speech sounds with varied training.",
    explanation: "This option captures both parts: the overturn of old beliefs ('Contrary to earlier assumptions') and the core finding (adult brains retain plasticity and can learn novel phonemes with varied training).",
    highlight: "Although early behavioral researchers assumed that the post-pubescent brain loses all capacity to encode novel phonemes, recent neuroimaging confirms that adult neural networks maintain latent plasticity capable of restructuring perceptual categories when stimulated by high-variability training."
  },
  {
    title: "Archaeology: Radiocarbon Calibration",
    passage: "Because atmospheric concentrations of carbon-14 have fluctuated substantially over millennia due to shifts in the geomagnetic field and solar activity, raw radiocarbon dates must be calibrated against independent tree-ring dendrochronology to obtain accurate calendar ages.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Raw radiocarbon dates must be adjusted using tree-ring records because atmospheric carbon-14 levels have varied over time.",
      "Tree-ring records are unreliable because solar activity alters the Earth's geomagnetic field.",
      "Shifts in solar activity have caused all ancient wooden artifacts to lose their original carbon-14 isotopes.",
      "Archaeologists prefer raw radiocarbon dates because dendrochronology cannot determine historical calendar ages."
    ],
    correct: "Raw radiocarbon dates must be adjusted using tree-ring records because atmospheric carbon-14 levels have varied over time.",
    explanation: "It captures the cause (fluctuating atmospheric C-14) and the necessary action (calibrating raw dates against tree rings).",
    highlight: "Because atmospheric concentrations of carbon-14 have fluctuated substantially over millennia due to shifts in the geomagnetic field and solar activity, raw radiocarbon dates must be calibrated against independent tree-ring dendrochronology to obtain accurate calendar ages."
  },
  {
    title: "Marine Biology: Counterillumination Camouflage",
    passage: "By matching both the intensity and spectral wavelength of downwelling sunlight filtered through the water column, hatchetfish eliminate the conspicuous dark silhouettes that would otherwise expose them to predatory fish patrolling beneath them.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Hatchetfish avoid predators below by emitting light that matches downwelling sunlight and hides their silhouettes.",
      "Predatory fish use downwelling sunlight to detect the bright blue photophores of hatchetfish.",
      "Dark silhouettes are essential for hatchetfish to communicate with other fish in deep ocean waters.",
      "Hatchetfish turn off their light organs when predators approach from below to prevent exposure."
    ],
    correct: "Hatchetfish avoid predators below by emitting light that matches downwelling sunlight and hides their silhouettes.",
    explanation: "This succinctly summarizes the mechanism (matching sunlight) and purpose (erasing silhouettes to evade predators below).",
    highlight: "By matching both the intensity and spectral wavelength of downwelling sunlight filtered through the water column, hatchetfish eliminate the conspicuous dark silhouettes that would otherwise expose them to predatory fish patrolling beneath them."
  },
  {
    title: "Architecture: Wayfinding Disorientation",
    passage: "When interior architectural layouts incorporate repetitive symmetrical geometries and lack distinct visual anchors, visitors fail to construct accurate cognitive maps, leading to widespread navigational disorientation in multi-level structures.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Symmetrical building interiors without clear visual markers confuse visitors by hindering mental map formation.",
      "Multi-level buildings are designed with repetitive symmetry to help visitors construct mental maps quickly.",
      "Visual anchors cause navigational disorientation because they distract visitors from noticing signs.",
      "Architects intentionally eliminate landmarks to encourage visitors to explore interior building spaces."
    ],
    correct: "Symmetrical building interiors without clear visual markers confuse visitors by hindering mental map formation.",
    explanation: "It correctly links the cause (repetitive symmetry, no anchors) to the cognitive effect (failure to form cognitive maps, causing disorientation).",
    highlight: "When interior architectural layouts incorporate repetitive symmetrical geometries and lack distinct visual anchors, visitors fail to construct accurate cognitive maps, leading to widespread navigational disorientation in multi-level structures."
  },
  {
    title: "Evolutionary Biology: Hamilton's Rule",
    passage: "Hamilton's mathematical formulation demonstrates that an altruistic gene will proliferate within a population provided the reproductive cost incurred by the altruist is outweighed by the fitness benefit conferred on relatives discounted by their coefficient of relatedness.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Altruistic traits spread when the genetic benefit to related individuals exceeds the personal cost to the altruist.",
      "Selfish behaviors always replace altruistic genes because helping relatives carries high reproductive costs.",
      "Hamilton proved that animal altruism only occurs when individuals share one hundred percent of their genes.",
      "Related individuals avoid helping one another to ensure their personal offspring survive."
    ],
    correct: "Altruistic traits spread when the genetic benefit to related individuals exceeds the personal cost to the altruist.",
    explanation: "This captures Hamilton's Rule (rb > c): altruism spreads when benefit multiplied by relatedness exceeds personal cost.",
    highlight: "Hamilton's mathematical formulation demonstrates that an altruistic gene will proliferate within a population provided the reproductive cost incurred by the altruist is outweighed by the fitness benefit conferred on relatives discounted by their coefficient of relatedness."
  },
  {
    title: "Climatology: Permafrost Carbon Feedback",
    passage: "The accelerated thawing of Arctic permafrost exposes ancient organic matter to microbial decomposition, releasing enormous volumes of methane and carbon dioxide that amplify greenhouse warming and trigger further permafrost degradation.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Thawing Arctic permafrost releases greenhouse gases through microbial breakdown, creating a self-reinforcing warming cycle.",
      "Arctic microbes absorb atmospheric carbon dioxide, thereby slowing down permafrost melting.",
      "Greenhouse warming is primarily caused by volcanic eruptions in polar permafrost regions.",
      "Permafrost thawing stabilizes global temperatures by locking organic matter beneath frozen soils."
    ],
    correct: "Thawing Arctic permafrost releases greenhouse gases through microbial breakdown, creating a self-reinforcing warming cycle.",
    explanation: "This precisely reflects the positive feedback loop: melting -> decomposition -> greenhouse gas emission -> more warming -> more melting.",
    highlight: "The accelerated thawing of Arctic permafrost exposes ancient organic matter to microbial decomposition, releasing enormous volumes of methane and carbon dioxide that amplify greenhouse warming and trigger further permafrost degradation."
  },
  {
    title: "Economics: Creative Destruction",
    passage: "Joseph Schumpeter argued that the relentless market entry of innovative technologies systematically dismantles obsolete industrial enterprises, driving long-term economic growth despite causing localized, temporary employment displacement.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Technological innovation promotes long-term economic growth by replacing outdated industries, though it temporarily disrupts jobs.",
      "Traditional enterprises must be protected by governments to prevent innovative technologies from harming the economy.",
      "Economic growth can only occur when obsolete industrial companies are completely immune to market competition.",
      "Schumpeter believed that unemployment caused by new technologies permanently damages national economic output."
    ],
    correct: "Technological innovation promotes long-term economic growth by replacing outdated industries, though it temporarily disrupts jobs.",
    explanation: "This summarizes Schumpeter's concept of creative destruction: new tech replaces old businesses, causing short-term disruption but long-term growth.",
    highlight: "Joseph Schumpeter argued that the relentless market entry of innovative technologies systematically dismantles obsolete industrial enterprises, driving long-term economic growth despite causing localized, temporary employment displacement."
  },
  {
    title: "Astronomy: Stellar Nucleosynthesis",
    passage: "While primordial nucleosynthesis in the early universe generated solely hydrogen and helium along with trace lithium, all heavier elemental nuclei up to iron were synthesized via stellar fusion inside massive stars before being scattered by supernova explosions.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "The early universe produced only light elements, whereas elements up to iron were forged inside massive stars and spread by supernovae.",
      "Supernova explosions were the sole source of hydrogen and helium during the initial seconds of the Big Bang.",
      "Massive stars can only synthesize trace lithium because heavier elements like iron decay rapidly in space.",
      "Primordial nucleosynthesis created all chemical elements found in the periodic table up to iron."
    ],
    correct: "The early universe produced only light elements, whereas elements up to iron were forged inside massive stars and spread by supernovae.",
    explanation: "It contrasts early universe nucleosynthesis (light elements H/He/Li) with stellar fusion and supernovae (elements up to iron).",
    highlight: "While primordial nucleosynthesis in the early universe generated solely hydrogen and helium along with trace lithium, all heavier elemental nuclei up to iron were synthesized via stellar fusion inside massive stars before being scattered by supernova explosions."
  },
  {
    title: "Cognitive Psychology: Dual-Process Theory",
    passage: "Dual-process models of human cognition distinguish between System 1, which executes rapid, intuitive, and subconscious heuristics, and System 2, which governs deliberate, effortful, and analytically demanding computational reasoning.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "Cognition operates via two systems: one that is fast, intuitive, and unconscious, and another that is slow, deliberate, and analytical.",
      "System 1 and System 2 are identical brain structures that process analytical mathematics at high speeds.",
      "Subconscious heuristics are far superior to effortful reasoning in solving all complex scientific problems.",
      "Human cognition relies exclusively on conscious System 2 reasoning because intuitive heuristics have been eliminated by evolution."
    ],
    correct: "Cognition operates via two systems: one that is fast, intuitive, and unconscious, and another that is slow, deliberate, and analytical.",
    explanation: "This directly captures the core dichotomy of Kahneman's dual-process model.",
    highlight: "Dual-process models of human cognition distinguish between System 1, which executes rapid, intuitive, and subconscious heuristics, and System 2, which governs deliberate, effortful, and analytically demanding computational reasoning."
  },
  {
    title: "Ecology: Island Biogeography Equilibrium",
    passage: "MacArthur and Wilson's equilibrium model posits that the species richness of an isolated oceanic island stabilizes at a dynamic equilibrium where the rate of new species immigration equals the rate of resident species extinction.",
    question: "Which of the sentences below best expresses the essential information in the highlighted sentence? Incorrect choices change the meaning in important ways or leave out essential information.",
    options: [
      "An island's species diversity reaches a stable balance when species immigration matches the rate of extinction.",
      "Islands always experience continuous species decline because extinction rates perpetually exceed immigration.",
      "Dynamic equilibrium occurs only when an island is physically connected to a continental mainland.",
      "MacArthur and Wilson showed that isolated oceanic islands never support resident plant species."
    ],
    correct: "An island's species diversity reaches a stable balance when species immigration matches the rate of extinction.",
    explanation: "This encapsulates the central thesis of the Theory of Island Biogeography (immigration rate = extinction rate).",
    highlight: "MacArthur and Wilson's equilibrium model posits that the species richness of an isolated oceanic island stabilizes at a dynamic equilibrium where the rate of new species immigration equals the rate of resident species extinction."
  }
];

// ---------------------------------------------------------------------------
// 8. PARAGRAPH RELATIONSHIPS (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_RELATIONSHIPS_CONTENT: GenericReadingItem[] = [
  {
    title: "Linguistics: Phonetics & Adult Training",
    passage: "Paragraph 1: During early infancy, the human auditory cortex exhibits universal phonetic sensitivity, allowing babies under six months to discriminate speech contrasts across all human languages before neural pruning locks in native categories.\n\nParagraph 2: Nevertheless, research in adult neuroplasticity demonstrates that this perceptual narrowing is not immutable; high-variability phonetic training can induce measurable cortical reorganization and restore non-native speech contrast perception in adults.",
    question: "What is the relationship between Paragraph 1 and Paragraph 2?",
    options: [
      "Paragraph 2 qualifies the limitations described in Paragraph 1 by presenting evidence of adult plasticity.",
      "Paragraph 2 disproves the claim in Paragraph 1 that infants possess universal phonetic sensitivity.",
      "Paragraph 2 provides a chronological history of language teaching methods before the discovery of infant neurology.",
      "Paragraph 2 argues that adults learn languages faster than six-month-old infants."
    ],
    correct: "Paragraph 2 qualifies the limitations described in Paragraph 1 by presenting evidence of adult plasticity.",
    explanation: "Paragraph 1 establishes how perceptual narrowing occurs in infancy; Paragraph 2 introduces a qualification showing that adults can still rewire their perception through training.",
    highlight: "Paragraph 2 qualifies the limitations described in Paragraph 1 by presenting evidence of adult plasticity."
  },
  {
    title: "Archaeology: Megafauna Extinction Debate",
    passage: "Paragraph 1: The 'Overkill Hypothesis' asserts that highly specialized Clovis hunters entered North America with fluted spears and rapidly eradicated over thirty genera of large Pleistocene mammals within a few centuries.\n\nParagraph 2: In contrast, critics emphasize that many megafauna species, including giant ground sloths and horses, began declining millennia before Clovis arrivals, coinciding instead with dramatic climatic fluctuations and vegetational restructuring during the Allerød-Younger Dryas transition.",
    question: "How does Paragraph 2 relate to Paragraph 1?",
    options: [
      "Paragraph 2 presents an alternative, climate-based explanation that challenges the human overkill hypothesis in Paragraph 1.",
      "Paragraph 2 provides archaeological proof confirming that Clovis hunters killed every single megafauna species.",
      "Paragraph 2 explains how Clovis hunters manufactured stone projectile points to adapt to colder climates.",
      "Paragraph 2 describes how giant ground sloths domesticated wild horses in the American Midwest."
    ],
    correct: "Paragraph 2 presents an alternative, climate-based explanation that challenges the human overkill hypothesis in Paragraph 1.",
    explanation: "Paragraph 1 outlines the human overkill theory, while Paragraph 2 introduces the competing climate-change hypothesis.",
    highlight: "Paragraph 2 presents an alternative, climate-based explanation that challenges the human overkill hypothesis in Paragraph 1."
  },
  {
    title: "Marine Biology: Bioluminescence Mechanisms",
    passage: "Paragraph 1: Most mesopelagic organisms generate bioluminescence internally through luciferin-luciferase enzymatic oxidation inside specialized tissue cells called photocytes.\n\nParagraph 2: Conversely, several teleost fish families, including anglerfishes and ponyfishes, do not synthesize their own chemiluminescent compounds; they harbor symbiotic colonies of luminous bacteria in specialized gland chambers.",
    question: "Which statement best describes the connection between Paragraph 1 and Paragraph 2?",
    options: [
      "Paragraph 2 contrasts symbiotic bacterial luminescence with the endogenous chemical mechanism described in Paragraph 1.",
      "Paragraph 2 argues that bacterial luminescence is ineffective compared to photocyte light.",
      "Paragraph 2 explains how anglerfish consume photocytes to gain the ability to emit blue light.",
      "Paragraph 2 demonstrates that bioluminescence evolved only once in deep-sea evolutionary history."
    ],
    correct: "Paragraph 2 contrasts symbiotic bacterial luminescence with the endogenous chemical mechanism described in Paragraph 1.",
    explanation: "Paragraph 1 covers endogenous (self-produced) light, while Paragraph 2 introduces the contrasting symbiotic bacterial approach.",
    highlight: "Paragraph 2 contrasts symbiotic bacterial luminescence with the endogenous chemical mechanism described in Paragraph 1."
  },
  {
    title: "Urban Design: Wayfinding Theory",
    passage: "Paragraph 1: Modern mega-hospitals and international airports frequently induce severe spatial anxiety because their repetitive, windowless corridors obscure the exterior geometric cues needed for orientation.\n\nParagraph 2: To counteract this systemic disorientation, environmental designers incorporate visible exterior courtyards, distinct color-coded thematic wings, and double-height atriums that establish immediate visual sightlines across multiple floor levels.",
    question: "What role does Paragraph 2 play in relation to Paragraph 1?",
    options: [
      "Paragraph 2 proposes design solutions to resolve the architectural disorientation problems outlined in Paragraph 1.",
      "Paragraph 2 criticizes environmental designers for making hospital layouts even more confusing.",
      "Paragraph 2 provides statistics on the financial construction costs of windowless airport terminals.",
      "Paragraph 2 argues that patients in hospitals should not be allowed to navigate corridors without nurses."
    ],
    correct: "Paragraph 2 proposes design solutions to resolve the architectural disorientation problems outlined in Paragraph 1.",
    explanation: "Paragraph 1 outlines the problem (disorientation in large facilities), and Paragraph 2 provides architectural solutions (atriums, sightlines, color-coding).",
    highlight: "Paragraph 2 proposes design solutions to resolve the architectural disorientation problems outlined in Paragraph 1."
  },
  {
    title: "Evolutionary Biology: Altruism Explanations",
    passage: "Paragraph 1: Kin selection successfully accounts for cooperative altruism among genetically related individuals by showing that helping relatives increases an individual's inclusive fitness.\n\nParagraph 2: However, kin selection cannot explain cooperation among entirely unrelated organisms; for such interactions, evolutionary biologists rely on reciprocal altruism, where individuals incur temporary costs with the expectation of future repayment.",
    question: "How does Paragraph 2 relate to Paragraph 1?",
    options: [
      "Paragraph 2 introduces a complementary theory to explain cooperation that falls outside the explanatory scope of Paragraph 1.",
      "Paragraph 2 demonstrates that kin selection theory is mathematically flawed and should be rejected.",
      "Paragraph 2 proves that unrelated animals never engage in cooperative food sharing.",
      "Paragraph 2 describes how unrelated animals become genetically related over multiple generations."
    ],
    correct: "Paragraph 2 introduces a complementary theory to explain cooperation that falls outside the explanatory scope of Paragraph 1.",
    explanation: "Paragraph 1 explains cooperation among kin; Paragraph 2 brings in reciprocal altruism to cover unrelated individuals that kin selection cannot explain.",
    highlight: "Paragraph 2 introduces a complementary theory to explain cooperation that falls outside the explanatory scope of Paragraph 1."
  },
  {
    title: "Climatology: Ice Age Cycles",
    passage: "Paragraph 1: Milankovitch cycles explain the periodic pacing of Quaternary glaciations based on subtle, predictable variations in Earth's orbital eccentricity, axial tilt, and precession over tens of thousands of years.\n\nParagraph 2: Yet, orbital forcing alone produces insolation changes too weak to explain the massive temperature swings of the glacial-interglacial transitions; atmospheric greenhouse gas feedbacks, particularly carbon dioxide and methane, must act as powerful amplifiers.",
    question: "What is the relationship between the two paragraphs?",
    options: [
      "Paragraph 2 identifies an explanatory shortfall in the theory in Paragraph 1 and introduces an essential amplifying mechanism.",
      "Paragraph 2 proves that Milankovitch's astronomical calculations regarding Earth's orbit were completely wrong.",
      "Paragraph 2 argues that volcanic greenhouse gas emissions eliminated all Pleistocene ice sheets.",
      "Paragraph 2 shows that Earth's orbital tilt has remained unchanged for millions of years."
    ],
    correct: "Paragraph 2 identifies an explanatory shortfall in the theory in Paragraph 1 and introduces an essential amplifying mechanism.",
    explanation: "Paragraph 1 presents orbital cycles, while Paragraph 2 points out that orbital changes alone are too weak and require greenhouse feedbacks to explain the observed climate swings.",
    highlight: "Paragraph 2 identifies an explanatory shortfall in the theory in Paragraph 1 and introduces an essential amplifying mechanism."
  },
  {
    title: "Economics: Market Efficiency & Behavioral Economics",
    passage: "Paragraph 1: The Efficient Market Hypothesis posits that asset prices always reflect all available information because rational market participants instantly arbitrage away any pricing discrepancies.\n\nParagraph 2: In contrast, behavioral economists cite widespread market bubbles and panics as evidence that psychological cognitive biases, such as loss aversion and herd behavior, routinely drive asset prices far from fundamental values.",
    question: "Which of the following describes the relationship between Paragraph 1 and Paragraph 2?",
    options: [
      "Paragraph 2 presents an empirical critique based on psychology that challenges the theoretical model in Paragraph 1.",
      "Paragraph 2 provides mathematical proof supporting the Efficient Market Hypothesis.",
      "Paragraph 2 demonstrates that loss aversion eliminates all financial market bubbles.",
      "Paragraph 2 argues that stock market prices can never be predicted by human beings."
    ],
    correct: "Paragraph 2 presents an empirical critique based on psychology that challenges the theoretical model in Paragraph 1.",
    explanation: "Paragraph 1 states the rational model, and Paragraph 2 presents behavioral economics as an empirical counterweight.",
    highlight: "Paragraph 2 presents an empirical critique based on psychology that challenges the theoretical model in Paragraph 1."
  },
  {
    title: "Botany: Plant Defense Mechanisms",
    passage: "Paragraph 1: Constitutive plant defenses, such as waxy cuticles, thick cell walls, and lignified thorns, are continuously present to deter generalist herbivores.\n\nParagraph 2: Inducible defenses, on the other hand, are produced only after an initial tissue wound is detected; upon herbivore mastication, systemic jasmonic acid signals travel throughout the plant to trigger the synthesis of toxic proteinase inhibitors.",
    question: "How do Paragraph 1 and Paragraph 2 relate to each other?",
    options: [
      "Paragraph 2 contrasts responsive, wound-triggered defenses with the permanent physical defenses described in Paragraph 1.",
      "Paragraph 2 argues that physical thorns are more effective than chemical inhibitors against all insects.",
      "Paragraph 2 explains why plants stop producing jasmonic acid when attacked by herbivores.",
      "Paragraph 2 proves that waxy cuticles are synthesized exclusively after insect bites."
    ],
    correct: "Paragraph 2 contrasts responsive, wound-triggered defenses with the permanent physical defenses described in Paragraph 1.",
    explanation: "Paragraph 1 covers permanent (constitutive) defenses, while Paragraph 2 introduces reactive (inducible) chemical defenses.",
    highlight: "Paragraph 2 contrasts responsive, wound-triggered defenses with the permanent physical defenses described in Paragraph 1."
  },
  {
    title: "Psychology: Memory Encoding & Retrieval",
    passage: "Paragraph 1: Encoding specificity theory states that memory retrieval is most successful when the cognitive and contextual conditions during retrieval match the conditions present during initial memory encoding.\n\nParagraph 2: Godden and Baddeley confirmed this principle in their famous experiment with scuba divers: words learned underwater were recalled significantly better underwater than on dry land, while words learned on dry land showed superior recall on the beach.",
    question: "What is the relationship of Paragraph 2 to Paragraph 1?",
    options: [
      "Paragraph 2 provides empirical experimental evidence that validates the theoretical principle introduced in Paragraph 1.",
      "Paragraph 2 refutes the encoding specificity theory by showing that divers forgot words underwater.",
      "Paragraph 2 argues that scuba diving permanently damages long-term semantic memory storage.",
      "Paragraph 2 describes how deep-sea pressure affects brain oxygenation during classroom exams."
    ],
    correct: "Paragraph 2 provides empirical experimental evidence that validates the theoretical principle introduced in Paragraph 1.",
    explanation: "Paragraph 1 outlines the theory, and Paragraph 2 presents the classic underwater diving experiment as direct empirical validation.",
    highlight: "Paragraph 2 provides empirical experimental evidence that validates the theoretical principle introduced in Paragraph 1."
  },
  {
    title: "Paleontology: Dinosaur Feathers",
    passage: "Paragraph 1: Early twentieth-century paleontologists depicted non-avian theropod dinosaurs as slow, scaly, cold-blooded reptilian quadrupeds identical to overgrown lizards.\n\nParagraph 2: The discovery of exceptionally preserved fossil theropods in Liaoning, China, bearing filamentous proto-feathers and complex vaned plumage overturned this dogma, firmly establishing that many dinosaurs were active, endothermic ancestors of modern birds.",
    question: "How does Paragraph 2 relate to Paragraph 1?",
    options: [
      "Paragraph 2 describes modern fossil discoveries that overturned the historical paradigm outlined in Paragraph 1.",
      "Paragraph 2 supports the view in Paragraph 1 that dinosaurs were slow and cold-blooded reptiles.",
      "Paragraph 2 proves that birds evolved from ancient crocodiles rather than theropod dinosaurs.",
      "Paragraph 2 argues that feathers evolved primarily to allow giant sauropods to fly across oceans."
    ],
    correct: "Paragraph 2 describes modern fossil discoveries that overturned the historical paradigm outlined in Paragraph 1.",
    explanation: "Paragraph 1 explains the old lizard-like view of dinosaurs; Paragraph 2 discusses the feathered dinosaur fossils that revolutionized our understanding.",
    highlight: "Paragraph 2 describes modern fossil discoveries that overturned the historical paradigm outlined in Paragraph 1."
  }
];

// ---------------------------------------------------------------------------
// 9. IMPORTANT IDEA (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_IMPORTANT_IDEA_CONTENT: GenericReadingItem[] = [
  {
    title: "Neuroscience: Critical Period Plasticity",
    passage: "While early infancy represents a unique window of effortless phonetic acquisition due to broad synaptic malleability, adult neural architecture is not permanently fixed. Rather, targeted high-variability training protocols can stimulate latent neuroplasticity, allowing adult learners to construct new phonetic representations through focused auditory exposure.",
    question: "Which of the following best states the most important idea in the passage?",
    options: [
      "Adults can still develop new speech sound categories because the brain retains latent plasticity that responds to structured training.",
      "Infants and adults have identical neural plasticity and learn languages at the same rate.",
      "The adult brain loses all neuroplasticity after puberty, making second language acquisition impossible.",
      "High-variability training was invented in the early twentieth century to teach infants foreign alphabets."
    ],
    correct: "Adults can still develop new speech sound categories because the brain retains latent plasticity that responds to structured training.",
    explanation: "The core thesis is that adult brains retain latent neuroplasticity and can learn new phonemes with targeted high-variability training.",
    highlight: "Rather, targeted high-variability training protocols can stimulate latent neuroplasticity, allowing adult learners to construct new phonetic representations"
  },
  {
    title: "Archaeology: Peopling of the Americas",
    passage: "The discovery of pre-Clovis settlements along the Pacific coastline has dismantled the long-standing belief that the ice-free interior corridor was the sole route for early human migration into the Americas. Interdisciplinary findings from archaeology, paleoecology, and genomics now indicate that early maritime hunter-gatherers entered the continent via coastal kelp highways well before the continental ice sheets retreated.",
    question: "Which of the following expresses the central idea of the passage?",
    options: [
      "Multiple lines of scientific evidence indicate early humans populated the Americas via Pacific coastal routes before the interior corridor opened.",
      "The Clovis culture represents the earliest and only human migration wave into North America.",
      "Glacial ice sheets prevented humans from entering South America until approximately 2,000 years ago.",
      "Genomic sequencing has proven that all Native Americans migrated across frozen ice shelves without boats."
    ],
    correct: "Multiple lines of scientific evidence indicate early humans populated the Americas via Pacific coastal routes before the interior corridor opened.",
    explanation: "The passage summarizes the modern paradigm: early humans used the coastal kelp highway prior to the interior corridor's opening.",
    highlight: "findings from archaeology, paleoecology, and genomics now indicate that early maritime hunter-gatherers entered the continent via coastal kelp highways"
  },
  {
    title: "Marine Biology: Photophore Adaptation",
    passage: "Mesopelagic bioluminescent organisms have evolved sophisticated optical mechanisms, including ventral photophores with parabolic guanine reflectors and spectral chromatic filters, to match downwelling sunlight. This counterillumination effectively conceals their silhouettes from predators hunting in the ocean depths below.",
    question: "What is the primary idea discussed in the passage?",
    options: [
      "Deep-sea creatures use specialized light-emitting organs to eliminate their silhouettes and avoid detection by predators below.",
      "Bioluminescence is used exclusively by deep-sea organisms to attract mates in pitch-black waters.",
      "Sunlight penetrates to the bottom of the deepest ocean trenches, blinding marine predators.",
      "Guanine crystals are harvested by human divers to create artificial underwater mirrors."
    ],
    correct: "Deep-sea creatures use specialized light-emitting organs to eliminate their silhouettes and avoid detection by predators below.",
    explanation: "The passage focuses on how photophores and counterillumination camouflage creatures by eliminating their silhouettes.",
    highlight: "This counterillumination effectively conceals their silhouettes from predators hunting in the ocean depths below."
  },
  {
    title: "Cognitive Architecture: Wayfinding Design",
    passage: "Human spatial orientation depends upon mental cognitive maps synthesized from environmental landmarks, paths, and clear sightlines. When large public complexes feature repetitive, disorienting layouts without visual anchors, people experience navigational failure, emphasizing the vital need for architectural legibility in building design.",
    question: "Which statement best summarizes the important idea of the passage?",
    options: [
      "To prevent navigational confusion, large buildings must be designed with clear landmarks and visible sightlines that support cognitive mapping.",
      "People navigating complex buildings should rely exclusively on smartphone GPS applications rather than architectural signs.",
      "Architectural symmetry is the most effective way to help visitors memorize complex building layouts.",
      "Human beings naturally navigate by measuring magnetic fields rather than using visual landmarks."
    ],
    correct: "To prevent navigational confusion, large buildings must be designed with clear landmarks and visible sightlines that support cognitive mapping.",
    explanation: "The author stresses the necessity of architectural legibility (landmarks, sightlines) to support human cognitive mapping.",
    highlight: "emphasizing the vital need for architectural legibility in building design."
  },
  {
    title: "Evolutionary Biology: Eusocial Kin Selection",
    passage: "The evolution of sterile worker castes in social insects was once considered a fatal flaw in evolutionary theory. However, Hamilton's kin selection theory resolved this paradox by demonstrating that haplodiploid genetic systems cause sisters to be more closely related to one another than to their own offspring, making non-reproductive altruism genetically adaptive.",
    question: "What is the main idea conveyed in the passage?",
    options: [
      "Kin selection theory explains the evolution of sterile worker insects by showing that helping closely related sisters promotes shared genes.",
      "Charles Darwin successfully explained all social insect behaviors without using genetics or mathematics.",
      "Sterile worker ants are evolutionary anomalies that will eventually be eliminated by natural selection.",
      "Female worker insects are genetically identical clones of the colony's founding queen."
    ],
    correct: "Kin selection theory explains the evolution of sterile worker insects by showing that helping closely related sisters promotes shared genes.",
    explanation: "The passage explains how kin selection made the apparent paradox of sterile insect castes evolutionary sensible through haplodiploid relatedness.",
    highlight: "kin selection theory resolved this paradox by demonstrating that haplodiploid genetic systems cause sisters to be more closely related to one another"
  },
  {
    title: "Paleoclimatology: Tree-Ring Reconstructions",
    passage: "Dendrochronological analysis of ancient bristlecone pines provides an indispensable high-resolution proxy record of past climatic fluctuations. By cross-dating annual ring patterns across living trees and dead remnant wood, scientists have reconstructed over 8,000 years of paleoprecipitation, uncovering ancient multi-decade megadroughts.",
    question: "What is the most important idea of the passage?",
    options: [
      "Tree-ring analysis of bristlecone pines provides an accurate 8,000-year historical climate record that reveals severe past droughts.",
      "Bristlecone pines are the only tree species capable of surviving in high-altitude mountain environments.",
      "Ancient megadroughts were caused by human agriculture in the Great Basin thousands of years ago.",
      "Tree rings can only measure annual temperature changes and provide no data on precipitation levels."
    ],
    correct: "Tree-ring analysis of bristlecone pines provides an accurate 8,000-year historical climate record that reveals severe past droughts.",
    explanation: "The primary point is that cross-dating bristlecone pine rings provides an indispensable 8,000-year record of precipitation and megadroughts.",
    highlight: "Dendrochronological analysis of ancient bristlecone pines provides an indispensable high-resolution proxy record of past climatic fluctuations."
  },
  {
    title: "Environmental Science: Blue Carbon Ecosystems",
    passage: "Coastal wetlands—including tidal marshes, mangrove forests, and seagrass meadows—act as critical 'blue carbon' sinks by sequestering atmospheric carbon at rates far exceeding terrestrial forests. Protecting and restoring these coastal ecosystems is essential for mitigating global climate change and safeguarding marine biodiversity.",
    question: "Which of the following expresses the most important idea in the passage?",
    options: [
      "Coastal wetlands are exceptionally effective carbon sinks whose preservation is vital for climate change mitigation.",
      "Tropical rainforests sequester carbon much faster and in larger quantities than coastal marine environments.",
      "Mangrove forests should be replaced with commercial fish farms to improve local coastal economies.",
      "Salt marshes absorb carbon only when ocean water temperatures fall below freezing."
    ],
    correct: "Coastal wetlands are exceptionally effective carbon sinks whose preservation is vital for climate change mitigation.",
    explanation: "The passage highlights coastal wetlands' rapid carbon sequestration and the imperative to protect them for climate mitigation.",
    highlight: "act as critical 'blue carbon' sinks by sequestering atmospheric carbon at rates far exceeding terrestrial forests. Protecting and restoring these coastal ecosystems is essential"
  },
  {
    title: "Economics: Information Asymmetry & Lemons",
    passage: "George Akerlof's seminal market analysis demonstrated that when buyers cannot evaluate product quality prior to purchase, sellers of low-quality goods drive out reputable sellers of high-quality products. This phenomenon, known as adverse selection, can lead to severe market failure unless signaling or warranty mechanisms restore buyer confidence.",
    question: "What is the central concept discussed in the passage?",
    options: [
      "Information asymmetry between buyers and sellers can cause market failure unless mechanisms like warranties verify quality.",
      "Buyers always possess superior market information compared to sellers in commercial transactions.",
      "Low-quality goods are naturally preferred by consumers because they are inexpensive to manufacture.",
      "Government price regulations are the only known method to eliminate information asymmetry in markets."
    ],
    correct: "Information asymmetry between buyers and sellers can cause market failure unless mechanisms like warranties verify quality.",
    explanation: "The passage articulates Akerlof's thesis: asymmetric information produces adverse selection and market breakdown without quality verification.",
    highlight: "adverse selection, can lead to severe market failure unless signaling or warranty mechanisms restore buyer confidence."
  },
  {
    title: "Astrophysics: Exoplanet Atmospheric Spectroscopy",
    passage: "When an exoplanet passes in front of its parent star, starlight filters through the planet's atmosphere, producing subtle absorption lines that reveal its chemical composition. Transmission spectroscopy allows astronomers to detect water vapor, methane, and potential atmospheric biosignatures across planetary systems light-years away.",
    question: "What is the most important idea of the passage?",
    options: [
      "Astronomers can determine the chemical makeup of distant exoplanet atmospheres by analyzing starlight filtered during transits.",
      "Exoplanets can only be discovered when they collide with their parent stars.",
      "Water vapor has been proven to exist on every exoplanet discovered in our galaxy.",
      "Transmission spectroscopy requires astronauts to travel directly to distant solar systems."
    ],
    correct: "Astronomers can determine the chemical makeup of distant exoplanet atmospheres by analyzing starlight filtered during transits.",
    explanation: "The passage explains the significance of transmission spectroscopy in revealing the atmospheric composition of transiting exoplanets.",
    highlight: "Transmission spectroscopy allows astronomers to detect water vapor, methane, and potential atmospheric biosignatures"
  },
  {
    title: "Geology: Plate Tectonic Driving Forces",
    passage: "Although early geologists attributed continental drift to thermal convection currents pushing plates from mid-ocean ridges, geodynamic modeling now confirms that 'slab pull'—the gravitational sinking of cold, dense oceanic lithosphere into subduction zones—is the primary mechanical engine driving global tectonic motion.",
    question: "Which of the following expresses the primary idea in the passage?",
    options: [
      "The gravitational sinking of dense oceanic slabs at subduction zones is the main force driving tectonic plate motion.",
      "Thermal convection currents at mid-ocean ridges have been disproven as having any physical role in geology.",
      "Continents float freely across the liquid molten core without interacting with oceanic crust.",
      "Tectonic plates have ceased moving because the Earth's mantle has cooled into a solid rock crystal."
    ],
    correct: "The gravitational sinking of dense oceanic slabs at subduction zones is the main force driving tectonic plate motion.",
    explanation: "The text emphasizes that 'slab pull' is the primary mechanical engine behind plate tectonic movement.",
    highlight: "'slab pull'—the gravitational sinking of cold, dense oceanic lithosphere into subduction zones—is the primary mechanical engine driving global tectonic motion."
  }
];

// ---------------------------------------------------------------------------
// 10. INSERT TEXT (10 Items)
// ---------------------------------------------------------------------------
export const CYCLE2_INSERT_TEXT_CONTENT: GenericReadingItem[] = [
  {
    title: "Neuroscience: Equivalence Classification",
    passage: "During late second language acquisition, adults frequently conflate distinct foreign speech sounds into a single native phonetic category. [■ A] For instance, native Japanese speakers often fail to differentiate the English consonants /r/ and /l/. [■ B] Because the perceptual system prioritizes processing efficiency, subtle acoustic differences are filtered out before conscious evaluation takes place. [■ C] Consequently, late learners produce non-native accents not due to vocal cord limitations, but because their neuro-perceptual maps do not register the target sounds. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"This cognitive shortcut, known as equivalence classification, treats novel sounds as mere variations of familiar phonemes.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ A]",
    explanation: "The sentence defines 'This cognitive shortcut', which directly connects back to the first sentence describing conflating distinct foreign sounds into a single native category.",
    highlight: "During late second language acquisition, adults frequently conflate distinct foreign speech sounds into a single native phonetic category. [■ A]"
  },
  {
    title: "Archaeology: Pacific Kelp Highway",
    passage: "The Pacific coastal entry hypothesis proposes that early humans entered the Americas by navigating along the coastline. [■ A] Proponents argue that rich marine ecosystems provided abundant nutritional resources, including sea mammals, fish, and shellfish. [■ B] Kelp forests along the Pacific rim buffered ocean swells and offered a continuous, ecologically uniform corridor from northeast Asia to South America. [■ C] Early watercraft would have allowed rapid southward migration without requiring travel through glaciated interior mountain passes. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"Moreover, this coastal environment avoided the harsh freezing temperatures and impassable terrain of the interior ice sheets.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ D]",
    explanation: "The sentence elaborates on the advantage of avoiding the interior ice sheets, which perfectly pairs with the final sentence about watercraft and interior glaciated passes.",
    highlight: "Early watercraft would have allowed rapid southward migration without requiring travel through glaciated interior mountain passes. [■ D]"
  },
  {
    title: "Marine Biology: Guanine Crystal Reflectors",
    passage: "Deep-sea hatchetfish rely on photophores located along their ventral surfaces to conceal their silhouettes. [■ A] Inside each light organ, a specialized parabolic reflector directs bioluminescent photons downward into the water column. [■ B] This reflector is constructed from microscopic platelets of guanine and purine crystals arranged in alternating high-refractive-index layers. [■ C] These crystalline layers reflect nearly 99 percent of the emitted light with minimal optical absorption. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"As a result of this exceptional reflectivity, virtually all the generated chemiluminescent energy is focused into the camouflage beam.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ D]",
    explanation: "'As a result of this exceptional reflectivity' refers directly to the 99 percent reflection mentioned in the sentence before [■ D].",
    highlight: "These crystalline layers reflect nearly 99 percent of the emitted light with minimal optical absorption. [■ D]"
  },
  {
    title: "Urban Design: Wayfinding Legibility",
    passage: "Navigating complex modern airports and transportation hubs can be an overwhelming experience for travelers. [■ A] Disorientation frequently occurs when multi-level concourses lack clear sightlines to the exterior world. [■ B] Without visual contact with the sun or prominent geographic landmarks, passengers cannot calibrate their internal direction sense. [■ C] Architects can mitigate this disorientation by designing towering glass atriums that provide uninterrupted vistas of runways and surrounding skylines. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"Consequently, travelers must rely entirely on signage, which is often ambiguous or overlooked in moments of stress.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ C]",
    explanation: "The sentence logically follows the inability to calibrate direction due to lack of landmarks ('Consequently, travelers must rely entirely on signage').",
    highlight: "Without visual contact with the sun or prominent geographic landmarks, passengers cannot calibrate their internal direction sense. [■ C]"
  },
  {
    title: "Evolutionary Biology: Haplodiploidy in Ants",
    passage: "Hymenopteran insects display an unusual genetic sex-determination mechanism known as haplodiploidy. [■ A] Unfertilized eggs develop into haploid males, whereas fertilized eggs produce diploid females. [■ B] Because males contribute their entire single set of chromosomes to every daughter, full sisters share an unusually high proportion of their genome. [■ C] Specifically, sisters are related by a coefficient of 0.75, compared to only 0.50 with their own prospective offspring. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"This means that fathers pass down 100 percent of their genes to female offspring rather than the typical 50 percent.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ C]",
    explanation: "'This means that fathers pass down 100 percent...' explains and clarifies 'Because males contribute their entire single set of chromosomes' right before [■ C].",
    highlight: "Because males contribute their entire single set of chromosomes to every daughter, full sisters share an unusually high proportion of their genome. [■ C]"
  },
  {
    title: "Paleoclimatology: Tree-Ring Cross-Dating",
    passage: "Dendrochronology relies on matching synchronous variations in annual growth rings across multiple trees. [■ A] In dry climates, the width of each ring is directly governed by available seasonal moisture. [■ B] Because all trees in a region experience the same environmental conditions, their growth ring patterns fluctuate in unison. [■ C] By overlapping the inner rings of living specimens with the outer rings of preserved ancient logs, scientists assemble continuous chronologies spanning thousands of years. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"This shared response produces a distinctive barcode-like signature unique to that specific historical era.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ C]",
    explanation: "'This shared response' refers directly to trees fluctuating in unison in the sentence preceding [■ C].",
    highlight: "Because all trees in a region experience the same environmental conditions, their growth ring patterns fluctuate in unison. [■ C]"
  },
  {
    title: "Geology: Subduction Slab Pull",
    passage: "Plate tectonics describes the dynamic movement of Earth's lithospheric plates. [■ A] For decades, scientists believed that mantle convection currents dragged tectonic plates along from below like a conveyor belt. [■ B] However, quantitative geodynamic calculations revealed that the friction between the mantle and lithosphere is insufficient to drive rapid continental motion. [■ C] Instead, the primary force is slab pull, generated when cold oceanic lithosphere sinks under its own weight into the asthenosphere. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"This discovery forced geophysicists to reconsider the fundamental driving mechanism of plate motion.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ C]",
    explanation: "'This discovery' refers directly to the finding that friction between mantle and lithosphere is insufficient to drive plate motion.",
    highlight: "friction between the mantle and lithosphere is insufficient to drive rapid continental motion. [■ C]"
  },
  {
    title: "Psychology: Cognitive Dissonance Reduction",
    passage: "When people act in ways that conflict with their personal beliefs, they experience an uncomfortable mental tension called cognitive dissonance. [■ A] To eliminate this distress, individuals are compelled to restore cognitive consistency. [■ B] While one could theoretically change their behavior, past actions cannot be undone. [■ C] Consequently, individuals usually alter their internal attitudes and beliefs to justify what they have already done. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"This psychological discomfort motivates individuals to seek immediate relief through mental adjustments.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ A]",
    explanation: "'This psychological discomfort' refers back to 'uncomfortable mental tension' defined in the first sentence.",
    highlight: "they experience an uncomfortable mental tension called cognitive dissonance. [■ A]"
  },
  {
    title: "Astronomy: Exoplanet Transit Photometry",
    passage: "The transit method is one of the most successful techniques for discovering planets orbiting distant stars. [■ A] When a planet crosses directly between its star and Earth, it blocks a minuscule portion of the star's emitted light. [■ B] Space telescopes equipped with sensitive photometers record this periodic dip in apparent stellar brightness. [■ C] By analyzing the duration and depth of these light curves, astronomers can calculate both the planet's orbital period and its physical radius. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"Although the brightness reduction is typically less than one percent, modern detectors can measure it with extreme precision.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ B]",
    explanation: "The sentence elaborates on the 'minuscule portion of the star's emitted light' described right before [■ B].",
    highlight: "it blocks a minuscule portion of the star's emitted light. [■ B]"
  },
  {
    title: "Botany: Mycorrhizal Networks",
    passage: "Beneath forest floors, underground fungal hyphae interconnect the root systems of diverse tree species into extensive networks. [■ A] These mycorrhizal connections facilitate the mutualistic exchange of water and essential soil minerals for photosynthetic sugars. [■ B] Recent ecological experiments reveal that mature canopy trees can transfer surplus carbon to shaded seedlings via these fungal conduits. [■ C] Furthermore, when trees are attacked by insect pests, they can transmit warning biochemical signals through the network to prime the chemical defenses of neighboring trees. [■ D]",
    question: "Look at the four squares [■] that indicate where the following sentence could be added to the passage.\n\n\"This belowground pipeline effectively acts as a communal resource-sharing infrastructure for the entire woodland community.\"\n\nWhere would the sentence best fit?",
    options: ["[■ A]", "[■ B]", "[■ C]", "[■ D]"],
    correct: "[■ C]",
    explanation: "'This belowground pipeline' refers to the fungal conduits transferring carbon to seedlings described in the sentence before [■ C].",
    highlight: "mature canopy trees can transfer surplus carbon to shaded seedlings via these fungal conduits. [■ C]"
  }
];

// ---------------------------------------------------------------------------
// 11. COMPLETE THE SUMMARY (6 Full Academic Summary Exercises)
// ---------------------------------------------------------------------------
export interface CompleteSummaryItem {
  title: string;
  passage: string;
  introSentence: string;
  options: {
    id: number;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export const CYCLE2_COMPLETE_SUMMARY_CONTENT: CompleteSummaryItem[] = [
  {
    title: "Neural Plasticity & Second Language Phoneme Acquisition",
    passage: "During early infancy, the human auditory cortex exhibits broad neural plasticity, allowing infants to discriminate among all phonetic contrasts present in human speech. However, as the infant is exposed to ambient native speech, neural commitment occurs; synaptic connections tuned to native phonemic boundaries are reinforced, while pathways responsive to non-native contrasts undergo competitive pruning. In adulthood, late learners frequently assimilate novel second-language speech sounds into pre-existing native categories via equivalence classification. Nevertheless, research shows adult neural narrowing is not immutable. High-variability phonetic training can induce cortical reorganization and significantly enhance pre-attentive speech perception.",
    introSentence: "Early linguistic exposure narrows infant phonetic perception, but adult brains retain plasticity capable of learning foreign speech contrasts through structured acoustic training.",
    options: [
      {
        id: 1,
        text: "Infants initially possess universal phonetic sensitivity, which narrows during the first year of life as synaptic connections tune specifically to native phonemes.",
        isCorrect: true,
        explanation: "This captures the foundational premise of early auditory neural plasticity and perceptual narrowing."
      },
      {
        id: 2,
        text: "Late language learners struggle with foreign speech sounds because they assimilate novel acoustic contrasts into pre-existing native phonological categories.",
        isCorrect: true,
        explanation: "This accurately reflects the Speech Learning Model's equivalence classification mechanism."
      },
      {
        id: 3,
        text: "Targeted training exposing adults to high-variability speech sounds can stimulate cortical reorganization and improve non-native phonemic discrimination.",
        isCorrect: true,
        explanation: "This represents the crucial finding regarding adult neural plasticity and high-variability phonetic training."
      },
      {
        id: 4,
        text: "Adult learners produce foreign accents primarily because their vocal cords lack the physical muscle strength to articulate non-native vowels.",
        isCorrect: false,
        explanation: "This is a direct factual contradiction; the passage notes accents stem from perceptual mapping failure, not vocal musculature limits."
      },
      {
        id: 5,
        text: "Infants under six months of age are unable to recognize their mother's voice until they begin babbling consonant sounds.",
        isCorrect: false,
        explanation: "This detail is not discussed in the passage and is inaccurate."
      },
      {
        id: 6,
        text: "Adults who learn a second language always lose the ability to speak their native mother tongue fluently.",
        isCorrect: false,
        explanation: "This is an extreme statement not supported by the passage."
      }
    ]
  },
  {
    title: "Radiocarbon Dating & the Peopling of the Americas",
    passage: "For decades, American archaeology operated under the Clovis-First paradigm, which asserted that big-game hunters migrated across the Bering land bridge and through an interior ice-free corridor around 13,000 years ago. However, refined AMS radiocarbon dating and bone collagen ultrafiltration have constrained Clovis technology to a brief window of roughly 300 years. Concurrently, pre-Clovis discoveries at Monte Verde in Chile, Paisley Caves in Oregon, and drowned paleoshorelines in British Columbia have established human occupation centuries before the inland corridor opened. Scientists now conclude that early maritime populations navigated along a Pacific coastal kelp highway, exploiting rich littoral ecosystems.",
    introSentence: "Recent archaeological discoveries and improved radiocarbon calibration have overturned the Clovis-First paradigm in favor of an earlier Pacific coastal migration.",
    options: [
      {
        id: 1,
        text: "Refined radiocarbon dating techniques demonstrated that the Clovis archaeological complex lasted for only about three centuries.",
        isCorrect: true,
        explanation: "This is a key chronological finding that restricted the duration of the Clovis complex."
      },
      {
        id: 2,
        text: "Well-dated archaeological evidence from sites like Monte Verde and Paisley Caves confirms that humans inhabited the Americas prior to Clovis culture.",
        isCorrect: true,
        explanation: "This represents the primary empirical evidence dismantling the Clovis-First hypothesis."
      },
      {
        id: 3,
        text: "The Pacific coastal kelp highway hypothesis proposes that early maritime hunter-gatherers followed resource-rich littoral corridors into the continent.",
        isCorrect: true,
        explanation: "This summarizes the modern prevailing model of early maritime migration."
      },
      {
        id: 4,
        text: "The inland ice-free corridor between the Laurentide and Cordilleran ice sheets was permanently open and lush with vegetation throughout the last glacial maximum.",
        isCorrect: false,
        explanation: "Contradiction; the text indicates the corridor was closed or an impassable glacial lake prior to 13,800 BP."
      },
      {
        id: 5,
        text: "Clovis fluted projectile points were manufactured using modern metallic titanium alloys.",
        isCorrect: false,
        explanation: "Factually absurd distractor; Clovis tools were made of chert, obsidian, and flint."
      },
      {
        id: 6,
        text: "Human coprolites from Paisley Caves in Oregon were proved to belong to extinct Pleistocene giant ground sloths.",
        isCorrect: false,
        explanation: "Contradiction; Paisley Caves coprolites yielded human mitochondrial DNA."
      }
    ]
  },
  {
    title: "Deep Sea Bioluminescence & Camouflage",
    passage: "In the oceanic mesopelagic zone, downwelling sunlight creates faint illumination that exposes marine animals to predators hunting from below. To avoid casting dark silhouettes against the bright sea surface, organisms such as hatchetfish have evolved ventral counterillumination. Using photophores containing internal parabolic guanine reflectors and spectral filters, they emit downward-directed blue bioluminescence that precisely matches the intensity, color, and angular distribution of ambient sunlight. While this optical camouflage is highly effective against standard eyes, specialized predators have evolved yellow ocular lens filters and far-red light organs to detect and circumvent this concealment.",
    introSentence: "Mesopelagic animals utilize ventral bioluminescent counterillumination to conceal their silhouettes from upward-looking predators, sparking an evolutionary arms race.",
    options: [
      {
        id: 1,
        text: "Ventral photophores emit downward-directed light that precisely matches the color and intensity of sunlight, eliminating the animal's silhouette.",
        isCorrect: true,
        explanation: "This encapsulates the core function of counterillumination camouflage."
      },
      {
        id: 2,
        text: "Optical structures such as parabolic guanine reflectors and chromatic filters focus and tune the emitted light to match ambient blue wavelengths.",
        isCorrect: true,
        explanation: "This captures the anatomical and physical mechanisms responsible for optical matching."
      },
      {
        id: 3,
        text: "Certain predatory species have evolved counter-adaptations, such as yellow ocular filters and far-red illumination, to expose camouflage.",
        isCorrect: true,
        explanation: "This reflects the co-evolutionary arms race between prey camouflage and predatory sensory detection."
      },
      {
        id: 4,
        text: "Mesopelagic organisms emit bright ultraviolet light to blind predatory sharks and whales in deep water.",
        isCorrect: false,
        explanation: "Incorrect; mesopelagic animals emit blue light to match ambient downwelling sunlight."
      },
      {
        id: 5,
        text: "Hatchetfish live exclusively in freshwater rivers and lakes where sunlight never penetrates.",
        isCorrect: false,
        explanation: "Contradiction; hatchetfish are marine deep-sea mesopelagic organisms."
      },
      {
        id: 6,
        text: "Counterillumination is ineffective because sunlight does not penetrate into the ocean past five meters depth.",
        isCorrect: false,
        explanation: "Inaccurate; sunlight penetrates the mesopelagic zone down to 1,000 meters."
      }
    ]
  },
  {
    title: "Urban Architecture & Spatial Memory Wayfinding",
    passage: "Human wayfinding relies upon internal cognitive maps generated by hippocampal place cells and entorhinal grid cells, which integrate directional cues and environmental boundaries. In urban environments, architectural legibility—defined by distinct landmarks, clear sightlines, and differentiated paths—is essential for people to establish and maintain their mental orientation. Modern large-scale complexes often induce navigational failure through repetitive symmetrical corridors, windowless interiors, and multi-level vertical transitions that obscure external reference points. Furthermore, the widespread adoption of digital GPS navigation fosters spatial offloading, which reduces active cognitive mapping and can lead to hippocampal structural alterations.",
    introSentence: "Human spatial orientation depends upon mental cognitive maps whose formation is facilitated by architectural legibility but compromised by disorienting layouts and digital navigation.",
    options: [
      {
        id: 1,
        text: "The human brain constructs allocentric spatial representations using specialized hippocampal place cells and entorhinal grid cells.",
        isCorrect: true,
        explanation: "This summarizes the neurological foundation of cognitive mapping discussed in the text."
      },
      {
        id: 2,
        text: "Complex interior architecture with repetitive symmetry and lack of exterior sightlines impairs cognitive mapping and causes disorientation.",
        isCorrect: true,
        explanation: "This expresses the primary architectural factor leading to wayfinding failure."
      },
      {
        id: 3,
        text: "Heavy reliance on digital turn-by-turn navigation leads to spatial offloading, diminishing spatial memory and hippocampal activation.",
        isCorrect: true,
        explanation: "This captures the modern technological impact on human spatial cognition."
      },
      {
        id: 4,
        text: "London taxi drivers possess significantly smaller hippocampi than the general public because they memorize street names.",
        isCorrect: false,
        explanation: "Direct contradiction; taxi drivers possess significantly larger posterior hippocampi."
      },
      {
        id: 5,
        text: "Kevin Lynch proved that ancient Roman cities were built entirely without paths or landmarks.",
        isCorrect: false,
        explanation: "Historical distortion not mentioned in the passage."
      },
      {
        id: 6,
        text: "Hippocampal place cells fire only when individuals are riding in airplanes at high altitudes.",
        isCorrect: false,
        explanation: "Absurd distractor; place cells fire at specific locations within physical environments."
      }
    ]
  },
  {
    title: "Evolutionary Sociobiology: Haplodiploidy & Kin Selection",
    passage: "The existence of sterile worker castes in eusocial insects posed a profound challenge to Darwin's theory of natural selection. This evolutionary conundrum was resolved by W.D. Hamilton through his formulation of kin selection and inclusive fitness. In haplodiploid species such as ants, bees, and wasps, unfertilized eggs develop into haploid males while fertilized eggs produce diploid females. Because fathers pass their entire genome to daughters, full sisters share 75 percent of their genes, which exceeds their 50 percent relatedness to potential offspring. Consequently, workers can propagate more of their own genetic material by rearing reproductive sisters than by reproducing directly.",
    introSentence: "Hamilton's theory of kin selection explains the evolution of sterile worker castes in eusocial insects through the genetic dynamics of haplodiploidy.",
    options: [
      {
        id: 1,
        text: "Darwin recognized that sterile worker insects seemed to contradict natural selection because non-reproducing individuals cannot pass on traits directly.",
        isCorrect: true,
        explanation: "This establishes the historical evolutionary paradox that kin selection resolved."
      },
      {
        id: 2,
        text: "In haplodiploid Hymenoptera, haploid fathers pass all their genes to daughters, resulting in full sisters sharing 75 percent of their genes.",
        isCorrect: true,
        explanation: "This details the mathematical genetic mechanism underlying Hamilton's rule in social insects."
      },
      {
        id: 3,
        text: "Workers maximize their inclusive fitness by raising sisters rather than producing offspring because they share a higher percentage of genes with sisters.",
        isCorrect: true,
        explanation: "This summarizes the evolutionary rationale for altruistic sterile worker behavior."
      },
      {
        id: 4,
        text: "Worker bees leave the hive every autumn to mate with unrelated solitary wasps in the wild.",
        isCorrect: false,
        explanation: "Factually incorrect and irrelevant to the passage."
      },
      {
        id: 5,
        text: "Queen ants are diploid males that fertilize workers during flight to maintain colony harmony.",
        isCorrect: false,
        explanation: "Contradiction; queens are reproductive diploid females."
      },
      {
        id: 6,
        text: "Haplodiploid genetics ensures that brothers and sisters share 100 percent identical genomes.",
        isCorrect: false,
        explanation: "Incorrect; brothers and sisters share only 25 percent of their genes in haplodiploid systems."
      }
    ]
  },
  {
    title: "Dendrochronology & Holocene Megadroughts",
    passage: "Dendrochronology uses annual tree-ring variations to reconstruct past environmental and climatic conditions. Bristlecone pines in the Great Basin, which can live for over 4,000 years, produce narrow growth rings during severe moisture deficits and wider rings during pluvial intervals. By cross-dating living trees with well-preserved dead wood, scientists have created an unbroken proxy precipitation record spanning over eight millennia. This record revealed that the American West experienced multi-decade megadroughts during the Medieval Climate Anomaly that far exceeded any droughts recorded in modern instrumental history, providing critical baseline context for contemporary water management.",
    introSentence: "Bristlecone pine dendrochronology provides an 8,000-year paleoclimate record revealing historic megadroughts that surpass modern dry periods.",
    options: [
      {
        id: 1,
        text: "Tree-ring widths in arid-region pines reflect annual precipitation, with narrow rings indicating severe moisture deficits.",
        isCorrect: true,
        explanation: "This explains the fundamental biological mechanism connecting tree growth to rainfall."
      },
      {
        id: 2,
        text: "Cross-dating overlapping growth patterns between living trees and dead remnant wood established an unbroken record extending back over 8,000 years.",
        isCorrect: true,
        explanation: "This describes the scientific methodology that enabled the construction of the multi-millennial chronology."
      },
      {
        id: 3,
        text: "The dendrochronological record revealed that prolonged medieval megadroughts were far more severe than any drought observed in modern instrumental records.",
        isCorrect: true,
        explanation: "This captures the major climatic finding and its significance for understanding natural drought variability."
      },
      {
        id: 4,
        text: "Bristlecone pine wood decays within ten years of tree death, preventing scientists from studying dead logs.",
        isCorrect: false,
        explanation: "Contradiction; bristlecone pine resinous wood resists decay and preserves for millennia."
      },
      {
        id: 5,
        text: "Medieval farmers in California built concrete dams that caused bristlecone pines to stop growing rings.",
        isCorrect: false,
        explanation: "Anachronistic and absurd distractor."
      },
      {
        id: 6,
        text: "Tree-ring analysis can only be performed on trees that grow inside tropical rainforest canopies.",
        isCorrect: false,
        explanation: "Factually incorrect; tropical trees often lack distinct annual rings due to lack of seasonal temperature swings."
      }
    ]
  }
];

// ---------------------------------------------------------------------------
// 12. COMPLETE THE TABLE (6 Full Academic Categorization Exercises)
// ---------------------------------------------------------------------------
export interface CompleteTableItem {
  title: string;
  passage: string;
  categories: string[];
  items: {
    id: number;
    text: string;
    correctCategory: string;
  }[];
}

export const CYCLE2_COMPLETE_TABLE_CONTENT: CompleteTableItem[] = [
  {
    title: "C3 vs. C4 Photosynthesis in Plants",
    passage: "Plants utilize different biochemical photosynthetic pathways to fix atmospheric carbon dioxide into carbohydrates. In C3 photosynthesis—utilized by temperate plants such as wheat, rice, and soybeans—carbon dioxide is fixed directly into a three-carbon compound by the enzyme RuBisCO in the mesophyll cells. However, in hot, dry conditions, RuBisCO binds oxygen instead of carbon dioxide in an inefficient process called photorespiration. In contrast, C4 plants, including maize, sugarcane, and sorghum, have evolved spatial separation between mesophyll and bundle sheath cells. They initially fix carbon using PEP carboxylase into a four-carbon acid, concentrating carbon dioxide around RuBisCO and virtually eliminating photorespiratory waste. While C4 plants thrive in arid, high-temperature environments, C3 plants are energetically more efficient in cool, temperate climates with adequate moisture.",
    categories: ["C3 Plants", "C4 Plants"],
    items: [
      { id: 1, text: "Direct carbon fixation via RuBisCO in mesophyll cells", correctCategory: "C3 Plants" },
      { id: 2, text: "Spatial separation between mesophyll and bundle sheath cells", correctCategory: "C4 Plants" },
      { id: 3, text: "Higher energetic efficiency in cool, temperate climates", correctCategory: "C3 Plants" },
      { id: 4, text: "Initial carbon capture via PEP carboxylase into a 4-carbon acid", correctCategory: "C4 Plants" },
      { id: 5, text: "Includes agricultural crops like maize and sugarcane", correctCategory: "C4 Plants" },
      { id: 6, text: "Susceptible to substantial photorespiration under high heat", correctCategory: "C3 Plants" }
    ]
  },
  {
    title: "Innate vs. Adaptive Immunity in Vertebrates",
    passage: "Vertebrate immune systems comprise two distinct defense divisions: innate immunity and adaptive immunity. The innate immune system provides immediate, non-specific defenses against broad pathogen classes. It relies on physical barriers like skin, phagocytic cells like neutrophils and macrophages, and the complement protein cascade. Innate immunity responds within minutes of infection but generates no immunological memory. Conversely, the adaptive immune system develops over days or weeks and exhibits exquisite pathogen specificity. Utilizing B-lymphocytes that secrete target antibodies and T-lymphocytes that destroy infected cells, adaptive immunity undergoes somatic hypermutation. Crucially, it establishes long-lived memory cells that provide rapid, heightened protection upon re-exposure to the same pathogen.",
    categories: ["Innate Immunity", "Adaptive Immunity"],
    items: [
      { id: 1, text: "Provides immediate, non-specific response within minutes", correctCategory: "Innate Immunity" },
      { id: 2, text: "Generates long-lived immunological memory cells", correctCategory: "Adaptive Immunity" },
      { id: 3, text: "Employs physical barriers like skin and phagocytic macrophages", correctCategory: "Innate Immunity" },
      { id: 4, text: "Relies on B-cells and T-cells with high antigen specificity", correctCategory: "Adaptive Immunity" },
      { id: 5, text: "Undergoes somatic hypermutation to refine antibody affinity", correctCategory: "Adaptive Immunity" },
      { id: 6, text: "Responds without generating lasting immunological memory", correctCategory: "Innate Immunity" }
    ]
  },
  {
    title: "Terrestrial vs. Jovian Planets",
    passage: "Our solar system contains two fundamentally different classes of planets: terrestrial planets and Jovian planets. Terrestrial planets—Mercury, Venus, Earth, and Mars—occupy the warm inner solar system. They are characterized by solid rocky crusts, silicate mantles, metallic iron-nickel cores, high average physical densities, and few or no orbiting natural moons. In contrast, Jovian planets—Jupiter, Saturn, Uranus, and Neptune—formed beyond the frost line where volatile gases could condense. These gas and ice giants possess immense masses, low average densities, deep hydrogen and helium gaseous atmospheres, extensive planetary ring systems, and dozens of orbiting moons.",
    categories: ["Terrestrial Planets", "Jovian Planets"],
    items: [
      { id: 1, text: "Dense metallic cores surrounded by solid silicate rock crusts", correctCategory: "Terrestrial Planets" },
      { id: 2, text: "Deep gaseous atmospheres composed primarily of hydrogen and helium", correctCategory: "Jovian Planets" },
      { id: 3, text: "High average physical density and small planetary radii", correctCategory: "Terrestrial Planets" },
      { id: 4, text: "Extensive planetary ring systems and dozens of natural moons", correctCategory: "Jovian Planets" },
      { id: 5, text: "Formed in the warm inner solar system inside the frost line", correctCategory: "Terrestrial Planets" },
      { id: 6, text: "Immense physical mass combined with relatively low density", correctCategory: "Jovian Planets" }
    ]
  },
  {
    title: "Classical vs. Operant Conditioning in Behavioral Psychology",
    passage: "Behavioral learning theory distinguishes between classical conditioning and operant conditioning. Classical conditioning, pioneered by Ivan Pavlov, involves associating an involuntary biological reflex with a previously neutral environmental stimulus. Through repeated pairing, the conditioned stimulus comes to evoke an automatic physiological response, as when a bell triggers salivation in dogs without voluntary intention. In contrast, operant conditioning, developed by B.F. Skinner, focuses on voluntary instrumental behaviors shaped by their consequences. Behaviors followed by positive reinforcers increase in frequency, while those followed by punishments decrease. Operant conditioning relies on active trial-and-error choices rather than passive stimulus reflexes.",
    categories: ["Classical Conditioning", "Operant Conditioning"],
    items: [
      { id: 1, text: "Associates an involuntary biological reflex with a neutral stimulus", correctCategory: "Classical Conditioning" },
      { id: 2, text: "Shapes voluntary instrumental behaviors through rewards and punishments", correctCategory: "Operant Conditioning" },
      { id: 3, text: "Demonstrated by Pavlov's experiments with salivating dogs", correctCategory: "Classical Conditioning" },
      { id: 4, text: "Requires active choice and trial-and-error behavior", correctCategory: "Operant Conditioning" },
      { id: 5, text: "Increases behavior frequency using positive reinforcement schedules", correctCategory: "Operant Conditioning" },
      { id: 6, text: "Evokes automatic physiological responses without voluntary intent", correctCategory: "Classical Conditioning" }
    ]
  },
  {
    title: "Lithosphere vs. Asthenosphere in Geodynamics",
    passage: "Earth's outer concentric layers are divided into the lithosphere and the asthenosphere based on physical mechanical behavior. The lithosphere encompasses the crust and uppermost solid mantle. It behaves as a rigid, brittle solid that fractures during tectonic stress, generating earthquakes and forming the mosaic of mobile tectonic plates. In contrast, the underlying asthenosphere, extending from approximately 100 to 660 kilometers depth, consists of semi-molten ductile peridotite. Due to elevated temperatures and pressures, rock in the asthenosphere deforms plastically and flows through slow convective currents, providing the lubricating ductile layer over which rigid lithospheric plates glide.",
    categories: ["Lithosphere", "Asthenosphere"],
    items: [
      { id: 1, text: "Rigid, brittle outer layer that fractures to generate earthquakes", correctCategory: "Lithosphere" },
      { id: 2, text: "Composed of the Earth's crust and uppermost solid mantle", correctCategory: "Lithosphere" },
      { id: 3, text: "Consists of semi-molten ductile rock that deforms plastically", correctCategory: "Asthenosphere" },
      { id: 4, text: "Flows through slow convective currents beneath tectonic plates", correctCategory: "Asthenosphere" },
      { id: 5, text: "Forms the broken mosaic of mobile planetary tectonic plates", correctCategory: "Lithosphere" },
      { id: 6, text: "Extends from 100 to 660 kilometers depth as a lubricating layer", correctCategory: "Asthenosphere" }
    ]
  },
  {
    title: "Episodic vs. Semantic Memory in Cognitive Science",
    passage: "Declarative long-term memory is subdivided into episodic memory and semantic memory. Episodic memory stores personally experienced autobiographical events contextualized in specific space and time, such as recalling one's high school graduation or what one ate for breakfast yesterday. It relies heavily on the hippocampus and allows mental time travel. In contrast, semantic memory represents general decontextualized factual knowledge, language rules, and abstract concepts, such as knowing that Paris is the capital of France or that water boils at 100 degrees Celsius. Semantic knowledge is distributed across the neocortex and can be recalled without retrieving the specific occasion when the fact was initially learned.",
    categories: ["Episodic Memory", "Semantic Memory"],
    items: [
      { id: 1, text: "Stores personally experienced autobiographical events with time and location", correctCategory: "Episodic Memory" },
      { id: 2, text: "Represents decontextualized general factual knowledge and vocabulary", correctCategory: "Semantic Memory" },
      { id: 3, text: "Enables subjective mental time travel back to past personal events", correctCategory: "Episodic Memory" },
      { id: 4, text: "Includes abstract facts like mathematical rules or capital cities", correctCategory: "Semantic Memory" },
      { id: 5, text: "Depends heavily on the hippocampus for spatial-temporal encoding", correctCategory: "Episodic Memory" },
      { id: 6, text: "Stored across neocortical networks without requiring recall of the learning episode", correctCategory: "Semantic Memory" }
    ]
  }
];
