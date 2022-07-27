<script setup lang="ts">
import { handleClipboard } from "@/utils/clipboard"
  
defineProps<{ msg: string }>()

const copy = (e) => {
  console.log("[ e ] >", e)
  handleClipboard("https://github.com/YancyQi2002/vite3-vue3-template", e)
}
</script>

<template>
  <h4 class="flex items-center justify-center text-2xl">{{ msg }}</h4>

  <div class="card">
    <p>
      Edit&nbsp;
      <kbd class="px-2 py-1 text-base font-extrabold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
        components/HelloWorld.vue
      </kbd>
      &nbsp;to test HMR
    </p>
  </div>

  <p>
    Check out&nbsp;
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
      create-vue
    </a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install&nbsp;
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    &nbsp;in your IDE for a better DX
  </p>

  <div class="flex items-center justify-center m-3">
    <el-button type="primary" @click="copy">
      Coppy this Repositiory Url
    </el-button>
  </div>
</template>

<style scoped>
.card,
p {
  @apply flex items-center justify-center text-lg;
}
</style>
