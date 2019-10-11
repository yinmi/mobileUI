<template>
 <div class="goods-list">
     <div class="goods-item">
       <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg"
       alt="error">
       <h1 class="title">小米note</h1>
       <div class="info" >
           <p class="price">
               <span class="new">￥1999</span>
               <span class="old">￥2999</span>
           </p>
           <p class='cell'>
              <span>热卖中</span>
              <span>剩60件</span>
           </p>
       </div>
     </div>
    <div class="goods-item">
       <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg"
       alt="error">
       <h1 class="title">小米note</h1>
       <div class="info" >
           <p class="price">
               <span>￥2999</span>
           </p>
           <p class='cell'>
              <span>热卖中</span>
              <span>剩60件</span>
           </p>
       </div>
     </div>
     <div class="goods-item">
       <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg"
       alt="error">
       <h1 class="title">小米note</h1>
       <div class="info" >
           <p class="price">
               <span class="new">￥1999</span>
               <span class="old">￥2999</span>
           </p>
           <p class='cell'>
              <span>热卖中</span>
              <span>剩60件</span>
           </p>
       </div>
     </div>
    
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.goods-list{
     display: flex;
     flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
       margin-bottom: 8px;
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
    .title{
           font-size:14px;
       } 
      img{
        width:100%;
        height: 180px;
      }
      .info{
          position: relative;
          bottom: 0;
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