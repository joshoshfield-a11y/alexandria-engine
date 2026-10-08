import { describe, it, expect } from 'vitest';
import { runSweep, planSweep } from '../src/sweep.js';
import { redTeam } from '../src/redteam.js';

describe('sweep', () => {
  it('spread strategy draws N readings + red-team', () => {
    const r = runSweep({ topic: 'my novel', strategy: 'spread', count: 5, seed: 11 });
    expect(r.topic).toBe('my novel');
    expect(r.strategy).toBe('spread');
    expect(r.readings).toHaveLength(5);
    expect(r.lensIds).toHaveLength(5);
    expect(r.redTeam.length).toBeGreaterThan(0);
    for (const reading of r.readings) {
      expect(reading.question).toContain('my novel');
    }
  });

  it('spread defaults to 7', () => {
    expect(runSweep({ topic: 'x' }).readings).toHaveLength(7);
  });

  it('pillar strategy sweeps all 72 lenses of the pillar', () => {
    const r = runSweep({ topic: 'the merger', strategy: 'pillar', pillarId: 8 });
    expect(r.readings).toHaveLength(72);
    expect(r.readings.every((x) => x.lens.pillar.id === 8)).toBe(true);
    expect(r.redTeam).toHaveLength(72);
  });

  it('axiom strategy sweeps all 13 lenses of the axiom', () => {
    const r = runSweep({ topic: 'the merger', strategy: 'axiom', axiomId: 33 });
    expect(r.readings).toHaveLength(13);
    expect(r.readings.every((x) => x.lens.axiom.id === 33)).toBe(true);
  });

  it('full strategy covers the whole matrix', () => {
    const lenses = planSweep({ topic: 'x', strategy: 'full' });
    expect(lenses).toHaveLength(936);
  });

  it('requires pillarId/axiomId for those strategies', () => {
    expect(() => planSweep({ topic: 'x', strategy: 'pillar' })).toThrow();
    expect(() => planSweep({ topic: 'x', strategy: 'axiom' })).toThrow();
  });

  it('rejects empty topics', () => {
    expect(() => runSweep({ topic: '   ' })).toThrow();
  });
});

describe('redTeam', () => {
  it('defaults to all 72 shadows in axiom order', () => {
    const rs = redTeam('the product launch');
    expect(rs).toHaveLength(72);
    expect(rs[0].axiom.id).toBe(1);
    expect(rs[71].axiom.id).toBe(72);
    expect(rs[0].shadow.name).toBe('Covert Surveillance');
  });

  it('accepts a subset of axioms', () => {
    const rs = redTeam('the product launch', [1, 15, 72]);
    expect(rs).toHaveLength(3);
    expect(rs.map((r) => r.axiom.id)).toEqual([1, 15, 72]);
  });

  it('every probe names the topic', () => {
    for (const r of redTeam('the product launch', [5, 40, 65])) {
      expect(r.probe).toContain('the product launch');
    }
  });
});
