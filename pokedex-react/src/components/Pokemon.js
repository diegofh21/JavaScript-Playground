import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const Pokemon = (props) => {

  const { pokemon } = props;

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
                {pokemon.types.map((type, idx) => {
                  return (
                    <div key={idx} className="pokemon-type-text col-sm-6 text-center">
                      {type.type.name}
                    </div>
                  );
                })}
              </Row>
            </Card.Text>
            <Button variant="primary" className="mt-2">Ver más sobre <span className="text-capitalize">{pokemon.name}</span></Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Pokemon;
