<template>
<div>
    <h1 class="title">{{photoinfo.title}}</h1>
    <p class="subtitle"><span>{{photoinfo.add_time | dateFormat}}</span><span>{{photoinfo.click}}</span></p>
   
   <vue-preview :slides="slide1" @close="handleClose" ></vue-preview>
   
    <div class="content" v-html="photoinfo.content"></div>
     
    
     <comment  v-bind:titleId="id"></comment>



</div>
  
</template>

<script>
import comments from '../subcomment/comment.vue'
export default {
data(){
    return {
       id:this.$route.params.photoid,
       photoinfo:{},
        slide1: []

    }
},
created(){
 this.getphotoinfo(),
 this.getsmallimage()
},
methods:{
     handleClose () {
        console.log('close event')
      },
  getphotoinfo(){
      this.$http.get('api/getimageInfo/'+this.id).then(result=>
      {
         //console.log(result.body)
         if(result.body.status===0)
         {
            this.photoinfo=result.body.message[0]; 
         }else
         {
             console.log('error')
         }
      })
  },
  getsmallimage(){
      this.$http.get('api/getthumimages/'+this.id).then(result=>{
         
          if(result.body.status===0)
          {
            result.body.message.forEach(item=> 
            {
                console.log(item)
             let  image={src: item.src,
            msrc:item.src,
            alt: 'error',
            title: 'picture',
            w: 600,
            h: 400}

            this.slide1.push(image);
            })
          }
      })
  }
},
components:{
'comment':comments
}

}
</script>

<style lang="scss" scoped>
.title{
    font-size:16px;
    text-align:center;
    color:#26a2ff;
    margin: 15px 0;
}
.subtitle{
   display: flex;
   justify-content: space-between;
   padding:10px;
    
}
.content{
      padding:10px;
}

</style>