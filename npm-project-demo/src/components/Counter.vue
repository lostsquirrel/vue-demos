<template>
  <div>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  name: "Counter",
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      console.log(store);
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    }
  }
};
</script>

<style scoped></style>
