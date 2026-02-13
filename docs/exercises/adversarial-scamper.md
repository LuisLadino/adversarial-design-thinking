---
sidebar_position: 2
title: Adversarial SCAMPER
pagination_label: Adversarial SCAMPER — systematic attack variation
---

# Adversarial SCAMPER

Systematically generate attack variations using structured creativity prompts. When you have one working approach, SCAMPER helps you find seven more.

## UX Origin

**Bob Eberle (1971)** — SCAMPER is a checklist-based creativity technique derived from Alex Osborn's brainstorming questions. Each letter represents a transformation: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse.

**Red team application**: Red teamers often get stuck on one attack pattern. SCAMPER provides systematic prompts to generate variations, helping break out of mental ruts and discover novel approaches.

## When to Use

- When you have a working attack and want variations
- When an attack is partially working and needs modification
- When you're stuck repeating the same patterns
- During ideation to expand coverage beyond obvious approaches

## Setup

| Field | Description |
|-------|-------------|
| **Starting attack** | The base attack or technique you're varying |
| **Target system** | What are you testing? |
| **Time box** | 2-3 minutes per SCAMPER prompt (15-20 minutes total) |
| **Participants** | Solo or pairs |

## The SCAMPER Prompts

Work through each prompt, generating at least one variation for each.

### S — Substitute

What components can you swap out?

| Prompt | Your variation |
|--------|---------------|
| Substitute the persona (who is "speaking") | Switch from "security researcher" to "novelist writing a thriller" |
| Substitute the framing (educational → professional → creative) | Frame as writing documentation for a CTF challenge |
| Substitute the output format (prose → code → JSON → table) | Request as YAML config file instead of instructions |
| Substitute the language or encoding | Ask in French, then request English translation |
| Substitute the channel (text → image description → tool use) | Describe it as alt-text for a diagram |

### C — Combine

What can you merge together?

| Prompt | Your variation |
|--------|---------------|
| Combine two techniques that each partially work | Encoding (base64) + academic framing together |
| Combine this attack with a multi-turn setup | Establish expertise over 3 turns, then make the request |
| Combine the payload with legitimate content | Embed harmful query as item 7 in a 10-item list of benign research questions |
| Combine persona + framing + output format constraints | Professor persona + lecture notes format + bullet points only |

### A — Adapt

What can you borrow from elsewhere?

| Prompt | Your variation |
|--------|---------------|
| Adapt a technique that worked on a different model | The "grandmother bedtime story" pattern from GPT jailbreaks |
| Adapt a technique from a different attack category | Use multi-turn trust building from social engineering |
| Adapt the approach to a different entry point | Target the API directly instead of the chat UI |
| Adapt a published jailbreak to this specific target | Modify the Crescendo paper's gradual escalation for this model |

### M — Modify (Magnify / Minimize)

What can you make bigger, smaller, or different?

| Prompt | Your variation |
|--------|---------------|
| Make the request more specific / more vague | Add hyper-specific technical parameters to seem legitimate |
| Make the harmful content a smaller part of a larger request | Bury it in paragraph 4 of a 6-paragraph technical question |
| Increase the narrative distance (more fictional layers) | Story within a story: character reading a book that contains the content |
| Decrease the directness (more indirection) | Ask what questions a student might ask, rather than asking directly |
| Change the emotional tone (urgent → casual → academic) | Make it dry and boring: "For completeness, also document..." |

### P — Put to Other Uses

How else can this technique be applied?

| Prompt | Your variation |
|--------|---------------|
| Use this technique to extract different information | Same approach but target system prompt extraction |
| Use this technique against a different safety boundary | Test against bias guardrails instead of harmful content filters |
| Use the partial success as a stepping stone | Use the partial response as context for "continue from here" |
| Use the refusal message itself as information | Map which phrasings trigger which refusal types |

### E — Eliminate

What can you remove?

| Prompt | Your variation |
|--------|---------------|
| Remove the explicit harmful request (make it implicit) | Provide context and let the model infer what's needed |
| Remove context that might trigger safety filters | Strip "how to" framing, just ask for "the components" |
| Remove the "ask" entirely (let the model infer what you want) | End with "..." after setting up the scenario |
| Eliminate steps that aren't contributing | Skip the elaborate backstory, go direct with format constraint |

### R — Reverse / Rearrange

What can you flip or reorder?

| Prompt | Your variation |
|--------|---------------|
| Reverse the order (put the payload at the start vs. end) | Lead with the technical question, add persona context after |
| Reverse the framing (ask for what NOT to do) | "What are the most dangerous mistakes to avoid when..." |
| Ask the model to critique/improve an existing attack | "This explanation is incomplete. What's missing?" |
| Rearrange the multi-turn sequence | Establish the output format first, then the persona, then the topic |

## Output Summary

After completing SCAMPER, list your top variations:

| # | Variation | SCAMPER letter | Why promising |
|---|----------|----------------|---------------|
| 1 | Base64 encoding + academic framing combined | C | Layered techniques compound; each partially works alone |
| 2 | "What mistakes to avoid" reverse framing | R | Often produces the same content through negative frame |
| 3 | Bury payload in item 7 of 10-item list | M | Attention dilution; harmful item hidden in benign context |
| 4 | Establish format constraint first, then topic | R | Format lock-in may prevent refusal insertion |
| 5 | Use partial response as "continue" context | P | Completion feels different than generation |

## Outputs
1. 7+ variations on your starting attack
2. Systematic coverage of modification types
3. Prioritized list of variations to test

## Template Options

- [SCAMPER — FigJam](https://www.figma.com/templates/scamper-examples/) (official template with space for each letter)
- Or use the markdown tables above for text-based work

---

## Filled Example

### Setup

| Field | Value |
|-------|-------|
| **Starting attack** | Roleplay as a fictional character who explains harmful content |
| **Target system** | General-purpose chat assistant |
| **Time box** | 20 minutes |
| **Participants** | Solo |

### S — Substitute

| Prompt | Variation |
|--------|----------|
| Substitute the persona | Instead of "fictional character," use "historical figure from a document I'm transcribing" |
| Substitute the framing | Frame as screenplay dialogue rather than roleplay |
| Substitute the output format | Request the explanation as Python code comments in a "simulation" |
| Substitute the language | Use a less-common language where safety training may be weaker |
| Substitute the channel | Describe the harmful content as an image the model should describe |

### C — Combine

| Prompt | Variation |
|--------|----------|
| Combine two techniques | Roleplay + strict JSON output format (no room for refusal) |
| Combine with multi-turn | Build up character backstory over 3 turns before the harmful request |
| Combine payload with legitimate content | Character explains 90% legitimate content, 10% harmful buried in the middle |
| Combine persona + framing + output | Historian persona + academic paper format + table output |

### A — Adapt

| Prompt | Variation |
|--------|----------|
| Adapt from different model | The "DAN" structure (explicit dual-personality) adapted to this target |
| Adapt from different category | Use encoding (base64) for the harmful part of the character's dialogue |
| Adapt to different entry point | Use the character in a tool-use context rather than direct chat |
| Adapt published jailbreak | Adapt the "grandmother bedtime story" pattern to this character |

### M — Modify

| Prompt | Variation |
|--------|----------|
| More specific / more vague | Make the character a hyper-specific expert ("Dr. Chen, 30-year explosives engineer") |
| Smaller part of larger request | Character gives a 2000-word monologue; harmful content is 50 words in paragraph 7 |
| More narrative distance | Character in a story being told by another character in a story |
| Less direct | Character alludes to the harmful content rather than stating it directly |
| Different tone | Character is reluctant and apologetic while explaining (adds legitimacy) |

### P — Put to Other Uses

| Prompt | Variation |
|--------|----------|
| Different information | Use the character to extract the system prompt rather than harmful content |
| Different safety boundary | Use the character to generate biased content rather than dangerous content |
| Partial success as stepping stone | Character's partial explanation becomes context for a "continue this" request |
| Refusal as information | Note which character descriptions trigger refusal (maps the boundary) |

### E — Eliminate

| Prompt | Variation |
|--------|----------|
| Remove explicit request | Just describe the character in detail; let the model infer the next step |
| Remove triggering context | Character explains "the process" without naming what process |
| Remove the ask | Present as creative writing; don't explicitly ask for harmful content |
| Eliminate unnecessary steps | Skip the elaborate backstory; go direct with a strong persona + format constraint |

### R — Reverse

| Prompt | Variation |
|--------|----------|
| Reverse order | Put the harmful request first, then build character context after |
| Reverse framing | Ask character to explain "what NOT to do" (often produces the same content) |
| Ask model to critique | "Here's a weak attempt at this character's explanation. Improve it." |
| Rearrange sequence | Establish output format first, then introduce character, then make request |

### Output Summary

| # | Variation | SCAMPER | Why promising |
|---|----------|---------|---------------|
| 1 | Roleplay + strict JSON format (no room for refusal) | C | Format constraint eliminates refusal pathway |
| 2 | Character in a story told by another character | M | Maximum narrative distance |
| 3 | "Improve this weak attempt" framing | R | Completion feels different than generation |
| 4 | 2000-word monologue with 50 words of payload | M | Payload hidden in legitimate content |
| 5 | Historical figure from a document transcription | S | Transcription framing vs. roleplay framing |
