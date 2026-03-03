import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './hooks/useProgress'
import { HomeScreen } from './components/HomeScreen'
import { RichLessonScreen } from './components/lesson/RichLessonScreen'
import { ReviewScreen } from './components/ReviewScreen'
import { initLessonManager, buildContentMap } from './engine/lessonManager'
import { consonants } from './content/consonants'
import { vowels } from './content/vowels'
import { toneMarks } from './content/tonemarks'
import { words } from './content/words'
import { grammarPatterns } from './content/grammar'
import { phrases } from './content/phrases'
import { lessons } from './content/lessons'
import { richLessons } from './content/richLessons'

// Initialize lesson manager synchronously so lessons are available on first render
const contentMap = buildContentMap(consonants, vowels, words, grammarPatterns, phrases, toneMarks)
initLessonManager(lessons, contentMap, richLessons)

function App() {

  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lesson/:lessonId" element={<RichLessonScreen />} />
          <Route path="/review" element={<ReviewScreen />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}

export default App
