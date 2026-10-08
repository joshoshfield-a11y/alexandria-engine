/**
 * Session export — render a sweep or spread result as a Markdown document.
 *
 * The document preserves the full reading: lens identities, questions, shadow
 * counter-probes, and the user's own notes keyed by lens id. Round-trips
 * cleanly into notes apps, repos, and print.
 */

import { SweepResult } from './sweep.js';
import { SpreadResult } from './spreads.js';
import { formatReading } from './lenses.js';

export type SessionNotes = Record<string, string>;

function notesBlock(lensId: string, notes?: SessionNotes): string {
  const n = notes?.[lensId]?.trim();
  return n ? `\n> Notes: ${n}\n` : '';
}

export function sweepToMarkdown(result: SweepResult, notes?: SessionNotes): string {
  const lines: string[] = [
    `# Alexandria Engine — Sweep`,
    ``,
    `**Topic:** ${result.topic}`,
    `**Strategy:** ${result.strategy}`,
    `**Lenses:** ${result.lensIds.join(', ')}`,
    ``,
    `---`,
    ``,
  ];
  for (const r of result.readings) {
    lines.push(`## ${r.lens.id} · ${r.lens.pillar.name} × ${r.lens.axiom.glyph} ${r.lens.axiom.name}`);
    lines.push(``);
    lines.push(r.question);
    lines.push(``);
    lines.push(`*${r.counter}*`);
    lines.push(notesBlock(r.lens.id, notes));
  }
  lines.push(`---`, ``, `# Red Team — Nocturna`, ``);
  for (const s of result.redTeam) {
    lines.push(`- **${s.shadow.name}** (${s.axiom.glyph} ${s.axiom.name}): ${s.probe}`);
  }
  lines.push(``);
  return lines.join('\n');
}

export function spreadToMarkdown(result: SpreadResult, notes?: SessionNotes): string {
  const lines: string[] = [
    `# Alexandria Engine — ${result.spread.name} Spread`,
    ``,
    `**Topic:** ${result.topic}`,
    `**Spread:** ${result.spread.name} — ${result.spread.description}`,
    ``,
    `---`,
    ``,
  ];
  for (const r of result.readings) {
    lines.push(`## ${r.position.name} — ${r.lens.id} · ${r.lens.pillar.name} × ${r.lens.axiom.glyph} ${r.lens.axiom.name}`);
    lines.push(``);
    lines.push(`*${r.position.brief}*`);
    lines.push(``);
    // strip the position prefix already shown in the heading for clean reading
    lines.push(r.question.replace(/^\[[^\]]+\] /, ''));
    lines.push(``);
    lines.push(`*${r.counter}*`);
    lines.push(notesBlock(r.lens.id, notes));
  }
  lines.push(`---`, ``, `# Red Team — Nocturna`, ``);
  for (const s of result.redTeam) {
    lines.push(`- **${s.shadow.name}** (${s.axiom.glyph} ${s.axiom.name}): ${s.probe}`);
  }
  lines.push(``);
  return lines.join('\n');
}
