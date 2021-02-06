import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Podcast from '../views/Podcast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/podcast/:podcastId',
    name: 'Podcast',
    component: Podcast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
