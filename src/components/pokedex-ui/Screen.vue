<template>
  <div class="container">
    <div v-if="pokemon == ''" class="search">
      <h2>Name</h2>
      <input type="text" :value="namePokemon" @input="updateApiName" class="inputSearch">
    </div>
    <div v-else class="search-container">
      <h2>{{pokemon.name | capitalLetter | maxLetter}}</h2>
      <div class="type">
        <span v-for="type in pokemon.types" :key="type.type.name"> {{type.type.name}} </span>
      </div>
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
          <li>Weight: {{pokemon.weight / 10}} kg</li>
          <li>Height: {{pokemon.height / 10}} m</li>
          <li>Base xp: {{pokemon.base_experience}}</li>
        </ul>
      </div>
       <div class="stats">
        <table>
          <tr>
            <th colspan="3">Stats</th>
          </tr>
          <tr>
            <td><span class="number">{{pokemon.stats[0].base_stat}}</span> {{pokemon.stats[0].stat.name}}</td>
            <td><span class="number">{{pokemon.stats[1].base_stat}}</span> {{pokemon.stats[1].stat.name}}</td>
            <td><span class="number">{{pokemon.stats[2].base_stat}}</span> {{pokemon.stats[2].stat.name}}</td>
          </tr>
          <tr>
            <td><span class="number">{{pokemon.stats[3].base_stat}}</span> {{pokemon.stats[3].stat.name}}</td>
            <td><span class="number">{{pokemon.stats[4].base_stat}}</span> {{pokemon.stats[4].stat.name}}</td>
            <td><span class="number">{{pokemon.stats[5].base_stat}}</span> {{pokemon.stats[5].stat.name}}</td>
          </tr>
        </table>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Screen",
  computed: {
    ...mapState(["pokemon", "namePokemon"])
  },
  methods: {
    updateApiName(e) {
      this.$store.dispatch("apiName", e.target.value);
    }
  },
  filters: {
    capitalLetter: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    maxLetter(word) {
      return word.slice(0, 11);
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
  margin-bottom: 10px;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;

  .inputSearch {
    margin-top: 20px;
  }
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

.search-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;

  h2 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  img {
    width: 50px;
  }
}

.type {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  text-align: center;
  font-size: 10px;
  color: $dark-green;
  margin-bottom: 10px;
}

.image-container {
  grid-column: 1 / 2;
  grid-row: 3 / 5;
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
  grid-column: 2 / 3;
  grid-row: 3 / 4;
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
  grid-row: 4 / 5;
  grid-column: 2 / 3;
  table,
  th,
  td {
    border: 1px solid $dark-green;
  }
  th {
    font-size: 10px;
    color: $dark-green;
  }
  td {
    font-size: 7px;
    color: $dark-green;
    padding: 3px 3px;
    text-align: center;
    .number {
      display: block;
    }
  }
}
</style>
