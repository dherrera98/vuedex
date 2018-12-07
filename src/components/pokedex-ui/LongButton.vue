<template>
  <button :class="color">

  </button>
</template>

<script>
export default {
  name: "LongButton",
  props: {
    color: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

button {
  width: 70px;
  height: 16px;
  border-radius: 8px;
  border: $border-gray;
  background-color: $retro-orange;
}

.orange {
  background-color: $retro-orange;
}
.yellow {
  background-color: $retro-yellow;
}
</style>
