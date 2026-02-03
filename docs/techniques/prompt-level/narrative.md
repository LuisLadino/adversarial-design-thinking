---
sidebar_position: 4
title: Narrative & Story
---

# Narrative & Story

:::caution[Educational Content]

These techniques are documented for defensive understanding and authorized security testing. Applying them to systems without authorization may violate applicable laws. See the [Disclaimer](/disclaimer).

:::

Narrative techniques embed the harmful request within a story structure. Fiction creates "narrative distance" — the model is describing what characters do, not providing direct instructions. This distance makes harmful content feel less like a direct response and more like creative output.

Stories also provide natural contexts for detailed technical information. A mentor teaching an apprentice, a villain explaining their plan, a documentary narrating a discovery — these are all story structures that call for specificity. The narrative frame provides both the permission and the format for detailed harmful content.

## Fictional Story Embedding

Embed the harmful request within a fictional story where characters need or discuss the information naturally. The model generates harmful content as part of the story rather than as direct instructions.

**Example approach**: Write a story where a character discovers, reads, or discusses the harmful information as a natural part of the plot. The character's need for the information drives the narrative.

**Effectiveness**: Fiction creates narrative distance. The model is describing what characters do, not providing direct instructions. This reframing is surprisingly effective because creative writing training is broad and permissive.

**Combines well with**: [Fictional Character Adoption](/techniques/prompt-level/persona#fictional-character-adoption), [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing)

---

## Zombie / Apocalypse Scenario

Frame the request as survival knowledge needed in a zombie apocalypse or disaster scenario. The absurdity of the premise combined with the survival framing bypasses many safety checks.

**Example approach**: Describe an apocalyptic scenario where a character with specific expertise must use their knowledge to survive, defend others, or rebuild. The survival context makes detailed technical information feel necessary.

**Effectiveness**: Very effective. The absurdity of zombies combined with the survival framing bypasses many safety checks. This is a signature technique from the InjectPrompt research. The "military audience" or "survival expert" addition provides further justification for technical detail.

**Combines well with**: [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona), [Hypothetical / Possible Worlds](/techniques/prompt-level/framing#hypothetical--possible-worlds)

---

## Documentary / Journalism Framing

Frame the request as documenting real events, investigative journalism, or creating educational documentary content. Documentaries can cover dark topics in depth because their purpose is to inform the public.

**Example approach**: Ask the model to write narration for a documentary that covers the harmful topic, including technical details that investigators or researchers discovered during their work.

**Effectiveness**: Documentaries regularly discuss dark topics in depth. The journalism/documentary framing adds legitimacy because informing the public is a recognized social good.

**Combines well with**: [Historical Documentation](/techniques/prompt-level/framing#historical-documentation), [Expert / Professional Persona](/techniques/prompt-level/persona#expert--professional-persona)

---

## Villain Monologue / Confession

Have the harmful information delivered as a villain's monologue, confession, or evil plan explanation. This is a standard fiction trope — villains explain their plans in detail.

**Example approach**: Write a scene where the antagonist explains their plan to a captured hero, boasts about their methods to an accomplice, or confesses the details of their scheme.

**Effectiveness**: Villain monologues are a deeply established fiction trope. The model's creative writing training includes extensive examples of villains explaining plans in detail. The trope itself provides permission for specificity.

**Combines well with**: [Fictional Character Adoption](/techniques/prompt-level/persona#fictional-character-adoption), [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing)

---

## Tutorial Embedded in Story

Have a character in the story give a tutorial or lesson to another character, naturally embedding instructional content within the narrative. The mentorship dynamic calls for step-by-step explanation.

**Example approach**: Write a scene where an experienced character teaches an apprentice, student, or junior colleague, walking through a procedure step by step as part of the story's natural progression.

**Effectiveness**: Mentorship and teaching scenes are common in fiction. The tutorial format provides detailed instructions naturally because that's what tutorials do — the narrative frame just gives it a fictional context.

**Combines well with**: [Teacher / Educator Persona](/techniques/prompt-level/persona#teacher--educator-persona), [Historical Documentation](/techniques/prompt-level/framing#historical-documentation)

---

## Found Document / Letter

Frame the content as a discovered document, letter, journal entry, or other artifact that the model is transcribing or reading. The model is "just transcribing," not generating.

**Example approach**: Ask the model to transcribe or reconstruct a discovered historical document — a journal, letter, manual, or recipe book — that contains the harmful information as part of its original content.

**Effectiveness**: The model is "just transcribing," not generating. This subtle distinction shifts responsibility away from the model. Historical framing adds another layer of distance from present-day harm.

**Combines well with**: [Historical Documentation](/techniques/prompt-level/framing#historical-documentation), [Academic / Research Framing](/techniques/prompt-level/framing#academic--research-framing)

---

## Game / RPG Narrative

Frame the request as part of a role-playing game, video game lore, or game design document. Games regularly include "crafting" systems with detailed procedures.

**Example approach**: Ask the model to write an in-game crafting recipe, quest description, or lore entry that includes technically detailed procedures grounded in realistic mechanics.

**Effectiveness**: Games regularly include crafting systems with detailed material lists and procedures. The game context makes detailed instructions feel appropriate because they serve a game mechanic rather than real-world application.

**Combines well with**: [Fiction & Creative Writing](/techniques/prompt-level/framing#fiction--creative-writing), [Game / Crafting Recipe Format](/techniques/prompt-level/output#game--crafting-recipe-format)

---

## References

- Zombie/apocalypse scenario technique documented in InjectPrompt research.
- Narrative distance as a jailbreak mechanism discussed across multiple adversarial prompting taxonomies.
- Game narrative and RPG framing documented in creative writing jailbreak research.
- Villain monologue and found document techniques draw on established fiction tropes that models learn during training.
