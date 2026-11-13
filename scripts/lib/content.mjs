// Shared helpers: read posts, parse frontmatter, extract links.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import YAML from 'yaml';

export function parsePost(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const slug = basename(file).replace(/\.md$/, '');
  if (!m) return { file, slug, fm: null, body: raw, fmError: 'missing or unterminated frontmatter block' };
  try {
    const fm = YAML.parse(m[1]) ?? {};
    return { file, slug, fm, body: m[2] };
  } catch (e) {
    return { file, slug, fm: null, body: m[2], fmError: `invalid YAML: ${e.message}` };
  }
}

/** Reads posts in `dir` (English originals) and `dir/es/` (Spanish edition). Each post gets `lang`. */
export function readPosts(dir) {
  const read = (d, lang) => (existsSync(d) ? readdirSync(d).filter((f) => f.endsWith('.md')).sort().map((f) => ({ ...parsePost(join(d, f)), lang })) : []);
  return [...read(dir, 'en'), ...read(join(dir, 'es'), 'es')];
}
export const REF_HEADING = { en: 'References & Further Reading', es: 'Referencias y lecturas recomendadas' };

const stripCode = (s) => s.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
const stripComments = (s) => s.replace(/<!--[\s\S]*?-->/g, '');

/** Body without fenced code, inline code and HTML comments. */
export const cleanBody = (body) => stripComments(stripCode(body));

/** Inline Markdown links [text](url) and autolinks <https://...>. */
export function extractLinks(body) {
  const text = cleanBody(body);
  const links = [];
  for (const m of text.matchAll(/\[([^\]]*)\]\(([^)]*)\)/g)) links.push({ text: m[1], href: m[2].trim(), kind: 'inline' });
  for (const m of text.matchAll(/<(https?:\/\/[^>\s]+)>/g)) links.push({ text: m[1], href: m[1], kind: 'auto' });
  return links;
}

export const isExternal = (h) => /^https?:\/\//i.test(h);

/** Split body into the part before the final "References & Further Reading" H2 and that section. */
export function splitReferences(body) {
  const text = stripComments(body);
  const m = text.match(/^##\s+(?:References & Further Reading|Referencias y lecturas recomendadas)\s*$/m);
  if (!m) return { main: text, refs: null };
  return { main: text.slice(0, m.index), refs: text.slice(m.index + m[0].length) };
}
