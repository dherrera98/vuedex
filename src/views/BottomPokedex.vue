<template>
  <div class="container">
    <div class="btn-container">
      <BtnBlue class="btnBlue"></BtnBlue>
    </div>
    <div class="longButton-container">
      <LongButton color="yellow" class="longButton" @click.native="reset()"></LongButton>
      <LongButton color="orange" class="longButton" @click.native="reset()"></LongButton>
    </div>
    <div class="screen-container">
      <RetroScreen class="retroScreen"></RetroScreen>
    </div>
    <div class="directional-container">
      <DirectionalPad class="directionalPad"></DirectionalPad>
    </div>
  </div>
</template>

<script>
import DirectionalPad from "../components/pokedex-ui/DirectionalPad.vue";
import RetroScreen from "../components/pokedex-ui/RetroScreen.vue";
import LongButton from "../components/pokedex-ui/LongButton.vue";
import BtnBlue from "../components/pokedex-ui/BtnBlue.vue";
import { mapMutations } from "vuex";

export default {
  name: "BottomPokedex",
  components: { BtnBlue, LongButton, RetroScreen, DirectionalPad },
  methods: {
    ...mapMutations(["reset"])
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 360px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  grid-template-rows: 25% 75%;
  height: 25%;
}
.btn-container {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.longButton-container {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .longButton {
    height: 16px;
    width: 70px;
    margin: 0 5px;
  }
}

.screen-container {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
}

.directional-container {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
