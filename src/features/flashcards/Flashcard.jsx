import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, BookOpen, Sparkles, Crown, Languages, Volume2, Square } from 'lucide-react';
import { useTextToSpeech } from '../../hooks/useTextToSpeech'; 

export default function Flashcard({ data, bookId }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [lang, setLang] = useState('en'); 
  const { speak, stop, isSpeaking } = useTextToSpeech(); 

  const isPowerLaw = bookId === '48laws';

  // === 0. SAFETY GUARD (Prevents Crashes) ===
  if (!data) return null;

  // === 1. RESET STATE ON CHANGE ===
  useEffect(() => {
    setIsFlipped(false);
    setLang('en');
    stop();
  }, [data.id]); 

  // === 2. GET CONTENT ===
  const getCurrentContent = () => {
    switch(lang) {
      case 'hi': return data.translation_hi || "Translation coming soon...";
      case 'mr': return data.translation_mr || "Translation coming soon...";
      default: return data.translation;
    }
  };

  const getTTSLang = () => {
    switch(lang) {
      case 'hi': return 'hi-IN';
      case 'mr': return 'mr-IN'; // Hook handles the fallback to Hindi if needed
      default: return 'en-US';
    }
  };

  const currentText = getCurrentContent();

  // === 3. HANDLE AUDIO ===
  const handlePlay = (e, text, langCode) => {
    e.stopPropagation(); // Stop flip
    try {
      if (isSpeaking) {
        stop();
      } else {
        speak(text, langCode);
      }
    } catch (err) {
      console.error("Audio playback error:", err);
    }
  };

  // === 4. FORMAT TEXT RENDERER ===
  const formatContent = (text) => {
    if (!text) return <p className="text-stone-500 italic">No text available.</p>;
    
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // HEADINGS
      if (line.includes(':') && line.length < 50) {
        return (
          <h4 key={index} className="font-serif text-saffron text-xl md:text-2xl font-bold mt-6 mb-3 border-b border-white/10 pb-2">
            {line}
          </h4>
        );
      }
      
      // BULLET POINTS
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-3 mb-3 pl-1">
            <span className="text-saffron mt-2 text-[8px] shrink-0">●</span>
            <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-left">
              {line.replace('•', '').trim()}
            </p>
          </div>
        );
      }

      // STANDARD TEXT
      return (
        <p key={index} className="text-stone-200 text-lg md:text-xl mb-4 text-left leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div 
      className="perspective-1000 w-[90vw] h-[80vh] md:w-full md:max-w-3xl md:h-[650px] relative mt-4 cursor-pointer group mx-auto mb-4" 
      onClick={() => { setIsFlipped(!isFlipped); stop(); }} 
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ==============================
            FRONT SIDE (Sanskrit / Title)
           ============================== */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-2xl bg-[#f5f5f0] text-stone-900 shadow-2xl border-r-4 md:border-r-8 border-b-4 border-stone-300 overflow-hidden flex flex-col ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           {/* Top Bar */}
           <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 h-24">
              <div className="text-stone-400 opacity-50">
                 {isPowerLaw ? <Crown size={28} /> : <BookOpen size={28} />}
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 bg-stone-100/80 backdrop-blur-sm shadow-sm">
                 <span className="text-xs md:text-sm font-bold text-stone-600 uppercase tracking-widest">
                   {data.chapter}
                 </span>
              </div>
           </div>

           {/* Content */}
           <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 md:p-12 mt-10 mb-10 z-10 custom-scrollbar w-full">
             <span className="text-amber-700/60 text-xs font-bold tracking-[0.3em] uppercase mb-6 shrink-0">
               {isPowerLaw ? "Strategy" : "Original Text"}
             </span>
             
             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-stone-800 mb-8 drop-shadow-sm whitespace-pre-line text-center w-full px-4">
               {data.sanskrit}
             </h2>

             {/* 🔊 FRONT SPEAKER */}
             <button
               onClick={(e) => handlePlay(e, data.sanskrit, 'sa-IN')}
               className="flex items-center gap-3 px-6 py-3 rounded-full bg-stone-200 hover:bg-saffron hover:text-white transition-all text-stone-600 text-xs font-bold uppercase tracking-widest shadow-md active:scale-95 z-50"
             >
               {isSpeaking && !isFlipped ? <Square size={16} fill="currentColor" /> : <Volume2 size={16} />}
               <span>{isSpeaking && !isFlipped ? 'Stop' : 'Listen'}</span>
             </button>

             <div className="flex items-center justify-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest animate-pulse shrink-0 mt-10">
                <RotateCw size={14} />
                <span>Tap to Reveal</span>
             </div>
           </div>
        </div>

        {/* ==============================
            BACK SIDE (Insight + Buttons)
           ============================== */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-2xl bg-stone-900 flex flex-col shadow-glow border border-white/10 overflow-hidden ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
           {/* Header */}
           <div className="p-4 md:p-6 flex justify-end border-b border-white/5 bg-black/20 shrink-0">
              <div className="inline-flex items-center gap-2 opacity-70">
                 <Sparkles size={16} className="text-saffron" />
                 <span className="text-xs font-bold text-parchment uppercase tracking-widest">
                    Insight
                 </span>
              </div>
           </div>

           {/* Scrollable Content */}
           <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar text-left w-full relative">
              
              {/* Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6 relative z-50">
                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <Languages size={16} className="text-stone-500 mr-2" />
                  {['en', 'hi', 'mr'].map((l) => (
                    <button
                      key={l}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        setLang(l);
                        stop();
                      }}
                      className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                        lang === l 
                          ? 'bg-saffron text-stone-900 border-saffron shadow-lg scale-105' 
                          : 'bg-white/5 text-stone-400 border-white/10 hover:bg-white/10 hover:text-stone-200'
                      }`}
                    >
                      {l === 'en' ? 'ENG' : l === 'hi' ? 'HIN' : 'MAR'}
                    </button>
                  ))}
                </div>

                {/* 🔊 BACK SPEAKER */}
                <button
                   onClick={(e) => handlePlay(e, currentText, getTTSLang())}
                   className={`p-3 rounded-full transition-all active:scale-95 border ${
                     isSpeaking && isFlipped
                       ? 'bg-saffron text-stone-900 border-saffron animate-pulse'
                       : 'bg-white/5 text-stone-400 border-white/10 hover:text-saffron hover:border-saffron'
                   }`}
                >
                   {isSpeaking && isFlipped ? <Square size={20} fill="currentColor" /> : <Volume2 size={20} />}
                </button>
              </div>

              {/* Text */}
              <div className="mb-6 animate-fade-in">
                 {formatContent(currentText)}
              </div>
              
              {/* Quote */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center pb-4">
                 <p className="font-serif text-stone-400 text-lg md:text-xl italic leading-relaxed px-4">
                   "{data.nuance}"
                 </p>
              </div>
            </div>
          
          {/* Footer */}
          <div className="p-4 mt-auto border-t border-white/5 flex justify-between items-center text-[10px] md:text-xs text-stone-500 uppercase tracking-widest bg-black/20 shrink-0">
            <span>Shloki Wisdom</span>
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}