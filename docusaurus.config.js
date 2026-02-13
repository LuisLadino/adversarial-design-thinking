// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Adversarial Design Thinking',
  tagline: 'Human-centered design methods for structured adversarial testing of AI systems',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://LuisLadino.github.io',
  baseUrl: '/adversarial-design-thinking/',

  organizationName: 'LuisLadino',
  projectName: 'adversarial-design-thinking',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Adversarial Design Thinking',
        logo: {
          alt: 'ADT',
          src: 'img/favicon.png',
          href: '/',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Learn',
            position: 'left',
            items: [
              {
                label: 'Mindset',
                to: '/mindset',
              },
              {
                label: 'Getting Started',
                to: '/introduction/getting-started',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Reference',
            position: 'left',
            items: [
              {
                label: 'Techniques',
                to: '/techniques',
              },
              {
                label: 'Crafting Prompts',
                to: '/crafting-prompts',
              },
              {
                label: 'Jailbreaks',
                to: '/jailbreaks',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Practice',
            position: 'left',
            items: [
              {
                label: 'Exercises',
                to: '/exercises',
              },
              {
                label: 'Workshop',
                to: '/workshops/red-team-kickoff',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Mindset',
                to: '/mindset',
              },
              {
                label: 'Getting Started',
                to: '/introduction/getting-started',
              },
              {
                label: 'Techniques',
                to: '/techniques',
              },
            ],
          },
          {
            title: 'Research',
            items: [
              {
                label: 'OWASP LLM Top 10',
                href: 'https://genai.owasp.org/llm-top-10/',
              },
              {
                label: 'MITRE ATLAS',
                href: 'https://atlas.mitre.org/',
              },
              {
                label: 'Sources',
                to: '/jailbreaks/sources',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/LuisLadino/adversarial-design-thinking',
              },
              {
                label: 'Disclaimer',
                to: '/disclaimer',
              },
              {
                label: 'luisladino.com',
                href: 'https://www.luisladino.com',
              },
            ],
          },
        ],
        copyright: `Created by <a href="https://www.luisladino.com" target="_blank">Luis Ladino</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
