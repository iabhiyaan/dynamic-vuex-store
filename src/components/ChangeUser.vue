<template>
  <div>
    <button v-if="$store.state['user-1']" @click="fetchUser({ id: 4 })">
      Change User
    </button>
    <pre>{{ $store.state.currentUser }} </pre>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["setUser", "fetchUser"]),
  },
};
</script>

<style>
</style>