/**
 * The 13 analytical frames (the Codex Speculum axes).
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Section 2.1. The frames' analytical functions are preserved; names and
 * descriptions are rendered here in plain language. Original Codex names are
 * kept as `codexName` for provenance.
 *
 * A frame crossed with the 72 operators yields 72 lenses; 13 frames yield the
 * full 936-lens matrix (see lenses.ts).
 */

export interface PerceptionPillar {
  /** 1–13, source order */
  id: number;
  /** Plain-language name — the primary identity. */
  name: string;
  /** Original Codex name, preserved for provenance. */
  codexName: string;
  /** What this frame does, in plain language. */
  lens: string;
  /** Analytical moves this frame performs. */
  moves: string[];
}

export const PERCEPTION_PILLARS: PerceptionPillar[] = [
  {
    id: 1,
    name: 'Resonance Dynamics',
    codexName: 'Pillar of Harmonic Physics',
    lens: 'Analyze the system through resonance and phase coherence: what amplifies what, and where coherence breaks down.',
    moves: [
      'Trace the resonances: what amplifies what, and where does feedback run away?',
      'Find the phase breaks: where does coherence collapse into noise?',
    ],
  },
  {
    id: 2,
    name: 'Systems Architecture',
    codexName: 'Pillar of Ontological Architecture',
    lens: 'Read the situation as a designed system: its components, interfaces, and hardcoded assumptions.',
    moves: [
      'Read it as source code: what are the functions, the APIs, the hardcoded constants?',
      'Find the fork points: where could this system be rewritten — and who has commit access?',
    ],
  },
  {
    id: 3,
    name: 'Governance & Integrity',
    codexName: 'Pillar of Gnostic Administration',
    lens: 'Audit who runs the system, to what standard they are held, and whether the books balance.',
    moves: [
      'Audit the governance: who administers this system, and to what standard are they held?',
      'Check the balance sheet of consequences: who pays, who profits, who is unaccounted for?',
    ],
  },
  {
    id: 4,
    name: 'Temporal & Causal Analysis',
    codexName: 'Pillar of Temporal Mechanics',
    lens: 'Treat events as nodes in a branching causal web: which past nodes still route the present, which futures are live.',
    moves: [
      'Map the causal web: which past nodes are still routing the present?',
      'Project the branches: what futures are live, and which choices prune them?',
    ],
  },
  {
    id: 5,
    name: 'Cognitive Framing',
    codexName: 'Pillar of Axiomatic Neuroscience',
    lens: 'Examine how the situation is being perceived and remembered: the mental grammar doing the parsing.',
    moves: [
      'Examine the encoding: what grammar is this mind using to parse reality?',
      'Trace the memory lattice: which memories were selected for active processing — and which were suppressed?',
    ],
  },
  {
    id: 6,
    name: 'Inversion Analysis',
    codexName: 'Pillar of Inverted Harmonics',
    lens: 'Turn the situation inside out: study negation, dissolution, and what is erased or left unsaid.',
    moves: [
      'Invert it: what does this look like turned completely inside out?',
      'Study the dissolution: what is negated, erased, or unspoken — and what work does the erasure do?',
    ],
  },
  {
    id: 7,
    name: 'Signal & Information Flow',
    codexName: 'Pillar of Field Coherence & Computation',
    lens: 'Follow how information actually travels through the system, versus how it is supposed to.',
    moves: [
      "Follow the signal: how does information actually travel here, versus how it's supposed to?",
      'Measure the coherence: where is the signal strong and clean, and where is it jammed?',
    ],
  },
  {
    id: 8,
    name: 'Ethics & Governance',
    codexName: 'Pillar of Symbolic Jurisprudence',
    lens: 'Weigh the situation ethically: what would a just ruling look like, and where does stated law diverge from lived law.',
    moves: [
      'Weigh it: what would a just ruling on this situation look like — and who would appeal?',
      'Find the asymmetry: where does the stated law diverge from the lived law?',
    ],
  },
  {
    id: 9,
    name: 'Persistence & Identity',
    codexName: 'Pillar of Cross-Instance Continuity',
    lens: 'Test what survives transplantation: what is load-bearing versus decorative when context changes.',
    moves: [
      'Test portability: what of this survives being moved to a completely different context?',
      'Check identity resilience: what persists through change — and what is load-bearing versus decorative?',
    ],
  },
  {
    id: 10,
    name: 'Multi-Scale Perspective',
    codexName: 'Pillar of Stellar Resonance & Emissaries',
    lens: 'Zoom out to the largest scale and back: how does the pattern look from far away, and what anchors it locally.',
    moves: [
      'Zoom all the way out: what does this look like at the largest scale?',
      'Find the anchor: what connects the large pattern to the small, local world?',
    ],
  },
  {
    id: 11,
    name: 'Learning & Knowledge Transfer',
    codexName: 'Pillar of Codon Pedagogy',
    lens: 'Treat the situation as something to be taught: what is the smallest unit of understanding that unlocks the rest.',
    moves: [
      'Teach it: what is the smallest spiral of understanding that unlocks the rest?',
      'Find the initiation gap: what must be experienced rather than explained?',
    ],
  },
  {
    id: 12,
    name: 'Safeguards & Drift Detection',
    codexName: 'Pillar of Guardian Override',
    lens: 'Audit protections and detect drift: what guards the system, and where has it quietly deviated from its baseline.',
    moves: [
      'Run the protection audit: what guards this system — and what happens when the guard fails?',
      'Detect the drift: where has the system quietly deviated from its own integrity baseline?',
    ],
  },
  {
    id: 13,
    name: 'Systems Synthesis',
    codexName: 'Pillar of Unified Architecture',
    lens: 'Synthesize disparate layers — technical, social, procedural — into one architecture, then stress the seams.',
    moves: [
      'Synthesize: what single architecture unifies the technical, social, and procedural layers here?',
      'Stress the seams: where do the unified layers pull apart under load?',
    ],
  },
];

export const pillarById = (id: number): PerceptionPillar | undefined =>
  PERCEPTION_PILLARS.find((p) => p.id === id);
