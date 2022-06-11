import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { getPokemonType } from "../api/request";

export const Pokemon = (props) => {

  const { pokemon } = props;

  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [typeClass1, setTypeClass1] = useState('')
  const [typeClass2, setTypeClass2] = useState('')

  useEffect(() => {
    pokeTypes()
  }, []);

  const pokeTypes = async () => {
    if (pokemon.types.length > 1) {
      // Primer set
      const res1 = await getPokemonType(pokemon.types[0].type.url)
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
      const res2 = await getPokemonType(pokemon.types[1].type.url)
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
      const res1 = await getPokemonType(pokemon.types[0].type.url)
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
  }

  return (
    <>
      <div className="m-auto">
        <Card className="flex-row w-100 m-4 pokemon-card">
          <Card.Img variant="left" className="card-img-left w-35" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
          <Card.Body className="">
            <Card.Title>
              <Row>
                <Col>
                  <h2 className="text-start text-capitalize">{pokemon.name}</h2>
                </Col>
                <Col className="text-end">
                  <span className="">#{pokemon.id}</span>
                </Col>
              </Row>
            </Card.Title>
            <Card.Text>
              <Row className="text-justify text-capitalize">
                <h6><span className={typeClass1}>{type1}</span> <span className={typeClass2}>{type2}</span></h6>
              </Row>
            </Card.Text>
            <Button variant="primary" className="mt-2">
              <Link
                to={`/pokemon/${pokemon.id}`} className="text-decoration-none text-light"
                key={pokemon.id}
              >
                Ver más sobre <span className="text-capitalize">{pokemon.name}</span>
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

// export default Pokemon;
