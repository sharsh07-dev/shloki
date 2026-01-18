import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send } from 'lucide-react';
import useStore from '../../store/useStore';

export default function FeedbackModal() {
  const { isFeedbackOpen, toggleFeedback } = useStore();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Backend Call
    setTimeout(() => {
      setIsSubmitting(false);
      toggleFeedback();
      setRating(0);
      alert("Thank you. Your words have been received. 🙏");
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isFeedbackOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleFeedback}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-sm bg-spiritual-card border border-white/10 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-2 flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-xl text-parchment font-bold">Divine Feedback</h3>
                  <p className="text-parchment-dim text-xs mt-1">Help us improve the sanctuary.</p>
                </div>
                <button 
                  onClick={toggleFeedback}
                  className="p-1 rounded-full hover:bg-white/5 text-parchment-dim hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-6">
                
                {/* Star Rating */}
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star 
                        size={28} 
                        fill={(hoverRating || rating) >= star ? "#d97706" : "transparent"} 
                        className={(hoverRating || rating) >= star ? "text-saffron" : "text-stone-600"}
                      />
                    </button>
                  ))}
                </div>

                {/* Text Area */}
                <div className="relative">
                  <textarea 
                    placeholder="Share your thoughts..."
                    required
                    rows="4"
                    className="w-full bg-black/30 border border-white/5 rounded-xl p-4 text-parchment text-sm placeholder:text-stone-600 focus:outline-none focus:border-saffron/50 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || rating === 0}
                  className="w-full py-3 bg-saffron text-white rounded-xl font-bold text-sm tracking-wide uppercase shadow-glow hover:bg-saffron-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Submit Review</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}