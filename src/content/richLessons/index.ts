import type { RichLesson } from '../lessonTypes'
import { phase1Lessons } from './phase1'
import { phase2Lessons } from './phase2'
import { phase3Lessons } from './phase3'
import { phase4Lessons } from './phase4'
import { phase5Lessons } from './phase5'
import { phase6Lessons } from './phase6'

export const richLessons: RichLesson[] = [
  ...phase1Lessons,
  ...phase2Lessons,
  ...phase3Lessons,
  ...phase4Lessons,
  ...phase5Lessons,
  ...phase6Lessons,
]
