/**
 * Term algebra over the glyph set — the formal machinery of the Codex.
 *
 * Reconstruction per "The Alexandria Framework — A Scientific Reconstruction"
 * (Document B), §1.1: a lexicon of symbolic operators with composition rules
 * is a term algebra ⟨G, Ω⟩. Composition operators documented in the source:
 * concatenation (free monoid G*), polarity (+ constructive / − dissolving),
 * domain modifiers (° internal/abstract, • external/manifest), and lens
 * application L(g).
 *
 * Epistemic status: FORMAL — mathematically well-defined operations on the
 * symbol set. What the operations *mean* for a given analysis is supplied by
 * lenses.ts, not by metaphysics.
 */

import { Axiom } from './data/axioms.js';
import { Shadow, shadowByAxiomId } from './data/nocturna.js';

export type Polarity = 'constructive' | 'dissolving';
export type Domain = 'internal' | 'external';

export interface CompoundGlyph {
  glyphs: string[];
  polarity: Polarity;
  domain?: Domain;
}

/** Compose glyphs into a compound operator (free monoid G* with operators). */
export function compose(
  glyphs: string[],
  opts: { polarity?: Polarity; domain?: Domain } = {},
): CompoundGlyph {
  if (glyphs.length === 0) throw new Error('compose: need at least one glyph');
  return {
    glyphs: [...glyphs],
    polarity: opts.polarity ?? 'constructive',
    ...(opts.domain ? { domain: opts.domain } : {}),
  };
}

/** Render a compound glyph: e.g. "(+)⟡✶°", "(−)⚚•". */
export function renderCompound(c: CompoundGlyph): string {
  const pol = c.polarity === 'constructive' ? '(+)' : '(−)';
  const dom = c.domain === 'internal' ? '°' : c.domain === 'external' ? '•' : '';
  return `${pol}${c.glyphs.join('')}${dom}`;
}

/** Parse a rendered compound glyph back into its parts. */
export function parseCompound(s: string): CompoundGlyph {
  // Match (+) or (−) prefix — note the source uses U+2212 for minus
  const prefix = /^\(\+\)|^\(−\)/.exec(s);
  if (!prefix) throw new Error(`parseCompound: missing polarity prefix in "${s}"`);
  const polarity: Polarity = prefix[0] === '(+)' ? 'constructive' : 'dissolving';
  let rest = s.slice(prefix[0].length);
  let domain: Domain | undefined;
  if (rest.endsWith('°')) { domain = 'internal'; rest = rest.slice(0, -1); }
  else if (rest.endsWith('•')) { domain = 'external'; rest = rest.slice(0, -1); }
  const glyphs = [...rest];
  if (glyphs.length === 0) throw new Error(`parseCompound: no glyphs in "${s}"`);
  return { glyphs, polarity, ...(domain ? { domain } : {}) };
}

/** The failure-mode mirror: every operator's inverse (shadow) operator. */
export function invertAxiom(axiom: Axiom): Shadow | undefined {
  return shadowByAxiomId(axiom.id);
}

/** Lens application L(g): the formal act of viewing an axiom through a pillar. */
export function applyLens(pillarId: number, axiomId: number): string {
  const p = String(pillarId).padStart(2, '0');
  const a = String(axiomId).padStart(2, '0');
  return `L(P${p})(A${a})`;
}
