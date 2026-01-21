import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, BookOpen, Sparkles, Crown, Languages } from 'lucide-react';

export default function Flashcard({ data, total, bookId }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [lang, setLang] = useState('en'); 
  
  const isPowerLaw = bookId === '48laws';

  // === 1. GET CONTENT ===
  const getCurrentContent = () => {
    switch(lang) {
      case 'hi': return data.translation_hi || "Translation coming soon...";
      case 'mr': return data.translation_mr || "Translation coming soon...";
      default: return data.translation;
    }
  };

  const currentText = getCurrentContent();

  // === 2. FORMAT CONTENT ===
  const formatContent = (text) => {
    if (!text) return <p className="text-stone-500 italic">No text available.</p>;
    
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.includes(':') && line.length < 50) {
        return (
          <h4 key={index} className="font-serif text-saffron text-base md:text-lg font-bold mt-3 md:mt-4 mb-2 border-b border-white/10 pb-1">
            {line}
          </h4>
        );
      }
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-1.5 md:mb-2 pl-1 md:pl-2">
            <span className="text-saffron mt-1.5 text-[6px]">●</span>
            <p className="text-stone-300 text-sm leading-relaxed text-left">
              {line.replace('•', '').trim()}
            </p>
          </div>
        );
      }
      return (
        <p key={index} className="text-stone-200 text-sm mb-2 text-left leading-relaxed">
          {line}
        </p>
      );
    });
  };

  // === 3. RENDER 48 LAWS BACK ===
  const renderPowerLawBack = () => (
    <div className="flex-1 overflow-y-auto p-5 md:p-8 custom-scrollbar text-left w-full">
      <h4 className="font-serif text-white text-base md:text-lg font-bold mb-3">
        {data.chapter}
      </h4>
      
      {/* BUTTONS (With Stop Propagation) */}
      <div className="flex flex-wrap items-center gap-2 mb-4 relative z-50" onClick={(e) => e.stopPropagation()}>
        <Languages size={14} className="text-stone-500" />
        {['en', 'hi', 'mr'].map((l) => (
          <button
            key={l}
            onClick={(e) => {
              e.stopPropagation(); 
              setLang(l);
            }}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all cursor-pointer ${
              lang === l 
                ? 'bg-saffron text-stone-900 border-saffron shadow-glow' 
                : 'bg-transparent text-stone-500 border-stone-700 hover:border-stone-500 hover:text-stone-300'
            }`}
          >
            {l === 'en' ? 'English' : l === 'hi' ? 'Hindi' : 'Marathi'}
          </button>
        ))}
      </div>

      <div className="mb-6 whitespace-pre-line text-stone-300 text-sm leading-relaxed">
        {formatContent(currentText)}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10 text-center">
        <p className="font-serif text-white font-bold text-sm md:text-base leading-relaxed italic">
          "{data.nuance}"
        </p>
      </div>
    </div>
  );

  return (
    <div 
      className="perspective-1000 w-[90vw] h-[80vh] md:w-full md:max-w-3xl md:h-[650px] relative mt-4 cursor-pointer group mx-auto mb-4" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ==============================
            FRONT SIDE (Sanskrit)
           ============================== */}
        <div 
          // FIX: Add 'pointer-events-none' when flipped so it doesn't block the back side
          className={`absolute inset-0 backface-hidden rounded-2xl bg-[#f5f5f0] text-stone-900 shadow-2xl border-r-4 md:border-r-8 border-b-4 border-stone-300 overflow-hidden flex flex-col ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}`}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 h-24">
              <div className="text-stone-400 opacity-50">
                 {isPowerLaw ? <Crown size={24} /> : <BookOpen size={24} />}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300 bg-stone-100/80 backdrop-blur-sm shadow-sm">
                 <span className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-widest">
                   {data.chapter}
                 </span>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 md:p-10 mt-16 mb-10 z-10 custom-scrollbar w-full">
             <span className="text-amber-600 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 shrink-0">
               Original Text
             </span>
             <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-stone-800 mb-6 drop-shadow-sm whitespace-pre-line text-center w-full px-4">
               {data.sanskrit}
             </h2>
             <div className="flex items-center justify-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest animate-pulse shrink-0 mt-4">
                <RotateCw size={14} />
                <span>Tap for Meaning</span>
             </div>
           </div>
        </div>

        {/* ==============================
            BACK SIDE (Meaning + Buttons)
           ============================== */}
        <div 
          // FIX: Add 'pointer-events-auto' when flipped so buttons work!
          className={`absolute inset-0 backface-hidden rounded-2xl bg-stone-900 flex flex-col shadow-glow border border-white/10 overflow-hidden ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
           <div className="p-4 md:p-5 flex justify-end border-b border-white/5 bg-black/20 shrink-0">
              <div className="inline-flex items-center gap-2 opacity-70">
                 <Sparkles size={14} className="text-saffron" />
                 <span className="text-[10px] font-bold text-parchment uppercase tracking-widest">
                    Insight
                 </span>
              </div>
           </div>

          {/* DYNAMIC CONTENT */}
          {isPowerLaw ? renderPowerLawBack() : (
            <div className="flex-1 overflow-y-auto p-5 md:p-8 custom-scrollbar text-left w-full relative">
              
              {/* ⭐ LANGUAGE SWITCHER (Clickable now!) ⭐ */}
              <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-white/10 pb-4 relative z-50" onClick={(e) => e.stopPropagation()}>
                <Languages size={14} className="text-stone-500 mr-1" />
                
                {['en', 'hi', 'mr'].map((l) => (
                  <button
                    key={l}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent Flip
                      setLang(l);
                    }}
                    className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                      lang === l 
                        ? 'bg-saffron text-stone-900 border-saffron shadow-lg scale-105' 
                        : 'bg-white/5 text-stone-400 border-white/10 hover:bg-white/10 hover:text-stone-200'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'hi' ? 'Hindi' : 'Marathi'}
                  </button>
                ))}
              </div>

              {/* Translation Text */}
              <div className="mb-4 animate-fade-in">
                 {formatContent(currentText)}
              </div>
              
              <div className="mt-3 pt-3 border-t border-white/10 text-center pb-2">
                 <p className="font-serif text-stone-300 text-sm md:text-base italic leading-relaxed">
                   "{data.nuance}"
                 </p>
              </div>
            </div>
          )}
          
          <div className="p-3 md:p-4 mt-auto border-t border-white/5 flex justify-between items-center text-[9px] text-stone-500 uppercase tracking-widest bg-black/20 shrink-0">
            <span>Shloki Wisdom</span>
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}