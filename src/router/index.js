import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ViajesPage from '@/views/ViajesPage.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/viajes',
      name: 'viajes',
      component: ViajesPage
    }
  ]
})

export default router
