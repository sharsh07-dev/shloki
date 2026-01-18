import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, PlayCircle, RotateCw, CheckCircle2, BookOpen } from 'lucide-react';
import useStore from '../../store/useStore';

export default function Flashcard({ data, bookId, total }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loadingAd, setLoadingAd] = useState(false);
  
  const { isUnlocked, unlockCard, watchAd } = useStore();
  
  // Unique ID for every single card (e.g. "gita-5")
  const cardId = `${bookId}-${data.id}`;
  const unlocked = isUnlocked(cardId);

  const handleUnlock = async (e) => {
    e.stopPropagation();
    if (window.confirm(`Watch an ad to unlock Shloka ${data.id}?`)) {
      setLoadingAd(true);
      await watchAd(); // Wait for 3s mock ad
      unlockCard(cardId);
      setLoadingAd(false);
    }
  };

  const handleFlip = () => {
    if (unlocked && !loadingAd) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    // CHANGED: Reduced height from h-[60vh] to h-80 md:h-96 for a horizontal, compact look
    <div className="perspective-1000 w-full max-w-3xl h-80 md:h-96 relative mt-4 cursor-pointer group mx-auto" onClick={handleFlip}>
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ==============================
            FRONT SIDE (Sanskrit / Locked) 
           ============================== */}
        {/* CHANGED: Reduced padding from p-8 to p-6 */}
        <div className="absolute inset-0 backface-hidden rounded-r-2xl rounded-l-md bg-parchment text-spiritual-bg p-6 flex flex-col items-center justify-center shadow-2xl border-r-8 border-b-4 border-stone-300">
           
           {/* Paper Texture Overlay */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
           
           {/* === CARD COUNTER BADGE (Top Right) === */}
           <div className="absolute top-4 right-4 flex items-center gap-2 px-2 py-1 rounded-full border border-stone-300 bg-stone-100/50">
              <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">
                Card {data.id} of {total}
              </span>
           </div>

           {/* === BOOK ICON (Top Left) === */}
           <div className="absolute top-4 left-4 text-stone-400 opacity-50">
              <BookOpen size={16} />
           </div>

           {!unlocked ? (
             <div className="text-center z-10 animate-fade-in w-full">
                {/* Lock Icon - Scaled down */}
                <div className="w-14 h-14 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-3 text-stone-500 shadow-inner ring-4 ring-white">
                  <Lock size={24} />
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-2 text-stone-800">
                  Locked Verse
                </h3>
                <p className="text-stone-500 text-xs mb-4 max-w-[200px] mx-auto leading-relaxed">
                  The wisdom of Card {data.id} is hidden. <br/> Watch to reveal.
                </p>
                
                {/* Unlock Button - Scaled down */}
                <button 
                  onClick={handleUnlock}
                  disabled={loadingAd}
                  className="px-5 py-2 bg-saffron text-white rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto hover:bg-saffron-light active:scale-95 transition-all disabled:opacity-50 disabled:cursor-wait text-sm"
                >
                  {loadingAd ? (
                    <span className="animate-pulse">Unlocking...</span>
                  ) : (
                    <>
                      <PlayCircle size={16} fill="currentColor" className="text-white/20" /> 
                      <span>Unlock Card {data.id}</span>
                    </>
                  )}
                </button>
             </div>
           ) : (
             <div className="text-center z-10 relative w-full px-8">
               {/* Unlocked Badge */}
               <div className="absolute -top-8 left-0 right-0 flex justify-center">
                 <div className="text-green-600/60 flex items-center gap-1 text-[9px] uppercase font-bold tracking-widest bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                    <CheckCircle2 size={10} /> Unlocked
                 </div>
               </div>

               <span className="text-saffron text-[9px] font-bold tracking-[0.3em] uppercase mb-3 block">
                 Sanskrit Text
               </span>
               {/* CHANGED: Reduced font size from text-3xl/5xl to text-2xl/3xl */}
               <h2 className="font-serif text-2xl md:text-3xl leading-snug font-bold text-stone-800 mb-4 drop-shadow-sm line-clamp-4">
                 {data.sanskrit}
               </h2>
               
               <div className="flex items-center justify-center gap-2 text-stone-400 text-[9px] uppercase tracking-widest animate-pulse mt-2">
                  <RotateCw size={12} />
                  <span>Tap to Flip</span>
               </div>
             </div>
           )}
        </div>

        {/* ==============================
            BACK SIDE (Translation) 
           ============================== */}
        {/* CHANGED: Reduced padding from p-10 to p-6 */}
        <div 
          className="absolute inset-0 backface-hidden rounded-r-2xl rounded-l-md bg-spiritual-card p-6 flex flex-col items-center justify-center shadow-glow border border-white/10"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {/* Back Side Counter Badge */}
          <div className="absolute top-4 right-4 text-[9px] font-bold text-parchment-dim uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">
             Card {data.id} / {total}
          </div>

          <span className="text-saffron text-[9px] font-bold tracking-[0.3em] uppercase mb-3 block">
            Translation
          </span>
          
          {/* CHANGED: Reduced font size from text-2xl/3xl to text-lg/xl */}
          <p className="font-serif text-lg md:text-xl leading-relaxed text-parchment text-center font-light line-clamp-5 px-4">
            "{data.translation}"
          </p>
          
          <div className="mt-4 pt-3 border-t border-white/5 w-full text-center">
             <p className="text-parchment-dim text-xs italic">
               💡 {data.nuance}
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}