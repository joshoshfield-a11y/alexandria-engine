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

  it('pillar strategy sweeps all 78 lenses of the pillar', () => {
    const r = runSweep({ topic: 'the merger', strategy: 'pillar', pillarId: 8 });
    expect(r.readings).toHaveLength(78);
    expect(r.readings.every((x) => x.lens.pillar.id === 8)).toBe(true);
    expect(r.redTeam).toHaveLength(78);
  });

  it('pillar sweep red-team marks extension slots without inventing shadows', () => {
    const r = runSweep({ topic: 'the merger', strategy: 'pillar', pillarId: 8 });
    const ext = r.redTeam.filter((x) => x.axiom.id >= 73);
    expect(ext).toHaveLength(6);
    for (const x of ext) {
      expect(x.shadow).toBeNull();
      expect(x.probe).toContain('No failure-mode mirror is defined');
    }
  });

  it('axiom strategy sweeps all 13 lenses of the axiom', () => {
    const r = runSweep({ topic: 'the merger', strategy: 'axiom', axiomId: 33 });
    expect(r.readings).toHaveLength(13);
    expect(r.readings.every((x) => x.lens.axiom.id === 33)).toBe(true);
  });

  it('full strategy covers the whole matrix', () => {
    const lenses = planSweep({ topic: 'x', strategy: 'full' });
    expect(lenses).toHaveLength(1014);
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
  it('defaults to all 78 operators in axiom order', () => {
    const rs = redTeam('the product launch');
    expect(rs).toHaveLength(78);
    expect(rs[0].axiom.id).toBe(1);
    expect(rs[71].axiom.id).toBe(72);
    expect(rs[77].axiom.id).toBe(78);
    expect(rs[0].shadow!.name).toBe('Covert Surveillance');
  });

  it('extension slots get a null shadow and an explicit marker probe', () => {
    const rs = redTeam('the product launch', [73, 78]);
    expect(rs).toHaveLength(2);
    for (const r of rs) {
      expect(r.shadow).toBeNull();
      expect(r.probe).toContain('No failure-mode mirror is defined');
      expect(r.probe).toContain('the product launch');
    }
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
