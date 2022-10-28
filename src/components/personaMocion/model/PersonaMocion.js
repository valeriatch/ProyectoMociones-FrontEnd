import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PersonaMocionService from "../services/PersonaMocionService";
import MocionService from "../../mocion/services/MocionService";
//import PersonaMocion from "./model/PersonaMocion";
import PersonaService from "../../persona/services/PersonaService";
import Dropdown from 'react-bootstrap/Dropdown';

const PersonaMocion = (props) => {
    const { id } = useParams();
    let navigate = useNavigate();
    /*const initialPersonaMocionState = {
        id: null,
        //texto: "",
    };*/
    const initialPersonaMocionState = {
        id: null,
        idPersona: "",
        idMosion: ""
    }

    //const [currentMocion, setCurrentMocion] = useState(initialIDState);
    //const [currentPersna, setCurrentPersona] = useState(initialIDState);
    const [mociones, setMociones] = useState([]);
    const [personas, setPersonas] = useState([]);
    const [currentPersonaMocion, setPersonaMocion] = useState(initialPersonaMocionState);
    const [message, setMessage] = useState("");

    const getPersonaMocion = (id) => {
        PersonaMocionService.getById(id)
            .then((response) => {
                setPersonaMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    useEffect(() => {
        if (id) getPersonaMocion(id);
        retrieveMociones();
        retrievePersonas();
    }, [id]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonaMocion({ ...currentPersonaMocion, [name]: value });
    };

    const retrieveMociones = () => {
        MocionService.getAll()
            .then((response) => {
                setMociones(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const retrievePersonas = () => {
        PersonaService.getAll()
            .then((response) => {
                setPersonas(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    /* const updateMocion = () => {
         /* var data = {
              texto: currentMocion.texto,
              fecha: currentMocion.fecha,
          };
         PersonaMocionService.create(currentPersonaMocion.idPersona, currentPersonaMocion.idMosion)
             .then((response) => {
                 console.log(response.data);
                 setMessage("La mocion fue actualizada");
             })
             .catch((e) => {
                 console.log(e);
             });
     };*/

    const deletePersonaMocion = () => {
        console.log(currentPersonaMocion);
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
            {currentPersonaMocion ? (
                <div className="edit-form">
                    <h4>Mocion</h4>
                    <form>
                        <div className="form-group">
                            <select id="idMosion " class="form-select form-select-lg mb-3"
                                name="idMosion" onChange={handleInputChange}>
                                <option value="0" >
                                    Mociones
                                </option>

                                {mociones.map((mocion, index) => {
                                    return (
                                        <option default={mocion.id} key={index} value={mocion.id} >
                                            {mocion.texto}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>
                        <div className="form-group">
                            <select id="idPersona " class="form-select form-select-lg mb-3"
                                name="idPersona" onChange={handleInputChange}>
                                <option value="0" >
                                    Personas
                                </option>

                                {personas.map((persona, index) => {
                                    return (
                                        <option default={persona.id} key={index} value={persona.id} >
                                            {persona.nombre}
                                        </option>
                                    )
                                })}

                            </select>
                        </div>
                    </form>

                    <button className="btn btn-danger" onClick={deletePersonaMocion}>
                        Borrar
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
export default PersonaMocion;
