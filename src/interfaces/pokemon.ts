export interface IPokemon {
  id: number;
  name: string;
  image: string;
}

export interface IPokemonDetail extends IPokemon {
  height: number;
  weight: number;
  types: string[];
  stats: IPokemonStat[];
  sound: string;
  evolutionChain: IPokemonEvolution[];
}

export interface IPokemonStat {
  name: string;
  value: number;
}

export interface IPokemonEvolution {
  name: string;
  image: string;
}
