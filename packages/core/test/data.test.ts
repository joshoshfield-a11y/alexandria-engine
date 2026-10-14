import { describe, it, expect } from 'vitest';
import { AXIOMS, axiomById, axiomsForPillar, AXIOM_PILLARS } from '../src/data/axioms.js';
import { PERCEPTION_PILLARS, pillarById } from '../src/data/pillars.js';
import { SHADOWS, shadowByAxiomId } from '../src/data/nocturna.js';
import { CHANTS } from '../src/data/chants.js';

describe('axioms', () => {
  it('has exactly 78 axioms, ids 1-78 unique', () => {
    expect(AXIOMS).toHaveLength(78);
    const ids = AXIOMS.map((a) => a.id).sort((a, b) => a - b);
    expect(ids).toEqual(Array.from({ length: 78 }, (_, i) => i + 1));
  });

  it('axiom pillars hold 20/20/19/19 (18 source + extension slots)', () => {
    const expected: Record<keyof typeof AXIOM_PILLARS, number> = {
      foundational: 20, cosmic: 20, choral: 19, transcendent: 19,
    };
    for (const pillar of Object.keys(AXIOM_PILLARS) as (keyof typeof AXIOM_PILLARS)[]) {
      expect(axiomsForPillar(pillar)).toHaveLength(expected[pillar]);
    }
  });

  it('AXIOM_PILLARS ranges cover exactly the pillar members', () => {
    for (const pillar of Object.keys(AXIOM_PILLARS) as (keyof typeof AXIOM_PILLARS)[]) {
      const ranged = new Set<number>();
      for (const [lo, hi] of AXIOM_PILLARS[pillar].ranges) {
        for (let i = lo; i <= hi; i++) ranged.add(i);
      }
      const members = new Set(axiomsForPillar(pillar).map((a) => a.id));
      expect(ranged).toEqual(members);
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
    expect(axiomById(72)?.name).toBe('Frame Break');
    expect(axiomById(72)?.codexName).toBe('The Final Radiance');
    expect(axiomById(0)).toBeUndefined();
    expect(axiomById(79)).toBeUndefined();
  });

  it('extension slots 73-78 carry names, anchors, and provenance', () => {
    const expected: Record<number, { name: string; codexName: string; pillar: string }> = {
      73: { name: 'Empty Root', codexName: 'Empty Root', pillar: 'foundational' },
      74: { name: 'Duality', codexName: 'Duality', pillar: 'cosmic' },
      75: { name: 'Sympathetic Resonance', codexName: 'Sympathetic Resonance', pillar: 'choral' },
      76: { name: 'Channel Capacity', codexName: 'Channel Capacity', pillar: 'transcendent' },
      77: { name: 'Terminal State', codexName: 'Terminal State', pillar: 'foundational' },
      78: { name: 'Cosmic Horizon', codexName: 'Cosmic Horizon', pillar: 'cosmic' },
    };
    for (const [id, e] of Object.entries(expected)) {
      const a = axiomById(Number(id))!;
      expect(a.name).toBe(e.name);
      expect(a.codexName).toBe(e.codexName);
      expect(a.pillar).toBe(e.pillar);
      expect(a.verdict).toBe('ANCHOR');
      expect(a.groundedSource.length).toBeGreaterThan(10);
    }
  });

  it('every axiom carries a verdict and grounded source', () => {
    for (const a of AXIOMS) {
      expect(['ANCHOR', 'DEFINE-proposed', 'SYMBOLIC-ONLY']).toContain(a.verdict);
      expect(a.groundedSource.length).toBeGreaterThan(10);
    }
    // spot checks from the grounding pass
    expect(axiomById(1)?.verdict).toBe('DEFINE-proposed');
    expect(axiomById(71)?.verdict).toBe('SYMBOLIC-ONLY');
    expect(axiomById(73)?.groundedSource).toContain('ZF set theory');
    expect(axiomById(76)?.groundedSource).toContain('Shannon');
  });

  it('extension-slot glyphs are Engine-assigned and unique across all 78', () => {
    const glyphs = AXIOMS.map((a) => a.glyph);
    expect(new Set(glyphs).size).toBe(78);
    expect(axiomById(73)?.glyph).toBe('∅');
    expect(axiomById(78)?.glyph).toBe('◯');
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
