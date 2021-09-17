import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/index.vue')
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', keepAlive: false }
      }
    ]
  },
  {
    path: '/create',
    component: Layout,
    children: [
      {
        path: '/create',
        component: () => import('@/pages/create/index.vue'),
        name: 'Create',
        meta: { title: '创作中心', keepAlive: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: '/user',
        component: () => import('@/pages/user/index.vue'),
        name: 'User',
        meta: { title: '个人中心', keepAlive: true }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router