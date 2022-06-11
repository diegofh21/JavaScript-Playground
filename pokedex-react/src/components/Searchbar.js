import React, { useState, useEffect } from 'react'
import { Container, FormControl, Button, Row, Col } from 'react-bootstrap'

export const Searchbar = (props) => {

  const { onSearch } = props;
  const [search, setSearch] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search.toLowerCase());
  };

  useEffect(() => {
    
  })

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <FormControl
              type="search"
              placeholder="Escribe el nombre de un pokémon"
              className="d-flex me-2 mt-4 searchbar w-75 m-auto"
              aria-label="Buscar"
              onChange={onChange}
            />
          </Col>
          <Col>
          <Button variant="primary" className="d-flex mt-4 searchbar-btn m-auto" onClick={onClick}>Buscar pokémon</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
