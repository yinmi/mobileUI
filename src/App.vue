<template>
  <div class="app-container">
    <!--顶部-->
    <mt-header fixed title="黑马程序员">
      <span @click="goback" slot="left" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!--中间-->
    <transition>
      <router-view></router-view>
    </transition>

    <!--底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/menber">
        <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopper">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{this.$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label" id="ballend">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
       flag: true
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  created() {
     this.flag = this.$route.path === "/home" ? false : true;
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag=false
      }else{
        this.flag=true
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  background-color: white;
  overflow-x: hidden;
  padding-bottom: 50px;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave {
  opacity: 0;
  transform: translateX(-100%);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
.mui-bar-tab.mui-tab-item-llb.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
