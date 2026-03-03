interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2">
      <div
        className="bg-stone-700 dark:bg-stone-300 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
