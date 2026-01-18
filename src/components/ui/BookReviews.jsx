import { useState, useEffect } from 'react';
import { Star, User, Send, MessageSquare, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { subscribeToReviews, postReview } from '../../lib/firebase'; // Import Cloud Service

export default function BookReviews({ bookId, bookTitle }) {
  // === STATE ===
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isWriting, setIsWriting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');

  // === REAL-TIME CONNECTION ===
  useEffect(() => {
    setLoading(true);
    // Connect to Firebase
    const unsubscribe = subscribeToReviews(bookId, (data) => {
      setReviews(data);
      setLoading(false);
    });

    // Cleanup connection when user leaves page
    return () => unsubscribe();
  }, [bookId]);

  // Calculate Stats on the fly
  const avgRating = reviews.length 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || !text) return;

    setIsSubmitting(true);
    
    // Send to Cloud
    const success = await postReview(bookId, name, rating, text);
    
    setIsSubmitting(false);
    if (success) {
      setIsWriting(false);
      setName('');
      setRating(0);
      setText('');
    } else {
      alert("Failed to post review. Please check your connection.");
    }
  };

  return (
    <div className="mt-12 border-t border-white/10 pt-8 pb-20 max-w-2xl mx-auto px-4">
      
      {/* === HEADER (Live Stats) === */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-serif text-2xl text-parchment font-bold">Community Reviews</h3>
          <p className="text-parchment-dim text-xs mt-1">Real-time feedback from the sangha.</p>
        </div>
        
        <div className="text-right">
           <div className="flex items-center gap-2 justify-end">
             <span className="text-3xl font-bold text-parchment">{avgRating}</span>
             <div className="flex flex-col items-start">
               <div className="flex text-saffron text-xs">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={12} fill={i < Math.round(Number(avgRating)) ? "currentColor" : "none"} />
                 ))}
               </div>
               <span className="text-[10px] text-parchment-dim uppercase tracking-wider">
                 {reviews.length} Ratings
               </span>
             </div>
           </div>
        </div>
      </div>

      {/* === ACTION BUTTON === */}
      {!isWriting && (
        <button 
          onClick={() => setIsWriting(true)}
          className="w-full py-4 rounded-xl border border-white/10 bg-white/5 text-parchment hover:bg-white/10 hover:border-saffron/30 transition-all flex items-center justify-center gap-2 mb-8 group"
        >
          <MessageSquare size={18} className="text-saffron group-hover:scale-110 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-widest">Write a Review</span>
        </button>
      )}

      {/* === WRITE REVIEW FORM === */}
      <AnimatePresence>
        {isWriting && (
          <motion.form 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="bg-spiritual-card border border-saffron/20 rounded-2xl p-6 mb-8 overflow-hidden relative"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-saffron font-bold uppercase tracking-widest">Share Wisdom</span>
              <button type="button" onClick={() => setIsWriting(false)} className="text-xs text-stone-500 hover:text-white">Cancel</button>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-3 mb-6">
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
                    size={32} 
                    fill={(hoverRating || rating) >= star ? "#d97706" : "transparent"} 
                    className={(hoverRating || rating) >= star ? "text-saffron" : "text-stone-600"}
                  />
                </button>
              ))}
            </div>

            <input 
              type="text"
              placeholder="Your Name (Optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-parchment mb-3 focus:border-saffron/50 outline-none placeholder:text-stone-600"
            />

            <textarea 
              placeholder="How has this scripture impacted you?"
              value={text}
              onChange={e => setText(e.target.value)}
              required
              rows="3"
              className="w-full bg-black/30 border border-white/5 rounded-lg p-3 text-sm text-parchment mb-4 focus:border-saffron/50 outline-none resize-none placeholder:text-stone-600"
            ></textarea>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-saffron text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide shadow-glow hover:bg-saffron-light flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={16} />}
              <span>{isSubmitting ? "Posting..." : "Submit Review"}</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* === REVIEW LIST === */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-10">
             <Loader2 className="animate-spin mx-auto text-saffron mb-2" />
             <p className="text-xs text-stone-500">Loading thoughts...</p>
          </div>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={review.id} 
              className="bg-black/20 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center text-stone-400 border border-white/5">
                    <User size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-parchment">{review.user}</h4>
                    <span className="text-[10px] text-stone-500">{review.date}</span>
                  </div>
                </div>
                <div className="flex bg-stone-900 px-2 py-1 rounded-md border border-white/5 items-center gap-1">
                  <span className="text-xs font-bold text-parchment">{review.rating}</span>
                  <Star size={10} fill="#d97706" className="text-saffron" />
                </div>
              </div>
              <p className="text-parchment-dim text-sm leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-10 opacity-50 border border-dashed border-white/10 rounded-xl">
            <p className="text-sm text-stone-500">No reviews yet.</p>
            <p className="text-xs text-stone-600 mt-1">Be the first to leave a spark of wisdom.</p>
          </div>
        )}
      </div>

    </div>
  );
}