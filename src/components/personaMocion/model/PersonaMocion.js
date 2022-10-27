import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PersonaMocionService from "../services/PersonaMocionService";
import MocionService from "../../mocion/services/MocionService";
import PersonaService from "../../persona/services/PersonaService";
import Dropdown from 'react-bootstrap/Dropdown';

const PersonaMocion = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialPersonaMocionState = {
        id: null,
        //texto: "",
    };
    const initialIDState = {
        idPersona: null,
        idMosion: ""
    }

    const [currentMocion, setCurrentMocion] = useState(initialIDState);
    const [currentPersna, setCurrentPersona] = useState(initialIDState);
    const [currentPersonaMocion, setPersonaMocion] = useState(initialPersonaMocionState);
    const [message, setMessage] = useState("");

    /*const getPersonaMocion = () => {
        PersonaMocionService.getAll()
            .then((response) => {
                setCurrentMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };*/

    useEffect(() => {
        retrieveMociones();
        retrievePersonas();

    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentMocion({ ...currentMocion, [name]: value });
    };

    const retrieveMociones = () => {
        MocionService.getAll()
            .then((response) => {
                setPersonaMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const retrievePersonas = () => {
        PersonaService.getAll()
            .then((response) => {
                setPersonaMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const updateMocion = () => {
        /* var data = {
             texto: currentMocion.texto,
             fecha: currentMocion.fecha,
         };*/
        PersonaMocionService.create(currentPersna.idPersona, currentMocion.idMosion)
            .then((response) => {
                console.log(response.data);
                setMessage("La mocion fue actualizada");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deletePersonaMocion = () => {
        PersonaMocionService.remove(currentPersonaMocion.id)
            .then((response) => {
                console.log(response.data);
                navigate("/persona_mocion");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentMocion ? (
                <div className="edit-form">
                    <h4>Mocion</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="identidicacion">Identificacion</label>
                            <input
                                type="number"
                                className="form-control"
                                id="identificacion"
                                name="identificacion"
                                value={currentPersonaMocion.id}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="nombre">Persona</label>
                            <input
                                type="text"
                                className="form-control"
                                id="texto"
                                name="texto"
                                value={currentPersna.idPersona}
                                onChange={handleInputChange}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="nombre">Mocion</label>
                            <input
                                type="text"
                                className="form-control"
                                id="texto"
                                name="texto"
                                value={currentMocion.idMosion}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Tipos de Mociones
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </form>

                    <button className="btn btn-danger" onClick={deletePersonaMocion}>
                        Borrar
                    </button>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={updateMocion}
                    >
                        Actualizar
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Seleccione una mocion...</p>
                </div>
            )}
        </div>
    );
};
export default Mocion;
