<template>
  <div class="forum-item">
    <div class="title">车臣为什么要替俄罗斯进攻乌克兰？</div>
    <div class="content">
      <p>提起车臣，就让我想到了普京的那句霸气侧漏的名句</p>
      <p>原谅他们是上帝的事情，我们的任务就是送他们去见上帝</p>
      <p>
        在长期的战争中，车臣人与俄罗斯人结下了血海深仇，后来沙俄虽然强行吞并了车臣，但是由于风俗习惯，宗教信仰差距巨大，车臣人从来就没有臣过。
      </p>
    </div>
    <div class="forum-action">
      <div class="action"><img src="@/assets/forum/icons/dianzan.png" class="ac-img">0赞同</div>
      <div  class="action"><img src="@/assets/forum/icons/pinglun.png" class="ac-img">20条评论</div>
      <div  class="action"><img src="@/assets/forum/icons/fenxiang.png" class="ac-img">分享</div>
      <div class="action"><img src="@/assets/forum/icons/shoucang.png" class="ac-img">收藏</div>
      <div class="action"><img src="@/assets/forum/icons/dangyuanfuwu.png" class="ac-img">夏欢</div>
      <div class="action">...</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, context) {

  },
});
</script>

<style lang="scss" scoped>
.forum-item {
//   height: 400px;
  border-bottom: 1px solid #ececec;
  text-align: left;
  font-size: 14px;
  .title {
    font-weight: 800;
    line-height: 32px;
    color: #121212;
    font-size: 18px;
  }
  .forum-action {
    display: flex;
    .action {
        padding:8px;
        .ac-img {
            width: 20px;
            height: 20px;
            vertical-align: top;
            margin-right: 10px;
        }
    }
  }
}
</style>
