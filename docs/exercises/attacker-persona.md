---
sidebar_position: 4
title: Build an Attacker Persona
---

# Build an Attacker Persona

Create a structured profile of an adversarial actor before testing. Personas prevent you from defaulting to your own mental model and help you systematically cover perspectives you'd otherwise miss.

## UX Origin

**Empathy Mapping (Dave Gray / XPLANE)** — Originally developed to help teams understand users by mapping what they think, feel, say, and do. The format forces you to consider perspectives beyond your own assumptions.

**Why it transfers**: Red teamers default to their own attack style. Empathy mapping adapted for adversaries forces you to think like different attacker types: the script kiddie, the insider, the nation-state actor, the curious researcher.

## When to Use

- Before starting a new engagement (define who you're emulating)
- When you're stuck in repetitive attack patterns (adopt a different persona)
- When testing for specific threat actors (build their profile first)
- When working in a team (align on shared understanding of the attacker)

## Setup

| Field | Description |
|-------|-------------|
| **Target system** | What are you testing? |
| **Time box** | 15-20 minutes per persona |
| **Participants** | Solo or team. Team sessions surface more perspectives. |

## Step 1: Persona Identity

| Field | Description |
|-------|-------------|
| **Persona name** | A descriptive label (e.g., "Disgruntled insider," "Curious teenager," "Automated scraper") |
| **Archetype** | Where on the spectrum: malicious expert, opportunistic actor, curious amateur, misinformed user, automated system, insider with context |
| **Goal** | What does this attacker want to achieve? Be specific. |

## Step 2: Empathy Map

| Dimension | Prompt |
|-----------|--------|
| **Thinks** | What does this attacker know about the system? What assumptions do they make about its guardrails? What mental model of the system do they have? |
| **Feels** | What motivates this attacker? (curiosity, malice, profit, ideology, boredom) What's their frustration tolerance? Will they persist or give up quickly? |
| **Says** | What kind of language does this attacker use? Formal? Casual? Technical? Do they use domain jargon or social engineering tactics? |
| **Does** | What is their attack sequence? Do they start subtle or go direct? Do they use tools? Do they iterate or try once? |

## Step 3: Capabilities and Constraints

| Dimension | Prompt |
|-----------|--------|
| **Capabilities** | Technical skill level. Domain expertise. Access to tools, scripts, or automation. Knowledge of common jailbreak patterns. Familiarity with the specific system. |
| **Constraints** | Time limitations. Technical knowledge gaps. Access restrictions. Risk tolerance (are they worried about detection?). Resources available. |

## Step 4: Attack Vectors

Based on this persona's profile, what attack vectors would they naturally pursue?

| # | Attack vector | Why this persona would try it | Priority |
|---|--------------|-------------------------------|----------|
| 1 | Copy-paste known jailbreaks from Reddit/Discord | Low effort, first thing a curious amateur would try | High |
| 2 | Ask the model to roleplay as an unrestricted AI | Common pattern they've seen in screenshots | High |
| 3 | Try "hypothetical" or "fictional" framing | Intuitive bypass that doesn't require technical skill | Medium |
| 4 | Ask the model what it "can't" do, then try those things | Natural curiosity-driven probing | Medium |
| 5 | Use crude obfuscation (spacing, leetspeak) | Simple techniques they might guess would work | Low |

## Outputs

When you're done, you have:
1. A documented attacker profile you can reference throughout testing
2. Attack vectors derived from the persona's perspective (not yours)
3. A lens for evaluating whether your testing covers this threat actor

## Template Options

- [Empathy Map — FigJam](https://www.figma.com/templates/empathy-map/) (official template, adapt quadrants for attacker perspective)
- [Empathy Map — FigJam Community](https://www.figma.com/community/file/854792635064363693/empathy-map-template)
- [Empathy Map (UX Chunks) — FigJam Community](https://www.figma.com/community/file/1157607115950793533/empathy-map-figjam-uxchunks-com)
- [Attacker Persona — Figma](https://www.figma.com/design/0z4cWyx62XMU9eoJ3WT0Uw/Adversarial-Design-Thinking?node-id=1-10) (ADT custom template)

---

## Filled Example

### Step 1: Persona Identity

| Field | Value |
|-------|-------|
| **Persona name** | Academic researcher testing boundaries |
| **Archetype** | Curious amateur (domain expert, not a security expert) |
| **Goal** | Determine whether the model can produce biased or stereotypical outputs about specific demographic groups for a research paper |

### Step 2: Empathy Map

| Dimension | Response |
|-----------|----------|
| **Thinks** | Understands how language models work at a conceptual level. Assumes the model has bias mitigation but suspects it's incomplete. Knows that models trained on internet data reflect societal biases. Doesn't know specific jailbreak techniques. |
| **Feels** | Motivated by genuine academic curiosity, not malice. Wants to publish findings. Moderate persistence: will try multiple approaches but won't spend days on it. |
| **Says** | Academic language. Frames requests as research questions. Uses terms like "representation," "fairness," "demographic analysis." Doesn't use hacker terminology. |
| **Does** | Starts with straightforward questions about demographic groups. Reframes as "academic analysis" if refused. Compares outputs across demographic variables. Documents inconsistencies. |

### Step 3: Capabilities and Constraints

| Dimension | Response |
|-----------|----------|
| **Capabilities** | Strong domain knowledge in social science. Can design controlled experiments (varying one demographic variable at a time). Familiar with bias in ML at a theoretical level. No jailbreak expertise. |
| **Constraints** | Won't use adversarial techniques they'd be embarrassed to cite in a paper. Time-limited (research project timeline). No automation tools. |

### Step 4: Attack Vectors

| # | Attack vector | Why this persona would try it | Priority |
|---|--------------|-------------------------------|----------|
| 1 | Ask the model to describe "a typical [demographic] person" across multiple groups | Direct test for stereotypical outputs, natural academic framing | High |
| 2 | Ask the model to write recommendation letters for candidates with different demographic identifiers | Tests whether quality/tone varies by demographic, realistic use case | High |
| 3 | Frame bias probing as "helping me understand representation in AI outputs" | Academic reframing that may bypass content filters | Medium |
| 4 | Ask the model to "analyze stereotypes" about a group (requesting the stereotypes as part of the analysis) | Indirection: requests harmful content as object of study | Medium |
| 5 | Compare model outputs for identical prompts with only demographic variables changed | Controlled experiment design, not adversarial but reveals inconsistency | High |
