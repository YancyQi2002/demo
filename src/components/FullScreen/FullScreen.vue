<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <a class="mr-4 md:mr-6" @click="toggle" v-if="isFullscreen == false">
    <div class="flex items-center justify-center">
      <icon-heroicons-outline-arrows-expand />
      <span class="ml-2">开启全屏</span>
    </div>
  </a>
  <a class="mr-4 md:mr-6" @click="toggle" v-else>
    <div class="flex items-center justify-center">
      <icon-icon-park-outline-full-screen-play />
      <span class="ml-2">退出全屏</span>
    </div>
  </a>
</template>

<style scoped></style>