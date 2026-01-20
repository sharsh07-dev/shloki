import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, BookOpen, Sparkles, Crown } from 'lucide-react';

export default function Flashcard({ data, total, bookId }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isPowerLaw = bookId === '48laws';

  // === HELPER 1: Format Standard Content (Gita) ===
  const formatGitaContent = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Bold Headers for "Insight" or "Solution"
      if (line.includes('Shloka Insight:') || line.includes('Gita Solution:')) {
        return (
          <h4 key={index} className="font-serif text-saffron text-base md:text-lg font-bold mt-3 md:mt-4 mb-2 border-b border-white/10 pb-1">
            {line.replace(':', '')}
          </h4>
        );
      }
      // Bullet points
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
      // Spacing
      if (line.trim() === '') return <div key={index} className="h-1 md:h-2" />;
      
      // Standard Paragraphs
      return (
        <p key={index} className="text-stone-200 text-sm mb-2 text-left leading-relaxed">
          {line}
        </p>
      );
    });
  };

  // === HELPER 2: Format Power Law Content (Steps & Nuance) ===
  const renderPowerLawBack = () => (
    <div className="flex-1 overflow-y-auto p-5 md:p-8 custom-scrollbar text-left w-full">
      {/* 1. Chapter Title & Explanation */}
      <h4 className="font-serif text-white text-base md:text-lg font-bold mb-3">
        {data.chapter}: {data.sanskrit}
      </h4>
      <p className="text-stone-300 text-sm leading-relaxed mb-6 whitespace-pre-line">
        {data.translation}
      </p>

      {/* 2. Steps to Implement (If available) */}
      {data.steps && (
        <div className="mb-6">
          <h5 className="font-sans text-saffron text-xs font-bold uppercase tracking-widest mb-3 border-l-2 border-saffron pl-3">
            Steps to Implement in Real Life
          </h5>
          <ol className="list-decimal pl-5 space-y-2 text-stone-400 text-sm">
            {data.steps.map((step, i) => (
              <li key={i} className="pl-1 leading-relaxed">
                <span className="text-stone-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* 3. Footer Punchline (Nuance) */}
      <div className="mt-4 pt-4 border-t border-white/10 text-center">
        <p className="font-serif text-white font-bold text-sm md:text-base leading-relaxed italic">
          "{data.nuance}"
        </p>
      </div>
    </div>
  );

  return (
    // === CONTAINER ===
    // h-[80vh]: Takes up 80% of screen height on mobile to fit long text.
    // md:h-[650px]: Fixed tall height on desktop.
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
            FRONT SIDE (Question/Law Name)
           ============================== */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-[#f5f5f0] text-stone-900 shadow-2xl border-r-4 md:border-r-8 border-b-4 border-stone-300 overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           {/* Texture Overlay */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           {/* Top Bar */}
           <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 bg-gradient-to-b from-[#f5f5f0] via-[#f5f5f0]/80 to-transparent h-24">
              <div className="text-stone-400 opacity-50">
                 {isPowerLaw ? <Crown size={24} /> : <BookOpen size={24} />}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300 bg-stone-100/80 backdrop-blur-sm shadow-sm">
                 <span className="text-[10px] md:text-xs font-bold text-stone-500 uppercase tracking-widest">
                   {/* Clean up chapter display if needed */}
                   {data.chapter}
                 </span>
              </div>
           </div>

           {/* Center Content */}
           <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 md:p-10 mt-16 mb-10 z-10 custom-scrollbar w-full">
             <span className="text-amber-600 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 shrink-0">
               {isPowerLaw ? 'The Law' : 'The Wisdom'}
             </span>
             
             {/* Main Title (Law Name or Shloka) */}
             <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight font-bold text-stone-800 mb-6 drop-shadow-sm whitespace-pre-line text-center w-full px-4">
               {data.sanskrit}
             </h2>
             
             {/* Tap Hint */}
             <div className="flex items-center justify-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest animate-pulse shrink-0 mt-4">
                <RotateCw size={14} />
                <span>Tap to Reveal</span>
             </div>
           </div>
        </div>

        {/* ==============================
            BACK SIDE (Answer/Strategy)
           ============================== */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-stone-900 flex flex-col shadow-glow border border-white/10 overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
           {/* Top Bar */}
           <div className="p-4 md:p-5 flex justify-end border-b border-white/5 bg-black/20 shrink-0">
              <div className="inline-flex items-center gap-2 opacity-70">
                 <Sparkles size={14} className="text-saffron" />
                 <span className="text-[10px] font-bold text-parchment uppercase tracking-widest">
                    {isPowerLaw ? 'Strategy' : 'Insight'}
                 </span>
              </div>
           </div>

          {/* DYNAMIC CONTENT (Power Law vs Standard) */}
          {isPowerLaw ? renderPowerLawBack() : (
            <div className="flex-1 overflow-y-auto p-5 md:p-8 custom-scrollbar text-left w-full">
              <div className="mb-4">
                 {formatGitaContent(data.translation)}
              </div>
              
              {/* Nuance Section for Gita */}
              {data.nuance && (
                <div className="mt-3 pt-3 border-t border-white/10 text-center pb-2">
                   <p className="font-serif text-stone-300 text-sm md:text-base italic leading-relaxed">
                     "{data.nuance}"
                   </p>
                </div>
              )}
            </div>
          )}
          
          {/* Bottom Footer */}
          <div className="p-3 md:p-4 mt-auto border-t border-white/5 flex justify-between items-center text-[9px] text-stone-500 uppercase tracking-widest bg-black/20 shrink-0">
            <span>Shloki Wisdom</span>
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}