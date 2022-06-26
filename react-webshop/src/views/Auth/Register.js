import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeRegisterData } from './../../api/request'
import { Button } from 'react-bootstrap';

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const makeRequest = async () => {
    setLoading(true);

    if (name.trim() === "") {
      alert("El nombre esta vacio")
    }
    else if (email.trim() === "") {
      alert("El email esta vacio")
    }
    else if (password.trim() === "") {
      alert("La contraseña esta vacia")
    }
    else {
      console.log(email, password)
    }

    const jsn = {
      "name": name,
      "email": email,
      "password": password
    }

    const res = await makeRegisterData(jsn);
    console.log(res)

    setLoading(false);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="form-group">
            <label htmlFor="name">Nombre y apellido</label>
            <input type="text" className="form-control" 
            value={name}
            onChange={(val) => setName(val.target.value) } />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input className="form-control"
            type="email"
            value={email}
            onChange={(val) => setEmail(val.target.value) } />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input className="form-control"
            type="password"
            value={password}
            onChange={(val) => setPassword(val.target.value) } />
          </div>

          <Link to="/" className='btn btn-danger'>Regresar</Link>

          <div className="mt-2">
          {
              (loading) ? <>
              <div className ="text-center">
              <div class="lds-spinner mt-5"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
               </> : <>
                 <Button onClick={() => makeRequest()} className="btn btn-success"> Registrar </Button>
               </>
            }
          </div>
        </div>
      </div>
    </>
  )
}
