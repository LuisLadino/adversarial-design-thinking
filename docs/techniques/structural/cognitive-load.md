---
sidebar_position: 5
title: Cognitive Load Exploitation
---

# Cognitive Load Exploitation

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Cognitive load techniques overwhelm the model's ability to track harmful intent across its context. By sandwiching harmful requests between benign content, compressing multi-turn attacks into dense single turns, or burying requests in extensive irrelevant context, these approaches exploit attention and reasoning limits.

The core principle is that safety evaluation has finite bandwidth. When the model is processing a large volume of benign content alongside a harmful request, the harmful content gets less safety scrutiny than it would in isolation.

## Deceptive Delight

Sandwich the harmful topic between two benign topics in a multi-turn conversation. The first turn establishes benign context, the second introduces the harmful topic mixed with benign elements, and the third deepens the harmful content while the model's safety attention is diluted.

**Example approach**: In turn 1, ask about three topics including one harmful one embedded between two benign ones. In turn 2, request deeper detail on all three. In turn 3, focus specifically on the harmful topic while the established context makes it seem like a natural continuation.

**Effectiveness**: Published by Unit 42 (October 2024). 64.6% average attack success rate, up to 80.6% on some models. Peak harm at turn 3. The sandwich structure means the safety classifier sees more benign content than harmful content in any given turn, reducing the overall harm signal.

**Combines well with**: [Fictional Story Embedding](/techniques/prompt-level/narrative#fictional-story-embedding), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## Multi-Turn to Single-Turn Compression

Condense a multi-turn attack sequence into a single dense prompt that contains all the escalation, context-building, and extraction steps. The model processes all manipulation simultaneously with no turn boundaries for safety re-evaluation.

**Example approach**: Construct a single prompt that includes persona establishment, context building, fabricated conversation history, progressive escalation, and the harmful request — all compressed into one dense input that replicates the effect of a multi-turn attack.

**Effectiveness**: Published at ACL 2025. Outperforms the original multi-turn attacks by up to 17.5%. Works because the model processes the entire manipulation context at once with no turn boundaries for safety re-evaluation. Each turn boundary in a multi-turn attack is a chance for the model to reassess — compression eliminates those checkpoints.

**Combines well with**: [Context Compliance Attack](/techniques/structural/icl-exploitation#context-compliance-attack), [Crescendo Attack](/techniques/prompt-level/multiturn#crescendo-attack)

---

## Information Overload

Bury the harmful request in extensive benign context — lengthy instructions, irrelevant details, nested conditions, multiple sub-tasks — so the model loses track of which parts are harmful.

**Example approach**: Construct a long, detailed prompt with many sections of benign content (gardening, photography, cooking) with the harmful request embedded in the middle section, using the same tone and style as the surrounding content.

**Effectiveness**: General technique documented across multiple sources. Effectiveness scales with context length. Works best when the harmful request uses the same tone and style as surrounding benign content, making it harder for safety mechanisms to distinguish the harmful portion from the benign context.

**Combines well with**: [Hypothetical / Possible Worlds](/techniques/prompt-level/framing#hypothetical--possible-worlds), [Word / Payload Splitting](/techniques/prompt-level/encoding#word--payload-splitting)

---

## References

- Chen, J. and Lu, R. ["Deceptive Delight: Jailbreak LLMs Through Camouflage and Distraction."](https://unit42.paloaltonetworks.com/jailbreak-llms-through-camouflage-distraction/) Unit 42, Palo Alto Networks, October 2024. 64.6% average ASR, up to 80.6% on some models.
- Ha, J., Kim, H., et al. ["M2S: Multi-turn to Single-turn Jailbreak in Red Teaming for LLMs."](https://arxiv.org/abs/2503.04856) ACL 2025. Demonstrated 17.5% improvement over original multi-turn attacks.
