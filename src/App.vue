<template>
  <div id="app">
    <div class="pokedex">
      <TopPokedex class="top"></TopPokedex>
      <ScreenPokedex class="middle"></ScreenPokedex>
      <BottomPokedex class="bottom"></BottomPokedex>
    </div>
  </div>
</template>

<script>
import ScreenPokedex from "./views/ScreenPokedex.vue";
import BottomPokedex from "./views/BottomPokedex.vue";
import TopPokedex from "./views/TopPokedex.vue";
export default {
  components: { TopPokedex, BottomPokedex, ScreenPokedex }
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
  bottom: 10px;
}
.middle {
  width: 339px;
  height: 320px;
  margin: auto;
  position: relative;
  top: 110px;
}
</style>
