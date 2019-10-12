<template>
 <div class="goods-list">
     <router-link :to="'/home/commodityInfo/'+item.id" class="goods-item" v-for="(item ,index) in goodsList" :key="index">
       <img :src="item.img_url" alt="error">
       <h1 class="title">{{item.title}}</h1>
       <div class="info" >
           <p class="price">
               <span class="new">{{item.sell_price}}</span>
               <span class="old">{{item.market_price}}</span>
           </p>
           <p class='cell'>
              <span>热卖中</span>
              <span>剩{{item.stock_quantity}}件</span>
           </p>
          </div> 
       </router-link>
     
    <mt-button type="danger" size="large" @click="getmoregood" plain>加载更多</mt-button>
 </div>
</template>

<script>
export default {
  data(){
    return {
      goodsList:[],
      pageindex:1,
    }
  },
   created(){
this.getGoodsList();
  },
  methods:{
    getGoodsList(){
      this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
        console.log(result.body)
        if(result.body.status===0)
        this.goodsList= this.goodsList.concat(result.body.message);
         else
         console.log('error');
      })
    },
    getmoregood(){
       this.pageindex++;
       this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
        console.log(result.body)
        if(result.body.status===0)
        this.goodsList= this.goodsList.concat(result.body.message);
         else
         console.log('error');
       })
    }
    }

}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

    .goods-item{
          width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;

    .title{
           font-size:14px;
       } 
      img{
        width:100%;
        height: 180px;
      }
      .info{
          position:relative;
             bottom: 0px;
           background-color:#eee;
           p{
             
               margin:0;
               padding:5px;

           }
          .price{
              .new{
                color: red;
                 font-weight: bold;
                font-size:16px;
              }
              .old{
                text-decoration: line-through;
              }
            
          }          
          .cell{
             display: flex;
             flex-wrap: wrap;
              justify-content: space-between;
          }
      }
      
    }
}

</style>