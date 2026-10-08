import { describe, it, expect } from 'vitest';
import {
  compose, renderCompound, parseCompound, invertAxiom, applyLens,
} from '../src/algebra.js';
import { axiomById } from '../src/data/axioms.js';

describe('algebra', () => {
  it('compose defaults to constructive polarity', () => {
    const c = compose(['⟡', '✶']);
    expect(c).toEqual({ glyphs: ['⟡', '✶'], polarity: 'constructive' });
  });

  it('compose accepts polarity and domain', () => {
    const c = compose(['⚚'], { polarity: 'dissolving', domain: 'internal' });
    expect(c.polarity).toBe('dissolving');
    expect(c.domain).toBe('internal');
  });

  it('compose rejects empty glyph lists', () => {
    expect(() => compose([])).toThrow();
  });

  it('renderCompound formats correctly', () => {
    expect(renderCompound(compose(['⟡', '✶']))).toBe('(+)⟡✶');
    expect(renderCompound(compose(['⚚'], { polarity: 'dissolving', domain: 'internal' }))).toBe('(−)⚚°');
    expect(renderCompound(compose(['◈'], { domain: 'external' }))).toBe('(+)◈•');
  });

  it('parseCompound round-trips renderCompound', () => {
    const original = compose(['⟡', '✶', '☿'], { polarity: 'dissolving', domain: 'external' });
    const parsed = parseCompound(renderCompound(original));
    expect(parsed).toEqual(original);
  });

  it('parseCompound rejects malformed input', () => {
    expect(() => parseCompound('⟡✶')).toThrow();
    expect(() => parseCompound('(+)')).toThrow();
  });

  it('invertAxiom returns the Nocturna mirror', () => {
    const axiom = axiomById(1)!;
    expect(invertAxiom(axiom)?.name).toBe('The Unblinking Eye');
    expect(invertAxiom(axiomById(72)!)?.name).toBe('The Ultimate Annihilation');
  });

  it('applyLens formats lens application', () => {
    expect(applyLens(3, 27)).toBe('L(P03)(A27)');
  });
});
