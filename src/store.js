import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numDex: "",
    namePokemon: "",
    pokemon: "",
    showModal: false
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
    updatePokemonName(state, pokemon) {
      state.pokemon = pokemon;
      state.numDex = state.pokemon.id;
    },
    updatePokemonNum(state, pokemon) {
      state.namePokemon = "";
      state.pokemon = pokemon;
      state.numDex = state.pokemon.id;
    },
    reset(state) {
      (state.namePokemon = ""), (state.numDex = ""), (state.pokemon = "");
    },
    modalUpdate(state) {
      state.showModal = !state.showModal;
    }
  },
  actions: {
    apiNum(context, num) {
      fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${num}`)
        .then(res => res.json())
        .then(pokemon => context.commit("updatePokemonNum", pokemon));
    },
    apiName(context, name) {
      fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(pokemon => context.commit("updatePokemonName", pokemon));
    }
  }
});
