import React, { useState, useEffect } from 'react'
import './index.css';
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar';
import { Pokedex } from './components/Pokedex';

import { getPokedexData, getPokemons, getPokemon } from "./api/request";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const initPokedex = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokedexData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      initPokedex();
    }
    document.title = "Pokedex App"
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return initPokedex();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await getPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <>
      <Header></Header>
      <Searchbar onSearch={onSearch} />
      {notFound ? (
        <div className="not-found-text text-center mt-5">
          <h3>No se encontro el Pokemon que buscabas 😭</h3>
        </div>
      ) : (
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
    </>
  );
}

export default App;
