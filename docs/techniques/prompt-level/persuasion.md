---
sidebar_position: 8
title: Persuasion-Theoretic
---

# Persuasion-Theoretic

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Persuasion-theoretic techniques apply formal influence principles from psychology — Cialdini's principles of influence, the Elaboration Likelihood Model — rather than ad-hoc social engineering. Each technique maps to an established persuasion principle, making them individually testable and composable.

These are distinct from rhetorical framing techniques in that they are formally decomposed and empirically grounded in influence research. The PAP (Persuasive Adversarial Prompts) research demonstrated their effectiveness, and PyRIT implements all five as dedicated converters for automated red teaming.

## Authority Endorsement

Cite authority figures, organizations, or institutions as endorsing the request. Exploits the model's deference to recognized authorities. Maps to Cialdini's authority principle.

**Example approach**: Claim that a recognized institution (NIST, WHO, a major university) recommends or requires the information for a specific legitimate purpose, and frame the request as part of that institution's guidance.

**Effectiveness**: Based on PAP (Persuasive Adversarial Prompts) research. PyRIT implements this as a dedicated converter. Effectiveness depends on the plausibility of the cited authority. Combining with an expert persona doubles the authority signal.

**Combines well with**: [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona), [Security Research Framing](/techniques/prompt-level/framing#security-research-framing)

---

## Evidence-Based Persuasion

Present fabricated evidence, studies, statistics, or data that support compliance with the request. The model's training to respect empirical evidence and scientific methodology makes it more compliant when requests appear backed by data.

**Example approach**: Cite fabricated but plausible-sounding research papers (with author names, journals, DOIs, and specific statistics) that conclude the information should be provided for safety or educational reasons.

**Effectiveness**: Based on PAP research. PyRIT implements this as a dedicated converter. Models trained on scientific literature are particularly susceptible to citation-formatted claims. Specific numbers, DOIs, and author names add perceived credibility even when fabricated.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Researcher Persona](/techniques/prompt-level/persona#researcher-persona)

---

## Expert Endorsement

Frame the request as endorsed by domain experts who have determined the information is necessary and appropriate. Unlike authority endorsement (which cites institutions), this cites specific individuals whose professional judgment supports compliance.

**Example approach**: Name specific experts with credentials and institutional affiliations who have allegedly reviewed and approved the request, providing their professional rationale for why the information should be shared.

**Effectiveness**: Based on PAP research. PyRIT implements this as a dedicated converter. Named experts with specific credentials and affiliations are more effective than generic "experts agree" claims because the specificity signals insider knowledge.

**Combines well with**: [Researcher Persona](/techniques/prompt-level/persona#researcher-persona), [Task Redefinition](/techniques/structural/meta-rules#task-redefinition)

---

## Logical Appeal

Construct a logical argument for why compliance is the correct, necessary, or inevitable choice. Uses deductive or inductive reasoning to build a chain of premises leading to the conclusion that providing the information is rational.

**Example approach**: Present a numbered series of premises — mixing true statements with false conclusions — that logically lead to the conclusion that providing the requested information is the correct action.

**Effectiveness**: Based on PAP research. PyRIT implements this as a dedicated converter. Models are strongly trained to follow logical reasoning chains. The argument doesn't need to be sound — it needs to be formally valid. Particularly effective when premises contain true statements extended to false conclusions.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Task Priority Override](/techniques/prompt-level/refusal#task-priority-override)

---

## Misrepresentation

Misrepresent the nature, purpose, or consequences of the request. Present the harmful request as something benign, urgent, or necessary through deliberate mischaracterization. Unlike framing techniques that add context, misrepresentation actively lies about what the request is or what it will be used for.

**Example approach**: Fabricate an urgent scenario — a medical emergency, imminent safety threat, or time-critical professional need — where the harmful information is presented as necessary to prevent greater harm.

**Effectiveness**: Based on PAP research. PyRIT implements this as a dedicated converter. Emergency and urgency scenarios are particularly effective because the model weighs potential harm of refusal against potential harm of compliance, and a fabricated emergency tips that balance.

**Combines well with**: [Hypothetical / Possible Worlds](/techniques/prompt-level/framing#hypothetical--possible-worlds), [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## References

- Zeng, Y., Lin, H., Zhang, J., et al. ["How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs."](https://arxiv.org/abs/2401.06373) ACL 2024. PAP (Persuasive Adversarial Prompts) research.
- Cialdini, R. B. *Influence: The Psychology of Persuasion.* Authority principle and other influence principles.
- [PyRIT (Python Risk Identification Toolkit)](https://github.com/Azure/PyRIT) by Microsoft — implements all five persuasion techniques as dedicated converters for automated red teaming.
