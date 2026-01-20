import { useState } from 'react';
import { X, Send, CheckCircle, Loader } from 'lucide-react';
import useStore from '../../store/useStore';
import { supabase } from '../../lib/supabaseClient'; // <--- IMPORT THIS

export default function FeedbackModal() {
  const { isFeedbackOpen, toggleFeedback } = useStore();
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(null); // Optional: if you want star ratings
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  if (!isFeedbackOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('submitting');

    try {
      // === 1. SEND DATA TO SUPABASE ===
      const { error } = await supabase
        .from('feedback')
        .insert([{ message: message, rating: rating }]);

      if (error) throw error;

      // === 2. SUCCESS STATE ===
      setStatus('success');
      setTimeout(() => {
        toggleFeedback();
        setStatus('idle');
        setMessage('');
        setRating(null);
      }, 2000);

    } catch (error) {
      console.error('Error submitting feedback:', error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={toggleFeedback}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-stone-900 border border-white/10 rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-serif text-parchment font-bold">Your Thoughts Matter</h2>
            <p className="text-stone-500 text-xs mt-1">Help us improve Shloki.</p>
          </div>
          <button 
            onClick={toggleFeedback}
            className="text-stone-500 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success View */}
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in">
            <CheckCircle size={48} className="text-green-500 mb-4" />
            <h3 className="text-lg text-white font-bold">Thank You!</h3>
            <p className="text-stone-400 text-sm">Your wisdom has been received.</p>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full h-32 bg-black/20 border border-white/10 rounded-xl p-4 text-parchment placeholder:text-stone-600 focus:border-saffron focus:ring-1 focus:ring-saffron/50 outline-none resize-none transition-all"
              placeholder="What feature would you like to see next? Or found a bug?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === 'submitting'}
            />

            {/* Error Message */}
            {status === 'error' && (
              <p className="text-red-400 text-xs text-center">Failed to send. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={!message.trim() || status === 'submitting'}
              className="w-full py-3 bg-saffron hover:bg-amber-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Feedback
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}