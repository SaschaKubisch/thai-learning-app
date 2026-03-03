import { useState } from 'react'
import type { ExampleStep } from '../../../content/lessonTypes'

interface Props {
  step: ExampleStep
  onContinue: () => void
}

export function ExampleStepView({ step, onContinue }: Props) {
  const [revealedCount, setRevealedCount] = useState(1)
  const allRevealed = revealedCount >= step.steps.length

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">{step.title}</h3>
      <div className="flex flex-col gap-3">
        {step.steps.slice(0, revealedCount).map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg p-4 animate-[fadeIn_200ms_ease-in]"
          >
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-1">
              {s.label}
            </p>
            <p className="text-stone-800 dark:text-stone-200 text-lg">{s.content}</p>
          </div>
        ))}
      </div>
      {!allRevealed ? (
        <button
          onClick={() => setRevealedCount((c) => c + 1)}
          className="w-full py-4 rounded-xl bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-200 font-semibold text-lg hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
        >
          Reveal next step
        </button>
      ) : (
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
        >
          Continue
        </button>
      )}
    </div>
  )
}
