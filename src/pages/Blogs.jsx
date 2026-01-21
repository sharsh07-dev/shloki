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
                <article className="prose prose-invert prose-stone max-w-none text-stone-300">
                    <p className="text-lg md:text-xl leading-relaxed mb-8 italic">
                        In today’s fast-paced life, people struggle with stress, anxiety, fear of failure, confusion, loneliness, and lack of motivation. Even after reading self-help books, peace often feels temporary.
                    </p>

                    <p className="leading-relaxed mb-8">
                        The Bhagavad Gita offers something deeper — lasting clarity and inner balance. It is not just a religious book; it is a practical guide for real-life problems.
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">1. Stress and Anxiety</h2>
                    <p className="mb-4">
                        Most stress comes from worrying about results we cannot control. The Gita teaches us to focus on our efforts rather than the results.
                    </p>
                    <div className="bg-white/5 p-6 rounded-xl border-l-4 border-saffron italic mb-6">
                        "You have a right to perform your duties, but you are not entitled to the fruits of your actions."
                    </div>
                    <p className="text-sm text-stone-400 mb-8"><strong>Practical Impact:</strong> When you work without obsession over the outcome, anxiety naturally fades.</p>

                    <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">2. Fear of Failure</h2>
                    <p className="mb-6">
                        Fear of failure stops people from trying. The Gita explains that fear comes from attachment. When you act without attachment, fear disappears and courage takes its place.
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">3. Overthinking</h2>
                    <p className="mb-6">
                        Overthinking keeps the mind trapped in the past or future. The Gita teaches gentle control of the mind through awareness ("Abhyasa"). A calm mind is your best friend; an uncontrolled mind is your worst enemy.
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl text-saffron mt-12 mb-6">4. Feeling Stuck</h2>
                    <p className="mb-6">
                        When life feels directionless, doubt takes over. The Gita helps by clearing confusion ("Moha") through action. Taking one small step with clarity is better than years of hesitation.
                    </p>
                    
                    <div className="mt-16 p-8 bg-saffron/10 rounded-2xl border border-saffron/20 text-center">
                        <h3 className="font-serif text-xl text-parchment mb-2">A Simple Truth</h3>
                        <p className="text-saffron text-lg italic">"Do your best today and let go. The future will take care of itself."</p>
                    </div>
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