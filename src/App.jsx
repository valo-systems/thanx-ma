import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader.jsx';
import Footer from './sections/Footer.jsx';

// Home page sections
import Hero from './sections/Hero.jsx';
import BrandIntro from './sections/BrandIntro.jsx';
import About from './sections/About.jsx';
import ThanxMaMeaning from './sections/ThanxMaMeaning.jsx';
import Heritage from './sections/Heritage.jsx';
import Productions from './sections/Productions.jsx';
import Speaking from './sections/Speaking.jsx';
import OfficialLinks from './sections/OfficialLinks.jsx';
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
 *   /        — Home (single-page scroll)
 *   /books   — Author & Books
 */
const HomePage = () => (
  <>
    <main>
      <Hero />
      <BrandIntro />
      <About />
      <ThanxMaMeaning />
      <Heritage />
      <Productions />
      <Speaking />
      <OfficialLinks />
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
