import React from 'react';

/**
 * PatternDivider — a typographic pause between sections.
 *
 * Three diamonds, two flanking hairlines, one centre ember dot.
 * Kept at low opacity so it reads as rhythm, not decoration.
 *
 * Note on cultural reference: the diamond geometry here is abstracted
 * from pan-African beadwork and textile traditions. It is not a literal
 * copy of any specific Zulu motif — it references the vocabulary without
 * flattening it into costume.
 */
const PatternDivider = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center gap-5 py-10 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent to-gold/35" />
      <svg
        width="108"
        height="20"
        viewBox="0 0 120 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#C9A44F" strokeWidth="0.7" fill="none" opacity="0.7">
          <path d="M30 11 L40 1 L50 11 L40 21 Z" />
          <path d="M55 11 L60 6 L65 11 L60 16 Z" fill="#C9A44F" fillOpacity="0.4" />
          <path d="M70 11 L80 1 L90 11 L80 21 Z" />
        </g>
        <circle cx="60" cy="11" r="1.3" fill="#C9A44F" opacity="0.85" />
      </svg>
      <span className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent to-gold/35" />
    </div>
  );
};

export default PatternDivider;
