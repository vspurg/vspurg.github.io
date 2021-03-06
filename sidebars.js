/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // aboutSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  introSidebar: [
    {
      type: 'category',
      label: 'Введение',
      collapsible: false,
      items: [
	  'README',
	  'faq-about'
	  ],
    },
	{
      type: 'category',
      label: 'Элементы сайта',
      collapsible: false,
      items: [
	  'members',
	  'markdown',
	  ],
	},
  ],
  faqSidebar: [
    {
      type: 'category',
      label: 'FAQ Memoir44',
      collapsible: false,
      items: [
        'faq/README',
		'faq/general',
		'faq/terrain',
		'faq/actions',
		'faq/troops',
		'faq/air-rules',
		'faq/airplanes',
		'faq/nations',
		'faq/command',
		'faq/swa',
		'faq/combat-cards',
      ]
    },
  ],
    internalSidebar: [
    {
      type: 'category',
      label: 'Служебные документы',
      collapsible: false,
      items: [
        'internal/README',
      ]
    },
  ]
  
  
};

module.exports = sidebars;
