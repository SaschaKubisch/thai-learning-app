interface Props {
  score: number
  total: number
  passed: boolean
  onContinue: () => void
  onRetry: () => void
}

export function LessonResultView({
  score,
  total,
  passed,
  onContinue,
  onRetry,
}: Props) {
  const percentage = Math.round((score / total) * 100)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-6xl font-bold text-stone-900 dark:text-stone-50">{percentage}%</div>
      <p className="text-stone-500 dark:text-stone-400 text-lg">
        {passed ? 'Lesson complete!' : 'You need 80% to pass. Try again.'}
      </p>
      <p className="text-stone-400 dark:text-stone-500 text-sm">
        {score} of {total} correct
      </p>
      {passed ? (
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
        >
          Continue
        </button>
      ) : (
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
        >
          Retry Assessment
        </button>
      )}
    </div>
  )
}
