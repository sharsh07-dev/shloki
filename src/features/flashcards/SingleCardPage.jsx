import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Home, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // <--- Added missing import
import Flashcard from '../../components/ui/Flashcard'; // Ensure path is correct
import Navbar from '../../components/layout/Navbar';
import { Helmet } from 'react-helmet-async';
// ⚠️ Check your data.js exports. If you use 'SHLOKAS', ensure it exists there.
import { SHLOKAS } from '../../lib/data'; 

export default function SingleCardPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [bookId, setBookId] = useState('gita');

  useEffect(() => {
    // Safety Check: Ensure data exists before searching
    if (!SHLOKAS) return;

    // 1. Search in Gita
    // (Using Optional Chaining ?. to prevent crashes if 'gita' key is missing)
    let found = SHLOKAS['gita']?.find(c => c.id == cardId);
    let foundBook = 'gita';

    // 2. If not found, Search in 48 Laws
    if (!found) {
       found = SHLOKAS['48laws']?.find(c => c.id == cardId);
       foundBook = '48laws';
    }

    if (found) {
      setCardData(found);
      setBookId(foundBook);
    } else {
      // If no card found, wait a moment then go home (avoids instant flicker)
      console.warn(`Card ${cardId} not found.`);
      // navigate('/'); // Uncomment if you want auto-redirect
    }
  }, [cardId, navigate]);

  // Loading State (Prevents crash while searching)
  if (!cardData) {
    return (
      <div className="min-h-screen bg-spiritual-bg flex items-center justify-center">
         <div className="text-saffron animate-pulse">Loading Wisdom...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col">
      {/* SEO META TAGS (Must be inside return) */}
      <Helmet>
        <title>{cardData ? `${cardData.chapter} - Shloki` : 'Shloki Wisdom'}</title>
        <meta 
          name="description" 
          content={cardData.translation ? cardData.translation.substring(0, 150) : 'Ancient wisdom for modern life.'} 
        />
      </Helmet>

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

        {/* Intro Text */}
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