// Helper to generate mock shlokas for other books
const generateShlokas = (count, prefix) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    chapter: `Chapter ${prefix}`, 
    sanskrit: i === 0 
      ? "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।" 
      : `अध्याय ${prefix} श्लोक ${i + 1} - (Sanskrit Text Placeholder)`,
    
    // English
    translation: i === 0
      ? "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action."
      : `This is the hidden wisdom of Verse ${i + 1}. Swipe to reveal the divine meaning.`,
    
    // Hindi Placeholder
    translation_hi: i === 0
        ? "तुम्हें अपना कर्तव्य करने का अधिकार है, लेकिन कर्म के फलों पर तुम्हारा अधिकार नहीं है।"
        : `यह श्लोक ${i + 1} का छिपा हुआ ज्ञान है। दिव्य अर्थ जानने के लिए स्वाइप करें।`,

    // Marathi Placeholder
    translation_mr: i === 0
        ? "तुला तुझे विहित कर्तव्य करण्याचा अधिकार आहे, परंतु कर्माच्या फळावर तुझा अधिकार नाही."
        : `हे श्लोक ${i + 1} चे लपलेले ज्ञान आहे. दैवी अर्थ उघड करण्यासाठी स्वाइप करा.`,

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

// === 3. 48 LAWS OF POWER DATA (Complete with Translations) ===
const POWER_LAWS_DATA = [
  {
    id: "law-1",
    chapter: "Law 1",
    sanskrit: "Never Outshine the Master",
    translation: "When you appear smarter, more talented, or more powerful than those above you, their ego feels threatened.\nInstead of rewarding you, they may resist or block your growth.\nReal power comes from making superiors feel secure while you improve silently.",
    translation_hi: "जब आप अपने से ऊपर बैठे लोगों से अधिक बुद्धिमान या प्रतिभाशाली दिखते हैं, तो उनका अहंकार खतरे में पड़ जाता है।\nवे आपको पुरस्कृत करने के बजाय आपकी प्रगति को रोक सकते हैं।\nअसली शक्ति इसमें है कि आप अपने वरिष्ठों को सुरक्षित महसूस कराएं और चुपचाप अपनी उन्नति करें।",
    translation_mr: "जेव्हा तुम्ही तुमच्या वरिष्ठांपेक्षा अधिक हुशार किंवा प्रतिभावान दिसता, तेव्हा त्यांचा अहंकार दुखावला जातो.\nते तुम्हाला बक्षीस देण्याऐवजी तुमचा मार्ग अडवू शकतात.\nखरी शक्ती वरिष्ठांना सुरक्षित वाटू देण्यात आणि शांतपणे स्वतःची प्रगती करण्यात आहे.",
    steps: ["Respect hierarchy before displaying talent", "Share success and give credit generously", "Avoid public correction or comparison", "Display excellence subtly, not loudly", "Grow patiently while staying humble"],
    nuance: "Control your brilliance today, so you can rise freely tomorrow.",
    locked: false
  },
  {
    id: "law-2",
    chapter: "Law 2",
    sanskrit: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    translation: "Friends may act from emotion, jealousy, or familiarity, which can lead to betrayal or disappointment.\nEnemies, however, are more predictable because they must prove their loyalty if they align with you.\nWise people stay emotionally balanced and judge others by actions, not closeness.",
    translation_hi: "मित्र भावनाओं या ईर्ष्या के कारण आपको धोखा दे सकते हैं।\nदुश्मन अधिक भरोसेमंद होते हैं क्योंकि उन्हें अपनी वफादारी साबित करनी होती है।\nबुद्धिमान लोग दूसरों को उनकी नजदीकी से नहीं, बल्कि उनके कर्मों से परखते हैं।",
    translation_mr: "मित्र भावना किंवा मत्सरापोटी धोका देऊ शकतात.\nशत्रू अधिक विश्वासार्ह असू शकतात कारण त्यांना स्वतःला सिद्ध करायचे असते.\nशहाणे लोक इतरांना त्यांच्या जवळीकीवरून नाही तर त्यांच्या कर्मावरून पारखतात.",
    steps: ["Do not share all plans, even with close friends", "Observe actions more than words or promises", "Keep professional distance in important matters", "Use rivalry to understand weaknesses and strengths", "Stay calm and objective in relationships"],
    nuance: "Trust actions, not labels, and power will remain in your hands.",
    locked: false
  },
  {
    id: "law-3",
    chapter: "Law 3",
    sanskrit: "Conceal Your Intentions",
    translation: "When people know your true plans, they can prepare, resist, or sabotage you.\nBy keeping intentions hidden, you stay unpredictable and in control.\nSilence and ambiguity protect your goals until the right moment arrives.",
    translation_hi: "जब लोगों को आपकी योजनाओं का पता चलता है, तो वे आपके खिलाफ तैयारी कर सकते हैं।\nअपने इरादों को छिपाकर रखने से आप नियंत्रण में रहते हैं।\nसही समय आने तक मौन और अस्पष्टता आपके लक्ष्यों की रक्षा करती है।",
    translation_mr: "जेव्हा लोकांना तुमच्या योजना समजतात, तेव्हा ते तुमच्या विरोधात तयारी करू शकतात.\nतुमचे उद्देश लपवून ठेवल्याने तुम्ही अनपेक्षित राहता आणि नियंत्रण ठेवता.\nयोग्य वेळ येईपर्यंत शांतता आणि संदिग्धता तुमच्या ध्येयांचे रक्षण करते.",
    steps: ["Share goals only with those who truly need to know", "Speak generally, not specifically, about future plans", "Let actions reveal outcomes, not intentions", "Avoid emotional oversharing", "Move decisively when the time is right"],
    nuance: "Power grows strongest when your next move remains unseen.",
    locked: false
  },
  {
    id: "law-4",
    chapter: "Law 4",
    sanskrit: "Always Say Less Than Necessary",
    translation: "Speaking more than required weakens your authority and exposes your thinking.\nThe more you talk, the more control you give away.\nSilence creates mystery, confidence, and respect, making others value your words more.",
    translation_hi: "जरूरत से ज्यादा बोलना आपके अधिकार को कमजोर करता है।\nआप जितना अधिक बोलते हैं, उतना ही नियंत्रण खो देते हैं।\nमौन रहस्य और सम्मान पैदा करता है, जिससे लोग आपके शब्दों को अधिक महत्व देते हैं।",
    translation_mr: "गरजेपेक्षा जास्त बोलणे तुमचा अधिकार कमी करते.\nतुम्ही जितके जास्त बोलता, तितके तुमचे नियंत्रण कमी होते.\nशांतता रहस्य आणि आदर निर्माण करते, ज्यामुळे लोक तुमच्या शब्दांना जास्त किंमत देतात.",
    steps: ["Speak only when your words have purpose", "Avoid over-explaining or justifying yourself", "Pause before responding to maintain control", "Keep emotions out of conversations", "Let silence create pressure, not fear"],
    nuance: "Silence turns restraint into power.",
    locked: false
  },
  {
    id: "law-5",
    chapter: "Law 5",
    sanskrit: "So Much Depends on Reputation — Guard It with Your Life",
    translation: "Reputation shapes how people judge you before you act or speak. A strong reputation builds trust and influence automatically.\nOnce damaged, reputation is difficult to restore and easy to exploit.",
    translation_hi: "प्रतिष्ठा तय करती है कि लोग आपको कैसे आंकते हैं। एक मजबूत प्रतिष्ठा अपने आप विश्वास और प्रभाव बनाती है।\nएक बार खराब होने पर, प्रतिष्ठा को बहाल करना बहुत मुश्किल होता है।",
    translation_mr: "तुमची प्रतिष्ठा ठरवते की लोक तुमच्याबद्दल काय विचार करतात. चांगली प्रतिष्ठा आपोआप विश्वास आणि प्रभाव निर्माण करते.\nएकदा खराब झाली की, प्रतिष्ठा परत मिळवणे खूप कठीण असते.",
    steps: ["Act consistently in all situations", "Avoid gossip and unnecessary conflicts", "Respond quickly to false accusations", "Align with people who strengthen your image", "Let your results reinforce your name"],
    nuance: "Protect your reputation, and it will protect your power.",
    locked: false
  },
  {
    id: "law-6",
    chapter: "Law 6",
    sanskrit: "Court Attention at All Costs",
    translation: "Being ignored makes you powerless. Attention creates presence, influence, and opportunity. It is better to be noticed than forgotten.",
    translation_hi: "अनदेखा किया जाना आपको शक्तिहीन बनाता है। ध्यान आकर्षित करना प्रभाव और अवसर पैदा करता है। भुला दिए जाने से बेहतर है कि लोग आपको नोटिस करें।",
    translation_mr: "दुर्लक्षित राहणे तुम्हाला शक्तीहीन बनवते. लोकांचे लक्ष वेधून घेणे प्रभाव आणि संधी निर्माण करते. विसरले जाण्यापेक्षा चर्चेत राहणे केव्हाही चांगले.",
    steps: ["Make your work visible, not just correct", "Develop a recognizable style or voice", "Speak at moments that matter", "Use storytelling to attract interest", "Stay active where decisions are made"],
    nuance: "Visibility creates power.",
    locked: false
  },
  {
    id: "law-7",
    chapter: "Law 7",
    sanskrit: "Get Others to Do the Work for You, but Always Take the Credit",
    translation: "Using the efforts of others saves time and multiplies your strength. People respect results, not the process behind them.\nSmart leaders delegate wisely and own the outcome.",
    translation_hi: "दूसरों के प्रयासों का उपयोग करने से समय बचता है और आपकी शक्ति बढ़ती है। लोग परिणामों का सम्मान करते हैं, प्रक्रिया का नहीं।\nबुद्धिमान नेता काम सौंपते हैं और परिणाम का श्रेय लेते हैं।",
    translation_mr: "इतरांच्या मेहनतीचा वापर केल्याने वेळ वाचतो आणि तुमची ताकद वाढते. लोक निकालाचा आदर करतात, प्रक्रियेचा नाही.\nहुशार नेते कामे सोपवतात आणि निकालाचे श्रेय घेतात.",
    steps: ["Delegate tasks based on others’ strengths", "Focus your energy on strategy, not execution", "Reward contributors privately", "Present outcomes confidently as a leader", "Build a reputation for delivering results"],
    nuance: "Leadership is measured by results, not effort.",
    locked: false
  },
  {
    id: "law-8",
    chapter: "Law 8",
    sanskrit: "Make Other People Come to You — Use Bait if Necessary",
    translation: "When you chase others, you give away control. Power shifts to you when people seek your attention.\nBy offering value or opportunity, you draw others into your terms.",
    translation_hi: "जब आप दूसरों के पीछे भागते हैं, तो आप नियंत्रण खो देते हैं। जब लोग आपके पास आते हैं तो शक्ति आपके पास होती है।\nलालच या अवसर देकर दूसरों को अपनी शर्तों पर लाएं।",
    translation_mr: "जेव्हा तुम्ही इतरांच्या मागे धावता, तेव्हा तुम्ही नियंत्रण गमावता. जेव्हा लोक तुमच्याकडे येतात तेव्हा शक्ती तुमच्या हातात असते.\nफायदा किंवा संधी देऊन इतरांना तुमच्या अटींवर आणा.",
    steps: ["Create something others want or need", "Let opportunities attract people to you", "Avoid chasing approval or validation", "Stay calm and patient in negotiations", "Set conditions only after interest is shown"],
    nuance: "The one who controls attraction controls the situation.",
    locked: false
  },
  {
    id: "law-9",
    chapter: "Law 9",
    sanskrit: "Win Through Your Actions, Never Through Argument",
    translation: "Arguments rarely change minds and often create enemies. Actions speak louder and leave no room for denial.\nResults silence opposition more effectively than words.",
    translation_hi: "बहस शायद ही कभी किसी का मन बदलती है और अक्सर दुश्मन पैदा करती है। कार्य शब्दों से अधिक जोर से बोलते हैं।\nपरिणाम विरोध को शब्दों से अधिक प्रभावी ढंग से शांत करते हैं।",
    translation_mr: "वादविवाद क्वचितच कोणाचे मत बदलतात आणि अनेकदा शत्रू निर्माण करतात. कृती शब्दांपेक्षा जास्त प्रभावी असते.\nतुमचे निकाल विरोधकांना शब्दांपेक्षा जास्त चांगल्या प्रकारे शांत करतात.",
    steps: ["Prove your point through results", "Avoid wasting energy on debates", "Let success answer criticism", "Stay composed under challenge", "Act decisively instead of explaining"],
    nuance: "Results end arguments.",
    locked: false
  },
  {
    id: "law-10",
    chapter: "Law 10",
    sanskrit: "Infection: Avoid the Unhappy and Unlucky",
    translation: "Emotions and attitudes are contagious. Constant exposure to negativity drains energy and luck. Distance from such people protects your progress.",
    translation_hi: "भावनाएं संक्रामक होती हैं। नकारात्मकता के लगातार संपर्क में रहने से ऊर्जा और भाग्य दोनों खत्म हो जाते हैं। ऐसे लोगों से दूरी आपकी प्रगति की रक्षा करती है।",
    translation_mr: "भावना संसर्गजन्य असतात. सतत नकारात्मकतेच्या संपर्कात राहिल्याने ऊर्जा आणि नशीब दोन्ही कमी होते. अशा लोकांपासून दूर राहणे तुमच्या प्रगतीसाठी चांगले आहे.",
    steps: ["Limit time with negative individuals", "Choose environments that encourage growth", "Do not try to rescue those who resist change", "Protect your mental and emotional space", "Surround yourself with positive, driven people"],
    nuance: "Protect your energy to protect your future.",
    locked: false
  },
  {
    id: "law-11",
    chapter: "Law 11",
    sanskrit: "Learn to Keep People Dependent on You",
    translation: "Power grows when others rely on your skills, knowledge, or resources.\nIf people need you, they are less likely to oppose or replace you. Independence gives freedom, but dependency gives control.",
    translation_hi: "शक्ति तब बढ़ती है जब दूसरे आपके कौशल या संसाधनों पर निर्भर होते हैं।\nयदि लोगों को आपकी आवश्यकता है, तो वे आपका विरोध नहीं करेंगे। स्वतंत्रता आजादी देती है, लेकिन निर्भरता नियंत्रण देती है।",
    translation_mr: "जेव्हा लोक तुमच्या कौशल्यावर किंवा संसाधनांवर अवलंबून असतात तेव्हा तुमची शक्ती वाढते.\nजर लोकांना तुमची गरज असेल, तर ते तुमचा विरोध करणार नाहीत. स्वातंत्र्यामुळे मुक्ती मिळते, पण अवलंबित्वामुळे नियंत्रण मिळते.",
    steps: ["Develop unique skills others cannot easily replace", "Become a key problem-solver in your environment", "Share help, but not everything", "Avoid making yourself unnecessary", "Stay valuable in critical areas"],
    nuance: "Power lasts when others cannot function without you.",
    locked: false
  },
  {
    id: "law-12",
    chapter: "Law 12",
    sanskrit: "Use Selective Honesty and Generosity to Disarm Your Victim",
    translation: "A small act of honesty builds trust quickly. Unexpected generosity lowers defenses.\nPeople drop their guard when they feel safe and respected.",
    translation_hi: "ईमानदारी का एक छोटा सा कार्य तेजी से विश्वास बनाता है। अप्रत्याशित उदारता दूसरों के बचाव को कम कर देती है।\nजब लोग सुरक्षित महसूस करते हैं तो वे अपनी सुरक्षा हटा लेते हैं।",
    translation_mr: "प्रामाणिकपणाची एक छोटी कृती त्वरित विश्वास निर्माण करते. अनपेक्षित उदारता समोरच्याचा बचाव कमी करते.\nजेव्हा लोकांना सुरक्षित वाटते तेव्हा ते सावधगिरी बाळगणे सोडून देतात.",
    steps: ["Be honest at strategic moments", "Use generosity to create goodwill", "Do not reveal everything at once", "Choose timing carefully", "Let trust work in your favor"],
    nuance: "A little honesty can open many doors.",
    locked: false
  },
  {
    id: "law-13",
    chapter: "Law 13",
    sanskrit: "When Asking for Help, Appeal to People’s Self-Interest",
    translation: "People help more willingly when they see personal benefit. Appeals to kindness fade, but self-interest lasts.\nAlign your request with what they want.",
    translation_hi: "लोग तब मदद करते हैं जब उन्हें अपना लाभ दिखता है। दया की अपील काम नहीं करती, लेकिन स्वार्थ हमेशा काम करता है।\nअपने अनुरोध को उनके लाभ के साथ जोड़ें।",
    translation_mr: "जेव्हा लोकांना स्वतःचा फायदा दिसतो तेव्हा ते मदत करण्यास तयार असतात. दया काम करत नाही, पण स्वार्थ नेहमी काम करतो.\nतुमची विनंती त्यांच्या फायद्याशी जोडा.",
    steps: ["Understand what motivates the other person", "Frame requests around mutual benefit", "Avoid emotional pressure", "Be clear about outcomes", "Respect their interests"],
    nuance: "Make others win, and they will help you win.",
    locked: false
  },
  {
    id: "law-14",
    chapter: "Law 14",
    sanskrit: "Pose as a Friend, Work as a Spy",
    translation: "People reveal more when they feel safe. By appearing friendly, you gain access to real thoughts and intentions.\nInformation gives you advantage before action begins.",
    translation_hi: "जब लोग सुरक्षित महसूस करते हैं तो वे अधिक जानकारी देते हैं। मित्र बनकर, आप उनके असली इरादों को जान सकते हैं।\nजानकारी आपको कार्रवाई शुरू होने से पहले ही लाभ देती है।",
    translation_mr: "जेव्हा लोकांना सुरक्षित वाटते तेव्हा ते गुपिते उघड करतात. मित्र बनून राहिल्याने तुम्हाला त्यांचे खरे हेतू समजतात.\nमाहिती तुम्हाला कृती करण्यापूर्वीच फायद्यात ठेवते.",
    steps: ["Build trust through friendliness", "Listen more than you speak", "Observe behavior, not just words", "Keep your intentions private", "Use knowledge wisely, not emotionally"],
    nuance: "Information is quiet power.",
    locked: false
  },
  {
    id: "law-15",
    chapter: "Law 15",
    sanskrit: "Crush Your Enemy Totally",
    translation: "Leaving an enemy partially defeated invites revenge. Unfinished conflicts return stronger. Total resolution removes future threats.",
    translation_hi: "दुश्मन को आधा हराना बदले को आमंत्रित करता है। अधूरे संघर्ष फिर से मजबूत होकर लौटते हैं।\nखतरे को पूरी तरह से मिटाना ही भविष्य को सुरक्षित करता है।",
    translation_mr: "शत्रूला अर्धे हरवणे म्हणजे बदला घेण्यास आमंत्रण देणे होय. अपूर्ण संघर्ष पुन्हा उफाळून येतात.\nभविष्यातील धोका टाळण्यासाठी शत्रूला पूर्णपणे संपवणे आवश्यक आहे.",
    steps: ["Address problems completely, not partially", "Do not leave room for retaliation", "Stay firm once action is taken", "Avoid unnecessary mercy in power struggles", "End conflicts decisively"],
    nuance: "Half victories create full enemies.",
    locked: false
  },
  {
    id: "law-16",
    chapter: "Law 16",
    sanskrit: "Use Absence to Increase Respect and Honor",
    translation: "Constant presence reduces value. Absence creates demand and appreciation. Scarcity makes people respect you more.",
    translation_hi: "लगातार उपस्थिति आपके मूल्य को कम करती है। अनुपस्थिति मांग और प्रशंसा पैदा करती है।\nकमी लोगों को आपका अधिक सम्मान करने पर मजबूर करती है।",
    translation_mr: "सतत उपलब्ध राहिल्याने तुमची किंमत कमी होते. अनुपस्थितीमुळे तुमची मागणी आणि आदर वाढतो.\nलोकांना तुमची कमतरता जाणवू द्या, ते तुमचा जास्त आदर करतील.",
    steps: ["Do not always be available", "Step back after strong performance", "Let others feel your absence", "Avoid overexposure", "Return with purpose, not need"],
    nuance: "Scarcity creates value.",
    locked: false
  },
  {
    id: "law-17",
    chapter: "Law 17",
    sanskrit: "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    translation: "Predictability makes you easy to control. Uncertainty keeps others alert and cautious. Unpredictability shifts power in your favor.",
    translation_hi: "भविष्यवाणी करने योग्य होना आपको नियंत्रित करना आसान बनाता है। अनिश्चितता दूसरों को सतर्क रखती है।\nअप्रत्याशित व्यवहार शक्ति को आपके पक्ष में कर देता है।",
    translation_mr: "जर तुमचे वागणे अंदाजित असेल तर तुम्हाला नियंत्रित करणे सोपे असते. अनिश्चितता समोरच्याला सावध ठेवते.\nअनपेक्षित वागण्यामुळे नियंत्रण तुमच्या हातात राहते.",
    steps: ["Avoid repeating the same patterns", "Change routines occasionally", "Control emotional reactions", "Keep decisions unexpected", "Stay calm while others guess"],
    nuance: "Uncertainty keeps you untouchable.",
    locked: false
  },
  {
    id: "law-18",
    chapter: "Law 18",
    sanskrit: "Do Not Build Fortresses to Protect Yourself — Isolation Is Dangerous",
    translation: "Isolation cuts you off from information, support, and opportunity. Power comes from connection, not withdrawal.\nThose who isolate themselves become easy targets.",
    translation_hi: "अलगाव आपको जानकारी और समर्थन से काट देता है। शक्ति संपर्क से आती है, पीछे हटने से नहीं।\nजो खुद को अलग-थलग कर लेते हैं, वे आसान शिकार बन जाते हैं।",
    translation_mr: "एकाकी राहिल्याने तुमचा माहिती आणि आधाराशी संपर्क तुटतो. शक्ती लोकांशी जोडलेले राहण्यात आहे.\nजे स्वतःला वेगळे करतात, ते सहज लक्ष्य बनतात.",
    steps: ["Stay socially and professionally connected", "Build diverse relationships", "Remain visible and engaged", "Gather information through people", "Avoid emotional withdrawal"],
    nuance: "Connection is protection.",
    locked: false
  },
  {
    id: "law-19",
    chapter: "Law 19",
    sanskrit: "Know Who You’re Dealing With — Do Not Offend the Wrong Person",
    translation: "Not everyone reacts the same way to pressure or disrespect. Some forgive, others never forget. Understanding people prevents costly mistakes.",
    translation_hi: "हर कोई दबाव या अपमान पर एक जैसा व्यवहार नहीं करता। कुछ लोग माफ कर देते हैं, कुछ कभी नहीं भूलते।\nलोगों को समझना आपको महंगी गलतियों से बचाता है।",
    translation_mr: "प्रत्येकजण दबावाला किंवा अपमानाला सारखा प्रतिसाद देत नाही. काही माफ करतात, तर काही कधीच विसरत नाहीत.\nलोकांना ओळखणे तुम्हाला मोठ्या चुकांपासून वाचवते.",
    steps: ["Observe personality and background carefully", "Identify egos and sensitivities", "Adjust your approach to each person", "Avoid unnecessary provocation", "Respect power dynamics"],
    nuance: "Misjudgment creates enemies.",
    locked: false
  },
  {
    id: "law-20",
    chapter: "Law 20",
    sanskrit: "Do Not Commit to Anyone",
    translation: "Commitment limits flexibility and power. Independence keeps options open. Those who stay neutral often gain the upper hand.",
    translation_hi: "प्रतिबद्धता आपकी शक्ति को सीमित करती है। स्वतंत्रता विकल्प खुले रखती है।\nजो लोग निष्पक्ष रहते हैं, वे अक्सर लाभ की स्थिति में होते हैं।",
    translation_mr: "वचनबद्धता तुमची लवचिकता कमी करते. स्वातंत्र्य तुमचे पर्याय खुले ठेवते.\nजे लोक तटस्थ राहतात, ते नेहमी फायद्यात असतात.",
    steps: ["Avoid taking permanent sides", "Keep multiple options available", "Let others compete for your support", "Delay final decisions", "Maintain strategic neutrality"],
    nuance: "Freedom of choice is power.",
    locked: false
  },
  {
    id: "law-21",
    chapter: "Law 21",
    sanskrit: "Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
    translation: "Appearing less capable lowers others’ defenses. People reveal more when they feel superior. Deception works best when unnoticed.",
    translation_hi: "कम सक्षम दिखने से दूसरों का बचाव कम हो जाता है। जब लोग खुद को श्रेष्ठ महसूस करते हैं तो वे अधिक खुलासा करते हैं।\nजब आप बेवकूफ बनने का नाटक करते हैं, तो आप होशियार लोगों को मात दे सकते हैं।",
    translation_mr: "कमी हुशार दिसल्याने समोरच्याचा बचाव कमी होतो. जेव्हा लोकांना ते तुमच्यापेक्षा श्रेष्ठ आहेत असे वाटते, तेव्हा ते गाफील राहतात.\nमूर्ख बनण्याचे नाटक करून तुम्ही हुशारांना जिंकू शकता.",
    steps: ["Do not display full intelligence", "Let others underestimate you", "Ask simple questions", "Observe reactions quietly", "Act only when advantage is clear"],
    nuance: "Underestimation is an advantage.",
    locked: false
  },
  {
    id: "law-22",
    chapter: "Law 22",
    sanskrit: "Use the Surrender Tactic: Transform Weakness into Power",
    translation: "When resistance makes you weaker, surrender buys time and control. Appearing weak can lower opposition and create new openings.\nTrue strength lies in choosing when to yield and when to act.",
    translation_hi: "जब प्रतिरोध आपको कमजोर बनाता है, तो आत्मसमर्पण समय और नियंत्रण खरीदता है।\nकमजोर दिखना विरोध को कम कर सकता है। सही समय पर झुकना ही असली ताकत है।",
    translation_mr: "जेव्हा प्रतिकार तुम्हाला कमजोर करतो, तेव्हा शरणागती पत्करल्याने वेळ मिळतो. कमजोर दिसल्याने विरोध मावळतो.\nकधी झुकायचे आणि कधी लढायचे हे समजणे खरी ताकद आहे.",
    steps: ["Step back when direct conflict harms you", "Use patience to regain strength", "Let opponents lower their guard", "Observe and plan during surrender", "Act decisively at the right moment"],
    nuance: "Yielding today can lead to victory tomorrow.",
    locked: false
  },
  {
    id: "law-23",
    chapter: "Law 23",
    sanskrit: "Concentrate Your Forces",
    translation: "Scattered energy weakens impact. Focused effort creates unstoppable momentum. Power grows where attention is concentrated.",
    translation_hi: "बिखरी हुई ऊर्जा प्रभाव को कमजोर करती है। केंद्रित प्रयास अजेय गति पैदा करता है।\nजहां ध्यान केंद्रित होता है, वहां शक्ति बढ़ती है।",
    translation_mr: "विखुरलेली ऊर्जा प्रभाव कमी करते. एकाग्र प्रयत्नांमुळे प्रचंड गती निर्माण होते.\nजिथे लक्ष केंद्रित असते, तिथे शक्ती वाढते.",
    steps: ["Focus on one goal at a time", "Avoid unnecessary distractions", "Direct resources toward key priorities", "Strengthen core skills", "Eliminate weak commitments"],
    nuance: "Focus multiplies power.",
    locked: false
  },
  {
    id: "law-24",
    chapter: "Law 24",
    sanskrit: "Play the Perfect Courtier",
    translation: "Success depends on navigating people and power gracefully. Tact and charm open doors that force cannot.\nUnderstanding social dynamics protects influence.",
    translation_hi: "सफलता लोगों और शक्ति को संभालने पर निर्भर करती है। विनम्रता और आकर्षण वे दरवाजे खोलते हैं जो बल नहीं खोल सकता।",
    translation_mr: "यश हे लोकांशी आणि सत्तेशी तुम्ही कसे वागता यावर अवलंबून असते. नम्रता आणि मोहिनी ते दरवाजे उघडतात जे ताकद उघडू शकत नाही.",
    steps: ["Adapt behavior to the environment", "Control emotions in public", "Flatter subtly, not excessively", "Avoid open conflict", "Learn to read people"],
    nuance: "Grace sustains power.",
    locked: false
  },
  {
    id: "law-25",
    chapter: "Law 25",
    sanskrit: "Re-Create Yourself",
    translation: "Do not let others define who you are. Reinvention keeps you ahead and unpredictable.\nPower belongs to those who shape their own identity.",
    translation_hi: "दूसरों को यह तय न करने दें कि आप कौन हैं। खुद को नया रूप देना आपको आगे और अप्रत्याशित रखता है।\nशक्ति उन्हीं की है जो अपनी पहचान खुद बनाते हैं।",
    translation_mr: "इतरांना तुमची ओळख ठरवू देऊ नका. स्वतःमध्ये बदल करणे तुम्हाला पुढे आणि अनपेक्षित ठेवते.\nज्यांची ओळख ते स्वतः घडवतात, सत्ता त्यांच्याकडेच असते.",
    steps: ["Let go of outdated roles", "Design a new personal image", "Learn new skills continuously", "Control how others perceive you", "Evolve with changing situations"],
    nuance: "Reinvention keeps you in control.",
    locked: false
  },
  {
    id: "law-26",
    chapter: "Law 26",
    sanskrit: "Keep Your Hands Clean",
    translation: "Power is weakened when you are directly linked to mistakes or wrongdoing.\nLet others handle unpleasant tasks while you remain respected. A clean image preserves authority and trust.",
    translation_hi: "जब आप सीधे तौर पर गलतियों से जुड़े होते हैं तो शक्ति कमजोर हो जाती है।\nअप्रिय कार्यों को दूसरों को संभालने दें। एक साफ छवि अधिकार और विश्वास को बनाए रखती है।",
    translation_mr: "चुकांशी किंवा वाईट कृत्यांशी थेट संबंध आल्यास सत्ता कमजोर होते.\nवाईट कामे इतरांना करू द्या आणि स्वतःचा आदर जपा. स्वच्छ प्रतिमा तुमचा अधिकार टिकवून ठेवते.",
    steps: ["Avoid direct involvement in dirty work", "Delegate risky or unpleasant actions", "Protect your public image", "Take credit, not blame", "Stay calm and detached"],
    nuance: "A clean image sustains power.",
    locked: false
  },
  {
    id: "law-27",
    chapter: "Law 27",
    sanskrit: "Play on People’s Need to Believe to Create a Cultlike Following",
    translation: "People crave meaning and belief. A strong vision attracts loyalty and devotion. Belief binds people more than logic.",
    translation_hi: "लोग अर्थ और विश्वास के भूखे होते हैं। एक मजबूत दृष्टि वफादारी और भक्ति को आकर्षित करती है।\nविश्वास लोगों को तर्क से अधिक बांधता है।",
    translation_mr: "लोकांना कशावर तरी विश्वास ठेवायचा असतो. एक प्रबळ दृष्टीकोन निष्ठा आणि भक्ती आकर्षित करतो.\nतर्कापेक्षा विश्वास लोकांना जास्त एकत्र बांधून ठेवतो.",
    steps: ["Offer a clear and inspiring idea", "Speak with confidence and certainty", "Create simple, repeatable messages", "Build a sense of belonging", "Reinforce belief through symbols and stories"],
    nuance: "Belief creates loyalty.",
    locked: false
  },
  {
    id: "law-28",
    chapter: "Law 28",
    sanskrit: "Enter Action with Boldness",
    translation: "Hesitation invites resistance and doubt. Bold action commands respect and momentum. Confidence makes others follow.",
    translation_hi: "हिचकिचाहट प्रतिरोध और संदेह को आमंत्रित करती है। साहसिक कार्रवाई सम्मान और गति प्रदान करती है।\nआत्मविश्वास दूसरों को आपका अनुसरण करने के लिए प्रेरित करता है।",
    translation_mr: "संकोच विरोध आणि संशय निर्माण करतो. धाडसी कृती आदर मिळवून देते.\nआत्मविश्वासामुळे लोक तुमचे अनुसरण करतात.",
    steps: ["Act decisively", "Avoid showing uncertainty", "Take calculated risks", "Move quickly when opportunity appears", "Commit fully once action begins"],
    nuance: "Boldness overcomes fear.",
    locked: false
  },
  {
    id: "law-29",
    chapter: "Law 29",
    sanskrit: "Plan All the Way to the End",
    translation: "Many fail by thinking only of the beginning. Clear planning prevents surprises and mistakes.\nSeeing the full path keeps you in control.",
    translation_hi: "कई लोग केवल शुरुआत के बारे में सोचकर असफल हो जाते हैं। स्पष्ट योजना आश्चर्य और गलतियों को रोकती है।\nपूरा रास्ता देखने से आप नियंत्रण में रहते हैं।",
    translation_mr: "फक्त सुरुवातीचा विचार केल्यामुळे अनेकजण अपयशी ठरतात. स्पष्ट नियोजन चुका टाळते.\nपूर्ण मार्ग दिसल्याने नियंत्रण तुमच्या हातात राहते.",
    steps: ["Visualize the final outcome", "Anticipate obstacles early", "Prepare alternatives", "Stay disciplined throughout execution", "Adjust without losing sight of the end"],
    nuance: "Foresight secures success.",
    locked: false
  },
  {
    id: "law-30",
    chapter: "Law 30",
    sanskrit: "Make Your Accomplishments Seem Effortless",
    translation: "When success looks easy, people assume you are naturally powerful and capable.\nStruggle reduces the magic of achievement. By hiding the hard work, you appear superior.",
    translation_hi: "जब सफलता आसान लगती है, तो लोग आपको स्वाभाविक रूप से शक्तिशाली मानते हैं।\nसंघर्ष उपलब्धि के जादू को कम कर देता है। अपनी कड़ी मेहनत को छिपाकर, आप श्रेष्ठ दिखते हैं।",
    translation_mr: "जेव्हा यश सोपे दिसते, तेव्हा लोक तुम्हाला नैसर्गिकरित्या शक्तिशाली समजतात.\nसंघर्ष यशाची जादू कमी करतो. कष्ट लपवून ठेवल्याने तुम्ही अधिक श्रेष्ठ दिसता.",
    steps: ["Do the hard work privately and present only the final result", "Avoid complaining about difficulties or workload", "Speak calmly about achievements without exaggeration", "Let others discover your success rather than announcing it", "Maintain composure even under pressure"],
    nuance: "Ease creates admiration, struggle invites judgment.",
    locked: false
  },
  {
    id: "law-31",
    chapter: "Law 31",
    sanskrit: "Control the Options — Get Others to Play with the Cards You Deal",
    translation: "People feel powerful when they believe they are choosing freely. By controlling the available options, you guide decisions without force.\nTrue power lies in shaping choices so every outcome benefits you.",
    translation_hi: "लोग तब शक्तिशाली महसूस करते हैं जब उन्हें लगता है कि वे स्वतंत्र रूप से चुन रहे हैं। विकल्पों को नियंत्रित करके, आप बिना बल के निर्णयों का मार्गदर्शन करते हैं।",
    translation_mr: "जेव्हा लोकांना वाटते की ते स्वतः निवड करत आहेत तेव्हा त्यांना अधिकार असल्यासारखे वाटते. पर्याय नियंत्रित करून, तुम्ही बळजबरी न करता निर्णय ठरवू शकता.",
    steps: ["Offer limited options instead of open choices", "Present choices where all outcomes favor you", "Let others feel they decided on their own", "Avoid direct commands; guide indirectly", "Stay flexible while controlling the framework"],
    nuance: "The one who sets the choices controls the result.",
    locked: false
  },
  {
    id: "law-32",
    chapter: "Law 32",
    sanskrit: "Play to People’s Fantasies",
    translation: "Reality is often disappointing; fantasies are comforting and inspiring. People prefer dreams over harsh truths.\nThose who sell hope, vision, and possibility gain loyalty and influence.",
    translation_hi: "हकीकत अक्सर निराशाजनक होती है; कल्पनाएं सुकून देने वाली होती हैं। लोग कड़वे सच से ज्यादा सपनों को पसंद करते हैं।\nजो उम्मीद और विजन बेचते हैं, वे वफादारी हासिल करते हैं।",
    translation_mr: "वास्तविकता अनेकदा निराशाजनक असते; कल्पना सुखद असतात. लोक सत्यापेक्षा स्वप्नांना पसंती देतात.\nजे लोक आशा आणि स्वप्ने दाखवतात, लोक त्यांच्याशी जोडले जातात.",
    steps: ["Understand what people desire emotionally", "Present ideas with optimism and imagination", "Avoid focusing only on harsh facts", "Frame opportunities as exciting and meaningful", "Keep the dream alive through words and actions"],
    nuance: "Those who feed dreams gain followers.",
    locked: false
  },
  {
    id: "law-33",
    chapter: "Law 33",
    sanskrit: "Discover Each Man’s Thumbscrew",
    translation: "Everyone has a weakness, desire, fear, or need. Finding it gives you leverage and understanding.\nPower comes from knowing what moves people internally.",
    translation_hi: "हर किसी की कोई कमजोरी, इच्छा या डर होता है। इसे ढूंढना आपको बढ़त दिलाता है।\nशक्ति यह जानने से आती है कि लोगों को अंदर से क्या प्रेरित करता है।",
    translation_mr: "प्रत्येकाची काहीतरी कमजोरी, इच्छा किंवा भीती असते. ती शोधल्याने तुम्हाला फायदा होतो.\nलोकांना आतून काय हलवते हे समजण्यात खरी शक्ती आहे.",
    steps: ["Observe behavior carefully over time", "Listen for repeated desires or complaints", "Identify fears, ambitions, or insecurities", "Be patient and subtle in discovery", "Use knowledge responsibly and strategically"],
    nuance: "Understanding weakness creates silent control.",
    locked: false
  },
  {
    id: "law-34",
    chapter: "Law 34",
    sanskrit: "Be Royal in Your Own Fashion — Act Like a King to Be Treated Like One",
    translation: "People treat you according to how you treat yourself. Confidence, self-respect, and dignity signal authority without words.\nIf you appear unsure or small, others will reflect that back to you.",
    translation_hi: "लोग आपके साथ वैसा ही व्यवहार करते हैं जैसा आप खुद के साथ करते हैं। आत्मविश्वास और आत्म-सम्मान बिना शब्दों के अधिकार का संकेत देते हैं।\nयदि आप खुद को छोटा मानते हैं, तो दूसरे भी आपको वैसा ही मानेंगे।",
    translation_mr: "तुम्ही स्वतःला जशी वागणूक देता, तसेच लोक तुम्हाला वागवतात. आत्मविश्वास आणि स्वाभिमान शब्दांशिवाय अधिकार गाजवतात.\nजर तुम्ही स्वतःला कमी लेखले, तर जगही तुम्हाला तसेच लेखेल.",
    steps: ["Carry yourself with confidence, not arrogance", "Set boundaries and enforce them calmly", "Value your time and energy", "Speak and act with self-respect", "Never beg for attention or approval"],
    nuance: "Self-respect commands respect.",
    locked: false
  },
  {
    id: "law-35",
    chapter: "Law 35",
    sanskrit: "Master the Art of Timing",
    translation: "The right action at the wrong time fails. Patience allows situations to reveal themselves fully. Those who rush lose control;\nthose who wait gain advantage.",
    translation_hi: "गलत समय पर किया गया सही कार्य भी विफल हो जाता है। धैर्य स्थितियों को पूरी तरह से प्रकट होने देता है। जो जल्दबाजी करते हैं वे नियंत्रण खो देते हैं।",
    translation_mr: "चुकीच्या वेळी केलेली योग्य कृतीही फुकट जाते. संयम परिस्थितीला पूर्णपणे उलगडू देतो. जे घाई करतात ते नियंत्रण गमावतात; जे वाट पाहतात ते जिंकतात.",
    steps: ["Observe before acting", "Wait for emotions to cool", "Recognize moments of weakness or opportunity", "Do not force outcomes", "Act decisively when timing is right"],
    nuance: "Timing turns effort into success.",
    locked: false
  },
  {
    id: "law-36",
    chapter: "Law 36",
    sanskrit: "Disdain Things You Cannot Have — Ignoring Them Is the Best Revenge",
    translation: "Showing desire gives others power over you. Indifference weakens what you cannot control.\nIgnoring denies others the satisfaction of your reaction.",
    translation_hi: "इच्छा दिखाना दूसरों को आप पर अधिकार देता है। उदासीनता उस चीज़ को कमजोर कर देती है जिसे आप नियंत्रित नहीं कर सकते।\nअनदेखा करना सबसे अच्छा बदला है।",
    translation_mr: "इच्छा दाखवल्याने इतरांना तुमच्यावर ताबा मिळतो. ज्या गोष्टी तुम्ही मिळवू शकत नाही, त्यांच्याकडे दुर्लक्ष करा.\nदुर्लक्ष करणे हाच सर्वोत्तम बदला आहे.",
    steps: ["Do not react emotionally to loss", "Redirect focus to what you can control", "Avoid chasing unavailable people or things", "Maintain emotional discipline", "Let silence speak"],
    nuance: "Indifference removes their power.",
    locked: false
  },
  {
    id: "law-37",
    chapter: "Law 37",
    sanskrit: "Create Compelling Spectacles",
    translation: "Humans respond strongly to visuals and drama. Memorable actions leave deeper impact than logic. Well-crafted moments build authority and attention.",
    translation_hi: "इंसान दृश्यों और नाटक पर कड़ी प्रतिक्रिया देते हैं। यादगार कार्य तर्क से गहरा प्रभाव छोड़ते हैं।\nशानदार क्षण अधिकार और ध्यान का निर्माण करते हैं।",
    translation_mr: "माणसे दृश्य आणि नाटकीयतेला प्रतिसाद देतात. संस्मरणीय कृती तर्कापेक्षा जास्त प्रभाव पाडतात.\nचांगले क्षण अधिकार आणि लक्ष वेधून घेतात.",
    steps: ["Present ideas visually when possible", "Use symbolism and storytelling", "Make key moments memorable", "Avoid dull or routine presentation", "Stand out with intention"],
    nuance: "What is seen is remembered.",
    locked: false
  },
  {
    id: "law-38",
    chapter: "Law 38",
    sanskrit: "Think as You Like but Behave Like Others",
    translation: "Standing out mentally is powerful; standing out socially can be dangerous. Too much difference attracts resistance.\nBlend in outwardly while thinking independently.",
    translation_hi: "मानसिक रूप से अलग होना शक्तिशाली है; सामाजिक रूप से अलग होना खतरनाक हो सकता है। बहुत अधिक अंतर प्रतिरोध को आकर्षित करता है।\nबाहरी तौर पर घुल-मिल जाएं लेकिन स्वतंत्र रूप से सोचें।",
    translation_mr: "वैचारिकदृष्ट्या वेगळे असणे ताकद आहे, पण सामाजिकदृष्ट्या वेगळे असणे धोकादायक ठरू शकते. जास्त वेगळेपण विरोध ओढवून घेते.\nबाहेरून सर्वांसारखे वागा, पण विचार स्वतंत्र ठेवा.",
    steps: ["Respect social norms publicly", "Keep unconventional ideas private", "Observe before expressing opinions", "Avoid unnecessary confrontation", "Choose carefully when to stand apart"],
    nuance: "Blend in to survive, think freely to rise.",
    locked: false
  },
  {
    id: "law-39",
    chapter: "Law 39",
    sanskrit: "Stir Up Waters to Catch Fish",
    translation: "Emotional reactions reveal weaknesses. Calm opponents think clearly; emotional ones make mistakes. Controlled disruption gives advantage.",
    translation_hi: "भावनात्मक प्रतिक्रियाएं कमजोरियां उजागर करती हैं। शांत विरोधी स्पष्ट सोचते हैं; भावुक लोग गलतियां करते हैं।\nनियंत्रित अशांति लाभ देती है।",
    translation_mr: "भावनिक प्रतिक्रिया तुमच्या कमकुवतपणा दाखवतात. शांत विरोधक स्पष्ट विचार करतात; भावुक लोक चुका करतात.\nपाणी गढूळ केल्यावर मासे पकडणे सोपे जाते.",
    steps: ["Stay calm while others react", "Apply pressure subtly", "Use silence or ambiguity strategically", "Watch reactions closely", "Act when imbalance appears"],
    nuance: "Emotion clouds judgment.",
    locked: false
  },
  {
    id: "law-40",
    chapter: "Law 40",
    sanskrit: "Despise the Free Lunch",
    translation: "What comes free often comes with hidden cost. Dependence weakens independence. Paying your way preserves freedom and respect.",
    translation_hi: "जो मुफ्त मिलता है उसकी अक्सर छिपी हुई कीमत होती है। निर्भरता स्वतंत्रता को कमजोर करती है।\nअपनी कीमत चुकाना स्वतंत्रता और सम्मान को सुरक्षित रखता है।",
    translation_mr: "जे फुकट मिळते त्याची काहीतरी छुपी किंमत असते. अवलंबित्व स्वातंत्र्य कमी करते.\nस्वतःची किंमत मोजल्याने स्वातंत्र्य आणि आदर टिकून राहतो.",
    steps: ["Be cautious of favors", "Understand hidden obligations", "Maintain self-reliance", "Pay fairly for value", "Avoid long-term dependence"],
    nuance: "Freedom has a price worth paying.",
    locked: false
  },
  {
    id: "law-41",
    chapter: "Law 41",
    sanskrit: "Avoid Stepping into a Great Man’s Shoes",
    translation: "Comparison invites failure. Following legends limits originality. Create your own identity and path.",
    translation_hi: "तुलना असफलता को आमंत्रित करती है। दिग्गजों का अनुसरण करना मौलिकता को सीमित करता है। अपनी खुद की पहचान और रास्ता बनाएं।",
    translation_mr: "तुलना अपयशाला आमंत्रण देते. महापुरुषांच्या पावलावर पाऊल टाकल्याने तुमचे वेगळेपण संपते. स्वतःची ओळख आणि मार्ग स्वतः निर्माण करा.",
    steps: ["Respect predecessors without copying them", "Define your own style", "Avoid constant comparison", "Innovate rather than imitate", "Build your own legacy"],
    nuance: "Originality creates authority.",
    locked: false
  },
  {
    id: "law-42",
    chapter: "Law 42",
    sanskrit: "Strike the Shepherd and the Sheep Will Scatter",
    translation: "Groups draw strength from leaders. Removing the source of direction dissolves resistance. Power shifts when leadership collapses.",
    translation_hi: "समूह नेताओं से शक्ति प्राप्त करते हैं। दिशा के स्रोत को हटाने से प्रतिरोध खत्म हो जाता है।\nनेतृत्व के ढहने पर शक्ति बदल जाती है।",
    translation_mr: "समूहाला नेत्याकडून ताकद मिळते. मुख्य सूत्राला बाजूला केले की विरोध मावळतो.\nमेंढपाळाला मारले की मेंढ्या आपोआप पांगतात.",
    steps: ["Identify key influencers", "Focus efforts on leadership, not followers", "Reduce their credibility calmly", "Act strategically, not emotionally", "Let structure fall naturally"],
    nuance: "Remove the head, and control follows.",
    locked: false
  },
  {
    id: "law-43",
    chapter: "Law 43",
    sanskrit: "Work on the Hearts and Minds of Others",
    translation: "Force creates resistance; persuasion creates loyalty. Emotions drive decisions more than logic. Influence lasts longer than control.",
    translation_hi: "बल प्रतिरोध पैदा करता है; अनुनय वफादारी पैदा करता है। भावनाएं तर्क से अधिक निर्णय लेती हैं।\nप्रभाव नियंत्रण से अधिक समय तक रहता है।",
    translation_mr: "बळाचा वापर विरोध निर्माण करतो; मन वळवल्याने निष्ठा मिळते. भावना तर्कापेक्षा जास्त प्रभावी असतात.\nप्रभाव नियंत्रणापेक्षा जास्त काळ टिकतो.",
    steps: ["Understand emotional needs", "Show empathy strategically", "Align goals with their interests", "Communicate respectfully", "Build trust before action"],
    nuance: "Hearts won last longer than battles won.",
    locked: false
  },
  {
    id: "law-44",
    chapter: "Law 44",
    sanskrit: "Disarm and Infuriate with the Mirror Effect",
    translation: "Mirroring exposes behavior without confrontation. People become uncomfortable when faced with themselves. Reflection weakens manipulation.",
    translation_hi: "प्रतिबिंब बिना टकराव के व्यवहार को उजागर करता है। खुद का सामना करने पर लोग असहज हो जाते हैं।\nप्रतिबिंब हेरफेर को कमजोर करता है।",
    translation_mr: "समोरच्यासारखे वागल्याने त्याचा खरा चेहरा उघड होतो. स्वतःचे प्रतिबिंब पाहून लोक अस्वस्थ होतात.\nआरसा दाखवल्याने लबाडी कमकुवत होते.",
    steps: ["Reflect behavior calmly", "Avoid emotional reaction", "Let others see their actions", "Stay neutral and composed", "Use silence as a mirror"],
    nuance: "Reflection reveals truth.",
    locked: false
  },
  {
    id: "law-45",
    chapter: "Law 45",
    sanskrit: "Preach the Need for Change, but Never Reform Too Much at Once",
    translation: "Sudden change creates fear and resistance. Gradual change feels safe and acceptable. People accept what they can adjust to slowly.",
    translation_hi: "अचानक बदलाव डर और प्रतिरोध पैदा करता है। क्रमिक बदलाव सुरक्षित और स्वीकार्य लगता है।\nलोग उसे स्वीकार करते हैं जिसके साथ वे धीरे-धीरे समायोजित हो सकते हैं।",
    translation_mr: "अचानक झालेला बदल भीती आणि विरोध निर्माण करतो. हळूहळू झालेला बदल सुरक्षित वाटतो.\nलोक अशा बदलांना स्वीकारतात ज्यांच्याशी ते सावकाश जुळवून घेऊ शकतात.",
    steps: ["Introduce change step by step", "Respect traditions initially", "Gain trust before reform", "Avoid shocking systems", "Let people adapt naturally"],
    nuance: "Slow change lasts.",
    locked: false
  },
  {
    id: "law-46",
    chapter: "Law 46",
    sanskrit: "Never Appear Too Perfect",
    translation: "Perfection invites envy and hostility. Small flaws humanize you. Approachability protects influence.",
    translation_hi: "पूर्णता ईर्ष्या और शत्रुता को आमंत्रित करती है। छोटी कमियां आपको इंसान बनाती हैं। सुलभता प्रभाव की रक्षा करती है।",
    translation_mr: "परिपूर्णता मत्सर आणि शत्रुत्व ओढवून घेते. छोट्या चुका तुम्हाला मानवी बनवतात.\nसर्वसामान्यासारखे वाटल्याने तुमचा प्रभाव टिकून राहतो.",
    steps: ["Show controlled imperfections", "Avoid constant superiority", "Share minor struggles selectively", "Let others shine sometimes", "Stay humble publicly"],
    nuance: "Humanity protects power.",
    locked: false
  },
  {
    id: "law-47",
    chapter: "Law 47",
    sanskrit: "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    translation: "Overreaching destroys success. Knowing when to stop preserves gains. Excess creates downfall.",
    translation_hi: "हद से आगे बढ़ना सफलता को नष्ट कर देता है। यह जानना कि कब रुकना है, लाभ को सुरक्षित रखता है। अति पतन का कारण बनती है।",
    translation_mr: "मर्यादेपेक्षा जास्त पुढे जाणे यशाचा नाश करते. कधी थांबायचे हे समजल्याने यश टिकून राहते. अति लोभ नाशास कारणीभूत ठरतो.",
    steps: ["Define clear limits", "Stop once the goal is achieved", "Avoid unnecessary dominance", "Consolidate success", "Leave room for stability"],
    nuance: "Control includes knowing when to stop.",
    locked: false
  },
  {
    id: "law-48",
    chapter: "Law 48",
    sanskrit: "Assume Formlessness",
    translation: "Rigid structures break under pressure. Flexibility adapts and survives. Power flows where form does not trap it.",
    translation_hi: "कठोर संरचनाएं दबाव में टूट जाती हैं। लचीलापन अनुकूलित होता है और जीवित रहता है। शक्ति वहां बहती है जहां कोई रूप उसे फंसाता नहीं है।",
    translation_mr: "कठोर गोष्टी दबावाखाली तुटतात. लवचिकता टिकून राहते. पाण्यासारखे आकारहीन होणे हीच खरी शक्ती आहे.",
    steps: ["Stay adaptable to change", "Avoid fixed identities", "Adjust strategy as situations shift", "Remain unpredictable", "Flow rather than resist"],
    nuance: "Flexibility is ultimate power.",
    locked: false
  }
];

// === 4. REAL GITA DATA (Complete with Translations) ===
const GITA_DATA = [
  {
    id: 'anger',
    chapter: "Chapter 2, Shloka 62–63",
    sanskrit: "ध्यायतो विषयान् पुंसः संगस्तेषूपजायते।\nसंगात्संजायते कामः कामात्क्रोधोऽभिजायते॥\nक्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    translation: "Shloka Insight:\n• Thinking repeatedly about fears or desires creates attachment.\n• Attachment slowly turns into ego, anger, and frustration.\n• When anger and fear take control, clarity and right judgment are lost.\n\nGita Solution:\n• Anger and ego are born from fear and uncontrolled thinking, not from situations.\n• Stepping back, observing your thoughts, and choosing calm action restores balance.",
    translation_hi: "श्लोक का अर्थ:\n• डर या इच्छाओं के बारे में बार-बार सोचने से लगाव पैदा होता है।\n• लगाव धीरे-धीरे अहंकार और क्रोध में बदल जाता है।\n• जब क्रोध हावी होता है, तो सही निर्णय लेने की क्षमता खो जाती है।\n\nगीता समाधान:\n• क्रोध और अहंकार स्थितियों से नहीं, बल्कि अनियंत्रित विचारों से पैदा होते हैं।\n• पीछे हटकर अपने विचारों को देखने से संतुलन वापस आता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• भीती किंवा इच्छांबद्दल वारंवार विचार केल्याने आसक्ती निर्माण होते.\n• आसक्तीचे रूपांतर हळूहळू अहंकार आणि रागात होते.\n• जेव्हा राग ताबा मिळवतो, तेव्हा योग्य निर्णय घेण्याची क्षमता नष्ट होते.\n\nगीता उपाय:\n• राग आणि अहंकार परिस्थितीमुळे नाही, तर अनियंत्रित विचारांमुळे जन्माला येतात.\n• शांत राहून स्वतःच्या विचारांचे निरीक्षण केल्याने समतोल परत येतो.",
    nuance: "“Pause, breathe, and respond with awareness instead of reacting with emotion.”",
    locked: false 
  },
  {
    id: 'ego',
    chapter: "Chapter 2, Shloka 62–63",
    sanskrit: "ध्यायतो विषयान् पुंसः संगस्तेषूपजायते।\nसंगात्संजायते कामः कामात्क्रोधोऽभिजायते॥\nक्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    translation: "Shloka Insight:\n• Thinking repeatedly about fears or desires creates attachment.\n• Attachment slowly turns into ego, anger, and frustration.\n• When anger and fear take control, clarity and right judgment are lost.\n\nGita Solution:\n• Anger and ego are born from fear and uncontrolled thinking, not from situations.\n• Stepping back, observing your thoughts, and choosing calm action restores balance.",
    translation_hi: "श्लोक का अर्थ:\n• डर या इच्छाओं के बारे में बार-बार सोचने से लगाव पैदा होता है।\n• लगाव धीरे-धीरे अहंकार और क्रोध में बदल जाता है।\n• जब क्रोध हावी होता है, तो सही निर्णय लेने की क्षमता खो जाती है।\n\nगीता समाधान:\n• क्रोध और अहंकार स्थितियों से नहीं, बल्कि अनियंत्रित विचारों से पैदा होते हैं।\n• पीछे हटकर अपने विचारों को देखने से संतुलन वापस आता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• भीती किंवा इच्छांबद्दल वारंवार विचार केल्याने आसक्ती निर्माण होते.\n• आसक्तीचे रूपांतर हळूहळू अहंकार आणि रागात होते.\n• जेव्हा राग ताबा मिळवतो, तेव्हा योग्य निर्णय घेण्याची क्षमता नष्ट होते.\n\nगीता उपाय:\n• राग आणि अहंकार परिस्थितीमुळे नाही, तर अनियंत्रित विचारांमुळे जन्माला येतात.\n• शांत राहून स्वतःच्या विचारांचे निरीक्षण केल्याने समतोल परत येतो.",
    nuance: "“Pause, breathe, and respond with awareness instead of reacting with emotion.”",
    locked: false 
  },
  {
    id: 'desire',
    chapter: "Chapter 3, Shloka 37",
    sanskrit: "काम एष क्रोध एष रजोगुणसमुद्भवः।\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम्॥",
    translation: "Shloka Insight:\n• Desire is a powerful inner force that pushes a person to act.\n• When guided well, desire becomes motivation and progress.\n• When uncontrolled, the same desire turns into restlessness and suffering.\n\nGita Solution:\n• Desire itself is not wrong; lack of awareness is the real problem.\n• Channeling desire with discipline turns it into strength instead of distraction.",
    translation_hi: "श्लोक का अर्थ:\n• इच्छा एक शक्तिशाली आंतरिक शक्ति है जो व्यक्ति को कार्य करने के लिए प्रेरित करती है।\n• सही दिशा मिलने पर, इच्छा प्रेरणा और प्रगति बन जाती है।\n• अनियंत्रित होने पर, वही इच्छा बेचैनी और पीड़ा बन जाती है।\n\nगीता समाधान:\n• इच्छा स्वयं गलत नहीं है; जागरूकता की कमी असली समस्या है।\n• अनुशासन के साथ इच्छा को सही दिशा देने से वह भटकने के बजाय ताकत बन जाती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• इच्छा ही एक शक्तिशाली आंतरिक शक्ती आहे जी माणसाला कृती करण्यास भाग पाडते.\n• योग्य दिशा दिल्यास, इच्छा प्रेरणा आणि प्रगती बनते.\n• अनियंत्रित असल्यास, तीच इच्छा अस्वस्थता आणि दुःख बनते.\n\nगीता उपाय:\n• इच्छा चुकीची नसते; भान नसणे ही खरी समस्या आहे.\n• शिस्तीने इच्छेला योग्य दिशा दिल्यास ती ताकद बनते.",
    nuance: "“Guide your desire with awareness, and it will work for you instead of controlling you.”",
    locked: false
  },
  {
    id: 'depression',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• The mind can either support you or pull you down.\n• Depression grows when hope is forgotten, not when strength is lost.\n• Even a small effort can slowly bring the mind back to balance.\n\nGita Solution:\n• Depression is deepened by self-neglect, not by lack of ability.\n• Gentle action with patience restores inner strength over time.",
    translation_hi: "श्लोक का अर्थ:\n• मन या तो आपका साथ दे सकता है या आपको नीचे गिरा सकता है।\n• अवसाद तब बढ़ता है जब उम्मीद भूल दी जाती है, न कि जब ताकत खो जाती है।\n• एक छोटा सा प्रयास भी धीरे-धीरे मन को संतुलन में ला सकता है।\n\nगीता समाधान:\n• अवसाद खुद की उपेक्षा से गहरा होता है, क्षमता की कमी से नहीं।\n• धैर्य के साथ धीरे-धीरे किया गया कार्य समय के साथ आंतरिक शक्ति को बहाल करता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• मन तुम्हाला साथ देऊ शकते किंवा खाली खेचू शकते.\n• जेव्हा आशा संपते तेव्हा नैराश्य वाढते, ताकद संपल्यामुळे नाही.\n• एक छोटासा प्रयत्न देखील मनाला पुन्हा संतुलनात आणू शकतो.\n\nगीता उपाय:\n• स्वतःकडे दुर्लक्ष केल्याने नैराश्य वाढते.\n• संयमाने केलेली छोटी कृती हळूहळू आंतरिक शक्ती परत आणते.",
    nuance: "“Take one small step today — that is enough for now.”",
    locked: false
  },
  {
    id: 'jealousy',
    chapter: "Chapter 12, Shloka 15",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    translation: "Shloka Insight:\n• Jealousy arises when comparison replaces self-contentment.\n• Constant comparison disturbs inner peace and clarity.\n• A calm and balanced mind stays free from emotional agitation.\n\nGita Solution:\n• Jealousy grows from insecurity, not from others’ success.\n• Focusing on self-growth dissolves comparison and brings peace.",
    translation_hi: "श्लोक का अर्थ:\n• ईर्ष्या तब उत्पन्न होती है जब तुलना आत्म-संतोष की जगह ले लेती है।\n• लगातार तुलना आंतरिक शांति और स्पष्टता को भंग करती है।\n\nगीता समाधान:\n• ईर्ष्या असुरक्षा से बढ़ती है, दूसरों की सफलता से नहीं।\n• आत्म-विकास पर ध्यान केंद्रित करने से तुलना समाप्त हो जाती है और शांति मिलती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा समाधानाची जागा तुलना घेते, तेव्हा मत्सर निर्माण होतो.\n• सततची तुलना मनाची शांती भंग करते.\n\nगीता उपाय:\n• मत्सर असुरक्षिततेतून जन्माला येतो, इतरांच्या यशामुळे नाही.\n• स्वतःच्या प्रगतीवर लक्ष केंद्रित केल्याने तुलना संपते आणि शांती मिळते.",
    nuance: "“Walk your own path with calm focus; peace follows naturally.”",
    locked: false
  },
  {
    id: 'self_doubt',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Self-doubt begins when trust in oneself is forgotten.\n• The same mind can weaken you or support you.\n• Belief grows slowly through consistent small efforts.\n\nGita Solution:\n• Self-doubt is created by repeated negative thinking, not by lack of ability.\n• Taking action despite doubt rebuilds confidence step by step.",
    translation_hi: "श्लोक का अर्थ:\n• आत्म-संदेह तब शुरू होता है जब हम खुद पर भरोसा करना भूल जाते हैं।\n• वही मन आपको कमजोर कर सकता है या आपका समर्थन कर सकता है।\n\nगीता समाधान:\n• आत्म-संदेह बार-बार नकारात्मक सोचने से पैदा होता है, योग्यता की कमी से नहीं।\n• संदेह के बावजूद कार्रवाई करना धीरे-धीरे आत्मविश्वास को फिर से बनाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा आपण स्वतःवर विश्वास ठेवणे विसरतो, तेव्हा आत्म-संशय सुरू होतो.\n• तेच मन तुम्हाला कमजोर करू शकते किंवा आधार देऊ शकते.\n\nगीता उपाय:\n• आत्म-संशय नकारात्मक विचारांमुळे निर्माण होतो, पात्रतेच्या अभावामुळे नाही.\n• शंका असूनही कृती केल्याने आत्मविश्वास पुन्हा निर्माण होतो.",
    nuance: "“Trust yourself enough to take one step — clarity follows action.”",
    locked: false
  },
  {
    id: 'attachment',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Attachment forms when actions are tied too strongly to outcomes.\n• Expecting specific results creates fear and emotional dependence.\n• Peace comes from doing one’s duty without clinging to the result.\n\nGita Solution:\n• Attachment grows from obsession with results, not from action itself.\n• Performing actions with detachment brings freedom and inner calm.",
    translation_hi: "श्लोक का अर्थ:\n• लगाव तब बनता है जब कार्य परिणामों से बहुत मजबूती से जुड़े होते हैं।\n• विशिष्ट परिणामों की अपेक्षा करना भय पैदा करता है।\n\nगीता समाधान:\n• लगाव परिणामों के जुनून से बढ़ता है, कार्य से नहीं।\n• अनासक्ति के साथ कर्म करना स्वतंत्रता और आंतरिक शांति लाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा काम निकालाशी खूप घट्ट जोडलेले असते, तेव्हा आसक्ती निर्माण होते.\n• विशिष्ट निकालाची अपेक्षा केल्याने भीती निर्माण होते.\n\nगीता उपाय:\n• आसक्ती निकालाच्या हव्यासापोटी वाढते, कामामुळे नाही.\n• निकालाची अपेक्षा न ठेवता काम केल्याने मनःशांती मिळते.",
    nuance: "“Do your work with sincerity, and let go of the outcome.”",
    locked: false
  },
  {
    id: 'forgive',
    chapter: "Chapter 16, Shloka 3",
    sanskrit: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।\nदया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥",
    translation: "Shloka Insight:\n• Forgiveness is a strength that comes from inner peace, not weakness.\n• Holding anger keeps the mind restless and heavy.\n• Letting go creates space for calm and clarity.\n\nGita Solution:\n• Inability to forgive is caused by attachment to hurt, not by justice.\n• Choosing compassion frees the mind more than it frees others.",
    translation_hi: "श्लोक का अर्थ:\n• क्षमा एक शक्ति है जो आंतरिक शांति से आती है, कमजोरी से नहीं।\n• क्रोध को पकड़कर रखने से मन बेचैन और भारी रहता है।\n\nगीता समाधान:\n• क्षमा न कर पाना दर्द से जुड़ाव के कारण होता है, न्याय के कारण नहीं।\n• करुणा चुनना दूसरों से ज्यादा खुद के मन को मुक्त करता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• क्षमा ही एक शक्ती आहे जी मनःशांतीतून येते, कमजोरीतून नाही.\n• राग धरून ठेवल्याने मन अस्वस्थ आणि जड राहते.\n\nगीता उपाय:\n• क्षमा न करू शकणे हे दुखापत धरून ठेवल्यामुळे होते.\n• दया दाखवल्याने दुसऱ्यांपेक्षा स्वतःचे मन जास्त मुक्त होते.",
    nuance: "“Forgiveness lightens the heart and restores inner peace.”",
    locked: false
  },
  {
    id: 'discipline',
    chapter: "Chapter 6, Shloka 26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    translation: "Shloka Insight:\n• The mind naturally wanders and avoids effort.\n• Discipline is not force; it is gentle, repeated redirection.\n• Consistent practice slowly builds self-control.\n\nGita Solution:\n• Lack of discipline comes from an untrained mind, not laziness.\n• Regular small routines create stability and inner strength.",
    translation_hi: "श्लोक का अर्थ:\n• मन स्वभाविक रूप से भटकता है और प्रयास से बचता है।\n• अनुशासन बल नहीं है; यह कोमल और बार-बार दिशा बदलने की प्रक्रिया है।\n\nगीता समाधान:\n• अनुशासन की कमी अप्रशिक्षित मन से आती है, आलस्य से नहीं।\n• नियमित छोटी दिनचर्या स्थिरता और आंतरिक शक्ति बनाती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• मन नैसर्गिकरित्या भटकते आणि कष्टापासून पळ काढते.\n• शिस्त म्हणजे बळजबरी नाही; ती मनाला हळूवारपणे परत आणण्याची सवय आहे.\n\nगीता उपाय:\n• शिस्तीचा अभाव मनाला सवय नसल्यामुळे होतो, आळशीपणामुळे नाही.\n• नियमित छोट्या सवयी स्थिरता आणि आंतरिक शक्ती निर्माण करतात.",
    nuance: "“Bring the mind back gently each time — this is discipline.”",
    locked: false
  },
  {
    id: 'fear',
    chapter: "Chapter 6, Shloka 15",
    sanskrit: "शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।",
    translation: "Shloka Insight:\n• Fear and anxiety arise when the mind lives in the future.\n• Constant worry disturbs inner peace and balance.\n• A calm and centered mind naturally feels safe and steady.\n\nGita Solution:\n• Fear grows from imagining outcomes, not from the present moment.\n• Returning attention to the present restores clarity and calm.",
    translation_hi: "श्लोक का अर्थ:\n• डर और चिंता तब पैदा होती है जब मन भविष्य में रहता है।\n• लगातार चिंता आंतरिक शांति और संतुलन को भंग करती है।\n\nगीता समाधान:\n• डर परिणामों की कल्पना करने से बढ़ता है, वर्तमान क्षण से नहीं।\n• वर्तमान पर ध्यान वापस लाने से स्पष्टता और शांति बहाल होती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा मन भविष्यात रमते तेव्हा भीती आणि चिंता निर्माण होते.\n• सततच्या काळजीमुळे मनाची शांती ढळते.\n\nगीता उपाय:\n• निकालाची कल्पना केल्याने भीती वाढते, वर्तमानामुळे नाही.\n• वर्तमानाकडे लक्ष दिल्यास स्पष्टता आणि शांतता परत येते.",
    nuance: "“Stay rooted in the present — peace replaces fear.”",
    locked: false
  },
  {
    id: 'anxiety',
    chapter: "Chapter 6, Shloka 15",
    sanskrit: "शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।",
    translation: "Shloka Insight:\n• Fear and anxiety arise when the mind lives in the future.\n• Constant worry disturbs inner peace and balance.\n• A calm and centered mind naturally feels safe and steady.\n\nGita Solution:\n• Fear grows from imagining outcomes, not from the present moment.\n• Returning attention to the present restores clarity and calm.",
    translation_hi: "श्लोक का अर्थ:\n• डर और चिंता तब पैदा होती है जब मन भविष्य में रहता है।\n• लगातार चिंता आंतरिक शांति और संतुलन को भंग करती है।\n\nगीता समाधान:\n• डर परिणामों की कल्पना करने से बढ़ता है, वर्तमान क्षण से नहीं।\n• वर्तमान पर ध्यान वापस लाने से स्पष्टता और शांति बहाल होती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा मन भविष्यात रमते तेव्हा भीती आणि चिंता निर्माण होते.\n• सततच्या काळजीमुळे मनाची शांती ढळते.\n\nगीता उपाय:\n• निकालाची कल्पना केल्याने भीती वाढते, वर्तमानामुळे नाही.\n• वर्तमानाकडे लक्ष दिल्यास स्पष्टता आणि शांतता परत येते.",
    nuance: "“Stay rooted in the present — peace replaces fear.”",
    locked: false
  },
  {
    id: 'confusion',
    chapter: "Chapter 4, Shloka 42",
    sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनाऽऽत्मनः।\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत॥",
    translation: "Shloka Insight:\n• Confusion arises when clarity is covered by doubt and overthinking.\n• Too many thoughts weaken decision-making.\n• Right understanding cuts through doubt and restores direction.\n\nGita Solution:\n• Confusion grows from lack of inner clarity, not lack of options.\n• Seeking understanding and taking action dissolves doubt.",
    translation_hi: "श्लोक का अर्थ:\n• भ्रम तब पैदा होता है जब स्पष्टता संदेह और अधिक सोचने से ढक जाती है।\n• बहुत सारे विचार निर्णय लेने की क्षमता को कमजोर करते हैं।\n\nगीता समाधान:\n• भ्रम आंतरिक स्पष्टता की कमी से बढ़ता है, विकल्पों की कमी से नहीं।\n• समझ और कार्रवाई करने से संदेह समाप्त हो जाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा संशय आणि अतिविचारामुळे स्पष्टता झाकली जाते, तेव्हा गोंधळ निर्माण होतो.\n• खूप जास्त विचार निर्णयक्षमता कमकुवत करतात.\n\nगीता उपाय:\n• गोंधळ आंतरिक स्पष्टतेच्या अभावामुळे वाढतो, पर्यायांच्या कमतरतेमुळे नाही.\n• समजून घेणे आणि कृती करणे यामुळे शंका दूर होते.",
    nuance: "“Choose clarity over hesitation — the path becomes visible.”",
    locked: false
  },
  {
    id: 'overthinking',
    chapter: "Chapter 6, Shloka 25",
    sanskrit: "शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया।\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्॥",
    translation: "Shloka Insight:\n• Overthinking happens when the mind runs without direction.\n• Too many thoughts drain energy and clarity.\n• Calm focus brings the mind back to peace.\n\nGita Solution:\n• Overthinking is caused by lack of mental rest, not lack of intelligence.\n• Gradual calming of the mind restores balance and clarity.",
    translation_hi: "श्लोक का अर्थ:\n• अधिक सोचना तब होता है जब मन बिना दिशा के भागता है।\n• बहुत सारे विचार ऊर्जा और स्पष्टता को खत्म कर देते हैं।\n\nगीता समाधान:\n• अधिक सोचना मानसिक आराम की कमी के कारण होता है, बुद्धि की कमी से नहीं।\n• मन को धीरे-धीरे शांत करने से संतुलन वापस आता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा मन दिशाहीन धावते, तेव्हा अतिविचार सुरू होतात.\n• खूप विचार केल्याने ऊर्जा आणि स्पष्टता संपते.\n\nगीता उपाय:\n• अतिविचार मानसिक आरामाच्या अभावामुळे होतात, बुद्धीच्या अभावामुळे नाही.\n• मनाला हळूहळू शांत केल्याने समतोल परत येतो.",
    nuance: "“Pause... and let the mind settle.”",
    locked: false
  },
  {
    id: 'motivation',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Motivation weakens when results feel too heavy to carry.\n• Focusing only on outcomes drains energy and interest.\n• Action itself slowly rebuilds inner drive.\n\nGita Solution:\n• Lack of motivation comes from attachment to results, not from lack of ability.\n• Doing small actions without pressure restores momentum.",
    translation_hi: "श्लोक का अर्थ:\n• जब परिणाम बहुत भारी लगने लगते हैं तो प्रेरणा कमजोर हो जाती है।\n• केवल परिणामों पर ध्यान केंद्रित करने से ऊर्जा खत्म हो जाती है।\n\nगीता समाधान:\n• प्रेरणा की कमी परिणामों से लगाव के कारण आती है।\n• बिना दबाव के छोटे-छोटे कार्य करने से गति वापस आती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा निकालाचे ओझे वाटते, तेव्हा प्रेरणा कमी होते.\n• फक्त निकालावर लक्ष दिल्याने उत्साह मावळतो.\n\nगीता उपाय:\n• प्रेरणेची कमतरता निकालाच्या आसक्तीमुळे येते.\n• दडपणाशिवाय छोटी कामे केल्याने पुन्हा गती मिळते.",
    nuance: "“Begin with one small action today, motivation will follow.”",
    locked: false
  },
  {
    id: 'lonely',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Loneliness grows when we feel disconnected from ourselves.\n• Depending only on others for comfort creates inner emptiness.\n• Reconnecting with oneself brings quiet strength and peace.\n\nGita Solution:\n• Loneliness comes from inner disconnection, not from being alone.\n• Building a gentle relationship with yourself restores warmth and support.",
    translation_hi: "श्लोक का अर्थ:\n• जब हम खुद से कटा हुआ महसूस करते हैं तो अकेलापन बढ़ता है।\n• केवल दूसरों पर निर्भर रहने से आंतरिक खालीपन पैदा होता है।\n\nगीता समाधान:\n• अकेलापन आंतरिक अलगाव से आता है, अकेले होने से नहीं।\n• खुद के साथ एक कोमल रिश्ता बनाने से समर्थन मिलता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा आपण स्वतःपासून तुटल्यासारखे वाटतो, तेव्हा एकटेपणा वाढतो.\n• फक्त इतरांवर अवलंबून राहिल्याने आतून रिकामे वाटते.\n\nगीता उपाय:\n• एकटेपणा स्वतःशी संपर्क तुटल्यामुळे येतो.\n• स्वतःशी मैत्रीपूर्ण नाते जोडल्याने आधार मिळतो.",
    nuance: "“Be present with yourself today — you are never truly alone.”",
    locked: false
  },
  {
    id: 'control_mind',
    chapter: "Chapter 6, Shloka 26",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    translation: "Shloka Insight:\n• The mind naturally wanders and seeks distractions.\n• Trying to force control only creates more resistance.\n• Calm repetition and awareness slowly train the mind.\n\nGita Solution:\n• The mind is controlled through gentle practice, not harsh discipline.\n• Bringing attention back again and again builds inner mastery.",
    translation_hi: "श्लोक का अर्थ:\n• मन स्वभाविक रूप से भटकता है और विचलन चाहता है।\n• जबरदस्ती नियंत्रण करने की कोशिश केवल अधिक प्रतिरोध पैदा करती है।\n\nगीता समाधान:\n• मन को कठोर अनुशासन से नहीं, बल्कि कोमल अभ्यास से नियंत्रित किया जाता है।\n• बार-बार ध्यान वापस लाने से आंतरिक प्रभुत्व बनता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• मन नैसर्गिकरित्या भटकते आणि विरंगुळा शोधते.\n• बळजबरीने नियंत्रण करण्याचा प्रयत्न केल्यास त्रास होतो.\n\nगीता उपाय:\n• मनावर ताबा मिळवण्यासाठी कठोर शिस्तीची नाही, तर सरावाची गरज असते.\n• वारंवार लक्ष परत आणल्याने मनावर ताबा मिळवता येतो.",
    nuance: "“Each time the mind wanders, bring it back calmly — this is control.”",
    locked: false
  },
  {
    id: 'fear_failure',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Fear of failure arises when results matter more than effort.\n• Worrying about outcomes weakens courage and clarity.\n• Peace comes from focusing on action, not its result.\n\nGita Solution:\n• Fear of failure is created by attachment to success, not by effort.\n• Acting sincerely without pressure dissolves fear step by step.",
    translation_hi: "श्लोक का अर्थ:\n• विफलता का डर तब पैदा होता है जब परिणाम प्रयास से अधिक मायने रखते हैं।\n• परिणामों के बारे में चिंता करना साहस को कमजोर करता है।\n\nगीता समाधान:\n• विफलता का डर सफलता से लगाव के कारण पैदा होता है, प्रयास से नहीं।\n• बिना दबाव के ईमानदारी से कार्य करने से डर धीरे-धीरे खत्म हो जाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा कष्टापेक्षा निकालाला जास्त महत्त्व दिले जाते, तेव्हा अपयशाची भीती वाटते.\n• निकालाची काळजी केल्याने धैर्य कमी होते.\n\nगीता उपाय:\n• अपयशाची भीती यशाच्या आसक्तीमुळे निर्माण होते, कष्टामुळे नाही.\n• दडपणाशिवाय प्रामाणिकपणे काम केल्याने भीती नाहीशी होते.",
    nuance: "“Do your best today and let go — fear fades when action begins.”",
    locked: false
  },
  {
    id: 'attach_result',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Attachment to results creates constant expectation and fear.\n• When peace depends on outcomes, the mind stays restless.\n• True balance comes from focusing on effort, not reward.\n\nGita Solution:\n• Attachment to results grows from insecurity, not from action itself.\n• Performing duties with detachment brings inner freedom.",
    translation_hi: "श्लोक का अर्थ:\n• परिणामों से लगाव निरंतर अपेक्षा और भय पैदा करता है।\n• जब शांति परिणामों पर निर्भर करती है, तो मन बेचैन रहता है।\n\nगीता समाधान:\n• परिणामों से लगाव असुरक्षा से बढ़ता है।\n• अनासक्ति के साथ कर्तव्यों का पालन करना आंतरिक स्वतंत्रता लाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• निकालाची आसक्ती सतत अपेक्षा आणि भीती निर्माण करते.\n• जेव्हा शांतता निकालावर अवलंबून असते, तेव्हा मन अस्वस्थ राहते.\n\nगीता उपाय:\n• निकालाची आसक्ती असुरक्षिततेमुळे वाढते.\n• फळाची अपेक्षा न ठेवता कर्तव्य पार पाडल्याने मन मोकळे होते.",
    nuance: "“Give your best effort and release the outcome.”",
    locked: false
  },
  {
    id: 'work_stress',
    chapter: "Chapter 2, Shloka 48",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    translation: "Shloka Insight:\n• Work stress grows when pressure replaces balance.\n• Unequal focus on success or failure disturbs the mind.\n• Inner steadiness brings clarity even in demanding work.\n\nGita Solution:\n• Work stress comes from emotional imbalance, not workload alone.\n• Maintaining calm effort with detachment restores control and peace.",
    translation_hi: "श्लोक का अर्थ:\n• जब दबाव संतुलन की जगह ले लेता है तो काम का तनाव बढ़ता है।\n• सफलता या असफलता पर असमान ध्यान मन को परेशान करता है।\n\nगीता समाधान:\n• काम का तनाव भावनात्मक असंतुलन से आता है, केवल काम के बोझ से नहीं।\n• अनासक्ति के साथ शांत प्रयास बनाए रखने से नियंत्रण और शांति बहाल होती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा समतोल जातो आणि दबाव वाढतो, तेव्हा कामाचा ताण येतो.\n• यश किंवा अपयशाचा अतिविचार मनाला त्रास देतो.\n\nगीता उपाय:\n• कामाचा ताण भावनिक असंतुलनामुळे येतो, फक्त कामामुळे नाही.\n• शांत राहून काम केल्याने नियंत्रण आणि शांती मिळते.",
    nuance: "“Work with balance — calm effort is true strength.”",
    locked: false
  },
  {
    id: 'loss',
    chapter: "Chapter 2, Shloka 14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "Shloka Insight:\n• Loss and gain are temporary phases in life.\n• Painful situations come and go like changing seasons.\n• Endurance and patience bring inner strength.\n\nGita Solution:\n• Loss hurts because we see it as permanent, not temporary.\n• Accepting change with patience opens the path to recovery.",
    translation_hi: "श्लोक का अर्थ:\n• हानि और लाभ जीवन के अस्थायी चरण हैं।\n• दर्दनाक स्थितियां बदलते मौसम की तरह आती हैं और जाती हैं।\n\nगीता समाधान:\n• हानि इसलिए दुख देती है क्योंकि हम इसे स्थायी मानते हैं।\n• धैर्य के साथ परिवर्तन को स्वीकार करना ठीक होने का रास्ता खोलता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• नफा आणि तोटा हे जीवनाचे तात्पुरते टप्पे आहेत.\n• कठीण परिस्थिती ऋतूंप्रमाणे येते आणि जाते.\n\nगीता उपाय:\n• तोटा दुःखदायक वाटतो कारण आपण त्याला कायमस्वरूपी मानतो.\n• संयमाने बदल स्वीकारल्याने सावरता येते.",
    nuance: "“This phase will pass — stay steady and move forward.”",
    locked: false
  },
  {
    id: 'giving_up',
    chapter: "Chapter 6, Shloka 23",
    sanskrit: "तं विद्याद् दुःखसंयोगवियोगं योगसंज्ञितम्।\nस निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा॥",
    translation: "Shloka Insight:\n• Difficult moments are part of every journey.\n• Discomfort does not mean failure.\n• Staying steady helps us move beyond pain.\n\nGita Solution:\n• Giving up too early happens because the mind feels tired, not because the goal is wrong.\n• Continuing calmly, without frustration, builds real strength.",
    translation_hi: "श्लोक का अर्थ:\n• कठिन क्षण हर यात्रा का हिस्सा हैं।\n• असुविधा का मतलब असफलता नहीं है।\n\nगीता समाधान:\n• बहुत जल्दी हार मान लेना इसलिए होता है क्योंकि मन थका हुआ महसूस करता है, इसलिए नहीं कि लक्ष्य गलत है।\n• बिना निराशा के शांति से चलते रहना असली ताकत बनाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• कठीण क्षण हे प्रवासाचा एक भाग आहेत.\n• त्रास होणे म्हणजे अपयश नाही.\n\nगीता उपाय:\n• आपण लवकर हार मानतो कारण मन थकते, ध्येय चुकीचे नसते म्हणून नाही.\n• न थकता शांतपणे चालू राहिल्याने खरी ताकद निर्माण होते.",
    nuance: "“Don’t stop at discomfort — growth begins just after it.”",
    locked: false
  },
  {
    id: 'expectations',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Expecting others to behave in a certain way leads to disappointment.\n• People act based on their own understanding, limits, and situations.\n• Peace comes when we stop tying our happiness to others’ actions.\n\nGita Solution:\n• Expectations from others create emotional stress and dependence.\n• Accepting people as they are brings inner freedom and calm.",
    translation_hi: "श्लोक का अर्थ:\n• दूसरों से एक निश्चित तरीके से व्यवहार करने की अपेक्षा करना निराशा की ओर ले जाता है।\n• लोग अपनी समझ और स्थितियों के आधार पर कार्य करते हैं।\n\nगीता समाधान:\n• दूसरों से उम्मीदें भावनात्मक तनाव पैदा करती हैं।\n• लोगों को वैसे ही स्वीकार करना जैसे वे हैं, आंतरिक स्वतंत्रता लाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• इतरांनी ठराविक पद्धतीने वागावे ही अपेक्षा निराशा आणते.\n• लोक त्यांच्या समज आणि परिस्थितीनुसार वागतात.\n\nगीता उपाय:\n• इतरांकडून अपेक्षा ठेवल्याने मानसिक ताण वाढतो.\n• लोकांना ते जसे आहेत तसे स्वीकारल्याने मनःशांती मिळते.",
    nuance: "“Release expectations — peace grows when acceptance begins.”",
    locked: false
  },
  {
    id: 'betrayal',
    chapter: "Chapter 2, Shloka 14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "Shloka Insight:\n• Emotional pain feels strong when trust is broken.\n• Hurtful experiences come and go; they are not permanent.\n• Endurance helps the heart regain balance.\n\nGita Solution:\n• Betrayal hurts deeply because of emotional attachment, not weakness.\n• Accepting the pain without bitterness allows healing to begin.",
    translation_hi: "श्लोक का अर्थ:\n• जब भरोसा टूटता है तो भावनात्मक दर्द गहरा होता है।\n• दर्दनाक अनुभव आते हैं और चले जाते हैं; वे स्थायी नहीं हैं।\n\nगीता समाधान:\n• विश्वासघात भावनात्मक लगाव के कारण गहरा दुख देता है।\n• बिना कड़वाहट के दर्द को स्वीकार करने से घाव भरने लगते हैं।",
    translation_mr: "श्लोकाचा अर्थ:\n• विश्वास तुटल्यावर होणारे दुःख तीव्र असते.\n• वाईट अनुभव येतात आणि जातात; ते कायमस्वरूपी नसतात.\n\nगीता उपाय:\n• विश्वासघातामुळे होणारे दुःख भावनिक बंधनामुळे असते.\n• कटुता न ठेवता वेदना स्वीकारल्याने मन बरे होऊ लागते.",
    nuance: "“Let the pain pass — your peace is stronger than betrayal.”",
    locked: false
  },
  {
    id: 'surrender',
    chapter: "Chapter 12, Shloka 15",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    translation: "Shloka Insight:\n• Fear increases when we feel unsafe in our surroundings.\n• The mind imagines threats even when none are present.\n• Inner calm reduces fear more than changing the environment.\n\nGita Solution:\n• Fear of surroundings comes from inner insecurity, not external danger alone.\n• Building inner steadiness slowly removes fear from the mind.",
    translation_hi: "श्लोक का अर्थ:\n• जब हम अपने आसपास असुरक्षित महसूस करते हैं तो डर बढ़ जाता है।\n• मन खतरों की कल्पना करता है, भले ही वे मौजूद न हों।\n\nगीता समाधान:\n• डर आंतरिक असुरक्षा से आता है, केवल बाहरी खतरे से नहीं।\n• आंतरिक स्थिरता बनाने से मन से डर दूर हो जाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा आपल्याला असुरक्षित वाटते, तेव्हा भीती वाढते.\n• संकट नसतानाही मन भीतीची कल्पना करते.\n\nगीता उपाय:\n• भीती ही आंतरिक असुरक्षिततेमुळे वाटते, फक्त बाहेरच्या संकटामुळे नाही.\n• आंतरिक स्थिरता निर्माण केल्याने मनातून भीती निघून जाते.",
    nuance: "“When the mind becomes calm, the world feels safe again.”",
    locked: false
  },
  {
    id: 'fear_future',
    chapter: "Chapter 2, Shloka 47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "Shloka Insight:\n• Fear of the future grows when the mind lives ahead of the present.\n• Worrying about outcomes creates anxiety and restlessness.\n• Peace comes from focusing on today’s effort.\n\nGita Solution:\n• Fear of the future comes from attachment to imagined results.\n• Staying present and taking right action reduces fear.",
    translation_hi: "श्लोक का अर्थ:\n• भविष्य का डर तब बढ़ता है जब मन वर्तमान से आगे रहता है।\n• परिणामों की चिंता करने से बेचैनी पैदा होती है।\n\nगीता समाधान:\n• भविष्य का डर कल्पित परिणामों से लगाव के कारण आता है।\n• वर्तमान में रहने और सही कार्य करने से डर कम हो जाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा मन भविष्याचा विचार करते तेव्हा भीती वाढते.\n• निकालाची चिंता केल्याने अस्वस्थता येते.\n\nगीता उपाय:\n• भविष्याची भीती निकालाच्या कल्पनेमुळे वाटते.\n• वर्तमानात राहून योग्य कृती केल्याने भीती कमी होते.",
    nuance: "“Focus on today’s step — the future will take care of itself.”",
    locked: false
  },
  {
    id: 'insecure',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Insecurity grows when trust in oneself becomes weak.\n• Depending on others for validation increases fear.\n• Inner support brings stability and confidence.\n\nGita Solution:\n• Feeling insecure comes from self-doubt, not from lack of worth.\n• Strengthening self-trust slowly removes insecurity.",
    translation_hi: "श्लोक का अर्थ:\n• जब खुद पर भरोसा कमजोर हो जाता है तो असुरक्षा बढ़ती है।\n• दूसरों पर निर्भर रहने से डर बढ़ता है।\n\nगीता समाधान:\n• असुरक्षित महसूस करना आत्म-संदेह से आता है, योग्यता की कमी से नहीं।\n• आत्म-विश्वास को मजबूत करने से असुरक्षा दूर होती है।",
    translation_mr: "श्लोकाचा अर्थ:\n• स्वतःवरचा विश्वास कमी झाला की असुरक्षितता वाढते.\n• कौतुकासाठी इतरांवर अवलंबून राहिल्याने भीती वाढते.\n\nगीता उपाय:\n• असुरक्षित वाटणे हे आत्म-संशयामुळे होते, पात्रतेच्या अभावामुळे नाही.\n• स्वतःवरचा विश्वास वाढवल्याने असुरक्षितता दूर होते.",
    nuance: "“Trust yourself — inner strength grows from within.”",
    locked: false
  },
  {
    id: 'suffering',
    chapter: "Chapter 2, Shloka 14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "Shloka Insight:\n• Sometimes suffering comes without a clear external reason.\n• The mind creates pain by repeatedly thinking and feeling.\n• Such suffering is temporary and will pass.\n\nGita Solution:\n• Suffering without reason comes from inner disturbance, not from reality.\n• Observing the mind calmly reduces unnecessary pain.",
    translation_hi: "श्लोक का अर्थ:\n• कभी-कभी पीड़ा बिना किसी स्पष्ट बाहरी कारण के आती है।\n• मन बार-बार सोचकर और महसूस करके दर्द पैदा करता है।\n\nगीता समाधान:\n• अकारण पीड़ा आंतरिक अशांति से आती है।\n• मन को शांति से देखने से अनावश्यक दर्द कम हो जाता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• कधीकधी कारण नसतानाही दुःख येते.\n• मन वारंवार विचार करून वेदना निर्माण करते.\n\nगीता उपाय:\n• विनाकारण होणारा त्रास मनाच्या अस्वस्थतेमुळे होतो.\n• मनाचे शांतपणे निरीक्षण केल्याने अनावश्यक त्रास कमी होतो.",
    nuance: "“Let the moment pass — peace returns when the mind settles.”",
    locked: false
  },
  {
    id: 'judgement',
    chapter: "Chapter 3, Shloka 35",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    translation: "Shloka Insight:\n• Fear of judgement comes when we try to live by others’ standards.\n• Comparing yourself with others creates anxiety and self-doubt.\n• Peace grows when you stay true to your own path.\n\nGita Solution:\n• Fear of judgement is born from seeking approval, not from wrongdoing.\n• Focusing on your own duty reduces fear and builds confidence.",
    translation_hi: "श्लोक का अर्थ:\n• निर्णय का डर तब आता है जब हम दूसरों के मानकों से जीने की कोशिश करते हैं।\n• दूसरों से अपनी तुलना करने से चिंता पैदा होती है।\n\nगीता समाधान:\n• निर्णय का डर स्वीकृति की तलाश से पैदा होता है, गलत करने से नहीं।\n• अपने कर्तव्य पर ध्यान केंद्रित करने से डर कम होता है।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा आपण इतरांच्या मर्जीनुसार वागण्याचा प्रयत्न करतो, तेव्हा लोकांच्या मताची भीती वाटते.\n• इतरांशी तुलना केल्याने चिंता वाढते.\n\nगीता उपाय:\n• लोकांच्या मताची भीती कौतुकाच्या अपेक्षांमुळे वाटते.\n• स्वतःच्या कर्तव्यावर लक्ष केंद्रित केल्याने भीती कमी होते.",
    nuance: "“Walk your own path — peace comes when you stop seeking approval.”",
    locked: false
  },
  {
    id: 'stuck',
    chapter: "Chapter 6, Shloka 5",
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "Shloka Insight:\n• Feeling stuck happens when hope and direction feel lost.\n• The mind starts believing that nothing will change.\n• Inner effort is the first step toward movement.\n\nGita Solution:\n• Feeling stuck comes from loss of self-belief, not lack of opportunity.\n• Small actions taken daily slowly create progress.",
    translation_hi: "श्लोक का अर्थ:\n• फंसा हुआ महसूस करना तब होता है जब उम्मीद और दिशा खो जाती है।\n• मन यह मानने लगता है कि कुछ भी नहीं बदलेगा।\n\nगीता समाधान:\n• फंसा हुआ महसूस करना आत्म-विश्वास की कमी से आता है।\n• प्रतिदिन किए गए छोटे-छोटे कार्य धीरे-धीरे प्रगति पैदा करते हैं।",
    translation_mr: "श्लोकाचा अर्थ:\n• जेव्हा आशा आणि दिशा सापडत नाही, तेव्हा अडकल्यासारखे वाटते.\n• काहीच बदलणार नाही असे मनाला वाटू लागते.\n\nगीता उपाय:\n• अडकल्यासारखे वाटणे हे आत्मविश्वासाच्या कमतरतेमुळे होते.\n• रोज छोटी कृती केल्याने हळूहळू प्रगती होते.",
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