//入口文件
import Vue from 'vue'
//注册路由模块
import route from 'vue-router'
Vue.use(route)

import ajax from 'vue-resource'
Vue.use(ajax)

//缩略图
import VuePreview from 'vue-preview'
//Vue.use(VuePreview)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
}) 




//注册组件
/*import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);
Vue.use(Lazyload);*/
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/font/style.css'


//路由
import router from './router.js'




//导入样式
import './lib/mui/css/mui.min.css'
import './css/icons-extra.css'

//主模块
import app from './App.vue'

Vue.http.options.root='http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON=true;



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
//console.log(vm)