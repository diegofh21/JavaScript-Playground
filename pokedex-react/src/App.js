import React, { useState, useEffect } from 'react'
import './index.css';
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar';
import { Pokedex } from './components/Pokedex';
import { Home } from './views/Home/Home';
import { PokemonDetails } from './views/PokemonDetails/PokemonDetails';

import { getPokemons } from './api/request'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pokemons, setPokemons] = useState([])

  const initPokedex = async () => {
    const data = await getPokemons();
    setPokemons(data.results)
  }

  useEffect(() => {
    initPokedex()
  }, [])

  return (
    <>
      <Header></Header>
      <Searchbar></Searchbar>
      <Pokedex pokemons={pokemons}></Pokedex>
    </>
  );
}

export default App;
