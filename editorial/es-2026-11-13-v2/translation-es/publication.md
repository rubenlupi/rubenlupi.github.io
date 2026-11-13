# Spanish edition: es-2026-11-13-v2

**Status: awaiting the author's explicit approval. Nothing has been committed, pushed or deployed.**

| Original | Target file | Spanish title |
|---|---|---|
| `src/content/posts/sometimes-the-problem-isnt-the-component.md` | `src/content/posts/es/el-problema-no-siempre-es-el-componente.md` | A veces el problema no es el componente, sino el sistema |
| `src/content/posts/systems-we-build-1-we-create-them.md` | `src/content/posts/es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md` | No solo vivimos en sistemas: también los creamos |
| `src/content/posts/systems-we-build-2-improving-the-parts.md` | `src/content/posts/es/sistemas-que-construimos-2-mejorar-las-partes.md` | Cuando mejorar las partes empeora el conjunto |
| `src/content/posts/systems-we-build-3-same-mistakes.md` | `src/content/posts/es/sistemas-que-construimos-3-mismos-errores.md` | Por qué la gente inteligente repite una y otra vez los mismos errores |
| `src/content/posts/systems-we-build-4-limits.md` | `src/content/posts/es/sistemas-que-construimos-4-limites.md` | Los límites de verlo todo como un sistema |
| `src/content/posts/systems-we-build-5-what-are-we-building.md` | `src/content/posts/es/sistemas-que-construimos-5-que-construimos.md` | ¿Qué estamos intentando construir en realidad? |

## Automated checks

- Parity with the original (same sources, sections, topics, tags, book, series fields, editorial date): passed
- Repository validator (as published): passed, with warnings:
  - validator: es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: es/sistemas-que-construimos-3-mismos-errores.md: 2289 words; series parts aim for roughly 1,000–1,500 (quality takes priority)
  - validator: es/sistemas-que-construimos-4-limites.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: es/sistemas-que-construimos-4-limites.md: non-HTTPS link: http://classics.mit.edu/Aristotle/nicomachaen.2.ii.html
  - validator: es/sistemas-que-construimos-5-que-construimos.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: es/sistemas-que-construimos-5-que-construimos.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: es/sistemas-que-construimos-5-que-construimos.md: non-HTTPS link: http://classics.mit.edu/Aristotle/politics.8.eight.html
  - validator: es/sistemas-que-construimos-5-que-construimos.md: non-HTTPS link: http://classics.mit.edu/Plato/republic.8.vii.html
  - validator: es/sistemas-que-construimos-5-que-construimos.md: 1907 words; series parts aim for roughly 1,000–1,500 (quality takes priority)
- Translator's notes (terminology, quotations, open questions): `notes.md`

## Still requires human review

- Automated checks cannot judge fidelity or style. Read the Spanish text against the original, at least the
  passages listed under "Open questions" in notes.md.

## To publish (only with explicit approval)

Copy each file to its target path, set `draft: false`, run `npm run build`, commit on a branch, push only when approved.
A translation may not be published before its original.
