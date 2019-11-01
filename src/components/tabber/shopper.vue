<template>
  <div>
    <div>

      <div class="mui-card" v-for="item in shopperList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="shop">
              <mt-switch v-model="$store.getters.getgoodsSelected[item.id]"
               @change="slchange(item.id,$store.getters.getgoodsSelected[item.id])"></mt-switch>

              <img :src="item.thumb_path" alt="error" />
              <div class="shop-content">
                <h1>{{item.title}}</h1>
                <div class="inner">
                  <span>￥{{item.sell_price}}</span>
                 <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max="100">
              <button class="mui-btn mui-btn-numbox-minus"  type="button">-</button>
              <input class="mui-input-numbox" type="number"  :value="$store.getters.getGoodsCount[item.id]" @change="countchange(item.id)" ref="numberbox">
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
                  <a href="#" @click.prevent="remove(item.id)">删除</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="account">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品<span>{{$store.getters.getgoodspriceSUM.count}}</span>件总价￥<span>{{$store.getters.getgoodspriceSUM.amount}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
          </div>
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
      shopperList:[]
    };
  },
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },

  created() {
    this.getAllshopper();
  },
  methods: {
  countchange(id){
     this.$store.commit('updatedgoodinfo',{
       id:id,
       count:this.$refs.numberbox.value
     })


  },
    getAllshopper() {
      console.log(this.$store.state.car);
      let idArr = [];
      //拼接Id
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      //判断id有无
      if (idArr.length <= 0) return;
      // 获取数据
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          // console.log(result.body)
          if (result.body.status === 0) {
            this.shopperList=result.body.message;
          } else {
            console.log("error");
          }
        });
      //console.log(this.shopperList);
    },
      
      remove(id,index){
       this.shopperList.splice(index,1); 

       this.$store.commit("remove",id)
      },
 slchange(id,val){
console.log(id+"---"+val)

this.$store.commit("updatedgoodsselected",id);
 },


  }
};
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  align-items: center;
  width: 100%;

  img {
    width: 60px;
    height: 60px;
  }
  h1 {
    margin-bottom: 15px;
    font-size: 14px;
  }
  .inner {
    span {
      color: red;
      font-weight: bold;
    }
  }
}
.account{
  display: flex;
    justify-content: space-between;
    align-items: center;
   .left{
    p{
      span{
      color:red;
      }
    }
  }
}
</style>