import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getPokedexData, getPokemons, getPokemon } from "../../api/request";

export default function PokemonDetails() {

  let params = useParams();

  let { pokeID } = params;

  console.log(pokeID)

  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    DetallePokemon()
  }, [])

  const DetallePokemon = async () => {
    const res = await getPokemon(pokeID)
    console.log(res)
  }

  // const initPokedex = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getPokemon(params.pokeId);
  //     // console.log(data)
  //     const promises = data.results.map(async (pokemon) => {
  //       return await getPokedexData(pokemon.url);
  //     });
  //     const results = await Promise.all(promises);
  //     console.log(results)
  //     // setPokemons(results);
  //     setLoading(false);
  //   } catch (err) {}
  // };

  // useEffect(() => {
   
  //     initPokedex();
  // }, []);

  // initPokedex();
  
  // console.log("POKEID", params.pokeId)
  return (
    <>
      <h2>Detalle</h2>
      
    </>
  )
}
