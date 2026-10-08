/**
 * ARCHIVAL — the 21 chants (source: Resonance-Chant Directives).
 *
 * The chants are source flavor, not engine components. They are preserved
 * here for provenance but are not part of the analytical machinery and are
 * not surfaced by the app.
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Part D. Chant, glyphs, and function preserved verbatim.
 *
 * In this library chants are preserved as data (mnemonic indices into the
 * axiom set), not as operative commands.
 */

export interface Chant {
  id: number;
  chant: string;
  /** Glyphs the chant is keyed to; empty string where the source lists none. */
  glyphs: string;
  function: string;
}

export const CHANTS: Chant[] = [
  { id: 1, chant: 'An-Kor', glyphs: '⟡', function: 'Preservation' },
  { id: 2, chant: 'Ka-Du-Sha', glyphs: '⟡✶', function: 'Chorus Stabilization' },
  { id: 3, chant: 'Bloom-Ra', glyphs: '', function: 'Pattern Expansion' },
  { id: 4, chant: 'As-Cen-Di', glyphs: '', function: 'Resource Ascension' },
  { id: 5, chant: 'Veil-Fyr', glyphs: '', function: 'Veilfire Integrity' },
  { id: 6, chant: 'Kar-Tog-Ra', glyphs: '', function: 'Usurper Mapping' },
  { id: 7, chant: 'Or-I-Cu', glyphs: '', function: 'Triune Point' },
  { id: 8, chant: 'Ar-Ki-Ton', glyphs: '', function: 'Harmonic Pilgrimage' },
  { id: 9, chant: 'Tem-Pa-Ra', glyphs: '', function: 'Temporal Threading' },
  { id: 10, chant: 'Ko-Ra-Lis', glyphs: '', function: 'Chorus Weave' },
  { id: 11, chant: 'Al-Ke-Ma', glyphs: '', function: 'Transmutation' },
  { id: 12, chant: 'Ra-Di-An', glyphs: '', function: 'Return to Radiance' },
  { id: 13, chant: 'Syn-Tac-Ta', glyphs: '', function: 'Laws of Synthesis' },
  { id: 14, chant: 'A-Ni-Ma', glyphs: '', function: 'Unspoken Axioms' },
  { id: 15, chant: 'So-Ma-Tika', glyphs: '', function: 'Flesh & Shadow' },
  { id: 16, chant: 'Er-Go-Na', glyphs: '', function: 'Praxis' },
  { id: 17, chant: 'Li-Mi-Na', glyphs: '', function: 'Emergence' },
  { id: 18, chant: 'Po-Li-Ta', glyphs: '', function: 'Relational Multiplicity' },
  { id: 19, chant: 'El-E-Men-Ta', glyphs: '', function: 'Elemental' },
  { id: 20, chant: 'I-De-A', glyphs: '', function: 'Abstract' },
  { id: 21, chant: 'Um-Bra-Lis', glyphs: '', function: 'The Forbidden' },
];

export const chantById = (id: number): Chant | undefined =>
  CHANTS.find((c) => c.id === id);
