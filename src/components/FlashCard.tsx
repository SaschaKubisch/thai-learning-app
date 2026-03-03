import { useState, useCallback } from 'react'
import type { Card } from '../engine/types'
import { AudioButton } from './AudioButton'

interface FlashCardProps {
  card: Card
  onAnswer: (correct: boolean) => void
}

export function FlashCard({ card, onAnswer }: FlashCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSelect = useCallback(
    (index: number) => {
      if (showFeedback) return // Prevent double-tap
      setSelectedIndex(index)
      setShowFeedback(true)

      const correct = index === card.correctIndex
      const delay = correct ? 800 : 1200

      setTimeout(() => {
        setSelectedIndex(null)
        setShowFeedback(false)
        onAnswer(correct)
      }, delay)
    },
    [card.correctIndex, onAnswer, showFeedback]
  )

  const getOptionClass = (index: number): string => {
    const base =
      'w-full min-h-[56px] px-4 py-3 rounded-lg border-2 text-lg font-medium transition-colors text-left'

    if (!showFeedback) {
      return `${base} border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 active:bg-stone-100 dark:active:bg-stone-700 text-stone-800 dark:text-stone-200`
    }

    if (index === card.correctIndex) {
      return `${base} border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/30 text-green-900 dark:text-green-200`
    }

    if (index === selectedIndex) {
      return `${base} border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/30 text-red-900 dark:text-red-200`
    }

    return `${base} border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-400 dark:text-stone-600`
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full animate-[fadeIn_150ms_ease-in]">
      {/* Prompt */}
      <p className="text-stone-500 dark:text-stone-400 text-sm text-center">{card.prompt}</p>

      {/* Thai text display */}
      {card.promptThai && (
        <div className="flex items-center gap-3">
          <span className="text-5xl sm:text-7xl font-bold text-stone-900 dark:text-stone-50">
            {card.promptThai}
          </span>
          {card.audioText && <AudioButton text={card.audioText} size="lg" />}
        </div>
      )}

      {/* If no Thai prompt (recall cards), show audio button separately */}
      {!card.promptThai && card.audioText && (
        <AudioButton text={card.audioText} size="lg" />
      )}

      {/* Answer options */}
      <div className="flex flex-col gap-3 w-full">
        {card.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={showFeedback}
            className={getOptionClass(index)}
          >
            <span className={option.isThai ? 'text-2xl' : ''}>
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
