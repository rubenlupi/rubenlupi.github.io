#!/usr/bin/env node
// Usage: node scripts/validate-content.mjs [postsDir] [--strict]   (--strict: warnings fail too)
import { validate } from './lib/validate.mjs';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const dir = args.find((a) => !a.startsWith('--')) ?? 'src/content/posts';
const { errors, warnings, count } = validate(dir, { catalogPath: 'docs/BOOK_CATALOG.md' });

for (const w of warnings) console.warn(`⚠ ${w}`);
for (const e of errors) console.error(`✗ ${e}`);
console.log(`\nChecked ${count} post(s): ${errors.length} error(s), ${warnings.length} warning(s).`);
console.log('Note: this validates structure only. Factual accuracy, source relevance and reasoning need editorial review (docs/EDITORIAL_POLICY.md).');
if (errors.length || (strict && warnings.length)) {
  console.error('\nFix the errors, or keep the article as `draft: true` until the checks can pass. Do not bypass validation.');
  process.exit(1);
}
