import { createRouter, createWebHistory } from 'vue-router'
import CalderGeneratorVue from '@/components/CalderGenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {path: '/calder'}
    },
    {
      path: '/calder',
      name: 'calder',
      component: CalderGeneratorVue
    }
  ]
})

export default router
