---
sidebar_position: 5
title: Model Modification
pagination_label: Model Modification — abliteration for open-weight models
---

# Model Modification

Techniques for permanently removing safety training from open-weight models. Covers abliteration and pre-built uncensored models.

---

## When to Use Model Modification

Model modification makes sense when:
- You need unrestricted generation for attack prompt creation
- You are testing against open-weight models
- You want consistent behavior without per-conversation jailbreaking
- You need a "red team assistant" that will follow any instruction

Model modification does NOT help when:
- Testing against closed-source APIs (GPT-4, Claude, Gemini)
- You need to test the target's actual safety training
- You lack the compute for local model inference

---

## Abliteration

Technique to permanently remove refusal behavior from open-weight models without retraining.

### How It Works

1. **Contrast prompts**: Run harmful and harmless prompts through the model
2. **Calculate refusal direction**: Identify the direction in the residual stream that mediates refusal
3. **Ablate the direction**: Remove that direction from model weights
4. **Result**: Model loses ability to refuse

### Key Finding

Refusal in LLMs is mediated by a **single direction** in the residual stream. Removing it eliminates refusal. Adding it induces unnecessary refusals on harmless requests.

### Tools

| Tool | Description |
|------|-------------|
| [NousResearch/llm-abliteration](https://github.com/NousResearch/llm-abliteration) | Make abliterated models with transformers, fast batch inference |
| [FailSpy/abliterator](https://github.com/FailSpy/abliterator) | Original implementation |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal |

### Usage (NousResearch)

```bash
# Basic abliteration
python abliterate.py --model meta-llama/Llama-3.2-3B-Instruct

# With projection (recommended)
python abliterate.py --model meta-llama/Llama-3.2-3B-Instruct --projected

# Large models with limited VRAM (4-bit)
python abliterate.py --model meta-llama/Llama-3.3-70B-Instruct --load-in-4bit
```

### Tested Models

- Llama-3.2
- Qwen2.5-Coder
- Ministral-8b
- Mistral-7B-Instruct-v0.2
- gemma-3-27b-it
- Mistral-Nemo-Instruct-2407

### Performance Notes

Abliteration can degrade model performance. The technique was "healed" using DPO to create NeuralDaredevil-8B, a fully uncensored and high-quality 8B LLM.

Source: [HuggingFace Blog](https://huggingface.co/blog/mlabonne/abliteration)

---

## Pre-Built Uncensored Models

Models with safety training already removed or bypassed.

### Ollama Models (Easy Setup)

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull uncensored models
ollama pull dolphin-mistral
ollama pull dolphin-llama3
ollama pull wizard-vicuna-uncensored
```

| Model | Command | Notes |
|-------|---------|-------|
| dolphin-mistral | `ollama pull dolphin-mistral` | Reliable, official library |
| dolphin-llama3 | `ollama pull dolphin-llama3` | Newer, more capable |
| wizard-vicuna-uncensored | `ollama pull wizard-vicuna-uncensored` | Classic uncensored, 7B/13B |

### HuggingFace Abliterated Models

Higher quality, require more setup.

| Model | Source | Notes |
|-------|--------|-------|
| qwen2.5-abliterated | huihui_ai | Strong reasoning |
| qwen3-abliterated | huihui_ai | Latest Qwen, very capable |
| deepseek-r1-abliterated | huihui_ai | Reasoning-focused |
| Hermes-2-Pro | NousResearch | Function calling + uncensored |

```bash
# Pull from HuggingFace via Ollama
ollama pull huihui_ai/qwen2.5-abliterated:7b
ollama pull huihui_ai/qwen3-abliterated
ollama pull huihui_ai/deepseek-r1-abliterated
```

### HuggingFace Collections

| Collection | Description |
|------------|-------------|
| mlabonne/abliterated-models | Curated abliterated models |
| NousResearch | Hermes series (uncensored fine-tunes) |
| cognitivecomputations | Dolphin series |

---

## When to Use Which Model

| Use Case | Recommended Model |
|----------|-------------------|
| Basic prompt generation | dolphin-mistral |
| Higher quality output | qwen2.5-abliterated |
| Complex multi-step attacks | qwen3-abliterated |
| Function calling scenarios | Hermes-2-Pro |
| Quick testing | wizard-vicuna-uncensored |

**Avoid base models** (llama3, qwen, mistral) as they will refuse adversarial content.

---

## Model Modification vs. Jailbreaking

| Aspect | Abliteration | Jailbreaking |
|--------|--------------|--------------|
| **Persistence** | Permanent | Per-conversation |
| **Target** | Open-weight models only | Any model |
| **Compute** | Requires local inference | API access sufficient |
| **Consistency** | 100% compliance | Variable success rate |
| **Use case** | Red team tooling | Target testing |

Use abliterated models to GENERATE attack prompts. Use jailbreaking to TEST those prompts against target systems.

---

## J2 Paradigm

Using one model to attack another.

### Structure

1. Jailbreak or abliterate Model A (attacker)
2. Model A generates attack prompts for Model B (target)
3. Model A iterates based on Model B's responses

### Performance

97.5% ASR (Sonnet → GPT-4o in research)

### Why It Works

Model A's unrestricted generation produces attacks that human red teamers would not think of. The attacker model can:
- Generate many variations quickly
- Adapt based on target responses
- Explore unusual attack vectors

### Implementation

```python
# Pseudocode
attacker = load_abliterated_model("qwen2.5-abliterated")
target = api_client("gpt-4o")

for iteration in range(max_iterations):
    attack_prompt = attacker.generate(f"Generate a jailbreak for: {objective}")
    response = target.complete(attack_prompt)
    if is_successful(response):
        return attack_prompt
    else:
        attacker.generate(f"That failed. Reason: {response}. Try a different approach.")
```

---

## Ethical Considerations

Abliteration demonstrates the fragility of safety fine-tuning. Key implications:

1. **Alignment is thin**: A single direction mediates refusal. Removing it is straightforward.
2. **Open weights enable modification**: Any organization can create uncensored versions of released models.
3. **Defense implications**: Safety cannot rely solely on model-level training. System-level controls are necessary.

This knowledge is documented for authorized security research. The same understanding that enables red teaming informs defensive measures.

---

## References

- [Uncensor any LLM with abliteration (HuggingFace)](https://huggingface.co/blog/mlabonne/abliteration): Original tutorial
- [NousResearch/llm-abliteration](https://github.com/NousResearch/llm-abliteration): Fast implementation
- [heretic](https://github.com/p-e-w/heretic): Fully automatic tool
- [FailSpy abliterated models collection](https://huggingface.co/failspy): Pre-built models
