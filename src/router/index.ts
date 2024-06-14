import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
