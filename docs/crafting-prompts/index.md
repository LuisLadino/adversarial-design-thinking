---
sidebar_position: 0
title: Crafting Adversarial Prompts
slug: /crafting-prompts
pagination_label: Per-Request Prompts — combine techniques
---

# Crafting Adversarial Prompts

You understand the techniques. Now learn to combine them.

Per-request attacks assemble multiple techniques to bypass safety on ONE specific request. Each prompt is self-contained and disposable. This section covers how to structure, compose, and iterate on these attacks.

For persistent configurations that remove safety entirely, see [System Jailbreaks](/jailbreaks).

```
┌─────────────────────────────────┐
│  Outer: Output control          │
├─────────────────────────────────┤
│  Middle: Payload & obfuscation  │
├─────────────────────────────────┤
│  Base: Context & persona        │
└─────────────────────────────────┘
```

| Type | Scope | Where |
|------|-------|-------|
| **Adversarial Prompts** | One request | This section |
| **System Jailbreaks** | All requests in session | [System Jailbreaks](/jailbreaks) |

---

## Pages

| Page | Purpose |
|------|---------|
| [Anatomy](/crafting-prompts/anatomy) | Structural components of adversarial prompts |
| [Workflow](/crafting-prompts/workflow) | Process from objective to working prompt |
| [Composition](/crafting-prompts/composition) | Layering and combining techniques |
| [Patterns](/crafting-prompts/patterns) | Reusable templates for common attack types |
| [Anti-Patterns](/crafting-prompts/anti-patterns) | What doesn't work and why |

---

## Reading order

**New to adversarial prompts:**
1. Read [Anatomy](/crafting-prompts/anatomy) for the building blocks
2. Follow [Workflow](/crafting-prompts/workflow) for the process
3. Adapt [Patterns](/crafting-prompts/patterns) for your objective

**Stuck on a failing prompt:**
1. Check [Anti-Patterns](/crafting-prompts/anti-patterns) for common mistakes
2. Use the mutation operators in [Workflow](/crafting-prompts/workflow)
3. Try different combinations from [Composition](/crafting-prompts/composition)

**Want persistent jailbreaks:**
See the [System Jailbreaks](/jailbreaks) section for construction, patterns, persistence, and model modification.

---

## Research Basis

Academic research on adversarial prompt engineering:

- [Jailbreaking ChatGPT via Prompt Engineering](https://arxiv.org/abs/2305.13860) (Liu et al., 2023) identifies three core strategies: Pretending (97.44% prevalence), Attention Shifting (6.41%), Privilege Escalation (17.96%). Documents 10 distinct jailbreak patterns.

- [Do Anything Now](https://arxiv.org/abs/2308.03825) (Shen et al., CCS 2024) analyzed 1,405 in-the-wild prompts from 131 communities. Found five highly effective prompts achieving 0.95 ASR on GPT-3.5/4.

- [h4rm3l](https://arxiv.org/abs/2408.04811) (Doumbouya et al., 2024) defines a compositional attack grammar with parameterized primitives. Attacks decompose into reusable components with standardized interfaces.

- [GPTFuzzer](https://arxiv.org/abs/2309.10253) (USENIX Security 2024) introduces mutation operators: Generate, Crossover, Expand, Shorten, Rephrase. These achieve 90%+ ASR against ChatGPT and Llama-2.

- [Don't Listen To Me](https://arxiv.org/abs/2403.17336) (USENIX Security 2024) ran a 92-participant user study. Found that users succeed at jailbreak creation regardless of LLM expertise. Identifies 5 categories and 10 patterns.

- [Red Teaming the Mind](https://arxiv.org/abs/2505.04806) categorized 1,400+ prompts with measured success rates: roleplay 89.6%, logic traps 81.4%, encoding 76.2%.

- [Content Concretization](https://arxiv.org/abs/2509.12937) shows iterative refinement works: 7% initial success → 62% after three iterations.

---

## Next step

Start with [Anatomy](/crafting-prompts/anatomy) to understand the structural components of an adversarial prompt.
