<template>
  <div class="pokedex-top">
    <Led color="blue" class="main-led"></Led>
    <div class="leds-container">
      <Led color="red" class="leds"></Led>
      <Led color="green" class="leds"></Led>
      <Led color="yellow" class="leds"></Led>
    </div>
  </div>
</template>

<script>
import Led from "./Led.vue";

export default {
  name: "TopPokedex",
  components: { Led }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/variables";

.pokedex-top {
  background-color: $dark-red;
  width: 100%;
  height: 80px;
  border-top-left-radius: 40px;
  position: absolute;
  top: 0;
}

.leds-container {
  display: inline-block;
  position: relative;
  top: -15px;
  left: 30px;

  .leds {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: 0 5px;
  }
}

.main-led {
  border: 3px solid white;
  display: inline-block;
  position: relative;
  top: 20px;
  left: 20px;
  width: 42px;
  height: 42px;
}
</style>
