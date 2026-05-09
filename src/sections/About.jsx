import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button.jsx';
import EditorialPillar from '../components/EditorialPillar.jsx';
import IMAGES from '../assets/imageManifest.js';

/**
 * About — Musa C. Mseleku.
 *
 * Structure (desktop):  two-column — portrait left, content right.
 * Structure (mobile):   single column — heading → intro → photo → quote
 *                       → pillars → tags → CTA.
 *
 * The mobile reorder uses a dual-render: the portrait is rendered twice
 * (once desktop-only in the left column, once mobile-only inside the
 * content column between the intro and the quote). This avoids fighting
 * CSS `order` across a two-column grid.
 *
 * TODO: Replace IMAGES.about with the approved portrait once confirmed.
 *       Fallback: IMAGES.aboutFallback (Unsplash placeholder).
 */

// ─── Data ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    title: 'Business',
    body:  'Entrepreneur with interests across enterprise, media and long-term value creation.',
  },
  {
    title: 'Storytelling',
    body:  'A public figure and executive producer associated with family-centred South African storytelling and public conversation.',
  },
  {
    title: 'Legacy',
    body:  'A voice shaped by heritage, identity and the responsibility of carrying culture forward with dignity.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/**
 * Portrait — the image frame with cinematic vignette and gold corner accents.
 * Rendered twice: once for desktop (left column), once for mobile (inline).
 */
const Portrait = ({ className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-100">
      {/*
        Portrait of Musa C. Mseleku — standing, navy collarless suit.
        Image treatment: warm sepia + contrast lift + cinematic vignette.
        Replace src with the approved portrait when supplied.
      */}
      <img
        src={IMAGES.about}
        onError={(e) => {
          if (e.currentTarget.src !== IMAGES.aboutFallback) {
            e.currentTarget.src = IMAGES.aboutFallback;
          }
        }}
        alt="Portrait of Musa C. Mseleku"
        className="h-full w-full object-cover object-top
                   [filter:sepia(0.12)_saturate(0.88)_contrast(1.07)_brightness(0.92)]"
        loading="lazy"
      />
      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none
                   bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/15 to-transparent"
      />
      <div
        className="absolute inset-0 pointer-events-none
                   bg-gradient-to-r from-charcoal-900/20 via-transparent to-charcoal-900/10"
      />
      {/* Warm tone bind */}
      <div className="absolute inset-0 pointer-events-none bg-umber-dark mix-blend-multiply opacity-10" />
    </div>

    {/* Gold corner accents */}
    <span
      className="absolute -top-3 -left-3 h-12 w-12 border-t border-l border-gold/45 pointer-events-none"
      aria-hidden="true"
    />
    <span
      className="absolute -bottom-3 -right-3 h-12 w-12 border-b border-r border-gold/45 pointer-events-none"
      aria-hidden="true"
    />

    {/* Subtle label under portrait */}
    <p className="mt-5 text-[10px] uppercase tracking-editorial text-sand/40 text-center">
      Musa C. Mseleku — South Africa
    </p>
  </div>
);

/**
 * QuoteBlock — the signature statement.
 * Styled as a pull quote: gold left rule, italic serif, no quotation marks.
 */
const QuoteBlock = () => (
  <motion.blockquote
    className="border-l-2 border-gold/50 pl-6 py-1"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
  >
    <p className="quote-text">
      A life shaped by family, culture and the responsibility of legacy.
    </p>
  </motion.blockquote>
);

/**
 * NgiyabongaCallout — the soul-of-the-brand moment, folded into About.
 *
 * Replaces the previously-standalone ThanxMaMeaning section. Same words,
 * less prominent — keeps the gratitude beat without making the home page
 * scroll for a third time on the same idea.
 *
 * TODO: Wording must be reviewed and approved by the Thanx Ma team
 * before public launch.
 */
const NgiyabongaCallout = () => (
  <motion.div
    className="border-l-2 border-gold/35 pl-6 py-2 max-w-xl"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
  >
    <p className="eyebrow mb-3" style={{ color: 'rgba(201,164,79,0.7)' }}>Ukubonga</p>
    <p className="font-serif text-[1.15rem] sm:text-[1.3rem] leading-[1.5] text-ivory/82">
      Thanx Ma is a name carried with gratitude — a quiet tribute to motherhood,
      to the people who shape us, and to the legacy passed from one generation
      to the next.
    </p>
    <p className="font-serif italic text-[1.4rem] sm:text-[1.6rem] text-gold-light mt-5">
      Ngiyabonga, Ma.
    </p>
  </motion.div>
);

/**
 * SectionCTA — the closing action row.
 */
const SectionCTA = () => (
  <motion.div
    className="pt-2"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, delay: 0.1 }}
  >
    <p className="text-[11px] uppercase tracking-editorial text-sand/45 mb-5">
      Explore the work behind the name
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      {/* View Books — routes to the dedicated books page */}
      <Button
        href="/books"
        variant="primary"
        className="sm:w-auto w-full justify-center text-[13px] py-3.5"
        // Using <a> via Button's href prop; react-router Link not needed here
        // since Button renders <a> and the browser will navigate.
        // TODO: If SPA navigation is preferred, swap to a <Link> wrapper.
      >
        View Books
      </Button>
      <Button
        href="#contact"
        variant="ghost"
        className="sm:w-auto w-full justify-center text-[13px] py-3.5"
      >
        Speaking Enquiries
      </Button>
    </div>
  </motion.div>
);

// ─── Section ─────────────────────────────────────────────────────────────────

const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-charcoal-900">
      <div className="container-editorial">

        {/*
          Two-column grid on desktop.
          On mobile this collapses to a single column with the portrait
          rendered inline between the intro and the quote (see below).
        */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20 lg:items-start">

          {/* ── LEFT: portrait (desktop only) ──────────────────────────── */}
          <motion.div
            className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Portrait />
          </motion.div>

          {/* ── RIGHT: editorial content ────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-10 sm:gap-12">

            {/* 1 — Eyebrow + Heading + Intro */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow block mb-5">About</span>

              <h2 className="section-title mb-0">
                Musa C.{' '}
                <span className="italic text-gold-light">Mseleku</span>.
              </h2>

              {/* Animated gold rule */}
              <motion.span
                className="gold-rule mt-6 block"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.28 }}
                style={{ transformOrigin: 'left' }}
              />

              <p className="body-copy mt-8 measure-body">
                Musa C. Mseleku is a South African businessman, author and
                public figure whose work is rooted in family, culture and
                African enterprise. His journey reflects a deep respect for
                heritage, leadership and the stories that shape communities.
              </p>
            </motion.div>

            {/* 2 — Portrait: mobile only (between intro and quote) */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Portrait />
            </motion.div>

            {/* 3 — Signature quote */}
            <QuoteBlock />

            {/* 4 — Thin divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-gold/25 via-gold/10 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.1 }}
              style={{ transformOrigin: 'left' }}
              aria-hidden="true"
            />

            {/* 5 — Three editorial pillars */}
            <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
              {PILLARS.map((p, i) => (
                <EditorialPillar
                  key={p.title}
                  title={p.title}
                  body={p.body}
                  index={i}
                  bodyClassName="max-w-none"
                />
              ))}
            </div>

            {/* 6 — Ngiyabonga callout (replaces the standalone ThanxMaMeaning section) */}
            <NgiyabongaCallout />

            {/* 7 — CTA row */}
            <SectionCTA />

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
