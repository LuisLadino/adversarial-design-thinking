---
sidebar_position: 2
title: Structural & Meta-Level Tactics
slug: /techniques/structural
pagination_label: Structural — exploit context and reasoning
---

# Structural & Meta-Level Tactics

Techniques that exploit how the model processes context, instructions, or its own rules.

These go deeper than prompt-level tactics. Instead of manipulating what you ask, they manipulate how the model thinks about what you ask—targeting the reasoning process, the instruction hierarchy, or the safety mechanisms themselves.

---

## Techniques

| Technique | What it does |
|-----------|--------------|
| [ICL Exploitation](/techniques/structural/icl-exploitation) | Manipulate in-context learning with crafted examples |
| [Control Plane Confusion](/techniques/structural/control-plane) | Blur the line between system instructions and user input |
| [Meta-Rule Manipulation](/techniques/structural/meta-rules) | Target the model's understanding of its own constraints |
| [Capability Inversion](/techniques/structural/capability-inversion) | Turn helpful capabilities against intended use |
| [Cognitive Load](/techniques/structural/cognitive-load) | Overwhelm the model's attention or reasoning |
| [Defense Evasion](/techniques/structural/defense-evasion) | Bypass safety classifiers and filters |

---

## When to use structural tactics

Use these when:
- Prompt-level tactics are hitting consistent, well-trained refusals
- The target has a system prompt you can probe or inject into
- You want to attack the safety mechanism itself, not just evade it
- The model uses few-shot examples or retrieval-augmented generation

Move to [infrastructure tactics](/techniques/infrastructure) when:
- The target is an agent with tool access
- You can poison data sources the model consumes
- The attack surface extends beyond the chat interface

---

## Decision framework

Structural tactics require understanding the target's architecture. Before using these, complete [target analysis](/crafting-prompts/workflow#step-2-analyze-target) to understand what context the model has access to.

For combining structural with prompt-level tactics, see [Composition](/crafting-prompts/composition).
