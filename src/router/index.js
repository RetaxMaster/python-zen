import { createRouter, createWebHistory } from 'vue-router'
import Questions from '@/views/Questions/Index.vue'
import Results from '@/views/Results/Index.vue'

const routes = [

  {
    path: '/',
    name: 'Questions',
    component: Questions
  },

  {
    path: '/results',
    name: 'Results',
    component: Results
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
