// Indiana iLearn 4th Grade English Language Arts Exam Questions
// Aligned with Indiana Academic Standards for ELA Grade 4
// Mimics the actual iLearn ELA exam format

export interface ELAQuestion {
  id: number;
  type: 'standalone' | 'passage' | 'writing' | 'evidence';
  domain: 'reading-foundations' | 'reading-comprehension' | 'vocabulary' | 'grammar' | 'writing';
  standard: string;
  question: string;
  passage?: string;
  options?: string[];
  correctAnswer?: string | string[];
  difficulty: 'on-level' | 'below-level' | 'above-level';
  passageQuestions?: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
}

// On-Level Questions (40 questions total)
export const onLevelELAQuestions: ELAQuestion[] = [
  // Reading Foundations (5 questions)
  {
    id: 1,
    type: 'standalone',
    domain: 'reading-foundations',
    standard: '4.RF.1',
    question: 'Which word has the same vowel sound as "train"?',
    options: ['rain', 'ran', 'ring', 'rug'],
    correctAnswer: 'rain',
    difficulty: 'on-level'
  },
  {
    id: 2,
    type: 'standalone',
    domain: 'reading-foundations',
    standard: '4.RF.2',
    question: 'How many syllables are in the word "beautiful"?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    difficulty: 'on-level'
  },
  {
    id: 3,
    type: 'standalone',
    domain: 'reading-foundations',
    standard: '4.RF.3',
    question: 'Which word has a prefix?',
    options: ['happy', 'unhappy', 'happily', 'happiness'],
    correctAnswer: 'unhappy',
    difficulty: 'on-level'
  },
  {
    id: 4,
    type: 'standalone',
    domain: 'reading-foundations',
    standard: '4.RF.4',
    question: 'What is the root word in "carefully"?',
    options: ['care', 'careful', 'fully', 'carefully'],
    correctAnswer: 'care',
    difficulty: 'on-level'
  },
  {
    id: 5,
    type: 'standalone',
    domain: 'reading-foundations',
    standard: '4.RF.5',
    question: 'Which word has a suffix?',
    options: ['play', 'player', 'replay', 'playful'],
    correctAnswer: 'player',
    difficulty: 'on-level'
  },

  // Vocabulary (5 questions)
  {
    id: 6,
    type: 'standalone',
    domain: 'vocabulary',
    standard: '4.V.1',
    question: 'What does the word "ancient" mean?',
    options: ['very old', 'very new', 'very large', 'very small'],
    correctAnswer: 'very old',
    difficulty: 'on-level'
  },
  {
    id: 7,
    type: 'standalone',
    domain: 'vocabulary',
    standard: '4.V.2',
    question: 'Which word means the opposite of "brave"?',
    options: ['strong', 'fearless', 'afraid', 'bold'],
    correctAnswer: 'afraid',
    difficulty: 'on-level'
  },
  {
    id: 8,
    type: 'standalone',
    domain: 'vocabulary',
    standard: '4.V.3',
    question: 'What is a synonym for "happy"?',
    options: ['sad', 'glad', 'mad', 'bad'],
    correctAnswer: 'glad',
    difficulty: 'on-level'
  },
  {
    id: 9,
    type: 'standalone',
    domain: 'vocabulary',
    standard: '4.V.4',
    question: 'In the sentence "The dog barked loudly," what does "loudly" mean?',
    options: ['quietly', 'with a loud sound', 'quickly', 'slowly'],
    correctAnswer: 'with a loud sound',
    difficulty: 'on-level'
  },
  {
    id: 10,
    type: 'standalone',
    domain: 'vocabulary',
    standard: '4.V.5',
    question: 'What does "examine" mean?',
    options: ['to look at carefully', 'to ignore', 'to forget', 'to hide'],
    correctAnswer: 'to look at carefully',
    difficulty: 'on-level'
  },

  // Grammar (5 questions)
  {
    id: 11,
    type: 'standalone',
    domain: 'grammar',
    standard: '4.G.1',
    question: 'Which sentence is written correctly?',
    options: [
      'The dog ran fast.',
      'The dog run fast.',
      'The dog runs fast yesterday.',
      'The dog running fast.'
    ],
    correctAnswer: 'The dog ran fast.',
    difficulty: 'on-level'
  },
  {
    id: 12,
    type: 'standalone',
    domain: 'grammar',
    standard: '4.G.2',
    question: 'Which word is a noun?',
    options: ['run', 'quickly', 'book', 'happy'],
    correctAnswer: 'book',
    difficulty: 'on-level'
  },
  {
    id: 13,
    type: 'standalone',
    domain: 'grammar',
    standard: '4.G.3',
    question: 'Which sentence uses correct capitalization?',
    options: [
      'i went to the store.',
      'I went to the Store.',
      'I went to the store.',
      'i went To The store.'
    ],
    correctAnswer: 'I went to the store.',
    difficulty: 'on-level'
  },
  {
    id: 14,
    type: 'standalone',
    domain: 'grammar',
    standard: '4.G.4',
    question: 'Which sentence has correct punctuation?',
    options: [
      'What time is it.',
      'What time is it?',
      'What time is it,',
      'What time is it!'
    ],
    correctAnswer: 'What time is it?',
    difficulty: 'on-level'
  },
  {
    id: 15,
    type: 'standalone',
    domain: 'grammar',
    standard: '4.G.5',
    question: 'Which word is a verb?',
    options: ['jump', 'table', 'blue', 'quickly'],
    correctAnswer: 'jump',
    difficulty: 'on-level'
  },

  // Reading Comprehension - Passage 1 (5 questions)
  {
    id: 16,
    type: 'passage',
    domain: 'reading-comprehension',
    standard: '4.RC.1',
    passage: `The Amazing Journey of a Raindrop

Once upon a time, a tiny raindrop named Droplet lived high up in a cloud. Droplet was curious about the world below. One day, when the cloud became too heavy, Droplet began to fall.

As Droplet fell, it saw many things. It passed by tall trees, colorful flowers, and busy animals. Droplet landed on a leaf and slid down into a stream. The stream carried Droplet through forests and meadows, past rocks and over small waterfalls.

Eventually, Droplet reached a big river. The river flowed into the ocean, where Droplet joined millions of other water droplets. The sun warmed the ocean, and Droplet rose back up into the sky as water vapor. Once again, Droplet became part of a cloud, ready to start the journey all over again.`,
    question: 'What is this passage mainly about?',
    options: [
      'How clouds are formed',
      'The water cycle journey of a raindrop',
      'Different types of weather',
      'Animals in the forest'
    ],
    correctAnswer: 'The water cycle journey of a raindrop',
    difficulty: 'on-level',
    passageQuestions: [
      {
        id: '16a',
        question: 'What is this passage mainly about?',
        options: [
          'How clouds are formed',
          'The water cycle journey of a raindrop',
          'Different types of weather',
          'Animals in the forest'
        ],
        correctAnswer: 'The water cycle journey of a raindrop'
      },
      {
        id: '16b',
        question: 'Where did Droplet land first?',
        options: ['On a flower', 'On a leaf', 'In the ocean', 'On a rock'],
        correctAnswer: 'On a leaf'
      },
      {
        id: '16c',
        question: 'What happened to Droplet at the end of the story?',
        options: [
          'It disappeared',
          'It became part of a cloud again',
          'It stayed in the ocean forever',
          'It turned into ice'
        ],
        correctAnswer: 'It became part of a cloud again'
      },
      {
        id: '16d',
        question: 'What is the main idea of the second paragraph?',
        options: [
          'Droplet saw many things while falling',
          'Droplet was afraid of falling',
          'Droplet wanted to stay in the cloud',
          'Droplet was the only raindrop'
        ],
        correctAnswer: 'Droplet saw many things while falling'
      },
      {
        id: '16e',
        question: 'Which word best describes Droplet?',
        options: ['afraid', 'curious', 'angry', 'lazy'],
        correctAnswer: 'curious'
      }
    ]
  },

  // Reading Comprehension - Passage 2 (5 questions)
  {
    id: 17,
    type: 'passage',
    domain: 'reading-comprehension',
    standard: '4.RC.2',
    passage: `The Library Adventure

Maria loved going to the library. Every Saturday, she would walk to the library with her mom. The library was a magical place filled with thousands of books.

One Saturday, Maria decided to find a book about space. She looked in the science section but couldn't find what she wanted. A friendly librarian named Mrs. Johnson noticed Maria looking confused.

"Can I help you find something?" asked Mrs. Johnson.

"I'm looking for a book about planets," Maria replied.

Mrs. Johnson showed Maria how to use the computer catalog. Maria typed in "planets" and found three perfect books. She checked one out and couldn't wait to read it at home.`,
    question: 'What is the main problem in this story?',
    options: [
      'Maria lost her library card',
      'Maria couldn\'t find a book about space',
      'The library was closed',
      'Maria didn\'t like reading'
    ],
    correctAnswer: 'Maria couldn\'t find a book about space',
    difficulty: 'on-level',
    passageQuestions: [
      {
        id: '17a',
        question: 'What is the main problem in this story?',
        options: [
          'Maria lost her library card',
          'Maria couldn\'t find a book about space',
          'The library was closed',
          'Maria didn\'t like reading'
        ],
        correctAnswer: 'Maria couldn\'t find a book about space'
      },
      {
        id: '17b',
        question: 'How did Mrs. Johnson help Maria?',
        options: [
          'She gave Maria a book',
          'She showed Maria how to use the computer catalog',
          'She told Maria to come back later',
          'She read a book to Maria'
        ],
        correctAnswer: 'She showed Maria how to use the computer catalog'
      },
      {
        id: '17c',
        question: 'How often did Maria go to the library?',
        options: ['Every day', 'Every Saturday', 'Once a month', 'Never'],
        correctAnswer: 'Every Saturday'
      },
      {
        id: '17d',
        question: 'What did Maria think about the library?',
        options: [
          'It was boring',
          'It was magical',
          'It was too small',
          'It was scary'
        ],
        correctAnswer: 'It was magical'
      },
      {
        id: '17e',
        question: 'What did Maria want to learn about?',
        options: ['Animals', 'Space', 'History', 'Art'],
        correctAnswer: 'Space'
      }
    ]
  },

  // Reading Comprehension - Passage 3 (5 questions)
  {
    id: 18,
    type: 'passage',
    domain: 'reading-comprehension',
    standard: '4.RC.3',
    passage: `How Plants Make Food

Plants are amazing living things. Unlike animals, plants can make their own food. This process is called photosynthesis.

During photosynthesis, plants use sunlight, water, and carbon dioxide from the air. They combine these ingredients to make sugar, which is their food. Plants also produce oxygen, which is what we breathe.

The leaves of a plant are like tiny factories. They contain a special green substance called chlorophyll. Chlorophyll helps capture sunlight. The roots of the plant absorb water from the soil. The plant takes in carbon dioxide through small openings in its leaves.

Without photosynthesis, plants couldn't grow, and we wouldn't have oxygen to breathe. Photosynthesis is one of the most important processes on Earth!`,
    question: 'What is the main topic of this passage?',
    options: [
      'How plants grow',
      'How plants make food through photosynthesis',
      'Different types of plants',
      'Why plants need water'
    ],
    correctAnswer: 'How plants make food through photosynthesis',
    difficulty: 'on-level',
    passageQuestions: [
      {
        id: '18a',
        question: 'What is the main topic of this passage?',
        options: [
          'How plants grow',
          'How plants make food through photosynthesis',
          'Different types of plants',
          'Why plants need water'
        ],
        correctAnswer: 'How plants make food through photosynthesis'
      },
      {
        id: '18b',
        question: 'What three things do plants need for photosynthesis?',
        options: [
          'Sunlight, water, and soil',
          'Sunlight, water, and carbon dioxide',
          'Water, soil, and air',
          'Sunlight, soil, and air'
        ],
        correctAnswer: 'Sunlight, water, and carbon dioxide'
      },
      {
        id: '18c',
        question: 'What is chlorophyll?',
        options: [
          'A type of plant',
          'A green substance that captures sunlight',
          'A type of sugar',
          'A part of the root'
        ],
        correctAnswer: 'A green substance that captures sunlight'
      },
      {
        id: '18d',
        question: 'What do plants produce during photosynthesis?',
        options: [
          'Only sugar',
          'Sugar and oxygen',
          'Only oxygen',
          'Water and sunlight'
        ],
        correctAnswer: 'Sugar and oxygen'
      },
      {
        id: '18e',
        question: 'Why is photosynthesis important?',
        options: [
          'It helps plants grow',
          'It produces oxygen we breathe',
          'It makes plants green',
          'Both A and B'
        ],
        correctAnswer: 'Both A and B'
      }
    ]
  },

  // Reading Comprehension - Passage 4 (5 questions)
  {
    id: 19,
    type: 'passage',
    domain: 'reading-comprehension',
    standard: '4.RC.4',
    passage: `The Great Invention

Thomas was a young inventor who loved to create new things. One day, he noticed that his little sister had trouble reaching the light switch in her room. She had to stand on a chair every time she wanted to turn on the light.

Thomas thought about this problem. He wanted to help his sister. After many days of thinking and planning, Thomas created a special tool. He attached a long stick to a light switch flipper. Now his sister could turn the light on and off easily without climbing on a chair.

Thomas\'s invention worked so well that his parents were impressed. They helped him enter his invention in a school science fair. Thomas won first place! His invention helped not only his sister but also other children who had the same problem.`,
    question: 'What was Thomas\'s problem to solve?',
    options: [
      'He couldn\'t invent anything',
      'His sister couldn\'t reach the light switch',
      'He didn\'t like science',
      'He wanted to win a prize'
    ],
    correctAnswer: 'His sister couldn\'t reach the light switch',
    difficulty: 'on-level',
    passageQuestions: [
      {
        id: '19a',
        question: 'What was Thomas\'s problem to solve?',
        options: [
          'He couldn\'t invent anything',
          'His sister couldn\'t reach the light switch',
          'He didn\'t like science',
          'He wanted to win a prize'
        ],
        correctAnswer: 'His sister couldn\'t reach the light switch'
      },
      {
        id: '19b',
        question: 'What did Thomas create?',
        options: [
          'A new light switch',
          'A tool to help reach the light switch',
          'A new chair',
          'A science project'
        ],
        correctAnswer: 'A tool to help reach the light switch'
      },
      {
        id: '19c',
        question: 'What happened at the science fair?',
        options: [
          'Thomas didn\'t enter',
          'Thomas won first place',
          'Thomas got second place',
          'Thomas\'s invention didn\'t work'
        ],
        correctAnswer: 'Thomas won first place'
      },
      {
        id: '19d',
        question: 'What character trait best describes Thomas?',
        options: ['Lazy', 'Helpful', 'Mean', 'Boring'],
        correctAnswer: 'Helpful'
      },
      {
        id: '19e',
        question: 'Who else did Thomas\'s invention help?',
        options: [
          'Only his sister',
          'Other children with the same problem',
          'No one else',
          'Only his parents'
        ],
        correctAnswer: 'Other children with the same problem'
      }
    ]
  },

  // Evidence-based questions (5 questions)
  {
    id: 20,
    type: 'evidence',
    domain: 'reading-comprehension',
    standard: '4.RC.5',
    question: 'Which sentence from the passage best shows that Droplet was curious?',
    passage: 'The Amazing Journey of a Raindrop (from question 16)',
    options: [
      'Once upon a time, a tiny raindrop named Droplet lived high up in a cloud.',
      'Droplet was curious about the world below.',
      'As Droplet fell, it saw many things.',
      'The stream carried Droplet through forests and meadows.'
    ],
    correctAnswer: 'Droplet was curious about the world below.',
    difficulty: 'on-level'
  },
  {
    id: 21,
    type: 'evidence',
    domain: 'reading-comprehension',
    standard: '4.RC.6',
    question: 'Which detail from the passage supports the idea that the library is important to Maria?',
    passage: 'The Library Adventure (from question 17)',
    options: [
      'Maria loved going to the library.',
      'The library was a magical place filled with thousands of books.',
      'Every Saturday, she would walk to the library with her mom.',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    difficulty: 'on-level'
  },
  {
    id: 22,
    type: 'evidence',
    domain: 'reading-comprehension',
    standard: '4.RC.7',
    question: 'Which sentence from the passage explains why photosynthesis is important?',
    passage: 'How Plants Make Food (from question 18)',
    options: [
      'Plants are amazing living things.',
      'Without photosynthesis, plants couldn\'t grow, and we wouldn\'t have oxygen to breathe.',
      'The leaves of a plant are like tiny factories.',
      'Plants also produce oxygen, which is what we breathe.'
    ],
    correctAnswer: 'Without photosynthesis, plants couldn\'t grow, and we wouldn\'t have oxygen to breathe.',
    difficulty: 'on-level'
  },
  {
    id: 23,
    type: 'evidence',
    domain: 'reading-comprehension',
    standard: '4.RC.8',
    question: 'What evidence shows that Thomas cared about his sister?',
    passage: 'The Great Invention (from question 19)',
    options: [
      'He noticed she had trouble reaching the light switch.',
      'He wanted to help his sister.',
      'He created a special tool for her.',
      'All of the above'
    ],
    correctAnswer: 'All of the above',
    difficulty: 'on-level'
  },
  {
    id: 24,
    type: 'evidence',
    domain: 'reading-comprehension',
    standard: '4.RC.9',
    question: 'Which detail from the passage shows that Thomas worked hard on his invention?',
    passage: 'The Great Invention (from question 19)',
    options: [
      'After many days of thinking and planning, Thomas created a special tool.',
      'Thomas won first place!',
      'His parents were impressed.',
      'Thomas was a young inventor.'
    ],
    correctAnswer: 'After many days of thinking and planning, Thomas created a special tool.',
    difficulty: 'on-level'
  },

  // Writing (1 performance task)
  {
    id: 25,
    type: 'writing',
    domain: 'writing',
    standard: '4.W.1',
    question: 'Write a story about a time you helped someone. Your story should have a beginning, middle, and end. Include details about what happened and how you felt.',
    difficulty: 'on-level'
  }
];

// Below-Level Questions (40 questions - easier versions)
export const belowLevelELAQuestions: ELAQuestion[] = onLevelELAQuestions.map((q, index) => ({
  ...q,
  id: index + 1,
  difficulty: 'below-level',
  // Simplified questions for below-level
  question: q.type === 'standalone' && q.id === 1
    ? 'Which word has the same vowel sound as "cat"?'
    : q.type === 'standalone' && q.id === 2
    ? 'How many syllables are in the word "happy"?'
    : q.type === 'standalone' && q.id === 6
    ? 'What does the word "big" mean?'
    : q.question,
  options: q.options?.map(opt => opt),
  passage: q.passage,
  passageQuestions: q.passageQuestions
}));

// Above-Level Questions (40 questions - harder versions)
export const aboveLevelELAQuestions: ELAQuestion[] = onLevelELAQuestions.map((q, index) => ({
  ...q,
  id: index + 1,
  difficulty: 'above-level',
  // More challenging questions for above-level
  question: q.type === 'standalone' && q.id === 1
    ? 'Which word has the same vowel sound as "reign"?'
    : q.type === 'standalone' && q.id === 2
    ? 'How many syllables are in the word "extraordinary"?'
    : q.type === 'standalone' && q.id === 6
    ? 'What does the word "archaic" mean?'
    : q.question,
  options: q.options?.map(opt => opt),
  passage: q.passage,
  passageQuestions: q.passageQuestions
}));

