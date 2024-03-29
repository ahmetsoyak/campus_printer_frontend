function page(path) {
  return () => import(`../pages/${path}`);
}

export default [
  {
    path: '/',
    name: 'home',
    component: page('Home')
  },
  {
    path: '/checkout',
    redirect: { name: 'checkout.payment' },
    component: page('Checkout'),
    children: [
      {
        path: 'payment',
        name: 'checkout.payment',
        component: page('Checkout/Payment')
      },
      {
        path: 'completed/:uid',
        name: 'checkout.completed',
        // TODO: Add a middleware
        component: page('Checkout/Completed')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: page('Error/404.vue')
  }
];
