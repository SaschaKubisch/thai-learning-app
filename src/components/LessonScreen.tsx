import { useState, useCallback, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { getLessonData, getQuizItems, completeLesson, getLearnedPool, getLearnedItemsOfType } from '../engine/lessonManager'
import { generateDrillCard, generateQuiz } from '../engine/cardGenerator'
import { FlashCard } from './FlashCard'
import { ProgressBar } from './ProgressBar'
import { AudioButton } from './AudioButton'
import type { Card } from '../engine/types'
import type { ContentItem, ItemType } from '../content/types'

type Stage = 'intro' | 'drill' | 'quiz' | 'result'

export function LessonScreen() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const navigate = useNavigate()
  const { state, updateState } = useProgress()
  const [stage, setStage] = useState<Stage>('intro')
  const [introIndex, setIntroIndex] = useState(0)
  const [drillCorrectCounts, setDrillCorrectCounts] = useState<Record<string, number>>({})
  const [currentCard, setCurrentCard] = useState<Card | null>(null)
  const [quizCards, setQuizCards] = useState<Card[]>([])
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizCorrect, setQuizCorrect] = useState(0)
  const [quizScore, setQuizScore] = useState<number | null>(null)
  const drillInitialized = useRef(false)

  const lessonData = lessonId ? getLessonData(lessonId) : null

  // Generate next drill card using current counts
  const generateNextDrill = useCallback((counts: Record<string, number>) => {
    if (!lessonData) return

    const items = lessonData.items
    for (const { item, itemType } of items) {
      const id = getItemId(item, itemType)
      const count = counts[id] || 0
      if (count < 3) {
        const pool = [...getLearnedPool(state), ...items.map((i) => i.item)]
        const poolOfType = pool.length >= 4
          ? pool
          : [...getLearnedItemsOfType(state, itemType), ...items.map((i) => i.item)]
        const card = generateDrillCard(item, itemType, lessonData.lesson.phase, poolOfType)
        setCurrentCard(card)
        return
      }
    }
    // All items have 3 correct -- move to quiz
    setStage('quiz')
  }, [lessonData, state])

  // Initialize quiz cards when entering quiz stage
  useEffect(() => {
    if (stage === 'quiz' && lessonId && lessonData && quizCards.length === 0) {
      const quizItems = getQuizItems(lessonId, state)
      const pool = [...getLearnedPool(state), ...lessonData.items.map((i) => i.item)]
      const cards = generateQuiz(quizItems, lessonData.lesson.phase, pool, 8)
      setQuizCards(cards)
      setQuizIndex(0)
      setQuizCorrect(0)
    }
  }, [stage, lessonId, lessonData, state, quizCards.length])

  // Note: auto-play removed -- browsers block speech synthesis without user gesture.
  // Audio is available via the AudioButton on each intro card instead.

  // Generate first drill card only once when entering drill stage
  useEffect(() => {
    if (stage === 'drill' && !drillInitialized.current) {
      drillInitialized.current = true
      generateNextDrill(drillCorrectCounts)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  if (!lessonData) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-500">Lesson not found.</p>
      </div>
    )
  }

  const { items } = lessonData

  const handleIntroNext = () => {
    if (introIndex < items.length - 1) {
      setIntroIndex(introIndex + 1)
    } else {
      setStage('drill')
    }
  }

  const handleDrillAnswer = (correct: boolean) => {
    let newCounts = drillCorrectCounts
    if (correct && currentCard) {
      newCounts = {
        ...drillCorrectCounts,
        [currentCard.itemId]: (drillCorrectCounts[currentCard.itemId] || 0) + 1,
      }
      setDrillCorrectCounts(newCounts)
    }
    // Generate next drill card with the updated counts
    setTimeout(() => generateNextDrill(newCounts), 100)
  }

  const handleQuizAnswer = (correct: boolean) => {
    const newCorrect = correct ? quizCorrect + 1 : quizCorrect
    const nextIndex = quizIndex + 1

    if (nextIndex >= quizCards.length) {
      // Quiz complete
      const score = Math.round((newCorrect / quizCards.length) * 100)
      setQuizScore(score)
      setQuizCorrect(newCorrect)
      setStage('result')

      if (score >= 80 && lessonId) {
        const newState = completeLesson(state, lessonId, score)
        updateState(newState)
      }
    } else {
      setQuizCorrect(newCorrect)
      setQuizIndex(nextIndex)
    }
  }

  const handleRetry = () => {
    setQuizCards([])
    setQuizIndex(0)
    setQuizCorrect(0)
    setQuizScore(null)
    setStage('quiz')
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-stone-400 hover:text-stone-600 text-sm"
        >
          Exit
        </button>
        <span className="text-sm text-stone-400 uppercase tracking-wide">
          {stage === 'intro' && 'Introduction'}
          {stage === 'drill' && 'Practice'}
          {stage === 'quiz' && 'Quiz'}
          {stage === 'result' && 'Result'}
        </span>
        <div className="w-8" /> {/* Spacer for alignment */}
      </div>

      {/* Stage progress */}
      {stage === 'quiz' && quizCards.length > 0 && (
        <div className="px-6 pb-2">
          <ProgressBar current={quizIndex} total={quizCards.length} />
          <p className="text-xs text-stone-400 mt-1 text-center">
            {quizIndex + 1} of {quizCards.length}
          </p>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="max-w-xl w-full">
          {/* Introduction stage */}
          {stage === 'intro' && (
            <div className="flex flex-col items-center gap-6">
              <IntroCard
                item={items[introIndex].item}
                itemType={items[introIndex].itemType}
              />
              <button
                onClick={handleIntroNext}
                className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
              >
                {introIndex < items.length - 1 ? 'Next' : 'Start Practice'}
              </button>
              <p className="text-xs text-stone-400">
                {introIndex + 1} of {items.length}
              </p>
            </div>
          )}

          {/* Drill stage */}
          {stage === 'drill' && currentCard && (
            <FlashCard card={currentCard} onAnswer={handleDrillAnswer} />
          )}

          {/* Quiz stage */}
          {stage === 'quiz' && quizCards[quizIndex] && (
            <FlashCard card={quizCards[quizIndex]} onAnswer={handleQuizAnswer} />
          )}

          {/* Result stage */}
          {stage === 'result' && quizScore !== null && (
            <div className="flex flex-col items-center gap-6">
              <div className="text-6xl font-bold text-stone-900">
                {quizScore}%
              </div>
              <p className="text-stone-500 text-lg">
                {quizScore >= 80
                  ? 'Lesson complete!'
                  : 'You need 80% to pass. Try again.'}
              </p>
              <p className="text-stone-400 text-sm">
                {quizCorrect} of {quizCards.length} correct
              </p>
              {quizScore >= 80 ? (
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleRetry}
                  className="w-full py-4 rounded-xl bg-stone-900 text-white font-semibold text-lg hover:bg-stone-800 transition-colors"
                >
                  Retry Quiz
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper component for intro cards
function IntroCard({
  item,
  itemType,
}: {
  item: ContentItem
  itemType: ItemType
}) {
  const thai = getThaiText(item, itemType)
  const label = getLabel(item, itemType)
  const sublabel = getSublabel(item, itemType)

  return (
    <div className="flex flex-col items-center gap-4">
      {thai && (
        <div className="flex items-center gap-3">
          <span className="text-6xl sm:text-8xl font-bold text-stone-900">
            {thai}
          </span>
          <AudioButton text={thai} size="lg" />
        </div>
      )}
      <span className="text-xl text-stone-600">{label}</span>
      {sublabel && (
        <span className="text-sm text-stone-400">{sublabel}</span>
      )}
    </div>
  )
}

// Helpers to extract display info from polymorphic content items
function getItemId(item: ContentItem, _itemType: ItemType): string {
  return (item as { id: string }).id
}

function getThaiText(item: ContentItem, itemType: ItemType): string {
  switch (itemType) {
    case 'consonant':
      return (item as { thai: string }).thai
    case 'vowel':
      return (item as { thai: string }).thai
    case 'tonemark':
      return (item as { thai: string }).thai
    case 'word':
      return (item as { thai: string }).thai
    case 'grammar':
      return (item as { examplesThai: string[] }).examplesThai[0] || ''
    case 'phrase':
      return (item as { thai: string }).thai
    default:
      return ''
  }
}

function getLabel(item: ContentItem, itemType: ItemType): string {
  switch (itemType) {
    case 'consonant': {
      const c = item as { romanization: string; keywordEnglish: string }
      return `"${c.romanization}" -- ${c.keywordEnglish}`
    }
    case 'vowel': {
      const v = item as { romanization: string; type: string }
      return `"${v.romanization}" (${v.type})`
    }
    case 'tonemark': {
      const t = item as { name: string; effect: string }
      return `${t.name} -- ${t.effect}`
    }
    case 'word': {
      const w = item as { romanization: string; english: string }
      return `"${w.romanization}" -- ${w.english}`
    }
    case 'grammar': {
      const g = item as { patternName: string }
      return g.patternName
    }
    case 'phrase': {
      const p = item as { english: string }
      return p.english
    }
    default:
      return ''
  }
}

function getSublabel(item: ContentItem, itemType: ItemType): string | null {
  switch (itemType) {
    case 'consonant': {
      const c = item as { keywordThai: string; consonantClass: string }
      return `${c.keywordThai} (${c.consonantClass} class)`
    }
    case 'grammar': {
      const g = item as { examplesEnglish: string[] }
      return g.examplesEnglish[0] || null
    }
    case 'phrase': {
      const p = item as { context: string }
      return p.context
    }
    default:
      return null
  }
}
