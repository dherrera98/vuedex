import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numDex: 1,
    pokemon: {}
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
  actions: {
    apiNum(context, num, state) {
      // fix
      fetch(`https://pokeapi.co/api/v2/${num}`, { mode: "no-cors" })
        .then(res => res.json())
        .then(pokemon => (state.pokemon = pokemon));
    }
  }
});
