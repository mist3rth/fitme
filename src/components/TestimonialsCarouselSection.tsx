import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialSlide {
  id: string;
  quote: string;
  role: string;
  image: string;
  imageAlt: string;
}

const TESTIMONIALS: TestimonialSlide[] = [
  {
    id: 'tennis-competitor',
    quote:
      "“En tant que débutante, j'appréhendais de commencer un programme sportif structuré. FiTME a rendu le parcours fluide et motivant. Le guidage étape par étape et la communauté bienveillante m'ont transformée.”",
    role: "Athlète Compétition",
    image: "/carousel1.webp",
    imageAlt: "Athlète de tennis avec visière et raquette",
  },
  {
    id: 'intermediate-player',
    quote:
      "“Ce que j'apprécie le plus chez FiTME, c'est l'équilibre parfait entre simplicité et professionnalisme. Les plans d'entraînement sont intuitifs à suivre, tout en étant extrêmement efficaces.”",
    role: "Joueuse Intermédiaire",
    image: "/carousel2.webp",
    imageAlt: "Portrait athlète en extérieur",
  },
  {
    id: 'basketball-prospect',
    quote:
      "“Dès mes premiers entraînements, j'ai ressenti la différence dans mon explosivité et ma lucidité en match. L'accompagnement sur-mesure et l'analyse technique m'ont permis de franchir un cap décisif.”",
    role: "Athlète Basketball",
    image: "/carousel3.webp",
    imageAlt: "Athlète basketball avec ballon",
  },
];

export const TestimonialsCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials-carousel-section"
      className="relative bg-white text-neutral-950 pb-24 sm:pb-32 lg:pb-36 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          
          {/* Left Column: Athlete Photo with Quick Zoom & Opacity Fadeout Transition */}
          <div className="lg:col-span-4 relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[380px] sm:min-h-[460px] bg-neutral-900 shadow-md">
            {/* Base layer: Next/Target image is always visible underneath */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={current.image}
                alt={current.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Top animating layer: zooms in quickly and fades out on exit to reveal the underneath */}
            <AnimatePresence initial={false}>
              <motion.div
                key={current.id}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  zIndex: 2,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.12,
                  zIndex: 3,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Quote Card with Text Reveal and Arrow Navigation */}
          <div className="lg:col-span-8 bg-neutral-50 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border border-neutral-100/80">
            {/* Animated Quote Text */}
            <div className="min-h-[160px] sm:min-h-[190px] flex items-start">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, y: direction * 18, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: direction * -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  id="testimonial-quote-text"
                  className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-neutral-950 tracking-tight leading-relaxed sm:leading-snug"
                >
                  {current.quote}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom Row: Role / Category + Nav Buttons */}
            <div className="flex items-center justify-between gap-4 pt-8 mt-6 border-t border-neutral-200/60">
              {/* Role Title with Reveal */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  id="testimonial-role-badge"
                  className="text-neutral-400 font-medium text-base sm:text-lg tracking-tight"
                >
                  {current.role}
                </motion.span>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <button
                  id="testimonial-prev-btn"
                  onClick={handlePrev}
                  aria-label="Témoignage précédent"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-neutral-200/80 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 text-neutral-900 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  id="testimonial-next-btn"
                  onClick={handleNext}
                  aria-label="Témoignage suivant"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-neutral-200/80 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 text-neutral-900 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
