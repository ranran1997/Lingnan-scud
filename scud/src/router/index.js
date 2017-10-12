import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import homepage from '@/components/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/',
      name: 'homepage',
      component: homepage
    }
  ]
})
