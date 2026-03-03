import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './hooks/useProgress'
import { PreferencesProvider, usePreferences } from './hooks/usePreferences'
import { HomeScreen } from './components/HomeScreen'
import { RichLessonScreen } from './components/lesson/RichLessonScreen'
import { ReviewScreen } from './components/ReviewScreen'
import { initLessonManager, buildContentMap, switchRichLessons } from './engine/lessonManager'
import { consonants } from './content/consonants'
import { vowels } from './content/vowels'
import { toneMarks } from './content/tonemarks'
import { words } from './content/words'
import { grammarPatterns } from './content/grammar'
import { phrases } from './content/phrases'
import { lessons } from './content/lessons'
import { richLessons } from './content/richLessons'
import { streetThaiLessons } from './content/streetThai'

// Initialize lesson manager synchronously so lessons are available on first render
const contentMap = buildContentMap(consonants, vowels, words, grammarPatterns, phrases, toneMarks)
initLessonManager(lessons, contentMap, richLessons)

// Use HashRouter in production (GitHub Pages) and BrowserRouter in development
const Router = import.meta.env.PROD ? HashRouter : BrowserRouter

function AppInner() {
  const { prefs } = usePreferences()
  switchRichLessons(prefs.streetThaiMode ? streetThaiLessons : richLessons)

  return (
    <ProgressProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lesson/:lessonId" element={<RichLessonScreen />} />
          <Route path="/review" element={<ReviewScreen />} />
        </Routes>
      </Router>
    </ProgressProvider>
  )
}

function App() {
  return (
    <PreferencesProvider>
      <AppInner />
    </PreferencesProvider>
  )
}

export default App
