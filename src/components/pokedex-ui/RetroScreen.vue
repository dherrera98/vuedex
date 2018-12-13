<template>
  <div>
    <input type="text" :value="numDex" @input="updatedApiNum" placeholder="---">
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "RetroScreen",
  computed: {
    ...mapState(["numDex"])
  },
  methods: {
    updatedApiNum(e) {
      this.$store.dispatch("apiNum", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

div {
  width: 143px;
  height: 61px;

  input {
    color: $dark-green;
    font-size: 26px;
    font-family: "Press Start 2P", cursive;
    width: 143px;
    height: 61px;
    text-align: center;
    background-color: $retro-green;
    border: 1px solid $border-gray;
  }
}
</style>
