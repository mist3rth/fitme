import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { FORMATIONS_DATA } from '../data/formationsData';
import { TestimonialHeadlineSection } from './TestimonialHeadlineSection';
import { TestimonialsCarouselSection } from './TestimonialsCarouselSection';
import { FlipButton } from './TextFlip3D';

interface FormationsPageProps {
  onContactClick: (sportTitle?: string) => void;
  onNavigateHome: () => void;
}

export const FormationsPage: React.FC<FormationsPageProps> = ({ 
  onContactClick, 
  onNavigateHome 
}) => {
  useEffect(() => {
    // Scroll to top upon loading formations page
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Formations & Programmes Sportifs | FiTME Coaching';
  }, []);

  return (
    <div className="w-full bg-white text-neutral-950 min-h-screen flex flex-col">
      {/* =========================================================================
          HERO SECTION (Image avec léger dézoom & reveal des textes)
          ========================================================================= */}
      <section 
        id="formations-hero"
        className="relative w-full h-[80vh] sm:h-[86vh] lg:h-[90vh] min-h-[540px] max-h-[920px] overflow-hidden flex flex-col justify-end"
      >
        {/* Animated Background Image with subtle dezoom effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
          <motion.div
            initial={{ scale: 1.15, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src="/formattion.webp"
              alt="Formations et coaching sportif de haut niveau - FiTME"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
            />
          </motion.div>

          {/* Gradients and lighting overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Hero Content Container (Bottom Aligned: Title Bottom-Left, Text Bottom-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 sm:pb-32 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            
            {/* Bottom Left: Huge Bold Display Title ("Formations" in Yellow / Gold) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 
                id="formations-hero-title"
                className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#F9DE7C] tracking-tight leading-none drop-shadow-md"
              >
                Formations
              </h1>
            </motion.div>

            {/* Bottom Right: Clean Impact Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md lg:max-w-lg lg:text-right"
            >
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug tracking-tight">
                Développez vos compétences, votre confiance et votre performance grâce à un entraînement d'experts
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          8 PROGRAM BLOCKS GRID (2 Cards per row - Light Background)
          ========================================================================= */}
      <section 
        id="formations-grid-section"
        className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

          {/* 8 Sports Cards Grid - Exactly 2 Cards Per Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {FORMATIONS_DATA.map((sport, index) => (
              <motion.div
                key={sport.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
                className="group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => onContactClick(sport.title)}
              >
                {/* Full Card Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  {/* Subtle Dark Gradient Overlay for optimal readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
                </div>

                {/* Top Badges (e.g. 01 | Program) with rounded corners and higher glass transparency */}
                <div className="relative z-10 flex items-center gap-2.5">
                  <span className="bg-black/25 backdrop-blur-md text-white font-mono text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl border border-white/20 shadow-sm">
                    {sport.number}
                  </span>
                  <span className="bg-black/25 backdrop-blur-md text-white/95 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-xl border border-white/20 shadow-sm">
                    Program
                  </span>
                </div>

                {/* Bottom Content Area: Title, Description, Join Now Button */}
                <div className="relative z-10 space-y-4 sm:space-y-5 max-w-xl">
                  <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                    {sport.sport}
                  </h3>

                  <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                    {sport.shortDescription}
                  </p>

                  <div className="pt-2">
                    <FlipButton
                      onClick={(e) => {
                        e.stopPropagation();
                        onContactClick(sport.title);
                      }}
                      text="Rejoindre"
                      className="bg-white hover:bg-neutral-100 active:scale-95 text-neutral-950 font-bold px-7 sm:px-8 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base transition-all duration-200 shadow-xl cursor-pointer inline-flex items-center justify-center overflow-hidden"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS SECTION (Identique à la page d'accueil)
          ========================================================================= */}
      <TestimonialHeadlineSection />
      <TestimonialsCarouselSection />
    </div>
  );
};
