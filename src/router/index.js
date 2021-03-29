import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Table from '@/views/Table'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/', component: Layout, name: 'layout', children: [{ path: '', component: Table, name: 'table' }] }
]

const router = new VueRouter({
  routes
})

export default router
