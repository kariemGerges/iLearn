// Indiana iLearn 4th Grade Math Exam Questions
// Aligned with Indiana Academic Standards for Mathematics Grade 4
// 44 questions total - matching real iLearn exam format

export interface Question {
  id: number;
  type: 'multiple-choice' | 'multiple-select' | 'technology-enhanced' | 'open-ended';
  domain: 'number-sense' | 'computation' | 'geometry' | 'measurement' | 'data-analysis' | 'mixed';
  standard: string;
  question: string;
  options?: string[];
  correctAnswer?: string | string[]; // Not displayed to students
  difficulty: 'on-level' | 'below-level' | 'above-level';
}

// On-Level Questions (44 questions)
export const onLevelQuestions: Question[] = [
  // Number Sense (8 questions)
  {
    id: 1,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.1',
    question: 'Which number is equal to 3,000 + 400 + 50 + 6?',
    options: ['3,456', '3,546', '3,654', '3,465'],
    correctAnswer: '3,456',
    difficulty: 'on-level'
  },
  {
    id: 2,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.2',
    question: 'What is the value of the digit 7 in the number 47,832?',
    options: ['7', '70', '700', '7,000'],
    correctAnswer: '7,000',
    difficulty: 'on-level'
  },
  {
    id: 3,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.3',
    question: 'Round 6,789 to the nearest hundred.',
    options: ['6,700', '6,800', '6,790', '7,000'],
    correctAnswer: '6,800',
    difficulty: 'on-level'
  },
  {
    id: 4,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.4',
    question: 'Which comparison is true?',
    options: ['4,567 < 4,576', '4,567 > 4,576', '4,567 = 4,576', '4,567 ≤ 4,576'],
    correctAnswer: '4,567 < 4,576',
    difficulty: 'on-level'
  },
  {
    id: 5,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.5',
    question: 'What is 10,000 - 3,245?',
    options: ['6,755', '6,765', '7,755', '7,765'],
    correctAnswer: '6,755',
    difficulty: 'on-level'
  },
  {
    id: 6,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.6',
    question: 'Which fraction is equivalent to 1/2?',
    options: ['2/3', '3/6', '2/5', '3/8'],
    correctAnswer: '3/6',
    difficulty: 'on-level'
  },
  {
    id: 7,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.7',
    question: 'Compare: 3/4 ___ 5/8',
    options: ['>', '<', '=', 'Cannot compare'],
    correctAnswer: '>',
    difficulty: 'on-level'
  },
  {
    id: 8,
    type: 'multiple-choice',
    domain: 'number-sense',
    standard: '4.NS.8',
    question: 'What is 0.5 written as a fraction?',
    options: ['1/5', '1/2', '5/10', 'Both B and C'],
    correctAnswer: 'Both B and C',
    difficulty: 'on-level'
  },

  // Computation & Algebraic Thinking (8 questions)
  {
    id: 9,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.1',
    question: 'What is 347 + 256?',
    options: ['593', '603', '613', '623'],
    correctAnswer: '603',
    difficulty: 'on-level'
  },
  {
    id: 10,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.2',
    question: 'What is 842 - 367?',
    options: ['475', '485', '575', '585'],
    correctAnswer: '475',
    difficulty: 'on-level'
  },
  {
    id: 11,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.3',
    question: 'What is 24 × 5?',
    options: ['100', '110', '120', '130'],
    correctAnswer: '120',
    difficulty: 'on-level'
  },
  {
    id: 12,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.4',
    question: 'What is 84 ÷ 7?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    difficulty: 'on-level'
  },
  {
    id: 13,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.5',
    question: 'Sarah has 3 boxes of markers. Each box has 12 markers. How many markers does Sarah have in all?',
    options: ['15', '24', '36', '48'],
    correctAnswer: '36',
    difficulty: 'on-level'
  },
  {
    id: 14,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.6',
    question: 'A class has 28 students. They are divided into 4 equal groups. How many students are in each group?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '7',
    difficulty: 'on-level'
  },
  {
    id: 15,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.7',
    question: 'What is the value of n in the equation: 5 × n = 45?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '9',
    difficulty: 'on-level'
  },
  {
    id: 16,
    type: 'multiple-choice',
    domain: 'computation',
    standard: '4.CA.8',
    question: 'Which expression is equal to 6 × 8?',
    options: ['6 + 6 + 6 + 6', '8 + 8 + 8 + 8 + 8 + 8', '6 × 6 × 6', '8 × 8 × 8'],
    correctAnswer: '8 + 8 + 8 + 8 + 8 + 8',
    difficulty: 'on-level'
  },

  // Geometry (6 questions)
  {
    id: 17,
    type: 'multiple-choice',
    domain: 'geometry',
    standard: '4.G.1',
    question: 'How many sides does a pentagon have?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    difficulty: 'on-level'
  },
  {
    id: 18,
    type: 'multiple-choice',
    domain: 'geometry',
    standard: '4.G.2',
    question: 'Which shape has exactly 4 right angles?',
    options: ['Triangle', 'Pentagon', 'Rectangle', 'Hexagon'],
    correctAnswer: 'Rectangle',
    difficulty: 'on-level'
  },
  {
    id: 19,
    type: 'multiple-choice',
    domain: 'geometry',
    standard: '4.G.3',
    question: 'A square has sides that are each 5 inches long. What is the perimeter of the square?',
    options: ['10 inches', '15 inches', '20 inches', '25 inches'],
    correctAnswer: '20 inches',
    difficulty: 'on-level'
  },
  {
    id: 20,
    type: 'multiple-choice',
    domain: 'geometry',
    standard: '4.G.4',
    question: 'Which figure has parallel sides?',
    options: ['Triangle', 'Square', 'Circle', 'All of the above'],
    correctAnswer: 'Square',
    difficulty: 'on-level'
  },
  {
    id: 21,
    type: 'multiple-choice',
    domain: 'geometry',
    standard: '4.G.5',
    question: 'How many lines of symmetry does a rectangle have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
    difficulty: 'on-level'
  },
  {
    id: 22,
    type: 'multiple-choice',
    domain: 'geometry',
    standard: '4.G.6',
    question: 'What is the name of a triangle with all sides equal in length?',
    options: ['Right triangle', 'Isosceles triangle', 'Equilateral triangle', 'Scalene triangle'],
    correctAnswer: 'Equilateral triangle',
    difficulty: 'on-level'
  },

  // Measurement (6 questions)
  {
    id: 23,
    type: 'multiple-choice',
    domain: 'measurement',
    standard: '4.M.1',
    question: 'How many inches are in 2 feet?',
    options: ['12 inches', '18 inches', '24 inches', '30 inches'],
    correctAnswer: '24 inches',
    difficulty: 'on-level'
  },
  {
    id: 24,
    type: 'multiple-choice',
    domain: 'measurement',
    standard: '4.M.2',
    question: 'How many minutes are in 3 hours?',
    options: ['120 minutes', '150 minutes', '180 minutes', '210 minutes'],
    correctAnswer: '180 minutes',
    difficulty: 'on-level'
  },
  {
    id: 25,
    type: 'multiple-choice',
    domain: 'measurement',
    standard: '4.M.3',
    question: 'Which unit would be best to measure the length of a pencil?',
    options: ['Miles', 'Yards', 'Inches', 'Feet'],
    correctAnswer: 'Inches',
    difficulty: 'on-level'
  },
  {
    id: 26,
    type: 'multiple-choice',
    domain: 'measurement',
    standard: '4.M.4',
    question: 'A rectangle is 8 inches long and 5 inches wide. What is the area of the rectangle?',
    options: ['13 square inches', '26 square inches', '40 square inches', '80 square inches'],
    correctAnswer: '40 square inches',
    difficulty: 'on-level'
  },
  {
    id: 27,
    type: 'multiple-choice',
    domain: 'measurement',
    standard: '4.M.5',
    question: 'How many cups are in 2 quarts?',
    options: ['4 cups', '6 cups', '8 cups', '10 cups'],
    correctAnswer: '8 cups',
    difficulty: 'on-level'
  },
  {
    id: 28,
    type: 'multiple-choice',
    domain: 'measurement',
    standard: '4.M.6',
    question: 'What time is 2 hours and 30 minutes after 3:15 PM?',
    options: ['4:45 PM', '5:15 PM', '5:45 PM', '6:15 PM'],
    correctAnswer: '5:45 PM',
    difficulty: 'on-level'
  },

  // Data Analysis (6 questions)
  {
    id: 29,
    type: 'multiple-choice',
    domain: 'data-analysis',
    standard: '4.DA.1',
    question: 'The following numbers show the number of books read by students: 5, 8, 3, 7, 5, 6, 4, 5. What is the mode?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '5',
    difficulty: 'on-level'
  },
  {
    id: 30,
    type: 'multiple-choice',
    domain: 'data-analysis',
    standard: '4.DA.2',
    question: 'What is the median of these numbers: 12, 15, 18, 20, 22?',
    options: ['15', '18', '20', '22'],
    correctAnswer: '18',
    difficulty: 'on-level'
  },
  {
    id: 31,
    type: 'multiple-choice',
    domain: 'data-analysis',
    standard: '4.DA.3',
    question: 'In a bar graph, the tallest bar represents:',
    options: ['The smallest value', 'The largest value', 'The average value', 'The middle value'],
    correctAnswer: 'The largest value',
    difficulty: 'on-level'
  },
  {
    id: 32,
    type: 'multiple-choice',
    domain: 'data-analysis',
    standard: '4.DA.4',
    question: 'A survey asked 24 students about their favorite sport. 8 chose soccer, 6 chose basketball, 5 chose baseball, and 5 chose football. How many more students chose soccer than basketball?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '2',
    difficulty: 'on-level'
  },
  {
    id: 33,
    type: 'multiple-choice',
    domain: 'data-analysis',
    standard: '4.DA.5',
    question: 'What is the range of these test scores: 85, 92, 78, 95, 88?',
    options: ['10', '17', '78', '95'],
    correctAnswer: '17',
    difficulty: 'on-level'
  },
  {
    id: 34,
    type: 'multiple-choice',
    domain: 'data-analysis',
    standard: '4.DA.6',
    question: 'A line plot shows the number of siblings each student has. If 5 students have 2 siblings, how many X marks would be above the number 2?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '5',
    difficulty: 'on-level'
  },

  // Mixed/Application (10 questions)
  {
    id: 35,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.CA.9',
    question: 'Tommy has $45. He spends $18 on a book and $12 on a game. How much money does he have left?',
    options: ['$15', '$20', '$25', '$30'],
    correctAnswer: '$15',
    difficulty: 'on-level'
  },
  {
    id: 36,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.NS.9',
    question: 'Which number sentence is true?',
    options: ['1/3 > 1/2', '2/5 < 3/5', '3/4 < 1/2', '1/4 > 1/3'],
    correctAnswer: '2/5 < 3/5',
    difficulty: 'on-level'
  },
  {
    id: 37,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.CA.10',
    question: 'A garden has 6 rows of flowers. Each row has 9 flowers. How many flowers are in the garden?',
    options: ['45', '54', '63', '72'],
    correctAnswer: '54',
    difficulty: 'on-level'
  },
  {
    id: 38,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.M.7',
    question: 'A rectangular playground is 30 feet long and 20 feet wide. What is the perimeter of the playground?',
    options: ['50 feet', '100 feet', '600 feet', '1,000 feet'],
    correctAnswer: '100 feet',
    difficulty: 'on-level'
  },
  {
    id: 39,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.NS.10',
    question: 'What is 2.5 + 1.3?',
    options: ['3.6', '3.8', '4.6', '4.8'],
    correctAnswer: '3.8',
    difficulty: 'on-level'
  },
  {
    id: 40,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.CA.11',
    question: 'Emma reads 15 pages each day for 7 days. How many pages does she read in all?',
    options: ['90', '105', '120', '135'],
    correctAnswer: '105',
    difficulty: 'on-level'
  },
  {
    id: 41,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.G.7',
    question: 'A square has an area of 36 square units. What is the length of one side?',
    options: ['4 units', '6 units', '8 units', '9 units'],
    correctAnswer: '6 units',
    difficulty: 'on-level'
  },
  {
    id: 42,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.NS.11',
    question: 'Which decimal is equivalent to 3/10?',
    options: ['0.03', '0.3', '3.0', '30.0'],
    correctAnswer: '0.3',
    difficulty: 'on-level'
  },
  {
    id: 43,
    type: 'multiple-choice',
    domain: 'mixed',
    standard: '4.CA.12',
    question: 'There are 48 cookies to share equally among 6 friends. How many cookies does each friend get?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    difficulty: 'on-level'
  },
  {
    id: 44,
    type: 'open-ended',
    domain: 'mixed',
    standard: '4.CA.13',
    question: 'Explain how you would solve this problem: A store has 156 apples. They sell 89 apples. How many apples are left? Show your work and explain your thinking.',
    difficulty: 'on-level'
  }
];

// Below-Level Questions (44 questions - easier versions)
export const belowLevelQuestions: Question[] = onLevelQuestions.map((q, index) => ({
  ...q,
  id: index + 1,
  difficulty: 'below-level',
  // Simplified questions for below-level
  question: q.domain === 'number-sense' && q.id === 1 
    ? 'Which number is equal to 200 + 30 + 5?'
    : q.domain === 'computation' && q.id === 9
    ? 'What is 25 + 15?'
    : q.domain === 'computation' && q.id === 10
    ? 'What is 50 - 20?'
    : q.domain === 'computation' && q.id === 11
    ? 'What is 5 × 4?'
    : q.domain === 'computation' && q.id === 12
    ? 'What is 20 ÷ 4?'
    : q.question.replace(/6,789/g, '678').replace(/4,567/g, '456').replace(/3,000/g, '300').replace(/10,000/g, '1,000'),
  options: q.options?.map(opt => opt.replace(/6,789/g, '678').replace(/4,567/g, '456').replace(/3,000/g, '300').replace(/10,000/g, '1,000'))
}));

// Above-Level Questions (44 questions - harder versions)
export const aboveLevelQuestions: Question[] = onLevelQuestions.map((q, index) => ({
  ...q,
  id: index + 1,
  difficulty: 'above-level',
  // More challenging questions for above-level
  question: q.domain === 'number-sense' && q.id === 1
    ? 'Which number is equal to 50,000 + 3,000 + 400 + 50 + 6?'
    : q.domain === 'computation' && q.id === 9
    ? 'What is 3,847 + 2,956?'
    : q.domain === 'computation' && q.id === 10
    ? 'What is 8,542 - 3,967?'
    : q.domain === 'computation' && q.id === 11
    ? 'What is 47 × 23?'
    : q.domain === 'computation' && q.id === 12
    ? 'What is 384 ÷ 16?'
    : q.question.replace(/3,000/g, '30,000').replace(/6,789/g, '67,890').replace(/4,567/g, '45,670'),
  options: q.options?.map(opt => opt.replace(/3,000/g, '30,000').replace(/6,789/g, '67,890').replace(/4,567/g, '45,670'))
}));

