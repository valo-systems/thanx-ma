/**
 * Image manifest — single source of truth for all imagery on the site.
 *
 * Status of each image:
 *   ✓ supplied     — provided by the project owner, in use.
 *   ⚠ placeholder  — Unsplash (Unsplash License, free for use). Replace
 *                    with approved photography before public launch.
 *
 * Naming convention for files added to /public/assets/<folder>/<file>:
 *   - portraits/      individual photos of Musa
 *   - heritage/       cultural / family / cinematic atmosphere
 *   - (atmospheric)   royalty-free landscape / texture stock
 *
 * Legal note: even where a file is "supplied," confirm written permission
 * to use it publicly before launch. For images that include people other
 * than Musa (e.g. the cultural grassland photograph), confirm consent
 * with each adult subject as well.
 */

const ASSETS = '/assets';

export const IMAGES = {
  // === Hero ================================================================
  // Cinematic golden-hour landscape (Unsplash placeholder).
  // The Hero text overlay relies on a clean, subject-light background, so
  // we keep this as a landscape rather than using a portrait-orientation
  // photo of Musa here.
  // ⚠ placeholder
  hero:
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80',

  // === About ===============================================================
  // Standing portrait, navy collarless suit, hand-in-pocket. Vertical
  // composition — works perfectly inside the 4:5 framed slot.
  // ✓ supplied
  about: `${ASSETS}/portraits/musa-portrait-standing.png`,
  aboutFallback:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',

  // === Thanx Ma — tribute section ==========================================
  // Soft, dignified atmosphere only — this is the soul-of-the-brand
  // section and intentionally avoids any portrait so the typography and
  // tribute can carry the moment.
  // ⚠ placeholder
  thanxma:
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',

  // === Heritage editorial banner ===========================================
  // Wide cinematic group photograph — Musa centred in white traditional
  // jacket with a leopard-skin shoulder mantle and isagila / staff,
  // flanked by four women in striking regalia, on KZN-style grassland.
  // Used as a full-bleed editorial banner with no text overlay so the
  // photograph carries the section.
  // ✓ supplied — confirm consent of every adult subject before public launch.
  heritage: `${ASSETS}/heritage/musa-cultural-grassland.webp`,

  // === Productions =========================================================
  // Atmospheric cinema-light texture (no portrait — the cards do the work).
  // ⚠ placeholder
  productions:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80',

  // === Speaking ============================================================
  // Seated portrait on a carved wooden chair — strong "elder statesman"
  // composition for the Speaking & Bookings section.
  // ✓ supplied
  speaking: `${ASSETS}/portraits/musa-portrait-seated.png`,
  speakingFallback:
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80',

  // === Spare portraits, kept on file =======================================
  // Available to swap in if the art-direction calls for them later.
  // ✓ supplied
  portraitFrontal: `${ASSETS}/portraits/musa-portrait-frontal.png`,
  portraitCasual: `${ASSETS}/portraits/musa-portrait-casual.jpg`,
};

export default IMAGES;
