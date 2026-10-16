# Old English SEO Implementation Plan

**Goal:** Deliver usable Unicode copy-and-paste text, retain image creation, and remove crawl barriers.
**Architecture:** A pure Unicode converter feeds an accessible client component. Existing image generation remains separate; server pages explain both outputs and link related tools.
**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind, Vitest.

## Constraints
- Preserve the existing deleted STRUCTURED_DATA_FIX.md and other user changes.
- English product UI; Chinese progress reports.
- No deployment, new tracking provider, bulk landing pages, or URL redirects in this iteration.

## Tasks
- [x] Add lib/unicode-fonts.ts: convert ASCII Latin letters to regular/bold Fraktur, including legacy letterlike-symbol exceptions; preserve all other characters.
- [x] Add Vitest tests for the alphabet, legacy exceptions, mixed scripts, punctuation, emoji, empty input and line breaks; document npm run test.
- [x] Add components/tools/UnicodeTextTool.tsx with two selectable results, accessible copy feedback, disabled empty/pending states and manual selection on clipboard failure.
- [x] Put Unicode tool near the top of home and Old English pages; retain clearly labeled image maker and restrict Old English image fonts.
- [x] Correct HTML-copy feedback to await clipboard success; resolve font CSS variables and include font dependency information; lazy import PNG exporter.
- [x] Rewrite Old English metadata/content around actual capabilities; align homepage visible FAQs with JSON-LD.
- [x] Allow /_next/ resources, remove unsupported crawl-delay, update only changed page lastmod, remove unsupported search action and fabricated rating defaults.
- [x] Run tests, lint, production build and browser checks at mobile/desktop sizes. Request independent code review and address actionable findings.

## Validation
- 10 Vitest tests pass; production build and type checks pass.
- Lint has one existing SiteHeader img warning; Browserslist data is outdated.
- Real Chrome clipboard content verified; exported PNG visually inspected.
- Review identified async edit races; disabled fieldset fixes both.
- Dark-theme export contrast fixed and covered with regression tests.
- Mobile layout checked at 390px.
- Deployment and GSC live URL inspection remain follow-up work after release.
