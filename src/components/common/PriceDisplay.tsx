import React from 'react';

interface PriceDisplayProps {
  amount: number;
  category?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showPrefix?: boolean;
}

export const formatINR = (val: number): string => {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(val);
};

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  amount,
  category,
  size = 'md',
  showPrefix = true,
}) => {
  const isPerPlate = category?.toLowerCase() === 'catering' && amount < 10000;

  const fontSizes = {
    sm: 'text-sm font-semibold',
    md: 'text-base font-bold',
    lg: 'text-xl font-bold',
    xl: 'text-2xl font-extrabold',
  };

  return (
    <div className="inline-flex items-baseline gap-1">
      {showPrefix && (
        <span className="text-xs text-charcoal-400 font-normal">
          {isPerPlate ? 'From' : 'Starting from'}
        </span>
      )}
      <span className={`${fontSizes[size]} text-charcoal-900 tracking-tight`}>
        ₹{formatINR(amount)}
      </span>
      {isPerPlate && (
        <span className="text-xs text-charcoal-500 font-normal">/plate</span>
      )}
    </div>
  );
};
