import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numDex: 1
  },
  mutations: {
    subNumDex(state) {
      if (state.numDex < 10148) {
        state.numDex = state.numDex + 1;
      }
    },
    bajNumDex(state) {
      if (state.numDex > 1) {
        state.numDex = state.numDex - 1;
      }
    }
  },
  actions: {}
});
