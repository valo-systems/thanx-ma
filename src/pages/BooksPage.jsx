import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Mic,
  Send,
  CheckCircle2,
  Users,
  Landmark,
  Briefcase,
  Heart,
} from 'lucide-react';

import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import PatternDivider from '../components/PatternDivider.jsx';
import BookCard from '../components/BookCard.jsx';
import BookSpotlight from '../components/BookSpotlight.jsx';
import AuthorThemeCard from '../components/AuthorThemeCard.jsx';

// ─── Page metadata ───────────────────────────────────────────────────────────
const PAGE_TITLE = 'Books by Musa C. Mseleku | Thanx Ma Productions';
const PAGE_DESCRIPTION =
  'Explore books by Musa C. Mseleku on family, culture, business, polygamy and legacy.';

// ─── Book data ────────────────────────────────────────────────────────────────
/**
 * VERIFICATION STATUS KEY
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * published  — Confirmed as a publicly listed title on Goodreads, Amazon,
 *              Google Books or Everand. Safe to display. Cover image,
 *              ISBN, publisher and purchase links still need to be added
 *              (see TODO comments on each book entry).
 *
 * to-verify  — Title appears in public author listings but full publication
 *              details have not been confirmed. Do NOT feature these titles
 *              publicly until verified by Musa C. Mseleku or his team.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
const BOOKS = [
  {
    id: 'life-and-polygamy',
    title: 'Life and Polygamy',
    category: 'Family, Culture & Polygamy',
    description:
      'A personal and cultural reflection on polygamy, family structure, responsibility and the lived realities of a practice often discussed from the outside.',
    status: 'published',
    coverVariant: 'umber',
    // TODO: Add approved cover image: /public/assets/books/life-and-polygamy-cover.jpg
    // TODO: Confirm ISBN-10 / ISBN-13
    // TODO: Confirm publisher name and publication year
    // TODO: Add verified purchase links (publicly listed on Goodreads and Amazon)
  },
  {
    id: 'life-and-polygamy-2',
    title: 'Life and Polygamy Part 2',
    category: 'Family, Leadership & Continuation',
    description:
      'A continuation of Musa C. Mseleku\'s reflections on family, leadership, marriage and the responsibilities that come with building a polygamous household.',
    status: 'published',
    coverVariant: 'charcoal',
    // TODO: Add approved cover image: /public/assets/books/life-and-polygamy-2-cover.jpg
    // TODO: Confirm ISBN-10 / ISBN-13
    // TODO: Confirm publisher name and publication year
    // TODO: Add verified purchase links (publicly listed on Goodreads and Amazon)
  },
  {
    id: 'how-i-made-my-first-million',
    title: 'How I Made My First Million — And How You Can Also Do It',
    category: 'Business & Personal Development',
    description:
      'A practical business and mindset book sharing lessons on strategy, discipline, starting small, overcoming difficulty and building confidence in business.',
    status: 'published',
    coverVariant: 'gold',
    // TODO: Add approved cover image: /public/assets/books/how-i-made-my-first-million-cover.jpg
    // TODO: Confirm ISBN-10 / ISBN-13
    // TODO: Confirm publisher name and publication year
    // TODO: Add verified purchase links (publicly listed on Google Books, Amazon and Everand)
  },
  {
    id: 'imizamo-ka-cebo',
    title: 'Imizamo ka Cebo',
    category: 'IsiZulu Writing & Early Reflections',
    description:
      'An early isiZulu work associated with Musa\'s reflections from his younger years. Official publication details should be confirmed before launch.',
    status: 'to-verify',
    coverVariant: 'clay',
    // ⚠ TODO: Verify title spelling and capitalisation (also listed as "Imzamo Ka Cebo")
    // ⚠ TODO: Confirm ISBN, publisher, publication year with Musa C. Mseleku or his team
    // ⚠ TODO: Obtain approved description copy
    // ⚠ TODO: Obtain approved cover image or confirm it is rights-cleared
  },
  {
    id: 'impilo-nesithembu',
    title: 'Impilo Nesithembu',
    category: 'Family & Cultural Reflection',
    description:
      'A title listed publicly under Musa C. Mseleku\'s author profile. Details should be confirmed with the author or his team before publication.',
    status: 'to-verify',
    coverVariant: 'deep',
    // ⚠ TODO: Confirm title spelling and capitalisation
    // ⚠ TODO: Confirm ISBN, publisher, publication year with Musa C. Mseleku or his team
    // ⚠ TODO: Obtain approved description copy
    // ⚠ TODO: Obtain approved cover image or confirm it is rights-cleared
  },
];

// ─── Author themes ────────────────────────────────────────────────────────────
const THEMES = [
  {
    icon: <Heart size={20} strokeWidth={1.4} />,
    title: 'Family & Responsibility',
    body: 'The weight and meaning of building a family intentionally — the obligations, the love and the discipline that make it last.',
  },
  {
    icon: <Landmark size={20} strokeWidth={1.4} />,
    title: 'Culture & Identity',
    body: 'Zulu heritage, African identity and the question of how a man carries his culture into the modern world with pride and without apology.',
  },
  {
    icon: <Briefcase size={20} strokeWidth={1.4} />,
    title: 'Business & Discipline',
    body: 'The unglamorous, honest work of starting small, surviving failure and building something that endures — in Africa, and for Africa.',
  },
  {
    icon: <Users size={20} strokeWidth={1.4} />,
    title: 'Legacy & Gratitude',
    body: 'What we build is not only for ourselves. Each book returns to the question of what we leave behind, and who we leave it for.',
  },
];

// ─── Speaking connection topics ───────────────────────────────────────────────
const SPEAKING_TOPICS = [
  'Building legacy',
  'African entrepreneurship',
  'Family leadership',
  'Culture in modern society',
  'Lessons from public life',
  'Starting small and scaling with discipline',
];

// ─── Contact form (Books page variant — includes Organisation field) ──────────
const BOOK_ENQUIRY_TYPES = [
  'Author talk booking',
  'Business keynote',
  'Cultural engagement',
  'Media / interview',
  'Book stockist enquiry',
  'Other',
];

const BookContactForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    enquiry: 'Author talk booking',
    message: '',
  });
  const [status, setStatus] = React.useState('idle');

  const update = (field) => (e) =>
    setForm((s) => ({ ...s, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');
    try {
      // TODO: Replace with real submission endpoint (e.g. Formspree, custom API).
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', organisation: '', enquiry: 'Author talk booking', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-charcoal/60 border border-gold/30 p-10 sm:p-12 flex flex-col items-start gap-5">
        <CheckCircle2 size={32} className="text-gold" strokeWidth={1.4} />
        <h3 className="font-serif text-3xl text-ivory">Ngiyabonga.</h3>
        <p className="body-lg max-w-md">
          Your enquiry has been received. The Thanx Ma Productions team will be in touch shortly.
        </p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:gap-7" noValidate>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
        <BookField label="Full name" required value={form.name} onChange={update('name')} autoComplete="name" />
        <BookField label="Email" type="email" required value={form.email} onChange={update('email')} autoComplete="email" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
        <BookField label="Phone" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
        <BookField label="Organisation" value={form.organisation} onChange={update('organisation')} autoComplete="organization" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="eyebrow text-ivory/60" htmlFor="bk-enquiry">Enquiry type</label>
        <select
          id="bk-enquiry"
          value={form.enquiry}
          onChange={update('enquiry')}
          className="bg-transparent border-b border-ivory/25 py-3 text-ivory focus:border-gold focus:outline-none transition-colors appearance-none"
        >
          {BOOK_ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t} className="bg-charcoal-900 text-ivory">{t}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="eyebrow text-ivory/60" htmlFor="bk-message">Message *</label>
        <textarea
          id="bk-message"
          rows={5}
          required
          value={form.message}
          onChange={update('message')}
          className="bg-transparent border-b border-ivory/25 py-3 text-ivory focus:border-gold focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your event or enquiry…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-clay-light">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <div className="flex items-center gap-4 pt-2">
        <Button
          type="submit"
          variant="primary"
          className="disabled:opacity-50 disabled:cursor-not-allowed"
          {...(status === 'submitting' ? { disabled: true } : {})}
        >
          {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
          <Send size={16} strokeWidth={1.6} />
        </Button>
        <p className="text-xs text-ivory/45">Your details are only used to respond to your enquiry.</p>
      </div>
    </form>
  );
};

const BookField = ({ label, required, ...rest }) => {
  const id = `bk-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow text-ivory/60" htmlFor={id}>
        {label} {required && '*'}
      </label>
      <input
        id={id}
        required={required}
        className="bg-transparent border-b border-ivory/25 py-3 text-ivory focus:border-gold focus:outline-none transition-colors"
        {...rest}
      />
    </div>
  );
};

// ─── Page component ───────────────────────────────────────────────────────────
const BooksPage = () => {
  // SEO — update document title and meta description for this route
  useEffect(() => {
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = PAGE_DESCRIPTION;
    return () => {
      document.title = 'Thanx Ma Productions';
      meta.content = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-900">

      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        id="books-hero"
        className="relative pt-32 sm:pt-40 pb-28 sm:pb-36 overflow-hidden bg-charcoal-900"
      >
        {/* Pattern background */}
        <div className="absolute inset-0 -z-10 bg-pattern-subtle opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-900/40 via-charcoal-900/80 to-charcoal-900" />
        {/* Warm radial glow */}
        <div className="absolute inset-0 -z-10 bg-radial-warm opacity-60" />

        <div className="container-editorial">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-ivory/50 hover:text-gold transition-colors uppercase tracking-editorial"
            >
              <ArrowLeft size={14} strokeWidth={1.6} />
              Thanx Ma Productions
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-7"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Author</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="display-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25 }}
            >
              The Author Behind
              <br />
              the{' '}
              <span className="italic text-gold-light">Legacy</span>.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="body-lg mt-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Musa C. Mseleku's writing extends his public work beyond television, offering
              reflections on family, culture, business, polygamy and the discipline required
              to build a meaningful legacy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <Button href="#books-grid" variant="primary">
                <BookOpen size={16} strokeWidth={1.6} />
                Explore Books
              </Button>
              <Button href="#books-contact" variant="ghost">
                <Mic size={16} strokeWidth={1.6} />
                Request Speaking Engagement
              </Button>
              <Button href="#books-contact" variant="ghost">
                Book Enquiry
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. BOOKS GRID ───────────────────────────────────────────────── */}
      <section
        id="books-grid"
        className="relative py-28 sm:py-36 bg-charcoal-900"
      >
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Published Works"
            title={
              <>
                Books by Musa C.{' '}
                <span className="italic text-gold-light">Mseleku</span>.
              </>
            }
            lede="Each title is an extension of the same questions Musa explores in public life — family, culture, identity and what it takes to build something that lasts."
          />

          {/* Internal note about verification */}
          {/* ── DEVELOPER NOTE ──────────────────────────────────────────────────────
               Books marked "To Verify" are rendered in a muted state below.
               Do NOT promote or link to these titles externally until official
               publication details are confirmed by Thanx Ma Productions.
               ────────────────────────────────────────────────────────────────────── */}

          <div className="mt-16 sm:mt-20 flex flex-col gap-6">
            {BOOKS.map((book, i) => (
              <BookCard key={book.id} book={book} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. BOOK SPOTLIGHT ───────────────────────────────────────────── */}
      <BookSpotlight />

      {/* ─── 4. AUTHOR THEMES ────────────────────────────────────────────── */}
      <section
        id="author-themes"
        className="relative py-28 sm:py-36 bg-charcoal-900"
      >
        <div className="container-editorial">
          <SectionHeader
            eyebrow="Recurring Themes"
            title={
              <>
                What Musa writes{' '}
                <span className="italic text-gold-light">about</span>.
              </>
            }
            lede="Across all his written work, four themes return — not as subject matter alone, but as lived experience given permanent form."
          />

          <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THEMES.map((theme, i) => (
              <AuthorThemeCard
                key={theme.title}
                icon={theme.icon}
                title={theme.title}
                body={theme.body}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. SPEAKING CONNECTION ──────────────────────────────────────── */}
      <section
        id="books-speaking"
        className="relative py-28 sm:py-36 bg-umber-dark overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-pattern-subtle opacity-15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-900/60 via-umber-dark to-charcoal-900/40" />

        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Heading */}
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Books & Speaking"
                title={
                  <>
                    From the page to the{' '}
                    <span className="italic text-gold-light">stage</span>.
                  </>
                }
                lede="Musa's books provide the foundation for his speaking engagements. Each topic on the page becomes a conversation he can bring to your audience."
              />
              <div className="mt-10">
                <Button href="#books-contact" variant="primary">
                  Enquire about a booking
                </Button>
              </div>
            </div>

            {/* Topics */}
            <div className="lg:col-span-7">
              <p className="eyebrow text-ivory/50 mb-8">Topics drawn from the books</p>
              <ul className="space-y-3">
                {SPEAKING_TOPICS.map((topic, i) => (
                  <motion.li
                    key={topic}
                    className="flex items-baseline gap-4 group"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                  >
                    <span className="font-mono text-xs text-gold/60 w-7 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl text-ivory group-hover:text-gold transition-colors duration-300">
                      {topic}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 6. CONTACT CTA ──────────────────────────────────────────────── */}
      <section
        id="books-contact"
        className="relative py-28 sm:py-36 bg-charcoal-900"
      >
        <div className="absolute inset-0 -z-10 bg-pattern-subtle opacity-20" />

        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">

            {/* Left — headline */}
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Bookings & Enquiries"
                title={
                  <>
                    Book Musa for{' '}
                    <span className="italic text-gold-light">author talks</span>,
                    business conversations and cultural engagements.
                  </>
                }
              />

              <motion.div
                className="mt-10 space-y-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-sm text-ivory/60 leading-relaxed">
                  Whether you are planning a leadership event, a cultural engagement, a
                  business conference or a media appearance, Musa C. Mseleku brings depth,
                  personal story and cultural authority to every conversation.
                </p>
                <p className="text-sm text-ivory/50 leading-relaxed">
                  All enquiries are handled confidentially and responded to by the
                  Thanx Ma Productions team.
                </p>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <BookContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      <PatternDivider />
    </div>
  );
};

export default BooksPage;
