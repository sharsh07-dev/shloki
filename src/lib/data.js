// === GENERATOR UTILITIES ===
const generateShlokas = (count, prefix) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    sanskrit: i === 0 
      ? "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।" 
      : `अध्याय ${prefix} श्लोक ${i + 1} - (Sanskrit Placeholder)`,
    translation: i === 0
      ? "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
      : `This is the hidden wisdom of Verse ${i + 1}. Unlock to reveal the divine meaning.`,
    nuance: "Ancient wisdom requires patience.",
    locked: i !== 0 
  }));
};

// === 1. THE "HERO" BOOKS (Top 3 Most Used) ===
export const HERO_BOOKS = [
  {
    id: 'gita',
    title: 'Bhagavad Gita',
    subtitle: 'The Song of God',
    description: 'The eternal message of spiritual wisdom.',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop', 
    totalCards: 25,
    isPopular: true // New Flag
  },
  {
    id: 'yogasutra',
    title: 'Yoga Sutras',
    subtitle: 'Patanjali',
    description: 'The science of mind and consciousness.',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop', 
    totalCards: 20,
    isPopular: true
  },
  {
    id: 'upanishads',
    title: 'The Upanishads',
    subtitle: 'Vedic Wisdom',
    description: 'Philosophical essence of the Vedas.',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop', 
    totalCards: 22,
    isPopular: true
  }
];

// === 2. GENERATE EXTRA MOCK BOOKS (The Library) ===
const EXTRA_COVERS = [
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800',
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800'
];
// ... (Keep existing BOOKS and generateShlokas code) ...

// === EMOTION MAPPING FOR GITA (Expanded) ===
export const GITA_EMOTIONS = [
  // ROW 1: Intense Emotions
  { id: 'anger', label: 'Anger', icon: '🔥', shlokaId: 2 },
  { id: 'fear', label: 'Fear', icon: '😨', shlokaId: 3 },
  { id: 'ego', label: 'Ego', icon: '🦁', shlokaId: 18 },
  { id: 'desire', label: 'Power of Desire', icon: '🍷', shlokaId: 4 },

  // ROW 2: Mental States
  { id: 'depression', label: 'Depression', icon: '🌧️', shlokaId: 5 },
  { id: 'jealousy', label: 'Jealousy', icon: '🐍', shlokaId: 6 },
  { id: 'doubt', label: 'Self-Doubt', icon: '🤔', shlokaId: 7 },
  { id: 'attachment', label: 'Attachment', icon: '🔗', shlokaId: 2 },

  // ROW 3: Forgiveness & Discipline
  { id: 'forgive', label: 'Inability to Forgive', icon: '🤲', shlokaId: 8 },
  { id: 'discipline', label: 'Lack of Discipline', icon: '🥋', shlokaId: 9 },
  { id: 'focus', label: 'Lack of Focus', icon: '🎯', shlokaId: 10 },
  { id: 'anxiety', label: 'Fear & Anxiety', icon: '😰', shlokaId: 11 },

  // ROW 4: Confusion & Thinking
  { id: 'confusion', label: 'Confusion in Life', icon: '🌀', shlokaId: 1 },
  { id: 'overthinking', label: 'Overthinking', icon: '🧠', shlokaId: 12 },
  { id: 'motivation', label: 'Lack of Motivation', icon: '🔋', shlokaId: 13 },
  { id: 'lonely', label: 'Feeling Lonely', icon: '🌑', shlokaId: 14 },

  // ROW 5: Mastery
  { id: 'mind', label: 'Control the Mind', icon: '🧘', shlokaId: 6 },
  { id: 'fail', label: 'Fear of Failure', icon: '📉', shlokaId: 3 },
  { id: 'result', label: 'Attachment to Result', icon: '🎁', shlokaId: 2 },
  { id: 'stress', label: 'Work Stress', icon: '💼', shlokaId: 5 },

  // ROW 6: Career & Expectations
  { id: 'loss', label: 'Business Loss', icon: '💸', shlokaId: 15 },
  { id: 'givingup', label: 'Giving Up Early', icon: '🏳️', shlokaId: 18 },
  { id: 'expect', label: 'Expectations', icon: '🎭', shlokaId: 12 },
  { id: 'betrayal', label: 'Betrayal', icon: '💔', shlokaId: 16 },

  // ROW 7: Deep Fears
  { id: 'surrender', label: 'Fear of Surrender', icon: '🙏', shlokaId: 18 },
  { id: 'future', label: 'Fear of Future', icon: '🔮', shlokaId: 11 },
  { id: 'insecure', label: 'Feeling Insecure', icon: '🛡️', shlokaId: 10 },
  { id: 'suffering', label: 'Suffering', icon: '🩹', shlokaId: 13 },

  // ROW 8: Life Path
  { id: 'judgment', label: 'Fear of Judgment', icon: '👀', shlokaId: 17 },
  { id: 'stuck', label: 'Feeling Stuck', icon: '⚓', shlokaId: 1 },
];
const MOCK_BOOKS = Array.from({ length: 22 }, (_, i) => ({
  id: `vol-${i + 1}`,
  title: `Sacred Volume ${i + 1}`,
  subtitle: 'Ancient Manuscript',
  description: 'Recovered wisdom from the archives.',
  cover: EXTRA_COVERS[i % EXTRA_COVERS.length], // Cycle through images
  totalCards: 25,
  isPopular: false
}));

// === 3. EXPORT COMBINED LISTS ===
export const ALL_BOOKS = [...HERO_BOOKS, ...MOCK_BOOKS];

// === 4. GENERATE CARDS FOR ALL BOOKS ===
export const SHLOKAS = {
  // Hero Books
  gita: generateShlokas(25, 'BG'),
  yogasutra: generateShlokas(20, 'YS'),
  upanishads: generateShlokas(22, 'UP'),
};

// Generate cards for mock books dynamically
MOCK_BOOKS.forEach(book => {
  SHLOKAS[book.id] = generateShlokas(25, `VOL-${book.id}`);
});