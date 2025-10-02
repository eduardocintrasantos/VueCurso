<template>
  <h1 class="text-3xl font-bold text-red-500">Tailwind OK</h1>

  <hr />

  <MyCounter :value="1" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" />
</template>

<script lang="ts" setup>
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/my-counter-script/MyCounterScript2.vue';
</script>

<style scoped></style>
