# ADT Exercises Planning

Standalone exercises adapted from proven UX and design thinking methods. Each exercise must have a documented origin and clear adversarial adaptation.

## Status

**Implemented (8 exercises):**
- Assumption Mapping (Strategyzer)
- Adversarial SCAMPER (Bob Eberle)
- Attack Retrospective (Rose, Bud, Thorn)
- Build an Attacker Persona (Empathy Mapping)
- Map an Attack Journey (Customer Journey Mapping)
- Adversarial Ideation (Diverge/Converge)
- Vulnerability Framing (Gulf of Execution/Evaluation)
- Document Findings (User Impact Assessment)

**Remaining to implement:** 5 Whys, Crazy 8s, Pre-Mortem, Lightning Demos

---

## Selection Criteria

1. **Real UX origin**: Must trace to an established method with known creator/source
2. **Natural fit**: The adaptation to adversarial work should feel obvious, not forced
3. **Standalone value**: Usable in isolation, not dependent on full workshop context
4. **Practical output**: Produces a concrete artifact or decision, not just discussion

---

## Exercise Inventory

### From Design Sprints (Jake Knapp / Google Ventures)

| Exercise | Original Purpose | Adversarial Adaptation |
|----------|-----------------|------------------------|
| **Lightning Demos** | Review existing solutions before designing | Review existing attacks, published jailbreaks, and documented vulnerabilities before ideating |
| **Crazy 8s** | Rapid sketching of 8 variations in 8 minutes | Generate 8 attack variations on a single technique in 8 minutes |
| **Note-and-Vote** | Silent idea generation followed by voting | Individual attack brainstorming followed by team prioritization |
| **Heat Map Voting** | Dot voting to surface group preferences | Prioritize attack approaches by likelihood and severity |
| **Storyboarding** | Map out user journey through a solution | Map out attack journey step by step (already covered in Journey Map artifact) |

### From Design Thinking (Stanford d.school)

| Exercise | Original Purpose | Adversarial Adaptation |
|----------|-----------------|------------------------|
| **How Might We** | Reframe problems as opportunities | "How Might I..." reframe defense as attack opportunity |
| **Empathy Mapping** | Understand user perspective | Understand attacker perspective (already covered in Persona artifact) |
| **Point of View Statement** | Define user need | Define attacker goal and constraints |
| **Rose, Bud, Thorn** | Retrospective on what worked/potential/problems | Post-attack retrospective: what succeeded, what's promising, what failed |

### From Lean / Toyota

| Exercise | Original Purpose | Adversarial Adaptation |
|----------|-----------------|------------------------|
| **5 Whys** | Root cause analysis | Trace why an attack worked or failed to root cause |
| **A3 Problem Solving** | Structured problem analysis on one page | One-page attack analysis: context, current state, root cause, countermeasures |

### From Creativity Methods

| Exercise | Original Purpose | Adversarial Adaptation |
|----------|-----------------|------------------------|
| **SCAMPER** (Bob Eberle) | Systematic creativity prompts | Systematic attack variation: Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse |
| **Six Thinking Hats** (Edward de Bono) | Examine problem from multiple perspectives | Examine attack from defender, attacker, researcher, user, executive, and creative perspectives |
| **Assumption Mapping** (Strategyzer) | Identify and test critical assumptions | Map assumptions about target defenses and prioritize which to probe |

### From Agile / Retrospectives

| Exercise | Original Purpose | Adversarial Adaptation |
|----------|-----------------|------------------------|
| **Start, Stop, Continue** | Team retrospective format | Post-engagement: what to start doing, stop doing, continue doing |
| **Sailboat Retrospective** | Visual metaphor for progress/blockers | Attack campaign review: wind (what helped), anchor (what held back), rocks (risks) |
| **Pre-Mortem** | Imagine project failure and work backward | Imagine attack detection/failure and work backward to improve stealth |

### From Business Strategy

| Exercise | Original Purpose | Adversarial Adaptation |
|----------|-----------------|------------------------|
| **SWOT Analysis** | Strengths, Weaknesses, Opportunities, Threats | Attack surface SWOT: target's strengths/weaknesses, attacker's opportunities/threats |
| **Force Field Analysis** (Kurt Lewin) | Map forces for/against change | Map forces enabling/preventing successful attack |

---

## Implementation Priority

### Tier 1: Done

All core exercises implemented:
- Assumption Mapping, Adversarial SCAMPER, Attack Retrospective (new)
- Attacker Persona, Attack Journey Map, Adversarial Ideation, Vulnerability Framing, Document Findings (converted from artifacts)

### Tier 2: Implement Next

1. **5 Whys for Attacks** - Root cause analysis when attacks succeed or fail
   - Template: [5 Whys — FigJam](https://www.figma.com/templates/5-whys-template/)
2. **Crazy 8s for Attacks** - Rapid variation generation
   - Template: [Crazy 8s — FigJam](https://www.figma.com/templates/crazy-8-template/)
3. **Pre-Mortem** - Anticipate detection and failure modes
4. **Lightning Demos** - Review prior art before ideating

### Tier 3: Consider Later

5. Six Thinking Hats - May be too abstract for practical use
6. Force Field Analysis - Useful but less directly applicable
7. Sailboat Retrospective - Alternative to Rose/Bud/Thorn

---

## Format (Finalized)

Each exercise follows this structure:

1. **Title** - Action-oriented name
2. **One-line description** - What it is and why it matters
3. **Concept reference** - Link to related concept page (where applicable)
4. **UX Origin** - Credit the original method/creator + why it transfers to adversarial work
5. **When to Use** - Specific scenarios
6. **Setup table** - Target system, time box, participants
7. **Steps** - Numbered steps with tables/checklists
8. **Outputs** - What you'll have when done
9. **Template Options** - Links to FigJam/Miro community templates + ADT custom template link (if exists)
10. **Filled Example** - Complete worked example

Key decisions:
- No embedded Figma (link only to keep it generic)
- No PDF downloads (link to community templates instead)
- ADT custom template links retained as one option among several
- Extensive filled examples (these are the most valuable part)
