# royal-games-ui-demo

Next.js docs site for @objectifthunes/royal-games-ui. Independent repository —
no workspace, no monorepo, no cross-repo imports; the package is consumed from
npm like any dependency.

- Static export (`output: "export"`); GitHub Pages via the pages.yml workflow
  with `basePath` set only when `GITHUB_ACTIONS=true`.
- Page registry lives in `src/components/exports.ts`; every docs page is a
  server `page.tsx` (code strings + notes) plus a client demo.
- Full screens in `src/examples/screens.tsx` are composed exclusively from
  package components — if a screen needs local CSS, the package is missing
  something; fix the package.
