import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { SHLOKAS } from '../../lib/data';

// (Keep KEYWORD_MAP exactly the same as before)
const KEYWORD_MAP = [
  { keys: ['anxi', 'worry', 'nervous', 'panic', 'future', 'scared'], id: 'anxiety' },
  { keys: ['work', 'job', 'career', 'boss', 'pressure', 'burnout'], id: 'work_stress' },
  { keys: ['sad', 'depress', 'low', 'cry', 'hopeless', 'grief'], id: 'depression' },
  { keys: ['angry', 'mad', 'rage', 'furious', 'irritated'], id: 'anger' },
  { keys: ['think', 'mind', 'noise', 'head', 'thoughts'], id: 'overthinking' },
  { keys: ['lone', 'alone', 'isolat', 'friend'], id: 'lonely' },
  { keys: ['confus', 'lost', 'decide', 'choice', 'direction'], id: 'confusion' },
  { keys: ['fail', 'los', 'mistake', 'guilt'], id: 'fear_failure' },
  { keys: ['jealous', 'envy', 'compare', 'others'], id: 'jealousy' },
  { keys: ['cheat', 'betray', 'lie', 'hurt', 'breakup'], id: 'betrayal' },
  { keys: ['lazy', 'motivat', 'procrastinat', 'tired', 'bore'], id: 'motivation' },
  { keys: ['doubt', 'self', 'confidence', 'trust'], id: 'self_doubt' },
];

export default function MoodRecommender() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const gitaCards = SHLOKAS['gita'];

  const handleSearch = (e) => {
    const text = e.target.value;
    setInput(text);
    if (text.length < 3) {
      setResults([]);
      return;
    }
    const lowerText = text.toLowerCase();
    const matches = KEYWORD_MAP.filter(item => 
      item.keys.some(key => lowerText.includes(key))
    );
    const foundCards = matches
      .map(match => gitaCards.find(card => card.id === match.id))
      .filter(Boolean); 
    const uniqueCards = [...new Set(foundCards)].slice(0, 3);
    setResults(uniqueCards);
  };

  const navigateToCard = (cardId) => {
    navigate(`/read/gita`, { state: { initialEmotionId: cardId } });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 md:mb-16 animate-fade-in px-2 md:px-4">
      
      {/* Input Container */}
      <div className="relative group z-20">
        <div className="absolute inset-0 bg-saffron/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center shadow-2xl transition-all focus-within:border-saffron/50 focus-within:bg-black/60">
          <div className="pl-3 md:pl-4 text-saffron animate-pulse">
            <Sparkles size={18} className="md:w-5 md:h-5" />
          </div>
          
          <input 
            type="text"
            value={input}
            onChange={handleSearch}
            placeholder="How do you feel? (e.g. anxious, stressed)..."
            // iOS Fix: 'text-base' prevents auto-zoom on focus
            className="w-full bg-transparent border-none text-parchment placeholder:text-stone-500 px-3 md:px-4 py-2 md:py-3 focus:outline-none text-base md:text-lg font-serif"
          />
          
          <div className="pr-1 md:pr-2">
            <button className="bg-white/10 p-2 rounded-xl text-stone-400 hover:text-saffron hover:bg-white/20 transition-colors">
              <Search size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {input.length > 2 && (
        <div className="mt-4 md:mt-6">
          {results.length > 0 ? (
            <div>
              <p className="text-stone-500 text-[10px] md:text-xs uppercase tracking-widest mb-3 pl-2">
                Wisdom Found:
              </p>
              {/* Responsive Grid: 1 col mobile, 2 cols tablet+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {results.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => navigateToCard(card.id)}
                    className="flex items-start gap-3 md:gap-4 bg-spiritual-card hover:bg-white/5 border border-white/10 hover:border-saffron/40 p-4 md:p-5 rounded-xl text-left transition-all duration-300 group active:scale-95"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-900 flex items-center justify-center text-saffron border border-white/5 flex-shrink-0">
                      <BookOpen size={16} className="md:w-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-parchment font-serif font-bold text-base md:text-lg group-hover:text-saffron transition-colors truncate">
                        {card.id.replace(/_/g, ' ').toUpperCase()}
                      </h4>
                      <p className="text-stone-500 text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">
                        {card.chapter}
                      </p>
                      <p className="text-parchment-dim text-xs md:text-sm line-clamp-2 opacity-80">
                        {card.nuance.replace(/"/g, '')}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-4 opacity-60">
               <p className="text-stone-500 text-xs md:text-sm italic">
                 "No direct match found..." <br/>
                 <span className="text-[10px] md:text-xs not-italic mt-2 block opacity-50">
                   Try: Anxiety, Fear, Lonely, Anger
                 </span>
               </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}