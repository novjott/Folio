# Development foundation

Folio currently implements Milestone 1 only. The application is a React and
TypeScript client built with Vite. It has no server, credentials or environment
variables to configure.

## Structure

```text
src/
  app/                  Application composition and integration tests
  components/layout/    Responsive application shell
  styles/               Shared styles and responsive rules
  main.tsx              React entry point
tests/
  setup.ts              Shared component test setup and cleanup
assets/                 Existing project branding
docs/                   Specifications, roadmap and decisions
.github/workflows/      Automated checks
```

Keep reusable layout components separate from application composition. Add
feature directories when their milestones begin; avoid introducing empty service
layers or speculative data models. Future editor and assignment components must
use local storage interfaces rather than depend directly on cloud requests, as
described in the technical specification.

## Verification

Run `npm run check` before submitting changes. This includes strict TypeScript
checking through the production build. Component tests use Vitest, jsdom and
Testing Library, with explicit cleanup between tests. Tests cover semantic
landmarks, development status and navigation interactions.

Use `npm run dev` or build and run `npm run preview` to inspect the layout in a
browser. The sidebar collapses below 700 CSS pixels and the feature cards stack
below 1100 CSS pixels. Check narrow mobile, tablet and desktop widths, keyboard
navigation, visible focus and the skip link. jsdom does not verify CSS layout.

## Current limits

The shell does not create or store student content. Notes, drawing, assignment
tracking, authentication, synchronisation, PWA installation and offline caching
belong to later milestones. No supported-platform claim is made until real-device
testing is completed. The existing storage/sync ADR file is empty; the technical
specification remains the documented architectural direction for those features.

GitHub Actions execution must be verified after the changes are uploaded. Local
checks run the same validation command, but do not prove a hosted CI run passed.
