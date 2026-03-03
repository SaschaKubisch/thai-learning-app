import type { RuleStep } from '../../../content/lessonTypes'
import { AudioButton } from '../../AudioButton'

interface Props {
  step: RuleStep
  onContinue: () => void
}

export function RuleStepView({ step, onContinue }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
        <p className="text-amber-900 dark:text-amber-200 text-lg font-semibold leading-relaxed">
          {step.rule}
        </p>
      </div>
      {step.examples.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
            Examples
          </p>
          {step.examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg p-4 flex items-start gap-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                    {ex.thai}
                  </span>
                  <AudioButton text={ex.thai} size="sm" />
                </div>
                <p className="text-stone-500 dark:text-stone-400 mt-1">{ex.romanization}</p>
                <p className="text-stone-600 dark:text-stone-300 text-sm mt-1">{ex.english}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={onContinue}
        className="w-full py-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
      >
        Continue
      </button>
    </div>
  )
}
