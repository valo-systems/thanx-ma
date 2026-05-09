import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Film, Sparkles, Mic, BookOpen, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

/**
 * Services — the consolidated "what can they do for me?" section.
 *
 * Replaces the previous Productions + Speaking sections with a single
 * grid of four concrete, bookable offerings. Each card is action-oriented:
 * customers reading this should know immediately what they can hire for.
 *
 * Cards:
 *   1. Film & Television         — production house work
 *   2. Ceremonies & Cultural Events — umembeso, weddings, family milestones
 *   3. Speaking & Appearances    — Musa for keynotes / panels
 *   4. Books                     — author work, links to /books
 *
 * The Ceremonies card is the new offering surfaced from public statements
 * about Thanx Ma's ceremony filming work.
 *
 * TODO (legal): If/when broadcaster + production-house clearances are
 * confirmed, replace the Film & Television copy with named titles and
 * approved key art.
 */

const SERVICES = [
  {
    icon: Film,
    eyebrow: 'Production House',
    title: 'Film & Television',
    body:
      'Long-form unscripted, cultural and legacy programming made for South African audiences. Concept, develop, produce, deliver.',
    tags: ['Reality TV', 'Documentary', 'Cultural programming', 'Long-form'],
    cta: { label: 'Enquire', href: '#contact' },
  },
  {
    icon: Sparkles,
    eyebrow: 'Cultural Events',
    title: 'Ceremonies & Family Milestones',
    body:
      'A discreet film service for cultural ceremonies, family milestones and the moments that matter — captured with the same respect that shapes our television work.',
    tags: ['Umembeso', 'Weddings', 'Naming ceremonies', 'Family events'],
    cta: { label: 'Enquire', href: '#contact' },
  },
  {
    icon: Mic,
    eyebrow: 'Speaking',
    title: 'Keynotes & Conversations',
    body:
      'Musa speaks on legacy, family, culture, leadership and African enterprise — at boardrooms, conferences, broadcast and cultural events.',
    tags: ['Legacy', 'Leadership', 'African business', 'Media', 'Public life'],
    cta: { label: 'Book Musa', href: '#contact' },
  },
  {
    icon: BookOpen,
    eyebrow: 'Author',
    title: 'Books & Writing',
    body:
      'A growing body of writing on family, business, culture and the work of building something that lasts. Available in print and digital.',
    tags: ['Business', 'Family', 'Legacy', 'Polygamy & culture'],
    cta: { label: 'View books', href: '/books', isRoute: true },
  },
];

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, eyebrow, title, body, tags, cta } = service;

  const ctaLink = cta.isRoute ? (
    <Link
      to={cta.href}
      className="inline-flex items-center gap-2 text-[12px] font-sans font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-light transition-colors duration-300"
    >
      {cta.label}
      <ArrowUpRight size={14} strokeWidth={1.6} />
    </Link>
  ) : (
    <a
      href={cta.href}
      className="inline-flex items-center gap-2 text-[12px] font-sans font-semibold uppercase tracking-[0.18em] text-gold hover:text-gold-light transition-colors duration-300"
    >
      {cta.label}
      <ArrowUpRight size={14} strokeWidth={1.6} />
    </a>
  );

  return (
    <motion.article
      className="group relative flex flex-col p-8 sm:p-10 bg-charcoal-100/60 border border-ivory/[0.08] hover:border-gold/35 transition-colors duration-500"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
    >
      {/* Top hairline that extends on hover */}
      <span className="absolute top-0 left-0 h-px w-0 bg-gold transition-[width] duration-700 group-hover:w-full" />

      {/* Icon + eyebrow */}
      <div className="flex items-center gap-4 mb-6">
        <div className="inline-flex h-10 w-10 items-center justify-center border border-gold/35 text-gold shrink-0">
          <Icon size={18} strokeWidth={1.4} />
        </div>
        <span className="eyebrow !text-[10px] text-gold/75">{eyebrow}</span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-[1.6rem] sm:text-[1.85rem] leading-tight tracking-tight text-ivory mb-4">
        {title}
      </h3>

      {/* Body */}
      <p className="body-copy !text-sm mb-6 flex-1">{body}</p>

      {/* Tag row — keyword chips */}
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-sand/55"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-auto">{ctaLink}</div>
    </motion.article>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-charcoal">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              How we can{' '}
              <span className="italic text-gold-light">work together</span>.
            </>
          }
          lede="Four ways to engage Thanx Ma — for film, ceremony, the stage and the page."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
