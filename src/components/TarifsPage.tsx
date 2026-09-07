import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/pricingData';
import { TestimonialHeadlineSection } from './TestimonialHeadlineSection';
import { TestimonialsCarouselSection } from './TestimonialsCarouselSection';
import { FaqSection } from './FaqSection';
import { FlipButton } from './TextFlip3D';

interface TarifsPageProps {
  onContactClick: (planName?: string) => void;
  onNavigateHome: () => void;
}

export const TarifsPage: React.FC<TarifsPageProps> = ({ 
  onContactClick, 
  onNavigateHome 
}) => {
  useEffect(() => {
    document.title = 'Tarifs & Formules d\'Entraînement | FiTME Coaching';
    // If not navigating directly to #faq, scroll to top
    if (typeof window !== 'undefined' && window.location.hash !== '#faq' && window.location.hash !== '#faq-section') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="w-full bg-white text-neutral-950 min-h-screen flex flex-col">
      {/* =========================================================================
          HERO SECTION (Image price.webp avec léger dézoom & reveal des textes)
          ========================================================================= */}
      <section 
        id="tarifs-hero"
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
              src="/price.webp"
              alt="Tarifs et formules d'entraînement sportif de haut niveau - FiTME"
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
            
            {/* Bottom Left: Huge Bold Display Title ("Tarifs" in Yellow / Gold) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 
                id="tarifs-hero-title"
                className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#F9DE7C] tracking-tight leading-none drop-shadow-md"
              >
                Tarifs
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
                Des formules tarifaires flexibles conçues pour soutenir vos objectifs d'entraînement
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PRICING CARDS SECTION (3 Dark Cards with Golden Price and Features)
          ========================================================================= */}
      <section 
        id="tarifs-cards-section"
        className="w-full bg-white py-20 sm:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch">
            {PRICING_PLANS.map((plan: PricingPlan, index: number) => {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[#111111] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-neutral-800 shadow-xl hover:border-neutral-700 transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Top Block: Title, Subtitle, Price & Badge */}
                  <div>
                    {/* Plan Name */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                      {plan.name}
                    </h3>

                    {/* Subtitle description */}
                    <p className="text-neutral-400 text-sm leading-relaxed min-h-[40px]">
                      {plan.subtitle}
                    </p>

                    {/* Price tag */}
                    <div className="flex items-baseline gap-2 mt-6 mb-3">
                      <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#F9DE7C] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-neutral-400 font-medium text-base sm:text-lg">
                        {plan.period}
                      </span>
                    </div>

                    {/* Badge Row */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-8">
                      <span className="text-neutral-200 font-bold">{plan.badge}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-600" />
                      <span>{plan.subBadge}</span>
                    </div>

                    {/* Join CTA Button with 3D Stagger Flip */}
                    <FlipButton
                      type="button"
                      onClick={() => onContactClick(`Forfait ${plan.name} (${plan.price})`)}
                      text="Rejoindre"
                      className="w-full bg-[#F9DE7C] hover:bg-[#fae494] text-neutral-950 font-display font-bold text-base py-3.5 px-6 rounded-2xl text-center transition-all duration-200 shadow-md active:scale-[0.98] cursor-pointer inline-flex items-center justify-center overflow-hidden"
                    />
                  </div>

                  {/* Bottom Block: Feature List */}
                  <div className="mt-8 pt-8 border-t border-neutral-800/80">
                    <ul className="space-y-4">
                      {plan.features.map((feature: string, fIndex: number) => (
                        <li key={fIndex} className="flex items-start gap-3.5 text-sm text-neutral-300 leading-snug">
                          <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS SECTION (Bloc Home Page: Avis athlètes + Carrousel)
          ========================================================================= */}
      <TestimonialHeadlineSection />
      <TestimonialsCarouselSection />

      {/* =========================================================================
          FAQ SECTION (Questions fréquentes + Image Tennis droite)
          ========================================================================= */}
      <FaqSection />

    </div>
  );
};
