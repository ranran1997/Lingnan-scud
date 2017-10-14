import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import homepage from '@/components/homepage'
import delivery from '@/components/delivery'
import errand from '@/components/errand'

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
    }
  ]
})
