'use client';

import { Question } from '@/data/questions';
import { useRouter } from 'next/navigation';

interface ScoreResult {
  questionId: number;
  correct: boolean;
  studentAnswer: string | string[] | undefined;
  correctAnswer: string | string[] | undefined;
}

interface Score {
  correct: number;
  total: number;
  percentage: number;
  results: ScoreResult[];
}

interface ScoreDisplayProps {
  score: Score;
  questions: Question[];
  difficultyLabel: string;
  onRetake: () => void;
}

export default function ScoreDisplay({ score, questions, difficultyLabel, onRetake }: ScoreDisplayProps) {
  const router = useRouter();

  const getScoreGradient = (percentage: number) => {
    if (percentage >= 80) return 'from-emerald-400 to-teal-500';
    if (percentage >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  const getScoreShadow = (percentage: number) => {
    if (percentage >= 80) return 'shadow-emerald-500/50';
    if (percentage >= 60) return 'shadow-yellow-500/50';
    return 'shadow-red-500/50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-dark rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Exam Results</h1>
          <p className="text-center text-white/80 text-lg mb-10">{difficultyLabel}</p>
          
          <div className={`bg-gradient-to-br ${getScoreGradient(score.percentage)} rounded-3xl p-10 mb-8 shadow-2xl ${getScoreShadow(score.percentage)}`}>
            <div className="text-center">
              <div className="text-7xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
                {score.percentage}%
              </div>
              <div className="text-3xl font-bold text-white/90 mb-3">
                {score.correct} out of {score.total} correct
              </div>
              <div className="text-xl text-white/80 mb-4">
                {score.correct} questions answered correctly
              </div>
              {questions.some(q => q.type === 'open-ended') && (
                <div className="text-sm text-white/70 italic bg-white/20 rounded-lg p-3 inline-block">
                  * Open-ended questions are not included in the automatic score
                </div>
              )}
            </div>
          </div>

          {/* Performance Breakdown by Domain */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Performance by Domain</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['number-sense', 'computation', 'geometry', 'measurement', 'data-analysis', 'mixed'].map((domain) => {
                const domainQuestions = questions.filter((q) => q.domain === domain);
                const domainResults = score.results.filter((r) => {
                  const q = questions.find((question) => question.id === r.questionId);
                  return q?.domain === domain;
                });
                const domainCorrect = domainResults.filter((r) => r.correct).length;
                const domainTotal = domainQuestions.length;
                const domainPercentage = domainTotal > 0 ? Math.round((domainCorrect / domainTotal) * 100) : 0;

                return (
                  <div key={domain} className="glass rounded-2xl p-5 hover:scale-105 transition-transform duration-300">
                    <div className="font-bold text-white/90 mb-2 capitalize text-sm">
                      {domain.replace('-', ' ')}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {domainCorrect}/{domainTotal}
                    </div>
                    <div className="text-sm text-white/70">{domainPercentage}%</div>
                    <div className="mt-2 w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${domainPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question-by-Question Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Question Results</h2>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {score.results.map((result, index) => {
                const question = questions.find((q) => q.id === result.questionId);
                if (!question) return null;

                const isOpenEnded = question.type === 'open-ended';

                return (
                  <div
                    key={result.questionId}
                    className={`glass rounded-2xl p-5 border-2 ${
                      isOpenEnded
                        ? 'border-cyan-400/50 bg-cyan-500/10'
                        : result.correct
                        ? 'border-emerald-400/50 bg-emerald-500/10'
                        : 'border-red-400/50 bg-red-500/10'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-bold text-lg ${
                          isOpenEnded
                            ? 'text-cyan-300'
                            : result.correct
                            ? 'text-emerald-300'
                            : 'text-red-300'
                        }`}
                      >
                        Q{index + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`font-semibold ${
                            isOpenEnded
                              ? 'text-cyan-300'
                              : result.correct
                              ? 'text-emerald-300'
                              : 'text-red-300'
                          }`}>
                            {isOpenEnded
                              ? 'Needs Review'
                              : result.correct
                              ? 'Correct'
                              : 'Incorrect'}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm mb-3">{question.question.substring(0, 120)}...</p>
                        {isOpenEnded ? (
                          <div className="mt-3 text-sm space-y-2">
                            <div className="text-white/70">
                              <span className="font-semibold text-white">Your answer:</span>{' '}
                              {typeof result.studentAnswer === 'string' && result.studentAnswer.trim()
                                ? result.studentAnswer.substring(0, 200) + (result.studentAnswer.length > 200 ? '...' : '')
                                : 'No answer provided'}
                            </div>
                            <div className="text-cyan-300 text-xs italic bg-cyan-500/20 rounded-lg p-2">
                              Note: Open-ended questions require manual review for accurate scoring.
                            </div>
                          </div>
                        ) : !result.correct ? (
                          <div className="mt-3 text-sm space-y-2">
                            <div className="text-white/70">
                              <span className="font-semibold text-white">Your answer:</span>{' '}
                              {Array.isArray(result.studentAnswer)
                                ? result.studentAnswer.join(', ')
                                : result.studentAnswer || 'No answer'}
                            </div>
                            <div className="text-emerald-300">
                              <span className="font-semibold">Correct answer:</span>{' '}
                              {Array.isArray(result.correctAnswer)
                                ? result.correctAnswer.join(', ')
                                : result.correctAnswer}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-white/10">
            <button
              onClick={() => router.push('/')}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white rounded-xl font-bold hover:from-sky-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:scale-105"
            >
              ← Back to Difficulty Selection
            </button>
            <button
              onClick={onRetake}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:scale-105"
            >
              Retake Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

