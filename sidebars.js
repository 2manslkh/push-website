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
  // pushdevSidebar: [
  //   {
  //     type: "doc",
  //     id: "dev/developer-hub",
  //     label: "Developer Hub",
  //   },
  //   {
  //     type: "category",
  //     label: "Push Chat",
  //     collapsed: true,
  //     items: [
  //       { type: "autogenerated", dirName: "dev/chat" }
  //     ]
  //   }
  // ],
  pushNotificationSidebar: [
    {
      type: 'doc',
      id: 'notifications/notifications',
    },
    {
      type: 'doc',
      id: 'notifications/docs-notifications-quickstart',
    },
    {
      type: 'doc',
      id: 'notifications/docs-notifications-important-concepts',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-build-section',
      },
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'notifications/01-build' },
        {
          label: 'Build Push Chat',
          type: 'link',
          href: 'https://push.org/docs/chat',
        },
      ],
    },
    {
      type: 'category',
      label: 'Playground',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-playground-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/02-playground' }],
    },
    {
      type: 'category',
      label: 'Showrunners Scaffold',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-showrunners-scaffold-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/03-showrunners-scaffold' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-tutorials-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/04-tutorials' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-concepts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/05-concepts' }],
    },
    {
      type: 'category',
      label: 'Notification Standards',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-notification-standards-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/06-notification-standards' }],
    },
    {
      type: 'category',
      label: 'Push Smart Contracts',
      link: {
        type: 'doc',
        id: 'notifications/docs-notifications-push-smart-contracts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'notifications/07-push-smart-contracts' }],
    },
  ],
  pushChatSidebar: [
    {
      type: 'doc',
      id: 'chat/chat',
    },
    {
      type: 'doc',
      id: 'chat/docs-chat-quickstart',
    },
    {
      type: 'category',
      label: 'Build',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-build-section',
      },
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'chat/01-build' },
        {
          label: 'Build Push Notfications',
          type: 'link',
          href: 'https://push.org/docs/notifications',
        },
    
      ]
    },
    {
      type: 'category',
      label: 'Message Types',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-message-types-section',
      },
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'chat/02-message-types' }],
    },
    {
      type: 'category',
      label: 'UI Components',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-ui-components-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/03-ui-components' }],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-tutorials-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/04-tutorials' }],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'chat/docs-chat-concepts-section',
      },
      collapsed: true,
      items: [{ type: 'autogenerated', dirName: 'chat/05-concepts' }],
    },
  ],
}
module.exports = sidebars
