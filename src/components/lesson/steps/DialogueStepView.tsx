import type { DialogueStep } from '../../../content/lessonTypes'
import { AudioButton } from '../../AudioButton'

interface Props {
  step: DialogueStep
  onContinue: () => void
}

export function DialogueStepView({ step, onContinue }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">{step.title}</h3>
      <div className="flex flex-col gap-3">
        {step.lines.map((line, i) => {
          const isLeft = i % 2 === 0
          return (
            <div
              key={i}
              className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}
            >
              <span className="text-xs font-medium text-stone-400 dark:text-stone-500 mb-1 px-1">
                {line.speaker}
              </span>
              <div
                className={`max-w-[85%] rounded-2xl p-4 ${
                  isLeft
                    ? 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-tl-sm'
                    : 'bg-stone-100 dark:bg-stone-800 rounded-tr-sm'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-stone-900 dark:text-stone-50">
                    {line.thai}
                  </span>
                  <AudioButton text={line.thai} size="sm" />
                </div>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
                  {line.romanization}
                </p>
                <p className="text-stone-600 dark:text-stone-300 text-sm mt-1">{line.english}</p>
              </div>
            </div>
          )
        })}
      </div>
      <button
        onClick={onContinue}
        className="w-full py-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
      >
        Continue
      </button>
    </div>
  )
}
