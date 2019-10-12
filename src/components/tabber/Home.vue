<template>
  <div>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!--按钮-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <span class="mui-icon "> <img src="../../images/menu1.png" alt="" /></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon ">
           <img src="../../images/menu2.png" alt="" />
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/commodity">
          <span class="mui-icon "><img src="../../images/menu3.png" alt="" /></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <span class="mui-icon "><img src="../../images/menu4.png" alt="" /></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon "><img src="../../images/menu5.png" alt="" /></span>
          <div class="mui-media-body">视屏专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon "><img src="../../images/menu6.png" alt="" /></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotulist: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http
        .get("api/getlunbo")
        .then(result => {
          if (result.body.status === 0) {
            this.lunbotulist = result.body.message;
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>

<style lang="css" scoped>
.mint-swipe {
  height: 200px;

}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-icon img{
  width: 60px;
  height: 60px;
}

</style>