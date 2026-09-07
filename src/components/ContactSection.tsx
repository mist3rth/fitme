import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send } from 'lucide-react';
import { FlipButton } from './TextFlip3D';

interface ContactSectionProps {
  prefillMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(prefillMessage || '');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (prefillMessage) {
      setMessage(prefillMessage);
    }
  }, [prefillMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-white text-neutral-950 pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 border-t border-neutral-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subheading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-12 sm:space-y-16"
          >
            {/* Title & subtitle */}
            <div className="space-y-3">
              <h2
                id="contact-title"
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-950 tracking-tight"
              >
                Discutons
              </h2>
              <p
                id="contact-subtitle"
                className="text-neutral-500 text-lg sm:text-xl font-normal tracking-tight"
              >
                Parlez-nous de vos objectifs et de vos envies
              </p>
            </div>

            {/* Location & Inquiry details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 sm:pt-12">
              <div className="space-y-2">
                <span className="text-neutral-400 font-semibold text-xs sm:text-sm tracking-wider uppercase block">
                  Localisation
                </span>
                <p className="text-neutral-900 font-medium text-sm sm:text-base leading-relaxed">
                  24 Rue du Faubourg Saint-Honoré,<br />
                  75008 Paris, France
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-neutral-400 font-semibold text-xs sm:text-sm tracking-wider uppercase block">
                  Contact
                </span>
                <div className="space-y-1">
                  <a
                    href="mailto:contact@fitme.com"
                    className="text-neutral-900 font-medium text-sm sm:text-base hover:text-black transition-colors block"
                  >
                    contact@fitme.com
                  </a>
                  <a
                    href="tel:+33123456789"
                    className="text-neutral-900 font-medium text-sm sm:text-base hover:text-black transition-colors block"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form with Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            {/* Header above form */}
            <h3
              id="contact-form-heading"
              className="font-display font-medium text-3xl sm:text-4xl lg:text-[2.75rem] text-neutral-950 tracking-tight leading-[1.15]"
            >
              Envie d'apprendre et de progresser dans votre entraînement ?
            </h3>

            {/* Form Box */}
            {submitted ? (
              <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-neutral-100 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-neutral-950">
                  Message envoyé avec succès !
                </h4>
                <p className="text-neutral-600 text-sm sm:text-base max-w-md">
                  Merci de nous avoir contactés. Un coach de l'équipe FiTME reviendra vers vous dans les plus brefs délais.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-4 text-xs uppercase tracking-wider font-semibold text-neutral-900 hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-form-name"
                    className="block text-neutral-800 font-medium text-sm sm:text-base"
                  >
                    Nom complet
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className="w-full bg-neutral-100/90 hover:bg-neutral-100 focus:bg-white text-neutral-950 placeholder:text-neutral-400 border border-transparent focus:border-neutral-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-200"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-form-email"
                    className="block text-neutral-800 font-medium text-sm sm:text-base"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@exemple.com"
                    className="w-full bg-neutral-100/90 hover:bg-neutral-100 focus:bg-white text-neutral-950 placeholder:text-neutral-400 border border-transparent focus:border-neutral-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-200"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-form-message"
                    className="block text-neutral-800 font-medium text-sm sm:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-form-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Écrivez votre message ici..."
                    className="w-full bg-neutral-100/90 hover:bg-neutral-100 focus:bg-white text-neutral-950 placeholder:text-neutral-400 border border-transparent focus:border-neutral-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button with 3D Stagger Flip */}
                <FlipButton
                  id="contact-form-submit-btn"
                  type="submit"
                  text="Envoyer"
                  className="w-full bg-black hover:bg-neutral-800 active:scale-[0.99] text-white font-medium py-4 sm:py-4.5 px-6 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
                />
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
