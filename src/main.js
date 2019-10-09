//入口文件
import Vue from 'vue'
//注册路由模块
import route from 'vue-router'
Vue.use(route)

import ajax from 'vue-resource'
Vue.use(ajax)

//注册组件
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button)



//路由
import router from './router.js'




//导入样式
import './lib/mui/css/mui.min.css'
import './css/icons-extra.css'

//主模块
import app from './App.vue'

Vue.http.options.root='http://www.liulongbin.top:3005/'

//时间插件
import moment from 'moment'
//全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
   return   moment(dateStr).format(pattern);
     
})

var vm=new Vue({
  el:'#app',
  render: c=>c(app),
  router,
  
})