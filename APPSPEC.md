# Alexandria Engine — App Build Spec

The formal library is **already built and tested** at `packages/core`
(TypeScript, zero dependencies; compiled output in `packages/core/dist`).
**Import it — do not reimplement the data or engine.**

## Core API (all exported from the package index)

- `runSweep({topic, strategy: 'spread'|'pillar'|'axiom'|'full', count?, seed?, pillarId?, axiomId?, moveIndex?})`
  → `{topic, strategy, lensIds, readings, redTeam}`
  - A reading: `{lens: {id /* "P01-A01" */, pillar: {id,name,lens,moves}, axiom: {id,glyph,name,meaning,pillar,asks}}, move, question, shadowName, shadowArt, counter}`
  - `redTeam`: `[{axiom, shadow: {axiomId,name,art,provenance}, probe}]`
- Data tables: `AXIOMS` (72), `PERCEPTION_PILLARS` (13), `SHADOWS` (72), `CHANTS` (21)
- Helpers: `allLenses()` (936), `drawSpread(count, seed)`, `lensesForPillar(id)`,
  `lensesForAxiom(id)`, `getLens(pillarId, axiomId)`, `formatReading(reading)`,
  `compose` / `renderCompound` / `parseCompound` / `invertAxiom` / `applyLens`

## Views to build

1. **Sweep Runner** — topic input + strategy picker (spread of 7 / full pillar
   sweep / single-axiom sweep). Each reading renders as a card: lens id,
   pillar × axiom, the composed question, an editable notes textarea per card
   (where the user's thinking gets captured), and the shadow counter-probe.
   Sessions save server-side with notes.
2. **Red Team** — topic input; runs the Nocturna probes (all 72 or a chosen
   subset); each probe a card with a notes field. Saveable.
3. **Ontology Browser** — the 72 axioms grouped by their four pillars (glyph,
   name, meaning, the question each asks); the 13 perception pillars (name,
   lens function, moves); the 72 shadows each paired with its axiom, with the
   4 `unrecovered`/`reconstructed` provenance flags shown honestly; the 21 chants.
4. **Sessions** — history of saved sweeps and red-teams with notes, persisted
   in the app's database, viewable and editable.

## Framing

Present the Engine as a **thinking instrument** — structured
perspective-taking and red-teaming. No metaphysical claims, no "calibration"
or "activation" language. The engine is deterministic: same inputs give the
same outputs — say so in the UI.

## Grounded register (core 0.3.0)

All user-facing names are plain language. The mythic Codex names survive only
as `codexName` fields (provenance), never as primary labels. UI rules:
- Operators, frames, and failure modes display their plain `name`, never the
  Codex name. No "Vigil Flame" / "Nocturna" / "Grimoire" in the chrome.
- The red-team section is labeled "Red Team" or "Failure Modes", never
  "Nocturna".
- The 21 chants are archival data, not engine components — do not surface them
  in the UI.
- Glyphs may appear as compact symbols next to the plain name, but the plain
  name is always the primary identity.
- Keep the existing honesty: deterministic engine, questions not revelations.

## v0.2 additions (core 0.2.0 — already in packages/core)

- **Positional spreads** (`spreads.ts`): `SPREADS` = Triad (3: Root/Force/Outcome),
  Cross (5: Situation/Challenge/Root/Guidance/Outcome), Council (7:
  Heart/Head/Hand/Shadow/Ally/Obstacle/Horizon). `runSpread(topic, spreadId,
  seed?, moveIndex?)` → `{topic, spread, seed, readings: PositionalReading[]
  (each with `position: {name, brief}`), redTeam}`. Add a spread picker to the
  Sweep Runner alongside the existing strategies.
- **Session export** (`export.ts`): `sweepToMarkdown(result, notes?)` and
  `spreadToMarkdown(result, notes?)` render a full session (readings, shadow
  counters, user notes, red-team) as Markdown. Add an Export button on saved
  sessions producing a downloadable/copyable .md.
- **Worked examples** (`examples.ts`): `WORKED_EXAMPLES` — the three canonical
  Vigil Flame readings (Harmonic Physics / Axiomatic Neuroscience / Guardian
  Override) from the source spec §2.2. Add a "See a worked example" entry point
  that walks through one before the user's first sweep.
