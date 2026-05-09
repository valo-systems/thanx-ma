import React from 'react';
import { Tv, BookOpen, Users, MessageCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import IMAGES from '../assets/imageManifest.js';

/**
 * Productions — the body of work.
 *
 * We describe categories of work rather than named titles. No broadcaster
 * logos, no show stills, no copyrighted assets.
 *
 * TODO (legal): Once broadcaster and production-house clearances are
 * confirmed, replace the category cards below with named titles and
 * approved key art. The placeholder line in "Selected work" should be
 * replaced with a curated title list at the same time.
 */
const PILLARS = [
  {
    icon:        Tv,
    title:       'Reality Television',
    description: 'Family-centred unscripted television that opens windows into South African life, produced with cultural integrity for national audiences.',
  },
  {
    icon:        BookOpen,
    title:       'Cultural Storytelling',
    description: 'Narratives shaped by African voices and lived experience: stories that travel beyond the screen into print, classrooms and lasting conversations.',
  },
  {
    icon:        Users,
    title:       'Family & Legacy',
    description: 'Programming and projects that sit with questions of heritage and legacy: what we inherit, what we choose to pass on.',
  },
  {
    icon:        MessageCircle,
    title:       'Public Conversations',
    description: 'A platform for the conversations South Africa is having: about culture, leadership, modernity and what it means to build something at home.',
  },
];

const Productions = () => {
  return (
    <section id="productions" className="relative py-28 sm:py-36 bg-charcoal">
      {/* Subtle image strip at the top edge */}
      <div className="absolute top-0 inset-x-0 h-64 -z-10">
        <img
          src={IMAGES.productions}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal" />
      </div>

      <div className="container-editorial relative">
        <SectionHeader
          eyebrow="Productions & Storytelling"
          title={
            <>
              A home for{' '}
              <span className="italic text-gold-light">African</span>{' '}
              stories.
            </>
          }
          lede="Thanx Ma develops and produces work rooted in African storytelling: unscripted television, cultural programming and family-centred narratives shaped by lived experience."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => (
            <FeatureCard
              key={p.title}
              icon={p.icon}
              title={p.title}
              description={p.description}
              index={i}
            />
          ))}
        </div>

        {/* Selected work */}
        <div className="mt-20 border-t border-ivory/10 pt-10">
          <p className="eyebrow text-ivory/40 mb-4">Selected work</p>
          <p className="quote-text !not-italic !text-ivory/65 measure-body">
            {/*
              TODO: Replace this line with confirmed title list and approved
              key art once broadcaster clearances are in place.
            */}
            A growing slate of South African unscripted, cultural and
            legacy-driven work. Full title list available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Productions;
