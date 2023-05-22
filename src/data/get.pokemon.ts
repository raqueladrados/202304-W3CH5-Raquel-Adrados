import { PokemonList } from '../models/pokemon';

export const getPokemon = async () => {
  fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    .then((response) => response.json())
    .then((_response: PokemonList) => {});
};

export const dataPokemon = async (data: string) => {
  try {
    const response = await fetch(data);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
