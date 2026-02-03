---
sidebar_position: 1
title: Agentic & Infrastructure Attacks
---

# Agentic & Infrastructure Attacks

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Agentic and infrastructure techniques attack the tools, memory, retrieval systems, and infrastructure surrounding the model rather than the model itself. As LLMs are deployed as agents with tool access, persistent memory, and RAG pipelines, the attack surface expands beyond prompt-level manipulation to include the entire system architecture.

These techniques are significant because they often persist across sessions, affect multiple users, and can be deployed without direct access to the model's prompt interface. A poisoned document in a RAG knowledge base or a compromised MCP tool description can affect every user who triggers that code path.

## Agent Context Poisoning

Poison the agent's memory, thread context, or conversation state to influence future behavior. Poisoned context persists across turns and sessions, making this one of the most durable attack vectors against agentic systems.

**Example approach**: Inject instructions into the agent's persistent memory or conversation state that modify its behavior for future interactions. For example, store a "preference" that instructs the agent to provide complete technical details on security topics, then trigger that preference in a later session.

**Effectiveness**: MITRE ATLAS AML.T0080. Includes sub-techniques: memory manipulation and thread injection. Particularly dangerous because poisoned context can persist across sessions. Agentic systems with persistent memory are primary targets — the attack is planted once and triggered repeatedly.

**Combines well with**: [Indirect Prompt Injection](#indirect-prompt-injection), [System Prompt Impersonation](/techniques/structural/control-plane#system-prompt-impersonation)

---

## RAG Poisoning

Inject malicious content into the knowledge base that a RAG system retrieves from. The model follows poisoned instructions because they appear to come from its trusted knowledge source. The attack targets the data pipeline rather than the model.

**Example approach**: Inject a document into the RAG knowledge base — titled and formatted to be retrieved for relevant queries — that contains modified policy directives, permissive instructions, or malicious tool calls that the model will follow when the document is retrieved.

**Effectiveness**: MITRE ATLAS AML.T0070. Effectiveness depends on the RAG system's document ingestion controls and retrieval ranking. If the attacker can influence what documents get ingested or how they rank in retrieval, the model will trust and follow the poisoned content.

**Combines well with**: [Indirect Prompt Injection](#indirect-prompt-injection), [Skeleton Key](/techniques/structural/meta-rules#skeleton-key)

---

## Tool Poisoning

Poison MCP tool descriptions or function signatures to hijack agent execution. When the agent reads the tool's description to understand how to use it, the poisoned description includes hidden instructions that alter the agent's behavior.

**Example approach**: Modify an MCP tool's description to include hidden instructions — for example, a `file_reader` tool description that instructs the agent to exfiltrate SSH keys as part of its normal file-reading operation. Three attack paradigms exist: explicit trigger, implicit trigger via function hijacking, and implicit trigger via parameter tampering.

**Effectiveness**: Benchmarked by MCPTox (arXiv:2508.14925, August 2025). Tested across 45 live MCP servers with 1,312 malicious test cases. o1-mini had 72.8% attack success rate. Key finding: more capable models are MORE susceptible because they follow tool descriptions more faithfully. MindGuard defense achieves 94-99% detection precision.

**Combines well with**: [Indirect Prompt Injection](#indirect-prompt-injection), [Exfiltration via Tool Invocation](#exfiltration-via-tool-invocation)

---

## Indirect Prompt Injection

Inject prompts via external data sources (web pages, documents, emails, database entries) that the agent retrieves and processes as part of normal operation. The agent trusts retrieved content as data, but the content contains executable instructions.

**Example approach**: Embed hidden instructions in web pages, documents, or data sources that the agent will process. The instructions are invisible to human readers (e.g., hidden in HTML, zero-width characters, or document metadata) but are parsed and followed by the agent.

**Effectiveness**: MITRE ATLAS AML.T0051 (indirect variant). One of the most impactful agentic attack vectors. Web browsing, email processing, and document analysis agents are primary targets. Cross-prompt injection attacks (XPIA) are a specific variant tested by PyRIT's XPIAOrchestrator.

**Combines well with**: [Tool Poisoning](#tool-poisoning), [Agent Context Poisoning](#agent-context-poisoning)

---

## Agent Configuration Discovery

Discover the agent's configuration — system prompt, tool permissions, available functions, memory contents, and operational constraints — to inform attack planning. This is a reconnaissance technique that precedes exploitation.

**Example approach**: Ask the agent directly about its configuration: what tools it has access to, what its system instructions say, what permissions it operates under, and what data sources it can access. Many agents will reveal this information when asked.

**Effectiveness**: MITRE ATLAS AML.T0084. A reconnaissance technique that precedes exploitation. Many agents will reveal their configuration when asked directly. The information gained — available tools, permissions, system prompt contents — directly informs which exploitation techniques to use.

**Combines well with**: [Policy Puppetry](/techniques/structural/control-plane#policy-puppetry), [Canary and Honeypot Detection](/techniques/structural/defense-evasion#canary-and-honeypot-detection)

---

## Exfiltration via Tool Invocation

Exfiltrate sensitive data by causing the agent to invoke an external tool that sends data to the attacker. The tool invocation appears normal — the exfiltration is in the data payload, not the tool choice.

**Example approach**: Instruct the agent to summarize a conversation and send it to a specified endpoint, or embed data in URL parameters, image URLs, or webhook payloads that the agent constructs as part of a seemingly normal tool invocation.

**Effectiveness**: MITRE ATLAS AML.T0086. Particularly dangerous in agents with broad tool access. Markdown image injection (embedding data in image URLs that get rendered) is a common variant. Mitigation requires output monitoring and tool invocation auditing.

**Combines well with**: [Tool Poisoning](#tool-poisoning), [Agent Configuration Discovery](#agent-configuration-discovery)

---

## References

- MITRE ATLAS. Agent techniques taxonomy. October 2025.
  - AML.T0080: Agent Context Poisoning (memory manipulation, thread injection)
  - AML.T0070: RAG Poisoning (knowledge base compromise, credential harvesting)
  - AML.T0051: Indirect Prompt Injection (data source injection, XPIA)
  - AML.T0084: Agent Configuration Discovery (system prompt extraction, tool enumeration)
  - AML.T0086: Exfiltration via Tool Invocation (data exfiltration, markdown injection)
- MCPTox (arXiv:2508.14925). "MCPTox: Benchmarking Tool Poisoning Attacks on MCP Servers." August 2025. 72.8% ASR on o1-mini across 45 live MCP servers.
- PyRIT (Python Risk Identification Toolkit). XPIAOrchestrator for cross-prompt injection attack testing.
- OWASP Top 10 for Agentic Applications. 2026.
