import type { Card, CardOption, CardType } from './types'
import type { ContentItem, Consonant, Vowel, ToneMark, Word, GrammarPattern, Phrase, ItemType } from '../content/types'

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function pickRandom<T>(arr: T[], count: number): T[] {
  return shuffle(arr).slice(0, count)
}

function getDisplayText(item: ContentItem, itemType: ItemType): { thai: string; roman: string; english: string } {
  switch (itemType) {
    case 'consonant': {
      const c = item as Consonant
      return { thai: c.thai, roman: c.romanization, english: `${c.keywordEnglish} (${c.keywordThai})` }
    }
    case 'vowel': {
      const v = item as Vowel
      return { thai: v.thai, roman: v.romanization, english: v.romanization }
    }
    case 'tonemark': {
      const t = item as ToneMark
      return { thai: t.thai, roman: t.name, english: t.effect }
    }
    case 'word': {
      const w = item as Word
      return { thai: w.thai, roman: w.romanization, english: w.english }
    }
    case 'grammar': {
      const g = item as GrammarPattern
      return { thai: g.examplesThai[0] || '', roman: g.patternName, english: g.examplesEnglish[0] || '' }
    }
    case 'phrase': {
      const p = item as Phrase
      return { thai: p.thai, roman: '', english: p.english }
    }
  }
}

function getItemId(item: ContentItem, itemType: ItemType): string {
  switch (itemType) {
    case 'consonant': return (item as Consonant).id
    case 'vowel': return (item as Vowel).id
    case 'tonemark': return (item as ToneMark).id
    case 'word': return (item as Word).id
    case 'grammar': return (item as GrammarPattern).id
    case 'phrase': return (item as Phrase).id
  }
}

function selectDistractors(
  target: ContentItem,
  pool: ContentItem[],
  itemType: ItemType,
  count: number
): ContentItem[] {
  const targetId = getItemId(target, itemType)
  const candidates = pool.filter((item) => getItemId(item, itemType) !== targetId)

  if (candidates.length >= count) {
    return pickRandom(candidates, count)
  }

  // Not enough candidates -- return what we have
  return shuffle(candidates).slice(0, count)
}

function buildRecognitionCard(
  target: ContentItem,
  distractors: ContentItem[],
  itemType: ItemType
): Card {
  const targetDisplay = getDisplayText(target, itemType)
  const options: CardOption[] = [
    { text: itemType === 'word' ? targetDisplay.english : targetDisplay.roman, isThai: false },
    ...distractors.map((d) => {
      const display = getDisplayText(d, itemType)
      return { text: itemType === 'word' ? display.english : display.roman, isThai: false }
    }),
  ]

  const shuffled = shuffle(options.map((o, i) => ({ ...o, originalIndex: i })))
  const correctIndex = shuffled.findIndex((o) => o.originalIndex === 0)

  return {
    type: 'recognition',
    prompt: itemType === 'word' ? 'What does this word mean?' : 'What sound does this make?',
    promptThai: targetDisplay.thai,
    options: shuffled.map(({ text, isThai }) => ({ text, isThai })),
    correctIndex,
    itemId: getItemId(target, itemType),
    audioText: targetDisplay.thai,
  }
}

function buildRecallCard(
  target: ContentItem,
  distractors: ContentItem[],
  itemType: ItemType
): Card {
  const targetDisplay = getDisplayText(target, itemType)
  const options: CardOption[] = [
    { text: targetDisplay.thai, isThai: true },
    ...distractors.map((d) => {
      const display = getDisplayText(d, itemType)
      return { text: display.thai, isThai: true }
    }),
  ]

  const shuffled = shuffle(options.map((o, i) => ({ ...o, originalIndex: i })))
  const correctIndex = shuffled.findIndex((o) => o.originalIndex === 0)

  const prompt = itemType === 'word'
    ? `Which word means "${targetDisplay.english}"?`
    : `Which character makes the "${targetDisplay.roman}" sound?`

  return {
    type: 'recall',
    prompt,
    promptThai: null,
    options: shuffled.map(({ text, isThai }) => ({ text, isThai })),
    correctIndex,
    itemId: getItemId(target, itemType),
    audioText: targetDisplay.thai,
  }
}

function buildReadingCard(
  target: Word,
  distractors: Word[],
): Card {
  const options: CardOption[] = [
    { text: target.romanization, isThai: false },
    ...distractors.map((d) => ({ text: d.romanization, isThai: false })),
  ]

  const shuffled = shuffle(options.map((o, i) => ({ ...o, originalIndex: i })))
  const correctIndex = shuffled.findIndex((o) => o.originalIndex === 0)

  return {
    type: 'reading',
    prompt: 'How do you pronounce this word?',
    promptThai: target.thai,
    options: shuffled.map(({ text, isThai }) => ({ text, isThai })),
    correctIndex,
    itemId: target.id,
    audioText: target.thai,
  }
}

function buildSentenceComprehensionCard(
  target: GrammarPattern,
  distractors: GrammarPattern[],
): Card {
  const exampleIndex = Math.floor(Math.random() * target.examplesThai.length)
  const options: CardOption[] = [
    { text: target.examplesEnglish[exampleIndex], isThai: false },
    ...distractors.map((d) => {
      const dIdx = Math.floor(Math.random() * d.examplesEnglish.length)
      return { text: d.examplesEnglish[dIdx], isThai: false }
    }),
  ]

  const shuffled = shuffle(options.map((o, i) => ({ ...o, originalIndex: i })))
  const correctIndex = shuffled.findIndex((o) => o.originalIndex === 0)

  return {
    type: 'sentence_comprehension',
    prompt: 'What does this sentence mean?',
    promptThai: target.examplesThai[exampleIndex],
    options: shuffled.map(({ text, isThai }) => ({ text, isThai })),
    correctIndex,
    itemId: target.id,
    audioText: target.examplesThai[exampleIndex],
  }
}

function buildPatternCompletionCard(
  target: GrammarPattern,
  distractors: GrammarPattern[],
): Card {
  // Use the pattern name as the completion target
  const options: CardOption[] = [
    { text: target.patternName, isThai: false },
    ...distractors.map((d) => ({ text: d.patternName, isThai: false })),
  ]

  const shuffled = shuffle(options.map((o, i) => ({ ...o, originalIndex: i })))
  const correctIndex = shuffled.findIndex((o) => o.originalIndex === 0)

  return {
    type: 'pattern_completion',
    prompt: 'Which grammar pattern is used here?',
    promptThai: target.examplesThai[0],
    options: shuffled.map(({ text, isThai }) => ({ text, isThai })),
    correctIndex,
    itemId: target.id,
    audioText: target.examplesThai[0],
  }
}

function buildConversationalCard(
  target: Phrase,
  distractors: Phrase[],
): Card {
  const options: CardOption[] = [
    { text: target.english, isThai: false },
    ...distractors.map((d) => ({ text: d.english, isThai: false })),
  ]

  const shuffled = shuffle(options.map((o, i) => ({ ...o, originalIndex: i })))
  const correctIndex = shuffled.findIndex((o) => o.originalIndex === 0)

  return {
    type: 'conversational',
    prompt: 'What does this phrase mean?',
    promptThai: target.thai,
    options: shuffled.map(({ text, isThai }) => ({ text, isThai })),
    correctIndex,
    itemId: target.id,
    audioText: target.thai,
  }
}

export function generateCard(
  target: ContentItem,
  itemType: ItemType,
  cardType: CardType,
  pool: ContentItem[],
): Card {
  const distractors = selectDistractors(target, pool, itemType, 3)

  switch (cardType) {
    case 'recognition':
      return buildRecognitionCard(target, distractors, itemType)
    case 'recall':
      return buildRecallCard(target, distractors, itemType)
    case 'reading':
      return buildReadingCard(target as Word, distractors as Word[])
    case 'sentence_comprehension':
      return buildSentenceComprehensionCard(target as GrammarPattern, distractors as GrammarPattern[])
    case 'pattern_completion':
      return buildPatternCompletionCard(target as GrammarPattern, distractors as GrammarPattern[])
    case 'conversational':
      return buildConversationalCard(target as Phrase, distractors as Phrase[])
  }
}

export function selectCardType(_itemType: ItemType, phase: string): CardType {
  const rand = Math.random()
  switch (phase) {
    case 'consonants':
    case 'vowels':
    case 'tonemarks':
      return rand < 0.5 ? 'recognition' : 'recall'
    case 'vocabulary':
      if (rand < 0.33) return 'recognition'
      if (rand < 0.66) return 'recall'
      return 'reading'
    case 'grammar':
      return rand < 0.5 ? 'sentence_comprehension' : 'pattern_completion'
    case 'conversation':
      return 'conversational'
    default:
      return 'recognition'
  }
}

export function generateDrillCard(
  target: ContentItem,
  itemType: ItemType,
  phase: string,
  pool: ContentItem[],
): Card {
  const cardType = selectCardType(itemType, phase)
  return generateCard(target, itemType, cardType, pool)
}

export function generateQuiz(
  items: Array<{ item: ContentItem; itemType: ItemType }>,
  phase: string,
  pool: ContentItem[],
  count: number = 8,
): Card[] {
  const cards: Card[] = []
  for (let i = 0; i < count; i++) {
    const { item, itemType } = items[i % items.length]
    const cardType = selectCardType(itemType, phase)
    cards.push(generateCard(item, itemType, cardType, pool))
  }
  return shuffle(cards)
}
