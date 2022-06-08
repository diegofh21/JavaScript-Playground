import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import pokedexLogo from '../img/pokedex.png'


export const Pokedex = (props) => {

  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <>
      <Container fluid className="mt-3 pe-5">
        <Row>
          <Col>
            <h1 className="ms-5"><img src={pokedexLogo} alt="pokedex logo" className="w-25 img-fluid" /> Pokédex</h1>
          </Col>
          <Col className="d-flex">
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={lastPage}
              onRightClick={nextPage}
            />
          </Col>
        </Row>
        <div className="container-fluid text-center m-auto">
          {loading ? (
            <div class="lds-spinner mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          ) : (
            <div className="pokedex-grid">
              {pokemons.map((pokemon, idx) => {
                return <Pokemon pokemon={pokemon} key={pokemon.name} />;
              })}
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
