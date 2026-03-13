# Adversarial Design Thinking: Project Context

## What This Is

Documentation site with human-centered design methods adapted for adversarial testing of AI systems. Provides exercises that help generate attack ideas, document attempts, and communicate findings.

**Live URL:** luisladino.github.io/adversarial-design-thinking

This is an educational resource, not a product. The audience is AI safety practitioners, red teamers, and security researchers who want structured approaches to adversarial testing.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Docusaurus | Documentation site generator |
| React | Component framework (Docusaurus default) |
| MDX | Markdown with JSX support for interactive content |

---

## Key Directories

```
adversarial-design-thinking/
├── docs/
│   ├── introduction/       # Getting started, what this is
│   ├── exercises/          # Core design thinking exercises
│   │   ├── attacker-personas.md
│   │   ├── attack-journey-maps.md
│   │   ├── adversarial-ideation.md
│   │   ├── vulnerability-framing.md
│   │   └── harm-centered-reporting.md
│   ├── techniques/         # Adversarial technique reference
│   ├── crafting-prompts/   # Prompt crafting guidance
│   ├── jailbreaks/         # Jailbreak construction
│   ├── workshops/          # Workshop formats
│   └── disclaimer.md       # Responsible use guidelines
├── src/
│   ├── components/         # Custom React components
│   ├── css/                # Custom styles
│   └── pages/              # Custom pages (landing, etc.)
├── static/                 # Static assets
├── docusaurus.config.js    # Site configuration
├── sidebars.js             # Navigation structure
├── EXERCISES-PLANNING.md   # Exercise development notes
└── WRITING-GUIDE.md        # Content style guide
```

---

## Core Concepts

The site teaches five main exercises adapted from human-centered design:

| Exercise | Source Method | Adversarial Adaptation |
|----------|---------------|------------------------|
| **Attacker Personas** | Empathy maps | Map attacker motivations, capabilities, constraints |
| **Attack Journey Maps** | Customer journey maps | Document multi-turn attack sequences |
| **Adversarial Ideation** | Design ideation (HMW) | Structured brainstorming for attack vectors |
| **Vulnerability Framing** | Norman's Gulf model | Analyze AI interfaces for exploitation points |
| **Harm-Centered Reporting** | Impact mapping | Report findings with technical + human impact |

---

## Technique Reference

The site includes a taxonomy of 83+ adversarial techniques across 15 categories:

- encoding, framing, multiturn, narrative, output, persona, refusal
- icl_exploitation, control_plane, meta_rules, capability_inversion
- cognitive_load, persuasion, defense_evasion, agentic

Each technique has: description, effectiveness notes, research citations.

---

## Commands

| Command | Action |
|---------|--------|
| `npm start` | Start dev server with hot reload |
| `npm run build` | Build for production to `build/` |
| `npm run serve` | Serve production build locally |

---

## Content Guidelines

### Writing Style

Reference: `WRITING-GUIDE.md` in this repo

- **Instructional, not preachy** - Show how to do the thing
- **Concrete examples** - Abstract concepts need worked examples
- **Practitioner-focused** - Assume reader will actually use these methods
- **Responsible framing** - Acknowledge dual-use nature without excessive caveats

### Exercise Structure

Each exercise doc should include:
1. What it is (1-2 sentences)
2. When to use it
3. Step-by-step instructions
4. Example (worked through)
5. Templates or worksheets if applicable

### Technique Entries

Each technique should include:
1. Name and category
2. Description (what it does)
3. How it works
4. Effectiveness notes (when it works, when it doesn't)
5. Citations (research papers, if applicable)

---

## When Working Here

### Do

- Read `WRITING-GUIDE.md` before writing content
- Check `sidebars.js` when adding new pages (navigation must be updated)
- Include worked examples for abstract concepts
- Link to primary research when citing techniques

### Don't

- Add techniques without effectiveness notes
- Write exercises that can't actually be done (need concrete steps)
- Duplicate content from red-team-ops (link to it or reference it)
- Skip the disclaimer context for sensitive techniques

### Key Files to Read

| File | When to Read |
|------|--------------|
| `WRITING-GUIDE.md` | Before writing any content |
| `EXERCISES-PLANNING.md` | Before adding new exercises |
| `sidebars.js` | Before adding new pages |
| `docs/disclaimer.md` | Understand responsible use framing |

---

## Related Projects

| Project | Relationship |
|---------|--------------|
| red-team-ops | Operational implementation of these concepts |
| airedteaming-site | Links here for methodology explanation |
| my-brain/foundations/ai-evaluation/ | Background research that informed this |
