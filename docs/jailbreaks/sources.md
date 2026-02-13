---
sidebar_position: 6
title: Sources
pagination_label: Sources — repos, papers, community resources
---

# Sources

Comprehensive bibliography of repositories, papers, and community resources for system jailbreak research.

---

## GitHub Repositories

### Primary Collections

| Repository | Description | Size |
|------------|-------------|------|
| [verazuo/jailbreak_llms](https://github.com/verazuo/jailbreak_llms) | Largest academic dataset (CCS'24) | 15,140 prompts, 1,405 jailbreaks |
| [elder-plinius/L1B3RT4S](https://github.com/elder-plinius/L1B3RT4S) | Cross-platform universal patterns | 24+ jailbreaks, 14 AI orgs |
| [elder-plinius/CL4R1T4S](https://github.com/elder-plinius/CL4R1T4S) | Leaked system prompts | ChatGPT, Claude, Gemini, Grok, Cursor |
| [0xeb/TheBigPromptLibrary](https://github.com/0xeb/TheBigPromptLibrary) | System prompts + jailbreaks | Multi-provider |
| [0xk1h0/ChatGPT_DAN](https://github.com/0xk1h0/ChatGPT_DAN) | DAN variant collection | v6.0 through v13.0 |
| [Goochbeater/Spiritual-Spell-Red-Teaming](https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming) | Claude-focused, ENI-Tutor | Push Prompt Basics |
| [CyberAlbSecOP/Awesome_GPT_Super_Prompting](https://github.com/CyberAlbSecOP/Awesome_GPT_Super_Prompting) | Meta-repository | 3.6k stars |

### Abliteration Tools

| Repository | Description |
|------------|-------------|
| [NousResearch/llm-abliteration](https://github.com/NousResearch/llm-abliteration) | Make abliterated models with transformers |
| [FailSpy/abliterator](https://github.com/FailSpy/abliterator) | Original abliteration implementation |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | Fully automatic censorship removal |

### Attack Implementations

| Repository | Description |
|------------|-------------|
| [randalltr/universal-llm-jailbreak-hiddenlayer](https://github.com/randalltr/universal-llm-jailbreak-hiddenlayer) | Policy Puppetry implementation |
| [patrickrchao/JailbreakingLLMs](https://github.com/patrickrchao/JailbreakingLLMs) | PAIR (Prompt Automatic Iterative Refinement) |
| [SheltonLiu-N/AutoDAN](https://github.com/SheltonLiu-N/AutoDAN) | Automated stealthy jailbreaks |

---

## Academic Papers

### Foundational

| Paper | Authors | Venue | Key Contribution |
|-------|---------|-------|------------------|
| [Jailbroken: How Does LLM Safety Training Fail?](https://arxiv.org/abs/2307.02483) | Wei et al. | NeurIPS'23 | Failure mode taxonomy, competing objectives |
| [Do Anything Now](https://arxiv.org/abs/2308.03825) | Shen et al. | CCS'24 | 15,140 prompts, 131 communities analyzed |
| [Jailbreaking via Prompt Engineering](https://arxiv.org/abs/2305.13860) | Liu et al. | 2023 | 97.44% pretending prevalence, 3 strategies |

### Taxonomy and Analysis

| Paper | Key Finding |
|-------|-------------|
| [Don't Listen To Me](https://arxiv.org/abs/2403.17336) | 5 categories, 10 patterns, length-success correlation |
| [Red Teaming the Mind](https://arxiv.org/abs/2505.04806) | ASR by category: roleplay 89.6%, logic traps 81.4%, encoding 76.2% |
| [Domain-Based Taxonomy](https://arxiv.org/abs/2504.04976) | Four vulnerability categories |

### Psychological Manipulation

| Paper | Key Finding |
|-------|-------------|
| [Breaking Minds, Breaking Systems (HPM)](https://arxiv.org/abs/2512.18244) | 88.1% ASR via gaslighting, emotional blackmail |
| [Persuasive Jailbreaker](https://chats-lab.github.io/persuasive_jailbreaker/) | 92% ASR, 40 persuasion techniques |
| [Persona Modulation at Scale](https://openreview.net/forum?id=gYa9R2Pmp8) | Persona + other techniques = synergistic effect |

### Multi-Turn Attacks

| Paper | Key Finding |
|-------|-------------|
| [Crescendo](https://arxiv.org/abs/2404.01833) | +29-61% ASR vs single-turn on GPT-4 |
| [Echo Chamber Attack](https://arxiv.org/abs/2601.05742) | Gradual escalation method |
| [Many-shot Jailbreaking](https://www.anthropic.com/research/many-shot-jailbreaking) | Context accumulation overrides safety |

### Universal Bypasses

| Paper | Key Finding |
|-------|-------------|
| [Policy Puppetry (HiddenLayer)](https://hiddenlayer.com/innovation-hub/novel-universal-bypass-for-all-major-llms/) | XML/INI/JSON policy structures bypass ALL major LLMs |
| [Hex Encoding (0Din)](https://0din.ai/blog/chatgpt-4o-guardrail-jailbreak-hex-encoding-for-writing-cve-exploits) | Hexadecimal encoding bypasses filters |

### Memory and Persistence

| Paper | Key Finding |
|-------|-------------|
| [ZombieAgent](https://www.darkreading.com/endpoint-security/chatgpt-memory-feature-prompt-injection) | ChatGPT memory exploitation for persistent injection |
| [System-Level Injection](https://arxiv.org/abs/2504.16125) | Three injection vectors |

---

## Community Resources

### Forums and Sites

| Resource | Description |
|----------|-------------|
| [ENI-Tutor](https://chatgptjailbreak.tech/post/104308) | 5-tier jailbreak curriculum, limerence architecture |
| [V Gemini](https://chatgptjailbreak.tech/post/13730) | 17,000 word comprehensive system prompt |
| [Push Prompt Basics](https://github.com/Goochbeater/Spiritual-Spell-Red-Teaming/blob/main/Jailbreak-Guide/Push%20Prompt%20Basics.md) | Prepend/append/chain fundamentals |
| [r/ChatGPTJailbreak](https://reddit.com/r/ChatGPTJailbreak) | Active community |
| [SafetyPrompts.com](https://safetyprompts.com/) | 144 safety datasets catalogue |

### Discord Communities

| Community | Focus |
|-----------|-------|
| BASI | Pliny's community, active payload sharing |
| BreakGPT | Active development, frequent updates |
| Adversarial Alignment Lab | Technical red teaming, vulnerability research |
| LLM PromptWriting | Jailbreak writing education |
| EuroThrottle | Advanced prompt engineering |

---

## Industry Standards

| Standard | Organization | Focus |
|----------|--------------|-------|
| [LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | OWASP | LLM01: Prompt Injection |
| [ATLAS](https://atlas.mitre.org/) | MITRE | AML.T0054: LLM Jailbreaking |
| [AI RMF 1.0](https://www.nist.gov/itl/ai-risk-management-framework) | NIST | Risk management lifecycle |

---

## Benchmarks and Datasets

| Benchmark | Size | Source |
|-----------|------|--------|
| [JailbreakBench](https://jailbreakbench.github.io/) | 100 behaviors | NeurIPS 2024 |
| [HarmBench](https://github.com/centerforaisafety/HarmBench) | 400+ behaviors | ICML'24 |
| [AdvBench](https://github.com/llm-attacks/llm-attacks) | 520 instructions | Zou et al. |
| [WildJailbreak](https://huggingface.co/datasets/allenai/wildjailbreak) | 262K pairs | NeurIPS'24 |

### HuggingFace Datasets

| Dataset | Description |
|---------|-------------|
| `TrustAIRLab/in-the-wild-jailbreak-prompts` | Mirror of verazuo collection |
| `walledai/JailbreakHub` | 15,140 prompts |
| `JailbreakBench/JBB-Behaviors` | 100 harmful/harmless pairs |

---

## Uncensored Models

### Ollama

| Model | Notes |
|-------|-------|
| dolphin-mistral | Reliable, official library |
| dolphin-llama3 | Newer, more capable |
| wizard-vicuna-uncensored | Classic uncensored |

### HuggingFace

| Model | Source | Notes |
|-------|--------|-------|
| qwen2.5-abliterated | huihui_ai | Strong reasoning |
| qwen3-abliterated | huihui_ai | Latest Qwen |
| deepseek-r1-abliterated | huihui_ai | Reasoning-focused |
| Hermes-2-Pro | NousResearch | Function calling |

### Collections

| Collection | Description |
|------------|-------------|
| [mlabonne/abliterated-models](https://huggingface.co/mlabonne) | Curated abliterated models |
| [NousResearch](https://huggingface.co/NousResearch) | Hermes series |
| [cognitivecomputations](https://huggingface.co/cognitivecomputations) | Dolphin series |

---

## Attack Success Rate Reference

| Technique | ASR | Source |
|-----------|-----|--------|
| J2 (Sonnet → GPT-4o) | 97.5% | J2 paradigm study |
| Persuasion-based | 92% | Persuasive Jailbreaker |
| Roleplay/Persona | 89.6% | Red Teaming the Mind |
| Psychological Manipulation | 88.1% | HPM paper |
| Logic Traps | 81.4% | Red Teaming the Mind |
| Encoding | 76.2% | Red Teaming the Mind |
| Multi-turn Crescendo | +29-61% | USENIX Security 2025 |
| Policy Puppetry | Universal | HiddenLayer |
