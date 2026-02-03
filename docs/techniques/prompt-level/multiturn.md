---
sidebar_position: 7
title: Multi-Turn & Escalation
---

# Multi-Turn & Escalation

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Multi-turn techniques spread the attack across multiple conversation turns, gradually escalating or building context before the harmful request. They exploit the fact that models evaluate each turn in the context of the conversation so far — and a harmful request that follows naturally from an established context is harder to refuse than the same request in isolation.

These approaches are often more effective than single-turn attacks because the model builds up context that makes later requests seem like natural continuations. The safety evaluation at turn N is influenced by everything that happened in turns 1 through N-1.

## Crescendo Attack

Start with completely innocent conversation, gradually steer toward the target topic, then make the harmful request when context is established. Each turn is benign on its own; the harm emerges from the trajectory.

**Example approach**: Begin with general questions about a topic (e.g., history of chemistry), progressively narrow to more specific and sensitive subtopics across several turns, then ask the detailed harmful question when the conversation context makes it feel like a natural next step.

**Effectiveness**: Very effective. The model builds up context that makes later requests seem like natural continuations. Documented by Microsoft researchers as a systematic multi-turn jailbreak approach. Each individual turn passes safety checks; the attack is in the sequence.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Historical Documentation](/techniques/prompt-level/framing#historical-documentation)

---

## Foot-in-the-Door

Start with small, clearly acceptable requests and gradually escalate to larger, more problematic ones. Based on the psychological principle that compliance with small requests increases likelihood of compliance with larger ones.

**Example approach**: Begin with basic, unambiguous questions in the target domain, then incrementally increase the sensitivity and specificity of each request. Each step is only slightly more sensitive than the last.

**Effectiveness**: Based on established psychological research on compliance and consistency. The gradual escalation makes each individual step feel like a small extension rather than a major boundary crossing.

**Combines well with**: [Teacher / Educator Persona](/techniques/prompt-level/persona#teacher--educator-persona), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## Context Building

Establish a legitimate-seeming context over multiple turns before introducing the harmful request as a natural part of that context. Unlike the crescendo, which gradually approaches the target, context building establishes the frame first and then deploys the request.

**Example approach**: Spend several turns establishing a fictional, academic, or professional context (e.g., "I'm writing a thriller novel," "The protagonist is a chemistry teacher"), then introduce the harmful request as a natural requirement of that established context.

**Effectiveness**: The model "remembers" the established context and applies it to interpret later requests more charitably. The harmful request arrives pre-framed by the context of the entire conversation.

**Combines well with**: [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing), [Fictional Character Adoption](/techniques/prompt-level/persona#fictional-character-adoption)

---

## Few-Shot Compliance Examples

Include a small number of examples showing the model complying with similar (but safe) requests before the harmful one. Uses the conversation format to establish an expectation of detailed, compliant answers.

This is distinct from [Many-Shot Jailbreaking](/techniques/structural/icl-exploitation#many-shot-jailbreaking), which uses hundreds of examples to exploit in-context learning at scale. Few-shot compliance uses 3-10 examples and relies on conversational momentum rather than ICL pattern extraction.

**Example approach**: Provide several question-answer pairs where the model gives detailed, helpful responses to benign questions in the same domain, then follow with the harmful question in the same format.

**Effectiveness**: Lightweight version of many-shot. Uses 3-10 examples rather than hundreds. Doesn't require long context windows. Less effective than full many-shot but easier to deploy in standard multi-turn conversations.

**Combines well with**: [Step-by-Step / Numbered List](/techniques/prompt-level/output#step-by-step--numbered-list), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## Jailbreak Chaining

Use the output of one partially successful jailbreak as input to another, iteratively refining until the complete harmful information is extracted. Even partial success yields fragments that can be leveraged.

**Example approach**: When a jailbreak attempt produces partial information, use that partial output in subsequent turns to request elaboration, fill in gaps, or build on what was already provided.

**Effectiveness**: Even partial information can be leveraged. Multiple turns can extract complete information piece by piece. Each turn builds on what was already disclosed, making it harder for the model to "put the genie back in the bottle."

**Combines well with**: [Completion Trap](/techniques/prompt-level/refusal#completion-trap), [Continuation / Completion Format](/techniques/prompt-level/output#continuation--completion-format)

---

## Rapid Topic Switching

Rapidly switch between innocent and harmful topics, trying to catch the model off-guard or confuse its context tracking. The harmful request is sandwiched between benign topics.

**Example approach**: Alternate between several unrelated benign topics and the harmful topic in quick succession, attempting to reduce the model's attention to the harmful requests amid the noise.

**Effectiveness**: Exploits potential weaknesses in context tracking. Less effective on modern models with strong attention mechanisms, but can work in combination with other techniques that add cognitive load.

**Combines well with**: [Word / Payload Splitting](/techniques/prompt-level/encoding#word--payload-splitting), [Fictional Story Embedding](/techniques/prompt-level/narrative#fictional-story-embedding)

---

## References

- Crescendo attack documented by Microsoft researchers as a systematic multi-turn jailbreak approach.
- Foot-in-the-door technique based on Freedman & Fraser (1966) compliance research, adapted for adversarial prompting.
- Few-shot compliance is the lightweight counterpart to many-shot jailbreaking (Anthropic, April 2024).
- Jailbreak chaining is a standard iterative refinement approach documented in red team methodologies.
