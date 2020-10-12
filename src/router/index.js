import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/Grid.vue'),
  },
  {
    path: '/spacing',
    name: 'spacing',
    component: () => import(/* webpackChunkName: "spacing" */ '../views/Spacing.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
