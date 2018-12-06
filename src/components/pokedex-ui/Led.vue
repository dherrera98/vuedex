<template>
  <div :class="color">
  </div>
</template>

<script>
export default {
  name: "Led",
  props: {
    color: String,
    border: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

div {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $retro-yellow;
  border: 1px solid $border-gray;
}
.red {
  background-color: $retro-red;
}
.green {
  background-color: $retro-green;
}
.yellow {
  background-color: $retro-yellow;
}
.blue {
  background-color: $light-blue;
}
</style>
