<script setup lang="ts">
</script>

<template>
  <div>
    <a-back-top class="sr-only sm:not-sr-only" :right="60" :bottom="80" :visibility-height="100">
      <div class="ant-back-top-inner">UP</div>
    </a-back-top>
    <var-back-top class="not-sr-only sm:sr-only" bottom="60" visibility-height="100" :duration="300" />
  </div>
</template>

<style scoped>
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>