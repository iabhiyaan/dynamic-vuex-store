<template>
  <div @click="setCurrentUser($store.getters.userFor('user-' + post.id))">
    User
    {{
      $store.getters.userFor("user-" + post.id) &&
      $store.getters.userFor("user-" + post.id).name
    }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    post: {},
  },
  mounted() {
    this.fetchUser(this.post);
  },
  methods: {
    ...mapActions(["setUser", "fetchUser", "setCurrentUser"]),
  },
};
</script>

<style>
</style>