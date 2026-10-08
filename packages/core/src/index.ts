/**
 * @alexandria/core — the formal core of the Alexandria Engine.
 *
 * A working implementation of the Alexandria Codex as a thinking instrument:
 *  - 72 analytical operators in plain language (data/axioms.ts; original Codex names kept as codexName)
 *  - 13 analytical frames (data/pillars.ts)
 *  - the 936-lens morphological matrix + reading engine (lenses.ts)
 *  - the failure-mode taxonomy as a red-team appendix (data/nocturna.ts, redteam.ts)
 *  - the term algebra: composition, polarity, domains, lens application (algebra.ts)
 *  - the sweep engine: perspective sweeps on any topic (sweep.ts)
 *  - the 21 chants as archival data, not engine components (data/chants.ts)
 *
 * Epistemic stance, stated once: this library implements the Codex's *formal*
 * structure — the parts that survive translation into mathematics and
 * engineering practice. It makes no metaphysical claims. A lens reading is a
 * structured question, not a revelation.
 */

export * from './data/axioms.js';
export * from './data/pillars.js';
export * from './data/nocturna.js';
export * from './data/chants.js';
export * from './algebra.js';
export * from './lenses.js';
export * from './sweep.js';
export * from './spreads.js';
export * from './export.js';
export * from './examples.js';
export * from './redteam.js';
