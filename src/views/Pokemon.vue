<template>
  <div class="bg-white rounded-lg shadow-md mt-5 p-6" v-if="pokemon">
    <PokemonDetails :pokemon="pokemon" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchPokemonDetail } from '../api/pokemonApi';
import { IPokemonDetail } from '../interfaces/pokemon';
import PokemonDetails from '../components/pokemon/Detail.vue';

const route = useRoute();
const pokemon = ref<IPokemonDetail | null>(null);

const fetchDetails = async () => {
  const id = Number(route.params.id);
  pokemon.value = await fetchPokemonDetail(id);
};

onMounted(fetchDetails);
</script>
