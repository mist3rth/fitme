import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Instagram, Facebook } from 'lucide-react';
import { COACHS_DATA, CoachProfile } from '../data/coachsData';
import { CommunityFeatureSection } from './CommunityFeatureSection';
import { TestimonialHeadlineSection } from './TestimonialHeadlineSection';
import { TestimonialsCarouselSection } from './TestimonialsCarouselSection';

// Custom X (formerly Twitter) Icon component
const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`fill-current ${className}`}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface CoachsPageProps {
  onContactClick: (coachName?: string) => void;
  onNavigateHome: () => void;
}

export const CoachsPage: React.FC<CoachsPageProps> = ({
  onContactClick,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Nos Coachs Experts | FiTME Performance';
  }, []);

  return (
    <div className="w-full bg-white text-neutral-950 min-h-screen flex flex-col">
      {/* =========================================================================
          HERO SECTION (Reprenant exactement le style immersif avec reveal)
          ========================================================================= */}
      <section
        id="coachs-hero"
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
              src="/coach_hero.webp"
              alt="Coachs experts et préparateurs physiques de haut niveau - FiTME"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.90] contrast-[1.08]"
            />
          </motion.div>

          {/* Gradients and lighting overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/45 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Hero Content Container (Bottom Aligned: Title Bottom-Left, Text Bottom-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 sm:pb-32 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            
            {/* Bottom Left: Huge Bold Display Title ("Coachs" in Gold/Yellow) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                id="coachs-hero-title"
                className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#F9DE7C] tracking-tight leading-none drop-shadow-md"
              >
                Coachs
              </h1>
            </motion.div>

            {/* Bottom Right: Impact Subtitle translated into French */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md lg:max-w-lg lg:text-right"
            >
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug tracking-tight">
                Des coachs expérimentés dédiés à la progression et à la performance de chaque athlète
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          COACHS GRID SECTION: 2 rows of 3 cards (6 sports)
          ========================================================================= */}
      <section 
        id="coachs-grid-section" 
        className="w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-100"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase">
                Encadrement d'Élite
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-950 mt-1 tracking-tight">
                Rencontrez nos spécialistes
              </h2>
            </div>
            <p className="text-neutral-600 text-sm sm:text-base max-w-md">
              Des professionnels certifiés, anciens athlètes de haut niveau et experts de la biomécanique pour vous accompagner à chaque étape.
            </p>
          </div>

          {/* 2 Lignes de 3 Cards (Grid 3 colonnes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {COACHS_DATA.map((coach: CoachProfile, index: number) => (
              <motion.div
                key={coach.id}
                id={`coach-card-${coach.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative w-full h-[460px] sm:h-[500px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-7 border border-black/5 cursor-pointer bg-neutral-900"
                onClick={() => onContactClick(coach.name)}
              >
                {/* Background Image of the Coach with zoom-on-hover */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={coach.image}
                    alt={`${coach.name} - ${coach.sportBadge}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay for high readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                </div>

                {/* Top Badges: Sport Badge (Left) & Star Rating Badge (Right) */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  {/* Left: Sport Badge with rounded corners and glass transparency */}
                  <span className="bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-xl border border-white/20 shadow-sm">
                    {coach.sportBadge}
                  </span>

                  {/* Right: Rating Pill (4.9 ★) with yellow star */}
                  <div className="bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center gap-1.5">
                    <span>{coach.rating.toFixed(1)}</span>
                    <Star className="w-3.5 h-3.5 fill-[#F9DE7C] text-[#F9DE7C]" />
                  </div>
                </div>

                {/* Bottom Content Area: Name, Role & Social Media Icons */}
                <div className="relative z-10 space-y-3.5">
                  <div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight flex items-center gap-2">
                      <span>{coach.name}</span>
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-medium mt-0.5 line-clamp-1">
                      {coach.role}
                    </p>
                  </div>

                  {/* Social Buttons (Glass circles with icons) */}
                  <div className="flex items-center gap-2.5 pt-1">
                    {coach.socials?.instagram && (
                      <a
                        href={coach.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Instagram de ${coach.name}`}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 border border-white/25 active:scale-95"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {coach.socials?.facebook && (
                      <a
                        href={coach.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Facebook de ${coach.name}`}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 border border-white/25 active:scale-95"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                    {coach.socials?.twitter && (
                      <a
                        href={coach.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`X (Twitter) de ${coach.name}`}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 border border-white/25 active:scale-95"
                      >
                        <XIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          COMMUNITY / PROGRAM TABS FEATURE SECTION (Identique à la page d'accueil)
          ========================================================================= */}
      <CommunityFeatureSection onJoinClick={() => onContactClick('Programmes')} />

      {/* =========================================================================
          TESTIMONIALS SECTION (Cohérent avec le reste du site)
          ========================================================================= */}
      <TestimonialHeadlineSection />
      <TestimonialsCarouselSection />
    </div>
  );
};
