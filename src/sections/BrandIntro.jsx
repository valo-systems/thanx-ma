import React from 'react';
import { motion } from 'framer-motion';
import EditorialPillar from '../components/EditorialPillar.jsx';

/**
 * BrandIntro — the first fully typographic section.
 *
 * Placed immediately after the hero, this section grounds the brand's
 * identity in language rather than imagery. No background photograph,
 * no icons, no cards. The words and the space around them do the work.
 *
 * Three pillars frame the brand in a single gesture:
 *   Gratitude  — the soul of the name
 *   Heritage   — the cultural anchor
 *   Storytelling — the form and the mission
 */

const PILLARS = [
  {
    title: 'Gratitude',
    body:  'Thanx Ma carries the act of saying thank you to those who raised us, shaped us, and made us possible.',
  },
  {
    title: 'Heritage',
    body:  'Every story told here is rooted in African soil: its families, its languages, its weight and its beauty.',
  },
  {
    title: 'Storytelling',
    body:  'Not commentary. Not performance. The kind of storytelling that lives on after the screen goes dark.',
  },
];

const BrandIntro = () => {
  return (
    <section
      id="brand-intro"
      className="relative py-28 sm:py-40 bg-umber-dark overflow-hidden"
    >
      {/* Very faint pattern — texture only */}
      <div className="absolute inset-0 -z-10 bg-pattern-subtle opacity-[0.1]" aria-hidden="true" />

      <div className="container-editorial">
        {/* ── Heading block ─────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left column — the headline */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <span className="eyebrow mb-6 block">About the name</span>

            {/* Headline */}
            <h2 className="section-title mb-0">
              A name shaped{' '}
              <br className="hidden sm:block" />
              by{' '}
              <span className="italic text-gold-light">gratitude</span>.
            </h2>
          </motion.div>

          {/* Right column — the body */}
          <motion.div
            className="lg:col-span-6 lg:pt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="body-copy measure-body">
              Thanx Ma carries the spirit of honouring those who raise, guide
              and shape us. It is a storytelling house built around memory,
              dignity, family and cultural weight.
            </p>
          </motion.div>

        </div>

        {/* ── Gold hairline ─────────────────────────────────────────────── */}
        <motion.div
          className="mt-16 sm:mt-20 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, delay: 0.1 }}
          style={{ transformOrigin: 'left' }}
          aria-hidden="true"
        />

        {/* ── Three editorial pillars ───────────────────────────────────── */}
        <div className="mt-14 sm:mt-16 grid sm:grid-cols-3 gap-10 sm:gap-8">
          {PILLARS.map((p, i) => (
            <EditorialPillar
              key={p.title}
              title={p.title}
              body={p.body}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;
