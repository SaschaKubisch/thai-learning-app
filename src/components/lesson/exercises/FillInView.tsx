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
      return `${base} border-stone-200 bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-800`
    }

    if (option === exercise.answer) {
      return `${base} border-green-500 bg-green-50 text-green-900`
    }

    if (option === selected) {
      return `${base} border-red-500 bg-red-50 text-red-900`
    }

    return `${base} border-stone-200 bg-white text-stone-400`
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-stone-500 text-sm text-center">
        Fill in the blank
      </p>

      <div className="text-2xl text-stone-900 text-center leading-relaxed">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="inline-block min-w-[3em] border-b-2 border-stone-400 mx-1">
                {showFeedback && selected ? (
                  <span
                    className={
                      selected === exercise.answer
                        ? 'text-green-700'
                        : 'text-red-700'
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
