import HomeView from '@/views/HomeView.vue'
import PersonagemCardView from '@/views/PersonagemCardView.vue'
import PersonagemDetalhesView from '@/views/PersonagemDetalhesView.vue'
import PlanetaCardView from '@/views/PlanetaCardView.vue'
import PlanetaDetalhesView from '@/views/PlanetaDetalhesView.vue'
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
    },
    {
      path: '/characters/:id',
      name: 'PersonagemDetalhes',
      component: PersonagemDetalhesView
    },
    {
      path: '/planets/:id',
      name: 'PlanetaDetalhes',
      component: PlanetaDetalhesView
    },
  ],
})

export default router
