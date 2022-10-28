import React, { useState, useEffect } from "react";
import PersonaMocionService from "./services/PersonaMocionService";
import { Link } from "react-router-dom";
const PersonaMocionList = () => {
    const [personaMocion, setPersonaMocion] = useState([]);
    const [currentPersonaMocion, setCurrentPersonaMocion] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrievePersonasMocion();
    }, []);

    const retrievePersonasMocion = () => {
        PersonaMocionService.getAll()
            .then((response) => {
                setPersonaMocion(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    const setActivePersonaMocion = (personamocion, index) => {
        setCurrentPersonaMocion(personamocion);
        setCurrentIndex(index);
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Lista de Personas-Mociones Salvadas</h4>
                <ul className="list-group">
                    {personaMocion &&
                        personaMocion.map((personamocion, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActivePersonaMocion(personamocion, index)}
                                key={index}
                            >
                                {personamocion.id}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="col-md-6">
                {currentPersonaMocion ? (
                    <div>
                        <h4>Persona-Mocion</h4>
                        <div>
                            <label>
                                <strong>Identificacion:</strong>
                            </label>{" "}
                            {currentPersonaMocion.persona.nombre}
                        </div>
                        <div>
                            <label>
                                <strong>Nombre:</strong>
                            </label>{" "}
                            {currentPersonaMocion.mocion.texto}
                        </div>
                        <Link to={"/persona_mocion/persona_mocion/" + currentPersonaMocion.id} className="btn-success">
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Escoja una persona...</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default PersonaMocionList;
