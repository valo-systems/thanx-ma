import React from 'react';
import { motion } from 'framer-motion';

/**
 * EditorialPillar — a typographic brand statement column.
 *
 * Deliberately avoids the SaaS feature-card look:
 *   - No box, no shadow, no icon.
 *   - A single 1px gold hairline at the top is the only decoration.
 *   - The title is large italic serif — the visual weight IS the design.
 *   - The body is spare and restrained.
 *
 * These read like sentences in a manifesto, not bullet points in a deck.
 *
 * Props:
 *   title          string — one-word or short phrase
 *   body           string — one to two sentences maximum
 *   index          number — for stagger animation delay
 *   bodyClassName  string — override body paragraph classes if needed
 *                           (e.g. remove max-w-xs when used in a narrow column)
 */
const EditorialPillar = ({ title, body, index = 0, bodyClassName = '' }) => {
  return (
    <motion.div
      className="flex flex-col gap-5 pt-7 border-t border-gold/30
                 group hover:border-gold/55 transition-colors duration-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.85, delay: 0.1 + index * 0.12 }}
    >
      <h3
        className="font-serif text-3xl sm:text-4xl italic text-ivory/90
                   leading-none tracking-tight
                   group-hover:text-ivory transition-colors duration-300"
      >
        {title}
      </h3>
      <p
        className={`text-sm text-sand/75 leading-relaxed font-light ${
          bodyClassName || 'max-w-xs'
        }`}
      >
        {body}
      </p>
    </motion.div>
  );
};

export default EditorialPillar;
