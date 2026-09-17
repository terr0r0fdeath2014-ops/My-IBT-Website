import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define 200 advanced academic topics
const topics = [
  "Quantum mechanics and the Copenhagen interpretation",
  "Epistemological relativism and subjective truth",
  "String theory and the landscape of Calabi-Yau manifolds",
  "Existential dread and the myth of Sisyphus",
  "Behavioral economics and the framing effect",
  "Plate tectonics and the supercontinent of Pangaea",
  "Game theory and the concept of Nash equilibrium",
  "Organic chemistry and enantiomeric stereochemistry",
  "Post-modernism, hyperreality, and Jean Baudrillard",
  "Thermodynamics, entropy, and the arrow of time",
  "Dark matter, galactic rotation curves, and WIMPs",
  "Stoicism, Seneca, and the dichotomy of control",
  "Artificial neural networks and backpropagation",
  "Macroeconomic theory and liquidity traps",
  "Molecular genetics and RNA splicing mechanisms",
  "Astrophysics, nucleosynthesis, and stellar fusion",
  "Sociology of power, hegemony, and Antonio Gramsci",
  "Cognitive neuroscience and synaptic plasticity",
  "Philosophy of science and Karl Popper's falsifiability",
  "Quantum field theory and virtual particles",
  "Evolutionary developmental biology and Hox genes",
  "Nanotechnology, graphene, and carbon allotropes",
  "Philosophy of language and Wittgenstein's language games",
  "Mathematical topology, Mobius strips, and manifolds",
  "Behavioral ecology and sexual selection in peacocks",
  "Critical theory, culture industry, and Frankfurt School",
  "Quantum computing, superposition, and qubits",
  "Epigenetics, DNA methylation, and gene expression",
  "Superconductivity and the Meissner effect",
  "Structuralism and Ferdinand de Saussure's semiotics",
  "Neuroplasticity and phantom limb syndrome",
  "Philosophy of mind, functionalism, and multiple realizability",
  "Climate modeling, albedo feedback, and thermal inertia",
  "Complex systems, chaos theory, and butterfly effect",
  "Mathematical logic and Godel's incompleteness theorems",
  "Plate tectonics, subduction zones, and deep-sea trenches",
  "Aesthetics, sublime, and Immanuel Kant's judgment",
  "Genomics, CRISPR-Cas9, and gene drives",
  "Astrophysics, Hawking radiation, and black holes",
  "Political philosophy and Hobbes' Leviathan",
  "Statistical mechanics and Boltzmann's entropy formula",
  "Marine biology, hydrothermal vents, and chemosynthesis",
  "Modernist literature, stream of consciousness, and Woolf",
  "Organic chemistry, nucleophilic substitution, and transition states",
  "Historiography, historical revisionism, and objectivity",
  "Quantum mechanics, wave-particle duality, and double-slit",
  "Linguistics and Noam Chomsky's universal grammar",
  "Philosophy of mind, qualia, and Mary's room argument",
  "Paleoclimatology, ice cores, and Milankovitch cycles",
  "Macroeconomics, Keynesian multiplier, and fiscal policy",
  "Molecular biology, ribosome translation, and peptide bonds",
  "Microeconomics, marginal utility, and indifference curves",
  "History of architecture, Brutalism, and Le Corbusier",
  "Psychology, cognitive dissonance, and Leon Festinger",
  "Social psychology, bystander effect, and diffusion of responsibility",
  "Environmental ethics, biocentrism, and Aldo Leopold",
  "Cell biology, apoptosis pathways, and caspases",
  "Analytical chemistry, mass spectrometry, and ionization",
  "Philosophy of science and Thomas Kuhn's paradigm shifts",
  "Information theory, Shannon entropy, and bit representation",
  "Evolutionary game theory and evolutionarily stable strategies",
  "Cosmology, cosmic microwave background, and recombination",
  "Quantum entanglement, EPR paradox, and Bell's inequality",
  "Geology, basalt column formation, and columnar jointing",
  "History of mathematics, calculus dispute, and Leibniz",
  "Evolutionary biology, sympatric speciation, and polyploidy",
  "Social theory, Jeremy Bentham, and Foucault's panopticism",
  "Astronomy, exoplanet transit method, and Kepler mission",
  "Organic synthesis, catalysts, and green chemistry principles",
  "Cognitive psychology, schema theory, and memory reconstruction",
  "Human-computer interaction and Jakob Nielsen's heuristics",
  "Cultural anthropology and structural functionalism of Malinowski",
  "Cryptography, RSA algorithm, and asymmetric keys",
  "Oceanography, thermohaline circulation, and great conveyor belt",
  "Epistemology, Gettier cases, and justified true belief",
  "Evolutionary biology, kin selection, and Hamilton's rule",
  "Metaphysics, determinism, and the nature of free will",
  "Modernist poetry, Imagism, and Ezra Pound",
  "Neuroscience, mirror neurons, and empathy",
  "Environmental science, bioaccumulation, and biomagnification",
  "Mechanical engineering, fluid dynamics, and Bernoulli's equation",
  "Astrophysics, cosmic inflation, and cosmic horizon",
  "Political science, democratic peace theory, and international relations",
  "Behavioral psychology, operant conditioning, and reinforcement schedules",
  "Quantum mechanics, Heisenberg's uncertainty principle, and wave packets",
  "Philosophy of law, legal positivism, and H.L.A. Hart",
  "Molecular biology, PCR amplification, and Taq polymerase",
  "Architecture, Bauhaus school, and Walter Gropius",
  "Sociology of religion, Protestant ethic, and Max Weber",
  "Computer science, Turing machines, and halting problem",
  "History of medicine, germ theory, and Louis Pasteur",
  "Evolutionary biology, convergent evolution, and analogous structures",
  "Epistemology, rationalism versus empiricism debate",
  "Geology, stratigraphy, and law of superposition",
  "Environmental science, eutrophication, and algal blooms",
  "Organic chemistry, aromaticity, and Huckel's rule",
  "Astrophysics, pulsar stars, and lighthouse effect",
  "Philosophy, utilitarianism, and Jeremy Bentham",
  "Immunology, antigen presentation, and MHC molecules",
  "Inorganic chemistry, coordination complexes, and ligand field theory",
  "Archaeology, radiocarbon dating, and half-life decay",
  "Sociology, social capital, and Pierre Bourdieu",
  "Linguistics, Sapir-Whorf hypothesis, and linguistic relativity",
  "Philosophy, phenomenology, and Edmund Husserl",
  "Astrophysics, dark energy, and cosmic expansion acceleration",
  "Cell biology, endosymbiotic theory, and mitochondria origin",
  "Neuroscience, action potential, and sodium-potassium pump",
  "Microbiology, horizontal gene transfer, and bacterial conjugation",
  "Political philosophy, Rawlsian justice, and veil of ignorance",
  "Quantum mechanics, quantum tunneling, and scanning tunneling microscope",
  "History of science, Copernican revolution, and heliocentrism",
  "Cognitive psychology, dual-process theory, and Kahneman",
  "Atmospheric science, ozone layer depletion, and CFCs",
  "Linguistics, phonetics, and international phonetic alphabet",
  "Philosophy, pragmatism, and William James",
  "Economics, game theory, and tragedy of the commons",
  "Ecology, trophic cascades, and apex predators",
  "Sociology, dramaturgy, and Erving Goffman's self-presentation",
  "Astrophysics, neutron stars, and degeneracy pressure",
  "Chemistry, periodic law, and Mendeleev's development",
  "Linguistics, morphology, and morphemes classification",
  "History, French Revolution, and Reign of Terror",
  "Philosophy, nihilism, and Friedrich Nietzsche",
  "Biology, CRISPR gene editing ethics, and bioethics",
  "Physics, thermodynamics, and the third law of thermodynamics",
  "Earth science, plate tectonics, and continental rifting",
  "Neuroscience, neurotransmitters, and synaptic transmission",
  "Anthropology, cultural relativism, and Franz Boas",
  "Political science, separation of powers, and Montesquieu",
  "Astronomy, asteroid belt, and orbital resonances",
  "Economics, supply and demand elasticity, and market equilibrium",
  "Philosophy, deconstructive criticism, and Jacques Derrida",
  "Biology, cellular respiration, and Krebs cycle",
  "History, ancient Mesopotamia, and Code of Hammurabi",
  "Sociology, anomie, and Emile Durkheim's suicide study",
  "Psychology, psychoanalysis, and Sigmund Freud's ego",
  "Computer science, object-oriented programming, and polymorphism",
  "Linguistics, syntax, and phrase structure rules",
  "Astronomy, exoplanet direct imaging, and coronagraphs",
  "Ecology, niche differentiation, and competitive exclusion",
  "Physics, electromagnetism, and Maxwell's equations",
  "Political philosophy, Machiavelli, and political realism",
  "Chemistry, chemical kinetics, and activation energy",
  "History, Meiji Restoration, and modernization of Japan",
  "Philosophy, virtue ethics, and Aristotle's Nicomachean Ethics",
  "Biology, photosynthesis, and light-dependent reactions",
  "Mathematics, Fibonacci sequence, and golden ratio",
  "Economics, comparative advantage, and David Ricardo",
  "Sociology, social stratification, and class consciousness",
  "Psychology, behaviorism, and John B. Watson",
  "Computer science, sorting algorithms, and time complexity",
  "Linguistics, semantics, and truth-conditional meaning",
  "Astronomy, cosmic rays, and galactic magnetic fields",
  "Ecology, island biogeography theory, and MacArthur-Wilson",
  "Physics, general relativity, and gravitational lensing",
  "Political philosophy, Marxism, and historical materialism",
  "Chemistry, acid-base theories, and Lewis acids",
  "History, Pax Romana, and Roman peace",
  "Philosophy, dualism, and Rene Descartes",
  "Biology, cell division, and stages of mitosis",
  "Mathematics, prime numbers, and Riemann hypothesis",
  "Economics, behavioral finance, and prospect theory",
  "Sociology, power elite, and C. Wright Mills",
  "Psychology, attachment theory, and John Bowlby",
  "Computer science, graph theory, and Dijkstra's algorithm",
  "Linguistics, sociolinguistics, and dialectology",
  "Astronomy, Kuiper belt, and dwarf planets",
  "Ecology, primary succession, and pioneer species",
  "Physics, special relativity, and time dilation",
  "Political philosophy, libertarianism, and Robert Nozick",
  "Chemistry, thermodynamics, and Gibbs free energy",
  "History, Silk Road trade, and cultural exchange",
  "Philosophy, skepticism, and David Hume",
  "Biology, molecular structure of hemoglobin",
  "Mathematics, probability theory, and law of large numbers",
  "Economics, game theory, and zero-sum games",
  "Sociology, McDonaldization, and George Ritzer",
  "Psychology, cognitive behavioral therapy, and Beck",
  "Computer science, cryptography, and symmetric encryption",
  "Linguistics, pragmatics, and speech act theory",
  "Astronomy, Oort cloud, and long-period comets",
  "Ecology, carrying capacity, and logistic growth",
  "Physics, classical mechanics, and Lagrangian mechanics",
  "Political philosophy, communitarianism, and Michael Sandel",
  "Chemistry, molecular orbital theory, and hybridization",
  "History, Byzantine Empire, and Justinian's code",
  "Philosophy, metaphysics of mind, and physicalism",
  "Biology, protein folding, and chaperonins",
  "Mathematics, fractals, and Mandelbrot set",
  "Economics, game theory, and oligopoly pricing",
  "Physics, string theory, and M-theory",
  "Biology, epigenetic inheritance, and histone modification",
  "Philosophy, political liberalism, and John Rawls",
  "Linguistics, linguistic relativity, and Benjamin Lee Whorf",
  "Chemistry, coordination chemistry, and crystal field theory",
  "Neuroscience, neurogenesis, and hippocampal plasticity",
  "Economics, macroeconomics, and modern monetary theory",
  "Sociology, post-structuralism, and Michel Foucault",
  "Computer science, neural networks, and attention mechanisms",
  "Astronomy, gravitational waves, and laser interferometry"
];

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: GEMINI_API_KEY is not defined in the environment.");
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

function validateTemplate(template: string): boolean {
  const matches = template.match(/\{[^}]+\}/g);
  if (!matches || matches.length !== 10) {
    console.warn(`Validation failed: Expected exactly 10 bracketed segments, found ${matches ? matches.length : 0}`);
    return false;
  }

  for (const m of matches) {
    const content = m.slice(1, -1);
    const parts = content.split(":");
    if (parts.length !== 3) {
      console.warn(`Validation failed: Segment "${m}" does not have 3 parts split by ":"`);
      return false;
    }
    const [prefix, missing, hint] = parts;
    if (prefix.length !== 2) {
      console.warn(`Validation failed: Prefix "${prefix}" in segment "${m}" is not exactly 2 characters`);
      return false;
    }
    if (!missing || missing.length === 0) {
      console.warn(`Validation failed: Missing part is empty in segment "${m}"`);
      return false;
    }
    if (!hint || hint.trim().length === 0) {
      console.warn(`Validation failed: Hint is empty in segment "${m}"`);
      return false;
    }
    
    // Check spelling match
    const fullWord = prefix + missing;
    if (fullWord.toLowerCase().includes(" ")) {
      console.warn(`Validation failed: Embedded word "${fullWord}" contains spaces`);
      return false;
    }
    if (/[^a-zA-Z]/.test(prefix) || /[^a-zA-Z]/.test(missing)) {
      console.warn(`Validation failed: Prefix or missing part in "${m}" contains invalid characters (non-letters)`);
      return false;
    }
  }
  return true;
}

// Generates exactly 5 passages for 5 given topics
async function generateBatch(topicsBatch: string[]): Promise<string[] | null> {
  console.log(`Generating batch for topics: \n - ${topicsBatch.join("\n - ")}`);
  
  const prompt = `You are a curriculum developer for an advanced academic/professional English reading and vocabulary application.
Write 5 distinct high-quality, engaging, and unique academic/scientific reading passages, one for each of the following 5 topics:
${topicsBatch.map((t, idx) => `${idx + 1}. ${t}`).join("\n")}

For EACH passage:
1. It must be exactly 8 to 10 lines of text (approx 120-150 words).
2. The language and style must be highly advanced, academic, and professional (vocabulary, grammar, and sentence structures should be challenging and appropriate for university-level or professional readers).
3. Inside the passage, you MUST embed exactly 10 advanced, specialized academic/professional vocabulary words using the following brackets format:
{prefix:missing:hint}

Where:
- prefix: the first 2 letters of the word (in lowercase, e.g., 'ca' for 'catastrophe'. If the word is capitalized at the start of a sentence, capitalize the first letter, e.g., 'Un' for 'Universal').
- missing: the remainder of the word (e.g., 'tastrophe' for 'catastrophe'). No spaces or punctuation.
- hint: a short, clear, dictionary definition of the word.

Rules for bracket words:
1. prefix + missing MUST form a real, correctly spelled English word.
2. The prefix MUST be exactly the first 2 letters. No exceptions.
3. Choose exactly 10 words spread throughout each passage.
4. Do NOT use markdown bold/italic inside any passage.
5. All 10 words in a single passage must be unique.

Return the result as a raw JSON array containing exactly 5 string elements, where each element is a raw passage. No other text or code blocks.
Example valid JSON response format:
[
  "The study of {co:smology:the science of the origin and development of the universe.} involves...",
  "Passage 2...",
  "Passage 3...",
  "Passage 4...",
  "Passage 5..."
]
`;

  let attempt = 0;
  const maxCallAttempts = 5;
  while (attempt < maxCallAttempts) {
    attempt++;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING
            }
          },
        },
      });

      const text = response.text?.trim();
      if (!text) {
        console.warn("Received empty response from Gemini API");
        return null;
      }
      const passages: string[] = JSON.parse(text);
      return passages;
    } catch (error: any) {
      const isRateLimit = error?.message?.includes("429") || 
                          error?.status === "RESOURCE_EXHAUSTED" || 
                          String(error).includes("429");
      if (isRateLimit && attempt < maxCallAttempts) {
        console.warn(`[RATE LIMIT] Hit 429 on generateBatch. Attempt ${attempt}/${maxCallAttempts}. Cooling down 30s before retry...`);
        await new Promise(resolve => setTimeout(resolve, 30000));
        continue;
      }
      console.error(`Error during batch generation (attempt ${attempt}):`, error?.message || error);
      return null;
    }
  }
  return null;
}

// Generates a single passage for a single topic as a fallback
async function generateSingle(topic: string): Promise<string | null> {
  console.log(`Generating single fallback template for topic: "${topic}"`);
  
  const prompt = `You are a curriculum developer for an advanced academic/professional English reading and vocabulary application.
Write a high-quality, engaging, and unique academic/scientific reading passage on the topic: "${topic}".

The passage must be exactly 8 to 10 lines of text (approx 120-150 words).
The language and style must be highly advanced, academic, and professional (vocabulary, grammar, and sentence structures should be challenging and appropriate for university-level or professional readers).
Inside the passage, you MUST embed exactly 10 advanced academic/professional vocabulary words using the following brackets format:
{prefix:missing:hint}

Where:
- prefix: the first 2 letters of the word (in lowercase, e.g., 'ca' for 'catastrophe'. If capitalized at sentence start, e.g., 'Un' for 'Universal').
- missing: the remainder of the word. No spaces or punctuation.
- hint: a short, clear, dictionary definition.

Rules:
1. prefix + missing MUST form a real, correctly spelled English word.
2. prefix is exactly the first 2 letters.
3. Choose exactly 10 words spread throughout.
4. No markdown bold/italic.
5. All 10 words must be unique.

Return the result as a raw JSON string (not wrapped in code blocks).
Example valid response:
"The study of {co:smology:the science of the origin and development of the universe.} involves..."
`;

  let attempt = 0;
  const maxCallAttempts = 5;
  while (attempt < maxCallAttempts) {
    attempt++;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.STRING,
          },
        },
      });

      const text = response.text?.trim();
      if (!text) return null;
      return JSON.parse(text);
    } catch (error: any) {
      const isRateLimit = error?.message?.includes("429") || 
                          error?.status === "RESOURCE_EXHAUSTED" || 
                          String(error).includes("429");
      if (isRateLimit && attempt < maxCallAttempts) {
        console.warn(`[RATE LIMIT] Hit 429 on generateSingle. Attempt ${attempt}/${maxCallAttempts}. Cooling down 30s before retry...`);
        await new Promise(resolve => setTimeout(resolve, 30000));
        continue;
      }
      console.error(`Error during single generation for "${topic}" (attempt ${attempt}):`, error?.message || error);
      return null;
    }
  }
  return null;
}

async function run() {
  const destPath = path.join(__dirname, "../src/hard_templates_flat.ts");
  let finalTemplates: string[] = [];

  if (fs.existsSync(destPath)) {
    try {
      // Import the file content or extract the array using regex
      const content = fs.readFileSync(destPath, "utf8");
      const match = content.match(/\[([\s\S]*)\]/);
      if (match) {
        // Parse the templates using a safe JSON-like array parsing or simple extraction
        const arrayStr = `[${match[1]}]`;
        // Evaluate the string safely or parse it
        finalTemplates = eval(arrayStr);
        console.log(`Loaded ${finalTemplates.length} existing templates from ${destPath}`);
      }
    } catch (e) {
      console.warn("Could not parse existing hard templates file, starting fresh.");
    }
  }

  const totalGoal = 200;
  
  while (finalTemplates.length < totalGoal) {
    const currentLen = finalTemplates.length;
    console.log(`\n=============================================`);
    console.log(`Progress: ${currentLen}/${totalGoal} templates`);
    console.log(`=============================================`);

    // We generate in batches of 5
    const batchSize = Math.min(5, totalGoal - currentLen);
    const batchTopics = topics.slice(currentLen, currentLen + batchSize);

    let batchSuccess = false;
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts && !batchSuccess) {
      attempts++;
      console.log(`\n--- Batch Attempt ${attempts}/${maxAttempts} for templates ${currentLen + 1} to ${currentLen + batchSize} ---`);

      const passages = await generateBatch(batchTopics);

      if (passages && passages.length === batchSize) {
        // Validate each of the passages in the batch
        const validPassages: string[] = [];
        const failedIndices: number[] = [];

        for (let i = 0; i < batchSize; i++) {
          const passage = passages[i];
          if (passage && validateTemplate(passage)) {
            validPassages.push(passage);
          } else {
            failedIndices.push(i);
          }
        }

        if (failedIndices.length === 0) {
          // Entire batch succeeded!
          finalTemplates.push(...validPassages);
          batchSuccess = true;
          console.log(`[SUCCESS] Entire batch of ${batchSize} templates generated successfully!`);
        } else {
          console.warn(`[PARTIAL] ${failedIndices.length}/${batchSize} templates failed validation. Retrying failed ones individually...`);
          // Generate failed ones individually
          let allIndividualSucceeded = true;
          const individualValidPassages: string[] = [...validPassages];

          for (const idx of failedIndices) {
            const topic = batchTopics[idx];
            let singleAttempts = 0;
            let singleSuccess = false;
            let finalSinglePassage = "";

            while (singleAttempts < 3 && !singleSuccess) {
              singleAttempts++;
              const singlePassage = await generateSingle(topic);
              if (singlePassage && validateTemplate(singlePassage)) {
                finalSinglePassage = singlePassage;
                singleSuccess = true;
              } else {
                console.warn(`Individual fallback attempt ${singleAttempts} failed validation for topic: "${topic}"`);
                await new Promise(resolve => setTimeout(resolve, 3000));
              }
            }

            if (singleSuccess) {
              individualValidPassages.splice(idx, 0, finalSinglePassage);
              console.log(`[SUCCESS] Individual fallback generated a valid template for topic: "${topic}"`);
            } else {
              allIndividualSucceeded = false;
              console.error(`[FAILURE] Could not generate a valid template for topic: "${topic}" after individual fallbacks.`);
              break;
            }
          }

          if (allIndividualSucceeded && individualValidPassages.length === batchSize) {
            finalTemplates.push(...individualValidPassages);
            batchSuccess = true;
            console.log(`[SUCCESS] Resolved all failed batch items individually!`);
          }
        }

        if (batchSuccess) {
          // Save progress immediately to disk!
          const fileContent = `export const HARD_TEMPLATES_200: string[] = [
${finalTemplates.map(t => `  ${JSON.stringify(t)}`).join(",\n")}
];
`;
          fs.writeFileSync(destPath, fileContent, "utf8");
          console.log(`[SAVED] Progress written to disk. Total templates: ${finalTemplates.length}`);
          
          // Small cooldown to prevent hitting limits
          console.log("Sleeping 4000ms cool-down...");
          await new Promise(resolve => setTimeout(resolve, 4000));
        } else {
          console.warn("Batch failed. Waiting 5 seconds before retrying batch...");
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } else {
        console.warn("Failed to get full batch. Waiting 5 seconds...");
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }

    if (!batchSuccess) {
      console.error(`Failed to generate batch starting at ${currentLen + 1}. Aborting to preserve existing progress.`);
      process.exit(1);
    }
  }

  console.log("\n=============================================");
  console.log("SUCCESS: All 200 Hard templates are generated!");
  console.log("=============================================");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
