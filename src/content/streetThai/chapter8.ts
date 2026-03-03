import type { RichLesson } from '../lessonTypes'

export const chapter8: RichLesson = {
  id: 'S08',
  title: '555 and Other Things That Make No Sense Until Now',
  goal: 'Decode Thai internet language where numbers are words, spelling is optional, and every emotion has a sound effect.',
  phase: 'vowels',
  order: 7,
  difficulty: 'beginner',
  prerequisites: [],
  steps: [
    {
      kind: 'text',
      content:
        "Your Thai friend sends you '555 \u0E08\u0E38\u0E07\u0E40\u0E1A\u0E22 \u0E2A\u0E31\u0E2A\u0E41\u0E21\u0E48\u0E07 \u0E2D\u0E34\u0E2D\u0E34'. You stare at your phone like it's written in ancient Sumerian. Welcome to Thai internet language, where 5 = haa (laugh), vowels are optional, everything is abbreviated, and there's a cute sound effect for every human emotion including existential dread.",
    },
    {
      kind: 'table',
      title: 'Vocabulary',
      headers: ['Thai/Slang', 'Romanization', 'Meaning', 'Why'],
      rows: [
        ['555', 'haa haa haa', 'Hahaha', '5 in Thai = \u0E2B\u0E49\u0E32 (haa). So 555 = hahaha. More 5s = funnier. 55555555 = you\'re dying.'],
        ['5555555', 'haaaaaa', 'ROFL / I\'m dead', "When something is so funny you can't type actual words"],
        ['\u0E08\u0E38\u0E07\u0E40\u0E1A\u0E22', 'jung boei', 'SO much! / Very!', 'Cutesy slang for \u0E08\u0E31\u0E07\u0E40\u0E25\u0E22. Used by everyone under 40.'],
        ['\u0E2D\u0E34\u0E2D\u0E34', 'i-i', 'Hehe (mischievous giggle)', "Cuter and more devious than 555. \"I know something you don't \u0E2D\u0E34\u0E2D\u0E34\""],
        ['\u0E41\u0E07\u0E07', 'ngae ngae', '*crying / whining sound*', 'Onomatopoeia. Used for everything from \"my ice cream fell\" to \"I\'m broke.\"'],
        ['\u0E0A\u0E34\u0E21\u0E34', 'chi-mi', 'Right? / Yeah?', 'Cute version of \u0E43\u0E0A\u0E48\u0E44\u0E2B\u0E21.'],
        ['55555 \u0E41\u0E07\u0E07', 'hahaha ngae ngae', 'Laughing until crying', 'Peak Thai internet emotion. The goal of every meme.'],
        ['\u0E21\u0E38\u0E41\u0E07\u0E49', 'mu-ngae', '*pout face*', "When you're sulking and want everyone to know"],
        ['\u0E08\u0E49\u0E32', 'jaa', 'Yes! OK! (cute)', 'Enthusiastic cute confirmation'],
        ['\u0E19\u0E49\u0E32', 'naa', 'Softening particle', 'Makes anything sound cute. \"\u0E01\u0E34\u0E19\u0E02\u0E49\u0E32\u0E27\u0E19\u0E49\u0E32\" = \"eat rice~ \"'],
        ['\u0E40\u0E21\u0E1E', 'mep', 'Awesome / the best', 'Slang. \"\u0E40\u0E21\u0E1E\u0E21\u0E32\u0E01\" = \"so awesome.\"'],
        ['\u0E01\u0E34\u0E01', 'gik', 'Side fling / casual thing', "Someone you're dating but not \"official.\" Thai relationship status: It's Complicated."],
        ['\u0E41\u0E0B\u0E48\u0E1A', 'saep', 'Spicy-delicious / hot (attractive)', 'Originally Isaan slang for delicious. Now also means \"damn, she\'s hot.\"'],
        ['\u0E2E\u0E31\u0E25\u0E42\u0E2B\u0E25', 'han-loo', 'Hello?? (are you even listening?)', 'Sarcastic \"hello?\" when someone says something stupid'],
        ['\u0E2D\u0E30\u0E08\u0E4A\u0E30', 'a-ja', 'Oh! Hey!', 'Cutesy exclamation.'],
        ['\u0E2A\u0E31\u0E2A\u0E41\u0E21\u0E48\u0E07', 'sat maeng', 'F*cking damn', "When 555 isn't enough. Internet Thai swearing."],
        ['6666', '(unused)', 'NOT laugh. Just... 6.', "Foreigners sometimes type 6666 thinking it works like 555. It doesn't. It means nothing. Thai people will laugh AT you, not with you."],
      ],
    },
    {
      kind: 'table',
      title: 'Texting Conversations',
      headers: ['Chat', 'Translation', 'Context'],
      rows: [
        ['A: \u0E14\u0E39\u0E23\u0E39\u0E1B\u0E19\u0E35\u0E49\u0E2A\u0E34 55555', 'A: Look at this pic hahahaha', 'Sending a meme'],
        ['B: \u0E15\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27 5555555 \u0E41\u0E07\u0E07', "B: I'm dead hahahaha *crying*", 'Meme was good'],
        ['A: \u0E01\u0E34\u0E01\u0E21\u0E36\u0E07\u0E2A\u0E48\u0E07\u0E21\u0E32\u0E2D\u0E30 \u0E2D\u0E34\u0E2D\u0E34', 'A: Your side fling sent it hehe', 'Stirring drama'],
        ['B: \u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E34\u0E01\u0E2A\u0E31\u0E2A!', "B: I don't have a side fling damn it!", 'Denial (lying)'],
        ['A: \u0E08\u0E23\u0E34\u0E07\u0E2B\u0E23\u0E2D \u0E0A\u0E34\u0E21\u0E34 \u0E2D\u0E34\u0E2D\u0E34', 'A: Really? Right? Hehe', 'Not buying it'],
        ['B: \u0E41\u0E21\u0E48\u0E07! \u0E08\u0E23\u0E34\u0E07\u0E46!', 'B: F*ck! For real!', 'More denial'],
        ['A: \u0E01\u0E47\u0E14\u0E35\u0E19\u0E30\u0E08\u0E49\u0E32 555', 'A: Well that\'s good then~ hahaha', 'Sarcasm achieved via text'],
      ],
    },
    {
      kind: 'practice',
      exercises: [
        {
          type: 'multiple_choice',
          prompt: 'Your friend sends: "\u0E14\u0E39\u0E23\u0E39\u0E1B\u0E19\u0E35\u0E49\u0E2A\u0E34 55555". What are they doing?',
          options: [
            'Asking for help',
            'Sending a meme and laughing',
            'Complaining about something',
            'Saying goodbye',
          ],
          correctIndex: 1,
        },
        {
          type: 'multiple_choice',
          prompt: 'Someone replies "\u0E15\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27 5555555 \u0E41\u0E07\u0E07". They are...',
          options: [
            'Angry and crying',
            'Laughing so hard they are crying',
            'Sad about something',
            'Confused by the message',
          ],
          correctIndex: 1,
        },
        {
          type: 'multiple_choice',
          prompt: 'A: "\u0E01\u0E34\u0E01\u0E21\u0E36\u0E07\u0E2A\u0E48\u0E07\u0E21\u0E32\u0E2D\u0E30 \u0E2D\u0E34\u0E2D\u0E34" -- What is A doing?',
          options: [
            'Asking about homework',
            'Teasing B about having a side fling',
            'Recommending a restaurant',
            'Sharing a phone number',
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
  assessment: [
    {
      type: 'multiple_choice',
      prompt: 'What does 555 mean in Thai internet?',
      options: ['Help', 'Hahaha', "I'm angry", 'Goodbye'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: '\u0E08\u0E38\u0E07\u0E40\u0E1A\u0E22 is a cute way of saying...',
      options: ['\u0E08\u0E31\u0E07\u0E40\u0E25\u0E22 (so much)', '\u0E08\u0E23\u0E34\u0E07 (true)', '\u0E08\u0E30 (will)', '\u0E08\u0E1A (finished)'],
      correctIndex: 0,
    },
    {
      type: 'multiple_choice',
      prompt: 'Your friend sends \u0E41\u0E07\u0E07. They are...',
      options: ['Happy', 'Crying/whining', 'Angry', 'Ordering food'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'A foreigner types 6666 in a Thai group chat. What happens?',
      options: ['Everyone laughs with them', 'Everyone laughs AT them', 'Nothing', 'It means something profound'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'Why does 555 = laughter?',
      options: ['It looks like LOL', '5 in Thai = haa, so 555 = hahaha', 'Random', '5 laughs'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: '\u0E01\u0E34\u0E01 means...',
      options: ['A kick', 'A side fling', 'A best friend', 'A teacher'],
      correctIndex: 1,
    },
  ],
  srsItemIds: [],
}
