import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import { GITA_EMOTIONS } from '../../lib/data';

export default function WisdomLibrary() {
  return (
    <div className="min-h-screen bg-spiritual-bg pb-20">
      <Navbar />
      
      <main className="pt-24 px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-parchment mb-4">
            The Wisdom Index
          </h1>
          <p className="text-stone-400 text-sm md:text-base">
            Explore guidance for every emotional state.
          </p>
        </div>

        {/* The Grid of Links (SEO Goldmine) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GITA_EMOTIONS.map((emotion) => (
            <Link 
              key={emotion.id}
              to={`/wisdom/${emotion.id}`} // <--- Links to unique URL
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 transition-all"
            >
              <span className="text-2xl opacity-70 group-hover:scale-110 transition-transform">
                {emotion.icon}
              </span>
              <div>
                <h3 className="text-parchment font-serif font-bold text-lg group-hover:text-saffron transition-colors">
                  {emotion.label}
                </h3>
                <div className="flex items-center gap-1 text-[10px] text-stone-500 uppercase tracking-widest mt-1">
                  <BookOpen size={10} />
                  <span>Read Verse</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}