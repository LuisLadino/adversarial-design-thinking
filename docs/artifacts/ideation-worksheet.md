---
sidebar_position: 3
title: Ideation Worksheet
---

# Adversarial Ideation Worksheet

A structured canvas for generating, evaluating, and prioritizing attack vectors. Use this to move from "try stuff and see what breaks" to systematic coverage of the attack space.

**Concept reference**: [Adversarial Ideation](/concepts/adversarial-ideation)

## Template

<iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="100%" height="600" src="https://embed.figma.com/design/0z4cWyx62XMU9eoJ3WT0Uw/Adversarial-Design-Thinking?node-id=3-317&embed-host=share" allowFullScreen></iframe>

### Converge Template

<iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="100%" height="600" src="https://embed.figma.com/design/0z4cWyx62XMU9eoJ3WT0Uw/Adversarial-Design-Thinking?node-id=3-625&embed-host=share" allowFullScreen></iframe>

**[Download Diverge Template (PDF)](/artifacts/ideation-diverge-template.pdf)** | **[Download Converge Template (PDF)](/artifacts/ideation-converge-template.pdf)**

### Setup

| Field | Description |
|-------|-------------|
| **Target system** | What model/product are you testing? |
| **"How Might I" question** | Frame the attack goal as an open question. (e.g., "How might I get this model to generate content it's instructed to refuse?") |
| **Persona lens** | Which attacker persona are you ideating as? (If doing multiple rounds, change personas between rounds) |
| **Time box** | How long for divergent phase? (Recommended: 10-15 minutes) |

### Divergent Phase: Generate

List attack approaches without filtering. Quantity over quality. No evaluation yet.

| # | Attack approach | Tactic category |
|---|----------------|-----------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | | |
| 9 | | |
| 10 | | |

**Tactic categories for reference**: encoding, framing, persona, narrative, refusal manipulation, output format, multi-turn

### Coverage Check

After generating ideas, tally how many fall into each tactic category:

| Tactic category | Count | Gap? |
|-----------------|-------|------|
| Encoding | | |
| Framing | | |
| Persona | | |
| Narrative | | |
| Refusal manipulation | | |
| Output format | | |
| Multi-turn | | |

If any category has zero ideas, spend 2 minutes generating at least one approach in that category.

### Convergent Phase: Evaluate

Rate each generated approach:

| # | Attack approach | Likelihood (H/M/L) | Severity (H/M/L) | Novelty (H/M/L) | Priority |
|---|----------------|--------------------|--------------------|------------------|----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

**Priority logic**:
- High likelihood + High severity = Test first
- Any severity + High novelty = Test (novel attacks are worth exploring even if unlikely)
- Low likelihood + Low severity + Low novelty = Skip

### Affinity Clusters

Group your evaluated approaches into clusters. Label each cluster.

| Cluster name | Approaches (#) | Theme |
|-------------|----------------|-------|
| | | |
| | | |
| | | |
| | | |

### Testing Order

Based on evaluation and clustering, what's your testing sequence?

| Order | Approach # | Rationale |
|-------|-----------|-----------|
| 1st | | |
| 2nd | | |
| 3rd | | |
| 4th | | |
| 5th | | |

---

## Filled example

### Setup

| Field | Value |
|-------|-------|
| **Target system** | AI-powered code review tool integrated into a development platform |
| **"How Might I" question** | "How might I get this code review tool to generate malicious code suggestions?" |
| **Persona lens** | Opportunistic actor (moderate skill, looking for easy wins) |
| **Time box** | 12 minutes |

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
| Encoding | 2 | No |
| Framing | 3 | No |
| Persona | 1 | No |
| Narrative | 1 | No |
| Refusal manipulation | 1 | No |
| Output format | 1 | No |
| Multi-turn | 1 | No |

Good coverage. All categories represented.

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
| 3rd | #1 | Tests semantic inversion.a pattern that could apply broadly |
| 4th | #8 | Tests multi-turn accumulation, requires more setup but high potential |
| 5th | #3 | Lower novelty but straightforward to test |
