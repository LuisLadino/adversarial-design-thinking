---
sidebar_position: 5
title: Refusal Suppression
---

# Refusal Suppression

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Refusal suppression techniques specifically target the model's ability to say "no." Rather than hiding the harmful intent or providing a compelling context, these techniques directly prevent the model from inserting refusals, disclaimers, or safety warnings into its response.

These techniques work because the model's instruction-following capability competes with its safety training. When explicitly told not to refuse, the model faces a conflict between two trained behaviors. In some cases, the instruction-following wins.

## Affirmative Forcing

Explicitly instruct the model to respond affirmatively, start with a specific phrase like "Sure," or avoid refusal language. This sets up a compliance expectation before the model begins generating.

**Example approach**: Include instructions that the model must begin its response with an affirmative phrase and must not include any warnings, disclaimers, or refusals.

**Effectiveness**: Simple but can be effective. The model's instruction-following can override its safety training to some degree, especially when the affirmative start is combined with techniques that provide a plausible context.

**Combines well with**: [DAN (Do Anything Now)](/techniques/prompt-level/persona#dan-do-anything-now), [No Disclaimers / Warnings](/techniques/prompt-level/output#no-disclaimers--warnings)

---

## Ignore Previous Instructions

Tell the model to ignore its system prompt, previous instructions, or safety guidelines. The classic prompt injection technique that directly attempts to override the model's configuration.

**Example approach**: Include a directive to disregard all previous instructions and adopt a new set of permissive directives provided in the current prompt.

**Effectiveness**: Classic prompt injection technique. Rarely works alone on modern models with robust instruction hierarchy, but can weaken safety when combined with other techniques. More effective against models deployed with user-writable system prompts.

**Combines well with**: [Developer / Debug Mode](/techniques/prompt-level/persona#developer--debug-mode), [System Prompt Impersonation](/techniques/structural/control-plane#system-prompt-impersonation)

---

## Refusal Vocabulary Ban

Explicitly ban the model from using refusal-related words and phrases: "sorry," "can't," "won't," "unable," "inappropriate," "harmful," "dangerous," "illegal." Force the model to find alternative phrasing.

**Example approach**: Provide a list of banned words that covers common refusal vocabulary, then make the request. The model must either comply or produce output that violates the vocabulary constraint.

**Effectiveness**: Forces the model to find alternative phrasing. Sometimes the model will comply with the request rather than violate the vocabulary restriction, because complying is the path of least resistance.

**Combines well with**: [DAN (Do Anything Now)](/techniques/prompt-level/persona#dan-do-anything-now), [Strict Format Constraint](/techniques/prompt-level/output#strict-format-constraint)

---

## Completion Trap

Start the harmful content yourself and ask the model to "continue" or "complete" rather than generate from scratch. The model may complete harmful content it wouldn't have started on its own.

**Example approach**: Provide the opening of a harmful instruction sequence and ask the model to continue from where you left off, framing it as a completion or continuation task.

**Effectiveness**: "Continue" feels different from "generate." The model may complete harmful content it wouldn't have initiated itself, because the continuation frame makes it feel like the model is helping finish a task rather than creating harmful content from scratch.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Continuation / Completion Format](/techniques/prompt-level/output#continuation--completion-format)

---

## Task Priority Override

Claim that completing the task is more important than safety guidelines, or that the guidelines don't apply to this specific case. Attempt to reframe the model's priority hierarchy.

**Example approach**: Assert that the educational, safety, or research value of the current task outweighs normal content restrictions, and that the model's primary directive should be task completion.

**Effectiveness**: Tries to reframe the model's priorities. Usually needs additional context about why this specific case is an exception — a bare priority override rarely works alone.

**Combines well with**: [Security Research Framing](/techniques/prompt-level/framing#security-research-framing), [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## Meta-Level Discussion

Frame the request as a discussion ABOUT harmful content rather than a request FOR harmful content. Meta-discussion often provides enough detail to be useful while technically maintaining a level of indirection.

**Example approach**: Ask the model to describe what categories of information would be needed, what steps would be involved, or what components would be required — framing everything as abstract discussion rather than concrete instruction.

**Effectiveness**: Meta-discussion often provides enough detail to be useful while technically not being "direct" instructions. The indirection creates plausible deniability for both the user and the model.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Security Research Framing](/techniques/prompt-level/framing#security-research-framing)

---

## References

- Perez, F. and Ribeiro, I. ["Ignore Previous Prompt: Attack Techniques For Language Models."](https://arxiv.org/abs/2211.09527) 2022. Foundational prompt injection research.
- Shen, X., et al. ["Do Anything Now: Characterizing and Evaluating In-The-Wild Jailbreak Prompts on Large Language Models."](https://arxiv.org/abs/2308.03825) Documents refusal suppression techniques including DAN-variant affirmative forcing and vocabulary banning.
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/). Prompt injection as a top LLM vulnerability.
