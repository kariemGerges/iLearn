import { Question } from '@/data/questions';
import AnswerOptions from './AnswerOptions';

interface QuestionDisplayProps {
  question: Question;
  questionNumber: number;
  answer: string | string[] | undefined;
  onAnswerChange: (questionId: number, answer: string | string[]) => void;
}

export default function QuestionDisplay({ 
  question, 
  questionNumber, 
  answer, 
  onAnswerChange 
}: QuestionDisplayProps) {
  return (
    <div className="mb-8">
      <div className="flex items-start mb-6">
        <span className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white font-bold px-4 py-2 rounded-xl mr-4 text-lg shadow-lg shadow-cyan-500/50">
          {questionNumber}
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

      <AnswerOptions 
        question={question} 
        answer={answer} 
        onAnswerChange={onAnswerChange} 
      />
    </div>
  );
}

