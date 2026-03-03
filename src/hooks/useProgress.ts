import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import type { AppState } from '../engine/types'
import { loadState, saveState, createDefaultState } from '../engine/storage'
import React from 'react'

type Action =
  | { type: 'SET_STATE'; state: AppState }
  | { type: 'RESET' }

function reducer(_state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_STATE':
      return action.state
    case 'RESET':
      return createDefaultState()
  }
}

interface ProgressContextValue {
  state: AppState
  updateState: (newState: AppState) => void
  resetProgress: () => void
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, null, loadState)

  // Save to localStorage on every state change
  useEffect(() => {
    saveState(state)
  }, [state])

  const updateState = useCallback((newState: AppState) => {
    dispatch({ type: 'SET_STATE', state: newState })
  }, [])

  const resetProgress = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  return React.createElement(
    ProgressContext.Provider,
    { value: { state, updateState, resetProgress } },
    children
  )
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}
