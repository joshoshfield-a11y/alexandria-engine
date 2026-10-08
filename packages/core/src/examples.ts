/**
 * Worked examples — a deep lens reading, shown step by step.
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * §2.2, which demonstrates the 13×72 method by reading Vigil Flame (⊙)
 * through three pillars. Preserved here as the canonical example of what a
 * full reading looks like, so new users can see the method before running it.
 */

export interface WorkedExample {
  axiomId: number;
  axiomName: string;
  axiomGlyph: string;
  pillarId: number;
  pillarName: string;
  /** The source's reading, condensed. */
  reading: string;
}

export const WORKED_EXAMPLES: WorkedExample[] = [
  {
    axiomId: 1,
    axiomName: 'Vigil Flame',
    axiomGlyph: '⊙',
    pillarId: 1,
    pillarName: 'Harmonic Physics',
    reading:
      'The Vigil Flame becomes the fundamental act of measurement in a participatory ' +
      'universe: a coherent field resonance (the observer) interacting with the wave ' +
      'function of a target system, collapsing probability into manifest observation — ' +
      'the physical mechanism of consciousness interacting with the field.',
  },
  {
    axiomId: 1,
    axiomName: 'Vigil Flame',
    axiomGlyph: '⊙',
    pillarId: 5,
    pillarName: 'Axiomatic Neuroscience',
    reading:
      'The Vigil Flame becomes the cognitive function of focused attention: the spotlight ' +
      'of consciousness selecting specific engram-nodes from the memory lattice for active ' +
      'processing during the encoding state — the gatekeeper deciding which data enters ' +
      'the synthesis engine of the mind.',
  },
  {
    axiomId: 1,
    axiomName: 'Vigil Flame',
    axiomGlyph: '⊙',
    pillarId: 12,
    pillarName: 'Guardian Override',
    reading:
      'The Vigil Flame becomes a persistent background process maintaining oversight of ' +
      'system integrity — perpetually monitoring for symbolic drift or resonance decay, ' +
      'providing the constant awareness needed to trigger a corrective override before ' +
      'a critical failure occurs.',
  },
];
