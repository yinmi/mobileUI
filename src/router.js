import VueRouter from 'vue-router'
import homeContainers from './components/tabber/Home.vue'
import menberContainers from './components/tabber/Member.vue'
import shopperContainers from './components/tabber/shopper.vue'
import searchContainers from './components/tabber/Search.vue'
import newList from './components/newlist/newlist.vue'
import newsInfo from './components/newlist/newsInfo.vue'
import photolist from './components/photos/photolist.vue'
import photoInfo from './components/photos/photoInfo.vue'
import commodity from './components/commodity/commodityList.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
   {path:'/home',component:homeContainers},
   {path:'/menber',component: menberContainers},
   {path:'/shopper',component:shopperContainers},
   {path:'/search',component:searchContainers},
   {path:'/home/newlist',component:newList},
   {path:'/home/newsinfo/:id',component:newsInfo},
   {path:'/home/photolist',component:photolist},
   {path:'/home/photoinfo/:photoid',component:photoInfo},
   {path:'/home/commodity',component:commodity}


  ],
  linkActiveClass:'mui-active',
})

// 把路由对象暴露出去
export default router