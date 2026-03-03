import { useState, useCallback } from 'react'
import type { PracticeStep } from '../../../content/lessonTypes'
import { MultipleChoiceView } from '../exercises/MultipleChoiceView'
import { MatchView } from '../exercises/MatchView'
import { TapToRevealView } from '../exercises/TapToRevealView'
import { FillInView } from '../exercises/FillInView'

interface Props {
  step: PracticeStep
  onContinue: () => void
}

export function PracticeStepView({ step, onContinue }: Props) {
  const [currentExercise, setCurrentExercise] = useState(0)

  const handleExerciseComplete = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_correct: boolean) => {
      const nextIndex = currentExercise + 1
      if (nextIndex >= step.exercises.length) {
        // All exercises done
        setTimeout(() => onContinue(), 200)
      } else {
        setTimeout(() => setCurrentExercise(nextIndex), 200)
      }
    },
    [currentExercise, step.exercises.length, onContinue]
  )

  const exercise = step.exercises[currentExercise]
  if (!exercise) return null

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <p className="text-xs text-stone-400 uppercase tracking-wide">
          Practice
        </p>
        <p className="text-xs text-stone-400">
          {currentExercise + 1} of {step.exercises.length}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1">
        {step.exercises.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < currentExercise
                ? 'bg-stone-700'
                : i === currentExercise
                  ? 'bg-stone-400'
                  : 'bg-stone-200'
            }`}
          />
        ))}
      </div>

      <div key={currentExercise}>
        {exercise.type === 'multiple_choice' && (
          <MultipleChoiceView
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'match' && (
          <MatchView
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'tap_to_reveal' && (
          <TapToRevealView
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        )}
        {exercise.type === 'fill_in' && (
          <FillInView
            exercise={exercise}
            onComplete={handleExerciseComplete}
          />
        )}
      </div>
    </div>
  )
}
