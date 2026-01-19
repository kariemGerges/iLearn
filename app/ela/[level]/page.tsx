'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { onLevelELAQuestions, belowLevelELAQuestions, aboveLevelELAQuestions, ELAQuestion } from '@/data/elaQuestions';

export default function ELAExamPage() {
  const params = useParams();
  const router = useRouter();
  const level = params.level as string;
  const [questions, setQuestions] = useState<ELAQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number | string]: string | string[] }>({});
  const [timeRemaining, setTimeRemaining] = useState(90 * 60); // 90 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number; percentage: number; results: any[] } | null>(null);
  const [currentPassageQuestion, setCurrentPassageQuestion] = useState(0);

  useEffect(() => {
    // Load questions based on difficulty level
    let loadedQuestions: ELAQuestion[] = [];
    switch (level) {
      case 'on-level':
        loadedQuestions = onLevelELAQuestions;
        break;
      case 'below-level':
        loadedQuestions = belowLevelELAQuestions;
        break;
      case 'above-level':
        loadedQuestions = aboveLevelELAQuestions;
        break;
      default:
        router.push('/');
        return;
    }
    setQuestions(loadedQuestions);
  }, [level, router]);

  const calculateScore = useCallback(() => {
    let correctCount = 0;
    let scorableCount = 0;
    const results: any[] = [];

    questions.forEach((question) => {
      if (question.type === 'passage' && question.passageQuestions) {
        // Handle passage questions
        question.passageQuestions.forEach((pq) => {
          scorableCount++;
          const studentAnswer = answers[pq.id];
          const isCorrect = studentAnswer === pq.correctAnswer;
          if (isCorrect) correctCount++;
          results.push({
            questionId: pq.id,
            correct: isCorrect,
            studentAnswer: studentAnswer,
            correctAnswer: pq.correctAnswer,
            question: pq.question,
            type: 'passage-question'
          });
        });
      } else if (question.type === 'writing') {
        // Writing questions need manual review
        const studentAnswer = answers[question.id];
        results.push({
          questionId: question.id,
          correct: typeof studentAnswer === 'string' && studentAnswer.trim().length > 0,
          studentAnswer: studentAnswer,
          correctAnswer: 'Needs manual review',
          question: question.question,
          type: 'writing'
        });
      } else {
        // Regular standalone questions
        scorableCount++;
        const studentAnswer = answers[question.id];
        const isCorrect = studentAnswer === question.correctAnswer;
        if (isCorrect) correctCount++;
        results.push({
          questionId: question.id,
          correct: isCorrect,
          studentAnswer: studentAnswer,
          correctAnswer: question.correctAnswer,
          question: question.question,
          type: question.type
        });
      }
    });

    const percentage = scorableCount > 0 ? Math.round((correctCount / scorableCount) * 100) : 0;

    return {
      correct: correctCount,
      total: scorableCount,
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

  const handleAnswerChange = (questionId: number | string, answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNext = () => {
    const question = questions[currentQuestion];
    if (question.type === 'passage' && question.passageQuestions) {
      if (currentPassageQuestion < question.passageQuestions.length - 1) {
        setCurrentPassageQuestion(currentPassageQuestion + 1);
      } else if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentPassageQuestion(0);
      }
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentPassageQuestion(0);
      }
    }
  };

  const handlePrevious = () => {
    const question = questions[currentQuestion];
    if (question.type === 'passage' && question.passageQuestions) {
      if (currentPassageQuestion > 0) {
        setCurrentPassageQuestion(currentPassageQuestion - 1);
      } else if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
        const prevQuestion = questions[currentQuestion - 1];
        if (prevQuestion.type === 'passage' && prevQuestion.passageQuestions) {
          setCurrentPassageQuestion(prevQuestion.passageQuestions.length - 1);
        }
      }
    } else {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
        const prevQuestion = questions[currentQuestion - 1];
        if (prevQuestion.type === 'passage' && prevQuestion.passageQuestions) {
          setCurrentPassageQuestion(prevQuestion.passageQuestions.length - 1);
        } else {
          setCurrentPassageQuestion(0);
        }
      }
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

  const getTotalQuestionCount = () => {
    let count = 0;
    questions.forEach((q) => {
      if (q.type === 'passage' && q.passageQuestions) {
        count += q.passageQuestions.length;
      } else {
        count += 1;
      }
    });
    return count;
  };

  const getCurrentQuestionNumber = () => {
    let count = 1;
    for (let i = 0; i < currentQuestion; i++) {
      const q = questions[i];
      if (q.type === 'passage' && q.passageQuestions) {
        count += q.passageQuestions.length;
      } else {
        count += 1;
      }
    }
    if (questions[currentQuestion]?.type === 'passage' && questions[currentQuestion]?.passageQuestions) {
      count += currentPassageQuestion;
    }
    return count;
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
        <div className="max-w-5xl mx-auto">
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
                {questions.some(q => q.type === 'writing') && (
                  <div className="text-sm text-white/70 italic bg-white/20 rounded-lg p-3 inline-block">
                    * Writing tasks require manual review and are not included in the automatic score
                  </div>
                )}
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
                  setCurrentPassageQuestion(0);
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
  const totalQuestions = getTotalQuestionCount();
  const currentQNum = getCurrentQuestionNumber();
  const progress = (currentQNum / totalQuestions) * 100;

  // Get current question to display
  let displayQuestion: any = null;
  let displayQuestionId: string | number = question.id;

  if (question.type === 'passage' && question.passageQuestions) {
    displayQuestion = question.passageQuestions[currentPassageQuestion];
    displayQuestionId = displayQuestion.id;
  } else {
    displayQuestion = question;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500">
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
                Indiana iLearn ELA Exam
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
              Question {currentQNum} of {totalQuestions}
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
          {/* Passage Display */}
          {question.type === 'passage' && question.passage && (
            <div className="mb-8 bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Reading Passage</h3>
              <div className="text-white/90 leading-relaxed whitespace-pre-line">
                {question.passage}
              </div>
            </div>
          )}

          {/* Question */}
          <div className="mb-8">
            <div className="flex items-start mb-6">
              <span className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold px-4 py-2 rounded-xl mr-4 text-lg shadow-lg shadow-cyan-500/50">
                {currentQNum}
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
                <p className="text-xl text-white leading-relaxed font-medium">{displayQuestion.question}</p>
              </div>
            </div>

            {/* Answer Options */}
            {displayQuestion.options && (
              <div className="ml-16 space-y-3">
                {displayQuestion.options.map((option: string, index: number) => (
                  <label
                    key={index}
                    className={`flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
                      answers[displayQuestionId] === option
                        ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]'
                        : 'bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/15 hover:scale-[1.01]'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${displayQuestionId}`}
                      value={option}
                      checked={answers[displayQuestionId] === option}
                      onChange={(e) => handleAnswerChange(displayQuestionId, e.target.value)}
                      className="mr-4 w-5 h-5 text-cyan-400 accent-cyan-400"
                    />
                    <span className="text-white font-medium">{String.fromCharCode(65 + index)}. {option}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Writing Task */}
            {question.type === 'writing' && (
              <div className="ml-16">
                <textarea
                  value={typeof answers[question.id] === 'string' ? answers[question.id] : ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className="w-full p-5 bg-white/10 border-2 border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none resize-none text-white placeholder-white/50 transition-all duration-300 focus:bg-white/15 focus:shadow-lg focus:shadow-cyan-500/30"
                  rows={12}
                  placeholder="Write your response here. Be sure to include a beginning, middle, and end..."
                />
              </div>
            )}
          </div>

          {/* Passage Question Navigation */}
          {question.type === 'passage' && question.passageQuestions && (
            <div className="mb-6 ml-16">
              <div className="flex gap-2 flex-wrap">
                {question.passageQuestions.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPassageQuestion(index)}
                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-300 ${
                      index === currentPassageQuestion
                        ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-110'
                        : answers[question.passageQuestions![index].id]
                        ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md hover:scale-105'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 pt-8 border-t border-white/20">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0 && (!question.passageQuestions || currentPassageQuestion === 0)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentQuestion === 0 && (!question.passageQuestions || currentPassageQuestion === 0)
                  ? 'bg-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105 shadow-lg'
              }`}
            >
              ← Previous
            </button>

            {currentQNum === totalQuestions ? (
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

