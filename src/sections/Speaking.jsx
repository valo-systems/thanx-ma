import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Briefcase, Globe2, Sparkles, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import Button from '../components/Button.jsx';
import IMAGES from '../assets/imageManifest.js';

/**
 * Speaking & Appearances — the speaking booking section.
 *
 * The seated portrait of Musa on the carved chair runs as a very faint
 * atmospheric background. The content is the foreground.
 *
 * TODO: Replace IMAGES.speaking once the official approved portrait is
 * supplied by the Thanx Ma Productions team.
 */

const FORMATS = [
  { icon: Mic,            label: 'Keynote talks' },
  { icon: Globe2,         label: 'Cultural conversations' },
  { icon: Sparkles,       label: 'Media appearances' },
  { icon: Briefcase,      label: 'Business events' },
  { icon: GraduationCap,  label: 'Leadership events' },
];

const TOPICS = [
  'Building legacy',
  'Family and leadership',
  'African culture in modern business',
  'Media entrepreneurship',
  'Lessons from public life',
];

const Speaking = () => {
  return (
    <section
      id="speaking"
      className="relative py-28 sm:py-36 bg-charcoal-900 overflow-hidden"
    >
      {/* Atmospheric portrait — very muted */}
      <div className="absolute inset-0 -z-10 opacity-[0.18]">
        <img
          src={IMAGES.speaking}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/50 to-charcoal-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-transparent to-charcoal-900" />
      </div>

      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* ── Heading column ───────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Speaking & Appearances"
              title={
                <>
                  Book Musa for the{' '}
                  <span className="italic text-gold-light">stage</span>.
                </>
              }
              lede="From boardrooms to broadcast, Musa speaks on legacy, family, culture and what it means to build a name that outlives you."
            />
            <div className="mt-10">
              <Button href="#contact" variant="primary">
                Enquire about a booking
              </Button>
            </div>
          </div>

          {/* ── Content column ───────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-14">

            {/* Formats */}
            <div>
              <p className="eyebrow text-ivory/40 mb-6">Formats</p>
              <ul className="grid sm:grid-cols-2 gap-0">
                {FORMATS.map((f, i) => (
                  <motion.li
                    key={f.label}
                    className="flex items-center gap-4 border-b border-ivory/8 py-4 last:border-b-0 sm:[&:nth-child(odd):last-child]:col-span-2"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-gold/30 text-gold shrink-0">
                      <f.icon size={15} strokeWidth={1.4} />
                    </span>
                    <span className="font-serif text-[1.1rem] text-ivory/90">{f.label}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Topics */}
            <div>
              <p className="eyebrow text-ivory/40 mb-7">Topics</p>
              <ul className="space-y-3">
                {TOPICS.map((t, i) => (
                  <motion.li
                    key={t}
                    className="flex items-baseline gap-5 group"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <span className="font-mono text-[10px] text-gold/55 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-[1.6rem] sm:text-3xl text-ivory group-hover:text-gold-light transition-colors duration-300 leading-tight">
                      {t}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
