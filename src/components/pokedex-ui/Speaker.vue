<template>
  <div class="container">
    <div class="left speaker-container">
      <div class="speaker"></div>
      <div class="speaker"></div>
      <div class="speaker"></div>
    </div>
    <div class="right speaker-container">
      <div class="speaker"></div>
      <div class="speaker"></div>
      <div class="speaker"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speaker"
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";
.container {
  width: 96px;
  height: 25px;
  display: flex;
  justify-content: space-between;
}
.speaker-container {
  width: 48px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left {
  margin-right: 5px;
}
.right {
  margin-left: 5px;
}
.speaker {
  width: 40px;
  height: 5px;
  background-color: $dark-gray;
}
</style>
