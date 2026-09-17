import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define 210 highly advanced scholarly topics
const topics = [
  "Phenomenology, ontology, and Martin Heidegger's Dasein",
  "Quantum electrodynamics, perturbation theory, and Feynman diagrams",
  "Post-structuralism, grammatology, and Jacques Derrida's deconstruction",
  "Stochastic calculus, Brownian motion, and Black-Scholes-Merton model",
  "Epistemic injustice, testimonial credibility, and Miranda Fricker's framework",
  "Epigenetic landscapes, canalization, and Waddington's developmental biology",
  "Homotopy type theory, univalence axiom, and constructive mathematics",
  "Neurobiology of consciousness, thalamocortical loops, and integrated information theory",
  "Deconstructive architectural philosophy, Peter Eisenman, and non-place",
  "Behavioral finance, heuristics, and the overreaction hypothesis",
  "Biopolitics, biopower, and Michel Foucault's state sovereignty",
  "Quantum chromodynamics, asymptotic freedom, and quark-gluon plasma",
  "Historiography, teleology, and the Whig interpretation of history",
  "Structural geology, ductile deformation, and shear zone kinematics",
  "Algorithmic complexity, P versus NP conundrum, and Cook-Levin theorem",
  "Marxian value theory, commodity fetishism, and surplus value extraction",
  "Cognitive linguistics, conceptual metaphor theory, and George Lakoff",
  "Non-equilibrium thermodynamics, dissipative structures, and Ilya Prigogine",
  "Astrophysics, magnetars, and synchrotron radiation mechanisms",
  "Philosophical aesthetics, the sublime, and Jean-Francois Lyotard",
  "Molecular oncology, tumor suppressor genes, and Knudson's two-hit hypothesis",
  "Grammaticalization, reanalysis, and semantic bleaching in historical linguistics",
  "Political philosophy, communitarianism, and Alasdair MacIntyre's After Virtue",
  "Information theory, Kolmogorov complexity, and algorithmic probability",
  "Quantum computing, Shor's factoring algorithm, and modular arithmetic",
  "Developmental economics, institutional quality, and Daron Acemoglu",
  "Immunology, immunological tolerance, and clonal deletion theory",
  "Theoretical linguistics, X-bar theory, and syntactic hierarchies",
  "Philosophical logic, modal logic, and Kripke semantics",
  "Astrophysics, core-collapse supernovae, and r-process nucleosynthesis",
  "Cybernetics, second-order feedback, and Heinz von Foerster",
  "Neuroanatomy, optogenetic neural circuit manipulation, and functional connectivity",
  "Environmental ethics, deep ecology, and Arne Naess",
  "Condensed matter physics, topological insulators, and Dirac cones",
  "Evolutionary biology, punctuated equilibrium, and Stephen Jay Gould",
  "Critical theory, communicative action, and Jurgen Habermas",
  "Organic chemistry, asymmetric organocatalysis, and List-Barbas reaction",
  "Post-colonial theory, subaltern studies, and Gayatri Chakravorty Spivak",
  "Atmospheric physics, radiative-convective equilibrium, and greenhouse effect feedback",
  "Stochastic processes, Markov chains, and stationary distributions",
  "Philosophical epistemology, externalism versus internalism, and reliabilism",
  "Macroeconomics, dynamic stochastic general equilibrium models, and rational expectations",
  "Proteomics, mass spectrometry, and peptide de novo sequencing",
  "Evolutionary game theory, Hawk-Dove model, and replicator dynamics",
  "Mathematical topology, algebraic topology, and fundamental groups",
  "Behavioral ecology, optimal foraging theory, and marginal value theorem",
  "Cosmology, cosmic inflation, and scalar field dynamics",
  "Political philosophy, deliberative democracy, and public reason",
  "Statistical mechanics, Ising model, and phase transitions",
  "Marine biogeochemistry, ocean acidification, and carbonate chemistry equilibrium",
  "Literary theory, reader-response criticism, and Stanley Fish",
  "Organic synthesis, transition-metal catalyzed cross-coupling, and Suzuki-Miyaura reaction",
  "Historiography, the Annales School, and Fernand Braudel's longue duree",
  "Quantum mechanics, decoherence, and many-worlds interpretation",
  "Theoretical computer science, lambda calculus, and functional programming foundations",
  "Sociology of science, actor-network theory, and Bruno Latour",
  "Neuroscience, predictive coding framework, and free energy principle",
  "Paleoclimatology, Milankovitch cycles, and orbital forcing mechanisms",
  "Philosophy of language, speech act theory, and J.L. Austin",
  "Cell biology, autophagy pathways, and lysosomal degradation",
  "Analytical chemistry, chromatography-mass spectrometry, and high-resolution detection",
  "Astrophysics, active galactic nuclei, and supermassive black hole accretion",
  "Geology, metamorphic facies, and pressure-temperature-time paths",
  "History of mathematics, non-Euclidean geometry, and Lobachevsky",
  "Evolutionary biology, kin selection, inclusive fitness, and Hamilton's rule",
  "Social theory, hyperreality, simulacra, and Jean Baudrillard",
  "Astronomy, gravitational wave detection, and LIGO interferometry",
  "Organic synthesis, green chemistry, and atom economy",
  "Cognitive psychology, working memory models, and Baddeley's multicomponent system",
  "Human-computer interaction, cognitive walkthroughs, and usability engineering",
  "Cultural anthropology, thick description, and Clifford Geertz",
  "Cryptography, elliptic curve cryptography, and discrete logarithm problem",
  "Oceanography, western boundary currents, and Gulf Stream dynamics",
  "Epistemology, the problem of induction, and David Hume",
  "Evolutionary genetics, horizontal gene transfer, and phylogenetic networks",
  "Metaphysics, mereology, and the relation of parts to wholes",
  "Modernist literature, high modernism, and T.S. Eliot's Wasteland",
  "Neuroscience, neurogenesis, and adult hippocampal plasticity",
  "Environmental science, planetary boundaries, and anthropogenic impact",
  "Mechanical engineering, computational fluid dynamics, and Navier-Stokes equations",
  "Astrophysics, cosmic microwave background radiation, and anisotropy",
  "Political science, neorealism, structural realism, and Kenneth Waltz",
  "Behavioral psychology, classical conditioning, and neural substrates of fear",
  "Quantum mechanics, Heisenberg uncertainty principle, and wave-packet reduction",
  "Philosophy of law, natural law theory, and Thomas Aquinas",
  "Molecular biology, reverse transcription, and retroviral replication cycles",
  "Architecture, parametricism, and algorithmic design",
  "Sociology of religion, secularization thesis, and modern critiques",
  "Computer science, formal verification, and model checking",
  "History of medicine, sanitation movement, and John Snow's epidemiological mapping",
  "Evolutionary biology, sympatric speciation, and disruptive selection",
  "Geology, paleomagnetism, and magnetic reversal stratigraphy",
  "Environmental science, nitrogen cycle, and industrial Haber-Bosch impact",
  "Organic chemistry, pericyclic reactions, and Woodward-Hoffmann rules",
  "Astrophysics, baryonic acoustic oscillations, and cosmic distance ladder",
  "Philosophy, utilitarianism, consequentialism, and John Stuart Mill",
  "Immunology, major histocompatibility complex, and antigen presentation",
  "Inorganic chemistry, crystal field theory, and d-orbital splitting",
  "Archaeology, taphonomy, and site formation processes",
  "Sociology, social capital, cultural capital, and Pierre Bourdieu",
  "Linguistics, Sapir-Whorf hypothesis, and linguistic relativity",
  "Philosophy, phenomenology, intentionality, and Franz Brentano",
  "Astrophysics, dark energy, cosmological constant, and vacuum energy",
  "Cell biology, endosymbiotic theory, and organellar genomes",
  "Neuroscience, action potential propagation, and myelin sheath saltation",
  "Microbiology, CRISPR-Cas9 adaptive immunity in prokaryotes",
  "Political philosophy, Rawlsian justice, and original position",
  "Quantum mechanics, scanning tunneling microscopy, and electron tunneling",
  "History of science, scientific revolutions, and Thomas Kuhn",
  "Cognitive psychology, heuristics and biases, and prospect theory",
  "Atmospheric science, stratospheric ozone chemistry, and Chapman cycle",
  "Linguistics, phonetics, acoustical properties of speech sounds",
  "Philosophy, pragmatism, fallibilism, and Charles Sanders Peirce",
  "Economics, tragedy of the commons, and common-pool resource management",
  "Ecology, trophic cascades, and keystone species dynamics",
  "Sociology, dramaturgy, impression management, and Erving Goffman",
  "Astrophysics, neutron star interiors, and strange quark matter",
  "Chemistry, coordination compounds, and Werner's coordination theory",
  "Linguistics, morphological parsing, and inflectional paradigms",
  "History, French Revolution, Jacobin radicalism, and Robespierre",
  "Philosophy, existentialism, radical freedom, and Jean-Paul Sartre",
  "Biology, synthetic biology, and genetic circuit design",
  "Physics, thermodynamics, and thermal fluctuations",
  "Earth science, tectonic plates, and mantle convection plumes",
  "Neuroscience, retrograde synaptic transmission, and endocannabinoids",
  "Anthropology, historical particularism, and Franz Boas",
  "Political science, majoritarianism versus consociationalism, and Arend Lijphart",
  "Astronomy, asteroid orbital resonance, and Kirkwood gaps",
  "Economics, price elasticity of demand, and consumer surplus",
  "Philosophy, post-modernism, grand narratives, and Jean-Francois Lyotard",
  "Biology, oxidative phosphorylation, and chemiosmotic hypothesis",
  "History, ancient Egypt, Amarna period, and Akhenaten's monotheism",
  "Sociology, social alienation, and Karl Marx's early writings",
  "Psychology, analytical psychology, and Carl Jung's archetypes",
  "Computer science, object-oriented software engineering, and design patterns",
  "Linguistics, formal semantics, and Montague grammar",
  "Astronomy, exoplanet atmospheric characterization, and transmission spectroscopy",
  "Ecology, island biogeography, equilibrium theory, and island conservation",
  "Physics, Maxwell's electromagnetic equations, and electromagnetic wave propagation",
  "Political philosophy, state of nature, social contract, and Locke",
  "Chemistry, chemical kinetics, transition state theory, and Eyring equation",
  "History, Meiji Restoration, industrialization, and samurai rebellions",
  "Philosophy, virtue ethics, eudaimonia, and Aristotle",
  "Biology, photosynthetic carbon fixation, and Calvin-Benson-Bassham cycle",
  "Mathematics, fractals, self-similarity, and Hausdorff dimension",
  "Economics, classical trade theory, and Ricardian model",
  "Sociology, social stratification, class, status, and Max Weber",
  "Psychology, radical behaviorism, operant conditioning, and B.F. Skinner",
  "Computer science, dynamic programming, and memoization techniques",
  "Linguistics, generative syntax, and minimalist program",
  "Astronomy, cosmic rays, spallation, and interstellar medium",
  "Ecology, ecological niche theory, and multidimensional niche space",
  "Physics, gravitational lensing, and general relativity verification",
  "Political philosophy, historical materialism, and Marxist dialectic",
  "Chemistry, acid-base chemistry, and Bronsted-Lowry theory",
  "History, Roman Empire decline, and Edward Gibbon's interpretations",
  "Philosophy, rationalism, innate ideas, and Spinoza's ethics",
  "Biology, mitotic spindle assembly, and chromosome segregation",
  "Mathematics, number theory, prime distribution, and prime number theorem",
  "Economics, financial economics, and efficient market hypothesis",
  "Sociology, power elite, and military-industrial complex",
  "Psychology, humanistic psychology, self-actualization, and Carl Rogers",
  "Computer science, algorithmic complexity, and NP-completeness",
  "Linguistics, sociolinguistic variation, and William Labov",
  "Astronomy, Kuiper belt dynamics, and Neptune resonance",
  "Ecology, ecological succession, climax communities, and forest dynamics",
  "Physics, special relativity, Lorentz transformations, and spacetime intervals",
  "Political philosophy, distributive justice, and John Rawls",
  "Chemistry, chemical thermodynamics, and chemical equilibrium",
  "History, Silk Road transmission of Buddhism, and cultural syncretism",
  "Philosophy, epistemology, radical skepticism, and Descartes' demon",
  "Biology, structural biochemistry, and X-ray crystallography of proteins",
  "Mathematics, probability theory, central limit theorem, and normal distribution",
  "Economics, oligopolistic competition, and Cournot duopoly model",
  "Sociology, bureaucratization, iron cage, and rationalization",
  "Psychology, cognitive development, schema theory, and Jean Piaget",
  "Computer science, asymmetric cryptography, and Diffie-Hellman protocol",
  "Linguistics, pragmatics, conversational implicatures, and Paul Grice",
  "Astronomy, Oort cloud origin, and stellar perturbations",
  "Ecology, population ecology, density-dependence, and logistic growth",
  "Physics, Lagrangian mechanics, action principle, and Euler-Lagrange equations",
  "Political philosophy, communitarian critique of liberalism, and Michael Sandel",
  "Chemistry, molecular orbital theory, and homonuclear diatomic molecules",
  "History, Byzantine Empire preservation of Roman law, and Justinian",
  "Philosophy, physicalism, mind-body identity theory, and functionalism",
  "Biology, protein folding thermodynamics, and Levinthal's paradox",
  "Mathematics, chaotic systems, and Mandelbrot set geometry",
  "Economics, monopoly pricing, deadweight loss, and price discrimination",
  "Physics, string theory, supersymmetry, and extra dimensions",
  "Biology, gene expression regulation, and operon models",
  "Philosophy, political liberalism, and overlapping consensus",
  "Linguistics, historical linguistics, comparative method, and proto-languages",
  "Chemistry, ligand field theory, and magnetic properties of complexes",
  "Neuroscience, cortical plasticity, and sensory deprivation studies",
  "Economics, macroeconomics, Phillips curve, and stagflation",
  "Sociology, panopticism, surveillance, and Foucault",
  "Computer science, attention mechanisms, transformers, and deep learning",
  "Astronomy, gravitational wave astronomy, and binary neutron star mergers"
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
  
  const prompt = `You are an elite curriculum developer for an advanced academic and professional English reading and vocabulary application.
Write 5 distinct high-quality, engaging, and unique academic/scholarly/scientific reading passages, one for each of the following 5 topics:
${topicsBatch.map((t, idx) => `${idx + 1}. ${t}`).join("\n")}

For EACH passage:
1. It must be exactly 8 to 10 lines of text (approx 120-150 words).
2. The language and style must be extremely sophisticated, advanced, and professional. The vocabulary, sentence structure density, and logical flow should be very challenging (suitable for graduate-level students, high-end TOEFL iBT takers, or academic researchers).
3. Inside the passage, you MUST embed exactly 10 advanced academic/professional vocabulary words using the following brackets format:
{prefix:missing:hint}

Where:
- prefix: the first 2 letters of the word (in lowercase, e.g., 'ca' for 'catastrophe'. If the word is capitalized at the start of a sentence, capitalize the first letter, e.g., 'Un' for 'Universal').
- missing: the remainder of the word (e.g., 'tastrophe' for 'catastrophe'). No spaces or punctuation.
- hint: a short, clear, dictionary definition of the word.

Rules for bracket words:
1. prefix + missing MUST form a real, correctly spelled, highly advanced English word (e.g., epistemology, hegemony, paradigm, conundrum, mitigate, dynamic, structural, theoretical, empirical, cognitive). Do not use basic words.
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

  const modelsToTry = [
    "gemini-flash-latest",
    "gemini-3.5-flash",
    "gemini-2.5-flash",
    "gemini-3.1-flash-lite"
  ];

  let attempt = 0;
  const maxCallAttempts = 5;
  while (attempt < maxCallAttempts) {
    attempt++;
    let lastErrorMsg = "";

    for (const modelName of modelsToTry) {
      try {
        console.log(`[Batch Attempt ${attempt}] Trying model: ${modelName}`);
        const response = await ai.models.generateContent({
          model: modelName,
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

        // Strict 10-second delay after every API call to stay under rate limit of 20 RPM
        console.log("Sleeping 10s rate-limit delay...");
        await new Promise(resolve => setTimeout(resolve, 10000));

        const text = response.text?.trim();
        if (!text) {
          console.warn(`Empty response from model ${modelName}`);
          continue;
        }
        const passages: string[] = JSON.parse(text);
        return passages;
      } catch (error: any) {
        lastErrorMsg = error?.message || String(error);
        console.warn(`Model ${modelName} failed or was unavailable: ${lastErrorMsg.slice(0, 150)}`);
        // Wait 2 seconds before trying the next model in the list
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.error(`All models failed in batch attempt ${attempt}/${maxCallAttempts}. Last error: ${lastErrorMsg}`);
    if (attempt < maxCallAttempts) {
      console.log("Cooling down 30s before trying next batch attempt...");
      await new Promise(resolve => setTimeout(resolve, 30000));
    }
  }
  return null;
}

// Generates a single passage for a single topic as a fallback
async function generateSingle(topic: string): Promise<string | null> {
  console.log(`Generating single fallback template for topic: "${topic}"`);
  
  const prompt = `You are an elite curriculum developer for an advanced academic and professional English reading and vocabulary application.
Write a high-quality, engaging, and unique academic/scholarly/scientific reading passage on the topic: "${topic}".

The passage must be exactly 8 to 10 lines of text (approx 120-150 words).
The language and style must be extremely sophisticated, advanced, and professional. The vocabulary, sentence structure density, and logical flow should be very challenging (suitable for graduate-level students, high-end TOEFL iBT takers, or academic researchers).
Inside the passage, you MUST embed exactly 10 advanced academic/professional vocabulary words using the following brackets format:
{prefix:missing:hint}

Where:
- prefix: the first 2 letters of the word (in lowercase, e.g., 'ca' for 'catastrophe'. If capitalized at sentence start, e.g., 'Un' for 'Universal').
- missing: the remainder of the word. No spaces or punctuation.
- hint: a short, clear, dictionary definition.

Rules:
1. prefix + missing MUST form a real, correctly spelled, highly advanced English word (e.g., epistemology, hegemony, paradigm, conundrum, mitigate, dynamic, structural, theoretical, empirical, cognitive). Do not use basic words.
2. prefix is exactly the first 2 letters.
3. Choose exactly 10 words spread throughout.
4. No markdown bold/italic.
5. All 10 words must be unique.

Return the result as a raw JSON string (not wrapped in code blocks).
Example valid response:
"The study of {co:smology:the science of the origin and development of the universe.} involves..."
`;

  const modelsToTry = [
    "gemini-flash-latest",
    "gemini-3.5-flash",
    "gemini-2.5-flash",
    "gemini-3.1-flash-lite"
  ];

  let attempt = 0;
  const maxCallAttempts = 5;
  while (attempt < maxCallAttempts) {
    attempt++;
    let lastErrorMsg = "";

    for (const modelName of modelsToTry) {
      try {
        console.log(`[Single Attempt ${attempt}] Trying model: ${modelName} for "${topic}"`);
        const response = await ai.models.generateContent({
          model: modelName,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.STRING,
            },
          },
        });

        // Strict 10-second delay after every API call to stay under rate limit of 20 RPM
        console.log("Sleeping 10s rate-limit delay...");
        await new Promise(resolve => setTimeout(resolve, 10000));

        const text = response.text?.trim();
        if (!text) {
          console.warn(`Empty response from model ${modelName} for topic "${topic}"`);
          continue;
        }
        return JSON.parse(text);
      } catch (error: any) {
        lastErrorMsg = error?.message || String(error);
        console.warn(`Model ${modelName} failed or was unavailable for single topic "${topic}": ${lastErrorMsg.slice(0, 150)}`);
        // Wait 2 seconds before trying the next model
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.error(`All models failed in single attempt ${attempt}/${maxCallAttempts} for topic "${topic}". Last error: ${lastErrorMsg}`);
    if (attempt < maxCallAttempts) {
      console.log("Cooling down 30s before trying next single attempt...");
      await new Promise(resolve => setTimeout(resolve, 30000));
    }
  }
  return null;
}

async function run() {
  const destPath = path.join(__dirname, "../src/advanced_templates_flat.ts");
  let finalTemplates: string[] = [];

  if (fs.existsSync(destPath)) {
    try {
      const content = fs.readFileSync(destPath, "utf8");
      const match = content.match(/\[([\s\S]*)\]/);
      if (match) {
        const arrayStr = `[${match[1]}]`;
        finalTemplates = eval(arrayStr);
        console.log(`Loaded ${finalTemplates.length} existing templates from ${destPath}`);
      }
    } catch (e) {
      console.warn("Could not parse existing advanced templates file, starting fresh.");
    }
  }

  const totalGoal = 200;
  
  while (finalTemplates.length < totalGoal) {
    const currentLen = finalTemplates.length;
    console.log(`\n=============================================`);
    console.log(`Progress: ${currentLen}/${totalGoal} templates`);
    console.log(`=============================================`);

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
          finalTemplates.push(...validPassages);
          batchSuccess = true;
          console.log(`[SUCCESS] Entire batch of ${batchSize} templates generated successfully!`);
        } else {
          console.warn(`[PARTIAL] ${failedIndices.length}/${batchSize} templates failed validation. Retrying failed ones individually...`);
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
          const fileContent = `export const ADVANCED_TEMPLATES_200: string[] = [
${finalTemplates.map(t => `  ${JSON.stringify(t)}`).join(",\n")}
];
`;
          fs.writeFileSync(destPath, fileContent, "utf8");
          console.log(`[SAVED] Progress written to disk. Total templates: ${finalTemplates.length}`);
          
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
  console.log("SUCCESS: All 200 Advanced templates are generated!");
  console.log("=============================================");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
