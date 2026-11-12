export const SITE = {
  title: 'Ruben Lupi',
  tagline: 'Notes on software engineering, architecture, systems thinking, platform engineering and agentic AI.',
  github: 'https://github.com/rubenlupi',
  linkedin: 'https://www.linkedin.com/in/ruben-sanchez-2702622b/',
};
export const slugTag = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
