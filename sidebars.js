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
      label: 'Concepts',
      items: [
        'concepts/attacker-personas',
        'concepts/attack-journey-mapping',
        'concepts/adversarial-ideation',
        'concepts/probing-the-gulfs',
        'concepts/harm-centered-reporting',
      ],
    },
    {
      type: 'category',
      label: 'Artifacts',
      items: [
        'artifacts/persona-template',
        'artifacts/journey-map-template',
        'artifacts/ideation-worksheet',
        'artifacts/vulnerability-framing-checklist',
        'artifacts/findings-report-template',
      ],
    },
  ],
};

export default sidebars;
