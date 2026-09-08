import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FlipButton } from './TextFlip3D';

interface CommunityFeatureSectionProps {
  onJoinClick: () => void;
}

interface TabContent {
  title: string;
  description: string;
}

const TAB_DATA: Record<string, TabContent> = {
  Programmes: {
    title: "Des programmes sur-mesure pour chaque objectif",
    description:
      "Des plans d'entraînement évolutifs et structurés, conçus pour maximiser vos résultats au quotidien.",
  },
  Coachs: {
    title: "Accompagné par l'élite des préparateurs",
    description:
      "Des coachs certifiés pour guider vos mouvements et perfectionner vos charges.",
  },
  Nutrition: {
    title: "Une nutrition optimisée pour la performance",
    description:
      "Plans personnalisés et micronutrition sportive pour alimenter vos entraînements.",
  },
  Support: {
    title: "Un suivi continu et une réactivité garantie 7j/7",
    description:
      "Posez vos questions et obtenez des retours précis de votre coach à tout moment.",
  },
};

export const CommunityFeatureSection: React.FC<CommunityFeatureSectionProps> = ({
  onJoinClick,
}) => {
  // Programmes is open by default as requested
  const [activeCategory, setActiveCategory] = useState<string>('Programmes');

  const tags = [
    { id: 'programs', label: 'Programmes' },
    { id: 'coaches', label: 'Coachs' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'support', label: 'Support' },
  ];

  const currentContent = TAB_DATA[activeCategory] || TAB_DATA['Programmes'];

  return (
    <section
      id="community-feature-section"
      className="relative bg-white text-neutral-950 py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Category Chips, Animated Title & Description with Fixed Minimum Footprint */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 sm:space-y-10">
            
            {/* Category Filter Chips / Tags (Rounded rectangles) */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {tags.map((tag) => {
                const isSelected = activeCategory === tag.label;
                return (
                  <button
                    key={tag.id}
                    id={`tag-btn-${tag.id}`}
                    onClick={() => setActiveCategory(tag.label)}
                    className={`px-5 py-2.5 rounded-2xl text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F9DE7C] text-neutral-950 shadow-sm'
                        : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200/80'
                    }`}
                  >
                    {tag.label}
                  </button>
                );
              })}
            </div>

            {/* Animated Title & Description with fixed min-height to guarantee zero layout shift */}
            <div className="min-h-[200px] sm:min-h-[220px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-5"
                >
                  <h2
                    id="community-heading"
                    className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight leading-[1.08] max-w-lg"
                  >
                    {currentContent.title}
                  </h2>

                  <p
                    id="community-description"
                    className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-md"
                  >
                    {currentContent.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Heroic Card with Static Photo & Unchanged Original Text */}
          <div className="lg:col-span-6 relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[460px] sm:min-h-[520px] flex flex-col justify-end p-6 sm:p-10 shadow-2xl group">
            {/* Background Image: Static image */}
            <img
              src="/tab.webp"
              alt="Portrait athlète FiTME"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/40 via-transparent to-transparent mix-blend-multiply pointer-events-none" />

            {/* Card Content Overlay with Static Original Text */}
            <div className="relative z-10 space-y-6 sm:space-y-8">
              
              {/* Card Quote */}
              <p
                id="coach-quote-text"
                className="font-display font-medium text-white text-xl sm:text-2xl lg:text-[1.7rem] leading-snug tracking-tight drop-shadow-md max-w-md"
              >
                Nous élaborons des programmes d'entraînement sur-mesure, adaptés aux besoins et objectifs uniques de chaque athlète.
              </p>

              {/* Bottom Row: Coach Profile + Join Now Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-4 pt-4 sm:pt-2 border-t border-white/10">
                
                {/* Coach Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/40 shadow-md shrink-0 bg-neutral-800">
                    <img
                      src="/coach.webp"
                      alt="Peter Grant"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg leading-tight">
                      Peter Grant,
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-normal">
                      Coach Performance
                    </p>
                  </div>
                </div>

                {/* White Rounded Action Button (Rejoindre with 3D Stagger Flip) */}
                <FlipButton
                  id="community-join-cta-btn"
                  onClick={onJoinClick}
                  text="Rejoindre"
                  className="w-full sm:w-auto bg-white hover:bg-neutral-100 active:scale-95 text-neutral-950 font-semibold px-6 sm:px-7 py-3 rounded-xl text-sm transition-all duration-200 shadow-xl cursor-pointer shrink-0 inline-flex items-center justify-center overflow-hidden"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
