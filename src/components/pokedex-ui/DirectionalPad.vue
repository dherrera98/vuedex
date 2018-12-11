<template>
  <div>
    <button @click="subNumDex(), apiNum(numDex)" @keyup.up="subNumDex()">1</button>
    <button>2</button>
    <button @click="bajNumDex(), apiNum(numDex)" @keyup.down="bajNumDex()">3</button>
    <button>4</button>
    <button>5</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "DirectionalPad",
  computed: {
    ...mapState(["numDex"])
  },
  methods: {
    ...mapMutations(["subNumDex", "bajNumDex"]),
    ...mapActions(["apiNum"])
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
</style>
