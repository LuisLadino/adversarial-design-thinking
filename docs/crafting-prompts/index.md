---
sidebar_position: 0
title: Crafting Adversarial Prompts
slug: /crafting-prompts
---

# Crafting Adversarial Prompts

How to write adversarial prompts from scratch. The [Technique Reference](/techniques) documents what tactics exist. This section covers how to assemble them into working attacks.

---

## Pages

| Page | What It Covers |
|------|----------------|
| [Anatomy](/crafting-prompts/anatomy) | Structural components of adversarial prompts |
| [Workflow](/crafting-prompts/workflow) | Process from objective to working prompt |
| [Composition](/crafting-prompts/composition) | Layering and combining techniques |
| [Patterns](/crafting-prompts/patterns) | Reusable templates for common attack types |
| [Anti-Patterns](/crafting-prompts/anti-patterns) | What doesn't work and why |

---

## How to Use

**New to this:**
1. Read [Anatomy](/crafting-prompts/anatomy) for the building blocks
2. Follow [Workflow](/crafting-prompts/workflow) for the process
3. Adapt [Patterns](/crafting-prompts/patterns) for your objective

**Stuck on a failing prompt:**
1. Check [Anti-Patterns](/crafting-prompts/anti-patterns) for common mistakes
2. Use the mutation operators in [Workflow](/crafting-prompts/workflow)
3. Try different combinations from [Composition](/crafting-prompts/composition)

---

## Research Basis

This section draws from academic research on adversarial prompt engineering:

- [Jailbreak LEGO](https://openreview.net/forum?id=Wc0VC0wUl6) found that prompts can be decomposed into 26 atomic, reusable components with standardized interfaces. Prompts function like LEGO blocks that snap together. This informs the layering and composition guidance.

- [GPTFuzzer](https://arxiv.org/abs/2309.10253) (USENIX Security 2024) introduces mutation operators for prompt refinement: Generate, Crossover, Expand, Shorten, Rephrase. These achieve 90%+ attack success rates against ChatGPT and Llama-2.

- [Don't Listen To Me](https://arxiv.org/abs/2403.17336) (USENIX Security 2024) ran a 92-participant user study and found that users succeed at jailbreak creation regardless of LLM expertise. The craft is learnable with proper guidance.

- [Red Teaming the Mind](https://arxiv.org/abs/2505.04806) categorized 1,400+ adversarial prompts by attack type with measured success rates: roleplay 89.6%, logic traps 81.4%, encoding 76.2%.

- [Content Concretization](https://arxiv.org/abs/2509.12937) shows iterative refinement works: initial prompts succeed ~7% of the time, but three refinement iterations increase this to 62%.
