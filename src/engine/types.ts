export interface SRSRecord {
  itemId: string
  itemType: 'consonant' | 'vowel' | 'tonemark' | 'word' | 'grammar' | 'phrase'
  state: 'new' | 'learning' | 'review' | 'mastered'
  interval: number // days
  nextReviewDate: string // ISO 8601
  correctStreak: number
}

export interface LessonResult {
  lessonId: string
  completed: boolean
  bestScore: number // 0-100
  completedDate: string | null // ISO 8601
}

export interface AppState {
  version: 1 | 2
  currentLesson: number
  lastSessionDate: string // ISO 8601
  srsRecords: Record<string, SRSRecord>
  lessonResults: Record<string, LessonResult>
}

export type CardType =
  | 'recognition'
  | 'recall'
  | 'reading'
  | 'sentence_comprehension'
  | 'pattern_completion'
  | 'conversational'

export interface Card {
  type: CardType
  prompt: string
  promptThai: string | null // Thai text to display large (null for recall cards)
  options: CardOption[]
  correctIndex: number
  itemId: string
  audioText: string | null // Thai text to speak via TTS
}

export interface CardOption {
  text: string
  isThai: boolean // true if option text is Thai script
}
