//入口文件
import Vue from 'vue'
//注册路由模块
import route from 'vue-router'
Vue.use(route)

import ajax from 'vue-resource'
Vue.use(ajax)

//初始化时使用本地数据
var car=JSON.parse(localStorage.getItem('car')|| '[]')
car.count=parseInt(car.count)

//使用Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
 var  store=new Vuex.Store({
   state:{
    car:car,
   },
   mutations:{
     remove(state,id){
     state.car.some((item,i)=>{
       if(item.id=id)
       {
         state.car.splice(i,1);
         return true
       }

     })
     //同步到本地
     localStorage.setItem('car',JSON.stringify(state.car))
     },
     addToCar(state,goodsinfo){

      let flag=false;
       state.car.some(item=>
        {
          if(item.id==goodsinfo.id){
            item.count+=parseInt(goodsinfo.count);
            flag=true;
            return true;

          }
          
        })

        if(!flag){
          state.car.push(goodsinfo)
        }

        localStorage.setItem('car',JSON.stringify(state.car))
     },
     updatedgoodinfo(state,goodsinfo) {
       state.car.some(item=>{
         if(item.id==goodsinfo.id)
         {
           item.count=parseInt(goodsinfo.count)
           return true
         }

         localStorage.setItem('car',JSON.stringify(state.car))
       })
     },

    updatedgoodsselected(state ,id){
     state.car.some(item=>{
       if(item.id==id)
       {
         item.selected=!item.selected
       }

     })

     localStorage.setItem('car',JSON.stringify(state.car))
    },
  



   },
   getters:{
     getAllCount(state)
     {
       let count=0;
       state.car.forEach(item=>{
         count+=parseInt(item.count)
       })
       console.log(count)
       return count
     },
     getGoodsCount(state){
       let count={}
       state.car.forEach(item=>
        {
          count[item.id]=item.count
        })
        return count
     },
     getgoodsSelected(state){
       var o={}
       state.car.forEach(item=>{
         o[item.id]=item.selected
       })
       return o
     },
     
  getgoodspriceSUM(state){
    var o={
      count:0,
      amount:0,

    }

    state.car.forEach(item=>{
      if(item.selected)
      {
        o.count+=parseInt(item.count)
        o.amount+=item.price*item.count
      }
      
    })

    return o;
  }
   

}
 
})

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
  store,
})
//console.log(vm)