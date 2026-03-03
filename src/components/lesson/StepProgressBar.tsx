interface Props {
  currentStep: number
  totalSteps: number
  /** Whether we are in the assessment phase (shown differently) */
  inAssessment?: boolean
}

export function StepProgressBar({ currentStep, totalSteps, inAssessment }: Props) {
  return (
    <div className="flex gap-1 w-full">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
            i < currentStep
              ? 'bg-stone-700 dark:bg-stone-300'
              : i === currentStep
                ? inAssessment
                  ? 'bg-amber-400 dark:bg-amber-500'
                  : 'bg-stone-400 dark:bg-stone-500'
                : 'bg-stone-200 dark:bg-stone-700'
          }`}
        />
      ))}
    </div>
  )
}
