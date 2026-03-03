import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { usePreferences } from '../hooks/usePreferences'
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

const STREET_PHASE_LABELS: Record<RichLessonPhase, string> = {
  consonants: 'The Basics of Being Rude',
  vowels: 'Sound Disasters & Internet',
  reading: 'Animals, Insults & Farang Life',
  tones: 'Food, Danger & Nuclear Phrases',
  sentences: 'Money & Haggling',
  dialogues: 'Sarcasm & Passive Aggression',
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
  isStreetMode: boolean,
): LessonStatus {
  if (lessonResults[lessonId]?.completed) return 'completed'
  if (isStreetMode) return 'current' // all unlocked in street mode
  if (lessonIndex === currentLessonIndex) return 'current'
  return 'future'
}

export function HomeScreen() {
  const { state } = useProgress()
  const { prefs, setDarkMode, setStreetThaiMode } = usePreferences()
  const navigate = useNavigate()
  const { audioAvailable } = useAudio()
  const [previewLesson, setPreviewLesson] = useState<RichLesson | null>(null)

  const isStreetMode = prefs.streetThaiMode
  const allLessons = getRichLessons()
  const grouped = groupByPhase(allLessons)
  const dueItems = getDueItems(state)
  const dueCount = dueItems.length
  const currentLessonIndex = state.currentLesson
  const isComplete = !isStreetMode && currentLessonIndex >= allLessons.length
  const currentLesson = isComplete ? null : (isStreetMode ? null : allLessons[currentLessonIndex])

  const phaseLabels = isStreetMode ? STREET_PHASE_LABELS : PHASE_LABELS

  // Street mode progress: count completed S-prefixed lessons
  const streetCompletedCount = isStreetMode
    ? Object.keys(state.lessonResults).filter(
        (id) => id.startsWith('S') && state.lessonResults[id].completed
      ).length
    : 0

  function handleLessonClick(lesson: RichLesson, status: LessonStatus) {
    if (status === 'completed' || status === 'current') {
      navigate(`/lesson/${lesson.id}`)
    } else {
      setPreviewLesson(lesson)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-start justify-center pt-8 sm:pt-16">
      <div className="max-w-xl w-full px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!prefs.darkMode)}
              className="w-9 h-9 rounded-full bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 flex items-center justify-center transition-colors"
              aria-label="Toggle dark mode"
            >
              {prefs.darkMode ? (
                <svg className="w-5 h-5 text-stone-500 dark:text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            {/* Street Thai toggle */}
            <button
              onClick={() => setStreetThaiMode(!prefs.streetThaiMode)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                isStreetMode
                  ? 'bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800'
                  : 'bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600'
              }`}
              aria-label="Toggle street thai mode"
            >
              <svg className={`w-5 h-5 ${isStreetMode ? 'text-red-600 dark:text-red-400' : 'text-stone-500 dark:text-stone-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </button>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-1">
            {isStreetMode ? 'Street Thai' : 'Thai Reading'}
          </h1>
          <p className="text-stone-500 dark:text-stone-400">
            {isStreetMode
              ? 'Learn the Thai they don\'t teach in school.'
              : 'Learn to read Thai script from day one.'}
          </p>
        </div>

        {/* Audio warning */}
        {!audioAvailable && (
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg px-4 py-3 mb-6 text-amber-800 dark:text-amber-200 text-sm">
            Thai audio is not available in this browser. The app will work without sound.
          </div>
        )}

        {/* Progress + Review */}
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 p-6 mb-6">
          <div className="flex justify-between items-baseline mb-3">
            <span className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide">
              Progress
            </span>
            <span className="text-sm text-stone-400 dark:text-stone-500">
              {isStreetMode
                ? `${streetCompletedCount} of ${allLessons.length} completed`
                : `${Math.min(currentLessonIndex, allLessons.length)} of ${allLessons.length} completed`}
            </span>
          </div>
          <ProgressBar
            current={isStreetMode ? streetCompletedCount : currentLessonIndex}
            total={allLessons.length}
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mb-8">
          {!isStreetMode && dueCount > 0 && (
            <button
              onClick={() => navigate('/review')}
              className="w-full py-4 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
            >
              Review ({dueCount} due)
            </button>
          )}

          {!isStreetMode && !isComplete && currentLesson && (
            <button
              onClick={() => navigate(`/lesson/${currentLesson.id}`)}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                dueCount > 0
                  ? 'bg-white dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-700'
                  : 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200'
              }`}
            >
              Next Lesson
            </button>
          )}

          {!isStreetMode && isComplete && dueCount === 0 && (
            <div className="text-center py-4 text-stone-400 dark:text-stone-500">
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
              <h2 className="text-sm font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3">
                {phaseLabels[phase]}
              </h2>
              <div className="flex flex-col gap-2">
                {lessons.map((lesson) => {
                  const lessonIndex = allLessons.indexOf(lesson)
                  const status = getLessonStatus(
                    lessonIndex,
                    currentLessonIndex,
                    state.lessonResults,
                    lesson.id,
                    isStreetMode,
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
          ? 'bg-stone-900 dark:bg-stone-100 border-stone-900 dark:border-stone-100 text-white dark:text-stone-900'
          : isCompleted
            ? 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
            : 'bg-white dark:bg-stone-900 border-stone-100 dark:border-stone-800 text-stone-400 dark:text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800'
      }`}
    >
      {/* Status icon */}
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {isCompleted && (
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {isCurrent && (
          <div className="w-2.5 h-2.5 rounded-full bg-white dark:bg-stone-900" />
        )}
        {isFuture && (
          <div className="w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-600" />
        )}
      </div>

      {/* Lesson info */}
      <div className="flex-1 min-w-0">
        <div className={`font-medium text-sm truncate ${
          isCurrent ? 'text-white dark:text-stone-900' : isCompleted ? 'text-stone-900 dark:text-stone-100' : 'text-stone-400 dark:text-stone-500'
        }`}>
          {lesson.title}
        </div>
        <div className={`text-xs truncate ${
          isCurrent ? 'text-stone-300 dark:text-stone-500' : 'text-stone-400 dark:text-stone-500'
        }`}>
          {lesson.goal}
        </div>
      </div>

      {/* Arrow for future lessons */}
      {isFuture && lesson.skillPreview && (
        <svg className="w-4 h-4 text-stone-300 dark:text-stone-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        className="bg-white dark:bg-stone-900 rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-1">
                {lesson.id}
              </p>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">{lesson.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 p-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Skill preview content */}
          {preview ? (
            <>
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">{preview.heading}</p>
              <div className="flex flex-col gap-3 mb-6">
                {preview.examples.map((ex, i) => (
                  <div key={i} className="bg-stone-50 dark:bg-stone-800 rounded-lg p-4">
                    <p className="text-2xl font-medium text-stone-900 dark:text-stone-50 mb-1">{ex.thai}</p>
                    <p className="text-sm text-stone-500 dark:text-stone-400">{ex.romanization}</p>
                    <p className="text-sm text-stone-600 dark:text-stone-300">{ex.meaning}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">{lesson.goal}</p>
          )}

          {/* CTA */}
          {currentLesson && (
            <button
              onClick={onGoToCurrent}
              className="w-full py-3 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
            >
              Start from {currentLesson.title}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
