import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import homepage from '@/components/homepage';
import delivery from '@/components/delivery'
import errand from '@/components/errand'
import entrance from '@/components/entrance'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'entrance',
      component: entrance
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage,
      meta: { auth: false }
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: delivery
    },
    {
      path: '/errand',
      name: 'errand',
      component: errand
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { auth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { auth: false }
    }
  ]
})
