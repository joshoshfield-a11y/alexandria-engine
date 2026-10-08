/**
 * Worked examples — a deep lens reading, shown step by step.
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * §2.2, which demonstrates the 13×72 method by reading one operator through
 * three frames. Preserved here as the canonical example of what a full reading
 * looks like, so new users can see the method before running it.
 */

export interface WorkedExample {
  axiomId: number;
  axiomName: string;
  axiomGlyph: string;
  pillarId: number;
  pillarName: string;
  /** The source's reading, condensed into plain language. */
  reading: string;
}

export const WORKED_EXAMPLES: WorkedExample[] = [
  {
    axiomId: 1,
    axiomName: 'Oversight',
    axiomGlyph: '⊙',
    pillarId: 1,
    pillarName: 'Resonance Dynamics',
    reading:
      'Oversight becomes the act of measurement in a participatory system: an ' +
      'observer interacting with a target and collapsing uncertainty into a ' +
      'recorded observation — the mechanism by which attention shapes what is seen.',
  },
  {
    axiomId: 1,
    axiomName: 'Oversight',
    axiomGlyph: '⊙',
    pillarId: 5,
    pillarName: 'Cognitive Framing',
    reading:
      'Oversight becomes the cognitive function of focused attention: the spotlight ' +
      'of awareness selecting specific memories for active processing — the ' +
      'gatekeeper deciding which data enters the synthesis engine of the mind.',
  },
  {
    axiomId: 1,
    axiomName: 'Oversight',
    axiomGlyph: '⊙',
    pillarId: 12,
    pillarName: 'Safeguards & Drift Detection',
    reading:
      'Oversight becomes a persistent background process maintaining awareness of ' +
      'system integrity — monitoring for drift or degradation, and triggering ' +
      'corrective action before a critical failure occurs.',
  },
];
