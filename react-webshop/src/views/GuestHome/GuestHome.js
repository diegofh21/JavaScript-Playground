import React, {useContext} from 'react';

import Header from '../../components/Header';
import { AuthContext } from './../../context/AuthContext';

export default function Home() {

	return (
		<>
			<Header />
			<div className="home-body">
        <div className="container">
          <h1 className="text-center mt-5">Bienvenido a webshop</h1>
        </div>
      </div>
		</>
	)
}