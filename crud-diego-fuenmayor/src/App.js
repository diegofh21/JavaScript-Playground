import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

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

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [birthday, setBirthday] = useState('');
  const [seccion, setSeccion] = useState('');
  const [genero, setGenero] = useState('');
  const [students, setStudents] = useState([])

  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  // Metodos

  const addStudents = () => {
    if (nombre === "") {
      alert(`Ingrese el nombre`)
    }
    else if (apellido === "") {
      alert(`Ingrese el apellido`)
    }
    else if (cedula === "") {
      alert(`Ingrese el apellido`)
    }
    else if (seccion === "") {
      alert(`Ingrese el apellido`)
    }
    else if (genero === "") {
      alert(`Ingrese el apellido`)
    }
    else if (isNaN(cedula)) {
      alert(`La cedula solamente puede ser numerica`)
    }
    else {
      const jsn = {
        "nombre": nombre,
        "apellido": apellido,
        "cedula": cedula,
        "birthday": birthday,
        "seccion": seccion,
        "genero": genero
      }


      const arrStudents = [...students];
      arrStudents.push(jsn);
      setStudents(arrStudents);

      setNombre('');
      setApellido('');
      setCedula('');
      setBirthday('');
      setSeccion('');
      setGenero('');
    }
  }

  const [studentSelected, setStudentSelected] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    birthday: '',
    seccion: '',
    genero: '',
  });

  const seleccionarEstudiante = (elemento, caso) => {
    setStudentSelected(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange=e=>{
    const {cedula, nombre, apellido, value}=e.target;
    setStudentSelected((prevState)=>({
      ...prevState,
      [cedula]: value,
      [nombre]: value,
      [apellido]: value
    }));
  }

  const editar=()=>{
    var dataNueva=students;
    dataNueva.map(estudiante=>{
      if(estudiante.cedula===studentSelected.cedula){
        estudiante.apellido=studentSelected.apellido;
        estudiante.nombre=studentSelected.nombre;
      }
    });
    setStudents(dataNueva);
    setModalEditar(false);
  }
  // const editStudents = (cedula) => {
  //   for (let i = 0; i < students.length; i++) {
  //     if(students[i].cedula == cedula)
  //     {
  //       // console.log(students[i].nombre)
  //       document.getElementsByName('nombre').value = students[i].nombre
  //     }
  //   }
  // }

  const removeStudents = (cedula) => {
    setStudents(students.filter(items => items.cedula !== cedula))
  }

  return (
    <>
      <Container className='mt-4'>

        <FormGroup>
          <label htmlFor="cedula">Cedula</label>
          <input type="number" className="form-control" name='cedula' minLength={6} maxLength={8} value={cedula} onChange={(val) => setCedula(val.target.value)} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" name='nombre' id={nombre.toString()} value={nombre} onChange={(val) => setNombre(val.target.value)} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" className="form-control" name='apellido' value={apellido} onChange={(val) => setApellido(val.target.value)} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="birthday">Fecha de Nacimiento</label>
          <input type="date" className="form-control" name='birthday' value={birthday} onChange={(val) => setBirthday(val.target.value)} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="genero">Genero</label>
          <select
            className='form-select'
            value={genero}
            onChange={(val) => setGenero(val.target.value)}>
            <option value="">Seleccionar</option>
            {
              arrGenero.map((genero, index) => (
                <option key={index} value={genero.value}> {genero.value} </option>
              ))
            }
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="seccion">Seccion</label>
          <select
            className='form-select'
            value={seccion}
            onChange={(val) => setSeccion(val.target.value)}>
            <option value="">Seleccionar</option>
            {
              arrSeccion.map((seccion, index) => (
                <option key={index} value={seccion.value}> {seccion.value} </option>
              ))
            }
          </select>
        </FormGroup>

        <Button color='success' onClick={() => addStudents()}>Agregar nuevo estudiante</Button>

        <h1 className="mt-3 mb-5 text-center">Lista de Estudiantes</h1>
        <Table>
          <thead className='text-center'>
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
          <tbody className='text-center'>
            {
              students.map((s, index) => (
                <tr>
                  <td key={index}>{s.cedula}</td>
                  <td>{s.nombre}</td>
                  <td>{s.apellido}</td>
                  <td>{s.birthday}</td>
                  <td>{s.genero}</td>
                  <td>{s.seccion}</td>
                  <td><Button color='warning' className='me-2' onClick={()=>studentSelected(elemento, 'Editar')}>Editar</Button><Button color='danger' onClick={() => removeStudents(s.cedula)}>Eliminar</Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar País</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Cedula</label>
            <input
              className="form-control"
              type="number"
              name="cedula"
              value={studentSelected && studentSelected.cedula}
              onChange={handleChange}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={studentSelected && studentSelected.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="apellido"
              value={studentSelected && studentSelected.apellido}
              onChange={handleChange}
            />
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
    </>
  );
}

export default App;
