<template>
  <div>
    <button @click="subNumDex(), apiNum(numDex)" @keyup.up="subNumDex()"><div class="arrow arrow-up"></div></button>
    <button><div class="circle"></div></button>
    <button @click="bajNumDex(), apiNum(numDex)" @keyup.down="bajNumDex()"><div class="arrow arrow-down"></div></button>
    <button><div class="arrow arrow-left" @click="bajNumDex(), apiNum(numDex)"></div></button>
    <button><div class="arrow arrow-right" @click="subNumDex(), apiNum(numDex)"></div></button>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "DirectionalPad",
  computed: {
    ...mapState(["numDex"])
  },
  methods: {
    ...mapActions(["apiNum"]),
    ...mapMutations(["subNumDex", "bajNumDex"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

div {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
  width: 100px;
  height: 100px;
}
button {
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $gray;
}
button:nth-child(1) {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
button:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
button:nth-child(3) {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
button:nth-child(4) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
button:nth-child(5) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: $dark-gray;
}
.arrow {
  width: 0;
  height: 0;
}
.arrow-up {
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid $dark-gray;
}

.arrow-down {
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid $dark-gray;
}

.arrow-right {
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 12px solid $dark-gray;
}

.arrow-left {
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 12px solid $dark-gray;
}
</style>
