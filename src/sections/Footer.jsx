import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import PatternDivider from '../components/PatternDivider.jsx';
import LogoLockup from '../components/LogoLockup.jsx';

/**
 * Footer — sitemap, socials, legal note, concept disclaimer, build credit.
 *
 * Houses the social row that previously lived in OfficialLinks.
 * Carries a tasteful "Built by Valo" credit at the bottom-right of the
 * legal line, linking to https://valosystems.co.za.
 *
 * TODO: Confirm registered company name and CIPC details before launch.
 * TODO: Replace placeholder contact details with confirmed information.
 * TODO: Replace social hrefs ('#') with confirmed verified profiles.
 */

const SOCIALS = [
  { icon: Instagram, label: 'Instagram',   href: '#' },
  { icon: Facebook,  label: 'Facebook',    href: '#' },
  { icon: Twitter,   label: 'X / Twitter', href: '#' },
  { icon: Youtube,   label: 'YouTube',     href: '#' },
  { icon: Linkedin,  label: 'LinkedIn',    href: '#' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-900 border-t border-ivory/[0.06]">
      <div className="container-editorial py-16 sm:py-20">
        <PatternDivider className="!py-0 mb-14 opacity-50" />

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">

          {/* ── Brand ─────────────────────────────────────────────────── */}
          <div>
            <LogoLockup size="lg" asLink className="mb-6" />
            <p className="text-[13px] text-sand/55 leading-relaxed max-w-[220px]">
              An African storytelling house rooted in family, gratitude and
              cultural legacy.
            </p>

            {/* Social row — moved here from the (now removed) OfficialLinks section */}
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="
                    inline-flex h-9 w-9 items-center justify-center
                    border border-ivory/12 text-ivory/55
                    hover:border-gold/55 hover:text-gold
                    transition-colors duration-300
                  "
                >
                  <s.icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Sitemap ───────────────────────────────────────────────── */}
          <div>
            <p className="eyebrow text-ivory/35 mb-5">Explore</p>
            <ul className="space-y-3 text-[13px]">
              {[
                { label: 'About',     href: '/#about'    },
                { label: 'Services',  href: '/#services' },
                { label: 'Books',     href: '/books',     page: true },
                { label: 'Contact',   href: '/#contact'  },
              ].map((item) =>
                item.page ? (
                  <li key={item.label}>
                    <Link to={item.href} className="text-sand/60 hover:text-gold transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} className="text-sand/60 hover:text-gold transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ── Contact ───────────────────────────────────────────────── */}
          <div>
            <p className="eyebrow text-ivory/35 mb-5">Contact</p>
            <ul className="space-y-3 text-[13px] text-sand/55">
              {/* TODO: replace with confirmed details */}
              <li>hello@thanxma.co.za</li>
              <li>+27 (placeholder)</li>
              <li>South Africa</li>
            </ul>
          </div>

        </div>

        {/* ── Legal + Built by Valo ───────────────────────────────────── */}
        <div className="mt-14 pt-6 border-t border-ivory/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-ivory/30">
          <p>
            &copy; {year} Thanx Ma Productions. All rights reserved.
            {/* TODO: confirm registered name + CIPC details */}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
            <p className="italic text-ivory/25">
              Independent concept, pending official approval.
            </p>

            {/*
              Valo build credit — discreet plaque on the legal line.
              Hovers to gold; opens in a new tab; rel=noopener for safety.
            */}
            <p className="uppercase tracking-[0.16em] text-[10px] text-ivory/25">
              Built by{' '}
              <a
                href="https://valosystems.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/45 hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold/40 pb-px"
              >
                Valo
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
