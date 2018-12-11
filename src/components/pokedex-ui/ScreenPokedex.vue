<template>
  <div class="screen-container">
    <div class="led-container">
      <Led color="red" class="led"></Led>
      <Led color="red" class="led"></Led>
    </div>
    <Screen class="screen"></Screen>
    <Led class="large-led" color="red"></Led>
    <Speaker class="speaker"></Speaker>
  </div>
</template>

<script>
import Led from "./Led.vue";
import Screen from "./Screen.vue";
import Speaker from "./Speaker.vue";
export default {
  name: "ScreenPokedex",
  components: { Speaker, Screen, Led }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";
.screen-container {
  background-color: $retro-gray;
  border: 2px solid $border-gray;
}
.led-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5px 0;
  .led {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin: 0 4px;
    border: 0.5px solid $border-gray;
  }
}
.large-led {
  width: 32px;
  height: 32px;
  border: 1px solid $border-gray;
  position: absolute;
  bottom: 10px;
  left: 35px;
}
.screen {
  display: block;
  margin: auto;
}
.speaker {
  position: absolute;
  bottom: 30px;
  right: 75px;
}
</style>
