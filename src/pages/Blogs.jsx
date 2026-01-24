import React, { useState } from 'react'; // <--- Added useState
import SEO from '../components/SEO'; 
import Navbar from '../components/layout/Navbar';
import { Calendar, Clock, User, ArrowLeft, Share2, Check } from 'lucide-react'; // <--- Added Check icon
import { Link } from 'react-router-dom';

const Blogs = () => {
    // State to handle the "Copied!" feedback
    const [copied, setCopied] = useState(false);

    const blogContent = {
        title: "How the Bhagavad Gita Helps Solve Real-Life Problems",
        date: "January 21, 2026",
        author: "Shloki Team",
        readTime: "5 min read",
        image: "https://res.cloudinary.com/do0rlgy7c/image/upload/v1768984726/img4_ffhgbn.jpg", 
    };

    // ✨ IMPROVED SHARE FUNCTION
    const handleShare = async () => {
        const shareData = {
            title: 'Shloki Wisdom',
            text: blogContent.title,
            url: window.location.href
        };

        // 1. Try Native Share (Mobile)
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                return; // Stop here if native share worked
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }

        // 2. Fallback to Copy Link (Desktop)
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="min-h-screen bg-spiritual-bg font-sans">
            <SEO
                title={blogContent.title}
                description="Discover how the ancient wisdom of the Bhagavad Gita provides practical solutions for modern stress."
                keywords="Bhagavad Gita, modern problems, stress relief, anxiety, mental peace, Shloki"
                image={blogContent.image}
                type="article"
            />

            <Navbar />

            <main className="pt-24 md:pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-stone-500 hover:text-saffron transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <h1 className="font-serif text-3xl md:text-5xl leading-tight text-parchment mb-6">
                        {blogContent.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-stone-500 text-xs font-bold uppercase tracking-widest border-y border-white/5 py-4">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-saffron" />
                            <span>{blogContent.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={14} className="text-saffron" />
                            <span>{blogContent.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-saffron" />
                            <span>{blogContent.author}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="rounded-2xl overflow-hidden mb-12 border border-white/5 shadow-2xl">
                    <img
                        src={blogContent.image}
                        alt="Bhagavad Gita Wisdom"
                        className="w-full h-[300px] md:h-[500px] object-cover"
                    />
                </div>

                {/* Article Content */}
              {/* Article Content */}
<article className="prose prose-invert prose-stone max-w-none text-stone-300">

  {/* INTRO */}
  <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
    In today’s fast-moving world, life feels more complicated than ever. 
    People struggle silently with stress, anxiety, fear of failure, 
    emotional pain, loneliness, lack of motivation, overthinking, 
    and confusion about what direction to take.
  </p>

  <p className="leading-relaxed mb-8">
    Even though modern society offers endless technology, entertainment, 
    and self-help resources, true peace often feels temporary. 
    The mind remains restless, and the heart continues searching 
    for something deeper.
  </p>

  <p className="leading-relaxed mb-8">
    That is where the timeless wisdom of the Bhagavad Gita becomes 
    incredibly relevant. The Gita is not just a spiritual scripture 
    meant only for monks or religious people.  
    It is a practical handbook for everyday living.
  </p>

  <p className="leading-relaxed mb-8">
    Through a conversation between Lord Krishna and Arjuna, 
    the Gita teaches us how to handle real-life struggles: 
    mental pressure, emotional pain, decision-making, purpose, 
    and inner balance.
  </p>

  {/* SECTION 1 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    1. Stress and Anxiety: Letting Go of What You Cannot Control
  </h2>

  <p className="mb-6">
    Stress is one of the most common problems of modern life. 
    People worry about jobs, relationships, money, health, 
    and expectations from society.
  </p>

  <p className="mb-6">
    The Bhagavad Gita explains that most anxiety comes from focusing 
    too much on results rather than actions.  
    We become obsessed with outcomes:  
    “What if I fail?”  
    “What will people think?”  
    “Will I succeed?”
  </p>

  <div className="bg-white/5 p-6 rounded-xl border-l-4 border-saffron italic mb-6">
    "You have the right to perform your duty, but not to the fruits of your actions."
  </div>

  <p className="text-sm text-stone-400 mb-8">
    <strong>Practical Impact:</strong>  
    When you focus only on doing your best today, 
    the future becomes lighter and anxiety naturally reduces.
  </p>

  <p className="mb-8">
    Imagine studying for an exam. If your only focus is the final score, 
    stress increases. But if you focus on learning sincerely, 
    the mind becomes calmer.  
    This is Karma Yoga — the yoga of action.
  </p>

  {/* SECTION 2 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    2. Fear of Failure: Courage Through Detachment
  </h2>

  <p className="mb-6">
    Fear of failure stops countless people from even trying.  
    Many dreams die not because people are incapable, 
    but because they are afraid.
  </p>

  <p className="mb-6">
    The Gita teaches that fear comes from attachment — attachment to success, 
    to recognition, and to approval.
  </p>

  <p className="mb-6">
    Krishna reminds Arjuna that success and failure are temporary, 
    but your effort and character are permanent.
  </p>

  <p className="mb-8">
    When you act with sincerity and leave the outcome to life, 
    courage automatically replaces fear.  
    You begin to realize:  
    “I am here to grow, not just to win.”
  </p>

  {/* SECTION 3 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    3. Overthinking: Mastering the Mind
  </h2>

  <p className="mb-6">
    Overthinking is like a storm inside the head.  
    The mind keeps replaying the past or worrying about the future.
  </p>

  <p className="mb-6">
    The Gita explains that the mind can become either your greatest friend 
    or your biggest enemy.
  </p>

  <p className="mb-6">
    A controlled mind brings peace, focus, and happiness.  
    An uncontrolled mind brings suffering.
  </p>

  <p className="mb-8">
    Krishna teaches Abhyasa — practice and awareness.  
    You do not control the mind in one day.  
    You train it slowly, gently, like guiding a child.
  </p>

  <p className="mb-8">
    Even simple habits such as meditation, mindful breathing, 
    or reading one verse daily can calm the storm of thoughts.
  </p>

  {/* SECTION 4 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    4. Feeling Stuck in Life: Clarity Through Action
  </h2>

  <p className="mb-6">
    Many people experience phases where life feels directionless.  
    You may ask yourself:
  </p>

  <ul className="mb-6 list-disc pl-6">
    <li>What am I doing with my life?</li>
    <li>Am I on the right path?</li>
    <li>Why do I feel lost even after working hard?</li>
  </ul>

  <p className="mb-6">
    Arjuna faced the same confusion on the battlefield.  
    He felt stuck, overwhelmed, and unable to move forward.
  </p>

  <p className="mb-8">
    Krishna’s solution was simple yet powerful:  
    clarity comes not from avoiding action, but from taking the right action.
  </p>

  <p className="mb-8">
    Even one small step with faith is better than years of hesitation.
  </p>

  {/* SECTION 5 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    5. Loneliness and Emotional Pain: The Inner Companion
  </h2>

  <p className="mb-6">
    Modern life often creates loneliness.  
    Even with social media, many hearts feel disconnected.
  </p>

  <p className="mb-6">
    The Bhagavad Gita teaches that true companionship begins within.
  </p>

  <p className="mb-6">
    When you connect with your inner self, 
    you stop depending completely on external validation.
  </p>

  <p className="mb-8">
    Krishna reminds us that the soul is never alone, never broken, 
    and never truly lost.  
    Emotional pain becomes lighter when you remember your deeper identity.
  </p>

  {/* SECTION 6 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    6. Anger and Impatience: Transforming Inner Fire
  </h2>

  <p className="mb-6">
    Anger is one of the most destructive emotions.  
    It damages relationships, health, and peace of mind.
  </p>

  <p className="mb-6">
    The Gita explains that anger arises from unfulfilled desires 
    and expectations.
  </p>

  <p className="mb-8">
    When we accept life as it is, anger reduces.  
    Patience becomes strength, not weakness.
  </p>

  {/* SECTION 7 */}
  <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">
    7. Purpose and Meaning: Living Beyond Survival
  </h2>

  <p className="mb-6">
    Many people are not just struggling with problems — 
    they are struggling with emptiness.
  </p>

  <p className="mb-6">
    The Gita teaches that life becomes meaningful when you live with Dharma — 
    your true responsibility and purpose.
  </p>

  <p className="mb-8">
    When you align your actions with values, service, and growth, 
    life feels fulfilling even during challenges.
  </p>

  {/* FINAL SECTION */}
  <div className="mt-16 p-8 bg-saffron/10 rounded-2xl border border-saffron/20 text-center">
    <h3 className="font-serif text-xl text-parchment mb-2">
      Final Message from the Gita
    </h3>
    <p className="text-saffron text-lg italic">
      "Do your duty with love, trust the process, and peace will follow."
    </p>
  </div>

  <p className="mt-10 mb-6 leading-relaxed">
    The Bhagavad Gita is not about escaping life — it is about mastering life.
    Its teachings are timeless because human struggles remain the same across generations.
  </p>

  <p className="leading-relaxed">
    If you apply even one principle — focusing on effort, calming the mind,
    acting with courage, or finding purpose — your life will begin to transform.
  </p>

</article>


                {/* ✨ NEW SHARE SECTION ✨ */}
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">Share this wisdom</p>
                    
                    <button 
                        onClick={handleShare}
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 ${
                            copied 
                            ? 'bg-green-500/20 text-green-500 border border-green-500/50' 
                            : 'bg-white/5 text-parchment hover:bg-saffron hover:text-white hover:shadow-glow'
                        }`}
                    >
                        {copied ? <Check size={24} /> : <Share2 size={24} />}
                    </button>

                    <span className={`text-[10px] mt-3 font-bold uppercase tracking-wider transition-colors duration-300 ${copied ? 'text-green-500' : 'text-stone-600'}`}>
                        {copied ? 'Link Copied!' : 'Click to Share'}
                    </span>
                </div>
            </main>
        </div>
    );
};

export default Blogs;