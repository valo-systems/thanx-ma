/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Thanx Ma Productions — refined legacy palette ──────────────────
        // Ink base — the deepest background.
        charcoal: {
          DEFAULT: '#1a1613',   // section backgrounds (was #141111)
          50:  '#302822',       // slightly lifted surface
          100: '#231d18',       // subtle card surface
          900: '#120F0B',       // deepest ink — main body bg (was #0b0908)
        },
        // Deep earthy browns — warmth without being orange.
        umber: {
          DEFAULT: '#6F4328',   // burnt earth (was #3d2817)
          light:   '#8a5834',   // lifted umber
          dark:    '#24170F',   // deep umber — used for rich section bgs
        },
        // Gold — aged, not bright or flat/yellow. The brand's defining accent.
        gold: {
          DEFAULT: '#C9A44F',   // aged gold (was #c9a961 — warmer, less yellow)
          light:   '#E2C879',   // soft gold — headlines, italic accents
          dark:    '#9E7D35',   // deep gold — subdued accent
        },
        // Bone & ivory — warm off-white for text on dark backgrounds.
        ivory: {
          DEFAULT: '#F4EEE2',   // bone (was #f5f0e1)
          warm:    '#EBE4D5',   // warmer ivory — body text
          dim:     '#D5CDB8',   // dimmer ivory — secondary text
        },
        // Muted sand — for tertiary text, captions, labels.
        sand: {
          DEFAULT: '#B9A98F',
        },
        // Clay — warm terracotta accent.
        clay: {
          DEFAULT: '#9B5B3C',   // clay accent (was #7a3b2e)
          light:   '#B37257',
          dark:    '#72402A',
        },
      },

      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },

      letterSpacing: {
        // For eyebrow labels and uppercase micro text.
        editorial: '0.18em',
        // Slightly tighter editorial tracking for larger headings.
        tight:     '-0.02em',
      },

      lineHeight: {
        // Tighter than Tailwind default for big display type.
        display: '1.02',
      },

      animation: {
        'fade-up':   'fadeUp 1.2s ease-out forwards',
        'fade-in':   'fadeIn 1.6s ease-out forwards',
        'gold-line': 'goldLine 1.4s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        goldLine: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        slowZoom: {
          '0%':   { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },

      backgroundImage: {
        // Cinematic gradient: transparent top → warm umber mid → deep ink bottom.
        // Text lives at the bottom — near-black ensures legibility without
        // creating a muddy grey wash across the image.
        'gradient-cinematic':
          'linear-gradient(to bottom, rgba(18,15,11,0.08) 0%, rgba(36,23,15,0.48) 38%, rgba(18,15,11,0.82) 68%, rgba(18,15,11,0.97) 100%)',

        // Subtle radial warm blush — used sparingly, never heavy.
        'radial-warm':
          'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(111,67,40,0.13), transparent 68%)',
      },
    },
  },
  plugins: [],
};
