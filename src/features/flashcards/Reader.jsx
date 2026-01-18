import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import Flashcard from './Flashcard';
// CHANGED: Import ALL_BOOKS instead of BOOKS
import { SHLOKAS, ALL_BOOKS } from '../../lib/data';

export default function Reader() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  
  // Logic to find cards
  const cards = SHLOKAS[bookId] || SHLOKAS['gita']; 
  
  // CHANGED: Search inside ALL_BOOKS to find title/subtitle
  const bookInfo = ALL_BOOKS.find(b => b.id === bookId);

  return (
    <div className="min-h-screen bg-spiritual-bg flex flex-col">
      {/* Header */}
      <div className="pt-6 px-6 flex items-center justify-between bg-spiritual-bg z-50">
        <button 
          onClick={() => navigate(-1)} // Changed to navigate(-1) to go back to previous page (Home or Library)
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
      
      {/* Card Container */}
      <div className="flex-1 flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-20 pb-12 pt-4 hide-scrollbar items-center">
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
      
      {/* Footer Hint */}
      <div className="pb-8 text-center">
        <p className="text-[10px] text-parchment-dim uppercase tracking-widest opacity-50">
          Swipe left to continue journey
        </p>
      </div>
    </div>
  );
}