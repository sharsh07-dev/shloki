import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import BookCard from './components/ui/BookCard';
import Reader from './features/flashcards/Reader';
import FullLibrary from './features/library/FullLibrary';
import FeedbackModal from './components/ui/FeedbackModal';
import FloatingFeedback from './components/ui/FloatingFeedback'; // <--- NEW IMPORT
import { HERO_BOOKS } from './lib/data';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-spiritual-bg pb-20 selection:bg-saffron selection:text-white font-sans">
        
        {/* Global Components */}
        <FeedbackModal />
        <FloatingFeedback /> {/* <--- ADDED HERE (Visible on all pages) */}
        
        <Routes>
          {/* === Home Route === */}
          <Route path="/" element={
            <>
              <Navbar />
              <main className="pt-28 px-8 max-w-6xl mx-auto">
                
                {/* Hero Section */}
                <div className="mb-16 text-center animate-fade-in">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saffron/20 bg-saffron-dim mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-saffron">
                      Daily Wisdom
                    </span>
                  </div>
                  
                  <h1 className="font-serif text-5xl md:text-6xl leading-tight text-parchment mb-6">
                    Ancient Texts, <br />
                    <span className="text-saffron text-glow">Modern Spirit.</span>
                  </h1>
                </div>

                {/* Most Used Section Heading */}
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <h2 className="font-serif text-2xl text-parchment">Most Read Scriptures</h2>
                  <span className="text-xs text-stone-500 uppercase tracking-widest hidden md:block">
                    Top Selections
                  </span>
                </div>

                {/* Top 3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 px-4 md:px-0 mb-16">
                  {HERO_BOOKS.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>

                {/* View More Button */}
                <div className="text-center pb-10">
                   <p className="text-stone-400 mb-6 font-serif italic">
                     "Knowledge is an ocean. Dive deeper."
                   </p>
                   <Link 
                     to="/library"
                     className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-saffron/30 text-saffron hover:bg-saffron hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs group"
                   >
                     Explore Full Library
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </main>
            </>
          } />

          {/* === Full Library Route === */}
          <Route path="/library" element={<FullLibrary />} />

          {/* === Reader Route === */}
          <Route path="/read/:bookId" element={<Reader />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;