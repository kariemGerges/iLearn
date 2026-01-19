'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { onLevelQuestions, belowLevelQuestions, aboveLevelQuestions, Question } from '@/data/questions';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const level = params.level as string;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string | string[] }>({});
  const [timeRemaining, setTimeRemaining] = useState(90 * 60); // 90 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number; percentage: number; results: { questionId: number; correct: boolean; studentAnswer: string | string[] | undefined; correctAnswer: string | string[] | undefined }[] } | null>(null);

  useEffect(() => {
    // Load questions based on difficulty level
    let loadedQuestions: Question[] = [];
    switch (level) {
      case 'on-level':
        loadedQuestions = onLevelQuestions;
        break;
      case 'below-level':
        loadedQuestions = belowLevelQuestions;
        break;
      case 'above-level':
        loadedQuestions = aboveLevelQuestions;
        break;
      default:
        router.push('/');
        return;
    }
    setQuestions(loadedQuestions);
  }, [level, router]);

  const calculateScore = useCallback(() => {
    let correctCount = 0;
    let scorableCount = 0; // Count of questions that can be auto-scored (excludes open-ended)
    const results: { questionId: number; correct: boolean; studentAnswer: string | string[] | undefined; correctAnswer: string | string[] | undefined }[] = [];

    questions.forEach((question) => {
      const studentAnswer = answers[question.id];
      const correctAnswer = question.correctAnswer;

      let isCorrect = false;

      if (question.type === 'open-ended') {
        // For open-ended questions, mark as answered but don't count in score
        // These require manual review
        isCorrect = typeof studentAnswer === 'string' && studentAnswer.trim().length > 0;
        // Don't increment scorableCount for open-ended questions
      } else {
        // Count this question in the scorable total
        scorableCount++;
        
        if (question.type === 'multiple-select') {
          // For multiple select, compare arrays
          if (Array.isArray(studentAnswer) && Array.isArray(correctAnswer)) {
            const studentSorted = [...studentAnswer].sort().join(',');
            const correctSorted = [...correctAnswer].sort().join(',');
            isCorrect = studentSorted === correctSorted;
          }
        } else {
          // For multiple choice, direct comparison
          isCorrect = studentAnswer === correctAnswer;
        }

        if (isCorrect) {
          correctCount++;
        }
      }

      results.push({
        questionId: question.id,
        correct: isCorrect,
        studentAnswer: studentAnswer,
        correctAnswer: correctAnswer,
      });
    });

    // Calculate percentage based on scorable questions only
    const percentage = scorableCount > 0 ? Math.round((correctCount / scorableCount) * 100) : 0;

    return {
      correct: correctCount,
      total: scorableCount, // Total scorable questions (excludes open-ended)
      percentage: percentage,
      results: results,
    };
  }, [questions, answers]);

  const handleSubmit = useCallback(() => {
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setIsSubmitted(true);
  }, [calculateScore]);

  useEffect(() => {
    // Timer countdown
    if (timeRemaining > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeRemaining, isSubmitted, handleSubmit]);

  const handleAnswerChange = (questionId: number, answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyLabel = () => {
    switch (level) {
      case 'on-level':
        return 'On-Level Difficulty';
      case 'below-level':
        return 'Below-Level Difficulty';
      case 'above-level':
        return 'Above-Level Difficulty';
      default:
        return '';
    }
  };

  // Structured data for SEO
  const examStructuredData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": `Indiana iLearn 4th Grade Math Exam - ${getDifficultyLabel()}`,
    "description": `Practice exam for Indiana iLearn 4th grade Mathematics - ${getDifficultyLabel()}. 44 questions covering all major math domains.`,
    "educationalLevel": "Grade 4",
    "educationalUse": "Practice Test",
    "learningResourceType": "Practice Exam",
    "about": {
      "@type": "Thing",
      "name": "Indiana Academic Standards - Mathematics Grade 4"
    },
    "teaches": [
      "Number Sense",
      "Computation",
      "Geometry",
      "Measurement",
      "Data Analysis"
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Grade 4 Students"
    },
    "numberOfQuestions": questions.length,
    "timeRequired": "PT90M"
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mb-4"></div>
          <p className="text-xl text-white font-semibold">Loading exam...</p>
        </div>
      </div>
    );
  }

  if (isSubmitted && score) {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(examStructuredData) }}
        />
        <div className="max-w-5xl mx-auto">
          {/* Score Summary */}
          <div className="glass-dark rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Exam Results</h1>
            <p className="text-center text-white/80 text-lg mb-10">{getDifficultyLabel()}</p>
            
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
                onClick={() => {
                  setAnswers({});
                  setCurrentQuestion(0);
                  setIsSubmitted(false);
                  setScore(null);
                  setTimeRemaining(90 * 60);
                }}
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

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(examStructuredData) }}
        />
        {/* Header */}
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
                  Indiana iLearn Math Exam
                </h1>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/70 mb-1">Time Remaining</div>
                <div className={`text-2xl font-bold ${timeRemaining < 600 ? 'text-red-400' : 'text-white'}`}>
                  {formatTime(timeRemaining)}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-white/80 font-semibold">{getDifficultyLabel()}</p>
              <p className="text-sm text-white/80 font-semibold">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="glass-dark rounded-3xl shadow-2xl p-8 md:p-10">
            {/* Question */}
            <div className="mb-8">
              <div className="flex items-start mb-6">
                <span className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold px-4 py-2 rounded-xl mr-4 text-lg shadow-lg shadow-cyan-500/50">
                  {currentQuestion + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-cyan-500/30 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full">
                      {question.standard}
                    </span>
                    <span className="bg-teal-500/30 text-teal-200 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                      {question.domain.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-xl text-white leading-relaxed font-medium">{question.question}</p>
                </div>
              </div>

            {/* Answer Options */}
            {question.type === 'multiple-choice' && question.options && (
              <div className="ml-16 space-y-3">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
                      answers[question.id] === option
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]'
                        : 'bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/15 hover:scale-[1.01]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      className="mr-4 w-5 h-5 text-cyan-400 accent-cyan-400"
                    />
                    <span className="text-white font-medium">{String.fromCharCode(65 + index)}. {option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'multiple-select' && question.options && (
              <div className="ml-16 space-y-3">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
                      Array.isArray(answers[question.id]) && answers[question.id].includes(option)
                        ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]'
                        : 'bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/15 hover:scale-[1.01]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={`question-${question.id}`}
                      value={option}
                      checked={Array.isArray(answers[question.id]) && answers[question.id].includes(option)}
                      onChange={(e) => {
                        const currentAnswer = answers[question.id];
                        const current = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
                        if (e.target.checked) {
                          handleAnswerChange(question.id, [...current, option]);
                        } else {
                          handleAnswerChange(question.id, current.filter((a) => a !== option));
                        }
                      }}
                      className="mr-4 w-5 h-5 text-cyan-400 accent-cyan-400"
                    />
                    <span className="text-white font-medium">{String.fromCharCode(65 + index)}. {option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'open-ended' && (
              <div className="ml-16">
                <textarea
                  value={typeof answers[question.id] === 'string' ? answers[question.id] : ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="w-full p-5 bg-white/10 border-2 border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none resize-none text-white placeholder-white/50 transition-all duration-300 focus:bg-white/15 focus:shadow-lg focus:shadow-cyan-500/30"
                  rows={8}
                  placeholder="Show your work and explain your thinking here..."
                />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 pt-8 border-t border-white/20">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? 'bg-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105 shadow-lg'
              }`}
            >
              ← Previous
            </button>

            <div className="flex flex-wrap gap-2 justify-center max-w-md">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-300 ${
                    index === currentQuestion
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-110'
                      : answers[questions[index].id]
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md hover:scale-105'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:scale-105"
              >
                Submit Exam
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:scale-105"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

