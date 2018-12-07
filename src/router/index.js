import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util';
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes
})

const HAS_LOGIN = true;

router.beforeEach((to,from,next) => {
  to.meta && setTitle(to.meta.title)
  if(to.name !== 'login') {
     if(HAS_LOGIN) next()
     else next({name:'login'})
  }else{
     if(HAS_LOGIN) next({name:'home'})
     else next()
  }

})

router.beforeResolve((to,from,next) => {
    next();
})

router.afterEach((to,from) => {
   //load=false;
})

export default router;
