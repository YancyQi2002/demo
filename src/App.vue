<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { invoke } from '@tauri-apps/api/tauri'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    invoke('close_splashscreen')
  }, 10000)
})
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
