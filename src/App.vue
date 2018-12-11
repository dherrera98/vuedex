<template>
  <div id="app">
    <div class="pokedex">
      <TopPokedex class="top"></TopPokedex>
      <div class="middle"></div>
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
  position: relative;
  background-color: $retro-red;
  height: 100vh;
  border-top-left-radius: 40px;
  width: 100vw;
  height: 100vh;
  max-width: 360px;
  max-height: 640px;

  @media (min-width: 361px) {
    border-bottom-left-radius: 40px;
  }
}
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top {
  position: absolute;
  top: 0;
}
.bottom {
  position: absolute;
  bottom: 0;
}
.middle {
  width: 339px;
  height: 320px;
  background-color: white;
  margin: auto;
  position: relative;
  top: 110px;
}
</style>
