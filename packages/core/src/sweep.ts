/**
 * The sweep engine: run a perspective sweep on a topic.
 *
 * Strategies:
 *  - `spread`  — draw N lenses from the full 936 matrix (seeded; default 7,
 *                 the classic spread size)
 *  - `pillar`  — all 72 lenses of one perception pillar (pillarId required)
 *  - `axiom`   — all 13 lenses of one axiom (axiomId required)
 *  - `full`    — the entire 936-lens matrix (returns readings lazily in
 *                 batches; prefer the narrower strategies for interactive use)
 *
 * Every sweep also runs the Nocturna red-team over the axioms involved.
 */

import {
  Lens, LensReading, allLenses, drawSpread, lensesForAxiom, lensesForPillar,
  readLens,
} from './lenses.js';
import { ShadowReading, redTeam } from './redteam.js';

export type SweepStrategy = 'spread' | 'pillar' | 'axiom' | 'full';

export interface SweepOptions {
  topic: string;
  strategy?: SweepStrategy;
  /** spread size (default 7) */
  count?: number;
  /** PRNG seed for spreads; default derives from the current date */
  seed?: number;
  pillarId?: number;
  axiomId?: number;
  /** which pillar move to apply (default 0) */
  moveIndex?: number;
}

export interface SweepResult {
  topic: string;
  strategy: SweepStrategy;
  lensIds: string[];
  readings: LensReading[];
  redTeam: ShadowReading[];
}

export function planSweep(opts: SweepOptions): Lens[] {
  const strategy = opts.strategy ?? 'spread';
  switch (strategy) {
    case 'spread':
      return drawSpread(opts.count ?? 7, opts.seed);
    case 'pillar': {
      if (opts.pillarId == null) throw new Error('planSweep: pillar strategy needs pillarId');
      return lensesForPillar(opts.pillarId);
    }
    case 'axiom': {
      if (opts.axiomId == null) throw new Error('planSweep: axiom strategy needs axiomId');
      return lensesForAxiom(opts.axiomId);
    }
    case 'full':
      return allLenses();
  }
}

export function runSweep(opts: SweepOptions): SweepResult {
  const topic = opts.topic.trim();
  if (!topic) throw new Error('runSweep: topic must not be empty');
  const strategy = opts.strategy ?? 'spread';
  const lenses = planSweep({ ...opts, topic });
  const moveIndex = opts.moveIndex ?? 0;
  const readings = lenses.map((lens) => readLens(lens, topic, moveIndex));
  const axiomIds = [...new Set(lenses.map((l) => l.axiom.id))].sort((a, b) => a - b);
  return {
    topic,
    strategy,
    lensIds: lenses.map((l) => l.id),
    readings,
    redTeam: redTeam(topic, axiomIds),
  };
}
