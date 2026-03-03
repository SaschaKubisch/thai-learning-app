import type { RichLesson } from '../lessonTypes'

// Phase 3: Complete Alphabet & Reading (Lessons 11-15)

export const phase3Lessons: RichLesson[] = [
  // === LESSON 11: High and Low Pairs + ศ ษ ===
  {
    id: 'R11',
    title: 'Sound Twins Across Classes',
    goal: 'Learn 7 consonants including same-sound pairs across classes: ฝ/ฟ (f), ฉ/ช (ch), ผ/พ (ph), ห (h), plus ศ and ษ (both "s" like ส).',
    phase: 'reading',
    order: 10,
    difficulty: 'beginner',
    prerequisites: ['R10'],
    steps: [
      {
        kind: 'text',
        content:
          'Seven more consonants to learn. A key pattern: Thai has consonant **pairs** that make the same sound but belong to different classes. This affects tone.\n\nWe also meet ศ and ษ -- two more letters that make the "s" sound, just like ส. Thai has three "s" consonants because it borrowed letters from Sanskrit.',
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
            detail: 'Keyword: หีบ hiip = chest/box.',
            audioText: 'หอ',
          },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ศ',
            romanization: 'saw',
            english: '"s" high class -- from Sanskrit',
            detail: 'Keyword: ศาลา saalaa = pavilion. Same sound as ส.',
            audioText: 'ศอ',
          },
          {
            thai: 'ษ',
            romanization: 'saw',
            english: '"s" high class -- from Sanskrit',
            detail: 'Keyword: ฤๅษี ruue-sii = hermit. Same sound as ส and ศ.',
            audioText: 'ษอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Same-sound pairs across classes: ฝ (high) / ฟ (low) = "f". ฉ (high) / ช (low) = "ch". ผ (high) / พ (low) = "ph". And three "s" letters: ส ศ ษ (all high class). The class affects tone, not sound.',
        examples: [
          { thai: 'ฝา', romanization: 'fǎa (high class)', english: 'lid' },
          { thai: 'ฟา', romanization: 'faa (low class)', english: 'same sound, different class' },
          { thai: 'ศูนย์', romanization: 'sǔun', english: 'zero (uses ศ)' },
          { thai: 'ภาษา', romanization: 'phaa-sǎa', english: 'language (uses ษ)' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ฝา',
            romanization: 'fǎa',
            english: 'lid',
          },
          {
            thai: 'พา',
            romanization: 'phaa',
            english: 'to take someone',
          },
          {
            thai: 'หา',
            romanization: 'hǎa',
            english: 'to look for',
          },
          {
            thai: 'ศูนย์',
            romanization: 'sǔun',
            english: 'zero / center',
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
            prompt: 'What sound does ศ make?',
            promptThai: 'ศ',
            options: ['faw', 'saw', 'haw', 'chaw'],
            correctIndex: 1,
            audioText: 'ศอ',
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
              { left: 'ฝ / ฟ', right: '"f" sound pair' },
              { left: 'ฉ / ช', right: '"ch" sound pair' },
              { left: 'ผ / พ', right: '"ph" sound pair' },
              { left: 'ส / ศ / ษ', right: '"s" (all high class)' },
            ],
          },
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'ฝา', back: 'fǎa -- lid', audioText: 'ฝา' },
              { front: 'หา', back: 'hǎa -- to look for', audioText: 'หา' },
              { front: 'ศูนย์', back: 'sǔun -- zero', audioText: 'ศูนย์' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'What sound does พ make?',
        options: ['paw (aspirated)', 'bpaw', 'faw', 'haw'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'ฝ and ฟ both make the "f" sound. What is different about them?',
        options: [
          'Their consonant class (high vs low)',
          'Their vowel',
          'Their meaning',
          'Nothing',
        ],
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
        prompt: 'Thai has three consonants that all make the "s" sound. Which are they?',
        options: ['ส ซ ศ', 'ส ศ ษ', 'ซ ศ ษ', 'ส ซ ษ'],
        correctIndex: 1,
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
        prompt: 'What does ศูนย์ mean?',
        options: ['lid', 'language', 'zero / center', 'teeth'],
        correctIndex: 2,
      },
    ],
    srsItemIds: [
      'for_faa',
      'chor_ching',
      'phor_phaan',
      'for_fan',
      'hor_hip',
      'sor_sala',
      'sor_ruesi',
      'w_faa',
      'w_phaa',
      'w_suun',
    ],
    skillPreview: {
      heading: "You'll learn same-sound consonant pairs",
      examples: [
        { thai: 'ฝา', romanization: 'fǎa', meaning: 'lid (high class f)' },
        { thai: 'ฟัน', romanization: 'fan', meaning: 'teeth (low class f)' },
        { thai: 'ศูนย์', romanization: 'sǔun', meaning: 'zero' },
      ],
    },
  },

  // === LESSON 12: Compound Vowels + ฐ ฮ ===
  {
    id: 'R12',
    title: 'Compound Vowels',
    goal: 'Learn compound vowels เ-ีย (ia), -ัว (ua), เ-ือ (uea), เ-อ (oe). Learn final common consonants ฐ (high) and ฮ (low).',
    phase: 'reading',
    order: 11,
    difficulty: 'beginner',
    prerequisites: ['R11'],
    steps: [
      {
        kind: 'text',
        content:
          'Some Thai vowels combine two vowel sounds into one. These **compound vowels** appear in many everyday words.\n\nWe also learn the last two common consonants: ฐ (high class "th") and ฮ (low class "h").',
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'เ-ีย',
            romanization: 'ia',
            english: '"ia" as in "via"',
            detail: 'เรียน = riian (to study). The เ- goes before and -ีย after the consonant.',
            audioText: 'เรียน',
          },
          {
            thai: '-ัว',
            romanization: 'ua',
            english: '"ua" -- ooh-ah blended',
            detail: 'ตัว = dtua (body/classifier). Short "a" + "w" sound.',
            audioText: 'ตัว',
          },
          {
            thai: 'เ-ือ',
            romanization: 'uea',
            english: '"uea" -- ue + ah',
            detail: 'เมือง = muueang (city). Combines the "ue" sound with "a".',
            audioText: 'เมือง',
          },
          {
            thai: 'เ-อ',
            romanization: 'oe',
            english: '"oe" -- as in French "deux"',
            detail: 'เธอ = thoe (you/her). The เ- goes before and -อ after.',
            audioText: 'เธอ',
          },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'ฐ',
            romanization: 'taw',
            english: '"th" aspirated -- high class',
            detail: 'Keyword: ฐาน thǎan = base/foundation.',
            audioText: 'ฐอ',
          },
          {
            thai: 'ฮ',
            romanization: 'haw',
            english: '"h" -- low class',
            detail: 'Keyword: นกฮูก nok-huuk = owl. The only low-class "h".',
            audioText: 'ฮอ',
          },
        ],
      },
      {
        kind: 'rule',
        rule: 'Compound vowels combine two vowel sounds. They wrap around the consonant: เ-ีย has เ- before and -ีย after. เ-ือ has เ- before and -ือ above/after. These are long vowels and very common.',
        examples: [
          { thai: 'เรียน', romanization: 'riian', english: 'to study' },
          { thai: 'ตัว', romanization: 'dtua', english: 'body / classifier' },
          { thai: 'เมือง', romanization: 'muueang', english: 'city / country' },
          { thai: 'เธอ', romanization: 'thoe', english: 'you / her' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'เสีย',
            romanization: 'sǐia',
            english: 'broken / spoiled',
            audioText: 'เสีย',
          },
          {
            thai: 'หัว',
            romanization: 'hǔa',
            english: 'head',
            audioText: 'หัว',
          },
          {
            thai: 'เดือน',
            romanization: 'duuean',
            english: 'month',
            audioText: 'เดือน',
          },
          {
            thai: 'สถานี',
            romanization: 'sa-thǎa-nii',
            english: 'station',
            detail: 'Uses ฐ. สถานีรถไฟ = train station.',
            audioText: 'สถานี',
          },
          {
            thai: 'ฮา',
            romanization: 'haa',
            english: 'ha / funny',
            detail: 'Uses ฮ. ตลก-ฮา = funny.',
            audioText: 'ฮา',
          },
        ],
      },
      {
        kind: 'practice',
        exercises: [
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'เรียน',
            options: ['raan', 'riian', 'ruuan', 'reen'],
            correctIndex: 1,
            audioText: 'เรียน',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does เรียน mean?',
            options: ['to eat', 'to study', 'city', 'you'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'How do you read this?',
            promptThai: 'เมือง',
            options: ['maang', 'miiang', 'muueang', 'moong'],
            correctIndex: 2,
            audioText: 'เมือง',
          },
          {
            type: 'match',
            pairs: [
              { left: 'เ-ีย', right: 'ia (เรียน = study)' },
              { left: '-ัว', right: 'ua (ตัว = body)' },
              { left: 'เ-ือ', right: 'uea (เมือง = city)' },
              { left: 'เ-อ', right: 'oe (เธอ = you/her)' },
            ],
          },
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'เดือน', back: 'duuean -- month', audioText: 'เดือน' },
              { front: 'หัว', back: 'hǔa -- head', audioText: 'หัว' },
              { front: 'สถานี', back: 'sa-thǎa-nii -- station', audioText: 'สถานี' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'How do you read เรียน?',
        promptThai: 'เรียน',
        options: ['raan', 'riian', 'ruuan', 'reen'],
        correctIndex: 1,
        audioText: 'เรียน',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เรียน mean?',
        promptThai: 'เรียน',
        options: ['to eat', 'to study', 'city', 'month'],
        correctIndex: 1,
        audioText: 'เรียน',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เมือง mean?',
        promptThai: 'เมือง',
        options: ['month', 'you/her', 'city / country', 'head'],
        correctIndex: 2,
        audioText: 'เมือง',
      },
      {
        type: 'multiple_choice',
        prompt: 'What does สถานี mean?',
        options: ['language', 'station', 'bank', 'restaurant'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'How do you read เธอ?',
        promptThai: 'เธอ',
        options: ['thii', 'thoe', 'thee', 'thaa'],
        correctIndex: 1,
        audioText: 'เธอ',
      },
      {
        type: 'multiple_choice',
        prompt: 'Which vowel is in the word ตัว (body)?',
        options: ['เ-ีย (ia)', '-ัว (ua)', 'เ-ือ (uea)', 'เ-อ (oe)'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['sara_ia', 'sara_ua', 'sara_uea', 'sara_oe', 'thor_thaan', 'hor_nokhuk', 'w_riian', 'w_dtua', 'w_muueang', 'w_thoe', 'w_sathaanii'],
    skillPreview: {
      heading: "You'll read compound vowels in real words",
      examples: [
        { thai: 'เรียน', romanization: 'riian', meaning: 'to study' },
        { thai: 'เมือง', romanization: 'muueang', meaning: 'city' },
        { thai: 'สถานี', romanization: 'sa-thǎa-nii', meaning: 'station' },
      ],
    },
  },

  // === LESSON 13: Completing the Alphabet ===
  {
    id: 'R13',
    title: 'Completing the Alphabet',
    goal: 'Learn the remaining 8 consonants from Pali/Sanskrit loanwords: ฎ ฏ ฆ ฌ ฑ ฒ ณ ฬ. Acknowledge obsolete ฃ ฅ. You now know all 44 Thai consonants.',
    phase: 'reading',
    order: 12,
    difficulty: 'beginner',
    prerequisites: ['R12'],
    steps: [
      {
        kind: 'text',
        content:
          'Time to complete the alphabet. These 8 consonants come from Pali and Sanskrit loanwords. They duplicate sounds of consonants you already know, but they appear in real Thai words you will encounter -- legal terms, temple signs, university names, and everyday vocabulary.\n\nAfter this lesson, you will know **all 44 Thai consonants**.',
      },
      {
        kind: 'table',
        title: 'The Remaining Consonants',
        headers: ['Thai', 'Sound', 'Same as', 'Example Word'],
        rows: [
          ['ฎ', 'daw (mid)', 'ด', 'กฎหมาย gòt-mǎai = law'],
          ['ฏ', 'dtaw (mid)', 'ต', 'ปฏิบัติ bpà-dtì-bàt = to practice'],
          ['ฆ', 'kaw (low)', 'ค', 'ฆาตกร khâat-dta-gawn = murderer'],
          ['ฌ', 'chaw (low)', 'ช', 'เฌอ choe = tree (poetic, rare)'],
          ['ฑ', 'taw (low)', 'ท', 'มณโฑ mon-thoo = Montho (Ramakien)'],
          ['ฒ', 'taw (low)', 'ท', 'ผู้เฒ่า phûu-thâo = elder'],
          ['ณ', 'naw (low)', 'น', 'เณร neen = novice monk'],
          ['ฬ', 'law (low)', 'ล', 'จุฬา ju-laa = Chulalongkorn'],
        ],
      },
      {
        kind: 'rule',
        rule: 'These consonants exist because Thai borrowed many words from Pali and Sanskrit, which distinguished sounds that Thai does not. In practice, ฎ sounds exactly like ด, ฏ like ต, ณ like น, and ฬ like ล. You just need to recognize the correct spelling.',
        examples: [
          { thai: 'กฎหมาย', romanization: 'gòt-mǎai', english: 'law -- uses ฎ (not ด)' },
          { thai: 'เณร', romanization: 'neen', english: 'novice monk -- uses ณ (not น)' },
          { thai: 'จุฬา', romanization: 'ju-laa', english: 'Chulalongkorn -- uses ฬ (not ล)' },
        ],
      },
      {
        kind: 'info_card',
        items: [
          {
            thai: 'กฎหมาย',
            romanization: 'gòt-mǎai',
            english: 'law',
            detail: 'Uses ฎ. Seen on legal documents and law offices.',
          },
          {
            thai: 'ปฏิบัติ',
            romanization: 'bpà-dtì-bàt',
            english: 'to practice / operate',
            detail: 'Uses ฏ. Common in formal and Buddhist contexts.',
          },
          {
            thai: 'เณร',
            romanization: 'neen',
            english: 'novice monk',
            detail: 'Uses ณ. Seen on temple signs everywhere in Thailand.',
          },
          {
            thai: 'จุฬา',
            romanization: 'ju-laa',
            english: 'Chulalongkorn (university name)',
            detail: 'Uses ฬ. Thailand\'s most prestigious university.',
          },
          {
            thai: 'ผู้เฒ่า',
            romanization: 'phûu-thâo',
            english: 'elder / old person',
            detail: 'Uses ฒ.',
          },
          {
            thai: 'ฆาตกร',
            romanization: 'khâat-dta-gawn',
            english: 'murderer / killer',
            detail: 'Uses ฆ. Dramatic but memorable.',
          },
        ],
      },
      {
        kind: 'text',
        content:
          'Thai also has two **obsolete** consonants: ฃ (khaw khuat) and ฅ (khaw khon). These are no longer used in modern Thai writing. They have been replaced by ข and ค respectively. You may see them in old texts or alphabet charts, but you do not need to learn them.\n\n**Congratulations -- you now know all 44 Thai consonants.**',
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
            prompt: 'What does กฎหมาย mean?',
            options: ['temple', 'law', 'university', 'elder'],
            correctIndex: 1,
          },
          {
            type: 'multiple_choice',
            prompt: 'What does เณร mean?',
            options: ['law', 'elder', 'novice monk', 'university'],
            correctIndex: 2,
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
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'กฎหมาย', back: 'gòt-mǎai -- law' },
              { front: 'ปฏิบัติ', back: 'bpà-dtì-bàt -- to practice' },
              { front: 'เณร', back: 'neen -- novice monk' },
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        type: 'multiple_choice',
        prompt: 'ฎ makes the same sound as which consonant?',
        options: ['ด', 'ต', 'บ', 'ก'],
        correctIndex: 0,
      },
      {
        type: 'multiple_choice',
        prompt: 'ณ makes the same sound as which consonant?',
        options: ['ม', 'ล', 'น', 'ง'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does กฎหมาย mean?',
        promptThai: 'กฎหมาย',
        options: ['temple', 'law', 'elder', 'monk'],
        correctIndex: 1,
      },
      {
        type: 'multiple_choice',
        prompt: 'What does เณร mean?',
        options: ['law', 'university', 'novice monk', 'elder'],
        correctIndex: 2,
      },
      {
        type: 'multiple_choice',
        prompt: 'Why does Thai have consonants like ฎ and ณ that sound the same as ด and น?',
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
        prompt: 'What happened to the consonants ฃ and ฅ?',
        options: [
          'They are very common',
          'They are obsolete and no longer used in modern Thai',
          'They are used only in names',
          'They were added recently',
        ],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['dor_chada', 'dtor_patak', 'khor_rakhang', 'nor_neen', 'lor_julaa', 'w_gotmaai', 'w_neen', 'w_julaa'],
    skillPreview: {
      heading: "You now know all 44 Thai consonants",
      examples: [
        { thai: 'กฎหมาย', romanization: 'gòt-mǎai', meaning: 'law' },
        { thai: 'เณร', romanization: 'neen', meaning: 'novice monk' },
        { thai: 'จุฬา', romanization: 'ju-laa', meaning: 'Chulalongkorn' },
      ],
    },
  },

  // === LESSON 14: Reading Real Words ===
  {
    id: 'R14',
    title: 'Reading Real Words',
    goal: 'Read complete Thai words using all learned consonants and vowels. Consolidation and decoding practice.',
    phase: 'reading',
    order: 13,
    difficulty: 'beginner',
    prerequisites: ['R13'],
    steps: [
      {
        kind: 'text',
        content:
          'You now know all 44 consonants and many vowels. Let us combine everything into reading real Thai words -- some of the most common words in the language.\n\nFrom this lesson forward, we will practice not just HOW to read words, but WHAT they mean.',
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
        kind: 'info_card',
        items: [
          {
            thai: 'ซื้อ',
            romanization: 'súue',
            english: 'to buy',
          },
          {
            thai: 'ภาษา',
            romanization: 'phaa-sǎa',
            english: 'language',
          },
          {
            thai: 'เรียน',
            romanization: 'riian',
            english: 'to study',
          },
          {
            thai: 'เมือง',
            romanization: 'muueang',
            english: 'city',
          },
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
            prompt: 'What does กิน mean?',
            promptThai: 'กิน',
            options: ['to come', 'to eat', 'to go', 'water'],
            correctIndex: 1,
            audioText: 'กิน',
          },
          {
            type: 'multiple_choice',
            prompt: 'What does ภาษา mean?',
            promptThai: 'ภาษา',
            options: ['bank', 'language', 'station', 'city'],
            correctIndex: 1,
            audioText: 'ภาษา',
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
              { left: 'ซื้อ', right: 'to buy' },
            ],
          },
          {
            type: 'tap_to_reveal',
            cards: [
              { front: 'น้ำ', back: 'náam -- water', audioText: 'น้ำ' },
              { front: 'ไม่', back: 'mâi -- not', audioText: 'ไม่' },
              { front: 'เรียน', back: 'riian -- to study', audioText: 'เรียน' },
            ],
          },
        ],
      },
    ],
    assessment: [
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
        prompt: 'What does ภาษา mean?',
        options: ['bank', 'station', 'language', 'city'],
        correctIndex: 2,
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
      {
        type: 'multiple_choice',
        prompt: 'What does ซื้อ mean?',
        options: ['to sell', 'to buy', 'to eat', 'to study'],
        correctIndex: 1,
      },
    ],
    srsItemIds: ['w_gin', 'w_maa', 'w_bpai', 'w_dii', 'w_naam', 'w_mai', 'w_suue', 'w_phasaa'],
    skillPreview: {
      heading: "You'll read and understand everyday words",
      examples: [
        { thai: 'กิน', romanization: 'gin', meaning: 'to eat' },
        { thai: 'ภาษา', romanization: 'phaa-sǎa', meaning: 'language' },
        { thai: 'น้ำ', romanization: 'náam', meaning: 'water' },
      ],
    },
  },

  // === LESSON 15: Building Phrases ===
  {
    id: 'R15',
    title: 'Building Phrases',
    goal: 'Combine words into phrases. Adjective-after-noun. Verb chaining. Read signs and menus.',
    phase: 'reading',
    order: 14,
    difficulty: 'beginner',
    prerequisites: ['R14'],
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
            thai: 'ร้าน',
            romanization: 'ráan',
            english: 'shop or store',
          },
          {
            thai: 'อาหาร',
            romanization: 'aa-hǎan',
            english: 'food',
          },
          {
            thai: 'มี',
            romanization: 'mii',
            english: 'to have',
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
            prompt: 'What does ร้านอาหาร mean?',
            options: ['hospital', 'school', 'restaurant', 'bank'],
            correctIndex: 2,
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
        prompt: 'What does ร้านอาหาร mean?',
        options: ['hospital', 'school', 'restaurant', 'bank'],
        correctIndex: 2,
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
        prompt: 'If you see ร้านอาหาร on a building, what kind of place is it?',
        options: ['School', 'Hospital', 'Restaurant', 'Bank'],
        correctIndex: 2,
      },
    ],
    srsItemIds: ['w_maak', 'w_duu', 'w_raan', 'w_aahaan', 'w_mii'],
    skillPreview: {
      heading: "You'll read Thai phrases and signs",
      examples: [
        { thai: 'ดีมาก', romanization: 'dii mâak', meaning: 'very good' },
        { thai: 'ไปกิน', romanization: 'bpai gin', meaning: 'go eat' },
        { thai: 'ร้านอาหาร', romanization: 'ráan aa-hǎan', meaning: 'restaurant' },
      ],
    },
  },
]
