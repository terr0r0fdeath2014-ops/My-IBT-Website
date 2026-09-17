import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Modality, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Set up large JSON payload support for base64 audio upload
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Helper: Convert raw 24kHz 16-bit Mono PCM buffer to Standard WAV Buffer
function pcmToWavBuffer(pcmBuffer: Buffer, sampleRate: number = 24000, numChannels: number = 1): Buffer {
  const byteRate = sampleRate * numChannels * 2;
  const blockAlign = numChannels * 2;
  const dataSize = pcmBuffer.length;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);

  // fmt sub-chunk
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20);  // AudioFormat (1 = PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // BitsPerSample

  // data sub-chunk
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Copy raw PCM bytes
  pcmBuffer.copy(buffer, 44);

  return buffer;
}

// High-Fidelity Studio Text-To-Speech Endpoint using Gemini TTS
app.post("/api/tts", async (req, res) => {
  try {
    const { text, voice, speaker } = req.body;
    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return res.status(400).json({ error: "Missing text to synthesize." });
    }

    // Map roles or requested voices to Gemini prebuilt voices:
    // 'Kore' (Natural Warm American Female), 'Puck' (Clear Lively American Male/Female),
    // 'Charon' (Deep Academic/Professor Male), 'Fenrir' (Articulate Clear Male), 'Zephyr' (Engaging Female)
    let selectedVoice = voice || "Kore";
    if (speaker) {
      const spk = speaker.toLowerCase();
      if (spk.includes("prof") || spk.includes("dr") || spk.includes("instructor") || spk.includes("lecturer")) {
        selectedVoice = "Charon";
      } else if (spk.includes("student a") || spk.includes("female") || spk.includes("woman") || spk.includes("emma") || spk.includes("sarah")) {
        selectedVoice = "Kore";
      } else if (spk.includes("student b") || spk.includes("male") || spk.includes("man") || spk.includes("david") || spk.includes("alex")) {
        selectedVoice = "Fenrir";
      }
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-tts-preview",
      contents: [{ parts: [{ text: text.trim() }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: selectedVoice },
          },
        },
      },
    });

    const candidate = response.candidates?.[0];
    const audioPart = candidate?.content?.parts?.find(p => p.inlineData && p.inlineData.data);

    if (audioPart?.inlineData?.data) {
      const rawPcmBase64 = audioPart.inlineData.data;
      const pcmBuffer = Buffer.from(rawPcmBase64, "base64");
      const mime = audioPart.inlineData.mimeType || "";

      // If already WAV or standard encoded container, return directly; else wrap raw 24kHz PCM into valid WAV
      let finalWavBase64 = rawPcmBase64;
      let finalMime = "audio/wav";

      if (!mime.includes("wav") && !mime.includes("mp3")) {
        const wavBuf = pcmToWavBuffer(pcmBuffer, 24000, 1);
        finalWavBase64 = wavBuf.toString("base64");
      }

      return res.json({
        audioBase64: finalWavBase64,
        mimeType: finalMime,
        voiceUsed: selectedVoice,
      });
    }

    throw new Error("No audio payload returned from TTS model.");
  } catch (error: any) {
    console.error("TTS Generation error:", error.message || error);
    res.status(500).json({ error: error.message || "Failed to generate studio voice." });
  }
});

// API endpoint to process audio
app.post("/api/transcribe-and-generate", async (req, res) => {
  try {
    const { audioBase64, mimeType } = req.body;
    if (!audioBase64) {
      return res.status(400).json({ error: "Missing audioBase64" });
    }

    const cleanedMimeType = mimeType || "audio/mp3";

    // Define fallback models to try sequentially in case of 503/high demand
    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-flash-latest',
      'gemini-3.5-flash'
    ];

    let response = null;
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        console.log(`Attempting transcription and generation using model: ${modelName}`);
        response = await ai.models.generateContent({
          model: modelName,
          contents: [
            {
              inlineData: {
                mimeType: cleanedMimeType,
                data: audioBase64
              }
            },
            "This is an audio file containing a TOEFL listening passage. Please transcribe it precisely. Divide the transcription into natural paragraphs/turns with the speaker's name. Also, generate exactly 3 high-quality, easy, and simple TOEFL iBT 'Listen & Respond' style questions based on this audio. The questions must be multiple-choice (4 options) and target key details, inferences, or vocabulary from the lecture/conversation."
          ],
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING, description: "TOEFL-style title for the passage" },
                type: { type: Type.STRING, description: "Either 'Lecture', 'Conversation', or 'Discussion'" },
                topic: { type: Type.STRING, description: "The academic topic, e.g., 'Campus Life'" },
                duration: { type: Type.STRING, description: "Approximate duration, e.g., '1:30'" },
                speaker: { type: Type.STRING, description: "Primary speaker name" },
                transcript: { type: Type.STRING, description: "The complete transcription of the audio file" },
                passageParts: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      speaker: { type: Type.STRING },
                      text: { type: Type.STRING }
                    },
                    required: ["speaker", "text"]
                  }
                },
                questions: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      question: { type: Type.STRING },
                      options: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                      },
                      correctAnswer: { type: Type.STRING },
                      explanation: { type: Type.STRING }
                    },
                    required: ["id", "question", "options", "correctAnswer", "explanation"]
                  }
                }
              },
              required: ["title", "type", "topic", "duration", "speaker", "transcript", "passageParts", "questions"]
            }
          }
        });
        
        if (response && response.text) {
          console.log(`Successfully completed transcription and generation with model: ${modelName}`);
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed or was unavailable:`, err.message || err);
        lastError = err;
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error("Failed to transcribe and generate using any of the available Gemini models.");
    }

    const jsonText = response.text;
    const data = JSON.parse(jsonText);
    res.json(data);
  } catch (error: any) {
    console.error("Transcription error:", error);
    res.status(500).json({ error: error.message || "Failed to process audio" });
  }
});

// API endpoint to evaluate TOEFL writing submissions
app.post("/api/writing-evaluate", async (req, res) => {
  try {
    const { taskType, promptInfo, essay } = req.body;
    if (!essay || essay.trim().length < 10) {
      return res.status(400).json({ error: "Please enter a longer essay to evaluate." });
    }

    const systemPrompt = `You are an expert TOEFL iBT Writing grader. Evaluate the student's essay based on official TOEFL rubrics.
    - Provide an official TOEFL score on a 0.0 to 5.0 scale (e.g., 4.5, 3.5).
    - Map this directly to a scaled TOEFL Writing Score from 0 to 30 (e.g. 5.0 maps to 30, 4.0 maps to 24, etc.).
    - Analyze the essay for grammar, spelling, punctuation, sentence structure, and topic development.
    - Identify specific mistakes across these 4 categories: 'grammar', 'spelling', 'sentence_structure', and 'topic_development'.
    - For each mistake, provide the EXACT original text snippet from the student's essay (must match substring in essay), the suggested correction, the category type ('grammar', 'spelling', 'sentence_structure', or 'topic_development'), and a helpful explanation.
    - Rate key aspects (Vocabulary, Coherence, Task Achievement) from 1 to 10.
    - Provide a completely rewritten, highly polished and academically superior version of their essay to show them how to write it like a 5.0-level expert.
    
    TASK CONTEXT:
    Task Type: ${taskType === 'integrated' ? 'Integrated Writing (Reading & Listening)' : taskType === 'academic' ? 'Writing for an Academic Discussion' : taskType === 'email' ? 'Write an Email Task (New 2026 TOEFL iBT)' : 'Independent Writing Task (Opinion & Persuasive Essay)'}
    Title: ${promptInfo.title || 'General Writing Practice'}
    Topic: ${promptInfo.topic || 'General Topic'}
    ${promptInfo.readingPassage ? `Reading Passage:\n${promptInfo.readingPassage}\n` : ''}
    ${promptInfo.lectureTranscript ? `Lecture Transcript/Audio content:\n${promptInfo.lectureTranscript}\n` : ''}
    ${promptInfo.questionPrompt ? `Question Prompt:\n${promptInfo.questionPrompt}\n` : ''}
    
    STUDENT'S ESSAY:
    """
    ${essay}
    """`;

    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-flash-latest',
      'gemini-3.5-flash'
    ];

    let response = null;
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        console.log(`Attempting essay evaluation using model: ${modelName}`);
        response = await ai.models.generateContent({
          model: modelName,
          contents: systemPrompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.NUMBER, description: "Grade on a 0 to 5 scale, e.g. 4.0" },
                scaledScore: { type: Type.NUMBER, description: "TOEFL scaled score from 0 to 30, e.g. 24" },
                feedback: { type: Type.STRING, description: "Detailed summary feedback highlighting strengths and structural improvements" },
                grammarIssues: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      original: { type: Type.STRING, description: "The exact original text snippet from student's essay" },
                      correction: { type: Type.STRING, description: "The suggested correction" },
                      explanation: { type: Type.STRING, description: "Why the correction was made" },
                      type: { type: Type.STRING, description: "Category: 'grammar', 'spelling', 'sentence_structure', or 'topic_development'" }
                    },
                    required: ["original", "correction", "explanation", "type"]
                  }
                },
                vocabularyScore: { type: Type.NUMBER, description: "Score from 1 to 10 for vocabulary variety" },
                coherenceScore: { type: Type.NUMBER, description: "Score from 1 to 10 for logical organization and transitions" },
                taskAchievementScore: { type: Type.NUMBER, description: "Score from 1 to 10 for fully answering the prompt" },
                improvedVersion: { type: Type.STRING, description: "Highly polished version of the essay written at a 5.0 level" }
              },
              required: ["score", "scaledScore", "feedback", "grammarIssues", "vocabularyScore", "coherenceScore", "taskAchievementScore", "improvedVersion"]
            }
          }
        });

        if (response && response.text) {
          console.log(`Successfully completed essay evaluation with model: ${modelName}`);
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed or was unavailable for evaluation:`, err.message || err);
        lastError = err;
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error("Failed to evaluate essay using any of the available Gemini models.");
    }

    const data = JSON.parse(response.text);
    res.json(data);
  } catch (error: any) {
    console.error("Essay evaluation error:", error);
    res.status(500).json({ error: error.message || "Failed to evaluate essay" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
