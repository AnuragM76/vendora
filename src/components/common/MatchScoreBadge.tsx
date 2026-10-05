import React from 'react';
import { Sparkles } from 'lucide-react';

interface MatchScoreBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'subtle' | 'pill' | 'detailed';
  showLabel?: boolean;
}

export const MatchScoreBadge: React.FC<MatchScoreBadgeProps> = ({
  score,
  size = 'md',
  variant = 'pill',
  showLabel = true,
}) => {
  const getScoreColor = (s: number) => {
    if (s >= 90) return { bg: 'bg-ai-50 text-ai-700 border-ai-200', dot: 'bg-ai-500' };
    if (s >= 80) return { bg: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' };
    return { bg: 'bg-charcoal-50 text-charcoal-700 border-charcoal-200', dot: 'bg-charcoal-400' };
  };

  const style = getScoreColor(score);

  if (variant === 'detailed') {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-ai-50 border border-ai-200 text-ai-900 shadow-sm">
        <div className="w-8 h-8 rounded-lg bg-ai-500 text-white flex items-center justify-center font-bold text-sm">
          {score}%
        </div>
        <div className="text-left">
          <div className="text-xs font-semibold text-ai-900 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-ai-500" />
            AI Match Score
          </div>
          <div className="text-[10px] text-ai-600 font-medium">Based on your event profile</div>
        </div>
      </div>
    );
  }

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5 font-bold',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-semibold border ${style.bg} ${sizes[size]}`}>
      <Sparkles className="w-3 h-3 text-ai-500" />
      <span>{score}% {showLabel && <span className="font-normal opacity-90">AI Match</span>}</span>
    </span>
  );
};
