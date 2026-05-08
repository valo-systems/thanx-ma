import React from 'react';

/**
 * BookCoverPlaceholder — generates a premium SVG-based book cover.
 *
 * ╔════════════════════════════════════════════════════════════════════╗
 * ║  TODO (before public launch):                                      ║
 * ║  Replace this component by rendering a real <img> with an         ║
 * ║  approved, rights-cleared cover file.                              ║
 * ║                                                                    ║
 * ║  Drop the image at: /public/assets/books/<slug>-cover.jpg         ║
 * ║  (or .webp). Update imageManifest.js with the new key.             ║
 * ║  Then swap the BookCard's cover prop from                          ║
 * ║  <BookCoverPlaceholder /> to <img src={IMAGES.bookSlug} alt="…"/> ║
 * ╚════════════════════════════════════════════════════════════════════╝
 *
 * Props:
 *   title        string — book title rendered inside the placeholder
 *   author       string — author name line (default: "Musa C. Mseleku")
 *   variant      'umber' | 'charcoal' | 'gold' | 'clay' | 'deep'
 *                — controls the background accent palette
 *   className    string — extra classes on the wrapper
 */

const VARIANTS = {
  umber:   { bg: '#3d2817', accent: '#c9a961', dim: '#2a1b0f', mid: '#5a3b22' },
  charcoal:{ bg: '#1a1614', accent: '#c9a961', dim: '#0b0908', mid: '#2a2422' },
  gold:    { bg: '#2a1e0a', accent: '#e2c789', dim: '#1a1205', mid: '#3d2c0e' },
  clay:    { bg: '#3a1a10', accent: '#c9a961', dim: '#240f08', mid: '#5c2a20' },
  deep:    { bg: '#131010', accent: '#a08740', dim: '#080606', mid: '#1f1a18' },
};

// Wrap title into lines of max ~18 characters for SVG text
const wrapTitle = (title, maxChars = 18) => {
  const words = title.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    if ((line + ' ' + word).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = word;
    } else {
      line = (line + ' ' + word).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines.slice(0, 4); // max 4 lines
};

const BookCoverPlaceholder = ({
  title,
  author = 'Musa C. Mseleku',
  variant = 'umber',
  className = '',
}) => {
  const c = VARIANTS[variant] ?? VARIANTS.umber;
  const lines = wrapTitle(title);
  // Vertically centre the title block (each line ~28px, 10px gap)
  const blockH = lines.length * 28 + (lines.length - 1) * 4;
  const titleY = (300 - blockH) / 2;

  return (
    <div className={`relative w-full h-full select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 300"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Background */}
        <rect width="200" height="300" fill={c.bg} />
        <rect width="200" height="300" fill={c.dim} opacity="0.4" />

        {/* Subtle radial warm glow from top */}
        <radialGradient id={`glow-${variant}`} cx="50%" cy="20%" r="60%">
          <stop offset="0%" stopColor={c.accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor={c.bg} stopOpacity="0" />
        </radialGradient>
        <rect width="200" height="300" fill={`url(#glow-${variant})`} />

        {/* Spine accent — left edge */}
        <rect x="0" y="0" width="8" height="300" fill={c.mid} />
        <rect x="7" y="0" width="1" height="300" fill={c.accent} opacity="0.5" />

        {/* Geometric pattern — large background diamond */}
        <g stroke={c.accent} strokeOpacity="0.07" strokeWidth="0.5" fill="none">
          <path d="M100 20 L190 150 L100 280 L10 150 Z" />
          <path d="M100 50 L170 150 L100 250 L30 150 Z" />
          <path d="M100 80 L150 150 L100 220 L50 150 Z" />
        </g>

        {/* Inner accent diamond (filled) */}
        <path
          d="M100 110 L125 150 L100 190 L75 150 Z"
          fill={c.accent}
          opacity="0.12"
          stroke={c.accent}
          strokeOpacity="0.5"
          strokeWidth="0.6"
        />

        {/* Corner tick marks */}
        <g stroke={c.accent} strokeOpacity="0.45" strokeWidth="0.7">
          <path d="M18 14 L28 14 M18 14 L18 24" />
          <path d="M182 14 L172 14 M182 14 L182 24" />
          <path d="M18 286 L28 286 M18 286 L18 276" />
          <path d="M182 286 L172 286 M182 286 L182 276" />
        </g>

        {/* Top gold rule */}
        <line x1="18" y1="36" x2="182" y2="36" stroke={c.accent} strokeWidth="0.5" opacity="0.6" />

        {/* Author name — top */}
        <text
          x="104"
          y="52"
          textAnchor="middle"
          fill={c.accent}
          opacity="0.75"
          fontSize="8"
          fontFamily="Georgia, serif"
          letterSpacing="2"
        >
          {author.toUpperCase()}
        </text>

        {/* Title lines — centred vertically */}
        {lines.map((line, i) => (
          <text
            key={i}
            x="104"
            y={titleY + i * 32 + 22}
            textAnchor="middle"
            fill="#f5f0e1"
            fontSize={lines.length <= 2 ? 20 : 16}
            fontFamily="Georgia, serif"
            fontStyle="italic"
          >
            {line}
          </text>
        ))}

        {/* Bottom gold rule */}
        <line x1="18" y1="264" x2="182" y2="264" stroke={c.accent} strokeWidth="0.5" opacity="0.6" />

        {/* Publisher placeholder */}
        <text
          x="104"
          y="278"
          textAnchor="middle"
          fill={c.accent}
          opacity="0.45"
          fontSize="6"
          fontFamily="Georgia, serif"
          letterSpacing="1.5"
        >
          THANX MA PRODUCTIONS
        </text>

        {/* Placeholder watermark — remove once real cover is in place */}
        <text
          x="100"
          y="152"
          textAnchor="middle"
          fill={c.accent}
          opacity="0.06"
          fontSize="6"
          fontFamily="Georgia, serif"
          letterSpacing="1"
        >
          PLACEHOLDER — REPLACE WITH APPROVED COVER
        </text>
      </svg>
    </div>
  );
};

export default BookCoverPlaceholder;
