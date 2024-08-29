import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AppSystem from '@/views/Projects/AS.vue'
import Zyone from '@/views/Projects/Zyone.vue'
import HCT from '@/views/Projects/HCT.vue'
import CCMF from '@/views/Projects/CCMF.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Projects', component: Home},
    { path: '/as', name: 'Appointment System', component: AppSystem},
    { path: '/ccmf', name: 'CCMF', component: CCMF},
    { path: '/hct', name: 'HCT', component: HCT},
    { path: '/zy', name: 'Zyone', component: Zyone},
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
