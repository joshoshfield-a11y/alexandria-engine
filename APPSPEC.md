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
