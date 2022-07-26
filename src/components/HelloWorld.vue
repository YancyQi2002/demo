<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h4 class="flex items-center justify-center text-2xl">{{ msg }}</h4>

  <div class="card">
    <p>
      Edit&nbsp;
      <code class="bg-gray">components/HelloWorld.vue</code>
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
</template>

<style scoped>
.card,
p {
  @apply flex items-center justify-center text-lg;
}
</style>
