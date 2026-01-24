import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Share2, ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async'; // 👈 1. Added Helmet Import

import Flashcard from './Flashcard'; 
import Navbar from '../../components/layout/Navbar';
// ✅ CORRECT (Default Import)
// ✅ CORRECT (Default Import)
import SEOContent from '../../components/SEOContent';
import SEO from "../../components/SEO"; // 👈 2. Added missing SEOContent Import
import { SHLOKAS } from '../../lib/data'; 


export default function SingleCardPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState(null);
  const [bookId, setBookId] = useState('gita');

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col">
      {/* 👇 3. Added Dynamic SEO Tags for Google */}
      <Helmet>
        <title>{cardData.chapter || 'Wisdom Card'} | Shloki</title>
        <meta 
          name="description" 
          content={cardData.nuance || cardData.translation || 'Explore ancient wisdom decoded for modern life.'} 
        />
        <link rel="canonical" href={`https://shloki.com/card/${cardData.id}`} />
      </Helmet>

      <Navbar />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center pt-24 pb-20 px-4">
        
        {/* Navigation Header */}
        <div className="w-full max-w-3xl flex items-center justify-between mb-6 animate-fade-in">
          <button 
            onClick={() => navigate('/library')}
            className="flex items-center gap-2 text-stone-400 hover:text-saffron transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Library
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
           <p className="text-stone-500 text-sm uppercase tracking-widest">
             {bookId === '48laws' ? 'Strategic Mastery' : 'Ancient Wisdom'}
           </p>
        </div>

        {/* The Flashcard */}
        <div className="w-full max-w-3xl flex justify-center mb-4">
           <Flashcard 
             data={cardData} 
             bookId={bookId} 
             total={1} 
           />
        </div>

        {/* 👇 1. SCROLL INDICATOR (Tells user to look down) */}
        <div className="flex flex-col items-center justify-center mb-16 mt-8 animate-bounce opacity-50">
           <span className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Scroll for Deep Meaning</span>
           <ChevronDown className="text-saffron" size={24} />
        </div>

        {/* 👇 2. SEO CONTENT */}
        <div className="w-full flex justify-center pb-20">
           <SEOContent data={cardData} bookId={bookId} />
        </div>

      </main>
    </div>
  );
}