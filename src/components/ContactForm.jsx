import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from './Button.jsx';

/**
 * ContactForm
 *
 * Fully controlled, accessible. Single integration point: the `onSubmit`
 * prop. Without it, the form simulates a short delay and shows the success
 * state — useful for the concept build.
 *
 * TODO: Wire `onSubmit` to a real endpoint (Formspree, Netlify Forms,
 * custom API) before launch.
 */

const ENQUIRY_TYPES = [
  'Booking',
  'Media',
  'Production',
  'Partnership',
  'Other',
];

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name:    '',
    email:   '',
    phone:   '',
    enquiry: 'Booking',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const update = (field) => (e) =>
    setForm((s) => ({ ...s, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('submitting');
    try {
      if (onSubmit) await onSubmit(form);
      else await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', enquiry: 'Booking', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-5 py-6">
        <CheckCircle2 size={28} className="text-gold" strokeWidth={1.4} />
        <h3 className="section-title !text-3xl !leading-tight">Ngiyabonga.</h3>
        <p className="body-copy max-w-sm">
          Your enquiry has been received. The Thanx Ma team will
          be in touch.
        </p>
        <Button variant="ghost" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 sm:gap-7" noValidate>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
        <Field label="Full name"  required value={form.name}  onChange={update('name')}  autoComplete="name" />
        <Field label="Email"      type="email" required value={form.email} onChange={update('email')} autoComplete="email" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-7">
        <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />

        <div className="flex flex-col gap-2">
          <label className="eyebrow text-ivory/40" htmlFor="cf-enquiry">Enquiry type</label>
          <select
            id="cf-enquiry"
            value={form.enquiry}
            onChange={update('enquiry')}
            className="bg-transparent border-b border-ivory/20 py-3 text-ivory/85 text-sm focus:border-gold focus:outline-none transition-colors appearance-none"
          >
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t} className="bg-charcoal-900 text-ivory">{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="eyebrow text-ivory/40" htmlFor="cf-message">Message *</label>
        <textarea
          id="cf-message"
          rows={5}
          required
          value={form.message}
          onChange={update('message')}
          className="bg-transparent border-b border-ivory/20 py-3 text-ivory/85 text-sm focus:border-gold focus:outline-none transition-colors resize-none placeholder:text-ivory/25"
          placeholder="Tell us about your enquiry…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-clay-light">
          Something went wrong. Please try again or reach us directly.
        </p>
      )}

      <div className="flex items-center gap-5 pt-1">
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
          <Send size={14} strokeWidth={1.6} />
        </Button>
        <p className="text-[11px] text-ivory/30 leading-snug max-w-[200px]">
          Used only to respond to your enquiry.
        </p>
      </div>
    </form>
  );
};

const Field = ({ label, required, ...rest }) => {
  const id = `cf-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow text-ivory/40" htmlFor={id}>
        {label}{required && ' *'}
      </label>
      <input
        id={id}
        required={required}
        className="bg-transparent border-b border-ivory/20 py-3 text-ivory/85 text-sm focus:border-gold focus:outline-none transition-colors placeholder:text-ivory/20"
        {...rest}
      />
    </div>
  );
};

export default ContactForm;
