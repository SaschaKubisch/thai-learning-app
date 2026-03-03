import { useEffect, useState, useCallback } from 'react'
import { initAudio, speak, isAvailable, onReady } from '../engine/audioService'

export function useAudio() {
  const [audioAvailable, setAudioAvailable] = useState(false)

  useEffect(() => {
    initAudio()
    onReady((available) => {
      setAudioAvailable(available && isAvailable())
    })
  }, [])

  const playAudio = useCallback((text: string) => {
    speak(text)
  }, [])

  return { audioAvailable, playAudio }
}
