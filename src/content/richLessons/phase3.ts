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
        kind: 'info_card',
        items: [
          {
            thai: 'สี',
            romanization: 'sii',
            english: 'color',
            detail: 'ส + -ี = sii. High class, so rising tone.',
            audioText: 'สี',
          },
          {
            thai: 'ฝา',
            romanization: 'faa',
            english: 'lid / cover',
            detail: 'ฝ + -า = faa. The keyword for ฝ.',
            audioText: 'ฝา',
          },
          {
            thai: 'ผ้า',
            romanization: 'phaa',
            english: 'cloth / fabric',
            detail: 'ผ + -า = phaa. The tone mark changes the tone.',
            audioText: 'ผ้า',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'You can describe things with สี (color) and ดี (good). สีดี means "good color" and ผ้าดี means "good cloth."',
        examples: [
          { thai: 'สีดี', romanization: 'sii dii', english: 'good color' },
          { thai: 'ผ้าดี', romanization: 'phaa dii', english: 'good cloth' },
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
            type: 'multiple_choice',
            prompt: 'What does สี mean?',
            promptThai: 'สี',
            options: ['lid', 'cloth', 'color', 'good'],
            correctIndex: 2,
            audioText: 'สี',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ผ้า mean?',
            promptThai: 'ผ้า',
            options: ['color', 'cloth', 'lid', 'bee'],
            correctIndex: 1,
            audioText: 'ผ้า',
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
        prompt: 'What does ฝา mean?',
        promptThai: 'ฝา',
        options: ['color', 'cloth', 'lid', 'bee'],
        correctIndex: 2,
        audioText: 'ฝา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ฝี',
        options: ['fii', 'faa', 'fuu', 'sii'],
        correctIndex: 0,
        audioText: 'ฝี',
      },
      {
        type: 'multiple_choice',
        prompt: 'All high-class consonants share a common trait in pronunciation. What is it?',
        options: [
          'They are all silent',
          'They are all aspirated (pronounced with a puff of air)',
          'They all make vowel sounds',
          'They are all nasal sounds',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sor_suea', 'for_faa', 'phor_phueng', 'w_sii', 'w_faa', 'w_phaa'],
    skillPreview: {
      heading: 'You\'ll read words with aspirated consonants',
      examples: [
        { thai: 'สวย', romanization: 'sǔay', meaning: 'beautiful' },
        { thai: 'ฝน', romanization: 'fǒn', meaning: 'rain' },
        { thai: 'ผู้', romanization: 'pûu', meaning: 'person' },
      ],
    },
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
        kind: 'info_card',
        items: [
          {
            thai: 'งู',
            romanization: 'nguu',
            english: 'snake',
            detail: 'ง + -ู = nguu. The keyword for ง.',
            audioText: 'งู',
          },
          {
            thai: 'นา',
            romanization: 'naa',
            english: 'rice field',
            detail: 'น + -า = naa. A very common word.',
            audioText: 'นา',
          },
          {
            thai: 'น้ำ',
            romanization: 'naam',
            english: 'water',
            detail: 'น + -ำ = naam. Uses the compound vowel -ำ.',
            audioText: 'น้ำ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'With these new consonants you can read more real words. น้ำดี means "good water" and นาดี means "a good rice field."',
        examples: [
          { thai: 'น้ำดี', romanization: 'naam dii', english: 'good water' },
          { thai: 'นาดี', romanization: 'naa dii', english: 'good rice field' },
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
            type: 'multiple_choice',
            prompt: 'What does น้ำ mean?',
            promptThai: 'น้ำ',
            options: ['rice field', 'snake', 'water', 'good'],
            correctIndex: 2,
            audioText: 'น้ำ',
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
        prompt: 'What does งู mean?',
        promptThai: 'งู',
        options: ['water', 'snake', 'rice field', 'person'],
        correctIndex: 1,
        audioText: 'งู',
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
        prompt: 'What does น้ำดี mean?',
        options: ['good rice field', 'good snake', 'good water', 'good person'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'ข (high class) and ค (low class) both make the "k" sound. ขา has a rising tone, คา has a mid tone. What determines the difference?',
        options: [
          'The vowel determines the tone',
          'The consonant class determines the tone',
          'The word meaning determines the tone',
          'There is no real difference',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['khor_khwaai', 'ngor_nguu', 'nor_nuu', 'w_nguu', 'w_naa', 'w_naam'],
    skillPreview: {
      heading: 'You\'ll read words with low-class consonants',
      examples: [
        { thai: 'คน', romanization: 'kon', meaning: 'person' },
        { thai: 'ง่าย', romanization: 'ngâai', meaning: 'easy' },
        { thai: 'นา', romanization: 'naa', meaning: 'rice field' },
      ],
    },
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
        kind: 'info_card',
        items: [
          {
            thai: 'มา',
            romanization: 'maa',
            english: 'to come',
            detail: 'ม + -า = maa. One of the first verbs you need.',
            audioText: 'มา',
          },
          {
            thai: 'รู้',
            romanization: 'ruu',
            english: 'to know',
            detail: 'ร + -ู = ruu. The tone mark gives it a high tone.',
            audioText: 'รู้',
          },
          {
            thai: 'วัน',
            romanization: 'wan',
            english: 'day',
            detail: 'ว + -ั + น = wan. Uses the short "a" vowel.',
            audioText: 'วัน',
          },
          {
            thai: 'ไม่',
            romanization: 'mai',
            english: 'not',
            detail: 'ม + ไ- = mai. Essential for making negative sentences.',
            audioText: 'ไม่',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'With มา (come), ดู (watch), and กิน (eat) you can build real sentences. ไม่ (not) negates any verb: ไม่ดี = "not good."',
        examples: [
          { thai: 'มาดู', romanization: 'maa duu', english: 'come watch' },
          { thai: 'ไม่ดี', romanization: 'mai dii', english: 'not good' },
          { thai: 'มากิน', romanization: 'maa gin', english: 'come eat' },
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
            type: 'multiple_choice',
            prompt: 'What does มา mean?',
            promptThai: 'มา',
            options: ['to know', 'to come', 'day', 'not'],
            correctIndex: 1,
            audioText: 'มา',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ไม่ mean?',
            promptThai: 'ไม่',
            options: ['to come', 'day', 'to know', 'not'],
            correctIndex: 3,
            audioText: 'ไม่',
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
        prompt: 'What does มา mean?',
        promptThai: 'มา',
        options: ['to know', 'to come', 'not', 'day'],
        correctIndex: 1,
        audioText: 'มา',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ไม่ดี mean?',
        options: ['come watch', 'not good', 'good day', 'come eat'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What class do ม, ร, ล, and ว belong to?',
        options: ['Mid class', 'High class', 'Low class'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does วัน mean?',
        promptThai: 'วัน',
        options: ['to come', 'to know', 'not', 'day'],
        correctIndex: 3,
        audioText: 'วัน',
      },
      {
        type: 'multiple_choice',
        prompt: 'Using words you know, what does ไม่มากิน mean?',
        options: ['Not eating well', 'Don\'t come eat', 'Come eat a lot', 'Not good food'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['mor_maa', 'ror_ruea', 'lor_ling', 'wor_waen', 'w_maa', 'w_ruu', 'w_wan', 'w_mai'],
    skillPreview: {
      heading: 'You\'ll read everyday Thai words',
      examples: [
        { thai: 'มา', romanization: 'maa', meaning: 'to come' },
        { thai: 'รู้', romanization: 'rúu', meaning: 'to know' },
        { thai: 'วัน', romanization: 'wan', meaning: 'day' },
      ],
    },
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
        kind: 'info_card',
        items: [
          {
            thai: 'ทำ',
            romanization: 'tham',
            english: 'to do / to make',
            detail: 'ท + -ำ = tham. Extremely common verb.',
            audioText: 'ทำ',
          },
          {
            thai: 'ชา',
            romanization: 'chaa',
            english: 'tea',
            detail: 'ช + -า = chaa. Same word as in English "chai tea."',
            audioText: 'ชา',
          },
          {
            thai: 'ยา',
            romanization: 'yaa',
            english: 'medicine',
            detail: 'ย + -า = yaa.',
            audioText: 'ยา',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'With ทำ (to do) and มา (to come) you can chain verbs: มาทำ means "come do (it)." ชาดี means "good tea" and ทำดี means "do good."',
        examples: [
          { thai: 'ชาดี', romanization: 'chaa dii', english: 'good tea' },
          { thai: 'ทำดี', romanization: 'tham dii', english: 'do good' },
          { thai: 'มาทำ', romanization: 'maa tham', english: 'come do (it)' },
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
            type: 'multiple_choice',
            prompt: 'What does ทำ mean?',
            promptThai: 'ทำ',
            options: ['tea', 'medicine', 'to do', 'to come'],
            correctIndex: 2,
            audioText: 'ทำ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ชา mean?',
            promptThai: 'ชา',
            options: ['medicine', 'tea', 'to do', 'elephant'],
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
        prompt: 'What does ยา mean?',
        promptThai: 'ยา',
        options: ['tea', 'to do', 'medicine', 'elephant'],
        correctIndex: 2,
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
        prompt: 'What does ชาดี mean?',
        options: ['good medicine', 'good tea', 'do good', 'come do'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ไท',
        options: ['tii', 'tai', 'taa', 'tam'],
        correctIndex: 1,
        audioText: 'ไท',
      },
      {
        type: 'multiple_choice',
        prompt: 'The Thai word ชา (chaa, tea) was borrowed from Chinese. In Mandarin, tea is also "cha." This is an example of...',
        options: [
          'A coincidence',
          'A loanword borrowed between languages',
          'Thai and Chinese being the same language',
          'A tone mark changing the meaning',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['thor_thong', 'chor_chaang', 'yor_yak', 'w_tham', 'w_chaa', 'w_yaa'],
    skillPreview: {
      heading: 'You\'ll read common Thai words',
      examples: [
        { thai: 'ทำ', romanization: 'tam', meaning: 'to do' },
        { thai: 'ชอบ', romanization: 'châwp', meaning: 'to like' },
        { thai: 'ยัง', romanization: 'yang', meaning: 'still, yet' },
      ],
    },
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
        kind: 'info_card',
        items: [
          {
            thai: 'กิน',
            romanization: 'gin',
            english: 'to eat',
            detail: 'ก + -ิ + น = gin. Essential everyday word.',
            audioText: 'กิน',
          },
          {
            thai: 'มี',
            romanization: 'mii',
            english: 'to have',
            detail: 'ม + -ี = mii. Another high-frequency verb.',
            audioText: 'มี',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Now you can build longer phrases by chaining words you know. มากินไก่ means "come eat chicken" and ไปดูนา means "go look at the rice field."',
        examples: [
          { thai: 'มากินไก่', romanization: 'maa gin gai', english: 'come eat chicken' },
          { thai: 'ไปดูนา', romanization: 'bpai duu naa', english: 'go look at the rice field' },
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
            prompt: 'What does กิน mean?',
            promptThai: 'กิน',
            options: ['to come', 'to eat', 'to have', 'to go'],
            correctIndex: 1,
            audioText: 'กิน',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does มี mean?',
            promptThai: 'มี',
            options: ['to come', 'to eat', 'to have', 'not'],
            correctIndex: 2,
            audioText: 'มี',
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
        prompt: 'What does กิน mean?',
        promptThai: 'กิน',
        options: ['to come', 'to eat', 'good', 'to go'],
        correctIndex: 1,
        audioText: 'กิน',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does มากินไก่ mean?',
        options: ['go eat chicken', 'come eat chicken', 'good chicken', 'eat good fish'],
        correctIndex: 1,
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
      {
        type: 'multiple_choice',
        prompt: 'Look at this pattern: กา, ดา, ตา, บา. What do all these syllables share?',
        options: [
          'They all use the same consonant',
          'They all end with the -า (aa) vowel sound',
          'They are all high-class consonants',
          'They all mean the same thing',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'If you see the sign ร้านอาหาร on a building, what kind of place is it?',
        options: ['A school', 'A hospital', 'A restaurant', 'A bank'],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['w_gin', 'w_mii'],
    skillPreview: {
      heading: 'You\'ll read signs and everyday text',
      examples: [
        { thai: 'ร้านอาหาร', romanization: 'ráan aa-hǎan', meaning: 'restaurant' },
        { thai: 'ข้าวผัด', romanization: 'kâao pàt', meaning: 'fried rice' },
        { thai: 'น้ำ', romanization: 'náam', meaning: 'water' },
      ],
    },
  },
]
