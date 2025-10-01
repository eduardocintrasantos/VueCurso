<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ counter * counter }}</h3>
  </section>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const counter = ref(5);
const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
/* o scoped indica que esse estilo é valido apenas nesse escopo */
h1 {
  color: green;
}
</style>
