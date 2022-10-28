import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MocionDataService from "../mocion/services/MocionService"
import PersonaMocion from "./model/PersonaMocion";
import PersonaMocionDataService from "./services/PersonaMocionService";
import PersonaService from "../persona/services/PersonaService";

const AddPersonaMocion = () => {
    /*const initialPersonaMocionState = {
        id: null,
        persona: "",
        mocion: "", //no se este xd
        //fecha: "",
    };*/

    const initialPersonaMocionState = {
        idPersona: "",
        idMosion: ""
    }

    //  const [currentMocion, setCurrentMocion] = useState(initialIDState);
    // const [currentPersna, setCurrentPersona] = useState(initialIDState);
    const [mociones, setMociones] = useState([]);
    const [personas, setPersonas] = useState([]);
    const [currentPersonaMocion, setPersonaMocion] = useState(initialPersonaMocionState);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonaMocion({ ...currentPersonaMocion, [name]: value });
    };

    useEffect(() => {
        retrieveMociones();
        retrievePersonas();

    }, []);

    const retrieveMociones = () => {
        MocionDataService.getAll()
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

    const savePersonaMocion = () => {
        /* var data = {
             //id: mocion.id,
             texto: mocion.texto,
             fecha: mocion.fecha,
 
         };*/
        PersonaMocionDataService.create(currentPersonaMocion.idPersona, currentPersonaMocion.idMosion)
            .then((response) => {
                setPersonaMocion({
                    //  id: response.data.id,
                    persona: response.idPersona,
                    mocion: response.idMosion,
                    //tipoMocion: response.data.tipoMocion,
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const newMocion = () => {
        setPersonaMocion(initialPersonaMocionState);
        setSubmitted(false);
    };
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Almacenado Corretamente</h4>
                    <button className="btn btn-success" onClick={newMocion}>
                        Agregar
                    </button>
                </div>
            ) : (
                <div>

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
                    <button onClick={savePersonaMocion} className="btn btn-success">
                        Enviar
                    </button>
                </div>
            )}
        </div>
    );
};
export default AddPersonaMocion;
