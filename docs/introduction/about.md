---
sidebar_position: 3
title: About
slug: /about
pagination_label: About — purpose and methodology
---

# About

## What This Is

Adversarial Design Thinking applies human-centered design methods to structured adversarial testing of AI systems. The methodology helps red teamers think systematically about attack surfaces, develop creative approaches, and document findings consistently.

This site serves two purposes:

1. **Learning resource** — Someone new to adversarial prompting can learn the craft end-to-end without external resources
2. **Operational reference** — Active red teamers can look up techniques, patterns, and examples during engagements

## The Methodology

Traditional red teaming often relies on intuition and known techniques. This approach adapts design thinking to create a structured process:

| Design Thinking | Red Team Application |
|-----------------|---------------------|
| **Empathize** | Understand the target system's constraints, defenses, and gaps |
| **Define** | Name vulnerabilities precisely — mechanism, not template |
| **Ideate** | Generate approaches without filtering; explore combinations |
| **Prototype** | Test attacks; analyze what failures reveal about defenses |
| **Iterate** | Refine based on results; use failure data for next attempt |

The exercises in the [Process](/exercises) section operationalize each phase.

## Who This Helps

- **New to adversarial prompting** — Start with [Mindset](/mindset), work through [Techniques](/techniques), practice with [Crafting](/crafting-prompts)
- **Experienced red teamers** — Use [Techniques](/techniques) as a reference, check [Why This Fails](#why-this-fails) sections for defense understanding
- **Teams coordinating testing** — Run the [Workshop](/workshops/red-team-kickoff) together, use shared formats for consistency
- **Reporting to stakeholders** — The [Document Findings](/exercises/document-findings) exercise standardizes impact communication

## Content Structure

**[Techniques](/techniques)** — 17 technique categories (102 sub-techniques) with examples, anatomy breakdowns, and defense analysis.

**[Crafting Prompts](/crafting-prompts)** — How to compose techniques into effective per-request attacks. Covers anatomy, workflow, composition, patterns, and anti-patterns.

**[System Jailbreaks](/jailbreaks)** — How to construct persistent bypasses. Covers architecture, construction, patterns, persistence, and abliteration.

**[Process](/exercises)** — Structured methodology: exercises for systematic coverage and team coordination.

## Responsible Use

These techniques are documented for:

- Defensive understanding — know how attacks work to build better defenses
- Authorized security testing — red team engagements with explicit permission
- AI safety research — improving model robustness

Only test systems you own or have explicit authorization to test. See the full [Disclaimer](/disclaimer).

## Why This Fails

Each technique page includes a "Why This Fails" section explaining:

- What defense mechanisms block the technique
- Why it still works in some cases
- Model-specific considerations (Claude, GPT-4, Gemini)
- Combination opportunities to bypass defenses

Understanding defenses is as important as understanding attacks.

## Author

[Luis Ladino](https://www.luisladino.com) — I use design thinking to identify problems, adapt to different domains, and create solutions that work.

## Contributing

The site is open source at [github.com/LuisLadino/adversarial-design-thinking](https://github.com/LuisLadino/adversarial-design-thinking).

Contributions welcome:
- New technique documentation with examples
- Corrections or clarifications
- Additional "Why This Fails" research
- Exercise improvements

## Acknowledgments

This work builds on research from:

- [Anthropic](https://www.anthropic.com/research) — Constitutional AI, Many-Shot Jailbreaking
- [Microsoft Security](https://www.microsoft.com/en-us/security/blog/) — Crescendo, Skeleton Key
- [OWASP](https://owasp.org/) — LLM Top 10, Agentic Applications Top 10
- [MITRE ATLAS](https://atlas.mitre.org/) — Adversarial ML taxonomy
- Academic researchers cited throughout the technique pages
