interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onQuestionClick: (index: number) => void;
  answers: { [key: number]: string | string[] };
  questions: any[];
}

export default function NavigationButtons({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  onQuestionClick,
  answers,
  questions
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 pt-8 border-t border-white/20">
      <button
        onClick={onPrevious}
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
            onClick={() => onQuestionClick(index)}
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

      {currentQuestion === totalQuestions - 1 ? (
        <button
          onClick={onSubmit}
          className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg shadow-emerald-500/50 hover:scale-105"
        >
          Submit Exam
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:scale-105"
        >
          Next →
        </button>
      )}
    </div>
  );
}

