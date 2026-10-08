/**
 * The 936-lens matrix and the lens reading engine.
 *
 * The Codex Speculum: 13 perception pillars × 72 axioms = 936 lenses
 * (Document A §2.2, Document B §3.1 — formally a morphological matrix, the
 * same method family as Zwicky morphological analysis and TRIZ).
 *
 * A lens reading composes three things:
 *   1. a pillar *move* (an analytical operation),
 *   2. an axiom *interrogative* (the question the axiom asks),
 *   3. the *counter-probe* — the failure-mode reading of the same ground.
 *
 * Readings are deterministic and inspectable: the same (lens, topic) always
 * yields the same reading. Nothing here claims metaphysical efficacy — the
 * engine is a structured perspective-taking instrument.
 */

import { AXIOMS, Axiom, axiomById } from './data/axioms.js';
import { PERCEPTION_PILLARS, PerceptionPillar, pillarById } from './data/pillars.js';
import { shadowByAxiomId } from './data/nocturna.js';

export interface Lens {
  /** e.g. "P01-A01" */
  id: string;
  pillar: PerceptionPillar;
  axiom: Axiom;
}

export function lensId(pillarId: number, axiomId: number): string {
  return `P${String(pillarId).padStart(2, '0')}-A${String(axiomId).padStart(2, '0')}`;
}

/** The full 936-lens matrix. */
export function allLenses(): Lens[] {
  const out: Lens[] = [];
  for (const pillar of PERCEPTION_PILLARS) {
    for (const axiom of AXIOMS) {
      out.push({ id: lensId(pillar.id, axiom.id), pillar, axiom });
    }
  }
  return out;
}

export function getLens(pillarId: number, axiomId: number): Lens {
  const pillar = pillarById(pillarId);
  const axiom = axiomById(axiomId);
  if (!pillar) throw new Error(`getLens: unknown pillar ${pillarId}`);
  if (!axiom) throw new Error(`getLens: unknown axiom ${axiomId}`);
  return { id: lensId(pillarId, axiomId), pillar, axiom };
}

/** The 72 lenses of one pillar. */
export function lensesForPillar(pillarId: number): Lens[] {
  const pillar = pillarById(pillarId);
  if (!pillar) throw new Error(`lensesForPillar: unknown pillar ${pillarId}`);
  return AXIOMS.map((axiom) => ({ id: lensId(pillar.id, axiom.id), pillar, axiom }));
}

/** The 13 lenses of one axiom. */
export function lensesForAxiom(axiomId: number): Lens[] {
  const axiom = axiomById(axiomId);
  if (!axiom) throw new Error(`lensesForAxiom: unknown axiom ${axiomId}`);
  return PERCEPTION_PILLARS.map((pillar) => ({ id: lensId(pillar.id, axiom.id), pillar, axiom }));
}

/** Deterministic PRNG (mulberry32) for reproducible spreads. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Draw a spread of `count` distinct lenses, shuffled with a seeded PRNG.
 * Default seed derives from the current date so a daily draw is stable
 * within a day but varies across days; pass an explicit seed to reproduce.
 */
export function drawSpread(count: number, seed?: number): Lens[] {
  const all = allLenses();
  if (count < 1) throw new Error('drawSpread: count must be >= 1');
  if (count > all.length) throw new Error(`drawSpread: count ${count} exceeds 936 lenses`);
  const s = seed ?? Number(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
  const rand = mulberry32(s);
  const pool = [...all];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

export interface LensReading {
  lens: Lens;
  /** The pillar move applied. */
  move: string;
  /** Composed analytical question for the topic. */
  question: string;
  shadowName: string;
  shadowArt: string;
  /** The failure-mode counter-probe for the topic. */
  counter: string;
}

/** Lowercase the art domain: "hidden awareness and surveillance". */
export function artNoun(art: string): string | null {
  const m = /^The Art of (.+)$/.exec(art);
  if (m) return m[1].toLowerCase();
  const t = art.trim();
  if (!t || /^\[.*\]$/.test(t)) return null;
  return t.toLowerCase();
}

/** Compose the shadow counter-probe for a topic. */
export function counterProbe(axiomId: number, topic: string): { name: string; art: string; probe: string } {
  const shadow = shadowByAxiomId(axiomId);
  if (!shadow) throw new Error(`counterProbe: no shadow for axiom ${axiomId}`);
  const noun = artNoun(shadow.art);
  const probe = noun
    ? `Shadow check — ${shadow.name} (${shadow.art}): in ${topic}, where is ${noun} already operating unnoticed, and who benefits from it staying hidden?`
    : `Shadow check — ${shadow.name}: what is the shadow form of ${topic} — the version no one wants to name?`;
  return { name: shadow.name, art: shadow.art, probe };
}

/**
 * Read one lens against a topic: pillar move + axiom interrogative,
 * plus the failure-mode counter-probe. `moveIndex` selects which of the
 * pillar's moves to apply (default 0).
 */
export function readLens(lens: Lens, topic: string, moveIndex = 0): LensReading {
  const t = topic.trim();
  if (!t) throw new Error('readLens: topic must not be empty');
  const move = lens.pillar.moves[moveIndex % lens.pillar.moves.length];
  const { axiom, pillar } = lens;
  const question =
    `[${pillar.name} × ${axiom.glyph} ${axiom.name}] ${move} ` +
    `Through ${axiom.name} (${axiom.meaning}): ${axiom.asks} Applied to ${t}.`;
  const counter = counterProbe(axiom.id, t);
  return {
    lens,
    move,
    question,
    shadowName: counter.name,
    shadowArt: counter.art,
    counter: counter.probe,
  };
}

/** Render a reading as plain text. */
export function formatReading(r: LensReading): string {
  return [
    `── ${r.lens.id} · ${r.lens.pillar.name} × ${r.lens.axiom.glyph} ${r.lens.axiom.name} ──`,
    r.question,
    r.counter,
  ].join('\n');
}
