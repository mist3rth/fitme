import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
  iconColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  textColor = 'text-white',
  iconColor = '#F9DE7C',
  size = 'md',
}) => {
  const iconSize = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  }[size];

  const textClasses = {
    sm: 'text-xl font-bold tracking-tight',
    md: 'text-2xl font-bold tracking-tight',
    lg: 'text-3xl font-extrabold tracking-tight',
    xl: 'text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight',
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Abstract connected sports nodes icon matching Elevare logo */}
      <svg
        className={`${iconSize} shrink-0`}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="12" r="5" fill={iconColor} />
        <circle cx="20" cy="8" r="4.5" fill={iconColor} />
        <circle cx="26" cy="18" r="5" fill={iconColor} />
        <circle cx="16" cy="24" r="5" fill={iconColor} />
        <path
          d="M10 12L20 8M20 8L26 18M26 18L16 24M16 24L10 12"
          stroke={iconColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="12" r="2.5" fill="#171717" fillOpacity="0.15" />
        <circle cx="26" cy="18" r="2.5" fill="#171717" fillOpacity="0.15" />
      </svg>

      <span className={`font-display ${textClasses} ${textColor}`}>
        FiTME
      </span>
    </div>
  );
};
