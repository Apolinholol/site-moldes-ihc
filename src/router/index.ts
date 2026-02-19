import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'
import QuestionarioMetricas from '@/views/QuestionarioMetricas.vue'
import Gamificacao from '@/views/Gamificacao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/documentacao',
      name: 'Documentation',
      component: Documentation,
    },
    {
      path: '/teste',
      name: 'QuestionarioMetricas',
      component: QuestionarioMetricas,
    },
    {
      path: '/gamificacao',
      name: 'Gamificacao',
      component: Gamificacao,
    },
  ],
})
export default router
