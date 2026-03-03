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
        prompt: 'Which Thai word means "crow"?',
        options: ['จา', 'กา', 'ดา', 'ตา'],
        correctIndex: 1,
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
        prompt: 'What does ดี mean?',
        promptThai: 'ดี',
        options: ['eye', 'good', 'shoulder', 'turtle'],
        correctIndex: 1,
        audioText: 'ดี',
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
        prompt: 'How do you read this?',
        promptThai: 'บู',
        options: ['baa', 'bii', 'buu', 'bee'],
        correctIndex: 2,
        audioText: 'บู',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ดู mean?',
        promptThai: 'ดู',
        options: ['good', 'to watch', 'uncle', 'old'],
        correctIndex: 1,
        audioText: 'ดู',
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
    goal: 'Learn vowels แ- (ae), โ- (oo), -อ (aw), and short forms -ะ (a), เ-ะ (e), แ-ะ (ae short). Understand long vs short vowel pairs.',
    phase: 'consonants',
    order: 3,
    difficulty: 'beginner',
    prerequisites: ['R03'],
    steps: [
      {
        kind: 'text',
        content:
          'Three more long vowel patterns, plus their **short counterparts**. Short vowels end with a -ะ symbol.\n\nAfter this lesson you will know **nine vowels** and understand the concept of long vs short pairs.',
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
        kind: 'info_card',
        items: [
          {
            thai: '-ะ',
            romanization: 'a',
            english: 'Short "a" -- quick version of -า (aa)',
            detail: 'Written after: กะ = ga (short). Compare กา = gaa (long).',
            audioText: 'กะ',
          },
          {
            thai: 'เ-ะ',
            romanization: 'e',
            english: 'Short "e" -- quick version of เ- (ee)',
            detail: 'Written before AND after: เกะ = ge (short). Compare เก = gee (long).',
            audioText: 'เกะ',
          },
          {
            thai: 'แ-ะ',
            romanization: 'ae',
            english: 'Short "ae" -- quick version of แ- (ae)',
            detail: 'Written before AND after: แกะ = gae (short). Compare แก = gae (long).',
            audioText: 'แกะ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Long and short vowel pairs: เ- (ee, long) / เ-ะ (e, short), แ- (ae, long) / แ-ะ (ae, short). The -ะ symbol marks a short vowel. Also, โ- (oo) / โ-ะ (o, short) follow the same pattern though โ-ะ is rare.',
        examples: [
          { thai: 'แก', romanization: 'gae (long)', english: 'you (informal)' },
          { thai: 'แกะ', romanization: 'gae (short)', english: 'sheep' },
          { thai: 'จะ', romanization: 'ja', english: 'will (future marker)' },
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
            thai: 'จะ',
            romanization: 'ja',
            english: 'will (future marker)',
            detail: 'One of the most common Thai words. Uses short -ะ vowel.',
          },
          {
            thai: 'แกะ',
            romanization: 'gae',
            english: 'sheep',
            detail: 'Uses short แ-ะ vowel.',
          },
          {
            thai: 'โต',
            romanization: 'dtoo',
            english: 'big',
          },
        ],
      },
      {
        kind: 'example',
        title: 'Long vs short vowel pairs',
        steps: [
          { label: 'Long', content: 'เก (gee), แก (gae), กา (gaa) -- hold the vowel sound' },
          { label: 'Short', content: 'เกะ (ge), แกะ (gae), กะ (ga) -- cut the vowel short' },
          { label: 'The -ะ marker', content: 'The -ะ symbol is placed after the consonant to mark a short vowel' },
          { label: 'Result', content: 'Long and short pairs: each long vowel has a short counterpart' },
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
            promptThai: 'จะ',
            options: ['jaa', 'ja', 'jii', 'juu'],
            correctIndex: 1,
            audioText: 'จะ',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'แกะ',
            options: ['gee', 'gae (long)', 'gae (short)', 'gaa'],
            correctIndex: 2,
            audioText: 'แกะ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does จะ mean?',
            options: ['screen', 'will (future)', 'sheep', 'big'],
            correctIndex: 1,
          },
          {
            type: 'match',
            pairs: [
              { left: 'กา', right: 'gaa (long)' },
              { left: 'กะ', right: 'ga (short)' },
              { left: 'แก', right: 'gae (long)' },
              { left: 'แกะ', right: 'gae (short)' },
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
        prompt: 'How do you read จะ?',
        promptThai: 'จะ',
        options: ['jaa', 'ja', 'jee', 'jaw'],
        correctIndex: 1,
        audioText: 'จะ',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read แกะ?',
        promptThai: 'แกะ',
        options: ['gee', 'gaa', 'gae', 'gaw'],
        correctIndex: 2,
        audioText: 'แกะ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does จะ mean?',
        options: ['screen', 'big', 'will (future marker)', 'sheep'],
        correctIndex: 2,
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
        prompt: 'แก is the long form. What is its short form?',
        options: ['กา', 'แกะ', 'โก', 'เก'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_ae', 'sara_oo', 'sara_aw', 'sara_a_short', 'sara_e_short', 'sara_ae_short', 'w_dtoo', 'w_ja', 'w_gae_sheep'],
    skillPreview: {
      heading: "You'll read long and short vowel patterns",
      examples: [
        { thai: 'โต', romanization: 'dtoo', meaning: 'big' },
        { thai: 'จะ', romanization: 'ja', meaning: 'will' },
        { thai: 'แกะ', romanization: 'gae', meaning: 'sheep' },
      ],
    },
  },

  // === LESSON 5: Long vs Short Vowels ===
  {
    id: 'R05',
    title: 'Long vs Short Vowels',
    goal: 'Learn short vowels -ิ (i) and -ุ (u), plus the "ue" vowel pair -ึ (ue short) and -ือ (ue long). Understand that vowel length changes meaning.',
    phase: 'consonants',
    order: 4,
    difficulty: 'beginner',
    prerequisites: ['R04'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai distinguishes **long** and **short** vowels. You have been learning long vowels. Short vowels sound similar but are held for a shorter duration -- and this changes meaning.\n\nThe short vowels -ิ (i) and -ุ (u) look like their long counterparts -ี (ii) and -ู (uu) but with small visual differences.\n\nWe will also learn a vowel sound that does not exist in English: the **"ue"** sound. Thai has both a short -ึ (ue) and long -ือ (uue) version.',
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
        kind: 'info_card',
        items: [
          {
            thai: '-ึ',
            romanization: 'ue',
            english: 'Short "ue" -- no English equivalent',
            detail: 'Written above: นึก = nuek (to think). Say "ee" with rounded lips.',
            audioText: 'นึก',
          },
          {
            thai: '-ือ',
            romanization: 'uue',
            english: 'Long "ue" -- no English equivalent',
            detail: 'Written above with a tail: ชื่อ = chûue (name), คือ = kuue (is/means), มือ = muue (hand).',
            audioText: 'มือ',
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
        kind: 'rule',
        rule: 'The "ue" vowels have no English equivalent. To make this sound, say "ee" but round your lips as if saying "oo". -ึ (ue) is the short version and -ือ (uue) is the long version. These are extremely common vowels.',
        examples: [
          { thai: 'มือ', romanization: 'muue (long)', english: 'hand' },
          { thai: 'นึก', romanization: 'nuek (short)', english: 'to think' },
          { thai: 'คือ', romanization: 'kuue', english: 'is / means' },
          { thai: 'ชื่อ', romanization: 'chûue', english: 'name' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'มือ',
            romanization: 'muue',
            english: 'hand',
            detail: 'Long -ือ vowel. ม + -ือ = muue.',
            audioText: 'มือ',
          },
          {
            thai: 'คือ',
            romanization: 'kuue',
            english: 'is / means',
            detail: 'Long -ือ vowel. Very common word: "What is this?" = นี่คืออะไร.',
            audioText: 'คือ',
          },
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
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'มือ',
            options: ['mii', 'muu', 'muue', 'maw'],
            correctIndex: 2,
            audioText: 'มือ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does มือ mean?',
            options: ['foot', 'hand', 'mouth', 'eye'],
            correctIndex: 1,
          },
          {
            type: 'match',
            pairs: [
              { left: 'กี', right: 'gii (long)' },
              { left: 'กิ', right: 'gi (short)' },
              { left: '-ือ', right: 'uue (long)' },
              { left: '-ึ', right: 'ue (short)' },
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
        prompt: 'How do you read this?',
        promptThai: 'มือ',
        options: ['mii', 'muu', 'muue', 'maw'],
        correctIndex: 2,
        audioText: 'มือ',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does มือ mean?',
        options: ['foot', 'hand', 'mouth', 'eye'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ดุ (short vowel) mean?',
        promptThai: 'ดุ',
        options: ['good', 'to watch', 'fierce', 'go on'],
        correctIndex: 2,
        audioText: 'ดุ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Long ดี vs short ดิ, long ดู vs short ดุ, long -ือ vs short -ึ. What pattern do you see?',
        options: [
          'Long and short vowels always mean the same',
          'Long vs short vowels create completely different words',
          'Short vowels are just informal versions',
          'Only long vowels have meaning',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_i', 'sara_u', 'sara_ue', 'sara_uue', 'w_di', 'w_du', 'w_muue', 'w_kuue'],
    skillPreview: {
      heading: "You'll distinguish long and short vowels",
      examples: [
        { thai: 'ดี', romanization: 'dii', meaning: 'good (long)' },
        { thai: 'ดิ', romanization: 'di', meaning: 'particle (short)' },
        { thai: 'มือ', romanization: 'muue', meaning: 'hand' },
      ],
    },
  },
]
