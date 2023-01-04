import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView';
import FiveView from "@/views/FiveView";
import PlansView from "@/views/PlansView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/five',
    name: 'five',
    component: FiveView
  },
  {
    path: '/plans',
    name: 'plans',
    component: PlansView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
