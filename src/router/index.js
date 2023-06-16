import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: false
      }
    },

    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
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
    },

    {
      path: '/week2',
      name: 'week2',
      component: () => import('../views/weeks/week2.vue')
    },

    {
      path: '/week3',
      name: 'week3',
      component: () => import('../views/weeks/week3.vue')
    },

    {
      path: '/week4',
      name: 'week4',
      component: () => import('../views/weeks/week4.vue')
    },


  ]
})

export default router
