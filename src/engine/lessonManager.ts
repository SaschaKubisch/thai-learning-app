import type { AppState, SRSRecord } from './types'
import type { Lesson, ContentItem, ItemType, Consonant, Vowel, ToneMark, Word, GrammarPattern, Phrase } from '../content/types'
import type { RichLesson } from '../content/lessonTypes'
import { addItems } from './srsScheduler'

// Lazy imports to avoid circular dependencies -- will be set after content is loaded
let allLessons: Lesson[] = []
let allRichLessons: RichLesson[] = []
let contentMap: Map<string, { item: ContentItem; itemType: ItemType }> = new Map()

export function initLessonManager(
  lessons: Lesson[],
  items: Map<string, { item: ContentItem; itemType: ItemType }>,
  richLessons?: RichLesson[],
): void {
  allLessons = lessons
  contentMap = items
  if (richLessons) {
    allRichLessons = richLessons
  }
}

// === Rich Lesson Support ===

export function switchRichLessons(newLessons: RichLesson[]): void {
  allRichLessons = newLessons
}

export function getRichLessons(): RichLesson[] {
  return allRichLessons
}

export function getRichLesson(lessonId: string): RichLesson | null {
  return allRichLessons.find((l) => l.id === lessonId) ?? null
}

export function getTotalRichLessons(): number {
  return allRichLessons.length
}

export function getCurrentRichLesson(state: AppState): RichLesson | null {
  if (state.currentLesson >= allRichLessons.length) return null
  return allRichLessons[state.currentLesson]
}

export function getCurrentRichPhase(state: AppState): string {
  const lesson = getCurrentRichLesson(state)
  if (!lesson) return 'complete'
  return lesson.phase
}

export function completeRichLesson(
  state: AppState,
  lessonId: string,
  score: number,
  now: Date = new Date(),
): AppState {
  if (score < 80) return state

  const lessonIndex = allRichLessons.findIndex((l) => l.id === lessonId)
  if (lessonIndex === -1) return state

  const lesson = allRichLessons[lessonIndex]

  // Add SRS items from the lesson
  const srsItems = lesson.srsItemIds.map((id) => {
    const entry = contentMap.get(id)
    const type: SRSRecord['itemType'] = entry?.itemType ?? 'consonant'
    return { id, type }
  }).filter((item) => contentMap.has(item.id))

  let newState = addItems(state, srsItems, now)

  // Update lesson result
  const existingResult = newState.lessonResults[lessonId]
  const bestScore = existingResult ? Math.max(existingResult.bestScore, score) : score

  const isStreetThai = lessonId.startsWith('S')

  newState = {
    ...newState,
    currentLesson: isStreetThai ? newState.currentLesson : Math.max(newState.currentLesson, lessonIndex + 1),
    lastSessionDate: now.toISOString(),
    lessonResults: {
      ...newState.lessonResults,
      [lessonId]: {
        lessonId,
        completed: true,
        bestScore,
        completedDate: now.toISOString(),
      },
    },
  }

  return newState
}

export function getTotalLessons(): number {
  return allLessons.length
}

export function getCurrentLesson(state: AppState): Lesson | null {
  if (state.currentLesson >= allLessons.length) return null
  return allLessons[state.currentLesson]
}

export function getLessonData(lessonId: string): {
  lesson: Lesson
  items: Array<{ item: ContentItem; itemType: ItemType }>
} | null {
  const lesson = allLessons.find((l) => l.id === lessonId)
  if (!lesson) return null

  const items = lesson.itemIds
    .map((id) => contentMap.get(id))
    .filter((entry): entry is { item: ContentItem; itemType: ItemType } => entry !== undefined)

  return { lesson, items }
}

export function getLearnedPool(state: AppState): ContentItem[] {
  const learnedIds = new Set(Object.keys(state.srsRecords))
  const pool: ContentItem[] = []
  for (const [id, entry] of contentMap) {
    if (learnedIds.has(id)) {
      pool.push(entry.item)
    }
  }
  return pool
}

export function getLearnedItemsOfType(state: AppState, itemType: ItemType): ContentItem[] {
  const learnedIds = new Set(Object.keys(state.srsRecords))
  const pool: ContentItem[] = []
  for (const [id, entry] of contentMap) {
    if (learnedIds.has(id) && entry.itemType === itemType) {
      pool.push(entry.item)
    }
  }
  return pool
}

export function getQuizItems(
  lessonId: string,
  _state: AppState,
): Array<{ item: ContentItem; itemType: ItemType }> {
  const lessonData = getLessonData(lessonId)
  if (!lessonData) return []

  const newItems = lessonData.items

  // Get 2-4 recent items from prior lessons
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId)
  const recentItems: Array<{ item: ContentItem; itemType: ItemType }> = []

  for (let i = currentIndex - 1; i >= Math.max(0, currentIndex - 2); i--) {
    const priorLesson = allLessons[i]
    for (const itemId of priorLesson.itemIds) {
      const entry = contentMap.get(itemId)
      if (entry) recentItems.push(entry)
    }
  }

  // Take up to 4 recent items
  const selectedRecent = recentItems.slice(0, 4)

  return [...newItems, ...selectedRecent]
}

export function completeLesson(
  state: AppState,
  lessonId: string,
  score: number,
  now: Date = new Date(),
): AppState {
  if (score < 80) return state

  const lessonIndex = allLessons.findIndex((l) => l.id === lessonId)
  if (lessonIndex === -1) return state

  const lesson = allLessons[lessonIndex]

  // Add items to SRS
  const srsItems = lesson.itemIds.map((id) => {
    const entry = contentMap.get(id)
    const type: SRSRecord['itemType'] = entry?.itemType ?? 'consonant'
    return { id, type }
  })

  let newState = addItems(state, srsItems, now)

  // Update lesson result
  const existingResult = newState.lessonResults[lessonId]
  const bestScore = existingResult ? Math.max(existingResult.bestScore, score) : score

  newState = {
    ...newState,
    currentLesson: Math.max(newState.currentLesson, lessonIndex + 1),
    lastSessionDate: now.toISOString(),
    lessonResults: {
      ...newState.lessonResults,
      [lessonId]: {
        lessonId,
        completed: true,
        bestScore,
        completedDate: now.toISOString(),
      },
    },
  }

  return newState
}

export function getCurrentPhase(state: AppState): string {
  const lesson = getCurrentLesson(state)
  if (!lesson) return 'complete'
  return lesson.phase
}

// Build the content map from all content sources
export function buildContentMap(
  allConsonants: Consonant[],
  allVowels: Vowel[],
  allWords: Word[],
  allGrammar: GrammarPattern[],
  allPhrases: Phrase[],
  allToneMarks: ToneMark[],
): Map<string, { item: ContentItem; itemType: ItemType }> {
  const map = new Map<string, { item: ContentItem; itemType: ItemType }>()

  for (const c of allConsonants) map.set(c.id, { item: c, itemType: 'consonant' })
  for (const v of allVowels) map.set(v.id, { item: v, itemType: 'vowel' })
  for (const w of allWords) map.set(w.id, { item: w, itemType: 'word' })
  for (const g of allGrammar) map.set(g.id, { item: g, itemType: 'grammar' })
  for (const p of allPhrases) map.set(p.id, { item: p, itemType: 'phrase' })
  for (const t of allToneMarks) map.set(t.id, { item: t, itemType: 'tonemark' })

  return map
}
