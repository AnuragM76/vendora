import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface VerifiedBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 'sm', showText = true }) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-xs font-medium',
    lg: 'text-sm font-medium',
  };

  return (
    <span className={`inline-flex items-center gap-1 text-emeraldGreen bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full ${textSizes[size]}`}>
      <ShieldCheck className={iconSizes[size]} />
      {showText && <span>Verified</span>}
    </span>
  );
};
