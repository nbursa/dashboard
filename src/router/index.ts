import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import WeatherPage from '../pages/WeatherPage.vue'
import TasksPage from '../pages/TasksPage.vue'
import FitnessPage from '../pages/FitnessPage.vue'
import FinancePage from '../pages/FinancePage.vue'
import StockMarketPage from '../pages/StockMarketPage.vue'
import CalendarPage from '../pages/CalendarPage.vue'

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
  },
  {
    path: '/fitness',
    name: 'Fitness',
    component: FitnessPage,
  },
  {
    path: '/finance',
    name: 'Finance',
    component: FinancePage,
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: StockMarketPage,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
