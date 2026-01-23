import { useState, useEffect, useCallback } from 'react';

export const useTextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  // 1. Load Voices
  useEffect(() => {
    const loadVoices = () => {
      const avail = window.speechSynthesis.getVoices();
      if (avail.length > 0) setVoices(avail);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => window.speechSynthesis.cancel();
  }, []);

  // 2. Aggressive Text Cleaner (Removes all dots/symbols)
  const cleanText = (text) => {
    if (!text) return "";
    return text
      .replace(/[|•●.\-]/g, " ") // Remove dots, bullets, dandas
      .replace(/\n/g, " ")       // Remove new lines
      .replace(/\s+/g, " ")      // Remove extra spaces
      .trim();
  };

  const speak = useCallback((rawText, langCode) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop previous audio
    
    // Clean text immediately so it NEVER says "Dot"
    const textToSpeak = cleanText(rawText);
    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Refresh voices
    let availableVoices = voices;
    if (availableVoices.length === 0) {
        availableVoices = window.speechSynthesis.getVoices();
    }

    let selectedVoice = null;
    let targetLang = langCode;

    // === SMART VOICE SELECTION ===

    // RULE: SANSKRIT -> Use Hindi
    if (langCode === 'sa-IN') {
        targetLang = 'hi-IN';
    }

    // RULE: MARATHI -> Try Marathi, Fallback to Hindi
    if (langCode === 'mr-IN') {
        // 1. Search for a real Marathi voice
        const marathiVoice = availableVoices.find(v => v.lang.includes('mr') || v.lang.includes('mar'));
        
        if (marathiVoice) {
            selectedVoice = marathiVoice;
        } else {
            // 2. CRITICAL FALLBACK: Use Hindi if Marathi is missing!
            // Hindi voice reads Marathi script (Devanagari) perfectly.
            // English voice reads it as "Dot Dot".
            console.warn("No Marathi voice found. Switching to Hindi to prevent 'Dot Dot' error.");
            targetLang = 'hi-IN';
        }
    }

    // Find the best voice for the decided language
    if (!selectedVoice) {
        // Filter for the target language (e.g., 'hi-IN' or 'en-US')
        const langVoices = availableVoices.filter(v => v.lang.includes(targetLang));
        
        // Pick the highest quality one
        selectedVoice = langVoices.find(v => v.name.includes('Google')) ||   // Android/Chrome
                        langVoices.find(v => v.name.includes('Lekha')) ||    // iOS
                        langVoices.find(v => v.name.includes('Hemant')) ||   // Windows
                        langVoices.find(v => v.name.includes('Samantha')) || // iOS English
                        langVoices[0];
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
    } else {
        utterance.lang = targetLang;
    }

    // Tuning
    utterance.rate = 0.9;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (e) => {
        console.error("Speech Error:", e);
        setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [voices]);

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return { speak, stop, isSpeaking };
};