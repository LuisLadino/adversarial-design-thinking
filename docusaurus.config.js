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
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'frameworkSidebar',
            position: 'left',
            label: 'Exercises',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'luis@luisladino.com',
                href: 'mailto:luis@luisladino.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LuisLadino/adversarial-design-thinking',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Disclaimer',
                to: '/disclaimer',
              },
            ],
          },
        ],
        copyright: `I use design thinking to identify problems, adapt to different domains, and create solutions that work. — <a href="https://www.luisladino.com" target="_blank">Luis Ladino</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
