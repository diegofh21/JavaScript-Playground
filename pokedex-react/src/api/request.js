import axios from 'axios';

export async function getPokemon(pokemon) {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export async function getPokemons(limit = 24, offset = 0) {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export const getPokedexData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export async function getPokemonType(type) {
  try {
    const res = await axios.get(type)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPokeSkill(skill) {
  try {
    const res = await axios.get(skill)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPokeCategory(category) {
  try {
    const res = await axios.get(category)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPokeGender(pokemon) {
  try {
    let url = `https://pokeapi.co/api/v2/gender/?name=${pokemon}`
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export async function getPokeMoves(move) {
  try {
    let url = `https://pokeapi.co/api/v2/move/${move}`
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    console.log(error)
  }
}