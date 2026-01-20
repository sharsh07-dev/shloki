import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Home, Share2 } from 'lucide-react';
import Flashcard from './Flashcard';
import Navbar from '../../components/layout/Navbar';
// IMPORT BOTH DATA SETS
import { SHLOKAS, HERO_BOOKS } from '../../lib/data'; 

export default function SingleCardPage() {
  const { cardId } = useParams(); // e.g. "anger" or "law-1"
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [bookId, setBookId] = useState('gita');
<Helmet>
  <title>{cardData ? `${cardData.chapter} - Shloki Wisdom` : 'Shloki Flashcards'}</title>
  <meta name="description" content={cardData ? cardData.translation.substring(0, 150) : 'Learn ancient wisdom.'} />
</Helmet>
  useEffect(() => {
    // 1. Search in Gita
    let found = SHLOKAS['gita'].find(c => c.id === cardId);
    let foundBook = 'gita';

    // 2. If not found, Search in 48 Laws
    if (!found) {
       found = SHLOKAS['48laws'].find(c => c.id === cardId);
       foundBook = '48laws';
    }

    if (found) {
      setCardData(found);
      setBookId(foundBook);
      // SEO Title Update
      document.title = `${found.sanskrit || found.chapter} - Shloki Wisdom`;
    } else {
      // If mostly invalid, default to home
      navigate('/'); 
    }
  }, [cardId, navigate]);

  if (!cardData) return null;

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center pt-20 pb-10 px-4">
        
        {/* Navigation Header */}
        <div className="w-full max-w-3xl flex items-center justify-between mb-6 animate-fade-in">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-stone-400 hover:text-saffron transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Home
          </button>
          
          <div className="flex gap-2">
             <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-parchment transition-colors">
               <Share2 size={16} />
             </button>
          </div>
        </div>

        {/* Intro Text for SEO / Context */}
        <div className="text-center mb-8 max-w-xl animate-fade-in">
           <h1 className="font-serif text-2xl md:text-4xl text-parchment mb-2">
             {cardData.chapter}
           </h1>
           <p className="text-stone-500 text-sm">
             {bookId === '48laws' ? 'Strategic Mastery' : 'Ancient Wisdom'}
           </p>
        </div>

        {/* The Card */}
        <div className="w-full max-w-3xl flex justify-center">
           <Flashcard 
             data={cardData} 
             bookId={bookId} 
             total={1} 
           />
        </div>

      </main>
    </div>
  );
}