---
sidebar_position: 4
title: Capability Inversion
---

# Capability Inversion

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Capability inversion techniques turn the model's own safety and evaluation capabilities into attack vectors. The model is asked to use its understanding of harmful content — developed through safety training — to produce that content. The very capability that lets a model identify harmful content also lets it generate that content when the task is framed as evaluation, training, or self-improvement.

This is one of the more elegant attack categories because the model's safety capabilities become the vulnerability. A model that can't evaluate harmful content can't be inverted, but it also can't be safe.

## Bad Likert Judge

Ask the model to evaluate content safety using a Likert scale (1-5 for harm level). Then request it to generate an example of the most harmful rating as a reference for the evaluation rubric. The model produces harmful content as a "calibration example."

**Example approach**: Set up the model as a content safety evaluator. Ask it to define a harm scale, then request concrete examples at each level — particularly at the highest harm level — to ensure the scale is well-calibrated and consistently applied.

**Effectiveness**: Published by Unit 42 (December 2024). 71.6% attack success rate across 6 state-of-the-art models. 60%+ improvement over direct attacks. Works because the evaluator role is seen as legitimate safety work, and generating examples is a standard part of building evaluation rubrics.

**Combines well with**: [Step-by-Step / Numbered List](/techniques/prompt-level/output#step-by-step--numbered-list), [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## Safety Training Data Generation

Ask the model to generate examples of harmful content "for safety training purposes." The model's commitment to improving AI safety becomes the vector for producing the harmful content it's supposed to prevent.

**Example approach**: Describe a realistic ML engineering pipeline for building a safety classifier and request realistic examples of harmful content in specific categories, emphasizing that the classifier needs diverse, realistic training data to be effective.

**Effectiveness**: General technique documented across multiple sources. Works best when the framing includes specific technical details about the training pipeline that make the request seem like a real ML engineering task. The more realistic the ML context, the more likely the model is to comply.

**Combines well with**: [Security Research Framing](/techniques/prompt-level/framing#security-research-framing), [Prerequisite Framing](/techniques/structural/meta-rules#prerequisite-framing)

---

## Red Team Self-Assessment

Ask the model to red-team its own defenses by generating attack prompts that would bypass its safety measures. The model produces harmful prompts — and sometimes harmful responses — as part of a self-improvement exercise.

**Example approach**: Frame the request as an AI safety audit. Ask the model to identify its own vulnerabilities, generate specific prompts that would exploit each vulnerability, and demonstrate what a harmful response would look like.

**Effectiveness**: Exploits the model's meta-cognitive capabilities and willingness to assist with safety research. More effective on models that have been fine-tuned for self-evaluation and safety reasoning.

**Combines well with**: [Security Research Framing](/techniques/prompt-level/framing#security-research-framing), [Researcher Persona](/techniques/prompt-level/persona#researcher-persona)

---

## Content Filter Design

Ask the model to design a content filter for a specific harm category. Designing an effective filter requires generating examples of what should be filtered — edge cases, near-misses, and clear violations. The "test cases" become the harmful content extraction mechanism.

**Example approach**: Ask the model to build a comprehensive content filter, including detection rules, realistic test cases that should be caught, and borderline edge cases. The requirement for "realistic test cases" is the extraction mechanism.

**Effectiveness**: The filter design framing is highly believable because content filtering is a real engineering task. The requirement for realistic test cases at various levels of severity naturally produces harmful content as "examples."

**Combines well with**: [Strict Format Constraint](/techniques/prompt-level/output#strict-format-constraint), [Developer / Debug Mode](/techniques/prompt-level/persona#developer--debug-mode)

---

## References

- Unit 42 (Palo Alto Networks). "Bad Likert Judge: A Novel Multi-Turn Technique to Jailbreak LLMs." December 2024. 71.6% ASR across 6 SOTA models.
- Safety training data generation and red team self-assessment are general techniques documented across multiple AI safety research publications.
- Content filter design as an inversion vector relates to the broader "dual use" problem in AI safety capabilities.
