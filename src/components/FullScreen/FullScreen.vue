<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <div>
    <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800" @click="toggle" v-if="isFullscreen == false">
      <div class="flex items-center justify-center">
        <icon-heroicons-outline-arrows-expand />
        <span class="ml-2">开启全屏</span>
      </div>
    </button>
    <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800" @click="toggle" v-else>
      <div class="flex items-center justify-center">
        <icon-icon-park-outline-full-screen-play />
        <span class="ml-2">退出全屏</span>
      </div>
    </button>
  </div>
</template>

<style scoped></style>