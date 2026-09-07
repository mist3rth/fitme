import React from 'react';
import { motion } from 'motion/react';

export const TestimonialHeadlineSection: React.FC = () => {
  const avatars = [
    {
      src: '/perso1.webp',
      alt: 'Athlète tennis',
    },
    {
      src: '/perso2.webp',
      alt: 'Athlète fitness',
    },
    {
      src: '/perso3.webp',
      alt: 'Athlète sprint',
    },
    {
      src: '/perso4.webp',
      alt: 'Athlète trail',
    },
  ];

  return (
    <section
      id="athletes-review-intro-section"
      className="relative bg-white text-neutral-950 py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Block: Positioned lower down with top margin/padding to create vertical offset with the high headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start space-y-4 pt-12 sm:pt-20 lg:pt-28"
          >
            {/* Overlapping circular avatars - rolling animation from stacked position with -200deg rotation */}
            <div className="flex items-center -space-x-4 overflow-visible py-2">
              {avatars.map((avatar, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: -idx * 52, // Starts stacked on the first avatar
                    rotate: -200, // 200 degrees to the left
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Final spread-out position
                    rotate: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + idx * 0.14, // Staggered rollout sequence
                    ease: [0.16, 1, 0.3, 1], // Smooth natural rolling deceleration
                  }}
                  style={{ zIndex: 10 - idx }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3.5px] border-white shadow-md overflow-hidden bg-neutral-200 shrink-0 will-change-transform"
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>

            {/* Subtitle text - enlarged and light gray */}
            <p
              id="athletes-review-count"
              className="text-neutral-400 font-medium text-xl sm:text-2xl tracking-tight pt-1"
            >
              +10 000 avis d'athlètes
            </p>
          </motion.div>

          {/* Right Block: Headline placed high up at the top */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2
              id="athletes-review-heading"
              className="font-display font-medium text-3xl sm:text-5xl lg:text-[3.25rem] text-neutral-950 tracking-tight leading-[1.12] max-w-xl"
            >
              Ce que nos athlètes disent de l'expérience FiTME et des résultats qu'ils ont obtenus
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
