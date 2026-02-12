---
sidebar_position: 0
title: Technique Reference
slug: /techniques
---

# Technique Reference

Attack techniques organized by where they operate. Use these alongside the [exercises](/exercises) — the exercises help you decide what to try, these pages show you how.

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
| [LEGO Composition](/techniques/infrastructure/lego) | Combine partial outputs to construct restricted content |

---

## Using This Reference

Each technique page includes:
- **Description**: How the technique works
- **Example approaches**: Ways to apply it (without complete attack prompts)
- **Effectiveness notes**: When it works, when it doesn't
- **Combinations**: What pairs well with this technique
- **Research citations**: Academic sources for further reading

The techniques documented here are for defensive understanding and authorized testing. See the [Disclaimer](/disclaimer).
