<template>
  <div id="app">
    <div class="pokedex">
      <TopPokedex class="top"></TopPokedex>
      <BottomPokedex class="bottom"></BottomPokedex>
    </div>
  </div>
</template>

<script>
import BottomPokedex from "./components/pokedex-ui/BottomPokedex.vue";
import TopPokedex from "./components/pokedex-ui/TopPokedex.vue";
export default {
  components: { TopPokedex, BottomPokedex }
};
</script>

<style lang="scss" scoped>
@import "./assets/sass/variables";
.pokedex {
  background-color: $retro-red;
  height: 100vh;
  border-top-left-radius: 40px;
}
#app {
  height: 100vh;
}

.top {
  position: absolute;
  top: 0;
}

.bottom {
  position: absolute;
  bottom: 0;
}
</style>
