import type { Consonant } from './types'

// Ordered pedagogically: mid-class (9) -> high-class (11) -> low-class (24)
// This supports implicit tone learning: mid-class has the simplest tone rules
export const consonants: Consonant[] = [
  // === MID CLASS (9 consonants) ===
  { id: 'kor_kai', thai: 'ก', romanization: 'k', keywordThai: 'ไก่', keywordEnglish: 'chicken', consonantClass: 'mid' },
  { id: 'jor_jaan', thai: 'จ', romanization: 'j', keywordThai: 'จาน', keywordEnglish: 'plate', consonantClass: 'mid' },
  { id: 'dor_chada', thai: 'ฎ', romanization: 'd', keywordThai: 'ชฎา', keywordEnglish: 'headdress', consonantClass: 'mid' },
  { id: 'dtor_patak', thai: 'ฏ', romanization: 'dt', keywordThai: 'ปฏัก', keywordEnglish: 'goad', consonantClass: 'mid' },
  { id: 'dor_dek', thai: 'ด', romanization: 'd', keywordThai: 'เด็ก', keywordEnglish: 'child', consonantClass: 'mid' },
  { id: 'dtor_dtao', thai: 'ต', romanization: 'dt', keywordThai: 'เต่า', keywordEnglish: 'turtle', consonantClass: 'mid' },
  { id: 'bor_baimai', thai: 'บ', romanization: 'b', keywordThai: 'ใบไม้', keywordEnglish: 'leaf', consonantClass: 'mid' },
  { id: 'por_plaa', thai: 'ป', romanization: 'bp', keywordThai: 'ปลา', keywordEnglish: 'fish', consonantClass: 'mid' },
  { id: 'or_ang', thai: 'อ', romanization: 'aw', keywordThai: 'อ่าง', keywordEnglish: 'basin', consonantClass: 'mid' },

  // === HIGH CLASS (11 consonants) ===
  { id: 'khor_khai', thai: 'ข', romanization: 'kh', keywordThai: 'ไข่', keywordEnglish: 'egg', consonantClass: 'high' },
  { id: 'khor_khuat', thai: 'ฃ', romanization: 'kh', keywordThai: 'ขวด', keywordEnglish: 'bottle', consonantClass: 'high' },
  { id: 'chor_ching', thai: 'ฉ', romanization: 'ch', keywordThai: 'ฉิ่ง', keywordEnglish: 'cymbals', consonantClass: 'high' },
  { id: 'sor_so', thai: 'ซ', romanization: 's', keywordThai: 'โซ่', keywordEnglish: 'chain', consonantClass: 'high' },
  { id: 'thor_thaan', thai: 'ฐ', romanization: 'th', keywordThai: 'ฐาน', keywordEnglish: 'base', consonantClass: 'high' },
  { id: 'thor_thung', thai: 'ถ', romanization: 'th', keywordThai: 'ถุง', keywordEnglish: 'bag', consonantClass: 'high' },
  { id: 'phor_phueng', thai: 'ผ', romanization: 'ph', keywordThai: 'ผึ้ง', keywordEnglish: 'bee', consonantClass: 'high' },
  { id: 'for_faa', thai: 'ฝ', romanization: 'f', keywordThai: 'ฝา', keywordEnglish: 'lid', consonantClass: 'high' },
  { id: 'sor_sala', thai: 'ศ', romanization: 's', keywordThai: 'ศาลา', keywordEnglish: 'pavilion', consonantClass: 'high' },
  { id: 'sor_ruesi', thai: 'ษ', romanization: 's', keywordThai: 'ฤๅษี', keywordEnglish: 'hermit', consonantClass: 'high' },
  { id: 'sor_suea', thai: 'ส', romanization: 's', keywordThai: 'เสือ', keywordEnglish: 'tiger', consonantClass: 'high' },
  // Note: ห (hor hip) is high class but also acts as a "leading h" for low-class tone shifts.
  // We include it here in high class.
  // We have 11 high class listed, but traditional count says 11. ฃ is obsolete but included for completeness.

  // === LOW CLASS (24 consonants) ===
  { id: 'khor_khwaai', thai: 'ค', romanization: 'kh', keywordThai: 'ควาย', keywordEnglish: 'buffalo', consonantClass: 'low' },
  { id: 'khor_khon', thai: 'ฅ', romanization: 'kh', keywordThai: 'คน', keywordEnglish: 'person', consonantClass: 'low' },
  { id: 'khor_rakhang', thai: 'ฆ', romanization: 'kh', keywordThai: 'ระฆัง', keywordEnglish: 'bell', consonantClass: 'low' },
  { id: 'ngor_nguu', thai: 'ง', romanization: 'ng', keywordThai: 'งู', keywordEnglish: 'snake', consonantClass: 'low' },
  { id: 'chor_chaang', thai: 'ช', romanization: 'ch', keywordThai: 'ช้าง', keywordEnglish: 'elephant', consonantClass: 'low' },
  { id: 'sor_choe', thai: 'ซ', romanization: 's', keywordThai: 'โซ่', keywordEnglish: 'chain', consonantClass: 'low' },
  { id: 'chor_choe', thai: 'ฌ', romanization: 'ch', keywordThai: 'เฌอ', keywordEnglish: 'tree', consonantClass: 'low' },
  { id: 'yor_ying', thai: 'ญ', romanization: 'y', keywordThai: 'หญิง', keywordEnglish: 'woman', consonantClass: 'low' },
  { id: 'thor_montho', thai: 'ฑ', romanization: 'th', keywordThai: 'มณโฑ', keywordEnglish: 'Montho', consonantClass: 'low' },
  { id: 'thor_phuutao', thai: 'ฒ', romanization: 'th', keywordThai: 'ผู้เฒ่า', keywordEnglish: 'elder', consonantClass: 'low' },
  { id: 'nor_nen', thai: 'ณ', romanization: 'n', keywordThai: 'เณร', keywordEnglish: 'novice', consonantClass: 'low' },
  { id: 'thor_thong', thai: 'ท', romanization: 'th', keywordThai: 'ธง', keywordEnglish: 'flag', consonantClass: 'low' },
  { id: 'thor_thahaan', thai: 'ธ', romanization: 'th', keywordThai: 'ธง', keywordEnglish: 'flag', consonantClass: 'low' },
  { id: 'nor_nuu', thai: 'น', romanization: 'n', keywordThai: 'หนู', keywordEnglish: 'mouse', consonantClass: 'low' },
  { id: 'phor_phaan', thai: 'พ', romanization: 'ph', keywordThai: 'พาน', keywordEnglish: 'tray', consonantClass: 'low' },
  { id: 'for_fan', thai: 'ฟ', romanization: 'f', keywordThai: 'ฟัน', keywordEnglish: 'teeth', consonantClass: 'low' },
  { id: 'phor_samphao', thai: 'ภ', romanization: 'ph', keywordThai: 'สำเภา', keywordEnglish: 'sailboat', consonantClass: 'low' },
  { id: 'mor_maa', thai: 'ม', romanization: 'm', keywordThai: 'ม้า', keywordEnglish: 'horse', consonantClass: 'low' },
  { id: 'yor_yak', thai: 'ย', romanization: 'y', keywordThai: 'ยักษ์', keywordEnglish: 'giant', consonantClass: 'low' },
  { id: 'ror_ruea', thai: 'ร', romanization: 'r', keywordThai: 'เรือ', keywordEnglish: 'boat', consonantClass: 'low' },
  { id: 'lor_ling', thai: 'ล', romanization: 'l', keywordThai: 'ลิง', keywordEnglish: 'monkey', consonantClass: 'low' },
  { id: 'wor_waen', thai: 'ว', romanization: 'w', keywordThai: 'แหวน', keywordEnglish: 'ring', consonantClass: 'low' },
  { id: 'hor_hip', thai: 'ห', romanization: 'h', keywordThai: 'หีบ', keywordEnglish: 'chest', consonantClass: 'high' },
  { id: 'lor_chulaa', thai: 'ฬ', romanization: 'l', keywordThai: 'จุฬา', keywordEnglish: 'kite', consonantClass: 'low' },
  { id: 'hor_nokhuk', thai: 'ฮ', romanization: 'h', keywordThai: 'นกฮูก', keywordEnglish: 'owl', consonantClass: 'low' },
]
