export interface AppPreferences {
  darkMode: boolean
  streetThaiMode: boolean
}

const STORAGE_KEY = 'thai-app-preferences'

const DEFAULT_PREFERENCES: AppPreferences = {
  darkMode: false,
  streetThaiMode: false,
}

export function loadPreferences(): AppPreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PREFERENCES
    const parsed = JSON.parse(raw)
    return {
      darkMode: typeof parsed.darkMode === 'boolean' ? parsed.darkMode : false,
      streetThaiMode: typeof parsed.streetThaiMode === 'boolean' ? parsed.streetThaiMode : false,
    }
  } catch {
    return DEFAULT_PREFERENCES
  }
}

export function savePreferences(prefs: AppPreferences): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
}
