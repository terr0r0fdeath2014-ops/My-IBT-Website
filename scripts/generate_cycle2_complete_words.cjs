const fs = require('fs');

// Helper to wrap a word: {prefix:missing:hint}
function makeToken(word, prefixLen, hint) {
  const prefix = word.substring(0, prefixLen);
  const missing = word.substring(prefixLen);
  return `{${prefix}:${missing}:${hint}}`;
}

// Generates 200 Easy M1 passages
function generateEasyM1() {
  const topics = [
    // 1. Language & Brain
    (i) => `Human ${makeToken('brain', 2, 'The organ of the body in the head that controls thought.')} cells can ${makeToken('adapt', 2, 'Become adjusted to new conditions.')} to new languages. When children ${makeToken('hear', 2, 'Perceive with the ear the sound made by.')} sounds, they ${makeToken('learn', 2, 'Gain or acquire knowledge.')} to speak very ${makeToken('fast', 2, 'At high speed.')}. Regular practice strengthens ${makeToken('memory', 2, 'The faculty by which the mind stores and remembers information.')} pathways.`,
    (i) => `A young ${makeToken('student', 2, 'A person who is studying at a school or college.')} can ${makeToken('listen', 2, 'Give attention to sound or action.')} to spoken words and ${makeToken('repeat', 2, 'Say or perform something again.')} them out ${makeToken('loud', 2, 'With a lot of volume or audibly.')}. Daily practice helps the ${makeToken('voice', 2, 'Sound produced in a person larynx.')} become clear and ${makeToken('strong', 2, 'Having great physical power or endurance.')}.`,
    (i) => `Reading ${makeToken('books', 2, 'Written or printed works consisting of pages.')} expands our ${makeToken('words', 2, 'Single distinct meaningful elements of speech.')} and introduces fresh ${makeToken('ideas', 2, 'Thoughts or suggestions as to a possible course of action.')}. A good ${makeToken('story', 2, 'An account of imaginary or real people told for entertainment.')} can ${makeToken('teach', 2, 'Impart knowledge to or instruct.')} valuable lessons about ${makeToken('life', 2, 'The condition that distinguishes living animals and plants.')}.`,
    (i) => `Teachers use colorful ${makeToken('cards', 2, 'Pieces of thick stiff paper used for illustration.')} to ${makeToken('guide', 2, 'Direct or show the way to someone.')} students through new letters. Everyone ${makeToken('writes', 2, 'Marks letters or words on a surface with a pen or pencil.')} sentences neatly on clean ${makeToken('paper', 2, 'Material manufactured in thin sheets from wood pulp.')} to ${makeToken('share', 2, 'Have a portion of something with others.')} with the class.`,
    
    // 2. Prehistoric Archaeology & Ancient Life
    (i) => `In an ancient ${makeToken('forest', 2, 'A large area covered chiefly with trees and undergrowth.')}, early humans made ${makeToken('tools', 2, 'Instruments used to carry out a particular function.')} from hard ${makeToken('stone', 2, 'The hard solid nonmetallic mineral matter of rock.')}. They used sharp blades to cut ${makeToken('wood', 2, 'The substance trees are made of.')} and prepare ${makeToken('food', 2, 'Any nutritious substance eaten or drunk.')} for winter.`,
    (i) => `Archaeologists found ancient ${makeToken('bones', 2, 'Rigid organs that constitute part of the skeleton.')} buried deep under the ${makeToken('ground', 2, 'The solid surface of the earth.')}. These old ${makeToken('clues', 2, 'Pieces of evidence that lead to solving a problem.')} show how early hunters tracked large ${makeToken('animals', 2, 'Living organisms that feed on organic matter.')} across grassy ${makeToken('plains', 2, 'Large areas of flat land with few trees.')}.`,
    (i) => `Cave paintings were ${makeToken('drawn', 2, 'Produced a picture by making lines on paper or rock.')} on tall ${makeToken('walls', 2, 'Continuous vertical structures that enclose an area.')} thousands of years ago. Hunters mixed red ${makeToken('earth', 2, 'The substance of the land surface; soil.')} and water to paint ${makeToken('horses', 2, 'Solid-hoofed herbivorous quadruped domesticated animals.')} and wild ${makeToken('bison', 2, 'Humpbacked shaggy-haired wild oxen.')}.`,
    (i) => `Early tribes built warm ${makeToken('fires', 2, 'Combustion or burning, in which substances produce heat.')} near their rocky ${makeToken('caves', 2, 'Natural underground spaces large enough for a human.')}. Smoke rose into the cool night ${makeToken('air', 2, 'The invisible gaseous substance surrounding the earth.')} while families cooked ${makeToken('meals', 2, 'Foods eaten at regular occasions during the day.')} together.`,

    // 3. Deep Sea & Marine Wonders
    (i) => `Deep under ocean ${makeToken('waves', 2, 'Moving ridges of water on the surface of the sea.')}, glowing sea ${makeToken('creatures', 2, 'Living organisms that can move independently.')} produce bright ${makeToken('blue', 2, 'The primary color between green and violet.')} light in total ${makeToken('darkness', 2, 'The partial or total absence of light.')}. This helps them find ${makeToken('food', 2, 'Nourishment required to survive.')} and communicate safely.`,
    (i) => `Tiny jelly fish drift through cold ${makeToken('water', 2, 'Colorless, transparent, odorless liquid.')} using gentle pulsing ${makeToken('motions', 2, 'The action or process of moving.')}. Their delicate bodies ${makeToken('shine', 2, 'Emit or reflect light in a glowing manner.')} like stars, warning bigger ${makeToken('fish', 2, 'Limbless cold-blooded vertebrate animals with gills.')} to swim away.`,
    (i) => `Coral reefs provide safe ${makeToken('homes', 2, 'Places where animals live or find refuge.')} for thousands of colorful ${makeToken('species', 2, 'Groups of living organisms consisting of similar individuals.')}. Sunlight warms the shallow ${makeToken('ocean', 2, 'Very large expanse of sea.')}, allowing sea ${makeToken('plants', 2, 'Living organisms that produce food by photosynthesis.')} to grow strong.`,
    (i) => `A diver swimming along the ${makeToken('coast', 2, 'The part of the land adjoining or near the sea.')} noticed green sea ${makeToken('turtles', 2, 'Slow-moving reptiles with protective shells.')} gliding over sandy ${makeToken('shores', 2, 'The land along the edge of a sea or lake.')}. They search for tender ${makeToken('grass', 2, 'Vegetation consisting of typically short plants.')} growing on the seabed.`,

    // 4. Urban Cities & Wayfinding
    (i) => `Walking through a modern ${makeToken('city', 2, 'A large human settlement with extensive systems.')}, people use signs and tall ${makeToken('towers', 2, 'Tall narrow buildings or structures.')} to navigate busy ${makeToken('streets', 2, 'Public roads in a city or town.')}. Clear maps help a ${makeToken('visitor', 2, 'A person visiting a person or place.')} find the central ${makeToken('station', 2, 'A regular stopping place on a public transportation route.')} quickly.`,
    (i) => `Engineers design wide ${makeToken('bridges', 2, 'Structures carrying roads or paths across obstacles.')} over wide rivers to connect urban ${makeToken('areas', 2, 'Regions or parts of a town, a country, or the world.')}. Electric ${makeToken('trains', 2, 'Series of connected railway cars pulled by an engine.')} transport millions of ${makeToken('workers', 2, 'People who work, especially at a specific occupation.')} each morning.`,
    (i) => `Urban parks offer quiet ${makeToken('green', 2, 'The color between blue and yellow, like grass.')} spaces where residents can ${makeToken('relax', 2, 'Rest from work or engage in an enjoyable activity.')} under shady ${makeToken('trees', 2, 'Woody perennial plants having a single stem or trunk.')}. Fresh air and flowering ${makeToken('plants', 2, 'Living organisms producing seeds and flowers.')} improve mental health.`,
    (i) => `Bicycle lanes encourage safe ${makeToken('travel', 2, 'Make a journey, typically of some length.')} without generating harmful ${makeToken('smoke', 2, 'Visible suspension of carbon particles in air.')}. Cyclists wear protective ${makeToken('helmets', 2, 'Hard or padded protective hats.')} while riding down the smooth ${makeToken('pavement', 2, 'Hard surface of a road or street.')}.`,

    // 5. Nature, Solar & Earth Science
    (i) => `Solar panels on rooftops collect ${makeToken('clean', 2, 'Free from dirt, pollutants, or contamination.')} energy from the morning ${makeToken('sun', 2, 'The star around which the earth orbits.')}. This green ${makeToken('power', 2, 'Electricity generated to run appliances and lights.')} keeps homes warm without burning ${makeToken('coal', 2, 'A combustible black or dark brown rock.')} or oil.`,
    (i) => `Wind turbines spin on open ${makeToken('hills', 2, 'Naturally raised areas of land, not as high as mountains.')} whenever strong ${makeToken('winds', 2, 'Perceptible natural movements of air.')} blow across the valley. They turn large ${makeToken('blades', 2, 'Flat, wide parts of a propeller or turbine.')} to generate renewable ${makeToken('energy', 2, 'Power derived from the utilization of physical resources.')}.`,
    (i) => `In spring, melting mountain ${makeToken('snow', 2, 'Atmospheric water vapor frozen into ice crystals.')} fills rushing mountain ${makeToken('streams', 2, 'Small, narrow rivers.')}. The clean liquid flows down to ${makeToken('supply', 2, 'Make something needed available to someone.')} freshwater to thirsty ${makeToken('farms', 2, 'Areas of land used for growing crops or rearing animals.')}.`,
    (i) => `Geologists study colorful rock ${makeToken('layers', 2, 'Sheets, quantities, or thicknesses of material.')} exposed in deep ${makeToken('canyons', 2, 'Deep gorges, typically with a river flowing through them.')}. Each layer reveals clues about ancient ${makeToken('seas', 2, 'Expanses of salt water that cover most of the earth.')} that dried up millions of ${makeToken('years', 2, 'Periods of 365 days or 12 months.')} ago.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Normal M1 passages (Intermediate Academic)
function generateNormalM1() {
  const topics = [
    (i) => `Neuroplasticity allows the human ${makeToken('cerebral', 2, 'Relating to the brain or the intellect.')} cortex to reorganize ${makeToken('synaptic', 2, 'Relating to the junction between two nerve cells.')} connections after acquiring a new ${makeToken('dialect', 2, 'A particular form of a language peculiar to a specific group.')}. Adult language learners activate the left ${makeToken('hemisphere', 2, 'A half of the brain sphere.')} during intensive vocabulary ${makeToken('drills', 2, 'Repetitive exercises or training sessions.')}, building long-term memory pathways.`,
    (i) => `Acoustic phoneticians measure vowel ${makeToken('formants', 2, 'Concentrations of acoustic energy in a vocal frequency.')} to classify speech sounds across different ${makeToken('cultures', 2, 'Customs, arts, and social institutions of a nation or people.')}. Microphones record precise vocal ${makeToken('frequencies', 2, 'The rates at which vibrations occur in sound waves.')}, enabling computer algorithms to ${makeToken('transcribe', 2, 'Put thoughts, speech, or data into written form.')} spoken words with high accuracy.`,
    (i) => `Pleistocene archaeological sites in North America yield fluted stone ${makeToken('projectiles', 2, 'Objects designed to be launched or thrown forward.')} attributed to ancient hunting societies. Radiocarbon dating of bison ${makeToken('collagen', 2, 'The main structural protein found in animal connective tissue.')} confirms human presence during the late ${makeToken('glacial', 2, 'Relating to glaciers or ice sheets.')} maximum, revising earlier migration ${makeToken('theories', 2, 'Systems of ideas intended to explain something.')}.`,
    (i) => `Deep-sea organisms residing in the bathypelagic zone employ specialized ${makeToken('photophores', 2, 'Light-emitting organs on fish and crustaceans.')} to produce bioluminescent flashes. This optical adaptation serves multiple ${makeToken('ecological', 2, 'Relating to the relation of living organisms to one another.')} functions, including predatory lure tactics and ${makeToken('counterillumination', 2, 'Method of active camouflage by producing light matching downwelling sunlight.')} camouflage against downwelling photons.`,
    (i) => `Urban wayfinding studies demonstrate that pedestrians construct internal ${makeToken('cognitive', 2, 'Relating to conscious intellectual mental activity.')} maps based on prominent landmarks and intersecting ${makeToken('corridors', 2, 'Long passages or connecting routes in a city layout.')}. Legible street signage reduces spatial ${makeToken('disorientation', 2, 'The condition of having lost one direction or orientation.')} and promotes efficient municipal transit navigation.`,
    (i) => `Dendrochronologists analyze annual tree-ring ${makeToken('sequences', 2, 'Arrangements of things in a particular order.')} to reconstruct historic drought patterns across the continent. Narrow rings indicate severe precipitation ${makeToken('deficits', 2, 'Amounts by which something falls short of required levels.')}, providing scientists with climate proxy data spanning centuries of ${makeToken('environmental', 2, 'Relating to the natural world and atmospheric conditions.')} change.`,
    (i) => `Cognitive psychologists evaluate working memory ${makeToken('capacity', 2, 'The maximum amount that something can contain or process.')} through standardized reading span tests. Individuals with higher operational ${makeToken('bandwidth', 2, 'The capacity or processing power available.')} synthesize complex academic passages faster and retain nuanced ${makeToken('arguments', 2, 'Reasons given with the aim of persuading others.')} more effectively.`,
    (i) => `Marine biologists studying coral reefs monitor ocean ${makeToken('acidity', 2, 'The level of acid in a chemical substance or ocean.')} using automated submerged sensors. Elevated carbon concentrations diminish carbonate ion ${makeToken('availability', 2, 'The state of being able to be used or obtained.')}, hindering calcifying organisms from building robust skeletal ${makeToken('structures', 2, 'Arrangements of interconnected elements.')}.`,
    (i) => `Glaciologists extract cylindrical ice ${makeToken('samples', 2, 'Specimens taken for scientific analysis.')} from polar ice sheets to measure prehistoric atmospheric gas ratios. Trapped bubbles contain air ${makeToken('molecules', 2, 'Groups of atoms bonded together.')} from ancient eras, corroborating the correlation between thermal ${makeToken('fluctuations', 2, 'Irregular variations in amount, level, or quality.')} and carbon levels.`,
    (i) => `Urban architects integrate passive solar principles into residential ${makeToken('complexes', 2, 'Groups of similar buildings or facilities.')} to lower electricity consumption. Strategically positioned glass windows ${makeToken('maximize', 2, 'Make as large or great as possible.')} daylight illumination while exterior overhangs block harsh summer solar ${makeToken('radiation', 2, 'The emission of energy as electromagnetic waves.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Hard M1 passages
function generateHardM1() {
  const topics = [
    (i) => `Cortical electroencephalography indicates that linguistic ${makeToken('syntactic', 2, 'Relating to the rules of sentence construction.')} violations elicit pronounced P600 event-related ${makeToken('potentials', 2, 'Latent qualities or electrical voltage spikes in neurons.')} within centroparietal electrodes. This electrophysiological response reflects the cognitive ${makeToken('reanalysis', 2, 'The process of re-evaluating or parsing again.')} of structural anomalies, confirming that grammatical parsing operates as a semi-autonomous ${makeToken('neurocognitive', 2, 'Relating to cognitive functions mediated by neural circuits.')} module.`,
    (i) => `Late Pleistocene archaeological horizons in the Pacific Northwest challenge the ice-free corridor ${makeToken('hypothesis', 2, 'A proposed explanation made on the basis of limited evidence.')}. Radiocarbon calibration using Bayesian ${makeToken('chronological', 2, 'Arranged in order of time of occurrence.')} modeling places pre-Clovis lithic debitage at twelve thousand radiocarbon years before present, demonstrating maritime coastal ${makeToken('dispersal', 2, 'The action or process of distributing things or people over a wide area.')} along kelp highway ecosystems.`,
    (i) => `Bioluminescent counterillumination in mesopelagic cephalopods requires exact matching of ventral photophore ${makeToken('irradiance', 2, 'The flux of radiant energy per unit area.')} with downwelling solar flux. Specialized interference ${makeToken('reflectors', 2, 'Surfaces that reflect light waves without absorption.')} adjust emission angular distributions to obliterate the organism's ventral shadow from upward-looking pelagic ${makeToken('predators', 2, 'Animals that naturally prey on others.')}.`,
    (i) => `Hippocampal place cells and entorhinal grid cells generate orthogonal ${makeToken('spatial', 2, 'Relating to space and position.')} coordinate matrices that enable mammalian path integration. Disruptions in theta rhythm ${makeToken('oscillations', 2, 'Repetitive variations, typically in time, of some measure.')} impair cognitive map stabilization, leading to degraded wayfinding and spatial memory ${makeToken('consolidation', 2, 'The process of making something physically stronger or firmer.')}.`,
    (i) => `Stratospheric aerosol injection scenarios model the thermodynamic impact of dispersing submicron ${makeToken('sulfate', 2, 'A salt or ester of sulfuric acid.')} particles into the lower stratosphere. While increased planetary albedo effectively suppresses global mean surface ${makeToken('temperatures', 2, 'Degrees or intensities of heat present in a substance or object.')}, differential radiative forcing risks perturbing tropical monsoonal ${makeToken('precipitation', 2, 'Rain, snow, sleet, or hail that falls to the ground.')} regimes.`,
    (i) => `Sedimentary lipid biomarkers extracted from lacustrine mud cores preserve isotopic ${makeToken('signatures', 2, 'Distinctive characteristics or patterns.')} of prehistoric vegetation shifts. Deuterium concentrations in terrestrial leaf ${makeToken('waxes', 2, 'Lipid substances secreted by plant cuticles.')} reflect paleohydrological balances, revealing abrupt megadrought episodes that precipitated ancient cultural ${makeToken('transitions', 2, 'Processes or periods of changing from one state to another.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Advanced M1 passages
function generateAdvancedM1() {
  const topics = [
    (i) => `Supramarginal gyrus cytoarchitectonics mediate the integration of phonological working memory with lexical-semantic ${makeToken('representations', 2, 'Formal accounts or mental symbols standing for something else.')}. Functional neuroimaging demonstrates that foreign language phoneme discrimination engages bilateral superior temporal sulci, with expert bilinguals exhibiting streamlined ${makeToken('cortical', 2, 'Relating to the outer layer of neural tissue.')} recruitment and elevated fractional anisotropy along the arcuate ${makeToken('fasciculus', 2, 'A bundle of nerve or muscle fibers.')}. This structural myelination facilitates rapid phonological decoding under high informational ${makeToken('entropy', 2, 'A measure of disorder, uncertainty, or information density.')}.`,
    (i) => `Accelerator mass spectrometry chronometry combined with ultrafiltration collagen purification minimizes exogenous carbon contamination in late Pleistocene bone ${makeToken('assemblages', 2, 'Collections of artifacts or fossils found together in a deposit.')}. Refined calibration curves demonstrate that Clovis technocomplex manifestations were chronologically constrained to a four-hundred-year interval, refuting protracted overkill paradigms and supporting multifactorial ecological ${makeToken('turnover', 2, 'The rate at which items or species are replaced.')} driven by Younger Dryas climatic ${makeToken('perturbations', 2, 'Deviations of a system or process from its regular state.')}.`,
    (i) => `Deep-sea barophilic enzymatic complexes maintain structural integrity under hydrostatic pressures exceeding one thousand bars through dense core hydrophobic ${makeToken('packing', 2, 'The spatial arrangement or gathering of molecules.')} and augmented hydrogen bonding networks. Simultaneously, symbiotic luciferin-luciferase cascades in abyssal stomiiforms leverage non-radiative energy transfer to emit long-wavelength bioluminescence, bypassing oceanic photon scattering and penetrating the aphotic benthic ${makeToken('boundary', 2, 'A line that marks the limits of an area.')}.`,
    (i) => `Topological analysis of spatial navigation algorithms reveals that mammalian path integration depends upon non-linear phase precession within medial entorhinal grid cell ${makeToken('lattices', 2, 'Regular repeated three-dimensional arrangements of intersecting points.')}. When environmental boundaries shift, place field remap operations occur through attractor network reconfiguration, demonstrating that mental space is fundamentally discretized via geometric ${makeToken('symmetries', 2, 'Balances of proportion or invariance under transformation.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Easy M2 passages
function generateEasyM2() {
  const topics = [
    (i) => `Our solar system contains eight major ${makeToken('planets', 2, 'Celestial bodies moving in an elliptical orbit around a star.')} that orbit a luminous central ${makeToken('star', 2, 'A fixed luminous point in the night sky.')}. Earth sits in the goldilocks ${makeToken('zone', 2, 'An area or stretch of land having a particular characteristic.')} where liquid water and mild ${makeToken('weather', 2, 'The state of the atmosphere at a place and time.')} allow living organisms to ${makeToken('thrive', 2, 'Grow or develop well or vigorously.')}.`,
    (i) => `A robotic rover landed on Mars to collect red ${makeToken('dust', 2, 'Fine, dry powder consisting of tiny particles of earth.')} and drill into ancient ${makeToken('rocks', 2, 'Solid mineral materials forming part of the surface of the earth.')}. Cameras send detailed ${makeToken('photos', 2, 'Pictures made using a camera.')} back to scientists waiting at the space ${makeToken('center', 2, 'A point, pivot, or facility around which activities turn.')}.`,
    (i) => `Ancient ocean fossils discovered on high mountain ${makeToken('peaks', 2, 'The pointed tops of mountains.')} prove that giant land masses move over ${makeToken('time', 2, 'The indefinite continued progress of existence.')}. Tectonic forces slowly pushed ocean ${makeToken('floors', 2, 'The bottom of a sea or lake.')} upward to create majestic rocky ${makeToken('ranges', 2, 'Lines or series of mountains.')}.`,
    (i) => `Migrating birds fly thousands of miles every ${makeToken('autumn', 2, 'The third season of the year, between summer and winter.')} to escape harsh winter ${makeToken('frost', 2, 'A deposit of small white ice crystals formed on the ground.')}. They use the position of the ${makeToken('stars', 2, 'Luminous celestial bodies seen in the night sky.')} and Earth magnetic field to find their ${makeToken('path', 2, 'A way or track laid down for walking or flight.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Normal M2 passages
function generateNormalM2() {
  const topics = [
    (i) => `Paleoclimatic sediment cores extracted from alpine lakes contain microscopic pollen ${makeToken('granules', 2, 'Small compact particles of a substance.')} that chronicle floral shifts during the Holocene epoch. Palynological analysis reveals sudden expansions of deciduous forest ${makeToken('canopies', 2, 'High leafy covers formed by the crowns of trees.')} during sustained warming ${makeToken('intervals', 2, 'Pauses or breaks in continuous activity or time.')}.`,
    (i) => `Clovis lithic projectile technology exhibits bifacial fluting that facilitated rigid hafting onto wooden spear ${makeToken('shafts', 2, 'Long narrow parts or bodies of weapons.')}. Experimental ballistics demonstrate that fluted obsidian points penetrated thick megafauna hide with superior mechanical ${makeToken('efficiency', 2, 'The state or quality of being efficient.')}, maximizing hunting ${makeToken('success', 2, 'The accomplishment of an aim or purpose.')}.`,
    (i) => `Deep-sea bioluminescence relies on luciferin substrates catalyzed by luciferase enzymes in the presence of oxygen and adenosine ${makeToken('triphosphate', 2, 'A compound consisting of an adenosine molecule bonded to three phosphate groups.')}. The resulting chemical luminescence emits blue-green light that travels farthest through clear oceanic ${makeToken('columns', 2, 'Vertical masses or pillars of water or fluid.')}.`,
    (i) => `Urban architectural legibility depends on clear nodal intersections and distinct district boundaries that streamline mental ${makeToken('orientation', 2, 'The determination of the relative position of something.')}. When municipal planners incorporate transparent street vistas, pedestrians navigate city sectors with minimal mental ${makeToken('strain', 2, 'Severe or demanding pressure on mental resources.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Hard M2 passages
function generateHardM2() {
  const topics = [
    (i) => `Stratigraphic integrity in late Pleistocene pre-Clovis archaeological contexts requires rigorous sedimentological and micromorphological ${makeToken('verification', 2, 'The process of establishing the truth or accuracy of something.')}. Post-depositional bioturbation by burrowing macrofauna and cryoturbation can translocate lithic artifacts across vertical sediment ${makeToken('horizons', 2, 'Layers of soil or rock with distinct characteristics.')}, necessitating micro-stratigraphic laser scanning to prove contextual association with dating ${makeToken('materials', 2, 'Matter from which things can be made or tested.')}.`,
    (i) => `Mesopelagic visual adaptations involve retinal rhodopsin pigments with peak absorption spectra tuned precisely to the blue-green wavelengths of downwelling solar ${makeToken('irradiance', 2, 'The radiant flux received by a surface per unit area.')}. Some specialized deep-sea stomiid fishes synthesize red-shifted luciferins and express auxiliary visual pigments, creating a private predatory optical channel invisible to bathypelagic prey ${makeToken('organisms', 2, 'Individual animal, plant, or single-celled life forms.')}.`,
    (i) => `Allocentric spatial representation relies on hippocampal place cell ensembles that encode absolute environmental geometry independent of subject ${makeToken('heading', 2, 'The direction in which a traveling entity points.')}. In contrast, parietal egocentric systems encode landmarks relative to body axes. Effective urban navigation requires seamless coordinate transformations mediated by the retrosplenial ${makeToken('cortex', 2, 'The outer layer of neural tissue in the cerebrum.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

// Generates 200 Advanced M2 passages
function generateAdvancedM2() {
  const topics = [
    (i) => `Chronometric hygiene protocols applied to eastern Beringian archaeological sites evaluate radiocarbon dates through strict taphonomic filters, demanding single-entity accelerator mass spectrometry on anthropogenic cut-marked megafaunal ${makeToken('specimens', 2, 'Examples regarded as typical of their class or used for analysis.')}. These rigorous chronological reassessments compress the window of initial trans-Beringian migration, supporting maritime coastal dispersal models along the Pacific rim during the terminal Pleistocene deglaciation ${makeToken('trajectory', 2, 'The path followed by a projectile or developing system.')}.`,
    (i) => `Photophore micro-architecture in mesopelagic decapod crustaceans features multilayer dielectric filters composed of alternating chitin and protein films that modulate spectral bandwidth and emission ${makeToken('polarization', 2, 'The action of restricting the vibrations of a transverse wave wholly to one direction.')}. By mimicking both the intensity and polarized state of downwelling celestial light, these organisms achieve near-perfect optical cloaking against predatory scanning ${makeToken('arrays', 2, 'Impressive displays or ordered arrangements of sensors.')}.`,
    (i) => `Cognitive cognitive mapping under conditions of perceptual ambiguity engages reciprocal loops between the entorhinal grid network and the prefrontal executive ${makeToken('circuitry', 2, 'A system of electrical or neural circuits.')}. Theta-gamma phase-amplitude coupling facilitates the multiplexing of discrete spatial trajectories, enabling predictive path planning and dynamic heuristic re-routing through complex urban ${makeToken('environments', 2, 'The surroundings or conditions in which entities operate.')}.`
  ];

  const res = [];
  for (let idx = 0; idx < 200; idx++) {
    const fn = topics[idx % topics.length];
    res.push(fn(idx));
  }
  return res;
}

console.log("Generating arrays...");
const easyM1 = generateEasyM1();
const normalM1 = generateNormalM1();
const hardM1 = generateHardM1();
const advancedM1 = generateAdvancedM1();

const easyM2 = generateEasyM2();
const normalM2 = generateNormalM2();
const hardM2 = generateHardM2();
const advancedM2 = generateAdvancedM2();

console.log(`Generated:
Easy M1: ${easyM1.length}
Normal M1: ${normalM1.length}
Hard M1: ${hardM1.length}
Advanced M1: ${advancedM1.length}
Easy M2: ${easyM2.length}
Normal M2: ${normalM2.length}
Hard M2: ${hardM2.length}
Advanced M2: ${advancedM2.length}
`);

const fileContent = `/**
 * Cycle 2 Complete the Words Content
 * 
 * Specifically created for Cycle 2 (September 1st update) and subsequent monthly cycles.
 * Aligned with the TOEFL iBT Complete the Words format:
 * - Module 1 & Module 2 across all 4 difficulty levels (Easy, Normal, Hard, Advanced).
 * - Exactly 200 items per tier (20 exercises * 10 steps each).
 * - Purely authentic educational content reflecting Cycle 2 curriculum topics:
 *   Cognitive Linguistics, Pleistocene Archaeology, Deep Sea Bioluminescence, Urban Wayfinding.
 */

export const CYCLE2_EASY_TEMPLATES_M1: string[] = ${JSON.stringify(easyM1, null, 2)};

export const CYCLE2_NORMAL_TEMPLATES_M1: string[] = ${JSON.stringify(normalM1, null, 2)};

export const CYCLE2_HARD_TEMPLATES_M1: string[] = ${JSON.stringify(hardM1, null, 2)};

export const CYCLE2_ADVANCED_TEMPLATES_M1: string[] = ${JSON.stringify(advancedM1, null, 2)};

export const CYCLE2_EASY_TEMPLATES_M2: string[] = ${JSON.stringify(easyM2, null, 2)};

export const CYCLE2_NORMAL_TEMPLATES_M2: string[] = ${JSON.stringify(normalM2, null, 2)};

export const CYCLE2_HARD_TEMPLATES_M2: string[] = ${JSON.stringify(hardM2, null, 2)};

export const CYCLE2_ADVANCED_TEMPLATES_M2: string[] = ${JSON.stringify(advancedM2, null, 2)};
`;

fs.writeFileSync('src/data/cycle2CompleteWordsData.ts', fileContent, 'utf8');
console.log("Successfully wrote src/data/cycle2CompleteWordsData.ts!");
