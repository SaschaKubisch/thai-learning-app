import type { RichLesson } from '../lessonTypes'

// Phase 2: Vowels (Lessons 6-10)
// Teaches long/short vowels integrated with known consonants to form real syllables.

export const phase2Lessons: RichLesson[] = [
  // === LESSON 6: First Long Vowels ===
  {
    id: 'R06',
    title: 'Long Vowels: aa, ii, uu',
    goal: 'Learn the three most common long vowels and read your first syllables.',
    phase: 'vowels',
    order: 5,
    difficulty: 'beginner',
    prerequisites: ['R05'],
    steps: [
      {
        kind: 'text',
        content:
          'Now that you know some consonants, it is time to add vowels. Thai vowels can appear **above**, **below**, **before**, or **after** the consonant -- and sometimes wrap around it.\n\nThai distinguishes between **long** and **short** vowels. This matters for both meaning and tone. We start with three long vowels.',
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
          {
            thai: '-ี',
            romanization: 'ii',
            english: 'Long "ii" -- as in "see"',
            detail: 'Written above the consonant: กี = gii',
            audioText: 'กี',
          },
          {
            thai: '-ู',
            romanization: 'uu',
            english: 'Long "uu" -- as in "moon"',
            detail: 'Written below the consonant: กู = guu',
            audioText: 'กู',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Vowel position varies: -า sits after the consonant, -ี sits above, and -ู sits below. The consonant always stays in the same place -- the vowel moves around it.',
        examples: [
          { thai: 'กา', romanization: 'gaa', english: 'Vowel after' },
          { thai: 'กี', romanization: 'gii', english: 'Vowel above' },
          { thai: 'กู', romanization: 'guu', english: 'Vowel below' },
        ],
      },
      {
        kind: 'example',
        title: 'Reading your first syllable: กา',
        steps: [
          { label: 'Step 1', content: 'Identify the consonant: ก = gaw (g sound)' },
          { label: 'Step 2', content: 'Identify the vowel: -า = aa (long)' },
          { label: 'Step 3', content: 'Combine: g + aa = gaa' },
          { label: 'Step 4', content: 'ก is mid class + long vowel + no tone mark = mid tone' },
          { label: 'Result', content: 'กา is pronounced "gaa" with a mid tone. It means "crow" (the bird).' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ตา',
            romanization: 'dtaa',
            english: 'eye / grandfather',
            detail: 'ต + -า = dtaa. Uses the long "aa" vowel.',
            audioText: 'ตา',
          },
          {
            thai: 'ดี',
            romanization: 'dii',
            english: 'good',
            detail: 'ด + -ี = dii. Uses the long "ii" vowel.',
            audioText: 'ดี',
          },
          {
            thai: 'ดู',
            romanization: 'duu',
            english: 'to watch / to look',
            detail: 'ด + -ู = duu. Uses the long "uu" vowel.',
            audioText: 'ดู',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Now you can read real words. ตาดี means "good eyesight" and ดูดี means "looks good." Thai places the adjective after the word it describes.',
        examples: [
          { thai: 'ตาดี', romanization: 'dtaa dii', english: 'good eyesight' },
          { thai: 'ดูดี', romanization: 'duu dii', english: 'looks good' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this syllable?',
            promptThai: 'กา',
            options: ['gii', 'gaa', 'guu', 'jaa'],
            correctIndex: 1,
            audioText: 'กา',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this syllable?',
            promptThai: 'ดี',
            options: ['daa', 'duu', 'dii', 'dtii'],
            correctIndex: 2,
            audioText: 'ดี',
          },
          {
            type: 'multiple_choice',
            prompt: 'Where does the vowel -า appear relative to the consonant?',
            options: ['Above', 'Below', 'Before', 'After'],
            correctIndex: 3,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ดู mean?',
            promptThai: 'ดู',
            options: ['good', 'eye', 'to watch', 'crow'],
            correctIndex: 2,
            audioText: 'ดู',
          },
          {
            type: 'match',
            pairs: [
              { left: 'กา', right: 'gaa' },
              { left: 'จี', right: 'jii' },
              { left: 'ดู', right: 'duu' },
              { left: 'บา', right: 'baa' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ตา',
        options: ['dtii', 'dtaa', 'bpaa', 'daa'],
        correctIndex: 1,
        audioText: 'ตา',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ดี mean?',
        promptThai: 'ดี',
        options: ['to watch', 'eye', 'good', 'crow'],
        correctIndex: 2,
        audioText: 'ดี',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which vowel is written BELOW the consonant?',
        options: ['-า (aa)', '-ี (ii)', '-ู (uu)', 'เ- (ee)'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ตาดี mean?',
        options: ['good crow', 'looks good', 'good eyesight', 'to watch'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Are -า, -ี, and -ู long or short vowels?',
        options: ['Short', 'Long', 'It depends', 'Neither'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'In กา, ดี, and ดู the vowel moves around but the consonant stays in place. What is the pattern?',
        options: [
          'The consonant changes shape for each vowel',
          'The vowel always goes after the consonant',
          'The vowel position varies (after, above, below) but the consonant stays fixed',
          'Both consonant and vowel move around',
        ],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['sara_aa', 'sara_ii', 'sara_uu', 'w_dtaa', 'w_dii', 'w_duu'],
    skillPreview: {
      heading: 'You\'ll read words with long vowels',
      examples: [
        { thai: 'ตา', romanization: 'dtaa', meaning: 'eye' },
        { thai: 'ดี', romanization: 'dii', meaning: 'good' },
        { thai: 'ดู', romanization: 'duu', meaning: 'to watch' },
      ],
    },
  },

  // === LESSON 7: Front Vowels ===
  {
    id: 'R07',
    title: 'Front Vowels: ee, ae',
    goal: 'Learn vowels that appear BEFORE the consonant and practice reading syllables.',
    phase: 'vowels',
    order: 6,
    difficulty: 'beginner',
    prerequisites: ['R06'],
    steps: [
      {
        kind: 'text',
        content:
          'Some Thai vowels are written **before** the consonant, even though they are pronounced after it. This is one of the trickiest things about Thai for beginners.\n\nThe vowels เ- (ee) and แ- (ae) both appear to the left of the consonant.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'เ-',
            romanization: 'ee',
            english: 'Long "ee" -- as in "hey"',
            detail: 'Written BEFORE the consonant: เก = gee',
            audioText: 'เก',
          },
          {
            thai: 'แ-',
            romanization: 'ae',
            english: 'Long "ae" -- as in "cat"',
            detail: 'Written BEFORE the consonant: แก = gae',
            audioText: 'แก',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'When you see เ or แ, read rightward to find the consonant it belongs to. The consonant comes AFTER in writing but FIRST in pronunciation: เก is read as "g + ee" = gee.',
        examples: [
          { thai: 'เก', romanization: 'gee', english: 'เ comes before ก in writing' },
          { thai: 'แจ', romanization: 'jae', english: 'แ comes before จ in writing' },
          { thai: 'เด', romanization: 'dee', english: 'เ comes before ด in writing' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'เก',
            romanization: 'gee',
            english: 'old (thing)',
            detail: 'ก + เ- = gee. The vowel เ- appears before ก.',
            audioText: 'เก',
          },
          {
            thai: 'แก',
            romanization: 'gae',
            english: 'you (informal)',
            detail: 'ก + แ- = gae. Informal way to say "you."',
            audioText: 'แก',
          },
          {
            thai: 'แบ',
            romanization: 'bae',
            english: 'flat',
            detail: 'บ + แ- = bae.',
            audioText: 'แบ',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'เก',
            options: ['gaa', 'gee', 'gae', 'guu'],
            correctIndex: 1,
            audioText: 'เก',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'แด',
            options: ['dee', 'daa', 'dae', 'duu'],
            correctIndex: 2,
            audioText: 'แด',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does แก mean?',
            promptThai: 'แก',
            options: ['old', 'you (informal)', 'flat', 'good'],
            correctIndex: 1,
            audioText: 'แก',
          },
          {
            type: 'match',
            pairs: [
              { left: 'เก', right: 'gee' },
              { left: 'แก', right: 'gae' },
              { left: 'เจ', right: 'jee' },
              { left: 'แบ', right: 'bae' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'เต',
        options: ['dtee', 'dtaa', 'dtae', 'dtuu'],
        correctIndex: 0,
        audioText: 'เต',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'แป',
        options: ['bpee', 'bpaa', 'bpae', 'bpuu'],
        correctIndex: 2,
        audioText: 'แป',
      },
      {
        type: 'multiple_choice',
        prompt: 'Where are เ- and แ- written relative to the consonant?',
        options: ['After', 'Above', 'Below', 'Before'],
        correctIndex: 3,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เก mean?',
        promptThai: 'เก',
        options: ['flat', 'you (informal)', 'old (thing)', 'good'],
        correctIndex: 2,
        audioText: 'เก',
      },
      {
        type: 'multiple_choice',
        prompt: 'What do เก, เต, and เด all have in common?',
        options: [
          'They all use vowels written above the consonant',
          'They all use the vowel เ- written BEFORE the consonant',
          'They are all high-class consonants',
          'They all have the same meaning',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_ee', 'sara_ae', 'w_gee', 'w_gae', 'w_bae'],
    skillPreview: {
      heading: 'You\'ll read more vowel patterns',
      examples: [
        { thai: 'เก', romanization: 'gee', meaning: 'to be stuck' },
        { thai: 'แก', romanization: 'gae', meaning: 'to fix' },
        { thai: 'เดิน', romanization: 'dəən', meaning: 'to walk' },
      ],
    },
  },

  // === LESSON 8: More Long Vowels ===
  {
    id: 'R08',
    title: 'Long Vowels: oo, aw',
    goal: 'Learn the vowels โ- (oo) and -อ (aw).',
    phase: 'vowels',
    order: 7,
    difficulty: 'beginner',
    prerequisites: ['R07'],
    steps: [
      {
        kind: 'text',
        content:
          'Two more long vowels to add to your toolkit. โ- (oo) is another front vowel (written before the consonant), while -อ (aw) is written after -- and happens to look like the consonant อ.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'โ-',
            romanization: 'oo',
            english: 'Long "oo" -- as in "go"',
            detail: 'Written BEFORE the consonant: โก = goo',
            audioText: 'โก',
          },
          {
            thai: '-อ',
            romanization: 'aw',
            english: 'Long "aw" -- as in "law"',
            detail: 'Written after the consonant: กอ = gaw',
            audioText: 'กอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'The vowel -อ looks identical to the consonant อ. Context tells you which it is: when อ follows another consonant as a vowel, it is "aw". When it starts a syllable, it is the consonant อ.',
        examples: [
          { thai: 'กอ', romanization: 'gaw', english: 'Here อ is the vowel "aw"' },
          { thai: 'อา', romanization: 'aa', english: 'Here อ is the consonant carrying vowel -า' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'โต',
            romanization: 'dtoo',
            english: 'big / to grow',
            detail: 'ต + โ- = dtoo. Uses the "oo" vowel before the consonant.',
            audioText: 'โต',
          },
          {
            thai: 'จอ',
            romanization: 'jaw',
            english: 'screen',
            detail: 'จ + -อ = jaw. Uses the "aw" vowel after the consonant.',
            audioText: 'จอ',
          },
          {
            thai: 'กอ',
            romanization: 'gaw',
            english: 'to hug',
            detail: 'ก + -อ = gaw.',
            audioText: 'กอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'You can now make short phrases with these words. โตดี means "grows well" and จอโต means "big screen."',
        examples: [
          { thai: 'โตดี', romanization: 'dtoo dii', english: 'grows well' },
          { thai: 'จอโต', romanization: 'jaw dtoo', english: 'big screen' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'โก',
            options: ['gaw', 'goo', 'gaa', 'gee'],
            correctIndex: 1,
            audioText: 'โก',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'ดอ',
            options: ['doo', 'dee', 'daw', 'daa'],
            correctIndex: 2,
            audioText: 'ดอ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does โต mean?',
            promptThai: 'โต',
            options: ['screen', 'to hug', 'big', 'good'],
            correctIndex: 2,
            audioText: 'โต',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does จอ mean?',
            promptThai: 'จอ',
            options: ['to hug', 'screen', 'big', 'crow'],
            correctIndex: 1,
            audioText: 'จอ',
          },
          {
            type: 'match',
            pairs: [
              { left: 'โก', right: 'goo' },
              { left: 'กอ', right: 'gaw' },
              { left: 'โบ', right: 'boo' },
              { left: 'ตอ', right: 'dtaw' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'โต',
        options: ['dtaa', 'dtoo', 'dtaw', 'dtee'],
        correctIndex: 1,
        audioText: 'โต',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does จอ mean?',
        promptThai: 'จอ',
        options: ['to hug', 'big', 'screen', 'crow'],
        correctIndex: 2,
        audioText: 'จอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is โ- written?',
        options: ['After the consonant', 'Above', 'Before the consonant', 'Below'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'โป',
        options: ['bpaw', 'bpoo', 'bpaa', 'bpee'],
        correctIndex: 1,
        audioText: 'โป',
      },
      {
        type: 'multiple_choice',
        prompt: 'โต means "big" and ตอ means something different. What does this tell you about Thai vowels?',
        options: [
          'Vowels are optional in Thai',
          'A different vowel on the same consonant changes the meaning entirely',
          'Vowel position does not matter',
          'โ- and -อ are the same vowel',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_oo', 'sara_aw', 'w_dtoo', 'w_jor', 'w_gor'],
    skillPreview: {
      heading: 'You\'ll recognize round vowel sounds',
      examples: [
        { thai: 'โต', romanization: 'dtoo', meaning: 'to grow up' },
        { thai: 'ก่อ', romanization: 'gàw', meaning: 'to build' },
        { thai: 'โอ', romanization: 'oo', meaning: 'oh!' },
      ],
    },
  },

  // === LESSON 9: Short Vowels ===
  {
    id: 'R09',
    title: 'Short Vowels',
    goal: 'Learn the short vowels -ิ (i) and -ุ (u) and understand the long/short distinction.',
    phase: 'vowels',
    order: 8,
    difficulty: 'beginner',
    prerequisites: ['R08'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai distinguishes **long** and **short** vowels. You have been learning long vowels so far. Short vowels sound similar but are held for a shorter duration. This difference changes word meanings and affects tones.\n\nThe short vowel forms often look like their long counterparts but differ by a small mark.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: '-ิ',
            romanization: 'i',
            english: 'Short "i" -- quick version of "ii"',
            detail: 'Written above: กิ = gi (short)',
            audioText: 'กิ',
          },
          {
            thai: '-ุ',
            romanization: 'u',
            english: 'Short "u" -- quick version of "uu"',
            detail: 'Written below: กุ = gu (short)',
            audioText: 'กุ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Compare long and short: -ี (ii, long) has a longer tail than -ิ (i, short). -ู (uu, long) curls out, -ุ (u, short) is a small hook. Long vowels in Paiboon+ are written doubled (aa, ii, uu) while short vowels are single (a, i, u).',
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
            detail: 'Short -ิ vowel. Compare: ดี (dii, long) = good vs ดิ (di, short) = particle.',
            audioText: 'ดิ',
          },
          {
            thai: 'ดุ',
            romanization: 'du',
            english: 'fierce / to scold',
            detail: 'Short -ุ vowel. Compare: ดู (duu, long) = to watch vs ดุ (du, short) = fierce.',
            audioText: 'ดุ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Short and long vowels change meaning. ดี (dii, long) means "good" but ดิ (di, short) is a casual particle meaning "go on." ดู (duu, long) means "to watch" but ดุ (du, short) means "fierce."',
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
            prompt: 'How do you pronounce this?',
            promptThai: 'ดุ',
            options: ['duu (long)', 'du (short)', 'dii (long)', 'di (short)'],
            correctIndex: 1,
            audioText: 'ดุ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ดุ mean?',
            promptThai: 'ดุ',
            options: ['good', 'to watch', 'fierce', 'go on'],
            correctIndex: 2,
            audioText: 'ดุ',
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
        prompt: 'How do you pronounce this?',
        promptThai: 'บิ',
        options: ['bii', 'bi', 'buu', 'bu'],
        correctIndex: 1,
        audioText: 'บิ',
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
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
          'Short vowels have an "h" after them',
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
        prompt: 'ดี (dii, long) = "good" vs ดิ (di, short) = particle. ดู (duu, long) = "watch" vs ดุ (du, short) = "fierce." What pattern do you see?',
        options: [
          'Long and short vowels always mean the same thing',
          'Long vs short vowels create completely different words',
          'Short vowels are just informal versions of long vowels',
          'Only long vowels have meaning',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_i', 'sara_u', 'w_di', 'w_du'],
    skillPreview: {
      heading: 'You\'ll hear the difference between short and long',
      examples: [
        { thai: 'จะ', romanization: 'jà', meaning: 'will' },
        { thai: 'ติ', romanization: 'dtì', meaning: 'to criticize' },
        { thai: 'ดุ', romanization: 'dù', meaning: 'to scold' },
      ],
    },
  },

  // === LESSON 10: Special Vowels ===
  {
    id: 'R10',
    title: 'Special Vowel Forms',
    goal: 'Learn the common special vowels -ำ (am), ไ- (ai), and -ั (short a).',
    phase: 'vowels',
    order: 9,
    difficulty: 'beginner',
    prerequisites: ['R09'],
    steps: [
      {
        kind: 'text',
        content:
          'Some Thai vowels are "compound" -- they represent a vowel plus a final consonant sound combined into one symbol. Let us learn three important special forms.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: '-ำ',
            romanization: 'am',
            english: 'Short "a" + "m" combined',
            detail: 'กำ = gam. Very common in Thai.',
            audioText: 'กำ',
          },
          {
            thai: 'ไ-',
            romanization: 'ai',
            english: '"ai" as in "Thai"',
            detail: 'Written before consonant: ไก = gai',
            audioText: 'ไก',
          },
          {
            thai: '-ั',
            romanization: 'a',
            english: 'Short "a" (must have final consonant)',
            detail: 'กัน = gan. The mark -ั above means short "a".',
            audioText: 'กัน',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'The vowel -ำ always includes the sound "m" at the end -- it is a complete syllable ender. The vowel ไ- is the "ai" sound familiar from the word "Thai" itself. The mark -ั (mai han akat) represents a short "a" but always requires a final consonant after it.',
        examples: [
          { thai: 'กำ', romanization: 'gam', english: 'g + am' },
          { thai: 'ไก', romanization: 'gai', english: 'g + ai' },
          { thai: 'กัน', romanization: 'gan', english: 'g + a + n' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ไป',
            romanization: 'bpai',
            english: 'to go',
            detail: 'ป + ไ- = bpai. One of the most common Thai words.',
            audioText: 'ไป',
          },
          {
            thai: 'กำ',
            romanization: 'gam',
            english: 'to grip',
            detail: 'ก + -ำ = gam. The vowel -ำ includes the "m" ending.',
            audioText: 'กำ',
          },
          {
            thai: 'กัด',
            romanization: 'gat',
            english: 'to bite',
            detail: 'ก + -ั + ด = gat. The -ั needs a final consonant.',
            audioText: 'กัด',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Now you can make useful phrases. ไปดู means "go watch" and ไปกิน means "go eat." Thai often strings verbs together without extra words.',
        examples: [
          { thai: 'ไปดู', romanization: 'bpai duu', english: 'go watch' },
          { thai: 'ไปกิน', romanization: 'bpai gin', english: 'go eat' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'ไก',
            options: ['gaa', 'gam', 'gai', 'gii'],
            correctIndex: 2,
            audioText: 'ไก',
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you pronounce this?',
            promptThai: 'ดำ',
            options: ['daa', 'dam', 'dai', 'dii'],
            correctIndex: 1,
            audioText: 'ดำ',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ไป mean?',
            promptThai: 'ไป',
            options: ['to grip', 'to bite', 'to go', 'to eat'],
            correctIndex: 2,
            audioText: 'ไป',
          },
          {
            type: 'multiple_choice',
            prompt: 'What sound does -ำ always end with?',
            options: ['n', 'ng', 'm', 'k'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you pronounce this?',
        promptThai: 'ไป',
        options: ['bpam', 'bpai', 'bpaa', 'bpii'],
        correctIndex: 1,
        audioText: 'ไป',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does ไปดู mean?',
        options: ['go eat', 'go watch', 'to grip', 'to bite'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'The mark -ั represents what vowel?',
        options: ['Long "aa"', 'Short "a"', '"ai"', '"am"'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Where is ไ- written?',
        options: ['After the consonant', 'Above', 'Before the consonant', 'Below'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'The word ไทย (Thai) uses the ไ- vowel you just learned. What does ไทย literally mean?',
        options: ['Land', 'People', 'Free / Freedom', 'Beautiful'],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['sara_am', 'sara_ai_maimalai', 'mai_han_akat', 'w_bpai', 'w_kam', 'w_gat'],
    skillPreview: {
      heading: 'You\'ll read complex vowel combinations',
      examples: [
        { thai: 'ใจ', romanization: 'jai', meaning: 'heart, mind' },
        { thai: 'ไป', romanization: 'bpai', meaning: 'to go' },
        { thai: 'เมา', romanization: 'mao', meaning: 'to be drunk' },
      ],
    },
  },
]
