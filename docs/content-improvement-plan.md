# Content Improvement Plan

## Problem Summary

Based on testing the deployed app, three categories of issues were identified:

### 1. Thai Characters Not Rendering

Thai combining vowel marks (above/below consonant: -ี, -ุ, -ู, etc.) render as boxes or garbled text. Root cause: no Thai-supporting font is specified anywhere in the CSS. The app falls back to system sans-serif which may not handle Thai combining characters properly, especially at large display sizes.

**Fix:** Add a Thai web font (Noto Sans Thai from Google Fonts) and set it as the primary font family.

### 2. Content is Too Atomic and Isolated

The current lesson structure teaches letters in isolation for 14 lessons before real vocabulary appears:
- R01-R05: Consonants as isolated symbols with keywords (ก = "gaw" sound, keyword: chicken)
- R06-R10: Vowels demonstrated mostly with ก, artificial syllables
- R11-R14: More consonants, still mostly isolated syllables
- R15: First lesson where word meanings are central
- R21-R30: Sentences and dialogues that assume vocabulary knowledge never formally taught

Students memorize 44+ consonants and 13+ vowels without knowing meaningful words that use them. The keyword system (ก ไก่ = chicken) exists but is treated as a sound association, not as vocabulary.

### 3. Assessment Questions Could Be More Engaging

Current assessments are purely mechanical: "What sound does this consonant make?", "How do you pronounce this syllable?", "Which vowel is written below the consonant?" These are necessary but dry. There is room for cultural context, fun facts, and more varied question types.

### 4. No Way to Jump Between Chapters

Users are locked into linear progression. There should be a way to access any chapter while still encouraging sequential completion.

---

## Proposed Changes

### A. Font Fix (Quick Win)

**Files:** `index.html`, `src/index.css`

1. Add Google Fonts link for Noto Sans Thai (regular + bold weights) in `index.html`
2. Set `font-family: 'Noto Sans Thai', sans-serif` on body in `index.css`
3. This fixes all rendering issues globally -- no component changes needed

### B. Vocabulary-Integrated Consonant Lessons (R01-R05)

**Current:** Each consonant taught as: symbol -> sound -> class -> keyword
**Proposed:** Each consonant taught as: symbol -> keyword word (with meaning) -> pronunciation -> use in a simple word/phrase

For every consonant, provide:
- The letter itself: ก
- Its keyword word with meaning: ไก่ (gài) = chicken
- A second common word using this consonant: กิน (gin) = to eat
- A mini-phrase: กินไก่ (gin gài) = eat chicken

This means students learn real vocabulary from lesson 1. By the end of R05 (9 consonants), they already know ~18 words and can recognize simple phrases.

**Example revised R01 info_card:**
```
thai: 'ก'
romanization: 'gaw'
meaning: 'g sound'
--- followed by ---
thai: 'ไก่'
romanization: 'gài'
meaning: 'chicken'
note: 'keyword word for ก'
--- followed by ---
thai: 'กิน'
romanization: 'gin'
meaning: 'to eat'
note: 'common word starting with ก'
```

**Keyword words to use (standard Thai alphabet keywords):**
| Consonant | Keyword | Meaning | Second Word | Meaning |
|-----------|---------|---------|-------------|---------|
| ก | ไก่ gài | chicken | กิน gin | to eat |
| จ | จาน jaan | plate | จริง jing | really/true |
| ด | เด็ก dèk | child | ดี dii | good |
| ต | เต่า dtào | turtle | ตา dtaa | eye/grandfather |
| บ | ใบไม้ bai-máai | leaf | บ้าน bâan | house |
| ป | ปลา bplaa | fish | ปาก bpàak | mouth |
| ฎ | ชฎา chá-daa | crown/headdress | (rare consonant) | - |
| ฏ | ปฏัก bpà-dtàk | spear/goad | (rare consonant) | - |
| อ | อ่าง àang | basin | อร่อย à-ràwy | delicious |

### C. Vocabulary-Integrated Vowel Lessons (R06-R10)

**Current:** Vowels shown as combining patterns, examples mostly use ก
**Proposed:** Each vowel taught with 2-3 real words that use it, covering multiple consonants

**Example for R06 (long vowels aa, ii, uu):**
- -า (aa): ตา (dtaa) = eye, มา (maa) = to come, กา (gaa) = crow
- -ี (ii): ดี (dii) = good, มี (mii) = to have, สี (sii) = color
- -ู (uu): ดู (duu) = to look/watch, รู้ (rúu) = to know, หมู (muu) = pork/pig

Each vowel lesson now teaches 6-9 new vocabulary words while demonstrating the vowel pattern across different consonants.

### D. Accelerated Letter-to-Word-to-Sentence Progression

**Current progression:**
- R01-R14: Letters and syllables (no sentences)
- R15: First real word reading
- R21: First sentences

**Proposed progression:**
- R01-R05: Consonants WITH keyword vocabulary and mini-phrases
- R06-R10: Vowels WITH real words, introduce 2-3 simple sentences per lesson
- R11-R14: More consonants WITH words, simple sentences using all learned vocabulary
- R15: Reading practice with full sentences (moved up from R21-style content)
- R16-R20: Tones taught IN CONTEXT of known vocabulary (not abstract rules first)

**Key change:** Introduce simple sentences as early as R06:
- After teaching กา (crow), ดี (good): "กาดี" = "The crow is good" (simple SVO)
- After teaching มา (to come): "มา!" = "Come!" (one-word sentence)
- After teaching กิน (to eat) + ข้าว (rice): "กินข้าว" = "Eat rice"

By R10, students should be able to read and understand 5-10 simple sentences.

### E. More Engaging Assessment Questions

Replace some mechanical questions with varied types:

#### Cultural Questions
- "In Thailand, ไก่ (chicken) appears on the sign for what type of restaurant?" (-> fried chicken / street food stalls)
- "The Thai word สวัสดี (hello) was created in the 1940s. Before that, Thais greeted each other with:" (-> กินข้าวหรือยัง / "Have you eaten yet?")
- "Thai is a tonal language. How many tones does Thai have?" (-> 5)
- "Which direction do you read Thai script?" (-> Left to right)

#### Fun Facts
- "The Thai alphabet has 44 consonants. This is more than:" (-> English (26), Russian (33), both)
- "The word 'Thai' (ไทย) means:" (-> Free/freedom)
- "Thai has no spaces between words in a sentence. How do readers know where words end?" (-> Experience and context / common patterns)
- "Which of these Thai words came from English?" (-> แท็กซี่ = taxi, กาแฟ = coffee from Malay)

#### Practical/Contextual Questions
- "You see a sign that says ร้านอาหาร. Based on what you've learned, this probably means:" (-> restaurant)
- "A Thai friend texts you 555. In Thai, this means:" (-> hahaha, because 5 = ห้า = haa)
- "If someone says ไม่เป็นไร, they mean:" (-> no problem / never mind)
- "Which greeting would you use at 8am?" (-> สวัสดีครับ/ค่ะ)

#### Pattern Recognition
- "Look at these words: กา, ดา, ตา, บา. What do they all have in common?" (-> They all end with the -า vowel)
- "กิน means 'to eat'. กินข้าว means 'eat rice'. What do you think ข้าว means?" (-> rice)

#### Audio/Tone Questions (for later phases)
- "These two words look almost the same: ใกล้ (glâi) and ไกล (glai). What makes them different?" (-> tone + vowel form, they mean opposite things: near vs far)
- "มา (maa, mid tone) means 'to come'. ม้า (máa, high tone) means:" (-> horse)

### F. Chapter Navigation with Skill Preview

**Concept: Every chapter shows you what you'll be able to do**

All chapters are always visible and tappable on the home screen. When a user taps a chapter they haven't unlocked yet, instead of entering the lesson, they see a **skill preview** -- a short, concrete demonstration of what they'll be able to read, say, or understand after completing that chapter.

This is intrinsically motivating: the user sees real Thai text and thinks "I want to be able to read that."

**Chapter states on the home screen:**
1. **Completed** (checkmark): Done, can be replayed
2. **Current** (highlighted): The recommended next lesson, prominent CTA
3. **Future** (visible, tappable): Shows skill preview on tap

**Skill preview examples by lesson:**

The previews should grow visibly in complexity and length as lessons progress. Early lessons show single words; middle lessons show sentences; late lessons show entire paragraphs and multi-turn conversations. The user should be able to scroll through the preview text and feel the weight of what they're building toward.

**R01 -- Your first Thai words:**
> ไก่ gài -- chicken
> กิน gin -- to eat
> จาน jaan -- plate

**R05 -- You'll read short phrases:**
> กินไก่ gin gài -- eat chicken
> ปลาดี bplaa dii -- good fish
> บ้านเต่า bâan dtào -- turtle's house

**R10 -- You'll read full sentences:**
> ฉันกินข้าวที่บ้าน
> chǎn gin kâaw tîi bâan
> "I eat rice at home."
>
> แม่ไปตลาดทุกวัน
> mâe bpai dtà-làat túk wan
> "Mom goes to the market every day."

**R15 -- You'll read signs, menus, and short texts:**
> ร้านอาหารไทย เปิด 10.00-22.00
> ข้าวผัดไก่ 50 บาท
> ต้มยำกุ้ง 80 บาท
> น้ำเปล่า 10 บาท
>
> "Thai Restaurant -- Open 10am-10pm
> Chicken fried rice 50 baht
> Tom yum shrimp 80 baht
> Water 10 baht"

**R20 -- You'll hear the difference between:**
> มา maa (mid tone) = to come
> ม้า máa (high tone) = horse
> หมา mǎa (rising tone) = dog
>
> ใกล้ glâi (falling tone) = near
> ไกล glai (mid tone) = far
>
> You'll know exactly why they sound different and be able to predict the tone of any Thai syllable.

**R25 -- You'll understand and compose paragraphs:**
> ผมชอบอาหารไทยมาก อาหารไทยอร่อยและไม่แพง
> ผมกินข้าวผัดทุกวัน แต่วันนี้ผมจะลองต้มยำ
> เพื่อนบอกว่าต้มยำที่ร้านนี้อร่อยที่สุด
>
> "I really like Thai food. Thai food is delicious and not expensive.
> I eat fried rice every day, but today I'll try tom yum.
> My friend says the tom yum at this restaurant is the best."

**R28 -- You'll navigate a city in Thai:**
> ขอโทษครับ ไปสถานีรถไฟฟ้าอย่างไรครับ
> ตรงไปถึงสี่แยก แล้วเลี้ยวซ้าย
> เดินอีกประมาณห้านาที สถานีอยู่ขวามือครับ
> ขอบคุณมากครับ
>
> "Excuse me, how do I get to the BTS station?
> Go straight to the intersection, then turn left.
> Walk about five more minutes, the station is on your right.
> Thank you very much."

**R30 -- You'll read and follow an entire conversation:**
> สวัสดีครับ สบายดีไหมครับ
> สบายดีค่ะ ขอบคุณค่ะ วันนี้ไปไหนคะ
> วันนี้ผมจะไปเที่ยวเชียงใหม่ครับ เคยไปไหมครับ
> เคยไปค่ะ สวยมากเลย อากาศดีด้วย
> ต้องไปกินข้าวซอยด้วยนะครับ อร่อยมาก
> แน่นอนค่ะ แล้วก็ไปเดินคนมืดด้วยนะคะ ของถูกมาก
> ดีครับ ขอบคุณสำหรับคำแนะนำครับ
>
> "Hello, how are you?
> I'm fine, thank you. Where are you going today?
> Today I'm going to visit Chiang Mai. Have you ever been?
> Yes, I have. It's very beautiful. The weather is nice too.
> You have to try khao soi as well -- it's really delicious.
> Of course! And go to the night market too, things are very cheap.
> Great, thank you for the recommendation."

The preview is a scrollable screen showing the Thai text prominently, with romanization and translation below. A button at the bottom says "Start from [current lesson name]" to take the user back to where they left off.

**Implementation approach:**
- Add a `skillPreview` field to each `RichLesson` definition: `{ heading: string, examples: { thai: string, romanization: string, meaning: string }[] }`
- Show all lessons on the home screen in a scrollable list grouped by phase
- Tapping a future lesson opens a lightweight preview modal/screen (not the full lesson)
- Highlight the recommended next lesson with a prominent button

---

## Implementation Priority

### Phase 1: Critical Fixes (do first)
1. **Font fix** -- fixes all Thai character rendering issues
2. **Chapter navigation with skill previews** -- show all lessons, add preview for locked ones

### Phase 2: Content Enrichment (main effort)
3. **Revise R01-R05** -- add keyword vocabulary, second words, mini-phrases
4. **Revise R06-R10** -- add real word examples for each vowel, introduce simple sentences
5. **Revise R11-R15** -- integrate vocabulary, add sentences, accelerate reading practice

### Phase 3: Assessment Enhancement
6. **Add cultural/fun-fact questions** -- mix into existing assessments across all phases
7. **Add pattern recognition questions** -- especially in vowel and reading phases
8. **Revise R16-R30 assessments** -- ensure vocabulary is taught before it's tested
