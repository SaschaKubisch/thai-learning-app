import type { RichLesson } from '../lessonTypes'

// Phase 1: First Letters and Sounds (Lessons 1-5)
// Introduces consonants alongside vowels from R01 so students can read real syllables from day one.
// Uses Paiboon+ romanization throughout.

export const phase1Lessons: RichLesson[] = [
  // === LESSON 1: First 3 consonants + vowel -า ===
  {
    id: 'R01',
    title: 'Your First Thai Letters',
    goal: 'Learn consonants ก (gaw), จ (jaw), ด (daw) and vowel -า (aa). Read your first Thai syllables.',
    phase: 'consonants',
    order: 0,
    difficulty: 'beginner',
    prerequisites: [],
    steps: [
      {
        kind: 'text',
        content:
          'Welcome to Thai reading. Thai has its own alphabet -- 44 consonants and many vowels. But you do not need to learn them all at once.\n\nWe will start with just **three consonants** and **one vowel**. By the end of this lesson, you will be able to read your first Thai syllables.',
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
        kind: 'info_card',
        items: [
          {
            thai: '-า',
            romanization: 'aa',
            english: 'Long "aa" -- as in "father"',
            detail: 'Written after the consonant: กา = gaa',
            audioText: 'กา',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Reading your first syllable: กา',
        steps: [
          { label: 'Step 1', content: 'Identify the consonant: ก = gaw (g sound)' },
          { label: 'Step 2', content: 'Identify the vowel: -า = aa (long)' },
          { label: 'Step 3', content: 'Combine: g + aa = gaa' },
          { label: 'Step 4', content: 'กา is pronounced "gaa". It means "crow".' },
          { label: 'Result', content: 'You just read your first Thai word.' },
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
            prompt: 'What sound does this consonant make?',
            promptThai: 'ด',
            options: ['bpaw', 'baw', 'daw', 'gaw'],
            correctIndex: 2,
            audioText: 'ดอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this syllable?',
            promptThai: 'กา',
            options: ['gaa', 'jaa', 'daa', 'baa'],
            correctIndex: 0,
            audioText: 'กา',
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
        prompt: 'What sound does ก make?',
        promptThai: 'ก',
        options: ['jaw', 'gaw', 'baw', 'daw'],
        correctIndex: 1,
        audioText: 'กอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does จ make?',
        promptThai: 'จ',
        options: ['daw', 'gaw', 'jaw', 'dtaw'],
        correctIndex: 2,
        audioText: 'จอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does ด make?',
        promptThai: 'ด',
        options: ['bpaw', 'daw', 'jaw', 'baw'],
        correctIndex: 1,
        audioText: 'ดอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is the vowel -า written relative to the consonant?',
        options: ['Above', 'Below', 'Before', 'After the consonant'],
        correctIndex: 3,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read กา?',
        promptThai: 'กา',
        options: ['gaa', 'jaa', 'daa', 'baa'],
        correctIndex: 0,
        audioText: 'กา',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read ดา?',
        promptThai: 'ดา',
        options: ['gaa', 'jaa', 'baa', 'daa'],
        correctIndex: 3,
        audioText: 'ดา',
      },
    ],
    srsItemIds: ['kor_kai', 'jor_jaan', 'dor_dek', 'sara_aa', 'w_gaa', 'w_daa'],
    skillPreview: {
      heading: "You'll read your first Thai syllables",
      examples: [
        { thai: 'กา', romanization: 'gaa', meaning: 'crow' },
        { thai: 'จา', romanization: 'jaa', meaning: 'to remember' },
        { thai: 'ดา', romanization: 'daa', meaning: '(name)' },
      ],
    },
  },

  // === LESSON 2: Consonants ต, บ, ป + vowel -ี ===
  {
    id: 'R02',
    title: 'More Consonants, More Sounds',
    goal: 'Learn consonants ต (dtaw), บ (baw), ป (bpaw) and vowel -ี (ii). Read syllables with two vowel patterns.',
    phase: 'consonants',
    order: 1,
    difficulty: 'beginner',
    prerequisites: ['R01'],
    steps: [
      {
        kind: 'text',
        content:
          'Three more consonants plus a new vowel. You already know -า (aa) which is written after the consonant. Now meet -ี (ii) which is written **above** the consonant.\n\nTwo of these consonants have sounds that English does not distinguish: ต (dt) and ป (bp) are **unaspirated** -- pronounced without a puff of air.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ต',
            romanization: 'dtaw',
            english: '"dt" -- between "d" and "t"',
            detail: 'Keyword: เต่า (dtao) = turtle',
            audioText: 'ตอ',
          },
          {
            thai: 'บ',
            romanization: 'baw',
            english: '"b" -- as in "bat"',
            detail: 'Keyword: ใบไม้ (bai-mai) = leaf',
            audioText: 'บอ',
          },
          {
            thai: 'ป',
            romanization: 'bpaw',
            english: '"bp" -- between "b" and "p"',
            detail: 'Keyword: ปลา (bplaa) = fish',
            audioText: 'ปอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Thai has "unaspirated" consonants -- pronounced without a puff of air. Hold your hand in front of your mouth: ต (dt) and ป (bp) produce no air puff, while English "t" and "p" do.',
        examples: [
          { thai: 'ต', romanization: 'dtaw', english: 'Unaspirated -- no air puff' },
          { thai: 'ป', romanization: 'bpaw', english: 'Unaspirated -- no air puff' },
          { thai: 'บ', romanization: 'baw', english: 'Regular "b" sound' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: '-ี',
            romanization: 'ii',
            english: 'Long "ii" -- as in "see"',
            detail: 'Written above the consonant: ดี = dii',
            audioText: 'ดี',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Reading ดี: your second vowel pattern',
        steps: [
          { label: 'Step 1', content: 'Consonant: ด = daw (d sound)' },
          { label: 'Step 2', content: 'Vowel: -ี = ii (written above)' },
          { label: 'Step 3', content: 'Combine: d + ii = dii' },
          { label: 'Result', content: 'ดี is pronounced "dii". It means "good" -- one of the most common Thai words.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What sound does ต make?',
            promptThai: 'ต',
            options: ['baw', 'dtaw', 'gaw', 'bpaw'],
            correctIndex: 1,
            audioText: 'ตอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What sound does ป make?',
            promptThai: 'ป',
            options: ['daw', 'bpaw', 'jaw', 'dtaw'],
            correctIndex: 1,
            audioText: 'ปอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'ดี',
            options: ['daa', 'duu', 'dii', 'dee'],
            correctIndex: 2,
            audioText: 'ดี',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'ตา',
            options: ['dtaa', 'baa', 'gaa', 'jaa'],
            correctIndex: 0,
            audioText: 'ตา',
          },
          {
            type: 'match',
            pairs: [
              { left: 'ต', right: 'dtaw' },
              { left: 'บ', right: 'baw' },
              { left: 'ป', right: 'bpaw' },
              { left: 'ด', right: 'daw' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What sound does ต make?',
        promptThai: 'ต',
        options: ['dtaw', 'baw', 'gaw', 'jaw'],
        correctIndex: 0,
        audioText: 'ตอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does บ make?',
        promptThai: 'บ',
        options: ['bpaw', 'baw', 'daw', 'dtaw'],
        correctIndex: 1,
        audioText: 'บอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What sound does ป make?',
        promptThai: 'ป',
        options: ['baw', 'daw', 'bpaw', 'gaw'],
        correctIndex: 2,
        audioText: 'ปอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is the vowel -ี written?',
        options: ['After the consonant', 'Above the consonant', 'Below the consonant', 'Before the consonant'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read ดี?',
        promptThai: 'ดี',
        options: ['dii', 'daa', 'duu', 'dee'],
        correctIndex: 0,
        audioText: 'ดี',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read ตา?',
        promptThai: 'ตา',
        options: ['baa', 'dtaa', 'gaa', 'jaa'],
        correctIndex: 1,
        audioText: 'ตา',
      },
    ],
    srsItemIds: ['dtor_dtao', 'bor_baimai', 'por_plaa', 'sara_ii', 'w_dii', 'w_dtaa'],
    skillPreview: {
      heading: "You'll read syllables with two vowel patterns",
      examples: [
        { thai: 'ดี', romanization: 'dii', meaning: 'good' },
        { thai: 'ตา', romanization: 'dtaa', meaning: 'eye' },
        { thai: 'บา', romanization: 'baa', meaning: 'shoulder' },
      ],
    },
  },

  // === LESSON 3: Consonant อ + vowels -ู and เ- ===
  {
    id: 'R03',
    title: 'Vowels Above and Below',
    goal: 'Learn consonant อ (aw, silent carrier) and vowels -ู (uu, below) and เ- (ee, before). Understand vowels appear in different positions.',
    phase: 'consonants',
    order: 2,
    difficulty: 'beginner',
    prerequisites: ['R02'],
    steps: [
      {
        kind: 'text',
        content:
          'Vowels in Thai do not always sit in the same place. You already know -า (after) and -ี (above). Now meet two more: -ู (below) and เ- (before the consonant!).\n\nWe will also learn อ, a special consonant that acts as a **silent carrier** for vowels when no other consonant is present.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'อ',
            romanization: 'aw',
            english: 'Glottal stop / silent carrier',
            detail: 'When อ starts a syllable, it carries the vowel. อา = aa (uncle/aunt)',
            audioText: 'ออ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'อ is unique: when it starts a syllable, it is silent and just carries the vowel. อา is pronounced "aa" (not "aw-aa"). It means "uncle" or "aunt."',
        examples: [
          { thai: 'อา', romanization: 'aa', english: 'uncle or aunt (อ carries the vowel)' },
          { thai: 'ดู', romanization: 'duu', english: 'to watch (vowel -ู written below)' },
          { thai: 'เก', romanization: 'gee', english: 'old thing (vowel เ- written before)' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: '-ู',
            romanization: 'uu',
            english: 'Long "uu" -- as in "moon"',
            detail: 'Written below: ดู = duu (to watch)',
            audioText: 'ดู',
          },
          {
            thai: 'เ-',
            romanization: 'ee',
            english: 'Long "ee" -- as in "hey"',
            detail: 'Written BEFORE the consonant: เก = gee',
            audioText: 'เก',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Vowels move around the consonant',
        steps: [
          { label: 'Step 1', content: 'กา: vowel -า is written AFTER ก' },
          { label: 'Step 2', content: 'ดี: vowel -ี is written ABOVE ด' },
          { label: 'Step 3', content: 'ดู: vowel -ู is written BELOW ด' },
          { label: 'Step 4', content: 'เก: vowel เ- is written BEFORE ก' },
          { label: 'Result', content: 'Four different positions -- the consonant stays in place while the vowel moves around it.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'Where is the vowel -ู written?',
            options: ['After', 'Above', 'Below', 'Before'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'Where is the vowel เ- written?',
            options: ['After', 'Above', 'Below', 'Before'],
            correctIndex: 3,
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'ดู',
            options: ['daa', 'dii', 'duu', 'dee'],
            correctIndex: 2,
            audioText: 'ดู',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'เก',
            options: ['gaa', 'gii', 'guu', 'gee'],
            correctIndex: 3,
            audioText: 'เก',
          },
          {
            type: 'match',
            pairs: [
              { left: 'กา', right: 'gaa (vowel after)' },
              { left: 'ดี', right: 'dii (vowel above)' },
              { left: 'ดู', right: 'duu (vowel below)' },
              { left: 'เก', right: 'gee (vowel before)' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What role does อ play in Thai?',
        options: ['It makes a "k" sound', 'It acts as a silent vowel carrier', 'It is a tone mark', 'It is never used'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read อา?',
        promptThai: 'อา',
        options: ['aw-aa', 'aa', 'oo', 'ee'],
        correctIndex: 1,
        audioText: 'อา',
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is -ู written relative to the consonant?',
        options: ['After', 'Above', 'Below', 'Before'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is เ- written relative to the consonant?',
        options: ['After', 'Above', 'Below', 'Before'],
        correctIndex: 3,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read ดู?',
        promptThai: 'ดู',
        options: ['dii', 'daa', 'duu', 'dee'],
        correctIndex: 2,
        audioText: 'ดู',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read เจ?',
        promptThai: 'เจ',
        options: ['jaa', 'jii', 'juu', 'jee'],
        correctIndex: 3,
        audioText: 'เจ',
      },
    ],
    srsItemIds: ['or_ang', 'sara_uu', 'sara_ee', 'w_duu', 'w_gee'],
    skillPreview: {
      heading: "You'll read vowels in four positions",
      examples: [
        { thai: 'ดู', romanization: 'duu', meaning: 'to watch' },
        { thai: 'เก', romanization: 'gee', meaning: 'old' },
        { thai: 'อา', romanization: 'aa', meaning: 'uncle' },
      ],
    },
  },

  // === LESSON 4: Vowels แ-, โ-, and -อ ===
  {
    id: 'R04',
    title: 'More Vowel Patterns',
    goal: 'Learn vowels แ- (ae), โ- (oo), and -อ (aw). Read dozens of syllable combinations.',
    phase: 'consonants',
    order: 3,
    difficulty: 'beginner',
    prerequisites: ['R03'],
    steps: [
      {
        kind: 'text',
        content:
          'Three more vowel patterns to learn. Two are written before the consonant (like เ-), and one after.\n\nAfter this lesson you will know **six vowels** and can combine them with your **seven consonants** to read dozens of distinct syllables.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'แ-',
            romanization: 'ae',
            english: 'Long "ae" -- as in "cat"',
            detail: 'Written BEFORE the consonant: แก = gae',
            audioText: 'แก',
          },
          {
            thai: 'โ-',
            romanization: 'oo',
            english: 'Long "oo" -- as in "go"',
            detail: 'Written BEFORE the consonant: โต = dtoo',
            audioText: 'โต',
          },
          {
            thai: '-อ',
            romanization: 'aw',
            english: 'Long "aw" -- as in "law"',
            detail: 'Written AFTER the consonant: กอ = gaw',
            audioText: 'กอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Now you know three vowels that appear BEFORE the consonant: เ- (ee), แ- (ae), and โ- (oo). Remember: read rightward to find the consonant, then combine.',
        examples: [
          { thai: 'แก', romanization: 'gae', english: 'you (informal)' },
          { thai: 'โต', romanization: 'dtoo', english: 'big' },
          { thai: 'กอ', romanization: 'gaw', english: 'to hug' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'จอ',
            romanization: 'jaw',
            english: 'screen',
            detail: 'จ + -อ = jaw',
          },
          {
            thai: 'แด',
            romanization: 'dae',
            english: '(particle/offering)',
          },
          {
            thai: 'โก',
            romanization: 'goo',
            english: '(proper name/cheating)',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Which vowels go before the consonant?',
        steps: [
          { label: 'Step 1', content: 'BEFORE: เ- (ee), แ- (ae), โ- (oo) -- these three sit to the LEFT' },
          { label: 'Step 2', content: 'AFTER: -า (aa), -อ (aw) -- these two sit to the RIGHT' },
          { label: 'Step 3', content: 'ABOVE: -ี (ii) -- this one sits on TOP' },
          { label: 'Step 4', content: 'BELOW: -ู (uu) -- this one sits underneath' },
          { label: 'Result', content: 'Seven vowels in four positions around the consonant.' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'โต',
            options: ['dtaa', 'dtoo', 'dtaw', 'dtii'],
            correctIndex: 1,
            audioText: 'โต',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'กอ',
            options: ['goo', 'gee', 'gaw', 'gae'],
            correctIndex: 2,
            audioText: 'กอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'แก',
            options: ['gee', 'gae', 'gaa', 'goo'],
            correctIndex: 1,
            audioText: 'แก',
          },
          {
            type: 'multiple_choice',
            prompt: 'Which vowels are written BEFORE the consonant?',
            options: ['-า and -อ', '-ี and -ู', 'เ-, แ-, and โ-', 'All vowels'],
            correctIndex: 2,
          },
          {
            type: 'match',
            pairs: [
              { left: 'โก', right: 'goo' },
              { left: 'กอ', right: 'gaw' },
              { left: 'แจ', right: 'jae' },
              { left: 'เด', right: 'dee' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you read โต?',
        promptThai: 'โต',
        options: ['dtaa', 'dtoo', 'dtaw', 'dtee'],
        correctIndex: 1,
        audioText: 'โต',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read จอ?',
        promptThai: 'จอ',
        options: ['jaa', 'jee', 'jaw', 'joo'],
        correctIndex: 2,
        audioText: 'จอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read แป?',
        promptThai: 'แป',
        options: ['bpee', 'bpaa', 'bpae', 'bpuu'],
        correctIndex: 2,
        audioText: 'แป',
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is โ- written?',
        options: ['After the consonant', 'Above', 'Before the consonant', 'Below'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read แด?',
        promptThai: 'แด',
        options: ['dee', 'daa', 'dae', 'duu'],
        correctIndex: 2,
        audioText: 'แด',
      },
      {
        type: 'multiple_choice',
        prompt: 'In กา, ดี, ดู, เก, แก, and โต the vowel moves but the consonant stays. What pattern do you see?',
        options: [
          'The consonant changes shape for each vowel',
          'The vowel always goes after',
          'The vowel position varies but the consonant stays fixed',
          'Both move around',
        ],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['sara_ae', 'sara_oo', 'sara_aw', 'w_dtoo', 'w_gor', 'w_jor'],
    skillPreview: {
      heading: "You'll read with seven vowel patterns",
      examples: [
        { thai: 'โต', romanization: 'dtoo', meaning: 'big' },
        { thai: 'กอ', romanization: 'gaw', meaning: 'to hug' },
        { thai: 'แก', romanization: 'gae', meaning: 'you (informal)' },
      ],
    },
  },

  // === LESSON 5: Long vs Short Vowels ===
  {
    id: 'R05',
    title: 'Long vs Short Vowels',
    goal: 'Learn short vowels -ิ (i) and -ุ (u). Understand that vowel length changes meaning.',
    phase: 'consonants',
    order: 4,
    difficulty: 'beginner',
    prerequisites: ['R04'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai distinguishes **long** and **short** vowels. You have been learning long vowels. Short vowels sound similar but are held for a shorter duration -- and this changes meaning.\n\nThe short vowels -ิ (i) and -ุ (u) look like their long counterparts -ี (ii) and -ู (uu) but with small visual differences.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: '-ิ',
            romanization: 'i',
            english: 'Short "i" -- quick version of ii',
            detail: 'Written above: กิ = gi (short)',
            audioText: 'กิ',
          },
          {
            thai: '-ุ',
            romanization: 'u',
            english: 'Short "u" -- quick version of uu',
            detail: 'Written below: กุ = gu (short)',
            audioText: 'กุ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Compare: -ี (ii, long) has a longer tail than -ิ (i, short). -ู (uu, long) curls out, -ุ (u, short) is a small hook. In Paiboon+ romanization, long vowels are doubled (aa, ii, uu) and short vowels are single (a, i, u).',
        examples: [
          { thai: 'กี', romanization: 'gii', english: 'Long ii' },
          { thai: 'กิ', romanization: 'gi', english: 'Short i' },
          { thai: 'กู', romanization: 'guu', english: 'Long uu' },
          { thai: 'กุ', romanization: 'gu', english: 'Short u' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ดิ',
            romanization: 'di',
            english: 'go on (particle)',
            detail: 'Short -ิ vowel. Compare: ดี (dii, long) = good vs ดิ (di, short) = particle',
            audioText: 'ดิ',
          },
          {
            thai: 'ดุ',
            romanization: 'du',
            english: 'fierce / to scold',
            detail: 'Short -ุ vowel. Compare: ดู (duu, long) = to watch vs ดุ (du, short) = fierce',
            audioText: 'ดุ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Vowel length changes meaning. ดี (dii, long) = "good" but ดิ (di, short) is a casual particle. ดู (duu, long) = "to watch" but ดุ (du, short) = "fierce." Same consonant, different vowel length, totally different word.',
        examples: [
          { thai: 'ดี', romanization: 'dii (long)', english: 'good' },
          { thai: 'ดิ', romanization: 'di (short)', english: 'go on (particle)' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'Is this vowel long or short?',
            promptThai: 'กิ',
            options: ['Long (gii)', 'Short (gi)'],
            correctIndex: 1,
            audioText: 'กิ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'ดุ',
            options: ['duu (long)', 'du (short)', 'dii (long)', 'di (short)'],
            correctIndex: 1,
            audioText: 'ดุ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'ตุ',
            options: ['dtuu', 'dtii', 'dtu', 'dti'],
            correctIndex: 2,
            audioText: 'ตุ',
          },
          {
            type: 'match',
            pairs: [
              { left: 'กี', right: 'gii (long)' },
              { left: 'กิ', right: 'gi (short)' },
              { left: 'กู', right: 'guu (long)' },
              { left: 'กุ', right: 'gu (short)' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you read this?',
        promptThai: 'บิ',
        options: ['bii', 'bi', 'buu', 'bu'],
        correctIndex: 1,
        audioText: 'บิ',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read this?',
        promptThai: 'ปุ',
        options: ['bpii', 'bpi', 'bpuu', 'bpu'],
        correctIndex: 3,
        audioText: 'ปุ',
      },
      {
        type: 'multiple_choice',
        prompt: 'In Paiboon+ romanization, how do you tell long from short vowels?',
        options: [
          'Long vowels use capital letters',
          'Long vowels are written doubled (aa, ii, uu)',
          'Short vowels have an h after them',
          'There is no difference',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'ดี means "good" (long vowel). What does ดุ (short vowel) mean?',
        promptThai: 'ดุ',
        options: ['good', 'to watch', 'fierce', 'go on'],
        correctIndex: 2,
        audioText: 'ดุ',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read this?',
        promptThai: 'จิ',
        options: ['jii', 'ji', 'juu', 'ju'],
        correctIndex: 1,
        audioText: 'จิ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Long ดี vs short ดิ, long ดู vs short ดุ. What pattern do you see?',
        options: [
          'Long and short vowels always mean the same',
          'Long vs short vowels create completely different words',
          'Short vowels are just informal versions',
          'Only long vowels have meaning',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_i', 'sara_u', 'w_di', 'w_du'],
    skillPreview: {
      heading: "You'll distinguish long and short vowels",
      examples: [
        { thai: 'ดี', romanization: 'dii', meaning: 'good (long)' },
        { thai: 'ดิ', romanization: 'di', meaning: 'particle (short)' },
        { thai: 'ดุ', romanization: 'du', meaning: 'fierce (short)' },
      ],
    },
  },
]
