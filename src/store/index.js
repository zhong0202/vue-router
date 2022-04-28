import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {},
  mutations: {
    add(state) {
      // console.log("add");
      state.counter++;
    },
  },
  actions: {},
  modules: {},
});
