# Eddy Wallet — Design System

**Eddy Wallet** is a responsive web app where a family shares one virtual wallet for a child's allowance. Parents deposit, set rules and approve; children see their balance, read their history, and learn money basics through short lessons. **No real money ever moves** — every balance is virtual and educational.

Two roles share one wallet on one shared family device:

- **Child Mode** — balance, activity feed, loans (read-only), lessons. Unlocked with a 4-digit PIN, not a login.
- **Parent Mode** — deposits and withdrawals, allowance rules, loans and repayments, a read-only lesson monitor, and a Parent-Only Actions screen (approval queue, account controls). Every parent privilege is visibly flagged, in both modes.

v1 is client-only: a static frontend with the ledger in `localStorage`. No backend, no sync, no recovery.

## Sources

- **GitHub:** <https://github.com/hblab-chiennx/eddy-wallet> (branch `main`) — at import time the repo contained **only `README.md`**: a product brief with roles, v1 architecture, the v1 screen list, and nine open product questions. **There is no source code, no Figma file, no existing UI, and no logo.** Explore the repo yourself for later changes to the brief; `github.md` records the sync state.
- **Icons:** [Lucide](https://github.com/lucide-icons/lucide) (ISC) — 50 glyphs copied into `assets/icons/`. A **substitution**: the source project defines no icon set.
- **Fonts:** Google Fonts (Baloo 2, Nunito, JetBrains Mono) — also a **substitution**; no brand fonts were supplied.

Because there was no existing design, **this system is an original proposal**, not a recreation. Everything visual here is a design decision open to challenge. Screens where the repo README says a decision is still open carry a visible `Undecided` badge instead of a made-up answer.

### No logo
No logo or brand mark was provided, and none was invented. Wherever a mark belongs, the name is set in type: lowercase, one word, `eddy` in ink/white + `wallet` in the accent colour (see the *Wordmark (placeholder)* card). **Replace this with real artwork when it exists.**

## Content fundamentals

Eddy Wallet writes in **two registers off the same facts**. Never mix them.

**To the child** — second person, present tense, short sentences, concrete numbers. Warm but not babyish; a good 8-year-old reader should never need help.

- "You've got $42.50"
- "Allowance lands Sunday — 3 days to go."
- "Money that grows while it waits." (lesson blurb)
- "That's not it. Try again!" (wrong PIN — encouraging, never an error code)
- "Ask to spend" (not "Request withdrawal")

**To the parent** — plain, specific, consequence-first. Calm and factual, never salesy, never legalistic.

- "Mia's balance: $42.50"
- "2 requests waiting for approval."
- "Withdrawing $5 leaves $37.50. Mia will see it."
- "Virtual balance only — no real money moves."
- "v1 data lives in this browser only. No sync, no recovery." (we state limits plainly rather than hiding them)

Rules:
- **"You" for whoever is looking; name the other person.** To Mia: "Dad gets a note." To Dad: "Mia asked."
- **Sentence case everywhere.** Uppercase only in `.eddy-label` eyebrows and system badges — never in kid copy, where it reads as shouting.
- **No jargon in Child Mode.** "Money in / money out", not "credit / debit". "Ask to spend", not "authorise". Financial terms appear only inside a lesson, where they're defined ("That extra is called interest").
- **Errors state the fix**, not the failure: "PINs are 4 numbers", not "Invalid input".
- **No shaming.** An overdue loan shows status + next step. Never "You're late" or a red scold.
- **No emoji, anywhere.** Personality comes from type, colour and the icon set. (Points/rewards use the star glyph, not ⭐.)
- **Exclamation marks**: at most one per screen, in Child Mode only, for a genuine win.
- **Money is always written with two decimals and a `$`**: "$5.00", never "5 dollars".
- **Transparency copy is a feature.** Every parent action tells the parent what the child will see.

## Visual foundations

**Colour.** Warm, high-contrast, and semantically strict. Eddy Teal (`--teal-700 #12897A`) is the brand and every primary action. **Sunbeam** yellow is celebration and rewards only. **Berry** is money leaving. **Sky** is reserved — *Sky means parent-only and nothing else*, so a blue lock chip is instantly legible to a child. **Grape** is learning. Money direction is carried by teal/berry rather than green/red: this is a teaching tool, not a trading app, and a balance is rendered in neutral ink because a balance isn't a direction. Backgrounds: a warm cream app canvas (`--cream-200 #FFF6E9`) with pure-white cards — never a grey dashboard. Max two background colours per screen.

**Type.** Three faces. **Baloo 2** (display) is rounded and chunky — headings and kid-facing statements, 600–800 weight, `-0.015em` tracking. **Nunito** (body) has a tall x-height and rounded terminals: friendly and easy for new readers, 15px/1.55 default. **JetBrains Mono** with `tabular-nums` for **every** dollar figure, so ledger columns align and numbers feel precise. Money hero is 48px; kid-facing text never drops below 13px.

**Imagery.** No photography and no illustration set was provided, so the system leans on **oversized icon watermarks** instead: the `piggy-bank` glyph sits at 150px and ~8% opacity in the bottom-right of the balance hero. That's the only decorative graphic. Do not invent illustrations — request them.

**Backgrounds, texture, gradients.** Flat colour only. **No gradients anywhere** — not in buttons, not in heroes. No noise, no patterns, no full-bleed imagery. The warmth comes from the cream canvas, not from effects.

**Borders.** Two weights. `1px --border-subtle` outlines parent-mode cards. `2px` chunky borders (`--border-strong`, or a darker shade of the fill) go on anything pressable or kid-facing — buttons, inputs, PIN keys, lesson cards. A 2px border plus a hard shadow is the "sticker" signature.

**Shadows — two systems.** *Sticker*: `0 3px 0` hard offset, no blur, on everything a child presses. *Ambient*: `--shadow-card` / `--shadow-raised`, soft and low, on parent surfaces, dialogs and toasts. Inner shadows are unused except `--shadow-inset` for optional gloss. No coloured glows.

**Corner radii.** Nothing is square. 6px on checkboxes, 10–14px on dense controls and buttons, 20px on parent cards, 28px on child cards and lesson tiles, 36px on the balance hero, pill on badges and filters. Larger radius = more kid-facing.

**Cards.** White fill, 1px subtle border, soft shadow, 20px padding, `--radius-lg` in Parent Mode. Child Mode swaps in `sticker` shadow and `--radius-xl`. Tinted variants: `brand` (teal-100) for child emphasis, `parent` (sky-100) for parent-only blocks, `sunken` (cream-300) for asides, `inverse` (teal-900) for a dark hero.

**Press and hover states.** Pressable things **move**: sticker shadow collapses `3px → 1px` and the element shifts `translateY(2px)` in 90ms — physical, satisfying, obvious on a touch screen. Hover is a background tint (`--ink-100` on plain icon buttons), never an opacity fade and never a scale-up. Inputs thicken their border to brand teal and add a 3px `--ring-focus` halo. Disabled = 45% opacity + `not-allowed`. Locked lesson cards lose their shadow entirely and go flat — visibly not pressable.

**Animation.** Short and purposeful: 90ms for press, 160ms for hover/tint, 240ms for toggles, 420ms for progress-bar fills. `--ease-out` almost everywhere. **`--ease-bounce` (one springy overshoot) is Child-Mode-only** — switch knobs, PIN dots, celebration toasts. **Parent Mode never bounces.** No looping ambient motion, no parallax, no confetti animation. Every duration token collapses to 0 under `prefers-reduced-motion`.

**Transparency and blur.** Used exactly twice: the dialog scrim (`rgba(6,49,43,0.42)` + `blur(3px)`) and the icon watermark. Text is never set on a translucent fill — protection capsules are solid white pills instead of gradient scrims.

**Layout.** Child Mode is a single 480px column (`--kid-max`) with 20px gutters, a sticky TopBar and a fixed bottom TabBar — thumb-reachable, one decision per screen. Parent Mode is a 1120px max grid (`--page-max`) with a 248px persistent sidebar, 32px gutters, and auto-fit stat tiles. Spacing is a 4px scale; card padding 20px, section gap 24–32px. Tap targets never go below 48px in Child Mode (44px for icon buttons); 36px dense controls are Parent-Mode-desktop only.

## Iconography

- **Set:** [Lucide](https://lucide.dev), stroke-only, **2px**, round caps and joins, 24px viewBox — the rounded geometry matches Baloo 2's terminals. 50 glyphs are copied as raw SVG into `assets/icons/` and inlined by `components/core/iconPaths.js`.
- **A flagged substitution.** The source repo ships **no icons, icon font, or sprite**. Lucide was chosen as the nearest rounded, open-licensed (ISC) match. Swap it if the brand adopts a real set.
- **Sizes:** 16px inline with text, 20px in buttons and ledger rows, 24px in nav, 28–40px in feature tiles, 150px as the hero watermark.
- **Colour:** `currentColor` by default. Semantic glyphs take their family's ink: `lock`/`shield-check` in Sky (parent-only — *always*), `graduation-cap`/`lightbulb` in Grape, `hand-coins`/`percent` in Teal, `arrow-up-right` in Berry.
- **Meaning is fixed:** `piggy-bank` = the wallet/brand, `hand-coins` = allowance and loans, `arrow-down-left`/`arrow-up-right` = money in/out, `percent` = interest, `graduation-cap` = lessons, `lock` = parent-only, `party-popper` = a win. Don't re-map them.
- **No emoji as UI. No unicode glyphs as icons.** The only non-icon symbols used are `$` and the true minus sign `−` (U+2212) in money readouts. Every icon-only control carries an `aria-label`.
- Never hand-draw an SVG for this brand: add the Lucide file to `assets/icons/` and regenerate `iconPaths.js`.

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | Global entry — `@import`s only. Link this one file. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `base.css` |
| `guidelines/` | 19 foundation specimen cards (Colors, Type, Spacing, Shape, Brand) |
| `components/` | React primitives, grouped below |
| `ui_kits/child_mode/` | Child Mode click-through app — see its README |
| `ui_kits/parent_mode/` | Parent Mode dashboard — see its README |
| `assets/icons/` | 50 Lucide SVGs |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills entry point |
| `github.md` | Upstream repo association + screen map |

### Components

Each component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `@dsCard` HTML per directory.

**`components/core/`** — `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `SectionHeading`
**`components/forms/`** — `Input`, `AmountField`, `Select`, `Checkbox`, `Switch`, `PinPad`
**`components/feedback/`** — `Dialog`, `Toast`, `ProgressBar`, `EmptyState`
**`components/navigation/`** — `TopBar`, `Tabs`, `TabBar`
**`components/wallet/`** — `MoneyAmount`, `BalanceCard`, `ActivityRow`, `LoanCard`, `LessonCard`, `ParentOnlyChip`, `StatTile`

#### Intentional additions
No source defined a component inventory, so the standard primitive set was authored, plus six domain components the product brief requires:

- `MoneyAmount` — one formatter for every dollar figure; prevents drift in sign, colour and decimals.
- `BalanceCard` — the balance is the anchor of both Home screens.
- `ActivityRow` — the brief calls out "a design convention for a single Recent Activity entry across very different event types" as an open question; this is the proposed answer (one row shape, glyph tint carries the type).
- `LoanCard`, `LessonCard` — loans and lessons are first-class v1 surfaces.
- `ParentOnlyChip` — the brief requires every parent-only control be visually flagged wherever it appears.
- `PinPad` — the shared-device child unlock has no standard-primitive equivalent.

`Tooltip`, `Avatar` and `Accordion` were deliberately **not** built: nothing in the v1 screen list needs them.
