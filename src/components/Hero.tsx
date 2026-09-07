import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FlipButton } from './TextFlip3D';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax effect on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 45]); // very slight parallax translation

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-end overflow-hidden bg-neutral-950 pb-28 sm:pb-32 lg:pb-20"
    >
      {/* Background Image Container with Initial De-zoom Animation & Parallax on Scroll */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ y: bgY }}
      >
        <motion.img
          src="/herosport.webp"
          alt="Athlète FiTME au regard déterminé"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          loading="eager"
          initial={{ scale: 1.18, opacity: 0.75 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1], // Smooth cinematic de-zoom deceleration
          }}
        />

        {/* Ambient atmospheric gradients for cinematic look & optimal contrast */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent mix-blend-overlay" />
        </motion.div>
      </motion.div>

      {/* Main Hero Foreground Content with Staggered Entrance */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
          
          {/* Left: Giant Display Typography "Sports" with smooth slide-up reveal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.0,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex-1 select-none"
          >
            <h1
              id="hero-main-title"
              className="font-display font-extrabold text-[#F9DE7C] text-[clamp(4.2rem,13vw,11.5rem)] leading-[0.88] tracking-tight drop-shadow-sm"
            >
              Sports
            </h1>
          </motion.div>

          {/* Right: Sub-headline & Call-To-Action Button arriving sequentially */}
          <div className="max-w-md space-y-6 lg:pb-3">
            <motion.p
              id="hero-subtitle-text"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white font-medium text-xl sm:text-2xl lg:text-[1.65rem] leading-snug tracking-normal drop-shadow"
            >
              Atteignez vos objectifs avec un coaching qui donne des résultats !
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <FlipButton
                id="hero-join-cta-button"
                onClick={onJoinClick}
                text="Rejoindre"
                className="group inline-flex items-center gap-2.5 bg-[#F9DE7C] hover:bg-[#ebd06b] active:scale-95 text-neutral-950 font-semibold px-7 py-3 rounded-xl text-base transition-all duration-200 shadow-xl hover:shadow-amber-400/20 cursor-pointer"
                icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                iconPosition="right"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
