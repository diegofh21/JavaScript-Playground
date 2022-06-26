import React, { useState, useContext } from 'react';

import { Link } from "react-router-dom";
import { makeLoginData } from './../../api/request';
import { AuthContext } from './../../context/AuthContext';
import { Button } from 'react-bootstrap';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const makeRequest = async () => {
    setLoading(true);

    if (email === "") {
      alert("El email esta vacio")
    }
    else if (password === "") {
      alert("La contraseña esta vacia")
    }
    else {
      console.log(email, password);

      const jsn = {
        'email': email,
        'pass': password
      }

      const res = await makeLoginData(jsn);
      console.log(res);

      signIn(res);

    }


    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" className="form-control" value={email}
              onChange={(val) => setEmail(val.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input className="form-control"
              type="password"
              value={password}
              onChange={(val) => setPassword(val.target.value)} />
          </div>

          <div className="row">
            <div className='mt-2 col-sm-1'>
              <Link to="/register" className='btn btn-primary'>Registrar</Link>
            </div>
            <div className="mt-2 col-sm-1">
              {
                (loading) ? <>
                  <div className="text-center">
                    <div class="lds-spinner mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                  </div>
                </> : <>
                  <Button onClick={() => makeRequest()} className='btn btn-success'> Ingresar </Button>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </>

    // <div class="lds-spinner mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}
