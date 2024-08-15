import axios from 'axios';
import { IPokemon, IPokemonDetail } from '../interfaces/pokemon';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (
  limit: number,
  offset: number
): Promise<IPokemon[]> => {
  const response = await axios.get(
    `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data.results.map((pokemon: any) => ({
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemon.url.split('/')[6]
    }.png`,
    id: parseInt(pokemon.url.split('/')[6]),
  }));
};

export const fetchPokemonDetail = async (
  id: number
): Promise<IPokemonDetail> => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`);
  const speciesResponse = await axios.get(response.data.species.url);
  const evolutionChainResponse = await axios.get(
    speciesResponse.data.evolution_chain.url
  );

  const evolutionChain = [];
  let currentEvolution = evolutionChainResponse.data.chain;
  while (currentEvolution) {
    const evolutionId = currentEvolution.species.url.split('/')[6];
    evolutionChain.push({
      name: currentEvolution.species.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionId}.png`,
    });
    currentEvolution = currentEvolution.evolves_to[0];
  }

  return {
    name: response.data.name,
    image: response.data.sprites.front_default,
    height: response.data.height,
    weight: response.data.weight,
    types: response.data.types.map((item: any) => item.type.name),
    stats: response.data.stats.map((item: any) => ({
      name: item.stat.name,
      value: item.base_stat,
    })),
    sound: `https://pokemoncries.com/cries/${id}.mp3`,
    evolutionChain,
    id,
  };
};
