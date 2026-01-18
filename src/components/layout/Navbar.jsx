import { Link } from 'react-router-dom';
import { MessageSquarePlus } from 'lucide-react';
import useStore from '../../store/useStore';

export default function Navbar() {
  const { toggleFeedback } = useStore();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-spiritual-bg/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* === LEFT SIDE: LOGO === */}
          {/* Clicking here goes to Home ('/') */}
          <Link to="/" className="flex items-center gap-3 group">
            
            {/* YOUR CUSTOM LOGO IMAGE */}
            <img 
              src="https://res.cloudinary.com/do0rlgy7c/image/upload/v1768768394/Shloki-logo_fi3hjj.png" 
              alt="Shloki Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
            />

            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-parchment tracking-widest leading-none group-hover:text-saffron transition-colors">
                SHLOKI
              </span>
              <span className="text-[9px] text-stone-500 uppercase tracking-[0.3em] font-medium group-hover:text-parchment-dim transition-colors">
                Ancient words Modern minds
              </span>
            </div>
          </Link>

          {/* === RIGHT SIDE: ACTIONS === */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleFeedback}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 hover:border-saffron/30 transition-all text-xs font-bold text-parchment uppercase tracking-wider group"
            >
              <MessageSquarePlus size={16} className="text-saffron group-hover:scale-110 transition-transform" />
              <span>Feedback</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}