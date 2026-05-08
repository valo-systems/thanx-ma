import React from 'react';
import { motion } from 'framer-motion';
import PatternDivider from '../components/PatternDivider.jsx';
import IMAGES from '../assets/imageManifest.js';

/**
 * ThanxMaMeaning — the soul of the brand. (nav anchor: "Legacy")
 *
 * Tone: intimate, respectful, earned.
 * No sentimentality. No overexplanation.
 * Let the Zulu phrase close the section — it needs no translation.
 *
 * The section anchor is #legacy to match the nav item.
 *
 * Copy: deliberately general — gratitude, motherhood, legacy — so that
 * it can be approved without claiming anything not already public.
 *
 * TODO: Wording must be reviewed and approved by the Thanx Ma Productions
 * team before public launch.
 */
const ThanxMaMeaning = () => {
  return (
    <section
      id="legacy"
      className="relative py-28 sm:py-44 overflow-hidden bg-umber-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.thanxma}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/70 via-umber-dark/88 to-charcoal-900/95" />
        {/* Pattern — very faint */}
        <div className="absolute inset-0 bg-pattern-subtle opacity-[0.12]" />
      </div>

      <div className="container-editorial">
        <div className="max-w-3xl mx-auto text-center">

          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The meaning of Thanx Ma
          </motion.span>

          <motion.h2
            className="display-2 mt-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            A name carried with{' '}
            <span className="italic text-gold-light">gratitude</span>.
          </motion.h2>

          <PatternDivider />

          <motion.div
            className="space-y-6 text-[1.05rem] sm:text-xl leading-[1.8] text-ivory/75 font-sans font-light"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.28 }}
          >
            <p>
              Thanx Ma is a name carried with gratitude — a quiet tribute to
              motherhood, to the people who shape us, and to the legacy passed
              from one generation to the next.
            </p>
            <p>
              It is the soul of every story told here. The reason to build.
              A thank you that does not need many words.
            </p>
            <p className="font-serif italic text-[1.75rem] sm:text-3xl text-gold-light pt-4">
              Ngiyabonga, Ma.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ThanxMaMeaning;
