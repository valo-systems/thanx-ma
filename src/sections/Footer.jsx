import React from 'react';
import { Link } from 'react-router-dom';
import PatternDivider from '../components/PatternDivider.jsx';
import LogoLockup from '../components/LogoLockup.jsx';

/**
 * Footer — sitemap, legal note, concept disclaimer.
 *
 * TODO: Confirm registered company name and CIPC details before launch.
 * TODO: Replace placeholder contact details with confirmed information.
 */
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
            <p className="text-[13px] text-sand/55 leading-relaxed max-w-[200px]">
              An African storytelling house rooted in family, gratitude and
              cultural legacy.
            </p>
          </div>

          {/* ── Sitemap ───────────────────────────────────────────────── */}
          <div>
            <p className="eyebrow text-ivory/35 mb-5">Explore</p>
            <ul className="space-y-3 text-[13px]">
              {[
                { label: 'About',         href: '/#about' },
                { label: 'Legacy',        href: '/#legacy' },
                { label: 'Productions',   href: '/#productions' },
                { label: 'Books',         href: '/books',         page: true },
                { label: 'Speaking',      href: '/#speaking' },
                { label: 'Contact',       href: '/#contact' },
              ].map((item) =>
                item.page ? (
                  <li key={item.label}>
                    <Link to={item.href} className="text-sand/60 hover:text-gold transition-colors duration-250">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} className="text-sand/60 hover:text-gold transition-colors duration-250">
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

        {/* ── Legal ───────────────────────────────────────────────────── */}
        <div className="mt-14 pt-6 border-t border-ivory/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-ivory/30">
          <p>
            &copy; {year} Thanx Ma Productions. All rights reserved.
            {/* TODO: confirm registered name + CIPC details */}
          </p>
          <p className="italic text-ivory/25">
            Independent concept — pending official approval.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
