import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeader — eyebrow + serif headline + animated gold rule + optional lede.
 *
 * Used to anchor every major interior section. Refined for stronger vertical
 * rhythm, tighter leading, and less default max-width restriction.
 *
 * Props:
 *   eyebrow   string                — small tracked uppercase label
 *   title     ReactNode             — headline (can include spans for accents)
 *   lede      string | ReactNode    — optional supporting paragraph
 *   align     'left' | 'center'
 *   light     bool                  — render dark text (for light bg sections)
 *   maxW      string                — Tailwind class controlling lede width, e.g. 'max-w-2xl'
 */
const SectionHeader = ({
  eyebrow,
  title,
  lede,
  align  = 'left',
  light  = false,
  maxW   = 'max-w-3xl',
}) => {
  const isCentered = align === 'center';
  const alignment = isCentered ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} ${isCentered ? 'mx-auto' : ''} ${maxW}`}>
      {eyebrow && (
        <motion.span
          className="eyebrow mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        className={`display-2 ${light ? 'text-charcoal-900' : 'text-ivory'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.06 }}
      >
        {title}
      </motion.h2>

      <motion.span
        className="gold-rule mt-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.28 }}
        style={{ transformOrigin: isCentered ? 'center' : 'left' }}
      />

      {lede && (
        <motion.p
          className={`body-lg mt-8 ${light ? 'text-charcoal-900/65' : 'text-ivory/70'}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.38 }}
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
