import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { getRichLessons } from '../engine/lessonManager'
import { getDueItems } from '../engine/srsScheduler'
import { ProgressBar } from './ProgressBar'
import { useAudio } from '../hooks/useAudio'
import type { RichLesson, RichLessonPhase } from '../content/lessonTypes'

const PHASE_LABELS: Record<RichLessonPhase, string> = {
  consonants: 'Consonants',
  vowels: 'Vowels',
  reading: 'Reading Practice',
  tones: 'Tones',
  sentences: 'Sentences',
  dialogues: 'Dialogues',
}

const PHASE_ORDER: RichLessonPhase[] = [
  'consonants',
  'vowels',
  'reading',
  'tones',
  'sentences',
  'dialogues',
]

function groupByPhase(lessons: RichLesson[]): Map<RichLessonPhase, RichLesson[]> {
  const map = new Map<RichLessonPhase, RichLesson[]>()
  for (const phase of PHASE_ORDER) {
    map.set(phase, [])
  }
  for (const lesson of lessons) {
    map.get(lesson.phase)!.push(lesson)
  }
  return map
}

type LessonStatus = 'completed' | 'current' | 'future'

function getLessonStatus(
  lessonIndex: number,
  currentLessonIndex: number,
  lessonResults: Record<string, { completed: boolean }>,
  lessonId: string,
): LessonStatus {
  if (lessonResults[lessonId]?.completed) return 'completed'
  if (lessonIndex === currentLessonIndex) return 'current'
  return 'future'
}

export function HomeScreen() {
  const { state } = useProgress()
  const navigate = useNavigate()
  const { audioAvailable } = useAudio()
  const [previewLesson, setPreviewLesson] = useState<RichLesson | null>(null)

  const allLessons = getRichLessons()
  const grouped = groupByPhase(allLessons)
  const dueItems = getDueItems(state)
  const dueCount = dueItems.length
  const currentLessonIndex = state.currentLesson
  const isComplete = currentLessonIndex >= allLessons.length
  const currentLesson = isComplete ? null : allLessons[currentLessonIndex]

  function handleLessonClick(lesson: RichLesson, status: LessonStatus) {
    if (status === 'completed' || status === 'current') {
      navigate(`/lesson/${lesson.id}`)
    } else {
      setPreviewLesson(lesson)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 flex items-start justify-center pt-8 sm:pt-16">
      <div className="max-w-xl w-full px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">
            Thai Reading
          </h1>
          <p className="text-stone-500">
            Learn to read Thai script from day one.
          </p>
        </div>

        {/* Audio warning */}
        {!audioAvailable && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 text-amber-800 text-sm">
            Thai audio is not available in this browser. The app will work without sound.
          </div>
        )}

        {/* Progress + Review */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 mb-6">
          <div className="flex justify-between items-baseline mb-3">
            <span className="text-sm font-medium text-stone-500 uppercase tracking-wide">
              Progress
            </span>
            <span className="text-sm text-stone-400">
              {Math.min(currentLessonIndex, allLessons.length)} of {allLessons.length} completed
            </span>
          </div>
          <ProgressBar current={currentLessonIndex} total={allLessons.length} />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mb-8">
          {dueCount > 0 && (
            <button
              onClick={() => navigate('/review')}
              className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
            >
              Review ({dueCount} due)
            </button>
          )}

          {!isComplete && currentLesson && (
            <button
              onClick={() => navigate(`/lesson/${currentLesson.id}`)}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                dueCount > 0
                  ? 'bg-white border-2 border-stone-200 text-stone-700 hover:bg-stone-50'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              Next Lesson
            </button>
          )}

          {isComplete && dueCount === 0 && (
            <div className="text-center py-4 text-stone-400">
              All caught up. Check back later for reviews.
            </div>
          )}
        </div>

        {/* Lessons by phase */}
        {PHASE_ORDER.map((phase) => {
          const lessons = grouped.get(phase)!
          if (lessons.length === 0) return null
          return (
            <div key={phase} className="mb-6">
              <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-3">
                {PHASE_LABELS[phase]}
              </h2>
              <div className="flex flex-col gap-2">
                {lessons.map((lesson) => {
                  const lessonIndex = allLessons.indexOf(lesson)
                  const status = getLessonStatus(
                    lessonIndex,
                    currentLessonIndex,
                    state.lessonResults,
                    lesson.id,
                  )
                  return (
                    <LessonRow
                      key={lesson.id}
                      lesson={lesson}
                      status={status}
                      onClick={() => handleLessonClick(lesson, status)}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Skill Preview Modal */}
      {previewLesson && (
        <SkillPreviewModal
          lesson={previewLesson}
          currentLesson={currentLesson}
          onClose={() => setPreviewLesson(null)}
          onGoToCurrent={() => {
            setPreviewLesson(null)
            if (currentLesson) navigate(`/lesson/${currentLesson.id}`)
          }}
        />
      )}
    </div>
  )
}

function LessonRow({
  lesson,
  status,
  onClick,
}: {
  lesson: RichLesson
  status: LessonStatus
  onClick: () => void
}) {
  const isCurrent = status === 'current'
  const isCompleted = status === 'completed'
  const isFuture = status === 'future'

  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-center gap-3 ${
        isCurrent
          ? 'bg-stone-900 border-stone-900 text-white'
          : isCompleted
            ? 'bg-white border-stone-200 hover:bg-stone-50'
            : 'bg-white border-stone-100 text-stone-400 hover:bg-stone-50'
      }`}
    >
      {/* Status icon */}
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {isCompleted && (
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {isCurrent && (
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        )}
        {isFuture && (
          <div className="w-2 h-2 rounded-full bg-stone-300" />
        )}
      </div>

      {/* Lesson info */}
      <div className="flex-1 min-w-0">
        <div className={`font-medium text-sm truncate ${
          isCurrent ? 'text-white' : isCompleted ? 'text-stone-900' : 'text-stone-400'
        }`}>
          {lesson.title}
        </div>
        <div className={`text-xs truncate ${
          isCurrent ? 'text-stone-300' : 'text-stone-400'
        }`}>
          {lesson.goal}
        </div>
      </div>

      {/* Arrow for future lessons */}
      {isFuture && lesson.skillPreview && (
        <svg className="w-4 h-4 text-stone-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  )
}

function SkillPreviewModal({
  lesson,
  currentLesson,
  onClose,
  onGoToCurrent,
}: {
  lesson: RichLesson
  currentLesson: RichLesson | null
  onClose: () => void
  onGoToCurrent: () => void
}) {
  const preview = lesson.skillPreview

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                {lesson.id}
              </p>
              <h3 className="text-lg font-bold text-stone-900">{lesson.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Skill preview content */}
          {preview ? (
            <>
              <p className="text-sm text-stone-500 mb-4">{preview.heading}</p>
              <div className="flex flex-col gap-3 mb-6">
                {preview.examples.map((ex, i) => (
                  <div key={i} className="bg-stone-50 rounded-lg p-4">
                    <p className="text-2xl font-medium text-stone-900 mb-1">{ex.thai}</p>
                    <p className="text-sm text-stone-500">{ex.romanization}</p>
                    <p className="text-sm text-stone-600">{ex.meaning}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-stone-500 mb-6">{lesson.goal}</p>
          )}

          {/* CTA */}
          {currentLesson && (
            <button
              onClick={onGoToCurrent}
              className="w-full py-3 rounded-xl bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-colors"
            >
              Start from {currentLesson.title}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
