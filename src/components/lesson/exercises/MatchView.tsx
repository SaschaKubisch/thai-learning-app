import { useState, useCallback } from 'react'
import type { MatchExercise } from '../../../content/lessonTypes'

interface Props {
  exercise: MatchExercise
  onComplete: (correct: boolean) => void
}

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function MatchView({ exercise, onComplete }: Props) {
  const [shuffledRight] = useState(() =>
    shuffle(exercise.pairs.map((p, i) => ({ text: p.right, pairIndex: i })))
  )
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [wrongPair, setWrongPair] = useState<{
    left: number
    right: number
  } | null>(null)
  const [mistakes, setMistakes] = useState(0)

  const handleLeftTap = useCallback(
    (index: number) => {
      if (matched.has(index) || wrongPair) return
      setSelectedLeft(index === selectedLeft ? null : index)
    },
    [matched, selectedLeft, wrongPair]
  )

  const handleRightTap = useCallback(
    (rightIndex: number) => {
      if (selectedLeft === null || wrongPair) return
      const rightItem = shuffledRight[rightIndex]
      if (matched.has(rightItem.pairIndex)) return

      if (rightItem.pairIndex === selectedLeft) {
        // Correct match
        const newMatched = new Set(matched)
        newMatched.add(selectedLeft)
        setMatched(newMatched)
        setSelectedLeft(null)

        if (newMatched.size === exercise.pairs.length) {
          setTimeout(() => {
            onComplete(mistakes === 0)
          }, 400)
        }
      } else {
        // Wrong match
        setMistakes((m) => m + 1)
        setWrongPair({ left: selectedLeft, right: rightIndex })
        setTimeout(() => {
          setWrongPair(null)
          setSelectedLeft(null)
        }, 800)
      }
    },
    [selectedLeft, shuffledRight, matched, exercise.pairs.length, onComplete, wrongPair, mistakes]
  )

  const getLeftClass = (index: number): string => {
    const base = 'px-4 py-3 rounded-lg border-2 text-lg font-medium transition-colors text-center'
    if (matched.has(index)) {
      return `${base} border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300`
    }
    if (wrongPair && wrongPair.left === index) {
      return `${base} border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300`
    }
    if (selectedLeft === index) {
      return `${base} border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100`
    }
    return `${base} border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800`
  }

  const getRightClass = (rightIndex: number): string => {
    const base = 'px-4 py-3 rounded-lg border-2 text-lg font-medium transition-colors text-center'
    const item = shuffledRight[rightIndex]
    if (matched.has(item.pairIndex)) {
      return `${base} border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300`
    }
    if (wrongPair && wrongPair.right === rightIndex) {
      return `${base} border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300`
    }
    return `${base} border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800`
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <p className="text-stone-500 dark:text-stone-400 text-sm text-center">
        Tap to match each pair
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {exercise.pairs.map((pair, i) => (
            <button
              key={i}
              onClick={() => handleLeftTap(i)}
              disabled={matched.has(i)}
              className={getLeftClass(i)}
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {shuffledRight.map((item, i) => (
            <button
              key={i}
              onClick={() => handleRightTap(i)}
              disabled={matched.has(item.pairIndex)}
              className={getRightClass(i)}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
