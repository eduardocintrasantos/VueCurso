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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounterter(props.value);

    //const counter = ref(props.value);
    //const squareCounter = computed(() => counter.value * counter.value);

    return {
      counter,
      squareCounter,
    };
  },
});

function useCounterter(value: number): { counter: any; squareCounter: any } {
  throw new Error('Function not implemented.');
}
</script>
