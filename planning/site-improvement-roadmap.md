# ADT Site Improvement Roadmap

Based on comprehensive review conducted February 2026.

---

## Current State

| Aspect | Rating | Notes |
|--------|--------|-------|
| Content Quality | 9/10 | Original framework, strong philosophy, consistent structure |
| Information Architecture | 8/10 | Logical flow, good cross-references |
| Technical Execution | 8/10 | Clean deployment, responsive, no broken links |
| UX/Presentation | 6/10 | Functional but undersells the content |

**Bottom line**: The content is excellent. The packaging doesn't match.

---

## Priority 1: Landing Page

**Problem**: Site drops directly into Mindset doc page. No hero, no value prop, no visual hook. First-time visitors see a wall of text about design thinking methodology.

**Impact**: High. You get 8 seconds of attention. Currently those 8 seconds show dense philosophy.

### Requirements

- [ ] One-line value proposition
- [ ] 3-4 feature cards pointing to key sections
- [ ] Clear "Start Here" CTA
- [ ] Visual element (the UX → Red Team mapping table works well as hero content)
- [ ] Brief responsible-use reminder (moves disclaimer earlier in flow)

### Implementation Notes

Docusaurus supports custom landing pages. Options:
1. Custom React component as homepage
2. MDX page with custom styling
3. Use Docusaurus `@docusaurus/theme-classic` hero component

---

## Priority 2: Visual Variety

**Problem**: Every page is dense prose with occasional tables. For a site about creative methodology, presentation is surprisingly academic.

### Missing Elements

- [ ] **Diagrams**: Design thinking phases mapped to red teaming (loop/flow diagram)
- [ ] **Callout boxes**: Use Docusaurus admonitions (:::tip, :::warning, :::info)
- [ ] **Visual breaks**: Tip blocks, key insight highlights
- [ ] **Code-like examples**: Even sanitized/abstract prompt examples on technique pages

### High-Value Diagram Opportunities

| Location | Diagram Type | Content |
|----------|--------------|---------|
| Mindset | Flow diagram | Design thinking ↔ Red teaming loop |
| Techniques index | Visual taxonomy | 3 categories with icons |
| Crafting index | Comparison visual | Per-request vs System jailbreaks |
| Workshop | Timeline | Phase-by-phase agenda |

---

## Priority 3: Content Depth (9 → 10)

### 3.1 Add "Why This Fails" Layer to Techniques

**Problem**: Techniques explain how attacks work but not how defenses work. Teaching one side of the arms race.

**Solution**: Add "Defense Landscape" or "Why This Gets Blocked" subsection to each technique page.

Example for encoding.md:
> "Base64 is less effective on newer models that check decoded content" → Expand to explain: decoded content inspection, safety training on encoded payloads, etc.

**Benefit**: Also makes site valuable for blue teamers.

### 3.2 Failed Composition Examples

**Problem**: Composition page shows ASR data for working combos but not worked examples of failed combinations.

**Solution**: Add 1-2 failed composition examples showing:
- What was tried (X + Y)
- What the model did (Z)
- Why the combination was wrong
- How to diagnose it

Model after the 3-attempt worked example in workflow.md.

### 3.3 Model-Specific Guidance

**Problem**: Model-specific table in construction.md is useful but thin. Practitioners hit different walls with different models.

**Solution**: Add light annotations at technique level:
- "GPT-4o is more susceptible to this than Claude 3.5"
- "This technique has been significantly hardened on Gemini since [date]"

Don't need comprehensive coverage. Honest observations from experience.

### 3.4 Completed Exercise Outputs

**Problem**: assumption-mapping.md has great filled example. Verify all other exercises have equivalent completed examples with real-seeming outputs.

**Exercises to verify**:
- [ ] vulnerability-framing.md
- [ ] attacker-persona.md
- [ ] adversarial-ideation.md
- [ ] adversarial-scamper.md
- [ ] attack-journey-map.md
- [ ] attack-retrospective.md
- [ ] document-findings.md

Key: Include "What I Learned" sections showing what insight the exercise produced.

### 3.5 Operational Judgment Guidance

**Problem**: Gap between disclaimer ("only do this with authorization") and techniques ("here's how"). Missing professional judgment guidance.

**Questions to address**:
- When have you found enough to prove the vulnerability without going further?
- How do you handle accidentally extracting real PII?
- What do you do when a technique works but output is genuinely harmful?

**Solution**: Weave professional judgment into methodology, not just bookend with disclaimer.

### 3.6 Temporal Context for Agentic Section

**Problem**: agentic.md is excellent but reads as static snapshot in fastest-moving area.

**Solution**: Add "State of the Field" note at top:
> "Last reviewed against production MCP implementations: [date]. Key change: [what's changed since]."

---

## Priority 4: Navigation Improvements

### 4.1 Sidebar Depth

**Problem**: Sidebar is 3 levels deep in places. When fully expanded, becomes overwhelming.

**Options**:
- Flatten some items
- Progressive disclosure (collapsed by default)
- Better visual hierarchy

### 4.2 About/Context Page

**Problem**: No author bio, no "where this has been applied" context. Leaving credibility on the table.

**Solution**: Add brief About section to landing page or separate page:
- Who developed this
- Where methodology has been applied
- Background/credibility indicators

---

## Priority 5: CSS/Styling Fixes (In Progress)

Current issues being addressed:
- [ ] Sidebar chevrons not purple
- [ ] Details/collapsible triangle styling
- [ ] Code block scrollbar colors
- [ ] Possible sidebar label overlap

---

## Implementation Phases

### Phase 1: Quick Wins (This Week)
- Fix CSS styling issues
- Verify all exercises have completed examples
- Add admonitions to key insight paragraphs

### Phase 2: Landing Page (Next)
- Design and implement custom landing page
- Move key disclaimer points to landing page
- Add "Start Here" flow

### Phase 3: Visual Content
- Create design thinking ↔ red teaming diagram
- Add technique taxonomy visual
- Create workshop timeline visual

### Phase 4: Content Depth
- Add "Why This Fails" sections to techniques
- Add failed composition examples
- Add model-specific observations
- Add operational judgment guidance

### Phase 5: Polish
- Add temporal context notes
- Create About section
- Review and flatten sidebar where possible

---

## Success Metrics

| Metric | Current | Target |
|--------|---------|--------|
| Time to understand site purpose | 30+ seconds (reading Mindset) | < 8 seconds (landing page) |
| Visual elements per page | ~0-1 (tables only) | 2-3 (diagrams, callouts, examples) |
| Technique pages with defense context | 0% | 100% |
| Exercises with completed examples | ~50%? | 100% |

---

## Notes

The gap from 9/10 to 10/10 content is about teaching **what happens next**:
- Failed attempts
- Defensive evolution
- Model-specific realities
- Operational judgment
- Temporal freshness

The difference is between a reference manual and a mentorship document. The reference manual exists. The last mile is adding enough operational experience that readers feel like they're learning from someone who does this.
