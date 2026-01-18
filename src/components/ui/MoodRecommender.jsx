import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { SHLOKAS } from '../../lib/data';

// Simple "AI" Keyword Mapping
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
];

export default function MoodRecommender() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Get Gita Cards for recommendations
  const gitaCards = SHLOKAS['gita'];

  const handleSearch = (e) => {
    const text = e.target.value;
    setInput(text);

    if (text.length < 3) {
      setResults([]);
      return;
    }

    const lowerText = text.toLowerCase();
    
    // Find matching keywords
    const matches = KEYWORD_MAP.filter(item => 
      item.keys.some(key => lowerText.includes(key))
    );

    // Map matched IDs to actual Card Data
    const foundCards = matches
      .map(match => gitaCards.find(card => card.id === match.id))
      .filter(Boolean); // Remove undefined if id not found

    // Remove duplicates and limit to 3
    const uniqueCards = [...new Set(foundCards)].slice(0, 3);
    setResults(uniqueCards);
  };

  const navigateToCard = (cardId) => {
    // Navigate to Gita Reader and open specific emotion logic if needed
    // For now, we just go to the reader. 
    // Ideally, the Reader would accept a ?cardId=X query param, 
    // but simply opening the book is a good start.
    navigate(`/read/gita`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 animate-fade-in px-4">
      
      {/* Input Container */}
      <div className="relative group z-20">
        <div className="absolute inset-0 bg-saffron/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-2 flex items-center shadow-2xl transition-all focus-within:border-saffron/50 focus-within:bg-black/60">
          <div className="pl-4 text-saffron animate-pulse">
            <Sparkles size={20} />
          </div>
          
          <input 
            type="text"
            value={input}
            onChange={handleSearch}
            placeholder="How are you feeling? (e.g. anxious, work stress, lonely)..."
            className="w-full bg-transparent border-none text-parchment placeholder:text-stone-500 px-4 py-3 focus:outline-none text-lg font-serif"
          />
          
          <div className="pr-2">
            <button className="bg-white/10 p-2 rounded-xl text-stone-400 hover:text-saffron hover:bg-white/20 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Results Dropdown / Grid */}
      {input.length > 2 && (
        <div className="mt-6">
          {results.length > 0 ? (
            <div>
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-4 pl-2">
                Ancient Wisdom for "{input}"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => navigateToCard(card.id)}
                    className="flex items-start gap-4 bg-spiritual-card hover:bg-white/5 border border-white/10 hover:border-saffron/40 p-5 rounded-xl text-left transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-saffron border border-white/5 group-hover:scale-110 transition-transform">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h4 className="text-parchment font-serif font-bold text-lg group-hover:text-saffron transition-colors">
                        {card.id.replace('_', ' ').toUpperCase()}
                      </h4>
                      <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">
                        {card.chapter}
                      </p>
                      <p className="text-parchment-dim text-sm line-clamp-2 opacity-80">
                        {card.nuance.replace(/"/g, '')}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-[10px] font-bold text-saffron uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        <span>Read Verse</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Fallback State */
            <div className="text-center py-4 opacity-60">
               <p className="text-stone-500 text-sm italic">
                 "Seeking guidance for the soul..." <br/>
                 <span className="text-xs not-italic mt-2 block opacity-50">
                   Try keywords like: Fear, Stress, Lonely, Anger
                 </span>
               </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}