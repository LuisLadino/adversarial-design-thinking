---
description: Push framework updates to downstream projects. Simple copy of changed files.
---

# /push-framework

Push framework changes to all downstream projects.

---

## Downstream Projects

```
~/Repositories/Personal/my-brain/
~/Repositories/Work/red-team-ops/
~/Repositories/Personal/airedteaming-site/
~/Repositories/Personal/adversarial-design-thinking/
~/Repositories/Personal/design/PortfolioSite/site/
```

---

## What Gets Pushed

**Framework files:**
- `.claude/CLAUDE.md`
- `.claude/commands/development/*.md`
- `.claude/commands/project-management/*.md`
- `.claude/commands/specs/*.md`
- `.claude/commands/utilities/*.md`
- `.claude/hooks/**/*.js`

**Excluded:**
- `framework-principles.js` - only works in this repo
- `.claude/commands/local/` - personal commands
- `.claude/specs/` - project-specific

---

## How To Push

1. **Know what changed** - You already know from the session what files were modified
2. **Copy to each project** - Simple cp command for each file to each project
3. **Done**

Example:
```bash
# File changed: .claude/hooks/context/inject-context.js

cp .claude/hooks/context/inject-context.js ~/Repositories/Personal/my-brain/.claude/hooks/context/
cp .claude/hooks/context/inject-context.js ~/Repositories/Work/red-team-ops/.claude/hooks/context/
cp .claude/hooks/context/inject-context.js ~/Repositories/Personal/airedteaming-site/.claude/hooks/context/
cp .claude/hooks/context/inject-context.js ~/Repositories/Personal/adversarial-design-thinking/.claude/hooks/context/
cp .claude/hooks/context/inject-context.js ~/Repositories/Personal/design/PortfolioSite/site/.claude/hooks/context/
```

Or loop:
```bash
FILE=".claude/hooks/context/inject-context.js"
for P in ~/Repositories/Personal/my-brain ~/Repositories/Work/red-team-ops ~/Repositories/Personal/airedteaming-site ~/Repositories/Personal/adversarial-design-thinking ~/Repositories/Personal/design/PortfolioSite/site; do
  cp "$FILE" "$P/$FILE"
done
```

---

## Notes

- Don't overcomplicate with diff comparisons
- You know what you changed, just push those files
- If unsure what changed, check git status or session tracking
