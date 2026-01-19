import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Sparkles, LayoutGrid } from 'lucide-react';
import Flashcard from './Flashcard';
import BookReviews from '../../components/ui/BookReviews';
import { SHLOKAS, ALL_BOOKS, GITA_EMOTIONS } from '../../lib/data';

export default function Reader() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const allCards = SHLOKAS[bookId] || SHLOKAS['gita']; 
  const bookInfo = ALL_BOOKS.find(b => b.id === bookId);
  const isGita = bookId === 'gita';

  const initialEmotionId = location.state?.initialEmotionId;
  const initialEmotion = initialEmotionId 
    ? GITA_EMOTIONS.find(e => e.id === initialEmotionId) 
    : null;
  
  const [selectedEmotion, setSelectedEmotion] = useState(initialEmotion || null);
  const [viewMode, setViewMode] = useState((initialEmotion || !isGita) ? 'reader' : 'emotions'); 

  // Reset state when entering new book
  useEffect(() => {
     if (initialEmotion) {
        setSelectedEmotion(initialEmotion);
        setViewMode('reader');
     }
  }, [initialEmotion]);

  const cardsToDisplay = selectedEmotion 
    ? allCards.filter(c => c.id === selectedEmotion.shlokaId)
    : allCards;

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setViewMode('reader');
  };

  const handleReset = () => {
    setSelectedEmotion(null);
    setViewMode('emotions');
  };

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col overflow-y-auto">
      
      {/* Header - Sticky & Touch Friendly */}
      <div className="pt-4 md:pt-6 px-4 md:px-6 flex items-center justify-between bg-spiritual-bg/95 backdrop-blur-sm z-50 sticky top-0 pb-3 md:pb-4 border-b border-white/5">
        <button 
          onClick={() => {
            if (viewMode === 'reader' && isGita && selectedEmotion) {
              handleReset(); 
            } else {
              navigate(-1); 
            }
          }} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-parchment hover:bg-white/10 active:scale-95 transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="text-center">
          <h2 className="font-serif text-parchment font-bold tracking-wide text-lg md:text-2xl">{bookInfo?.title || 'Scripture'}</h2>
          <p className="text-[9px] md:text-[10px] text-saffron uppercase tracking-widest font-bold mt-1">
            {selectedEmotion ? `Prescription: ${selectedEmotion.label}` : (isGita && viewMode === 'emotions' ? 'Emotional Guide' : `${allCards.length} Verses`)}
          </p>
        </div>
        
        <button 
           onClick={() => {
             if(isGita) {
               setSelectedEmotion(null);
               setViewMode(viewMode === 'emotions' ? 'reader' : 'emotions');
             }
           }}
           className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-parchment-dim hover:text-saffron active:scale-95 transition-all"
        >
          {viewMode === 'emotions' ? <LayoutGrid size={20} /> : <Sparkles size={20} />}
        </button>
      </div>
      
      {/* === BODY === */}

      {isGita && viewMode === 'emotions' ? (
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 animate-fade-in">
          
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl text-parchment mb-2">How are you feeling?</h3>
            <p className="text-parchment-dim text-xs md:text-sm">Select an emotion to find the guiding verse.</p>
          </div>

          {/* GRID: 2 cols on mobile, 3 on tablet, 5 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {GITA_EMOTIONS.map((emotion) => (
              <button
                key={emotion.id}
                onClick={() => handleEmotionClick(emotion)}
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

          <div className="text-center mt-10 md:mt-12">
            <button 
              onClick={() => setViewMode('reader')}
              className="text-[10px] md:text-xs text-stone-500 hover:text-parchment uppercase tracking-widest border-b border-transparent hover:border-parchment transition-all pb-1"
            >
              Skip & Read All Verses
            </button>
          </div>
        </div>
      ) : (
        
        /* 2. READER MODE */
        <div className="flex-none py-6 md:py-8 animate-fade-in">
          {selectedEmotion && (
             <div className="text-center mb-4 md:mb-6">
               <span className="inline-block bg-saffron/10 text-saffron px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-saffron/20 shadow-glow-sm">
                 Prescription for {selectedEmotion.label}
               </span>
             </div>
          )}

          {/* Card Carousel - Optimized for Mobile Swiping */}
         <div className={`flex gap-4 px-4 md:px-20 hide-scrollbar items-center pb-4 min-h-[65vh] ${
      selectedEmotion 
        ? 'justify-center' 
        : 'overflow-x-auto snap-x snap-mandatory touch-pan-x'
    }`}
  >
            {cardsToDisplay && cardsToDisplay.map((card) => (
              <div key={card.id} className="min-w-[95vw] md:min-w-[600px] snap-center flex items-center justify-center">
                <Flashcard 
                    data={card} 
                    bookId={bookId || 'gita'} 
                    total={allCards.length} 
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-[9px] md:text-[10px] text-parchment-dim uppercase tracking-widest opacity-50">
              {selectedEmotion ? "Read to heal" : "Swipe cards left/right"}
            </p>
          </div>
        </div>
      )}

      {/* REVIEWS */}
      {viewMode === 'reader' && (
        <BookReviews bookId={bookId} bookTitle={bookInfo?.title} />
      )}

    </div>
  );
}