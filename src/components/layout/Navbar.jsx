import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquarePlus, Sun, Moon } from 'lucide-react';
import useStore from '../../store/useStore';
import useThemeStore from '../../store/useThemeStore';

export default function Navbar() {
  const { toggleFeedback } = useStore();
  const { theme, toggleTheme, initTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, []);

  return (
    // Mobile: h-14 (Slim App Bar) | Desktop: h-20 (Grand Header)
    <nav className="fixed top-0 left-0 right-0 z-50 bg-spiritual-bg/95 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-all duration-300 h-14 md:h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* === LOGO === */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img 
              src="https://res.cloudinary.com/do0rlgy7c/image/upload/v1768768394/Shloki-logo_fi3hjj.png" 
              alt="Shloki Logo" 
              // Mobile: w-8 (Tiny) | Desktop: w-12 (Big)
              className="w-8 h-8 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
            />
            <div className="flex flex-col">
              {/* Mobile: text-lg (Compact) | Desktop: text-2xl */}
              <span className="font-serif text-lg md:text-2xl font-bold text-parchment tracking-widest leading-none group-hover:text-saffron transition-colors">
                SHLOKI
              </span>
              {/* Hide subtitle on mobile to save space */}
              <span className="hidden md:block text-[9px] text-stone-500 uppercase tracking-[0.3em] font-medium group-hover:text-parchment-dim transition-colors">
                Timeless Wisdom
              </span>
            </div>
          </Link>

          {/* === ACTIONS === */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-parchment transition-all"
            >
              {theme === 'dark' ? (
                <Sun size={16} className="md:w-[18px] md:h-[18px] text-saffron" />
              ) : (
                <Moon size={16} className="md:w-[18px] md:h-[18px] text-stone-600" />
              )}
            </button>

            {/* Feedback: Icon only on Mobile */}
            <button 
              onClick={toggleFeedback}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:border-saffron/30 transition-all group"
            >
              <MessageSquarePlus size={16} className="text-saffron md:w-[18px]" />
              <span className="hidden md:inline text-xs font-bold text-parchment uppercase tracking-wider">Feedback</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}