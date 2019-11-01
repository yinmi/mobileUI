<template>
  <div>
    <transition @before-enter="breforeEnter" @enter="enter" @after-enter="afterEnter">
      <div id="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
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
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            销售价：
            <span>￥{{goodsinfo.sell_price}}</span> &nbsp; 市场价：
            <del>￥{{goodsinfo.market_price}}</del>
          </div>
          <div class="goodsCount">
            <span>购买数量:</span>

            <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1'>
              <button class="mui-btn mui-btn-numbox-minus"  type="button">-</button>
              <input class="mui-input-numbox" type="number"  value="1" @change="countchanged" ref="numberbox">
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
          </div>
          <div>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShop">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <div>
          <mt-button type="default" size="large" @click="goDesc(id)" plain>图文介绍</mt-button>
        </div>
        <div>
          <mt-button type="danger" size="large" @click="goComment(id)" plain>商品评论</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'
export default {
  data() {
    return {
      id: this.$route.params.goodsid,
      goodsinfolist: [],
      goodsinfo: {},
      ballFlag: false,
      mallValue:1,
      max:0,
    };
  },
 beforemounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  created() {
    this.getgoodsimglist();
    this.getgoodinfo();
  },


  watch:{
   max:function(newVal,oldVal){
     mui(".mui-numbox").numbox().setOption("max", newVal);
   }
  },
  methods: {
    getgoodsimglist() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) this.goodsinfolist = result.body.message;
        else console.log("error");
      });
    },

    getgoodinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0)
        {
          this.goodsinfo = result.body.message[0];
          this.max=result.body.message[0].stock_quantity;
        } 
        else console.log("error");
      });
    },
    goDesc(id) {
      this.$router.push({ name: "commodictDsc", params: { goodid: id } });
    },
    goComment(id) {
      this.$router.push({ name: "commodictComment", params: { goodid: id } });
    },
    addToShop() {
      this.ballFlag = true;
      
      let goodsinfo={id:this.id,count:this.mallValue,price:this.goodsinfo.sell_price,selected:true};
      this.$store.commit('addToCar', goodsinfo);




    },
    breforeEnter(el) {
    
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
     let ball=this.$refs.ball.getBoundingClientRect();
     let ballend=document.getElementById('ballend').getBoundingClientRect();

     let x=ballend.left-ball.left+30;
     let y=ballend.top-ball.top;

    


      el.offsetWidth;
      el.style.transform = 'translate('+x+'px,'+y+'px)';
      el.style.transition = "all 0.5s ease 0s ";
      done();
    },
    afterEnter(el) {
      this.ballFlag = false;
    },
    countchanged(){
     // console.log(this.$refs.numberbox.value)
      this.mallValue=this.$refs.numberbox.value;
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
  img {
    width: 100%;
    height: 100%;
  }
}

.price {
  font-size: 14px;
  span {
    font-size: 16px;
    color: red;
  }
}
.goodsCount {
  margin: 10px 0;
  span {
    font-size: 20px;
  }
}
.mui-card-footer {
  display: block;
  div {
    margin: 15px 0;
  }
}
#ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 461px;
  left: 171px;
 
}
</style>