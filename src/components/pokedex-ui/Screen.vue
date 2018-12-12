<template>
  <div class="container">
    <pre>{{pokemon}}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Screen",
  computed: {
    ...mapState(["pokemon"])
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 315px;
  height: 246px;
  background-color: white;
  border-radius: 5px;
}
</style>
