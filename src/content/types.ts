export interface Consonant {
  id: string
  thai: string
  romanization: string
  keywordThai: string
  keywordEnglish: string
  consonantClass: 'mid' | 'high' | 'low'
}

export interface Vowel {
  id: string
  thai: string
  thaiExample: string
  romanization: string
  type: 'short' | 'long'
}

export interface ToneMark {
  id: string
  thai: string
  name: string
  effect: string
}

export interface Word {
  id: string
  thai: string
  romanization: string
  english: string
  requiredConsonants: string[]
  requiredVowels: string[]
}

export interface GrammarPattern {
  id: string
  patternName: string
  examplesThai: string[]
  examplesEnglish: string[]
  requiredWords: string[]
}

export interface Phrase {
  id: string
  thai: string
  english: string
  context: 'greetings' | 'food' | 'directions' | 'shopping' | 'polite' | 'questions'
  requiredWords: string[]
  requiredGrammar: string[]
}

export type LessonPhase = 'consonants' | 'vowels' | 'tonemarks' | 'vocabulary' | 'grammar' | 'conversation'
export type ItemType = 'consonant' | 'vowel' | 'tonemark' | 'word' | 'grammar' | 'phrase'

export interface Lesson {
  id: string
  order: number
  phase: LessonPhase
  itemIds: string[]
  itemType: ItemType
}

export type ContentItem = Consonant | Vowel | ToneMark | Word | GrammarPattern | Phrase
