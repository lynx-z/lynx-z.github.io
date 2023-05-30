import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/week0',
      name: 'week0',
      component: () => import('../views/weeks/week0.vue')
    },
    {
      path: '/week1',
      name: 'week1',
      component: () => import('../views/weeks/week1.vue')
    }
  ]
})

export default router
