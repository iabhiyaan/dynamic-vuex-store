<template>
  <div id="app">
    <!-- {{ $store.state.counter["counter-1"] + 3 }}

    <button @click="$store.state.counter['counter-1'] += 3">Test</button>

    <Counter v-for="data in 3" :key="data" :data="data" /> -->
    <ChangeUser />

    <img alt="Vue logo" src="./assets/logo.png" width="25%" />

    <template v-if="posts.length">
      <User v-for="post in posts" :key="post.id" :post="post" />
    </template>
  </div>
</template>

<script>
import Counter from "./components/Counter";
import User from "./components/User";
import ChangeUser from "./components/ChangeUser";

export default {
  name: "App",
  components: {
    Counter,
    User,
    ChangeUser,
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
      .then((res) => res.json())
      .then((data) => (this.posts = data));
  },
  data() {
    return {
      todos: [],
      posts: [],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
