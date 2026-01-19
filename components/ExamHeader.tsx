'use client';

import { useRouter } from 'next/navigation';
import Timer from './Timer';
import ProgressBar from './ProgressBar';

interface ExamHeaderProps {
  title: string;
  difficultyLabel: string;
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: number;
}

export default function ExamHeader({
  title,
  difficultyLabel,
  currentQuestion,
  totalQuestions,
  timeRemaining
}: ExamHeaderProps) {
  const router = useRouter();
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="glass-dark sticky top-0 z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm"
            >
              ← Back to Difficulty
            </button>
            <h1 className="text-2xl font-bold text-white">
              {title}
            </h1>
          </div>
          <Timer timeRemaining={timeRemaining} />
        </div>
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-white/80 font-semibold">{difficultyLabel}</p>
          <p className="text-sm text-white/80 font-semibold">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}

