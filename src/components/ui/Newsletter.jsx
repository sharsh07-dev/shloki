import React, { useState } from 'react';
import { Mail, ArrowRight, Check, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // YOUR KEYS
    const serviceId = 'service_md5qp7j';
    const templateId = 'template_b7o0sbl';
    const publicKey = 'Xlew6X8s0ftsmndSo';

    const templateParams = {
      user_email: email,
      message: 'New Subscriber for Shloki Daily Wisdom!',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20 mb-12">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-saffron/5 blur-3xl rounded-full opacity-50 pointer-events-none" />

      <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden text-center group hover:border-saffron/30 transition-all duration-500">
        
        {/* Background Texture */}
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <Sparkles size={120} />
        </div>

        <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron mb-6 border border-saffron/20 group-hover:scale-110 transition-transform">
                <Mail size={24} />
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-parchment mb-3">
              Start Your Morning with <span className="text-saffron">Power</span>.
            </h3>
            
            <p className="text-stone-400 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
              Join the inner circle. Receive one powerful Shloka or Law of Power every morning. No spam, just pure strategy.
            </p>

            <form onSubmit={handleSubmit} className="relative w-full max-w-md">
              <div className="relative flex items-center group/input">
                <Mail className="absolute left-4 text-stone-500 w-5 h-5 group-focus-within/input:text-saffron transition-colors" />
                
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-14 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-saffron/50 focus:bg-black/50 transition-all disabled:opacity-50"
                  required
                />

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`absolute right-1.5 p-2.5 rounded-full transition-all duration-300 shadow-lg ${
                    status === 'success' 
                      ? 'bg-green-500 text-white shadow-green-500/20' 
                      : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-saffron text-stone-900 hover:bg-white hover:scale-105 shadow-saffron/20'
                  }`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="w-5 h-5" />
                  ) : status === 'error' ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Status Messages */}
              <div className="h-6 mt-2 relative overflow-hidden">
                  {status === 'success' && (
                    <p className="text-[12px] text-green-400 font-medium animate-fade-in-up">
                      Welcome to the circle. Check your inbox soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-[12px] text-red-400 font-medium animate-fade-in-up">
                      Something went wrong. Please try again.
                    </p>
                  )}
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}