import Home from '@/views/Home.vue';
import { format } from 'url';
//路径路由  动态路由 命名路由
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
    title:'首页'
    },
    props:route => ({
      food:route.query.food
    }),
    beforeEnter:(to,from,next) => {
      //  if(from.name == 'about') alert('从about来')
      //  else alert('不是从about来')
       next();
    }
  },
  {
   path:'/login',
   name:'login',
   meta:{
    title:'登陆'
    },
   component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    alias:"/ab",
    meta:{
      title:'关于'
      },
    // this generates a separate chunk (about.[hash].js) for this route
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props:{
      food:"apple"
    }
  },
  {
    path:'/order/:id',
    name:'order',
    props:true,
    component: () => import('@/views/order.vue')
  },
  {
    path:'/parent',
    name:'parent',
    component: () => import('@/views/parents.vue'),
    children:[
     {
      path:'child',
      name:'child',
      component:() => import('@/views/child.vue')
     }
    ]
  },
 {
   path:'/news',
   name:'news',
   component:() => import('@/views/news.vue')
 },
 {
  path:'/list',
  name:'list',
  components: {
    default:()=> import('@/views/iphone.vue'),
    email:() =>import('@/views/email.vue')
  }
 },
 {
   path:'/books',
   redirect:'/news'
 },
 {
  path:'*',
  components:() => import('@/views/404page.vue')
 }
]


