import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand>
						WebShop
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link>
							<Link to="/" className='text-decoration-none text-light'>Inicio</Link>
						</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link>
							<Link>sdfsdfsdf</Link>
						</Nav.Link>
						<Nav.Link>
							<Link>sdfsdfsdf</Link>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
