import React from 'react';
import { motion } from 'framer-motion';
import IMAGES from '../assets/imageManifest.js';

/**
 * Heritage — full-bleed editorial banner.
 *
 * No text overlay. The photograph carries the section entirely.
 * Musa centred in white traditional jacket with leopard-skin shoulder
 * mantle, flanked by women in Zulu regalia, on KZN grassland.
 *
 * Legal note: confirm written consent of every adult subject in the
 * photograph before public launch (see imageManifest.js).
 */
const Heritage = () => {
  return (
    <motion.section
      id="heritage"
      aria-label="Heritage — cultural photograph of Musa C. Mseleku in traditional Zulu regalia"
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2 }}
    >
      {/* Aspect ratio: wide-cinema 21:9 on desktop, 4:3 on mobile */}
      <div className="aspect-[4/3] sm:aspect-[16/7] lg:aspect-[21/9]">
        <img
          src={IMAGES.heritage}
          alt="Musa C. Mseleku in white traditional jacket and leopard-skin mantle, standing with four women in Zulu regalia on KZN grassland"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Hairline top-edge fade so the section blends with the dark section above */}
      <div
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-charcoal-900 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      {/* Hairline bottom-edge fade into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal-900 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </motion.section>
  );
};

export default Heritage;
