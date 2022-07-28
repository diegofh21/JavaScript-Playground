import React, { useEffect, useReducer, useContext } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext';

export const Header = () => {

	const { signOut } = useContext(AuthContext);

	const closeSession = () => {
		signOut();
	}

	const initialLoginState = {
		isLoading: true,
		token: null
	}

	const loginReducer = (prevState, action) => {
		// eslint-disable-next-line default-case
		switch (action.type) {
			case 'RESTORE_TOKEN':
				return {
					...prevState,
					token: action.token,
					isLoading: false
				}
			case 'LOGIN':
				return {
					...prevState,
					token: action.token,
					isLoading: false
				}
			case 'LOGOUT':
				return {
					...prevState,
					token: action.token,
					isLoading: false
				}
		}
	}

	const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

	const authContext = React.useMemo(
		() => ({
			signIn: async data => {
				try {
					console.log("TOKEN ==> " + data);
					window.localStorage.setItem("token", data)
				}
				catch (e) {
					console.log(e)
				}

				dispatch({ type: 'LOGIN', token: data });
			},
			signOut: () => {
				window.localStorage.removeItem("token");
				dispatch({ type: 'LOGOUT', token: null });
			}
		}),
		[]
	);

	useEffect(() => {
		const checkToken = async () => {
			let userToken;

			try {
				userToken = window.localStorage.getItem("token");
			}
			catch (e) {
				console.log(e)
			}

			dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		}

		checkToken();
	}, [])
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#home">React WebShop</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Inicio</Nav.Link>
							<Nav.Link href="/catalogo">Productos</Nav.Link>
						</Nav>
						{
							(loginState.token === null) ? <>
								<Nav>
									<Nav.Link href="/login">Iniciar sesión</Nav.Link>
									<Nav.Link href="/register">Registrarse</Nav.Link>
								</Nav>
							</> : <>
								<Nav>
									<Nav.Link href="/profile">Perfil</Nav.Link>
									<Nav.Link onClick={() => closeSession()}>Cerrar sesión</Nav.Link>
								</Nav>
							</>
						}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
