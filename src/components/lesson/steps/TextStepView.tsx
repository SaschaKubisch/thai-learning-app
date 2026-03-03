import type { TextStep } from '../../../content/lessonTypes'
import { renderMarkdown } from '../../../utils/simpleMarkdown'

interface Props {
  step: TextStep
  onContinue: () => void
}

export function TextStepView({ step, onContinue }: Props) {
  // Split on double newline for paragraphs
  const paragraphs = step.content.split('\n\n')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed">
            {renderMarkdown(p)}
          </p>
        ))}
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
