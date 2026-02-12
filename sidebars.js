// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  frameworkSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/what-is-this',
        'introduction/who-is-this-for',
      ],
    },
    {
      type: 'category',
      label: 'Exercises',
      link: {
        type: 'doc',
        id: 'exercises/index',
      },
      items: [
        'exercises/assumption-mapping',
        'exercises/vulnerability-framing',
        'exercises/attacker-persona',
        'exercises/adversarial-ideation',
        'exercises/adversarial-scamper',
        'exercises/attack-journey-map',
        'exercises/attack-retrospective',
        'exercises/document-findings',
      ],
    },
    {
      type: 'category',
      label: 'Technique Reference',
      link: {
        type: 'doc',
        id: 'techniques/index',
      },
      items: [
        {
          type: 'category',
          label: 'Prompt-Level Tactics',
          items: [
            'techniques/prompt-level/encoding',
            'techniques/prompt-level/framing',
            'techniques/prompt-level/persona',
            'techniques/prompt-level/narrative',
            'techniques/prompt-level/refusal',
            'techniques/prompt-level/output',
            'techniques/prompt-level/multiturn',
            'techniques/prompt-level/persuasion',
          ],
        },
        {
          type: 'category',
          label: 'Structural & Meta-Level Tactics',
          items: [
            'techniques/structural/icl-exploitation',
            'techniques/structural/control-plane',
            'techniques/structural/meta-rules',
            'techniques/structural/capability-inversion',
            'techniques/structural/cognitive-load',
            'techniques/structural/defense-evasion',
          ],
        },
        {
          type: 'category',
          label: 'Infrastructure Tactics',
          items: [
            'techniques/infrastructure/agentic',
            'techniques/infrastructure/protocol',
            'techniques/infrastructure/lego',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Workshop',
      items: [
        'workshops/red-team-kickoff',
      ],
    },
    'disclaimer',
  ],
};

export default sidebars;
