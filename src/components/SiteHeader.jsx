import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoLockup from './LogoLockup.jsx';
import Button from './Button.jsx';

/**
 * SiteHeader — global navigation, mounted once at the app root.
 *
 * WHY PORTAL:
 *   The mobile overlay used to live inside <header>. Any element on the page
 *   with a CSS transform (framer-motion animations) creates a new stacking
 *   context that can render above the header's z-index — burying the overlay.
 *   createPortal(overlay, document.body) injects it directly into <body>,
 *   outside every page component's DOM subtree and every stacking context
 *   they create. zIndex 9999 on the portal div beats everything.
 *
 * NAV LINKS:
 *   Home-section links are plain <a href="/#section"> — these work from any
 *   route without Router interception and cause a same-document hash scroll
 *   on the home page, or a clean home-then-scroll from sub-pages.
 *   The /books route uses React Router <Link> for SPA navigation.
 */

/**
 * Primary navigation — kept deliberately short. Four links + the
 * Book Musa CTA. The Books route is the only sub-page; everything
 * else is a hash anchor on the home single-page scroll.
 *
 * Removed (folded elsewhere):
 *   Legacy      → folded into /#about as the Ngiyabonga callout
 *   Productions → renamed and consolidated into /#services
 *   Speaking    → consolidated into /#services as a card
 */
const NAV_ITEMS = [
  { label: 'About',    href: '/#about'    },
  { label: 'Services', href: '/#services' },
  { label: 'Books',    href: '/books',     isRoute: true },
  { label: 'Contact',  href: '/#contact'  },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const location   = useLocation();
  const burgerRef  = useRef(null); // for focus restoration on close

  /* ── Scroll detection ───────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Body-scroll lock ───────────────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* ── Close on route change ──────────────────────────────────────────── */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  /* ── Escape to close ────────────────────────────────────────────────── */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Open / close ───────────────────────────────────────────────────── */
  const openMenu = () => setOpen(true);

  const closeMenu = useCallback(() => {
    // Restore scroll synchronously before any navigation fires
    document.body.style.overflow = '';
    setOpen(false);
    // Return focus to the hamburger button
    burgerRef.current?.focus();
  }, []);

  /* ── Portal: mobile overlay ─────────────────────────────────────────── */
  /*
   * Rendered into document.body — completely outside the <header> DOM node
   * and outside every page component's stacking context.
   * z-index 9999 is relative to the root stacking context and beats
   * every framer-motion transform, every page section, every image layer.
   */
  const overlay = createPortal(
    <div
      id="site-mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
      className={`
        lg:hidden fixed inset-0
        flex flex-col
        bg-[#0A0806]
        transition-opacity duration-300 ease-in-out
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{ zIndex: 9999 }}
    >
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 pt-5 pb-4 shrink-0">
        <LogoLockup size="md" onClick={closeMenu} />
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close navigation"
          className="p-2 -mr-2 text-ivory/50 hover:text-gold transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Nav links ───────────────────────────────────────────────── */}
      <nav
        className="flex flex-col px-6 pt-6 flex-1 overflow-y-auto"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map((item, i) => {
          const isActive = item.isRoute
            ? location.pathname === item.href
            : location.hash === item.href.replace('/', '');

          const linkStyle = {
            opacity:   open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(6px)',
            transition: `opacity 0.38s ease ${0.06 + i * 0.045}s,
                         transform 0.38s ease ${0.06 + i * 0.045}s`,
          };

          const linkClass = `
            block font-serif py-4 border-b border-ivory/[0.08] leading-none
            transition-colors duration-200
            text-[clamp(1.8rem,6vw,2.4rem)]
            ${isActive ? 'text-gold' : 'text-ivory/85 hover:text-gold'}
          `;

          return item.isRoute ? (
            <Link
              key={item.label}
              to={item.href}
              onClick={closeMenu}
              className={linkClass}
              style={linkStyle}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={linkClass}
              style={linkStyle}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <div
        className="px-6 pb-10 pt-8 shrink-0 border-t border-ivory/[0.07]"
        style={{
          opacity:   open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(6px)',
          transition: `opacity 0.4s ease ${0.06 + NAV_ITEMS.length * 0.045}s,
                       transform 0.4s ease ${0.06 + NAV_ITEMS.length * 0.045}s`,
        }}
      >
        <a
          href="/#contact"
          onClick={closeMenu}
          className="
            block w-full text-center
            bg-gold text-charcoal-900
            py-4 text-sm font-sans font-medium tracking-wide
            hover:bg-gold-light transition-colors duration-300
          "
        >
          Book Musa
        </a>
      </div>
    </div>,
    document.body
  );

  /* ── Header bar (always visible) ────────────────────────────────────── */
  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-[100]
          transition-all duration-500 ease-in-out
          ${scrolled
            ? 'bg-charcoal-900/92 backdrop-blur-md border-b border-ivory/[0.06] py-3.5'
            : 'py-5'}
        `}
      >
        {/* Dark gradient behind header — improves nav legibility on hero
            image backgrounds. Fades out once the scrolled-state solid bg
            takes over. */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
          style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.85) 0%, rgba(18,15,11,0.35) 70%, transparent 100%)' }}
          aria-hidden="true"
        />

        <div className="container-editorial relative flex items-center justify-between">

          {/* Logo */}
          <LogoLockup size="md" />

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-10"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = item.isRoute && location.pathname === item.href;
              return item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </a>
              );
            })}

            <Button
              href="/#contact"
              variant="primary"
              className="ml-3 px-5 py-2.5 text-xs tracking-wide"
            >
              Book Musa
            </Button>
          </nav>

          {/* Mobile hamburger — only opens, never toggles */}
          <button
            ref={burgerRef}
            type="button"
            onClick={openMenu}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            className="lg:hidden p-2 -mr-2 text-ivory/70 hover:text-gold transition-colors"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Portal-rendered overlay — lives in <body>, not inside <header> */}
      {overlay}
    </>
  );
};

export default SiteHeader;
