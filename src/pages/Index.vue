<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import FullScreen from '@/components/FullScreen/FullScreen.vue'
</script>

<template>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="flex">
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <img class="mx-auto h-12 w-auto" src="/vite.svg" alt="Workflow" />
          <img class="mx-auto h-12 w-auto" src="@/assets/vue.svg" alt="Workflow" />
        </div>
        <h2 class="text-3xl">
          Hello World!
        </h2>
      </div>
      <div>
        <HelloWorld msg="Vite 3 + Vue 3 TEMPLATE"/>
      </div>
      <hr />
      <div class="!mt-2.5 flex items-center justify-center">
        <FullScreen />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  @apply m-6 text-center font-extrabold text-gray-900 select-none;
}
</style>