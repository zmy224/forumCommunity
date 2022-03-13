<template>
  <div class="forum-main">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="推荐" name="0">
        <recommendCom />
      </el-tab-pane>
      <el-tab-pane label="我的" name="1"> </el-tab-pane>
      <el-tab-pane label="发布" name="2"> </el-tab-pane>
      <el-tab-pane label="更多" name="3"> </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import recommendCom from "./pages/recommend.vue";
export default defineComponent({
  components: {
    recommendCom,
  },
  setup() {
    let activeName = ref("0");
    function handleClick(tab: string) {
      console.log(tab, "0000");
    }
    return {
      activeName,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.forum-main {
}
</style>
