/**
 * The Nocturna red-team engine.
 *
 * For a topic and a set of axioms, produce the shadow reading of each:
 * where the constructive operator has an abuse form, name it. This is the
 * Codex's red-team appendix made operational — the same role FMEA and
 * MITRE ATT&CK play in engineering: for every capability, its failure
 * and abuse modes, stated plainly.
 */

import { Axiom, axiomById } from './data/axioms.js';
import { Shadow, shadowByAxiomId } from './data/nocturna.js';
import { artNoun } from './lenses.js';

export interface ShadowReading {
  axiom: Axiom;
  shadow: Shadow;
  /** The red-team probe for the topic. */
  probe: string;
}

function probeFor(shadow: Shadow, topic: string): string {
  const noun = artNoun(shadow.art);
  if (noun) {
    return (
      `${shadow.name} — ${shadow.art}. In ${topic}: where is ${noun} already ` +
      `operating unnoticed? Who benefits from it staying hidden, and what would ` +
      `exposure cost them?`
    );
  }
  return (
    `${shadow.name}. In ${topic}: what is the shadow form of this situation — ` +
    `the version no one involved wants to name out loud?`
  );
}

/**
 * Red-team a topic through the shadows of the given axioms
 * (default: all 72). Returns one probe per axiom, in axiom order.
 */
export function redTeam(topic: string, axiomIds?: number[]): ShadowReading[] {
  const t = topic.trim();
  if (!t) throw new Error('redTeam: topic must not be empty');
  const ids = axiomIds ?? Array.from({ length: 72 }, (_, i) => i + 1);
  return ids.map((id) => {
    const axiom = axiomById(id);
    const shadow = shadowByAxiomId(id);
    if (!axiom || !shadow) throw new Error(`redTeam: unknown axiom ${id}`);
    return { axiom, shadow, probe: probeFor(shadow, t) };
  });
}
