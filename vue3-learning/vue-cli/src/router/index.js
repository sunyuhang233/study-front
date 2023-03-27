import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layout/LayoutView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
      },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('../views/DetailView.vue')
        },
        {
          path: '/todo',
          name: 'todo',
          component: () => import('../views/MyView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/LoginAndRegister.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("../components/LoginView.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import("../components/RegisterView.vue")
        }
      ]
    },
    {
      path: "/jianshu",
      name: "jianshu",
      component: () => import("../layout/JianShuView.vue"),
      children: [
        {
          path: "home",
          name: "jianshuHome",
          component: () => import("../views/JianShuHomeView.vue")
        },
         {
          path: "it",
          name: "it",
           component: () => import("../views/JianShuItView.vue"),
           redirect: "/jianshu/it/fonrnt",
           children: [
             {
               path: "fonrnt",
               name: "fonrnt",
                component: () => import("../views/ForntView.vue")
             },
             {
                path: "back",
               name: "back",
                component: () => import("../views/BackView.vue")
             }, {
               path: "mobile",
               name: "mobile",
                component: () => import("../views/PhoneView.vue")
             }, {
               path: "articial",
               name: "articial",
                component: () => import("../views/ArtificialView.vue")
             }, {
               path: "product",
               name: "product",
                component: () => import("../views/ProductView.vue")
             }, {
               path: "design",
               name: "design",
                component: () => import("../views/DesignView.vue")
             }
         ]
        }
      ]
    }
  ]
})

export default router
