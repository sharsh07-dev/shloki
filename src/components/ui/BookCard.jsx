import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Layers, Clock } from 'lucide-react';

export default function BookCard({ book }) {
  // === 1. LOCKED / COMING SOON STATE ===
  if (book.comingSoon) {
    return (
      <div className="flex flex-row md:flex-col bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/5 rounded-xl overflow-hidden opacity-60 cursor-not-allowed relative grayscale select-none">
        
        {/* LOCK OVERLAY (Desktop & Mobile) */}
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-stone-100/10 dark:bg-black/20 backdrop-blur-[1px]">
          <div className="bg-stone-900/90 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/10">
            <Lock size={14} className="text-stone-400" />
            <span className="text-xs font-bold uppercase tracking-widest">Coming Soon</span>
          </div>
        </div>

        {/* IMAGE CONTAINER (Dimmed) */}
        <div className="w-28 md:w-full h-auto md:h-96 relative flex-shrink-0 bg-stone-200 dark:bg-stone-900/50">
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-full h-full object-contain p-4 opacity-50"
          />
        </div>

        {/* TEXT CONTENT (Inactive) */}
        <div className="flex-1 p-4 md:p-6 flex flex-col justify-center md:justify-start">
          <div className="flex items-start justify-between mb-1 md:mb-2">
             <h3 className="font-serif text-lg md:text-2xl font-bold text-stone-500 dark:text-stone-600 leading-tight">
               {book.title}
             </h3>
          </div>
          <p className="text-[10px] md:text-xs text-stone-400 font-bold uppercase tracking-widest mb-2 md:mb-3 flex items-center gap-1">
            <Clock size={10} /> In Production
          </p>
          <p className="text-stone-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
            {book.description}
          </p>
        </div>
      </div>
    );
  }

  // === 2. ACTIVE STATE (Original) ===
  return (
    <Link 
      to={`/read/${book.id}`}
      className="group flex flex-row md:flex-col bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-saffron/40 transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-none"
    >
      {/* IMAGE CONTAINER */}
      <div className="w-28 md:w-full h-auto md:h-96 relative overflow-hidden flex-shrink-0 bg-stone-100 dark:bg-stone-900">
        <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse" /> 
        <img 
          src={book.cover} 
          alt={book.title}
          className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 relative z-10"
        />
        
        {/* Overlay Icon */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white">
            <Layers size={20} />
          </div>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center md:justify-start">
        <div className="flex items-start justify-between mb-1 md:mb-2">
           <h3 className="font-serif text-lg md:text-2xl font-bold text-stone-800 dark:text-parchment leading-tight">
             {book.title}
           </h3>
           <ArrowRight size={16} className="text-saffron -rotate-45 md:hidden opacity-50" />
        </div>
        
        <p className="text-[10px] md:text-xs text-saffron font-bold uppercase tracking-widest mb-2 md:mb-3">
          {book.subtitle}
        </p>
        
        <p className="text-stone-500 dark:text-parchment-dim text-xs md:text-sm line-clamp-2 md:line-clamp-3 leading-relaxed">
          {book.description}
        </p>
        
        {/* BUTTON */}
        <div className="hidden md:flex items-center gap-2 mt-4 pt-4 border-t border-stone-100 dark:border-white/5 text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 group-hover:text-saffron transition-colors">
          <span>Open Flashcards</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}