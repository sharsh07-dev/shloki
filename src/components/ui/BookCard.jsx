import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react'; // Import Flame icon

export default function BookCard({ book }) {
  return (
    <Link to={`/read/${book.id}`} className="group relative perspective-1000 block h-full">
      <motion.div
        whileHover={{ y: -10, rotateY: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-full aspect-[2/3] rounded-r-lg shadow-2xl transition-all duration-500 cursor-pointer"
      >
        {/* === 3D Spine Effect === */}
        <div className="absolute left-0 top-1 bottom-1 w-3 bg-white/10 z-20 rounded-l-sm shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)]" />

        {/* === Book Cover === */}
        <div className="absolute inset-0 rounded-lg overflow-hidden bg-spiritual-card border-r-4 border-b-4 border-black/40">
           {/* "Most Used" Badge */}
           {book.isPopular && (
             <div className="absolute top-0 right-4 z-30 bg-saffron text-white text-[10px] font-bold uppercase tracking-widest px-2 py-4 rounded-b-lg shadow-lg flex flex-col items-center gap-1">
               <Flame size={14} fill="currentColor" />
               <span>Top</span>
             </div>
           )}

           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
           <img 
             src={book.cover} 
             alt={book.title}
             className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
           />
           
           {/* Title Overlay */}
           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 text-center pt-20">
             <h3 className="font-serif text-xl md:text-2xl text-parchment font-bold shadow-black drop-shadow-md leading-tight">
               {book.title}
             </h3>
             <p className="text-[10px] text-saffron font-bold uppercase tracking-[0.2em] mt-2 text-shadow">
               {book.subtitle}
             </p>
           </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-saffron/50 transition-all duration-500" />
      </motion.div>
    </Link>
  );
}