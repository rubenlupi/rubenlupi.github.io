// Parity between a text before and after a prose (style) edit. A style edit may rewrite sentences freely, but
// must not touch frontmatter, headings, links, figures or quotations, and must not add or cut much material.
import { extractLinks, isExternal } from './content.mjs';

const split = (t) => { const m = t.match(/^(---\r?\n[\s\S]*?\r?\n---)\r?\n?([\s\S]*)$/); return m ? { fm: m[1], body: m[2] } : { fm: '', body: t }; };
const headings = (b) => b.split('\n').filter((l) => /^#{1,6}\s/.test(l)).map((l) => l.trim());
const urls = (b) => [...extractLinks(b).map((l) => l.href), ...(b.match(/https?:\/\/[^\s)>\]]+/g) ?? [])].filter(isExternal).map((u) => u.replace(/[.,;:]+$/, '')).sort();
const numbers = (b) => (b.replace(/https?:\/\/\S+/g, '').match(/\d+(?:[.,]\d+)*/g) ?? []).sort();
const quotes = (b) => [...b.matchAll(/[“"«]([^”"»\n]{8,}?)[”"»]/g)].map((m) => m[1]).filter((q) => q.trim().split(/\s+/).length >= 3);
const words = (b) => b.replace(/^---[\s\S]*?---/, '').split(/\s+/).filter(Boolean).length;
const multisetDiff = (a, b) => { const m = new Map(); a.forEach((x) => m.set(x, (m.get(x) ?? 0) + 1)); b.forEach((x) => m.set(x, (m.get(x) ?? 0) - 1)); return [...m].filter(([, n]) => n !== 0); };

/** Returns a list of violations (empty = the edit stayed within style). */
export function comparePolish(before, after, label = 'text') {
  const errors = [];
  const A = split(before), B = split(after);
  if (A.fm !== B.fm) errors.push(`${label}: frontmatter changed (a style edit must not touch it)`);
  const ha = headings(A.body), hb = headings(B.body);
  if (JSON.stringify(ha) !== JSON.stringify(hb)) errors.push(`${label}: headings changed (they must stay identical)`);
  const ud = multisetDiff(urls(A.body), urls(B.body));
  if (ud.length) errors.push(`${label}: links changed: ${ud.map(([u, n]) => `${n > 0 ? 'removed' : 'added'} ${u}`).join('; ')}`);
  const nd = multisetDiff(numbers(A.body), numbers(B.body));
  if (nd.length) errors.push(`${label}: figures changed: ${nd.map(([x, n]) => `${n > 0 ? 'removed' : 'added'} ${x}`).join(', ')}`);
  const qb = B.body;
  for (const q of quotes(A.body)) if (!qb.includes(q)) errors.push(`${label}: quotation altered or removed: "${q.slice(0, 60)}${q.length > 60 ? '…' : ''}"`);
  const r = words(B.body) / Math.max(words(A.body), 1);
  if (r < 0.7 || r > 1.12) errors.push(`${label}: length changed too much (${words(A.body)} → ${words(B.body)} words); a style edit must not add or cut material`);
  return errors;
}
