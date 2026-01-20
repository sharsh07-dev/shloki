import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Sparkles, BookOpen } from 'lucide-react';
import Flashcard from './Flashcard';
import { SHLOKAS, GITA_EMOTIONS } from '../../lib/data';

export default function SingleCardPage() {
  const { cardId } = useParams(); // Gets 'anger', 'fear', etc. from URL
  const navigate = useNavigate();

  // 1. Find the Card Data
  const gitaCards = SHLOKAS['gita'];
  const cardData = gitaCards.find(c => c.id === cardId);
  
  // 2. Find the Emotion Label (for the title)
  const emotionInfo = GITA_EMOTIONS.find(e => e.id === cardId);
  const pageTitle = emotionInfo ? emotionInfo.label : 'Gita Wisdom';

  // 3. SEO: Update Browser Title & Meta Description dynamically
  useEffect(() => {
    if (cardData) {
      document.title = `${pageTitle} - Ancient Wisdom | Shloki`;
      
      // Update Meta Description (Optional but good for SEO)
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = `Find peace and answers for ${pageTitle} using ancient wisdom from the Bhagavad Gita.`;
    }
  }, [cardData, pageTitle]);

  // 4. Handle 404 (Card not found)
  if (!cardData) {
    return (
      <div className="min-h-screen bg-spiritual-bg flex flex-col items-center justify-center text-parchment p-6 text-center">
        <h2 className="font-serif text-3xl mb-4">Wisdom Not Found</h2>
        <p className="mb-8 text-stone-400">This page does not exist in our library.</p>
        <Link to="/library" className="bg-saffron text-white px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest">
          Return to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col">
      
      {/* Navbar / Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-spiritual-bg/95 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-parchment">
          <ArrowLeft size={20} />
        </button>

        <span className="text-saffron text-[10px] font-bold uppercase tracking-[0.2em]">
          {pageTitle}
        </span>

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-parchment">
          <Share2 size={18} />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-24 pb-12 px-4 flex flex-col items-center animate-fade-in">
        
        {/* Intro Text (Great for SEO - "Low Value Content" Fix) */}
        <div className="max-w-2xl text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-parchment mb-4">
            Overcoming {pageTitle}
          </h1>
          <p className="text-stone-400 text-sm md:text-base leading-relaxed">
            Ancient texts offer a timeless perspective on <strong>{pageTitle.toLowerCase()}</strong>. 
            Below is a specific verse from the Bhagavad Gita selected to help guide your mind back to peace.
          </p>
        </div>

        {/* The Card */}
        <div className="w-full flex justify-center mb-12">
           <Flashcard data={cardData} total={1} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link to="/" className="px-6 py-3 rounded-full border border-stone-600 text-stone-400 font-bold uppercase text-xs tracking-widest hover:border-saffron hover:text-saffron transition-colors">
            Home
          </Link>
          <Link to="/library" className="px-6 py-3 rounded-full bg-saffron/10 border border-saffron/30 text-saffron font-bold uppercase text-xs tracking-widest hover:bg-saffron hover:text-white transition-colors">
            Explore More
          </Link>
        </div>

      </main>
    </div>
  );
}