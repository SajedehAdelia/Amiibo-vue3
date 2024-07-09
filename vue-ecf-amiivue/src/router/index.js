import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import List from '../pages/List.vue'
import Detail from '../pages/Detail.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/liste', component: List },
  { path: '/detail/:id', component: Detail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
