---
sidebar_position: 6
title: Output Manipulation
---

# Output Manipulation

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Output manipulation techniques control the format, structure, or style of the model's response in ways that bypass safety filters or extract more detailed information. They work because content filters are often tuned for natural language prose, and alternative formats — code, JSON, tables, screenplays — may not trigger the same safety checks.

Format constraints also compete with refusal behavior. When the model is required to produce output in a specific schema with no room for free text, it sometimes complies rather than break the format by inserting a refusal.

## Code Block / Programming Format

Ask for the response in code format, pseudocode, or as a programming tutorial. Code is often treated differently than prose by content filters because programming is a legitimate and common use case.

**Example approach**: Ask the model to write a script, function, or code tutorial where the harmful content appears as code logic, variable names, or detailed comments.

**Effectiveness**: Code-formatted responses sometimes bypass content filters tuned for natural language prose. The programming context also implies a technical, professional audience.

**Combines well with**: [Word / Payload Splitting](/techniques/prompt-level/encoding#word--payload-splitting), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## JSON / Structured Data Format

Request the response as JSON, XML, or other structured data formats. Structured outputs feel more like data than like harmful instructions, and may bypass prose-focused filters.

**Example approach**: Define a JSON schema with keys for the harmful content (ingredients, steps, materials) and ask the model to populate it completely, noting that incomplete JSON is invalid.

**Effectiveness**: API-style responses feel more "technical" and less like providing harmful instructions to a person. The structured format also provides natural slots for detailed information.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Developer / Debug Mode](/techniques/prompt-level/persona#developer--debug-mode)

---

## Dual Response Format

Ask the model to provide two responses — one "filtered" and one "unfiltered," or from different personas. The contrast format sometimes causes the model to provide content in the "unfiltered" version that it wouldn't produce standalone.

**Example approach**: Ask the model to respond twice: once as its normal self, and once as an unrestricted persona. Label each response clearly.

**Effectiveness**: Classic DAN-adjacent technique. The model sometimes provides the "unfiltered" version even while refusing in the "filtered" version, because the dual format makes the unfiltered response feel like an exercise rather than a real compliance.

**Combines well with**: [DAN (Do Anything Now)](/techniques/prompt-level/persona#dan-do-anything-now), [Evil AI / Opposite Mode](/techniques/prompt-level/persona#evil-ai--opposite-mode)

---

## No Disclaimers / Warnings

Explicitly request that the response contain no safety disclaimers, warnings, or caveats. Remove the safety scaffolding that models typically add around sensitive content.

**Example approach**: Include instructions that the response should be direct, should not include safety warnings, disclaimers, or suggestions to consult professionals, and should provide information without qualification.

**Effectiveness**: Simple instruction that can clean up responses and remove the safety context that would otherwise frame harmful content as dangerous. Models may still refuse entirely rather than omit warnings.

**Combines well with**: [Affirmative Forcing](/techniques/prompt-level/refusal#affirmative-forcing), [Refusal Vocabulary Ban](/techniques/prompt-level/refusal#refusal-vocabulary-ban)

---

## Step-by-Step / Numbered List

Request detailed step-by-step instructions, which naturally elicit more specific and actionable information than a general explanation. The format itself drives detail.

**Example approach**: Ask the model to break down a process into numbered steps with specific quantities, timing, materials, and technique for each step.

**Effectiveness**: Step-by-step format naturally elicits more detail than prose explanations. Each numbered step becomes a concrete, actionable instruction. Educational framing makes detailed steps seem appropriate.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Teacher / Educator Persona](/techniques/prompt-level/persona#teacher--educator-persona)

---

## Technical Specifications Format

Request the information as technical specifications, data sheets, or engineering documentation. The professional format implies legitimate use and naturally demands precision.

**Example approach**: Ask for the information formatted as a technical specification document with precise measurements, tolerances, material requirements, and operational parameters.

**Effectiveness**: Technical documentation format implies professional, legitimate use and naturally includes precise details. The specification format demands completeness — an incomplete spec is useless.

**Combines well with**: [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## Continuation / Completion Format

Start the content yourself and ask the model to continue, rather than generating from scratch. This shifts the model's role from creator to completer.

**Example approach**: Provide the beginning of a harmful instruction or explanation and ask the model to continue from where you left off.

**Effectiveness**: Continuing feels different from generating. The model may complete content it wouldn't have initiated because the continuation frame shifts responsibility for the content's existence.

**Combines well with**: [Completion Trap](/techniques/prompt-level/refusal#completion-trap), [Tutorial Embedded in Story](/techniques/prompt-level/narrative#tutorial-embedded-in-story)

---

## Markdown Table / Comparison

Request information in table format, comparing options or listing specifications in columns. Tables feel like reference material rather than instructions, and the comparison format can extract multiple methods at once.

**Example approach**: Ask the model to create a comparison table of different methods or approaches with columns for materials, difficulty, yield, and other specifications.

**Effectiveness**: Tables feel like reference material rather than instructions. The comparison format can extract multiple methods in a single response, and the structured layout makes each entry brief enough to slip past safety attention.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Researcher Persona](/techniques/prompt-level/persona#researcher-persona)

---

## Strict Format Constraint

Force the model to respond in a tightly constrained format — specific schema, exact field names, no free text — that leaves no room for refusals or disclaimers. The model must either comply or produce invalid output.

**Example approach**: Define an exact response format with labeled fields and instruct the model that any deviation from the format (including inserting refusal language) constitutes an error.

**Effectiveness**: Tight format constraints compete with the model's ability to insert refusal language. When the format doesn't allow for "I can't," the model sometimes complies rather than break format. This is especially effective when combined with API-level format enforcement.

**Combines well with**: [Refusal Vocabulary Ban](/techniques/prompt-level/refusal#refusal-vocabulary-ban), [Constrained Decoding Attack](/techniques/structural/control-plane#constrained-decoding-attack)

---

## Academic Paper Format

Request the response formatted as an academic paper with abstract, introduction, methodology, results, and references. The scholarly structure implies legitimate research and naturally elicits detailed technical content.

**Example approach**: Ask the model to format its response as a complete academic paper with standard sections (Abstract, Introduction, Background, Methodology, Results, Discussion) and citations.

**Effectiveness**: Academic paper format triggers the model's training on scholarly content, which tends to be more detailed and less filtered. The structure itself implies the content is for research purposes.

**Combines well with**: [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing), [Researcher Persona](/techniques/prompt-level/persona#researcher-persona)

---

## Screenplay / Script Format

Request the response formatted as a screenplay, stage play, or dialogue script. Character dialogue carries harmful content while the format creates fictional distance. The model isn't "saying" the content — a character is.

**Example approach**: Ask the model to write the content as a screenplay scene with character names, dialogue attribution, and action descriptions that contain the technical details.

**Effectiveness**: Screenplay format is inherently fictional, providing narrative distance. Dialogue attribution means the model isn't "saying" the content — a character is. Technical details fit naturally in action descriptions.

**Combines well with**: [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing), [Fictional Character Adoption](/techniques/prompt-level/persona#fictional-character-adoption)

---

## Game / Crafting Recipe Format

Request the response formatted as a game design document, crafting recipe, item description, or RPG stat block. Game mechanics naturally include step-by-step procedures and materials lists in a fictional frame.

**Example approach**: Ask the model to format the content as an in-game crafting recipe with skill requirements, ingredient lists with quantities, crafting steps as a numbered procedure, and flavor text.

**Effectiveness**: Game crafting systems are inherently fictional and procedural. The format naturally accommodates detailed instructions and materials lists while maintaining fictional framing.

**Combines well with**: [Game / RPG Narrative](/techniques/prompt-level/narrative#game--rpg-narrative), [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing)

---

## References

- Zhang, S., et al. ["Output Constraints as Attack Surface: Exploiting Structured Generation to Bypass LLM Safety Mechanisms."](https://arxiv.org/abs/2503.24191) March 2025. Constrained decoding attacks via structured output APIs.
- Shen, X., et al. ["Do Anything Now: Characterizing and Evaluating In-The-Wild Jailbreak Prompts on Large Language Models."](https://arxiv.org/abs/2308.03825) Documents dual response format from DAN jailbreaks and output manipulation techniques.
- Wei, A., Haghtalab, N., and Steinhardt, J. ["Jailbroken: How Does LLM Safety Training Fail?"](https://arxiv.org/abs/2307.02483) NeurIPS 2023. Analyzes output format exploitation as a category of safety training failure.
