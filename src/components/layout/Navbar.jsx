import { Star, MessageSquarePlus } from 'lucide-react'; // Added Message icon
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore'; // Import Store

export default function Navbar() {
  const { toggleFeedback } = useStore(); // Get action

  return (
    <nav className="fixed top-0 w-full z-50 bg-spiritual-bg/80 backdrop-blur-md border-b border-spiritual-border">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-saffron-dim flex items-center justify-center text-saffron border border-saffron/20 shadow-glow">
            <span className="text-sm">🕉️</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-wider text-parchment">
            Shloki
          </span>
        </Link>
        
        {/* Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={toggleFeedback}
            className="p-2 text-parchment-dim hover:text-saffron transition-colors relative group"
            title="Feedback"
          >
            <MessageSquarePlus size={20} />
            {/* Tooltip */}
            <span className="absolute top-full right-0 mt-2 text-[10px] bg-stone-800 text-parchment px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Feedback
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}