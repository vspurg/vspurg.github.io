// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/* @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документы Memoir44',
  tagline: 'Memoir44',
  url: 'https://docs.memoir44.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vspurg', // Usually your GitHub org/user name.
  projectName: 'vspurg.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash:  false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /* @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
			routeBasePath: '/',
			sidebarPath: require.resolve('./sidebars.js'),
			sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vspurg/vspurg.github.io/tree/main/',
        },
        blog: false, //{
          // showReadingTime: true,
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /* @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    metadata: [{name: 'keywords', content: 'Memoir44'}],
      navbar: {
        title: '',
        logo: {
          alt: 'Memoir44',
          src: 'img/logo.png',
        },
        items: [
          {type: 'doc', docId: 'README', position: 'left', label: 'Документация'},
          {to: '/faq', label: 'FAQv2(рус)', position: 'left'},
          // {
            // type: 'search',
            // position: 'right',
          // },
        ],
      },
      // footer: {
        // style: 'dark',
        // links: [
          // {
            // title: 'Docs',
            // items: [
              // {
                // label: 'Tutorial',
                // to: '/docs/intro',
              // },
            // ],
          // },
          // {
            // title: 'Community',
            // items: [
              // {
                // label: 'Stack Overflow',
                // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
                // label: 'Discord',
                // href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
                // label: 'Twitter',
                // href: 'https://twitter.com/docusaurus',
              // },
            // ],
          // },
          // {
            // title: 'More',
            // items: [
              // {
                // label: 'Blog',
                // to: '/blog',
              // },
              // {
                // label: 'GitHub',
                // href: 'https://github.com/facebook/docusaurus',
              // },
            // ],
          // },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
