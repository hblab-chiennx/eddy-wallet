<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Eddy Wallet frontend

Next.js (App Router) + TypeScript, client-only per the README's confirmed v1 scope (no backend). See `PLAN.md` for the approved architecture and `README.md`'s "Frontend implementation" section for project layout and local dev commands.

- Design system: `design-system/` is reference-only (tokens, 27 source components, icons, guidelines, `ui_kits/` demo apps). The app never imports from it directly — `src/components/ds/` is the TypeScript port actually used by screens.
- All wallet state flows through `src/lib/store.tsx`'s `FamilyProvider` (localStorage-backed). Don't add new local state for ledger/balance/loan/lesson data in screen components — extend the store's actions instead.
- The typed backend boundary is `src/lib/api.ts` (`WalletBackend` interface). No implementation ships in v1; do not add real network calls or backend infrastructure without an explicit ask, per the README's v1 scope.
- Responsive layout rules (Child Mode: single column capped at `--kid-max`; Parent Mode: sidebar + grid capped at `--page-max`, collapsing at 840px) come from `design-system/guidelines/space-layout.html` and are already implemented in `src/components/shells/`.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
