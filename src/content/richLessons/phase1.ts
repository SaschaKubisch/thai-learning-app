import type { RichLesson } from '../lessonTypes'

// Phase 1: Mid-Class Consonants (Lessons 1-5)
// Teaches all 9 mid-class consonants in groups, introducing the concept of consonant classes.
// Uses Paiboon+ romanization throughout.

export const phase1Lessons: RichLesson[] = [
  // === LESSON 1: First 3 mid-class consonants ===
  {
    id: 'R01',
    title: 'Your First Thai Letters',
    goal: 'Learn the consonants ก, จ, and ด and understand that Thai is written with its own alphabet.',
    phase: 'consonants',
    order: 0,
    difficulty: 'beginner',
    prerequisites: [],
    steps: [
      {
        kind: 'text',
        content:
          'Welcome to Thai reading. Thai has its own alphabet -- 44 consonants and many vowels. But you do not need to learn them all at once.\n\nWe will start with just three consonants. These belong to the **mid class**, a group whose tone rules are the simplest. You will learn what that means later -- for now, just focus on the shapes and sounds.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ก',
            romanization: 'gaw',
            english: '"g" sound -- as in "go"',
            detail: 'Keyword: ไก่ (gai) = chicken',
            audioText: 'กอ',
          },
          {
            thai: 'จ',
            romanization: 'jaw',
            english: '"j" sound -- as in "jump"',
            detail: 'Keyword: จาน (jaan) = plate',
            audioText: 'จอ',
          },
          {
            thai: 'ด',
            romanization: 'daw',
            english: '"d" sound -- as in "do"',
            detail: 'Keyword: เด็ก (dek) = child',
            audioText: 'ดอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Every Thai consonant has a keyword -- a word that starts with that consonant. Thai children learn consonants this way: "ก ไก่" (gaw gai) means "ก as in chicken."',
        examples: [
          { thai: 'ก ไก่', romanization: 'gaw gai', english: 'G as in chicken' },
          { thai: 'จ จาน', romanization: 'jaw jaan', english: 'J as in plate' },
          { thai: 'ด เด็ก', romanization: 'daw dek', english: 'D as in child' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What sound does this consonant make?',
            promptThai: 'ก',
            options: ['gaw', 'jaw', 'daw', 'baw'],
            correctIndex: 0,
            audioText: 'กอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What sound does this consonant make?',
            promptThai: 'จ',
            options: ['daw', 'gaw', 'jaw', 'dtaw'],
            correctIndex: 2,
            audioText: 'จอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'Which consonant makes the "d" sound?',
            options: ['ก', 'จ', 'ด', 'บ'],
            correctIndex: 2,
          },
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'ก', back: 'gaw -- "g" (chicken)', audioText: 'กอ' },
              { front: 'จ', back: 'jaw -- "j" (plate)', audioText: 'จอ' },
              { front: 'ด', back: 'daw -- "d" (child)', audioText: 'ดอ' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What sound does this consonant make?',
        promptThai: 'ก',
        options: ['jaw', 'gaw', 'baw', 'daw'],
        correctIndex: 1,
        audioText: 'กอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant makes the "j" sound?',
        options: ['ก', 'ด', 'จ', 'บ'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the keyword for ด?',
        promptThai: 'ด',
        options: ['chicken (ไก่)', 'plate (จาน)', 'child (เด็ก)', 'fish (ปลา)'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does this consonant make?',
        promptThai: 'จ',
        options: ['daw', 'baw', 'jaw', 'gaw'],
        correctIndex: 2,
        audioText: 'จอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant makes the "g" sound?',
        options: ['จ', 'ด', 'บ', 'ก'],
        correctIndex: 3,
      },
    ],
    srsItemIds: ['kor_kai', 'jor_jaan', 'dor_dek'],
    skillPreview: {
      heading: 'You\'ll recognize your first Thai words',
      examples: [
        { thai: 'ไก่', romanization: 'gài', meaning: 'chicken' },
        { thai: 'จาน', romanization: 'jaan', meaning: 'plate' },
        { thai: 'เด็ก', romanization: 'dèk', meaning: 'child' },
      ],
    },
  },

  // === LESSON 2: Next 3 mid-class consonants ===
  {
    id: 'R02',
    title: 'More Mid-Class Consonants',
    goal: 'Learn ต, บ, and ป -- three more mid-class consonants with unique sounds.',
    phase: 'consonants',
    order: 1,
    difficulty: 'beginner',
    prerequisites: ['R01'],
    steps: [
      {
        kind: 'text',
        content:
          'Great work learning your first three consonants. Now let us add three more from the same mid class.\n\nTwo of these have sounds that do not exist in English. Thai distinguishes between **aspirated** consonants (with a puff of air, like the English "t" and "p") and **unaspirated** ones (no puff). The letters ต and ป are unaspirated.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ต',
            romanization: 'dtaw',
            english: '"dt" sound -- between English "d" and "t"',
            detail: 'Keyword: เต่า (dtao) = turtle',
            audioText: 'ตอ',
          },
          {
            thai: 'บ',
            romanization: 'baw',
            english: '"b" sound -- as in "bat"',
            detail: 'Keyword: ใบไม้ (bai-mai) = leaf',
            audioText: 'บอ',
          },
          {
            thai: 'ป',
            romanization: 'bpaw',
            english: '"bp" sound -- between English "b" and "p"',
            detail: 'Keyword: ปลา (bplaa) = fish',
            audioText: 'ปอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Thai has two pairs of "stop" consonants that English speakers find tricky: **dt/t** and **bp/p**. The "dt" sound (ต) is unaspirated -- hold your hand in front of your mouth and you should feel NO puff of air. The "bp" sound (ป) is the same idea for the "b/p" pair.',
        examples: [
          { thai: 'ต', romanization: 'dtaw', english: 'Unaspirated -- no air puff' },
          { thai: 'ป', romanization: 'bpaw', english: 'Unaspirated -- no air puff' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What sound does this consonant make?',
            promptThai: 'ต',
            options: ['baw', 'dtaw', 'gaw', 'bpaw'],
            correctIndex: 1,
            audioText: 'ตอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'Which consonant makes the "b" sound?',
            options: ['ป', 'ก', 'บ', 'ต'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'What sound does this consonant make?',
            promptThai: 'ป',
            options: ['daw', 'bpaw', 'jaw', 'dtaw'],
            correctIndex: 1,
            audioText: 'ปอ',
          },
          {
            type: 'match',
            pairs: [
              { left: 'ต', right: 'dtaw' },
              { left: 'บ', right: 'baw' },
              { left: 'ป', right: 'bpaw' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What sound does this consonant make?',
        promptThai: 'บ',
        options: ['bpaw', 'baw', 'daw', 'dtaw'],
        correctIndex: 1,
        audioText: 'บอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant makes the "dt" sound?',
        options: ['บ', 'ด', 'ต', 'ป'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does this consonant make?',
        promptThai: 'ป',
        options: ['baw', 'gaw', 'bpaw', 'dtaw'],
        correctIndex: 2,
        audioText: 'ปอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the keyword for บ?',
        options: ['turtle (เต่า)', 'fish (ปลา)', 'leaf (ใบไม้)', 'plate (จาน)'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant makes the "bp" sound?',
        options: ['ต', 'บ', 'ก', 'ป'],
        correctIndex: 3,
      },
    ],
    srsItemIds: ['dtor_dtao', 'bor_baimai', 'por_plaa'],
    skillPreview: {
      heading: 'You\'ll read more Thai words',
      examples: [
        { thai: 'เต่า', romanization: 'dtào', meaning: 'turtle' },
        { thai: 'ใบไม้', romanization: 'bai-máai', meaning: 'leaf' },
        { thai: 'ปลา', romanization: 'bplaa', meaning: 'fish' },
      ],
    },
  },

  // === LESSON 3: Last 3 mid-class consonants ===
  {
    id: 'R03',
    title: 'Completing the Mid Class',
    goal: 'Learn ฎ, ฏ, and อ to complete all 9 mid-class consonants.',
    phase: 'consonants',
    order: 2,
    difficulty: 'beginner',
    prerequisites: ['R02'],
    steps: [
      {
        kind: 'text',
        content:
          'You have learned 6 of the 9 mid-class consonants. Let us finish the set.\n\nTwo of these -- ฎ and ฏ -- are rare in modern Thai. They appear mostly in words borrowed from Pali and Sanskrit. The third, อ, is extremely common and has a special role: it often acts as a **silent consonant** that carries a vowel.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ฎ',
            romanization: 'daw',
            english: '"d" sound -- same as ด',
            detail: 'Keyword: ชฎา (cha-daa) = headdress. Rare letter.',
            audioText: 'ฎ',
          },
          {
            thai: 'ฏ',
            romanization: 'dtaw',
            english: '"dt" sound -- same as ต',
            detail: 'Keyword: ปฏัก (bpa-dtak) = goad. Rare letter.',
            audioText: 'ฏ',
          },
          {
            thai: 'อ',
            romanization: 'aw',
            english: 'Glottal stop / silent carrier',
            detail: 'Keyword: อ่าง (aang) = basin. Very common letter.',
            audioText: 'ออ',
          },
        ],
      },
      {
        kind: 'table',
        title: 'All 9 Mid-Class Consonants',
        headers: ['Letter', 'Sound', 'Keyword'],
        rows: [
          ['ก', 'gaw', 'chicken (ไก่)'],
          ['จ', 'jaw', 'plate (จาน)'],
          ['ฎ', 'daw', 'headdress (ชฎา)'],
          ['ฏ', 'dtaw', 'goad (ปฏัก)'],
          ['ด', 'daw', 'child (เด็ก)'],
          ['ต', 'dtaw', 'turtle (เต่า)'],
          ['บ', 'baw', 'leaf (ใบไม้)'],
          ['ป', 'bpaw', 'fish (ปลา)'],
          ['อ', 'aw', 'basin (อ่าง)'],
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What role does อ play in Thai?',
            options: [
              'It makes a "k" sound',
              'It acts as a silent vowel carrier',
              'It is a tone mark',
              'It is never used',
            ],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'Which class do all 9 of these consonants belong to?',
            options: ['High class', 'Low class', 'Mid class', 'Special class'],
            correctIndex: 2,
          },
          {
            type: 'match',
            pairs: [
              { left: 'ฎ', right: 'daw (headdress)' },
              { left: 'ฏ', right: 'dtaw (goad)' },
              { left: 'อ', right: 'aw (basin)' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How many mid-class consonants are there in Thai?',
        options: ['5', '7', '9', '11'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does อ make?',
        promptThai: 'อ',
        options: ['gaw', 'jaw', 'aw (glottal stop)', 'baw'],
        correctIndex: 2,
        audioText: 'ออ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant makes the "g" sound?',
        options: ['จ', 'ก', 'อ', 'ป'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'ฎ and ฏ are mostly found in words from which languages?',
        options: ['Chinese and Japanese', 'English and French', 'Pali and Sanskrit', 'Khmer and Lao'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant is a silent carrier for vowels?',
        options: ['ก', 'บ', 'ต', 'อ'],
        correctIndex: 3,
      },
    ],
    srsItemIds: ['dor_chada', 'dtor_patak', 'or_ang'],
    skillPreview: {
      heading: 'You\'ll know all 9 mid-class consonants',
      examples: [
        { thai: 'อ่าง', romanization: 'àang', meaning: 'basin' },
        { thai: 'ชฎา', romanization: 'chá-daa', meaning: 'headdress' },
        { thai: 'ปฏัก', romanization: 'bpà-dtàk', meaning: 'goad' },
      ],
    },
  },

  // === LESSON 4: Consonant Classes Introduction ===
  {
    id: 'R04',
    title: 'Consonant Classes',
    goal: 'Understand the three consonant classes (mid, high, low) and why they matter for tones.',
    phase: 'consonants',
    order: 3,
    difficulty: 'beginner',
    prerequisites: ['R03'],
    steps: [
      {
        kind: 'text',
        content:
          'You have learned all 9 mid-class consonants. Now let us talk about why they are called "mid class."\n\nEvery Thai consonant belongs to one of three classes: **mid**, **high**, or **low**. The class determines the **tone** of a syllable. Thai has 5 tones, and the consonant class is the first piece of the puzzle for figuring out which tone to use.',
      },
      {
        kind: 'table',
        title: 'The Three Consonant Classes',
        headers: ['Class', 'Count', 'Default Tone (no tone mark)', 'Example'],
        rows: [
          ['Mid', '9', 'Mid tone (flat, neutral)', 'ก gaw'],
          ['High', '11', 'Rising tone', 'ข kaw'],
          ['Low', '24', 'Mid tone (flat, neutral)', 'ค kaw'],
        ],
      },
      {
        kind: 'rule',
        rule: 'The consonant class is not about the sound -- it is about how the tone is determined. Two consonants can make the same sound but belong to different classes. For example, ค and ข both sound like "k" (aspirated), but ค is low class and ข is high class.',
        examples: [
          { thai: 'ข', romanization: 'kaw (high class)', english: 'Aspirated "k"' },
          { thai: 'ค', romanization: 'kaw (low class)', english: 'Aspirated "k" -- same sound, different class' },
        ],
      },
      {
        kind: 'text',
        content:
          'For now, just remember: **mid-class consonants produce mid tone** in simple syllables (with a long vowel and no tone mark). We will learn the full tone rules in the Tones phase.\n\nNext, let us meet some high-class consonants.',
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How many consonant classes does Thai have?',
            options: ['2', '3', '4', '5'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'Which class do ก, จ, ด, ต, บ, ป, and อ belong to?',
            options: ['High class', 'Low class', 'Mid class', 'None'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'Two consonants can make the same sound but belong to different classes. True or false?',
            options: ['True', 'False'],
            correctIndex: 0,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How many consonant classes are there?',
        options: ['2', '3', '5', '7'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What determines the tone of a Thai syllable?',
        options: [
          'The vowel only',
          'The consonant class plus other factors',
          'The position in the sentence',
          'Random -- there are no rules',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Which of these is a mid-class consonant?',
        options: ['ข', 'ค', 'ก', 'ง'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'A mid-class consonant with a long vowel and no tone mark produces what tone?',
        options: ['Low tone', 'High tone', 'Mid tone', 'Falling tone'],
        correctIndex: 2,
      },
    ],
    srsItemIds: [],
    skillPreview: {
      heading: 'You\'ll understand the three consonant classes',
      examples: [
        { thai: 'กา', romanization: 'gaa', meaning: 'crow (mid class)' },
        { thai: 'ขา', romanization: 'kǎa', meaning: 'leg (high class)' },
        { thai: 'คา', romanization: 'kaa', meaning: 'to be stuck (low class)' },
      ],
    },
  },

  // === LESSON 5: First High-Class Consonants ===
  {
    id: 'R05',
    title: 'High-Class Consonants',
    goal: 'Learn the high-class consonants ข, ฉ, and ถ.',
    phase: 'consonants',
    order: 4,
    difficulty: 'beginner',
    prerequisites: ['R04'],
    steps: [
      {
        kind: 'text',
        content:
          'Time to learn consonants from a new class -- the **high class**. High-class consonants produce a **rising tone** in simple syllables (long vowel, no tone mark).\n\nNotice that high-class consonants are all **aspirated** -- pronounced with a puff of air.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ข',
            romanization: 'kaw',
            english: '"k" sound (aspirated) -- as in "kite"',
            detail: 'Keyword: ไข่ (khai) = egg. High class.',
            audioText: 'ขอ',
          },
          {
            thai: 'ฉ',
            romanization: 'chaw',
            english: '"ch" sound (aspirated) -- as in "chair"',
            detail: 'Keyword: ฉิ่ง (ching) = cymbals. High class.',
            audioText: 'ฉอ',
          },
          {
            thai: 'ถ',
            romanization: 'taw',
            english: '"t" sound (aspirated) -- as in "top"',
            detail: 'Keyword: ถุง (tung) = bag. High class.',
            audioText: 'ถอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'High-class consonants are **aspirated**: they are pronounced with a noticeable puff of air. Compare: ก (gaw, unaspirated mid-class) vs ข (kaw, aspirated high-class). Both are "k-like" sounds, but ข has a puff of air and belongs to the high class.',
        examples: [
          { thai: 'ก', romanization: 'gaw', english: 'Mid class, unaspirated "g/k"' },
          { thai: 'ข', romanization: 'kaw', english: 'High class, aspirated "k"' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What class does ข belong to?',
            promptThai: 'ข',
            options: ['Mid class', 'High class', 'Low class', 'Special class'],
            correctIndex: 1,
            audioText: 'ขอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What sound does ฉ make?',
            promptThai: 'ฉ',
            options: ['kaw', 'taw', 'chaw', 'saw'],
            correctIndex: 2,
            audioText: 'ฉอ',
          },
          {
            type: 'match',
            pairs: [
              { left: 'ข', right: 'kaw (egg)' },
              { left: 'ฉ', right: 'chaw (cymbals)' },
              { left: 'ถ', right: 'taw (bag)' },
            ],
          },
          {
            type: 'multiple_choice',
            prompt: 'Which of these is a mid-class consonant (not high-class)?',
            options: ['ข', 'ฉ', 'ก', 'ถ'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What sound does ข make?',
        promptThai: 'ข',
        options: ['gaw', 'kaw', 'chaw', 'taw'],
        correctIndex: 1,
        audioText: 'ขอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which class do ข, ฉ, and ถ belong to?',
        options: ['Mid class', 'High class', 'Low class'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'High-class consonants are aspirated. What does aspirated mean?',
        options: [
          'Pronounced silently',
          'Pronounced with a puff of air',
          'Pronounced nasally',
          'Pronounced quickly',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What is the keyword for ถ?',
        promptThai: 'ถ',
        options: ['egg (ไข่)', 'cymbals (ฉิ่ง)', 'bag (ถุง)', 'chicken (ไก่)'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Which consonant makes the "ch" sound and is high class?',
        options: ['จ', 'ฉ', 'ช', 'ก'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['khor_khai', 'chor_ching', 'thor_thung'],
    skillPreview: {
      heading: 'You\'ll read high-class consonant words',
      examples: [
        { thai: 'ไข่', romanization: 'kài', meaning: 'egg' },
        { thai: 'ผม', romanization: 'pǒm', meaning: 'I (male)' },
        { thai: 'สี', romanization: 'sǐi', meaning: 'color' },
      ],
    },
  },
]
