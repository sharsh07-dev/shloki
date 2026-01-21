import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Home, Share2 } from 'lucide-react';

import Flashcard from './Flashcard'; 
import Navbar from '../../components/layout/Navbar';
import { SHLOKAS } from '../../lib/data'; 

export default function SingleCardPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [bookId, setBookId] = useState('gita');

  useEffect(() => {
    // Safety Check
    if (!SHLOKAS) return;

    // 1. Search in Gita
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
      console.warn(`Card ${cardId} not found.`);
    }
  }, [cardId, navigate]);

  if (!cardData) {
    return (
      <div className="min-h-screen bg-spiritual-bg flex items-center justify-center">
         <div className="text-saffron animate-pulse">Loading Wisdom...</div>
      </div>
    );
  }

  // === SEO HELPERS ===
  const cleanDescription = cardData.translation 
    ? cardData.translation.replace(/\n/g, ' ').substring(0, 160) 
    : 'Ancient wisdom for modern life.';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article", 
    "headline": `${cardData.chapter}: ${cardData.sanskrit || ''}`,
    "description": cardData.translation, // FULL translation for Google to read
    "author": {
      "@type": "Organization",
      "name": "Shloki"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shloki",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shloki.in/logo.png"
      }
    },
    "isPartOf": {
      "@type": "Book",
      "name": bookId === '48laws' ? "The 48 Laws of Power" : "Bhagavad Gita"
    }
  };

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