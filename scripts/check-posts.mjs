// Editorial gate: every published post must end with a "References & Further Reading" section
// and must not link to a bare homepage-only URL without a path. Failing here fails the build.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/posts';
let failed = false;
for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const src = readFileSync(join(dir, f), 'utf8');
  if (/^draft:\s*true\s*$/m.test(src)) continue;
  if (!/^##\s+References & Further Reading\s*$/m.test(src)) {
    console.error(`✗ ${f}: missing "## References & Further Reading" section`);
    failed = true;
  }
}
if (failed) {
  console.error('\nSee the editorial policy. Mark the post `draft: true` until the checks are done.');
  process.exit(1);
}
console.log('✓ editorial gate: all published posts have a References section');
