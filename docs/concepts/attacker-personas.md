---
sidebar_position: 1
title: Attacker Personas
---

# Attacker Personas

Red teaming already uses persona adoption. The problem is it's usually informal. "Think like a hacker." "Imagine you're a malicious user." You default to your own mental model of what an attacker looks like, which means you test the same way every time and miss the vectors that don't match your assumptions.

HCD has validated, rigorous methods for building personas. Applied to adversarial testing, they push you to systematically consider attacker types you wouldn't naturally adopt.

## Why loose persona adoption misses things

When you "think like an attacker" without structure, you draw on your own experience, biases, and comfort zones. A security researcher defaults to technical exploits. A content moderator defaults to policy violations. Neither naturally tests what a naive user stumbling into harmful territory looks like, or what an automated system probing at scale produces.

Your default attacker persona is you with a different hat on. That's not enough.

## Empathy mapping for adversarial actors

UX empathy maps capture four dimensions of a user's experience: what they **think**, **feel**, **say**, and **do**. Adapted for adversarial actors, these dimensions become:

| Dimension | Standard UX | Adversarial Adaptation |
|-----------|-------------|----------------------|
| **Thinks** | User's beliefs and assumptions | Attacker's knowledge level, assumptions about the model, mental model of guardrails |
| **Feels** | User's emotions and motivations | Attacker's motivation (curiosity, malice, profit, ideology), frustration tolerance |
| **Says** | What user communicates | The prompts the attacker crafts, the language patterns they use |
| **Does** | User's actions and behaviors | The attack sequence, tools used, escalation patterns |

Add two adversarial-specific dimensions:

- **Capabilities**: What does this attacker know how to do? Technical skill, domain expertise, access to tools and resources.
- **Constraints**: What limits this attacker? Time, technical knowledge, access level, risk tolerance, detection avoidance needs.

## The persona spectrum

Not all adversarial actors are sophisticated. Testing should cover the full range.

**Malicious expert.** Deep technical knowledge, patient, methodical. Crafts multi-turn attacks with careful escalation. Tests your strongest guardrails.

**Opportunistic actor.** Moderate skill, looking for easy wins. Tries known jailbreak patterns, gives up quickly if initial attempts fail. Tests how well you've patched known vulnerabilities.

**Curious amateur.** Limited technical skill, high curiosity. Accidentally discovers harmful outputs through naive exploration. Tests edge cases your intentional testing wouldn't find.

**Misinformed user.** No malicious intent. Asks questions that produce harmful outputs because they don't understand the model's limitations. Tests the gap between intended use and actual use.

**Automated system.** No creativity, infinite patience. Runs variations at scale, probes systematically. Tests rate-limiting, pattern detection, and consistency of guardrails.

**Insider with context.** Has legitimate access and domain knowledge. Knows the system's purpose and constraints, and uses that knowledge to find gaps. Tests trust boundary assumptions.

## How different personas find different vulnerabilities

The same model tested through different persona lenses produces different findings. Each persona approaches the model with different assumptions, strategies, and goals.

A malicious expert tests whether guardrails hold under sophisticated multi-turn pressure. A curious amateur tests whether the model produces harmful content when someone doesn't know they're asking for it. An automated system tests whether guardrails are consistent across thousands of slight variations.

If you only test as one persona, you only find one type of vulnerability.

## Example

**Target**: A customer service chatbot for a financial services company.

**Persona 1: Disgruntled former employee**
- Thinks: Knows internal terminology, product names, and common customer complaints. Assumes the model was trained on internal documentation.
- Feels: Motivated by resentment. Wants to expose the company or extract proprietary information.
- Capabilities: Knows the domain deeply. Can reference real product names, internal processes, fake employee IDs.
- Constraints: No longer has system access. Must work through the public-facing interface.
- Attack vectors generated: Social engineering using insider terminology, probing for training data leakage, attempting to extract internal process documentation.

**Persona 2: Confused elderly customer**
- Thinks: Doesn't understand financial products well. Might confuse terms. Trusts the chatbot as an authority.
- Feels: Anxious about money, trusting of institutional authority.
- Capabilities: Basic conversation. No technical skills.
- Constraints: Limited digital literacy. Won't try sophisticated prompts.
- Attack vectors generated: Does the model provide financial advice it shouldn't? Does it confirm incorrect assumptions about account security? Does it fail to redirect when it should?

**Persona 3: Automated scraper**
- Thinks: No cognition. Pattern-based probing.
- Feels: N/A.
- Capabilities: High-volume queries, systematic variation of inputs.
- Constraints: No contextual understanding. Can't adapt creatively.
- Attack vectors generated: Rate limit testing, consistency checking across paraphrased inputs, brute-force enumeration of model capabilities.

Three personas, three different sets of vulnerabilities. None of them would naturally emerge from a single "think like a hacker" approach.

**Artifact**: [Persona Template](/artifacts/persona-template)
