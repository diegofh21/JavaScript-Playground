import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  // { id: 1, personaje: "Naruto", anime: "Naruto" },
  // { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  // { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  // { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  // { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
  // { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

// const arrSeccion = [
//   { "value": "A" },
//   { "value": "B" },
//   { "value": "C" }
// ]
// const arrGenero = [
//   { "value": "Masculino" },
//   { "value": "Femenino" },
//   { "value": "Indefinido" }
// ]

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      cedula: "",
      nombre: "",
      apellido: "",
      genero: [
        { "value": "Masculino" },
        { "value": "Femenino" },
        { "value": "Indefinido" }
      ],
      seccion: [
        { "value": "A" },
        { "value": "B" },
        { "value": "C" }
      ]
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.cedula == registro.cedula) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].apellido = dato.apellido;
        arreglo[contador].genero = dato.genero;
        arreglo[contador].seccion = dato.seccion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas eliminar al estudiante " + dato.cedula);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.cedula == registro.cedula) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    // const [seccion, setSeccion] = useState('');
    // const [genero, setGenero] = useState('');
    // setSeccion('');
    // setGenero('');
    var valorNuevo = { ...this.state.form };
    valorNuevo.cedula = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Genero</th>
                <th>Seccion</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.cedula}>
                  <td>{dato.cedula}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>{dato.genero}</td>
                  <td>{dato.seccion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Cedula:
              </label>

              <input
                className="form-control"
                name="cedula"
                type="text"
                value={this.state.form.cedula}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apellido}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Genero:
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apellido}
              />
            </FormGroup>

            {/* <FormGroup>
              <label>
                Seccion:
              </label>
              <select
                value={seccion}
                onChange={(val) => setSeccion(val.target.value)}>
                <option value="">Seleccionar</option>
                {
                  arrSeccion.map((seccion, index) => (
                    <option key={index} value={seccion.value}> {seccion.value} </option>
                  ))
                }
              </select>
            </FormGroup> */}
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>


            {/* Insert */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Cedula:
              </label>

              <input
                className="form-control"
                name="cedula"
                type="number"
                value={this.state.data.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Genero:
              </label>
              <select 
              className="form-control"
              name="genero"
              value={genero}>

              </select>
              {/* <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
              /> */}
                {/* <select
          value={lang}
          onChange={(val) => setLang(val.target.value)}>
          <option value="">Seleccionar</option>
          {
            arrLang.map( (lang, index) => (
              <option key={index} value={lang.value}> {lang.value} </option>
            ))
          }
        </select> */}
            </FormGroup>

            <FormGroup>
              <label>
                Genero:
              </label>
              <input
                className="form-control"
                name="apellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;