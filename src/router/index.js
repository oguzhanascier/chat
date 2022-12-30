import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatOda from '../views/ChatOda.vue'
import { auth } from '@/firebase/config'



const authControl = (to, from, next) => {
  const kullanici = auth.currentUser

  if (!kullanici) {
    next({ name: 'home' })
  }else{
    next()
  }

}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/chat',
    name: 'chat',
    component: ChatOda,
    beforeEnter: authControl
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
