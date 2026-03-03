import type { RichLesson } from '../lessonTypes'

export const chapter6: RichLesson = {
  id: 'S06',
  title: "The Smile That Means 'I Hate You'",
  goal: 'Decode Thai sarcasm, passive aggression, and the art of destroying someone while smiling politely.',
  phase: 'dialogues',
  order: 5,
  difficulty: 'beginner',
  prerequisites: [],
  steps: [
    {
      kind: 'text',
      content:
        "Thailand is called the Land of Smiles. Nobody mentions that at least half of those smiles mean 'I want to set you on fire.' Thai people have perfected the art of insulting you so politely that you say ขอบคุณ (thank you) in response. This chapter teaches you to hear what they ACTUALLY mean. Spoiler: it's never good.",
    },
    {
      kind: 'table',
      title: 'Sarcasm Vocabulary',
      headers: ['Thai', 'Romanization', 'What It Literally Means', 'What It ACTUALLY Means'],
      rows: [
        [
          'เก่งจัง',
          'geng jang',
          'Wow, so talented!',
          '"You just spectacularly screwed up and I\'m savoring every moment of it"',
        ],
        [
          'น่ารักจัง',
          'naa-rak jang',
          'How cute!',
          "50% chance genuine. 50% chance she's about to destroy you. Coin flip.",
        ],
        [
          'ดีจัง',
          'dii jang',
          'So good!',
          '"Well isn\'t that just WONDERFUL" (it is not wonderful)',
        ],
        [
          'ไม่เป็นไร',
          'mai bpen rai',
          "It's fine / never mind",
          '"It is absolutely NOT fine. I will remember this until one of us dies."',
        ],
        [
          'ช่างมัน',
          'chang man',
          'Forget it',
          '"I have given up trying to explain this to your buffalo brain"',
        ],
        [
          'เรื่องมาก',
          'rueang maak',
          'So dramatic / drama queen',
          '"You\'re being insufferable and everyone thinks so"',
        ],
        [
          'ตามสบาย',
          'dtaam sa-baai',
          'As you like',
          '"Go ahead. Make that mistake. I\'ll watch."',
        ],
        [
          'ก็ได้',
          'gor dai',
          'Sure, whatever',
          '"I completely disagree but fighting you isn\'t worth my energy"',
        ],
        [
          'จริงหรอ',
          'jing raw',
          'Really?',
          '"I know you\'re lying. You know I know you\'re lying. We both know."',
        ],
        [
          'แล้วแต่',
          'laew dtae',
          'Up to you',
          '"I\'m not choosing because no matter what I pick you\'ll complain and I\'ll want to throw something"',
        ],
      ],
    },
    {
      kind: 'table',
      title: 'What They Say vs What They Mean',
      headers: ['What They Say', 'What It ACTUALLY Means', 'Warning Level'],
      rows: [
        [
          'เก่งจัง ทำแก้วแตกอีกแล้ว (So talented! You broke ANOTHER glass!)',
          '"That\'s the third glass this week. I\'m keeping count."',
          'HIGH',
        ],
        [
          'ไม่เป็นไร (with tight smile)',
          '"I am building a detailed case against you in my mind and it has 47 exhibits"',
          'EXTREME',
        ],
        [
          'ตามสบายเลย (As you like!)',
          '"This is your LAST chance to reconsider. The wrong answer has consequences."',
          'CRITICAL',
        ],
        [
          'ก็ดีนะ (Well, that\'s good then)',
          '"Nothing about this is good. Not one thing."',
          'HIGH',
        ],
        [
          'โอ๋ จริงหรอ (Oh, really?)',
          '"I can smell your bullsh*t from across the room"',
          'HIGH',
        ],
        [
          'เชิญเลย (Go right ahead)',
          '"Please proceed so I can watch you fail"',
          'MEDIUM',
        ],
        [
          'ไม่ว่าอะไรหรอก (I don\'t mind at all)',
          '"I mind. I mind A LOT."',
          'EXTREME',
        ],
      ],
    },
    {
      kind: 'dialogue',
      title: 'Thai Couple Fight (passive-aggressive championship round)',
      lines: [
        {
          speaker: 'Her',
          thai: 'วันนี้กินอะไรดี',
          romanization: 'wan nii gin a-rai dii',
          english: 'What should we eat today?',
        },
        {
          speaker: 'Him',
          thai: 'แล้วแต่เธอ',
          romanization: 'laew dtae thoe',
          english: 'Up to you',
        },
        {
          speaker: 'Her',
          thai: 'ก็ได้ ไปกินส้มตำ',
          romanization: 'gor dai, bpai gin som-dtam',
          english: 'OK, som tam',
        },
        {
          speaker: 'Him',
          thai: '...ก็ได้',
          romanization: '...gor dai',
          english: 'Sure... whatever',
        },
        {
          speaker: 'Her',
          thai: 'ไม่ชอบหรอ',
          romanization: 'mai chawp raw',
          english: "You don't like it?",
        },
        {
          speaker: 'Him',
          thai: 'ไม่เป็นไร ตามสบาย',
          romanization: 'mai bpen rai, dtaam sa-baai',
          english: "It's fine. As you like.",
        },
        {
          speaker: 'Her',
          thai: 'พูดตรงๆ สิ ไม่ชอบอะไร',
          romanization: 'phuut dtrong dtrong si, mai chawp a-rai',
          english: "Just say it directly. What don't you like?",
        },
        {
          speaker: 'Him',
          thai: 'ไม่มีอะไร จริงๆ',
          romanization: 'mai mii a-rai, jing jing',
          english: 'Nothing. Really.',
        },
        {
          speaker: 'Her',
          thai: 'เก่งจัง โกหกเก่งมาก',
          romanization: 'geng jang, goo-hok geng maak',
          english: 'So talented! SO great at lying.',
        },
        {
          speaker: 'Him',
          thai: 'กูไม่ได้โกหก!',
          romanization: 'guu mai dai goo-hok!',
          english: "I'm not lying!",
        },
        {
          speaker: 'Her',
          thai: 'ก็ดีนะ',
          romanization: 'gor dii na',
          english: "Well, that's good then. (smile)",
        },
        {
          speaker: 'Him',
          thai: '(realizes he has already lost)',
          romanization: '',
          english: "(realizes he's already lost)",
        },
      ],
    },
  ],
  assessment: [
    {
      type: 'multiple_choice',
      prompt:
        'Your Thai friend says เก่งจัง after you drop your phone for the third time. She means...',
      options: [
        'Genuine admiration',
        'Sarcastic mockery',
        'She wants your phone',
        "She's worried",
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'ไม่เป็นไร with a tight smile means...',
      options: [
        'Everything is truly fine',
        'She forgives you',
        'She is NOT fine and is building a case',
        "She didn't notice",
      ],
      correctIndex: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'When is แล้วแต่ passive-aggressive?',
      options: [
        'Always',
        'When said with a sigh or flat tone',
        'Never',
        'Only on weekdays',
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'What does เรื่องมาก mean?',
      options: [
        'Interesting story',
        "You're being a drama queen",
        'Good news',
        'Big event',
      ],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'She says ตามสบาย. You should...',
      options: [
        'Choose VERY carefully',
        'Ignore her',
        'Say ตามสบาย back',
        'Leave the country',
      ],
      correctIndex: 0,
    },
    {
      type: 'multiple_choice',
      prompt: 'The deadliest Thai sarcasm sounds...',
      options: [
        'Angry and loud',
        'Polite, smiling, and sweet',
        'Silent',
        'Like a question',
      ],
      correctIndex: 1,
    },
  ],
  srsItemIds: [],
}
