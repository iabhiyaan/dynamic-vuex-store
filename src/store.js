import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  stageRefs: [],
  test: {}
};

const getters = {};

const mutations = {
  setStageRefs(state, stageRefs) {
    state.stageRefs = stageRefs;
  },
};

const actions = {
  setStageRefs({ commit }, stageRefs) {
    commit("setStageRefs", stageRefs);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
