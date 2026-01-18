import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import Flashcard from './Flashcard';
import BookReviews from '../../components/ui/BookReviews'; // <--- IMPORT THIS
import { SHLOKAS, ALL_BOOKS } from '../../lib/data';

export default function Reader() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  
  const cards = SHLOKAS[bookId] || SHLOKAS['gita']; 
  const bookInfo = ALL_BOOKS.find(b => b.id === bookId);

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col overflow-y-auto"> {/* Enable vertical scroll */}
      
      {/* Header */}
      <div className="pt-6 px-6 flex items-center justify-between bg-spiritual-bg z-50 sticky top-0 pb-4 border-b border-white/5">
        <button 
          onClick={() => navigate(-1)} 
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-parchment hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
          <h2 className="font-serif text-parchment font-bold tracking-wide">{bookInfo?.title || 'Scripture'}</h2>
          <p className="text-[10px] text-saffron uppercase tracking-widest font-bold">
            {cards.length} Verses
          </p>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-parchment-dim">
          <MoreVertical size={20} />
        </button>
      </div>
      
      {/* Card Container (Horizontal Scroll) */}
      <div className="flex-none py-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-20 hide-scrollbar items-center pb-8">
          {cards && cards.map((card) => (
            <div key={card.id} className="min-w-full md:min-w-[600px] snap-center flex items-center justify-center px-2">
              <Flashcard 
                  data={card} 
                  bookId={bookId || 'gita'} 
                  total={cards.length} 
              />
            </div>
          ))}
        </div>
        
        {/* Helper Text */}
        <div className="text-center">
          <p className="text-[10px] text-parchment-dim uppercase tracking-widest opacity-50">
            Swipe cards left/right
          </p>
        </div>
      </div>

      {/* === REVIEWS SECTION (New) === */}
      {/* Passing the ID so reviews are unique to this book */}
      <BookReviews bookId={bookId} bookTitle={bookInfo?.title} />

    </div>
  );
}