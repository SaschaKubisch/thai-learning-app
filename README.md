# Thai Learning App

A reading-first Thai language app that teaches you to read Thai script from the very first lesson. No romanization crutches -- you learn real Thai characters from day one.

**Try it:** [thai-learning-app on GitHub Pages](https://saschakubisch.github.io/thai-learning-app/)

## What you'll learn

The app covers 30 structured lessons across 6 phases:

1. **Consonants** (R01-R05) -- Your first Thai letters, basic vowels, short/long vowel pairs
2. **Vowels** (R06-R10) -- All 44 consonants, consonant classes, special vowel forms
3. **Reading Practice** (R11-R15) -- Compound vowels, completing the alphabet, reading real words and phrases
4. **Tones** (R16-R20) -- The five Thai tones, tone rules, and tone marks
5. **Sentences** (R21-R25) -- Thai sentence structure, questions, negation, classifiers
6. **Dialogues** (R26-R30) -- Real-world conversations: greetings, restaurants, directions, shopping

Each lesson has teaching steps (text explanations, character cards, rules, examples) followed by practice exercises and an assessment quiz.

## Features

- All 44 Thai consonants and common vowels taught systematically
- Spaced repetition (SRS) for review -- items come back at increasing intervals
- Multiple exercise types: multiple choice, matching, tap-to-reveal, fill-in
- Text-to-speech audio using the browser's built-in Thai voice
- Dark mode
- Progress saved locally in your browser
- Works on mobile, tablet, and desktop

## Tech stack

React, TypeScript, Vite, Tailwind CSS. No backend -- everything runs in the browser.

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Production build
npm test           # Run unit tests
npm run test:e2e   # Run E2E tests (Playwright)
npx tsc --noEmit   # Type check
```
