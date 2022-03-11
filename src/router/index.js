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
  }
];

const router = new VueRouter({
  routes
});

export default router;
