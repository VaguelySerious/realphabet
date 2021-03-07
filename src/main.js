import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import { alphabets } from './data/index'

import Start from './views/Start.vue'
import Home from './views/Home.vue'
import Practice from './views/Practice.vue'
import Select from './views/Select.vue'
import Read from './views/Read.vue'
import Learn from './views/Learn.vue'

const Vue = createApp(App)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/:lang',
    name: 'Home',
    component: Home,
  },
  {
    path: '/practice/:lang',
    name: 'Practice',
    component: Practice,
  },
  {
    path: '/select/:lang',
    name: 'Select',
    component: Select,
  },
  {
    path: '/read/:lang',
    name: 'Read',
    component: Read,
  },
  {
    path: '/learn/:lang/:level',
    name: 'Learn',
    component: Learn,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: Vue.component('page-not-found', {
      template: '',
      created: function () {
        // Redirect outside the app using plain old javascript
        window.location.href = '/'
      },
    }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const { lang } = to.params
  const langExists = alphabets.find((a) => a.slug === lang)
  if (to.name !== 'Start' && !langExists) {
    next({ name: 'Start' })
  } else {
    next()
  }
})

Vue.use(router).mount('#app')
