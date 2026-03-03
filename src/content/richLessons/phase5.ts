import type { RichLesson } from '../lessonTypes'

// Phase 5: Sentences (Lessons 21-25)
// SVO order, negation, questions, tense, adjectives -- reading full sentences.

export const phase5Lessons: RichLesson[] = [
  // === LESSON 21: Basic Word Order (SVO) ===
  {
    id: 'R21',
    title: 'Thai Sentence Structure',
    goal: 'Learn that Thai uses Subject-Verb-Object order, just like English.',
    phase: 'sentences',
    order: 20,
    difficulty: 'elementary',
    prerequisites: ['R20'],
    steps: [
      {
        kind: 'text',
        content:
          'Good news: Thai word order is **Subject-Verb-Object (SVO)**, the same as English. "I eat rice" = "I" + "eat" + "rice" = the same order in Thai.\n\nThai does not conjugate verbs -- no past tense, no plural forms, no articles. The verb stays the same regardless of tense or subject.',
      },
      {
        kind: 'rule',
        rule: 'Thai sentences follow SVO order. Verbs do not change form. There are no articles (a, an, the).',
        examples: [
          { thai: 'ฉันกินข้าว', romanization: 'ch\u01CEan gin k\u00E2ao', english: 'I eat rice' },
          { thai: 'เขาดื่มน้ำ', romanization: 'k\u01CEao d\u00F9uem n\u00E1am', english: 'He/she drinks water' },
        ],
      },
      {
        kind: 'example',
        title: 'Breaking down: ฉันกินข้าว',
        steps: [
          { label: 'Subject', content: 'ฉัน (ch\u01CEan) = I' },
          { label: 'Verb', content: 'กิน (gin) = eat' },
          { label: 'Object', content: 'ข้าว (k\u00E2ao) = rice' },
          { label: 'Full sentence', content: 'I eat rice -- same word order as English!' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does ฉันกินข้าว mean?',
            promptThai: 'ฉันกินข้าว',
            options: ['I drink water', 'I eat rice', 'He eats rice', 'I like rice'],
            correctIndex: 1,
            audioText: 'ฉันกินข้าว',
          },
          {
            type: 'multiple_choice',
            prompt: 'What word order does Thai use?',
            options: ['SOV (Subject-Object-Verb)', 'SVO (Subject-Verb-Object)', 'VSO (Verb-Subject-Object)', 'Free order'],
            correctIndex: 1,
          },
          {
            type: 'fill_in',
            sentence: 'ฉัน ___ ข้าว (I eat rice)',
            answer: 'กิน',
            options: ['กิน', 'ดื่ม', 'ไป', 'มา'],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does เขาดื่มน้ำ mean?',
        promptThai: 'เขาดื่มน้ำ',
        options: ['I eat rice', 'He/she drinks water', 'They go home', 'We like food'],
        correctIndex: 1,
        audioText: 'เขาดื่มน้ำ',
      },
      {
        type: 'multiple_choice',
        prompt: 'In Thai, verbs...',
        options: ['Change based on tense', 'Change based on subject', 'Stay the same always', 'Are optional'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ฉัน mean?',
        options: ['He/she', 'I', 'They', 'You'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does กิน mean?',
        options: ['drink', 'go', 'eat', 'come'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'To build แม่กินข้าว (Mom eats rice), you use SVO order. Which part is the verb?',
        options: ['แม่ (mom)', 'กิน (eat)', 'ข้าว (rice)', 'None of them'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Unlike English, French, or Spanish, Thai verbs do not conjugate. What does this mean?',
        options: [
          'Thai has no verbs',
          'The verb form stays the same regardless of subject or tense',
          'Thai verbs change based on the speaker\'s gender',
          'Thai only uses past tense',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_chan', 'w_gin', 'w_khaao', 'w_khao_he', 'w_duem', 'w_naam'],
    skillPreview: {
      heading: 'You\'ll read simple Thai sentences',
      examples: [
        { thai: 'ฉันกินข้าว', romanization: 'chǎn gin kâao', meaning: 'I eat rice' },
        { thai: 'เขาไปตลาด', romanization: 'kǎo bpai dtà-làat', meaning: 'He goes to the market' },
        { thai: 'แม่ทำอาหาร', romanization: 'mâe tam aa-hǎan', meaning: 'Mom cooks food' },
      ],
    },
  },

  // === LESSON 22: Negation ===
  {
    id: 'R22',
    title: 'Saying "No" in Thai',
    goal: 'Learn to negate sentences using ไม่ (m\u00E2i).',
    phase: 'sentences',
    order: 21,
    difficulty: 'elementary',
    prerequisites: ['R21'],
    steps: [
      {
        kind: 'text',
        content:
          'To make a Thai sentence negative, put **ไม่** (m\u00E2i, falling tone) before the verb. That is all. No other changes needed.\n\n"I eat rice" becomes "I not eat rice" = ฉันไม่กินข้าว.',
      },
      {
        kind: 'rule',
        rule: 'Negation: put ไม่ (m\u00E2i) directly before the verb. Subject + ไม่ + Verb + Object.',
        examples: [
          { thai: 'ฉันไม่กินข้าว', romanization: 'ch\u01CEan m\u00E2i gin k\u00E2ao', english: 'I don\'t eat rice' },
          { thai: 'เขาไม่ดื่มน้ำ', romanization: 'k\u01CEao m\u00E2i d\u00F9uem n\u00E1am', english: 'He/she doesn\'t drink water' },
          { thai: 'ฉันไม่ไป', romanization: 'ch\u01CEan m\u00E2i bpai', english: 'I\'m not going' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does ฉันไม่กินข้าว mean?',
            promptThai: 'ฉันไม่กินข้าว',
            options: ['I eat rice', 'I don\'t eat rice', 'Do I eat rice?', 'I like rice'],
            correctIndex: 1,
            audioText: 'ฉันไม่กินข้าว',
          },
          {
            type: 'fill_in',
            sentence: 'ฉัน ___ ไป (I\'m not going)',
            answer: 'ไม่',
            options: ['ไม่', 'มา', 'กิน', 'ดี'],
          },
          {
            type: 'multiple_choice',
            prompt: 'Where does ไม่ go in a Thai sentence?',
            options: ['At the end', 'Before the verb', 'Before the subject', 'After the object'],
            correctIndex: 1,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does ไม่ mean?',
        options: ['yes', 'not / don\'t', 'very', 'also'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you say "He doesn\'t go"?',
        options: ['เขาไป', 'เขาไม่ไป', 'ไม่เขาไป', 'เขาไปไม่'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เขาไม่ดื่มน้ำ mean?',
        promptThai: 'เขาไม่ดื่มน้ำ',
        options: ['He drinks water', 'He doesn\'t drink water', 'Does he drink water?', 'He likes water'],
        correctIndex: 1,
        audioText: 'เขาไม่ดื่มน้ำ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone is ไม่ pronounced with?',
        options: ['Mid', 'Low', 'Falling', 'High'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Someone asks กินข้าวไหม (Are you eating?). How would you politely decline?',
        options: [
          'กินข้าว (eat rice)',
          'ไม่กินครับ/ค่ะ (not eating)',
          'กินไหม (eating?)',
          'ข้าวดี (good rice)',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_mai', 'w_khrap', 'w_kha'],
    skillPreview: {
      heading: 'You\'ll understand Thai negation',
      examples: [
        { thai: 'ไม่ชอบ', romanization: 'mâi châwp', meaning: 'don\'t like' },
        { thai: 'ไม่ใช่', romanization: 'mâi châi', meaning: 'it\'s not' },
        { thai: 'ยังไม่ได้ไป', romanization: 'yang mâi dâai bpai', meaning: 'haven\'t gone yet' },
      ],
    },
  },

  // === LESSON 23: Questions ===
  {
    id: 'R23',
    title: 'Asking Questions',
    goal: 'Learn to form yes/no questions with ไหม (m\u01CEi) and อะไร (a-rai).',
    phase: 'sentences',
    order: 22,
    difficulty: 'elementary',
    prerequisites: ['R22'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai questions are formed by adding a **question particle** at the end of a statement. No word order change needed.\n\n- **ไหม** (m\u01CEi) at the end turns any statement into a yes/no question.\n- **อะไร** (a-rai) means "what" and replaces the unknown element.',
      },
      {
        kind: 'rule',
        rule: 'Yes/no questions: add ไหม at the end. Statement + ไหม?',
        examples: [
          { thai: 'คุณกินข้าวไหม', romanization: 'kun gin k\u00E2ao m\u01CEi', english: 'Do you eat rice?' },
          { thai: 'เขาไปไหม', romanization: 'k\u01CEao bpai m\u01CEi', english: 'Is he/she going?' },
        ],
      },
      {
        kind: 'rule',
        rule: '"What" questions use อะไร (a-rai) in place of the unknown.',
        examples: [
          { thai: 'คุณกินอะไร', romanization: 'kun gin a-rai', english: 'What do you eat?' },
          { thai: 'นี่อะไร', romanization: 'n\u00EEi a-rai', english: 'What is this?' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does คุณกินข้าวไหม mean?',
            promptThai: 'คุณกินข้าวไหม',
            options: ['You eat rice.', 'Do you eat rice?', 'You don\'t eat rice.', 'What do you eat?'],
            correctIndex: 1,
            audioText: 'คุณกินข้าวไหม',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does คุณกินอะไร mean?',
            promptThai: 'คุณกินอะไร',
            options: ['Do you eat?', 'What do you eat?', 'You eat rice.', 'You don\'t eat.'],
            correctIndex: 1,
            audioText: 'คุณกินอะไร',
          },
          {
            type: 'fill_in',
            sentence: 'คุณไป ___ (Are you going?)',
            answer: 'ไหม',
            options: ['ไหม', 'อะไร', 'ไม่', 'ดี'],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you turn a statement into a yes/no question?',
        options: ['Change the word order', 'Add ไหม at the end', 'Add ไม่ at the start', 'Raise your voice'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does อะไร mean?',
        options: ['where', 'when', 'what', 'who'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เขาไปไหม mean?',
        promptThai: 'เขาไปไหม',
        options: ['He is going.', 'Is he going?', 'He is not going.', 'Where is he going?'],
        correctIndex: 1,
        audioText: 'เขาไปไหม',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you say "What is this?"',
        options: ['นี่ดีไหม', 'นี่อะไร', 'นี่ไม่ดี', 'นี่ไป'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'You point at something at a market stall and want to ask "What is this?" Which phrase do you use?',
        options: ['ไปไหน', 'นี่อะไร', 'เท่าไหร่', 'สบายดีไหม'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Thai adds question particles at the end of a sentence, similar to which other languages?',
        options: [
          'French and German',
          'Japanese and Korean',
          'Spanish and Italian',
          'English and Dutch',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_arai', 'w_mai_question', 'w_nii', 'w_thii_nai'],
    skillPreview: {
      heading: 'You\'ll read and form Thai questions',
      examples: [
        { thai: 'ไปไหน', romanization: 'bpai nǎi', meaning: 'Where are you going?' },
        { thai: 'อร่อยไหม', romanization: 'à-ràwy mǎi', meaning: 'Is it delicious?' },
        { thai: 'กี่บาท', romanization: 'gìi bàat', meaning: 'How much?' },
      ],
    },
  },

  // === LESSON 24: Tense and Time ===
  {
    id: 'R24',
    title: 'Past and Future',
    goal: 'Learn to express past tense with แล้ว and future with จะ.',
    phase: 'sentences',
    order: 23,
    difficulty: 'elementary',
    prerequisites: ['R23'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai verbs do not change form for tense. Instead, **time words** are added:\n\n- **จะ** (ja) before the verb = future ("will")\n- **แล้ว** (l\u00E1aeo) after the verb = completed/past ("already")\n- **กำลัง** (gam-lang) before the verb = ongoing ("currently")',
      },
      {
        kind: 'rule',
        rule: 'Future: Subject + จะ + Verb. Past/completed: Subject + Verb + แล้ว. Ongoing: Subject + กำลัง + Verb.',
        examples: [
          { thai: 'ฉันจะไป', romanization: 'ch\u01CEan ja bpai', english: 'I will go' },
          { thai: 'ฉันกินแล้ว', romanization: 'ch\u01CEan gin l\u00E1aeo', english: 'I already ate' },
          { thai: 'เขากำลังกิน', romanization: 'k\u01CEao gam-lang gin', english: 'He/she is eating' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does ฉันจะไป mean?',
            promptThai: 'ฉันจะไป',
            options: ['I went', 'I will go', 'I am going', 'I don\'t go'],
            correctIndex: 1,
            audioText: 'ฉันจะไป',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ฉันกินแล้ว mean?',
            promptThai: 'ฉันกินแล้ว',
            options: ['I will eat', 'I am eating', 'I already ate', 'I don\'t eat'],
            correctIndex: 2,
            audioText: 'ฉันกินแล้ว',
          },
          {
            type: 'fill_in',
            sentence: 'ฉัน ___ ไป (I will go)',
            answer: 'จะ',
            options: ['จะ', 'แล้ว', 'ไม่', 'กำลัง'],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'Which word indicates FUTURE tense?',
        options: ['แล้ว', 'ไม่', 'จะ', 'กำลัง'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Which word indicates COMPLETED/PAST action?',
        options: ['จะ', 'แล้ว', 'ไหม', 'กำลัง'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เขากำลังกิน mean?',
        promptThai: 'เขากำลังกิน',
        options: ['He will eat', 'He already ate', 'He is eating', 'He doesn\'t eat'],
        correctIndex: 2,
        audioText: 'เขากำลังกิน',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you say "I already went"?',
        options: ['ฉันจะไป', 'ฉันไปแล้ว', 'ฉันไม่ไป', 'ฉันกำลังไป'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How would you say "I already went to the market" using ฉัน + ไป + ตลาด + แล้ว?',
        options: ['แล้วฉันไปตลาด', 'ฉันไปตลาดแล้ว', 'ฉันแล้วไปตลาด', 'ตลาดฉันไปแล้ว'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_ja', 'w_laeo', 'w_kamlang', 'w_bpai'],
    skillPreview: {
      heading: 'You\'ll express time in Thai',
      examples: [
        { thai: 'จะไป', romanization: 'jà bpai', meaning: 'will go' },
        { thai: 'ไปแล้ว', romanization: 'bpai láew', meaning: 'already went' },
        { thai: 'เคยกิน', romanization: 'kəəy gin', meaning: 'have eaten before' },
      ],
    },
  },

  // === LESSON 25: Adjectives and Descriptions ===
  {
    id: 'R25',
    title: 'Adjectives in Thai',
    goal: 'Learn that Thai adjectives come after the noun and also function as verbs.',
    phase: 'sentences',
    order: 24,
    difficulty: 'elementary',
    prerequisites: ['R24'],
    steps: [
      {
        kind: 'text',
        content:
          'In Thai, adjectives come **after** the noun (opposite of English). Even more interesting, adjectives can function as verbs -- so "The food is delicious" is literally "food delicious" with no need for "is."',
      },
      {
        kind: 'rule',
        rule: 'Adjectives follow the noun. They also act as verbs, so no copula ("is") is needed. To say "very," add มาก (m\u00E2ak) after the adjective.',
        examples: [
          { thai: 'อาหารอร่อย', romanization: 'aa-h\u01CEaan a-r\u00F2i', english: 'The food is delicious' },
          { thai: 'น้ำเย็น', romanization: 'n\u00E1am yen', english: 'Cold water' },
          { thai: 'อาหารอร่อยมาก', romanization: 'aa-h\u01CEaan a-r\u00F2i m\u00E2ak', english: 'The food is very delicious' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does อาหารอร่อย mean?',
            promptThai: 'อาหารอร่อย',
            options: ['Delicious food / The food is delicious', 'I eat food', 'Food is expensive', 'Hot food'],
            correctIndex: 0,
            audioText: 'อาหารอร่อย',
          },
          {
            type: 'multiple_choice',
            prompt: 'Where do adjectives go in Thai?',
            options: ['Before the noun', 'After the noun', 'At the start of the sentence', 'It varies'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does มาก mean?',
            options: ['a little', 'not', 'very/much', 'also'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does น้ำเย็น mean?',
        promptThai: 'น้ำเย็น',
        options: ['Hot water', 'Cold water', 'Drinking water', 'Sweet water'],
        correctIndex: 1,
        audioText: 'น้ำเย็น',
      },
      {
        type: 'multiple_choice',
        prompt: 'In Thai, "the food is delicious" is literally...',
        options: ['is food delicious', 'food delicious', 'delicious food is', 'the delicious food'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does อาหารอร่อยมาก mean?',
        options: ['Not delicious food', 'Very delicious food', 'A little delicious', 'Delicious food question'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Which is correct for "big house"?',
        options: ['ใหญ่บ้าน (big house)', 'บ้านใหญ่ (house big)', 'บ้านมาก (house very)', 'ใหญ่มากบ้าน'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'You want to describe spicy food. How do you say "very spicy" using เผ็ด + มาก?',
        options: ['มากเผ็ด', 'เผ็ดมาก', 'ไม่เผ็ดมาก', 'เผ็ดไม่มาก'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_aroi', 'w_maak', 'w_yen', 'w_phet'],
    skillPreview: {
      heading: 'You\'ll describe things in Thai',
      examples: [
        { thai: 'อาหารอร่อย', romanization: 'aa-hǎan à-ràwy', meaning: 'delicious food' },
        { thai: 'บ้านใหญ่', romanization: 'bâan yài', meaning: 'big house' },
        { thai: 'ถูกมาก', romanization: 'tùuk mâak', meaning: 'very cheap' },
      ],
    },
  },
]
