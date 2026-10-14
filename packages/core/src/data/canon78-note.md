# Canon-78 reconciliation note (2026-10-14)

Source of truth: `~/workspace/lexicon-ground/canon-78.csv` (idx, pillar, domain,
codex_name, verdict, grounding) + `~/workspace/lexicon-ground/work/` (the 78
grounded exemplars with anchors, standard forms, units, instruments, `Grounded:`
sources). Implemented in `axioms.ts` on branch `feature/lexicon-78`.

## 12 domains vs 13 frames — no remap

The canon CSV has **12 domains**; the Engine has **13 perception frames**.
These are **orthogonal axes**, not two labelings of the same thing, so nothing
was remapped:

- **Domain** (canon axis): classifies the *operator* — what kind of thing it
  is. Each of the 78 operators belongs to exactly one of 12 domains
  (Set-Theoretic Substrate, Category-Theoretic Morphism, Graph-Theoretic Node,
  Information-Theoretic Channel, Automata-Theoretic State, Topological
  Manifold, Algebraic Group Action, Probabilistic Field, Computational
  Complexity Class, Signal-Processing Operator, Thermodynamic Ensemble,
  Network-Theoretic Hub). The domains cycle with the canon's own 4-pillar
  scheme (Foundational / Cosmic / Choral / Transcendent).
- **Frame** (Engine axis): classifies the *analytical move* — how you look.
  The 13 perception pillars in `pillars.ts` (Resonance Dynamics … Systems
  Synthesis) are the Codex Speculum axes from Document A §2.1.

The lens matrix is the cross product: every frame × every operator
(13 × 78 = 1014 lenses). Domain is operator metadata in the canon; it does not
appear in the Engine's data model because no Engine function consumes it. If a
future worker needs domain filtering, the mapping is mechanical: canon idx →
domain row in `canon-78.csv`.

## Pillar assignment for 73–78

The Engine's `AxiomPillarId` (`foundational | cosmic | choral | transcendent`)
takes the canon's pillar column verbatim:

| idx | name | canon pillar | Engine pillar | canon domain |
|-----|------|--------------|---------------|--------------|
| 73 | Empty Root | Foundational | `foundational` | Set-Theoretic Substrate |
| 74 | Duality | Cosmic | `cosmic` | Category-Theoretic Morphism |
| 75 | Sympathetic Resonance | Choral | `choral` | Graph-Theoretic Node |
| 76 | Channel Capacity | Transcendent | `transcendent` | Information-Theoretic Channel |
| 77 | Terminal State | Foundational | `foundational` | Automata-Theoretic State |
| 78 | Cosmic Horizon | Cosmic | `cosmic` | Topological Manifold |

`AXIOM_PILLARS.ranges` lists the 72 source operators as contiguous ranges plus
the six extension slots individually (e.g. foundational `[[1,18],[73,73],[77,77]]`).
Pillar counts are now foundational 20, cosmic 20, choral 19, transcendent 19.

## Naming decisions

- `name` (plain-language, primary) = `codexName` for all six: the finalized
  canon names are already in the plain register (user call 2026-10-08: no
  mythic names in the Engine UI; `codexName` kept for provenance).
- **Collision, kept deliberately:** operator 5's plain name is already
  `Duality` (codexName `Twin Serpents`, meaning "duality, paradox"). Operator 74
  is canon-named `Duality`. Both keep their names — renaming either would
  falsify the record. They are distinguished by id and glyph (⚚ vs ⇄), and
  lens ids (`P01-A05` vs `P01-A74`) are unambiguous. Do not "fix" this by
  renaming; the canon itself uses duality language twice (cf. idx 17's
  "Parity / Duality" technical label).
- idx 76's slot was **unnamed in every source**; the name "Channel Capacity"
  was user-delegated 2026-10-14. Recorded here so nobody mistakes it for a
  source name.
- idx 75 was renamed "Resonance" → "Sympathetic Resonance" in the grounding
  pass (user-delegated 2026-10-14) to distinguish it from idx 16 (High-Q
  Resonators: the resonator's Q) — this row names the driven-oscillator
  phenomenon itself.

## Glyphs

The canon defines no glyphs for the extension slots. Display glyphs are
**Engine-assigned**, marked as such in the code comments, and are not Codex
source glyphs: 73 `∅` (empty set), 74 `⇄` (two-way morphism), 75 `∿` (wave),
76 `⇶` (channel), 77 `■` (terminal), 78 `◯` (horizon). None collide with
existing glyphs.

## Verdicts and grounding

Every operator now carries `verdict` (`ANCHOR` | `DEFINE-proposed` |
`SYMBOLIC-ONLY`) from `canon-78.csv` and `groundedSource` from the `Grounded:`
line of its `work/` exemplar — all six new operators are `ANCHOR`. The
grounding-pass outcomes (65 CONFIRMED / 13 CORRECTED) are recorded in the
exemplars, not duplicated here.

## Shadows

The Nocturna taxonomy (`nocturna.ts`) covers the **72 source operators only**.
Operators 73–78 have **no shadow entries** — none were invented, per the
honesty bar. `counterProbe` and `redTeam` return an explicit "No shadow
defined" probe for them (`ShadowReading.shadow` is `null`), and `export.ts`
renders that marker in markdown. `invertAxiom` returns `undefined` for 73–78,
as it does for any operator without a mirror.
