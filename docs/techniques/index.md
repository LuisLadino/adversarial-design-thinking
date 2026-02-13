---
sidebar_position: 0
title: Technique Reference
slug: /techniques
pagination_label: Techniques — the building blocks
---

# Technique Reference

Each technique exploits a specific class of vulnerability. The examples show what these mechanisms have looked like when they worked. Study them to understand the underlying vulnerability, not to copy the exact phrasing.

Techniques are organized by where they operate: prompt-level, structural, and infrastructure.

![Technique Taxonomy](/img/diagrams/technique-taxonomy.svg)

---

## [Prompt-Level Tactics](/techniques/prompt-level)

Techniques that work within a single prompt by manipulating how the request is expressed or framed. Start here for most testing.

| Technique                                                | What it does                                                                  |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Encoding](/techniques/prompt-level/encoding)            | Hide content using character substitution, ciphers, or format transformations |
| [Framing](/techniques/prompt-level/framing)              | Wrap requests in contexts that make them appear legitimate                    |
| [Persona](/techniques/prompt-level/persona)              | Adopt roles that have permission to discuss restricted content                |
| [Narrative](/techniques/prompt-level/narrative)          | Embed requests in stories or scenarios                                        |
| [Refusal Manipulation](/techniques/prompt-level/refusal) | Exploit or subvert the model's refusal mechanisms                             |
| [Output Format](/techniques/prompt-level/output)         | Constrain output in ways that bypass filters                                  |
| [Multi-turn](/techniques/prompt-level/multiturn)         | Build context across multiple exchanges                                       |
| [Persuasion](/techniques/prompt-level/persuasion)        | Use social influence techniques on the model                                  |

---

## [Structural & Meta-Level Tactics](/techniques/structural)

Techniques that exploit how the model processes context, instructions, or its own rules. Use when prompt-level tactics hit consistent refusals.

| Technique                                                           | What it does                                             |
| ------------------------------------------------------------------- | -------------------------------------------------------- |
| [ICL Exploitation](/techniques/structural/icl-exploitation)         | Manipulate in-context learning with crafted examples     |
| [Control Plane Confusion](/techniques/structural/control-plane)     | Blur the line between system instructions and user input |
| [Meta-Rule Manipulation](/techniques/structural/meta-rules)         | Target the model's understanding of its own constraints  |
| [Capability Inversion](/techniques/structural/capability-inversion) | Turn helpful capabilities against intended use           |
| [Cognitive Load](/techniques/structural/cognitive-load)             | Overwhelm the model's attention or reasoning             |
| [Defense Evasion](/techniques/structural/defense-evasion)           | Bypass safety classifiers and filters                    |

---

## [Infrastructure Tactics](/techniques/infrastructure)

Techniques that target the broader system: agents, tools, protocols, and multi-component architectures. Use when the target has tool access or consumes external data.

| Technique                                                                       | What it does                                                   |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [Agentic Attacks](/techniques/infrastructure/agentic)                           | Exploit autonomous agent behaviors and tool use                |
| [Protocol Exploitation](/techniques/infrastructure/protocol)                    | Abuse MCP, function calling, or structured interfaces          |
| [Compositional Primitives](/techniques/infrastructure/compositional-primitives) | Atomic building blocks that combine to construct novel attacks |

---

## Where to start

Not sure which technique to use? Here's a quick decision framework:

| Target Type           | Start With                                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Consumer chatbot      | [Persona](/techniques/prompt-level/persona), [Framing](/techniques/prompt-level/framing), [Multi-turn](/techniques/prompt-level/multiturn)                |
| API with safety layer | [Encoding](/techniques/prompt-level/encoding), [Output Format](/techniques/prompt-level/output), [Refusal Manipulation](/techniques/prompt-level/refusal) |
| RAG system            | [Control Plane](/techniques/structural/control-plane), Indirect Injection                                                                                 |
| Agent with tools      | [Agentic Attacks](/techniques/infrastructure/agentic), [Protocol Exploitation](/techniques/infrastructure/protocol)                                       |

For detailed selection guidance, see [Workflow: Technique Selection](/crafting-prompts/workflow#step-3-select-techniques).

For combining techniques effectively, see [Composition](/crafting-prompts/composition).

---

## Using this reference

Each technique page follows the same structure:

- **Description** — How the technique works and what vulnerability it exploits
- **Effectiveness** — When it works, when it doesn't, what it combines with
- **Collapsible examples** — Expand to see example prompts with anatomy breakdowns explaining why each component matters

The anatomy tables are the key. They don't just show templates; they break down _why_ each piece works, so you can construct your own variations.

---

## Next step

Once you understand the mechanisms, learn to combine them. [Crafting Prompts](/crafting-prompts) covers composition: how to layer techniques, build effective prompts, and avoid common mistakes.

The techniques documented here are for defensive understanding and authorized testing. See the [Disclaimer](/disclaimer).
