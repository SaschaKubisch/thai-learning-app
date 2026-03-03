import { useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProgress } from '../../hooks/useProgress'
import { getRichLesson, completeRichLesson } from '../../engine/lessonManager'
import { StepRenderer } from './StepRenderer'
import { StepProgressBar } from './StepProgressBar'
import { AssessmentView } from './AssessmentView'
import { LessonResultView } from './LessonResultView'

type Stage = 'steps' | 'assessment' | 'result'

export function RichLessonScreen() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const { state, updateState } = useProgress()

  const [stage, setStage] = useState<Stage>('steps')
  const [currentStep, setCurrentStep] = useState(0)
  const [assessmentScore, setAssessmentScore] = useState<{
    score: number
    total: number
  } | null>(null)

  const lesson = lessonId ? getRichLesson(lessonId) : null

  const handleStepContinue = useCallback(() => {
    if (!lesson) return
    const nextStep = currentStep + 1
    if (nextStep >= lesson.steps.length) {
      if (lesson.assessment.length > 0) {
        setStage('assessment')
      } else {
        // No assessment -- complete immediately
        if (lessonId) {
          const newState = completeRichLesson(state, lessonId, 100)
          updateState(newState)
        }
        setAssessmentScore({ score: 1, total: 1 })
        setStage('result')
      }
    } else {
      setCurrentStep(nextStep)
    }
  }, [lesson, currentStep, lessonId, state, updateState])

  const handleAssessmentComplete = useCallback(
    (score: number, total: number) => {
      const percentage = Math.round((score / total) * 100)
      setAssessmentScore({ score, total })

      if (percentage >= 80 && lessonId) {
        const newState = completeRichLesson(state, lessonId, percentage)
        updateState(newState)
      }

      setStage('result')
    },
    [lessonId, state, updateState]
  )

  const handleRetry = useCallback(() => {
    setAssessmentScore(null)
    setStage('assessment')
  }, [])

  if (!lesson) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center">
        <p className="text-stone-500 dark:text-stone-400">Lesson not found.</p>
      </div>
    )
  }

  const totalSegments = lesson.steps.length + (lesson.assessment.length > 0 ? 1 : 0)
  const currentSegment =
    stage === 'steps'
      ? currentStep
      : stage === 'assessment'
        ? lesson.steps.length
        : totalSegments

  const passed = assessmentScore
    ? Math.round((assessmentScore.score / assessmentScore.total) * 100) >= 80
    : false

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 text-sm"
        >
          Exit
        </button>
        <span className="text-sm text-stone-400 dark:text-stone-500 uppercase tracking-wide">
          {lesson.title}
        </span>
        <div className="w-8" />
      </div>

      {/* Progress bar */}
      {stage !== 'result' && (
        <div className="px-6 pb-3">
          <StepProgressBar
            currentStep={currentSegment}
            totalSteps={totalSegments}
            inAssessment={stage === 'assessment'}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-6 pb-12 pt-4">
        <div className="max-w-xl w-full">
          {stage === 'steps' && (
            <div key={currentStep}>
              <StepRenderer
                step={lesson.steps[currentStep]}
                onContinue={handleStepContinue}
              />
            </div>
          )}

          {stage === 'assessment' && (
            <AssessmentView
              questions={lesson.assessment}
              onComplete={handleAssessmentComplete}
            />
          )}

          {stage === 'result' && assessmentScore && (
            <LessonResultView
              score={assessmentScore.score}
              total={assessmentScore.total}
              passed={passed}
              onContinue={() => navigate('/')}
              onRetry={handleRetry}
            />
          )}
        </div>
      </div>
    </div>
  )
}
