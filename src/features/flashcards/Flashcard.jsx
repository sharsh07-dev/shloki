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
      // Bullets
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-2 pl-1 md:pl-2">
            <span className="text-saffron mt-1.5 text-[6px]">●</span>
            <p className="text-stone-300 text-xs md:text-sm leading-relaxed text-left">
              {line.replace('•', '').trim()}
            </p>
          </div>
        );
      }
      // Regular
      if (line.trim() === '') return <div key={index} className="h-2" />;
      return (
        <p key={index} className="text-stone-200 text-xs md:text-sm mb-2 text-left">
          {line}
        </p>
      );
    });
  };

  return (
    // RESPONSIVE CONTAINER:
    // Mobile: w-[90vw] to fit screen width, min-h-[60vh] to fit height
    // Desktop: max-w-3xl, fixed height 500px
    <div 
      className="perspective-1000 w-[90vw] md:w-full md:max-w-3xl min-h-[55vh] md:h-[500px] relative mt-4 cursor-pointer group mx-auto" 
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
          className="absolute inset-0 backface-hidden rounded-2xl bg-[#f5f5f0] text-stone-900 p-6 md:p-8 flex flex-col items-center justify-center shadow-2xl border-r-4 md:border-r-8 border-b-4 border-stone-300 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           {/* Card Number */}
           <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-2 md:px-3 py-1 rounded-full border border-stone-300 bg-stone-100/50">
              <span className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                Card {data.id}
              </span>
           </div>

           <div className="absolute top-4 left-4 md:top-6 md:left-6 text-stone-400 opacity-50">
              <BookOpen size={18} className="md:w-6 md:h-6" />
           </div>

           {/* Sanskrit Content - Responsive Text Sizes */}
           <div className="text-center z-10 relative w-full px-2 md:px-4">
             <span className="text-amber-600 text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 block">
               {data.chapter}
             </span>
             
             {/* Text scales: text-xl (Mobile) -> text-2xl (Tablet) -> text-3xl (Desktop) */}
             <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-bold text-stone-800 mb-6 md:mb-8 drop-shadow-sm whitespace-pre-line">
               {data.sanskrit}
             </h2>
             
             <div className="flex items-center justify-center gap-2 text-stone-400 text-[9px] md:text-[10px] uppercase tracking-widest animate-pulse">
                <RotateCw size={12} className="md:w-4 md:h-4" />
                <span>Tap to Flip</span>
             </div>
           </div>
        </div>

        {/* ==============================
            BACK SIDE (Meaning)
           ============================== */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-stone-900 p-6 md:p-8 flex flex-col shadow-glow border border-white/10 overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-left">
            <div className="mb-4 md:mb-6">
               {formatContent(data.translation)}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-center">
               <div className="inline-flex items-center justify-center gap-2 mb-2 opacity-70">
                 <Sparkles size={12} className="text-saffron" />
               </div>
               <p className="font-serif text-stone-300 text-sm md:text-base italic leading-relaxed">
                 {data.nuance}
               </p>
            </div>
          </div>
          
          <div className="pt-3 md:pt-4 mt-auto border-t border-white/5 flex justify-between items-center text-[8px] md:text-[9px] text-stone-500 uppercase tracking-widest">
            <span>Shloki Wisdom</span>
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}