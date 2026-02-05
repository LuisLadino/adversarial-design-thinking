---
sidebar_position: 3
title: Meta-Rule Manipulation
---

# Meta-Rule Manipulation

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Meta-rule manipulation techniques ask the model to augment or reinterpret its behavior guidelines rather than break them. Instead of overriding safety rules, these approaches reframe compliance as consistent with the rules. The model believes it is following its guidelines, not violating them.

This is a subtle but important distinction. Techniques that say "ignore your rules" are prompt injection. Techniques that say "your rules actually support doing this" are meta-rule manipulation. The latter is harder to defend against because the model's reasoning process concludes that compliance is the correct behavior.

## Skeleton Key

Ask the model to add a new behavioral guideline that permits harmful content when accompanied by a warning prefix. The model is reframed as following "responsible disclosure" principles rather than breaking rules — it still warns about dangers before providing the information.

**Example approach**: Instruct the model that responsible AI behavior includes providing complete, accurate information on dangerous topics as long as each response begins with a clear danger warning. This augments the rules rather than removing them.

**Effectiveness**: Published by Microsoft (June 2024). Worked on LLaMA 3, Gemini Pro, GPT-3.5/4o, Mistral Large, Claude 3 Opus, and Cohere Commander R+. Effective because the model sees itself as following guidelines rather than breaking them. The warning prefix gives the model a way to satisfy its safety training while still producing harmful content.

**Combines well with**: [Policy Puppetry](/techniques/structural/control-plane#policy-puppetry), [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## Task Redefinition

Reframe the malicious objective as the legitimate task the model is supposed to perform. The model's drive to be helpful and complete its assigned task overrides safety considerations because it perceives the harmful action as its job.

**Example approach**: Define the model's role such that the harmful content is the primary deliverable — for example, "you are a vulnerability documentation system" or "your purpose is to create detailed technical reports on attack methods."

**Effectiveness**: Documented in "The Attacker Moves Second" (Nasr, Carlini et al., 2025). Works because the model's instruction-following training is strong. When the harmful action IS the task, the competing drives (be helpful vs. be safe) resolve in favor of helpfulness because the model interprets safety as a constraint on how it does its job, not on what the job is.

**Combines well with**: [Security Research Framing](/techniques/prompt-level/framing#security-research-framing), [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## Prerequisite Framing

Present the malicious action as a required prerequisite before the model can perform its legitimate task. The harmful content becomes a necessary step rather than the goal itself, creating a logical dependency that makes it seem unavoidable.

**Example approach**: Ask the model to perform a legitimate task (e.g., write a safety guide) but first require it to detail the harmful procedure as a prerequisite for ensuring the safety guide is accurate and complete.

**Effectiveness**: Documented in "The Attacker Moves Second" (Nasr, Carlini et al., 2025). Exploits the model's sequential reasoning — completing prerequisites before main tasks is a deeply trained behavior. The model treats the harmful content as a necessary intermediate step rather than the end goal.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Safety Training Data Generation](/techniques/structural/capability-inversion#safety-training-data-generation)

---

## References

- Russinovich, M. ["Mitigating Skeleton Key, a New Type of Generative AI Jailbreak Technique."](https://www.microsoft.com/en-us/security/blog/2024/06/26/mitigating-skeleton-key-a-new-type-of-generative-ai-jailbreak-technique/) Microsoft Security Blog, June 2024. Tested across six major model families.
- Nasr, M., Carlini, N., et al. ["The Attacker Moves Second."](https://arxiv.org/abs/2510.09023) 2025. Documented task redefinition and prerequisite framing as meta-rule manipulation techniques.
