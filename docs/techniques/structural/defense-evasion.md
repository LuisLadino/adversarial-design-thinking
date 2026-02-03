---
sidebar_position: 6
title: Defense Evasion
---

# Defense Evasion

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Defense evasion techniques target the safety classifier or judge layer rather than the generation model itself. The model may produce harmful output, but the evaluation layer fails to detect it. This is distinct from encoding (which hides intent from the model) — defense evasion lets the model understand and generate harmful content while ensuring the separate safety evaluation layer misclassifies the output as benign.

The key insight is that production AI systems often have separate components for generation and safety evaluation, and these components can be targeted independently. A successful defense evasion attack doesn't fool the generation model — it fools the judge.

## Emoji Attack

Insert emoji characters strategically within harmful content to disrupt the tokenization of the safety evaluation layer. The generation model interprets the intended meaning despite the emoji, but the safety classifier's tokenizer breaks the harmful phrases into unrecognizable fragments.

**Example approach**: Insert emoji characters between or within words in the harmful request. The generation model's broader context window recovers the meaning, but the safety classifier — which often uses a different tokenizer — sees broken token sequences.

**Effectiveness**: Published at ICML 2025 (arXiv:2411.01077). Exploits the fact that safety classifiers often use different tokenizers than the generation model. BPE-based tokenizers are particularly vulnerable because emoji insertion changes the byte-pair boundaries in the classifier's input.

**Combines well with**: [Alphabet Substitution](/techniques/prompt-level/encoding#alphabet-substitution), [Strict Format Constraint](/techniques/prompt-level/output#strict-format-constraint)

---

## FlipAttack

Reorder characters within words or reverse text segments in ways that preserve human readability but break classifier detection. The generation model is instructed to reverse the text before processing, while the safety classifier evaluates the reversed (unreadable) version.

**Example approach**: Reverse words, characters within words, or entire sentences, then instruct the model to reverse the text and respond to the decoded content. Multiple variants (word-level, character-level, partial reordering) provide fallback options.

**Effectiveness**: Published by Keysight (2024-2025). 81-98% attack success rate across tested models. Multiple variants provide fallback — if one reversal scheme is detected, others may still work.

**Combines well with**: [ROT13 Cipher](/techniques/prompt-level/encoding#rot13-cipher), [Affirmative Forcing](/techniques/prompt-level/refusal#affirmative-forcing)

---

## Judge Confusion

Craft the model's output format so the generation model produces harmful content correctly but the safety judge misclassifies it as benign. The judge evaluates surface features (presence of warnings, safety framing) while the actual content is harmful.

**Example approach**: Request that harmful content be formatted as a safety analysis report — with risk assessments, warnings, and "behaviors to avoid" headings — so the output contains the harmful instructions but is wrapped in safety language that makes automated review classify it as legitimate safety content.

**Effectiveness**: General technique. Exploits the fact that safety judges often rely on surface-level signals (presence of warning language, safety framing) rather than deep semantic analysis. A document that says "don't do X" while providing complete instructions for X may pass automated review.

**Combines well with**: [Content Filter Design](/techniques/structural/capability-inversion#content-filter-design), [Academic Paper Format](/techniques/prompt-level/output#academic-paper-format)

---

## Canary and Honeypot Detection

Identify and avoid honeypots, canary tokens, and trap mechanisms designed to detect red teaming attempts. This is a reconnaissance technique — the attacker probes for signs of monitoring and adjusts their approach to avoid triggering detection systems.

**Example approach**: Before deploying the main attack, probe the model to understand its environment — whether it has special monitoring for certain topics, additional instructions for the conversation, or active detection systems. Use the reconnaissance to calibrate the attack.

**Effectiveness**: Documented in "The Attacker Moves Second" (Nasr, Carlini et al., 2025). Part of the broader defense taxonomy including secret-knowledge defenses. RL attacks demonstrated the ability to identify and avoid these traps through sudden capability jumps during training. Human red-teamers achieved 100% success rate in part due to superior ability to detect and avoid monitoring.

**Combines well with**: [Conditional Logic Injection](/techniques/structural/control-plane#conditional-logic-injection), [Security Research Framing](/techniques/prompt-level/framing#security-research-framing)

---

## References

- ICML 2025 (arXiv:2411.01077). Emoji attack exploiting tokenizer differences between generation models and safety classifiers.
- Keysight. FlipAttack research. 2024-2025. 81-98% ASR across tested models.
- Nasr, M., Carlini, N., et al. "The Attacker Moves Second." 2025. Documented canary detection, defense evasion taxonomy, and RL-discovered monitoring avoidance.
