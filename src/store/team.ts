import { ref } from 'vue';
import type { IPokemon } from '../interfaces/pokemon';

import { useToast } from './toast';

const team = ref<IPokemon[]>([]);
const { showToast } = useToast();

export const useTeam = () => {
  const addPokemon = (pokemon: IPokemon) => {
    if (team.value.length < 6 && !team.value.some((p) => p.id === pokemon.id)) {
      team.value.push(pokemon);
      showToast(`${pokemon.name} has been added to the team!`, 'success');
    }
  };

  const removePokemon = (pokemonId: number) => {
    team.value = team.value.filter((p) => p.id !== pokemonId);
    showToast('Pokemon has been removed from the team!', 'success');
  };

  const getTeam = () => {
    return team.value;
  };

  const countTeam = () => {
    return team.value.length || 0;
  };

  return {
    team,
    addPokemon,
    removePokemon,
    getTeam,
    countTeam,
  };
};
