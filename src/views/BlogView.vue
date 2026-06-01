<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All')

const categories = ['All', 'Tajweed', 'Hifz', 'Tafseer', 'Norani Qaida', 'Arabic Grammar', 'Hadis', 'Duaen', 'Tarjama']

const blogs = [
  // TAJWEED
  {
    id: 1,
    slug: "how-to-learn-tajweed-ul-quran-online",
    title: "How to Learn Tajweed ul Quran Online — Complete Beginner's Guide",
    excerpt: "Tajweed is the set of rules governing the correct pronunciation of the Quran. Learn how you can master Tajweed online with certified teachers from the comfort of your home.",
    category: "Tajweed",
    image: "/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg",
    imageAlt: "Student learning Tajweed ul Quran online with certified teacher",
    date: "June 1, 2025",
    readTime: "5 min read",
    tags: ["tajweed ul quran", "learn tajweed online", "quran recitation rules", "online quran classes", "tajweed for beginners"],
    content: [
      {
        heading: "What is Tajweed ul Quran?",
        text: "Tajweed (تجوید) literally means 'to make better' or 'to improve'. In the context of the Holy Quran, Tajweed refers to the set of rules and guidelines that govern the correct pronunciation of Arabic letters and words during Quranic recitation. Allah SWT revealed the Quran with Tajweed, and it is obligatory (Farz) upon every Muslim to recite the Quran with proper Tajweed."
      },
      {
        heading: "Why is Tajweed Important?",
        text: "Reciting the Quran without Tajweed can change the meaning of words entirely. For example, a slight mispronunciation can turn a word from meaning 'heart' to something completely different. The Prophet Muhammad ﷺ said: 'Recite the Quran slowly and distinctly' (Hadith). This shows how important correct recitation is in Islam."
      },
      {
        heading: "Basic Rules of Tajweed You Must Know",
        text: "The main rules of Tajweed include: Makharij ul Huroof (points of articulation of letters), Sifaat ul Huroof (characteristics of letters), Noon Sakin and Tanween rules, Meem Sakin rules, Madd rules (elongation), Qalqalah (echoing sound), Waqf rules (pausing), and Lahn (errors in recitation). Learning these rules step by step with a qualified teacher is the best approach."
      },
      {
        heading: "How to Learn Tajweed Online at Al Saeed Quran Institute",
        text: "At Al Saeed Quran Institute, our certified Tajweed teachers teach you all the rules of Tajweed through live one-on-one classes on Zoom or WhatsApp. We start from the absolute basics — pronunciation of Arabic letters — and gradually move to advanced recitation rules. Our teachers listen to your recitation, correct your mistakes in real-time, and guide you at your own pace. Classes are available morning, evening, and weekends to suit all time zones."
      },
      {
        heading: "How Long Does it Take to Learn Tajweed?",
        text: "The time to learn Tajweed depends on your current level and how much practice you do daily. For a complete beginner, basic Tajweed rules can be learned in 3–6 months with regular classes. Perfecting Tajweed for complete Quran recitation may take 1–2 years. However, with daily practice of even 15–20 minutes, students see significant improvement very quickly."
      },
      {
        heading: "Start Your Free Tajweed Trial Class Today",
        text: "Al Saeed Quran Institute offers a completely free first trial class with no registration fee required. Contact us on WhatsApp at +92 319 8839708 to book your free Tajweed class. Our experienced teachers are ready to guide you on your Quranic journey. JazakAllah Khair!"
      }
    ]
  },
  {
    id: 2,
    slug: "importance-of-tajweed-in-quran-recitation",
    title: "The Importance of Tajweed in Quran Recitation — Why Every Muslim Must Learn",
    excerpt: "Understanding the importance of Tajweed is the first step towards beautiful Quranic recitation. Discover why Tajweed is obligatory and how it transforms your connection with the Quran.",
    category: "Tajweed",
    image: "/assets/images/imageye___-_imgi_9_vector-young-muslim-man-reading-quran_844724-24573.jpg",
    imageAlt: "Young Muslim man reciting Quran with proper Tajweed rules",
    date: "May 28, 2025",
    readTime: "4 min read",
    tags: ["importance of tajweed", "quran recitation", "tajweed rules", "why learn tajweed", "correct quran recitation"],
    content: [
      {
        heading: "The Quranic Command for Tajweed",
        text: "Allah SWT says in the Holy Quran: 'And recite the Quran with measured recitation' (Surah Muzzammil 73:4). This verse is a direct command from Allah to recite the Quran with Tajweed. Islamic scholars unanimously agree that applying Tajweed rules while reciting the Quran is an individual obligation (Fard Ayn) on every Muslim."
      },
      {
        heading: "How Tajweed Protects the Meaning of the Quran",
        text: "The Arabic language is extremely precise. A single incorrect vowel or elongation can completely change the meaning of a Quranic word. Tajweed rules were established by the early Muslims under the direct guidance of Prophet Muhammad ﷺ to preserve the exact pronunciation of the Quran as it was revealed. This is why Tajweed is considered a protection of the Quran's meaning."
      },
      {
        heading: "Spiritual Benefits of Reciting Quran with Tajweed",
        text: "The Prophet Muhammad ﷺ said: 'The one who is proficient in the recitation of the Quran will be with the honorable and obedient scribes (angels), and the one who recites the Quran with difficulty, stammering through it, will have two rewards' (Bukhari & Muslim). Reciting with Tajweed increases your focus, understanding, and spiritual connection with Allah's words."
      },
      {
        heading: "Common Tajweed Mistakes Muslims Make",
        text: "Many Muslims make common Tajweed errors without realizing it — such as not elongating Madd properly, not applying Ghunna on Noon and Meem Mushaddad, incorrect pronunciation of letters like ع (Ain), ح (Ha), ق (Qaf), and ط (Taa), and not observing Waqf rules. Learning Tajweed with a qualified teacher helps correct these mistakes effectively."
      },
      {
        heading: "Learn Tajweed with Al Saeed Quran Institute",
        text: "Our expert Tajweed teachers at Al Saeed Quran Institute have helped hundreds of students from Pakistan, UAE, UK, USA and worldwide improve their Quranic recitation. Whether you are a complete beginner or want to refine your existing recitation, our personalized online classes will take you to the next level. Book your FREE trial class on WhatsApp today!"
      }
    ]
  },

  // HIFZ
  {
    id: 3,
    slug: "how-to-memorize-quran-online-complete-guide",
    title: "How to Memorize Quran Online — Complete Guide to Hifz ul Quran",
    excerpt: "Hifz ul Quran is one of the most noble acts in Islam. Discover proven techniques for online Quran memorization and how Al Saeed Quran Institute can guide you step by step.",
    category: "Hifz",
    image: "/assets/images/imageye___-_imgi_8_boy-is-reading-quran-with-headphones_921485-506.jpg",
    imageAlt: "Child memorizing Quran online with headphones — Hifz ul Quran program",
    date: "May 25, 2025",
    readTime: "6 min read",
    tags: ["hifz ul quran", "memorize quran online", "quran memorization", "how to do hifz", "online hifz program", "quran for kids"],
    content: [
      {
        heading: "What is Hifz ul Quran?",
        text: "Hifz ul Quran means the complete memorization of the Holy Quran. A person who has memorized the entire Quran is called a Hafiz (for males) or Hafiza (for females). The Quran has 30 Paras (chapters), 114 Surahs, and 6,236 verses. Becoming a Hafiz is considered one of the greatest honors in Islam."
      },
      {
        heading: "The Virtues of Becoming a Hafiz",
        text: "The Prophet Muhammad ﷺ said: 'The best of you is the one who learns the Quran and teaches it' (Bukhari). On the Day of Judgment, the Hafiz will be asked to recite and ascend in ranks for every verse they recite. Parents of a Hafiz will be given crowns of light to wear in Jannah. These are just some of the immense rewards of Hifz ul Quran."
      },
      {
        heading: "Best Techniques for Online Quran Memorization",
        text: "Effective Hifz techniques include: Sabaq (new lesson) — memorize 3–5 new lines daily, Sabaq Para (recently memorized) — revise previous week's memorization, Manzil (old lesson) — revise older portions to strengthen retention. Listening to the same ayat repeatedly before memorizing helps significantly. Reciting the new lesson in Salah reinforces memory. Consistency is the most important factor — even 30 minutes daily leads to great progress."
      },
      {
        heading: "Can Adults Do Hifz? Is it Too Late?",
        text: "It is absolutely never too late to begin Hifz ul Quran. Many adults in their 30s, 40s, and even 50s have successfully completed Hifz. Children memorize faster due to stronger memory, but adults have better focus and understanding. At Al Saeed Quran Institute, we have dedicated Hifz programs for both kids and adults with specially designed schedules that fit your daily routine."
      },
      {
        heading: "Our Online Hifz Program at Al Saeed Quran Institute",
        text: "Our Hifz program includes daily one-on-one sessions with a certified Hafiz teacher, a personalized memorization plan based on your pace and schedule, regular revision sessions to ensure retention, progress tracking, and motivational support throughout your Hifz journey. We teach students from Pakistan, UAE, UK, USA, Canada and worldwide. Book your free trial Hifz class today!"
      }
    ]
  },
  {
    id: 4,
    slug: "tips-to-complete-hifz-quran-faster",
    title: "10 Proven Tips to Complete Hifz Quran Faster — Expert Advice",
    excerpt: "Want to become a Hafiz faster? These 10 expert-proven tips will help you memorize the Quran more effectively and maintain long-term retention.",
    category: "Hifz",
    image: "/assets/images/imageye___-_imgi_13_muslim-family-cartoon-characters_1308-135730.jpg",
    imageAlt: "Muslim family supporting child in Hifz ul Quran memorization journey",
    date: "May 20, 2025",
    readTime: "5 min read",
    tags: ["hifz tips", "quran memorization tips", "how to become hafiz", "hifz quran faster", "quran memorization techniques"],
    content: [
      {
        heading: "1. Set a Daily Memorization Goal",
        text: "The most important tip for successful Hifz is consistency. Set a realistic daily goal — whether it is 3 lines, 5 lines, or half a page — and stick to it every single day without exceptions. Even on busy days, memorize at least a few lines. Consistency beats intensity in Hifz."
      },
      {
        heading: "2. Memorize in the Morning After Fajr",
        text: "The time after Fajr prayer is the most blessed and productive time for memorization. The mind is fresh, the house is quiet, and there are fewer distractions. Scholars of Islam have always recommended memorizing Quran after Fajr for maximum retention."
      },
      {
        heading: "3. Listen Before You Memorize",
        text: "Before memorizing a new portion, listen to it being recited by a Qari multiple times. This helps your brain register the sound pattern of the verses, making memorization significantly easier and faster. Use apps like Quran.com or listen to Sheikh Mishary Rashid Al-Afasy."
      },
      {
        heading: "4. Use Repetition — The Key to Hifz",
        text: "Repetition is the mother of memorization. Repeat each new line at least 20–30 times before moving to the next line. Then connect lines together. This method, known as 'Tikraar', is used by all successful Huffaz worldwide."
      },
      {
        heading: "5. Never Skip Revision (Manzil)",
        text: "Many students make the mistake of only focusing on new memorization while neglecting revision of older portions. This leads to forgetting previously memorized portions. Divide your time: 30% for new memorization and 70% for revision. A Hafiz teacher will help you manage this balance."
      },
      {
        heading: "6–10. Additional Power Tips",
        text: "6. Recite your new memorization in every Salah. 7. Find a Hifz partner to test each other. 8. Understand the meaning — knowing Tafseer helps memory. 9. Make sincere dua to Allah for Tawfiq. 10. Work with a qualified Hafiz teacher who provides accountability and correct guidance. At Al Saeed Quran Institute, our Hafiz teachers guide students through all these strategies in personalized online sessions."
      }
    ]
  },

  // TAFSEER
  {
    id: 5,
    slug: "what-is-tafseer-ul-quran-importance-benefits",
    title: "What is Tafseer ul Quran? — Importance, Benefits and How to Learn Online",
    excerpt: "Tafseer ul Quran is the explanation and commentary of the Holy Quran. Learn what Tafseer is, why it is important, and how you can study Tafseer online with expert teachers.",
    category: "Tafseer",
    image: "/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg",
    imageAlt: "Muslims studying Tafseer ul Quran to understand the meaning of holy verses",
    date: "May 15, 2025",
    readTime: "5 min read",
    tags: ["tafseer ul quran", "what is tafseer", "quran commentary", "learn tafseer online", "understanding quran", "tafseer for beginners"],
    content: [
      {
        heading: "What is Tafseer ul Quran?",
        text: "Tafseer (تفسیر) literally means 'explanation' or 'interpretation'. Tafseer ul Quran is the academic discipline of explaining and interpreting the verses of the Holy Quran. A scholar of Tafseer explains what each verse means, the historical context in which it was revealed (Asbab ul Nuzool), how it connects to other verses and Ahadith, and what practical guidance it provides for Muslims."
      },
      {
        heading: "Why is Tafseer Important for Every Muslim?",
        text: "Allah SWT says: 'This is a Book We have sent down to you, full of blessings, so that people may ponder over its verses' (Surah Saad 38:29). Simply reading the Quran without understanding is beneficial, but understanding its deep meanings through Tafseer transforms your relationship with the Quran. Tafseer helps you understand Allah's commands, learn from the stories of the Prophets, and apply Quranic guidance in daily life."
      },
      {
        heading: "Famous Books of Tafseer",
        text: "The most well-known classical Tafseer works include Tafseer Ibn Katheer (most popular worldwide), Tafseer al-Jalalayn, Tafseer al-Tabari, Tafseer al-Qurtubi, and Tafseer al-Baghawi. In Urdu, Tafseer ibn Katheer translated by Maulana Abdul Daim Al-Khalil and Tafseer Usmani by Mufti Muhammad Shafi are widely studied. Our teachers use authentic classical sources in their Tafseer classes."
      },
      {
        heading: "Learn Tafseer Online with Al Saeed Quran Institute",
        text: "Our Tafseer program starts from Surah Al-Fatiha and progresses through the Quran systematically. We teach the meaning of each verse, its context of revelation, connection with Hadith, and practical life lessons. Classes are conducted in Urdu and English, making Tafseer accessible for students from all backgrounds. Both short Surahs for beginners and full Tafseer courses are available."
      },
      {
        heading: "Who Should Take Tafseer Classes?",
        text: "Tafseer classes are suitable for anyone who wants to deepen their understanding of the Quran — whether you are a student, professional, parent, or elderly person. You do not need to know Arabic to begin Tafseer. Our teachers explain everything in simple Urdu and English. Many parents take Tafseer classes to better teach their children the meaning of the Quran."
      }
    ]
  },
  {
    id: 6,
    slug: "top-surahs-tafseer-every-muslim-should-know",
    title: "Top 10 Surahs Every Muslim Should Learn Tafseer Of — Deep Meaning Guide",
    excerpt: "These 10 Surahs contain some of the most powerful messages in the Holy Quran. Learning their Tafseer will transform your understanding of Islam and your daily life.",
    category: "Tafseer",
    image: "/assets/images/imageye___-_imgi_9_vector-young-muslim-man-reading-quran_844724-24573.jpg",
    imageAlt: "Muslim studying the deep Tafseer and meanings of important Surahs of Quran",
    date: "May 10, 2025",
    readTime: "6 min read",
    tags: ["tafseer important surahs", "surah tafseer", "quran meaning", "important surahs islam", "surah al fatiha tafseer", "surah yaseen tafseer"],
    content: [
      {
        heading: "1. Surah Al-Fatiha — The Opening",
        text: "Surah Al-Fatiha is recited in every Rakat of Salah — a minimum of 17 times daily. Its Tafseer reveals that it is a complete dua (supplication) in which we ask Allah for guidance to the straight path. The Prophet ﷺ called it 'Umm ul Quran' (Mother of the Quran). Understanding its deep meaning transforms every Salah into a meaningful conversation with Allah."
      },
      {
        heading: "2. Surah Al-Baqarah — Protection and Guidance",
        text: "The longest Surah in the Quran, Surah Al-Baqarah contains Ayat ul Kursi (the greatest verse in the Quran), the last two verses (Amana Rasool), Islamic laws on many matters, and the story of Bani Israel. Its Tafseer provides comprehensive guidance for the life of a Muslim. The Prophet ﷺ said that Shaytan does not enter a house where Surah Baqarah is recited."
      },
      {
        heading: "3. Surah Al-Kahf — Protection from Dajjal",
        text: "Reciting Surah Al-Kahf on Fridays protects from Dajjal, as mentioned in authentic Hadith. Its four stories — the People of the Cave, the Two Garden Owners, Prophet Musa and Khidr, and Dhul Qarnayn — each contain profound lessons about faith, wealth, knowledge, and power. Its Tafseer is essential for understanding these parables."
      },
      {
        heading: "4–10. Other Essential Surahs",
        text: "Other essential Surahs to learn Tafseer of include: Surah Yaseen (heart of the Quran), Surah Al-Mulk (protection from grave punishment), Surah Al-Waqiah (protection from poverty), Surah Al-Rahman (Allah's blessings), Surah Al-Ikhlas (equal to one-third of Quran), Surah Al-Falaq and Al-Nas (protection duas). Our Tafseer teachers at Al Saeed Quran Institute cover all these Surahs with deep explanation and practical lessons."
      }
    ]
  },

  // NORANI QAIDA
  {
    id: 7,
    slug: "what-is-norani-qaida-how-to-learn-for-kids",
    title: "What is Norani Qaida? — How to Teach Kids Quran Reading from Scratch",
    excerpt: "Norani Qaida is the foundation of Quranic education. Learn what Norani Qaida is, why it is the best starting point for children, and how to begin online classes today.",
    category: "Norani Qaida",
    image: "/assets/images/imageye___-_imgi_8_boy-is-reading-quran-with-headphones_921485-506.jpg",
    imageAlt: "Young child learning Norani Qaida Arabic alphabet for Quran reading online",
    date: "May 5, 2025",
    readTime: "4 min read",
    tags: ["norani qaida", "norani qaida for kids", "learn arabic alphabet", "quran for beginners", "quran reading for children", "how to start quran"],
    content: [
      {
        heading: "What is Norani Qaida?",
        text: "Norani Qaida (نورانی قاعدہ) is an educational booklet specifically designed to teach beginners — especially children — the Arabic alphabet and the basics of Quranic reading. It was compiled by Maulana Noor Muhammad Ludhianvi and has been used for over a century across Pakistan, India, and the Muslim world to teach children how to read the Quran from scratch."
      },
      {
        heading: "What Does Norani Qaida Teach?",
        text: "Norani Qaida teaches: Recognition of all 29 Arabic letters in their different forms (beginning, middle, end, standalone), short vowels (Zabar, Zer, Pesh), Tanween, Sukoon, Shaddah, Madd letters, joining letters to form words, and basic Tajweed rules. By completing Norani Qaida, a student is fully prepared to begin reading the Holy Quran."
      },
      {
        heading: "At What Age Should a Child Start Norani Qaida?",
        text: "Children can start learning Norani Qaida from as young as 4 years old. The ideal age is between 4–7 years, when children have excellent memory retention and language learning ability. However, adults who have never learned to read the Quran can also benefit greatly from Norani Qaida classes. It is never too late to start!"
      },
      {
        heading: "How Long Does Norani Qaida Take to Complete?",
        text: "With regular daily practice, Norani Qaida can be completed in 3–6 months for most children. Children who practice 15–20 minutes daily with a qualified teacher progress very quickly. Adult learners may complete it in 2–4 months. At Al Saeed Quran Institute, our teachers use engaging and interactive methods to make Norani Qaida fun and easy for kids."
      },
      {
        heading: "Enroll Your Child in Online Norani Qaida Classes",
        text: "At Al Saeed Quran Institute, our qualified female and male teachers specialize in teaching young children. We create a fun, encouraging, and structured learning environment. Classes are 30 minutes long, held 5 days a week, and conducted via Zoom or WhatsApp. Students from Pakistan, UAE, UK, USA and worldwide are welcome. Book a free trial class today!"
      }
    ]
  },
  {
    id: 8,
    slug: "norani-qaida-lessons-arabic-letters-guide",
    title: "Norani Qaida Lessons — Complete Guide to Arabic Letters and Quran Reading",
    excerpt: "A step-by-step guide through all Norani Qaida lessons. Learn how Arabic letters work, how vowels are applied, and how to progress from Qaida to full Quran reading.",
    category: "Norani Qaida",
    image: "/assets/images/imageye___-_imgi_13_muslim-family-cartoon-characters_1308-135730.jpg",
    imageAlt: "Muslim family teaching children Norani Qaida and Arabic letters at home",
    date: "April 30, 2025",
    readTime: "5 min read",
    tags: ["norani qaida lessons", "arabic letters guide", "arabic alphabet for beginners", "quran reading basics", "arabic vowels", "norani qaida online"],
    content: [
      {
        heading: "Lesson 1 — The Arabic Alphabet (حروف تہجی)",
        text: "The Arabic alphabet consists of 29 letters. Unlike English, Arabic is written and read from right to left. Each letter has up to four different forms depending on its position in a word. Norani Qaida begins by teaching students to recognize and pronounce each letter individually with its correct Makhraj (point of articulation)."
      },
      {
        heading: "Lesson 2 — Short Vowels (حرکات)",
        text: "After learning the alphabet, students learn the three short vowels: Zabar (Fathah) — pronounced as 'a', Zer (Kasrah) — pronounced as 'i', and Pesh (Dammah) — pronounced as 'u'. These vowels are written above or below letters and tell you how to pronounce each letter in a word. This lesson is crucial for reading the Quran."
      },
      {
        heading: "Lesson 3 — Tanween, Sukoon and Shaddah",
        text: "Tanween adds a 'n' sound to the end of words (an, in, un). Sukoon (ساکن) means the letter has no vowel and must be held briefly. Shaddah (تشدید) means the letter is doubled — the first has Sukoon and the second has a vowel. These three symbols are used constantly throughout the Quran and are essential to learn properly."
      },
      {
        heading: "Lesson 4 — Madd (Elongation) Letters",
        text: "Madd means elongation. When the letters Alif, Waw, or Ya appear after certain vowels, the sound is elongated for 2, 4, or 6 counts depending on the Madd rule. Norani Qaida introduces students to basic Madd rules so they can practice elongation correctly before moving to the full Quran."
      },
      {
        heading: "From Norani Qaida to Reading the Quran",
        text: "After completing all lessons of Norani Qaida, students practice joining letters and reading short words and phrases from the Quran. This bridges the gap between Qaida and actual Quran reading. At Al Saeed Quran Institute, our teachers ensure students are fully confident before starting the actual Quran. Progress is tracked lesson by lesson to ensure strong foundations."
      }
    ]
  },

  // ARABIC GRAMMAR
  {
    id: 9,
    slug: "why-learn-arabic-grammar-to-understand-quran",
    title: "Why Learning Arabic Grammar is Essential to Understand the Quran",
    excerpt: "Arabic Grammar (Nahu and Sarf) is the key to unlocking the true meaning of the Holy Quran. Discover why Arabic grammar is essential for every Quran student and how to begin.",
    category: "Arabic Grammar",
    image: "/assets/images/imageye___-_imgi_9_vector-young-muslim-man-reading-quran_844724-24573.jpg",
    imageAlt: "Muslim student learning Arabic grammar to understand the Holy Quran deeply",
    date: "April 25, 2025",
    readTime: "5 min read",
    tags: ["arabic grammar", "learn arabic grammar online", "nahu sarf", "arabic for quran", "understand quran arabic", "arabic language online"],
    content: [
      {
        heading: "What is Arabic Grammar (Nahu and Sarf)?",
        text: "Arabic grammar is divided into two main disciplines: Nahu (نحو) — Syntax, which studies how words are connected in a sentence and the roles they play (subject, verb, object), and Sarf (صرف) — Morphology, which studies the structure of Arabic words and how they change form. Together, Nahu and Sarf give you the tools to analyze and understand any Arabic sentence — including Quranic verses."
      },
      {
        heading: "How Arabic Grammar Helps You Understand the Quran",
        text: "The Holy Quran was revealed in classical Arabic — the most eloquent and precise form of the Arabic language. Every word in the Quran is chosen with extreme precision, and its grammatical structure carries deep meaning. For example, knowing whether a word is the subject or object of a sentence changes the entire meaning of a verse. Arabic grammar unlocks layers of meaning that are invisible in translations."
      },
      {
        heading: "Famous Arabic Grammar Books for Beginners",
        text: "The most popular books for learning Arabic grammar include: Ilm ul Nahu by Maulana Abdul Kareem Parekh (widely used in Pakistan), Al-Ajrumiyyah (classical beginner text), Hidayat ul Nahu, and Mirqat al-Wusool. Our teachers at Al Saeed Quran Institute use these texts alongside practical Quranic examples to make grammar learning engaging and directly applicable."
      },
      {
        heading: "Is Arabic Grammar Difficult to Learn Online?",
        text: "Many students find Arabic grammar challenging at first, but with the right teacher and approach it becomes very manageable. The key is learning grammar through Quranic examples rather than dry exercises. Our teachers connect every grammar rule directly to verses from the Quran, making the learning practical and motivating. Most students begin understanding Quranic Arabic within 6–12 months of regular study."
      },
      {
        heading: "Arabic Grammar Classes at Al Saeed Quran Institute",
        text: "Our Arabic Grammar program is structured in three levels: Beginner (Arabic alphabet, basic sentence structure), Intermediate (Nahu and Sarf rules with Quranic application), and Advanced (analysis of Quranic verses grammatically). Classes are available for adults and older students (12+). Book your free trial Arabic Grammar class via WhatsApp today!"
      }
    ]
  },
  {
    id: 10,
    slug: "basic-arabic-grammar-rules-every-quran-student-must-know",
    title: "10 Basic Arabic Grammar Rules Every Quran Student Must Know",
    excerpt: "Master these 10 essential Arabic grammar rules and you will immediately start understanding more of the Holy Quran. A beginner-friendly guide from Al Saeed Quran Institute.",
    category: "Arabic Grammar",
    image: "/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg",
    imageAlt: "Students learning basic Arabic grammar rules to understand Holy Quran",
    date: "April 20, 2025",
    readTime: "6 min read",
    tags: ["arabic grammar rules", "basic arabic grammar", "arabic sentence structure", "nahu rules", "arabic for beginners", "quran arabic grammar"],
    content: [
      {
        heading: "Rule 1 — Ism, Fiil, Harf (Noun, Verb, Particle)",
        text: "Every word in Arabic belongs to one of three categories: Ism (اسم) — a noun or name of a person, place, or thing; Fiil (فعل) — a verb describing an action; Harf (حرف) — a particle such as a preposition or conjunction. Knowing which category a word belongs to is the first step in Arabic grammar analysis."
      },
      {
        heading: "Rule 2 — Mubtada and Khabar (Subject and Predicate)",
        text: "A nominal sentence in Arabic consists of Mubtada (subject) and Khabar (predicate). For example, 'Allahu Akbar' — Allah (Mubtada) is Greatest (Khabar). Both must be in the nominative case (Raf) and must match in gender and number. This rule appears constantly throughout Quranic verses."
      },
      {
        heading: "Rule 3 — Muzakkar and Muannath (Masculine and Feminine)",
        text: "Arabic nouns are either Muzakkar (masculine) or Muannath (feminine). Feminine nouns usually end with a round Taa (ة) or have specific patterns. This affects verb conjugation, adjective agreement, and pronoun usage. Misidentifying gender can change the meaning of a sentence entirely."
      },
      {
        heading: "Rule 4 — Mufrad, Muthanna, Jama (Singular, Dual, Plural)",
        text: "Arabic has three numbers: Mufrad (singular — one), Muthanna (dual — two, formed by adding اَن or يْن), and Jama (plural — three or more). The Quran frequently uses all three forms. For example, the word for 'eye' appears as singular, dual (two eyes), and plural in different verses, each carrying distinct meaning."
      },
      {
        heading: "Rules 5–10 — Advanced Essential Rules",
        text: "5. Faa'il (Subject of a verb sentence) and Maf'ool Bihi (Object). 6. Three grammatical cases: Raf (nominative), Nasb (accusative), Jarr (genitive). 7. Idhafah — possession structure (e.g. 'Book of Allah'). 8. Sifah and Mawsoof — adjective must match noun. 9. Past, Present, and Command verb forms. 10. Pronoun types and their suffixes. Learning all these rules with Quranic examples is the most effective approach, which is exactly how we teach at Al Saeed Quran Institute."
      }
    ]
  },

  // HADIS
  {
    id: 11,
    slug: "importance-of-hadith-in-islam-for-beginners",
    title: "The Importance of Hadith in Islam — A Beginner's Complete Guide",
    excerpt: "Hadith is the second most important source of Islamic knowledge after the Holy Quran. Learn what Hadith is, its types, and why every Muslim should study it.",
    category: "Hadis",
    image: "/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg",
    imageAlt: "Muslim scholar studying Hadith books — importance of Hadith in Islam",
    date: "April 15, 2025",
    readTime: "5 min read",
    tags: ["importance of hadith", "what is hadith", "hadith in islam", "learn hadith online", "hadith for beginners", "sunnah of prophet"],
    content: [
      {
        heading: "What is Hadith?",
        text: "Hadith (حدیث) refers to the recorded sayings, actions, approvals, and descriptions of the Prophet Muhammad ﷺ. The plural is Ahadith. Hadith is the second primary source of Islamic law and guidance after the Holy Quran. Allah SWT says: 'And whatever the Messenger gives you, take it; and whatever he forbids you, abstain from it' (Surah Hashr 59:7)."
      },
      {
        heading: "Types of Hadith",
        text: "Hadith are classified by their authenticity: Sahih (authentic), Hasan (good), Da'if (weak), and Mawdu (fabricated). The six most famous Hadith collections are: Sahih Bukhari, Sahih Muslim, Sunan Abu Dawud, Jami at-Tirmidhi, Sunan al-Nasai, and Sunan ibn Majah — collectively known as the 'Kutub al-Sitta' (Six Books)."
      },
      {
        heading: "Why Should Every Muslim Learn Hadith?",
        text: "The Quran gives us general commands, and Hadith provides the detailed explanation and practical implementation. For example, the Quran commands us to pray (Salah), but it is Hadith that tells us how to pray — the exact words, positions, number of Rakats, and conditions. Without Hadith, we cannot fully practice Islam. Our Mukhtasir Hadis course covers the most important and practical Ahadith for everyday Muslim life."
      },
      {
        heading: "Most Important Ahadith Every Muslim Should Know",
        text: "The Forty Hadith of Imam Nawawi is the most famous collection of essential Ahadith. It includes: 'Actions are judged by intentions' (Bukhari), 'The religion is sincerity' (Muslim), 'None of you truly believes until he loves for his brother what he loves for himself' (Bukhari), and 'The strong man is not the one who wrestles, but the one who controls himself when angry' (Bukhari)."
      },
      {
        heading: "Learn Mukhtasir Hadis Online with Al Saeed Quran Institute",
        text: "Our Mukhtasir Hadis course covers the most important and practical Ahadith from authentic collections with Urdu explanation and practical lessons for daily life. Classes are suitable for all ages and levels. No prior knowledge of Arabic is required. Book your free trial class today and start your journey with the Sunnah of the Prophet ﷺ."
      }
    ]
  },
  {
    id: 12,
    slug: "40-hadith-nawawi-every-muslim-must-memorize",
    title: "40 Hadith of Imam Nawawi — Essential Ahadith Every Muslim Must Know",
    excerpt: "The 40 Hadith of Imam Nawawi are considered the foundation of Islamic knowledge. Learn the most important ones and how they guide every aspect of a Muslim's life.",
    category: "Hadis",
    image: "/assets/images/imageye___-_imgi_9_vector-young-muslim-man-reading-quran_844724-24573.jpg",
    imageAlt: "Muslim learning the 40 Hadith of Imam Nawawi — essential Islamic knowledge",
    date: "April 10, 2025",
    readTime: "5 min read",
    tags: ["40 hadith nawawi", "imam nawawi hadith", "important hadith", "essential ahadith", "hadith for daily life", "sunnah prophet muhammad"],
    content: [
      {
        heading: "Who was Imam Nawawi?",
        text: "Imam Yahya ibn Sharaf al-Nawawi (1233–1277 CE) was one of the greatest Islamic scholars in history. He was a master of Hadith, Fiqh (Islamic jurisprudence), and Arabic language. His 40 Hadith collection — Al-Arba'in al-Nawawiyyah — was compiled to teach the most fundamental principles of Islam through the words of the Prophet ﷺ."
      },
      {
        heading: "Hadith 1 — Actions by Intentions",
        text: "'Actions are judged by intentions, and each person will get what they intended. Whoever's migration was for Allah and His Messenger, his migration is for Allah and His Messenger. Whoever migrated for worldly gain or to marry a woman, then his migration is for whatever he migrated for.' (Bukhari & Muslim). This Hadith teaches that sincerity of intention is the foundation of all Islamic worship and actions."
      },
      {
        heading: "Hadith 2 — The Five Pillars of Islam",
        text: "'Islam is built upon five pillars: Testimony that there is no god but Allah and Muhammad is His Messenger, establishing Salah, paying Zakah, performing Hajj, and fasting in Ramadan.' (Bukhari & Muslim). This Hadith summarizes the entire practical structure of Islam in a single statement."
      },
      {
        heading: "Hadith 6 — Halal and Haram are Clear",
        text: "'The halal is clear and the haram is clear, and between them are doubtful matters which many people do not know. Whoever avoids doubtful matters has protected his religion and his honor. Whoever falls into doubtful matters will fall into the haram — like a shepherd who grazes near a protected area and is likely to enter it.' (Bukhari & Muslim). This Hadith provides a practical guide for Islamic decision-making."
      },
      {
        heading: "Study the 40 Hadith with Al Saeed Quran Institute",
        text: "Our Mukhtasir Hadis course covers the 40 Hadith of Imam Nawawi with detailed Urdu explanation, practical life lessons, and memorization assistance. Students learn not just the text of each Hadith but its meaning, context, and application in modern Muslim life. Start with a free trial class today via WhatsApp!"
      }
    ]
  },

  // DUAEN
  {
    id: 13,
    slug: "essential-daily-duas-every-muslim-should-know",
    title: "20 Essential Daily Duas Every Muslim Should Know — Mukhtasir Duaen Guide",
    excerpt: "These 20 daily duas from the Quran and Sunnah will protect and guide you throughout your day. Learn them with proper Arabic pronunciation and meaning.",
    category: "Duaen",
    image: "/assets/images/imageye___-_imgi_13_muslim-family-cartoon-characters_1308-135730.jpg",
    imageAlt: "Muslim family making dua together — learning essential daily duas from Quran and Sunnah",
    date: "April 5, 2025",
    readTime: "5 min read",
    tags: ["daily duas", "duas from quran", "mukhtasir duaen", "morning duas", "evening duas", "duas for protection", "daily islamic prayers"],
    content: [
      {
        heading: "Why Learn Daily Duas?",
        text: "Dua (دعا) is the weapon of the believer. Allah SWT says: 'Call upon Me, I will respond to you' (Surah Ghafir 40:60). The Prophet ﷺ taught us specific duas for every occasion — waking up, eating, entering the home, leaving home, before sleeping, and more. Learning these duas connects every moment of your daily life with the remembrance of Allah."
      },
      {
        heading: "Morning Duas (Azkar al-Sabah)",
        text: "After Fajr prayer, recite: 1. Ayat ul Kursi (protection all day), 2. Surah Al-Ikhlas, Al-Falaq, Al-Nas (three times each — complete protection), 3. 'Asbahna wa asbahal mulku lillah...' (morning dua of the Prophet ﷺ), 4. 'Allahumma bika asbahna...' (seeking Allah's blessing in the morning). These morning duas create a spiritual shield for the entire day."
      },
      {
        heading: "Duas Before and After Eating",
        text: "Before eating: 'Bismillah' and if you forget: 'Bismillah fi awwalihi wa akhirihi'. After eating: 'Alhamdulillahil-lathee at'amana wa saqaana wa ja'alana Muslimeen' (Praise to Allah who fed us and made us Muslims). Teaching these duas to children from a young age builds lifelong Islamic habits."
      },
      {
        heading: "Duas for Entering and Leaving Home",
        text: "Entering home: 'Bismillahi walajnaa, wa bismillahi kharajnaa, wa 'alaa Rabbinaa tawakkalnaa' (In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we rely). Leaving home: 'Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah' — reciting this dua protects you from every harm throughout the day."
      },
      {
        heading: "Learn All Essential Duas with Al Saeed Quran Institute",
        text: "Our Mukhtasir Duaen course covers 50+ essential duas from the Quran and authentic Sunnah — with Arabic text, transliteration, Urdu translation, and audio pronunciation guidance. Students learn the correct pronunciation and memorize duas step by step. This course is perfect for all ages, including young children. Book your free trial class via WhatsApp today!"
      }
    ]
  },
  {
    id: 14,
    slug: "powerful-duas-from-quran-for-daily-life",
    title: "10 Most Powerful Duas from the Holy Quran for Daily Life",
    excerpt: "The Quran contains the most powerful duas ever recited. These 10 Quranic duas for protection, forgiveness, guidance, and success will transform your daily worship.",
    category: "Duaen",
    image: "/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg",
    imageAlt: "Muslim making dua with Quran — powerful duas from Holy Quran for daily life",
    date: "March 30, 2025",
    readTime: "5 min read",
    tags: ["duas from quran", "powerful quranic duas", "dua for protection", "dua for forgiveness", "dua for success", "quran duas daily life"],
    content: [
      {
        heading: "1. Dua for Guidance — Surah Al-Fatiha",
        text: "'Ihdinas-siraatal mustaqeem' — 'Guide us to the straight path' (Surah Al-Fatiha 1:6). This is the greatest dua in the Quran, recited at least 17 times daily in Salah. It asks Allah for guidance to the right path in every matter of life. The straight path is the path of those whom Allah has blessed — the Prophets, Truthful, Martyrs, and Righteous."
      },
      {
        heading: "2. Dua of Prophet Ibrahim — Forgiveness for Parents",
        text: "'Rabbana-ghfir li wa li-waalidayya wa lil-mu'mineena yawma yaqoomul-hisaab' — 'Our Lord, forgive me and my parents and the believers on the Day of Reckoning' (Surah Ibrahim 14:41). This beautiful dua by Prophet Ibrahim ﷺ asks for forgiveness for oneself, parents, and all Muslims. Teach this dua to your children to recite for you daily."
      },
      {
        heading: "3. Dua for Mercy — Surah Al-Isra",
        text: "'Rabbir-hamhuma kama rabbayaani sagheera' — 'My Lord, have mercy on them as they raised me when I was small' (Surah Al-Isra 17:24). This dua is specifically for parents and is one of the most virtuous duas a child can make. The Prophet ﷺ greatly emphasized kindness and dua for parents."
      },
      {
        heading: "4. Dua for Anxiety and Distress",
        text: "'Hasbiyallahu la ilaha illa huwa, 'alayhi tawakkaltu wa huwa Rabbul 'arshil 'adheem' — 'Allah is sufficient for me; there is no god but Him. On Him I have relied, and He is the Lord of the Great Throne' (Surah At-Tawbah 9:129). Recite this dua 7 times morning and evening for relief from all worries and anxieties."
      },
      {
        heading: "5–10. More Essential Quranic Duas",
        text: "5. Dua of Prophet Yunus (AS) in the whale: 'La ilaha illa anta subhanaka inni kuntu minaz-zalimeen'. 6. Dua for a righteous spouse and children: 'Rabbana hab lana min azwajina...' (Surah Furqan 25:74). 7. Dua of Prophet Musa (AS): 'Rabbi inni lima anzalta ilayya min khayrin faqeer'. 8. Dua for knowledge: 'Rabbi zidni ilma'. 9. Dua before sleeping: Ayat ul Kursi. 10. Dua for entering Paradise: 'Rabbana atina fid-dunya hasanatan...' — Our Mukhtasir Duaen course covers all these duas with memorization and pronunciation practice."
      }
    ]
  },

  // TARJAMA
  {
    id: 15,
    slug: "why-learn-tarjama-tul-quran-benefits",
    title: "Why Every Muslim Should Learn Tarjama tul Quran — Benefits and How to Start",
    excerpt: "Understanding the Quran's translation (Tarjama) is a life-changing experience. Discover the immense benefits of learning Tarjama tul Quran and how to begin your journey.",
    category: "Tarjama",
    image: "/assets/images/imageye___-_imgi_5_muslims-reading-from-quran_53876-20958.jpg",
    imageAlt: "Muslim reading Tarjama ul Quran — understanding the translation of Holy Quran",
    date: "March 25, 2025",
    readTime: "5 min read",
    tags: ["tarjama tul quran", "quran translation urdu", "understand quran meaning", "quran in urdu", "learn quran meaning", "quran translation online"],
    content: [
      {
        heading: "What is Tarjama tul Quran?",
        text: "Tarjama (ترجمہ) means translation. Tarjama tul Quran refers to learning the word-by-word or verse-by-verse translation of the Holy Quran in your native language — most commonly Urdu or English. While the Quran can only be perfectly understood in Arabic, learning its Tarjama allows millions of non-Arabic speaking Muslims to access its guidance, commands, and wisdom."
      },
      {
        heading: "The Quran's Command to Reflect on Its Meaning",
        text: "Allah SWT says: 'This is a Book We have revealed to you, full of blessing, so they may reflect on its verses' (Surah Saad 38:29). And: 'Do they not reflect on the Quran? Had it been from any other than Allah, they would surely have found in it many contradictions' (Surah Nisa 4:82). These verses make clear that merely reciting the Quran is not enough — we must understand and reflect on its meaning."
      },
      {
        heading: "Life-Changing Benefits of Learning Tarjama",
        text: "1. Your Salah transforms — knowing what you recite makes every prayer deeply meaningful. 2. You understand Allah's commands directly. 3. You can teach your children the meaning of Quranic verses. 4. Your faith (Iman) increases as you read Allah's own words with understanding. 5. You understand duas and make them with full awareness. 6. Protection from misunderstandings and wrong interpretations of Islam."
      },
      {
        heading: "Best Urdu Translations of the Quran",
        text: "The most respected Urdu translations include: Kanz ul Iman by Ala Hazrat (popular in Barelvi tradition), Tafseer ul Quran by Shah Abdul Qadir, Translation by Mufti Muhammad Taqi Usmani, and Translation by Shah Rafiuddin. For English, Saheeh International and Abdullah Yusuf Ali translations are widely used. Our teachers use simple, accessible language to explain Tarjama to students of all backgrounds."
      },
      {
        heading: "Start Tarjama tul Quran Classes at Al Saeed Quran Institute",
        text: "Our Tarjama course begins from Surah Al-Fatiha and progresses through the Quran systematically. You will learn the meaning of every verse in simple Urdu or English with brief explanation. Classes are available for adults, elders, and young people from age 12 and above. No previous Islamic knowledge required. Book your free trial class via WhatsApp today!"
      }
    ]
  },
  {
    id: 16,
    slug: "understand-quran-without-knowing-arabic",
    title: "Can You Understand the Quran Without Knowing Arabic? — Tarjama Guide",
    excerpt: "Many Muslims wonder if they can understand the Quran without knowing Arabic. The answer is yes — through Tarjama. Learn how Quran translation helps you connect with Allah's words.",
    category: "Tarjama",
    image: "/assets/images/imageye___-_imgi_13_muslim-family-cartoon-characters_1308-135730.jpg",
    imageAlt: "Muslim family reading Quran translation together to understand meaning without Arabic",
    date: "March 20, 2025",
    readTime: "4 min read",
    tags: ["understand quran without arabic", "quran translation", "quran meaning in urdu", "non arabic quran", "quran for non arabic speakers", "tarjama quran"],
    content: [
      {
        heading: "Can Non-Arabic Muslims Understand the Quran?",
        text: "Absolutely yes! Over 80% of the world's 1.8 billion Muslims do not speak Arabic as their native language. Allah SWT has made the Quran accessible to everyone. Learning Tarjama (translation) of the Quran in Urdu, English, or your native language is a completely valid and highly recommended way to access the Quran's guidance. In fact, the Companions of the Prophet ﷺ used to memorize small portions of the Quran and deeply understand their meaning before moving forward."
      },
      {
        heading: "The Difference Between Tarjama and Tafseer",
        text: "Tarjama is a direct translation — converting Quranic Arabic into another language word by word or verse by verse. Tafseer is a deeper commentary that explains context, background, rulings, and scholarly interpretations. Tarjama is the first level — it gives you the basic meaning. Tafseer goes deeper. We recommend all students start with Tarjama and then progress to Tafseer for deeper understanding."
      },
      {
        heading: "How Tarjama Changes Your Salah",
        text: "Imagine reciting Surah Al-Fatiha 17 times a day for years without knowing what you are saying. Now imagine understanding each word: 'Al-hamdu lillahi Rabbil 'alameen' — All praise is for Allah, Lord of all the worlds. 'Ar-Rahmanir-Raheem' — The Most Gracious, Most Merciful. 'Iyyaka na'budu wa iyyaka nasta'een' — You alone we worship, You alone we ask for help. Knowing the Tarjama completely transforms the spiritual experience of Salah."
      },
      {
        heading: "Tips for Learning Quran Translation Effectively",
        text: "1. Start with short Surahs you already know — learn their translation first. 2. Use a good Urdu or English translation alongside your Quran. 3. Take notes on important verses. 4. Discuss what you learn with family. 5. Enroll in an online Tarjama class for structured guidance. 6. Make dua before every study session asking Allah to grant you understanding. 7. Apply what you learn in daily life."
      },
      {
        heading: "Begin Your Tarjama Journey with Al Saeed Quran Institute",
        text: "Our Tarjama tul Quran course is the perfect starting point for any Muslim who wants to understand the Quran in Urdu or English. Our teachers explain the meaning of every verse in simple, accessible language. Classes are available for all ages — from teenagers to elderly. Students from Pakistan, UAE, UK, USA and worldwide are currently enrolled. Book your FREE first class on WhatsApp!"
      }
    ]
  },
]

const filteredBlogs = computed(() => {
  if (selectedCategory.value === 'All') return blogs
  return blogs.filter(b => b.category === selectedCategory.value)
})
</script>

<template>
  <div style="min-height: 100vh; background: #f9fafb;">

    <!-- SEO Hidden Content -->
    <div style="display: none;" aria-hidden="true">
      <h1>Al Saeed Quran Institute Blog — Online Quran Learning Articles</h1>
      <p>Learn about Tajweed ul Quran, Hifz ul Quran, Tafseer ul Quran, Norani Qaida, Arabic Grammar, Mukhtasir Hadis, Daily Duas and Tarjama tul Quran with expert articles from Al Saeed Quran Institute.</p>
    </div>

    <!-- Header -->
    <div style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; text-align: center; padding: 80px 20px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: -40px; right: -40px; width: 200px; height: 200px; border: 2px solid rgba(255,255,255,0.08); border-radius: 50%;"></div>
      <div style="position: absolute; bottom: -60px; left: -60px; width: 280px; height: 280px; border: 2px solid rgba(255,255,255,0.06); border-radius: 50%;"></div>
      <div style="position: relative; z-index: 1;">
        <span style="background: rgba(255,255,255,0.15); font-size: 12px; font-weight: 700; padding: 6px 18px; border-radius: 50px; display: inline-block; margin-bottom: 16px;">📝 Islamic Learning Blog</span>
        <h1 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; margin: 0 0 12px;">Quran Learning Blog</h1>
        <p style="color: #c4b5fd; font-size: 17px; max-width: 600px; margin: 0 auto;">
          Expert articles on Tajweed, Hifz, Tafseer, Norani Qaida, Arabic Grammar and more — to help you on your Quranic journey.
        </p>
      </div>
    </div>

    <!-- Category Filter -->
    <div style="background: white; border-bottom: 1px solid #f3f4f6; padding: 16px 20px; position: sticky; top: 68px; z-index: 40; overflow-x: auto;">
      <div style="max-width: 1152px; margin: 0 auto; display: flex; gap: 10px; flex-wrap: nowrap; min-width: max-content;">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :style="`
            padding: 8px 18px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            font-size: 13px;
            font-weight: 700;
            transition: all 0.2s;
            white-space: nowrap;
            background: ${selectedCategory === cat ? 'linear-gradient(135deg,#7c3aed,#6d28d9)' : '#f5f3ff'};
            color: ${selectedCategory === cat ? 'white' : '#7c3aed'};
            box-shadow: ${selectedCategory === cat ? '0 4px 12px rgba(124,58,237,0.3)' : 'none'};
          `">
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Blog Grid -->
    <div style="max-width: 1152px; margin: 0 auto; padding: 48px 20px;">
      <p style="color: #9ca3af; font-size: 13px; margin: 0 0 32px;">
        Showing <strong style="color: #374151;">{{ filteredBlogs.length }}</strong> articles
        <span v-if="selectedCategory !== 'All'"> in <strong style="color: #7c3aed;">{{ selectedCategory }}</strong></span>
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 28px;">
        <article
          v-for="blog in filteredBlogs"
          :key="blog.id"
          :itemscope="true"
          itemtype="https://schema.org/BlogPosting"
          style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); transition: all 0.3s; display: flex; flex-direction: column;"
          onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(124,58,237,0.12)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 16px rgba(0,0,0,0.06)'">

          <!-- Hidden SEO Meta -->
          <meta itemprop="datePublished" :content="blog.date" />
          <meta itemprop="author" content="Al Saeed Quran Institute" />
          <meta itemprop="publisher" content="Al Saeed Quran Institute" />
          <meta itemprop="keywords" :content="blog.tags.join(', ')" />

          <!-- Image -->
          <div style="position: relative; overflow: hidden; height: 200px;">
            <img
              :src="blog.image"
              :alt="blog.imageAlt"
              :title="blog.title"
              loading="lazy"
              itemprop="image"
              style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s;"
              onmouseover="this.style.transform='scale(1.05)'"
              onmouseout="this.style.transform='scale(1)'"
            />
            <div style="position: absolute; top: 12px; left: 12px;">
              <span style="background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 50px;">
                {{ blog.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
              <span style="color: #9ca3af; font-size: 12px;">📅 {{ blog.date }}</span>
              <span style="color: #9ca3af; font-size: 12px;">⏱ {{ blog.readTime }}</span>
            </div>

            <h2 itemprop="headline"
              style="font-size: 16px; font-weight: 800; color: #111827; margin: 0 0 10px; line-height: 1.4;">
              {{ blog.title }}
            </h2>

            <p itemprop="description"
              style="color: #6b7280; font-size: 13px; line-height: 1.7; margin: 0 0 16px; flex: 1;">
              {{ blog.excerpt }}
            </p>

            <!-- Tags -->
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
              <span
                v-for="tag in blog.tags.slice(0, 3)"
                :key="tag"
                style="background: #f5f3ff; color: #7c3aed; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 50px;">
                #{{ tag }}
              </span>
            </div>

            <router-link
              :to="`/blog/${blog.slug}`"
              style="display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg,#7c3aed,#6d28d9); color: white; font-weight: 700; padding: 12px; border-radius: 12px; text-decoration: none; font-size: 13px; transition: opacity 0.2s;"
              onmouseover="this.style.opacity='0.9'"
              onmouseout="this.style.opacity='1'">
              Read Full Article →
            </router-link>
          </div>
        </article>
      </div>
    </div>

    <!-- CTA -->
    <div style="background: linear-gradient(135deg,#7c3aed,#6d28d9); text-align: center; padding: 60px 20px; margin-top: 20px;">
      <h2 style="font-size: 28px; font-weight: 900; color: white; margin: 0 0 12px;">Ready to Start Learning?</h2>
      <p style="color: #ddd6fe; margin: 0 0 28px; font-size: 15px;">Join 500+ students at Al Saeed Quran Institute. First class is FREE!</p>
      <a href="https://wa.me/923198839708?text=Assalamualaikum%20I%20read%20your%20blog%20and%20want%20to%20book%20a%20free%20trial"
        target="_blank"
        style="display: inline-flex; align-items: center; gap: 10px; background: white; color: #7c3aed; font-weight: 800; padding: 14px 36px; border-radius: 50px; text-decoration: none; font-size: 15px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);">
        📅 Book Free Trial Class
      </a>
    </div>
  </div>
</template>
