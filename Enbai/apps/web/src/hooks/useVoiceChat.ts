'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { apiClient } from '@/lib/api/client';

interface UseVoiceChatOptions {
  lang?: string;
  continuous?: boolean;
  onResult?: (transcript: string) => void;
  onError?: (error: string) => void;
  useApiTts?: boolean; // Use OpenAI TTS API for better quality
}

interface UseVoiceChatReturn {
  isListening: boolean;
  isSupported: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string, lang?: string) => void;
  isSpeaking: boolean;
  stopSpeaking: () => void;
  setLanguage: (lang: string) => void;
  currentLang: string;
}

// Voice mapping for different languages
const VOICE_SETTINGS = {
  'en-US': { voice: 'nova', rate: 0.95 },
  'en-GB': { voice: 'fable', rate: 0.95 },
  'ru-RU': { voice: 'shimmer', rate: 1.0 }, // Shimmer sounds good for Russian
};

export function useVoiceChat(options: UseVoiceChatOptions = {}): UseVoiceChatReturn {
  const {
    lang: initialLang = 'en-US',
    continuous = false,
    onResult,
    onError,
    useApiTts = true,
  } = options;

  const [currentLang, setCurrentLang] = useState(initialLang);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Check browser support
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      setIsSupported(!!SpeechRecognition && !!window.speechSynthesis);
      synthRef.current = window.speechSynthesis;

      // Create audio element for API TTS
      audioRef.current = new Audio();
      audioRef.current.onended = () => setIsSpeaking(false);
      audioRef.current.onerror = () => setIsSpeaking(false);
    }
  }, []);

  // Initialize speech recognition
  const initRecognition = useCallback(() => {
    if (typeof window === 'undefined') return null;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    recognition.lang = currentLang;
    recognition.continuous = continuous;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          interimTranscript += result[0].transcript;
        }
      }

      const currentTranscript = finalTranscript || interimTranscript;
      setTranscript(currentTranscript);

      if (finalTranscript && onResult) {
        onResult(finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      if (onError) {
        onError(event.error);
      }
    };

    return recognition;
  }, [currentLang, continuous, onResult, onError]);

  // Set language
  const setLanguage = useCallback((lang: string) => {
    setCurrentLang(lang);
    // Re-initialize recognition with new language
    if (recognitionRef.current) {
      recognitionRef.current.lang = lang;
    }
  }, []);

  // Start listening
  const startListening = useCallback(() => {
    if (!isSupported) {
      onError?.('Распознавание речи не поддерживается в вашем браузере');
      return;
    }

    // Stop any ongoing speech
    stopSpeaking();

    setTranscript('');

    if (!recognitionRef.current) {
      recognitionRef.current = initRecognition();
    } else {
      // Update language
      recognitionRef.current.lang = currentLang;
    }

    try {
      recognitionRef.current?.start();
    } catch (error) {
      // Recognition might already be running
      console.error('Speech recognition error:', error);
    }
  }, [isSupported, initRecognition, onError, currentLang]);

  // Stop listening
  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    // Stop API audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    // Stop Web Speech
    synthRef.current?.cancel();
    currentUtteranceRef.current = null;
    setIsSpeaking(false);
  }, []);

  // Text-to-speech with API or fallback to Web Speech
  const speak = useCallback(async (text: string, lang?: string) => {
    const targetLang = lang || currentLang;

    // Stop any ongoing speech
    stopSpeaking();

    if (!text.trim()) return;

    setIsSpeaking(true);

    // Try API TTS first (better quality)
    if (useApiTts) {
      try {
        const voiceSettings = VOICE_SETTINGS[targetLang as keyof typeof VOICE_SETTINGS] || VOICE_SETTINGS['en-US'];

        const response = await apiClient.post('/tts/speak', {
          text: text.slice(0, 4096), // Max 4096 chars
          voice: voiceSettings.voice,
          speed: voiceSettings.rate,
        }, {
          responseType: 'blob',
        });

        if (response.data && audioRef.current) {
          const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);

          audioRef.current.src = audioUrl;
          await audioRef.current.play();
          return;
        }
      } catch (error) {
        console.log('API TTS not available, falling back to Web Speech');
        // Fall through to Web Speech API
      }
    }

    // Fallback to Web Speech API
    if (!synthRef.current) {
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = targetLang;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    // Try to find a good voice for the language
    const voices = synthRef.current.getVoices();
    const langPrefix = targetLang.split('-')[0];

    // Prefer Google voices, then any native voice
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith(langPrefix) && v.name.includes('Google')
    ) || voices.find(
      (v) => v.lang.startsWith(langPrefix) && v.localService
    ) || voices.find(
      (v) => v.lang.startsWith(langPrefix)
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    currentUtteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  }, [currentLang, stopSpeaking, useApiTts]);

  // Cleanup
  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      synthRef.current?.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
    speak,
    isSpeaking,
    stopSpeaking,
    setLanguage,
    currentLang,
  };
}

// Type declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
