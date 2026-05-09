import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LogoLockup — the Thanx Ma brand mark.
 *
 * Composition:
 *   ◇  Thanx Ma     (horizontal, default)
 *   ◇                (stacked variant — mark above wordmark)
 *   Thanx Ma
 *
 * The mark is rendered as inline SVG — not an <img> — so it:
 *   - stays crisp at every size (no rasterisation, no Retina pain)
 *   - inherits hover / focus / theme colour via currentColor
 *   - can animate its sub-paths (subtle hover rotation)
 *   - keeps the wordmark as live, accessible text in Cormorant Garamond
 *
 * The geometry mirrors the supplied Thanx Ma art: a beaded outer ring,
 * solid outer diamond, solid inner diamond, centre point, and small
 * accent diamonds top + bottom.
 *
 * Approved PNG art lives at /public/assets/logos/ if a fully rasterised
 * version is ever needed (e.g. for an OG cover or a print export).
 *
 * Props:
 *   size      'sm' | 'md' | 'lg'
 *   variant   'horizontal' | 'stacked'
 *   light     bool   — dark text variant for light backgrounds
 *   asLink    bool   — wraps in a <Link to="/">
 *   onClick   fn     — forwarded to the link (used to close the mobile menu)
 *   className string
 */
const SIZES = {
  sm: { mark: 16, wordmark: 'text-base',  gap: 'gap-2.5' },
  md: { mark: 22, wordmark: 'text-xl',    gap: 'gap-3'   },
  lg: { mark: 36, wordmark: 'text-3xl',   gap: 'gap-4'   },
};

const Mark = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size * 1.35}
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`shrink-0 transition-transform duration-700 ease-out ${className}`}
    style={{ transformOrigin: 'center', color: '#C9A44F' }}
  >
    {/* Top accent diamond */}
    <path d="M16 1 L18.4 3.4 L16 5.8 L13.6 3.4 Z" fill="currentColor" />

    {/* Beaded ring — eight evenly placed dots around the outer diamond */}
    <g fill="currentColor">
      <circle cx="16"  cy="6.4"  r="0.55" />
      <circle cx="22"  cy="12"   r="0.55" />
      <circle cx="27"  cy="22"   r="0.55" />
      <circle cx="22"  cy="32"   r="0.55" />
      <circle cx="16"  cy="37.6" r="0.55" />
      <circle cx="10"  cy="32"   r="0.55" />
      <circle cx="5"   cy="22"   r="0.55" />
      <circle cx="10"  cy="12"   r="0.55" />
    </g>

    {/* Outer diamond — primary outline */}
    <path
      d="M16 8 L26 22 L16 36 L6 22 Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="miter"
    />

    {/* Inner diamond — concentric secondary outline */}
    <path
      d="M16 14 L21 22 L16 30 L11 22 Z"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="miter"
    />

    {/* Centre point */}
    <path d="M16 20.6 L17.3 22 L16 23.4 L14.7 22 Z" fill="currentColor" />

    {/* Bottom accent diamond */}
    <path d="M16 38.2 L18.4 40.6 L16 43 L13.6 40.6 Z" fill="currentColor" />
  </svg>
);

const Wordmark = ({ className = '' }) => (
  <span
    className={`font-serif font-medium tracking-[-0.01em] transition-colors duration-300 ${className}`}
  >
    Thanx Ma
  </span>
);

const LogoLockup = ({
  size      = 'md',
  variant   = 'horizontal',
  light     = false,
  asLink    = true,
  onClick,
  className = '',
}) => {
  const s         = SIZES[size] ?? SIZES.md;
  const textColor = light ? 'text-charcoal-900' : 'text-ivory';

  const inner =
    variant === 'stacked' ? (
      <span
        className={`inline-flex flex-col items-center ${s.gap} group ${className}`}
      >
        <Mark
          size={s.mark * 1.6}
          className="group-hover:-translate-y-px"
        />
        <Wordmark
          className={`${s.wordmark} ${textColor} group-hover:text-gold`}
        />
      </span>
    ) : (
      <span className={`flex items-center ${s.gap} group ${className}`}>
        <Mark
          size={s.mark}
          className="group-hover:rotate-[8deg]"
        />
        <Wordmark
          className={`${s.wordmark} ${textColor} group-hover:text-gold`}
        />
      </span>
    );

  if (!asLink) return inner;

  return (
    <Link to="/" onClick={onClick} aria-label="Thanx Ma — home">
      {inner}
    </Link>
  );
};

export default LogoLockup;
