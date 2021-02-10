import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Podcast from '../views/Podcast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        { name: 'Home' }
      ]
    }
  },
  {
    path: '/podcast/:podcastId',
    name: 'Podcast',
    component: Podcast,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/' },
        { name: 'Podcast', link: '/' },
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
