<template>
  <div class='app-container'>
    <!--顶部-->
    <mt-header fixed title="黑马程序员"></mt-header>
    <!--中间-->
    <router-view></router-view>
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
  background-color:none;
}

</style>
