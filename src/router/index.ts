import PersonagemCardView from '@/views/PersonagemCardView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PersonagensList',
      component: PersonagemCardView,
    },
  ],
})

export default router
