<template>
  <div id="app">
    <div class="pokedex">
      <TopPokedex></TopPokedex>
    </div>
  </div>
</template>

<script>
import TopPokedex from "./components/pokedex-ui/TopPokedex.vue";
export default {
  components: { TopPokedex }
};
</script>

<style lang="scss" scoped>
@import "./assets/sass/variables";
.pokedex {
  background-color: $retro-red;
  height: 100vh;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
}
#app {
  height: 100vh;
}
</style>
