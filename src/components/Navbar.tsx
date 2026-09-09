import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { TextFlip3D } from './TextFlip3D';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  activeRoute?: string;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeRoute = '/', 
  onNavigate, 
  onContactClick 
}) => {
  const [isOverLightSection, setIsOverLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const delta = currentScrollY - lastScrollY.current;

      // Smart navbar visibility: hide on scroll down, show on scroll up
      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (delta > 8) {
        // Scrolling down
        setIsVisible(false);
      } else if (delta < -8) {
        // Scrolling up
        setIsVisible(true);
      }
      
      // Update lastScrollY only if threshold is met to capture slow scrolls
      if (Math.abs(delta) > 8 || currentScrollY < 40) {
        lastScrollY.current = currentScrollY;
      }

      // Calculate hero section height to know when navbar is over the light section
      const heroEl = 
        document.getElementById('hero-section') || 
        document.getElementById('formations-hero') || 
        document.getElementById('coachs-hero') ||
        document.getElementById('tarifs-hero') ||
        document.getElementById('blog-hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setIsOverLightSection(heroBottom <= 70);
      } else {
        setIsOverLightSection(currentScrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeRoute]);

  const effectiveIsOverLight = isOverLightSection && !isMobile;

  const navItems = [
    { label: 'Accueil', path: '/', id: 'accueil' },
    { label: 'Formations', path: '/formations', id: 'formations' },
    { label: 'Coachs', path: '/coachs', id: 'coachs' },
    { label: 'Tarifs', path: '/tarifs', id: 'tarifs' },
    { label: 'Blog', path: '/blog', id: 'blog' },
  ];



  const isCurrentActive = (item: typeof navItems[0]) => {
    if (item.path === '/formations') {
      return activeRoute === '/formations';
    }
    if (item.path === '/coachs') {
      return activeRoute === '/coachs';
    }
    if (item.path === '/tarifs') {
      return activeRoute === '/tarifs';
    }
    if (item.path === '/blog') {
      return activeRoute === '/blog';
    }
    if (item.path === '/') {
      return activeRoute === '/' || activeRoute === '';
    }
    return false;
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 py-4 md:py-5 sm:py-7 bg-neutral-950/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-b border-white/5 md:border-none transition-all duration-300 pointer-events-none ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-auto"
        >
          {/* Logo on the left: text color dynamically switches between white (over dark hero) and black (over white section) */}
          <Link
            to="/"
            id="nav-brand-logo"
            onClick={(e) => {
              if (activeRoute === '/' || activeRoute === '') {
                e.preventDefault();
                // @ts-ignore
                if (window.lenis) {
                  // @ts-ignore
                  window.lenis.scrollTo(0, { immediate: false, duration: 1 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
            className="group flex items-center transition-transform duration-200 active:scale-95 md:hover:scale-[1.02] cursor-pointer bg-transparent border-none text-left p-0 outline-none rounded-lg"
          >
            <Logo
              size="md"
              textColor={effectiveIsOverLight ? 'text-neutral-950' : 'text-white'}
              iconColor={effectiveIsOverLight ? '#E5A910' : '#F9DE7C'}
            />
          </Link>

          {/* Nav Container with rounded corners */}
          <nav
            id="desktop-nav-capsule"
            aria-label="Navigation principale"
            className="hidden md:flex items-center bg-black/45 backdrop-blur-md border border-white/15 rounded-xl p-1 shadow-md"
          >
            {navItems.map((item) => {
              const isActive = isCurrentActive(item);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  id={`nav-item-${item.id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer outline-none rounded-lg ${
                    isActive
                      ? 'text-neutral-950 font-semibold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button: Contact (Rounded rectangle with 3D Stagger Flip on hover) */}
          <div className="flex items-center gap-3">
            <button
              id="nav-contact-button"
              onClick={onContactClick}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              className="hidden md:inline-flex bg-[#F9DE7C] hover:bg-[#ebd06b] active:scale-95 text-neutral-950 font-medium px-5 py-2 rounded-xl text-sm transition-all duration-200 shadow-sm cursor-pointer items-center justify-center overflow-hidden"
            >
              <TextFlip3D text="Contact" isHovered={isContactHovered} />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl backdrop-blur-md transition-colors cursor-pointer ${
                effectiveIsOverLight 
                  ? 'bg-black/10 text-neutral-950 hover:bg-black/20' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 p-4 md:hidden"
          >
            <div className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = isCurrentActive(item);
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between cursor-pointer outline-none ${
                        isActive
                          ? 'bg-[#F9DE7C] text-neutral-950 font-semibold'
                          : 'text-white/80 hover:bg-white/10 text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <ArrowUpRight className="w-4 h-4" />}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-2 border-t border-white/10">
                <button
                  id="mobile-nav-contact-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full bg-[#F9DE7C] text-neutral-950 font-bold py-3 rounded-xl text-center shadow-md cursor-pointer"
                >
                  Prendre contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
