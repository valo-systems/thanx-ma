import React from 'react';
import { motion } from 'framer-motion';
import BookCoverPlaceholder from './BookCoverPlaceholder.jsx';
import BookStatusBadge from './BookStatusBadge.jsx';

/**
 * BookCard — premium collectible-feel card for a single book.
 *
 * Props:
 *   book {
 *     id          string   — unique slug
 *     title       string   — book title
 *     category    string   — eyebrow category label
 *     description string   — short editorial description
 *     status      'published' | 'to-verify'
 *     coverVariant 'umber' | 'charcoal' | 'gold' | 'clay' | 'deep'
 *     // TODO fields (not displayed to visitors; for internal use):
 *     // isbn       string — ISBN-10 or ISBN-13 (confirm before launch)
 *     // publisher  string — publisher name (confirm before launch)
 *     // year       number — publication year (confirm before launch)
 *     // purchaseLinks [{ label, url }] — confirmed retail links (add before launch)
 *     // coverImage string — path to approved cover image in /public/assets/books/
 *   }
 *   index       number   — used for stagger animation delay
 */
const BookCard = ({ book, index = 0 }) => {
  return (
    <motion.article
      className="group relative flex flex-col sm:flex-row gap-6 lg:gap-8 p-6 sm:p-8 bg-charcoal/60 border border-ivory/8 hover:border-gold/30 transition-colors duration-500"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
    >
      {/* Gold top-edge accent on hover */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Book cover */}
      <div className="shrink-0 w-28 sm:w-32 self-start">
        {/*
          TODO: Replace BookCoverPlaceholder with a real <img> once an
          approved cover file is available.

          Example:
            <img
              src="/assets/books/{book.id}-cover.jpg"
              alt={`Cover of ${book.title} by Musa C. Mseleku`}
              className="w-full"
            />

          Ensure the image is rights-cleared and approved by Thanx Ma
          Productions before publishing publicly.
        */}
        <div className="relative w-full aspect-[2/3] overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)]">
          <BookCoverPlaceholder
            title={book.title}
            variant={book.coverVariant ?? 'umber'}
          />
          {/* Frame accent */}
          <span className="pointer-events-none absolute inset-0 border border-gold/15" />
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        {/* Category + status */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow text-gold/80">{book.category}</span>
          <BookStatusBadge status={book.status} />
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-ivory group-hover:text-gold-light transition-colors duration-300">
          {book.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-ivory/65 leading-relaxed">{book.description}</p>

        {/*
          TODO: Purchase / find links.
          Once official retail/library links have been verified and
          confirmed by Thanx Ma Productions, add them here:

          <div className="flex flex-wrap gap-3 mt-2">
            {book.purchaseLinks?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold/70 hover:text-gold underline-offset-4 hover:underline transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        */}

        {/*
          TODO: ISBN / publisher line.
          When confirmed, add:

          {book.isbn && (
            <p className="text-xs text-ivory/35 font-mono">
              ISBN {book.isbn}{book.publisher ? ` · ${book.publisher}` : ''}{book.year ? ` · ${book.year}` : ''}
            </p>
          )}
        */}

        {/* Internal verification note — only rendered for 'to-verify' titles */}
        {book.status === 'to-verify' && (
          <p className="text-[11px] text-ivory/30 italic border-l-2 border-ivory/15 pl-3 mt-1">
            Publication details require official confirmation before this title is featured publicly.
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default BookCard;
