import Vue from 'vue'
import Router from 'vue-router'

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
export const indexRouter = [
  {
   path:'menu',
   name:'菜单列表',
   component:menu
  },
  {
   path:'role',
   name:'角色列表',
   component:role
  },
  {
   path:'user',
   name:'管理员列表',
   component:user
  },
  {
   path:'classify',
   name:'商品分类列表',
   component:classify
  },
  {
   path:'spec',
   name:'商品规格列表',
   component:spec
  },
  {
   path:'goods',
   name:'商品列表',
   component:goods
  },
  {
   path:'member',
   name:'会员列表',
   component:member
  },
]
export default new Router({
  routes: [
    {
      path: '/',
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
})
