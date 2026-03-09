import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import PraticaLayout from '@/layouts/PraticaLayout.vue'
import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'
import QuestionarioMetricas from '@/views/QuestionarioMetricas.vue'
import Pratica1 from '@/views/Pratica-1.vue'
import Pratica2 from '@/views/Pratica-2.vue'
import SobreNos from '@/views/SobreNos.vue'
import Ferramentas from '@/views/Ferramentas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
        },
        {
          path: 'documentacao',
          name: 'Documentation',
          component: Documentation,
        },
        {
          path: 'metricas',
          name: 'QuestionarioMetricas',
          component: QuestionarioMetricas,
        },
        {
          path: 'sobre-nos',
          name: 'SobreNos',
          component: SobreNos,
        },
        {
          path: 'ferramentas',
          name: 'Ferramentas',
          component: Ferramentas,
        },
      ],
    },
    {
      path: '/pratica',
      component: PraticaLayout,
      children: [
        {
          path: '1',
          name: 'Pratica-1',
          component: Pratica1,
        },
        {
          path: '2',
          name: 'Pratica-2',
          component: Pratica2,
        },
      ],
    },
  ],
})
export default router
