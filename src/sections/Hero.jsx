import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button.jsx';
import IMAGES from '../assets/imageManifest.js';

/**
 * Hero — the opening statement of the brand.
 *
 * Copy direction:
 *   - No "premium", "platform", "cutting-edge" or startup language.
 *   - Three words. A sentence. A quiet invitation.
 *   - The image does the cinematic work; the text does the editorial work.
 *
 * Image treatment:
 *   - Transparent at the top — the landscape breathes.
 *   - Warm umber midpoint — ties the image to the brand palette.
 *   - Near-black at the bottom — text reads with full clarity.
 *   - Pattern overlay kept at 15% — texture, not noise.
 *
 * TODO: Replace IMAGES.hero with an approved cinematic hero image once
 * the Thanx Ma Productions team supplies or approves an asset.
 */

// Stagger config for the content elements
const VARIANTS = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0 },
};
const TRANSITION = (delay = 0) => ({
  duration: 1.05,
  delay,
  ease: [0.22, 1, 0.36, 1],
});

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-end pb-24 sm:pb-32 lg:pb-40"
    >
      {/* ── Background image ───────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center animate-slow-zoom"
          loading="eager"
          fetchpriority="high"
        />

        {/* Cinematic gradient stack */}
        <div className="absolute inset-0 bg-gradient-cinematic" />
        <div className="absolute inset-0 bg-radial-warm" />

        {/* Pattern — 15% opacity, barely there */}
        <div className="absolute inset-0 bg-pattern-subtle opacity-[0.15]" />
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="container-editorial w-full">
        <div className="measure-hero">

          {/* Eyebrow */}
          <motion.div
            variants={VARIANTS}
            initial="hidden"
            animate="show"
            transition={TRANSITION(0.2)}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
            <span className="eyebrow">Thanx Ma</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-title"
            variants={VARIANTS}
            initial="hidden"
            animate="show"
            transition={TRANSITION(0.4)}
          >
            Family.{' '}
            <span className="text-ivory/80">Culture.</span>{' '}
            <span className="italic text-gold-light">Legacy.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="body-copy mt-8 measure-body"
            variants={VARIANTS}
            initial="hidden"
            animate="show"
            transition={TRANSITION(0.65)}
          >
            Rooted in gratitude and shaped by African identity, Thanx Ma
            exists to tell stories that honour where we come from
            and what we leave behind.
          </motion.p>

          {/* CTA — single primary action. Full width on mobile, auto on desktop. */}
          <motion.div
            variants={VARIANTS}
            initial="hidden"
            animate="show"
            transition={TRANSITION(0.88)}
            className="mt-12"
          >
            <Button
              href="#contact"
              variant="primary"
              className="sm:w-auto w-full justify-center py-4 sm:py-3.5 text-sm"
            >
              Book Musa
            </Button>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────────────── */}
      <motion.a
        href="#brand-intro"
        aria-label="Continue"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5 text-ivory/40 hover:text-gold transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      >
        <span className="text-[9px] uppercase tracking-editorial">Scroll</span>
        <ArrowDown size={13} className="animate-bounce" strokeWidth={1.4} />
      </motion.a>
    </section>
  );
};

export default Hero;
