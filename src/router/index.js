import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function page(path) {
  return () => import(`../pages/${path}`);
}

const routes = [
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
        path: 'completed',
        name: 'checkout.complete',
        // TODO: Add a middleware
        component: page('Checkout/Complete')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: page('Error/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
export default router;
