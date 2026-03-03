import { useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { getCurrentRichLesson, getCurrentRichPhase, getTotalRichLessons } from '../engine/lessonManager'
import { getDueItems, getStats } from '../engine/srsScheduler'
import { ProgressBar } from './ProgressBar'
import { useAudio } from '../hooks/useAudio'

const PHASE_LABELS: Record<string, string> = {
  consonants: 'Consonants',
  vowels: 'Vowels',
  reading: 'Reading Practice',
  tones: 'Tones',
  sentences: 'Sentences',
  dialogues: 'Dialogues',
  complete: 'Complete',
}

export function HomeScreen() {
  const { state } = useProgress()
  const navigate = useNavigate()
  const { audioAvailable } = useAudio()

  const currentLesson = getCurrentRichLesson(state)
  const phase = getCurrentRichPhase(state)
  const totalLessons = getTotalRichLessons()
  const stats = getStats(state)
  const dueItems = getDueItems(state)
  const dueCount = dueItems.length

  const isComplete = !currentLesson

  return (
    <div className="min-h-screen bg-stone-50 flex items-start justify-center pt-12 sm:pt-24">
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

        {/* Progress section */}
        <div className="bg-white rounded-xl border border-stone-200 p-6 mb-6">
          <div className="flex justify-between items-baseline mb-3">
            <span className="text-sm font-medium text-stone-500 uppercase tracking-wide">
              {PHASE_LABELS[phase] || phase}
            </span>
            <span className="text-sm text-stone-400">
              Lesson {Math.min(state.currentLesson + 1, totalLessons)} of {totalLessons}
            </span>
          </div>
          <ProgressBar current={state.currentLesson} total={totalLessons} />

          <div className="flex justify-between mt-4 text-sm text-stone-500">
            <span>{stats.mastered} mastered</span>
            <span>{stats.total} learned</span>
          </div>
        </div>

        {/* Current lesson preview */}
        {currentLesson && (
          <div className="bg-white rounded-xl border border-stone-200 p-6 mb-6">
            <h3 className="font-semibold text-stone-900 mb-1">{currentLesson.title}</h3>
            <p className="text-sm text-stone-500">{currentLesson.goal}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          {dueCount > 0 && (
            <button
              onClick={() => navigate('/review')}
              className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
            >
              Review ({dueCount} due)
            </button>
          )}

          {!isComplete && dueCount === 0 && currentLesson && (
            <button
              onClick={() => navigate(`/lesson/${currentLesson.id}`)}
              className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
            >
              Next Lesson
            </button>
          )}

          {!isComplete && dueCount > 0 && currentLesson && (
            <button
              onClick={() => navigate(`/lesson/${currentLesson.id}`)}
              className="w-full py-4 rounded-xl bg-white border-2 border-stone-200 text-stone-700 font-semibold text-lg hover:bg-stone-50 transition-colors"
            >
              Next Lesson
            </button>
          )}

          {isComplete && dueCount === 0 && (
            <div className="text-center py-8 text-stone-400">
              All caught up. Check back later for reviews.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
