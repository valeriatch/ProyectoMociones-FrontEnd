import React, { useState, useEffect } from "react";
import PersonaDataService from "./services/PersonaService";
import PersonaMocionService from "./services/PersonaMocionService";
import { Link } from "react-router-dom";
const PersonaList = () => {
    const [personaMocion, setPersonaMocion] = useState([]);
    const [currentPersonaMocion, setCurrentPersonaMocion] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        retrievePersonasMocion();
    }, []);

    const retrievePersonasMocion = () => {
        PersonaMocionService.getAll()
            .then((response) => {
                setPersonas(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    /*
    const refreshList = () => {
      retrievePersonas();
      setCurrentPersona(null);
      setCurrentIndex(-1);
    };
    */

    /*let valores = mociones.map((mocion, index) => {
       return (
         console.log(mocion),
         <Dropdown.Item key={index} value={mocion.id}>
           {mocion.texto}
         </Dropdown.Item>
       );
   
     }, this);*/

    const setActivePersonaMocion = (personaMocion, index) => {
        setCurrentPersona(personaMocion);
        setCurrentIndex(index);
    };

    return (
        <div className="list row">
            <div className="col-md-6">
                <h4>Lista de Personas</h4>
                <ul className="list-group">
                    {personaMocion &&
                        personaMocion.map((personaMocion, index) => (
                            <li
                                className={
                                    "list-group-item " + (index === currentIndex ? "active" : "")
                                }
                                onClick={() => setActivePersonaMocion(personaMocion, index)}
                                key={index}
                            >
                                {personaMocion.id}
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
                            {currentPersonaMocion.id}
                        </div>
                        <div>
                            <label>
                                <strong>Nombre:</strong>
                            </label>{" "}
                            {currentPersona.nombre}
                        </div>
                        <Link to={"/persona_mocion/personas/" + currentPersona.id} className="btn-success">
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
export default PersonaList;
