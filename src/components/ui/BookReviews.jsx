// (Keep imports the same)
import { useState, useEffect } from 'react';
import { Star, User, Send, MessageSquarePlus, Loader2, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { subscribeToReviews, postReview } from '../../lib/firebase';

export default function BookReviews({ bookId, bookTitle }) {
  // (Keep all State & Handlers exactly the same)
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isWriting, setIsWriting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    setLoading(true);
    const unsubscribe = subscribeToReviews(bookId, (data) => {
      setReviews(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [bookId]);

  const avgRating = reviews.length 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : 0;
  const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || !text) return;
    setIsSubmitting(true);
    const success = await postReview(bookId, name, rating, text);
    setIsSubmitting(false);
    if (success) {
      setIsWriting(false);
      setName('');
      setRating(0);
      setText('');
      setShowAll(true);
    } else {
      alert("Failed to post review.");
    }
  };

  return (
    <section className="relative mt-8 md:mt-12 pt-8 pb-16 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* HEADER - Stack on mobile, Row on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl md:text-2xl text-parchment font-bold mb-1">Community Insights</h3>
            <p className="text-parchment-dim text-xs">Thoughts on {bookTitle || "this text"}</p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
             <div className="text-2xl md:text-3xl font-serif font-bold text-saffron">{avgRating}</div>
             <div className="flex flex-col">
               <div className="flex text-saffron text-xs">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={12} fill={i < Math.round(Number(avgRating)) ? "currentColor" : "none"} />
                 ))}
               </div>
               <span className="text-[9px] md:text-[10px] text-parchment-dim uppercase tracking-wider font-bold">
                 {reviews.length} Ratings
               </span>
             </div>
          </div>
        </div>

        {/* BUTTON */}
        {!isWriting && (
          <div className="mb-8 text-center md:text-left">
            <button 
              onClick={() => setIsWriting(true)}
              className="w-full md:w-auto px-6 py-3 rounded-lg border border-saffron/30 text-saffron hover:bg-saffron/10 hover:border-saffron transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest active:scale-95"
            >
              <MessageSquarePlus size={18} />
              <span>Write a Review</span>
            </button>
          </div>
        )}

        {/* FORM */}
        <AnimatePresence>
          {isWriting && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <form onSubmit={handleSubmit} className="bg-black/40 border border-white/10 rounded-xl p-4 md:p-6 relative">
                <button type="button" onClick={() => setIsWriting(false)} className="absolute top-4 right-4 text-stone-500 hover:text-white p-2">
                    <span className="text-xs font-bold uppercase">Cancel</span>
                </button>
                
                <div className="flex gap-2 mb-4 justify-center md:justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="focus:outline-none p-1"
                    >
                      <Star 
                        size={28} 
                        fill={(hoverRating || rating) >= star ? "#d97706" : "transparent"} 
                        className={(hoverRating || rating) >= star ? "text-saffron" : "text-stone-700"}
                      />
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                    <input 
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-parchment focus:border-saffron/50 outline-none"
                    />
                </div>
                
                <textarea 
                  placeholder="Share your experience..."
                  value={text}
                  onChange={e => setText(e.target.value)}
                  required
                  rows="3"
                  className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-sm text-parchment focus:border-saffron/50 outline-none resize-none mb-4"
                ></textarea>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-saffron text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wide shadow-glow hover:bg-saffron-light flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={14} /> : <Send size={14} />}
                  <span>Post Review</span>
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIST */}
        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-10">
               <Loader2 className="animate-spin mx-auto text-saffron mb-2" size={24} />
               <p className="text-xs text-stone-500">Loading...</p>
            </div>
          ) : reviews.length > 0 ? (
            <>
              {visibleReviews.map((review) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={review.id} 
                  className="bg-white/5 rounded-xl p-4 md:p-5 border border-white/5 hover:border-white/10 transition-colors flex flex-col md:flex-row gap-3 md:gap-4 md:items-start"
                >
                  {/* User Profile */}
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 border border-white/5">
                      <User size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-sm text-parchment truncate">{review.user}</h4>
                      <div className="flex text-saffron text-[10px]">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} size={10} fill={i < review.rating ? "currentColor" : "none"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 relative pl-0 md:pl-4 md:border-l border-white/10">
                     <Quote size={16} className="absolute -top-1 -left-1 text-white/5 -scale-x-100 hidden md:block" />
                     <p className="text-parchment-dim text-sm leading-relaxed">
                       {review.text}
                     </p>
                     <span className="text-[10px] text-stone-600 mt-2 block">{review.date}</span>
                  </div>
                </motion.div>
              ))}

              {reviews.length > 3 && (
                <div className="text-center pt-4">
                  <button 
                    onClick={() => setShowAll(!showAll)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-saffron transition-colors p-2"
                  >
                    {showAll ? (
                      <>Show Less <ChevronUp size={14} /></>
                    ) : (
                      <>View All {reviews.length} Reviews <ChevronDown size={14} /></>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10 opacity-50 border border-dashed border-white/10 rounded-xl">
              <p className="text-sm text-stone-500">No reviews yet.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}