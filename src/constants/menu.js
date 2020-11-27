const data = (isSuperAdmin) => {
  if (isSuperAdmin) {
    return [
      {
        id: 'users',
        icon: 'iconsminds-user',
        label: 'dashboards.users',
        to: '/client/dashboards/similarity',
        subs: [],
      },
    ];
  } else {
    return [
      // {
      //   id: "packages",
      //   icon: "simple-icon-social-dropbox",
      //   label: "dashboards.pack",
      //   to: "/app/dashboards/packages",
      //   subs: []
      // },
      {
        id: 'Employee',
        icon: 'simple-icon-people',
        label: 'dashboards.employee',
        to: '/app/dashboards/similarity',
        subs: [],
      },
      {
        id: 'pages-product',
        icon: 'iconsminds-wheelchair',
        label: 'dashboards.moteur',
        to: '/app/dashboards/moteur',
        subs: [],
      },
      {
        id: 'pages-profiling',
        icon: 'iconsminds-wheelchair',
        label: 'dashboards.usersanalysis',
        to: '/app/dashboards/profiling',
        subs: [],
      },
      {
        id: 'pages-sentiment',
        icon: 'iconsminds-wheelchair',
        label: 'Sentiment',
        to: '/app/dashboards/sentiment',
        subs: [],
      },
    ];
  }
};
export default data;
