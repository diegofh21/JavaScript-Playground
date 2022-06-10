import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { getPokemonType } from "../api/request";

export const Pokemon = (props) => {

  const { pokemon } = props;

  // var Type1 = "";
  // var Type2 = "";
  var typeOutput1 = "";
  var typeOutput2 = "";
  var typeOutput3;

  const getOneType = async () => {
    try {
      const tipo1 = await getPokemonType(pokemon.types[0].type.name);
    } catch (error) {
      console.log(error)
    }
  }

  const getTwoTypes = async () => {
    try {
      const tipo1 = await getPokemonType(pokemon.types[0].type.name);
      const tipo2 = await getPokemonType(pokemon.types[1].type.name);

      switch (pokemon.types[0].type.name) {
        case 'normal':
          typeOutput1 = <span class="bg-normal text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Normal</span>
          break;

        case 'fire':
          typeOutput1 = <span class="bg-fire text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Fuego</span>
          break;

        case 'water':
          typeOutput1 = <span class="bg-water text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Agua</span>
          break;

        case 'grass':
          typeOutput1 = <span class="bg-grass text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Hierba</span>
          break;

        case 'flying':
          typeOutput1 = <span class="bg-flying text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Volador</span>
          break;

        case 'poison':
          typeOutput1 = <span class="bg-poison text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Veneno</span>
          break;

        case 'electric':
          typeOutput1 = <span class="bg-electric text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Electrico</span>
          break;

        case 'ground':
          typeOutput1 = <span class="bg-ground text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Tierra</span>
          break;

        case 'rock':
          typeOutput1 = <span class="bg-rock text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Roca</span>
          break;

        case 'psychic':
          typeOutput1 = <span class="bg-psychic text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Psiquico</span>
          break;

        case 'ice':
          typeOutput1 = <span class="bg-ice text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Heilo</span>
          break;

        case 'bug':
          typeOutput1 = <span class="bg-bug text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Bicho</span>
          break;

        case 'ghost':
          typeOutput1 = <span class="bg-ghost text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Fantasma</span>
          break;

        case 'steel':
          typeOutput1 = <span class="bg-steel text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Acero</span>
          break;

        case 'dragon':
          typeOutput1 = <span class="bg-dragon text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Dragon</span>
          break;

        case 'dark':
          typeOutput1 = <span class="bg-dark text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Dark</span>
          break;

        case 'fairy':
          typeOutput1 = <span class="bg-fairy text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Hada</span>
          break;

        case 'fighting':
          typeOutput1 = <span class="bg-fighting text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Lucha</span>
          break;

        default:
          break;
      }

      // Segundo tipo
      switch (pokemon.types[1].type.name) {
        case 'normal':
          typeOutput2 = <span class="bg-normal text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Normal</span>
          break;

        case 'fire':
          typeOutput2 = <span class="bg-fire text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Fuego</span>
          break;

        case 'water':
          typeOutput2 = <span class="bg-water text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Agua</span>
          break;

        case 'grass':
          typeOutput2 = <span class="bg-grass text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Hierba</span>
          break;

        case 'flying':
          typeOutput2 = <span class="bg-flying text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Volador</span>
          break;

        case 'poison':
          typeOutput2 = <span class="bg-poison text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Veneno</span>
          break;

        case 'electric':
          typeOutput2 = <span class="bg-electric text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Electrico</span>
          break;

        case 'ground':
          typeOutput2 = <span class="bg-ground text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Tierra</span>
          break;

        case 'rock':
          typeOutput2 = <span class="bg-rock text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Roca</span>
          break;

        case 'psychic':
          typeOutput2 = <span class="bg-psychic text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Psiquico</span>
          break;

        case 'ice':
          typeOutput2 = <span class="bg-ice text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Heilo</span>
          break;

        case 'bug':
          typeOutput2 = <span class="bg-bug text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Bicho</span>
          break;

        case 'ghost':
          typeOutput2 = <span class="bg-ghost text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Fantasma</span>
          break;

        case 'steel':
          typeOutput2 = <span class="bg-steel text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Acero</span>
          break;

        case 'dragon':
          typeOutput2 = <span class="bg-dragon text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Dragon</span>
          break;

        case 'dark':
          typeOutput2 = <span class="bg-dark text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Dark</span>
          break;

        case 'fairy':
          typeOutput2 = <span class="bg-fairy text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Hada</span>
          break;

        case 'fighting':
          typeOutput2 = <span class="bg-fighting text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Lucha</span>
          break;

        default:
          break;
      }

      // typeOutput3 = `<p><span class='${typeOutput1.props.class}'>${typeOutput1.props.children}</span></p><span class='${typeOutput1.props.class}' >${typeOutput2.props.children}</span>`
      typeOutput3 = typeOutput1 + typeOutput2
      // console.log("2 tipos", typeOutput3)
      console.log(typeOutput3)
    } catch (error) {
      console.log(error)
    }
  }

  if (pokemon.types.length === 2) {
    for (let i = 1; i < pokemon.types.length; i++) {
      getTwoTypes();
      break;
    }
  }
  else {
    getOneType();
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
                {/* {pokemon.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text col-sm-6 text-center">
                      {type.type.name}
                    </div>
                  );
                })} */}
                {(() => {
                  if (pokemon.types.length === 2) {
                    // typeOutput3.map((type, idx) => {
                    //   return(<div>1{type}</div>);
                    // })
                    Object.keys(typeOutput3).map((key,idx) => {
                      return(
                        <div>{key}</div>
                      );
                    })
                  } else {
                    return (
                      <div>1</div>
                    )
                  }
                })()}
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
