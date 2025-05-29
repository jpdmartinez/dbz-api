import HomeView from '@/views/HomeView.vue'
import PersonagemCardView from '@/views/PersonagemCardView.vue'
import PlanetaCardView from '@/views/PlanetaCardView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'PersonagensList',
      component: PersonagemCardView,
    },
    {
      path: '/planets',
      name: 'PlanetasList',
      component: PlanetaCardView
    }
  ],
})

export default router
