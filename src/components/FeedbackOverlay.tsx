import { useEffect } from 'react'

interface FeedbackOverlayProps {
  correct: boolean
  onComplete: () => void
}

export function FeedbackOverlay({ correct, onComplete }: FeedbackOverlayProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, correct ? 800 : 1200)
    return () => clearTimeout(timer)
  }, [correct, onComplete])

  return null // Feedback is handled via option styling in FlashCard
}
