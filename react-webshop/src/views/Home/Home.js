import React, {useContext} from 'react';

import Header from '../../components/Header';
import { AuthContext } from './../../context/AuthContext';

export default function Home() {

	const { signOut } = useContext(AuthContext);

	const closeSession = () => {
		signOut();
	}

	return (
		<>
			<Header />
			<div className="container">
				<h1>INICIO xd</h1>
			</div>
		</>
	)
}

// export default Home;