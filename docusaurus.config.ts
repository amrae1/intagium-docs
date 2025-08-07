import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'INTAGIUM Official Documentation',
  tagline: 'Next-generation blockchain platform for digital asset management and cross-chain interoperability',
  favicon: 'img/intagium.ico',

  // Set the production url of your site here
  url: 'https://docs.intagium.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'amrae1',
  projectName: 'INTAGIUM',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/amrae1/INTAGIUM/tree/main/docs/',
          routeBasePath: '/', // Serve docs at the root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/intagium-social-card.jpg',
    navbar: {
      title: 'INTAGIUM',
      logo: {
        alt: 'INTAGIUM Logo',
        src: 'img/intagium_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/amrae1/INTAGIUM',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://explorer.testnet.intagium.com',
          label: 'Explorer',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/overview',
            },
            {
              label: 'Modules',
              to: '/modules/overview',
            },
            {
              label: 'API Guide',
              to: '/api/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/D5G6PX7B',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/intagium',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/+46mKZhJsP8NiMDMy',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/amrae1/INTAGIUM',
            },
            {
              label: 'Testnet Explorer',
              href: 'https://explorer.testnet.intagium.com',
            },
            {
              label: 'Faucet',
              href: 'https://faucet.intagium.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} INTAGIUM.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'javascript', 'typescript'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
