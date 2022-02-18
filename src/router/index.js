import { createRouter, createWebHashHistory } from 'vue-router'
import Before from '@/pages/error/Before.vue'
import Finish from '@/pages/error/Finish.vue'

export const constantRouterMap = [
  {
    path: '/before',
    component: Before,
    name: 'before'
  },
  {
    path: '/finish',
    component: Finish,
    name: 'finish'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})