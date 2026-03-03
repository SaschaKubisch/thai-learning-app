import type { RichLesson } from '../lessonTypes'

// Phase 4: Tones (Lessons 16-20)
// Teaches the 5 Thai tones, live/dead syllables, tone rules, tone marks.

export const phase4Lessons: RichLesson[] = [
  // === LESSON 16: The Five Tones ===
  {
    id: 'R16',
    title: 'The Five Thai Tones',
    goal: 'Understand that Thai has 5 tones and hear the difference between them.',
    phase: 'tones',
    order: 15,
    difficulty: 'elementary',
    prerequisites: ['R15'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai is a **tonal language**. The same syllable pronounced with a different tone has a completely different meaning. Thai has **5 tones**:\n\n1. **Mid tone** -- flat, neutral pitch (the default)\n2. **Low tone** -- pitch starts low and stays low\n3. **Falling tone** -- pitch starts high and drops\n4. **High tone** -- pitch starts high and stays high\n5. **Rising tone** -- pitch starts low and rises',
      },
      {
        kind: 'table',
        title: 'The Five Thai Tones',
        headers: ['Tone', 'Paiboon+ Mark', 'Description', 'Example'],
        rows: [
          ['Mid', '(none)', 'Flat, neutral', 'กา gaa = crow'],
          ['Low', 'grave accent (a\u0300)', 'Low and level', 'ก่า ga\u0300a = value (of)'],
          ['Falling', 'circumflex (a\u0302)', 'High then drops', 'ก้า ga\u0302a'],
          ['High', 'acute accent (a\u0301)', 'High and level', 'ก๊า ga\u0301a'],
          ['Rising', 'caron (a\u030C)', 'Low then rises', 'ก๋า ga\u030Ca'],
        ],
      },
      {
        kind: 'rule',
        rule: 'In our romanization (Paiboon+), mid tone is unmarked. Low tone gets a grave accent (a\u0300), falling gets a circumflex (a\u0302), high gets an acute accent (a\u0301), and rising gets a caron (a\u030C).',
        examples: [
          { thai: 'กา', romanization: 'gaa', english: 'Mid tone (unmarked)' },
          { thai: 'ก่า', romanization: 'g\u00E0a', english: 'Low tone (grave accent)' },
          { thai: 'ก้า', romanization: 'g\u00E2a', english: 'Falling tone (circumflex)' },
        ],
      },
      {
        kind: 'text',
        content:
          'A classic example: the syllable "mai" has different meanings depending on tone:\n\n- ไม mai (mid) = mile\n- ไม่ m\u00E0i (low) = not\n- ไม้ m\u00E1i (high) = wood\n- ใหม่ m\u00E0i (low) = new\n\nThis is why tone matters so much in Thai.',
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How many tones does Thai have?',
            options: ['3', '4', '5', '6'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'In Paiboon+ romanization, what mark indicates a LOW tone?',
            options: ['Acute accent (\u00E1)', 'Grave accent (\u00E0)', 'Circumflex (\u00E2)', 'No mark'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'Which tone starts high and drops?',
            options: ['Mid', 'Low', 'Falling', 'Rising'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How many tones does Thai have?',
        options: ['3', '4', '5', '7'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does "mid tone" sound like?',
        options: ['Flat, neutral pitch', 'Pitch rises', 'Pitch drops', 'Pitch goes up then down'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'In Paiboon+, which mark indicates a HIGH tone?',
        options: ['Grave (\u00E0)', 'Circumflex (\u00E2)', 'Acute (\u00E1)', 'Caron (\u01CE)'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Why do tones matter in Thai?',
        options: [
          'They make words sound prettier',
          'They are optional in modern Thai',
          'The same syllable with a different tone has a different meaning',
          'They only matter in formal speech',
        ],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Thai has 5 tones. How does this compare to other tonal languages?',
        options: [
          'Thai has the most tones of any language',
          'Mandarin has 4 tones, Cantonese has 6-9 tones',
          'All Asian languages have exactly 5 tones',
          'Only Thai uses tones',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'ไม่ (not) has a falling tone, while ไม้ (wood) has a high tone. These are called...',
        options: [
          'Synonyms',
          'Homophones',
          'Tone minimal pairs -- same sounds, different tones, different meanings',
          'Consonant pairs',
        ],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['w_mai', 'w_maa_horse'],
    skillPreview: {
      heading: 'You\'ll distinguish the five Thai tones',
      examples: [
        { thai: 'มา', romanization: 'maa', meaning: 'to come (mid tone)' },
        { thai: 'ม้า', romanization: 'máa', meaning: 'horse (high tone)' },
        { thai: 'หมา', romanization: 'mǎa', meaning: 'dog (rising tone)' },
      ],
    },
  },

  // === LESSON 17: Live and Dead Syllables ===
  {
    id: 'R17',
    title: 'Live and Dead Syllables',
    goal: 'Understand the distinction between live and dead syllables and how it affects tone.',
    phase: 'tones',
    order: 16,
    difficulty: 'elementary',
    prerequisites: ['R16'],
    steps: [
      {
        kind: 'text',
        content:
          'To determine the tone of a Thai syllable, you need to know if it is **live** or **dead**.\n\n- A **live syllable** ends in a long vowel or a sonorant (m, n, ng, y, w). It can sustain -- you can hold the sound.\n- A **dead syllable** ends in a short vowel or a stop consonant (k, t, p). The sound is cut short.',
      },
      {
        kind: 'table',
        title: 'Live vs Dead Syllables',
        headers: ['Type', 'Ends in...', 'Example', 'Romanization'],
        rows: [
          ['Live', 'Long vowel', 'กา', 'gaa'],
          ['Live', 'Sonorant (n, m, ng)', 'กัน', 'gan'],
          ['Dead', 'Short vowel', 'กะ', 'ga'],
          ['Dead', 'Stop (k, t, p)', 'กัก', 'gak'],
        ],
      },
      {
        kind: 'rule',
        rule: 'Live syllables with no tone mark get their "default" tone from the consonant class. Dead syllables follow different rules: mid and high class dead syllables get a LOW tone, while low class dead syllables get a HIGH tone.',
        examples: [
          { thai: 'กา', romanization: 'gaa', english: 'Live, mid class = mid tone' },
          { thai: 'กะ', romanization: 'g\u00E0', english: 'Dead (short vowel), mid class = low tone' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'Is กา (gaa) a live or dead syllable?',
            options: ['Live', 'Dead'],
            correctIndex: 0,
          },
          {
            type: 'multiple_choice',
            prompt: 'Is กะ (ga) a live or dead syllable?',
            options: ['Live', 'Dead'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'Which endings make a syllable "live"?',
            options: [
              'Short vowels and stops (k, t, p)',
              'Long vowels and sonorants (m, n, ng)',
              'Only long vowels',
              'Any ending',
            ],
            correctIndex: 1,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'A syllable ending in a long vowel is...',
        options: ['Dead', 'Live', 'Neither', 'Both'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'A syllable ending in a stop consonant (k, t, p) is...',
        options: ['Live', 'Dead', 'It depends on the vowel', 'Neither'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone does a mid-class dead syllable get (no tone mark)?',
        options: ['Mid tone', 'Low tone', 'High tone', 'Falling tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Is มา (maa) live or dead?',
        options: ['Dead', 'Live'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'กิน (gin, to eat) ends in "n" (a sonorant). กับ (gap, with) ends in "p" (a stop). Which is live and which is dead?',
        options: [
          'Both are live',
          'กิน is live, กับ is dead',
          'กิน is dead, กับ is live',
          'Both are dead',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Why are they called "live" syllables?',
        options: [
          'They are used more frequently',
          'You can sustain the sound -- hold it as long as you like',
          'They are louder',
          'They always have a high tone',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_gin', 'w_kap'],
    skillPreview: {
      heading: 'You\'ll predict tones from syllable type',
      examples: [
        { thai: 'กา', romanization: 'gaa', meaning: 'crow (live, mid tone)' },
        { thai: 'กับ', romanization: 'gàp', meaning: 'with (dead, low tone)' },
        { thai: 'ชาติ', romanization: 'châat', meaning: 'nation (dead)' },
      ],
    },
  },

  // === LESSON 18: Tone Rules Table ===
  {
    id: 'R18',
    title: 'The Tone Rule Table',
    goal: 'Learn the systematic tone rules that determine every syllable\'s tone.',
    phase: 'tones',
    order: 17,
    difficulty: 'elementary',
    prerequisites: ['R17'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai tones are **systematic**, not random. Given three pieces of information, you can determine the tone of any syllable:\n\n1. **Consonant class** (mid, high, low)\n2. **Syllable type** (live or dead)\n3. **Tone mark** (none, mai ek, mai tho, mai tri, mai jattawa)',
      },
      {
        kind: 'table',
        title: 'Tone Rules: No Tone Mark',
        headers: ['Class', 'Live Syllable', 'Dead Syllable'],
        rows: [
          ['Mid', 'Mid tone', 'Low tone'],
          ['High', 'Rising tone', 'Low tone'],
          ['Low', 'Mid tone', 'High tone (short) / Falling tone (long)'],
        ],
      },
      {
        kind: 'rule',
        rule: 'Without any tone mark: mid-class live syllables get mid tone. High-class live syllables get rising tone. Low-class live syllables get mid tone. Dead syllables follow their own pattern.',
        examples: [
          { thai: 'กา', romanization: 'gaa', english: 'Mid class + live = mid tone' },
          { thai: 'ขา', romanization: 'k\u01CEaa', english: 'High class + live = rising tone' },
          { thai: 'คา', romanization: 'kaa', english: 'Low class + live = mid tone' },
        ],
      },
      {
        kind: 'example',
        title: 'Applying the tone rules',
        steps: [
          { label: 'Word', content: 'ขา -- consonant ข (high class), vowel -า (long)' },
          { label: 'Syllable type', content: 'Ends in long vowel = live syllable' },
          { label: 'Tone mark', content: 'None' },
          { label: 'Rule lookup', content: 'High class + live + no mark = rising tone' },
          { label: 'Result', content: 'ขา = k\u01CEaa (rising tone) = "leg"' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What tone is กา? (ก = mid class, -า = long vowel, no mark)',
            options: ['Mid tone', 'Low tone', 'Rising tone', 'Falling tone'],
            correctIndex: 0,
          },
          {
            type: 'multiple_choice',
            prompt: 'What tone is ขา? (ข = high class, -า = long vowel, no mark)',
            options: ['Mid tone', 'Low tone', 'Rising tone', 'High tone'],
            correctIndex: 2,
          },
          {
            type: 'multiple_choice',
            prompt: 'What tone is คา? (ค = low class, -า = long vowel, no mark)',
            options: ['Mid tone', 'Rising tone', 'High tone', 'Falling tone'],
            correctIndex: 0,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What three things determine a Thai syllable\'s tone?',
        options: [
          'Vowel length, word position, speaker gender',
          'Consonant class, syllable type, tone mark',
          'Time of day, formality level, speed',
          'Number of consonants, vowel shape, word meaning',
        ],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Mid class + live syllable + no mark = ?',
        options: ['Low tone', 'Mid tone', 'High tone', 'Rising tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'High class + live syllable + no mark = ?',
        options: ['Mid tone', 'Low tone', 'Rising tone', 'Falling tone'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Low class + live syllable + no mark = ?',
        options: ['High tone', 'Mid tone', 'Rising tone', 'Low tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Mid and low class live syllables both get mid tone with no mark. Where do they differ?',
        options: [
          'They never differ',
          'Dead syllables: mid class gets low tone, low class gets high/falling tone',
          'They differ only in writing, not in sound',
          'Low class consonants are always silent',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_kaa', 'w_khaa'],
    skillPreview: {
      heading: 'You\'ll apply tone rules systematically',
      examples: [
        { thai: 'สูง', romanization: 'sǔung', meaning: 'tall, high' },
        { thai: 'ต่ำ', romanization: 'dtàm', meaning: 'low' },
        { thai: 'กลาง', romanization: 'glaang', meaning: 'middle' },
      ],
    },
  },

  // === LESSON 19: Tone Marks ===
  {
    id: 'R19',
    title: 'Tone Marks',
    goal: 'Learn the 4 Thai tone marks and how they modify the default tone.',
    phase: 'tones',
    order: 18,
    difficulty: 'elementary',
    prerequisites: ['R18'],
    steps: [
      {
        kind: 'text',
        content:
          'Thai has **4 tone marks** that override the default tone. They are written above the consonant (or above the vowel if there is one above). The effect of each tone mark depends on the consonant class.',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: '\u0E48',
            romanization: 'mai ek',
            english: 'First tone mark',
            detail: 'Looks like a small "1"',
            audioText: 'ไม้เอก',
          },
          {
            thai: '\u0E49',
            romanization: 'mai tho',
            english: 'Second tone mark',
            detail: 'Looks like a small cursive "2"',
            audioText: 'ไม้โท',
          },
          {
            thai: '\u0E4A',
            romanization: 'mai tri',
            english: 'Third tone mark',
            detail: 'Looks like a small "3" (mid class only)',
            audioText: 'ไม้ตรี',
          },
          {
            thai: '\u0E4B',
            romanization: 'mai jattawa',
            english: 'Fourth tone mark',
            detail: 'Looks like a "+" (mid class only)',
            audioText: 'ไม้จัตวา',
          },
        ],
      },
      {
        kind: 'table',
        title: 'Tone Mark Effects by Class',
        headers: ['Tone Mark', 'Mid Class', 'High Class', 'Low Class'],
        rows: [
          ['mai ek \u0E48', 'Low', 'Low', 'Falling'],
          ['mai tho \u0E49', 'Falling', 'Falling', 'High'],
          ['mai tri \u0E4A', 'High', '(not used)', '(not used)'],
          ['mai jattawa \u0E4B', 'Rising', '(not used)', '(not used)'],
        ],
      },
      {
        kind: 'rule',
        rule: 'Mai ek and mai tho work with all three classes. Mai tri and mai jattawa are only used with mid-class consonants. The tone mark always appears above the initial consonant of the syllable.',
        examples: [
          { thai: 'ก่า', romanization: 'g\u00E0a', english: 'Mid + mai ek = low tone' },
          { thai: 'ก้า', romanization: 'g\u00E2a', english: 'Mid + mai tho = falling tone' },
          { thai: 'ก๊า', romanization: 'g\u00E1a', english: 'Mid + mai tri = high tone' },
          { thai: 'ก๋า', romanization: 'g\u01CEa', english: 'Mid + mai jattawa = rising tone' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What tone does mai ek (\u0E48) give to a mid-class consonant?',
            options: ['Mid', 'Low', 'Falling', 'High'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What tone does mai tho (\u0E49) give to a mid-class consonant?',
            options: ['Low', 'Falling', 'High', 'Rising'],
            correctIndex: 1,
          },
          {
            type: 'match',
            pairs: [
              { left: 'ก่า (mai ek)', right: 'Low tone' },
              { left: 'ก้า (mai tho)', right: 'Falling tone' },
              { left: 'ก๊า (mai tri)', right: 'High tone' },
              { left: 'ก๋า (mai jattawa)', right: 'Rising tone' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How many tone marks does Thai have?',
        options: ['2', '3', '4', '5'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Mai tri and mai jattawa are only used with which class?',
        options: ['High class', 'Low class', 'Mid class', 'All classes'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Mid class + mai ek = ?',
        options: ['Mid tone', 'Low tone', 'Falling tone', 'High tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone does ค่า have? (ค = low class + mai ek)',
        options: ['Low tone', 'Falling tone', 'High tone', 'Rising tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone does ข่า have? (ข = high class + mai ek)',
        options: ['Low tone', 'Falling tone', 'High tone', 'Rising tone'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'Mai tri and mai jattawa only work with mid-class consonants. Why is this significant?',
        options: [
          'It means mid-class consonants can produce all 5 tones',
          'It means high and low class consonants have no tones',
          'It is just a historical accident with no importance',
          'It means mid-class consonants are rare',
        ],
        correctIndex: 0,
      },
    ],
    srsItemIds: ['mai_ek', 'mai_tho', 'mai_tri', 'mai_jattawa'],
    skillPreview: {
      heading: 'You\'ll read all four tone marks',
      examples: [
        { thai: 'ไม่', romanization: 'mâi', meaning: 'not (mai ek)' },
        { thai: 'น้ำ', romanization: 'náam', meaning: 'water (mai toh)' },
        { thai: 'ก๊ก', romanization: 'gók', meaning: 'faction (mai dtrii)' },
      ],
    },
  },

  // === LESSON 20: Tone Practice ===
  {
    id: 'R20',
    title: 'Tone Practice',
    goal: 'Apply tone rules to read real words with correct tones.',
    phase: 'tones',
    order: 19,
    difficulty: 'elementary',
    prerequisites: ['R19'],
    steps: [
      {
        kind: 'text',
        content:
          'Let us put it all together. For each word, you will determine the tone by checking: consonant class, syllable type, and tone mark (if any).\n\nThis takes practice, but it becomes automatic over time -- just like reading English vowel sounds.',
      },
      {
        kind: 'example',
        title: 'Tone analysis: ค่า (k\u00E2a)',
        steps: [
          { label: 'Consonant', content: 'ค = low class' },
          { label: 'Vowel', content: '-า = long vowel (live syllable)' },
          { label: 'Tone mark', content: 'mai ek (\u0E48)' },
          { label: 'Rule', content: 'Low class + mai ek = falling tone' },
          { label: 'Result', content: 'ค่า = k\u00E2a (falling tone) = "value/price"' },
        ],
      },
      {
        kind: 'example',
        title: 'Tone analysis: ไม่ (m\u00E0i)',
        steps: [
          { label: 'Consonant', content: 'ม = low class' },
          { label: 'Vowel', content: 'ไ- = ai (live syllable)' },
          { label: 'Tone mark', content: 'mai ek (\u0E48)' },
          { label: 'Rule', content: 'Low class + mai ek = falling tone' },
          { label: 'Result', content: 'ไม่ = m\u00E2i (falling tone) = "not"' },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'What tone is ก่า? (ก = mid, mai ek)',
            options: ['Mid tone', 'Low tone', 'Falling tone', 'High tone'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What tone is ข้า? (ข = high, mai tho)',
            options: ['Low tone', 'Falling tone', 'High tone', 'Rising tone'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What tone is มา? (ม = low, no mark, live)',
            options: ['Mid tone', 'Low tone', 'High tone', 'Rising tone'],
            correctIndex: 0,
          },
          {
            type: 'multiple_choice',
            prompt: 'What tone is สี? (ส = high, no mark, live)',
            options: ['Mid tone', 'Low tone', 'Rising tone', 'Falling tone'],
            correctIndex: 2,
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What tone is ดี? (ด = mid, no mark, live)',
        options: ['Mid tone', 'Low tone', 'Rising tone', 'High tone'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone is ค่า? (ค = low, mai ek)',
        options: ['Low tone', 'Falling tone', 'High tone', 'Rising tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone is ก้า? (ก = mid, mai tho)',
        options: ['Low tone', 'Falling tone', 'High tone', 'Mid tone'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What tone is ขา? (ข = high, no mark, live)',
        options: ['Mid tone', 'Low tone', 'Rising tone', 'Falling tone'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'To determine a syllable\'s tone, you need consonant class, syllable type, and...',
        options: ['Word meaning', 'Tone mark', 'Sentence position', 'Speaker gender'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'Analyze น้ำ: น is low class, -ำ is a live syllable, and it has mai tho. Low class + mai tho = ?',
        options: ['Low tone', 'Falling tone', 'High tone', 'Rising tone'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Thai people write 555 in text messages to mean "hahaha." Why?',
        options: [
          '5 is a lucky number',
          'The number 5 in Thai is ห้า (haa), so 555 = haa haa haa',
          'It looks like a laughing face',
          '5 sounds like "ha" in English',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_naam', 'w_haa', 'w_dii'],
    skillPreview: {
      heading: 'You\'ll read tones in real sentences',
      examples: [
        { thai: 'ใกล้', romanization: 'glâi', meaning: 'near (falling)' },
        { thai: 'ไกล', romanization: 'glai', meaning: 'far (mid)' },
        { thai: 'ม้าดี', romanization: 'máa dii', meaning: 'good horse' },
      ],
    },
  },
]
