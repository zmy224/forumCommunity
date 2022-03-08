<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <asideTemplate />
      </el-aside>
      <el-container>
        <el-header>
          <headerTemplate />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import headerTemplate from "@/layout/header.vue";
import asideTemplate from "@/layout/aside.vue"; 
export default defineComponent({
  name: "HomeView",
  components: {
    headerTemplate,
    asideTemplate
  },
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.home {
  min-height:100vh;
  .aside {
    width:200px;
    min-height:100vh;
    background-color: rgb(12, 3, 63);
    color:#fff;
  }
}
</style>
