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
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
  width: 360px;
  height: 640px;
}
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top {
  position: relative;
  top: 0;
}

.bottom {
  position: relative;
  bottom: -400px;
}
</style>
