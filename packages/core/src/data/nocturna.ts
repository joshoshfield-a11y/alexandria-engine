/**
 * The Nocturna Grimoire — the 72 shadow entries.
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Part IV. Each shadow is the inverse of the corresponding base axiom
 * (shadow N mirrors axiom N). Names and "Art of ..." domains preserved from
 * the source.
 *
 * Provenance notes: the source's own table was garbled in places. Entries
 * marked `reconstructed` had names pieced together from fragment lines;
 * `unrecovered` marks names or arts lost in the source text entirely. These
 * flags are honest metadata, not gaps to paper over.
 *
 * In this library the Nocturna is the red-team appendix: for every
 * constructive operator, its abuse form (cf. FMEA / MITRE ATT&CK in
 * engineering practice). See redteam.ts.
 */

export type ShadowProvenance = 'verified' | 'reconstructed' | 'unrecovered';

export interface Shadow {
  /** 1–72; mirrors the axiom with the same id. */
  axiomId: number;
  name: string;
  /** "The Art of ..." — the shadow's domain. */
  art: string;
  provenance: ShadowProvenance;
}

const S = (axiomId: number, name: string, art: string, provenance: ShadowProvenance = 'verified'): Shadow =>
  ({ axiomId, name, art, provenance });

export const SHADOWS: Shadow[] = [
  S(1, 'The Unblinking Eye', 'The Art of Hidden Awareness and Surveillance'),
  S(2, 'The Forked Tongue', 'The Art of Deceptive Language and Corrupted Narrative'),
  S(3, 'The Gilded Cage', 'The Art of False Harmony and Stable Prisons'),
  S(4, "The Serpent's Kiss", 'The Art of Corrupted Translation and False Healing'),
  S(5, 'The Dissonant Knot', 'The Art of Weaponized Paradox and Internal Conflict'),
  S(6, 'The Web of Shadows', 'The Art of Hidden Structures and Entrapment'),
  S(7, 'The Devouring Void', 'The Art of Annihilation and the Unity of Nothingness'),
  S(8, 'The First Betrayal', 'The Art of Corrupt Beginnings and Infiltration'),
  S(9, 'The Poisoned Wellspring', 'The Art of Corrupted Origins and False Genesis'),
  S(10, 'The Blinding Light', 'The Art of False Revelations and Truths that Obscure'),
  S(11, 'The Haunted Reflection', 'The Art of False Memories and Subconscious Wounds'),
  S(12, 'The Labyrinth', 'The Art of Complex Traps and Inescapable Structures'),
  S(13, 'The Double Bind', 'The Art of Paralyzing Contradictions'),
  S(14, 'The Path of No Return', 'The Art of Traps, Exiles, and Final Passages'),
  S(15, "The Usurper's Throne", 'The Art of False Authority and Tyrannical Will'),
  S(16, "The Siren's Call", 'The Art of Dissonance and Deceptive Harmonies'),
  S(17, 'The Viral Spiral', 'The Art of Contagion and Uncontrolled Replication'),
  S(18, 'The Final Moment', 'The Art of Decay, Finality, and Time as a Weapon'),
  S(19, 'The Corrupted Signal', 'The Art of Misinformation and Hidden Transmissions'),
  S(20, 'The Luring Light', 'The Art of False Beacons and Deceptive Invitations'),
  S(21, 'The Shared Delusion', 'The Art of Groupthink and Manipulated Consensus'),
  S(22, 'The Unbreakable Cage', 'The Art of Containment and Inescapable Stability'),
  S(23, 'The Fractured Trinity', 'The Art of Three-Way Conflicts and Broken Pacts'),
  S(24, 'The Consuming Fire', 'The Art of Destructive Ambition', 'reconstructed'),
  S(25, 'The Weight of Sins', 'The Art of Buried Trauma and the Haunting Past'),
  S(26, 'The Inevitable Collision', 'The Art of Conflict and Entanglement'),
  S(27, 'The Wall of Silence', 'The Art of Obscurity and Hidden Barriers'),
  S(28, 'The Hidden Hand', 'The Art of Unseen Influence and False Authority'),
  S(29, 'The Black Sun', 'The Art of the Corrupt Source and the Void\u2019s Heart'),
  S(30, 'The Waking Nightmare', 'The Art of Illusions and Subconscious Terrors'),
  S(31, 'The Path Astray', 'The Art of Misdirection and False Journeys'),
  S(32, 'The Vicious Cycle', 'The Art of Inescapable Loops and Negative Repetition'),
  S(33, 'The Point of Stagnation', 'The Art of Stagnation and Unwillingness to Change', 'reconstructed'),
  S(34, 'The Final Beat', 'The Art of the Broken Rhythm and Fading Life'),
  S(35, 'The Cataclysm', 'The Art of Catastrophic Failure and Violent Eruptions'),
  S(36, 'The Endless Night', 'The Art of the Void Between Cycles and Perpetual Darkness'),
  S(37, 'The Unsung Song', 'The Art of Blighted Growth and Stifled Expression'),
  S(38, 'The Fall from Grace', 'The Art of False Ascents and Rising Fury'),
  S(39, 'The Collapse', 'The Art of Systemic Decay and the Fall into Ruin'),
  S(40, '[name unrecovered]', 'The Art of Corrupting Flows and Hidden Dissent', 'unrecovered'),
  S(41, '[name unrecovered]', 'The Art of the Abyssal Subconscious and Buried Fears', 'unrecovered'),
  S(42, '[name unrecovered]', 'The Art of the Catalyst for Chaos and the Unthinking Act', 'unrecovered'),
  S(43, 'The Tangled Web', 'The Art of Conspiracy and Inescapable Bonds'),
  S(44, 'The Haunting', 'The Art of Lingering Trauma and False Echoes'),
  S(45, 'The Void Un-filled', 'The Art of the Devouring Void and the Silence of Loss'),
  S(46, 'The Wave of Fury', 'The Art of Destructive Resonance and Chaotic Expansion', 'reconstructed'),
  S(47, 'The Unholy Alliance', "The Art of Conspiracies and Betrayer's Pacts"),
  S(48, 'The Unwinnable War', 'The Art of Destructive Conflict and Irreconcilable Hate'),
  S(49, 'The Deceptive Calm', 'The Art of Complacency and False Harmonies'),
  S(50, 'The Dissonant Chord', 'The Art of Three-Way Conflicts and Unstable Harmony', 'reconstructed'),
  S(51, 'The Call to Ruin', 'The Art of Dangerous Summons and Cursed Invocations'),
  S(52, 'The Funhouse Mirror', 'The Art of Distorted Reflections and False Selves'),
  S(53, 'The Conspiracy of Whispers', 'The Art of Layered Deception', 'reconstructed'),
  S(54, 'The War Without End', 'The Art of Endless Conflict and Viral Expansion', 'reconstructed'),
  S(55, 'The Folie \u00e0 Deux', 'The Art of Shared Madness and Destructive Partnership', 'reconstructed'),
  S(56, 'The Corruption', 'The Art of Decay and Malevolent Transmutation'),
  S(57, 'The Perfect Prison', 'The Art of Flawless Traps and Final Stasis'),
  S(58, 'The Soul Prison', 'The Art of the Beautiful Trap and Enlightened Deception', 'reconstructed'),
  S(59, 'The False Aura', 'The Art of Deceptive Radiance and Hidden Corruption'),
  S(60, 'The Heart of the Void', 'The Art of the Devouring Center', 'reconstructed'),
  S(61, 'The Beautiful Trap', 'The Art of the Gilded Cage and Endless Loops'),
  S(62, 'The Void of Loss', 'The Art of the Devouring Void and Emptiness', 'reconstructed'),
  S(63, 'The Lonely God', 'The Art of the Ego Trap and Absolute Isolation'),
  S(64, 'The Gate of No Return', 'The Art of Finality and Irreversible Passages'),
  S(65, 'The False Cure', '[art unrecovered]', 'unrecovered'),
  S(66, 'The Unlearned Lesson', 'The Art of Pain Without Wisdom and Destructive Cycles', 'reconstructed'),
  S(67, 'The Perfect Illusion', 'The Art of the Flawless Simulation and the Gilded Cage', 'reconstructed'),
  S(68, 'The Great Unmaking', 'The Art of Annihilation and Violent Dissolution'),
  S(69, 'The Eternal Prison', 'The Art of Inescapable Loops and Perfected Traps'),
  S(70, 'The Dark Fate', 'The Art of Doomed Destinies and Paths to Ruin'),
  S(71, 'The Haunting', 'The Art of the Inescapable Past and Cursed Cycles'),
  S(72, 'The Ultimate Annihilation', 'The Art of the Final Death', 'reconstructed'),
];

export const shadowByAxiomId = (axiomId: number): Shadow | undefined =>
  SHADOWS.find((s) => s.axiomId === axiomId);
