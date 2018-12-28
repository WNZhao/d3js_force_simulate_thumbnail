import Vue from 'vue'
import Router from 'vue-router'
import d3Force from '@/components/d3_force'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: d3Force
    }
  ]
})
