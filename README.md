# Thanx Ma Productions — Concept Site

> **Status: PRIVATE CONCEPT — pending official approval.**
> This codebase is an unofficial design and engineering concept prepared for
> Musa C. Mseleku and the Thanx Ma Productions team. It is not to be
> published as an official property until written approval is granted.

A premium one-page React site positioning **Thanx Ma Productions** as a
legacy platform for African storytelling, family, culture and enterprise.

---

## Site map (post-consolidation)

The home is now five sections, ordered around the customer's three questions —
*who? · what can they do for me? · how do I reach them?*

| # | Section | Purpose |
|---|---|---|
| 1 | **Hero** | Single-CTA brand opener |
| 2 | **About** | Musa + brand soul + Ngiyabonga callout (incorporates the previous standalone Legacy / Ukubonga section) |
| 3 | **Heritage** | Full-bleed cultural editorial banner |
| 4 | **Services** | Four bookable offerings: Film & TV · Ceremonies & Family Milestones · Speaking · Books |
| 5 | **Contact** | Form + direct contact |

Plus the dedicated `/books` route. Primary nav: `About · Services · Books · Contact` + `Book Musa` CTA.

**What was removed in the consolidation pass** (sections folded elsewhere):
- `BrandIntro.jsx` — its 3 pillars duplicated About's pillars
- `ThanxMaMeaning.jsx` — folded into About as the Ngiyabonga callout
- `OfficialLinks.jsx` — social icons moved to the Footer
- `Speaking.jsx` — consolidated into Services as a card
- `Productions.jsx` — replaced by `Services.jsx` (broader scope, names ceremonies as a concrete offering)

These files are no longer imported. Safe to delete from your local copy:
```
src/sections/BrandIntro.jsx
src/sections/ThanxMaMeaning.jsx
src/sections/OfficialLinks.jsx
src/sections/Speaking.jsx
src/sections/Productions.jsx
```

---

## Quick start

```bash
npm install
npm run dev      # local development on http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview built output
```

Requires Node 18+.

---

## Folder structure

```
thanx-ma-productions/
├── index.html                 # SEO, OpenGraph, JSON-LD organisation schema
├── public/
│   ├── favicon.svg            # Gold diamond mark — replace with approved logo
│   └── assets/
│       └── og/                # Drop a 1200×630 og-thanxma-placeholder.jpg here
├── src/
│   ├── main.jsx
│   ├── App.jsx                # Root composition
│   ├── index.css              # Tailwind + base styles + Zulu pattern URI
│   ├── assets/
│   │   └── imageManifest.js   # ⭐ Single source of truth for all imagery
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Navigation.jsx
│   │   ├── PatternDivider.jsx
│   │   └── SectionHeader.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx                  # now also carries the Ngiyabonga callout
│       ├── Heritage.jsx               # full-bleed cultural banner
│       ├── Services.jsx               # 4 cards: Film & TV, Ceremonies, Speaking, Books
│       ├── Contact.jsx
│       └── Footer.jsx                 # also hosts the social row + Built by Valo credit
├── tailwind.config.js         # Palette, fonts, motion keyframes
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Design system

| Token         | Value          | Use                                                   |
|---------------|----------------|--------------------------------------------------------|
| `charcoal-900`| `#0b0908`      | Page background                                        |
| `charcoal`    | `#141111`      | Section background                                     |
| `umber-dark`  | `#2a1b0f`      | Tribute / legacy section base                          |
| `gold`        | `#c9a961`      | Primary accent, CTAs, dividers                         |
| `gold-light`  | `#e2c789`      | Italic emphasis, highlights                            |
| `ivory`       | `#f5f0e1`      | Body text, headings                                    |
| `clay`        | `#7a3b2e`      | Reserved (oxblood accent — sparingly)                  |

Typography:
- **Cormorant Garamond** — display / serif (legacy headings, italic emphasis).
- **Inter** — sans / body / UI.

Motion: slow zoom on hero, fade-up on scroll, gold-line reveals under section headers, shadow lift on primary buttons. All motion respects `prefers-reduced-motion`.

Pattern: a *subtle, abstracted* Zulu-inspired diamond geometry served as an inline SVG data-URI background (`bg-pattern-subtle`) and a centrepiece divider component (`PatternDivider`). The shapes are intentionally derivative of common triangular/diamond geometries rather than copies of any specific beadwork motif.

---

## Build credit

The Footer carries a discreet `Built by Valo` link to https://valosystems.co.za, sitting on the legal line bottom-right (next to the "Independent concept" disclaimer). Hovers to gold; opens in a new tab. The same credit is mirrored on the holding page (`thanx-ma-coming-soon/index.html`) below the approval line.

This is a deliberate plaque, not a banner ad — it's there because the brand may be visible on national TV, and the credit doubles as quiet brand exposure for Valo without competing with the Thanx Ma identity.

---

## Ceremonies as a service

Surfaced from public statements about Thanx Ma's work filming family ceremonies (umembeso, weddings, naming ceremonies), the Services section now carries this as a concrete bookable offering:

> **Ceremonies & Family Milestones** — A discreet film service for cultural ceremonies, family milestones and the moments that matter, captured with the same respect that shapes our television work.

Tags: Umembeso · Weddings · Naming ceremonies · Family events.

The card is intentionally general so it covers the breadth of cultural ceremonies without reading as a wedding-vendor brochure. Once the team confirms specific service tiers / pricing, those can be added.

---

## ⚠ What needs official approval before launch

This is the most important section in this README.

### 1. Brand & legal
- [ ] **Permission to act** as an officially-endorsed digital home for Thanx Ma Productions.
- [ ] **Domain ownership / DNS access** for `thanxma.co.za` (currently returns 502 Bad Gateway).
- [ ] **Registered company details** — Thanx Ma Productions appears in public records as a 2017-incorporated South African private company. Confirm the exact registered name, registration number, and address before adding them to the footer or JSON-LD schema in `index.html`.
- [ ] **Approved logo** — replace the placeholder gold-diamond mark (`public/favicon.svg` and the wordmark in `Navigation.jsx` / `Footer.jsx`).
- [ ] **Trademark guidance** — confirm whether "Thanx Ma" is a registered trademark and what registered marks (™ / ®) should appear.

### 2. Copy
- [ ] **The Meaning of Thanx Ma** (`sections/ThanxMaMeaning.jsx`) — the most sensitive section. The copy is currently general and respectful, but anything personal (names, dates, family detail) must be approved by Musa or family. Do not add specifics without sign-off.
- [ ] **About roles & descriptions** (`sections/About.jsx`) — confirm wording on each of the six roles.
- [ ] **Speaking topics** (`sections/Speaking.jsx`) — confirm the topic list reflects what Musa actually speaks on.
- [ ] **Production categories** (`sections/Productions.jsx`) — currently described as categories rather than named shows; if/when broadcaster + production-house clearance is obtained, replace with named titles.

### 3. Imagery
All images currently in `src/assets/imageManifest.js` are **Unsplash placeholders** chosen for tone, not content. Before launch:
- [ ] Replace `IMAGES.hero` with approved hero photography.
- [x] **Portrait in use:** `/public/assets/portraits/musa-portrait.jpg` — provided by the project owner. **Confirm written usage permission before any public launch.**
- [ ] Replace `IMAGES.thanxma` with approved tribute imagery.
- [ ] Replace `IMAGES.productions` with rights-cleared production stills (broadcaster permissions required for any DStv / Mzansi Magic / specific show key art — assume not granted unless explicitly written).
- [ ] Replace `IMAGES.speaking` with approved keynote photography.
- [ ] Replace `IMAGES.heritage` with commissioned cultural texture or KZN landscape.
- [ ] Add a 1200×630 OpenGraph hero at `public/assets/og/og-thanxma-placeholder.jpg`.
- [ ] **Never use family photos** without written consent from each adult subject.

### 4. Contact & social
- [ ] Replace `hello@thanxma.co.za` (currently a placeholder) in `Contact.jsx`, `Footer.jsx`, and `index.html` JSON-LD.
- [ ] Replace WhatsApp `+27 (placeholder)` in `Contact.jsx`, `Footer.jsx`.
- [ ] Replace social handles in `OfficialLinks.jsx` with confirmed verified profiles. Remove any platform that is not actually maintained.
- [ ] Wire `ContactForm.jsx`'s `onSubmit` to a real backend (Formspree, custom API, Netlify Forms, etc.).

### 5. SEO / indexing
- [ ] `<meta name="robots" content="noindex, nofollow" />` is currently set in `index.html`. Remove only after launch approval.
- [ ] Confirm canonical URL in `og:url`.
- [ ] Add a sitemap and `robots.txt` once indexing is enabled.

---

## Hosting recommendation

While the site is a private concept, deploy to a private preview URL that does **not** carry the Thanx Ma name in the public DNS — for example:

- `thanxma.valosystems.co.za`, or
- `preview.valosystems.co.za/thanxma`

This separates the demo from the official brand and prevents accidental association before approval. Add HTTP basic auth if the preview host supports it.

---

## Cultural & ethical notes

This site has been built with deliberate restraint:

1. **No tabloid framing.** Musa's roles are presented as factual labels; the site avoids gossip, controversy, or dramatised personal life.
2. **No copyrighted broadcaster assets.** No DStv / Mzansi Magic logos, show titles, or stills appear in the codebase. Productions are presented as categories.
3. **No family imagery.** Family photos are explicitly out of scope until consent is obtained from every adult subject.
4. **Cultural reference, not costume.** The Zulu-inspired geometry is abstracted and used sparingly (one divider component, one background pattern). The palette leans on warm earth tones and gold rather than tribal-pattern flooding.
5. **The Thanx Ma section is the soul of the brand.** It is the most sensitive and the most powerful — and therefore the section most likely to need wording adjustments from family. Treat its copy as a draft until approved.

---

## What remains (a short backlog)

- Wire the contact form to a real backend.
- Add a simple language toggle for **English / isiZulu** key labels (eyebrow, CTAs, footer). This was scoped but deferred to keep v1 focused.
- Add a small **press / mentions** strip if and when verifiable press logos are obtained.
- Add **structured speaker booking form** with date pickers if speaking enquiries become high-volume.
- Add **CMS** (Sanity, Contentful, Decap) so the team can edit copy without redeploying.

See [`STRATEGY.md`](./STRATEGY.md) for the broader pitch + research recommendations.
