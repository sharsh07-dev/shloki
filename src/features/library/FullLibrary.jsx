import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import BookCard from '../../components/ui/BookCard';
import { ALL_BOOKS } from '../../lib/data';

export default function FullLibrary() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-spiritual-bg pb-20 pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')} 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-parchment hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-parchment font-bold">Grand Library</h1>
              <p className="text-saffron text-xs uppercase tracking-widest mt-1">
                {ALL_BOOKS.length} Sacred Volumes
              </p>
            </div>
          </div>
          
          {/* Search Bar (Visual only for now) */}
          <div className="relative w-full md:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
             <input 
               type="text" 
               placeholder="Search scriptures..." 
               className="w-full bg-black/20 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-parchment focus:outline-none focus:border-saffron/50"
             />
          </div>
        </div>

        {/* The Big Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {ALL_BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}