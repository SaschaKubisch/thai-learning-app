import { useState, useCallback } from 'react'
import type { FillInExercise } from '../../../content/lessonTypes'

interface Props {
  exercise: FillInExercise
  onComplete: (correct: boolean) => void
}

export function FillInView({ exercise, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSelect = useCallback(
    (option: string) => {
      if (showFeedback) return
      setSelected(option)
      setShowFeedback(true)

      const correct = option === exercise.answer
      const delay = correct ? 800 : 1200

      setTimeout(() => {
        onComplete(correct)
      }, delay)
    },
    [exercise.answer, onComplete, showFeedback]
  )

  // Replace ___ with a styled blank
  const parts = exercise.sentence.split('___')

  const getOptionClass = (option: string): string => {
    const base =
      'px-4 py-3 rounded-lg border-2 text-lg font-medium transition-colors'

    if (!showFeedback) {
      return `${base} border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 active:bg-stone-100 dark:active:bg-stone-700 text-stone-800 dark:text-stone-200`
    }

    if (option === exercise.answer) {
      return `${base} border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-200`
    }

    if (option === selected) {
      return `${base} border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-200`
    }

    return `${base} border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-400 dark:text-stone-600`
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-stone-500 dark:text-stone-400 text-sm text-center">
        Fill in the blank
      </p>

      <div className="text-2xl text-stone-900 dark:text-stone-50 text-center leading-relaxed">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="inline-block min-w-[3em] border-b-2 border-stone-400 dark:border-stone-500 mx-1">
                {showFeedback && selected ? (
                  <span
                    className={
                      selected === exercise.answer
                        ? 'text-green-700 dark:text-green-300'
                        : 'text-red-700 dark:text-red-300'
                    }
                  >
                    {selected}
                  </span>
                ) : (
                  '\u00A0'
                )}
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {exercise.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(option)}
            disabled={showFeedback}
            className={getOptionClass(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
