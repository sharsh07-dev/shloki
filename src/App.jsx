import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import BookCard from './components/ui/BookCard';
import Reader from './features/flashcards/Reader';
import FullLibrary from './features/library/FullLibrary';
import FeedbackModal from './components/ui/FeedbackModal';

import MoodRecommender from './components/ui/MoodRecommender';
import HeroFlashcards from './components/ui/HeroFlashcards';
import { HERO_BOOKS } from './lib/data';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-spiritual-bg pb-20 selection:bg-saffron selection:text-white font-sans transition-colors duration-300">
        
        <FeedbackModal />
  
        
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main className="pt-20 md:pt-32 px-4 md:px-8 max-w-6xl mx-auto">
                
                {/* Hero Section */}
                <div className="mb-8 md:mb-12 text-center animate-fade-in">
                  <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-saffron/20 bg-saffron-dim mb-4 md:mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-saffron">
                      Daily Wisdom
                    </span>
                  </div>
                  
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-parchment mb-6 md:mb-8">
                    Ancient Texts, <br />
                    <span className="text-saffron text-glow">Modern Spirit.</span>
                  </h1>

                  <MoodRecommender />
                </div>

                {/* Cards Section */}
                <HeroFlashcards />

                {/* Books Section */}
                <div className="flex items-center justify-between mb-4 md:mb-8 border-b border-black/5 dark:border-white/5 pb-2 md:pb-4 mt-6 md:mt-12">
                  <h2 className="font-serif text-lg md:text-2xl text-parchment">Sacred Library</h2>
                  <span className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest block">
                    Select a Book
                  </span>
                </div>

                {/* Grid: 1 Col on Mobile (Compact), 3 on Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12 px-0 mb-10 md:mb-16">
                  {HERO_BOOKS.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>

                {/* Footer */}
                <div className="text-center pb-8 md:pb-10">
                   <p className="text-stone-400 mb-4 md:mb-6 font-serif italic text-sm md:text-base">
                     "Knowledge is an ocean. Dive deeper."
                   </p>
                   <Link 
                     to="/library"
                     className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full border border-saffron/30 text-saffron hover:bg-saffron hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] md:text-xs group active:scale-95"
                   >
                     Explore Full Library
                     <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </main>
            </>
          } />

          <Route path="/library" element={<FullLibrary />} />
          <Route path="/read/:bookId" element={<Reader />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;