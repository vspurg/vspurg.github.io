import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '982'),
    exact: true
  },
  {
    path: '/page',
    component: ComponentCreator('/page', '82e'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '3da'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '678'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/category/tutorial---basics',
        component: ComponentCreator('/category/tutorial---basics', 'd0e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/category/tutorial---extras',
        component: ComponentCreator('/category/tutorial---extras', '84a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/hello',
        component: ComponentCreator('/hello', '790'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations', '95b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post', 'd08'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document', 'afb'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page', '3ab'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site', 'af6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features', '3df'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions', 'c59'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site', '404'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
