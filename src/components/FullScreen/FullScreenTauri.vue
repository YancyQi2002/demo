<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

const fullscreen = await appWindow.isFullscreen()
const toggle = async() => {
  fullscreen === false
    ? await appWindow.setFullscreen(true)
    : await appWindow.setFullscreen(false)
}
</script>

<template>
  <a class="mr-4 md:mr-6" @click="toggle" v-if="fullscreen == false">
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