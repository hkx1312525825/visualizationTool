import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/home')
    },
    {
      path: '/designer',
      name: 'designer',
      component: () => import('../views/Designer/designer')
    }
  ]
})

export default router
