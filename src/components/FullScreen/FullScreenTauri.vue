<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'

let fullscreen = await appWindow.isFullscreen()
const refresh = getCurrentInstance() as any
const toggle = async() => {
  if (fullscreen === false) {
    await appWindow.setFullscreen(true)
    fullscreen = await appWindow.isFullscreen()
    refresh!.proxy!.$forceUpdate()
  } else {
    await appWindow.setFullscreen(false)
    fullscreen = await appWindow.isFullscreen()
    refresh!.proxy!.$forceUpdate()
  }
}
</script>

<template>
  <a @click="toggle" v-if="fullscreen == false">
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