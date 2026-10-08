import { describe, it, expect } from 'vitest';
import {
  allLenses, getLens, lensId, lensesForPillar, lensesForAxiom,
  drawSpread, readLens, formatReading, counterProbe, artNoun, mulberry32,
} from '../src/lenses.js';

describe('lens matrix', () => {
  it('allLenses yields exactly 936 unique lenses', () => {
    const lenses = allLenses();
    expect(lenses).toHaveLength(936);
    const ids = new Set(lenses.map((l) => l.id));
    expect(ids.size).toBe(936);
  });

  it('lensId formats correctly', () => {
    expect(lensId(1, 1)).toBe('P01-A01');
    expect(lensId(13, 72)).toBe('P13-A72');
  });

  it('lensesForPillar returns 72 lenses of that pillar', () => {
    const lenses = lensesForPillar(1);
    expect(lenses).toHaveLength(72);
    expect(lenses.every((l) => l.pillar.id === 1)).toBe(true);
  });

  it('lensesForAxiom returns 13 lenses of that axiom', () => {
    const lenses = lensesForAxiom(27);
    expect(lenses).toHaveLength(13);
    expect(lenses.every((l) => l.axiom.id === 27)).toBe(true);
  });

  it('getLens rejects unknown ids', () => {
    expect(() => getLens(0, 1)).toThrow();
    expect(() => getLens(1, 99)).toThrow();
  });
});

describe('drawSpread', () => {
  it('is deterministic for a fixed seed', () => {
    const a = drawSpread(7, 42).map((l) => l.id);
    const b = drawSpread(7, 42).map((l) => l.id);
    expect(a).toEqual(b);
  });

  it('varies with seed and draws without replacement', () => {
    const a = drawSpread(7, 42).map((l) => l.id);
    const b = drawSpread(7, 43).map((l) => l.id);
    expect(a).not.toEqual(b);
    expect(new Set(a).size).toBe(7);
  });

  it('rejects bad counts', () => {
    expect(() => drawSpread(0)).toThrow();
    expect(() => drawSpread(937)).toThrow();
  });

  it('mulberry32 is a stable PRNG', () => {
    const r1 = mulberry32(7);
    const r2 = mulberry32(7);
    expect([r1(), r1(), r1()]).toEqual([r2(), r2(), r2()]);
  });
});

describe('readLens', () => {
  it('composes move + interrogative + topic', () => {
    const r = readLens(getLens(1, 1), 'my startup pricing');
    expect(r.lens.id).toBe('P01-A01');
    expect(r.question).toContain('my startup pricing');
    expect(r.question).toContain('Vigil Flame');
    expect(r.question).toContain('Harmonic Physics');
    expect(r.move.length).toBeGreaterThan(0);
  });

  it('includes the Nocturna counter-probe', () => {
    const r = readLens(getLens(1, 1), 'my startup pricing');
    expect(r.shadowName).toBe('The Unblinking Eye');
    expect(r.counter).toContain('my startup pricing');
  });

  it('cycles pillar moves with moveIndex', () => {
    const a = readLens(getLens(2, 5), 'topic', 0);
    const b = readLens(getLens(2, 5), 'topic', 1);
    expect(a.move).not.toBe(b.move);
  });

  it('rejects empty topics', () => {
    expect(() => readLens(getLens(1, 1), '  ')).toThrow();
  });

  it('formatReading renders all three parts', () => {
    const text = formatReading(readLens(getLens(4, 33), 'a novel'));
    expect(text).toContain('P04-A33');
    expect(text).toContain('a novel');
    expect(text).toContain('Shadow check');
  });
});

describe('counterProbe', () => {
  it('derives the probe from the shadow art', () => {
    const c = counterProbe(1, 'the launch');
    expect(c.name).toBe('The Unblinking Eye');
    expect(c.probe).toContain('hidden awareness and surveillance');
    expect(c.probe).toContain('the launch');
  });

  it('artNoun strips the Art-of prefix', () => {
    expect(artNoun('The Art of Hidden Awareness and Surveillance'))
      .toBe('hidden awareness and surveillance');
    expect(artNoun('[art unrecovered]')).toBeNull();
  });

  it('falls back gracefully when the art is unrecovered', () => {
    const c = counterProbe(65, 'the launch');
    expect(c.probe).toContain('shadow form');
  });
});
