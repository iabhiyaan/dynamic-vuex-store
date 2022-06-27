<template>
  <div>
    Count {{ $store.getters.counter("counter-" + data) }}

    <button @click="updateCounterBasedOnComponent(data)">Increment</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    data: {},
  },
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    ...mapActions(["incrementCount", "setCounter"]),
    updateCounterBasedOnComponent(data) {
      console.log(this.$store.state.counter["counter-" + data]);
      this.setCounter({
        key: "counter-" + data,
        value: this.$store.state.counter["counter-" + data] + 1,
      });
    },
  },
};
</script>

<style>
</style>