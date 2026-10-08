import { describe, it, expect } from 'vitest';
import { AXIOMS, axiomById, axiomsForPillar, AXIOM_PILLARS } from '../src/data/axioms.js';
import { PERCEPTION_PILLARS, pillarById } from '../src/data/pillars.js';
import { SHADOWS, shadowByAxiomId } from '../src/data/nocturna.js';
import { CHANTS } from '../src/data/chants.js';

describe('axioms', () => {
  it('has exactly 72 axioms, ids 1-72 unique', () => {
    expect(AXIOMS).toHaveLength(72);
    const ids = AXIOMS.map((a) => a.id).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 72 }, (_, i) => i + 1));
  });

  it('each axiom pillar holds 18 axioms', () => {
    for (const pillar of Object.keys(AXIOM_PILLARS) as (keyof typeof AXIOM_PILLARS)[]) {
      expect(axiomsForPillar(pillar)).toHaveLength(18);
    }
  });

  it('every axiom has a glyph, name, meaning, and interrogative', () => {
    for (const a of AXIOMS) {
      expect(a.glyph.length).toBeGreaterThan(0);
      expect(a.name.length).toBeGreaterThan(0);
      expect(a.meaning.length).toBeGreaterThan(0);
      expect(a.asks.length).toBeGreaterThan(10);
      expect(a.asks.endsWith('?')).toBe(true);
    }
  });

  it('axiomById resolves and misses cleanly', () => {
    expect(axiomById(1)?.name).toBe('Oversight');
    expect(axiomById(1)?.codexName).toBe('Vigil Flame');
    expect(axiomById(72)?.name).toBe('Transcendence');
    expect(axiomById(0)).toBeUndefined();
    expect(axiomById(73)).toBeUndefined();
  });
});

describe('perception pillars', () => {
  it('has exactly 13 pillars, ids 1-13 unique', () => {
    expect(PERCEPTION_PILLARS).toHaveLength(13);
    const ids = PERCEPTION_PILLARS.map((p) => p.id).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 13 }, (_, i) => i + 1));
  });

  it('every pillar has a lens function and at least 2 moves', () => {
    for (const p of PERCEPTION_PILLARS) {
      expect(p.lens.length).toBeGreaterThan(20);
      expect(p.moves.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('pillarById resolves', () => {
    expect(pillarById(1)?.name).toBe('Resonance Dynamics');
    expect(pillarById(1)?.codexName).toBe('Pillar of Harmonic Physics');
    expect(pillarById(13)?.name).toBe('Systems Synthesis');
  });
});

describe('nocturna', () => {
  it('has exactly 72 shadows mirroring axioms 1-72', () => {
    expect(SHADOWS).toHaveLength(72);
    const ids = SHADOWS.map((s) => s.axiomId).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 72 }, (_, i) => i + 1));
  });

  it('shadowByAxiomId resolves', () => {
    expect(shadowByAxiomId(1)?.name).toBe('Covert Surveillance');
    expect(shadowByAxiomId(1)?.codexName).toBe('The Unblinking Eye');
    expect(shadowByAxiomId(15)?.name).toBe("Illegitimate Authority");
  });

  it('provenance flags are honest', () => {
    const unrecovered = SHADOWS.filter((s) => s.provenance === 'unrecovered');
    // 3 names + 1 art lost in the source text
    expect(unrecovered.length).toBe(4);
    for (const s of unrecovered) {
      expect(s.codexName.includes('unrecovered') || s.art.includes('unrecovered')).toBe(true);
    }
  });
});

describe('chants', () => {
  it('has exactly 21 chants', () => {
    expect(CHANTS).toHaveLength(21);
    expect(CHANTS[0].chant).toBe('An-Kor');
    expect(CHANTS[20].chant).toBe('Um-Bra-Lis');
  });
});
