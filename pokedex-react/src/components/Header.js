import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import pokeapiLogo from '../img/pokeapi_256.png';
import pokeballLogo from '../img/pokeball.png'

export const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand>
						<img src={pokeballLogo} alt="pokeapi-logo" className="img-fluid navbar-img" /> Pokédex
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/" className='text-decoration-none text-light'>Inicio</Link>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
