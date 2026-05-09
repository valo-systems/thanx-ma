import React from 'react';
import { motion } from 'framer-motion';

/**
 * FeatureCard — used for the Productions & Storytelling pillars.
 *
 * Editorial, not SaaS. No rounded corners, no heavy shadows.
 * The icon sits in a square (not rounded) frame to keep the vocabulary
 * consistent with the angular, geometric brand language.
 */
const FeatureCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.article
      className="group relative flex flex-col p-8 sm:p-10 bg-charcoal-100/60 border border-ivory/8 hover:border-gold/30 transition-colors duration-500"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      {/* Top hairline that extends on hover */}
      <span className="absolute top-0 left-0 h-px w-0 bg-gold transition-[width] duration-700 group-hover:w-full" />

      {Icon && (
        <div className="mb-7 inline-flex h-10 w-10 items-center justify-center border border-gold/35 text-gold shrink-0">
          <Icon size={18} strokeWidth={1.4} />
        </div>
      )}

      <h3 className="font-serif text-[1.6rem] sm:text-[1.75rem] text-ivory mb-4 leading-tight tracking-tight font-normal">
        {title}
      </h3>

      <p className="body-copy !text-sm">{description}</p>
    </motion.article>
  );
};

export default FeatureCard;
