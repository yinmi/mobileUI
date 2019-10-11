<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a @click="getAllImage(item.id)" :class="['mui-control-item',item.id===0? 'mui-active':'']"  data-wid="tab-top-subpage-1.html" v-for="item in imagecategory " :key="item.id">{{item.title}}</a>
          
        </div>
        <div >
          <ul class="photolist">
            <router-link tag="li" v-for="item in imagelist" :key="item.id" :to="'/home/photoinfo/'+item.id">
             <img v-lazy="item.img_url">
             <div class="info">
               <h1 class="title">{{item.title}}</h1>
                <p class="body">{{item.zhaiyao}}</p>
             </div>
              </router-link >
         </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
//初始化滑动模块

export default {
  data() {
    return {
      imagecategory:[],
      imagelist:[],
      imageId:0
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created(){
      this.getAllCategory();
      this. getAllImage(0);
  },
  methods: {
    getAllCategory(){
      this.$http.get("api/getimgcategory").then(result=>
      {
        if(result.body.status===0)
        {
         result.body.message.unshift({title:"全部",id:0});
         this.imagecategory=result.body.message;
        }else
        {
          console.log('error')
        }
      })
    },
    getAllImage(cateId){
      this.$http.get('api/getimages/'+cateId).then(result=>
        {
          if(result.body.status===0)
           this.imagelist=result.body.message;
           else
           console.log("error")
        }
      )
    }

  }
};
</script>

<style lang="scss" scoped>
*{
  touch-action:pan-x;
}
.photolist{
  list-style: none;
  margin: 0;
  padding:10px;
  margin-top:40px;
  
  li{
    position: relative;
    background-color: #999;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 9px #999;
  image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
  
} 
img{
    width: 100%;
    height:100%;
  }}
}
.info{
  position: absolute;
  bottom: 0;
  color:white;
  text-align:left;
  background-color:rgba(31, 31, 31, 0.4);
  max-height: 140px;
  .title{
    font-size:16px;
  }
  .body{
    color:white;
    font-size:14px;
  }
}

</style>