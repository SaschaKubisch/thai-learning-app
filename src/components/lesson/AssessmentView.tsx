import { useState, useCallback } from 'react'
import type { AssessmentQuestion } from '../../content/lessonTypes'
import { AudioButton } from '../AudioButton'

interface Props {
  questions: AssessmentQuestion[]
  onComplete: (score: number, total: number) => void
}

export function AssessmentView({ questions, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const question = questions[currentIndex]

  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback) return
      setSelectedIndex(index)
      setShowFeedback(true)

      const correct = index === question.correctIndex
      const newCorrect = correct ? correctCount + 1 : correctCount
      const delay = correct ? 800 : 1200

      setTimeout(() => {
        const nextIndex = currentIndex + 1
        if (nextIndex >= questions.length) {
          onComplete(newCorrect, questions.length)
        } else {
          setCorrectCount(newCorrect)
          setCurrentIndex(nextIndex)
          setSelectedIndex(null)
          setShowFeedback(false)
        }
      }, delay)
    },
    [showFeedback, question.correctIndex, correctCount, currentIndex, questions.length, onComplete]
  )

  const getOptionClass = (index: number): string => {
    const base =
      'w-full min-h-[56px] px-4 py-3 rounded-lg border-2 text-lg font-medium transition-colors text-left'

    if (!showFeedback) {
      return `${base} border-stone-200 bg-white hover:bg-stone-50 active:bg-stone-100 text-stone-800`
    }

    if (index === question.correctIndex) {
      return `${base} border-green-500 bg-green-50 text-green-900`
    }

    if (index === selectedIndex) {
      return `${base} border-red-500 bg-red-50 text-red-900`
    }

    return `${base} border-stone-200 bg-white text-stone-400`
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-xs text-stone-400 uppercase tracking-wide">
          Assessment
        </p>
        <p className="text-xs text-stone-400">
          {currentIndex + 1} of {questions.length}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 w-full">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < currentIndex
                ? 'bg-stone-700'
                : i === currentIndex
                  ? 'bg-amber-400'
                  : 'bg-stone-200'
            }`}
          />
        ))}
      </div>

      <p className="text-stone-500 text-sm text-center">{question.prompt}</p>

      {question.promptThai && (
        <div className="flex items-center gap-3">
          <span className="text-5xl sm:text-7xl font-bold text-stone-900">
            {question.promptThai}
          </span>
          {question.audioText && (
            <AudioButton text={question.audioText} size="lg" />
          )}
        </div>
      )}

      <div className="flex flex-col gap-3 w-full">
        {question.options.map((option, index) => (
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
