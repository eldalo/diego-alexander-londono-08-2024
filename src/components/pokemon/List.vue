<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5"
  >
    <PokemonCard
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    >
      <button
        class="mt-2 bg-blue-500 text-xs text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-75 disabled:cursor-not-allowed"
        @click="selectPokemon(pokemon)"
        :disabled="isTeamFull"
      >
        Add to team
      </button>
    </PokemonCard>
  </div>
  <div class="my-5 flex justify-center">
    <button
      class="bg-yellow-500 text-white text-sm px-5 py-2 rounded hover:bg-yellow-600"
      @click="loadMore"
    >
      Load more
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { fetchPokemons } from '../../api/pokemonApi';
import { IPokemon } from '../../interfaces/pokemon';
import { useTeam } from '../../store/team';

import PokemonCard from './Card.vue';

const pokemons = ref<IPokemon[]>([]);
const limit = 25;
const offset = ref(0);

const { team, addPokemon, countTeam } = useTeam();

const loadMore = async () => {
  const newPokemons = await fetchPokemons(limit, offset.value);
  pokemons.value.push(...newPokemons);
  offset.value += limit;
};

const selectPokemon = (pokemon: IPokemon) => {
  addPokemon(pokemon);
};

const isTeamFull = computed(() => countTeam() >= 6);

onMounted(loadMore);
</script>
