import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, BookOpen, Sparkles } from 'lucide-react';

export default function Flashcard({ data, total }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // === HELPER: Format the text properly ===
  const formatContent = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Headers
      if (line.includes('Shloka Insight:') || line.includes('Gita Solution:')) {
        return (
          <h4 key={index} className="font-serif text-saffron text-base md:text-lg font-bold mt-3 md:mt-4 mb-2 border-b border-white/10 pb-1">
            {line.replace(':', '')}
          </h4>
        );
      }
      // Bullet Points
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-2 pl-1 md:pl-2">
            <span className="text-saffron mt-1.5 text-[6px]">●</span>
            <p className="text-stone-300 text-sm leading-relaxed text-left">
              {line.replace('•', '').trim()}
            </p>
          </div>
        );
      }
      // Regular Text
      if (line.trim() === '') return <div key={index} className="h-2" />;
      return (
        <p key={index} className="text-stone-200 text-sm mb-2 text-left">
          {line}
        </p>
      );
    });
  };

  return (
    // === CRITICAL FIX ===
    // 1. h-[60vh]: Fixed height prevents collapsing. 'min-h' does not work well with absolute children.
    // 2. w-[85vw]: Keeps it nicely centered with margins.
    // 3. Desktop remains w-full max-w-3xl h-[500px].
    <div 
      className="perspective-1000 w-[85vw] h-[60vh] md:w-full md:max-w-3xl md:h-[500px] relative mt-4 cursor-pointer group mx-auto mb-8" 
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
          className="absolute inset-0 backface-hidden rounded-2xl bg-[#f5f5f0] text-stone-900 shadow-2xl border-r-4 md:border-r-8 border-b-4 border-stone-300 overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           {/* HEADER (Absolute to stay at top) */}
           <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 bg-gradient-to-b from-[#f5f5f0] via-[#f5f5f0]/80 to-transparent h-20">
              <div className="text-stone-400 opacity-50">
                 <BookOpen size={20} />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300 bg-stone-100/80 backdrop-blur-sm shadow-sm">
                 <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                   Card {data.id}
                 </span>
              </div>
           </div>

           {/* CONTENT (Scrollable) */}
           <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 md:p-8 mt-14 mb-8 z-10 custom-scrollbar w-full">
             
             <span className="text-amber-600 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 shrink-0">
               {data.chapter}
             </span>
             
             {/* TEXT SIZE FIX: text-xl for mobile readability */}
             <h2 className="font-serif text-xl sm:text-2xl md:text-4xl leading-relaxed font-bold text-stone-800 mb-6 drop-shadow-sm whitespace-pre-line text-center w-full">
               {data.sanskrit}
             </h2>
             
             <div className="flex items-center justify-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest animate-pulse shrink-0">
                <RotateCw size={14} />
                <span>Tap to Reveal</span>
             </div>
           </div>
        </div>

        {/* ==============================
            BACK SIDE (Meaning) 
           ============================== */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-stone-900 flex flex-col shadow-glow border border-white/10 overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
           {/* Header */}
           <div className="p-4 flex justify-end border-b border-white/5 bg-black/20 shrink-0">
              <div className="inline-flex items-center gap-2 opacity-70">
                 <Sparkles size={14} className="text-saffron" />
                 <span className="text-[10px] font-bold text-parchment uppercase tracking-widest">Insight</span>
              </div>
           </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar text-left w-full">
            <div className="mb-6">
               {formatContent(data.translation)}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-center pb-4">
               <p className="font-serif text-stone-300 text-sm md:text-base italic leading-relaxed">
                 {data.nuance}
               </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-3 md:p-4 mt-auto border-t border-white/5 flex justify-between items-center text-[9px] text-stone-500 uppercase tracking-widest bg-black/20 shrink-0">
            <span>Shloki Wisdom</span>
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}