import { Question } from '@/data/questions';

interface AnswerOptionsProps {
  question: Question;
  answer: string | string[] | undefined;
  onAnswerChange: (questionId: number, answer: string | string[]) => void;
}

export default function AnswerOptions({ question, answer, onAnswerChange }: AnswerOptionsProps) {
  if (question.type === 'multiple-choice' && question.options) {
    return (
      <div className="ml-16 space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
              answer === option
                ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]'
                : 'bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/15 hover:scale-[1.01]'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={answer === option}
              onChange={(e) => onAnswerChange(question.id, e.target.value)}
              className="mr-4 w-5 h-5 text-cyan-400 accent-cyan-400"
            />
            <span className="text-white font-medium">{String.fromCharCode(65 + index)}. {option}</span>
          </label>
        ))}
      </div>
    );
  }

  if (question.type === 'multiple-select' && question.options) {
    const currentAnswer = answer;
    const current = Array.isArray(currentAnswer) ? [...currentAnswer] : [];

    return (
      <div className="ml-16 space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-5 rounded-xl cursor-pointer transition-all duration-300 transform ${
              Array.isArray(answer) && answer.includes(option)
                ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]'
                : 'bg-white/10 border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/15 hover:scale-[1.01]'
            }`}
          >
            <input
              type="checkbox"
              name={`question-${question.id}`}
              value={option}
              checked={Array.isArray(answer) && answer.includes(option)}
              onChange={(e) => {
                if (e.target.checked) {
                  onAnswerChange(question.id, [...current, option]);
                } else {
                  onAnswerChange(question.id, current.filter((a) => a !== option));
                }
              }}
              className="mr-4 w-5 h-5 text-cyan-400 accent-cyan-400"
            />
            <span className="text-white font-medium">{String.fromCharCode(65 + index)}. {option}</span>
          </label>
        ))}
      </div>
    );
  }

  if (question.type === 'open-ended') {
    return (
      <div className="ml-16">
        <textarea
          value={typeof answer === 'string' ? answer : ''}
          onChange={(e) => onAnswerChange(question.id, e.target.value)}
          className="w-full p-5 bg-white/10 border-2 border-white/20 rounded-xl focus:border-cyan-400 focus:outline-none resize-none text-white placeholder-white/50 transition-all duration-300 focus:bg-white/15 focus:shadow-lg focus:shadow-cyan-500/30"
          rows={8}
          placeholder="Show your work and explain your thinking here..."
        />
      </div>
    );
  }

  return null;
}

