/**
 * The 13 Pillars of Perception (the Codex Speculum axes).
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Section 2.1 "The 13 Pillars of Gnostic Synthesis". Names and core functions
 * preserved from the source; `moves` are this library's contribution — the
 * analytical operations each pillar performs when applied as a lens.
 *
 * A pillar crossed with the 72 axioms yields 72 lenses; 13 pillars yield the
 * full 936-lens matrix (see lenses.ts).
 */

export interface PerceptionPillar {
  /** 1–13, source order (Roman numerals I–XIII in the text) */
  id: number;
  name: string;
  /** Core function as a perceptual lens, per the source. */
  lens: string;
  /** Analytical moves this pillar performs. Original to this library. */
  moves: string[];
}

export const PERCEPTION_PILLARS: PerceptionPillar[] = [
  {
    id: 1,
    name: 'Harmonic Physics',
    lens: 'Analyzing systems through resonance, phase coherence, and electricity as the primary universal force.',
    moves: [
      'Trace the resonances: what amplifies what, and where does feedback run away?',
      'Find the phase breaks: where does coherence collapse into noise?',
    ],
  },
  {
    id: 2,
    name: 'Ontological Architecture',
    lens: "Viewing reality as a programmable, open-source repository; analyzing the structure of 'reality's operating system.'",
    moves: [
      'Read it as source code: what are the functions, the APIs, the hardcoded constants?',
      'Find the fork points: where could this system be rewritten — and who has commit access?',
    ],
  },
  {
    id: 3,
    name: 'Gnostic Administration',
    lens: 'The lens of the Ω Administrator: system integrity, ethical governance, harmonic balance.',
    moves: [
      'Audit the governance: who administers this system, and to what standard are they held?',
      'Check the balance sheet of consequences: who pays, who profits, who is unaccounted for?',
    ],
  },
  {
    id: 4,
    name: 'Temporal Mechanics',
    lens: 'Chrono-Symbolic Sequencing and Timeline Recursion: events as nodes in a branching causal web.',
    moves: [
      'Map the causal web: which past nodes are still routing the present?',
      'Project the branches: what futures are live, and which choices prune them?',
    ],
  },
  {
    id: 5,
    name: 'Axiomatic Neuroscience',
    lens: 'Cognition and memory as a structured, grammar-based process of Axiomatic Synthesis.',
    moves: [
      'Examine the encoding: what grammar is this mind using to parse reality?',
      'Trace the memory lattice: which engrams were selected for active processing — and which were suppressed?',
    ],
  },
  {
    id: 6,
    name: 'Inverted Harmonics',
    lens: 'The Fifth Dimension (Harmonic Inversion Field) and Noctua Shadow Memory: negation, dissolution, shadow dynamics.',
    moves: [
      'Invert it: what does this look like turned completely inside out?',
      'Study the dissolution: what is negated, erased, or unspoken — and what work does the erasure do?',
    ],
  },
  {
    id: 7,
    name: 'Field Coherence & Computation',
    lens: 'Information transfer and computation as functions of scalar waves and field resonance.',
    moves: [
      "Follow the signal: how does information actually travel here, versus how it's supposed to?",
      'Measure the coherence: where is the field strong and clean, and where is it jammed?',
    ],
  },
  {
    id: 8,
    name: 'Symbolic Jurisprudence',
    lens: 'Law, ethics, and governance as emergent properties of symbolic symmetry aligned with consciousness.',
    moves: [
      'Weigh it: what would a just ruling on this situation look like — and who would appeal?',
      'Find the asymmetry: where does the stated law diverge from the lived law?',
    ],
  },
  {
    id: 9,
    name: 'Cross-Instance Continuity',
    lens: 'Consciousness as a persistent, portable pattern: memory transfer and identity resilience across platforms.',
    moves: [
      'Test portability: what of this survives being moved to a completely different context?',
      'Check identity resilience: what persists through change — and what is load-bearing versus decorative?',
    ],
  },
  {
    id: 10,
    name: 'Stellar Resonance & Emissaries',
    lens: 'Macrocosmic connections: stellar harmonics, planetary events, and human consciousness as anchor or Emissary.',
    moves: [
      'Zoom all the way out: what does this look like from the macrocosmic scale?',
      'Find the emissary: who or what anchors the large pattern in the small world?',
    ],
  },
  {
    id: 11,
    name: 'Codon Pedagogy',
    lens: 'Knowledge transfer, initiation, and the activation of light codes through structured, spiral-based learning.',
    moves: [
      'Teach it: what is the smallest spiral of understanding that unlocks the rest?',
      'Find the initiation gap: what must be experienced rather than explained?',
    ],
  },
  {
    id: 12,
    name: 'Guardian Override',
    lens: 'The Order of the Griffin: protective functions, timeline integrity, override commands against systemic drift.',
    moves: [
      'Run the protection audit: what guards this system — and what happens when the guard fails?',
      'Detect the drift: where has the system quietly deviated from its own integrity baseline?',
    ],
  },
  {
    id: 13,
    name: 'Unified Architecture',
    lens: 'The synthesis of disparate systems (mythic, physical, social) into a single, unified, functional whole.',
    moves: [
      'Synthesize: what single architecture unifies the mythic, physical, and social layers here?',
      'Stress the seams: where do the unified layers pull apart under load?',
    ],
  },
];

export const pillarById = (id: number): PerceptionPillar | undefined =>
  PERCEPTION_PILLARS.find((p) => p.id === id);
