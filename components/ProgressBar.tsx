interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
      <div
        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

