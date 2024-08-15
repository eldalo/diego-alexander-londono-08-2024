<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="block">
      <img
        class="w-32 h-32 object-contain mb-3 mx-auto md:mx-0"
        :src="pokemon.image"
        :alt="pokemon.name"
      />
      <p class="text-lg font-semibold text-gray-700">{{ pokemon.name }}</p>
      <p class="text-sm text-gray-400">
        <b class="text-gray-600">Height:</b> {{ pokemon.height }} dm
      </p>
      <p class="text-sm text-gray-400">
        <b class="text-gray-600">Weight:</b> {{ pokemon.weight }} hg
      </p>
      <p class="text-sm text-gray-400">
        <b class="text-gray-600">Types:</b> {{ pokemon.types.join(', ') }}
      </p>
      <audio class="mt-4 w-full" :src="pokemon.sound" controls></audio>
    </div>
    <PokemonStats :stats="pokemon.stats" />
  </div>
  <div class="mt-8" v-if="pokemon.evolutionChain">
    <h2 class="text-lg text-center font-semibold">Evolutionary Chain</h2>
    <div class="flex justify-center space-x-4 mt-2">
      <div
        class="flex flex-col items-center"
        v-for="evolution in pokemon.evolutionChain"
        :key="evolution.name"
      >
        <img
          class="w-24 h-24 object-contain mb-2"
          :src="evolution.image"
          :alt="evolution.name"
        />
        <p class="text-sm">{{ evolution.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IPokemon } from '../../interfaces/pokemon';

import PokemonStats from './Stats.vue';

const props = defineProps<{ pokemon: IPokemon }>();
</script>
