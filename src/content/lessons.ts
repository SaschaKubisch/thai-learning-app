import type { Lesson } from './types'
import { consonants } from './consonants'
import { vowels } from './vowels'
import { toneMarks } from './tonemarks'
import { words } from './words'
import { grammarPatterns } from './grammar'
import { phrases } from './phrases'

function chunkIds(items: Array<{ id: string }>, size: number): string[][] {
  const chunks: string[][] = []
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size).map((item) => item.id))
  }
  return chunks
}

let order = 0

// Phase 1: Consonants - groups of 3 (15 lessons)
const consonantLessons: Lesson[] = chunkIds(consonants, 3).map((ids, i) => ({
  id: `L${String(order + i + 1).padStart(3, '0')}`,
  order: order + i,
  phase: 'consonants',
  itemIds: ids,
  itemType: 'consonant',
}))
order += consonantLessons.length

// Phase 2: Vowels - groups of 3 (6 lessons)
const vowelLessons: Lesson[] = chunkIds(vowels, 3).map((ids, i) => ({
  id: `L${String(order + i + 1).padStart(3, '0')}`,
  order: order + i,
  phase: 'vowels',
  itemIds: ids,
  itemType: 'vowel',
}))
order += vowelLessons.length

// Phase 3: Tone marks - groups of 2 (2 lessons)
const toneMarkLessons: Lesson[] = chunkIds(toneMarks, 2).map((ids, i) => ({
  id: `L${String(order + i + 1).padStart(3, '0')}`,
  order: order + i,
  phase: 'tonemarks',
  itemIds: ids,
  itemType: 'tonemark',
}))
order += toneMarkLessons.length

// Phase 4: Vocabulary - groups of 3 (67 lessons)
const vocabularyLessons: Lesson[] = chunkIds(words, 3).map((ids, i) => ({
  id: `L${String(order + i + 1).padStart(3, '0')}`,
  order: order + i,
  phase: 'vocabulary',
  itemIds: ids,
  itemType: 'word',
}))
order += vocabularyLessons.length

// Phase 5: Grammar - groups of 3 (10 lessons)
const grammarLessons: Lesson[] = chunkIds(grammarPatterns, 3).map((ids, i) => ({
  id: `L${String(order + i + 1).padStart(3, '0')}`,
  order: order + i,
  phase: 'grammar',
  itemIds: ids,
  itemType: 'grammar',
}))
order += grammarLessons.length

// Phase 6: Conversation - groups of 3 (17 lessons)
const conversationLessons: Lesson[] = chunkIds(phrases, 3).map((ids, i) => ({
  id: `L${String(order + i + 1).padStart(3, '0')}`,
  order: order + i,
  phase: 'conversation',
  itemIds: ids,
  itemType: 'phrase',
}))

export const lessons: Lesson[] = [
  ...consonantLessons,
  ...vowelLessons,
  ...toneMarkLessons,
  ...vocabularyLessons,
  ...grammarLessons,
  ...conversationLessons,
]
