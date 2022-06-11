import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

import { getPokemon, getPokeSkill, getPokeCategory, getPokemonType, getPokeGender, getPokeMoves } from "../../api/request";

export default function PokemonDetails() {

  let params = useParams();

  let { pokeID } = params;

  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true);
  const [skill, setSkill] = useState('')
  const [category, setCategory] = useState('')
  const [gender, setGender] = useState('')

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [typeClass1, setTypeClass1] = useState('')
  const [typeClass2, setTypeClass2] = useState('')

  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [frontFemale, setFrontFemale] = useState('')
  const [backFemale, setBackFemale] = useState('')
  const [frontShiny, setFrontShiny] = useState('')
  const [backShiny, setBackShiny] = useState('')
  const [frontShinyFemale, setFrontShinyFemale] = useState('')
  const [backShinyFemale, setBackShinyFemale] = useState('')

  const [moves, setMoves] = useState([])
  const [power, setPower] = useState([])
  const [pp, setPP] = useState([])
  const [accuracy, setAccuracy] = useState([])

  useEffect(() => {
    DetallePokemon()
  }, []);

  const DetallePokemon = async () => {
    const res = await getPokemon(pokeID)
    console.log(res)
    setPokemon(res)

    if (res.abilities.length > 1) {
      const resSkill = await getPokeSkill(res.abilities[0].ability.url)
      setSkill(resSkill.names[5].name)

      const resCategory = await getPokeCategory(res.abilities[1].ability.url)
      setCategory(resCategory.names[5].name)
    }
    else {
      setCategory('No cuenta con categoria')
    }

    if (res.types.length > 1) {
      // Primer set
      const res1 = await getPokemonType(res.types[0].type.url)
      switch (res1.name) {
        case 'normal':
          setType1('Normal')
          setTypeClass1('bg-normal text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fire':
          setType1('Fuego')
          setTypeClass1('bg-fire text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'water':
          setType1('Agua')
          setTypeClass1('bg-water text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'grass':
          setType1('Planta')
          setTypeClass1('bg-grass text-dark rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'flying':
          setType1('Volador')
          setTypeClass1('bg-flying text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'poison':
          setType1('Veneno')
          setTypeClass1('bg-poison text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'electric':
          setType1('Electrico')
          setTypeClass1('bg-electric text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ground':
          setType1('Tierra')
          setTypeClass1('bg-ground text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'rock':
          setType1('Roca')
          setTypeClass1('bg-rock text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'psychic':
          setType1('Psiquico')
          setTypeClass1('bg-psychic text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ice':
          setType1('Hielo')
          setTypeClass1('bg-ice text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'bug':
          setType1('Bicho')
          setTypeClass1('bg-bug text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ghost':
          setType1('Fantasma')
          setTypeClass1('bg-ghost text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'steel':
          setType1('Acero')
          setTypeClass1('bg-steel text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'dragon':
          setType1('Dragon')
          setTypeClass1('bg-dragon text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'dark':
          setType1('Siniestro')
          setTypeClass1('bg-dark text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fairy':
          setType1('Hada')
          setTypeClass1('bg-fairy text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fighting':
          setType1('Lucha')
          setTypeClass1('bg-fighting text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;
      }

      // Segundo set
      const res2 = await getPokemonType(res.types[1].type.url)
      switch (res2.name) {
        case 'normal':
          setType2('Normal')
          setTypeClass2('bg-normal text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fire':
          setType2('Fuego')
          setTypeClass2('bg-fire text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'water':
          setType2('Agua')
          setTypeClass2('bg-water text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'grass':
          setType2('Planta')
          setTypeClass2('bg-grass text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'flying':
          setType2('Volador')
          setTypeClass2('bg-flying text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'poison':
          setType2('Veneno')
          setTypeClass2('bg-poison text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'electric':
          setType2('Electrico')
          setTypeClass2('bg-electric text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ground':
          setType2('Tierra')
          setTypeClass2('bg-ground text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'rock':
          setType2('Roca')
          setTypeClass2('bg-rock text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'psychic':
          setType2('Psiquico')
          setTypeClass2('bg-psychic text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ice':
          setType2('Hielo')
          setTypeClass2('bg-ice text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'bug':
          setType2('Bicho')
          setTypeClass2('bg-bug text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ghost':
          setType2('Fantasma')
          setTypeClass2('bg-ghost text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'steel':
          setType2('Acero')
          setTypeClass2('bg-steel text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'dragon':
          setType2('Dragon')
          setTypeClass2('bg-dragon text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'dark':
          setType2('Siniestro')
          setTypeClass2('bg-dark text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fairy':
          setType2('Hada')
          setTypeClass2('bg-fairy text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fighting':
          setType2('Lucha')
          setTypeClass2('bg-fighting text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;
      }
    }
    else {
      // Primer set
      const res1 = await getPokemonType(res.types[0].type.url)
      switch (res1.name) {
        case 'normal':
          setType1('Normal')
          setTypeClass1('bg-normal text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fire':
          setType1('Fuego')
          setTypeClass1('bg-fire text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'water':
          setType1('Agua')
          setTypeClass1('bg-water text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'grass':
          setType1('Planta')
          setTypeClass1('bg-grass text-dark rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'flying':
          setType1('Volador')
          setTypeClass1('bg-flying text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'poison':
          setType1('Veneno')
          setTypeClass1('bg-poison text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'electric':
          setType1('Electrico')
          setTypeClass1('bg-electric text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ground':
          setType1('Tierra')
          setTypeClass1('bg-ground text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'rock':
          setType1('Roca')
          setTypeClass1('bg-rock text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'psychic':
          setType1('Psiquico')
          setTypeClass1('bg-psychic text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ice':
          setType1('Hielo')
          setTypeClass1('bg-ice text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'bug':
          setType1('Bicho')
          setTypeClass1('bg-bug text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'ghost':
          setType1('Fantasma')
          setTypeClass1('bg-ghost text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'steel':
          setType1('Acero')
          setTypeClass1('bg-steel text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'dragon':
          setType1('Dragon')
          setTypeClass1('bg-dragon text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'dark':
          setType1('Siniestro')
          setTypeClass1('bg-dark text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fairy':
          setType1('Hada')
          setTypeClass1('bg-fairy text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;

        case 'fighting':
          setType1('Lucha')
          setTypeClass1('bg-fighting text-light rounded-3 pt-1 pb-1 ps-5 pe-5')
          break;
      }
    }

    const resGender = await getPokeGender(res.name)

    if (resGender.results.length > 2) {
      setGender('Masculino, Femenino o Sin Genero')
    }
    else {
      setGender('Masculino o Femenino')
    }

    setFront(res.sprites.front_default)
    setBack(res.sprites.back_default)
    setFrontShiny(res.sprites.front_shiny)
    setBackShiny(res.sprites.back_shiny)

    // NORMAL CASE
    if (res.sprites.front_female != null) {
      setFrontFemale(res.sprites.front_female)
    }
    
    if (res.sprites.back_female != null) {
      setBackFemale(res.sprites.back_female)
    }
    // NULL CASE
    if (res.sprites.front_female == null) {
      setFrontFemale(res.sprites.front_default)
    }
    
    if (res.sprites.back_female == null) {
      setBackFemale(res.sprites.back_default)
    }

    // SHINY CASE
    if (res.sprites.front_shiny_female != null) {
      setFrontShinyFemale(res.sprites.front_shiny_female)
    }
    
    if (res.sprites.back_shiny_female != null) {
      setBackShinyFemale(res.sprites.back_shiny_female)
    }
    // SHINY NULL CASE
    if (res.sprites.front_shiny_female == null) {
      setFrontShinyFemale(res.sprites.front_shiny)
    }
    
    if (res.sprites.back_shiny_female == null) {
      setBackShinyFemale(res.sprites.back_shiny)
    }

    var arrMoves = []
    var arrPower = []
    var arrPP = []
    var arrAcc = []

    for (let k = 0; k < res.moves.length; k++) {

      const resMove = await getPokeMoves(res.moves[k].move.name)

      arrMoves.push(resMove.names[5])
      arrPower.push(resMove.power)
      arrPP.push(resMove.pp)
      arrAcc.push(resMove.accuracy)
    }

    setMoves(arrMoves)
    setPower(arrPower)
    setPP(arrPP)
    setAccuracy(arrAcc)

    // Loader en false
    setLoading(false)
  }

  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        {
          (loading) ?
            <>
              <div className="text-center">
                <div className="lds-spinner mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            </> :
            <>
              <div className="text-center">
                <h2 className='mb-5'>Informacion de <span className="text-capitalize">{pokemon.name} - N°{pokemon.id}</span></h2>

                <div className="container">
                  <div className="row">

                    {/* IMAGEN */}
                    <div className="col-sm-6 w-50 text-center">
                      <div className="row">
                        <div className="col-sm-12">
                          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Pokemon" className="bg-pokemon rounded-3 m-auto img-fluid sombra" />
                        </div>
                      </div>

                      <br />

                      {/* STATS */}
                      <div className="row">
                        <h3 className="mt-4">Puntos base</h3>
                        <div className="row">
                          <div className="col-sm-5 text-end">HP</div>
                          <div className="col-sm-5" id="hp_bar">
                            <div className="progress mt-1">
                              <div className="progress-bar bg-success" role="progressbar" style={{ width: pokemon.stats[0].base_stat }} aria-valuenow={pokemon.stats[0].base_stat} aria-valuemin="0" aria-valuemax="200">{pokemon.stats[0].base_stat}</div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5 text-end">Ataque</div>
                          <div className="col-sm-5" id="atk_bar">
                            <div className="progress mt-1">
                              <div className="progress-bar bg-danger" role="progressbar" style={{ width: pokemon.stats[1].base_stat }} aria-valuenow={pokemon.stats[1].base_stat} aria-valuemin="0" aria-valuemax="200">{pokemon.stats[1].base_stat}</div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5 text-end">Defensa</div>
                          <div className="col-sm-5" id="def_bar">
                            <div className="progress mt-1">
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: pokemon.stats[2].base_stat }} aria-valuenow={pokemon.stats[2].base_stat} aria-valuemin="0" aria-valuemax="200">{pokemon.stats[2].base_stat}</div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5 text-end">Ataque ESP</div>
                          <div className="col-sm-5" id="atksp_bar">
                            <div className="progress mt-1">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: pokemon.stats[3].base_stat }} aria-valuenow={pokemon.stats[3].base_stat} aria-valuemin="0" aria-valuemax="200">{pokemon.stats[3].base_stat}</div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5 text-end">Defensa ESP</div>
                          <div className="col-sm-5" id="defsp_bar">
                            <div className="progress mt-1">
                              <div className="progress-bar bg-fire" role="progressbar" style={{ width: pokemon.stats[4].base_stat }} aria-valuenow={pokemon.stats[4].base_stat} aria-valuemin="0" aria-valuemax="200">{pokemon.stats[4].base_stat}</div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-5 text-end">Velocidad</div>
                          <div className="col-sm-5" id="spd_bar">
                            <div className="progress mt-1">
                              <div className="progress-bar bg-info" role="progressbar" style={{ width: pokemon.stats[5].base_stat }} aria-valuenow={pokemon.stats[5].base_stat} aria-valuemin="0" aria-valuemax="200">{pokemon.stats[5].base_stat}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARACTERISTICAS */}
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="container bg-primary text-light p-4 rounded-3 text-center sombra">
                          <div className="row">
                            <div className="col-sm-6">
                              <h4>Altura</h4>
                            </div>
                            <div className="col-sm-6">
                              <h4>Categoria</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <h5>{(pokemon.height / 10)}M</h5>
                            </div>
                            <div className="col-sm-6">
                              <h5 className='text-capitalize'>{skill}</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <h4>Peso</h4>
                            </div>
                            <div className="col-sm-6">
                              <h4>Habilidad</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6">
                              <h5>{(pokemon.weight / 10)}KG</h5>
                            </div>
                            <div className="col-sm-6">
                              <h5 className='text-capitalize'>{category}</h5>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div class="col-sm-12">
                                <h4>Genéro</h4>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="col-sm-12">
                                <h5>{gender}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />

                      {/* TIPO */}
                      <div className="row mt-3 text-center">
                        <div className="col-sm-12">
                          <h3 class="mb-3">Tipo</h3>
                          <br />
                          <h6>
                            <span className={typeClass1}>{type1}</span> <span className={typeClass2}>{type2}</span>
                          </h6>
                        </div>
                      </div>

                    </div>
                  </div>

                  <br />

                  {/* SPRITES DEL POKEMON */}
                  <div className="container mt-5 m-auto text-center">
                    <h3>Imagenes del Pokémon</h3>

                    <div className="row">
                      <h3 className="col-sm-12">
                        Masculino
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 text-end">
                        <img src={front} alt="Pokemon" id="front_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <img src={back} alt="Pokemon" id="back_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                    </div>

                    <div className="row">
                      <h3 className="col-sm-12 mt-3">
                        Femenino
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 text-end">
                        <img src={frontFemale} alt="Pokemon" id="front_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <img src={backFemale} alt="Pokemon" id="back_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                    </div>

                    <div className="row">
                      <h3 className="col-sm-12 mt-3">
                        Shiny Masculino
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 text-end">
                        <img src={frontShiny} alt="Pokemon" id="front_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <img src={backShiny} alt="Pokemon" id="back_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                    </div>

                    <div className="row">
                      <h3 className="col-sm-12 mt-3">
                        Shiny Femenino
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 text-end">
                        <img src={frontShinyFemale} alt="Pokemon" id="front_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                      <div className="col-sm-6 text-start">
                        <img src={backShinyFemale} alt="Pokemon" id="back_male" className="bg-pokemon rounded-3 m-auto img-fluid w-25 sombra" />
                      </div>
                    </div>
                  </div>

                  {/* MOVIMIENTOS */}
                  <div className="container mt-5 m-auto text-center" id="moves">
                    <h3 class="text-center">Tabla de movimientos</h3>
                    <table class="table" id="moves-table">
                      <thead>
                        <tr>
                          <th scope="col">Movimiento</th>
                          <th scope="col">Poder</th>
                          <th scope="col">PP</th>
                          <th scope="col">Precision</th>
                        </tr>
                      </thead>
                      <tbody id="movesInfo">
                        <tr>
                          <td>
                            {moves.map((name, idx) => {
                              return (
                                <p key={idx}>{name.name}</p>
                              )
                            })}
                          </td>
                          <td>
                            {power.map((power, idx) => {
                              return (
                                <p key={idx}>{(power === null) ? 'Buff / Debuf' : power + ' Poder'}</p>
                              )
                            })}
                          </td>
                          <td>
                            {pp.map((pp, idx) => {
                              return (
                                <p key={idx}>{pp} Usos</p>
                              )
                            })}
                          </td>
                          <td>
                            {accuracy.map((accuracy, idx) => {
                              return (
                                <p key={idx}>{(accuracy === null) ? 'Buff / Debuf' : accuracy + '%'}</p>
                              )
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
        }
      </div>

    </>
  )
}
