import { useEffect } from 'react';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

export default function ContactUs() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-spiritual-bg text-parchment font-sans selection:bg-saffron selection:text-white">
      <Navbar />
      
      {/* Mobile: pt-20 (less gap), Desktop: pt-32 */}
      <main className="pt-20 md:pt-32 px-4 md:px-8 max-w-4xl mx-auto pb-10">
        
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-stone-500 hover:text-saffron transition-colors mb-6 md:mb-8 text-xs md:text-sm uppercase tracking-widest font-bold">
          <ArrowLeft size={16} /> Back
        </button>

        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          {/* Mobile Title: text-3xl */}
          <h1 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 text-parchment">Get in Touch</h1>
          <p className="text-stone-400 text-sm md:text-base mb-8 md:mb-12 leading-relaxed">
            Have a suggestion, a new scripture request, or just want to share your story? We'd love to hear from you.
          </p>

          <div className="grid gap-4 md:gap-6">
            
            {/* Email Card - Touchable on Mobile */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center active:scale-[0.98] transition-all duration-200">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron mb-3 md:mb-4">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Email Us</h3>
              <p className="text-stone-500 text-xs md:text-sm mb-3">For general inquiries and support</p>
              <a href="mailto:support@shloki.com" className="text-saffron font-bold text-base md:text-lg hover:underline break-all">
                support@shloki.com
              </a>
            </div>
            
            {/* Location Card */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 mb-3 md:mb-4">
                <MapPin size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Location</h3>
              <p className="text-stone-500 text-sm">Mumbai, India</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* NO FOOTER HERE (It is in App.jsx) */}
    </div>
  );
}