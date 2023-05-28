// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const prismThemes = require('prism-react-renderer').themes
const lightCodeTheme = prismThemes.github
const darkCodeTheme = prismThemes.oceanicNext

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Milkcoke's Toolbox",
  tagline: "Milkcoke's Toolbox",
  url: 'https://milkcoke.github.io', // real base url path
  baseUrl: '/docusaurus/', // postfix
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'milkcoke', // Usually your GitHub org/username.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-TRLVYZ57RK',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://milkcoke.github.io/docusaurus/docs/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          authorsMapPath: "./authors.yml",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://milkcoke.github.io/docusaurus/blog/',
          blogSidebarTitle: 'Toolbox Dev',
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Milkcoke's Toolbox",
        logo: {
          alt: 'Falcon Logo',
          src: 'img/m_falcon_nomark.png',
        },
        items: [
          {
            to: '/',
            label: 'Toolbox Dev',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/milkcoke/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      algolia: {
        appId: 'K48MV43JV4',
        apiKey: '247f525579b9b063cc646641cb667447',
        indexName: 'usaurus',
        debug: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
            'powershell',
            'java', 'kotlin',
        ],
      },
    }),

  plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
