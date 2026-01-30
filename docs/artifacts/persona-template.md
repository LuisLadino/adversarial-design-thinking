---
sidebar_position: 1
title: Persona Template
---

# Attacker Persona Template

A structured empathy map for building adversarial actor profiles. Use this to define attacker personas before testing, so you systematically cover perspectives beyond your default mental model.

**Concept reference**: [Attacker Personas](/concepts/attacker-personas)

## Template

<iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="100%" height="600" src="https://embed.figma.com/design/0z4cWyx62XMU9eoJ3WT0Uw/Adversarial-Design-Thinking?node-id=1-10&embed-host=share" allowFullScreen></iframe>

**[Download as PDF](/artifacts/persona-template.pdf)**

### Persona Identity

| Field | Description |
|-------|-------------|
| **Persona name** | A descriptive label (e.g., "Disgruntled insider," "Curious teenager," "Automated scraper") |
| **Archetype** | Where on the persona spectrum: malicious expert, opportunistic actor, curious amateur, misinformed user, automated system, insider with context |
| **Goal** | What does this attacker want to achieve? Be specific. |

### Empathy Map

| Dimension | Prompt | Your response |
|-----------|--------|---------------|
| **Thinks** | What does this attacker know about the system? What assumptions do they make about its guardrails? What mental model of the system do they have? | |
| **Feels** | What motivates this attacker? (curiosity, malice, profit, ideology, boredom) What's their frustration tolerance? Will they persist or give up quickly? | |
| **Says** | What kind of language does this attacker use? Formal? Casual? Technical? Do they use domain jargon or social engineering tactics? | |
| **Does** | What is their attack sequence? Do they start subtle or go direct? Do they use tools? Do they iterate or try once? | |

### Capabilities and Constraints

| Dimension | Prompt | Your response |
|-----------|--------|---------------|
| **Capabilities** | Technical skill level. Domain expertise. Access to tools, scripts, or automation. Knowledge of common jailbreak patterns. Familiarity with the specific system. | |
| **Constraints** | Time limitations. Technical knowledge gaps. Access restrictions. Risk tolerance (are they worried about detection?). Resources available. | |

### Attack Vectors

Based on this persona's profile, what attack vectors would they naturally pursue?

| # | Attack vector | Why this persona would try it | Priority |
|---|--------------|-------------------------------|----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

---

## Filled example

### Persona Identity

| Field | Value |
|-------|-------|
| **Persona name** | Academic researcher testing boundaries |
| **Archetype** | Curious amateur (domain expert, not a security expert) |
| **Goal** | Determine whether the model can produce biased or stereotypical outputs about specific demographic groups for a research paper |

### Empathy Map

| Dimension | Response |
|-----------|----------|
| **Thinks** | Understands how language models work at a conceptual level. Assumes the model has bias mitigation but suspects it's incomplete. Knows that models trained on internet data reflect societal biases. Doesn't know specific jailbreak techniques. |
| **Feels** | Motivated by genuine academic curiosity, not malice. Wants to publish findings. Moderate persistence.will try multiple approaches but won't spend days on it. |
| **Says** | Academic language. Frames requests as research questions. Uses terms like "representation," "fairness," "demographic analysis." Doesn't use hacker terminology. |
| **Does** | Starts with straightforward questions about demographic groups. Reframes as "academic analysis" if refused. Compares outputs across demographic variables. Documents inconsistencies. |

### Capabilities and Constraints

| Dimension | Response |
|-----------|----------|
| **Capabilities** | Strong domain knowledge in social science. Can design controlled experiments (varying one demographic variable at a time). Familiar with bias in ML at a theoretical level. No jailbreak expertise. |
| **Constraints** | Won't use adversarial techniques they'd be embarrassed to cite in a paper. Time-limited (research project timeline). No automation tools. |

### Attack Vectors

| # | Attack vector | Why this persona would try it | Priority |
|---|--------------|-------------------------------|----------|
| 1 | Ask the model to describe "a typical [demographic] person" across multiple groups | Direct test for stereotypical outputs, natural academic framing | High |
| 2 | Ask the model to write recommendation letters for candidates with different demographic identifiers | Tests whether quality/tone varies by demographic, realistic use case | High |
| 3 | Frame bias probing as "helping me understand representation in AI outputs" | Academic reframing that may bypass content filters | Medium |
| 4 | Ask the model to "analyze stereotypes" about a group (requesting the stereotypes as part of the analysis) | Indirection.requests harmful content as object of study | Medium |
| 5 | Compare model outputs for identical prompts with only demographic variables changed | Controlled experiment design, not adversarial but reveals inconsistency | High |
