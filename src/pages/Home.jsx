import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import HeroFlashcards from '../components/ui/HeroFlashcards';
import MoodRecommender from '../components/ui/MoodRecommender';
import Footer from '../components/layout/Footer';
import { SEO_KEYWORDS, PAGE_DESCRIPTION } from '../lib/searchKeywords';
export default function Home() {

    const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shloki",
    "url": "https://shloki.in",
    "description": PAGE_DESCRIPTION,
    "keywords": SEO_KEYWORDS.join(", "), // 👈 Injects all your keywords here
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://shloki.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "about": {
      "@type": "Thing",
      "name": "Ancient Wisdom & Mental Health",
      "description": "Flashcards for anxiety, stress, motivation, and strategy based on Bhagavad Gita and 48 Laws of Power."
    }
  };
  
  return (
    <div className="min-h-screen bg-spiritual-bg text-parchment font-sans selection:bg-saffron selection:text-white">
      
      {/* 1. SEO Tags */}
      <Helmet>
        <title>Shloki - Ancient Wisdom for Modern Life</title>
        <meta name="description" content="Master ancient wisdom with Shloki. Read the Bhagavad Gita, Chanakya Niti, and 48 Laws of Power in flashcard format." />
        <link rel="canonical" href="https://shloki.in/" />
      </Helmet>

      {/* 2. Navigation */}
      <Navbar />

      <main>
        {/* 3. Your Main Content (Hero & Moods) */}
        <HeroFlashcards />
        <MoodRecommender />

        {/* 4. THE NEW FAQ SECTION (Correctly Added) */}
        <div className="bg-neutral-900 py-16 px-4 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-parchment">
            <h2 className="text-3xl font-serif text-saffron mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">What is Shloki?</h3>
                <p className="text-stone-400">Shloki is a modern digital library designed to make ancient wisdom accessible. We convert complex texts like the Bhagavad Gita and Chanakya Niti into simple, bite-sized flashcards to help you apply these teachings in your daily life, coding interviews, and career decisions.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">How can the Bhagavad Gita help developers?</h3>
                <p className="text-stone-400">The Gita teaches the concept of "Nishkama Karma"—focusing on the work itself rather than the result. For developers, this means writing clean code and solving problems without the anxiety of deployment failures or interview outcomes. It helps in managing burnout and imposter syndrome.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Is this content free?</h3>
                <p className="text-stone-400">Yes, Shloki is 100% free to use. Our mission is to spread wisdom. We support the platform through non-intrusive ads so we can keep the servers running and add new books like the 48 Laws of Power and Atomic Habits.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">How do the flashcards work?</h3>
                <p className="text-stone-400">Simply select a book from the library. You will be presented with a deck of cards. Tap any card to flip it and reveal the hidden wisdom or "Shloka" underneath. It is designed to use "Active Recall," a proven method for memory retention.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}