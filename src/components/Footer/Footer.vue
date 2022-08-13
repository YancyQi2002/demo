<script setup lang="ts">
import FullScreen from '@components/FullScreen/FullScreen.vue'
import FullScreenTauri from '@components/FullScreen/FullScreenTauri.vue'

const tauriVer = localStorage.getItem('tauriVersion')

const changeScreen = document.getElementById('changescreen')
const changeScreenTauri = document.getElementById('changescreentauri')

if (tauriVer !== '当前平台版本未使用 Tauri 进行构建') {
  changeScreen.classList.add('hidden')
  changeScreenTauri.classList.remove('hidden')
}
</script>

<template>
  <footer class="sr-only sm:not-sr-only border-t border-gray-200 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span>&copy; 2022 <a href="https://yx-blog.vercel.app" target="_blank" class="no-underline">Yancy Qi</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-0 text-sm text-gray-500 dark:text-gray-400 no-underline">
      <li class="flex items-center">
        <FullScreen id="changescreen"/>
        <FullScreenTauri id="changescreentauri" class="hidden" />
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
footer {
  @apply fixed bottom-0 left-0 z-20 p-4 w-full bg-white shadow select-none;
}
footer > span {
  @apply text-sm text-gray-500 dark:text-gray-400;
}
</style>