import { MessageSquarePlus } from 'lucide-react';
import useStore from '../../store/useStore';

export default function FloatingFeedback() {
  const { toggleFeedback } = useStore();

  return (
    <button
      onClick={toggleFeedback}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-saffron text-white px-6 py-4 rounded-full shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:bg-saffron-light hover:scale-105 active:scale-95 transition-all duration-300 group animate-bounce-slow"
    >
      <MessageSquarePlus size={24} className="group-hover:rotate-12 transition-transform" />
      <span className="font-bold text-sm uppercase tracking-widest">Feedback</span>
      
      {/* Pulse Effect Ring */}
      <span className="absolute inset-0 rounded-full border-2 border-saffron opacity-50 animate-ping" />
    </button>
  );
}