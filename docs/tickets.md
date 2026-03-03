# Tickets: Thai Reading-First Learning App

**GitHub Project:** [Backlog](https://github.com/users/SaschaKubisch/projects/3)

## Overview

This file tracks implementation tickets for the Thai Reading-First Learning App. The original 12 tickets covered the initial build. A subsequent redesign replaced the auto-generated flat lesson system (117 lessons) with 30 rich step-based lessons. See the "Completed: Rich Step-Based Lesson Redesign" section below for the redesign tickets.

Each ticket includes Playwright validation criteria with screenshots to confirm implementation before marking complete.

## Labels

| Label | Color | Meaning |
|-------|-------|---------|
| `infrastructure` | green | Project setup, tooling, build config |
| `content` | yellow | Thai learning content data |
| `engine` | blue | Core logic: SRS, cards, lessons |
| `ui` | orange | React components and screens |
| `redesign` | purple | Rich step-based lesson redesign |

---

## Ticket 1: Project scaffolding: Vite + React + TypeScript + Tailwind

**GitHub Issue:** [#1](https://github.com/SaschaKubisch/thai-learning-app/issues/1)
**Labels:** `infrastructure`
**Depends on:** None

### Description
Initialize the full toolchain: Vite + React + TypeScript (strict), Tailwind CSS, React Router, Vitest + RTL. Create the directory structure from the spec.

### Acceptance Criteria
- [ ] `npm run dev`, `npm run build`, `npm test`, `npx tsc --noEmit`, `npm run lint` all pass
- [ ] Tailwind utility classes work, React Router renders `/`, project structure matches spec

### Spec Reference
Implementation Plan Step 1

---

## Ticket 2: Create Thai learning content data files

**GitHub Issue:** [#2](https://github.com/SaschaKubisch/thai-learning-app/issues/2)
**Labels:** `content`
**Depends on:** #1

### Description
Create all static content: 44 consonants, 18 vowels, 4 tone marks, ~200 words, ~30 grammar patterns, ~50 phrases, and the legacy flat lesson sequence. All strictly typed. (Note: the flat lesson sequence was later replaced by 30 rich step-based lessons in Ticket 13.)

### Acceptance Criteria
- [ ] All content files created with correct counts and types
- [ ] Dependency chains valid (every word only uses previously-introduced characters)
- [ ] Unit tests verify content integrity

### Spec Reference
Implementation Plan Step 2

---

## Ticket 3: Implement storage layer and state management

**GitHub Issue:** [#3](https://github.com/SaschaKubisch/thai-learning-app/issues/3)
**Labels:** `engine`
**Depends on:** #1

### Description
Build localStorage wrapper and React Context + useReducer for app state persistence.

### Acceptance Criteria
- [ ] Typed save/load with versioning, sensible defaults on first visit
- [ ] React Context with completeLesson, updateSRSRecord, resetProgress actions
- [ ] Unit tests for round-trip and defaults

### Spec Reference
Implementation Plan Step 3

---

## Ticket 4: Implement SRS scheduler

**GitHub Issue:** [#4](https://github.com/SaschaKubisch/thai-learning-app/issues/4)
**Labels:** `engine`
**Depends on:** #3

### Description
Build the spaced repetition scheduler: interval ladder (1d->3d->7d->14d->30d->90d), state transitions, due item calculation.

### Acceptance Criteria
- [ ] Pure functions: getDueItems, recordAnswer, addItems, getStats
- [ ] All state transitions covered by unit tests
- [ ] Playwright: screenshots confirming review counts on home screen

### Spec Reference
Implementation Plan Step 4

---

## Ticket 5: Implement card generator with distractor selection

**GitHub Issue:** [#5](https://github.com/SaschaKubisch/thai-learning-app/issues/5)
**Labels:** `engine`
**Depends on:** #2, #3

### Description
Build card generation for all 6 card types with intelligent distractor selection from the learned pool.

### Acceptance Criteria
- [ ] Always 4 options, correct included, no duplicates, distractors from learned pool
- [ ] Phase-appropriate card type distribution
- [ ] Playwright: screenshots of flashcards with 4 options visible

### Spec Reference
Implementation Plan Step 5

---

## Ticket 6: Implement audio service (Web Speech API)

**GitHub Issue:** [#6](https://github.com/SaschaKubisch/thai-learning-app/issues/6)
**Labels:** `engine`
**Depends on:** #1

### Description
Wrap Web Speech API for Thai TTS with async voice detection and graceful fallback.

### Acceptance Criteria
- [ ] speak(), isAvailable(), async voice loading
- [ ] Graceful no-op when no Thai voice available
- [ ] Playwright: screenshot confirming no audio warning in Chromium

### Spec Reference
Implementation Plan Step 6

---

## Ticket 7: Build home screen with progress display

**GitHub Issue:** [#7](https://github.com/SaschaKubisch/thai-learning-app/issues/7)
**Labels:** `ui`
**Depends on:** #3, #4

### Description
Home screen showing phase, progress bar, mastered count, reviews due, and action buttons. Set up routing.

### Acceptance Criteria
- [ ] Correct conditional display (review/lesson/all-done states)
- [ ] Responsive at 320px, 768px, 1440px
- [ ] Playwright: screenshots at all three widths and all three states

### Spec Reference
Implementation Plan Step 7

---

## Ticket 8: Build flashcard component with feedback

**GitHub Issue:** [#8](https://github.com/SaschaKubisch/thai-learning-app/issues/8)
**Labels:** `ui`
**Depends on:** #5, #6

### Description
Reusable flashcard: large Thai text, 4 answer buttons, audio button, correct/incorrect feedback with auto-advance.

### Acceptance Criteria
- [ ] Renders all 6 card types, Thai text at 48/72px, touch-friendly buttons
- [ ] Green/red feedback, auto-advance after 800/1200ms
- [ ] Playwright: screenshots of each card type and both feedback states

### Spec Reference
Implementation Plan Step 8

---

## Ticket 9: Build lesson screen with intro/drill/quiz flow

**GitHub Issue:** [#9](https://github.com/SaschaKubisch/thai-learning-app/issues/9)
**Labels:** `ui`
**Depends on:** #7, #8, #11
**Status:** Superseded by Ticket 13 (Rich step-based lesson redesign). The original LessonScreen.tsx is kept in the codebase but is no longer used by the router.

### Description
Three-stage lesson flow: introduction (show items + audio), drilling (3 correct per item), quiz (80% to pass).

### Acceptance Criteria
- [ ] All three stages work, quiz pass/fail logic correct
- [ ] Playwright: screenshots of each stage, pass and fail states, full lesson completion

### Spec Reference
Implementation Plan Step 9

---

## Ticket 10: Build review screen with SRS session flow

**GitHub Issue:** [#10](https://github.com/SaschaKubisch/thai-learning-app/issues/10)
**Labels:** `ui`
**Depends on:** #4, #8

### Description
Review session: present due items, record answers, update SRS, show summary.

### Acceptance Criteria
- [ ] Loads due items, tracks progress (N of M), shows summary with accuracy
- [ ] Playwright: screenshots of review in progress, summary screen, post-review home

### Spec Reference
Implementation Plan Step 10

---

## Ticket 11: Implement lesson manager and wire to SRS

**GitHub Issue:** [#11](https://github.com/SaschaKubisch/thai-learning-app/issues/11)
**Labels:** `engine`
**Depends on:** #2, #4

### Description
Lesson progression logic: get current lesson, resolve item data, validate scores, advance progress, wire to SRS.

### Acceptance Criteria
- [ ] Pure functions for lesson state management
- [ ] Quiz items include recent lesson content
- [ ] Playwright: screenshots confirming lesson advancement and progress updates

### Spec Reference
Implementation Plan Step 11

---

## Ticket 12: Integration, cross-browser testing, and polish

**GitHub Issue:** [#12](https://github.com/SaschaKubisch/thai-learning-app/issues/12)
**Labels:** `ui`, `infrastructure`
**Depends on:** #9, #10

### Description
Full end-to-end wiring, responsive testing, state persistence verification, performance check.

### Acceptance Criteria
- [ ] Full flow works: home -> lesson -> home -> review -> summary
- [ ] State persists across browser refresh
- [ ] Playwright: full E2E screenshots at 320px/768px/1440px, all card type screenshots, console error check

### Spec Reference
Implementation Plan Step 12

---

## Completed: Rich Step-Based Lesson Redesign

The following tickets describe the redesign that replaced the auto-generated flat lesson system (117 lessons of 3 flashcard items each) with 30 rich, hand-crafted step-based lessons. This work is complete.

---

## Ticket 13: Rich lesson type system and content authoring

**Labels:** `content`, `redesign`
**Depends on:** #2
**Status:** Complete

### Description
Define the type system for rich step-based lessons and author all 30 lessons across 6 phases.

### What was done
- Created `src/content/lessonTypes.ts` defining:
  - 7 step kinds: text, table, rule, example, practice, dialogue, info_card
  - 4 practice exercise types: multiple_choice, match, tap_to_reveal, fill_in
  - AssessmentQuestion type (multiple choice with optional Thai prompt and audio)
  - RichLesson interface with id, title, goal, phase, order, difficulty, prerequisites, steps, assessment, srsItemIds
  - RichLessonPhase union type: consonants, vowels, reading, tones, sentences, dialogues
  - Difficulty union type: beginner, elementary, intermediate
- Created `src/content/richLessons/` with 6 phase files and an index aggregator:
  - `phase1.ts` -- Consonants (R01-R05): mid-class, high-class, low-class consonants, consonant classes
  - `phase2.ts` -- Vowels (R06-R10): long/short vowels, vowel combinations, syllable building
  - `phase3.ts` -- Reading (R11-R15): more high/low-class consonants integrated with reading practice
  - `phase4.ts` -- Tones (R16-R20): 5 tones, live/dead syllables, tone rules, tone marks
  - `phase5.ts` -- Sentences (R21-R25): SVO order, negation, questions, tense, adjectives
  - `phase6.ts` -- Dialogues (R26-R30): greetings, restaurant, directions, shopping, review
- All lessons use Paiboon+ romanization with diacritical tone marks (mid=unmarked, low=grave, falling=circumflex, high=acute, rising=caron)
- Tone rules are taught explicitly in Phase 4 rather than through implicit exposure only
- Each lesson includes 4-5 assessment questions with 80% pass threshold

### Acceptance Criteria
- [x] 30 rich lessons with unique IDs (R01-R30) across 6 phases
- [x] Each lesson has steps, assessment questions, and srsItemIds
- [x] Prerequisites form a valid linear chain (R01 has none, R02 requires R01, etc.)
- [x] TypeScript compiles with no errors

---

## Ticket 14: Rich lesson UI component tree

**Labels:** `ui`, `redesign`
**Depends on:** #7, #8, #13
**Status:** Complete

### Description
Build the complete component tree for rendering rich step-based lessons, including step renderers, exercise views, assessment, and result screens.

### What was done
- Created `src/components/lesson/RichLessonScreen.tsx`:
  - Three-stage flow: steps -> assessment -> result
  - Manages step progression via local state
  - On assessment completion, calls `completeRichLesson()` if score >= 80%
  - On retry, resets to assessment stage (does not repeat instructional steps)
  - Shows lesson title in header, exit button, and step progress bar
- Created `src/components/lesson/StepRenderer.tsx`:
  - Dispatches to correct step view based on step.kind
  - Passes onContinue callback to advance through steps
- Created `src/components/lesson/StepProgressBar.tsx`:
  - Visual progress through lesson steps and assessment
  - Indicates assessment stage distinctly
- Created step view components in `src/components/lesson/steps/`:
  - `TextStepView.tsx` -- renders text content with **bold** and *italic* support
  - `TableStepView.tsx` -- renders tables with headers and rows
  - `RuleStepView.tsx` -- renders explicit rules with example lists (thai, romanization, english)
  - `ExampleStepView.tsx` -- renders worked examples with labeled sub-steps
  - `PracticeStepView.tsx` -- dispatches to exercise views, tracks exercise completion
  - `DialogueStepView.tsx` -- renders dialogue with speaker names, Thai, romanization, English
  - `InfoCardStepView.tsx` -- renders info cards with large Thai text, romanization, English, detail, and audio button
- Created exercise view components in `src/components/lesson/exercises/`:
  - `MultipleChoiceView.tsx` -- prompt, optional large Thai text, 4 options with correct/incorrect feedback
  - `MatchView.tsx` -- left-right pair matching interaction
  - `TapToRevealView.tsx` -- flip cards with front/back and optional audio
  - `FillInView.tsx` -- sentence with blank, select correct word from options
- Created `src/components/lesson/AssessmentView.tsx`:
  - Presents assessment questions sequentially
  - Tracks score and reports to parent on completion
- Created `src/components/lesson/LessonResultView.tsx`:
  - Shows score, pass/fail status
  - "Continue" button on pass, "Retry" button on fail

### Acceptance Criteria
- [x] All 7 step kinds render correctly
- [x] All 4 exercise types are interactive and provide feedback
- [x] Assessment scores correctly and enforces 80% threshold
- [x] Retry resets to assessment only (steps are not repeated)
- [x] Progress bar shows step advancement and assessment stage

---

## Ticket 15: Storage migration and lesson manager updates

**Labels:** `engine`, `redesign`
**Depends on:** #3, #13
**Status:** Complete

### Description
Update the storage layer and lesson manager to support the new 30-lesson structure with version migration from v1.

### What was done
- Updated `src/engine/storage.ts`:
  - Bumped CURRENT_VERSION from 1 to 2
  - Added `migrateV1toV2()` function:
    - Maps lesson progress proportionally: `floor((oldCurrentLesson / 117) * 30)`
    - Preserves SRS records (same item IDs)
    - Clears old lesson results (lesson IDs changed from L-series to R-series)
  - `loadState()` detects v1 state and applies migration automatically
- Updated `src/engine/types.ts`:
  - AppState.version changed from `1` to `1 | 2` union type
- Updated `src/engine/lessonManager.ts`:
  - Added rich lesson support functions:
    - `getRichLessons()` -- returns all 30 rich lessons
    - `getRichLesson(id)` -- returns a single rich lesson by ID
    - `getTotalRichLessons()` -- returns 30
    - `getCurrentRichLesson(state)` -- returns the next uncompleted lesson
    - `getCurrentRichPhase(state)` -- returns phase name or "complete"
    - `completeRichLesson(state, lessonId, score)` -- validates score, adds SRS items, updates results, advances progress
  - `initLessonManager()` accepts optional richLessons parameter
  - Legacy flat lesson functions (getCurrentLesson, completeLesson, etc.) kept for backward compatibility

### Acceptance Criteria
- [x] v1 state is migrated to v2 correctly (proportional lesson mapping, SRS preserved, results cleared)
- [x] v2 state loads without migration
- [x] Unknown/missing state initializes to clean v2 defaults
- [x] `completeRichLesson()` advances progress and adds SRS items
- [x] `getCurrentRichLesson()` returns correct next lesson based on currentLesson index

---

## Ticket 16: Router and home screen updates

**Labels:** `ui`, `redesign`
**Depends on:** #7, #14, #15
**Status:** Complete

### Description
Update the router to use RichLessonScreen and update the home screen to display the 6 new phases and lesson previews.

### What was done
- Updated `src/App.tsx`:
  - Router now renders `RichLessonScreen` at `/lesson/:lessonId` instead of the old `LessonScreen`
  - Imports and initializes rich lessons via `initLessonManager(lessons, contentMap, richLessons)`
- Updated `src/components/HomeScreen.tsx`:
  - Uses `getCurrentRichLesson()`, `getCurrentRichPhase()`, `getTotalRichLessons()` instead of legacy functions
  - Phase labels updated: Consonants, Vowels, Reading Practice, Tones, Sentences, Dialogues, Complete
  - Shows lesson preview card with title and goal for the next lesson
  - Progress shows "Lesson N of 30"
- The old `src/components/LessonScreen.tsx` is kept in the codebase but is no longer imported or routed to

### Acceptance Criteria
- [x] `/lesson/R01` renders the first rich lesson
- [x] Home screen shows correct phase label and lesson count (of 30)
- [x] Home screen shows next lesson title and goal
- [x] Old LessonScreen.tsx is not referenced by the router
- [x] Full flow works: home -> rich lesson -> assessment -> result -> home
