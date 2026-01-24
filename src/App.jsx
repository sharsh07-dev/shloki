import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; 
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';

// Hooks
import { useContentProtection } from './hooks/useContentProtection';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FeedbackModal from './components/ui/FeedbackModal';

// Pages
import Home from './pages/Home';
import FullLibrary from './features/library/FullLibrary';
import WisdomLibrary from './features/library/WisdomLibrary';   
import SingleCardPage from './features/flashcards/SingleCardPage';
import Reader from './features/flashcards/Reader';
import PrivacyPolicy from './pages/PrivacyPolicy';  
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Blogs from './pages/Blogs';

ReactGA.initialize("G-MJHSE6R27Y");

function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  return null;
}

function App() {
  const isBlurry = useContentProtection();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageTracker />
        <Analytics />

        <div 
          className={`min-h-screen bg-spiritual-bg font-sans select-none flex flex-col relative transition-filter duration-300 ${isBlurry ? 'blur-xl grayscale' : ''}`}
          onContextMenu={(e) => e.preventDefault()}
        >
          <FeedbackModal />
          
          <div className="flex-1">
            <Navbar />
            <Routes>
              {/* ✅ THIS IS THE ONLY HOME ROUTE NOW */}
       <Route path="/home" element={<Home />} />

              <Route path="/library" element={<FullLibrary />} />
              <Route path="/wisdom" element={<WisdomLibrary />} />
              <Route path="/wisdom/:cardId" element={<SingleCardPage />} />
              <Route path="/read/:bookId" element={<Reader />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blog/gita-wisdom" element={<Blogs />} />
              
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          <Footer />
        </div>

        {isBlurry && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md">
            <div className="text-center animate-fade-in px-6">
                <h2 className="text-3xl md:text-4xl font-serif text-saffron mb-4">Protected Content</h2>
                <div className="inline-block px-4 py-2 border border-white/10 rounded-lg text-xs text-stone-500 uppercase tracking-widest">
                  Security Mode Active
                </div>
            </div>
          </div>
        )}

      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;