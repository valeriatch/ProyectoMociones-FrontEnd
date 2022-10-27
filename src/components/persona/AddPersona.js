import React, { useState, useEffect } from "react";
import PersonaDataService from "./services/PersonaService";
import MocionesDataService from "../mocion/services/MocionService";
import Dropdown from 'react-bootstrap/Dropdown';

const AddPersona = () => {
  const initialPersonaState = {
    id: null,
    identificacion: "",
    persona: "",
    fecha: "",
  };
  const initialMocionState = {
    id: null,
    texto: "",
    tipomocion: "",

  };
  const [persona, setPersona] = useState(initialPersonaState);
  const [submitted, setSubmitted] = useState(false);
  const [currentMocion, setCurrentMocion] = useState(initialMocionState);
  const [mociones, setMociones] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersona({ ...persona, [name]: value });
  };
  const savePersona = () => {
    var data = {
      identificacion: persona.identificacion,
      nombre: persona.nombre,

    };
    PersonaDataService.create(data)
      .then((response) => {
        setPersona({
          identificacion: response.data.identificacion,
          nombre: response.data.nombre,
          fecha: response.data.fecha,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  let valores = mociones.map((mocion, index) => {
    return (
      console.log(mocion),
      <Dropdown.Item key={index} value={mocion.id}>
        {mocion.texto}
      </Dropdown.Item>
    );

  }, this);
  useEffect(() => {
    retrieveMociones();
  }, []);

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setCurrentMocion({ ...currentMocion, [name]: value });
  };

  const retrieveMociones = () => {
    MocionesDataService.getAll()
      .then((response) => {
        setMociones(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newPersona = () => {
    setPersona(initialPersonaState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Almacenado Corretamente</h4>
          <button className="btn btn-success" onClick={newPersona}>
            Agregar
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="identificacion">Identificacion</label>
            <input
              type="text"
              className="form-control"
              id="identificacion"
              required
              value={persona.identificacion}
              onChange={handleInputChange}
              name="identificacion"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              required
              value={persona.nombre}
              onChange={handleInputChange}
              name="nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">Mociones</label>
            <Dropdown onChange={handleInputChange2}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tipos de Mociones
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {valores}
              </Dropdown.Menu>
            </Dropdown>

          </div>
          <button onClick={savePersona} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};
export default AddPersona;
