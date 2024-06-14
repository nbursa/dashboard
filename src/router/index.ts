import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/weather',
    name: 'WeatherDetail',
    component: WeatherPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
