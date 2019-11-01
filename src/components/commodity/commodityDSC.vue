<template>
  <div class="info">
    <h1>{{info.title}}</h1>
    <hr />
    <div v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    this.getGoodsDsc();
  },
  methods: {
    getGoodsDsc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.goodid)
        .then(result => {
          if (result.body.status === 0) this.info = result.body.message[0];
          else console.log("error");
        });
    }
  }
};
</script>

<style lang="scss" >
.info {
  padding: 10px;
  h1 {
    font-size: 16px;
  }
  div {
      
    font-size: 14px;
    p {
      margin: 0;
      .gomeImgLoad{
        width: 100%;
       
      }
    }
  }
}
</style>