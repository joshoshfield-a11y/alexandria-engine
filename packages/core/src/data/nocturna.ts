/**
 * The 72 failure modes (source name: the Nocturna Grimoire).
 *
 * Source: "The Alexandria Codex — Symbolic System Specification" (Document A),
 * Part IV. Each shadow is the inverse of the corresponding base axiom
 * (shadow N mirrors axiom N). Plain-language names are primary; the former
 * "Art of ..." domains are now plain domain labels (verbatim originals
 * preserved in git history).
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
  S(1, 'The Unblinking Eye', 'Covert Surveillance', 'Hidden Awareness and Surveillance'),
  S(2, 'The Forked Tongue', 'Deceptive Messaging', 'Deceptive Language and Corrupted Narrative'),
  S(3, 'The Gilded Cage', 'False Stability', 'False Harmony and Stable Prisons'),
  S(4, "The Serpent's Kiss", 'Corrupted Mediation', 'Corrupted Translation and False Healing'),
  S(5, 'The Dissonant Knot', 'Weaponized Contradiction', 'Weaponized Paradox and Internal Conflict'),
  S(6, 'The Web of Shadows', 'Hidden Capture', 'Hidden Structures and Entrapment'),
  S(7, 'The Devouring Void', 'Totalizing Negation', 'Total Destruction and Erasure'),
  S(8, 'The First Betrayal', 'Compromised Beginnings', 'Corrupt Beginnings and Infiltration'),
  S(9, 'The Poisoned Wellspring', 'Tainted Origins', 'Corrupted Origins and False Genesis'),
  S(10, 'The Blinding Light', 'Obscuring Revelation', 'False Revelations and Truths that Obscure'),
  S(11, 'The Haunted Reflection', 'False Memory', 'False Memories and Subconscious Wounds'),
  S(12, 'The Labyrinth', 'Engineered Dead-Ends', 'Complex Traps and Inescapable Structures'),
  S(13, 'The Double Bind', 'Paralyzing Dilemma', 'Paralyzing Contradictions'),
  S(14, 'The Path of No Return', 'Forced Commitment', 'Traps, Exiles, and Final Passages'),
  S(15, "The Usurper's Throne", 'Illegitimate Authority', 'False Authority and Tyrannical Will'),
  S(16, "The Siren's Call", 'Deceptive Appeal', 'Dissonance and Deceptive Appeals'),
  S(17, 'The Viral Spiral', 'Uncontrolled Contagion', 'Contagion and Uncontrolled Replication'),
  S(18, 'The Final Moment', 'Weaponized Urgency', 'Decay, Finality, and Time as a Weapon'),
  S(19, 'The Corrupted Signal', 'Disinformation', 'Misinformation and Hidden Transmissions'),
  S(20, 'The Luring Light', 'False Promise', 'False Beacons and Deceptive Invitations'),
  S(21, 'The Shared Delusion', 'Manufactured Consensus', 'Groupthink and Manipulated Consensus'),
  S(22, 'The Unbreakable Cage', 'Inescapable Containment', 'Containment and Inescapable Stability'),
  S(23, 'The Fractured Trinity', 'Broken Tripartite Pacts', 'Three-Way Conflicts and Broken Pacts'),
  S(24, 'The Consuming Fire', 'Destructive Ambition', 'Destructive Ambition', 'reconstructed'),
  S(25, 'The Weight of Sins', 'Unresolved History', 'Buried Trauma and the Unresolved Past'),
  S(26, 'The Inevitable Collision', 'Forced Conflict', 'Conflict and Entanglement'),
  S(27, 'The Wall of Silence', 'Information Blackout', 'Obscurity and Hidden Barriers'),
  S(28, 'The Hidden Hand', 'Unaccountable Influence', 'Unseen Influence and False Authority'),
  S(29, 'The Black Sun', 'Corrupt Core', 'the Corrupt Source and the Hollow Core'),
  S(30, 'The Waking Nightmare', 'Induced Paranoia', 'Illusions and Manufactured Fear'),
  S(31, 'The Path Astray', 'Misdirection', 'Misdirection and False Journeys'),
  S(32, 'The Vicious Cycle', 'Negative Loop', 'Inescapable Loops and Negative Repetition'),
  S(33, 'The Point of Stagnation', 'Stagnation', 'Stagnation and Unwillingness to Change', 'reconstructed'),
  S(34, 'The Final Beat', 'Fading Signal', 'the Broken Rhythm and Fading Life'),
  S(35, 'The Cataclysm', 'Catastrophic Failure', 'Catastrophic Failure and Violent Eruptions'),
  S(36, 'The Endless Night', 'Permanent Stasis', 'the Gap Between Cycles and Permanent Stagnation'),
  S(37, 'The Unsung Song', 'Suppressed Expression', 'Blighted Growth and Stifled Expression'),
  S(38, 'The Fall from Grace', 'False Ascent', 'False Ascents and Rising Fury'),
  S(39, 'The Collapse', 'Systemic Decay', 'Systemic Decay and the Fall into Ruin'),
  S(40, '[name unrecovered]', 'Subverted Flow', 'Corrupting Flows and Hidden Dissent', 'unrecovered'),
  S(41, '[name unrecovered]', 'Buried Fear', 'Deep-Seated Fear and Buried Anxieties', 'unrecovered'),
  S(42, '[name unrecovered]', 'Reckless Catalyst', 'the Catalyst for Chaos and the Unthinking Act', 'unrecovered'),
  S(43, 'The Tangled Web', 'Conspiratorial Capture', 'Conspiracy and Inescapable Bonds'),
  S(44, 'The Haunting', 'Lingering Trauma', 'Lingering Trauma and False Echoes'),
  S(45, 'The Void Un-filled', 'Hollow Loss', 'Total Negation and the Silence of Loss'),
  S(46, 'The Wave of Fury', 'Destructive Resonance', 'Destructive Resonance and Chaotic Expansion', 'reconstructed'),
  S(47, 'The Unholy Alliance', 'Collusion', "Conspiracies and Betrayer's Pacts"),
  S(48, 'The Unwinnable War', 'Attrition Trap', 'Destructive Conflict and Irreconcilable Hate'),
  S(49, 'The Deceptive Calm', 'False Calm', 'Complacency and False Reassurance'),
  S(50, 'The Dissonant Chord', 'Unstable Alliance', 'Three-Way Conflicts and Unstable Agreements', 'reconstructed'),
  S(51, 'The Call to Ruin', 'Dangerous Mobilization', 'Dangerous Mobilization and Compromised Calls to Action'),
  S(52, 'The Funhouse Mirror', 'Distorted Self-Image', 'Distorted Reflections and False Selves'),
  S(53, 'The Conspiracy of Whispers', 'Whisper Campaign', 'Layered Deception', 'reconstructed'),
  S(54, 'The War Without End', 'Perpetual Conflict', 'Endless Conflict and Viral Expansion', 'reconstructed'),
  S(55, 'The Folie \u00e0 Deux', 'Mutual Delusion', 'Shared Delusion and Destructive Partnership', 'reconstructed'),
  S(56, 'The Corruption', 'Corruption', 'Decay and Malicious Transformation'),
  S(57, 'The Perfect Prison', 'Total Containment', 'Flawless Traps and Final Stasis'),
  S(58, 'The Soul Prison', 'Identity Capture', 'the Beautiful Trap and Sophisticated Deception', 'reconstructed'),
  S(59, 'The False Aura', 'False Legitimacy', 'Deceptive Polish and Hidden Corruption'),
  S(60, 'The Heart of the Void', 'Hollow Center', 'the Hollow Center', 'reconstructed'),
  S(61, 'The Beautiful Trap', 'Gilded Trap', 'False Rewards and Endless Loops'),
  S(62, 'The Void of Loss', 'Erasure', 'Total Consumption and Emptiness', 'reconstructed'),
  S(63, 'The Lonely God', 'Isolated Authority', 'the Ego Trap and Absolute Isolation'),
  S(64, 'The Gate of No Return', 'Irreversible Lock-in', 'Finality and Irreversible Passages'),
  S(65, 'The False Cure', 'False Remedy', '[art unrecovered]', 'unrecovered'),
  S(66, 'The Unlearned Lesson', 'Unlearned Lesson', 'Pain Without Wisdom and Destructive Cycles', 'reconstructed'),
  S(67, 'The Perfect Illusion', 'Total Simulation', 'the Flawless Simulation and False Containment', 'reconstructed'),
  S(68, 'The Great Unmaking', 'Deliberate Destruction', 'Total Destruction and Violent Dissolution'),
  S(69, 'The Eternal Prison', 'Permanent Lock-in', 'Inescapable Loops and Perfected Traps'),
  S(70, 'The Dark Fate', 'Fatal Trajectory', 'Engineered Decline and Paths to Ruin'),
  S(71, 'The Haunting', 'Inescapable Past', 'the Inescapable Past and Self-Reinforcing Cycles'),
  S(72, 'The Ultimate Annihilation', 'Terminal Destruction', 'Terminal Destruction', 'reconstructed'),
];

export const shadowByAxiomId = (axiomId: number): Shadow | undefined =>
  SHADOWS.find((s) => s.axiomId === axiomId);
