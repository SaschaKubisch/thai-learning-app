import type { RichLesson } from '../lessonTypes'

// Phase 3: Reading Practice (Lessons 11-15)
// Introduces high-class and low-class consonants with integrated reading practice.

export const phase3Lessons: RichLesson[] = [
  // === LESSON 11: More High-Class Consonants ===
  {
    id: 'R11',
    title: 'High-Class: s, f, p Sounds',
    goal: 'Learn high-class consonants ส, ฝ, and ผ and read syllables with them.',
    phase: 'reading',
    order: 10,
    difficulty: 'beginner',
    prerequisites: ['R10'],
    steps: [
      {
        kind: 'text',
        content:
          'Let us expand your consonant repertoire with three more high-class consonants. Remember: high-class consonants are aspirated and produce a rising tone in simple live syllables.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ส',
            romanization: 'saw',
            english: '"s" sound -- as in "sun"',
            detail: 'Keyword: เสือ (suea) = tiger. High class.',
            audioText: 'สอ',
          },
          {
            thai: 'ฝ',
            romanization: 'faw',
            english: '"f" sound -- as in "fun"',
            detail: 'Keyword: ฝา (faa) = lid. High class.',
            audioText: 'ฝอ',
          },
          {
            thai: 'ผ',
            romanization: 'paw',
            english: '"p" sound (aspirated) -- as in "pan"',
            detail: 'Keyword: ผึ้ง (pueng) = bee. High class.',
            audioText: 'ผอ',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Reading practice: สี',
        steps: [
          { label: 'Consonant', content: 'ส = saw ("s" sound, high class)' },
          { label: 'Vowel', content: '-ี = ii (long)' },
          { label: 'Combine', content: 's + ii = sii' },
          { label: 'Tone', content: 'High class + long vowel + no mark = rising tone' },
          { label: 'Result', content: 'สี = sii (rising tone) = "color"' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'สา',
            options: ['sii', 'saa', 'faa', 'paa'],
            correctIndex: 1,
            audioText: 'สา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'ฝา',
            options: ['fii', 'saa', 'faa', 'paa'],
            correctIndex: 2,
            audioText: 'ฝา',
          },
          {
            type: 'match',
            pairs: [
              { left: 'สี', right: 'sii' },
              { left: 'ฝา', right: 'faa' },
              { left: 'ผี', right: 'pii' },
              { left: 'สู', right: 'suu' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ผา',
        options: ['faa', 'paa', 'saa', 'bpaa'],
        correctIndex: 1,
        audioText: 'ผา',
      },
      {
        type: 'multiple_choice',
        prompt: 'What class are ส, ฝ, and ผ?',
        options: ['Mid class', 'High class', 'Low class'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ไส',
        options: ['sii', 'sai', 'saa', 'sam'],
        correctIndex: 1,
        audioText: 'ไส',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ฝี',
        options: ['fii', 'faa', 'fuu', 'sii'],
        correctIndex: 0,
        audioText: 'ฝี',
      },
    ],
    srsItemIds: ['sor_suea', 'for_faa', 'phor_phueng'],
  },

  // === LESSON 12: First Low-Class Consonants ===
  {
    id: 'R12',
    title: 'Low-Class Consonants: k, ng, n',
    goal: 'Learn low-class consonants ค, ง, and น and understand how they differ from mid/high.',
    phase: 'reading',
    order: 11,
    difficulty: 'beginner',
    prerequisites: ['R11'],
    steps: [
      {
        kind: 'text',
        content:
          'Now let us meet the **low class** -- the largest group with 24 consonants. Low-class consonants produce a **mid tone** in simple live syllables (long vowel, no tone mark), just like mid-class consonants.\n\nThe difference between classes shows up when tone marks are added -- you will see this in the Tones phase.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ค',
            romanization: 'kaw',
            english: '"k" sound (aspirated) -- same sound as ข',
            detail: 'Keyword: ควาย (kwaai) = buffalo. Low class.',
            audioText: 'คอ',
          },
          {
            thai: 'ง',
            romanization: 'ngaw',
            english: '"ng" sound -- as in "sing"',
            detail: 'Keyword: งู (nguu) = snake. Low class.',
            audioText: 'งอ',
          },
          {
            thai: 'น',
            romanization: 'naw',
            english: '"n" sound -- as in "no"',
            detail: 'Keyword: หนู (nuu) = mouse. Low class.',
            audioText: 'นอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'ค (low class) and ข (high class) both make the "k" (aspirated) sound. Same sound, different class, different tone behavior. You must memorize which class each consonant belongs to.',
        examples: [
          { thai: 'ขา', romanization: 'kaa (rising tone)', english: 'High class: ข + -า' },
          { thai: 'คา', romanization: 'kaa (mid tone)', english: 'Low class: ค + -า' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'คา',
            options: ['gaa', 'kaa', 'ngaa', 'naa'],
            correctIndex: 1,
            audioText: 'คา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'งู',
            options: ['nuu', 'nguu', 'kuu', 'guu'],
            correctIndex: 1,
            audioText: 'งู',
          },
          {
            type: 'multiple_choice',
            prompt: 'Which class does ค belong to?',
            options: ['Mid class', 'High class', 'Low class'],
            correctIndex: 2,
          },
          {
            type: 'match',
            pairs: [
              { left: 'คา', right: 'kaa' },
              { left: 'งู', right: 'nguu' },
              { left: 'นา', right: 'naa' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'นา',
        options: ['naa', 'ngaa', 'kaa', 'maa'],
        correctIndex: 0,
        audioText: 'นา',
      },
      {
        type: 'multiple_choice',
        prompt: 'ค and ข make the same sound. What is different?',
        options: ['Their vowel', 'Their consonant class', 'Nothing', 'Their size'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'งี',
        options: ['ngii', 'nii', 'kii', 'gii'],
        correctIndex: 0,
        audioText: 'งี',
      },
      {
        type: 'multiple_choice',
        prompt: 'How many consonants are in the low class?',
        options: ['9', '11', '24', '44'],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['khor_khwaai', 'ngor_nguu', 'nor_nuu'],
  },

  // === LESSON 13: More Low-Class Consonants ===
  {
    id: 'R13',
    title: 'Low-Class: m, r, l, w',
    goal: 'Learn common low-class consonants ม, ร, ล, and ว.',
    phase: 'reading',
    order: 12,
    difficulty: 'beginner',
    prerequisites: ['R12'],
    steps: [
      {
        kind: 'text',
        content:
          'Four more very common low-class consonants. These sounds are similar to English, so they should feel natural. After this lesson you will know enough consonants and vowels to read many real Thai words.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ม',
            romanization: 'maw',
            english: '"m" sound -- as in "mom"',
            detail: 'Keyword: ม้า (maa) = horse. Low class.',
            audioText: 'มอ',
          },
          {
            thai: 'ร',
            romanization: 'raw',
            english: '"r" sound -- rolled or flapped',
            detail: 'Keyword: เรือ (ruea) = boat. Low class.',
            audioText: 'รอ',
          },
          {
            thai: 'ล',
            romanization: 'law',
            english: '"l" sound -- as in "love"',
            detail: 'Keyword: ลิง (ling) = monkey. Low class.',
            audioText: 'ลอ',
          },
          {
            thai: 'ว',
            romanization: 'waw',
            english: '"w" sound -- as in "water"',
            detail: 'Keyword: แหวน (waen) = ring. Low class.',
            audioText: 'วอ',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'มา',
            options: ['maa', 'raa', 'laa', 'waa'],
            correctIndex: 0,
            audioText: 'มา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'รู',
            options: ['luu', 'ruu', 'wuu', 'muu'],
            correctIndex: 1,
            audioText: 'รู',
          },
          {
            type: 'match',
            pairs: [
              { left: 'มา', right: 'maa' },
              { left: 'ลา', right: 'laa' },
              { left: 'วี', right: 'wii' },
              { left: 'รา', right: 'raa' },
            ],
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this word?',
            promptThai: 'ไม',
            options: ['mii', 'mai', 'maa', 'mam'],
            correctIndex: 1,
            audioText: 'ไม',
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ลี',
        options: ['laa', 'lii', 'rii', 'wii'],
        correctIndex: 1,
        audioText: 'ลี',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'วา',
        options: ['raa', 'laa', 'waa', 'maa'],
        correctIndex: 2,
        audioText: 'วา',
      },
      {
        type: 'multiple_choice',
        prompt: 'What class do ม, ร, ล, and ว belong to?',
        options: ['Mid class', 'High class', 'Low class'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'มู',
        options: ['mii', 'muu', 'maa', 'maw'],
        correctIndex: 1,
        audioText: 'มู',
      },
    ],
    srsItemIds: ['mor_maa', 'ror_ruea', 'lor_ling', 'wor_waen'],
  },

  // === LESSON 14: Low-Class th, ch, y ===
  {
    id: 'R14',
    title: 'Low-Class: th, ch, y',
    goal: 'Learn low-class consonants ท, ช, and ย and practice reading words.',
    phase: 'reading',
    order: 13,
    difficulty: 'beginner',
    prerequisites: ['R13'],
    steps: [
      {
        kind: 'text',
        content:
          'Three more important low-class consonants. ท makes the "t" sound (aspirated, like English "t"), ช makes "ch", and ย makes "y".\n\nNote that ท (low class, aspirated "t") is different from ต (mid class, unaspirated "dt"). This is a key distinction.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ท',
            romanization: 'taw',
            english: '"t" sound (aspirated) -- as in "top"',
            detail: 'Keyword: ธง (tong) = flag. Low class.',
            audioText: 'ทอ',
          },
          {
            thai: 'ช',
            romanization: 'chaw',
            english: '"ch" sound -- as in "chair"',
            detail: 'Keyword: ช้าง (chaang) = elephant. Low class.',
            audioText: 'ชอ',
          },
          {
            thai: 'ย',
            romanization: 'yaw',
            english: '"y" sound -- as in "yes"',
            detail: 'Keyword: ยักษ์ (yak) = giant. Low class.',
            audioText: 'ยอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Thai has aspirated/unaspirated pairs across classes: ต (dt, mid) vs ท (t, low) vs ถ (t, high). Same aspiration distinction, different classes and different tones.',
        examples: [
          { thai: 'ตา', romanization: 'dtaa (mid tone)', english: 'Mid class, unaspirated' },
          { thai: 'ทา', romanization: 'taa (mid tone)', english: 'Low class, aspirated' },
          { thai: 'ถา', romanization: 'taa (rising tone)', english: 'High class, aspirated' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'ทา',
            options: ['dtaa', 'taa', 'chaa', 'yaa'],
            correctIndex: 1,
            audioText: 'ทา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'ชา',
            options: ['taa', 'chaa', 'yaa', 'saa'],
            correctIndex: 1,
            audioText: 'ชา',
          },
          {
            type: 'match',
            pairs: [
              { left: 'ทา', right: 'taa' },
              { left: 'ชา', right: 'chaa' },
              { left: 'ยา', right: 'yaa' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ยา',
        options: ['yaa', 'waa', 'raa', 'chaa'],
        correctIndex: 0,
        audioText: 'ยา',
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the difference between ต and ท?',
        options: [
          'ต is aspirated, ท is not',
          'ต is unaspirated (mid class), ท is aspirated (low class)',
          'They are the same',
          'ต is low class, ท is mid class',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ชี',
        options: ['chii', 'tii', 'sii', 'yii'],
        correctIndex: 0,
        audioText: 'ชี',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ไท',
        options: ['tii', 'tai', 'taa', 'tam'],
        correctIndex: 1,
        audioText: 'ไท',
      },
    ],
    srsItemIds: ['thor_thong', 'chor_chaang', 'yor_yak'],
  },

  // === LESSON 15: Reading Real Words ===
  {
    id: 'R15',
    title: 'Reading Real Words',
    goal: 'Read complete Thai words using all the consonants and vowels you have learned.',
    phase: 'reading',
    order: 14,
    difficulty: 'beginner',
    prerequisites: ['R14'],
    steps: [
      {
        kind: 'text',
        content:
          'You now know enough consonants and vowels to read real Thai words. Let us practice decoding words step by step.\n\nRemember the process: identify the consonant, identify the vowel, combine the sounds, and consider the consonant class for tone.',
      },
      {
        kind: 'example',
        title: 'Reading: ตา (dtaa) = eye / grandfather',
        steps: [
          { label: 'Consonant', content: 'ต = dtaw (mid class, unaspirated "dt")' },
          { label: 'Vowel', content: '-า = aa (long)' },
          { label: 'Combine', content: 'dt + aa = dtaa' },
          { label: 'Tone', content: 'Mid class + long vowel + no mark = mid tone' },
          { label: 'Result', content: 'ตา = dtaa (mid tone) = "eye" or "grandfather"' },
        ],
      },
      {
        kind: 'example',
        title: 'Reading: มา (maa) = to come',
        steps: [
          { label: 'Consonant', content: 'ม = maw (low class)' },
          { label: 'Vowel', content: '-า = aa (long)' },
          { label: 'Combine', content: 'm + aa = maa' },
          { label: 'Tone', content: 'Low class + long vowel + no mark = mid tone' },
          { label: 'Result', content: 'มา = maa (mid tone) = "to come"' },
        ],
      },
      {
        kind: 'example',
        title: 'Reading: ดี (dii) = good',
        steps: [
          { label: 'Consonant', content: 'ด = daw (mid class)' },
          { label: 'Vowel', content: '-ี = ii (long)' },
          { label: 'Combine', content: 'd + ii = dii' },
          { label: 'Tone', content: 'Mid class + long vowel + no mark = mid tone' },
          { label: 'Result', content: 'ดี = dii (mid tone) = "good"' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this word?',
            promptThai: 'ตา',
            options: ['dtaa', 'taa', 'daa', 'bpaa'],
            correctIndex: 0,
            audioText: 'ตา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this word?',
            promptThai: 'มา',
            options: ['naa', 'raa', 'maa', 'laa'],
            correctIndex: 2,
            audioText: 'มา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this word?',
            promptThai: 'ดี',
            options: ['dii', 'dtii', 'gii', 'bii'],
            correctIndex: 0,
            audioText: 'ดี',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ดี mean?',
            promptThai: 'ดี',
            options: ['eye', 'to come', 'good', 'water'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'กา',
        options: ['gaa', 'kaa', 'jaa', 'daa'],
        correctIndex: 0,
        audioText: 'กา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ชา',
        options: ['saa', 'taa', 'chaa', 'yaa'],
        correctIndex: 2,
        audioText: 'ชา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ไก',
        options: ['gii', 'gaa', 'gai', 'gam'],
        correctIndex: 2,
        audioText: 'ไก',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'นา',
        options: ['maa', 'laa', 'raa', 'naa'],
        correctIndex: 3,
        audioText: 'นา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ลำ',
        options: ['laa', 'lam', 'lai', 'lii'],
        correctIndex: 1,
        audioText: 'ลำ',
      },
    ],
    srsItemIds: [],
  },
]
