<template>
  <div>
    <span>{{numDex}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RetroScreen",
  computed: {
    ...mapState(["numDex"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

div {
  width: 143px;
  height: 61px;
  background-color: $retro-green;
  border: 1px solid $border-gray;
  text-align: center;
  span {
    color: $dark-green;
    font-size: 26px;
    font-family: "Press Start 2P", cursive;
    line-height: 61px;
  }
}
</style>
