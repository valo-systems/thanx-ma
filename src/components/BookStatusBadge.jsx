import React from 'react';

/**
 * BookStatusBadge — communicates the publication / verification status of a book.
 *
 * Statuses:
 *   published   — confirmed public title; renders in gold
 *   to-verify   — title needs official confirmation; renders in muted amber
 *                 with a visible warning for internal review
 */
const STATUS_CONFIG = {
  published: {
    label: 'Published',
    classes: 'border-gold/50 text-gold bg-gold/8',
    dot: 'bg-gold',
  },
  'to-verify': {
    // ⚠ INTERNAL NOTE: This status means publication details have NOT been
    // officially confirmed. Do not display this book publicly until an
    // authorised representative of Thanx Ma Productions has verified:
    //   - Title spelling and capitalisation
    //   - Publisher and publication year
    //   - ISBN (if available)
    //   - Approved description copy
    label: 'To Verify',
    classes: 'border-ivory/25 text-ivory/50 bg-ivory/5',
    dot: 'bg-ivory/40',
  },
};

const BookStatusBadge = ({ status = 'published' }) => {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.published;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-sans font-medium uppercase tracking-editorial border ${cfg.classes}`}
    >
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
};

export default BookStatusBadge;
