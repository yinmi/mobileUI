<template>
<div class="newsInfo">
    <h3 class="title">
        {{content.title}}
    </h3>
  <p class="subtitle">
   <span>发表时间：{{content.add_time | dateFormat}}</span>
   <span>点击次数：{{content.click}}</span>
  </p>
  <hr />
  <div class="content" v-html="content.content">
  
  </div>
  <div>
      <comment  v-bind:titleId="id"></comment>
  </div>
</div>
  
</template>

<script>
import comments from '../subcomment/comment.vue'
import {Toast} from 'mint-ui'
export default {
  data(){
      return{
          id:this.$route.params.id,
          content:{}
      }
  },
  created(){
      this.getNewsInfo();
  },
  methods: {
    getNewsInfo(){
        this.$http.get('api/getnew/'+this.id).then(result=>{
        console.log(result.body)
        if(result.body.status===0)
        this.content=result.body.message[0]
        else
        Toast("获取失败")
        })
    }
},
components:{
    'comment':comments
}

}

</script>

<style lang="scss" >
 .newsInfo{
   padding: 0 4px;
   .title{
       font-size:16px;
       text-align: center;
       margin:15px 0;
       color:red;
   } 
   .subtitle{
       font-size:13px;
       color:#22aff2;
       display: flex;
       justify-content: space-between;
       

   } 
   .content{
        img{
            width: 100%;
        }
   }
 }
</style>