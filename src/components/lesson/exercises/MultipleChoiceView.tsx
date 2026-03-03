import { useState, useCallback } from 'react'
import type { MultipleChoiceExercise } from '../../../content/lessonTypes'
import { AudioButton } from '../../AudioButton'

interface Props {
  exercise: MultipleChoiceExercise
  onComplete: (correct: boolean) => void
}

export function MultipleChoiceView({ exercise, onComplete }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback) return
      setSelectedIndex(index)
      setShowFeedback(true)

      const correct = index === exercise.correctIndex
      const delay = correct ? 800 : 1200

      setTimeout(() => {
        onComplete(correct)
      }, delay)
    },
    [exercise.correctIndex, onComplete, showFeedback]
  )

  const getOptionClass = (index: number): string => {
    const base =
      'w-full min-h-[56px] px-4 py-3 rounded-lg border-2 text-lg font-medium transition-colors text-left'

    if (!showFeedback) {
      return `${base} border-stone-200 bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-800`
    }

    if (index === exercise.correctIndex) {
      return `${base} border-green-500 bg-green-50 text-green-900`
    }

    if (index === selectedIndex) {
      return `${base} border-red-500 bg-red-50 text-red-900`
    }

    return `${base} border-stone-200 bg-white text-stone-400`
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-stone-500 text-sm text-center">{exercise.prompt}</p>

      {exercise.promptThai && (
        <div className="flex items-center gap-3">
          <span className="text-5xl sm:text-7xl font-bold text-stone-900">
            {exercise.promptThai}
          </span>
          {exercise.audioText && (
            <AudioButton text={exercise.audioText} size="lg" />
          )}
        </div>
      )}

      <div className="flex flex-col gap-3 w-full">
        {exercise.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={showFeedback}
            className={getOptionClass(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
