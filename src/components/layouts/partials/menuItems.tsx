interface SubItem {
  text: string;
  path: string;
}

interface Item {
  text: string;
  path: string;
  icon: string;
  subItems?: SubItem[];
}

interface Group {
  groupName: string;
  groupLabel: string;
  items: Item[];
}

export const MenuItems: Group[] = [
  {
    groupName: 'menu',
    groupLabel: 'menu',
    items: [
      {
        text: 'News Media',
        path: '/news-media',
        icon: 'newspaper',
        subItems: [
          { text: 'Overview', path: '/news-media/overview' },
          { text: 'Sources', path: '/news-media/sources' },
          { text: 'Mention Analytics', path: '/news-media/mention' },
        ],
      },
      {
        text: 'Social Media',
        path: '/social-media',
        icon: 'share-nodes',
        subItems: [
          { text: 'Overview', path: '/social-media/overview' },
          { text: 'Sources', path: '/social-media/sources' },
          { text: 'Mention Analytics', path: '/social-media/mention' },
          { text: 'Hashtag Monitoring', path: '/errors/not-found' },
          { text: 'Account Monitoring', path: '/errors/not-found' },
        ],
      },
      { text: 'Brand Comparison', path: '/brand', icon: 'scale-unbalanced' },
      { text: 'Report', path: '/report', icon: 'file-pdf' },
    ],
  },
  {
    groupName: 'setting',
    groupLabel: 'setting',
    items: [
      {
        text: 'Manage Dashboard',
        path: '/manage-dashboard',
        icon: 'chart-simple',
        subItems: [
          { text: 'Manage Product', path: '/errors/not-found' },
          { text: 'Manage Article', path: '/errors/not-found' },
          { text: 'Manage Post', path: '/errors/not-found' },
          { text: 'Manage Hashtag', path: '/errors/not-found' },
          { text: 'Social Media Account', path: '/errors/not-found' },
          { text: 'Social Media Grouping', path: '/errors/not-found' },
          { text: 'Alert Notification', path: '/errors/not-found' },
        ],
      },
      { text: 'Setting', path: '/errors/not-found', icon: 'gear' },
      {
        text: 'Account',
        path: '/account',
        icon: 'user',
        subItems: [
          { text: 'Profile', path: '/account/profile' },
          { text: 'Logout', path: '/errors/not-found' },
        ],
      },
    ],
  },
];
