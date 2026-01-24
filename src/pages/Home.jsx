import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Components
import MoodRecommender from '../components/ui/MoodRecommender';
import HeroFlashcards from '../components/ui/HeroFlashcards';
import BookCard from '../components/ui/BookCard';
import Letter from '../components/ui/Newsletter';

// Data
import { HERO_BOOKS } from '../lib/data';

export default function Home() {
  
  // SEO Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shloki",
    "url": "https://shloki.in",
    "description": "Unlock Timeless Wisdom with Ease. Bhagavad Gita quotes and flashcards.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shloki.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        <title>Shloki - Bhagavad Gita Flashcards & Wisdom</title>
        <meta name="description" content="Get Daily Bhagavad Gita Quotes & Wisdom Flashcards for free. Unlock Timeless Wisdom with Ease." />
        <link rel="canonical" href="https://shloki.in/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="pt-20 md:pt-32 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* 1. Hero Title Section */}
        <div className="mb-8 md:mb-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-saffron/20 bg-saffron-dim mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-saffron">
              Get Daily Bhagavad Gita Quotes & Wisdom Flashcards for free
            </span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight text-parchment mb-6 md:mb-8">
            Bhagavad Gita Flashcards<br />
            <span className="text-saffron text-glow">Unlock Timeless Wisdom with Ease</span>
          </h1>

          <MoodRecommender />
        </div>

        {/* 2. Flashcards Carousel */}
        <HeroFlashcards />

        {/* 3. Deck Selection Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8 border-b border-black/5 dark:border-white/5 pb-2 md:pb-4 mt-8 md:mt-12">
          <h2 className="font-serif text-lg md:text-2xl text-parchment">FlashCards</h2>
          <span className="text-[10px] md:text-xs text-stone-500 uppercase tracking-widest block">
            Select a Deck
          </span>
        </div>

        {/* 4. Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 px-0 mb-12 md:mb-16">
          {HERO_BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* 5. Explore Link */}
        <div className="text-center pb-8 md:pb-10">
            <p className="text-stone-400 mb-4 md:mb-6 font-serif italic text-sm md:text-base">
              "Knowledge is an ocean. Dive deeper."
            </p>
            <Link 
              to="/library"
              className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full border border-saffron/30 text-saffron hover:bg-saffron hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] md:text-xs group active:scale-95"
            >
              Explore Full FlashCards Library
              <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* 6. Newsletter */}
        <div className="my-12 md:my-16">
          <Letter />
        </div>

        {/* 7. NEW FAQ SECTION (For AdSense) */}
        <div className="bg-neutral-900 py-16 px-4 border-t border-white/10 mt-16 rounded-xl">
          <div className="max-w-3xl mx-auto text-parchment">
            <h2 className="text-3xl font-serif text-saffron mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">What is Shloki?</h3>
                <p className="text-stone-400">Shloki is a modern digital library designed to make ancient wisdom accessible. We convert complex texts like the Bhagavad Gita and Chanakya Niti into simple, bite-sized flashcards to help you apply these teachings in your daily life.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">How can the Bhagavad Gita help developers?</h3>
                <p className="text-stone-400">The Gita teaches the concept of "Nishkama Karma"—focusing on the work itself rather than the result. For developers, this means writing clean code and solving problems without the anxiety of deployment failures.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Is this content free?</h3>
                <p className="text-stone-400">Yes, Shloki is 100% free to use. Our mission is to spread wisdom. We support the platform through non-intrusive ads so we can keep the servers running.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}