export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Orders',
      url: '/dashboard/orders',
      icon: 'icon-list',
    },
    {
      name: 'Products',
      url: '/dashboard/products',
      icon: 'icon-diamond',
      children: [
        {
          name: 'List',
          url: '/dashboard/products/list',
          icon: 'icon-list',
        },
        {
          name: 'Prices',
          url: '/dashboard/products/prices',
          icon: 'icon-paypal',
        },

        // {
        //   name: 'Breadcrumbs',
        //   url: '/base/breadcrumbs',
        //   icon: 'icon-puzzle',
        // }
      ]
    },
    {
      name: 'Blacklisted emails',
      url: '/dashboard/blacklist',
      icon: 'icon-user',
      badge: {
        variant: 'info',
      },
    },
  ]
};