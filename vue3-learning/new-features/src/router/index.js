import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ReactiveView.vue')
    },
    {
      path: '/cpn',
      name: 'cpn',
      component: () => import('../views/CpnView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: () => import('../views/HooksView.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/OtherView.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('../views/ModelView.vue')
    },
    {
      path: '/directive',
      name: 'directive',
      component: () => import('../views/DirectiveView.vue')
    }
  ]
})

export default router
