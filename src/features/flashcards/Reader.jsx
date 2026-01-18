import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Sparkles, LayoutGrid } from 'lucide-react';
import Flashcard from './Flashcard';
import BookReviews from '../../components/ui/BookReviews';
import { SHLOKAS, ALL_BOOKS, GITA_EMOTIONS } from '../../lib/data';

export default function Reader() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // <--- IMPORT THIS to catch the data
  
  // Logic to find cards
  const allCards = SHLOKAS[bookId] || SHLOKAS['gita']; 
  const bookInfo = ALL_BOOKS.find(b => b.id === bookId);
  const isGita = bookId === 'gita';

  // === NEW LOGIC: CHECK FOR DIRECT NAVIGATION ===
  const initialEmotionId = location.state?.initialEmotionId;
  const initialEmotion = initialEmotionId 
    ? GITA_EMOTIONS.find(e => e.id === initialEmotionId) 
    : null;
  
  // Initialize state: If we came from Recommender, start with emotion selected
  const [selectedEmotion, setSelectedEmotion] = useState(initialEmotion || null);
  // If we have an emotion, go straight to 'reader' mode. Otherwise show grid.
  const [viewMode, setViewMode] = useState((initialEmotion || !isGita) ? 'reader' : 'emotions'); 

  // Filter cards based on selection
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
      
      {/* Header */}
      <div className="pt-6 px-6 flex items-center justify-between bg-spiritual-bg z-50 sticky top-0 pb-4 border-b border-white/5">
        <button 
          onClick={() => {
            if (viewMode === 'reader' && isGita && selectedEmotion) {
              handleReset(); 
            } else {
              navigate(-1); 
            }
          }} 
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-parchment hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="text-center">
          <h2 className="font-serif text-parchment font-bold tracking-wide">{bookInfo?.title || 'Scripture'}</h2>
          <p className="text-[10px] text-saffron uppercase tracking-widest font-bold">
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
           className="w-10 h-10 rounded-full flex items-center justify-center text-parchment-dim hover:text-saffron transition-colors"
        >
          {viewMode === 'emotions' ? <LayoutGrid size={20} /> : <Sparkles size={20} />}
        </button>
      </div>
      
      {/* === CONDITIONAL RENDERING === */}

      {/* 1. EMOTION GRID */}
      {isGita && viewMode === 'emotions' ? (
        <div className="flex-1 max-w-5xl mx-auto px-6 py-12 animate-fade-in">
          
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl text-parchment mb-2">How are you feeling?</h3>
            <p className="text-parchment-dim text-sm">Select an emotion to find the guiding verse.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {GITA_EMOTIONS.map((emotion) => (
              <button
                key={emotion.id}
                onClick={() => handleEmotionClick(emotion)}
                className="group flex items-center gap-3 bg-stone-900/60 border border-white/5 hover:border-saffron/40 hover:bg-stone-800 rounded-lg p-3 transition-all duration-200 text-left hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                  {emotion.icon}
                </span>
                <span className="font-sans text-xs md:text-sm text-parchment font-medium group-hover:text-saffron transition-colors">
                  {emotion.label}
                </span>
              </button>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setViewMode('reader')}
              className="text-xs text-stone-500 hover:text-parchment uppercase tracking-widest border-b border-transparent hover:border-parchment transition-all pb-1"
            >
              Skip & Read All Verses
            </button>
          </div>
        </div>
      ) : (
        
        /* 2. FLASHCARD READER */
        <div className="flex-none py-8 animate-fade-in">
          {selectedEmotion && (
             <div className="text-center mb-6">
               <span className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-saffron/20 shadow-glow-sm">
                 Prescription for {selectedEmotion.label}
               </span>
             </div>
          )}

          <div className={`flex gap-6 px-4 md:px-20 hide-scrollbar items-center pb-8 ${
              selectedEmotion 
                ? 'justify-center' 
                : 'overflow-x-auto snap-x snap-mandatory'
            }`}
          >
            {cardsToDisplay && cardsToDisplay.map((card) => (
              <div key={card.id} className="min-w-full md:min-w-[600px] snap-center flex items-center justify-center px-2">
                <Flashcard 
                    data={card} 
                    bookId={bookId || 'gita'} 
                    total={allCards.length} 
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-[10px] text-parchment-dim uppercase tracking-widest opacity-50">
              {selectedEmotion ? "Read to heal" : "Swipe cards left/right"}
            </p>
          </div>
        </div>
      )}

      {/* === REVIEWS SECTION === */}
      {viewMode === 'reader' && (
        <BookReviews bookId={bookId} bookTitle={bookInfo?.title} />
      )}

    </div>
  );
}