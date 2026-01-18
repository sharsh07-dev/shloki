// Helper to generate mock shlokas for other books
const generateShlokas = (count, prefix) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    chapter: `Chapter ${prefix}`, 
    sanskrit: i === 0 
      ? "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।" 
      : `अध्याय ${prefix} श्लोक ${i + 1} - (Sanskrit Text Placeholder)`,
    translation: i === 0
      ? "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
      : `This is the hidden wisdom of Verse ${i + 1}. Swipe to reveal the divine meaning.`,
    nuance: "Ancient wisdom requires patience.",
    locked: false // <--- CHANGED: ALL FREE
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
    totalCards: 27, 
    isPopular: true
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

const MOCK_BOOKS = Array.from({ length: 22 }, (_, i) => ({
  id: `vol-${i + 1}`,
  title: `Sacred Volume ${i + 1}`,
  subtitle: 'Ancient Manuscript',
  description: 'Recovered wisdom from the archives.',
  cover: EXTRA_COVERS[i % EXTRA_COVERS.length], 
  totalCards: 25,
  isPopular: false
}));

// === 3. EXPORT COMBINED LISTS ===
export const ALL_BOOKS = [...HERO_BOOKS, ...MOCK_BOOKS];

// === 4. REAL GITA DATA (Unlocked) ===
const GITA_DATA = [
  {
    id: 'anger',
    chapter: "Chapter 2, Shloka 62–63",
    sanskrit: "ध्यायतो विषयान् पुंसः संगस्तेषूपजायते।\nसंगात्संजायते कामः कामात्क्रोधोऽभिजायते॥\nक्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    translation: "Shloka Insight:\n• Thinking repeatedly about fears or desires creates attachment.\n• Attachment slowly turns into ego, anger, and frustration.\n• When anger and fear take control, clarity and right judgment are lost.\n\nGita Solution:\n• Anger and ego are born from fear and uncontrolled thinking, not from situations.\n• Stepping back, observing your thoughts, and choosing calm action restores balance.",
    nuance: "“Pause, breathe, and respond with awareness instead of reacting with emotion.”",
    locked: false 
  },
  {
    id: 'desire',
    chapter: "Chapter 3, Shloka 37",
    sanskrit: "काम एष क्रोध एष रजोगुणसमुद्भवः।\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम्॥",
    translation: "Shloka Insight:\n• Desire is a powerful inner force that pushes a person to act.\n• When guided well, desire becomes motivation and progress.\n• When uncontrolled, the same desire turns into restlessness and suffering.\n\nGita Solution:\n• Desire itself is not wrong; lack of awareness is the real problem.\n• Channeling desire with discipline turns it into strength instead of distraction.",
    nuance: "“Guide your desire with awareness, and it will work for you instead of controlling you.”",
    locked: false
  },
  {
    id: 'depression',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• The mind can either support you or pull you down.\n• Depression grows when hope is forgotten, not when strength is lost.\n• Even a small effort can slowly bring the mind back to balance.\n\nGita Solution:\n• Depression is deepened by self-neglect, not by lack of ability.\n• Gentle action with patience restores inner strength over time.",
    nuance: "“Take one small step today — that is enough for now.”",
    locked: false
  },
  {
    id: 'jealousy',
    chapter: "Chapter 12, Shloka 15",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    translation: "Shloka Insight:\n• Jealousy arises when comparison replaces self-contentment.\n• Constant comparison disturbs inner peace and clarity.\n• A calm and balanced mind stays free from emotional agitation.\n\nGita Solution:\n• Jealousy grows from insecurity, not from others’ success.\n• Focusing on self-growth dissolves comparison and brings peace.",
    nuance: "“Walk your own path with calm focus; peace follows naturally.”",
    locked: false
  },
  {
    id: 'self_doubt',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Self-doubt begins when trust in oneself is forgotten.\n• The same mind can weaken you or support you.\n• Belief grows slowly through consistent small efforts.\n\nGita Solution:\n• Self-doubt is created by repeated negative thinking, not by lack of ability.\n• Taking action despite doubt rebuilds confidence step by step.",
    nuance: "“Trust yourself enough to take one step — clarity follows action.”",
    locked: false
  },
  {
    id: 'attachment',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Attachment forms when actions are tied too strongly to outcomes.\n• Expecting specific results creates fear and emotional dependence.\n• Peace comes from doing one’s duty without clinging to the result.\n\nGita Solution:\n• Attachment grows from obsession with results, not from action itself.\n• Performing actions with detachment brings freedom and inner calm.",
    nuance: "“Do your work with sincerity, and let go of the outcome.”",
    locked: false
  },
  {
    id: 'forgive',
    chapter: "Chapter 16, Shloka 3",
    sanskrit: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।\nदया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥",
    translation: "Shloka Insight:\n• Forgiveness is a strength that comes from inner peace, not weakness.\n• Holding anger keeps the mind restless and heavy.\n• Letting go creates space for calm and clarity.\n\nGita Solution:\n• Inability to forgive is caused by attachment to hurt, not by justice.\n• Choosing compassion frees the mind more than it frees others.",
    nuance: "“Forgiveness lightens the heart and restores inner peace.”",
    locked: false
  },
  {
    id: 'discipline',
    chapter: "Chapter 6, Shloka 26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    translation: "Shloka Insight:\n• The mind naturally wanders and avoids effort.\n• Discipline is not force; it is gentle, repeated redirection.\n• Consistent practice slowly builds self-control.\n\nGita Solution:\n• Lack of discipline comes from an untrained mind, not laziness.\n• Regular small routines create stability and inner strength.",
    nuance: "“Bring the mind back gently each time — this is discipline.”",
    locked: false
  },
  {
    id: 'anxiety',
    chapter: "Chapter 6, Shloka 15",
    sanskrit: "शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।",
    translation: "Shloka Insight:\n• Fear and anxiety arise when the mind lives in the future.\n• Constant worry disturbs inner peace and balance.\n• A calm and centered mind naturally feels safe and steady.\n\nGita Solution:\n• Fear grows from imagining outcomes, not from the present moment.\n• Returning attention to the present restores clarity and calm.",
    nuance: "“Stay rooted in the present — peace replaces fear.”",
    locked: false
  },
  {
    id: 'confusion',
    chapter: "Chapter 4, Shloka 42",
    sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनाऽऽत्मनः।\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत॥",
    translation: "Shloka Insight:\n• Confusion arises when clarity is covered by doubt and overthinking.\n• Too many thoughts weaken decision-making.\n• Right understanding cuts through doubt and restores direction.\n\nGita Solution:\n• Confusion grows from lack of inner clarity, not lack of options.\n• Seeking understanding and taking action dissolves doubt.",
    nuance: "“Choose clarity over hesitation — the path becomes visible.”",
    locked: false
  },
  {
    id: 'overthinking',
    chapter: "Chapter 6, Shloka 25",
    sanskrit: "शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया।\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्॥",
    translation: "Shloka Insight:\n• Overthinking happens when the mind runs without direction.\n• Too many thoughts drain energy and clarity.\n• Calm focus brings the mind back to peace.\n\nGita Solution:\n• Overthinking is caused by lack of mental rest, not lack of intelligence.\n• Gradual calming of the mind restores balance and clarity.",
    nuance: "“Pause... and let the mind settle.”",
    locked: false
  },
  {
    id: 'motivation',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Motivation weakens when results feel too heavy to carry.\n• Focusing only on outcomes drains energy and interest.\n• Action itself slowly rebuilds inner drive.\n\nGita Solution:\n• Lack of motivation comes from attachment to results, not from lack of ability.\n• Doing small actions without pressure restores momentum.",
    nuance: "“Begin with one small action today, motivation will follow.”",
    locked: false
  },
  {
    id: 'lonely',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Loneliness grows when we feel disconnected from ourselves.\n• Depending only on others for comfort creates inner emptiness.\n• Reconnecting with oneself brings quiet strength and peace.\n\nGita Solution:\n• Loneliness comes from inner disconnection, not from being alone.\n• Building a gentle relationship with yourself restores warmth and support.",
    nuance: "“Be present with yourself today — you are never truly alone.”",
    locked: false
  },
  {
    id: 'control_mind',
    chapter: "Chapter 6, Shloka 26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    translation: "Shloka Insight:\n• The mind naturally wanders and seeks distractions.\n• Trying to force control only creates more resistance.\n• Calm repetition and awareness slowly train the mind.\n\nGita Solution:\n• The mind is controlled through gentle practice, not harsh discipline.\n• Bringing attention back again and again builds inner mastery.",
    nuance: "“Each time the mind wanders, bring it back calmly — this is control.”",
    locked: false
  },
  {
    id: 'fear_failure',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Fear of failure arises when results matter more than effort.\n• Worrying about outcomes weakens courage and clarity.\n• Peace comes from focusing on action, not its result.\n\nGita Solution:\n• Fear of failure is created by attachment to success, not by effort.\n• Acting sincerely without pressure dissolves fear step by step.",
    nuance: "“Do your best today and let go — fear fades when action begins.”",
    locked: false
  },
  {
    id: 'attach_result',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Attachment to results creates constant expectation and fear.\n• When peace depends on outcomes, the mind stays restless.\n• True balance comes from focusing on effort, not reward.\n\nGita Solution:\n• Attachment to results grows from insecurity, not from action itself.\n• Performing duties with detachment brings inner freedom.",
    nuance: "“Give your best effort and release the outcome.”",
    locked: false
  },
  {
    id: 'work_stress',
    chapter: "Chapter 2, Shloka 48",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    translation: "Shloka Insight:\n• Work stress grows when pressure replaces balance.\n• Unequal focus on success or failure disturbs the mind.\n• Inner steadiness brings clarity even in demanding work.\n\nGita Solution:\n• Work stress comes from emotional imbalance, not workload alone.\n• Maintaining calm effort with detachment restores control and peace.",
    nuance: "“Work with balance — calm effort is true strength.”",
    locked: false
  },
  {
    id: 'loss',
    chapter: "Chapter 2, Shloka 14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "Shloka Insight:\n• Loss and gain are temporary phases in life.\n• Painful situations come and go like changing seasons.\n• Endurance and patience bring inner strength.\n\nGita Solution:\n• Loss hurts because we see it as permanent, not temporary.\n• Accepting change with patience opens the path to recovery.",
    nuance: "“This phase will pass — stay steady and move forward.”",
    locked: false
  },
  {
    id: 'giving_up',
    chapter: "Chapter 6, Shloka 23",
    sanskrit: "तं विद्याद् दुःखसंयोगवियोगं योगसंज्ञितम्।\nस निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा॥",
    translation: "Shloka Insight:\n• Difficult moments are part of every journey.\n• Discomfort does not mean failure.\n• Staying steady helps us move beyond pain.\n\nGita Solution:\n• Giving up too early happens because the mind feels tired, not because the goal is wrong.\n• Continuing calmly, without frustration, builds real strength.",
    nuance: "“Don’t stop at discomfort — growth begins just after it.”",
    locked: false
  },
  {
    id: 'expectations',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Expecting others to behave in a certain way leads to disappointment.\n• People act based on their own understanding, limits, and situations.\n• Peace comes when we stop tying our happiness to others’ actions.\n\nGita Solution:\n• Expectations from others create emotional stress and dependence.\n• Accepting people as they are brings inner freedom and calm.",
    nuance: "“Release expectations — peace grows when acceptance begins.”",
    locked: false
  },
  {
    id: 'betrayal',
    chapter: "Chapter 2, Shloka 14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "Shloka Insight:\n• Emotional pain feels strong when trust is broken.\n• Hurtful experiences come and go; they are not permanent.\n• Endurance helps the heart regain balance.\n\nGita Solution:\n• Betrayal hurts deeply because of emotional attachment, not weakness.\n• Accepting the pain without bitterness allows healing to begin.",
    nuance: "“Let the pain pass — your peace is stronger than betrayal.”",
    locked: false
  },
  {
    id: 'surrender',
    chapter: "Chapter 12, Shloka 15",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    translation: "Shloka Insight:\n• Fear increases when we feel unsafe in our surroundings.\n• The mind imagines threats even when none are present.\n• Inner calm reduces fear more than changing the environment.\n\nGita Solution:\n• Fear of surroundings comes from inner insecurity, not external danger alone.\n• Building inner steadiness slowly removes fear from the mind.",
    nuance: "“When the mind becomes calm, the world feels safe again.”",
    locked: false
  },
  {
    id: 'fear_future',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Fear of the future grows when the mind lives ahead of the present.\n• Worrying about outcomes creates anxiety and restlessness.\n• Peace comes from focusing on today’s effort.\n\nGita Solution:\n• Fear of the future comes from attachment to imagined results.\n• Staying present and taking right action reduces fear.",
    nuance: "“Focus on today’s step — the future will take care of itself.”",
    locked: false
  },
  {
    id: 'insecure',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Insecurity grows when trust in oneself becomes weak.\n• Depending on others for validation increases fear.\n• Inner support brings stability and confidence.\n\nGita Solution:\n• Feeling insecure comes from self-doubt, not from lack of worth.\n• Strengthening self-trust slowly removes insecurity.",
    nuance: "“Trust yourself — inner strength grows from within.”",
    locked: false
  },
  {
    id: 'suffering',
    chapter: "Chapter 2, Shloka 14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "Shloka Insight:\n• Sometimes suffering comes without a clear external reason.\n• The mind creates pain by repeatedly thinking and feeling.\n• Such suffering is temporary and will pass.\n\nGita Solution:\n• Suffering without reason comes from inner disturbance, not from reality.\n• Observing the mind calmly reduces unnecessary pain.",
    nuance: "“Let the moment pass — peace returns when the mind settles.”",
    locked: false
  },
  {
    id: 'judgement',
    chapter: "Chapter 3, Shloka 35",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    translation: "Shloka Insight:\n• Fear of judgement comes when we try to live by others’ standards.\n• Comparing yourself with others creates anxiety and self-doubt.\n• Peace grows when you stay true to your own path.\n\nGita Solution:\n• Fear of judgement is born from seeking approval, not from wrongdoing.\n• Focusing on your own duty reduces fear and builds confidence.",
    nuance: "“Walk your own path — peace comes when you stop seeking approval.”",
    locked: false
  },
  {
    id: 'stuck',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Feeling stuck happens when hope and direction feel lost.\n• The mind starts believing that nothing will change.\n• Inner effort is the first step toward movement.\n\nGita Solution:\n• Feeling stuck comes from loss of self-belief, not lack of opportunity.\n• Small actions taken daily slowly create progress.",
    nuance: "“Take one small step today — movement brings new direction.”",
    locked: false
  }
];

// === 5. GENERATE CARDS FOR ALL BOOKS ===
export const SHLOKAS = {
  gita: GITA_DATA, 
  yogasutra: generateShlokas(20, 'YS'),
  upanishads: generateShlokas(22, 'UP'),
};

MOCK_BOOKS.forEach(book => {
  SHLOKAS[book.id] = generateShlokas(25, `VOL-${book.id}`);
});

// === 6. EMOTION MAPPING FOR GITA ===
export const GITA_EMOTIONS = [
  // ROW 1
  { id: 'anger', label: 'Anger', icon: '🔥', shlokaId: 'anger' },
  { id: 'fear', label: 'Fear', icon: '😨', shlokaId: 'anger' }, // Maps to same card as Anger
  { id: 'ego', label: 'Ego', icon: '🦁', shlokaId: 'anger' }, // Maps to same card as Anger
  { id: 'desire', label: 'Power of Desire', icon: '🍷', shlokaId: 'desire' },
  // ROW 2
  { id: 'depression', label: 'Depression', icon: '🌧️', shlokaId: 'depression' },
  { id: 'jealousy', label: 'Jealousy', icon: '🐍', shlokaId: 'jealousy' },
  { id: 'doubt', label: 'Self-Doubt', icon: '🤔', shlokaId: 'self_doubt' },
  { id: 'attachment', label: 'Attachment', icon: '🔗', shlokaId: 'attachment' },
  // ROW 3
  { id: 'forgive', label: 'Inability to Forgive', icon: '🤲', shlokaId: 'forgive' },
  { id: 'discipline', label: 'Lack of Discipline', icon: '🥋', shlokaId: 'discipline' },
  { id: 'anxiety', label: 'Fear & Anxiety', icon: '😰', shlokaId: 'anxiety' },
  { id: 'confusion', label: 'Confusion', icon: '🌀', shlokaId: 'confusion' },
  // ROW 4
  { id: 'overthinking', label: 'Overthinking', icon: '🧠', shlokaId: 'overthinking' },
  { id: 'motivation', label: 'No Motivation', icon: '🔋', shlokaId: 'motivation' },
  { id: 'lonely', label: 'Feeling Lonely', icon: '🌑', shlokaId: 'lonely' },
  { id: 'control_mind', label: 'Control Mind', icon: '🧘', shlokaId: 'control_mind' },
  // ROW 5
  { id: 'fear_failure', label: 'Fear of Failure', icon: '📉', shlokaId: 'fear_failure' },
  { id: 'attach_result', label: 'Attach to Result', icon: '🎁', shlokaId: 'attach_result' },
  { id: 'work_stress', label: 'Work Stress', icon: '💼', shlokaId: 'work_stress' },
  { id: 'loss', label: 'Business Loss', icon: '💸', shlokaId: 'loss' },
  // ROW 6
  { id: 'giving_up', label: 'Giving Up', icon: '🏳️', shlokaId: 'giving_up' },
  { id: 'expectations', label: 'Expectations', icon: '🎭', shlokaId: 'expectations' },
  { id: 'betrayal', label: 'Betrayal', icon: '💔', shlokaId: 'betrayal' },
  { id: 'surrender', label: 'Surrender', icon: '🙏', shlokaId: 'surrender' },
  // ROW 7
  { id: 'fear_future', label: 'Fear of Future', icon: '🔮', shlokaId: 'fear_future' },
  { id: 'insecure', label: 'Insecure', icon: '🛡️', shlokaId: 'insecure' },
  { id: 'suffering', label: 'Suffering', icon: '🩹', shlokaId: 'suffering' },
  { id: 'judgement', label: 'Fear of Judgment', icon: '👀', shlokaId: 'judgement' },
  // ROW 8
  { id: 'stuck', label: 'Feeling Stuck', icon: '⚓', shlokaId: 'stuck' },
];