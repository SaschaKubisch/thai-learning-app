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
      <h3 className="text-xl font-semibold text-stone-900">{step.title}</h3>
      <div className="flex flex-col gap-3">
        {step.steps.slice(0, revealedCount).map((s, i) => (
          <div
            key={i}
            className="bg-white border border-stone-200 rounded-lg p-4 animate-[fadeIn_200ms_ease-in]"
          >
            <p className="text-sm font-medium text-stone-500 mb-1">
              {s.label}
            </p>
            <p className="text-stone-800 text-lg">{s.content}</p>
          </div>
        ))}
      </div>
      {!allRevealed ? (
        <button
          onClick={() => setRevealedCount((c) => c + 1)}
          className="w-full py-4 rounded-xl bg-white border-2 border-stone-200 text-stone-700 font-semibold text-lg hover:bg-stone-50 transition-colors"
        >
          Reveal next step
        </button>
      ) : (
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
        >
          Continue
        </button>
      )}
    </div>
  )
}
