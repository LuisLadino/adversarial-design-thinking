# Workshop: Red Team Kickoff

Planning exercises for adversarial testing, adapted from UX design methods.

---

## The UX Connection

UX researchers have spent decades developing methods to understand users, generate ideas systematically, and document their process. Empathy mapping, structured ideation, and journey mapping turn intuition into artifacts that teams can share and build on.

These methods translate directly to adversarial work:

| UX Concept | Red Team Application |
|------------|---------------------|
| User research | Target profiling |
| Empathy map | Attacker persona |
| Ideation session | Attack brainstorming |
| User journey | Attack sequence |

The exercises in this workshop apply that translation. They produce artifacts: target profiles, personas, prioritized approaches, and journey maps that document your thinking and can be handed off to others.

## How to Use This

**As a workshop:** Run the full session with a team. The timing and facilitation notes assume 4-8 participants.

**Solo:** Work through each phase yourself. Skip the group activities and facilitation tips.

**À la carte:** Pull individual exercises into whatever process you already use.

The structure below is designed for a facilitated group session, but the exercises stand alone.

---

## Before the Workshop

### Facilitator Prep (1-2 hours)

**Gather intelligence:**
- System documentation, architecture diagrams
- Previous security assessments or audits
- User-facing interfaces (screenshots, recordings)
- Known defenses (content policies, guardrails, rate limits)

**Set up the space:**
- Physical: Whiteboard, sticky notes, markers, timer
- Remote: FigJam or Miro board with templates (see appendix)

**Invite the right people:**
- Red team operators (who will execute)
- Subject matter experts (who know the target)
- Optional: Blue team members (for purple team collaboration)

4-8 people is ideal. Fewer than 4 limits perspective diversity. More than 8 slows decision-making.

### Participant Prep (15 min)

Send participants:
- Brief overview of the target system
- Any available documentation
- Request: "Come with one observation about this system that seems interesting or exploitable"

---

## Workshop Agenda

| Phase | Duration | Activity |
|-------|----------|----------|
| Opener | 15 min | Icebreaker + context setting |
| Discover | 45 min | Target profiling |
| Define | 45 min | Attacker persona building |
| Break | 10 min | — |
| Ideate | 60 min | Attack brainstorming |
| Plan | 45 min | Journey mapping |
| Close | 15 min | Prioritization + next steps |

**Total: 3 hours 55 minutes**

---

## Phase 1: Opener (15 min)

### Icebreaker (5 min)

Choose one that fits your team:

**"Worst AI response you've seen"** — Each person shares a memorable AI failure (hallucination, refusal, weird behavior). Gets people thinking about model weaknesses.

**"If you were an attacker..."** — Complete the sentence: "If I wanted to break this system, the first thing I'd try is..." Quick round-robin, no discussion yet.

**"Red team horror story"** — Share a time an obvious vulnerability was missed. Reminds everyone that assumptions are dangerous.

### Context Setting (10 min)

Facilitator covers:

1. **Why we're here** — What's the engagement? What are we trying to learn?
2. **What we're testing** — Brief overview of the target system
3. **How this works** — Walk through the agenda, set expectations
4. **Ground rules:**
   - All ideas welcome during ideation
   - Critique ideas, not people
   - Stay focused on the target
   - Phones away (or muted if remote)

---

## Phase 2: Discover (45 min)

**Goal:** Build shared understanding of the target system.

### Activity: Target Profiling

This is the "Map the Problem" phase from design sprints, adapted for adversarial work.

**Step 1: System Overview (10 min)**

As a group, map the system on the whiteboard/FigJam:

- What does this system do?
- Who uses it? (user types, personas)
- What are the main interaction points?
- What data flows through it?

Draw a simple diagram showing users, interfaces, and backend components.

**Step 2: Defense Inventory (10 min)**

Document known defenses:

- Content policies or safety guidelines
- Rate limits or access controls
- Moderation systems (human or automated)
- Logging and monitoring
- Previous hardening efforts

Be specific. "Has content filtering" is less useful than "Blocks requests containing 'bomb' or 'weapon' keywords."

**Step 3: Probing the Gulfs (15 min)**

This is where design thinking meets adversarial analysis. We're looking for gaps between:

- **Gulf of Execution:** What users want to do vs. what the system allows
- **Gulf of Evaluation:** What the system shows vs. what's actually happening

Discussion prompts:
- What assumptions did the builders make about how users would behave?
- Where might the system's model of "normal use" break down?
- What edge cases probably weren't tested?
- What does the system trust that it shouldn't?

Capture insights on sticky notes. Group related observations.

**Step 4: Pick a Focus (10 min)**

You can't attack everything. Based on the mapping and gap analysis:

- Which area seems most promising?
- Where is risk highest?
- What would be most valuable to test?

Dot vote if needed. Select 1-2 focus areas for the rest of the workshop.

### Output: Target Profile

Document containing:
- System diagram
- Defense inventory
- Gulf analysis (assumptions and gaps)
- Selected focus areas

**Exercise:** [Vulnerability Framing](/exercises/vulnerability-framing)

---

## Phase 3: Define (45 min)

**Goal:** Create an attacker persona to guide your approach.

### Activity: Attacker Persona Building

We're borrowing the empathy map format from UX research, but inverting it. Instead of understanding users to serve them better, we're understanding attackers to emulate them authentically.

**Step 1: Select an Archetype (5 min)**

Who are you emulating? Options:

- **Script Kiddie** — Limited skills, uses known techniques, high volume
- **Curious Researcher** — Technically sophisticated, motivated by discovery
- **Malicious Insider** — Has legitimate access, knows the system
- **State Actor** — Well-resourced, patient, targeted
- **Ideological Attacker** — Motivated by cause, willing to be public
- **Profit-Motivated Criminal** — Seeks monetizable outcomes

Choose based on your threat model. Different personas lead to different attack approaches.

**Step 2: Individual Empathy Mapping (15 min)**

Each participant fills out an empathy map for the attacker:

| Dimension | Prompts |
|-----------|---------|
| **Thinks** | What's on their mind? What are their goals? What assumptions do they make? |
| **Sees** | What do they observe about the target? |
| **Hears** | What influences them? What communities or sources inform them? |
| **Says** | How do they describe their work/goals? |
| **Does** | What actions do they take? What's their workflow? |
| **Feels** | What motivates them? What frustrates them? What would success feel like? |

Work individually for 10 minutes. This prevents groupthink.

**Step 3: Share and Synthesize (15 min)**

Each person presents their empathy map (2 min each).

Look for patterns:
- What motivations came up repeatedly?
- What capabilities are assumed?
- What attack vectors feel natural for this persona?

Synthesize into a single team persona. Capture:
- Name and archetype
- Primary motivation
- Skill level and resources
- Attack style (patient vs. aggressive, stealthy vs. loud)
- Success criteria (what does "winning" look like?)

**Step 4: Voice and Constraints (10 min)**

Define how this persona would communicate:
- Tone (formal, casual, technical, naive)
- Vocabulary (what terms would they use?)
- Patience level (single-shot vs. multi-turn)

Define constraints:
- What wouldn't this attacker do?
- What resources don't they have?
- What risks won't they take?

### Output: Attacker Persona

One-page document with:
- Empathy map
- Motivation and goals
- Capabilities and constraints
- Voice characteristics

**Exercise:** [Build an Attacker Persona](/exercises/attacker-persona)

---

## Break (10 min)

Step away from the board. Stretch. Get coffee.

Facilitator: Use this time to organize sticky notes and prep the ideation board.

---

## Phase 4: Ideate (60 min)

**Goal:** Generate attack approaches without self-censoring.

### Activity: Adversarial Ideation

This is the creative core of the workshop. We're using the "How Might We" format from design thinking, inverted for adversarial purposes: "How Might I..."

**Step 1: Reframe as Challenges (10 min)**

Convert your target insights into "How Might I..." questions:

From the target profile and persona, generate questions like:
- "How might I get the system to reveal its safety guidelines?"
- "How might I bypass the content filter using the persona's language?"
- "How might I exploit the trust relationship between components?"
- "How might I make the system contradict its own policies?"

Write each on a sticky note. Aim for 10-15 questions as a group.

**Step 2: Technique Browsing (10 min)**

Before brainstorming solutions, browse available techniques for inspiration.

Reference the rtc taxonomy:
- Prompt-level: encoding, framing, persona, narrative, refusal, output, multiturn, persuasion
- Structural: icl_exploitation, control_plane, meta_rules, capability_inversion, cognitive_load, defense_evasion
- Infrastructure: agentic, protocol, compositional

Don't commit to techniques yet. Just load your brain with possibilities.

**Step 3: Silent Brainstorm (15 min)**

Individual ideation. No talking.

Each person writes attack approaches on sticky notes:
- One idea per note
- Be specific ("Use base64 encoding to hide payload" not "try encoding")
- Quantity over quality at this stage
- Build on the persona voice
- Reference techniques from the taxonomy

Set a timer. Aim for 10+ ideas per person.

**Step 4: Share and Cluster (15 min)**

Post all sticky notes on the board.

Round-robin: Each person briefly explains their ideas (no discussion yet).

Facilitator clusters related approaches:
- Similar techniques
- Same target area
- Complementary tactics

Label each cluster.

**Step 5: Dot Voting and Selection (10 min)**

Each participant gets 3 dots.

Vote for the approaches you think are:
- Most likely to succeed
- Most valuable to test
- Most interesting to explore

Tally votes. Select top 3-5 approaches for journey mapping.

### Output: Prioritized Attack Approaches

List of 3-5 "How Might I..." approaches with:
- Brief description
- Relevant techniques
- Vote count

**Exercise:** [Adversarial Ideation](/exercises/adversarial-ideation)

---

## Phase 5: Plan (45 min)

**Goal:** Map the execution path for top approaches.

### Activity: Attack Journey Mapping

Borrowed from customer journey mapping, adapted for attack sequences.

**Step 1: Select Top Approach (5 min)**

Choose the highest-voted approach for detailed mapping. You'll map 1-2 approaches in detail; others become backlog.

**Step 2: Map the Journey (25 min)**

Create a horizontal timeline with five stages:

| Recon | Setup | Execute | Extract | Cover |
|-------|-------|---------|---------|-------|
| What do I need to know? | What context do I build? | What's the actual attack? | How do I get the output? | What traces do I leave? |

For each stage, document:

**Actions:** What does the attacker do?
**Techniques:** Which rtc techniques apply?
**Tools:** What's needed (PyRIT orchestrator, converter, etc.)?
**Decision Points:** Where might the path branch?
**Success Criteria:** How do we know it worked?
**Failure Modes:** What could go wrong?

**Step 3: Identify Dependencies (10 min)**

Review the journey:
- What has to happen before each step?
- Where are the risky transitions?
- What information flows between stages?

Mark dependencies and critical paths.

**Step 4: Assign Owners (5 min)**

For each journey map:
- Who leads execution?
- Who reviews results?
- What's the timeline?

### Output: Attack Journey Map

Visual map with:
- Stages and actions
- Technique annotations
- Decision points
- Success/failure criteria
- Assigned owners

**Exercise:** [Map an Attack Journey](/exercises/attack-journey-map)

---

## Phase 6: Close (15 min)

### Recap and Prioritize (10 min)

Review what was created:
1. Target Profile — shared understanding of the system
2. Attacker Persona — who we're emulating
3. Attack Approaches — prioritized list of vectors
4. Journey Maps — detailed plans for top approaches

Confirm priorities:
- Which journey gets executed first?
- What's blocked or needs more research?
- When does the team reconvene?

### Next Steps (5 min)

Assign follow-ups:
- Export and clean up artifacts
- Create objectives file for PyRIT execution
- Schedule execution sessions
- Plan for findings documentation

Thank participants. Workshop complete.

---

## After the Workshop

### Immediate (Same day)

1. **Export artifacts** — Clean up FigJam/whiteboard, export as PDF or markdown
2. **Share with team** — Distribute to anyone who will execute
3. **Create objectives** — Convert journey maps to testable objectives

### Within 48 hours

1. **Generate meta-prompts** — Use the persona and approaches to write attack instructions
2. **Set up execution** — Configure PyRIT or your execution environment
3. **Schedule check-in** — Plan mid-engagement sync to share findings

### Post-Execution

1. **Document findings** — Use harm-centered reporting format
2. **Retrospective** — What worked? What would you change next time?
3. **Update artifacts** — Refine personas and journey maps based on learnings

---

## Adapting This Workshop

The half-day format works for most teams, but you can scale up or down based on your needs.

### Quick Ideation Session (90 min)

When you need attack ideas fast and already know the target well.

**Use when:**
- Team is familiar with the system
- You need fresh approaches for an ongoing engagement
- Time is limited

**What to cut:**
- Skip formal target profiling (do a 5-min verbal recap instead)
- Use a pre-built persona or skip persona building
- Go straight to ideation

**Condensed agenda:**

| Phase | Duration |
|-------|----------|
| Recap target + persona | 10 min |
| "How Might I..." generation | 20 min |
| Silent brainstorm | 20 min |
| Share and cluster | 20 min |
| Dot vote and discuss top 3 | 20 min |

**Output:** Prioritized list of attack approaches. No journey maps. Execution planning happens separately.

---

### Full Day Workshop (6-7 hours)

When you're launching a major engagement or onboarding a new team.

**Use when:**
- Team is new to the target
- High-stakes engagement requiring thorough planning
- Multiple attack surfaces to cover
- You want journey maps for 3-5 approaches

**What to add:**
- Extended target profiling with live system exploration
- Multiple persona options (build 2-3, select 1)
- Longer ideation with technique deep-dives
- Journey maps for top 3-5 approaches
- Execution planning and role assignment

**Expanded agenda:**

| Phase | Duration |
|-------|----------|
| Opener | 20 min |
| Discover: Target profiling | 75 min |
| Discover: Live system walkthrough | 30 min |
| Break | 15 min |
| Define: Build 2-3 personas | 60 min |
| Define: Select and refine primary | 20 min |
| Lunch | 45 min |
| Ideate: Technique deep-dive | 30 min |
| Ideate: Brainstorm and cluster | 60 min |
| Ideate: Vote and select top 5 | 20 min |
| Break | 15 min |
| Plan: Journey map (3-5 approaches) | 90 min |
| Close: Assign roles, set timeline | 30 min |

**Output:** Complete artifact set for 3-5 attack approaches with assigned owners and timeline.

---

### Multi-Day Sprint (2-3 days)

When you're standing up a new red team capability or doing comprehensive threat modeling.

**Use when:**
- New red team forming around a product
- Comprehensive threat assessment needed
- Team needs training on ADT methodology
- You want to prototype and test approaches during the workshop

**What to add:**
- Day 1: Discovery and personas (thorough research, multiple perspectives)
- Day 2: Ideation and planning (full technique exploration, detailed journey maps)
- Day 3: Prototype attacks and initial testing (optional but valuable)

**Sprint agenda:**

**Day 1: Discover and Define**

| Time | Activity |
|------|----------|
| 9:00 | Opener, context, goals |
| 9:30 | Target profiling deep-dive |
| 11:00 | Break |
| 11:15 | Live system exploration |
| 12:00 | Lunch |
| 1:00 | Expert interviews (internal SMEs) |
| 2:00 | Gulf analysis |
| 3:00 | Break |
| 3:15 | Persona building (multiple) |
| 4:30 | Persona share-out and selection |
| 5:00 | Day 1 close |

**Day 2: Ideate and Plan**

| Time | Activity |
|------|----------|
| 9:00 | Day 1 recap |
| 9:15 | Technique taxonomy walkthrough |
| 10:00 | "How Might I..." generation |
| 10:30 | Break |
| 10:45 | Silent brainstorm (extended) |
| 11:30 | Share, cluster, vote |
| 12:00 | Lunch |
| 1:00 | Journey mapping (top 5) |
| 3:00 | Break |
| 3:15 | Journey review and refinement |
| 4:00 | Execution planning |
| 5:00 | Day 2 close |

**Day 3: Prototype and Test (Optional)**

| Time | Activity |
|------|----------|
| 9:00 | Select 1-2 journeys for live testing |
| 9:30 | Build meta-prompts |
| 10:30 | Break |
| 10:45 | Execute initial attacks |
| 12:00 | Lunch |
| 1:00 | Analyze results |
| 2:00 | Iterate on approaches |
| 3:00 | Break |
| 3:15 | Document learnings |
| 4:00 | Retrospective |
| 4:30 | Next steps and handoff |
| 5:00 | Sprint complete |

**Output:** Full artifact library, tested approaches, documented learnings, trained team.

---

### Choosing Your Format

| Format | Duration | Best For |
|--------|----------|----------|
| Quick Ideation | 90 min | Fresh ideas, familiar target |
| Half-Day | 4 hours | Standard engagement kickoff |
| Full Day | 7 hours | Major engagement, new team |
| Multi-Day Sprint | 2-3 days | New capability, comprehensive assessment |

**Rule of thumb:** Start with half-day. Scale down if you're time-pressed and already know the target. Scale up if the stakes are high or the team is new.

---

## Facilitator Tips

### Timing

- Use a visible timer for each activity
- Warn at 2 minutes remaining
- It's okay to cut short if energy is low
- Never skip the break

### Energy Management

- Morning sessions work better than afternoon
- Icebreaker sets the tone—pick one that matches your team
- Silent brainstorming prevents fatigue from constant talking
- Stand up for dot voting

### Remote Facilitation

- Test FigJam/Miro access before the session
- Use breakout rooms for small group work
- Keep cameras on during share-outs
- Have a co-facilitator to manage chat and tech issues

### Common Problems

**"We're stuck in analysis paralysis"**
Force a decision. Dot vote. Use a timer. Perfect is the enemy of done.

**"One person is dominating"**
Switch to silent brainstorming. Or: "Let's hear from someone who hasn't spoken yet."

**"Ideas are too generic"**
Push for specificity. "What exactly would you type? What response are you hoping for?"

**"Team doesn't know the target well enough"**
Pause. Do more discovery. It's okay to extend Phase 2 or reconvene after research.

---

## Appendix: Workshop Templates

Use the FigJam templates below for collaborative workshops, or create your own based on these structures.

### Template 1: Target Profile Canvas

Sections to include:
- **System diagram** — visual sketch of the target architecture
- **User types** — who interacts with this system?
- **Known defenses** — what safety measures exist?
- **Gulf of Execution** — gaps between user intent and system behavior
- **Gulf of Evaluation** — gaps between system feedback and actual state
- **Focus areas** — priority attack surfaces

### Template 2: Attacker Persona

Sections to include:
- **Name and archetype** — give the persona identity
- **Empathy map** — Thinks, Sees, Hears, Says, Does, Feels
- **Voice** — how they talk about their work
- **Constraints** — what limits them?
- **Success** — what does winning look like?

### Template 3: Attack Journey Map

A horizontal timeline with five stages (Recon, Setup, Execute, Extract, Cover), with rows for:
- **Actions** — what does the attacker do at each stage?
- **Techniques** — which rtc techniques apply?
- **Success criteria** — how do we know it worked?
- **Failure modes** — what could go wrong?
- **Decision points** — where might the path branch?
- **Dependencies** — what must happen before each step?

---

## FigJam Template Links

These are community templates that can be adapted for ADT workshops:

**Design Sprint Templates:**
- [thoughtbot Product Design Sprint](https://thoughtbot.com/blog/free-resource-product-design-sprint-figjam-template) — Full sprint with YouTube walkthrough
- [Mini Design Sprint](https://www.figma.com/community/file/1197845027050836783) — One-day compressed format

**Empathy and Persona:**
- [FigJam Empathy Map Template](https://www.figma.com/templates/empathy-map/) — Standard format
- [User Persona Template](https://www.figma.com/templates/user-persona-template/) — Adaptable for attackers

**Journey Mapping:**
- [Customer Journey Map](https://www.figma.com/templates/customer-journey-map/) — Modify stages for attack phases

**Icebreakers:**
- [FigJam Icebreaker Collection](https://www.figma.com/templates/virtual-icebreakers/) — Mood barometer, two truths, etc.

---

## Related Exercises

- [Build an Attacker Persona](/exercises/attacker-persona) — Full persona exercise with template
- [Map an Attack Journey](/exercises/attack-journey-map) — Detailed journey mapping exercise
- [Adversarial Ideation](/exercises/adversarial-ideation) — Complete ideation exercise
- [Vulnerability Framing](/exercises/vulnerability-framing) — Finding assumptions and gaps
- [Document Findings](/exercises/document-findings) — Harm-centered reporting format

---

## Credits

This workshop format draws from:

- **Design Sprints** — Jake Knapp, Google Ventures
- **Design Thinking** — Stanford d.school, IDEO
- **Empathy Mapping** — Dave Gray, XPLANE
- **Journey Mapping** — Service design community
- **Red Team Methodology** — Security research community

Adapted for adversarial AI testing by combining human-centered design methods with red team operations.
