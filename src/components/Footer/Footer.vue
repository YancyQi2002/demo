<script setup lang="ts">
import FullScreen from '@components/FullScreen/FullScreen.vue'
import FullScreenTauri from '@components/FullScreen/FullScreenTauri.vue'
import wtfpl from '@/assets/wtfpl.svg'

const tauriVer = localStorage.getItem('tauriVersion')?.toString()

if (tauriVer === undefined) {
  localStorage.setItem('tauriVersion', '当前平台版本未使用 Tauri 进行构建')
}
</script>

<template>
  <footer class="sr-only sm:not-sr-only border-t border-gray-200 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="flex items-center justify-center tracking-wide">
      &copy; 2022&nbsp;
      <a href="https://yx-blog.vercel.app" target="_blank" class="no-underline">
        Yancy Qi
      </a>
      . All Rights Reserved.&nbsp;
      <a href="http://www.wtfpl.net/">
        <img :src="wtfpl" alt="WTFPL" />
      </a>
    </span>
    <ul>
      <li>
        <suspense>
          <FullScreen v-if="tauriVer === '当前平台版本未使用 Tauri 进行构建'" />
          <FullScreenTauri v-else />
        </suspense>
      </li>
    </ul>
  </footer>
  <footer class="not-sr-only sm:sr-only rounded-lg dark:bg-gray-900">
    <span class="block text-center">
      &copy; 2022
      <a href="https://yx-blog.vercel.app">
        Yancy Qi
      </a>
      . All Rights Reserved.
    </span>
  </footer>
</template>

<style scoped>
@import '@/assets/css/footer/footer.module.css';
</style>