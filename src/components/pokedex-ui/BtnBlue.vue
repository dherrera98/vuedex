<template>
  <button>
    <div class="circle-middle">

    </div>
  </button>
</template>

<script>
export default {
  name: "BtnBlue"
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

button {
  width: 60px;
  height: 60px;
  background-color: $retro-blue;
  border: 1px solid $border-gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.circle-middle {
  width: 30px;
  height: 30px;
  background-color: $dark-blue;
  border-radius: 50%;
}
</style>
