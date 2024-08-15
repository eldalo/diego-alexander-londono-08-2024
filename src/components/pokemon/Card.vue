<template>
  <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
    <img
      class="w-24 h-24 object-contain mb-2"
      :src="pokemon.image"
      :alt="pokemon.name"
    />
    <p class="text-lg text-center font-semibold">{{ pokemon.name }}</p>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IPokemon } from '../../interfaces/pokemon';

const props = defineProps<{ pokemon: IPokemon }>();
</script>
