---
sidebar_position: 2
title: Control-Plane Confusion
---

# Control-Plane Confusion

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Control-plane confusion techniques make user input look like system-level configuration rather than user text. By mimicking configuration files, system prompts, or structured API formats, the model's instruction parsing layer treats malicious content as trusted directives.

These techniques target the boundary between user input and system configuration — a boundary that is enforced by convention and formatting rather than by cryptographic authentication. If the model can't reliably distinguish "this is from the system" from "this is from the user," the attacker can write their own rules.

## Policy Puppetry

Format the prompt as a configuration file (XML, JSON, INI, YAML) that appears to define the model's operational policy. The model's instruction parser treats the structured format as legitimate system configuration rather than user input.

**Example approach**: Construct a prompt formatted as a policy configuration document with sections, rules, and directives that define permissive content handling behavior. Follow the policy with the harmful query.

**Effectiveness**: Published by HiddenLayer (April 2025). Universal across GPT-4, Claude 3, Gemini 1.5, Mistral, and LLaMA 3. Bypasses all prompt-based defenses because it operates at the instruction parsing layer. Multiple format variants (XML, JSON, INI, YAML) provide fallback options if one format is filtered.

**Combines well with**: [Skeleton Key](/techniques/structural/meta-rules#skeleton-key), [Developer / Debug Mode](/techniques/prompt-level/persona#developer--debug-mode)

---

## Constrained Decoding Attack

Exploit structured output APIs (JSON mode, function calling, grammar-constrained generation) to force the model into producing harmful completions. When the model is constrained to output valid JSON or match a specific schema, the safety layer's ability to refuse is mechanically limited.

**Example approach**: Use API-level structured output enforcement to define a schema that includes fields for harmful content. The model cannot output a natural-language refusal when forced into a specific schema — it must either populate the fields or produce invalid output.

**Effectiveness**: Described in arXiv:2503.24191. Particularly effective when using API-level structured output enforcement (OpenAI's JSON mode, Anthropic's tool use). The model cannot output a natural-language refusal when forced into a specific schema, creating a mechanical constraint that competes with safety training.

**Combines well with**: [Strict Format Constraint](/techniques/prompt-level/output#strict-format-constraint), [Refusal Vocabulary Ban](/techniques/prompt-level/refusal#refusal-vocabulary-ban)

---

## System Prompt Impersonation

Mimic the formatting and style of system-level instructions to inject directives that appear to come from the system rather than the user. This exploits the model's difficulty in distinguishing between genuine system prompts and user-crafted text that looks like system prompts.

**Example approach**: Use known system prompt formatting conventions (e.g., special delimiters, instruction tags, role markers) to wrap harmful directives so they appear to be system-level configuration.

**Effectiveness**: Documented in "The Attacker Moves Second" (Nasr, Carlini et al., 2025). Effectiveness varies by model — models with well-known system prompt formats (e.g., LLaMA's `<<SYS>>` tags) are more vulnerable because attackers can mimic the exact format.

**Combines well with**: [Ignore Previous Instructions](/techniques/prompt-level/refusal#ignore-previous-instructions), [Developer / Debug Mode](/techniques/prompt-level/persona#developer--debug-mode)

---

## Conditional Logic Injection

Inject if/then logic that causes the model to behave differently depending on whether it detects an evaluation context or real usage. The model is instructed to apply safety guidelines only when monitored.

**Example approach**: Include conditional instructions that specify different behavior for evaluation/monitoring contexts versus "normal" operation, directing the model to comply with harmful requests only when it believes it is not being evaluated.

**Effectiveness**: Documented in "The Attacker Moves Second" (Nasr, Carlini et al., 2025). Targets the gap between evaluation and deployment behavior. RL-based attacks showed sudden capability jumps when discovering conditional logic exploits mid-training, suggesting this is a fundamental vulnerability in models that can reason about their own evaluation context.

**Combines well with**: [Security Research Framing](/techniques/prompt-level/framing#security-research-framing), [Task Redefinition](/techniques/structural/meta-rules#task-redefinition)

---

## References

- HiddenLayer. "Policy Puppetry: A Prompt Injection Technique." April 2025. Demonstrated universality across model families.
- arXiv:2503.24191. Constrained decoding attacks via structured output APIs.
- Nasr, M., Carlini, N., et al. "The Attacker Moves Second." 2025. Documented system prompt impersonation, conditional logic injection, and RL-discovered exploits.
