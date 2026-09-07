import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Calendar } from 'lucide-react';
import { BlogPost, getArticleBySlug, getRelatedArticles, FEATURED_BLOG_POST } from '../data/blogData';
import { ContactSection } from './ContactSection';
import { FlipButton } from './TextFlip3D';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onContactClick: (context?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  slug,
  onNavigate,
  onContactClick: _onContactClick
}) => {
  const article: BlogPost = getArticleBySlug(slug) || FEATURED_BLOG_POST;
  const relatedArticles = getRelatedArticles(article.slug, 2);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll for the main article image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${article.title} | FiTME Blog`;
  }, [article.title, slug]);

  return (
    <div ref={containerRef} className="w-full bg-white text-neutral-950 min-h-screen flex flex-col">
      
      {/* =========================================================================
          DARK HEADER & HERO SECTION
          ========================================================================= */}
      <section 
        id="article-hero-header"
        className="w-full bg-neutral-950 text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FlipButton
              type="button"
              onClick={() => onNavigate('/blog')}
              text="Retour aux articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer group"
              icon={
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </span>
              }
              iconPosition="left"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]"
          >
            {article.title}
          </motion.h1>

          {/* Subtitle / Intro sentence */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-300 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl"
          >
            {article.subtitle}
          </motion.p>

          {/* Author info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
              />
              <div>
                <div className="font-display font-bold text-base text-white">
                  {article.author.name}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400">
                  {article.author.role}
                </div>
              </div>
            </div>

            <div className="text-neutral-400 text-sm font-medium">
              {article.dateFormatted}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          PARALLAX IMAGE BANNER SECTION
          ========================================================================= */}
      <section 
        ref={imageRef}
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 z-20"
      >
        <div className="w-full h-[320px] sm:h-[460px] lg:h-[560px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 relative">
          <motion.div 
            style={{ y: imageY, scale: imageScale }}
            className="w-full h-[120%] -top-[10%] relative"
          >
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Sport Category badge in corner */}
          <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-lg border border-white/20 shadow-md">
            {article.categoryBadge}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ARTICLE RICH BODY TEXT
          ========================================================================= */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12 sm:space-y-16">
          {article.sections.map((sec, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-snug">
                {sec.heading}
              </h2>
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                {sec.body}
              </p>
            </motion.section>
          ))}
        </div>
      </main>

      {/* =========================================================================
          MORE INSIGHTS / ARTICLES LIÉS (2 Cartes)
          ========================================================================= */}
      <section 
        id="related-insights"
        className="w-full bg-[#FAFAFA] border-t border-neutral-200/80 py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {/* Section Header with "Voir tout" button */}
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
              Plus d'articles
            </h2>

            <FlipButton
              type="button"
              onClick={() => onNavigate('/blog')}
              text="Voir tout"
              className="bg-[#F9DE7C] hover:bg-[#fae494] text-neutral-950 font-display font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-xs cursor-pointer inline-flex items-center justify-center overflow-hidden"
            />
          </div>

          {/* 2 Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {relatedArticles.map((relPost, index) => (
              <motion.div
                key={relPost.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 group"
              >
                {/* Image */}
                <div
                  onClick={() => onNavigate(`/blog/${relPost.slug}`)}
                  className="w-full sm:w-[45%] h-52 sm:h-auto min-h-[200px] relative rounded-2xl overflow-hidden bg-neutral-100 shrink-0 cursor-pointer shadow-xs"
                >
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                  />
                  <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-white/15 shadow-xs">
                    {relPost.categoryBadge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Date */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-xs text-neutral-700 font-medium shadow-xs">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      <span>{relPost.dateFormatted}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onNavigate(`/blog/${relPost.slug}`)}
                      className="font-display font-bold text-lg text-neutral-950 leading-snug tracking-tight cursor-pointer hover:text-neutral-700 transition-colors"
                    >
                      {relPost.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {relPost.subtitle}
                    </p>
                  </div>

                  {/* Link with 3D Stagger Flip */}
                  <div>
                    <FlipButton
                      type="button"
                      onClick={() => onNavigate(`/blog/${relPost.slug}`)}
                      text="En savoir plus"
                      className="inline-flex items-center gap-2 font-display font-bold text-sm text-neutral-950 hover:text-neutral-700 group/btn cursor-pointer"
                      icon={
                        <span className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover/btn:bg-[#F9DE7C] group-hover/btn:text-neutral-950 transition-colors shadow-xs">
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </span>
                      }
                      iconPosition="right"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          CONTACT SECTION
          ========================================================================= */}
      <div id="contact-wrapper">
        <ContactSection />
      </div>

    </div>
  );
};
