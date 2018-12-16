import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import User from '@/components/User.vue'
import List from '@/components/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/Login' },
    { path: '/Login', component: Login },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path: '/User',
          component: User
        },
        {
          path: '/List',
          component: List
        }
      ]
    }
  ]
})
