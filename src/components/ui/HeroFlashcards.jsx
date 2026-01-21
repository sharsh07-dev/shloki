import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { GITA_EMOTIONS } from '../../lib/data';

const TOP_PICKS = [
  'overthinking', 'fear_failure', 'work_stress', 'attach_result', 'confusion', 'fear_future'
];

export default function HeroFlashcards() {
  const navigate = useNavigate();
  const cards = TOP_PICKS.map(id => GITA_EMOTIONS.find(e => e.id === id)).filter(Boolean);

  const handleCardClick = (cardId) => {
    navigate(`/read/gita`, { state: { initialEmotionId: cardId } });
  };

  return (
    <div className="w-full mb-8 md:mb-16 animate-fade-in-up">
      
      {/* Header */}
      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 px-4 md:px-0 justify-center">
        <Sparkles size={12} className="text-saffron md:w-3.5 md:h-3.5" />
        <span className="text-saffron text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          Most Visited Questions
        </span>
        <Sparkles size={12} className="text-saffron md:w-3.5 md:h-3.5" />
      </div>

      <div className="relative w-full">
        {/* Mobile Fade Hint */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-spiritual-bg to-transparent z-10 pointer-events-none md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-spiritual-bg to-transparent z-10 pointer-events-none md:hidden" />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 px-4 md:px-8 pb-6 md:pb-8 hide-scrollbar w-full justify-start">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              // === RESPONSIVE FIX ===
              // Mobile: w-[240px] (Compact card, allows seeing next card)
              // Desktop: w-[280px] (Standard large card)
              className="snap-center flex-shrink-0 w-[240px] sm:w-[280px] 
                         bg-white dark:bg-white/5 
                         border border-stone-200 dark:border-white/10 
                         active:scale-[0.98] md:hover:scale-100 md:hover:-translate-y-1
                         rounded-xl p-4 md:p-5 group transition-all duration-300 relative overflow-hidden text-left shadow-sm dark:shadow-none"
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className="p-1.5 md:p-2 rounded-lg transition-colors border bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-white/5">
                  <BookOpen size={16} className="md:w-[18px]" />
                </div>
                <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full transition-colors border text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-black/20 border-stone-200 dark:border-white/5">
                  Gita
                </div>
              </div>

              {/* Title - Reduced size for mobile */}
              <div className="mb-4 md:mb-8">
                 <h3 className="font-serif text-lg md:text-xl font-bold leading-tight mb-1 md:mb-2 transition-colors text-stone-800 dark:text-parchment">
                   {card.label}
                 </h3>
                 <p className="text-[9px] md:text-[10px] font-medium uppercase tracking-wide transition-colors text-stone-400 dark:text-stone-500 group-hover:text-saffron">
                   Tap to Reveal
                 </p>
              </div>

              {/* Footer */}
              <div className="w-full pt-3 md:pt-4 flex items-center justify-between border-t border-stone-100 dark:border-white/5">
                 <span className="text-xl md:text-2xl filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                   {card.icon}
                 </span>
                 <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors text-stone-400 dark:text-stone-600 group-hover:text-saffron">
                   <span>Open</span>
                   <ArrowRight size={12} />
                 </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}