import React from 'react';

/**
 * Button — Thanx Ma Productions design system.
 *
 * Variants:
 *   primary  — aged-gold fill, ink text. The single most important CTA on
 *              any surface. Use sparingly so it retains authority.
 *   ghost    — transparent with a refined ivory border. Secondary actions.
 *   subtle   — bare text link with rightward arrow hover. Tertiary / inline.
 *
 * Hover intent:
 *   - No heavy box-shadows or colour blasts.
 *   - primary: 1px lift + soft warm underglow on the gold fill.
 *   - ghost: border warms to gold, text warms slightly.
 *   - subtle: underline reveals; text warms.
 *
 * Size: default is comfortable for nav and section CTAs. Pass `className`
 * to override padding when you need a compact variant (e.g. nav pill).
 */
const Button = ({
  variant  = 'primary',
  href,
  onClick,
  type     = 'button',
  children,
  className = '',
  ariaLabel,
  disabled,
  ...rest
}) => {
  const base = [
    'inline-flex items-center justify-center gap-2.5',
    'px-7 py-3.5',
    'text-sm font-sans font-medium tracking-wide',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
  ].join(' ');

  const variants = {
    primary: [
      'bg-gold text-charcoal-900',
      'hover:-translate-y-px',
      'hover:bg-gold-light',
      'hover:shadow-[0_6px_28px_-8px_rgba(201,164,79,0.45)]',
      'active:translate-y-0',
    ].join(' '),

    ghost: [
      'border border-ivory/25 text-ivory/90 bg-transparent',
      'hover:border-gold/60 hover:text-ivory hover:bg-gold/[0.04]',
      'active:bg-gold/[0.07]',
    ].join(' '),

    subtle: [
      'px-0 py-0 text-ivory/70 underline-offset-4',
      'hover:text-gold hover:underline',
    ].join(' '),
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
