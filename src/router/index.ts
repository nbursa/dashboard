import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'
import TasksPage from '../pages/TasksPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherPage,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
