// Audio service using the built-in Web Speech API (SpeechSynthesis)
// No external dependencies required -- works in Chrome, Safari, Edge, Firefox.
// Chrome provides high-quality "Google Thai" voices via network.

type ReadyCallback = (available: boolean) => void

let thaiVoice: SpeechSynthesisVoice | null = null
let initialized = false
let ready = false
let hasThaiVoice = false
const readyCallbacks: ReadyCallback[] = []

function notifyReady(available: boolean): void {
  ready = true
  for (const cb of readyCallbacks) {
    cb(available)
  }
  readyCallbacks.length = 0
}

function findThaiVoice(): boolean {
  if (typeof speechSynthesis === 'undefined') return false

  const voices = speechSynthesis.getVoices()
  if (voices.length === 0) return false

  // Prefer voices with "Google" in the name (higher quality in Chrome)
  const googleThai = voices.find((v) => v.lang.startsWith('th') && v.name.toLowerCase().includes('google'))
  const anyThai = voices.find((v) => v.lang.startsWith('th'))

  thaiVoice = googleThai ?? anyThai ?? null
  hasThaiVoice = thaiVoice !== null
  return true // voices are loaded (even if no Thai voice found)
}

export function initAudio(): void {
  if (initialized) return
  initialized = true

  if (typeof speechSynthesis === 'undefined') {
    notifyReady(false)
    return
  }

  // Try to find voices immediately (works in Firefox, sometimes Safari)
  const voicesLoaded = findThaiVoice()
  if (voicesLoaded) {
    notifyReady(true)
    return
  }

  // Chrome loads voices asynchronously -- wait for them
  speechSynthesis.addEventListener('voiceschanged', () => {
    findThaiVoice()
    if (!ready) {
      notifyReady(true)
    }
  })

  // Fallback: if voiceschanged never fires, still mark as ready after 2s
  // SpeechSynthesis itself works -- it just might use a default voice
  setTimeout(() => {
    if (!ready) {
      findThaiVoice() // one last try
      notifyReady(true)
    }
  }, 2000)
}

export function onReady(callback: ReadyCallback): void {
  if (ready) {
    callback(true)
  } else {
    readyCallbacks.push(callback)
  }
}

export function speak(text: string): void {
  if (typeof speechSynthesis === 'undefined') return

  // Re-check for Thai voice in case voices loaded after init
  // (Chrome loads Google voices asynchronously over the network)
  if (!thaiVoice) {
    findThaiVoice()
  }

  // Chrome bug: speechSynthesis can get stuck in a paused state.
  // Resume before canceling to unstick it.
  speechSynthesis.resume()
  speechSynthesis.cancel()

  // Chrome bug: calling speak() immediately after cancel() can cause
  // the new utterance to be silently dropped. A short delay fixes this.
  setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'th-TH'
    utterance.rate = 0.8

    // Use dedicated Thai voice if found, otherwise let browser pick
    if (thaiVoice) {
      utterance.voice = thaiVoice
    }

    // Chrome bug: long utterances can cause speech to stop mid-sentence.
    // Periodically calling resume() keeps it going.
    let resumeInterval: ReturnType<typeof setInterval> | undefined
    utterance.onstart = () => {
      resumeInterval = setInterval(() => {
        if (!speechSynthesis.speaking) {
          clearInterval(resumeInterval)
        } else {
          speechSynthesis.resume()
        }
      }, 5000)
    }
    utterance.onend = () => clearInterval(resumeInterval)
    utterance.onerror = () => clearInterval(resumeInterval)

    speechSynthesis.speak(utterance)
  }, 50)
}

export function isAvailable(): boolean {
  return typeof speechSynthesis !== 'undefined'
}

export function hasVoice(): boolean {
  return hasThaiVoice
}
