import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/harmonogram',
      name: 'schedule',
      component: () => import('@/views/ScheduleView.vue')
    },
    {
      path: '/regulamin',
      name: 'regulations',
      component: () => import('@/views/RegulatonsView.vue')
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/zapisy',
      name: 'submissions',
      component: () => import('@/views/SubmissionView.vue')
    },
    {
      path: '/postery',
      name: 'posters',
      component: () => import('@/views/PosterView.vue')
    },
    {
      path: '/pytania',
      name: 'q&a',
      component: () => import('@/views/Q&AView.vue')
    },
    {
      path: '/:notFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (from.name === undefined) {
      return { top: 0 }
    }
    return { el: 'main', top: 120 }
  }
})

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
