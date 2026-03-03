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
      <div className="text-6xl font-bold text-stone-900">{percentage}%</div>
      <p className="text-stone-500 text-lg">
        {passed ? 'Lesson complete!' : 'You need 80% to pass. Try again.'}
      </p>
      <p className="text-stone-400 text-sm">
        {score} of {total} correct
      </p>
      {passed ? (
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
        >
          Continue
        </button>
      ) : (
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
        >
          Retry Assessment
        </button>
      )}
    </div>
  )
}
