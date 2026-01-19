import Link from "next/link";

interface ExamCardProps {
  subject: 'math' | 'ela';
  title: string;
  questionCount: string;
  timeRange: string;
  description: string;
}

export default function ExamCard({ subject, title, questionCount, timeRange, description }: ExamCardProps) {
  const difficultyLevels = [
    { level: 'below-level', label: 'Below-Level Difficulty (Easy)', color: 'from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700', shadow: 'shadow-emerald-500/50' },
    { level: 'on-level', label: 'On-Level Difficulty (Medium)', color: 'from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700', shadow: 'shadow-blue-500/50' },
    { level: 'above-level', label: 'Above-Level Difficulty (Hard)', color: 'from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700', shadow: 'shadow-red-500/50' },
  ];

  const basePath = subject === 'math' ? '/exam' : '/ela';

  return (
    <div className="glass-dark rounded-3xl shadow-2xl p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/80">{questionCount} • {timeRange}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        {difficultyLevels.map((difficulty) => (
          <Link 
            key={difficulty.level}
            href={`${basePath}/${difficulty.level}`}
            className={`block w-full bg-gradient-to-r ${difficulty.color} text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg ${difficulty.shadow}`}
          >
            {difficulty.label}
          </Link>
        ))}
      </div>

      <div className="text-sm text-white/70 text-center">
        {description}
      </div>
    </div>
  );
}

