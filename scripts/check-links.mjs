#!/usr/bin/env node
// External link reachability check for post URLs.
// A reachable URL does NOT prove the source supports the claim it is cited for; that needs editorial review.
//
// Outcomes:
//   OK           2xx/3xx after redirects
//   BROKEN       404/410, or DNS failure  -> fails the run
//   UNVERIFIED   401/403/406/429/999, 5xx, timeouts, TLS/network errors -> reported for manual review, does not fail
// Honest client identification (no browser spoofing). Retries with backoff, per-host spacing.
// Usage: node scripts/check-links.mjs [postsDir] [--drafts]
import { readPosts, extractLinks, isExternal } from './lib/content.mjs';
import { appendFileSync } from 'node:fs';

const args = process.argv.slice(2);
const includeDrafts = args.includes('--drafts');
const dir = args.find((a) => !a.startsWith('--')) ?? 'src/content/posts';
const UA = 'rubenlupi-blog-linkcheck/1.0 (+https://github.com/rubenlupi/rubenlupi.github.io)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const urls = new Map(); // url -> Set(files)
for (const p of readPosts(dir)) {
  if (!p.fm || (p.fm.draft === true && !includeDrafts)) continue;
  for (const l of extractLinks(p.body)) {
    if (!isExternal(l.href)) continue;
    const u = l.href.replace(/#.*$/, '').replace(/[.,;]+$/, '');
    if (!urls.has(u)) urls.set(u, new Set());
    urls.get(u).add(p.slug);
  }
}

async function once(url, method) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 20000);
  try {
    return await fetch(url, { method, redirect: 'follow', signal: ctl.signal, headers: { 'user-agent': UA, accept: 'text/html,*/*' } });
  } finally { clearTimeout(t); }
}

async function check(url) {
  let last = 'unknown';
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      let res = await once(url, 'HEAD');
      if (res.status === 405 || res.status === 403 || res.status === 501) res = await once(url, 'GET');
      const s = res.status;
      if (s >= 200 && s < 400) return { state: 'OK', detail: String(s) };
      if (s === 404 || s === 410) return { state: 'BROKEN', detail: String(s) };
      last = String(s);
      if (s === 429 || s >= 500) { await sleep(1500 * 2 ** attempt); continue; }
      return { state: 'UNVERIFIED', detail: `${s} (site may block automated clients)` };
    } catch (e) {
      const code = e?.cause?.code ?? e?.name ?? 'error';
      if (code === 'ENOTFOUND') return { state: 'BROKEN', detail: 'DNS lookup failed' };
      last = code;
      await sleep(1500 * 2 ** attempt);
    }
  }
  return { state: 'UNVERIFIED', detail: `${last} after retries` };
}

const hostLast = new Map();
const queue = [...urls.keys()];
const results = [];
async function worker() {
  while (queue.length) {
    const url = queue.shift();
    const host = new URL(url).host;
    const wait = Math.max(0, (hostLast.get(host) ?? 0) + 1000 - Date.now());
    hostLast.set(host, Date.now() + wait);
    if (wait) await sleep(wait);
    const r = await check(url);
    results.push({ url, files: [...urls.get(url)], ...r });
  }
}
await Promise.all(Array.from({ length: 4 }, worker));

results.sort((a, b) => a.state.localeCompare(b.state) || a.url.localeCompare(b.url));
const lines = results.map((r) => `${r.state.padEnd(10)} ${r.detail.padEnd(30)} ${r.url}  [${r.files.join(', ')}]`);
console.log(lines.join('\n') || 'No external links found.');
const broken = results.filter((r) => r.state === 'BROKEN');
const unver = results.filter((r) => r.state === 'UNVERIFIED');
console.log(`\n${results.length} link(s): ${results.filter((r) => r.state === 'OK').length} ok, ${broken.length} broken, ${unver.length} unverified.`);
console.log('Reachability is not evidence. Confirm each source supports its claim (docs/EDITORIAL_POLICY.md §4).');
if (process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(process.env.GITHUB_STEP_SUMMARY,
    `### Link check\n\n| State | Detail | URL |\n|---|---|---|\n${results.map((r) => `| ${r.state} | ${r.detail} | ${r.url} |`).join('\n')}\n\n` +
    `_Unverified links need a manual look. A reachable URL does not prove the source supports the claim._\n`);
}
process.exit(broken.length ? 1 : 0);
