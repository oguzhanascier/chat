import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatOda from '../views/ChatOda.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  {
    path: '/chat',
    name: 'chat',
    component: ChatOda
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
