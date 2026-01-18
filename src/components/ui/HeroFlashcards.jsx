import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { GITA_EMOTIONS } from '../../lib/data';

// The 6 specific cards
const TOP_PICKS = [
  'overthinking',
  'fear_failure', 
  'work_stress',
  'attach_result',
  'confusion',
  'fear_future'
];

export default function HeroFlashcards() {
  const navigate = useNavigate();

  // Filter the full emotion list to just get our Top 6
  const cards = TOP_PICKS.map(id => GITA_EMOTIONS.find(e => e.id === id)).filter(Boolean);

  const handleCardClick = (cardId) => {
    navigate(`/read/gita`, { state: { initialEmotionId: cardId } });
  };

  return (
    <div className="w-full mb-16 animate-fade-in-up">
      
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 px-4 md:px-0 justify-center">
        <Sparkles size={14} className="text-saffron" />
        <span className="text-saffron text-xs font-bold uppercase tracking-[0.2em]">
          Wisdom for Right Now
        </span>
        <Sparkles size={14} className="text-saffron" />
      </div>

      {/* Scrollable Container */}
      <div className="relative w-full">
        {/* Fades for scroll indication on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-spiritual-bg to-transparent z-10 pointer-events-none md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-spiritual-bg to-transparent z-10 pointer-events-none md:hidden" />

        {/* FIX: Removed 'md:justify-center' to prevent first card from being cut off.
            Added 'justify-start' and 'px-4' to ensure starting visibility.
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-8 pb-8 hide-scrollbar w-full justify-start">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="snap-center flex-shrink-0 w-[260px] md:w-[280px] bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 rounded-xl p-5 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden text-left"
            >
              {/* Top Badge: BHAGAVAD GITA */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-stone-800 p-2 rounded-lg text-stone-400 border border-white/5 group-hover:text-saffron group-hover:border-saffron/20 transition-colors">
                  <BookOpen size={18} />
                </div>
                <div className="text-[9px] font-bold text-stone-500 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-full bg-black/20 group-hover:text-parchment-dim transition-colors">
                  Bhagavad Gita
                </div>
              </div>

              {/* Card Title */}
              <div className="mb-8">
                 <h3 className="font-serif text-xl font-bold text-parchment leading-tight mb-2 group-hover:text-white transition-colors">
                   {card.label}
                 </h3>
                 <p className="text-[10px] text-stone-500 font-medium uppercase tracking-wide group-hover:text-saffron transition-colors">
                   Tap to Reveal
                 </p>
              </div>

              {/* Footer / Icon */}
              <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between">
                 <span className="text-2xl filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-110">
                   {card.icon}
                 </span>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-stone-600 uppercase tracking-wider group-hover:text-saffron transition-colors">
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