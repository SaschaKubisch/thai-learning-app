import type { AppState } from './types'

const STORAGE_KEY = 'thai-app-state'
const CURRENT_VERSION = 2

export function createDefaultState(): AppState {
  return {
    version: CURRENT_VERSION as AppState['version'],
    currentLesson: 0,
    lastSessionDate: new Date().toISOString(),
    srsRecords: {},
    lessonResults: {},
  }
}

function migrateV1toV2(oldState: Record<string, unknown>): AppState {
  // V1 had 117 lessons, V2 has 30 rich lessons.
  // Map old lesson progress: rough proportional mapping.
  const oldCurrentLesson = (oldState.currentLesson as number) || 0
  const oldTotal = 117
  const newTotal = 30
  const newCurrentLesson = Math.min(
    Math.floor((oldCurrentLesson / oldTotal) * newTotal),
    newTotal
  )

  return {
    version: CURRENT_VERSION as AppState['version'],
    currentLesson: newCurrentLesson,
    lastSessionDate: (oldState.lastSessionDate as string) || new Date().toISOString(),
    srsRecords: (oldState.srsRecords as AppState['srsRecords']) || {},
    lessonResults: {}, // Old lesson results don't map to new lesson IDs
  }
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createDefaultState()

    const parsed = JSON.parse(raw)
    if (!parsed.version) {
      return createDefaultState()
    }

    if (parsed.version === 1) {
      return migrateV1toV2(parsed)
    }

    if (parsed.version !== CURRENT_VERSION) {
      return createDefaultState()
    }

    return parsed as AppState
  } catch {
    return createDefaultState()
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // localStorage full or unavailable -- fail silently
  }
}

export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY)
}
