export const SITE = {
  title: 'Ruben Lupi',
  headline: 'Engineering, learning & everything in between.',
  tagline: 'Software, mathematics, education, history, human performance, and the ideas that sometimes connect them.',
  github: 'https://github.com/rubenlupi',
  linkedin: 'https://www.linkedin.com/in/ruben-sanchez-2702622b/',
};
export const slugTag = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const fmtDate = (d: Date, locale = 'en-GB') =>
  d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const AREAS = [
  { slug: 'software', short: 'Software', name: 'Software Engineering',
    blurb: 'Architecture, design, testing, delivery, platforms, distributed systems and AI.' },
  { slug: 'learning', short: 'Learning', name: 'Learning & Education',
    blurb: 'How people learn: pedagogy, autonomy, Montessori, Emmi Pikler, European school systems, critical thinking.' },
  { slug: 'strength', short: 'Strength', name: 'Strength & Human Performance',
    blurb: 'Strength training, physiology, adaptation, progression, recovery and long-term health.' },
  { slug: 'history', short: 'History', name: 'History & Classical Thinking',
    blurb: 'Greece and Rome: philosophy, society, education, engineering and physical culture.' },
  { slug: 'mathematics', short: 'Mathematics', name: 'Mathematics & Reasoning',
    blurb: 'Logic, probability, statistics, optimisation, abstraction and problem solving.' },
  { slug: 'systems', short: 'Systems', name: 'Systems & Organizations',
    blurb: 'Complexity, incentives, organisations, and how interactions shape outcomes.' },
] as const;
export type AreaName = (typeof AREAS)[number]['name'];
export const areaByName = (n: string) => AREAS.find((a) => a.name === n);
import { AREA_ES, type Lang } from './i18n';
/** Topic area in the reader's language (slug stays the same in both languages). */
export const areaL = (a: (typeof AREAS)[number], lang: Lang) => (lang === 'es' ? { ...a, ...AREA_ES[a.slug] } : a);

/** List ordering by the ACTUAL date (what readers see); editorialDate is metadata only (owner decision 2026-11-13). */
export const sortDate = (p: { data: { date: Date; seriesPart?: { number: number } } }) =>
  // Parts of one release share a date; subtracting the part number keeps Part 1 first in newest-first lists.
  +p.data.date - (p.data.seriesPart?.number ?? 0);
export const SERIES = { slug: 'break-and-change', name: 'Break & Change',
  blurb: 'Not book summaries. Ideas worth breaking, challenging, testing against documented experience and turning into change.' };
