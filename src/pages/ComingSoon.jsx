import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { LOGOS } from '../assets/imageManifest.js';

/* ── animation helpers ─────────────────────────────────────────────────── */
const T = (delay = 0, duration = 1.1) => ({
  duration,
  delay,
  ease: [0.22, 1, 0.36, 1],
});

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
};

/* ── floating diamond particle data ───────────────────────────────────── */
const PARTICLES = [
  { id: 0, x: '8%',  size: 7,  delay: 0,    dur: 9 },
  { id: 1, x: '18%', size: 4,  delay: 1.4,  dur: 11 },
  { id: 2, x: '31%', size: 10, delay: 0.6,  dur: 13 },
  { id: 3, x: '47%', size: 5,  delay: 2.1,  dur: 10 },
  { id: 4, x: '58%', size: 8,  delay: 0.3,  dur: 12 },
  { id: 5, x: '70%', size: 4,  delay: 1.8,  dur: 9.5 },
  { id: 6, x: '82%', size: 6,  delay: 0.9,  dur: 14 },
  { id: 7, x: '92%', size: 9,  delay: 2.7,  dur: 11.5 },
  { id: 8, x: '25%', size: 3,  delay: 3.2,  dur: 8 },
  { id: 9, x: '63%', size: 5,  delay: 1.1,  dur: 10.5 },
];

/* ── word-split headline ───────────────────────────────────────────────── */
const WORDS_LINE1 = ['A', 'story', 'is'];
const WORDS_LINE2 = ['being', 'prepared.'];

const Diamond = ({ size, style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    style={style}
    aria-hidden="true"
  >
    <polygon
      points="5,0 10,5 5,10 0,5"
      fill="none"
      stroke="rgba(201,164,79,0.55)"
      strokeWidth="0.8"
    />
    <circle cx="5" cy="5" r="1" fill="rgba(201,164,79,0.35)" />
  </svg>
);

/* ── toast ─────────────────────────────────────────────────────────────── */
const Toast = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="flex items-center gap-3 px-5 py-3.5 font-sans text-sm"
          style={{
            background: 'rgba(18,15,11,0.92)',
            border: '1px solid rgba(201,164,79,0.35)',
            backdropFilter: 'blur(12px)',
            color: 'var(--c-bone)',
            letterSpacing: '0.02em',
          }}
        >
          <span
            className="block h-1.5 w-1.5 rounded-full"
            style={{ background: 'var(--c-gold)', flexShrink: 0 }}
          />
          Email opened — <span style={{ color: 'var(--c-gold)' }}>info@valosystems.co.za</span>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ── main component ────────────────────────────────────────────────────── */
const ComingSoon = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  const handlePreviewClick = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

      {/* ── Background image ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/heritage/musa-cultural-grassland.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center animate-slow-zoom"
          loading="eager"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(18,15,11,0.55) 0%, rgba(36,23,15,0.65) 40%, rgba(18,15,11,0.94) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-pattern-subtle opacity-[0.10]" />
      </div>

      {/* ── Floating gold diamond particles ──────────────────────────────── */}
      {!prefersReduced && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {PARTICLES.map(p => (
            <motion.div
              key={p.id}
              className="absolute bottom-0"
              style={{ left: p.x }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, -120, -260, -400, -520],
                opacity: [0, 0.7, 0.9, 0.5, 0],
                rotate: [0, 45, 90, 135, 180],
              }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: p.delay * 0.6,
                ease: 'easeInOut',
              }}
            >
              <Diamond size={p.size} style={{}} />
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Ambient light beam ───────────────────────────────────────────── */}
      {!prefersReduced && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          aria-hidden="true"
          style={{
            width: '1px',
            height: '40vh',
            background: 'linear-gradient(to bottom, rgba(201,164,79,0) 0%, rgba(201,164,79,0.18) 50%, rgba(201,164,79,0) 100%)',
            filter: 'blur(1px)',
          }}
          animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.85, 1.1, 0.85] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[640px] mx-auto px-6 sm:px-10 text-center py-24">

        {/* Logo with pulsing gold halo */}
        <div className="relative flex justify-center mb-14">
          {!prefersReduced && (
            <>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: '7rem',
                  height: '7rem',
                  background: 'radial-gradient(circle, rgba(201,164,79,0.18) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: '5rem',
                  height: '5rem',
                  border: '1px solid rgba(201,164,79,0.22)',
                }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
                aria-hidden="true"
              />
            </>
          )}
          <motion.img
            src={LOGOS.markLight}
            alt="Thanx Ma Productions"
            className="relative h-16 sm:h-[4.5rem] w-auto"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={T(0, 1.6)}
          />
        </div>

        {/* Eyebrow */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={T(0.35)}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.span
            className="h-px bg-gold/55"
            style={{ width: 0 }}
            animate={{ width: '1.5rem' }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <span className="eyebrow">Kuyeza &nbsp;·&nbsp; Something is Coming</span>
          <motion.span
            className="h-px bg-gold/55"
            style={{ width: 0 }}
            animate={{ width: '1.5rem' }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Animated gold rule */}
        <motion.span
          className="gold-rule mx-auto mb-12"
          style={{ display: 'block', transformOrigin: 'center' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Headline — word by word */}
        <h1
          className="font-serif text-balance"
          style={{
            fontSize: 'clamp(2.9rem, 8.5vw, 6.8rem)',
            lineHeight: 0.93,
            fontWeight: 400,
            letterSpacing: '-0.025em',
            color: 'var(--c-bone)',
          }}
        >
          <span className="block">
            {WORDS_LINE1.map((word, i) => (
              <motion.span
                key={word + i}
                style={{ display: 'inline-block', marginRight: '0.22em' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={T(0.65 + i * 0.12)}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block" style={{ color: 'var(--c-gold-soft)', fontStyle: 'italic' }}>
            {WORDS_LINE2.map((word, i) => (
              <motion.span
                key={word + i}
                style={{ display: 'inline-block', marginRight: '0.22em' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={T(1.0 + i * 0.14)}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Body */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={T(1.3)}
          className="body-copy mt-8 mx-auto text-balance"
          style={{ maxWidth: '50ch' }}
        >
          Rooted in gratitude and shaped by African identity — Thanx Ma is a legacy
          platform for stories that honour where we come from and what we leave behind.
          Arriving soon.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={T(1.55)}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:info@valosystems.co.za?subject=Thanx%20Ma%20%E2%80%94%20Preview%20Request"
            onClick={handlePreviewClick}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto text-sm font-sans font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            style={{
              background: 'var(--c-gold)',
              color: 'var(--c-ink)',
              letterSpacing: '0.04em',
            }}
            whileHover={{ y: -2, boxShadow: '0 8px 32px -8px rgba(201,164,79,0.55)' }}
            whileTap={{ scale: 0.97, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Request a Preview
          </motion.a>

          <motion.a
            href="https://valosystems.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans font-medium tracking-wide underline-offset-4"
            style={{ color: 'rgba(244,238,226,0.55)', letterSpacing: '0.03em' }}
            whileHover={{ color: 'rgba(201,164,79,0.9)' }}
            transition={{ duration: 0.2 }}
          >
            valosystems.co.za →
          </motion.a>
        </motion.div>

        {/* Brand pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={T(2.1, 1.4)}
          className="mt-16 flex items-center justify-center gap-5"
        >
          {['Family', 'Culture', 'Legacy'].map((word, i) => (
            <React.Fragment key={word}>
              {i > 0 && (
                <span
                  className="block h-px w-3"
                  style={{ background: 'rgba(201,164,79,0.2)' }}
                  aria-hidden="true"
                />
              )}
              <span
                className="eyebrow"
                style={{ color: 'rgba(201,164,79,0.36)', fontSize: '0.62rem' }}
              >
                {word}
              </span>
            </React.Fragment>
          ))}
        </motion.div>

      </div>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={T(2.5, 1.4)}
        className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none"
      >
        <p
          className="font-sans tracking-wide pointer-events-auto"
          style={{ fontSize: '0.67rem', color: 'rgba(244,238,226,0.2)' }}
        >
          Developed by{' '}
          <a
            href="https://valosystems.co.za"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(244,238,226,0.32)', transition: 'color 300ms' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,164,79,0.55)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,238,226,0.32)')}
          >
            Valo Systems
          </a>
          {' '}· © 2026 Thanx Ma Productions
        </p>
      </motion.footer>

      {/* ── Toast ─────────────────────────────────────────────────────── */}
      <Toast visible={toastVisible} />

    </div>
  );
};

export default ComingSoon;
