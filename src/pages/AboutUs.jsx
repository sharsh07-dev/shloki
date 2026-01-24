import { useEffect } from 'react';
import { ArrowLeft, Heart, Zap, Globe, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // 👈 1. Import Helmet
import Navbar from '../components/layout/Navbar';

export default function AboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-spiritual-bg text-parchment font-sans selection:bg-saffron selection:text-white">
      {/* 👇 2. SEO Tags for About Page */}
      <Helmet>
        <title>About Us | Shloki</title>
        <meta 
          name="description" 
          content="Learn about Shloki's mission to decode 5,000-year-old ancient wisdom into bite-sized flashcards for the modern mind." 
        />
        <link rel="canonical" href="https://shloki.com/about" />
      </Helmet>

      <Navbar />

      <main className="pt-20 md:pt-32 px-5 md:px-8 max-w-4xl mx-auto pb-20">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-stone-500 hover:text-saffron transition-colors mb-8 text-xs md:text-sm uppercase tracking-widest font-bold"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Hero Title - Scaled for Mobile */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h1 className="font-serif text-3xl md:text-6xl mb-3 md:mb-4 text-parchment leading-tight">
            Ancient Data. <br />
            <span className="text-saffron">Modern Interface.</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm md:text-lg leading-relaxed px-4">
            Bridging the gap between 5,000-year-old scriptures and the 8-second attention span.
          </p>
        </div>

        {/* Content Stack */}
        <div className="space-y-10 md:space-y-16">
          
          {/* 1. The Problem Card */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
            <h2 className="font-serif text-xl md:text-2xl text-parchment flex items-center gap-3 mb-3 md:mb-4">
              <BookOpen size={20} className="text-stone-500" />
              The "Hard Data" Problem
            </h2>
            <p className="text-sm md:text-lg text-stone-300 leading-relaxed">
              We live in an age of anxiety. Ironically, the solutions were written down thousands of years ago. But let's be honest: <strong>The data was inaccessible.</strong>
            </p>
            <p className="text-xs md:text-base text-stone-400 mt-4 italic border-l-2 border-saffron/50 pl-4">
              "Dense Sanskrit. Complex commentaries. Picking up a scripture felt like studying for an exam, not finding peace."
            </p>
          </section>

          {/* 2. The Solution - Stacks on Mobile */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl text-saffron mb-3 flex items-center gap-2">
                <Zap size={24} />
                Decoding for Now
              </h2>
              <p className="text-stone-300 leading-relaxed text-sm md:text-base mb-4">
                We built <strong>Shloki</strong> to decode this heavy data into: <strong>Flashcards.</strong>
              </p>
              <p className="text-stone-300 leading-relaxed text-sm md:text-base">
                Instead of reading linearly, you tell us <em>"I am angry,"</em> and we serve the exact verse code to debug that emotion.
              </p>
            </div>
            
            {/* Visual Card - No rotation on mobile to keep layout safe */}
            <div className="bg-stone-900 border border-white/10 p-6 rounded-xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
               <div className="text-center text-stone-500 text-[10px] uppercase tracking-widest mb-4">The Shloki Approach</div>
               <div className="space-y-3">
                 <div className="h-2 bg-white/10 rounded w-3/4 mx-auto"></div>
                 <div className="h-2 bg-white/10 rounded w-1/2 mx-auto"></div>
                 <div className="h-20 bg-gradient-to-br from-saffron/20 to-transparent rounded-lg border border-saffron/20 flex items-center justify-center text-saffron font-serif text-lg">
                   Wisdom in 1 Swipe
                 </div>
               </div>
            </div>
          </section>

          {/* 3. The Audience - 1 Col Mobile, 3 Col Desktop */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl text-parchment mb-6 flex items-center gap-2">
              <Globe size={20} className="text-stone-500" />
              For Everyone
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-center">
              <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/5">
                <h3 className="text-saffron font-bold text-base md:text-lg mb-1">Gen Z</h3>
                <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">Short, Visual, Direct</p>
              </div>
              <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/5">
                <h3 className="text-saffron font-bold text-base md:text-lg mb-1">Global</h3>
                <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">Universal Translations</p>
              </div>
              <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/5">
                <h3 className="text-saffron font-bold text-base md:text-lg mb-1">Seekers</h3>
                <p className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">No Dogma, Just Truth</p>
              </div>
            </div>
          </section>

          {/* 4. Footer Note */}
          <section className="border-t border-white/10 pt-8 md:pt-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-parchment mb-4">
              Just Chapter One
            </h2>
            <div className="flex justify-center">
               <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 text-saffron border border-saffron/20 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                 <Heart size={12} className="fill-saffron" />
                 Built with Devotion
               </span>
            </div>
          </section>

        </div>

      </main>
      
      {/* NO FOOTER HERE */}
    </div>
  );
}