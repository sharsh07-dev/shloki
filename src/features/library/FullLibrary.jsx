import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X } from 'lucide-react';
import BookCard from '../../components/ui/BookCard';
import Navbar from '../../components/layout/Navbar'; // <--- Restored Navbar
import { ALL_BOOKS } from '../../lib/data';

export default function FullLibrary() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // === FIX: SCROLL TO TOP ON LOAD ===
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // === SEARCH LOGIC ===
  // Filters books based on Title OR Subtitle (case-insensitive)
  const filteredBooks = ALL_BOOKS.filter((book) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      book.title.toLowerCase().includes(query) || 
      book.subtitle.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-spiritual-bg text-parchment font-sans selection:bg-saffron selection:text-white">
      <Navbar />

      <div className="min-h-screen pb-20 pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-fade-in">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')} 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-parchment hover:bg-white/10 transition-colors active:scale-95"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-parchment font-bold">Grand Library</h1>
                <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">
                  {filteredBooks.length} Sacred Volumes Found
                </p>
              </div>
            </div>
            
            {/* Search Bar (Functional) */}
            <div className="relative w-full md:w-80 group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 group-focus-within:text-saffron transition-colors" size={18} />
               
               <input 
                 type="text" 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 placeholder="Search scriptures..." 
                 className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-10 text-sm text-parchment placeholder:text-stone-600 focus:outline-none focus:border-saffron/50 focus:bg-black/40 transition-all"
               />
               
               {/* Clear Button (Visible only when typing) */}
               {searchQuery && (
                 <button 
                   onClick={() => setSearchQuery('')}
                   className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                 >
                   <X size={14} />
                 </button>
               )}
            </div>
          </div>

          {/* The Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 animate-fade-in">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 opacity-50 animate-fade-in">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-500">
                <Search size={32} />
              </div>
              <p className="text-parchment font-serif text-lg">No scriptures found matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-saffron text-sm hover:underline uppercase tracking-widest font-bold"
              ><SEO 
  title="The Vault of Wisdom" 
  description="Explore a curated library of ancient texts decoded for modern life. From Machiavelli to Krishna, find your strategy."
/>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}