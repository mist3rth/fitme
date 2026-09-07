import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TextFlip3DProps {
  text: string;
  className?: string;
  isHovered?: boolean;
}

export const TextFlip3D: React.FC<TextFlip3DProps> = ({
  text,
  className = '',
  isHovered = false
}) => {
  const characters = text.split('');

  return (
    <span
      className={`inline-flex items-center select-none overflow-hidden ${className}`}
      style={{ perspective: 1000 }}
      aria-label={text}
    >
      {characters.map((char, index) => {
        const isSpace = char === ' ';
        return (
          <span
            key={index}
            className="relative inline-block overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              display: 'inline-block'
            }}
          >
            {/* Primary Character (Face 1: Flips up and out) */}
            <motion.span
              className="inline-block transform-gpu"
              style={{
                display: 'inline-block',
                transformOrigin: '50% 50% -8px',
                backfaceVisibility: 'hidden'
              }}
              animate={
                isHovered
                  ? { y: '-100%', rotateX: 90, opacity: 0 }
                  : { y: '0%', rotateX: 0, opacity: 1 }
              }
              transition={{
                duration: 0.38,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {isSpace ? '\u00A0' : char}
            </motion.span>

            {/* Secondary Character (Face 2: Flips in from below) */}
            <motion.span
              className="absolute inset-0 inline-block transform-gpu"
              style={{
                display: 'inline-block',
                transformOrigin: '50% 50% -8px',
                backfaceVisibility: 'hidden'
              }}
              initial={{ y: '100%', rotateX: -90, opacity: 0 }}
              animate={
                isHovered
                  ? { y: '0%', rotateX: 0, opacity: 1 }
                  : { y: '100%', rotateX: -90, opacity: 0 }
              }
              transition={{
                duration: 0.38,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1]
              }}
              aria-hidden="true"
            >
              {isSpace ? '\u00A0' : char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};

interface FlipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  textClassName?: string;
}

export const FlipButton: React.FC<FlipButtonProps> = ({
  text,
  icon,
  iconPosition = 'right',
  className = '',
  textClassName = '',
  onMouseEnter,
  onMouseLeave,
  children,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...props}
      className={className}
      onMouseEnter={(e) => {
        setHovered(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
    >
      {icon && iconPosition === 'left' && icon}
      <TextFlip3D text={text} className={textClassName} isHovered={hovered} />
      {icon && iconPosition === 'right' && icon}
      {children}
    </button>
  );
};
