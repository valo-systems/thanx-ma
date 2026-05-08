import React from 'react';
import { motion } from 'framer-motion';

/**
 * AuthorThemeCard — highlights a recurring theme in Musa's written work.
 *
 * Props:
 *   icon     ReactNode  — lucide icon element
 *   title    string     — theme name
 *   body     string     — short editorial description (1–2 sentences)
 *   index    number     — animation stagger index
 */
const AuthorThemeCard = ({ icon, title, body, index = 0 }) => {
  return (
    <motion.div
      className="group relative p-7 sm:p-8 bg-charcoal/50 border border-ivory/8 hover:border-gold/25 transition-colors duration-500 flex flex-col gap-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: index * 0.1 }}
    >
      {/* Animated gold rule at top on hover */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/60 via-gold/80 to-gold/60 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Icon */}
      <span className="inline-flex h-11 w-11 items-center justify-center border border-gold/35 text-gold group-hover:bg-gold/8 transition-colors duration-300">
        {icon}
      </span>

      {/* Title */}
      <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-gold-light transition-colors duration-300">
        {title}
      </h3>

      {/* Gold divider */}
      <span className="block h-px w-8 bg-gold/50" />

      {/* Body */}
      <p className="text-sm text-ivory/65 leading-relaxed">{body}</p>
    </motion.div>
  );
};

export default AuthorThemeCard;
