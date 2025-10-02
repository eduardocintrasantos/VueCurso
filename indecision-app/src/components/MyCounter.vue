<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ counter * counter }}</h3>
  </section>

  <div>
    <button class="btn" @click="counter++">+1</button>
    <button class="btn" @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCounter } = useCounter(8);
//import { computed, ref } from 'vue';

/*const props = defineProps({
  value: { type: Number, required: true },
});*/
/*const props = defineProps<{
  value: number;
}>();*/
//interface Props {
//  value?: number;
//}
//const props = defineProps<Props>();

//const counter = ref(props.value ?? 10);
//const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
/* o scoped indica que esse estilo é valido apenas nesse escopo */
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>
