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
          <h4 key={index} className="font-serif text-saffron text-lg font-bold mt-4 mb-2 border-b border-white/10 pb-1">
            {line.replace(':', '')}
          </h4>
        );
      }
      // Bullets
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-2 mb-2 pl-2">
            <span className="text-saffron mt-1.5 text-[6px]">●</span>
            <p className="text-stone-300 text-sm leading-relaxed text-left">
              {line.replace('•', '').trim()}
            </p>
          </div>
        );
      }
      // Regular
      if (line.trim() === '') return <div key={index} className="h-2" />;
      return (
        <p key={index} className="text-stone-200 text-sm mb-2 text-left">
          {line}
        </p>
      );
    });
  };

  return (
    <div 
      className="perspective-1000 w-full max-w-3xl h-[500px] relative mt-4 cursor-pointer group mx-auto" 
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
            Fix: Added solid bg-[#f5f5f0] to prevent bleed-through
           ============================== */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-[#f5f5f0] text-stone-900 p-8 flex flex-col items-center justify-center shadow-2xl border-r-8 border-b-4 border-stone-300 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
           
           {/* Texture Overlay */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           {/* Card Number */}
           <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full border border-stone-300 bg-stone-100/50">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
                Card {data.id}
              </span>
           </div>

           {/* Icon */}
           <div className="absolute top-6 left-6 text-stone-400 opacity-50">
              <BookOpen size={20} />
           </div>

           {/* Sanskrit Content */}
           <div className="text-center z-10 relative w-full px-4">
             <span className="text-amber-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">
               {data.chapter}
             </span>
             
             <h2 className="font-serif text-2xl md:text-4xl leading-relaxed font-bold text-stone-800 mb-8 drop-shadow-sm whitespace-pre-line">
               {data.sanskrit}
             </h2>
             
             <div className="flex items-center justify-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest animate-pulse">
                <RotateCw size={14} />
                <span>Tap for Wisdom</span>
             </div>
           </div>
        </div>

        {/* ==============================
            BACK SIDE (Meaning)
            Fix: Added solid bg-stone-900 to ensure opacity
           ============================== */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-stone-900 p-8 flex flex-col shadow-glow border border-white/10 overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg)', 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
        >
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-left">
            <div className="mb-6">
               {formatContent(data.translation)}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-center">
               <div className="inline-flex items-center justify-center gap-2 mb-2 opacity-70">
                 <Sparkles size={12} className="text-saffron" />
               </div>
               <p className="font-serif text-stone-300 text-base italic leading-relaxed">
                 {data.nuance}
               </p>
            </div>
          </div>
          
          {/* Footer */}
          <div className="pt-4 mt-auto border-t border-white/5 flex justify-between items-center text-[9px] text-stone-500 uppercase tracking-widest">
            <span>Shloki Wisdom</span>
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}