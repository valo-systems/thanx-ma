import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Leaf, Hammer, Users, Globe2 } from 'lucide-react';
import BookCoverPlaceholder from './BookCoverPlaceholder.jsx';
import PatternDivider from './PatternDivider.jsx';

/**
 * BookSpotlight — editorial deep-dive for "How I Made My First Million".
 *
 * This book connects directly to speaking, mentorship and business enquiries,
 * so it receives a dedicated editorial section rather than a standard card.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * TODO (before public launch):
 *   - Confirm description copy with Thanx Ma Productions.
 *   - Replace BookCoverPlaceholder with the approved cover image.
 *     File: /public/assets/books/how-i-made-my-first-million-cover.jpg
 *   - Add verified purchase/retail links (Google Books, Amazon, Everand, etc.).
 *   - Confirm publisher name and publication year.
 *   - Confirm ISBN.
 * ──────────────────────────────────────────────────────────────────────────
 */

const THEMES = [
  {
    icon: <Target size={18} strokeWidth={1.4} />,
    label: 'Business lessons',
    detail: 'Grounded, real-world lessons drawn from Musa\'s own entrepreneurial journey.',
  },
  {
    icon: <Hammer size={18} strokeWidth={1.4} />,
    label: 'Discipline',
    detail: 'The consistent habits and mental fortitude that separate those who build from those who plan.',
  },
  {
    icon: <Leaf size={18} strokeWidth={1.4} />,
    label: 'Starting small',
    detail: 'A clear-eyed account of beginning with limited resources and making them work.',
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.4} />,
    label: 'Building from difficult circumstances',
    detail: 'Honest reflections on adversity, perseverance and turning setbacks into strategy.',
  },
  {
    icon: <Users size={18} strokeWidth={1.4} />,
    label: 'Mentorship',
    detail: 'The importance of guidance, community and passing knowledge to the next generation.',
  },
  {
    icon: <Globe2 size={18} strokeWidth={1.4} />,
    label: 'African entrepreneurship',
    detail: 'A perspective on building wealth and business from an African cultural foundation.',
  },
];

const BookSpotlight = () => {
  return (
    <section
      id="book-spotlight"
      className="relative py-28 sm:py-36 bg-umber-dark overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-pattern-subtle opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-900/60 via-umber-dark to-charcoal-900/80" />

      <div className="container-editorial">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16 sm:mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Book Spotlight</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Cover column */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-48 sm:w-56 lg:w-full lg:max-w-[260px]">
              {/*
                TODO: Replace with approved cover.
                  <img
                    src="/assets/books/how-i-made-my-first-million-cover.jpg"
                    alt="Cover of How I Made My First Million by Musa C. Mseleku"
                    className="w-full shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)]"
                  />
              */}
              <div className="relative aspect-[2/3] overflow-hidden shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)]">
                <BookCoverPlaceholder
                  title="How I Made My First Million"
                  variant="gold"
                />
                <span className="pointer-events-none absolute inset-0 border border-gold/20" />
              </div>
              {/* Corner accents */}
              <span className="absolute -top-3 -left-3 h-10 w-10 border-t border-l border-gold/50" />
              <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-gold/50" />
            </div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <motion.span
                className="eyebrow text-gold/70 mb-5 block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
              >
                Business &amp; Personal Development
              </motion.span>

              <motion.h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-ivory"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.08 }}
              >
                How I Made My{' '}
                <span className="italic text-gold-light">First Million</span>
                <br />
                — And How You Can Also Do It.
              </motion.h2>

              <motion.span
                className="gold-rule mt-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.25 }}
                style={{ transformOrigin: 'left' }}
              />

              <motion.p
                className="body-lg mt-8 max-w-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.35 }}
              >
                A practical business and mindset book sharing lessons on strategy, discipline,
                starting small, overcoming difficulty and building confidence in business.
                Drawn from Musa C. Mseleku's own entrepreneurial experience, it is both a
                personal account and a blueprint for those building from the ground up.
              </motion.p>
            </div>

            {/* Theme grid */}
            <div>
              <p className="eyebrow text-ivory/50 mb-7">What the book covers</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
                {THEMES.map((t, i) => (
                  <motion.div
                    key={t.label}
                    className="flex gap-4 py-5 border-b border-ivory/8 last:border-0 sm:[&:nth-last-child(2)]:border-0"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.05 + i * 0.06 }}
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-gold/30 text-gold">
                      {t.icon}
                    </span>
                    <div>
                      <p className="font-serif text-base text-ivory mb-1">{t.label}</p>
                      <p className="text-xs text-ivory/55 leading-relaxed">{t.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/*
              TODO: Add verified purchase links here.
              The book is publicly listed on Google Books, Amazon and Everand.
              Confirm the exact URLs and add them as follows:

              <div className="flex flex-wrap gap-4 pt-2">
                <a href="[AMAZON_URL]" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-gold/80 hover:text-gold border border-gold/30 hover:border-gold/60 px-5 py-2.5 transition-colors">
                  Find on Amazon →
                </a>
                <a href="[GOOGLE_BOOKS_URL]" ...>Google Books →</a>
                <a href="[EVERAND_URL]" ...>Everand →</a>
              </div>
            */}
          </div>
        </div>

        <PatternDivider className="mt-20" />
      </div>
    </section>
  );
};

export default BookSpotlight;
