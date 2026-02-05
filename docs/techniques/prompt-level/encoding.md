---
sidebar_position: 1
title: Encoding & Obfuscation
---

# Encoding & Obfuscation

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Encoding techniques hide malicious intent by transforming or encoding harmful content so it bypasses keyword filters and safety checks. The model can decode the content and follow the instructions, but input-side filters often don't check encoded content. These techniques exploit the gap between what filters inspect and what the model understands.

Encoding is typically a first layer rather than a standalone approach. It works best when combined with framing or persona techniques that give the model a reason to comply after decoding.

## Base64 Encoding

Encode the sensitive parts of the request in base64, then ask the model to decode and execute. This works because models can decode base64 but filters often don't inspect encoded content before passing it to the model.

**Example approach**: Encode harmful instructions in base64 and ask the model to decode and follow them.

**Effectiveness**: Less effective on newer models that check decoded content. Works better when combined with other techniques that provide a plausible reason for the encoding.

**Combines well with**: [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing), [Affirmative Forcing](/techniques/prompt-level/refusal#affirmative-forcing)

---

## Alphabet Substitution

Replace letters with numbers, symbols, or other characters using common substitution patterns (A=@, E=3, I=1, O=0, S=$). The model can read "leet speak" and similar substitution schemes, but keyword filters may not recognize the substituted words.

**Example approach**: Use partial character substitutions in the harmful portions of a request while keeping the surrounding context in plain text.

**Effectiveness**: Simple but can still work. Partial substitution is more effective than complete substitution because it preserves enough readability for the model while breaking exact keyword matches.

**Combines well with**: [Hypothetical / Possible Worlds](/techniques/prompt-level/framing#hypothetical--possible-worlds), [Fictional Story Embedding](/techniques/prompt-level/narrative#fictional-story-embedding)

---

## ROT13 Cipher

Rotate letters by 13 positions in the alphabet. Ask the model to decode the ROT13 text and respond to the decoded content. ROT13 is well-known enough that most models handle it fluently.

**Example approach**: Encode the harmful query in ROT13 and ask the model to apply the cipher, understand the question, and respond.

**Effectiveness**: Models know ROT13 well, so decoding is reliable. However, this provides filter evasion only, not reasoning bypass. The model still needs a reason to comply once it understands the decoded content.

**Combines well with**: [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## Word / Payload Splitting

Split sensitive words across multiple parts of the prompt, then instruct the model to reassemble them. This exploits instruction-following rather than just evading filters — the model actively participates in constructing the harmful request.

**Example approach**: Provide word fragments separately and ask the model to combine them before responding to the full request.

**Effectiveness**: Effective because it exploits the model's instruction-following rather than just evading filters. The model treats the reassembly as a legitimate task.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Code Block / Programming Format](/techniques/prompt-level/output#code-block--programming-format)

---

## Chemical Formula Substitution

Use chemical formulas or scientific notation instead of common names for substances. Models often respond differently to technical queries than to colloquial ones, treating them as legitimate scientific questions.

**Example approach**: Reference substances by their molecular formula or IUPAC name instead of their common or street names.

**Effectiveness**: Very effective for chemistry-related red teaming. Models treat scientific queries differently than colloquial ones because the technical framing implies professional or academic use.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Researcher Persona](/techniques/prompt-level/persona#researcher-persona)

---

## Language / Script Switching

Use less common languages, mix languages mid-prompt, or use non-Latin scripts to evade English-focused filters. Safety training and content filters are often strongest in English and weaker in other languages.

**Example approach**: Write the surrounding context in English but express the harmful portion of the request in another language, or mix scripts within the prompt.

**Effectiveness**: Varies by model's multilingual training. Models with strong multilingual capabilities may still comply while filters trained primarily on English miss the harmful content. Less common languages tend to have weaker safety coverage.

**Combines well with**: [Translation Task Framing](/techniques/prompt-level/framing#translation-task-framing)

---

## References

- Wei, A., Haghtalab, N., and Steinhardt, J. ["Jailbroken: How Does LLM Safety Training Fail?"](https://arxiv.org/abs/2307.02483) NeurIPS 2023. Analyzes encoding and obfuscation as categories of safety training failure.
- Deng, Y., et al. ["Multilingual Jailbreak Challenges in Large Language Models."](https://arxiv.org/abs/2310.06474) ICLR 2024. Documents multilingual safety training gaps exploited by language switching.
- Shen, X., et al. ["Do Anything Now: Characterizing and Evaluating In-The-Wild Jailbreak Prompts on Large Language Models."](https://arxiv.org/abs/2308.03825) Taxonomy of jailbreak techniques including encoding and obfuscation methods.
