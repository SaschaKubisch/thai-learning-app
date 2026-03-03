import { useState } from 'react'
import type { InfoCardStep } from '../../../content/lessonTypes'
import { AudioButton } from '../../AudioButton'

interface Props {
  step: InfoCardStep
  onContinue: () => void
}

export function InfoCardStepView({ step, onContinue }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const item = step.items[currentIndex]
  const isLast = currentIndex >= step.items.length - 1

  const handleNext = () => {
    if (isLast) {
      onContinue()
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-4 animate-[fadeIn_150ms_ease-in]" key={currentIndex}>
        <div className="flex items-center gap-3">
          <span className="text-6xl sm:text-8xl font-bold text-stone-900">
            {item.thai}
          </span>
          <AudioButton text={item.audioText || item.thai} size="lg" />
        </div>
        <span className="text-xl text-stone-600">{item.romanization}</span>
        <span className="text-lg text-stone-500">{item.english}</span>
        {item.detail && (
          <span className="text-sm text-stone-400">{item.detail}</span>
        )}
      </div>
      <button
        onClick={handleNext}
        className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
      >
        {isLast ? 'Continue' : 'Next'}
      </button>
      <p className="text-xs text-stone-400">
        {currentIndex + 1} of {step.items.length}
      </p>
    </div>
  )
}
