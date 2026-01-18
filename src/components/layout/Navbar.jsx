import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquarePlus, Sun, Moon } from 'lucide-react';
import useStore from '../../store/useStore';
import useThemeStore from '../../store/useThemeStore'; // <--- Import Theme Store

export default function Navbar() {
  const { toggleFeedback } = useStore();
  const { theme, toggleTheme, initTheme } = useThemeStore();

  // Initialize theme on load
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-spiritual-bg/90 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* === LEFT SIDE: LOGO === */}
          <Link to="/" className="flex items-center gap-3 group">
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
               Sacred texts  Simple learning
              </span>
            </div>
          </Link>

          {/* === RIGHT SIDE: ACTIONS === */}
          <div className="flex items-center gap-3">
            
            {/* THEME TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-parchment transition-all"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-saffron animate-spin-slow-once" />
              ) : (
                <Moon size={18} className="text-stone-600" />
              )}
            </button>

            {/* Feedback Button (Desktop) */}
            <button 
              onClick={toggleFeedback}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:border-saffron/30 transition-all text-xs font-bold text-parchment uppercase tracking-wider group"
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