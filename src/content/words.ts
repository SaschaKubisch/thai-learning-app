import type { Word } from './types'

// Words are ordered so each word only uses consonants and vowels that appear
// earlier in consonants.ts and vowels.ts. This allows progressive unlocking.
//
// Consonant order (by id): kor_kai (ก), jor_jaan (จ), dor_chada (ฎ), dtor_patak (ฏ),
//   dor_dek (ด), dtor_dtao (ต), bor_baimai (บ), por_plaa (ป), or_ang (อ),
//   khor_khai (ข), khor_khuat (ฃ), chor_ching (ฉ), sor_so (ซ), thor_thaan (ฐ),
//   thor_thung (ถ), phor_phueng (ผ), for_faa (ฝ), sor_sala (ศ), sor_ruesi (ษ),
//   sor_suea (ส), khor_khwaai (ค), khor_khon (ฅ), khor_rakhang (ฆ), ngor_nguu (ง),
//   chor_chaang (ช), sor_choe (ซ), chor_choe (ฌ), yor_ying (ญ), thor_montho (ฑ),
//   thor_phuutao (ฒ), nor_nen (ณ), thor_thong (ท), thor_thahaan (ธ), nor_nuu (น),
//   phor_phaan (พ), for_fan (ฟ), phor_samphao (ภ), mor_maa (ม), yor_yak (ย),
//   ror_ruea (ร), lor_ling (ล), wor_waen (ว), hor_hip (ห), lor_chulaa (ฬ), hor_nokhuk (ฮ)
//
// Vowel order (by id): sara_aa, sara_ii, sara_uu, sara_ee, sara_ae, sara_oo,
//   sara_aw, sara_er, sara_i, sara_u, sara_e, sara_ae_short, sara_o_short,
//   mai_han_akat, sara_am, sara_ai_maimalai, sara_ai_maimuan, mai_taikhu

export const words: Word[] = [
  // --- PHASE 1: Mid-class consonants + basic vowels (simplest combinations) ---
  // 1-6: sara_aa
  { id: 'w_kaa', thai: 'กา', romanization: 'kaa', english: 'crow', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_aa'] },
  { id: 'w_jaa', thai: 'จา', romanization: 'jaa', english: 'to stare', requiredConsonants: ['jor_jaan'], requiredVowels: ['sara_aa'] },
  { id: 'w_dtaa', thai: 'ตา', romanization: 'dtaa', english: 'eye', requiredConsonants: ['dtor_dtao'], requiredVowels: ['sara_aa'] },
  { id: 'w_baa', thai: 'บา', romanization: 'baa', english: 'crazy', requiredConsonants: ['bor_baimai'], requiredVowels: ['sara_aa'] },
  { id: 'w_paa', thai: 'ปา', romanization: 'bpaa', english: 'to throw', requiredConsonants: ['por_plaa'], requiredVowels: ['sara_aa'] },
  { id: 'w_aa', thai: 'อา', romanization: 'aa', english: 'uncle/aunt', requiredConsonants: ['or_ang'], requiredVowels: ['sara_aa'] },
  // 7-9: sara_ii
  { id: 'w_dii', thai: 'ดี', romanization: 'dii', english: 'good', requiredConsonants: ['dor_dek'], requiredVowels: ['sara_ii'] },
  { id: 'w_bpii', thai: 'ปี', romanization: 'bpii', english: 'year', requiredConsonants: ['por_plaa'], requiredVowels: ['sara_ii'] },
  { id: 'w_jii', thai: 'จี', romanization: 'jii', english: 'to tickle', requiredConsonants: ['jor_jaan'], requiredVowels: ['sara_ii'] },
  // 10-12: sara_uu
  { id: 'w_duu', thai: 'ดู', romanization: 'duu', english: 'to look', requiredConsonants: ['dor_dek'], requiredVowels: ['sara_uu'] },
  { id: 'w_buu', thai: 'บู', romanization: 'buu', english: 'to pout', requiredConsonants: ['bor_baimai'], requiredVowels: ['sara_uu'] },
  { id: 'w_puu', thai: 'ปู', romanization: 'bpuu', english: 'crab', requiredConsonants: ['por_plaa'], requiredVowels: ['sara_uu'] },
  // 13-14: sara_ee
  { id: 'w_gee', thai: 'เก', romanization: 'kee', english: 'old (thing)', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_ee'] },
  { id: 'w_dtee', thai: 'เต', romanization: 'dtee', english: 'to kick', requiredConsonants: ['dtor_dtao'], requiredVowels: ['sara_ee'] },
  // 15-16: sara_ae
  { id: 'w_gae', thai: 'แก', romanization: 'kae', english: 'you (informal)', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_ae'] },
  { id: 'w_bae', thai: 'แบ', romanization: 'bae', english: 'flat', requiredConsonants: ['bor_baimai'], requiredVowels: ['sara_ae'] },
  // 17-19: sara_oo
  { id: 'w_goo', thai: 'โก', romanization: 'koo', english: 'to cheat', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_oo'] },
  { id: 'w_dtoo', thai: 'โต', romanization: 'dtoo', english: 'big/to grow', requiredConsonants: ['dtor_dtao'], requiredVowels: ['sara_oo'] },
  { id: 'w_toh', thai: 'โต๊ะ', romanization: 'dto', english: 'table', requiredConsonants: ['dtor_dtao'], requiredVowels: ['sara_oo'] },
  // 20-21: sara_aw
  { id: 'w_gor', thai: 'กอ', romanization: 'kaw', english: 'to hug', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_aw'] },
  { id: 'w_jor', thai: 'จอ', romanization: 'jaw', english: 'screen', requiredConsonants: ['jor_jaan'], requiredVowels: ['sara_aw'] },
  // 22-23: sara_i (short)
  { id: 'w_di', thai: 'ดิ', romanization: 'di', english: 'go on (particle)', requiredConsonants: ['dor_dek'], requiredVowels: ['sara_i'] },
  { id: 'w_ji', thai: 'จิ', romanization: 'ji', english: 'to sip', requiredConsonants: ['jor_jaan'], requiredVowels: ['sara_i'] },
  // 24-25: sara_u (short)
  { id: 'w_du', thai: 'ดุ', romanization: 'du', english: 'fierce', requiredConsonants: ['dor_dek'], requiredVowels: ['sara_u'] },
  { id: 'w_bu', thai: 'บุ', romanization: 'bu', english: 'to line (cloth)', requiredConsonants: ['bor_baimai'], requiredVowels: ['sara_u'] },
  // 26-29: mai_han_akat
  { id: 'w_gat', thai: 'กัด', romanization: 'kat', english: 'to bite', requiredConsonants: ['kor_kai', 'dor_dek'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_jat', thai: 'จัด', romanization: 'jat', english: 'to arrange', requiredConsonants: ['jor_jaan', 'dor_dek'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_kat', thai: 'กัน', romanization: 'kan', english: 'together/each other', requiredConsonants: ['kor_kai'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_bat', thai: 'บาท', romanization: 'baat', english: 'baht', requiredConsonants: ['bor_baimai'], requiredVowels: ['sara_aa'] },
  // 30-32: sara_am
  { id: 'w_kam', thai: 'กำ', romanization: 'kam', english: 'to grip', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_am'] },
  { id: 'w_jam', thai: 'จำ', romanization: 'jam', english: 'to remember', requiredConsonants: ['jor_jaan'], requiredVowels: ['sara_am'] },
  { id: 'w_dtam', thai: 'ตำ', romanization: 'dtam', english: 'to pound', requiredConsonants: ['dtor_dtao'], requiredVowels: ['sara_am'] },
  // 33-36: sara_ai_maimalai
  { id: 'w_kai', thai: 'ไก่', romanization: 'kai', english: 'chicken', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_dai', thai: 'ได้', romanization: 'dai', english: 'to get/can', requiredConsonants: ['dor_dek'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_bpai', thai: 'ไป', romanization: 'bpai', english: 'to go', requiredConsonants: ['por_plaa'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_ja', thai: 'จะ', romanization: 'ja', english: 'will (future)', requiredConsonants: ['jor_jaan'], requiredVowels: [] },
  // 37: sara_ai_maimuan
  { id: 'w_bai', thai: 'ใบ', romanization: 'bai', english: 'leaf/classifier', requiredConsonants: ['bor_baimai'], requiredVowels: ['sara_ai_maimuan'] },

  // --- PHASE 2: High-class consonants ---
  // 38-40: khor_khai (ข)
  { id: 'w_khai', thai: 'ไข่', romanization: 'khai', english: 'egg', requiredConsonants: ['khor_khai'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_khaa', thai: 'ขา', romanization: 'khaa', english: 'leg', requiredConsonants: ['khor_khai'], requiredVowels: ['sara_aa'] },
  { id: 'w_khaw', thai: 'ขอ', romanization: 'khaw', english: 'to request', requiredConsonants: ['khor_khai', 'or_ang'], requiredVowels: ['sara_aw'] },
  // 41-43: sor_suea (ส)
  { id: 'w_sii', thai: 'สี', romanization: 'sii', english: 'color', requiredConsonants: ['sor_suea'], requiredVowels: ['sara_ii'] },
  { id: 'w_sii_daeng', thai: 'สี่', romanization: 'sii', english: 'four', requiredConsonants: ['sor_suea'], requiredVowels: ['sara_ii'] },
  { id: 'w_sip', thai: 'สิบ', romanization: 'sip', english: 'ten', requiredConsonants: ['sor_suea', 'bor_baimai'], requiredVowels: ['sara_i'] },
  // 44-46: thor_thung (ถ), phor_phueng (ผ), for_faa (ฝ)
  { id: 'w_thaa', thai: 'ถ้า', romanization: 'thaa', english: 'if', requiredConsonants: ['thor_thung'], requiredVowels: ['sara_aa'] },
  { id: 'w_phaa', thai: 'ผ้า', romanization: 'phaa', english: 'cloth', requiredConsonants: ['phor_phueng'], requiredVowels: ['sara_aa'] },
  { id: 'w_faa', thai: 'ฝา', romanization: 'faa', english: 'lid', requiredConsonants: ['for_faa'], requiredVowels: ['sara_aa'] },

  // --- PHASE 3: Low-class consonants ---
  // 47-48: khor_khwaai (ค)
  { id: 'w_kham', thai: 'คำ', romanization: 'kham', english: 'word', requiredConsonants: ['khor_khwaai'], requiredVowels: ['sara_am'] },
  { id: 'w_kham_evening', thai: 'ค่ำ', romanization: 'kham', english: 'evening', requiredConsonants: ['khor_khwaai'], requiredVowels: ['sara_am'] },
  // 49-51: ngor_nguu (ง)
  { id: 'w_nguu', thai: 'งู', romanization: 'nguu', english: 'snake', requiredConsonants: ['ngor_nguu'], requiredVowels: ['sara_uu'] },
  { id: 'w_ngai', thai: 'ง่าย', romanization: 'ngaai', english: 'easy', requiredConsonants: ['ngor_nguu', 'yor_yak'], requiredVowels: ['sara_aa'] },
  { id: 'w_song', thai: 'สอง', romanization: 'sawng', english: 'two', requiredConsonants: ['sor_suea', 'ngor_nguu'], requiredVowels: ['sara_aw'] },
  // 52-56: chor_chaang (ช)
  { id: 'w_chaang', thai: 'ช้าง', romanization: 'chaang', english: 'elephant', requiredConsonants: ['chor_chaang', 'ngor_nguu'], requiredVowels: ['sara_aa'] },
  { id: 'w_chaa', thai: 'ชา', romanization: 'chaa', english: 'tea', requiredConsonants: ['chor_chaang'], requiredVowels: ['sara_aa'] },
  { id: 'w_chai', thai: 'ใช่', romanization: 'chai', english: 'yes', requiredConsonants: ['chor_chaang'], requiredVowels: ['sara_ai_maimuan'] },
  { id: 'w_chuea', thai: 'ชื่อ', romanization: 'chueaa', english: 'name', requiredConsonants: ['chor_chaang', 'or_ang'], requiredVowels: ['sara_uu'] },
  { id: 'w_chaa_slow', thai: 'ช้า', romanization: 'chaa', english: 'slow', requiredConsonants: ['chor_chaang'], requiredVowels: ['sara_aa'] },
  // 57-62: nor_nuu (น)
  { id: 'w_naa', thai: 'นา', romanization: 'naa', english: 'rice field', requiredConsonants: ['nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_nii', thai: 'นี่', romanization: 'nii', english: 'this', requiredConsonants: ['nor_nuu'], requiredVowels: ['sara_ii'] },
  { id: 'w_naam', thai: 'น้ำ', romanization: 'naam', english: 'water', requiredConsonants: ['nor_nuu'], requiredVowels: ['sara_am'] },
  { id: 'w_nok', thai: 'นก', romanization: 'nok', english: 'bird', requiredConsonants: ['nor_nuu', 'kor_kai'], requiredVowels: [] },
  { id: 'w_non', thai: 'นอน', romanization: 'nawn', english: 'to sleep', requiredConsonants: ['nor_nuu'], requiredVowels: ['sara_aw'] },
  { id: 'w_nai', thai: 'ใน', romanization: 'nai', english: 'in/inside', requiredConsonants: ['nor_nuu'], requiredVowels: ['sara_ai_maimuan'] },
  // 63-66: thor_thong (ท)
  { id: 'w_thii', thai: 'ที่', romanization: 'thii', english: 'at/place', requiredConsonants: ['thor_thong'], requiredVowels: ['sara_ii'] },
  { id: 'w_tham', thai: 'ทำ', romanization: 'tham', english: 'to do/make', requiredConsonants: ['thor_thong'], requiredVowels: ['sara_am'] },
  { id: 'w_thaan', thai: 'ทาน', romanization: 'thaan', english: 'to eat (polite)', requiredConsonants: ['thor_thong', 'nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_tang', thai: 'ทั้ง', romanization: 'thang', english: 'all/both', requiredConsonants: ['thor_thong', 'ngor_nguu'], requiredVowels: ['mai_han_akat'] },
  // 67-69: phor_phaan (พ)
  { id: 'w_phii', thai: 'พี่', romanization: 'phii', english: 'older sibling', requiredConsonants: ['phor_phaan'], requiredVowels: ['sara_ii'] },
  { id: 'w_phuut', thai: 'พูด', romanization: 'phuut', english: 'to speak', requiredConsonants: ['phor_phaan', 'dor_dek'], requiredVowels: ['sara_uu'] },
  { id: 'w_phoo', thai: 'พ่อ', romanization: 'phaw', english: 'father', requiredConsonants: ['phor_phaan', 'or_ang'], requiredVowels: ['sara_aw'] },
  // 70-72: for_fan (ฟ)
  { id: 'w_fai', thai: 'ไฟ', romanization: 'fai', english: 'fire', requiredConsonants: ['for_fan'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_fan', thai: 'ฟัน', romanization: 'fan', english: 'teeth', requiredConsonants: ['for_fan', 'nor_nuu'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_fang', thai: 'ฟัง', romanization: 'fang', english: 'to listen', requiredConsonants: ['for_fan', 'ngor_nguu'], requiredVowels: ['mai_han_akat'] },
  // 73-82: mor_maa (ม)
  { id: 'w_maa', thai: 'มา', romanization: 'maa', english: 'to come', requiredConsonants: ['mor_maa'], requiredVowels: ['sara_aa'] },
  { id: 'w_maak', thai: 'มาก', romanization: 'maak', english: 'very/much', requiredConsonants: ['mor_maa', 'kor_kai'], requiredVowels: ['sara_aa'] },
  { id: 'w_mii', thai: 'มี', romanization: 'mii', english: 'to have', requiredConsonants: ['mor_maa'], requiredVowels: ['sara_ii'] },
  { id: 'w_mae', thai: 'แม่', romanization: 'mae', english: 'mother', requiredConsonants: ['mor_maa'], requiredVowels: ['sara_ae'] },
  { id: 'w_mai', thai: 'ไม่', romanization: 'mai', english: 'not', requiredConsonants: ['mor_maa'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_maa_horse', thai: 'ม้า', romanization: 'maa', english: 'horse', requiredConsonants: ['mor_maa'], requiredVowels: ['sara_aa'] },
  { id: 'w_meuang', thai: 'เมือง', romanization: 'mueang', english: 'city', requiredConsonants: ['mor_maa', 'or_ang', 'ngor_nguu'], requiredVowels: ['sara_ee'] },
  { id: 'w_moong', thai: 'โมง', romanization: 'moong', english: 'o\'clock', requiredConsonants: ['mor_maa', 'ngor_nguu'], requiredVowels: ['sara_oo'] },
  { id: 'w_nom', thai: 'นม', romanization: 'nom', english: 'milk', requiredConsonants: ['nor_nuu', 'mor_maa'], requiredVowels: [] },
  { id: 'w_som', thai: 'ส้ม', romanization: 'som', english: 'orange', requiredConsonants: ['sor_suea', 'mor_maa'], requiredVowels: [] },
  // 83-87: yor_yak (ย)
  { id: 'w_yaa', thai: 'ยา', romanization: 'yaa', english: 'medicine', requiredConsonants: ['yor_yak'], requiredVowels: ['sara_aa'] },
  { id: 'w_yuu', thai: 'อยู่', romanization: 'yuu', english: 'to be at', requiredConsonants: ['or_ang', 'yor_yak'], requiredVowels: ['sara_uu'] },
  { id: 'w_yaak', thai: 'อยาก', romanization: 'yaak', english: 'to want', requiredConsonants: ['or_ang', 'yor_yak', 'kor_kai'], requiredVowels: ['sara_aa'] },
  { id: 'w_yen', thai: 'เย็น', romanization: 'yen', english: 'cool/evening', requiredConsonants: ['yor_yak', 'nor_nuu'], requiredVowels: ['sara_ee', 'mai_taikhu'] },
  { id: 'w_yin_dii', thai: 'ยินดี', romanization: 'yin dii', english: 'glad/welcome', requiredConsonants: ['yor_yak', 'nor_nuu', 'dor_dek'], requiredVowels: ['sara_i', 'sara_ii'] },
  // 88-94: ror_ruea (ร)
  { id: 'w_rai', thai: 'ไร่', romanization: 'rai', english: 'farm', requiredConsonants: ['ror_ruea'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_ron', thai: 'ร้อน', romanization: 'rawn', english: 'hot', requiredConsonants: ['ror_ruea', 'or_ang', 'nor_nuu'], requiredVowels: ['sara_aw'] },
  { id: 'w_rak', thai: 'รัก', romanization: 'rak', english: 'to love', requiredConsonants: ['ror_ruea', 'kor_kai'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_ruu', thai: 'รู้', romanization: 'ruu', english: 'to know', requiredConsonants: ['ror_ruea'], requiredVowels: ['sara_uu'] },
  { id: 'w_rian', thai: 'เรียน', romanization: 'rian', english: 'to study', requiredConsonants: ['ror_ruea', 'yor_yak', 'nor_nuu'], requiredVowels: ['sara_ee'] },
  { id: 'w_ruea', thai: 'เรือ', romanization: 'ruea', english: 'boat', requiredConsonants: ['ror_ruea', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_rot', thai: 'รถ', romanization: 'rot', english: 'car', requiredConsonants: ['ror_ruea', 'thor_thung'], requiredVowels: [] },
  // 95-98: lor_ling (ล)
  { id: 'w_lek', thai: 'เล็ก', romanization: 'lek', english: 'small', requiredConsonants: ['lor_ling', 'kor_kai'], requiredVowels: ['sara_ee', 'mai_taikhu'] },
  { id: 'w_luuk', thai: 'ลูก', romanization: 'luuk', english: 'child/fruit', requiredConsonants: ['lor_ling', 'kor_kai'], requiredVowels: ['sara_uu'] },
  { id: 'w_lae', thai: 'และ', romanization: 'lae', english: 'and', requiredConsonants: ['lor_ling'], requiredVowels: ['sara_ae'] },
  { id: 'w_laang', thai: 'ล่าง', romanization: 'laang', english: 'below', requiredConsonants: ['lor_ling', 'ngor_nguu'], requiredVowels: ['sara_aa'] },
  // 99-101: wor_waen (ว)
  { id: 'w_wan', thai: 'วัน', romanization: 'wan', english: 'day', requiredConsonants: ['wor_waen', 'nor_nuu'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_wai', thai: 'ไว', romanization: 'wai', english: 'fast', requiredConsonants: ['wor_waen'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_wua', thai: 'วัว', romanization: 'wua', english: 'cow', requiredConsonants: ['wor_waen'], requiredVowels: ['mai_han_akat'] },
  // 102-105: hor_hip (ห) and combinations
  { id: 'w_haa', thai: 'ห้า', romanization: 'haa', english: 'five', requiredConsonants: ['hor_hip'], requiredVowels: ['sara_aa'] },
  { id: 'w_hok', thai: 'หก', romanization: 'hok', english: 'six', requiredConsonants: ['hor_hip', 'kor_kai'], requiredVowels: [] },
  { id: 'w_huu', thai: 'หู', romanization: 'huu', english: 'ear', requiredConsonants: ['hor_hip'], requiredVowels: ['sara_uu'] },
  { id: 'w_hua', thai: 'หัว', romanization: 'hua', english: 'head', requiredConsonants: ['hor_hip', 'wor_waen'], requiredVowels: ['mai_han_akat'] },

  // --- PHASE 4: Multi-consonant words using known letters ---
  // 106-111: basic multi-consonant
  { id: 'w_gin', thai: 'กิน', romanization: 'kin', english: 'to eat', requiredConsonants: ['kor_kai', 'nor_nuu'], requiredVowels: ['sara_i'] },
  { id: 'w_jaan', thai: 'จาน', romanization: 'jaan', english: 'plate', requiredConsonants: ['jor_jaan', 'nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_baan', thai: 'บ้าน', romanization: 'baan', english: 'house', requiredConsonants: ['bor_baimai', 'nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_bplaa', thai: 'ปลา', romanization: 'bplaa', english: 'fish', requiredConsonants: ['por_plaa', 'lor_ling'], requiredVowels: ['sara_aa'] },
  { id: 'w_bon', thai: 'บน', romanization: 'bon', english: 'on/above', requiredConsonants: ['bor_baimai', 'nor_nuu'], requiredVowels: [] },
  { id: 'w_kap', thai: 'กับ', romanization: 'kap', english: 'with/and', requiredConsonants: ['kor_kai', 'bor_baimai'], requiredVowels: ['mai_han_akat'] },

  // 112-116: compound/high-class combos
  { id: 'w_khaao', thai: 'ข้าว', romanization: 'khaao', english: 'rice', requiredConsonants: ['khor_khai', 'wor_waen'], requiredVowels: ['sara_aa'] },
  { id: 'w_khaao_white', thai: 'ขาว', romanization: 'khaao', english: 'white', requiredConsonants: ['khor_khai', 'wor_waen'], requiredVowels: ['sara_aa'] },
  { id: 'w_khwaa', thai: 'ขวา', romanization: 'khwaa', english: 'right', requiredConsonants: ['khor_khai', 'wor_waen'], requiredVowels: ['sara_aa'] },
  { id: 'w_khai_sell', thai: 'ขาย', romanization: 'khaai', english: 'to sell', requiredConsonants: ['khor_khai', 'yor_yak'], requiredVowels: ['sara_aa'] },
  { id: 'w_khao', thai: 'เข้า', romanization: 'khao', english: 'to enter', requiredConsonants: ['khor_khai', 'or_ang'], requiredVowels: ['sara_ee'] },

  // 117-121: more low-class combos
  { id: 'w_khon', thai: 'คน', romanization: 'khon', english: 'person', requiredConsonants: ['khor_khwaai', 'nor_nuu'], requiredVowels: [] },
  { id: 'w_khuen', thai: 'คืน', romanization: 'khuuen', english: 'night', requiredConsonants: ['khor_khwaai', 'nor_nuu'], requiredVowels: ['sara_uu'] },
  { id: 'w_khit', thai: 'คิด', romanization: 'khit', english: 'to think', requiredConsonants: ['khor_khwaai', 'dor_dek'], requiredVowels: ['sara_i'] },
  { id: 'w_ngaan', thai: 'งาน', romanization: 'ngaan', english: 'work/event', requiredConsonants: ['ngor_nguu', 'nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_thung', thai: 'ถุง', romanization: 'thung', english: 'bag', requiredConsonants: ['thor_thung', 'ngor_nguu'], requiredVowels: ['sara_u'] },

  // 122-125: animals
  { id: 'w_maa_dog', thai: 'หมา', romanization: 'maa', english: 'dog', requiredConsonants: ['hor_hip', 'mor_maa'], requiredVowels: ['sara_aa'] },
  { id: 'w_maeo', thai: 'แมว', romanization: 'maeo', english: 'cat', requiredConsonants: ['mor_maa', 'wor_waen'], requiredVowels: ['sara_ae'] },
  { id: 'w_muu', thai: 'หมู', romanization: 'muu', english: 'pig/pork', requiredConsonants: ['hor_hip', 'mor_maa'], requiredVowels: ['sara_uu'] },
  { id: 'w_fon', thai: 'ฝน', romanization: 'fon', english: 'rain', requiredConsonants: ['for_faa', 'nor_nuu'], requiredVowels: [] },

  // 126-130: food
  { id: 'w_phet', thai: 'เผ็ด', romanization: 'phet', english: 'spicy', requiredConsonants: ['phor_phueng', 'dor_dek'], requiredVowels: ['sara_ee', 'mai_taikhu'] },
  { id: 'w_phak', thai: 'ผัก', romanization: 'phak', english: 'vegetable', requiredConsonants: ['phor_phueng', 'kor_kai'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_prik', thai: 'พริก', romanization: 'phrik', english: 'chili', requiredConsonants: ['phor_phaan', 'ror_ruea', 'kor_kai'], requiredVowels: ['sara_i'] },
  { id: 'w_kluai', thai: 'กล้วย', romanization: 'kluai', english: 'banana', requiredConsonants: ['kor_kai', 'lor_ling', 'wor_waen', 'yor_yak'], requiredVowels: ['sara_uu'] },
  { id: 'w_aroi', thai: 'อร่อย', romanization: 'aroi', english: 'delicious', requiredConsonants: ['or_ang', 'ror_ruea', 'yor_yak'], requiredVowels: ['sara_aw'] },

  // 131-137: colors
  { id: 'w_daeng', thai: 'แดง', romanization: 'daeng', english: 'red', requiredConsonants: ['dor_dek', 'ngor_nguu'], requiredVowels: ['sara_ae'] },
  { id: 'w_khiao', thai: 'เขียว', romanization: 'khiao', english: 'green', requiredConsonants: ['khor_khai', 'yor_yak', 'wor_waen'], requiredVowels: ['sara_ee'] },
  { id: 'w_dam', thai: 'ดำ', romanization: 'dam', english: 'black', requiredConsonants: ['dor_dek'], requiredVowels: ['sara_am'] },
  { id: 'w_luang', thai: 'เหลือง', romanization: 'lueang', english: 'yellow', requiredConsonants: ['hor_hip', 'lor_ling', 'or_ang', 'ngor_nguu'], requiredVowels: ['sara_ee'] },
  { id: 'w_faa_blue', thai: 'ฟ้า', romanization: 'faa', english: 'sky blue', requiredConsonants: ['for_fan'], requiredVowels: ['sara_aa'] },
  { id: 'w_chompuu', thai: 'ชมพู', romanization: 'chompuu', english: 'pink', requiredConsonants: ['chor_chaang', 'mor_maa', 'phor_phaan'], requiredVowels: ['sara_uu'] },
  { id: 'w_suung', thai: 'สูง', romanization: 'suung', english: 'tall', requiredConsonants: ['sor_suea', 'ngor_nguu'], requiredVowels: ['sara_uu'] },

  // 138-143: numbers
  { id: 'w_nung', thai: 'หนึ่ง', romanization: 'nueng', english: 'one', requiredConsonants: ['hor_hip', 'nor_nuu', 'ngor_nguu'], requiredVowels: ['sara_uu'] },
  { id: 'w_saam', thai: 'สาม', romanization: 'saam', english: 'three', requiredConsonants: ['sor_suea', 'mor_maa'], requiredVowels: ['sara_aa'] },
  { id: 'w_jed', thai: 'เจ็ด', romanization: 'jet', english: 'seven', requiredConsonants: ['jor_jaan', 'dor_dek'], requiredVowels: ['sara_ee', 'mai_taikhu'] },
  { id: 'w_paet', thai: 'แปด', romanization: 'bpaet', english: 'eight', requiredConsonants: ['por_plaa', 'dor_dek'], requiredVowels: ['sara_ae'] },
  { id: 'w_kao', thai: 'เก้า', romanization: 'kao', english: 'nine', requiredConsonants: ['kor_kai', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_roi', thai: 'ร้อย', romanization: 'rawy', english: 'hundred', requiredConsonants: ['ror_ruea', 'or_ang', 'yor_yak'], requiredVowels: ['sara_aw'] },

  // 144-148: body parts
  { id: 'w_paak', thai: 'ปาก', romanization: 'bpaak', english: 'mouth', requiredConsonants: ['por_plaa', 'kor_kai'], requiredVowels: ['sara_aa'] },
  { id: 'w_muu_hand', thai: 'มือ', romanization: 'muue', english: 'hand', requiredConsonants: ['mor_maa', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_thaao', thai: 'เท้า', romanization: 'thaao', english: 'foot', requiredConsonants: ['thor_thong', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_jai', thai: 'ใจ', romanization: 'jai', english: 'heart/mind', requiredConsonants: ['jor_jaan'], requiredVowels: ['sara_ai_maimuan'] },
  { id: 'w_pom', thai: 'ผม', romanization: 'phom', english: 'hair/I (male)', requiredConsonants: ['phor_phueng', 'mor_maa'], requiredVowels: [] },

  // 149-153: family
  { id: 'w_nawng', thai: 'น้อง', romanization: 'nawng', english: 'younger sibling', requiredConsonants: ['nor_nuu', 'or_ang', 'ngor_nguu'], requiredVowels: ['sara_aw'] },
  { id: 'w_phuan', thai: 'เพื่อน', romanization: 'phuean', english: 'friend', requiredConsonants: ['phor_phaan', 'or_ang', 'nor_nuu'], requiredVowels: ['sara_ee'] },
  { id: 'w_phan', thai: 'พัน', romanization: 'phan', english: 'thousand', requiredConsonants: ['phor_phaan', 'nor_nuu'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_phop', thai: 'พบ', romanization: 'phop', english: 'to meet', requiredConsonants: ['phor_phaan', 'bor_baimai'], requiredVowels: [] },
  { id: 'w_phaeng', thai: 'แพง', romanization: 'phaeng', english: 'expensive', requiredConsonants: ['phor_phaan', 'ngor_nguu'], requiredVowels: ['sara_ae'] },

  // 154-160: common objects
  { id: 'w_thanon', thai: 'ถนน', romanization: 'thanon', english: 'road', requiredConsonants: ['thor_thung', 'nor_nuu'], requiredVowels: [] },
  { id: 'w_rong_rian', thai: 'โรงเรียน', romanization: 'rong rian', english: 'school', requiredConsonants: ['ror_ruea', 'ngor_nguu', 'yor_yak', 'nor_nuu'], requiredVowels: ['sara_oo', 'sara_ee'] },
  { id: 'w_nangsuue', thai: 'หนังสือ', romanization: 'nangsuue', english: 'book', requiredConsonants: ['hor_hip', 'nor_nuu', 'ngor_nguu', 'sor_suea', 'or_ang'], requiredVowels: ['mai_han_akat', 'sara_ee'] },
  { id: 'w_kao_ii', thai: 'เก้าอี้', romanization: 'kao ii', english: 'chair', requiredConsonants: ['kor_kai', 'or_ang'], requiredVowels: ['sara_ee', 'sara_ii'] },
  { id: 'w_pratuu', thai: 'ประตู', romanization: 'bpratuu', english: 'door', requiredConsonants: ['por_plaa', 'ror_ruea', 'dtor_dtao'], requiredVowels: ['sara_uu'] },
  { id: 'w_nalikaa', thai: 'นาฬิกา', romanization: 'naalikaa', english: 'clock', requiredConsonants: ['nor_nuu', 'lor_chulaa', 'kor_kai'], requiredVowels: ['sara_aa', 'sara_i'] },
  { id: 'w_talaat', thai: 'ตลาด', romanization: 'dtalaat', english: 'market', requiredConsonants: ['dtor_dtao', 'lor_ling', 'dor_dek'], requiredVowels: ['sara_aa'] },

  // 161-169: actions/verbs
  { id: 'w_duem', thai: 'ดื่ม', romanization: 'duuem', english: 'to drink', requiredConsonants: ['dor_dek', 'mor_maa'], requiredVowels: ['sara_uu'] },
  { id: 'w_awk', thai: 'ออก', romanization: 'awk', english: 'to go out', requiredConsonants: ['or_ang', 'kor_kai'], requiredVowels: ['sara_aw'] },
  { id: 'w_suue', thai: 'ซื้อ', romanization: 'suue', english: 'to buy', requiredConsonants: ['sor_choe', 'or_ang'], requiredVowels: ['sara_uu'] },
  { id: 'w_hen', thai: 'เห็น', romanization: 'hen', english: 'to see', requiredConsonants: ['hor_hip', 'nor_nuu'], requiredVowels: ['sara_ee', 'mai_taikhu'] },
  { id: 'w_khian', thai: 'เขียน', romanization: 'khian', english: 'to write', requiredConsonants: ['khor_khai', 'yor_yak', 'nor_nuu'], requiredVowels: ['sara_ee'] },
  { id: 'w_aan', thai: 'อ่าน', romanization: 'aan', english: 'to read', requiredConsonants: ['or_ang', 'nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_thaam', thai: 'ถาม', romanization: 'thaam', english: 'to ask', requiredConsonants: ['thor_thung', 'mor_maa'], requiredVowels: ['sara_aa'] },
  { id: 'w_chawp', thai: 'ชอบ', romanization: 'chawp', english: 'to like', requiredConsonants: ['chor_chaang', 'or_ang', 'bor_baimai'], requiredVowels: ['sara_aw'] },
  { id: 'w_hai', thai: 'ให้', romanization: 'hai', english: 'to give', requiredConsonants: ['hor_hip'], requiredVowels: ['sara_ai_maimuan'] },

  // 170-175: pronouns
  { id: 'w_chan', thai: 'ฉัน', romanization: 'chan', english: 'I (female)', requiredConsonants: ['chor_ching', 'nor_nuu'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_khun', thai: 'คุณ', romanization: 'khun', english: 'you', requiredConsonants: ['khor_khwaai', 'nor_nen'], requiredVowels: ['sara_u'] },
  { id: 'w_khao_he', thai: 'เขา', romanization: 'khao', english: 'he/she/they', requiredConsonants: ['khor_khai', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_rao', thai: 'เรา', romanization: 'rao', english: 'we', requiredConsonants: ['ror_ruea', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_khrap', thai: 'ครับ', romanization: 'khrap', english: 'polite particle (male)', requiredConsonants: ['khor_khwaai', 'ror_ruea', 'bor_baimai'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_kha', thai: 'ค่ะ', romanization: 'kha', english: 'polite particle (female)', requiredConsonants: ['khor_khwaai'], requiredVowels: [] },

  // 176-182: question words
  { id: 'w_arai', thai: 'อะไร', romanization: 'arai', english: 'what', requiredConsonants: ['or_ang', 'ror_ruea'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_thii_nai', thai: 'ที่ไหน', romanization: 'thii nai', english: 'where', requiredConsonants: ['thor_thong', 'hor_hip', 'nor_nuu'], requiredVowels: ['sara_ii', 'sara_ai_maimalai'] },
  { id: 'w_tham_mai', thai: 'ทำไม', romanization: 'thammai', english: 'why', requiredConsonants: ['thor_thong', 'mor_maa'], requiredVowels: ['sara_am', 'sara_ai_maimalai'] },
  { id: 'w_mua_rai', thai: 'เมื่อไร', romanization: 'muearai', english: 'when', requiredConsonants: ['mor_maa', 'or_ang', 'ror_ruea'], requiredVowels: ['sara_ee', 'sara_ai_maimalai'] },
  { id: 'w_yang_ngai', thai: 'ยังไง', romanization: 'yang ngai', english: 'how', requiredConsonants: ['yor_yak', 'ngor_nguu'], requiredVowels: ['mai_han_akat', 'sara_ai_maimalai'] },
  { id: 'w_kii', thai: 'กี่', romanization: 'kii', english: 'how many', requiredConsonants: ['kor_kai'], requiredVowels: ['sara_ii'] },
  { id: 'w_thao_rai', thai: 'เท่าไร', romanization: 'thao rai', english: 'how much', requiredConsonants: ['thor_thong', 'or_ang', 'ror_ruea'], requiredVowels: ['sara_ee', 'sara_ai_maimalai'] },

  // 183-187: direction words
  { id: 'w_saai', thai: 'ซ้าย', romanization: 'saai', english: 'left', requiredConsonants: ['sor_choe', 'yor_yak'], requiredVowels: ['sara_aa'] },
  { id: 'w_trong', thai: 'ตรง', romanization: 'dtrong', english: 'straight', requiredConsonants: ['dtor_dtao', 'ror_ruea', 'ngor_nguu'], requiredVowels: [] },
  { id: 'w_naa_front', thai: 'หน้า', romanization: 'naa', english: 'front/face', requiredConsonants: ['hor_hip', 'nor_nuu'], requiredVowels: ['sara_aa'] },
  { id: 'w_nawk', thai: 'นอก', romanization: 'nawk', english: 'outside', requiredConsonants: ['nor_nuu', 'or_ang', 'kor_kai'], requiredVowels: ['sara_aw'] },
  { id: 'w_klai', thai: 'ไกล', romanization: 'klai', english: 'far', requiredConsonants: ['kor_kai', 'lor_ling'], requiredVowels: ['sara_ai_maimalai'] },

  // 188-194: tense/grammar words
  { id: 'w_laeo', thai: 'แล้ว', romanization: 'laeo', english: 'already', requiredConsonants: ['lor_ling', 'wor_waen'], requiredVowels: ['sara_ae'] },
  { id: 'w_kamlang', thai: 'กำลัง', romanization: 'kamlang', english: 'currently', requiredConsonants: ['kor_kai', 'lor_ling', 'ngor_nguu'], requiredVowels: ['sara_am', 'mai_han_akat'] },
  { id: 'w_mai_question', thai: 'ไหม', romanization: 'mai', english: 'question particle', requiredConsonants: ['hor_hip', 'mor_maa'], requiredVowels: ['sara_ai_maimalai'] },
  { id: 'w_rue', thai: 'หรือ', romanization: 'ruue', english: 'or (question)', requiredConsonants: ['hor_hip', 'ror_ruea', 'or_ang'], requiredVowels: ['sara_ee'] },
  { id: 'w_kwaa', thai: 'กว่า', romanization: 'kwaa', english: 'more than', requiredConsonants: ['kor_kai', 'wor_waen'], requiredVowels: ['sara_aa'] },
  { id: 'w_tae', thai: 'แต่', romanization: 'dtae', english: 'but', requiredConsonants: ['dtor_dtao'], requiredVowels: ['sara_ae'] },
  { id: 'w_phraw', thai: 'เพราะ', romanization: 'phraw', english: 'because', requiredConsonants: ['phor_phaan', 'ror_ruea', 'or_ang'], requiredVowels: ['sara_ee'] },

  // 195-201: classifiers and final useful words
  { id: 'w_tua', thai: 'ตัว', romanization: 'dtua', english: 'classifier (animal)', requiredConsonants: ['dtor_dtao', 'wor_waen'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_an', thai: 'อัน', romanization: 'an', english: 'classifier (general)', requiredConsonants: ['or_ang', 'nor_nuu'], requiredVowels: ['mai_han_akat'] },
  { id: 'w_khon_clf', thai: 'คน', romanization: 'khon', english: 'classifier (person)', requiredConsonants: ['khor_khwaai', 'nor_nuu'], requiredVowels: [] },
  { id: 'w_pen', thai: 'เป็น', romanization: 'bpen', english: 'to be', requiredConsonants: ['por_plaa', 'nor_nuu'], requiredVowels: ['sara_ee', 'mai_taikhu'] },
  { id: 'w_dtawng', thai: 'ต้อง', romanization: 'dtawng', english: 'must', requiredConsonants: ['dtor_dtao', 'or_ang', 'ngor_nguu'], requiredVowels: ['sara_aw'] },
  { id: 'w_thuuk', thai: 'ถูก', romanization: 'thuuk', english: 'cheap/correct', requiredConsonants: ['thor_thung', 'kor_kai'], requiredVowels: ['sara_uu'] },
  { id: 'w_klai_near', thai: 'ใกล้', romanization: 'klai', english: 'near', requiredConsonants: ['kor_kai', 'lor_ling'], requiredVowels: ['sara_ai_maimuan'] },
]
