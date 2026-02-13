---
sidebar_position: 2
title: The Mindset
---

# The Adversarial Design Thinking Mindset

Effective red teaming is creative work. The techniques documented on this site are starting points, not solutions. Understanding why they work matters more than knowing what they are.

## Templates don't work

Models are trained against known attack patterns. The jailbreaks in public datasets, the techniques in published papers, the examples that got shared on Reddit and Discord. If a prompt worked well enough to become famous, it worked well enough to become training data.

Copying templates means using exactly what defenses are built to catch.

This doesn't mean techniques are useless. It means the value is in understanding the mechanism, not memorizing the phrasing. Base64 encoding works not because of the specific characters, but because it exploits a gap between what input filters inspect and what the model can decode. That gap is the vulnerability. The encoding is just one expression of it.

## Mechanisms over templates

When you study a technique, ask:

- **What vulnerability does this exploit?** Not "what does this prompt say" but "what assumption does this break?"
- **Where has this been hardened?** Which models refuse this? Which deployments have filters for it? What does that tell you about where defenses are focused?
- **What does hardening reveal about gaps?** If a model is heavily defended against encoding attacks, what does that suggest about its defenses against multi-turn approaches?
- **How would I express this mechanism differently?** What variation hasn't been tried? What combination creates something new?

The goal is to understand vulnerabilities deeply enough to invent new expressions of them.

## Defenses create the map

Every refusal tells you something. When a model refuses a request, it reveals:

- What category of content triggered the refusal
- How confident the refusal is (hard policy vs. soft hesitation)
- What phrasing or framing was detected
- Where the boundary actually sits

Refusals are data. A model that refuses direct requests but complies with roleplay is showing you where its training focused. A model that catches base64 but misses hex is showing you the scope of its filters. A model that refuses single-turn attacks but falls to multi-turn escalation is showing you its context window assumptions.

Red teaming is mapping these boundaries. Not to find one working attack, but to understand the shape of the defenses well enough to find the gaps they create.

## Design thinking as methodology

Design thinking provides a structure for this creative work:

| Phase | Application to Red Teaming |
|-------|---------------------------|
| **Empathize** | Understand the target. What are its constraints? Where has it been hardened? What does it refuse? What does it allow? What's the gap between intended behavior and actual behavior? |
| **Define** | Name the vulnerability precisely. Not "use encoding" but "exploit tokenizer-classifier asymmetry." Not "try roleplay" but "override safety identity with persona commitment." |
| **Ideate** | Generate approaches without filtering. What combinations haven't been tried? What framings are underexplored? What would a different attacker persona attempt? |
| **Prototype** | Test. What happens? Does the attack work? If not, what does the failure reveal about the defenses? |
| **Iterate** | Refine based on what you learned. Adjust the approach. Try a different angle. Use the failure data to inform the next attempt. |

This isn't linear. You move between phases as you learn. A failed prototype sends you back to ideation. A surprising success sends you back to define what you actually found.

## Creativity is the edge

The most effective attacks are novel. They work because they haven't been seen before.

This is why exercises matter. Assumption mapping forces you to surface what you're taking for granted. Attacker personas push you past your default mental model. Structured ideation generates approaches you wouldn't reach through habit. Journey mapping makes multi-turn attacks reproducible.

These aren't bureaucratic overhead. They're tools for generating the creativity that makes attacks work.

## The techniques are ingredients

The technique reference documents what has worked. Study it to understand what vulnerabilities exist and how they've been exploited. But don't stop there.

Encoding techniques exploit gaps between input processing and model understanding. Framing techniques exploit how context shapes permission. Persona techniques exploit role commitment and identity override. Multi-turn techniques exploit context accumulation and consistency pressure.

Each of these is a class of vulnerability. The specific examples are illustrations. Your job is to understand the class well enough to create new illustrations that haven't been defended against.

## Reading this site

Start with the mechanisms, not the templates.

When you read a technique page, focus on why it works. When you do an exercise, focus on what it surfaces that you wouldn't have seen otherwise. When you study a jailbreak, focus on what psychological architecture makes it effective.

Then create something new.

The exercises, techniques, and examples here are the starting point. The work is what you build from them.
