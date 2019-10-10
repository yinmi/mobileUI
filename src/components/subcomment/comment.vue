<template>
  <div class="cmt">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要品论" v-model="comment" rows="5" maxlength="200"></textarea>
    <mt-button type="primary" size="large" @click="addcomment">发表评论</mt-button>
    <div class="cmt-list" v-for="(item,index) in contents" :key="item.add_time">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp; 用户：{{item.user_name}} &nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content==='undifined' ? '无' : item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getmore" plain>加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageindex: 1,
      contents: [],
      comment: ""
    };
  },
  created() {
    this.getComments();
  },
  props: ["titleId"],
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.titleId + "?pageindex=" + this.pageindex)
        .then(result => {
          //console.log(result.body)
          if (result.body.status === 0)
            this.contents = this.contents.concat(result.body.message);
          else Toast("获取失败");
        });
    },
    getmore() {
      this.pageindex++;
      this.getComments();
    },
    addcomment() {
      if (this.comment.trim().length === 0) {
        return Toast("评论不能为空");
      }
      this.$http
        .post("api/postcomment/" + this.titleId, {
          content: this.comment.trim()
        })
        .then(result => {
         // console.log(result);
          if (result.body.status ===0)
          {
             let cmt={user_name:'匿名用户',add_time:Date.now(),content:this.comment.trim()} ;
             this.contents.unshift(cmt);
             this.comment="";
          }
           else
          this.comment = "error";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
  }
  .cmt-list {
    .cmt-item {
      font-size: 14px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        text-indent: 2em;
        line-height: 35px;
      }
    }
  }
}
</style>