<template>
  <div class='app-container'>
    <!--顶部-->
    <mt-header fixed title="黑马程序员"></mt-header>
    <!--中间-->
	<transition>
	 <router-view></router-view>
	</transition>
   
    <!--底部-->
   <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/menber">
				<span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopper">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>

  </div>
</template>

<script>

</script>


<style lang="css" scoped>
.app-container{
  padding-top:40px;
  background-color:white;
  overflow-x: hidden;
  padding-bottom: 50px;
}
.v-enter{
   opacity: 0;
   transform: translateX(100%)
}
.v-leave{
	 opacity: 0;
   transform: translateX(-100%)
}

.v-enter-active,.v-leave-active{
transition: all 0.6s ease
}
</style>
