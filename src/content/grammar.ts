import type { GrammarPattern } from './types'

// 30 grammar patterns covering core Thai sentence structures.
// Each pattern includes 3 example sentences in Thai with English translations.
// requiredWords references word IDs from words.ts.

export const grammarPatterns: GrammarPattern[] = [
  // === 1. Basic SVO order (3 patterns) ===
  {
    id: 'g_svo_basic',
    patternName: 'Basic Subject-Verb-Object',
    examplesThai: [
      'ฉันกินข้าว',
      'เขาดูหนังสือ',
      'พี่ชอบปลา',
    ],
    examplesEnglish: [
      'I eat rice.',
      'He/she reads a book.',
      'Older sibling likes fish.',
    ],
    requiredWords: ['w_chan', 'w_gin', 'w_khaao', 'w_khao_he', 'w_duu', 'w_nangsuue', 'w_phii', 'w_chawp', 'w_bplaa'],
  },
  {
    id: 'g_svo_pronoun',
    patternName: 'SVO with different pronouns',
    examplesThai: [
      'คุณพูดไทย',
      'เราเรียนภาษา',
      'เขาทำงาน',
    ],
    examplesEnglish: [
      'You speak Thai.',
      'We study language.',
      'He/she works.',
    ],
    requiredWords: ['w_khun', 'w_phuut', 'w_rao', 'w_rian', 'w_khao_he', 'w_tham', 'w_ngaan'],
  },
  {
    id: 'g_svo_object',
    patternName: 'SVO with common objects',
    examplesThai: [
      'ฉันดื่มน้ำ',
      'เขาซื้อผัก',
      'คุณอ่านหนังสือ',
    ],
    examplesEnglish: [
      'I drink water.',
      'He/she buys vegetables.',
      'You read a book.',
    ],
    requiredWords: ['w_chan', 'w_duem', 'w_naam', 'w_khao_he', 'w_suue', 'w_phak', 'w_khun', 'w_aan', 'w_nangsuue'],
  },

  // === 2. Negation with mai (2 patterns) ===
  {
    id: 'g_neg_mai',
    patternName: 'Negation with mai',
    examplesThai: [
      'ฉันไม่ชอบเผ็ด',
      'เขาไม่มาวันนี้',
      'คุณไม่รู้',
    ],
    examplesEnglish: [
      'I don\'t like spicy.',
      'He/she is not coming today.',
      'You don\'t know.',
    ],
    requiredWords: ['w_chan', 'w_mai', 'w_chawp', 'w_phet', 'w_khao_he', 'w_maa', 'w_wan', 'w_nii', 'w_khun', 'w_ruu'],
  },
  {
    id: 'g_neg_mai_dai',
    patternName: 'Negation of ability with mai dai',
    examplesThai: [
      'ฉันไม่ได้ไป',
      'เขาไม่ได้กิน',
      'เราไม่ได้ซื้อ',
    ],
    examplesEnglish: [
      'I didn\'t go.',
      'He/she didn\'t eat.',
      'We didn\'t buy.',
    ],
    requiredWords: ['w_chan', 'w_mai', 'w_dai', 'w_bpai', 'w_khao_he', 'w_gin', 'w_rao', 'w_suue'],
  },

  // === 3. Questions with mai and rue (3 patterns) ===
  {
    id: 'g_q_mai',
    patternName: 'Yes/no questions with mai',
    examplesThai: [
      'คุณชอบไหม',
      'อร่อยไหม',
      'เขามาไหม',
    ],
    examplesEnglish: [
      'Do you like it?',
      'Is it delicious?',
      'Is he/she coming?',
    ],
    requiredWords: ['w_khun', 'w_chawp', 'w_mai_question', 'w_aroi', 'w_khao_he', 'w_maa'],
  },
  {
    id: 'g_q_rue',
    patternName: 'Alternative questions with rue',
    examplesThai: [
      'ไปหรือไม่ไป',
      'ชอบหรือไม่ชอบ',
      'ใช่หรือไม่',
    ],
    examplesEnglish: [
      'Go or not go?',
      'Like or not like?',
      'Yes or no?',
    ],
    requiredWords: ['w_bpai', 'w_rue', 'w_mai', 'w_chawp', 'w_chai'],
  },
  {
    id: 'g_q_what',
    patternName: 'Question words (what, where, when)',
    examplesThai: [
      'นี่อะไร',
      'ห้องน้ำอยู่ที่ไหน',
      'ไปเมื่อไร',
    ],
    examplesEnglish: [
      'What is this?',
      'Where is the bathroom?',
      'When are you going?',
    ],
    requiredWords: ['w_nii', 'w_arai', 'w_yuu', 'w_thii_nai', 'w_bpai', 'w_mua_rai'],
  },

  // === 4. Tense markers ja, laeo, kamlang (3 patterns) ===
  {
    id: 'g_tense_ja',
    patternName: 'Future tense with ja',
    examplesThai: [
      'ฉันจะไป',
      'เขาจะมาวันนี้',
      'เราจะกินข้าว',
    ],
    examplesEnglish: [
      'I will go.',
      'He/she will come today.',
      'We will eat rice.',
    ],
    requiredWords: ['w_chan', 'w_ja', 'w_bpai', 'w_khao_he', 'w_maa', 'w_wan', 'w_nii', 'w_rao', 'w_gin', 'w_khaao'],
  },
  {
    id: 'g_tense_laeo',
    patternName: 'Completed action with laeo',
    examplesThai: [
      'ฉันกินแล้ว',
      'เขาไปแล้ว',
      'เรียนแล้ว',
    ],
    examplesEnglish: [
      'I have eaten already.',
      'He/she has gone already.',
      'Already studied.',
    ],
    requiredWords: ['w_chan', 'w_gin', 'w_laeo', 'w_khao_he', 'w_bpai', 'w_rian'],
  },
  {
    id: 'g_tense_kamlang',
    patternName: 'Progressive action with kamlang',
    examplesThai: [
      'ฉันกำลังกิน',
      'เขากำลังเรียน',
      'เรากำลังทำงาน',
    ],
    examplesEnglish: [
      'I am eating.',
      'He/she is studying.',
      'We are working.',
    ],
    requiredWords: ['w_chan', 'w_kamlang', 'w_gin', 'w_khao_he', 'w_rian', 'w_rao', 'w_tham', 'w_ngaan'],
  },

  // === 5. Classifiers (3 patterns) ===
  {
    id: 'g_clf_tua',
    patternName: 'Classifier tua for animals',
    examplesThai: [
      'หมาสามตัว',
      'แมวสองตัว',
      'ปลาห้าตัว',
    ],
    examplesEnglish: [
      'Three dogs.',
      'Two cats.',
      'Five fish.',
    ],
    requiredWords: ['w_maa_dog', 'w_saam', 'w_tua', 'w_maeo', 'w_song', 'w_bplaa', 'w_haa'],
  },
  {
    id: 'g_clf_khon',
    patternName: 'Classifier khon for people',
    examplesThai: [
      'คนสามคน',
      'เพื่อนสองคน',
      'พี่หนึ่งคน',
    ],
    examplesEnglish: [
      'Three people.',
      'Two friends.',
      'One older sibling.',
    ],
    requiredWords: ['w_khon', 'w_saam', 'w_khon_clf', 'w_phuan', 'w_song', 'w_phii', 'w_nung'],
  },
  {
    id: 'g_clf_an',
    patternName: 'Classifier an for general objects',
    examplesThai: [
      'จานสองอัน',
      'นี่อันไหน',
      'เอาอันนี้',
    ],
    examplesEnglish: [
      'Two plates.',
      'Which one?',
      'I want this one.',
    ],
    requiredWords: ['w_jaan', 'w_song', 'w_an', 'w_nii'],
  },

  // === 6. Adjective placement (2 patterns) ===
  {
    id: 'g_adj_after',
    patternName: 'Adjectives after nouns',
    examplesThai: [
      'บ้านใหญ่',
      'หมาเล็ก',
      'น้ำร้อน',
    ],
    examplesEnglish: [
      'A big house.',
      'A small dog.',
      'Hot water.',
    ],
    requiredWords: ['w_baan', 'w_maa_dog', 'w_lek', 'w_naam', 'w_ron'],
  },
  {
    id: 'g_adj_maak',
    patternName: 'Intensifying adjectives with maak',
    examplesThai: [
      'อร่อยมาก',
      'เผ็ดมาก',
      'ดีมาก',
    ],
    examplesEnglish: [
      'Very delicious.',
      'Very spicy.',
      'Very good.',
    ],
    requiredWords: ['w_aroi', 'w_maak', 'w_phet', 'w_dii'],
  },

  // === 7. Comparisons with kwaa (2 patterns) ===
  {
    id: 'g_comp_kwaa',
    patternName: 'Comparisons with kwaa',
    examplesThai: [
      'รถเร็วกว่า',
      'บ้านใหญ่กว่า',
      'ปลาอร่อยกว่า',
    ],
    examplesEnglish: [
      'The car is faster.',
      'The house is bigger.',
      'The fish is more delicious.',
    ],
    requiredWords: ['w_rot', 'w_wai', 'w_kwaa', 'w_baan', 'w_bplaa', 'w_aroi'],
  },
  {
    id: 'g_comp_thii_sut',
    patternName: 'Superlatives with thii sut',
    examplesThai: [
      'อร่อยที่สุด',
      'ดีที่สุด',
      'เล็กที่สุด',
    ],
    examplesEnglish: [
      'The most delicious.',
      'The best.',
      'The smallest.',
    ],
    requiredWords: ['w_aroi', 'w_thii', 'w_dii', 'w_lek'],
  },

  // === 8. Polite particles khrap/kha (2 patterns) ===
  {
    id: 'g_polite_statement',
    patternName: 'Polite statements with khrap/kha',
    examplesThai: [
      'ขอบคุณครับ',
      'สวัสดีค่ะ',
      'ไม่เป็นไรครับ',
    ],
    examplesEnglish: [
      'Thank you (male speaker).',
      'Hello (female speaker).',
      'No problem (male speaker).',
    ],
    requiredWords: ['w_khrap', 'w_kha'],
  },
  {
    id: 'g_polite_question',
    patternName: 'Polite questions with khrap/kha',
    examplesThai: [
      'อะไรครับ',
      'ไปไหนคะ',
      'ชอบไหมครับ',
    ],
    examplesEnglish: [
      'What is it? (male speaker)',
      'Where are you going? (female speaker)',
      'Do you like it? (male speaker)',
    ],
    requiredWords: ['w_arai', 'w_khrap', 'w_kha', 'w_bpai', 'w_thii_nai', 'w_chawp', 'w_mai_question'],
  },

  // === 9. Location words yuu thii (2 patterns) ===
  {
    id: 'g_loc_yuu',
    patternName: 'Stating location with yuu thii',
    examplesThai: [
      'ฉันอยู่ที่บ้าน',
      'ร้านอยู่ที่ไหน',
      'โรงเรียนอยู่ใกล้',
    ],
    examplesEnglish: [
      'I am at home.',
      'Where is the shop?',
      'The school is nearby.',
    ],
    requiredWords: ['w_chan', 'w_yuu', 'w_thii', 'w_baan', 'w_thii_nai', 'w_rong_rian', 'w_klai_near'],
  },
  {
    id: 'g_loc_direction',
    patternName: 'Giving directions',
    examplesThai: [
      'เลี้ยวซ้าย',
      'เลี้ยวขวา',
      'ไปตรง',
    ],
    examplesEnglish: [
      'Turn left.',
      'Turn right.',
      'Go straight.',
    ],
    requiredWords: ['w_saai', 'w_khwaa', 'w_trong', 'w_bpai'],
  },

  // === 10. Want/need yaak/dtawng kaan (2 patterns) ===
  {
    id: 'g_want_yaak',
    patternName: 'Expressing wants with yaak',
    examplesThai: [
      'ฉันอยากไป',
      'เขาอยากกินข้าว',
      'คุณอยากเรียนไหม',
    ],
    examplesEnglish: [
      'I want to go.',
      'He/she wants to eat rice.',
      'Do you want to study?',
    ],
    requiredWords: ['w_chan', 'w_yaak', 'w_bpai', 'w_khao_he', 'w_gin', 'w_khaao', 'w_khun', 'w_rian', 'w_mai_question'],
  },
  {
    id: 'g_need_dtawng',
    patternName: 'Expressing necessity with dtawng',
    examplesThai: [
      'ฉันต้องไป',
      'คุณต้องเรียน',
      'เราต้องทำงาน',
    ],
    examplesEnglish: [
      'I must go.',
      'You must study.',
      'We must work.',
    ],
    requiredWords: ['w_chan', 'w_dtawng', 'w_bpai', 'w_khun', 'w_rian', 'w_rao', 'w_tham', 'w_ngaan'],
  },

  // === 11. Can/able to dai (2 patterns) ===
  {
    id: 'g_can_dai',
    patternName: 'Expressing ability with dai',
    examplesThai: [
      'ฉันพูดไทยได้',
      'เขาเขียนได้',
      'คุณอ่านได้ไหม',
    ],
    examplesEnglish: [
      'I can speak Thai.',
      'He/she can write.',
      'Can you read?',
    ],
    requiredWords: ['w_chan', 'w_phuut', 'w_dai', 'w_khao_he', 'w_khian', 'w_khun', 'w_aan', 'w_mai_question'],
  },
  {
    id: 'g_can_pen',
    patternName: 'Knowing how to with pen',
    examplesThai: [
      'ฉันเป็นว่ายน้ำ',
      'เขาเป็นพูดไทย',
      'คุณเป็นไหม',
    ],
    examplesEnglish: [
      'I know how to swim.',
      'He/she knows how to speak Thai.',
      'Do you know how?',
    ],
    requiredWords: ['w_chan', 'w_pen', 'w_naam', 'w_khao_he', 'w_phuut', 'w_khun', 'w_mai_question'],
  },
  {
    id: 'g_can_not',
    patternName: 'Expressing inability with mai dai',
    examplesThai: [
      'ฉันไปไม่ได้',
      'เขากินไม่ได้',
      'พูดไทยไม่ได้',
    ],
    examplesEnglish: [
      'I cannot go.',
      'He/she cannot eat it.',
      'Cannot speak Thai.',
    ],
    requiredWords: ['w_chan', 'w_bpai', 'w_mai', 'w_dai', 'w_khao_he', 'w_gin', 'w_phuut'],
  },

  // === 12. Conjunctions and connectors (3 patterns) ===
  {
    id: 'g_conj_lae',
    patternName: 'Connecting with lae (and) and kap (with)',
    examplesThai: [
      'พ่อและแม่',
      'ฉันกับเพื่อน',
      'ข้าวและน้ำ',
    ],
    examplesEnglish: [
      'Father and mother.',
      'I and my friend.',
      'Rice and water.',
    ],
    requiredWords: ['w_phoo', 'w_lae', 'w_mae', 'w_chan', 'w_kap', 'w_phuan', 'w_khaao', 'w_naam'],
  },
  {
    id: 'g_conj_tae',
    patternName: 'Contrast with tae (but)',
    examplesThai: [
      'เผ็ดแต่อร่อย',
      'เล็กแต่ดี',
      'ไกลแต่สวย',
    ],
    examplesEnglish: [
      'Spicy but delicious.',
      'Small but good.',
      'Far but beautiful.',
    ],
    requiredWords: ['w_phet', 'w_tae', 'w_aroi', 'w_lek', 'w_dii', 'w_klai'],
  },
  {
    id: 'g_conj_phraw',
    patternName: 'Giving reasons with phraw (because)',
    examplesThai: [
      'ไม่ไปเพราะฝน',
      'ชอบเพราะอร่อย',
      'เรียนเพราะอยาก',
    ],
    examplesEnglish: [
      'Not going because of rain.',
      'Like it because it\'s delicious.',
      'Study because I want to.',
    ],
    requiredWords: ['w_mai', 'w_bpai', 'w_phraw', 'w_fon', 'w_chawp', 'w_aroi', 'w_rian', 'w_yaak'],
  },
]
