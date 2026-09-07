import React from 'react';
import { motion } from 'motion/react';

export const AthleticStatsSection: React.FC = () => {
  return (
    <section
      id="athletic-stats-section"
      className="relative bg-white text-neutral-950 py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: 2x2 Grid of Rounded Portrait Photos */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5 max-w-md mx-auto lg:mx-0"
          >
            {/* Top Left: First vignette */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.35, duration: 0.8, delay: 0 } }
              }}
              className="aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm bg-neutral-100 group origin-center"
            >
              <img
                src="/v1.webp"
                alt="Athlète FiTME"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Top Right: Second vignette */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.35, duration: 0.8, delay: 0 } }
              }}
              className="aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm bg-neutral-100 group origin-center"
            >
              <img
                src="/v2.webp"
                alt="Athlète FiTME"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Bottom Left: Third vignette */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.35, duration: 0.8, delay: 0.15 } }
              }}
              className="aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm bg-neutral-100 group origin-center"
            >
              <img
                src="/v3.webp"
                alt="Athlète FiTME"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Bottom Right: Fourth vignette */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.35, duration: 0.8, delay: 0.15 } }
              }}
              className="aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm bg-neutral-100 group origin-center"
            >
              <img
                src="/v4.webp"
                alt="Athlète FiTME"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Right: Statement Headline + 2 Big Metric Columns */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12 sm:space-y-16">
            
            {/* Top Headline Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3
                id="athletic-goal-statement"
                className="font-display font-semibold text-3xl sm:text-4xl lg:text-[2.6rem] text-neutral-950 leading-[1.2] tracking-tight max-w-xl"
              >
                Au cours des 8 dernières années, nous avons aidé plus de 10 000 personnes à atteindre leur objectif sportif.
              </h3>
            </motion.div>

            {/* Bottom 2-Column Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-4">
              
              {/* Stat 1: 97% Satisfaction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="sm:border-l-2 sm:border-neutral-200 sm:pl-6 space-y-3"
              >
                <span
                  id="stat-97-percent"
                  className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-neutral-950 tracking-tight leading-none block"
                >
                  97%
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-neutral-950">
                  Taux de satisfaction
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  La quasi-totalité de nos participants constatent une progression significative dès le premier mois.
                </p>
              </motion.div>

              {/* Stat 2: 10+ Professional Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="sm:border-l-2 sm:border-neutral-200 sm:pl-6 space-y-3"
              >
                <span
                  id="stat-10-plus-years"
                  className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-neutral-950 tracking-tight leading-none block"
                >
                  10+
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-neutral-950">
                  Années d'expérience professionnelle
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Notre équipe est composée de préparateurs physiques et coachs chevronnés certifiés.
                </p>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
