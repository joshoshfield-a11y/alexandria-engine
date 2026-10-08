import { describe, it, expect } from 'vitest';
import { SPREADS, spreadById, runSpread } from '../src/spreads.js';
import { sweepToMarkdown, spreadToMarkdown } from '../src/export.js';
import { WORKED_EXAMPLES } from '../src/examples.js';
import { runSweep } from '../src/sweep.js';

describe('spreads', () => {
  it('defines Triad, Cross, and Council with correct position counts', () => {
    expect(SPREADS.map((s) => s.id)).toEqual(['triad', 'cross', 'council']);
    expect(spreadById('triad')!.positions).toHaveLength(3);
    expect(spreadById('cross')!.positions).toHaveLength(5);
    expect(spreadById('council')!.positions).toHaveLength(7);
  });

  it('runSpread assigns positions in order and frames the question', () => {
    const r = runSpread('the launch', 'triad', 5);
    expect(r.readings).toHaveLength(3);
    expect(r.readings[0].position.name).toBe('Root');
    expect(r.readings[2].position.name).toBe('Outcome');
    expect(r.readings[0].question).toContain('[Root —');
    expect(r.readings[0].question).toContain('the launch');
  });

  it('runSpread is deterministic for a fixed seed', () => {
    const a = runSpread('x', 'council', 9).readings.map((r) => r.lens.id);
    const b = runSpread('x', 'council', 9).readings.map((r) => r.lens.id);
    expect(a).toEqual(b);
  });

  it('runSpread includes red-team for the drawn axioms', () => {
    const r = runSpread('x', 'cross', 3);
    expect(r.redTeam).toHaveLength(5);
  });

  it('rejects unknown spreads and empty topics', () => {
    expect(() => runSpread('x', 'nope')).toThrow();
    expect(() => runSpread('  ', 'triad')).toThrow();
  });
});

describe('export', () => {
  it('sweepToMarkdown renders topic, readings, notes, and red-team', () => {
    const result = runSweep({ topic: 'the novel', strategy: 'spread', count: 2, seed: 21 });
    const md = sweepToMarkdown(result, { [result.lensIds[0]]: 'my take on this' });
    expect(md).toContain('# Alexandria Engine — Sweep');
    expect(md).toContain('the novel');
    expect(md).toContain('my take on this');
    expect(md).toContain('# Red Team — Nocturna');
    expect(md).toContain('Shadow check');
  });

  it('spreadToMarkdown renders positions', () => {
    const result = runSpread('the novel', 'triad', 21);
    const md = spreadToMarkdown(result);
    expect(md).toContain('# Alexandria Engine — Triad Spread');
    expect(md).toContain('## Root —');
    expect(md).toContain('## Outcome —');
  });
});

describe('worked examples', () => {
  it('holds the three canonical Vigil Flame readings', () => {
    expect(WORKED_EXAMPLES).toHaveLength(3);
    expect(WORKED_EXAMPLES.every((e) => e.axiomId === 1)).toBe(true);
    expect(WORKED_EXAMPLES.map((e) => e.pillarId)).toEqual([1, 5, 12]);
  });
});
