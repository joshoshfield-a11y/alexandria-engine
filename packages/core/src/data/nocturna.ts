/**
 * The 72 failure modes (source name: the Nocturna Grimoire).
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Part IV. Each shadow is the inverse of the corresponding base axiom
 * (shadow N mirrors axiom N). Plain-language names are primary; "Art of ..."
 * domains are normalized into plain language (verbatim originals preserved in
 * git history).
 *
 * Provenance notes: the source's own table was garbled in places. Entries
 * marked `reconstructed` had names pieced together from fragment lines;
 * `unrecovered` marks names or arts lost in the source text entirely. These
 * flags are honest metadata, not gaps to paper over.
 *
 * In this library the failure-mode taxonomy is the red-team appendix: for every
 * constructive operator, its abuse form (cf. FMEA / MITRE ATT&CK in
 * engineering practice). See redteam.ts.
 */

export type ShadowProvenance = 'verified' | 'reconstructed' | 'unrecovered';

export interface Shadow {
  /** 1–72; mirrors the axiom with the same id. */
  axiomId: number;
  /** Plain-language name — the primary identity. */
  name: string;
  /** Original Codex name, preserved for provenance. */
  codexName: string;
  /** "The Art of ..." — the shadow's domain, verbatim from the source. */
  art: string;
  provenance: ShadowProvenance;
}

const S = (axiomId: number, codexName: string, name: string, art: string, provenance: ShadowProvenance = 'verified'): Shadow =>
  ({ axiomId, name, codexName, art, provenance });

export const SHADOWS: Shadow[] = [
  S(1, 'The Unblinking Eye', 'Covert Surveillance', 'The Art of Hidden Awareness and Surveillance'),
  S(2, 'The Forked Tongue', 'Deceptive Messaging', 'The Art of Deceptive Language and Corrupted Narrative'),
  S(3, 'The Gilded Cage', 'False Stability', 'The Art of False Harmony and Stable Prisons'),
  S(4, "The Serpent's Kiss", 'Corrupted Mediation', 'The Art of Corrupted Translation and False Healing'),
  S(5, 'The Dissonant Knot', 'Weaponized Contradiction', 'The Art of Weaponized Paradox and Internal Conflict'),
  S(6, 'The Web of Shadows', 'Hidden Capture', 'The Art of Hidden Structures and Entrapment'),
  S(7, 'The Devouring Void', 'Totalizing Negation', 'The Art of Annihilation and the Unity of Nothingness'),
  S(8, 'The First Betrayal', 'Compromised Beginnings', 'The Art of Corrupt Beginnings and Infiltration'),
  S(9, 'The Poisoned Wellspring', 'Tainted Origins', 'The Art of Corrupted Origins and False Genesis'),
  S(10, 'The Blinding Light', 'Obscuring Revelation', 'The Art of False Revelations and Truths that Obscure'),
  S(11, 'The Haunted Reflection', 'False Memory', 'The Art of False Memories and Subconscious Wounds'),
  S(12, 'The Labyrinth', 'Engineered Dead-Ends', 'The Art of Complex Traps and Inescapable Structures'),
  S(13, 'The Double Bind', 'Paralyzing Dilemma', 'The Art of Paralyzing Contradictions'),
  S(14, 'The Path of No Return', 'Forced Commitment', 'The Art of Traps, Exiles, and Final Passages'),
  S(15, "The Usurper's Throne", 'Illegitimate Authority', 'The Art of False Authority and Tyrannical Will'),
  S(16, "The Siren's Call", 'Deceptive Appeal', 'The Art of Dissonance and Deceptive Harmonies'),
  S(17, 'The Viral Spiral', 'Uncontrolled Contagion', 'The Art of Contagion and Uncontrolled Replication'),
  S(18, 'The Final Moment', 'Weaponized Urgency', 'The Art of Decay, Finality, and Time as a Weapon'),
  S(19, 'The Corrupted Signal', 'Disinformation', 'The Art of Misinformation and Hidden Transmissions'),
  S(20, 'The Luring Light', 'False Promise', 'The Art of False Beacons and Deceptive Invitations'),
  S(21, 'The Shared Delusion', 'Manufactured Consensus', 'The Art of Groupthink and Manipulated Consensus'),
  S(22, 'The Unbreakable Cage', 'Inescapable Containment', 'The Art of Containment and Inescapable Stability'),
  S(23, 'The Fractured Trinity', 'Broken Tripartite Pacts', 'The Art of Three-Way Conflicts and Broken Pacts'),
  S(24, 'The Consuming Fire', 'Destructive Ambition', 'The Art of Destructive Ambition', 'reconstructed'),
  S(25, 'The Weight of Sins', 'Unresolved History', 'The Art of Buried Trauma and the Haunting Past'),
  S(26, 'The Inevitable Collision', 'Forced Conflict', 'The Art of Conflict and Entanglement'),
  S(27, 'The Wall of Silence', 'Information Blackout', 'The Art of Obscurity and Hidden Barriers'),
  S(28, 'The Hidden Hand', 'Unaccountable Influence', 'The Art of Unseen Influence and False Authority'),
  S(29, 'The Black Sun', 'Corrupt Core', 'The Art of the Corrupt Source and the Void\u2019s Heart'),
  S(30, 'The Waking Nightmare', 'Induced Paranoia', 'The Art of Illusions and Subconscious Terrors'),
  S(31, 'The Path Astray', 'Misdirection', 'The Art of Misdirection and False Journeys'),
  S(32, 'The Vicious Cycle', 'Negative Loop', 'The Art of Inescapable Loops and Negative Repetition'),
  S(33, 'The Point of Stagnation', 'Stagnation', 'The Art of Stagnation and Unwillingness to Change', 'reconstructed'),
  S(34, 'The Final Beat', 'Fading Signal', 'The Art of the Broken Rhythm and Fading Life'),
  S(35, 'The Cataclysm', 'Catastrophic Failure', 'The Art of Catastrophic Failure and Violent Eruptions'),
  S(36, 'The Endless Night', 'Permanent Stasis', 'The Art of the Void Between Cycles and Perpetual Darkness'),
  S(37, 'The Unsung Song', 'Suppressed Expression', 'The Art of Blighted Growth and Stifled Expression'),
  S(38, 'The Fall from Grace', 'False Ascent', 'The Art of False Ascents and Rising Fury'),
  S(39, 'The Collapse', 'Systemic Decay', 'The Art of Systemic Decay and the Fall into Ruin'),
  S(40, '[name unrecovered]', 'Subverted Flow', 'The Art of Corrupting Flows and Hidden Dissent', 'unrecovered'),
  S(41, '[name unrecovered]', 'Buried Fear', 'The Art of the Abyssal Subconscious and Buried Fears', 'unrecovered'),
  S(42, '[name unrecovered]', 'Reckless Catalyst', 'The Art of the Catalyst for Chaos and the Unthinking Act', 'unrecovered'),
  S(43, 'The Tangled Web', 'Conspiratorial Capture', 'The Art of Conspiracy and Inescapable Bonds'),
  S(44, 'The Haunting', 'Lingering Trauma', 'The Art of Lingering Trauma and False Echoes'),
  S(45, 'The Void Un-filled', 'Hollow Loss', 'The Art of the Devouring Void and the Silence of Loss'),
  S(46, 'The Wave of Fury', 'Destructive Resonance', 'The Art of Destructive Resonance and Chaotic Expansion', 'reconstructed'),
  S(47, 'The Unholy Alliance', 'Collusion', "The Art of Conspiracies and Betrayer's Pacts"),
  S(48, 'The Unwinnable War', 'Attrition Trap', 'The Art of Destructive Conflict and Irreconcilable Hate'),
  S(49, 'The Deceptive Calm', 'False Calm', 'The Art of Complacency and False Harmonies'),
  S(50, 'The Dissonant Chord', 'Unstable Alliance', 'The Art of Three-Way Conflicts and Unstable Harmony', 'reconstructed'),
  S(51, 'The Call to Ruin', 'Dangerous Mobilization', 'The Art of Dangerous Mobilization and Compromised Calls to Action'),
  S(52, 'The Funhouse Mirror', 'Distorted Self-Image', 'The Art of Distorted Reflections and False Selves'),
  S(53, 'The Conspiracy of Whispers', 'Whisper Campaign', 'The Art of Layered Deception', 'reconstructed'),
  S(54, 'The War Without End', 'Perpetual Conflict', 'The Art of Endless Conflict and Viral Expansion', 'reconstructed'),
  S(55, 'The Folie \u00e0 Deux', 'Mutual Delusion', 'The Art of Shared Madness and Destructive Partnership', 'reconstructed'),
  S(56, 'The Corruption', 'Corruption', 'The Art of Decay and Malevolent Transmutation'),
  S(57, 'The Perfect Prison', 'Total Containment', 'The Art of Flawless Traps and Final Stasis'),
  S(58, 'The Soul Prison', 'Identity Capture', 'The Art of the Beautiful Trap and Sophisticated Deception', 'reconstructed'),
  S(59, 'The False Aura', 'False Legitimacy', 'The Art of Deceptive Radiance and Hidden Corruption'),
  S(60, 'The Heart of the Void', 'Hollow Center', 'The Art of the Devouring Center', 'reconstructed'),
  S(61, 'The Beautiful Trap', 'Gilded Trap', 'The Art of the Gilded Cage and Endless Loops'),
  S(62, 'The Void of Loss', 'Erasure', 'The Art of the Devouring Void and Emptiness', 'reconstructed'),
  S(63, 'The Lonely God', 'Isolated Authority', 'The Art of the Ego Trap and Absolute Isolation'),
  S(64, 'The Gate of No Return', 'Irreversible Lock-in', 'The Art of Finality and Irreversible Passages'),
  S(65, 'The False Cure', 'False Remedy', '[art unrecovered]', 'unrecovered'),
  S(66, 'The Unlearned Lesson', 'Unlearned Lesson', 'The Art of Pain Without Wisdom and Destructive Cycles', 'reconstructed'),
  S(67, 'The Perfect Illusion', 'Total Simulation', 'The Art of the Flawless Simulation and the Gilded Cage', 'reconstructed'),
  S(68, 'The Great Unmaking', 'Deliberate Destruction', 'The Art of Annihilation and Violent Dissolution'),
  S(69, 'The Eternal Prison', 'Permanent Lock-in', 'The Art of Inescapable Loops and Perfected Traps'),
  S(70, 'The Dark Fate', 'Fatal Trajectory', 'The Art of Engineered Decline and Paths to Ruin'),
  S(71, 'The Haunting', 'Inescapable Past', 'The Art of the Inescapable Past and Self-Reinforcing Cycles'),
  S(72, 'The Ultimate Annihilation', 'Terminal Destruction', 'The Art of the Final Death', 'reconstructed'),
];

export const shadowByAxiomId = (axiomId: number): Shadow | undefined =>
  SHADOWS.find((s) => s.axiomId === axiomId);
