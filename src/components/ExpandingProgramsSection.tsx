import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FlipButton } from './TextFlip3D';

interface ProgramCard {
  id: string;
  number: string;
  badge: string;
  title: string;
  description: string;
  image: string;
}

const PROGRAMS: ProgramCard[] = [
  {
    id: 'running',
    number: '01',
    badge: 'Programme',
    title: 'Course à pied',
    description: 'Développez des compétences de haut niveau, votre confiance et votre intelligence de jeu grâce à un entraînement structuré,',
    image: '/course.webp',
  },
  {
    id: 'tennis',
    number: '02',
    badge: 'Programme',
    title: 'Tennis',
    description: 'Développez les compétences fondamentales grâce à un coaching expert et des programmes d’entraînement structurés.',
    image: '/tennis.webp',
  },
  {
    id: 'basketball',
    number: '03',
    badge: 'Programme',
    title: 'Basketball',
    description: 'Maîtrisez le tir, le dribble sous pression, la vision tactique et l’explosivité verticale sur le terrain.',
    image: '/basket.webp',
  },
  {
    id: 'football',
    number: '04',
    badge: 'Programme',
    title: 'Football',
    description: 'Perfectionnez votre contrôle orienté, votre prise de décision rapide et votre puissance athlétique de match.',
    image: '/foot.webp',
  },
];

interface ExpandingProgramsSectionProps {
  onViewMore?: () => void;
}

export const ExpandingProgramsSection: React.FC<ExpandingProgramsSectionProps> = ({ onViewMore }) => {
  const [activeId, setActiveId] = useState<string>('running');

  return (
    <section
      id="expanding-programs-section"
      className="relative bg-white text-neutral-950 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header: Title on the left, View More button on the right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8">
          <h2
            id="programs-section-heading"
            className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.12] max-w-xl"
          >
            Choisissez votre sport, nous vous guidons à chaque étape
          </h2>

          <FlipButton
            id="programs-view-more-btn"
            onClick={onViewMore}
            text="Voir plus"
            className="self-start sm:self-end bg-white hover:bg-neutral-50 active:scale-95 text-neutral-900 border border-neutral-200/80 font-medium px-5 py-2.5 rounded-xl text-sm transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap inline-flex items-center justify-center overflow-hidden"
          />
        </div>

        {/* Expanding Accordion / Cards Row */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 min-h-[560px] lg:h-[620px] w-full items-stretch">
          {PROGRAMS.map((item) => {
            const isExpanded = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isExpanded
                    ? 'lg:flex-[3.5] flex-1 min-h-[460px] lg:min-h-0'
                    : 'lg:flex-[1] flex-none h-24 lg:h-auto min-w-[80px] lg:min-w-[110px]'
                }`}
              >
                {/* Background Image */}
                <motion.img
                  layout="position"
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Ambient Dark Gradient for Legibility */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 ${
                    isExpanded ? 'opacity-90' : 'opacity-40 hover:opacity-60'
                  }`}
                />

                {/* Top Badges / Numbers */}
                <div className="absolute top-5 left-5 right-5 flex items-center gap-2 z-10">
                  {/* Number pill */}
                  <div className="bg-black/40 backdrop-blur-md text-white font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded-xl border border-white/10 shadow-sm">
                    {item.number}
                  </div>

                  {/* Program tag pill (Visible when expanded or on hover) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.85, x: -10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.85, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-black/40 backdrop-blur-md text-white font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded-xl border border-white/10 shadow-sm"
                      >
                        {item.badge}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="expanded-content"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="space-y-2.5 max-w-lg"
                      >
                        <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed line-clamp-2 drop-shadow">
                          {item.description}
                        </p>
                      </motion.div>
                    ) : (
                      /* Collapsed vertical or subtle title indicator on large screens */
                      <motion.div
                        key="collapsed-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hidden lg:block"
                      >
                        <span className="text-white font-semibold text-base sm:text-lg tracking-wide drop-shadow whitespace-nowrap block truncate">
                          {item.title}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
