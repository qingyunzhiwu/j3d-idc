import Vue from 'vue'
import Router from 'vue-router'
import IDC from '@/components/IDC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IDC',
      component: IDC
    }
  ]
})
