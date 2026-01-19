interface TimerProps {
  timeRemaining: number;
}

export default function Timer({ timeRemaining }: TimerProps) {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-right">
      <div className="text-sm text-white/70 mb-1">Time Remaining</div>
      <div className={`text-2xl font-bold ${timeRemaining < 600 ? 'text-red-400' : 'text-white'}`}>
        {formatTime(timeRemaining)}
      </div>
    </div>
  );
}

