import type { RichLesson } from '../lessonTypes'

// Phase 6: Dialogues (Lessons 26-30)
// Greetings, restaurant, directions, shopping, full conversation review.

export const phase6Lessons: RichLesson[] = [
  // === LESSON 26: Greetings ===
  {
    id: 'R26',
    title: 'Greetings and Politeness',
    goal: 'Learn essential Thai greetings and polite particles.',
    phase: 'dialogues',
    order: 25,
    difficulty: 'intermediate',
    prerequisites: ['R25'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai has **polite particles** added at the end of sentences to show respect. Men say **ครับ** (kr\u00E1p) and women say **ค่ะ** (k\u00E2a). These are used constantly in polite speech.\n\nThe universal greeting is **สวัสดี** (sa-w\u00E0t-dii) followed by the appropriate polite particle.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'สวัสดีครับ',
            romanization: 'sa-w\u00E0t-dii kr\u00E1p',
            english: 'Hello (male speaker)',
            audioText: 'สวัสดีครับ',
          },
          {
            thai: 'สวัสดีค่ะ',
            romanization: 'sa-w\u00E0t-dii k\u00E2a',
            english: 'Hello (female speaker)',
            audioText: 'สวัสดีค่ะ',
          },
          {
            thai: 'ขอบคุณครับ',
            romanization: 'k\u00F2p-kun kr\u00E1p',
            english: 'Thank you (male)',
            audioText: 'ขอบคุณครับ',
          },
          {
            thai: 'ขอบคุณค่ะ',
            romanization: 'k\u00F2p-kun k\u00E2a',
            english: 'Thank you (female)',
            audioText: 'ขอบคุณค่ะ',
          },
        ],
      },
      {
        kind: 'dialogue',
        title: 'Meeting someone',
        lines: [
          { speaker: 'Somchai', thai: 'สวัสดีครับ', romanization: 'sa-w\u00E0t-dii kr\u00E1p', english: 'Hello!' },
          { speaker: 'Noi', thai: 'สวัสดีค่ะ', romanization: 'sa-w\u00E0t-dii k\u00E2a', english: 'Hello!' },
          { speaker: 'Somchai', thai: 'สบายดีไหมครับ', romanization: 'sa-baai dii m\u01CEi kr\u00E1p', english: 'How are you?' },
          { speaker: 'Noi', thai: 'สบายดีค่ะ ขอบคุณค่ะ', romanization: 'sa-baai dii k\u00E2a, k\u00F2p-kun k\u00E2a', english: 'I\'m fine, thank you.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does สวัสดี mean?',
            options: ['Thank you', 'Hello / Goodbye', 'Sorry', 'Please'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'A man ends polite sentences with...',
            options: ['ค่ะ', 'ครับ', 'ไหม', 'มาก'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does สบายดีไหม mean?',
            promptThai: 'สบายดีไหม',
            options: ['Goodbye', 'Thank you', 'How are you?', 'Where are you going?'],
            correctIndex: 2,
            audioText: 'สบายดีไหม',
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does ขอบคุณ mean?',
        options: ['Hello', 'Sorry', 'Thank you', 'Please'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'A woman ends polite sentences with...',
        options: ['ครับ', 'ค่ะ', 'นะ', 'จ้า'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you say "Hello" in Thai?',
        options: ['ขอบคุณ', 'สวัสดี', 'ขอโทษ', 'ไม่เป็นไร'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does สบายดี mean?',
        options: ['Goodbye', 'I\'m fine / comfortable', 'I\'m sorry', 'Thank you very much'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Someone says สวัสดีครับ สบายดีไหมครับ -- How should you respond?',
        options: [
          'ขอโทษครับ (Excuse me)',
          'สบายดีครับ ขอบคุณครับ (I\'m fine, thank you)',
          'ไม่เป็นไรครับ (Never mind)',
          'แพงมากครับ (Very expensive)',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Read this greeting exchange: สวัสดีค่ะ กินข้าวหรือยังคะ -- What is being asked?',
        options: [
          'Where are you going?',
          'Have you eaten yet?',
          'How much does it cost?',
          'What is your name?',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_khrap', 'w_kha', 'w_khon'],
    skillPreview: {
      heading: 'You\'ll greet and respond politely',
      examples: [
        { thai: 'สวัสดีครับ', romanization: 'sà-wàt-dii kráp', meaning: 'Hello (male)' },
        { thai: 'สบายดีไหม', romanization: 'sà-baai dii mǎi', meaning: 'How are you?' },
        { thai: 'ขอบคุณค่ะ', romanization: 'kàwp-kun kâ', meaning: 'Thank you (female)' },
      ],
    },
  },

  // === LESSON 27: At a Restaurant ===
  {
    id: 'R27',
    title: 'At a Restaurant',
    goal: 'Learn essential phrases for ordering food in Thai.',
    phase: 'dialogues',
    order: 26,
    difficulty: 'intermediate',
    prerequisites: ['R26'],
    steps: [
      {
        kind: 'text',
        content:
          'Eating out is a huge part of Thai culture. Street food and restaurants are everywhere. Let us learn the key phrases you need to order food.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ขอ',
            romanization: 'k\u01CEaw',
            english: 'May I have... / I\'d like...',
            audioText: 'ขอ',
          },
          {
            thai: 'เอา',
            romanization: 'ao',
            english: 'I want / I\'ll take',
            audioText: 'เอา',
          },
          {
            thai: 'อร่อย',
            romanization: 'a-r\u00F2i',
            english: 'Delicious',
            audioText: 'อร่อย',
          },
          {
            thai: 'เผ็ด',
            romanization: 'p\u00E8t',
            english: 'Spicy',
            audioText: 'เผ็ด',
          },
          {
            thai: 'ไม่เผ็ด',
            romanization: 'm\u00E2i p\u00E8t',
            english: 'Not spicy',
            audioText: 'ไม่เผ็ด',
          },
          {
            thai: 'เช็คบิล',
            romanization: 'ch\u00E9k bin',
            english: 'Check, please',
            audioText: 'เช็คบิล',
          },
        ],
      },
      {
        kind: 'dialogue',
        title: 'Ordering food',
        lines: [
          { speaker: 'Waiter', thai: 'สั่งอะไรดีครับ', romanization: 's\u00E0ng a-rai dii kr\u00E1p', english: 'What would you like to order?' },
          { speaker: 'You', thai: 'ขอผัดไทยครับ', romanization: 'k\u01CEaw p\u00E0t tai kr\u00E1p', english: 'I\'d like pad Thai, please.' },
          { speaker: 'Waiter', thai: 'เผ็ดไหมครับ', romanization: 'p\u00E8t m\u01CEi kr\u00E1p', english: 'Spicy?' },
          { speaker: 'You', thai: 'ไม่เผ็ดครับ', romanization: 'm\u00E2i p\u00E8t kr\u00E1p', english: 'Not spicy, please.' },
          { speaker: 'Waiter', thai: 'ได้ครับ', romanization: 'd\u00E2ai kr\u00E1p', english: 'Sure / Can do.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "I\'d like pad Thai"?',
            options: ['กินผัดไทย', 'ขอผัดไทย', 'ไม่ผัดไทย', 'ผัดไทยไหม'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does เผ็ดไหม mean?',
            options: ['Is it delicious?', 'Is it spicy?', 'Is it hot?', 'Do you want more?'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you say "not spicy"?',
            options: ['เผ็ดมาก', 'ไม่เผ็ด', 'เผ็ดดี', 'อร่อย'],
            correctIndex: 1,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does ขอ mean in a restaurant context?',
        options: ['I don\'t want', 'May I have...', 'Where is...', 'How much is...'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does อร่อย mean?',
        options: ['Spicy', 'Expensive', 'Delicious', 'Sweet'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you ask for the check?',
        options: ['ขออะไร', 'เช็คบิล', 'ไปไหน', 'เท่าไหร่'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ได้ mean as a response?',
        options: ['No', 'Maybe', 'Sure / Can do', 'I don\'t know'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does สั่งอะไรดี mean?',
        options: ['Where is the menu?', 'What would you like to order?', 'Is it spicy?', 'How much?'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How would you politely order water at a restaurant?',
        options: [
          'น้ำ! (water!)',
          'ขอน้ำครับ/ค่ะ (May I have water, please)',
          'เอาน้ำไป (take water away)',
          'ดื่มน้ำ (drink water)',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_khaw', 'w_aroi', 'w_phet', 'w_naam', 'w_gin'],
    skillPreview: {
      heading: 'You\'ll order food in Thai',
      examples: [
        { thai: 'ขอข้าวผัดไก่', romanization: 'kǎw kâao pàt gài', meaning: 'I\'d like chicken fried rice' },
        { thai: 'เผ็ดน้อย', romanization: 'pèt nóoy', meaning: 'mildly spicy' },
        { thai: 'เช็คบิลด้วย', romanization: 'chék bin dûay', meaning: 'Check, please' },
      ],
    },
  },

  // === LESSON 28: Getting Around ===
  {
    id: 'R28',
    title: 'Directions and Transport',
    goal: 'Learn to ask for and understand basic directions.',
    phase: 'dialogues',
    order: 27,
    difficulty: 'intermediate',
    prerequisites: ['R27'],
    steps: [
      {
        kind: 'text',
        content:
          'Getting around in Thailand requires some key vocabulary. Let us learn how to ask where things are and understand basic directions.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ไปไหน',
            romanization: 'bpai n\u01CEai',
            english: 'Where are you going?',
            audioText: 'ไปไหน',
          },
          {
            thai: 'อยู่ที่ไหน',
            romanization: 'y\u00F9u t\u00EEi n\u01CEai',
            english: 'Where is it?',
            audioText: 'อยู่ที่ไหน',
          },
          {
            thai: 'ซ้าย',
            romanization: 's\u00E1ai',
            english: 'Left',
            audioText: 'ซ้าย',
          },
          {
            thai: 'ขวา',
            romanization: 'kw\u01CEaa',
            english: 'Right',
            audioText: 'ขวา',
          },
          {
            thai: 'ตรงไป',
            romanization: 'dtrong bpai',
            english: 'Go straight',
            audioText: 'ตรงไป',
          },
          {
            thai: 'ใกล้',
            romanization: 'gl\u00E2i',
            english: 'Near',
            audioText: 'ใกล้',
          },
          {
            thai: 'ไกล',
            romanization: 'glai',
            english: 'Far',
            audioText: 'ไกล',
          },
        ],
      },
      {
        kind: 'dialogue',
        title: 'Asking for directions',
        lines: [
          { speaker: 'You', thai: 'ขอโทษครับ สถานีรถไฟอยู่ที่ไหนครับ', romanization: 'k\u01CEaw-t\u00F4ot kr\u00E1p, sa-t\u01CEaa-nii r\u00F3t-fai y\u00F9u t\u00EEi n\u01CEai kr\u00E1p', english: 'Excuse me, where is the train station?' },
          { speaker: 'Local', thai: 'ตรงไปแล้วเลี้ยวซ้ายครับ', romanization: 'dtrong bpai l\u00E1aeo l\u00EDao s\u00E1ai kr\u00E1p', english: 'Go straight then turn left.' },
          { speaker: 'You', thai: 'ไกลไหมครับ', romanization: 'glai m\u01CEi kr\u00E1p', english: 'Is it far?' },
          { speaker: 'Local', thai: 'ไม่ไกลครับ ใกล้ๆ', romanization: 'm\u00E2i glai kr\u00E1p, gl\u00E2i gl\u00E2i', english: 'Not far. Nearby.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does ไปไหน mean?',
            options: ['How are you?', 'Where are you going?', 'What is this?', 'How much?'],
            correctIndex: 1,
          },
          {
            type: 'match',
            pairs: [
              { left: 'ซ้าย', right: 'Left' },
              { left: 'ขวา', right: 'Right' },
              { left: 'ตรงไป', right: 'Go straight' },
              { left: 'ใกล้', right: 'Near' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does อยู่ที่ไหน mean?',
        options: ['How are you?', 'What is this?', 'Where is it?', 'How much?'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ตรงไป mean?',
        options: ['Turn left', 'Turn right', 'Go straight', 'Go back'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the opposite of ใกล้ (near)?',
        options: ['ซ้าย', 'ขวา', 'ไกล', 'ตรง'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you ask "Is it far?"',
        options: ['ไกลไหม', 'ใกล้ไหม', 'ไปไหน', 'อยู่ที่ไหน'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'You see a sign that says ซ้าย with an arrow. What should you do?',
        options: ['Go straight', 'Turn right', 'Turn left', 'Go back'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'ไปไหน (Where are you going?) is often used as a casual greeting in Thai. A common lighthearted answer is...',
        options: [
          'ไม่ไป (not going)',
          'ไปเที่ยว (going out / going for fun)',
          'ไม่รู้ (I don\'t know)',
          'ไปทำงาน (going to work)',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_saai', 'w_khwaa', 'w_trong', 'w_klai', 'w_klai_near', 'w_bpai'],
    skillPreview: {
      heading: 'You\'ll navigate in Thai',
      examples: [
        { thai: 'ตรงไป', romanization: 'dtrong bpai', meaning: 'go straight' },
        { thai: 'เลี้ยวซ้าย', romanization: 'líaw sáai', meaning: 'turn left' },
        { thai: 'อยู่ใกล้', romanization: 'yùu glâi', meaning: 'it\'s nearby' },
      ],
    },
  },

  // === LESSON 29: Shopping ===
  {
    id: 'R29',
    title: 'Shopping and Prices',
    goal: 'Learn to ask about prices and negotiate at Thai markets.',
    phase: 'dialogues',
    order: 28,
    difficulty: 'intermediate',
    prerequisites: ['R28'],
    steps: [
      {
        kind: 'text',
        content:
          'Markets and shopping are a key part of Thai life. Let us learn the essential phrases for asking prices and making purchases.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'เท่าไหร่',
            romanization: 't\u00E2ao-r\u00E0i',
            english: 'How much?',
            audioText: 'เท่าไหร่',
          },
          {
            thai: 'แพง',
            romanization: 'paeng',
            english: 'Expensive',
            audioText: 'แพง',
          },
          {
            thai: 'ถูก',
            romanization: 't\u00F9uk',
            english: 'Cheap',
            audioText: 'ถูก',
          },
          {
            thai: 'ลดได้ไหม',
            romanization: 'l\u00F3t d\u00E2ai m\u01CEi',
            english: 'Can you give a discount?',
            audioText: 'ลดได้ไหม',
          },
          {
            thai: 'บาท',
            romanization: 'b\u00E0at',
            english: 'Baht (Thai currency)',
            audioText: 'บาท',
          },
        ],
      },
      {
        kind: 'dialogue',
        title: 'At the market',
        lines: [
          { speaker: 'You', thai: 'นี่เท่าไหร่ครับ', romanization: 'n\u00EEi t\u00E2ao-r\u00E0i kr\u00E1p', english: 'How much is this?' },
          { speaker: 'Vendor', thai: 'ร้อยบาทครับ', romanization: 'r\u00F3oi b\u00E0at kr\u00E1p', english: '100 baht.' },
          { speaker: 'You', thai: 'แพงไปครับ ลดได้ไหม', romanization: 'paeng bpai kr\u00E1p, l\u00F3t d\u00E2ai m\u01CEi', english: 'That\'s expensive. Can you discount?' },
          { speaker: 'Vendor', thai: 'แปดสิบบาทครับ', romanization: 'bp\u00E0aet s\u00ECp b\u00E0at kr\u00E1p', english: '80 baht.' },
          { speaker: 'You', thai: 'เอาครับ', romanization: 'ao kr\u00E1p', english: 'I\'ll take it.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you ask "How much?"',
            options: ['อะไร', 'ที่ไหน', 'เท่าไหร่', 'ไหม'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does แพง mean?',
            options: ['Cheap', 'Expensive', 'Beautiful', 'Big'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ลดได้ไหม mean?',
            options: ['Is it good?', 'Where is it?', 'Can you give a discount?', 'Do you have more?'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does เท่าไหร่ mean?',
        options: ['What is this?', 'How much?', 'Where?', 'When?'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the opposite of แพง (expensive)?',
        options: ['ดี', 'ใหญ่', 'ถูก', 'ไกล'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the Thai currency?',
        options: ['Yen', 'Dong', 'Baht', 'Rupee'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เอา mean when shopping?',
        options: ['I don\'t want it', 'I\'ll take it', 'Give me a discount', 'It\'s too much'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does แพงไป mean?',
        options: ['Very cheap', 'Too expensive', 'Good price', 'How much?'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How would you say "50 baht" in Thai?',
        options: [
          'ห้าบาท',
          'สิบบาท',
          'ห้าสิบบาท',
          'ห้าร้อยบาท',
        ],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['w_thao_rai', 'w_phaeng', 'w_thuuk', 'w_bat', 'w_suue', 'w_haa', 'w_sip'],
    skillPreview: {
      heading: 'You\'ll bargain and discuss prices',
      examples: [
        { thai: 'เท่าไร', romanization: 'tâo-rài', meaning: 'how much?' },
        { thai: 'ลดได้ไหม', romanization: 'lót dâai mǎi', meaning: 'can you lower the price?' },
        { thai: 'แพงไป', romanization: 'paeng bpai', meaning: 'too expensive' },
      ],
    },
  },

  // === LESSON 30: Putting It All Together ===
  {
    id: 'R30',
    title: 'Conversation Review',
    goal: 'Review and practice all the conversational skills you have learned.',
    phase: 'dialogues',
    order: 29,
    difficulty: 'intermediate',
    prerequisites: ['R29'],
    steps: [
      {
        kind: 'text',
        content:
          'Congratulations on reaching the final lesson. Let us review everything with a comprehensive dialogue that combines greetings, ordering food, getting directions, and everyday conversation.\n\nYou have come a long way from learning your first consonant. You can now read Thai script, understand tone rules, and navigate basic conversations.',
      },
      {
        kind: 'dialogue',
        title: 'A day in Bangkok',
        lines: [
          { speaker: 'You', thai: 'สวัสดีครับ', romanization: 'sa-w\u00E0t-dii kr\u00E1p', english: 'Hello!' },
          { speaker: 'Local', thai: 'สวัสดีค่ะ ไปไหนคะ', romanization: 'sa-w\u00E0t-dii k\u00E2a, bpai n\u01CEai k\u00E1', english: 'Hello! Where are you going?' },
          { speaker: 'You', thai: 'ไปกินข้าวครับ ร้านอาหารอยู่ที่ไหนครับ', romanization: 'bpai gin k\u00E2ao kr\u00E1p, r\u00E1an aa-h\u01CEaan y\u00F9u t\u00EEi n\u01CEai kr\u00E1p', english: 'Going to eat. Where is a restaurant?' },
          { speaker: 'Local', thai: 'ตรงไปแล้วเลี้ยวขวาค่ะ ไม่ไกล', romanization: 'dtrong bpai l\u00E1aeo l\u00EDao kw\u01CEaa k\u00E2a, m\u00E2i glai', english: 'Go straight then turn right. Not far.' },
          { speaker: 'You', thai: 'ขอบคุณครับ', romanization: 'k\u00F2p-kun kr\u00E1p', english: 'Thank you!' },
          { speaker: 'You', thai: 'ขอผัดไทยครับ ไม่เผ็ด', romanization: 'k\u01CEaw p\u00E0t tai kr\u00E1p, m\u00E2i p\u00E8t', english: '(At the restaurant) Pad Thai please, not spicy.' },
          { speaker: 'Waiter', thai: 'ได้ครับ', romanization: 'd\u00E2ai kr\u00E1p', english: 'Sure!' },
          { speaker: 'You', thai: 'อร่อยมากครับ เช็คบิลครับ', romanization: 'a-r\u00F2i m\u00E2ak kr\u00E1p, ch\u00E9k bin kr\u00E1p', english: 'Very delicious! Check please.' },
        ],
      },
      {
        kind: 'table',
        title: 'Summary: Essential Phrases',
        headers: ['Thai', 'Romanization', 'English'],
        rows: [
          ['สวัสดี', 'sa-w\u00E0t-dii', 'Hello / Goodbye'],
          ['ขอบคุณ', 'k\u00F2p-kun', 'Thank you'],
          ['ขอโทษ', 'k\u01CEaw-t\u00F4ot', 'Sorry / Excuse me'],
          ['ไม่เป็นไร', 'm\u00E2i bpen rai', 'No problem / It\'s OK'],
          ['เท่าไหร่', 't\u00E2ao-r\u00E0i', 'How much?'],
          ['อร่อย', 'a-r\u00F2i', 'Delicious'],
          ['ไปไหน', 'bpai n\u01CEai', 'Where are you going?'],
          ['ครับ / ค่ะ', 'kr\u00E1p / k\u00E2a', 'Polite particle (m/f)'],
        ],
      },
      {
        kind: 'text',
        content:
          'This is the end of the structured lessons. From here, continue reviewing with the SRS system to strengthen your memory. Every consonant, vowel, and word you have learned is tracked and will come back for review at optimal intervals.\n\nKeep reading Thai whenever you can -- signs, menus, social media. The more you read, the more automatic it becomes.',
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you say "Excuse me" in Thai?',
            options: ['สวัสดี', 'ขอบคุณ', 'ขอโทษ', 'ไม่เป็นไร'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ไม่เป็นไร mean?',
            options: ['Thank you', 'Sorry', 'No problem / It\'s OK', 'Hello'],
            correctIndex: 2,
          },
          {
            type: 'match',
            pairs: [
              { left: 'สวัสดี', right: 'Hello' },
              { left: 'ขอบคุณ', right: 'Thank you' },
              { left: 'ขอโทษ', right: 'Excuse me' },
              { left: 'เท่าไหร่', right: 'How much?' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you politely order food?',
        options: ['กินอาหาร', 'ขอ + (food name) + ครับ/ค่ะ', 'เอาไป', 'อาหารดี'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ตรงไปแล้วเลี้ยวซ้าย mean?',
        options: ['Turn right then go straight', 'Go straight then turn left', 'Go back', 'Turn left then right'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you ask "Is it far?"',
        options: ['ใกล้ไหม', 'ไกลไหม', 'ไปไหน', 'อยู่ที่ไหน'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What do you say after a delicious meal?',
        options: ['แพงมาก', 'ไม่อร่อย', 'อร่อยมาก', 'ไม่เป็นไร'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What are the three pieces of information needed to determine a Thai syllable\'s tone?',
        options: [
          'Vowel, consonant, position',
          'Consonant class, syllable type, tone mark',
          'Speed, volume, pitch',
          'Context, speaker, formality',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Read this sign: ห้องน้ำอยู่ที่ไหน -- What is this person asking?',
        options: [
          'Where is the restaurant?',
          'Where is the bathroom?',
          'How much is the food?',
          'What time is it?',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'You need to ask where a restaurant is. How do you read ขอโทษครับ ร้านอาหารอยู่ที่ไหนครับ?',
        options: [
          'Thank you, the food is delicious',
          'Excuse me, where is the restaurant?',
          'Hello, I want to eat',
          'Sorry, I don\'t understand',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_thii_nai', 'w_aroi', 'w_phaeng', 'w_thuuk', 'w_saai', 'w_khwaa'],
    skillPreview: {
      heading: 'You\'ll follow a full Thai conversation',
      examples: [
        { thai: 'วันนี้ไปไหน', romanization: 'wan-níi bpai nǎi', meaning: 'Where are you going today?' },
        { thai: 'ไปเที่ยวเชียงใหม่', romanization: 'bpai tîaw chiang mài', meaning: 'Going to visit Chiang Mai' },
        { thai: 'อากาศดีมาก', romanization: 'aa-gàat dii mâak', meaning: 'The weather is very nice' },
      ],
    },
  },
]
