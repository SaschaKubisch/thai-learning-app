import { useState } from 'react'
import type { TapToRevealExercise } from '../../../content/lessonTypes'
import { AudioButton } from '../../AudioButton'

interface Props {
  exercise: TapToRevealExercise
  onComplete: (correct: boolean) => void
}

export function TapToRevealView({ exercise, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const card = exercise.cards[currentIndex]
  const isLast = currentIndex >= exercise.cards.length - 1

  const handleTap = () => {
    if (!revealed) {
      setRevealed(true)
    } else if (isLast) {
      onComplete(true)
    } else {
      setCurrentIndex((i) => i + 1)
      setRevealed(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-stone-500 text-sm text-center">
        Tap to reveal the answer
      </p>

      <button
        onClick={handleTap}
        className="w-full min-h-[200px] rounded-xl border-2 border-stone-200 bg-white flex flex-col items-center justify-center gap-4 p-8 hover:bg-stone-50 transition-colors"
      >
        <span className="text-4xl sm:text-6xl font-bold text-stone-900">
          {card.front}
        </span>
        {revealed && (
          <div className="flex flex-col items-center gap-2 animate-[fadeIn_200ms_ease-in]">
            <div className="w-16 h-px bg-stone-200" />
            <span className="text-2xl text-stone-600">{card.back}</span>
          </div>
        )}
      </button>

      {card.audioText && (
        <AudioButton text={card.audioText} size="lg" />
      )}

      <div className="flex items-center gap-4">
        {!revealed ? (
          <p className="text-xs text-stone-400">Tap card to reveal</p>
        ) : (
          <button
            onClick={handleTap}
            className="px-6 py-3 rounded-xl bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-colors"
          >
            {isLast ? 'Done' : 'Next card'}
          </button>
        )}
      </div>

      <p className="text-xs text-stone-400">
        {currentIndex + 1} of {exercise.cards.length}
      </p>
    </div>
  )
}
