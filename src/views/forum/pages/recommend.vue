<template>
    <div class="forum-recommend">
     <forumItem />

   
    </div>
</template>

<script lang="ts">

import Confirm from '@/common/confirm'

import { defineComponent,onMounted,ref } from 'vue'
import forumItem from '../components/forumItem.vue'


export default defineComponent({
    components:{
        forumItem
    },
    setup() {
      
        onMounted(()=>{
        //  let p  = new Confirm({message:'确定删除吗'});
        //  p.show();
        // getFileInfo();
        })
        //  获取文件信息
      
    },
   
  
})
</script>

<style lang="scss" scoped>
 .forum-recommend{

 }
</style>
