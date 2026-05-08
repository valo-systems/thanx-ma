import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import ContactForm from '../components/ContactForm.jsx';

/**
 * Contact — the point of action.
 *
 * Kept clean and direct. The form is the primary element.
 * Two direct-contact tiles sit below the heading for those who want to
 * skip the form.
 *
 * TODO: Replace placeholder email and WhatsApp number once official
 * Thanx Ma Productions contact details are confirmed.
 */
const Contact = () => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-charcoal-900">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">

          {/* ── Left column ──────────────────────────────────────────── */}
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Contact"
              title={
                <>
                  Begin the{' '}
                  <span className="italic text-gold-light">conversation</span>.
                </>
              }
            />

            <p className="body-md mt-8 max-w-sm">
              For bookings, partnerships, interviews, production enquiries and
              press — send a message and the team will respond.
            </p>

            {/* Direct contact */}
            <div className="mt-10 space-y-3">
              <ContactTile
                icon={Mail}
                label="Email"
                value="hello@thanxma.co.za"
                href="mailto:hello@thanxma.co.za"
              />
              <ContactTile
                icon={MessageCircle}
                label="WhatsApp"
                value="+27 (placeholder)"
                href="https://wa.me/27000000000"
                external
              />
            </div>

            <p className="mt-8 text-xs text-ivory/35 max-w-xs leading-relaxed">
              All enquiries are reviewed by the Thanx Ma Productions team.
              {/* TODO: confirm contact details and response time notice */}
            </p>
          </div>

          {/* ── Form column ──────────────────────────────────────────── */}
          <div className="lg:col-span-8">
            <div className="bg-charcoal-100/40 border border-ivory/8 p-7 sm:p-10">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ContactTile = ({ icon: Icon, label, value, href, external }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="flex items-center gap-4 p-4 border border-ivory/8 hover:border-gold/35 transition-colors duration-300 group"
  >
    <span className="inline-flex h-10 w-10 items-center justify-center border border-gold/30 text-gold group-hover:border-gold/60 transition-colors shrink-0">
      <Icon size={15} strokeWidth={1.5} />
    </span>
    <span>
      <span className="block text-[10px] uppercase tracking-editorial text-ivory/40 mb-0.5">{label}</span>
      <span className="block font-serif text-[1.05rem] text-ivory/80 group-hover:text-ivory transition-colors">
        {value}
      </span>
    </span>
  </a>
);

export default Contact;
