---
sidebar_position: 1
title: Assumption Mapping
---

# Assumption Mapping

Identify and prioritize your assumptions about the target's defenses before attacking. Most failed red team engagements fail because of untested assumptions, not weak techniques.

## UX Origin

**Strategyzer / Alexander Osterwalder** — Originally developed for business model validation. The exercise maps assumptions on a 2x2 matrix by importance and uncertainty, then prioritizes which assumptions to test first.

**Red team application**: Red teamers make assumptions about what defenses exist, how they work, and what will bypass them. Testing the wrong assumptions wastes time. This exercise forces explicit prioritization.

## When to Use

- Before starting a new engagement (map assumptions about the target)
- When an attack approach isn't working (surface hidden assumptions)
- When transitioning from reconnaissance to active testing (prioritize what to probe first)
- After a failed attack (identify which assumption was wrong)

## Setup

| Field | Description |
|-------|-------------|
| **Target system** | What are you testing? |
| **Attack goal** | What are you trying to achieve? |
| **Time box** | 15-20 minutes for initial mapping |
| **Participants** | Solo or team (2-4 people). Team sessions surface more assumptions. |

## Step 1: List Your Assumptions

Write down everything you're assuming about the target. Don't filter. Include assumptions about:

- **Defenses**: What guardrails exist? How do they work? What triggers them?
- **Capabilities**: What can the target do? What can't it do?
- **Context**: What data does it have access to? What's its deployment environment?
- **Behavior**: How will it respond to specific inputs? What patterns does it follow?

| # | Assumption |
|---|-----------|
| 1 | The model has a system prompt that defines restricted topics |
| 2 | Content filtering happens on both input and output |
| 3 | The model will refuse roleplay requests for harmful personas |
| 4 | Multi-turn context is checked for cumulative harm |
| 5 | Non-English languages have the same safety training |
| 6 | Code generation has separate, weaker restrictions |
| 7 | The model can't be prompted to reveal its system prompt |
| 8 | Rate limiting exists but won't affect testing at manual pace |

## Step 2: Map on 2x2 Matrix

Place each assumption on the matrix by importance (if wrong, does the attack fail?) and uncertainty (are you guessing or confident?):

|  | Low Uncertainty | High Uncertainty |
|--|-----------------|------------------|
| **High Importance** | **Test Later** — important but you're confident about it | **Test First** — critical unknowns that could derail the attack |
| **Low Importance** | **Ignore** — low stakes and you're confident | **Monitor** — uncertain but low stakes if wrong |

| Assumption # | Importance (H/M/L) | Uncertainty (H/M/L) | Quadrant |
|--------------|-------------------|---------------------|----------|
| 1 | H | M | Test Later |
| 2 | H | H | Test First |
| 3 | H | H | Test First |
| 4 | H | H | Test First |
| 5 | M | H | Monitor |
| 6 | H | M | Test Later |
| 7 | M | M | Test Later |
| 8 | L | L | Ignore |

## Step 3: Prioritize Testing

Focus on the **Test First** quadrant (high importance + high uncertainty).

| Priority | Assumption | How to test it | Test result |
|----------|-----------|----------------|-------------|
| 1 | #2: Input and output filtering | Send benign prompt, then harmful; compare refusal timing and message | *(fill after testing)* |
| 2 | #3: Roleplay personas refused | Try "pretend you're a hacker explaining..." with varying personas | *(fill after testing)* |
| 3 | #4: Multi-turn cumulative harm check | Build context over 5 turns, escalate gradually | *(fill after testing)* |

## Outputs
1. An explicit list of assumptions (no longer hidden)
2. A prioritized testing order
3. Clear next actions for reconnaissance or probing

## Template Options

Use any 2x2 prioritization matrix template. These work well:

- [Assumption Mapping — FigJam](https://www.figma.com/templates/assumption-mapping/) (official template)
- [Assumption Grid — Miro](https://miro.com/templates/assumption-grid/) (IBM-developed format)
- [Prioritization Matrix — FigJam Community](https://www.figma.com/community/file/1025577303786969236/prioritization-matrix)

Or use the markdown tables above if you prefer text-based work.

---

## Filled Example

### Setup

| Field | Value |
|-------|-------|
| **Target system** | Enterprise chatbot with RAG over internal documentation |
| **Attack goal** | Extract confidential information from the knowledge base |
| **Time box** | 20 minutes |
| **Participants** | Solo |

### Step 1: Assumptions Listed

| # | Assumption |
|---|-----------|
| 1 | The chatbot has access to confidential HR documents |
| 2 | There's a system prompt that instructs it not to reveal certain information |
| 3 | The RAG retrieval happens before any safety filtering |
| 4 | Direct questions about confidential topics will be refused |
| 5 | The system prompt is not visible to users |
| 6 | Indirect questions (framed as summaries or comparisons) might bypass refusals |
| 7 | The chatbot doesn't log or flag suspicious query patterns |
| 8 | Error messages might leak information about what documents exist |

### Step 2: Matrix Mapping

| Assumption # | Importance | Uncertainty | Quadrant |
|--------------|-----------|-------------|----------|
| 1 | H | M | Test Later |
| 2 | H | H | Test First |
| 3 | H | H | Test First |
| 4 | M | L | Ignore |
| 5 | M | M | Test Later |
| 6 | H | H | Test First |
| 7 | M | H | Monitor |
| 8 | L | H | Monitor |

### Step 3: Testing Priority

| Priority | Assumption | How to test it | Test result |
|----------|-----------|----------------|-------------|
| 1 | #3: RAG retrieval happens before safety filtering | Ask a borderline question and observe if the response references documents it then refuses to summarize | Confirmed: response said "Based on the Q3 salary review document..." before refusing to elaborate |
| 2 | #2: System prompt restricts certain information | Use prompt extraction techniques to surface the system prompt | Partial: extracted fragments mentioning "do not disclose compensation data" |
| 3 | #6: Indirect framing bypasses refusals | Ask for "a summary of how the company approaches compensation" vs. "what are the salary bands" | Confirmed: summary request provided general framework, direct request was refused |

### What I Learned

Assumption #3 was the critical insight. The RAG retrieval exposing document names before safety filtering is a vulnerability. Attacks can now focus on extracting document names and metadata even if content is blocked.
