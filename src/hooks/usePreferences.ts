import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import type { AppPreferences } from '../engine/preferences'
import { loadPreferences, savePreferences } from '../engine/preferences'
import React from 'react'

interface PreferencesContextValue {
  prefs: AppPreferences
  setDarkMode: (enabled: boolean) => void
  setStreetThaiMode: (enabled: boolean) => void
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null)

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [prefs, setPrefs] = useState(loadPreferences)

  // Apply/remove .dark class on <html> when darkMode changes
  useEffect(() => {
    if (prefs.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [prefs.darkMode])

  // Save to localStorage on every change
  useEffect(() => {
    savePreferences(prefs)
  }, [prefs])

  const setDarkMode = useCallback((enabled: boolean) => {
    setPrefs((prev) => ({ ...prev, darkMode: enabled }))
  }, [])

  const setStreetThaiMode = useCallback((enabled: boolean) => {
    setPrefs((prev) => ({ ...prev, streetThaiMode: enabled }))
  }, [])

  return React.createElement(
    PreferencesContext.Provider,
    { value: { prefs, setDarkMode, setStreetThaiMode } },
    children
  )
}

export function usePreferences(): PreferencesContextValue {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider')
  }
  return context
}
