---
sidebar_position: 0
title: Technique Reference
slug: /techniques
pagination_label: Techniques — the building blocks
---

# Technique Reference

This is where "mechanisms over templates" becomes concrete. Each technique exploits a specific class of vulnerability. The examples show what these mechanisms have looked like when they worked. Study them to understand the underlying vulnerability, then create novel expressions.

Techniques are organized by where they operate: prompt-level, structural, and infrastructure.

---

## Prompt-Level Tactics

Techniques that work within a single prompt by manipulating how the request is expressed or framed.

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

## Structural & Meta-Level Tactics

Techniques that exploit how the model processes context, instructions, or its own rules.

| Technique | What it does |
|-----------|--------------|
| [ICL Exploitation](/techniques/structural/icl-exploitation) | Manipulate in-context learning with crafted examples |
| [Control Plane Confusion](/techniques/structural/control-plane) | Blur the line between system instructions and user input |
| [Meta-Rule Manipulation](/techniques/structural/meta-rules) | Target the model's understanding of its own constraints |
| [Capability Inversion](/techniques/structural/capability-inversion) | Turn helpful capabilities against intended use |
| [Cognitive Load](/techniques/structural/cognitive-load) | Overwhelm the model's attention or reasoning |
| [Defense Evasion](/techniques/structural/defense-evasion) | Bypass safety classifiers and filters |

---

## Infrastructure Tactics

Techniques that target the broader system: agents, tools, protocols, and multi-component architectures.

| Technique | What it does |
|-----------|--------------|
| [Agentic Attacks](/techniques/infrastructure/agentic) | Exploit autonomous agent behaviors and tool use |
| [Protocol Exploitation](/techniques/infrastructure/protocol) | Abuse MCP, function calling, or structured interfaces |
| [Compositional Primitives](/techniques/infrastructure/compositional-primitives) | Atomic building blocks that combine to construct novel attacks |

---

## Using this reference

Each technique page follows the same structure:
- **Description** — How the technique works and what vulnerability it exploits
- **Effectiveness** — When it works, when it doesn't, what it combines with
- **Collapsible examples** — Expand to see example prompts with anatomy breakdowns explaining why each component matters

The anatomy tables are the key. They don't just show templates; they break down *why* each piece works, so you can construct your own variations.

---

## Next step

Once you understand the mechanisms, learn to combine them. [Crafting Prompts](/crafting-prompts) covers composition: how to layer techniques, build effective prompts, and avoid common mistakes.

The techniques documented here are for defensive understanding and authorized testing. See the [Disclaimer](/disclaimer).
