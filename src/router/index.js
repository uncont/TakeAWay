import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/UserLogin.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('@/views/UserRigister.vue')
    },
  ],
})

export default router
  