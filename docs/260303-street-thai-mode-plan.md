# Street Thai Mode + Dark Mode Plan

> **Date:** 2026-03-03
> **Status:** Draft
> **Author:** AI-assisted

## Overview

Add two toggles to the app: (1) a **dark mode** for UI theming, and (2) a **"Street Thai" mode** (internally called "evil mode") that replaces the normal curriculum with an entirely separate set of 10 chapters teaching crude, hilarious, and genuinely useful informal Thai -- the kind of Thai that textbooks refuse to teach. Crude pronouns, animal insults, tonal disasters, drunk karaoke, haggling like a maniac, and Thai internet slang.

When Street Thai mode is toggled on, the home screen shows a completely different lesson set with different phase names, titles, and content. The normal 30-lesson curriculum is hidden. Toggle off = back to normal.

---

## Problem & Context

### Problem Statement

The app teaches proper, textbook Thai. But real Thai -- especially the kind you hear on the street, at night markets, in bars, and in group chats -- is wildly different. There is an entire register of Thai that is crude, funny, and extremely useful for anyone actually living in or visiting Thailand. This mode captures that.

### Goals

- Add a dark mode toggle (UI theme)
- Add a Street Thai mode toggle that swaps the entire lesson set
- 10 Street Thai chapters, each with detailed vocabulary, phrases, dialogues, and exercises
- Content should be genuinely funny, crude, and educational
- Reuse the existing lesson infrastructure (same `RichLesson` type, same step kinds, same rendering)

### Non-Goals

- No changes to the existing 30 normal lessons
- No new step types or exercise types
- No changes to the SRS engine (Street Thai lessons can use it as-is)
- No server-side anything -- toggles stored in localStorage

---

## Proposed Solution

### Direction

Two independent toggles in the app header:

1. **Dark mode**: Adds `dark` class to root element, Tailwind `dark:` variants handle the rest
2. **Street Thai mode**: Swaps `richLessons` array with `streetThaiLessons` array. Same `RichLesson[]` type, completely different content. Home screen shows different phase names and lessons.

### Alternatives Considered

1. **Mix street content into normal lessons** -- Rejected. The tones are completely different (formal vs crude). Mixing them confuses the learning progression.
2. **Separate app** -- Overkill. The infrastructure is identical; only the content differs.

---

## Technical Design

### Toggle State

Extend localStorage state or use a separate key:

```typescript
// New: separate from AppState to avoid migration headaches
interface AppPreferences {
  darkMode: boolean
  streetThaiMode: boolean
}
// Key: 'thai-app-preferences' in localStorage
```

### Toggle UI

Add two icon buttons in the HomeScreen header area:
- Moon/sun icon for dark mode
- A skull or devil icon for Street Thai mode (with a fun label)

### Content Architecture

```
src/content/streetThaiLessons/
  index.ts          -- exports streetThaiLessons: RichLesson[]
  chapter1.ts       -- Crude Pronouns & Basic Insults
  chapter2.ts       -- Tonal Minefield
  chapter3.ts       -- Animal Insults Encyclopedia
  chapter4.ts       -- Street Food Like a Local
  chapter5.ts       -- The Haggling Masterclass
  chapter6.ts       -- Thai Sarcasm & Passive Aggression
  chapter7.ts       -- Bar & Drunk Thai
  chapter8.ts       -- Thai Internet & Texting Slang
  chapter9.ts       -- Farang Problems
  chapter10.ts      -- Phrases That Will Get You Slapped
```

Lesson IDs: `S01` through `S10` (S for Street).
Phases: Reuse existing phase types, mapped thematically.

### Lesson Manager Changes

`lessonManager.ts` already has `getRichLessons()`. Add:

```typescript
function getActiveLessons(streetMode: boolean): RichLesson[]
```

HomeScreen checks the preference and calls accordingly.

---

## Street Thai Curriculum -- Detailed Chapter Breakdown

---

### Chapter 1: Crude Pronouns & First Insults

**Phase**: `consonants` (reused for grouping)
**Title**: "Forget Everything Your Teacher Taught You"
**Goal**: Learn the real pronouns Thai people use with friends -- and the ones that start fights.

**Intro text**: "Thai textbooks teach you ผม (phom) and ดิฉัน (dichan). Nobody under 60 actually talks like that unless they're on TV or apologizing to a cop. Real Thai people say กู and มึง, which your teacher would rather die than teach you. Time to talk like an actual human being."

#### Vocabulary

| Thai | Romanization | Meaning | Notes |
|------|-------------|---------|-------|
| กู | guu | I/me (crude) | The real "I." Used between friends. Say this to your boss and start updating your resume. |
| มึง | mueng | You (crude) | The partner of กู. Either best friends or 3 seconds from a fistfight. |
| เอ็ง | eng | You (condescending) | How your Thai mother-in-law addresses you when she thinks you're an idiot. |
| อ้าว | aao | "What the--?!" | Thai sound of pure disbelief. Like "huh?!" but ruder. |
| เฮ้ย | hoei | "Hey!" (crude) | How Thai people actually get attention. "Excuse me" is for airports and hospitals. |
| โว้ย | wooi | "OI!" (very crude) | Like เฮ้ย but cranked to 11. Reserved for screaming across a soi at 2am. |
| บ้า | baa | Crazy | Affectionate between friends (บ้าเลย = "you lunatic!"). An actual insult from strangers. |
| สัส | sat | Damn / shit (vulgar) | THE Thai swear word. Equivalent of "shit!" Used when you stub your toe, miss the bus, or realize you just ate a chili. |
| แม่ง | maeng | F*cking (intensifier) | Makes any sentence ruder. "ร้อนแม่ง" = "it's f*cking hot." Your teacher will never admit this word exists. |
| ห่า | haa | "WTF?!" (vulgar) | Raw disbelief. When someone tells you pad thai costs 200 baht. |
| ชิบหาย | chip-haai | Oh sh*t / damn it | Very common. The Thai "oh f*ck." Acceptable even on TV (barely). |
| เหี้ย | hiia | Monitor lizard / "bastard" | One of the worst single-word insults in Thai. The lizard is considered the filthiest animal. Calling someone เหี้ย is like calling them absolute scum. |
| สัตว์ | sat | Animal (as insult) | "ไอ้สัตว์!" = "You animal!" General-purpose dehumanizing insult. |
| ไอ้ | ai | Crude prefix for males | Goes before names or insults: ไอ้บ้า (you crazy bastard), ไอ้เหี้ย (you scum). |
| อี | ii | Crude prefix for females | Female version of ไอ้. "อีบ้า" = crude "you crazy woman." |

#### Key Phrases

| Thai | Romanization | English |
|------|-------------|---------|
| กูไม่เอา | guu mai ao | I don't f*cking want it |
| มึงบ้าหรอ | mueng baa raw | Are you out of your damn mind?! |
| เฮ้ย มาทางนี้โว้ย | hoei maa taang nii wooi | HEY! Get over here! |
| ชิบหาย ลืมกระเป๋าสัส | chip-haai luuem gra-bpao sat | Sh*t, I forgot my damn bag |
| อ้าว จริงหรอห่า | aao jing raw haa | Wait, seriously?! WTF?! |
| ร้อนแม่ง | rawn maeng | It's f*cking hot |
| หิวแม่ง | hiu maeng | I'm f*cking hungry |
| เหนื่อยสัส | nuueai sat | I'm damn tired |

#### Dialogue: "Two friends at 7-Eleven at 3am"

- **A**: เฮ้ย มึงจะเอาอะไรโว้ย (HEY what do you want?!)
- **B**: กูเอาเบียร์สัส (I want beer, damn it)
- **A**: บ้าเลย ตีสามเอาเบียร์ (You maniac, it's 3am and you want beer?!)
- **B**: อ้าว แล้วมึงล่ะห่า (And what about you, huh?!)
- **A**: กูเอาน้ำเปล่า กูเป็นคนดี (Water for me. I'm a good person.)
- **B**: โว้ย คนดีหัวควาย คนดีไม่มาเซเว่นตีสาม (Yeah right, "good person" my ass. Good people don't come to 7-Eleven at 3am.)
- **A**: ...เอาเบียร์สองขวดแม่ง (Fine, two bottles of beer, dammit.)

#### Assessment Questions (6)

1. "What does กู mean?" -- I/me (crude) / You / He/she / Please
2. "Your friend does something spectacularly idiotic. You shout..." -- บ้าเลยมึง / ขอบคุณครับ / สวัสดีค่ะ / ยินดีที่ได้รู้จัก
3. "สัส is used when..." -- Greeting someone politely / You stub your toe or something goes wrong / Ordering food / Saying goodbye
4. "What does ชิบหาย express?" -- Gratitude / "Oh sh*t" frustration / Happiness / A polite request
5. "กู and มึง are used between..." -- A student and teacher / Close friends (or people about to fight) / At a job interview / In a letter to the king
6. "What does เหี้ย literally mean?" -- Cat / Monitor lizard (worst insult) / Butterfly / Puppy

---

### Chapter 2: The Tonal Minefield

**Phase**: `vowels`
**Title**: "One Wrong Tone and You Just Said WHAT"
**Goal**: Learn words where a slight tonal shift turns an innocent sentence into a catastrophe, an insult, or an accidental proposition.

**Intro text**: "Thai has 5 tones. Get one wrong and 'beautiful' becomes 'unlucky,' 'near' becomes 'far,' and 'rice' becomes something your grandmother would slap you for saying. These are the tonal landmines that every foreigner steps on. Repeatedly. While Thai people try not to laugh. And fail."

#### Tonal Disasters Table

| Correct | Romanization | Meaning | Wrong Tone | Wrong Meaning | What Happens |
|---------|-------------|---------|------------|---------------|-------------|
| สวย | suuai (rising) | Beautiful | ซวย suuai (falling) | Unlucky | You told her she's UNLUCKY. She was expecting a compliment. You are now single. |
| ใกล้ | glai (falling) | Near | ไกล glai (mid) | Far | You asked "Is it near?" They said "Yes, near." You heard "far" and walked 3km the wrong direction. Classic farang moment. |
| ข้าว | khaao (falling) | Rice | เข้า khao (rising) | To enter | You asked to enter the rice. The vendor is staring. |
| หมา | maa (rising) | Dog | ม้า maa (high) | Horse | "I have two cute dogs at home" -> "I have two cute horses at home." Pet shop guy checks if you're serious. |
| สี่ | sii (low) | Four | ซี้ sii (high) | Very close friend / dead | Asking for 4 somethings but accidentally saying something died. Chaos at the market. |
| เผา | phao (rising) | To burn/grill | เผ่า phao (low) | Tribe | Ordering "grilled chicken" but saying "tribe chicken." Anthropology, not dinner. |
| คาง | khaang (mid) | Chin | ค้าง khaang (high) | Stuck/overnight | "Your chin is beautiful" -> "You stayed overnight beautifully." Romantic? Creepy? Both? |
| สุก | suk (low) | Ripe/cooked | ศึก suek (low) | War | "Is the mango ripe?" -> "Is the mango war?" The fruit vendor has questions. |
| พริก | phrik (low) | Chili | พริ้ง phring (high) | Pretty/charming | "More chili please" -> "More pretty please." The vendor is flattered but confused. |

#### Key Phrases (What You Meant vs What You Actually Said)

| What you meant to say | What came out of your mouth | Aftermath |
|----------------------|---------------------------|-----------|
| คุณสวยมาก (You're very beautiful) | คุณซวยมาก (You're very unlucky) | She walks away. You wonder what went wrong. Everything. Everything went wrong. |
| มันใกล้ไหม (Is it near?) | มันไกลไหม (Is it far?) | You asked the opposite question and got directions to the opposite place. You're now in a different province. |
| ผมอยากได้หมา (I want a dog) | ผมอยากได้ม้า (I want a horse) | The pet shop lady calls her husband for backup. |
| ขอข้าวผัดหนึ่งจาน (One fried rice please) | ขอเข้าผัดหนึ่งจาน (One enter-stir-fry please) | The cook stares. You point at the menu. Crisis averted. Dignity not averted. |
| มีหมาสองตัว (I have two dogs) | มีม้าสองตัว (I have two horses) | Your neighbor now thinks you're rich and starts being suspiciously friendly. |

#### Dialogue: "The Tonal Disaster Date"

- **Him**: คุณสวยมาก (You're very beautiful)
- **Her**: ขอบคุณค่ะ (Thank you)
- **Him** (wrong tone): อยากกินข้าว... เอ่อ... (Want to eat ri-- uh...)
- **Her**: อะไรนะ (What?)
- **Him**: ข้าว! ข้าว! RICE! (Rice! Rice! RICE!)
- **Her**: 555 ฝรั่งน่ารัก (Hahaha cute farang)
- **Him** (trying again): มีหมาน่ารัก... (I have a cute dog--)
- **Her**: ม้าหรอ? มีม้าที่ไหน! (A horse?! Where do you keep a horse?!)
- **Him**: ...กูยอมแพ้แม่ง (...I f*cking give up)

#### Assessment Questions (6)

1. "You want to say 'beautiful' (สวย). Wrong tone gives you..." -- ซวย (unlucky) / Happy / Delicious / Tall
2. "ใกล้ means 'near.' ไกล means..." -- Also near / Far (the exact opposite) / Beautiful / Spicy
3. "You proudly tell someone หมาของผมน่ารัก. But with wrong tone it becomes..." -- My horse is cute / My dog is cute / My cat is cute / My chin is cute
4. "Which tonal disaster is most likely to end a first date?" -- ข้าว/เข้า / สวย/ซวย / หมา/ม้า / สี่/ซี้
5. "How many tones does Thai have?" -- 3 / 4 / 5 / 7
6. "A foreigner says คุณซวยมาก to a Thai woman. What did he accidentally tell her?" -- You're very beautiful / You're very unlucky / You're very tall / You're very kind

---

### Chapter 3: The Animal Insult Encyclopedia

**Phase**: `reading`
**Title**: "The Thai Zoological Guide to Telling People They Suck"
**Goal**: Master the Thai art of animal-based insults -- the most culturally rich and creative way to tell someone exactly what you think of them.

**Intro text**: "Forget Shakespeare. Thai people have perfected the art of the insult using the animal kingdom. ควาย (buffalo) = you're an idiot. หมู (pig) = you're a disgusting slob. เหี้ย (monitor lizard) = you are the lowest form of life. Each animal carries a surgically precise insult. By the end of this chapter you'll be able to construct Thai insults with the vocabulary of a Bangkok taxi driver."

#### Vocabulary

| Thai | Romanization | Animal | Insult Meaning | Example |
|------|-------------|--------|---------------|---------|
| ควาย | khwaai | Buffalo | Stupid / thick-skulled | The undisputed king of Thai insults. "ไอ้ควาย!" = "You absolute moron!" Heard in traffic approximately 400 times per day in Bangkok. |
| หมู | muu | Pig | Greedy / messy / lazy | "กินเหมือนหมู" = "Eats like a pig." Also: "อ้วนเหมือนหมู" = "Fat as a pig." Not subtle. |
| ลิง | ling | Monkey | Hyperactive / annoying / can't sit still | For children AND adults who act like children. "นั่งนิ่งๆ สิ ไอ้ลิง!" = "Sit still, you monkey!" |
| หมา | maa | Dog | Shameless / low | "อย่าทำตัวเหมือนหมา" = "Don't act like a dog." Reserved for people with zero dignity. |
| งู | nguu | Snake | Two-faced / backstabber | "ระวัง เขาเป็นงู" = "Watch out, she's a snake." For the coworker who smiles at you then talks behind your back. |
| จระเข้ | jaw-ra-khee | Crocodile | Womanizer / player | For men who flirt with anything that moves. "ไอ้จระเข้!" = every Thai soap opera, every episode. |
| แมงดา | maeng-daa | Horseshoe crab | Man who lives off women's money | Extremely specific, extremely cutting. Thai women use this like a scalpel. |
| กบ | gop | Frog | Brags beyond ability | The guy who claims he can fight but runs when trouble starts. All croak, no bite. |
| เต่า | dtao | Turtle | Painfully slow | "เร็วหน่อยสิ ไอ้เต่า!" = "MOVE IT, you turtle!" Said to every slow driver in Thailand. |
| ไก่ | gai | Chicken | Coward | "ไก่อ่อน" = chicken, pushover, easy target. Also used for scam victims. |
| หมูหมา | muu-maa | Pig-dog (combo) | Worthless / beneath contempt | When one animal isn't enough. |
| อีแร้ง | ii-raeng | Vulture | Opportunist / scavenger | For people who show up only when there's something to gain. |

#### Key Phrases

| Thai | Romanization | English |
|------|-------------|---------|
| ไอ้ควาย เร็วหน่อยสิโว้ย | ai khwaai rew noi si wooi | HURRY UP you f*cking buffalo! |
| กินเหมือนหมูสัส | gin muean muu sat | Eats like a damn pig |
| อย่าเป็นไก่อ่อนสิ | yaa bpen gai on si | Don't be such a chicken, come on |
| ระวังนะ ไอ้จระเข้ตัวนั้น | ra-wang na ai jaw-ra-khee dtua nan | Watch out for that crocodile (player) |
| มึงเป็นลิงหรอ นั่งนิ่งๆ สิสัส | mueng bpen ling raw, nang ning ning si sat | Are you a damn monkey? SIT STILL |
| ช้าเหมือนเต่าแม่ง | chaa muean dtao maeng | Slow as a f*cking turtle |
| ไอ้แมงดา หาเงินเองบ้างสิ | ai maeng-daa haa ngoen eng baang si | You leech, earn your own damn money |

#### Dialogue: "Bangkok Taxi Road Rage"

- **Taxi Driver**: เฮ้ย ไอ้ควาย! ขับรถเป็นไหมห่า! (HEY buffalo! Can you even f*cking drive?!)
- **Other Driver**: โว้ย! มึงตาบอดหรอสัส ไฟแดงอยู่! (OI! Are you blind, dammit? It's a red light!)
- **Taxi Driver**: อ้าว กูเห็น แต่มึงช้าเหมือนเต่า ถ้าช้ากว่านี้ต้องถอยหลัง (I saw it, but you're so slow you'd have to go backwards to be any slower)
- **Other Driver**: ไอ้จระเข้ปากดี (You're a real loudmouth crocodile)
- **Taxi Driver**: ไอ้ลิง จะมาสอนกูขับรถหรอ (You monkey, you're going to teach ME how to drive?)
- **Passenger** (you, in the back): ......ขอลงตรงนี้ครับ (I'll get out here please)

#### Assessment Questions (6)

1. "ควาย as an insult means..." -- Fast / Stupid / Beautiful / Rich
2. "Someone calls a man จระเข้. They're calling him..." -- Strong / A womanizer / Tall / Smart
3. "How do you scream 'Hurry up you turtle!'?" -- เร็วหน่อย ไอ้เต่า / ช้าหน่อย ไอ้เต่า / ดีมาก ไอ้เต่า / สวยมาก ไอ้เต่า
4. "Which animal = coward in Thai?" -- ควาย / ไก่ / งู / หมู
5. "เขาเป็นงู means..." -- She is a snake (two-faced backstabber) / She likes snakes / She is scared of snakes / She found a snake
6. "แมงดา is the insult for..." -- A fast runner / A man who lives off women's money / A good cook / A loud singer

---

### Chapter 4: Street Food Ordering (Drop the Politeness)

**Phase**: `tones`
**Title**: "Bark Your Order Like a Bangkok Local"
**Goal**: Learn to order street food the way Thai people actually do -- fast, direct, zero "please," zero patience.

**Intro text**: "Your phrasebook says ขอ...ครับ/ค่ะ (may I please have...). Use that at a Bangkok street stall and the vendor will add 20 baht to your bill for wasting their time. Real Thai: point, grunt, specify. เอาอันนี้! (This one!) ไม่เอาผัก! (NO vegetables!) พิเศษ! (LARGE!) You're not at a restaurant. You're at war with lunch."

#### Vocabulary

| Thai | Romanization | Meaning | Notes |
|------|-------------|---------|-------|
| เอา | ao | Want / give me | The only word you actually need. Point and say เอา. Done. |
| ไม่เอา | mai ao | Don't want | Said with the same energy as swatting a fly. |
| อันนี้ | an nii | This one | Point aggressively. |
| เผ็ด | phet | Spicy | WARNING: Thai "a little spicy" = farang "my mouth is dying" |
| เผ็ดมาก | phet maak | Very spicy | You will regret this. You will order it anyway. |
| เผ็ดน้อย | phet noi | A little spicy | They will ignore this and make it spicy anyway. |
| ไม่เผ็ด | mai phet | Not spicy | The vendor will look at you with pity. |
| พิเศษ | phi-set | Special (= LARGE portion) | The magic word. 10 baht more, 2x the food. Always say this. |
| ใส่ถุง | sai thung | Put in bag (takeaway) | Thai street food comes in plastic bags. Yes, soup too. In a bag. Deal with it. |
| กินที่นี่ | gin thii nii | Eat here | If there's a plastic chair, you're dining in. |
| ไม่ใส่ผัก | mai sai phak | No vegetables | The universal farang request. |
| ไม่ใส่ผักชี | mai sai phak-chii | No coriander | The REAL universal battle. Half the world hates coriander. The other half is wrong. |
| ไม่หวาน | mai waan | Not sweet | You will say this. They will add sugar anyway. This is Thailand. |
| ข้าวเพิ่ม | khaao phoeem | Extra rice | Because one scoop is never enough. |
| เก็บเงิน | gep ngoen | Check please | Literally "collect money." Efficient. |
| เอาซ้ำ | ao sam | Same thing again | When it was so good you need round two. |

#### Key Phrases

| Thai | Romanization | English | Reality |
|------|-------------|---------|---------|
| เอาข้าวผัดพิเศษ ไม่ใส่ผักชีสัส | ao khaao phat phi-set mai sai phak-chii sat | Large fried rice, NO damn coriander | Your daily mantra |
| เผ็ดน้อยนะ จริงๆ นะ เผ็ดน้อย | phet noi na, jing jing na, phet noi | A LITTLE spicy. I mean it. LITTLE. | They don't care. It's going to be spicy. |
| พิเศษเลย ข้าวเพิ่มด้วย | phi-set loei khaao phoeem duuai | Large, and extra rice | This is how you eat for 50 baht and not move for 3 hours |
| อร่อยมาก เอาซ้ำอีก | a-roi maak ao sam iik | Delicious. Same thing again. | The vendor loves you now |
| แพงไปห่า ร้านข้างๆ ถูกกว่า | phaeng bpai haa, raan khaang khaang thuuk gwaa | That's f*cking expensive, the place next door is cheaper | Nuclear option for overcharging |

#### Dialogue: "Ordering som tam from a vendor who takes no prisoners"

- **You**: เอาส้มตำหนึ่ง (One som tam)
- **Vendor**: เผ็ดไหม (Spicy?)
- **You**: เผ็ดน้อยนะ (A little spicy)
- **Vendor**: *(puts in 5 chilies)*
- **You**: เฮ้ย! บอกว่าเผ็ดน้อย! (HEY! I said a LITTLE!)
- **Vendor**: นี่น้อยแล้ว ปกติใส่สิบ (This IS a little. Normally I put 10.)
- **You**: ......สัส (......damn)
- **Vendor**: กินไม่ได้หรอ ไก่อ่อน (Can't handle it? Chicken.)
- **You**: กินได้! เอามา! *(takes one bite, entire face turns red)* (I can handle it! Give it! *dies*)
- **Vendor**: 555 ฝรั่งหน้าแดง (Hahaha red-faced farang)
- **You**: ......น้ำเปล่าห้าขวด (...five bottles of water)

#### Assessment Questions (6)

1. "How do you say 'No damn coriander'?" -- ไม่ใส่ผักชี / เอาผักชี / ผักชีดี / ผักชีเผ็ด
2. "What does พิเศษ mean when ordering food?" -- Special = large portion / Expensive / Spicy / Takeaway
3. "You want bubble tea not sweet. Reality?" -- เอาชานม ไม่หวาน (they add sugar anyway) / เอาชานม หวานมาก / เอาน้ำเปล่า / เอาเบียร์
4. "ใส่ถุง means..." -- Eat here / Put in a bag / Add more / No spicy
5. "Thai 'a little spicy' for a farang is..." -- Actually mild / Still extremely spicy / Not spicy at all / Ice cold
6. "The vendor says 'ไก่อ่อน.' She just called you..." -- Delicious / A chicken (coward/wimp) / Beautiful / Smart

---

### Chapter 5: The Haggling Masterclass

**Phase**: `sentences`
**Title**: "Thai Price vs Farang Price: A War Story"
**Goal**: Learn the art of haggling -- fake outrage, dramatic walk-aways, and the ancient battle to avoid the farang tax.

**Intro text**: "Every market in Thailand has two prices: the Thai price and the farang price. The farang price is activated the instant they see your face, hear your accent, or notice your sunburn. The markup ranges from 'cheeky' (2x) to 'criminal' (10x). Haggling isn't rude -- it's a competitive sport. Not haggling is considered a sign of either extreme wealth or extreme stupidity. Either way, they win."

#### Vocabulary

| Thai | Romanization | Meaning | Tactical Notes |
|------|-------------|---------|---------------|
| แพง | phaeng | Expensive | Say it like you've been personally offended. |
| แพงไป | phaeng bpai | Too expensive | Your opening move. Always. Even if it's actually cheap. |
| แพงบ้าไปแล้ว | phaeng baa bpai laew | Insanely expensive | When they quote 3x the real price. Add disbelief to your face. |
| ถูก | thuuk | Cheap | The goal. The dream. The reason you're here. |
| ลดได้ไหม | lot dai mai | Can you lower the price? | Polite version. Use at the start. |
| ลดหน่อยสิ | lot noi si | Come on, lower it | Less polite. More effective. |
| ราคาสุดท้าย | raa-khaa sut-thaai | Final price? | The closing question. |
| ไม่เอาแล้ว | mai ao laew | I don't want it anymore | THE nuclear weapon. Start walking. They will call you back 80% of the time. |
| ที่อื่นถูกกว่า | thii uuen thuuk gwaa | Other places are cheaper | May or may not be true. Doesn't matter. |
| ให้ราคาคนไทยหน่อย | hai raa-khaa khon thai noi | Give me Thai price | The audacity move. They'll laugh. Then they'll lower it. |
| ซื้อสองชิ้นลดไหม | suue sawng chin lot mai | Buy two, discount? | Bulk discount gambit. |
| โกงฝรั่ง | goong farang | Cheating the foreigner | What you're trying to prevent. |
| เอาเท่านี้ | ao thao nii | I'll pay this much (counter-offer) | Slap your money on the table. Power move. |

#### Haggling Tactic Phrases

| Thai | English | Tactic |
|------|---------|--------|
| อ้าว! แพงบ้าไปแล้ว! | What?! That's INSANE! | Opening shock -- exaggerate wildly |
| ที่ร้านข้างๆ สามร้อย | The shop next door is 300 | Competitor pressure (may be fictional) |
| ไม่เอาแล้ว ขอบคุณ | Don't want it anymore, thanks | The walk-away -- most powerful weapon |
| โอเค ถ้าไม่ลดกูไปร้านอื่น | OK, if no discount I'm going elsewhere | Ultimatum |
| ให้ราคาคนไทยได้ไหม กูอยู่ไทยมานาน | Can I get Thai price? I've lived here ages | The long-term resident card |
| ซื้อสามชิ้น ลดหน่อยสิ | Buying three, come on, give a discount | Volume gambit |

#### Dialogue: "Chatuchak Market -- Level Boss"

- **You**: อันนี้เท่าไหร่ (How much?)
- **Vendor**: หกร้อยบาทค่ะ (600 baht)
- **You**: หกร้อย?! ห่า! แพงบ้าไปแล้ว! (600?! WTF! That's insanely expensive!)
- **Vendor**: คุณภาพดีค่ะ ของแท้ค่ะ (Good quality. Authentic.)
- **You**: ของแท้... สามร้อย ไม่งั้นไปร้านข้างๆ (Authentic... 300. Otherwise I'm going next door.)
- **Vendor**: ไม่ได้ค่ะ ทุนยังห้าร้อยเลย (Can't. My cost is already 500.)
- **You**: *(starts walking away)* ขอบคุณนะ (Thanks anyway)
- **Vendor**: เดี๋ยวๆ! สี่ร้อยห้าสิบ! (Wait wait! 450!)
- **You**: *(turns around slowly)* สามร้อยห้าสิบ ราคาสุดท้าย (350. Final offer.)
- **Vendor**: ...สี่ร้อย ไม่ลดแล้ว จริงๆ (400. No more discount. Seriously.)
- **You**: *(long pause)* ...โอเค เอา (OK. I'll take it.)
- **Vendor** (to coworker): ฝรั่งคนนี้ต่อเก่งสัส (This farang haggles like a damn pro)

#### Assessment Questions (6)

1. "What does แพงบ้าไปแล้ว mean?" -- Very cheap / Insanely expensive / Very good / Very delicious
2. "Most powerful haggling tactic?" -- ไม่เอาแล้ว (walk away) / ขอบคุณครับ / สวัสดีครับ / ดีมาก
3. "ลดได้ไหม means..." -- Can you add more? / Can you lower the price? / Is it spicy? / Where is it?
4. "The vendor says หกร้อยบาท. That's..." -- 60 baht / 600 baht / 6,000 baht / 6 baht
5. "What does ราคาสุดท้าย mean?" -- First price / Thai price / Final price / Tourist price
6. "How do you ask for Thai price?" -- ให้ราคาคนไทยหน่อย / เอาราคาฝรั่ง / แพงไป / ถูกมาก

---

### Chapter 6: Thai Sarcasm & Passive Aggression

**Phase**: `dialogues`
**Title**: "The Smile That Means 'I Hate You'"
**Goal**: Decode Thai sarcasm, passive aggression, and the art of destroying someone while smiling politely.

**Intro text**: "Thailand is called the Land of Smiles. Nobody mentions that at least half of those smiles mean 'I want to set you on fire.' Thai people have perfected the art of insulting you so politely that you say ขอบคุณ (thank you) in response. This chapter teaches you to hear what they ACTUALLY mean. Spoiler: it's never good."

#### Vocabulary -- Sarcasm Edition

| Thai | Romanization | What It Literally Means | What It ACTUALLY Means |
|------|-------------|------------------------|----------------------|
| เก่งจัง | geng jang | Wow, so talented! | "You just spectacularly screwed up and I'm savoring every moment of it" |
| น่ารักจัง | naa-rak jang | How cute! | 50% chance genuine. 50% chance she's about to destroy you. Coin flip. |
| ดีจัง | dii jang | So good! | "Well isn't that just WONDERFUL" (it is not wonderful) |
| ไม่เป็นไร | mai bpen rai | It's fine / never mind | "It is absolutely NOT fine. I will remember this until one of us dies." |
| ช่างมัน | chang man | Forget it | "I have given up trying to explain this to your buffalo brain" |
| เรื่องมาก | rueang maak | So dramatic / drama queen | "You're being insufferable and everyone thinks so" |
| ตามสบาย | dtaam sa-baai | As you like | "Go ahead. Make that mistake. I'll watch." |
| ก็ได้ | gor dai | Sure, whatever | "I completely disagree but fighting you isn't worth my energy" |
| จริงหรอ | jing raw | Really? | "I know you're lying. You know I know you're lying. We both know." |
| แล้วแต่ | laew dtae | Up to you | "I'm not choosing because no matter what I pick you'll complain and I'll want to throw something" |

#### What They Say vs What They Mean

| What They Say | What It ACTUALLY Means | Warning Level |
|-------------|----------------------|--------------|
| เก่งจัง ทำแก้วแตกอีกแล้ว (So talented! You broke ANOTHER glass!) | "That's the third glass this week. I'm keeping count." | HIGH |
| ไม่เป็นไร *(with tight smile)* | "I am building a detailed case against you in my mind and it has 47 exhibits" | EXTREME |
| ตามสบายเลย (As you like!) | "This is your LAST chance to reconsider. The wrong answer has consequences." | CRITICAL |
| ก็ดีนะ (Well, that's good then) | "Nothing about this is good. Not one thing." | HIGH |
| โอ๋ จริงหรอ (Oh, really?) | "I can smell your bullsh*t from across the room" | HIGH |
| เชิญเลย (Go right ahead) | "Please proceed so I can watch you fail" | MEDIUM |
| ไม่ว่าอะไรหรอก (I don't mind at all) | "I mind. I mind A LOT." | EXTREME |

#### Dialogue: "Thai Couple Fight (passive-aggressive championship round)"

- **Her**: วันนี้กินอะไรดี (What should we eat today?)
- **Him**: แล้วแต่เธอ (Up to you)
- **Her**: ก็ได้ ไปกินส้มตำ (OK, som tam)
- **Him**: ...ก็ได้ (Sure... whatever)
- **Her**: ไม่ชอบหรอ (You don't like it?)
- **Him**: ไม่เป็นไร ตามสบาย (It's fine. As you like.)
- **Her**: พูดตรงๆ สิ ไม่ชอบอะไร (Just say it directly. What don't you like?)
- **Him**: ไม่มีอะไร จริงๆ (Nothing. Really.)
- **Her**: เก่งจัง โกหกเก่งมาก (So talented! SO great at lying.)
- **Him**: กูไม่ได้โกหก! (I'm not lying!)
- **Her**: ก็ดีนะ *(smile)* (Well, that's good then. *(smile)*)
- **Him**: *(realizes he's already lost)*

#### Assessment Questions (6)

1. "Your Thai friend says เก่งจัง after you drop your phone for the third time. She means..." -- Genuine admiration / Sarcastic mockery / She wants your phone / She's worried
2. "ไม่เป็นไร with a tight smile means..." -- Everything is truly fine / She forgives you / She is NOT fine and is building a case / She didn't notice
3. "When is แล้วแต่ passive-aggressive?" -- Always / When said with a sigh or flat tone / Never / Only on weekdays
4. "What does เรื่องมาก mean?" -- Interesting story / You're being a drama queen / Good news / Big event
5. "She says ตามสบาย. You should..." -- Choose VERY carefully / Ignore her / Say ตามสบาย back / Leave the country
6. "The deadliest Thai sarcasm sounds..." -- Angry and loud / Polite, smiling, and sweet / Silent / Like a question

---

### Chapter 7: Bar & Drunk Thai

**Phase**: `consonants`
**Title**: "Karaoke Survival and Other Regrettable Decisions"
**Goal**: Essential vocabulary for nightlife, drinking, drunk declarations of love, and the inevitable morning after.

**Intro text**: "Every great Thai story starts with 'เอาเบียร์อีกขวด' (one more bottle) and ends with 'จะอ้วก ห้องน้ำอยู่ไหน' (going to vomit, where's the bathroom). In between: terrible karaoke, declarations of eternal friendship to strangers, and lies about how drunk you are. This is that chapter."

#### Vocabulary

| Thai | Romanization | Meaning | Notes |
|------|-------------|---------|-------|
| เมา | mao | Drunk | The most important word in Thai nightlife |
| เมามาก | mao maak | Very drunk | What you are |
| เมาแล้ว | mao laew | Already drunk | Honest assessment (rare) |
| ไม่เมา | mai mao | Not drunk | THE LIE. The biggest lie in Thailand. |
| กูไม่เมา | guu mai mao | I'm NOT drunk (crude) | Said while unable to stand. Every time. |
| เบียร์ | biia | Beer | The fuel |
| เหล้า | lao | Liquor / booze | The accelerant |
| อีกแก้ว | iik gaew | One more glass | Famous last words, part 1 |
| อีกขวด | iik khuat | One more bottle | Famous last words, part 2 |
| เช็คบิล | chek bin | Check please | The moment of painful truth |
| ร้องเพลง | rawng phleng | To sing (karaoke) | Where dignity goes to die |
| ร้องไม่เพราะ | rawng mai phraw | Sings terribly | What every drunk person does |
| ร้องเพราะ | rawng phraw | Sings beautifully | What every drunk person THINKS they do |
| จะอ้วก | ja uak | Going to vomit | THE emergency phrase. Memorize it. |
| ปวดหัว | bpuat hua | Headache | Tomorrow's problem, today |
| แฮงค์ | haeng | Hangover | From English. Proof that Thai adopts only the most important English words. |
| ห้องน้ำอยู่ไหน | hawng-naam yuu nai | Where is the bathroom? | The urgency of this question increases exponentially after midnight |
| เรียกแท็กซี่ | riiak taek-sii | Call a taxi | The final boss of the night |
| กูรักมึง | guu rak mueng | I love you, man (crude) | Every drunk Thai man to his best friend at 2am. Every single time. |
| พรุ่งนี้ไม่กิน | phrung-nii mai gin | Tomorrow I won't drink | The lie told every morning. Believed by nobody. |

#### Key Phrases

| Thai | Romanization | English | Stage of Night |
|------|-------------|---------|---------------|
| เอาเบียร์อีกขวด | ao biia iik khuat | Another bottle of beer | 9 PM: Optimism |
| กูไม่เมา กูแค่มีความสุข | guu mai mao, guu khae mii khwaam suk | I'm not drunk, I'm just happy | 11 PM: Denial |
| เพลงนี้เพลงกูสัส | phleng nii phleng guu sat | This is MY damn song! | 11:30 PM: Peak confidence |
| มึงร้องเพราะแม่ง! โกหก! | mueng rawng phraw maeng! goo-hok! | You sing great! LIE! | Midnight: Brutal honesty |
| กูรักมึงนะโว้ย มึงเป็นเพื่อนที่ดีที่สุด | guu rak mueng na wooi mueng bpen phuean thii dii thii sut | I LOVE you man! You're the best friend! | 12:30 AM: Drunk love |
| จะอ้วก ห้องน้ำอยู่ไหนสัส | ja uak hawng-naam yuu nai sat | Going to vomit WHERE IS THE DAMN BATHROOM | 1 AM: Emergency |
| เรียกแท็กซี่ให้หน่อย กลับบ้านไม่ไหวแม่ง | riiak taek-sii hai noi glap baan mai wai maeng | Call me a taxi, I can't f*cking get home | 2 AM: Surrender |
| พรุ่งนี้จะไม่กินเหล้าแล้ว จริงๆ | phrung-nii ja mai gin lao laew jing jing | Tomorrow I'll stop drinking. For real. | 8 AM: The lie |

#### Dialogue: "The Karaoke Timeline of Destruction"

- **9 PM A**: เอาเบียร์สองขวด เริ่มกันเลย! (Two bottles of beer, let's GO!)
- **10 PM B**: ร้องเพลงกันเถอะ! กูร้องก่อน! (Let's sing! ME FIRST!)
- **10:30 A**: เพราะมากเลยมึง *(lying)* (You sound amazing *(lying)*)
- **11 PM B**: เพลงนี้เพลงกูสัส! ไม่มีใครร้องได้เท่ากู! (This is MY damn song! Nobody sings it like me!)
- **11 PM A**: มึงร้องไม่เพราะเลยสัส แต่กูรักมึง (You sing like garbage but I love you man)
- **11:30 A**: อีกขวด! อีกขวด! (Another bottle! Another bottle!)
- **12 AM B**: กูเมาแล้ว... (I'm drunk already...)
- **12 AM A**: กูไม่เมา! กูยังไหว! *(falls off chair)* (I'm NOT drunk! I'm fine! *(falls off chair)*)
- **12:30 A**: ...จะอ้วกสัส ห้องน้ำห้องน้ำห้องน้ำ (going to vomit damn it bathroom bathroom bathroom)
- **1 AM A**: กูรักมึงนะ มึงเป็นเพื่อนที่ดีที่สุดในโลก *(crying)* (I love you man, you're the best friend in the world *(crying)*)
- **Next morning A**: ปวดหัวแม่ง... พรุ่งนี้ไม่กินเหล้าแล้วจริงๆ (F*cking headache... seriously quitting drinking tomorrow)
- **Next evening A**: เฮ้ย ไปกินเบียร์ไหม (Hey, wanna go drink beer?)

#### Assessment Questions (6)

1. "เมา means..." -- Happy / Drunk / Hungry / Tired
2. "How do you say 'check please' at a bar?" -- เช็คบิล / เอาเบียร์ / เก่งจัง / กลับบ้าน
3. "จะอ้วก is an emergency phrase meaning..." -- I'm hungry / I'm about to vomit / I'm sleepy / I want more beer
4. "กูไม่เมา is typically..." -- True / A lie / Said by sober people / A morning greeting
5. "What does กูรักมึง mean at 2am?" -- A marriage proposal / Drunk man telling his friend he loves him / An insult / A song lyric
6. "พรุ่งนี้ไม่กินเหล้าแล้ว is..." -- A firm commitment / The biggest lie in Thailand / A toast / A greeting

---

### Chapter 8: Thai Internet & Texting Slang

**Phase**: `vowels`
**Title**: "555 and Other Things That Make No Sense Until Now"
**Goal**: Decode Thai internet language where numbers are words, spelling is optional, and every emotion has a sound effect.

**Intro text**: "Your Thai friend sends you '555 จุงเบย สัสแม่ง อิอิ'. You stare at your phone like it's written in ancient Sumerian. Welcome to Thai internet language, where 5 = haa (laugh), vowels are optional, everything is abbreviated, and there's a cute sound effect for every human emotion including existential dread."

#### Vocabulary

| Thai/Slang | Romanization | Meaning | Why |
|-----------|-------------|---------|-----|
| 555 | haa haa haa | Hahaha | 5 in Thai = ห้า (haa). So 555 = hahaha. More 5s = funnier. 55555555 = you're dying. |
| 5555555 | haaaaaa | ROFL / I'm dead | When something is so funny you can't type actual words |
| จุงเบย | jung boei | SO much! / Very! | Cutesy slang for จังเลย. Used by everyone under 40. |
| อิอิ | i-i | Hehe (mischievous giggle) | Cuter and more devious than 555. "I know something you don't อิอิ" |
| แงง | ngae ngae | *crying / whining sound* | Onomatopoeia. Used for everything from "my ice cream fell" to "I'm broke." |
| ชิมิ | chi-mi | Right? / Yeah? | Cute version of ใช่ไหม. |
| 55555 แงง | hahaha ngae ngae | Laughing until crying | Peak Thai internet emotion. The goal of every meme. |
| มุแง้ | mu-ngae | *pout face* | When you're sulking and want everyone to know |
| จ้า | jaa | Yes! OK! (cute) | Enthusiastic cute confirmation |
| น้า | naa | Softening particle | Makes anything sound cute. "กินข้าวน้า" = "eat rice~ " |
| เมพ | mep | Awesome / the best | Slang. "เมพมาก" = "so awesome." |
| กิก | gik | Side fling / casual thing | Someone you're dating but not "official." Thai relationship status: It's Complicated. |
| แซ่บ | saep | Spicy-delicious / hot (attractive) | Originally Isaan slang for delicious. Now also means "damn, she's hot." |
| ฮัลโหล | han-loo | Hello?? (are you even listening?) | Sarcastic "hello?" when someone says something stupid |
| อะจ๊ะ | a-ja | Oh! Hey! | Cutesy exclamation. |
| สัสแม่ง | sat maeng | F*cking damn | When 555 isn't enough. Internet Thai swearing. |
| 6666 | (unused) | NOT laugh. Just... 6. | Foreigners sometimes type 6666 thinking it works like 555. It doesn't. It means nothing. Thai people will laugh AT you, not with you. |

#### Texting Conversations

| Chat | Translation | Context |
|------|------------|---------|
| A: ดูรูปนี้สิ 55555 | A: Look at this pic hahahaha | Sending a meme |
| B: ตายแล้ว 5555555 แงง | B: I'm dead hahahaha *crying* | Meme was good |
| A: กิกมึงส่งมาอะ อิอิ | A: Your side fling sent it hehe | Stirring drama |
| B: ไม่มีกิกสัส! | B: I don't have a side fling damn it! | Denial (lying) |
| A: จริงหรอ ชิมิ อิอิ | A: Really? Right? Hehe | Not buying it |
| B: แม่ง! จริงๆ! | B: F*ck! For real! | More denial |
| A: ก็ดีนะจ้า 555 | A: Well that's good then~ hahaha | Sarcasm achieved via text |

#### Assessment Questions (6)

1. "What does 555 mean in Thai internet?" -- Help / Hahaha / I'm angry / Goodbye
2. "จุงเบย is a cute way of saying..." -- จังเลย (so much) / จริง (true) / จะ (will) / จบ (finished)
3. "Your friend sends แงง. They are..." -- Happy / Crying/whining / Angry / Ordering food
4. "A foreigner types 6666 in a Thai group chat. What happens?" -- Everyone laughs with them / Everyone laughs AT them / Nothing / It means something profound
5. "Why does 555 = laughter?" -- It looks like LOL / 5 in Thai = haa, so 555 = hahaha / Random / 5 laughs
6. "กิก means..." -- A kick / A side fling / A best friend / A teacher

---

### Chapter 9: Farang Problems

**Phase**: `reading`
**Title**: "Everything Thai People Say About You Behind Your Back"
**Goal**: Understand what Thai people say about foreigners when they think you don't understand -- and how to shock them by responding.

**Intro text**: "ฝรั่ง (farang) -- that's you. It means 'guava' but colloquially means 'white foreigner.' You are discussed constantly. Your sweat, your sunburn, your inability to eat spicy food, your haggling skills (or lack thereof), and how much they're going to overcharge you. They assume you understand zero Thai. After this lesson, you'll understand ALL of it. And the look on their faces when you respond in Thai? That alone is worth learning this entire stupid language."

#### Vocabulary

| Thai | Romanization | Meaning | Reality |
|------|-------------|---------|---------|
| ฝรั่ง | farang | Foreigner (Western) / guava | You. You are the guava. |
| ขี้นก | khii nok | Bird sh*t / loser / broke | Literally "bird droppings." Used for someone pathetic. |
| หน้าแดง | naa daeng | Red face | What Thai people see when they look at you after 10 minutes in the sun |
| เหงื่อ | nguuea | Sweat | Thai people barely sweat. You are a waterfall. They notice. |
| กลิ่น | glin | Smell | ...yes, they talk about how farangs smell different. Not always a compliment. |
| งง | ngong | Confused | Your permanent facial expression in Thailand |
| ตกใจ | dtok jai | Shocked | Thai people's expression when you speak Thai |
| กินเผ็ดได้ไหม | gin phet dai mai | Can you eat spicy? | The question you will be asked 10,000 times. It never stops. |
| กินเผ็ดไม่ได้ | gin phet mai dai | Can't eat spicy | What they assume about you (and they're usually right) |
| พูดไทยได้ | phuut thai dai | Can speak Thai | Will cause actual shock and disbelief |
| ฝรั่งขี้นก | farang khii nok | Cheap-ass foreigner | The farang who haggles over 5 baht. Don't be this person. |

#### Things Thai People Say About You (thinking you don't understand)

| Thai | English | How Often You'll Hear This |
|------|---------|--------------------------|
| ฝรั่งคนนี้หน้าแดงมาก 555 | This farang's face is SO red hahaha | Every sunny day |
| ฝรั่งเหงื่อออกเยอะจังสัส | This farang sweats so damn much | Every day above 30C (so every day) |
| ฝรั่งกินเผ็ดได้หรอ 555 | Can this farang eat spicy? Hahaha | Every meal, every restaurant, forever |
| โอ้โห ฝรั่งพูดไทยได้! | OH WOW the farang speaks Thai! | Every time, with genuine shock, even if you just said สวัสดี |
| คิดราคาเท่าไหร่ดี เพิ่มอีกสิ | How much should we charge? Add more. | When vendors see you coming |
| ฝรั่งงงแน่เลย 555 | The farang is definitely confused hahaha | When you stare at a menu for more than 3 seconds |

#### Stereotype-Busting Sentences (for fun)

These are self-aware stereotype jokes -- use them to make Thai friends laugh:

| Thai | English | Context |
|------|---------|---------|
| ฝรั่งไม่ได้ขี้นกทุกคน บางคนก็รวย *(pause)* ...แต่กูไม่ใช่ | Not all farangs are broke. Some are rich. ...But not me. | Self-deprecating humor |
| คนไทยไม่ได้ขี้เกียจทุกคน | Not all Thais are lazy. | Mock-serious stereotype busting |
| ฝรั่งไม่ได้เหม็นทุกคน | Not all farangs are stinky. | Say this and watch them crack up |

#### Survival Responses (to shock them)

| They Say About You | Your Response | Effect |
|-------------------|--------------|--------|
| ฝรั่งคนนี้... *(talking about you)* | ฟังออกนะครับ (I understand, you know) | PANIC. Pure panic. |
| กินเผ็ดได้ไหม *(condescending)* | เผ็ดกว่าคนไทยได้เลย (Spicier than Thai people, bring it) | Instant respect (if you can back it up. If not, instant regret.) |
| คิดราคาเพิ่ม *(adding foreigner tax)* | ขอราคาคนไทยนะ กูฟังออกทุกอย่าง (Thai price please. I understood everything.) | Vendor has a minor cardiac event. |

#### Dialogue: "The Food Court Ambush"

- **Vendor** (to coworker): ฝรั่งมาแล้ว คิดราคาเพิ่มอีกยี่สิบ (A farang is here. Add 20 to the price.)
- **Coworker**: ดูหน้าแดงมาก กินเผ็ดได้หรอไม่รู้ 555 (Look how red his face is. Can he even eat spicy? Hahaha)
- **You**: ขอราคาคนไทยนะครับ ผมฟังออกทุกอย่าง และกินเผ็ดกว่าคุณได้ (Thai price please. I understood everything. And I can eat spicier than you.)
- **Vendor**: !!!
- **Coworker**: ชิบหายสัส ฝรั่งพูดไทยได้! (Oh SH*T the farang speaks Thai!)
- **Vendor**: *(sweating)* ห้าสิบบาทค่ะ ...ราคาคนไทยค่ะ... (50 baht... Thai price...)
- **You**: ขอบคุณครับ *(walks away with food and dignity)*
- **Vendor** (to coworker): แม่ง เจอฝรั่งพูดไทยได้ น่ากลัว (Damn, a Thai-speaking farang. Terrifying.)

#### Assessment Questions (6)

1. "ฝรั่ง literally means..." -- French / Guava fruit / Foreigner / Friend
2. "A vendor says กินเผ็ดได้ไหม. They're asking..." -- Can you read? / Can you eat spicy? / Can you speak Thai? / Do you have money?
3. "How do you shock them with 'I understand'?" -- ฟังออกนะครับ / ไม่เข้าใจ / สวัสดี / แพงไป
4. "ฝรั่งหน้าแดง means..." -- Farang is angry / Farang has a red (sunburned) face / Farang is happy / Farang is hungry
5. "The best moment to reveal you speak Thai is..." -- When they're overcharging you / During a greeting / When ordering food / Never, keep the advantage
6. "ฝรั่งไม่ได้เหม็นทุกคน means..." -- All farangs smell great / Not all farangs are stinky / Farangs smell like flowers / What smell?

---

### Chapter 10: Phrases That Will Get You Slapped (or Loved)

**Phase**: `tones`
**Title**: "High Risk, High Reward: The Nuclear Phrases"
**Goal**: The most dangerous phrases in Thai -- bad pickup lines, things you should NEVER say to a Thai woman, and the fine line between hilarious and hospitalized.

**Intro text**: "These phrases exist on the razor edge between 'everyone laughed and you're the hero' and 'you just got slapped and the whole restaurant is staring.' Context is everything. Timing is everything. The same line that makes your Thai girlfriend crack up will make her mother disown you. The same joke between friends becomes a fight between strangers. Read carefully. Practice in a mirror. Then probably still don't say most of these."

#### Vocabulary -- The Danger Zone

| Thai | Romanization | Meaning | Danger Rating |
|------|-------------|---------|--------------|
| หล่อ | law | Handsome | SAFE -- always appreciated by men |
| สวย | suuai | Beautiful | SAFE -- basic compliment, can't go wrong |
| เซ็กซี่ | sek-sii | Sexy | RISKY -- OK with girlfriend, creepy with anyone else |
| อ้วน | uan | Fat | NEVER. NEVER EVER. Not even as a joke. Not even if she asks. ESPECIALLY if she asks. The answer is always ไม่อ้วน (not fat). |
| ผอม | phawm | Skinny | Safer, but still don't comment on anyone's body uninvited |
| แก่ | gae | Old | Say this about yourself ONLY. Saying it about ANYONE else = war. |
| น่ารัก | naa-rak | Cute/adorable | Safe. Universal. Can't go wrong. Use it for people, food, dogs, everything. |
| เจ้าชู้ | jao-chuu | Flirt / player / cheater | Accusation. If she calls you this, you're in trouble. If you call her this, you're dead. |
| หึง | hueng | Jealous | Cute if she says it about herself. Terrifying if serious. |
| เลิก | loek | Break up | THE nuclear button. Do not press unless you mean it. No backsies. |
| รักนะ | rak na | Love you (casual) | Sweet and easy |
| กูรักมึง | guu rak mueng | I love you (crude bro version) | For drunk declarations to friends only |
| คิดถึง | khit-thueng | Miss you | Always sweet. Always safe. |
| แม่ง | maeng | (intensifier) | Put it after anything to make it crude. "รักแม่ง" = "f*cking love you" |

#### Pickup Lines (Ranked by Survival Rate)

| Thai | English | Survival Rate |
|------|---------|-------------|
| ไปกินข้าวด้วยกันไหม | Want to go eat together? | 70% -- safe, classic, works because food always works in Thailand |
| คุณสวยมาก | You're very beautiful | 50% -- depends entirely on delivery. Mumble it = creepy. Say it with confidence = maybe |
| เบอร์โทรได้ไหม | Can I get your number? | 40% -- bold. Direct. Thai women either respect this or ignore you entirely. |
| คุณสวยจนผมลืมหายใจ | You're so beautiful I forgot to breathe | 20% -- SO cheesy. But some people love cheese. High risk, medium reward. |
| ผมหลงทาง...หลงรักคุณ | I'm lost... lost in love with you | 5% -- groan-worthy. She'll either laugh or walk away. Probably walk away. |
| ดวงตาคุณสวยเหมือนดาว | Your eyes are beautiful like stars | 15% -- Thai soap opera level. She knows you got this from TV. |

#### Things You Must NEVER Say (But Need to Understand)

| Thai | English | Why This Ends You |
|------|---------|------------------|
| อ้วนขึ้นหรือเปล่า | Have you gained weight? | Relationship extinction event. Even if she gained 20kg, the answer is NO. ALWAYS NO. |
| แม่ทำกับข้าวไม่อร่อย | Your mom's cooking isn't good | You will sleep outside. Possibly forever. Thai mothers' cooking is sacred. Even if it's bad. ESPECIALLY if it's bad. |
| แฟนเก่าสวยกว่า | My ex is prettier | Actual death wish. There is no context where this sentence doesn't end in catastrophe. |
| ดูแก่ขึ้น | You look older | No. Just no. In any language. On any planet. |
| มึงอ้วน | You're fat (crude) | Combining อ้วน with มึง is like combining gasoline with a match. |
| ทำไมไม่เหมือนแม่ | Why aren't you like your mother? | Comparing her unfavorably to her own mother. You've chosen death. |

#### Dialogue: "Attempting to be smooth (catastrophic failure)"

- **Him**: คุณสวยมากวันนี้ (You're very beautiful today)
- **Her**: วันนี้? แล้ววันอื่นล่ะ? ไม่สวยหรอ? (TODAY? So other days I'm NOT beautiful?)
- **Him**: เอ่อ... ทุกวันครับ! สวยทุกวัน! (Uh... every day! Beautiful every day!)
- **Her**: เก่งจัง พูดเก่ง (So talented. Great talker.) *(sarcasm)*
- **Him**: จริงๆ นะ คุณสวยที่สุดในโลก (Seriously, you're the most beautiful in the world)
- **Her**: สวยกว่าแฟนเก่าหรอ (More beautiful than your ex?)
- **Him**: *(sweating)* ...แฟนเก่า? แฟนเก่าอะไร? (...ex? What ex?)
- **Her**: อันที่โพสต์รูปในอินสตาแกรม *(shows phone)* (The one posting pictures on Instagram)
- **Him**: นั่นเพื่อน! (That's a friend!)
- **Her**: จริงหรอ~ อิอิ (Oh really~ hehe) *(does not believe a single word)*
- **Him**: ......ขอกลับบ้านได้ไหม (Can I go home please?)
- **Her**: เชิญเลย *(smile)* (Go right ahead. *(smile)*)
- **Him**: *(that smile means he's in deep trouble)*

#### Assessment Questions (6)

1. "You want to safely compliment a Thai woman. Best choice?" -- อ้วนขึ้น / สวยมาก / แก่ลง / ผอมไป
2. "Someone asks อ้วนขึ้นหรือเปล่า. The ONLY correct answer is..." -- ใช่ (yes) / อ้วนนิดหน่อย (a little) / ไม่อ้วน! (Not fat!) / ดูดีมาก (You look great)
3. "หึง means..." -- Happy / Jealous / Hungry / Tired
4. "The safest way to ask someone out?" -- ไปกินข้าวด้วยกันไหม (eat together?) / ผมรักคุณ (I love you) / เบอร์โทรหน่อย (your number) / คุณอ้วน (you're fat)
5. "แม่ทำกับข้าวไม่อร่อย will..." -- Make her laugh / End your relationship / Be forgiven quickly / Start a fun debate
6. "She says เชิญเลย with a smile. You should..." -- Actually leave / NEVER leave, she's testing you / Say thanks / Order more food

---

## Implementation Plan

| Step | Description | Validates |
|------|-------------|-----------|
| 1 | Add `AppPreferences` type + localStorage persistence | Preferences load/save correctly |
| 2 | Add dark mode toggle + Tailwind dark variant classes | Dark mode toggles on all screens |
| 3 | Write `src/content/streetThaiLessons/` (10 chapter files + index) | `npx tsc --noEmit` passes |
| 4 | Add Street Thai mode toggle + lesson swapping in `lessonManager.ts` | Home screen shows street lessons when toggled |
| 5 | Update `HomeScreen.tsx` with toggle UI and conditional rendering | Both toggles visible, functional |
| 6 | Update E2E tests or add new ones for mode switching | All tests pass |
| 7 | Full test suite | `npx tsc --noEmit && npm run build && npx playwright test` |
| 8 | Commit to dev | Clean commit |

---

## Success Criteria

- [ ] Dark mode toggle works on all screens
- [ ] Street Thai mode shows 10 completely different chapters
- [ ] Normal mode shows the original 30 lessons unchanged
- [ ] Both toggles persist across page reloads (localStorage)
- [ ] All existing E2E tests still pass
- [ ] `npx tsc --noEmit` and `npm run build` clean

---

## Design Decision: All Chapters Unlocked

Street Thai mode has **no progression gating**. All 10 chapters are unlocked from the start. There is no "current lesson" indicator, no locked/future status, and no requirement to complete one chapter before accessing another. Users can jump to any chapter freely.

This means:
- No `currentLesson` index tracking for Street Thai mode
- All lesson rows show as "available" (clickable) -- no grey/locked state
- Individual chapter completion can still be tracked (for showing a checkmark) but is not required
- The "Next Lesson" button on the home screen is hidden in Street Thai mode (or could point to a random un-completed chapter)
- SRS review still works normally if Street Thai items are added to the review queue

## Open Questions

- Should the dark mode + Street Thai mode be visually linked (e.g., Street Thai mode auto-enables dark mode for extra "evil" vibes)?
- Phase names for Street Thai chapters -- reuse existing phase types or add new ones? (Constraint: `RichLessonPhase` type only allows 6 values currently)
