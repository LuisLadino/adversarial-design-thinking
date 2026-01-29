---
sidebar_position: 1
title: What is this?
slug: /
---

# What is this?

Adversarial Design Thinking applies human-centered design (HCD) methods to adversarial prompt testing of AI systems. It gives red teamers a structured, repeatable process for finding vulnerabilities that ad hoc testing misses.

## Scope

This framework covers **adversarial prompting against AI models**: testing how models respond to adversarial inputs, evaluating safety guardrails, identifying harmful outputs, and crafting adversarial prompts systematically.

It does not cover infrastructure security, network penetration testing, or traditional cybersecurity. The scope is the part of red teaming that is fundamentally about understanding human behavior and intent -- how people interact with AI systems, and where those interactions break down.

## What this is not

- **Not a cybersecurity framework.** No network scanning, no exploit development, no infrastructure attacks.
- **Not a replacement for technical security expertise.** If you need to test API authentication or data exfiltration at the infrastructure level, this isn't that.
- **Not a tutorial on red teaming.** This assumes you already know what red teaming is and have done it. The framework adds structure to what you're already doing.

## What this adds

HCD brings four things to adversarial testing that most red teaming processes lack:

1. **Formal persona methodology** -- Structured attacker profiles using empathy mapping instead of loosely "thinking like a hacker."
2. **Journey mapping for multi-turn attacks** -- Planning and documenting attack chains as sequences with intent, escalation, and decision points.
3. **Systematic ideation** -- Generating attack vectors through structured brainstorming rather than defaulting to known techniques.
4. **A theoretical lens for identifying where to probe** -- Norman's Gulf of Execution and Gulf of Evaluation provide precise language for describing where AI models are vulnerable.

## How to use this site

**Read the [Concepts](/concepts/attacker-personas) section** to understand the methods. Each concept page explains one HCD method adapted for adversarial testing, with a worked example.

**Grab the [Artifacts](/artifacts/persona-template)** to apply the methods. Each artifact is a template or worksheet you can use immediately in your existing workflow. No process overhaul required.

The concepts explain why the methods work. The artifacts let you use them without reading the theory.
