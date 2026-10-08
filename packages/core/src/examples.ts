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
      'Oversight as measurement discipline: define what is being observed, with what ' +
      'instrument, and how the act of observing alters the reading. The observer effect ' +
      'stated as a procedural check — account for the instrument before trusting the data.',
  },
  {
    axiomId: 1,
    axiomName: 'Oversight',
    axiomGlyph: '⊙',
    pillarId: 5,
    pillarName: 'Cognitive Framing',
    reading:
      'Oversight as an attention audit: which information is being selected for ' +
      'processing, by what criteria, and what is being filtered out. The selection ' +
      'criteria themselves become the object of inspection — who chose them, and ' +
      'what do they exclude by design.',
  },
  {
    axiomId: 1,
    axiomName: 'Oversight',
    axiomGlyph: '⊙',
    pillarId: 12,
    pillarName: 'Safeguards & Drift Detection',
    reading:
      'Oversight as a monitoring function: integrity metrics defined in advance, ' +
      'sampled on a schedule, with thresholds that trigger corrective action. The ' +
      'question is always what the metrics miss — no dashboard watches itself.',
  },
];
