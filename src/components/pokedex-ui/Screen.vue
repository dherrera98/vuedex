<template>
  <div class="container">
    <div v-if="pokemon == ''" class="search">
      <h2>Name</h2>
      <input type="text" v-model="name" @keypress.enter="apiName(name), name = ''">
      <p class="err" v-if="pokemon.detail == 'Not found.'">Error search pokemon</p>
      <p class="err">{{pokemon}}</p>
    </div>
    <div v-else class="search-container">
      <h2>{{pokemon.name | capitalLetter}}</h2>
      <div class="image-container">
        <div class="back-default">
          <img :src="pokemon.sprites.back_default" alt="image back">
          <p>Back</p>
        </div>
        <div class="front-default">
          <img :src="pokemon.sprites.front_default" alt="image front">
          <p>Front</p>
        </div>
        <div class="back-shiny">
          <img :src="pokemon.sprites.back_shiny" alt="image shiny back">
          <p>Back</p>
          <p>Shiny</p>
        </div>
        <div class="front-shiny">
          <img :src="pokemon.sprites.front_shiny" alt="image shiny front">
          <p>Front</p>
          <p>Shiny</p>
        </div>
      </div>
      <div class="list-prop">
        <ul>
          <li>Types: <span v-for="type in pokemon.types" :key="type.type.name"> {{type.type.name}} </span></li>
          <li>Weight: {{pokemon.weight}}</li>
          <li>Height: {{pokemon.height}}</li>
          <li>Base xp: {{pokemon.base_experience}}</li>
        </ul>
      </div>
      <!-- <div class="stats">
        <div>
          <p v-for="s in pokemon.stats" :key="s.stat.name">
            <span>{{s.base_stat}}</span> <br> <spam>{{s.stat.name}}</spam>
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Screen",
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState(["pokemon"])
  },
  methods: {
    ...mapActions(["apiName"])
  },
  filters: {
    capitalLetter: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/_variables.scss";

.container {
  width: 315px;
  height: 246px;
  background-color: $retro-green;
  border-radius: 5px;
  font-family: "Press Start 2P", cursive;
  padding: 20px 10px;
}

h2 {
  font-size: 26px;
  color: $dark-green;
  text-align: center;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  margin-bottom: 20px;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  width: 280px;
  height: 60px;
  font-family: "Press Start 2P", cursive;
  background-color: $retro-gray;
  color: $dark-green;
  font-size: 26px;
  border: 2px solid $dark-green;
}
.err {
  font-size: 14px;
  color: $retro-red;
  word-spacing: -4px;
}
.search-container {
  display: grid;
  grid-template-columns: auto / auto / auto;
  grid-template-rows: auto / auto / auto / auto;

  h2 {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }

  img {
    width: 50px;
  }
}

.image-container {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: 60px / 60px;
  grid-template-columns: 60px / 60px;

  p {
    font-size: 6px;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-right: 10px;
  }

  div:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  div:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin-right: 10px;
    p {
      margin-bottom: 0;
    }
  }

  div:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    p {
      margin-bottom: 0;
    }
  }
}

.list-prop {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  ul {
    padding-left: 10px;
  }
  li {
    list-style: none;
    font-size: 10px;
    word-spacing: -6px;
    margin-block-start: 3px;
    color: $dark-green;
  }
}

.stats {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: auto / auto / auto;
  grid-template-rows: auto / auto;
  div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    p {
      font-size: 10px;
    }
  }
}
</style>
