import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Dumbbell, Sparkles } from 'lucide-react';
import { FlipButton } from './TextFlip3D';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'contact' | 'join';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  mode = 'contact',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sport, setSport] = useState('Basketball');
  const [goal, setGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setGoal('');
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative z-10 w-full max-w-lg bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl"
          >
            {/* Close button */}
            <button
              id="close-contact-modal"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F9DE7C]/20 border border-[#F9DE7C]/40 text-[#F9DE7C] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Demande transmise avec succès !
                </h3>
                <p className="text-white/70 text-sm max-w-sm mx-auto">
                  Un coach expert de l'équipe FiTME va prendre contact avec vous sous 24h pour échanger sur vos objectifs.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9DE7C]/15 text-[#F9DE7C] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{mode === 'join' ? 'Rejoindre FiTME' : 'Contact & Diagnostic'}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {mode === 'join'
                      ? 'Démarrez votre coaching sportif'
                      : 'Parlons de vos objectifs'}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    Remplissez vos coordonnées pour recevoir votre plan de préparation personnalisé.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      id="modal-input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Camille Dubois"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#F9DE7C] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Adresse email
                    </label>
                    <input
                      id="modal-input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nom@exemple.fr"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#F9DE7C] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Discipline sportive principale
                    </label>
                    <select
                      id="modal-select-sport"
                      value={sport}
                      onChange={(e) => setSport(e.target.value)}
                      className="w-full bg-neutral-800 border border-white/15 focus:border-[#F9DE7C] rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
                    >
                      <option value="Basketball">Basketball</option>
                      <option value="Tennis">Tennis & Sports de raquette</option>
                      <option value="Athlétisme">Athlétisme & Course à pied</option>
                      <option value="Préparation physique">Préparation physique & Renforcement</option>
                      <option value="Football">Football & Sports collectifs</option>
                      <option value="Autre">Autre discipline</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Votre objectif (optionnel)
                    </label>
                    <textarea
                      id="modal-textarea-goal"
                      rows={3}
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="Ex: Préparation pour une compétition régionale, amélioration de l'explosivité..."
                      className="w-full bg-white/5 border border-white/15 focus:border-[#F9DE7C] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors resize-none"
                    />
                  </div>

                  <FlipButton
                    id="modal-submit-btn"
                    type="submit"
                    text="Envoyer la demande"
                    className="w-full bg-[#F9DE7C] hover:bg-[#ebd06b] active:scale-98 text-neutral-950 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2 mt-2 overflow-hidden"
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                  />
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
