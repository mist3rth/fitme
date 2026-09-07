import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type FontStyle = React.CSSProperties;

type TransitionValue = {
  type?: string;
  duration?: number;
  delay?: number;
  ease?: string | number[];
  staggerChildren?: number;
};

type StaggerFrom = 'start' | 'center' | 'end' | 'random' | 'edges';
type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div' | 'section';

type Props = {
  text: string;
  font?: FontStyle;
  className?: string;
  color?: string;
  id?: string;
  startY?: number;
  startOpacity?: number;
  staggerFrom?: StaggerFrom;
  tag?: TextTag;
  transition?: TransitionValue;
  once?: boolean;
};

const mapEase = (ease: TransitionValue['ease']): string => {
  if (typeof ease !== 'string') return 'power2.out';

  const easeMap: Record<string, string> = {
    linear: 'none',
    easeIn: 'power2.in',
    easeOut: 'power2.out',
    easeInOut: 'power2.inOut',
    circIn: 'circ.in',
    circOut: 'circ.out',
    circInOut: 'circ.inOut',
    backIn: 'back.in',
    backOut: 'back.out(1.7)',
    backInOut: 'back.inOut',
    anticipate: 'back.out(1.7)',
  };

  return easeMap[ease] ?? ease;
};

export const LetterDropText: React.FC<Props> = ({
  text,
  font,
  className = '',
  color,
  id,
  startY = -45,
  startOpacity = 0,
  staggerFrom = 'start',
  tag = 'h2',
  transition = {
    type: 'tween',
    duration: 0.6,
    delay: 0.1,
    ease: 'backOut',
    staggerChildren: 0.05, // Increased since we animate words now
  },
  once = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const playAnimation = useCallback(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.anim-word');
    if (!words.length) return;

    gsap.killTweensOf(words);

    gsap.set(words, {
      clearProps: 'transform,opacity',
    });

    gsap.from(words, {
      y: startY,
      opacity: startOpacity / 100,
      duration: transition.duration ?? 0.6,
      delay: transition.delay ?? 0.1,
      stagger: {
        each: transition.staggerChildren ?? 0.05,
        from: staggerFrom as gsap.StaggerVars['from'],
      },
      ease: mapEase(transition.ease),
    });
  }, [startY, startOpacity, staggerFrom, transition]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playAnimation();
            if (once) {
              setHasAnimated(true);
              observer.disconnect();
            }
          } else if (!once && hasAnimated) {
            // Reset if repeatable
            const words = el.querySelectorAll('.anim-word');
            gsap.set(words, { opacity: startOpacity / 100, y: startY });
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [playAnimation, once, hasAnimated, startOpacity, startY]);

  // Split into words only
  const words = text.split(' ');

  return React.createElement(
    tag,
    {
      ref: containerRef,
      id,
      className,
      style: {
        margin: 0,
        display: 'block',
        width: '100%',
        color,
        ...font,
      },
    },
    words.map((word, wordIndex) => (
      <span
        key={wordIndex}
        className="anim-word inline-block will-change-transform"
        style={{ 
          opacity: 0, 
          marginRight: wordIndex < words.length - 1 ? '0.28em' : '0' 
        }}
      >
        {word}
      </span>
    ))
  );
};
