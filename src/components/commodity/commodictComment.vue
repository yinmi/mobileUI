<template>
   <comment  v-bind:titleId="id"></comment>
</template>

<script>
import comments from '../subcomment/comment.vue'
export default {
data(){
    return{
        id:this.$route.params.goodid
    }
},
components:{
    'comment':comments
}
}
</script>

<style>

</style>