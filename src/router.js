import VueRouter from 'vue-router'
import homeContainers from './components/tabber/Home.vue'
import menberContainers from './components/tabber/Member.vue'
import shopperContainers from './components/tabber/shopper.vue'
import searchContainers from './components/tabber/Search.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
   {path:'/home',component:homeContainers},
   {path:'/menber',component: menberContainers},
   {path:'/shopper',component:shopperContainers},
   {path:'/search',component:searchContainers}
  ],
  linkActiveClass:'mui-active',
})

// 把路由对象暴露出去
export default router