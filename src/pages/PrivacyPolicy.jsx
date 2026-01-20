import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-spiritual-bg text-parchment font-sans selection:bg-saffron selection:text-white">
      <Navbar />

      <main className="pt-20 md:pt-32 px-5 md:px-8 max-w-3xl mx-auto pb-20">
        
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-stone-500 hover:text-saffron transition-colors mb-6 text-xs uppercase tracking-widest font-bold"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <h1 className="font-serif text-3xl md:text-5xl mb-2 text-parchment">Privacy Policy</h1>
        <p className="text-stone-500 text-xs md:text-sm mb-8 md:mb-12">Last Updated: January 20, 2026</p>

        {/* Text Stack */}
        <div className="space-y-8 md:space-y-10 text-sm md:text-base text-stone-300 leading-7 md:leading-8">
          
          <section>
            <h2 className="font-serif text-xl md:text-2xl text-saffron mb-2 md:mb-4">1. Introduction</h2>
            <p>
              Welcome to <strong>Shloki</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This policy explains how we treat your data when you visit shloki.com.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-saffron mb-2 md:mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              <strong>Personal Data:</strong> We do not require an account. If you email us, we see your email address.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect standard log data (IP address, browser type) to help us understand how our website is used.
            </p>
          </section>

          <section className="bg-white/5 p-5 md:p-6 rounded-xl border border-white/10">
            <h2 className="font-serif text-xl md:text-2xl text-saffron mb-3 md:mb-4">3. Advertising (AdSense)</h2>
            <p className="mb-3">
              We use <strong>Google AdSense</strong> to serve ads.
            </p>
            <ul className="list-disc pl-4 space-y-2 text-stone-400 text-xs md:text-sm">
              <li>
                Third-party vendors, including Google, use cookies to serve ads based on your prior visits.
              </li>
              <li>
                You may opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-saffron hover:underline">Google Ads Settings</a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl text-saffron mb-2 md:mb-4">4. Contact Us</h2>
            <p>
              Questions? Email us at: <br/>
              <span className="text-parchment font-bold">support@shloki.com</span>
            </p>
          </section>

        </div>

      </main>
      
      {/* NO FOOTER HERE */}
    </div>
  );
}