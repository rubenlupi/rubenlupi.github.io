# Spanish edition: es-2026-11-13-v3

**Status: awaiting the author's explicit approval. Nothing has been committed, pushed or deployed.**

| Original | Target file | Spanish title |
|---|---|---|
| `src/content/posts/sometimes-the-problem-isnt-the-component.md` | `src/content/posts/es/el-problema-no-siempre-es-el-componente.md` | Cuando el fallo está en la forma, no en la pieza |
| `src/content/posts/systems-we-build-1-we-create-them.md` | `src/content/posts/es/sistemas-que-construimos-1-no-solo-vivimos-en-sistemas.md` | La misión no manda. Manda la bañera. |
| `src/content/posts/systems-we-build-2-improving-the-parts.md` | `src/content/posts/es/sistemas-que-construimos-2-mejorar-las-partes.md` | Lo que la métrica no ve sale gratis |
| `src/content/posts/systems-we-build-3-same-mistakes.md` | `src/content/posts/es/sistemas-que-construimos-3-mismos-errores.md` | Apretar funciona, hasta que llega la factura |
| `src/content/posts/systems-we-build-4-limits.md` | `src/content/posts/es/sistemas-que-construimos-4-limites.md` | El pensamiento sistémico explica, pero no adivina |
| `src/content/posts/systems-we-build-5-what-are-we-building.md` | `src/content/posts/es/sistemas-que-construimos-5-que-construimos.md` | Tus métricas reescriben tus objetivos sin avisar |

## Automated checks

- Parity with the original (same sources, sections, topics, tags, book, series fields, editorial date): passed
- Repository validator (as published): passed, with warnings:
  - validator: es/sistemas-que-construimos-3-mismos-errores.md: 2236 words; series parts aim for roughly 1,000–1,500 (quality takes priority)
- Prose-editor style pass (Spanish only, parity-checked): `polish-notes.md`
- Translator's notes (terminology, quotations, open questions): `notes.md`

## Still requires human review

- Automated checks cannot judge fidelity or style. Read the Spanish text against the original, at least the
  passages listed under "Open questions" in notes.md.

## To publish (only with explicit approval)

Copy each file to its target path, set `draft: false`, run `npm run build`, commit on a branch, push only when approved.
A translation may not be published before its original.
