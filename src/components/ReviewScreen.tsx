import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { getDueItems, recordAnswer } from '../engine/srsScheduler'
import { generateDrillCard } from '../engine/cardGenerator'
import { getLearnedPool } from '../engine/lessonManager'
import { FlashCard } from './FlashCard'
import { ProgressBar } from './ProgressBar'
import type { Card, SRSRecord } from '../engine/types'
import type { ItemType } from '../content/types'

export function ReviewScreen() {
  const { state, updateState } = useProgress()
  const navigate = useNavigate()

  const [dueRecords, setDueRecords] = useState<SRSRecord[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCard, setCurrentCard] = useState<Card | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [initialized, setInitialized] = useState(false)

  // Load due items on mount
  useEffect(() => {
    if (initialized) return
    const due = getDueItems(state)
    setDueRecords(due)
    if (due.length === 0) {
      setIsComplete(true)
    }
    setInitialized(true)
  }, [state, initialized])

  // Generate card for current review item
  useEffect(() => {
    if (isComplete || dueRecords.length === 0 || currentIndex >= dueRecords.length) return

    const record = dueRecords[currentIndex]
    const pool = getLearnedPool(state)

    // Find the actual content item from the pool
    const itemType = record.itemType as ItemType
    const item = pool.find((i) => (i as { id: string }).id === record.itemId)

    if (item) {
      const phase = getPhaseFromItemType(itemType)
      const card = generateDrillCard(item, itemType, phase, pool)
      setCurrentCard(card)
    } else {
      // Item not found in pool -- skip
      handleNext(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, dueRecords, isComplete])

  const handleNext = (correct: boolean) => {
    // Update SRS
    const record = dueRecords[currentIndex]
    if (record) {
      const newState = recordAnswer(state, record.itemId, correct)
      updateState(newState)
    }

    if (correct) {
      setCorrectCount((prev) => prev + 1)
    }

    const nextIndex = currentIndex + 1
    if (nextIndex >= dueRecords.length) {
      setIsComplete(true)
    } else {
      setCurrentIndex(nextIndex)
    }
  }

  const handleAnswer = (correct: boolean) => {
    setTimeout(() => handleNext(correct), 100)
  }

  if (!initialized) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-500">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-stone-400 hover:text-stone-600 text-sm"
        >
          Exit
        </button>
        <span className="text-sm text-stone-400 uppercase tracking-wide">
          Review
        </span>
        <div className="w-8" />
      </div>

      {/* Progress */}
      {!isComplete && dueRecords.length > 0 && (
        <div className="px-6 pb-2">
          <ProgressBar current={currentIndex} total={dueRecords.length} />
          <p className="text-xs text-stone-400 mt-1 text-center">
            {currentIndex + 1} of {dueRecords.length}
          </p>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="max-w-xl w-full">
          {/* Review cards */}
          {!isComplete && currentCard && (
            <FlashCard card={currentCard} onAnswer={handleAnswer} />
          )}

          {/* Summary */}
          {isComplete && (
            <div className="flex flex-col items-center gap-6">
              <div className="text-4xl font-bold text-stone-900">
                Review Complete
              </div>
              {dueRecords.length > 0 ? (
                <>
                  <p className="text-stone-500 text-lg">
                    {correctCount} of {dueRecords.length} correct (
                    {Math.round((correctCount / dueRecords.length) * 100)}%)
                  </p>
                  <p className="text-stone-400 text-sm">
                    Check back tomorrow for more reviews.
                  </p>
                </>
              ) : (
                <p className="text-stone-500 text-lg">
                  No reviews due right now.
                </p>
              )}
              <button
                onClick={() => navigate('/')}
                className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function getPhaseFromItemType(itemType: ItemType): string {
  switch (itemType) {
    case 'consonant':
      return 'consonants'
    case 'vowel':
      return 'vowels'
    case 'tonemark':
      return 'tonemarks'
    case 'word':
      return 'vocabulary'
    case 'grammar':
      return 'grammar'
    case 'phrase':
      return 'conversation'
  }
}
