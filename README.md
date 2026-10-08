# The Alexandria Engine

A formal, working implementation of the Alexandria Codex as a **thinking instrument** —
not a metaphysical claim.

## What's real here

The Codex's honest core, rebuilt as software:

- **72 primal axioms** as typed operators, each carrying the question it asks
- **13 perception pillars**, each with analytical moves it performs
- **The 936-lens matrix** — every pillar × every axiom, a morphological matrix
  (the same method family as Zwicky morphological analysis and TRIZ)
- **The Nocturna** as a red-team appendix: every constructive operator paired
  with its abuse form (the FMEA / MITRE ATT&CK role)
- **A term algebra**: glyph composition, polarity (+/−), domain modifiers (°/•),
  lens application L(g)

## What it does

`runSweep({topic, strategy})` runs a perspective sweep on any topic: a spread
of lenses, a full pillar sweep (72 lenses), or a single-axiom sweep (13 lenses).
Each lens produces a composed analytical question — pillar move + axiom
interrogative — plus the Nocturna counter-probe for the same ground. Every
sweep also runs the red-team over the axioms involved.

The engine is deterministic: same inputs, same outputs. A lens reading is a
structured question, not a revelation.

## Epistemic stance

This library implements the Codex's *formal* structure — the parts that survive
translation into mathematics and engineering practice. Predictive-superiority
claims, "write access," and non-local effects are **not** implemented and are
not claimed. Four shadow entries carry honest `unrecovered`/`reconstructed`
provenance flags where the source text was garbled; they are marked, not
papered over.

## Packages

- `packages/core` — `@alexandria/core`: the formal library (data, algebra,
  lens matrix, sweep engine, red-team). 46 tests, `tsc` clean.

## App

The interactive web app (sweep runner, red-team console, ontology browser,
saved sessions) is built on top of `@alexandria/core`. See `APPSPEC.md`.

## Source

Data extracted from "The Alexandria Codex — Symbolic System Specification"
(Document A) and cross-checked against "The Alexandria Framework — A Scientific
Reconstruction" (Document B). The `asks` interrogatives, pillar `moves`, and
probe templates are original to this implementation.
