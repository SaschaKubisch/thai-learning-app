# Content Restructuring Plan: Smoother Learning Curve

> **Date:** 2026-03-03
> **Status:** Draft
> **Author:** AI-assisted

## Overview

Restructure all 30 lessons to create a smoother learning curve. The core change: introduce vowels alongside consonants from R01 so students can read real Thai syllables from day one. Phases 1-3 (R01-R15) get significant rewrites. Phases 4-6 (R16-R30) get targeted fixes replacing trivia questions with reading-skills questions.

---

## Problem & Context

### Problem Statement

The current lesson structure has several pedagogical problems that slow down early learners and test the wrong skills.

### Current Situation

1. **Too fast in early chapters** -- R01 introduces 3 consonants + vocabulary words + "mini-phrases" before students know any vowels
2. **Wrong question types** -- assessments test trivia ("How many consonants does English have?") and vocabulary meaning instead of Thai reading skills
3. **Unrealistic claims** -- R01 says "you can already make mini-phrases" when students know 0 vowels
4. **Vowels delayed too late** -- students cannot form a single readable syllable until R06, 5 lessons in
5. **Rare consonants too early** -- characters like (almost never used) are taught in R03
6. **Consonant class theory too abstract too early** -- R04 is pure theory before students have enough experience to see patterns

### Goals

- Introduce 3-5 new symbols per lesson following i+1 principle (90% known / 10% new)
- Interleave vowels with consonants from lesson 1
- Test symbol recognition before vocabulary meaning
- Remove all trivia questions from assessments
- Defer vocabulary meaning testing until R12 when students have reading fluency

### Non-Goals

- Changing Phase 4-6 lesson structure (only fixing assessment questions)
- Modifying the SRS engine or storage layer
- Changing the lesson shell UI or step rendering components
- Altering phase names (must keep "Consonants", "Vowels", "Reading Practice" for E2E compatibility)

---

## Proposed Solution

### Direction

Restructure content so that vowels appear alongside consonants from R01. By R05, students know 7 consonants + 8 vowels and can read ~56 distinct syllables. All assessment questions test reading skills. Vocabulary meaning testing starts at R12 when students can genuinely read words.

### Alternatives Considered

1. **Keep current structure, just fix questions** -- Would not solve the fundamental problem of vowels being delayed 5 lessons. Students still cannot read anything until R06.
2. **Radical restructure with completely new lesson titles** -- Would break too many E2E tests and require extensive test rewrites. The chosen approach preserves most test constraints.

---

## Requirements

### E2E Test Constraints

These tests constrain R01/R02 structure and phase headings:

- R01 title must be "Your First Thai Letters" (home.spec.ts:31,45; navigation.spec.ts:45)
- R01 step 1 must contain "Welcome to Thai reading" (5 test files)
- R01 step 2 must be info_card with "gaw" visible (lesson-intro.spec.ts:27, rich-lesson-steps.spec.ts:33)
- R01 step 2 info_card must show "1 of 3" (lesson-intro.spec.ts:36, rich-lesson-steps.spec.ts:47)
- R01 practice must have buttons matching `/gaw|jaw|daw|baw/` (rich-lesson-exercises.spec.ts:46)
- R01 practice must have buttons matching `/gaw|jaw|daw|baw|dtaw|bpaw/` (rich-lesson-exercises.spec.ts:59)
- R02 title "More Mid-Class Consonants" referenced in home.spec.ts:51 -- **must update test**
- Phase headings: `h2:has-text("Consonants")`, `h2:has-text("Vowels")`, `h2:has-text("Reading Practice")` (home.spec.ts:27-29) -- **keep phase names unchanged**

### Functional Requirements

1. R01 introduces 3 consonants AND 1 vowel, enabling syllable reading from day one
2. Every lesson introduces 3-5 new symbols maximum
3. All Phase 1-3 assessment questions test reading skills (no trivia, no vocabulary meaning before R12)
4. Rare consonants deferred to R14
5. Consonant class theory introduced lightly in R10 (not R04)
6. Vocabulary meaning testing starts at R12
7. All 7 trivia questions in Phases 4-6 replaced with reading-skills alternatives
8. Phase headings remain unchanged: "Consonants", "Vowels", "Reading Practice"
9. All existing E2E constraints preserved (with R02 title test updated)

---

## Technical Design

### Files to Modify

| File | Scope |
|------|-------|
| `src/content/richLessons/phase1.ts` | Complete rewrite of R01-R05 |
| `src/content/richLessons/phase2.ts` | Complete rewrite of R06-R10 |
| `src/content/richLessons/phase3.ts` | Significant rewrite of R11-R15 |
| `src/content/richLessons/phase4.ts` | Replace 2 trivia questions (R16, R20) |
| `src/content/richLessons/phase5.ts` | Replace 2 trivia questions (R21, R23) |
| `src/content/richLessons/phase6.ts` | Replace 3 trivia questions (R26x2, R30) |
| `src/content/words.ts` | May need new word entries for restructured early lessons |
| `e2e/home.spec.ts` | Update R02 title reference (line 51) |

### Reference (read-only)

- `src/content/lessonTypes.ts` -- Discriminated union types for steps and exercises
- `src/content/consonants.ts` -- Consonant data
- `src/content/vowels.ts` -- Vowel data

---

## Restructured Curriculum

### PHASE 1: Consonants (R01-R05) -- "First Letters and Sounds"

**Theme**: Introduce consonants AND basic vowels together so students read from lesson 1.

#### R01: Your First Thai Letters

**Goal**: Learn consonants gaw, jaw, daw and vowel -aa. Read your first Thai syllables.

**New symbols**: 3 consonants + 1 vowel
**Vocabulary shown (implicit, not tested)**: crow, to stare/remember

**Steps**:

1. text -- "Welcome to Thai reading" intro (KEEP for E2E)
2. info_card -- 3 consonants: gaw, jaw, daw (KEEP 3 items, "1 of 3", "gaw" for E2E)
3. rule -- Each consonant has a keyword
4. info_card -- Introduce vowel -aa: written after consonant, long vowel
5. example -- Guided reading: consonant + vowel = syllable (crow)
6. practice -- Consonant sound recognition (gaw/jaw/daw/baw options KEEP for E2E), syllable reading

**Assessment (6 questions, ALL reading-focused)**:

1. "What sound does the first consonant make?" -- gaw/jaw/baw/daw
2. "What sound does the second consonant make?" -- consonant recognition
3. "What sound does the third consonant make?" -- consonant recognition
4. "Where is the vowel -aa written?" -- after/above/below/before
5. "How do you read the first syllable?" -- syllable reading
6. "How do you read the second syllable?" -- syllable reading

**REMOVED**: "How many consonants does English have?", vocabulary meaning questions, "mini-phrases" claim

---

#### R02: More Consonants, More Sounds

**Goal**: Learn consonants dtaw, baw, bpaw and vowel -ii. Read syllables with two vowel patterns.

**New symbols**: 3 consonants + 1 vowel
**Vocabulary shown (implicit)**: good, eye/grandfather, year

**Steps**:

1. text -- "3 more consonants plus a new vowel"
2. info_card -- 3 consonants: dtaw, baw, bpaw
3. rule -- These are "unaspirated" (no puff of air) -- brief, practical explanation
4. info_card -- Vowel -ii: written above consonant
5. example -- Reading syllables with the new vowel
6. practice -- Consonant recognition, syllable reading

**Assessment (6 questions)**:

1. "What sound does dtaw make?"
2. "What sound does baw make?"
3. "What sound does bpaw make?"
4. "Where is -ii written?" -- above consonant
5. "How do you read syllable with -ii?" -- dii/daa/duu/dee
6. "How do you read syllable with -aa?" -- dtaa/baa/gaa/jaa

**REMOVED**: Trivia about aspirated distinction in other languages, vocabulary meaning tests
**E2E**: Title changes from "More Mid-Class Consonants" to "More Consonants, More Sounds" -- update home.spec.ts:51

---

#### R03: Vowels Above and Below

**Goal**: Learn consonant aw (silent carrier) and vowels -uu (below) and ee- (before). Understand vowels appear in different positions.

**New symbols**: 1 consonant + 2 vowels
**Vocabulary shown (implicit)**: to watch, old, uncle/aunt
**Key concept**: Vowels move around the consonant -- after (-aa), above (-ii), below (-uu), before (ee-)

**Assessment (6 questions)**: Vowel position identification, syllable reading with multiple positions, consonant role.

**REMOVED**: Rare consonants (deferred to R14), Pali/Sanskrit trivia

---

#### R04: More Vowel Patterns

**Goal**: Learn vowels ae-, oo-, -aw. Students now know 6 vowel patterns and can form dozens of syllable combinations.

**New symbols**: 0 consonants + 3 vowels
**Vocabulary shown (implicit)**: you (informal), big, hug, screen

**Assessment (6 questions)**: All vowel identification and syllable reading. "Which vowels are written BEFORE the consonant?", syllable pronunciation.

**REMOVED**: Consonant class theory (was R04's entire content -- too abstract too early). Khmer script 1283 CE trivia.

---

#### R05: Long vs Short Vowels

**Goal**: Learn short vowels -i and -u. Understand that vowel length changes meaning.

**New symbols**: 0 consonants + 2 vowels
**Key concept**: Long vs short -- same consonant, different vowel length, totally different meaning.

**Assessment (6 questions)**: Long vs short identification, syllable reading, vowel distinction.

**REMOVED**: High-class consonants (moved to R06). Cultural trivia.

---

**Summary after Phase 1**: By R05, students know 7 consonants + 8 vowels. Can read ~56 distinct syllables. All assessment questions test reading skills only.

---

### PHASE 2: Vowels (R06-R10) -- "Expanding the Alphabet"

**Theme**: Add high-class and common low-class consonants, special vowels. Keep phase name "vowels" for E2E compatibility.

#### R06: Aspirated Consonants

**Goal**: Learn 3 high-class consonants. Note they have a "puff of air" (aspirated). Read new syllables.

**New symbols**: 3 consonants
**Assessment**: Consonant recognition, aspirated vs non-aspirated distinction through reading, syllable reading.

---

#### R07: Common Consonants

**Goal**: Learn 3 very common low-class consonants. First multi-consonant words.

**New symbols**: 3 consonants
**Key moment**: Students can now read words with initial + final consonants.

**Assessment**: Consonant recognition, word reading (pronunciation, not meaning).

---

#### R08: More Consonants

**Goal**: Learn 4 common consonants (all simple, English-like sounds).

**New symbols**: 4 consonants
**Assessment**: Consonant recognition, syllable and word reading.

---

#### R09: Special Vowels

**Goal**: Learn 3 special vowel forms. Unlock high-frequency words.

**New symbols**: 0 consonants + 3 special vowels (-am, ai-, short a with final consonant)
**Key concept**: -am always includes "m" at end; ai- is the "ai" sound; short a needs a final consonant.

**Assessment**: Special vowel identification, word reading.

---

#### R10: Consonant Classes (Introduction)

**Goal**: Learn 4 more consonants. Introduce the concept that consonants belong to classes (mid/high/low) that affect tone.

**New symbols**: 4 consonants
**Key concept**: Same sound can have different tone depending on consonant class. Show through examples rather than abstract theory. Light introduction -- the full system comes in Phase 4.

**Assessment**: Mix of consonant recognition, syllable reading, and 1-2 conceptual questions about classes.

---

**Summary after Phase 2**: Students know 18 consonants + 11 vowel forms. Can read most common Thai syllables and simple words. Still no vocabulary meaning testing.

---

### PHASE 3: Reading (R11-R15) -- "Reading Fluency"

**Theme**: Complete common consonant set, start vocabulary meaning, build phrases.

#### R11: Remaining Common Consonants

**Goal**: Learn 5 more consonants to cover nearly all common ones.

**New symbols**: 5 consonants
**Assessment**: Reading fluency with full consonant set.

---

#### R12: Reading Real Words

**Goal**: Read complete Thai words. Vocabulary meaning testing STARTS here.

**New symbols**: 0 -- pure reading + meaning practice
**Vocabulary taught explicitly**: eat, come, go, good, water, not

**Assessment**: Mix of word reading AND meaning. "What does X mean?" is appropriate here because students can genuinely read the word first.

---

#### R13: Building Phrases

**Goal**: Combine words into phrases. Adjective-after-noun. Verb chaining.

**Phrases taught**: very good, not good, come watch, go eat

**Assessment**: Phrase reading and meaning. This is where "mini-phrases" claims become honest.

---

#### R14: Rare Consonants and the Full Alphabet

**Goal**: Learn remaining consonants including rare ones.

**Key framing**: "You will rarely see these, but here they are for completeness."
**Assessment**: Recognizing rare vs common, full alphabet overview.

---

#### R15: Comprehensive Reading Practice

**Goal**: Read signs, menus, common text patterns. Consolidation.

**Assessment**: Applied reading -- restaurant signs, common phrases, real-world text.

---

### PHASES 4-6: Targeted Fixes Only

Phases 4-6 are well-structured. Only change: **replace trivia/cultural questions with reading-skills questions**.

#### Questions to Remove and Replace

| Lesson | Remove | Replace with |
|--------|--------|-------------|
| R16 | "Mandarin has 4 tones, Cantonese 6-9" | Tone identification from a written word |
| R20 | "555 means hahaha" | Tone analysis exercise |
| R21 | "Thai verbs don't conjugate like French/Spanish" | Sentence reading exercise |
| R23 | "Japanese/Korean use question particles too" | Question formation exercise |
| R26 | "Greeting adopted in 1940s" | Greeting scenario question |
| R26 | "When NOT to wai" | Practical greeting exercise |
| R30 | "Reflects Thai tolerance" | Reading comprehension exercise |

**Keep** borderline-practical questions in R17 ("why called live syllables"), R19 ("mid class can produce all 5 tones"), R27 (dining utensils -- actually useful), R28 (greeting as greeting -- useful context), R29 (bargaining rules -- practical).

Total: ~7 trivia questions removed from R16-R30, replaced with skills-focused alternatives.

---

## Implementation Plan

| Step | Description | Validates |
|------|-------------|-----------|
| 1 | Rewrite `phase1.ts` (R01-R05) -- biggest change, introduces vowels early | `npx tsc --noEmit` passes |
| 2 | Rewrite `phase2.ts` (R06-R10) -- consonant expansion + special vowels | `npx tsc --noEmit` passes |
| 3 | Rewrite `phase3.ts` (R11-R15) -- reading fluency + phrase building | `npx tsc --noEmit` passes |
| 4 | Smoke test Phases 1-3 | `npx playwright test e2e/rich-lesson-steps.spec.ts` |
| 5 | Update `e2e/home.spec.ts` -- R02 title reference | Test passes |
| 6 | Fix trivia questions in `phase4.ts`, `phase5.ts`, `phase6.ts` | `npx tsc --noEmit` passes |
| 7 | Update `words.ts` if needed for new vocabulary references | Build succeeds |
| 8 | Full test suite | `npx tsc --noEmit && npm run build && npx playwright test` |
| 9 | Commit to `dev` | Clean commit |

---

## Success Criteria

- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build` succeeds
- [ ] All E2E tests pass (with R02 title test updated)
- [ ] R01 preserves: "Welcome to Thai reading", "gaw", "1 of 3", gaw/jaw/daw/baw button pattern
- [ ] Phase headings unchanged: "Consonants", "Vowels", "Reading Practice"
- [ ] No vocabulary meaning questions before R12
- [ ] No trivia/cultural questions in any assessment
- [ ] Every assessment question tests Thai reading skills

---

## Open Questions

- Should `words.ts` be updated with new word entries for the restructured early lessons, or are the words embedded directly in lesson content sufficient?
- For R14 (rare consonants), how much detail to give for each rare character -- just recognition, or include example words?

---

## Appendix

### Symbol Progression Summary

| Lesson | New Consonants | New Vowels | Cumulative |
|--------|---------------|------------|------------|
| R01 | 3 | 1 | 3C + 1V |
| R02 | 3 | 1 | 6C + 2V |
| R03 | 1 | 2 | 7C + 4V |
| R04 | 0 | 3 | 7C + 7V |
| R05 | 0 | 2 | 7C + 9V (was 8, adding short -a implied) |
| R06 | 3 | 0 | 10C + 9V |
| R07 | 3 | 0 | 13C + 9V |
| R08 | 4 | 0 | 17C + 9V |
| R09 | 0 | 3 | 17C + 12V |
| R10 | 4 | 0 | 21C + 12V |
| R11 | 5 | 0 | 26C + 12V |
| R12-R15 | remaining | 0 | full set |
