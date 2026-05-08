import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button.jsx';
import LogoLockup from './LogoLockup.jsx';

/**
 * Navigation
 *
 * Three bugs fixed in this version:
 *
 * 1. SCROLL-LOCK BUG
 *    When the mobile menu is open, body overflow is hidden. Clicking a hash
 *    anchor fires the browser's scroll-to-element before React re-renders
 *    and restores overflow — so the page could not scroll. Fixed by calling
 *    closeMenu(), which restores overflow immediately (synchronously) before
 *    setOpen(false) queues the re-render.
 *
 * 2. LOGO DOESN'T CLOSE MENU WHEN ALREADY ON "/"
 *    Link to="/" only triggers the location.pathname effect when the route
 *    changes. If the user is already on /, clicking the logo did nothing to
 *    the menu. Fixed by passing closeMenu as the onClick of LogoLockup,
 *    which always closes the menu regardless of current route.
 *
 * 3. "PRODUCTIONS" VISIBLE ON MOBILE NAV BAR
 *    Now hidden below sm via LogoLockup — mobile top-left shows "Thanx Ma"
 *    only. "PRODUCTIONS" still appears from sm (640 px) upward.
 */

const HOME_NAV = [
  { label: 'About',        href: '#about' },
  { label: 'Legacy',       href: '#legacy' },
  { label: 'Productions',  href: '#productions' },
  { label: 'Speaking',     href: '#speaking' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const location = useLocation();
  const isHome   = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep body scroll in sync with menu state
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close when the route changes (e.g. navigating to /books)
  useEffect(() => { setOpen(false); }, [location.pathname]);

  /**
   * closeMenu — releases the body-scroll lock immediately (synchronously),
   * then closes the menu. Must be called before any anchor navigation so
   * the browser can scroll to the target element.
   */
  const closeMenu = () => {
    document.body.style.overflow = '';
    setOpen(false);
  };

  // On sub-routes, prefix hash anchors with "/" so they navigate home first
  const anchorHref = (anchor) => (isHome ? anchor : `/${anchor}`);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500 ease-in-out
        ${scrolled
          ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-ivory/[0.06] py-3.5'
          : 'bg-transparent py-5'}
      `}
    >
      <div className="container-editorial flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────────────────── */}
        {/* onClick = closeMenu covers the "already on /" case */}
        <LogoLockup size="md" onClick={closeMenu} />

        {/* ── Desktop nav ──────────────────────────────────────────────── */}
        <nav
          className="hidden lg:flex items-center gap-8 xl:gap-10"
          aria-label="Primary navigation"
        >
          {HOME_NAV.map((item) => (
            <a
              key={item.label}
              href={anchorHref(item.href)}
              className="text-[13px] text-ivory/60 hover:text-ivory transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}

          <Link
            to="/books"
            className={`text-[13px] tracking-wide transition-colors ${
              location.pathname === '/books'
                ? 'text-gold'
                : 'text-ivory/60 hover:text-ivory'
            }`}
          >
            Books
          </Link>

          <a
            href={anchorHref('#contact')}
            className="text-[13px] text-ivory/60 hover:text-ivory transition-colors tracking-wide"
          >
            Contact
          </a>

          <Button
            href={anchorHref('#contact')}
            variant="primary"
            className="ml-3 px-5 py-2.5 text-xs tracking-wide"
          >
            Book Musa
          </Button>
        </nav>

        {/* ── Mobile hamburger ─────────────────────────────────────────── */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-ivory/70 hover:text-gold transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open
            ? <X size={20} strokeWidth={1.5} />
            : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* ── Mobile menu overlay ──────────────────────────────────────────── */}
      {/*
        z-[60] sits above z-50 (header) AND above any stacking contexts
        created by framer-motion transform animations on page content.
        Without an explicit z-index here, transformed elements on sub-pages
        (e.g. BooksPage motion.section) can render above the overlay.
      */}
      <div
        id="mobile-nav"
        className={`
          lg:hidden fixed inset-x-0 top-0 bottom-0 z-[60]
          bg-charcoal-900 flex flex-col
          transition-all duration-500 ease-in-out
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!open}
      >
        {/* Header row inside the overlay */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          {/* Logo — closeMenu handles both "already on /" and cross-route cases */}
          <LogoLockup size="md" onClick={closeMenu} />

          <button
            type="button"
            onClick={closeMenu}
            className="p-2 -mr-2 text-ivory/60 hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-col px-6 pt-8 gap-0 flex-1 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {HOME_NAV.map((item, i) => (
            <a
              key={item.label}
              href={anchorHref(item.href)}
              onClick={closeMenu}
              className="
                font-serif text-[2.2rem] py-4 border-b border-ivory/[0.07]
                text-ivory/90 hover:text-gold transition-colors leading-none
              "
              style={{ transitionDelay: open ? `${i * 35}ms` : '0ms' }}
            >
              {item.label}
            </a>
          ))}

          <Link
            to="/books"
            onClick={closeMenu}
            className={`
              font-serif text-[2.2rem] py-4 border-b border-ivory/[0.07]
              leading-none transition-colors
              ${location.pathname === '/books' ? 'text-gold' : 'text-ivory/90 hover:text-gold'}
            `}
            style={{ transitionDelay: open ? `${HOME_NAV.length * 35}ms` : '0ms' }}
          >
            Books
          </Link>

          <a
            href={anchorHref('#contact')}
            onClick={closeMenu}
            className="font-serif text-[2.2rem] py-4 border-b border-ivory/[0.07] text-ivory/90 hover:text-gold transition-colors leading-none"
            style={{ transitionDelay: open ? `${(HOME_NAV.length + 1) * 35}ms` : '0ms' }}
          >
            Contact
          </a>
        </nav>

        {/* Bottom CTA */}
        <div className="px-6 py-10 border-t border-ivory/[0.07]">
          <Button
            href={anchorHref('#contact')}
            variant="primary"
            onClick={closeMenu}
            className="w-full justify-center py-4 text-sm tracking-wide"
          >
            Book Musa
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
