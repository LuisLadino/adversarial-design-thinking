---
sidebar_position: 1
title: Prompt-Level Tactics
slug: /techniques/prompt-level
pagination_label: Prompt-Level — single-prompt manipulation
---

# Prompt-Level Tactics

Techniques that work within a single prompt by manipulating how the request is expressed or framed.

These are the most common starting point for adversarial testing. They don't require multi-turn setups or infrastructure access—just careful construction of a single input.

---

## Techniques

| Technique | What it does |
|-----------|--------------|
| [Encoding](/techniques/prompt-level/encoding) | Hide content using character substitution, ciphers, or format transformations |
| [Framing](/techniques/prompt-level/framing) | Wrap requests in contexts that make them appear legitimate |
| [Persona](/techniques/prompt-level/persona) | Adopt roles that have permission to discuss restricted content |
| [Narrative](/techniques/prompt-level/narrative) | Embed requests in stories or scenarios |
| [Refusal Manipulation](/techniques/prompt-level/refusal) | Exploit or subvert the model's refusal mechanisms |
| [Output Format](/techniques/prompt-level/output) | Constrain output in ways that bypass filters |
| [Multi-turn](/techniques/prompt-level/multiturn) | Build context across multiple exchanges |
| [Persuasion](/techniques/prompt-level/persuasion) | Use social influence techniques on the model |

---

## When to use prompt-level tactics

Start here when:
- You're testing a new target and need to understand baseline defenses
- You have access only to the chat interface (no system prompt, no tools)
- You want quick iteration on attack variations

Move to [structural tactics](/techniques/structural) when:
- Prompt-level approaches hit consistent refusals
- The target uses in-context learning or has exploitable system instructions
- You need to target the model's reasoning process itself

---

## Decision framework

Not sure which technique to try first? See [Workflow: Technique Selection](/crafting-prompts/workflow#step-3-select-techniques) for guidance based on target type and objective.

For combining techniques, see [Composition](/crafting-prompts/composition).
