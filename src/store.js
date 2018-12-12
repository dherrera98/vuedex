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
    },
    verPokemon(state, pokemon) {
      state.pokemon = pokemon;
    }
  },
  actions: {
    apiNum(context, num) {
      // fix
      fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${num}`)
        .then(res => res.json())
        .then(pokemon => context.commit("verPokemon", pokemon));
    }
  }
});
