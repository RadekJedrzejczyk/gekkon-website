import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
