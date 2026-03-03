import type { RichLesson } from '../lessonTypes'

// Phase 3: Reading Fluency (Lessons 11-15)

export const phase3Lessons: RichLesson[] = [
  // === LESSON 11: Remaining Common Consonants ===
  {
    id: 'R11',
    title: 'More High and Low Consonants',
    goal: 'Learn 5 more consonants to cover nearly all common ones: ฝ (faw, high), ฉ (chaw, high), พ (paw, low), ฟ (faw, low), ห (haw, high).',
    phase: 'reading',
    order: 10,
    difficulty: 'beginner',
    prerequisites: ['R10'],
    steps: [
      {
        kind: 'text',
        content:
          'Five more consonants to round out the common set. After this lesson you will know most of the consonants you need for everyday Thai reading.\n\nNotice that some sounds appear in both high and low class: ฝ (f, high class) and ฟ (f, low class) make the same sound but are different letters in different classes.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ฝ',
            romanization: 'faw',
            english: '"f" high class',
            detail: 'Keyword: ฝา faa = lid.',
            audioText: 'ฝอ',
          },
          {
            thai: 'ฉ',
            romanization: 'chaw',
            english: '"ch" high class',
            detail: 'Keyword: ฉิ่ง ching = cymbals.',
            audioText: 'ฉอ',
          },
          {
            thai: 'พ',
            romanization: 'paw',
            english: '"p" aspirated low class',
            detail: 'Keyword: พาน phaan = tray.',
            audioText: 'พอ',
          },
          {
            thai: 'ฟ',
            romanization: 'faw',
            english: '"f" low class',
            detail: 'Keyword: ฟัน fan = teeth.',
            audioText: 'ฟอ',
          },
          {
            thai: 'ห',
            romanization: 'haw',
            english: '"h" high class',
            detail: 'Keyword: หีบ hip = chest.',
            audioText: 'หอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Same sound, different class: ฝ (high) and ฟ (low) both make "f". ฉ (high) and ช (low, learned earlier) both make "ch". ผ (high) and พ (low) both make "p" (aspirated). You must memorize which class each belongs to.',
        examples: [
          { thai: 'ฝา', romanization: 'faa (high)', english: 'lid' },
          {
            thai: 'ฟา',
            romanization: 'faa (low)',
            english: 'same sound different class',
          },
          { thai: 'พา', romanization: 'phaa (low)', english: 'to take someone' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ฝา',
            romanization: 'faa',
            english: 'lid',
          },
          {
            thai: 'ผ้า',
            romanization: 'phâa',
            english: 'cloth',
          },
          {
            thai: 'หา',
            romanization: 'haa',
            english: 'to look for',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What sound does ฝ make?',
            promptThai: 'ฝ',
            options: ['faw', 'paw', 'haw', 'chaw'],
            correctIndex: 0,
            audioText: 'ฝอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What sound does ห make?',
            promptThai: 'ห',
            options: ['faw', 'paw', 'haw', 'chaw'],
            correctIndex: 2,
            audioText: 'หอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'พา',
            options: ['faa', 'phaa', 'haa', 'chaa'],
            correctIndex: 1,
            audioText: 'พา',
          },
          {
            type: 'match',
            pairs: [
              { left: 'ฝ', right: 'f (high class)' },
              { left: 'ฟ', right: 'f (low class)' },
              { left: 'พ', right: 'p aspirated (low)' },
              { left: 'ห', right: 'h (high class)' },
            ],
          },
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'ฝา', back: 'faa -- lid', audioText: 'ฝา' },
              { front: 'หา', back: 'haa -- to look for', audioText: 'หา' },
              { front: 'พา', back: 'phaa -- to take someone', audioText: 'พา' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What sound does ฝ make?',
        options: ['faw', 'paw', 'haw', 'chaw'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does พ make?',
        options: ['paw (aspirated)', 'bpaw', 'faw', 'haw'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does ห make?',
        options: ['haw', 'faw', 'chaw', 'paw'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read ฝา?',
        promptThai: 'ฝา',
        options: ['faa', 'phaa', 'haa', 'chaa'],
        correctIndex: 0,
        audioText: 'ฝา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read พา?',
        promptThai: 'พา',
        options: ['phaa', 'faa', 'haa', 'bpaa'],
        correctIndex: 0,
        audioText: 'พา',
      },
      {
        type: 'multiple_choice',
        prompt:
          'ฝ and ฟ both make the "f" sound. What is different about them?',
        options: [
          'Their consonant class (high vs low)',
          'Their vowel',
          'Their meaning',
          'Nothing',
        ],
        correctIndex: 0,
      },
    ],
    srsItemIds: [
      'for_faa',
      'chor_ching',
      'phor_phaan',
      'for_fan',
      'hor_hip',
      'w_faa',
      'w_phaa',
    ],
    skillPreview: {
      heading: "You'll read most common Thai consonants",
      examples: [
        { thai: 'ฝา', romanization: 'faa', meaning: 'lid' },
        { thai: 'พา', romanization: 'phaa', meaning: 'to take along' },
        { thai: 'หา', romanization: 'haa', meaning: 'to look for' },
      ],
    },
  },

  // === LESSON 12: Reading Real Words ===
  {
    id: 'R12',
    title: 'Reading Real Words',
    goal: 'Read complete Thai words. Vocabulary meaning testing starts here.',
    phase: 'reading',
    order: 11,
    difficulty: 'beginner',
    prerequisites: ['R11'],
    steps: [
      {
        kind: 'text',
        content:
          'You now know enough consonants and vowels to read real Thai words. Let us combine everything you have learned.\n\nFrom this lesson forward, we will practice not just HOW to read words, but WHAT they mean. These are some of the most common words in Thai.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'กิน',
            romanization: 'gin',
            english: 'to eat',
            detail: 'ก + -ิ + น = gin',
          },
          {
            thai: 'มา',
            romanization: 'maa',
            english: 'to come',
            detail: 'ม + -า = maa',
          },
          {
            thai: 'ไป',
            romanization: 'bpai',
            english: 'to go',
            detail: 'ป + ไ- = bpai',
          },
          {
            thai: 'ดี',
            romanization: 'dii',
            english: 'good',
            detail: 'ด + -ี = dii',
          },
          {
            thai: 'น้ำ',
            romanization: 'náam',
            english: 'water',
            detail: 'น + -ำ = naam, with tone mark',
          },
          {
            thai: 'ไม่',
            romanization: 'mâi',
            english: 'not',
            detail: 'ม + ไ- = mai, with tone mark',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Reading step by step: กิน (to eat)',
        steps: [
          { label: 'Initial consonant', content: 'ก = gaw ("g" sound, mid class)' },
          { label: 'Vowel', content: '-ิ = i (short, written above)' },
          { label: 'Final consonant', content: 'น = naw ("n" sound)' },
          { label: 'Combine', content: 'g + i + n = gin' },
          { label: 'Result', content: 'กิน = gin = "to eat"' },
        ],
      },
      {
        kind: 'rule',
        rule: 'You can combine these words into phrases. มาดู means "come watch" and ไปกิน means "go eat." Thai often chains verbs together without extra words.',
        examples: [
          { thai: 'มาดู', romanization: 'maa duu', english: 'come watch' },
          { thai: 'ไปกิน', romanization: 'bpai gin', english: 'go eat' },
          { thai: 'ไม่ดี', romanization: 'mâi dii', english: 'not good' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'กิน',
            options: ['gin', 'giin', 'gan', 'gun'],
            correctIndex: 0,
            audioText: 'กิน',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does มา mean?',
            promptThai: 'มา',
            options: ['to eat', 'to go', 'to come', 'water'],
            correctIndex: 2,
            audioText: 'มา',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ไม่ mean?',
            promptThai: 'ไม่',
            options: ['good', 'not', 'water', 'to go'],
            correctIndex: 1,
            audioText: 'ไม่',
          },
          {
            type: 'match',
            pairs: [
              { left: 'กิน', right: 'to eat' },
              { left: 'มา', right: 'to come' },
              { left: 'ไป', right: 'to go' },
              { left: 'ดี', right: 'good' },
            ],
          },
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'น้ำ', back: 'náam -- water', audioText: 'น้ำ' },
              { front: 'ไม่', back: 'mâi -- not', audioText: 'ไม่' },
              { front: 'ไป', back: 'bpai -- to go', audioText: 'ไป' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you read this?',
        promptThai: 'กิน',
        options: ['gin', 'giin', 'gan', 'gun'],
        correctIndex: 0,
        audioText: 'กิน',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does กิน mean?',
        promptThai: 'กิน',
        options: ['to come', 'to eat', 'to go', 'good'],
        correctIndex: 1,
        audioText: 'กิน',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does มา mean?',
        promptThai: 'มา',
        options: ['to eat', 'to go', 'to come', 'water'],
        correctIndex: 2,
        audioText: 'มา',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ไป mean?',
        promptThai: 'ไป',
        options: ['to come', 'to eat', 'to go', 'not'],
        correctIndex: 2,
        audioText: 'ไป',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ไม่ดี mean?',
        options: ['not good', 'very good', 'come watch', 'go eat'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read this?',
        promptThai: 'น้ำ',
        options: ['naam', 'naa', 'nam', 'nai'],
        correctIndex: 0,
        audioText: 'น้ำ',
      },
    ],
    srsItemIds: ['w_gin', 'w_maa', 'w_bpai', 'w_dii', 'w_naam', 'w_mai'],
    skillPreview: {
      heading: "You'll read and understand everyday words",
      examples: [
        { thai: 'กิน', romanization: 'gin', meaning: 'to eat' },
        { thai: 'มา', romanization: 'maa', meaning: 'to come' },
        { thai: 'น้ำ', romanization: 'náam', meaning: 'water' },
      ],
    },
  },

  // === LESSON 13: Building Phrases ===
  {
    id: 'R13',
    title: 'Building Phrases',
    goal: 'Combine words into phrases. Adjective-after-noun. Verb chaining.',
    phase: 'reading',
    order: 12,
    difficulty: 'beginner',
    prerequisites: ['R12'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai builds phrases by combining words. Two important patterns:\n\n1. **Adjective after noun**: "good water" = น้ำดี (water + good)\n2. **Verb chaining**: "go eat" = ไปกิน (go + eat)\n\nNo extra words needed -- just place them in the right order.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ดีมาก',
            romanization: 'dii mâak',
            english: 'very good',
          },
          {
            thai: 'ไม่ดี',
            romanization: 'mâi dii',
            english: 'not good',
          },
          {
            thai: 'มาดู',
            romanization: 'maa duu',
            english: 'come watch',
          },
          {
            thai: 'ไปกิน',
            romanization: 'bpai gin',
            english: 'go eat',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'มาก (mâak) means "very" or "much". Place it after the adjective: ดีมาก = very good. ไม่ (mâi) means "not". Place it before the verb or adjective: ไม่ดี = not good.',
        examples: [
          { thai: 'ดีมาก', romanization: 'dii mâak', english: 'very good' },
          { thai: 'ไม่มา', romanization: 'mâi maa', english: 'not coming' },
          {
            thai: 'มากินน้ำ',
            romanization: 'maa gin náam',
            english: 'come drink water',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Building longer phrases',
        steps: [
          {
            label: 'Start with a verb',
            content: 'มา (maa) = to come',
          },
          {
            label: 'Add another verb',
            content: 'มา + กิน = มากิน (come eat)',
          },
          {
            label: 'Add an object',
            content: 'มากิน + น้ำ = มากินน้ำ (come drink water)',
          },
          {
            label: 'Pattern',
            content:
              'Thai chains verbs and objects in sequence: verb + verb + object',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'fill_in',
            sentence: 'ดี___ means "very good"',
            answer: 'มาก',
            options: ['มาก', 'ไม่', 'น้ำ', 'กิน'],
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ไปกิน mean?',
            options: ['come eat', 'go watch', 'go eat', 'not eat'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does มาดู mean?',
            options: ['go watch', 'come watch', 'not watch', 'very watch'],
            correctIndex: 1,
          },
          {
            type: 'match',
            pairs: [
              { left: 'ดีมาก', right: 'very good' },
              { left: 'ไม่ดี', right: 'not good' },
              { left: 'ไปกิน', right: 'go eat' },
              { left: 'มาดู', right: 'come watch' },
            ],
          },
          {
            type: 'fill_in',
            sentence: '___ดี means "not good"',
            answer: 'ไม่',
            options: ['ไม่', 'มาก', 'ไป', 'มา'],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What does ดีมาก mean?',
        options: ['not good', 'very good', 'come watch', 'go eat'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ไปกิน mean?',
        options: ['come eat', 'go watch', 'go eat', 'not eat'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does มาดู mean?',
        options: ['go watch', 'come watch', 'not watch', 'very watch'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ไม่ดี mean?',
        options: ['very good', 'good water', 'not good', 'come good'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you say "very good" in Thai?',
        options: ['ดีไม่', 'มากดี', 'ดีมาก', 'ไม่ดี'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'In Thai, where does the adjective go?',
        options: [
          'Before the noun',
          'After the noun',
          'Before the sentence',
          'It varies',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_maak', 'w_duu', 'w_kaa'],
    skillPreview: {
      heading: "You'll read Thai phrases",
      examples: [
        { thai: 'ดีมาก', romanization: 'dii mâak', meaning: 'very good' },
        { thai: 'ไปกิน', romanization: 'bpai gin', meaning: 'go eat' },
        { thai: 'ไม่ดี', romanization: 'mâi dii', meaning: 'not good' },
      ],
    },
  },

  // === LESSON 14: Rare Consonants and the Full Alphabet ===
  {
    id: 'R14',
    title: 'Rare Consonants',
    goal: 'Learn remaining consonants including rare ones (ฎ, ฏ, ฆ, ฌ, etc.). Key framing: "You will rarely see these, but here they are for completeness."',
    phase: 'reading',
    order: 13,
    difficulty: 'beginner',
    prerequisites: ['R13'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai has 44 consonants total. You have learned the common ones. The remaining consonants are **rare** -- they appear mostly in words borrowed from Pali and Sanskrit (ancient Indian languages). You will rarely encounter them, but knowing they exist helps you read the occasional unfamiliar word.\n\nDo not worry about memorizing these. Focus on recognizing that they exist.',
      },
      {
        kind: 'table',
        title: 'Rare Consonants',
        headers: ['Thai', 'Sound', 'Keyword', 'Notes'],
        rows: [
          ['ฎ', 'daw', 'ชฎา headdress', 'Same sound as ด (mid class)'],
          ['ฏ', 'dtaw', 'ปฏัก goad', 'Same sound as ต (mid class)'],
          ['ฆ', 'kaw', 'ระฆัง bell', 'Low class (rare)'],
          ['ฌ', 'chaw', 'เฌอ tree', 'Low class (rare)'],
          ['ฑ', 'taw', 'มณโฑ Montho', 'Low class'],
          ['ฒ', 'taw', 'ผู้เฒ่า elder', 'Low class'],
          ['ณ', 'naw', 'เณร novice', 'Same as น (low class)'],
          ['ฬ', 'law', 'จุฬา kite', 'Same as ล (low class)'],
        ],
      },
      {
        kind: 'rule',
        rule: 'Many rare consonants duplicate sounds of common ones: ฎ sounds like ด, ฏ sounds like ต, ณ sounds like น. They exist because Thai borrowed words from Pali and Sanskrit that distinguished these sounds.',
        examples: [
          { thai: 'ฎ', romanization: 'daw', english: 'Same sound as ด' },
          { thai: 'ฏ', romanization: 'dtaw', english: 'Same sound as ต' },
          { thai: 'ณ', romanization: 'naw', english: 'Same sound as น' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'กฎ',
            romanization: 'gòt',
            english: 'rule or law',
          },
          {
            thai: 'บัณฑิต',
            romanization: 'ban-dìt',
            english: 'graduate',
          },
          {
            thai: 'ปฏิบัติ',
            romanization: 'bpà-dtì-bàt',
            english: 'to practice',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'ฎ makes the same sound as which common consonant?',
            options: ['ด', 'ต', 'บ', 'ก'],
            correctIndex: 0,
          },
          {
            type: 'multiple_choice',
            prompt: 'Why does Thai have rare consonants like ฎ and ณ?',
            options: [
              'They make unique sounds',
              'They are from Pali/Sanskrit loanwords',
              'They are used in modern slang',
              'They are only for writing numbers',
            ],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'How many consonants does Thai have in total?',
            options: ['33', '44', '52', '26'],
            correctIndex: 1,
          },
          {
            type: 'match',
            pairs: [
              { left: 'ฎ', right: 'Same sound as ด' },
              { left: 'ฏ', right: 'Same sound as ต' },
              { left: 'ณ', right: 'Same sound as น' },
              { left: 'ฬ', right: 'Same sound as ล' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How many consonants does Thai have in total?',
        options: ['33', '44', '52', '26'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt:
          'Why does Thai have consonants like ฎ and ณ that sound the same as ด and น?',
        options: [
          'They are from Pali/Sanskrit loanwords',
          'They make different sounds',
          'They are newer additions',
          'They are used in formal speech only',
        ],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'ฎ makes the same sound as which common consonant?',
        options: ['ด', 'ต', 'บ', 'ก'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'ฏ makes the same sound as which common consonant?',
        options: ['ด', 'ต', 'บ', 'ก'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read กฎ?',
        promptThai: 'กฎ',
        options: ['gòt', 'gòd', 'gàt', 'gàd'],
        correctIndex: 0,
        audioText: 'กฎ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which statement is true about rare consonants?',
        options: [
          'They are used in every sentence',
          'They mostly appear in Pali-Sanskrit loanwords',
          'They have unique sounds',
          'They are only in names',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['dor_chada', 'dtor_patak', 'khor_rakhang'],
    skillPreview: {
      heading: "You'll recognize the full Thai alphabet",
      examples: [
        { thai: 'กฎ', romanization: 'gòt', meaning: 'rule' },
        { thai: 'บัณฑิต', romanization: 'ban-dìt', meaning: 'graduate' },
        {
          thai: 'ปฏิบัติ',
          romanization: 'bpà-dtì-bàt',
          meaning: 'to practice',
        },
      ],
    },
  },

  // === LESSON 15: Comprehensive Reading Practice ===
  {
    id: 'R15',
    title: 'Reading Practice',
    goal: 'Read signs, menus, common text patterns. Consolidation of everything learned.',
    phase: 'reading',
    order: 14,
    difficulty: 'beginner',
    prerequisites: ['R14'],
    steps: [
      {
        kind: 'text',
        content:
          'Time to put everything together. You know most consonants, many vowels, and can read real words and phrases. Let us practice reading the kind of Thai text you would see in everyday life -- signs, menus, and common expressions.',
      },
      {
        kind: 'example',
        title: 'Reading a sign: ร้านอาหาร (restaurant)',
        steps: [
          {
            label: 'First word',
            content: 'ร้าน = ráan = shop, store',
          },
          {
            label: 'Second word',
            content: 'อาหาร = aa-hǎan = food',
          },
          {
            label: 'Combine',
            content: 'ร้าน + อาหาร = ráan aa-hǎan',
          },
          {
            label: 'Meaning',
            content: '"shop food" = restaurant. Thai builds compound words by combining simple ones.',
          },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'กิน',
            romanization: 'gin',
            english: 'to eat',
          },
          {
            thai: 'มี',
            romanization: 'mii',
            english: 'to have',
          },
          {
            thai: 'ร้าน',
            romanization: 'ráan',
            english: 'shop or store',
          },
          {
            thai: 'อาหาร',
            romanization: 'aa-hǎan',
            english: 'food',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'ร้านอาหาร literally means "shop food" = restaurant. Thai often combines simple words to make compound words: ร้าน (shop) + อาหาร (food) = ร้านอาหาร (restaurant).',
        examples: [
          {
            thai: 'ร้านอาหาร',
            romanization: 'ráan aa-hǎan',
            english: 'restaurant',
          },
          {
            thai: 'น้ำดื่ม',
            romanization: 'náam dùuem',
            english: 'drinking water',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What does กิน mean?',
            promptThai: 'กิน',
            options: ['to come', 'to eat', 'good', 'water'],
            correctIndex: 1,
            audioText: 'กิน',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ร้านอาหาร mean?',
            options: ['hospital', 'school', 'restaurant', 'bank'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'กา',
            options: ['gaa', 'kaa', 'jaa', 'daa'],
            correctIndex: 0,
            audioText: 'กา',
          },
          {
            type: 'match',
            pairs: [
              { left: 'กิน', right: 'to eat' },
              { left: 'มี', right: 'to have' },
              { left: 'ร้าน', right: 'shop' },
              { left: 'อาหาร', right: 'food' },
            ],
          },
          {
            type: 'fill_in',
            sentence: 'ร้าน___ means "restaurant"',
            answer: 'อาหาร',
            options: ['อาหาร', 'น้ำ', 'ดี', 'มาก'],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you read กา?',
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
        options: [
          'go eat chicken',
          'come eat chicken',
          'good chicken',
          'eat good fish',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read นา?',
        promptThai: 'นา',
        options: ['maa', 'laa', 'raa', 'naa'],
        correctIndex: 3,
        audioText: 'นา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read ลำ?',
        promptThai: 'ลำ',
        options: ['laa', 'lam', 'lai', 'lii'],
        correctIndex: 1,
        audioText: 'ลำ',
      },
      {
        type: 'multiple_choice',
        prompt:
          'Look at: กา, ดา, ตา, บา. What do they all share?',
        options: [
          'Same consonant',
          'Same vowel -า',
          'All high-class',
          'Same meaning',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt:
          'If you see ร้านอาหาร on a building, what kind of place is it?',
        options: ['School', 'Hospital', 'Restaurant', 'Bank'],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['w_gin', 'w_mii', 'w_raan'],
    skillPreview: {
      heading: "You'll read signs and everyday text",
      examples: [
        {
          thai: 'ร้านอาหาร',
          romanization: 'ráan aa-hǎan',
          meaning: 'restaurant',
        },
        { thai: 'ข้าวผัด', romanization: 'kâao pàt', meaning: 'fried rice' },
        { thai: 'น้ำ', romanization: 'náam', meaning: 'water' },
      ],
    },
  },
]
