
import {
    createRouter,//用来新建路由实例
    createWebHashHistory,//用来配置我们内部使用 hash 模式的路由，也就是 url 上会通过 # 来区分
  } from 'vue-router'

// import {
//   createRouter,
//   createWebHashHistory,
// } from './grouter/index'

  import Home from '../pages/home.vue'
  import About from '../pages/about.vue'
  import Rate from '../pages/rate.vue'
  import SelfIncreasing from '../pages/selfIncreasing.vue'
  import TodoList from '../pages/todoList.vue'
  
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate
    },
    {
      path: '/selfIncreasing',
      name: 'SelfIncreasing',
      component: SelfIncreasing
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  