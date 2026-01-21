import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, type = 'website' }) {
  const siteTitle = "Shloki | Strategy & Wisdom";
  const defaultDesc = "Master the 48 Laws of Power and Bhagavad Gita wisdom through interactive daily flashcards. A mental gymnasium for strategy, focus, and discipline.";
  const siteUrl = "https://shloki.in";

  // Safe check for window object
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  // ==========================================
  // 🎯 MASTER KEYWORD LIST (Hidden SEO)
  // ==========================================
  const SEO_KEYWORDS = [
    // --- 1. YOUR PROVIDED LIST ---
    "Bhagavad Gita", "Bhagavad Gita shlokas", "Bhagavad Gita quotes", "Bhagavad Gita teachings", 
    "Bhagavad Gita life lessons", "Bhagavad Gita wisdom", "Bhagavad Gita for daily life", 
    "Bhagavad Gita for beginners", "Bhagavad Gita in simple English", "Gita wisdom for life", 
    "Krishna teachings", "Lord Krishna quotes", "Ancient wisdom for modern life", "Indian spiritual wisdom", 
    "Spiritual guidance for life", "Spiritual self help", "Spiritual healing for mind", 
    "Inner peace techniques", "Mental clarity practices", "Mind control techniques Gita", 
    "How to control mind Bhagavad Gita", "Stress solution Bhagavad Gita", "Anxiety solution Bhagavad Gita", 
    "Depression solution Bhagavad Gita", "Fear solution Bhagavad Gita", "Overthinking solution Bhagavad Gita", 
    "Loneliness solution Bhagavad Gita", "Insecurity solution Bhagavad Gita", "Self doubt solution Bhagavad Gita", 
    "Fear of failure solution Bhagavad Gita", "Work stress solution Bhagavad Gita", "Career confusion solution Bhagavad Gita", 
    "Loss in business spiritual solution", "Decision making Bhagavad Gita", "Leadership lessons from Bhagavad Gita", 
    "Motivation from Bhagavad Gita", "Lack of motivation solution Gita", "Attachment to result Bhagavad Gita", 
    "Detachment in Bhagavad Gita", "Karma yoga meaning", "Work without attachment Gita", "Expectations from others Gita", 
    "Anger control Bhagavad Gita", "Ego and desire Bhagavad Gita", "How Bhagavad Gita helps in daily life", 
    "How to apply Bhagavad Gita in real life", "How to solve life problems using Gita", "How to reduce stress naturally", 
    "How to find peace of mind", "Life problems solution spiritual", "Daily wisdom for life", "Bhagavad Gita daily wisdom", 
    "Bhagavad Gita inspirational quotes", "Bhagavad Gita reflections", "Bhagavad Gita life problem solution", 
    "Why Bhagavad Gita is relevant today", "Shloki", "Shloki wisdom", "Shloki Bhagavad Gita", "Shloki daily wisdom", 
    "Shloki life solutions", "stress in daily life", "anxiety and fear", "overthinking problem", "depression and sadness", 
    "loneliness feeling", "feeling insecure", "self doubt problem", "fear of failure", "lack of motivation", 
    "loss of confidence", "work stress problem", "career confusion", "job pressure stress", "business loss stress", 
    "failure in career", "confusion in life", "feeling stuck in life", "no direction in life", "mental restlessness", 
    "lack of discipline", "anger management problem", "ego problem", "jealousy feeling", "attachment issues", 
    "attachment to result", "expectations from others", "fear of judgement", "fear of future", "fear of surroundings", 
    "betrayal by close ones", "inability to forgive", "relationship stress", "emotional pain", "inner emptiness", 
    "suffering without reason", "negative thinking", "low self esteem", "lack of focus", "lack of peace of mind", 
    "how to control emotions", "how to control mind", "how to stay calm", "how to find inner peace", 
    "how to deal with stress", "how to overcome fear", "how to stop overthinking", "how to build confidence", 
    "how to handle failure", "how to stay motivated", "how to accept change",

    // --- 2. 🇮🇳 INDIAN POPULAR SEARCHES (Hinglish & Cultural) ---
    "Gita ke updesh", "Krishna vani status", "man ki shanti kaise paye", "tanav mukti ke upay", 
    "safalta ka mantra", "motivational quotes in hindi", "aaj ka suvichar", "Gita saar in hindi", 
    "Bhagavad Gita shlok hindi mein", "karma kya hai", "dharm aur karm", "man ko vash me kaise kare", 
    "gussa kam karne ke upay", "padhai me man kaise lagaye", "Exam stress solution", "sarkari naukri stress", 
    "shadi aur rishte", "pati patni kalesh solution", "sanskar aur vichar", "bharatiya sanskriti", 
    "sanatan dharma teachings", "hanuman chalisa benefits", "subah ka motivation", "raat ko neend na aana", 
    "overthinking kaise roke", "business me safalta", "paisa aur shanti", "jeevan ka satya", "mrityu ka bhay", 
    "moksha prapti", "bhakti yoga kya hai", "gyan yoga in hindi", "dhyan kaise kare", "meditation for students india", 
    "spiritual guru india", "sadguru quotes on life", "iskcon teachings", "bhagwan krishna ki seekh", 
    "mahabharat lessons", "arjun vishad yoga", "karma phal", "punarjanma satya", "aatma kya hai", 
    "kundalini jagran", "yoga for mental health", "ayurveda lifestyle", "satvik jeevan", "positive thinking hindi",

    // --- 3. 🌍 GLOBAL POPULAR SEARCHES (Western/Philosophy) ---
    "Stoicism vs Bhagavad Gita", "Eastern philosophy for beginners", "Mindfulness meditation guide", 
    "Law of Attraction vs Karma", "Spiritual awakening signs", "Ego death meaning", "Non-attachment philosophy", 
    "Dharma and purpose", "Finding your why", "Ikigai and Gita", "Yoga philosophy explained", 
    "Transcendental meditation", "Mental resilience training", "Stoic daily reflections", "Marcus Aurelius quotes", 
    "Philosophy of action", "Duty vs Passion", "Existential crisis help", "Nihilism vs Spirituality", 
    "Holistic mental health", "Alternative therapy for anxiety", "Chakra balancing for beginners", 
    "Karma yoga for work", "Mindful leadership", "Corporate wellness spirituality", "Digital detox guide", 
    "Slow living lifestyle", "Minimalism and spirituality", "Conscious living", "Self-realization techniques", 
    "The power of now", "Eckhart Tolle teachings", "Alan Watts philosophy", "Ram Dass quotes", 
    "Joseph Campbell hero's journey", "Carl Jung shadow work", "Emotional intelligence training", 
    "Cognitive behavioral therapy alternatives", "Positive psychology habits", "Morning routine for success", 
    "Monk mode guide", "Dopamine detox", "Flow state at work", "Deep work strategies", 
    "Dealing with burnout", "Imposter syndrome cure", "Growth mindset philosophy", "Manifestation techniques", 
    "Universal laws explained", "Soul connection"
  ].join(", ");

  return (
    <Helmet>
      {/* 1. STANDARD TAGS */}
      <title>{title ? `${title} | Shloki` : siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {/* The Mega Keyword List */}
      <meta name="keywords" content={keywords || SEO_KEYWORDS} />
      <link rel="canonical" href={currentUrl} />

      {/* 2. OPEN GRAPH (Social Media) */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image || `${siteUrl}/og-image-strategy.jpg`} />

      {/* 3. TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || `${siteUrl}/og-image-strategy.jpg`} />

      {/* 4. STRUCTURED DATA (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Shloki",
          "url": siteUrl,
          "description": "Interactive flashcards for mastering The 48 Laws of Power and Bhagavad Gita wisdom.",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </Helmet>
  );
}