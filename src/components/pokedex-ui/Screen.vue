<template>
  <div class="container">
    <div v-if="pokemon == ''" class="search">
      <h2>Name</h2>
      <input type="text" v-model="name" @keypress.enter="apiName(name), name = ''">
    </div>
    <div v-else>
      <h2>{{pokemon.name | capitalLetter}}</h2>
      <img :src="pokemon.sprites.back_default" alt="image back">
      <img :src="pokemon.sprites.front_default" alt="image front">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Screen",
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["pokemon"])
  },
  methods: {
    ...mapActions(["apiName"])
  },
  filters: {
    capitalLetter: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

.container {
  width: 315px;
  height: 246px;
  background-color: rgb(245, 255, 246);
  border-radius: 5px;
  font-family: "Press Start 2P", cursive;
}

h2 {
  font-size: 36px;
  color: $dark-green;
  text-align: center;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 280px;
  height: 60px;
  font-family: "Press Start 2P", cursive;
  background-color: $retro-gray;
  color: $dark-green;
  font-size: 26px;
  border: 2px solid $dark-green;
}
</style>
