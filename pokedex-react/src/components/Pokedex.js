import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export const Pokedex = (props) => {

  console.log(props)
  const {pokemons} = props

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h1>Pokedex</h1>
          </Col>
          <Col>
            <div className="text-end">Paginacion</div>
          </Col>
        </Row>
        <div>
        {pokemons.map((pokemon, idx) => {
            return <div>{pokemon.name}</div>;
          })}
        </div>
      </Container>
    </>


  )
}
