<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <a @click="toggle" v-if="isFullscreen == false">
    <div class="change-fullscreen">
      <icon-heroicons-outline-arrows-expand />
      <span>开启全屏</span>
    </div>
  </a>
  <a @click="toggle" v-else>
    <div class="change-fullscreen">
      <icon-icon-park-outline-full-screen-play />
      <span>退出全屏</span>
    </div>
  </a>
</template>

<style scoped>
@import '@/assets/css/fullscreen/fullscreen.module.css';
</style>