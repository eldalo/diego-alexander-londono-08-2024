<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5"
    v-if="team.length"
  >
    <PokemonCard v-for="pokemon in team" :key="pokemon.id" :pokemon="pokemon">
      <p class="text-sm text-gray-400">
        <b class="text-gray-600">Height:</b> {{ pokemon.height }} dm
      </p>
      <p class="text-sm text-gray-400">
        <b class="text-gray-600">Weight:</b> {{ pokemon.weight }} hg
      </p>
      <div class="flex gap-3 mt-4 md:gap-1 lg:gap-3">
        <button
          class="mt-2 bg-red-500 text-xs text-white px-4 py-2 rounded hover:bg-red-600"
          @click="removeFromTeam(pokemon.id)"
        >
          Delete
        </button>
        <router-link
          :to="`/team/${pokemon.id}`"
          class="mt-2 bg-green-500 text-xs text-white px-4 py-2 rounded hover:bg-green-600"
          tag="button"
        >
          See more
        </router-link>
      </div>
    </PokemonCard>
  </div>
  <div v-else class="h-screen flex flex-col items-center justify-center">
    <p class="text-center text-white">There are no pokemon in the team</p>
    <router-link
      to="/"
      class="bg-yellow-500 text-white text-sm mt-6 px-5 py-2 rounded hover:bg-yellow-600"
      tag="button"
    >
      Go to home
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useTeam } from '../../store/team';

import PokemonCard from '../pokemon/Card.vue';

const { team, removePokemon } = useTeam();

const removeFromTeam = (pokemonId: number) => {
  removePokemon(pokemonId);
};
</script>
