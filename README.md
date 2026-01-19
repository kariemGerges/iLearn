# Indiana iLearn 4th Grade Practice Exams

A comprehensive Next.js web application that simulates the Indiana iLearn 4th Grade Mathematics and English Language Arts assessments. This practice exam platform is designed to help students prepare for the actual iLearn test with questions aligned to Indiana Academic Standards.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Subjects Covered](#subjects-covered)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Difficulty Levels](#difficulty-levels)
- [Question Types](#question-types)
- [Scoring System](#scoring-system)
- [Technology Stack](#technology-stack)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Indiana Academic Standards](#indiana-academic-standards)
- [Contributing](#contributing)
- [License & Disclaimer](#license--disclaimer)

## Overview

This application provides a realistic simulation of the Indiana iLearn assessment experience for 4th grade students. It includes:

- **Mathematics Exam**: 44 questions covering all major math domains
- **English Language Arts Exam**: 40 questions covering reading, writing, and language skills
- **Three Difficulty Levels**: Below-Level (Easy), On-Level (Medium), and Above-Level (Hard)
- **Real-time Timer**: 90-minute countdown timer matching the actual exam
- **Instant Scoring**: Immediate feedback after submission
- **Progress Tracking**: Visual progress indicators and question navigation

## Features

### Core Features

- ✅ **Multiple Difficulty Levels** - Three levels to accommodate different student needs
- ✅ **Real Exam Simulation** - Timer, progress tracking, and question navigation
- ✅ **Multiple Question Types** - Multiple choice, multiple select, passage-based, and open-ended questions
- ✅ **Instant Scoring** - Immediate results with detailed performance breakdown
- ✅ **Domain Performance Analysis** - See performance by subject domain
- ✅ **Question-by-Question Review** - Review all answers after submission
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
- ✅ **Modern UI** - Beautiful gradient design with smooth animations

### Mathematics Exam Features

- **44 Questions** - Matches the typical number of questions on the real iLearn exam
- **70-100 Minutes** - Flexible time allocation
- **6 Domains Covered**:
  - Number Sense (8 questions)
  - Computation & Algebraic Thinking (8 questions)
  - Geometry (6 questions)
  - Measurement (6 questions)
  - Data Analysis (6 questions)
  - Mixed/Application (10 questions)

### English Language Arts Exam Features

- **40 Questions** - Matches the typical number of questions on the real iLearn exam
- **90 Minutes** - Standard time allocation
- **5 Domains Covered**:
  - Reading Foundations
  - Reading Comprehension
  - Vocabulary
  - Grammar
  - Writing

## Subjects Covered

### Mathematics
- Place value and number sense
- Addition, subtraction, multiplication, and division
- Fractions and decimals
- Geometry (shapes, angles, perimeter, area)
- Measurement (length, time, capacity)
- Data analysis (graphs, mean, median, mode)
- Word problems and real-world applications

### English Language Arts
- Reading comprehension with passages
- Vocabulary and word analysis
- Grammar and language conventions
- Writing tasks and composition
- Literary analysis

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** or **pnpm** package manager
  - npm comes with Node.js
  - pnpm: `npm install -g pnpm`

### Installation

1. **Clone or download the repository**
   ```bash
   cd ilearn-math-exam
   ```

2. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Using pnpm:
   ```bash
   pnpm install
   ```

3. **Run the development server**

   Using npm:
   ```bash
   npm run dev
   ```

   Using pnpm:
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Quick Start Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Project Structure

```
ilearn-math-exam/
├── app/
│   ├── ela/
│   │   └── [level]/
│   │       └── page.tsx          # ELA exam page (dynamic route)
│   ├── exam/
│   │   └── [level]/
│   │       └── page.tsx          # Math exam page (dynamic route)
│   ├── globals.css               # Global styles and Tailwind CSS
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page with subject selection
├── data/
│   ├── questions.ts              # Mathematics exam questions
│   └── elaQuestions.ts           # ELA exam questions
├── public/                       # Static assets (if any)
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

### Key Files

- **`app/page.tsx`**: Home page with subject and difficulty selection
- **`app/exam/[level]/page.tsx`**: Mathematics exam interface
- **`app/ela/[level]/page.tsx`**: English Language Arts exam interface
- **`data/questions.ts`**: All mathematics questions organized by difficulty
- **`data/elaQuestions.ts`**: All ELA questions organized by difficulty

## Usage Guide

### For Students

1. **Select a Subject**
   - Choose between Mathematics or English Language Arts

2. **Choose Difficulty Level**
   - **Below-Level (Easy)**: Green button - For students needing additional support
   - **On-Level (Medium)**: Blue button - Standard proficiency level
   - **Above-Level (Hard)**: Red/Orange button - For advanced students

3. **Take the Exam**
   - Read each question carefully
   - Select your answer(s) or type your response
   - Use Previous/Next buttons or the question grid to navigate
   - Monitor your progress and time remaining

4. **Submit and Review**
   - Click "Submit Exam" when finished
   - Review your score and performance breakdown
   - See which questions you answered correctly
   - Review your answers vs. correct answers

### Navigation Features

- **Question Grid**: Click any question number to jump directly to it
- **Previous/Next Buttons**: Navigate sequentially through questions
- **Progress Bar**: Visual indicator of exam completion
- **Timer**: Countdown timer showing remaining time (turns red when < 10 minutes)

## Difficulty Levels

### Below-Level (Easy) - Green
- Designed for students who need additional support
- Simplified question wording
- More straightforward problem-solving
- Builds foundational skills

### On-Level (Medium) - Blue
- Standard proficiency level
- Matches typical 4th grade expectations
- Aligned with Indiana Academic Standards
- Represents the core curriculum

### Above-Level (Hard) - Red/Orange
- For advanced students seeking challenge
- More complex problem-solving
- Multi-step reasoning required
- Extends beyond basic standards

## Question Types

### Mathematics

1. **Multiple Choice**
   - Single correct answer from 4 options
   - Standard A, B, C, D format

2. **Multiple Select**
   - Select all correct answers
   - May have 2 or more correct options

3. **Technology-Enhanced**
   - Interactive question formats
   - Drag-and-drop, matching, etc.

4. **Open-Ended**
   - Requires written explanation
   - Shows work and reasoning
   - Not included in automatic scoring

### English Language Arts

1. **Multiple Choice**
   - Standard reading comprehension questions
   - Vocabulary and grammar questions

2. **Passage-Based Questions**
   - Multiple questions per reading passage
   - Tests comprehension and analysis

3. **Writing Tasks**
   - Extended writing responses
   - Requires manual review
   - Not included in automatic scoring

## Scoring System

### Automatic Scoring

- **Multiple Choice**: Correct/Incorrect based on exact match
- **Multiple Select**: All correct answers must be selected (order doesn't matter)
- **Passage Questions**: Scored individually

### Manual Review Required

- **Open-Ended Questions**: Require teacher/educator review
- **Writing Tasks**: Need manual evaluation
- These are marked as "Needs Review" in results

### Score Display

After submission, students see:
- **Overall Percentage**: Score out of scorable questions
- **Correct/Total**: Number of correct answers
- **Domain Breakdown**: Performance by subject area
- **Question-by-Question Review**: See all answers and correct responses

## Technology Stack

### Core Technologies

- **Next.js 14.2.5** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Tailwind CSS 3.4.4** - Utility-first CSS framework

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Key Features Used

- **Server Components** - Next.js App Router
- **Client Components** - Interactive UI elements
- **Dynamic Routes** - `[level]` parameter for difficulty selection
- **React Hooks** - State management (useState, useEffect, useCallback)
- **TypeScript Interfaces** - Type definitions for questions

## Development

### Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Make Changes**
   - Edit files in `app/` directory
   - Add questions in `data/` directory
   - Modify styles in `globals.css` or component files

3. **View Changes**
   - Changes are hot-reloaded automatically
   - Open browser to see updates

### Adding Questions

To add new questions, edit the appropriate file:

- **Math Questions**: `data/questions.ts`
- **ELA Questions**: `data/elaQuestions.ts`

Follow the existing question structure:

```typescript
{
  id: number,
  type: 'multiple-choice' | 'multiple-select' | 'open-ended',
  domain: 'number-sense' | 'computation' | 'geometry' | ...,
  standard: string,
  question: string,
  options?: string[],
  correctAnswer?: string | string[],
  difficulty: 'on-level' | 'below-level' | 'above-level'
}
```

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Add comments for complex logic

## Building for Production

### Build Process

1. **Create Production Build**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

### Build Output

The build process:
- Compiles TypeScript
- Optimizes React components
- Generates static pages where possible
- Creates optimized JavaScript bundles
- Runs linting and type checking

### Build Verification

After building, verify:
- ✅ No TypeScript errors
- ✅ No linting errors
- ✅ All pages compile successfully
- ✅ Static pages are generated

## Deployment

### Deployment Options

#### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel automatically detects Next.js
4. Deploy with one click

#### Other Platforms

- **Netlify**: Supports Next.js with configuration
- **AWS Amplify**: Full Next.js support
- **Docker**: Containerize the application
- **Traditional Hosting**: Requires Node.js server

### Environment Variables

Currently, no environment variables are required. If needed in the future:
- Create `.env.local` for local development
- Add variables to deployment platform

## Indiana Academic Standards

### Mathematics Standards Covered

- **4.NS** - Number Sense
  - Place value, rounding, comparing numbers
  - Fractions and decimals
  
- **4.CA** - Computation & Algebraic Thinking
  - Operations with whole numbers
  - Word problems and equations
  
- **4.G** - Geometry
  - Shapes, angles, lines
  - Perimeter, area, symmetry
  
- **4.M** - Measurement
  - Length, time, capacity
  - Unit conversions
  
- **4.DA** - Data Analysis
  - Graphs and charts
  - Mean, median, mode, range

### ELA Standards Covered

- Reading Foundations
- Reading Comprehension
- Vocabulary Development
- Grammar and Language Conventions
- Writing Composition

## Contributing

### How to Contribute

1. **Fork the Repository**
2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make Your Changes**
4. **Test Thoroughly**
5. **Commit Your Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Test all changes thoroughly
- Update documentation as needed
- Ensure TypeScript types are correct

## License & Disclaimer

### Educational Purpose

This is an educational tool designed to help students prepare for the Indiana iLearn assessment. It is not affiliated with, endorsed by, or connected to the Indiana Department of Education or the official iLearn assessment program.

### Disclaimer

- This practice exam is for educational purposes only
- Questions are created to simulate the iLearn format but are not official questions
- Results are not official scores and should not be used for official assessment
- Always refer to official Indiana Department of Education resources for official information

### License

This project is provided as-is for educational use. Please respect copyright and educational use guidelines.

## Support

For questions, issues, or contributions:
- Check existing documentation
- Review code comments
- Test in development environment
- Report issues with detailed information

## Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Aligned with Indiana Academic Standards
- Designed for 4th grade students preparing for iLearn assessments

---

**Last Updated**: 2024
**Version**: 0.1.0
**Status**: Active Development
