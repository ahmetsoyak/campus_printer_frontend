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
