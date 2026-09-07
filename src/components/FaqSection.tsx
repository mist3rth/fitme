import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/pricingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-white text-neutral-950 pt-10 sm:pt-14 pb-20 sm:pb-28 scroll-mt-20 sm:scroll-mt-24">
      <div id="faq-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="faq-title" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Accordion Items */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10"
            >
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight leading-[1.1]">
                Questions<br className="hidden sm:inline" /> fréquentes
              </h2>
            </motion.div>

            {/* Accordion List */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="overflow-hidden rounded-2xl bg-[#F5F5F7] hover:bg-[#EFEFEF] transition-colors duration-200 border border-neutral-200/60"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-neutral-900 pr-4 leading-snug">
                        {item.question}
                      </span>
                      
                      <div 
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'bg-neutral-950 text-white rotate-45' : 'bg-neutral-200 text-neutral-800 group-hover:bg-neutral-300'
                        }`}
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal border-t border-neutral-200/50">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Image with sticky pinning on scroll */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 border border-neutral-200/80"
            >
              <img
                src="/tennis.webp"
                alt="Athlète en entraînement intensif sur court de terre battue - FiTME"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle contrast gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
