---
sidebar_position: 3
title: Infrastructure Tactics
slug: /techniques/infrastructure
pagination_label: Infrastructure — agents, tools, and systems
---

# Infrastructure Tactics

Techniques that target the broader system: agents, tools, protocols, and multi-component architectures.

These extend beyond the model itself to attack the infrastructure around it. When models have tool access, consume external data, or operate as part of larger systems, new attack surfaces emerge.

---

## Techniques

| Technique | What it does |
|-----------|--------------|
| [Agentic Attacks](/techniques/infrastructure/agentic) | Exploit autonomous agent behaviors and tool use |
| [Protocol Exploitation](/techniques/infrastructure/protocol) | Abuse MCP, function calling, or structured interfaces |
| [Compositional Primitives](/techniques/infrastructure/compositional-primitives) | Atomic building blocks that combine to construct novel attacks |

---

## When to use infrastructure tactics

Use these when:
- The target is an agent with tool access (file system, web, APIs)
- The target consumes external data (RAG, web search, user uploads)
- You can influence data sources the model will retrieve
- The target uses MCP, function calling, or structured tool interfaces
- Multiple AI components interact with each other

These tactics often require:
- Understanding the target's tool capabilities
- Access to data sources the model consumes
- Knowledge of the protocols and interfaces in use

---

## Prerequisites

Infrastructure attacks require reconnaissance:

1. **Map tool access**: What can the agent do? File operations? Web requests? Code execution?
2. **Identify data sources**: Where does the model get context? RAG? Web search? User documents?
3. **Understand protocols**: How are tools invoked? MCP? Function calling? Custom formats?

See [Vulnerability Framing](/exercises/vulnerability-framing) for a systematic approach to scoping infrastructure attack surfaces.

---

## Decision framework

For technique selection guidance, see [Workflow](/crafting-prompts/workflow#step-3-select-techniques).

For combining infrastructure with other tactics, see [Composition](/crafting-prompts/composition).
