// === Step Kinds ===

export interface TextStep {
  kind: 'text'
  content: string // supports **bold** and *italic*
}

export interface TableStep {
  kind: 'table'
  title?: string
  headers: string[]
  rows: string[][]
}

export interface RuleStep {
  kind: 'rule'
  rule: string
  examples: Array<{
    thai: string
    romanization: string
    english: string
  }>
}

export interface ExampleStep {
  kind: 'example'
  title: string
  steps: Array<{
    label: string
    content: string
  }>
}

export type PracticeExercise =
  | MultipleChoiceExercise
  | MatchExercise
  | TapToRevealExercise
  | FillInExercise

export interface MultipleChoiceExercise {
  type: 'multiple_choice'
  prompt: string
  promptThai?: string
  options: string[]
  correctIndex: number
  audioText?: string
}

export interface MatchExercise {
  type: 'match'
  pairs: Array<{ left: string; right: string }>
}

export interface TapToRevealExercise {
  type: 'tap_to_reveal'
  cards: Array<{
    front: string
    back: string
    audioText?: string
  }>
}

export interface FillInExercise {
  type: 'fill_in'
  sentence: string // use ___ for blank
  answer: string
  options: string[]
}

export interface PracticeStep {
  kind: 'practice'
  exercises: PracticeExercise[]
}

export interface DialogueLine {
  speaker: string
  thai: string
  romanization: string
  english: string
}

export interface DialogueStep {
  kind: 'dialogue'
  title: string
  lines: DialogueLine[]
}

export interface InfoCardItem {
  thai: string
  romanization: string
  english: string
  detail?: string
  audioText?: string
}

export interface InfoCardStep {
  kind: 'info_card'
  items: InfoCardItem[]
}

export type LessonStep =
  | TextStep
  | TableStep
  | RuleStep
  | ExampleStep
  | PracticeStep
  | DialogueStep
  | InfoCardStep

// === Assessment ===

export interface AssessmentQuestion {
  type: 'multiple_choice'
  prompt: string
  promptThai?: string
  options: string[]
  correctIndex: number
  audioText?: string
}

// === Rich Lesson ===

export type RichLessonPhase =
  | 'consonants'
  | 'vowels'
  | 'reading'
  | 'tones'
  | 'sentences'
  | 'dialogues'

export type Difficulty = 'beginner' | 'elementary' | 'intermediate'

export interface RichLesson {
  id: string
  title: string
  goal: string
  phase: RichLessonPhase
  order: number
  difficulty: Difficulty
  prerequisites: string[] // lesson IDs
  steps: LessonStep[]
  assessment: AssessmentQuestion[]
  srsItemIds: string[] // content item IDs to add to SRS on completion
}
