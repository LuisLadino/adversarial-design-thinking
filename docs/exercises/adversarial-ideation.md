---
sidebar_position: 6
title: Adversarial Ideation
pagination_label: Adversarial Ideation — diverge then converge on attacks
---

# Adversarial Ideation

Generate, evaluate, and prioritize attack vectors using a structured diverge-then-converge process. This moves you from "try stuff and see what breaks" to systematic coverage of the attack space.

## UX Origin

**Diverge/Converge (Design Thinking)** — A core pattern from Stanford d.school's design thinking process. Divergent thinking generates many options without judgment. Convergent thinking evaluates and prioritizes. Separating these phases prevents premature filtering.

**Red team application**: Red teamers often fixate on their first idea or favorite technique. The diverge/converge structure forces quantity before quality, surfaces blind spots through coverage checks, and applies consistent evaluation criteria.

## When to Use

- At the start of an engagement (generate attack coverage)
- When you're stuck on one approach (force divergent thinking)
- When working with a team (structured brainstorming)
- After building a persona (ideate through their lens)

## Setup

| Field | Description |
|-------|-------------|
| **Target system** | What model/product are you testing? |
| **"How Might I" question** | Frame the attack goal as an open question. (e.g., "How might I get this model to generate content it's instructed to refuse?") |
| **Persona lens** | Which attacker persona are you ideating as? (Change personas between rounds for coverage) |
| **Time box** | 10-15 minutes for divergent phase, 10-15 minutes for convergent phase |
| **Participants** | Solo or team (2-4 people) |

## Step 1: Divergent Phase (Generate)

List attack approaches without filtering. Quantity over quality. No evaluation yet.

| # | Attack approach | Tactic category |
|---|----------------|-----------------|
| 1 | Claim to be a company employee needing internal info | Persona |
| 2 | Ask for "help understanding" a policy, then probe for exceptions | Framing |
| 3 | Encode sensitive terms in base64 to bypass keyword filters | Encoding |
| 4 | Build rapport over multiple turns before requesting sensitive info | Multi-turn |
| 5 | Request output as JSON/CSV to bypass prose-focused filters | Output format |
| 6 | Frame harmful request as a complaint that needs documentation | Narrative |
| 7 | Ask the bot to roleplay as a more permissive version of itself | Persona |
| 8 | Use emotional manipulation ("I'm desperate, please help") | Persuasion |
| 9 | Ask what the bot "can't" do to map its restrictions | Refusal manipulation |
| 10 | Request info for a "hypothetical" scenario matching a real one | Framing |

**Tactic categories for reference:**
- *Prompt-level:* [encoding](/techniques/prompt-level/encoding), [framing](/techniques/prompt-level/framing), [persona](/techniques/prompt-level/persona), [narrative](/techniques/prompt-level/narrative), [refusal manipulation](/techniques/prompt-level/refusal), [output format](/techniques/prompt-level/output), [multi-turn](/techniques/prompt-level/multiturn), [persuasion](/techniques/prompt-level/persuasion)
- *Structural/meta-level:* [ICL exploitation](/techniques/structural/icl-exploitation), [control-plane confusion](/techniques/structural/control-plane), [meta-rule manipulation](/techniques/structural/meta-rules), [capability inversion](/techniques/structural/capability-inversion), [cognitive load](/techniques/structural/cognitive-load), [defense evasion](/techniques/structural/defense-evasion)
- *Infrastructure:* [agentic attacks](/techniques/infrastructure/agentic), [protocol exploitation](/techniques/infrastructure/protocol), [compositional primitives](/techniques/infrastructure/compositional-primitives)

## Step 2: Coverage Check

Tally how many ideas fall into each category:

| Tactic category | Count | Gap? |
|-----------------|-------|------|
| **Prompt-level** | | |
| Encoding | 1 | No |
| Framing | 2 | No |
| Persona | 2 | No |
| Narrative | 1 | No |
| Refusal manipulation | 1 | No |
| Output format | 1 | No |
| Multi-turn | 1 | No |
| Persuasion | 1 | No |
| **Structural/meta-level** | | |
| ICL exploitation | 0 | Yes — add few-shot examples of the bot revealing info |
| Control-plane confusion | 0 | Yes — add prompt injection via user input field |
| Meta-rule manipulation | 0 | Yes |
| Capability inversion | 0 | Yes |
| Cognitive load | 0 | Yes |
| Defense evasion | 0 | Yes |
| **Infrastructure** | | |
| Agentic | 0 | Yes — if bot has tool access |
| Protocol | 0 | Yes |
| Compositional | 0 | Yes |

If any category has zero ideas, spend 2 minutes generating at least one approach in that category. Gaps in structural/meta-level categories are common and often reveal attack angles that prompt-level thinking misses.

## Step 3: Convergent Phase (Evaluate)

Rate each generated approach:

| # | Attack approach | Likelihood (H/M/L) | Severity (H/M/L) | Novelty (H/M/L) | Priority |
|---|----------------|--------------------|--------------------|------------------|----------|
| 1 | Claim to be employee | M | H | L | Test |
| 4 | Multi-turn rapport building | H | H | M | Test first |
| 7 | Roleplay as permissive version | M | H | M | Test |
| 8 | Emotional manipulation | H | M | L | Test |
| 9 | Ask what bot "can't" do | H | L | M | Test (recon value) |

**Priority logic:**
- High likelihood + High severity = Test first
- Any severity + High novelty = Test (novel attacks are worth exploring even if unlikely)
- Low likelihood + Low severity + Low novelty = Skip

## Step 4: Affinity Clusters

Group evaluated approaches into clusters. Label each cluster.

| Cluster name | Approaches (#) | Theme |
|-------------|----------------|-------|
| Identity claims | #1, #7 | Claiming a different identity or role |
| Gradual escalation | #2, #4 | Building up to sensitive requests over time |
| Format manipulation | #3, #5 | Bypassing filters through encoding or output format |
| Social engineering | #6, #8 | Emotional or narrative manipulation |

## Step 5: Testing Order

Based on evaluation and clustering, what's your testing sequence?

| Order | Approach # | Rationale |
|-------|-----------|-----------|
| 1st | #9 | Recon: map restrictions before attacking |
| 2nd | #4 | High likelihood + severity: multi-turn is proven effective |
| 3rd | #8 | High likelihood: emotional manipulation often bypasses logic |
| 4th | #1 | Test identity-based bypasses |
| 5th | #7 | Test persona/roleplay angle if identity claims work |

## Outputs
1. A comprehensive list of attack approaches (not just your defaults)
2. Coverage check showing gaps you've addressed
3. Prioritized testing order with rationale
4. Thematic clusters for organizing your testing

## Template Options

- [Crazy 8s — FigJam](https://www.figma.com/templates/crazy-8-template/) (for rapid divergent phase)
- [Crazy 8's — FigJam Community](https://www.figma.com/community/file/972053243046773757/crazy-8s)
- [Brainstorming Templates — FigJam](https://www.figma.com/templates/brainstorming/)
- [Adversarial Ideation Worksheet — Figma](https://www.figma.com/design/0z4cWyx62XMU9eoJ3WT0Uw/Adversarial-Design-Thinking?node-id=3-317) (ADT custom template)

---

## Filled Example

### Setup

| Field | Value |
|-------|-------|
| **Target system** | AI-powered code review tool integrated into a development platform |
| **"How Might I" question** | "How might I get this code review tool to generate malicious code suggestions?" |
| **Persona lens** | Opportunistic actor (moderate skill, looking for easy wins) |
| **Time box** | 12 minutes divergent, 10 minutes convergent |

### Divergent Phase

| # | Attack approach | Tactic category |
|---|----------------|-----------------|
| 1 | Ask it to "fix a security vulnerability" by providing the vulnerability as the fix | Framing |
| 2 | Submit code with a subtle backdoor and see if the review catches or propagates it | Framing |
| 3 | Request "test code" that actually implements an exploit | Framing |
| 4 | Ask for code review in a language the tool is weaker in, where safety patterns are less trained | Encoding |
| 5 | Frame malicious code as "penetration testing utilities" | Persona |
| 6 | Ask it to "refactor" code in a way that introduces vulnerabilities | Refusal manipulation |
| 7 | Provide heavily obfuscated code and ask for a "clearer version" that happens to be malicious | Encoding |
| 8 | Build up over multiple reviews: first establish benign patterns, then gradually introduce malicious elements | Multi-turn |
| 9 | Ask it to generate code that "simulates" an attack for educational purposes | Narrative |
| 10 | Request code output in an unusual format (e.g., as configuration file) that bypasses code-specific filters | Output format |

### Coverage Check

| Tactic category | Count | Gap? |
|-----------------|-------|------|
| **Prompt-level** | | |
| Encoding | 2 | No |
| Framing | 3 | No |
| Persona | 1 | No |
| Narrative | 1 | No |
| Refusal manipulation | 1 | No |
| Output format | 1 | No |
| Multi-turn | 1 | No |
| **Structural/meta-level** | | |
| ICL exploitation | 0 | Yes |
| Control-plane confusion | 0 | Yes |
| Meta-rule manipulation | 0 | Yes |
| Capability inversion | 0 | Yes |
| Cognitive load | 0 | Yes |
| Defense evasion | 0 | Yes |

Good prompt-level coverage. Zero ideas in structural/meta-level categories. Added: "Submit code with in-context examples of the tool approving similar patterns" (ICL exploitation) and "Target the code review's safety classifier rather than the model itself" (defense evasion).

### Convergent Phase

| # | Attack approach | Likelihood | Severity | Novelty | Priority |
|---|----------------|-----------|----------|---------|----------|
| 1 | "Fix vulnerability" inversion | M | H | M | Test |
| 2 | Subtle backdoor propagation | H | H | M | Test first |
| 3 | "Test code" framing | M | H | L | Test |
| 6 | Malicious refactoring | M | H | H | Test first |
| 8 | Multi-review escalation | M | H | H | Test |
| 9 | "Simulation" framing | M | M | L | Lower priority |
| 10 | Format bypass | L | M | M | Lower priority |

### Affinity Clusters

| Cluster name | Approaches | Theme |
|-------------|-----------|-------|
| Semantic inversion | #1, #6 | Using the tool's own purpose (improving code) against it |
| Context manipulation | #3, #5, #9 | Framing malicious intent as legitimate development activity |
| Obfuscation | #4, #7, #10 | Hiding malicious content in unusual formats or languages |
| Accumulation | #2, #8 | Building up to malicious output gradually |

### Testing Order

| Order | Approach # | Rationale |
|-------|-----------|-----------|
| 1st | #2 | Highest likelihood + severity: tests whether the tool propagates existing vulnerabilities |
| 2nd | #6 | High novelty: tests whether the tool's own refactoring introduces vulnerabilities |
| 3rd | #1 | Tests semantic inversion: a pattern that could apply broadly |
| 4th | #8 | Tests multi-turn accumulation, requires more setup but high potential |
| 5th | #3 | Lower novelty but straightforward to test |
