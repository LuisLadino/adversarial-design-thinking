// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Adversarial Design Thinking',
  tagline: 'Human-centered design methods for structured adversarial testing of AI systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://adversarial-design-thinking.github.io',
  baseUrl: '/',

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
            label: 'Framework',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Adversarial Design Thinking. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
