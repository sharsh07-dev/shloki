import { useEffect } from 'react';
import { ArrowLeft, Book, Code, Cpu, Feather, Heart, Coffee, Layers, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';

export default function AboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-spiritual-bg text-parchment font-sans selection:bg-saffron selection:text-white">
      {/* ✅ SEO TAGS: This helps Google understand your site's 'E-E-A-T' (Expertise, Experience, Authority, Trust) */}
      <Helmet>
        <title>About Us | The Story of Shloki</title>
        <meta 
          name="description" 
          content="We are SY Engineering students bridging the gap between ancient wisdom and modern code. Read our story of building Shloki." 
        />
        <link rel="canonical" href="https://shloki.in/about" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-24 px-4 md:px-0">
        
        {/* Navigation Back Button */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-stone-500 hover:text-saffron transition-colors text-xs uppercase tracking-widest font-bold"
          >
            <ArrowLeft size={16} /> Back to Library
          </button>
        </div>

        {/* 1. HERO SECTION: The Hook */}
        <article className="max-w-3xl mx-auto space-y-16">
          
          <header className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 text-saffron border border-saffron/20 text-[10px] font-bold uppercase tracking-widest mb-4">
              <Terminal size={12} />
              The Developer Story
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-parchment leading-tight">
              Debugging the <br />
              <span className="text-saffron">Human Mind.</span>
            </h1>
            <p className="text-xl text-stone-400 font-light italic">
              "We learned how to optimize algorithms, but no one taught us how to optimize our anxiety."
            </p>
          </header>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* CHAPTER 1: Who We Are */}
          <section className="prose prose-invert prose-lg max-w-none">
            <h2 className="flex items-center gap-3 text-saffron font-serif text-2xl mb-6">
              <Code className="text-stone-500" />
              Chapter 1: The Engineering Dilemma
            </h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              We are <strong>Second Year (SY) Engineering Students</strong>. Our days are defined by syntax errors, LeetCode problems, and the endless pressure of "what comes next."
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              In engineering college, we are taught that every problem has a logical solution. If code breaks, you check the logs. If a server crashes, you reboot. But during our second year, we hit a different kind of bug: <strong>Burnout.</strong>
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              We realized that while we were mastering Java and Python, we were failing at the most basic operating system of all: <strong>The Human Mind.</strong> We were anxious about internships, stressed about grades, and constantly comparing ourselves to others on LinkedIn. We had the technical tools to build apps, but we lacked the mental tools to handle the pressure of building them.
            </p>
          </section>

          {/* CHAPTER 2: The Discovery */}
          <section className="prose prose-invert prose-lg max-w-none bg-white/5 p-8 rounded-2xl border border-white/5">
            <h2 className="flex items-center gap-3 text-saffron font-serif text-2xl mb-6">
              <Book className="text-stone-500" />
              Chapter 2: Rediscovering the "Source Code"
            </h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              The solution wasn't in a new JavaScript framework. It was gathering dust on a shelf.
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              We stumbled upon the <strong>Bhagavad Gita</strong>. Not as a religious text—but as a <em>psychological manual</em>. When we actually started reading it, we were shocked. It wasn't about rituals. It was a conversation between a confused student (Arjuna) and a mentor (Krishna) about <strong>imposter syndrome, anxiety, and decision paralysis.</strong>
            </p>
            <blockquote className="border-l-4 border-saffron pl-4 italic text-stone-400 my-8">
              "The Gita is not about fighting a war outside. It is about winning the war inside your head. It is the original Guide to Stress Management."
            </blockquote>
            <p className="text-stone-300 leading-relaxed mb-6">
              We realized that concepts like <em>Nishkama Karma</em> (Action without attachment to results) were the perfect antidote to the "Placement Season Anxiety" every engineering student faces.
            </p>
          </section>

          {/* CHAPTER 3: The Problem with Books */}
          <section className="prose prose-invert prose-lg max-w-none">
            <h2 className="flex items-center gap-3 text-saffron font-serif text-2xl mb-6">
              <Feather className="text-stone-500" />
              Chapter 3: The UI/UX Problem of Wisdom
            </h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              So, if the answers are in the books, why isn't everyone reading them?
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              <strong>The Problem is Accessibility.</strong>
            </p>
            <ul className="list-disc pl-5 space-y-3 text-stone-300 mb-6 marker:text-saffron">
              <li><strong>The Language Barrier:</strong> Classical texts use dense, archaic language that is hard for Gen-Z to parse.</li>
              <li><strong>The Attention Span:</strong> Our generation is wired for 8-second reels, not 800-page epics.</li>
              <li><strong>The Context Gap:</strong> It is hard to see how a 5,000-year-old chariot battle relates to a modern coding interview.</li>
            </ul>
            <p className="text-stone-300 leading-relaxed mb-6">
              We looked at this as Engineers. <strong>The data is perfect, but the interface is outdated.</strong> We didn't need to rewrite the wisdom; we needed to <em>refactor</em> the frontend.
            </p>
          </section>

          {/* CHAPTER 4: Enter Shloki */}
          <section className="bg-gradient-to-br from-stone-900 to-black p-8 md:p-12 rounded-3xl border border-saffron/20 shadow-2xl relative overflow-hidden">
             {/* Background decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

             <h2 className="flex items-center gap-3 text-saffron font-serif text-3xl mb-8 relative z-10">
              <Cpu className="text-parchment" />
              Chapter 4: Building Shloki
            </h2>
            
            <p className="text-parchment/80 leading-relaxed mb-6 relative z-10 text-lg">
              <strong>Shloki</strong> is our attempt to bridge the gap. It is a "Wisdom wrapper."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 relative z-10">
              <div>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Layers size={18} className="text-saffron"/> The Tech Stack</h3>
                <p className="text-sm text-stone-400">
                  Built with <strong>React.js</strong> for speed, <strong>Tailwind CSS</strong> for modern minimalism, and <strong>Vite</strong> for performance. We engineered it to be as fast as a thought.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2"><Coffee size={18} className="text-saffron"/> The Logic</h3>
                <p className="text-sm text-stone-400">
                  We use an algorithm of <strong>"Randomized Spaced Repetition."</strong> Instead of reading chapter by chapter, Shloki serves you cards based on chance—mimicking the universe giving you the right advice at the right time.
                </p>
              </div>
            </div>

            <p className="text-parchment/80 leading-relaxed mb-0 relative z-10">
              We stripped away the complex commentaries. We removed the dogma. We left only the raw, powerful code that compiles in your brain and runs immediately.
            </p>
          </section>

          {/* CHAPTER 5: The Importance of Reading */}
          <section className="prose prose-invert prose-lg max-w-none">
            <h2 className="flex items-center gap-3 text-saffron font-serif text-2xl mb-6">
              <Book className="text-stone-500" />
              Chapter 5: Why Deep Reading Matters
            </h2>
            <p className="text-stone-300 leading-relaxed mb-6">
              In a world of AI and ChatGPT, "Surface Knowledge" is free. Anyone can Google an answer. But <strong>"Deep Wisdom"</strong> is rare.
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              Reading books like <em>The Bhagavad Gita</em>, <em>The 48 Laws of Power</em>, or <em>Atomic Habits</em> is not just about gathering facts. It is about <strong>rewiring your neural pathways</strong>. When you read deeply, you download the author's lifetime of experience into your brain in a few hours.
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              Shloki is not a replacement for these books. It is a <em>gateway</em>. We hope that one flashcard will spark enough curiosity in you to go and buy the original book, sit down in silence, and read it cover to cover.
            </p>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Conclusion */}
          <footer className="text-center space-y-6">
            <h2 className="font-serif text-3xl text-parchment">Join Our Journey</h2>
            <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
              We are just two students coding in a dorm room, trying to make sense of the world. Shloki is free, open, and built with love. If these flashcards help you find even one moment of clarity in your chaotic day, then our code has run successfully.
            </p>
            
            <div className="pt-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-saffron text-stone-900 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors cursor-pointer shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <Heart size={16} className="fill-stone-900" />
                Keep Reading. Keep Coding.
              </span>
            </div>
            
            <p className="text-xs text-stone-600 pt-8 uppercase tracking-widest">
              Dedicated to the seekers of Truth & Syntax.
            </p>
          </footer>

        </article>

      </main>
    </div>
  );
}