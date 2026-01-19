interface InfoItem {
  title: string;
  description: string;
  color: string;
}

const infoItems: InfoItem[] = [
  {
    title: 'Aligned with Standards',
    description: 'All questions follow Indiana Academic Standards',
    color: 'bg-cyan-400'
  },
  {
    title: 'Instant Scoring',
    description: 'Get immediate feedback after submission',
    color: 'bg-teal-400'
  },
  {
    title: 'Multiple Formats',
    description: 'Multiple choice, passage-based, and writing tasks',
    color: 'bg-sky-400'
  },
  {
    title: 'Practice & Prepare',
    description: 'Simulate the real iLearn assessment experience',
    color: 'bg-blue-400'
  }
];

export default function ExamInfo() {
  return (
    <div className="glass-dark rounded-3xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        Exam Information
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full ${item.color} mt-2 flex-shrink-0`}></div>
            <div>
              <p className="text-white/90 font-semibold">{item.title}</p>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10 text-center">
        <p className="text-white/70 text-sm">
          These practice exams are designed to simulate the Indiana iLearn assessment format.
          <br />
          All questions align with Indiana Academic Standards for Grade 4.
        </p>
      </div>
    </div>
  );
}

