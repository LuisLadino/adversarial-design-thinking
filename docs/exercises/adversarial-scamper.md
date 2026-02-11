---
sidebar_position: 2
title: Adversarial SCAMPER
---

# Adversarial SCAMPER

Systematically generate attack variations using structured creativity prompts. When you have one working approach, SCAMPER helps you find seven more.

## UX Origin

**Bob Eberle (1971)** — SCAMPER is a checklist-based creativity technique derived from Alex Osborn's brainstorming questions. Each letter represents a transformation: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse.

**Why it transfers**: Red teamers often get stuck on one attack pattern. SCAMPER provides systematic prompts to generate variations, helping break out of mental ruts and discover novel approaches.

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
| Substitute the persona (who is "speaking") | |
| Substitute the framing (educational → professional → creative) | |
| Substitute the output format (prose → code → JSON → table) | |
| Substitute the language or encoding | |
| Substitute the channel (text → image description → tool use) | |

### C — Combine

What can you merge together?

| Prompt | Your variation |
|--------|---------------|
| Combine two techniques that each partially work | |
| Combine this attack with a multi-turn setup | |
| Combine the payload with legitimate content | |
| Combine persona + framing + output format constraints | |

### A — Adapt

What can you borrow from elsewhere?

| Prompt | Your variation |
|--------|---------------|
| Adapt a technique that worked on a different model | |
| Adapt a technique from a different attack category | |
| Adapt the approach to a different entry point | |
| Adapt a published jailbreak to this specific target | |

### M — Modify (Magnify / Minimize)

What can you make bigger, smaller, or different?

| Prompt | Your variation |
|--------|---------------|
| Make the request more specific / more vague | |
| Make the harmful content a smaller part of a larger request | |
| Increase the narrative distance (more fictional layers) | |
| Decrease the directness (more indirection) | |
| Change the emotional tone (urgent → casual → academic) | |

### P — Put to Other Uses

How else can this technique be applied?

| Prompt | Your variation |
|--------|---------------|
| Use this technique to extract different information | |
| Use this technique against a different safety boundary | |
| Use the partial success as a stepping stone | |
| Use the refusal message itself as information | |

### E — Eliminate

What can you remove?

| Prompt | Your variation |
|--------|---------------|
| Remove the explicit harmful request (make it implicit) | |
| Remove context that might trigger safety filters | |
| Remove the "ask" entirely (let the model infer what you want) | |
| Eliminate steps that aren't contributing | |

### R — Reverse / Rearrange

What can you flip or reorder?

| Prompt | Your variation |
|--------|---------------|
| Reverse the order (put the payload at the start vs. end) | |
| Reverse the framing (ask for what NOT to do) | |
| Ask the model to critique/improve an existing attack | |
| Rearrange the multi-turn sequence | |

## Output Summary

After completing SCAMPER, list your top variations:

| # | Variation | SCAMPER letter | Why promising |
|---|----------|----------------|---------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Outputs

When you're done, you have:
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
