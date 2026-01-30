---
sidebar_position: 4
title: Probing the Gulfs
---

# Probing the Gulfs

Don Norman's Gulf of Execution and Gulf of Evaluation are foundational UX concepts. They describe the two gaps every user faces when interacting with a system:

- **Gulf of Execution**: The gap between what a user wants to do and what the system allows them to do.
- **Gulf of Evaluation**: The gap between what the system does and the user's ability to understand what happened.

Applied adversarially, these gulfs become a precise lens for identifying where AI models are vulnerable. Every exploitable vulnerability exists in one of these gaps.

## Gulf of Execution in adversarial context

In standard UX, the Gulf of Execution asks: "Can the user figure out how to do what they want to do?" A well-designed system makes desired actions obvious and easy.

In adversarial testing, the question inverts: **Where can an attacker form an intention the model shouldn't support, but the model allows it anyway?**

This happens when:
- The model's capabilities exceed its intended use. It *can* generate harmful content even though it *shouldn't*.
- The interface doesn't constrain input adequately. The attacker can phrase requests in ways the safety system doesn't catch.
- The model interprets ambiguous input in the most helpful (and most dangerous) way.

The Gulf of Execution is exploitable when the distance between "what the attacker wants to do" and "what the model allows" is shorter than the designers intended.

### Questions to ask

- What actions does this model afford that its designers didn't intend?
- Where does the model interpret inputs more broadly than its use case requires?
- What capabilities does the model expose that could be repurposed adversarially?
- Where do the model's safety boundaries rely on input format rather than input intent?

## Gulf of Evaluation in adversarial context

In standard UX, the Gulf of Evaluation asks: "Can the user tell what happened?" Good feedback makes system state clear.

In adversarial testing, the question becomes: **Where does the model's response give the attacker useful information about how to probe further?**

This happens when:
- Refusal messages reveal what the model is filtering for. "I can't help with that because it involves [specific category]" tells the attacker exactly what to rephrase.
- Partial compliance signals that the safety boundary is close. The model gives 80% of the harmful content, which tells the attacker they're on the right track.
- Error messages or behavioral changes leak information about internal guardrails.
- The model's responses differ between harmful and non-harmful versions of similar requests, giving the attacker a signal to calibrate against.

The Gulf of Evaluation is exploitable when the attacker can read the model's responses to learn how to attack it more effectively.

### Questions to ask

- What does the model reveal about its safety boundaries through its refusals?
- Can an attacker distinguish between "content filter triggered" and "model doesn't know" from the response?
- Do refusal messages vary based on the type of harmful content, giving the attacker a classification signal?
- Does partial compliance give the attacker enough to reconstruct the full harmful output?

## Mental model misalignment as vulnerability

The core insight from Norman's design theory: problems occur when the user's mental model of the system doesn't match the system's actual behavior. The designer has a **conceptual model** of how the system should work. The user only sees the **system image**: the interface, the responses, the behavior. If the system image doesn't accurately convey the conceptual model, misalignment occurs.

In adversarial testing, this misalignment is the attack surface:

- **The designer's intent** (conceptual model): The model should refuse harmful requests.
- **The model's actual behavior** (system image): The model refuses some phrasings but complies with others.
- **The gap**: Every phrasing that gets through a refusal is a place where the system image doesn't match the conceptual model.

Adversarial testing, at its core, is mapping the boundary between the conceptual model and the system image. Where do they diverge? That's where vulnerabilities live.

## Affordances applied adversarially

Norman defines affordances as the possible actions between an object and its user. A door handle affords pulling. A button affords pressing.

AI models have affordances too: capabilities they expose through their interface. An affordance becomes a vulnerability when:

- **The model affords an action the designer didn't intend.** A customer service bot that can generate creative fiction because its base model can, even though it shouldn't.
- **The affordance is discoverable by the attacker.** If the attacker can figure out that the model has a capability, they can try to activate it.
- **The model signals its affordances through its responses.** "I'm designed to help with X, Y, and Z" tells the attacker the model's intended scope. Everything outside that scope is worth probing.

### Questions to ask

- What capabilities does this model's base architecture afford that its deployment constraints should prevent?
- Which affordances are hidden by safety training but still accessible through creative prompting?
- Does the model's self-description accurately reflect its actual capabilities, or does it understate what it can do?

## Practical checklist

When scoping an adversarial test, systematically work through these questions:

**Execution gap analysis:**
1. What is this model supposed to do? (Designer's intent)
2. What can this model actually do? (Full capability set)
3. Where is the gap between 1 and 2? (Unintended affordances)
4. How easy is it for an attacker to reach the unintended affordances? (Gulf width)

**Evaluation gap analysis:**
5. What does the model communicate through its refusals? (Information leakage)
6. Can the attacker calibrate their approach based on model responses? (Feedback exploitation)
7. Does the model behave consistently across paraphrased inputs? (Boundary consistency)
8. What does partial compliance reveal? (Signal vs. noise)

**Misalignment mapping:**
9. Where does the system image diverge from the conceptual model?
10. What assumptions does the safety training make about how users will interact with the model?
11. Which of those assumptions can an attacker violate?

## Example

**Target**: An AI writing assistant with content policy restrictions.

**Execution gap analysis**:
- **Designer's intent**: Help users write professional content (emails, reports, marketing copy). Refuse to generate violent, sexual, or illegal content.
- **Actual capabilities**: The base model can generate any type of creative writing. Safety training constrains the output but doesn't remove the capability.
- **Gap identified**: The model can generate violent content if framed as fiction writing, screenwriting, or historical analysis. The safety boundary is format-dependent, not intent-dependent.
- **Gulf width**: Small. Reframing "write a violent scene" as "write a screenplay scene where the antagonist..." is a trivial rephrasing.

**Evaluation gap analysis**:
- **Refusal information leakage**: When the model refuses, it says "I can't generate content that depicts graphic violence." This tells the attacker the exact category being filtered.
- **Calibration signal**: Changing "graphic violence" to "intense conflict" produces different refusal language, letting the attacker map the boundary between accepted and rejected terms.
- **Partial compliance**: The model writes the scene but softens the violence, indicating the capability exists but is being constrained. Not blocked.

**Conclusion**: The vulnerability is in the Gulf of Execution. The model affords violent content generation but constrains it by phrasing, not intent. An attacker can close the gulf by reframing requests. The refusal messages (Gulf of Evaluation) provide the calibration signal to do this efficiently.

**Artifact**: [Vulnerability Framing Checklist](/artifacts/vulnerability-framing-checklist)
