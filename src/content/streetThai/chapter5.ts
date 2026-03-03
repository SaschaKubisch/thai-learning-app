import type { RichLesson } from '../lessonTypes'

export const chapter5: RichLesson = {
  id: 'S05',
  title: 'Thai Price vs Farang Price: A War Story',
  goal: 'Learn the art of haggling -- fake outrage, dramatic walk-aways, and the ancient battle to avoid the farang tax.',
  phase: 'sentences',
  order: 4,
  difficulty: 'beginner',
  prerequisites: [],
  steps: [
    {
      kind: 'text',
      content:
        "Every market in Thailand has two prices: the Thai price and the farang price. The farang price is activated the instant they see your face, hear your accent, or notice your sunburn. The markup ranges from 'cheeky' (2x) to 'criminal' (10x). Haggling isn't rude -- it's a competitive sport. Not haggling is considered a sign of either extreme wealth or extreme stupidity. Either way, they win.",
    },
    {
      kind: 'table',
      title: 'Vocabulary',
      headers: ['Thai', 'Romanization', 'Meaning', 'Tactical Notes'],
      rows: [
        ['แพง', 'phaeng', 'Expensive', "Say it like you've been personally offended."],
        ['แพงไป', 'phaeng bpai', 'Too expensive', "Your opening move. Always. Even if it's actually cheap."],
        [
          'แพงบ้าไปแล้ว',
          'phaeng baa bpai laew',
          'Insanely expensive',
          'When they quote 3x the real price. Add disbelief to your face.',
        ],
        ['ถูก', 'thuuk', 'Cheap', "The goal. The dream. The reason you're here."],
        ['ลดได้ไหม', 'lot dai mai', 'Can you lower the price?', 'Polite version. Use at the start.'],
        ['ลดหน่อยสิ', 'lot noi si', 'Come on, lower it', 'Less polite. More effective.'],
        ['ราคาสุดท้าย', 'raa-khaa sut-thaai', 'Final price?', 'The closing question.'],
        [
          'ไม่เอาแล้ว',
          'mai ao laew',
          "I don't want it anymore",
          'THE nuclear weapon. Start walking. They will call you back 80% of the time.',
        ],
        [
          'ที่อื่นถูกกว่า',
          'thii uuen thuuk gwaa',
          'Other places are cheaper',
          "May or may not be true. Doesn't matter.",
        ],
        [
          'ให้ราคาคนไทยหน่อย',
          'hai raa-khaa khon thai noi',
          'Give me Thai price',
          "The audacity move. They'll laugh. Then they'll lower it.",
        ],
        ['ซื้อสองชิ้นลดไหม', 'suue sawng chin lot mai', 'Buy two, discount?', 'Bulk discount gambit.'],
        ['โกงฝรั่ง', 'goong farang', 'Cheating the foreigner', "What you're trying to prevent."],
        [
          'เอาเท่านี้',
          'ao thao nii',
          "I'll pay this much (counter-offer)",
          'Slap your money on the table. Power move.',
        ],
      ],
    },
    {
      kind: 'table',
      title: 'Haggling Tactic Phrases',
      headers: ['Thai', 'English', 'Tactic'],
      rows: [
        [
          'อ้าว! แพงบ้าไปแล้ว!',
          "What?! That's INSANE!",
          'Opening shock -- exaggerate wildly',
        ],
        [
          'ที่ร้านข้างๆ สามร้อย',
          'The shop next door is 300',
          'Competitor pressure (may be fictional)',
        ],
        [
          'ไม่เอาแล้ว ขอบคุณ',
          "Don't want it anymore, thanks",
          'The walk-away -- most powerful weapon',
        ],
        [
          'โอเค ถ้าไม่ลดกูไปร้านอื่น',
          "OK, if no discount I'm going elsewhere",
          'Ultimatum',
        ],
        [
          "ให้ราคาคนไทยได้ไหม กูอยู่ไทยมานาน",
          "Can I get Thai price? I've lived here ages",
          'The long-term resident card',
        ],
        [
          'ซื้อสามชิ้น ลดหน่อยสิ',
          'Buying three, come on, give a discount',
          'Volume gambit',
        ],
      ],
    },
    {
      kind: 'dialogue',
      title: 'Chatuchak Market -- Level Boss',
      lines: [
        {
          speaker: 'You',
          thai: 'อันนี้เท่าไหร่',
          romanization: 'an nii thao rai',
          english: 'How much?',
        },
        {
          speaker: 'Vendor',
          thai: 'หกร้อยบาทค่ะ',
          romanization: 'hok roi baat kha',
          english: '600 baht',
        },
        {
          speaker: 'You',
          thai: 'หกร้อย?! ห่า! แพงบ้าไปแล้ว!',
          romanization: 'hok roi?! haa! phaeng baa bpai laew!',
          english: "600?! WTF! That's insanely expensive!",
        },
        {
          speaker: 'Vendor',
          thai: 'คุณภาพดีค่ะ ของแท้ค่ะ',
          romanization: 'khun-na-phaap dii kha, khawng thae kha',
          english: 'Good quality. Authentic.',
        },
        {
          speaker: 'You',
          thai: 'ของแท้... สามร้อย ไม่งั้นไปร้านข้างๆ',
          romanization: "khawng thae... saam roi, mai ngan bpai raan khaang khaang",
          english: "Authentic... 300. Otherwise I'm going next door.",
        },
        {
          speaker: 'Vendor',
          thai: 'ไม่ได้ค่ะ ทุนยังห้าร้อยเลย',
          romanization: 'mai dai kha, thun yang haa roi loei',
          english: "Can't. My cost is already 500.",
        },
        {
          speaker: 'You',
          thai: 'ขอบคุณนะ',
          romanization: 'khawp-khun na',
          english: '(starts walking away) Thanks anyway',
        },
        {
          speaker: 'Vendor',
          thai: 'เดี๋ยวๆ! สี่ร้อยห้าสิบ!',
          romanization: 'diao diao! sii roi haa sip!',
          english: 'Wait wait! 450!',
        },
        {
          speaker: 'You',
          thai: 'สามร้อยห้าสิบ ราคาสุดท้าย',
          romanization: 'saam roi haa sip, raa-khaa sut-thaai',
          english: '(turns around slowly) 350. Final offer.',
        },
        {
          speaker: 'Vendor',
          thai: '...สี่ร้อย ไม่ลดแล้ว จริงๆ',
          romanization: '...sii roi, mai lot laew, jing jing',
          english: '400. No more discount. Seriously.',
        },
        {
          speaker: 'You',
          thai: '...โอเค เอา',
          romanization: '...oh-kheh ao',
          english: "(long pause) ...OK. I'll take it.",
        },
        {
          speaker: 'Vendor',
          thai: 'ฝรั่งคนนี้ต่อเก่งสัส',
          romanization: 'farang khon nii dtaw geng sat',
          english: '(to coworker) This farang haggles like a damn pro',
        },
      ],
    },
  ],
  assessment: [
    {
      type: 'multiple_choice',
      prompt: 'What does แพงบ้าไปแล้ว mean?',
      options: ['Very cheap', 'Insanely expensive', 'Very good', 'Very delicious'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'Most powerful haggling tactic?',
      options: ['ไม่เอาแล้ว (walk away)', 'ขอบคุณครับ', 'สวัสดีครับ', 'ดีมาก'],
      correctIndex: 0,
    },
    {
      type: 'multiple_choice',
      prompt: 'ลดได้ไหม means...',
      options: ['Can you add more?', 'Can you lower the price?', 'Is it spicy?', 'Where is it?'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: "The vendor says หกร้อยบาท. That's...",
      options: ['60 baht', '600 baht', '6,000 baht', '6 baht'],
      correctIndex: 1,
    },
    {
      type: 'multiple_choice',
      prompt: 'What does ราคาสุดท้าย mean?',
      options: ['First price', 'Thai price', 'Final price', 'Tourist price'],
      correctIndex: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'How do you ask for Thai price?',
      options: ['ให้ราคาคนไทยหน่อย', 'เอาราคาฝรั่ง', 'แพงไป', 'ถูกมาก'],
      correctIndex: 0,
    },
  ],
  srsItemIds: [],
}
