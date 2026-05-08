import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LogoLockup — the Thanx Ma Productions brand mark.
 *
 * Composition:
 *   [◆]  Thanx Ma
 *         PRODUCTIONS   ← hidden on mobile (< sm), visible sm and up
 *
 * TODO: Replace with the approved Thanx Ma Productions SVG logo once
 * the official brand mark is supplied by the client.
 *
 * Props:
 *   size     'sm' | 'md' | 'lg'
 *   light    bool   — dark-text variant for light backgrounds
 *   asLink   bool   — wraps in a <Link to="/">
 *   onClick  fn     — forwarded to the <Link> (used to close the mobile menu)
 *   className string
 */
const SIZES = {
  sm: { diamond: 7,  wordmark: 'text-lg',  sub: 'text-[9px]',  gap: 'gap-2.5' },
  md: { diamond: 8,  wordmark: 'text-xl',  sub: 'text-[10px]', gap: 'gap-3'   },
  lg: { diamond: 11, wordmark: 'text-3xl', sub: 'text-xs',     gap: 'gap-3.5' },
};

const LogoLockup = ({
  size      = 'md',
  light     = false,
  asLink    = true,
  onClick,
  className = '',
}) => {
  const s         = SIZES[size] ?? SIZES.md;
  const textColor = light ? 'text-charcoal-900' : 'text-ivory';
  const subColor  = light ? 'text-charcoal-900/50' : 'text-ivory/45';

  const inner = (
    <span className={`flex items-center ${s.gap} group ${className}`}>
      {/* Diamond mark */}
      <svg
        width={s.diamond}
        height={s.diamond}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-500 group-hover:rotate-[45deg]"
        style={{ transformOrigin: 'center' }}
      >
        <path d="M5 0.5 L9.5 5 L5 9.5 L0.5 5 Z" fill="#C9A44F" />
      </svg>

      {/* Wordmark stack */}
      <span className="flex flex-col leading-none gap-[3px]">
        <span
          className={`font-serif font-medium tracking-[-0.01em] ${s.wordmark} ${textColor}
                      transition-colors duration-300 group-hover:text-gold`}
        >
          Thanx Ma
        </span>

        {/*
          "PRODUCTIONS" — hidden on small screens (< sm) so the mobile nav
          bar shows only "Thanx Ma". Visible from sm (640px) upward.
        */}
        <span
          className={`hidden sm:block font-sans font-medium tracking-editorial
                      ${s.sub} ${subColor} transition-colors duration-300`}
        >
          PRODUCTIONS
        </span>
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link to="/" onClick={onClick} aria-label="Thanx Ma Productions — home">
      {inner}
    </Link>
  );
};

export default LogoLockup;
