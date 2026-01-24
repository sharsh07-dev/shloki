import { useState } from 'react';
import { Sparkles, X, ArrowRight, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 1. Import Link
import { ALL_EMOTIONS, SHLOKAS } from '../../lib/data'; 
import { MOOD_KEYWORDS } from '../../lib/keywords';
export default function MoodRecommender() {
  const [query, setQuery] = useState('');

  // 1. FILTER LOGIC
  const getDisplayedMoods = () => {
    if (!query) return [];

    const lowerQuery = query.toLowerCase();
    const words = lowerQuery.split(/\s+/).filter(w => w.length > 2); 

    const matches = ALL_EMOTIONS.map(m => {
      let score = 0;
      const label = m.label.toLowerCase();
      const keywords = m.keywords?.map(k => k.toLowerCase()) || [];

      if (label.includes(lowerQuery)) score += 10;

      words.forEach(word => {
        if (label.includes(word)) score += 5;
        if (keywords.some(k => k.includes(word))) score += 3;
      });

      return { ...m, score };
    })
      .filter(m => m.score > 0)
      .sort((a, b) => b.score - a.score);

    if (matches.length > 0) return matches.slice(0, 4);

    // Fallback
    return ALL_EMOTIONS.filter(m =>
      ['anger', 'fear', 'overthinking', 'doubt', 'motivation', 'anxiety'].includes(m.id)
    ).slice(0, 4);
  };

  const displayedMoods = getDisplayedMoods();

  const getCardDetails = (mood) => {
    const bookKey = mood.type === 'power' ? '48laws' : 'gita';
    const data = SHLOKAS[bookKey]?.find(d => d.id === mood.shlokaId);
    return data || {};
  };

  return (
    <div className="w-full max-w-5xl mx-auto z-40 relative">

      {/* === SEARCH BAR === */}
      <div
        className="
          flex items-center gap-3 
          bg-stone-900/80 backdrop-blur-xl
          border border-white/10 
          rounded-full px-6 py-4 
          cursor-text group 
          transition-all duration-300 ease-out
          hover:border-saffron hover:bg-stone-900 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] hover:scale-[1.01]
          focus-within:border-saffron focus-within:bg-black focus-within:ring-1 focus-within:ring-saffron/50 focus-within:shadow-[0_0_40px_rgba(234,179,8,0.25)] focus-within:scale-[1.02]
          mb-10 max-w-2xl mx-auto shadow-2xl
        "
      >
        <Sparkles size={20} className="text-stone-500 group-hover:text-saffron group-focus-within:text-saffron transition-colors duration-300" />

        <input
          type="text"
          className="bg-transparent border-none outline-none text-parchment placeholder:text-stone-500 text-base md:text-lg w-full group-focus-within:placeholder:text-stone-600 font-serif tracking-wide"
          placeholder="How do you feel? (e.g. anxious, ignored)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-stone-500 hover:text-white transition-colors hover:rotate-90 duration-200"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* === RESULTS GRID === */}
      {query && (
        <div className="animate-fade-in px-4">

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                {displayedMoods.length > 0 ? 'Wisdom Found' : 'No matches found'}
              </span>
            </div>
          </div>

          {displayedMoods.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {displayedMoods.map((mood) => {
                const details = getCardDetails(mood);
                const isPower = mood.type === 'power';

                return (
                  // 👇 2. Changed from <button> to <Link> for SEO
                  // Note: 'block' class ensures it behaves like a container
                  <Link
                    key={mood.id}
                    to={`/card/${mood.shlokaId}`} // 👈 3. Bot follows this href
                    className="block group relative flex flex-col p-6 bg-stone-900/60 border border-white/10 rounded-xl hover:border-saffron/50 hover:bg-stone-900 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-left shadow-lg hover:shadow-saffron/10"
                  >
                    {/* Header: Icon + Book Label */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-saffron/20">
                        {mood.icon}
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/40 border border-white/5 text-[9px] font-bold uppercase tracking-wider text-stone-500">
                        {isPower ? <Shield size={10} /> : <BookOpen size={10} />}
                        <span>{isPower ? '48 Laws' : 'Bhagavad Gita'}</span>
                      </div>
                    </div>

                    {/* Content: Title + Reference */}
                    <div className="mb-4">
                      <h3 className="font-serif text-xl text-parchment leading-tight group-hover:text-white transition-colors mb-1">
                        {mood.label}
                      </h3>
                      <p className="text-xs text-saffron/80 font-medium uppercase tracking-wide">
                        {isPower ? details.chapter?.split(':')[0] : details.chapter?.split(',')[0]}
                      </p>
                    </div>

                    {/* Nuance / Quote Snippet */}
                    <p className="text-stone-400 text-xs leading-relaxed italic border-l-2 border-white/10 pl-3 mb-4 line-clamp-2 group-hover:border-saffron/50 transition-colors">
                      "{details.nuance || 'Ancient wisdom awaits...'}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-2 mt-auto text-[10px] font-bold uppercase tracking-widest text-stone-600 group-hover:text-saffron transition-colors">
                      <span>Read Chapter</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}