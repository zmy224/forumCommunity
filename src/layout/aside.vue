<template>
  <div>
    <div
      v-for="item in data.menuArrays"
      :key="item.title"
      class="menu-item"
      @click="goToPath(item.path)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang='ts' >
import { defineComponent, onMounted, reactive, toRef } from "vue";
import { useRouter } from "vue-router";
interface menuItem {
  title: string;
  path: string;
}
interface reactiveData {
  menuArrays: menuItem[];
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const data: reactiveData = reactive({
      menuArrays: [],
    });
    function getMenuArray() {
      data.menuArrays = [
        {
          title: "论坛首页",
          path: "/forum",
        },
        {
          title: "echart首页",
          path: "/echarts",
        },
        {
          title: "Vdom",
          path: "/vdom",
        },
      ];
    }
    function goToPath(data: string): void {
      router.push({
        path: data,
      });
    }
    onMounted(() => {
      getMenuArray();
    });
    return {
      data,
      goToPath,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu-item {
  padding: 8px 5px;
}
</style>
