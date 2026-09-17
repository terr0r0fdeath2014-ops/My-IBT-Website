// High-Quality Human Studio Audio & Speech Engine (Gemini Neural TTS + Browser Fallback)
// Delivers clear, natural, non-robotic pronunciation for TOEFL iBT Listening & Speaking

export interface VoiceOption {
  voice?: SpeechSynthesisVoice;
  name: string;
  label: string;
  gender: 'female' | 'male' | 'neutral';
  accent: string;
  isStudioAI: boolean;
}

// In-memory audio cache so the exact same phrase doesn't call the API twice
const audioBlobCache = new Map<string, string>();

class NaturalVoiceEngine {
  private activeAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSynthesizing: boolean = false;
  private voices: SpeechSynthesisVoice[] = [];
  private isLoaded: boolean = false;
  private listeners: (() => void)[] = [];
  private currentSessionId: number = 0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const all = window.speechSynthesis.getVoices();
    if (all.length > 0) {
      this.voices = all;
      this.isLoaded = true;
      this.listeners.forEach(cb => cb());
    }
  }

  public onVoicesReady(callback: () => void) {
    if (this.isLoaded) {
      callback();
    } else {
      this.listeners.push(callback);
    }
  }

  // Pre-configured Studio Neural AI Voices powered by Gemini
  public getStudioAIVoices(): VoiceOption[] {
    return [
      {
        name: 'Kore',
        label: 'Kore (Studio HD • Natural Warm Female)',
        gender: 'female',
        accent: 'American (Standard)',
        isStudioAI: true
      },
      {
        name: 'Puck',
        label: 'Puck (Studio HD • Crisp Dynamic Natural)',
        gender: 'male',
        accent: 'American (Standard)',
        isStudioAI: true
      },
      {
        name: 'Charon',
        label: 'Charon (Studio HD • Academic Professor / Deep Male)',
        gender: 'male',
        accent: 'American (Academic)',
        isStudioAI: true
      },
      {
        name: 'Fenrir',
        label: 'Fenrir (Studio HD • Articulate Campus Lecturer)',
        gender: 'male',
        accent: 'American (Lecturer)',
        isStudioAI: true
      },
      {
        name: 'Zephyr',
        label: 'Zephyr (Studio HD • Engaging Dialogue Female)',
        gender: 'female',
        accent: 'American (Collegiate)',
        isStudioAI: true
      }
    ];
  }

  public getAvailableEnglishVoices(): VoiceOption[] {
    const studioVoices = this.getStudioAIVoices();

    if (this.voices.length === 0 && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices();
    }

    const browserVoices: VoiceOption[] = this.voices
      .filter(v => v.lang.startsWith('en'))
      .map(v => ({
        voice: v,
        name: v.name,
        label: `${v.name} (${v.lang})`,
        gender: v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('samantha') || v.name.toLowerCase().includes('karen') ? 'female' : 'male',
        accent: v.lang.includes('GB') ? 'British' : 'American',
        isStudioAI: false
      }));

    return [...studioVoices, ...browserVoices];
  }

  // Generate or retrieve audio from Gemini Neural TTS API
  public async fetchStudioAudio(text: string, voiceName: string = 'Kore', speaker?: string): Promise<string> {
    const cacheKey = `${voiceName}_${speaker || ''}_${text.trim()}`;
    if (audioBlobCache.has(cacheKey)) {
      return audioBlobCache.get(cacheKey)!;
    }

    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, voice: voiceName, speaker })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to fetch studio voice audio');
    }

    const data = await res.json();
    if (!data.audioBase64) {
      throw new Error('No audio data in response');
    }

    // Convert Base64 to Blob URL
    const binary = atob(data.audioBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
    const blobUrl = URL.createObjectURL(blob);

    audioBlobCache.set(cacheKey, blobUrl);
    return blobUrl;
  }

  public async speak(
    text: string,
    options: {
      rate?: number;
      voiceName?: string;
      speaker?: string;
      gender?: 'female' | 'male' | 'any';
      onStart?: () => void;
      onEnd?: () => void;
      onError?: () => void;
    } = {}
  ): Promise<void> {
    this.stop();
    const sessionId = ++this.currentSessionId;

    if (!text || text.trim().length === 0) {
      if (options.onEnd) options.onEnd();
      return;
    }

    const selectedVoice = options.voiceName || (options.gender === 'female' ? 'Kore' : options.gender === 'male' ? 'Fenrir' : 'Kore');

    try {
      this.isSynthesizing = true;

      // Step 1: Try High-Fidelity Studio Neural AI (Gemini Studio Audio)
      const audioUrl = await this.fetchStudioAudio(text, selectedVoice, options.speaker);

      // Check if another speak/stop session was initiated while waiting for network
      if (this.currentSessionId !== sessionId) {
        return;
      }

      const audio = new Audio(audioUrl);
      this.activeAudio = audio;
      audio.playbackRate = options.rate || 1.0;

      audio.onended = () => {
        if (this.currentSessionId !== sessionId) return;
        this.activeAudio = null;
        this.isSynthesizing = false;
        if (options.onEnd) options.onEnd();
      };

      audio.onerror = () => {
        if (this.currentSessionId !== sessionId) return;
        this.activeAudio = null;
        this.isSynthesizing = false;
        // Fallback to browser synthesis if playback fails
        this.fallbackBrowserSpeak(text, options, sessionId);
      };

      if (options.onStart) {
        options.onStart();
      }

      await audio.play();
    } catch (err) {
      if (this.currentSessionId !== sessionId) {
        return;
      }
      console.warn('Studio AI voice fetch error, falling back to neural browser synthesis:', err);
      this.fallbackBrowserSpeak(text, options, sessionId);
    }
  }

  private fallbackBrowserSpeak(
    text: string,
    options: {
      rate?: number;
      gender?: 'female' | 'male' | 'any';
      onStart?: () => void;
      onEnd?: () => void;
      onError?: () => void;
    },
    sessionId: number
  ) {
    if (this.currentSessionId !== sessionId) return;

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (options.onError) options.onError();
      return;
    }

    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = options.rate ?? 0.98;
    u.pitch = options.gender === 'female' ? 1.05 : 0.98;

    const voices = window.speechSynthesis.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    if (enVoices.length > 0) {
      u.voice = enVoices[0];
    }

    u.onstart = () => {
      if (this.currentSessionId !== sessionId) {
        window.speechSynthesis.cancel();
        return;
      }
      if (options.onStart) options.onStart();
    };

    u.onend = () => {
      if (this.currentSessionId !== sessionId) return;
      this.currentUtterance = null;
      this.isSynthesizing = false;
      if (options.onEnd) options.onEnd();
    };

    u.onerror = () => {
      if (this.currentSessionId !== sessionId) return;
      this.currentUtterance = null;
      this.isSynthesizing = false;
      if (options.onError) options.onError();
    };

    this.currentUtterance = u;
    window.speechSynthesis.speak(u);
  }

  public stop() {
    this.currentSessionId++;
    this.isSynthesizing = false;
    if (this.activeAudio) {
      this.activeAudio.onended = null;
      this.activeAudio.onerror = null;
      this.activeAudio.pause();
      this.activeAudio.currentTime = 0;
      this.activeAudio.src = '';
      this.activeAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public pause() {
    this.currentSessionId++;
    this.isSynthesizing = false;
    if (this.activeAudio) {
      this.activeAudio.onended = null;
      this.activeAudio.onerror = null;
      this.activeAudio.pause();
      this.activeAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public resume() {
    if (this.activeAudio) {
      this.activeAudio.play().catch(e => console.log('Resume error:', e));
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }
}

export const naturalVoiceEngine = new NaturalVoiceEngine();

// Studio-Grade Microphone Audio Capture Options
export const getStudioAudioConstraints = (): MediaStreamConstraints => ({
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
    channelCount: 1,
    sampleRate: 48000
  }
});
