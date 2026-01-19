import { Link } from 'react-router-dom';
import { ArrowRight, Book } from 'lucide-react';

export default function BookCard({ book }) {
  return (
    <Link 
      to={`/read/${book.id}`}
      // RESPONSIVE LAYOUT: 
      // Mobile: 'flex-row' (Horizontal List) 
      // Desktop: 'flex-col' (Vertical Card)
      className="group flex flex-row md:flex-col bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-saffron/40 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none"
    >
      {/* IMAGE CONTAINER */}
      {/* Mobile: Fixed width w-28, Full height of card
          Desktop: Full width w-full, Height h-64 */}
      <div className="w-28 md:w-full h-auto md:h-64 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse" /> {/* Placeholder */}
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Overlay only visible on desktop hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white">
            <Book size={20} />
          </div>
        </div>
      </div>

      {/* TEXT CONTENT */}
      {/* Mobile: Padding p-4, justifies center */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center md:justify-start">
        <div className="flex items-start justify-between mb-1 md:mb-2">
           <h3 className="font-serif text-lg md:text-2xl font-bold text-stone-800 dark:text-parchment leading-tight">
             {book.title}
           </h3>
           {/* Icon only on mobile */}
           <ArrowRight size={16} className="text-saffron -rotate-45 md:hidden opacity-50" />
        </div>
        
        <p className="text-[10px] md:text-xs text-saffron font-bold uppercase tracking-widest mb-2 md:mb-3">
          {book.subtitle}
        </p>
        
        <p className="text-stone-500 dark:text-parchment-dim text-xs md:text-sm line-clamp-2 md:line-clamp-3 leading-relaxed">
          {book.description}
        </p>
        
        {/* Desktop Footer (Hidden on Mobile to save space) */}
        <div className="hidden md:flex items-center gap-2 mt-4 pt-4 border-t border-stone-100 dark:border-white/5 text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 group-hover:text-saffron transition-colors">
          <span>Start Reading</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}