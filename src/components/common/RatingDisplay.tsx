import React from 'react';
import { Star } from 'lucide-react';

interface RatingDisplayProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export const RatingDisplay: React.FC<RatingDisplayProps> = ({
  rating,
  reviewCount,
  size = 'md',
  showCount = true,
}) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm font-semibold',
    lg: 'text-base font-bold',
  };

  return (
    <div className="inline-flex items-center gap-1.5 text-charcoal-900">
      <div className="flex items-center gap-1">
        <Star className={`${iconSizes[size]} fill-gold-500 text-gold-500`} />
        <span className={textSizes[size]}>{rating.toFixed(1)}</span>
      </div>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-charcoal-400 font-normal">
          ({reviewCount})
        </span>
      )}
    </div>
  );
};
