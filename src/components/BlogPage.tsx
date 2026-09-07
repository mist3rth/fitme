import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { FEATURED_BLOG_POST, BLOG_POSTS, BlogPost } from '../data/blogData';
import { ContactSection } from './ContactSection';
import { FlipButton } from './TextFlip3D';

interface BlogPageProps {
  onContactClick: (context?: string) => void;
  onNavigateHome: () => void;
  onNavigateArticle?: (slug: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  onContactClick: _onContactClick, 
  onNavigateHome: _onNavigateHome,
  onNavigateArticle
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Articles & Conseils Sportifs | FiTME Coaching';
  }, []);

  const openArticle = (post: BlogPost) => {
    if (onNavigateArticle) {
      onNavigateArticle(post.slug);
    } else {
      window.location.href = `/blog/${post.slug}`;
    }
  };

  return (
    <div className="w-full bg-white text-neutral-950 min-h-screen flex flex-col">
      
      {/* =========================================================================
          HERO SECTION (Image blog.webp avec dézoom & reveal des textes)
          ========================================================================= */}
      <section 
        id="blog-hero"
        className="relative w-full h-[80vh] sm:h-[86vh] lg:h-[90vh] min-h-[540px] max-h-[920px] overflow-hidden flex flex-col justify-end"
      >
        {/* Animated Background Image with subtle dezoom effect */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
          <motion.div
            initial={{ scale: 1.15, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <img
              src="/blog.webp"
              alt="Articles, conseils et récits d'entraînement de haut niveau - FiTME"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
            />
          </motion.div>

          {/* Gradients and lighting overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Hero Content Container (Bottom Aligned: Title Bottom-Left, Text Bottom-Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 sm:pb-32 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            
            {/* Bottom Left: Huge Bold Display Title ("Articles" in Yellow / Gold) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 
                id="blog-hero-title"
                className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#F9DE7C] tracking-tight leading-none drop-shadow-md"
              >
                Articles
              </h1>
            </motion.div>

            {/* Bottom Right: Clean Impact Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md lg:max-w-lg lg:text-right"
            >
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white/95 leading-snug tracking-tight">
                Conseils d'entraînement d'experts, astuces de performance et histoires d'athlètes
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED ARTICLE SECTION (Large Hero Post: Basketball)
          ========================================================================= */}
      <section 
        id="featured-article"
        className="w-full bg-white pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAFAFA] rounded-3xl sm:rounded-[36px] p-6 sm:p-8 lg:p-12 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Visual Image with category badge */}
              <div 
                onClick={() => openArticle(FEATURED_BLOG_POST)}
                className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-neutral-100 cursor-pointer group"
              >
                <img
                  src={FEATURED_BLOG_POST.image}
                  alt={FEATURED_BLOG_POST.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge overlay on top-right of image */}
                <div className="absolute top-4 right-4 bg-black/65 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg border border-white/15 shadow-sm">
                  {FEATURED_BLOG_POST.categoryBadge}
                </div>

                {/* Subtle bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Right Column: Article Details */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
                
                {/* Date cartouche with rounded corners */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-700 font-medium w-fit shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{FEATURED_BLOG_POST.dateFormatted}</span>
                </div>

                {/* Main Headline */}
                <h2 
                  onClick={() => openArticle(FEATURED_BLOG_POST)}
                  className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight leading-[1.18] cursor-pointer hover:text-neutral-700 transition-colors"
                >
                  {FEATURED_BLOG_POST.title}
                </h2>

                {/* Paragraph summary */}
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
                  {FEATURED_BLOG_POST.summary}
                </p>

                {/* CTA Link ("En savoir plus" with circular arrow button and 3D stagger flip) */}
                <div className="pt-2">
                  <FlipButton
                    type="button"
                    onClick={() => openArticle(FEATURED_BLOG_POST)}
                    text="En savoir plus"
                    className="inline-flex items-center gap-3 font-display font-bold text-base sm:text-lg text-neutral-950 hover:text-neutral-700 group cursor-pointer"
                    icon={
                      <span className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:bg-[#F9DE7C] group-hover:text-neutral-950 transition-colors shadow-xs">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    }
                    iconPosition="right"
                  />
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          4 ARTICLES GRID SECTION (2 per row: Golf, Tennis, Football, Running)
          ========================================================================= */}
      <section 
        id="articles-grid"
        className="w-full bg-white pt-6 pb-20 sm:pb-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {BLOG_POSTS.map((post: BlogPost, index: number) => {
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#FAFAFA] rounded-3xl p-5 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 sm:gap-7 group"
                >
                  {/* Left Column in Card: Image with Category Tag */}
                  <div 
                    onClick={() => openArticle(post)}
                    className="w-full sm:w-[42%] h-56 sm:h-auto min-h-[220px] relative rounded-2xl overflow-hidden bg-neutral-100 shrink-0 cursor-pointer shadow-xs"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                    />

                    {/* Category badge top-right */}
                    <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-white/15 shadow-xs">
                      {post.categoryBadge}
                    </div>
                  </div>

                  {/* Right Column in Card: Content */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-3">
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-200 bg-white text-xs text-neutral-700 font-medium shadow-xs">
                        <Calendar className="w-3 h-3 text-neutral-400" />
                        <span>{post.dateFormatted}</span>
                      </div>

                      {/* Title */}
                      <h3 
                        onClick={() => openArticle(post)}
                        className="font-display font-bold text-lg sm:text-xl text-neutral-950 leading-snug tracking-tight cursor-pointer hover:text-neutral-700 transition-colors"
                      >
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    {/* CTA Link with 3D Stagger Flip */}
                    <div className="pt-2">
                      <FlipButton
                        type="button"
                        onClick={() => openArticle(post)}
                        text="En savoir plus"
                        className="inline-flex items-center gap-2.5 font-display font-bold text-sm text-neutral-950 hover:text-neutral-700 group/btn cursor-pointer"
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
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          CONTACT FORM SECTION (Directement à la suite des articles)
          ========================================================================= */}
      <div id="contact-wrapper">
        <ContactSection />
      </div>

    </div>
  );
};
