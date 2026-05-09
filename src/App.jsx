import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader.jsx';
import Footer from './sections/Footer.jsx';

// Home page sections
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Heritage from './sections/Heritage.jsx';
import Services from './sections/Services.jsx';
import Contact from './sections/Contact.jsx';

// Dedicated pages
import BooksPage from './pages/BooksPage.jsx';

/**
 * Thanx Ma Productions — app root.
 *
 * SiteHeader is mounted here, outside <Routes>, so it renders on every
 * route. The mobile overlay inside SiteHeader uses createPortal(…, body)
 * so it cannot be buried by any page stacking context.
 *
 * Routes:
 *   /        — Home (five-section single-page scroll)
 *   /books   — Author & Books
 *
 * Five-section home, customer-journey ordered:
 *   1. Hero       — first impression, single CTA
 *   2. About      — Musa + brand soul + Ngiyabonga callout
 *   3. Heritage   — full-bleed cultural editorial banner
 *   4. Services   — concrete offerings (Film & TV, Ceremonies, Speaking, Books)
 *   5. Contact    — conversion point
 */
const HomePage = () => (
  <>
    <main>
      <Hero />
      <About />
      <Heritage />
      <Services />
      <Contact />
    </main>
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <SiteHeader />
    <Routes>
      <Route path="/"      element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
