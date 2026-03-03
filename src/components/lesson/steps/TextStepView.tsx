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
          <p key={i} className="text-stone-700 text-lg leading-relaxed">
            {renderMarkdown(p)}
          </p>
        ))}
      </div>
      <button
        onClick={onContinue}
        className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
      >
        Continue
      </button>
    </div>
  )
}
