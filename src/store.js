import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numDex: "",
    namePokemon: "",
    pokemon: ""
  },
  mutations: {
    subNumDex(state) {
      if (state.numDex == "") {
        state.numDex = 1;
      } else if (state.numDex < 10148) {
        state.numDex = state.numDex + 1;
      }
    },
    bajNumDex(state) {
      if (state.numDex == "") {
        state.numDex = 1;
      } else if (state.numDex > 1) {
        state.numDex = state.numDex - 1;
      }
    },
    verPokemonName(state, pokemon) {
      state.numDex = "";
      state.pokemon = pokemon;
    },
    verPokemonNum(state, pokemon) {
      state.namePokemon = "";
      state.pokemon = pokemon;
    },
    reset(state) {
      (state.namePokemon = ""), (state.numDex = ""), (state.pokemon = "");
    }
  },
  actions: {
    apiNum(context, num) {
      fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${num}`)
        .then(res => res.json())
        .then(pokemon => context.commit("verPokemonNum", pokemon));
    },
    apiName(context, name) {
      fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(pokemon => context.commit("verPokemonName", pokemon));
    }
  }
});
