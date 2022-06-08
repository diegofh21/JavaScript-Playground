import axios from 'axios';

export async function getPokemonData(pokemon) {
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

// export const getPokemons = async (limit = 25, offset = 0) => {
//   try {
//     let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
//     const response = await fetch(url);
//     console.log("response api",response)
//     const data = await response.json();
//     return data;
//   } catch (err) {}
// };