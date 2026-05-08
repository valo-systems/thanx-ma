import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';

/**
 * OfficialLinks — positions this site as the future verified home.
 *
 * All hrefs are PLACEHOLDERS. Replace with confirmed handles before launch.
 * Remove any platform the brand does not maintain.
 *
 * TODO: Confirm all handles with the Thanx Ma Productions team.
 */
const SOCIALS = [
  { icon: Instagram, label: 'Instagram',   href: '#', handle: '@thanxma' },
  { icon: Facebook,  label: 'Facebook',    href: '#', handle: 'Thanx Ma Productions' },
  { icon: Twitter,   label: 'X / Twitter', href: '#', handle: '@thanxma' },
  { icon: Youtube,   label: 'YouTube',     href: '#', handle: 'Thanx Ma' },
  { icon: Linkedin,  label: 'LinkedIn',    href: '#', handle: 'Thanx Ma Productions' },
];

const OfficialLinks = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Official Links"
          title={
            <>
              The verified home of{' '}
              <span className="italic text-gold-light">Thanx Ma</span>.
            </>
          }
          lede="This site is being built as the future verified destination for official Thanx Ma Productions links, bookings, announcements and press."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 border border-ivory/8 hover:border-gold/35 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-gold/30 text-gold group-hover:border-gold/55 transition-colors">
                  <s.icon size={15} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-serif text-[1.05rem] text-ivory/85">{s.label}</span>
                  <span className="block text-[11px] text-sand/60">{s.handle}</span>
                </span>
              </span>
              <ExternalLink size={14} className="text-ivory/30 group-hover:text-gold transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Concept disclaimer */}
        <div className="mt-12 flex items-start gap-3 p-5 border border-gold/20 bg-gold/[0.04] max-w-3xl">
          <ShieldCheck size={18} className="text-gold/70 shrink-0 mt-0.5" strokeWidth={1.4} />
          <p className="text-sm text-ivory/60 leading-relaxed">
            <span className="font-medium text-ivory/80">Private concept — pending official approval.</span>{' '}
            Social handles, contact details and brand assets shown are placeholders.
            Verified information will be added once the team has approved the site for launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficialLinks;
