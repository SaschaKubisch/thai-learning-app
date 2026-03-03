import type { AppState, SRSRecord } from './types'

const INTERVAL_LADDER = [1, 3, 7, 14, 30]
const MASTERED_INTERVAL = 90

function addDays(date: Date, days: number): string {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result.toISOString()
}

export function getDueItems(state: AppState, now: Date = new Date()): SRSRecord[] {
  const nowStr = now.toISOString()
  return Object.values(state.srsRecords)
    .filter((r) => r.state !== 'new' && r.nextReviewDate <= nowStr)
    .sort((a, b) => a.nextReviewDate.localeCompare(b.nextReviewDate))
}

export function recordAnswer(
  state: AppState,
  itemId: string,
  correct: boolean,
  now: Date = new Date()
): AppState {
  const record = state.srsRecords[itemId]
  if (!record) return state

  let newRecord: SRSRecord

  if (correct) {
    if (record.state === 'learning') {
      newRecord = {
        ...record,
        state: 'review',
        interval: INTERVAL_LADDER[0],
        correctStreak: 1,
        nextReviewDate: addDays(now, INTERVAL_LADDER[0]),
      }
    } else if (record.state === 'review' || record.state === 'mastered') {
      const newStreak = record.correctStreak + 1
      if (newStreak >= INTERVAL_LADDER.length + 1) {
        newRecord = {
          ...record,
          state: 'mastered',
          interval: MASTERED_INTERVAL,
          correctStreak: newStreak,
          nextReviewDate: addDays(now, MASTERED_INTERVAL),
        }
      } else {
        const intervalIndex = Math.min(newStreak - 1, INTERVAL_LADDER.length - 1)
        newRecord = {
          ...record,
          state: 'review',
          interval: INTERVAL_LADDER[intervalIndex],
          correctStreak: newStreak,
          nextReviewDate: addDays(now, INTERVAL_LADDER[intervalIndex]),
        }
      }
    } else {
      newRecord = record
    }
  } else {
    // Incorrect: reset to learning
    newRecord = {
      ...record,
      state: 'learning',
      interval: 1,
      correctStreak: 0,
      nextReviewDate: addDays(now, 1),
    }
  }

  return {
    ...state,
    srsRecords: {
      ...state.srsRecords,
      [itemId]: newRecord,
    },
  }
}

export function addItems(
  state: AppState,
  items: Array<{ id: string; type: SRSRecord['itemType'] }>,
  now: Date = new Date()
): AppState {
  const newRecords = { ...state.srsRecords }
  for (const item of items) {
    if (!newRecords[item.id]) {
      newRecords[item.id] = {
        itemId: item.id,
        itemType: item.type,
        state: 'learning',
        interval: 1,
        correctStreak: 0,
        nextReviewDate: addDays(now, 1),
      }
    }
  }
  return {
    ...state,
    srsRecords: newRecords,
  }
}

export interface SRSStats {
  total: number
  learning: number
  review: number
  mastered: number
  due: number
}

export function getStats(state: AppState, now: Date = new Date()): SRSStats {
  const records = Object.values(state.srsRecords)
  const nowStr = now.toISOString()

  return {
    total: records.length,
    learning: records.filter((r) => r.state === 'learning').length,
    review: records.filter((r) => r.state === 'review').length,
    mastered: records.filter((r) => r.state === 'mastered').length,
    due: records.filter((r) => r.state !== 'new' && r.nextReviewDate <= nowStr).length,
  }
}
