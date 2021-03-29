import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import userPage from '../views/user-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: homePage
  },
  {
    path: '/user/:id',
    name: 'user-page',
    component: userPage,
    // children: [
    //   {
    //     path: '/:type?',
    //     name: 'user-posts',
    //     component: miniPostList
    //   }
    // ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
