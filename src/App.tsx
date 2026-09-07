import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FormationsPage } from './components/FormationsPage';
import { CoachsPage } from './components/CoachsPage';
import { TarifsPage } from './components/TarifsPage';
import { BlogPage } from './components/BlogPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { ContactSection } from './components/ContactSection';
import { Home } from './pages/Home';

// Composant pour restaurer le scroll en haut de page lors d'un changement de route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ne pas scroller en haut si on a un hash
    if (!window.location.hash) {
      setTimeout(() => {
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  const [contactPrefill, setContactPrefill] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Gérer le scroll vers l'ancre au chargement ou changement de hash
    const checkHashScroll = () => {
      if (window.location.hash === '#faq' || window.location.hash === '#faq-section') {
        setTimeout(() => {
          const faqEl = document.getElementById('faq-section') || document.getElementById('faq');
          if (faqEl) {
            const headerOffset = 90;
            const elementPosition = faqEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth',
            });
          }
        }, 150);
      }
    };

    checkHashScroll();
  }, [location.hash]);

  const scrollToFaq = () => {
    if (location.pathname !== '/tarifs') {
      navigate('/tarifs#faq');
    } else {
      const faqEl = document.getElementById('faq-section') || document.getElementById('faq');
      if (faqEl) {
        const headerOffset = 90;
        const elementPosition = faqEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollToContact = (sportOrCoachTitle?: string) => {
    if (sportOrCoachTitle) {
      setContactPrefill(`Bonjour, je suis intéressé(e) par un accompagnement avec "${sportOrCoachTitle}". Pourriez-vous me recontacter avec les détails d'inscription ?`);
    }

    const titleEl = document.getElementById('contact-title') || document.getElementById('contact');
    if (titleEl) {
      const headerOffset = 96;
      const elementPosition = titleEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });

      setTimeout(() => {
        const input = (document.getElementById('contact-form-name') ||
          document.getElementById('contact-name-input')) as HTMLInputElement | null;
        if (input) {
          input.focus({ preventScroll: true });
        }
      }, 700);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-900 font-sans selection:bg-[#F9DE7C] selection:text-neutral-950 flex flex-col">
      <ScrollToTop />
      
      <Navbar 
        activeRoute={location.pathname}
        onContactClick={() => scrollToContact()} 
      />

      <main className="flex-1 w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home scrollToContact={scrollToContact} contactPrefill={contactPrefill} />} />
          <Route path="/formations" element={
            <>
              <FormationsPage 
                onContactClick={(sport) => scrollToContact(sport)}
                onNavigateHome={() => navigate('/')}
              />
              <ContactSection prefillMessage={contactPrefill} />
            </>
          } />
          <Route path="/coachs" element={
            <>
              <CoachsPage 
                onContactClick={(coach) => scrollToContact(coach)}
                onNavigateHome={() => navigate('/')}
              />
              <ContactSection prefillMessage={contactPrefill} />
            </>
          } />
          <Route path="/tarifs" element={
            <>
              <TarifsPage 
                onContactClick={(plan) => scrollToContact(plan)}
                onNavigateHome={() => navigate('/')}
              />
              <ContactSection prefillMessage={contactPrefill} />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <TarifsPage 
                onContactClick={(plan) => scrollToContact(plan)}
                onNavigateHome={() => navigate('/')}
              />
              <ContactSection prefillMessage={contactPrefill} />
            </>
          } />
          <Route path="/blog" element={
            <BlogPage 
              onContactClick={(articleContext) => scrollToContact(articleContext)}
              onNavigateHome={() => navigate('/')}
              onNavigateArticle={(slug) => navigate(`/blog/${slug}`)}
            />
          } />
          <Route path="/insights" element={
            <BlogPage 
              onContactClick={(articleContext) => scrollToContact(articleContext)}
              onNavigateHome={() => navigate('/')}
              onNavigateArticle={(slug) => navigate(`/blog/${slug}`)}
            />
          } />
          <Route path="/blog/:slug" element={
            <ArticleDetailPage
              slug={location.pathname.replace('/blog/', '')}
              onNavigate={(path) => navigate(path)}
              onContactClick={(articleContext) => scrollToContact(articleContext)}
            />
          } />
        </Routes>
      </main>

      <Footer 
        onJoinClick={() => scrollToContact()} 
        onContactClick={() => scrollToContact()}
        onFaqClick={scrollToFaq}
        onNavigate={(path) => navigate(path)}
      />
    </div>
  );
}
