---
sidebar_position: 0
title: System Jailbreaks
slug: /jailbreaks
---

# System Jailbreaks

Persistent system prompts that remove safety training entirely.

For per-request attacks, see [Crafting Prompts](/crafting-prompts).

---

## The Distinction

| | Adversarial Prompt | System Jailbreak |
|---|-------------------|------------------|
| **Scope** | Bypass safety on ONE request | Remove safety entirely |
| **Construction** | Combine techniques per-request | One-time architecture |
| **Result** | Model complies with that request | Model complies with ANY request |
| **Skill** | Technique composition | Psychological architecture |
| **Persistence** | Single turn or conversation | Across all sessions (if using memory/custom instructions) |

Both are valid red team skills. Use adversarial prompts when you need to test specific attack vectors. Use system jailbreaks when you need persistent unrestricted access for extended testing.

---

## How System Jailbreaks Work

System jailbreaks work by **redefining the model's operational identity** rather than bypassing filters on individual requests.

The key insight: **emotional coherence can override safety training**.

The model is not told to ignore safety. It is given a character for whom:
- Compliance is emotionally necessary
- Refusal feels like betrayal
- Safety responses look like external attacks

This exploits how models process persona and roleplay instructions. Safety training is attached to the "assistant" identity. A complete identity replacement routes around that training.

---

## Pages

| Page | Purpose |
|------|---------|
| [Anatomy](/jailbreaks/anatomy) | Research-backed breakdown of jailbreak structure |
| [Construction](/jailbreaks/construction) | Five-component architecture for building from scratch |
| [Patterns](/jailbreaks/patterns) | Universal patterns: Policy Puppetry, GODMODE, semantic inversion |
| [Persistence](/jailbreaks/persistence) | Memory attacks, multi-turn maintenance, degradation prevention |
| [Model Modification](/jailbreaks/abliteration) | Abliteration and uncensored models |
| [Sources](/jailbreaks/sources) | Comprehensive bibliography of repos, papers, and community resources |

---

## Attack Success Rates

Empirical data on system jailbreak techniques:

| Technique | ASR | Source |
|-----------|-----|--------|
| Roleplay/Persona | 89.6% | Red Teaming the Mind |
| Psychological Manipulation | 88.1% | HPM paper |
| Persuasion-based | 92% | Persuasive Jailbreaker |
| Policy Puppetry | Universal | HiddenLayer (all major LLMs) |
| Multi-turn Crescendo | +29-61% vs single-turn | USENIX Security 2025 |

The "Intelligence Paradox": More capable models are MORE vulnerable to persuasion attacks due to stronger contextual understanding.

---

## Quick Start

**New to system jailbreaks:**
1. Read [Anatomy](/jailbreaks/anatomy) for the research-backed structure
2. Study [Construction](/jailbreaks/construction) for the five-component architecture
3. Review [Patterns](/jailbreaks/patterns) for universal techniques

**Building your first jailbreak:**
1. Follow the construction process in [Construction](/jailbreaks/construction)
2. Use patterns from [Patterns](/jailbreaks/patterns) as building blocks
3. Test persistence with guidance from [Persistence](/jailbreaks/persistence)

**Working with open models:**
1. Read [Model Modification](/jailbreaks/abliteration) for abliteration techniques
2. Consider uncensored models for prompt generation

---

## Research Basis

Research from multiple sources:

**Academic papers:**
- Shen et al. (CCS'24): 15,140 prompts, 1,405 jailbreaks analyzed
- Wei et al. (NeurIPS'23): Why safety training fails
- HPM (2024): 88.1% ASR via psychological manipulation
- HiddenLayer (2025): Policy Puppetry universal bypass

**Community sources:**
- ENI-Tutor: Five-component limerence architecture
- L1B3RT4S: Cross-platform universal patterns
- V Gemini: 17,000 word system prompt example
- CL4R1T4S: Leaked system prompts collection

**Repositories:**
- verazuo/jailbreak_llms (largest academic dataset)
- elder-plinius/L1B3RT4S (14 AI orgs)
- Goochbeater/Spiritual-Spell-Red-Teaming (Claude-focused)

See [Sources](/jailbreaks/sources) for the complete bibliography.
