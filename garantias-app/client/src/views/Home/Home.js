import React, { useState } from 'react';
import Axios from 'axios';
import mmxLogo from '../../img/MULTIMAX-MCBO.jpeg'
import clock from '../../img/clock-png.png'

import Header from '../../components/Header';

import '../../index.css';

export default function Home() {

  const [buscarProd, setBuscarProd] = useState('');

  const [marca, setMarca] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tiempo, setTiempo] = useState('');
  const [centro, setCentro] = useState('');

  const Buscar = () => {
    // console.log(buscarProd)
    Axios.get(`http://localhost:3001/producto/${buscarProd}`).then((res) =>{
      console.log(res.data[0]);
      setCodigo(res.data[0].codigo);
      setMarca(res.data[0].marca);
      setDescripcion(res.data[0].producto);
      setTiempo(res.data[0].tiempo_garantia)
      setCentro(res.data[0].centro_servicio)
    })
  }

  return (
    <>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 text-center">
            <img src={mmxLogo} alt="Multimax Maracaibo Logo" className="img-fluid w-50 shadow" />
          </div>
        </div>
      </div>

      {/* HACER LOS CONTAINER CON BREAKPOINTS PARA VERSION MOVIL */}

      <div className="container mt-5">
        <div className="row">
            <div className="col-sm-4 text-end pt-2">
              <label htmlFor="buscarProducto">Código de Producto:</label>
            </div>
            <div className="col-sm-4">
              <input type="text" name="buscarProducto" id="producto" className="form-control" placeholder="Ingrese el código del producto" onChange={(e) => {
                setBuscarProd(e.target.value);
              }}/>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-success" onClick={Buscar}>Buscar <img src={clock} alt="Clock" style={{width: "25px"}} className="ms-2"/></button>
            </div>
        </div>
      </div>

      <div className="container mt-5 bg-red shadow w-50 p-4">
        <div className="row">
          <div className="col-sm-6 text-center">
            <h4 className="pe-5">Marca:</h4>
          </div>
          <div className="col-sm-6">
            <h5 className="text-start">{marca}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <h4 className="pe-5">Código:</h4>
          </div>
          <div className="col-sm-6">
            <h5 className="text-start">{codigo}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <h4 className="pe-5">Producto:</h4>
          </div>
          <div className="col-sm-6">
            <h5 className="text-start">{descripcion}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <h4 className="pe-5">Tiempo de garantía:</h4>
          </div>
          <div className="col-sm-6">
            <h5 className="text-start">{tiempo}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 text-center">
            <h4 className="pe-5">Centro de Servicio:</h4>
          </div>
          <div className="col-sm-6">
            <h5 className="text-start">{centro}</h5>
          </div>
        </div>
      </div>
    </>
  )
}