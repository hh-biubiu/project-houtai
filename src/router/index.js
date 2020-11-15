import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js'
Vue.use(Router)
import login from '../pages/login/login';
import index from '../pages/index/index';
import home from '../pages/index/home';
import menu from '../pages/menu/menu';
import role from '../pages/character/character';
import user from '../pages/admin/admin';
import classify from '../pages/goodsClassify/goodsClassify';
const spec = () => import('../pages/goodsSpec/spec');
const goods = () => import('../pages/goodsManage/manage');
const member = () => import('../pages/member/member');
const slide = () => import('../pages/slide/slide');
const seckill = () => import('../pages/seckill/seckill')
export const indexRouter = [
  {
   path:'menu',
   name:'菜单列表',
   component:menu,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'role',
   name:'角色列表',
   component:role,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  } 
  },
  {
   path:'user',
   name:'管理员列表',
   component:user,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'classify',
   name:'商品分类列表',
   component:classify,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'spec',
   name:'商品规格列表',
   component:spec,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'goods',
   name:'商品列表',
   component:goods,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'member',
   name:'会员列表',
   component:member,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'slide',
   name:'轮播图列表',
   component:slide,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
  {
   path:'seckill',
   name:'秒杀活动',
   component:seckill,
   beforeEnter: (to, from, next) => {
    if(from.path.includes('/index')){
          next()
    }else{
      next('/login')
    }
  }
  },
]
const router = new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      name: '首页',
      component: index,
      children:[
        {
          path:'',
          redirect:'home'
        },
        {
          path:'home',
          component:home
        },
      
        ...indexRouter
      ]
    },
  ]
});

//全局守卫
router.beforeEach((to,from,next)=>{
  console.log(store); 
  // 直接去登录的
  if(to.path=='/login'||to.path=='/'){
      next()
      return
  }

  // 不是去登录，需要先判断是否登录过，如果登录直接进入，否则需要跳转到登录页面
   if(store.state.admin.list.menus){
     next()
   }else{
     this.$router.push('/login')
   }
})
export default router;
