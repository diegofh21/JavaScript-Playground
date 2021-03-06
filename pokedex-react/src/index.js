import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import { Pokemon } from './components/Pokemon'
import PokemonDetails from './views/PokemonDetails/PokemonDetails'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/home" element={<App/>}></Route>
        <Route path="/pokemon" element={<Pokemon/>}></Route>
        <Route path="/pokemon/:pokeID" element={<PokemonDetails/>}></Route>
        <Route path="*" element={
          <h1 className='text-center mt-5'>404 La pagina que estas buscando no esta disponible 😥</h1>
        }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
