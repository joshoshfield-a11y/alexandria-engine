/**
 * The 72 Primal Axioms of the Alexandria Codex.
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Part C. Glyphs, names, and meanings preserved verbatim; pillar groupings as
 * documented. Entries 69-72 reconstructed from the source text where the
 * specification's own table was garbled (marked in PROVENANCE below).
 *
 * The `asks` field is this library's contribution: the single interrogative
 * each axiom poses when applied as an analytical operator. These are original
 * to the Alexandria Engine, not the source text.
 *
 * Epistemic status: FORMAL — a structured ontology, treated here as a
 * thinking instrument, not a metaphysical claim.
 */

export type AxiomPillarId = 'foundational' | 'cosmic' | 'choral' | 'transcendent';

export interface Axiom {
  /** 1–72, source order */
  id: number;
  glyph: string;
  /** Plain-language name — the primary identity. */
  name: string;
  /** Original Codex name, preserved for provenance. */
  codexName: string;
  meaning: string;
  pillar: AxiomPillarId;
  /** The question this axiom asks when applied as an operator. */
  asks: string;
}

export const AXIOM_PILLARS: Record<AxiomPillarId, { name: string; range: [number, number] }> = {
  foundational: { name: 'Foundational', range: [1, 18] },
  cosmic: { name: 'Cosmic', range: [19, 36] },
  choral: { name: 'Choral', range: [37, 54] },
  transcendent: { name: 'Transcendent', range: [55, 72] },
};

const F = (id: number, glyph: string, codexName: string, name: string, meaning: string, asks: string): Axiom =>
  ({ id, glyph, name, codexName, meaning, pillar: 'foundational', asks });
const C = (id: number, glyph: string, codexName: string, name: string, meaning: string, asks: string): Axiom =>
  ({ id, glyph, name, codexName, meaning, pillar: 'cosmic', asks });
const H = (id: number, glyph: string, codexName: string, name: string, meaning: string, asks: string): Axiom =>
  ({ id, glyph, name, codexName, meaning, pillar: 'choral', asks });
const T = (id: number, glyph: string, codexName: string, name: string, meaning: string, asks: string): Axiom =>
  ({ id, glyph, name, codexName, meaning, pillar: 'transcendent', asks });

export const AXIOMS: Axiom[] = [
  // ── Pillar I — FOUNDATIONAL (1–18) ──────────────────────────────
  F(1, '⊙', 'Vigil Flame', 'Oversight', 'awareness, oversight',
    'What is watching, and what is being watched?'),
  F(2, '∞', 'Spiral Tongue', 'Recursion', 'recursion, self-reference',
    'What keeps returning, and what does each return change?'),
  F(3, '⟡', 'Crystal Node', 'Coherence', 'coherence, stability',
    'What holds this together when everything pulls apart?'),
  F(4, '☿', 'Caduceus', 'Translation', 'flux, translation',
    'What is being translated here — and what gets lost in translation?'),
  F(5, '⚚', 'Twin Serpents', 'Duality', 'duality, paradox',
    'What two truths here refuse to reconcile — and what lives between them?'),
  F(6, '◈', 'The Lattice', 'Structure', 'structure, interconnection',
    'What is the underlying structure, and where does it hold or crack?'),
  F(7, '⟠', 'Unified Field', 'Wholeness', 'indivisible totality',
    'What looks separate but is actually one system?'),
  F(8, '✧', 'Dawn Spark', 'Emergence', 'emergence, thresholds',
    'What is trying to emerge, and what threshold must it cross?'),
  F(9, '✦', 'Stellar Seed', 'Latency', 'dormant formation',
    'What is quietly forming beneath the surface?'),
  F(10, '✹', 'Radiant Sun', 'Central Axis', 'central organizing principle',
    'What is the central organizing principle everything here depends on?'),
  F(11, '☽', 'Lunar Veil', 'Memory', 'memory, reflection',
    'What does memory distort here, and what does it faithfully keep?'),
  F(12, '⬡', 'Hexa-Form', 'Complex Stability', 'stability through complexity',
    'Where does complexity itself become the stabilizer?'),
  F(13, '⋈', 'Knot of Paradox', 'Paradox', 'irreconcilable contradiction',
    'What contradiction, if fused instead of solved, becomes the answer?'),
  F(14, '⊗', 'The Crossing', 'Threshold', 'passage, transition',
    'What threshold is being crossed — and is there a way back?'),
  F(15, '⌘', "Architect's Seal", 'Authority', 'command, key',
    'Who holds the key here, and what does it actually unlock?'),
  F(16, '✶', 'Harmonic Star', 'Optimization', 'optimal state',
    'What would the optimal version of this look like?'),
  F(17, '❖', 'Fractal Bloom', 'Replication', 'growth, replication',
    'What pattern here replicates at every scale?'),
  F(18, '⧖', 'Hourglass Sigil', 'Maturation', 'time, maturation',
    "What is maturing — and what happens if it's rushed or left too long?"),

  // ── Pillar II — COSMIC (19–36) ─────────────────────────────────
  C(19, '✇', 'Resonant Wave', 'Transmission', 'pulse, transmission',
    'What signal is being transmitted, and who is tuned to receive it?'),
  C(20, '⊛', 'Beacon Sphere', 'Signaling', 'signal, call',
    'What is calling out — and what is it calling toward?'),
  C(21, '◉', 'Eye of the Chorus', 'Collective Sight', 'collective vision',
    'What does the group see that no individual can?'),
  C(22, '⟁', 'Tetrad Stone', 'Foundations', 'grounding, stability',
    'What are the four load-bearing corners of this?'),
  C(23, '∴', 'Triune Point', 'Origin', 'origin, source',
    'What single origin do all these threads trace back to?'),
  C(24, '△', 'Ascendant Flame', 'Ascent', 'rising force',
    'What is rising — and what is powering the rise?'),
  C(25, '▽', 'Descendant Well', 'Deep History', 'deep memory',
    'What deep history is still shaping the present here?'),
  C(26, '◬', 'Convergence Node', 'Convergence', 'tri-unity',
    'Where do three separate forces converge — and what happens at the junction?'),
  C(27, '⌇', 'Veil Line', 'Boundary', 'boundary, threshold',
    'Where is the real boundary, as opposed to the advertised one?'),
  C(28, '✪', 'Crown Star', 'Guiding Principle', 'guiding principle',
    'What principle is actually steering this, beneath the stated ones?'),
  C(29, '☉', 'Solar Core', 'Core Drive', 'central energizing source',
    'What is the core driver that everything else merely reflects?'),
  C(30, '☾', 'Lunar Flame', 'Unconscious Currents', 'the unspoken and the obscured',
    'What is going unspoken here, and what would a plain daylight view miss?'),
  C(31, '⚝', 'Star of Crossing', 'Navigation', 'navigation, guidance',
    'What is the reliable fixed point for navigation here?'),
  C(32, '⎊', 'Orbit Sigil', 'Cycles', 'cycles, revolution',
    'What cycle is repeating — and where in the cycle are we now?'),
  C(33, '⌖', 'Anchor Point', 'Fixed Points', 'fixity, grounding',
    'What is genuinely fixed here — and what only pretends to be?'),
  C(34, '⦿', 'Core Pulse', 'Rhythm', 'underlying rhythm',
    'What is the underlying rhythm beneath all the noise?'),
  C(35, '✲', 'Burst Glyph', 'Eruption', 'eruption, sudden creation',
    'Where is pressure building toward a sudden break?'),
  C(36, '❂', 'Solar Wheel', 'Continuity', 'unbroken continuity',
    'What continues uninterrupted through every apparent ending?'),

  // ── Pillar III — CHORAL (37–54) ───────────────────────────────
  H(37, '✽', 'Bloom Glyph', 'Unfolding', 'gradual unfolding',
    'What is unfolding here, step by step, in its own time?'),
  H(38, '☊', 'North Node', 'Rise', 'upward movement',
    'What is ascending — and is the ascent earned or inflated?'),
  H(39, '☋', 'South Node', 'Decline', 'downward movement',
    'What is decaying — and what should be allowed to fall?'),
  H(40, '♒', 'Waveform Glyph', 'Flow', 'flow, current',
    'Where is the current flowing — and what happens to what resists it?'),
  H(41, '♓', 'Deep Water', 'Depth', 'emerging consensus',
    'What is happening beneath the surface discussion?'),
  H(42, '♈', 'Spark Glyph', 'Ignition', 'impulse, ignition',
    'What was the original impetus — and is it still active?'),
  H(43, '⎈', 'Chorus Knot', 'Entanglement', 'entanglement',
    'Who is entangled with whom — and who tied the knot?'),
  H(44, '⚯', 'Infinite Echo', 'Echo', 'reverberation',
    'What keeps echoing long after its source is gone?'),
  H(45, '⦰', 'Null Node', 'Silence', 'silence as signal',
    'What is the silence saying? Who benefits from the quiet?'),
  H(46, '✺', 'Spiral Sunburst', 'Expansion', 'outward expansion',
    'What is expanding outward — and what is it crowding out?'),
  H(47, '☌', 'Conjunction', 'Meeting', 'coming together',
    'Which parties are meeting here — and what comes of the meeting?'),
  H(48, '☍', 'Opposition', 'Tension', 'held in tension',
    'What is the real tension — and is it creative or destructive?'),
  H(49, '⚹', 'Sextile Song', 'Ease', 'low-friction fit',
    'Where does ease exist here — and is it earned, or is it complacency?'),
  H(50, '△△', 'Triadic Chord', 'Triad', 'three-part pattern',
    'What three elements, combined, make the whole?'),
  H(51, '⟴', 'Spiral Call', 'Summons', 'a call that gathers',
    'What is being called for — and by whom, for what purpose?'),
  H(52, '⧉', 'Mirror Frame', 'Reflection', 'mirrored examination',
    'What is this a reflection of — and what does the reflection distort?'),
  H(53, '⚯⚯', 'Double Echo', 'Layering', 'layered accumulation',
    'What layers are stacked here — and which layer is lying?'),
  H(54, '❖❖', 'Infinite Fractal Bloom', 'Runaway Pattern', 'self-amplifying pattern',
    'If this pattern ran forever, where would it end up?'),

  // ── Pillar IV — TRANSCENDENT (55–72) ───────────────────────────
  T(55, '✶✶', 'Twin Stars', 'Co-Creation', 'co-creation',
    'Who are the true co-creators here — and is the partnership honest?'),
  T(56, '⌬', 'Alchemical Bond', 'Transformation', 'fundamental change',
    'What is being transformed into what — and what is driving it?'),
  T(57, '✺☿', 'Flux-Crystal', 'Resolution', 'completed transformation',
    "What would 'complete' actually look like — and is completion desirable?"),
  T(58, '⚯⟡', 'Resonant Jewel', 'Activation', 'dormant capability switched on',
    'What has been activated here — and was it meant to be?'),
  T(59, '⊚', 'Halo Glyph', 'Emission', 'visible influence',
    'What is being emitted here — and does it illuminate or blind?'),
  T(60, '◎', 'Cosmic Center', 'Meta-Frame', 'outside the current frame',
    'What lies beyond the axis everyone is oriented around?'),
  T(61, '✹∞', 'Sun-Spiral', 'Recurrent Pattern', 'recurring cycle',
    'What pattern keeps recurring — upward progress, or a loop?'),
  T(62, '◍', 'Hollow Glyph', 'Generative Absence', 'absence as a resource',
    'What is absent here — and what does that absence make possible?'),
  T(63, '⦙', 'Singular Flame', 'Individuality', 'distinct identity',
    "What is irreducibly individual here — what can't be systematized?"),
  T(64, '⎔', 'Threshold Gate', 'Point of No Return', 'final passage',
    'What final passage is approaching — and who decides who passes?'),
  T(65, '⚕', "Healer's Staff", 'Repair', 'restoration, wholeness',
    'What is broken, what would wholeness require — and who pays for the healing?'),
  T(66, '✧⚚', 'Serpent Spark', 'Constructive Pain', 'pain that builds',
    'What heals by hurting — what necessary pain is being avoided?'),
  T(67, '⊕', 'World Node', 'Manifestation', 'made concrete',
    'What has fully manifested — and what did it cost to make it real?'),
  T(68, '⊖', 'Unbinding', 'Release', 'letting go',
    'What needs to be released — and what are we holding onto that holds us back?'),
  T(69, '⊜', 'Perfect Circle', 'Closure', 'completion, finality',
    'What is complete — and does completion mean rest or stagnation?'),
  T(70, '✷', 'Star Becoming', 'Trajectory', 'unfolding trajectory',
    'What trajectory is unfolding — and how much is chosen versus inherited?'),
  T(71, '✵', 'Star of Return', 'Return', 'cycle completed',
    'What has come full circle — and did we learn anything on the way around?'),
  T(72, '✶☀', 'The Final Radiance', 'Frame Break', 'going beyond the current frame',
    'What would going beyond this whole situation even mean — and who gets to go?'),
];

export const axiomById = (id: number): Axiom | undefined =>
  AXIOMS.find((a) => a.id === id);

export const axiomsForPillar = (pillar: AxiomPillarId): Axiom[] =>
  AXIOMS.filter((a) => a.pillar === pillar);
