import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLogin from '../components/general/app-login.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'app-main-view',
    component: AppLogin
  },
  {
    path: '/admin/users',
    name: 'app-admin-users-list',
    component: () => import('./../components/admin/users/app-admin-users-list.vue')
  },
  {
    path: '/admin/change-password',
    name: 'app-admin-change-password',
    component: () => import('./../components/admin/password/app-admin-change-password.vue')
  },
  {
    path: '/admin/roles',
    name: 'app-admin-roles-list',
    component: () => import('./../components/admin/roles/app-admin-roles-list.vue')
  },
  {
    path: '/admin/countries',
    name: 'app-admin-countries-list',
    component: () => import('./../components/admin/countries/app-admin-countries-list.vue')
  },
  {
    path: '/admin/airlines',
    name: 'app-admin-airlines-list',
    component: () => import('./../components/admin/airlines/app-admin-airlines-list.vue')
  },
  {
    path: '/admin/doors',
    name: 'app-admin-doors-list',
    component: () => import('./../components/admin/doors/app-admin-doors-list.vue')
  },
  {
    path: '/client/home',
    name: 'app-client-profile',
    component: () => import('./../components/client/app-client-profile.vue')
  },
  {
    path: '/admin/journal',
    name: 'app-admin-journal-list',
    component: () => import('./../components/admin/journal/app-admin-journal-list.vue')
  },
  {
    path: '/admin/logs',
    name: 'app-admin-log-list',
    component: () => import('./../components/admin/errorLog/app-admin-log-list.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/client/history/trips',
    name: "app-history-trips",
    component: () => import('../components/client/app-history-trips.vue')
  },
  {
    path: '/client/payment',
    name: "app-client-pay",
    component: () => import('../components/client/app-client-pay.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router