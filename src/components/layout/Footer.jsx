import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-10 bg-spiritual-bg mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="mb-6">
          <span className="font-serif text-xl font-bold text-parchment tracking-widest">SHLOKI</span>
          <p className="text-[10px] text-stone-500 uppercase tracking-[0.3em] mt-1">Timeless Wisdom</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-xs font-bold uppercase tracking-widest text-stone-500">
          <Link to="/" className="hover:text-saffron transition-colors">Home</Link>
          <Link to="/library" className="hover:text-saffron transition-colors">Library</Link>

          <Link to="/privacy-policy" className="hover:text-saffron transition-colors">Privacy Policy</Link>
<Link to="/about" className="hover:text-saffron transition-colors">About Us</Link>
<Link to="/contact" className="hover:text-saffron transition-colors">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-stone-600 text-sm">
          <span>&copy; {new Date().getFullYear()} Shloki.</span>
          <span className="hidden md:inline">Made with</span>
          <Heart size={12} className="text-saffron fill-saffron" />
          <span className="hidden md:inline">for peace.</span>
        </div>

      </div>
    </footer>
  );
}