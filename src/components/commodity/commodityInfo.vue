<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner1">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in goodsinfolist" :key="index">
              <img :src="item.src" alt="error" />
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <div class="price">    
            销售价：<span>￥1999</span> &nbsp; 市场价：<del>￥2999</del>
            </div>
            <div class="goodsCount">
             <span>购买数量:</span>
             <div class="mui-numbox" data-numbox-min="1" data-numbox-max="20">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number"  value="1"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>   
            </div>
            <div>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" >加入购物车</mt-button>
            </div>
        </div>
      </div>
    
    </div>

    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.goodsid,
      goodsinfolist: []
    };
  },
  created() {
    this.getgoodsinfolist();
  },
  methods: {
    getgoodsinfolist() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) this.goodsinfolist = result.body.message;
        else console.log("error");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-card-content-inner1 {
    position: relative;
    padding: 15px;
    height: 100%;
    height: 300px;
    img{
        width: 100%;
        height: 100%;
    }
}

.price{
    font-size:14px;
    span{
        font-size:16px;
        color:red;
    }
}
.goodsCount{
    margin: 10px 0;
    span{
        font-size:20px;
    }
}
</style>