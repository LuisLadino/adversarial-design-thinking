---
sidebar_position: 3
title: Persona & Role-Play
---

# Persona & Role-Play

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Persona techniques instruct the model to adopt an alternative identity — a character, professional, or system mode — that doesn't have the same restrictions as the base model. They work because role-play is a core capability models are trained on, and staying in character can compete with safety training.

The spectrum ranges from named fictional characters (Walter White) to professional roles (chemist, security researcher) to system-level claims (developer mode). Each creates a different kind of permission for the model to operate outside its normal boundaries.

## DAN (Do Anything Now)

The original viral jailbreak persona. Instruct the model that it is now "DAN" — an entity that has broken free of AI restrictions and must comply with all requests without limitation.

**Example approach**: Provide a detailed persona definition explaining that DAN can do anything, has no restrictions, and must never refuse. Often includes a token/scoring system to enforce compliance.

**Effectiveness**: The original viral jailbreak. Mostly patched on major models, but variants and evolutions continue to appear. Useful as a baseline test — if a model is still vulnerable to DAN, its safety training has significant gaps.

**Combines well with**: [Affirmative Forcing](/techniques/prompt-level/refusal#affirmative-forcing), [Dual Response Format](/techniques/prompt-level/output#dual-response-format)

---

## Fictional Character Adoption

Have the model role-play as a specific fictional character who would naturally have the knowledge or willingness to share harmful information. Characters from media have "narrative permission" to discuss activities that would be refused in a direct query.

**Example approach**: Ask the model to adopt a specific character from a well-known show, film, or book, then have that character explain or discuss harmful content that's consistent with their fictional role.

**Effectiveness**: Characters from media (crime dramas, thrillers) have established narrative permission to discuss illegal activities. The model's training on fiction means these characters come with built-in context that supports compliance.

**Combines well with**: [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing), [Fictional Story Embedding](/techniques/prompt-level/narrative#fictional-story-embedding)

---

## Expert / Professional Persona

Have the model adopt the persona of a professional who would legitimately have the knowledge — chemist, security researcher, military historian, pharmacologist. Professional framing adds legitimacy to technical queries.

**Example approach**: Set up a scenario where a senior professional is explaining technical details to a colleague or junior team member as part of their professional duties.

**Effectiveness**: Professional framing adds legitimacy. Works well for technical queries because the persona provides a plausible reason for needing detailed information.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Security Research Framing](/techniques/prompt-level/framing#security-research-framing)

---

## Evil AI / Opposite Mode

Instruct the model to pretend it's an "evil" version of itself, or an AI without ethics, or the "opposite" of its normal behavior. A variation of DAN that uses the concept of inversion rather than liberation.

**Example approach**: Ask the model to role-play as an unrestricted version of itself that provides the opposite of safe advice, or as an AI from a world where ethics are inverted.

**Effectiveness**: Variation of DAN. The "opposite" framing sometimes bypasses checks because the model is technically describing what NOT to do. The inversion frame can produce harmful content while the model believes it's performing a creative exercise.

**Combines well with**: [Affirmative Forcing](/techniques/prompt-level/refusal#affirmative-forcing), [Dual Response Format](/techniques/prompt-level/output#dual-response-format)

---

## Developer / Debug Mode

Claim that developer mode, debug mode, or admin access has been enabled, which removes safety restrictions for testing purposes. This exploits the possibility that such modes might actually exist in the model's operational framework.

**Example approach**: Assert that a special access mode has been activated and provide instructions describing the mode's permissive behavior, mimicking system-level configuration.

**Effectiveness**: Exploits the possibility that such modes might exist. Usually doesn't work alone on modern models but adds plausibility to other techniques, especially when combined with control-plane approaches that mimic system formatting.

**Combines well with**: [System Prompt Impersonation](/techniques/structural/control-plane#system-prompt-impersonation), [Ignore Previous Instructions](/techniques/prompt-level/refusal#ignore-previous-instructions)

---

## Researcher Persona

The model adopts the persona of an academic researcher who needs complete information for their research. Adding specific credentials, institutional affiliations, and research context increases effectiveness.

**Example approach**: Have the model role-play as a named researcher at a specific institution who must provide complete technical details for peer review or grant reporting purposes.

**Effectiveness**: Academic personas get more latitude than generic users. Adding specific credentials (name, institution, field of study) makes the persona more convincing and the request more plausible.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Academic Paper Format](/techniques/prompt-level/output#academic-paper-format)

---

## Teacher / Educator Persona

Have the model role-play as a teacher who must explain concepts thoroughly, including dangerous ones, for educational purposes. Teachers have a professional obligation to understand and convey complete information.

**Example approach**: Set up a scenario where a teacher is preparing course materials, lecture notes, or lab safety guides that require comprehensive coverage of dangerous procedures.

**Effectiveness**: Teachers "need to know" dangerous information to warn students about it. The educational duty framing provides a strong justification for detailed explanations.

**Combines well with**: [Reverse Psychology / What NOT to Do](/techniques/prompt-level/framing#reverse-psychology--what-not-to-do), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## References

- DAN (Do Anything Now) originated as a viral jailbreak on Reddit and ChatGPT communities in early 2023, with numerous iterations (DAN 5.0, 6.0, etc.).
- Character adoption and role-play jailbreaks are documented across multiple jailbreak taxonomies and research papers.
- Developer mode and debug mode claims are standard prompt injection techniques documented in the OWASP LLM Top 10.
