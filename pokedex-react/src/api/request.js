import axios from 'axios';

export async function searchPokemon(pokemon) {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export async function getPokemons(limit=24, offset=0) {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {}
};