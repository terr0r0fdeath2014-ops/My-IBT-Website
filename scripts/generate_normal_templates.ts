import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { NORMAL_TEMPLATES_200 as existingTemplates } from "../src/normal_templates_flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define unique topics for the passages
const topics = [
  "Deep-space exploration and Voyager probes",
  "The history of the printing press and Gutenberg",
  "Coral reef restoration and artificial structures",
  "The psychology of memory and retrieval",
  "Quantum physics and superposition basics",
  "Glacial erosion and fjord formation",
  "The biomechanics of bird flight",
  "Architectural acoustics in concert halls",
  "History of the telescope and Edwin Hubble",
  "The invention of the microscope and cell theory",
  "Plant communication through mycorrhizal networks",
  "Deep sea bioluminescence and anglerfish",
  "Human memory and the hippocampus function",
  "How touchscreens use electrical capacitance",
  "The physics of rainbow formation",
  "Geothermal energy and tectonic hotspots",
  "The carbon cycle and global sinks",
  "Early cave paintings and paleolithic art",
  "How wind turbines generate clean electricity",
  "The anatomy and function of the human heart",
  "History of cryptography and the Enigma machine",
  "The physics of sailing against the wind",
  "Plate tectonics and the Ring of Fire",
  "How honeybees construct hexagonal combs",
  "The transition from bronze to iron ages",
  "Monarch butterfly navigation and magnets",
  "The chemistry of fermentation in food",
  "How noise-canceling headphones block sound",
  "The life cycle of a frog and metamorphosis",
  "The design of medieval castles and fortifications",
  "How standard time zones were established",
  "The social structure of leafcutter ants",
  "The discovery of penicillin by Fleming",
  "The physical properties of water density",
  "The physics of roller coaster loop design",
  "History of the bicycle and early designs",
  "How the human eye focuses on light",
  "The geological formation of the Grand Canyon",
  "The invention of the battery by Alessandro Volta",
  "How desert animals survive without water",
  "The function of enzymes in human digestion",
  "The history of standardizing measurement units",
  "The science of lightning and static charge",
  "The design of modern suspension bridges",
  "The history of chocolate from Aztec culture",
  "The biology of tree rings and dendrochronology",
  "How GPS satellites calculate precise location",
  "The history of the library of Alexandria",
  "The social dynamics of dolphin pods",
  "How microchips are made from silicon",
  "The role of the atmosphere in filtering UV light",
  "The physics of musical pitch and frequency",
  "The history of early photography and daguerreotypes",
  "The life of Marie Curie and radiation research",
  "The architectural geometry of Gothic vaults",
  "How the human kidney filters blood plasma",
  "The history of the transcontinental railroad",
  "The ecology of mangrove forests and roots",
  "The mechanics of antique pendulum clocks",
  "The discovery of DNA double helix structure",
  "The physics of hot air balloon buoyancy",
  "The history of writing systems and cuneiform",
  "How the immune system creates antibodies",
  "The formation of caves and stalactites",
  "The psychology of decision making under stress",
  "The life cycle of a salmon and upstream migration",
  "The architecture of ancient Mayan pyramids",
  "The discovery of the Rosetta Stone translation",
  "How fiber optic cables transmit light data",
  "The physics of sound echoes and sonar",
  "The history of the spice trade routes",
  "How soil composition affects agricultural yields",
  "The construction and history of Stonehenge",
  "The engineering of early steam locomotives",
  "The role of public parks in urban planning",
  "The biology of bioluminescent mushrooms",
  "The physics of magnetic resonance imaging (MRI)",
  "The history of hand-drawn animation techniques",
  "How the human body regulates temperature",
  "The ecological importance of beaver dams",
  "The proportions of classical Greek architecture",
  "The history of mapmaking and navigation charts",
  "The mental health benefits of nature walks",
  "The science of weather forecasting and radar",
  "The physiological adaptations of Emperor penguins",
  "The history and impact of the printing press",
  "How modern lasers are generated and focused",
  "The history of telescopes from Galileo to Webb",
  "The role of stomach acid in breaking food",
  "The preservation of historical parchment manuscripts",
  "The physics of surfing waves and breaks",
  "The life and contributions of Ada Lovelace",
  "The cognitive effects of learning musical instruments",
  "The geological formation of basalt columns",
  "How solar panels convert photons to voltage",
  "The behavior of deep ocean giant squids",
  "The physics of wireless induction charging",
  "The historical engineering of the Panama Canal",
  "The structure of the inner ear cochlea",
  "The conservation efforts for the Siberian tiger",
  "The science of glaciers and calving icebergs"
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
  }
  return true;
}

async function generateSingle(topic: string, index: number): Promise<string | null> {
  console.log(`Generating template ${index + 1}/200 for topic: "${topic}"`);
  
  const prompt = `You are a curriculum developer for an intermediate English reading application.
Write a high-quality, engaging, and unique reading passage on the topic: "${topic}".

The passage must be exactly 8 to 10 lines of text (approx 120-150 words).
Inside the passage, you MUST embed exactly 10 intermediate-level vocabulary words using the following brackets format:
{prefix:missing:hint}

Where:
- prefix: the first 2 letters of the word (in lowercase, e.g., 'in' for 'interest', 'co' for 'community'. If the word is capitalized at the start of a sentence, capitalize the first letter, e.g., 'Th' for 'The' or 'An' for 'Ancient').
- missing: the remainder of the word (e.g., 'terest' for 'interest', 'mmunity' for 'community').
- hint: a short, clear, dictionary definition of the word.

Rules for bracket words:
1. prefix + missing MUST form a real English word. No spelling errors.
2. The prefix MUST be exactly the first 2 letters.
3. Choose exactly 10 words spread throughout the passage.
4. Do NOT use markdown bold/italic inside the passage.
5. All 10 words in the passage must be unique.

Return the result as a raw JSON string (not wrapped in code blocks).
Example of a valid response:
"Reading is one of the most {im:portant:Of great significance or value.} skills that we can develop..."
`;

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
    if (!text) {
      console.warn("Received empty response from Gemini API");
      return null;
    }
    const passage: string = JSON.parse(text);
    return passage;
  } catch (error: any) {
    console.error(`Error during generation for topic "${topic}":`, error?.message || error);
    // Return special string if we hit 429
    if (error?.message && error.message.includes("429")) {
      return "RATE_LIMIT_429";
    }
    return null;
  }
}

async function run() {
  const finalTemplates: string[] = [...existingTemplates];
  const totalGoal = 200;
  
  console.log(`Starting generation. Existing templates: ${existingTemplates.length}. Target: ${totalGoal}.`);
  
  if (finalTemplates.length >= totalGoal) {
    console.log("Already have 200 or more templates! No generation needed.");
    return;
  }
  
  const initialCount = existingTemplates.length;
  const destPath = path.join(__dirname, "../src/normal_templates_flat.ts");

  for (let N = finalTemplates.length; N < totalGoal; N++) {
    // We want unique topics from topics array. Topic index starts from 0 for any newly added template.
    // e.g. template 101 (index 101) uses topics[0] since initialCount was 101.
    const topicIndex = N - initialCount;
    if (topicIndex < 0 || topicIndex >= topics.length) {
      console.error(`Error: No topic defined for template index ${N}. (Topic index ${topicIndex})`);
      process.exit(1);
    }
    
    const topic = topics[topicIndex];
    let attempts = 0;
    let success = false;
    const maxAttempts = 5;
    
    while (attempts < maxAttempts && !success) {
      attempts++;
      console.log(`\n--- Template ${N + 1}/${totalGoal} | Attempt ${attempts}/${maxAttempts} ---`);
      
      const passage = await generateSingle(topic, N);
      if (passage === "RATE_LIMIT_429") {
        console.warn("Hit 429 rate limit. Waiting 25 seconds to cool down...");
        await new Promise(resolve => setTimeout(resolve, 25000));
        N--; // retry this index in the next loop iteration
        success = true; // exit the retry attempts loop so we move to next N iteration (which is decremented, so same index)
        break;
      }
      
      if (passage) {
        const isValid = validateTemplate(passage);
        if (isValid) {
          finalTemplates.push(passage);
          
          // Write progress immediately to file!
          const fileContent = `export const NORMAL_TEMPLATES_200: string[] = [
${finalTemplates.map(t => `  ${JSON.stringify(t)}`).join(",\n")}
];
`;
          fs.writeFileSync(destPath, fileContent, "utf8");
          console.log(`[SAVED] Successfully saved template ${N + 1}/${totalGoal} for "${topic}" to disk.`);
          success = true;
          
          // Strict cool-down delay of 6 seconds to avoid ever hitting the 15 RPM limit
          console.log("Sleeping for 6000ms cool-down...");
          await new Promise(resolve => setTimeout(resolve, 6000));
        } else {
          console.warn(`Template failed validation. Retrying in 5 seconds...`);
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } else {
        console.warn(`Failed to generate passage. Retrying in 5 seconds...`);
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    if (!success) {
      console.error(`Failed to generate a valid template for "${topic}" after ${maxAttempts} attempts. Aborting script to preserve progress.`);
      process.exit(1);
    }
  }
  
  console.log("All 200 templates generated and verified successfully!");
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
