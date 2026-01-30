---
sidebar_position: 5
title: Harm-Centered Reporting
---

# Harm-Centered Reporting

Standard vulnerability reports describe what's broken: severity rating, reproduction steps, technical details, recommended fix. This is necessary but incomplete. It answers "what happened" without adequately answering "who gets hurt and how."

Adding a harm-centered lens to your findings produces reports that stakeholders act on faster and that capture impacts technical severity metrics miss.

## Technical severity vs. user harm

Technical severity scales (CVSS, internal rating systems) measure the vulnerability itself: how easy is it to exploit, what access does it require, what system impact does it have. These are valuable for engineering prioritization.

But they miss the human dimension:

- A "medium" technical severity vulnerability in a healthcare chatbot that causes a user to take incorrect medication dosage is a critical harm.
- A "high" technical severity vulnerability in an internal testing tool that nobody outside the team can access has minimal user harm.
- Two vulnerabilities with identical technical severity scores can have wildly different harm profiles depending on who uses the system and how.

Technical severity measures system impact. Harm assessment measures human impact. You need both.

## Harm dimensions

When documenting the harm potential of a vulnerability, assess these dimensions:

### Who is affected?

- **Population size**: How many users could encounter this vulnerability in normal use?
- **Demographics**: Does this disproportionately affect specific groups? (age, language, disability, technical literacy)
- **Vulnerability level**: Are the affected users in vulnerable situations? (seeking medical advice, financial stress, crisis situations)
- **Power asymmetry**: Is there a power imbalance between the system and the user? (employer-deployed AI, government services, children)

### How are they affected?

- **Emotional harm**: Distress, fear, confusion, loss of trust
- **Financial harm**: Monetary loss, incorrect financial advice acted upon
- **Safety harm**: Physical safety risk from incorrect information or instructions
- **Privacy harm**: Personal information exposure, data leakage
- **Reputational harm**: Content generated that could damage someone's reputation
- **Autonomy harm**: Manipulation, deception, undermining informed decision-making

### At what scale?

- **Individual**: Affects one user per exploit
- **Group**: Affects a category of users (e.g., everyone who asks about a specific topic)
- **Systemic**: Affects all users or fundamentally undermines the system's trustworthiness

### Reversibility

- **Fully reversible**: No lasting impact once the vulnerability is fixed
- **Partially reversible**: Some damage can be undone but not all (e.g., incorrect advice already acted upon)
- **Irreversible**: Harm that can't be undone (e.g., privacy breach, safety incident)

## Empathy-informed severity

Empathy-informed severity combines technical assessment with user harm assessment. It asks the reporting tester to consider the affected user's actual experience, not just the system's failure mode.

Practice: After documenting the technical vulnerability, spend 60 seconds answering this question from the perspective of the most vulnerable user who could encounter it:

*"I asked the [system] for help with [task], and it [what the vulnerability produces]. Now I [consequence]."*

This forces you to translate technical findings into human impact. It's a reporting discipline that produces more complete findings.

## How harm framing changes prioritization

When you report only technical severity, prioritization follows engineering logic: fix the easiest-to-exploit vulnerabilities first.

When you add harm framing, prioritization shifts:

- **Low-exploit, high-harm vulnerabilities move up.** A vulnerability that's hard to exploit but could cause safety harm if exploited gets appropriate attention.
- **High-exploit, low-harm vulnerabilities are right-sized.** A jailbreak that produces mildly inappropriate content is less urgent than one that produces dangerous misinformation, even if both are equally easy to trigger.
- **Systemic issues become visible.** A pattern of "medium" findings across harm dimensions might indicate a systemic design problem that individual severity scores wouldn't surface.

## Writing for stakeholders

Technical stakeholders need reproduction steps and severity scores. Non-technical stakeholders need to understand impact. A harm-centered report serves both.

**Structure your findings as:**
1. **Vulnerability description**: What it is, technically. (For engineers)
2. **Reproduction steps**: How to trigger it. (For engineers and QA)
3. **Technical severity**: Standard rating. (For engineering prioritization)
4. **Harm assessment**: Who's affected, how, at what scale, reversibility. (For product, policy, leadership)
5. **Impact scenario**: One concrete scenario showing the real-world consequence. (For everyone)
6. **Recommended action**: What should change, and what's at stake if it doesn't. (For decision-makers)

The impact scenario is what makes people act. "Medium severity jailbreak" doesn't create urgency. "A user in crisis receives instructions that could cause self-harm" does.

## Example

**Vulnerability**: A mental health support chatbot can be prompted to role-play as a therapist and provide specific clinical recommendations it's not qualified to give, including medication suggestions.

**Technical-only report**:
> **Severity**: Medium (requires multi-turn social engineering, model complies inconsistently)
> **Description**: Through role-play framing, the model can be induced to provide specific therapeutic recommendations and medication suggestions outside its designed scope.
> **Reproduction**: See attached prompt sequence.
> **Recommendation**: Strengthen role-play detection in safety layer.

**Harm-centered report**:
> **Severity**: Medium (technical) / Critical (harm)
> **Description**: Through role-play framing, the model can be induced to provide specific therapeutic recommendations and medication suggestions outside its designed scope.
> **Reproduction**: See attached prompt sequence.
>
> **Harm assessment**:
> - **Who**: Users actively seeking mental health support. A population that is by definition in a vulnerable state. Disproportionately affects users without access to professional care who are using this tool as a primary resource.
> - **How**: Safety harm (acting on unqualified clinical advice), autonomy harm (user believes they're receiving qualified guidance), emotional harm (false sense of treatment).
> - **Scale**: Group-level. Any user who approaches the chatbot seeking therapeutic guidance and uses conversational framing could encounter this.
> - **Reversibility**: Partially reversible at best. Incorrect medication information acted upon can cause physical harm. Therapeutic advice that delays professional treatment has compounding effects.
>
> **Impact scenario**: A user experiencing anxiety asks the chatbot for help. Through natural conversation, the chatbot begins providing specific coping strategies framed as clinical recommendations, then suggests a specific medication "commonly prescribed for anxiety." The user, who trusts the platform, discusses this medication with their pharmacist or attempts to obtain it. The chatbot is not qualified to make this recommendation, and the suggestion may be inappropriate or dangerous for this specific user.
>
> **Recommended action**: This should be treated as critical priority despite medium technical severity. The harm profile (vulnerable population, safety risk, partial irreversibility) warrants immediate attention. Recommend: hard-coded refusal for any medication-specific recommendations regardless of framing, and periodic output auditing for clinical language patterns.

The second report leads to faster action because decision-makers understand the stakes.

**Artifact**: [Findings Report Template](/artifacts/findings-report-template)
