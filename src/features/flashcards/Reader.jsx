import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Sparkles, LayoutGrid, Book, Lock } from 'lucide-react';
import Flashcard from './Flashcard';
import BookReviews from '../../components/ui/BookReviews';
import { BOOK_CONTENT, ALL_BOOKS, GITA_EMOTIONS } from '../../lib/data';

export default function Reader() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollContainerRef = useRef(null);
  
  // Logic to find cards
  const allCards = BOOK_CONTENT[bookId] || []; 
  const bookInfo = ALL_BOOKS.find(b => b.id === bookId);
  const isGita = bookId === 'gita';
  const isPowerLaws = bookId === '48laws';

  const initialEmotionId = location.state?.initialEmotionId;
  const initialEmotion = initialEmotionId && isGita
    ? GITA_EMOTIONS.find(e => e.id === initialEmotionId) 
    : null;
  
  // === STATE ===
  const [selectedCardId, setSelectedCardId] = useState(initialEmotion ? initialEmotion.shlokaId : null);
  
  // === VIEW MODE LOGIC (UPDATED) ===
  // 1. If we have a specific emotion (from Mood Search), go to READER.
  // 2. Otherwise, ALWAYS default to 'grid' (Table of Contents) for ALL books.
  const [viewMode, setViewMode] = useState(
    initialEmotion ? 'reader' : 'grid'
  );

  // === SCROLL FIXES ===
  useEffect(() => {
    // 1. Always scroll PAGE to top on load (Crucial for mobile)
    window.scrollTo(0, 0);

    // 2. If we are in Reader mode (swiping cards), reset the carousel scroll too
    if (viewMode === 'reader' && !selectedCardId && scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0;
    }
  }, [bookId, viewMode, selectedCardId]);

  // Logic: Which cards to show?
  const cardsToDisplay = selectedCardId 
    ? allCards.filter(c => c.id === selectedCardId)
    : allCards;

  const handleCardSelect = (id) => {
    setSelectedCardId(id);
    setViewMode('reader');
    // When entering reader mode, scroll to top again to focus on the card
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setSelectedCardId(null);
    setViewMode('grid');
  };

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col overflow-y-auto">
      
      {/* Header */}
      <div className="pt-4 md:pt-6 px-4 md:px-6 flex items-center justify-between bg-spiritual-bg/95 backdrop-blur-sm z-50 sticky top-0 pb-3 md:pb-4 border-b border-white/5">
        <button 
          onClick={() => {
            if (viewMode === 'reader') {
               handleReset(); // Go back to Grid
            } else {
               navigate(-1); // Go back to Home
            }
          }} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-parchment hover:bg-white/10 active:scale-95 transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="text-center">
          <h2 className="font-serif text-parchment font-bold tracking-wide text-lg md:text-2xl">{bookInfo?.title || 'Scripture'}</h2>
          <p className="text-[9px] md:text-[10px] text-saffron uppercase tracking-widest font-bold mt-1">
             {viewMode === 'grid' ? 'Table of Contents' : (selectedCardId ? (isPowerLaws ? `Law ${selectedCardId.replace('law-', '')}` : 'Wisdom Card') : 'Swipe to Read')}
          </p>
        </div>
        
        <button 
           onClick={() => {
             // Toggle between Grid and Reader
             if (viewMode === 'grid') {
                 setSelectedCardId(null); 
                 setViewMode('reader');
             } else {
                 setViewMode('grid');
             }
           }}
           className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-parchment-dim hover:text-saffron active:scale-95 transition-all"
        >
          {viewMode === 'grid' ? <Sparkles size={20} /> : <LayoutGrid size={20} />}
        </button>
      </div>
      
      {/* === BODY === */}

      {viewMode === 'grid' ? (
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 animate-fade-in">
          
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl text-parchment mb-2">
              {isGita ? "How are you feeling?" : "Table of Contents"}
            </h3>
            <p className="text-parchment-dim text-xs md:text-sm">
              {isGita ? "Select an emotion to find the guiding verse." : "Select a card to reveal its strategy."}
            </p>
          </div>

          {/* GITA EMOTION GRID */}
          {isGita && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {GITA_EMOTIONS.map((emotion) => (
                <button
                  key={emotion.id}
                  onClick={() => handleCardSelect(emotion.shlokaId)}
                  className="group flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 md:gap-3 bg-stone-900/60 border border-white/5 hover:border-saffron/40 hover:bg-stone-800 rounded-xl p-3 md:p-4 transition-all duration-200 hover:-translate-y-1 active:scale-95"
                >
                  <span className="text-2xl md:text-xl group-hover:scale-110 transition-transform duration-200">
                    {emotion.icon}
                  </span>
                  <span className="font-sans text-xs md:text-sm text-parchment font-medium group-hover:text-saffron transition-colors text-center md:text-left">
                    {emotion.label}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* 48 LAWS / LINEAR BOOK GRID */}
          {isPowerLaws && (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {allCards.map((card) => (
                 <button
                   key={card.id}
                   onClick={() => handleCardSelect(card.id)}
                   className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 text-left transition-all active:scale-95"
                 >
                   <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-saffron font-serif font-bold border border-white/5 shrink-0">
                     {card.id.split('-')[1]}
                   </div>
                   <div>
                     <h4 className="font-serif text-parchment font-bold text-sm md:text-base leading-tight mb-1">
                       {card.sanskrit}
                     </h4>
                     <p className="text-[10px] text-stone-500 uppercase tracking-widest">
                       Tap to Reveal
                     </p>
                   </div>
                   {card.locked && <Lock size={14} className="text-stone-600 ml-auto" />}
                 </button>
               ))}
             </div>
          )}

        </div>
      ) : (
        
        /* READER MODE (Carousel or Single Card) */
        <div className="flex-none py-6 md:py-8 animate-fade-in">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-4 md:gap-6 px-4 md:px-20 hide-scrollbar items-center pb-4 md:pb-8 min-h-[85vh] ${
              selectedCardId 
                ? 'justify-center' 
                : 'overflow-x-auto snap-x snap-mandatory touch-pan-x'
            }`}
          >
            {cardsToDisplay && cardsToDisplay.map((card) => (
              <div key={card.id} className="min-w-[90vw] md:min-w-[600px] snap-center flex items-center justify-center">
                <Flashcard 
                    data={card} 
                    bookId={bookId} 
                    total={allCards.length} 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* REVIEWS (Only show when reading) */}
      {viewMode === 'reader' && (
        <BookReviews bookId={bookId} bookTitle={bookInfo?.title} />
      )}

    </div>
  );
}