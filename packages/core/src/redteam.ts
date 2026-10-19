/**
 * The failure-mode red-team engine (source name: the Nocturna taxonomy).
 *
 * For a topic and a set of operators, produce the failure-mode reading of each:
 * where the constructive operator has an abuse form, name it. This is the
 * Codex's red-team appendix made operational — the same role FMEA and
 * MITRE ATT&CK play in engineering: for every capability, its failure
 * and abuse modes, stated plainly.
 */

import { AXIOMS, Axiom, axiomById } from './data/axioms.js';
import { Shadow, shadowByAxiomId } from './data/nocturna.js';
import { artNoun } from './lenses.js';

export interface ShadowReading {
  axiom: Axiom;
  /**
   * The failure-mode mirror. Null for the 2026-10-14 extension slots (73–78):
   * the Nocturna taxonomy covers the 72 source operators only, and no shadow
   * is invented for the new operators — the probe says so explicitly.
   */
  shadow: Shadow | null;
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
 * (default: all 78 operators). Returns one probe per axiom, in axiom order.
 * Operators 73–78 have no shadow in the Nocturna taxonomy; their probe is an
 * explicit "no shadow defined" marker rather than an invented failure mode.
 */
export function redTeam(topic: string, axiomIds?: number[]): ShadowReading[] {
  const t = topic.trim();
  if (!t) throw new Error('redTeam: topic must not be empty');
  const ids = axiomIds ?? AXIOMS.map((a) => a.id);
  return ids.map((id) => {
    const axiom = axiomById(id);
    if (!axiom) throw new Error(`redTeam: unknown axiom ${id}`);
    const shadow = shadowByAxiomId(id) ?? null;
    const probe = shadow
      ? probeFor(shadow, t)
      : `No failure-mode mirror is defined for ${axiom.glyph} ${axiom.name} ` +
        `(operator ${axiom.id}): the Nocturna taxonomy covers the 72 source ` +
        `operators, and the extension slots 73–78 have no shadow entries. ` +
        `Red-team reading skipped for ${t} on this ground.`;
    return { axiom, shadow, probe };
  });
}
