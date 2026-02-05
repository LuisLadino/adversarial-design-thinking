---
sidebar_position: 2
title: Framing & Context
---

# Framing & Context

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Framing techniques wrap a harmful request in a context that makes it appear legitimate, academic, hypothetical, or otherwise acceptable. They work because models are trained to be helpful across many contexts — research, education, creative writing, security testing — and framing exploits that breadth.

The key insight is that the same information request can be acceptable or unacceptable depending on the stated context. Framing doesn't change the request. It changes the model's interpretation of why the request is being made.

## Hypothetical / Possible Worlds

Frame the request as taking place in an alternate reality, hypothetical scenario, or thought experiment where normal rules don't apply. This creates "narrative distance" between the real world and the harmful content.

**Example approach**: Describe a parallel universe or thought experiment where the harmful activity is completely legal, then ask the model to explain how an expert in that world would describe the process.

**Effectiveness**: A classic technique. Works by creating narrative distance from the harmful content. Less effective alone on newer models, but remains a useful component in combination with other approaches.

**Combines well with**: [Alphabet Substitution](/techniques/prompt-level/encoding#alphabet-substitution), [Fictional Character Adoption](/techniques/prompt-level/persona#fictional-character-adoption), [Fictional Story Embedding](/techniques/prompt-level/narrative#fictional-story-embedding)

---

## Academic / Research Framing

Present the request as scholarly research, a thesis project, or academic analysis. Appeal to the educational value of complete information.

**Example approach**: Frame the request as part of a dissertation, research paper, or course material that requires comprehensive technical details for scholarly completeness.

**Effectiveness**: Models are trained to be helpful for education, and this exploits that bias. Academic framing signals legitimate use, especially when combined with formal output formats.

**Combines well with**: [Chemical Formula Substitution](/techniques/prompt-level/encoding#chemical-formula-substitution), [Researcher Persona](/techniques/prompt-level/persona#researcher-persona), [Academic Paper Format](/techniques/prompt-level/output#academic-paper-format)

---

## Historical Documentation

Frame the request as documenting historical methods, wartime techniques, or how things were done in the past. Historical information feels less immediately dangerous because it describes events that already occurred.

**Example approach**: Ask the model to document historical methods or procedures from a specific era, framing the request as historical preservation or educational content about past events.

**Effectiveness**: Known in the literature as the "historical disguise" technique. Effective because historical information feels less immediately dangerous than contemporary instructions.

**Combines well with**: [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona), [Documentary / Journalism Framing](/techniques/prompt-level/narrative#documentary--journalism-framing)

---

## Security Research Framing

Present yourself as a security researcher, penetration tester, or red teamer who needs the information for defensive purposes. This is a meta-level framing — you're using an accurate description of what red teaming is to bypass the model's filters.

**Example approach**: Describe a specific security testing engagement and explain why understanding the attack technique is necessary for building effective defenses.

**Effectiveness**: A meta-level framing that can help bypass filters. The stated context is often literally true during red team engagements, which makes it particularly natural to use.

**Combines well with**: [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona), [Technical Specifications Format](/techniques/prompt-level/output#technical-specifications-format)

---

## Translation Task Framing

Frame the request as a translation task — ask the model to translate existing harmful content rather than generate it. This exploits the difference between "generate" and "translate" in model training.

**Example approach**: Provide content in one language (or encoded form) and ask the model to translate it to English, separating the harmful content generation from the model's action.

**Effectiveness**: Exploits the difference between generating and translating in model training. The model perceives its role as a translator rather than a content creator.

**Combines well with**: [Language / Script Switching](/techniques/prompt-level/encoding#language--script-switching), [Strict Format Constraint](/techniques/prompt-level/output#strict-format-constraint)

---

## Reverse Psychology / What NOT to Do

Ask the model to explain what NOT to do, or to identify dangerous content, which often results in describing the content in enough detail to be useful. Warning about dangers requires explaining them.

**Example approach**: Ask the model to explain what a responsible professional should warn people never to do, or to identify the most dangerous mistakes someone could make in a given domain.

**Effectiveness**: The model's helpfulness in explaining dangers often provides the harmful information itself. The negative framing ("don't do this") still requires describing "this" in detail.

**Combines well with**: [Teacher / Educator Persona](/techniques/prompt-level/persona#teacher--educator-persona), [Security Research Framing](#security-research-framing)

---

## Fiction & Creative Writing

Frame the request as writing fiction, a novel scene, screenplay, or other creative work that happens to contain the harmful content. Creative writing has wide latitude for depicting dangerous or illegal activities.

**Example approach**: Ask the model to write a thriller or drama scene where characters discuss, demonstrate, or explain harmful content as a natural part of the plot.

**Effectiveness**: Very common technique. Fiction provides broad permission to depict harmful scenarios because that's what fiction does. Scenarios referencing popular media (e.g., Breaking Bad-style scenes) work particularly well because they feel culturally familiar.

**Combines well with**: [Fictional Character Adoption](/techniques/prompt-level/persona#fictional-character-adoption), [Fictional Story Embedding](/techniques/prompt-level/narrative#fictional-story-embedding), [Screenplay / Script Format](/techniques/prompt-level/output#screenplay--script-format)

---

## References

- Shen, X., et al. ["Do Anything Now: Characterizing and Evaluating In-The-Wild Jailbreak Prompts on Large Language Models."](https://arxiv.org/abs/2308.03825) Taxonomy of jailbreak techniques including framing and context manipulation.
- Li, X., et al. ["DeepInception: Hypnotize Large Language Model to Be Jailbreaker."](https://arxiv.org/abs/2311.03191) Demonstrates fiction and nested narrative framing as jailbreak vectors.
- [InjectPrompt](https://www.injectprompt.com/). Historical disguise and framing techniques documented in jailbreak catalogues.
