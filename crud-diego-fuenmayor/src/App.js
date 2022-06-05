import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function App() {

  const arrSeccion = [
    { "value": "A" },
    { "value": "B" },
    { "value": "C" }
  ]
  const arrGenero = [
    { "value": "Masculino" },
    { "value": "Femenino" },
    { "value": "Indefinido" }
  ]

  const [student, setStudent] = useState([]);
  const [modalVer, setModalVer] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);


  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    birthday: '',
    genero: '',
    seccion: ''
  });

  const seleccionarEstudiante = (elemento, caso) => {
    setEstudianteSeleccionado(elemento);
    switch (caso) {
      case 'Ver':
        setModalVer(true);
        break;
      case 'Editar':
        setModalEditar(true)
        break;
      case 'Eliminar':
        setModalEliminar(true)
        break;

      default:
        return;
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setEstudianteSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = student;
    dataNueva.map(estudiante => {
      if (estudiante.cedula === estudianteSeleccionado.cedula) {
        estudiante.nombre = estudianteSeleccionado.nombre;
        estudiante.apellido = estudianteSeleccionado.apellido;
        estudiante.birthday = estudianteSeleccionado.birthday;
        estudiante.genero = estudianteSeleccionado.genero;
        estudiante.seccion = estudianteSeleccionado.seccion;
      }
    });
    setStudent(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setStudent(student.filter(estudiante => estudiante.cedula !== estudianteSeleccionado.cedula));
    setModalEliminar(false);
  }

  const abrirModalInsertar = () => {
    setEstudianteSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    var valorInsertar = estudianteSeleccionado;
    var dataNueva = student;
    dataNueva.push(valorInsertar);
    setStudent(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App container">
      <h2 className='text-center mt-5'>Lista de estudiantes del curso</h2>
      <br />
      <button className="btn btn-success w-100" onClick={() => abrirModalInsertar()}>Agregar nuevo estudiante</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Genero</th>
            <th>Seccion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((s, index) => (
              <tr>
                {/* <td key={index}>{s.cedula}</td> */}
                <td>{s.nombre}</td>
                <td>{s.apellido}</td>
                {/* <td>{s.birthday}</td> */}
                <td>{s.genero}</td>
                <td>{s.seccion}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => seleccionarEstudiante(s, 'Ver')}>Ver</button> {"   "}
                  <button className="btn btn-warning" onClick={() => seleccionarEstudiante(s, 'Editar')}>Editar</button> {"   "}
                  <button className="btn btn-danger" onClick={() => seleccionarEstudiante(s, 'Eliminar')}>Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Estudiante</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Cedula</label>
            <input
              className="form-control"
              readOnly
              type="number"
              name="cedula"
              value={estudianteSeleccionado && estudianteSeleccionado.cedula}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={estudianteSeleccionado && estudianteSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="apellido"
              value={estudianteSeleccionado && estudianteSeleccionado.apellido}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de nacimiento</label>
            <input
              className="form-control"
              type="date"
              name="birthday"
              value={estudianteSeleccionado && estudianteSeleccionado.birthday}
              onChange={handleChange}
            />
            <br />

            <label>Genero</label>
            <select
              className='form-select'
              name="genero"
              value={estudianteSeleccionado && estudianteSeleccionado.genero}
              onChange={handleChange}>
              <option value="">Seleccionar</option>
              {
                arrGenero.map((genero, index) => (
                  <option key={index} value={genero.value}> {genero.value} </option>
                ))
              }
            </select>
            <br />

            <label>Seccion</label>
            <select
              className='form-select'
              name="seccion"
              value={estudianteSeleccionado && estudianteSeleccionado.seccion}
              onChange={handleChange}>
              <option value="">Seleccionar</option>
              {
                arrSeccion.map((seccion, index) => (
                  <option key={index} value={seccion.value}> {seccion.value} </option>
                ))
              }
            </select>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás seguro que deseas eliminar al estudiante con la cedula {estudianteSeleccionado && estudianteSeleccionado.cedula} ?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Agregar estudiante</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Cedula</label>
            <input
              className="form-control"
              type="number"
              name="cedula"
              onChange={handleChange}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={estudianteSeleccionado ? estudianteSeleccionado.nombre : ''}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="apellido"
              value={estudianteSeleccionado ? estudianteSeleccionado.apellido : ''}
              onChange={handleChange}
            />
            <br />

            <label>Fecha de nacimiento</label>
            <input
              className="form-control"
              type="date"
              name="birthday"
              value={estudianteSeleccionado ? estudianteSeleccionado.birthday : ''}
              onChange={handleChange}
            />
            <br />

            <label>Genero</label>
            <select
              className='form-select'
              name="genero"
              value={estudianteSeleccionado ? estudianteSeleccionado.genero : ''}
              onChange={handleChange}>
              <option value="">Seleccionar</option>
              {
                arrGenero.map((genero, index) => (
                  <option key={index} value={genero.value}> {genero.value} </option>
                ))
              }
            </select>
            <br />

            <label>Seccion</label>
            <select
              className='form-select'
              name="seccion"
              value={estudianteSeleccionado ? estudianteSeleccionado.seccion : ''}
              onChange={handleChange}>
              <option value="">Seleccionar</option>
              {
                arrSeccion.map((seccion, index) => (
                  <option key={index} value={seccion.value}> {seccion.value} </option>
                ))
              }
            </select>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
            onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalVer}>
        <ModalHeader>
          <div>
            <h3>Detalle de Estudiante</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          {
            student.map((s, index) => (
              <div className="row text-center">
                <div className="col-sm-6">
                  <strong>Cedula</strong>
                  <br />
                  {s.cedula}
                </div>
                <div className="col-sm-6">
                  <strong>Fecha de nacimiento</strong>
                  <br />
                  {s.birthday}
                </div>
                
                <div className="col-sm-6 mt-3">
                  <strong>Nombre</strong>
                  <br />
                  {s.nombre}
                </div>
                <div className="col-sm-6 mt-3">
                  <strong>Apellido</strong>
                  <br />
                  {s.apellido}
                </div>

                <div className="col-sm-6 mt-3">
                  <strong>Género</strong>
                  <br />
                  {s.genero}
                </div>
                <div className="col-sm-6 mt-3">
                  <strong>Sección</strong>
                  <br />
                  {s.seccion}
                </div>
              </div>  
            ))
          }
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => setModalVer(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;