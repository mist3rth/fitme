import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { FlipButton } from './TextFlip3D';

interface FooterProps {
  onJoinClick: () => void;
  onContactClick: () => void;
  onFaqClick?: () => void;
  onNavigate?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onJoinClick, 
  onContactClick, 
  onFaqClick, 
  onNavigate 
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4500);
    }
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full overflow-hidden bg-neutral-950 text-white pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img
          src="/footer.webp"
          alt="Arrière-plan footer"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-black/20 to-neutral-950/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 sm:space-y-14">
        
        {/* Top Newsletter Bar (Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-xl bg-black/45 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex flex-col sm:flex-row sm:items-center shadow-2xl transition-all focus-within:border-[#F9DE7C]/80 gap-2 sm:gap-0"
          >
            <div className="flex items-center flex-1 w-full px-2 sm:px-0">
              <div className="pl-2 sm:pl-4 pr-2 text-white/50 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <input
                id="newsletter-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                required
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/60 text-sm sm:text-base px-2 py-2 min-w-0"
              />
            </div>
            <FlipButton
              id="newsletter-submit-button"
              type="submit"
              text={subscribed ? 'Inscrit !' : "S'inscrire"}
              className="w-full sm:w-auto bg-[#F9DE7C] hover:bg-[#ebd06b] active:scale-95 text-neutral-950 font-medium px-6 sm:px-7 py-2.5 sm:py-2 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-md shrink-0 inline-flex items-center justify-center overflow-hidden"
            />
          </form>
        </motion.div>

        {/* Feedback message for subscription */}
        {subscribed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-2 text-[#F9DE7C] text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Merci pour votre inscription à la newsletter FiTME !</span>
          </motion.div>
        )}

        {/* Main Frosted Footer Card (Image 2) */}
        <div className="bg-black/65 backdrop-blur-xl border border-white/15 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Content: CTA & Headline */}
            <div className="lg:col-span-7 space-y-6">
              <h2
                id="footer-card-headline"
                className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-snug tracking-tight max-w-lg"
              >
                Rejoignez la famille FiTME et propulsez votre parcours de coaching
              </h2>

              <div>
                <FlipButton
                  id="footer-join-cta-button"
                  onClick={onJoinClick}
                  text="Rejoindre"
                  className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 active:scale-95 text-neutral-950 font-semibold px-7 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg cursor-pointer overflow-hidden"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                />
              </div>
            </div>

            {/* Right Content: Link Columns */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-8 sm:gap-12">
              
              {/* Column 1: Explorer les sports */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-white text-base tracking-normal">
                  Explorer les sports
                </h3>
                <ul className="space-y-2.5 text-sm text-white/70">
                  <li>
                    <button
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('/formations');
                        } else {
                          window.location.href = '/formations';
                        }
                      }}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Formations
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('/coachs');
                        } else {
                          window.location.href = '/coachs';
                        }
                      }}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Coachs
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('/tarifs');
                        } else {
                          window.location.href = '/tarifs';
                        }
                      }}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Tarifs
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('/blog');
                        } else {
                          window.location.href = '/blog';
                        }
                      }}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Blog
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 2: Support */}
              <div className="space-y-4">
                <h3 className="font-display font-semibold text-white text-base tracking-normal">
                  Support
                </h3>
                <ul className="space-y-2.5 text-sm text-white/70">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onFaqClick) {
                          onFaqClick();
                        } else if (onNavigate) {
                          onNavigate('/tarifs#faq');
                        } else {
                          window.location.href = '/tarifs#faq';
                        }
                      }}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      FAQ
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={onContactClick}
                      className="hover:text-white transition-colors text-left cursor-pointer"
                    >
                      Contactez-nous
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-white/15 my-8 sm:my-10" />

          {/* Bottom Row: Giant FiTME Display, Creator Credit & Legal Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            
            {/* Massive Bold Logo text in Yellow */}
            <div className="select-none">
              <span
                id="footer-giant-logo-text"
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[#F9DE7C] tracking-tight leading-none"
              >
                FiTME
              </span>
            </div>

            {/* Legal & Terms & Made by Credit */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/60">
              <a
                href="https://present-me-lake.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9DE7C] hover:underline font-medium"
              >
                Made by T.THIESSON
              </a>
              <span className="text-white/30">•</span>
              <a href="#privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Conditions générales
              </a>
              <span className="text-white/40">
                © {new Date().getFullYear()} FiTME.
              </span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};
