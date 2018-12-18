<template>
  <transition name="fade">  
    <div class="container" v-if="showModal">
      <div class="close" @click="modalUpdate()">X</div>
      <img :src="sprite" alt="sprite">
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "ModalSprite",
  props: ["sprite"],
  computed: {
    ...mapState(["showModal"])
  },
  methods: {
    ...mapMutations(["modalUpdate"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

.close {
  position: absolute;
  right: 20px;
  top: 20px;
}
.container {
  width: 80%;
  height: 80%;
  border: 1px solid $border-gray;
  background-color: $retro-green;
}

img {
  width: 180px;
  height: 180px;
  display: block;
  margin: auto;
}
</style>
