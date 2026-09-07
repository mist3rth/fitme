import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ContentUnderHero } from '../components/ContentUnderHero';
import { AthleticStatsSection } from '../components/AthleticStatsSection';
import { CommunityFeatureSection } from '../components/CommunityFeatureSection';
import { ExpandingProgramsSection } from '../components/ExpandingProgramsSection';
import { TestimonialHeadlineSection } from '../components/TestimonialHeadlineSection';
import { TestimonialsCarouselSection } from '../components/TestimonialsCarouselSection';
import { ContactSection } from '../components/ContactSection';

interface HomeProps {
  scrollToContact: (prefill?: string) => void;
  contactPrefill: string;
}

export const Home: React.FC<HomeProps> = ({ scrollToContact, contactPrefill }) => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>FiTME - Coaching Sportif & Haute Performance</title>
        <meta name="description" content="FiTME accompagne les athlètes pour élever leurs performances avec des programmes sur mesure." />
      </Helmet>
      
      <Hero onJoinClick={() => scrollToContact()} />
      <ContentUnderHero />
      <AthleticStatsSection />
      <CommunityFeatureSection onJoinClick={() => scrollToContact()} />
      <ExpandingProgramsSection onViewMore={() => navigate('/formations')} />
      <TestimonialHeadlineSection />
      <TestimonialsCarouselSection />
      <ContactSection prefillMessage={contactPrefill} />
    </>
  );
};
