import type { Vowel } from './types'

// Ordered pedagogically: common long vowels first, then short vowels, then special forms.
// The dash (-) in the thai field indicates consonant placement position.
export const vowels: Vowel[] = [
  // === LONG VOWELS (8) ===
  { id: 'sara_aa', thai: '-า', thaiExample: 'กา', romanization: 'aa', type: 'long' },
  { id: 'sara_ii', thai: '-ี', thaiExample: 'กี', romanization: 'ii', type: 'long' },
  { id: 'sara_uu', thai: '-ู', thaiExample: 'กู', romanization: 'uu', type: 'long' },
  { id: 'sara_ee', thai: 'เ-', thaiExample: 'เก', romanization: 'ee', type: 'long' },
  { id: 'sara_ae', thai: 'แ-', thaiExample: 'แก', romanization: 'ae', type: 'long' },
  { id: 'sara_oo', thai: 'โ-', thaiExample: 'โก', romanization: 'oo', type: 'long' },
  { id: 'sara_aw', thai: '-อ', thaiExample: 'กอ', romanization: 'aw', type: 'long' },
  { id: 'sara_er', thai: 'เ-อ', thaiExample: 'เกอ', romanization: 'er', type: 'long' },

  // === SHORT VOWELS (5) ===
  { id: 'sara_i', thai: '-ิ', thaiExample: 'กิ', romanization: 'i', type: 'short' },
  { id: 'sara_u', thai: '-ุ', thaiExample: 'กุ', romanization: 'u', type: 'short' },
  { id: 'sara_e', thai: 'เ-ะ', thaiExample: 'เกะ', romanization: 'e', type: 'short' },
  { id: 'sara_ae_short', thai: 'แ-ะ', thaiExample: 'แกะ', romanization: 'ae', type: 'short' },
  { id: 'sara_o_short', thai: 'โ-ะ', thaiExample: 'โกะ', romanization: 'o', type: 'short' },

  // === SPECIAL FORMS (5) ===
  { id: 'mai_han_akat', thai: '-ั', thaiExample: 'กัน', romanization: 'a', type: 'short' },
  { id: 'sara_am', thai: '-ำ', thaiExample: 'กำ', romanization: 'am', type: 'short' },
  { id: 'sara_ai_maimalai', thai: 'ไ-', thaiExample: 'ไก', romanization: 'ai', type: 'long' },
  { id: 'sara_ai_maimuan', thai: 'ใ-', thaiExample: 'ใก', romanization: 'ai', type: 'long' },
  { id: 'mai_taikhu', thai: '-็', thaiExample: 'ก็', romanization: '', type: 'short' },
]
