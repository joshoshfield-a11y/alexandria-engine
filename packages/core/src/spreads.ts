/**
 * Positional spreads — named lens layouts with positional meanings.
 *
 * A spread draws N distinct lenses and assigns each a *position* (Root, Force,
 * Outcome...). The position tells the reader what job that lens is doing in
 * the analysis, the way positions do in a tarot spread — except here every
 * position is filled by a computed lens from the 936-matrix, not a card.
 *
 * Spreads are deterministic for a fixed seed (see drawSpread in lenses.ts).
 */

import {
  Lens, LensReading, drawSpread, readLens,
} from './lenses.js';
import { ShadowReading, redTeam } from './redteam.js';

export interface SpreadPosition {
  name: string;
  brief: string;
}

export interface Spread {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
}

export const SPREADS: Spread[] = [
  {
    id: 'triad',
    name: 'Triad',
    description: 'Three lenses: what underlies, what acts, where it leads. The quick read.',
    positions: [
      { name: 'Root', brief: 'What underlies the situation — the ground it stands on.' },
      { name: 'Force', brief: 'What is actively shaping it right now.' },
      { name: 'Outcome', brief: 'Where the current pattern leads if nothing changes.' },
    ],
  },
  {
    id: 'cross',
    name: 'Cross',
    description: 'Five lenses in a cross: situation, challenge, root, guidance, outcome.',
    positions: [
      { name: 'Situation', brief: 'The matter as it presents itself.' },
      { name: 'Challenge', brief: 'What crosses it — the live tension.' },
      { name: 'Root', brief: 'What is underneath, driving it quietly.' },
      { name: 'Guidance', brief: 'The move the situation is asking for.' },
      { name: 'Outcome', brief: 'Where the pattern resolves.' },
    ],
  },
  {
    id: 'council',
    name: 'Council',
    description: 'Seven lenses, a full council: heart, head, hand, shadow, ally, obstacle, horizon.',
    positions: [
      { name: 'Heart', brief: 'What the matter is really about, beneath the framing.' },
      { name: 'Head', brief: 'How it is being thought about — and what the thinking misses.' },
      { name: 'Hand', brief: 'What is actually being done about it.' },
      { name: 'Shadow', brief: 'What is hidden, denied, or operating unnoticed.' },
      { name: 'Ally', brief: 'What resource or force supports a good resolution.' },
      { name: 'Obstacle', brief: 'What resists — inside or out.' },
      { name: 'Horizon', brief: 'Where this is heading on its current course.' },
    ],
  },
];

export const spreadById = (id: string): Spread | undefined =>
  SPREADS.find((s) => s.id === id);

export interface PositionalReading extends LensReading {
  position: SpreadPosition;
}

export interface SpreadResult {
  topic: string;
  spread: Spread;
  seed: number | undefined;
  readings: PositionalReading[];
  redTeam: ShadowReading[];
}

/**
 * Run a positional spread on a topic. Each drawn lens is read through its
 * position: the position brief is prepended so the question is framed by
 * the job the lens is doing.
 */
export function runSpread(
  topic: string,
  spreadId: string,
  seed?: number,
  moveIndex = 0,
): SpreadResult {
  const t = topic.trim();
  if (!t) throw new Error('runSpread: topic must not be empty');
  const spread = spreadById(spreadId);
  if (!spread) throw new Error(`runSpread: unknown spread "${spreadId}"`);
  const lenses: Lens[] = drawSpread(spread.positions.length, seed);
  const readings: PositionalReading[] = lenses.map((lens, i) => {
    const position = spread.positions[i];
    const base = readLens(lens, t, moveIndex);
    return {
      ...base,
      position,
      question: `[${position.name} — ${position.brief}] ${base.question}`,
    };
  });
  const axiomIds = [...new Set(lenses.map((l) => l.axiom.id))].sort((a, b) => a - b);
  return { topic: t, spread, seed, readings, redTeam: redTeam(t, axiomIds) };
}
