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
    locked: false 
  }));
};

// === 1. THE "HERO" BOOKS (Top 3 Most Used) ===
export const HERO_BOOKS = [
  {
    id: 'gita',
    title: 'Bhagavad Gita',
    subtitle: 'Wisdom Deck',
    description: 'Swipe through the eternal message of spiritual wisdom, one card at a time.',
    cover: 'https://res.cloudinary.com/do0rlgy7c/image/upload/v1768768264/gita_cpncew.png', 
    totalCards: 29, 
    isPopular: true,
    comingSoon: false 
  },
  {
    id: '48laws',
    title: '48 Laws of Power',
    subtitle: 'Strategy Cards',
    description: 'Master the art of manipulation and control with 48 actionable flashcards.',
    cover: 'https://res.cloudinary.com/do0rlgy7c/image/upload/v1768904708/48_laws_of_power_iuggyg.jpg', 
    totalCards: 48,
    isPopular: true,
    comingSoon: false 
  },
  {
    id: 'yogasutra',
    title: 'Yoga Sutras',
    subtitle: 'Mind Science Deck',
    description: 'Decode the science of consciousness with simple, focused cards.',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop', 
    totalCards: 20,
    isPopular: false,
    comingSoon: true // Locked
  },
  
];

// === 2. GENERATE EXTRA MOCK BOOKS (The Library) ===
const EXTRA_COVERS = [
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800',
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800'
];

// All extra books are set to "Coming Soon"
const MOCK_BOOKS = Array.from({ length: 22 }, (_, i) => ({
  id: `vol-${i + 1}`,
  title: `Sacred Volume ${i + 1}`,
  subtitle: 'Ancient Manuscript',
  description: 'Recovered wisdom from the archives.',
  cover: EXTRA_COVERS[i % EXTRA_COVERS.length], 
  totalCards: 25,
  isPopular: false,
  comingSoon: true 
}));

export const ALL_BOOKS = [...HERO_BOOKS, ...MOCK_BOOKS];

// === 3. 48 LAWS OF POWER DATA (Complete) ===
const POWER_LAWS_DATA = [
  {
    id: "law-1",
    chapter: "Law 1",
    sanskrit: "Never Outshine the Master",
    translation: "When you appear smarter, more talented, or more powerful than those above you, their ego feels threatened.\nInstead of rewarding you, they may resist or block your growth.\nReal power comes from making superiors feel secure while you improve silently.",
    steps: ["Respect hierarchy before displaying talent", "Share success and give credit generously", "Avoid public correction or comparison", "Display excellence subtly, not loudly", "Grow patiently while staying humble"],
    nuance: "Control your brilliance today, so you can rise freely tomorrow.",
    locked: false
  },
  {
    id: "law-2",
    chapter: "Law 2",
    sanskrit: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    translation: "Friends may act from emotion, jealousy, or familiarity, which can lead to betrayal or disappointment.\nEnemies, however, are more predictable because they must prove their loyalty if they align with you.\nWise people stay emotionally balanced and judge others by actions, not closeness.",
    steps: ["Do not share all plans, even with close friends", "Observe actions more than words or promises", "Keep professional distance in important matters", "Use rivalry to understand weaknesses and strengths", "Stay calm and objective in relationships"],
    nuance: "Trust actions, not labels, and power will remain in your hands.",
    locked: false
  },
  {
    id: "law-3",
    chapter: "Law 3",
    sanskrit: "Conceal Your Intentions",
    translation: "When people know your true plans, they can prepare, resist, or sabotage you.\nBy keeping intentions hidden, you stay unpredictable and in control.\nSilence and ambiguity protect your goals until the right moment arrives.",
    steps: ["Share goals only with those who truly need to know", "Speak generally, not specifically, about future plans", "Let actions reveal outcomes, not intentions", "Avoid emotional oversharing", "Move decisively when the time is right"],
    nuance: "Power grows strongest when your next move remains unseen.",
    locked: false
  },
  {
    id: "law-4",
    chapter: "Law 4",
    sanskrit: "Always Say Less Than Necessary",
    translation: "Speaking more than required weakens your authority and exposes your thinking.\nThe more you talk, the more control you give away.\nSilence creates mystery, confidence, and respect, making others value your words more.",
    steps: ["Speak only when your words have purpose", "Avoid over-explaining or justifying yourself", "Pause before responding to maintain control", "Keep emotions out of conversations", "Let silence create pressure, not fear"],
    nuance: "Silence turns restraint into power.",
    locked: false
  },
  {
    id: "law-5",
    chapter: "Law 5",
    sanskrit: "So Much Depends on Reputation — Guard It with Your Life",
    translation: "Reputation shapes how people judge you before you act or speak. A strong reputation builds trust and influence automatically.\nOnce damaged, reputation is difficult to restore and easy to exploit.",
    steps: ["Act consistently in all situations", "Avoid gossip and unnecessary conflicts", "Respond quickly to false accusations", "Align with people who strengthen your image", "Let your results reinforce your name"],
    nuance: "Protect your reputation, and it will protect your power.",
    locked: false
  },
  {
    id: "law-6",
    chapter: "Law 6",
    sanskrit: "Court Attention at All Costs",
    translation: "Being ignored makes you powerless. Attention creates presence, influence, and opportunity. It is better to be noticed than forgotten.",
    steps: ["Make your work visible, not just correct", "Develop a recognizable style or voice", "Speak at moments that matter", "Use storytelling to attract interest", "Stay active where decisions are made"],
    nuance: "Visibility creates power.",
    locked: false
  },
  {
    id: "law-7",
    chapter: "Law 7",
    sanskrit: "Get Others to Do the Work for You, but Always Take the Credit",
    translation: "Using the efforts of others saves time and multiplies your strength. People respect results, not the process behind them.\nSmart leaders delegate wisely and own the outcome.",
    steps: ["Delegate tasks based on others’ strengths", "Focus your energy on strategy, not execution", "Reward contributors privately", "Present outcomes confidently as a leader", "Build a reputation for delivering results"],
    nuance: "Leadership is measured by results, not effort.",
    locked: false
  },
  {
    id: "law-8",
    chapter: "Law 8",
    sanskrit: "Make Other People Come to You — Use Bait if Necessary",
    translation: "When you chase others, you give away control. Power shifts to you when people seek your attention.\nBy offering value or opportunity, you draw others into your terms.",
    steps: ["Create something others want or need", "Let opportunities attract people to you", "Avoid chasing approval or validation", "Stay calm and patient in negotiations", "Set conditions only after interest is shown"],
    nuance: "Those who control attraction control the situation.",
    locked: false
  },
  {
    id: "law-9",
    chapter: "Law 9",
    sanskrit: "Win Through Your Actions, Never Through Argument",
    translation: "Arguments rarely change minds and often create enemies. Actions speak louder and leave no room for denial.\nResults silence opposition more effectively than words.",
    steps: ["Prove your point through results", "Avoid wasting energy on debates", "Let success answer criticism", "Stay composed under challenge", "Act decisively instead of explaining"],
    nuance: "Results end arguments.",
    locked: false
  },
  {
    id: "law-10",
    chapter: "Law 10",
    sanskrit: "Infection: Avoid the Unhappy and Unlucky",
    translation: "Emotions and attitudes are contagious. Constant exposure to negativity drains energy and luck. Distance from such people protects your progress.",
    steps: ["Limit time with negative individuals", "Choose environments that encourage growth", "Do not try to rescue those who resist change", "Protect your mental and emotional space", "Surround yourself with positive, driven people"],
    nuance: "Protect your energy to protect your future.",
    locked: false
  },
  {
    id: "law-11",
    chapter: "Law 11",
    sanskrit: "Learn to Keep People Dependent on You",
    translation: "Power grows when others rely on your skills, knowledge, or resources.\nIf people need you, they are less likely to oppose or replace you. Independence gives freedom, but dependency gives control.",
    steps: ["Develop unique skills others cannot easily replace", "Become a key problem-solver in your environment", "Share help, but not everything", "Avoid making yourself unnecessary", "Stay valuable in critical areas"],
    nuance: "Power lasts when others cannot function without you.",
    locked: false
  },
  {
    id: "law-12",
    chapter: "Law 12",
    sanskrit: "Use Selective Honesty and Generosity to Disarm Your Victim",
    translation: "A small act of honesty builds trust quickly. Unexpected generosity lowers defenses.\nPeople drop their guard when they feel safe and respected.",
    steps: ["Be honest at strategic moments", "Use generosity to create goodwill", "Do not reveal everything at once", "Choose timing carefully", "Let trust work in your favor"],
    nuance: "A little honesty can open many doors.",
    locked: false
  },
  {
    id: "law-13",
    chapter: "Law 13",
    sanskrit: "When Asking for Help, Appeal to People’s Self-Interest",
    translation: "People help more willingly when they see personal benefit. Appeals to kindness fade, but self-interest lasts.\nAlign your request with what they want.",
    steps: ["Understand what motivates the other person", "Frame requests around mutual benefit", "Avoid emotional pressure", "Be clear about outcomes", "Respect their interests"],
    nuance: "Make others win, and they will help you win.",
    locked: false
  },
  {
    id: "law-14",
    chapter: "Law 14",
    sanskrit: "Pose as a Friend, Work as a Spy",
    translation: "People reveal more when they feel safe. By appearing friendly, you gain access to real thoughts and intentions.\nInformation gives you advantage before action begins.",
    steps: ["Build trust through friendliness", "Listen more than you speak", "Observe behavior, not just words", "Keep your intentions private", "Use knowledge wisely, not emotionally"],
    nuance: "Information is quiet power.",
    locked: false
  },
  {
    id: "law-15",
    chapter: "Law 15",
    sanskrit: "Crush Your Enemy Totally",
    translation: "Leaving an enemy partially defeated invites revenge. Unfinished conflicts return stronger. Total resolution removes future threats.",
    steps: ["Address problems completely, not partially", "Do not leave room for retaliation", "Stay firm once action is taken", "Avoid unnecessary mercy in power struggles", "End conflicts decisively"],
    nuance: "Half victories create full enemies.",
    locked: false
  },
  {
    id: "law-16",
    chapter: "Law 16",
    sanskrit: "Use Absence to Increase Respect and Honor",
    translation: "Constant presence reduces value. Absence creates demand and appreciation. Scarcity makes people respect you more.",
    steps: ["Do not always be available", "Step back after strong performance", "Let others feel your absence", "Avoid overexposure", "Return with purpose, not need"],
    nuance: "Scarcity creates value.",
    locked: false
  },
  {
    id: "law-17",
    chapter: "Law 17",
    sanskrit: "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    translation: "Predictability makes you easy to control. Uncertainty keeps others alert and cautious. Unpredictability shifts power in your favor.",
    steps: ["Avoid repeating the same patterns", "Change routines occasionally", "Control emotional reactions", "Keep decisions unexpected", "Stay calm while others guess"],
    nuance: "Uncertainty keeps you untouchable.",
    locked: false
  },
  {
    id: "law-18",
    chapter: "Law 18",
    sanskrit: "Do Not Build Fortresses to Protect Yourself — Isolation Is Dangerous",
    translation: "Isolation cuts you off from information, support, and opportunity. Power comes from connection, not withdrawal.\nThose who isolate themselves become easy targets.",
    steps: ["Stay socially and professionally connected", "Build diverse relationships", "Remain visible and engaged", "Gather information through people", "Avoid emotional withdrawal"],
    nuance: "Connection is protection.",
    locked: false
  },
  {
    id: "law-19",
    chapter: "Law 19",
    sanskrit: "Know Who You’re Dealing With — Do Not Offend the Wrong Person",
    translation: "Not everyone reacts the same way to pressure or disrespect. Some forgive, others never forget. Understanding people prevents costly mistakes.",
    steps: ["Observe personality and background carefully", "Identify egos and sensitivities", "Adjust your approach to each person", "Avoid unnecessary provocation", "Respect power dynamics"],
    nuance: "Misjudgment creates enemies.",
    locked: false
  },
  {
    id: "law-20",
    chapter: "Law 20",
    sanskrit: "Do Not Commit to Anyone",
    translation: "Commitment limits flexibility and power. Independence keeps options open. Those who stay neutral often gain the upper hand.",
    steps: ["Avoid taking permanent sides", "Keep multiple options available", "Let others compete for your support", "Delay final decisions", "Maintain strategic neutrality"],
    nuance: "Freedom of choice is power.",
    locked: false
  },
  {
    id: "law-21",
    chapter: "Law 21",
    sanskrit: "Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
    translation: "Appearing less capable lowers others’ defenses. People reveal more when they feel superior. Deception works best when unnoticed.",
    steps: ["Do not display full intelligence", "Let others underestimate you", "Ask simple questions", "Observe reactions quietly", "Act only when advantage is clear"],
    nuance: "Underestimation is an advantage.",
    locked: false
  },
  {
    id: "law-22",
    chapter: "Law 22",
    sanskrit: "Use the Surrender Tactic: Transform Weakness into Power",
    translation: "When resistance makes you weaker, surrender buys time and control. Appearing weak can lower opposition and create new openings.\nTrue strength lies in choosing when to yield and when to act.",
    steps: ["Step back when direct conflict harms you", "Use patience to regain strength", "Let opponents lower their guard", "Observe and plan during surrender", "Act decisively at the right moment"],
    nuance: "Yielding today can lead to victory tomorrow.",
    locked: false
  },
  {
    id: "law-23",
    chapter: "Law 23",
    sanskrit: "Concentrate Your Forces",
    translation: "Scattered energy weakens impact. Focused effort creates unstoppable momentum. Power grows where attention is concentrated.",
    steps: ["Focus on one goal at a time", "Avoid unnecessary distractions", "Direct resources toward key priorities", "Strengthen core skills", "Eliminate weak commitments"],
    nuance: "Focus multiplies power.",
    locked: false
  },
  {
    id: "law-24",
    chapter: "Law 24",
    sanskrit: "Play the Perfect Courtier",
    translation: "Success depends on navigating people and power gracefully. Tact and charm open doors that force cannot.\nUnderstanding social dynamics protects influence.",
    steps: ["Adapt behavior to the environment", "Control emotions in public", "Flatter subtly, not excessively", "Avoid open conflict", "Learn to read people"],
    nuance: "Grace sustains power.",
    locked: false
  },
  {
    id: "law-25",
    chapter: "Law 25",
    sanskrit: "Re-Create Yourself",
    translation: "Do not let others define who you are. Reinvention keeps you ahead and unpredictable.\nPower belongs to those who shape their own identity.",
    steps: ["Let go of outdated roles", "Design a new personal image", "Learn new skills continuously", "Control how others perceive you", "Evolve with changing situations"],
    nuance: "Reinvention keeps you in control.",
    locked: false
  },
  {
    id: "law-26",
    chapter: "Law 26",
    sanskrit: "Keep Your Hands Clean",
    translation: "Power is weakened when you are directly linked to mistakes or wrongdoing.\nLet others handle unpleasant tasks while you remain respected. A clean image preserves authority and trust.",
    steps: ["Avoid direct involvement in dirty work", "Delegate risky or unpleasant actions", "Protect your public image", "Take credit, not blame", "Stay calm and detached"],
    nuance: "A clean image sustains power.",
    locked: false
  },
  {
    id: "law-27",
    chapter: "Law 27",
    sanskrit: "Play on People’s Need to Believe to Create a Cultlike Following",
    translation: "People crave meaning and belief. A strong vision attracts loyalty and devotion. Belief binds people more than logic.",
    steps: ["Offer a clear and inspiring idea", "Speak with confidence and certainty", "Create simple, repeatable messages", "Build a sense of belonging", "Reinforce belief through symbols and stories"],
    nuance: "Belief creates loyalty.",
    locked: false
  },
  {
    id: "law-28",
    chapter: "Law 28",
    sanskrit: "Enter Action with Boldness",
    translation: "Hesitation invites resistance and doubt. Bold action commands respect and momentum. Confidence makes others follow.",
    steps: ["Act decisively", "Avoid showing uncertainty", "Take calculated risks", "Move quickly when opportunity appears", "Commit fully once action begins"],
    nuance: "Boldness overcomes fear.",
    locked: false
  },
  {
    id: "law-29",
    chapter: "Law 29",
    sanskrit: "Plan All the Way to the End",
    translation: "Many fail by thinking only of the beginning. Clear planning prevents surprises and mistakes.\nSeeing the full path keeps you in control.",
    steps: ["Visualize the final outcome", "Anticipate obstacles early", "Prepare alternatives", "Stay disciplined throughout execution", "Adjust without losing sight of the end"],
    nuance: "Foresight secures success.",
    locked: false
  },
  {
    id: "law-30",
    chapter: "Law 30",
    sanskrit: "Make Your Accomplishments Seem Effortless",
    translation: "When success looks easy, people assume you are naturally powerful and capable.\nStruggle, effort, and hardship reduce the magic of achievement and invite comparison.\nBy hiding the hard work behind your success, you appear confident, superior, and in control.",
    steps: ["Do the hard work privately and present only the final result", "Avoid complaining about difficulties or workload", "Speak calmly about achievements without exaggeration", "Let others discover your success rather than announcing it", "Maintain composure even under pressure"],
    nuance: "Ease creates admiration, struggle invites judgment.",
    locked: false
  },
  {
    id: "law-31",
    chapter: "Law 31",
    sanskrit: "Control the Options — Get Others to Play with the Cards You Deal",
    translation: "People feel powerful when they believe they are choosing freely. By controlling the available options, you guide decisions without force.\nTrue power lies in shaping choices so every outcome benefits you.",
    steps: ["Offer limited options instead of open choices", "Present choices where all outcomes favor you", "Let others feel they decided on their own", "Avoid direct commands; guide indirectly", "Stay flexible while controlling the framework"],
    nuance: "The one who sets the choices controls the result.",
    locked: false
  },
  {
    id: "law-32",
    chapter: "Law 32",
    sanskrit: "Play to People’s Fantasies",
    translation: "Reality is often disappointing; fantasies are comforting and inspiring. People prefer dreams over harsh truths.\nThose who sell hope, vision, and possibility gain loyalty and influence.",
    steps: ["Understand what people desire emotionally", "Present ideas with optimism and imagination", "Avoid focusing only on harsh facts", "Frame opportunities as exciting and meaningful", "Keep the dream alive through words and actions"],
    nuance: "Those who feed dreams gain followers.",
    locked: false
  },
  {
    id: "law-33",
    chapter: "Law 33",
    sanskrit: "Discover Each Man’s Thumbscrew",
    translation: "Everyone has a weakness, desire, fear, or need. Finding it gives you leverage and understanding.\nPower comes from knowing what moves people internally.",
    steps: ["Observe behavior carefully over time", "Listen for repeated desires or complaints", "Identify fears, ambitions, or insecurities", "Be patient and subtle in discovery", "Use knowledge responsibly and strategically"],
    nuance: "Understanding weakness creates silent control.",
    locked: false
  },
  {
    id: "law-34",
    chapter: "Law 34",
    sanskrit: "Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One",
    translation: "People treat you according to how you treat yourself. Confidence, self-respect, and dignity signal authority without words.\nIf you appear unsure or small, others will reflect that back to you.\nPower begins with inner belief expressed through calm behavior.",
    steps: ["Carry yourself with confidence, not arrogance", "Set boundaries and enforce them calmly", "Value your time and energy", "Speak and act with self-respect", "Never beg for attention or approval"],
    nuance: "Self-respect commands respect.",
    locked: false
  },
  {
    id: "law-35",
    chapter: "Law 35",
    sanskrit: "Master the Art of Timing",
    translation: "The right action at the wrong time fails. Patience allows situations to reveal themselves fully. Those who rush lose control;\nthose who wait gain advantage.",
    steps: ["Observe before acting", "Wait for emotions to cool", "Recognize moments of weakness or opportunity", "Do not force outcomes", "Act decisively when timing is right"],
    nuance: "Timing turns effort into success.",
    locked: false
  },
  {
    id: "law-36",
    chapter: "Law 36",
    sanskrit: "Disdain Things You Cannot Have — Ignoring Them Is the Best Revenge",
    translation: "Showing desire gives others power over you. Indifference weakens what you cannot control.\nIgnoring denies others the satisfaction of your reaction.",
    steps: ["Do not react emotionally to loss", "Redirect focus to what you can control", "Avoid chasing unavailable people or things", "Maintain emotional discipline", "Let silence speak"],
    nuance: "Indifference removes their power.",
    locked: false
  },
  {
    id: "law-37",
    chapter: "Law 37",
    sanskrit: "Create Compelling Spectacles",
    translation: "Humans respond strongly to visuals and drama. Memorable actions leave deeper impact than logic. Well-crafted moments build authority and attention.",
    steps: ["Present ideas visually when possible", "Use symbolism and storytelling", "Make key moments memorable", "Avoid dull or routine presentation", "Stand out with intention"],
    nuance: "What is seen is remembered.",
    locked: false
  },
  {
    id: "law-38",
    chapter: "Law 38",
    sanskrit: "Think as You Like but Behave Like Others",
    translation: "Standing out mentally is powerful; standing out socially can be dangerous. Too much difference attracts resistance.\nBlend in outwardly while thinking independently.",
    steps: ["Respect social norms publicly", "Keep unconventional ideas private", "Observe before expressing opinions", "Avoid unnecessary confrontation", "Choose carefully when to stand apart"],
    nuance: "Blend in to survive, think freely to rise.",
    locked: false
  },
  {
    id: "law-39",
    chapter: "Law 39",
    sanskrit: "Stir Up Waters to Catch Fish",
    translation: "Emotional reactions reveal weaknesses. Calm opponents think clearly; emotional ones make mistakes. Controlled disruption gives advantage.",
    steps: ["Stay calm while others react", "Apply pressure subtly", "Use silence or ambiguity strategically", "Watch reactions closely", "Act when imbalance appears"],
    nuance: "Emotion clouds judgment.",
    locked: false
  },
  {
    id: "law-40",
    chapter: "Law 40",
    sanskrit: "Despise the Free Lunch",
    translation: "What comes free often comes with hidden cost. Dependence weakens independence. Paying your way preserves freedom and respect.",
    steps: ["Be cautious of favors", "Understand hidden obligations", "Maintain self-reliance", "Pay fairly for value", "Avoid long-term dependence"],
    nuance: "Freedom has a price worth paying.",
    locked: false
  },
  {
    id: "law-41",
    chapter: "Law 41",
    sanskrit: "Avoid Stepping into a Great Man’s Shoes",
    translation: "Comparison invites failure. Following legends limits originality. Create your own identity and path.",
    steps: ["Respect predecessors without copying them", "Define your own style", "Avoid constant comparison", "Innovate rather than imitate", "Build your own legacy"],
    nuance: "Originality creates authority.",
    locked: false
  },
  {
    id: "law-42",
    chapter: "Law 42",
    sanskrit: "Strike the Shepherd and the Sheep Will Scatter",
    translation: "Groups draw strength from leaders. Removing the source of direction dissolves resistance. Power shifts when leadership collapses.",
    steps: ["Identify key influencers", "Focus efforts on leadership, not followers", "Reduce their credibility calmly", "Act strategically, not emotionally", "Let structure fall naturally"],
    nuance: "Remove the head, and control follows.",
    locked: false
  },
  {
    id: "law-43",
    chapter: "Law 43",
    sanskrit: "Work on the Hearts and Minds of Others",
    translation: "Force creates resistance; persuasion creates loyalty. Emotions drive decisions more than logic. Influence lasts longer than control.",
    steps: ["Understand emotional needs", "Show empathy strategically", "Align goals with their interests", "Communicate respectfully", "Build trust before action"],
    nuance: "Hearts won last longer than battles won.",
    locked: false
  },
  {
    id: "law-44",
    chapter: "Law 44",
    sanskrit: "Disarm and Infuriate with the Mirror Effect",
    translation: "Mirroring exposes behavior without confrontation. People become uncomfortable when faced with themselves. Reflection weakens manipulation.",
    steps: ["Reflect behavior calmly", "Avoid emotional reaction", "Let others see their actions", "Stay neutral and composed", "Use silence as a mirror"],
    nuance: "Reflection reveals truth.",
    locked: false
  },
  {
    id: "law-45",
    chapter: "Law 45",
    sanskrit: "Preach the Need for Change, but Never Reform Too Much at Once",
    translation: "Sudden change creates fear and resistance. Gradual change feels safe and acceptable. People accept what they can adjust to slowly.",
    steps: ["Introduce change step by step", "Respect traditions initially", "Gain trust before reform", "Avoid shocking systems", "Let people adapt naturally"],
    nuance: "Slow change lasts.",
    locked: false
  },
  {
    id: "law-46",
    chapter: "Law 46",
    sanskrit: "Never Appear Too Perfect",
    translation: "Perfection invites envy and hostility. Small flaws humanize you. Approachability protects influence.",
    steps: ["Show controlled imperfections", "Avoid constant superiority", "Share minor struggles selectively", "Let others shine sometimes", "Stay humble publicly"],
    nuance: "Humanity protects power.",
    locked: false
  },
  {
    id: "law-47",
    chapter: "Law 47",
    sanskrit: "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    translation: "Overreaching destroys success. Knowing when to stop preserves gains. Excess creates downfall.",
    steps: ["Define clear limits", "Stop once the goal is achieved", "Avoid unnecessary dominance", "Consolidate success", "Leave room for stability"],
    nuance: "Control includes knowing when to stop.",
    locked: false
  },
  {
    id: "law-48",
    chapter: "Law 48",
    sanskrit: "Assume Formlessness",
    translation: "Rigid structures break under pressure. Flexibility adapts and survives. Power flows where form does not trap it.",
    steps: ["Stay adaptable to change", "Avoid fixed identities", "Adjust strategy as situations shift", "Remain unpredictable", "Flow rather than resist"],
    nuance: "Flexibility is ultimate power.",
    locked: false
  }
];

// === 4. REAL GITA DATA ===
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
    id: 'ego',
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
    id: 'fear',
    chapter: "Chapter 6, Shloka 15",
    sanskrit: "शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।",
    translation: "Shloka Insight:\n• Fear and anxiety arise when the mind lives in the future.\n• Constant worry disturbs inner peace and balance.\n• A calm and centered mind naturally feels safe and steady.\n\nGita Solution:\n• Fear grows from imagining outcomes, not from the present moment.\n• Returning attention to the present restores clarity and calm.",
    nuance: "“Stay rooted in the present — peace replaces fear.”",
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

// === 5. MOOD MAPPINGS ===

// NEW: 48 Laws Moods
export const POWER_MOODS = [
  { id: 'ignored', label: 'Being Ignored', icon: '👻', shlokaId: 'law-6', type: 'power' },
  { id: 'outshined', label: 'Feeling Outshined', icon: '🌟', shlokaId: 'law-1', type: 'power' },
  { id: 'trust_issues', label: 'Trust Issues', icon: '🤝', shlokaId: 'law-2', type: 'power' },
  { id: 'talk_too_much', label: 'Talked Too Much', icon: '🤐', shlokaId: 'law-4', type: 'power' },
  { id: 'reputation', label: 'Reputation Risk', icon: '🛡️', shlokaId: 'law-5', type: 'power' },
  { id: 'asking_help', label: 'Asking for Help', icon: '🆘', shlokaId: 'law-13', type: 'power' },
  { id: 'rivalry', label: 'Dealing with Rivals', icon: '⚔️', shlokaId: 'law-15', type: 'power' },
  { id: 'weak', label: 'Feeling Weak', icon: '🏳️', shlokaId: 'law-22', type: 'power' },
  { id: 'overwhelmed', label: 'Overwhelmed', icon: '🎯', shlokaId: 'law-23', type: 'power' },
  { id: 'stuck_habit', label: 'Stuck in Habit', icon: '🔄', shlokaId: 'law-45', type: 'power' },
  { id: 'angry_conflict', label: 'Angry/Conflict', icon: '🤬', shlokaId: 'law-39', type: 'power' },
  { id: 'waiting', label: 'Impatient', icon: '⏳', shlokaId: 'law-35', type: 'power' },
  { id: 'manipulated', label: 'Manipulated', icon: '🎭', shlokaId: 'law-44', type: 'power' },
  { id: 'boss_issues', label: 'Boss Issues', icon: '👔', shlokaId: 'law-1', type: 'power' }
];

// GITA Moods
export const GITA_EMOTIONS = [
  { id: 'anger', label: 'Anger', icon: '🔥', shlokaId: 'anger', type: 'gita' },
  { id: 'fear', label: 'Fear', icon: '😨', shlokaId: 'fear', type: 'gita' },
  { id: 'ego', label: 'Ego', icon: '🦁', shlokaId: 'ego', type: 'gita' },
  { id: 'desire', label: 'Power of Desire', icon: '🍷', shlokaId: 'desire', type: 'gita' },
  { id: 'depression', label: 'Depression', icon: '🌧️', shlokaId: 'depression', type: 'gita' },
  { id: 'jealousy', label: 'Jealousy', icon: '🐍', shlokaId: 'jealousy', type: 'gita' },
  { id: 'doubt', label: 'Self-Doubt', icon: '🤔', shlokaId: 'self_doubt', type: 'gita' },
  { id: 'attachment', label: 'Attachment', icon: '🔗', shlokaId: 'attachment', type: 'gita' },
  { id: 'forgive', label: 'Inability to Forgive', icon: '🤲', shlokaId: 'forgive', type: 'gita' },
  { id: 'discipline', label: 'Lack of Discipline', icon: '🥋', shlokaId: 'discipline', type: 'gita' },
  { id: 'anxiety', label: 'Fear & Anxiety', icon: '😰', shlokaId: 'anxiety', type: 'gita' },
  { id: 'confusion', label: 'Confusion', icon: '🌀', shlokaId: 'confusion', type: 'gita' },
  { id: 'overthinking', label: 'Overthinking', icon: '🧠', shlokaId: 'overthinking', type: 'gita' },
  { id: 'motivation', label: 'No Motivation', icon: '🔋', shlokaId: 'motivation', type: 'gita' },
  { id: 'lonely', label: 'Feeling Lonely', icon: '🌑', shlokaId: 'lonely', type: 'gita' },
  { id: 'control_mind', label: 'Control Mind', icon: '🧘', shlokaId: 'control_mind', type: 'gita' },
  { id: 'fear_failure', label: 'Fear of Failure', icon: '📉', shlokaId: 'fear_failure', type: 'gita' },
  { id: 'attach_result', label: 'Attach to Result', icon: '🎁', shlokaId: 'attach_result', type: 'gita' },
  { id: 'work_stress', label: 'Work Stress', icon: '💼', shlokaId: 'work_stress', type: 'gita' },
  { id: 'loss', label: 'Business Loss', icon: '💸', shlokaId: 'loss', type: 'gita' },
  { id: 'giving_up', label: 'Giving Up', icon: '🏳️', shlokaId: 'giving_up', type: 'gita' },
  { id: 'expectations', label: 'Expectations', icon: '🎭', shlokaId: 'expectations', type: 'gita' },
  { id: 'betrayal', label: 'Betrayal', icon: '💔', shlokaId: 'betrayal', type: 'gita' },
  { id: 'surrender', label: 'Surrender', icon: '🙏', shlokaId: 'surrender', type: 'gita' },
  { id: 'fear_future', label: 'Fear of Future', icon: '🔮', shlokaId: 'fear_future', type: 'gita' },
  { id: 'insecure', label: 'Insecure', icon: '🛡️', shlokaId: 'insecure', type: 'gita' },
  { id: 'suffering', label: 'Suffering', icon: '🩹', shlokaId: 'suffering', type: 'gita' },
  { id: 'judgement', label: 'Fear of Judgment', icon: '👀', shlokaId: 'judgement', type: 'gita' },
  { id: 'stuck', label: 'Feeling Stuck', icon: '⚓', shlokaId: 'stuck', type: 'gita' },
];

// === 6. EXPORTS ===
export const ALL_EMOTIONS = [...GITA_EMOTIONS, ...POWER_MOODS];

export const SHLOKAS = {
  gita: GITA_DATA, 
  '48laws': POWER_LAWS_DATA, 
  yogasutra: generateShlokas(20, 'YS'),
  upanishads: generateShlokas(22, 'UP'),
};

MOCK_BOOKS.forEach(book => {
  SHLOKAS[book.id] = generateShlokas(25, `VOL-${book.id}`);
});

export const BOOK_CONTENT = {
    'gita': GITA_DATA,
    '48laws': POWER_LAWS_DATA,
    'yogasutra': generateShlokas(20, 'YS'),
    'upanishads': generateShlokas(22, 'UP'),
};