import React from 'react';
import { motion } from 'motion/react';
import { TextAnimate } from './magicui/text-animate';

export const ContentUnderHero: React.FC = () => {
  return (
    <section
      id="content-under-hero"
      className="relative bg-white text-neutral-950 py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-column signature layout from Framer design (Image 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Statistic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            <span
              id="stat-10000-number"
              className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-neutral-950 leading-none"
            >
              10,000+
            </span>
            <p
              id="stat-10000-label"
              className="mt-4 text-neutral-800 font-medium text-lg sm:text-xl tracking-tight"
            >
              Athlètes formés depuis 2015
            </p>
          </motion.div>

          {/* Right Column: Large Impact Statement with blurIn animation on scroll */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <TextAnimate
              id="impact-statement-text"
              animation="blurIn"
              as="h2"
              once={true}
              viewport={{ amount: 0.5 }}
              className="font-display font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] text-neutral-950 leading-[1.22] tracking-tight"
            >
              Depuis 2015, FiTME a accompagné plus de 10 000 athlètes pour élever leurs performances.
            </TextAnimate>
          </div>

        </div>
      </div>
    </section>
  );
};

