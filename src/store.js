import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  count: 0,
  counter: {},
  currentUser: {}
};

const getters = {
  counter: (state) => (payload) => {
    if (typeof state.counter[payload] === "undefined") {
      Vue.set(state.counter, [payload], 0);
    }
    return state.counter[payload];
  },
  count: (state) => state.count,
  todoFor: (state) => (payload) => {
    if (payload in state) {
      return state["payload"];
    } else {
      Vue.set(state, payload, {});
    }
  },
  userFor: (state) => (payload) => {
    if (payload in state) {
      return state[payload];
    } else {
      Vue.set(state, payload, {});
    }
  }
};

const mutations = {
  setCount(state) {
    state.count += 1;
  },
  setCounter(state, payload) {
    Vue.set(state.counter, payload.key, payload.value); // (state.counter[payload] ?? 0) + 1
  },
  setTodo(state, payload) {
    Vue.set(state, payload.key, payload.value);
  },
  setUser(state, payload) {
    Vue.set(state, payload.key, payload.value);
  },
  setCurrentUser(state, payload) {
    state.currentUser = payload;
  }
};

const actions = {
  incrementCount({ commit }, payload) {
    commit("setCount");
  },
  setCounter({ commit }, payload) {
    commit("setCounter", payload);
  },
  setTodo({ commit }, payload) {
    commit("setTodo", payload);
  },
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
  fetchUser({ dispatch }, payload) {
    fetch("https://jsonplaceholder.typicode.com/users/" + payload.id)
      .then((res) => res.json())
      .then((data) =>
        dispatch("setUser", {
          key: "user-" + payload.id,
          value: data
        })
      );
  },
  setCurrentUser({ commit }, payload) {
    commit("setCurrentUser", payload);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
