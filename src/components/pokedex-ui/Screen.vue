<template>
  <div class="container">
    <h2>{{pokemon.name}}</h2>
    <img :src="pokemon.sprites.back_default" alt="image back">
    <img :src="pokemon.sprites.front_default" alt="image front">
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Screen",
  computed: {
    ...mapState(["pokemon"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 315px;
  height: 246px;
  background-color: white;
  border-radius: 5px;
  font-family: "Press Start 2P", cursive;
}
</style>
